(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function $m(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yu={exports:{}},Pa={},Su={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function g0(){if(Ph)return wt;Ph=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),p=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=p&&N[p]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function y(N,se,ye){this.props=N,this.context=se,this.refs=A,this.updater=ye||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,se){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,se,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=y.prototype;function U(N,se,ye){this.props=N,this.context=se,this.refs=A,this.updater=ye||S}var R=U.prototype=new x;R.constructor=U,M(R,y.prototype),R.isPureReactComponent=!0;var b=Array.isArray,W=Object.prototype.hasOwnProperty,O={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function V(N,se,ye){var X,ue={},Se=null,xe=null;if(se!=null)for(X in se.ref!==void 0&&(xe=se.ref),se.key!==void 0&&(Se=""+se.key),se)W.call(se,X)&&!k.hasOwnProperty(X)&&(ue[X]=se[X]);var ve=arguments.length-2;if(ve===1)ue.children=ye;else if(1<ve){for(var ge=Array(ve),pe=0;pe<ve;pe++)ge[pe]=arguments[pe+2];ue.children=ge}if(N&&N.defaultProps)for(X in ve=N.defaultProps,ve)ue[X]===void 0&&(ue[X]=ve[X]);return{$$typeof:s,type:N,key:Se,ref:xe,props:ue,_owner:O.current}}function F(N,se){return{$$typeof:s,type:N.type,key:se,ref:N.ref,props:N.props,_owner:N._owner}}function T(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function I(N){var se={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return se[ye]})}var ne=/\/+/g;function Y(N,se){return typeof N=="object"&&N!==null&&N.key!=null?I(""+N.key):se.toString(36)}function ce(N,se,ye,X,ue){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var xe=!1;if(N===null)xe=!0;else switch(Se){case"string":case"number":xe=!0;break;case"object":switch(N.$$typeof){case s:case e:xe=!0}}if(xe)return xe=N,ue=ue(xe),N=X===""?"."+Y(xe,0):X,b(ue)?(ye="",N!=null&&(ye=N.replace(ne,"$&/")+"/"),ce(ue,se,ye,"",function(pe){return pe})):ue!=null&&(T(ue)&&(ue=F(ue,ye+(!ue.key||xe&&xe.key===ue.key?"":(""+ue.key).replace(ne,"$&/")+"/")+N)),se.push(ue)),1;if(xe=0,X=X===""?".":X+":",b(N))for(var ve=0;ve<N.length;ve++){Se=N[ve];var ge=X+Y(Se,ve);xe+=ce(Se,se,ye,ge,ue)}else if(ge=v(N),typeof ge=="function")for(N=ge.call(N),ve=0;!(Se=N.next()).done;)Se=Se.value,ge=X+Y(Se,ve++),xe+=ce(Se,se,ye,ge,ue);else if(Se==="object")throw se=String(N),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return xe}function de(N,se,ye){if(N==null)return N;var X=[],ue=0;return ce(N,X,"","",function(Se){return se.call(ye,Se,ue++)}),X}function K(N){if(N._status===-1){var se=N._result;se=se(),se.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=se)}if(N._status===1)return N._result.default;throw N._result}var oe={current:null},z={transition:null},fe={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:z,ReactCurrentOwner:O};function ie(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:de,forEach:function(N,se,ye){de(N,function(){se.apply(this,arguments)},ye)},count:function(N){var se=0;return de(N,function(){se++}),se},toArray:function(N){return de(N,function(se){return se})||[]},only:function(N){if(!T(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},wt.Component=y,wt.Fragment=n,wt.Profiler=o,wt.PureComponent=U,wt.StrictMode=i,wt.Suspense=h,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,wt.act=ie,wt.cloneElement=function(N,se,ye){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var X=M({},N.props),ue=N.key,Se=N.ref,xe=N._owner;if(se!=null){if(se.ref!==void 0&&(Se=se.ref,xe=O.current),se.key!==void 0&&(ue=""+se.key),N.type&&N.type.defaultProps)var ve=N.type.defaultProps;for(ge in se)W.call(se,ge)&&!k.hasOwnProperty(ge)&&(X[ge]=se[ge]===void 0&&ve!==void 0?ve[ge]:se[ge])}var ge=arguments.length-2;if(ge===1)X.children=ye;else if(1<ge){ve=Array(ge);for(var pe=0;pe<ge;pe++)ve[pe]=arguments[pe+2];X.children=ve}return{$$typeof:s,type:N.type,key:ue,ref:Se,props:X,_owner:xe}},wt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},wt.createElement=V,wt.createFactory=function(N){var se=V.bind(null,N);return se.type=N,se},wt.createRef=function(){return{current:null}},wt.forwardRef=function(N){return{$$typeof:f,render:N}},wt.isValidElement=T,wt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:K}},wt.memo=function(N,se){return{$$typeof:g,type:N,compare:se===void 0?null:se}},wt.startTransition=function(N){var se=z.transition;z.transition={};try{N()}finally{z.transition=se}},wt.unstable_act=ie,wt.useCallback=function(N,se){return oe.current.useCallback(N,se)},wt.useContext=function(N){return oe.current.useContext(N)},wt.useDebugValue=function(){},wt.useDeferredValue=function(N){return oe.current.useDeferredValue(N)},wt.useEffect=function(N,se){return oe.current.useEffect(N,se)},wt.useId=function(){return oe.current.useId()},wt.useImperativeHandle=function(N,se,ye){return oe.current.useImperativeHandle(N,se,ye)},wt.useInsertionEffect=function(N,se){return oe.current.useInsertionEffect(N,se)},wt.useLayoutEffect=function(N,se){return oe.current.useLayoutEffect(N,se)},wt.useMemo=function(N,se){return oe.current.useMemo(N,se)},wt.useReducer=function(N,se,ye){return oe.current.useReducer(N,se,ye)},wt.useRef=function(N){return oe.current.useRef(N)},wt.useState=function(N){return oe.current.useState(N)},wt.useSyncExternalStore=function(N,se,ye){return oe.current.useSyncExternalStore(N,se,ye)},wt.useTransition=function(){return oe.current.useTransition()},wt.version="18.3.1",wt}var Lh;function Kd(){return Lh||(Lh=1,Su.exports=g0()),Su.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function v0(){if(Uh)return Pa;Uh=1;var s=Kd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,g){var _,p={},v=null,S=null;g!==void 0&&(v=""+g),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)i.call(h,_)&&!l.hasOwnProperty(_)&&(p[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)p[_]===void 0&&(p[_]=h[_]);return{$$typeof:e,type:f,key:v,ref:S,props:p,_owner:o.current}}return Pa.Fragment=n,Pa.jsx=u,Pa.jsxs=u,Pa}var Nh;function x0(){return Nh||(Nh=1,yu.exports=v0()),yu.exports}var B=x0(),yt=Kd();const Re=$m(yt);var rl={},Eu={exports:{}},In={},Mu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function _0(){return Ih||(Ih=1,function(s){function e(z,fe){var ie=z.length;z.push(fe);e:for(;0<ie;){var N=ie-1>>>1,se=z[N];if(0<o(se,fe))z[N]=fe,z[ie]=se,ie=N;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var fe=z[0],ie=z.pop();if(ie!==fe){z[0]=ie;e:for(var N=0,se=z.length,ye=se>>>1;N<ye;){var X=2*(N+1)-1,ue=z[X],Se=X+1,xe=z[Se];if(0>o(ue,ie))Se<se&&0>o(xe,ue)?(z[N]=xe,z[Se]=ie,N=Se):(z[N]=ue,z[X]=ie,N=X);else if(Se<se&&0>o(xe,ie))z[N]=xe,z[Se]=ie,N=Se;else break e}}return fe}function o(z,fe){var ie=z.sortIndex-fe.sortIndex;return ie!==0?ie:z.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],g=[],_=1,p=null,v=3,S=!1,M=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(z){for(var fe=n(g);fe!==null;){if(fe.callback===null)i(g);else if(fe.startTime<=z)i(g),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=n(g)}}function b(z){if(A=!1,R(z),!M)if(n(h)!==null)M=!0,K(W);else{var fe=n(g);fe!==null&&oe(b,fe.startTime-z)}}function W(z,fe){M=!1,A&&(A=!1,x(V),V=-1),S=!0;var ie=v;try{for(R(fe),p=n(h);p!==null&&(!(p.expirationTime>fe)||z&&!I());){var N=p.callback;if(typeof N=="function"){p.callback=null,v=p.priorityLevel;var se=N(p.expirationTime<=fe);fe=s.unstable_now(),typeof se=="function"?p.callback=se:p===n(h)&&i(h),R(fe)}else i(h);p=n(h)}if(p!==null)var ye=!0;else{var X=n(g);X!==null&&oe(b,X.startTime-fe),ye=!1}return ye}finally{p=null,v=ie,S=!1}}var O=!1,k=null,V=-1,F=5,T=-1;function I(){return!(s.unstable_now()-T<F)}function ne(){if(k!==null){var z=s.unstable_now();T=z;var fe=!0;try{fe=k(!0,z)}finally{fe?Y():(O=!1,k=null)}}else O=!1}var Y;if(typeof U=="function")Y=function(){U(ne)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=ne,Y=function(){de.postMessage(null)}}else Y=function(){y(ne,0)};function K(z){k=z,O||(O=!0,Y())}function oe(z,fe){V=y(function(){z(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,K(W))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var fe=3;break;default:fe=v}var ie=v;v=fe;try{return z()}finally{v=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,fe){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ie=v;v=z;try{return fe()}finally{v=ie}},s.unstable_scheduleCallback=function(z,fe,ie){var N=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?N+ie:N):ie=N,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ie+se,z={id:_++,callback:fe,priorityLevel:z,startTime:ie,expirationTime:se,sortIndex:-1},ie>N?(z.sortIndex=ie,e(g,z),n(h)===null&&z===n(g)&&(A?(x(V),V=-1):A=!0,oe(b,ie-N))):(z.sortIndex=se,e(h,z),M||S||(M=!0,K(W))),z},s.unstable_shouldYield=I,s.unstable_wrapCallback=function(z){var fe=v;return function(){var ie=v;v=fe;try{return z.apply(this,arguments)}finally{v=ie}}}}(wu)),wu}var kh;function y0(){return kh||(kh=1,Mu.exports=_0()),Mu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function S0(){if(Oh)return In;Oh=1;var s=Kd(),e=y0();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(t,r){u(t,r),u(t+"Capture",r)}function u(t,r){for(o[t]=r,t=0;t<r.length;t++)i.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},p={};function v(t){return h.call(p,t)?!0:h.call(_,t)?!1:g.test(t)?p[t]=!0:(_[t]=!0,!1)}function S(t,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M(t,r,a,c){if(r===null||typeof r>"u"||S(t,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function A(t,r,a,c,d,m,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];y[r]=new A(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(x,U);y[r]=new A(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(x,U);y[r]=new A(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(x,U);y[r]=new A(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function R(t,r,a,c){var d=y.hasOwnProperty(r)?y[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,a,d,c)&&(a=null),c||d===null?v(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?t.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?t.setAttributeNS(c,r,a):t.setAttribute(r,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),O=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),I=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),z=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,N;function se(t){if(N===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+t}var ye=!1;function X(t,r){if(!t||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ae){var c=ae}Reflect.construct(t,[],r)}else{try{r.call()}catch(ae){c=ae}t.call(r.prototype)}else{try{throw Error()}catch(ae){c=ae}t()}}catch(ae){if(ae&&c&&typeof ae.stack=="string"){for(var d=ae.stack.split(`
`),m=c.stack.split(`
`),E=d.length-1,P=m.length-1;1<=E&&0<=P&&d[E]!==m[P];)P--;for(;1<=E&&0<=P;E--,P--)if(d[E]!==m[P]){if(E!==1||P!==1)do if(E--,P--,0>P||d[E]!==m[P]){var H=`
`+d[E].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=E&&0<=P);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?se(t):""}function ue(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=X(t.type,!1),t;case 11:return t=X(t.type.render,!1),t;case 1:return t=X(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case O:return"Portal";case F:return"Profiler";case V:return"StrictMode";case Y:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I:return(t.displayName||"Context")+".Consumer";case T:return(t._context.displayName||"Context")+".Provider";case ne:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return r=t.displayName||null,r!==null?r:Se(t.type)||"Memo";case K:r=t._payload,t=t._init;try{return Se(t(r))}catch{}}return null}function xe(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ge(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pe(t){var r=ge(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ne(t){t._valueTracker||(t._valueTracker=pe(t))}function st(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return t&&(c=ge(t)?t.checked?"true":"false":t.value),t=c,t!==a?(r.setValue(t),!0):!1}function rt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function L(t,r){var a=r.checked;return ie({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function At(t,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=ve(r.value!=null?r.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function et(t,r){r=r.checked,r!=null&&R(t,"checked",r,!1)}function tt(t,r){et(t,r);var a=ve(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?dt(t,r.type,a):r.hasOwnProperty("defaultValue")&&dt(t,r.type,ve(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Be(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function dt(t,r,a){(r!=="number"||rt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var $e=Array.isArray;function at(t,r,a,c){if(t=t.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=r.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&c&&(t[a].defaultSelected=!0)}else{for(a=""+ve(a),r=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}r!==null||t[d].disabled||(r=t[d])}r!==null&&(r.selected=!0)}}function vt(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return ie({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function D(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(n(92));if($e(a)){if(1<a.length)throw Error(n(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:ve(a)}}function w(t,r){var a=ve(r.value),c=ve(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function ee(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?me(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var he,Ke=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return t(r,a,c,d)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(he=he||document.createElement("div"),he.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=he.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function De(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var Ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(Ge).forEach(function(t){Xe.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Ge[r]=Ge[t]})});function Me(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ge.hasOwnProperty(t)&&Ge[t]?(""+r).trim():r+"px"}function ze(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Me(a,r[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,d):t[a]=d}}var ot=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(t,r){if(r){if(ot[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Le(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ue=null,Ee=null,Oe=null;function Te(t){if(t=va(t)){if(typeof Ue!="function")throw Error(n(280));var r=t.stateNode;r&&(r=xo(r),Ue(t.stateNode,t.type,r))}}function re(t){Ee?Oe?Oe.push(t):Oe=[t]:Ee=t}function Pe(){if(Ee){var t=Ee,r=Oe;if(Oe=Ee=null,Te(t),r)for(t=0;t<r.length;t++)Te(r[t])}}function Ze(t,r){return t(r)}function mt(){}var St=!1;function Rt(t,r,a){if(St)return t(r,a);St=!0;try{return Ze(t,r,a)}finally{St=!1,(Ee!==null||Oe!==null)&&(mt(),Pe())}}function Nt(t,r){var a=t.stateNode;if(a===null)return null;var c=xo(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,r,typeof a));return a}var ir=!1;if(f)try{var Qt={};Object.defineProperty(Qt,"passive",{get:function(){ir=!0}}),window.addEventListener("test",Qt,Qt),window.removeEventListener("test",Qt,Qt)}catch{ir=!1}function Zt(t,r,a,c,d,m,E,P,H){var ae=Array.prototype.slice.call(arguments,3);try{r.apply(a,ae)}catch(Ae){this.onError(Ae)}}var $n=!1,Tn=null,Kr=!1,Zr=null,$a={onError:function(t){$n=!0,Tn=t}};function ss(t,r,a,c,d,m,E,P,H){$n=!1,Tn=null,Zt.apply($a,arguments)}function Ka(t,r,a,c,d,m,E,P,H){if(ss.apply(this,arguments),$n){if($n){var ae=Tn;$n=!1,Tn=null}else throw Error(n(198));Kr||(Kr=!0,Zr=ae)}}function _r(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function Za(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Ja(t){if(_r(t)!==t)throw Error(n(188))}function Vl(t){var r=t.alternate;if(!r){if(r=_r(t),r===null)throw Error(n(188));return r!==t?null:t}for(var a=t,c=r;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Ja(d),t;if(m===c)return Ja(d),r;m=m.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=m;else{for(var E=!1,P=d.child;P;){if(P===a){E=!0,a=d,c=m;break}if(P===c){E=!0,c=d,a=m;break}P=P.sibling}if(!E){for(P=m.child;P;){if(P===a){E=!0,a=m,c=d;break}if(P===c){E=!0,c=m,a=d;break}P=P.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:r}function Qa(t){return t=Vl(t),t!==null?eo(t):null}function eo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=eo(t);if(r!==null)return r;t=t.sibling}return null}var to=e.unstable_scheduleCallback,C=e.unstable_cancelCallback,q=e.unstable_shouldYield,le=e.unstable_requestPaint,Q=e.unstable_now,$=e.unstable_getCurrentPriorityLevel,be=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,Ve=e.unstable_LowPriority,pt=e.unstable_IdlePriority,ft=null,Ye=null;function Et(t){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(ft,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Ut,Wt=Math.log,Bt=Math.LN2;function Ut(t){return t>>>=0,t===0?32:31-(Wt(t)/Bt|0)|0}var it=64,It=4194304;function Mt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function on(t,r){var a=t.pendingLanes;if(a===0)return 0;var c=0,d=t.suspendedLanes,m=t.pingedLanes,E=a&268435455;if(E!==0){var P=E&~d;P!==0?c=Mt(P):(m&=E,m!==0&&(c=Mt(m)))}else E=a&~d,E!==0?c=Mt(E):m!==0&&(c=Mt(m));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,m=r&-r,d>=m||d===16&&(m&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)a=31-xt(r),d=1<<a,c|=t[a],r&=~d;return c}function Jr(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cn(t,r){for(var a=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes;0<m;){var E=31-xt(m),P=1<<E,H=d[E];H===-1?((P&a)===0||(P&c)!==0)&&(d[E]=Jr(P,r)):H<=r&&(t.expiredLanes|=P),m&=~P}}function Rr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zt(){var t=it;return it<<=1,(it&4194240)===0&&(it=64),t}function _n(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function ln(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-xt(r),t[r]=a}function hn(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-xt(a),m=1<<d;r[d]=0,c[d]=-1,t[d]=-1,a&=~m}}function cn(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var c=31-xt(a),d=1<<c;d&r|t[c]&r&&(t[c]|=r),a&=~d}}var bt=0;function yr(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var df,Wl,ff,pf,hf,jl=!1,no=[],Qr=null,ei=null,ti=null,ta=new Map,na=new Map,ni=[],O2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mf(t,r){switch(t){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":ta.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(r.pointerId)}}function ra(t,r,a,c,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},r!==null&&(r=va(r),r!==null&&Wl(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),t)}function B2(t,r,a,c,d){switch(r){case"focusin":return Qr=ra(Qr,t,r,a,c,d),!0;case"dragenter":return ei=ra(ei,t,r,a,c,d),!0;case"mouseover":return ti=ra(ti,t,r,a,c,d),!0;case"pointerover":var m=d.pointerId;return ta.set(m,ra(ta.get(m)||null,t,r,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,na.set(m,ra(na.get(m)||null,t,r,a,c,d)),!0}return!1}function gf(t){var r=Pi(t.target);if(r!==null){var a=_r(r);if(a!==null){if(r=a.tag,r===13){if(r=Za(a),r!==null){t.blockedOn=r,hf(t.priority,function(){ff(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ro(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Yl(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);lt=c,a.target.dispatchEvent(c),lt=null}else return r=va(a),r!==null&&Wl(r),t.blockedOn=a,!1;r.shift()}return!0}function vf(t,r,a){ro(t)&&a.delete(r)}function z2(){jl=!1,Qr!==null&&ro(Qr)&&(Qr=null),ei!==null&&ro(ei)&&(ei=null),ti!==null&&ro(ti)&&(ti=null),ta.forEach(vf),na.forEach(vf)}function ia(t,r){t.blockedOn===r&&(t.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,z2)))}function sa(t){function r(d){return ia(d,t)}if(0<no.length){ia(no[0],t);for(var a=1;a<no.length;a++){var c=no[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Qr!==null&&ia(Qr,t),ei!==null&&ia(ei,t),ti!==null&&ia(ti,t),ta.forEach(r),na.forEach(r),a=0;a<ni.length;a++)c=ni[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<ni.length&&(a=ni[0],a.blockedOn===null);)gf(a),a.blockedOn===null&&ni.shift()}var as=b.ReactCurrentBatchConfig,io=!0;function H2(t,r,a,c){var d=bt,m=as.transition;as.transition=null;try{bt=1,Xl(t,r,a,c)}finally{bt=d,as.transition=m}}function G2(t,r,a,c){var d=bt,m=as.transition;as.transition=null;try{bt=4,Xl(t,r,a,c)}finally{bt=d,as.transition=m}}function Xl(t,r,a,c){if(io){var d=Yl(t,r,a,c);if(d===null)uc(t,r,c,so,a),mf(t,c);else if(B2(d,t,r,a,c))c.stopPropagation();else if(mf(t,c),r&4&&-1<O2.indexOf(t)){for(;d!==null;){var m=va(d);if(m!==null&&df(m),m=Yl(t,r,a,c),m===null&&uc(t,r,c,so,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else uc(t,r,c,null,a)}}var so=null;function Yl(t,r,a,c){if(so=null,t=G(c),t=Pi(t),t!==null)if(r=_r(t),r===null)t=null;else if(a=r.tag,a===13){if(t=Za(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return so=t,null}function xf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($()){case be:return 1;case Ie:return 4;case We:case Ve:return 16;case pt:return 536870912;default:return 16}default:return 16}}var ri=null,ql=null,ao=null;function _f(){if(ao)return ao;var t,r=ql,a=r.length,c,d="value"in ri?ri.value:ri.textContent,m=d.length;for(t=0;t<a&&r[t]===d[t];t++);var E=a-t;for(c=1;c<=E&&r[a-c]===d[m-c];c++);return ao=d.slice(t,1<c?1-c:void 0)}function oo(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function yf(){return!1}function zn(t){function r(a,c,d,m,E){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(a=t[P],this[P]=a?a(m):m[P]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?lo:yf,this.isPropagationStopped=yf,this}return ie(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),r}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=zn(os),aa=ie({},os,{view:0,detail:0}),V2=zn(aa),Kl,Zl,oa,co=ie({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(Kl=t.screenX-oa.screenX,Zl=t.screenY-oa.screenY):Zl=Kl=0,oa=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),Sf=zn(co),W2=ie({},co,{dataTransfer:0}),j2=zn(W2),X2=ie({},aa,{relatedTarget:0}),Jl=zn(X2),Y2=ie({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),q2=zn(Y2),$2=ie({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K2=zn($2),Z2=ie({},os,{data:0}),Ef=zn(Z2),J2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tg(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=eg[t])?!!r[t]:!1}function Ql(){return tg}var ng=ie({},aa,{key:function(t){if(t.key){var r=J2[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Q2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(t){return t.type==="keypress"?oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rg=zn(ng),ig=ie({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mf=zn(ig),sg=ie({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),ag=zn(sg),og=ie({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),lg=zn(og),cg=ie({},co,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ug=zn(cg),dg=[9,13,27,32],ec=f&&"CompositionEvent"in window,la=null;f&&"documentMode"in document&&(la=document.documentMode);var fg=f&&"TextEvent"in window&&!la,wf=f&&(!ec||la&&8<la&&11>=la),Af=" ",Tf=!1;function Cf(t,r){switch(t){case"keyup":return dg.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function pg(t,r){switch(t){case"compositionend":return bf(r);case"keypress":return r.which!==32?null:(Tf=!0,Af);case"textInput":return t=r.data,t===Af&&Tf?null:t;default:return null}}function hg(t,r){if(ls)return t==="compositionend"||!ec&&Cf(t,r)?(t=_f(),ao=ql=ri=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return wf&&r.locale!=="ko"?null:r.data;default:return null}}var mg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!mg[t.type]:r==="textarea"}function Df(t,r,a,c){re(c),r=mo(r,"onChange"),0<r.length&&(a=new $l("onChange","change",null,a,c),t.push({event:a,listeners:r}))}var ca=null,ua=null;function gg(t){qf(t,0)}function uo(t){var r=ps(t);if(st(r))return t}function vg(t,r){if(t==="change")return r}var Rf=!1;if(f){var tc;if(f){var nc="oninput"in document;if(!nc){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),nc=typeof Pf.oninput=="function"}tc=nc}else tc=!1;Rf=tc&&(!document.documentMode||9<document.documentMode)}function Lf(){ca&&(ca.detachEvent("onpropertychange",Uf),ua=ca=null)}function Uf(t){if(t.propertyName==="value"&&uo(ua)){var r=[];Df(r,ua,t,G(t)),Rt(gg,r)}}function xg(t,r,a){t==="focusin"?(Lf(),ca=r,ua=a,ca.attachEvent("onpropertychange",Uf)):t==="focusout"&&Lf()}function _g(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uo(ua)}function yg(t,r){if(t==="click")return uo(r)}function Sg(t,r){if(t==="input"||t==="change")return uo(r)}function Eg(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var sr=typeof Object.is=="function"?Object.is:Eg;function da(t,r){if(sr(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(r,d)||!sr(t[d],r[d]))return!1}return!0}function Nf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function If(t,r){var a=Nf(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=r&&c>=r)return{node:a,offset:r-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nf(a)}}function kf(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?kf(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Of(){for(var t=window,r=rt();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=rt(t.document)}return r}function rc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Mg(t){var r=Of(),a=t.focusedElem,c=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&kf(a.ownerDocument.documentElement,a)){if(c!==null&&rc(a)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!t.extend&&m>c&&(d=c,c=m,m=d),d=If(a,m);var E=If(a,c);d&&E&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),t.removeAllRanges(),m>c?(t.addRange(r),t.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wg=f&&"documentMode"in document&&11>=document.documentMode,cs=null,ic=null,fa=null,sc=!1;function Bf(t,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sc||cs==null||cs!==rt(c)||(c=cs,"selectionStart"in c&&rc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),fa&&da(fa,c)||(fa=c,c=mo(ic,"onSelect"),0<c.length&&(r=new $l("onSelect","select",null,r,a),t.push({event:r,listeners:c}),r.target=cs)))}function fo(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var us={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},ac={},zf={};f&&(zf=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function po(t){if(ac[t])return ac[t];if(!us[t])return t;var r=us[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in zf)return ac[t]=r[a];return t}var Hf=po("animationend"),Gf=po("animationiteration"),Vf=po("animationstart"),Wf=po("transitionend"),jf=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(t,r){jf.set(t,r),l(r,[t])}for(var oc=0;oc<Xf.length;oc++){var lc=Xf[oc],Ag=lc.toLowerCase(),Tg=lc[0].toUpperCase()+lc.slice(1);ii(Ag,"on"+Tg)}ii(Hf,"onAnimationEnd"),ii(Gf,"onAnimationIteration"),ii(Vf,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(Wf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cg=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function Yf(t,r,a){var c=t.type||"unknown-event";t.currentTarget=a,Ka(c,r,void 0,t),t.currentTarget=null}function qf(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],d=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var E=c.length-1;0<=E;E--){var P=c[E],H=P.instance,ae=P.currentTarget;if(P=P.listener,H!==m&&d.isPropagationStopped())break e;Yf(d,P,ae),m=H}else for(E=0;E<c.length;E++){if(P=c[E],H=P.instance,ae=P.currentTarget,P=P.listener,H!==m&&d.isPropagationStopped())break e;Yf(d,P,ae),m=H}}}if(Kr)throw t=Zr,Kr=!1,Zr=null,t}function Gt(t,r){var a=r[gc];a===void 0&&(a=r[gc]=new Set);var c=t+"__bubble";a.has(c)||($f(r,t,2,!1),a.add(c))}function cc(t,r,a){var c=0;r&&(c|=4),$f(a,t,c,r)}var ho="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[ho]){t[ho]=!0,i.forEach(function(a){a!=="selectionchange"&&(Cg.has(a)||cc(a,!1,t),cc(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ho]||(r[ho]=!0,cc("selectionchange",!1,r))}}function $f(t,r,a,c){switch(xf(r)){case 1:var d=H2;break;case 4:d=G2;break;default:d=Xl}a=d.bind(null,r,a,t),d=void 0,!ir||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(r,a,{capture:!0,passive:d}):t.addEventListener(r,a,!0):d!==void 0?t.addEventListener(r,a,{passive:d}):t.addEventListener(r,a,!1)}function uc(t,r,a,c,d){var m=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var P=c.stateNode.containerInfo;if(P===d||P.nodeType===8&&P.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;E=E.return}for(;P!==null;){if(E=Pi(P),E===null)return;if(H=E.tag,H===5||H===6){c=m=E;continue e}P=P.parentNode}}c=c.return}Rt(function(){var ae=m,Ae=G(a),Ce=[];e:{var we=jf.get(t);if(we!==void 0){var He=$l,qe=t;switch(t){case"keypress":if(oo(a)===0)break e;case"keydown":case"keyup":He=rg;break;case"focusin":qe="focus",He=Jl;break;case"focusout":qe="blur",He=Jl;break;case"beforeblur":case"afterblur":He=Jl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=j2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=ag;break;case Hf:case Gf:case Vf:He=q2;break;case Wf:He=lg;break;case"scroll":He=V2;break;case"wheel":He=ug;break;case"copy":case"cut":case"paste":He=K2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Mf}var Je=(r&4)!==0,Jt=!Je&&t==="scroll",Z=Je?we!==null?we+"Capture":null:we;Je=[];for(var j=ae,te;j!==null;){te=j;var Fe=te.stateNode;if(te.tag===5&&Fe!==null&&(te=Fe,Z!==null&&(Fe=Nt(j,Z),Fe!=null&&Je.push(ma(j,Fe,te)))),Jt)break;j=j.return}0<Je.length&&(we=new He(we,qe,null,a,Ae),Ce.push({event:we,listeners:Je}))}}if((r&7)===0){e:{if(we=t==="mouseover"||t==="pointerover",He=t==="mouseout"||t==="pointerout",we&&a!==lt&&(qe=a.relatedTarget||a.fromElement)&&(Pi(qe)||qe[Pr]))break e;if((He||we)&&(we=Ae.window===Ae?Ae:(we=Ae.ownerDocument)?we.defaultView||we.parentWindow:window,He?(qe=a.relatedTarget||a.toElement,He=ae,qe=qe?Pi(qe):null,qe!==null&&(Jt=_r(qe),qe!==Jt||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(He=null,qe=ae),He!==qe)){if(Je=Sf,Fe="onMouseLeave",Z="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Je=Mf,Fe="onPointerLeave",Z="onPointerEnter",j="pointer"),Jt=He==null?we:ps(He),te=qe==null?we:ps(qe),we=new Je(Fe,j+"leave",He,a,Ae),we.target=Jt,we.relatedTarget=te,Fe=null,Pi(Ae)===ae&&(Je=new Je(Z,j+"enter",qe,a,Ae),Je.target=te,Je.relatedTarget=Jt,Fe=Je),Jt=Fe,He&&qe)t:{for(Je=He,Z=qe,j=0,te=Je;te;te=ds(te))j++;for(te=0,Fe=Z;Fe;Fe=ds(Fe))te++;for(;0<j-te;)Je=ds(Je),j--;for(;0<te-j;)Z=ds(Z),te--;for(;j--;){if(Je===Z||Z!==null&&Je===Z.alternate)break t;Je=ds(Je),Z=ds(Z)}Je=null}else Je=null;He!==null&&Kf(Ce,we,He,Je,!1),qe!==null&&Jt!==null&&Kf(Ce,Jt,qe,Je,!0)}}e:{if(we=ae?ps(ae):window,He=we.nodeName&&we.nodeName.toLowerCase(),He==="select"||He==="input"&&we.type==="file")var Qe=vg;else if(Ff(we))if(Rf)Qe=Sg;else{Qe=_g;var ct=xg}else(He=we.nodeName)&&He.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(Qe=yg);if(Qe&&(Qe=Qe(t,ae))){Df(Ce,Qe,a,Ae);break e}ct&&ct(t,we,ae),t==="focusout"&&(ct=we._wrapperState)&&ct.controlled&&we.type==="number"&&dt(we,"number",we.value)}switch(ct=ae?ps(ae):window,t){case"focusin":(Ff(ct)||ct.contentEditable==="true")&&(cs=ct,ic=ae,fa=null);break;case"focusout":fa=ic=cs=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,Bf(Ce,a,Ae);break;case"selectionchange":if(wg)break;case"keydown":case"keyup":Bf(Ce,a,Ae)}var ut;if(ec)e:{switch(t){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else ls?Cf(t,a)&&(ht="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(wf&&a.locale!=="ko"&&(ls||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&ls&&(ut=_f()):(ri=Ae,ql="value"in ri?ri.value:ri.textContent,ls=!0)),ct=mo(ae,ht),0<ct.length&&(ht=new Ef(ht,t,null,a,Ae),Ce.push({event:ht,listeners:ct}),ut?ht.data=ut:(ut=bf(a),ut!==null&&(ht.data=ut)))),(ut=fg?pg(t,a):hg(t,a))&&(ae=mo(ae,"onBeforeInput"),0<ae.length&&(Ae=new Ef("onBeforeInput","beforeinput",null,a,Ae),Ce.push({event:Ae,listeners:ae}),Ae.data=ut))}qf(Ce,r)})}function ma(t,r,a){return{instance:t,listener:r,currentTarget:a}}function mo(t,r){for(var a=r+"Capture",c=[];t!==null;){var d=t,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Nt(t,a),m!=null&&c.unshift(ma(t,m,d)),m=Nt(t,r),m!=null&&c.push(ma(t,m,d))),t=t.return}return c}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kf(t,r,a,c,d){for(var m=r._reactName,E=[];a!==null&&a!==c;){var P=a,H=P.alternate,ae=P.stateNode;if(H!==null&&H===c)break;P.tag===5&&ae!==null&&(P=ae,d?(H=Nt(a,m),H!=null&&E.unshift(ma(a,H,P))):d||(H=Nt(a,m),H!=null&&E.push(ma(a,H,P)))),a=a.return}E.length!==0&&t.push({event:r,listeners:E})}var bg=/\r\n?/g,Fg=/\u0000|\uFFFD/g;function Zf(t){return(typeof t=="string"?t:""+t).replace(bg,`
`).replace(Fg,"")}function go(t,r,a){if(r=Zf(r),Zf(t)!==r&&a)throw Error(n(425))}function vo(){}var dc=null,fc=null;function pc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var hc=typeof setTimeout=="function"?setTimeout:void 0,Dg=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(t){return Jf.resolve(null).then(t).catch(Pg)}:hc;function Pg(t){setTimeout(function(){throw t})}function mc(t,r){var a=r,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){t.removeChild(d),sa(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);sa(r)}function si(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Qf(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),Sr="__reactFiber$"+fs,ga="__reactProps$"+fs,Pr="__reactContainer$"+fs,gc="__reactEvents$"+fs,Lg="__reactListeners$"+fs,Ug="__reactHandles$"+fs;function Pi(t){var r=t[Sr];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Pr]||a[Sr]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Qf(t);t!==null;){if(a=t[Sr])return a;t=Qf(t)}return r}t=a,a=t.parentNode}return null}function va(t){return t=t[Sr]||t[Pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function xo(t){return t[ga]||null}var vc=[],hs=-1;function ai(t){return{current:t}}function Vt(t){0>hs||(t.current=vc[hs],vc[hs]=null,hs--)}function Ht(t,r){hs++,vc[hs]=t.current,t.current=r}var oi={},yn=ai(oi),Rn=ai(!1),Li=oi;function ms(t,r){var a=t.type.contextTypes;if(!a)return oi;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=r[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=d),d}function Pn(t){return t=t.childContextTypes,t!=null}function _o(){Vt(Rn),Vt(yn)}function ep(t,r,a){if(yn.current!==oi)throw Error(n(168));Ht(yn,r),Ht(Rn,a)}function tp(t,r,a){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(n(108,xe(t)||"Unknown",d));return ie({},a,c)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||oi,Li=yn.current,Ht(yn,t),Ht(Rn,Rn.current),!0}function np(t,r,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=tp(t,r,Li),c.__reactInternalMemoizedMergedChildContext=t,Vt(Rn),Vt(yn),Ht(yn,t)):Vt(Rn),Ht(Rn,a)}var Lr=null,So=!1,xc=!1;function rp(t){Lr===null?Lr=[t]:Lr.push(t)}function Ng(t){So=!0,rp(t)}function li(){if(!xc&&Lr!==null){xc=!0;var t=0,r=bt;try{var a=Lr;for(bt=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Lr=null,So=!1}catch(d){throw Lr!==null&&(Lr=Lr.slice(t+1)),to(be,li),d}finally{bt=r,xc=!1}}return null}var gs=[],vs=0,Eo=null,Mo=0,Kn=[],Zn=0,Ui=null,Ur=1,Nr="";function Ni(t,r){gs[vs++]=Mo,gs[vs++]=Eo,Eo=t,Mo=r}function ip(t,r,a){Kn[Zn++]=Ur,Kn[Zn++]=Nr,Kn[Zn++]=Ui,Ui=t;var c=Ur;t=Nr;var d=32-xt(c)-1;c&=~(1<<d),a+=1;var m=32-xt(r)+d;if(30<m){var E=d-d%5;m=(c&(1<<E)-1).toString(32),c>>=E,d-=E,Ur=1<<32-xt(r)+d|a<<d|c,Nr=m+t}else Ur=1<<m|a<<d|c,Nr=t}function _c(t){t.return!==null&&(Ni(t,1),ip(t,1,0))}function yc(t){for(;t===Eo;)Eo=gs[--vs],gs[vs]=null,Mo=gs[--vs],gs[vs]=null;for(;t===Ui;)Ui=Kn[--Zn],Kn[Zn]=null,Nr=Kn[--Zn],Kn[Zn]=null,Ur=Kn[--Zn],Kn[Zn]=null}var Hn=null,Gn=null,jt=!1,ar=null;function sp(t,r){var a=tr(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function ap(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Hn=t,Gn=si(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Hn=t,Gn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Ui!==null?{id:Ur,overflow:Nr}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=tr(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,Hn=t,Gn=null,!0):!1;default:return!1}}function Sc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ec(t){if(jt){var r=Gn;if(r){var a=r;if(!ap(t,r)){if(Sc(t))throw Error(n(418));r=si(a.nextSibling);var c=Hn;r&&ap(t,r)?sp(c,a):(t.flags=t.flags&-4097|2,jt=!1,Hn=t)}}else{if(Sc(t))throw Error(n(418));t.flags=t.flags&-4097|2,jt=!1,Hn=t}}}function op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function wo(t){if(t!==Hn)return!1;if(!jt)return op(t),jt=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!pc(t.type,t.memoizedProps)),r&&(r=Gn)){if(Sc(t))throw lp(),Error(n(418));for(;r;)sp(t,r),r=si(r.nextSibling)}if(op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){Gn=si(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}Gn=null}}else Gn=Hn?si(t.stateNode.nextSibling):null;return!0}function lp(){for(var t=Gn;t;)t=si(t.nextSibling)}function xs(){Gn=Hn=null,jt=!1}function Mc(t){ar===null?ar=[t]:ar.push(t)}var Ig=b.ReactCurrentBatchConfig;function xa(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var d=c,m=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(E){var P=d.refs;E===null?delete P[m]:P[m]=E},r._stringRef=m,r)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Ao(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function cp(t){var r=t._init;return r(t._payload)}function up(t){function r(Z,j){if(t){var te=Z.deletions;te===null?(Z.deletions=[j],Z.flags|=16):te.push(j)}}function a(Z,j){if(!t)return null;for(;j!==null;)r(Z,j),j=j.sibling;return null}function c(Z,j){for(Z=new Map;j!==null;)j.key!==null?Z.set(j.key,j):Z.set(j.index,j),j=j.sibling;return Z}function d(Z,j){return Z=gi(Z,j),Z.index=0,Z.sibling=null,Z}function m(Z,j,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<j?(Z.flags|=2,j):te):(Z.flags|=2,j)):(Z.flags|=1048576,j)}function E(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function P(Z,j,te,Fe){return j===null||j.tag!==6?(j=hu(te,Z.mode,Fe),j.return=Z,j):(j=d(j,te),j.return=Z,j)}function H(Z,j,te,Fe){var Qe=te.type;return Qe===k?Ae(Z,j,te.props.children,Fe,te.key):j!==null&&(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===K&&cp(Qe)===j.type)?(Fe=d(j,te.props),Fe.ref=xa(Z,j,te),Fe.return=Z,Fe):(Fe=$o(te.type,te.key,te.props,null,Z.mode,Fe),Fe.ref=xa(Z,j,te),Fe.return=Z,Fe)}function ae(Z,j,te,Fe){return j===null||j.tag!==4||j.stateNode.containerInfo!==te.containerInfo||j.stateNode.implementation!==te.implementation?(j=mu(te,Z.mode,Fe),j.return=Z,j):(j=d(j,te.children||[]),j.return=Z,j)}function Ae(Z,j,te,Fe,Qe){return j===null||j.tag!==7?(j=Vi(te,Z.mode,Fe,Qe),j.return=Z,j):(j=d(j,te),j.return=Z,j)}function Ce(Z,j,te){if(typeof j=="string"&&j!==""||typeof j=="number")return j=hu(""+j,Z.mode,te),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case W:return te=$o(j.type,j.key,j.props,null,Z.mode,te),te.ref=xa(Z,null,j),te.return=Z,te;case O:return j=mu(j,Z.mode,te),j.return=Z,j;case K:var Fe=j._init;return Ce(Z,Fe(j._payload),te)}if($e(j)||fe(j))return j=Vi(j,Z.mode,te,null),j.return=Z,j;Ao(Z,j)}return null}function we(Z,j,te,Fe){var Qe=j!==null?j.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Qe!==null?null:P(Z,j,""+te,Fe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case W:return te.key===Qe?H(Z,j,te,Fe):null;case O:return te.key===Qe?ae(Z,j,te,Fe):null;case K:return Qe=te._init,we(Z,j,Qe(te._payload),Fe)}if($e(te)||fe(te))return Qe!==null?null:Ae(Z,j,te,Fe,null);Ao(Z,te)}return null}function He(Z,j,te,Fe,Qe){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return Z=Z.get(te)||null,P(j,Z,""+Fe,Qe);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case W:return Z=Z.get(Fe.key===null?te:Fe.key)||null,H(j,Z,Fe,Qe);case O:return Z=Z.get(Fe.key===null?te:Fe.key)||null,ae(j,Z,Fe,Qe);case K:var ct=Fe._init;return He(Z,j,te,ct(Fe._payload),Qe)}if($e(Fe)||fe(Fe))return Z=Z.get(te)||null,Ae(j,Z,Fe,Qe,null);Ao(j,Fe)}return null}function qe(Z,j,te,Fe){for(var Qe=null,ct=null,ut=j,ht=j=0,fn=null;ut!==null&&ht<te.length;ht++){ut.index>ht?(fn=ut,ut=null):fn=ut.sibling;var Pt=we(Z,ut,te[ht],Fe);if(Pt===null){ut===null&&(ut=fn);break}t&&ut&&Pt.alternate===null&&r(Z,ut),j=m(Pt,j,ht),ct===null?Qe=Pt:ct.sibling=Pt,ct=Pt,ut=fn}if(ht===te.length)return a(Z,ut),jt&&Ni(Z,ht),Qe;if(ut===null){for(;ht<te.length;ht++)ut=Ce(Z,te[ht],Fe),ut!==null&&(j=m(ut,j,ht),ct===null?Qe=ut:ct.sibling=ut,ct=ut);return jt&&Ni(Z,ht),Qe}for(ut=c(Z,ut);ht<te.length;ht++)fn=He(ut,Z,ht,te[ht],Fe),fn!==null&&(t&&fn.alternate!==null&&ut.delete(fn.key===null?ht:fn.key),j=m(fn,j,ht),ct===null?Qe=fn:ct.sibling=fn,ct=fn);return t&&ut.forEach(function(vi){return r(Z,vi)}),jt&&Ni(Z,ht),Qe}function Je(Z,j,te,Fe){var Qe=fe(te);if(typeof Qe!="function")throw Error(n(150));if(te=Qe.call(te),te==null)throw Error(n(151));for(var ct=Qe=null,ut=j,ht=j=0,fn=null,Pt=te.next();ut!==null&&!Pt.done;ht++,Pt=te.next()){ut.index>ht?(fn=ut,ut=null):fn=ut.sibling;var vi=we(Z,ut,Pt.value,Fe);if(vi===null){ut===null&&(ut=fn);break}t&&ut&&vi.alternate===null&&r(Z,ut),j=m(vi,j,ht),ct===null?Qe=vi:ct.sibling=vi,ct=vi,ut=fn}if(Pt.done)return a(Z,ut),jt&&Ni(Z,ht),Qe;if(ut===null){for(;!Pt.done;ht++,Pt=te.next())Pt=Ce(Z,Pt.value,Fe),Pt!==null&&(j=m(Pt,j,ht),ct===null?Qe=Pt:ct.sibling=Pt,ct=Pt);return jt&&Ni(Z,ht),Qe}for(ut=c(Z,ut);!Pt.done;ht++,Pt=te.next())Pt=He(ut,Z,ht,Pt.value,Fe),Pt!==null&&(t&&Pt.alternate!==null&&ut.delete(Pt.key===null?ht:Pt.key),j=m(Pt,j,ht),ct===null?Qe=Pt:ct.sibling=Pt,ct=Pt);return t&&ut.forEach(function(m0){return r(Z,m0)}),jt&&Ni(Z,ht),Qe}function Jt(Z,j,te,Fe){if(typeof te=="object"&&te!==null&&te.type===k&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case W:e:{for(var Qe=te.key,ct=j;ct!==null;){if(ct.key===Qe){if(Qe=te.type,Qe===k){if(ct.tag===7){a(Z,ct.sibling),j=d(ct,te.props.children),j.return=Z,Z=j;break e}}else if(ct.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===K&&cp(Qe)===ct.type){a(Z,ct.sibling),j=d(ct,te.props),j.ref=xa(Z,ct,te),j.return=Z,Z=j;break e}a(Z,ct);break}else r(Z,ct);ct=ct.sibling}te.type===k?(j=Vi(te.props.children,Z.mode,Fe,te.key),j.return=Z,Z=j):(Fe=$o(te.type,te.key,te.props,null,Z.mode,Fe),Fe.ref=xa(Z,j,te),Fe.return=Z,Z=Fe)}return E(Z);case O:e:{for(ct=te.key;j!==null;){if(j.key===ct)if(j.tag===4&&j.stateNode.containerInfo===te.containerInfo&&j.stateNode.implementation===te.implementation){a(Z,j.sibling),j=d(j,te.children||[]),j.return=Z,Z=j;break e}else{a(Z,j);break}else r(Z,j);j=j.sibling}j=mu(te,Z.mode,Fe),j.return=Z,Z=j}return E(Z);case K:return ct=te._init,Jt(Z,j,ct(te._payload),Fe)}if($e(te))return qe(Z,j,te,Fe);if(fe(te))return Je(Z,j,te,Fe);Ao(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,j!==null&&j.tag===6?(a(Z,j.sibling),j=d(j,te),j.return=Z,Z=j):(a(Z,j),j=hu(te,Z.mode,Fe),j.return=Z,Z=j),E(Z)):a(Z,j)}return Jt}var _s=up(!0),dp=up(!1),To=ai(null),Co=null,ys=null,wc=null;function Ac(){wc=ys=Co=null}function Tc(t){var r=To.current;Vt(To),t._currentValue=r}function Cc(t,r,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===a)break;t=t.return}}function Ss(t,r){Co=t,wc=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Ln=!0),t.firstContext=null)}function Jn(t){var r=t._currentValue;if(wc!==t)if(t={context:t,memoizedValue:r,next:null},ys===null){if(Co===null)throw Error(n(308));ys=t,Co.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return r}var Ii=null;function bc(t){Ii===null?Ii=[t]:Ii.push(t)}function fp(t,r,a,c){var d=r.interleaved;return d===null?(a.next=a,bc(r)):(a.next=d.next,d.next=a),r.interleaved=a,Ir(t,c)}function Ir(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ci=!1;function Fc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ui(t,r,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Ft&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Ir(t,a)}return d=c.interleaved,d===null?(r.next=r,bc(c)):(r.next=d.next,d.next=r),c.interleaved=r,Ir(t,a)}function bo(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,cn(t,a)}}function hp(t,r){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?d=m=r:m=m.next=r}else d=m=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function Fo(t,r,a,c){var d=t.updateQueue;ci=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,P=d.shared.pending;if(P!==null){d.shared.pending=null;var H=P,ae=H.next;H.next=null,E===null?m=ae:E.next=ae,E=H;var Ae=t.alternate;Ae!==null&&(Ae=Ae.updateQueue,P=Ae.lastBaseUpdate,P!==E&&(P===null?Ae.firstBaseUpdate=ae:P.next=ae,Ae.lastBaseUpdate=H))}if(m!==null){var Ce=d.baseState;E=0,Ae=ae=H=null,P=m;do{var we=P.lane,He=P.eventTime;if((c&we)===we){Ae!==null&&(Ae=Ae.next={eventTime:He,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var qe=t,Je=P;switch(we=r,He=a,Je.tag){case 1:if(qe=Je.payload,typeof qe=="function"){Ce=qe.call(He,Ce,we);break e}Ce=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Je.payload,we=typeof qe=="function"?qe.call(He,Ce,we):qe,we==null)break e;Ce=ie({},Ce,we);break e;case 2:ci=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,we=d.effects,we===null?d.effects=[P]:we.push(P))}else He={eventTime:He,lane:we,tag:P.tag,payload:P.payload,callback:P.callback,next:null},Ae===null?(ae=Ae=He,H=Ce):Ae=Ae.next=He,E|=we;if(P=P.next,P===null){if(P=d.shared.pending,P===null)break;we=P,P=we.next,we.next=null,d.lastBaseUpdate=we,d.shared.pending=null}}while(!0);if(Ae===null&&(H=Ce),d.baseState=H,d.firstBaseUpdate=ae,d.lastBaseUpdate=Ae,r=d.shared.interleaved,r!==null){d=r;do E|=d.lane,d=d.next;while(d!==r)}else m===null&&(d.shared.lanes=0);Bi|=E,t.lanes=E,t.memoizedState=Ce}}function mp(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var _a={},Er=ai(_a),ya=ai(_a),Sa=ai(_a);function ki(t){if(t===_a)throw Error(n(174));return t}function Dc(t,r){switch(Ht(Sa,r),Ht(ya,t),Ht(Er,_a),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:_e(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=_e(r,t)}Vt(Er),Ht(Er,r)}function Es(){Vt(Er),Vt(ya),Vt(Sa)}function gp(t){ki(Sa.current);var r=ki(Er.current),a=_e(r,t.type);r!==a&&(Ht(ya,t),Ht(Er,a))}function Rc(t){ya.current===t&&(Vt(Er),Vt(ya))}var Yt=ai(0);function Do(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Pc=[];function Lc(){for(var t=0;t<Pc.length;t++)Pc[t]._workInProgressVersionPrimary=null;Pc.length=0}var Ro=b.ReactCurrentDispatcher,Uc=b.ReactCurrentBatchConfig,Oi=0,qt=null,nn=null,un=null,Po=!1,Ea=!1,Ma=0,kg=0;function Sn(){throw Error(n(321))}function Nc(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!sr(t[a],r[a]))return!1;return!0}function Ic(t,r,a,c,d,m){if(Oi=m,qt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ro.current=t===null||t.memoizedState===null?Hg:Gg,t=a(c,d),Ea){m=0;do{if(Ea=!1,Ma=0,25<=m)throw Error(n(301));m+=1,un=nn=null,r.updateQueue=null,Ro.current=Vg,t=a(c,d)}while(Ea)}if(Ro.current=No,r=nn!==null&&nn.next!==null,Oi=0,un=nn=qt=null,Po=!1,r)throw Error(n(300));return t}function kc(){var t=Ma!==0;return Ma=0,t}function Mr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?qt.memoizedState=un=t:un=un.next=t,un}function Qn(){if(nn===null){var t=qt.alternate;t=t!==null?t.memoizedState:null}else t=nn.next;var r=un===null?qt.memoizedState:un.next;if(r!==null)un=r,nn=t;else{if(t===null)throw Error(n(310));nn=t,t={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},un===null?qt.memoizedState=un=t:un=un.next=t}return un}function wa(t,r){return typeof r=="function"?r(t):r}function Oc(t){var r=Qn(),a=r.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=nn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var P=E=null,H=null,ae=m;do{var Ae=ae.lane;if((Oi&Ae)===Ae)H!==null&&(H=H.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),c=ae.hasEagerState?ae.eagerState:t(c,ae.action);else{var Ce={lane:Ae,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};H===null?(P=H=Ce,E=c):H=H.next=Ce,qt.lanes|=Ae,Bi|=Ae}ae=ae.next}while(ae!==null&&ae!==m);H===null?E=c:H.next=P,sr(c,r.memoizedState)||(Ln=!0),r.memoizedState=c,r.baseState=E,r.baseQueue=H,a.lastRenderedState=c}if(t=a.interleaved,t!==null){d=t;do m=d.lane,qt.lanes|=m,Bi|=m,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Bc(t){var r=Qn(),a=r.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,d=a.pending,m=r.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do m=t(m,E.action),E=E.next;while(E!==d);sr(m,r.memoizedState)||(Ln=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,c]}function vp(){}function xp(t,r){var a=qt,c=Qn(),d=r(),m=!sr(c.memoizedState,d);if(m&&(c.memoizedState=d,Ln=!0),c=c.queue,zc(Sp.bind(null,a,c,t),[t]),c.getSnapshot!==r||m||un!==null&&un.memoizedState.tag&1){if(a.flags|=2048,Aa(9,yp.bind(null,a,c,d,r),void 0,null),dn===null)throw Error(n(349));(Oi&30)!==0||_p(a,r,d)}return d}function _p(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function yp(t,r,a,c){r.value=a,r.getSnapshot=c,Ep(r)&&Mp(t)}function Sp(t,r,a){return a(function(){Ep(r)&&Mp(t)})}function Ep(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!sr(t,a)}catch{return!0}}function Mp(t){var r=Ir(t,1);r!==null&&ur(r,t,1,-1)}function wp(t){var r=Mr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},r.queue=t,t=t.dispatch=zg.bind(null,qt,t),[r.memoizedState,t]}function Aa(t,r,a,c){return t={tag:t,create:r,destroy:a,deps:c,next:null},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,r.lastEffect=t)),t}function Ap(){return Qn().memoizedState}function Lo(t,r,a,c){var d=Mr();qt.flags|=t,d.memoizedState=Aa(1|r,a,void 0,c===void 0?null:c)}function Uo(t,r,a,c){var d=Qn();c=c===void 0?null:c;var m=void 0;if(nn!==null){var E=nn.memoizedState;if(m=E.destroy,c!==null&&Nc(c,E.deps)){d.memoizedState=Aa(r,a,m,c);return}}qt.flags|=t,d.memoizedState=Aa(1|r,a,m,c)}function Tp(t,r){return Lo(8390656,8,t,r)}function zc(t,r){return Uo(2048,8,t,r)}function Cp(t,r){return Uo(4,2,t,r)}function bp(t,r){return Uo(4,4,t,r)}function Fp(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Dp(t,r,a){return a=a!=null?a.concat([t]):null,Uo(4,4,Fp.bind(null,r,t),a)}function Hc(){}function Rp(t,r){var a=Qn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Nc(r,c[1])?c[0]:(a.memoizedState=[t,r],t)}function Pp(t,r){var a=Qn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Nc(r,c[1])?c[0]:(t=t(),a.memoizedState=[t,r],t)}function Lp(t,r,a){return(Oi&21)===0?(t.baseState&&(t.baseState=!1,Ln=!0),t.memoizedState=a):(sr(a,r)||(a=zt(),qt.lanes|=a,Bi|=a,t.baseState=!0),r)}function Og(t,r){var a=bt;bt=a!==0&&4>a?a:4,t(!0);var c=Uc.transition;Uc.transition={};try{t(!1),r()}finally{bt=a,Uc.transition=c}}function Up(){return Qn().memoizedState}function Bg(t,r,a){var c=hi(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Np(t))Ip(r,a);else if(a=fp(t,r,a,c),a!==null){var d=Fn();ur(a,t,c,d),kp(a,r,c)}}function zg(t,r,a){var c=hi(t),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Np(t))Ip(r,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,P=m(E,a);if(d.hasEagerState=!0,d.eagerState=P,sr(P,E)){var H=r.interleaved;H===null?(d.next=d,bc(r)):(d.next=H.next,H.next=d),r.interleaved=d;return}}catch{}finally{}a=fp(t,r,d,c),a!==null&&(d=Fn(),ur(a,t,c,d),kp(a,r,c))}}function Np(t){var r=t.alternate;return t===qt||r!==null&&r===qt}function Ip(t,r){Ea=Po=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function kp(t,r,a){if((a&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,cn(t,a)}}var No={readContext:Jn,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},Hg={readContext:Jn,useCallback:function(t,r){return Mr().memoizedState=[t,r===void 0?null:r],t},useContext:Jn,useEffect:Tp,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Lo(4194308,4,Fp.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Lo(4194308,4,t,r)},useInsertionEffect:function(t,r){return Lo(4,2,t,r)},useMemo:function(t,r){var a=Mr();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var c=Mr();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=Bg.bind(null,qt,t),[c.memoizedState,t]},useRef:function(t){var r=Mr();return t={current:t},r.memoizedState=t},useState:wp,useDebugValue:Hc,useDeferredValue:function(t){return Mr().memoizedState=t},useTransition:function(){var t=wp(!1),r=t[0];return t=Og.bind(null,t[1]),Mr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var c=qt,d=Mr();if(jt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=r(),dn===null)throw Error(n(349));(Oi&30)!==0||_p(c,r,a)}d.memoizedState=a;var m={value:a,getSnapshot:r};return d.queue=m,Tp(Sp.bind(null,c,m,t),[t]),c.flags|=2048,Aa(9,yp.bind(null,c,m,a,r),void 0,null),a},useId:function(){var t=Mr(),r=dn.identifierPrefix;if(jt){var a=Nr,c=Ur;a=(c&~(1<<32-xt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Ma++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=kg++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Gg={readContext:Jn,useCallback:Rp,useContext:Jn,useEffect:zc,useImperativeHandle:Dp,useInsertionEffect:Cp,useLayoutEffect:bp,useMemo:Pp,useReducer:Oc,useRef:Ap,useState:function(){return Oc(wa)},useDebugValue:Hc,useDeferredValue:function(t){var r=Qn();return Lp(r,nn.memoizedState,t)},useTransition:function(){var t=Oc(wa)[0],r=Qn().memoizedState;return[t,r]},useMutableSource:vp,useSyncExternalStore:xp,useId:Up,unstable_isNewReconciler:!1},Vg={readContext:Jn,useCallback:Rp,useContext:Jn,useEffect:zc,useImperativeHandle:Dp,useInsertionEffect:Cp,useLayoutEffect:bp,useMemo:Pp,useReducer:Bc,useRef:Ap,useState:function(){return Bc(wa)},useDebugValue:Hc,useDeferredValue:function(t){var r=Qn();return nn===null?r.memoizedState=t:Lp(r,nn.memoizedState,t)},useTransition:function(){var t=Bc(wa)[0],r=Qn().memoizedState;return[t,r]},useMutableSource:vp,useSyncExternalStore:xp,useId:Up,unstable_isNewReconciler:!1};function or(t,r){if(t&&t.defaultProps){r=ie({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function Gc(t,r,a,c){r=t.memoizedState,a=a(c,r),a=a==null?r:ie({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Io={isMounted:function(t){return(t=t._reactInternals)?_r(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var c=Fn(),d=hi(t),m=kr(c,d);m.payload=r,a!=null&&(m.callback=a),r=ui(t,m,d),r!==null&&(ur(r,t,d,c),bo(r,t,d))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var c=Fn(),d=hi(t),m=kr(c,d);m.tag=1,m.payload=r,a!=null&&(m.callback=a),r=ui(t,m,d),r!==null&&(ur(r,t,d,c),bo(r,t,d))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Fn(),c=hi(t),d=kr(a,c);d.tag=2,r!=null&&(d.callback=r),r=ui(t,d,c),r!==null&&(ur(r,t,c,a),bo(r,t,c))}};function Op(t,r,a,c,d,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,E):r.prototype&&r.prototype.isPureReactComponent?!da(a,c)||!da(d,m):!0}function Bp(t,r,a){var c=!1,d=oi,m=r.contextType;return typeof m=="object"&&m!==null?m=Jn(m):(d=Pn(r)?Li:yn.current,c=r.contextTypes,m=(c=c!=null)?ms(t,d):oi),r=new r(a,m),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Io,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=m),r}function zp(t,r,a,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==t&&Io.enqueueReplaceState(r,r.state,null)}function Vc(t,r,a,c){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Fc(t);var m=r.contextType;typeof m=="object"&&m!==null?d.context=Jn(m):(m=Pn(r)?Li:yn.current,d.context=ms(t,m)),d.state=t.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(Gc(t,r,m,a),d.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Io.enqueueReplaceState(d,d.state,null),Fo(t,a,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,r){try{var a="",c=r;do a+=ue(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:r,stack:d,digest:null}}function Wc(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function jc(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Wg=typeof WeakMap=="function"?WeakMap:Map;function Hp(t,r,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Vo||(Vo=!0,au=c),jc(t,r)},a}function Gp(t,r,a){a=kr(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){jc(t,r)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){jc(t,r),typeof c!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),a}function Vp(t,r,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Wg;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),t=i0.bind(null,t,r,a),r.then(t,t))}function Wp(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function jp(t,r,a,c,d){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=kr(-1,1),r.tag=2,ui(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var jg=b.ReactCurrentOwner,Ln=!1;function bn(t,r,a,c){r.child=t===null?dp(r,null,a,c):_s(r,t.child,a,c)}function Xp(t,r,a,c,d){a=a.render;var m=r.ref;return Ss(r,d),c=Ic(t,r,a,c,m,d),a=kc(),t!==null&&!Ln?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~d,Or(t,r,d)):(jt&&a&&_c(r),r.flags|=1,bn(t,r,c,d),r.child)}function Yp(t,r,a,c,d){if(t===null){var m=a.type;return typeof m=="function"&&!pu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=m,qp(t,r,m,c,d)):(t=$o(a.type,null,c,r,r.mode,d),t.ref=r.ref,t.return=r,r.child=t)}if(m=t.child,(t.lanes&d)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(E,c)&&t.ref===r.ref)return Or(t,r,d)}return r.flags|=1,t=gi(m,c),t.ref=r.ref,t.return=r,r.child=t}function qp(t,r,a,c,d){if(t!==null){var m=t.memoizedProps;if(da(m,c)&&t.ref===r.ref)if(Ln=!1,r.pendingProps=c=m,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Ln=!0);else return r.lanes=t.lanes,Or(t,r,d)}return Xc(t,r,a,c,d)}function $p(t,r,a){var c=r.pendingProps,d=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(As,Vn),Vn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Ht(As,Vn),Vn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ht(As,Vn),Vn|=c}else m!==null?(c=m.baseLanes|a,r.memoizedState=null):c=a,Ht(As,Vn),Vn|=c;return bn(t,r,d,a),r.child}function Kp(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Xc(t,r,a,c,d){var m=Pn(a)?Li:yn.current;return m=ms(r,m),Ss(r,d),a=Ic(t,r,a,c,m,d),c=kc(),t!==null&&!Ln?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~d,Or(t,r,d)):(jt&&c&&_c(r),r.flags|=1,bn(t,r,a,d),r.child)}function Zp(t,r,a,c,d){if(Pn(a)){var m=!0;yo(r)}else m=!1;if(Ss(r,d),r.stateNode===null)Oo(t,r),Bp(r,a,c),Vc(r,a,c,d),c=!0;else if(t===null){var E=r.stateNode,P=r.memoizedProps;E.props=P;var H=E.context,ae=a.contextType;typeof ae=="object"&&ae!==null?ae=Jn(ae):(ae=Pn(a)?Li:yn.current,ae=ms(r,ae));var Ae=a.getDerivedStateFromProps,Ce=typeof Ae=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ce||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(P!==c||H!==ae)&&zp(r,E,c,ae),ci=!1;var we=r.memoizedState;E.state=we,Fo(r,c,E,d),H=r.memoizedState,P!==c||we!==H||Rn.current||ci?(typeof Ae=="function"&&(Gc(r,a,Ae,c),H=r.memoizedState),(P=ci||Op(r,a,P,c,we,H,ae))?(Ce||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=H),E.props=c,E.state=H,E.context=ae,c=P):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{E=r.stateNode,pp(t,r),P=r.memoizedProps,ae=r.type===r.elementType?P:or(r.type,P),E.props=ae,Ce=r.pendingProps,we=E.context,H=a.contextType,typeof H=="object"&&H!==null?H=Jn(H):(H=Pn(a)?Li:yn.current,H=ms(r,H));var He=a.getDerivedStateFromProps;(Ae=typeof He=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(P!==Ce||we!==H)&&zp(r,E,c,H),ci=!1,we=r.memoizedState,E.state=we,Fo(r,c,E,d);var qe=r.memoizedState;P!==Ce||we!==qe||Rn.current||ci?(typeof He=="function"&&(Gc(r,a,He,c),qe=r.memoizedState),(ae=ci||Op(r,a,ae,c,we,qe,H)||!1)?(Ae||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,qe,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,qe,H)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||P===t.memoizedProps&&we===t.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&we===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=qe),E.props=c,E.state=qe,E.context=H,c=ae):(typeof E.componentDidUpdate!="function"||P===t.memoizedProps&&we===t.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&we===t.memoizedState||(r.flags|=1024),c=!1)}return Yc(t,r,a,c,m,d)}function Yc(t,r,a,c,d,m){Kp(t,r);var E=(r.flags&128)!==0;if(!c&&!E)return d&&np(r,a,!1),Or(t,r,m);c=r.stateNode,jg.current=r;var P=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&E?(r.child=_s(r,t.child,null,m),r.child=_s(r,null,P,m)):bn(t,r,P,m),r.memoizedState=c.state,d&&np(r,a,!0),r.child}function Jp(t){var r=t.stateNode;r.pendingContext?ep(t,r.pendingContext,r.pendingContext!==r.context):r.context&&ep(t,r.context,!1),Dc(t,r.containerInfo)}function Qp(t,r,a,c,d){return xs(),Mc(d),r.flags|=256,bn(t,r,a,c),r.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function $c(t){return{baseLanes:t,cachePool:null,transitions:null}}function eh(t,r,a){var c=r.pendingProps,d=Yt.current,m=!1,E=(r.flags&128)!==0,P;if((P=E)||(P=t!==null&&t.memoizedState===null?!1:(d&2)!==0),P?(m=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ht(Yt,d&1),t===null)return Ec(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(E=c.children,t=c.fallback,m?(c=r.mode,m=r.child,E={mode:"hidden",children:E},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=Ko(E,c,0,null),t=Vi(t,c,a,null),m.return=r,t.return=r,m.sibling=t,r.child=m,r.child.memoizedState=$c(a),r.memoizedState=qc,t):Kc(r,E));if(d=t.memoizedState,d!==null&&(P=d.dehydrated,P!==null))return Xg(t,r,E,c,P,d,a);if(m){m=c.fallback,E=r.mode,d=t.child,P=d.sibling;var H={mode:"hidden",children:c.children};return(E&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=H,r.deletions=null):(c=gi(d,H),c.subtreeFlags=d.subtreeFlags&14680064),P!==null?m=gi(P,m):(m=Vi(m,E,a,null),m.flags|=2),m.return=r,c.return=r,c.sibling=m,r.child=c,c=m,m=r.child,E=t.child.memoizedState,E=E===null?$c(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=t.childLanes&~a,r.memoizedState=qc,c}return m=t.child,t=m.sibling,c=gi(m,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=c,r.memoizedState=null,c}function Kc(t,r){return r=Ko({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function ko(t,r,a,c){return c!==null&&Mc(c),_s(r,t.child,null,a),t=Kc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Xg(t,r,a,c,d,m,E){if(a)return r.flags&256?(r.flags&=-257,c=Wc(Error(n(422))),ko(t,r,E,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(m=c.fallback,d=r.mode,c=Ko({mode:"visible",children:c.children},d,0,null),m=Vi(m,d,E,null),m.flags|=2,c.return=r,m.return=r,c.sibling=m,r.child=c,(r.mode&1)!==0&&_s(r,t.child,null,E),r.child.memoizedState=$c(E),r.memoizedState=qc,m);if((r.mode&1)===0)return ko(t,r,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var P=c.dgst;return c=P,m=Error(n(419)),c=Wc(m,c,void 0),ko(t,r,E,c)}if(P=(E&t.childLanes)!==0,Ln||P){if(c=dn,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ir(t,d),ur(c,t,d,-1))}return fu(),c=Wc(Error(n(421))),ko(t,r,E,c)}return d.data==="$?"?(r.flags|=128,r.child=t.child,r=s0.bind(null,t),d._reactRetry=r,null):(t=m.treeContext,Gn=si(d.nextSibling),Hn=r,jt=!0,ar=null,t!==null&&(Kn[Zn++]=Ur,Kn[Zn++]=Nr,Kn[Zn++]=Ui,Ur=t.id,Nr=t.overflow,Ui=r),r=Kc(r,c.children),r.flags|=4096,r)}function th(t,r,a){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),Cc(t.return,r,a)}function Zc(t,r,a,c,d){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function nh(t,r,a){var c=r.pendingProps,d=c.revealOrder,m=c.tail;if(bn(t,r,c.children,a),c=Yt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&th(t,a,r);else if(t.tag===19)th(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ht(Yt,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)t=a.alternate,t!==null&&Do(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Zc(r,!1,d,a,m);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(t=d.alternate,t!==null&&Do(t)===null){r.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}Zc(r,!0,a,null,m);break;case"together":Zc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Oo(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Or(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),Bi|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,a=gi(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=gi(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Yg(t,r,a){switch(r.tag){case 3:Jp(r),xs();break;case 5:gp(r);break;case 1:Pn(r.type)&&yo(r);break;case 4:Dc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;Ht(To,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ht(Yt,Yt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?eh(t,r,a):(Ht(Yt,Yt.current&1),t=Or(t,r,a),t!==null?t.sibling:null);Ht(Yt,Yt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(t.flags&128)!==0){if(c)return nh(t,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ht(Yt,Yt.current),c)break;return null;case 22:case 23:return r.lanes=0,$p(t,r,a)}return Or(t,r,a)}var rh,Jc,ih,sh;rh=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Jc=function(){},ih=function(t,r,a,c){var d=t.memoizedProps;if(d!==c){t=r.stateNode,ki(Er.current);var m=null;switch(a){case"input":d=L(t,d),c=L(t,c),m=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),m=[];break;case"textarea":d=vt(t,d),c=vt(t,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=vo)}nt(a,c);var E;a=null;for(ae in d)if(!c.hasOwnProperty(ae)&&d.hasOwnProperty(ae)&&d[ae]!=null)if(ae==="style"){var P=d[ae];for(E in P)P.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?m||(m=[]):(m=m||[]).push(ae,null));for(ae in c){var H=c[ae];if(P=d!=null?d[ae]:void 0,c.hasOwnProperty(ae)&&H!==P&&(H!=null||P!=null))if(ae==="style")if(P){for(E in P)!P.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in H)H.hasOwnProperty(E)&&P[E]!==H[E]&&(a||(a={}),a[E]=H[E])}else a||(m||(m=[]),m.push(ae,a)),a=H;else ae==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,P=P?P.__html:void 0,H!=null&&P!==H&&(m=m||[]).push(ae,H)):ae==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(ae,""+H):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(H!=null&&ae==="onScroll"&&Gt("scroll",t),m||P===H||(m=[])):(m=m||[]).push(ae,H))}a&&(m=m||[]).push("style",a);var ae=m;(r.updateQueue=ae)&&(r.flags|=4)}},sh=function(t,r,a,c){a!==c&&(r.flags|=4)};function Ta(t,r){if(!jt)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function En(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(r)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=a,r}function qg(t,r,a){var c=r.pendingProps;switch(yc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(r),null;case 1:return Pn(r.type)&&_o(),En(r),null;case 3:return c=r.stateNode,Es(),Vt(Rn),Vt(yn),Lc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(wo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ar!==null&&(cu(ar),ar=null))),Jc(t,r),En(r),null;case 5:Rc(r);var d=ki(Sa.current);if(a=r.type,t!==null&&r.stateNode!=null)ih(t,r,a,c,d),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(n(166));return En(r),null}if(t=ki(Er.current),wo(r)){c=r.stateNode,a=r.type;var m=r.memoizedProps;switch(c[Sr]=r,c[ga]=m,t=(r.mode&1)!==0,a){case"dialog":Gt("cancel",c),Gt("close",c);break;case"iframe":case"object":case"embed":Gt("load",c);break;case"video":case"audio":for(d=0;d<pa.length;d++)Gt(pa[d],c);break;case"source":Gt("error",c);break;case"img":case"image":case"link":Gt("error",c),Gt("load",c);break;case"details":Gt("toggle",c);break;case"input":At(c,m),Gt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Gt("invalid",c);break;case"textarea":D(c,m),Gt("invalid",c)}nt(a,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var P=m[E];E==="children"?typeof P=="string"?c.textContent!==P&&(m.suppressHydrationWarning!==!0&&go(c.textContent,P,t),d=["children",P]):typeof P=="number"&&c.textContent!==""+P&&(m.suppressHydrationWarning!==!0&&go(c.textContent,P,t),d=["children",""+P]):o.hasOwnProperty(E)&&P!=null&&E==="onScroll"&&Gt("scroll",c)}switch(a){case"input":Ne(c),Be(c,m,!0);break;case"textarea":Ne(c),ee(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=vo)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=me(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(a,{is:c.is}):(t=E.createElement(a),a==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,a),t[Sr]=r,t[ga]=c,rh(t,r,!1,!1),r.stateNode=t;e:{switch(E=Le(a,c),a){case"dialog":Gt("cancel",t),Gt("close",t),d=c;break;case"iframe":case"object":case"embed":Gt("load",t),d=c;break;case"video":case"audio":for(d=0;d<pa.length;d++)Gt(pa[d],t);d=c;break;case"source":Gt("error",t),d=c;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),d=c;break;case"details":Gt("toggle",t),d=c;break;case"input":At(t,c),d=L(t,c),Gt("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Gt("invalid",t);break;case"textarea":D(t,c),d=vt(t,c),Gt("invalid",t);break;default:d=c}nt(a,d),P=d;for(m in P)if(P.hasOwnProperty(m)){var H=P[m];m==="style"?ze(t,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ke(t,H)):m==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&De(t,H):typeof H=="number"&&De(t,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?H!=null&&m==="onScroll"&&Gt("scroll",t):H!=null&&R(t,m,H,E))}switch(a){case"input":Ne(t),Be(t,c,!1);break;case"textarea":Ne(t),ee(t);break;case"option":c.value!=null&&t.setAttribute("value",""+ve(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?at(t,!!c.multiple,m,!1):c.defaultValue!=null&&at(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=vo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return En(r),null;case 6:if(t&&r.stateNode!=null)sh(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(n(166));if(a=ki(Sa.current),ki(Er.current),wo(r)){if(c=r.stateNode,a=r.memoizedProps,c[Sr]=r,(m=c.nodeValue!==a)&&(t=Hn,t!==null))switch(t.tag){case 3:go(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(c.nodeValue,a,(t.mode&1)!==0)}m&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Sr]=r,r.stateNode=c}return En(r),null;case 13:if(Vt(Yt),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(jt&&Gn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)lp(),xs(),r.flags|=98560,m=!1;else if(m=wo(r),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[Sr]=r}else xs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;En(r),m=!1}else ar!==null&&(cu(ar),ar=null),m=!0;if(!m)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Yt.current&1)!==0?rn===0&&(rn=3):fu())),r.updateQueue!==null&&(r.flags|=4),En(r),null);case 4:return Es(),Jc(t,r),t===null&&ha(r.stateNode.containerInfo),En(r),null;case 10:return Tc(r.type._context),En(r),null;case 17:return Pn(r.type)&&_o(),En(r),null;case 19:if(Vt(Yt),m=r.memoizedState,m===null)return En(r),null;if(c=(r.flags&128)!==0,E=m.rendering,E===null)if(c)Ta(m,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(E=Do(t),E!==null){for(r.flags|=128,Ta(m,!1),c=E.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)m=a,t=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,t=E.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ht(Yt,Yt.current&1|2),r.child}t=t.sibling}m.tail!==null&&Q()>Ts&&(r.flags|=128,c=!0,Ta(m,!1),r.lanes=4194304)}else{if(!c)if(t=Do(E),t!==null){if(r.flags|=128,c=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Ta(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!jt)return En(r),null}else 2*Q()-m.renderingStartTime>Ts&&a!==1073741824&&(r.flags|=128,c=!0,Ta(m,!1),r.lanes=4194304);m.isBackwards?(E.sibling=r.child,r.child=E):(a=m.last,a!==null?a.sibling=E:r.child=E,m.last=E)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=Q(),r.sibling=null,a=Yt.current,Ht(Yt,c?a&1|2:a&1),r):(En(r),null);case 22:case 23:return du(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(Vn&1073741824)!==0&&(En(r),r.subtreeFlags&6&&(r.flags|=8192)):En(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function $g(t,r){switch(yc(r),r.tag){case 1:return Pn(r.type)&&_o(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Es(),Vt(Rn),Vt(yn),Lc(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Rc(r),null;case 13:if(Vt(Yt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));xs()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Vt(Yt),null;case 4:return Es(),null;case 10:return Tc(r.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var Bo=!1,Mn=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,je=null;function ws(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){$t(t,r,c)}else a.current=null}function Qc(t,r,a){try{a()}catch(c){$t(t,r,c)}}var ah=!1;function Zg(t,r){if(dc=io,t=Of(),rc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,P=-1,H=-1,ae=0,Ae=0,Ce=t,we=null;t:for(;;){for(var He;Ce!==a||d!==0&&Ce.nodeType!==3||(P=E+d),Ce!==m||c!==0&&Ce.nodeType!==3||(H=E+c),Ce.nodeType===3&&(E+=Ce.nodeValue.length),(He=Ce.firstChild)!==null;)we=Ce,Ce=He;for(;;){if(Ce===t)break t;if(we===a&&++ae===d&&(P=E),we===m&&++Ae===c&&(H=E),(He=Ce.nextSibling)!==null)break;Ce=we,we=Ce.parentNode}Ce=He}a=P===-1||H===-1?null:{start:P,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(fc={focusedElem:t,selectionRange:a},io=!1,je=r;je!==null;)if(r=je,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,je=t;else for(;je!==null;){r=je;try{var qe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Je=qe.memoizedProps,Jt=qe.memoizedState,Z=r.stateNode,j=Z.getSnapshotBeforeUpdate(r.elementType===r.type?Je:or(r.type,Je),Jt);Z.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var te=r.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Fe){$t(r,r.return,Fe)}if(t=r.sibling,t!==null){t.return=r.return,je=t;break}je=r.return}return qe=ah,ah=!1,qe}function Ca(t,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var m=d.destroy;d.destroy=void 0,m!==void 0&&Qc(r,a,m)}d=d.next}while(d!==c)}}function zo(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function eu(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function oh(t){var r=t.alternate;r!==null&&(t.alternate=null,oh(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Sr],delete r[ga],delete r[gc],delete r[Lg],delete r[Ug])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lh(t){return t.tag===5||t.tag===3||t.tag===4}function ch(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tu(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=vo));else if(c!==4&&(t=t.child,t!==null))for(tu(t,r,a),t=t.sibling;t!==null;)tu(t,r,a),t=t.sibling}function nu(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(nu(t,r,a),t=t.sibling;t!==null;)nu(t,r,a),t=t.sibling}var mn=null,lr=!1;function di(t,r,a){for(a=a.child;a!==null;)uh(t,r,a),a=a.sibling}function uh(t,r,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 5:Mn||ws(a,r);case 6:var c=mn,d=lr;mn=null,di(t,r,a),mn=c,lr=d,mn!==null&&(lr?(t=mn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):mn.removeChild(a.stateNode));break;case 18:mn!==null&&(lr?(t=mn,a=a.stateNode,t.nodeType===8?mc(t.parentNode,a):t.nodeType===1&&mc(t,a),sa(t)):mc(mn,a.stateNode));break;case 4:c=mn,d=lr,mn=a.stateNode.containerInfo,lr=!0,di(t,r,a),mn=c,lr=d;break;case 0:case 11:case 14:case 15:if(!Mn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&Qc(a,r,E),d=d.next}while(d!==c)}di(t,r,a);break;case 1:if(!Mn&&(ws(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(P){$t(a,r,P)}di(t,r,a);break;case 21:di(t,r,a);break;case 22:a.mode&1?(Mn=(c=Mn)||a.memoizedState!==null,di(t,r,a),Mn=c):di(t,r,a);break;default:di(t,r,a)}}function dh(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Kg),r.forEach(function(c){var d=a0.bind(null,t,c);a.has(c)||(a.add(c),c.then(d,d))})}}function cr(t,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=t,E=r,P=E;e:for(;P!==null;){switch(P.tag){case 5:mn=P.stateNode,lr=!1;break e;case 3:mn=P.stateNode.containerInfo,lr=!0;break e;case 4:mn=P.stateNode.containerInfo,lr=!0;break e}P=P.return}if(mn===null)throw Error(n(160));uh(m,E,d),mn=null,lr=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(ae){$t(d,r,ae)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)fh(r,t),r=r.sibling}function fh(t,r){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cr(r,t),wr(t),c&4){try{Ca(3,t,t.return),zo(3,t)}catch(Je){$t(t,t.return,Je)}try{Ca(5,t,t.return)}catch(Je){$t(t,t.return,Je)}}break;case 1:cr(r,t),wr(t),c&512&&a!==null&&ws(a,a.return);break;case 5:if(cr(r,t),wr(t),c&512&&a!==null&&ws(a,a.return),t.flags&32){var d=t.stateNode;try{De(d,"")}catch(Je){$t(t,t.return,Je)}}if(c&4&&(d=t.stateNode,d!=null)){var m=t.memoizedProps,E=a!==null?a.memoizedProps:m,P=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{P==="input"&&m.type==="radio"&&m.name!=null&&et(d,m),Le(P,E);var ae=Le(P,m);for(E=0;E<H.length;E+=2){var Ae=H[E],Ce=H[E+1];Ae==="style"?ze(d,Ce):Ae==="dangerouslySetInnerHTML"?Ke(d,Ce):Ae==="children"?De(d,Ce):R(d,Ae,Ce,ae)}switch(P){case"input":tt(d,m);break;case"textarea":w(d,m);break;case"select":var we=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var He=m.value;He!=null?at(d,!!m.multiple,He,!1):we!==!!m.multiple&&(m.defaultValue!=null?at(d,!!m.multiple,m.defaultValue,!0):at(d,!!m.multiple,m.multiple?[]:"",!1))}d[ga]=m}catch(Je){$t(t,t.return,Je)}}break;case 6:if(cr(r,t),wr(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,m=t.memoizedProps;try{d.nodeValue=m}catch(Je){$t(t,t.return,Je)}}break;case 3:if(cr(r,t),wr(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{sa(r.containerInfo)}catch(Je){$t(t,t.return,Je)}break;case 4:cr(r,t),wr(t);break;case 13:cr(r,t),wr(t),d=t.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(su=Q())),c&4&&dh(t);break;case 22:if(Ae=a!==null&&a.memoizedState!==null,t.mode&1?(Mn=(ae=Mn)||Ae,cr(r,t),Mn=ae):cr(r,t),wr(t),c&8192){if(ae=t.memoizedState!==null,(t.stateNode.isHidden=ae)&&!Ae&&(t.mode&1)!==0)for(je=t,Ae=t.child;Ae!==null;){for(Ce=je=Ae;je!==null;){switch(we=je,He=we.child,we.tag){case 0:case 11:case 14:case 15:Ca(4,we,we.return);break;case 1:ws(we,we.return);var qe=we.stateNode;if(typeof qe.componentWillUnmount=="function"){c=we,a=we.return;try{r=c,qe.props=r.memoizedProps,qe.state=r.memoizedState,qe.componentWillUnmount()}catch(Je){$t(c,a,Je)}}break;case 5:ws(we,we.return);break;case 22:if(we.memoizedState!==null){mh(Ce);continue}}He!==null?(He.return=we,je=He):mh(Ce)}Ae=Ae.sibling}e:for(Ae=null,Ce=t;;){if(Ce.tag===5){if(Ae===null){Ae=Ce;try{d=Ce.stateNode,ae?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(P=Ce.stateNode,H=Ce.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,P.style.display=Me("display",E))}catch(Je){$t(t,t.return,Je)}}}else if(Ce.tag===6){if(Ae===null)try{Ce.stateNode.nodeValue=ae?"":Ce.memoizedProps}catch(Je){$t(t,t.return,Je)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===t)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===t)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===t)break e;Ae===Ce&&(Ae=null),Ce=Ce.return}Ae===Ce&&(Ae=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:cr(r,t),wr(t),c&4&&dh(t);break;case 21:break;default:cr(r,t),wr(t)}}function wr(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(lh(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(De(d,""),c.flags&=-33);var m=ch(t);nu(t,m,d);break;case 3:case 4:var E=c.stateNode.containerInfo,P=ch(t);tu(t,P,E);break;default:throw Error(n(161))}}catch(H){$t(t,t.return,H)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Jg(t,r,a){je=t,ph(t)}function ph(t,r,a){for(var c=(t.mode&1)!==0;je!==null;){var d=je,m=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||Bo;if(!E){var P=d.alternate,H=P!==null&&P.memoizedState!==null||Mn;P=Bo;var ae=Mn;if(Bo=E,(Mn=H)&&!ae)for(je=d;je!==null;)E=je,H=E.child,E.tag===22&&E.memoizedState!==null?gh(d):H!==null?(H.return=E,je=H):gh(d);for(;m!==null;)je=m,ph(m),m=m.sibling;je=d,Bo=P,Mn=ae}hh(t)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,je=m):hh(t)}}function hh(t){for(;je!==null;){var r=je;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Mn||zo(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Mn)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:or(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&mp(r,m,c);break;case 3:var E=r.updateQueue;if(E!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}mp(r,E,a)}break;case 5:var P=r.stateNode;if(a===null&&r.flags&4){a=P;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ae=r.alternate;if(ae!==null){var Ae=ae.memoizedState;if(Ae!==null){var Ce=Ae.dehydrated;Ce!==null&&sa(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Mn||r.flags&512&&eu(r)}catch(we){$t(r,r.return,we)}}if(r===t){je=null;break}if(a=r.sibling,a!==null){a.return=r.return,je=a;break}je=r.return}}function mh(t){for(;je!==null;){var r=je;if(r===t){je=null;break}var a=r.sibling;if(a!==null){a.return=r.return,je=a;break}je=r.return}}function gh(t){for(;je!==null;){var r=je;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{zo(4,r)}catch(H){$t(r,a,H)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(H){$t(r,d,H)}}var m=r.return;try{eu(r)}catch(H){$t(r,m,H)}break;case 5:var E=r.return;try{eu(r)}catch(H){$t(r,E,H)}}}catch(H){$t(r,r.return,H)}if(r===t){je=null;break}var P=r.sibling;if(P!==null){P.return=r.return,je=P;break}je=r.return}}var Qg=Math.ceil,Ho=b.ReactCurrentDispatcher,ru=b.ReactCurrentOwner,er=b.ReactCurrentBatchConfig,Ft=0,dn=null,en=null,gn=0,Vn=0,As=ai(0),rn=0,ba=null,Bi=0,Go=0,iu=0,Fa=null,Un=null,su=0,Ts=1/0,Br=null,Vo=!1,au=null,fi=null,Wo=!1,pi=null,jo=0,Da=0,ou=null,Xo=-1,Yo=0;function Fn(){return(Ft&6)!==0?Q():Xo!==-1?Xo:Xo=Q()}function hi(t){return(t.mode&1)===0?1:(Ft&2)!==0&&gn!==0?gn&-gn:Ig.transition!==null?(Yo===0&&(Yo=zt()),Yo):(t=bt,t!==0||(t=window.event,t=t===void 0?16:xf(t.type)),t)}function ur(t,r,a,c){if(50<Da)throw Da=0,ou=null,Error(n(185));ln(t,a,c),((Ft&2)===0||t!==dn)&&(t===dn&&((Ft&2)===0&&(Go|=a),rn===4&&mi(t,gn)),Nn(t,c),a===1&&Ft===0&&(r.mode&1)===0&&(Ts=Q()+500,So&&li()))}function Nn(t,r){var a=t.callbackNode;Cn(t,r);var c=on(t,t===dn?gn:0);if(c===0)a!==null&&C(a),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(a!=null&&C(a),r===1)t.tag===0?Ng(xh.bind(null,t)):rp(xh.bind(null,t)),Rg(function(){(Ft&6)===0&&li()}),a=null;else{switch(yr(c)){case 1:a=be;break;case 4:a=Ie;break;case 16:a=We;break;case 536870912:a=pt;break;default:a=We}a=Th(a,vh.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function vh(t,r){if(Xo=-1,Yo=0,(Ft&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Cs()&&t.callbackNode!==a)return null;var c=on(t,t===dn?gn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=qo(t,c);else{r=c;var d=Ft;Ft|=2;var m=yh();(dn!==t||gn!==r)&&(Br=null,Ts=Q()+500,Hi(t,r));do try{n0();break}catch(P){_h(t,P)}while(!0);Ac(),Ho.current=m,Ft=d,en!==null?r=0:(dn=null,gn=0,r=rn)}if(r!==0){if(r===2&&(d=Rr(t),d!==0&&(c=d,r=lu(t,d))),r===1)throw a=ba,Hi(t,0),mi(t,c),Nn(t,Q()),a;if(r===6)mi(t,c);else{if(d=t.current.alternate,(c&30)===0&&!e0(d)&&(r=qo(t,c),r===2&&(m=Rr(t),m!==0&&(c=m,r=lu(t,m))),r===1))throw a=ba,Hi(t,0),mi(t,c),Nn(t,Q()),a;switch(t.finishedWork=d,t.finishedLanes=c,r){case 0:case 1:throw Error(n(345));case 2:Gi(t,Un,Br);break;case 3:if(mi(t,c),(c&130023424)===c&&(r=su+500-Q(),10<r)){if(on(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Fn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=hc(Gi.bind(null,t,Un,Br),r);break}Gi(t,Un,Br);break;case 4:if(mi(t,c),(c&4194240)===c)break;for(r=t.eventTimes,d=-1;0<c;){var E=31-xt(c);m=1<<E,E=r[E],E>d&&(d=E),c&=~m}if(c=d,c=Q()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Qg(c/1960))-c,10<c){t.timeoutHandle=hc(Gi.bind(null,t,Un,Br),c);break}Gi(t,Un,Br);break;case 5:Gi(t,Un,Br);break;default:throw Error(n(329))}}}return Nn(t,Q()),t.callbackNode===a?vh.bind(null,t):null}function lu(t,r){var a=Fa;return t.current.memoizedState.isDehydrated&&(Hi(t,r).flags|=256),t=qo(t,r),t!==2&&(r=Un,Un=a,r!==null&&cu(r)),t}function cu(t){Un===null?Un=t:Un.push.apply(Un,t)}function e0(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!sr(m(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function mi(t,r){for(r&=~iu,r&=~Go,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-xt(r),c=1<<a;t[a]=-1,r&=~c}}function xh(t){if((Ft&6)!==0)throw Error(n(327));Cs();var r=on(t,0);if((r&1)===0)return Nn(t,Q()),null;var a=qo(t,r);if(t.tag!==0&&a===2){var c=Rr(t);c!==0&&(r=c,a=lu(t,c))}if(a===1)throw a=ba,Hi(t,0),mi(t,r),Nn(t,Q()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Gi(t,Un,Br),Nn(t,Q()),null}function uu(t,r){var a=Ft;Ft|=1;try{return t(r)}finally{Ft=a,Ft===0&&(Ts=Q()+500,So&&li())}}function zi(t){pi!==null&&pi.tag===0&&(Ft&6)===0&&Cs();var r=Ft;Ft|=1;var a=er.transition,c=bt;try{if(er.transition=null,bt=1,t)return t()}finally{bt=c,er.transition=a,Ft=r,(Ft&6)===0&&li()}}function du(){Vn=As.current,Vt(As)}function Hi(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Dg(a)),en!==null)for(a=en.return;a!==null;){var c=a;switch(yc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&_o();break;case 3:Es(),Vt(Rn),Vt(yn),Lc();break;case 5:Rc(c);break;case 4:Es();break;case 13:Vt(Yt);break;case 19:Vt(Yt);break;case 10:Tc(c.type._context);break;case 22:case 23:du()}a=a.return}if(dn=t,en=t=gi(t.current,null),gn=Vn=r,rn=0,ba=null,iu=Go=Bi=0,Un=Fa=null,Ii!==null){for(r=0;r<Ii.length;r++)if(a=Ii[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var E=m.next;m.next=d,c.next=E}a.pending=c}Ii=null}return t}function _h(t,r){do{var a=en;try{if(Ac(),Ro.current=No,Po){for(var c=qt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Po=!1}if(Oi=0,un=nn=qt=null,Ea=!1,Ma=0,ru.current=null,a===null||a.return===null){rn=1,ba=r,en=null;break}e:{var m=t,E=a.return,P=a,H=r;if(r=gn,P.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ae=H,Ae=P,Ce=Ae.tag;if((Ae.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var we=Ae.alternate;we?(Ae.updateQueue=we.updateQueue,Ae.memoizedState=we.memoizedState,Ae.lanes=we.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var He=Wp(E);if(He!==null){He.flags&=-257,jp(He,E,P,m,r),He.mode&1&&Vp(m,ae,r),r=He,H=ae;var qe=r.updateQueue;if(qe===null){var Je=new Set;Je.add(H),r.updateQueue=Je}else qe.add(H);break e}else{if((r&1)===0){Vp(m,ae,r),fu();break e}H=Error(n(426))}}else if(jt&&P.mode&1){var Jt=Wp(E);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),jp(Jt,E,P,m,r),Mc(Ms(H,P));break e}}m=H=Ms(H,P),rn!==4&&(rn=2),Fa===null?Fa=[m]:Fa.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var Z=Hp(m,H,r);hp(m,Z);break e;case 1:P=H;var j=m.type,te=m.stateNode;if((m.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(fi===null||!fi.has(te)))){m.flags|=65536,r&=-r,m.lanes|=r;var Fe=Gp(m,P,r);hp(m,Fe);break e}}m=m.return}while(m!==null)}Eh(a)}catch(Qe){r=Qe,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function yh(){var t=Ho.current;return Ho.current=No,t===null?No:t}function fu(){(rn===0||rn===3||rn===2)&&(rn=4),dn===null||(Bi&268435455)===0&&(Go&268435455)===0||mi(dn,gn)}function qo(t,r){var a=Ft;Ft|=2;var c=yh();(dn!==t||gn!==r)&&(Br=null,Hi(t,r));do try{t0();break}catch(d){_h(t,d)}while(!0);if(Ac(),Ft=a,Ho.current=c,en!==null)throw Error(n(261));return dn=null,gn=0,rn}function t0(){for(;en!==null;)Sh(en)}function n0(){for(;en!==null&&!q();)Sh(en)}function Sh(t){var r=Ah(t.alternate,t,Vn);t.memoizedProps=t.pendingProps,r===null?Eh(t):en=r,ru.current=null}function Eh(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=qg(a,r,Vn),a!==null){en=a;return}}else{if(a=$g(a,r),a!==null){a.flags&=32767,en=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rn=6,en=null;return}}if(r=r.sibling,r!==null){en=r;return}en=r=t}while(r!==null);rn===0&&(rn=5)}function Gi(t,r,a){var c=bt,d=er.transition;try{er.transition=null,bt=1,r0(t,r,a,c)}finally{er.transition=d,bt=c}return null}function r0(t,r,a,c){do Cs();while(pi!==null);if((Ft&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(hn(t,m),t===dn&&(en=dn=null,gn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Wo||(Wo=!0,Th(We,function(){return Cs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=er.transition,er.transition=null;var E=bt;bt=1;var P=Ft;Ft|=4,ru.current=null,Zg(t,a),fh(a,t),Mg(fc),io=!!dc,fc=dc=null,t.current=a,Jg(a),le(),Ft=P,bt=E,er.transition=m}else t.current=a;if(Wo&&(Wo=!1,pi=t,jo=d),m=t.pendingLanes,m===0&&(fi=null),Et(a.stateNode),Nn(t,Q()),r!==null)for(c=t.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Vo)throw Vo=!1,t=au,au=null,t;return(jo&1)!==0&&t.tag!==0&&Cs(),m=t.pendingLanes,(m&1)!==0?t===ou?Da++:(Da=0,ou=t):Da=0,li(),null}function Cs(){if(pi!==null){var t=yr(jo),r=er.transition,a=bt;try{if(er.transition=null,bt=16>t?16:t,pi===null)var c=!1;else{if(t=pi,pi=null,jo=0,(Ft&6)!==0)throw Error(n(331));var d=Ft;for(Ft|=4,je=t.current;je!==null;){var m=je,E=m.child;if((je.flags&16)!==0){var P=m.deletions;if(P!==null){for(var H=0;H<P.length;H++){var ae=P[H];for(je=ae;je!==null;){var Ae=je;switch(Ae.tag){case 0:case 11:case 15:Ca(8,Ae,m)}var Ce=Ae.child;if(Ce!==null)Ce.return=Ae,je=Ce;else for(;je!==null;){Ae=je;var we=Ae.sibling,He=Ae.return;if(oh(Ae),Ae===ae){je=null;break}if(we!==null){we.return=He,je=we;break}je=He}}}var qe=m.alternate;if(qe!==null){var Je=qe.child;if(Je!==null){qe.child=null;do{var Jt=Je.sibling;Je.sibling=null,Je=Jt}while(Je!==null)}}je=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,je=E;else e:for(;je!==null;){if(m=je,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ca(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,je=Z;break e}je=m.return}}var j=t.current;for(je=j;je!==null;){E=je;var te=E.child;if((E.subtreeFlags&2064)!==0&&te!==null)te.return=E,je=te;else e:for(E=j;je!==null;){if(P=je,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:zo(9,P)}}catch(Qe){$t(P,P.return,Qe)}if(P===E){je=null;break e}var Fe=P.sibling;if(Fe!==null){Fe.return=P.return,je=Fe;break e}je=P.return}}if(Ft=d,li(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(ft,t)}catch{}c=!0}return c}finally{bt=a,er.transition=r}}return!1}function Mh(t,r,a){r=Ms(a,r),r=Hp(t,r,1),t=ui(t,r,1),r=Fn(),t!==null&&(ln(t,1,r),Nn(t,r))}function $t(t,r,a){if(t.tag===3)Mh(t,t,a);else for(;r!==null;){if(r.tag===3){Mh(r,t,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(fi===null||!fi.has(c))){t=Ms(a,t),t=Gp(r,t,1),r=ui(r,t,1),t=Fn(),r!==null&&(ln(r,1,t),Nn(r,t));break}}r=r.return}}function i0(t,r,a){var c=t.pingCache;c!==null&&c.delete(r),r=Fn(),t.pingedLanes|=t.suspendedLanes&a,dn===t&&(gn&a)===a&&(rn===4||rn===3&&(gn&130023424)===gn&&500>Q()-su?Hi(t,0):iu|=a),Nn(t,r)}function wh(t,r){r===0&&((t.mode&1)===0?r=1:(r=It,It<<=1,(It&130023424)===0&&(It=4194304)));var a=Fn();t=Ir(t,r),t!==null&&(ln(t,r,a),Nn(t,a))}function s0(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),wh(t,a)}function a0(t,r){var a=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(r),wh(t,a)}var Ah;Ah=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||Rn.current)Ln=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return Ln=!1,Yg(t,r,a);Ln=(t.flags&131072)!==0}else Ln=!1,jt&&(r.flags&1048576)!==0&&ip(r,Mo,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Oo(t,r),t=r.pendingProps;var d=ms(r,yn.current);Ss(r,a),d=Ic(null,r,c,t,d,a);var m=kc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Pn(c)?(m=!0,yo(r)):m=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Fc(r),d.updater=Io,r.stateNode=d,d._reactInternals=r,Vc(r,c,t,a),r=Yc(null,r,c,!0,m,a)):(r.tag=0,jt&&m&&_c(r),bn(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Oo(t,r),t=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=l0(c),t=or(c,t),d){case 0:r=Xc(null,r,c,t,a);break e;case 1:r=Zp(null,r,c,t,a);break e;case 11:r=Xp(null,r,c,t,a);break e;case 14:r=Yp(null,r,c,or(c.type,t),a);break e}throw Error(n(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:or(c,d),Xc(t,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:or(c,d),Zp(t,r,c,d,a);case 3:e:{if(Jp(r),t===null)throw Error(n(387));c=r.pendingProps,m=r.memoizedState,d=m.element,pp(t,r),Fo(r,c,null,a);var E=r.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){d=Ms(Error(n(423)),r),r=Qp(t,r,c,a,d);break e}else if(c!==d){d=Ms(Error(n(424)),r),r=Qp(t,r,c,a,d);break e}else for(Gn=si(r.stateNode.containerInfo.firstChild),Hn=r,jt=!0,ar=null,a=dp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xs(),c===d){r=Or(t,r,a);break e}bn(t,r,c,a)}r=r.child}return r;case 5:return gp(r),t===null&&Ec(r),c=r.type,d=r.pendingProps,m=t!==null?t.memoizedProps:null,E=d.children,pc(c,d)?E=null:m!==null&&pc(c,m)&&(r.flags|=32),Kp(t,r),bn(t,r,E,a),r.child;case 6:return t===null&&Ec(r),null;case 13:return eh(t,r,a);case 4:return Dc(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=_s(r,null,c,a):bn(t,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:or(c,d),Xp(t,r,c,d,a);case 7:return bn(t,r,r.pendingProps,a),r.child;case 8:return bn(t,r,r.pendingProps.children,a),r.child;case 12:return bn(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,m=r.memoizedProps,E=d.value,Ht(To,c._currentValue),c._currentValue=E,m!==null)if(sr(m.value,E)){if(m.children===d.children&&!Rn.current){r=Or(t,r,a);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var P=m.dependencies;if(P!==null){E=m.child;for(var H=P.firstContext;H!==null;){if(H.context===c){if(m.tag===1){H=kr(-1,a&-a),H.tag=2;var ae=m.updateQueue;if(ae!==null){ae=ae.shared;var Ae=ae.pending;Ae===null?H.next=H:(H.next=Ae.next,Ae.next=H),ae.pending=H}}m.lanes|=a,H=m.alternate,H!==null&&(H.lanes|=a),Cc(m.return,a,r),P.lanes|=a;break}H=H.next}}else if(m.tag===10)E=m.type===r.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(n(341));E.lanes|=a,P=E.alternate,P!==null&&(P.lanes|=a),Cc(E,a,r),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===r){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}bn(t,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Ss(r,a),d=Jn(d),c=c(d),r.flags|=1,bn(t,r,c,a),r.child;case 14:return c=r.type,d=or(c,r.pendingProps),d=or(c.type,d),Yp(t,r,c,d,a);case 15:return qp(t,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:or(c,d),Oo(t,r),r.tag=1,Pn(c)?(t=!0,yo(r)):t=!1,Ss(r,a),Bp(r,c,d),Vc(r,c,d,a),Yc(null,r,c,!0,t,a);case 19:return nh(t,r,a);case 22:return $p(t,r,a)}throw Error(n(156,r.tag))};function Th(t,r){return to(t,r)}function o0(t,r,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tr(t,r,a,c){return new o0(t,r,a,c)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function l0(t){if(typeof t=="function")return pu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===de)return 14}return 2}function gi(t,r){var a=t.alternate;return a===null?(a=tr(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function $o(t,r,a,c,d,m){var E=2;if(c=t,typeof t=="function")pu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case k:return Vi(a.children,d,m,r);case V:E=8,d|=8;break;case F:return t=tr(12,a,r,d|2),t.elementType=F,t.lanes=m,t;case Y:return t=tr(13,a,r,d),t.elementType=Y,t.lanes=m,t;case ce:return t=tr(19,a,r,d),t.elementType=ce,t.lanes=m,t;case oe:return Ko(a,d,m,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T:E=10;break e;case I:E=9;break e;case ne:E=11;break e;case de:E=14;break e;case K:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=tr(E,a,r,d),r.elementType=t,r.type=c,r.lanes=m,r}function Vi(t,r,a,c){return t=tr(7,t,c,r),t.lanes=a,t}function Ko(t,r,a,c){return t=tr(22,t,c,r),t.elementType=oe,t.lanes=a,t.stateNode={isHidden:!1},t}function hu(t,r,a){return t=tr(6,t,null,r),t.lanes=a,t}function mu(t,r,a){return r=tr(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function c0(t,r,a,c,d){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function gu(t,r,a,c,d,m,E,P,H){return t=new c0(t,r,a,P,H),r===1?(r=1,m===!0&&(r|=8)):r=0,m=tr(3,null,null,r),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fc(m),t}function u0(t,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:t,containerInfo:r,implementation:a}}function Ch(t){if(!t)return oi;t=t._reactInternals;e:{if(_r(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Pn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Pn(a))return tp(t,a,r)}return r}function bh(t,r,a,c,d,m,E,P,H){return t=gu(a,c,!0,t,d,m,E,P,H),t.context=Ch(null),a=t.current,c=Fn(),d=hi(a),m=kr(c,d),m.callback=r??null,ui(a,m,d),t.current.lanes=d,ln(t,d,c),Nn(t,c),t}function Zo(t,r,a,c){var d=r.current,m=Fn(),E=hi(d);return a=Ch(a),r.context===null?r.context=a:r.pendingContext=a,r=kr(m,E),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=ui(d,r,E),t!==null&&(ur(t,d,E,m),bo(t,d,E)),E}function Jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fh(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function vu(t,r){Fh(t,r),(t=t.alternate)&&Fh(t,r)}function d0(){return null}var Dh=typeof reportError=="function"?reportError:function(t){console.error(t)};function xu(t){this._internalRoot=t}Qo.prototype.render=xu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Zo(t,r,null,null)},Qo.prototype.unmount=xu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;zi(function(){Zo(null,t,null,null)}),r[Pr]=null}};function Qo(t){this._internalRoot=t}Qo.prototype.unstable_scheduleHydration=function(t){if(t){var r=pf();t={blockedOn:null,target:t,priority:r};for(var a=0;a<ni.length&&r!==0&&r<ni[a].priority;a++);ni.splice(a,0,t),a===0&&gf(t)}};function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rh(){}function f0(t,r,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ae=Jo(E);m.call(ae)}}var E=bh(r,c,t,0,null,!1,!1,"",Rh);return t._reactRootContainer=E,t[Pr]=E.current,ha(t.nodeType===8?t.parentNode:t),zi(),E}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var P=c;c=function(){var ae=Jo(H);P.call(ae)}}var H=gu(t,0,!1,null,null,!1,!1,"",Rh);return t._reactRootContainer=H,t[Pr]=H.current,ha(t.nodeType===8?t.parentNode:t),zi(function(){Zo(r,H,a,c)}),H}function tl(t,r,a,c,d){var m=a._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var P=d;d=function(){var H=Jo(E);P.call(H)}}Zo(r,E,t,d)}else E=f0(a,r,t,d,c);return Jo(E)}df=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Mt(r.pendingLanes);a!==0&&(cn(r,a|1),Nn(r,Q()),(Ft&6)===0&&(Ts=Q()+500,li()))}break;case 13:zi(function(){var c=Ir(t,1);if(c!==null){var d=Fn();ur(c,t,1,d)}}),vu(t,1)}},Wl=function(t){if(t.tag===13){var r=Ir(t,134217728);if(r!==null){var a=Fn();ur(r,t,134217728,a)}vu(t,134217728)}},ff=function(t){if(t.tag===13){var r=hi(t),a=Ir(t,r);if(a!==null){var c=Fn();ur(a,t,r,c)}vu(t,r)}},pf=function(){return bt},hf=function(t,r){var a=bt;try{return bt=t,r()}finally{bt=a}},Ue=function(t,r,a){switch(r){case"input":if(tt(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==t&&c.form===t.form){var d=xo(c);if(!d)throw Error(n(90));st(c),tt(c,d)}}}break;case"textarea":w(t,a);break;case"select":r=a.value,r!=null&&at(t,!!a.multiple,r,!1)}},Ze=uu,mt=zi;var p0={usingClientEntryPoint:!1,Events:[va,ps,xo,re,Pe,uu]},Ra={findFiberByHostInstance:Pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h0={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qa(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||d0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{ft=nl.inject(h0),Ye=nl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0,In.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(r))throw Error(n(200));return u0(t,r,null,a)},In.createRoot=function(t,r){if(!_u(t))throw Error(n(299));var a=!1,c="",d=Dh;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=gu(t,1,!1,null,null,a,!1,c,d),t[Pr]=r.current,ha(t.nodeType===8?t.parentNode:t),new xu(r)},In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Qa(r),t=t===null?null:t.stateNode,t},In.flushSync=function(t){return zi(t)},In.hydrate=function(t,r,a){if(!el(r))throw Error(n(200));return tl(null,t,r,!0,a)},In.hydrateRoot=function(t,r,a){if(!_u(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",E=Dh;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),r=bh(r,null,t,1,a??null,d,!1,m,E),t[Pr]=r.current,ha(t),c)for(t=0;t<c.length;t++)a=c[t],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Qo(r)},In.render=function(t,r,a){if(!el(r))throw Error(n(200));return tl(null,t,r,!1,a)},In.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(zi(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Pr]=null})}),!0):!1},In.unstable_batchedUpdates=uu,In.unstable_renderSubtreeIntoContainer=function(t,r,a,c){if(!el(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,r,a,!1,c)},In.version="18.3.1-next-f1338f8080-20240426",In}var Bh;function Km(){if(Bh)return Eu.exports;Bh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Eu.exports=S0(),Eu.exports}var zh;function E0(){if(zh)return rl;zh=1;var s=Km();return rl.createRoot=s.createRoot,rl.hydrateRoot=s.hydrateRoot,rl}var M0=E0(),w0=Km();const A0=$m(w0);function T0(s){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",e.appendChild(n),n.styleSheet?n.styleSheet.cssText=s:n.appendChild(document.createTextNode(s))}const C0=s=>{switch(s){case"success":return D0;case"info":return P0;case"warning":return R0;case"error":return L0;default:return null}},b0=Array(12).fill(0),F0=({visible:s,className:e})=>Re.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":s},Re.createElement("div",{className:"sonner-spinner"},b0.map((n,i)=>Re.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),D0=Re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Re.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),R0=Re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},Re.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),P0=Re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Re.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),L0=Re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Re.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),U0=Re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},Re.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Re.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),N0=()=>{const[s,e]=Re.useState(document.hidden);return Re.useEffect(()=>{const n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),s};let sd=1;class I0{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const n=this.subscribers.indexOf(e);this.subscribers.splice(n,1)}),this.publish=e=>{this.subscribers.forEach(n=>n(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var n;const{message:i,...o}=e,l=typeof(e==null?void 0:e.id)=="number"||((n=e.id)==null?void 0:n.length)>0?e.id:sd++,u=this.toasts.find(h=>h.id===l),f=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(l)&&this.dismissedToasts.delete(l),u?this.toasts=this.toasts.map(h=>h.id===l?(this.publish({...h,...e,id:l,title:i}),{...h,...e,id:l,dismissible:f,title:i}):h):this.addToast({title:i,...o,dismissible:f,id:l}),l},this.dismiss=e=>(e?(this.dismissedToasts.add(e),requestAnimationFrame(()=>this.subscribers.forEach(n=>n({id:e,dismiss:!0})))):this.toasts.forEach(n=>{this.subscribers.forEach(i=>i({id:n.id,dismiss:!0}))}),e),this.message=(e,n)=>this.create({...n,message:e}),this.error=(e,n)=>this.create({...n,message:e,type:"error"}),this.success=(e,n)=>this.create({...n,type:"success",message:e}),this.info=(e,n)=>this.create({...n,type:"info",message:e}),this.warning=(e,n)=>this.create({...n,type:"warning",message:e}),this.loading=(e,n)=>this.create({...n,type:"loading",message:e}),this.promise=(e,n)=>{if(!n)return;let i;n.loading!==void 0&&(i=this.create({...n,promise:e,type:"loading",message:n.loading,description:typeof n.description!="function"?n.description:void 0}));const o=Promise.resolve(e instanceof Function?e():e);let l=i!==void 0,u;const f=o.then(async g=>{if(u=["resolve",g],Re.isValidElement(g))l=!1,this.create({id:i,type:"default",message:g});else if(O0(g)&&!g.ok){l=!1;const p=typeof n.error=="function"?await n.error(`HTTP error! status: ${g.status}`):n.error,v=typeof n.description=="function"?await n.description(`HTTP error! status: ${g.status}`):n.description,M=typeof p=="object"&&!Re.isValidElement(p)?p:{message:p};this.create({id:i,type:"error",description:v,...M})}else if(g instanceof Error){l=!1;const p=typeof n.error=="function"?await n.error(g):n.error,v=typeof n.description=="function"?await n.description(g):n.description,M=typeof p=="object"&&!Re.isValidElement(p)?p:{message:p};this.create({id:i,type:"error",description:v,...M})}else if(n.success!==void 0){l=!1;const p=typeof n.success=="function"?await n.success(g):n.success,v=typeof n.description=="function"?await n.description(g):n.description,M=typeof p=="object"&&!Re.isValidElement(p)?p:{message:p};this.create({id:i,type:"success",description:v,...M})}}).catch(async g=>{if(u=["reject",g],n.error!==void 0){l=!1;const _=typeof n.error=="function"?await n.error(g):n.error,p=typeof n.description=="function"?await n.description(g):n.description,S=typeof _=="object"&&!Re.isValidElement(_)?_:{message:_};this.create({id:i,type:"error",description:p,...S})}}).finally(()=>{l&&(this.dismiss(i),i=void 0),n.finally==null||n.finally.call(n)}),h=()=>new Promise((g,_)=>f.then(()=>u[0]==="reject"?_(u[1]):g(u[1])).catch(_));return typeof i!="string"&&typeof i!="number"?{unwrap:h}:Object.assign(i,{unwrap:h})},this.custom=(e,n)=>{const i=(n==null?void 0:n.id)||sd++;return this.create({jsx:e(i),id:i,...n}),i},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const On=new I0,k0=(s,e)=>{const n=(e==null?void 0:e.id)||sd++;return On.addToast({title:s,...e,id:n}),n},O0=s=>s&&typeof s=="object"&&"ok"in s&&typeof s.ok=="boolean"&&"status"in s&&typeof s.status=="number",B0=k0,z0=()=>On.toasts,H0=()=>On.getActiveToasts();Object.assign(B0,{success:On.success,info:On.info,warning:On.warning,error:On.error,custom:On.custom,message:On.message,promise:On.promise,dismiss:On.dismiss,loading:On.loading},{getHistory:z0,getToasts:H0});T0("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function il(s){return s.label!==void 0}const G0=3,V0="24px",W0="16px",Hh=4e3,j0=356,X0=14,Y0=45,q0=200;function Ar(...s){return s.filter(Boolean).join(" ")}function $0(s){const[e,n]=s.split("-"),i=[];return e&&i.push(e),n&&i.push(n),i}const K0=s=>{var e,n,i,o,l,u,f,h,g;const{invert:_,toast:p,unstyled:v,interacting:S,setHeights:M,visibleToasts:A,heights:y,index:x,toasts:U,expanded:R,removeToast:b,defaultRichColors:W,closeButton:O,style:k,cancelButtonStyle:V,actionButtonStyle:F,className:T="",descriptionClassName:I="",duration:ne,position:Y,gap:ce,expandByDefault:de,classNames:K,icons:oe,closeButtonAriaLabel:z="Close toast"}=s,[fe,ie]=Re.useState(null),[N,se]=Re.useState(null),[ye,X]=Re.useState(!1),[ue,Se]=Re.useState(!1),[xe,ve]=Re.useState(!1),[ge,pe]=Re.useState(!1),[Ne,st]=Re.useState(!1),[rt,L]=Re.useState(0),[At,et]=Re.useState(0),tt=Re.useRef(p.duration||ne||Hh),Be=Re.useRef(null),dt=Re.useRef(null),$e=x===0,at=x+1<=A,vt=p.type,D=p.dismissible!==!1,w=p.className||"",ee=p.descriptionClassName||"",me=Re.useMemo(()=>y.findIndex(re=>re.toastId===p.id)||0,[y,p.id]),_e=Re.useMemo(()=>{var re;return(re=p.closeButton)!=null?re:O},[p.closeButton,O]),he=Re.useMemo(()=>p.duration||ne||Hh,[p.duration,ne]),Ke=Re.useRef(0),De=Re.useRef(0),Ge=Re.useRef(0),Xe=Re.useRef(null),[Me,ze]=Y.split("-"),ot=Re.useMemo(()=>y.reduce((re,Pe,Ze)=>Ze>=me?re:re+Pe.height,0),[y,me]),nt=N0(),Le=p.invert||_,lt=vt==="loading";De.current=Re.useMemo(()=>me*ce+ot,[me,ot]),Re.useEffect(()=>{tt.current=he},[he]),Re.useEffect(()=>{X(!0)},[]),Re.useEffect(()=>{const re=dt.current;if(re){const Pe=re.getBoundingClientRect().height;return et(Pe),M(Ze=>[{toastId:p.id,height:Pe,position:p.position},...Ze]),()=>M(Ze=>Ze.filter(mt=>mt.toastId!==p.id))}},[M,p.id]),Re.useLayoutEffect(()=>{if(!ye)return;const re=dt.current,Pe=re.style.height;re.style.height="auto";const Ze=re.getBoundingClientRect().height;re.style.height=Pe,et(Ze),M(mt=>mt.find(Rt=>Rt.toastId===p.id)?mt.map(Rt=>Rt.toastId===p.id?{...Rt,height:Ze}:Rt):[{toastId:p.id,height:Ze,position:p.position},...mt])},[ye,p.title,p.description,M,p.id,p.jsx,p.action,p.cancel]);const G=Re.useCallback(()=>{Se(!0),L(De.current),M(re=>re.filter(Pe=>Pe.toastId!==p.id)),setTimeout(()=>{b(p)},q0)},[p,b,M,De]);Re.useEffect(()=>{if(p.promise&&vt==="loading"||p.duration===1/0||p.type==="loading")return;let re;return R||S||nt?(()=>{if(Ge.current<Ke.current){const mt=new Date().getTime()-Ke.current;tt.current=tt.current-mt}Ge.current=new Date().getTime()})():(()=>{tt.current!==1/0&&(Ke.current=new Date().getTime(),re=setTimeout(()=>{p.onAutoClose==null||p.onAutoClose.call(p,p),G()},tt.current))})(),()=>clearTimeout(re)},[R,S,p,vt,nt,G]),Re.useEffect(()=>{p.delete&&(G(),p.onDismiss==null||p.onDismiss.call(p,p))},[G,p.delete]);function Ue(){var re;if(oe!=null&&oe.loading){var Pe;return Re.createElement("div",{className:Ar(K==null?void 0:K.loader,p==null||(Pe=p.classNames)==null?void 0:Pe.loader,"sonner-loader"),"data-visible":vt==="loading"},oe.loading)}return Re.createElement(F0,{className:Ar(K==null?void 0:K.loader,p==null||(re=p.classNames)==null?void 0:re.loader),visible:vt==="loading"})}const Ee=p.icon||(oe==null?void 0:oe[vt])||C0(vt);var Oe,Te;return Re.createElement("li",{tabIndex:0,ref:dt,className:Ar(T,w,K==null?void 0:K.toast,p==null||(e=p.classNames)==null?void 0:e.toast,K==null?void 0:K.default,K==null?void 0:K[vt],p==null||(n=p.classNames)==null?void 0:n[vt]),"data-sonner-toast":"","data-rich-colors":(Oe=p.richColors)!=null?Oe:W,"data-styled":!(p.jsx||p.unstyled||v),"data-mounted":ye,"data-promise":!!p.promise,"data-swiped":Ne,"data-removed":ue,"data-visible":at,"data-y-position":Me,"data-x-position":ze,"data-index":x,"data-front":$e,"data-swiping":xe,"data-dismissible":D,"data-type":vt,"data-invert":Le,"data-swipe-out":ge,"data-swipe-direction":N,"data-expanded":!!(R||de&&ye),"data-testid":p.testId,style:{"--index":x,"--toasts-before":x,"--z-index":U.length-x,"--offset":`${ue?rt:De.current}px`,"--initial-height":de?"auto":`${At}px`,...k,...p.style},onDragEnd:()=>{ve(!1),ie(null),Xe.current=null},onPointerDown:re=>{re.button!==2&&(lt||!D||(Be.current=new Date,L(De.current),re.target.setPointerCapture(re.pointerId),re.target.tagName!=="BUTTON"&&(ve(!0),Xe.current={x:re.clientX,y:re.clientY})))},onPointerUp:()=>{var re,Pe,Ze;if(ge||!D)return;Xe.current=null;const mt=Number(((re=dt.current)==null?void 0:re.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),St=Number(((Pe=dt.current)==null?void 0:Pe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Rt=new Date().getTime()-((Ze=Be.current)==null?void 0:Ze.getTime()),Nt=fe==="x"?mt:St,ir=Math.abs(Nt)/Rt;if(Math.abs(Nt)>=Y0||ir>.11){L(De.current),p.onDismiss==null||p.onDismiss.call(p,p),se(fe==="x"?mt>0?"right":"left":St>0?"down":"up"),G(),pe(!0);return}else{var Qt,Zt;(Qt=dt.current)==null||Qt.style.setProperty("--swipe-amount-x","0px"),(Zt=dt.current)==null||Zt.style.setProperty("--swipe-amount-y","0px")}st(!1),ve(!1),ie(null)},onPointerMove:re=>{var Pe,Ze,mt;if(!Xe.current||!D||((Pe=window.getSelection())==null?void 0:Pe.toString().length)>0)return;const Rt=re.clientY-Xe.current.y,Nt=re.clientX-Xe.current.x;var ir;const Qt=(ir=s.swipeDirections)!=null?ir:$0(Y);!fe&&(Math.abs(Nt)>1||Math.abs(Rt)>1)&&ie(Math.abs(Nt)>Math.abs(Rt)?"x":"y");let Zt={x:0,y:0};const $n=Tn=>1/(1.5+Math.abs(Tn)/20);if(fe==="y"){if(Qt.includes("top")||Qt.includes("bottom"))if(Qt.includes("top")&&Rt<0||Qt.includes("bottom")&&Rt>0)Zt.y=Rt;else{const Tn=Rt*$n(Rt);Zt.y=Math.abs(Tn)<Math.abs(Rt)?Tn:Rt}}else if(fe==="x"&&(Qt.includes("left")||Qt.includes("right")))if(Qt.includes("left")&&Nt<0||Qt.includes("right")&&Nt>0)Zt.x=Nt;else{const Tn=Nt*$n(Nt);Zt.x=Math.abs(Tn)<Math.abs(Nt)?Tn:Nt}(Math.abs(Zt.x)>0||Math.abs(Zt.y)>0)&&st(!0),(Ze=dt.current)==null||Ze.style.setProperty("--swipe-amount-x",`${Zt.x}px`),(mt=dt.current)==null||mt.style.setProperty("--swipe-amount-y",`${Zt.y}px`)}},_e&&!p.jsx&&vt!=="loading"?Re.createElement("button",{"aria-label":z,"data-disabled":lt,"data-close-button":!0,onClick:lt||!D?()=>{}:()=>{G(),p.onDismiss==null||p.onDismiss.call(p,p)},className:Ar(K==null?void 0:K.closeButton,p==null||(i=p.classNames)==null?void 0:i.closeButton)},(Te=oe==null?void 0:oe.close)!=null?Te:U0):null,(vt||p.icon||p.promise)&&p.icon!==null&&((oe==null?void 0:oe[vt])!==null||p.icon)?Re.createElement("div",{"data-icon":"",className:Ar(K==null?void 0:K.icon,p==null||(o=p.classNames)==null?void 0:o.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Ue():null,p.type!=="loading"?Ee:null):null,Re.createElement("div",{"data-content":"",className:Ar(K==null?void 0:K.content,p==null||(l=p.classNames)==null?void 0:l.content)},Re.createElement("div",{"data-title":"",className:Ar(K==null?void 0:K.title,p==null||(u=p.classNames)==null?void 0:u.title)},p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title),p.description?Re.createElement("div",{"data-description":"",className:Ar(I,ee,K==null?void 0:K.description,p==null||(f=p.classNames)==null?void 0:f.description)},typeof p.description=="function"?p.description():p.description):null),Re.isValidElement(p.cancel)?p.cancel:p.cancel&&il(p.cancel)?Re.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||V,onClick:re=>{il(p.cancel)&&D&&(p.cancel.onClick==null||p.cancel.onClick.call(p.cancel,re),G())},className:Ar(K==null?void 0:K.cancelButton,p==null||(h=p.classNames)==null?void 0:h.cancelButton)},p.cancel.label):null,Re.isValidElement(p.action)?p.action:p.action&&il(p.action)?Re.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||F,onClick:re=>{il(p.action)&&(p.action.onClick==null||p.action.onClick.call(p.action,re),!re.defaultPrevented&&G())},className:Ar(K==null?void 0:K.actionButton,p==null||(g=p.classNames)==null?void 0:g.actionButton)},p.action.label):null)};function Gh(){if(typeof window>"u"||typeof document>"u")return"ltr";const s=document.documentElement.getAttribute("dir");return s==="auto"||!s?window.getComputedStyle(document.documentElement).direction:s}function Z0(s,e){const n={};return[s,e].forEach((i,o)=>{const l=o===1,u=l?"--mobile-offset":"--offset",f=l?W0:V0;function h(g){["top","right","bottom","left"].forEach(_=>{n[`${u}-${_}`]=typeof g=="number"?`${g}px`:g})}typeof i=="number"||typeof i=="string"?h(i):typeof i=="object"?["top","right","bottom","left"].forEach(g=>{i[g]===void 0?n[`${u}-${g}`]=f:n[`${u}-${g}`]=typeof i[g]=="number"?`${i[g]}px`:i[g]}):h(f)}),n}const Zm=Re.forwardRef(function(e,n){const{id:i,invert:o,position:l="bottom-right",hotkey:u=["altKey","KeyT"],expand:f,closeButton:h,className:g,offset:_,mobileOffset:p,theme:v="light",richColors:S,duration:M,style:A,visibleToasts:y=G0,toastOptions:x,dir:U=Gh(),gap:R=X0,icons:b,containerAriaLabel:W="Notifications"}=e,[O,k]=Re.useState([]),V=Re.useMemo(()=>i?O.filter(ye=>ye.toasterId===i):O.filter(ye=>!ye.toasterId),[O,i]),F=Re.useMemo(()=>Array.from(new Set([l].concat(V.filter(ye=>ye.position).map(ye=>ye.position)))),[V,l]),[T,I]=Re.useState([]),[ne,Y]=Re.useState(!1),[ce,de]=Re.useState(!1),[K,oe]=Re.useState(v!=="system"?v:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),z=Re.useRef(null),fe=u.join("+").replace(/Key/g,"").replace(/Digit/g,""),ie=Re.useRef(null),N=Re.useRef(!1),se=Re.useCallback(ye=>{k(X=>{var ue;return(ue=X.find(Se=>Se.id===ye.id))!=null&&ue.delete||On.dismiss(ye.id),X.filter(({id:Se})=>Se!==ye.id)})},[]);return Re.useEffect(()=>On.subscribe(ye=>{if(ye.dismiss){requestAnimationFrame(()=>{k(X=>X.map(ue=>ue.id===ye.id?{...ue,delete:!0}:ue))});return}setTimeout(()=>{A0.flushSync(()=>{k(X=>{const ue=X.findIndex(Se=>Se.id===ye.id);return ue!==-1?[...X.slice(0,ue),{...X[ue],...ye},...X.slice(ue+1)]:[ye,...X]})})})}),[O]),Re.useEffect(()=>{if(v!=="system"){oe(v);return}if(v==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?oe("dark"):oe("light")),typeof window>"u")return;const ye=window.matchMedia("(prefers-color-scheme: dark)");try{ye.addEventListener("change",({matches:X})=>{oe(X?"dark":"light")})}catch{ye.addListener(({matches:ue})=>{try{oe(ue?"dark":"light")}catch(Se){console.error(Se)}})}},[v]),Re.useEffect(()=>{O.length<=1&&Y(!1)},[O]),Re.useEffect(()=>{const ye=X=>{var ue;if(u.every(ve=>X[ve]||X.code===ve)){var xe;Y(!0),(xe=z.current)==null||xe.focus()}X.code==="Escape"&&(document.activeElement===z.current||(ue=z.current)!=null&&ue.contains(document.activeElement))&&Y(!1)};return document.addEventListener("keydown",ye),()=>document.removeEventListener("keydown",ye)},[u]),Re.useEffect(()=>{if(z.current)return()=>{ie.current&&(ie.current.focus({preventScroll:!0}),ie.current=null,N.current=!1)}},[z.current]),Re.createElement("section",{ref:n,"aria-label":`${W} ${fe}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},F.map((ye,X)=>{var ue;const[Se,xe]=ye.split("-");return V.length?Re.createElement("ol",{key:ye,dir:U==="auto"?Gh():U,tabIndex:-1,ref:z,className:g,"data-sonner-toaster":!0,"data-sonner-theme":K,"data-y-position":Se,"data-x-position":xe,style:{"--front-toast-height":`${((ue=T[0])==null?void 0:ue.height)||0}px`,"--width":`${j0}px`,"--gap":`${R}px`,...A,...Z0(_,p)},onBlur:ve=>{N.current&&!ve.currentTarget.contains(ve.relatedTarget)&&(N.current=!1,ie.current&&(ie.current.focus({preventScroll:!0}),ie.current=null))},onFocus:ve=>{ve.target instanceof HTMLElement&&ve.target.dataset.dismissible==="false"||N.current||(N.current=!0,ie.current=ve.relatedTarget)},onMouseEnter:()=>Y(!0),onMouseMove:()=>Y(!0),onMouseLeave:()=>{ce||Y(!1)},onDragEnd:()=>Y(!1),onPointerDown:ve=>{ve.target instanceof HTMLElement&&ve.target.dataset.dismissible==="false"||de(!0)},onPointerUp:()=>de(!1)},V.filter(ve=>!ve.position&&X===0||ve.position===ye).map((ve,ge)=>{var pe,Ne;return Re.createElement(K0,{key:ve.id,icons:b,index:ge,toast:ve,defaultRichColors:S,duration:(pe=x==null?void 0:x.duration)!=null?pe:M,className:x==null?void 0:x.className,descriptionClassName:x==null?void 0:x.descriptionClassName,invert:o,visibleToasts:y,closeButton:(Ne=x==null?void 0:x.closeButton)!=null?Ne:h,interacting:ce,position:ye,style:x==null?void 0:x.style,unstyled:x==null?void 0:x.unstyled,classNames:x==null?void 0:x.classNames,cancelButtonStyle:x==null?void 0:x.cancelButtonStyle,actionButtonStyle:x==null?void 0:x.actionButtonStyle,closeButtonAriaLabel:x==null?void 0:x.closeButtonAriaLabel,removeToast:se,toasts:V.filter(st=>st.position==ve.position),heights:T.filter(st=>st.position==ve.position),setHeights:I,expandByDefault:f,gap:R,expanded:ne,swipeDirections:e.swipeDirections})})):null}))}),Vh=s=>{let e;const n=new Set,i=(g,_)=>{const p=typeof g=="function"?g(e):g;if(!Object.is(p,e)){const v=e;e=_??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(S=>S(e,v))}},o=()=>e,f={setState:i,getState:o,getInitialState:()=>h,subscribe:g=>(n.add(g),()=>n.delete(g))},h=e=s(i,o,f);return f},J0=s=>s?Vh(s):Vh,Q0=s=>s;function ev(s,e=Q0){const n=Re.useSyncExternalStore(s.subscribe,Re.useCallback(()=>e(s.getState()),[s,e]),Re.useCallback(()=>e(s.getInitialState()),[s,e]));return Re.useDebugValue(n),n}const Wh=s=>{const e=J0(s),n=i=>ev(e,i);return Object.assign(n,e),n},tv=s=>s?Wh(s):Wh,nv=[{id:"jake",name:"Jake",unlocked:!0,cost:0,description:"The original subway surfer and our main surfer!"},{id:"tricky",name:"Tricky",unlocked:!1,cost:500,description:"A real perfectionist and the brains of the Surfers!"},{id:"fresh",name:"Fresh",unlocked:!1,cost:1e3,description:"A boy with 80s styled high top fade!"},{id:"yutani",name:"Yutani",unlocked:!1,cost:1500,description:"A tech genius and science obsessed!"}],Fi=tv((s,e)=>({gameStatus:"menu",score:0,coins:0,distance:0,highScore:parseInt(localStorage.getItem("highScore")||"0"),totalCoins:parseInt(localStorage.getItem("totalCoins")||"0"),selectedCharacter:"jake",characters:nv,speed:.8,lane:1,isJumping:!1,isRolling:!1,powerUps:[],soundEnabled:!0,musicEnabled:!0,volume:.7,setGameStatus:n=>s({gameStatus:n}),addScore:n=>s(i=>{const o=i.score+n,l=Math.max(o,i.highScore);return l>i.highScore&&localStorage.setItem("highScore",l.toString()),{score:o,highScore:l}}),addCoins:n=>s(i=>{const o=i.coins+n,l=i.totalCoins+n;return localStorage.setItem("totalCoins",l.toString()),{coins:o,totalCoins:l}}),addDistance:n=>s(i=>({distance:i.distance+n})),setLane:n=>s({lane:Math.max(0,Math.min(2,n))}),setJumping:n=>s({isJumping:n}),setRolling:n=>s({isRolling:n}),activatePowerUp:n=>s(i=>{const o=i.powerUps.findIndex(l=>l.type===n.type);if(o>=0){const l=[...i.powerUps];return l[o]={...l[o],timeLeft:n.duration,active:!0},{powerUps:l}}else return{powerUps:[...i.powerUps,{...n,active:!0,timeLeft:n.duration}]}}),updatePowerUps:n=>s(i=>({powerUps:i.powerUps.map(l=>({...l,timeLeft:Math.max(0,l.timeLeft-n)})).filter(l=>l.timeLeft>0)})),selectCharacter:n=>s({selectedCharacter:n}),unlockCharacter:n=>s(i=>{const o=i.characters.find(l=>l.id===n);if(o&&i.totalCoins>=o.cost){const l=i.totalCoins-o.cost;return localStorage.setItem("totalCoins",l.toString()),{characters:i.characters.map(u=>u.id===n?{...u,unlocked:!0}:u),totalCoins:l}}return i}),resetGame:()=>s({score:0,coins:0,distance:0,speed:.8,lane:1,isJumping:!1,isRolling:!1,powerUps:[],gameStatus:"menu"}),setSoundEnabled:n=>s({soundEnabled:n}),setMusicEnabled:n=>s({musicEnabled:n}),setVolume:n=>s({volume:n})}));function rv(){const{gameStatus:s,lane:e,setLane:n,setJumping:i,setRolling:o,isJumping:l,isRolling:u}=Fi(),f=yt.useCallback(v=>{if(!(!v||s!=="playing"))switch(v.key){case"ArrowLeft":case"a":case"A":v.preventDefault(),n(e-1);break;case"ArrowRight":case"d":case"D":v.preventDefault(),n(e+1);break;case"ArrowUp":case"w":case"W":case" ":v.preventDefault(),!l&&!u&&(i(!0),setTimeout(()=>i(!1),800));break;case"ArrowDown":case"s":case"S":v.preventDefault(),!l&&!u&&(o(!0),setTimeout(()=>o(!1),600));break}},[s,e,n,i,o,l,u]),h=yt.useCallback(v=>{if(!v||s!=="playing")return;const S=v.touches[0],M={x:S.clientX,y:S.clientY,time:Date.now()};v.target.touchStart=M},[s]),g=yt.useCallback(v=>{if(!v||s!=="playing")return;const S=v.target.touchStart;if(!S)return;const M=v.changedTouches[0],A=M.clientX-S.x,y=M.clientY-S.y,x=Date.now()-S.time,U=50;if(x>500)return;const b=Math.abs(A),W=Math.abs(y);b>W&&b>U?A>0?n(e+1):n(e-1):W>b&&W>U?y<0?!l&&!u&&(i(!0),setTimeout(()=>i(!1),800)):!l&&!u&&(o(!0),setTimeout(()=>o(!1),600)):b<U&&W<U&&x<200&&!l&&!u&&(i(!0),setTimeout(()=>i(!1),800)),delete v.target.touchStart},[s,e,n,i,o,l,u]),_=yt.useCallback(v=>{if(!v||s!=="playing")return;const S={x:v.clientX,y:v.clientY,time:Date.now()};v.target.mouseStart=S},[s]),p=yt.useCallback(v=>{if(!v||s!=="playing")return;const S=v.target.mouseStart;if(!S)return;const M=v.clientX-S.x,A=v.clientY-S.y,y=Date.now()-S.time,x=30;if(y>300)return;const R=Math.abs(M),b=Math.abs(A);R>b&&R>x?M>0?n(e+1):n(e-1):b>R&&b>x?A<0?!l&&!u&&(i(!0),setTimeout(()=>i(!1),800)):!l&&!u&&(o(!0),setTimeout(()=>o(!1),600)):R<x&&b<x&&y<200&&!l&&!u&&(i(!0),setTimeout(()=>i(!1),800)),delete v.target.mouseStart},[s,e,n,i,o,l,u]);return yt.useEffect(()=>(window.addEventListener("keydown",f),window.addEventListener("touchstart",h,{passive:!1}),window.addEventListener("touchend",g,{passive:!1}),window.addEventListener("mousedown",_),window.addEventListener("mouseup",p),()=>{window.removeEventListener("keydown",f),window.removeEventListener("touchstart",h),window.removeEventListener("touchend",g),window.removeEventListener("mousedown",_),window.removeEventListener("mouseup",p)}),[f,h,g,_,p]),{isControlsActive:s==="playing"}}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sv=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),jh=s=>{const e=sv(s);return e.charAt(0).toUpperCase()+e.slice(1)},Jm=(...s)=>s.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),av=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ov={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=yt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:u,...f},h)=>yt.createElement("svg",{ref:h,...ov,width:e,height:e,stroke:s,strokeWidth:i?Number(n)*24/Number(e):n,className:Jm("lucide",o),...!l&&!av(f)&&{"aria-hidden":"true"},...f},[...u.map(([g,_])=>yt.createElement(g,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=(s,e)=>{const n=yt.forwardRef(({className:i,...o},l)=>yt.createElement(lv,{ref:l,iconNode:e,className:Jm(`lucide-${iv(jh(s))}`,`lucide-${s}`,i),...o}));return n.displayName=jh(s),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],Zd=qn("coins",cv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],dv=qn("footprints",uv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Qm=qn("house",fv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]],hv=qn("magnet",pv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],gv=qn("pause",mv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],e2=qn("play",vv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],t2=qn("rotate-ccw",xv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],n2=qn("settings",_v);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Sv=qn("shopping-cart",yv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ad=qn("star",Ev);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],wv=qn("target",Mv);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],r2=qn("trophy",Av);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Xh=qn("zap",Tv);function Cv(){const{setGameStatus:s,selectedCharacter:e,selectCharacter:n,characters:i,highScore:o,totalCoins:l}=Fi(),[u,f]=yt.useState([]),[h,g]=yt.useState([]);yt.useEffect(()=>{const v=Array.from({length:15},(M,A)=>({id:A,x:Math.random()*100,y:Math.random()*100,size:Math.random()*30+10,delay:Math.random()*5}));f(v);const S=Array.from({length:20},(M,A)=>({id:A,x:Math.random()*100,y:Math.random()*100,opacity:Math.random()*.8+.2}));g(S)},[]);const _=()=>{s("playing")},p=v=>{const S=i.find(M=>M.id===v);S&&S.unlocked&&n(v)};return B.jsxs("div",{"trae-inspector-start-line":"51","trae-inspector-start-column":"4","trae-inspector-end-line":"260","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"min-h-screen bg-gradient-to-br from-[#6AEEFD] via-[#354093] to-[#E31902] flex flex-col relative overflow-hidden animate-gradient-x",children:[B.jsxs("div",{"trae-inspector-start-line":"53","trae-inspector-start-column":"6","trae-inspector-end-line":"80","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute inset-0 opacity-20",children:[u.map(v=>B.jsx("div",{"trae-inspector-start-line":"55","trae-inspector-start-column":"10","trae-inspector-end-line":"66","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute bg-gradient-to-br from-[#FFED6D] to-[#F7BE76] rounded-full blur-2xl animate-float",style:{left:`${v.x}%`,top:`${v.y}%`,width:`${v.size}px`,height:`${v.size}px`,animationDelay:`${v.delay}s`,animationDuration:`${6+Math.random()*4}s`}},v.id)),h.map(v=>B.jsx("div",{"trae-inspector-start-line":"69","trae-inspector-start-column":"10","trae-inspector-end-line":"78","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute w-2 h-2 bg-[#FFED6D] rounded-full animate-twinkle",style:{left:`${v.x}%`,top:`${v.y}%`,opacity:v.opacity,animationDelay:`${Math.random()*3}s`}},v.id))]}),B.jsx("div",{"trae-inspector-start-line":"83","trae-inspector-start-column":"6","trae-inspector-end-line":"95","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute inset-0 pointer-events-none",children:Array.from({length:8}).map((v,S)=>B.jsx("div",{"trae-inspector-start-line":"85","trae-inspector-start-column":"10","trae-inspector-end-line":"93","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute w-1 h-1 bg-[#FFED6D] rounded-full animate-particle",style:{left:`${Math.random()*100}%`,animationDelay:`${S*.5}s`,animationDuration:`${8+Math.random()*4}s`}},S))}),B.jsxs("div",{"trae-inspector-start-line":"97","trae-inspector-start-column":"6","trae-inspector-end-line":"117","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex justify-between items-center p-6 animate-slide-down",children:[B.jsxs("div",{"trae-inspector-start-line":"98","trae-inspector-start-column":"8","trae-inspector-end-line":"107","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center space-x-4",children:[B.jsxs("div",{"trae-inspector-start-line":"99","trae-inspector-start-column":"10","trae-inspector-end-line":"102","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center space-x-2 bg-[#FFED6D] border-4 border-[#F7BE76] rounded-full px-6 py-3 shadow-lg transform hover:scale-110 transition-all duration-300 hover:rotate-2 animate-bounce-gentle",children:[B.jsx(Zd,{"trae-inspector-start-line":"100","trae-inspector-start-column":"12","trae-inspector-end-line":"100","trae-inspector-end-column":"74","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-7 h-7 text-[#E31902] animate-spin-slow"}),B.jsx("span",{"trae-inspector-start-line":"101","trae-inspector-start-column":"12","trae-inspector-end-line":"101","trae-inspector-end-column":"114","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] font-black text-xl tracking-wide",children:l.toLocaleString()})]}),B.jsxs("div",{"trae-inspector-start-line":"103","trae-inspector-start-column":"10","trae-inspector-end-line":"106","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center space-x-2 bg-[#FFED6D] border-4 border-[#F7BE76] rounded-full px-6 py-3 shadow-lg transform hover:scale-110 transition-all duration-300 hover:-rotate-2 animate-bounce-gentle",style:{animationDelay:"0.2s"},children:[B.jsx(r2,{"trae-inspector-start-line":"104","trae-inspector-start-column":"12","trae-inspector-end-line":"104","trae-inspector-end-column":"71","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-7 h-7 text-[#E31902] animate-pulse"}),B.jsx("span",{"trae-inspector-start-line":"105","trae-inspector-start-column":"12","trae-inspector-end-line":"105","trae-inspector-end-column":"113","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] font-black text-xl tracking-wide",children:o.toLocaleString()})]})]}),B.jsxs("div",{"trae-inspector-start-line":"109","trae-inspector-start-column":"8","trae-inspector-end-line":"116","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex space-x-3",children:[B.jsx("button",{"trae-inspector-start-line":"110","trae-inspector-start-column":"10","trae-inspector-end-line":"112","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#F7BE76] border-4 border-[#FFED6D] hover:bg-[#FFED6D] hover:border-[#F7BE76] transition-all duration-300 rounded-full p-4 shadow-lg transform hover:scale-125 active:scale-95 hover:rotate-12 animate-wiggle",children:B.jsx(n2,{"trae-inspector-start-line":"111","trae-inspector-start-column":"12","trae-inspector-end-line":"111","trae-inspector-end-column":"77","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-7 h-7 text-[#354093] animate-spin-slow"})}),B.jsx("button",{"trae-inspector-start-line":"113","trae-inspector-start-column":"10","trae-inspector-end-line":"115","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#F7BE76] border-4 border-[#FFED6D] hover:bg-[#FFED6D] hover:border-[#F7BE76] transition-all duration-300 rounded-full p-4 shadow-lg transform hover:scale-125 active:scale-95 hover:-rotate-12 animate-wiggle",style:{animationDelay:"0.5s"},children:B.jsx(Sv,{"trae-inspector-start-line":"114","trae-inspector-start-column":"12","trae-inspector-end-line":"114","trae-inspector-end-column":"78","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-7 h-7 text-[#354093] animate-bounce"})})]})]}),B.jsxs("div",{"trae-inspector-start-line":"120","trae-inspector-start-column":"6","trae-inspector-end-line":"250","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex-1 flex flex-col items-center justify-center px-6",children:[B.jsxs("div",{"trae-inspector-start-line":"122","trae-inspector-start-column":"8","trae-inspector-end-line":"139","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-center mb-12 relative animate-fade-in-up",children:[B.jsxs("div",{"trae-inspector-start-line":"124","trae-inspector-start-column":"10","trae-inspector-end-line":"133","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"relative",children:[B.jsx("h1",{"trae-inspector-start-line":"125","trae-inspector-start-column":"12","trae-inspector-end-line":"127","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22SUBTRAE%22%2C%22textStartLine%22%3A%22125%22%2C%22textStartColumn%22%3A%22306%22%2C%22textEndLine%22%3A%22127%22%2C%22textEndColumn%22%3A%2213%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-7xl md:text-9xl font-black text-[#FFED6D] mb-2 transform -rotate-2 relative z-10 animate-title-bounce",style:{textShadow:"6px 6px 0px #354093, 12px 12px 0px #E31902, 18px 18px 20px rgba(0,0,0,0.3)",fontFamily:"Impact, Arial Black, sans-serif",letterSpacing:"0.1em"},children:"SUBTRAE"}),B.jsx("h2",{"trae-inspector-start-line":"128","trae-inspector-start-column":"12","trae-inspector-end-line":"130","trae-inspector-end-column":"17","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22SURFERS%22%2C%22textStartLine%22%3A%22128%22%2C%22textStartColumn%22%3A%22322%22%2C%22textEndLine%22%3A%22130%22%2C%22textEndColumn%22%3A%2213%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-5xl md:text-7xl font-black text-[#6AEEFD] transform rotate-1 relative z-10 animate-title-bounce",style:{textShadow:"4px 4px 0px #354093, 8px 8px 0px #E31902, 12px 12px 15px rgba(0,0,0,0.3)",fontFamily:"Impact, Arial Black, sans-serif",letterSpacing:"0.1em",animationDelay:"0.3s"},children:"SURFERS"}),B.jsx("div",{"trae-inspector-start-line":"132","trae-inspector-start-column":"12","trae-inspector-end-line":"132","trae-inspector-end-column":"146","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute inset-0 bg-gradient-to-r from-[#FFED6D] via-[#F7BE76] to-[#6AEEFD] opacity-30 blur-3xl animate-pulse-glow"})]}),B.jsx("div",{"trae-inspector-start-line":"134","trae-inspector-start-column":"10","trae-inspector-end-line":"138","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#F7BE76] border-4 border-[#FFED6D] rounded-2xl px-6 py-3 mt-6 inline-block transform rotate-1 shadow-lg animate-wiggle-slow hover:scale-110 transition-transform duration-300",children:B.jsx("p",{"trae-inspector-start-line":"135","trae-inspector-start-column":"12","trae-inspector-end-line":"137","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%8F%83%E2%80%8D%E2%99%82%EF%B8%8F%20Run%20as%20far%20as%20you%20can!%20%F0%9F%9A%87%22%2C%22textStartLine%22%3A%22135%22%2C%22textStartColumn%22%3A%2279%22%2C%22textEndLine%22%3A%22137%22%2C%22textEndColumn%22%3A%2213%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] text-xl font-bold animate-text-glow",children:"🏃‍♂️ Run as far as you can! 🚇"})})]}),B.jsxs("div",{"trae-inspector-start-line":"142","trae-inspector-start-column":"8","trae-inspector-end-line":"209","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"mb-12 animate-fade-in-up",style:{animationDelay:"0.6s"},children:[B.jsx("div",{"trae-inspector-start-line":"143","trae-inspector-start-column":"10","trae-inspector-end-line":"145","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#6AEEFD] border-4 border-[#FFED6D] rounded-2xl px-8 py-4 mb-8 inline-block transform -rotate-1 shadow-lg animate-bounce-gentle hover:scale-105 transition-transform duration-300",children:B.jsx("h3",{"trae-inspector-start-line":"144","trae-inspector-start-column":"12","trae-inspector-end-line":"144","trae-inspector-end-column":"207","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%8E%AD%20CHOOSE%20YOUR%20SURFER!%20%F0%9F%8E%AD%22%2C%22textStartLine%22%3A%22144%22%2C%22textStartColumn%22%3A%22178%22%2C%22textEndLine%22%3A%22144%22%2C%22textEndColumn%22%3A%22203%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] text-3xl font-black text-center animate-text-rainbow",style:{fontFamily:"Impact, Arial Black, sans-serif",letterSpacing:"0.05em"},children:"🎭 CHOOSE YOUR SURFER! 🎭"})}),B.jsx("div",{"trae-inspector-start-line":"146","trae-inspector-start-column":"10","trae-inspector-end-line":"208","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex space-x-4 overflow-x-auto pb-4",children:i.map((v,S)=>B.jsxs("div",{"trae-inspector-start-line":"148","trae-inspector-start-column":"14","trae-inspector-end-line":"206","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`relative flex-shrink-0 cursor-pointer transition-all duration-500 hover:scale-110 animate-character-float ${e===v.id?"scale-115 animate-selected-glow":""}`,style:{animationDelay:`${S*.2}s`},onClick:()=>p(v.id),children:[B.jsxs("div",{"trae-inspector-start-line":"156","trae-inspector-start-column":"16","trae-inspector-end-line":"194","trae-inspector-end-column":"22","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`w-28 h-36 rounded-3xl border-6 flex items-center justify-center relative overflow-hidden shadow-xl transform transition-all duration-300 ${v.unlocked?e===v.id?"border-[#FFED6D] bg-gradient-to-b from-[#F7BE76] to-[#6AEEFD] scale-110 shadow-2xl animate-character-selected":"border-[#C6FEFE] bg-gradient-to-b from-[#6AEEFD]/30 to-[#354093]/30 hover:border-[#FFED6D] hover:scale-105 hover:rotate-3":"border-gray-400 bg-gray-600/50 animate-locked-shake"}`,children:[B.jsx("div",{"trae-inspector-start-line":"166","trae-inspector-start-column":"18","trae-inspector-end-line":"177","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`w-20 h-20 rounded-full border-4 border-white shadow-lg animate-avatar-pulse ${v.id==="jake"?"bg-gradient-to-br from-[#22c55e] to-[#16a34a]":v.id==="tricky"?"bg-gradient-to-br from-[#E31902] to-[#dc2626]":v.id==="fresh"?"bg-gradient-to-br from-[#6AEEFD] to-[#3b82f6]":"bg-gradient-to-br from-[#a855f7] to-[#7c3aed]"}`,style:{animationDelay:`${S*.1}s`}}),!v.unlocked&&B.jsx("div",{"trae-inspector-start-line":"181","trae-inspector-start-column":"20","trae-inspector-end-line":"185","trae-inspector-end-column":"26","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute inset-0 bg-black/50 flex items-center justify-center",children:B.jsx("div",{"trae-inspector-start-line":"182","trae-inspector-start-column":"22","trae-inspector-end-line":"184","trae-inspector-end-column":"28","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center",children:B.jsx("span",{"trae-inspector-start-line":"183","trae-inspector-start-column":"24","trae-inspector-end-line":"183","trae-inspector-end-column":"80","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%94%92%22%2C%22textStartLine%22%3A%22183%22%2C%22textStartColumn%22%3A%2272%22%2C%22textEndLine%22%3A%22183%22%2C%22textEndColumn%22%3A%2274%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-black text-xs font-bold",children:"🔒"})})}),e===v.id&&v.unlocked&&B.jsx("div",{"trae-inspector-start-line":"190","trae-inspector-start-column":"20","trae-inspector-end-line":"192","trae-inspector-end-column":"26","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute -top-3 -right-3 w-8 h-8 bg-[#FFED6D] border-3 border-[#354093] rounded-full flex items-center justify-center shadow-lg animate-selected-indicator",children:B.jsx("span",{"trae-inspector-start-line":"191","trae-inspector-start-column":"22","trae-inspector-end-line":"191","trae-inspector-end-column":"100","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%9C%93%22%2C%22textStartLine%22%3A%22191%22%2C%22textStartColumn%22%3A%2293%22%2C%22textEndLine%22%3A%22191%22%2C%22textEndColumn%22%3A%2294%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] text-sm font-black animate-checkmark",children:"✓"})})]}),B.jsxs("div",{"trae-inspector-start-line":"196","trae-inspector-start-column":"16","trae-inspector-end-line":"205","trae-inspector-end-column":"22","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-center mt-3",children:[B.jsx("div",{"trae-inspector-start-line":"197","trae-inspector-start-column":"18","trae-inspector-end-line":"199","trae-inspector-end-column":"24","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#354093] border-2 border-[#FFED6D] rounded-xl px-3 py-1 inline-block",children:B.jsx("p",{"trae-inspector-start-line":"198","trae-inspector-start-column":"20","trae-inspector-end-line":"198","trae-inspector-end-column":"159","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#FFED6D] font-black text-sm",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:v.name.toUpperCase()})}),!v.unlocked&&B.jsx("div",{"trae-inspector-start-line":"201","trae-inspector-start-column":"20","trae-inspector-end-line":"203","trae-inspector-end-column":"26","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#E31902] border-2 border-[#FFED6D] rounded-lg px-2 py-1 mt-1 inline-block",children:B.jsxs("p",{"trae-inspector-start-line":"202","trae-inspector-start-column":"22","trae-inspector-end-line":"202","trae-inspector-end-column":"93","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#FFED6D] text-xs font-bold",children:["💰 ",v.cost]})})]})]},v.id))})]}),B.jsx("div",{"trae-inspector-start-line":"212","trae-inspector-start-column":"8","trae-inspector-end-line":"236","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"animate-fade-in-up",style:{animationDelay:"1s"},children:B.jsxs("button",{"trae-inspector-start-line":"213","trae-inspector-start-column":"10","trae-inspector-end-line":"235","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",onClick:_,className:"group relative bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] border-6 border-[#FFED6D] text-white font-black py-8 px-16 rounded-full text-4xl shadow-2xl transform transition-all duration-300 hover:scale-125 active:scale-95 animate-play-button-pulse hover:rotate-2",style:{fontFamily:"Impact, Arial Black, sans-serif",letterSpacing:"0.1em"},children:[B.jsxs("div",{"trae-inspector-start-line":"218","trae-inspector-start-column":"12","trae-inspector-end-line":"221","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center space-x-4",children:[B.jsx(e2,{"trae-inspector-start-line":"219","trae-inspector-start-column":"14","trae-inspector-end-line":"219","trae-inspector-end-column":"75","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-10 h-10 fill-current animate-play-icon"}),B.jsx("span",{"trae-inspector-start-line":"220","trae-inspector-start-column":"14","trae-inspector-end-line":"220","trae-inspector-end-column":"77","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22PLAY!%22%2C%22textStartLine%22%3A%22220%22%2C%22textStartColumn%22%3A%2266%22%2C%22textEndLine%22%3A%22220%22%2C%22textEndColumn%22%3A%2271%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"drop-shadow-lg animate-text-glow",children:"PLAY!"})]}),B.jsx("div",{"trae-inspector-start-line":"224","trae-inspector-start-column":"12","trae-inspector-end-line":"224","trae-inspector-end-column":"198","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute inset-0 bg-gradient-to-r from-[#FFED6D] to-[#F7BE76] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl animate-glow-pulse"}),B.jsx("div",{"trae-inspector-start-line":"225","trae-inspector-start-column":"12","trae-inspector-end-line":"225","trae-inspector-end-column":"148","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute inset-0 bg-[#22c55e] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-2xl"}),B.jsx("div",{"trae-inspector-start-line":"228","trae-inspector-start-column":"12","trae-inspector-end-line":"228","trae-inspector-end-column":"110","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute -top-2 -right-2 w-4 h-4 bg-[#FFED6D] rounded-full animate-sparkle"}),B.jsx("div",{"trae-inspector-start-line":"229","trae-inspector-start-column":"12","trae-inspector-end-line":"229","trae-inspector-end-column":"145","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute -bottom-2 -left-2 w-3 h-3 bg-[#F7BE76] rounded-full animate-sparkle",style:{animationDelay:"0.5s"}}),B.jsx("div",{"trae-inspector-start-line":"230","trae-inspector-start-column":"12","trae-inspector-end-line":"230","trae-inspector-end-column":"140","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute -top-2 -left-2 w-2 h-2 bg-[#6AEEFD] rounded-full animate-sparkle",style:{animationDelay:"1s"}}),B.jsx("div",{"trae-inspector-start-line":"231","trae-inspector-start-column":"12","trae-inspector-end-line":"231","trae-inspector-end-column":"146","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute -bottom-2 -right-2 w-2 h-2 bg-[#E31902] rounded-full animate-sparkle",style:{animationDelay:"1.5s"}}),B.jsx("div",{"trae-inspector-start-line":"234","trae-inspector-start-column":"12","trae-inspector-end-line":"234","trae-inspector-end-column":"136","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute inset-0 rounded-full border-4 border-[#FFED6D] opacity-0 group-hover:opacity-100 animate-ripple"})]})}),B.jsx("div",{"trae-inspector-start-line":"239","trae-inspector-start-column":"8","trae-inspector-end-line":"249","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"mt-12 text-center animate-fade-in-up",style:{animationDelay:"1.2s"},children:B.jsxs("div",{"trae-inspector-start-line":"240","trae-inspector-start-column":"10","trae-inspector-end-line":"248","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#354093] border-4 border-[#6AEEFD] rounded-2xl px-8 py-4 inline-block transform rotate-1 shadow-lg animate-wiggle-slow hover:scale-105 transition-transform duration-300",children:[B.jsx("p",{"trae-inspector-start-line":"241","trae-inspector-start-column":"12","trae-inspector-end-line":"241","trae-inspector-end-column":"161","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%8E%AE%20CONTROLS%20%F0%9F%8E%AE%22%2C%22textStartLine%22%3A%22241%22%2C%22textStartColumn%22%3A%22144%22%2C%22textEndLine%22%3A%22241%22%2C%22textEndColumn%22%3A%22158%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#FFED6D] text-lg font-black mb-3 animate-text-rainbow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"🎮 CONTROLS 🎮"}),B.jsxs("div",{"trae-inspector-start-line":"242","trae-inspector-start-column":"12","trae-inspector-end-line":"247","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex flex-wrap justify-center gap-3 text-[#C6FEFE] text-sm font-bold",children:[B.jsx("div",{"trae-inspector-start-line":"243","trae-inspector-start-column":"14","trae-inspector-end-line":"243","trae-inspector-end-column":"193","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%86%90%20%E2%86%92%20Move%22%2C%22textStartLine%22%3A%22243%22%2C%22textStartColumn%22%3A%22180%22%2C%22textEndLine%22%3A%22243%22%2C%22textEndColumn%22%3A%22188%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#6AEEFD] text-[#354093] px-3 py-1 rounded-lg border-2 border-[#FFED6D] animate-control-bounce hover:scale-110 transition-transform duration-200",children:"← → Move"}),B.jsx("div",{"trae-inspector-start-line":"244","trae-inspector-start-column":"14","trae-inspector-end-line":"244","trae-inspector-end-column":"224","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%86%91%20Jump%22%2C%22textStartLine%22%3A%22244%22%2C%22textStartColumn%22%3A%22213%22%2C%22textEndLine%22%3A%22244%22%2C%22textEndColumn%22%3A%22219%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#6AEEFD] text-[#354093] px-3 py-1 rounded-lg border-2 border-[#FFED6D] animate-control-bounce hover:scale-110 transition-transform duration-200",style:{animationDelay:"0.1s"},children:"↑ Jump"}),B.jsx("div",{"trae-inspector-start-line":"245","trae-inspector-start-column":"14","trae-inspector-end-line":"245","trae-inspector-end-column":"224","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%86%93%20Roll%22%2C%22textStartLine%22%3A%22245%22%2C%22textStartColumn%22%3A%22213%22%2C%22textEndLine%22%3A%22245%22%2C%22textEndColumn%22%3A%22219%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#6AEEFD] text-[#354093] px-3 py-1 rounded-lg border-2 border-[#FFED6D] animate-control-bounce hover:scale-110 transition-transform duration-200",style:{animationDelay:"0.2s"},children:"↓ Roll"}),B.jsx("div",{"trae-inspector-start-line":"246","trae-inspector-start-column":"14","trae-inspector-end-line":"246","trae-inspector-end-column":"226","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%93%B1%20Swipe%22%2C%22textStartLine%22%3A%22246%22%2C%22textStartColumn%22%3A%22213%22%2C%22textEndLine%22%3A%22246%22%2C%22textEndColumn%22%3A%22221%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#6AEEFD] text-[#354093] px-3 py-1 rounded-lg border-2 border-[#FFED6D] animate-control-bounce hover:scale-110 transition-transform duration-200",style:{animationDelay:"0.3s"},children:"📱 Swipe"})]})]})})]}),B.jsx("div",{"trae-inspector-start-line":"253","trae-inspector-start-column":"6","trae-inspector-end-line":"259","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-center p-6 relative z-10 animate-fade-in-up",style:{animationDelay:"1.4s"},children:B.jsx("div",{"trae-inspector-start-line":"254","trae-inspector-start-column":"8","trae-inspector-end-line":"258","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#E31902] border-4 border-[#FFED6D] rounded-2xl px-6 py-3 inline-block transform -rotate-1 shadow-lg animate-wiggle-slow hover:scale-105 transition-transform duration-300",children:B.jsx("p",{"trae-inspector-start-line":"255","trae-inspector-start-column":"10","trae-inspector-end-line":"257","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/MainMenu.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%92%B0%20COLLECT%20COINS%20%E2%80%A2%20%F0%9F%9A%AB%20AVOID%20OBSTACLES%20%E2%80%A2%20%F0%9F%8F%86%20BEAT%20HIGH%20SCORE!%22%2C%22textStartLine%22%3A%22255%22%2C%22textStartColumn%22%3A%22134%22%2C%22textEndLine%22%3A%22257%22%2C%22textEndColumn%22%3A%2211%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#FFED6D] text-lg font-black animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"💰 COLLECT COINS • 🚫 AVOID OBSTACLES • 🏆 BEAT HIGH SCORE!"})})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="178",bv=0,Yh=1,Fv=2,i2=1,s2=2,jr=3,Di=0,vn=1,Xr=2,Ci=0,Ws=1,od=2,qh=3,$h=4,Dv=5,Ji=100,Rv=101,Pv=102,Lv=103,Uv=104,Nv=200,Iv=201,kv=202,Ov=203,ld=204,cd=205,Bv=206,zv=207,Hv=208,Gv=209,Vv=210,Wv=211,jv=212,Xv=213,Yv=214,ud=0,dd=1,fd=2,Ys=3,pd=4,hd=5,md=6,gd=7,a2=0,qv=1,$v=2,bi=0,Kv=1,Zv=2,Jv=3,o2=4,Qv=5,ex=6,tx=7,l2=300,qs=301,$s=302,vd=303,xd=304,zl=306,_d=1e3,ts=1001,yd=1002,gr=1003,nx=1004,sl=1005,br=1006,Au=1007,ns=1008,Fr=1009,c2=1010,u2=1011,za=1012,Qd=1013,rs=1014,Yr=1015,Wa=1016,ef=1017,tf=1018,Ha=1020,d2=35902,f2=1021,p2=1022,mr=1023,Ga=1026,Va=1027,h2=1028,nf=1029,m2=1030,rf=1031,sf=1033,Dl=33776,Rl=33777,Pl=33778,Ll=33779,Sd=35840,Ed=35841,Md=35842,wd=35843,Ad=36196,Td=37492,Cd=37496,bd=37808,Fd=37809,Dd=37810,Rd=37811,Pd=37812,Ld=37813,Ud=37814,Nd=37815,Id=37816,kd=37817,Od=37818,Bd=37819,zd=37820,Hd=37821,Ul=36492,Gd=36494,Vd=36495,g2=36283,Wd=36284,jd=36285,Xd=36286,rx=3200,ix=3201,v2=0,sx=1,Ti="",rr="srgb",Ks="srgb-linear",Il="linear",kt="srgb",bs=7680,Kh=519,ax=512,ox=513,lx=514,x2=515,cx=516,ux=517,dx=518,fx=519,Zh=35044,Jh="300 es",qr=2e3,kl=2001;class Js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=Math.PI/180,Yd=180/Math.PI;function ja(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[n&63|128]+wn[n>>8&255]+"-"+wn[n>>16&255]+wn[n>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function Tt(s,e,n){return Math.max(e,Math.min(n,s))}function px(s,e){return(s%e+e)%e}function Cu(s,e,n){return(1-n)*s+n*e}function La(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,n=0){Dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6],this.y=o[1]*n+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Tt(this.x,e.x,n.x),this.y=Tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Tt(this.x,e,n),this.y=Tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*i-u*o+e.x,this.y=l*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xa{constructor(e=0,n=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=o}static slerpFlat(e,n,i,o,l,u,f){let h=i[o+0],g=i[o+1],_=i[o+2],p=i[o+3];const v=l[u+0],S=l[u+1],M=l[u+2],A=l[u+3];if(f===0){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=p;return}if(f===1){e[n+0]=v,e[n+1]=S,e[n+2]=M,e[n+3]=A;return}if(p!==A||h!==v||g!==S||_!==M){let y=1-f;const x=h*v+g*S+_*M+p*A,U=x>=0?1:-1,R=1-x*x;if(R>Number.EPSILON){const W=Math.sqrt(R),O=Math.atan2(W,x*U);y=Math.sin(y*O)/W,f=Math.sin(f*O)/W}const b=f*U;if(h=h*y+v*b,g=g*y+S*b,_=_*y+M*b,p=p*y+A*b,y===1-f){const W=1/Math.sqrt(h*h+g*g+_*_+p*p);h*=W,g*=W,_*=W,p*=W}}e[n]=h,e[n+1]=g,e[n+2]=_,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,o,l,u){const f=i[o],h=i[o+1],g=i[o+2],_=i[o+3],p=l[u],v=l[u+1],S=l[u+2],M=l[u+3];return e[n]=f*M+_*p+h*S-g*v,e[n+1]=h*M+_*v+g*p-f*S,e[n+2]=g*M+_*S+f*v-h*p,e[n+3]=_*M-f*p-h*v-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,o){return this._x=e,this._y=n,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,g=f(i/2),_=f(o/2),p=f(l/2),v=h(i/2),S=h(o/2),M=h(l/2);switch(u){case"XYZ":this._x=v*_*p+g*S*M,this._y=g*S*p-v*_*M,this._z=g*_*M+v*S*p,this._w=g*_*p-v*S*M;break;case"YXZ":this._x=v*_*p+g*S*M,this._y=g*S*p-v*_*M,this._z=g*_*M-v*S*p,this._w=g*_*p+v*S*M;break;case"ZXY":this._x=v*_*p-g*S*M,this._y=g*S*p+v*_*M,this._z=g*_*M+v*S*p,this._w=g*_*p-v*S*M;break;case"ZYX":this._x=v*_*p-g*S*M,this._y=g*S*p+v*_*M,this._z=g*_*M-v*S*p,this._w=g*_*p+v*S*M;break;case"YZX":this._x=v*_*p+g*S*M,this._y=g*S*p+v*_*M,this._z=g*_*M-v*S*p,this._w=g*_*p-v*S*M;break;case"XZY":this._x=v*_*p-g*S*M,this._y=g*S*p-v*_*M,this._z=g*_*M+v*S*p,this._w=g*_*p+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],o=n[4],l=n[8],u=n[1],f=n[5],h=n[9],g=n[2],_=n[6],p=n[10],v=i+f+p;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-g)*S,this._z=(u-o)*S}else if(i>f&&i>p){const S=2*Math.sqrt(1+i-f-p);this._w=(_-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+g)/S}else if(f>p){const S=2*Math.sqrt(1+f-i-p);this._w=(l-g)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+p-i-f);this._w=(u-o)/S,this._x=(l+g)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,n/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,o=e._y,l=e._z,u=e._w,f=n._x,h=n._y,g=n._z,_=n._w;return this._x=i*_+u*f+o*g-l*h,this._y=o*_+u*h+l*f-i*g,this._z=l*_+u*g+i*h-o*f,this._w=u*_-i*f-o*h-l*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,o=this._y,l=this._z,u=this._w;let f=u*e._w+i*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=i,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*i+n*this._x,this._y=S*o+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const g=Math.sqrt(h),_=Math.atan2(g,f),p=Math.sin((1-n)*_)/g,v=Math.sin(n*_)/g;return this._w=u*p+this._w*v,this._x=i*p+this._x*v,this._y=o*p+this._y*v,this._z=l*p+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*i+l[6]*o,this.y=l[1]*n+l[4]*i+l[7]*o,this.z=l[2]*n+l[5]*i+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*i+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*i+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*i+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*i+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,i=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,g=2*(u*o-f*i),_=2*(f*n-l*o),p=2*(l*i-u*n);return this.x=n+h*g+u*p-f*_,this.y=i+h*_+f*g-l*p,this.z=o+h*p+l*_-u*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*o,this.y=l[1]*n+l[5]*i+l[9]*o,this.z=l[2]*n+l[6]*i+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Tt(this.x,e.x,n.x),this.y=Tt(this.y,e.y,n.y),this.z=Tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Tt(this.x,e,n),this.y=Tt(this.y,e,n),this.z=Tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,o=e.y,l=e.z,u=n.x,f=n.y,h=n.z;return this.x=o*h-l*f,this.y=l*u-i*h,this.z=i*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return n*n+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const o=Math.sin(n)*e;return this.x=o*Math.sin(i),this.y=Math.cos(n)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new J,Qh=new Xa;class gt{constructor(e,n,i,o,l,u,f,h,g){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,o,l,u,f,h,g)}set(e,n,i,o,l,u,f,h,g){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=n,_[4]=l,_[5]=h,_[6]=i,_[7]=u,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,o=n.elements,l=this.elements,u=i[0],f=i[3],h=i[6],g=i[1],_=i[4],p=i[7],v=i[2],S=i[5],M=i[8],A=o[0],y=o[3],x=o[6],U=o[1],R=o[4],b=o[7],W=o[2],O=o[5],k=o[8];return l[0]=u*A+f*U+h*W,l[3]=u*y+f*R+h*O,l[6]=u*x+f*b+h*k,l[1]=g*A+_*U+p*W,l[4]=g*y+_*R+p*O,l[7]=g*x+_*b+p*k,l[2]=v*A+S*U+M*W,l[5]=v*y+S*R+M*O,l[8]=v*x+S*b+M*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],g=e[7],_=e[8];return n*u*_-n*f*g-i*l*_+i*f*h+o*l*g-o*u*h}invert(){const e=this.elements,n=e[0],i=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],g=e[7],_=e[8],p=_*u-f*g,v=f*h-_*l,S=g*l-u*h,M=n*p+i*v+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=p*A,e[1]=(o*g-_*i)*A,e[2]=(f*i-o*u)*A,e[3]=v*A,e[4]=(_*n-o*h)*A,e[5]=(o*l-f*n)*A,e[6]=S*A,e[7]=(i*h-g*n)*A,e[8]=(u*n-i*l)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,o,l,u,f){const h=Math.cos(l),g=Math.sin(l);return this.set(i*h,i*g,-i*(h*u+g*f)+u+e,-o*g,o*h,-o*(-g*u+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Fu.makeScale(e,n)),this}rotate(e){return this.premultiply(Fu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let o=0;o<9;o++)if(n[o]!==i[o])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fu=new gt;function _2(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hx(){const s=Ol("canvas");return s.style.display="block",s}const em={};function js(s){s in em||(em[s]=!0,console.warn(s))}function mx(s,e,n){return new Promise(function(i,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:i()}}setTimeout(l,n)})}function gx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tm=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nm=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xx(){const s={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===kt&&(o.r=$r(o.r),o.g=$r(o.g),o.b=$r(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(o.r=Xs(o.r),o.g=Xs(o.g),o.b=Xs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ti?Il:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Ks]:{primaries:e,whitePoint:i,transfer:Il,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:rr},outputColorSpaceConfig:{drawingBufferColorSpace:rr}},[rr]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:rr}}}),s}const Lt=xx();function $r(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class _x{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fs===void 0&&(Fs=Ol("canvas")),Fs.width=e.width,Fs.height=e.height;const o=Fs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=Fs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=$r(l[u]/255)*255;return i.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($r(n[i]/255)*255):n[i]=$r(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yx=0;class af{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Du(o[u].image)):l.push(Du(o[u]))}else l=Du(o);i.url=l}return n||(e.images[this.uuid]=i),i}}function Du(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_x.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sx=0;const Ru=new J;class Bn extends Js{constructor(e=Bn.DEFAULT_IMAGE,n=Bn.DEFAULT_MAPPING,i=ts,o=ts,l=br,u=ns,f=mr,h=Fr,g=Bn.DEFAULT_ANISOTROPY,_=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=ja(),this.name="",this.source=new af(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ru).x}get height(){return this.source.getSize(Ru).y}get depth(){return this.source.getSize(Ru).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==l2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=l2;Bn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,i=0,o=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,o){return this.x=e,this.y=n,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*i+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*i+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*i+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*i+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,o,l;const h=e.elements,g=h[0],_=h[4],p=h[8],v=h[1],S=h[5],M=h[9],A=h[2],y=h[6],x=h[10];if(Math.abs(_-v)<.01&&Math.abs(p-A)<.01&&Math.abs(M-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(p+A)<.1&&Math.abs(M+y)<.1&&Math.abs(g+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(g+1)/2,b=(S+1)/2,W=(x+1)/2,O=(_+v)/4,k=(p+A)/4,V=(M+y)/4;return R>b&&R>W?R<.01?(i=0,o=.707106781,l=.707106781):(i=Math.sqrt(R),o=O/i,l=k/i):b>W?b<.01?(i=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),i=O/o,l=V/o):W<.01?(i=.707106781,o=.707106781,l=0):(l=Math.sqrt(W),i=k/l,o=V/l),this.set(i,o,l,n),this}let U=Math.sqrt((y-M)*(y-M)+(p-A)*(p-A)+(v-_)*(v-_));return Math.abs(U)<.001&&(U=1),this.x=(y-M)/U,this.y=(p-A)/U,this.z=(v-_)/U,this.w=Math.acos((g+S+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Tt(this.x,e.x,n.x),this.y=Tt(this.y,e.y,n.y),this.z=Tt(this.z,e.z,n.z),this.w=Tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Tt(this.x,e,n),this.y=Tt(this.y,e,n),this.z=Tt(this.z,e,n),this.w=Tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ex extends Js{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:br,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const o={width:e,height:n,depth:i.depth},l=new Bn(o);this.textures=[];const u=i.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:br,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=i,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new af(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends Ex{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class y2 extends Bn{constructor(e=null,n=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:o},this.magFilter=gr,this.minFilter=gr,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mx extends Bn{constructor(e=null,n=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:o},this.magFilter=gr,this.minFilter=gr,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(dr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(dr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=dr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,dr):dr.fromBufferAttribute(l,u),dr.applyMatrix4(e.matrixWorld),this.expandByPoint(dr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),al.copy(i.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dr),dr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),ol.subVectors(this.max,Ua),Ds.subVectors(e.a,Ua),Rs.subVectors(e.b,Ua),Ps.subVectors(e.c,Ua),xi.subVectors(Rs,Ds),_i.subVectors(Ps,Rs),Wi.subVectors(Ds,Ps);let n=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Wi.z,Wi.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Wi.z,0,-Wi.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Wi.y,Wi.x,0];return!Pu(n,Ds,Rs,Ps,ol)||(n=[1,0,0,0,1,0,0,0,1],!Pu(n,Ds,Rs,Ps,ol))?!1:(ll.crossVectors(xi,_i),n=[ll.x,ll.y,ll.z],Pu(n,Ds,Rs,Ps,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zr=[new J,new J,new J,new J,new J,new J,new J,new J],dr=new J,al=new Ya,Ds=new J,Rs=new J,Ps=new J,xi=new J,_i=new J,Wi=new J,Ua=new J,ol=new J,ll=new J,ji=new J;function Pu(s,e,n,i,o){for(let l=0,u=s.length-3;l<=u;l+=3){ji.fromArray(s,l);const f=o.x*Math.abs(ji.x)+o.y*Math.abs(ji.y)+o.z*Math.abs(ji.z),h=e.dot(ji),g=n.dot(ji),_=i.dot(ji);if(Math.max(-Math.max(h,g,_),Math.min(h,g,_))>f)return!1}return!0}const wx=new Ya,Na=new J,Lu=new J;class Hl{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):wx.setFromPoints(e).getCenter(i);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const n=Na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),o=(i-this.radius)*.5;this.center.addScaledVector(Na,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Lu)),this.expandByPoint(Na.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hr=new J,Uu=new J,cl=new J,yi=new J,Nu=new J,ul=new J,Iu=new J;class S2{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Hr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hr.copy(this.origin).addScaledVector(this.direction,n),Hr.distanceToSquared(e))}distanceSqToSegment(e,n,i,o){Uu.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(Uu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(cl),f=yi.dot(this.direction),h=-yi.dot(cl),g=yi.lengthSq(),_=Math.abs(1-u*u);let p,v,S,M;if(_>0)if(p=u*h-f,v=u*f-h,M=l*_,p>=0)if(v>=-M)if(v<=M){const A=1/_;p*=A,v*=A,S=p*(p+u*v+2*f)+v*(u*p+v+2*h)+g}else v=l,p=Math.max(0,-(u*v+f)),S=-p*p+v*(v+2*h)+g;else v=-l,p=Math.max(0,-(u*v+f)),S=-p*p+v*(v+2*h)+g;else v<=-M?(p=Math.max(0,-(-u*l+f)),v=p>0?-l:Math.min(Math.max(-l,-h),l),S=-p*p+v*(v+2*h)+g):v<=M?(p=0,v=Math.min(Math.max(-l,-h),l),S=v*(v+2*h)+g):(p=Math.max(0,-(u*l+f)),v=p>0?l:Math.min(Math.max(-l,-h),l),S=-p*p+v*(v+2*h)+g);else v=u>0?-l:l,p=Math.max(0,-(u*v+f)),S=-p*p+v*(v+2*h)+g;return i&&i.copy(this.origin).addScaledVector(this.direction,p),o&&o.copy(Uu).addScaledVector(cl,v),S}intersectSphere(e,n){Hr.subVectors(e.center,this.origin);const i=Hr.dot(this.direction),o=Hr.dot(Hr)-i*i,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=i-u,h=i+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,o,l,u,f,h;const g=1/this.direction.x,_=1/this.direction.y,p=1/this.direction.z,v=this.origin;return g>=0?(i=(e.min.x-v.x)*g,o=(e.max.x-v.x)*g):(i=(e.max.x-v.x)*g,o=(e.min.x-v.x)*g),_>=0?(l=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(l=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),i>u||l>o||((l>i||isNaN(i))&&(i=l),(u<o||isNaN(o))&&(o=u),p>=0?(f=(e.min.z-v.z)*p,h=(e.max.z-v.z)*p):(f=(e.max.z-v.z)*p,h=(e.min.z-v.z)*p),i>h||f>o)||((f>i||i!==i)&&(i=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(i>=0?i:o,n)}intersectsBox(e){return this.intersectBox(e,Hr)!==null}intersectTriangle(e,n,i,o,l){Nu.subVectors(n,e),ul.subVectors(i,e),Iu.crossVectors(Nu,ul);let u=this.direction.dot(Iu),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;yi.subVectors(this.origin,e);const h=f*this.direction.dot(ul.crossVectors(yi,ul));if(h<0)return null;const g=f*this.direction.dot(Nu.cross(yi));if(g<0||h+g>u)return null;const _=-f*yi.dot(Iu);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,i,o,l,u,f,h,g,_,p,v,S,M,A,y){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,o,l,u,f,h,g,_,p,v,S,M,A,y)}set(e,n,i,o,l,u,f,h,g,_,p,v,S,M,A,y){const x=this.elements;return x[0]=e,x[4]=n,x[8]=i,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=h,x[2]=g,x[6]=_,x[10]=p,x[14]=v,x[3]=S,x[7]=M,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),u=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*o,n[1]=i[1]*o,n[2]=i[2]*o,n[3]=0,n[4]=i[4]*l,n[5]=i[5]*l,n[6]=i[6]*l,n[7]=0,n[8]=i[8]*u,n[9]=i[9]*u,n[10]=i[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,o=e.y,l=e.z,u=Math.cos(i),f=Math.sin(i),h=Math.cos(o),g=Math.sin(o),_=Math.cos(l),p=Math.sin(l);if(e.order==="XYZ"){const v=u*_,S=u*p,M=f*_,A=f*p;n[0]=h*_,n[4]=-h*p,n[8]=g,n[1]=S+M*g,n[5]=v-A*g,n[9]=-f*h,n[2]=A-v*g,n[6]=M+S*g,n[10]=u*h}else if(e.order==="YXZ"){const v=h*_,S=h*p,M=g*_,A=g*p;n[0]=v+A*f,n[4]=M*f-S,n[8]=u*g,n[1]=u*p,n[5]=u*_,n[9]=-f,n[2]=S*f-M,n[6]=A+v*f,n[10]=u*h}else if(e.order==="ZXY"){const v=h*_,S=h*p,M=g*_,A=g*p;n[0]=v-A*f,n[4]=-u*p,n[8]=M+S*f,n[1]=S+M*f,n[5]=u*_,n[9]=A-v*f,n[2]=-u*g,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const v=u*_,S=u*p,M=f*_,A=f*p;n[0]=h*_,n[4]=M*g-S,n[8]=v*g+A,n[1]=h*p,n[5]=A*g+v,n[9]=S*g-M,n[2]=-g,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const v=u*h,S=u*g,M=f*h,A=f*g;n[0]=h*_,n[4]=A-v*p,n[8]=M*p+S,n[1]=p,n[5]=u*_,n[9]=-f*_,n[2]=-g*_,n[6]=S*p+M,n[10]=v-A*p}else if(e.order==="XZY"){const v=u*h,S=u*g,M=f*h,A=f*g;n[0]=h*_,n[4]=-p,n[8]=g*_,n[1]=v*p+A,n[5]=u*_,n[9]=S*p-M,n[2]=M*p-S,n[6]=f*_,n[10]=A*p+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ax,e,Tx)}lookAt(e,n,i){const o=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Si.crossVectors(i,Wn),Si.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Si.crossVectors(i,Wn)),Si.normalize(),dl.crossVectors(Wn,Si),o[0]=Si.x,o[4]=dl.x,o[8]=Wn.x,o[1]=Si.y,o[5]=dl.y,o[9]=Wn.y,o[2]=Si.z,o[6]=dl.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,o=n.elements,l=this.elements,u=i[0],f=i[4],h=i[8],g=i[12],_=i[1],p=i[5],v=i[9],S=i[13],M=i[2],A=i[6],y=i[10],x=i[14],U=i[3],R=i[7],b=i[11],W=i[15],O=o[0],k=o[4],V=o[8],F=o[12],T=o[1],I=o[5],ne=o[9],Y=o[13],ce=o[2],de=o[6],K=o[10],oe=o[14],z=o[3],fe=o[7],ie=o[11],N=o[15];return l[0]=u*O+f*T+h*ce+g*z,l[4]=u*k+f*I+h*de+g*fe,l[8]=u*V+f*ne+h*K+g*ie,l[12]=u*F+f*Y+h*oe+g*N,l[1]=_*O+p*T+v*ce+S*z,l[5]=_*k+p*I+v*de+S*fe,l[9]=_*V+p*ne+v*K+S*ie,l[13]=_*F+p*Y+v*oe+S*N,l[2]=M*O+A*T+y*ce+x*z,l[6]=M*k+A*I+y*de+x*fe,l[10]=M*V+A*ne+y*K+x*ie,l[14]=M*F+A*Y+y*oe+x*N,l[3]=U*O+R*T+b*ce+W*z,l[7]=U*k+R*I+b*de+W*fe,l[11]=U*V+R*ne+b*K+W*ie,l[15]=U*F+R*Y+b*oe+W*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],g=e[13],_=e[2],p=e[6],v=e[10],S=e[14],M=e[3],A=e[7],y=e[11],x=e[15];return M*(+l*h*p-o*g*p-l*f*v+i*g*v+o*f*S-i*h*S)+A*(+n*h*S-n*g*v+l*u*v-o*u*S+o*g*_-l*h*_)+y*(+n*g*p-n*f*S-l*u*p+i*u*S+l*f*_-i*g*_)+x*(-o*f*_-n*h*p+n*f*v+o*u*p-i*u*v+i*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],g=e[7],_=e[8],p=e[9],v=e[10],S=e[11],M=e[12],A=e[13],y=e[14],x=e[15],U=p*y*g-A*v*g+A*h*S-f*y*S-p*h*x+f*v*x,R=M*v*g-_*y*g-M*h*S+u*y*S+_*h*x-u*v*x,b=_*A*g-M*p*g+M*f*S-u*A*S-_*f*x+u*p*x,W=M*p*h-_*A*h-M*f*v+u*A*v+_*f*y-u*p*y,O=n*U+i*R+o*b+l*W;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=U*k,e[1]=(A*v*l-p*y*l-A*o*S+i*y*S+p*o*x-i*v*x)*k,e[2]=(f*y*l-A*h*l+A*o*g-i*y*g-f*o*x+i*h*x)*k,e[3]=(p*h*l-f*v*l-p*o*g+i*v*g+f*o*S-i*h*S)*k,e[4]=R*k,e[5]=(_*y*l-M*v*l+M*o*S-n*y*S-_*o*x+n*v*x)*k,e[6]=(M*h*l-u*y*l-M*o*g+n*y*g+u*o*x-n*h*x)*k,e[7]=(u*v*l-_*h*l+_*o*g-n*v*g-u*o*S+n*h*S)*k,e[8]=b*k,e[9]=(M*p*l-_*A*l-M*i*S+n*A*S+_*i*x-n*p*x)*k,e[10]=(u*A*l-M*f*l+M*i*g-n*A*g-u*i*x+n*f*x)*k,e[11]=(_*f*l-u*p*l-_*i*g+n*p*g+u*i*S-n*f*S)*k,e[12]=W*k,e[13]=(_*A*o-M*p*o+M*i*v-n*A*v-_*i*y+n*p*y)*k,e[14]=(M*f*o-u*A*o-M*i*h+n*A*h+u*i*y-n*f*y)*k,e[15]=(u*p*o-_*f*o+_*i*h-n*p*h-u*i*v+n*f*v)*k,this}scale(e){const n=this.elements,i=e.x,o=e.y,l=e.z;return n[0]*=i,n[4]*=o,n[8]*=l,n[1]*=i,n[5]*=o,n[9]*=l,n[2]*=i,n[6]*=o,n[10]*=l,n[3]*=i,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,o))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),o=Math.sin(n),l=1-i,u=e.x,f=e.y,h=e.z,g=l*u,_=l*f;return this.set(g*u+i,g*f-o*h,g*h+o*f,0,g*f+o*h,_*f+i,_*h-o*u,0,g*h-o*f,_*h+o*u,l*h*h+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,o,l,u){return this.set(1,i,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,i){const o=this.elements,l=n._x,u=n._y,f=n._z,h=n._w,g=l+l,_=u+u,p=f+f,v=l*g,S=l*_,M=l*p,A=u*_,y=u*p,x=f*p,U=h*g,R=h*_,b=h*p,W=i.x,O=i.y,k=i.z;return o[0]=(1-(A+x))*W,o[1]=(S+b)*W,o[2]=(M-R)*W,o[3]=0,o[4]=(S-b)*O,o[5]=(1-(v+x))*O,o[6]=(y+U)*O,o[7]=0,o[8]=(M+R)*k,o[9]=(y-U)*k,o[10]=(1-(v+A))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,i){const o=this.elements;let l=Ls.set(o[0],o[1],o[2]).length();const u=Ls.set(o[4],o[5],o[6]).length(),f=Ls.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],fr.copy(this);const g=1/l,_=1/u,p=1/f;return fr.elements[0]*=g,fr.elements[1]*=g,fr.elements[2]*=g,fr.elements[4]*=_,fr.elements[5]*=_,fr.elements[6]*=_,fr.elements[8]*=p,fr.elements[9]*=p,fr.elements[10]*=p,n.setFromRotationMatrix(fr),i.x=l,i.y=u,i.z=f,this}makePerspective(e,n,i,o,l,u,f=qr){const h=this.elements,g=2*l/(n-e),_=2*l/(i-o),p=(n+e)/(n-e),v=(i+o)/(i-o);let S,M;if(f===qr)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(f===kl)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=_,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,i,o,l,u,f=qr){const h=this.elements,g=1/(n-e),_=1/(i-o),p=1/(u-l),v=(n+e)*g,S=(i+o)*_;let M,A;if(f===qr)M=(u+l)*p,A=-2*p;else if(f===kl)M=l*p,A=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*g,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=A,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let o=0;o<16;o++)if(n[o]!==i[o])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ls=new J,fr=new Xt,Ax=new J(0,0,0),Tx=new J(1,1,1),Si=new J,dl=new J,Wn=new J,rm=new Xt,im=new Xa;class Dr{constructor(e=0,n=0,i=0,o=Dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,o=this._order){return this._x=e,this._y=n,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],g=o[5],_=o[9],p=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,g)):(this._y=Math.atan2(-p,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-p,S),this._z=Math.atan2(-u,g)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,g));break;case"YZX":this._z=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-p,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,g),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return im.setFromEuler(this),this.setFromQuaternion(im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dr.DEFAULT_ORDER="XYZ";class E2{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cx=0;const sm=new J,Us=new Xa,Gr=new Xt,fl=new J,Ia=new J,bx=new J,Fx=new Xa,am=new J(1,0,0),om=new J(0,1,0),lm=new J(0,0,1),cm={type:"added"},Dx={type:"removed"},Ns={type:"childadded",child:null},ku={type:"childremoved",child:null};class xn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new J,n=new Dr,i=new Xa,o=new J(1,1,1);function l(){i.setFromEuler(n,!1)}function u(){n.setFromQuaternion(i,void 0,!1)}n._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Xt},normalMatrix:{value:new gt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(am,e)}rotateY(e){return this.rotateOnAxis(om,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,n){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(am,e)}translateY(e){return this.translateOnAxis(om,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fl.copy(e):fl.set(e,n,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gr.lookAt(Ia,fl,this.up):Gr.lookAt(fl,Ia,this.up),this.quaternion.setFromRotationMatrix(Gr),o&&(Gr.extractRotation(o.matrixWorld),Us.setFromRotationMatrix(Gr),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Dx),ku.child=e,this.dispatchEvent(ku),ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,bx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,Fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,o=n.length;i<o;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,o=n.length;i<o;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,o=n.length;i<o;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let g=0,_=h.length;g<_;g++){const p=h[g];l(e.shapes,p)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,g=this.material.length;h<g;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),g=u(e.textures),_=u(e.images),p=u(e.shapes),v=u(e.skeletons),S=u(e.animations),M=u(e.nodes);f.length>0&&(i.geometries=f),h.length>0&&(i.materials=h),g.length>0&&(i.textures=g),_.length>0&&(i.images=_),p.length>0&&(i.shapes=p),v.length>0&&(i.skeletons=v),S.length>0&&(i.animations=S),M.length>0&&(i.nodes=M)}return i.object=o,i;function u(f){const h=[];for(const g in f){const _=f[g];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}xn.DEFAULT_UP=new J(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pr=new J,Vr=new J,Ou=new J,Wr=new J,Is=new J,ks=new J,um=new J,Bu=new J,zu=new J,Hu=new J,Gu=new Ot,Vu=new Ot,Wu=new Ot;class hr{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,o){o.subVectors(i,n),pr.subVectors(e,n),o.cross(pr);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,i,o,l){pr.subVectors(o,n),Vr.subVectors(i,n),Ou.subVectors(e,n);const u=pr.dot(pr),f=pr.dot(Vr),h=pr.dot(Ou),g=Vr.dot(Vr),_=Vr.dot(Ou),p=u*g-f*f;if(p===0)return l.set(0,0,0),null;const v=1/p,S=(g*h-f*_)*v,M=(u*_-f*h)*v;return l.set(1-S-M,M,S)}static containsPoint(e,n,i,o){return this.getBarycoord(e,n,i,o,Wr)===null?!1:Wr.x>=0&&Wr.y>=0&&Wr.x+Wr.y<=1}static getInterpolation(e,n,i,o,l,u,f,h){return this.getBarycoord(e,n,i,o,Wr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Wr.x),h.addScaledVector(u,Wr.y),h.addScaledVector(f,Wr.z),h)}static getInterpolatedAttribute(e,n,i,o,l,u){return Gu.setScalar(0),Vu.setScalar(0),Wu.setScalar(0),Gu.fromBufferAttribute(e,n),Vu.fromBufferAttribute(e,i),Wu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Gu,l.x),u.addScaledVector(Vu,l.y),u.addScaledVector(Wu,l.z),u}static isFrontFacing(e,n,i,o){return pr.subVectors(i,n),Vr.subVectors(e,n),pr.cross(Vr).dot(o)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,o){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,i,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pr.subVectors(this.c,this.b),Vr.subVectors(this.a,this.b),pr.cross(Vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,o,l){return hr.getInterpolation(e,this.a,this.b,this.c,n,i,o,l)}containsPoint(e){return hr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,o=this.b,l=this.c;let u,f;Is.subVectors(o,i),ks.subVectors(l,i),Bu.subVectors(e,i);const h=Is.dot(Bu),g=ks.dot(Bu);if(h<=0&&g<=0)return n.copy(i);zu.subVectors(e,o);const _=Is.dot(zu),p=ks.dot(zu);if(_>=0&&p<=_)return n.copy(o);const v=h*p-_*g;if(v<=0&&h>=0&&_<=0)return u=h/(h-_),n.copy(i).addScaledVector(Is,u);Hu.subVectors(e,l);const S=Is.dot(Hu),M=ks.dot(Hu);if(M>=0&&S<=M)return n.copy(l);const A=S*g-h*M;if(A<=0&&g>=0&&M<=0)return f=g/(g-M),n.copy(i).addScaledVector(ks,f);const y=_*M-S*p;if(y<=0&&p-_>=0&&S-M>=0)return um.subVectors(l,o),f=(p-_)/(p-_+(S-M)),n.copy(o).addScaledVector(um,f);const x=1/(y+A+v);return u=A*x,f=v*x,n.copy(i).addScaledVector(Is,u).addScaledVector(ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const M2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},pl={h:0,s:0,l:0};function ju(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ct{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=rr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,o=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Lt.colorSpaceToWorking(this,o),this}setHSL(e,n,i,o=Lt.workingColorSpace){if(e=px(e,1),n=Tt(n,0,1),i=Tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+n):i+n-i*n,u=2*i-l;this.r=ju(u,l,e+1/3),this.g=ju(u,l,e),this.b=ju(u,l,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,n=rr){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=rr){const i=M2[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rr){return Lt.workingToColorSpace(An.copy(this),e),Math.round(Tt(An.r*255,0,255))*65536+Math.round(Tt(An.g*255,0,255))*256+Math.round(Tt(An.b*255,0,255))}getHexString(e=rr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.workingToColorSpace(An.copy(this),n);const i=An.r,o=An.g,l=An.b,u=Math.max(i,o,l),f=Math.min(i,o,l);let h,g;const _=(f+u)/2;if(f===u)h=0,g=0;else{const p=u-f;switch(g=_<=.5?p/(u+f):p/(2-u-f),u){case i:h=(o-l)/p+(o<l?6:0);break;case o:h=(l-i)/p+2;break;case l:h=(i-o)/p+4;break}h/=6}return e.h=h,e.s=g,e.l=_,e}getRGB(e,n=Lt.workingColorSpace){return Lt.workingToColorSpace(An.copy(this),n),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=rr){Lt.workingToColorSpace(An.copy(this),e);const n=An.r,i=An.g,o=An.b;return e!==rr?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(pl);const i=Cu(Ei.h,pl.h,n),o=Cu(Ei.s,pl.s,n),l=Cu(Ei.l,pl.l,n);return this.setHSL(i,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*i+l[6]*o,this.g=l[1]*n+l[4]*i+l[7]*o,this.b=l[2]*n+l[5]*i+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Ct;Ct.NAMES=M2;let Rx=0;class Qs extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Ws,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ld&&(i.blendSrc=this.blendSrc),this.blendDst!==cd&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const o=n.length;i=new Array(o);for(let l=0;l!==o;++l)i[l]=n[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qi extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dr,this.combine=a2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new J,hl=new Dt;let Px=0;class vr{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Px++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zh,this.updateRanges=[],this.gpuType=Yr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix3(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=La(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=La(n,this.array)),n}setX(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=La(n,this.array)),n}setY(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=La(n,this.array)),n}setZ(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=La(n,this.array)),n}setW(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),i=kn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,o){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),i=kn(i,this.array),o=kn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,n,i,o,l){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),i=kn(i,this.array),o=kn(o,this.array),l=kn(l,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zh&&(e.usage=this.usage),e}}class w2 extends vr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class A2 extends vr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yn extends vr{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Lx=0;const nr=new Xt,Xu=new xn,Os=new J,jn=new Ya,ka=new Ya,pn=new J;class xr extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_2(e)?A2:w2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new gt().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nr.makeRotationFromQuaternion(e),this.applyMatrix4(nr),this}rotateX(e){return nr.makeRotationX(e),this.applyMatrix4(nr),this}rotateY(e){return nr.makeRotationY(e),this.applyMatrix4(nr),this}rotateZ(e){return nr.makeRotationZ(e),this.applyMatrix4(nr),this}translate(e,n,i){return nr.makeTranslation(e,n,i),this.applyMatrix4(nr),this}scale(e,n,i){return nr.makeScale(e,n,i),this.applyMatrix4(nr),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Yn(i,3))}else{const i=Math.min(e.length,n.count);for(let o=0;o<i;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,o=n.length;i<o;i++){const l=n[i];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];ka.setFromBufferAttribute(f),this.morphTargetsRelative?(pn.addVectors(jn.min,ka.min),jn.expandByPoint(pn),pn.addVectors(jn.max,ka.max),jn.expandByPoint(pn)):(jn.expandByPoint(ka.min),jn.expandByPoint(ka.max))}jn.getCenter(i);let o=0;for(let l=0,u=e.count;l<u;l++)pn.fromBufferAttribute(e,l),o=Math.max(o,i.distanceToSquared(pn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],h=this.morphTargetsRelative;for(let g=0,_=f.count;g<_;g++)pn.fromBufferAttribute(f,g),h&&(Os.fromBufferAttribute(e,g),pn.add(Os)),o=Math.max(o,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vr(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let V=0;V<i.count;V++)f[V]=new J,h[V]=new J;const g=new J,_=new J,p=new J,v=new Dt,S=new Dt,M=new Dt,A=new J,y=new J;function x(V,F,T){g.fromBufferAttribute(i,V),_.fromBufferAttribute(i,F),p.fromBufferAttribute(i,T),v.fromBufferAttribute(l,V),S.fromBufferAttribute(l,F),M.fromBufferAttribute(l,T),_.sub(g),p.sub(g),S.sub(v),M.sub(v);const I=1/(S.x*M.y-M.x*S.y);isFinite(I)&&(A.copy(_).multiplyScalar(M.y).addScaledVector(p,-S.y).multiplyScalar(I),y.copy(p).multiplyScalar(S.x).addScaledVector(_,-M.x).multiplyScalar(I),f[V].add(A),f[F].add(A),f[T].add(A),h[V].add(y),h[F].add(y),h[T].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let V=0,F=U.length;V<F;++V){const T=U[V],I=T.start,ne=T.count;for(let Y=I,ce=I+ne;Y<ce;Y+=3)x(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const R=new J,b=new J,W=new J,O=new J;function k(V){W.fromBufferAttribute(o,V),O.copy(W);const F=f[V];R.copy(F),R.sub(W.multiplyScalar(W.dot(F))).normalize(),b.crossVectors(O,F);const I=b.dot(h[V])<0?-1:1;u.setXYZW(V,R.x,R.y,R.z,I)}for(let V=0,F=U.length;V<F;++V){const T=U[V],I=T.start,ne=T.count;for(let Y=I,ce=I+ne;Y<ce;Y+=3)k(e.getX(Y+0)),k(e.getX(Y+1)),k(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let v=0,S=i.count;v<S;v++)i.setXYZ(v,0,0,0);const o=new J,l=new J,u=new J,f=new J,h=new J,g=new J,_=new J,p=new J;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),A=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(n,M),l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),_.subVectors(u,l),p.subVectors(o,l),_.cross(p),f.fromBufferAttribute(i,M),h.fromBufferAttribute(i,A),g.fromBufferAttribute(i,y),f.add(_),h.add(_),g.add(_),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(A,h.x,h.y,h.z),i.setXYZ(y,g.x,g.y,g.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),_.subVectors(u,l),p.subVectors(o,l),_.cross(p),i.setXYZ(v+0,_.x,_.y,_.z),i.setXYZ(v+1,_.x,_.y,_.z),i.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)pn.fromBufferAttribute(e,n),pn.normalize(),e.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function e(f,h){const g=f.array,_=f.itemSize,p=f.normalized,v=new g.constructor(h.length*_);let S=0,M=0;for(let A=0,y=h.length;A<y;A++){f.isInterleavedBufferAttribute?S=h[A]*f.data.stride+f.offset:S=h[A]*_;for(let x=0;x<_;x++)v[M++]=g[S++]}return new vr(v,_,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xr,i=this.index.array,o=this.attributes;for(const f in o){const h=o[f],g=e(h,i);n.setAttribute(f,g)}const l=this.morphAttributes;for(const f in l){const h=[],g=l[f];for(let _=0,p=g.length;_<p;_++){const v=g[_],S=e(v,i);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const g=u[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const g in h)h[g]!==void 0&&(e[g]=h[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const h in i){const g=i[h];e.data.attributes[h]=g.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const g=this.morphAttributes[h],_=[];for(let p=0,v=g.length;p<v;p++){const S=g[p];_.push(S.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const g in o){const _=o[g];this.setAttribute(g,_.clone(n))}const l=e.morphAttributes;for(const g in l){const _=[],p=l[g];for(let v=0,S=p.length;v<S;v++)_.push(p[v].clone(n));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let g=0,_=u.length;g<_;g++){const p=u[g];this.addGroup(p.start,p.count,p.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dm=new Xt,Xi=new S2,ml=new Hl,fm=new J,gl=new J,vl=new J,xl=new J,Yu=new J,_l=new J,pm=new J,yl=new J;class Kt extends xn{constructor(e=new xr,n=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const o=n[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const i=this.geometry,o=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){_l.set(0,0,0);for(let h=0,g=l.length;h<g;h++){const _=f[h],p=l[h];_!==0&&(Yu.fromBufferAttribute(p,e),u?_l.addScaledVector(Yu,_):_l.addScaledVector(Yu.sub(n),_))}n.add(_l)}return n}raycast(e,n){const i=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(l),Xi.copy(e.ray).recast(e.near),!(ml.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(ml,fm)===null||Xi.origin.distanceToSquared(fm)>(e.far-e.near)**2))&&(dm.copy(l).invert(),Xi.copy(e.ray).applyMatrix4(dm),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xi)))}_computeIntersections(e,n,i){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,g=l.attributes.uv,_=l.attributes.uv1,p=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,A=v.length;M<A;M++){const y=v[M],x=u[y.materialIndex],U=Math.max(y.start,S.start),R=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let b=U,W=R;b<W;b+=3){const O=f.getX(b),k=f.getX(b+1),V=f.getX(b+2);o=Sl(this,x,e,i,g,_,p,O,k,V),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(f.count,S.start+S.count);for(let y=M,x=A;y<x;y+=3){const U=f.getX(y),R=f.getX(y+1),b=f.getX(y+2);o=Sl(this,u,e,i,g,_,p,U,R,b),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,A=v.length;M<A;M++){const y=v[M],x=u[y.materialIndex],U=Math.max(y.start,S.start),R=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let b=U,W=R;b<W;b+=3){const O=b,k=b+1,V=b+2;o=Sl(this,x,e,i,g,_,p,O,k,V),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let y=M,x=A;y<x;y+=3){const U=y,R=y+1,b=y+2;o=Sl(this,u,e,i,g,_,p,U,R,b),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Ux(s,e,n,i,o,l,u,f){let h;if(e.side===vn?h=i.intersectTriangle(u,l,o,!0,f):h=i.intersectTriangle(o,l,u,e.side===Di,f),h===null)return null;yl.copy(f),yl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(yl);return g<n.near||g>n.far?null:{distance:g,point:yl.clone(),object:s}}function Sl(s,e,n,i,o,l,u,f,h,g){s.getVertexPosition(f,gl),s.getVertexPosition(h,vl),s.getVertexPosition(g,xl);const _=Ux(s,e,n,i,gl,vl,xl,pm);if(_){const p=new J;hr.getBarycoord(pm,gl,vl,xl,p),o&&(_.uv=hr.getInterpolatedAttribute(o,f,h,g,p,new Dt)),l&&(_.uv1=hr.getInterpolatedAttribute(l,f,h,g,p,new Dt)),u&&(_.normal=hr.getInterpolatedAttribute(u,f,h,g,p,new J),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:h,c:g,normal:new J,materialIndex:0};hr.getNormal(gl,vl,xl,v.normal),_.face=v,_.barycoord=p}return _}class Cr extends xr{constructor(e=1,n=1,i=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],g=[],_=[],p=[];let v=0,S=0;M("z","y","x",-1,-1,i,n,e,u,l,0),M("z","y","x",1,-1,i,n,-e,u,l,1),M("x","z","y",1,1,e,i,n,o,u,2),M("x","z","y",1,-1,e,i,-n,o,u,3),M("x","y","z",1,-1,e,n,i,o,l,4),M("x","y","z",-1,-1,e,n,-i,o,l,5),this.setIndex(h),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(p,2));function M(A,y,x,U,R,b,W,O,k,V,F){const T=b/k,I=W/V,ne=b/2,Y=W/2,ce=O/2,de=k+1,K=V+1;let oe=0,z=0;const fe=new J;for(let ie=0;ie<K;ie++){const N=ie*I-Y;for(let se=0;se<de;se++){const ye=se*T-ne;fe[A]=ye*U,fe[y]=N*R,fe[x]=ce,g.push(fe.x,fe.y,fe.z),fe[A]=0,fe[y]=0,fe[x]=O>0?1:-1,_.push(fe.x,fe.y,fe.z),p.push(se/k),p.push(1-ie/V),oe+=1}}for(let ie=0;ie<V;ie++)for(let N=0;N<k;N++){const se=v+N+de*ie,ye=v+N+de*(ie+1),X=v+(N+1)+de*(ie+1),ue=v+(N+1)+de*ie;h.push(se,ye,ue),h.push(ye,X,ue),z+=6}f.addGroup(S,z,F),S+=z,v+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const n in s){e[n]={};for(const i in s[n]){const o=s[n][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=o.clone():Array.isArray(o)?e[n][i]=o.slice():e[n][i]=o}}return e}function Dn(s){const e={};for(let n=0;n<s.length;n++){const i=Zs(s[n]);for(const o in i)e[o]=i[o]}return e}function Nx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function T2(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Ix={clone:Zs,merge:Dn};var kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kx,this.fragmentShader=Ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class C2 extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=qr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new J,hm=new Dt,mm=new Dt;class Xn extends C2{constructor(e=50,n=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan(Tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,n){return this.getViewBounds(e,hm,mm),n.subVectors(mm,hm)}setViewOffset(e,n,i,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tu*.5*this.fov)/this.zoom,i=2*n,o=this.aspect*i,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,g=u.fullHeight;l+=u.offsetX*o/h,n-=u.offsetY*i/g,o*=u.width/h,i*=u.height/g}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bs=-90,zs=1;class Bx extends xn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Xn(Bs,zs,e,n);o.layers=this.layers,this.add(o);const l=new Xn(Bs,zs,e,n);l.layers=this.layers,this.add(l);const u=new Xn(Bs,zs,e,n);u.layers=this.layers,this.add(u);const f=new Xn(Bs,zs,e,n);f.layers=this.layers,this.add(f);const h=new Xn(Bs,zs,e,n);h.layers=this.layers,this.add(h);const g=new Xn(Bs,zs,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,o,l,u,f,h]=n;for(const g of n)this.remove(g);if(e===qr)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===kl)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,g,_]=this.children,p=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(n,l),e.setRenderTarget(i,1,o),e.render(n,u),e.setRenderTarget(i,2,o),e.render(n,f),e.setRenderTarget(i,3,o),e.render(n,h),e.setRenderTarget(i,4,o),e.render(n,g),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,o),e.render(n,_),e.setRenderTarget(p,v,S),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class b2 extends Bn{constructor(e=[],n=qs,i,o,l,u,f,h,g,_){super(e,n,i,o,l,u,f,h,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zx extends is{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new b2(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Cr(5,5,5),l=new Ri({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ci});l.uniforms.tEquirect.value=n;const u=new Kt(o,l),f=n.minFilter;return n.minFilter===ns&&(n.minFilter=br),new Bx(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,i=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,i,o);e.setRenderTarget(l)}}class El extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hx={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){u=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,i),x=this._getHandJoint(g,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],v=_.position.distanceTo(p.position),S=.02,M=.005;g.inputState.pinching&&v>S+M?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&v<=S-M&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,i),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,i),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),g!==null&&(g.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new El;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class of{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ct(e),this.near=n,this.far=i}clone(){return new of(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gx extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dr,this.environmentIntensity=1,this.environmentRotation=new Dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $u=new J,Vx=new J,Wx=new gt;class Ki{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,o){return this.normal.set(e,n,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const o=$u.subVectors(i,n).cross(Vx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta($u),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Wx.getNormalMatrix(e),o=this.coplanarPoint($u).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new Hl,jx=new Dt(.5,.5),Ml=new J;class lf{constructor(e=new Ki,n=new Ki,i=new Ki,o=new Ki,l=new Ki,u=new Ki){this.planes=[e,n,i,o,l,u]}set(e,n,i,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(i),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=qr){const i=this.planes,o=e.elements,l=o[0],u=o[1],f=o[2],h=o[3],g=o[4],_=o[5],p=o[6],v=o[7],S=o[8],M=o[9],A=o[10],y=o[11],x=o[12],U=o[13],R=o[14],b=o[15];if(i[0].setComponents(h-l,v-g,y-S,b-x).normalize(),i[1].setComponents(h+l,v+g,y+S,b+x).normalize(),i[2].setComponents(h+u,v+_,y+M,b+U).normalize(),i[3].setComponents(h-u,v-_,y-M,b-U).normalize(),i[4].setComponents(h-f,v-p,y-A,b-R).normalize(),n===qr)i[5].setComponents(h+f,v+p,y+A,b+R).normalize();else if(n===kl)i[5].setComponents(f,p,A,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);const n=jx.distanceTo(e.center);return Yi.radius=.7071067811865476+n,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const n=this.planes,i=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const o=n[i];if(Ml.x=o.normal.x>0?e.max.x:e.min.x,Ml.y=o.normal.y>0?e.max.y:e.min.y,Ml.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class F2 extends Qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gm=new Xt,qd=new S2,wl=new Hl,Al=new J;class Xx extends xn{constructor(e=new xr,n=new F2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(o),wl.radius+=l,e.ray.intersectsSphere(wl)===!1)return;gm.copy(o).invert(),qd.copy(e.ray).applyMatrix4(gm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,g=i.index,p=i.attributes.position;if(g!==null){const v=Math.max(0,u.start),S=Math.min(g.count,u.start+u.count);for(let M=v,A=S;M<A;M++){const y=g.getX(M);Al.fromBufferAttribute(p,y),vm(Al,y,h,o,e,n,this)}}else{const v=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let M=v,A=S;M<A;M++)Al.fromBufferAttribute(p,M),vm(Al,M,h,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const o=n[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function vm(s,e,n,i,o,l,u){const f=qd.distanceSqToPoint(s);if(f<n){const h=new J;qd.closestPointToPoint(s,h),h.applyMatrix4(i);const g=o.ray.origin.distanceTo(h);if(g<o.near||g>o.far)return;l.push({distance:g,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class D2 extends Bn{constructor(e,n,i=rs,o,l,u,f=gr,h=gr,g,_=Ga,p=1){if(_!==Ga&&_!==Va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:p};super(v,o,l,u,f,h,_,i,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new af(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Bl extends xr{constructor(e=1,n=1,i=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const g=this;o=Math.floor(o),l=Math.floor(l);const _=[],p=[],v=[],S=[];let M=0;const A=[],y=i/2;let x=0;U(),u===!1&&(e>0&&R(!0),n>0&&R(!1)),this.setIndex(_),this.setAttribute("position",new Yn(p,3)),this.setAttribute("normal",new Yn(v,3)),this.setAttribute("uv",new Yn(S,2));function U(){const b=new J,W=new J;let O=0;const k=(n-e)/i;for(let V=0;V<=l;V++){const F=[],T=V/l,I=T*(n-e)+e;for(let ne=0;ne<=o;ne++){const Y=ne/o,ce=Y*h+f,de=Math.sin(ce),K=Math.cos(ce);W.x=I*de,W.y=-T*i+y,W.z=I*K,p.push(W.x,W.y,W.z),b.set(de,k,K).normalize(),v.push(b.x,b.y,b.z),S.push(Y,1-T),F.push(M++)}A.push(F)}for(let V=0;V<o;V++)for(let F=0;F<l;F++){const T=A[F][V],I=A[F+1][V],ne=A[F+1][V+1],Y=A[F][V+1];(e>0||F!==0)&&(_.push(T,I,Y),O+=3),(n>0||F!==l-1)&&(_.push(I,ne,Y),O+=3)}g.addGroup(x,O,0),x+=O}function R(b){const W=M,O=new Dt,k=new J;let V=0;const F=b===!0?e:n,T=b===!0?1:-1;for(let ne=1;ne<=o;ne++)p.push(0,y*T,0),v.push(0,T,0),S.push(.5,.5),M++;const I=M;for(let ne=0;ne<=o;ne++){const ce=ne/o*h+f,de=Math.cos(ce),K=Math.sin(ce);k.x=F*K,k.y=y*T,k.z=F*de,p.push(k.x,k.y,k.z),v.push(0,T,0),O.x=de*.5+.5,O.y=K*.5*T+.5,S.push(O.x,O.y),M++}for(let ne=0;ne<o;ne++){const Y=W+ne,ce=I+ne;b===!0?_.push(ce,ce+1,Y):_.push(ce+1,ce,Y),V+=3}g.addGroup(x,V,b===!0?1:2),x+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qa extends xr{constructor(e=1,n=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:o};const l=e/2,u=n/2,f=Math.floor(i),h=Math.floor(o),g=f+1,_=h+1,p=e/f,v=n/h,S=[],M=[],A=[],y=[];for(let x=0;x<_;x++){const U=x*v-u;for(let R=0;R<g;R++){const b=R*p-l;M.push(b,-U,0),A.push(0,0,1),y.push(R/f),y.push(1-x/h)}}for(let x=0;x<h;x++)for(let U=0;U<f;U++){const R=U+g*x,b=U+g*(x+1),W=U+1+g*(x+1),O=U+1+g*x;S.push(R,b,O),S.push(b,W,O)}this.setIndex(S),this.setAttribute("position",new Yn(M,3)),this.setAttribute("normal",new Yn(A,3)),this.setAttribute("uv",new Yn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ai extends xr{constructor(e=1,n=32,i=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const h=Math.min(u+f,Math.PI);let g=0;const _=[],p=new J,v=new J,S=[],M=[],A=[],y=[];for(let x=0;x<=i;x++){const U=[],R=x/i;let b=0;x===0&&u===0?b=.5/n:x===i&&h===Math.PI&&(b=-.5/n);for(let W=0;W<=n;W++){const O=W/n;p.x=-e*Math.cos(o+O*l)*Math.sin(u+R*f),p.y=e*Math.cos(u+R*f),p.z=e*Math.sin(o+O*l)*Math.sin(u+R*f),M.push(p.x,p.y,p.z),v.copy(p).normalize(),A.push(v.x,v.y,v.z),y.push(O+b,1-R),U.push(g++)}_.push(U)}for(let x=0;x<i;x++)for(let U=0;U<n;U++){const R=_[x][U+1],b=_[x][U],W=_[x+1][U],O=_[x+1][U+1];(x!==0||u>0)&&S.push(R,b,O),(x!==i-1||h<Math.PI)&&S.push(b,W,O)}this.setIndex(S),this.setAttribute("position",new Yn(M,3)),this.setAttribute("normal",new Yn(A,3)),this.setAttribute("uv",new Yn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wi extends Qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=v2,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yx extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qx extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cf extends xn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ku=new Xt,xm=new J,_m=new J;class R2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Fr,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lf,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;xm.setFromMatrixPosition(e.matrixWorld),n.position.copy(xm),_m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_m),n.updateMatrixWorld(),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ym=new Xt,Oa=new J,Zu=new J;class $x extends R2{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,o=this.matrix,l=e.distance||i.far;l!==i.far&&(i.far=l,i.updateProjectionMatrix()),Oa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Oa),Zu.copy(i.position),Zu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Zu),i.updateMatrixWorld(),o.makeTranslation(-Oa.x,-Oa.y,-Oa.z),ym.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ym)}}class Ju extends cf{constructor(e,n,i=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new $x}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class P2 extends C2{constructor(e=-1,n=1,i=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=i-e,u=i+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=g*this.view.offsetX,u=l+g*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Kx extends R2{constructor(){super(new P2(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zx extends cf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new Kx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jx extends cf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qx extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Sm(s,e,n,i){const o=e_(i);switch(n){case f2:return s*e;case h2:return s*e/o.components*o.byteLength;case nf:return s*e/o.components*o.byteLength;case m2:return s*e*2/o.components*o.byteLength;case rf:return s*e*2/o.components*o.byteLength;case p2:return s*e*3/o.components*o.byteLength;case mr:return s*e*4/o.components*o.byteLength;case sf:return s*e*4/o.components*o.byteLength;case Dl:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ed:case wd:return Math.max(s,16)*Math.max(e,8)/4;case Sd:case Md:return Math.max(s,8)*Math.max(e,8)/2;case Ad:case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ul:case Gd:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case g2:case Wd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jd:case Xd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function e_(s){switch(s){case Fr:case c2:return{byteLength:1,components:1};case za:case u2:case Wa:return{byteLength:2,components:1};case ef:case tf:return{byteLength:2,components:4};case rs:case Qd:case Yr:return{byteLength:4,components:1};case d2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function L2(){let s=null,e=!1,n=null,i=null;function o(l,u){n(l,u),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function t_(s){const e=new WeakMap;function n(f,h){const g=f.array,_=f.usage,p=g.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,g,_),f.onUploadCallback();let S;if(g instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)S=s.HALF_FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=s.SHORT;else if(g instanceof Uint32Array)S=s.UNSIGNED_INT;else if(g instanceof Int32Array)S=s.INT;else if(g instanceof Int8Array)S=s.BYTE;else if(g instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:v,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:p}}function i(f,h,g){const _=h.array,p=h.updateRanges;if(s.bindBuffer(g,f),p.length===0)s.bufferSubData(g,0,_);else{p.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<p.length;S++){const M=p[v],A=p[S];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++v,p[v]=A)}p.length=v+1;for(let S=0,M=p.length;S<M;S++){const A=p[S];s.bufferSubData(g,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,h));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(g.buffer,f,h),g.version=f.version}}return{get:o,remove:l,update:u}}var n_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r_=`#ifdef USE_ALPHAHASH
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
#endif`,i_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l_=`#ifdef USE_AOMAP
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
#endif`,c_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u_=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,d_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m_=`#ifdef USE_IRIDESCENCE
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
#endif`,g_=`#ifdef USE_BUMPMAP
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
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,A_=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,T_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C_=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P_="gl_FragColor = linearToOutputTexel( gl_FragColor );",L_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,N_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I_=`#ifdef USE_ENVMAP
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
#endif`,k_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V_=`#ifdef USE_GRADIENTMAP
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
}`,W_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y_=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,q_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ey=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ty=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ny=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ly=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dy=`#if defined( USE_POINTS_UV )
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
#endif`,fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,my=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
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
#endif`,xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wy=`#ifdef USE_NORMALMAP
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
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,by=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,By=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,zy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gy=`#ifdef USE_SKINNING
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
#endif`,Vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ky=`#ifdef USE_TRANSMISSION
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n1=`uniform sampler2D t2D;
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`#include <common>
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
}`,l1=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c1=`#define DISTANCE
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
}`,u1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`uniform float scale;
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
}`,h1=`uniform vec3 diffuse;
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
}`,m1=`#include <common>
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
}`,g1=`uniform vec3 diffuse;
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
}`,v1=`#define LAMBERT
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
}`,x1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_1=`#define MATCAP
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
}`,y1=`#define MATCAP
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
}`,S1=`#define NORMAL
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
}`,E1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M1=`#define PHONG
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
}`,w1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,A1=`#define STANDARD
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
}`,T1=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,C1=`#define TOON
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
}`,b1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,F1=`uniform float size;
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
}`,D1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,P1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,L1=`uniform float rotation;
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
}`,U1=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:n_,alphahash_pars_fragment:r_,alphamap_fragment:i_,alphamap_pars_fragment:s_,alphatest_fragment:a_,alphatest_pars_fragment:o_,aomap_fragment:l_,aomap_pars_fragment:c_,batching_pars_vertex:u_,batching_vertex:d_,begin_vertex:f_,beginnormal_vertex:p_,bsdfs:h_,iridescence_fragment:m_,bumpmap_pars_fragment:g_,clipping_planes_fragment:v_,clipping_planes_pars_fragment:x_,clipping_planes_pars_vertex:__,clipping_planes_vertex:y_,color_fragment:S_,color_pars_fragment:E_,color_pars_vertex:M_,color_vertex:w_,common:A_,cube_uv_reflection_fragment:T_,defaultnormal_vertex:C_,displacementmap_pars_vertex:b_,displacementmap_vertex:F_,emissivemap_fragment:D_,emissivemap_pars_fragment:R_,colorspace_fragment:P_,colorspace_pars_fragment:L_,envmap_fragment:U_,envmap_common_pars_fragment:N_,envmap_pars_fragment:I_,envmap_pars_vertex:k_,envmap_physical_pars_fragment:q_,envmap_vertex:O_,fog_vertex:B_,fog_pars_vertex:z_,fog_fragment:H_,fog_pars_fragment:G_,gradientmap_pars_fragment:V_,lightmap_pars_fragment:W_,lights_lambert_fragment:j_,lights_lambert_pars_fragment:X_,lights_pars_begin:Y_,lights_toon_fragment:$_,lights_toon_pars_fragment:K_,lights_phong_fragment:Z_,lights_phong_pars_fragment:J_,lights_physical_fragment:Q_,lights_physical_pars_fragment:ey,lights_fragment_begin:ty,lights_fragment_maps:ny,lights_fragment_end:ry,logdepthbuf_fragment:iy,logdepthbuf_pars_fragment:sy,logdepthbuf_pars_vertex:ay,logdepthbuf_vertex:oy,map_fragment:ly,map_pars_fragment:cy,map_particle_fragment:uy,map_particle_pars_fragment:dy,metalnessmap_fragment:fy,metalnessmap_pars_fragment:py,morphinstance_vertex:hy,morphcolor_vertex:my,morphnormal_vertex:gy,morphtarget_pars_vertex:vy,morphtarget_vertex:xy,normal_fragment_begin:_y,normal_fragment_maps:yy,normal_pars_fragment:Sy,normal_pars_vertex:Ey,normal_vertex:My,normalmap_pars_fragment:wy,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Ty,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:by,opaque_fragment:Fy,packing:Dy,premultiplied_alpha_fragment:Ry,project_vertex:Py,dithering_fragment:Ly,dithering_pars_fragment:Uy,roughnessmap_fragment:Ny,roughnessmap_pars_fragment:Iy,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:Oy,shadowmap_vertex:By,shadowmask_pars_fragment:zy,skinbase_vertex:Hy,skinning_pars_vertex:Gy,skinning_vertex:Vy,skinnormal_vertex:Wy,specularmap_fragment:jy,specularmap_pars_fragment:Xy,tonemapping_fragment:Yy,tonemapping_pars_fragment:qy,transmission_fragment:$y,transmission_pars_fragment:Ky,uv_pars_fragment:Zy,uv_pars_vertex:Jy,uv_vertex:Qy,worldpos_vertex:e1,background_vert:t1,background_frag:n1,backgroundCube_vert:r1,backgroundCube_frag:i1,cube_vert:s1,cube_frag:a1,depth_vert:o1,depth_frag:l1,distanceRGBA_vert:c1,distanceRGBA_frag:u1,equirect_vert:d1,equirect_frag:f1,linedashed_vert:p1,linedashed_frag:h1,meshbasic_vert:m1,meshbasic_frag:g1,meshlambert_vert:v1,meshlambert_frag:x1,meshmatcap_vert:_1,meshmatcap_frag:y1,meshnormal_vert:S1,meshnormal_frag:E1,meshphong_vert:M1,meshphong_frag:w1,meshphysical_vert:A1,meshphysical_frag:T1,meshtoon_vert:C1,meshtoon_frag:b1,points_vert:F1,points_frag:D1,shadow_vert:R1,shadow_frag:P1,sprite_vert:L1,sprite_frag:U1},ke={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Tr={basic:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Dn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Dn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Dn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Dn([ke.points,ke.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Dn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Dn([ke.common,ke.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Dn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Dn([ke.sprite,ke.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Dn([ke.common,ke.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Dn([ke.lights,ke.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Tr.physical={uniforms:Dn([Tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Tl={r:0,b:0,g:0},qi=new Dr,N1=new Xt;function I1(s,e,n,i,o,l,u){const f=new Ct(0);let h=l===!0?0:1,g,_,p=null,v=0,S=null;function M(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?n:e).get(b)),b}function A(R){let b=!1;const W=M(R);W===null?x(f,h):W&&W.isColor&&(x(W,1),b=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(R,b){const W=M(b);W&&(W.isCubeTexture||W.mapping===zl)?(_===void 0&&(_=new Kt(new Cr(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Zs(Tr.backgroundCube.uniforms),vertexShader:Tr.backgroundCube.vertexShader,fragmentShader:Tr.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,k,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),qi.copy(b.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),_.material.uniforms.envMap.value=W,_.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(N1.makeRotationFromEuler(qi)),_.material.toneMapped=Lt.getTransfer(W.colorSpace)!==kt,(p!==W||v!==W.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,p=W,v=W.version,S=s.toneMapping),_.layers.enableAll(),R.unshift(_,_.geometry,_.material,0,0,null)):W&&W.isTexture&&(g===void 0&&(g=new Kt(new qa(2,2),new Ri({name:"BackgroundMaterial",uniforms:Zs(Tr.background.uniforms),vertexShader:Tr.background.vertexShader,fragmentShader:Tr.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=W,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.toneMapped=Lt.getTransfer(W.colorSpace)!==kt,W.matrixAutoUpdate===!0&&W.updateMatrix(),g.material.uniforms.uvTransform.value.copy(W.matrix),(p!==W||v!==W.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,p=W,v=W.version,S=s.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null))}function x(R,b){R.getRGB(Tl,T2(s)),i.buffers.color.setClear(Tl.r,Tl.g,Tl.b,b,u)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,b=1){f.set(R),h=b,x(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,x(f,h)},render:A,addToRenderList:y,dispose:U}}function k1(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=v(null);let l=o,u=!1;function f(T,I,ne,Y,ce){let de=!1;const K=p(Y,ne,I);l!==K&&(l=K,g(l.object)),de=S(T,Y,ne,ce),de&&M(T,Y,ne,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,b(T,I,ne,Y),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function h(){return s.createVertexArray()}function g(T){return s.bindVertexArray(T)}function _(T){return s.deleteVertexArray(T)}function p(T,I,ne){const Y=ne.wireframe===!0;let ce=i[T.id];ce===void 0&&(ce={},i[T.id]=ce);let de=ce[I.id];de===void 0&&(de={},ce[I.id]=de);let K=de[Y];return K===void 0&&(K=v(h()),de[Y]=K),K}function v(T){const I=[],ne=[],Y=[];for(let ce=0;ce<n;ce++)I[ce]=0,ne[ce]=0,Y[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:ne,attributeDivisors:Y,object:T,attributes:{},index:null}}function S(T,I,ne,Y){const ce=l.attributes,de=I.attributes;let K=0;const oe=ne.getAttributes();for(const z in oe)if(oe[z].location>=0){const ie=ce[z];let N=de[z];if(N===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(N=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(N=T.instanceColor)),ie===void 0||ie.attribute!==N||N&&ie.data!==N.data)return!0;K++}return l.attributesNum!==K||l.index!==Y}function M(T,I,ne,Y){const ce={},de=I.attributes;let K=0;const oe=ne.getAttributes();for(const z in oe)if(oe[z].location>=0){let ie=de[z];ie===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor));const N={};N.attribute=ie,ie&&ie.data&&(N.data=ie.data),ce[z]=N,K++}l.attributes=ce,l.attributesNum=K,l.index=Y}function A(){const T=l.newAttributes;for(let I=0,ne=T.length;I<ne;I++)T[I]=0}function y(T){x(T,0)}function x(T,I){const ne=l.newAttributes,Y=l.enabledAttributes,ce=l.attributeDivisors;ne[T]=1,Y[T]===0&&(s.enableVertexAttribArray(T),Y[T]=1),ce[T]!==I&&(s.vertexAttribDivisor(T,I),ce[T]=I)}function U(){const T=l.newAttributes,I=l.enabledAttributes;for(let ne=0,Y=I.length;ne<Y;ne++)I[ne]!==T[ne]&&(s.disableVertexAttribArray(ne),I[ne]=0)}function R(T,I,ne,Y,ce,de,K){K===!0?s.vertexAttribIPointer(T,I,ne,ce,de):s.vertexAttribPointer(T,I,ne,Y,ce,de)}function b(T,I,ne,Y){A();const ce=Y.attributes,de=ne.getAttributes(),K=I.defaultAttributeValues;for(const oe in de){const z=de[oe];if(z.location>=0){let fe=ce[oe];if(fe===void 0&&(oe==="instanceMatrix"&&T.instanceMatrix&&(fe=T.instanceMatrix),oe==="instanceColor"&&T.instanceColor&&(fe=T.instanceColor)),fe!==void 0){const ie=fe.normalized,N=fe.itemSize,se=e.get(fe);if(se===void 0)continue;const ye=se.buffer,X=se.type,ue=se.bytesPerElement,Se=X===s.INT||X===s.UNSIGNED_INT||fe.gpuType===Qd;if(fe.isInterleavedBufferAttribute){const xe=fe.data,ve=xe.stride,ge=fe.offset;if(xe.isInstancedInterleavedBuffer){for(let pe=0;pe<z.locationSize;pe++)x(z.location+pe,xe.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let pe=0;pe<z.locationSize;pe++)y(z.location+pe);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let pe=0;pe<z.locationSize;pe++)R(z.location+pe,N/z.locationSize,X,ie,ve*ue,(ge+N/z.locationSize*pe)*ue,Se)}else{if(fe.isInstancedBufferAttribute){for(let xe=0;xe<z.locationSize;xe++)x(z.location+xe,fe.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let xe=0;xe<z.locationSize;xe++)y(z.location+xe);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let xe=0;xe<z.locationSize;xe++)R(z.location+xe,N/z.locationSize,X,ie,N*ue,N/z.locationSize*xe*ue,Se)}}else if(K!==void 0){const ie=K[oe];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(z.location,ie);break;case 3:s.vertexAttrib3fv(z.location,ie);break;case 4:s.vertexAttrib4fv(z.location,ie);break;default:s.vertexAttrib1fv(z.location,ie)}}}}U()}function W(){V();for(const T in i){const I=i[T];for(const ne in I){const Y=I[ne];for(const ce in Y)_(Y[ce].object),delete Y[ce];delete I[ne]}delete i[T]}}function O(T){if(i[T.id]===void 0)return;const I=i[T.id];for(const ne in I){const Y=I[ne];for(const ce in Y)_(Y[ce].object),delete Y[ce];delete I[ne]}delete i[T.id]}function k(T){for(const I in i){const ne=i[I];if(ne[T.id]===void 0)continue;const Y=ne[T.id];for(const ce in Y)_(Y[ce].object),delete Y[ce];delete ne[T.id]}}function V(){F(),u=!0,l!==o&&(l=o,g(l.object))}function F(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:V,resetDefaultState:F,dispose:W,releaseStatesOfGeometry:O,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:y,disableUnusedAttributes:U}}function O1(s,e,n){let i;function o(g){i=g}function l(g,_){s.drawArrays(i,g,_),n.update(_,i,1)}function u(g,_,p){p!==0&&(s.drawArraysInstanced(i,g,_,p),n.update(_,i,p))}function f(g,_,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,g,0,_,0,p);let S=0;for(let M=0;M<p;M++)S+=_[M];n.update(S,i,1)}function h(g,_,p,v){if(p===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<g.length;M++)u(g[M],_[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(i,g,0,_,0,v,0,p);let M=0;for(let A=0;A<p;A++)M+=_[A]*v[A];n.update(M,i,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function B1(s,e,n,i){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==mr&&i.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const V=k===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Fr&&i.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Yr&&!V)}function h(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const _=h(g);_!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",_,"instead."),g=_);const p=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=M>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:p,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:U,maxVaryings:R,maxFragmentUniforms:b,vertexTextures:W,maxSamples:O}}function z1(s){const e=this;let n=null,i=0,o=!1,l=!1;const u=new Ki,f=new gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,v){const S=p.length!==0||v||i!==0||o;return o=v,i=p.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(p,v){n=_(p,v,0)},this.setState=function(p,v,S){const M=p.clippingPlanes,A=p.clipIntersection,y=p.clipShadows,x=s.get(p);if(!o||M===null||M.length===0||l&&!y)l?_(null):g();else{const U=l?0:i,R=U*4;let b=x.clippingState||null;h.value=b,b=_(M,v,R,S);for(let W=0;W!==R;++W)b[W]=n[W];x.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function g(){h.value!==n&&(h.value=n,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function _(p,v,S,M){const A=p!==null?p.length:0;let y=null;if(A!==0){if(y=h.value,M!==!0||y===null){const x=S+A*4,U=v.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<x)&&(y=new Float32Array(x));for(let R=0,b=S;R!==A;++R,b+=4)u.copy(p[R]).applyMatrix4(U,f),u.normal.toArray(y,b),y[b+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function H1(s){let e=new WeakMap;function n(u,f){return f===vd?u.mapping=qs:f===xd&&(u.mapping=$s),u}function i(u){if(u&&u.isTexture){const f=u.mapping;if(f===vd||f===xd)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const g=new zx(h.height);return g.fromEquirectangularTexture(s,u),e.set(u,g),u.addEventListener("dispose",o),n(g.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}const Vs=4,Em=[.125,.215,.35,.446,.526,.582],es=20,Qu=new P2,Mm=new Ct;let ed=null,td=0,nd=0,rd=!1;const Zi=(1+Math.sqrt(5))/2,Hs=1/Zi,wm=[new J(-Zi,Hs,0),new J(Zi,Hs,0),new J(-Hs,0,Zi),new J(Hs,0,Zi),new J(0,Zi,-Hs),new J(0,Zi,Hs),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],G1=new J;class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,o=100,l={}){const{size:u=256,position:f=G1}=l;ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,o,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,td,nd),this._renderer.xr.enabled=rd,e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:br,minFilter:br,generateMipmaps:!1,type:Wa,format:mr,colorSpace:Ks,depthBuffer:!1},o=Tm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V1(l)),this._blurMaterial=W1(l,e,n)}return o}_compileMaterial(e){const n=new Kt(this._lodPlanes[0],e);this._renderer.compile(n,Qu)}_sceneToCubeUV(e,n,i,o,l){const h=new Xn(90,1,n,i),g=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,S=p.toneMapping;p.getClearColor(Mm),p.toneMapping=bi,p.autoClear=!1;const M=new Qi({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),A=new Kt(new Cr,M);let y=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,y=!0):(M.color.copy(Mm),y=!0);for(let U=0;U<6;U++){const R=U%3;R===0?(h.up.set(0,g[U],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[U],l.y,l.z)):R===1?(h.up.set(0,0,g[U]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[U],l.z)):(h.up.set(0,g[U],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[U]));const b=this._cubeSize;Cl(o,R*b,U>2?b:0,b,b),p.setRenderTarget(o),y&&p.render(A,h),p.render(e,h)}A.geometry.dispose(),A.material.dispose(),p.toneMapping=S,p.autoClear=v,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,o=e.mapping===qs||e.mapping===$s;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Kt(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Cl(n,0,0,3*h,2*h),i.setRenderTarget(n),i.render(u,Qu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=wm[(o-l-1)%wm.length];this._blur(e,l-1,l,u,f)}n.autoClear=i}_blur(e,n,i,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,i,o,"latitudinal",l),this._halfBlur(u,e,i,i,o,"longitudinal",l)}_halfBlur(e,n,i,o,l,u,f){const h=this._renderer,g=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,p=new Kt(this._lodPlanes[o],g),v=g.uniforms,S=this._sizeLods[i]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*es-1),A=l/M,y=isFinite(l)?1+Math.floor(_*A):es;y>es&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${es}`);const x=[];let U=0;for(let k=0;k<es;++k){const V=k/A,F=Math.exp(-V*V/2);x.push(F),k===0?U+=F:k<y&&(U+=2*F)}for(let k=0;k<x.length;k++)x[k]=x[k]/U;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:R}=this;v.dTheta.value=M,v.mipInt.value=R-i;const b=this._sizeLods[o],W=3*b*(o>R-Vs?o-R+Vs:0),O=4*(this._cubeSize-b);Cl(n,W,O,3*b,2*b),h.setRenderTarget(n),h.render(p,Qu)}}function V1(s){const e=[],n=[],i=[];let o=s;const l=s-Vs+1+Em.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);n.push(f);let h=1/f;u>s-Vs?h=Em[u-s+Vs-1]:u===0&&(h=0),i.push(h);const g=1/(f-2),_=-g,p=1+g,v=[_,_,p,_,p,p,_,_,p,p,_,p],S=6,M=6,A=3,y=2,x=1,U=new Float32Array(A*M*S),R=new Float32Array(y*M*S),b=new Float32Array(x*M*S);for(let O=0;O<S;O++){const k=O%3*2/3-1,V=O>2?0:-1,F=[k,V,0,k+2/3,V,0,k+2/3,V+1,0,k,V,0,k+2/3,V+1,0,k,V+1,0];U.set(F,A*M*O),R.set(v,y*M*O);const T=[O,O,O,O,O,O];b.set(T,x*M*O)}const W=new xr;W.setAttribute("position",new vr(U,A)),W.setAttribute("uv",new vr(R,y)),W.setAttribute("faceIndex",new vr(b,x)),e.push(W),o>Vs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Tm(s,e,n){const i=new is(s,e,n);return i.texture.mapping=zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cl(s,e,n,i,o){s.viewport.set(e,n,i,o),s.scissor.set(e,n,i,o)}function W1(s,e,n){const i=new Float32Array(es),o=new J(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Cm(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function bm(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function j1(s){let e=new WeakMap,n=null;function i(f){if(f&&f.isTexture){const h=f.mapping,g=h===vd||h===xd,_=h===qs||h===$s;if(g||_){let p=e.get(f);const v=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Am(s)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{const S=f.image;return g&&S&&S.height>0||_&&S&&o(S)?(n===null&&(n=new Am(s)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",l),p.texture):null}}}return f}function o(f){let h=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&h++;return h===g}function l(f){const h=f.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function X1(s){const e={};function n(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const o=n(i);return o===null&&js("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function Y1(s,e,n,i){const o={},l=new WeakMap;function u(p){const v=p.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(p,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function h(p){const v=p.attributes;for(const S in v)e.update(v[S],s.ARRAY_BUFFER)}function g(p){const v=[],S=p.index,M=p.attributes.position;let A=0;if(S!==null){const U=S.array;A=S.version;for(let R=0,b=U.length;R<b;R+=3){const W=U[R+0],O=U[R+1],k=U[R+2];v.push(W,O,O,k,k,W)}}else if(M!==void 0){const U=M.array;A=M.version;for(let R=0,b=U.length/3-1;R<b;R+=3){const W=R+0,O=R+1,k=R+2;v.push(W,O,O,k,k,W)}}else return;const y=new(_2(v)?A2:w2)(v,1);y.version=A;const x=l.get(p);x&&e.remove(x),l.set(p,y)}function _(p){const v=l.get(p);if(v){const S=p.index;S!==null&&v.version<S.version&&g(p)}else g(p);return l.get(p)}return{get:f,update:h,getWireframeAttribute:_}}function q1(s,e,n){let i;function o(v){i=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function h(v,S){s.drawElements(i,S,l,v*u),n.update(S,i,1)}function g(v,S,M){M!==0&&(s.drawElementsInstanced(i,S,l,v*u,M),n.update(S,i,M))}function _(v,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,l,v,0,M);let y=0;for(let x=0;x<M;x++)y+=S[x];n.update(y,i,1)}function p(v,S,M,A){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)g(v[x]/u,S[x],A[x]);else{y.multiDrawElementsInstancedWEBGL(i,S,0,l,v,0,A,0,M);let x=0;for(let U=0;U<M;U++)x+=S[U]*A[U];n.update(x,i,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=g,this.renderMultiDraw=_,this.renderMultiDrawInstances=p}function $1(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:i}}function K1(s,e,n){const i=new WeakMap,o=new Ot;function l(u,f,h){const g=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,p=_!==void 0?_.length:0;let v=i.get(f);if(v===void 0||v.count!==p){let T=function(){V.dispose(),i.delete(f),f.removeEventListener("dispose",T)};var S=T;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let b=0;M===!0&&(b=1),A===!0&&(b=2),y===!0&&(b=3);let W=f.attributes.position.count*b,O=1;W>e.maxTextureSize&&(O=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const k=new Float32Array(W*O*4*p),V=new y2(k,W,O,p);V.type=Yr,V.needsUpdate=!0;const F=b*4;for(let I=0;I<p;I++){const ne=x[I],Y=U[I],ce=R[I],de=W*O*4*I;for(let K=0;K<ne.count;K++){const oe=K*F;M===!0&&(o.fromBufferAttribute(ne,K),k[de+oe+0]=o.x,k[de+oe+1]=o.y,k[de+oe+2]=o.z,k[de+oe+3]=0),A===!0&&(o.fromBufferAttribute(Y,K),k[de+oe+4]=o.x,k[de+oe+5]=o.y,k[de+oe+6]=o.z,k[de+oe+7]=0),y===!0&&(o.fromBufferAttribute(ce,K),k[de+oe+8]=o.x,k[de+oe+9]=o.y,k[de+oe+10]=o.z,k[de+oe+11]=ce.itemSize===4?o.w:1)}}v={count:p,texture:V,size:new Dt(W,O)},i.set(f,v),f.addEventListener("dispose",T)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let M=0;for(let y=0;y<g.length;y++)M+=g[y];const A=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",g)}h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function Z1(s,e,n,i){let o=new WeakMap;function l(h){const g=i.render.frame,_=h.geometry,p=e.get(h,_);if(o.get(p)!==g&&(e.update(p),o.set(p,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==g&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,g))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==g&&(v.update(),o.set(v,g))}return p}function u(){o=new WeakMap}function f(h){const g=h.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:l,dispose:u}}const U2=new Bn,Fm=new D2(1,1),N2=new y2,I2=new Mx,k2=new b2,Dm=[],Rm=[],Pm=new Float32Array(16),Lm=new Float32Array(9),Um=new Float32Array(4);function ea(s,e,n){const i=s[0];if(i<=0||i>0)return s;const o=e*n;let l=Dm[o];if(l===void 0&&(l=new Float32Array(o),Dm[o]=l),e!==0){i.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function sn(s,e){if(s.length!==e.length)return!1;for(let n=0,i=s.length;n<i;n++)if(s[n]!==e[n])return!1;return!0}function an(s,e){for(let n=0,i=e.length;n<i;n++)s[n]=e[n]}function Gl(s,e){let n=Rm[e];n===void 0&&(n=new Int32Array(e),Rm[e]=n);for(let i=0;i!==e;++i)n[i]=s.allocateTextureUnit();return n}function J1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function Q1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2fv(this.addr,e),an(n,e)}}function eS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(sn(n,e))return;s.uniform3fv(this.addr,e),an(n,e)}}function tS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4fv(this.addr,e),an(n,e)}}function nS(s,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(n,e)}else{if(sn(n,i))return;Um.set(i),s.uniformMatrix2fv(this.addr,!1,Um),an(n,i)}}function rS(s,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(n,e)}else{if(sn(n,i))return;Lm.set(i),s.uniformMatrix3fv(this.addr,!1,Lm),an(n,i)}}function iS(s,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(n,e)}else{if(sn(n,i))return;Pm.set(i),s.uniformMatrix4fv(this.addr,!1,Pm),an(n,i)}}function sS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function aS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2iv(this.addr,e),an(n,e)}}function oS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;s.uniform3iv(this.addr,e),an(n,e)}}function lS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4iv(this.addr,e),an(n,e)}}function cS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function uS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2uiv(this.addr,e),an(n,e)}}function dS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;s.uniform3uiv(this.addr,e),an(n,e)}}function fS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4uiv(this.addr,e),an(n,e)}}function pS(s,e,n){const i=this.cache,o=n.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Fm.compareFunction=x2,l=Fm):l=U2,n.setTexture2D(e||l,o)}function hS(s,e,n){const i=this.cache,o=n.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),n.setTexture3D(e||I2,o)}function mS(s,e,n){const i=this.cache,o=n.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),n.setTextureCube(e||k2,o)}function gS(s,e,n){const i=this.cache,o=n.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),n.setTexture2DArray(e||N2,o)}function vS(s){switch(s){case 5126:return J1;case 35664:return Q1;case 35665:return eS;case 35666:return tS;case 35674:return nS;case 35675:return rS;case 35676:return iS;case 5124:case 35670:return sS;case 35667:case 35671:return aS;case 35668:case 35672:return oS;case 35669:case 35673:return lS;case 5125:return cS;case 36294:return uS;case 36295:return dS;case 36296:return fS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return mS;case 36289:case 36303:case 36311:case 36292:return gS}}function xS(s,e){s.uniform1fv(this.addr,e)}function _S(s,e){const n=ea(e,this.size,2);s.uniform2fv(this.addr,n)}function yS(s,e){const n=ea(e,this.size,3);s.uniform3fv(this.addr,n)}function SS(s,e){const n=ea(e,this.size,4);s.uniform4fv(this.addr,n)}function ES(s,e){const n=ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function MS(s,e){const n=ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function wS(s,e){const n=ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function AS(s,e){s.uniform1iv(this.addr,e)}function TS(s,e){s.uniform2iv(this.addr,e)}function CS(s,e){s.uniform3iv(this.addr,e)}function bS(s,e){s.uniform4iv(this.addr,e)}function FS(s,e){s.uniform1uiv(this.addr,e)}function DS(s,e){s.uniform2uiv(this.addr,e)}function RS(s,e){s.uniform3uiv(this.addr,e)}function PS(s,e){s.uniform4uiv(this.addr,e)}function LS(s,e,n){const i=this.cache,o=e.length,l=Gl(n,o);sn(i,l)||(s.uniform1iv(this.addr,l),an(i,l));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||U2,l[u])}function US(s,e,n){const i=this.cache,o=e.length,l=Gl(n,o);sn(i,l)||(s.uniform1iv(this.addr,l),an(i,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||I2,l[u])}function NS(s,e,n){const i=this.cache,o=e.length,l=Gl(n,o);sn(i,l)||(s.uniform1iv(this.addr,l),an(i,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||k2,l[u])}function IS(s,e,n){const i=this.cache,o=e.length,l=Gl(n,o);sn(i,l)||(s.uniform1iv(this.addr,l),an(i,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||N2,l[u])}function kS(s){switch(s){case 5126:return xS;case 35664:return _S;case 35665:return yS;case 35666:return SS;case 35674:return ES;case 35675:return MS;case 35676:return wS;case 5124:case 35670:return AS;case 35667:case 35671:return TS;case 35668:case 35672:return CS;case 35669:case 35673:return bS;case 5125:return FS;case 36294:return DS;case 36295:return RS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return LS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return IS}}class OS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=vS(n.type)}}class BS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kS(n.type)}}class zS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,n[f.id],i)}}}const id=/(\w+)(\])?(\[|\.)?/g;function Nm(s,e){s.seq.push(e),s.map[e.id]=e}function HS(s,e,n){const i=s.name,o=i.length;for(id.lastIndex=0;;){const l=id.exec(i),u=id.lastIndex;let f=l[1];const h=l[2]==="]",g=l[3];if(h&&(f=f|0),g===void 0||g==="["&&u+2===o){Nm(n,g===void 0?new OS(f,s,e):new BS(f,s,e));break}else{let p=n.map[f];p===void 0&&(p=new zS(f),Nm(n,p)),n=p}}}class Nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(n,o),u=e.getUniformLocation(n,l.name);HS(l,u,this)}}setValue(e,n,i,o){const l=this.map[n];l!==void 0&&l.setValue(e,i,o)}setOptional(e,n,i){const o=n[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,n,i,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],h=i[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const i=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&i.push(u)}return i}}function Im(s,e,n){const i=s.createShader(e);return s.shaderSource(i,n),s.compileShader(i),i}const GS=37297;let VS=0;function WS(s,e){const n=s.split(`
`),i=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const f=u+1;i.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return i.join(`
`)}const km=new gt;function jS(s){Lt._getMatrix(km,Lt.workingColorSpace,s);const e=`mat3( ${km.elements.map(n=>n.toFixed(4))} )`;switch(Lt.getTransfer(s)){case Il:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Om(s,e,n){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(i&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+o+`

`+WS(s.getShaderSource(e),u)}else return o}function XS(s,e){const n=jS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function YS(s,e){let n;switch(e){case Kv:n="Linear";break;case Zv:n="Reinhard";break;case Jv:n="Cineon";break;case o2:n="ACESFilmic";break;case ex:n="AgX";break;case tx:n="Neutral";break;case Qv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const bl=new J;function qS(){Lt.getLuminanceCoefficients(bl);const s=bl.x.toFixed(4),e=bl.y.toFixed(4),n=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $S(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function KS(s){const e=[];for(const n in s){const i=s[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZS(s,e){const n={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Ba(s){return s!==""}function Bm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JS=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(s){return s.replace(JS,eE)}const QS=new Map;function eE(s,e){let n=_t[e];if(n===void 0){const i=QS.get(e);if(i!==void 0)n=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $d(n)}const tE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(s){return s.replace(tE,nE)}function nE(s,e,n,i){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Gm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===i2?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===s2?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===jr&&(e="SHADOWMAP_TYPE_VSM"),e}function iE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case $s:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function aE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case a2:e="ENVMAP_BLENDING_MULTIPLY";break;case qv:e="ENVMAP_BLENDING_MIX";break;case $v:e="ENVMAP_BLENDING_ADD";break}return e}function oE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function lE(s,e,n,i){const o=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=rE(n),g=iE(n),_=sE(n),p=aE(n),v=oE(n),S=$S(n),M=KS(l),A=o.createProgram();let y,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Ba).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Ba).join(`
`),x.length>0&&(x+=`
`)):(y=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),x=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",n.envMap?"#define "+p:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?_t.tonemapping_pars_fragment:"",n.toneMapping!==bi?YS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,XS("linearToOutputTexel",n.outputColorSpace),qS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ba).join(`
`)),u=$d(u),u=Bm(u,n),u=zm(u,n),f=$d(f),f=Bm(f,n),f=zm(f,n),u=Hm(u),f=Hm(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=U+y+u,b=U+x+f,W=Im(o,o.VERTEX_SHADER,R),O=Im(o,o.FRAGMENT_SHADER,b);o.attachShader(A,W),o.attachShader(A,O),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function k(I){if(s.debug.checkShaderErrors){const ne=o.getProgramInfoLog(A).trim(),Y=o.getShaderInfoLog(W).trim(),ce=o.getShaderInfoLog(O).trim();let de=!0,K=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,W,O);else{const oe=Om(o,W,"vertex"),z=Om(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ne+`
`+oe+`
`+z)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(Y===""||ce==="")&&(K=!1);K&&(I.diagnostics={runnable:de,programLog:ne,vertexShader:{log:Y,prefix:y},fragmentShader:{log:ce,prefix:x}})}o.deleteShader(W),o.deleteShader(O),V=new Nl(o,A),F=ZS(o,A)}let V;this.getUniforms=function(){return V===void 0&&k(this),V};let F;this.getAttributes=function(){return F===void 0&&k(this),F};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(A,GS)),T},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=VS++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=W,this.fragmentShader=O,this}let cE=0;class uE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new dE(e),n.set(e,i)),i}}class dE{constructor(e){this.id=cE++,this.code=e,this.usedTimes=0}}function fE(s,e,n,i,o,l,u){const f=new E2,h=new uE,g=new Set,_=[],p=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(F){return g.add(F),F===0?"uv":`uv${F}`}function y(F,T,I,ne,Y){const ce=ne.fog,de=Y.geometry,K=F.isMeshStandardMaterial?ne.environment:null,oe=(F.isMeshStandardMaterial?n:e).get(F.envMap||K),z=oe&&oe.mapping===zl?oe.image.height:null,fe=M[F.type];F.precision!==null&&(S=o.getMaxPrecision(F.precision),S!==F.precision&&console.warn("THREE.WebGLProgram.getParameters:",F.precision,"not supported, using",S,"instead."));const ie=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,N=ie!==void 0?ie.length:0;let se=0;de.morphAttributes.position!==void 0&&(se=1),de.morphAttributes.normal!==void 0&&(se=2),de.morphAttributes.color!==void 0&&(se=3);let ye,X,ue,Se;if(fe){const St=Tr[fe];ye=St.vertexShader,X=St.fragmentShader}else ye=F.vertexShader,X=F.fragmentShader,h.update(F),ue=h.getVertexShaderID(F),Se=h.getFragmentShaderID(F);const xe=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),ge=Y.isInstancedMesh===!0,pe=Y.isBatchedMesh===!0,Ne=!!F.map,st=!!F.matcap,rt=!!oe,L=!!F.aoMap,At=!!F.lightMap,et=!!F.bumpMap,tt=!!F.normalMap,Be=!!F.displacementMap,dt=!!F.emissiveMap,$e=!!F.metalnessMap,at=!!F.roughnessMap,vt=F.anisotropy>0,D=F.clearcoat>0,w=F.dispersion>0,ee=F.iridescence>0,me=F.sheen>0,_e=F.transmission>0,he=vt&&!!F.anisotropyMap,Ke=D&&!!F.clearcoatMap,De=D&&!!F.clearcoatNormalMap,Ge=D&&!!F.clearcoatRoughnessMap,Xe=ee&&!!F.iridescenceMap,Me=ee&&!!F.iridescenceThicknessMap,ze=me&&!!F.sheenColorMap,ot=me&&!!F.sheenRoughnessMap,nt=!!F.specularMap,Le=!!F.specularColorMap,lt=!!F.specularIntensityMap,G=_e&&!!F.transmissionMap,Ue=_e&&!!F.thicknessMap,Ee=!!F.gradientMap,Oe=!!F.alphaMap,Te=F.alphaTest>0,re=!!F.alphaHash,Pe=!!F.extensions;let Ze=bi;F.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ze=s.toneMapping);const mt={shaderID:fe,shaderType:F.type,shaderName:F.name,vertexShader:ye,fragmentShader:X,defines:F.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:F.isRawShaderMaterial===!0,glslVersion:F.glslVersion,precision:S,batching:pe,batchingColor:pe&&Y._colorsTexture!==null,instancing:ge,instancingColor:ge&&Y.instanceColor!==null,instancingMorph:ge&&Y.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ks,alphaToCoverage:!!F.alphaToCoverage,map:Ne,matcap:st,envMap:rt,envMapMode:rt&&oe.mapping,envMapCubeUVHeight:z,aoMap:L,lightMap:At,bumpMap:et,normalMap:tt,displacementMap:v&&Be,emissiveMap:dt,normalMapObjectSpace:tt&&F.normalMapType===sx,normalMapTangentSpace:tt&&F.normalMapType===v2,metalnessMap:$e,roughnessMap:at,anisotropy:vt,anisotropyMap:he,clearcoat:D,clearcoatMap:Ke,clearcoatNormalMap:De,clearcoatRoughnessMap:Ge,dispersion:w,iridescence:ee,iridescenceMap:Xe,iridescenceThicknessMap:Me,sheen:me,sheenColorMap:ze,sheenRoughnessMap:ot,specularMap:nt,specularColorMap:Le,specularIntensityMap:lt,transmission:_e,transmissionMap:G,thicknessMap:Ue,gradientMap:Ee,opaque:F.transparent===!1&&F.blending===Ws&&F.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Te,alphaHash:re,combine:F.combine,mapUv:Ne&&A(F.map.channel),aoMapUv:L&&A(F.aoMap.channel),lightMapUv:At&&A(F.lightMap.channel),bumpMapUv:et&&A(F.bumpMap.channel),normalMapUv:tt&&A(F.normalMap.channel),displacementMapUv:Be&&A(F.displacementMap.channel),emissiveMapUv:dt&&A(F.emissiveMap.channel),metalnessMapUv:$e&&A(F.metalnessMap.channel),roughnessMapUv:at&&A(F.roughnessMap.channel),anisotropyMapUv:he&&A(F.anisotropyMap.channel),clearcoatMapUv:Ke&&A(F.clearcoatMap.channel),clearcoatNormalMapUv:De&&A(F.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&A(F.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&A(F.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&A(F.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&A(F.sheenColorMap.channel),sheenRoughnessMapUv:ot&&A(F.sheenRoughnessMap.channel),specularMapUv:nt&&A(F.specularMap.channel),specularColorMapUv:Le&&A(F.specularColorMap.channel),specularIntensityMapUv:lt&&A(F.specularIntensityMap.channel),transmissionMapUv:G&&A(F.transmissionMap.channel),thicknessMapUv:Ue&&A(F.thicknessMap.channel),alphaMapUv:Oe&&A(F.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(tt||vt),vertexColors:F.vertexColors,vertexAlphas:F.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!de.attributes.uv&&(Ne||Oe),fog:!!ce,useFog:F.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:F.flatShading===!0&&F.wireframe===!1,sizeAttenuation:F.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:ve,skinning:Y.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:F.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Ne&&F.map.isVideoTexture===!0&&Lt.getTransfer(F.map.colorSpace)===kt,decodeVideoTextureEmissive:dt&&F.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(F.emissiveMap.colorSpace)===kt,premultipliedAlpha:F.premultipliedAlpha,doubleSided:F.side===Xr,flipSided:F.side===vn,useDepthPacking:F.depthPacking>=0,depthPacking:F.depthPacking||0,index0AttributeName:F.index0AttributeName,extensionClipCullDistance:Pe&&F.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&F.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:F.customProgramCacheKey()};return mt.vertexUv1s=g.has(1),mt.vertexUv2s=g.has(2),mt.vertexUv3s=g.has(3),g.clear(),mt}function x(F){const T=[];if(F.shaderID?T.push(F.shaderID):(T.push(F.customVertexShaderID),T.push(F.customFragmentShaderID)),F.defines!==void 0)for(const I in F.defines)T.push(I),T.push(F.defines[I]);return F.isRawShaderMaterial===!1&&(U(T,F),R(T,F),T.push(s.outputColorSpace)),T.push(F.customProgramCacheKey),T.join()}function U(F,T){F.push(T.precision),F.push(T.outputColorSpace),F.push(T.envMapMode),F.push(T.envMapCubeUVHeight),F.push(T.mapUv),F.push(T.alphaMapUv),F.push(T.lightMapUv),F.push(T.aoMapUv),F.push(T.bumpMapUv),F.push(T.normalMapUv),F.push(T.displacementMapUv),F.push(T.emissiveMapUv),F.push(T.metalnessMapUv),F.push(T.roughnessMapUv),F.push(T.anisotropyMapUv),F.push(T.clearcoatMapUv),F.push(T.clearcoatNormalMapUv),F.push(T.clearcoatRoughnessMapUv),F.push(T.iridescenceMapUv),F.push(T.iridescenceThicknessMapUv),F.push(T.sheenColorMapUv),F.push(T.sheenRoughnessMapUv),F.push(T.specularMapUv),F.push(T.specularColorMapUv),F.push(T.specularIntensityMapUv),F.push(T.transmissionMapUv),F.push(T.thicknessMapUv),F.push(T.combine),F.push(T.fogExp2),F.push(T.sizeAttenuation),F.push(T.morphTargetsCount),F.push(T.morphAttributeCount),F.push(T.numDirLights),F.push(T.numPointLights),F.push(T.numSpotLights),F.push(T.numSpotLightMaps),F.push(T.numHemiLights),F.push(T.numRectAreaLights),F.push(T.numDirLightShadows),F.push(T.numPointLightShadows),F.push(T.numSpotLightShadows),F.push(T.numSpotLightShadowsWithMaps),F.push(T.numLightProbes),F.push(T.shadowMapType),F.push(T.toneMapping),F.push(T.numClippingPlanes),F.push(T.numClipIntersection),F.push(T.depthPacking)}function R(F,T){f.disableAll(),T.supportsVertexTextures&&f.enable(0),T.instancing&&f.enable(1),T.instancingColor&&f.enable(2),T.instancingMorph&&f.enable(3),T.matcap&&f.enable(4),T.envMap&&f.enable(5),T.normalMapObjectSpace&&f.enable(6),T.normalMapTangentSpace&&f.enable(7),T.clearcoat&&f.enable(8),T.iridescence&&f.enable(9),T.alphaTest&&f.enable(10),T.vertexColors&&f.enable(11),T.vertexAlphas&&f.enable(12),T.vertexUv1s&&f.enable(13),T.vertexUv2s&&f.enable(14),T.vertexUv3s&&f.enable(15),T.vertexTangents&&f.enable(16),T.anisotropy&&f.enable(17),T.alphaHash&&f.enable(18),T.batching&&f.enable(19),T.dispersion&&f.enable(20),T.batchingColor&&f.enable(21),T.gradientMap&&f.enable(22),F.push(f.mask),f.disableAll(),T.fog&&f.enable(0),T.useFog&&f.enable(1),T.flatShading&&f.enable(2),T.logarithmicDepthBuffer&&f.enable(3),T.reverseDepthBuffer&&f.enable(4),T.skinning&&f.enable(5),T.morphTargets&&f.enable(6),T.morphNormals&&f.enable(7),T.morphColors&&f.enable(8),T.premultipliedAlpha&&f.enable(9),T.shadowMapEnabled&&f.enable(10),T.doubleSided&&f.enable(11),T.flipSided&&f.enable(12),T.useDepthPacking&&f.enable(13),T.dithering&&f.enable(14),T.transmission&&f.enable(15),T.sheen&&f.enable(16),T.opaque&&f.enable(17),T.pointsUvs&&f.enable(18),T.decodeVideoTexture&&f.enable(19),T.decodeVideoTextureEmissive&&f.enable(20),T.alphaToCoverage&&f.enable(21),F.push(f.mask)}function b(F){const T=M[F.type];let I;if(T){const ne=Tr[T];I=Ix.clone(ne.uniforms)}else I=F.uniforms;return I}function W(F,T){let I;for(let ne=0,Y=_.length;ne<Y;ne++){const ce=_[ne];if(ce.cacheKey===T){I=ce,++I.usedTimes;break}}return I===void 0&&(I=new lE(s,T,F,l),_.push(I)),I}function O(F){if(--F.usedTimes===0){const T=_.indexOf(F);_[T]=_[_.length-1],_.pop(),F.destroy()}}function k(F){h.remove(F)}function V(){h.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:b,acquireProgram:W,releaseProgram:O,releaseShaderCache:k,programs:_,dispose:V}}function pE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function i(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:i,update:o,dispose:l}}function hE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wm(){const s=[];let e=0;const n=[],i=[],o=[];function l(){e=0,n.length=0,i.length=0,o.length=0}function u(p,v,S,M,A,y){let x=s[e];return x===void 0?(x={id:p.id,object:p,geometry:v,material:S,groupOrder:M,renderOrder:p.renderOrder,z:A,group:y},s[e]=x):(x.id=p.id,x.object=p,x.geometry=v,x.material=S,x.groupOrder=M,x.renderOrder=p.renderOrder,x.z=A,x.group=y),e++,x}function f(p,v,S,M,A,y){const x=u(p,v,S,M,A,y);S.transmission>0?i.push(x):S.transparent===!0?o.push(x):n.push(x)}function h(p,v,S,M,A,y){const x=u(p,v,S,M,A,y);S.transmission>0?i.unshift(x):S.transparent===!0?o.unshift(x):n.unshift(x)}function g(p,v){n.length>1&&n.sort(p||hE),i.length>1&&i.sort(v||Vm),o.length>1&&o.sort(v||Vm)}function _(){for(let p=e,v=s.length;p<v;p++){const S=s[p];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:i,transparent:o,init:l,push:f,unshift:h,finish:_,sort:g}}function mE(){let s=new WeakMap;function e(i,o){const l=s.get(i);let u;return l===void 0?(u=new Wm,s.set(i,[u])):o>=l.length?(u=new Wm,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function gE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new Ct};break;case"SpotLight":n={position:new J,direction:new J,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=n,n}}}function vE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let xE=0;function _E(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yE(s){const e=new gE,n=vE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)i.probe.push(new J);const o=new J,l=new Xt,u=new Xt;function f(g){let _=0,p=0,v=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let S=0,M=0,A=0,y=0,x=0,U=0,R=0,b=0,W=0,O=0,k=0;g.sort(_E);for(let F=0,T=g.length;F<T;F++){const I=g[F],ne=I.color,Y=I.intensity,ce=I.distance,de=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)_+=ne.r*Y,p+=ne.g*Y,v+=ne.b*Y;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],Y);k++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const oe=I.shadow,z=n.get(I);z.shadowIntensity=oe.intensity,z.shadowBias=oe.bias,z.shadowNormalBias=oe.normalBias,z.shadowRadius=oe.radius,z.shadowMapSize=oe.mapSize,i.directionalShadow[S]=z,i.directionalShadowMap[S]=de,i.directionalShadowMatrix[S]=I.shadow.matrix,U++}i.directional[S]=K,S++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(ne).multiplyScalar(Y),K.distance=ce,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[A]=K;const oe=I.shadow;if(I.map&&(i.spotLightMap[W]=I.map,W++,oe.updateMatrices(I),I.castShadow&&O++),i.spotLightMatrix[A]=oe.matrix,I.castShadow){const z=n.get(I);z.shadowIntensity=oe.intensity,z.shadowBias=oe.bias,z.shadowNormalBias=oe.normalBias,z.shadowRadius=oe.radius,z.shadowMapSize=oe.mapSize,i.spotShadow[A]=z,i.spotShadowMap[A]=de,b++}A++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(ne).multiplyScalar(Y),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=K,y++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const oe=I.shadow,z=n.get(I);z.shadowIntensity=oe.intensity,z.shadowBias=oe.bias,z.shadowNormalBias=oe.normalBias,z.shadowRadius=oe.radius,z.shadowMapSize=oe.mapSize,z.shadowCameraNear=oe.camera.near,z.shadowCameraFar=oe.camera.far,i.pointShadow[M]=z,i.pointShadowMap[M]=de,i.pointShadowMatrix[M]=I.shadow.matrix,R++}i.point[M]=K,M++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(Y),K.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[x]=K,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=p,i.ambient[2]=v;const V=i.hash;(V.directionalLength!==S||V.pointLength!==M||V.spotLength!==A||V.rectAreaLength!==y||V.hemiLength!==x||V.numDirectionalShadows!==U||V.numPointShadows!==R||V.numSpotShadows!==b||V.numSpotMaps!==W||V.numLightProbes!==k)&&(i.directional.length=S,i.spot.length=A,i.rectArea.length=y,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=U,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=b+W-O,i.spotLightMap.length=W,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=k,V.directionalLength=S,V.pointLength=M,V.spotLength=A,V.rectAreaLength=y,V.hemiLength=x,V.numDirectionalShadows=U,V.numPointShadows=R,V.numSpotShadows=b,V.numSpotMaps=W,V.numLightProbes=k,i.version=xE++)}function h(g,_){let p=0,v=0,S=0,M=0,A=0;const y=_.matrixWorldInverse;for(let x=0,U=g.length;x<U;x++){const R=g[x];if(R.isDirectionalLight){const b=i.directional[p];b.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),p++}else if(R.isSpotLight){const b=i.spot[S];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),S++}else if(R.isRectAreaLight){const b=i.rectArea[M];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(y),u.identity(),l.copy(R.matrixWorld),l.premultiply(y),u.extractRotation(l),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),M++}else if(R.isPointLight){const b=i.point[v];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(y),v++}else if(R.isHemisphereLight){const b=i.hemi[A];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(y),A++}}}return{setup:f,setupView:h,state:i}}function jm(s){const e=new yE(s),n=[],i=[];function o(_){g.camera=_,n.length=0,i.length=0}function l(_){n.push(_)}function u(_){i.push(_)}function f(){e.setup(n)}function h(_){e.setupView(n,_)}const g={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:g,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function SE(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new jm(s),e.set(o,[f])):l>=u.length?(f=new jm(s),u.push(f)):f=u[l],f}function i(){e=new WeakMap}return{get:n,dispose:i}}const EE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ME=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wE(s,e,n){let i=new lf;const o=new Dt,l=new Dt,u=new Ot,f=new Yx({depthPacking:ix}),h=new qx,g={},_=n.maxTextureSize,p={[Di]:vn,[vn]:Di,[Xr]:Xr},v=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:EE,fragmentShader:ME}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new xr;M.setAttribute("position",new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Kt(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i2;let x=this.type;this.render=function(O,k,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const F=s.getRenderTarget(),T=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Ci),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const Y=x!==jr&&this.type===jr,ce=x===jr&&this.type!==jr;for(let de=0,K=O.length;de<K;de++){const oe=O[de],z=oe.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const fe=z.getFrameExtents();if(o.multiply(fe),l.copy(z.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/fe.x),o.x=l.x*fe.x,z.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/fe.y),o.y=l.y*fe.y,z.mapSize.y=l.y)),z.map===null||Y===!0||ce===!0){const N=this.type!==jr?{minFilter:gr,magFilter:gr}:{};z.map!==null&&z.map.dispose(),z.map=new is(o.x,o.y,N),z.map.texture.name=oe.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const ie=z.getViewportCount();for(let N=0;N<ie;N++){const se=z.getViewport(N);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),ne.viewport(u),z.updateMatrices(oe,N),i=z.getFrustum(),b(k,V,z.camera,oe,this.type)}z.isPointLightShadow!==!0&&this.type===jr&&U(z,V),z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(F,T,I)};function U(O,k){const V=e.update(A);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new is(o.x,o.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(k,null,V,v,A,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(k,null,V,S,A,null)}function R(O,k,V,F){let T=null;const I=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(I!==void 0)T=I;else if(T=V.isPointLight===!0?h:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const ne=T.uuid,Y=k.uuid;let ce=g[ne];ce===void 0&&(ce={},g[ne]=ce);let de=ce[Y];de===void 0&&(de=T.clone(),ce[Y]=de,k.addEventListener("dispose",W)),T=de}if(T.visible=k.visible,T.wireframe=k.wireframe,F===jr?T.side=k.shadowSide!==null?k.shadowSide:k.side:T.side=k.shadowSide!==null?k.shadowSide:p[k.side],T.alphaMap=k.alphaMap,T.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,T.map=k.map,T.clipShadows=k.clipShadows,T.clippingPlanes=k.clippingPlanes,T.clipIntersection=k.clipIntersection,T.displacementMap=k.displacementMap,T.displacementScale=k.displacementScale,T.displacementBias=k.displacementBias,T.wireframeLinewidth=k.wireframeLinewidth,T.linewidth=k.linewidth,V.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ne=s.properties.get(T);ne.light=V}return T}function b(O,k,V,F,T){if(O.visible===!1)return;if(O.layers.test(k.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&T===jr)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const Y=e.update(O),ce=O.material;if(Array.isArray(ce)){const de=Y.groups;for(let K=0,oe=de.length;K<oe;K++){const z=de[K],fe=ce[z.materialIndex];if(fe&&fe.visible){const ie=R(O,fe,F,T);O.onBeforeShadow(s,O,k,V,Y,ie,z),s.renderBufferDirect(V,null,Y,ie,O,z),O.onAfterShadow(s,O,k,V,Y,ie,z)}}}else if(ce.visible){const de=R(O,ce,F,T);O.onBeforeShadow(s,O,k,V,Y,de,null),s.renderBufferDirect(V,null,Y,de,O,null),O.onAfterShadow(s,O,k,V,Y,de,null)}}const ne=O.children;for(let Y=0,ce=ne.length;Y<ce;Y++)b(ne[Y],k,V,F,T)}function W(O){O.target.removeEventListener("dispose",W);for(const V in g){const F=g[V],T=O.target.uuid;T in F&&(F[T].dispose(),delete F[T])}}}const AE={[ud]:dd,[fd]:md,[pd]:gd,[Ys]:hd,[dd]:ud,[md]:fd,[gd]:pd,[hd]:Ys};function TE(s,e){function n(){let G=!1;const Ue=new Ot;let Ee=null;const Oe=new Ot(0,0,0,0);return{setMask:function(Te){Ee!==Te&&!G&&(s.colorMask(Te,Te,Te,Te),Ee=Te)},setLocked:function(Te){G=Te},setClear:function(Te,re,Pe,Ze,mt){mt===!0&&(Te*=Ze,re*=Ze,Pe*=Ze),Ue.set(Te,re,Pe,Ze),Oe.equals(Ue)===!1&&(s.clearColor(Te,re,Pe,Ze),Oe.copy(Ue))},reset:function(){G=!1,Ee=null,Oe.set(-1,0,0,0)}}}function i(){let G=!1,Ue=!1,Ee=null,Oe=null,Te=null;return{setReversed:function(re){if(Ue!==re){const Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Ue=re;const Ze=Te;Te=null,this.setClear(Ze)}},getReversed:function(){return Ue},setTest:function(re){re?xe(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(re){Ee!==re&&!G&&(s.depthMask(re),Ee=re)},setFunc:function(re){if(Ue&&(re=AE[re]),Oe!==re){switch(re){case ud:s.depthFunc(s.NEVER);break;case dd:s.depthFunc(s.ALWAYS);break;case fd:s.depthFunc(s.LESS);break;case Ys:s.depthFunc(s.LEQUAL);break;case pd:s.depthFunc(s.EQUAL);break;case hd:s.depthFunc(s.GEQUAL);break;case md:s.depthFunc(s.GREATER);break;case gd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=re}},setLocked:function(re){G=re},setClear:function(re){Te!==re&&(Ue&&(re=1-re),s.clearDepth(re),Te=re)},reset:function(){G=!1,Ee=null,Oe=null,Te=null,Ue=!1}}}function o(){let G=!1,Ue=null,Ee=null,Oe=null,Te=null,re=null,Pe=null,Ze=null,mt=null;return{setTest:function(St){G||(St?xe(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(St){Ue!==St&&!G&&(s.stencilMask(St),Ue=St)},setFunc:function(St,Rt,Nt){(Ee!==St||Oe!==Rt||Te!==Nt)&&(s.stencilFunc(St,Rt,Nt),Ee=St,Oe=Rt,Te=Nt)},setOp:function(St,Rt,Nt){(re!==St||Pe!==Rt||Ze!==Nt)&&(s.stencilOp(St,Rt,Nt),re=St,Pe=Rt,Ze=Nt)},setLocked:function(St){G=St},setClear:function(St){mt!==St&&(s.clearStencil(St),mt=St)},reset:function(){G=!1,Ue=null,Ee=null,Oe=null,Te=null,re=null,Pe=null,Ze=null,mt=null}}}const l=new n,u=new i,f=new o,h=new WeakMap,g=new WeakMap;let _={},p={},v=new WeakMap,S=[],M=null,A=!1,y=null,x=null,U=null,R=null,b=null,W=null,O=null,k=new Ct(0,0,0),V=0,F=!1,T=null,I=null,ne=null,Y=null,ce=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,oe=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=oe>=1):z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=oe>=2);let fe=null,ie={};const N=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),ye=new Ot().fromArray(N),X=new Ot().fromArray(se);function ue(G,Ue,Ee,Oe){const Te=new Uint8Array(4),re=s.createTexture();s.bindTexture(G,re),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<Ee;Pe++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Ue+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return re}const Se={};Se[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),u.setFunc(Ys),et(!1),tt(Yh),xe(s.CULL_FACE),L(Ci);function xe(G){_[G]!==!0&&(s.enable(G),_[G]=!0)}function ve(G){_[G]!==!1&&(s.disable(G),_[G]=!1)}function ge(G,Ue){return p[G]!==Ue?(s.bindFramebuffer(G,Ue),p[G]=Ue,G===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=Ue),G===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function pe(G,Ue){let Ee=S,Oe=!1;if(G){Ee=v.get(Ue),Ee===void 0&&(Ee=[],v.set(Ue,Ee));const Te=G.textures;if(Ee.length!==Te.length||Ee[0]!==s.COLOR_ATTACHMENT0){for(let re=0,Pe=Te.length;re<Pe;re++)Ee[re]=s.COLOR_ATTACHMENT0+re;Ee.length=Te.length,Oe=!0}}else Ee[0]!==s.BACK&&(Ee[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(Ee)}function Ne(G){return M!==G?(s.useProgram(G),M=G,!0):!1}const st={[Ji]:s.FUNC_ADD,[Rv]:s.FUNC_SUBTRACT,[Pv]:s.FUNC_REVERSE_SUBTRACT};st[Lv]=s.MIN,st[Uv]=s.MAX;const rt={[Nv]:s.ZERO,[Iv]:s.ONE,[kv]:s.SRC_COLOR,[ld]:s.SRC_ALPHA,[Vv]:s.SRC_ALPHA_SATURATE,[Hv]:s.DST_COLOR,[Bv]:s.DST_ALPHA,[Ov]:s.ONE_MINUS_SRC_COLOR,[cd]:s.ONE_MINUS_SRC_ALPHA,[Gv]:s.ONE_MINUS_DST_COLOR,[zv]:s.ONE_MINUS_DST_ALPHA,[Wv]:s.CONSTANT_COLOR,[jv]:s.ONE_MINUS_CONSTANT_COLOR,[Xv]:s.CONSTANT_ALPHA,[Yv]:s.ONE_MINUS_CONSTANT_ALPHA};function L(G,Ue,Ee,Oe,Te,re,Pe,Ze,mt,St){if(G===Ci){A===!0&&(ve(s.BLEND),A=!1);return}if(A===!1&&(xe(s.BLEND),A=!0),G!==Dv){if(G!==y||St!==F){if((x!==Ji||b!==Ji)&&(s.blendEquation(s.FUNC_ADD),x=Ji,b=Ji),St)switch(G){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case od:s.blendFunc(s.ONE,s.ONE);break;case qh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $h:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case od:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case qh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $h:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}U=null,R=null,W=null,O=null,k.set(0,0,0),V=0,y=G,F=St}return}Te=Te||Ue,re=re||Ee,Pe=Pe||Oe,(Ue!==x||Te!==b)&&(s.blendEquationSeparate(st[Ue],st[Te]),x=Ue,b=Te),(Ee!==U||Oe!==R||re!==W||Pe!==O)&&(s.blendFuncSeparate(rt[Ee],rt[Oe],rt[re],rt[Pe]),U=Ee,R=Oe,W=re,O=Pe),(Ze.equals(k)===!1||mt!==V)&&(s.blendColor(Ze.r,Ze.g,Ze.b,mt),k.copy(Ze),V=mt),y=G,F=!1}function At(G,Ue){G.side===Xr?ve(s.CULL_FACE):xe(s.CULL_FACE);let Ee=G.side===vn;Ue&&(Ee=!Ee),et(Ee),G.blending===Ws&&G.transparent===!1?L(Ci):L(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Oe=G.stencilWrite;f.setTest(Oe),Oe&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),dt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(G){T!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),T=G)}function tt(G){G!==bv?(xe(s.CULL_FACE),G!==I&&(G===Yh?s.cullFace(s.BACK):G===Fv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),I=G}function Be(G){G!==ne&&(K&&s.lineWidth(G),ne=G)}function dt(G,Ue,Ee){G?(xe(s.POLYGON_OFFSET_FILL),(Y!==Ue||ce!==Ee)&&(s.polygonOffset(Ue,Ee),Y=Ue,ce=Ee)):ve(s.POLYGON_OFFSET_FILL)}function $e(G){G?xe(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function at(G){G===void 0&&(G=s.TEXTURE0+de-1),fe!==G&&(s.activeTexture(G),fe=G)}function vt(G,Ue,Ee){Ee===void 0&&(fe===null?Ee=s.TEXTURE0+de-1:Ee=fe);let Oe=ie[Ee];Oe===void 0&&(Oe={type:void 0,texture:void 0},ie[Ee]=Oe),(Oe.type!==G||Oe.texture!==Ue)&&(fe!==Ee&&(s.activeTexture(Ee),fe=Ee),s.bindTexture(G,Ue||Se[G]),Oe.type=G,Oe.texture=Ue)}function D(){const G=ie[fe];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(G){ye.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),ye.copy(G))}function ot(G){X.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),X.copy(G))}function nt(G,Ue){let Ee=g.get(Ue);Ee===void 0&&(Ee=new WeakMap,g.set(Ue,Ee));let Oe=Ee.get(G);Oe===void 0&&(Oe=s.getUniformBlockIndex(Ue,G.name),Ee.set(G,Oe))}function Le(G,Ue){const Oe=g.get(Ue).get(G);h.get(Ue)!==Oe&&(s.uniformBlockBinding(Ue,Oe,G.__bindingPointIndex),h.set(Ue,Oe))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},fe=null,ie={},p={},v=new WeakMap,S=[],M=null,A=!1,y=null,x=null,U=null,R=null,b=null,W=null,O=null,k=new Ct(0,0,0),V=0,F=!1,T=null,I=null,ne=null,Y=null,ce=null,ye.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:xe,disable:ve,bindFramebuffer:ge,drawBuffers:pe,useProgram:Ne,setBlending:L,setMaterial:At,setFlipSided:et,setCullFace:tt,setLineWidth:Be,setPolygonOffset:dt,setScissorTest:$e,activeTexture:at,bindTexture:vt,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:ee,texImage2D:Xe,texImage3D:Me,updateUBOMapping:nt,uniformBlockBinding:Le,texStorage2D:De,texStorage3D:Ge,texSubImage2D:me,texSubImage3D:_e,compressedTexSubImage2D:he,compressedTexSubImage3D:Ke,scissor:ze,viewport:ot,reset:lt}}function CE(s,e,n,i,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Dt,_=new WeakMap;let p;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,w){return S?new OffscreenCanvas(D,w):Ol("canvas")}function A(D,w,ee){let me=1;const _e=vt(D);if((_e.width>ee||_e.height>ee)&&(me=ee/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const he=Math.floor(me*_e.width),Ke=Math.floor(me*_e.height);p===void 0&&(p=M(he,Ke));const De=w?M(he,Ke):p;return De.width=he,De.height=Ke,De.getContext("2d").drawImage(D,0,0,he,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Ke+")."),De}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){s.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(D,w,ee,me,_e=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he=w;if(w===s.RED&&(ee===s.FLOAT&&(he=s.R32F),ee===s.HALF_FLOAT&&(he=s.R16F),ee===s.UNSIGNED_BYTE&&(he=s.R8)),w===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.R8UI),ee===s.UNSIGNED_SHORT&&(he=s.R16UI),ee===s.UNSIGNED_INT&&(he=s.R32UI),ee===s.BYTE&&(he=s.R8I),ee===s.SHORT&&(he=s.R16I),ee===s.INT&&(he=s.R32I)),w===s.RG&&(ee===s.FLOAT&&(he=s.RG32F),ee===s.HALF_FLOAT&&(he=s.RG16F),ee===s.UNSIGNED_BYTE&&(he=s.RG8)),w===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RG8UI),ee===s.UNSIGNED_SHORT&&(he=s.RG16UI),ee===s.UNSIGNED_INT&&(he=s.RG32UI),ee===s.BYTE&&(he=s.RG8I),ee===s.SHORT&&(he=s.RG16I),ee===s.INT&&(he=s.RG32I)),w===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(he=s.RGB16UI),ee===s.UNSIGNED_INT&&(he=s.RGB32UI),ee===s.BYTE&&(he=s.RGB8I),ee===s.SHORT&&(he=s.RGB16I),ee===s.INT&&(he=s.RGB32I)),w===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),ee===s.UNSIGNED_INT&&(he=s.RGBA32UI),ee===s.BYTE&&(he=s.RGBA8I),ee===s.SHORT&&(he=s.RGBA16I),ee===s.INT&&(he=s.RGBA32I)),w===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),w===s.RGBA){const Ke=_e?Il:Lt.getTransfer(me);ee===s.FLOAT&&(he=s.RGBA32F),ee===s.HALF_FLOAT&&(he=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(he=Ke===kt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(D,w){let ee;return D?w===null||w===rs||w===Ha?ee=s.DEPTH24_STENCIL8:w===Yr?ee=s.DEPTH32F_STENCIL8:w===za&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===rs||w===Ha?ee=s.DEPTH_COMPONENT24:w===Yr?ee=s.DEPTH_COMPONENT32F:w===za&&(ee=s.DEPTH_COMPONENT16),ee}function W(D,w){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==gr&&D.minFilter!==br?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function O(D){const w=D.target;w.removeEventListener("dispose",O),V(w),w.isVideoTexture&&_.delete(w)}function k(D){const w=D.target;w.removeEventListener("dispose",k),T(w)}function V(D){const w=i.get(D);if(w.__webglInit===void 0)return;const ee=D.source,me=v.get(ee);if(me){const _e=me[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&F(D),Object.keys(me).length===0&&v.delete(ee)}i.remove(D)}function F(D){const w=i.get(D);s.deleteTexture(w.__webglTexture);const ee=D.source,me=v.get(ee);delete me[w.__cacheKey],u.memory.textures--}function T(D){const w=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let _e=0;_e<w.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(w.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)s.deleteFramebuffer(w.__webglFramebuffer[me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ee=D.textures;for(let me=0,_e=ee.length;me<_e;me++){const he=i.get(ee[me]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),u.memory.textures--),i.remove(ee[me])}i.remove(D)}let I=0;function ne(){I=0}function Y(){const D=I;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),I+=1,D}function ce(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function de(D,w){const ee=i.get(D);if(D.isVideoTexture&&$e(D),D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(ee,D,w);return}}n.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+w)}function K(D,w){const ee=i.get(D);if(D.version>0&&ee.__version!==D.version){Se(ee,D,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+w)}function oe(D,w){const ee=i.get(D);if(D.version>0&&ee.__version!==D.version){Se(ee,D,w);return}n.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+w)}function z(D,w){const ee=i.get(D);if(D.version>0&&ee.__version!==D.version){xe(ee,D,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+w)}const fe={[_d]:s.REPEAT,[ts]:s.CLAMP_TO_EDGE,[yd]:s.MIRRORED_REPEAT},ie={[gr]:s.NEAREST,[nx]:s.NEAREST_MIPMAP_NEAREST,[sl]:s.NEAREST_MIPMAP_LINEAR,[br]:s.LINEAR,[Au]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},N={[ax]:s.NEVER,[fx]:s.ALWAYS,[ox]:s.LESS,[x2]:s.LEQUAL,[lx]:s.EQUAL,[dx]:s.GEQUAL,[cx]:s.GREATER,[ux]:s.NOTEQUAL};function se(D,w){if(w.type===Yr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===br||w.magFilter===Au||w.magFilter===sl||w.magFilter===ns||w.minFilter===br||w.minFilter===Au||w.minFilter===sl||w.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,fe[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,fe[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,fe[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ie[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ie[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===gr||w.minFilter!==sl&&w.minFilter!==ns||w.type===Yr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ye(D,w){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",O));const me=w.source;let _e=v.get(me);_e===void 0&&(_e={},v.set(me,_e));const he=ce(w);if(he!==D.__cacheKey){_e[he]===void 0&&(_e[he]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),_e[he].usedTimes++;const Ke=_e[D.__cacheKey];Ke!==void 0&&(_e[D.__cacheKey].usedTimes--,Ke.usedTimes===0&&F(w)),D.__cacheKey=he,D.__webglTexture=_e[he].texture}return ee}function X(D,w,ee){return Math.floor(Math.floor(D/ee)/w)}function ue(D,w,ee,me){const he=D.updateRanges;if(he.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,ee,me,w.data);else{he.sort((Me,ze)=>Me.start-ze.start);let Ke=0;for(let Me=1;Me<he.length;Me++){const ze=he[Ke],ot=he[Me],nt=ze.start+ze.count,Le=X(ot.start,w.width,4),lt=X(ze.start,w.width,4);ot.start<=nt+1&&Le===lt&&X(ot.start+ot.count-1,w.width,4)===Le?ze.count=Math.max(ze.count,ot.start+ot.count-ze.start):(++Ke,he[Ke]=ot)}he.length=Ke+1;const De=s.getParameter(s.UNPACK_ROW_LENGTH),Ge=s.getParameter(s.UNPACK_SKIP_PIXELS),Xe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Me=0,ze=he.length;Me<ze;Me++){const ot=he[Me],nt=Math.floor(ot.start/4),Le=Math.ceil(ot.count/4),lt=nt%w.width,G=Math.floor(nt/w.width),Ue=Le,Ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),n.texSubImage2D(s.TEXTURE_2D,0,lt,G,Ue,Ee,ee,me,w.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,De),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,Xe)}}function Se(D,w,ee){let me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=s.TEXTURE_3D);const _e=ye(D,w),he=w.source;n.bindTexture(me,D.__webglTexture,s.TEXTURE0+ee);const Ke=i.get(he);if(he.version!==Ke.__version||_e===!0){n.activeTexture(s.TEXTURE0+ee);const De=Lt.getPrimaries(Lt.workingColorSpace),Ge=w.colorSpace===Ti?null:Lt.getPrimaries(w.colorSpace),Xe=w.colorSpace===Ti||De===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Me=A(w.image,!1,o.maxTextureSize);Me=at(w,Me);const ze=l.convert(w.format,w.colorSpace),ot=l.convert(w.type);let nt=R(w.internalFormat,ze,ot,w.colorSpace,w.isVideoTexture);se(me,w);let Le;const lt=w.mipmaps,G=w.isVideoTexture!==!0,Ue=Ke.__version===void 0||_e===!0,Ee=he.dataReady,Oe=W(w,Me);if(w.isDepthTexture)nt=b(w.format===Va,w.type),Ue&&(G?n.texStorage2D(s.TEXTURE_2D,1,nt,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,ze,ot,null));else if(w.isDataTexture)if(lt.length>0){G&&Ue&&n.texStorage2D(s.TEXTURE_2D,Oe,nt,lt[0].width,lt[0].height);for(let Te=0,re=lt.length;Te<re;Te++)Le=lt[Te],G?Ee&&n.texSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,ze,ot,Le.data):n.texImage2D(s.TEXTURE_2D,Te,nt,Le.width,Le.height,0,ze,ot,Le.data);w.generateMipmaps=!1}else G?(Ue&&n.texStorage2D(s.TEXTURE_2D,Oe,nt,Me.width,Me.height),Ee&&ue(w,Me,ze,ot)):n.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,ze,ot,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Ue&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,nt,lt[0].width,lt[0].height,Me.depth);for(let Te=0,re=lt.length;Te<re;Te++)if(Le=lt[Te],w.format!==mr)if(ze!==null)if(G){if(Ee)if(w.layerUpdates.size>0){const Pe=Sm(Le.width,Le.height,w.format,w.type);for(const Ze of w.layerUpdates){const mt=Le.data.subarray(Ze*Pe/Le.data.BYTES_PER_ELEMENT,(Ze+1)*Pe/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,Ze,Le.width,Le.height,1,ze,mt)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,Me.depth,ze,Le.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,nt,Le.width,Le.height,Me.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ee&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,Me.depth,ze,ot,Le.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Te,nt,Le.width,Le.height,Me.depth,0,ze,ot,Le.data)}else{G&&Ue&&n.texStorage2D(s.TEXTURE_2D,Oe,nt,lt[0].width,lt[0].height);for(let Te=0,re=lt.length;Te<re;Te++)Le=lt[Te],w.format!==mr?ze!==null?G?Ee&&n.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,ze,Le.data):n.compressedTexImage2D(s.TEXTURE_2D,Te,nt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ee&&n.texSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,ze,ot,Le.data):n.texImage2D(s.TEXTURE_2D,Te,nt,Le.width,Le.height,0,ze,ot,Le.data)}else if(w.isDataArrayTexture)if(G){if(Ue&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,nt,Me.width,Me.height,Me.depth),Ee)if(w.layerUpdates.size>0){const Te=Sm(Me.width,Me.height,w.format,w.type);for(const re of w.layerUpdates){const Pe=Me.data.subarray(re*Te/Me.data.BYTES_PER_ELEMENT,(re+1)*Te/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,re,Me.width,Me.height,1,ze,ot,Pe)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ze,ot,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,ze,ot,Me.data);else if(w.isData3DTexture)G?(Ue&&n.texStorage3D(s.TEXTURE_3D,Oe,nt,Me.width,Me.height,Me.depth),Ee&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ze,ot,Me.data)):n.texImage3D(s.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,ze,ot,Me.data);else if(w.isFramebufferTexture){if(Ue)if(G)n.texStorage2D(s.TEXTURE_2D,Oe,nt,Me.width,Me.height);else{let Te=Me.width,re=Me.height;for(let Pe=0;Pe<Oe;Pe++)n.texImage2D(s.TEXTURE_2D,Pe,nt,Te,re,0,ze,ot,null),Te>>=1,re>>=1}}else if(lt.length>0){if(G&&Ue){const Te=vt(lt[0]);n.texStorage2D(s.TEXTURE_2D,Oe,nt,Te.width,Te.height)}for(let Te=0,re=lt.length;Te<re;Te++)Le=lt[Te],G?Ee&&n.texSubImage2D(s.TEXTURE_2D,Te,0,0,ze,ot,Le):n.texImage2D(s.TEXTURE_2D,Te,nt,ze,ot,Le);w.generateMipmaps=!1}else if(G){if(Ue){const Te=vt(Me);n.texStorage2D(s.TEXTURE_2D,Oe,nt,Te.width,Te.height)}Ee&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,ot,Me)}else n.texImage2D(s.TEXTURE_2D,0,nt,ze,ot,Me);y(w)&&x(me),Ke.__version=he.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function xe(D,w,ee){if(w.image.length!==6)return;const me=ye(D,w),_e=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+ee);const he=i.get(_e);if(_e.version!==he.__version||me===!0){n.activeTexture(s.TEXTURE0+ee);const Ke=Lt.getPrimaries(Lt.workingColorSpace),De=w.colorSpace===Ti?null:Lt.getPrimaries(w.colorSpace),Ge=w.colorSpace===Ti||Ke===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,ze=[];for(let re=0;re<6;re++)!Xe&&!Me?ze[re]=A(w.image[re],!0,o.maxCubemapSize):ze[re]=Me?w.image[re].image:w.image[re],ze[re]=at(w,ze[re]);const ot=ze[0],nt=l.convert(w.format,w.colorSpace),Le=l.convert(w.type),lt=R(w.internalFormat,nt,Le,w.colorSpace),G=w.isVideoTexture!==!0,Ue=he.__version===void 0||me===!0,Ee=_e.dataReady;let Oe=W(w,ot);se(s.TEXTURE_CUBE_MAP,w);let Te;if(Xe){G&&Ue&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,lt,ot.width,ot.height);for(let re=0;re<6;re++){Te=ze[re].mipmaps;for(let Pe=0;Pe<Te.length;Pe++){const Ze=Te[Pe];w.format!==mr?nt!==null?G?Ee&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Ze.width,Ze.height,nt,Ze.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,lt,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Ze.width,Ze.height,nt,Le,Ze.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,lt,Ze.width,Ze.height,0,nt,Le,Ze.data)}}}else{if(Te=w.mipmaps,G&&Ue){Te.length>0&&Oe++;const re=vt(ze[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,lt,re.width,re.height)}for(let re=0;re<6;re++)if(Me){G?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ze[re].width,ze[re].height,nt,Le,ze[re].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,lt,ze[re].width,ze[re].height,0,nt,Le,ze[re].data);for(let Pe=0;Pe<Te.length;Pe++){const mt=Te[Pe].image[re].image;G?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,mt.width,mt.height,nt,Le,mt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,lt,mt.width,mt.height,0,nt,Le,mt.data)}}else{G?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,nt,Le,ze[re]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,lt,nt,Le,ze[re]);for(let Pe=0;Pe<Te.length;Pe++){const Ze=Te[Pe];G?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,nt,Le,Ze.image[re]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,lt,nt,Le,Ze.image[re])}}}y(w)&&x(s.TEXTURE_CUBE_MAP),he.__version=_e.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ve(D,w,ee,me,_e,he){const Ke=l.convert(ee.format,ee.colorSpace),De=l.convert(ee.type),Ge=R(ee.internalFormat,Ke,De,ee.colorSpace),Xe=i.get(w),Me=i.get(ee);if(Me.__renderTarget=w,!Xe.__hasExternalTextures){const ze=Math.max(1,w.width>>he),ot=Math.max(1,w.height>>he);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,he,Ge,ze,ot,w.depth,0,Ke,De,null):n.texImage2D(_e,he,Ge,ze,ot,0,Ke,De,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),dt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Me.__webglTexture,0,Be(w)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Me.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(D,w,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){const me=w.depthTexture,_e=me&&me.isDepthTexture?me.type:null,he=b(w.stencilBuffer,_e),Ke=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=Be(w);dt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,he,w.width,w.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,he,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,he,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,D)}else{const me=w.textures;for(let _e=0;_e<me.length;_e++){const he=me[_e],Ke=l.convert(he.format,he.colorSpace),De=l.convert(he.type),Ge=R(he.internalFormat,Ke,De,he.colorSpace),Xe=Be(w);ee&&dt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Ge,w.width,w.height):dt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xe,Ge,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),de(w.depthTexture,0);const _e=me.__webglTexture,he=Be(w);if(w.depthTexture.format===Ga)dt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(w.depthTexture.format===Va)dt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ne(D){const w=i.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=me}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const me=D.texture.mipmaps;me&&me.length>0?pe(w.__webglFramebuffer[0],D):pe(w.__webglFramebuffer,D)}else if(ee){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=s.createRenderbuffer(),ge(w.__webglDepthbuffer[me],D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,he)}}else{const me=D.texture.mipmaps;if(me&&me.length>0?n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ge(w.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,he)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function st(D,w,ee){const me=i.get(D);w!==void 0&&ve(me.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&Ne(D)}function rt(D){const w=D.texture,ee=i.get(D),me=i.get(w);D.addEventListener("dispose",k);const _e=D.textures,he=D.isWebGLCubeRenderTarget===!0,Ke=_e.length>1;if(Ke||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=w.version,u.memory.textures++),he){ee.__webglFramebuffer=[];for(let De=0;De<6;De++)if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer[De]=[];for(let Ge=0;Ge<w.mipmaps.length;Ge++)ee.__webglFramebuffer[De][Ge]=s.createFramebuffer()}else ee.__webglFramebuffer[De]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let De=0;De<w.mipmaps.length;De++)ee.__webglFramebuffer[De]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let De=0,Ge=_e.length;De<Ge;De++){const Xe=i.get(_e[De]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&dt(D)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let De=0;De<_e.length;De++){const Ge=_e[De];ee.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[De]);const Xe=l.convert(Ge.format,Ge.colorSpace),Me=l.convert(Ge.type),ze=R(Ge.internalFormat,Xe,Me,Ge.colorSpace,D.isXRRenderTarget===!0),ot=Be(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,ze,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,ee.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(ee.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),se(s.TEXTURE_CUBE_MAP,w);for(let De=0;De<6;De++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ge=0;Ge<w.mipmaps.length;Ge++)ve(ee.__webglFramebuffer[De][Ge],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ge);else ve(ee.__webglFramebuffer[De],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);y(w)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ke){for(let De=0,Ge=_e.length;De<Ge;De++){const Xe=_e[De],Me=i.get(Xe);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),se(s.TEXTURE_2D,Xe),ve(ee.__webglFramebuffer,D,Xe,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,0),y(Xe)&&x(s.TEXTURE_2D)}n.unbindTexture()}else{let De=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(De=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(De,me.__webglTexture),se(De,w),w.mipmaps&&w.mipmaps.length>0)for(let Ge=0;Ge<w.mipmaps.length;Ge++)ve(ee.__webglFramebuffer[Ge],D,w,s.COLOR_ATTACHMENT0,De,Ge);else ve(ee.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,De,0);y(w)&&x(De),n.unbindTexture()}D.depthBuffer&&Ne(D)}function L(D){const w=D.textures;for(let ee=0,me=w.length;ee<me;ee++){const _e=w[ee];if(y(_e)){const he=U(D),Ke=i.get(_e).__webglTexture;n.bindTexture(he,Ke),x(he),n.unbindTexture()}}}const At=[],et=[];function tt(D){if(D.samples>0){if(dt(D)===!1){const w=D.textures,ee=D.width,me=D.height;let _e=s.COLOR_BUFFER_BIT;const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=i.get(D),De=w.length>1;if(De)for(let Xe=0;Xe<w.length;Xe++)n.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Ge=D.texture.mipmaps;Ge&&Ge.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Xe=0;Xe<w.length;Xe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Xe]);const Me=i.get(w[Xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,ee,me,0,0,ee,me,_e,s.NEAREST),h===!0&&(At.length=0,et.length=0,At.push(s.COLOR_ATTACHMENT0+Xe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(At.push(he),et.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,et)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,At))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let Xe=0;Xe<w.length;Xe++){n.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Xe]);const Me=i.get(w[Xe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,Me,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Be(D){return Math.min(o.maxSamples,D.samples)}function dt(D){const w=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $e(D){const w=u.render.frame;_.get(D)!==w&&(_.set(D,w),D.update())}function at(D,w){const ee=D.colorSpace,me=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ee!==Ks&&ee!==Ti&&(Lt.getTransfer(ee)===kt?(me!==mr||_e!==Fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),w}function vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(g.width=D.naturalWidth||D.width,g.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(g.width=D.displayWidth,g.height=D.displayHeight):(g.width=D.width,g.height=D.height),g}this.allocateTextureUnit=Y,this.resetTextureUnits=ne,this.setTexture2D=de,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=z,this.rebindTextures=st,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=dt}function bE(s,e){function n(i,o=Ti){let l;const u=Lt.getTransfer(o);if(i===Fr)return s.UNSIGNED_BYTE;if(i===ef)return s.UNSIGNED_SHORT_4_4_4_4;if(i===tf)return s.UNSIGNED_SHORT_5_5_5_1;if(i===d2)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===c2)return s.BYTE;if(i===u2)return s.SHORT;if(i===za)return s.UNSIGNED_SHORT;if(i===Qd)return s.INT;if(i===rs)return s.UNSIGNED_INT;if(i===Yr)return s.FLOAT;if(i===Wa)return s.HALF_FLOAT;if(i===f2)return s.ALPHA;if(i===p2)return s.RGB;if(i===mr)return s.RGBA;if(i===Ga)return s.DEPTH_COMPONENT;if(i===Va)return s.DEPTH_STENCIL;if(i===h2)return s.RED;if(i===nf)return s.RED_INTEGER;if(i===m2)return s.RG;if(i===rf)return s.RG_INTEGER;if(i===sf)return s.RGBA_INTEGER;if(i===Dl||i===Rl||i===Pl||i===Ll)if(u===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===Dl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ll)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===Dl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ll)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sd||i===Ed||i===Md||i===wd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Sd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ed)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ad||i===Td||i===Cd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===Ad||i===Td)return u===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===Cd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bd||i===Fd||i===Dd||i===Rd||i===Pd||i===Ld||i===Ud||i===Nd||i===Id||i===kd||i===Od||i===Bd||i===zd||i===Hd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===bd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ld)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ud)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Id)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Od)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ul||i===Gd||i===Vd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===Ul)return u===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===g2||i===Wd||i===jd||i===Xd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===Ul)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Wd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ha?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:n}}const FE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DE=`
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

}`;class RE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const o=new Bn,l=e.properties.get(o);l.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ri({vertexShader:FE,fragmentShader:DE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kt(new qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PE extends Js{constructor(e,n){super();const i=this;let o=null,l=1,u=null,f="local-floor",h=1,g=null,_=null,p=null,v=null,S=null,M=null;const A=new RE,y=n.getContextAttributes();let x=null,U=null;const R=[],b=[],W=new Dt;let O=null;const k=new Xn;k.viewport=new Ot;const V=new Xn;V.viewport=new Ot;const F=[k,V],T=new Qx;let I=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ue=R[X];return ue===void 0&&(ue=new qu,R[X]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(X){let ue=R[X];return ue===void 0&&(ue=new qu,R[X]=ue),ue.getGripSpace()},this.getHand=function(X){let ue=R[X];return ue===void 0&&(ue=new qu,R[X]=ue),ue.getHandSpace()};function Y(X){const ue=b.indexOf(X.inputSource);if(ue===-1)return;const Se=R[ue];Se!==void 0&&(Se.update(X.inputSource,X.frame,g||u),Se.dispatchEvent({type:X.type,data:X.inputSource}))}function ce(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",de);for(let X=0;X<R.length;X++){const ue=b[X];ue!==null&&(b[X]=null,R[X].disconnect(ue))}I=null,ne=null,A.reset(),e.setRenderTarget(x),S=null,v=null,p=null,o=null,U=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(W.width,W.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){f=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||u},this.setReferenceSpace=function(X){g=X},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,xe=null,ve=null;y.depth&&(ve=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=y.stencil?Va:Ga,xe=y.stencil?Ha:rs);const ge={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:l};p=new XRWebGLBinding(o,n),v=p.createProjectionLayer(ge),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new is(v.textureWidth,v.textureHeight,{format:mr,type:Fr,depthTexture:new D2(v.textureWidth,v.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,Se),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new is(S.framebufferWidth,S.framebufferHeight,{format:mr,type:Fr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),g=null,u=await o.requestReferenceSpace(f),ye.setContext(o),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function de(X){for(let ue=0;ue<X.removed.length;ue++){const Se=X.removed[ue],xe=b.indexOf(Se);xe>=0&&(b[xe]=null,R[xe].disconnect(Se))}for(let ue=0;ue<X.added.length;ue++){const Se=X.added[ue];let xe=b.indexOf(Se);if(xe===-1){for(let ge=0;ge<R.length;ge++)if(ge>=b.length){b.push(Se),xe=ge;break}else if(b[ge]===null){b[ge]=Se,xe=ge;break}if(xe===-1)break}const ve=R[xe];ve&&ve.connect(Se)}}const K=new J,oe=new J;function z(X,ue,Se){K.setFromMatrixPosition(ue.matrixWorld),oe.setFromMatrixPosition(Se.matrixWorld);const xe=K.distanceTo(oe),ve=ue.projectionMatrix.elements,ge=Se.projectionMatrix.elements,pe=ve[14]/(ve[10]-1),Ne=ve[14]/(ve[10]+1),st=(ve[9]+1)/ve[5],rt=(ve[9]-1)/ve[5],L=(ve[8]-1)/ve[0],At=(ge[8]+1)/ge[0],et=pe*L,tt=pe*At,Be=xe/(-L+At),dt=Be*-L;if(ue.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(dt),X.translateZ(Be),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ve[10]===-1)X.projectionMatrix.copy(ue.projectionMatrix),X.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const $e=pe+Be,at=Ne+Be,vt=et-dt,D=tt+(xe-dt),w=st*Ne/at*$e,ee=rt*Ne/at*$e;X.projectionMatrix.makePerspective(vt,D,w,ee,$e,at),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function fe(X,ue){ue===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ue.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let ue=X.near,Se=X.far;A.texture!==null&&(A.depthNear>0&&(ue=A.depthNear),A.depthFar>0&&(Se=A.depthFar)),T.near=V.near=k.near=ue,T.far=V.far=k.far=Se,(I!==T.near||ne!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,ne=T.far),k.layers.mask=X.layers.mask|2,V.layers.mask=X.layers.mask|4,T.layers.mask=k.layers.mask|V.layers.mask;const xe=X.parent,ve=T.cameras;fe(T,xe);for(let ge=0;ge<ve.length;ge++)fe(ve[ge],xe);ve.length===2?z(T,k,V):T.projectionMatrix.copy(k.projectionMatrix),ie(X,T,xe)};function ie(X,ue,Se){Se===null?X.matrix.copy(ue.matrixWorld):(X.matrix.copy(Se.matrixWorld),X.matrix.invert(),X.matrix.multiply(ue.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ue.projectionMatrix),X.projectionMatrixInverse.copy(ue.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Yd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(X){h=X,v!==null&&(v.fixedFoveation=X),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(T)};let N=null;function se(X,ue){if(_=ue.getViewerPose(g||u),M=ue,_!==null){const Se=_.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let xe=!1;Se.length!==T.cameras.length&&(T.cameras.length=0,xe=!0);for(let pe=0;pe<Se.length;pe++){const Ne=Se[pe];let st=null;if(S!==null)st=S.getViewport(Ne);else{const L=p.getViewSubImage(v,Ne);st=L.viewport,pe===0&&(e.setRenderTargetTextures(U,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(U))}let rt=F[pe];rt===void 0&&(rt=new Xn,rt.layers.enable(pe),rt.viewport=new Ot,F[pe]=rt),rt.matrix.fromArray(Ne.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Ne.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(st.x,st.y,st.width,st.height),pe===0&&(T.matrix.copy(rt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),xe===!0&&T.cameras.push(rt)}const ve=o.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&p){const pe=p.getDepthInformation(Se[0]);pe&&pe.isValid&&pe.texture&&A.init(e,pe,o.renderState)}}for(let Se=0;Se<R.length;Se++){const xe=b[Se],ve=R[Se];xe!==null&&ve!==void 0&&ve.update(xe,ue,g||u)}N&&N(X,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),M=null}const ye=new L2;ye.setAnimationLoop(se),this.setAnimationLoop=function(X){N=X},this.dispose=function(){}}}const $i=new Dr,LE=new Xt;function UE(s,e){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function i(y,x){x.color.getRGB(y.fogColor.value,T2(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,U,R,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),p(y,x)):x.isMeshPhongMaterial?(l(y,x),_(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,b)):x.isMeshMatcapMaterial?(l(y,x),M(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),A(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?h(y,x,U,R):x.isSpriteMaterial?g(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===vn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===vn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const U=e.get(x),R=U.envMap,b=U.envMapRotation;R&&(y.envMap.value=R,$i.copy(b),$i.x*=-1,$i.y*=-1,$i.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),y.envMapRotation.value.setFromMatrix4(LE.makeRotationFromEuler($i)),y.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function h(y,x,U,R){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*U,y.scale.value=R*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function p(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,U){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===vn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const U=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function NE(s,e,n,i){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,R){const b=R.program;i.uniformBlockBinding(U,b)}function g(U,R){let b=o[U.id];b===void 0&&(M(U),b=_(U),o[U.id]=b,U.addEventListener("dispose",y));const W=R.program;i.updateUBOMapping(U,W);const O=e.render.frame;l[U.id]!==O&&(v(U),l[U.id]=O)}function _(U){const R=p();U.__bindingPointIndex=R;const b=s.createBuffer(),W=U.__size,O=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,W,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,b),b}function p(){for(let U=0;U<f;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const R=o[U.id],b=U.uniforms,W=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let O=0,k=b.length;O<k;O++){const V=Array.isArray(b[O])?b[O]:[b[O]];for(let F=0,T=V.length;F<T;F++){const I=V[F];if(S(I,O,F,W)===!0){const ne=I.__offset,Y=Array.isArray(I.value)?I.value:[I.value];let ce=0;for(let de=0;de<Y.length;de++){const K=Y[de],oe=A(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,ne+ce,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,ce),ce+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,R,b,W){const O=U.value,k=R+"_"+b;if(W[k]===void 0)return typeof O=="number"||typeof O=="boolean"?W[k]=O:W[k]=O.clone(),!0;{const V=W[k];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return W[k]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function M(U){const R=U.uniforms;let b=0;const W=16;for(let k=0,V=R.length;k<V;k++){const F=Array.isArray(R[k])?R[k]:[R[k]];for(let T=0,I=F.length;T<I;T++){const ne=F[T],Y=Array.isArray(ne.value)?ne.value:[ne.value];for(let ce=0,de=Y.length;ce<de;ce++){const K=Y[ce],oe=A(K),z=b%W,fe=z%oe.boundary,ie=z+fe;b+=fe,ie!==0&&W-ie<oe.storage&&(b+=W-ie),ne.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=b,b+=oe.storage}}}const O=b%W;return O>0&&(b+=W-O),U.__size=b,U.__cache={},this}function A(U){const R={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(R.boundary=4,R.storage=4):U.isVector2?(R.boundary=8,R.storage=8):U.isVector3||U.isColor?(R.boundary=16,R.storage=12):U.isVector4?(R.boundary=16,R.storage=16):U.isMatrix3?(R.boundary=48,R.storage=48):U.isMatrix4?(R.boundary=64,R.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),R}function y(U){const R=U.target;R.removeEventListener("dispose",y);const b=u.indexOf(R.__bindingPointIndex);u.splice(b,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function x(){for(const U in o)s.deleteBuffer(o[U]);u=[],o={},l={}}return{bind:h,update:g,dispose:x}}class IE{constructor(e={}){const{canvas:n=hx(),context:i=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=u;const M=new Uint32Array(4),A=new Int32Array(4);let y=null,x=null;const U=[],R=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let W=!1;this._outputColorSpace=rr;let O=0,k=0,V=null,F=-1,T=null;const I=new Ot,ne=new Ot;let Y=null;const ce=new Ct(0);let de=0,K=n.width,oe=n.height,z=1,fe=null,ie=null;const N=new Ot(0,0,K,oe),se=new Ot(0,0,K,oe);let ye=!1;const X=new lf;let ue=!1,Se=!1;const xe=new Xt,ve=new Xt,ge=new J,pe=new Ot,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function rt(){return V===null?z:1}let L=i;function At(C,q){return n.getContext(C,q)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jd}`),n.addEventListener("webglcontextlost",Oe,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",re,!1),L===null){const q="webgl2";if(L=At(q,C),L===null)throw At(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let et,tt,Be,dt,$e,at,vt,D,w,ee,me,_e,he,Ke,De,Ge,Xe,Me,ze,ot,nt,Le,lt,G;function Ue(){et=new X1(L),et.init(),Le=new bE(L,et),tt=new B1(L,et,e,Le),Be=new TE(L,et),tt.reverseDepthBuffer&&v&&Be.buffers.depth.setReversed(!0),dt=new $1(L),$e=new pE,at=new CE(L,et,Be,$e,tt,Le,dt),vt=new H1(b),D=new j1(b),w=new t_(L),lt=new k1(L,w),ee=new Y1(L,w,dt,lt),me=new Z1(L,ee,w,dt),ze=new K1(L,tt,at),Ge=new z1($e),_e=new fE(b,vt,D,et,tt,lt,Ge),he=new UE(b,$e),Ke=new mE,De=new SE(et),Me=new I1(b,vt,D,Be,me,S,h),Xe=new wE(b,me,tt),G=new NE(L,dt,tt,Be),ot=new O1(L,et,dt),nt=new q1(L,et,dt),dt.programs=_e.programs,b.capabilities=tt,b.extensions=et,b.properties=$e,b.renderLists=Ke,b.shadowMap=Xe,b.state=Be,b.info=dt}Ue();const Ee=new PE(b,L);this.xr=Ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(K,oe,!1))},this.getSize=function(C){return C.set(K,oe)},this.setSize=function(C,q,le=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,oe=q,n.width=Math.floor(C*z),n.height=Math.floor(q*z),le===!0&&(n.style.width=C+"px",n.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(K*z,oe*z).floor()},this.setDrawingBufferSize=function(C,q,le){K=C,oe=q,z=le,n.width=Math.floor(C*le),n.height=Math.floor(q*le),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,q,le,Q){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,q,le,Q),Be.viewport(I.copy(N).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(se)},this.setScissor=function(C,q,le,Q){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,q,le,Q),Be.scissor(ne.copy(se).multiplyScalar(z).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){Be.setScissorTest(ye=C)},this.setOpaqueSort=function(C){fe=C},this.setTransparentSort=function(C){ie=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,le=!0){let Q=0;if(C){let $=!1;if(V!==null){const be=V.texture.format;$=be===sf||be===rf||be===nf}if($){const be=V.texture.type,Ie=be===Fr||be===rs||be===za||be===Ha||be===ef||be===tf,We=Me.getClearColor(),Ve=Me.getClearAlpha(),pt=We.r,ft=We.g,Ye=We.b;Ie?(M[0]=pt,M[1]=ft,M[2]=Ye,M[3]=Ve,L.clearBufferuiv(L.COLOR,0,M)):(A[0]=pt,A[1]=ft,A[2]=Ye,A[3]=Ve,L.clearBufferiv(L.COLOR,0,A))}else Q|=L.COLOR_BUFFER_BIT}q&&(Q|=L.DEPTH_BUFFER_BIT),le&&(Q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Oe,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",re,!1),Me.dispose(),Ke.dispose(),De.dispose(),$e.dispose(),vt.dispose(),D.dispose(),me.dispose(),lt.dispose(),G.dispose(),_e.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",ir),Ee.removeEventListener("sessionend",Qt),Zt.stop()};function Oe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const C=dt.autoReset,q=Xe.enabled,le=Xe.autoUpdate,Q=Xe.needsUpdate,$=Xe.type;Ue(),dt.autoReset=C,Xe.enabled=q,Xe.autoUpdate=le,Xe.needsUpdate=Q,Xe.type=$}function re(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Pe(C){const q=C.target;q.removeEventListener("dispose",Pe),Ze(q)}function Ze(C){mt(C),$e.remove(C)}function mt(C){const q=$e.get(C).programs;q!==void 0&&(q.forEach(function(le){_e.releaseProgram(le)}),C.isShaderMaterial&&_e.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,le,Q,$,be){q===null&&(q=Ne);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,We=Za(C,q,le,Q,$);Be.setMaterial(Q,Ie);let Ve=le.index,pt=1;if(Q.wireframe===!0){if(Ve=ee.getWireframeAttribute(le),Ve===void 0)return;pt=2}const ft=le.drawRange,Ye=le.attributes.position;let Et=ft.start*pt,xt=(ft.start+ft.count)*pt;be!==null&&(Et=Math.max(Et,be.start*pt),xt=Math.min(xt,(be.start+be.count)*pt)),Ve!==null?(Et=Math.max(Et,0),xt=Math.min(xt,Ve.count)):Ye!=null&&(Et=Math.max(Et,0),xt=Math.min(xt,Ye.count));const Wt=xt-Et;if(Wt<0||Wt===1/0)return;lt.setup($,Q,We,le,Ve);let Bt,Ut=ot;if(Ve!==null&&(Bt=w.get(Ve),Ut=nt,Ut.setIndex(Bt)),$.isMesh)Q.wireframe===!0?(Be.setLineWidth(Q.wireframeLinewidth*rt()),Ut.setMode(L.LINES)):Ut.setMode(L.TRIANGLES);else if($.isLine){let it=Q.linewidth;it===void 0&&(it=1),Be.setLineWidth(it*rt()),$.isLineSegments?Ut.setMode(L.LINES):$.isLineLoop?Ut.setMode(L.LINE_LOOP):Ut.setMode(L.LINE_STRIP)}else $.isPoints?Ut.setMode(L.POINTS):$.isSprite&&Ut.setMode(L.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Ut.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const it=$._multiDrawStarts,It=$._multiDrawCounts,Mt=$._multiDrawCount,on=Ve?w.get(Ve).bytesPerElement:1,Jr=$e.get(Q).currentProgram.getUniforms();for(let Cn=0;Cn<Mt;Cn++)Jr.setValue(L,"_gl_DrawID",Cn),Ut.render(it[Cn]/on,It[Cn])}else if($.isInstancedMesh)Ut.renderInstances(Et,Wt,$.count);else if(le.isInstancedBufferGeometry){const it=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,It=Math.min(le.instanceCount,it);Ut.renderInstances(Et,Wt,It)}else Ut.render(Et,Wt)};function St(C,q,le){C.transparent===!0&&C.side===Xr&&C.forceSinglePass===!1?(C.side=vn,C.needsUpdate=!0,ss(C,q,le),C.side=Di,C.needsUpdate=!0,ss(C,q,le),C.side=Xr):ss(C,q,le)}this.compile=function(C,q,le=null){le===null&&(le=C),x=De.get(le),x.init(q),R.push(x),le.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),C!==le&&C.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const Q=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const be=$.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){const We=be[Ie];St(We,le,$),Q.add(We)}else St(be,le,$),Q.add(be)}),x=R.pop(),Q},this.compileAsync=function(C,q,le=null){const Q=this.compile(C,q,le);return new Promise($=>{function be(){if(Q.forEach(function(Ie){$e.get(Ie).currentProgram.isReady()&&Q.delete(Ie)}),Q.size===0){$(C);return}setTimeout(be,10)}et.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Rt=null;function Nt(C){Rt&&Rt(C)}function ir(){Zt.stop()}function Qt(){Zt.start()}const Zt=new L2;Zt.setAnimationLoop(Nt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(C){Rt=C,Ee.setAnimationLoop(C),C===null?Zt.stop():Zt.start()},Ee.addEventListener("sessionstart",ir),Ee.addEventListener("sessionend",Qt),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(q),q=Ee.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,q,V),x=De.get(C,R.length),x.init(q),R.push(x),ve.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),X.setFromProjectionMatrix(ve),Se=this.localClippingEnabled,ue=Ge.init(this.clippingPlanes,Se),y=Ke.get(C,U.length),y.init(),U.push(y),Ee.enabled===!0&&Ee.isPresenting===!0){const be=b.xr.getDepthSensingMesh();be!==null&&$n(be,q,-1/0,b.sortObjects)}$n(C,q,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(fe,ie),st=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,st&&Me.addToRenderList(y,C),this.info.render.frame++,ue===!0&&Ge.beginShadows();const le=x.state.shadowsArray;Xe.render(le,C,q),ue===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,$=y.transmissive;if(x.setupLights(),q.isArrayCamera){const be=q.cameras;if($.length>0)for(let Ie=0,We=be.length;Ie<We;Ie++){const Ve=be[Ie];Kr(Q,$,C,Ve)}st&&Me.render(C);for(let Ie=0,We=be.length;Ie<We;Ie++){const Ve=be[Ie];Tn(y,C,Ve,Ve.viewport)}}else $.length>0&&Kr(Q,$,C,q),st&&Me.render(C),Tn(y,C,q);V!==null&&k===0&&(at.updateMultisampleRenderTarget(V),at.updateRenderTargetMipmap(V)),C.isScene===!0&&C.onAfterRender(b,C,q),lt.resetDefaultState(),F=-1,T=null,R.pop(),R.length>0?(x=R[R.length-1],ue===!0&&Ge.setGlobalState(b.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function $n(C,q,le,Q){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){Q&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);const Ie=me.update(C),We=C.material;We.visible&&y.push(C,Ie,We,le,pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){const Ie=me.update(C),We=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pe.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),pe.copy(Ie.boundingSphere.center)),pe.applyMatrix4(C.matrixWorld).applyMatrix4(ve)),Array.isArray(We)){const Ve=Ie.groups;for(let pt=0,ft=Ve.length;pt<ft;pt++){const Ye=Ve[pt],Et=We[Ye.materialIndex];Et&&Et.visible&&y.push(C,Ie,Et,le,pe.z,Ye)}}else We.visible&&y.push(C,Ie,We,le,pe.z,null)}}const be=C.children;for(let Ie=0,We=be.length;Ie<We;Ie++)$n(be[Ie],q,le,Q)}function Tn(C,q,le,Q){const $=C.opaque,be=C.transmissive,Ie=C.transparent;x.setupLightsView(le),ue===!0&&Ge.setGlobalState(b.clippingPlanes,le),Q&&Be.viewport(I.copy(Q)),$.length>0&&Zr($,q,le),be.length>0&&Zr(be,q,le),Ie.length>0&&Zr(Ie,q,le),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Kr(C,q,le,Q){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[Q.id]===void 0&&(x.state.transmissionRenderTarget[Q.id]=new is(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Wa:Fr,minFilter:ns,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const be=x.state.transmissionRenderTarget[Q.id],Ie=Q.viewport||I;be.setSize(Ie.z*b.transmissionResolutionScale,Ie.w*b.transmissionResolutionScale);const We=b.getRenderTarget(),Ve=b.getActiveCubeFace(),pt=b.getActiveMipmapLevel();b.setRenderTarget(be),b.getClearColor(ce),de=b.getClearAlpha(),de<1&&b.setClearColor(16777215,.5),b.clear(),st&&Me.render(le);const ft=b.toneMapping;b.toneMapping=bi;const Ye=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),x.setupLightsView(Q),ue===!0&&Ge.setGlobalState(b.clippingPlanes,Q),Zr(C,le,Q),at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be),et.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let xt=0,Wt=q.length;xt<Wt;xt++){const Bt=q[xt],Ut=Bt.object,it=Bt.geometry,It=Bt.material,Mt=Bt.group;if(It.side===Xr&&Ut.layers.test(Q.layers)){const on=It.side;It.side=vn,It.needsUpdate=!0,$a(Ut,le,Q,it,It,Mt),It.side=on,It.needsUpdate=!0,Et=!0}}Et===!0&&(at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be))}b.setRenderTarget(We,Ve,pt),b.setClearColor(ce,de),Ye!==void 0&&(Q.viewport=Ye),b.toneMapping=ft}function Zr(C,q,le){const Q=q.isScene===!0?q.overrideMaterial:null;for(let $=0,be=C.length;$<be;$++){const Ie=C[$],We=Ie.object,Ve=Ie.geometry,pt=Ie.group;let ft=Ie.material;ft.allowOverride===!0&&Q!==null&&(ft=Q),We.layers.test(le.layers)&&$a(We,q,le,Ve,ft,pt)}}function $a(C,q,le,Q,$,be){C.onBeforeRender(b,q,le,Q,$,be),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(b,q,le,Q,C,be),$.transparent===!0&&$.side===Xr&&$.forceSinglePass===!1?($.side=vn,$.needsUpdate=!0,b.renderBufferDirect(le,q,Q,$,C,be),$.side=Di,$.needsUpdate=!0,b.renderBufferDirect(le,q,Q,$,C,be),$.side=Xr):b.renderBufferDirect(le,q,Q,$,C,be),C.onAfterRender(b,q,le,Q,$,be)}function ss(C,q,le){q.isScene!==!0&&(q=Ne);const Q=$e.get(C),$=x.state.lights,be=x.state.shadowsArray,Ie=$.state.version,We=_e.getParameters(C,$.state,be,q,le),Ve=_e.getProgramCacheKey(We);let pt=Q.programs;Q.environment=C.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(C.isMeshStandardMaterial?D:vt).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,pt===void 0&&(C.addEventListener("dispose",Pe),pt=new Map,Q.programs=pt);let ft=pt.get(Ve);if(ft!==void 0){if(Q.currentProgram===ft&&Q.lightsStateVersion===Ie)return _r(C,We),ft}else We.uniforms=_e.getUniforms(C),C.onBeforeCompile(We,b),ft=_e.acquireProgram(We,Ve),pt.set(Ve,ft),Q.uniforms=We.uniforms;const Ye=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ye.clippingPlanes=Ge.uniform),_r(C,We),Q.needsLights=Vl(C),Q.lightsStateVersion=Ie,Q.needsLights&&(Ye.ambientLightColor.value=$.state.ambient,Ye.lightProbe.value=$.state.probe,Ye.directionalLights.value=$.state.directional,Ye.directionalLightShadows.value=$.state.directionalShadow,Ye.spotLights.value=$.state.spot,Ye.spotLightShadows.value=$.state.spotShadow,Ye.rectAreaLights.value=$.state.rectArea,Ye.ltc_1.value=$.state.rectAreaLTC1,Ye.ltc_2.value=$.state.rectAreaLTC2,Ye.pointLights.value=$.state.point,Ye.pointLightShadows.value=$.state.pointShadow,Ye.hemisphereLights.value=$.state.hemi,Ye.directionalShadowMap.value=$.state.directionalShadowMap,Ye.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ye.spotShadowMap.value=$.state.spotShadowMap,Ye.spotLightMatrix.value=$.state.spotLightMatrix,Ye.spotLightMap.value=$.state.spotLightMap,Ye.pointShadowMap.value=$.state.pointShadowMap,Ye.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=ft,Q.uniformsList=null,ft}function Ka(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Nl.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function _r(C,q){const le=$e.get(C);le.outputColorSpace=q.outputColorSpace,le.batching=q.batching,le.batchingColor=q.batchingColor,le.instancing=q.instancing,le.instancingColor=q.instancingColor,le.instancingMorph=q.instancingMorph,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function Za(C,q,le,Q,$){q.isScene!==!0&&(q=Ne),at.resetTextureUnits();const be=q.fog,Ie=Q.isMeshStandardMaterial?q.environment:null,We=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ks,Ve=(Q.isMeshStandardMaterial?D:vt).get(Q.envMap||Ie),pt=Q.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ft=!!le.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ye=!!le.morphAttributes.position,Et=!!le.morphAttributes.normal,xt=!!le.morphAttributes.color;let Wt=bi;Q.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Wt=b.toneMapping);const Bt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ut=Bt!==void 0?Bt.length:0,it=$e.get(Q),It=x.state.lights;if(ue===!0&&(Se===!0||C!==T)){const hn=C===T&&Q.id===F;Ge.setState(Q,C,hn)}let Mt=!1;Q.version===it.__version?(it.needsLights&&it.lightsStateVersion!==It.state.version||it.outputColorSpace!==We||$.isBatchedMesh&&it.batching===!1||!$.isBatchedMesh&&it.batching===!0||$.isBatchedMesh&&it.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&it.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&it.instancing===!1||!$.isInstancedMesh&&it.instancing===!0||$.isSkinnedMesh&&it.skinning===!1||!$.isSkinnedMesh&&it.skinning===!0||$.isInstancedMesh&&it.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&it.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&it.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&it.instancingMorph===!1&&$.morphTexture!==null||it.envMap!==Ve||Q.fog===!0&&it.fog!==be||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Ge.numPlanes||it.numIntersection!==Ge.numIntersection)||it.vertexAlphas!==pt||it.vertexTangents!==ft||it.morphTargets!==Ye||it.morphNormals!==Et||it.morphColors!==xt||it.toneMapping!==Wt||it.morphTargetsCount!==Ut)&&(Mt=!0):(Mt=!0,it.__version=Q.version);let on=it.currentProgram;Mt===!0&&(on=ss(Q,q,$));let Jr=!1,Cn=!1,Rr=!1;const zt=on.getUniforms(),_n=it.uniforms;if(Be.useProgram(on.program)&&(Jr=!0,Cn=!0,Rr=!0),Q.id!==F&&(F=Q.id,Cn=!0),Jr||T!==C){Be.buffers.depth.getReversed()?(xe.copy(C.projectionMatrix),gx(xe),vx(xe),zt.setValue(L,"projectionMatrix",xe)):zt.setValue(L,"projectionMatrix",C.projectionMatrix),zt.setValue(L,"viewMatrix",C.matrixWorldInverse);const cn=zt.map.cameraPosition;cn!==void 0&&cn.setValue(L,ge.setFromMatrixPosition(C.matrixWorld)),tt.logarithmicDepthBuffer&&zt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&zt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,Cn=!0,Rr=!0)}if($.isSkinnedMesh){zt.setOptional(L,$,"bindMatrix"),zt.setOptional(L,$,"bindMatrixInverse");const hn=$.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),zt.setValue(L,"boneTexture",hn.boneTexture,at))}$.isBatchedMesh&&(zt.setOptional(L,$,"batchingTexture"),zt.setValue(L,"batchingTexture",$._matricesTexture,at),zt.setOptional(L,$,"batchingIdTexture"),zt.setValue(L,"batchingIdTexture",$._indirectTexture,at),zt.setOptional(L,$,"batchingColorTexture"),$._colorsTexture!==null&&zt.setValue(L,"batchingColorTexture",$._colorsTexture,at));const ln=le.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&ze.update($,le,on),(Cn||it.receiveShadow!==$.receiveShadow)&&(it.receiveShadow=$.receiveShadow,zt.setValue(L,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(_n.envMap.value=Ve,_n.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&q.environment!==null&&(_n.envMapIntensity.value=q.environmentIntensity),Cn&&(zt.setValue(L,"toneMappingExposure",b.toneMappingExposure),it.needsLights&&Ja(_n,Rr),be&&Q.fog===!0&&he.refreshFogUniforms(_n,be),he.refreshMaterialUniforms(_n,Q,z,oe,x.state.transmissionRenderTarget[C.id]),Nl.upload(L,Ka(it),_n,at)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Nl.upload(L,Ka(it),_n,at),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&zt.setValue(L,"center",$.center),zt.setValue(L,"modelViewMatrix",$.modelViewMatrix),zt.setValue(L,"normalMatrix",$.normalMatrix),zt.setValue(L,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const hn=Q.uniformsGroups;for(let cn=0,bt=hn.length;cn<bt;cn++){const yr=hn[cn];G.update(yr,on),G.bind(yr,on)}}return on}function Ja(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Vl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,q,le){const Q=$e.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),$e.get(C.texture).__webglTexture=q,$e.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:le,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const le=$e.get(C);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0};const Qa=L.createFramebuffer();this.setRenderTarget=function(C,q=0,le=0){V=C,O=q,k=le;let Q=!0,$=null,be=!1,Ie=!1;if(C){const Ve=$e.get(C);if(Ve.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(L.FRAMEBUFFER,null),Q=!1;else if(Ve.__webglFramebuffer===void 0)at.setupRenderTarget(C);else if(Ve.__hasExternalTextures)at.rebindTextures(C,$e.get(C.texture).__webglTexture,$e.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ye=C.depthTexture;if(Ve.__boundDepthTexture!==Ye){if(Ye!==null&&$e.has(Ye)&&(C.width!==Ye.image.width||C.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(C)}}const pt=C.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Ie=!0);const ft=$e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ft[q])?$=ft[q][le]:$=ft[q],be=!0):C.samples>0&&at.useMultisampledRTT(C)===!1?$=$e.get(C).__webglMultisampledFramebuffer:Array.isArray(ft)?$=ft[le]:$=ft,I.copy(C.viewport),ne.copy(C.scissor),Y=C.scissorTest}else I.copy(N).multiplyScalar(z).floor(),ne.copy(se).multiplyScalar(z).floor(),Y=ye;if(le!==0&&($=Qa),Be.bindFramebuffer(L.FRAMEBUFFER,$)&&Q&&Be.drawBuffers(C,$),Be.viewport(I),Be.scissor(ne),Be.setScissorTest(Y),be){const Ve=$e.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ve.__webglTexture,le)}else if(Ie){const Ve=$e.get(C.texture),pt=q;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,le,pt)}else if(C!==null&&le!==0){const Ve=$e.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ve.__webglTexture,le)}F=-1},this.readRenderTargetPixels=function(C,q,le,Q,$,be,Ie,We=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=$e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve){Be.bindFramebuffer(L.FRAMEBUFFER,Ve);try{const pt=C.textures[We],ft=pt.format,Ye=pt.type;if(!tt.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-Q&&le>=0&&le<=C.height-$&&(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+We),L.readPixels(q,le,Q,$,Le.convert(ft),Le.convert(Ye),be))}finally{const pt=V!==null?$e.get(V).__webglFramebuffer:null;Be.bindFramebuffer(L.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(C,q,le,Q,$,be,Ie,We=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=$e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve)if(q>=0&&q<=C.width-Q&&le>=0&&le<=C.height-$){Be.bindFramebuffer(L.FRAMEBUFFER,Ve);const pt=C.textures[We],ft=pt.format,Ye=pt.type;if(!tt.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.bufferData(L.PIXEL_PACK_BUFFER,be.byteLength,L.STREAM_READ),C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+We),L.readPixels(q,le,Q,$,Le.convert(ft),Le.convert(Ye),0);const xt=V!==null?$e.get(V).__webglFramebuffer:null;Be.bindFramebuffer(L.FRAMEBUFFER,xt);const Wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await mx(L,Wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,be),L.deleteBuffer(Et),L.deleteSync(Wt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,le=0){const Q=Math.pow(2,-le),$=Math.floor(C.image.width*Q),be=Math.floor(C.image.height*Q),Ie=q!==null?q.x:0,We=q!==null?q.y:0;at.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,le,0,0,Ie,We,$,be),Be.unbindTexture()};const eo=L.createFramebuffer(),to=L.createFramebuffer();this.copyTextureToTexture=function(C,q,le=null,Q=null,$=0,be=null){be===null&&($!==0?(js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=$,$=0):be=0);let Ie,We,Ve,pt,ft,Ye,Et,xt,Wt;const Bt=C.isCompressedTexture?C.mipmaps[be]:C.image;if(le!==null)Ie=le.max.x-le.min.x,We=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,pt=le.min.x,ft=le.min.y,Ye=le.isBox3?le.min.z:0;else{const ln=Math.pow(2,-$);Ie=Math.floor(Bt.width*ln),We=Math.floor(Bt.height*ln),C.isDataArrayTexture?Ve=Bt.depth:C.isData3DTexture?Ve=Math.floor(Bt.depth*ln):Ve=1,pt=0,ft=0,Ye=0}Q!==null?(Et=Q.x,xt=Q.y,Wt=Q.z):(Et=0,xt=0,Wt=0);const Ut=Le.convert(q.format),it=Le.convert(q.type);let It;q.isData3DTexture?(at.setTexture3D(q,0),It=L.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(at.setTexture2DArray(q,0),It=L.TEXTURE_2D_ARRAY):(at.setTexture2D(q,0),It=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);const Mt=L.getParameter(L.UNPACK_ROW_LENGTH),on=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Jr=L.getParameter(L.UNPACK_SKIP_PIXELS),Cn=L.getParameter(L.UNPACK_SKIP_ROWS),Rr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ft),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ye);const zt=C.isDataArrayTexture||C.isData3DTexture,_n=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const ln=$e.get(C),hn=$e.get(q),cn=$e.get(ln.__renderTarget),bt=$e.get(hn.__renderTarget);Be.bindFramebuffer(L.READ_FRAMEBUFFER,cn.__webglFramebuffer),Be.bindFramebuffer(L.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let yr=0;yr<Ve;yr++)zt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$e.get(C).__webglTexture,$,Ye+yr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$e.get(q).__webglTexture,be,Wt+yr)),L.blitFramebuffer(pt,ft,Ie,We,Et,xt,Ie,We,L.DEPTH_BUFFER_BIT,L.NEAREST);Be.bindFramebuffer(L.READ_FRAMEBUFFER,null),Be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||$e.has(C)){const ln=$e.get(C),hn=$e.get(q);Be.bindFramebuffer(L.READ_FRAMEBUFFER,eo),Be.bindFramebuffer(L.DRAW_FRAMEBUFFER,to);for(let cn=0;cn<Ve;cn++)zt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,$,Ye+cn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,$),_n?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,hn.__webglTexture,be,Wt+cn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,hn.__webglTexture,be),$!==0?L.blitFramebuffer(pt,ft,Ie,We,Et,xt,Ie,We,L.COLOR_BUFFER_BIT,L.NEAREST):_n?L.copyTexSubImage3D(It,be,Et,xt,Wt+cn,pt,ft,Ie,We):L.copyTexSubImage2D(It,be,Et,xt,pt,ft,Ie,We);Be.bindFramebuffer(L.READ_FRAMEBUFFER,null),Be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _n?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(It,be,Et,xt,Wt,Ie,We,Ve,Ut,it,Bt.data):q.isCompressedArrayTexture?L.compressedTexSubImage3D(It,be,Et,xt,Wt,Ie,We,Ve,Ut,Bt.data):L.texSubImage3D(It,be,Et,xt,Wt,Ie,We,Ve,Ut,it,Bt):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,be,Et,xt,Ie,We,Ut,it,Bt.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,be,Et,xt,Bt.width,Bt.height,Ut,Bt.data):L.texSubImage2D(L.TEXTURE_2D,be,Et,xt,Ie,We,Ut,it,Bt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,on),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Jr),L.pixelStorei(L.UNPACK_SKIP_ROWS,Cn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rr),be===0&&q.generateMipmaps&&L.generateMipmap(It),Be.unbindTexture()},this.copyTextureToTexture3D=function(C,q,le=null,Q=null,$=0){return js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,le,Q,$)},this.initRenderTarget=function(C){$e.get(C).__webglFramebuffer===void 0&&at.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?at.setTextureCube(C,0):C.isData3DTexture?at.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?at.setTexture2DArray(C,0):at.setTexture2D(C,0),Be.unbindTexture()},this.resetState=function(){O=0,k=0,V=null,Be.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Lt._getUnpackColorSpace()}}const Xm=120,kE=40,OE=20,Gs=.05,Fl=100;function Ym(){const{gameStatus:s,speed:e,lane:n,isJumping:i,isRolling:o,addScore:l,addCoins:u,addDistance:f,setGameStatus:h,activatePowerUp:g,updatePowerUps:_}=Fi(),p=yt.useRef(null),v=yt.useRef(),S=yt.useRef(),M=yt.useRef(),A=yt.useRef(),[y,x]=yt.useState([]),[U,R]=yt.useState([]),[b,W]=yt.useState([]),[O,k]=yt.useState(0),V=yt.useRef(),F=yt.useRef(0),T=yt.useRef(0);return yt.useRef(0),yt.useEffect(()=>{if(!p.current)return;const I=new Gx;I.background=new Ct(6333946),I.fog=new of(3900150,20,100),v.current=I;const ne=new Xn(75,p.current.clientWidth/p.current.clientHeight,.1,1e3);ne.position.set(0,5,10),M.current=ne;const Y=new IE({antialias:!0});Y.setSize(p.current.clientWidth,p.current.clientHeight),Y.shadowMap.enabled=!0,Y.shadowMap.type=s2,Y.toneMapping=o2,Y.toneMappingExposure=1.2,S.current=Y,p.current.appendChild(Y.domElement);const ce=new Jx(16777215,.4);I.add(ce);const de=new Zx(16777215,1.2);de.position.set(10,10,5),de.castShadow=!0,de.shadow.mapSize.width=2048,de.shadow.mapSize.height=2048,I.add(de);const K=new Ju(16711680,.5,50);K.position.set(-10,5,0),I.add(K);const oe=new Ju(26367,.5,50);oe.position.set(10,5,0),I.add(oe);const z=new Ju(16776960,.3,30);z.position.set(0,8,-5),I.add(z),I.redLight=K,I.blueLight=oe,I.yellowLight=z;const fe=[],ie=[],N=[];for(let L=0;L<10;L++){const At=new qa(12,100),et=new wi({color:3621201}),tt=new Kt(At,et);tt.rotation.x=-Math.PI/2,tt.position.set(0,-.5,-L*100),I.add(tt),fe.push(tt);const Be=new Cr(.1,.1,100),dt=new wi({color:16498468}),$e=new Kt(Be,dt);$e.position.set(-2,0,-L*100),I.add($e),ie.push($e);const at=new Kt(Be,dt);at.position.set(2,0,-L*100),I.add(at),ie.push(at);const vt=new Cr(1,3,100),D=new wi({color:4937059}),w=new Kt(vt,D);w.position.set(-6,1,-L*100),I.add(w),N.push(w);const ee=new Kt(vt,D);ee.position.set(6,1,-L*100),I.add(ee),N.push(ee)}I.trackSegments=fe,I.dividerSegments=ie,I.wallSegments=N;const se=new Ai(.5,16,16),ye=new wi({color:2278750,emissive:8704,emissiveIntensity:.2}),X=new Kt(se,ye);X.position.set(0,0,0),X.castShadow=!0,I.add(X),A.current=X;const ue=new Ai(.7,16,16),Se=new Qi({color:2278750,transparent:!0,opacity:.3,side:vn}),xe=new Kt(ue,Se);X.add(xe),X.glow=xe;const ve=new xr,ge=new Float32Array(Fl*3),pe=new Float32Array(Fl*3);for(let L=0;L<Fl;L++)ge[L*3]=(Math.random()-.5)*20,ge[L*3+1]=Math.random()*10,ge[L*3+2]=(Math.random()-.5)*100,pe[L*3]=(Math.random()-.5)*.1,pe[L*3+1]=-Math.random()*.05,pe[L*3+2]=-Math.random()*.2;ve.setAttribute("position",new vr(ge,3));const Ne=new F2({color:16777215,size:.1,transparent:!0,opacity:.6,blending:od}),st=new Xx(ve,Ne);I.add(st),I.particleSystem=st,I.particleVelocities=pe;const rt=()=>{!p.current||!ne||!Y||(ne.aspect=p.current.clientWidth/p.current.clientHeight,ne.updateProjectionMatrix(),Y.setSize(p.current.clientWidth,p.current.clientHeight))};return window.addEventListener("resize",rt),()=>{window.removeEventListener("resize",rt),p.current&&Y.domElement&&p.current.removeChild(Y.domElement),Y.dispose()}},[]),yt.useEffect(()=>{if(s!=="playing"||!v.current||!M.current||!S.current){V.current&&cancelAnimationFrame(V.current);return}let I=0;const ne=Y=>{const ce=(Y-I)/1e3;if(I=Y,ce>0){_(ce);const de=O+e*ce*Gs;if(k(de),M.current&&A.current){const ge=A.current.position.x*.3,pe=5+Math.sin(Date.now()*.001)*.2,Ne=10;if(M.current.position.x+=(ge-M.current.position.x)*.1,M.current.position.y+=(pe-M.current.position.y)*.1,M.current.position.z+=(Ne-M.current.position.z)*.1,s==="playing"){const st=Math.sin(Date.now()*.01)*.02;M.current.position.x+=st,M.current.position.y+=st*.5}M.current.lookAt(0,0,0)}const K=v.current,oe=K.trackSegments,z=K.dividerSegments,fe=K.wallSegments;if(oe&&oe.forEach((ge,pe)=>{ge.position.z+=e*ce*Gs,ge.position.z>50&&(ge.position.z-=1e3)}),z&&z.forEach(ge=>{ge.position.z+=e*ce*Gs,ge.position.z>50&&(ge.position.z-=1e3)}),fe&&fe.forEach(ge=>{ge.position.z+=e*ce*Gs,ge.position.z>50&&(ge.position.z-=1e3)}),A.current){A.current.position.x=(n-1)*4,A.current.position.y=i?2:o?-1:0,A.current.scale.set(1,o?.5:1,1),A.current.rotation.x+=.05,A.current.rotation.y+=.01,A.current.rotation.z=Math.sin(Date.now()*.003)*.05;const ge=1+Math.sin(Date.now()*.008)*.05;A.current.scale.set(ge,ge*(o?.5:1),ge);const pe=A.current.material,Ne=A.current.glow;i?(pe.color.setHex(4906624),pe.emissive.setHex(8704),pe.emissiveIntensity=.4,Ne&&(Ne.material.color.setHex(4906624),Ne.material.opacity=.5)):o?(pe.color.setHex(3900150),pe.emissive.setHex(34),pe.emissiveIntensity=.4,Ne&&(Ne.material.color.setHex(3900150),Ne.material.opacity=.5)):(pe.color.setHex(2278750),pe.emissive.setHex(8704),pe.emissiveIntensity=.2,Ne&&(Ne.material.color.setHex(2278750),Ne.material.opacity=.3)),Ne&&Ne.scale.set(1+Math.sin(Date.now()*.01)*.1,1+Math.sin(Date.now()*.01)*.1,1+Math.sin(Date.now()*.01)*.1)}f(e*ce*.01),l(Math.floor(e*ce*.5));const ie=v.current,N=ie.particleSystem,se=ie.particleVelocities;if(N&&se){const ge=N.geometry.attributes.position.array;for(let pe=0;pe<Fl;pe++)ge[pe*3]+=se[pe*3],ge[pe*3+1]+=se[pe*3+1],ge[pe*3+2]+=se[pe*3+2]-e*.1,ge[pe*3+2]<-50&&(ge[pe*3]=(Math.random()-.5)*20,ge[pe*3+1]=Math.random()*10,ge[pe*3+2]=50);N.geometry.attributes.position.needsUpdate=!0}const ye=ie.redLight,X=ie.blueLight,ue=ie.yellowLight;if(ye&&X&&ue&&(ye.intensity=.5+Math.sin(Date.now()*.005)*.2,X.intensity=.5+Math.sin(Date.now()*.007)*.2,ue.intensity=.3+Math.sin(Date.now()*.009)*.1),de-F.current>kE){const ge=["train","barrier","pole"],pe=ge[Math.floor(Math.random()*ge.length)],Ne=Math.floor(Math.random()*3),st={id:`obstacle-${Date.now()}`,type:pe,x:Ne*Xm+60,y:de-600,lane:Ne};let rt,L;pe==="train"?(rt=new Cr(3,2,2),L=new wi({color:2450411,emissive:51,emissiveIntensity:.1})):pe==="barrier"?(rt=new Cr(2.5,1,1),L=new wi({color:14427686,emissive:3342336,emissiveIntensity:.1})):(rt=new Bl(.2,.2,3),L=new wi({color:7041664,emissive:1118481,emissiveIntensity:.1}));const At=new Kt(rt,L);At.position.set((Ne-1)*4,0,-50),At.castShadow=!0;const et=pe==="pole"?new Bl(.4,.4,3.5):new Cr(pe==="train"?3.5:3,pe==="train"?2.5:1.5,pe==="train"?2.5:1.5),tt=new Qi({color:16711680,transparent:!0,opacity:.2,side:vn}),Be=new Kt(et,tt);At.add(Be),At.warningGlow=Be,v.current.add(At),st.mesh=At,x(dt=>[...dt,st]),F.current=de}if(de-T.current>OE){const ge=Math.floor(Math.random()*3),pe={id:`coin-${Date.now()}`,x:ge*Xm+60,y:de-400,collected:!1},Ne=new Ai(.3,12,12),st=new wi({color:16498468,emissive:3351040,emissiveIntensity:.3}),rt=new Kt(Ne,st);rt.position.set((ge-1)*4,1,-50);const L=new Ai(.5,12,12),At=new Qi({color:16498468,transparent:!0,opacity:.4,side:vn}),et=new Kt(L,At);rt.add(et),rt.coinGlow=et,v.current.add(rt),pe.mesh=rt,R(tt=>[...tt,pe]),T.current=de}const Se=(n-1)*4,xe=e*ce*Gs;R(ge=>ge.map((pe,Ne)=>{if(pe.mesh){pe.mesh.position.z+=xe,pe.mesh.position.y=1+Math.sin(Date.now()*.01+Ne)*.2,pe.mesh.rotation.y+=.1;const st=pe.mesh.coinGlow;st&&(st.material.opacity=.4+Math.sin(Date.now()*.008+Ne)*.2,st.scale.set(1+Math.sin(Date.now()*.006+Ne)*.2,1+Math.sin(Date.now()*.006+Ne)*.2,1+Math.sin(Date.now()*.006+Ne)*.2))}if(!pe.collected&&pe.mesh){const st=pe.mesh.position.x;if(Math.sqrt(Math.pow(st-Se,2)+Math.pow(pe.mesh.position.z,2))<1.5){for(let L=0;L<10;L++){const At=new Ai(.05,4,4),et=new Qi({color:16766720,transparent:!0,opacity:.8}),tt=new Kt(At,et);tt.position.copy(pe.mesh.position),tt.velocity=new J((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2),v.current.add(tt);const Be=()=>{tt.position.add(tt.velocity),tt.velocity.multiplyScalar(.95),tt.material.opacity*=.95,tt.material.opacity<.01?v.current.remove(tt):requestAnimationFrame(Be)};Be()}return u(10),v.current.remove(pe.mesh),{...pe,collected:!0}}}return pe}));const ve=e*ce*Gs;for(const ge of y)if(ge.mesh){ge.mesh.position.z+=ve,ge.mesh.rotation.y+=.02;const pe=ge.mesh.warningGlow;pe&&(pe.material.opacity=.2+Math.sin(Date.now()*.01)*.1,pe.scale.set(1+Math.sin(Date.now()*.008)*.1,1,1+Math.sin(Date.now()*.008)*.1));const Ne=ge.mesh.position.x,st=Math.sqrt(Math.pow(Ne-Se,2)+Math.pow(ge.mesh.position.z,2));if(st<2&&Math.abs(ge.mesh.position.z)<2){if(ge.type==="barrier"&&i||ge.type==="pole"&&o)continue;for(let rt=0;rt<20;rt++){const L=new Ai(.1,4,4),At=new Qi({color:Math.random()>.5?16711680:16737792,transparent:!0,opacity:1}),et=new Kt(L,At);et.position.copy(A.current.position),et.velocity=new J((Math.random()-.5)*4,Math.random()*3,(Math.random()-.5)*4),v.current.add(et);const tt=()=>{et.position.add(et.velocity),et.velocity.y-=.1,et.velocity.multiplyScalar(.98),et.material.opacity*=.92,et.scale.multiplyScalar(1.02),et.material.opacity<.01?v.current.remove(et):requestAnimationFrame(tt)};tt()}console.log("Collision detected!",ge.type,st),h("gameOver");return}}x(ge=>ge.filter(Ne=>Ne.mesh&&Ne.mesh.position.z>50?(v.current.remove(Ne.mesh),!1):!0)),R(ge=>ge.filter(Ne=>Ne.mesh&&Ne.mesh.position.z>50?(v.current.remove(Ne.mesh),!1):!0)),R(ge=>ge.filter(Ne=>Ne.y<de-800?(Ne.mesh&&v.current.remove(Ne.mesh),!1):!0)),S.current&&v.current&&M.current&&S.current.render(v.current,M.current)}V.current=requestAnimationFrame(ne)};return V.current=requestAnimationFrame(ne),()=>{V.current&&cancelAnimationFrame(V.current)}},[s,e,n,i,o,O]),s!=="playing"&&s!=="paused"?null:B.jsx("div",{"trae-inspector-start-line":"739","trae-inspector-start-column":"4","trae-inspector-end-line":"743","trae-inspector-end-column":"6","trae-inspector-file-path":"src/components/GameEngine.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",ref:p,className:"w-full h-full",style:{background:"linear-gradient(to bottom, #60a5fa, #3b82f6)"}})}function qm(){const{score:s,coins:e,distance:n,powerUps:i,setGameStatus:o,gameStatus:l}=Fi(),[u,f]=yt.useState(s),[h,g]=yt.useState(!1),[_,p]=yt.useState(e),[v,S]=yt.useState(!1);yt.useEffect(()=>{if(s!==u){g(!0),f(s);const x=setTimeout(()=>g(!1),300);return()=>clearTimeout(x)}},[s,u]),yt.useEffect(()=>{if(e!==_){S(!0),p(e);const x=setTimeout(()=>S(!1),300);return()=>clearTimeout(x)}},[e,_]);const M=()=>{o("paused")},A=x=>{switch(x){case"jetpack":return B.jsx(Xh,{"trae-inspector-start-line":"47","trae-inspector-start-column":"15","trae-inspector-end-line":"47","trae-inspector-end-column":"42","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-4 h-4"});case"magnet":return B.jsx(hv,{"trae-inspector-start-line":"49","trae-inspector-start-column":"15","trae-inspector-end-line":"49","trae-inspector-end-column":"45","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-4 h-4"});case"sneakers":return B.jsx(dv,{"trae-inspector-start-line":"51","trae-inspector-start-column":"15","trae-inspector-end-line":"51","trae-inspector-end-column":"49","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-4 h-4"});case"multiplier":return B.jsx(ad,{"trae-inspector-start-line":"53","trae-inspector-start-column":"15","trae-inspector-end-line":"53","trae-inspector-end-column":"43","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-4 h-4"});default:return B.jsx(Xh,{"trae-inspector-start-line":"55","trae-inspector-start-column":"15","trae-inspector-end-line":"55","trae-inspector-end-column":"42","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-4 h-4"})}},y=x=>{switch(x){case"jetpack":return"bg-[#354093] border-[#6AEEFD]";case"magnet":return"bg-[#E31902] border-[#FFED6D]";case"sneakers":return"bg-[#6AEEFD] border-[#354093]";case"multiplier":return"bg-[#F7BE76] border-[#E31902]";default:return"bg-[#FFED6D] border-[#354093]"}};return l!=="playing"?null:B.jsxs("div",{"trae-inspector-start-line":"79","trae-inspector-start-column":"4","trae-inspector-end-line":"187","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute inset-0 pointer-events-none z-10",children:[B.jsxs("div",{"trae-inspector-start-line":"81","trae-inspector-start-column":"6","trae-inspector-end-line":"117","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex justify-between items-start p-4 pointer-events-auto animate-hud-slide-in",children:[B.jsxs("div",{"trae-inspector-start-line":"83","trae-inspector-start-column":"8","trae-inspector-end-line":"97","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"space-y-3",children:[B.jsxs("div",{"trae-inspector-start-line":"84","trae-inspector-start-column":"10","trae-inspector-end-line":"89","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`bg-[#354093] border-4 border-[#FFED6D] rounded-2xl px-4 py-3 transform -rotate-1 shadow-lg transition-all duration-300 hover:scale-105 animate-bounce-gentle ${h?"animate-score-pop":""}`,children:[B.jsx("div",{"trae-inspector-start-line":"85","trae-inspector-start-column":"12","trae-inspector-end-line":"85","trae-inspector-end-column":"151","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%8F%86%20SCORE%22%2C%22textStartLine%22%3A%2285%22%2C%22textStartColumn%22%3A%22138%22%2C%22textEndLine%22%3A%2285%22%2C%22textEndColumn%22%3A%22146%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#6AEEFD] text-sm font-black animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"🏆 SCORE"}),B.jsx("div",{"trae-inspector-start-line":"86","trae-inspector-start-column":"12","trae-inspector-end-line":"88","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#FFED6D] text-2xl font-black drop-shadow-lg animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:s.toLocaleString()})]}),B.jsxs("div",{"trae-inspector-start-line":"91","trae-inspector-start-column":"10","trae-inspector-end-line":"96","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#E31902] border-4 border-[#6AEEFD] rounded-2xl px-4 py-3 transform rotate-1 shadow-lg transition-all duration-300 hover:scale-105 animate-bounce-gentle",style:{animationDelay:"0.2s"},children:[B.jsx("div",{"trae-inspector-start-line":"92","trae-inspector-start-column":"12","trae-inspector-end-line":"92","trae-inspector-end-column":"154","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%93%8F%20DISTANCE%22%2C%22textStartLine%22%3A%2292%22%2C%22textStartColumn%22%3A%22138%22%2C%22textEndLine%22%3A%2292%22%2C%22textEndColumn%22%3A%22149%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#FFED6D] text-sm font-black animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"📏 DISTANCE"}),B.jsxs("div",{"trae-inspector-start-line":"93","trae-inspector-start-column":"12","trae-inspector-end-line":"95","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#6AEEFD] text-lg font-black drop-shadow-lg animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:[Math.floor(n),"m"]})]})]}),B.jsxs("div",{"trae-inspector-start-line":"100","trae-inspector-start-column":"8","trae-inspector-end-line":"116","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"space-y-3",children:[B.jsx("div",{"trae-inspector-start-line":"101","trae-inspector-start-column":"10","trae-inspector-end-line":"108","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`bg-[#FFED6D] border-4 border-[#E31902] rounded-2xl px-4 py-3 transform rotate-2 shadow-lg transition-all duration-300 hover:scale-105 animate-bounce-gentle ${v?"animate-score-pop":""}`,children:B.jsxs("div",{"trae-inspector-start-line":"102","trae-inspector-start-column":"12","trae-inspector-end-line":"107","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center space-x-2",children:[B.jsx(Zd,{"trae-inspector-start-line":"103","trae-inspector-start-column":"14","trae-inspector-end-line":"103","trae-inspector-end-column":"76","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-6 h-6 text-[#E31902] animate-spin-slow"}),B.jsx("span",{"trae-inspector-start-line":"104","trae-inspector-start-column":"14","trae-inspector-end-line":"106","trae-inspector-end-column":"21","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] text-xl font-black drop-shadow-lg animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:e.toLocaleString()})]})}),B.jsx("button",{"trae-inspector-start-line":"110","trae-inspector-start-column":"10","trae-inspector-end-line":"115","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",onClick:M,className:"bg-[#6AEEFD] border-4 border-[#354093] hover:bg-[#354093] hover:border-[#6AEEFD] transition-all duration-300 rounded-2xl p-3 transform -rotate-1 shadow-lg group hover:scale-110 animate-wiggle",children:B.jsx(gv,{"trae-inspector-start-line":"114","trae-inspector-start-column":"12","trae-inspector-end-line":"114","trae-inspector-end-column":"115","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-6 h-6 text-[#354093] group-hover:text-[#6AEEFD] transition-colors animate-pulse"})})]})]}),i.length>0&&B.jsx("div",{"trae-inspector-start-line":"121","trae-inspector-start-column":"8","trae-inspector-end-line":"138","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute top-4 left-1/2 transform -translate-x-1/2 animate-fade-in-up",children:B.jsx("div",{"trae-inspector-start-line":"122","trae-inspector-start-column":"10","trae-inspector-end-line":"137","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex space-x-3",children:i.map((x,U)=>B.jsxs("div",{"trae-inspector-start-line":"124","trae-inspector-start-column":"14","trae-inspector-end-line":"135","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`${y(x.type)} border-4 rounded-2xl px-4 py-3 flex items-center space-x-2 shadow-lg transform ${U%2===0?"rotate-2":"-rotate-2"} animate-powerup-glow hover:scale-110 transition-transform duration-300`,style:{animationDelay:`${U*.1}s`},children:[B.jsx("div",{"trae-inspector-start-line":"129","trae-inspector-start-column":"16","trae-inspector-end-line":"131","trae-inspector-end-column":"22","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-white animate-bounce",children:A(x.type)}),B.jsxs("span",{"trae-inspector-start-line":"132","trae-inspector-start-column":"16","trae-inspector-end-line":"134","trae-inspector-end-column":"23","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-white font-black text-sm drop-shadow-lg animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:[Math.ceil(x.timeLeft),"s"]})]},x.id))})}),B.jsx("div",{"trae-inspector-start-line":"142","trae-inspector-start-column":"6","trae-inspector-end-line":"154","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute bottom-4 left-4 animate-hud-slide-in",style:{animationDelay:"0.3s"},children:B.jsxs("div",{"trae-inspector-start-line":"143","trae-inspector-start-column":"8","trae-inspector-end-line":"153","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#F7BE76] border-4 border-[#354093] rounded-2xl px-4 py-3 transform -rotate-1 shadow-lg hover:scale-105 transition-transform duration-300 animate-bounce-gentle",children:[B.jsx("div",{"trae-inspector-start-line":"144","trae-inspector-start-column":"10","trae-inspector-end-line":"144","trae-inspector-end-column":"153","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%9A%A1%20SPEED%22%2C%22textStartLine%22%3A%22144%22%2C%22textStartColumn%22%3A%22141%22%2C%22textEndLine%22%3A%22144%22%2C%22textEndColumn%22%3A%22148%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] text-sm font-black mb-2 animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"⚡ SPEED"}),B.jsxs("div",{"trae-inspector-start-line":"145","trae-inspector-start-column":"10","trae-inspector-end-line":"152","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-32 h-3 bg-[#354093] rounded-full overflow-hidden border-2 border-[#E31902] relative",children:[B.jsx("div",{"trae-inspector-start-line":"146","trae-inspector-start-column":"12","trae-inspector-end-line":"149","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"h-full bg-gradient-to-r from-[#22c55e] via-[#FFED6D] to-[#E31902] transition-all duration-300 shadow-inner animate-pulse-glow",style:{width:`${Math.min(100,n/1e3*100)}%`}}),B.jsx("div",{"trae-inspector-start-line":"151","trae-inspector-start-column":"12","trae-inspector-end-line":"151","trae-inspector-end-column":"132","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-float"})]})]})}),B.jsx("div",{"trae-inspector-start-line":"157","trae-inspector-start-column":"6","trae-inspector-end-line":"177","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute bottom-4 right-4 animate-hud-slide-in",style:{animationDelay:"0.4s"},children:B.jsxs("div",{"trae-inspector-start-line":"158","trae-inspector-start-column":"8","trae-inspector-end-line":"176","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#6AEEFD] border-4 border-[#E31902] rounded-2xl p-4 transform rotate-1 shadow-lg hover:scale-105 transition-transform duration-300 animate-bounce-gentle",children:[B.jsx("div",{"trae-inspector-start-line":"159","trae-inspector-start-column":"10","trae-inspector-end-line":"159","trae-inspector-end-column":"166","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%9B%A4%EF%B8%8F%20LANE%22%2C%22textStartLine%22%3A%22159%22%2C%22textStartColumn%22%3A%22153%22%2C%22textEndLine%22%3A%22159%22%2C%22textEndColumn%22%3A%22161%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] text-xs font-black mb-3 text-center animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"🛤️ LANE"}),B.jsx("div",{"trae-inspector-start-line":"160","trae-inspector-start-column":"10","trae-inspector-end-line":"175","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex space-x-2",children:[0,1,2].map(x=>{const{lane:U}=Fi.getState();return B.jsx("div",{"trae-inspector-start-line":"164","trae-inspector-start-column":"16","trae-inspector-end-line":"172","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`w-4 h-10 rounded-lg border-2 transition-all duration-300 ${U===x?"bg-[#FFED6D] border-[#E31902] shadow-lg animate-selected-glow transform scale-110":"bg-[#354093] border-[#6AEEFD] hover:scale-105"}`,style:{animationDelay:`${x*.1}s`}},x)})})]})}),B.jsx("div",{"trae-inspector-start-line":"180","trae-inspector-start-column":"6","trae-inspector-end-line":"186","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute bottom-20 left-1/2 transform -translate-x-1/2 md:hidden animate-fade-in-up",style:{animationDelay:"0.6s"},children:B.jsx("div",{"trae-inspector-start-line":"181","trae-inspector-start-column":"8","trae-inspector-end-line":"185","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#E31902] border-3 border-[#FFED6D] rounded-2xl px-4 py-2 transform rotate-1 shadow-lg animate-wiggle-slow hover:scale-105 transition-transform duration-300",children:B.jsx("p",{"trae-inspector-start-line":"182","trae-inspector-start-column":"10","trae-inspector-end-line":"184","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameHUD.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%91%86%20SWIPE%20TO%20MOVE%20%E2%80%A2%20TAP%20TO%20JUMP%20%F0%9F%91%86%22%2C%22textStartLine%22%3A%22182%22%2C%22textStartColumn%22%3A%22146%22%2C%22textEndLine%22%3A%22184%22%2C%22textEndColumn%22%3A%2211%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#FFED6D] text-xs text-center font-black animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"👆 SWIPE TO MOVE • TAP TO JUMP 👆"})})})]})}function BE(){const{score:s,coins:e,distance:n,setGameStatus:i,resetGame:o}=Fi(),l=()=>{i("playing")},u=()=>{o(),i("playing")},f=()=>{o(),i("menu")},h=()=>{console.log("Settings clicked")};return B.jsx("div",{"trae-inspector-start-line":"34","trae-inspector-start-column":"4","trae-inspector-end-line":"119","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:B.jsxs("div",{"trae-inspector-start-line":"35","trae-inspector-start-column":"6","trae-inspector-end-line":"118","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl border border-white/20",children:[B.jsxs("div",{"trae-inspector-start-line":"37","trae-inspector-start-column":"8","trae-inspector-end-line":"40","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-center mb-8",children:[B.jsx("h1",{"trae-inspector-start-line":"38","trae-inspector-start-column":"10","trae-inspector-end-line":"38","trae-inspector-end-column":"77","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Game%20Paused%22%2C%22textStartLine%22%3A%2238%22%2C%22textStartColumn%22%3A%2262%22%2C%22textEndLine%22%3A%2238%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-3xl font-bold text-white mb-2",children:"Game Paused"}),B.jsx("p",{"trae-inspector-start-line":"39","trae-inspector-start-column":"10","trae-inspector-end-line":"39","trae-inspector-end-column":"81","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Take%20a%20break%20and%20come%20back%20when%20ready!%22%2C%22textStartLine%22%3A%2239%22%2C%22textStartColumn%22%3A%2240%22%2C%22textEndLine%22%3A%2239%22%2C%22textEndColumn%22%3A%2278%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-white/70",children:"Take a break and come back when ready!"})]}),B.jsx("div",{"trae-inspector-start-line":"43","trae-inspector-start-column":"8","trae-inspector-end-line":"64","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-white/10 rounded-2xl p-4 mb-8",children:B.jsxs("div",{"trae-inspector-start-line":"44","trae-inspector-start-column":"10","trae-inspector-end-line":"63","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"grid grid-cols-3 gap-4 text-center",children:[B.jsxs("div",{"trae-inspector-start-line":"45","trae-inspector-start-column":"12","trae-inspector-end-line":"50","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",children:[B.jsx("div",{"trae-inspector-start-line":"46","trae-inspector-start-column":"14","trae-inspector-end-line":"46","trae-inspector-end-column":"81","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Score%22%2C%22textStartLine%22%3A%2246%22%2C%22textStartColumn%22%3A%2271%22%2C%22textEndLine%22%3A%2246%22%2C%22textEndColumn%22%3A%2276%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-white/80 text-xs font-medium mb-1",children:"Score"}),B.jsx("div",{"trae-inspector-start-line":"47","trae-inspector-start-column":"14","trae-inspector-end-line":"49","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-yellow-400 text-lg font-bold",children:s.toLocaleString()})]}),B.jsxs("div",{"trae-inspector-start-line":"51","trae-inspector-start-column":"12","trae-inspector-end-line":"56","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",children:[B.jsx("div",{"trae-inspector-start-line":"52","trae-inspector-start-column":"14","trae-inspector-end-line":"52","trae-inspector-end-column":"81","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Coins%22%2C%22textStartLine%22%3A%2252%22%2C%22textStartColumn%22%3A%2271%22%2C%22textEndLine%22%3A%2252%22%2C%22textEndColumn%22%3A%2276%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-white/80 text-xs font-medium mb-1",children:"Coins"}),B.jsx("div",{"trae-inspector-start-line":"53","trae-inspector-start-column":"14","trae-inspector-end-line":"55","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-yellow-400 text-lg font-bold",children:e})]}),B.jsxs("div",{"trae-inspector-start-line":"57","trae-inspector-start-column":"12","trae-inspector-end-line":"62","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",children:[B.jsx("div",{"trae-inspector-start-line":"58","trae-inspector-start-column":"14","trae-inspector-end-line":"58","trae-inspector-end-column":"84","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Distance%22%2C%22textStartLine%22%3A%2258%22%2C%22textStartColumn%22%3A%2271%22%2C%22textEndLine%22%3A%2258%22%2C%22textEndColumn%22%3A%2279%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-white/80 text-xs font-medium mb-1",children:"Distance"}),B.jsxs("div",{"trae-inspector-start-line":"59","trae-inspector-start-column":"14","trae-inspector-end-line":"61","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-blue-400 text-lg font-bold",children:[Math.floor(n),"m"]})]})]})}),B.jsxs("div",{"trae-inspector-start-line":"67","trae-inspector-start-column":"8","trae-inspector-end-line":"107","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"space-y-3",children:[B.jsx("button",{"trae-inspector-start-line":"68","trae-inspector-start-column":"10","trae-inspector-end-line":"76","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",onClick:l,className:"w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg",children:B.jsxs("div",{"trae-inspector-start-line":"72","trae-inspector-start-column":"12","trae-inspector-end-line":"75","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center justify-center space-x-3",children:[B.jsx(e2,{"trae-inspector-start-line":"73","trae-inspector-start-column":"14","trae-inspector-end-line":"73","trae-inspector-end-column":"55","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-6 h-6 fill-current"}),B.jsx("span",{"trae-inspector-start-line":"74","trae-inspector-start-column":"14","trae-inspector-end-line":"74","trae-inspector-end-column":"53","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Resume%22%2C%22textStartLine%22%3A%2274%22%2C%22textStartColumn%22%3A%2241%22%2C%22textEndLine%22%3A%2274%22%2C%22textEndColumn%22%3A%2247%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-lg",children:"Resume"})]})}),B.jsx("button",{"trae-inspector-start-line":"78","trae-inspector-start-column":"10","trae-inspector-end-line":"86","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",onClick:u,className:"w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95",children:B.jsxs("div",{"trae-inspector-start-line":"82","trae-inspector-start-column":"12","trae-inspector-end-line":"85","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center justify-center space-x-3",children:[B.jsx(t2,{"trae-inspector-start-line":"83","trae-inspector-start-column":"14","trae-inspector-end-line":"83","trae-inspector-end-column":"47","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-5 h-5"}),B.jsx("span",{"trae-inspector-start-line":"84","trae-inspector-start-column":"14","trae-inspector-end-line":"84","trae-inspector-end-column":"34","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Restart%22%2C%22textStartLine%22%3A%2284%22%2C%22textStartColumn%22%3A%2221%22%2C%22textEndLine%22%3A%2284%22%2C%22textEndColumn%22%3A%2228%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",children:"Restart"})]})}),B.jsx("button",{"trae-inspector-start-line":"88","trae-inspector-start-column":"10","trae-inspector-end-line":"96","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",onClick:h,className:"w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 border border-white/30",children:B.jsxs("div",{"trae-inspector-start-line":"92","trae-inspector-start-column":"12","trae-inspector-end-line":"95","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center justify-center space-x-3",children:[B.jsx(n2,{"trae-inspector-start-line":"93","trae-inspector-start-column":"14","trae-inspector-end-line":"93","trae-inspector-end-column":"46","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-5 h-5"}),B.jsx("span",{"trae-inspector-start-line":"94","trae-inspector-start-column":"14","trae-inspector-end-line":"94","trae-inspector-end-column":"35","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Settings%22%2C%22textStartLine%22%3A%2294%22%2C%22textStartColumn%22%3A%2221%22%2C%22textEndLine%22%3A%2294%22%2C%22textEndColumn%22%3A%2229%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",children:"Settings"})]})}),B.jsx("button",{"trae-inspector-start-line":"98","trae-inspector-start-column":"10","trae-inspector-end-line":"106","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",onClick:f,className:"w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 border border-white/30",children:B.jsxs("div",{"trae-inspector-start-line":"102","trae-inspector-start-column":"12","trae-inspector-end-line":"105","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center justify-center space-x-3",children:[B.jsx(Qm,{"trae-inspector-start-line":"103","trae-inspector-start-column":"14","trae-inspector-end-line":"103","trae-inspector-end-column":"42","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-5 h-5"}),B.jsx("span",{"trae-inspector-start-line":"104","trae-inspector-start-column":"14","trae-inspector-end-line":"104","trae-inspector-end-column":"36","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Main%20Menu%22%2C%22textStartLine%22%3A%22104%22%2C%22textStartColumn%22%3A%2221%22%2C%22textEndLine%22%3A%22104%22%2C%22textEndColumn%22%3A%2230%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",children:"Main Menu"})]})})]}),B.jsxs("div",{"trae-inspector-start-line":"110","trae-inspector-start-column":"8","trae-inspector-end-line":"117","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"mt-6 text-center",children:[B.jsx("p",{"trae-inspector-start-line":"111","trae-inspector-start-column":"10","trae-inspector-end-line":"111","trae-inspector-end-column":"65","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Controls%3A%22%2C%22textStartLine%22%3A%22111%22%2C%22textStartColumn%22%3A%2253%22%2C%22textEndLine%22%3A%22111%22%2C%22textEndColumn%22%3A%2262%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-white/60 text-sm mb-2",children:"Controls:"}),B.jsxs("div",{"trae-inspector-start-line":"112","trae-inspector-start-column":"10","trae-inspector-end-line":"116","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex flex-wrap justify-center gap-2 text-white/70 text-xs",children:[B.jsx("span",{"trae-inspector-start-line":"113","trae-inspector-start-column":"12","trae-inspector-end-line":"113","trae-inspector-end-column":"75","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%86%90%20%E2%86%92%20Move%22%2C%22textStartLine%22%3A%22113%22%2C%22textStartColumn%22%3A%2261%22%2C%22textEndLine%22%3A%22113%22%2C%22textEndColumn%22%3A%2269%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-white/10 px-2 py-1 rounded",children:"← → Move"}),B.jsx("span",{"trae-inspector-start-line":"114","trae-inspector-start-column":"12","trae-inspector-end-line":"114","trae-inspector-end-column":"73","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%86%91%20Jump%22%2C%22textStartLine%22%3A%22114%22%2C%22textStartColumn%22%3A%2261%22%2C%22textEndLine%22%3A%22114%22%2C%22textEndColumn%22%3A%2267%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-white/10 px-2 py-1 rounded",children:"↑ Jump"}),B.jsx("span",{"trae-inspector-start-line":"115","trae-inspector-start-column":"12","trae-inspector-end-line":"115","trae-inspector-end-column":"73","trae-inspector-file-path":"src/components/PauseScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%86%93%20Roll%22%2C%22textStartLine%22%3A%22115%22%2C%22textStartColumn%22%3A%2261%22%2C%22textEndLine%22%3A%22115%22%2C%22textEndColumn%22%3A%2267%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-white/10 px-2 py-1 rounded",children:"↓ Roll"})]})]})]})})}function zE(){const{score:s,coins:e,distance:n,highScore:i,totalCoins:o,setGameStatus:l,resetGame:u}=Fi(),[f,h]=yt.useState(!1),[g,_]=yt.useState(!1);yt.useEffect(()=>{s>i&&_(!0);const A=setTimeout(()=>h(!0),300);return()=>clearTimeout(A)},[s,i]);const p=s>0&&s>=i,v=Math.floor(n),S=()=>{window.location.href="/"},M=()=>{window.location.href="/"};return B.jsxs("div",{"trae-inspector-start-line":"42","trae-inspector-start-column":"4","trae-inspector-end-line":"179","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"min-h-screen bg-gradient-to-br from-[#E31902] via-[#354093] to-[#6AEEFD] flex items-center justify-center p-4 relative overflow-hidden animate-fade-transition",children:[B.jsxs("div",{"trae-inspector-start-line":"44","trae-inspector-start-column":"6","trae-inspector-end-line":"49","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute inset-0 opacity-20",children:[B.jsx("div",{"trae-inspector-start-line":"45","trae-inspector-start-column":"8","trae-inspector-end-line":"45","trae-inspector-end-column":"111","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute top-10 left-10 w-32 h-32 bg-[#FFED6D] rounded-full transform rotate-12"}),B.jsx("div",{"trae-inspector-start-line":"46","trae-inspector-start-column":"8","trae-inspector-end-line":"46","trae-inspector-end-column":"113","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute top-32 right-20 w-24 h-24 bg-[#F7BE76] rounded-full transform -rotate-45"}),B.jsx("div",{"trae-inspector-start-line":"47","trae-inspector-start-column":"8","trae-inspector-end-line":"47","trae-inspector-end-column":"114","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute bottom-20 left-20 w-40 h-40 bg-[#6AEEFD] rounded-full transform rotate-45"}),B.jsx("div",{"trae-inspector-start-line":"48","trae-inspector-start-column":"8","trae-inspector-end-line":"48","trae-inspector-end-column":"116","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"absolute bottom-32 right-10 w-28 h-28 bg-[#E31902] rounded-full transform -rotate-12"})]}),B.jsxs("div",{"trae-inspector-start-line":"51","trae-inspector-start-column":"6","trae-inspector-end-line":"178","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`bg-[#354093] border-8 border-[#FFED6D] rounded-3xl p-8 max-w-md w-full shadow-2xl transform -rotate-1 relative z-10 transition-all duration-500 ${f?"animate-game-over-bounce scale-100 opacity-100":"scale-50 opacity-0"}`,children:[B.jsxs("div",{"trae-inspector-start-line":"53","trae-inspector-start-column":"8","trae-inspector-end-line":"66","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-center mb-8",children:[B.jsx("div",{"trae-inspector-start-line":"54","trae-inspector-start-column":"10","trae-inspector-end-line":"56","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#E31902] border-4 border-[#6AEEFD] rounded-2xl px-6 py-4 transform rotate-2 shadow-lg mb-4",children:B.jsx("h1",{"trae-inspector-start-line":"55","trae-inspector-start-column":"12","trae-inspector-end-line":"55","trae-inspector-end-column":"194","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22GAME%20OVER!%22%2C%22textStartLine%22%3A%2255%22%2C%22textStartColumn%22%3A%22180%22%2C%22textEndLine%22%3A%2255%22%2C%22textEndColumn%22%3A%22190%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-4xl font-black text-[#FFED6D] drop-shadow-lg animate-title-bounce",style:{fontFamily:"Impact, Arial Black, sans-serif",letterSpacing:"0.1em"},children:"GAME OVER!"})}),p&&B.jsx("div",{"trae-inspector-start-line":"58","trae-inspector-start-column":"12","trae-inspector-end-line":"64","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#FFED6D] border-4 border-[#E31902] rounded-2xl px-4 py-3 transform -rotate-1 shadow-lg animate-pulse",children:B.jsxs("div",{"trae-inspector-start-line":"59","trae-inspector-start-column":"14","trae-inspector-end-line":"63","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center justify-center space-x-2",children:[B.jsx(ad,{"trae-inspector-start-line":"60","trae-inspector-start-column":"16","trae-inspector-end-line":"60","trae-inspector-end-column":"77","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-6 h-6 text-[#E31902] animate-spin-slow"}),B.jsx("span",{"trae-inspector-start-line":"61","trae-inspector-start-column":"16","trae-inspector-end-line":"61","trae-inspector-end-column":"167","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22NEW%20HIGH%20SCORE!%22%2C%22textStartLine%22%3A%2261%22%2C%22textStartColumn%22%3A%22146%22%2C%22textEndLine%22%3A%2261%22%2C%22textEndColumn%22%3A%22161%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] font-black text-lg animate-text-rainbow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"NEW HIGH SCORE!"}),B.jsx(ad,{"trae-inspector-start-line":"62","trae-inspector-start-column":"16","trae-inspector-end-line":"62","trae-inspector-end-column":"77","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-6 h-6 text-[#E31902] animate-spin-slow"})]})})]}),B.jsxs("div",{"trae-inspector-start-line":"69","trae-inspector-start-column":"8","trae-inspector-end-line":"123","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"space-y-4 mb-8",children:[B.jsxs("div",{"trae-inspector-start-line":"71","trae-inspector-start-column":"10","trae-inspector-end-line":"81","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`bg-[#6AEEFD] border-4 border-[#E31902] rounded-2xl p-4 text-center transform rotate-1 shadow-lg transition-all duration-500 hover:scale-105 ${f?"animate-fade-in-up":"opacity-0 translate-y-4"}`,style:{animationDelay:"0.2s"},children:[B.jsx("div",{"trae-inspector-start-line":"72","trae-inspector-start-column":"12","trae-inspector-end-line":"72","trae-inspector-end-column":"162","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%8F%86%20FINAL%20SCORE%22%2C%22textStartLine%22%3A%2272%22%2C%22textStartColumn%22%3A%22143%22%2C%22textEndLine%22%3A%2272%22%2C%22textEndColumn%22%3A%22157%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] text-sm font-black mb-1 animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"🏆 FINAL SCORE"}),B.jsx("div",{"trae-inspector-start-line":"73","trae-inspector-start-column":"12","trae-inspector-end-line":"77","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`text-3xl font-black drop-shadow-lg animate-score-pop ${p?"text-[#FFED6D] animate-text-rainbow":"text-[#354093]"}`,style:{fontFamily:"Impact, Arial Black, sans-serif"},children:s.toLocaleString()}),p&&B.jsx(r2,{"trae-inspector-start-line":"79","trae-inspector-start-column":"14","trae-inspector-end-line":"79","trae-inspector-end-column":"106","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-8 h-8 text-[#FFED6D] animate-bounce animate-pulse-glow mx-auto mt-2"})]}),B.jsxs("div",{"trae-inspector-start-line":"84","trae-inspector-start-column":"10","trae-inspector-end-line":"104","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"grid grid-cols-2 gap-4",children:[B.jsxs("div",{"trae-inspector-start-line":"85","trae-inspector-start-column":"12","trae-inspector-end-line":"93","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`bg-[#F7BE76] border-4 border-[#354093] rounded-2xl p-4 text-center transform -rotate-1 shadow-lg transition-all duration-500 hover:scale-105 ${f?"animate-fade-in-up":"opacity-0 translate-y-4"}`,style:{animationDelay:"0.3s"},children:[B.jsx("div",{"trae-inspector-start-line":"86","trae-inspector-start-column":"14","trae-inspector-end-line":"88","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center justify-center mb-2",children:B.jsx(wv,{"trae-inspector-start-line":"87","trae-inspector-start-column":"16","trae-inspector-end-line":"87","trae-inspector-end-column":"61","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-5 h-5 text-[#354093]"})}),B.jsx("div",{"trae-inspector-start-line":"89","trae-inspector-start-column":"14","trae-inspector-end-line":"89","trae-inspector-end-column":"161","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%93%8F%20DISTANCE%22%2C%22textStartLine%22%3A%2289%22%2C%22textStartColumn%22%3A%22145%22%2C%22textEndLine%22%3A%2289%22%2C%22textEndColumn%22%3A%22156%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] text-xs font-black mb-1 animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"📏 DISTANCE"}),B.jsxs("div",{"trae-inspector-start-line":"90","trae-inspector-start-column":"14","trae-inspector-end-line":"92","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#E31902] text-xl font-black drop-shadow-lg animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:[v,"m"]})]}),B.jsxs("div",{"trae-inspector-start-line":"95","trae-inspector-start-column":"12","trae-inspector-end-line":"103","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`bg-[#FFED6D] border-4 border-[#E31902] rounded-2xl p-4 text-center transform rotate-1 shadow-lg transition-all duration-500 hover:scale-105 ${f?"animate-fade-in-up":"opacity-0 translate-y-4"}`,style:{animationDelay:"0.4s"},children:[B.jsx("div",{"trae-inspector-start-line":"96","trae-inspector-start-column":"14","trae-inspector-end-line":"98","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center justify-center mb-2",children:B.jsx(Zd,{"trae-inspector-start-line":"97","trae-inspector-start-column":"16","trae-inspector-end-line":"97","trae-inspector-end-column":"78","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-5 h-5 text-[#E31902] animate-coin-spin"})}),B.jsx("div",{"trae-inspector-start-line":"99","trae-inspector-start-column":"14","trae-inspector-end-line":"99","trae-inspector-end-column":"165","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%92%B0%20COINS%20EARNED%22%2C%22textStartLine%22%3A%2299%22%2C%22textStartColumn%22%3A%22145%22%2C%22textEndLine%22%3A%2299%22%2C%22textEndColumn%22%3A%22160%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] text-xs font-black mb-1 animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"💰 COINS EARNED"}),B.jsx("div",{"trae-inspector-start-line":"100","trae-inspector-start-column":"14","trae-inspector-end-line":"102","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#E31902] text-xl font-black drop-shadow-lg animate-coin-spin",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:e.toLocaleString()})]})]}),B.jsx("div",{"trae-inspector-start-line":"107","trae-inspector-start-column":"10","trae-inspector-end-line":"122","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`bg-[#E31902] border-4 border-[#6AEEFD] rounded-2xl p-4 transform -rotate-1 shadow-lg transition-all duration-500 hover:scale-105 ${f?"animate-fade-in-up":"opacity-0 translate-y-4"}`,style:{animationDelay:"0.5s"},children:B.jsxs("div",{"trae-inspector-start-line":"108","trae-inspector-start-column":"12","trae-inspector-end-line":"121","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex justify-between items-center",children:[B.jsxs("div",{"trae-inspector-start-line":"109","trae-inspector-start-column":"14","trae-inspector-end-line":"114","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",children:[B.jsx("div",{"trae-inspector-start-line":"110","trae-inspector-start-column":"16","trae-inspector-end-line":"110","trae-inspector-end-column":"160","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%8F%86%20HIGH%20SCORE%22%2C%22textStartLine%22%3A%22110%22%2C%22textStartColumn%22%3A%22142%22%2C%22textEndLine%22%3A%22110%22%2C%22textEndColumn%22%3A%22155%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#6AEEFD] text-sm font-black animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"🏆 HIGH SCORE"}),B.jsx("div",{"trae-inspector-start-line":"111","trae-inspector-start-column":"16","trae-inspector-end-line":"113","trae-inspector-end-column":"22","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:`text-[#FFED6D] text-xl font-black drop-shadow-lg ${g?"animate-text-rainbow":"animate-text-glow"}`,style:{fontFamily:"Impact, Arial Black, sans-serif"},children:Math.max(s,i).toLocaleString()})]}),B.jsxs("div",{"trae-inspector-start-line":"115","trae-inspector-start-column":"14","trae-inspector-end-line":"120","trae-inspector-end-column":"20","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-right",children:[B.jsx("div",{"trae-inspector-start-line":"116","trae-inspector-start-column":"16","trae-inspector-end-line":"116","trae-inspector-end-column":"161","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%92%B0%20TOTAL%20COINS%22%2C%22textStartLine%22%3A%22116%22%2C%22textStartColumn%22%3A%22142%22%2C%22textEndLine%22%3A%22116%22%2C%22textEndColumn%22%3A%22156%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#6AEEFD] text-sm font-black animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"💰 TOTAL COINS"}),B.jsx("div",{"trae-inspector-start-line":"117","trae-inspector-start-column":"16","trae-inspector-end-line":"119","trae-inspector-end-column":"22","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#FFED6D] text-xl font-black drop-shadow-lg animate-text-glow",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:o.toLocaleString()})]})]})})]}),B.jsx("div",{"trae-inspector-start-line":"126","trae-inspector-start-column":"8","trae-inspector-end-line":"143","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-center mb-8",children:B.jsxs("div",{"trae-inspector-start-line":"127","trae-inspector-start-column":"10","trae-inspector-end-line":"142","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#6AEEFD] border-4 border-[#FFED6D] rounded-2xl p-4 transform rotate-1 shadow-lg",children:[B.jsx("p",{"trae-inspector-start-line":"128","trae-inspector-start-column":"12","trae-inspector-end-line":"135","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] font-black text-lg",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:s===0?"🔥 BETTER LUCK NEXT TIME!":s<1e3?"💪 KEEP PRACTICING!":s<5e3?"👍 GOOD RUN!":s<1e4?"🎉 GREAT PERFORMANCE!":s<25e3?"⭐ EXCELLENT RUN!":"🏆 AMAZING! YOU'RE A SUBWAY SURFER MASTER!"}),B.jsx("p",{"trae-inspector-start-line":"136","trae-inspector-start-column":"12","trae-inspector-end-line":"141","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#E31902] text-sm mt-2 font-bold",children:v<100?"🏃 Try to run further next time!":v<500?"🎯 You're getting the hang of it!":v<1e3?"🚀 Nice distance covered!":"💯 Incredible distance! Keep it up!"})]})}),B.jsxs("div",{"trae-inspector-start-line":"146","trae-inspector-start-column":"8","trae-inspector-end-line":"168","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"space-y-4",children:[B.jsx("button",{"trae-inspector-start-line":"147","trae-inspector-start-column":"10","trae-inspector-end-line":"156","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",onClick:S,className:`w-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] border-4 border-[#FFED6D] text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg animate-pulse animate-button-hover-glow ${f?"animate-fade-in-up":"opacity-0 translate-y-4"}`,style:{fontFamily:"Impact, Arial Black, sans-serif",animationDelay:"0.6s"},children:B.jsxs("div",{"trae-inspector-start-line":"152","trae-inspector-start-column":"12","trae-inspector-end-line":"155","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center justify-center space-x-3",children:[B.jsx(t2,{"trae-inspector-start-line":"153","trae-inspector-start-column":"14","trae-inspector-end-line":"153","trae-inspector-end-column":"65","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-6 h-6 animate-spin-slow"}),B.jsx("span",{"trae-inspector-start-line":"154","trae-inspector-start-column":"14","trae-inspector-end-line":"154","trae-inspector-end-column":"94","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%94%84%20PLAY%20AGAIN!%22%2C%22textStartLine%22%3A%22154%22%2C%22textStartColumn%22%3A%2274%22%2C%22textEndLine%22%3A%22154%22%2C%22textEndColumn%22%3A%2288%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-lg drop-shadow-lg animate-text-glow",children:"🔄 PLAY AGAIN!"})]})}),B.jsx("button",{"trae-inspector-start-line":"158","trae-inspector-start-column":"10","trae-inspector-end-line":"167","trae-inspector-end-column":"19","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",onClick:M,className:`w-full bg-[#F7BE76] border-4 border-[#354093] hover:bg-[#354093] hover:border-[#F7BE76] text-[#354093] hover:text-[#F7BE76] font-black py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg animate-button-hover-glow ${f?"animate-fade-in-up":"opacity-0 translate-y-4"}`,style:{fontFamily:"Impact, Arial Black, sans-serif",animationDelay:"0.7s"},children:B.jsxs("div",{"trae-inspector-start-line":"163","trae-inspector-start-column":"12","trae-inspector-end-line":"166","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"flex items-center justify-center space-x-3",children:[B.jsx(Qm,{"trae-inspector-start-line":"164","trae-inspector-start-column":"14","trae-inspector-end-line":"164","trae-inspector-end-column":"57","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-6 h-6 animate-wiggle"}),B.jsx("span",{"trae-inspector-start-line":"165","trae-inspector-start-column":"14","trae-inspector-end-line":"165","trae-inspector-end-column":"92","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%8F%A0%20MAIN%20MENU%22%2C%22textStartLine%22%3A%22165%22%2C%22textStartColumn%22%3A%2274%22%2C%22textEndLine%22%3A%22165%22%2C%22textEndColumn%22%3A%2286%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-lg drop-shadow-lg animate-text-glow",children:"🏠 MAIN MENU"})]})})]}),B.jsx("div",{"trae-inspector-start-line":"171","trae-inspector-start-column":"8","trae-inspector-end-line":"177","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"mt-6 text-center",children:B.jsx("div",{"trae-inspector-start-line":"172","trae-inspector-start-column":"10","trae-inspector-end-line":"176","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"bg-[#FFED6D] border-3 border-[#E31902] rounded-2xl px-4 py-2 transform -rotate-1 shadow-lg",children:B.jsx("p",{"trae-inspector-start-line":"173","trae-inspector-start-column":"12","trae-inspector-end-line":"175","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/GameOverScreen.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%92%A1%20TIP%3A%20COLLECT%20POWER-UPS%20TO%20BOOST%20YOUR%20PERFORMANCE!%20%F0%9F%9A%80%22%2C%22textStartLine%22%3A%22173%22%2C%22textStartColumn%22%3A%22118%22%2C%22textEndLine%22%3A%22175%22%2C%22textEndColumn%22%3A%2213%22%2C%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"text-[#354093] text-sm font-black",style:{fontFamily:"Impact, Arial Black, sans-serif"},children:"💡 TIP: COLLECT POWER-UPS TO BOOST YOUR PERFORMANCE! 🚀"})})})]})]})}function HE(){const{gameStatus:s}=Fi();return rv(),B.jsxs("div",{"trae-inspector-start-line":"18","trae-inspector-start-column":"4","trae-inspector-end-line":"53","trae-inspector-end-column":"10","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",className:"w-full h-screen overflow-hidden relative",children:[s==="menu"&&B.jsx(Cv,{"trae-inspector-start-line":"20","trae-inspector-start-column":"32","trae-inspector-end-line":"20","trae-inspector-end-column":"44","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D"}),s==="playing"&&B.jsxs(B.Fragment,{children:[B.jsx(Ym,{"trae-inspector-start-line":"25","trae-inspector-start-column":"10","trae-inspector-end-line":"25","trae-inspector-end-column":"24","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D"}),B.jsx(qm,{"trae-inspector-start-line":"26","trae-inspector-start-column":"10","trae-inspector-end-line":"26","trae-inspector-end-column":"21","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D"})]}),s==="paused"&&B.jsxs(B.Fragment,{children:[B.jsx(Ym,{"trae-inspector-start-line":"33","trae-inspector-start-column":"10","trae-inspector-end-line":"33","trae-inspector-end-column":"24","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D"}),B.jsx(qm,{"trae-inspector-start-line":"34","trae-inspector-start-column":"10","trae-inspector-end-line":"34","trae-inspector-end-column":"21","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D"}),B.jsx(BE,{"trae-inspector-start-line":"35","trae-inspector-start-column":"10","trae-inspector-end-line":"35","trae-inspector-end-column":"25","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D"})]}),s==="gameOver"&&B.jsx(zE,{"trae-inspector-start-line":"40","trae-inspector-start-column":"36","trae-inspector-end-line":"40","trae-inspector-end-column":"54","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D"}),B.jsx(Zm,{"trae-inspector-start-line":"43","trae-inspector-start-column":"6","trae-inspector-end-line":"52","trae-inspector-end-column":"8","trae-inspector-file-path":"src/App.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",position:"top-center",toastOptions:{style:{background:"rgba(0, 0, 0, 0.8)",color:"white",border:"none"}}})]})}M0.createRoot(document.getElementById("root")).render(B.jsxs(yt.StrictMode,{"trae-inspector-start-line":"8","trae-inspector-start-column":"2","trae-inspector-end-line":"11","trae-inspector-end-column":"15","trae-inspector-file-path":"src/main.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D",children:[B.jsx(HE,{"trae-inspector-start-line":"9","trae-inspector-start-column":"4","trae-inspector-end-line":"9","trae-inspector-end-column":"11","trae-inspector-file-path":"src/main.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D"}),B.jsx(Zm,{"trae-inspector-start-line":"10","trae-inspector-start-column":"4","trae-inspector-end-line":"10","trae-inspector-end-column":"15","trae-inspector-file-path":"src/main.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2FUsers%2Fjosephkaram%2FDownloads%2Fzss%22%7D"})]}));
