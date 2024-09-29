function LP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Ih=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function R0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function MP(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var A0={exports:{}},hc={},C0={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),VP=Symbol.for("react.portal"),UP=Symbol.for("react.fragment"),FP=Symbol.for("react.strict_mode"),jP=Symbol.for("react.profiler"),$P=Symbol.for("react.provider"),zP=Symbol.for("react.context"),BP=Symbol.for("react.forward_ref"),HP=Symbol.for("react.suspense"),WP=Symbol.for("react.memo"),qP=Symbol.for("react.lazy"),ly=Symbol.iterator;function KP(t){return t===null||typeof t!="object"?null:(t=ly&&t[ly]||t["@@iterator"],typeof t=="function"?t:null)}var x0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k0=Object.assign,b0={};function zs(t,e,n){this.props=t,this.context=e,this.refs=b0,this.updater=n||x0}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function O0(){}O0.prototype=zs.prototype;function tp(t,e,n){this.props=t,this.context=e,this.refs=b0,this.updater=n||x0}var np=tp.prototype=new O0;np.constructor=tp;k0(np,zs.prototype);np.isPureReactComponent=!0;var uy=Array.isArray,N0=Object.prototype.hasOwnProperty,rp={current:null},D0={key:!0,ref:!0,__self:!0,__source:!0};function L0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)N0.call(e,r)&&!D0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Oa,type:t,key:s,ref:o,props:i,_owner:rp.current}}function GP(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ip(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function QP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cy=/\/+/g;function Sh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?QP(""+t.key):e.toString(36)}function Hl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oa:case VP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sh(o,0):r,uy(i)?(n="",t!=null&&(n=t.replace(cy,"$&/")+"/"),Hl(i,e,n,"",function(c){return c})):i!=null&&(ip(i)&&(i=GP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",uy(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Sh(s,l);o+=Hl(s,e,n,u,i)}else if(u=KP(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Sh(s,l++),o+=Hl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _l(t,e,n){if(t==null)return t;var r=[],i=0;return Hl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function YP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Wl={transition:null},XP={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:rp};function M0(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:_l,forEach:function(t,e,n){_l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _l(t,function(){e++}),e},toArray:function(t){return _l(t,function(e){return e})||[]},only:function(t){if(!ip(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=zs;ne.Fragment=UP;ne.Profiler=jP;ne.PureComponent=tp;ne.StrictMode=FP;ne.Suspense=HP;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XP;ne.act=M0;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=k0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)N0.call(e,u)&&!D0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Oa,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:zP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$P,_context:t},t.Consumer=t};ne.createElement=L0;ne.createFactory=function(t){var e=L0.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:BP,render:t}};ne.isValidElement=ip;ne.lazy=function(t){return{$$typeof:qP,_payload:{_status:-1,_result:t},_init:YP}};ne.memo=function(t,e){return{$$typeof:WP,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};ne.unstable_act=M0;ne.useCallback=function(t,e){return Nt.current.useCallback(t,e)};ne.useContext=function(t){return Nt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return Nt.current.useEffect(t,e)};ne.useId=function(){return Nt.current.useId()};ne.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Nt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};ne.useRef=function(t){return Nt.current.useRef(t)};ne.useState=function(t){return Nt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return Nt.current.useTransition()};ne.version="18.3.1";C0.exports=ne;var z=C0.exports;const _i=R0(z),Ed=LP({__proto__:null,default:_i},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JP=z,ZP=Symbol.for("react.element"),eR=Symbol.for("react.fragment"),tR=Object.prototype.hasOwnProperty,nR=JP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rR={key:!0,ref:!0,__self:!0,__source:!0};function V0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)tR.call(e,r)&&!rR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ZP,type:t,key:s,ref:o,props:i,_owner:nR.current}}hc.Fragment=eR;hc.jsx=V0;hc.jsxs=V0;A0.exports=hc;var A=A0.exports,U0={exports:{}},en={},F0={exports:{}},j0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,K){var Q=$.length;$.push(K);e:for(;0<Q;){var oe=Q-1>>>1,ee=$[oe];if(0<i(ee,K))$[oe]=K,$[Q]=ee,Q=oe;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],Q=$.pop();if(Q!==K){$[0]=Q;e:for(var oe=0,ee=$.length,ce=ee>>>1;oe<ce;){var ft=2*(oe+1)-1,Ke=$[ft],ze=ft+1,Ze=$[ze];if(0>i(Ke,Q))ze<ee&&0>i(Ze,Ke)?($[oe]=Ze,$[ze]=Q,oe=ze):($[oe]=Ke,$[ft]=Q,oe=ft);else if(ze<ee&&0>i(Ze,Q))$[oe]=Ze,$[ze]=Q,oe=ze;else break e}}return K}function i($,K){var Q=$.sortIndex-K.sortIndex;return Q!==0?Q:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,v=!1,S=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T($){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=$)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function O($){if(x=!1,T($),!S)if(n(u)!==null)S=!0,Sn(M);else{var K=n(c);K!==null&&Je(O,K.startTime-$)}}function M($,K){S=!1,x&&(x=!1,E(y),y=-1),v=!0;var Q=m;try{for(T(K),p=n(u);p!==null&&(!(p.expirationTime>K)||$&&!k());){var oe=p.callback;if(typeof oe=="function"){p.callback=null,m=p.priorityLevel;var ee=oe(p.expirationTime<=K);K=t.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(u)&&r(u),T(K)}else r(u);p=n(u)}if(p!==null)var ce=!0;else{var ft=n(c);ft!==null&&Je(O,ft.startTime-K),ce=!1}return ce}finally{p=null,m=Q,v=!1}}var L=!1,w=null,y=-1,I=5,P=-1;function k(){return!(t.unstable_now()-P<I)}function b(){if(w!==null){var $=t.unstable_now();P=$;var K=!0;try{K=w(!0,$)}finally{K?R():(L=!1,w=null)}}else L=!1}var R;if(typeof _=="function")R=function(){_(b)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,qe=dt.port2;dt.port1.onmessage=b,R=function(){qe.postMessage(null)}}else R=function(){C(b,0)};function Sn($){w=$,L||(L=!0,R())}function Je($,K){y=C(function(){$(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){S||v||(S=!0,Sn(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var Q=m;m=K;try{return $()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=m;m=$;try{return K()}finally{m=Q}},t.unstable_scheduleCallback=function($,K,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,$){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=Q+ee,$={id:d++,callback:K,priorityLevel:$,startTime:Q,expirationTime:ee,sortIndex:-1},Q>oe?($.sortIndex=Q,e(c,$),n(u)===null&&$===n(c)&&(x?(E(y),y=-1):x=!0,Je(O,Q-oe))):($.sortIndex=ee,e(u,$),S||v||(S=!0,Sn(M))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var K=m;return function(){var Q=m;m=K;try{return $.apply(this,arguments)}finally{m=Q}}}})(j0);F0.exports=j0;var iR=F0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sR=z,Zt=iR;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $0=new Set,na={};function ki(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(na[t]=e,t=0;t<e.length;t++)$0.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Td=Object.prototype.hasOwnProperty,oR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hy={},dy={};function aR(t){return Td.call(dy,t)?!0:Td.call(hy,t)?!1:oR.test(t)?dy[t]=!0:(hy[t]=!0,!1)}function lR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uR(t,e,n,r){if(e===null||typeof e>"u"||lR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var sp=/[\-:]([a-z])/g;function op(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sp,op);ut[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sp,op);ut[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sp,op);ut[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ap(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uR(e,n,i,r)&&(n=null),r||i===null?aR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var hr=sR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vl=Symbol.for("react.element"),Ji=Symbol.for("react.portal"),Zi=Symbol.for("react.fragment"),lp=Symbol.for("react.strict_mode"),Id=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),B0=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),cp=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),H0=Symbol.for("react.offscreen"),fy=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=fy&&t[fy]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Ph;function Co(t){if(Ph===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ph=e&&e[1]||""}return`
`+Ph+t}var Rh=!1;function Ah(t,e){if(!t||Rh)return"";Rh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Rh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Co(t):""}function cR(t){switch(t.tag){case 5:return Co(t.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return t=Ah(t.type,!1),t;case 11:return t=Ah(t.type.render,!1),t;case 1:return t=Ah(t.type,!0),t;default:return""}}function Rd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zi:return"Fragment";case Ji:return"Portal";case Id:return"Profiler";case lp:return"StrictMode";case Sd:return"Suspense";case Pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B0:return(t.displayName||"Context")+".Consumer";case z0:return(t._context.displayName||"Context")+".Provider";case up:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cp:return e=t.displayName||null,e!==null?e:Rd(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return Rd(t(e))}catch{}}return null}function hR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rd(e);case 8:return e===lp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dR(t){var e=W0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wl(t){t._valueTracker||(t._valueTracker=dR(t))}function q0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=W0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ad(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function py(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function K0(t,e){e=e.checked,e!=null&&ap(t,"checked",e,!1)}function Cd(t,e){K0(t,e);var n=$r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&xd(t,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function my(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xd(t,e,n){(e!=="number"||yu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xo=Array.isArray;function hs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(xo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$r(n)}}function G0(t,e){var n=$r(e.value),r=$r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Q0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Q0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var El,Y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(El=El||document.createElement("div"),El.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=El.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fR=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(t){fR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Uo[e]=Uo[t]})});function X0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Uo.hasOwnProperty(t)&&Uo[t]?(""+e).trim():e+"px"}function J0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=X0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pR=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Od(t,e){if(e){if(pR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dd=null;function hp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ld=null,ds=null,fs=null;function _y(t){if(t=La(t)){if(typeof Ld!="function")throw Error(F(280));var e=t.stateNode;e&&(e=gc(e),Ld(t.stateNode,t.type,e))}}function Z0(t){ds?fs?fs.push(t):fs=[t]:ds=t}function ew(){if(ds){var t=ds,e=fs;if(fs=ds=null,_y(t),e)for(t=0;t<e.length;t++)_y(e[t])}}function tw(t,e){return t(e)}function nw(){}var Ch=!1;function rw(t,e,n){if(Ch)return t(e,n);Ch=!0;try{return tw(t,e,n)}finally{Ch=!1,(ds!==null||fs!==null)&&(nw(),ew())}}function ia(t,e){var n=t.stateNode;if(n===null)return null;var r=gc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Md=!1;if(rr)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Md=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Md=!1}function mR(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Fo=!1,_u=null,vu=!1,Vd=null,gR={onError:function(t){Fo=!0,_u=t}};function yR(t,e,n,r,i,s,o,l,u){Fo=!1,_u=null,mR.apply(gR,arguments)}function _R(t,e,n,r,i,s,o,l,u){if(yR.apply(this,arguments),Fo){if(Fo){var c=_u;Fo=!1,_u=null}else throw Error(F(198));vu||(vu=!0,Vd=c)}}function bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function iw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vy(t){if(bi(t)!==t)throw Error(F(188))}function vR(t){var e=t.alternate;if(!e){if(e=bi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vy(i),t;if(s===r)return vy(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function sw(t){return t=vR(t),t!==null?ow(t):null}function ow(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ow(t);if(e!==null)return e;t=t.sibling}return null}var aw=Zt.unstable_scheduleCallback,wy=Zt.unstable_cancelCallback,wR=Zt.unstable_shouldYield,ER=Zt.unstable_requestPaint,Le=Zt.unstable_now,TR=Zt.unstable_getCurrentPriorityLevel,dp=Zt.unstable_ImmediatePriority,lw=Zt.unstable_UserBlockingPriority,wu=Zt.unstable_NormalPriority,IR=Zt.unstable_LowPriority,uw=Zt.unstable_IdlePriority,dc=null,bn=null;function SR(t){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(dc,t,void 0,(t.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:AR,PR=Math.log,RR=Math.LN2;function AR(t){return t>>>=0,t===0?32:31-(PR(t)/RR|0)|0}var Tl=64,Il=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ko(l):(s&=o,s!==0&&(r=ko(s)))}else o=n&~i,o!==0?r=ko(o):s!==0&&(r=ko(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_n(e),i=1<<n,r|=t[n],e&=~i;return r}function CR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_n(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=CR(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ud(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cw(){var t=Tl;return Tl<<=1,!(Tl&4194240)&&(Tl=64),t}function xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_n(e),t[e]=n}function kR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function fp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function hw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dw,pp,fw,pw,mw,Fd=!1,Sl=[],kr=null,br=null,Or=null,sa=new Map,oa=new Map,wr=[],bR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ey(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(e.pointerId)}}function _o(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=La(e),e!==null&&pp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function OR(t,e,n,r,i){switch(e){case"focusin":return kr=_o(kr,t,e,n,r,i),!0;case"dragenter":return br=_o(br,t,e,n,r,i),!0;case"mouseover":return Or=_o(Or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return sa.set(s,_o(sa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oa.set(s,_o(oa.get(s)||null,t,e,n,r,i)),!0}return!1}function gw(t){var e=ri(t.target);if(e!==null){var n=bi(e);if(n!==null){if(e=n.tag,e===13){if(e=iw(n),e!==null){t.blockedOn=e,mw(t.priority,function(){fw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dd=r,n.target.dispatchEvent(r),Dd=null}else return e=La(n),e!==null&&pp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ty(t,e,n){ql(t)&&n.delete(e)}function NR(){Fd=!1,kr!==null&&ql(kr)&&(kr=null),br!==null&&ql(br)&&(br=null),Or!==null&&ql(Or)&&(Or=null),sa.forEach(Ty),oa.forEach(Ty)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,Fd||(Fd=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,NR)))}function aa(t){function e(i){return vo(i,t)}if(0<Sl.length){vo(Sl[0],t);for(var n=1;n<Sl.length;n++){var r=Sl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kr!==null&&vo(kr,t),br!==null&&vo(br,t),Or!==null&&vo(Or,t),sa.forEach(e),oa.forEach(e),n=0;n<wr.length;n++)r=wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)gw(n),n.blockedOn===null&&wr.shift()}var ps=hr.ReactCurrentBatchConfig,Tu=!0;function DR(t,e,n,r){var i=fe,s=ps.transition;ps.transition=null;try{fe=1,mp(t,e,n,r)}finally{fe=i,ps.transition=s}}function LR(t,e,n,r){var i=fe,s=ps.transition;ps.transition=null;try{fe=4,mp(t,e,n,r)}finally{fe=i,ps.transition=s}}function mp(t,e,n,r){if(Tu){var i=jd(t,e,n,r);if(i===null)Fh(t,e,r,Iu,n),Ey(t,r);else if(OR(i,t,e,n,r))r.stopPropagation();else if(Ey(t,r),e&4&&-1<bR.indexOf(t)){for(;i!==null;){var s=La(i);if(s!==null&&dw(s),s=jd(t,e,n,r),s===null&&Fh(t,e,r,Iu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fh(t,e,r,null,n)}}var Iu=null;function jd(t,e,n,r){if(Iu=null,t=hp(r),t=ri(t),t!==null)if(e=bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=iw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Iu=t,null}function yw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TR()){case dp:return 1;case lw:return 4;case wu:case IR:return 16;case uw:return 536870912;default:return 16}default:return 16}}var Rr=null,gp=null,Kl=null;function _w(){if(Kl)return Kl;var t,e=gp,n=e.length,r,i="value"in Rr?Rr.value:Rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Kl=i.slice(t,1<r?1-r:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function Iy(){return!1}function tn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pl:Iy,this.isPropagationStopped=Iy,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),e}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yp=tn(Bs),Da=Ae({},Bs,{view:0,detail:0}),MR=tn(Da),kh,bh,wo,fc=Ae({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(kh=t.screenX-wo.screenX,bh=t.screenY-wo.screenY):bh=kh=0,wo=t),kh)},movementY:function(t){return"movementY"in t?t.movementY:bh}}),Sy=tn(fc),VR=Ae({},fc,{dataTransfer:0}),UR=tn(VR),FR=Ae({},Da,{relatedTarget:0}),Oh=tn(FR),jR=Ae({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),$R=tn(jR),zR=Ae({},Bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BR=tn(zR),HR=Ae({},Bs,{data:0}),Py=tn(HR),WR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KR[t])?!!e[t]:!1}function _p(){return GR}var QR=Ae({},Da,{key:function(t){if(t.key){var e=WR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_p,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YR=tn(QR),XR=Ae({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ry=tn(XR),JR=Ae({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_p}),ZR=tn(JR),eA=Ae({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),tA=tn(eA),nA=Ae({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rA=tn(nA),iA=[9,13,27,32],vp=rr&&"CompositionEvent"in window,jo=null;rr&&"documentMode"in document&&(jo=document.documentMode);var sA=rr&&"TextEvent"in window&&!jo,vw=rr&&(!vp||jo&&8<jo&&11>=jo),Ay=" ",Cy=!1;function ww(t,e){switch(t){case"keyup":return iA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ew(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function oA(t,e){switch(t){case"compositionend":return Ew(e);case"keypress":return e.which!==32?null:(Cy=!0,Ay);case"textInput":return t=e.data,t===Ay&&Cy?null:t;default:return null}}function aA(t,e){if(es)return t==="compositionend"||!vp&&ww(t,e)?(t=_w(),Kl=gp=Rr=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vw&&e.locale!=="ko"?null:e.data;default:return null}}var lA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lA[t.type]:e==="textarea"}function Tw(t,e,n,r){Z0(r),e=Su(e,"onChange"),0<e.length&&(n=new yp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $o=null,la=null;function uA(t){Nw(t,0)}function pc(t){var e=rs(t);if(q0(e))return t}function cA(t,e){if(t==="change")return e}var Iw=!1;if(rr){var Nh;if(rr){var Dh="oninput"in document;if(!Dh){var ky=document.createElement("div");ky.setAttribute("oninput","return;"),Dh=typeof ky.oninput=="function"}Nh=Dh}else Nh=!1;Iw=Nh&&(!document.documentMode||9<document.documentMode)}function by(){$o&&($o.detachEvent("onpropertychange",Sw),la=$o=null)}function Sw(t){if(t.propertyName==="value"&&pc(la)){var e=[];Tw(e,la,t,hp(t)),rw(uA,e)}}function hA(t,e,n){t==="focusin"?(by(),$o=e,la=n,$o.attachEvent("onpropertychange",Sw)):t==="focusout"&&by()}function dA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(la)}function fA(t,e){if(t==="click")return pc(e)}function pA(t,e){if(t==="input"||t==="change")return pc(e)}function mA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:mA;function ua(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Td.call(e,i)||!Tn(t[i],e[i]))return!1}return!0}function Oy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ny(t,e){var n=Oy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oy(n)}}function Pw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rw(){for(var t=window,e=yu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yu(t.document)}return e}function wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gA(t){var e=Rw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pw(n.ownerDocument.documentElement,n)){if(r!==null&&wp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ny(n,s);var o=Ny(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yA=rr&&"documentMode"in document&&11>=document.documentMode,ts=null,$d=null,zo=null,zd=!1;function Dy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zd||ts==null||ts!==yu(r)||(r=ts,"selectionStart"in r&&wp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&ua(zo,r)||(zo=r,r=Su($d,"onSelect"),0<r.length&&(e=new yp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ts)))}function Rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Lh={},Aw={};rr&&(Aw=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function mc(t){if(Lh[t])return Lh[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Aw)return Lh[t]=e[n];return t}var Cw=mc("animationend"),xw=mc("animationiteration"),kw=mc("animationstart"),bw=mc("transitionend"),Ow=new Map,Ly="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(t,e){Ow.set(t,e),ki(e,[t])}for(var Mh=0;Mh<Ly.length;Mh++){var Vh=Ly[Mh],_A=Vh.toLowerCase(),vA=Vh[0].toUpperCase()+Vh.slice(1);Kr(_A,"on"+vA)}Kr(Cw,"onAnimationEnd");Kr(xw,"onAnimationIteration");Kr(kw,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr(bw,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wA=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function My(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_R(r,e,void 0,t),t.currentTarget=null}function Nw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;My(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;My(i,l,c),s=u}}}if(vu)throw t=Vd,vu=!1,Vd=null,t}function ve(t,e){var n=e[Kd];n===void 0&&(n=e[Kd]=new Set);var r=t+"__bubble";n.has(r)||(Dw(e,t,2,!1),n.add(r))}function Uh(t,e,n){var r=0;e&&(r|=4),Dw(n,t,r,e)}var Al="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[Al]){t[Al]=!0,$0.forEach(function(n){n!=="selectionchange"&&(wA.has(n)||Uh(n,!1,t),Uh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Al]||(e[Al]=!0,Uh("selectionchange",!1,e))}}function Dw(t,e,n,r){switch(yw(e)){case 1:var i=DR;break;case 4:i=LR;break;default:i=mp}n=i.bind(null,e,n,t),i=void 0,!Md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ri(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}rw(function(){var c=s,d=hp(n),p=[];e:{var m=Ow.get(t);if(m!==void 0){var v=yp,S=t;switch(t){case"keypress":if(Gl(n)===0)break e;case"keydown":case"keyup":v=YR;break;case"focusin":S="focus",v=Oh;break;case"focusout":S="blur",v=Oh;break;case"beforeblur":case"afterblur":v=Oh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Sy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=UR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ZR;break;case Cw:case xw:case kw:v=$R;break;case bw:v=tA;break;case"scroll":v=MR;break;case"wheel":v=rA;break;case"copy":case"cut":case"paste":v=BR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ry}var x=(e&4)!==0,C=!x&&t==="scroll",E=x?m!==null?m+"Capture":null:m;x=[];for(var _=c,T;_!==null;){T=_;var O=T.stateNode;if(T.tag===5&&O!==null&&(T=O,E!==null&&(O=ia(_,E),O!=null&&x.push(ha(_,O,T)))),C)break;_=_.return}0<x.length&&(m=new v(m,S,null,n,d),p.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Dd&&(S=n.relatedTarget||n.fromElement)&&(ri(S)||S[ir]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=c,S=S?ri(S):null,S!==null&&(C=bi(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=c),v!==S)){if(x=Sy,O="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Ry,O="onPointerLeave",E="onPointerEnter",_="pointer"),C=v==null?m:rs(v),T=S==null?m:rs(S),m=new x(O,_+"leave",v,n,d),m.target=C,m.relatedTarget=T,O=null,ri(d)===c&&(x=new x(E,_+"enter",S,n,d),x.target=T,x.relatedTarget=C,O=x),C=O,v&&S)t:{for(x=v,E=S,_=0,T=x;T;T=$i(T))_++;for(T=0,O=E;O;O=$i(O))T++;for(;0<_-T;)x=$i(x),_--;for(;0<T-_;)E=$i(E),T--;for(;_--;){if(x===E||E!==null&&x===E.alternate)break t;x=$i(x),E=$i(E)}x=null}else x=null;v!==null&&Vy(p,m,v,x,!1),S!==null&&C!==null&&Vy(p,C,S,x,!0)}}e:{if(m=c?rs(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var M=cA;else if(xy(m))if(Iw)M=pA;else{M=dA;var L=hA}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=fA);if(M&&(M=M(t,c))){Tw(p,M,n,d);break e}L&&L(t,m,c),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&xd(m,"number",m.value)}switch(L=c?rs(c):window,t){case"focusin":(xy(L)||L.contentEditable==="true")&&(ts=L,$d=c,zo=null);break;case"focusout":zo=$d=ts=null;break;case"mousedown":zd=!0;break;case"contextmenu":case"mouseup":case"dragend":zd=!1,Dy(p,n,d);break;case"selectionchange":if(yA)break;case"keydown":case"keyup":Dy(p,n,d)}var w;if(vp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else es?ww(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(vw&&n.locale!=="ko"&&(es||y!=="onCompositionStart"?y==="onCompositionEnd"&&es&&(w=_w()):(Rr=d,gp="value"in Rr?Rr.value:Rr.textContent,es=!0)),L=Su(c,y),0<L.length&&(y=new Py(y,t,null,n,d),p.push({event:y,listeners:L}),w?y.data=w:(w=Ew(n),w!==null&&(y.data=w)))),(w=sA?oA(t,n):aA(t,n))&&(c=Su(c,"onBeforeInput"),0<c.length&&(d=new Py("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=w))}Nw(p,e)})}function ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Su(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ia(t,n),s!=null&&r.unshift(ha(t,s,i)),s=ia(t,e),s!=null&&r.push(ha(t,s,i))),t=t.return}return r}function $i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ia(n,s),u!=null&&o.unshift(ha(n,u,l))):i||(u=ia(n,s),u!=null&&o.push(ha(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var EA=/\r\n?/g,TA=/\u0000|\uFFFD/g;function Uy(t){return(typeof t=="string"?t:""+t).replace(EA,`
`).replace(TA,"")}function Cl(t,e,n){if(e=Uy(e),Uy(t)!==e&&n)throw Error(F(425))}function Pu(){}var Bd=null,Hd=null;function Wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qd=typeof setTimeout=="function"?setTimeout:void 0,IA=typeof clearTimeout=="function"?clearTimeout:void 0,Fy=typeof Promise=="function"?Promise:void 0,SA=typeof queueMicrotask=="function"?queueMicrotask:typeof Fy<"u"?function(t){return Fy.resolve(null).then(t).catch(PA)}:qd;function PA(t){setTimeout(function(){throw t})}function jh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),aa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);aa(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),xn="__reactFiber$"+Hs,da="__reactProps$"+Hs,ir="__reactContainer$"+Hs,Kd="__reactEvents$"+Hs,RA="__reactListeners$"+Hs,AA="__reactHandles$"+Hs;function ri(t){var e=t[xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ir]||n[xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jy(t);t!==null;){if(n=t[xn])return n;t=jy(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[xn]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function gc(t){return t[da]||null}var Gd=[],is=-1;function Gr(t){return{current:t}}function Te(t){0>is||(t.current=Gd[is],Gd[is]=null,is--)}function ge(t,e){is++,Gd[is]=t.current,t.current=e}var zr={},St=Gr(zr),zt=Gr(!1),vi=zr;function Ts(t,e){var n=t.type.contextTypes;if(!n)return zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Bt(t){return t=t.childContextTypes,t!=null}function Ru(){Te(zt),Te(St)}function $y(t,e,n){if(St.current!==zr)throw Error(F(168));ge(St,e),ge(zt,n)}function Lw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,hR(t)||"Unknown",i));return Ae({},n,r)}function Au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,vi=St.current,ge(St,t),ge(zt,zt.current),!0}function zy(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Lw(t,e,vi),r.__reactInternalMemoizedMergedChildContext=t,Te(zt),Te(St),ge(St,t)):Te(zt),ge(zt,n)}var qn=null,yc=!1,$h=!1;function Mw(t){qn===null?qn=[t]:qn.push(t)}function CA(t){yc=!0,Mw(t)}function Qr(){if(!$h&&qn!==null){$h=!0;var t=0,e=fe;try{var n=qn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,yc=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),aw(dp,Qr),i}finally{fe=e,$h=!1}}return null}var ss=[],os=0,Cu=null,xu=0,rn=[],sn=0,wi=null,Gn=1,Qn="";function ei(t,e){ss[os++]=xu,ss[os++]=Cu,Cu=t,xu=e}function Vw(t,e,n){rn[sn++]=Gn,rn[sn++]=Qn,rn[sn++]=wi,wi=t;var r=Gn;t=Qn;var i=32-_n(r)-1;r&=~(1<<i),n+=1;var s=32-_n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-_n(e)+i|n<<i|r,Qn=s+t}else Gn=1<<s|n<<i|r,Qn=t}function Ep(t){t.return!==null&&(ei(t,1),Vw(t,1,0))}function Tp(t){for(;t===Cu;)Cu=ss[--os],ss[os]=null,xu=ss[--os],ss[os]=null;for(;t===wi;)wi=rn[--sn],rn[sn]=null,Qn=rn[--sn],rn[sn]=null,Gn=rn[--sn],rn[sn]=null}var Xt=null,Qt=null,Se=!1,gn=null;function Uw(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function By(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xt=t,Qt=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xt=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wi!==null?{id:Gn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xt=t,Qt=null,!0):!1;default:return!1}}function Qd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yd(t){if(Se){var e=Qt;if(e){var n=e;if(!By(t,e)){if(Qd(t))throw Error(F(418));e=Nr(n.nextSibling);var r=Xt;e&&By(t,e)?Uw(r,n):(t.flags=t.flags&-4097|2,Se=!1,Xt=t)}}else{if(Qd(t))throw Error(F(418));t.flags=t.flags&-4097|2,Se=!1,Xt=t}}}function Hy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xt=t}function xl(t){if(t!==Xt)return!1;if(!Se)return Hy(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wd(t.type,t.memoizedProps)),e&&(e=Qt)){if(Qd(t))throw Fw(),Error(F(418));for(;e;)Uw(t,e),e=Nr(e.nextSibling)}if(Hy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=Xt?Nr(t.stateNode.nextSibling):null;return!0}function Fw(){for(var t=Qt;t;)t=Nr(t.nextSibling)}function Is(){Qt=Xt=null,Se=!1}function Ip(t){gn===null?gn=[t]:gn.push(t)}var xA=hr.ReactCurrentBatchConfig;function Eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function kl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wy(t){var e=t._init;return e(t._payload)}function jw(t){function e(E,_){if(t){var T=E.deletions;T===null?(E.deletions=[_],E.flags|=16):T.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=Vr(E,_),E.index=0,E.sibling=null,E}function s(E,_,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<_?(E.flags|=2,_):T):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,_,T,O){return _===null||_.tag!==6?(_=Gh(T,E.mode,O),_.return=E,_):(_=i(_,T),_.return=E,_)}function u(E,_,T,O){var M=T.type;return M===Zi?d(E,_,T.props.children,O,T.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_r&&Wy(M)===_.type)?(O=i(_,T.props),O.ref=Eo(E,_,T),O.return=E,O):(O=tu(T.type,T.key,T.props,null,E.mode,O),O.ref=Eo(E,_,T),O.return=E,O)}function c(E,_,T,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Qh(T,E.mode,O),_.return=E,_):(_=i(_,T.children||[]),_.return=E,_)}function d(E,_,T,O,M){return _===null||_.tag!==7?(_=ci(T,E.mode,O,M),_.return=E,_):(_=i(_,T),_.return=E,_)}function p(E,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Gh(""+_,E.mode,T),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case vl:return T=tu(_.type,_.key,_.props,null,E.mode,T),T.ref=Eo(E,null,_),T.return=E,T;case Ji:return _=Qh(_,E.mode,T),_.return=E,_;case _r:var O=_._init;return p(E,O(_._payload),T)}if(xo(_)||go(_))return _=ci(_,E.mode,T,null),_.return=E,_;kl(E,_)}return null}function m(E,_,T,O){var M=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return M!==null?null:l(E,_,""+T,O);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case vl:return T.key===M?u(E,_,T,O):null;case Ji:return T.key===M?c(E,_,T,O):null;case _r:return M=T._init,m(E,_,M(T._payload),O)}if(xo(T)||go(T))return M!==null?null:d(E,_,T,O,null);kl(E,T)}return null}function v(E,_,T,O,M){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(T)||null,l(_,E,""+O,M);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case vl:return E=E.get(O.key===null?T:O.key)||null,u(_,E,O,M);case Ji:return E=E.get(O.key===null?T:O.key)||null,c(_,E,O,M);case _r:var L=O._init;return v(E,_,T,L(O._payload),M)}if(xo(O)||go(O))return E=E.get(T)||null,d(_,E,O,M,null);kl(_,O)}return null}function S(E,_,T,O){for(var M=null,L=null,w=_,y=_=0,I=null;w!==null&&y<T.length;y++){w.index>y?(I=w,w=null):I=w.sibling;var P=m(E,w,T[y],O);if(P===null){w===null&&(w=I);break}t&&w&&P.alternate===null&&e(E,w),_=s(P,_,y),L===null?M=P:L.sibling=P,L=P,w=I}if(y===T.length)return n(E,w),Se&&ei(E,y),M;if(w===null){for(;y<T.length;y++)w=p(E,T[y],O),w!==null&&(_=s(w,_,y),L===null?M=w:L.sibling=w,L=w);return Se&&ei(E,y),M}for(w=r(E,w);y<T.length;y++)I=v(w,E,y,T[y],O),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?y:I.key),_=s(I,_,y),L===null?M=I:L.sibling=I,L=I);return t&&w.forEach(function(k){return e(E,k)}),Se&&ei(E,y),M}function x(E,_,T,O){var M=go(T);if(typeof M!="function")throw Error(F(150));if(T=M.call(T),T==null)throw Error(F(151));for(var L=M=null,w=_,y=_=0,I=null,P=T.next();w!==null&&!P.done;y++,P=T.next()){w.index>y?(I=w,w=null):I=w.sibling;var k=m(E,w,P.value,O);if(k===null){w===null&&(w=I);break}t&&w&&k.alternate===null&&e(E,w),_=s(k,_,y),L===null?M=k:L.sibling=k,L=k,w=I}if(P.done)return n(E,w),Se&&ei(E,y),M;if(w===null){for(;!P.done;y++,P=T.next())P=p(E,P.value,O),P!==null&&(_=s(P,_,y),L===null?M=P:L.sibling=P,L=P);return Se&&ei(E,y),M}for(w=r(E,w);!P.done;y++,P=T.next())P=v(w,E,y,P.value,O),P!==null&&(t&&P.alternate!==null&&w.delete(P.key===null?y:P.key),_=s(P,_,y),L===null?M=P:L.sibling=P,L=P);return t&&w.forEach(function(b){return e(E,b)}),Se&&ei(E,y),M}function C(E,_,T,O){if(typeof T=="object"&&T!==null&&T.type===Zi&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case vl:e:{for(var M=T.key,L=_;L!==null;){if(L.key===M){if(M=T.type,M===Zi){if(L.tag===7){n(E,L.sibling),_=i(L,T.props.children),_.return=E,E=_;break e}}else if(L.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_r&&Wy(M)===L.type){n(E,L.sibling),_=i(L,T.props),_.ref=Eo(E,L,T),_.return=E,E=_;break e}n(E,L);break}else e(E,L);L=L.sibling}T.type===Zi?(_=ci(T.props.children,E.mode,O,T.key),_.return=E,E=_):(O=tu(T.type,T.key,T.props,null,E.mode,O),O.ref=Eo(E,_,T),O.return=E,E=O)}return o(E);case Ji:e:{for(L=T.key;_!==null;){if(_.key===L)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(E,_.sibling),_=i(_,T.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Qh(T,E.mode,O),_.return=E,E=_}return o(E);case _r:return L=T._init,C(E,_,L(T._payload),O)}if(xo(T))return S(E,_,T,O);if(go(T))return x(E,_,T,O);kl(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,T),_.return=E,E=_):(n(E,_),_=Gh(T,E.mode,O),_.return=E,E=_),o(E)):n(E,_)}return C}var Ss=jw(!0),$w=jw(!1),ku=Gr(null),bu=null,as=null,Sp=null;function Pp(){Sp=as=bu=null}function Rp(t){var e=ku.current;Te(ku),t._currentValue=e}function Xd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){bu=t,Sp=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(Sp!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(bu===null)throw Error(F(308));as=t,bu.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var ii=null;function Ap(t){ii===null?ii=[t]:ii.push(t)}function zw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ap(e)):(n.next=i.next,i.next=n),e.interleaved=n,sr(t,r)}function sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function Cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,sr(t,n)}return i=r.interleaved,i===null?(e.next=e,Ap(r)):(e.next=i.next,i.next=e),r.interleaved=e,sr(t,n)}function Ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fp(t,n)}}function qy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ou(t,e,n,r){var i=t.updateQueue;vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,v=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,x=l;switch(m=e,v=n,x.tag){case 1:if(S=x.payload,typeof S=="function"){p=S.call(v,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,m=typeof S=="function"?S.call(v,p,m):S,m==null)break e;p=Ae({},p,m);break e;case 2:vr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ti|=o,t.lanes=o,t.memoizedState=p}}function Ky(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Ma={},On=Gr(Ma),fa=Gr(Ma),pa=Gr(Ma);function si(t){if(t===Ma)throw Error(F(174));return t}function xp(t,e){switch(ge(pa,e),ge(fa,t),ge(On,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bd(e,t)}Te(On),ge(On,e)}function Ps(){Te(On),Te(fa),Te(pa)}function Hw(t){si(pa.current);var e=si(On.current),n=bd(e,t.type);e!==n&&(ge(fa,t),ge(On,n))}function kp(t){fa.current===t&&(Te(On),Te(fa))}var Pe=Gr(0);function Nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zh=[];function bp(){for(var t=0;t<zh.length;t++)zh[t]._workInProgressVersionPrimary=null;zh.length=0}var Yl=hr.ReactCurrentDispatcher,Bh=hr.ReactCurrentBatchConfig,Ei=0,Re=null,He=null,Qe=null,Du=!1,Bo=!1,ma=0,kA=0;function yt(){throw Error(F(321))}function Op(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function Np(t,e,n,r,i,s){if(Ei=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yl.current=t===null||t.memoizedState===null?DA:LA,t=n(r,i),Bo){s=0;do{if(Bo=!1,ma=0,25<=s)throw Error(F(301));s+=1,Qe=He=null,e.updateQueue=null,Yl.current=MA,t=n(r,i)}while(Bo)}if(Yl.current=Lu,e=He!==null&&He.next!==null,Ei=0,Qe=He=Re=null,Du=!1,e)throw Error(F(300));return t}function Dp(){var t=ma!==0;return ma=0,t}function An(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Re.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function cn(){if(He===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Qe===null?Re.memoizedState:Qe.next;if(e!==null)Qe=e,He=t;else{if(t===null)throw Error(F(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Qe===null?Re.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function ga(t,e){return typeof e=="function"?e(t):e}function Hh(t){var e=cn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Ei&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Re.lanes|=d,Ti|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Tn(r,e.memoizedState)||(jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wh(t){var e=cn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tn(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ww(){}function qw(t,e){var n=Re,r=cn(),i=e(),s=!Tn(r.memoizedState,i);if(s&&(r.memoizedState=i,jt=!0),r=r.queue,Lp(Qw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,ya(9,Gw.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(F(349));Ei&30||Kw(n,e,i)}return i}function Kw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gw(t,e,n,r){e.value=n,e.getSnapshot=r,Yw(e)&&Xw(t)}function Qw(t,e,n){return n(function(){Yw(e)&&Xw(t)})}function Yw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function Xw(t){var e=sr(t,1);e!==null&&vn(e,t,1,-1)}function Gy(t){var e=An();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e.queue=t,t=t.dispatch=NA.bind(null,Re,t),[e.memoizedState,t]}function ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Jw(){return cn().memoizedState}function Xl(t,e,n,r){var i=An();Re.flags|=t,i.memoizedState=ya(1|e,n,void 0,r===void 0?null:r)}function _c(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&Op(r,o.deps)){i.memoizedState=ya(e,n,s,r);return}}Re.flags|=t,i.memoizedState=ya(1|e,n,s,r)}function Qy(t,e){return Xl(8390656,8,t,e)}function Lp(t,e){return _c(2048,8,t,e)}function Zw(t,e){return _c(4,2,t,e)}function eE(t,e){return _c(4,4,t,e)}function tE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nE(t,e,n){return n=n!=null?n.concat([t]):null,_c(4,4,tE.bind(null,e,t),n)}function Mp(){}function rE(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Op(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function iE(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Op(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sE(t,e,n){return Ei&21?(Tn(n,e)||(n=cw(),Re.lanes|=n,Ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function bA(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Bh.transition;Bh.transition={};try{t(!1),e()}finally{fe=n,Bh.transition=r}}function oE(){return cn().memoizedState}function OA(t,e,n){var r=Mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},aE(t))lE(e,n);else if(n=zw(t,e,n,r),n!==null){var i=Ot();vn(n,t,r,i),uE(n,e,r)}}function NA(t,e,n){var r=Mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(aE(t))lE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Tn(l,o)){var u=e.interleaved;u===null?(i.next=i,Ap(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=zw(t,e,i,r),n!==null&&(i=Ot(),vn(n,t,r,i),uE(n,e,r))}}function aE(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function lE(t,e){Bo=Du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fp(t,n)}}var Lu={readContext:un,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},DA={readContext:un,useCallback:function(t,e){return An().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:Qy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4194308,4,tE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xl(4,2,t,e)},useMemo:function(t,e){var n=An();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=An();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=OA.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=An();return t={current:t},e.memoizedState=t},useState:Gy,useDebugValue:Mp,useDeferredValue:function(t){return An().memoizedState=t},useTransition:function(){var t=Gy(!1),e=t[0];return t=bA.bind(null,t[1]),An().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=An();if(Se){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Xe===null)throw Error(F(349));Ei&30||Kw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qy(Qw.bind(null,r,s,t),[t]),r.flags|=2048,ya(9,Gw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=An(),e=Xe.identifierPrefix;if(Se){var n=Qn,r=Gn;n=(r&~(1<<32-_n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LA={readContext:un,useCallback:rE,useContext:un,useEffect:Lp,useImperativeHandle:nE,useInsertionEffect:Zw,useLayoutEffect:eE,useMemo:iE,useReducer:Hh,useRef:Jw,useState:function(){return Hh(ga)},useDebugValue:Mp,useDeferredValue:function(t){var e=cn();return sE(e,He.memoizedState,t)},useTransition:function(){var t=Hh(ga)[0],e=cn().memoizedState;return[t,e]},useMutableSource:Ww,useSyncExternalStore:qw,useId:oE,unstable_isNewReconciler:!1},MA={readContext:un,useCallback:rE,useContext:un,useEffect:Lp,useImperativeHandle:nE,useInsertionEffect:Zw,useLayoutEffect:eE,useMemo:iE,useReducer:Wh,useRef:Jw,useState:function(){return Wh(ga)},useDebugValue:Mp,useDeferredValue:function(t){var e=cn();return He===null?e.memoizedState=t:sE(e,He.memoizedState,t)},useTransition:function(){var t=Wh(ga)[0],e=cn().memoizedState;return[t,e]},useMutableSource:Ww,useSyncExternalStore:qw,useId:oE,unstable_isNewReconciler:!1};function pn(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vc={isMounted:function(t){return(t=t._reactInternals)?bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=Mr(t),s=er(r,i);s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,i),e!==null&&(vn(e,t,i,r),Ql(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=Mr(t),s=er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,i),e!==null&&(vn(e,t,i,r),Ql(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=Mr(t),i=er(n,r);i.tag=2,e!=null&&(i.callback=e),e=Dr(t,i,r),e!==null&&(vn(e,t,r,n),Ql(e,t,r))}};function Yy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ua(n,r)||!ua(i,s):!0}function cE(t,e,n){var r=!1,i=zr,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(i=Bt(e)?vi:St.current,r=e.contextTypes,s=(r=r!=null)?Ts(t,i):zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vc.enqueueReplaceState(e,e.state,null)}function Zd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Cp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=un(s):(s=Bt(e)?vi:St.current,i.context=Ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vc.enqueueReplaceState(i,i.state,null),Ou(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",r=e;do n+=cR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VA=typeof WeakMap=="function"?WeakMap:Map;function hE(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vu||(Vu=!0,hf=r),ef(t,e)},n}function dE(t,e,n){n=er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ef(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ef(t,e),typeof r!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new VA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=XA.bind(null,t,e,n),e.then(t,t))}function Zy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function e_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,Dr(n,e,1))),n.lanes|=1),t)}var UA=hr.ReactCurrentOwner,jt=!1;function bt(t,e,n,r){e.child=t===null?$w(e,null,n,r):Ss(e,t.child,n,r)}function t_(t,e,n,r,i){n=n.render;var s=e.ref;return ms(e,i),r=Np(t,e,n,r,s,i),n=Dp(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,or(t,e,i)):(Se&&n&&Ep(e),e.flags|=1,bt(t,e,r,i),e.child)}function n_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fE(t,e,s,r,i)):(t=tu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(o,r)&&t.ref===e.ref)return or(t,e,i)}return e.flags|=1,t=Vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function fE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ua(s,r)&&t.ref===e.ref)if(jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,or(t,e,i)}return tf(t,e,n,r,i)}function pE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(us,Gt),Gt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(us,Gt),Gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(us,Gt),Gt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(us,Gt),Gt|=r;return bt(t,e,i,n),e.child}function mE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tf(t,e,n,r,i){var s=Bt(n)?vi:St.current;return s=Ts(e,s),ms(e,i),n=Np(t,e,n,r,s,i),r=Dp(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,or(t,e,i)):(Se&&r&&Ep(e),e.flags|=1,bt(t,e,n,i),e.child)}function r_(t,e,n,r,i){if(Bt(n)){var s=!0;Au(e)}else s=!1;if(ms(e,i),e.stateNode===null)Jl(t,e),cE(e,n,r),Zd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=un(c):(c=Bt(n)?vi:St.current,c=Ts(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Xy(e,o,r,c),vr=!1;var m=e.memoizedState;o.state=m,Ou(e,r,o,i),u=e.memoizedState,l!==r||m!==u||zt.current||vr?(typeof d=="function"&&(Jd(e,n,d,r),u=e.memoizedState),(l=vr||Yy(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Bw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:pn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=un(u):(u=Bt(n)?vi:St.current,u=Ts(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Xy(e,o,r,u),vr=!1,m=e.memoizedState,o.state=m,Ou(e,r,o,i);var S=e.memoizedState;l!==p||m!==S||zt.current||vr?(typeof v=="function"&&(Jd(e,n,v,r),S=e.memoizedState),(c=vr||Yy(e,n,c,r,m,S,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return nf(t,e,n,r,s,i)}function nf(t,e,n,r,i,s){mE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zy(e,n,!1),or(t,e,s);r=e.stateNode,UA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,l,s)):bt(t,e,l,s),e.memoizedState=r.state,i&&zy(e,n,!0),e.child}function gE(t){var e=t.stateNode;e.pendingContext?$y(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$y(t,e.context,!1),xp(t,e.containerInfo)}function i_(t,e,n,r,i){return Is(),Ip(i),e.flags|=256,bt(t,e,n,r),e.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function yE(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Pe,i&1),t===null)return Yd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tc(o,r,0,null),t=ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sf(n),e.memoizedState=rf,t):Vp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return FA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Vr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Vr(l,s):(s=ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?sf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rf,r}return s=t.child,t=s.sibling,r=Vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vp(t,e){return e=Tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bl(t,e,n,r){return r!==null&&Ip(r),Ss(e,t.child,null,n),t=Vp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qh(Error(F(422))),bl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Tc({mode:"visible",children:r.children},i,0,null),s=ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ss(e,t.child,null,o),e.child.memoizedState=sf(o),e.memoizedState=rf,s);if(!(e.mode&1))return bl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=qh(s,r,void 0),bl(t,e,o,r)}if(l=(o&t.childLanes)!==0,jt||l){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,sr(t,i),vn(r,t,i,-1))}return Bp(),r=qh(Error(F(421))),bl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=JA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qt=Nr(i.nextSibling),Xt=e,Se=!0,gn=null,t!==null&&(rn[sn++]=Gn,rn[sn++]=Qn,rn[sn++]=wi,Gn=t.id,Qn=t.overflow,wi=e),e=Vp(e,r.children),e.flags|=4096,e)}function s_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xd(t.return,e,n)}function Kh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _E(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(bt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&s_(t,n,e);else if(t.tag===19)s_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kh(e,!0,n,null,s);break;case"together":Kh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function or(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jA(t,e,n){switch(e.tag){case 3:gE(e),Is();break;case 5:Hw(e);break;case 1:Bt(e.type)&&Au(e);break;case 4:xp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(ku,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?yE(t,e,n):(ge(Pe,Pe.current&1),t=or(t,e,n),t!==null?t.sibling:null);ge(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _E(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,pE(t,e,n)}return or(t,e,n)}var vE,of,wE,EE;vE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};of=function(){};wE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(On.current);var s=null;switch(n){case"input":i=Ad(t,i),r=Ad(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=kd(t,i),r=kd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pu)}Od(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(na.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(na.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};EE=function(t,e,n,r){n!==r&&(e.flags|=4)};function To(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $A(t,e,n){var r=e.pendingProps;switch(Tp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Bt(e.type)&&Ru(),_t(e),null;case 3:return r=e.stateNode,Ps(),Te(zt),Te(St),bp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gn!==null&&(pf(gn),gn=null))),of(t,e),_t(e),null;case 5:kp(e);var i=si(pa.current);if(n=e.type,t!==null&&e.stateNode!=null)wE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return _t(e),null}if(t=si(On.current),xl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xn]=e,r[da]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<bo.length;i++)ve(bo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":py(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":gy(r,s),ve("invalid",r)}Od(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Cl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Cl(r.textContent,l,t),i=["children",""+l]):na.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":wl(r),my(r,s,!0);break;case"textarea":wl(r),yy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Q0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xn]=e,t[da]=r,vE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nd(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<bo.length;i++)ve(bo[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":py(t,r),i=Ad(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ve("invalid",t);break;case"textarea":gy(t,r),i=kd(t,r),ve("invalid",t);break;default:i=r}Od(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?J0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Y0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ra(t,u):typeof u=="number"&&ra(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(na.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&ap(t,s,u,o))}switch(n){case"input":wl(t),my(t,r,!1);break;case"textarea":wl(t),yy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hs(t,!!r.multiple,s,!1):r.defaultValue!=null&&hs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)EE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=si(pa.current),si(On.current),xl(e)){if(r=e.stateNode,n=e.memoizedProps,r[xn]=e,(s=r.nodeValue!==n)&&(t=Xt,t!==null))switch(t.tag){case 3:Cl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=e,e.stateNode=r}return _t(e),null;case 13:if(Te(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Qt!==null&&e.mode&1&&!(e.flags&128))Fw(),Is(),e.flags|=98560,s=!1;else if(s=xl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[xn]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),s=!1}else gn!==null&&(pf(gn),gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?We===0&&(We=3):Bp())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return Ps(),of(t,e),t===null&&ca(e.stateNode.containerInfo),_t(e),null;case 10:return Rp(e.type._context),_t(e),null;case 17:return Bt(e.type)&&Ru(),_t(e),null;case 19:if(Te(Pe),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)To(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nu(t),o!==null){for(e.flags|=128,To(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>As&&(e.flags|=128,r=!0,To(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),To(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return _t(e),null}else 2*Le()-s.renderingStartTime>As&&n!==1073741824&&(e.flags|=128,r=!0,To(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Pe.current,ge(Pe,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return zp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Gt&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function zA(t,e){switch(Tp(e),e.tag){case 1:return Bt(e.type)&&Ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),Te(zt),Te(St),bp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kp(e),null;case 13:if(Te(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Pe),null;case 4:return Ps(),null;case 10:return Rp(e.type._context),null;case 22:case 23:return zp(),null;case 24:return null;default:return null}}var Ol=!1,Tt=!1,BA=typeof WeakSet=="function"?WeakSet:Set,B=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function af(t,e,n){try{n()}catch(r){be(t,e,r)}}var o_=!1;function HA(t,e){if(Bd=Tu,t=Rw(),wp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hd={focusedElem:t,selectionRange:n},Tu=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,C=S.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?x:pn(e.type,x),C);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){be(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return S=o_,o_=!1,S}function Ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&af(e,n,s)}i=i.next}while(i!==r)}}function wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function TE(t){var e=t.alternate;e!==null&&(t.alternate=null,TE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xn],delete e[da],delete e[Kd],delete e[RA],delete e[AA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function IE(t){return t.tag===5||t.tag===3||t.tag===4}function a_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||IE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pu));else if(r!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}function cf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cf(t,e,n),t=t.sibling;t!==null;)cf(t,e,n),t=t.sibling}var it=null,mn=!1;function mr(t,e,n){for(n=n.child;n!==null;)SE(t,e,n),n=n.sibling}function SE(t,e,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(dc,n)}catch{}switch(n.tag){case 5:Tt||ls(n,e);case 6:var r=it,i=mn;it=null,mr(t,e,n),it=r,mn=i,it!==null&&(mn?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(mn?(t=it,n=n.stateNode,t.nodeType===8?jh(t.parentNode,n):t.nodeType===1&&jh(t,n),aa(t)):jh(it,n.stateNode));break;case 4:r=it,i=mn,it=n.stateNode.containerInfo,mn=!0,mr(t,e,n),it=r,mn=i;break;case 0:case 11:case 14:case 15:if(!Tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&af(n,e,o),i=i.next}while(i!==r)}mr(t,e,n);break;case 1:if(!Tt&&(ls(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){be(n,e,l)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(Tt=(r=Tt)||n.memoizedState!==null,mr(t,e,n),Tt=r):mr(t,e,n);break;default:mr(t,e,n)}}function l_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BA),e.forEach(function(r){var i=ZA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,mn=!1;break e;case 3:it=l.stateNode.containerInfo,mn=!0;break e;case 4:it=l.stateNode.containerInfo,mn=!0;break e}l=l.return}if(it===null)throw Error(F(160));SE(s,o,i),it=null,mn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)PE(e,t),e=e.sibling}function PE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fn(e,t),Rn(t),r&4){try{Ho(3,t,t.return),wc(3,t)}catch(x){be(t,t.return,x)}try{Ho(5,t,t.return)}catch(x){be(t,t.return,x)}}break;case 1:fn(e,t),Rn(t),r&512&&n!==null&&ls(n,n.return);break;case 5:if(fn(e,t),Rn(t),r&512&&n!==null&&ls(n,n.return),t.flags&32){var i=t.stateNode;try{ra(i,"")}catch(x){be(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&K0(i,s),Nd(l,o);var c=Nd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?J0(i,p):d==="dangerouslySetInnerHTML"?Y0(i,p):d==="children"?ra(i,p):ap(i,d,p,c)}switch(l){case"input":Cd(i,s);break;case"textarea":G0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?hs(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?hs(i,!!s.multiple,s.defaultValue,!0):hs(i,!!s.multiple,s.multiple?[]:"",!1))}i[da]=s}catch(x){be(t,t.return,x)}}break;case 6:if(fn(e,t),Rn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){be(t,t.return,x)}}break;case 3:if(fn(e,t),Rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(x){be(t,t.return,x)}break;case 4:fn(e,t),Rn(t);break;case 13:fn(e,t),Rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jp=Le())),r&4&&l_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Tt=(c=Tt)||d,fn(e,t),Tt=c):fn(e,t),Rn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(B=t,d=t.child;d!==null;){for(p=B=d;B!==null;){switch(m=B,v=m.child,m.tag){case 0:case 11:case 14:case 15:Ho(4,m,m.return);break;case 1:ls(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(x){be(r,n,x)}}break;case 5:ls(m,m.return);break;case 22:if(m.memoizedState!==null){c_(p);continue}}v!==null?(v.return=m,B=v):c_(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=X0("display",o))}catch(x){be(t,t.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){be(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:fn(e,t),Rn(t),r&4&&l_(t);break;case 21:break;default:fn(e,t),Rn(t)}}function Rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(IE(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ra(i,""),r.flags&=-33);var s=a_(t);cf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=a_(t);uf(t,l,o);break;default:throw Error(F(161))}}catch(u){be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WA(t,e,n){B=t,RE(t)}function RE(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ol;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Tt;l=Ol;var c=Tt;if(Ol=o,(Tt=u)&&!c)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?h_(i):u!==null?(u.return=o,B=u):h_(i);for(;s!==null;)B=s,RE(s),s=s.sibling;B=i,Ol=l,Tt=c}u_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):u_(t)}}function u_(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Tt||wc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ky(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ky(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&aa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Tt||e.flags&512&&lf(e)}catch(m){be(e,e.return,m)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function c_(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function h_(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wc(4,e)}catch(u){be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){be(e,i,u)}}var s=e.return;try{lf(e)}catch(u){be(e,s,u)}break;case 5:var o=e.return;try{lf(e)}catch(u){be(e,o,u)}}}catch(u){be(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var qA=Math.ceil,Mu=hr.ReactCurrentDispatcher,Up=hr.ReactCurrentOwner,ln=hr.ReactCurrentBatchConfig,ae=0,Xe=null,Ue=null,at=0,Gt=0,us=Gr(0),We=0,_a=null,Ti=0,Ec=0,Fp=0,Wo=null,Ft=null,jp=0,As=1/0,Hn=null,Vu=!1,hf=null,Lr=null,Nl=!1,Ar=null,Uu=0,qo=0,df=null,Zl=-1,eu=0;function Ot(){return ae&6?Le():Zl!==-1?Zl:Zl=Le()}function Mr(t){return t.mode&1?ae&2&&at!==0?at&-at:xA.transition!==null?(eu===0&&(eu=cw()),eu):(t=fe,t!==0||(t=window.event,t=t===void 0?16:yw(t.type)),t):1}function vn(t,e,n,r){if(50<qo)throw qo=0,df=null,Error(F(185));Na(t,n,r),(!(ae&2)||t!==Xe)&&(t===Xe&&(!(ae&2)&&(Ec|=n),We===4&&Er(t,at)),Ht(t,r),n===1&&ae===0&&!(e.mode&1)&&(As=Le()+500,yc&&Qr()))}function Ht(t,e){var n=t.callbackNode;xR(t,e);var r=Eu(t,t===Xe?at:0);if(r===0)n!==null&&wy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wy(n),e===1)t.tag===0?CA(d_.bind(null,t)):Mw(d_.bind(null,t)),SA(function(){!(ae&6)&&Qr()}),n=null;else{switch(hw(r)){case 1:n=dp;break;case 4:n=lw;break;case 16:n=wu;break;case 536870912:n=uw;break;default:n=wu}n=DE(n,AE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function AE(t,e){if(Zl=-1,eu=0,ae&6)throw Error(F(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var r=Eu(t,t===Xe?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fu(t,r);else{e=r;var i=ae;ae|=2;var s=xE();(Xe!==t||at!==e)&&(Hn=null,As=Le()+500,ui(t,e));do try{QA();break}catch(l){CE(t,l)}while(!0);Pp(),Mu.current=s,ae=i,Ue!==null?e=0:(Xe=null,at=0,e=We)}if(e!==0){if(e===2&&(i=Ud(t),i!==0&&(r=i,e=ff(t,i))),e===1)throw n=_a,ui(t,0),Er(t,r),Ht(t,Le()),n;if(e===6)Er(t,r);else{if(i=t.current.alternate,!(r&30)&&!KA(i)&&(e=Fu(t,r),e===2&&(s=Ud(t),s!==0&&(r=s,e=ff(t,s))),e===1))throw n=_a,ui(t,0),Er(t,r),Ht(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:ti(t,Ft,Hn);break;case 3:if(Er(t,r),(r&130023424)===r&&(e=jp+500-Le(),10<e)){if(Eu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qd(ti.bind(null,t,Ft,Hn),e);break}ti(t,Ft,Hn);break;case 4:if(Er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qA(r/1960))-r,10<r){t.timeoutHandle=qd(ti.bind(null,t,Ft,Hn),r);break}ti(t,Ft,Hn);break;case 5:ti(t,Ft,Hn);break;default:throw Error(F(329))}}}return Ht(t,Le()),t.callbackNode===n?AE.bind(null,t):null}function ff(t,e){var n=Wo;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=Fu(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&pf(e)),t}function pf(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function KA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~Fp,e&=~Ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_n(e),r=1<<n;t[n]=-1,e&=~r}}function d_(t){if(ae&6)throw Error(F(327));gs();var e=Eu(t,0);if(!(e&1))return Ht(t,Le()),null;var n=Fu(t,e);if(t.tag!==0&&n===2){var r=Ud(t);r!==0&&(e=r,n=ff(t,r))}if(n===1)throw n=_a,ui(t,0),Er(t,e),Ht(t,Le()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ti(t,Ft,Hn),Ht(t,Le()),null}function $p(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(As=Le()+500,yc&&Qr())}}function Ii(t){Ar!==null&&Ar.tag===0&&!(ae&6)&&gs();var e=ae;ae|=1;var n=ln.transition,r=fe;try{if(ln.transition=null,fe=1,t)return t()}finally{fe=r,ln.transition=n,ae=e,!(ae&6)&&Qr()}}function zp(){Gt=us.current,Te(us)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,IA(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Tp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ru();break;case 3:Ps(),Te(zt),Te(St),bp();break;case 5:kp(r);break;case 4:Ps();break;case 13:Te(Pe);break;case 19:Te(Pe);break;case 10:Rp(r.type._context);break;case 22:case 23:zp()}n=n.return}if(Xe=t,Ue=t=Vr(t.current,null),at=Gt=e,We=0,_a=null,Fp=Ec=Ti=0,Ft=Wo=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function CE(t,e){do{var n=Ue;try{if(Pp(),Yl.current=Lu,Du){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Du=!1}if(Ei=0,Qe=He=Re=null,Bo=!1,ma=0,Up.current=null,n===null||n.return===null){We=1,_a=e,Ue=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=at,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Zy(o);if(v!==null){v.flags&=-257,e_(v,o,l,s,e),v.mode&1&&Jy(s,c,e),e=v,u=c;var S=e.updateQueue;if(S===null){var x=new Set;x.add(u),e.updateQueue=x}else S.add(u);break e}else{if(!(e&1)){Jy(s,c,e),Bp();break e}u=Error(F(426))}}else if(Se&&l.mode&1){var C=Zy(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),e_(C,o,l,s,e),Ip(Rs(u,l));break e}}s=u=Rs(u,l),We!==4&&(We=2),Wo===null?Wo=[s]:Wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=hE(s,u,e);qy(s,E);break e;case 1:l=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Lr===null||!Lr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=dE(s,l,e);qy(s,O);break e}}s=s.return}while(s!==null)}bE(n)}catch(M){e=M,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function xE(){var t=Mu.current;return Mu.current=Lu,t===null?Lu:t}function Bp(){(We===0||We===3||We===2)&&(We=4),Xe===null||!(Ti&268435455)&&!(Ec&268435455)||Er(Xe,at)}function Fu(t,e){var n=ae;ae|=2;var r=xE();(Xe!==t||at!==e)&&(Hn=null,ui(t,e));do try{GA();break}catch(i){CE(t,i)}while(!0);if(Pp(),ae=n,Mu.current=r,Ue!==null)throw Error(F(261));return Xe=null,at=0,We}function GA(){for(;Ue!==null;)kE(Ue)}function QA(){for(;Ue!==null&&!wR();)kE(Ue)}function kE(t){var e=NE(t.alternate,t,Gt);t.memoizedProps=t.pendingProps,e===null?bE(t):Ue=e,Up.current=null}function bE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zA(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Ue=null;return}}else if(n=$A(n,e,Gt),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);We===0&&(We=5)}function ti(t,e,n){var r=fe,i=ln.transition;try{ln.transition=null,fe=1,YA(t,e,n,r)}finally{ln.transition=i,fe=r}return null}function YA(t,e,n,r){do gs();while(Ar!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kR(t,s),t===Xe&&(Ue=Xe=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nl||(Nl=!0,DE(wu,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ln.transition,ln.transition=null;var o=fe;fe=1;var l=ae;ae|=4,Up.current=null,HA(t,n),PE(n,t),gA(Hd),Tu=!!Bd,Hd=Bd=null,t.current=n,WA(n),ER(),ae=l,fe=o,ln.transition=s}else t.current=n;if(Nl&&(Nl=!1,Ar=t,Uu=i),s=t.pendingLanes,s===0&&(Lr=null),SR(n.stateNode),Ht(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vu)throw Vu=!1,t=hf,hf=null,t;return Uu&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===df?qo++:(qo=0,df=t):qo=0,Qr(),null}function gs(){if(Ar!==null){var t=hw(Uu),e=ln.transition,n=fe;try{if(ln.transition=null,fe=16>t?16:t,Ar===null)var r=!1;else{if(t=Ar,Ar=null,Uu=0,ae&6)throw Error(F(331));var i=ae;for(ae|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(B=c;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:Ho(8,d,s)}var p=d.child;if(p!==null)p.return=d,B=p;else for(;B!==null;){d=B;var m=d.sibling,v=d.return;if(TE(d),d===c){B=null;break}if(m!==null){m.return=v,B=m;break}B=v}}}var S=s.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ho(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,B=E;break e}B=s.return}}var _=t.current;for(B=_;B!==null;){o=B;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,B=T;else e:for(o=_;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wc(9,l)}}catch(M){be(l,l.return,M)}if(l===o){B=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,B=O;break e}B=l.return}}if(ae=i,Qr(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(dc,t)}catch{}r=!0}return r}finally{fe=n,ln.transition=e}}return!1}function f_(t,e,n){e=Rs(n,e),e=hE(t,e,1),t=Dr(t,e,1),e=Ot(),t!==null&&(Na(t,1,e),Ht(t,e))}function be(t,e,n){if(t.tag===3)f_(t,t,n);else for(;e!==null;){if(e.tag===3){f_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lr===null||!Lr.has(r))){t=Rs(n,t),t=dE(e,t,1),e=Dr(e,t,1),t=Ot(),e!==null&&(Na(e,1,t),Ht(e,t));break}}e=e.return}}function XA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(at&n)===n&&(We===4||We===3&&(at&130023424)===at&&500>Le()-jp?ui(t,0):Fp|=n),Ht(t,e)}function OE(t,e){e===0&&(t.mode&1?(e=Il,Il<<=1,!(Il&130023424)&&(Il=4194304)):e=1);var n=Ot();t=sr(t,e),t!==null&&(Na(t,e,n),Ht(t,n))}function JA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),OE(t,n)}function ZA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),OE(t,n)}var NE;NE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,jA(t,e,n);jt=!!(t.flags&131072)}else jt=!1,Se&&e.flags&1048576&&Vw(e,xu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Jl(t,e),t=e.pendingProps;var i=Ts(e,St.current);ms(e,n),i=Np(null,e,r,t,i,n);var s=Dp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(r)?(s=!0,Au(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cp(e),i.updater=vc,e.stateNode=i,i._reactInternals=e,Zd(e,r,t,n),e=nf(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Ep(e),bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Jl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=tC(r),t=pn(r,t),i){case 0:e=tf(null,e,r,t,n);break e;case 1:e=r_(null,e,r,t,n);break e;case 11:e=t_(null,e,r,t,n);break e;case 14:e=n_(null,e,r,pn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),tf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),r_(t,e,r,i,n);case 3:e:{if(gE(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Bw(t,e),Ou(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Rs(Error(F(423)),e),e=i_(t,e,r,n,i);break e}else if(r!==i){i=Rs(Error(F(424)),e),e=i_(t,e,r,n,i);break e}else for(Qt=Nr(e.stateNode.containerInfo.firstChild),Xt=e,Se=!0,gn=null,n=$w(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Is(),r===i){e=or(t,e,n);break e}bt(t,e,r,n)}e=e.child}return e;case 5:return Hw(e),t===null&&Yd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wd(r,i)?o=null:s!==null&&Wd(r,s)&&(e.flags|=32),mE(t,e),bt(t,e,o,n),e.child;case 6:return t===null&&Yd(e),null;case 13:return yE(t,e,n);case 4:return xp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ss(e,null,r,n):bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),t_(t,e,r,i,n);case 7:return bt(t,e,e.pendingProps,n),e.child;case 8:return bt(t,e,e.pendingProps.children,n),e.child;case 12:return bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(ku,r._currentValue),r._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===i.children&&!zt.current){e=or(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=er(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Xd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ms(e,n),i=un(i),r=r(i),e.flags|=1,bt(t,e,r,n),e.child;case 14:return r=e.type,i=pn(r,e.pendingProps),i=pn(r.type,i),n_(t,e,r,i,n);case 15:return fE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),Jl(t,e),e.tag=1,Bt(r)?(t=!0,Au(e)):t=!1,ms(e,n),cE(e,r,i),Zd(e,r,i,n),nf(null,e,r,!0,t,n);case 19:return _E(t,e,n);case 22:return pE(t,e,n)}throw Error(F(156,e.tag))};function DE(t,e){return aw(t,e)}function eC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new eC(t,e,n,r)}function Hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tC(t){if(typeof t=="function")return Hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===up)return 11;if(t===cp)return 14}return 2}function Vr(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Hp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zi:return ci(n.children,i,s,e);case lp:o=8,i|=8;break;case Id:return t=an(12,n,e,i|2),t.elementType=Id,t.lanes=s,t;case Sd:return t=an(13,n,e,i),t.elementType=Sd,t.lanes=s,t;case Pd:return t=an(19,n,e,i),t.elementType=Pd,t.lanes=s,t;case H0:return Tc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z0:o=10;break e;case B0:o=9;break e;case up:o=11;break e;case cp:o=14;break e;case _r:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=an(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ci(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function Tc(t,e,n,r){return t=an(22,t,r,e),t.elementType=H0,t.lanes=n,t.stateNode={isHidden:!1},t}function Gh(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function Qh(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xh(0),this.expirationTimes=xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wp(t,e,n,r,i,s,o,l,u){return t=new nC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cp(s),t}function rC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function LE(t){if(!t)return zr;t=t._reactInternals;e:{if(bi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Bt(n))return Lw(t,n,e)}return e}function ME(t,e,n,r,i,s,o,l,u){return t=Wp(n,r,!0,t,i,s,o,l,u),t.context=LE(null),n=t.current,r=Ot(),i=Mr(n),s=er(r,i),s.callback=e??null,Dr(n,s,i),t.current.lanes=i,Na(t,i,r),Ht(t,r),t}function Ic(t,e,n,r){var i=e.current,s=Ot(),o=Mr(i);return n=LE(n),e.context===null?e.context=n:e.pendingContext=n,e=er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Dr(i,e,o),t!==null&&(vn(t,i,o,s),Ql(t,i,o)),o}function ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function p_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qp(t,e){p_(t,e),(t=t.alternate)&&p_(t,e)}function iC(){return null}var VE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kp(t){this._internalRoot=t}Sc.prototype.render=Kp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ic(t,e,null,null)};Sc.prototype.unmount=Kp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ii(function(){Ic(null,t,null,null)}),e[ir]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=pw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&gw(t)}};function Gp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function m_(){}function sC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ju(o);s.call(c)}}var o=ME(e,r,t,0,null,!1,!1,"",m_);return t._reactRootContainer=o,t[ir]=o.current,ca(t.nodeType===8?t.parentNode:t),Ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ju(u);l.call(c)}}var u=Wp(t,0,!1,null,null,!1,!1,"",m_);return t._reactRootContainer=u,t[ir]=u.current,ca(t.nodeType===8?t.parentNode:t),Ii(function(){Ic(e,u,n,r)}),u}function Rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ju(o);l.call(u)}}Ic(e,o,t,i)}else o=sC(n,e,t,i,r);return ju(o)}dw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(fp(e,n|1),Ht(e,Le()),!(ae&6)&&(As=Le()+500,Qr()))}break;case 13:Ii(function(){var r=sr(t,1);if(r!==null){var i=Ot();vn(r,t,1,i)}}),qp(t,1)}};pp=function(t){if(t.tag===13){var e=sr(t,134217728);if(e!==null){var n=Ot();vn(e,t,134217728,n)}qp(t,134217728)}};fw=function(t){if(t.tag===13){var e=Mr(t),n=sr(t,e);if(n!==null){var r=Ot();vn(n,t,e,r)}qp(t,e)}};pw=function(){return fe};mw=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Ld=function(t,e,n){switch(e){case"input":if(Cd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gc(r);if(!i)throw Error(F(90));q0(r),Cd(r,i)}}}break;case"textarea":G0(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};tw=$p;nw=Ii;var oC={usingClientEntryPoint:!1,Events:[La,rs,gc,Z0,ew,$p]},Io={findFiberByHostInstance:ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aC={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sw(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||iC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{dc=Dl.inject(aC),bn=Dl}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oC;en.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gp(e))throw Error(F(200));return rC(t,e,null,n)};en.createRoot=function(t,e){if(!Gp(t))throw Error(F(299));var n=!1,r="",i=VE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wp(t,1,!1,null,null,n,!1,r,i),t[ir]=e.current,ca(t.nodeType===8?t.parentNode:t),new Kp(e)};en.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=sw(e),t=t===null?null:t.stateNode,t};en.flushSync=function(t){return Ii(t)};en.hydrate=function(t,e,n){if(!Pc(e))throw Error(F(200));return Rc(null,t,e,!0,n)};en.hydrateRoot=function(t,e,n){if(!Gp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=VE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ME(e,null,t,1,n??null,i,!1,s,o),t[ir]=e.current,ca(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Sc(e)};en.render=function(t,e,n){if(!Pc(e))throw Error(F(200));return Rc(null,t,e,!1,n)};en.unmountComponentAtNode=function(t){if(!Pc(t))throw Error(F(40));return t._reactRootContainer?(Ii(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1};en.unstable_batchedUpdates=$p;en.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Rc(t,e,n,!1,r)};en.version="18.3.1-next-f1338f8080-20240426";function UE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(UE)}catch(t){console.error(t)}}UE(),U0.exports=en;var lC=U0.exports,FE,g_=lC;FE=g_.createRoot,g_.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}var Cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Cr||(Cr={}));const y_="popstate";function uC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return mf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$E(i)}return hC(e,n,null,t)}function je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cC(){return Math.random().toString(36).substr(2,8)}function __(t,e){return{usr:t.state,key:t.key,idx:e}}function mf(t,e,n,r){return n===void 0&&(n=null),va({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ws(e):e,{state:n,key:e&&e.key||r||cC()})}function $E(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ws(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Cr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(va({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Cr.Pop;let C=d(),E=C==null?null:C-c;c=C,u&&u({action:l,location:x.location,delta:E})}function m(C,E){l=Cr.Push;let _=mf(x.location,C,E);c=d()+1;let T=__(_,c),O=x.createHref(_);try{o.pushState(T,"",O)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(O)}s&&u&&u({action:l,location:x.location,delta:1})}function v(C,E){l=Cr.Replace;let _=mf(x.location,C,E);c=d();let T=__(_,c),O=x.createHref(_);o.replaceState(T,"",O),s&&u&&u({action:l,location:x.location,delta:0})}function S(C){let E=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof C=="string"?C:$E(C);return _=_.replace(/ $/,"%20"),je(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let x={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(y_,p),u=C,()=>{i.removeEventListener(y_,p),u=null}},createHref(C){return e(i,C)},createURL:S,encodeLocation(C){let E=S(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:v,go(C){return o.go(C)}};return x}var v_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(v_||(v_={}));function dC(t,e,n){return n===void 0&&(n="/"),fC(t,e,n,!1)}function fC(t,e,n,r){let i=typeof e=="string"?Ws(e):e,s=HE(i.pathname||"/",n);if(s==null)return null;let o=zE(t);pC(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=PC(s);l=IC(o[u],c,r)}return l}function zE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(je(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=hi([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(je(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),zE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:EC(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of BE(s.path))i(s,o,u)}),e}function BE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=BE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function pC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:TC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mC=/^:[\w-]+$/,gC=3,yC=2,_C=1,vC=10,wC=-2,w_=t=>t==="*";function EC(t,e){let n=t.split("/"),r=n.length;return n.some(w_)&&(r+=wC),e&&(r+=yC),n.filter(i=>!w_(i)).reduce((i,s)=>i+(mC.test(s)?gC:s===""?_C:vC),r)}function TC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function IC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=E_({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=E_({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:hi([s,p.pathname]),pathnameBase:xC(hi([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=hi([s,p.pathnameBase]))}return o}function E_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=SC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let x=l[p]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const S=l[p];return v&&!S?c[m]=void 0:c[m]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function SC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function PC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return jE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function HE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function RC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ws(t):t;return{pathname:n?n.startsWith("/")?n:AC(n,e):e,search:kC(r),hash:bC(i)}}function AC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function WE(t,e){let n=CC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ws(t):(i=va({},t),je(!i.pathname||!i.pathname.includes("?"),Yh("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),Yh("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),Yh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=RC(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const hi=t=>t.join("/").replace(/\/\/+/g,"/"),xC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function OC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const KE=["post","put","patch","delete"];new Set(KE);const NC=["get",...KE];new Set(NC);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wa(){return wa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wa.apply(this,arguments)}const Qp=z.createContext(null),DC=z.createContext(null),Va=z.createContext(null),Ac=z.createContext(null),Oi=z.createContext({outlet:null,matches:[],isDataRoute:!1}),GE=z.createContext(null);function Ua(){return z.useContext(Ac)!=null}function Yp(){return Ua()||je(!1),z.useContext(Ac).location}function QE(t){z.useContext(Va).static||z.useLayoutEffect(t)}function LC(){let{isDataRoute:t}=z.useContext(Oi);return t?GC():MC()}function MC(){Ua()||je(!1);let t=z.useContext(Qp),{basename:e,future:n,navigator:r}=z.useContext(Va),{matches:i}=z.useContext(Oi),{pathname:s}=Yp(),o=JSON.stringify(WE(i,n.v7_relativeSplatPath)),l=z.useRef(!1);return QE(()=>{l.current=!0}),z.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=qE(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:hi([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function VC(t,e){return UC(t,e)}function UC(t,e,n,r){Ua()||je(!1);let{navigator:i}=z.useContext(Va),{matches:s}=z.useContext(Oi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Yp(),d;if(e){var p;let C=typeof e=="string"?Ws(e):e;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||je(!1),d=C}else d=c;let m=d.pathname||"/",v=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=dC(t,{pathname:v}),x=BC(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:hi([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:hi([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&x?z.createElement(Ac.Provider,{value:{location:wa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Cr.Pop}},x):x}function FC(){let t=KC(),e=OC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:i},n):null,null)}const jC=z.createElement(FC,null);class $C extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(Oi.Provider,{value:this.props.routeContext},z.createElement(GE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zC(t){let{routeContext:e,match:n,children:r}=t,i=z.useContext(Qp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Oi.Provider,{value:e},r)}function BC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||je(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:v}=n,S=p.route.loader&&m[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let v,S=!1,x=null,C=null;n&&(v=l&&p.route.id?l[p.route.id]:void 0,x=p.route.errorElement||jC,u&&(c<0&&m===0?(S=!0,C=null):c===m&&(S=!0,C=p.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),_=()=>{let T;return v?T=x:S?T=C:p.route.Component?T=z.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=d,z.createElement(zC,{match:p,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?z.createElement($C,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var YE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(YE||{}),$u=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($u||{});function HC(t){let e=z.useContext(Qp);return e||je(!1),e}function WC(t){let e=z.useContext(DC);return e||je(!1),e}function qC(t){let e=z.useContext(Oi);return e||je(!1),e}function XE(t){let e=qC(),n=e.matches[e.matches.length-1];return n.route.id||je(!1),n.route.id}function KC(){var t;let e=z.useContext(GE),n=WC($u.UseRouteError),r=XE($u.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function GC(){let{router:t}=HC(YE.UseNavigateStable),e=XE($u.UseNavigateStable),n=z.useRef(!1);return QE(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,wa({fromRouteId:e},s)))},[t,e])}function JE(t){let{to:e,replace:n,state:r,relative:i}=t;Ua()||je(!1);let{future:s,static:o}=z.useContext(Va),{matches:l}=z.useContext(Oi),{pathname:u}=Yp(),c=LC(),d=qE(e,WE(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return z.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function gf(t){je(!1)}function QC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Cr.Pop,navigator:s,static:o=!1,future:l}=t;Ua()&&je(!1);let u=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:u,navigator:s,static:o,future:wa({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ws(r));let{pathname:d="/",search:p="",hash:m="",state:v=null,key:S="default"}=r,x=z.useMemo(()=>{let C=HE(d,u);return C==null?null:{location:{pathname:C,search:p,hash:m,state:v,key:S},navigationType:i}},[u,d,p,m,v,S,i]);return x==null?null:z.createElement(Va.Provider,{value:c},z.createElement(Ac.Provider,{children:n,value:x}))}function YC(t){let{children:e,location:n}=t;return VC(yf(e),n)}new Promise(()=>{});function yf(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(r,i)=>{if(!z.isValidElement(r))return;let s=[...e,i];if(r.type===z.Fragment){n.push.apply(n,yf(r.props.children,s));return}r.type!==gf&&je(!1),!r.props.index||!r.props.children||je(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=yf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const XC="6";try{window.__reactRouterVersion=XC}catch{}const JC="startTransition",T_=Ed[JC];function ZC(t){let{basename:e,children:n,future:r,window:i}=t,s=z.useRef();s.current==null&&(s.current=uC({window:i,v5Compat:!0}));let o=s.current,[l,u]=z.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=z.useCallback(p=>{c&&T_?T_(()=>u(p)):u(p)},[u,c]);return z.useLayoutEffect(()=>o.listen(d),[o,d]),z.createElement(QC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var I_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(I_||(I_={}));var S_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(S_||(S_={}));var $t=function(){return $t=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},$t.apply(this,arguments)};function Xp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function zu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var we="-ms-",Ko="-moz-",he="-webkit-",ZE="comm",Cc="rule",Jp="decl",ex="@import",eT="@keyframes",tx="@layer",tT=Math.abs,Zp=String.fromCharCode,_f=Object.assign;function nx(t,e){return Ye(t,0)^45?(((e<<2^Ye(t,0))<<2^Ye(t,1))<<2^Ye(t,2))<<2^Ye(t,3):0}function nT(t){return t.trim()}function Wn(t,e){return(t=e.exec(t))?t[0]:t}function te(t,e,n){return t.replace(e,n)}function nu(t,e,n){return t.indexOf(e,n)}function Ye(t,e){return t.charCodeAt(e)|0}function Cs(t,e,n){return t.slice(e,n)}function Cn(t){return t.length}function rT(t){return t.length}function Oo(t,e){return e.push(t),t}function rx(t,e){return t.map(e).join("")}function P_(t,e){return t.filter(function(n){return!Wn(n,e)})}var xc=1,xs=1,iT=0,hn=0,Ve=0,qs="";function kc(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:xc,column:xs,length:o,return:"",siblings:l}}function yr(t,e){return _f(kc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function zi(t){for(;t.root;)t=yr(t.root,{children:[t]});Oo(t,t.siblings)}function ix(){return Ve}function sx(){return Ve=hn>0?Ye(qs,--hn):0,xs--,Ve===10&&(xs=1,xc--),Ve}function wn(){return Ve=hn<iT?Ye(qs,hn++):0,xs++,Ve===10&&(xs=1,xc++),Ve}function di(){return Ye(qs,hn)}function ru(){return hn}function bc(t,e){return Cs(qs,t,e)}function vf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ox(t){return xc=xs=1,iT=Cn(qs=t),hn=0,[]}function ax(t){return qs="",t}function Xh(t){return nT(bc(hn-1,wf(t===91?t+2:t===40?t+1:t)))}function lx(t){for(;(Ve=di())&&Ve<33;)wn();return vf(t)>2||vf(Ve)>3?"":" "}function ux(t,e){for(;--e&&wn()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return bc(t,ru()+(e<6&&di()==32&&wn()==32))}function wf(t){for(;wn();)switch(Ve){case t:return hn;case 34:case 39:t!==34&&t!==39&&wf(Ve);break;case 40:t===41&&wf(t);break;case 92:wn();break}return hn}function cx(t,e){for(;wn()&&t+Ve!==57;)if(t+Ve===84&&di()===47)break;return"/*"+bc(e,hn-1)+"*"+Zp(t===47?t:wn())}function hx(t){for(;!vf(di());)wn();return bc(t,hn)}function dx(t){return ax(iu("",null,null,null,[""],t=ox(t),0,[0],t))}function iu(t,e,n,r,i,s,o,l,u){for(var c=0,d=0,p=o,m=0,v=0,S=0,x=1,C=1,E=1,_=0,T="",O=i,M=s,L=r,w=T;C;)switch(S=_,_=wn()){case 40:if(S!=108&&Ye(w,p-1)==58){nu(w+=te(Xh(_),"&","&\f"),"&\f",tT(c?l[c-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:w+=Xh(_);break;case 9:case 10:case 13:case 32:w+=lx(S);break;case 92:w+=ux(ru()-1,7);continue;case 47:switch(di()){case 42:case 47:Oo(fx(cx(wn(),ru()),e,n,u),u);break;default:w+="/"}break;case 123*x:l[c++]=Cn(w)*E;case 125*x:case 59:case 0:switch(_){case 0:case 125:C=0;case 59+d:E==-1&&(w=te(w,/\f/g,"")),v>0&&Cn(w)-p&&Oo(v>32?A_(w+";",r,n,p-1,u):A_(te(w," ","")+";",r,n,p-2,u),u);break;case 59:w+=";";default:if(Oo(L=R_(w,e,n,c,d,i,l,T,O=[],M=[],p,s),s),_===123)if(d===0)iu(w,e,L,L,O,s,p,l,M);else switch(m===99&&Ye(w,3)===110?100:m){case 100:case 108:case 109:case 115:iu(t,L,L,r&&Oo(R_(t,L,L,0,0,i,l,T,i,O=[],p,M),M),i,M,p,l,r?O:M);break;default:iu(w,L,L,L,[""],M,0,l,M)}}c=d=v=0,x=E=1,T=w="",p=o;break;case 58:p=1+Cn(w),v=S;default:if(x<1){if(_==123)--x;else if(_==125&&x++==0&&sx()==125)continue}switch(w+=Zp(_),_*x){case 38:E=d>0?1:(w+="\f",-1);break;case 44:l[c++]=(Cn(w)-1)*E,E=1;break;case 64:di()===45&&(w+=Xh(wn())),m=di(),d=p=Cn(T=w+=hx(ru())),_++;break;case 45:S===45&&Cn(w)==2&&(x=0)}}return s}function R_(t,e,n,r,i,s,o,l,u,c,d,p){for(var m=i-1,v=i===0?s:[""],S=rT(v),x=0,C=0,E=0;x<r;++x)for(var _=0,T=Cs(t,m+1,m=tT(C=o[x])),O=t;_<S;++_)(O=nT(C>0?v[_]+" "+T:te(T,/&\f/g,v[_])))&&(u[E++]=O);return kc(t,e,n,i===0?Cc:l,u,c,d,p)}function fx(t,e,n,r){return kc(t,e,n,ZE,Zp(ix()),Cs(t,2,-2),0,r)}function A_(t,e,n,r,i){return kc(t,e,n,Jp,Cs(t,0,r),Cs(t,r+1,-1),r,i)}function sT(t,e,n){switch(nx(t,e)){case 5103:return he+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+t+t;case 4789:return Ko+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return he+t+Ko+t+we+t+t;case 5936:switch(Ye(t,e+11)){case 114:return he+t+we+te(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return he+t+we+te(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return he+t+we+te(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return he+t+we+t+t;case 6165:return he+t+we+"flex-"+t+t;case 5187:return he+t+te(t,/(\w+).+(:[^]+)/,he+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return he+t+we+"flex-item-"+te(t,/flex-|-self/g,"")+(Wn(t,/flex-|baseline/)?"":we+"grid-row-"+te(t,/flex-|-self/g,""))+t;case 4675:return he+t+we+"flex-line-pack"+te(t,/align-content|flex-|-self/g,"")+t;case 5548:return he+t+we+te(t,"shrink","negative")+t;case 5292:return he+t+we+te(t,"basis","preferred-size")+t;case 6060:return he+"box-"+te(t,"-grow","")+he+t+we+te(t,"grow","positive")+t;case 4554:return he+te(t,/([^-])(transform)/g,"$1"+he+"$2")+t;case 6187:return te(te(te(t,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),t,"")+t;case 5495:case 3959:return te(t,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return te(te(t,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+t+t;case 4200:if(!Wn(t,/flex-|baseline/))return we+"grid-column-align"+Cs(t,e)+t;break;case 2592:case 3360:return we+te(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Wn(r.props,/grid-\w+-end/)})?~nu(t+(n=n[e].value),"span",0)?t:we+te(t,"-start","")+t+we+"grid-row-span:"+(~nu(n,"span",0)?Wn(n,/\d+/):+Wn(n,/\d+/)-+Wn(t,/\d+/))+";":we+te(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Wn(r.props,/grid-\w+-start/)})?t:we+te(te(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return te(t,/(.+)-inline(.+)/,he+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(t)-1-e>6)switch(Ye(t,e+1)){case 109:if(Ye(t,e+4)!==45)break;case 102:return te(t,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+Ko+(Ye(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~nu(t,"stretch",0)?sT(te(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return te(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,c){return we+i+":"+s+c+(o?we+i+"-span:"+(l?u:+u-+s)+c:"")+t});case 4949:if(Ye(t,e+6)===121)return te(t,":",":"+he)+t;break;case 6444:switch(Ye(t,Ye(t,14)===45?18:11)){case 120:return te(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Ye(t,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+we+"$2box$3")+t;case 100:return te(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(t,"scroll-","scroll-snap-")+t}return t}function Bu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function px(t,e,n,r){switch(t.type){case tx:if(t.children.length)break;case ex:case Jp:return t.return=t.return||t.value;case ZE:return"";case eT:return t.return=t.value+"{"+Bu(t.children,r)+"}";case Cc:if(!Cn(t.value=t.props.join(",")))return""}return Cn(n=Bu(t.children,r))?t.return=t.value+"{"+n+"}":""}function mx(t){var e=rT(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function gx(t){return function(e){e.root||(e=e.return)&&t(e)}}function yx(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Jp:t.return=sT(t.value,t.length,n);return;case eT:return Bu([yr(t,{value:te(t.value,"@","@"+he)})],r);case Cc:if(t.length)return rx(n=t.props,function(i){switch(Wn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zi(yr(t,{props:[te(i,/:(read-\w+)/,":"+Ko+"$1")]})),zi(yr(t,{props:[i]})),_f(t,{props:P_(n,r)});break;case"::placeholder":zi(yr(t,{props:[te(i,/:(plac\w+)/,":"+he+"input-$1")]})),zi(yr(t,{props:[te(i,/:(plac\w+)/,":"+Ko+"$1")]})),zi(yr(t,{props:[te(i,/:(plac\w+)/,we+"input-$1")]})),zi(yr(t,{props:[i]})),_f(t,{props:P_(n,r)});break}return""})}}var _x={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kt={},ks=typeof process<"u"&&Kt!==void 0&&(Kt.REACT_APP_SC_ATTR||Kt.SC_ATTR)||"data-styled",oT="active",aT="data-styled-version",Oc="6.1.13",em=`/*!sc*/
`,Hu=typeof window<"u"&&"HTMLElement"in window,vx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==""?Kt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Kt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.SC_DISABLE_SPEEDY!==void 0&&Kt.SC_DISABLE_SPEEDY!==""&&Kt.SC_DISABLE_SPEEDY!=="false"&&Kt.SC_DISABLE_SPEEDY),Nc=Object.freeze([]),bs=Object.freeze({});function wx(t,e,n){return n===void 0&&(n=bs),t.theme!==n.theme&&t.theme||e||n.theme}var lT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ex=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tx=/(^-|-$)/g;function C_(t){return t.replace(Ex,"-").replace(Tx,"")}var Ix=/(a)(d)/gi,Ll=52,x_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ef(t){var e,n="";for(e=Math.abs(t);e>Ll;e=e/Ll|0)n=x_(e%Ll)+n;return(x_(e%Ll)+n).replace(Ix,"$1-$2")}var Jh,uT=5381,cs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},cT=function(t){return cs(uT,t)};function Sx(t){return Ef(cT(t)>>>0)}function Px(t){return t.displayName||t.name||"Component"}function Zh(t){return typeof t=="string"&&!0}var hT=typeof Symbol=="function"&&Symbol.for,dT=hT?Symbol.for("react.memo"):60115,Rx=hT?Symbol.for("react.forward_ref"):60112,Ax={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xx=((Jh={})[Rx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jh[dT]=fT,Jh);function k_(t){return("type"in(e=t)&&e.type.$$typeof)===dT?fT:"$$typeof"in t?xx[t.$$typeof]:Ax;var e}var kx=Object.defineProperty,bx=Object.getOwnPropertyNames,b_=Object.getOwnPropertySymbols,Ox=Object.getOwnPropertyDescriptor,Nx=Object.getPrototypeOf,O_=Object.prototype;function pT(t,e,n){if(typeof e!="string"){if(O_){var r=Nx(e);r&&r!==O_&&pT(t,r,n)}var i=bx(e);b_&&(i=i.concat(b_(e)));for(var s=k_(t),o=k_(e),l=0;l<i.length;++l){var u=i[l];if(!(u in Cx||n&&n[u]||o&&u in o||s&&u in s)){var c=Ox(e,u);try{kx(t,u,c)}catch{}}}}return t}function Os(t){return typeof t=="function"}function tm(t){return typeof t=="object"&&"styledComponentId"in t}function oi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function N_(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Ea(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Tf(t,e,n){if(n===void 0&&(n=!1),!n&&!Ea(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Tf(t[r],e[r]);else if(Ea(e))for(var r in e)t[r]=Tf(t[r],e[r]);return t}function nm(t,e){Object.defineProperty(t,"toString",{value:e})}function Fa(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Dx=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Fa(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(em);return n},t}(),su=new Map,Wu=new Map,ou=1,Ml=function(t){if(su.has(t))return su.get(t);for(;Wu.has(ou);)ou++;var e=ou++;return su.set(t,e),Wu.set(e,t),e},Lx=function(t,e){ou=e+1,su.set(t,e),Wu.set(e,t)},Mx="style[".concat(ks,"][").concat(aT,'="').concat(Oc,'"]'),Vx=new RegExp("^".concat(ks,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ux=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Fx=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(em),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(Vx);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(Lx(d,c),Ux(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},D_=function(t){for(var e=document.querySelectorAll(Mx),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(ks)!==oT&&(Fx(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function jx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var mT=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(ks,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ks,oT),r.setAttribute(aT,Oc);var o=jx();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},$x=function(){function t(e){this.element=mT(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Fa(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),zx=function(){function t(e){this.element=mT(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Bx=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),L_=Hu,Hx={isServer:!Hu,useCSSOMInjection:!vx},gT=function(){function t(e,n,r){e===void 0&&(e=bs),n===void 0&&(n={});var i=this;this.options=$t($t({},Hx),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Hu&&L_&&(L_=!1,D_(this)),nm(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",c=function(p){var m=function(E){return Wu.get(E)}(p);if(m===void 0)return"continue";var v=s.names.get(m),S=o.getGroup(p);if(v===void 0||!v.size||S.length===0)return"continue";var x="".concat(ks,".g").concat(p,'[id="').concat(m,'"]'),C="";v!==void 0&&v.forEach(function(E){E.length>0&&(C+="".concat(E,","))}),u+="".concat(S).concat(x,'{content:"').concat(C,'"}').concat(em)},d=0;d<l;d++)c(d);return u}(i)})}return t.registerId=function(e){return Ml(e)},t.prototype.rehydrate=function(){!this.server&&Hu&&D_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t($t($t({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Bx(i):r?new $x(i):new zx(i)}(this.options),new Dx(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ml(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Ml(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ml(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Wx=/&/g,qx=/^\s*\/\/.*$/gm;function yT(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=yT(n.children,e)),n})}function Kx(t){var e,n,r,i=bs,s=i.options,o=s===void 0?bs:s,l=i.plugins,u=l===void 0?Nc:l,c=function(m,v,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(e):m},d=u.slice();d.push(function(m){m.type===Cc&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Wx,n).replace(r,c))}),o.prefix&&d.push(yx),d.push(px);var p=function(m,v,S,x){v===void 0&&(v=""),S===void 0&&(S=""),x===void 0&&(x="&"),e=x,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var C=m.replace(qx,""),E=dx(S||v?"".concat(S," ").concat(v," { ").concat(C," }"):C);o.namespace&&(E=yT(E,o.namespace));var _=[];return Bu(E,mx(d.concat(gx(function(T){return _.push(T)})))),_};return p.hash=u.length?u.reduce(function(m,v){return v.name||Fa(15),cs(m,v.name)},uT).toString():"",p}var Gx=new gT,If=Kx(),_T=_i.createContext({shouldForwardProp:void 0,styleSheet:Gx,stylis:If});_T.Consumer;_i.createContext(void 0);function M_(){return z.useContext(_T)}var Qx=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=If);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,nm(this,function(){throw Fa(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=If),this.name+e.hash},t}(),Yx=function(t){return t>="A"&&t<="Z"};function V_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Yx(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var vT=function(t){return t==null||t===!1||t===""},wT=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!vT(s)&&(Array.isArray(s)&&s.isCss||Os(s)?r.push("".concat(V_(i),":"),s,";"):Ea(s)?r.push.apply(r,zu(zu(["".concat(i," {")],wT(s),!1),["}"],!1)):r.push("".concat(V_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in _x||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function fi(t,e,n,r){if(vT(t))return[];if(tm(t))return[".".concat(t.styledComponentId)];if(Os(t)){if(!Os(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return fi(i,e,n,r)}var s;return t instanceof Qx?n?(t.inject(n,r),[t.getName(r)]):[t]:Ea(t)?wT(t):Array.isArray(t)?Array.prototype.concat.apply(Nc,t.map(function(o){return fi(o,e,n,r)})):[t.toString()]}function Xx(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Os(n)&&!tm(n))return!1}return!0}var Jx=cT(Oc),Zx=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Xx(e),this.componentId=n,this.baseHash=cs(Jx,n),this.baseStyle=r,gT.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=oi(i,this.staticRulesId);else{var s=N_(fi(this.rules,e,n,r)),o=Ef(cs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=oi(i,o),this.staticRulesId=o}else{for(var u=cs(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")c+=p;else if(p){var m=N_(fi(p,e,n,r));u=cs(u,m+d),c+=m}}if(c){var v=Ef(u>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=oi(i,v)}}return i},t}(),ET=_i.createContext(void 0);ET.Consumer;var ed={};function ek(t,e,n){var r=tm(t),i=t,s=!Zh(t),o=e.attrs,l=o===void 0?Nc:o,u=e.componentId,c=u===void 0?function(O,M){var L=typeof O!="string"?"sc":C_(O);ed[L]=(ed[L]||0)+1;var w="".concat(L,"-").concat(Sx(Oc+L+ed[L]));return M?"".concat(M,"-").concat(w):w}(e.displayName,e.parentComponentId):u,d=e.displayName,p=d===void 0?function(O){return Zh(O)?"styled.".concat(O):"Styled(".concat(Px(O),")")}(t):d,m=e.displayName&&e.componentId?"".concat(C_(e.displayName),"-").concat(e.componentId):e.componentId||c,v=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,S=e.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(e.shouldForwardProp){var C=e.shouldForwardProp;S=function(O,M){return x(O,M)&&C(O,M)}}else S=x}var E=new Zx(n,m,r?i.componentStyle:void 0);function _(O,M){return function(L,w,y){var I=L.attrs,P=L.componentStyle,k=L.defaultProps,b=L.foldedComponentIds,R=L.styledComponentId,dt=L.target,qe=_i.useContext(ET),Sn=M_(),Je=L.shouldForwardProp||Sn.shouldForwardProp,$=wx(w,qe,k)||bs,K=function(Ke,ze,Ze){for(var jn,Lt=$t($t({},ze),{className:void 0,theme:Ze}),nn=0;nn<Ke.length;nn+=1){var Pn=Os(jn=Ke[nn])?jn(Lt):jn;for(var ye in Pn)Lt[ye]=ye==="className"?oi(Lt[ye],Pn[ye]):ye==="style"?$t($t({},Lt[ye]),Pn[ye]):Pn[ye]}return ze.className&&(Lt.className=oi(Lt.className,ze.className)),Lt}(I,w,$),Q=K.as||dt,oe={};for(var ee in K)K[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&K.theme===$||(ee==="forwardedAs"?oe.as=K.forwardedAs:Je&&!Je(ee,Q)||(oe[ee]=K[ee]));var ce=function(Ke,ze){var Ze=M_(),jn=Ke.generateAndInjectStyles(ze,Ze.styleSheet,Ze.stylis);return jn}(P,K),ft=oi(b,R);return ce&&(ft+=" "+ce),K.className&&(ft+=" "+K.className),oe[Zh(Q)&&!lT.has(Q)?"class":"className"]=ft,oe.ref=y,z.createElement(Q,oe)}(T,O,M)}_.displayName=p;var T=_i.forwardRef(_);return T.attrs=v,T.componentStyle=E,T.displayName=p,T.shouldForwardProp=S,T.foldedComponentIds=r?oi(i.foldedComponentIds,i.styledComponentId):"",T.styledComponentId=m,T.target=r?i.target:t,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=r?function(M){for(var L=[],w=1;w<arguments.length;w++)L[w-1]=arguments[w];for(var y=0,I=L;y<I.length;y++)Tf(M,I[y],!0);return M}({},i.defaultProps,O):O}}),nm(T,function(){return".".concat(T.styledComponentId)}),s&&pT(T,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function U_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var F_=function(t){return Object.assign(t,{isCss:!0})};function tk(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Os(t)||Ea(t))return F_(fi(U_(Nc,zu([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?fi(r):F_(fi(U_(r,e)))}function Sf(t,e,n){if(n===void 0&&(n=bs),!e)throw Fa(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,tk.apply(void 0,zu([i],s,!1)))};return r.attrs=function(i){return Sf(t,e,$t($t({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Sf(t,e,$t($t({},n),i))},r}var TT=function(t){return Sf(ek,t)},q=TT;lT.forEach(function(t){q[t]=TT(t)});var nk={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=z;function rk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ik=typeof Object.is=="function"?Object.is:rk,sk=ja.useSyncExternalStore,ok=ja.useRef,ak=ja.useEffect,lk=ja.useMemo,uk=ja.useDebugValue;nk.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=ok(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=lk(function(){function u(v){if(!c){if(c=!0,d=v,v=r(v),i!==void 0&&o.hasValue){var S=o.value;if(i(S,v))return p=S}return p=v}if(S=p,ik(d,v))return S;var x=r(v);return i!==void 0&&i(S,x)?S:(d=v,p=x)}var c=!1,d,p,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,i]);var l=sk(t,s[0],s[1]);return ak(function(){o.hasValue=!0,o.value=l},[l]),uk(l),l};var de="default"in Ed?_i:Ed,j_=Symbol.for("react-redux-context"),$_=typeof globalThis<"u"?globalThis:{};function ck(){if(!de.createContext)return{};const t=$_[j_]??($_[j_]=new Map);let e=t.get(de.createContext);return e||(e=de.createContext(null),t.set(de.createContext,e)),e}var IT=ck(),hk=()=>{throw new Error("uSES not initialized!")},dk=Symbol.for("react.element"),fk=Symbol.for("react.portal"),pk=Symbol.for("react.fragment"),mk=Symbol.for("react.strict_mode"),gk=Symbol.for("react.profiler"),yk=Symbol.for("react.provider"),_k=Symbol.for("react.context"),vk=Symbol.for("react.server_context"),ST=Symbol.for("react.forward_ref"),wk=Symbol.for("react.suspense"),Ek=Symbol.for("react.suspense_list"),rm=Symbol.for("react.memo"),Tk=Symbol.for("react.lazy"),Ik=ST,Sk=rm;function Pk(t){if(typeof t=="object"&&t!==null){const e=t.$$typeof;switch(e){case dk:{const n=t.type;switch(n){case pk:case gk:case mk:case wk:case Ek:return n;default:{const r=n&&n.$$typeof;switch(r){case vk:case _k:case ST:case Tk:case rm:case yk:return r;default:return e}}}}case fk:return e}}}function Rk(t){return Pk(t)===rm}function Ak(t,e,n,r,{areStatesEqual:i,areOwnPropsEqual:s,areStatePropsEqual:o}){let l=!1,u,c,d,p,m;function v(_,T){return u=_,c=T,d=t(u,c),p=e(r,c),m=n(d,p,c),l=!0,m}function S(){return d=t(u,c),e.dependsOnOwnProps&&(p=e(r,c)),m=n(d,p,c),m}function x(){return t.dependsOnOwnProps&&(d=t(u,c)),e.dependsOnOwnProps&&(p=e(r,c)),m=n(d,p,c),m}function C(){const _=t(u,c),T=!o(_,d);return d=_,T&&(m=n(d,p,c)),m}function E(_,T){const O=!s(T,c),M=!i(_,u,T,c);return u=_,c=T,O&&M?S():O?x():M?C():m}return function(T,O){return l?E(T,O):v(T,O)}}function Ck(t,{initMapStateToProps:e,initMapDispatchToProps:n,initMergeProps:r,...i}){const s=e(t,i),o=n(t,i),l=r(t,i);return Ak(s,o,l,t,i)}function xk(t,e){const n={};for(const r in t){const i=t[r];typeof i=="function"&&(n[r]=(...s)=>e(i(...s)))}return n}function Pf(t){return function(n){const r=t(n);function i(){return r}return i.dependsOnOwnProps=!1,i}}function z_(t){return t.dependsOnOwnProps?!!t.dependsOnOwnProps:t.length!==1}function PT(t,e){return function(r,{displayName:i}){const s=function(l,u){return s.dependsOnOwnProps?s.mapToProps(l,u):s.mapToProps(l,void 0)};return s.dependsOnOwnProps=!0,s.mapToProps=function(l,u){s.mapToProps=t,s.dependsOnOwnProps=z_(t);let c=s(l,u);return typeof c=="function"&&(s.mapToProps=c,s.dependsOnOwnProps=z_(c),c=s(l,u)),c},s}}function im(t,e){return(n,r)=>{throw new Error(`Invalid value of type ${typeof t} for ${e} argument when connecting component ${r.wrappedComponentName}.`)}}function kk(t){return t&&typeof t=="object"?Pf(e=>xk(t,e)):t?typeof t=="function"?PT(t):im(t,"mapDispatchToProps"):Pf(e=>({dispatch:e}))}function bk(t){return t?typeof t=="function"?PT(t):im(t,"mapStateToProps"):Pf(()=>({}))}function Ok(t,e,n){return{...n,...t,...e}}function Nk(t){return function(n,{displayName:r,areMergedPropsEqual:i}){let s=!1,o;return function(u,c,d){const p=t(u,c,d);return s?i(p,o)||(o=p):(s=!0,o=p),o}}}function Dk(t){return t?typeof t=="function"?Nk(t):im(t,"mergeProps"):()=>Ok}function Lk(t){t()}function Mk(){let t=null,e=null;return{clear(){t=null,e=null},notify(){Lk(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var B_={notify(){},get:()=>[]};function RT(t,e){let n,r=B_,i=0,s=!1;function o(x){d();const C=r.subscribe(x);let E=!1;return()=>{E||(E=!0,C(),p())}}function l(){r.notify()}function u(){S.onStateChange&&S.onStateChange()}function c(){return s}function d(){i++,n||(n=e?e.addNestedSub(u):t.subscribe(u),r=Mk())}function p(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=B_)}function m(){s||(s=!0,d())}function v(){s&&(s=!1,p())}const S={addNestedSub:o,notifyNestedSubs:l,handleChangeWrapper:u,isSubscribed:c,trySubscribe:m,tryUnsubscribe:v,getListeners:()=>r};return S}var Vk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uk=typeof navigator<"u"&&navigator.product==="ReactNative",qu=Vk||Uk?de.useLayoutEffect:de.useEffect;function H_(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function td(t,e){if(H_(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!H_(t[n[i]],e[n[i]]))return!1;return!0}var Fk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$k={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},AT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zk={[Ik]:$k,[Sk]:AT};function W_(t){return Rk(t)?AT:zk[t.$$typeof]||Fk}var Bk=Object.defineProperty,Hk=Object.getOwnPropertyNames,q_=Object.getOwnPropertySymbols,Wk=Object.getOwnPropertyDescriptor,qk=Object.getPrototypeOf,K_=Object.prototype;function Rf(t,e){if(typeof e!="string"){if(K_){const s=qk(e);s&&s!==K_&&Rf(t,s)}let n=Hk(e);q_&&(n=n.concat(q_(e)));const r=W_(t),i=W_(e);for(let s=0;s<n.length;++s){const o=n[s];if(!jk[o]&&!(i&&i[o])&&!(r&&r[o])){const l=Wk(e,o);try{Bk(t,o,l)}catch{}}}}return t}var CT=hk,Kk=t=>{CT=t},Gk=[null,null];function Qk(t,e,n){qu(()=>t(...e),n)}function Yk(t,e,n,r,i,s){t.current=r,n.current=!1,i.current&&(i.current=null,s())}function Xk(t,e,n,r,i,s,o,l,u,c,d){if(!t)return()=>{};let p=!1,m=null;const v=()=>{if(p||!l.current)return;const x=e.getState();let C,E;try{C=r(x,i.current)}catch(_){E=_,m=_}E||(m=null),C===s.current?o.current||c():(s.current=C,u.current=C,o.current=!0,d())};return n.onStateChange=v,n.trySubscribe(),v(),()=>{if(p=!0,n.tryUnsubscribe(),n.onStateChange=null,m)throw m}}function Jk(t,e){return t===e}function Zk(t,e,n,{pure:r,areStatesEqual:i=Jk,areOwnPropsEqual:s=td,areStatePropsEqual:o=td,areMergedPropsEqual:l=td,forwardRef:u=!1,context:c=IT}={}){const d=c,p=bk(t),m=kk(e),v=Dk(n),S=!!t;return C=>{const E=C.displayName||C.name||"Component",_=`Connect(${E})`,T={shouldHandleStateChanges:S,displayName:_,wrappedComponentName:E,WrappedComponent:C,initMapStateToProps:p,initMapDispatchToProps:m,initMergeProps:v,areStatesEqual:i,areStatePropsEqual:o,areOwnPropsEqual:s,areMergedPropsEqual:l};function O(w){const[y,I,P]=de.useMemo(()=>{const{reactReduxForwardedRef:ye,...$n}=w;return[w.context,ye,$n]},[w]),k=de.useMemo(()=>{let ye=d;return y!=null&&y.Consumer,ye},[y,d]),b=de.useContext(k),R=!!w.store&&!!w.store.getState&&!!w.store.dispatch,dt=!!b&&!!b.store,qe=R?w.store:b.store,Sn=dt?b.getServerState:qe.getState,Je=de.useMemo(()=>Ck(qe.dispatch,T),[qe]),[$,K]=de.useMemo(()=>{if(!S)return Gk;const ye=RT(qe,R?void 0:b.subscription),$n=ye.notifyNestedSubs.bind(ye);return[ye,$n]},[qe,R,b]),Q=de.useMemo(()=>R?b:{...b,subscription:$},[R,b,$]),oe=de.useRef(void 0),ee=de.useRef(P),ce=de.useRef(void 0),ft=de.useRef(!1),Ke=de.useRef(!1),ze=de.useRef(void 0);qu(()=>(Ke.current=!0,()=>{Ke.current=!1}),[]);const Ze=de.useMemo(()=>()=>ce.current&&P===ee.current?ce.current:Je(qe.getState(),P),[qe,P]),jn=de.useMemo(()=>$n=>$?Xk(S,qe,$,Je,ee,oe,ft,Ke,ce,K,$n):()=>{},[$]);Qk(Yk,[ee,oe,ft,P,ce,K]);let Lt;try{Lt=CT(jn,Ze,Sn?()=>Je(Sn(),P):Ze)}catch(ye){throw ze.current&&(ye.message+=`
The error may be correlated with this previous error:
${ze.current.stack}

`),ye}qu(()=>{ze.current=void 0,ce.current=void 0,oe.current=Lt});const nn=de.useMemo(()=>de.createElement(C,{...Lt,ref:I}),[I,C,Lt]);return de.useMemo(()=>S?de.createElement(k.Provider,{value:Q},nn):nn,[k,nn,Q])}const L=de.memo(O);if(L.WrappedComponent=C,L.displayName=O.displayName=_,u){const y=de.forwardRef(function(P,k){return de.createElement(L,{...P,reactReduxForwardedRef:k})});return y.displayName=_,y.WrappedComponent=C,Rf(y,C)}return Rf(L,C)}}var Ks=Zk;function eb({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=de.useMemo(()=>{const c=RT(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),l=de.useMemo(()=>t.getState(),[t]);qu(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),l!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,l]);const u=e||IT;return de.createElement(u.Provider,{value:o},n)}var tb=eb;Kk(z.useSyncExternalStore);var G_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,v=c&63;u||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new rb;const m=s<<2|l>>4;if(r.push(m),c!==64){const v=l<<4&240|c>>2;if(r.push(v),p!==64){const S=c<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ib=function(t){const e=xT(t);return kT.encodeByteArray(e,!0)},Ku=function(t){return ib(t).replace(/\./g,"")},bT=function(t){try{return kT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=()=>sb().__FIREBASE_DEFAULTS__,ab=()=>{if(typeof process>"u"||typeof G_>"u")return;const t=G_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bT(t[1]);return e&&JSON.parse(e)},Dc=()=>{try{return ob()||ab()||lb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},OT=t=>{var e,n;return(n=(e=Dc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NT=t=>{const e=OT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},DT=()=>{var t;return(t=Dc())===null||t===void 0?void 0:t.config},LT=t=>{var e;return(e=Dc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ku(JSON.stringify(n)),Ku(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function hb(){var t;const e=(t=Dc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function db(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mb(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gb(){return!hb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yb(){try{return typeof indexedDB=="object"}catch{return!1}}function _b(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vb,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wb(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,l,r)}}function wb(t,e){return t.replace(Eb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Eb=/\{\$([^}]+)}/g;function Tb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Q_(s)&&Q_(o)){if(!Gu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Q_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ib(t,e){const n=new Sb(t,e);return n.subscribe.bind(n)}class Sb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=nd),i.error===void 0&&(i.error=nd),i.complete===void 0&&(i.complete=nd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class Br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ub;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cb(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ab(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ab(t){return t===ni?void 0:t}function Cb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const kb={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},bb=ie.INFO,Ob={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Nb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ob[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sm{constructor(e){this.name=e,this._logLevel=bb,this._logHandler=Nb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Db=(t,e)=>e.some(n=>t instanceof n);let Y_,X_;function Lb(){return Y_||(Y_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mb(){return X_||(X_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const VT=new WeakMap,Af=new WeakMap,UT=new WeakMap,rd=new WeakMap,om=new WeakMap;function Vb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&VT.set(n,t)}).catch(()=>{}),om.set(e,t),e}function Ub(t){if(Af.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Af.set(t,e)}let Cf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Af.get(t);if(e==="objectStoreNames")return t.objectStoreNames||UT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fb(t){Cf=t(Cf)}function jb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(id(this),e,...n);return UT.set(r,e.sort?e.sort():[e]),Ur(r)}:Mb().includes(t)?function(...e){return t.apply(id(this),e),Ur(VT.get(this))}:function(...e){return Ur(t.apply(id(this),e))}}function $b(t){return typeof t=="function"?jb(t):(t instanceof IDBTransaction&&Ub(t),Db(t,Lb())?new Proxy(t,Cf):t)}function Ur(t){if(t instanceof IDBRequest)return Vb(t);if(rd.has(t))return rd.get(t);const e=$b(t);return e!==t&&(rd.set(t,e),om.set(e,t)),e}const id=t=>om.get(t);function zb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ur(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ur(o.result),u.oldVersion,u.newVersion,Ur(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Bb=["get","getKey","getAll","getAllKeys","count"],Hb=["put","add","delete","clear"],sd=new Map;function J_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sd.get(e))return sd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Hb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Bb.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return sd.set(e,s),s}Fb(t=>({...t,get:(e,n,r)=>J_(e,n)||t.get(e,n,r),has:(e,n)=>!!J_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xf="@firebase/app",Z_="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new sm("@firebase/app"),Kb="@firebase/app-compat",Gb="@firebase/analytics-compat",Qb="@firebase/analytics",Yb="@firebase/app-check-compat",Xb="@firebase/app-check",Jb="@firebase/auth",Zb="@firebase/auth-compat",eO="@firebase/database",tO="@firebase/database-compat",nO="@firebase/functions",rO="@firebase/functions-compat",iO="@firebase/installations",sO="@firebase/installations-compat",oO="@firebase/messaging",aO="@firebase/messaging-compat",lO="@firebase/performance",uO="@firebase/performance-compat",cO="@firebase/remote-config",hO="@firebase/remote-config-compat",dO="@firebase/storage",fO="@firebase/storage-compat",pO="@firebase/firestore",mO="@firebase/vertexai-preview",gO="@firebase/firestore-compat",yO="firebase",_O="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="[DEFAULT]",vO={[xf]:"fire-core",[Kb]:"fire-core-compat",[Qb]:"fire-analytics",[Gb]:"fire-analytics-compat",[Xb]:"fire-app-check",[Yb]:"fire-app-check-compat",[Jb]:"fire-auth",[Zb]:"fire-auth-compat",[eO]:"fire-rtdb",[tO]:"fire-rtdb-compat",[nO]:"fire-fn",[rO]:"fire-fn-compat",[iO]:"fire-iid",[sO]:"fire-iid-compat",[oO]:"fire-fcm",[aO]:"fire-fcm-compat",[lO]:"fire-perf",[uO]:"fire-perf-compat",[cO]:"fire-rc",[hO]:"fire-rc-compat",[dO]:"fire-gcs",[fO]:"fire-gcs-compat",[pO]:"fire-fst",[gO]:"fire-fst-compat",[mO]:"fire-vertex","fire-js":"fire-js",[yO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map,wO=new Map,bf=new Map;function ev(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Si(t){const e=t.name;if(bf.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;bf.set(e,t);for(const n of Qu.values())ev(n,t);for(const n of wO.values())ev(n,t);return!0}function Lc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new $a("app","Firebase",EO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=_O;function FT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fr.create("bad-app-name",{appName:String(i)});if(n||(n=DT()),!n)throw Fr.create("no-options");const s=Qu.get(i);if(s){if(Gu(n,s.options)&&Gu(r,s.config))return s;throw Fr.create("duplicate-app",{appName:i})}const o=new xb(i);for(const u of bf.values())o.addComponent(u);const l=new TO(n,r,o);return Qu.set(i,l),l}function am(t=kf){const e=Qu.get(t);if(!e&&t===kf&&DT())return FT();if(!e)throw Fr.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let i=(r=vO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(l.join(" "));return}Si(new Br(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO="firebase-heartbeat-database",SO=1,Ta="firebase-heartbeat-store";let od=null;function jT(){return od||(od=zb(IO,SO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ta)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),od}async function PO(t){try{const n=(await jT()).transaction(Ta),r=await n.objectStore(Ta).get($T(t));return await n.done,r}catch(e){if(e instanceof Fn)ar.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function tv(t,e){try{const r=(await jT()).transaction(Ta,"readwrite");await r.objectStore(Ta).put(e,$T(t)),await r.done}catch(n){if(n instanceof Fn)ar.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function $T(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=1024,AO=30*24*60*60*1e3;class CO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=AO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nv(),{heartbeatsToSend:r,unsentEntries:i}=xO(this._heartbeatsCache.heartbeats),s=Ku(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ar.warn(n),""}}}function nv(){return new Date().toISOString().substring(0,10)}function xO(t,e=RO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yb()?_b().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rv(t){return Ku(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(t){Si(new Br("platform-logger",e=>new Wb(e),"PRIVATE")),Si(new Br("heartbeat",e=>new CO(e),"PRIVATE")),Nn(xf,Z_,t),Nn(xf,Z_,"esm2017"),Nn("fire-js","")}bO("");function zT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OO=zT,BT=new $a("auth","Firebase",zT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new sm("@firebase/auth");function NO(t,...e){Yu.logLevel<=ie.WARN&&Yu.warn(`Auth (${Ni}): ${t}`,...e)}function au(t,...e){Yu.logLevel<=ie.ERROR&&Yu.error(`Auth (${Ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,...e){throw um(t,...e)}function En(t,...e){return um(t,...e)}function lm(t,e,n){const r=Object.assign(Object.assign({},OO()),{[e]:n});return new $a("auth","Firebase",r).create(e,{appName:t.name})}function pi(t){return lm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function DO(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Vn(t,"argument-error"),lm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function um(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return BT.create(t,...e)}function Y(t,e,...n){if(!t)throw um(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw au(e),new Error(e)}function lr(t,e){t||Xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LO(){return iv()==="http:"||iv()==="https:"}function iv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LO()||fb()||"connection"in navigator)?navigator.onLine:!0}function VO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=cb()||pb()}get(){return MO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=new Ba(3e4,6e4);function hm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gs(t,e,n,r,i={}){return WT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=za(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return db()||(c.referrerPolicy="no-referrer"),HT.fetch()(qT(t,t.config.apiHost,n,l),c)})}async function WT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UO),e);try{const i=new $O(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Vl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Vl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw lm(t,d,c);Vn(t,d)}}catch(i){if(i instanceof Fn)throw i;Vn(t,"network-request-failed",{message:String(i)})}}async function jO(t,e,n,r,i={}){const s=await Gs(t,e,n,r,i);return"mfaPendingCredential"in s&&Vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?cm(t.config,i):`${t.config.apiScheme}://${i}`}class $O{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),FO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=En(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zO(t,e){return Gs(t,"POST","/v1/accounts:delete",e)}async function KT(t,e){return Gs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BO(t,e=!1){const n=ct(t),r=await n.getIdToken(e),i=dm(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Go(ad(i.auth_time)),issuedAtTime:Go(ad(i.iat)),expirationTime:Go(ad(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ad(t){return Number(t)*1e3}function dm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return au("JWT malformed, contained fewer than 3 sections"),null;try{const i=bT(n);return i?JSON.parse(i):(au("Failed to decode base64 JWT payload"),null)}catch(i){return au("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sv(t){const e=dm(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&HO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Go(this.lastLoginAt),this.creationTime=Go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ia(t,KT(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?GT(s.providerUserInfo):[],l=KO(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Nf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function qO(t){const e=ct(t);await Xu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function GT(t){return t.map(e=>{var{providerId:n}=e,r=Xp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GO(t,e){const n=await WT(t,{},async()=>{const r=za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=qT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",HT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QO(t,e){return Gs(t,"POST","/v2/accounts:revokeToken",hm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=sv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await GO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ys;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ia(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BO(this,e)}reload(){return qO(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yn(this.auth.app))return Promise.reject(pi(this.auth));const e=await this.getIdToken();return await Ia(this,zO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:O,isAnonymous:M,providerData:L,stsTokenManager:w}=n;Y(T&&w,e,"internal-error");const y=ys.fromJSON(this.name,w);Y(typeof T=="string",e,"internal-error"),gr(p,e.name),gr(m,e.name),Y(typeof O=="boolean",e,"internal-error"),Y(typeof M=="boolean",e,"internal-error"),gr(v,e.name),gr(S,e.name),gr(x,e.name),gr(C,e.name),gr(E,e.name),gr(_,e.name);const I=new Jn({uid:T,auth:e,email:m,emailVerified:O,displayName:p,isAnonymous:M,photoURL:S,phoneNumber:v,tenantId:x,stsTokenManager:y,createdAt:E,lastLoginAt:_});return L&&Array.isArray(L)&&(I.providerData=L.map(P=>Object.assign({},P))),C&&(I._redirectEventId=C),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new ys;i.updateFromServerResponse(n);const s=new Jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?GT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ys;l.updateFromIdToken(r);const u=new Jn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Nf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new Map;function Zn(t){lr(t instanceof Function,"Expected a class definition");let e=ov.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ov.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}QT.type="NONE";const av=QT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=lu(this.userKey,i.apiKey,s),this.fullPersistenceKey=lu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _s(Zn(av),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Zn(av);const o=lu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Jn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new _s(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new _s(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ZT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(YT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(t1(e))return"Blackberry";if(n1(e))return"Webos";if(XT(e))return"Safari";if((e.includes("chrome/")||JT(e))&&!e.includes("edge/"))return"Chrome";if(e1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function YT(t=Pt()){return/firefox\//i.test(t)}function XT(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JT(t=Pt()){return/crios\//i.test(t)}function ZT(t=Pt()){return/iemobile/i.test(t)}function e1(t=Pt()){return/android/i.test(t)}function t1(t=Pt()){return/blackberry/i.test(t)}function n1(t=Pt()){return/webos/i.test(t)}function fm(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YO(t=Pt()){var e;return fm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XO(){return mb()&&document.documentMode===10}function r1(t=Pt()){return fm(t)||e1(t)||n1(t)||t1(t)||/windows phone/i.test(t)||ZT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(t,e=[]){let n;switch(t){case"Browser":n=lv(Pt());break;case"Worker":n=`${lv(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ni}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZO(t,e={}){return Gs(t,"GET","/v2/passwordPolicy",hm(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=6;class tN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:eN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uv(this),this.idTokenSubscription=new uv(this),this.beforeStateQueue=new JO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await KT(this,{idToken:e}),r=await Jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yn(this.app))return Promise.reject(pi(this));const n=e?ct(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yn(this.app)?Promise.reject(pi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yn(this.app)?Promise.reject(pi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZO(this),n=new tN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[Zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mc(t){return ct(t)}class uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ib(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rN(t){pm=t}function iN(t){return pm.loadJS(t)}function sN(){return pm.gapiScript}function oN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(t,e){const n=Lc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gu(s,e??{}))return i;Vn(i,"already-initialized")}return n.initialize({options:e})}function lN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uN(t,e,n){const r=Mc(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=s1(e),{host:o,port:l}=cN(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),hN()}function s1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cN(t){const e=s1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cv(o)}}}function cv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e){return jO(t,"POST","/v1/accounts:signInWithIdp",hm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN="http://localhost";class Pi extends o1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Pi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:dN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=za(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends mm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Ha{constructor(){super("facebook.com")}static credential(e){return Pi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Ha{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pi._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Ha{constructor(){super("github.com")}static credential(e){return Pi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Ha{constructor(){super("twitter.com")}static credential(e,n){return Pi._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jn._fromIdTokenResponse(e,r,i),o=hv(r);return new Ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hv(r);return new Ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends Fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ju.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ju(e,n,r,i)}}function a1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ju._fromErrorAndOperation(t,s,e,r):s})}async function fN(t,e,n=!1){const r=await Ia(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ns._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e,n=!1){const{auth:r}=t;if(Yn(r.app))return Promise.reject(pi(r));const i="reauthenticate";try{const s=await Ia(t,a1(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=dm(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(t,e,n=!1){if(Yn(t.app))return Promise.reject(pi(t));const r="signIn",i=await a1(t,r,e),s=await Ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function gN(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function yN(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}const Zu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zu,"1"),this.storage.removeItem(Zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=1e3,vN=10;class u1 extends l1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=r1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);XO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_N)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}u1.type="LOCAL";const wN=u1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1 extends l1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}c1.type="SESSION";const h1=c1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await EN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=gm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return window}function IN(t){Dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function SN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RN(){return d1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="firebaseLocalStorageDb",AN=1,ec="firebaseLocalStorage",p1="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uc(t,e){return t.transaction([ec],e?"readwrite":"readonly").objectStore(ec)}function CN(){const t=indexedDB.deleteDatabase(f1);return new Wa(t).toPromise()}function Df(){const t=indexedDB.open(f1,AN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ec,{keyPath:p1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ec)?e(r):(r.close(),await CN(),e(await Df()))})})}async function dv(t,e,n){const r=Uc(t,!0).put({[p1]:e,value:n});return new Wa(r).toPromise()}async function xN(t,e){const n=Uc(t,!1).get(e),r=await new Wa(n).toPromise();return r===void 0?null:r.value}function fv(t,e){const n=Uc(t,!0).delete(e);return new Wa(n).toPromise()}const kN=800,bN=3;class m1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Df(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance(RN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SN(),!this.activeServiceWorker)return;this.sender=new TN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Df();return await dv(e,Zu,"1"),await fv(e,Zu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Uc(i,!1).getAll();return new Wa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m1.type="LOCAL";const ON=m1;new Ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t,e){return e?Zn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym extends o1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NN(t){return mN(t.auth,new ym(t),t.bypassAuthState)}function DN(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),pN(n,new ym(t),t.bypassAuthState)}async function LN(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),fN(n,new ym(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NN;case"linkViaPopup":case"linkViaRedirect":return LN;case"reauthViaPopup":case"reauthViaRedirect":return DN;default:Vn(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=new Ba(2e3,1e4);async function VN(t,e,n){if(Yn(t.app))return Promise.reject(En(t,"operation-not-supported-in-this-environment"));const r=Mc(t);DO(t,e,mm);const i=g1(r,n);return new ai(r,"signInViaPopup",e,i).executeNotNull()}class ai extends y1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=gm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MN.get())};e()}}ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN="pendingRedirect",uu=new Map;class FN extends y1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=uu.get(this.auth._key());if(!e){try{const r=await jN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}uu.set(this.auth._key(),e)}return this.bypassAuthState||uu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jN(t,e){const n=BN(e),r=zN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $N(t,e){uu.set(t._key(),e)}function zN(t){return Zn(t._redirectPersistence)}function BN(t){return lu(UN,t.config.apiKey,t.name)}async function HN(t,e,n=!1){if(Yn(t.app))return Promise.reject(pi(t));const r=Mc(t),i=g1(r,e),o=await new FN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=10*60*1e3;class qN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WN&&this.cachedEventUids.clear(),this.cachedEventUids.has(pv(e))}saveEventToCache(e){this.cachedEventUids.add(pv(e)),this.lastProcessedEventTime=Date.now()}}function pv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(t,e={}){return Gs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YN=/^https?/;async function XN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GN(t);for(const n of e)try{if(JN(n))return}catch{}Vn(t,"unauthorized-domain")}function JN(t){const e=Of(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YN.test(n))return!1;if(QN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=new Ba(3e4,6e4);function mv(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eD(t){return new Promise((e,n)=>{var r,i,s;function o(){mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mv(),n(En(t,"network-request-failed"))},timeout:ZN.get()})}if(!((i=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Dn().gapi)===null||s===void 0)&&s.load)o();else{const l=oN("iframefcb");return Dn()[l]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},iN(`${sN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw cu=null,e})}let cu=null;function tD(t){return cu=cu||eD(t),cu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=new Ba(5e3,15e3),rD="__/auth/iframe",iD="emulator/auth/iframe",sD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aD(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cm(e,iD):`https://${t.config.authDomain}/${rD}`,r={apiKey:e.apiKey,appName:t.name,v:Ni},i=oD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${za(r).slice(1)}`}async function lD(t){const e=await tD(t),n=Dn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:aD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),l=Dn().setTimeout(()=>{s(o)},nD.get());function u(){Dn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cD=500,hD=600,dD="_blank",fD="http://localhost";class gv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pD(t,e,n,r=cD,i=hD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},uD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Pt().toLowerCase();n&&(l=JT(c)?dD:n),YT(c)&&(e=e||fD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[v,S])=>`${m}${v}=${S},`,"");if(YO(c)&&l!=="_self")return mD(e||"",l),new gv(null);const p=window.open(e||"",l,d);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new gv(p)}function mD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD="__/auth/handler",yD="emulator/auth/handler",_D=encodeURIComponent("fac");async function yv(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ni,eventId:i};if(e instanceof mm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ha){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${_D}=${encodeURIComponent(u)}`:"";return`${vD(t)}?${za(l).slice(1)}${c}`}function vD({config:t}){return t.emulator?cm(t,yD):`https://${t.authDomain}/${gD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="webStorageSupport";class wD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h1,this._completeRedirectFn=HN,this._overrideRedirectResult=$N}async _openPopup(e,n,r,i){var s;lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yv(e,n,r,Of(),i);return pD(e,o,gm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yv(e,n,r,Of(),i);return IN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lD(e),r=new qN(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ld,{type:ld},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ld];o!==void 0&&n(!!o),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return r1()||XT()||fm()}}const ED=wD;var _v="@firebase/auth",vv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SD(t){Si(new Br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i1(t)},c=new nN(r,i,s,u);return lN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Si(new Br("auth-internal",e=>{const n=Mc(e.getProvider("auth").getImmediate());return(r=>new TD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(_v,vv,ID(t)),Nn(_v,vv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=5*60,RD=LT("authIdTokenMaxAge")||PD;let wv=null;const AD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RD)return;const i=n==null?void 0:n.token;wv!==i&&(wv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function CD(t=am()){const e=Lc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aN(t,{popupRedirectResolver:ED,persistence:[ON,wN,h1]}),r=LT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=AD(s.toString());yN(n,o,()=>o(n.currentUser)),gN(n,l=>o(l))}}const i=OT("auth");return i&&uN(n,`http://${i}`),n}function xD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=En("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SD("Browser");var kD="firebase",bD="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(kD,bD,"app");var Ev=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mi,v1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.D=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(P,k,b){for(var R=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)R[dt-2]=arguments[dt];return y.prototype[k].apply(P,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,I){I||(I=0);var P=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)P[k]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(k=0;16>k;++k)P[k]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],k=w.g[2];var b=w.g[3],R=y+(b^I&(k^b))+P[0]+3614090360&4294967295;y=I+(R<<7&4294967295|R>>>25),R=b+(k^y&(I^k))+P[1]+3905402710&4294967295,b=y+(R<<12&4294967295|R>>>20),R=k+(I^b&(y^I))+P[2]+606105819&4294967295,k=b+(R<<17&4294967295|R>>>15),R=I+(y^k&(b^y))+P[3]+3250441966&4294967295,I=k+(R<<22&4294967295|R>>>10),R=y+(b^I&(k^b))+P[4]+4118548399&4294967295,y=I+(R<<7&4294967295|R>>>25),R=b+(k^y&(I^k))+P[5]+1200080426&4294967295,b=y+(R<<12&4294967295|R>>>20),R=k+(I^b&(y^I))+P[6]+2821735955&4294967295,k=b+(R<<17&4294967295|R>>>15),R=I+(y^k&(b^y))+P[7]+4249261313&4294967295,I=k+(R<<22&4294967295|R>>>10),R=y+(b^I&(k^b))+P[8]+1770035416&4294967295,y=I+(R<<7&4294967295|R>>>25),R=b+(k^y&(I^k))+P[9]+2336552879&4294967295,b=y+(R<<12&4294967295|R>>>20),R=k+(I^b&(y^I))+P[10]+4294925233&4294967295,k=b+(R<<17&4294967295|R>>>15),R=I+(y^k&(b^y))+P[11]+2304563134&4294967295,I=k+(R<<22&4294967295|R>>>10),R=y+(b^I&(k^b))+P[12]+1804603682&4294967295,y=I+(R<<7&4294967295|R>>>25),R=b+(k^y&(I^k))+P[13]+4254626195&4294967295,b=y+(R<<12&4294967295|R>>>20),R=k+(I^b&(y^I))+P[14]+2792965006&4294967295,k=b+(R<<17&4294967295|R>>>15),R=I+(y^k&(b^y))+P[15]+1236535329&4294967295,I=k+(R<<22&4294967295|R>>>10),R=y+(k^b&(I^k))+P[1]+4129170786&4294967295,y=I+(R<<5&4294967295|R>>>27),R=b+(I^k&(y^I))+P[6]+3225465664&4294967295,b=y+(R<<9&4294967295|R>>>23),R=k+(y^I&(b^y))+P[11]+643717713&4294967295,k=b+(R<<14&4294967295|R>>>18),R=I+(b^y&(k^b))+P[0]+3921069994&4294967295,I=k+(R<<20&4294967295|R>>>12),R=y+(k^b&(I^k))+P[5]+3593408605&4294967295,y=I+(R<<5&4294967295|R>>>27),R=b+(I^k&(y^I))+P[10]+38016083&4294967295,b=y+(R<<9&4294967295|R>>>23),R=k+(y^I&(b^y))+P[15]+3634488961&4294967295,k=b+(R<<14&4294967295|R>>>18),R=I+(b^y&(k^b))+P[4]+3889429448&4294967295,I=k+(R<<20&4294967295|R>>>12),R=y+(k^b&(I^k))+P[9]+568446438&4294967295,y=I+(R<<5&4294967295|R>>>27),R=b+(I^k&(y^I))+P[14]+3275163606&4294967295,b=y+(R<<9&4294967295|R>>>23),R=k+(y^I&(b^y))+P[3]+4107603335&4294967295,k=b+(R<<14&4294967295|R>>>18),R=I+(b^y&(k^b))+P[8]+1163531501&4294967295,I=k+(R<<20&4294967295|R>>>12),R=y+(k^b&(I^k))+P[13]+2850285829&4294967295,y=I+(R<<5&4294967295|R>>>27),R=b+(I^k&(y^I))+P[2]+4243563512&4294967295,b=y+(R<<9&4294967295|R>>>23),R=k+(y^I&(b^y))+P[7]+1735328473&4294967295,k=b+(R<<14&4294967295|R>>>18),R=I+(b^y&(k^b))+P[12]+2368359562&4294967295,I=k+(R<<20&4294967295|R>>>12),R=y+(I^k^b)+P[5]+4294588738&4294967295,y=I+(R<<4&4294967295|R>>>28),R=b+(y^I^k)+P[8]+2272392833&4294967295,b=y+(R<<11&4294967295|R>>>21),R=k+(b^y^I)+P[11]+1839030562&4294967295,k=b+(R<<16&4294967295|R>>>16),R=I+(k^b^y)+P[14]+4259657740&4294967295,I=k+(R<<23&4294967295|R>>>9),R=y+(I^k^b)+P[1]+2763975236&4294967295,y=I+(R<<4&4294967295|R>>>28),R=b+(y^I^k)+P[4]+1272893353&4294967295,b=y+(R<<11&4294967295|R>>>21),R=k+(b^y^I)+P[7]+4139469664&4294967295,k=b+(R<<16&4294967295|R>>>16),R=I+(k^b^y)+P[10]+3200236656&4294967295,I=k+(R<<23&4294967295|R>>>9),R=y+(I^k^b)+P[13]+681279174&4294967295,y=I+(R<<4&4294967295|R>>>28),R=b+(y^I^k)+P[0]+3936430074&4294967295,b=y+(R<<11&4294967295|R>>>21),R=k+(b^y^I)+P[3]+3572445317&4294967295,k=b+(R<<16&4294967295|R>>>16),R=I+(k^b^y)+P[6]+76029189&4294967295,I=k+(R<<23&4294967295|R>>>9),R=y+(I^k^b)+P[9]+3654602809&4294967295,y=I+(R<<4&4294967295|R>>>28),R=b+(y^I^k)+P[12]+3873151461&4294967295,b=y+(R<<11&4294967295|R>>>21),R=k+(b^y^I)+P[15]+530742520&4294967295,k=b+(R<<16&4294967295|R>>>16),R=I+(k^b^y)+P[2]+3299628645&4294967295,I=k+(R<<23&4294967295|R>>>9),R=y+(k^(I|~b))+P[0]+4096336452&4294967295,y=I+(R<<6&4294967295|R>>>26),R=b+(I^(y|~k))+P[7]+1126891415&4294967295,b=y+(R<<10&4294967295|R>>>22),R=k+(y^(b|~I))+P[14]+2878612391&4294967295,k=b+(R<<15&4294967295|R>>>17),R=I+(b^(k|~y))+P[5]+4237533241&4294967295,I=k+(R<<21&4294967295|R>>>11),R=y+(k^(I|~b))+P[12]+1700485571&4294967295,y=I+(R<<6&4294967295|R>>>26),R=b+(I^(y|~k))+P[3]+2399980690&4294967295,b=y+(R<<10&4294967295|R>>>22),R=k+(y^(b|~I))+P[10]+4293915773&4294967295,k=b+(R<<15&4294967295|R>>>17),R=I+(b^(k|~y))+P[1]+2240044497&4294967295,I=k+(R<<21&4294967295|R>>>11),R=y+(k^(I|~b))+P[8]+1873313359&4294967295,y=I+(R<<6&4294967295|R>>>26),R=b+(I^(y|~k))+P[15]+4264355552&4294967295,b=y+(R<<10&4294967295|R>>>22),R=k+(y^(b|~I))+P[6]+2734768916&4294967295,k=b+(R<<15&4294967295|R>>>17),R=I+(b^(k|~y))+P[13]+1309151649&4294967295,I=k+(R<<21&4294967295|R>>>11),R=y+(k^(I|~b))+P[4]+4149444226&4294967295,y=I+(R<<6&4294967295|R>>>26),R=b+(I^(y|~k))+P[11]+3174756917&4294967295,b=y+(R<<10&4294967295|R>>>22),R=k+(y^(b|~I))+P[2]+718787259&4294967295,k=b+(R<<15&4294967295|R>>>17),R=I+(b^(k|~y))+P[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var I=y-this.blockSize,P=this.B,k=this.h,b=0;b<y;){if(k==0)for(;b<=I;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<y;)if(P[k++]=w.charCodeAt(b++),k==this.blockSize){i(this,P),k=0;break}}else for(;b<y;)if(P[k++]=w[b++],k==this.blockSize){i(this,P),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var I=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=I&255,I/=256;for(this.u(w),w=Array(16),y=I=0;4>y;++y)for(var P=0;32>P;P+=8)w[I++]=this.g[y]>>>P&255;return w};function s(w,y){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function o(w,y){this.h=y;for(var I=[],P=!0,k=w.length-1;0<=k;k--){var b=w[k]|0;P&&b==y||(I[k]=b,P=!1)}this.g=I}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return C(c(-w));for(var y=[],I=1,P=0;w>=I;P++)y[P]=w/I|0,I*=4294967296;return new o(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return C(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(y,8)),P=p,k=0;k<w.length;k+=8){var b=Math.min(8,w.length-k),R=parseInt(w.substring(k,k+b),y);8>b?(b=c(Math.pow(y,b)),P=P.j(b).add(c(R))):(P=P.j(I),P=P.add(c(R)))}return P}var p=u(0),m=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-C(this).m();for(var w=0,y=1,I=0;I<this.g.length;I++){var P=this.i(I);w+=(0<=P?P:4294967296+P)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(x(this))return"-"+C(this).toString(w);for(var y=c(Math.pow(w,6)),I=this,P="";;){var k=O(I,y).g;I=E(I,k.j(y));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=k,S(I))return b+P;for(;6>b.length;)b="0"+b;P=b+P}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function x(w){return w.h==-1}t.l=function(w){return w=E(this,w),x(w)?-1:S(w)?0:1};function C(w){for(var y=w.g.length,I=[],P=0;P<y;P++)I[P]=~w.g[P];return new o(I,~w.h).add(m)}t.abs=function(){return x(this)?C(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],P=0,k=0;k<=y;k++){var b=P+(this.i(k)&65535)+(w.i(k)&65535),R=(b>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);P=R>>>16,b&=65535,R&=65535,I[k]=R<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function E(w,y){return w.add(C(y))}t.j=function(w){if(S(this)||S(w))return p;if(x(this))return x(w)?C(this).j(C(w)):C(C(this).j(w));if(x(w))return C(this.j(C(w)));if(0>this.l(v)&&0>w.l(v))return c(this.m()*w.m());for(var y=this.g.length+w.g.length,I=[],P=0;P<2*y;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(var k=0;k<w.g.length;k++){var b=this.i(P)>>>16,R=this.i(P)&65535,dt=w.i(k)>>>16,qe=w.i(k)&65535;I[2*P+2*k]+=R*qe,_(I,2*P+2*k),I[2*P+2*k+1]+=b*qe,_(I,2*P+2*k+1),I[2*P+2*k+1]+=R*dt,_(I,2*P+2*k+1),I[2*P+2*k+2]+=b*dt,_(I,2*P+2*k+2)}for(P=0;P<y;P++)I[P]=I[2*P+1]<<16|I[2*P];for(P=y;P<2*y;P++)I[P]=0;return new o(I,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function T(w,y){this.g=w,this.h=y}function O(w,y){if(S(y))throw Error("division by zero");if(S(w))return new T(p,p);if(x(w))return y=O(C(w),y),new T(C(y.g),C(y.h));if(x(y))return y=O(w,C(y)),new T(C(y.g),y.h);if(30<w.g.length){if(x(w)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,P=y;0>=P.l(w);)I=M(I),P=M(P);var k=L(I,1),b=L(P,1);for(P=L(P,2),I=L(I,2);!S(P);){var R=b.add(P);0>=R.l(w)&&(k=k.add(I),b=R),P=L(P,1),I=L(I,1)}return y=E(w,k.j(y)),new T(k,y)}for(k=p;0<=w.l(y);){for(I=Math.max(1,Math.floor(w.m()/y.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),b=c(I),R=b.j(y);x(R)||0<R.l(w);)I-=P,b=c(I),R=b.j(y);S(b)&&(b=m),k=k.add(b),w=E(w,R)}return new T(k,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],P=0;P<y;P++)I[P]=this.i(P)&w.i(P);return new o(I,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],P=0;P<y;P++)I[P]=this.i(P)|w.i(P);return new o(I,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],P=0;P<y;P++)I[P]=this.i(P)^w.i(P);return new o(I,this.h^w.h)};function M(w){for(var y=w.g.length+1,I=[],P=0;P<y;P++)I[P]=w.i(P)<<1|w.i(P-1)>>>31;return new o(I,w.h)}function L(w,y){var I=y>>5;y%=32;for(var P=w.g.length-I,k=[],b=0;b<P;b++)k[b]=0<y?w.i(b+I)>>>y|w.i(b+I+1)<<32-y:w.i(b+I);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,v1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,mi=o}).apply(typeof Ev<"u"?Ev:typeof self<"u"?self:typeof window<"u"?window:{});var Ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var w1,E1,No,T1,hu,Lf,I1,S1,P1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ul=="object"&&Ul];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in f))break e;f=f[N]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,N={next:function(){if(!g&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,N,D){for(var j=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)j[pe-2]=arguments[pe];return h.prototype[N].apply(g,j)}}function x(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function C(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const N=a.length||0,D=g.length||0;a.length=N+D;for(let j=0;j<D;j++)a[N+j]=g[j]}else a.push(g)}}class E{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var M=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function L(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function w(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(a,h){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)a[f]=g[f];for(let D=0;D<I.length;D++)f=I[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function k(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function R(){var a=K;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class dt{constructor(){this.h=this.g=null}add(h,f){const g=qe.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var qe=new E(()=>new Sn,a=>a.reset());class Sn{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Je,$=!1,K=new dt,Q=()=>{const a=l.Promise.resolve(void 0);Je=()=>{a.then(oe)}};var oe=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(f){b(f)}var h=qe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var ft=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Ke(a,h){if(ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{O(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ze[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ke.aa.h.call(this)}}S(Ke,ce);var ze={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ze="closure_listenable_"+(1e6*Math.random()|0),jn=0;function Lt(a,h,f,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=N,this.key=++jn,this.da=this.fa=!1}function nn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pn(a){this.src=a,this.g={},this.h=0}Pn.prototype.add=function(a,h,f,g,N){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var j=$n(a,h,g,N);return-1<j?(h=a[j],f||(h.fa=!1)):(h=new Lt(h,this.src,D,!!g,N),h.fa=f,a.push(h)),h};function ye(a,h){var f=h.type;if(f in a.g){var g=a.g[f],N=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=N)&&Array.prototype.splice.call(g,N,1),D&&(nn(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function $n(a,h,f,g){for(var N=0;N<a.length;++N){var D=a[N];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return N}return-1}var nh="closure_lm_"+(1e6*Math.random()|0),rh={};function ug(a,h,f,g,N){if(Array.isArray(h)){for(var D=0;D<h.length;D++)ug(a,h[D],f,g,N);return null}return f=dg(f),a&&a[Ze]?a.K(h,f,c(g)?!!g.capture:!!g,N):oP(a,h,f,!1,g,N)}function oP(a,h,f,g,N,D){if(!h)throw Error("Invalid event type");var j=c(N)?!!N.capture:!!N,pe=sh(a);if(pe||(a[nh]=pe=new Pn(a)),f=pe.add(h,f,g,j,D),f.proxy)return f;if(g=aP(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)ft||(N=j),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(hg(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function aP(){function a(f){return h.call(a.src,a.listener,f)}const h=lP;return a}function cg(a,h,f,g,N){if(Array.isArray(h))for(var D=0;D<h.length;D++)cg(a,h[D],f,g,N);else g=c(g)?!!g.capture:!!g,f=dg(f),a&&a[Ze]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=$n(D,f,g,N),-1<f&&(nn(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=sh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=$n(h,f,g,N)),(f=-1<a?h[a]:null)&&ih(f))}function ih(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ze])ye(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(hg(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=sh(h))?(ye(f,a),f.h==0&&(f.src=null,h[nh]=null)):nn(a)}}}function hg(a){return a in rh?rh[a]:rh[a]="on"+a}function lP(a,h){if(a.da)a=!0;else{h=new Ke(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&ih(a),a=f.call(g,h)}return a}function sh(a){return a=a[nh],a instanceof Pn?a:null}var oh="__closure_events_fn_"+(1e9*Math.random()>>>0);function dg(a){return typeof a=="function"?a:(a[oh]||(a[oh]=function(h){return a.handleEvent(h)}),a[oh])}function pt(){ee.call(this),this.i=new Pn(this),this.M=this,this.F=null}S(pt,ee),pt.prototype[Ze]=!0,pt.prototype.removeEventListener=function(a,h,f,g){cg(this,a,h,f,g)};function Rt(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new ce(h,a);else if(h instanceof ce)h.target=h.target||a;else{var N=h;h=new ce(g,a),P(h,N)}if(N=!0,f)for(var D=f.length-1;0<=D;D--){var j=h.g=f[D];N=rl(j,g,!0,h)&&N}if(j=h.g=a,N=rl(j,g,!0,h)&&N,N=rl(j,g,!1,h)&&N,f)for(D=0;D<f.length;D++)j=h.g=f[D],N=rl(j,g,!1,h)&&N}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)nn(f[g]);delete a.g[h],a.h--}}this.F=null},pt.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},pt.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function rl(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,D=0;D<h.length;++D){var j=h[D];if(j&&!j.da&&j.capture==f){var pe=j.listener,et=j.ha||j.src;j.fa&&ye(a.i,j),N=pe.call(et,g)!==!1&&N}}return N&&!g.defaultPrevented}function fg(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function pg(a){a.g=fg(()=>{a.g=null,a.i&&(a.i=!1,pg(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class uP extends ee{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:pg(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function to(a){ee.call(this),this.h=a,this.g={}}S(to,ee);var mg=[];function gg(a){L(a.g,function(h,f){this.g.hasOwnProperty(f)&&ih(h)},a),a.g={}}to.prototype.N=function(){to.aa.N.call(this),gg(this)},to.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ah=l.JSON.stringify,cP=l.JSON.parse,hP=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function lh(){}lh.prototype.h=null;function yg(a){return a.h||(a.h=a.i())}function _g(){}var no={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function uh(){ce.call(this,"d")}S(uh,ce);function ch(){ce.call(this,"c")}S(ch,ce);var Yr={},vg=null;function il(){return vg=vg||new pt}Yr.La="serverreachability";function wg(a){ce.call(this,Yr.La,a)}S(wg,ce);function ro(a){const h=il();Rt(h,new wg(h))}Yr.STAT_EVENT="statevent";function Eg(a,h){ce.call(this,Yr.STAT_EVENT,a),this.stat=h}S(Eg,ce);function At(a){const h=il();Rt(h,new Eg(h,a))}Yr.Ma="timingevent";function Tg(a,h){ce.call(this,Yr.Ma,a),this.size=h}S(Tg,ce);function io(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function so(){this.g=!0}so.prototype.xa=function(){this.g=!1};function dP(a,h,f,g,N,D){a.info(function(){if(a.g)if(D)for(var j="",pe=D.split("&"),et=0;et<pe.length;et++){var le=pe[et].split("=");if(1<le.length){var mt=le[0];le=le[1];var gt=mt.split("_");j=2<=gt.length&&gt[1]=="type"?j+(mt+"="+le+"&"):j+(mt+"=redacted&")}}else j=null;else j=D;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+f+`
`+j})}function fP(a,h,f,g,N,D,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+f+`
`+D+" "+j})}function Vi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+mP(a,f)+(g?" "+g:"")})}function pP(a,h){a.info(function(){return"TIMEOUT: "+h})}so.prototype.info=function(){};function mP(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var j=1;j<N.length;j++)N[j]=""}}}}return ah(f)}catch{return h}}var sl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ig={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hh;function ol(){}S(ol,lh),ol.prototype.g=function(){return new XMLHttpRequest},ol.prototype.i=function(){return{}},hh=new ol;function dr(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new to(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sg}function Sg(){this.i=null,this.g="",this.h=!1}var Pg={},dh={};function fh(a,h,f){a.L=1,a.v=cl(zn(h)),a.m=f,a.P=!0,Rg(a,null)}function Rg(a,h){a.F=Date.now(),al(a),a.A=zn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),jg(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Sg,a.g=iy(a.j,f?h:null,!a.m),0<a.O&&(a.M=new uP(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(mg[0]=N.toString()),N=mg);for(var D=0;D<N.length;D++){var j=ug(f,N[D],g||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ro(),dP(a.i,a.u,a.A,a.l,a.R,a.m)}dr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Bn(a)==3?h.j():this.Y(a)},dr.prototype.Y=function(a){try{if(a==this.g)e:{const gt=Bn(this.g);var h=this.g.Ba();const ji=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Kg(this.g)))){this.J||gt!=4||h==7||(h==8||0>=ji?ro(3):ro(2)),ph(this);var f=this.g.Z();this.X=f;t:if(Ag(this)){var g=Kg(this.g);a="";var N=g.length,D=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),oo(this);var j="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==N-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,fP(this.i,this.u,this.A,this.l,this.R,gt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,et=this.g;if((pe=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(pe)){var le=pe;break t}}le=null}if(f=le)Vi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mh(this,f);else{this.o=!1,this.s=3,At(12),Xr(this),oo(this);break e}}if(this.P){f=!0;let dn;for(;!this.J&&this.C<j.length;)if(dn=gP(this,j),dn==dh){gt==4&&(this.s=4,At(14),f=!1),Vi(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==Pg){this.s=4,At(15),Vi(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else Vi(this.i,this.l,dn,null),mh(this,dn);if(Ag(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||j.length!=0||this.h.h||(this.s=1,At(16),f=!1),this.o=this.o&&f,!f)Vi(this.i,this.l,j,"[Invalid Chunked Response]"),Xr(this),oo(this);else if(0<j.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Eh(mt),mt.M=!0,At(11))}}else Vi(this.i,this.l,j,null),mh(this,j);gt==4&&Xr(this),this.o&&!this.J&&(gt==4?ey(this.j,this):(this.o=!1,al(this)))}else NP(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Xr(this),oo(this)}}}catch{}finally{}};function Ag(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function gP(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?dh:(f=Number(h.substring(f,g)),isNaN(f)?Pg:(g+=1,g+f>h.length?dh:(h=h.slice(g,g+f),a.C=g+f,h)))}dr.prototype.cancel=function(){this.J=!0,Xr(this)};function al(a){a.S=Date.now()+a.I,Cg(a,a.I)}function Cg(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=io(m(a.ba,a),h)}function ph(a){a.B&&(l.clearTimeout(a.B),a.B=null)}dr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(pP(this.i,this.A),this.L!=2&&(ro(),At(17)),Xr(this),this.s=2,oo(this)):Cg(this,this.S-a)};function oo(a){a.j.G==0||a.J||ey(a.j,a)}function Xr(a){ph(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,gg(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function mh(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||gh(f.h,a))){if(!a.K&&gh(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ml(f),fl(f);else break e;wh(f),At(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=io(m(f.Za,f),6e3));if(1>=bg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Zr(f,11)}else if((a.K||f.g==a)&&ml(f),!_(h))for(N=f.Da.g.parse(h),h=0;h<N.length;h++){let le=N[h];if(f.T=le[0],le=le[1],f.G==2)if(le[0]=="c"){f.K=le[1],f.ia=le[2];const mt=le[3];mt!=null&&(f.la=mt,f.j.info("VER="+f.la));const gt=le[4];gt!=null&&(f.Aa=gt,f.j.info("SVER="+f.Aa));const ji=le[5];ji!=null&&typeof ji=="number"&&0<ji&&(g=1.5*ji,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const dn=a.g;if(dn){const yl=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yl){var D=g.h;D.g||yl.indexOf("spdy")==-1&&yl.indexOf("quic")==-1&&yl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(yh(D,D.h),D.h=null))}if(g.D){const Th=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Th&&(g.ya=Th,_e(g.I,g.D,Th))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=a;if(g.qa=ry(g,g.J?g.ia:null,g.W),j.K){Og(g.h,j);var pe=j,et=g.L;et&&(pe.I=et),pe.B&&(ph(pe),al(pe)),g.g=j}else Jg(g);0<f.i.length&&pl(f)}else le[0]!="stop"&&le[0]!="close"||Zr(f,7);else f.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Zr(f,7):vh(f):le[0]!="noop"&&f.l&&f.l.ta(le),f.v=0)}}ro(4)}catch{}}var yP=class{constructor(a,h){this.g=a,this.map=h}};function xg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bg(a){return a.h?1:a.g?a.g.size:0}function gh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function yh(a,h){a.g?a.g.add(h):a.h=h}function Og(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}xg.prototype.cancel=function(){if(this.i=Ng(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ng(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return x(a.i)}function _P(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function vP(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Dg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=vP(a),g=_P(a),N=g.length,D=0;D<N;D++)h.call(void 0,g[D],f&&f[D],a)}var Lg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wP(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),N=null;if(0<=g){var D=a[f].substring(0,g);N=a[f].substring(g+1)}else D=a[f];h(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Jr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Jr){this.h=a.h,ll(this,a.j),this.o=a.o,this.g=a.g,ul(this,a.s),this.l=a.l;var h=a.i,f=new uo;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Mg(this,f),this.m=a.m}else a&&(h=String(a).match(Lg))?(this.h=!1,ll(this,h[1]||"",!0),this.o=ao(h[2]||""),this.g=ao(h[3]||"",!0),ul(this,h[4]),this.l=ao(h[5]||"",!0),Mg(this,h[6]||"",!0),this.m=ao(h[7]||"")):(this.h=!1,this.i=new uo(null,this.h))}Jr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(lo(h,Vg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(lo(h,Vg,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(lo(f,f.charAt(0)=="/"?IP:TP,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",lo(f,PP)),a.join("")};function zn(a){return new Jr(a)}function ll(a,h,f){a.j=f?ao(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ul(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Mg(a,h,f){h instanceof uo?(a.i=h,RP(a.i,a.h)):(f||(h=lo(h,SP)),a.i=new uo(h,a.h))}function _e(a,h,f){a.i.set(h,f)}function cl(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ao(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function lo(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,EP),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function EP(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vg=/[#\/\?@]/g,TP=/[#\?:]/g,IP=/[#\?]/g,SP=/[#\?@]/g,PP=/#/g;function uo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function fr(a){a.g||(a.g=new Map,a.h=0,a.i&&wP(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=uo.prototype,t.add=function(a,h){fr(this),this.i=null,a=Ui(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Ug(a,h){fr(a),h=Ui(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Fg(a,h){return fr(a),h=Ui(a,h),a.g.has(h)}t.forEach=function(a,h){fr(this),this.g.forEach(function(f,g){f.forEach(function(N){a.call(h,N,g,this)},this)},this)},t.na=function(){fr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const N=a[g];for(let D=0;D<N.length;D++)f.push(h[g])}return f},t.V=function(a){fr(this);let h=[];if(typeof a=="string")Fg(this,a)&&(h=h.concat(this.g.get(Ui(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return fr(this),this.i=null,a=Ui(this,a),Fg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function jg(a,h,f){Ug(a,h),0<f.length&&(a.i=null,a.g.set(Ui(a,h),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var N=D;j[g]!==""&&(N+="="+encodeURIComponent(String(j[g]))),a.push(N)}}return this.i=a.join("&")};function Ui(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function RP(a,h){h&&!a.j&&(fr(a),a.i=null,a.g.forEach(function(f,g){var N=g.toLowerCase();g!=N&&(Ug(this,g),jg(this,N,f))},a)),a.j=h}function AP(a,h){const f=new so;if(l.Image){const g=new Image;g.onload=v(pr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=v(pr,f,"TestLoadImage: error",!1,h,g),g.onabort=v(pr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(pr,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function CP(a,h){const f=new so,g=new AbortController,N=setTimeout(()=>{g.abort(),pr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(N),D.ok?pr(f,"TestPingServer: ok",!0,h):pr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),pr(f,"TestPingServer: error",!1,h)})}function pr(a,h,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function xP(){this.g=new hP}function kP(a,h,f){const g=f||"";try{Dg(a,function(N,D){let j=N;c(N)&&(j=ah(N)),h.push(g+D+"="+encodeURIComponent(j))})}catch(N){throw h.push(g+"type="+encodeURIComponent("_badmap")),N}}function co(a){this.l=a.Ub||null,this.j=a.eb||!1}S(co,lh),co.prototype.g=function(){return new hl(this.l,this.j)},co.prototype.i=function(a){return function(){return a}}({});function hl(a,h){pt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(hl,pt),t=hl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,fo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ho(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fo(this)),this.g&&(this.readyState=3,fo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$g(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function $g(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ho(this):fo(this),this.readyState==3&&$g(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ho(this))},t.Qa=function(a){this.g&&(this.response=a,ho(this))},t.ga=function(){this.g&&ho(this)};function ho(a){a.readyState=4,a.l=null,a.j=null,a.v=null,fo(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function fo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(hl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function zg(a){let h="";return L(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function _h(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=zg(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):_e(a,h,f))}function ke(a){pt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ke,pt);var bP=/^https?$/i,OP=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hh.g(),this.v=this.o?yg(this.o):yg(hh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Bg(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(OP,h,void 0))||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,j]of f)this.g.setRequestHeader(D,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qg(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Bg(this,D)}};function Bg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Hg(a),dl(a)}function Hg(a){a.A||(a.A=!0,Rt(a,"complete"),Rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Rt(this,"complete"),Rt(this,"abort"),dl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dl(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Wg(this):this.bb())},t.bb=function(){Wg(this)};function Wg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Bn(a)!=4||a.Z()!=2)){if(a.u&&Bn(a)==4)fg(a.Ea,0,a);else if(Rt(a,"readystatechange"),Bn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=j===0){var N=String(a.D).match(Lg)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),g=!bP.test(N?N.toLowerCase():"")}f=g}if(f)Rt(a,"complete"),Rt(a,"success");else{a.m=6;try{var D=2<Bn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Hg(a)}}finally{dl(a)}}}}function dl(a,h){if(a.g){qg(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Rt(a,"ready");try{f.onreadystatechange=g}catch{}}}function qg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),cP(h)}};function Kg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function NP(a){const h={};a=(a.g&&2<=Bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=k(a[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[N]||[];h[N]=D,D.push(f)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function po(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Gg(a){this.Aa=0,this.i=[],this.j=new so,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=po("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=po("baseRetryDelayMs",5e3,a),this.cb=po("retryDelaySeedMs",1e4,a),this.Wa=po("forwardChannelMaxRetries",2,a),this.wa=po("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new xg(a&&a.concurrentRequestLimit),this.Da=new xP,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Gg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){At(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=ry(this,null,this.W),pl(this)};function vh(a){if(Qg(a),a.G==3){var h=a.U++,f=zn(a.I);if(_e(f,"SID",a.K),_e(f,"RID",h),_e(f,"TYPE","terminate"),mo(a,f),h=new dr(a,a.j,h),h.L=2,h.v=cl(zn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=iy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),al(h)}ny(a)}function fl(a){a.g&&(Eh(a),a.g.cancel(),a.g=null)}function Qg(a){fl(a),a.u&&(l.clearTimeout(a.u),a.u=null),ml(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function pl(a){if(!kg(a.h)&&!a.s){a.s=!0;var h=a.Ga;Je||Q(),$||(Je(),$=!0),K.add(h,a),a.B=0}}function DP(a,h){return bg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=io(m(a.Ga,a,h),ty(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new dr(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),P(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Xg(this,N,h),f=zn(this.I),_e(f,"RID",a),_e(f,"CVER",22),this.D&&_e(f,"X-HTTP-Session-Id",this.D),mo(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(zg(D)))+"&"+h:this.m&&_h(f,this.m,D)),yh(this.h,N),this.Ua&&_e(f,"TYPE","init"),this.P?(_e(f,"$req",h),_e(f,"SID","null"),N.T=!0,fh(N,f,null)):fh(N,f,h),this.G=2}}else this.G==3&&(a?Yg(this,a):this.i.length==0||kg(this.h)||Yg(this))};function Yg(a,h){var f;h?f=h.l:f=a.U++;const g=zn(a.I);_e(g,"SID",a.K),_e(g,"RID",f),_e(g,"AID",a.T),mo(a,g),a.m&&a.o&&_h(g,a.m,a.o),f=new dr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Xg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),yh(a.h,f),fh(f,g,h)}function mo(a,h){a.H&&L(a.H,function(f,g){_e(h,g,f)}),a.l&&Dg({},function(f,g){_e(h,g,f)})}function Xg(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var N=a.i;let D=-1;for(;;){const j=["count="+f];D==-1?0<f?(D=N[0].g,j.push("ofs="+D)):D=0:j.push("ofs="+D);let pe=!0;for(let et=0;et<f;et++){let le=N[et].g;const mt=N[et].map;if(le-=D,0>le)D=Math.max(0,N[et].g-100),pe=!1;else try{kP(mt,j,"req"+le+"_")}catch{g&&g(mt)}}if(pe){g=j.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Jg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Je||Q(),$||(Je(),$=!0),K.add(h,a),a.v=0}}function wh(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=io(m(a.Fa,a),ty(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Zg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=io(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),fl(this),Zg(this))};function Eh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Zg(a){a.g=new dr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=zn(a.qa);_e(h,"RID","rpc"),_e(h,"SID",a.K),_e(h,"AID",a.T),_e(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(h,"TO",a.ja),_e(h,"TYPE","xmlhttp"),mo(a,h),a.m&&a.o&&_h(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=cl(zn(h)),f.m=null,f.P=!0,Rg(f,a)}t.Za=function(){this.C!=null&&(this.C=null,fl(this),wh(this),At(19))};function ml(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ey(a,h){var f=null;if(a.g==h){ml(a),Eh(a),a.g=null;var g=2}else if(gh(a.h,h))f=h.D,Og(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;g=il(),Rt(g,new Tg(g,f)),pl(a)}else Jg(a);else if(N=h.s,N==3||N==0&&0<h.X||!(g==1&&DP(a,h)||g==2&&wh(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),N){case 1:Zr(a,5);break;case 4:Zr(a,10);break;case 3:Zr(a,6);break;default:Zr(a,2)}}}function ty(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Zr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const N=!g;g=new Jr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ll(g,"https"),cl(g),N?AP(g.toString(),f):CP(g.toString(),f)}else At(2);a.G=0,a.l&&a.l.sa(h),ny(a),Qg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function ny(a){if(a.G=0,a.ka=[],a.l){const h=Ng(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function ry(a,h,f){var g=f instanceof Jr?zn(f):new Jr(f);if(g.g!="")h&&(g.g=h+"."+g.g),ul(g,g.s);else{var N=l.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var D=new Jr(null);g&&ll(D,g),h&&(D.g=h),N&&ul(D,N),f&&(D.l=f),g=D}return f=a.D,h=a.ya,f&&h&&_e(g,f,h),_e(g,"VER",a.la),mo(a,g),g}function iy(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ke(new co({eb:f})):new ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sy(){}t=sy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function gl(){}gl.prototype.g=function(a,h){return new Wt(a,h)};function Wt(a,h){pt.call(this),this.g=new Gg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Fi(this)}S(Wt,pt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){vh(this.g)},Wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ah(a),a=f);h.i.push(new yP(h.Ya++,a)),h.G==3&&pl(h)},Wt.prototype.N=function(){this.g.l=null,delete this.j,vh(this.g),delete this.g,Wt.aa.N.call(this)};function oy(a){uh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(oy,uh);function ay(){ch.call(this),this.status=1}S(ay,ch);function Fi(a){this.g=a}S(Fi,sy),Fi.prototype.ua=function(){Rt(this.g,"a")},Fi.prototype.ta=function(a){Rt(this.g,new oy(a))},Fi.prototype.sa=function(a){Rt(this.g,new ay)},Fi.prototype.ra=function(){Rt(this.g,"b")},gl.prototype.createWebChannel=gl.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,P1=function(){return new gl},S1=function(){return il()},I1=Yr,Lf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sl.NO_ERROR=0,sl.TIMEOUT=8,sl.HTTP_ERROR=6,hu=sl,Ig.COMPLETE="complete",T1=Ig,_g.EventType=no,no.OPEN="a",no.CLOSE="b",no.ERROR="c",no.MESSAGE="d",pt.prototype.listen=pt.prototype.K,No=_g,E1=co,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,w1=ke}).apply(typeof Ul<"u"?Ul:typeof self<"u"?self:typeof window<"u"?window:{});const Tv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Et=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new sm("@firebase/firestore");function So(){return Ri.logLevel}function W(t,...e){if(Ri.logLevel<=ie.DEBUG){const n=e.map(_m);Ri.debug(`Firestore (${Qs}): ${t}`,...n)}}function ur(t,...e){if(Ri.logLevel<=ie.ERROR){const n=e.map(_m);Ri.error(`Firestore (${Qs}): ${t}`,...n)}}function Ds(t,...e){if(Ri.logLevel<=ie.WARN){const n=e.map(_m);Ri.warn(`Firestore (${Qs}): ${t}`,...n)}}function _m(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Qs}) INTERNAL ASSERTION FAILED: `+t;throw ur(e),new Error(e)}function me(t,e){t||X()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class ND{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DD{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new gi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new R1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new Et(e)}}class LD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new VD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Ls(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new $e(0,0))}static max(){return new J(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Sa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Sa{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const jD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Sa{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return jD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ee.fromString(e))}static fromName(e){return new G(Ee.fromString(e).popFirst(5))}static empty(){return new G(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ee(e.slice()))}}function $D(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new Hr(i,G.empty(),e)}function zD(t){return new Hr(t.readTime,t.key,-1)}class Hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hr(J.min(),G.empty(),-1)}static max(){return new Hr(J.max(),G.empty(),-1)}}function BD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==HD)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function qD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ka(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}vm.oe=-1;function Fc(t){return t==null}function tc(t){return t===0&&1/t==-1/0}function KD(t){return typeof t=="number"&&Number.isInteger(t)&&!tc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function C1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fl(this.root,e,this.comparator,!0)}}class Fl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=s??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new st(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sv(this.data.getIterator())}getIteratorFrom(e){return new Sv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class Sv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new yn([])}unionWith(e){let n=new lt(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new x1("Invalid base64 string: "+s):s}}(e);return new ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const GD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wr(t){if(me(!!t),typeof t=="string"){let e=0;const n=GD.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ai(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Em(t){const e=t.mapValue.fields.__previous_value__;return wm(e)?Em(e):e}function Pa(t){const e=Wr(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wm(t)?4:XD(t)?9007199254740991:YD(t)?10:11:X()}function Un(t,e){if(t===e)return!0;const n=Ci(t);if(n!==Ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pa(t).isEqual(Pa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Wr(i.timestampValue),l=Wr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ai(i.bytesValue).isEqual(Ai(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=De(i.doubleValue),l=De(s.doubleValue);return o===l?tc(o)===tc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ls(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Iv(o)!==Iv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Un(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Aa(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function Ms(t,e){if(t===e)return 0;const n=Ci(t),r=Ci(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=De(s.integerValue||s.doubleValue),u=De(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Pv(t.timestampValue,e.timestampValue);case 4:return Pv(Pa(t),Pa(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ai(s),u=Ai(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ue(l[c],u[c]);if(d!==0)return d}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(De(s.latitude),De(o.latitude));return l!==0?l:ue(De(s.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Rv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(u=m.value)===null||u===void 0?void 0:u.arrayValue,x=ue(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:Rv(v,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===jl.mapValue&&o===jl.mapValue)return 0;if(s===jl.mapValue)return 1;if(o===jl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ue(u[p],d[p]);if(m!==0)return m;const v=Ms(l[u[p]],c[d[p]]);if(v!==0)return v}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw X()}}function Pv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Wr(t),r=Wr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Rv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ms(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function Vs(t){return Mf(t)}function Mf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ai(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mf(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function Av(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vf(t){return!!t&&"integerValue"in t}function Tm(t){return!!t&&"arrayValue"in t}function Cv(t){return!!t&&"nullValue"in t}function xv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function du(t){return!!t&&"mapValue"in t}function YD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Qo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function XD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!du(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qo(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Qo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());du(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];du(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ys(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new on(Qo(this.value))}}function k1(t){const e=[];return Ys(t.fields,(n,r)=>{const i=new ot([n]);if(du(r)){const s=k1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new It(e,0,J.min(),J.min(),J.min(),on.empty(),0)}static newFoundDocument(e,n,r,i){return new It(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new It(e,2,n,J.min(),J.min(),on.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,J.min(),J.min(),on.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.position=e,this.inclusive=n}}function kv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Ms(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function JD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{}class Fe extends b1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eL(e,n,r):n==="array-contains"?new rL(e,r):n==="in"?new iL(e,r):n==="not-in"?new sL(e,r):n==="array-contains-any"?new oL(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tL(e,r):new nL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ms(n,this.value)):n!==null&&Ci(this.value)===Ci(n)&&this.matchesComparison(Ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class In extends b1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new In(e,n)}matches(e){return O1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function O1(t){return t.op==="and"}function N1(t){return ZD(t)&&O1(t)}function ZD(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function Uf(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(N1(t))return t.filters.map(e=>Uf(e)).join(",");{const e=t.filters.map(n=>Uf(n)).join(",");return`${t.op}(${e})`}}function D1(t,e){return t instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&Un(r.value,i.value)}(t,e):t instanceof In?function(r,i){return i instanceof In&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&D1(o,i.filters[l]),!0):!1}(t,e):void X()}function L1(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`}(t):t instanceof In?function(n){return n.op.toString()+" {"+n.getFilters().map(L1).join(" ,")+"}"}(t):"Filter"}class eL extends Fe{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class tL extends Fe{constructor(e,n){super(e,"in",n),this.keys=M1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nL extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=M1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function M1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class rL extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tm(n)&&Aa(n.arrayValue,this.value)}}class iL extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Aa(this.value.arrayValue,n)}}class sL extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Aa(this.value.arrayValue,n)}}class oL extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Aa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Ov(t,e=null,n=[],r=[],i=null,s=null,o=null){return new aL(t,e,n,r,i,s,o)}function Im(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Uf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vs(r)).join(",")),e.ue=n}return e.ue}function Sm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!D1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bv(t.startAt,e.startAt)&&bv(t.endAt,e.endAt)}function Ff(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lL(t,e,n,r,i,s,o,l){return new Xs(t,e,n,r,i,s,o,l)}function Pm(t){return new Xs(t)}function Nv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function V1(t){return t.collectionGroup!==null}function Yo(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new lt(ot.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ca(s,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new Ca(ot.keyField(),r))}return e.ce}function Ln(t){const e=Z(t);return e.le||(e.le=uL(e,Yo(t))),e.le}function uL(t,e){if(t.limitType==="F")return Ov(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ca(i.field,s)});const n=t.endAt?new nc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new nc(t.startAt.position,t.startAt.inclusive):null;return Ov(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jf(t,e){const n=t.filters.concat([e]);return new Xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $f(t,e,n){return new Xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jc(t,e){return Sm(Ln(t),Ln(e))&&t.limitType===e.limitType}function U1(t){return`${Im(Ln(t))}|lt:${t.limitType}`}function qi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>L1(i)).join(", ")}]`),Fc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vs(i)).join(",")),`Target(${r})`}(Ln(t))}; limitType=${t.limitType})`}function $c(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Yo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=kv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Yo(r),i)||r.endAt&&!function(o,l,u){const c=kv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Yo(r),i))}(t,e)}function cL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function F1(t){return(e,n)=>{let r=!1;for(const i of Yo(t)){const s=hL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function hL(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ms(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ys(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return C1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dL=new Ce(G.comparator);function cr(){return dL}const j1=new Ce(G.comparator);function Do(...t){let e=j1;for(const n of t)e=e.insert(n.key,n);return e}function $1(t){let e=j1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function li(){return Xo()}function z1(){return Xo()}function Xo(){return new Js(t=>t.toString(),(t,e)=>t.isEqual(e))}const fL=new Ce(G.comparator),pL=new lt(G.comparator);function re(...t){let e=pL;for(const n of t)e=e.add(n);return e}const mL=new lt(ue);function gL(){return mL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tc(e)?"-0":e}}function B1(t){return{integerValue:""+t}}function yL(t,e){return KD(e)?B1(e):Rm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this._=void 0}}function _L(t,e,n){return t instanceof rc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&wm(s)&&(s=Em(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof xa?W1(t,e):t instanceof ka?q1(t,e):function(i,s){const o=H1(i,s),l=Dv(o)+Dv(i.Pe);return Vf(o)&&Vf(i.Pe)?B1(l):Rm(i.serializer,l)}(t,e)}function vL(t,e,n){return t instanceof xa?W1(t,e):t instanceof ka?q1(t,e):n}function H1(t,e){return t instanceof ic?function(r){return Vf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class rc extends zc{}class xa extends zc{constructor(e){super(),this.elements=e}}function W1(t,e){const n=K1(e);for(const r of t.elements)n.some(i=>Un(i,r))||n.push(r);return{arrayValue:{values:n}}}class ka extends zc{constructor(e){super(),this.elements=e}}function q1(t,e){let n=K1(e);for(const r of t.elements)n=n.filter(i=>!Un(i,r));return{arrayValue:{values:n}}}class ic extends zc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Dv(t){return De(t.integerValue||t.doubleValue)}function K1(t){return Tm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof xa&&i instanceof xa||r instanceof ka&&i instanceof ka?Ls(r.elements,i.elements,Un):r instanceof ic&&i instanceof ic?Un(r.Pe,i.Pe):r instanceof rc&&i instanceof rc}(t.transform,e.transform)}class EL{constructor(e,n){this.version=e,this.transformResults=n}}class tr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bc{}function G1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Y1(t.key,tr.none()):new Ga(t.key,t.data,tr.none());{const n=t.data,r=on.empty();let i=new lt(ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Di(t.key,r,new yn(i.toArray()),tr.none())}}function TL(t,e,n){t instanceof Ga?function(i,s,o){const l=i.value.clone(),u=Mv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Di?function(i,s,o){if(!fu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Mv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Q1(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Jo(t,e,n,r){return t instanceof Ga?function(s,o,l,u){if(!fu(s.precondition,o))return l;const c=s.value.clone(),d=Vv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Di?function(s,o,l,u){if(!fu(s.precondition,o))return l;const c=Vv(s.fieldTransforms,u,o),d=o.data;return d.setAll(Q1(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return fu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function IL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=H1(r.transform,i||null);s!=null&&(n===null&&(n=on.empty()),n.set(r.field,s))}return n||null}function Lv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ls(r,i,(s,o)=>wL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ga extends Bc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Di extends Bc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Q1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mv(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,vL(o,l,n[i]))}return r}function Vv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_L(s,o,e))}return r}class Y1 extends Bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SL extends Bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=z1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=G1(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Ls(this.mutations,e.mutations,(n,r)=>Lv(n,r))&&Ls(this.baseMutations,e.baseMutations,(n,r)=>Lv(n,r))}}class Am{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return fL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Am(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,se;function CL(t){switch(t){default:return X();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function X1(t){if(t===void 0)return ur("GRPC error has no .code"),V.UNKNOWN;switch(t){case Me.OK:return V.OK;case Me.CANCELLED:return V.CANCELLED;case Me.UNKNOWN:return V.UNKNOWN;case Me.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Me.INTERNAL:return V.INTERNAL;case Me.UNAVAILABLE:return V.UNAVAILABLE;case Me.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Me.NOT_FOUND:return V.NOT_FOUND;case Me.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Me.ABORTED:return V.ABORTED;case Me.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Me.DATA_LOSS:return V.DATA_LOSS;default:return X()}}(se=Me||(Me={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL=new mi([4294967295,4294967295],0);function Uv(t){const e=xL().encode(t),n=new v1;return n.update(e),new Uint8Array(n.digest())}function Fv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new mi([n,r],0),new mi([i,s],0)]}class Cm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Lo(`Invalid padding: ${n}`);if(r<0)throw new Lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Lo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=mi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(mi.fromNumber(r)));return i.compare(kL)===1&&(i=new mi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Uv(e),[r,i]=Fv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Cm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Uv(e),[r,i]=Fv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hc(J.min(),i,new Ce(ue),cr(),re())}}class Qa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qa(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class J1{constructor(e,n){this.targetId=e,this.me=n}}class Z1{constructor(e,n,r=ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jv{constructor(){this.fe=0,this.ge=zv(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Qa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=zv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bL{constructor(e){this.Le=e,this.Be=new Map,this.ke=cr(),this.qe=$v(),this.Qe=new Ce(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Ff(s))if(r===0){const o=new G(s.path);this.Ue(n,o,It.newNoDocument(o,J.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ai(r).toUint8Array()}catch(u){if(u instanceof x1)return Ds("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Cm(o,i,s)}catch(u){return Ds(u instanceof Lo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Ff(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,It.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=re();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Hc(e,n,this.Qe,this.ke,r);return this.ke=cr(),this.qe=$v(),this.Qe=new Ce(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new jv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new lt(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new jv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $v(){return new Ce(G.comparator)}function zv(){return new Ce(G.comparator)}const OL={asc:"ASCENDING",desc:"DESCENDING"},NL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DL={and:"AND",or:"OR"};class LL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zf(t,e){return t.useProto3Json||Fc(e)?e:{value:e}}function sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ML(t,e){return sc(t,e.toTimestamp())}function Mn(t){return me(!!t),J.fromTimestamp(function(n){const r=Wr(n);return new $e(r.seconds,r.nanos)}(t))}function xm(t,e){return Bf(t,e).canonicalString()}function Bf(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function tI(t){const e=Ee.fromString(t);return me(oI(e)),e}function Hf(t,e){return xm(t.databaseId,e.path)}function ud(t,e){const n=tI(e);if(n.get(1)!==t.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(rI(n))}function nI(t,e){return xm(t.databaseId,e)}function VL(t){const e=tI(t);return e.length===4?Ee.emptyPath():rI(e)}function Wf(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rI(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bv(t,e,n){return{name:Hf(t,e),fields:n.value.mapValue.fields}}function UL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(me(d===void 0||typeof d=="string"),ht.fromBase64String(d||"")):(me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ht.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:X1(c.code);return new H(d,c.message||"")}(o);n=new Z1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ud(t,r.document.name),s=Mn(r.document.updateTime),o=r.document.createTime?Mn(r.document.createTime):J.min(),l=new on({mapValue:{fields:r.document.fields}}),u=It.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new pu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ud(t,r.document),s=r.readTime?Mn(r.readTime):J.min(),o=It.newNoDocument(i,s),l=r.removedTargetIds||[];n=new pu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ud(t,r.document),s=r.removedTargetIds||[];n=new pu([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new AL(i,s),l=r.targetId;n=new J1(l,o)}}return n}function FL(t,e){let n;if(e instanceof Ga)n={update:Bv(t,e.key,e.value)};else if(e instanceof Y1)n={delete:Hf(t,e.key)};else if(e instanceof Di)n={update:Bv(t,e.key,e.data),updateMask:GL(e.fieldMask)};else{if(!(e instanceof SL))return X();n={verify:Hf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof rc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof xa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ka)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ic)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ML(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function jL(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Mn(i.updateTime):Mn(s);return o.isEqual(J.min())&&(o=Mn(s)),new EL(o,i.transformResults||[])}(n,e))):[]}function $L(t,e){return{documents:[nI(t,e.path)]}}function zL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=nI(t,i);const s=function(c){if(c.length!==0)return sI(In.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ki(m.field),direction:WL(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=zf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function BL(t){let e=VL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=iI(p);return m instanceof In&&N1(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new Ca(Gi(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Fc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,v=p.values||[];return new nc(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,v=p.values||[];return new nc(v,m)}(n.endAt)),lL(e,i,o,s,l,"F",u,c)}function HL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gi(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Gi(n.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gi(n.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gi(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(Gi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return In.create(n.compositeFilter.filters.map(r=>iI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function WL(t){return OL[t]}function qL(t){return NL[t]}function KL(t){return DL[t]}function Ki(t){return{fieldPath:t.canonicalString()}}function Gi(t){return ot.fromServerFormat(t.fieldPath)}function sI(t){return t instanceof Fe?function(n){if(n.op==="=="){if(xv(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NAN"}};if(Cv(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xv(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NAN"}};if(Cv(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ki(n.field),op:qL(n.op),value:n.value}}}(t):t instanceof In?function(n){const r=n.getFilters().map(i=>sI(i));return r.length===1?r[0]:{compositeFilter:{op:KL(n.op),filters:r}}}(t):X()}function GL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function oI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=ht.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e){this.ct=e}}function YL(t){const e=BL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$f(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(){this.un=new JL}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Hr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Hr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class JL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new lt(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new lt(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Us(0)}static kn(){return new Us(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(){this.changes=new Js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Jo(r.mutation,i,yn.empty(),$e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=li();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Do();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=li();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=cr();const o=Xo(),l=function(){return Xo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Di)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Jo(d.mutation,c,d.mutation.getFieldMask(),$e.now())):o.set(c.key,yn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new eM(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Xo();let i=new Ce((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||yn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=z1();d.forEach(m=>{if(!s.has(m)){const v=G1(n.get(m),r.get(m));v!==null&&p.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):V1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(li());let l=-1,u=s;return o.next(c=>U.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:l,changes:$1(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Do();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Do();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const c=function(p,m){return new Xs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,It.newInvalidDocument(d)))});let l=Do();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Jo(d.mutation,c,yn.empty(),$e.now()),$c(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Mn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:YL(i.bundledQuery),readTime:Mn(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(){this.overlays=new Ce(G.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=li();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=li(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=li(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=li(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return U.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RL(n,r));let s=this.Ir.get(n);s===void 0&&(s=re(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.Tr=new lt(Ge.Er),this.dr=new lt(Ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ge(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new Ee([])),r=new Ge(n,e),i=new Ge(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new Ee([])),r=new Ge(n,e),i=new Ge(n,e+1);let s=re();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ge(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new lt(Ge.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PL(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ge(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(ue);return n.forEach(i=>{const s=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Ge(new G(s),0);let l=new lt(ue);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new Ge(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ge(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e){this.Mr=e,this.docs=function(){return new Ce(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():It.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=cr();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||BD(zD(d),r)<=0||(i.has(d.key)||$c(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new aM(this)}getSize(e){return U.resolve(this.size)}}class aM extends ZL{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e){this.persistence=e,this.Nr=new Js(n=>Im(n),Sm),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new km,this.targetCount=0,this.kr=Us.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Us(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e,n){this.qr={},this.overlays={},this.Qr=new vm(0),this.Kr=!1,this.Kr=!0,this.$r=new iM,this.referenceDelegate=e(this),this.Ur=new lM(this),this.indexManager=new XL,this.remoteDocumentCache=function(i){return new oM(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new QL(n),this.Gr=new nM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new sM(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new cM(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class cM extends WD{constructor(e){super(),this.currentSequenceNumber=e}}class bm{constructor(e){this.persistence=e,this.Jr=new km,this.Yr=null}static Zr(e){return new bm(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Om(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return gb()?8:qD(Pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new hM;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(So()<=ie.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",qi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(So()<=ie.DEBUG&&W("QueryEngine","Query:",qi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(So()<=ie.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",qi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):U.resolve())}Yi(e,n){if(Nv(n))return U.resolve(null);let r=Ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$f(n,null,"F"),r=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,$f(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Nv(n)||i.isEqual(J.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(So()<=ie.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qi(n)),this.rs(e,o,n,$D(i,-1)).next(l=>l))})}ts(e,n){let r=new lt(F1(e));return n.forEach((i,s)=>{$c(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return So()<=ie.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",qi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Hr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ce(ue),this._s=new Js(s=>Im(s),Sm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tM(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function pM(t,e,n,r){return new fM(t,e,n,r)}async function aI(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function mM(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let v=U.resolve();return m.forEach(S=>{v=v.next(()=>d.getEntry(u,S)).next(x=>{const C=c.docVersions.get(S);me(C!==null),x.version.compareTo(C)<0&&(p.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),d.addEntry(x)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function lI(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function gM(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ht.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(p,v),function(x,C,E){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,v,d)&&l.push(n.Ur.updateTargetData(s,v))});let u=cr(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(yM(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(J.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function yM(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=cr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function _M(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vM(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new xr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function qf(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ka(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Hv(t,e,n){const r=Z(t);let i=J.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=Z(u),m=p._s.get(d);return m!==void 0?U.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,Ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:re())).next(l=>(wM(r,cL(e),l),{documents:l,Ts:s})))}function wM(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Wv{constructor(){this.activeTargetIds=gL()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EM{constructor(){this.so=new Wv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Wv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l=null;function cd(){return $l===null?$l=function(){return 268435456+Math.round(2147483648*Math.random())}():$l++,"0x"+$l.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class PM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=cd(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(W("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Ds("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=IM[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=cd();return new Promise((o,l)=>{const u=new w1;u.setWithCredentials(!0),u.listenOnce(T1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case hu.NO_ERROR:const d=u.getResponseJson();W(vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case hu.TIMEOUT:W(vt,`RPC '${e}' ${s} timed out`),l(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case hu.HTTP_ERROR:const p=u.getStatus();if(W(vt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const S=function(C){const E=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(E)>=0?E:V.UNKNOWN}(v.status);l(new H(S,v.message))}else l(new H(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(V.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(vt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(vt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=cd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=P1(),l=S1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new E1({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");W(vt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,v=!1;const S=new SM({Io:C=>{v?W(vt,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(W(vt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(vt,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},To:()=>p.close()}),x=(C,E,_)=>{C.listen(E,T=>{try{_(T)}catch(O){setTimeout(()=>{throw O},0)}})};return x(p,No.EventType.OPEN,()=>{v||(W(vt,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),x(p,No.EventType.CLOSE,()=>{v||(v=!0,W(vt,`RPC '${e}' stream ${i} transport closed`),S.So())}),x(p,No.EventType.ERROR,C=>{v||(v=!0,Ds(vt,`RPC '${e}' stream ${i} transport errored:`,C),S.So(new H(V.UNAVAILABLE,"The operation could not be completed")))}),x(p,No.EventType.MESSAGE,C=>{var E;if(!v){const _=C.data[0];me(!!_);const T=_,O=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(O){W(vt,`RPC '${e}' stream ${i} received error:`,O);const M=O.status;let L=function(I){const P=Me[I];if(P!==void 0)return X1(P)}(M),w=O.message;L===void 0&&(L=V.INTERNAL,w="Unknown error status: "+M+" with message "+O.message),v=!0,S.So(new H(L,w)),p.close()}else W(vt,`RPC '${e}' stream ${i} received:`,_),S.bo(_)}}),x(l,I1.STAT_EVENT,C=>{C.stat===Lf.PROXY?W(vt,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Lf.NOPROXY&&W(vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function hd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t){return new LL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new uI(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RM extends cI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=UL(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Mn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Wf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ff(u)?{documents:$L(s,u)}:{query:zL(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=eI(s,o.resumeToken);const c=zf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=sc(s,o.snapshotVersion.toTimestamp());const c=zf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=HL(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Wf(this.serializer),n.removeTarget=e,this.a_(n)}}class AM extends cI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=jL(e.writeResults,e.commitTime),r=Mn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Wf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>FL(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Bf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Bf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class xM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ur(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Li(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.L_.add(4),await Ya(c),c.q_.set("Unknown"),c.L_.delete(4),await qc(c)}(this))})}),this.q_=new xM(r,i)}}async function qc(t){if(Li(t))for(const e of t.B_)await e(!0)}async function Ya(t){for(const e of t.B_)await e(!1)}function hI(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Mm(n)?Lm(n):Zs(n).r_()&&Dm(n,e))}function Nm(t,e){const n=Z(t),r=Zs(n);n.N_.delete(e),r.r_()&&dI(n,e),n.N_.size===0&&(r.r_()?r.o_():Li(n)&&n.q_.set("Unknown"))}function Dm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zs(t).A_(e)}function dI(t,e){t.Q_.xe(e),Zs(t).R_(e)}function Lm(t){t.Q_=new bL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Zs(t).start(),t.q_.v_()}function Mm(t){return Li(t)&&!Zs(t).n_()&&t.N_.size>0}function Li(t){return Z(t).L_.size===0}function fI(t){t.Q_=void 0}async function bM(t){t.q_.set("Online")}async function OM(t){t.N_.forEach((e,n)=>{Dm(t,e)})}async function NM(t,e){fI(t),Mm(t)?(t.q_.M_(e),Lm(t)):t.q_.set("Unknown")}async function DM(t,e,n){if(t.q_.set("Online"),e instanceof Z1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oc(t,r)}else if(e instanceof pu?t.Q_.Ke(e):e instanceof J1?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await lI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(ht.EMPTY_BYTE_STRING,d.snapshotVersion)),dI(s,u);const p=new xr(d.target,u,c,d.sequenceNumber);Dm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await oc(t,r)}}async function oc(t,e,n){if(!Ka(e))throw e;t.L_.add(1),await Ya(t),t.q_.set("Offline"),n||(n=()=>lI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await qc(t)})}function pI(t,e){return e().catch(n=>oc(t,n,e))}async function Kc(t){const e=Z(t),n=qr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;LM(e);)try{const i=await _M(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,MM(e,i)}catch(i){await oc(e,i)}mI(e)&&gI(e)}function LM(t){return Li(t)&&t.O_.length<10}function MM(t,e){t.O_.push(e);const n=qr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function mI(t){return Li(t)&&!qr(t).n_()&&t.O_.length>0}function gI(t){qr(t).start()}async function VM(t){qr(t).p_()}async function UM(t){const e=qr(t);for(const n of t.O_)e.m_(n.mutations)}async function FM(t,e,n){const r=t.O_.shift(),i=Am.from(r,e,n);await pI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kc(t)}async function jM(t,e){e&&qr(t).V_&&await async function(r,i){if(function(o){return CL(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();qr(r).s_(),await pI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Kc(r)}}(t,e),mI(t)&&gI(t)}async function Kv(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Li(n);n.L_.add(3),await Ya(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await qc(n)}async function $M(t,e){const n=Z(t);e?(n.L_.delete(2),await qc(n)):e||(n.L_.add(2),await Ya(n),n.q_.set("Unknown"))}function Zs(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new RM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:bM.bind(null,t),Ro:OM.bind(null,t),mo:NM.bind(null,t),d_:DM.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Mm(t)?Lm(t):t.q_.set("Unknown")):(await t.K_.stop(),fI(t))})),t.K_}function qr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new AM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:VM.bind(null,t),mo:jM.bind(null,t),f_:UM.bind(null,t),g_:FM.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Kc(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Vm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Um(t,e){if(ur("AsyncQueue",`${e}: ${t}`),Ka(t))return new H(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Do(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new ws(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(){this.W_=new Ce(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Fs(e,n,ws.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class BM{constructor(){this.queries=Qv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=Qv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(V.ABORTED,"Firestore shutting down"))}}function Qv(){return new Js(t=>U1(t),jc)}async function HM(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new zM,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Um(o,`Initialization of query '${qi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Fm(n)}async function WM(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qM(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Fm(n)}function KM(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Fm(t){t.Y_.forEach(e=>{e.next()})}var Kf,Yv;(Yv=Kf||(Kf={})).ea="default",Yv.Cache="cache";class GM{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Kf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.key=e}}class _I{constructor(e){this.key=e}}class QM{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=F1(e),this.Ra=new ws(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Gv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),v=$c(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),x=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let C=!1;m&&v?m.data.isEqual(v.data)?S!==x&&(r.track({type:3,doc:v}),C=!0):this.ga(m,v)||(r.track({type:2,doc:v}),C=!0,(u&&this.Aa(v,u)>0||c&&this.Aa(v,c)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),C=!0):m&&!v&&(r.track({type:1,doc:m}),C=!0,(u||c)&&(l=!0)),C&&(v?(o=o.add(v),s=x?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(v,S){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return x(v)-x(S)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Fs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Gv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new _I(r))}),this.da.forEach(r=>{e.has(r)||n.push(new yI(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Fs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class YM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XM{constructor(e){this.key=e,this.va=!1}}class JM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Js(l=>U1(l),jc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(G.comparator),this.Na=new Map,this.La=new km,this.Ba={},this.ka=new Map,this.qa=Us.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ZM(t,e,n=!0){const r=SI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await vI(r,e,n,!0),i}async function eV(t,e){const n=SI(t);await vI(n,e,!0,!1)}async function vI(t,e,n,r){const i=await vM(t.localStore,Ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await tV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&hI(t.remoteStore,i),l}async function tV(t,e,n,r,i){t.Ka=(p,m,v)=>async function(x,C,E,_){let T=C.view.ma(E);T.ns&&(T=await Hv(x.localStore,C.query,!1).then(({documents:w})=>C.view.ma(w,T)));const O=_&&_.targetChanges.get(C.targetId),M=_&&_.targetMismatches.get(C.targetId)!=null,L=C.view.applyChanges(T,x.isPrimaryClient,O,M);return Jv(x,C.targetId,L.wa),L.snapshot}(t,p,m,v);const s=await Hv(t.localStore,e,!0),o=new QM(e,s.Ts),l=o.ma(s.documents),u=Qa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Jv(t,n,c.wa);const d=new YM(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function nV(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!jc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await qf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Nm(r.remoteStore,i.targetId),Gf(r,i.targetId)}).catch(qa)):(Gf(r,i.targetId),await qf(r.localStore,i.targetId,!0))}async function rV(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Nm(n.remoteStore,r.targetId))}async function iV(t,e,n){const r=hV(t);try{const i=await function(o,l){const u=Z(o),c=$e.now(),d=l.reduce((v,S)=>v.add(S.key),re());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let S=cr(),x=re();return u.cs.getEntries(v,d).next(C=>{S=C,S.forEach((E,_)=>{_.isValidDocument()||(x=x.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,S)).next(C=>{p=C;const E=[];for(const _ of l){const T=IL(_,p.get(_.key).overlayedDocument);T!=null&&E.push(new Di(_.key,T,k1(T.value.mapValue),tr.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,E,l)}).next(C=>{m=C;const E=C.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(v,C.batchId,E)})}).then(()=>({batchId:m.batchId,changes:$1(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ce(ue)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Xa(r,i.changes),await Kc(r.remoteStore)}catch(i){const s=Um(i,"Failed to persist write");n.reject(s)}}async function wI(t,e){const n=Z(t);try{const r=await gM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await Xa(n,r,e)}catch(r){await qa(r)}}function Xv(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&Fm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sV(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ce(G.comparator);o=o.insert(s,It.newNoDocument(s,J.min()));const l=re().add(s),u=new Hc(J.min(),new Map,new Ce(ue),o,l);await wI(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),jm(r)}else await qf(r.localStore,e,!1).then(()=>Gf(r,e,n)).catch(qa)}async function oV(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await mM(n.localStore,e);TI(n,r,null),EI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xa(n,i)}catch(i){await qa(i)}}async function aV(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(me(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);TI(r,e,n),EI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xa(r,i)}catch(i){await qa(i)}}function EI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function TI(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Gf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||II(t,r)})}function II(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Nm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),jm(t))}function Jv(t,e,n){for(const r of n)r instanceof yI?(t.La.addReference(r.key,e),lV(t,r)):r instanceof _I?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||II(t,r.key)):X()}function lV(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),jm(t))}function jm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new XM(n)),t.Oa=t.Oa.insert(n,r),hI(t.remoteStore,new xr(Ln(Pm(n.path)),r,"TargetPurposeLimboResolution",vm.oe))}}async function Xa(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Om.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(c,m=>U.forEach(m.$i,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>U.forEach(m.Ui,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!Ka(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const v=d.os.get(m),S=v.snapshotVersion,x=v.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(m,x)}}}(r.localStore,s))}async function uV(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await aI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xa(n,r.hs)}}function cV(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let i=re();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function SI(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sV.bind(null,e),e.Ca.d_=qM.bind(null,e.eventManager),e.Ca.$a=KM.bind(null,e.eventManager),e}function hV(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aV.bind(null,e),e}class Zv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return pM(this.persistence,new dM,e.initialUser,this.serializer)}createPersistence(e){return new uM(bm.Zr,this.serializer)}createSharedClientState(e){return new EM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uV.bind(null,this.syncEngine),await $M(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BM}()}createDatastore(e){const n=Wc(e.databaseInfo.databaseId),r=function(s){return new PM(s)}(e.databaseInfo);return function(s,o,l,u){return new CM(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new kM(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xv(this.syncEngine,n,0),function(){return qv.D()?new qv:new TM}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new JM(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ya(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):ur("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Et.UNAUTHENTICATED,this.clientId=A1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{W("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(W("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Um(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dd(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await aI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function e0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gV(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Kv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Kv(e.remoteStore,i)),t._onlineComponents=e}function mV(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function gV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await dd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!mV(n))throw n;Ds("Error using user provided cache. Falling back to memory cache: "+n),await dd(t,new Zv)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await dd(t,new Zv);return t._offlineComponents}async function PI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await e0(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await e0(t,new dV))),t._onlineComponents}function yV(t){return PI(t).then(e=>e.syncEngine)}async function t0(t){const e=await PI(t),n=e.eventManager;return n.onListen=ZM.bind(null,e.syncEngine),n.onUnlisten=nV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=eV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=rV.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t,e,n){if(!n)throw new H(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _V(t,e,n,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function r0(t){if(!G.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function i0(t){if(G.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Zo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_V("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new s0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new s0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new OD;switch(r.type){case"firstParty":return new MD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=n0.get(n);r&&(W("ComponentProvider","Removing Datastore"),n0.delete(n),r.terminate())}(this),Promise.resolve()}}function vV(t,e,n,r={}){var i;const s=(t=Zo(t,Qc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Et.MOCK_USER;else{l=MT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Et(c)}t._authCredentials=new ND(new R1(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mi(this.firestore,e,this._query)}}class Jt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jt(this.firestore,e,this._key)}}class jr extends Mi{constructor(e,n,r){super(e,n,Pm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jt(this.firestore,null,new G(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function Qf(t,e,...n){if(t=ct(t),AI("collection","path",e),t instanceof Qc){const r=Ee.fromString(e,...n);return i0(r),new jr(t,null,r)}{if(!(t instanceof Jt||t instanceof jr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return i0(r),new jr(t.firestore,null,r)}}function wV(t,e,...n){if(t=ct(t),arguments.length===1&&(e=A1.newId()),AI("doc","path",e),t instanceof Qc){const r=Ee.fromString(e,...n);return r0(r),new Jt(t,null,new G(r))}{if(!(t instanceof Jt||t instanceof jr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return r0(r),new Jt(t.firestore,t instanceof jr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new uI(this,"async_queue_retry"),this.Eu=()=>{const n=hd();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=hd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=hd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new gi;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Ka(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw ur("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=Vm.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&X()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function o0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ac extends Qc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new EV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kI(this),this._firestoreClient.terminate()}}function CI(t,e){const n=typeof t=="object"?t:am(),r=typeof t=="string"?t:"(default)",i=Lc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=NT("firestore");s&&vV(i,...s)}return i}function xI(t){return t._firestoreClient||kI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new QD(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,RI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new pV(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(ht.fromBase64String(e))}catch(n){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new js(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TV=/^__.*__$/;class IV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Di(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ga(e,this.data,n,this.fieldTransforms)}}function OI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Hm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Hm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return lc(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(OI(this.wu)&&TV.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class SV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wc(e)}Nu(e,n,r,i=!1){return new Hm({wu:e,methodName:n,Ou:r,path:ot.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function NI(t){const e=t._freezeSettings(),n=Wc(t._databaseId);return new SV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function PV(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);MI("Data must be an object, but it was:",o,r);const l=DI(r,o);let u,c;if(s.merge)u=new yn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=AV(e,p,n);if(!o.contains(m))throw new H(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);xV(d,m)||d.push(m)}u=new yn(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new IV(new on(l),u,c)}function RV(t,e,n,r=!1){return Wm(n,t.Nu(r?4:3,e))}function Wm(t,e){if(LI(t=ct(t)))return MI("Unsupported field value:",e,t),DI(t,e);if(t instanceof bI)return function(r,i){if(!OI(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Wm(l,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$e.fromDate(r);return{timestampValue:sc(i.serializer,s)}}if(r instanceof $e){const s=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sc(i.serializer,s)}}if(r instanceof zm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof js)return{bytesValue:eI(i.serializer,r._byteString)};if(r instanceof Jt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:xm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Bm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return Rm(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${Gc(r)}`)}(t,e)}function DI(t,e){const n={};return C1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ys(t,(r,i)=>{const s=Wm(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function LI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof zm||t instanceof js||t instanceof Jt||t instanceof bI||t instanceof Bm)}function MI(t,e,n){if(!LI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Gc(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function AV(t,e,n){if((e=ct(e))instanceof $m)return e._internalPath;if(typeof e=="string")return VI(t,e);throw lc("Field path arguments must be of type string or ",t,!1,void 0,n)}const CV=new RegExp("[~\\*/\\[\\]]");function VI(t,e,n){if(e.search(CV)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $m(...e.split("."))._internalPath}catch{throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(V.INVALID_ARGUMENT,l+t+u)}function xV(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kV extends UI{data(){return super.data()}}function qm(t,e){return typeof e=="string"?VI(t,e):e instanceof $m?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Km{}class FI extends Km{}function OV(t,e,...n){let r=[];e instanceof Km&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Qm).length,l=s.filter(u=>u instanceof Gm).length;if(o>1||o>0&&l>0)throw new H(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Gm extends FI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Gm(e,n,r)}_apply(e){const n=this._parse(e);return jI(e._query,n),new Mi(e.firestore,e.converter,jf(e._query,n))}_parse(e){const n=NI(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){l0(p,d);const v=[];for(const S of p)v.push(a0(u,s,S));m={arrayValue:{values:v}}}else m=a0(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||l0(p,d),m=RV(l,o,p,d==="in"||d==="not-in");return Fe.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Qm extends Km{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:In.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)jI(o,u),o=jf(o,u)}(e._query,n),new Mi(e.firestore,e.converter,jf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ym extends FI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ym(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ca(s,o)}(e._query,this._field,this._direction);return new Mi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Xs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function NV(t,e="asc"){const n=e,r=qm("orderBy",t);return Ym._create(r,n)}function a0(t,e,n){if(typeof(n=ct(n))=="string"){if(n==="")throw new H(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!V1(e)&&n.indexOf("/")!==-1)throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!G.isDocumentKey(r))throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Av(t,new G(r))}if(n instanceof Jt)return Av(t,n._key);throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gc(n)}.`)}function l0(t,e){if(!Array.isArray(t)||t.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class DV{convertValue(e,n="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ys(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>De(o.doubleValue));return new Bm(s)}convertGeoPoint(e){return new zm(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Em(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Pa(e));default:return null}}convertTimestamp(e){const n=Wr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);me(oI(r));const i=new Ra(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LV(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $I extends UI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class mu extends $I{data(e={}){return super.data(e)}}class MV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Mo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new mu(this._firestore,this._userDataWriter,r.key,r,new Mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new mu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Mo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new mu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Mo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:VV(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class zI extends DV{constructor(e){super(),this.firestore=e}convertBytes(e){return new js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Jt(this.firestore,null,n)}}function u0(t,e){const n=Zo(t.firestore,ac),r=wV(t),i=LV(t.converter,e);return FV(n,[PV(NI(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,tr.exists(!1))]).then(()=>r)}function UV(t,...e){var n,r,i;t=ct(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||o0(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(o0(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof Jt)c=Zo(t.firestore,ac),d=Pm(t._key.path),u={next:p=>{e[o]&&e[o](jV(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Zo(t,Mi);c=Zo(p.firestore,ac),d=p._query;const m=new zI(c);u={next:v=>{e[o]&&e[o](new MV(c,m,p,v))},error:e[o+1],complete:e[o+2]},bV(t._query)}return function(m,v,S,x){const C=new fV(x),E=new GM(v,C,S);return m.asyncQueue.enqueueAndForget(async()=>HM(await t0(m),E)),()=>{C.za(),m.asyncQueue.enqueueAndForget(async()=>WM(await t0(m),E))}}(xI(c),d,l,u)}function FV(t,e){return function(r,i){const s=new gi;return r.asyncQueue.enqueueAndForget(async()=>iV(await yV(r),i,s)),s.promise}(xI(t),e)}function jV(t,e,n){const r=n.docs.get(e._key),i=new zI(t);return new $I(t,i,e._key,r,new Mo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Qs=i})(Ni),Si(new Br("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ac(new DD(r.getProvider("auth-internal")),new UD(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ra(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Nn(Tv,"4.7.2",e),Nn(Tv,"4.7.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="firebasestorage.googleapis.com",HI="storageBucket",$V=2*60*1e3,zV=10*60*1e3,BV=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Fn{constructor(e,n,r=0){super(fd(e),`Firebase Storage: ${n} (${fd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function fd(t){return"storage/"+t}function Xm(){const t="An unknown error occurred, please check the error payload for server response.";return new xe(Ie.UNKNOWN,t)}function HV(t){return new xe(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function WV(t){return new xe(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe(Ie.UNAUTHENTICATED,t)}function KV(){return new xe(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function GV(t){return new xe(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function WI(){return new xe(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qI(){return new xe(Ie.CANCELED,"User canceled the upload/download.")}function QV(t){return new xe(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function YV(t){return new xe(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function XV(){return new xe(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+HI+"' property when initializing the app?")}function KI(){return new xe(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function JV(){return new xe(Ie.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function ZV(){return new xe(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function e2(t){return new xe(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Yf(t){return new xe(Ie.INVALID_ARGUMENT,t)}function GI(){return new xe(Ie.APP_DELETED,"The Firebase app was deleted.")}function t2(t){return new xe(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ea(t,e){return new xe(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Po(t){throw new xe(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(r.path==="")return r;throw YV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),S={bucket:1,path:3},x=n===BI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",E=new RegExp(`^https?://${x}/${i}/${C}`,"i"),T=[{regex:l,indices:u,postModify:s},{regex:v,indices:S,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<T.length;O++){const M=T[O],L=M.regex.exec(e);if(L){const w=L[M.indices.bucket];let y=L[M.indices.path];y||(y=""),r=new Yt(w,y),M.postModify(r);break}}if(r==null)throw QV(e);return r}}class n2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...C){c||(c=!0,e.apply(null,C))}function p(C){i=setTimeout(()=>{i=null,t(v,u())},C)}function m(){s&&clearTimeout(s)}function v(C,...E){if(c){m();return}if(C){m(),d.call(null,C,...E);return}if(u()||o){m(),d.call(null,C,...E);return}r<64&&(r*=2);let T;l===1?(l=2,T=0):T=(r+Math.random())*1e3,p(T)}let S=!1;function x(C){S||(S=!0,m(),!c&&(i!==null?(C||(l=2),clearTimeout(i),p(0)):C||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,x(!0)},n),x}function i2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(t){return t!==void 0}function o2(t){return typeof t=="function"}function a2(t){return typeof t=="object"&&!Array.isArray(t)}function Yc(t){return typeof t=="string"||t instanceof String}function c0(t){return Jm()&&t instanceof Blob}function Jm(){return typeof Blob<"u"}function h0(t,e,n,r){if(r<e)throw Yf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Yf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function QI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var yi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yi||(yi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,S)=>{this.resolve_=v,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new zl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===yi.NO_ERROR,u=s.getStatus();if(!l||YI(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===yi.ABORT;r(!1,new zl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new zl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());s2(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Xm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?GI():qI();o(u)}else{const u=WI();o(u)}};this.canceled_?n(!1,new zl(!1,null,!0)):this.backoffId_=r2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&i2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function u2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function c2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function h2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function d2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function f2(t,e,n,r,i,s,o=!0){const l=QI(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return h2(c,e),u2(c,n),c2(c,s),d2(c,r),new l2(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function m2(...t){const e=p2();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Jm())return new Blob(t);throw new xe(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function g2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(t){if(typeof atob>"u")throw e2("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pd{constructor(e,n){this.data=e,this.contentType=n||null}}function _2(t,e){switch(t){case kn.RAW:return new pd(XI(e));case kn.BASE64:case kn.BASE64URL:return new pd(JI(t,e));case kn.DATA_URL:return new pd(w2(e),E2(e))}throw Xm()}function XI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function v2(t){let e;try{e=decodeURIComponent(t)}catch{throw ea(kn.DATA_URL,"Malformed data URL.")}return XI(e)}function JI(t,e){switch(t){case kn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ea(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case kn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ea(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=y2(e)}catch(i){throw i.message.includes("polyfill")?i:ea(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ZI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ea(kn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=T2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function w2(t){const e=new ZI(t);return e.base64?JI(kn.BASE64,e.rest):v2(e.rest)}function E2(t){return new ZI(t).contentType}function T2(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n){let r=0,i="";c0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(c0(this.data_)){const r=this.data_,i=g2(r,e,n);return i===null?null:new Pr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Pr(r,!0)}}static getBlob(...e){if(Jm()){const n=e.map(r=>r instanceof Pr?r.data_:r);return new Pr(m2.apply(null,n))}else{const n=e.map(o=>Yc(o)?_2(kn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Pr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(t){let e;try{e=JSON.parse(t)}catch{return null}return a2(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function S2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function tS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(t,e){return e}class Ct{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||P2}}let Bl=null;function R2(t){return!Yc(t)||t.length<2?t:tS(t)}function nS(){if(Bl)return Bl;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(s,o){return R2(o)}const n=new Ct("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ct("size");return i.xform=r,t.push(i),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),Bl=t,Bl}function A2(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Yt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function C2(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return A2(r,t),r}function rS(t,e,n){const r=eS(e);return r===null?null:C2(t,r,n)}function x2(t,e,n,r){const i=eS(e);if(i===null||!Yc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),v=Ja(m,n,r),S=QI({alt:"media",token:c});return v+S})[0]}function iS(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class eo{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){if(!t)throw Xm()}function Zm(t,e){function n(r,i){const s=rS(t,i,e);return nr(s!==null),s}return n}function k2(t,e){function n(r,i){const s=rS(t,i,e);return nr(s!==null),x2(s,i,t.host,t._protocol)}return n}function Za(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=KV():i=qV():n.getStatus()===402?i=WV(t.bucket):n.getStatus()===403?i=GV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function sS(t){const e=Za(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=HV(t.path)),s.serverResponse=i.serverResponse,s}return n}function b2(t,e,n){const r=e.fullServerUrl(),i=Ja(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new eo(i,s,Zm(t,n),o);return l.errorHandler=sS(e),l}function O2(t,e,n){const r=e.fullServerUrl(),i=Ja(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new eo(i,s,k2(t,n),o);return l.errorHandler=sS(e),l}function N2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function oS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=N2(null,e)),r}function D2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let T="";for(let O=0;O<2;O++)T=T+Math.random().toString().slice(2);return T}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=oS(e,r,i),d=iS(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",v=Pr.getBlob(p,r,m);if(v===null)throw KI();const S={name:c.fullPath},x=Ja(s,t.host,t._protocol),C="POST",E=t.maxUploadRetryTime,_=new eo(x,C,Zm(t,n),E);return _.urlParams=S,_.headers=o,_.body=v.uploadData(),_.errorHandler=Za(e),_}class uc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function eg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{nr(!1)}return nr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function L2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=oS(e,r,i),l={name:o.fullPath},u=Ja(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=iS(o,n),m=t.maxUploadRetryTime;function v(x){eg(x);let C;try{C=x.getResponseHeader("X-Goog-Upload-URL")}catch{nr(!1)}return nr(Yc(C)),C}const S=new eo(u,c,v,m);return S.urlParams=l,S.headers=d,S.body=p,S.errorHandler=Za(e),S}function M2(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=eg(c,["active","final"]);let p=null;try{p=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{nr(!1)}p||nr(!1);const m=Number(p);return nr(!isNaN(m)),new uc(m,r.size(),d==="final")}const o="POST",l=t.maxUploadRetryTime,u=new eo(n,o,s,l);return u.headers=i,u.errorHandler=Za(e),u}const d0=256*1024;function V2(t,e,n,r,i,s,o,l){const u=new uc(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw JV();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const p=u.current,m=p+d;let v="";d===0?v="finalize":c===d?v="upload, finalize":v="upload";const S={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${u.current}`},x=r.slice(p,m);if(x===null)throw KI();function C(O,M){const L=eg(O,["active","final"]),w=u.current+d,y=r.size();let I;return L==="final"?I=Zm(e,s)(O,M):I=null,new uc(w,y,L==="final",I)}const E="POST",_=e.maxUploadRetryTime,T=new eo(n,E,C,_);return T.headers=S,T.body=x.uploadData(),T.progressCallback=l||null,T.errorHandler=Za(t),T}const Ut={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function md(t){switch(t){case"running":case"pausing":case"canceling":return Ut.RUNNING;case"paused":return Ut.PAUSED;case"success":return Ut.SUCCESS;case"canceled":return Ut.CANCELED;case"error":return Ut.ERROR;default:return Ut.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n,r){if(o2(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class F2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=yi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=yi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=yi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Po("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Po("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Po("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Po("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Po("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class j2 extends F2{initXhr(){this.xhr_.responseType="text"}}function Qi(){return new j2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=nS(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ie.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(YI(i.status,[]))if(s)i=WI();else{this.sleepTime=Math.max(this.sleepTime*2,BV),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ie.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=L2(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Qi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=M2(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Qi,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=d0*this._chunkMultiplier,n=new uc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=V2(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Qi,i,s,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){d0*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=b2(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Qi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=D2(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Qi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=qI(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=md(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new U2(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(md(this._state)){case Ut.SUCCESS:Bi(this._resolve.bind(null,this.snapshot))();break;case Ut.CANCELED:case Ut.ERROR:const n=this._reject;Bi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(md(this._state)){case Ut.RUNNING:case Ut.PAUSED:e.next&&Bi(e.next.bind(e,this.snapshot))();break;case Ut.SUCCESS:e.complete&&Bi(e.complete.bind(e))();break;case Ut.CANCELED:case Ut.ERROR:e.error&&Bi(e.error.bind(e,this._error))();break;default:e.error&&Bi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xi(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tS(this._location.path)}get storage(){return this._service}get parent(){const e=I2(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new xi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw t2(e)}}function z2(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new $2(t,new Pr(e),n)}function B2(t){t._throwIfRoot("getDownloadURL");const e=O2(t.storage,t._location,nS());return t.storage.makeRequestWithTokens(e,Qi).then(n=>{if(n===null)throw ZV();return n})}function H2(t,e){const n=S2(t._location.path,e),r=new Yt(t._location.bucket,n);return new xi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(t){return/^[A-Za-z]+:\/\//.test(t)}function q2(t,e){return new xi(t,e)}function aS(t,e){if(t instanceof tg){const n=t;if(n._bucket==null)throw XV();const r=new xi(n,n._bucket);return e!=null?aS(r,e):r}else return e!==void 0?H2(t,e):t}function K2(t,e){if(e&&W2(e)){if(t instanceof tg)return q2(t,e);throw Yf("To use ref(service, url), the first argument must be a Storage instance.")}else return aS(t,e)}function f0(t,e){const n=e==null?void 0:e[HI];return n==null?null:Yt.makeFromBucketSpec(n,t)}function G2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:MT(i,t.app.options.projectId))}class tg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=BI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$V,this._maxUploadRetryTime=zV,this._requests=new Set,i!=null?this._bucket=Yt.makeFromBucketSpec(i,this._host):this._bucket=f0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=f0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){h0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){h0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new n2(GI());{const o=f2(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const p0="@firebase/storage",m0="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="storage";function Q2(t,e,n){return t=ct(t),z2(t,e,n)}function Y2(t){return t=ct(t),B2(t)}function X2(t,e){return t=ct(t),K2(t,e)}function uS(t=am(),e){t=ct(t);const r=Lc(t,lS).getImmediate({identifier:e}),i=NT("storage");return i&&J2(r,...i),r}function J2(t,e,n,r={}){G2(t,e,n,r)}function Z2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new tg(n,r,i,e,Ni)}function eU(){Si(new Br(lS,Z2,"PUBLIC").setMultipleInstances(!0)),Nn(p0,m0,""),Nn(p0,m0,"esm2017")}eU();const tU={apiKey:"AIzaSyByxtsYwtDZIqBhru4tuf6j5vB5Y-oZvLI",authDomain:"konet-83edb.firebaseapp.com",projectId:"konet-83edb",storageBucket:"konet-83edb.appspot.com",messagingSenderId:"983535811211",appId:"1:983535811211:web:75353584ed7068e7b3f28e"},ng=FT(tU),nU=CI(ng),cS=CD(ng),rU=new Kn;uS(ng);const hS="SET_USER",dS="SET_LOADING_STATUS",fS="GET_ARTICLES",pS=t=>({type:hS,user:t}),gd=t=>({type:dS,status:t});function iU(){return t=>{VN(cS,rU).then(e=>{t(pS(e.user))}).catch(e=>{alert(e.message)})}}const sU=t=>({type:fS,payload:t});function oU(){return t=>{cS.signOut().then(()=>{t(pS(null))}).catch(e=>{console.log(e.message)})}}function aU(t){return e=>{e(gd(!0));const n=CI();if(t.image!==""){const r=uS(),i=X2(r,`images/${t.image.name}`),s=Q2(i,t.image);s.on("state_changed",o=>{const l=o.bytesTransferred/o.totalBytes*100;console.log(`Progress: ${l}%`),o.state==="RUNNING"&&console.log(`Upload is running. Progress: ${l}%`)},o=>console.log(o.code),async()=>{const o=await Y2(s.snapshot.ref);console.log("File available at",o),await u0(Qf(n,"articles"),{actor:{description:t.user.email,title:t.user.displayName,date:t.timestamp,image:t.user.photoURL},video:t.video||"",sharedImg:o,comments:0,description:t.description}),e(gd(!1))})}else u0(Qf(n,"articles"),{actor:{description:t.user.email,title:t.user.displayName,date:t.timestamp,image:t.user.photoURL},video:t.video||"",sharedImg:"",comments:0,description:t.description}),e(gd(!1))}}function lU(){return t=>{const e=OV(Qf(nU,"articles"),NV("actor.date","desc"));UV(e,n=>{const r=n.docs.map(i=>i.data());t(sU(r)),console.log(r)})}}const uU=t=>A.jsxs(cU,{children:[t.user&&A.jsx(JE,{to:"/home"}),A.jsxs(hU,{children:[A.jsxs("a",{href:"/",children:[A.jsx("img",{src:"src/assets/konet.jpg",alt:""}),A.jsx("span",{className:"logo",children:"Konet"})]}),A.jsxs("div",{children:[A.jsx(dU,{children:"Join now"}),A.jsx(fU,{children:"Sign in"})]})]}),A.jsxs(pU,{children:[A.jsxs(mU,{children:[A.jsxs("h1",{children:["Welcome to the ",A.jsx("b",{children:"Konet"})," Professional community "]}),A.jsx("img",{src:"src/assets/sign-in-img.jpg",alt:""})]}),A.jsx(gU,{children:A.jsxs(yU,{onClick:()=>{t.signIn()},children:[A.jsx("img",{src:"src/assets/google.svg",alt:""}),"Sign in with Google"]})})]})]}),cU=q.nav`
    padding: 0px;
`,hU=q.nav`
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a{
    width:135px;
    height: 34px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: bolder;
    @media (max-width:760px){
        padding: 0 5px;
    }
    }

    & > a > img{
        height: 34px;
        padding-left: 50px;
        @media (max-width:760px){
        padding: 0 5px;
    }
    }

    & > span{

    }
`,dU=q.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
        border-radius: 4px;
    }
    @media (max-width:600px){
        display: none;
    }
`,fU=q.a`
    box-shadow: inset 0 0 0 1px #474545;
    color: #222121;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: white;
    &:hover{
        background-color:#ada7a7 ;
        color: #202020 ;
        text-decoration: none;
    }
    @media (max-width:760px){
        margin-right:10px;
    }
`,pU=q.section`
    display: flex;
    align-content: start ;
    min-height: 700px;
    padding-bottom: 130px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    margin: auto;
    @media (max-width:760px){
        margin: auto;
        min-height: 0px;
        flex-direction: column;
    }
`,mU=q.div`
    width: 100%;
    h1{
        padding-bottom: 0%;
        width: 50%;
        margin-left: 30px;
        font-size: 60px;
        color: #5f5f5f;
        font-weight: 500;
        line-height: 70px;
        text-align: center;
        @media (max-width:760px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
            margin-left: 0%;
    }
    }
    img{
        width:1000px;
        height: 900px;
        position: absolute;
        bottom: -100px;
        right: -1%;
        border-radius: 50%;
        @media (max-width:760px){
            top: 230px;
            left: 0;
            width: 100%;
            height: 500px;
            border-radius: 50%;
            position: initial;
    }
    }
`,gU=q.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width:760px){
        margin-top: 20px;
    }

`,yU=q.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dddddd;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgba(0 0 0 / 60%), 
        inset 0 0 0 2px rgba(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    
    vertical-align: middle;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    margin-left: 45%;
    &:hover{
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
    @media (max-width:760px){
        margin-top: 20px;
    }
`,_U=t=>({user:t.userState.user}),vU=t=>({signIn:()=>t(iU())}),wU=Ks(_U,vU)(uU),EU=t=>A.jsx(TU,{children:A.jsxs(IU,{children:[A.jsx(SU,{children:A.jsx("a",{href:"/home",children:A.jsx("img",{src:"src/assets/konet.jpg",alt:""})})}),A.jsxs(PU,{children:[A.jsx("div",{children:A.jsx("input",{type:"text",placeholder:"Search"})}),A.jsx(RU,{children:A.jsx("img",{src:"src/assets/search-icon.svg",alt:""})})]}),A.jsx(AU,{children:A.jsxs(CU,{children:[A.jsx(Yi,{className:"active",children:A.jsxs("a",{children:[A.jsx("img",{src:"src/assets/nav-home.svg",alt:""}),A.jsx("span",{children:"Home"})]})}),A.jsx(Yi,{children:A.jsxs("a",{children:[A.jsx("img",{src:"src/assets/nav-network.svg",alt:""}),A.jsx("span",{children:"My Network"})]})}),A.jsx(Yi,{children:A.jsxs("a",{children:[A.jsx("img",{src:"src/assets/nav-jobs.svg",alt:""}),A.jsx("span",{children:"Jobs"})]})}),A.jsx(Yi,{children:A.jsxs("a",{children:[A.jsx("img",{src:"src/assets/nav-messaging.svg",alt:""}),A.jsx("span",{children:"Messaging"})]})}),A.jsx(Yi,{children:A.jsxs("a",{children:[A.jsx("img",{src:"src/assets/nav-notifications.svg",alt:""}),A.jsx("span",{children:"Notifications"})]})}),A.jsxs(gS,{children:[A.jsxs("a",{children:[t.user&&t.user.photoURL?A.jsx("img",{src:t.user.photoURL,alt:""}):A.jsx("img",{src:"src/assets/user.svg",alt:""}),A.jsxs("span",{children:["Me",A.jsx("img",{src:"src/assets/down-icon.svg",alt:""})]})]}),A.jsx(mS,{onClick:t.signOut,children:A.jsx("a",{children:"Sign Out"})})]}),A.jsx(xU,{children:A.jsxs("a",{children:[A.jsx("img",{src:"src/assets/nav-work.svg",alt:""}),A.jsxs("span",{children:["Work",A.jsx("img",{src:"src/assets/down-icon.svg",alt:""})]})]})})]})})]})}),TU=q.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`,IU=q.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`,SU=q.span`
  margin-right: 8px;
  font-size: 0px;
  background-color: aqua;
  & > a > img {
    height: 50px;
  }
`,PU=q.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`,RU=q.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`,AU=q.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`,CU=q.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`,Yi=q.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`,mS=q.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`,gS=q(Yi)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${mS} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`,xU=q(gS)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`,kU=t=>({user:t.userState.user}),bU=t=>({signOut:()=>t(oU())}),OU=Ks(kU,bU)(EU),NU=t=>A.jsxs(DU,{children:[A.jsxs(yS,{children:[A.jsxs(LU,{children:[A.jsx(MU,{}),A.jsxs("a",{children:[A.jsx(VU,{}),A.jsxs(UU,{children:["Welcome, !",t.user?t.user.displayName:"there"]})]}),A.jsx("a",{children:A.jsx(FU,{children:"Add a photo"})})]}),A.jsx(jU,{children:A.jsxs("a",{children:[A.jsxs("div",{children:[A.jsx("span",{children:"Connections"}),A.jsx("span",{children:"Grow your network"})]}),A.jsx("img",{src:"src/assets/widget-icon.svg",alt:""})]})}),A.jsx($U,{children:A.jsxs("span",{children:[A.jsx("img",{src:"src/assets/item-icon.svg",alt:""}),"My Items"]})})]}),A.jsxs(zU,{children:[A.jsx("a",{children:A.jsx("span",{children:"Groups"})}),A.jsx("a",{children:A.jsxs("span",{children:["Events",A.jsx("img",{src:"src/assets/plus-icon.svg",alt:""})]})}),A.jsx("a",{children:A.jsx("span",{children:"Follow Hashtags"})}),A.jsx("a",{children:A.jsx("span",{children:"Discover more"})})]})]}),DU=q.div`
  grid-area: leftside;
`,yS=q.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`,LU=q.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`,MU=q.div`
  background: url("src/assets/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`,VU=q.div`
  box-shadow: none;
  background-image: url("src/assets/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`,UU=q.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`,FU=q.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`,jU=q.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`,$U=q.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`,zU=q(yS)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;

    &:hover {
      color: #0a66c2;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;

      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`,BU=t=>({user:t.userState.user}),HU=Ks(BU)(NU),WU="modulepreload",qU=function(t){return"/"+t},g0={},Vt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=qU(u),u in g0)return;g0[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":WU,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((m,v)=>{p.addEventListener("load",m),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var KU=function(e,n,r){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");typeof n=="function"&&(r=n,n={}),n=n||{},r=r||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async="async"in n?!!n.async:!0,s.src=e,n.attrs&&GU(s,n.attrs),n.text&&(s.text=""+n.text);var o="onload"in s?y0:QU;o(s,r),s.onload||y0(s,r),i.appendChild(s)};function GU(t,e){for(var n in e)t.setAttribute(n,e[n])}function y0(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function QU(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}var YU=function(e){return XU(e)&&!JU(e)};function XU(t){return!!t&&typeof t=="object"}function JU(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||t4(t)}var ZU=typeof Symbol=="function"&&Symbol.for,e4=ZU?Symbol.for("react.element"):60103;function t4(t){return t.$$typeof===e4}function n4(t){return Array.isArray(t)?[]:{}}function ba(t,e){return e.clone!==!1&&e.isMergeableObject(t)?$s(n4(t),t,e):t}function r4(t,e,n){return t.concat(e).map(function(r){return ba(r,n)})}function i4(t,e){if(!e.customMerge)return $s;var n=e.customMerge(t);return typeof n=="function"?n:$s}function s4(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return Object.propertyIsEnumerable.call(t,e)}):[]}function _0(t){return Object.keys(t).concat(s4(t))}function _S(t,e){try{return e in t}catch{return!1}}function o4(t,e){return _S(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))}function a4(t,e,n){var r={};return n.isMergeableObject(t)&&_0(t).forEach(function(i){r[i]=ba(t[i],n)}),_0(e).forEach(function(i){o4(t,i)||(_S(t,i)&&n.isMergeableObject(e[i])?r[i]=i4(i,n)(t[i],e[i],n):r[i]=ba(e[i],n))}),r}function $s(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||r4,n.isMergeableObject=n.isMergeableObject||YU,n.cloneUnlessOtherwiseSpecified=ba;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):a4(t,e,n):ba(e,n)}$s.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return $s(r,i,n)},{})};var l4=$s,vS=l4,u4=Object.create,Xc=Object.defineProperty,c4=Object.getOwnPropertyDescriptor,h4=Object.getOwnPropertyNames,d4=Object.getPrototypeOf,f4=Object.prototype.hasOwnProperty,p4=(t,e)=>{for(var n in e)Xc(t,n,{get:e[n],enumerable:!0})},wS=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of h4(e))!f4.call(t,i)&&i!==n&&Xc(t,i,{get:()=>e[i],enumerable:!(r=c4(e,i))||r.enumerable});return t},rg=(t,e,n)=>(n=t!=null?u4(d4(t)):{},wS(!t||!t.__esModule?Xc(n,"default",{value:t,enumerable:!0}):n,t)),m4=t=>wS(Xc({},"__esModule",{value:!0}),t),ES={};p4(ES,{callPlayer:()=>b4,getConfig:()=>x4,getSDK:()=>C4,isBlobUrl:()=>N4,isMediaStream:()=>O4,lazy:()=>v4,omit:()=>k4,parseEndTime:()=>P4,parseStartTime:()=>S4,queryString:()=>A4,randomString:()=>R4,supportsWebKitPresentationMode:()=>D4});var Jc=m4(ES),g4=rg(z),y4=rg(KU),_4=rg(vS);const v4=t=>g4.default.lazy(async()=>{const e=await t();return typeof e.default=="function"?e:e.default}),w4=/[?&#](?:start|t)=([0-9hms]+)/,E4=/[?&#]end=([0-9hms]+)/,Xf=/(\d+)(h|m|s)/g,T4=/^\d+$/;function TS(t,e){if(t instanceof Array)return;const n=t.match(e);if(n){const r=n[1];if(r.match(Xf))return I4(r);if(T4.test(r))return parseInt(r)}}function I4(t){let e=0,n=Xf.exec(t);for(;n!==null;){const[,r,i]=n;i==="h"&&(e+=parseInt(r,10)*60*60),i==="m"&&(e+=parseInt(r,10)*60),i==="s"&&(e+=parseInt(r,10)),n=Xf.exec(t)}return e}function S4(t){return TS(t,w4)}function P4(t){return TS(t,E4)}function R4(){return Math.random().toString(36).substr(2,5)}function A4(t){return Object.keys(t).map(e=>`${e}=${t[e]}`).join("&")}function yd(t){return window[t]?window[t]:window.exports&&window.exports[t]?window.exports[t]:window.module&&window.module.exports&&window.module.exports[t]?window.module.exports[t]:null}const Hi={},C4=function(e,n,r=null,i=()=>!0,s=y4.default){const o=yd(n);return o&&i(o)?Promise.resolve(o):new Promise((l,u)=>{if(Hi[e]){Hi[e].push({resolve:l,reject:u});return}Hi[e]=[{resolve:l,reject:u}];const c=d=>{Hi[e].forEach(p=>p.resolve(d))};if(r){const d=window[r];window[r]=function(){d&&d(),c(yd(n))}}s(e,d=>{d?(Hi[e].forEach(p=>p.reject(d)),Hi[e]=null):r||c(yd(n))})})};function x4(t,e){return(0,_4.default)(e.config,t.config)}function k4(t,...e){const n=[].concat(...e),r={},i=Object.keys(t);for(const s of i)n.indexOf(s)===-1&&(r[s]=t[s]);return r}function b4(t,...e){if(!this.player||!this.player[t]){let n=`ReactPlayer: ${this.constructor.displayName} player could not call %c${t}%c – `;return this.player?this.player[t]||(n+="The method was not available"):n+="The player was not available",console.warn(n,"font-weight: bold",""),null}return this.player[t](...e)}function O4(t){return typeof window<"u"&&typeof window.MediaStream<"u"&&t instanceof window.MediaStream}function N4(t){return/^blob:/.test(t)}function D4(t=document.createElement("video")){const e=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&e}var ig=Object.defineProperty,L4=Object.getOwnPropertyDescriptor,M4=Object.getOwnPropertyNames,V4=Object.prototype.hasOwnProperty,U4=(t,e)=>{for(var n in e)ig(t,n,{get:e[n],enumerable:!0})},F4=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of M4(e))!V4.call(t,i)&&i!==n&&ig(t,i,{get:()=>e[i],enumerable:!(r=L4(e,i))||r.enumerable});return t},j4=t=>F4(ig({},"__esModule",{value:!0}),t),IS={};U4(IS,{AUDIO_EXTENSIONS:()=>sg,DASH_EXTENSIONS:()=>VS,FLV_EXTENSIONS:()=>US,HLS_EXTENSIONS:()=>ag,MATCH_URL_DAILYMOTION:()=>NS,MATCH_URL_FACEBOOK:()=>AS,MATCH_URL_FACEBOOK_WATCH:()=>CS,MATCH_URL_KALTURA:()=>MS,MATCH_URL_MIXCLOUD:()=>DS,MATCH_URL_MUX:()=>RS,MATCH_URL_SOUNDCLOUD:()=>SS,MATCH_URL_STREAMABLE:()=>xS,MATCH_URL_TWITCH_CHANNEL:()=>OS,MATCH_URL_TWITCH_VIDEO:()=>bS,MATCH_URL_VIDYARD:()=>LS,MATCH_URL_VIMEO:()=>PS,MATCH_URL_WISTIA:()=>kS,MATCH_URL_YOUTUBE:()=>Jf,VIDEO_EXTENSIONS:()=>og,canPlay:()=>z4});var $4=j4(IS),v0=Jc;const Jf=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,SS=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,PS=/vimeo\.com\/(?!progressive_redirect).+/,RS=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,AS=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,CS=/^https?:\/\/fb\.watch\/.+$/,xS=/streamable\.com\/([a-z0-9]+)$/,kS=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,bS=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,OS=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,NS=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,DS=/mixcloud\.com\/([^/]+\/[^/]+)/,LS=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,MS=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,sg=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,og=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ag=/\.(m3u8)($|\?)/i,VS=/\.(mpd)($|\?)/i,US=/\.(flv)($|\?)/i,Zf=t=>{if(t instanceof Array){for(const e of t)if(typeof e=="string"&&Zf(e)||Zf(e.src))return!0;return!1}return(0,v0.isMediaStream)(t)||(0,v0.isBlobUrl)(t)?!0:sg.test(t)||og.test(t)||ag.test(t)||VS.test(t)||US.test(t)},z4={youtube:t=>t instanceof Array?t.every(e=>Jf.test(e)):Jf.test(t),soundcloud:t=>SS.test(t)&&!sg.test(t),vimeo:t=>PS.test(t)&&!og.test(t)&&!ag.test(t),mux:t=>RS.test(t),facebook:t=>AS.test(t)||CS.test(t),streamable:t=>xS.test(t),wistia:t=>kS.test(t),twitch:t=>bS.test(t)||OS.test(t),dailymotion:t=>NS.test(t),mixcloud:t=>DS.test(t),vidyard:t=>LS.test(t),kaltura:t=>MS.test(t),file:Zf};var lg=Object.defineProperty,B4=Object.getOwnPropertyDescriptor,H4=Object.getOwnPropertyNames,W4=Object.prototype.hasOwnProperty,q4=(t,e)=>{for(var n in e)lg(t,n,{get:e[n],enumerable:!0})},K4=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of H4(e))!W4.call(t,i)&&i!==n&&lg(t,i,{get:()=>e[i],enumerable:!(r=B4(e,i))||r.enumerable});return t},G4=t=>K4(lg({},"__esModule",{value:!0}),t),FS={};q4(FS,{default:()=>Y4});var Q4=G4(FS),Mt=Jc,xt=$4,Y4=[{key:"youtube",name:"YouTube",canPlay:xt.canPlay.youtube,lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./YouTube-B2DgyVXq.js").then(t=>t.Y),[]))},{key:"soundcloud",name:"SoundCloud",canPlay:xt.canPlay.soundcloud,lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./SoundCloud-Dad5FMx2.js").then(t=>t.S),[]))},{key:"vimeo",name:"Vimeo",canPlay:xt.canPlay.vimeo,lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./Vimeo-qFbImXRi.js").then(t=>t.V),[]))},{key:"mux",name:"Mux",canPlay:xt.canPlay.mux,lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./Mux-dsIosOrM.js").then(t=>t.M),[]))},{key:"facebook",name:"Facebook",canPlay:xt.canPlay.facebook,lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./Facebook-C5UdNn9u.js").then(t=>t.F),[]))},{key:"streamable",name:"Streamable",canPlay:xt.canPlay.streamable,lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./Streamable-CJB_Zbrf.js").then(t=>t.S),[]))},{key:"wistia",name:"Wistia",canPlay:xt.canPlay.wistia,lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./Wistia-CHKOxzP4.js").then(t=>t.W),[]))},{key:"twitch",name:"Twitch",canPlay:xt.canPlay.twitch,lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./Twitch-CuWxLtfa.js").then(t=>t.T),[]))},{key:"dailymotion",name:"DailyMotion",canPlay:xt.canPlay.dailymotion,lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./DailyMotion-DMOwjY5G.js").then(t=>t.D),[]))},{key:"mixcloud",name:"Mixcloud",canPlay:xt.canPlay.mixcloud,lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./Mixcloud-C25sgmFW.js").then(t=>t.M),[]))},{key:"vidyard",name:"Vidyard",canPlay:xt.canPlay.vidyard,lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./Vidyard-nNqQCefe.js").then(t=>t.V),[]))},{key:"kaltura",name:"Kaltura",canPlay:xt.canPlay.kaltura,lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./Kaltura-CUUKAW1A.js").then(t=>t.K),[]))},{key:"file",name:"FilePlayer",canPlay:xt.canPlay.file,canEnablePIP:t=>xt.canPlay.file(t)&&(document.pictureInPictureEnabled||(0,Mt.supportsWebKitPresentationMode)())&&!xt.AUDIO_EXTENSIONS.test(t),lazyPlayer:(0,Mt.lazy)(()=>Vt(()=>import("./FilePlayer-JmUFInyP.js").then(t=>t.F),[]))}],w0=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function X4(t,e){return!!(t===e||w0(t)&&w0(e))}function J4(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!X4(t[n],e[n]))return!1;return!0}function Z4(t,e){e===void 0&&(e=J4);var n,r=[],i,s=!1;function o(){for(var l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return s&&n===this&&e(l,r)||(i=t.apply(this,l),s=!0,n=this,r=l),i}return o}const eF=Object.freeze(Object.defineProperty({__proto__:null,default:Z4},Symbol.toStringTag,{value:"Module"})),tF=MP(eF);var nF=typeof Element<"u",rF=typeof Map=="function",iF=typeof Set=="function",sF=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function gu(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!gu(t[r],e[r]))return!1;return!0}var s;if(rF&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!gu(r.value[1],e.get(r.value[0])))return!1;return!0}if(iF&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(sF&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(nF&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!gu(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var jS=function(e,n){try{return gu(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},$S={exports:{}},oF="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",aF=oF,lF=aF;function zS(){}function BS(){}BS.resetWarningCache=zS;var uF=function(){function t(r,i,s,o,l,u){if(u!==lF){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:BS,resetWarningCache:zS};return n.PropTypes=n,n};$S.exports=uF();var cF=$S.exports,hF=Object.create,Zc=Object.defineProperty,dF=Object.getOwnPropertyDescriptor,fF=Object.getOwnPropertyNames,pF=Object.getPrototypeOf,mF=Object.prototype.hasOwnProperty,gF=(t,e)=>{for(var n in e)Zc(t,n,{get:e[n],enumerable:!0})},HS=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of fF(e))!mF.call(t,i)&&i!==n&&Zc(t,i,{get:()=>e[i],enumerable:!(r=dF(e,i))||r.enumerable});return t},yF=(t,e,n)=>(n=t!=null?hF(pF(t)):{},HS(!t||!t.__esModule?Zc(n,"default",{value:t,enumerable:!0}):n,t)),_F=t=>HS(Zc({},"__esModule",{value:!0}),t),WS={};gF(WS,{defaultProps:()=>EF,propTypes:()=>wF});var qS=_F(WS),vF=yF(cF);const{string:tt,bool:kt,number:Wi,array:_d,oneOfType:Ro,shape:qt,object:wt,func:Be,node:E0}=vF.default,wF={url:Ro([tt,_d,wt]),playing:kt,loop:kt,controls:kt,volume:Wi,muted:kt,playbackRate:Wi,width:Ro([tt,Wi]),height:Ro([tt,Wi]),style:wt,progressInterval:Wi,playsinline:kt,pip:kt,stopOnUnmount:kt,light:Ro([kt,tt,wt]),playIcon:E0,previewTabIndex:Wi,previewAriaLabel:tt,fallback:E0,oEmbedUrl:tt,wrapper:Ro([tt,Be,qt({render:Be.isRequired})]),config:qt({soundcloud:qt({options:wt}),youtube:qt({playerVars:wt,embedOptions:wt,onUnstarted:Be}),facebook:qt({appId:tt,version:tt,playerId:tt,attributes:wt}),dailymotion:qt({params:wt}),vimeo:qt({playerOptions:wt,title:tt}),mux:qt({attributes:wt,version:tt}),file:qt({attributes:wt,tracks:_d,forceVideo:kt,forceAudio:kt,forceHLS:kt,forceSafariHLS:kt,forceDisableHls:kt,forceDASH:kt,forceFLV:kt,hlsOptions:wt,hlsVersion:tt,dashVersion:tt,flvVersion:tt}),wistia:qt({options:wt,playerId:tt,customControls:_d}),mixcloud:qt({options:wt}),twitch:qt({options:wt,playerId:tt}),vidyard:qt({options:wt})}),onReady:Be,onStart:Be,onPlay:Be,onPause:Be,onBuffer:Be,onBufferEnd:Be,onEnded:Be,onError:Be,onDuration:Be,onSeek:Be,onPlaybackRateChange:Be,onPlaybackQualityChange:Be,onProgress:Be,onClickPreview:Be,onEnablePIP:Be,onDisablePIP:Be},nt=()=>{},EF={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:nt},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:nt,onStart:nt,onPlay:nt,onPause:nt,onBuffer:nt,onBufferEnd:nt,onEnded:nt,onError:nt,onDuration:nt,onSeek:nt,onPlaybackRateChange:nt,onPlaybackQualityChange:nt,onProgress:nt,onClickPreview:nt,onEnablePIP:nt,onDisablePIP:nt};var TF=Object.create,el=Object.defineProperty,IF=Object.getOwnPropertyDescriptor,SF=Object.getOwnPropertyNames,PF=Object.getPrototypeOf,RF=Object.prototype.hasOwnProperty,AF=(t,e,n)=>e in t?el(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,CF=(t,e)=>{for(var n in e)el(t,n,{get:e[n],enumerable:!0})},KS=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of SF(e))!RF.call(t,i)&&i!==n&&el(t,i,{get:()=>e[i],enumerable:!(r=IF(e,i))||r.enumerable});return t},GS=(t,e,n)=>(n=t!=null?TF(PF(t)):{},KS(!t||!t.__esModule?el(n,"default",{value:t,enumerable:!0}):n,t)),xF=t=>KS(el({},"__esModule",{value:!0}),t),Ne=(t,e,n)=>(AF(t,typeof e!="symbol"?e+"":e,n),n),QS={};CF(QS,{default:()=>eh});var kF=xF(QS),T0=GS(z),bF=GS(jS),YS=qS,OF=Jc;const NF=5e3;class eh extends T0.Component{constructor(){super(...arguments),Ne(this,"mounted",!1),Ne(this,"isReady",!1),Ne(this,"isPlaying",!1),Ne(this,"isLoading",!0),Ne(this,"loadOnReady",null),Ne(this,"startOnPlay",!0),Ne(this,"seekOnPlay",null),Ne(this,"onDurationCalled",!1),Ne(this,"handlePlayerMount",e=>{if(this.player){this.progress();return}this.player=e,this.player.load(this.props.url),this.progress()}),Ne(this,"getInternalPlayer",e=>this.player?this.player[e]:null),Ne(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,n=this.getSecondsLoaded(),r=this.getDuration();if(r){const i={playedSeconds:e,played:e/r};n!==null&&(i.loadedSeconds=n,i.loaded=n/r),(i.playedSeconds!==this.prevPlayed||i.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(i),this.prevPlayed=i.playedSeconds,this.prevLoaded=i.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),Ne(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:n,volume:r,muted:i}=this.props;e(),!i&&r!==null&&this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):n&&this.player.play(),this.handleDurationCheck()}),Ne(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:n,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&r!==1&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),n(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),Ne(this,"handlePause",e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)}),Ne(this,"handleEnded",()=>{const{activePlayer:e,loop:n,onEnded:r}=this.props;e.loopOnEnded&&n&&this.seekTo(0),n||(this.isPlaying=!1,r())}),Ne(this,"handleError",(...e)=>{this.isLoading=!1,this.props.onError(...e)}),Ne(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),Ne(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:n,playing:r,volume:i,muted:s,playbackRate:o,pip:l,loop:u,activePlayer:c,disableDeferredLoading:d}=this.props;if(!(0,bF.default)(e.url,n)){if(this.isLoading&&!c.forceLoad&&!d&&!(0,OF.isMediaStream)(n)){console.warn(`ReactPlayer: the attempt to load ${n} is being deferred until the player has loaded`),this.loadOnReady=n;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(n,this.isReady)}!e.playing&&r&&!this.isPlaying&&this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&l&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!l&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==i&&i!==null&&this.player.setVolume(i),e.muted!==s&&(s?this.player.mute():(this.player.unmute(),i!==null&&setTimeout(()=>this.player.setVolume(i)))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==u&&this.player.setLoop&&this.player.setLoop(u)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,n,r){if(!this.isReady){e!==0&&(this.seekOnPlay=e,setTimeout(()=>{this.seekOnPlay=null},NF));return}if(n?n==="fraction":e>0&&e<1){const s=this.player.getDuration();if(!s){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(s*e,r);return}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?T0.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}Ne(eh,"displayName","Player");Ne(eh,"propTypes",YS.propTypes);Ne(eh,"defaultProps",YS.defaultProps);var DF=Object.create,tl=Object.defineProperty,LF=Object.getOwnPropertyDescriptor,MF=Object.getOwnPropertyNames,VF=Object.getPrototypeOf,UF=Object.prototype.hasOwnProperty,FF=(t,e,n)=>e in t?tl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,jF=(t,e)=>{for(var n in e)tl(t,n,{get:e[n],enumerable:!0})},XS=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of MF(e))!UF.call(t,i)&&i!==n&&tl(t,i,{get:()=>e[i],enumerable:!(r=LF(e,i))||r.enumerable});return t},nl=(t,e,n)=>(n=t!=null?DF(VF(t)):{},XS(!t||!t.__esModule?tl(n,"default",{value:t,enumerable:!0}):n,t)),$F=t=>XS(tl({},"__esModule",{value:!0}),t),Oe=(t,e,n)=>(FF(t,typeof e!="symbol"?e+"":e,n),n),JS={};jF(JS,{createReactPlayer:()=>YF});var zF=$F(JS),Xi=nl(z),BF=nl(vS),vd=nl(tF),I0=nl(jS),Vo=qS,ZS=Jc,HF=nl(kF);const WF=(0,ZS.lazy)(()=>Vt(()=>import("./Preview-sX_uIcol.js").then(t=>t.P),[])),qF=typeof window<"u"&&window.document&&typeof document<"u",KF=typeof Ih<"u"&&Ih.window&&Ih.window.document,GF=Object.keys(Vo.propTypes),QF=qF||KF?Xi.Suspense:()=>null,Ao=[],YF=(t,e)=>{var n;return n=class extends Xi.Component{constructor(){super(...arguments),Oe(this,"state",{showPreview:!!this.props.light}),Oe(this,"references",{wrapper:r=>{this.wrapper=r},player:r=>{this.player=r}}),Oe(this,"handleClickPreview",r=>{this.setState({showPreview:!1}),this.props.onClickPreview(r)}),Oe(this,"showPreview",()=>{this.setState({showPreview:!0})}),Oe(this,"getDuration",()=>this.player?this.player.getDuration():null),Oe(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),Oe(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),Oe(this,"getInternalPlayer",(r="player")=>this.player?this.player.getInternalPlayer(r):null),Oe(this,"seekTo",(r,i,s)=>{if(!this.player)return null;this.player.seekTo(r,i,s)}),Oe(this,"handleReady",()=>{this.props.onReady(this)}),Oe(this,"getActivePlayer",(0,vd.default)(r=>{for(const i of[...Ao,...t])if(i.canPlay(r))return i;return e||null})),Oe(this,"getConfig",(0,vd.default)((r,i)=>{const{config:s}=this.props;return BF.default.all([Vo.defaultProps.config,Vo.defaultProps.config[i]||{},s,s[i]||{}])})),Oe(this,"getAttributes",(0,vd.default)(r=>(0,ZS.omit)(this.props,GF))),Oe(this,"renderActivePlayer",r=>{if(!r)return null;const i=this.getActivePlayer(r);if(!i)return null;const s=this.getConfig(r,i.key);return Xi.default.createElement(HF.default,{...this.props,key:i.key,ref:this.references.player,config:s,activePlayer:i.lazyPlayer||i,onReady:this.handleReady})})}shouldComponentUpdate(r,i){return!(0,I0.default)(this.props,r)||!(0,I0.default)(this.state,i)}componentDidUpdate(r){const{light:i}=this.props;!r.light&&i&&this.setState({showPreview:!0}),r.light&&!i&&this.setState({showPreview:!1})}renderPreview(r){if(!r)return null;const{light:i,playIcon:s,previewTabIndex:o,oEmbedUrl:l,previewAriaLabel:u}=this.props;return Xi.default.createElement(WF,{url:r,light:i,playIcon:s,previewTabIndex:o,previewAriaLabel:u,oEmbedUrl:l,onClick:this.handleClickPreview})}render(){const{url:r,style:i,width:s,height:o,fallback:l,wrapper:u}=this.props,{showPreview:c}=this.state,d=this.getAttributes(r),p=typeof u=="string"?this.references.wrapper:void 0;return Xi.default.createElement(u,{ref:p,style:{...i,width:s,height:o},...d},Xi.default.createElement(QF,{fallback:l},c?this.renderPreview(r):this.renderActivePlayer(r)))}},Oe(n,"displayName","ReactPlayer"),Oe(n,"propTypes",Vo.propTypes),Oe(n,"defaultProps",Vo.defaultProps),Oe(n,"addCustomPlayer",r=>{Ao.push(r)}),Oe(n,"removeCustomPlayers",()=>{Ao.length=0}),Oe(n,"canPlay",r=>{for(const i of[...Ao,...t])if(i.canPlay(r))return!0;return!1}),Oe(n,"canEnablePIP",r=>{for(const i of[...Ao,...t])if(i.canEnablePIP&&i.canEnablePIP(r))return!0;return!1}),n};var XF=Object.create,th=Object.defineProperty,JF=Object.getOwnPropertyDescriptor,ZF=Object.getOwnPropertyNames,ej=Object.getPrototypeOf,tj=Object.prototype.hasOwnProperty,nj=(t,e)=>{for(var n in e)th(t,n,{get:e[n],enumerable:!0})},eP=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ZF(e))!tj.call(t,i)&&i!==n&&th(t,i,{get:()=>e[i],enumerable:!(r=JF(e,i))||r.enumerable});return t},rj=(t,e,n)=>(n=t!=null?XF(ej(t)):{},eP(!t||!t.__esModule?th(n,"default",{value:t,enumerable:!0}):n,t)),ij=t=>eP(th({},"__esModule",{value:!0}),t),tP={};nj(tP,{default:()=>lj});var sj=ij(tP),ep=rj(Q4),oj=zF;const aj=ep.default[ep.default.length-1];var lj=(0,oj.createReactPlayer)(ep.default,aj);const nP=R0(sj),uj=t=>{const[e,n]=z.useState(""),[r,i]=z.useState(""),[s,o]=z.useState(""),[l,u]=z.useState(""),c=v=>{const S=v.target.files[0];if(S===""||S===void 0){alert(`not an image, the file is a ${typeof S}`);return}i(S)},d=v=>{n(""),i(""),o(""),u(""),t.handleClick(v)},p=v=>{if(v.preventDefault(),v.target!==v.currentTarget)return;const S={image:r,video:s,user:t.user,description:e,timestamp:$e.now()};t.postArticleAPI(S),d(v)},m=v=>{i(""),o(""),u(v)};return A.jsx(A.Fragment,{children:t.showModal==="open"&&A.jsx(cj,{children:A.jsxs(hj,{children:[A.jsxs(dj,{children:[A.jsx("h2",{children:"create a post"}),A.jsx("button",{onClick:v=>d(v),children:A.jsx("img",{src:"src/assets/wrong.svg",alt:""})})]}),A.jsxs(fj,{children:[A.jsxs(pj,{children:[t.user.photoURL?A.jsx("img",{src:t.user.photoURL,alt:""}):A.jsx("img",{src:"src/assets/user.svg",alt:""}),A.jsx("span",{children:t.user.displayName})]}),A.jsxs(vj,{children:[A.jsx("textarea",{value:e,onChange:v=>n(v.target.value),placeholder:"What do u want to talk about",autoFocus:!0}),l==="image"?A.jsxs(wj,{children:[A.jsx("input",{type:"file",accept:"image/gif , image/jpeg, image/png",name:"image",id:"file",style:{display:"none"},onChange:c}),A.jsx("p",{children:A.jsx("label",{htmlFor:"file",children:"Select an image to share"})}),r&&A.jsx("img",{src:URL.createObjectURL(r),alt:""})]}):l==="media"&&A.jsxs(A.Fragment,{children:[A.jsx("input",{type:"text",placeholder:"Please input a video link",value:s,onChange:v=>o(v.target.value)}),s&&A.jsx(nP,{width:"100%",url:s})]})]})]}),A.jsxs(mj,{children:[A.jsxs(gj,{children:["``",A.jsx(ta,{onClick:()=>m("image"),children:A.jsx("img",{src:"src/assets/image-area.svg",alt:""})}),A.jsx(ta,{onClick:()=>m("media"),children:A.jsx("img",{src:"./src/assets/youtube.svg",alt:""})})]}),A.jsx(yj,{children:A.jsxs(ta,{children:[A.jsx("img",{src:"src/assets/chat.svg",alt:""}),"Anyone"]})}),A.jsx(_j,{disabled:!e,onClick:v=>p(v),children:"Post"})]})]})})})},cj=q.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: black;
    background-color: rgba(0, 0, 0, 0.7);
    animation: fadeIn  0.3s;
`,hj=q.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`,dj=q.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        height:40px ;
        width: 40px;
        min-width: auto;
        color: rgba(0,0,0,0.15);
        img{
            pointer-events: none;
        }
    }
`,fj=q.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`,pj=q.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    img{
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }
    span{
        font-weight: 800;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`,mj=q.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`,ta=q.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.5);
    img{
        height: 50px;
        width: 25px;
    }
`,gj=q.div`
    align-items: center;
    display: flex;
    padding-right: 8px;
    ${ta} {
        width: 40px; 
    }
`,yj=q.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0,0,0,0.15);
    ${ta}{
        margin-right:5px ;
    }
`,_j=q.button`
    display: flex;
    align-items: center;
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    background: #000000;
    color: #ffffff;
    font-weight: 900;
    &:hover{
        background: #4d4d4d;
        color: white;
    }
`,vj=q.div`
    padding: 12px 24px;
    textarea{
        width: 100%;
        min-height: 100px;
        resize: none;
    }
    input{
        width: 100px;
        height: 35px;
        font-size: 16px;
        margin-bottom:20px;
    }
`,wj=q.div`
    text-align: center;
    img{
        width:100%;
    }

`,Ej=t=>({user:t.userState.user}),Tj=t=>({postArticleAPI:e=>{t(aU(e))}}),Ij=Ks(Ej,Tj)(uj),Sj=t=>{const[e,n]=z.useState("close");z.useEffect(()=>{t.getArticles()},[]);const r=i=>{if(i.preventDefault(),i.target===i.currentTarget)switch(e){case"open":n("close");break;case"close":n("open");break;default:n("close");break}};return A.jsx(A.Fragment,{children:t.articles.length===0?A.jsx("p",{children:"There are no Articles"}):A.jsxs(Pj,{children:[A.jsxs(Rj,{children:[A.jsxs("div",{children:[t.user&&t.user.photoURL?A.jsx("img",{src:t.user.photoURL,alt:""}):A.jsx("img",{src:"src/assets/user.svg",alt:""}),A.jsx("button",{onClick:r,disabled:!!t.loading,children:"Start a post"})]}),A.jsxs("div",{children:[A.jsxs("button",{children:[A.jsx("img",{src:"src/assets/picture-icon.png",alt:""}),A.jsx("span",{children:"Photo"})]}),A.jsxs("button",{children:[A.jsx("img",{src:"src/assets/video-icon.png",alt:""}),A.jsx("span",{children:"Video"})]}),A.jsxs("button",{children:[A.jsx("img",{src:"src/assets/event.png",alt:""}),A.jsx("span",{children:"Event"})]}),A.jsxs("button",{children:[A.jsx("img",{src:"src/assets/article-icon.png",alt:""}),A.jsx("span",{children:"Write airticle"})]})]})]}),A.jsxs(Nj,{children:[t.loading&&A.jsx("img",{src:"src/assets/infinite-spinner.svg",alt:"",width:"100px",height:"100px"}),t.articles.length>0&&t.articles.map((i,s)=>A.jsxs(Aj,{children:[A.jsxs(Cj,{children:[A.jsxs("a",{children:[A.jsx("img",{src:i.actor.image,alt:""}),A.jsxs("div",{children:[A.jsx("span",{children:i.actor.title}),A.jsx("span",{children:i.actor.description}),A.jsx("span",{children:i.actor.date.toDate().toLocaleDateString()})]})]}),A.jsx("button",{children:A.jsx("b",{children:". . ."})})]}),A.jsx(xj,{children:i.description}),A.jsx(kj,{children:A.jsx("a",{children:!i.SharedImg&&i.video?A.jsx(nP,{width:"100%",url:i.video}):i.sharedImg&&A.jsx("img",{src:i.sharedImg,alt:""})})}),A.jsxs(bj,{children:[A.jsx("li",{children:A.jsxs("button",{children:[A.jsx("img",{src:"src/assets/thumb-up.svg",alt:""}),A.jsx("img",{src:"src/assets/heart.svg",alt:""}),A.jsx("span",{children:"75"})]})}),A.jsx("li",{children:A.jsx("a",{children:"0 comments"})})]}),A.jsxs(Oj,{children:[A.jsxs("button",{children:[A.jsx("img",{src:"src/assets/thumb-up.svg",alt:""}),A.jsx("span",{children:"Like"})]}),A.jsxs("button",{children:[A.jsx("img",{src:"src/assets/comment.svg",alt:""}),A.jsx("span",{children:"Comment"})]}),A.jsxs("button",{children:[A.jsx("img",{src:"src/assets/share.svg",alt:""}),A.jsx("span",{children:"Share"})]}),A.jsxs("button",{children:[A.jsx("img",{src:"src/assets/send.svg",alt:""}),A.jsx("span",{children:"Send"})]})]})]},s))]}),A.jsx(Ij,{showModal:e,handleClick:r})]})})},Pj=q.div`
  grid-area: main;
`,rP=q.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`,Rj=q(rP)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white;
    div{
        button{
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            line-height: 1.5;           
            min-height: 48px;
            background-color: transparent;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
            img{
                height: 25px;
                width: 25px;
            }
        }
        &:first-child{
            display: flex;
            align-items: center;
            padding: 8px 16px 0 16px;
            img{
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button{
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                background-color: #eeeeee;
                text-align: center;
            }
        }
        &:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button{
                img{
                    margin: 0 4px 0 -2px;
                }
                span{
                    color: #868686;
                }
            }
        }
    }
`,Aj=q(rP)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;

`,Cj=q.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a{
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img{
            width: 48px;
            height: 48px;
        }
        & > div{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            align-items: flex-start;
            span{
                text-align: center;
                &:first-child{
                    font-size: px;
                    font-weight: 700;
                    color:#000000;
                }

                &:nth-child(n + 1){
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }

    button{
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
    }
`,xj=q.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0,0,0,0.9);
    text-align: left;
    font-size: 14px;
`,kj=q.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #838383;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;

    }
`,bj=q.ul`
    line-height: 1.3;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 0 16px;
    padding: 8px 0;
    border: 1px solid #e9e5df;
    list-style: none;
    li{
        margin-right: 5px;
        font-size: 12px;
    }
    button{
        display: flex;
        width: 70px;
        justify-content: center;
        align-items: center;
        img{
            height: 20px;
        }
    }
`,Oj=q.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    min-height: 40px;
    padding: 8px;
    button{
        display: inline-flex;
        padding: 8px;
        align-content: center;
        @media (min-width: 760px){
            span{
                margin-left: 8px;
            }
        }
        img{
            height: 15px;
            width: 15px;
        }
    }
`,Nj=q.div`
    text-align: center;
    & > {
        width:30px;
    }
`,Dj=t=>({loading:t.articleState.loading,user:t.userState.user,articles:t.articleState.articles}),Lj=t=>({getArticles:()=>t(lU())}),Mj=Ks(Dj,Lj)(Sj),Vj=t=>A.jsxs(Uj,{children:[A.jsxs(iP,{children:[A.jsxs(Fj,{children:[A.jsx("h2",{children:"Add to your feed"}),A.jsx("img",{src:"src/assets/feed-icon.svg",alt:""})]}),A.jsxs(jj,{children:[A.jsxs("li",{children:[A.jsx("a",{children:A.jsx(S0,{})}),A.jsxs("div",{children:[A.jsx("span",{children:"#Linkedin"}),A.jsx("button",{children:"Follow"})]})]}),A.jsxs("li",{children:[A.jsx("a",{children:A.jsx(S0,{})}),A.jsxs("div",{children:[A.jsx("span",{children:"#Video"}),A.jsx("button",{children:"Follow"})]})]})]}),A.jsxs($j,{children:["View all recommendations",A.jsx("img",{src:"src/assets/right-icon.svg",alt:""})]})]}),A.jsx(zj,{children:A.jsx("img",{src:"src/assets/ad.jpg"})})]}),Uj=q.div`
  grid-area: rightside;
`,iP=q.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`,Fj=q.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`,jj=q.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`,S0=q.div`
  background-image: url("src/assets/feed-icon.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`,$j=q.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`,zj=q(iP)`
  img {
    width: 100%;
    height: 100%;
  }
`,Bj=t=>A.jsxs(Hj,{children:[!t.user&&A.jsx(JE,{to:"/",replace:!0}),A.jsxs(Wj,{children:[A.jsx(HU,{}),A.jsx(Mj,{}),A.jsx(Vj,{})]})]}),Hj=q.div`
  padding-top: 52px;
  max-width: 100%;
`;q.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;const Wj=q.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`,qj=t=>({user:t.userState.user}),Kj=Ks(qj)(Bj);function Gj(t){return console.log(t),z.useEffect(()=>{t.getUserAuth},[t.getUserAuth]),A.jsx("div",{className:"App",children:A.jsx(ZC,{children:A.jsxs(YC,{children:[A.jsx(gf,{path:"/",element:A.jsx(wU,{})}),A.jsx(gf,{path:"/home",element:A.jsxs(A.Fragment,{children:[A.jsx(OU,{}),A.jsx(Kj,{})]})})]})})})}function rt(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var Qj=typeof Symbol=="function"&&Symbol.observable||"@@observable",P0=Qj,wd=()=>Math.random().toString(36).substring(7).split("").join("."),Yj={INIT:`@@redux/INIT${wd()}`,REPLACE:`@@redux/REPLACE${wd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${wd()}`},cc=Yj;function Xj(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function sP(t,e,n){if(typeof t!="function")throw new Error(rt(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(rt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(rt(1));return n(sP)(t,e)}let r=t,i=e,s=new Map,o=s,l=0,u=!1;function c(){o===s&&(o=new Map,s.forEach((C,E)=>{o.set(E,C)}))}function d(){if(u)throw new Error(rt(3));return i}function p(C){if(typeof C!="function")throw new Error(rt(4));if(u)throw new Error(rt(5));let E=!0;c();const _=l++;return o.set(_,C),function(){if(E){if(u)throw new Error(rt(6));E=!1,c(),o.delete(_),s=null}}}function m(C){if(!Xj(C))throw new Error(rt(7));if(typeof C.type>"u")throw new Error(rt(8));if(typeof C.type!="string")throw new Error(rt(17));if(u)throw new Error(rt(9));try{u=!0,i=r(i,C)}finally{u=!1}return(s=o).forEach(_=>{_()}),C}function v(C){if(typeof C!="function")throw new Error(rt(10));r=C,m({type:cc.REPLACE})}function S(){const C=p;return{subscribe(E){if(typeof E!="object"||E===null)throw new Error(rt(11));function _(){const O=E;O.next&&O.next(d())}return _(),{unsubscribe:C(_)}},[P0](){return this}}}return m({type:cc.INIT}),{dispatch:m,subscribe:p,getState:d,replaceReducer:v,[P0]:S}}function Jj(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:cc.INIT})>"u")throw new Error(rt(12));if(typeof n(void 0,{type:cc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(rt(13))})}function Zj(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{Jj(n)}catch(s){i=s}return function(o={},l){if(i)throw i;let u=!1;const c={};for(let d=0;d<r.length;d++){const p=r[d],m=n[p],v=o[p],S=m(v,l);if(typeof S>"u")throw l&&l.type,new Error(rt(14));c[p]=S,u=u||S!==v}return u=u||r.length!==Object.keys(o).length,u?c:o}}function e$(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function t$(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(rt(15))};const o={getState:i.getState,dispatch:(u,...c)=>s(u,...c)},l=t.map(u=>u(o));return s=e$(...l)(i.dispatch),{...i,dispatch:s}}}function n$(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var r$=n$();const i$={user:null},s$=(t=i$,e)=>{switch(e.type){case hS:return{...t,user:e.user};default:return t}},o$={articles:[],loading:!1},a$=(t=o$,e)=>{switch(e.type){case fS:return{...t,articles:e.payload};case dS:return{...t,loading:e.status};default:return t}},l$=Zj({userState:s$,articleState:a$}),u$=sP(l$,t$(r$));FE(document.getElementById("root")).render(A.jsx(z.StrictMode,{children:A.jsx(tb,{store:u$,children:A.jsx(Gj,{})})}));export{Vt as _,R0 as g,$4 as p,z as r,Jc as u};
