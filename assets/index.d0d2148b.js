var m1=Object.defineProperty,g1=Object.defineProperties;var b1=Object.getOwnPropertyDescriptors;var pl=Object.getOwnPropertySymbols;var Qp=Object.prototype.hasOwnProperty,ef=Object.prototype.propertyIsEnumerable;var Jp=(e,t,n)=>t in e?m1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,he=(e,t)=>{for(var n in t||(t={}))Qp.call(t,n)&&Jp(e,n,t[n]);if(pl)for(var n of pl(t))ef.call(t,n)&&Jp(e,n,t[n]);return e},ze=(e,t)=>g1(e,b1(t));var tf=(e,t)=>{var n={};for(var o in e)Qp.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&pl)for(var o of pl(e))t.indexOf(o)<0&&ef.call(e,o)&&(n[o]=e[o]);return n};var v1=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var GG=v1(($n,An)=>{const y1=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};y1();function gu(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const _1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",w1=gu(_1);function Fg(e){return!!e||e===""}function Oe(e){if(Ye(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=Qe(o)?T1(o):Oe(o);if(r)for(const a in r)t[a]=r[a]}return t}else{if(Qe(e))return e;if(ut(e))return e}}const x1=/;(?![^(]*\))/g,k1=/:(.+)/;function T1(e){const t={};return e.split(x1).forEach(n=>{if(n){const o=n.split(k1);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function S(e){let t="";if(Qe(e))t=e;else if(Ye(e))for(let n=0;n<e.length;n++){const o=S(e[n]);o&&(t+=o+" ")}else if(ut(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function eo(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Qe(t)&&(e.class=S(t)),n&&(e.style=Oe(n)),e}function C1(e,t){if(e.length!==t.length)return!1;let n=!0;for(let o=0;n&&o<e.length;o++)n=va(e[o],t[o]);return n}function va(e,t){if(e===t)return!0;let n=nf(e),o=nf(t);if(n||o)return n&&o?e.getTime()===t.getTime():!1;if(n=Ci(e),o=Ci(t),n||o)return e===t;if(n=Ye(e),o=Ye(t),n||o)return n&&o?C1(e,t):!1;if(n=ut(e),o=ut(t),n||o){if(!n||!o)return!1;const r=Object.keys(e).length,a=Object.keys(t).length;if(r!==a)return!1;for(const i in e){const l=e.hasOwnProperty(i),s=t.hasOwnProperty(i);if(l&&!s||!l&&s||!va(e[i],t[i]))return!1}}return String(e)===String(t)}function Dg(e,t){return e.findIndex(n=>va(n,t))}const ve=e=>Qe(e)?e:e==null?"":Ye(e)||ut(e)&&(e.toString===Vg||!Je(e.toString))?JSON.stringify(e,Lg,2):String(e),Lg=(e,t)=>t&&t.__v_isRef?Lg(e,t.value):pa(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r])=>(n[`${o} =>`]=r,n),{})}:Ds(t)?{[`Set(${t.size})`]:[...t.values()]}:ut(t)&&!Ye(t)&&!Bg(t)?String(t):t,Nt={},ua=[],wt=()=>{},S1=()=>!1,$1=/^on[^a-z]/,Fs=e=>$1.test(e),bu=e=>e.startsWith("onUpdate:"),en=Object.assign,vu=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A1=Object.prototype.hasOwnProperty,lt=(e,t)=>A1.call(e,t),Ye=Array.isArray,pa=e=>Fa(e)==="[object Map]",Ds=e=>Fa(e)==="[object Set]",nf=e=>Fa(e)==="[object Date]",Je=e=>typeof e=="function",Qe=e=>typeof e=="string",Ci=e=>typeof e=="symbol",ut=e=>e!==null&&typeof e=="object",Vr=e=>ut(e)&&Je(e.then)&&Je(e.catch),Vg=Object.prototype.toString,Fa=e=>Vg.call(e),Nl=e=>Fa(e).slice(8,-1),Bg=e=>Fa(e)==="[object Object]",yu=e=>Qe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ml=gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ls=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},E1=/-(\w)/g,Bn=Ls(e=>e.replace(E1,(t,n)=>n?n.toUpperCase():"")),z1=/\B([A-Z])/g,fr=Ls(e=>e.replace(z1,"-$1").toLowerCase()),kn=Ls(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rl=Ls(e=>e?`on${kn(e)}`:""),Si=(e,t)=>!Object.is(e,t),Pl=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},us=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ps=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let of;const I1=()=>of||(of=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let wn;class jg{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&wn&&(this.parent=wn,this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}run(t){if(this.active){const n=wn;try{return wn=this,t()}finally{wn=n}}}on(){wn=this}off(){wn=this.parent}stop(t){if(this.active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function N1(e){return new jg(e)}function M1(e,t=wn){t&&t.active&&t.effects.push(e)}function R1(){return wn}function Hg(e){wn&&wn.cleanups.push(e)}const _u=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qg=e=>(e.w&cr)>0,Kg=e=>(e.n&cr)>0,P1=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=cr},O1=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];qg(r)&&!Kg(r)?r.delete(e):t[n++]=r,r.w&=~cr,r.n&=~cr}t.length=n}},rd=new WeakMap;let ri=0,cr=1;const ad=30;let Qn;const Mr=Symbol(""),id=Symbol("");class wu{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,M1(this,o)}run(){if(!this.active)return this.fn();let t=Qn,n=ir;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Qn,Qn=this,ir=!0,cr=1<<++ri,ri<=ad?P1(this):rf(this),this.fn()}finally{ri<=ad&&O1(this),cr=1<<--ri,Qn=this.parent,ir=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qn===this?this.deferStop=!0:this.active&&(rf(this),this.onStop&&this.onStop(),this.active=!1)}}function rf(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ir=!0;const Wg=[];function Kr(){Wg.push(ir),ir=!1}function Wr(){const e=Wg.pop();ir=e===void 0?!0:e}function zn(e,t,n){if(ir&&Qn){let o=rd.get(e);o||rd.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=_u()),Ug(r)}}function Ug(e,t){let n=!1;ri<=ad?Kg(e)||(e.n|=cr,n=!qg(e)):n=!e.has(Qn),n&&(e.add(Qn),Qn.deps.push(e))}function Io(e,t,n,o,r,a){const i=rd.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&Ye(e))i.forEach((s,c)=>{(c==="length"||c>=o)&&l.push(s)});else switch(n!==void 0&&l.push(i.get(n)),t){case"add":Ye(e)?yu(n)&&l.push(i.get("length")):(l.push(i.get(Mr)),pa(e)&&l.push(i.get(id)));break;case"delete":Ye(e)||(l.push(i.get(Mr)),pa(e)&&l.push(i.get(id)));break;case"set":pa(e)&&l.push(i.get(Mr));break}if(l.length===1)l[0]&&ld(l[0]);else{const s=[];for(const c of l)c&&s.push(...c);ld(_u(s))}}function ld(e,t){const n=Ye(e)?e:[...e];for(const o of n)o.computed&&af(o);for(const o of n)o.computed||af(o)}function af(e,t){(e!==Qn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const F1=gu("__proto__,__v_isRef,__isVue"),Yg=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ci)),D1=xu(),L1=xu(!1,!0),V1=xu(!0),lf=B1();function B1(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=kt(this);for(let a=0,i=this.length;a<i;a++)zn(o,"get",a+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(kt)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Kr();const o=kt(this)[t].apply(this,n);return Wr(),o}}),e}function xu(e=!1,t=!1){return function(o,r,a){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&a===(e?t?ow:Qg:t?Jg:Zg).get(o))return o;const i=Ye(o);if(!e&&i&&lt(lf,r))return Reflect.get(lf,r,a);const l=Reflect.get(o,r,a);return(Ci(r)?Yg.has(r):F1(r))||(e||zn(o,"get",r),t)?l:Vt(l)?i&&yu(r)?l:l.value:ut(l)?e?Zi(l):vt(l):l}}const j1=Gg(),H1=Gg(!0);function Gg(e=!1){return function(n,o,r,a){let i=n[o];if($i(i)&&Vt(i)&&!Vt(r))return!1;if(!e&&!$i(r)&&(sd(r)||(r=kt(r),i=kt(i)),!Ye(n)&&Vt(i)&&!Vt(r)))return i.value=r,!0;const l=Ye(n)&&yu(o)?Number(o)<n.length:lt(n,o),s=Reflect.set(n,o,r,a);return n===kt(a)&&(l?Si(r,i)&&Io(n,"set",o,r):Io(n,"add",o,r)),s}}function q1(e,t){const n=lt(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&Io(e,"delete",t,void 0),o}function K1(e,t){const n=Reflect.has(e,t);return(!Ci(t)||!Yg.has(t))&&zn(e,"has",t),n}function W1(e){return zn(e,"iterate",Ye(e)?"length":Mr),Reflect.ownKeys(e)}const Xg={get:D1,set:j1,deleteProperty:q1,has:K1,ownKeys:W1},U1={get:V1,set(e,t){return!0},deleteProperty(e,t){return!0}},Y1=en({},Xg,{get:L1,set:H1}),ku=e=>e,Vs=e=>Reflect.getPrototypeOf(e);function fl(e,t,n=!1,o=!1){e=e.__v_raw;const r=kt(e),a=kt(t);n||(t!==a&&zn(r,"get",t),zn(r,"get",a));const{has:i}=Vs(r),l=o?ku:n?Su:Ei;if(i.call(r,t))return l(e.get(t));if(i.call(r,a))return l(e.get(a));e!==r&&e.get(t)}function hl(e,t=!1){const n=this.__v_raw,o=kt(n),r=kt(e);return t||(e!==r&&zn(o,"has",e),zn(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function ml(e,t=!1){return e=e.__v_raw,!t&&zn(kt(e),"iterate",Mr),Reflect.get(e,"size",e)}function sf(e){e=kt(e);const t=kt(this);return Vs(t).has.call(t,e)||(t.add(e),Io(t,"add",e,e)),this}function cf(e,t){t=kt(t);const n=kt(this),{has:o,get:r}=Vs(n);let a=o.call(n,e);a||(e=kt(e),a=o.call(n,e));const i=r.call(n,e);return n.set(e,t),a?Si(t,i)&&Io(n,"set",e,t):Io(n,"add",e,t),this}function df(e){const t=kt(this),{has:n,get:o}=Vs(t);let r=n.call(t,e);r||(e=kt(e),r=n.call(t,e)),o&&o.call(t,e);const a=t.delete(e);return r&&Io(t,"delete",e,void 0),a}function uf(){const e=kt(this),t=e.size!==0,n=e.clear();return t&&Io(e,"clear",void 0,void 0),n}function gl(e,t){return function(o,r){const a=this,i=a.__v_raw,l=kt(i),s=t?ku:e?Su:Ei;return!e&&zn(l,"iterate",Mr),i.forEach((c,d)=>o.call(r,s(c),s(d),a))}}function bl(e,t,n){return function(...o){const r=this.__v_raw,a=kt(r),i=pa(a),l=e==="entries"||e===Symbol.iterator&&i,s=e==="keys"&&i,c=r[e](...o),d=n?ku:t?Su:Ei;return!t&&zn(a,"iterate",s?id:Mr),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:l?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Wo(e){return function(...t){return e==="delete"?!1:this}}function G1(){const e={get(a){return fl(this,a)},get size(){return ml(this)},has:hl,add:sf,set:cf,delete:df,clear:uf,forEach:gl(!1,!1)},t={get(a){return fl(this,a,!1,!0)},get size(){return ml(this)},has:hl,add:sf,set:cf,delete:df,clear:uf,forEach:gl(!1,!0)},n={get(a){return fl(this,a,!0)},get size(){return ml(this,!0)},has(a){return hl.call(this,a,!0)},add:Wo("add"),set:Wo("set"),delete:Wo("delete"),clear:Wo("clear"),forEach:gl(!0,!1)},o={get(a){return fl(this,a,!0,!0)},get size(){return ml(this,!0)},has(a){return hl.call(this,a,!0)},add:Wo("add"),set:Wo("set"),delete:Wo("delete"),clear:Wo("clear"),forEach:gl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=bl(a,!1,!1),n[a]=bl(a,!0,!1),t[a]=bl(a,!1,!0),o[a]=bl(a,!0,!0)}),[e,n,t,o]}const[X1,Z1,J1,Q1]=G1();function Tu(e,t){const n=t?e?Q1:J1:e?Z1:X1;return(o,r,a)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(lt(n,r)&&r in o?n:o,r,a)}const ew={get:Tu(!1,!1)},tw={get:Tu(!1,!0)},nw={get:Tu(!0,!1)},Zg=new WeakMap,Jg=new WeakMap,Qg=new WeakMap,ow=new WeakMap;function rw(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function aw(e){return e.__v_skip||!Object.isExtensible(e)?0:rw(Nl(e))}function vt(e){return $i(e)?e:Cu(e,!1,Xg,ew,Zg)}function iw(e){return Cu(e,!1,Y1,tw,Jg)}function Zi(e){return Cu(e,!0,U1,nw,Qg)}function Cu(e,t,n,o,r){if(!ut(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=r.get(e);if(a)return a;const i=aw(e);if(i===0)return e;const l=new Proxy(e,i===2?o:n);return r.set(e,l),l}function fa(e){return $i(e)?fa(e.__v_raw):!!(e&&e.__v_isReactive)}function $i(e){return!!(e&&e.__v_isReadonly)}function sd(e){return!!(e&&e.__v_isShallow)}function eb(e){return fa(e)||$i(e)}function kt(e){const t=e&&e.__v_raw;return t?kt(t):e}function Ai(e){return us(e,"__v_skip",!0),e}const Ei=e=>ut(e)?vt(e):e,Su=e=>ut(e)?Zi(e):e;function tb(e){ir&&Qn&&(e=kt(e),Ug(e.dep||(e.dep=_u())))}function $u(e,t){e=kt(e),e.dep&&ld(e.dep)}function Vt(e){return!!(e&&e.__v_isRef===!0)}function A(e){return nb(e,!1)}function Kt(e){return nb(e,!0)}function nb(e,t){return Vt(e)?e:new lw(e,t)}class lw{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:kt(t),this._value=n?t:Ei(t)}get value(){return tb(this),this._value}set value(t){t=this.__v_isShallow?t:kt(t),Si(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ei(t),$u(this))}}function Xa(e){$u(e)}function _(e){return Vt(e)?e.value:e}const sw={get:(e,t,n)=>_(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return Vt(r)&&!Vt(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function fs(e){return fa(e)?e:new Proxy(e,sw)}function Gt(e){const t=Ye(e)?new Array(e.length):{};for(const n in e)t[n]=Yt(e,n);return t}class cw{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Yt(e,t,n){const o=e[t];return Vt(o)?o:new cw(e,t,n)}class dw{constructor(t,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new wu(t,()=>{this._dirty||(this._dirty=!0,$u(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=kt(this);return tb(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function uw(e,t,n=!1){let o,r;const a=Je(e);return a?(o=e,r=wt):(o=e.get,r=e.set),new dw(o,r,a||!r,n)}const ci=[];function pw(e,...t){Kr();const n=ci.length?ci[ci.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=fw();if(o)Ao(o,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:a})=>`at <${Mb(n,a.type)}>`).join(`
`),r]);else{const a=[`[Vue warn]: ${e}`,...t];r.length&&a.push(`
`,...hw(r)),console.warn(...a)}Wr()}function fw(){let e=ci[ci.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function hw(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...mw(n))}),t}function mw({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,r=` at <${Mb(e.component,e.type,o)}`,a=">"+n;return e.props?[r,...gw(e.props),a]:[r+a]}function gw(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...ob(o,e[o]))}),n.length>3&&t.push(" ..."),t}function ob(e,t,n){return Qe(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Vt(t)?(t=ob(e,kt(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):Je(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=kt(t),n?t:[`${e}=`,t])}function Ao(e,t,n,o){let r;try{r=o?e(...o):e()}catch(a){Bs(a,t,n)}return r}function Fn(e,t,n,o){if(Je(e)){const a=Ao(e,t,n,o);return a&&Vr(a)&&a.catch(i=>{Bs(i,t,n)}),a}const r=[];for(let a=0;a<e.length;a++)r.push(Fn(e[a],t,n,o));return r}function Bs(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let a=t.parent;const i=t.proxy,l=n;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,i,l)===!1)return}a=a.parent}const s=t.appContext.config.errorHandler;if(s){Ao(s,null,10,[e,i,l]);return}}bw(e,n,r,o)}function bw(e,t,n,o=!0){console.error(e)}let hs=!1,cd=!1;const Tn=[];let So=0;const di=[];let ai=null,aa=0;const ui=[];let Zo=null,ia=0;const rb=Promise.resolve();let Au=null,dd=null;function je(e){const t=Au||rb;return e?t.then(this?e.bind(this):e):t}function vw(e){let t=So+1,n=Tn.length;for(;t<n;){const o=t+n>>>1;zi(Tn[o])<e?t=o+1:n=o}return t}function ab(e){(!Tn.length||!Tn.includes(e,hs&&e.allowRecurse?So+1:So))&&e!==dd&&(e.id==null?Tn.push(e):Tn.splice(vw(e.id),0,e),ib())}function ib(){!hs&&!cd&&(cd=!0,Au=rb.then(cb))}function yw(e){const t=Tn.indexOf(e);t>So&&Tn.splice(t,1)}function lb(e,t,n,o){Ye(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?o+1:o))&&n.push(e),ib()}function _w(e){lb(e,ai,di,aa)}function ww(e){lb(e,Zo,ui,ia)}function js(e,t=null){if(di.length){for(dd=t,ai=[...new Set(di)],di.length=0,aa=0;aa<ai.length;aa++)ai[aa]();ai=null,aa=0,dd=null,js(e,t)}}function sb(e){if(js(),ui.length){const t=[...new Set(ui)];if(ui.length=0,Zo){Zo.push(...t);return}for(Zo=t,Zo.sort((n,o)=>zi(n)-zi(o)),ia=0;ia<Zo.length;ia++)Zo[ia]();Zo=null,ia=0}}const zi=e=>e.id==null?1/0:e.id;function cb(e){cd=!1,hs=!0,js(e),Tn.sort((n,o)=>zi(n)-zi(o));const t=wt;try{for(So=0;So<Tn.length;So++){const n=Tn[So];n&&n.active!==!1&&Ao(n,null,14)}}finally{So=0,Tn.length=0,sb(),hs=!1,Au=null,(Tn.length||di.length||ui.length)&&cb(e)}}function xw(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Nt;let r=n;const a=t.startsWith("update:"),i=a&&t.slice(7);if(i&&i in o){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:p}=o[d]||Nt;p&&(r=n.map(f=>f.trim())),u&&(r=n.map(ps))}let l,s=o[l=Rl(t)]||o[l=Rl(Bn(t))];!s&&a&&(s=o[l=Rl(fr(t))]),s&&Fn(s,e,6,r);const c=o[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Fn(c,e,6,r)}}function db(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const a=e.emits;let i={},l=!1;if(!Je(e)){const s=c=>{const d=db(c,t,!0);d&&(l=!0,en(i,d))};!n&&t.mixins.length&&t.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!a&&!l?(o.set(e,null),null):(Ye(a)?a.forEach(s=>i[s]=null):en(i,a),o.set(e,i),i)}function Hs(e,t){return!e||!Fs(t)?!1:(t=t.slice(2).replace(/Once$/,""),lt(e,t[0].toLowerCase()+t.slice(1))||lt(e,fr(t))||lt(e,t))}let ln=null,qs=null;function ms(e){const t=ln;return ln=e,qs=e&&e.type.__scopeId||null,t}function kw(e){qs=e}function Tw(){qs=null}function K(e,t=ln,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&kf(-1);const a=ms(t),i=e(...r);return ms(a),o._d&&kf(1),i};return o._n=!0,o._c=!0,o._d=!0,o}function vc(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:a,propsOptions:[i],slots:l,attrs:s,emit:c,render:d,renderCache:u,data:p,setupState:f,ctx:h,inheritAttrs:b}=e;let m,g;const v=ms(e);try{if(n.shapeFlag&4){const T=r||o;m=mo(d.call(T,T,u,a,f,p,h)),g=s}else{const T=t;m=mo(T.length>1?T(a,{attrs:s,slots:l,emit:c}):T(a,null)),g=t.props?s:Cw(s)}}catch(T){hi.length=0,Bs(T,e,1),m=U(dn)}let y=m;if(g&&b!==!1){const T=Object.keys(g),{shapeFlag:x}=y;T.length&&x&7&&(i&&T.some(bu)&&(g=Sw(g,i)),y=No(y,g))}return n.dirs&&(y=No(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),m=y,ms(v),m}const Cw=e=>{let t;for(const n in e)(n==="class"||n==="style"||Fs(n))&&((t||(t={}))[n]=e[n]);return t},Sw=(e,t)=>{const n={};for(const o in e)(!bu(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function $w(e,t,n){const{props:o,children:r,component:a}=e,{props:i,children:l,patchFlag:s}=t,c=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&s>=0){if(s&1024)return!0;if(s&16)return o?pf(o,i,c):!!i;if(s&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(i[p]!==o[p]&&!Hs(c,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:o===i?!1:o?i?pf(o,i,c):!0:!!i;return!1}function pf(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const a=o[r];if(t[a]!==e[a]&&!Hs(n,a))return!0}return!1}function Aw({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ew=e=>e.__isSuspense;function zw(e,t){t&&t.pendingBranch?Ye(e)?t.effects.push(...e):t.effects.push(e):ww(e)}function ot(e,t){if(Qt){let n=Qt.provides;const o=Qt.parent&&Qt.parent.provides;o===n&&(n=Qt.provides=Object.create(o)),n[e]=t}}function Ie(e,t,n=!1){const o=Qt||ln;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&Je(t)?t.call(o.proxy):t}}function Dn(e,t){return Eu(e,null,t)}const ff={};function ge(e,t,n){return Eu(e,t,n)}function Eu(e,t,{immediate:n,deep:o,flush:r,onTrack:a,onTrigger:i}=Nt){const l=Qt;let s,c=!1,d=!1;if(Vt(e)?(s=()=>e.value,c=sd(e)):fa(e)?(s=()=>e,o=!0):Ye(e)?(d=!0,c=e.some(g=>fa(g)||sd(g)),s=()=>e.map(g=>{if(Vt(g))return g.value;if(fa(g))return Ar(g);if(Je(g))return Ao(g,l,2)})):Je(e)?t?s=()=>Ao(e,l,2):s=()=>{if(!(l&&l.isUnmounted))return u&&u(),Fn(e,l,3,[p])}:s=wt,t&&o){const g=s;s=()=>Ar(g())}let u,p=g=>{u=m.onStop=()=>{Ao(g,l,4)}};if(Ri)return p=wt,t?n&&Fn(t,l,3,[s(),d?[]:void 0,p]):s(),wt;let f=d?[]:ff;const h=()=>{if(!!m.active)if(t){const g=m.run();(o||c||(d?g.some((v,y)=>Si(v,f[y])):Si(g,f)))&&(u&&u(),Fn(t,l,3,[g,f===ff?void 0:f,p]),f=g)}else m.run()};h.allowRecurse=!!t;let b;r==="sync"?b=h:r==="post"?b=()=>fn(h,l&&l.suspense):b=()=>_w(h);const m=new wu(s,b);return t?n?h():f=m.run():r==="post"?fn(m.run.bind(m),l&&l.suspense):m.run(),()=>{m.stop(),l&&l.scope&&vu(l.scope.effects,m)}}function Iw(e,t,n){const o=this.proxy,r=Qe(e)?e.includes(".")?ub(o,e):()=>o[e]:e.bind(o,o);let a;Je(t)?a=t:(a=t.handler,n=t);const i=Qt;ya(this);const l=Eu(r,a.bind(o),n);return i?ya(i):Rr(),l}function ub(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function Ar(e,t){if(!ut(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Vt(e))Ar(e.value,t);else if(Ye(e))for(let n=0;n<e.length;n++)Ar(e[n],t);else if(Ds(e)||pa(e))e.forEach(n=>{Ar(n,t)});else if(Bg(e))for(const n in e)Ar(e[n],t);return e}function pb(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return et(()=>{e.isMounted=!0}),$t(()=>{e.isUnmounting=!0}),e}const Pn=[Function,Array],Nw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pn,onEnter:Pn,onAfterEnter:Pn,onEnterCancelled:Pn,onBeforeLeave:Pn,onLeave:Pn,onAfterLeave:Pn,onLeaveCancelled:Pn,onBeforeAppear:Pn,onAppear:Pn,onAfterAppear:Pn,onAppearCancelled:Pn},setup(e,{slots:t}){const n=nt(),o=pb();let r;return()=>{const a=t.default&&zu(t.default(),!0);if(!a||!a.length)return;let i=a[0];if(a.length>1){for(const b of a)if(b.type!==dn){i=b;break}}const l=kt(e),{mode:s}=l;if(o.isLeaving)return yc(i);const c=hf(i);if(!c)return yc(i);const d=Ii(c,l,o,n);Ni(c,d);const u=n.subTree,p=u&&hf(u);let f=!1;const{getTransitionKey:h}=c.type;if(h){const b=h();r===void 0?r=b:b!==r&&(r=b,f=!0)}if(p&&p.type!==dn&&(!Cr(c,p)||f)){const b=Ii(p,l,o,n);if(Ni(p,b),s==="out-in")return o.isLeaving=!0,b.afterLeave=()=>{o.isLeaving=!1,n.update()},yc(i);s==="in-out"&&c.type!==dn&&(b.delayLeave=(m,g,v)=>{const y=hb(o,p);y[String(p.key)]=p,m._leaveCb=()=>{g(),m._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=v})}return i}}},fb=Nw;function hb(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function Ii(e,t,n,o){const{appear:r,mode:a,persisted:i=!1,onBeforeEnter:l,onEnter:s,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:u,onLeave:p,onAfterLeave:f,onLeaveCancelled:h,onBeforeAppear:b,onAppear:m,onAfterAppear:g,onAppearCancelled:v}=t,y=String(e.key),T=hb(n,e),x=(z,P)=>{z&&Fn(z,o,9,P)},k=(z,P)=>{const O=P[1];x(z,P),Ye(z)?z.every(D=>D.length<=1)&&O():z.length<=1&&O()},$={mode:a,persisted:i,beforeEnter(z){let P=l;if(!n.isMounted)if(r)P=b||l;else return;z._leaveCb&&z._leaveCb(!0);const O=T[y];O&&Cr(e,O)&&O.el._leaveCb&&O.el._leaveCb(),x(P,[z])},enter(z){let P=s,O=c,D=d;if(!n.isMounted)if(r)P=m||s,O=g||c,D=v||d;else return;let L=!1;const F=z._enterCb=V=>{L||(L=!0,V?x(D,[z]):x(O,[z]),$.delayedLeave&&$.delayedLeave(),z._enterCb=void 0)};P?k(P,[z,F]):F()},leave(z,P){const O=String(e.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return P();x(u,[z]);let D=!1;const L=z._leaveCb=F=>{D||(D=!0,P(),F?x(h,[z]):x(f,[z]),z._leaveCb=void 0,T[O]===e&&delete T[O])};T[O]=e,p?k(p,[z,L]):L()},clone(z){return Ii(z,t,n,o)}};return $}function yc(e){if(Ks(e))return e=No(e),e.children=null,e}function hf(e){return Ks(e)?e.children?e.children[0]:void 0:e}function Ni(e,t){e.shapeFlag&6&&e.component?Ni(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function zu(e,t=!1,n){let o=[],r=0;for(let a=0;a<e.length;a++){let i=e[a];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:a);i.type===Fe?(i.patchFlag&128&&r++,o=o.concat(zu(i.children,t,l))):(t||i.type!==dn)&&o.push(l!=null?No(i,{key:l}):i)}if(r>1)for(let a=0;a<o.length;a++)o[a].patchFlag=-2;return o}function ee(e){return Je(e)?{setup:e,name:e.name}:e}const pi=e=>!!e.type.__asyncLoader,Ks=e=>e.type.__isKeepAlive;function Mw(e,t){mb(e,"a",t)}function Rw(e,t){mb(e,"da",t)}function mb(e,t,n=Qt){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ws(t,o,n),n){let r=n.parent;for(;r&&r.parent;)Ks(r.parent.vnode)&&Pw(o,t,n,r),r=r.parent}}function Pw(e,t,n,o){const r=Ws(t,e,o,!0);Qi(()=>{vu(o[t],r)},n)}function Ws(e,t,n=Qt,o=!1){if(n){const r=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Kr(),ya(n);const l=Fn(t,n,e,i);return Rr(),Wr(),l});return o?r.unshift(a):r.push(a),a}}const Lo=e=>(t,n=Qt)=>(!Ri||e==="sp")&&Ws(e,t,n),Ji=Lo("bm"),et=Lo("m"),gb=Lo("bu"),Un=Lo("u"),$t=Lo("bum"),Qi=Lo("um"),Ow=Lo("sp"),Fw=Lo("rtg"),Dw=Lo("rtc");function Lw(e,t=Qt){Ws("ec",e,t)}function Ue(e,t){const n=ln;if(n===null)return e;const o=Ys(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[i,l,s,c=Nt]=t[a];Je(i)&&(i={mounted:i,updated:i}),i.deep&&Ar(l),r.push({dir:i,instance:o,value:l,oldValue:void 0,arg:s,modifiers:c})}return e}function br(e,t,n,o){const r=e.dirs,a=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];a&&(l.oldValue=a[i].value);let s=l.dir[o];s&&(Kr(),Fn(s,n,8,[e.el,l,e,t]),Wr())}}const Iu="components",Vw="directives";function le(e,t){return Nu(Iu,e,!0,t)||e}const bb=Symbol();function pt(e){return Qe(e)?Nu(Iu,e,!1)||e:e||bb}function In(e){return Nu(Vw,e)}function Nu(e,t,n=!0,o=!1){const r=ln||Qt;if(r){const a=r.type;if(e===Iu){const l=Nb(a,!1);if(l&&(l===t||l===Bn(t)||l===kn(Bn(t))))return a}const i=mf(r[e]||a[e],t)||mf(r.appContext[e],t);return!i&&o?a:i}}function mf(e,t){return e&&(e[t]||e[Bn(t)]||e[kn(Bn(t))])}function ct(e,t,n,o){let r;const a=n&&n[o];if(Ye(e)||Qe(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,a&&a[i])}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,a&&a[i])}else if(ut(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,a&&a[l]));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,s=i.length;l<s;l++){const c=i[l];r[l]=t(e[c],c,l,a&&a[l])}}else r=[];return n&&(n[o]=r),r}function dr(e,t){for(let n=0;n<t.length;n++){const o=t[n];if(Ye(o))for(let r=0;r<o.length;r++)e[o[r].name]=o[r].fn;else o&&(e[o.name]=o.fn)}return e}function ue(e,t,n={},o,r){if(ln.isCE||ln.parent&&pi(ln.parent)&&ln.parent.isCE)return U("slot",t==="default"?null:{name:t},o&&o());let a=e[t];a&&a._c&&(a._d=!1),w();const i=a&&vb(a(n)),l=Q(Fe,{key:n.key||`_${t}`},i||(o?o():[]),i&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),a&&a._c&&(a._d=!0),l}function vb(e){return e.some(t=>jt(t)?!(t.type===dn||t.type===Fe&&!vb(t.children)):!0)?e:null}function Bw(e){const t={};for(const n in e)t[Rl(n)]=e[n];return t}const ud=e=>e?Eb(e)?Ys(e)||e.proxy:ud(e.parent):null,gs=en(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ud(e.parent),$root:e=>ud(e.root),$emit:e=>e.emit,$options:e=>_b(e),$forceUpdate:e=>e.f||(e.f=()=>ab(e.update)),$nextTick:e=>e.n||(e.n=je.bind(e.proxy)),$watch:e=>Iw.bind(e)}),jw={get({_:e},t){const{ctx:n,setupState:o,data:r,props:a,accessCache:i,type:l,appContext:s}=e;let c;if(t[0]!=="$"){const f=i[t];if(f!==void 0)switch(f){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return a[t]}else{if(o!==Nt&&lt(o,t))return i[t]=1,o[t];if(r!==Nt&&lt(r,t))return i[t]=2,r[t];if((c=e.propsOptions[0])&&lt(c,t))return i[t]=3,a[t];if(n!==Nt&&lt(n,t))return i[t]=4,n[t];pd&&(i[t]=0)}}const d=gs[t];let u,p;if(d)return t==="$attrs"&&zn(e,"get",t),d(e);if((u=l.__cssModules)&&(u=u[t]))return u;if(n!==Nt&&lt(n,t))return i[t]=4,n[t];if(p=s.config.globalProperties,lt(p,t))return p[t]},set({_:e},t,n){const{data:o,setupState:r,ctx:a}=e;return r!==Nt&&lt(r,t)?(r[t]=n,!0):o!==Nt&&lt(o,t)?(o[t]=n,!0):lt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:a}},i){let l;return!!n[i]||e!==Nt&&lt(e,i)||t!==Nt&&lt(t,i)||(l=a[0])&&lt(l,i)||lt(o,i)||lt(gs,i)||lt(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:lt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let pd=!0;function Hw(e){const t=_b(e),n=e.proxy,o=e.ctx;pd=!1,t.beforeCreate&&gf(t.beforeCreate,e,"bc");const{data:r,computed:a,methods:i,watch:l,provide:s,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:f,updated:h,activated:b,deactivated:m,beforeDestroy:g,beforeUnmount:v,destroyed:y,unmounted:T,render:x,renderTracked:k,renderTriggered:$,errorCaptured:z,serverPrefetch:P,expose:O,inheritAttrs:D,components:L,directives:F,filters:V}=t;if(c&&qw(c,o,null,e.appContext.config.unwrapInjectedRef),i)for(const E in i){const N=i[E];Je(N)&&(o[E]=N.bind(n))}if(r){const E=r.call(n,n);ut(E)&&(e.data=vt(E))}if(pd=!0,a)for(const E in a){const N=a[E],W=Je(N)?N.bind(n,n):Je(N.get)?N.get.bind(n,n):wt,Y=!Je(N)&&Je(N.set)?N.set.bind(n):wt,J=C({get:W,set:Y});Object.defineProperty(o,E,{enumerable:!0,configurable:!0,get:()=>J.value,set:Z=>J.value=Z})}if(l)for(const E in l)yb(l[E],o,n,E);if(s){const E=Je(s)?s.call(n):s;Reflect.ownKeys(E).forEach(N=>{ot(N,E[N])})}d&&gf(d,e,"c");function R(E,N){Ye(N)?N.forEach(W=>E(W.bind(n))):N&&E(N.bind(n))}if(R(Ji,u),R(et,p),R(gb,f),R(Un,h),R(Mw,b),R(Rw,m),R(Lw,z),R(Dw,k),R(Fw,$),R($t,v),R(Qi,T),R(Ow,P),Ye(O))if(O.length){const E=e.exposed||(e.exposed={});O.forEach(N=>{Object.defineProperty(E,N,{get:()=>n[N],set:W=>n[N]=W})})}else e.exposed||(e.exposed={});x&&e.render===wt&&(e.render=x),D!=null&&(e.inheritAttrs=D),L&&(e.components=L),F&&(e.directives=F)}function qw(e,t,n=wt,o=!1){Ye(e)&&(e=fd(e));for(const r in e){const a=e[r];let i;ut(a)?"default"in a?i=Ie(a.from||r,a.default,!0):i=Ie(a.from||r):i=Ie(a),Vt(i)&&o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[r]=i}}function gf(e,t,n){Fn(Ye(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function yb(e,t,n,o){const r=o.includes(".")?ub(n,o):()=>n[o];if(Qe(e)){const a=t[e];Je(a)&&ge(r,a)}else if(Je(e))ge(r,e.bind(n));else if(ut(e))if(Ye(e))e.forEach(a=>yb(a,t,n,o));else{const a=Je(e.handler)?e.handler.bind(n):t[e.handler];Je(a)&&ge(r,a,e)}}function _b(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:a,config:{optionMergeStrategies:i}}=e.appContext,l=a.get(t);let s;return l?s=l:!r.length&&!n&&!o?s=t:(s={},r.length&&r.forEach(c=>bs(s,c,i,!0)),bs(s,t,i)),a.set(t,s),s}function bs(e,t,n,o=!1){const{mixins:r,extends:a}=t;a&&bs(e,a,n,!0),r&&r.forEach(i=>bs(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const l=Kw[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Kw={data:bf,props:xr,emits:xr,methods:xr,computed:xr,beforeCreate:cn,created:cn,beforeMount:cn,mounted:cn,beforeUpdate:cn,updated:cn,beforeDestroy:cn,beforeUnmount:cn,destroyed:cn,unmounted:cn,activated:cn,deactivated:cn,errorCaptured:cn,serverPrefetch:cn,components:xr,directives:xr,watch:Uw,provide:bf,inject:Ww};function bf(e,t){return t?e?function(){return en(Je(e)?e.call(this,this):e,Je(t)?t.call(this,this):t)}:t:e}function Ww(e,t){return xr(fd(e),fd(t))}function fd(e){if(Ye(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function cn(e,t){return e?[...new Set([].concat(e,t))]:t}function xr(e,t){return e?en(en(Object.create(null),e),t):t}function Uw(e,t){if(!e)return t;if(!t)return e;const n=en(Object.create(null),e);for(const o in t)n[o]=cn(e[o],t[o]);return n}function Yw(e,t,n,o=!1){const r={},a={};us(a,Us,1),e.propsDefaults=Object.create(null),wb(e,t,r,a);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=o?r:iw(r):e.type.props?e.props=r:e.props=a,e.attrs=a}function Gw(e,t,n,o){const{props:r,attrs:a,vnode:{patchFlag:i}}=e,l=kt(r),[s]=e.propsOptions;let c=!1;if((o||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(Hs(e.emitsOptions,p))continue;const f=t[p];if(s)if(lt(a,p))f!==a[p]&&(a[p]=f,c=!0);else{const h=Bn(p);r[h]=hd(s,l,h,f,e,!1)}else f!==a[p]&&(a[p]=f,c=!0)}}}else{wb(e,t,r,a)&&(c=!0);let d;for(const u in l)(!t||!lt(t,u)&&((d=fr(u))===u||!lt(t,d)))&&(s?n&&(n[u]!==void 0||n[d]!==void 0)&&(r[u]=hd(s,l,u,void 0,e,!0)):delete r[u]);if(a!==l)for(const u in a)(!t||!lt(t,u)&&!0)&&(delete a[u],c=!0)}c&&Io(e,"set","$attrs")}function wb(e,t,n,o){const[r,a]=e.propsOptions;let i=!1,l;if(t)for(let s in t){if(Ml(s))continue;const c=t[s];let d;r&&lt(r,d=Bn(s))?!a||!a.includes(d)?n[d]=c:(l||(l={}))[d]=c:Hs(e.emitsOptions,s)||(!(s in o)||c!==o[s])&&(o[s]=c,i=!0)}if(a){const s=kt(n),c=l||Nt;for(let d=0;d<a.length;d++){const u=a[d];n[u]=hd(r,s,u,c[u],e,!lt(c,u))}}return i}function hd(e,t,n,o,r,a){const i=e[n];if(i!=null){const l=lt(i,"default");if(l&&o===void 0){const s=i.default;if(i.type!==Function&&Je(s)){const{propsDefaults:c}=r;n in c?o=c[n]:(ya(r),o=c[n]=s.call(null,t),Rr())}else o=s}i[0]&&(a&&!l?o=!1:i[1]&&(o===""||o===fr(n))&&(o=!0))}return o}function xb(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const a=e.props,i={},l=[];let s=!1;if(!Je(e)){const d=u=>{s=!0;const[p,f]=xb(u,t,!0);en(i,p),f&&l.push(...f)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!a&&!s)return o.set(e,ua),ua;if(Ye(a))for(let d=0;d<a.length;d++){const u=Bn(a[d]);vf(u)&&(i[u]=Nt)}else if(a)for(const d in a){const u=Bn(d);if(vf(u)){const p=a[d],f=i[u]=Ye(p)||Je(p)?{type:p}:p;if(f){const h=wf(Boolean,f.type),b=wf(String,f.type);f[0]=h>-1,f[1]=b<0||h<b,(h>-1||lt(f,"default"))&&l.push(u)}}}const c=[i,l];return o.set(e,c),c}function vf(e){return e[0]!=="$"}function yf(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function _f(e,t){return yf(e)===yf(t)}function wf(e,t){return Ye(t)?t.findIndex(n=>_f(n,e)):Je(t)&&_f(t,e)?0:-1}const kb=e=>e[0]==="_"||e==="$stable",Mu=e=>Ye(e)?e.map(mo):[mo(e)],Xw=(e,t,n)=>{if(t._n)return t;const o=K((...r)=>Mu(t(...r)),n);return o._c=!1,o},Tb=(e,t,n)=>{const o=e._ctx;for(const r in e){if(kb(r))continue;const a=e[r];if(Je(a))t[r]=Xw(r,a,o);else if(a!=null){const i=Mu(a);t[r]=()=>i}}},Cb=(e,t)=>{const n=Mu(t);e.slots.default=()=>n},Zw=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=kt(t),us(t,"_",n)):Tb(t,e.slots={})}else e.slots={},t&&Cb(e,t);us(e.slots,Us,1)},Jw=(e,t,n)=>{const{vnode:o,slots:r}=e;let a=!0,i=Nt;if(o.shapeFlag&32){const l=t._;l?n&&l===1?a=!1:(en(r,t),!n&&l===1&&delete r._):(a=!t.$stable,Tb(t,r)),i=t}else t&&(Cb(e,t),i={default:1});if(a)for(const l in r)!kb(l)&&!(l in i)&&delete r[l]};function Sb(){return{app:null,config:{isNativeTag:S1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qw=0;function ex(e,t){return function(o,r=null){Je(o)||(o=Object.assign({},o)),r!=null&&!ut(r)&&(r=null);const a=Sb(),i=new Set;let l=!1;const s=a.app={_uid:Qw++,_component:o,_props:r,_container:null,_context:a,_instance:null,version:vx,get config(){return a.config},set config(c){},use(c,...d){return i.has(c)||(c&&Je(c.install)?(i.add(c),c.install(s,...d)):Je(c)&&(i.add(c),c(s,...d))),s},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),s},component(c,d){return d?(a.components[c]=d,s):a.components[c]},directive(c,d){return d?(a.directives[c]=d,s):a.directives[c]},mount(c,d,u){if(!l){const p=U(o,r);return p.appContext=a,d&&t?t(p,c):e(p,c,u),l=!0,s._container=c,c.__vue_app__=s,Ys(p.component)||p.component.proxy}},unmount(){l&&(e(null,s._container),delete s._container.__vue_app__)},provide(c,d){return a.provides[c]=d,s}};return s}}function md(e,t,n,o,r=!1){if(Ye(e)){e.forEach((p,f)=>md(p,t&&(Ye(t)?t[f]:t),n,o,r));return}if(pi(o)&&!r)return;const a=o.shapeFlag&4?Ys(o.component)||o.component.proxy:o.el,i=r?null:a,{i:l,r:s}=e,c=t&&t.r,d=l.refs===Nt?l.refs={}:l.refs,u=l.setupState;if(c!=null&&c!==s&&(Qe(c)?(d[c]=null,lt(u,c)&&(u[c]=null)):Vt(c)&&(c.value=null)),Je(s))Ao(s,l,12,[i,d]);else{const p=Qe(s),f=Vt(s);if(p||f){const h=()=>{if(e.f){const b=p?d[s]:s.value;r?Ye(b)&&vu(b,a):Ye(b)?b.includes(a)||b.push(a):p?(d[s]=[a],lt(u,s)&&(u[s]=d[s])):(s.value=[a],e.k&&(d[e.k]=s.value))}else p?(d[s]=i,lt(u,s)&&(u[s]=i)):f&&(s.value=i,e.k&&(d[e.k]=i))};i?(h.id=-1,fn(h,n)):h()}}}const fn=zw;function tx(e){return nx(e)}function nx(e,t){const n=I1();n.__VUE__=!0;const{insert:o,remove:r,patchProp:a,createElement:i,createText:l,createComment:s,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:f=wt,cloneNode:h,insertStaticContent:b}=e,m=(j,X,de,xe=null,we=null,Ae=null,ce=!1,ae=null,te=!!X.dynamicChildren)=>{if(j===X)return;j&&!Cr(j,X)&&(xe=ie(j),se(j,we,Ae,!0),j=null),X.patchFlag===-2&&(te=!1,X.dynamicChildren=null);const{type:pe,ref:De,shapeFlag:B}=X;switch(pe){case tl:g(j,X,de,xe);break;case dn:v(j,X,de,xe);break;case _c:j==null&&y(X,de,xe,ce);break;case Fe:F(j,X,de,xe,we,Ae,ce,ae,te);break;default:B&1?k(j,X,de,xe,we,Ae,ce,ae,te):B&6?V(j,X,de,xe,we,Ae,ce,ae,te):(B&64||B&128)&&pe.process(j,X,de,xe,we,Ae,ce,ae,te,$e)}De!=null&&we&&md(De,j&&j.ref,Ae,X||j,!X)},g=(j,X,de,xe)=>{if(j==null)o(X.el=l(X.children),de,xe);else{const we=X.el=j.el;X.children!==j.children&&c(we,X.children)}},v=(j,X,de,xe)=>{j==null?o(X.el=s(X.children||""),de,xe):X.el=j.el},y=(j,X,de,xe)=>{[j.el,j.anchor]=b(j.children,X,de,xe,j.el,j.anchor)},T=({el:j,anchor:X},de,xe)=>{let we;for(;j&&j!==X;)we=p(j),o(j,de,xe),j=we;o(X,de,xe)},x=({el:j,anchor:X})=>{let de;for(;j&&j!==X;)de=p(j),r(j),j=de;r(X)},k=(j,X,de,xe,we,Ae,ce,ae,te)=>{ce=ce||X.type==="svg",j==null?$(X,de,xe,we,Ae,ce,ae,te):O(j,X,we,Ae,ce,ae,te)},$=(j,X,de,xe,we,Ae,ce,ae)=>{let te,pe;const{type:De,props:B,shapeFlag:me,transition:Be,patchFlag:Ze,dirs:Ve}=j;if(j.el&&h!==void 0&&Ze===-1)te=j.el=h(j.el);else{if(te=j.el=i(j.type,Ae,B&&B.is,B),me&8?d(te,j.children):me&16&&P(j.children,te,null,xe,we,Ae&&De!=="foreignObject",ce,ae),Ve&&br(j,null,xe,"created"),B){for(const ye in B)ye!=="value"&&!Ml(ye)&&a(te,ye,null,B[ye],Ae,j.children,xe,we,ne);"value"in B&&a(te,"value",null,B.value),(pe=B.onVnodeBeforeMount)&&ho(pe,xe,j)}z(te,j,j.scopeId,ce,xe)}Ve&&br(j,null,xe,"beforeMount");const re=(!we||we&&!we.pendingBranch)&&Be&&!Be.persisted;re&&Be.beforeEnter(te),o(te,X,de),((pe=B&&B.onVnodeMounted)||re||Ve)&&fn(()=>{pe&&ho(pe,xe,j),re&&Be.enter(te),Ve&&br(j,null,xe,"mounted")},we)},z=(j,X,de,xe,we)=>{if(de&&f(j,de),xe)for(let Ae=0;Ae<xe.length;Ae++)f(j,xe[Ae]);if(we){let Ae=we.subTree;if(X===Ae){const ce=we.vnode;z(j,ce,ce.scopeId,ce.slotScopeIds,we.parent)}}},P=(j,X,de,xe,we,Ae,ce,ae,te=0)=>{for(let pe=te;pe<j.length;pe++){const De=j[pe]=ae?tr(j[pe]):mo(j[pe]);m(null,De,X,de,xe,we,Ae,ce,ae)}},O=(j,X,de,xe,we,Ae,ce)=>{const ae=X.el=j.el;let{patchFlag:te,dynamicChildren:pe,dirs:De}=X;te|=j.patchFlag&16;const B=j.props||Nt,me=X.props||Nt;let Be;de&&vr(de,!1),(Be=me.onVnodeBeforeUpdate)&&ho(Be,de,X,j),De&&br(X,j,de,"beforeUpdate"),de&&vr(de,!0);const Ze=we&&X.type!=="foreignObject";if(pe?D(j.dynamicChildren,pe,ae,de,xe,Ze,Ae):ce||W(j,X,ae,null,de,xe,Ze,Ae,!1),te>0){if(te&16)L(ae,X,B,me,de,xe,we);else if(te&2&&B.class!==me.class&&a(ae,"class",null,me.class,we),te&4&&a(ae,"style",B.style,me.style,we),te&8){const Ve=X.dynamicProps;for(let re=0;re<Ve.length;re++){const ye=Ve[re],fe=B[ye],Ee=me[ye];(Ee!==fe||ye==="value")&&a(ae,ye,fe,Ee,we,j.children,de,xe,ne)}}te&1&&j.children!==X.children&&d(ae,X.children)}else!ce&&pe==null&&L(ae,X,B,me,de,xe,we);((Be=me.onVnodeUpdated)||De)&&fn(()=>{Be&&ho(Be,de,X,j),De&&br(X,j,de,"updated")},xe)},D=(j,X,de,xe,we,Ae,ce)=>{for(let ae=0;ae<X.length;ae++){const te=j[ae],pe=X[ae],De=te.el&&(te.type===Fe||!Cr(te,pe)||te.shapeFlag&70)?u(te.el):de;m(te,pe,De,null,xe,we,Ae,ce,!0)}},L=(j,X,de,xe,we,Ae,ce)=>{if(de!==xe){for(const ae in xe){if(Ml(ae))continue;const te=xe[ae],pe=de[ae];te!==pe&&ae!=="value"&&a(j,ae,pe,te,ce,X.children,we,Ae,ne)}if(de!==Nt)for(const ae in de)!Ml(ae)&&!(ae in xe)&&a(j,ae,de[ae],null,ce,X.children,we,Ae,ne);"value"in xe&&a(j,"value",de.value,xe.value)}},F=(j,X,de,xe,we,Ae,ce,ae,te)=>{const pe=X.el=j?j.el:l(""),De=X.anchor=j?j.anchor:l("");let{patchFlag:B,dynamicChildren:me,slotScopeIds:Be}=X;Be&&(ae=ae?ae.concat(Be):Be),j==null?(o(pe,de,xe),o(De,de,xe),P(X.children,de,De,we,Ae,ce,ae,te)):B>0&&B&64&&me&&j.dynamicChildren?(D(j.dynamicChildren,me,de,we,Ae,ce,ae),(X.key!=null||we&&X===we.subTree)&&Ru(j,X,!0)):W(j,X,de,De,we,Ae,ce,ae,te)},V=(j,X,de,xe,we,Ae,ce,ae,te)=>{X.slotScopeIds=ae,j==null?X.shapeFlag&512?we.ctx.activate(X,de,xe,ce,te):q(X,de,xe,we,Ae,ce,te):R(j,X,te)},q=(j,X,de,xe,we,Ae,ce)=>{const ae=j.component=ux(j,xe,we);if(Ks(j)&&(ae.ctx.renderer=$e),px(ae),ae.asyncDep){if(we&&we.registerDep(ae,E),!j.el){const te=ae.subTree=U(dn);v(null,te,X,de)}return}E(ae,j,X,de,we,Ae,ce)},R=(j,X,de)=>{const xe=X.component=j.component;if($w(j,X,de))if(xe.asyncDep&&!xe.asyncResolved){N(xe,X,de);return}else xe.next=X,yw(xe.update),xe.update();else X.el=j.el,xe.vnode=X},E=(j,X,de,xe,we,Ae,ce)=>{const ae=()=>{if(j.isMounted){let{next:De,bu:B,u:me,parent:Be,vnode:Ze}=j,Ve=De,re;vr(j,!1),De?(De.el=Ze.el,N(j,De,ce)):De=Ze,B&&Pl(B),(re=De.props&&De.props.onVnodeBeforeUpdate)&&ho(re,Be,De,Ze),vr(j,!0);const ye=vc(j),fe=j.subTree;j.subTree=ye,m(fe,ye,u(fe.el),ie(fe),j,we,Ae),De.el=ye.el,Ve===null&&Aw(j,ye.el),me&&fn(me,we),(re=De.props&&De.props.onVnodeUpdated)&&fn(()=>ho(re,Be,De,Ze),we)}else{let De;const{el:B,props:me}=X,{bm:Be,m:Ze,parent:Ve}=j,re=pi(X);if(vr(j,!1),Be&&Pl(Be),!re&&(De=me&&me.onVnodeBeforeMount)&&ho(De,Ve,X),vr(j,!0),B&&Me){const ye=()=>{j.subTree=vc(j),Me(B,j.subTree,j,we,null)};re?X.type.__asyncLoader().then(()=>!j.isUnmounted&&ye()):ye()}else{const ye=j.subTree=vc(j);m(null,ye,de,xe,j,we,Ae),X.el=ye.el}if(Ze&&fn(Ze,we),!re&&(De=me&&me.onVnodeMounted)){const ye=X;fn(()=>ho(De,Ve,ye),we)}(X.shapeFlag&256||Ve&&pi(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&j.a&&fn(j.a,we),j.isMounted=!0,X=de=xe=null}},te=j.effect=new wu(ae,()=>ab(pe),j.scope),pe=j.update=()=>te.run();pe.id=j.uid,vr(j,!0),pe()},N=(j,X,de)=>{X.component=j;const xe=j.vnode.props;j.vnode=X,j.next=null,Gw(j,X.props,xe,de),Jw(j,X.children,de),Kr(),js(void 0,j.update),Wr()},W=(j,X,de,xe,we,Ae,ce,ae,te=!1)=>{const pe=j&&j.children,De=j?j.shapeFlag:0,B=X.children,{patchFlag:me,shapeFlag:Be}=X;if(me>0){if(me&128){J(pe,B,de,xe,we,Ae,ce,ae,te);return}else if(me&256){Y(pe,B,de,xe,we,Ae,ce,ae,te);return}}Be&8?(De&16&&ne(pe,we,Ae),B!==pe&&d(de,B)):De&16?Be&16?J(pe,B,de,xe,we,Ae,ce,ae,te):ne(pe,we,Ae,!0):(De&8&&d(de,""),Be&16&&P(B,de,xe,we,Ae,ce,ae,te))},Y=(j,X,de,xe,we,Ae,ce,ae,te)=>{j=j||ua,X=X||ua;const pe=j.length,De=X.length,B=Math.min(pe,De);let me;for(me=0;me<B;me++){const Be=X[me]=te?tr(X[me]):mo(X[me]);m(j[me],Be,de,null,we,Ae,ce,ae,te)}pe>De?ne(j,we,Ae,!0,!1,B):P(X,de,xe,we,Ae,ce,ae,te,B)},J=(j,X,de,xe,we,Ae,ce,ae,te)=>{let pe=0;const De=X.length;let B=j.length-1,me=De-1;for(;pe<=B&&pe<=me;){const Be=j[pe],Ze=X[pe]=te?tr(X[pe]):mo(X[pe]);if(Cr(Be,Ze))m(Be,Ze,de,null,we,Ae,ce,ae,te);else break;pe++}for(;pe<=B&&pe<=me;){const Be=j[B],Ze=X[me]=te?tr(X[me]):mo(X[me]);if(Cr(Be,Ze))m(Be,Ze,de,null,we,Ae,ce,ae,te);else break;B--,me--}if(pe>B){if(pe<=me){const Be=me+1,Ze=Be<De?X[Be].el:xe;for(;pe<=me;)m(null,X[pe]=te?tr(X[pe]):mo(X[pe]),de,Ze,we,Ae,ce,ae,te),pe++}}else if(pe>me)for(;pe<=B;)se(j[pe],we,Ae,!0),pe++;else{const Be=pe,Ze=pe,Ve=new Map;for(pe=Ze;pe<=me;pe++){const _t=X[pe]=te?tr(X[pe]):mo(X[pe]);_t.key!=null&&Ve.set(_t.key,pe)}let re,ye=0;const fe=me-Ze+1;let Ee=!1,We=0;const gt=new Array(fe);for(pe=0;pe<fe;pe++)gt[pe]=0;for(pe=Be;pe<=B;pe++){const _t=j[pe];if(ye>=fe){se(_t,we,Ae,!0);continue}let Et;if(_t.key!=null)Et=Ve.get(_t.key);else for(re=Ze;re<=me;re++)if(gt[re-Ze]===0&&Cr(_t,X[re])){Et=re;break}Et===void 0?se(_t,we,Ae,!0):(gt[Et-Ze]=pe+1,Et>=We?We=Et:Ee=!0,m(_t,X[Et],de,null,we,Ae,ce,ae,te),ye++)}const Ct=Ee?ox(gt):ua;for(re=Ct.length-1,pe=fe-1;pe>=0;pe--){const _t=Ze+pe,Et=X[_t],Rn=_t+1<De?X[_t+1].el:xe;gt[pe]===0?m(null,Et,de,Rn,we,Ae,ce,ae,te):Ee&&(re<0||pe!==Ct[re]?Z(Et,de,Rn,2):re--)}}},Z=(j,X,de,xe,we=null)=>{const{el:Ae,type:ce,transition:ae,children:te,shapeFlag:pe}=j;if(pe&6){Z(j.component.subTree,X,de,xe);return}if(pe&128){j.suspense.move(X,de,xe);return}if(pe&64){ce.move(j,X,de,$e);return}if(ce===Fe){o(Ae,X,de);for(let B=0;B<te.length;B++)Z(te[B],X,de,xe);o(j.anchor,X,de);return}if(ce===_c){T(j,X,de);return}if(xe!==2&&pe&1&&ae)if(xe===0)ae.beforeEnter(Ae),o(Ae,X,de),fn(()=>ae.enter(Ae),we);else{const{leave:B,delayLeave:me,afterLeave:Be}=ae,Ze=()=>o(Ae,X,de),Ve=()=>{B(Ae,()=>{Ze(),Be&&Be()})};me?me(Ae,Ze,Ve):Ve()}else o(Ae,X,de)},se=(j,X,de,xe=!1,we=!1)=>{const{type:Ae,props:ce,ref:ae,children:te,dynamicChildren:pe,shapeFlag:De,patchFlag:B,dirs:me}=j;if(ae!=null&&md(ae,null,de,j,!0),De&256){X.ctx.deactivate(j);return}const Be=De&1&&me,Ze=!pi(j);let Ve;if(Ze&&(Ve=ce&&ce.onVnodeBeforeUnmount)&&ho(Ve,X,j),De&6)H(j.component,de,xe);else{if(De&128){j.suspense.unmount(de,xe);return}Be&&br(j,null,X,"beforeUnmount"),De&64?j.type.remove(j,X,de,we,$e,xe):pe&&(Ae!==Fe||B>0&&B&64)?ne(pe,X,de,!1,!0):(Ae===Fe&&B&384||!we&&De&16)&&ne(te,X,de),xe&&Se(j)}(Ze&&(Ve=ce&&ce.onVnodeUnmounted)||Be)&&fn(()=>{Ve&&ho(Ve,X,j),Be&&br(j,null,X,"unmounted")},de)},Se=j=>{const{type:X,el:de,anchor:xe,transition:we}=j;if(X===Fe){oe(de,xe);return}if(X===_c){x(j);return}const Ae=()=>{r(de),we&&!we.persisted&&we.afterLeave&&we.afterLeave()};if(j.shapeFlag&1&&we&&!we.persisted){const{leave:ce,delayLeave:ae}=we,te=()=>ce(de,Ae);ae?ae(j.el,Ae,te):te()}else Ae()},oe=(j,X)=>{let de;for(;j!==X;)de=p(j),r(j),j=de;r(X)},H=(j,X,de)=>{const{bum:xe,scope:we,update:Ae,subTree:ce,um:ae}=j;xe&&Pl(xe),we.stop(),Ae&&(Ae.active=!1,se(ce,j,X,de)),ae&&fn(ae,X),fn(()=>{j.isUnmounted=!0},X),X&&X.pendingBranch&&!X.isUnmounted&&j.asyncDep&&!j.asyncResolved&&j.suspenseId===X.pendingId&&(X.deps--,X.deps===0&&X.resolve())},ne=(j,X,de,xe=!1,we=!1,Ae=0)=>{for(let ce=Ae;ce<j.length;ce++)se(j[ce],X,de,xe,we)},ie=j=>j.shapeFlag&6?ie(j.component.subTree):j.shapeFlag&128?j.suspense.next():p(j.anchor||j.el),be=(j,X,de)=>{j==null?X._vnode&&se(X._vnode,null,null,!0):m(X._vnode||null,j,X,null,null,null,de),sb(),X._vnode=j},$e={p:m,um:se,m:Z,r:Se,mt:q,mc:P,pc:W,pbc:D,n:ie,o:e};let Ne,Me;return t&&([Ne,Me]=t($e)),{render:be,hydrate:Ne,createApp:ex(be,Ne)}}function vr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ru(e,t,n=!1){const o=e.children,r=t.children;if(Ye(o)&&Ye(r))for(let a=0;a<o.length;a++){const i=o[a];let l=r[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[a]=tr(r[a]),l.el=i.el),n||Ru(i,l))}}function ox(e){const t=e.slice(),n=[0];let o,r,a,i,l;const s=e.length;for(o=0;o<s;o++){const c=e[o];if(c!==0){if(r=n[n.length-1],e[r]<c){t[o]=r,n.push(o);continue}for(a=0,i=n.length-1;a<i;)l=a+i>>1,e[n[l]]<c?a=l+1:i=l;c<e[n[a]]&&(a>0&&(t[o]=n[a-1]),n[a]=o)}}for(a=n.length,i=n[a-1];a-- >0;)n[a]=i,i=t[i];return n}const rx=e=>e.__isTeleport,fi=e=>e&&(e.disabled||e.disabled===""),xf=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,gd=(e,t)=>{const n=e&&e.to;return Qe(n)?t?t(n):null:n},ax={__isTeleport:!0,process(e,t,n,o,r,a,i,l,s,c){const{mc:d,pc:u,pbc:p,o:{insert:f,querySelector:h,createText:b,createComment:m}}=c,g=fi(t.props);let{shapeFlag:v,children:y,dynamicChildren:T}=t;if(e==null){const x=t.el=b(""),k=t.anchor=b("");f(x,n,o),f(k,n,o);const $=t.target=gd(t.props,h),z=t.targetAnchor=b("");$&&(f(z,$),i=i||xf($));const P=(O,D)=>{v&16&&d(y,O,D,r,a,i,l,s)};g?P(n,k):$&&P($,z)}else{t.el=e.el;const x=t.anchor=e.anchor,k=t.target=e.target,$=t.targetAnchor=e.targetAnchor,z=fi(e.props),P=z?n:k,O=z?x:$;if(i=i||xf(k),T?(p(e.dynamicChildren,T,P,r,a,i,l),Ru(e,t,!0)):s||u(e,t,P,O,r,a,i,l,!1),g)z||vl(t,n,x,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const D=t.target=gd(t.props,h);D&&vl(t,D,null,c,0)}else z&&vl(t,k,$,c,1)}},remove(e,t,n,o,{um:r,o:{remove:a}},i){const{shapeFlag:l,children:s,anchor:c,targetAnchor:d,target:u,props:p}=e;if(u&&a(d),(i||!fi(p))&&(a(c),l&16))for(let f=0;f<s.length;f++){const h=s[f];r(h,t,n,!0,!!h.dynamicChildren)}},move:vl,hydrate:ix};function vl(e,t,n,{o:{insert:o},m:r},a=2){a===0&&o(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:s,children:c,props:d}=e,u=a===2;if(u&&o(i,t,n),(!u||fi(d))&&s&16)for(let p=0;p<c.length;p++)r(c[p],t,n,2);u&&o(l,t,n)}function ix(e,t,n,o,r,a,{o:{nextSibling:i,parentNode:l,querySelector:s}},c){const d=t.target=gd(t.props,s);if(d){const u=d._lpa||d.firstChild;if(t.shapeFlag&16)if(fi(t.props))t.anchor=c(i(e),t,l(e),n,o,r,a),t.targetAnchor=u;else{t.anchor=i(e);let p=u;for(;p;)if(p=i(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,d._lpa=t.targetAnchor&&i(t.targetAnchor);break}c(u,t,d,n,o,r,a)}}return t.anchor&&i(t.anchor)}const el=ax,Fe=Symbol(void 0),tl=Symbol(void 0),dn=Symbol(void 0),_c=Symbol(void 0),hi=[];let to=null;function w(e=!1){hi.push(to=e?null:[])}function lx(){hi.pop(),to=hi[hi.length-1]||null}let Mi=1;function kf(e){Mi+=e}function $b(e){return e.dynamicChildren=Mi>0?to||ua:null,lx(),Mi>0&&to&&to.push(e),e}function I(e,t,n,o,r,a){return $b(M(e,t,n,o,r,a,!0))}function Q(e,t,n,o,r){return $b(U(e,t,n,o,r,!0))}function jt(e){return e?e.__v_isVNode===!0:!1}function Cr(e,t){return e.type===t.type&&e.key===t.key}const Us="__vInternal",Ab=({key:e})=>e!=null?e:null,Ol=({ref:e,ref_key:t,ref_for:n})=>e!=null?Qe(e)||Vt(e)||Je(e)?{i:ln,r:e,k:t,f:!!n}:e:null;function M(e,t=null,n=null,o=0,r=null,a=e===Fe?0:1,i=!1,l=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ab(t),ref:t&&Ol(t),scopeId:qs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return l?(Pu(s,n),a&128&&e.normalize(s)):n&&(s.shapeFlag|=Qe(n)?8:16),Mi>0&&!i&&to&&(s.patchFlag>0||a&6)&&s.patchFlag!==32&&to.push(s),s}const U=sx;function sx(e,t=null,n=null,o=0,r=null,a=!1){if((!e||e===bb)&&(e=dn),jt(e)){const l=No(e,t,!0);return n&&Pu(l,n),Mi>0&&!a&&to&&(l.shapeFlag&6?to[to.indexOf(e)]=l:to.push(l)),l.patchFlag|=-2,l}if(bx(e)&&(e=e.__vccOpts),t){t=ur(t);let{class:l,style:s}=t;l&&!Qe(l)&&(t.class=S(l)),ut(s)&&(eb(s)&&!Ye(s)&&(s=en({},s)),t.style=Oe(s))}const i=Qe(e)?1:Ew(e)?128:rx(e)?64:ut(e)?4:Je(e)?2:0;return M(e,t,n,o,r,i,a,!0)}function ur(e){return e?eb(e)||Us in e?en({},e):e:null}function No(e,t,n=!1){const{props:o,ref:r,patchFlag:a,children:i}=e,l=t?St(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ab(l),ref:t&&t.ref?n&&r?Ye(r)?r.concat(Ol(t)):[r,Ol(t)]:Ol(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Fe?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&No(e.ssContent),ssFallback:e.ssFallback&&No(e.ssFallback),el:e.el,anchor:e.anchor}}function it(e=" ",t=0){return U(tl,null,e,t)}function G(e="",t=!1){return t?(w(),Q(dn,null,e)):U(dn,null,e)}function mo(e){return e==null||typeof e=="boolean"?U(dn):Ye(e)?U(Fe,null,e.slice()):typeof e=="object"?tr(e):U(tl,null,String(e))}function tr(e){return e.el===null||e.memo?e:No(e)}function Pu(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(Ye(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),Pu(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Us in t)?t._ctx=ln:r===3&&ln&&(ln.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Je(t)?(t={default:t,_ctx:ln},n=32):(t=String(t),o&64?(n=16,t=[it(t)]):n=8);e.children=t,e.shapeFlag|=n}function St(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=S([t.class,o.class]));else if(r==="style")t.style=Oe([t.style,o.style]);else if(Fs(r)){const a=t[r],i=o[r];i&&a!==i&&!(Ye(a)&&a.includes(i))&&(t[r]=a?[].concat(a,i):i)}else r!==""&&(t[r]=o[r])}return t}function ho(e,t,n,o=null){Fn(e,t,7,[n,o])}const cx=Sb();let dx=0;function ux(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||cx,a={uid:dx++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new jg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xb(o,r),emitsOptions:db(o,r),emit:null,emitted:null,propsDefaults:Nt,inheritAttrs:o.inheritAttrs,ctx:Nt,data:Nt,props:Nt,attrs:Nt,slots:Nt,refs:Nt,setupState:Nt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=xw.bind(null,a),e.ce&&e.ce(a),a}let Qt=null;const nt=()=>Qt||ln,ya=e=>{Qt=e,e.scope.on()},Rr=()=>{Qt&&Qt.scope.off(),Qt=null};function Eb(e){return e.vnode.shapeFlag&4}let Ri=!1;function px(e,t=!1){Ri=t;const{props:n,children:o}=e.vnode,r=Eb(e);Yw(e,n,r,t),Zw(e,o);const a=r?fx(e,t):void 0;return Ri=!1,a}function fx(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ai(new Proxy(e.ctx,jw));const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?Ib(e):null;ya(e),Kr();const a=Ao(o,e,0,[e.props,r]);if(Wr(),Rr(),Vr(a)){if(a.then(Rr,Rr),t)return a.then(i=>{Tf(e,i,t)}).catch(i=>{Bs(i,e,0)});e.asyncDep=a}else Tf(e,a,t)}else zb(e,t)}function Tf(e,t,n){Je(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ut(t)&&(e.setupState=fs(t)),zb(e,n)}let Cf;function zb(e,t,n){const o=e.type;if(!e.render){if(!t&&Cf&&!o.render){const r=o.template;if(r){const{isCustomElement:a,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:s}=o,c=en(en({isCustomElement:a,delimiters:l},i),s);o.render=Cf(r,c)}}e.render=o.render||wt}ya(e),Kr(),Hw(e),Wr(),Rr()}function hx(e){return new Proxy(e.attrs,{get(t,n){return zn(e,"get","$attrs"),t[n]}})}function Ib(e){const t=o=>{e.exposed=o||{}};let n;return{get attrs(){return n||(n=hx(e))},slots:e.slots,emit:e.emit,expose:t}}function Ys(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(fs(Ai(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gs)return gs[n](e)}}))}const mx=/(?:^|[-_])(\w)/g,gx=e=>e.replace(mx,t=>t.toUpperCase()).replace(/[-_]/g,"");function Nb(e,t=!0){return Je(e)?e.displayName||e.name:e.name||t&&e.__name}function Mb(e,t,n=!1){let o=Nb(t);if(!o&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(o=r[1])}if(!o&&e&&e.parent){const r=a=>{for(const i in a)if(a[i]===t)return i};o=r(e.components||e.parent.type.components)||r(e.appContext.components)}return o?gx(o):n?"App":"Anonymous"}function bx(e){return Je(e)&&"__vccOpts"in e}const C=(e,t)=>uw(e,t,Ri);function nl(){return Pb().slots}function Rb(){return Pb().attrs}function Pb(){const e=nt();return e.setupContext||(e.setupContext=Ib(e))}function Re(e,t,n){const o=arguments.length;return o===2?ut(t)&&!Ye(t)?jt(t)?U(e,null,[t]):U(e,t):U(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&jt(n)&&(n=[n]),U(e,t,n))}const vx="3.2.37",yx="http://www.w3.org/2000/svg",Sr=typeof document!="undefined"?document:null,Sf=Sr&&Sr.createElement("template"),_x={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t?Sr.createElementNS(yx,e):Sr.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>Sr.createTextNode(e),createComment:e=>Sr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Sr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o,r,a){const i=n?n.previousSibling:t.lastChild;if(r&&(r===a||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===a||!(r=r.nextSibling)););else{Sf.innerHTML=o?`<svg>${e}</svg>`:e;const l=Sf.content;if(o){const s=l.firstChild;for(;s.firstChild;)l.appendChild(s.firstChild);l.removeChild(s)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function wx(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function xx(e,t,n){const o=e.style,r=Qe(n);if(n&&!r){for(const a in n)bd(o,a,n[a]);if(t&&!Qe(t))for(const a in t)n[a]==null&&bd(o,a,"")}else{const a=o.display;r?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=a)}}const $f=/\s*!important$/;function bd(e,t,n){if(Ye(n))n.forEach(o=>bd(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=kx(e,t);$f.test(n)?e.setProperty(fr(o),n.replace($f,""),"important"):e[o]=n}}const Af=["Webkit","Moz","ms"],wc={};function kx(e,t){const n=wc[t];if(n)return n;let o=Bn(t);if(o!=="filter"&&o in e)return wc[t]=o;o=kn(o);for(let r=0;r<Af.length;r++){const a=Af[r]+o;if(a in e)return wc[t]=a}return t}const Ef="http://www.w3.org/1999/xlink";function Tx(e,t,n,o,r){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ef,t.slice(6,t.length)):e.setAttributeNS(Ef,t,n);else{const a=w1(t);n==null||a&&!Fg(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Cx(e,t,n,o,r,a,i){if(t==="innerHTML"||t==="textContent"){o&&i(o,r,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const s=typeof e[t];s==="boolean"?n=Fg(n):n==null&&s==="string"?(n="",l=!0):s==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[Ob,Sx]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let vd=0;const $x=Promise.resolve(),Ax=()=>{vd=0},Ex=()=>vd||($x.then(Ax),vd=Ob());function or(e,t,n,o){e.addEventListener(t,n,o)}function zx(e,t,n,o){e.removeEventListener(t,n,o)}function Ix(e,t,n,o,r=null){const a=e._vei||(e._vei={}),i=a[t];if(o&&i)i.value=o;else{const[l,s]=Nx(t);if(o){const c=a[t]=Mx(o,r);or(e,l,c,s)}else i&&(zx(e,l,i,s),a[t]=void 0)}}const zf=/(?:Once|Passive|Capture)$/;function Nx(e){let t;if(zf.test(e)){t={};let n;for(;n=e.match(zf);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[fr(e.slice(2)),t]}function Mx(e,t){const n=o=>{const r=o.timeStamp||Ob();(Sx||r>=n.attached-1)&&Fn(Rx(o,n.value),t,5,[o])};return n.value=e,n.attached=Ex(),n}function Rx(e,t){if(Ye(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const If=/^on[a-z]/,Px=(e,t,n,o,r=!1,a,i,l,s)=>{t==="class"?wx(e,o,r):t==="style"?xx(e,n,o):Fs(t)?bu(t)||Ix(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ox(e,t,o,r))?Cx(e,t,o,a,i,l,s):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Tx(e,t,o,r))};function Ox(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&If.test(t)&&Je(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||If.test(t)&&Qe(n)?!1:t in e}const Uo="transition",Za="animation",qt=(e,{slots:t})=>Re(fb,Db(e),t);qt.displayName="Transition";const Fb={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fx=qt.props=en({},fb.props,Fb),yr=(e,t=[])=>{Ye(e)?e.forEach(n=>n(...t)):e&&e(...t)},Nf=e=>e?Ye(e)?e.some(t=>t.length>1):e.length>1:!1;function Db(e){const t={};for(const L in e)L in Fb||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:o,duration:r,enterFromClass:a=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:s=a,appearActiveClass:c=i,appearToClass:d=l,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,h=Dx(r),b=h&&h[0],m=h&&h[1],{onBeforeEnter:g,onEnter:v,onEnterCancelled:y,onLeave:T,onLeaveCancelled:x,onBeforeAppear:k=g,onAppear:$=v,onAppearCancelled:z=y}=t,P=(L,F,V)=>{Jo(L,F?d:l),Jo(L,F?c:i),V&&V()},O=(L,F)=>{L._isLeaving=!1,Jo(L,u),Jo(L,f),Jo(L,p),F&&F()},D=L=>(F,V)=>{const q=L?$:v,R=()=>P(F,L,V);yr(q,[F,R]),Mf(()=>{Jo(F,L?s:a),Co(F,L?d:l),Nf(q)||Rf(F,o,b,R)})};return en(t,{onBeforeEnter(L){yr(g,[L]),Co(L,a),Co(L,i)},onBeforeAppear(L){yr(k,[L]),Co(L,s),Co(L,c)},onEnter:D(!1),onAppear:D(!0),onLeave(L,F){L._isLeaving=!0;const V=()=>O(L,F);Co(L,u),Vb(),Co(L,p),Mf(()=>{!L._isLeaving||(Jo(L,u),Co(L,f),Nf(T)||Rf(L,o,m,V))}),yr(T,[L,V])},onEnterCancelled(L){P(L,!1),yr(y,[L])},onAppearCancelled(L){P(L,!0),yr(z,[L])},onLeaveCancelled(L){O(L),yr(x,[L])}})}function Dx(e){if(e==null)return null;if(ut(e))return[xc(e.enter),xc(e.leave)];{const t=xc(e);return[t,t]}}function xc(e){return ps(e)}function Co(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Jo(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Mf(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Lx=0;function Rf(e,t,n,o){const r=e._endId=++Lx,a=()=>{r===e._endId&&o()};if(n)return setTimeout(a,n);const{type:i,timeout:l,propCount:s}=Lb(e,t);if(!i)return o();const c=i+"end";let d=0;const u=()=>{e.removeEventListener(c,p),a()},p=f=>{f.target===e&&++d>=s&&u()};setTimeout(()=>{d<s&&u()},l+1),e.addEventListener(c,p)}function Lb(e,t){const n=window.getComputedStyle(e),o=h=>(n[h]||"").split(", "),r=o(Uo+"Delay"),a=o(Uo+"Duration"),i=Pf(r,a),l=o(Za+"Delay"),s=o(Za+"Duration"),c=Pf(l,s);let d=null,u=0,p=0;t===Uo?i>0&&(d=Uo,u=i,p=a.length):t===Za?c>0&&(d=Za,u=c,p=s.length):(u=Math.max(i,c),d=u>0?i>c?Uo:Za:null,p=d?d===Uo?a.length:s.length:0);const f=d===Uo&&/\b(transform|all)(,|$)/.test(n[Uo+"Property"]);return{type:d,timeout:u,propCount:p,hasTransform:f}}function Pf(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Of(n)+Of(e[o])))}function Of(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Vb(){return document.body.offsetHeight}const Bb=new WeakMap,jb=new WeakMap,Vx={name:"TransitionGroup",props:en({},Fx,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=nt(),o=pb();let r,a;return Un(()=>{if(!r.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Kx(r[0].el,n.vnode.el,i))return;r.forEach(jx),r.forEach(Hx);const l=r.filter(qx);Vb(),l.forEach(s=>{const c=s.el,d=c.style;Co(c,i),d.transform=d.webkitTransform=d.transitionDuration="";const u=c._moveCb=p=>{p&&p.target!==c||(!p||/transform$/.test(p.propertyName))&&(c.removeEventListener("transitionend",u),c._moveCb=null,Jo(c,i))};c.addEventListener("transitionend",u)})}),()=>{const i=kt(e),l=Db(i);let s=i.tag||Fe;r=a,a=t.default?zu(t.default()):[];for(let c=0;c<a.length;c++){const d=a[c];d.key!=null&&Ni(d,Ii(d,l,o,n))}if(r)for(let c=0;c<r.length;c++){const d=r[c];Ni(d,Ii(d,l,o,n)),Bb.set(d,d.el.getBoundingClientRect())}return U(s,null,a)}}},Bx=Vx;function jx(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Hx(e){jb.set(e,e.el.getBoundingClientRect())}function qx(e){const t=Bb.get(e),n=jb.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${o}px,${r}px)`,a.transitionDuration="0s",e}}function Kx(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(l=>l&&o.classList.remove(l))}),n.split(/\s+/).forEach(i=>i&&o.classList.add(i)),o.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(o);const{hasTransform:a}=Lb(o);return r.removeChild(o),a}const _a=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Ye(t)?n=>Pl(t,n):t};function Wx(e){e.target.composing=!0}function Ff(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ou={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=_a(r);const a=o||r.props&&r.props.type==="number";or(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),a&&(l=ps(l)),e._assign(l)}),n&&or(e,"change",()=>{e.value=e.value.trim()}),t||(or(e,"compositionstart",Wx),or(e,"compositionend",Ff),or(e,"change",Ff))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:r}},a){if(e._assign=_a(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===t||(r||e.type==="number")&&ps(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},vs={deep:!0,created(e,t,n){e._assign=_a(n),or(e,"change",()=>{const o=e._modelValue,r=qb(e),a=e.checked,i=e._assign;if(Ye(o)){const l=Dg(o,r),s=l!==-1;if(a&&!s)i(o.concat(r));else if(!a&&s){const c=[...o];c.splice(l,1),i(c)}}else if(Ds(o)){const l=new Set(o);a?l.add(r):l.delete(r),i(l)}else i(Kb(e,a))})},mounted:Df,beforeUpdate(e,t,n){e._assign=_a(n),Df(e,t,n)}};function Df(e,{value:t,oldValue:n},o){e._modelValue=t,Ye(t)?e.checked=Dg(t,o.props.value)>-1:Ds(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=va(t,Kb(e,!0)))}const Hb={created(e,{value:t},n){e.checked=va(t,n.props.value),e._assign=_a(n),or(e,"change",()=>{e._assign(qb(e))})},beforeUpdate(e,{value:t,oldValue:n},o){e._assign=_a(o),t!==n&&(e.checked=va(t,o.props.value))}};function qb(e){return"_value"in e?e._value:e.value}function Kb(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ux=["ctrl","shift","alt","meta"],Yx={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ux.some(n=>e[`${n}Key`]&&!t.includes(n))},He=(e,t)=>(n,...o)=>{for(let r=0;r<t.length;r++){const a=Yx[t[r]];if(a&&a(n,t))return}return e(n,...o)},Gx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},st=(e,t)=>n=>{if(!("key"in n))return;const o=fr(n.key);if(t.some(r=>r===o||Gx[r]===o))return e(n)},ft={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Ja(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),Ja(e,!0),o.enter(e)):o.leave(e,()=>{Ja(e,!1)}):Ja(e,t))},beforeUnmount(e,{value:t}){Ja(e,t)}};function Ja(e,t){e.style.display=t?e._vod:"none"}const Xx=en({patchProp:Px},_x);let Lf;function Wb(){return Lf||(Lf=tx(Xx))}const wa=(...e)=>{Wb().render(...e)},Ub=(...e)=>{const t=Wb().createApp(...e),{mount:n}=t;return t.mount=o=>{const r=Zx(o);if(!r)return;const a=t._component;!Je(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Zx(e){return Qe(e)?document.querySelector(e):e}const Jx=it("Home"),Qx=it(" | "),e2=it("About"),t2=ee({__name:"App",setup(e){return(t,n)=>{const o=le("router-link"),r=le("router-view");return w(),I(Fe,null,[M("p",null,[U(o,{class:"rlink",to:"/"},{default:K(()=>[Jx]),_:1}),Qx,U(o,{class:"rlink",to:"/about"},{default:K(()=>[e2]),_:1})]),U(r)],64)}}});/**
  * vue-class-component v8.0.0-rc.1
  * (c) 2015-present Evan You
  * @license MIT
  */function Vf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bf(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n2(e,t,n){return t&&Bf(e.prototype,t),n&&Bf(e,n),e}function o2(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function kc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jf(Object(n),!0).forEach(function(o){o2(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jf(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function r2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&yd(e,t)}function ys(e){return ys=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ys(e)}function yd(e,t){return yd=Object.setPrototypeOf||function(o,r){return o.__proto__=r,o},yd(e,t)}function a2(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function i2(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l2(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:i2(e)}function s2(e){var t=a2();return function(){var o=ys(e),r;if(t){var a=ys(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return l2(this,r)}}function c2(e){return d2(e)||u2(e)||p2(e)||f2()}function d2(e){if(Array.isArray(e))return _d(e)}function u2(e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}function p2(e,t){if(!!e){if(typeof e=="string")return _d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _d(e,t)}}function _d(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function f2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yl(e,t,n){Object.defineProperty(e,t,{get:n,enumerable:!1,configurable:!0})}function h2(e,t,n){Object.defineProperty(e,t,{get:function(){return n[t].value},set:function(r){n[t].value=r},enumerable:!0,configurable:!0})}function m2(e){var t=Object.getPrototypeOf(e.prototype);if(!!t)return t.constructor}function _l(e,t){return e.hasOwnProperty(t)?e[t]:void 0}var Yb=function(){function e(t,n){var o=this;Vf(this,e),yl(this,"$props",function(){return t}),yl(this,"$attrs",function(){return n.attrs}),yl(this,"$slots",function(){return n.slots}),yl(this,"$emit",function(){return n.emit}),Object.keys(t).forEach(function(r){Object.defineProperty(o,r,{enumerable:!1,configurable:!0,writable:!0,value:t[r]})})}return n2(e,null,[{key:"registerHooks",value:function(n){var o;(o=this.__h).push.apply(o,c2(n))}},{key:"with",value:function(n){var o=new n,r={};Object.keys(o).forEach(function(i){var l=o[i];r[i]=l!=null?l:null});var a=function(i){r2(s,i);var l=s2(s);function s(){return Vf(this,s),l.apply(this,arguments)}return s}(this);return a.__b={props:r},a}},{key:"__vccOpts",get:function(){if(this===Fu)return{};var n=this,o=_l(n,"__c");if(o)return o;var r=kc({},_l(n,"__o"));n.__c=r;var a=m2(n);a&&(r.extends=a.__vccOpts);var i=_l(n,"__b");i&&(r.mixins=r.mixins||[],r.mixins.unshift(i)),r.methods=kc({},r.methods),r.computed=kc({},r.computed);var l=n.prototype;Object.getOwnPropertyNames(l).forEach(function(d){if(d!=="constructor"){if(n.__h.indexOf(d)>-1){r[d]=l[d];return}var u=Object.getOwnPropertyDescriptor(l,d);if(typeof u.value=="function"){r.methods[d]=u.value;return}if(u.get||u.set){r.computed[d]={get:u.get,set:u.set};return}}}),r.setup=function(d,u){var p,f=new n(d,u),h=Object.keys(f),b={},m=null;return h.forEach(function(g){f[g]===void 0||f[g]&&f[g].__s||(b[g]=A(f[g]),h2(f,g,b))}),h.forEach(function(g){if(f[g]&&f[g].__s){var v=f[g].__s();v instanceof Promise?(m||(m=Promise.resolve(b)),m=m.then(function(){return v.then(function(y){return b[g]=fs(y),b})})):b[g]=fs(v)}}),(p=m)!==null&&p!==void 0?p:b};var s=_l(n,"__d");s&&s.forEach(function(d){return d(r)});var c=["render","ssrRender","__file","__cssModules","__scopeId","__hmrId"];return c.forEach(function(d){n[d]&&(r[d]=n[d])}),r}}]),e}();Yb.__h=["data","beforeCreate","created","beforeMount","mounted","beforeUnmount","unmounted","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];var Fu=Yb;function Gb(e){return function(t){return t.__o=e,t}}var Hf=[{name:"audio",path:"./tf/audio.md",desc:" modulePublic API for tf.audio namespace.",type:"Modules",docs:`Public API for tf.audio namespace.
`},{name:"autodiff",path:"./tf/autodiff.md",desc:" modulePublic API for tf.autodiff namespace.",type:"Modules",docs:`Public API for tf.autodiff namespace.
`},{name:"autograph",path:"./tf/autograph.md",desc:" moduleConversion of eager-style Python into TensorFlow graph code.",type:"Modules",docs:`Conversion of eager-style Python into TensorFlow graph code.

NOTE: In TensorFlow 2.0, AutoGraph is automatically applied when using
\`tf.function\`. This module contains lower-level APIs for advanced use.

AutoGraph transforms a subset of Python which operates on TensorFlow objects
into equivalent TensorFlow graph code. When executing the graph, it has the same
effect as if you ran the original code in eager mode.
Python code which doesn't operate on TensorFlow objects remains functionally
unchanged, but keep in mind that \`tf.function\` only executes such code at trace
time, and generally will not be consistent with eager execution.

For more information, see the
[AutoGraph reference documentation](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/autograph/g3doc/reference/index.md),
and the [tf.function guide](https://www.tensorflow.org/guide/function#autograph_transformations).

`},{name:"bitwise",path:"./tf/bitwise.md",desc:" moduleOperations for manipulating the binary representations of integers.",type:"Modules",docs:`Operations for manipulating the binary representations of integers.
`},{name:"compat",path:"./tf/compat.md",desc:" moduleCompatibility functions.",type:"Modules",docs:`Compatibility functions.

The \`tf.compat\` module contains two sets of compatibility functions.

## Tensorflow 1.x and 2.x APIs

The \`compat.v1\` and \`compat.v2\` submodules provide a complete copy of both the
\`v1\` and \`v2\` APIs for backwards and forwards compatibility across TensorFlow
versions 1.x and 2.x. See the
[migration guide](https://www.tensorflow.org/guide/migrate) for details.

## Utilities for writing compatible code

Aside from the \`compat.v1\` and \`compat.v2\` submodules, \`tf.compat\` also contains
a set of helper functions for writing code that works in both:

* TensorFlow 1.x and 2.x
* Python 2 and 3


## Type collections

The compatibility module also provides the following aliases for common
sets of python types:

* \`bytes_or_text_types\`
* \`complex_types\`
* \`integral_types\`
* \`real_types\`

`},{name:"config",path:"./tf/config.md",desc:" modulePublic API for tf.config namespace.",type:"Modules",docs:`Public API for tf.config namespace.
`},{name:"data",path:"./tf/data.md",desc:' module<a href="./tf/data/Dataset.md"><code>tf.data.Dataset</code></a> API for input pipelines.',type:"Modules",docs:`\`tf.data.Dataset\` API for input pipelines.

See [Importing Data](https://tensorflow.org/guide/data) for an overview.

`},{name:"debugging",path:"./tf/debugging.md",desc:" modulePublic API for tf.debugging namespace.",type:"Modules",docs:`Public API for tf.debugging namespace.
`},{name:"distribute",path:"./tf/distribute.md",desc:" moduleLibrary for running a computation across multiple devices.",type:"Modules",docs:`Library for running a computation across multiple devices.

The intent of this library is that you can write an algorithm in a stylized way
and it will be usable with a variety of different \`tf.distribute.Strategy\`
implementations. Each descendant will implement a different strategy for
distributing the algorithm across multiple devices/machines.  Furthermore, these
changes can be hidden inside the specific layers and other library classes that
need special treatment to run in a distributed setting, so that most users'
model definition code can run unchanged. The \`tf.distribute.Strategy\` API works
the same way with eager and graph execution.

*Guides*

* [TensorFlow v2.x](https://www.tensorflow.org/guide/distributed_training)
* [TensorFlow v1.x](https://github.com/tensorflow/docs/blob/master/site/en/r1/guide/distribute_strategy.ipynb)

*Tutorials*

* [Distributed Training Tutorials](https://www.tensorflow.org/tutorials/distribute/)

  The tutorials cover how to use \`tf.distribute.Strategy\` to do distributed
  training with native Keras APIs, custom training loops,
  and Estimator APIs. They also cover how to save/load model when using
  \`tf.distribute.Strategy\`.

*Glossary*

* _Data parallelism_ is where we run multiple copies of the model
  on different slices of the input data. This is in contrast to
  _model parallelism_ where we divide up a single copy of a model
  across multiple devices.
  Note: we only support data parallelism for now, but
  hope to add support for model parallelism in the future.
* A _device_ is a CPU or accelerator (e.g. GPUs, TPUs) on some machine that
  TensorFlow can run operations on (see e.g. \`tf.device\`). You may have multiple
  devices on a single machine, or be connected to devices on multiple
  machines. Devices used to run computations are called _worker devices_.
  Devices used to store variables are _parameter devices_. For some strategies,
  such as \`tf.distribute.MirroredStrategy\`, the worker and parameter devices
  will be the same (see mirrored variables below). For others they will be
  different. For example, \`tf.distribute.experimental.CentralStorageStrategy\`
  puts the variables on a single device (which may be a worker device or may be
  the CPU), and \`tf.distribute.experimental.ParameterServerStrategy\` puts the
  variables on separate machines called _parameter servers_ (see below).
* A _replica_ is one copy of the model, running on one slice of the
  input data. Right now each replica is executed on its own
  worker device, but once we add support for model parallelism
  a replica may span multiple worker devices.
* A _host_ is the CPU device on a machine with worker devices, typically
  used for running input pipelines.
* A _worker_ is defined to be the physical machine(s) containing the physical
  devices (e.g. GPUs, TPUs) on which the replicated computation is executed. A
  worker may contain one or more replicas, but contains at least one
  replica. Typically one worker will correspond to one machine, but in the case
  of very large models with model parallelism, one worker may span multiple
  machines. We typically run one input pipeline per worker, feeding all the
  replicas on that worker.
* _Synchronous_, or more commonly _sync_, training is where the updates from
  each replica are aggregated together before updating the model variables. This
  is in contrast to _asynchronous_, or _async_ training, where each replica
  updates the model variables independently. You may also have replicas
  partitioned into groups which are in sync within each group but async between
  groups.
* _Parameter servers_: These are machines that hold a single copy of
  parameters/variables, used by some strategies (right now just
  \`tf.distribute.experimental.ParameterServerStrategy\`). All replicas that want
  to operate on a variable retrieve it at the beginning of a step and send an
  update to be applied at the end of the step. These can in principle support
  either sync or async training, but right now we only have support for async
  training with parameter servers. Compare to
  \`tf.distribute.experimental.CentralStorageStrategy\`, which puts all variables
  on a single device on the same machine (and does sync training), and
  \`tf.distribute.MirroredStrategy\`, which mirrors variables to multiple devices
  (see below).

* _Replica context_ vs. _Cross-replica context_ vs _Update context_

  A _replica context_ applies
  when you execute the computation function that was called with \`strategy.run\`.
  Conceptually, you're in replica context when executing the computation
  function that is being replicated.

  An _update context_ is entered in a \`tf.distribute.StrategyExtended.update\`
  call.

  An _cross-replica context_ is entered when you enter a \`strategy.scope\`. This
  is useful for calling \`tf.distribute.Strategy\` methods which operate across
  the replicas (like \`reduce_to()\`). By default you start in a _replica context_
  (the "default single _replica context_") and then some methods can switch you
  back and forth.

* _Distributed value_: Distributed value is represented by the base class
  \`tf.distribute.DistributedValues\`. \`tf.distribute.DistributedValues\` is useful
  to represent values on multiple devices, and it contains a map from replica id
  to values. Two representative kinds of \`tf.distribute.DistributedValues\` are
  "PerReplica" and "Mirrored" values.

  "PerReplica" values exist on the worker
  devices, with a different value for each replica. They are produced by
  iterating through a distributed dataset returned by
  \`tf.distribute.Strategy.experimental_distribute_dataset\` and
  \`tf.distribute.Strategy.distribute_datasets_from_function\`. They
  are also the typical result returned by
  \`tf.distribute.Strategy.run\`.

  "Mirrored" values are like "PerReplica" values, except we know that the value
  on all replicas are the same. We can safely read a "Mirrored" value in a
  cross-replica context by using the value on any replica.

* _Unwrapping_ and _merging_: Consider calling a function \`fn\` on multiple
  replicas, like \`strategy.run(fn, args=[w])\` with an
  argument \`w\` that is a \`tf.distribute.DistributedValues\`. This means \`w\` will
  have a map taking replica id \`0\` to \`w0\`, replica id \`1\` to \`w1\`, etc.
  \`strategy.run()\` unwraps \`w\` before calling \`fn\`, so it calls \`fn(w0)\` on
  device \`d0\`, \`fn(w1)\` on device \`d1\`, etc.  It then merges the return
  values from \`fn()\`, which leads to one common object if the returned values
  are the same object from every replica, or a \`DistributedValues\` object
  otherwise.

* _Reductions_ and _all-reduce_: A _reduction_ is a method of aggregating
  multiple values into one value, like "sum" or "mean". If a strategy is doing
  sync training, we will perform a reduction on the gradients to a parameter
  from all replicas before applying the update. _All-reduce_ is an algorithm for
  performing a reduction on values from multiple devices and making the result
  available on all of those devices.

* _Mirrored variables_: These are variables that are created on multiple
  devices, where we keep the variables in sync by applying the same
  updates to every copy. Mirrored variables are created with
  \`tf.Variable(...synchronization=tf.VariableSynchronization.ON_WRITE...)\`.
  Normally they are only used in synchronous training.

* _SyncOnRead variables_

  _SyncOnRead variables_ are created by
  \`tf.Variable(...synchronization=tf.VariableSynchronization.ON_READ...)\`, and
  they are created on multiple devices. In replica context, each
  component variable on the local replica can perform reads and writes without
  synchronization with each other. When the
  _SyncOnRead variable_ is read in cross-replica context, the values from
  component variables are aggregated and returned.

  _SyncOnRead variables_ bring a lot of custom configuration difficulty to the
  underlying logic, so we do not encourage users to instantiate and use
  _SyncOnRead variable_ on their own. We have mainly used _SyncOnRead
  variables_ for use cases such as batch norm and metrics. For performance
  reasons, we often don't need to keep these statistics in sync every step and
  they can be accumulated on each replica independently. The only time we want
  to sync them is reporting or checkpointing, which typically happens in
  cross-replica context. _SyncOnRead variables_ are also often used by advanced
  users who want to control when variable values are aggregated. For example,
  users sometimes want to maintain gradients independently on each replica for a
  couple of steps without aggregation.

* _Distribute-aware layers_

  Layers are generally called in a replica context, except when defining a
  Keras functional model. \`tf.distribute.in_cross_replica_context\` will let you
  determine which case you are in. If in a replica context,
  the \`tf.distribute.get_replica_context\` function will return the default
  replica context outside a strategy scope, \`None\` within a strategy scope, and
  a \`tf.distribute.ReplicaContext\` object inside a strategy scope and within a
  \`tf.distribute.Strategy.run\` function. The \`ReplicaContext\` object has an
  \`all_reduce\` method for aggregating across all replicas.


Note that we provide a default version of \`tf.distribute.Strategy\` that is
used when no other strategy is in scope, that provides the same API with
reasonable default behavior.

`},{name:"dtypes",path:"./tf/dtypes.md",desc:" modulePublic API for tf.dtypes namespace.",type:"Modules",docs:`Public API for tf.dtypes namespace.
`},{name:"errors",path:"./tf/errors.md",desc:" moduleException types for TensorFlow errors.",type:"Modules",docs:`Exception types for TensorFlow errors.
`},{name:"estimator",path:"./tf/estimator.md",desc:" moduleEstimatorHigh level tools for working with models.",type:"Modules",docs:null},{name:"experimental",path:"./tf/experimental.md",desc:" modulePublic API for tf.experimental namespace.",type:"Modules",docs:`Public API for tf.experimental namespace.
`},{name:"feature_column",path:"./tf/feature_column.md",desc:" modulePublic API for tf.feature_column namespace.",type:"Modules",docs:`Public API for tf.feature_column namespace.
`},{name:"graph_util",path:"./tf/graph_util.md",desc:" moduleHelpers to manipulate a tensor graph in python.",type:"Modules",docs:`Helpers to manipulate a tensor graph in python.

`},{name:"image",path:"./tf/image.md",desc:" moduleImage ops.",type:"Modules",docs:"Image ops.\n\nThe `tf.image` module contains various functions for image\nprocessing and decoding-encoding Ops.\n\nMany of the encoding/decoding functions are also available in the\ncore `tf.io` module.\n\n## Image processing\n\n### Resizing\n\nThe resizing Ops accept input images as tensors of several types. They always\noutput resized images as float32 tensors.\n\nThe convenience function `tf.image.resize` supports both 4-D\nand 3-D tensors as input and output.  4-D tensors are for batches of images,\n3-D tensors for individual images.\n\nResized images will be distorted if their original aspect ratio is not the\nsame as size. To avoid distortions see tf.image.resize_with_pad.\n\n*   `tf.image.resize`\n*   `tf.image.resize_with_pad`\n*   `tf.image.resize_with_crop_or_pad`\n\nThe Class `tf.image.ResizeMethod` provides various resize methods like\n`bilinear`, `nearest_neighbor`.\n\n### Converting Between Colorspaces\n\nImage ops work either on individual images or on batches of images, depending on\nthe shape of their input Tensor.\n\nIf 3-D, the shape is `[height, width, channels]`, and the Tensor represents one\nimage. If 4-D, the shape is `[batch_size, height, width, channels]`, and the\nTensor represents `batch_size` images.\n\nCurrently, `channels` can usefully be 1, 2, 3, or 4. Single-channel images are\ngrayscale, images with 3 channels are encoded as either RGB or HSV. Images\nwith 2 or 4 channels include an alpha channel, which has to be stripped from the\nimage before passing the image to most image processing functions (and can be\nre-attached later).\n\nInternally, images are either stored in as one `float32` per channel per pixel\n(implicitly, values are assumed to lie in `[0,1)`) or one `uint8` per channel\nper pixel (values are assumed to lie in `[0,255]`).\n\nTensorFlow can convert between images in RGB or HSV or YIQ.\n\n*   `tf.image.rgb_to_grayscale`, `tf.image.grayscale_to_rgb`\n*   `tf.image.rgb_to_hsv`, `tf.image.hsv_to_rgb`\n*   `tf.image.rgb_to_yiq`, `tf.image.yiq_to_rgb`\n*   `tf.image.rgb_to_yuv`, `tf.image.yuv_to_rgb`\n*   `tf.image.image_gradients`\n*   `tf.image.convert_image_dtype`\n\n### Image Adjustments\n\nTensorFlow provides functions to adjust images in various ways: brightness,\ncontrast, hue, and saturation.  Each adjustment can be done with predefined\nparameters or with random parameters picked from predefined intervals. Random\nadjustments are often useful to expand a training set and reduce overfitting.\n\nIf several adjustments are chained it is advisable to minimize the number of\nredundant conversions by first converting the images to the most natural data\ntype and representation.\n\n*   `tf.image.adjust_brightness`\n*   `tf.image.adjust_contrast`\n*   `tf.image.adjust_gamma`\n*   `tf.image.adjust_hue`\n*   `tf.image.adjust_jpeg_quality`\n*   `tf.image.adjust_saturation`\n*   `tf.image.random_brightness`\n*   `tf.image.random_contrast`\n*   `tf.image.random_hue`\n*   `tf.image.random_saturation`\n*   `tf.image.per_image_standardization`\n\n### Working with Bounding Boxes\n\n*   `tf.image.draw_bounding_boxes`\n*   `tf.image.combined_non_max_suppression`\n*   `tf.image.generate_bounding_box_proposals`\n*   `tf.image.non_max_suppression`\n*   `tf.image.non_max_suppression_overlaps`\n*   `tf.image.non_max_suppression_padded`\n*   `tf.image.non_max_suppression_with_scores`\n*   `tf.image.pad_to_bounding_box`\n*   `tf.image.sample_distorted_bounding_box`\n\n### Cropping\n\n*   `tf.image.central_crop`\n*   `tf.image.crop_and_resize`\n*   `tf.image.crop_to_bounding_box`\n*   `tf.io.decode_and_crop_jpeg`\n*   `tf.image.extract_glimpse`\n*   `tf.image.random_crop`\n*   `tf.image.resize_with_crop_or_pad`\n\n### Flipping, Rotating and Transposing\n\n*   `tf.image.flip_left_right`\n*   `tf.image.flip_up_down`\n*   `tf.image.random_flip_left_right`\n*   `tf.image.random_flip_up_down`\n*   `tf.image.rot90`\n*   `tf.image.transpose`\n\n## Image decoding and encoding\n\nTensorFlow provides Ops to decode and encode JPEG and PNG formats.  Encoded\nimages are represented by scalar string Tensors, decoded images by 3-D uint8\ntensors of shape `[height, width, channels]`. (PNG also supports uint16.)\n\nNote: `decode_gif` returns a 4-D array `[num_frames, height, width, 3]`\n\nThe encode and decode Ops apply to one image at a time.  Their input and output\nare all of variable size.  If you need fixed size images, pass the output of\nthe decode Ops to one of the cropping and resizing Ops.\n\n*   `tf.io.decode_bmp`\n*   `tf.io.decode_gif`\n*   `tf.io.decode_image`\n*   `tf.io.decode_jpeg`\n*   `tf.io.decode_and_crop_jpeg`\n*   `tf.io.decode_png`\n*   `tf.io.encode_jpeg`\n*   `tf.io.encode_png`\n\n\n"},{name:"io",path:"./tf/io.md",desc:" modulePublic API for tf.io namespace.",type:"Modules",docs:`Public API for tf.io namespace.
`},{name:"keras",path:"./tf/keras.md",desc:" moduleImplementation of the Keras API, the high-level API of TensorFlow.",type:"Modules",docs:`Implementation of the Keras API, the high-level API of TensorFlow.

Detailed documentation and user guides are available at
[keras.io](https://keras.io).

`},{name:"linalg",path:"./tf/linalg.md",desc:" moduleOperations for linear algebra.",type:"Modules",docs:`Operations for linear algebra.
`},{name:"lite",path:"./tf/lite.md",desc:" modulePublic API for tf.lite namespace.",type:"Modules",docs:`Public API for tf.lite namespace.
`},{name:"lookup",path:"./tf/lookup.md",desc:" modulePublic API for tf.lookup namespace.",type:"Modules",docs:`Public API for tf.lookup namespace.
`},{name:"math",path:"./tf/math.md",desc:" moduleMath Operations.",type:"Modules",docs:`Math Operations.

Note: Functions taking \`Tensor\` arguments can also take anything accepted by
\`tf.convert_to_tensor\`.

Note: Elementwise binary operations in TensorFlow follow [numpy-style
broadcasting](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html).

TensorFlow provides a variety of math functions including:

* Basic arithmetic operators and trigonometric functions.
* Special math functions (like: \`tf.math.igamma\` and \`tf.math.zeta\`)
* Complex number functions (like: \`tf.math.imag\` and \`tf.math.angle\`)
* Reductions and scans (like: \`tf.math.reduce_mean\` and \`tf.math.cumsum\`)
* Segment functions (like: \`tf.math.segment_sum\`)

See: \`tf.linalg\` for matrix and tensor functions.

<a id=Segmentation></a>

## About Segmentation

TensorFlow provides several operations that you can use to perform common
math computations on tensor segments.
Here a segmentation is a partitioning of a tensor along
the first dimension, i.e. it  defines a mapping from the first dimension onto
\`segment_ids\`. The \`segment_ids\` tensor should be the size of
the first dimension, \`d0\`, with consecutive IDs in the range \`0\` to \`k\`,
where \`k<d0\`.
In particular, a segmentation of a matrix tensor is a mapping of rows to
segments.

For example:

\`\`\`python
c = tf.constant([[1,2,3,4], [-1,-2,-3,-4], [5,6,7,8]])
tf.math.segment_sum(c, tf.constant([0, 0, 1]))
#  ==>  [[0 0 0 0]
#        [5 6 7 8]]
\`\`\`

The standard \`segment_*\` functions assert that the segment indices are sorted.
If you have unsorted indices use the equivalent \`unsorted_segment_\` function.
These functions take an additional argument \`num_segments\` so that the output
tensor can be efficiently allocated.

\`\`\` python
c = tf.constant([[1,2,3,4], [-1,-2,-3,-4], [5,6,7,8]])
tf.math.unsorted_segment_sum(c, tf.constant([0, 1, 0]), num_segments=2)
# ==> [[ 6,  8, 10, 12],
#       [-1, -2, -3, -4]]
\`\`\`


`},{name:"mlir",path:"./tf/mlir.md",desc:" modulePublic API for tf.mlir namespace.",type:"Modules",docs:`Public API for tf.mlir namespace.
`},{name:"nest",path:"./tf/nest.md",desc:" moduleFunctions that work with structures.",type:"Modules",docs:`Functions that work with structures.

A structure is either:

* one of the recognized Python collections, holding _nested structures_;
* a value of any other type, typically a TensorFlow data type like Tensor,
  Variable, or of compatible types such as int, float, ndarray, etc. these are
  commonly referred to as _atoms_ of the structure.

A structure of type \`T\` is a structure whose atomic items are of type \`T\`.
For example, a structure of \`tf.Tensor\` only contains \`tf.Tensor\` as its atoms.

Historically a _nested structure_ was called a _nested sequence_ in TensorFlow.
A nested structure is sometimes called a _nest_ or a _tree_, but the formal
name _nested structure_ is preferred.

Refer to [Nesting Data Structures]
(https://en.wikipedia.org/wiki/Nesting_(computing)#Data_structures).

The following collection types are recognized by \`tf.nest\` as nested
structures:

* \`collections.abc.Sequence\` (except \`string\` and \`bytes\`).
  This includes \`list\`, \`tuple\`, and \`namedtuple\`.
* \`collections.abc.Mapping\` (with sortable keys).
  This includes \`dict\` and \`collections.OrderedDict\`.
* \`collections.abc.MappingView\` (with sortable keys).
* [\`attr.s\` classes](https://www.attrs.org/).

Any other values are considered **atoms**.  Not all collection types are
considered nested structures.  For example, the following types are
considered atoms:

* \`set\`; \`{"a", "b"}\` is an atom, while \`["a", "b"]\` is a nested structure.
* [\`dataclass\` classes](https://docs.python.org/library/dataclasses.html)
* \`tf.Tensor\`
* \`numpy.array\`

\`tf.nest.is_nested\` checks whether an object is a nested structure or an atom.
For example:

  >>> tf.nest.is_nested("1234")
  False
  >>> tf.nest.is_nested([1, 3, [4, 5]])
  True
  >>> tf.nest.is_nested(((7, 8), (5, 6)))
  True
  >>> tf.nest.is_nested([])
  True
  >>> tf.nest.is_nested({"a": 1, "b": 2})
  True
  >>> tf.nest.is_nested({"a": 1, "b": 2}.keys())
  True
  >>> tf.nest.is_nested({"a": 1, "b": 2}.values())
  True
  >>> tf.nest.is_nested({"a": 1, "b": 2}.items())
  True
  >>> tf.nest.is_nested(set([1, 2]))
  False
  >>> ones = tf.ones([2, 3])
  >>> tf.nest.is_nested(ones)
  False

Note: A proper structure shall form a tree. The user shall ensure there is no
cyclic references within the items in the structure,
i.e., no references in the structure of the input of these functions
should be recursive. The behavior is undefined if there is a cycle.


`},{name:"nn",path:"./tf/nn.md",desc:" modulePrimitive Neural Net (NN",type:"Modules",docs:`Primitive Neural Net (NN) Operations.

## Notes on padding

Several neural network operations, such as \`tf.nn.conv2d\` and
\`tf.nn.max_pool2d\`, take a \`padding\` parameter, which controls how the input is
padded before running the operation. The input is padded by inserting values
(typically zeros) before and after the tensor in each spatial dimension. The
\`padding\` parameter can either be the string \`'VALID'\`, which means use no
padding, or \`'SAME'\` which adds padding according to a formula which is
described below. Certain ops also allow the amount of padding per dimension to
be explicitly specified by passing a list to \`padding\`.

In the case of convolutions, the input is padded with zeros. In case of pools,
the padded input values are ignored. For example, in a max pool, the sliding
window ignores padded values, which is equivalent to the padded values being
\`-infinity\`.

### \`'VALID'\` padding

Passing \`padding='VALID'\` to an op causes no padding to be used. This causes the
output size to typically be smaller than the input size, even when the stride is
one. In the 2D case, the output size is computed as:

\`\`\`python
out_height = ceil((in_height - filter_height + 1) / stride_height)
out_width  = ceil((in_width - filter_width + 1) / stride_width)
\`\`\`

The 1D and 3D cases are similar. Note \`filter_height\` and \`filter_width\` refer
to the filter size after dilations (if any) for convolutions, and refer to the
window size for pools.

### \`'SAME'\` padding

With \`'SAME'\` padding, padding is applied to each spatial dimension. When the
strides are 1, the input is padded such that the output size is the same as the
input size. In the 2D case, the output size is computed as:

\`\`\`python
out_height = ceil(in_height / stride_height)
out_width  = ceil(in_width / stride_width)
\`\`\`

The amount of padding used is the smallest amount that results in the output
size. The formula for the total amount of padding per dimension is:

\`\`\`python
if (in_height % strides[1] == 0):
  pad_along_height = max(filter_height - stride_height, 0)
else:
  pad_along_height = max(filter_height - (in_height % stride_height), 0)
if (in_width % strides[2] == 0):
  pad_along_width = max(filter_width - stride_width, 0)
else:
  pad_along_width = max(filter_width - (in_width % stride_width), 0)
\`\`\`

Finally, the padding on the top, bottom, left and right are:

\`\`\`python
pad_top = pad_along_height // 2
pad_bottom = pad_along_height - pad_top
pad_left = pad_along_width // 2
pad_right = pad_along_width - pad_left
\`\`\`

Note that the division by 2 means that there might be cases when the padding on
both sides (top vs bottom, right vs left) are off by one. In this case, the
bottom and right sides always get the one additional padded pixel. For example,
when pad_along_height is 5, we pad 2 pixels at the top and 3 pixels at the
bottom. Note that this is different from existing libraries such as PyTorch and
Caffe, which explicitly specify the number of padded pixels and always pad the
same number of pixels on both sides.

Here is an example of \`'SAME'\` padding:

>>> in_height = 5
>>> filter_height = 3
>>> stride_height = 2
>>>
>>> in_width = 2
>>> filter_width = 2
>>> stride_width = 1
>>>
>>> inp = tf.ones((2, in_height, in_width, 2))
>>> filter = tf.ones((filter_height, filter_width, 2, 2))
>>> strides = [stride_height, stride_width]
>>> output = tf.nn.conv2d(inp, filter, strides, padding='SAME')
>>> output.shape[1]  # output_height: ceil(5 / 2)
3
>>> output.shape[2] # output_width: ceil(2 / 1)
2

### Explicit padding

Certain ops, like \`tf.nn.conv2d\`, also allow a list of explicit padding amounts
to be passed to the \`padding\` parameter. This list is in the same format as what
is passed to \`tf.pad\`, except the padding must be a nested list, not a tensor.
For example, in the 2D case, the list is in the format \`[[0, 0], [pad_top,
pad_bottom], [pad_left, pad_right], [0, 0]]\` when \`data_format\` is its default
value of \`'NHWC'\`. The two \`[0, 0]\` pairs  indicate the batch and channel
dimensions have no padding, which is required, as only spatial dimensions can
have padding.

For example:

>>> inp = tf.ones((1, 3, 3, 1))
>>> filter = tf.ones((2, 2, 1, 1))
>>> strides = [1, 1]
>>> padding = [[0, 0], [1, 2], [0, 1], [0, 0]]
>>> output = tf.nn.conv2d(inp, filter, strides, padding=padding)
>>> tuple(output.shape)
(1, 5, 3, 1)
>>> # Equivalently, tf.pad can be used, since convolutions pad with zeros.
>>> inp = tf.pad(inp, padding)
>>> # 'VALID' means to use no padding in conv2d (we already padded inp)
>>> output2 = tf.nn.conv2d(inp, filter, strides, padding='VALID')
>>> tf.debugging.assert_equal(output, output2)

`},{name:"profiler",path:"./tf/profiler.md",desc:" modulePublic API for tf.profiler namespace.",type:"Modules",docs:`Public API for tf.profiler namespace.
`},{name:"quantization",path:"./tf/quantization.md",desc:" modulePublic API for tf.quantization namespace.",type:"Modules",docs:`Public API for tf.quantization namespace.
`},{name:"queue",path:"./tf/queue.md",desc:" modulePublic API for tf.queue namespace.",type:"Modules",docs:`Public API for tf.queue namespace.
`},{name:"ragged",path:"./tf/ragged.md",desc:" moduleRagged Tensors.",type:"Modules",docs:"Ragged Tensors.\n\nThis package defines ops for manipulating ragged tensors (`tf.RaggedTensor`),\nwhich are tensors with non-uniform shapes.  In particular, each `RaggedTensor`\nhas one or more *ragged dimensions*, which are dimensions whose slices may have\ndifferent lengths.  For example, the inner (column) dimension of\n`rt=[[3, 1, 4, 1], [], [5, 9, 2], [6], []]` is ragged, since the column slices\n(`rt[0, :]`, ..., `rt[4, :]`) have different lengths.  For a more detailed\ndescription of ragged tensors, see the `tf.RaggedTensor` class documentation\nand the [Ragged Tensor Guide](/guide/ragged_tensor).\n\n\n### Additional ops that support `RaggedTensor`\n\nArguments that accept `RaggedTensor`s are marked in **bold**.\n\n* `tf.__operators__.eq`(**self**, **other**)\n* `tf.__operators__.ne`(**self**, **other**)\n* `tf.bitcast`(**input**, type, name=`None`)\n* `tf.bitwise.bitwise_and`(**x**, **y**, name=`None`)\n* `tf.bitwise.bitwise_or`(**x**, **y**, name=`None`)\n* `tf.bitwise.bitwise_xor`(**x**, **y**, name=`None`)\n* `tf.bitwise.invert`(**x**, name=`None`)\n* `tf.bitwise.left_shift`(**x**, **y**, name=`None`)\n* `tf.bitwise.right_shift`(**x**, **y**, name=`None`)\n* `tf.broadcast_to`(**input**, **shape**, name=`None`)\n* `tf.cast`(**x**, dtype, name=`None`)\n* `tf.clip_by_value`(**t**, clip_value_min, clip_value_max, name=`None`)\n* `tf.concat`(**values**, axis, name=`'concat'`)\n* `tf.debugging.check_numerics`(**tensor**, message, name=`None`)\n* `tf.dtypes.complex`(**real**, **imag**, name=`None`)\n* `tf.dtypes.saturate_cast`(**value**, dtype, name=`None`)\n* `tf.dynamic_partition`(**data**, **partitions**, num_partitions, name=`None`)\n* `tf.expand_dims`(**input**, axis, name=`None`)\n* `tf.gather_nd`(**params**, **indices**, batch_dims=`0`, name=`None`)\n* `tf.gather`(**params**, **indices**, validate_indices=`None`, axis=`None`, batch_dims=`0`, name=`None`)\n* `tf.image.adjust_brightness`(**image**, delta)\n* `tf.image.adjust_gamma`(**image**, gamma=`1`, gain=`1`)\n* `tf.image.convert_image_dtype`(**image**, dtype, saturate=`False`, name=`None`)\n* `tf.image.random_brightness`(**image**, max_delta, seed=`None`)\n* `tf.image.resize`(**images**, size, method=`'bilinear'`, preserve_aspect_ratio=`False`, antialias=`False`, name=`None`)\n* `tf.image.stateless_random_brightness`(**image**, max_delta, seed)\n* `tf.io.decode_base64`(**input**, name=`None`)\n* `tf.io.decode_compressed`(**bytes**, compression_type=`''`, name=`None`)\n* `tf.io.encode_base64`(**input**, pad=`False`, name=`None`)\n* `tf.linalg.matmul`(**a**, **b**, transpose_a=`False`, transpose_b=`False`, adjoint_a=`False`, adjoint_b=`False`, a_is_sparse=`False`, b_is_sparse=`False`, output_type=`None`, name=`None`)\n* `tf.math.abs`(**x**, name=`None`)\n* `tf.math.acos`(**x**, name=`None`)\n* `tf.math.acosh`(**x**, name=`None`)\n* `tf.math.add_n`(**inputs**, name=`None`)\n* `tf.math.add`(**x**, **y**, name=`None`)\n* `tf.math.angle`(**input**, name=`None`)\n* `tf.math.asin`(**x**, name=`None`)\n* `tf.math.asinh`(**x**, name=`None`)\n* `tf.math.atan2`(**y**, **x**, name=`None`)\n* `tf.math.atan`(**x**, name=`None`)\n* `tf.math.atanh`(**x**, name=`None`)\n* `tf.math.bessel_i0`(**x**, name=`None`)\n* `tf.math.bessel_i0e`(**x**, name=`None`)\n* `tf.math.bessel_i1`(**x**, name=`None`)\n* `tf.math.bessel_i1e`(**x**, name=`None`)\n* `tf.math.ceil`(**x**, name=`None`)\n* `tf.math.conj`(**x**, name=`None`)\n* `tf.math.cos`(**x**, name=`None`)\n* `tf.math.cosh`(**x**, name=`None`)\n* `tf.math.digamma`(**x**, name=`None`)\n* `tf.math.divide_no_nan`(**x**, **y**, name=`None`)\n* `tf.math.divide`(**x**, **y**, name=`None`)\n* `tf.math.equal`(**x**, **y**, name=`None`)\n* `tf.math.erf`(**x**, name=`None`)\n* `tf.math.erfc`(**x**, name=`None`)\n* `tf.math.erfcinv`(**x**, name=`None`)\n* `tf.math.erfinv`(**x**, name=`None`)\n* `tf.math.exp`(**x**, name=`None`)\n* `tf.math.expm1`(**x**, name=`None`)\n* `tf.math.floor`(**x**, name=`None`)\n* `tf.math.floordiv`(**x**, **y**, name=`None`)\n* `tf.math.floormod`(**x**, **y**, name=`None`)\n* `tf.math.greater_equal`(**x**, **y**, name=`None`)\n* `tf.math.greater`(**x**, **y**, name=`None`)\n* `tf.math.imag`(**input**, name=`None`)\n* `tf.math.is_finite`(**x**, name=`None`)\n* `tf.math.is_inf`(**x**, name=`None`)\n* `tf.math.is_nan`(**x**, name=`None`)\n* `tf.math.less_equal`(**x**, **y**, name=`None`)\n* `tf.math.less`(**x**, **y**, name=`None`)\n* `tf.math.lgamma`(**x**, name=`None`)\n* `tf.math.log1p`(**x**, name=`None`)\n* `tf.math.log_sigmoid`(**x**, name=`None`)\n* `tf.math.log`(**x**, name=`None`)\n* `tf.math.logical_and`(**x**, **y**, name=`None`)\n* `tf.math.logical_not`(**x**, name=`None`)\n* `tf.math.logical_or`(**x**, **y**, name=`None`)\n* `tf.math.logical_xor`(**x**, **y**, name=`'LogicalXor'`)\n* `tf.math.maximum`(**x**, **y**, name=`None`)\n* `tf.math.minimum`(**x**, **y**, name=`None`)\n* `tf.math.multiply_no_nan`(**x**, **y**, name=`None`)\n* `tf.math.multiply`(**x**, **y**, name=`None`)\n* `tf.math.ndtri`(**x**, name=`None`)\n* `tf.math.negative`(**x**, name=`None`)\n* `tf.math.nextafter`(**x1**, x2, name=`None`)\n* `tf.math.not_equal`(**x**, **y**, name=`None`)\n* `tf.math.pow`(**x**, **y**, name=`None`)\n* `tf.math.real`(**input**, name=`None`)\n* `tf.math.reciprocal_no_nan`(**x**, name=`None`)\n* `tf.math.reciprocal`(**x**, name=`None`)\n* `tf.math.reduce_all`(**input_tensor**, axis=`None`, keepdims=`False`, name=`None`)\n* `tf.math.reduce_any`(**input_tensor**, axis=`None`, keepdims=`False`, name=`None`)\n* `tf.math.reduce_max`(**input_tensor**, axis=`None`, keepdims=`False`, name=`None`)\n* `tf.math.reduce_mean`(**input_tensor**, axis=`None`, keepdims=`False`, name=`None`)\n* `tf.math.reduce_min`(**input_tensor**, axis=`None`, keepdims=`False`, name=`None`)\n* `tf.math.reduce_prod`(**input_tensor**, axis=`None`, keepdims=`False`, name=`None`)\n* `tf.math.reduce_std`(**input_tensor**, axis=`None`, keepdims=`False`, name=`None`)\n* `tf.math.reduce_sum`(**input_tensor**, axis=`None`, keepdims=`False`, name=`None`)\n* `tf.math.reduce_variance`(**input_tensor**, axis=`None`, keepdims=`False`, name=`None`)\n* `tf.math.rint`(**x**, name=`None`)\n* `tf.math.round`(**x**, name=`None`)\n* `tf.math.rsqrt`(**x**, name=`None`)\n* `tf.math.scalar_mul`(**scalar**, **x**, name=`None`)\n* `tf.math.sigmoid`(**x**, name=`None`)\n* `tf.math.sign`(**x**, name=`None`)\n* `tf.math.sin`(**x**, name=`None`)\n* `tf.math.sinh`(**x**, name=`None`)\n* `tf.math.softplus`(**features**, name=`None`)\n* `tf.math.special.bessel_j0`(**x**, name=`None`)\n* `tf.math.special.bessel_j1`(**x**, name=`None`)\n* `tf.math.special.bessel_k0`(**x**, name=`None`)\n* `tf.math.special.bessel_k0e`(**x**, name=`None`)\n* `tf.math.special.bessel_k1`(**x**, name=`None`)\n* `tf.math.special.bessel_k1e`(**x**, name=`None`)\n* `tf.math.special.bessel_y0`(**x**, name=`None`)\n* `tf.math.special.bessel_y1`(**x**, name=`None`)\n* `tf.math.special.dawsn`(**x**, name=`None`)\n* `tf.math.special.expint`(**x**, name=`None`)\n* `tf.math.special.fresnel_cos`(**x**, name=`None`)\n* `tf.math.special.fresnel_sin`(**x**, name=`None`)\n* `tf.math.special.spence`(**x**, name=`None`)\n* `tf.math.sqrt`(**x**, name=`None`)\n* `tf.math.square`(**x**, name=`None`)\n* `tf.math.squared_difference`(**x**, **y**, name=`None`)\n* `tf.math.subtract`(**x**, **y**, name=`None`)\n* `tf.math.tan`(**x**, name=`None`)\n* `tf.math.tanh`(**x**, name=`None`)\n* `tf.math.truediv`(**x**, **y**, name=`None`)\n* `tf.math.unsorted_segment_max`(**data**, **segment_ids**, num_segments, name=`None`)\n* `tf.math.unsorted_segment_mean`(**data**, **segment_ids**, num_segments, name=`None`)\n* `tf.math.unsorted_segment_min`(**data**, **segment_ids**, num_segments, name=`None`)\n* `tf.math.unsorted_segment_prod`(**data**, **segment_ids**, num_segments, name=`None`)\n* `tf.math.unsorted_segment_sqrt_n`(**data**, **segment_ids**, num_segments, name=`None`)\n* `tf.math.unsorted_segment_sum`(**data**, **segment_ids**, num_segments, name=`None`)\n* `tf.math.xdivy`(**x**, **y**, name=`None`)\n* `tf.math.xlog1py`(**x**, **y**, name=`None`)\n* `tf.math.xlogy`(**x**, **y**, name=`None`)\n* `tf.math.zeta`(**x**, **q**, name=`None`)\n* `tf.nn.dropout`(**x**, rate, noise_shape=`None`, seed=`None`, name=`None`)\n* `tf.nn.elu`(**features**, name=`None`)\n* `tf.nn.gelu`(**features**, approximate=`False`, name=`None`)\n* `tf.nn.leaky_relu`(**features**, alpha=`0.2`, name=`None`)\n* `tf.nn.relu6`(**features**, name=`None`)\n* `tf.nn.relu`(**features**, name=`None`)\n* `tf.nn.selu`(**features**, name=`None`)\n* `tf.nn.sigmoid_cross_entropy_with_logits`(**labels**=`None`, **logits**=`None`, name=`None`)\n* `tf.nn.silu`(**features**, beta=`1.0`)\n* `tf.nn.softmax`(**logits**, axis=`None`, name=`None`)\n* `tf.nn.softsign`(**features**, name=`None`)\n* `tf.one_hot`(**indices**, depth, on_value=`None`, off_value=`None`, axis=`None`, dtype=`None`, name=`None`)\n* `tf.ones_like`(**input**, dtype=`None`, name=`None`)\n* `tf.print`(***inputs**, **kwargs)\n* `tf.rank`(**input**, name=`None`)\n* `tf.realdiv`(**x**, **y**, name=`None`)\n* `tf.reshape`(**tensor**, **shape**, name=`None`)\n* `tf.reverse`(**tensor**, axis, name=`None`)\n* `tf.size`(**input**, out_type=`tf.int32`, name=`None`)\n* `tf.split`(**value**, num_or_size_splits, axis=`0`, num=`None`, name=`'split'`)\n* `tf.squeeze`(**input**, axis=`None`, name=`None`)\n* `tf.stack`(**values**, axis=`0`, name=`'stack'`)\n* `tf.strings.as_string`(**input**, precision=`-1`, scientific=`False`, shortest=`False`, width=`-1`, fill=`''`, name=`None`)\n* `tf.strings.format`(**template**, **inputs**, placeholder=`'{}'`, summarize=`3`, name=`None`)\n* `tf.strings.join`(**inputs**, separator=`''`, name=`None`)\n* `tf.strings.length`(**input**, unit=`'BYTE'`, name=`None`)\n* `tf.strings.lower`(**input**, encoding=`''`, name=`None`)\n* `tf.strings.reduce_join`(**inputs**, axis=`None`, keepdims=`False`, separator=`''`, name=`None`)\n* `tf.strings.regex_full_match`(**input**, pattern, name=`None`)\n* `tf.strings.regex_replace`(**input**, pattern, rewrite, replace_global=`True`, name=`None`)\n* `tf.strings.strip`(**input**, name=`None`)\n* `tf.strings.substr`(**input**, pos, len, unit=`'BYTE'`, name=`None`)\n* `tf.strings.to_hash_bucket_fast`(**input**, num_buckets, name=`None`)\n* `tf.strings.to_hash_bucket_strong`(**input**, num_buckets, key, name=`None`)\n* `tf.strings.to_hash_bucket`(**input**, num_buckets, name=`None`)\n* `tf.strings.to_number`(**input**, out_type=`tf.float32`, name=`None`)\n* `tf.strings.unicode_script`(**input**, name=`None`)\n* `tf.strings.unicode_transcode`(**input**, input_encoding, output_encoding, errors=`'replace'`, replacement_char=`65533`, replace_control_characters=`False`, name=`None`)\n* `tf.strings.upper`(**input**, encoding=`''`, name=`None`)\n* `tf.tile`(**input**, multiples, name=`None`)\n* `tf.truncatediv`(**x**, **y**, name=`None`)\n* `tf.truncatemod`(**x**, **y**, name=`None`)\n* `tf.where`(**condition**, **x**=`None`, **y**=`None`, name=`None`)\n* `tf.zeros_like`(**input**, dtype=`None`, name=`None`)n\n"},{name:"random",path:"./tf/random.md",desc:" modulePublic API for tf.random namespace.",type:"Modules",docs:`Public API for tf.random namespace.
`},{name:"raw_ops",path:"./tf/raw_ops.md",desc:" modulePublic API for tf.raw_ops namespace.",type:"Modules",docs:`Public API for tf.raw_ops namespace.
`},{name:"saved_model",path:"./tf/saved_model.md",desc:" modulePublic API for tf.saved_model namespace.",type:"Modules",docs:`Public API for tf.saved_model namespace.
`},{name:"sets",path:"./tf/sets.md",desc:" moduleTensorflow set operations.",type:"Modules",docs:`Tensorflow set operations.
`},{name:"signal",path:"./tf/signal.md",desc:" moduleSignal processing operations.",type:"Modules",docs:`Signal processing operations.

See the [tf.signal](https://tensorflow.org/api_guides/python/contrib.signal)
guide.

@@frame
@@hamming_window
@@hann_window
@@inverse_stft
@@inverse_stft_window_fn
@@mfccs_from_log_mel_spectrograms
@@linear_to_mel_weight_matrix
@@overlap_and_add
@@stft

[hamming]: https://en.wikipedia.org/wiki/Window_function#Hamming_window
[hann]: https://en.wikipedia.org/wiki/Window_function#Hann_window
[mel]: https://en.wikipedia.org/wiki/Mel_scale
[mfcc]: https://en.wikipedia.org/wiki/Mel-frequency_cepstrum
[stft]: https://en.wikipedia.org/wiki/Short-time_Fourier_transform

`},{name:"sparse",path:"./tf/sparse.md",desc:" moduleSparse Tensor Representation.",type:"Modules",docs:`Sparse Tensor Representation.

See also \`tf.sparse.SparseTensor\`.

`},{name:"strings",path:"./tf/strings.md",desc:" moduleOperations for working with string Tensors.",type:"Modules",docs:`Operations for working with string Tensors.
`},{name:"summary",path:"./tf/summary.md",desc:" moduleOperations for writing summary data, for use in analysis and visualization.",type:"Modules",docs:`Operations for writing summary data, for use in analysis and visualization.

The \`tf.summary\` module provides APIs for writing summary data. This data can be
visualized in TensorBoard, the visualization toolkit that comes with TensorFlow.
See the [TensorBoard website](https://www.tensorflow.org/tensorboard) for more
detailed tutorials about how to use these APIs, or some quick examples below.

Example usage with eager execution, the default in TF 2.0:

\`\`\`python
writer = tf.summary.create_file_writer("/tmp/mylogs")
with writer.as_default():
  for step in range(100):
    # other model code would go here
    tf.summary.scalar("my_metric", 0.5, step=step)
    writer.flush()
\`\`\`

Example usage with \`tf.function\` graph execution:

\`\`\`python
writer = tf.summary.create_file_writer("/tmp/mylogs")

@tf.function
def my_func(step):
  # other model code would go here
  with writer.as_default():
    tf.summary.scalar("my_metric", 0.5, step=step)

for step in range(100):
  my_func(step)
  writer.flush()
\`\`\`

Example usage with legacy TF 1.x graph execution:

\`\`\`python
with tf.compat.v1.Graph().as_default():
  step = tf.Variable(0, dtype=tf.int64)
  step_update = step.assign_add(1)
  writer = tf.summary.create_file_writer("/tmp/mylogs")
  with writer.as_default():
    tf.summary.scalar("my_metric", 0.5, step=step)
  all_summary_ops = tf.compat.v1.summary.all_v2_summary_ops()
  writer_flush = writer.flush()

  sess = tf.compat.v1.Session()
  sess.run([writer.init(), step.initializer])
  for i in range(100):
    sess.run(all_summary_ops)
    sess.run(step_update)
    sess.run(writer_flush)
\`\`\`
`},{name:"sysconfig",path:"./tf/sysconfig.md",desc:" moduleSystem configuration library.",type:"Modules",docs:`System configuration library.
`},{name:"test",path:"./tf/test.md",desc:" moduleTesting.",type:"Modules",docs:`Testing.
`},{name:"tpu",path:"./tf/tpu.md",desc:" moduleOps related to Tensor Processing Units.",type:"Modules",docs:`Ops related to Tensor Processing Units.
`},{name:"train",path:"./tf/train.md",desc:" moduleSupport for training models.",type:"Modules",docs:`Support for training models.

See the [Training](https://tensorflow.org/api_guides/python/train) guide.

`},{name:"types",path:"./tf/types.md",desc:" modulePublic TensorFlow type definitions.",type:"Modules",docs:`Public TensorFlow type definitions.

For details, see
https://github.com/tensorflow/community/blob/master/rfcs/20200211-tf-types.md.

`},{name:"version",path:"./tf/version.md",desc:" modulePublic API for tf.version namespace.",type:"Modules",docs:`Public API for tf.version namespace.
`},{name:"xla",path:"./tf/xla.md",desc:" modulePublic API for tf.xla namespace.",type:"Modules",docs:`Public API for tf.xla namespace.
`},{name:"AggregationMethod",path:"./tf/AggregationMethod.md",desc:"A class listing aggregation methods used to combine gradients.",type:"Classes",docs:`A class listing aggregation methods used to combine gradients.

  Computing partial derivatives can require aggregating gradient
  contributions. This class lists the various methods that can
  be used to combine gradients in the graph.

  The following aggregation methods are part of the stable API for
  aggregating gradients:

  *  \`ADD_N\`: All of the gradient terms are summed as part of one
     operation using the "AddN" op (see \`tf.add_n\`). This
     method has the property that all gradients must be ready and
     buffered separately in memory before any aggregation is performed.
  *  \`DEFAULT\`: The system-chosen default aggregation method.

  The following aggregation methods are experimental and may not
  be supported in future releases:

  * \`EXPERIMENTAL_TREE\`: Gradient terms are summed in pairs using
    the "AddN" op. This method of summing gradients may reduce
    performance, but it can improve memory utilization because the
    gradients can be released earlier.

  `},{name:"CriticalSection",path:"./tf/CriticalSection.md",desc:"Critical section.",type:"Classes",docs:`Critical section.

  A \`CriticalSection\` object is a resource in the graph which executes subgraphs
  in **serial** order.  A common example of a subgraph one may wish to run
  exclusively is the one given by the following function:

  \`\`\`python
  v = resource_variable_ops.ResourceVariable(0.0, name="v")

  def count():
    value = v.read_value()
    with tf.control_dependencies([value]):
      with tf.control_dependencies([v.assign_add(1)]):
        return tf.identity(value)
  \`\`\`

  Here, a snapshot of \`v\` is captured in \`value\`; and then \`v\` is updated.
  The snapshot value is returned.

  If multiple workers or threads all execute \`count\` in parallel, there is no
  guarantee that access to the variable \`v\` is atomic at any point within
  any thread's calculation of \`count\`.  In fact, even implementing an atomic
  counter that guarantees that the user will see each value \`0, 1, ...,\` is
  currently impossible.

  The solution is to ensure any access to the underlying resource \`v\` is
  only processed through a critical section:

  \`\`\`python
  cs = CriticalSection()
  f1 = cs.execute(count)
  f2 = cs.execute(count)
  output = f1 + f2
  session.run(output)
  \`\`\`
  The functions \`f1\` and \`f2\` will be executed serially, and updates to \`v\`
  will be atomic.

  **NOTES**

  All resource objects, including the critical section and any captured
  variables of functions executed on that critical section, will be
  colocated to the same device (host and cpu/gpu).

  When using multiple critical sections on the same resources, there is no
  guarantee of exclusive access to those resources.  This behavior is disallowed
  by default (but see the kwarg \`exclusive_resource_access\`).

  For example, running the same function in two separate critical sections
  will not ensure serial execution:

  \`\`\`python
  v = tf.compat.v1.get_variable("v", initializer=0.0, use_resource=True)
  def accumulate(up):
    x = v.read_value()
    with tf.control_dependencies([x]):
      with tf.control_dependencies([v.assign_add(up)]):
        return tf.identity(x)
  ex1 = CriticalSection().execute(
    accumulate, 1.0, exclusive_resource_access=False)
  ex2 = CriticalSection().execute(
    accumulate, 1.0, exclusive_resource_access=False)
  bad_sum = ex1 + ex2
  sess.run(v.initializer)
  sess.run(bad_sum)  # May return 0.0
  \`\`\`
  `},{name:"DType",path:"./tf/dtypes/DType.md",desc:"Represents the type of the elements in a `Tensor`.",type:"Classes",docs:`Represents the type of the elements in a \`Tensor\`.

  \`DType\`'s are used to specify the output data type for operations which
  require it, or to inspect the data type of existing \`Tensor\`'s.

  Examples:

  >>> tf.constant(1, dtype=tf.int64)
  <tf.Tensor: shape=(), dtype=int64, numpy=1>
  >>> tf.constant(1.0).dtype
  tf.float32

  See \`tf.dtypes\` for a complete list of \`DType\`'s defined.
  `},{name:"DeviceSpec",path:"./tf/DeviceSpec.md",desc:"Represents a (possibly partial",type:"Classes",docs:`Represents a (possibly partial) specification for a TensorFlow device.

  \`DeviceSpec\`s are used throughout TensorFlow to describe where state is stored
  and computations occur. Using \`DeviceSpec\` allows you to parse device spec
  strings to verify their validity, merge them or compose them programmatically.

  Example:

  \`\`\`python
  # Place the operations on device "GPU:0" in the "ps" job.
  device_spec = DeviceSpec(job="ps", device_type="GPU", device_index=0)
  with tf.device(device_spec.to_string()):
    # Both my_var and squared_var will be placed on /job:ps/device:GPU:0.
    my_var = tf.Variable(..., name="my_variable")
    squared_var = tf.square(my_var)
  \`\`\`

  With eager execution disabled (by default in TensorFlow 1.x and by calling
  disable_eager_execution() in TensorFlow 2.x), the following syntax
  can be used:

  \`\`\`python
  tf.compat.v1.disable_eager_execution()

  # Same as previous
  device_spec = DeviceSpec(job="ps", device_type="GPU", device_index=0)
  # No need of .to_string() method.
  with tf.device(device_spec):
    my_var = tf.Variable(..., name="my_variable")
    squared_var = tf.square(my_var)
  \`\`\`

  If a \`DeviceSpec\` is partially specified, it will be merged with other
  \`DeviceSpec\`s according to the scope in which it is defined. \`DeviceSpec\`
  components defined in inner scopes take precedence over those defined in
  outer scopes.

  \`\`\`python
  gpu0_spec = DeviceSpec(job="ps", device_type="GPU", device_index=0)
  with tf.device(DeviceSpec(job="train").to_string()):
    with tf.device(gpu0_spec.to_string()):
      # Nodes created here will be assigned to /job:ps/device:GPU:0.
    with tf.device(DeviceSpec(device_type="GPU", device_index=1).to_string()):
      # Nodes created here will be assigned to /job:train/device:GPU:1.
  \`\`\`

  A \`DeviceSpec\` consists of 5 components -- each of
  which is optionally specified:

  * Job: The job name.
  * Replica: The replica index.
  * Task: The task index.
  * Device type: The device type string (e.g. "CPU" or "GPU").
  * Device index: The device index.
  `},{name:"GradientTape",path:"./tf/GradientTape.md",desc:"Record operations for automatic differentiation.",type:"Classes",docs:`Record operations for automatic differentiation.

  Operations are recorded if they are executed within this context manager and
  at least one of their inputs is being "watched".

  Trainable variables (created by \`tf.Variable\` or \`tf.compat.v1.get_variable\`,
  where \`trainable=True\` is default in both cases) are automatically watched.
  Tensors can be manually watched by invoking the \`watch\` method on this context
  manager.

  For example, consider the function \`y = x * x\`. The gradient at \`x = 3.0\` can
  be computed as:

  >>> x = tf.constant(3.0)
  >>> with tf.GradientTape() as g:
  ...   g.watch(x)
  ...   y = x * x
  >>> dy_dx = g.gradient(y, x)
  >>> print(dy_dx)
  tf.Tensor(6.0, shape=(), dtype=float32)

  GradientTapes can be nested to compute higher-order derivatives. For example,

  >>> x = tf.constant(5.0)
  >>> with tf.GradientTape() as g:
  ...   g.watch(x)
  ...   with tf.GradientTape() as gg:
  ...     gg.watch(x)
  ...     y = x * x
  ...   dy_dx = gg.gradient(y, x)  # dy_dx = 2 * x
  >>> d2y_dx2 = g.gradient(dy_dx, x)  # d2y_dx2 = 2
  >>> print(dy_dx)
  tf.Tensor(10.0, shape=(), dtype=float32)
  >>> print(d2y_dx2)
  tf.Tensor(2.0, shape=(), dtype=float32)

  By default, the resources held by a GradientTape are released as soon as
  GradientTape.gradient() method is called. To compute multiple gradients over
  the same computation, create a persistent gradient tape. This allows multiple
  calls to the gradient() method as resources are released when the tape object
  is garbage collected. For example:

  >>> x = tf.constant(3.0)
  >>> with tf.GradientTape(persistent=True) as g:
  ...   g.watch(x)
  ...   y = x * x
  ...   z = y * y
  >>> dz_dx = g.gradient(z, x)  # (4*x^3 at x = 3)
  >>> print(dz_dx)
  tf.Tensor(108.0, shape=(), dtype=float32)
  >>> dy_dx = g.gradient(y, x)
  >>> print(dy_dx)
  tf.Tensor(6.0, shape=(), dtype=float32)

  By default GradientTape will automatically watch any trainable variables that
  are accessed inside the context. If you want fine grained control over which
  variables are watched you can disable automatic tracking by passing
  \`watch_accessed_variables=False\` to the tape constructor:

  >>> x = tf.Variable(2.0)
  >>> w = tf.Variable(5.0)
  >>> with tf.GradientTape(
  ...     watch_accessed_variables=False, persistent=True) as tape:
  ...   tape.watch(x)
  ...   y = x ** 2  # Gradients will be available for \`x\`.
  ...   z = w ** 3  # No gradients will be available as \`w\` isn't being watched.
  >>> dy_dx = tape.gradient(y, x)
  >>> print(dy_dx)
  tf.Tensor(4.0, shape=(), dtype=float32)
  >>> # No gradients will be available as \`w\` isn't being watched.
  >>> dz_dw = tape.gradient(z, w)
  >>> print(dz_dw)
  None

  Note that when using models you should ensure that your variables exist when
  using \`watch_accessed_variables=False\`. Otherwise it's quite easy to make your
  first iteration not have any gradients:

  \`\`\`python
  a = tf.keras.layers.Dense(32)
  b = tf.keras.layers.Dense(32)

  with tf.GradientTape(watch_accessed_variables=False) as tape:
    tape.watch(a.variables)  # Since \`a.build\` has not been called at this point
                             # \`a.variables\` will return an empty list and the
                             # tape will not be watching anything.
    result = b(a(inputs))
    tape.gradient(result, a.variables)  # The result of this computation will be
                                        # a list of \`None\`s since a's variables
                                        # are not being watched.
  \`\`\`

  Note that only tensors with real or complex dtypes are differentiable.
  `},{name:"Graph",path:"./tf/Graph.md",desc:"A TensorFlow computation, represented as a dataflow graph.",type:"Classes",docs:`A TensorFlow computation, represented as a dataflow graph.

  Graphs are used by \`tf.function\`s to represent the function's computations.
  Each graph contains a set of \`tf.Operation\` objects, which represent units of
  computation; and \`tf.Tensor\` objects, which represent the units of data that
  flow between operations.

  ### Using graphs directly (deprecated)

  A \`tf.Graph\` can be constructed and used directly without a \`tf.function\`, as
  was required in TensorFlow 1, but this is deprecated and it is recommended to
  use a \`tf.function\` instead. If a graph is directly used, other deprecated
  TensorFlow 1 classes are also required to execute the graph, such as a
  \`tf.compat.v1.Session\`.

  A default graph can be registered with the \`tf.Graph.as_default\` context
  manager. Then, operations will be added to the graph instead of being executed
  eagerly. For example:

  \`\`\`python
  g = tf.Graph()
  with g.as_default():
    # Define operations and tensors in \`g\`.
    c = tf.constant(30.0)
    assert c.graph is g
  \`\`\`

  \`tf.compat.v1.get_default_graph()\` can be used to obtain the default graph.

  Important note: This class *is not* thread-safe for graph construction. All
  operations should be created from a single thread, or external
  synchronization must be provided. Unless otherwise specified, all methods
  are not thread-safe.

  A \`Graph\` instance supports an arbitrary number of "collections"
  that are identified by name. For convenience when building a large
  graph, collections can store groups of related objects: for
  example, the \`tf.Variable\` uses a collection (named
  \`tf.GraphKeys.GLOBAL_VARIABLES\`) for
  all variables that are created during the construction of a graph. The caller
  may define additional collections by specifying a new name.
  `},{name:"IndexedSlices",path:"./tf/IndexedSlices.md",desc:"A sparse representation of a set of tensor slices at given indices.",type:"Classes",docs:"A sparse representation of a set of tensor slices at given indices.\n\n  This class is a simple wrapper for a pair of `Tensor` objects:\n\n  * `values`: A `Tensor` of any dtype with shape `[D0, D1, ..., Dn]`.\n  * `indices`: A 1-D integer `Tensor` with shape `[D0]`.\n\n  An `IndexedSlices` is typically used to represent a subset of a larger\n  tensor `dense` of shape `[LARGE0, D1, .. , DN]` where `LARGE0 >> D0`.\n  The values in `indices` are the indices in the first dimension of\n  the slices that have been extracted from the larger tensor.\n\n  The dense tensor `dense` represented by an `IndexedSlices` `slices` has\n\n  ```python\n  dense[slices.indices[i], :, :, :, ...] = slices.values[i, :, :, :, ...]\n  ```\n\n  The `IndexedSlices` class is used principally in the definition of\n  gradients for operations that have sparse gradients\n  (e.g. `tf.gather`).\n\n  >>> v = tf.Variable([[0.,1, 2], [2, 3, 4], [4, 5, 6], [6, 7, 8]])\n  >>> with tf.GradientTape() as tape:\n  ...   r = tf.gather(v, [1,3])\n  >>> index_slices = tape.gradient(r,v)\n  >>> index_slices\n  <...IndexedSlices object ...>\n  >>> index_slices.indices.numpy()\n  array([1, 3], dtype=int32)\n  >>> index_slices.values.numpy()\n  array([[1., 1., 1.],\n         [1., 1., 1.]], dtype=float32)\n\n  Contrast this representation with\n  `tf.sparse.SparseTensor`,\n  which uses multi-dimensional indices and scalar values.\n  "},{name:"IndexedSlicesSpec",path:"./tf/IndexedSlicesSpec.md",desc:'Type specification for a <a href="./tf/IndexedSlices.md"><code>tf.IndexedSlices</code></a>.',type:"Classes",docs:"Type specification for a `tf.IndexedSlices`."},{name:"Module",path:"./tf/Module.md",desc:"Base neural network module class.",type:"Classes",docs:`Base neural network module class.

  A module is a named container for \`tf.Variable\`s, other \`tf.Module\`s and
  functions which apply to user input. For example a dense layer in a neural
  network might be implemented as a \`tf.Module\`:

  >>> class Dense(tf.Module):
  ...   def __init__(self, input_dim, output_size, name=None):
  ...     super(Dense, self).__init__(name=name)
  ...     self.w = tf.Variable(
  ...       tf.random.normal([input_dim, output_size]), name='w')
  ...     self.b = tf.Variable(tf.zeros([output_size]), name='b')
  ...   def __call__(self, x):
  ...     y = tf.matmul(x, self.w) + self.b
  ...     return tf.nn.relu(y)

  You can use the Dense layer as you would expect:

  >>> d = Dense(input_dim=3, output_size=2)
  >>> d(tf.ones([1, 3]))
  <tf.Tensor: shape=(1, 2), dtype=float32, numpy=..., dtype=float32)>


  By subclassing \`tf.Module\` instead of \`object\` any \`tf.Variable\` or
  \`tf.Module\` instances assigned to object properties can be collected using
  the \`variables\`, \`trainable_variables\` or \`submodules\` property:

  >>> d.variables
      (<tf.Variable 'b:0' shape=(2,) dtype=float32, numpy=...,
      dtype=float32)>,
      <tf.Variable 'w:0' shape=(3, 2) dtype=float32, numpy=..., dtype=float32)>)


  Subclasses of \`tf.Module\` can also take advantage of the \`_flatten\` method
  which can be used to implement tracking of any other types.

  All \`tf.Module\` classes have an associated \`tf.name_scope\` which can be used
  to group operations in TensorBoard and create hierarchies for variable names
  which can help with debugging. We suggest using the name scope when creating
  nested submodules/parameters or for forward methods whose graph you might want
  to inspect in TensorBoard. You can enter the name scope explicitly using
  \`with self.name_scope:\` or you can annotate methods (apart from \`__init__\`)
  with \`@tf.Module.with_name_scope\`.

  >>> class MLP(tf.Module):
  ...   def __init__(self, input_size, sizes, name=None):
  ...     super(MLP, self).__init__(name=name)
  ...     self.layers = []
  ...     with self.name_scope:
  ...       for size in sizes:
  ...         self.layers.append(Dense(input_dim=input_size, output_size=size))
  ...         input_size = size
  ...   @tf.Module.with_name_scope
  ...   def __call__(self, x):
  ...     for layer in self.layers:
  ...       x = layer(x)
  ...     return x

  >>> module = MLP(input_size=5, sizes=[5, 5])
  >>> module.variables
  (<tf.Variable 'mlp/b:0' shape=(5,) dtype=float32, numpy=..., dtype=float32)>,
  <tf.Variable 'mlp/w:0' shape=(5, 5) dtype=float32, numpy=...,
     dtype=float32)>,
  <tf.Variable 'mlp/b:0' shape=(5,) dtype=float32, numpy=..., dtype=float32)>,
  <tf.Variable 'mlp/w:0' shape=(5, 5) dtype=float32, numpy=...,
     dtype=float32)>)
  `},{name:"Operation",path:"./tf/Operation.md",desc:"Represents a graph node that performs computation on tensors.",type:"Classes",docs:'Represents a graph node that performs computation on tensors.\n\n  An `Operation` is a node in a `tf.Graph` that takes zero or more `Tensor`\n  objects as input, and produces zero or more `Tensor` objects as output.\n  Objects of type `Operation` are created by calling a Python op constructor\n  (such as `tf.matmul`) within a `tf.function` or under a `tf.Graph.as_default`\n  context manager.\n\n  For example, within a `tf.function`, `c = tf.matmul(a, b)` creates an\n  `Operation` of type "MatMul" that takes tensors `a` and `b` as input, and\n  produces `c` as output.\n\n  If a `tf.compat.v1.Session` is used, an `Operation` of a `tf.Graph` can be\n  executed by passing it to `tf.Session.run`. `op.run()` is a shortcut for\n  calling `tf.compat.v1.get_default_session().run(op)`.\n  '},{name:"OptionalSpec",path:"./tf/OptionalSpec.md",desc:'Type specification for <a href="./tf/experimental/Optional.md"><code>tf.experimental.Optional</code></a>.',type:"Classes",docs:`Type specification for \`tf.experimental.Optional\`.

  For instance, \`tf.OptionalSpec\` can be used to define a tf.function that takes
  \`tf.experimental.Optional\` as an input argument:

  >>> @tf.function(input_signature=[tf.OptionalSpec(
  ...   tf.TensorSpec(shape=(), dtype=tf.int32, name=None))])
  ... def maybe_square(optional):
  ...   if optional.has_value():
  ...     x = optional.get_value()
  ...     return x * x
  ...   return -1
  >>> optional = tf.experimental.Optional.from_value(5)
  >>> print(maybe_square(optional))
  tf.Tensor(25, shape=(), dtype=int32)

  Attributes:
    element_spec: A (nested) structure of \`TypeSpec\` objects that represents the
      type specification of the optional element.
  `},{name:"RaggedTensor",path:"./tf/RaggedTensor.md",desc:"Represents a ragged tensor.",type:"Classes",docs:`Represents a ragged tensor.

  A \`RaggedTensor\` is a tensor with one or more *ragged dimensions*, which are
  dimensions whose slices may have different lengths.  For example, the inner
  (column) dimension of \`rt=[[3, 1, 4, 1], [], [5, 9, 2], [6], []]\` is ragged,
  since the column slices (\`rt[0, :]\`, ..., \`rt[4, :]\`) have different lengths.
  Dimensions whose slices all have the same length are called *uniform
  dimensions*.  The outermost dimension of a \`RaggedTensor\` is always uniform,
  since it consists of a single slice (and so there is no possibility for
  differing slice lengths).

  The total number of dimensions in a \`RaggedTensor\` is called its *rank*,
  and the number of ragged dimensions in a \`RaggedTensor\` is called its
  *ragged-rank*.  A \`RaggedTensor\`'s ragged-rank is fixed at graph creation
  time: it can't depend on the runtime values of \`Tensor\`s, and can't vary
  dynamically for different session runs.

  Note that the \`__init__\` constructor is private. Please use one of the
  following methods to construct a \`RaggedTensor\`:

  * \`tf.RaggedTensor.from_row_lengths\`
  * \`tf.RaggedTensor.from_value_rowids\`
  * \`tf.RaggedTensor.from_row_splits\`
  * \`tf.RaggedTensor.from_row_starts\`
  * \`tf.RaggedTensor.from_row_limits\`
  * \`tf.RaggedTensor.from_nested_row_splits\`
  * \`tf.RaggedTensor.from_nested_row_lengths\`
  * \`tf.RaggedTensor.from_nested_value_rowids\`

  ### Potentially Ragged Tensors

  Many ops support both \`Tensor\`s and \`RaggedTensor\`s
  (see [tf.ragged](https://www.tensorflow.org/api_docs/python/tf/ragged) for a
  full listing). The term "potentially ragged tensor" may be used to refer to a
  tensor that might be either a \`Tensor\` or a \`RaggedTensor\`.  The ragged-rank
  of a \`Tensor\` is zero.

  ### Documenting RaggedTensor Shapes

  When documenting the shape of a RaggedTensor, ragged dimensions can be
  indicated by enclosing them in parentheses.  For example, the shape of
  a 3-D \`RaggedTensor\` that stores the fixed-size word embedding for each
  word in a sentence, for each sentence in a batch, could be written as
  \`[num_sentences, (num_words), embedding_size]\`.  The parentheses around
  \`(num_words)\` indicate that dimension is ragged, and that the length
  of each element list in that dimension may vary for each item.

  ### Component Tensors

  Internally, a \`RaggedTensor\` consists of a concatenated list of values that
  are partitioned into variable-length rows.  In particular, each \`RaggedTensor\`
  consists of:

    * A \`values\` tensor, which concatenates the variable-length rows into a
      flattened list.  For example, the \`values\` tensor for
      \`[[3, 1, 4, 1], [], [5, 9, 2], [6], []]\` is \`[3, 1, 4, 1, 5, 9, 2, 6]\`.

    * A \`row_splits\` vector, which indicates how those flattened values are
      divided into rows.  In particular, the values for row \`rt[i]\` are stored
      in the slice \`rt.values[rt.row_splits[i]:rt.row_splits[i+1]]\`.

  Example:

  >>> print(tf.RaggedTensor.from_row_splits(
  ...       values=[3, 1, 4, 1, 5, 9, 2, 6],
  ...       row_splits=[0, 4, 4, 7, 8, 8]))
  <tf.RaggedTensor [[3, 1, 4, 1], [], [5, 9, 2], [6], []]>

  ### Alternative Row-Partitioning Schemes

  In addition to \`row_splits\`, ragged tensors provide support for five other
  row-partitioning schemes:

    * \`row_lengths\`: a vector with shape \`[nrows]\`, which specifies the length
      of each row.

    * \`value_rowids\` and \`nrows\`: \`value_rowids\` is a vector with shape
      \`[nvals]\`, corresponding one-to-one with \`values\`, which specifies
      each value's row index.  In particular, the row \`rt[row]\` consists of the
      values \`rt.values[j]\` where \`value_rowids[j]==row\`.  \`nrows\` is an
      integer scalar that specifies the number of rows in the
      \`RaggedTensor\`. (\`nrows\` is used to indicate trailing empty rows.)

    * \`row_starts\`: a vector with shape \`[nrows]\`, which specifies the start
      offset of each row.  Equivalent to \`row_splits[:-1]\`.

    * \`row_limits\`: a vector with shape \`[nrows]\`, which specifies the stop
      offset of each row.  Equivalent to \`row_splits[1:]\`.

    * \`uniform_row_length\`: A scalar tensor, specifying the length of every
      row.  This row-partitioning scheme may only be used if all rows have
      the same length.

  Example: The following ragged tensors are equivalent, and all represent the
  nested list \`[[3, 1, 4, 1], [], [5, 9, 2], [6], []]\`.

  >>> values = [3, 1, 4, 1, 5, 9, 2, 6]
  >>> RaggedTensor.from_row_splits(values, row_splits=[0, 4, 4, 7, 8, 8])
  <tf.RaggedTensor [[3, 1, 4, 1], [], [5, 9, 2], [6], []]>
  >>> RaggedTensor.from_row_lengths(values, row_lengths=[4, 0, 3, 1, 0])
  <tf.RaggedTensor [[3, 1, 4, 1], [], [5, 9, 2], [6], []]>
  >>> RaggedTensor.from_value_rowids(
  ...     values, value_rowids=[0, 0, 0, 0, 2, 2, 2, 3], nrows=5)
  <tf.RaggedTensor [[3, 1, 4, 1], [], [5, 9, 2], [6], []]>
  >>> RaggedTensor.from_row_starts(values, row_starts=[0, 4, 4, 7, 8])
  <tf.RaggedTensor [[3, 1, 4, 1], [], [5, 9, 2], [6], []]>
  >>> RaggedTensor.from_row_limits(values, row_limits=[4, 4, 7, 8, 8])
  <tf.RaggedTensor [[3, 1, 4, 1], [], [5, 9, 2], [6], []]>
  >>> RaggedTensor.from_uniform_row_length(values, uniform_row_length=2)
  <tf.RaggedTensor [[3, 1], [4, 1], [5, 9], [2, 6]]>

  ### Multiple Ragged Dimensions

  \`RaggedTensor\`s with multiple ragged dimensions can be defined by using
  a nested \`RaggedTensor\` for the \`values\` tensor.  Each nested \`RaggedTensor\`
  adds a single ragged dimension.

  >>> inner_rt = RaggedTensor.from_row_splits(  # =rt1 from above
  ...     values=[3, 1, 4, 1, 5, 9, 2, 6], row_splits=[0, 4, 4, 7, 8, 8])
  >>> outer_rt = RaggedTensor.from_row_splits(
  ...     values=inner_rt, row_splits=[0, 3, 3, 5])
  >>> print(outer_rt.to_list())
  [[[3, 1, 4, 1], [], [5, 9, 2]], [], [[6], []]]
  >>> print(outer_rt.ragged_rank)
  2

  The factory function \`RaggedTensor.from_nested_row_splits\` may be used to
  construct a \`RaggedTensor\` with multiple ragged dimensions directly, by
  providing a list of \`row_splits\` tensors:

  >>> RaggedTensor.from_nested_row_splits(
  ...     flat_values=[3, 1, 4, 1, 5, 9, 2, 6],
  ...     nested_row_splits=([0, 3, 3, 5], [0, 4, 4, 7, 8, 8])).to_list()
  [[[3, 1, 4, 1], [], [5, 9, 2]], [], [[6], []]]

  ### Uniform Inner Dimensions

  \`RaggedTensor\`s with uniform inner dimensions can be defined
  by using a multidimensional \`Tensor\` for \`values\`.

  >>> rt = RaggedTensor.from_row_splits(values=tf.ones([5, 3], tf.int32),
  ...                                   row_splits=[0, 2, 5])
  >>> print(rt.to_list())
  [[[1, 1, 1], [1, 1, 1]],
   [[1, 1, 1], [1, 1, 1], [1, 1, 1]]]
  >>> print(rt.shape)
  (2, None, 3)

  ### Uniform Outer Dimensions

  \`RaggedTensor\`s with uniform outer dimensions can be defined by using
  one or more \`RaggedTensor\` with a \`uniform_row_length\` row-partitioning
  tensor.  For example, a \`RaggedTensor\` with shape \`[2, 2, None]\` can be
  constructed with this method from a \`RaggedTensor\` values with shape
  \`[4, None]\`:

  >>> values = tf.ragged.constant([[1, 2, 3], [4], [5, 6], [7, 8, 9, 10]])
  >>> print(values.shape)
  (4, None)
  >>> rt6 = tf.RaggedTensor.from_uniform_row_length(values, 2)
  >>> print(rt6)
  <tf.RaggedTensor [[[1, 2, 3], [4]], [[5, 6], [7, 8, 9, 10]]]>
  >>> print(rt6.shape)
  (2, 2, None)

  Note that \`rt6\` only contains one ragged dimension (the innermost
  dimension). In contrast, if \`from_row_splits\` is used to construct a similar
  \`RaggedTensor\`, then that \`RaggedTensor\` will have two ragged dimensions:

  >>> rt7 = tf.RaggedTensor.from_row_splits(values, [0, 2, 4])
  >>> print(rt7.shape)
  (2, None, None)

  Uniform and ragged outer dimensions may be interleaved, meaning that a
  tensor with any combination of ragged and uniform dimensions may be created.
  For example, a RaggedTensor \`t4\` with shape \`[3, None, 4, 8, None, 2]\` could
  be constructed as follows:

  \`\`\`python
  t0 = tf.zeros([1000, 2])                           # Shape:         [1000, 2]
  t1 = RaggedTensor.from_row_lengths(t0, [...])      #           [160, None, 2]
  t2 = RaggedTensor.from_uniform_row_length(t1, 8)   #         [20, 8, None, 2]
  t3 = RaggedTensor.from_uniform_row_length(t2, 4)   #       [5, 4, 8, None, 2]
  t4 = RaggedTensor.from_row_lengths(t3, [...])      # [3, None, 4, 8, None, 2]
  \`\`\`

  `},{name:"RaggedTensorSpec",path:"./tf/RaggedTensorSpec.md",desc:'Type specification for a <a href="./tf/RaggedTensor.md"><code>tf.RaggedTensor</code></a>.',type:"Classes",docs:"Type specification for a `tf.RaggedTensor`."},{name:"RegisterGradient",path:"./tf/RegisterGradient.md",desc:"A decorator for registering the gradient function for an op type.",type:"Classes",docs:'A decorator for registering the gradient function for an op type.\n\n  This decorator is only used when defining a new op type. For an op\n  with `m` inputs and `n` outputs, the gradient function is a function\n  that takes the original `Operation` and `n` `Tensor` objects\n  (representing the gradients with respect to each output of the op),\n  and returns `m` `Tensor` objects (representing the partial gradients\n  with respect to each input of the op).\n\n  For example, assuming that operations of type `"Sub"` take two\n  inputs `x` and `y`, and return a single output `x - y`, the\n  following gradient function would be registered:\n\n  ```python\n  @tf.RegisterGradient("Sub")\n  def _sub_grad(unused_op, grad):\n    return grad, tf.negative(grad)\n  ```\n\n  The decorator argument `op_type` is the string type of an\n  operation. This corresponds to the `OpDef.name` field for the proto\n  that defines the operation.\n  '},{name:"SparseTensor",path:"./tf/sparse/SparseTensor.md",desc:"Represents a sparse tensor.",type:"Classes",docs:"Represents a sparse tensor.\n\n  TensorFlow represents a sparse tensor as three separate dense tensors:\n  `indices`, `values`, and `dense_shape`.  In Python, the three tensors are\n  collected into a `SparseTensor` class for ease of use.  If you have separate\n  `indices`, `values`, and `dense_shape` tensors, wrap them in a `SparseTensor`\n  object before passing to the ops below.\n\n  Concretely, the sparse tensor `SparseTensor(indices, values, dense_shape)`\n  comprises the following components, where `N` and `ndims` are the number\n  of values and number of dimensions in the `SparseTensor`, respectively:\n\n  * `indices`: A 2-D int64 tensor of shape `[N, ndims]`, which specifies the\n    indices of the elements in the sparse tensor that contain nonzero values\n    (elements are zero-indexed). For example, `indices=[[1,3], [2,4]]` specifies\n    that the elements with indexes of [1,3] and [2,4] have nonzero values.\n\n  * `values`: A 1-D tensor of any type and shape `[N]`, which supplies the\n    values for each element in `indices`. For example, given `indices=[[1,3],\n    [2,4]]`, the parameter `values=[18, 3.6]` specifies that element [1,3] of\n    the sparse tensor has a value of 18, and element [2,4] of the tensor has a\n    value of 3.6.\n\n  * `dense_shape`: A 1-D int64 tensor of shape `[ndims]`, which specifies the\n    dense_shape of the sparse tensor. Takes a list indicating the number of\n    elements in each dimension. For example, `dense_shape=[3,6]` specifies a\n    two-dimensional 3x6 tensor, `dense_shape=[2,3,4]` specifies a\n    three-dimensional 2x3x4 tensor, and `dense_shape=[9]` specifies a\n    one-dimensional tensor with 9 elements.\n\n  The corresponding dense tensor satisfies:\n\n  ```python\n  dense.shape = dense_shape\n  dense[tuple(indices[i])] = values[i]\n  ```\n\n  By convention, `indices` should be sorted in row-major order (or equivalently\n  lexicographic order on the tuples `indices[i]`). This is not enforced when\n  `SparseTensor` objects are constructed, but most ops assume correct ordering.\n  If the ordering of sparse tensor `st` is wrong, a fixed version can be\n  obtained by calling `tf.sparse.reorder(st)`.\n\n  Example: The sparse tensor\n\n  ```python\n  SparseTensor(indices=[[0, 0], [1, 2]], values=[1, 2], dense_shape=[3, 4])\n  ```\n\n  represents the dense tensor\n\n  ```python\n  [[1, 0, 0, 0]\n   [0, 0, 2, 0]\n   [0, 0, 0, 0]]\n  ```\n  "},{name:"SparseTensorSpec",path:"./tf/SparseTensorSpec.md",desc:'Type specification for a <a href="./tf/sparse/SparseTensor.md"><code>tf.sparse.SparseTensor</code></a>.',type:"Classes",docs:"Type specification for a `tf.sparse.SparseTensor`."},{name:"Tensor",path:"./tf/Tensor.md",desc:'A <a href="./tf/Tensor.md"><code>tf.Tensor</code></a> represents a multidimensional array of elements.',type:"Classes",docs:`A \`tf.Tensor\` represents a multidimensional array of elements.

  All elements are of a single known data type.

  When writing a TensorFlow program, the main object that is
  manipulated and passed around is the \`tf.Tensor\`.

  A \`tf.Tensor\` has the following properties:

  * a single data type (float32, int32, or string, for example)
  * a shape

  TensorFlow supports eager execution and graph execution.  In eager
  execution, operations are evaluated immediately.  In graph
  execution, a computational graph is constructed for later
  evaluation.

  TensorFlow defaults to eager execution.  In the example below, the
  matrix multiplication results are calculated immediately.

  >>> # Compute some values using a Tensor
  >>> c = tf.constant([[1.0, 2.0], [3.0, 4.0]])
  >>> d = tf.constant([[1.0, 1.0], [0.0, 1.0]])
  >>> e = tf.matmul(c, d)
  >>> print(e)
  tf.Tensor(
  [[1. 3.]
   [3. 7.]], shape=(2, 2), dtype=float32)

  Note that during eager execution, you may discover your \`Tensors\` are actually
  of type \`EagerTensor\`.  This is an internal detail, but it does give you
  access to a useful function, \`numpy\`:

  >>> type(e)
  <class '...ops.EagerTensor'>
  >>> print(e.numpy())
    [[1. 3.]
     [3. 7.]]

  In TensorFlow, \`tf.function\`s are a common way to define graph execution.

  A Tensor's shape (that is, the rank of the Tensor and the size of
  each dimension) may not always be fully known.  In \`tf.function\`
  definitions, the shape may only be partially known.

  Most operations produce tensors of fully-known shapes if the shapes of their
  inputs are also fully known, but in some cases it's only possible to find the
  shape of a tensor at execution time.

  A number of specialized tensors are available: see \`tf.Variable\`,
  \`tf.constant\`, \`tf.placeholder\`, \`tf.sparse.SparseTensor\`, and
  \`tf.RaggedTensor\`.

  Caution: when constructing a tensor from a numpy array or pandas dataframe
  the underlying buffer may be re-used:

  \`\`\`python
  a = np.array([1, 2, 3])
  b = tf.constant(a)
  a[0] = 4
  print(b)  # tf.Tensor([4 2 3], shape=(3,), dtype=int64)
  \`\`\`

  Note: this is an implementation detail that is subject to change and users
  should not rely on this behaviour.

  For more on Tensors, see the [guide](https://tensorflow.org/guide/tensor).

  `},{name:"TensorArray",path:"./tf/TensorArray.md",desc:"Class wrapping dynamic-sized, per-time-step, write-once Tensor arrays.",type:"Classes",docs:`Class wrapping dynamic-sized, per-time-step, write-once Tensor arrays.

  This class is meant to be used with dynamic iteration primitives such as
  \`while_loop\` and \`map_fn\`.  It supports gradient back-propagation via special
  "flow" control flow dependencies.

  Example 1: Plain reading and writing.

  >>> ta = tf.TensorArray(tf.float32, size=0, dynamic_size=True, clear_after_read=False)
  >>> ta = ta.write(0, 10)
  >>> ta = ta.write(1, 20)
  >>> ta = ta.write(2, 30)
  >>>
  >>> ta.read(0)
  <tf.Tensor: shape=(), dtype=float32, numpy=10.0>
  >>> ta.read(1)
  <tf.Tensor: shape=(), dtype=float32, numpy=20.0>
  >>> ta.read(2)
  <tf.Tensor: shape=(), dtype=float32, numpy=30.0>
  >>> ta.stack()
  <tf.Tensor: shape=(3,), dtype=float32, numpy=array([10., 20., 30.],
  dtype=float32)>

  Example 2: Fibonacci sequence algorithm that writes in a loop then returns.

  >>> @tf.function
  ... def fibonacci(n):
  ...   ta = tf.TensorArray(tf.float32, size=0, dynamic_size=True)
  ...   ta = ta.unstack([0., 1.])
  ...
  ...   for i in range(2, n):
  ...     ta = ta.write(i, ta.read(i - 1) + ta.read(i - 2))
  ...
  ...   return ta.stack()
  >>>
  >>> fibonacci(7)
  <tf.Tensor: shape=(7,), dtype=float32,
  numpy=array([0., 1., 1., 2., 3., 5., 8.], dtype=float32)>

  Example 3: A simple loop interacting with a \`tf.Variable\`.

  >>> v = tf.Variable(1)
  >>> @tf.function
  ... def f(x):
  ...   ta = tf.TensorArray(tf.int32, size=0, dynamic_size=True)
  ...   for i in tf.range(x):
  ...     v.assign_add(i)
  ...     ta = ta.write(i, v)
  ...   return ta.stack()
  >>> f(5)
  <tf.Tensor: shape=(5,), dtype=int32, numpy=array([ 1,  2,  4,  7, 11],
  dtype=int32)>
  `},{name:"TensorArraySpec",path:"./tf/TensorArraySpec.md",desc:'Type specification for a <a href="./tf/TensorArray.md"><code>tf.TensorArray</code></a>.',type:"Classes",docs:"Type specification for a `tf.TensorArray`."},{name:"TensorShape",path:"./tf/TensorShape.md",desc:"Represents the shape of a `Tensor`.",type:"Classes",docs:'Represents the shape of a `Tensor`.\n\n  A `TensorShape` represents a possibly-partial shape specification for a\n  `Tensor`. It may be one of the following:\n\n  * *Fully-known shape:* has a known number of dimensions and a known size\n    for each dimension. e.g. `TensorShape([16, 256])`\n  * *Partially-known shape:* has a known number of dimensions, and an unknown\n    size for one or more dimension. e.g. `TensorShape([None, 256])`\n  * *Unknown shape:* has an unknown number of dimensions, and an unknown\n    size in all dimensions. e.g. `TensorShape(None)`\n\n  If a tensor is produced by an operation of type `"Foo"`, its shape\n  may be inferred if there is a registered shape function for\n  `"Foo"`. See [Shape\n  functions](https://www.tensorflow.org/guide/create_op#shape_functions_in_c)\n  for details of shape functions and how to register them. Alternatively,\n  you may set the shape explicitly using `tf.Tensor.set_shape`.\n  '},{name:"TensorSpec",path:"./tf/TensorSpec.md",desc:"Describes a tf.Tensor.",type:"Classes",docs:`Describes a tf.Tensor.

  Metadata for describing the \`tf.Tensor\` objects accepted or returned
  by some TensorFlow APIs.
  `},{name:"TypeSpec",path:"./tf/TypeSpec.md",desc:"Specifies a TensorFlow value type.",type:"Classes",docs:`Specifies a TensorFlow value type.

  A \`tf.TypeSpec\` provides metadata describing an object accepted or returned
  by TensorFlow APIs.  Concrete subclasses, such as \`tf.TensorSpec\` and
  \`tf.RaggedTensorSpec\`, are used to describe different value types.

  For example, \`tf.function\`'s \`input_signature\` argument accepts a list
  (or nested structure) of \`TypeSpec\`s.

  Creating new subclasses of \`TypeSpec\` (outside of TensorFlow core) is not
  currently supported.  In particular, we may make breaking changes to the
  private methods and properties defined by this base class.

  Example:

  >>> spec = tf.RaggedTensorSpec(shape=[None, None], dtype=tf.int32)
  >>> @tf.function(input_signature=[spec])
  ... def double(x):
  ...   return x * 2
  >>> print(double(tf.ragged.constant([[1, 2], [3]])))
  <tf.RaggedTensor [[2, 4], [6]]>
  `},{name:"UnconnectedGradients",path:"./tf/UnconnectedGradients.md",desc:"Controls how gradient computation behaves when y does not depend on x.",type:"Classes",docs:`Controls how gradient computation behaves when y does not depend on x.

  The gradient of y with respect to x can be zero in two different ways: there
  could be no differentiable path in the graph connecting x to y (and so we can
  statically prove that the gradient is zero) or it could be that runtime values
  of tensors in a particular execution lead to a gradient of zero (say, if a
  relu unit happens to not be activated). To allow you to distinguish between
  these two cases you can choose what value gets returned for the gradient when
  there is no path in the graph from x to y:

  * \`NONE\`: Indicates that [None] will be returned if there is no path from x
    to y
  * \`ZERO\`: Indicates that a zero tensor will be returned in the shape of x.
  `},{name:"Variable",path:"./tf/Variable.md",desc:"See the [variable guide](https://tensorflow.org/guide/variable",type:"Classes",docs:`See the [variable guide](https://tensorflow.org/guide/variable).

  A variable maintains shared, persistent state manipulated by a program.

  The \`Variable()\` constructor requires an initial value for the variable, which
  can be a \`Tensor\` of any type and shape. This initial value defines the type
  and shape of the variable. After construction, the type and shape of the
  variable are fixed. The value can be changed using one of the assign methods.

  >>> v = tf.Variable(1.)
  >>> v.assign(2.)
  <tf.Variable ... shape=() dtype=float32, numpy=2.0>
  >>> v.assign_add(0.5)
  <tf.Variable ... shape=() dtype=float32, numpy=2.5>

  The \`shape\` argument to \`Variable\`'s constructor allows you to construct a
  variable with a less defined shape than its \`initial_value\`:

  >>> v = tf.Variable(1., shape=tf.TensorShape(None))
  >>> v.assign([[1.]])
  <tf.Variable ... shape=<unknown> dtype=float32, numpy=array([[1.]], ...)>

  Just like any \`Tensor\`, variables created with \`Variable()\` can be used as
  inputs to operations. Additionally, all the operators overloaded for the
  \`Tensor\` class are carried over to variables.

  >>> w = tf.Variable([[1.], [2.]])
  >>> x = tf.constant([[3., 4.]])
  >>> tf.matmul(w, x)
  <tf.Tensor:... shape=(2, 2), ... numpy=
    array([[3., 4.],
           [6., 8.]], dtype=float32)>
  >>> tf.sigmoid(w + x)
  <tf.Tensor:... shape=(2, 2), ...>

  When building a machine learning model it is often convenient to distinguish
  between variables holding trainable model parameters and other variables such
  as a \`step\` variable used to count training steps. To make this easier, the
  variable constructor supports a \`trainable=<bool>\`
  parameter. \`tf.GradientTape\` watches trainable variables by default:

  >>> with tf.GradientTape(persistent=True) as tape:
  ...   trainable = tf.Variable(1.)
  ...   non_trainable = tf.Variable(2., trainable=False)
  ...   x1 = trainable * 2.
  ...   x2 = non_trainable * 3.
  >>> tape.gradient(x1, trainable)
  <tf.Tensor:... shape=(), dtype=float32, numpy=2.0>
  >>> assert tape.gradient(x2, non_trainable) is None  # Unwatched

  Variables are automatically tracked when assigned to attributes of types
  inheriting from \`tf.Module\`.

  >>> m = tf.Module()
  >>> m.v = tf.Variable([1.])
  >>> m.trainable_variables
  (<tf.Variable ... shape=(1,) ... numpy=array([1.], dtype=float32)>,)

  This tracking then allows saving variable values to
  [training checkpoints](https://www.tensorflow.org/guide/checkpoint), or to
  [SavedModels](https://www.tensorflow.org/guide/saved_model) which include
  serialized TensorFlow graphs.

  Variables are often captured and manipulated by \`tf.function\`s. This works the
  same way the un-decorated function would have:

  >>> v = tf.Variable(0.)
  >>> read_and_decrement = tf.function(lambda: v.assign_sub(0.1))
  >>> read_and_decrement()
  <tf.Tensor: shape=(), dtype=float32, numpy=-0.1>
  >>> read_and_decrement()
  <tf.Tensor: shape=(), dtype=float32, numpy=-0.2>

  Variables created inside a \`tf.function\` must be owned outside the function
  and be created only once:

  >>> class M(tf.Module):
  ...   @tf.function
  ...   def __call__(self, x):
  ...     if not hasattr(self, "v"):  # Or set self.v to None in __init__
  ...       self.v = tf.Variable(x)
  ...     return self.v * x
  >>> m = M()
  >>> m(2.)
  <tf.Tensor: shape=(), dtype=float32, numpy=4.0>
  >>> m(3.)
  <tf.Tensor: shape=(), dtype=float32, numpy=6.0>
  >>> m.v
  <tf.Variable ... shape=() dtype=float32, numpy=2.0>

  See the \`tf.function\` documentation for details.
  `},{name:"VariableAggregation",path:"./tf/VariableAggregation.md",desc:"Indicates how a distributed variable will be aggregated.",type:"Classes",docs:`Indicates how a distributed variable will be aggregated.

  \`tf.distribute.Strategy\` distributes a model by making multiple copies
  (called "replicas") acting data-parallel on different elements of the input
  batch. When performing some variable-update operation, say
  \`var.assign_add(x)\`, in a model, we need to resolve how to combine the
  different values for \`x\` computed in the different replicas.

  * \`NONE\`: This is the default, giving an error if you use a
    variable-update operation with multiple replicas.
  * \`SUM\`: Add the updates across replicas.
  * \`MEAN\`: Take the arithmetic mean ("average") of the updates across replicas.
  * \`ONLY_FIRST_REPLICA\`: This is for when every replica is performing the same
    update, but we only want to perform the update once. Used, e.g., for the
    global step counter.
  `},{name:"VariableSynchronization",path:"./tf/VariableSynchronization.md",desc:"Indicates when a distributed variable will be synced.",type:"Classes",docs:`Indicates when a distributed variable will be synced.

  * \`AUTO\`: Indicates that the synchronization will be determined by the current
    \`DistributionStrategy\` (eg. With \`MirroredStrategy\` this would be
    \`ON_WRITE\`).
  * \`NONE\`: Indicates that there will only be one copy of the variable, so
    there is no need to sync.
  * \`ON_WRITE\`: Indicates that the variable will be updated across devices
    every time it is written.
  * \`ON_READ\`: Indicates that the variable will be aggregated across devices
    when it is read (eg. when checkpointing or when evaluating an op that uses
    the variable).

    Example:
  >>> temp_grad=[tf.Variable([0.], trainable=False,
  ...                      synchronization=tf.VariableSynchronization.ON_READ,
  ...                      aggregation=tf.VariableAggregation.MEAN
  ...                      )]
  `},{name:"constant_initializer",path:"./tf/constant_initializer.md",desc:"Initializer that generates tensors with constant values.",type:"Classes",docs:`Initializer that generates tensors with constant values.

  Initializers allow you to pre-specify an initialization strategy, encoded in
  the Initializer object, without knowing the shape and dtype of the variable
  being initialized.

  \`tf.constant_initializer\` returns an object which when called returns a tensor
  populated with the \`value\` specified in the constructor. This \`value\` must be
  convertible to the requested \`dtype\`.

  The argument \`value\` can be a scalar constant value, or a list of
  values. Scalars broadcast to whichever shape is requested from the
  initializer.

  If \`value\` is a list, then the length of the list must be equal to the number
  of elements implied by the desired shape of the tensor. If the total number of
  elements in \`value\` is not equal to the number of elements required by the
  tensor shape, the initializer will raise a \`TypeError\`.

  Examples:

  >>> def make_variables(k, initializer):
  ...   return (tf.Variable(initializer(shape=[k], dtype=tf.float32)),
  ...           tf.Variable(initializer(shape=[k, k], dtype=tf.float32)))
  >>> v1, v2 = make_variables(3, tf.constant_initializer(2.))
  >>> v1
  <tf.Variable ... shape=(3,) ... numpy=array([2., 2., 2.], dtype=float32)>
  >>> v2
  <tf.Variable ... shape=(3, 3) ... numpy=
  array([[2., 2., 2.],
         [2., 2., 2.],
         [2., 2., 2.]], dtype=float32)>
  >>> make_variables(4, tf.random_uniform_initializer(minval=-1., maxval=1.))
  (<tf.Variable...shape=(4,) dtype=float32...>, <tf.Variable...shape=(4, 4) ...

  >>> value = [0, 1, 2, 3, 4, 5, 6, 7]
  >>> init = tf.constant_initializer(value)
  >>> # Fitting shape
  >>> tf.Variable(init(shape=[2, 4], dtype=tf.float32))
  <tf.Variable ...
  array([[0., 1., 2., 3.],
         [4., 5., 6., 7.]], dtype=float32)>
  >>> # Larger shape
  >>> tf.Variable(init(shape=[3, 4], dtype=tf.float32))
  Traceback (most recent call last):
  ...
  TypeError: ...value has 8 elements, shape is (3, 4) with 12 elements...
  >>> # Smaller shape
  >>> tf.Variable(init(shape=[2, 3], dtype=tf.float32))
  Traceback (most recent call last):
  ...
  TypeError: ...value has 8 elements, shape is (2, 3) with 6 elements...

  Args:
    value: A Python scalar, list or tuple of values, or a N-dimensional numpy
      array. All elements of the initialized variable will be set to the
      corresponding value in the \`value\` argument.

  Raises:
    TypeError: If the input \`value\` is not one of the expected types.
  `},{name:"name_scope",path:"./tf/name_scope.md",desc:"A context manager for use when defining a Python op.",type:"Classes",docs:'A context manager for use when defining a Python op.\n\n  This context manager pushes a name scope, which will make the name of all\n  operations added within it have a prefix.\n\n  For example, to define a new Python op called `my_op`:\n\n  ```python\n  def my_op(a, b, c, name=None):\n    with tf.name_scope("MyOp") as scope:\n      a = tf.convert_to_tensor(a, name="a")\n      b = tf.convert_to_tensor(b, name="b")\n      c = tf.convert_to_tensor(c, name="c")\n      # Define some computation that uses `a`, `b`, and `c`.\n      return foo_op(..., name=scope)\n  ```\n\n  When executed, the Tensors `a`, `b`, `c`, will have names `MyOp/a`, `MyOp/b`,\n  and `MyOp/c`.\n\n  Inside a `tf.function`, if the scope name already exists, the name will be\n  made unique by appending `_n`. For example, calling `my_op` the second time\n  will generate `MyOp_1/a`, etc.\n  '},{name:"ones_initializer",path:"./tf/ones_initializer.md",desc:"Initializer that generates tensors initialized to 1.",type:"Classes",docs:`Initializer that generates tensors initialized to 1.

  Initializers allow you to pre-specify an initialization strategy, encoded in
  the Initializer object, without knowing the shape and dtype of the variable
  being initialized.

  Examples:

  >>> def make_variables(k, initializer):
  ...   return (tf.Variable(initializer(shape=[k], dtype=tf.float32)),
  ...           tf.Variable(initializer(shape=[k, k], dtype=tf.float32)))
  >>> v1, v2 = make_variables(3, tf.ones_initializer())
  >>> v1
  <tf.Variable ... shape=(3,) ... numpy=array([1., 1., 1.], dtype=float32)>
  >>> v2
  <tf.Variable ... shape=(3, 3) ... numpy=
  array([[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]], dtype=float32)>
  >>> make_variables(4, tf.random_uniform_initializer(minval=-1., maxval=1.))
  (<tf.Variable...shape=(4,) dtype=float32...>, <tf.Variable...shape=(4, 4) ...
  `},{name:"random_normal_initializer",path:"./tf/random_normal_initializer.md",desc:"Initializer that generates tensors with a normal distribution.",type:"Classes",docs:`Initializer that generates tensors with a normal distribution.

  Initializers allow you to pre-specify an initialization strategy, encoded in
  the Initializer object, without knowing the shape and dtype of the variable
  being initialized.

  Examples:

  >>> def make_variables(k, initializer):
  ...   return (tf.Variable(initializer(shape=[k], dtype=tf.float32)),
  ...           tf.Variable(initializer(shape=[k, k], dtype=tf.float32)))
  >>> v1, v2 = make_variables(3,
  ...                         tf.random_normal_initializer(mean=1., stddev=2.))
  >>> v1
  <tf.Variable ... shape=(3,) ... numpy=array([...], dtype=float32)>
  >>> v2
  <tf.Variable ... shape=(3, 3) ... numpy=
  ...
  >>> make_variables(4, tf.random_uniform_initializer(minval=-1., maxval=1.))
  (<tf.Variable...shape=(4,) dtype=float32...>, <tf.Variable...shape=(4, 4) ...

  Args:
    mean: a python scalar or a scalar tensor. Mean of the random values to
      generate.
    stddev: a python scalar or a scalar tensor. Standard deviation of the random
      values to generate.
    seed: A Python integer. Used to create random seeds. See
      \`tf.random.set_seed\` for behavior.

  `},{name:"random_uniform_initializer",path:"./tf/random_uniform_initializer.md",desc:"Initializer that generates tensors with a uniform distribution.",type:"Classes",docs:`Initializer that generates tensors with a uniform distribution.

  Initializers allow you to pre-specify an initialization strategy, encoded in
  the Initializer object, without knowing the shape and dtype of the variable
  being initialized.

  Examples:

  >>> def make_variables(k, initializer):
  ...   return (tf.Variable(initializer(shape=[k], dtype=tf.float32)),
  ...           tf.Variable(initializer(shape=[k, k], dtype=tf.float32)))
  >>> v1, v2 = make_variables(3, tf.ones_initializer())
  >>> v1
  <tf.Variable ... shape=(3,) ... numpy=array([1., 1., 1.], dtype=float32)>
  >>> v2
  <tf.Variable ... shape=(3, 3) ... numpy=
  array([[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]], dtype=float32)>
  >>> make_variables(4, tf.random_uniform_initializer(minval=-1., maxval=1.))
  (<tf.Variable...shape=(4,) dtype=float32...>, <tf.Variable...shape=(4, 4) ...

  Args:
    minval: A python scalar or a scalar tensor. Lower bound of the range of
      random values to generate (inclusive).
    maxval: A python scalar or a scalar tensor. Upper bound of the range of
      random values to generate (exclusive).
    seed: A Python integer. Used to create random seeds. See
      \`tf.random.set_seed\` for behavior.
  `},{name:"zeros_initializer",path:"./tf/zeros_initializer.md",desc:"Initializer that generates tensors initialized to 0.",type:"Classes",docs:`Initializer that generates tensors initialized to 0.

  Initializers allow you to pre-specify an initialization strategy, encoded in
  the Initializer object, without knowing the shape and dtype of the variable
  being initialized.

  Examples:

  >>> def make_variables(k, initializer):
  ...   return (tf.Variable(initializer(shape=[k], dtype=tf.float32)),
  ...           tf.Variable(initializer(shape=[k, k], dtype=tf.float32)))
  >>> v1, v2 = make_variables(3, tf.zeros_initializer())
  >>> v1
  <tf.Variable ... shape=(3,) ... numpy=array([0., 0., 0.], dtype=float32)>
  >>> v2
  <tf.Variable ... shape=(3, 3) ... numpy=
  array([[0., 0., 0.],
         [0., 0., 0.],
         [0., 0., 0.]], dtype=float32)>
  >>> make_variables(4, tf.random_uniform_initializer(minval=-1., maxval=1.))
  (<tf.Variable...shape=(4,) dtype=float32...>, <tf.Variable...shape=(4, 4) ...
  `},{name:"Assert",path:"./tf/debugging/Assert.md",desc:"Asserts that the given condition is true.",type:"Functions",docs:`Asserts that the given condition is true.

If \`condition\` evaluates to false, print the list of tensors in \`data\`.
\`summarize\` determines how many entries of the tensors to print.

Args:
  condition: The condition to evaluate.
  data: The tensors to print out when condition is false.
  summarize: Print this many entries of each tensor.
  name: A name for this operation (optional).

Returns:
  assert_op: An \`Operation\` that, when executed, raises a
  \`tf.errors.InvalidArgumentError\` if \`condition\` is not true.
  @compatibility(eager)
  returns None
  @end_compatibility

Raises:
  @compatibility(TF1)
  When in TF V1 mode (that is, outside \`tf.function\`) Assert needs a control
  dependency on the output to ensure the assertion executes:

\`\`\`python
# Ensure maximum element of x is smaller or equal to 1
assert_op = tf.Assert(tf.less_equal(tf.reduce_max(x), 1.), [x])
with tf.control_dependencies([assert_op]):
  ... code using x ...
\`\`\`

  @end_compatibility


Note: The output of this function should be used. If it is not, a warning will be logged or an error may be raised. To mark the output as used, call its .mark_used() method.`},{name:"abs",path:"./tf/math/abs.md",desc:"Computes the absolute value of a tensor.",type:"Functions",docs:"Computes the absolute value of a tensor.\n\n  Given a tensor of integer or floating-point values, this operation returns a\n  tensor of the same type, where each element contains the absolute value of the\n  corresponding element in the input.\n\n  Given a tensor `x` of complex numbers, this operation returns a tensor of type\n  `float32` or `float64` that is the absolute value of each element in `x`. For\n  a complex number \\\\(a + bj\\\\), its absolute value is computed as\n  \\\\(\\sqrt{a^2 + b^2}\\\\).\n\n  For example:\n\n  >>> # real number\n  >>> x = tf.constant([-2.25, 3.25])\n  >>> tf.abs(x)\n  <tf.Tensor: shape=(2,), dtype=float32,\n  numpy=array([2.25, 3.25], dtype=float32)>\n\n  >>> # complex number\n  >>> x = tf.constant([[-2.25 + 4.75j], [-3.25 + 5.75j]])\n  >>> tf.abs(x)\n  <tf.Tensor: shape=(2, 1), dtype=float64, numpy=\n  array([[5.25594901],\n         [6.60492241]])>\n\n  Args:\n    x: A `Tensor` or `SparseTensor` of type `float16`, `float32`, `float64`,\n      `int32`, `int64`, `complex64` or `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` or `SparseTensor` of the same size, type and sparsity as `x`,\n      with absolute values. Note, for `complex64` or `complex128` input, the\n      returned `Tensor` will be of type `float32` or `float64`, respectively.\n\n    If `x` is a `SparseTensor`, returns\n    `SparseTensor(x.indices, tf.math.abs(x.values, ...), x.dense_shape)`"},{name:"acos",path:"./tf/math/acos.md",desc:"Computes acos of x element-wise.",type:"Functions",docs:"Computes acos of x element-wise.\n\n  Provided an input tensor, the `tf.math.acos` operation\n  returns the inverse cosine of each element of the tensor.\n  If `y = tf.math.cos(x)` then, `x = tf.math.acos(y)`.\n\n  Input range is `[-1, 1]` and the output has a range of `[0, pi]`.\n\n  For example:\n\n  >>> x = tf.constant([1.0, -0.5, 3.4, 0.2, 0.0, -2], dtype = tf.float32)\n  >>> tf.math.acos(x)\n  <tf.Tensor: shape=(6,), dtype=float32,\n  numpy= array([0. , 2.0943952, nan, 1.3694383, 1.5707964, nan],\n  dtype=float32)>\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`,\n      `float32`, `float64`, `uint8`, `int8`, `int16`, `int32`, `int64`,\n      `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as x.\n  "},{name:"acosh",path:"./tf/math/acosh.md",desc:"Computes inverse hyperbolic cosine of x element-wise.",type:"Functions",docs:'Computes inverse hyperbolic cosine of x element-wise.\n\n  Given an input tensor, the function computes inverse hyperbolic cosine of every element.\n  Input range is `[1, inf]`. It returns `nan` if the input lies outside the range.\n\n  ```python\n  x = tf.constant([-2, -0.5, 1, 1.2, 200, 10000, float("inf")])\n  tf.math.acosh(x) ==> [nan nan 0. 0.62236255 5.9914584 9.903487 inf]\n  ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  '},{name:"add",path:"./tf/math/add.md",desc:"Returns x + y element-wise.",type:"Functions",docs:`Returns x + y element-wise.

  Example usages below.

  Add a scalar and a list:

  >>> x = [1, 2, 3, 4, 5]
  >>> y = 1
  >>> tf.add(x, y)
  <tf.Tensor: shape=(5,), dtype=int32, numpy=array([2, 3, 4, 5, 6],
  dtype=int32)>

  Note that binary \`+\` operator can be used instead:

  >>> x = tf.convert_to_tensor([1, 2, 3, 4, 5])
  >>> y = tf.convert_to_tensor(1)
  >>> x + y
  <tf.Tensor: shape=(5,), dtype=int32, numpy=array([2, 3, 4, 5, 6],
  dtype=int32)>

  Add a tensor and a list of same shape:

  >>> x = [1, 2, 3, 4, 5]
  >>> y = tf.constant([1, 2, 3, 4, 5])
  >>> tf.add(x, y)
  <tf.Tensor: shape=(5,), dtype=int32,
  numpy=array([ 2,  4,  6,  8, 10], dtype=int32)>

  **Warning**: If one of the inputs (\`x\` or \`y\`) is a tensor and the other is a
  non-tensor, the non-tensor input will adopt (or get casted to) the data type
  of the tensor input. This can potentially cause unwanted overflow or underflow
  conversion.

  For example,

  >>> x = tf.constant([1, 2], dtype=tf.int8)
  >>> y = [2**7 + 1, 2**7 + 2]
  >>> tf.add(x, y)
  <tf.Tensor: shape=(2,), dtype=int8, numpy=array([-126, -124], dtype=int8)>

  When adding two input values of different shapes, \`Add\` follows NumPy
  broadcasting rules. The two input array shapes are compared element-wise.
  Starting with the trailing dimensions, the two dimensions either have to be
  equal or one of them needs to be \`1\`.

  For example,

  >>> x = np.ones(6).reshape(1, 2, 1, 3)
  >>> y = np.ones(6).reshape(2, 1, 3, 1)
  >>> tf.add(x, y).shape.as_list()
  [2, 2, 3, 3]

  Another example with two arrays of different dimension.

  >>> x = np.ones([1, 2, 1, 4])
  >>> y = np.ones([3, 4])
  >>> tf.add(x, y).shape.as_list()
  [1, 2, 3, 4]

  The reduction version of this elementwise operation is \`tf.math.reduce_sum\`

  Args:
    x: A \`tf.Tensor\`. Must be one of the following types: bfloat16, half,
      float32, float64, uint8, int8, int16, int32, int64, complex64, complex128,
      string.
    y: A \`tf.Tensor\`. Must have the same type as x.
    name: A name for the operation (optional)
  `},{name:"add_n",path:"./tf/math/add_n.md",desc:"Adds all input tensors element-wise.",type:"Functions",docs:`Adds all input tensors element-wise.

  \`tf.math.add_n\` performs the same operation as \`tf.math.accumulate_n\`.

  This op does not [broadcast](
  https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html)
  its inputs. If you need broadcasting, use \`tf.math.add\` (or the \`+\` operator)
  instead.

  For example:

  >>> a = tf.constant([[3, 5], [4, 8]])
  >>> b = tf.constant([[1, 6], [2, 9]])
  >>> tf.math.add_n([a, b, a])
  <tf.Tensor: shape=(2, 2), dtype=int32, numpy=
  array([[ 7, 16],
         [10, 25]], dtype=int32)>

  Args:
    inputs: A list of \`tf.Tensor\` or \`tf.IndexedSlices\` objects, each with the
      same shape and type. \`tf.IndexedSlices\` objects will be converted into
      dense tensors prior to adding.
    name: A name for the operation (optional).

  Returns:
    A \`tf.Tensor\` of the same shape and type as the elements of \`inputs\`.

  Raises:
    ValueError: If \`inputs\` don't all have same shape and dtype or the shape
    cannot be inferred.
  `},{name:"argmax",path:"./tf/math/argmax.md",desc:"Returns the index with the largest value across axes of a tensor.",type:"Functions",docs:`Returns the index with the largest value across axes of a tensor.

  In case of identity returns the smallest index.

  For example:

  >>> A = tf.constant([2, 20, 30, 3, 6])
  >>> tf.math.argmax(A)  # A[2] is maximum in tensor A
  <tf.Tensor: shape=(), dtype=int64, numpy=2>
  >>> B = tf.constant([[2, 20, 30, 3, 6], [3, 11, 16, 1, 8],
  ...                  [14, 45, 23, 5, 27]])
  >>> tf.math.argmax(B, 0)
  <tf.Tensor: shape=(5,), dtype=int64, numpy=array([2, 2, 0, 2, 2])>
  >>> tf.math.argmax(B, 1)
  <tf.Tensor: shape=(3,), dtype=int64, numpy=array([2, 2, 1])>
  >>> C = tf.constant([0, 0, 0, 0])
  >>> tf.math.argmax(C) # Returns smallest index in case of ties
  <tf.Tensor: shape=(), dtype=int64, numpy=0>

  Args:
    input: A \`Tensor\`.
    axis: An integer, the axis to reduce across. Default to 0.
    output_type: An optional output dtype (\`tf.int32\` or \`tf.int64\`). Defaults
      to \`tf.int64\`.
    name: An optional name for the operation.

  Returns:
    A \`Tensor\` of type \`output_type\`.
  `},{name:"argmin",path:"./tf/math/argmin.md",desc:"Returns the index with the smallest value across axes of a tensor.",type:"Functions",docs:"Returns the index with the smallest value across axes of a tensor.\n\n  Returns the smallest index in case of ties.\n\n  Args:\n    input: A `Tensor`. Must be one of the following types: `float32`, `float64`,\n      `int32`, `uint8`, `int16`, `int8`, `complex64`, `int64`, `qint8`,\n      `quint8`, `qint32`, `bfloat16`, `uint16`, `complex128`, `half`, `uint32`,\n      `uint64`.\n    axis: A `Tensor`. Must be one of the following types: `int32`, `int64`.\n      int32 or int64, must be in the range `-rank(input), rank(input))`.\n      Describes which axis of the input Tensor to reduce across. For vectors,\n      use axis = 0.\n    output_type: An optional `tf.DType` from: `tf.int32, tf.int64`. Defaults to\n      `tf.int64`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` of type `output_type`.\n\n  Usage:\n  ```python\n  import tensorflow as tf\n  a = [1, 10, 26.9, 2.8, 166.32, 62.3]\n  b = tf.math.argmin(input = a)\n  c = tf.keras.backend.eval(b)\n  # c = 0\n  # here a[0] = 1 which is the smallest element of a across axis 0\n  ```\n  "},{name:"argsort",path:"./tf/argsort.md",desc:"Returns the indices of a tensor that give its sorted order along an axis.",type:"Functions",docs:`Returns the indices of a tensor that give its sorted order along an axis.

  >>> values = [1, 10, 26.9, 2.8, 166.32, 62.3]
  >>> sort_order = tf.argsort(values)
  >>> sort_order.numpy()
  array([0, 3, 1, 2, 5, 4], dtype=int32)

  For a 1D tensor:

  >>> sorted = tf.gather(values, sort_order)
  >>> assert tf.reduce_all(sorted == tf.sort(values))

  For higher dimensions, the output has the same shape as
  \`values\`, but along the given axis, values represent the index of the sorted
  element in that slice of the tensor at the given position.

  >>> mat = [[30,20,10],
  ...        [20,10,30],
  ...        [10,30,20]]
  >>> indices = tf.argsort(mat)
  >>> indices.numpy()
  array([[2, 1, 0],
         [1, 0, 2],
         [0, 2, 1]], dtype=int32)

  If \`axis=-1\` these indices can be used to apply a sort using \`tf.gather\`:

  >>> tf.gather(mat, indices, batch_dims=-1).numpy()
  array([[10, 20, 30],
         [10, 20, 30],
         [10, 20, 30]], dtype=int32)

  See also:

    * \`tf.sort\`: Sort along an axis.
    * \`tf.math.top_k\`: A partial sort that returns a fixed number of top values
      and corresponding indices.

  Args:
    values: 1-D or higher **numeric** \`Tensor\`.
    axis: The axis along which to sort. The default is -1, which sorts the last
      axis.
    direction: The direction in which to sort the values (\`'ASCENDING'\` or
      \`'DESCENDING'\`).
    stable: If True, equal elements in the original tensor will not be
      re-ordered in the returned order. Unstable sort is not yet implemented,
      but will eventually be the default for performance reasons. If you require
      a stable order, pass \`stable=True\` for forwards compatibility.
    name: Optional name for the operation.

  Returns:
    An int32 \`Tensor\` with the same shape as \`values\`. The indices that would
        sort each slice of the given \`values\` along the given \`axis\`.

  Raises:
    ValueError: If axis is not a constant scalar, or the direction is invalid.
    tf.errors.InvalidArgumentError: If the \`values.dtype\` is not a \`float\` or
        \`int\` type.
  `},{name:"as_dtype",path:"./tf/dtypes/as_dtype.md",desc:"Converts the given `type_value` to a `DType`.",type:"Functions",docs:"Converts the given `type_value` to a `DType`.\n\n  Note: `DType` values are interned. When passed a new `DType` object,\n  `as_dtype` always returns the interned value.\n\n  Args:\n    type_value: A value that can be converted to a `tf.DType` object. This may\n      currently be a `tf.DType` object, a [`DataType`\n      enum](https://www.tensorflow.org/code/tensorflow/core/framework/types.proto),\n        a string type name, or a [`numpy.dtype`](https://numpy.org/doc/stable/reference/generated/numpy.dtype.html).\n\n  Returns:\n    A `DType` corresponding to `type_value`.\n\n  Raises:\n    TypeError: If `type_value` cannot be converted to a `DType`.\n  "},{name:"as_string",path:"./tf/strings/as_string.md",desc:"Converts each entry in the given tensor to strings.",type:"Functions",docs:"Converts each entry in the given tensor to strings.\n\n  Supports many numeric types and boolean.\n\n  For Unicode, see the\n  [https://www.tensorflow.org/tutorials/representation/unicode](Working with Unicode text)\n  tutorial.\n\n  Examples:\n\n  >>> tf.strings.as_string([3, 2])\n  <tf.Tensor: shape=(2,), dtype=string, numpy=array([b'3', b'2'], dtype=object)>\n  >>> tf.strings.as_string([3.1415926, 2.71828], precision=2).numpy()\n  array([b'3.14', b'2.72'], dtype=object)\n\n  Args:\n    input: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`, `complex64`, `complex128`, `bool`, `variant`.\n    precision: An optional `int`. Defaults to `-1`.\n      The post-decimal precision to use for floating point numbers.\n      Only used if precision > -1.\n    scientific: An optional `bool`. Defaults to `False`.\n      Use scientific notation for floating point numbers.\n    shortest: An optional `bool`. Defaults to `False`.\n      Use shortest representation (either scientific or standard) for\n      floating point numbers.\n    width: An optional `int`. Defaults to `-1`.\n      Pad pre-decimal numbers to this width.\n      Applies to both floating point and integer numbers.\n      Only used if width > -1.\n    fill: An optional `string`. Defaults to `\"\"`.\n      The value to pad if width > -1.  If empty, pads with spaces.\n      Another typical value is '0'.  String cannot be longer than 1 character.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` of type `string`.\n  "},{name:"asin",path:"./tf/math/asin.md",desc:"Computes the trignometric inverse sine of x element-wise.",type:"Functions",docs:"Computes the trignometric inverse sine of x element-wise.\n\n  The `tf.math.asin` operation returns the inverse of `tf.math.sin`, such that\n  if `y = tf.math.sin(x)` then, `x = tf.math.asin(y)`.\n\n  **Note**: The output of `tf.math.asin` will lie within the invertible range\n  of sine, i.e [-pi/2, pi/2].\n\n  For example:\n\n  ```python\n  # Note: [1.047, 0.785] ~= [(pi/3), (pi/4)]\n  x = tf.constant([1.047, 0.785])\n  y = tf.math.sin(x) # [0.8659266, 0.7068252]\n\n  tf.math.asin(y) # [1.047, 0.785] = x\n  ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int8`, `int16`, `int32`, `int64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  "},{name:"asinh",path:"./tf/math/asinh.md",desc:"Computes inverse hyperbolic sine of x element-wise.",type:"Functions",docs:'Computes inverse hyperbolic sine of x element-wise.\n\n    Given an input tensor, this function computes inverse hyperbolic sine\n    for every element in the tensor. Both input and output has a range of\n    `[-inf, inf]`.\n\n    ```python\n    x = tf.constant([-float("inf"), -2, -0.5, 1, 1.2, 200, 10000, float("inf")])\n    tf.math.asinh(x) ==> [-inf -1.4436355 -0.4812118 0.8813736 1.0159732 5.991471 9.903487 inf]\n    ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  '},{name:"assert_equal",path:"./tf/debugging/assert_equal.md",desc:"Assert the condition `x == y` holds element-wise.",type:"Functions",docs:'Assert the condition `x == y` holds element-wise.\n\n  This Op checks that `x[i] == y[i]` holds for every pair of (possibly\n  broadcast) elements of `x` and `y`. If both `x` and `y` are empty, this is\n  trivially satisfied.\n\n  If `x` and `y` are not equal, `message`, as well as the first `summarize`\n  entries of `x` and `y` are printed, and `InvalidArgumentError` is raised.\n\n  Args:\n    x:  Numeric `Tensor`.\n    y:  Numeric `Tensor`, same dtype as and broadcastable to `x`.\n    message: A string to prefix to the default message.\n    summarize: Print this many entries of each tensor.\n    name: A name for this operation (optional).  Defaults to "assert_equal".\n\n  Returns:\n    Op that raises `InvalidArgumentError` if `x == y` is False. This can be\n      used with `tf.control_dependencies` inside of `tf.function`s to block\n      followup computation until the check has executed.\n    @compatibility(eager)\n    returns None\n    @end_compatibility\n\n  Raises:\n    InvalidArgumentError: if the check can be performed immediately and\n      `x == y` is False. The check can be performed immediately during eager\n      execution or if `x` and `y` are statically known.\n  '},{name:"assert_greater",path:"./tf/debugging/assert_greater.md",desc:"Assert the condition `x > y` holds element-wise.",type:"Functions",docs:'Assert the condition `x > y` holds element-wise.\n\n  This Op checks that `x[i] > y[i]` holds for every pair of (possibly\n  broadcast) elements of `x` and `y`. If both `x` and `y` are empty, this is\n  trivially satisfied.\n\n  If `x` is not greater than `y` element-wise, `message`, as well as the first\n  `summarize` entries of `x` and `y` are printed, and `InvalidArgumentError` is\n  raised.\n\n  Args:\n    x:  Numeric `Tensor`.\n    y:  Numeric `Tensor`, same dtype as and broadcastable to `x`.\n    message: A string to prefix to the default message.\n    summarize: Print this many entries of each tensor.\n    name: A name for this operation (optional).  Defaults to "assert_greater".\n\n  Returns:\n    Op that raises `InvalidArgumentError` if `x > y` is False. This can be\n      used with `tf.control_dependencies` inside of `tf.function`s to block\n      followup computation until the check has executed.\n    @compatibility(eager)\n    returns None\n    @end_compatibility\n\n  Raises:\n    InvalidArgumentError: if the check can be performed immediately and\n      `x > y` is False. The check can be performed immediately during eager\n      execution or if `x` and `y` are statically known.\n  '},{name:"assert_less",path:"./tf/debugging/assert_less.md",desc:"Assert the condition `x < y` holds element-wise.",type:"Functions",docs:'Assert the condition `x < y` holds element-wise.\n\n  This Op checks that `x[i] < y[i]` holds for every pair of (possibly\n  broadcast) elements of `x` and `y`. If both `x` and `y` are empty, this is\n  trivially satisfied.\n\n  If `x` is not less than `y` element-wise, `message`, as well as the first\n  `summarize` entries of `x` and `y` are printed, and `InvalidArgumentError` is\n  raised.\n\n  Args:\n    x:  Numeric `Tensor`.\n    y:  Numeric `Tensor`, same dtype as and broadcastable to `x`.\n    message: A string to prefix to the default message.\n    summarize: Print this many entries of each tensor.\n    name: A name for this operation (optional).  Defaults to "assert_less".\n\n  Returns:\n    Op that raises `InvalidArgumentError` if `x < y` is False.\n    This can be used with `tf.control_dependencies` inside of `tf.function`s\n    to block followup computation until the check has executed.\n    @compatibility(eager)\n    returns None\n    @end_compatibility\n\n  Raises:\n    InvalidArgumentError: if the check can be performed immediately and\n      `x < y` is False. The check can be performed immediately during eager\n      execution or if `x` and `y` are statically known.\n  '},{name:"assert_rank",path:"./tf/debugging/assert_rank.md",desc:"Assert that `x` has rank equal to `rank`.",type:"Functions",docs:'Assert that `x` has rank equal to `rank`.\n\n  This Op checks that the rank of `x` is equal to `rank`.\n\n  If `x` has a different rank, `message`, as well as the shape of `x` are\n  printed, and `InvalidArgumentError` is raised.\n\n  Args:\n    x: `Tensor`.\n    rank: Scalar integer `Tensor`.\n    message: A string to prefix to the default message.\n    name: A name for this operation (optional). Defaults to\n      "assert_rank".\n\n  Returns:\n    Op raising `InvalidArgumentError` unless `x` has specified rank.\n    If static checks determine `x` has correct rank, a `no_op` is returned.\n    This can be used with `tf.control_dependencies` inside of `tf.function`s\n    to block followup computation until the check has executed.\n    @compatibility(eager)\n    returns None\n    @end_compatibility\n\n  Raises:\n    InvalidArgumentError: if the check can be performed immediately and\n      `x` does not have rank `rank`. The check can be performed immediately\n      during eager execution or if the shape of `x` is statically known.\n  '},{name:"atan",path:"./tf/math/atan.md",desc:"Computes the trignometric inverse tangent of x element-wise.",type:"Functions",docs:"Computes the trignometric inverse tangent of x element-wise.\n\n  The `tf.math.atan` operation returns the inverse of `tf.math.tan`, such that\n  if `y = tf.math.tan(x)` then, `x = tf.math.atan(y)`.\n\n  **Note**: The output of `tf.math.atan` will lie within the invertible range\n  of tan, i.e (-pi/2, pi/2).\n\n  For example:\n\n  ```python\n  # Note: [1.047, 0.785] ~= [(pi/3), (pi/4)]\n  x = tf.constant([1.047, 0.785])\n  y = tf.math.tan(x) # [1.731261, 0.99920404]\n\n  tf.math.atan(y) # [1.047, 0.785] = x\n  ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int8`, `int16`, `int32`, `int64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  "},{name:"atan2",path:"./tf/math/atan2.md",desc:"Computes arctangent of `y/x` element-wise, respecting signs of the arguments.",type:"Functions",docs:`Computes arctangent of \`y/x\` element-wise, respecting signs of the arguments.

  This is the angle \\\\( \\theta \\in [-\\pi, \\pi] \\\\) such that
  \\\\[ x = r \\cos(\\theta) \\\\]
  and
  \\\\[ y = r \\sin(\\theta) \\\\]
  where \\\\(r = \\sqrt{x^2 + y^2} \\\\).

  For example:

  >>> x = [1., 1.]
  >>> y = [1., -1.]
  >>> print((tf.math.atan2(y,x) * (180 / np.pi)).numpy())
  [ 45. -45.]

  Args:
    y: A \`Tensor\`. Must be one of the following types: \`bfloat16\`, \`half\`, \`float32\`, \`float64\`.
    x: A \`Tensor\`. Must have the same type as \`y\`.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`y\`.
  `},{name:"atanh",path:"./tf/math/atanh.md",desc:"Computes inverse hyperbolic tangent of x element-wise.",type:"Functions",docs:'Computes inverse hyperbolic tangent of x element-wise.\n\n    Given an input tensor, this function computes inverse hyperbolic tangent\n    for every element in the tensor. Input range is `[-1,1]` and output range is\n    `[-inf, inf]`. If input is `-1`, output will be `-inf` and if the\n    input is `1`, output will be `inf`. Values outside the range will have\n    `nan` as output.\n\n    ```python\n    x = tf.constant([-float("inf"), -1, -0.5, 1, 0, 0.5, 10, float("inf")])\n    tf.math.atanh(x) ==> [nan -inf -0.54930615 inf  0. 0.54930615 nan nan]\n    ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  '},{name:"batch_to_space",path:"./tf/batch_to_space.md",desc:"BatchToSpace for N-D tensors of type T.",type:"Functions",docs:'BatchToSpace for N-D tensors of type T.\n\n  This operation reshapes the "batch" dimension 0 into `M + 1` dimensions of\n  shape `block_shape + [batch]`, interleaves these blocks back into the grid\n  defined by the spatial dimensions `[1, ..., M]`, to obtain a result with the\n  same rank as the input.  The spatial dimensions of this intermediate result\n  are then optionally cropped according to `crops` to produce the output.  This\n  is the reverse of SpaceToBatch (see `tf.space_to_batch`).\n\n  Args:\n    input: A N-D `Tensor` with shape `input_shape = [batch] + spatial_shape +\n      remaining_shape`, where `spatial_shape` has M dimensions.\n    block_shape: A 1-D `Tensor` with shape [M]. Must be one of the following\n      types: `int32`, `int64`. All values must be >= 1. For backwards\n      compatibility with TF 1.0, this parameter may be an int, in which case it\n      is converted to\n      `numpy.array([block_shape, block_shape],\n      dtype=numpy.int64)`.\n    crops: A  2-D `Tensor` with shape `[M, 2]`. Must be one of the\n      following types: `int32`, `int64`. All values must be >= 0.\n      `crops[i] = [crop_start, crop_end]` specifies the amount to crop from\n      input dimension `i + 1`, which corresponds to spatial dimension `i`.\n      It is required that\n      `crop_start[i] + crop_end[i] <= block_shape[i] * input_shape[i + 1]`.\n      This operation is equivalent to the following steps:\n      1. Reshape `input` to `reshaped` of shape: [block_shape[0], ...,\n        block_shape[M-1], batch / prod(block_shape), input_shape[1], ...,\n        input_shape[N-1]]\n      2. Permute dimensions of `reshaped` to produce `permuted` of shape\n         [batch / prod(block_shape),  input_shape[1], block_shape[0], ...,\n         input_shape[M], block_shape[M-1], input_shape[M+1],\n        ..., input_shape[N-1]]\n      3. Reshape `permuted` to produce `reshaped_permuted` of shape\n         [batch / prod(block_shape), input_shape[1] * block_shape[0], ...,\n         input_shape[M] * block_shape[M-1], input_shape[M+1], ...,\n         input_shape[N-1]]\n      4. Crop the start and end of dimensions `[1, ..., M]` of\n         `reshaped_permuted` according to `crops` to produce the output\n         of shape:\n         [batch / prod(block_shape),  input_shape[1] *\n           block_shape[0] - crops[0,0] - crops[0,1], ..., input_shape[M] *\n           block_shape[M-1] - crops[M-1,0] - crops[M-1,1],  input_shape[M+1],\n           ..., input_shape[N-1]]\n    name: A name for the operation (optional).\n\n  Examples:\n\n  1. For the following input of shape `[4, 1, 1, 1]`,\n     `block_shape = [2, 2]`, and `crops = [[0, 0], [0, 0]]`:\n\n     ```python\n     [[[[1]]],\n      [[[2]]],\n      [[[3]]],\n      [[[4]]]]\n     ```\n\n    The output tensor has shape `[1, 2, 2, 1]` and value:\n\n     ```\n     x = [[[[1], [2]],\n         [[3], [4]]]]\n     ```\n\n  2. For the following input of shape `[4, 1, 1, 3]`,\n     `block_shape = [2, 2]`, and `crops = [[0, 0], [0, 0]]`:\n\n     ```python\n     [[[1,  2,   3]],\n      [[4,  5,   6]],\n      [[7,  8,   9]],\n      [[10, 11, 12]]]\n     ```\n\n    The output tensor has shape `[1, 2, 2, 3]` and value:\n\n    ```python\n     x = [[[[1, 2, 3], [4,  5,  6 ]],\n           [[7, 8, 9], [10, 11, 12]]]]\n     ```\n\n  3. For the following\n     input of shape `[4, 2, 2, 1]`,\n     `block_shape = [2, 2]`, and `crops = [[0, 0], [0, 0]]`:\n\n     ```python\n     x = [[[[1], [3]], [[ 9], [11]]],\n          [[[2], [4]], [[10], [12]]],\n          [[[5], [7]], [[13], [15]]],\n          [[[6], [8]], [[14], [16]]]]\n     ```\n\n    The output tensor has shape `[1, 4, 4, 1]` and value:\n\n    ```python\n     x = [[[1],  [2],  [ 3], [ 4]],\n          [[5],  [6],  [ 7], [ 8]],\n          [[9],  [10], [11], [12]],\n          [[13], [14], [15], [16]]]\n     ```\n\n  4. For the following input of shape\n      `[8, 1, 3, 1]`,\n      `block_shape = [2, 2]`, and `crops = [[0, 0], [2, 0]]`:\n\n      ```python\n      x = [[[[0], [ 1], [ 3]]],\n           [[[0], [ 9], [11]]],\n           [[[0], [ 2], [ 4]]],\n           [[[0], [10], [12]]],\n           [[[0], [ 5], [ 7]]],\n           [[[0], [13], [15]]],\n           [[[0], [ 6], [ 8]]],\n           [[[0], [14], [16]]]]\n      ```\n\n      The output tensor has shape `[2, 2, 4, 1]` and value:\n\n      ```python\n      x = [[[[ 1], [ 2], [ 3], [ 4]],\n            [[ 5], [ 6], [ 7], [ 8]]],\n           [[[ 9], [10], [11], [12]],\n            [[13], [14], [15], [16]]]]\n      ```\n\n  Returns:\n    A `Tensor`. Has the same type as `input`.\n  '},{name:"bitcast",path:"./tf/bitcast.md",desc:"Bitcasts a tensor from one type to another without copying data.",type:"Functions",docs:"Bitcasts a tensor from one type to another without copying data.\n\n  Given a tensor `input`, this operation returns a tensor that has the same buffer\n  data as `input` with datatype `type`.\n\n  If the input datatype `T` is larger than the output datatype `type` then the\n  shape changes from [...] to [..., sizeof(`T`)/sizeof(`type`)].\n\n  If `T` is smaller than `type`, the operator requires that the rightmost\n  dimension be equal to sizeof(`type`)/sizeof(`T`). The shape then goes from\n  [..., sizeof(`type`)/sizeof(`T`)] to [...].\n\n  tf.bitcast() and tf.cast() work differently when real dtype is casted as a complex dtype\n  (e.g. tf.complex64 or tf.complex128) as tf.cast() make imaginary part 0 while tf.bitcast()\n  gives module error.\n  For example,\n\n  Example 1:\n\n  >>> a = [1., 2., 3.]\n  >>> equality_bitcast = tf.bitcast(a, tf.complex128)\n  Traceback (most recent call last):\n  ...\n  InvalidArgumentError: Cannot bitcast from 1 to 18 [Op:Bitcast]\n  >>> equality_cast = tf.cast(a, tf.complex128)\n  >>> print(equality_cast)\n  tf.Tensor([1.+0.j 2.+0.j 3.+0.j], shape=(3,), dtype=complex128)\n\n  Example 2:\n\n  >>> tf.bitcast(tf.constant(0xffffffff, dtype=tf.uint32), tf.uint8)\n  <tf.Tensor: shape=(4,), dtype=uint8, numpy=array([255, 255, 255, 255], dtype=uint8)>\n\n  Example 3:\n\n  >>> x = [1., 2., 3.]\n  >>> y = [0., 2., 3.]\n  >>> equality= tf.equal(x,y)\n  >>> equality_cast = tf.cast(equality,tf.float32)\n  >>> equality_bitcast = tf.bitcast(equality_cast,tf.uint8)\n  >>> print(equality)\n  tf.Tensor([False True True], shape=(3,), dtype=bool)\n  >>> print(equality_cast)\n  tf.Tensor([0. 1. 1.], shape=(3,), dtype=float32)\n  >>> print(equality_bitcast)\n  tf.Tensor(\n      [[  0   0   0   0]\n       [  0   0 128  63]\n       [  0   0 128  63]], shape=(3, 4), dtype=uint8)\n\n  *NOTE*: Bitcast is implemented as a low-level cast, so machines with different\n  endian orderings will give different results.\n\n  Args:\n    input: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int64`, `int32`, `uint8`, `uint16`, `uint32`, `uint64`, `int8`, `int16`, `complex64`, `complex128`, `qint8`, `quint8`, `qint16`, `quint16`, `qint32`.\n    type: A `tf.DType` from: `tf.bfloat16, tf.half, tf.float32, tf.float64, tf.int64, tf.int32, tf.uint8, tf.uint16, tf.uint32, tf.uint64, tf.int8, tf.int16, tf.complex64, tf.complex128, tf.qint8, tf.quint8, tf.qint16, tf.quint16, tf.qint32`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` of type `type`.\n  "},{name:"boolean_mask",path:"./tf/boolean_mask.md",desc:"Apply boolean mask to tensor.",type:"Functions",docs:`Apply boolean mask to tensor.

  Numpy equivalent is \`tensor[mask]\`.

  In general, \`0 < dim(mask) = K <= dim(tensor)\`, and \`mask\`'s shape must match
  the first K dimensions of \`tensor\`'s shape.  We then have:
    \`boolean_mask(tensor, mask)[i, j1,...,jd] = tensor[i1,...,iK,j1,...,jd]\`
  where \`(i1,...,iK)\` is the ith \`True\` entry of \`mask\` (row-major order).
  The \`axis\` could be used with \`mask\` to indicate the axis to mask from.
  In that case, \`axis + dim(mask) <= dim(tensor)\` and \`mask\`'s shape must match
  the first \`axis + dim(mask)\` dimensions of \`tensor\`'s shape.

  See also: \`tf.ragged.boolean_mask\`, which can be applied to both dense and
  ragged tensors, and can be used if you need to preserve the masked dimensions
  of \`tensor\` (rather than flattening them, as \`tf.boolean_mask\` does).

  Examples:

  >>> tensor = [0, 1, 2, 3]  # 1-D example
  >>> mask = np.array([True, False, True, False])
  >>> tf.boolean_mask(tensor, mask)
  <tf.Tensor: shape=(2,), dtype=int32, numpy=array([0, 2], dtype=int32)>

  >>> tensor = [[1, 2], [3, 4], [5, 6]] # 2-D example
  >>> mask = np.array([True, False, True])
  >>> tf.boolean_mask(tensor, mask)
  <tf.Tensor: shape=(2, 2), dtype=int32, numpy=
  array([[1, 2],
         [5, 6]], dtype=int32)>

  Args:
    tensor:  N-D Tensor.
    mask:  K-D boolean Tensor, K <= N and K must be known statically.
    axis:  A 0-D int Tensor representing the axis in \`tensor\` to mask from. By
      default, axis is 0 which will mask from the first dimension. Otherwise K +
      axis <= N.
    name:  A name for this operation (optional).

  Returns:
    (N-K+1)-dimensional tensor populated by entries in \`tensor\` corresponding
    to \`True\` values in \`mask\`.

  Raises:
    ValueError:  If shapes do not conform.

  Examples:

  \`\`\`python
  # 2-D example
  tensor = [[1, 2], [3, 4], [5, 6]]
  mask = np.array([True, False, True])
  boolean_mask(tensor, mask)  # [[1, 2], [5, 6]]
  \`\`\`
  `},{name:"broadcast_dynamic_shape",path:"./tf/broadcast_dynamic_shape.md",desc:"Computes the shape of a broadcast given symbolic shapes.",type:"Functions",docs:`Computes the shape of a broadcast given symbolic shapes.

  When \`shape_x\` and \`shape_y\` are Tensors representing shapes (i.e. the result
  of calling tf.shape on another Tensor) this computes a Tensor which is the
  shape of the result of a broadcasting op applied in tensors of shapes
  \`shape_x\` and \`shape_y\`.

  This is useful when validating the result of a broadcasting operation when the
  tensors do not have statically known shapes.

  Example:

  >>> shape_x = (1, 2, 3)
  >>> shape_y = (5, 1, 3)
  >>> tf.broadcast_dynamic_shape(shape_x, shape_y)
  <tf.Tensor: shape=(3,), dtype=int32, numpy=array([5, 2, 3], ...>

  Args:
    shape_x: A rank 1 integer \`Tensor\`, representing the shape of x.
    shape_y: A rank 1 integer \`Tensor\`, representing the shape of y.

  Returns:
    A rank 1 integer \`Tensor\` representing the broadcasted shape.

  Raises:
    InvalidArgumentError: If the two shapes are incompatible for
    broadcasting.
  `},{name:"broadcast_static_shape",path:"./tf/broadcast_static_shape.md",desc:"Computes the shape of a broadcast given known shapes.",type:"Functions",docs:`Computes the shape of a broadcast given known shapes.

  When \`shape_x\` and \`shape_y\` are fully known \`TensorShape\`s this computes a
  \`TensorShape\` which is the shape of the result of a broadcasting op applied in
  tensors of shapes \`shape_x\` and \`shape_y\`.

  For example, if shape_x is \`TensorShape([1, 2, 3])\` and shape_y is
  \`TensorShape([5, 1, 3])\`, the result is a TensorShape whose value is
  \`TensorShape([5, 2, 3])\`.

  This is useful when validating the result of a broadcasting operation when the
  tensors have statically known shapes.

  Example:

  >>> shape_x = tf.TensorShape([1, 2, 3])
  >>> shape_y = tf.TensorShape([5, 1 ,3])
  >>> tf.broadcast_static_shape(shape_x, shape_y)
  TensorShape([5, 2, 3])

  Args:
    shape_x: A \`TensorShape\`
    shape_y: A \`TensorShape\`

  Returns:
    A \`TensorShape\` representing the broadcasted shape.

  Raises:
    ValueError: If the two shapes can not be broadcasted.
  `},{name:"broadcast_to",path:"./tf/broadcast_to.md",desc:"Broadcast an array for a compatible shape.",type:"Functions",docs:`Broadcast an array for a compatible shape.

  Broadcasting is the process of making arrays to have compatible shapes
  for arithmetic operations. Two shapes are compatible if for each
  dimension pair they are either equal or one of them is one. When trying
  to broadcast a Tensor to a shape, it starts with the trailing dimensions,
  and works its way forward.

  For example,

  >>> x = tf.constant([1, 2, 3])
  >>> y = tf.broadcast_to(x, [3, 3])
  >>> print(y)
  tf.Tensor(
      [[1 2 3]
       [1 2 3]
       [1 2 3]], shape=(3, 3), dtype=int32)

  In the above example, the input Tensor with the shape of \`[1, 3]\`
  is broadcasted to output Tensor with shape of \`[3, 3]\`.

  When doing broadcasted operations such as multiplying a tensor
  by a scalar, broadcasting (usually) confers some time or space
  benefit, as the broadcasted tensor is never materialized.

  However, \`broadcast_to\` does not carry with it any such benefits.
  The newly-created tensor takes the full memory of the broadcasted
  shape. (In a graph context, \`broadcast_to\` might be fused to
  subsequent operation and then be optimized away, however.)

  Args:
    input: A \`Tensor\`. A Tensor to broadcast.
    shape: A \`Tensor\`. Must be one of the following types: \`int32\`, \`int64\`.
      An 1-D \`int\` Tensor. The shape of the desired output.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`input\`.
  `},{name:"case",path:"./tf/case.md",desc:"Create a case operation.",type:"Functions",docs:`Create a case operation.

  See also \`tf.switch_case\`.

  The \`pred_fn_pairs\` parameter is a list of pairs of size N.
  Each pair contains a boolean scalar tensor and a python callable that
  creates the tensors to be returned if the boolean evaluates to True.
  \`default\` is a callable generating a list of tensors. All the callables
  in \`pred_fn_pairs\` as well as \`default\` (if provided) should return the same
  number and types of tensors.

  If \`exclusive==True\`, all predicates are evaluated, and an exception is
  thrown if more than one of the predicates evaluates to \`True\`.
  If \`exclusive==False\`, execution stops at the first predicate which
  evaluates to True, and the tensors generated by the corresponding function
  are returned immediately. If none of the predicates evaluate to True, this
  operation returns the tensors generated by \`default\`.

  \`tf.case\` supports nested structures as implemented in
  \`tf.nest\`. All of the callables must return the same (possibly nested) value
  structure of lists, tuples, and/or named tuples. Singleton lists and tuples
  form the only exceptions to this: when returned by a callable, they are
  implicitly unpacked to single values. This behavior is disabled by passing
  \`strict=True\`.

  @compatibility(v2)
  \`pred_fn_pairs\` could be a dictionary in v1. However, tf.Tensor and
  tf.Variable are no longer hashable in v2, so cannot be used as a key for a
  dictionary.  Please use a list or a tuple instead.
  @end_compatibility


  **Example 1:**

  Pseudocode:

  \`\`\`
  if (x < y) return 17;
  else return 23;
  \`\`\`

  Expressions:

  \`\`\`python
  f1 = lambda: tf.constant(17)
  f2 = lambda: tf.constant(23)
  r = tf.case([(tf.less(x, y), f1)], default=f2)
  \`\`\`

  **Example 2:**

  Pseudocode:

  \`\`\`
  if (x < y && x > z) raise OpError("Only one predicate may evaluate to True");
  if (x < y) return 17;
  else if (x > z) return 23;
  else return -1;
  \`\`\`

  Expressions:

  \`\`\`python
  def f1(): return tf.constant(17)
  def f2(): return tf.constant(23)
  def f3(): return tf.constant(-1)
  r = tf.case([(tf.less(x, y), f1), (tf.greater(x, z), f2)],
           default=f3, exclusive=True)
  \`\`\`

  Args:
    pred_fn_pairs: List of pairs of a boolean scalar tensor and a callable which
      returns a list of tensors.
    default: Optional callable that returns a list of tensors.
    exclusive: True iff at most one predicate is allowed to evaluate to \`True\`.
    strict: A boolean that enables/disables 'strict' mode; see above.
    name: A name for this operation (optional).

  Returns:
    The tensors returned by the first pair whose predicate evaluated to True, or
    those returned by \`default\` if none does.

  Raises:
    TypeError: If \`pred_fn_pairs\` is not a list/tuple.
    TypeError: If \`pred_fn_pairs\` is a list but does not contain 2-tuples.
    TypeError: If \`fns[i]\` is not callable for any i, or \`default\` is not
               callable.
  `},{name:"cast",path:"./tf/cast.md",desc:"Casts a tensor to a new type.",type:"Functions",docs:"Casts a tensor to a new type.\n\n  The operation casts `x` (in case of `Tensor`) or `x.values`\n  (in case of `SparseTensor` or `IndexedSlices`) to `dtype`.\n\n  For example:\n\n  >>> x = tf.constant([1.8, 2.2], dtype=tf.float32)\n  >>> tf.cast(x, tf.int32)\n  <tf.Tensor: shape=(2,), dtype=int32, numpy=array([1, 2], dtype=int32)>\n\n  Notice `tf.cast` has an alias `tf.dtypes.cast`:\n\n  >>> x = tf.constant([1.8, 2.2], dtype=tf.float32)\n  >>> tf.dtypes.cast(x, tf.int32)\n  <tf.Tensor: shape=(2,), dtype=int32, numpy=array([1, 2], dtype=int32)>\n\n  The operation supports data types (for `x` and `dtype`) of\n  `uint8`, `uint16`, `uint32`, `uint64`, `int8`, `int16`, `int32`, `int64`,\n  `float16`, `float32`, `float64`, `complex64`, `complex128`, `bfloat16`.\n  In case of casting from complex types (`complex64`, `complex128`) to real\n  types, only the real part of `x` is returned. In case of casting from real\n  types to complex types (`complex64`, `complex128`), the imaginary part of the\n  returned value is set to `0`. The handling of complex types here matches the\n  behavior of numpy.\n\n  Note casting nan and inf values to integral types has undefined behavior.\n\n  Args:\n    x: A `Tensor` or `SparseTensor` or `IndexedSlices` of numeric type. It could\n      be `uint8`, `uint16`, `uint32`, `uint64`, `int8`, `int16`, `int32`,\n      `int64`, `float16`, `float32`, `float64`, `complex64`, `complex128`,\n      `bfloat16`.\n    dtype: The destination type. The list of supported dtypes is the same as\n      `x`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` or `SparseTensor` or `IndexedSlices` with same shape as `x` and\n      same type as `dtype`.\n\n  Raises:\n    TypeError: If `x` cannot be cast to the `dtype`.\n  "},{name:"clip_by_global_norm",path:"./tf/clip_by_global_norm.md",desc:"Clips values of multiple tensors by the ratio of the sum of their norms.",type:"Functions",docs:"Clips values of multiple tensors by the ratio of the sum of their norms.\n\n  Given a tuple or list of tensors `t_list`, and a clipping ratio `clip_norm`,\n  this operation returns a list of clipped tensors `list_clipped`\n  and the global norm (`global_norm`) of all tensors in `t_list`. Optionally,\n  if you've already computed the global norm for `t_list`, you can specify\n  the global norm with `use_norm`.\n\n  To perform the clipping, the values `t_list[i]` are set to:\n\n      t_list[i] * clip_norm / max(global_norm, clip_norm)\n\n  where:\n\n      global_norm = sqrt(sum([l2norm(t)**2 for t in t_list]))\n\n  If `clip_norm > global_norm` then the entries in `t_list` remain as they are,\n  otherwise they're all shrunk by the global ratio.\n\n  If `global_norm == infinity` then the entries in `t_list` are all set to `NaN`\n  to signal that an error occurred.\n\n  Any of the entries of `t_list` that are of type `None` are ignored.\n\n  This is the correct way to perform gradient clipping (Pascanu et al., 2012).\n\n  However, it is slower than `clip_by_norm()` because all the parameters must be\n  ready before the clipping operation can be performed.\n\n  Args:\n    t_list: A tuple or list of mixed `Tensors`, `IndexedSlices`, or None.\n    clip_norm: A 0-D (scalar) `Tensor` > 0. The clipping ratio.\n    use_norm: A 0-D (scalar) `Tensor` of type `float` (optional). The global\n      norm to use. If not provided, `global_norm()` is used to compute the norm.\n    name: A name for the operation (optional).\n\n  Returns:\n    list_clipped: A list of `Tensors` of the same type as `list_t`.\n    global_norm: A 0-D (scalar) `Tensor` representing the global norm.\n\n  Raises:\n    TypeError: If `t_list` is not a sequence.\n\n  References:\n    On the difficulty of training Recurrent Neural Networks:\n      [Pascanu et al., 2012](http://proceedings.mlr.press/v28/pascanu13.html)\n      ([pdf](http://proceedings.mlr.press/v28/pascanu13.pdf))\n  "},{name:"clip_by_norm",path:"./tf/clip_by_norm.md",desc:"Clips tensor values to a maximum L2-norm.",type:"Functions",docs:`Clips tensor values to a maximum L2-norm.

  Given a tensor \`t\`, and a maximum clip value \`clip_norm\`, this operation
  normalizes \`t\` so that its L2-norm is less than or equal to \`clip_norm\`,
  along the dimensions given in \`axes\`. Specifically, in the default case
  where all dimensions are used for calculation, if the L2-norm of \`t\` is
  already less than or equal to \`clip_norm\`, then \`t\` is not modified. If
  the L2-norm is greater than \`clip_norm\`, then this operation returns a
  tensor of the same type and shape as \`t\` with its values set to:

  \`t * clip_norm / l2norm(t)\`

  In this case, the L2-norm of the output tensor is \`clip_norm\`.

  As another example, if \`t\` is a matrix and \`axes == [1]\`, then each row
  of the output will have L2-norm less than or equal to \`clip_norm\`. If
  \`axes == [0]\` instead, each column of the output will be clipped.

  Code example:

  >>> some_nums = tf.constant([[1, 2, 3, 4, 5]], dtype=tf.float32)
  >>> tf.clip_by_norm(some_nums, 2.0).numpy()
  array([[0.26967996, 0.5393599 , 0.80903983, 1.0787199 , 1.3483998 ]],
        dtype=float32)

  This operation is typically used to clip gradients before applying them with
  an optimizer.  Most gradient data is a collection of different shaped tensors
  for different parts of the model.  Thus, this is a common usage:

  \`\`\`
  # Get your gradients after training
  loss_value, grads = grad(model, features, labels)

  # Apply some clipping
  grads = [tf.clip_by_norm(g, norm)
               for g in grads]

  # Continue on with training
  optimizer.apply_gradients(grads)
  \`\`\`

  Args:
    t: A \`Tensor\` or \`IndexedSlices\`.  This must be a floating point type.
    clip_norm: A 0-D (scalar) \`Tensor\` > 0. A maximum clipping value, also
      floating point
    axes: A 1-D (vector) \`Tensor\` of type int32 containing the dimensions
      to use for computing the L2-norm. If \`None\` (the default), uses all
      dimensions.
    name: A name for the operation (optional).

  Returns:
    A clipped \`Tensor\` or \`IndexedSlices\`.

  Raises:
    ValueError: If the clip_norm tensor is not a 0-D scalar tensor.
    TypeError: If dtype of the input is not a floating point or
      complex type.
  `},{name:"clip_by_value",path:"./tf/clip_by_value.md",desc:"Clips tensor values to a specified min and max.",type:"Functions",docs:`Clips tensor values to a specified min and max.

  Given a tensor \`t\`, this operation returns a tensor of the same type and
  shape as \`t\` with its values clipped to \`clip_value_min\` and \`clip_value_max\`.
  Any values less than \`clip_value_min\` are set to \`clip_value_min\`. Any values
  greater than \`clip_value_max\` are set to \`clip_value_max\`.

  Note: \`clip_value_min\` needs to be smaller or equal to \`clip_value_max\` for
  correct results.

  For example:

  Basic usage passes a scalar as the min and max value.

  >>> t = tf.constant([[-10., -1., 0.], [0., 2., 10.]])
  >>> t2 = tf.clip_by_value(t, clip_value_min=-1, clip_value_max=1)
  >>> t2.numpy()
  array([[-1., -1.,  0.],
         [ 0.,  1.,  1.]], dtype=float32)

  The min and max can be the same size as \`t\`, or broadcastable to that size.

  >>> t = tf.constant([[-1, 0., 10.], [-1, 0, 10]])
  >>> clip_min = [[2],[1]]
  >>> t3 = tf.clip_by_value(t, clip_value_min=clip_min, clip_value_max=100)
  >>> t3.numpy()
  array([[ 2.,  2., 10.],
         [ 1.,  1., 10.]], dtype=float32)

  Broadcasting fails, intentionally, if you would expand the dimensions of \`t\`

  >>> t = tf.constant([[-1, 0., 10.], [-1, 0, 10]])
  >>> clip_min = [[[2, 1]]] # Has a third axis
  >>> t4 = tf.clip_by_value(t, clip_value_min=clip_min, clip_value_max=100)
  Traceback (most recent call last):
  ...
  InvalidArgumentError: Incompatible shapes: [2,3] vs. [1,1,2]

  It throws a \`TypeError\` if you try to clip an \`int\` to a \`float\` value
  (\`tf.cast\` the input to \`float\` first).

  >>> t = tf.constant([[1, 2], [3, 4]], dtype=tf.int32)
  >>> t5 = tf.clip_by_value(t, clip_value_min=-3.1, clip_value_max=3.1)
  Traceback (most recent call last):
  ...
  TypeError: Cannot convert ...


  Args:
    t: A \`Tensor\` or \`IndexedSlices\`.
    clip_value_min: The minimum value to clip to. A scalar \`Tensor\` or one that
      is broadcastable to the shape of \`t\`.
    clip_value_max: The maximum value to clip to. A scalar \`Tensor\` or one that
      is broadcastable to the shape of \`t\`.
    name: A name for the operation (optional).

  Returns:
    A clipped \`Tensor\` or \`IndexedSlices\`.

  Raises:
    \`tf.errors.InvalidArgumentError\`: If the clip tensors would trigger array
      broadcasting that would make the returned tensor larger than the input.
    TypeError: If dtype of the input is \`int32\` and dtype of
      the \`clip_value_min\` or \`clip_value_max\` is \`float32\`
  `},{name:"complex",path:"./tf/dtypes/complex.md",desc:"Converts two real numbers to a complex number.",type:"Functions",docs:"Converts two real numbers to a complex number.\n\n  Given a tensor `real` representing the real part of a complex number, and a\n  tensor `imag` representing the imaginary part of a complex number, this\n  operation returns complex numbers elementwise of the form \\\\(a + bj\\\\), where\n  *a* represents the `real` part and *b* represents the `imag` part.\n\n  The input tensors `real` and `imag` must have the same shape.\n\n  For example:\n\n  ```python\n  real = tf.constant([2.25, 3.25])\n  imag = tf.constant([4.75, 5.75])\n  tf.complex(real, imag)  # [[2.25 + 4.75j], [3.25 + 5.75j]]\n  ```\n\n  Args:\n    real: A `Tensor`. Must be one of the following types: `float32`, `float64`.\n    imag: A `Tensor`. Must have the same type as `real`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` of type `complex64` or `complex128`.\n\n  Raises:\n    TypeError: Real and imag must be correct types\n  "},{name:"concat",path:"./tf/concat.md",desc:"Concatenates tensors along one dimension.",type:"Functions",docs:`Concatenates tensors along one dimension.

  See also \`tf.tile\`, \`tf.stack\`, \`tf.repeat\`.

  Concatenates the list of tensors \`values\` along dimension \`axis\`.  If
  \`values[i].shape = [D0, D1, ... Daxis(i), ...Dn]\`, the concatenated
  result has shape

      [D0, D1, ... Raxis, ...Dn]

  where

      Raxis = sum(Daxis(i))

  That is, the data from the input tensors is joined along the \`axis\`
  dimension.

  The number of dimensions of the input tensors must match, and all dimensions
  except \`axis\` must be equal.

  For example:

  >>> t1 = [[1, 2, 3], [4, 5, 6]]
  >>> t2 = [[7, 8, 9], [10, 11, 12]]
  >>> tf.concat([t1, t2], 0)
  <tf.Tensor: shape=(4, 3), dtype=int32, numpy=
  array([[ 1,  2,  3],
         [ 4,  5,  6],
         [ 7,  8,  9],
         [10, 11, 12]], dtype=int32)>

  >>> tf.concat([t1, t2], 1)
  <tf.Tensor: shape=(2, 6), dtype=int32, numpy=
  array([[ 1,  2,  3,  7,  8,  9],
         [ 4,  5,  6, 10, 11, 12]], dtype=int32)>

  As in Python, the \`axis\` could also be negative numbers. Negative \`axis\`
  are interpreted as counting from the end of the rank, i.e.,
   \`axis + rank(values)\`-th dimension.

  For example:

  >>> t1 = [[[1, 2], [2, 3]], [[4, 4], [5, 3]]]
  >>> t2 = [[[7, 4], [8, 4]], [[2, 10], [15, 11]]]
  >>> tf.concat([t1, t2], -1)
  <tf.Tensor: shape=(2, 2, 4), dtype=int32, numpy=
    array([[[ 1,  2,  7,  4],
            [ 2,  3,  8,  4]],
           [[ 4,  4,  2, 10],
            [ 5,  3, 15, 11]]], dtype=int32)>

  Note: If you are concatenating along a new axis consider using stack.
  E.g.

  \`\`\`python
  tf.concat([tf.expand_dims(t, axis) for t in tensors], axis)
  \`\`\`

  can be rewritten as

  \`\`\`python
  tf.stack(tensors, axis=axis)
  \`\`\`

  Args:
    values: A list of \`Tensor\` objects or a single \`Tensor\`.
    axis: 0-D \`int32\` \`Tensor\`.  Dimension along which to concatenate. Must be
      in the range \`[-rank(values), rank(values))\`. As in Python, indexing for
      axis is 0-based. Positive axis in the rage of \`[0, rank(values))\` refers
      to \`axis\`-th dimension. And negative axis refers to \`axis +
      rank(values)\`-th dimension.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\` resulting from concatenation of the input tensors.
  `},{name:"cond",path:"./tf/cond.md",desc:"Return `true_fn(",type:"Functions",docs:'Return `true_fn()` if the predicate `pred` is true else `false_fn()`.\n\n  `true_fn` and `false_fn` both return lists of output tensors. `true_fn` and\n  `false_fn` must have the same non-zero number and type of outputs.\n\n  **WARNING**: Any Tensors or Operations created outside of `true_fn` and\n  `false_fn` will be executed regardless of which branch is selected at runtime.\n\n  Although this behavior is consistent with the dataflow model of TensorFlow,\n  it has frequently surprised users who expected a lazier semantics.\n  Consider the following simple program:\n\n  ```python\n  z = tf.multiply(a, b)\n  result = tf.cond(x < y, lambda: tf.add(x, z), lambda: tf.square(y))\n  ```\n\n  If `x < y`, the `tf.add` operation will be executed and `tf.square`\n  operation will not be executed. Since `z` is needed for at least one\n  branch of the `cond`, the `tf.multiply` operation is always executed,\n  unconditionally.\n\n  Note that `cond` calls `true_fn` and `false_fn` *exactly once* (inside the\n  call to `cond`, and not at all during `Session.run()`). `cond`\n  stitches together the graph fragments created during the `true_fn` and\n  `false_fn` calls with some additional graph nodes to ensure that the right\n  branch gets executed depending on the value of `pred`.\n\n  `tf.cond` supports nested structures as implemented in\n  `tensorflow.python.util.nest`. Both `true_fn` and `false_fn` must return the\n  same (possibly nested) value structure of lists, tuples, and/or named tuples.\n  Singleton lists and tuples form the only exceptions to this: when returned by\n  `true_fn` and/or `false_fn`, they are implicitly unpacked to single values.\n\n  Note: It is illegal to "directly" use tensors created inside a cond branch\n  outside it, e.g. by storing a reference to a branch tensor in the python\n  state. If you need to use a tensor created in a branch function you should\n  return it as an output of the branch function and use the output from\n  `tf.cond` instead.\n\n  Args:\n    pred: A scalar determining whether to return the result of `true_fn` or\n      `false_fn`.\n    true_fn: The callable to be performed if pred is true.\n    false_fn: The callable to be performed if pred is false.\n    name: Optional name prefix for the returned tensors.\n\n  Returns:\n    Tensors returned by the call to either `true_fn` or `false_fn`. If the\n    callables return a singleton list, the element is extracted from the list.\n\n  Raises:\n    TypeError: if `true_fn` or `false_fn` is not callable.\n    ValueError: if `true_fn` and `false_fn` do not return the same number of\n      tensors, or return tensors of different types.\n\n  Example:\n\n  ```python\n  x = tf.constant(2)\n  y = tf.constant(5)\n  def f1(): return tf.multiply(x, 17)\n  def f2(): return tf.add(y, 23)\n  r = tf.cond(tf.less(x, y), f1, f2)\n  # r is set to f1().\n  # Operations in f2 (e.g., tf.add) are not executed.\n  ```\n\n  '},{name:"constant",path:"./tf/constant.md",desc:"Creates a constant tensor from a tensor-like object.",type:"Functions",docs:`Creates a constant tensor from a tensor-like object.

  Note: All eager \`tf.Tensor\` values are immutable (in contrast to
  \`tf.Variable\`). There is nothing especially _constant_ about the value
  returned from \`tf.constant\`. This function is not fundamentally different from
  \`tf.convert_to_tensor\`. The name \`tf.constant\` comes from the \`value\` being
  embedded in a \`Const\` node in the \`tf.Graph\`. \`tf.constant\` is useful
  for asserting that the value can be embedded that way.

  If the argument \`dtype\` is not specified, then the type is inferred from
  the type of \`value\`.

  >>> # Constant 1-D Tensor from a python list.
  >>> tf.constant([1, 2, 3, 4, 5, 6])
  <tf.Tensor: shape=(6,), dtype=int32,
      numpy=array([1, 2, 3, 4, 5, 6], dtype=int32)>
  >>> # Or a numpy array
  >>> a = np.array([[1, 2, 3], [4, 5, 6]])
  >>> tf.constant(a)
  <tf.Tensor: shape=(2, 3), dtype=int64, numpy=
    array([[1, 2, 3],
           [4, 5, 6]])>

  If \`dtype\` is specified, the resulting tensor values are cast to the requested
  \`dtype\`.

  >>> tf.constant([1, 2, 3, 4, 5, 6], dtype=tf.float64)
  <tf.Tensor: shape=(6,), dtype=float64,
      numpy=array([1., 2., 3., 4., 5., 6.])>

  If \`shape\` is set, the \`value\` is reshaped to match. Scalars are expanded to
  fill the \`shape\`:

  >>> tf.constant(0, shape=(2, 3))
    <tf.Tensor: shape=(2, 3), dtype=int32, numpy=
    array([[0, 0, 0],
           [0, 0, 0]], dtype=int32)>
  >>> tf.constant([1, 2, 3, 4, 5, 6], shape=[2, 3])
  <tf.Tensor: shape=(2, 3), dtype=int32, numpy=
    array([[1, 2, 3],
           [4, 5, 6]], dtype=int32)>

  \`tf.constant\` has no effect if an eager Tensor is passed as the \`value\`, it
  even transmits gradients:

  >>> v = tf.Variable([0.0])
  >>> with tf.GradientTape() as g:
  ...     loss = tf.constant(v + v)
  >>> g.gradient(loss, v).numpy()
  array([2.], dtype=float32)

  But, since \`tf.constant\` embeds the value in the \`tf.Graph\` this fails for
  symbolic tensors:

  >>> with tf.compat.v1.Graph().as_default():
  ...   i = tf.compat.v1.placeholder(shape=[None, None], dtype=tf.float32)
  ...   t = tf.constant(i)
  Traceback (most recent call last):
  ...
  TypeError: ...

  \`tf.constant\` will create tensors on the current device. Inputs which are
  already tensors maintain their placements unchanged.

  Related Ops:

  * \`tf.convert_to_tensor\` is similar but:
    * It has no \`shape\` argument.
    * Symbolic tensors are allowed to pass through.

    >>> with tf.compat.v1.Graph().as_default():
    ...   i = tf.compat.v1.placeholder(shape=[None, None], dtype=tf.float32)
    ...   t = tf.convert_to_tensor(i)

  * \`tf.fill\`: differs in a few ways:
    *   \`tf.constant\` supports arbitrary constants, not just uniform scalar
        Tensors like \`tf.fill\`.
    *   \`tf.fill\` creates an Op in the graph that is expanded at runtime, so it
        can efficiently represent large tensors.
    *   Since \`tf.fill\` does not embed the value, it can produce dynamically
        sized outputs.

  Args:
    value: A constant value (or list) of output type \`dtype\`.
    dtype: The type of the elements of the resulting tensor.
    shape: Optional dimensions of resulting tensor.
    name: Optional name for the tensor.

  Returns:
    A Constant Tensor.

  Raises:
    TypeError: if shape is incorrectly specified or unsupported.
    ValueError: if called on a symbolic tensor.
  `},{name:"control_dependencies",path:"./tf/control_dependencies.md",desc:'Wrapper for <a href="./tf/Graph.md#control_dependencies"><code>Graph.control_dependencies(',type:"Functions",docs:`Wrapper for \`Graph.control_dependencies()\` using the default graph.

  See \`tf.Graph.control_dependencies\` for more details.

  Note: *In TensorFlow 2 with eager and/or Autograph, you should not require
  this method, as ops execute in the expected order thanks to automatic control
  dependencies.* Only use \`tf.control_dependencies\` when working with v1
  \`tf.Graph\` code.

  When eager execution is enabled, any callable object in the \`control_inputs\`
  list will be called.

  Args:
    control_inputs: A list of \`Operation\` or \`Tensor\` objects which must be
      executed or computed before running the operations defined in the context.
      Can also be \`None\` to clear the control dependencies. If eager execution
      is enabled, any callable object in the \`control_inputs\` list will be
      called.

  Returns:
   A context manager that specifies control dependencies for all
   operations constructed within the context.
  `},{name:"convert_to_tensor",path:"./tf/convert_to_tensor.md",desc:"Converts the given `value` to a `Tensor`.",type:"Functions",docs:`Converts the given \`value\` to a \`Tensor\`.

  This function converts Python objects of various types to \`Tensor\`
  objects. It accepts \`Tensor\` objects, numpy arrays, Python lists,
  and Python scalars.

  For example:

  >>> import numpy as np
  >>> def my_func(arg):
  ...   arg = tf.convert_to_tensor(arg, dtype=tf.float32)
  ...   return arg

  >>> # The following calls are equivalent.
  ...
  >>> value_1 = my_func(tf.constant([[1.0, 2.0], [3.0, 4.0]]))
  >>> print(value_1)
  tf.Tensor(
    [[1. 2.]
     [3. 4.]], shape=(2, 2), dtype=float32)
  >>> value_2 = my_func([[1.0, 2.0], [3.0, 4.0]])
  >>> print(value_2)
  tf.Tensor(
    [[1. 2.]
     [3. 4.]], shape=(2, 2), dtype=float32)
  >>> value_3 = my_func(np.array([[1.0, 2.0], [3.0, 4.0]], dtype=np.float32))
  >>> print(value_3)
  tf.Tensor(
    [[1. 2.]
     [3. 4.]], shape=(2, 2), dtype=float32)

  This function can be useful when composing a new operation in Python
  (such as \`my_func\` in the example above). All standard Python op
  constructors apply this function to each of their Tensor-valued
  inputs, which allows those ops to accept numpy arrays, Python lists,
  and scalars in addition to \`Tensor\` objects.

  Note: This function diverges from default Numpy behavior for \`float\` and
    \`string\` types when \`None\` is present in a Python list or scalar. Rather
    than silently converting \`None\` values, an error will be thrown.

  Args:
    value: An object whose type has a registered \`Tensor\` conversion function.
    dtype: Optional element type for the returned tensor. If missing, the type
      is inferred from the type of \`value\`.
    dtype_hint: Optional element type for the returned tensor, used when dtype
      is None. In some cases, a caller may not have a dtype in mind when
      converting to a tensor, so dtype_hint can be used as a soft preference.
      If the conversion to \`dtype_hint\` is not possible, this argument has no
      effect.
    name: Optional name to use if a new \`Tensor\` is created.

  Returns:
    A \`Tensor\` based on \`value\`.

  Raises:
    TypeError: If no conversion function is registered for \`value\` to \`dtype\`.
    RuntimeError: If a registered conversion function returns an invalid value.
    ValueError: If the \`value\` is a tensor not of given \`dtype\` in graph mode.
  `},{name:"cos",path:"./tf/math/cos.md",desc:"Computes cos of x element-wise.",type:"Functions",docs:'Computes cos of x element-wise.\n\n    Given an input tensor, this function computes cosine of every\n    element in the tensor. Input range is `(-inf, inf)` and\n    output range is `[-1,1]`. If input lies outside the boundary, `nan`\n    is returned.\n\n    ```python\n    x = tf.constant([-float("inf"), -9, -0.5, 1, 1.2, 200, 10000, float("inf")])\n    tf.math.cos(x) ==> [nan -0.91113025 0.87758255 0.5403023 0.36235774 0.48718765 -0.95215535 nan]\n    ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  '},{name:"cosh",path:"./tf/math/cosh.md",desc:"Computes hyperbolic cosine of x element-wise.",type:"Functions",docs:'Computes hyperbolic cosine of x element-wise.\n\n    Given an input tensor, this function computes hyperbolic cosine of every\n    element in the tensor. Input range is `[-inf, inf]` and output range\n    is `[1, inf]`.\n\n    ```python\n    x = tf.constant([-float("inf"), -9, -0.5, 1, 1.2, 2, 10, float("inf")])\n    tf.math.cosh(x) ==> [inf 4.0515420e+03 1.1276259e+00 1.5430807e+00 1.8106556e+00 3.7621956e+00 1.1013233e+04 inf]\n    ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  '},{name:"cumsum",path:"./tf/math/cumsum.md",desc:"Compute the cumulative sum of the tensor `x` along `axis`.",type:"Functions",docs:"Compute the cumulative sum of the tensor `x` along `axis`.\n\n  By default, this op performs an inclusive cumsum, which means that the first\n  element of the input is identical to the first element of the output:\n  For example:\n\n  >>> # tf.cumsum([a, b, c])   # [a, a + b, a + b + c]\n  >>> x = tf.constant([2, 4, 6, 8])\n  >>> tf.cumsum(x)\n  <tf.Tensor: shape=(4,), dtype=int32,\n  numpy=array([ 2,  6, 12, 20], dtype=int32)>\n\n  >>> # using varying `axis` values\n  >>> y = tf.constant([[2, 4, 6, 8], [1,3,5,7]])\n  >>> tf.cumsum(y, axis=0)\n  <tf.Tensor: shape=(2, 4), dtype=int32, numpy=\n  array([[ 2,  4,  6,  8],\n         [ 3,  7, 11, 15]], dtype=int32)>\n  >>> tf.cumsum(y, axis=1)\n  <tf.Tensor: shape=(2, 4), dtype=int32, numpy=\n  array([[ 2,  6, 12, 20],\n         [ 1,  4,  9, 16]], dtype=int32)>\n\n  By setting the `exclusive` kwarg to `True`, an exclusive cumsum is performed\n  instead:\n\n  >>> # tf.cumsum([a, b, c], exclusive=True)  => [0, a, a + b]\n  >>> x = tf.constant([2, 4, 6, 8])\n  >>> tf.cumsum(x, exclusive=True)\n  <tf.Tensor: shape=(4,), dtype=int32,\n  numpy=array([ 0,  2,  6, 12], dtype=int32)>\n\n  By setting the `reverse` kwarg to `True`, the cumsum is performed in the\n  opposite direction:\n\n  >>> # tf.cumsum([a, b, c], reverse=True)  # [a + b + c, b + c, c]\n  >>> x = tf.constant([2, 4, 6, 8])\n  >>> tf.cumsum(x, reverse=True)\n  <tf.Tensor: shape=(4,), dtype=int32,\n  numpy=array([20, 18, 14,  8], dtype=int32)>\n\n  This is more efficient than using separate `tf.reverse` ops.\n  The `reverse` and `exclusive` kwargs can also be combined:\n\n  >>> # tf.cumsum([a, b, c], exclusive=True, reverse=True)  # [b + c, c, 0]\n  >>> x = tf.constant([2, 4, 6, 8])\n  >>> tf.cumsum(x, exclusive=True, reverse=True)\n  <tf.Tensor: shape=(4,), dtype=int32,\n  numpy=array([18, 14,  8,  0], dtype=int32)>\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `float32`, `float64`,\n      `int64`, `int32`, `uint8`, `uint16`, `int16`, `int8`, `complex64`,\n      `complex128`, `qint8`, `quint8`, `qint32`, `half`.\n    axis: A `Tensor` of type `int32` (default: 0). Must be in the range\n      `[-rank(x), rank(x))`.\n    exclusive: If `True`, perform exclusive cumsum.\n    reverse: A `bool` (default: False).\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  "},{name:"custom_gradient",path:"./tf/custom_gradient.md",desc:"Decorator to define a function with a custom gradient.",type:"Functions",docs:`Decorator to define a function with a custom gradient.

  This decorator allows fine grained control over the gradients of a sequence
  for operations.  This may be useful for multiple reasons, including providing
  a more efficient or numerically stable gradient for a sequence of operations.

  For example, consider the following function that commonly occurs in the
  computation of cross entropy and log likelihoods:

  \`\`\`python
  def log1pexp(x):
    return tf.math.log(1 + tf.exp(x))
  \`\`\`

  Due to numerical instability, the gradient of this function evaluated at x=100
  is NaN.  For example:

  \`\`\`python
  x = tf.constant(100.)
  y = log1pexp(x)
  dy_dx = tf.gradients(y, x) # Will be NaN when evaluated.
  \`\`\`

  The gradient expression can be analytically simplified to provide numerical
  stability:

  \`\`\`python
  @tf.custom_gradient
  def log1pexp(x):
    e = tf.exp(x)
    def grad(upstream):
      return upstream * (1 - 1 / (1 + e))
    return tf.math.log(1 + e), grad
  \`\`\`

  With this definition, the gradient \`dy_dx\` at \`x = 100\` will be correctly
  evaluated as 1.0.

  The variable \`upstream\` is defined as the upstream gradient. i.e. the gradient
  from all the layers or functions originating from this layer. The above
  example has no upstream functions, therefore \`upstream = dy/dy = 1.0\`.

  Assume that \`x_i\` is \`log1pexp\` in the forward pass \`x_1 = x_1(x_0)\`,
  \`x_2 = x_2(x_1)\`, ..., \`x_i = x_i(x_i-1)\`, ..., \`x_n = x_n(x_n-1)\`. By
  chain rule we know that \`dx_n/dx_0 = dx_n/dx_n-1 * dx_n-1/dx_n-2 * ... *
  dx_i/dx_i-1 * ... * dx_1/dx_0\`.

  In this case the gradient of our current function defined as
  \`dx_i/dx_i-1 = (1 - 1 / (1 + e))\`. The upstream gradient \`upstream\` would be
  \`dx_n/dx_n-1 * dx_n-1/dx_n-2 * ... * dx_i+1/dx_i\`. The upstream gradient
  multiplied by the current gradient is then passed downstream.

  In case the function takes multiple variables as input, the \`grad\`
  function must also return  the same number of variables.
  We take the function \`z = x * y\` as an example.

  >>> @tf.custom_gradient
  ... def bar(x, y):
  ...   def grad(upstream):
  ...     dz_dx = y
  ...     dz_dy = x
  ...     return upstream * dz_dx, upstream * dz_dy
  ...   z = x * y
  ...   return z, grad
  >>> x = tf.constant(2.0, dtype=tf.float32)
  >>> y = tf.constant(3.0, dtype=tf.float32)
  >>> with tf.GradientTape(persistent=True) as tape:
  ...   tape.watch(x)
  ...   tape.watch(y)
  ...   z = bar(x, y)
  >>> z
  <tf.Tensor: shape=(), dtype=float32, numpy=6.0>
  >>> tape.gradient(z, x)
  <tf.Tensor: shape=(), dtype=float32, numpy=3.0>
  >>> tape.gradient(z, y)
  <tf.Tensor: shape=(), dtype=float32, numpy=2.0>

  Nesting custom gradients can lead to unintuitive results. The default
  behavior does not correspond to n-th order derivatives. For example

  \`\`\`python
  @tf.custom_gradient
  def op(x):
    y = op1(x)
    @tf.custom_gradient
    def grad_fn(dy):
      gdy = op2(x, y, dy)
      def grad_grad_fn(ddy):  # Not the 2nd order gradient of op w.r.t. x.
        return op3(x, y, dy, ddy)
      return gdy, grad_grad_fn
    return y, grad_fn
  \`\`\`

  The function \`grad_grad_fn\` will be calculating the first order gradient
  of \`grad_fn\` with respect to \`dy\`, which is used to generate forward-mode
  gradient graphs from backward-mode gradient graphs, but is not the same as
  the second order gradient of \`op\` with respect to \`x\`.

  Instead, wrap nested \`@tf.custom_gradients\` in another function:

  \`\`\`python
  @tf.custom_gradient
  def op_with_fused_backprop(x):
    y, x_grad = fused_op(x)
    def first_order_gradient(dy):
      @tf.custom_gradient
      def first_order_custom(unused_x):
        def second_order_and_transpose(ddy):
          return second_order_for_x(...), gradient_wrt_dy(...)
        return x_grad, second_order_and_transpose
      return dy * first_order_custom(x)
    return y, first_order_gradient
  \`\`\`

  Additional arguments to the inner \`@tf.custom_gradient\`-decorated function
  control the expected return values of the innermost function.

  The examples above illustrate how to specify custom gradients for functions
  which do not read from variables. The following example uses variables, which
  require special handling because they are effectively inputs of the forward
  function.

  >>> weights = tf.Variable(tf.ones([2]))  # Trainable variable weights
  >>> @tf.custom_gradient
  ... def linear_poly(x):
  ...   # Creating polynomial
  ...   poly = weights[1] * x + weights[0]
  ...
  ...   def grad_fn(dpoly, variables):
  ...     # dy/dx = weights[1] and we need to left multiply dpoly
  ...     grad_xs = dpoly * weights[1]  # Scalar gradient
  ...
  ...     grad_vars = []  # To store gradients of passed variables
  ...     assert variables is not None
  ...     assert len(variables) == 1
  ...     assert variables[0] is weights
  ...     # Manually computing dy/dweights
  ...     dy_dw = dpoly * tf.stack([x ** 1, x ** 0])
  ...     grad_vars.append(
  ...         tf.reduce_sum(tf.reshape(dy_dw, [2, -1]), axis=1)
  ...     )
  ...     return grad_xs, grad_vars
  ...   return poly, grad_fn
  >>> x = tf.constant([1., 2., 3.])
  >>> with tf.GradientTape(persistent=True) as tape:
  ...   tape.watch(x)
  ...   poly = linear_poly(x)
  >>> poly # poly = x + 1
  <tf.Tensor: shape=(3,),
    dtype=float32,
    numpy=array([2., 3., 4.], dtype=float32)>
  >>> tape.gradient(poly, x)  # conventional scalar gradient dy/dx
  <tf.Tensor: shape=(3,),
    dtype=float32,
    numpy=array([1., 1., 1.], dtype=float32)>
  >>> tape.gradient(poly, weights)
  <tf.Tensor: shape=(2,), dtype=float32, numpy=array([6., 3.], dtype=float32)>

  Above example illustrates usage of trainable variable \`weights\`.
  In the example, the inner \`grad_fn\` accepts an extra \`variables\` input
  parameter and also returns an extra \`grad_vars\` output. That extra argument
  is passed if the forward function reads any variables. You need to
  compute the gradient w.r.t. each of those \`variables\` and output it as a list
  of \`grad_vars\`. Note here that default value of \`variables\` is set to \`None\`
  when no variables are used in the forward function.

  It should be noted \`tf.GradientTape\` is still watching the forward pass of a
  \`tf.custom_gradient\`, and will use the ops it watches. As a consequence,
  calling \`tf.function\` while the tape is still watching leads
  to a gradient graph being built. If an op is used in \`tf.function\` without
  registered gradient, a \`LookupError\` will be raised.

  Users can insert \`tf.stop_gradient\` to customize this behavior. This
  is demonstrated in the example below. \`tf.random.shuffle\` does not have a
  registered gradient. As a result \`tf.stop_gradient\` is used to avoid the
  \`LookupError\`.

  \`\`\`python
  x = tf.constant([0.3, 0.5], dtype=tf.float32)

  @tf.custom_gradient
  def test_func_with_stop_grad(x):
    @tf.function
    def _inner_func():
      # Avoid exception during the forward pass
      return tf.stop_gradient(tf.random.shuffle(x))
      # return tf.random.shuffle(x)  # This will raise

    res = _inner_func()
    def grad(upstream):
      return upstream  # Arbitrarily defined custom gradient
    return res, grad

  with tf.GradientTape() as g:
    g.watch(x)
    res = test_func_with_stop_grad(x)

  g.gradient(res, x)
  \`\`\`

  See also \`tf.RegisterGradient\` which registers a gradient function for a
  primitive TensorFlow operation. \`tf.custom_gradient\` on the other hand allows
  for fine grained control over the gradient computation of a sequence of
  operations.

  Note that if the decorated function uses \`Variable\`s, the enclosing variable
  scope must be using \`ResourceVariable\`s.

  Args:
    f: function \`f(*x)\` that returns a tuple \`(y, grad_fn)\` where:
       - \`x\` is a sequence of (nested structures of) \`Tensor\` inputs to the
         function.
       - \`y\` is a (nested structure of) \`Tensor\` outputs of applying TensorFlow
         operations in \`f\` to \`x\`.
       - \`grad_fn\` is a function with the signature \`g(*grad_ys)\` which returns
         a list of \`Tensor\`s the same size as (flattened) \`x\` - the derivatives
         of \`Tensor\`s in \`y\` with respect to the \`Tensor\`s in \`x\`.  \`grad_ys\` is
         a sequence of \`Tensor\`s the same size as (flattened) \`y\` holding the
         initial value gradients for each \`Tensor\` in \`y\`.

         In a pure mathematical sense, a vector-argument vector-valued function
         \`f\`'s derivatives should be its Jacobian matrix \`J\`. Here we are
         expressing the Jacobian \`J\` as a function \`grad_fn\` which defines how
         \`J\` will transform a vector \`grad_ys\` when left-multiplied with it
         (\`grad_ys * J\`, the vector-Jacobian product, or VJP). This functional
         representation of a matrix is convenient to use for chain-rule
         calculation (in e.g. the back-propagation algorithm).

         If \`f\` uses \`Variable\`s (that are not part of the
         inputs), i.e. through \`get_variable\`, then \`grad_fn\` should have
         signature \`g(*grad_ys, variables=None)\`, where \`variables\` is a list of
         the \`Variable\`s, and return a 2-tuple \`(grad_xs, grad_vars)\`, where
         \`grad_xs\` is the same as above, and \`grad_vars\` is a \`list<Tensor>\`
         with the derivatives of \`Tensor\`s in \`y\` with respect to the variables
         (that is, grad_vars has one Tensor per variable in variables).

  Returns:
    A function \`h(x)\` which returns the same value as \`f(x)[0]\` and whose
    gradient (as calculated by \`tf.gradients\`) is determined by \`f(x)[1]\`.
  `},{name:"device",path:"./tf/device.md",desc:"Specifies the device for ops created/executed in this context.",type:"Functions",docs:`Specifies the device for ops created/executed in this context.

  This function specifies the device to be used for ops created/executed in a
  particular context. Nested contexts will inherit and also create/execute
  their ops on the specified device. If a specific device is not required,
  consider not using this function so that a device can be automatically
  assigned.  In general the use of this function is optional. \`device_name\` can
  be fully specified, as in "/job:worker/task:1/device:cpu:0", or partially
  specified, containing only a subset of the "/"-separated fields. Any fields
  which are specified will override device annotations from outer scopes.

  For example:

  \`\`\`python
  with tf.device('/job:foo'):
    # ops created here have devices with /job:foo
    with tf.device('/job:bar/task:0/device:gpu:2'):
      # ops created here have the fully specified device above
    with tf.device('/device:gpu:1'):
      # ops created here have the device '/job:foo/device:gpu:1'
  \`\`\`

  Args:
    device_name: The device name to use in the context.

  Returns:
    A context manager that specifies the default device to use for newly
    created ops.

  Raises:
    RuntimeError: If a function is passed in.
  `},{name:"divide",path:"./tf/math/divide.md",desc:"Computes Python style division of `x` by `y`.",type:"Functions",docs:`Computes Python style division of \`x\` by \`y\`.

  For example:

  >>> x = tf.constant([16, 12, 11])
  >>> y = tf.constant([4, 6, 2])
  >>> tf.divide(x,y)
  <tf.Tensor: shape=(3,), dtype=float64,
  numpy=array([4. , 2. , 5.5])>

  Args:
    x: A \`Tensor\`
    y: A \`Tensor\`
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\` with same shape as input
  `},{name:"dynamic_partition",path:"./tf/dynamic_partition.md",desc:"Partitions `data` into `num_partitions` tensors using indices from `partitions`.",type:"Functions",docs:'Partitions `data` into `num_partitions` tensors using indices from `partitions`.\n\n  For each index tuple `js` of size `partitions.ndim`, the slice `data[js, ...]`\n  becomes part of `outputs[partitions[js]]`.  The slices with `partitions[js] = i`\n  are placed in `outputs[i]` in lexicographic order of `js`, and the first\n  dimension of `outputs[i]` is the number of entries in `partitions` equal to `i`.\n  In detail,\n\n  ```python\n      outputs[i].shape = [sum(partitions == i)] + data.shape[partitions.ndim:]\n\n      outputs[i] = pack([data[js, ...] for js if partitions[js] == i])\n  ```\n\n  `data.shape` must start with `partitions.shape`.\n\n  For example:\n\n  ```python\n      # Scalar partitions.\n      partitions = 1\n      num_partitions = 2\n      data = [10, 20]\n      outputs[0] = []  # Empty with shape [0, 2]\n      outputs[1] = [[10, 20]]\n\n      # Vector partitions.\n      partitions = [0, 0, 1, 1, 0]\n      num_partitions = 2\n      data = [10, 20, 30, 40, 50]\n      outputs[0] = [10, 20, 50]\n      outputs[1] = [30, 40]\n  ```\n\n  See `dynamic_stitch` for an example on how to merge partitions back.\n\n  <div style="width:70%; margin:auto; margin-bottom:10px; margin-top:20px;">\n  <img style="width:100%" src="https://www.tensorflow.org/images/DynamicPartition.png" alt>\n  </div>\n\n  Args:\n    data: A `Tensor`.\n    partitions: A `Tensor` of type `int32`.\n      Any shape.  Indices in the range `[0, num_partitions)`.\n    num_partitions: An `int` that is `>= 1`.\n      The number of partitions to output.\n    name: A name for the operation (optional).\n\n  Returns:\n    A list of `num_partitions` `Tensor` objects with the same type as `data`.\n  '},{name:"dynamic_stitch",path:"./tf/dynamic_stitch.md",desc:"Interleave the values from the `data` tensors into a single tensor.",type:"Functions",docs:`Interleave the values from the \`data\` tensors into a single tensor.

  Builds a merged tensor such that

  \`\`\`python
      merged[indices[m][i, ..., j], ...] = data[m][i, ..., j, ...]
  \`\`\`

  For example, if each \`indices[m]\` is scalar or vector, we have

  \`\`\`python
      # Scalar indices:
      merged[indices[m], ...] = data[m][...]

      # Vector indices:
      merged[indices[m][i], ...] = data[m][i, ...]
  \`\`\`

  Each \`data[i].shape\` must start with the corresponding \`indices[i].shape\`,
  and the rest of \`data[i].shape\` must be constant w.r.t. \`i\`.  That is, we
  must have \`data[i].shape = indices[i].shape + constant\`.  In terms of this
  \`constant\`, the output shape is

      merged.shape = [max(indices)] + constant

  Values are merged in order, so if an index appears in both \`indices[m][i]\` and
  \`indices[n][j]\` for \`(m,i) < (n,j)\` the slice \`data[n][j]\` will appear in the
  merged result. If you do not need this guarantee, ParallelDynamicStitch might
  perform better on some devices.

  For example:

  \`\`\`python
      indices[0] = 6
      indices[1] = [4, 1]
      indices[2] = [[5, 2], [0, 3]]
      data[0] = [61, 62]
      data[1] = [[41, 42], [11, 12]]
      data[2] = [[[51, 52], [21, 22]], [[1, 2], [31, 32]]]
      merged = [[1, 2], [11, 12], [21, 22], [31, 32], [41, 42],
                [51, 52], [61, 62]]
  \`\`\`

  This method can be used to merge partitions created by \`dynamic_partition\`
  as illustrated on the following example:

  \`\`\`python
      # Apply function (increments x_i) on elements for which a certain condition
      # apply (x_i != -1 in this example).
      x=tf.constant([0.1, -1., 5.2, 4.3, -1., 7.4])
      condition_mask=tf.not_equal(x,tf.constant(-1.))
      partitioned_data = tf.dynamic_partition(
          x, tf.cast(condition_mask, tf.int32) , 2)
      partitioned_data[1] = partitioned_data[1] + 1.0
      condition_indices = tf.dynamic_partition(
          tf.range(tf.shape(x)[0]), tf.cast(condition_mask, tf.int32) , 2)
      x = tf.dynamic_stitch(condition_indices, partitioned_data)
      # Here x=[1.1, -1., 6.2, 5.3, -1, 8.4], the -1. values remain
      # unchanged.
  \`\`\`

  <div style="width:70%; margin:auto; margin-bottom:10px; margin-top:20px;">
  <img style="width:100%" src="https://www.tensorflow.org/images/DynamicStitch.png" alt>
  </div>

  Args:
    indices: A list of at least 1 \`Tensor\` objects with type \`int32\`.
    data: A list with the same length as \`indices\` of \`Tensor\` objects with the same type.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`data\`.
  `},{name:"edit_distance",path:"./tf/edit_distance.md",desc:"Computes the Levenshtein distance between sequences.",type:"Functions",docs:`Computes the Levenshtein distance between sequences.

  This operation takes variable-length sequences (\`hypothesis\` and \`truth\`),
  each provided as a \`SparseTensor\`, and computes the Levenshtein distance.
  You can normalize the edit distance by length of \`truth\` by setting
  \`normalize\` to true.

  For example:

  Given the following input,
  * \`hypothesis\` is a \`tf.SparseTensor\` of shape \`[2, 1, 1]\`
  * \`truth\` is a \`tf.SparseTensor\` of shape \`[2, 2, 2]\`

  >>> hypothesis = tf.SparseTensor(
  ...   [[0, 0, 0],
  ...    [1, 0, 0]],
  ...   ["a", "b"],
  ...   (2, 1, 1))
  >>> truth = tf.SparseTensor(
  ...   [[0, 1, 0],
  ...    [1, 0, 0],
  ...    [1, 0, 1],
  ...    [1, 1, 0]],
  ...    ["a", "b", "c", "a"],
  ...    (2, 2, 2))
  >>> tf.edit_distance(hypothesis, truth, normalize=True)
  <tf.Tensor: shape=(2, 2), dtype=float32, numpy=
  array([[inf, 1. ],
         [0.5, 1. ]], dtype=float32)>

  The operation returns a dense Tensor of shape \`[2, 2]\` with
  edit distances normalized by \`truth\` lengths.

  **Note**: It is possible to calculate edit distance between two
  sparse tensors with variable-length values. However, attempting to create
  them while eager execution is enabled will result in a \`ValueError\`.

  For the following  inputs,

  \`\`\`python
  # 'hypothesis' is a tensor of shape \`[2, 1]\` with variable-length values:
  #   (0,0) = ["a"]
  #   (1,0) = ["b"]
  hypothesis = tf.sparse.SparseTensor(
      [[0, 0, 0],
       [1, 0, 0]],
      ["a", "b"],
      (2, 1, 1))

  # 'truth' is a tensor of shape \`[2, 2]\` with variable-length values:
  #   (0,0) = []
  #   (0,1) = ["a"]
  #   (1,0) = ["b", "c"]
  #   (1,1) = ["a"]
  truth = tf.sparse.SparseTensor(
      [[0, 1, 0],
       [1, 0, 0],
       [1, 0, 1],
       [1, 1, 0]],
      ["a", "b", "c", "a"],
      (2, 2, 2))

  normalize = True

  # The output would be a dense Tensor of shape \`(2,)\`, with edit distances
  normalized by 'truth' lengths.
  # output => array([0., 0.5], dtype=float32)
  \`\`\`

  Args:
    hypothesis: A \`SparseTensor\` containing hypothesis sequences.
    truth: A \`SparseTensor\` containing truth sequences.
    normalize: A \`bool\`. If \`True\`, normalizes the Levenshtein distance by
      length of \`truth.\`
    name: A name for the operation (optional).

  Returns:
    A dense \`Tensor\` with rank \`R - 1\`, where R is the rank of the
    \`SparseTensor\` inputs \`hypothesis\` and \`truth\`.

  Raises:
    TypeError: If either \`hypothesis\` or \`truth\` are not a \`SparseTensor\`.
  `},{name:"eig",path:"./tf/linalg/eig.md",desc:"Computes the eigen decomposition of a batch of matrices.",type:"Functions",docs:`Computes the eigen decomposition of a batch of matrices.

  The eigenvalues
  and eigenvectors for a non-Hermitian matrix in general are complex. The
  eigenvectors are not guaranteed to be linearly independent.

  Computes the eigenvalues and right eigenvectors of the innermost
  N-by-N matrices in \`tensor\` such that
  \`tensor[...,:,:] * v[..., :,i] = e[..., i] * v[...,:,i]\`, for i=0...N-1.

  Args:
    tensor: \`Tensor\` of shape \`[..., N, N]\`. Only the lower triangular part of
      each inner inner matrix is referenced.
    name: string, optional name of the operation.

  Returns:
    e: Eigenvalues. Shape is \`[..., N]\`. Sorted in non-decreasing order.
    v: Eigenvectors. Shape is \`[..., N, N]\`. The columns of the inner most
      matrices contain eigenvectors of the corresponding matrices in \`tensor\`
  `},{name:"eigvals",path:"./tf/linalg/eigvals.md",desc:"Computes the eigenvalues of one or more matrices.",type:"Functions",docs:`Computes the eigenvalues of one or more matrices.

  Note: If your program backpropagates through this function, you should replace
  it with a call to tf.linalg.eig (possibly ignoring the second output) to
  avoid computing the eigen decomposition twice. This is because the
  eigenvectors are used to compute the gradient w.r.t. the eigenvalues. See
  _SelfAdjointEigV2Grad in linalg_grad.py.

  Args:
    tensor: \`Tensor\` of shape \`[..., N, N]\`.
    name: string, optional name of the operation.

  Returns:
    e: Eigenvalues. Shape is \`[..., N]\`. The vector \`e[..., :]\` contains the \`N\`
      eigenvalues of \`tensor[..., :, :]\`.
  `},{name:"einsum",path:"./tf/einsum.md",desc:"Tensor contraction over specified indices and outer product.",type:"Functions",docs:`Tensor contraction over specified indices and outer product.

  Einsum allows defining Tensors by defining their element-wise computation.
  This computation is defined by \`equation\`, a shorthand form based on Einstein
  summation. As an example, consider multiplying two matrices A and B to form a
  matrix C.  The elements of C are given by:

  $$ C_{i,k} = \\sum_j A_{i,j} B_{j,k} $$

  or

  \`\`\`
  C[i,k] = sum_j A[i,j] * B[j,k]
  \`\`\`

  The corresponding einsum \`equation\` is:

  \`\`\`
  ij,jk->ik
  \`\`\`

  In general, to convert the element-wise equation into the \`equation\` string,
  use the following procedure (intermediate strings for matrix multiplication
  example provided in parentheses):

  1. remove variable names, brackets, and commas, (\`ik = sum_j ij * jk\`)
  2. replace "*" with ",", (\`ik = sum_j ij , jk\`)
  3. drop summation signs, and (\`ik = ij, jk\`)
  4. move the output to the right, while replacing "=" with "->". (\`ij,jk->ik\`)

  Note: If the output indices are not specified repeated indices are summed.
  So \`ij,jk->ik\` can be simplified to \`ij,jk\`.

  Many common operations can be expressed in this way.  For example:

  **Matrix multiplication**

  >>> m0 = tf.random.normal(shape=[2, 3])
  >>> m1 = tf.random.normal(shape=[3, 5])
  >>> e = tf.einsum('ij,jk->ik', m0, m1)
  >>> # output[i,k] = sum_j m0[i,j] * m1[j, k]
  >>> print(e.shape)
  (2, 5)

  Repeated indices are summed if the output indices are not specified.

  >>> e = tf.einsum('ij,jk', m0, m1)  # output[i,k] = sum_j m0[i,j] * m1[j, k]
  >>> print(e.shape)
  (2, 5)


  **Dot product**

  >>> u = tf.random.normal(shape=[5])
  >>> v = tf.random.normal(shape=[5])
  >>> e = tf.einsum('i,i->', u, v)  # output = sum_i u[i]*v[i]
  >>> print(e.shape)
  ()

  **Outer product**

  >>> u = tf.random.normal(shape=[3])
  >>> v = tf.random.normal(shape=[5])
  >>> e = tf.einsum('i,j->ij', u, v)  # output[i,j] = u[i]*v[j]
  >>> print(e.shape)
  (3, 5)

  **Transpose**

  >>> m = tf.ones(2,3)
  >>> e = tf.einsum('ij->ji', m0)  # output[j,i] = m0[i,j]
  >>> print(e.shape)
  (3, 2)

  **Diag**

  >>> m = tf.reshape(tf.range(9), [3,3])
  >>> diag = tf.einsum('ii->i', m)
  >>> print(diag.shape)
  (3,)

  **Trace**

  >>> # Repeated indices are summed.
  >>> trace = tf.einsum('ii', m)  # output[j,i] = trace(m) = sum_i m[i, i]
  >>> assert trace == sum(diag)
  >>> print(trace.shape)
  ()

  **Batch matrix multiplication**

  >>> s = tf.random.normal(shape=[7,5,3])
  >>> t = tf.random.normal(shape=[7,3,2])
  >>> e = tf.einsum('bij,bjk->bik', s, t)
  >>> # output[a,i,k] = sum_j s[a,i,j] * t[a, j, k]
  >>> print(e.shape)
  (7, 5, 2)

  This method does not support broadcasting on named-axes. All axes with
  matching labels should have the same length. If you have length-1 axes,
  use \`tf.squeeze\` or \`tf.reshape\` to eliminate them.

  To write code that is agnostic to the number of indices in the input
  use an ellipsis. The ellipsis is a placeholder for "whatever other indices
  fit here".

  For example, to perform a NumPy-style broadcasting-batch-matrix multiplication
  where the matrix multiply acts on the last two axes of the input, use:

  >>> s = tf.random.normal(shape=[11, 7, 5, 3])
  >>> t = tf.random.normal(shape=[11, 7, 3, 2])
  >>> e =  tf.einsum('...ij,...jk->...ik', s, t)
  >>> print(e.shape)
  (11, 7, 5, 2)

  Einsum **will** broadcast over axes covered by the ellipsis.

  >>> s = tf.random.normal(shape=[11, 1, 5, 3])
  >>> t = tf.random.normal(shape=[1, 7, 3, 2])
  >>> e =  tf.einsum('...ij,...jk->...ik', s, t)
  >>> print(e.shape)
  (11, 7, 5, 2)

  Args:
    equation: a \`str\` describing the contraction, in the same format as
      \`numpy.einsum\`.
    *inputs: the inputs to contract (each one a \`Tensor\`), whose shapes should
      be consistent with \`equation\`.
    **kwargs:
      - optimize: Optimization strategy to use to find contraction path using
        opt_einsum. Must be 'greedy', 'optimal', 'branch-2', 'branch-all' or
          'auto'. (optional, default: 'greedy').
      - name: A name for the operation (optional).

  Returns:
    The contracted \`Tensor\`, with shape determined by \`equation\`.

  Raises:
    ValueError: If
      - the format of \`equation\` is incorrect,
      - number of inputs or their shapes are inconsistent with \`equation\`.
  `},{name:"ensure_shape",path:"./tf/ensure_shape.md",desc:"Updates the shape of a tensor and checks at runtime that the shape holds.",type:"Functions",docs:`Updates the shape of a tensor and checks at runtime that the shape holds.

  When executed, this operation asserts that the input tensor \`x\`'s shape
  is compatible with the \`shape\` argument.
  See \`tf.TensorShape.is_compatible_with\` for details.

  >>> x = tf.constant([[1, 2, 3],
  ...                  [4, 5, 6]])
  >>> x = tf.ensure_shape(x, [2, 3])

  Use \`None\` for unknown dimensions:

  >>> x = tf.ensure_shape(x, [None, 3])
  >>> x = tf.ensure_shape(x, [2, None])

  If the tensor's shape is not compatible with the \`shape\` argument, an error
  is raised:

  >>> x = tf.ensure_shape(x, [5])
  Traceback (most recent call last):
  ...
  tf.errors.InvalidArgumentError: Shape of tensor dummy_input [3] is not
    compatible with expected shape [5]. [Op:EnsureShape]

  During graph construction (typically tracing a \`tf.function\`),
  \`tf.ensure_shape\` updates the static-shape of the **result** tensor by
  merging the two shapes. See \`tf.TensorShape.merge_with\` for details.

  This is most useful when **you** know a shape that can't be determined
  statically by TensorFlow.

  The following trivial \`tf.function\` prints the input tensor's
  static-shape before and after \`ensure_shape\` is applied.

  >>> @tf.function
  ... def f(tensor):
  ...   print("Static-shape before:", tensor.shape)
  ...   tensor = tf.ensure_shape(tensor, [None, 3])
  ...   print("Static-shape after:", tensor.shape)
  ...   return tensor

  This lets you see the effect of \`tf.ensure_shape\` when the function is traced:
  >>> cf = f.get_concrete_function(tf.TensorSpec([None, None]))
  Static-shape before: (None, None)
  Static-shape after: (None, 3)

  >>> cf(tf.zeros([3, 3])) # Passes
  >>> cf(tf.constant([1, 2, 3])) # fails
  Traceback (most recent call last):
  ...
  InvalidArgumentError:  Shape of tensor x [3] is not compatible with expected shape [3,3].

  The above example raises \`tf.errors.InvalidArgumentError\`, because \`x\`'s
  shape, \`(3,)\`, is not compatible with the \`shape\` argument, \`(None, 3)\`

  Inside a \`tf.function\` or \`v1.Graph\` context it checks both the buildtime and
  runtime shapes. This is stricter than \`tf.Tensor.set_shape\` which only
  checks the buildtime shape.

  Note: This differs from \`tf.Tensor.set_shape\` in that it sets the static shape
  of the resulting tensor and enforces it at runtime, raising an error if the
  tensor's runtime shape is incompatible with the specified shape.
  \`tf.Tensor.set_shape\` sets the static shape of the tensor without enforcing it
  at runtime, which may result in inconsistencies between the statically-known
  shape of tensors and the runtime value of tensors.

  For example, of loading images of a known size:

  >>> @tf.function
  ... def decode_image(png):
  ...   image = tf.image.decode_png(png, channels=3)
  ...   # the \`print\` executes during tracing.
  ...   print("Initial shape: ", image.shape)
  ...   image = tf.ensure_shape(image,[28, 28, 3])
  ...   print("Final shape: ", image.shape)
  ...   return image

  When tracing a function, no ops are being executed, shapes may be unknown.
  See the [Concrete Functions Guide](https://www.tensorflow.org/guide/concrete_function)
  for details.

  >>> concrete_decode = decode_image.get_concrete_function(
  ...     tf.TensorSpec([], dtype=tf.string))
  Initial shape:  (None, None, 3)
  Final shape:  (28, 28, 3)

  >>> image = tf.random.uniform(maxval=255, shape=[28, 28, 3], dtype=tf.int32)
  >>> image = tf.cast(image,tf.uint8)
  >>> png = tf.image.encode_png(image)
  >>> image2 = concrete_decode(png)
  >>> print(image2.shape)
  (28, 28, 3)

  >>> image = tf.concat([image,image], axis=0)
  >>> print(image.shape)
  (56, 28, 3)
  >>> png = tf.image.encode_png(image)
  >>> image2 = concrete_decode(png)
  Traceback (most recent call last):
  ...
  tf.errors.InvalidArgumentError:  Shape of tensor DecodePng [56,28,3] is not
    compatible with expected shape [28,28,3].

  Caution: if you don't use the result of \`tf.ensure_shape\` the check may not
  run.

  >>> @tf.function
  ... def bad_decode_image(png):
  ...   image = tf.image.decode_png(png, channels=3)
  ...   # the \`print\` executes during tracing.
  ...   print("Initial shape: ", image.shape)
  ...   # BAD: forgot to use the returned tensor.
  ...   tf.ensure_shape(image,[28, 28, 3])
  ...   print("Final shape: ", image.shape)
  ...   return image

  >>> image = bad_decode_image(png)
  Initial shape:  (None, None, 3)
  Final shape:  (None, None, 3)
  >>> print(image.shape)
  (56, 28, 3)

  Args:
    x: A \`Tensor\`.
    shape: A \`TensorShape\` representing the shape of this tensor, a
      \`TensorShapeProto\`, a list, a tuple, or None.
    name: A name for this operation (optional). Defaults to "EnsureShape".

  Returns:
    A \`Tensor\`. Has the same type and contents as \`x\`.

  Raises:
    tf.errors.InvalidArgumentError: If \`shape\` is incompatible with the shape
    of \`x\`.
  `},{name:"equal",path:"./tf/math/equal.md",desc:"Returns the truth value of (x == y",type:"Functions",docs:`Returns the truth value of (x == y) element-wise.

  Performs a [broadcast](
  https://docs.scipy.org/doc/numpy/user/basics.broadcasting.html) with the
  arguments and then an element-wise equality comparison, returning a Tensor of
  boolean values.

  For example:

  >>> x = tf.constant([2, 4])
  >>> y = tf.constant(2)
  >>> tf.math.equal(x, y)
  <tf.Tensor: shape=(2,), dtype=bool, numpy=array([ True,  False])>

  >>> x = tf.constant([2, 4])
  >>> y = tf.constant([2, 4])
  >>> tf.math.equal(x, y)
  <tf.Tensor: shape=(2,), dtype=bool, numpy=array([ True,  True])>

  Args:
    x: A \`tf.Tensor\` or \`tf.sparse.SparseTensor\` or \`tf.IndexedSlices\`.
    y: A \`tf.Tensor\` or \`tf.sparse.SparseTensor\` or \`tf.IndexedSlices\`.
    name: A name for the operation (optional).

  Returns:
    A \`tf.Tensor\` of type bool with the same size as that of x or y.

  Raises:
    \`tf.errors.InvalidArgumentError\`: If shapes of arguments are incompatible
  `},{name:"executing_eagerly",path:"./tf/executing_eagerly.md",desc:"Checks whether the current thread has eager execution enabled.",type:"Functions",docs:`Checks whether the current thread has eager execution enabled.

  Eager execution is enabled by default and this API returns \`True\`
  in most of cases. However, this API might return \`False\` in the following use
  cases.

  *  Executing inside \`tf.function\`, unless under \`tf.init_scope\` or
     \`tf.config.run_functions_eagerly(True)\` is previously called.
  *  Executing inside a transformation function for \`tf.dataset\`.
  *  \`tf.compat.v1.disable_eager_execution()\` is called.

  General case:

  >>> print(tf.executing_eagerly())
  True

  Inside \`tf.function\`:

  >>> @tf.function
  ... def fn():
  ...   with tf.init_scope():
  ...     print(tf.executing_eagerly())
  ...   print(tf.executing_eagerly())
  >>> fn()
  True
  False

  Inside \`tf.function\` after \`tf.config.run_functions_eagerly(True)\` is called:

  >>> tf.config.run_functions_eagerly(True)
  >>> @tf.function
  ... def fn():
  ...   with tf.init_scope():
  ...     print(tf.executing_eagerly())
  ...   print(tf.executing_eagerly())
  >>> fn()
  True
  True
  >>> tf.config.run_functions_eagerly(False)

  Inside a transformation function for \`tf.dataset\`:

  >>> def data_fn(x):
  ...   print(tf.executing_eagerly())
  ...   return x
  >>> dataset = tf.data.Dataset.range(100)
  >>> dataset = dataset.map(data_fn)
  False

  Returns:
    \`True\` if the current thread has eager execution enabled.
  `},{name:"exp",path:"./tf/math/exp.md",desc:"Computes exponential of x element-wise.  \\\\(y = e^x\\\\",type:"Functions",docs:`Computes exponential of x element-wise.  \\\\(y = e^x\\\\).

  This function computes the exponential of the input tensor element-wise.
  i.e. \`math.exp(x)\` or \\\\(e^x\\\\), where \`x\` is the input tensor.
  \\\\(e\\\\) denotes Euler's number and is approximately equal to 2.718281.
  Output is positive for any real input.

  >>> x = tf.constant(2.0)
  >>> tf.math.exp(x)
  <tf.Tensor: shape=(), dtype=float32, numpy=7.389056>

  >>> x = tf.constant([2.0, 8.0])
  >>> tf.math.exp(x)
  <tf.Tensor: shape=(2,), dtype=float32,
  numpy=array([   7.389056, 2980.958   ], dtype=float32)>

  For complex numbers, the exponential value is calculated as
  $$
  e^{x+iy} = {e^x} {e^{iy}} = {e^x} ({\\cos (y) + i \\sin (y)})
  $$

  For \`1+1j\` the value would be computed as:
  $$
  e^1 (\\cos (1) + i \\sin (1)) = 2.7182817 \\times (0.5403023+0.84147096j)
  $$

  >>> x = tf.constant(1 + 1j)
  >>> tf.math.exp(x)
  <tf.Tensor: shape=(), dtype=complex128,
  numpy=(1.4686939399158851+2.2873552871788423j)>

  Args:
    x: A \`tf.Tensor\`. Must be one of the following types: \`bfloat16\`, \`half\`,
      \`float32\`, \`float64\`, \`complex64\`, \`complex128\`.
    name: A name for the operation (optional).

  Returns:
    A \`tf.Tensor\`. Has the same type as \`x\`.

  @compatibility(numpy)
  Equivalent to np.exp
  @end_compatibility
  `},{name:"expand_dims",path:"./tf/expand_dims.md",desc:"Returns a tensor with a length 1 axis inserted at index `axis`.",type:"Functions",docs:`Returns a tensor with a length 1 axis inserted at index \`axis\`.

  Given a tensor \`input\`, this operation inserts a dimension of length 1 at the
  dimension index \`axis\` of \`input\`'s shape. The dimension index follows Python
  indexing rules: It's zero-based, a negative index it is counted backward
  from the end.

  This operation is useful to:

  * Add an outer "batch" dimension to a single element.
  * Align axes for broadcasting.
  * To add an inner vector length axis to a tensor of scalars.

  For example:

  If you have a single image of shape \`[height, width, channels]\`:

  >>> image = tf.zeros([10,10,3])

  You can add an outer \`batch\` axis by passing \`axis=0\`:

  >>> tf.expand_dims(image, axis=0).shape.as_list()
  [1, 10, 10, 3]

  The new axis location matches Python \`list.insert(axis, 1)\`:

  >>> tf.expand_dims(image, axis=1).shape.as_list()
  [10, 1, 10, 3]

  Following standard Python indexing rules, a negative \`axis\` counts from the
  end so \`axis=-1\` adds an inner most dimension:

  >>> tf.expand_dims(image, -1).shape.as_list()
  [10, 10, 3, 1]

  This operation requires that \`axis\` is a valid index for \`input.shape\`,
  following Python indexing rules:

  \`\`\`
  -1-tf.rank(input) <= axis <= tf.rank(input)
  \`\`\`

  This operation is related to:

  * \`tf.squeeze\`, which removes dimensions of size 1.
  * \`tf.reshape\`, which provides more flexible reshaping capability.
  * \`tf.sparse.expand_dims\`, which provides this functionality for
    \`tf.SparseTensor\`

  Args:
    input: A \`Tensor\`.
    axis: Integer specifying the dimension index at which to expand the
      shape of \`input\`. Given an input of D dimensions, \`axis\` must be in range
      \`[-(D+1), D]\` (inclusive).
    name: Optional string. The name of the output \`Tensor\`.

  Returns:
    A tensor with the same data as \`input\`, with an additional dimension
    inserted at the index specified by \`axis\`.

  Raises:
    TypeError: If \`axis\` is not specified.
    InvalidArgumentError: If \`axis\` is out of range \`[-(D+1), D]\`.
  `},{name:"extract_volume_patches",path:"./tf/extract_volume_patches.md",desc:'Extract `patches` from `input` and put them in the `"depth"` output dimension. 3D extension of `extract_image_patches`.',type:"Functions",docs:'Extract `patches` from `input` and put them in the `"depth"` output dimension. 3D extension of `extract_image_patches`.\n\n  Args:\n    input: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.\n      5-D Tensor with shape `[batch, in_planes, in_rows, in_cols, depth]`.\n    ksizes: A list of `ints` that has length `>= 5`.\n      The size of the sliding window for each dimension of `input`.\n    strides: A list of `ints` that has length `>= 5`.\n      1-D of length 5. How far the centers of two consecutive patches are in\n      `input`. Must be: `[1, stride_planes, stride_rows, stride_cols, 1]`.\n    padding: A `string` from: `"SAME", "VALID"`.\n      The type of padding algorithm to use.\n\n      The size-related attributes are specified as follows:\n\n      ```python\n      ksizes = [1, ksize_planes, ksize_rows, ksize_cols, 1]\n      strides = [1, stride_planes, strides_rows, strides_cols, 1]\n      ```\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `input`.\n  '},{name:"eye",path:"./tf/eye.md",desc:"Construct an identity matrix, or a batch of matrices.",type:"Functions",docs:'Construct an identity matrix, or a batch of matrices.\n\n  See also `tf.ones`, `tf.zeros`, `tf.fill`, `tf.one_hot`.\n\n  ```python\n  # Construct one identity matrix.\n  tf.eye(2)\n  ==> [[1., 0.],\n       [0., 1.]]\n\n  # Construct a batch of 3 identity matrices, each 2 x 2.\n  # batch_identity[i, :, :] is a 2 x 2 identity matrix, i = 0, 1, 2.\n  batch_identity = tf.eye(2, batch_shape=[3])\n\n  # Construct one 2 x 3 "identity" matrix\n  tf.eye(2, num_columns=3)\n  ==> [[ 1.,  0.,  0.],\n       [ 0.,  1.,  0.]]\n  ```\n\n  Args:\n    num_rows: Non-negative `int32` scalar `Tensor` giving the number of rows\n      in each batch matrix.\n    num_columns: Optional non-negative `int32` scalar `Tensor` giving the number\n      of columns in each batch matrix.  Defaults to `num_rows`.\n    batch_shape:  A list or tuple of Python integers or a 1-D `int32` `Tensor`.\n      If provided, the returned `Tensor` will have leading batch dimensions of\n      this shape.\n    dtype:  The type of an element in the resulting `Tensor`\n    name:  A name for this `Op`.  Defaults to "eye".\n\n  Returns:\n    A `Tensor` of shape `batch_shape + [num_rows, num_columns]`\n  '},{name:"fill",path:"./tf/fill.md",desc:"Creates a tensor filled with a scalar value.",type:"Functions",docs:"Creates a tensor filled with a scalar value.\n\n  See also `tf.ones`, `tf.zeros`, `tf.one_hot`, `tf.eye`.\n\n  This operation creates a tensor of shape `dims` and fills it with `value`.\n\n  For example:\n\n  >>> tf.fill([2, 3], 9)\n  <tf.Tensor: shape=(2, 3), dtype=int32, numpy=\n  array([[9, 9, 9],\n         [9, 9, 9]], dtype=int32)>\n\n  `tf.fill` evaluates at graph runtime and supports dynamic shapes based on\n  other runtime `tf.Tensors`, unlike `tf.constant(value, shape=dims)`, which\n  embeds the value as a `Const` node.\n\n  Args:\n    dims: A 1-D sequence of non-negative numbers. Represents the shape of the\n      output `tf.Tensor`. Entries should be of type: `int32`, `int64`.\n    value: A value to fill the returned `tf.Tensor`.\n    name: Optional string. The name of the output `tf.Tensor`.\n\n  Returns:\n    A `tf.Tensor` with shape `dims` and the same dtype as `value`.\n\n  Raises:\n    InvalidArgumentError: `dims` contains negative entries.\n    NotFoundError: `dims` contains non-integer entries.\n\n  @compatibility(numpy)\n  Similar to `np.full`. In `numpy`, more parameters are supported. Passing a\n  number argument as the shape (`np.full(5, value)`) is valid in `numpy` for\n  specifying a 1-D shaped result, while TensorFlow does not support this syntax.\n  @end_compatibility\n  "},{name:"fingerprint",path:"./tf/fingerprint.md",desc:"Generates fingerprint values.",type:"Functions",docs:"Generates fingerprint values.\n\n  Generates fingerprint values of `data`.\n\n  Fingerprint op considers the first dimension of `data` as the batch dimension,\n  and `output[i]` contains the fingerprint value generated from contents in\n  `data[i, ...]` for all `i`.\n\n  Fingerprint op writes fingerprint values as byte arrays. For example, the\n  default method `farmhash64` generates a 64-bit fingerprint value at a time.\n  This 8-byte value is written out as an `tf.uint8` array of size 8, in\n  little-endian order.\n\n  For example, suppose that `data` has data type `tf.int32` and shape (2, 3, 4),\n  and that the fingerprint method is `farmhash64`. In this case, the output\n  shape is (2, 8), where 2 is the batch dimension size of `data`, and 8 is the\n  size of each fingerprint value in bytes. `output[0, :]` is generated from\n  12 integers in `data[0, :, :]` and similarly `output[1, :]` is generated from\n  other 12 integers in `data[1, :, :]`.\n\n  Note that this op fingerprints the raw underlying buffer, and it does not\n  fingerprint Tensor's metadata such as data type and/or shape. For example, the\n  fingerprint values are invariant under reshapes and bitcasts as long as the\n  batch dimension remain the same:\n\n  ```python\n  tf.fingerprint(data) == tf.fingerprint(tf.reshape(data, ...))\n  tf.fingerprint(data) == tf.fingerprint(tf.bitcast(data, ...))\n  ```\n\n  For string data, one should expect `tf.fingerprint(data) !=\n  tf.fingerprint(tf.string.reduce_join(data))` in general.\n\n  Args:\n    data: A `Tensor`. Must have rank 1 or higher.\n    method: A `Tensor` of type `tf.string`. Fingerprint method used by this op.\n      Currently available method is `farmhash64`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A two-dimensional `Tensor` of type `tf.uint8`. The first dimension equals to\n    `data`'s first dimension, and the second dimension size depends on the\n    fingerprint algorithm.\n  "},{name:"floor",path:"./tf/math/floor.md",desc:"Returns element-wise largest integer not greater than x.",type:"Functions",docs:`Returns element-wise largest integer not greater than x.

  Both input range is \`(-inf, inf)\` and the
  output range consists of all integer values.

  For example:

  >>> x = tf.constant([1.3324, -1.5, 5.555, -2.532, 0.99, float("inf")])
  >>> tf.floor(x).numpy()
  array([ 1., -2.,  5., -3.,  0., inf], dtype=float32)

  Args:
    x:  A \`Tensor\`. Must be one of the following types: \`bfloat16\`, \`half\`,
      \`float32\`, \`float64\`.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as x.
  `},{name:"foldl",path:"./tf/foldl.md",desc:"foldl on the list of tensors unpacked from `elems` on dimension 0. (deprecated argument values",type:"Functions",docs:`foldl on the list of tensors unpacked from \`elems\` on dimension 0. (deprecated argument values)

Deprecated: SOME ARGUMENT VALUES ARE DEPRECATED: \`(back_prop=False)\`. They will be removed in a future version.
Instructions for updating:
back_prop=False is deprecated. Consider using tf.stop_gradient instead.
Instead of:
results = tf.foldl(fn, elems, back_prop=False)
Use:
results = tf.nest.map_structure(tf.stop_gradient, tf.foldl(fn, elems))

This foldl operator repeatedly applies the callable \`fn\` to a sequence
of elements from first to last. The elements are made of the tensors
unpacked from \`elems\` on dimension 0. The callable fn takes two tensors as
arguments. The first argument is the accumulated value computed from the
preceding invocation of fn, and the second is the value at the current
position of \`elems\`. If \`initializer\` is None, \`elems\` must contain at least
one element, and its first element is used as the initializer.

Suppose that \`elems\` is unpacked into \`values\`, a list of tensors. The shape
of the result tensor is fn(initializer, values[0]).shape\`.

This method also allows multi-arity \`elems\` and output of \`fn\`.  If \`elems\`
is a (possibly nested) list or tuple of tensors, then each of these tensors
must have a matching first (unpack) dimension.  The signature of \`fn\` may
match the structure of \`elems\`.  That is, if \`elems\` is
\`(t1, [t2, t3, [t4, t5]])\`, then an appropriate signature for \`fn\` is:
\`fn = lambda (t1, [t2, t3, [t4, t5]]):\`.

Args:
  fn: The callable to be performed.
  elems: A tensor or (possibly nested) sequence of tensors, each of which will
    be unpacked along their first dimension.  The nested sequence of the
    resulting slices will be the first argument to \`fn\`.
  initializer: (optional) A tensor or (possibly nested) sequence of tensors,
    as the initial value for the accumulator.
  parallel_iterations: (optional) The number of iterations allowed to run in
    parallel.
  back_prop: (optional) Deprecated. False disables support for back
    propagation. Prefer using \`tf.stop_gradient\` instead.
  swap_memory: (optional) True enables GPU-CPU memory swapping.
  name: (optional) Name prefix for the returned tensors.

Returns:
  A tensor or (possibly nested) sequence of tensors, resulting from applying
  \`fn\` consecutively to the list of tensors unpacked from \`elems\`, from first
  to last.

Raises:
  TypeError: if \`fn\` is not callable.

Example:
  \`\`\`python
  elems = tf.constant([1, 2, 3, 4, 5, 6])
  sum = foldl(lambda a, x: a + x, elems)
  # sum == 21
  \`\`\``},{name:"foldr",path:"./tf/foldr.md",desc:"foldr on the list of tensors unpacked from `elems` on dimension 0. (deprecated argument values",type:"Functions",docs:`foldr on the list of tensors unpacked from \`elems\` on dimension 0. (deprecated argument values)

Deprecated: SOME ARGUMENT VALUES ARE DEPRECATED: \`(back_prop=False)\`. They will be removed in a future version.
Instructions for updating:
back_prop=False is deprecated. Consider using tf.stop_gradient instead.
Instead of:
results = tf.foldr(fn, elems, back_prop=False)
Use:
results = tf.nest.map_structure(tf.stop_gradient, tf.foldr(fn, elems))

This foldr operator repeatedly applies the callable \`fn\` to a sequence
of elements from last to first. The elements are made of the tensors
unpacked from \`elems\`. The callable fn takes two tensors as arguments.
The first argument is the accumulated value computed from the preceding
invocation of fn, and the second is the value at the current position of
\`elems\`. If \`initializer\` is None, \`elems\` must contain at least one element,
and its first element is used as the initializer.

Suppose that \`elems\` is unpacked into \`values\`, a list of tensors. The shape
of the result tensor is \`fn(initializer, values[0]).shape\`.

This method also allows multi-arity \`elems\` and output of \`fn\`.  If \`elems\`
is a (possibly nested) list or tuple of tensors, then each of these tensors
must have a matching first (unpack) dimension.  The signature of \`fn\` may
match the structure of \`elems\`.  That is, if \`elems\` is
\`(t1, [t2, t3, [t4, t5]])\`, then an appropriate signature for \`fn\` is:
\`fn = lambda (t1, [t2, t3, [t4, t5]]):\`.

Args:
  fn: The callable to be performed.
  elems: A tensor or (possibly nested) sequence of tensors, each of which will
    be unpacked along their first dimension.  The nested sequence of the
    resulting slices will be the first argument to \`fn\`.
  initializer: (optional) A tensor or (possibly nested) sequence of tensors,
    as the initial value for the accumulator.
  parallel_iterations: (optional) The number of iterations allowed to run in
    parallel.
  back_prop: (optional) Deprecated. False disables support for back
    propagation. Prefer using \`tf.stop_gradient\` instead.
  swap_memory: (optional) True enables GPU-CPU memory swapping.
  name: (optional) Name prefix for the returned tensors.

Returns:
  A tensor or (possibly nested) sequence of tensors, resulting from applying
  \`fn\` consecutively to the list of tensors unpacked from \`elems\`, from last
  to first.

Raises:
  TypeError: if \`fn\` is not callable.

Example:
  \`\`\`python
  elems = [1, 2, 3, 4, 5, 6]
  sum = foldr(lambda a, x: a + x, elems)
  # sum == 21
  \`\`\``},{name:"function",path:"./tf/function.md",desc:"Compiles a function into a callable TensorFlow graph. (deprecated arguments",type:"Functions",docs:`Compiles a function into a callable TensorFlow graph. (deprecated arguments) (deprecated arguments)

Deprecated: SOME ARGUMENTS ARE DEPRECATED: \`(experimental_compile)\`. They will be removed in a future version.
Instructions for updating:
experimental_compile is deprecated, use jit_compile instead

Deprecated: SOME ARGUMENTS ARE DEPRECATED: \`(experimental_relax_shapes)\`. They will be removed in a future version.
Instructions for updating:
experimental_relax_shapes is deprecated, use reduce_retracing instead

\`tf.function\` constructs a \`tf.types.experimental.GenericFunction\` that
executes a TensorFlow graph (\`tf.Graph\`) created by trace-compiling the
TensorFlow operations in \`func\`. More information on the topic can be found
in [Introduction to Graphs and tf.function]
(https://www.tensorflow.org/guide/intro_to_graphs).

See [Better Performance with tf.function]
(https://www.tensorflow.org/guide/function) for tips on performance and
known limitations.

Example usage:

>>> @tf.function
... def f(x, y):
...   return x ** 2 + y
>>> x = tf.constant([2, 3])
>>> y = tf.constant([3, -2])
>>> f(x, y)
<tf.Tensor: ... numpy=array([7, 7], ...)>

The trace-compilation allows non-TensorFlow operations to execute, but under
special conditions. In general, only TensorFlow operations are guaranteed to
run and create fresh results whenever the \`GenericFunction\` is called.

## Features

\`func\` may use data-dependent Python control flow statements, including \`if\`,
\`for\`, \`while\` \`break\`, \`continue\` and \`return\`:

>>> @tf.function
... def f(x):
...   if tf.reduce_sum(x) > 0:
...     return x * x
...   else:
...     return -x // 2
>>> f(tf.constant(-2))
<tf.Tensor: ... numpy=1>

\`func\`'s closure may include \`tf.Tensor\` and \`tf.Variable\` objects:

>>> @tf.function
... def f():
...   return x ** 2 + y
>>> x = tf.constant([-2, -3])
>>> y = tf.Variable([3, -2])
>>> f()
<tf.Tensor: ... numpy=array([7, 7], ...)>

\`func\` may also use ops with side effects, such as \`tf.print\`, \`tf.Variable\`
and others:

>>> v = tf.Variable(1)
>>> @tf.function
... def f(x):
...   for i in tf.range(x):
...     v.assign_add(i)
>>> f(3)
>>> v
<tf.Variable ... numpy=4>

Important: Any Python side-effects (appending to a list, printing with
\`print\`, etc) will only happen once, when \`func\` is traced. To have
side-effects executed into your \`tf.function\` they need to be written
as TF ops:

>>> l = []
>>> @tf.function
... def f(x):
...   for i in x:
...     l.append(i + 1)    # Caution! Will only happen once when tracing
>>> f(tf.constant([1, 2, 3]))
>>> l
[<tf.Tensor ...>]

Instead, use TensorFlow collections like \`tf.TensorArray\`:

>>> @tf.function
... def f(x):
...   ta = tf.TensorArray(dtype=tf.int32, size=0, dynamic_size=True)
...   for i in range(len(x)):
...     ta = ta.write(i, x[i] + 1)
...   return ta.stack()
>>> f(tf.constant([1, 2, 3]))
<tf.Tensor: ..., numpy=array([2, 3, 4], ...)>

## \`tf.function\` creates polymorphic callables

Internally, \`tf.types.experimental.GenericFunction\` may contain multiple
\`tf.types.experimental.ConcreteFunction\`s, each specialized to arguments with
different data types or shapes, since TensorFlow can perform more
optimizations on graphs of specific shapes, dtypes and values of constant
arguments. \`tf.function\` treats any pure Python values as opaque objects (best
thought of as compile-time constants), and builds a separate \`tf.Graph\` for
each set of Python arguments that it encounters.
For more information, see the
[tf.function guide](https://www.tensorflow.org/guide/function#rules_of_tracing)

Executing a \`GenericFunction\` will select and execute the appropriate
\`ConcreteFunction\` based on the argument types and values.

To obtain an individual \`ConcreteFunction\`, use the
\`GenericFunction.get_concrete_function\` method. It can be called with the
same arguments as \`func\` and returns a
\`tf.types.experimental.ConcreteFunction\`. \`ConcreteFunction\`s are backed by a
single \`tf.Graph\`:

>>> @tf.function
... def f(x):
...   return x + 1
>>> isinstance(f.get_concrete_function(1).graph, tf.Graph)
True

\`ConcreteFunction\`s can be executed just like \`GenericFunction\`s, but their
input is resticted to the types to which they're specialized.

## Retracing

\`ConcreteFunctions\` are built (traced) on the fly, as the \`GenericFunction\` is
called with new TensorFlow types or shapes, or with new Python values as
arguments. When \`GenericFunction\` builds a new trace, it is said that \`func\`
is retraced. Retracing is a frequent performance concern for \`tf.function\` as
it can be considerably slower than executing a graph that's already been
traced. It is ideal to minimize the amount of retracing in your code.

Caution: Passing python scalars or lists as arguments to \`tf.function\` will
usually retrace. To avoid this, pass numeric arguments as Tensors whenever
possible:

>>> @tf.function
... def f(x):
...   return tf.abs(x)
>>> f1 = f.get_concrete_function(1)
>>> f2 = f.get_concrete_function(2)  # Slow - compiles new graph
>>> f1 is f2
False
>>> f1 = f.get_concrete_function(tf.constant(1))
>>> f2 = f.get_concrete_function(tf.constant(2))  # Fast - reuses f1
>>> f1 is f2
True

Python numerical arguments should only be used when they take few distinct
values, such as hyperparameters like the number of layers in a neural network.

## Input signatures

For Tensor arguments, \`GenericFunction\`creates a new \`ConcreteFunction\` for
every unique set of input shapes and datatypes. The example below creates two
separate \`ConcreteFunction\`s, each specialized to a different shape:

>>> @tf.function
... def f(x):
...   return x + 1
>>> vector = tf.constant([1.0, 1.0])
>>> matrix = tf.constant([[3.0]])
>>> f.get_concrete_function(vector) is f.get_concrete_function(matrix)
False

An "input signature" can be optionally provided to \`tf.function\` to control
this process. The input signature specifies the shape and type of each
Tensor argument to the function using a \`tf.TensorSpec\` object. More general
shapes can be used. This ensures only one \`ConcreteFunction\` is created, and
restricts the \`GenericFunction\` to the specified shapes and types. It is
an effective way to limit retracing when Tensors have dynamic shapes.

>>> @tf.function(
...     input_signature=[tf.TensorSpec(shape=None, dtype=tf.float32)])
... def f(x):
...   return x + 1
>>> vector = tf.constant([1.0, 1.0])
>>> matrix = tf.constant([[3.0]])
>>> f.get_concrete_function(vector) is f.get_concrete_function(matrix)
True

## Variables may only be created once

\`tf.function\` only allows creating new \`tf.Variable\` objects when it is called
for the first time:

>>> class MyModule(tf.Module):
...   def __init__(self):
...     self.v = None
...
...   @tf.function
...   def __call__(self, x):
...     if self.v is None:
...       self.v = tf.Variable(tf.ones_like(x))
...     return self.v * x

In general, it is recommended to create \`tf.Variable\`s outside of
\`tf.function\`.
In simple cases, persisting state across \`tf.function\` boundaries may be
implemented using a pure functional style in which state is represented by
\`tf.Tensor\`s passed as arguments and returned as return values.

Contrast the two styles below:

>>> state = tf.Variable(1)
>>> @tf.function
... def f(x):
...   state.assign_add(x)
>>> f(tf.constant(2))  # Non-pure functional style
>>> state
<tf.Variable ... numpy=3>

>>> state = tf.constant(1)
>>> @tf.function
... def f(state, x):
...   state += x
...   return state
>>> state = f(state, tf.constant(2))  # Pure functional style
>>> state
<tf.Tensor: ... numpy=3>

## Python operations execute only once per trace

\`func\` may contain TensorFlow operations mixed with pure Python operations.
However, when the function is executed, only the TensorFlow operations will
run. The Python operations run only once, at trace time. If TensorFlow
operations depend on results from Pyhton operations, those results will be
frozen into the graph.

>>> @tf.function
... def f(a, b):
...   print('this runs at trace time; a is', a, 'and b is', b)
...   return b
>>> f(1, tf.constant(1))
this runs at trace time; a is 1 and b is Tensor("...", shape=(), dtype=int32)
<tf.Tensor: shape=(), dtype=int32, numpy=1>

>>> f(1, tf.constant(2))
<tf.Tensor: shape=(), dtype=int32, numpy=2>

>>> f(2, tf.constant(1))
this runs at trace time; a is 2 and b is Tensor("...", shape=(), dtype=int32)
<tf.Tensor: shape=(), dtype=int32, numpy=1>

>>> f(2, tf.constant(2))
<tf.Tensor: shape=(), dtype=int32, numpy=2>

## Using type annotations to improve performance

'experimental_follow_type_hints\` can be used along with type annotations to
reduce retracing by automatically casting any Python values to \`tf.Tensor\`
(something that is not done by default, unless you use input signatures).

>>> @tf.function(experimental_follow_type_hints=True)
... def f_with_hints(x: tf.Tensor):
...   print('Tracing')
...   return x
>>> @tf.function(experimental_follow_type_hints=False)
... def f_no_hints(x: tf.Tensor):
...   print('Tracing')
...   return x
>>> f_no_hints(1)
Tracing
<tf.Tensor: shape=(), dtype=int32, numpy=1>
>>> f_no_hints(2)
Tracing
<tf.Tensor: shape=(), dtype=int32, numpy=2>
>>> f_with_hints(1)
Tracing
<tf.Tensor: shape=(), dtype=int32, numpy=1>
>>> f_with_hints(2)
<tf.Tensor: shape=(), dtype=int32, numpy=2>

Args:
  func: the function to be compiled. If \`func\` is None, \`tf.function\` returns
    a decorator that can be invoked with a single argument - \`func\`. In other
    words, \`tf.function(input_signature=...)(func)\` is equivalent to
    \`tf.function(func, input_signature=...)\`. The former can be used as
    decorator.
  input_signature: A possibly nested sequence of \`tf.TensorSpec\` objects
    specifying the shapes and dtypes of the Tensors that will be supplied to
    this function. If \`None\`, a separate function is instantiated for each
    inferred input signature.  If input_signature is specified, every input to
    \`func\` must be a \`Tensor\`, and \`func\` cannot accept \`**kwargs\`.
  autograph: Whether autograph should be applied on \`func\` before tracing a
    graph. Data-dependent Python control flow statements require
    \`autograph=True\`. For more information, see the
    [tf.function and AutoGraph guide](
    https://www.tensorflow.org/guide/function#autograph_transformations).
  jit_compile: If \`True\`, compiles the function using
    [XLA](https://tensorflow.org/xla). XLA performs compiler optimizations,
    such as fusion, and attempts to emit more efficient code. This may
    drastically improve the performance. If set to \`True\`,
    the whole function needs to be compilable by XLA, or an
    \`errors.InvalidArgumentError\` is thrown.
    If \`None\` (default), compiles the function with XLA when running on TPU
    and goes through the regular function execution path when running on
    other devices.
    If \`False\`, executes the function without XLA compilation.  Set this value
    to \`False\` when directly running a multi-device function on TPUs (e.g. two
    TPU cores, one TPU core and its host CPU).
    Not all functions are compilable, see a list of
    [sharp corners](https://tensorflow.org/xla/known_issues).
  reduce_retracing: When True, \`tf.function\` attempts to reduce the
    amount of retracing, for example by using more generic shapes. This
    can be controlled for user objects by customizing their associated
    \`tf.types.experimental.TraceType\`.
  experimental_implements: If provided, contains a name of a "known" function
    this implements. For example "mycompany.my_recurrent_cell".
    This is stored as an attribute in inference function,
    which can then be detected when processing serialized function.
    See [standardizing composite ops](https://github.com/tensorflow/community/blob/master/rfcs/20190610-standardizing-composite_ops.md)  # pylint: disable=line-too-long
    for details.  For an example of utilizing this attribute see this
    [example](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/compiler/mlir/lite/transforms/prepare_composite_functions_tf.cc)
    The code above automatically detects and substitutes function that
    implements "embedded_matmul" and allows TFLite to substitute its own
    implementations. For instance, a tensorflow user can use this
     attribute to mark that their function also implements
    \`embedded_matmul\` (perhaps more efficiently!)
    by specifying it using this parameter:
    \`@tf.function(experimental_implements="embedded_matmul")\`
    This can either be specified as just the string name of the function or
    a NameAttrList corresponding to a list of key-value attributes associated
    with the function name. The name of the function will be in the 'name'
    field of the NameAttrList. To define a formal TF op for this function
    implements, try the experimental [composite TF](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/compiler/mlir/tfr)
    project.
  experimental_autograph_options: Optional tuple of
    \`tf.autograph.experimental.Feature\` values.
  experimental_relax_shapes: Deprecated. Use \`reduce_retracing\`
    instead.
  experimental_compile: Deprecated alias to 'jit_compile'.
  experimental_follow_type_hints: When True, the function may use type
    annotations from \`func\` to optimize the tracing performance. For example,
    arguments annotated with \`tf.Tensor\` will automatically be converted
    to a Tensor.

Returns:
   If \`func\` is not None, returns a \`tf.types.experimental.GenericFunction\`.
   If \`func\` is None, returns a decorator that, when invoked with a single
   \`func\` argument, returns a \`tf.types.experimental.GenericFunction\`.

Raises:
   \`ValueError\` when attempting to use \`jit_compile=True\`, but XLA support is
   not available.`},{name:"gather",path:"./tf/gather.md",desc:"Gather slices from params axis `axis` according to indices. (deprecated arguments",type:"Functions",docs:`Gather slices from params axis \`axis\` according to indices. (deprecated arguments)

Deprecated: SOME ARGUMENTS ARE DEPRECATED: \`(validate_indices)\`. They will be removed in a future version.
Instructions for updating:
The \`validate_indices\` argument has no effect. Indices are always validated on CPU and never validated on GPU.

Gather slices from \`params\` axis \`axis\` according to \`indices\`.  \`indices\`
must be an integer tensor of any dimension (often 1-D).

\`Tensor.__getitem__\` works for scalars, \`tf.newaxis\`, and
[python slices](https://numpy.org/doc/stable/reference/arrays.indexing.html#basic-slicing-and-indexing)

\`tf.gather\` extends indexing to handle tensors of indices.

In the simplest case it's identical to scalar indexing:

>>> params = tf.constant(['p0', 'p1', 'p2', 'p3', 'p4', 'p5'])
>>> params[3].numpy()
b'p3'
>>> tf.gather(params, 3).numpy()
b'p3'

The most common case is to pass a single axis tensor of indices (this
can't be expressed as a python slice because the indices are not sequential):

>>> indices = [2, 0, 2, 5]
>>> tf.gather(params, indices).numpy()
array([b'p2', b'p0', b'p2', b'p5'], dtype=object)

<div style="width:70%; margin:auto; margin-bottom:10px; margin-top:20px;">
<img style="width:100%" src="https://www.tensorflow.org/images/Gather.png"
alt>
</div>

The indices can have any shape. When the \`params\` has 1 axis, the
output shape is equal to the input shape:

>>> tf.gather(params, [[2, 0], [2, 5]]).numpy()
array([[b'p2', b'p0'],
       [b'p2', b'p5']], dtype=object)

The \`params\` may also have any shape. \`gather\` can select slices
across any axis depending on the \`axis\` argument (which defaults to 0).
Below it is used to gather first rows, then columns from a matrix:

>>> params = tf.constant([[0, 1.0, 2.0],
...                       [10.0, 11.0, 12.0],
...                       [20.0, 21.0, 22.0],
...                       [30.0, 31.0, 32.0]])
>>> tf.gather(params, indices=[3,1]).numpy()
array([[30., 31., 32.],
       [10., 11., 12.]], dtype=float32)
>>> tf.gather(params, indices=[2,1], axis=1).numpy()
array([[ 2.,  1.],
       [12., 11.],
       [22., 21.],
       [32., 31.]], dtype=float32)

More generally: The output shape has the same shape as the input, with the
indexed-axis replaced by the shape of the indices.

>>> def result_shape(p_shape, i_shape, axis=0):
...   return p_shape[:axis] + i_shape + p_shape[axis+1:]
>>>
>>> result_shape([1, 2, 3], [], axis=1)
[1, 3]
>>> result_shape([1, 2, 3], [7], axis=1)
[1, 7, 3]
>>> result_shape([1, 2, 3], [7, 5], axis=1)
[1, 7, 5, 3]

Here are some examples:

>>> params.shape.as_list()
[4, 3]
>>> indices = tf.constant([[0, 2]])
>>> tf.gather(params, indices=indices, axis=0).shape.as_list()
[1, 2, 3]
>>> tf.gather(params, indices=indices, axis=1).shape.as_list()
[4, 1, 2]

>>> params = tf.random.normal(shape=(5, 6, 7, 8))
>>> indices = tf.random.uniform(shape=(10, 11), maxval=7, dtype=tf.int32)
>>> result = tf.gather(params, indices, axis=2)
>>> result.shape.as_list()
[5, 6, 10, 11, 8]

This is because each index takes a slice from \`params\`, and
places it at the corresponding location in the output. For the above example

>>> # For any location in indices
>>> a, b = 0, 1
>>> tf.reduce_all(
...     # the corresponding slice of the result
...     result[:, :, a, b, :] ==
...     # is equal to the slice of \`params\` along \`axis\` at the index.
...     params[:, :, indices[a, b], :]
... ).numpy()
True

### Batching:

The \`batch_dims\` argument lets you gather different items from each element
of a batch.

Using \`batch_dims=1\` is equivalent to having an outer loop over the first
axis of \`params\` and \`indices\`:

>>> params = tf.constant([
...     [0, 0, 1, 0, 2],
...     [3, 0, 0, 0, 4],
...     [0, 5, 0, 6, 0]])
>>> indices = tf.constant([
...     [2, 4],
...     [0, 4],
...     [1, 3]])

>>> tf.gather(params, indices, axis=1, batch_dims=1).numpy()
array([[1, 2],
       [3, 4],
       [5, 6]], dtype=int32)

This is equivalent to:

>>> def manually_batched_gather(params, indices, axis):
...   batch_dims=1
...   result = []
...   for p,i in zip(params, indices):
...     r = tf.gather(p, i, axis=axis-batch_dims)
...     result.append(r)
...   return tf.stack(result)
>>> manually_batched_gather(params, indices, axis=1).numpy()
array([[1, 2],
       [3, 4],
       [5, 6]], dtype=int32)

Higher values of \`batch_dims\` are equivalent to multiple nested loops over
the outer axes of \`params\` and \`indices\`. So the overall shape function is

>>> def batched_result_shape(p_shape, i_shape, axis=0, batch_dims=0):
...   return p_shape[:axis] + i_shape[batch_dims:] + p_shape[axis+1:]
>>>
>>> batched_result_shape(
...     p_shape=params.shape.as_list(),
...     i_shape=indices.shape.as_list(),
...     axis=1,
...     batch_dims=1)
[3, 2]

>>> tf.gather(params, indices, axis=1, batch_dims=1).shape.as_list()
[3, 2]

This comes up naturally if you need to use the indices of an operation like
\`tf.argsort\`, or \`tf.math.top_k\` where the last dimension of the indices
indexes into the last dimension of input, at the corresponding location.
In this case you can use \`tf.gather(values, indices, batch_dims=-1)\`.

See also:

* \`tf.Tensor.__getitem__\`: The direct tensor index operation (\`t[]\`), handles
  scalars and python-slices \`tensor[..., 7, 1:-1]\`
* \`tf.scatter\`: A collection of operations similar to \`__setitem__\`
  (\`t[i] = x\`)
* \`tf.gather_nd\`: An operation similar to \`tf.gather\` but gathers across
  multiple axis at once (it can gather elements of a matrix instead of rows
  or columns)
* \`tf.boolean_mask\`, \`tf.where\`: Binary indexing.
* \`tf.slice\` and \`tf.strided_slice\`: For lower level access to the
  implementation of \`__getitem__\`'s python-slice handling (\`t[1:-1:2]\`)

Args:
  params: The \`Tensor\` from which to gather values. Must be at least rank
    \`axis + 1\`.
  indices: The index \`Tensor\`.  Must be one of the following types: \`int32\`,
    \`int64\`. The values must be in range \`[0, params.shape[axis])\`.
  validate_indices: Deprecated, does nothing. Indices are always validated on
    CPU, never validated on GPU.

    Caution: On CPU, if an out of bound index is found, an error is raised.
    On GPU, if an out of bound index is found, a 0 is stored in the
    corresponding output value.
  axis: A \`Tensor\`. Must be one of the following types: \`int32\`, \`int64\`. The
    \`axis\` in \`params\` to gather \`indices\` from. Must be greater than or equal
    to \`batch_dims\`.  Defaults to the first non-batch dimension. Supports
    negative indexes.
  batch_dims: An \`integer\`.  The number of batch dimensions.  Must be less
    than or equal to \`rank(indices)\`.
  name: A name for the operation (optional).

Returns:
  A \`Tensor\`. Has the same type as \`params\`.`},{name:"gather_nd",path:"./tf/gather_nd.md",desc:"Gather slices from `params` into a Tensor with shape specified by `indices`.",type:"Functions",docs:`Gather slices from \`params\` into a Tensor with shape specified by \`indices\`.

  \`indices\` is a \`Tensor\` of indices into \`params\`. The index vectors are
  arranged along the last axis of \`indices\`.

  This is similar to \`tf.gather\`, in which \`indices\` defines slices into the
  first dimension of \`params\`. In \`tf.gather_nd\`, \`indices\` defines slices into the
  first \`N\` dimensions of \`params\`, where \`N = indices.shape[-1]\`.

  Caution: On CPU, if an out of bound index is found, an error is returned.
  On GPU, if an out of bound index is found, a 0 is stored in the
  corresponding output value.

  ## Gathering scalars

  In the simplest case the vectors in \`indices\` index the full rank of \`params\`:

  >>> tf.gather_nd(
  ...     indices=[[0, 0],
  ...              [1, 1]],
  ...     params = [['a', 'b'],
  ...               ['c', 'd']]).numpy()
  array([b'a', b'd'], dtype=object)

  In this case the result has 1-axis fewer than \`indices\`, and each index vector
  is replaced by the scalar indexed from \`params\`.

  In this case the shape relationship is:

  \`\`\`
  index_depth = indices.shape[-1]
  assert index_depth == params.shape.rank
  result_shape = indices.shape[:-1]
  \`\`\`

  If \`indices\` has a rank of \`K\`, it is helpful to think \`indices\` as a
  (K-1)-dimensional tensor of indices into \`params\`.

  ## Gathering slices

  If the index vectors do not index the full rank of \`params\` then each location
  in the result contains a slice of params. This example collects rows from a
  matrix:

  >>> tf.gather_nd(
  ...     indices = [[1],
  ...                [0]],
  ...     params = [['a', 'b', 'c'],
  ...               ['d', 'e', 'f']]).numpy()
  array([[b'd', b'e', b'f'],
         [b'a', b'b', b'c']], dtype=object)

  Here \`indices\` contains \`[2]\` index vectors, each with a length of \`1\`.
  The index vectors each refer to rows of the \`params\` matrix. Each
  row has a shape of \`[3]\` so the output shape is \`[2, 3]\`.

  In this case, the relationship between the shapes is:

  \`\`\`
  index_depth = indices.shape[-1]
  outer_shape = indices.shape[:-1]
  assert index_depth <= params.shape.rank
  inner_shape = params.shape[index_depth:]
  output_shape = outer_shape + inner_shape
  \`\`\`

  It is helpful to think of the results in this case as tensors-of-tensors.
  The shape of the outer tensor is set by the leading dimensions of \`indices\`.
  While the shape of the inner tensors is the shape of a single slice.

  ## Batches

  Additionally both \`params\` and \`indices\` can have \`M\` leading batch
  dimensions that exactly match. In this case \`batch_dims\` must be set to \`M\`.

  For example, to collect one row from each of a batch of matrices you could
  set the leading elements of the index vectors to be their location in the
  batch:

  >>> tf.gather_nd(
  ...     indices = [[0, 1],
  ...                [1, 0],
  ...                [2, 4],
  ...                [3, 2],
  ...                [4, 1]],
  ...     params=tf.zeros([5, 7, 3])).shape.as_list()
  [5, 3]

  The \`batch_dims\` argument lets you omit those leading location dimensions
  from the index:

  >>> tf.gather_nd(
  ...     batch_dims=1,
  ...     indices = [[1],
  ...                [0],
  ...                [4],
  ...                [2],
  ...                [1]],
  ...     params=tf.zeros([5, 7, 3])).shape.as_list()
  [5, 3]

  This is equivalent to caling a separate \`gather_nd\` for each location in the
  batch dimensions.


  >>> params=tf.zeros([5, 7, 3])
  >>> indices=tf.zeros([5, 1])
  >>> batch_dims = 1
  >>>
  >>> index_depth = indices.shape[-1]
  >>> batch_shape = indices.shape[:batch_dims]
  >>> assert params.shape[:batch_dims] == batch_shape
  >>> outer_shape = indices.shape[batch_dims:-1]
  >>> assert index_depth <= params.shape.rank
  >>> inner_shape = params.shape[batch_dims + index_depth:]
  >>> output_shape = batch_shape + outer_shape + inner_shape
  >>> output_shape.as_list()
  [5, 3]

  ### More examples

  Indexing into a 3-tensor:

  >>> tf.gather_nd(
  ...     indices = [[1]],
  ...     params = [[['a0', 'b0'], ['c0', 'd0']],
  ...               [['a1', 'b1'], ['c1', 'd1']]]).numpy()
  array([[[b'a1', b'b1'],
          [b'c1', b'd1']]], dtype=object)



  >>> tf.gather_nd(
  ...     indices = [[0, 1], [1, 0]],
  ...     params = [[['a0', 'b0'], ['c0', 'd0']],
  ...               [['a1', 'b1'], ['c1', 'd1']]]).numpy()
  array([[b'c0', b'd0'],
         [b'a1', b'b1']], dtype=object)


  >>> tf.gather_nd(
  ...     indices = [[0, 0, 1], [1, 0, 1]],
  ...     params = [[['a0', 'b0'], ['c0', 'd0']],
  ...               [['a1', 'b1'], ['c1', 'd1']]]).numpy()
  array([b'b0', b'b1'], dtype=object)

  The examples below are for the case when only indices have leading extra
  dimensions. If both 'params' and 'indices' have leading batch dimensions, use
  the 'batch_dims' parameter to run gather_nd in batch mode.

  Batched indexing into a matrix:

  >>> tf.gather_nd(
  ...     indices = [[[0, 0]], [[0, 1]]],
  ...     params = [['a', 'b'], ['c', 'd']]).numpy()
  array([[b'a'],
         [b'b']], dtype=object)



  Batched slice indexing into a matrix:

  >>> tf.gather_nd(
  ...     indices = [[[1]], [[0]]],
  ...     params = [['a', 'b'], ['c', 'd']]).numpy()
  array([[[b'c', b'd']],
         [[b'a', b'b']]], dtype=object)


  Batched indexing into a 3-tensor:

  >>> tf.gather_nd(
  ...     indices = [[[1]], [[0]]],
  ...     params = [[['a0', 'b0'], ['c0', 'd0']],
  ...               [['a1', 'b1'], ['c1', 'd1']]]).numpy()
  array([[[[b'a1', b'b1'],
           [b'c1', b'd1']]],
         [[[b'a0', b'b0'],
           [b'c0', b'd0']]]], dtype=object)


  >>> tf.gather_nd(
  ...     indices = [[[0, 1], [1, 0]], [[0, 0], [1, 1]]],
  ...     params = [[['a0', 'b0'], ['c0', 'd0']],
  ...               [['a1', 'b1'], ['c1', 'd1']]]).numpy()
  array([[[b'c0', b'd0'],
          [b'a1', b'b1']],
         [[b'a0', b'b0'],
          [b'c1', b'd1']]], dtype=object)

  >>> tf.gather_nd(
  ...     indices = [[[0, 0, 1], [1, 0, 1]], [[0, 1, 1], [1, 1, 0]]],
  ...     params = [[['a0', 'b0'], ['c0', 'd0']],
  ...               [['a1', 'b1'], ['c1', 'd1']]]).numpy()
  array([[b'b0', b'b1'],
         [b'd0', b'c1']], dtype=object)


  Examples with batched 'params' and 'indices':

  >>> tf.gather_nd(
  ...     batch_dims = 1,
  ...     indices = [[1],
  ...                [0]],
  ...     params = [[['a0', 'b0'],
  ...                ['c0', 'd0']],
  ...               [['a1', 'b1'],
  ...                ['c1', 'd1']]]).numpy()
  array([[b'c0', b'd0'],
         [b'a1', b'b1']], dtype=object)


  >>> tf.gather_nd(
  ...     batch_dims = 1,
  ...     indices = [[[1]], [[0]]],
  ...     params = [[['a0', 'b0'], ['c0', 'd0']],
  ...               [['a1', 'b1'], ['c1', 'd1']]]).numpy()
  array([[[b'c0', b'd0']],
         [[b'a1', b'b1']]], dtype=object)

  >>> tf.gather_nd(
  ...     batch_dims = 1,
  ...     indices = [[[1, 0]], [[0, 1]]],
  ...     params = [[['a0', 'b0'], ['c0', 'd0']],
  ...               [['a1', 'b1'], ['c1', 'd1']]]).numpy()
  array([[b'c0'],
         [b'b1']], dtype=object)


  See also \`tf.gather\`.

  Args:
    params: A \`Tensor\`. The tensor from which to gather values.
    indices: A \`Tensor\`. Must be one of the following types: \`int32\`, \`int64\`.
      Index tensor.
    name: A name for the operation (optional).
    batch_dims: An integer or a scalar 'Tensor'. The number of batch dimensions.

  Returns:
    A \`Tensor\`. Has the same type as \`params\`.
  `},{name:"get_current_name_scope",path:"./tf/get_current_name_scope.md",desc:'Returns current full name scope specified by <a href="./tf/name_scope.md"><code>tf.name_scope(...',type:"Functions",docs:`Returns current full name scope specified by \`tf.name_scope(...)\`s.

  For example,
  \`\`\`python
  with tf.name_scope("outer"):
    tf.get_current_name_scope()  # "outer"

    with tf.name_scope("inner"):
      tf.get_current_name_scope()  # "outer/inner"
  \`\`\`

  In other words, \`tf.get_current_name_scope()\` returns the op name prefix that
  will be prepended to, if an op is created at that place.

  Note that \`@tf.function\` resets the name scope stack as shown below.

  \`\`\`
  with tf.name_scope("outer"):

    @tf.function
    def foo(x):
      with tf.name_scope("inner"):
        return tf.add(x * x)  # Op name is "inner/Add", not "outer/inner/Add"
  \`\`\`
  `},{name:"get_logger",path:"./tf/get_logger.md",desc:"Return TF logger instance.",type:"Functions",docs:"Return TF logger instance."},{name:"get_static_value",path:"./tf/get_static_value.md",desc:"Returns the constant value of the given tensor, if efficiently calculable.",type:"Functions",docs:`Returns the constant value of the given tensor, if efficiently calculable.

  This function attempts to partially evaluate the given tensor, and
  returns its value as a numpy ndarray if this succeeds.

  Example usage:

  >>> a = tf.constant(10)
  >>> tf.get_static_value(a)
  10
  >>> b = tf.constant(20)
  >>> tf.get_static_value(tf.add(a, b))
  30

  >>> # \`tf.Variable\` is not supported.
  >>> c = tf.Variable(30)
  >>> print(tf.get_static_value(c))
  None

  Using \`partial\` option is most relevant when calling \`get_static_value\` inside
  a \`tf.function\`. Setting it to \`True\` will return the results but for the
  values that cannot be evaluated will be \`None\`. For example:

  \`\`\`python
  class Foo(object):
    def __init__(self):
      self.a = tf.Variable(1)
      self.b = tf.constant(2)

    @tf.function
    def bar(self, partial):
      packed = tf.raw_ops.Pack(values=[self.a, self.b])
      static_val = tf.get_static_value(packed, partial=partial)
      tf.print(static_val)

  f = Foo()
  f.bar(partial=True)  # \`array([None, array(2, dtype=int32)], dtype=object)\`
  f.bar(partial=False)  # \`None\`
  \`\`\`

  Compatibility(V1): If \`constant_value(tensor)\` returns a non-\`None\` result, it
  will no longer be possible to feed a different value for \`tensor\`. This allows
  the result of this function to influence the graph that is constructed, and
  permits static shape optimizations.

  Args:
    tensor: The Tensor to be evaluated.
    partial: If True, the returned numpy array is allowed to have partially
      evaluated values. Values that can't be evaluated will be None.

  Returns:
    A numpy ndarray containing the constant value of the given \`tensor\`,
    or None if it cannot be calculated.

  Raises:
    TypeError: if tensor is not an ops.Tensor.
  `},{name:"grad_pass_through",path:"./tf/grad_pass_through.md",desc:"Creates a grad-pass-through op with the forward behavior provided in f.",type:"Functions",docs:`Creates a grad-pass-through op with the forward behavior provided in f.

  Use this function to wrap any op, maintaining its behavior in the forward
  pass, but replacing the original op in the backward graph with an identity.
  For example:

  \`\`\`python
  x = tf.Variable(1.0, name="x")
  z = tf.Variable(3.0, name="z")

  with tf.GradientTape() as tape:
    # y will evaluate to 9.0
    y = tf.grad_pass_through(x.assign)(z**2)
  # grads will evaluate to 6.0
  grads = tape.gradient(y, z)
  \`\`\`

  Another example is a 'differentiable' moving average approximation, where
  gradients are allowed to flow into the last value fed to the moving average,
  but the moving average is still used for the forward pass:

  \`\`\`python
  x = ... # Some scalar value
  # A moving average object, we don't need to know how this is implemented
  moving_average = MovingAverage()
  with backprop.GradientTape() as tape:
    # mavg_x will evaluate to the current running average value
    mavg_x = tf.grad_pass_through(moving_average)(x)
  grads = tape.gradient(mavg_x, x) # grads will evaluate to 1.0
  \`\`\`

  Args:
    f: function \`f(*x)\` that returns a \`Tensor\` or nested structure of \`Tensor\`
      outputs.

  Returns:
    A function \`h(x)\` which returns the same values as \`f(x)\` and whose
    gradients are the same as those of an identity function.
  `},{name:"gradients",path:"./tf/gradients.md",desc:"Constructs symbolic derivatives of sum of `ys` w.r.t. x in `xs`.",type:"Functions",docs:"Constructs symbolic derivatives of sum of `ys` w.r.t. x in `xs`.\n\n  `tf.gradients` is only valid in a graph context. In particular,\n  it is valid in the context of a `tf.function` wrapper, where code\n  is executing as a graph.\n\n  `ys` and `xs` are each a `Tensor` or a list of tensors.  `grad_ys`\n  is a list of `Tensor`, holding the gradients received by the\n  `ys`. The list must be the same length as `ys`.\n\n  `gradients()` adds ops to the graph to output the derivatives of `ys` with\n  respect to `xs`.  It returns a list of `Tensor` of length `len(xs)` where\n  each tensor is the `sum(dy/dx)` for y in `ys` and for x in `xs`.\n\n  `grad_ys` is a list of tensors of the same length as `ys` that holds\n  the initial gradients for each y in `ys`.  When `grad_ys` is None,\n  we fill in a tensor of '1's of the shape of y for each y in `ys`.  A\n  user can provide their own initial `grad_ys` to compute the\n  derivatives using a different initial gradient for each y (e.g., if\n  one wanted to weight the gradient differently for each value in\n  each y).\n\n  `stop_gradients` is a `Tensor` or a list of tensors to be considered constant\n  with respect to all `xs`. These tensors will not be backpropagated through,\n  as though they had been explicitly disconnected using `stop_gradient`.  Among\n  other things, this allows computation of partial derivatives as opposed to\n  total derivatives. For example:\n\n  >>> @tf.function\n  ... def example():\n  ...   a = tf.constant(0.)\n  ...   b = 2 * a\n  ...   return tf.gradients(a + b, [a, b], stop_gradients=[a, b])\n  >>> example()\n  [<tf.Tensor: shape=(), dtype=float32, numpy=1.0>,\n  <tf.Tensor: shape=(), dtype=float32, numpy=1.0>]\n\n  Here the partial derivatives `g` evaluate to `[1.0, 1.0]`, compared to the\n  total derivatives `tf.gradients(a + b, [a, b])`, which take into account the\n  influence of `a` on `b` and evaluate to `[3.0, 1.0]`.  Note that the above is\n  equivalent to:\n\n  >>> @tf.function\n  ... def example():\n  ...   a = tf.stop_gradient(tf.constant(0.))\n  ...   b = tf.stop_gradient(2 * a)\n  ...   return tf.gradients(a + b, [a, b])\n  >>> example()\n  [<tf.Tensor: shape=(), dtype=float32, numpy=1.0>,\n  <tf.Tensor: shape=(), dtype=float32, numpy=1.0>]\n\n  `stop_gradients` provides a way of stopping gradient after the graph has\n  already been constructed, as compared to `tf.stop_gradient` which is used\n  during graph construction.  When the two approaches are combined,\n  backpropagation stops at both `tf.stop_gradient` nodes and nodes in\n  `stop_gradients`, whichever is encountered first.\n\n  All integer tensors are considered constant with respect to all `xs`, as if\n  they were included in `stop_gradients`.\n\n  `unconnected_gradients` determines the value returned for each x in xs if it\n  is unconnected in the graph to ys. By default this is None to safeguard\n  against errors. Mathematically these gradients are zero which can be requested\n  using the `'zero'` option. `tf.UnconnectedGradients` provides the\n  following options and behaviors:\n\n  >>> @tf.function\n  ... def example(use_zero):\n  ...   a = tf.ones([1, 2])\n  ...   b = tf.ones([3, 1])\n  ...   if use_zero:\n  ...     return tf.gradients([b], [a], unconnected_gradients='zero')\n  ...   else:\n  ...     return tf.gradients([b], [a], unconnected_gradients='none')\n  >>> example(False)\n  [None]\n  >>> example(True)\n  [<tf.Tensor: shape=(1, 2), dtype=float32, numpy=array([[0., 0.]], ...)>]\n\n  Let us take one practical example which comes during the back propogation\n  phase. This function is used to evaluate the derivatives of the cost function\n  with respect to Weights `Ws` and Biases `bs`. Below sample implementation\n  provides the exaplantion of what it is actually used for :\n\n  >>> @tf.function\n  ... def example():\n  ...   Ws = tf.constant(0.)\n  ...   bs = 2 * Ws\n  ...   cost = Ws + bs  # This is just an example. Please ignore the formulas.\n  ...   g = tf.gradients(cost, [Ws, bs])\n  ...   dCost_dW, dCost_db = g\n  ...   return dCost_dW, dCost_db\n  >>> example()\n  (<tf.Tensor: shape=(), dtype=float32, numpy=3.0>,\n  <tf.Tensor: shape=(), dtype=float32, numpy=1.0>)\n\n  Args:\n    ys: A `Tensor` or list of tensors to be differentiated.\n    xs: A `Tensor` or list of tensors to be used for differentiation.\n    grad_ys: Optional. A `Tensor` or list of tensors the same size as\n      `ys` and holding the gradients computed for each y in `ys`.\n    name: Optional name to use for grouping all the gradient ops together.\n      defaults to 'gradients'.\n    gate_gradients: If True, add a tuple around the gradients returned\n      for an operations.  This avoids some race conditions.\n    aggregation_method: Specifies the method used to combine gradient terms.\n      Accepted values are constants defined in the class `AggregationMethod`.\n    stop_gradients: Optional. A `Tensor` or list of tensors not to differentiate\n      through.\n    unconnected_gradients: Optional. Specifies the gradient value returned when\n      the given input tensors are unconnected. Accepted values are constants\n      defined in the class `tf.UnconnectedGradients` and the default value is\n      `none`.\n\n  Returns:\n    A list of `Tensor` of length `len(xs)` where each tensor is the `sum(dy/dx)`\n    for y in `ys` and for x in `xs`.\n\n  Raises:\n    LookupError: if one of the operations between `x` and `y` does not\n      have a registered gradient function.\n    ValueError: if the arguments are invalid.\n    RuntimeError: if called in Eager mode.\n\n  "},{name:"greater",path:"./tf/math/greater.md",desc:"Returns the truth value of (x > y",type:"Functions",docs:"Returns the truth value of (x > y) element-wise.\n\n  *NOTE*: `math.greater` supports broadcasting. More about broadcasting\n  [here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)\n\n  Example:\n\n  ```python\n  x = tf.constant([5, 4, 6])\n  y = tf.constant([5, 2, 5])\n  tf.math.greater(x, y) ==> [False, True, True]\n\n  x = tf.constant([5, 4, 6])\n  y = tf.constant([5])\n  tf.math.greater(x, y) ==> [False, False, True]\n  ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.\n    y: A `Tensor`. Must have the same type as `x`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` of type `bool`.\n  "},{name:"greater_equal",path:"./tf/math/greater_equal.md",desc:"Returns the truth value of (x >= y",type:"Functions",docs:"Returns the truth value of (x >= y) element-wise.\n\n  *NOTE*: `math.greater_equal` supports broadcasting. More about broadcasting\n  [here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)\n\n  Example:\n\n  ```python\n  x = tf.constant([5, 4, 6, 7])\n  y = tf.constant([5, 2, 5, 10])\n  tf.math.greater_equal(x, y) ==> [True, True, True, False]\n\n  x = tf.constant([5, 4, 6, 7])\n  y = tf.constant([5])\n  tf.math.greater_equal(x, y) ==> [True, False, True, True]\n  ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.\n    y: A `Tensor`. Must have the same type as `x`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` of type `bool`.\n  "},{name:"group",path:"./tf/group.md",desc:"Create an op that groups multiple operations.",type:"Functions",docs:`Create an op that groups multiple operations.

  When this op finishes, all ops in \`inputs\` have finished. This op has no
  output.

  Note: *In TensorFlow 2 with eager and/or Autograph, you should not require
  this method, as ops execute in the expected order thanks to automatic control
  dependencies.* Only use \`tf.group\` when working with v1
  \`tf.Graph\` code.

  When operating in a v1-style graph context, ops are not executed in the same
  order as specified in the code; TensorFlow will attempt to execute ops in
  parallel or in an order convenient to the result it is computing.  \`tf.group\`
  allows you to request that one or more results finish before execution
  continues.

  \`tf.group\` creates a single op (of type \`NoOp\`), and then adds appropriate
  control dependencies.  Thus, \`c = tf.group(a, b)\` will compute the same graph
  as this:

      with tf.control_dependencies([a, b]):
          c = tf.no_op()

  See also \`tf.tuple\` and
  \`tf.control_dependencies\`.

  Args:
    *inputs: Zero or more tensors to group.
    name: A name for this operation (optional).

  Returns:
    An Operation that executes all its inputs.

  Raises:
    ValueError: If an unknown keyword argument is provided.
  `},{name:"guarantee_const",path:"./tf/guarantee_const.md",desc:"Promise to the TF runtime that the input tensor is a constant. (deprecated",type:"Functions",docs:`Promise to the TF runtime that the input tensor is a constant. (deprecated)

Deprecated: THIS FUNCTION IS DEPRECATED. It will be removed in a future version.
Instructions for updating:
Not for public use.

The runtime is then free to make optimizations based on this.

Returns the input tensor without modification.

Args:
  input: A \`Tensor\`.
  name: A name for this operation.

Returns:
  A \`Tensor\`. Has the same dtype as \`input\`.`},{name:"hessians",path:"./tf/hessians.md",desc:"Constructs the Hessian of sum of `ys` with respect to `x` in `xs`.",type:"Functions",docs:"Constructs the Hessian of sum of `ys` with respect to `x` in `xs`.\n\n  `hessians()` adds ops to the graph to output the Hessian matrix of `ys`\n  with respect to `xs`.  It returns a list of `Tensor` of length `len(xs)`\n  where each tensor is the Hessian of `sum(ys)`.\n\n  The Hessian is a matrix of second-order partial derivatives of a scalar\n  tensor (see https://en.wikipedia.org/wiki/Hessian_matrix for more details).\n\n  Args:\n    ys: A `Tensor` or list of tensors to be differentiated.\n    xs: A `Tensor` or list of tensors to be used for differentiation.\n    gate_gradients: See `gradients()` documentation for details.\n    aggregation_method: See `gradients()` documentation for details.\n    name: Optional name to use for grouping all the gradient ops together.\n      defaults to 'hessians'.\n\n  Returns:\n    A list of Hessian matrices of `sum(ys)` for each `x` in `xs`.\n\n  Raises:\n    LookupError: if one of the operations between `xs` and `ys` does not\n      have a registered gradient function.\n  "},{name:"histogram_fixed_width",path:"./tf/histogram_fixed_width.md",desc:"Return histogram of values.",type:"Functions",docs:`Return histogram of values.

  Given the tensor \`values\`, this operation returns a rank 1 histogram counting
  the number of entries in \`values\` that fell into every bin.  The bins are
  equal width and determined by the arguments \`value_range\` and \`nbins\`.

  Args:
    values:  Numeric \`Tensor\`.
    value_range:  Shape [2] \`Tensor\` of same \`dtype\` as \`values\`.
      values <= value_range[0] will be mapped to hist[0],
      values >= value_range[1] will be mapped to hist[-1].
    nbins:  Scalar \`int32 Tensor\`.  Number of histogram bins.
    dtype:  dtype for returned histogram.
    name:  A name for this operation (defaults to 'histogram_fixed_width').

  Returns:
    A 1-D \`Tensor\` holding histogram of values.

  Raises:
    TypeError: If any unsupported dtype is provided.
    tf.errors.InvalidArgumentError: If value_range does not
        satisfy value_range[0] < value_range[1].

  Examples:

  >>> # Bins will be:  (-inf, 1), [1, 2), [2, 3), [3, 4), [4, inf)
  ...
  >>> nbins = 5
  >>> value_range = [0.0, 5.0]
  >>> new_values = [-1.0, 0.0, 1.5, 2.0, 5.0, 15]
  >>> hist = tf.histogram_fixed_width(new_values, value_range, nbins=5)
  >>> hist.numpy()
  array([2, 1, 1, 0, 2], dtype=int32)
  `},{name:"histogram_fixed_width_bins",path:"./tf/histogram_fixed_width_bins.md",desc:"Bins the given values for use in a histogram.",type:"Functions",docs:`Bins the given values for use in a histogram.

  Given the tensor \`values\`, this operation returns a rank 1 \`Tensor\`
  representing the indices of a histogram into which each element
  of \`values\` would be binned. The bins are equal width and
  determined by the arguments \`value_range\` and \`nbins\`.

  Args:
    values:  Numeric \`Tensor\`.
    value_range:  Shape [2] \`Tensor\` of same \`dtype\` as \`values\`.
      values <= value_range[0] will be mapped to hist[0],
      values >= value_range[1] will be mapped to hist[-1].
    nbins:  Scalar \`int32 Tensor\`.  Number of histogram bins.
    dtype:  dtype for returned histogram.
    name:  A name for this operation (defaults to 'histogram_fixed_width').

  Returns:
    A \`Tensor\` holding the indices of the binned values whose shape matches
    \`values\`.

  Raises:
    TypeError: If any unsupported dtype is provided.
    tf.errors.InvalidArgumentError: If value_range does not
        satisfy value_range[0] < value_range[1].

  Examples:

  >>> # Bins will be:  (-inf, 1), [1, 2), [2, 3), [3, 4), [4, inf)
  ...
  >>> nbins = 5
  >>> value_range = [0.0, 5.0]
  >>> new_values = [-1.0, 0.0, 1.5, 2.0, 5.0, 15]
  >>> indices = tf.histogram_fixed_width_bins(new_values, value_range, nbins=5)
  >>> indices.numpy()
  array([0, 0, 1, 2, 4, 4], dtype=int32)
  `},{name:"identity",path:"./tf/identity.md",desc:"Return a Tensor with the same shape and contents as input.",type:"Functions",docs:`Return a Tensor with the same shape and contents as input.

  The return value is not the same Tensor as the original, but contains the same
  values.  This operation is fast when used on the same device.

  For example:

  >>> a = tf.constant([0.78])
  >>> a_identity = tf.identity(a)
  >>> a.numpy()
  array([0.78], dtype=float32)
  >>> a_identity.numpy()
  array([0.78], dtype=float32)

  Calling \`tf.identity\` on a variable will make a Tensor that represents the
  value of that variable at the time it is called. This is equivalent to calling
  \`<variable>.read_value()\`.

  >>> a = tf.Variable(5)
  >>> a_identity = tf.identity(a)
  >>> a.assign_add(1)
  <tf.Variable ... shape=() dtype=int32, numpy=6>
  >>> a.numpy()
  6
  >>> a_identity.numpy()
  5

  Args:
    input: A \`Tensor\`, a \`Variable\`, a \`CompositeTensor\` or anything that can be
    converted to a tensor using \`tf.convert_to_tensor\`.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\` or CompositeTensor. Has the same type and contents as \`input\`.
  `},{name:"identity_n",path:"./tf/identity_n.md",desc:"Returns a list of tensors with the same shapes and contents as the input",type:"Functions",docs:`Returns a list of tensors with the same shapes and contents as the input

  tensors.

  This op can be used to override the gradient for complicated functions. For
  example, suppose y = f(x) and we wish to apply a custom function g for backprop
  such that dx = g(dy). In Python,

  \`\`\`python
  with tf.get_default_graph().gradient_override_map(
      {'IdentityN': 'OverrideGradientWithG'}):
    y, _ = identity_n([f(x), x])

  @tf.RegisterGradient('OverrideGradientWithG')
  def ApplyG(op, dy, _):
    return [None, g(dy)]  # Do not backprop to f(x).
  \`\`\`

  Args:
    input: A list of \`Tensor\` objects.
    name: A name for the operation (optional).

  Returns:
    A list of \`Tensor\` objects. Has the same type as \`input\`.
  `},{name:"import_graph_def",path:"./tf/graph_util/import_graph_def.md",desc:"Imports the graph from `graph_def` into the current default `Graph`. (deprecated arguments",type:"Functions",docs:'Imports the graph from `graph_def` into the current default `Graph`. (deprecated arguments)\n\nDeprecated: SOME ARGUMENTS ARE DEPRECATED: `(op_dict)`. They will be removed in a future version.\nInstructions for updating:\nPlease file an issue at https://github.com/tensorflow/tensorflow/issues if you depend on this feature.\n\nThis function provides a way to import a serialized TensorFlow\n[`GraphDef`](https://www.tensorflow.org/code/tensorflow/core/framework/graph.proto)\nprotocol buffer, and extract individual objects in the `GraphDef` as\n`tf.Tensor` and `tf.Operation` objects. Once extracted,\nthese objects are placed into the current default `Graph`. See\n`tf.Graph.as_graph_def` for a way to create a `GraphDef`\nproto.\n\nArgs:\n  graph_def: A `GraphDef` proto containing operations to be imported into\n    the default graph.\n  input_map: A dictionary mapping input names (as strings) in `graph_def`\n    to `Tensor` objects. The values of the named input tensors in the\n    imported graph will be re-mapped to the respective `Tensor` values.\n  return_elements: A list of strings containing operation names in\n    `graph_def` that will be returned as `Operation` objects; and/or\n    tensor names in `graph_def` that will be returned as `Tensor` objects.\n  name: (Optional.) A prefix that will be prepended to the names in\n    `graph_def`. Note that this does not apply to imported function names.\n    Defaults to `"import"`.\n  op_dict: (Optional.) Deprecated, do not use.\n  producer_op_list: (Optional.) An `OpList` proto with the (possibly stripped)\n    list of `OpDef`s used by the producer of the graph. If provided,\n    unrecognized attrs for ops in `graph_def` that have their default value\n    according to `producer_op_list` will be removed. This will allow some more\n    `GraphDef`s produced by later binaries to be accepted by earlier binaries.\n\nReturns:\n  A list of `Operation` and/or `Tensor` objects from the imported graph,\n  corresponding to the names in `return_elements`,\n  and None if `returns_elements` is None.\n\nRaises:\n  TypeError: If `graph_def` is not a `GraphDef` proto,\n    `input_map` is not a dictionary mapping strings to `Tensor` objects,\n    or `return_elements` is not a list of strings.\n  ValueError: If `input_map`, or `return_elements` contains names that\n    do not appear in `graph_def`, or `graph_def` is not well-formed (e.g.\n    it refers to an unknown tensor).'},{name:"init_scope",path:"./tf/init_scope.md",desc:"A context manager that lifts ops out of control-flow scopes and function-building graphs.",type:"Functions",docs:`A context manager that lifts ops out of control-flow scopes and function-building graphs.

  There is often a need to lift variable initialization ops out of control-flow
  scopes, function-building graphs, and gradient tapes. Entering an
  \`init_scope\` is a mechanism for satisfying these desiderata. In particular,
  entering an \`init_scope\` has three effects:

    (1) All control dependencies are cleared the moment the scope is entered;
        this is equivalent to entering the context manager returned from
        \`control_dependencies(None)\`, which has the side-effect of exiting
        control-flow scopes like \`tf.cond\` and \`tf.while_loop\`.

    (2) All operations that are created while the scope is active are lifted
        into the lowest context on the \`context_stack\` that is not building a
        graph function. Here, a context is defined as either a graph or an eager
        context. Every context switch, i.e., every installation of a graph as
        the default graph and every switch into eager mode, is logged in a
        thread-local stack called \`context_switches\`; the log entry for a
        context switch is popped from the stack when the context is exited.
        Entering an \`init_scope\` is equivalent to crawling up
        \`context_switches\`, finding the first context that is not building a
        graph function, and entering it. A caveat is that if graph mode is
        enabled but the default graph stack is empty, then entering an
        \`init_scope\` will simply install a fresh graph as the default one.

    (3) The gradient tape is paused while the scope is active.

  When eager execution is enabled, code inside an init_scope block runs with
  eager execution enabled even when tracing a \`tf.function\`. For example:

  \`\`\`python
  tf.compat.v1.enable_eager_execution()

  @tf.function
  def func():
    # A function constructs TensorFlow graphs,
    # it does not execute eagerly.
    assert not tf.executing_eagerly()
    with tf.init_scope():
      # Initialization runs with eager execution enabled
      assert tf.executing_eagerly()
  \`\`\`

  Raises:
    RuntimeError: if graph state is incompatible with this initialization.
  `},{name:"inside_function",path:"./tf/inside_function.md",desc:'Indicates whether the caller code is executing inside a <a href="./tf/function.md"><code>tf.function</code></a>.',type:"Functions",docs:`Indicates whether the caller code is executing inside a \`tf.function\`.

  Returns:
    Boolean, True if the caller code is executing inside a \`tf.function\`
    rather than eagerly.

  Example:

  >>> tf.inside_function()
  False
  >>> @tf.function
  ... def f():
  ...   print(tf.inside_function())
  >>> f()
  True
  `},{name:"is_tensor",path:"./tf/is_tensor.md",desc:"Checks whether `x` is a TF-native type that can be passed to many TF ops.",type:"Functions",docs:"Checks whether `x` is a TF-native type that can be passed to many TF ops.\n\n  Use `is_tensor` to differentiate types that can ingested by TensorFlow ops\n  without any conversion (e.g., `tf.Tensor`, `tf.SparseTensor`, and\n  `tf.RaggedTensor`) from types that need to be converted into tensors before\n  they are ingested (e.g., numpy `ndarray` and Python scalars).\n\n  For example, in the following code block:\n\n  ```python\n  if not tf.is_tensor(t):\n    t = tf.convert_to_tensor(t)\n  return t.shape, t.dtype\n  ```\n\n  we check to make sure that `t` is a tensor (and convert it if not) before\n  accessing its `shape` and `dtype`.  (But note that not all TensorFlow native\n  types have shapes or dtypes; `tf.data.Dataset` is an example of a TensorFlow\n  native type that has neither shape nor dtype.)\n\n  Args:\n    x: A python object to check.\n\n  Returns:\n    `True` if `x` is a TensorFlow-native type.\n  "},{name:"less",path:"./tf/math/less.md",desc:"Returns the truth value of (x < y",type:"Functions",docs:"Returns the truth value of (x < y) element-wise.\n\n  *NOTE*: `math.less` supports broadcasting. More about broadcasting\n  [here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)\n\n  Example:\n\n  ```python\n  x = tf.constant([5, 4, 6])\n  y = tf.constant([5])\n  tf.math.less(x, y) ==> [False, True, False]\n\n  x = tf.constant([5, 4, 6])\n  y = tf.constant([5, 6, 7])\n  tf.math.less(x, y) ==> [False, True, True]\n  ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.\n    y: A `Tensor`. Must have the same type as `x`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` of type `bool`.\n  "},{name:"less_equal",path:"./tf/math/less_equal.md",desc:"Returns the truth value of (x <= y",type:"Functions",docs:"Returns the truth value of (x <= y) element-wise.\n\n  *NOTE*: `math.less_equal` supports broadcasting. More about broadcasting\n  [here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)\n\n  Example:\n\n  ```python\n  x = tf.constant([5, 4, 6])\n  y = tf.constant([5])\n  tf.math.less_equal(x, y) ==> [True, True, False]\n\n  x = tf.constant([5, 4, 6])\n  y = tf.constant([5, 6, 6])\n  tf.math.less_equal(x, y) ==> [True, True, True]\n  ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.\n    y: A `Tensor`. Must have the same type as `x`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` of type `bool`.\n  "},{name:"linspace",path:"./tf/linspace.md",desc:"Generates evenly-spaced values in an interval along a given axis.",type:"Functions",docs:'Generates evenly-spaced values in an interval along a given axis.\n\n  A sequence of `num` evenly-spaced values are generated beginning at `start`\n  along a given `axis`.\n  If `num > 1`, the values in the sequence increase by\n  `(stop - start) / (num - 1)`, so that the last one is exactly `stop`.\n  If `num <= 0`, `ValueError` is raised.\n\n  Matches\n  [np.linspace](https://docs.scipy.org/doc/numpy/reference/generated/numpy.linspace.html)\'s\n  behaviour\n  except when `num == 0`.\n\n  For example:\n\n  ```\n  tf.linspace(10.0, 12.0, 3, name="linspace") => [ 10.0  11.0  12.0]\n  ```\n\n  `Start` and `stop` can be tensors of arbitrary size:\n\n  >>> tf.linspace([0., 5.], [10., 40.], 5, axis=0)\n  <tf.Tensor: shape=(5, 2), dtype=float32, numpy=\n  array([[ 0.  ,  5.  ],\n         [ 2.5 , 13.75],\n         [ 5.  , 22.5 ],\n         [ 7.5 , 31.25],\n         [10.  , 40.  ]], dtype=float32)>\n\n  `Axis` is where the values will be generated (the dimension in the\n  returned tensor which corresponds to the axis will be equal to `num`)\n\n  >>> tf.linspace([0., 5.], [10., 40.], 5, axis=-1)\n  <tf.Tensor: shape=(2, 5), dtype=float32, numpy=\n  array([[ 0.  ,  2.5 ,  5.  ,  7.5 , 10.  ],\n         [ 5.  , 13.75, 22.5 , 31.25, 40.  ]], dtype=float32)>\n\n\n\n  Args:\n    start: A `Tensor`. Must be one of the following types: `bfloat16`,\n      `float32`, `float64`. N-D tensor. First entry in the range.\n    stop: A `Tensor`. Must have the same type and shape as `start`. N-D tensor.\n      Last entry in the range.\n    num: A `Tensor`. Must be one of the following types: `int32`, `int64`. 0-D\n      tensor. Number of values to generate.\n    name: A name for the operation (optional).\n    axis: Axis along which the operation is performed (used only when N-D\n      tensors are provided).\n\n  Returns:\n    A `Tensor`. Has the same type as `start`.\n  '},{name:"load_library",path:"./tf/load_library.md",desc:"Loads a TensorFlow plugin.",type:"Functions",docs:`Loads a TensorFlow plugin.

  "library_location" can be a path to a specific shared object, or a folder.
  If it is a folder, all shared objects that are named "libtfkernel*" will be
  loaded. When the library is loaded, kernels registered in the library via the
  \`REGISTER_*\` macros are made available in the TensorFlow process.

  Args:
    library_location: Path to the plugin or the folder of plugins.
      Relative or absolute filesystem path to a dynamic library file or folder.

  Returns:
    None

  Raises:
    OSError: When the file to be loaded is not found.
    RuntimeError: when unable to load the library.
  `},{name:"load_op_library",path:"./tf/load_op_library.md",desc:"Loads a TensorFlow plugin, containing custom ops and kernels.",type:"Functions",docs:`Loads a TensorFlow plugin, containing custom ops and kernels.

  Pass "library_filename" to a platform-specific mechanism for dynamically
  loading a library. The rules for determining the exact location of the
  library are platform-specific and are not documented here. When the
  library is loaded, ops and kernels registered in the library via the
  \`REGISTER_*\` macros are made available in the TensorFlow process. Note
  that ops with the same name as an existing op are rejected and not
  registered with the process.

  Args:
    library_filename: Path to the plugin.
      Relative or absolute filesystem path to a dynamic library file.

  Returns:
    A python module containing the Python wrappers for Ops defined in
    the plugin.

  Raises:
    RuntimeError: when unable to load the library or get the python wrappers.
  `},{name:"logical_and",path:"./tf/math/logical_and.md",desc:"Returns the truth value of x AND y element-wise.",type:"Functions",docs:`Returns the truth value of x AND y element-wise.

  Logical AND function.

  Requires that \`x\` and \`y\` have the same shape or have
  [broadcast-compatible](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)
  shapes. For example, \`x\` and \`y\` can be:

    - Two single elements of type \`bool\`.
    - One \`tf.Tensor\` of type \`bool\` and one single \`bool\`, where the result will
      be calculated by applying logical AND with the single element to each
      element in the larger Tensor.
    - Two \`tf.Tensor\` objects of type \`bool\` of the same shape. In this case,
      the result will be the element-wise logical AND of the two input tensors.

  You can also use the \`&\` operator instead.

  Usage:

    >>> a = tf.constant([True])
    >>> b = tf.constant([False])
    >>> tf.math.logical_and(a, b)
    <tf.Tensor: shape=(1,), dtype=bool, numpy=array([False])>
    >>> a & b
    <tf.Tensor: shape=(1,), dtype=bool, numpy=array([False])>

    >>> c = tf.constant([True])
    >>> x = tf.constant([False, True, True, False])
    >>> tf.math.logical_and(c, x)
    <tf.Tensor: shape=(4,), dtype=bool, numpy=array([False,  True,  True, False])>
    >>> c & x
    <tf.Tensor: shape=(4,), dtype=bool, numpy=array([False,  True,  True, False])>

    >>> y = tf.constant([False, False, True, True])
    >>> z = tf.constant([False, True, False, True])
    >>> tf.math.logical_and(y, z)
    <tf.Tensor: shape=(4,), dtype=bool, numpy=array([False, False, False, True])>
    >>> y & z
    <tf.Tensor: shape=(4,), dtype=bool, numpy=array([False, False, False, True])>

    This op also supports broadcasting

    >>> tf.logical_and([[True, False]], [[True], [False]])
    <tf.Tensor: shape=(2, 2), dtype=bool, numpy=
      array([[ True, False],
             [False, False]])>

  The reduction version of this elementwise operation is \`tf.math.reduce_all\`.

  Args:
      x: A \`tf.Tensor\` of type bool.
      y: A \`tf.Tensor\` of type bool.
      name: A name for the operation (optional).

  Returns:
    A \`tf.Tensor\` of type bool with the shape that \`x\` and \`y\` broadcast to.

  Args:
    x: A \`Tensor\` of type \`bool\`.
    y: A \`Tensor\` of type \`bool\`.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\` of type \`bool\`.
  `},{name:"logical_not",path:"./tf/math/logical_not.md",desc:"Returns the truth value of `NOT x` element-wise.",type:"Functions",docs:"Returns the truth value of `NOT x` element-wise.\n\n  Example:\n\n  >>> tf.math.logical_not(tf.constant([True, False]))\n  <tf.Tensor: shape=(2,), dtype=bool, numpy=array([False,  True])>\n\n  Args:\n    x: A `Tensor` of type `bool`. A `Tensor` of type `bool`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` of type `bool`.\n  "},{name:"logical_or",path:"./tf/math/logical_or.md",desc:"Returns the truth value of x OR y element-wise.",type:"Functions",docs:`Returns the truth value of x OR y element-wise.

  Logical OR function.

  Requires that \`x\` and \`y\` have the same shape or have
  [broadcast-compatible](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)
  shapes. For example, \`x\` and \`y\` can be:

  - Two single elements of type \`bool\`.
  - One \`tf.Tensor\` of type \`bool\` and one single \`bool\`, where the result will
    be calculated by applying logical OR with the single element to each
    element in the larger Tensor.
  - Two \`tf.Tensor\` objects of type \`bool\` of the same shape. In this case,
    the result will be the element-wise logical OR of the two input tensors.

  You can also use the \`|\` operator instead.

  Usage:

    >>> a = tf.constant([True])
    >>> b = tf.constant([False])
    >>> tf.math.logical_or(a, b)
    <tf.Tensor: shape=(1,), dtype=bool, numpy=array([ True])>
    >>> a | b
    <tf.Tensor: shape=(1,), dtype=bool, numpy=array([ True])>

    >>> c = tf.constant([False])
    >>> x = tf.constant([False, True, True, False])
    >>> tf.math.logical_or(c, x)
    <tf.Tensor: shape=(4,), dtype=bool, numpy=array([False, True,  True, False])>
    >>> c | x
    <tf.Tensor: shape=(4,), dtype=bool, numpy=array([False, True,  True, False])>

    >>> y = tf.constant([False, False, True, True])
    >>> z = tf.constant([False, True, False, True])
    >>> tf.math.logical_or(y, z)
    <tf.Tensor: shape=(4,), dtype=bool, numpy=array([False, True, True, True])>
    >>> y | z
    <tf.Tensor: shape=(4,), dtype=bool, numpy=array([False, True, True, True])>

    This op also supports broadcasting

    >>> tf.logical_or([[True, False]], [[True], [False]])
    <tf.Tensor: shape=(2, 2), dtype=bool, numpy=
    array([[ True,  True],
         [ True, False]])>

  The reduction version of this elementwise operation is \`tf.math.reduce_any\`.

  Args:
      x: A \`tf.Tensor\` of type bool.
      y: A \`tf.Tensor\` of type bool.
      name: A name for the operation (optional).

  Returns:
    A \`tf.Tensor\` of type bool with the shape that \`x\` and \`y\` broadcast to.

  Args:
    x: A \`Tensor\` of type \`bool\`.
    y: A \`Tensor\` of type \`bool\`.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\` of type \`bool\`.
  `},{name:"make_ndarray",path:"./tf/make_ndarray.md",desc:"Create a numpy ndarray from a tensor.",type:"Functions",docs:`Create a numpy ndarray from a tensor.

  Create a numpy ndarray with the same shape and data as the tensor.

  For example:

  \`\`\`python
  # Tensor a has shape (2,3)
  a = tf.constant([[1,2,3],[4,5,6]])
  proto_tensor = tf.make_tensor_proto(a)  # convert \`tensor a\` to a proto tensor
  tf.make_ndarray(proto_tensor) # output: array([[1, 2, 3],
  #                                              [4, 5, 6]], dtype=int32)
  # output has shape (2,3)
  \`\`\`

  Args:
    tensor: A TensorProto.

  Returns:
    A numpy array with the tensor contents.

  Raises:
    TypeError: if tensor has unsupported type.

  `},{name:"make_tensor_proto",path:"./tf/make_tensor_proto.md",desc:"Create a TensorProto.",type:"Functions",docs:`Create a TensorProto.

  In TensorFlow 2.0, representing tensors as protos should no longer be a
  common workflow. That said, this utility function is still useful for
  generating TF Serving request protos:

  \`\`\`python
    request = tensorflow_serving.apis.predict_pb2.PredictRequest()
    request.model_spec.name = "my_model"
    request.model_spec.signature_name = "serving_default"
    request.inputs["images"].CopyFrom(tf.make_tensor_proto(X_new))
  \`\`\`

  \`make_tensor_proto\` accepts "values" of a python scalar, a python list, a
  numpy ndarray, or a numpy scalar.

  If "values" is a python scalar or a python list, make_tensor_proto
  first convert it to numpy ndarray. If dtype is None, the
  conversion tries its best to infer the right numpy data
  type. Otherwise, the resulting numpy array has a compatible data
  type with the given dtype.

  In either case above, the numpy ndarray (either the caller provided
  or the auto-converted) must have the compatible type with dtype.

  \`make_tensor_proto\` then converts the numpy array to a tensor proto.

  If "shape" is None, the resulting tensor proto represents the numpy
  array precisely.

  Otherwise, "shape" specifies the tensor's shape and the numpy array
  can not have more elements than what "shape" specifies.

  Args:
    values:         Values to put in the TensorProto.
    dtype:          Optional tensor_pb2 DataType value.
    shape:          List of integers representing the dimensions of tensor.
    verify_shape:   Boolean that enables verification of a shape of values.
    allow_broadcast:  Boolean that enables allowing scalars and 1 length vector
        broadcasting. Cannot be true when verify_shape is true.

  Returns:
    A \`TensorProto\`. Depending on the type, it may contain data in the
    "tensor_content" attribute, which is not directly useful to Python programs.
    To access the values you should convert the proto back to a numpy ndarray
    with \`tf.make_ndarray(proto)\`.

    If \`values\` is a \`TensorProto\`, it is immediately returned; \`dtype\` and
    \`shape\` are ignored.

  Raises:
    TypeError:  if unsupported types are provided.
    ValueError: if arguments have inappropriate values or if verify_shape is
     True and shape of values is not equals to a shape from the argument.

  `},{name:"map_fn",path:"./tf/map_fn.md",desc:"Transforms `elems` by applying `fn` to each element unstacked on axis 0. (deprecated arguments",type:"Functions",docs:`Transforms \`elems\` by applying \`fn\` to each element unstacked on axis 0. (deprecated arguments)

Deprecated: SOME ARGUMENTS ARE DEPRECATED: \`(dtype)\`. They will be removed in a future version.
Instructions for updating:
Use fn_output_signature instead

See also \`tf.scan\`.

\`map_fn\` unstacks \`elems\` on axis 0 to obtain a sequence of elements;
calls \`fn\` to transform each element; and then stacks the transformed
values back together.

#### Mapping functions with single-Tensor inputs and outputs

If \`elems\` is a single tensor and \`fn\`'s signature is \`tf.Tensor->tf.Tensor\`,
then \`map_fn(fn, elems)\` is equivalent to
\`tf.stack([fn(elem) for elem in tf.unstack(elems)])\`.  E.g.:

>>> tf.map_fn(fn=lambda t: tf.range(t, t + 3), elems=tf.constant([3, 5, 2]))
<tf.Tensor: shape=(3, 3), dtype=int32, numpy=
  array([[3, 4, 5],
         [5, 6, 7],
         [2, 3, 4]], dtype=int32)>

\`map_fn(fn, elems).shape = [elems.shape[0]] + fn(elems[0]).shape\`.

#### Mapping functions with multi-arity inputs and outputs

\`map_fn\` also supports functions with multi-arity inputs and outputs:

* If \`elems\` is a tuple (or nested structure) of tensors, then those tensors
  must all have the same outer-dimension size (\`num_elems\`); and \`fn\` is
  used to transform each tuple (or structure) of corresponding slices from
  \`elems\`.  E.g., if \`elems\` is a tuple \`(t1, t2, t3)\`, then \`fn\` is used to
  transform each tuple of slices \`(t1[i], t2[i], t3[i])\`
  (where \`0 <= i < num_elems\`).

* If \`fn\` returns a tuple (or nested structure) of tensors, then the
  result is formed by stacking corresponding elements from those structures.

#### Specifying \`fn\`'s output signature

If \`fn\`'s input and output signatures are different, then the output
signature must be specified using \`fn_output_signature\`.  (The input and
output signatures are differ if their structures, dtypes, or tensor types do
not match).  E.g.:

>>> tf.map_fn(fn=tf.strings.length,  # input & output have different dtypes
...           elems=tf.constant(["hello", "moon"]),
...           fn_output_signature=tf.int32)
<tf.Tensor: shape=(2,), dtype=int32, numpy=array([5, 4], dtype=int32)>
>>> tf.map_fn(fn=tf.strings.join,  # input & output have different structures
...           elems=[tf.constant(['The', 'A']), tf.constant(['Dog', 'Cat'])],
...           fn_output_signature=tf.string)
<tf.Tensor: shape=(2,), dtype=string,
 numpy=array([b'TheDog', b'ACat'], dtype=object)>

\`fn_output_signature\` can be specified using any of the following:

* A \`tf.DType\` or \`tf.TensorSpec\` (to describe a \`tf.Tensor\`)
* A \`tf.RaggedTensorSpec\` (to describe a \`tf.RaggedTensor\`)
* A \`tf.SparseTensorSpec\` (to describe a \`tf.sparse.SparseTensor\`)
* A (possibly nested) tuple, list, or dict containing the above types.

#### RaggedTensors

\`map_fn\` supports \`tf.RaggedTensor\` inputs and outputs.  In particular:

* If \`elems\` is a \`RaggedTensor\`, then \`fn\` will be called with each
  row of that ragged tensor.
  * If \`elems\` has only one ragged dimension, then the values passed to
    \`fn\` will be \`tf.Tensor\`s.
  * If \`elems\` has multiple ragged dimensions, then the values passed to
    \`fn\` will be \`tf.RaggedTensor\`s with one fewer ragged dimension.

* If the result of \`map_fn\` should be a \`RaggedTensor\`, then use a
  \`tf.RaggedTensorSpec\` to specify \`fn_output_signature\`.
  * If \`fn\` returns \`tf.Tensor\`s with varying sizes, then use a
    \`tf.RaggedTensorSpec\` with \`ragged_rank=0\` to combine them into a
    single ragged tensor (which will have ragged_rank=1).
  * If \`fn\` returns \`tf.RaggedTensor\`s, then use a \`tf.RaggedTensorSpec\`
    with the same \`ragged_rank\`.

>>> # Example: RaggedTensor input
>>> rt = tf.ragged.constant([[1, 2, 3], [], [4, 5], [6]])
>>> tf.map_fn(tf.reduce_sum, rt, fn_output_signature=tf.int32)
<tf.Tensor: shape=(4,), dtype=int32, numpy=array([6, 0, 9, 6], dtype=int32)>

>>> # Example: RaggedTensor output
>>> elems = tf.constant([3, 5, 0, 2])
>>> tf.map_fn(tf.range, elems,
...           fn_output_signature=tf.RaggedTensorSpec(shape=[None],
...                                                   dtype=tf.int32))
<tf.RaggedTensor [[0, 1, 2], [0, 1, 2, 3, 4], [], [0, 1]]>

Note: \`map_fn\` should only be used if you need to map a function over the
*rows* of a \`RaggedTensor\`.  If you wish to map a function over the
individual values, then you should use:

* \`tf.ragged.map_flat_values(fn, rt)\`
  (if fn is expressible as TensorFlow ops)
* \`rt.with_flat_values(map_fn(fn, rt.flat_values))\`
  (otherwise)

E.g.:

>>> rt = tf.ragged.constant([[1, 2, 3], [], [4, 5], [6]])
>>> tf.ragged.map_flat_values(lambda x: x + 2, rt)
<tf.RaggedTensor [[3, 4, 5], [], [6, 7], [8]]>

#### SparseTensors

\`map_fn\` supports \`tf.sparse.SparseTensor\` inputs and outputs.  In particular:

* If \`elems\` is a \`SparseTensor\`, then \`fn\` will be called with each row
  of that sparse tensor. In particular, the value passed to \`fn\` will be a
  \`tf.sparse.SparseTensor\` with one fewer dimension than \`elems\`.

* If the result of \`map_fn\` should be a \`SparseTensor\`, then use a
  \`tf.SparseTensorSpec\` to specify \`fn_output_signature\`.  The individual
  \`SparseTensor\`s returned by \`fn\` will be stacked into a single
  \`SparseTensor\` with one more dimension.

>>> # Example: SparseTensor input
>>> st = tf.sparse.SparseTensor([[0, 0], [2, 0], [2, 1]], [2, 3, 4], [4, 4])
>>> tf.map_fn(tf.sparse.reduce_sum, st, fn_output_signature=tf.int32)
<tf.Tensor: shape=(4,), dtype=int32, numpy=array([2, 0, 7, 0], dtype=int32)>

>>> # Example: SparseTensor output
>>> tf.sparse.to_dense(
...     tf.map_fn(tf.sparse.eye, tf.constant([2, 3]),
...               fn_output_signature=tf.SparseTensorSpec(None, tf.float32)))
<tf.Tensor: shape=(2, 3, 3), dtype=float32, numpy=
  array([[[1., 0., 0.],
          [0., 1., 0.],
          [0., 0., 0.]],
         [[1., 0., 0.],
          [0., 1., 0.],
          [0., 0., 1.]]], dtype=float32)>

Note: \`map_fn\` should only be used if you need to map a function over the
*rows* of a \`SparseTensor\`.  If you wish to map a function over the nonzero
values, then you should use:

* If the function is expressible as TensorFlow ops, use:
  \`\`\`python
  tf.sparse.SparseTensor(st.indices, fn(st.values), st.dense_shape)
  \`\`\`
* Otherwise, use:
  \`\`\`python
  tf.sparse.SparseTensor(st.indices, tf.map_fn(fn, st.values),
                         st.dense_shape)
  \`\`\`

#### \`map_fn\` vs. vectorized operations

\`map_fn\` will apply the operations used by \`fn\` to each element of \`elems\`,
resulting in \`O(elems.shape[0])\` total operations.  This is somewhat
mitigated by the fact that \`map_fn\` can process elements in parallel.
However, a transform expressed using \`map_fn\` is still typically less
efficient than an equivalent transform expressed using vectorized operations.

\`map_fn\` should typically only be used if one of the following is true:

* It is difficult or expensive to express the desired transform with
  vectorized operations.
* \`fn\` creates large intermediate values, so an equivalent vectorized
  transform would take too much memory.
* Processing elements in parallel is more efficient than an equivalent
  vectorized transform.
* Efficiency of the transform is not critical, and using \`map_fn\` is
  more readable.

E.g., the example given above that maps \`fn=lambda t: tf.range(t, t + 3)\`
across \`elems\` could be rewritten more efficiently using vectorized ops:

>>> elems = tf.constant([3, 5, 2])
>>> tf.range(3) + tf.expand_dims(elems, 1)
<tf.Tensor: shape=(3, 3), dtype=int32, numpy=
  array([[3, 4, 5],
         [5, 6, 7],
         [2, 3, 4]], dtype=int32)>

In some cases, \`tf.vectorized_map\` can be used to automatically convert a
function to a vectorized equivalent.

#### Eager execution

When executing eagerly, \`map_fn\` does not execute in parallel even if
\`parallel_iterations\` is set to a value > 1. You can still get the
performance benefits of running a function in parallel by using the
\`tf.function\` decorator:

>>> fn=lambda t: tf.range(t, t + 3)
>>> @tf.function
... def func(elems):
...   return tf.map_fn(fn, elems, parallel_iterations=3)
>>> func(tf.constant([3, 5, 2]))
<tf.Tensor: shape=(3, 3), dtype=int32, numpy=
  array([[3, 4, 5],
         [5, 6, 7],
         [2, 3, 4]], dtype=int32)>


Note: if you use the \`tf.function\` decorator, any non-TensorFlow Python
code that you may have written in your function won't get executed. See
\`tf.function\` for more  details. The recommendation would be to debug without
\`tf.function\` but switch to it to get performance benefits of running \`map_fn\`
in parallel.

Args:
  fn: The callable to be performed.  It accepts one argument, which will have
    the same (possibly nested) structure as \`elems\`.  Its output must have the
    same structure as \`fn_output_signature\` if one is provided; otherwise it
    must have the same structure as \`elems\`.
  elems: A tensor or (possibly nested) sequence of tensors, each of which will
    be unstacked along their first dimension.  \`fn\` will be applied to the
    nested sequence of the resulting slices.  \`elems\` may include ragged and
    sparse tensors. \`elems\` must consist of at least one tensor.
  dtype: Deprecated: Equivalent to \`fn_output_signature\`.
  parallel_iterations: (optional) The number of iterations allowed to run in
    parallel. When graph building, the default value is 10. While executing
    eagerly, the default value is set to 1.
  back_prop: (optional) Deprecated: prefer using \`tf.stop_gradient\` instead.  False disables support for back propagation.
  swap_memory: (optional) True enables GPU-CPU memory swapping.
  infer_shape: (optional) False disables tests for consistent output shapes.
  name: (optional) Name prefix for the returned tensors.
  fn_output_signature: The output signature of \`fn\`. Must be specified if
    \`fn\`'s input and output signatures are different (i.e., if their
    structures, dtypes, or tensor types do not match).
    \`fn_output_signature\` can be specified using any of the following:

    * A \`tf.DType\` or \`tf.TensorSpec\` (to describe a \`tf.Tensor\`)
    * A \`tf.RaggedTensorSpec\` (to describe a \`tf.RaggedTensor\`)
    * A \`tf.SparseTensorSpec\` (to describe a \`tf.sparse.SparseTensor\`)
    * A (possibly nested) tuple, list, or dict containing the above types.

Returns:
  A tensor or (possibly nested) sequence of tensors.  Each tensor stacks the
  results of applying \`fn\` to tensors unstacked from \`elems\` along the first
  dimension, from first to last.  The result may include ragged and sparse
  tensors.

Raises:
  TypeError: if \`fn\` is not callable or the structure of the output of
    \`fn\` and \`fn_output_signature\` do not match.
  ValueError: if the lengths of the output of \`fn\` and \`fn_output_signature\`
    do not match, or if the \`elems\` does not contain any tensor.

Examples:

  >>> elems = np.array([1, 2, 3, 4, 5, 6])
  >>> tf.map_fn(lambda x: x * x, elems)
  <tf.Tensor: shape=(6,), dtype=int64, numpy=array([ 1,  4,  9, 16, 25, 36])>

  >>> elems = (np.array([1, 2, 3]), np.array([-1, 1, -1]))
  >>> tf.map_fn(lambda x: x[0] * x[1], elems, fn_output_signature=tf.int64)
  <tf.Tensor: shape=(3,), dtype=int64, numpy=array([-1,  2, -3])>

  >>> elems = np.array([1, 2, 3])
  >>> tf.map_fn(lambda x: (x, -x), elems,
  ...          fn_output_signature=(tf.int64, tf.int64))
  (<tf.Tensor: shape=(3,), dtype=int64, numpy=array([1, 2, 3])>,
   <tf.Tensor: shape=(3,), dtype=int64, numpy=array([-1, -2, -3])>)`},{name:"matmul",path:"./tf/linalg/matmul.md",desc:"Multiplies matrix `a` by matrix `b`, producing `a` * `b`.",type:"Functions",docs:"Multiplies matrix `a` by matrix `b`, producing `a` * `b`.\n\n  The inputs must, following any transpositions, be tensors of rank >= 2\n  where the inner 2 dimensions specify valid matrix multiplication dimensions,\n  and any further outer dimensions specify matching batch size.\n\n  Both matrices must be of the same type. The supported types are:\n  `bfloat16`, `float16`, `float32`, `float64`, `int32`, `int64`,\n  `complex64`, `complex128`.\n\n  Either matrix can be transposed or adjointed (conjugated and transposed) on\n  the fly by setting one of the corresponding flag to `True`. These are `False`\n  by default.\n\n  If one or both of the matrices contain a lot of zeros, a more efficient\n  multiplication algorithm can be used by setting the corresponding\n  `a_is_sparse` or `b_is_sparse` flag to `True`. These are `False` by default.\n  This optimization is only available for plain matrices (rank-2 tensors) with\n  datatypes `bfloat16` or `float32`.\n\n  A simple 2-D tensor matrix multiplication:\n\n  >>> a = tf.constant([1, 2, 3, 4, 5, 6], shape=[2, 3])\n  >>> a  # 2-D tensor\n  <tf.Tensor: shape=(2, 3), dtype=int32, numpy=\n  array([[1, 2, 3],\n         [4, 5, 6]], dtype=int32)>\n  >>> b = tf.constant([7, 8, 9, 10, 11, 12], shape=[3, 2])\n  >>> b  # 2-D tensor\n  <tf.Tensor: shape=(3, 2), dtype=int32, numpy=\n  array([[ 7,  8],\n         [ 9, 10],\n         [11, 12]], dtype=int32)>\n  >>> c = tf.matmul(a, b)\n  >>> c  # `a` * `b`\n  <tf.Tensor: shape=(2, 2), dtype=int32, numpy=\n  array([[ 58,  64],\n         [139, 154]], dtype=int32)>\n\n  A batch matrix multiplication with batch shape [2]:\n\n  >>> a = tf.constant(np.arange(1, 13, dtype=np.int32), shape=[2, 2, 3])\n  >>> a  # 3-D tensor\n  <tf.Tensor: shape=(2, 2, 3), dtype=int32, numpy=\n  array([[[ 1,  2,  3],\n          [ 4,  5,  6]],\n         [[ 7,  8,  9],\n          [10, 11, 12]]], dtype=int32)>\n  >>> b = tf.constant(np.arange(13, 25, dtype=np.int32), shape=[2, 3, 2])\n  >>> b  # 3-D tensor\n  <tf.Tensor: shape=(2, 3, 2), dtype=int32, numpy=\n  array([[[13, 14],\n          [15, 16],\n          [17, 18]],\n         [[19, 20],\n          [21, 22],\n          [23, 24]]], dtype=int32)>\n  >>> c = tf.matmul(a, b)\n  >>> c  # `a` * `b`\n  <tf.Tensor: shape=(2, 2, 2), dtype=int32, numpy=\n  array([[[ 94, 100],\n          [229, 244]],\n         [[508, 532],\n          [697, 730]]], dtype=int32)>\n\n  Since python >= 3.5 the @ operator is supported\n  (see [PEP 465](https://www.python.org/dev/peps/pep-0465/)). In TensorFlow,\n  it simply calls the `tf.matmul()` function, so the following lines are\n  equivalent:\n\n  >>> d = a @ b @ [[10], [11]]\n  >>> d = tf.matmul(tf.matmul(a, b), [[10], [11]])\n\n  Args:\n    a: `tf.Tensor` of type `float16`, `float32`, `float64`, `int32`,\n      `complex64`, `complex128` and rank > 1.\n    b: `tf.Tensor` with same type and rank as `a`.\n    transpose_a: If `True`, `a` is transposed before multiplication.\n    transpose_b: If `True`, `b` is transposed before multiplication.\n    adjoint_a: If `True`, `a` is conjugated and transposed before\n      multiplication.\n    adjoint_b: If `True`, `b` is conjugated and transposed before\n      multiplication.\n    a_is_sparse: If `True`, `a` is treated as a sparse matrix. Notice, this\n      **does not support `tf.sparse.SparseTensor`**, it just makes optimizations\n      that assume most values in `a` are zero.\n      See `tf.sparse.sparse_dense_matmul`\n      for some support for `tf.sparse.SparseTensor` multiplication.\n    b_is_sparse: If `True`, `b` is treated as a sparse matrix. Notice, this\n      **does not support `tf.sparse.SparseTensor`**, it just makes optimizations\n      that assume most values in `a` are zero.\n      See `tf.sparse.sparse_dense_matmul`\n      for some support for `tf.sparse.SparseTensor` multiplication.\n    output_type: The output datatype if needed. Defaults to None in which case\n      the output_type is the same as input type. Currently only works when input\n      tensors are type (u)int8 and output_type can be int32.\n    name: Name for the operation (optional).\n\n  Returns:\n    A `tf.Tensor` of the same type as `a` and `b` where each inner-most matrix\n    is the product of the corresponding matrices in `a` and `b`, e.g. if all\n    transpose or adjoint attributes are `False`:\n\n    `output[..., i, j] = sum_k (a[..., i, k] * b[..., k, j])`,\n    for all indices `i`, `j`.\n\n    Note: This is matrix product, not element-wise product.\n\n\n  Raises:\n    ValueError: If `transpose_a` and `adjoint_a`, or `transpose_b` and\n      `adjoint_b` are both set to `True`.\n    TypeError: If output_type is specified but the types of `a`, `b` and\n      `output_type` is not (u)int8, (u)int8 and int32.\n  "},{name:"matrix_square_root",path:"./tf/linalg/sqrtm.md",desc:"Computes the matrix square root of one or more square matrices:",type:"Functions",docs:`Computes the matrix square root of one or more square matrices:

  matmul(sqrtm(A), sqrtm(A)) = A

  The input matrix should be invertible. If the input matrix is real, it should
  have no eigenvalues which are real and negative (pairs of complex conjugate
  eigenvalues are allowed).

  The matrix square root is computed by first reducing the matrix to
  quasi-triangular form with the real Schur decomposition. The square root
  of the quasi-triangular matrix is then computed directly. Details of
  the algorithm can be found in: Nicholas J. Higham, "Computing real
  square roots of a real matrix", Linear Algebra Appl., 1987.

  The input is a tensor of shape \`[..., M, M]\` whose inner-most 2 dimensions
  form square matrices. The output is a tensor of the same shape as the input
  containing the matrix square root for all input submatrices \`[..., :, :]\`.

  Args:
    input: A \`Tensor\`. Must be one of the following types: \`float64\`, \`float32\`, \`half\`, \`complex64\`, \`complex128\`.
      Shape is \`[..., M, M]\`.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`input\`.
  `},{name:"maximum",path:"./tf/math/maximum.md",desc:"Returns the max of x and y (i.e. x > y ? x y",type:"Functions",docs:"Returns the max of x and y (i.e. x > y ? x : y) element-wise.\n\n  Example:\n\n  >>> x = tf.constant([0., 0., 0., 0.])\n  >>> y = tf.constant([-2., 0., 2., 5.])\n  >>> tf.math.maximum(x, y)\n  <tf.Tensor: shape=(4,), dtype=float32, numpy=array([0., 0., 2., 5.], dtype=float32)>\n\n  Note that `maximum` supports [broadcast semantics](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html) for `x` and `y`.\n\n  >>> x = tf.constant([-5., 0., 0., 0.])\n  >>> y = tf.constant([-3.])\n  >>> tf.math.maximum(x, y)\n  <tf.Tensor: shape=(4,), dtype=float32, numpy=array([-3., 0., 0., 0.], dtype=float32)>\n\n  The reduction version of this elementwise operation is `tf.math.reduce_max`\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int8`, `uint8`, `int16`, `uint16`, `int32`, `uint32`, `int64`, `uint64`.\n    y: A `Tensor`. Must have the same type as `x`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  "},{name:"meshgrid",path:"./tf/meshgrid.md",desc:"Broadcasts parameters for evaluation on an N-D grid.",type:"Functions",docs:`Broadcasts parameters for evaluation on an N-D grid.

  Given N one-dimensional coordinate arrays \`*args\`, returns a list \`outputs\`
  of N-D coordinate arrays for evaluating expressions on an N-D grid.

  Notes:

  \`meshgrid\` supports cartesian ('xy') and matrix ('ij') indexing conventions.
  When the \`indexing\` argument is set to 'xy' (the default), the broadcasting
  instructions for the first two dimensions are swapped.

  Examples:

  Calling \`X, Y = meshgrid(x, y)\` with the tensors

  \`\`\`python
  x = [1, 2, 3]
  y = [4, 5, 6]
  X, Y = tf.meshgrid(x, y)
  # X = [[1, 2, 3],
  #      [1, 2, 3],
  #      [1, 2, 3]]
  # Y = [[4, 4, 4],
  #      [5, 5, 5],
  #      [6, 6, 6]]
  \`\`\`

  Args:
    *args: \`Tensor\`s with rank 1.
    **kwargs:
      - indexing: Either 'xy' or 'ij' (optional, default: 'xy').
      - name: A name for the operation (optional).

  Returns:
    outputs: A list of N \`Tensor\`s with rank N.

  Raises:
    TypeError: When no keyword arguments (kwargs) are passed.
    ValueError: When indexing keyword argument is not one of \`xy\` or \`ij\`.
  `},{name:"minimum",path:"./tf/math/minimum.md",desc:"Returns the min of x and y (i.e. x < y ? x y",type:"Functions",docs:"Returns the min of x and y (i.e. x < y ? x : y) element-wise.\n\n  Both inputs are number-type tensors (except complex).  `minimum` expects that\n  both tensors have the same `dtype`.\n\n  Examples:\n\n  >>> x = tf.constant([0., 0., 0., 0.])\n  >>> y = tf.constant([-5., -2., 0., 3.])\n  >>> tf.math.minimum(x, y)\n  <tf.Tensor: shape=(4,), dtype=float32, numpy=array([-5., -2., 0., 0.], dtype=float32)>\n\n  Note that `minimum` supports [broadcast semantics](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html) for `x` and `y`.\n\n  >>> x = tf.constant([-5., 0., 0., 0.])\n  >>> y = tf.constant([-3.])\n  >>> tf.math.minimum(x, y)\n  <tf.Tensor: shape=(4,), dtype=float32, numpy=array([-5., -3., -3., -3.], dtype=float32)>\n\n  The reduction version of this elementwise operation is `tf.math.reduce_min`\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int8`, `uint8`, `int16`, `uint16`, `int32`, `uint32`, `int64`, `uint64`.\n    y: A `Tensor`. Must have the same type as `x`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  "},{name:"multiply",path:"./tf/math/multiply.md",desc:"Returns an element-wise x * y.",type:"Functions",docs:"Returns an element-wise x * y.\n\n  For example:\n\n  >>> x = tf.constant(([1, 2, 3, 4]))\n  >>> tf.math.multiply(x, x)\n  <tf.Tensor: shape=(4,), dtype=..., numpy=array([ 1,  4,  9, 16], dtype=int32)>\n\n  Since `tf.math.multiply` will convert its arguments to `Tensor`s, you can also\n  pass in non-`Tensor` arguments:\n\n  >>> tf.math.multiply(7,6)\n  <tf.Tensor: shape=(), dtype=int32, numpy=42>\n\n  If `x.shape` is not the same as `y.shape`, they will be broadcast to a\n  compatible shape. (More about broadcasting\n  [here](https://docs.scipy.org/doc/numpy/user/basics.broadcasting.html).)\n\n  For example:\n\n  >>> x = tf.ones([1, 2]);\n  >>> y = tf.ones([2, 1]);\n  >>> x * y  # Taking advantage of operator overriding\n  <tf.Tensor: shape=(2, 2), dtype=float32, numpy=\n  array([[1., 1.],\n       [1., 1.]], dtype=float32)>\n\n  The reduction version of this elementwise operation is `tf.math.reduce_prod`\n\n  Args:\n    x: A Tensor. Must be one of the following types: `bfloat16`,\n      `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`,\n      `int16`, `int32`, `int64`, `complex64`, `complex128`.\n    y: A `Tensor`. Must have the same type as `x`.\n    name: A name for the operation (optional).\n\n  Returns:\n\n  A `Tensor`.  Has the same type as `x`.\n\n  Raises:\n\n   * InvalidArgumentError: When `x` and `y` have incompatible shapes or types.\n  "},{name:"negative",path:"./tf/math/negative.md",desc:"Computes numerical negative value element-wise.",type:"Functions",docs:"Computes numerical negative value element-wise.\n\n  I.e., \\\\(y = -x\\\\).\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int8`, `int16`, `int32`, `int64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n\n    If `x` is a `SparseTensor`, returns\n    `SparseTensor(x.indices, tf.math.negative(x.values, ...), x.dense_shape)`"},{name:"no_gradient",path:"./tf/no_gradient.md",desc:"Specifies that ops of type `op_type` is not differentiable.",type:"Functions",docs:`Specifies that ops of type \`op_type\` is not differentiable.

  This function should *not* be used for operations that have a
  well-defined gradient that is not yet implemented.

  This function is only used when defining a new op type. It may be
  used for ops such as \`tf.size()\` that are not differentiable.  For
  example:

  \`\`\`python
  tf.no_gradient("Size")
  \`\`\`

  The gradient computed for 'op_type' will then propagate zeros.

  For ops that have a well-defined gradient but are not yet implemented,
  no declaration should be made, and an error *must* be thrown if
  an attempt to request its gradient is made.

  Args:
    op_type: The string type of an operation. This corresponds to the
      \`OpDef.name\` field for the proto that defines the operation.

  Raises:
    TypeError: If \`op_type\` is not a string.

  `},{name:"no_op",path:"./tf/no_op.md",desc:"Does nothing. Only useful as a placeholder for control edges.",type:"Functions",docs:`Does nothing. Only useful as a placeholder for control edges.

  Args:
    name: A name for the operation (optional).

  Returns:
    The created Operation.
  `},{name:"nondifferentiable_batch_function",path:"./tf/nondifferentiable_batch_function.md",desc:"Batches the computation done by the decorated function.",type:"Functions",docs:`Batches the computation done by the decorated function.

  So, for example, in the following code

  \`\`\`python
  @batch_function(1, 2, 3)
  def layer(a):
    return tf.matmul(a, a)

  b = layer(w)
  \`\`\`

  if more than one session.run call is simultaneously trying to compute \`b\`
  the values of \`w\` will be gathered, non-deterministically concatenated
  along the first axis, and only one thread will run the computation. See the
  documentation of the \`Batch\` op for more details.

  Assumes that all arguments of the decorated function are Tensors which will
  be batched along their first dimension.

  SparseTensor is not supported. The return value of the decorated function
  must be a Tensor or a list/tuple of Tensors.

  Args:
    num_batch_threads: Number of scheduling threads for processing batches
     of work. Determines the number of batches processed in parallel.
    max_batch_size: Batch sizes will never be bigger than this.
    batch_timeout_micros: Maximum number of microseconds to wait before
     outputting an incomplete batch.
    allowed_batch_sizes: Optional list of allowed batch sizes. If left empty,
     does nothing. Otherwise, supplies a list of batch sizes, causing the op
     to pad batches up to one of those sizes. The entries must increase
     monotonically, and the final entry must equal max_batch_size.
    max_enqueued_batches: The maximum depth of the batch queue. Defaults to 10.
    autograph: Whether to use autograph to compile python and eager style code
     for efficient graph-mode execution.
    enable_large_batch_splitting: The value of this option doesn't affect
     processing output given the same input; it affects implementation details
     as stated below: 1. Improve batching efficiency by eliminating unnecessary
     adding. 2.\`max_batch_size\` specifies the limit of input and
     \`allowed_batch_sizes\` specifies the limit of a task to be processed. API
     user can give an input of size 128 when 'max_execution_batch_size'
     is 32 -> implementation can split input of 128 into 4 x 32, schedule
     concurrent processing, and then return concatenated results corresponding
     to 128.

  Returns:
    The decorated function will return the unbatched computation output Tensors.
  `},{name:"norm",path:"./tf/norm.md",desc:"Computes the norm of vectors, matrices, and tensors.",type:"Functions",docs:"Computes the norm of vectors, matrices, and tensors.\n\n  This function can compute several different vector norms (the 1-norm, the\n  Euclidean or 2-norm, the inf-norm, and in general the p-norm for p > 0) and\n  matrix norms (Frobenius, 1-norm, 2-norm and inf-norm).\n\n  Args:\n    tensor: `Tensor` of types `float32`, `float64`, `complex64`, `complex128`\n    ord: Order of the norm. Supported values are `'fro'`, `'euclidean'`,\n      `1`, `2`, `np.inf` and any positive real number yielding the corresponding\n      p-norm. Default is `'euclidean'` which is equivalent to Frobenius norm if\n      `tensor` is a matrix and equivalent to 2-norm for vectors.\n      Some restrictions apply:\n        a) The Frobenius norm `'fro'` is not defined for vectors,\n        b) If axis is a 2-tuple (matrix norm), only `'euclidean'`, '`fro'`, `1`,\n           `2`, `np.inf` are supported.\n      See the description of `axis` on how to compute norms for a batch of\n      vectors or matrices stored in a tensor.\n    axis: If `axis` is `None` (the default), the input is considered a vector\n      and a single vector norm is computed over the entire set of values in the\n      tensor, i.e. `norm(tensor, ord=ord)` is equivalent to\n      `norm(reshape(tensor, [-1]), ord=ord)`.\n      If `axis` is a Python integer, the input is considered a batch of vectors,\n      and `axis` determines the axis in `tensor` over which to compute vector\n      norms.\n      If `axis` is a 2-tuple of Python integers it is considered a batch of\n      matrices and `axis` determines the axes in `tensor` over which to compute\n      a matrix norm.\n      Negative indices are supported. Example: If you are passing a tensor that\n      can be either a matrix or a batch of matrices at runtime, pass\n      `axis=[-2,-1]` instead of `axis=None` to make sure that matrix norms are\n      computed.\n    keepdims: If True, the axis indicated in `axis` are kept with size 1.\n      Otherwise, the dimensions in `axis` are removed from the output shape.\n    name: The name of the op.\n\n  Returns:\n    output: A `Tensor` of the same type as tensor, containing the vector or\n      matrix norms. If `keepdims` is True then the rank of output is equal to\n      the rank of `tensor`. Otherwise, if `axis` is none the output is a scalar,\n      if `axis` is an integer, the rank of `output` is one less than the rank\n      of `tensor`, if `axis` is a 2-tuple the rank of `output` is two less\n      than the rank of `tensor`.\n\n  Raises:\n    ValueError: If `ord` or `axis` is invalid.\n\n  @compatibility(numpy)\n  Mostly equivalent to numpy.linalg.norm.\n  Not supported: ord <= 0, 2-norm for matrices, nuclear norm.\n  Other differences:\n    a) If axis is `None`, treats the flattened `tensor` as a vector\n     regardless of rank.\n    b) Explicitly supports 'euclidean' norm as the default, including for\n     higher order tensors.\n  @end_compatibility\n  "},{name:"not_equal",path:"./tf/math/not_equal.md",desc:"Returns the truth value of (x != y",type:"Functions",docs:`Returns the truth value of (x != y) element-wise.

  Performs a [broadcast](
  https://docs.scipy.org/doc/numpy/user/basics.broadcasting.html) with the
  arguments and then an element-wise inequality comparison, returning a Tensor
  of boolean values.

  For example:

  >>> x = tf.constant([2, 4])
  >>> y = tf.constant(2)
  >>> tf.math.not_equal(x, y)
  <tf.Tensor: shape=(2,), dtype=bool, numpy=array([False,  True])>

  >>> x = tf.constant([2, 4])
  >>> y = tf.constant([2, 4])
  >>> tf.math.not_equal(x, y)
  <tf.Tensor: shape=(2,), dtype=bool, numpy=array([False,  False])>

  Args:
    x: A \`tf.Tensor\` or \`tf.sparse.SparseTensor\` or \`tf.IndexedSlices\`.
    y: A \`tf.Tensor\` or \`tf.sparse.SparseTensor\` or \`tf.IndexedSlices\`.
    name: A name for the operation (optional).

  Returns:
    A \`tf.Tensor\` of type bool with the same size as that of x or y.

  Raises:
    \`tf.errors.InvalidArgumentError\`: If shapes of arguments are incompatible
  `},{name:"numpy_function",path:"./tf/numpy_function.md",desc:"Wraps a python function and uses it as a TensorFlow op.",type:"Functions",docs:`Wraps a python function and uses it as a TensorFlow op.

  Given a python function \`func\` wrap this function as an operation in a
  TensorFlow function. \`func\` must take numpy arrays as its arguments and
  return numpy arrays as its outputs.

  The following example creates a TensorFlow graph with \`np.sinh()\` as an
  operation in the graph:

  >>> def my_numpy_func(x):
  ...   # x will be a numpy array with the contents of the input to the
  ...   # tf.function
  ...   return np.sinh(x)
  >>> @tf.function(input_signature=[tf.TensorSpec(None, tf.float32)])
  ... def tf_function(input):
  ...   y = tf.numpy_function(my_numpy_func, [input], tf.float32)
  ...   return y * y
  >>> tf_function(tf.constant(1.))
  <tf.Tensor: shape=(), dtype=float32, numpy=1.3810978>

  Comparison to \`tf.py_function\`:
  \`tf.py_function\` and \`tf.numpy_function\` are very similar, except that
  \`tf.numpy_function\` takes numpy arrays, and not \`tf.Tensor\`s. If you want the
  function to contain \`tf.Tensors\`, and have any TensorFlow operations executed
  in the function be differentiable, please use \`tf.py_function\`.

  Note: We recommend to avoid using \`tf.numpy_function\` outside of
  prototyping and experimentation due to the following known limitations:

  * Calling \`tf.numpy_function\` will acquire the Python Global Interpreter Lock
    (GIL) that allows only one thread to run at any point in time. This will
    preclude efficient parallelization and distribution of the execution of the
    program. Therefore, you are discouraged to use \`tf.numpy_function\` outside
    of prototyping and experimentation.

  * The body of the function (i.e. \`func\`) will not be serialized in a
    \`tf.SavedModel\`. Therefore, you should not use this function if you need to
    serialize your model and restore it in a different environment.

  * The operation must run in the same address space as the Python program
    that calls \`tf.numpy_function()\`. If you are using distributed
    TensorFlow, you must run a \`tf.distribute.Server\` in the same process as the
    program that calls \`tf.numpy_function\`  you must pin the created
    operation to a device in that server (e.g. using \`with tf.device():\`).

  * Currently \`tf.numpy_function\` is not compatible with XLA. Calling
    \`tf.numpy_function\` inside \`tf.function(jit_comiple=True)\` will raise an
    error.

  * Since the function takes numpy arrays, you cannot take gradients
    through a numpy_function. If you require something that is differentiable,
    please consider using tf.py_function.

  Args:
    func: A Python function, which accepts \`numpy.ndarray\` objects as arguments
      and returns a list of \`numpy.ndarray\` objects (or a single
      \`numpy.ndarray\`). This function must accept as many arguments as there are
      tensors in \`inp\`, and these argument types will match the corresponding
      \`tf.Tensor\` objects in \`inp\`. The returns \`numpy.ndarray\`s must match the
      number and types defined \`Tout\`.
      Important Note: Input and output \`numpy.ndarray\`s of \`func\` are not
        guaranteed to be copies. In some cases their underlying memory will be
        shared with the corresponding TensorFlow tensors. In-place modification
        or storing \`func\` input or return values in python datastructures
        without explicit (np.)copy can have non-deterministic consequences.
    inp: A list of \`tf.Tensor\` objects.
    Tout: A list or tuple of tensorflow data types or a single tensorflow data
      type if there is only one, indicating what \`func\` returns.
    stateful: (Boolean.) Setting this argument to False tells the runtime to
      treat the function as stateless, which enables certain optimizations.
      A function is stateless when given the same input it will return the
      same output and have no side effects; its only purpose is to have a
      return value.
      The behavior for a stateful function with the \`stateful\` argument False
      is undefined. In particular, caution should be taken when
      mutating the input arguments as this is a stateful operation.
    name: (Optional) A name for the operation.

  Returns:
    Single or list of \`tf.Tensor\` which \`func\` computes.
  `},{name:"one_hot",path:"./tf/one_hot.md",desc:"Returns a one-hot tensor.",type:"Functions",docs:"Returns a one-hot tensor.\n\n  See also `tf.fill`, `tf.eye`.\n\n  The locations represented by indices in `indices` take value `on_value`,\n  while all other locations take value `off_value`.\n\n  `on_value` and `off_value` must have matching data types. If `dtype` is also\n  provided, they must be the same data type as specified by `dtype`.\n\n  If `on_value` is not provided, it will default to the value `1` with type\n  `dtype`\n\n  If `off_value` is not provided, it will default to the value `0` with type\n  `dtype`\n\n  If the input `indices` is rank `N`, the output will have rank `N+1`. The\n  new axis is created at dimension `axis` (default: the new axis is appended\n  at the end).\n\n  If `indices` is a scalar the output shape will be a vector of length `depth`\n\n  If `indices` is a vector of length `features`, the output shape will be:\n\n  ```\n    features x depth if axis == -1\n    depth x features if axis == 0\n  ```\n\n  If `indices` is a matrix (batch) with shape `[batch, features]`, the output\n  shape will be:\n\n  ```\n    batch x features x depth if axis == -1\n    batch x depth x features if axis == 1\n    depth x batch x features if axis == 0\n  ```\n\n  If `indices` is a RaggedTensor, the 'axis' argument must be positive and refer\n  to a non-ragged axis. The output will be equivalent to applying 'one_hot' on\n  the values of the RaggedTensor, and creating a new RaggedTensor from the\n  result.\n\n  If `dtype` is not provided, it will attempt to assume the data type of\n  `on_value` or `off_value`, if one or both are passed in. If none of\n  `on_value`, `off_value`, or `dtype` are provided, `dtype` will default to the\n  value `tf.float32`.\n\n  Note: If a non-numeric data type output is desired (`tf.string`, `tf.bool`,\n  etc.), both `on_value` and `off_value` _must_ be provided to `one_hot`.\n\n  For example:\n\n  ```python\n  indices = [0, 1, 2]\n  depth = 3\n  tf.one_hot(indices, depth)  # output: [3 x 3]\n  # [[1., 0., 0.],\n  #  [0., 1., 0.],\n  #  [0., 0., 1.]]\n\n  indices = [0, 2, -1, 1]\n  depth = 3\n  tf.one_hot(indices, depth,\n             on_value=5.0, off_value=0.0,\n             axis=-1)  # output: [4 x 3]\n  # [[5.0, 0.0, 0.0],  # one_hot(0)\n  #  [0.0, 0.0, 5.0],  # one_hot(2)\n  #  [0.0, 0.0, 0.0],  # one_hot(-1)\n  #  [0.0, 5.0, 0.0]]  # one_hot(1)\n\n  indices = [[0, 2], [1, -1]]\n  depth = 3\n  tf.one_hot(indices, depth,\n             on_value=1.0, off_value=0.0,\n             axis=-1)  # output: [2 x 2 x 3]\n  # [[[1.0, 0.0, 0.0],   # one_hot(0)\n  #   [0.0, 0.0, 1.0]],  # one_hot(2)\n  #  [[0.0, 1.0, 0.0],   # one_hot(1)\n  #   [0.0, 0.0, 0.0]]]  # one_hot(-1)\n\n  indices = tf.ragged.constant([[0, 1], [2]])\n  depth = 3\n  tf.one_hot(indices, depth)  # output: [2 x None x 3]\n  # [[[1., 0., 0.],\n  #   [0., 1., 0.]],\n  #  [[0., 0., 1.]]]\n  ```\n\n  Args:\n    indices: A `Tensor` of indices.\n    depth: A scalar defining the depth of the one hot dimension.\n    on_value: A scalar defining the value to fill in output when `indices[j]\n      = i`. (default: 1)\n    off_value: A scalar defining the value to fill in output when `indices[j]\n      != i`. (default: 0)\n    axis: The axis to fill (default: -1, a new inner-most axis).\n    dtype: The data type of the output tensor.\n    name: A name for the operation (optional).\n\n  Returns:\n    output: The one-hot tensor.\n\n  Raises:\n    TypeError: If dtype of either `on_value` or `off_value` don't match `dtype`\n    TypeError: If dtype of `on_value` and `off_value` don't match one another\n  "},{name:"ones",path:"./tf/ones.md",desc:"Creates a tensor with all elements set to one (1",type:"Functions",docs:"Creates a tensor with all elements set to one (1).\n\n  See also `tf.ones_like`, `tf.zeros`, `tf.fill`, `tf.eye`.\n\n  This operation returns a tensor of type `dtype` with shape `shape` and\n  all elements set to one.\n\n  >>> tf.ones([3, 4], tf.int32)\n  <tf.Tensor: shape=(3, 4), dtype=int32, numpy=\n  array([[1, 1, 1, 1],\n         [1, 1, 1, 1],\n         [1, 1, 1, 1]], dtype=int32)>\n\n  Args:\n    shape: A `list` of integers, a `tuple` of integers, or\n      a 1-D `Tensor` of type `int32`.\n    dtype: Optional DType of an element in the resulting `Tensor`. Default is\n      `tf.float32`.\n    name: Optional string. A name for the operation.\n\n  Returns:\n    A `Tensor` with all elements set to one (1).\n  "},{name:"ones_like",path:"./tf/ones_like.md",desc:"Creates a tensor of all ones that has the same shape as the input.",type:"Functions",docs:"Creates a tensor of all ones that has the same shape as the input.\n\n  See also `tf.ones`.\n\n  Given a single tensor (`tensor`), this operation returns a tensor of the\n  same type and shape as `tensor` with all elements set to 1. Optionally,\n  you can use `dtype` to specify a new type for the returned tensor.\n\n  For example:\n\n  >>> tensor = tf.constant([[1, 2, 3], [4, 5, 6]])\n  >>> tf.ones_like(tensor)\n  <tf.Tensor: shape=(2, 3), dtype=int32, numpy=\n    array([[1, 1, 1],\n           [1, 1, 1]], dtype=int32)>\n\n  Args:\n    input: A `Tensor`.\n    dtype: A type for the returned `Tensor`. Must be `float16`, `float32`,\n      `float64`, `int8`, `uint8`, `int16`, `uint16`, `int32`, `int64`,\n      `complex64`, `complex128`, `bool` or `string`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` with all elements set to one.\n  "},{name:"pad",path:"./tf/pad.md",desc:"Pads a tensor.",type:"Functions",docs:'Pads a tensor.\n\n  This operation pads a `tensor` according to the `paddings` you specify.\n  `paddings` is an integer tensor with shape `[n, 2]`, where n is the rank of\n  `tensor`. For each dimension D of `input`, `paddings[D, 0]` indicates how\n  many values to add before the contents of `tensor` in that dimension, and\n  `paddings[D, 1]` indicates how many values to add after the contents of\n  `tensor` in that dimension. If `mode` is "REFLECT" then both `paddings[D, 0]`\n  and `paddings[D, 1]` must be no greater than `tensor.dim_size(D) - 1`. If\n  `mode` is "SYMMETRIC" then both `paddings[D, 0]` and `paddings[D, 1]` must be\n  no greater than `tensor.dim_size(D)`.\n\n  The padded size of each dimension D of the output is:\n\n  `paddings[D, 0] + tensor.dim_size(D) + paddings[D, 1]`\n\n  For example:\n\n  ```python\n  t = tf.constant([[1, 2, 3], [4, 5, 6]])\n  paddings = tf.constant([[1, 1,], [2, 2]])\n  # \'constant_values\' is 0.\n  # rank of \'t\' is 2.\n  tf.pad(t, paddings, "CONSTANT")  # [[0, 0, 0, 0, 0, 0, 0],\n                                   #  [0, 0, 1, 2, 3, 0, 0],\n                                   #  [0, 0, 4, 5, 6, 0, 0],\n                                   #  [0, 0, 0, 0, 0, 0, 0]]\n\n  tf.pad(t, paddings, "REFLECT")  # [[6, 5, 4, 5, 6, 5, 4],\n                                  #  [3, 2, 1, 2, 3, 2, 1],\n                                  #  [6, 5, 4, 5, 6, 5, 4],\n                                  #  [3, 2, 1, 2, 3, 2, 1]]\n\n  tf.pad(t, paddings, "SYMMETRIC")  # [[2, 1, 1, 2, 3, 3, 2],\n                                    #  [2, 1, 1, 2, 3, 3, 2],\n                                    #  [5, 4, 4, 5, 6, 6, 5],\n                                    #  [5, 4, 4, 5, 6, 6, 5]]\n  ```\n\n  Args:\n    tensor: A `Tensor`.\n    paddings: A `Tensor` of type `int32`.\n    mode: One of "CONSTANT", "REFLECT", or "SYMMETRIC" (case-insensitive)\n    constant_values: In "CONSTANT" mode, the scalar pad value to use. Must be\n      same type as `tensor`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `tensor`.\n\n  Raises:\n    ValueError: When mode is not one of "CONSTANT", "REFLECT", or "SYMMETRIC".\n  '},{name:"parallel_stack",path:"./tf/parallel_stack.md",desc:"Stacks a list of rank-`R` tensors into one rank-`(R+1",type:"Functions",docs:`Stacks a list of rank-\`R\` tensors into one rank-\`(R+1)\` tensor in parallel.

  Requires that the shape of inputs be known at graph construction time.

  Packs the list of tensors in \`values\` into a tensor with rank one higher than
  each tensor in \`values\`, by packing them along the first dimension.
  Given a list of length \`N\` of tensors of shape \`(A, B, C)\`; the \`output\`
  tensor will have the shape \`(N, A, B, C)\`.

  For example:

  \`\`\`python
  x = tf.constant([1, 4])
  y = tf.constant([2, 5])
  z = tf.constant([3, 6])
  tf.parallel_stack([x, y, z])  # [[1, 4], [2, 5], [3, 6]]
  \`\`\`

  The difference between \`stack\` and \`parallel_stack\` is that \`stack\` requires
  all the inputs be computed before the operation will begin but doesn't require
  that the input shapes be known during graph construction.

  \`parallel_stack\` will copy pieces of the input into the output as they become
  available, in some situations this can provide a performance benefit.

  Unlike \`stack\`, \`parallel_stack\` does NOT support backpropagation.

  This is the opposite of unstack.  The numpy equivalent is

      tf.parallel_stack([x, y, z]) = np.asarray([x, y, z])

  @compatibility(eager)
  parallel_stack is not compatible with eager execution.
  @end_compatibility

  Args:
    values: A list of \`Tensor\` objects with the same shape and type.
    name: A name for this operation (optional).

  Returns:
    output: A stacked \`Tensor\` with the same type as \`values\`.

  Raises:
    RuntimeError: if executed in eager mode.
  `},{name:"pow",path:"./tf/math/pow.md",desc:"Computes the power of one value to another.",type:"Functions",docs:"Computes the power of one value to another.\n\n  Given a tensor `x` and a tensor `y`, this operation computes \\\\(x^y\\\\) for\n  corresponding elements in `x` and `y`. For example:\n\n  ```python\n  x = tf.constant([[2, 2], [3, 3]])\n  y = tf.constant([[8, 16], [2, 3]])\n  tf.pow(x, y)  # [[256, 65536], [9, 27]]\n  ```\n\n  Args:\n    x: A `Tensor` of type `float16`, `float32`, `float64`, `int32`, `int64`,\n      `complex64`, or `complex128`.\n    y: A `Tensor` of type `float16`, `float32`, `float64`, `int32`, `int64`,\n      `complex64`, or `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`.\n  "},{name:"print",path:"./tf/print.md",desc:"Print the specified inputs.",type:"Functions",docs:`Print the specified inputs.

  A TensorFlow operator that prints the specified inputs to a desired
  output stream or logging level. The inputs may be dense or sparse Tensors,
  primitive python objects, data structures that contain tensors, and printable
  Python objects. Printed tensors will recursively show the first and last
  elements of each dimension to summarize.

  Example:
    Single-input usage:

    \`\`\`python
    tensor = tf.range(10)
    tf.print(tensor, output_stream=sys.stderr)
    \`\`\`

    (This prints "[0 1 2 ... 7 8 9]" to sys.stderr)

    Multi-input usage:

    \`\`\`python
    tensor = tf.range(10)
    tf.print("tensors:", tensor, {2: tensor * 2}, output_stream=sys.stdout)
    \`\`\`

    (This prints "tensors: [0 1 2 ... 7 8 9] {2: [0 2 4 ... 14 16 18]}" to
    sys.stdout)

    Changing the input separator:
    \`\`\`python
    tensor_a = tf.range(2)
    tensor_b = tensor_a * 2
    tf.print(tensor_a, tensor_b, output_stream=sys.stderr, sep=',')
    \`\`\`

    (This prints "[0 1],[0 2]" to sys.stderr)

    Usage in a \`tf.function\`:

    \`\`\`python
    @tf.function
    def f():
        tensor = tf.range(10)
        tf.print(tensor, output_stream=sys.stderr)
        return tensor

    range_tensor = f()
    \`\`\`

    (This prints "[0 1 2 ... 7 8 9]" to sys.stderr)

  *Compatibility usage in TF 1.x graphs*:

    In graphs manually created outside of \`tf.function\`, this method returns
    the created TF operator that prints the data. To make sure the
    operator runs, users need to pass the produced op to
    \`tf.compat.v1.Session\`'s run method, or to use the op as a control
    dependency for executed ops by specifying
    \`with tf.compat.v1.control_dependencies([print_op])\`.

    \`\`\`python
    tf.compat.v1.disable_v2_behavior()  # for TF1 compatibility only

    sess = tf.compat.v1.Session()
    with sess.as_default():
      tensor = tf.range(10)
      print_op = tf.print("tensors:", tensor, {2: tensor * 2},
                          output_stream=sys.stdout)
      with tf.control_dependencies([print_op]):
        tripled_tensor = tensor * 3

      sess.run(tripled_tensor)
    \`\`\`

    (This prints "tensors: [0 1 2 ... 7 8 9] {2: [0 2 4 ... 14 16 18]}" to
    sys.stdout)

  Note: In Jupyter notebooks and colabs, \`tf.print\` prints to the notebook
    cell outputs. It will not write to the notebook kernel's console logs.

  Args:
    *inputs: Positional arguments that are the inputs to print. Inputs in the
      printed output will be separated by spaces. Inputs may be python
      primitives, tensors, data structures such as dicts and lists that may
      contain tensors (with the data structures possibly nested in arbitrary
      ways), and printable python objects.
    output_stream: The output stream, logging level, or file to print to.
      Defaults to sys.stderr, but sys.stdout, tf.compat.v1.logging.info,
      tf.compat.v1.logging.warning, tf.compat.v1.logging.error,
      absl.logging.info, absl.logging.warning and absl.logging.error are also
      supported. To print to a file, pass a string started with "file://"
      followed by the file path, e.g., "file:///tmp/foo.out".
    summarize: The first and last \`summarize\` elements within each dimension are
      recursively printed per Tensor. If None, then the first 3 and last 3
      elements of each dimension are printed for each tensor. If set to -1, it
      will print all elements of every tensor.
    sep: The string to use to separate the inputs. Defaults to " ".
    end: End character that is appended at the end the printed string. Defaults
      to the newline character.
    name: A name for the operation (optional).

  Returns:
    None when executing eagerly. During graph tracing this returns
    a TF operator that prints the specified inputs in the specified output
    stream or logging level. This operator will be automatically executed
    except inside of \`tf.compat.v1\` graphs and sessions.

  Raises:
    ValueError: If an unsupported output stream is specified.
  `},{name:"py_function",path:"./tf/py_function.md",desc:"Wraps a python function into a TensorFlow op that executes it eagerly.",type:"Functions",docs:"Wraps a python function into a TensorFlow op that executes it eagerly.\n\n  This function allows expressing computations in a TensorFlow graph as\n  Python functions. In particular, it wraps a Python function `func`\n  in a once-differentiable TensorFlow operation that executes it with eager\n  execution enabled. As a consequence, `tf.py_function` makes it\n  possible to express control flow using Python constructs (`if`, `while`,\n  `for`, etc.), instead of TensorFlow control flow constructs (`tf.cond`,\n  `tf.while_loop`). For example, you might use `tf.py_function` to\n  implement the log huber function:\n\n  ```python\n  def log_huber(x, m):\n    if tf.abs(x) <= m:\n      return x**2\n    else:\n      return m**2 * (1 - 2 * tf.math.log(m) + tf.math.log(x**2))\n\n  x = tf.constant(1.0)\n  m = tf.constant(2.0)\n\n  with tf.GradientTape() as t:\n    t.watch([x, m])\n    y = tf.py_function(func=log_huber, inp=[x, m], Tout=tf.float32)\n\n  dy_dx = t.gradient(y, x)\n  assert dy_dx.numpy() == 2.0\n  ```\n\n  You can also use `tf.py_function` to debug your models at runtime\n  using Python tools, i.e., you can isolate portions of your code that\n  you want to debug, wrap them in Python functions and insert `pdb` tracepoints\n  or print statements as desired, and wrap those functions in\n  `tf.py_function`.\n\n  For more information on eager execution, see the\n  [Eager guide](https://tensorflow.org/guide/eager).\n\n  `tf.py_function` is similar in spirit to `tf.compat.v1.py_func`, but unlike\n  the latter, the former lets you use TensorFlow operations in the wrapped\n  Python function. In particular, while `tf.compat.v1.py_func` only runs on CPUs\n  and wraps functions that take NumPy arrays as inputs and return NumPy arrays\n  as outputs, `tf.py_function` can be placed on GPUs and wraps functions\n  that take Tensors as inputs, execute TensorFlow operations in their bodies,\n  and return Tensors as outputs.\n\n  Note: We recommend to avoid using `tf.py_function` outside of prototyping\n  and experimentation due to the following known limitations:\n\n  * Calling `tf.py_function` will acquire the Python Global Interpreter Lock\n    (GIL) that allows only one thread to run at any point in time. This will\n    preclude efficient parallelization and distribution of the execution of the\n    program.\n\n  * The body of the function (i.e. `func`) will not be serialized in a\n    `GraphDef`. Therefore, you should not use this function if you need to\n    serialize your model and restore it in a different environment.\n\n  * The operation must run in the same address space as the Python program\n    that calls `tf.py_function()`. If you are using distributed\n    TensorFlow, you must run a `tf.distribute.Server` in the same process as the\n    program that calls `tf.py_function()` and you must pin the created\n    operation to a device in that server (e.g. using `with tf.device():`).\n\n  * Currently `tf.py_function` is not compatible with XLA. Calling\n    `tf.py_function` inside `tf.function(jit_comiple=True)` will raise an\n    error.\n\n  Args:\n    func: A Python function that accepts `inp` as arguments, and returns a\n      value (or list of values) whose type is described by `Tout`.\n\n    inp: Input arguments for `func`.  A list whose elements are `Tensor`s or\n      `CompositeTensors` (such as `tf.RaggedTensor`); or a single `Tensor` or\n      `CompositeTensor`.\n\n    Tout: The type(s) of the value(s) returned by `func`.  One of the\n      following.\n\n      * If `func` returns a `Tensor` (or a value that can be converted to a\n        Tensor): the `tf.DType` for that value.\n      * If `func` returns a `CompositeTensor`: The `tf.TypeSpec` for that value.\n      * If `func` returns `None`: the empty list (`[]`).\n      * If `func` returns a list of `Tensor` and `CompositeTensor` values:\n        a corresponding list of `tf.DType`s and `tf.TypeSpec`s for each value.\n\n    name: A name for the operation (optional).\n\n  Returns:\n    The value(s) computed by `func`: a `Tensor`, `CompositeTensor`, or list of\n    `Tensor` and `CompositeTensor`; or an empty list if `func` returns `None`.\n  "},{name:"random_index_shuffle",path:"./tf/random_index_shuffle.md",desc:"Outputs the position of `value` in a permutation of [0, ..., max_index].",type:"Functions",docs:"Outputs the position of `value` in a permutation of [0, ..., max_index].\n\n  Output values are a bijection of the `index` for any combination and `seed` and `max_index`.\n\n  If multiple inputs are vectors (matrix in case of seed) then the size of the\n  first dimension must match.\n\n  The outputs are deterministic.\n\n  Args:\n    index: A `Tensor`. Must be one of the following types: `int32`, `uint32`, `int64`, `uint64`.\n      A scalar tensor or a vector of dtype `dtype`. The index (or indices) to be shuffled. Must be within [0, max_index].\n    seed: A `Tensor`. Must be one of the following types: `int32`, `uint32`, `int64`, `uint64`.\n      A tensor of dtype `Tseed` and shape [3] or [n, 3]. The random seed.\n    max_index: A `Tensor`. Must have the same type as `index`.\n      A scalar tensor or vector of dtype `dtype`. The upper bound(s) of the interval (inclusive).\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `index`.\n  "},{name:"range",path:"./tf/range.md",desc:"Creates a sequence of numbers.",type:"Functions",docs:`Creates a sequence of numbers.

  Creates a sequence of numbers that begins at \`start\` and extends by
  increments of \`delta\` up to but not including \`limit\`.

  The dtype of the resulting tensor is inferred from the inputs unless
  it is provided explicitly.

  Like the Python builtin \`range\`, \`start\` defaults to 0, so that
  \`range(n) = range(0, n)\`.

  For example:

  >>> start = 3
  >>> limit = 18
  >>> delta = 3
  >>> tf.range(start, limit, delta)
  <tf.Tensor: shape=(5,), dtype=int32,
  numpy=array([ 3,  6,  9, 12, 15], dtype=int32)>

  >>> start = 3
  >>> limit = 1
  >>> delta = -0.5
  >>> tf.range(start, limit, delta)
  <tf.Tensor: shape=(4,), dtype=float32,
  numpy=array([3. , 2.5, 2. , 1.5], dtype=float32)>

  >>> limit = 5
  >>> tf.range(limit)
  <tf.Tensor: shape=(5,), dtype=int32,
  numpy=array([0, 1, 2, 3, 4], dtype=int32)>

  Args:
    start: A 0-D \`Tensor\` (scalar). Acts as first entry in the range if \`limit\`
      is not None; otherwise, acts as range limit and first entry defaults to 0.
    limit: A 0-D \`Tensor\` (scalar). Upper limit of sequence, exclusive. If None,
      defaults to the value of \`start\` while the first entry of the range
      defaults to 0.
    delta: A 0-D \`Tensor\` (scalar). Number that increments \`start\`. Defaults to
      1.
    dtype: The type of the elements of the resulting tensor.
    name: A name for the operation. Defaults to "range".

  Returns:
    An 1-D \`Tensor\` of type \`dtype\`.

  @compatibility(numpy)
  Equivalent to np.arange
  @end_compatibility
  `},{name:"rank",path:"./tf/rank.md",desc:"Returns the rank of a tensor.",type:"Functions",docs:`Returns the rank of a tensor.

  See also \`tf.shape\`.

  Returns a 0-D \`int32\` \`Tensor\` representing the rank of \`input\`.

  For example:

  \`\`\`python
  # shape of tensor 't' is [2, 2, 3]
  t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])
  tf.rank(t)  # 3
  \`\`\`

  **Note**: The rank of a tensor is not the same as the rank of a matrix. The
  rank of a tensor is the number of indices required to uniquely select each
  element of the tensor. Rank is also known as "order", "degree", or "ndims."

  Args:
    input: A \`Tensor\` or \`SparseTensor\`.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\` of type \`int32\`.

  @compatibility(numpy)
  Equivalent to np.ndim
  @end_compatibility
  `},{name:"realdiv",path:"./tf/realdiv.md",desc:"Returns x / y element-wise for real types.",type:"Functions",docs:"Returns x / y element-wise for real types.\n\n  If `x` and `y` are reals, this will return the floating-point division.\n\n  *NOTE*: `Div` supports broadcasting. More about broadcasting\n  [here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`, `int16`, `int32`, `uint32`, `uint64`, `int64`, `complex64`, `complex128`.\n    y: A `Tensor`. Must have the same type as `x`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  "},{name:"recompute_grad",path:"./tf/recompute_grad.md",desc:"Defines a function as a recompute-checkpoint for the tape auto-diff.",type:"Functions",docs:`Defines a function as a recompute-checkpoint for the tape auto-diff.

  Tape checkpointing is a technique to reduce the memory consumption of the
  auto-diff tape:

  - Without tape checkpointing operations and intermediate values are
  recorded to the tape for use in the backward pass.

  - With tape checkpointing, only the function call and its inputs are
  recorded. During back-propagation the \`recompute_grad\` custom gradient
  (\`tf.custom_gradient\`) recomputes the function under a localized Tape object.
  This recomputation of the function during backpropagation performs redundant
  calculation, but reduces the overall memory usage of the Tape.

  >>> y = tf.Variable(1.0)

  >>> def my_function(x):
  ...   tf.print('running')
  ...   z = x*y
  ...   return z

  >>> my_function_recompute = tf.recompute_grad(my_function)

  >>> with tf.GradientTape() as tape:
  ...   r = tf.constant(1.0)
  ...   for i in range(4):
  ...     r = my_function_recompute(r)
  running
  running
  running
  running

  >>> grad = tape.gradient(r, [y])
  running
  running
  running
  running

  Without \`recompute_grad\`, the tape contains all intermitate steps, and no
  recomputation is performed.

  >>> with tf.GradientTape() as tape:
  ...   r = tf.constant(1.0)
  ...   for i in range(4):
  ...     r = my_function(r)
  running
  running
  running
  running

  >>> grad = tape.gradient(r, [y])


  If \`f\` was a \`tf.keras\` \`Model\` or \`Layer\` object, methods and attributes
  such as \`f.variables\` are not available on the returned function \`g\`.
  Either keep a reference of \`f\` , or use \`g.__wrapped__\` for accessing
  these variables and methods.


  >>> def print_running_and_return(x):
  ...   tf.print("running")
  ...   return x

  >>> model = tf.keras.Sequential([
  ...   tf.keras.layers.Lambda(print_running_and_return),
  ...   tf.keras.layers.Dense(2)
  ... ])

  >>> model_recompute = tf.recompute_grad(model)

  >>> with tf.GradientTape(persistent=True) as tape:
  ...   r = tf.constant([[1,2]])
  ...   for i in range(4):
  ...     r = model_recompute(r)
  running
  running
  running
  running

  >>> grad = tape.gradient(r, model.variables)
  running
  running
  running
  running

  Alternatively, use the \`__wrapped__\` attribute to access the original
  model object.

  >>> grad = tape.gradient(r, model_recompute.__wrapped__.variables)
  running
  running
  running
  running


  Args:
    f: function \`f(*x)\` that returns a \`Tensor\` or sequence of \`Tensor\` outputs.

  Returns:
    A function \`g\` wrapping \`f\` that defines a custom gradient, which recomputes
    \`f\` on the backwards pass of a gradient call.
  `},{name:"reduce_all",path:"./tf/math/reduce_all.md",desc:'Computes <a href="./tf/math/logical_and.md"><code>tf.math.logical_and</code></a> of elements across dimensions of a tensor.',type:"Functions",docs:`Computes \`tf.math.logical_and\` of elements across dimensions of a tensor.

  This is the reduction operation for the elementwise \`tf.math.logical_and\` op.

  Reduces \`input_tensor\` along the dimensions given in \`axis\`.
  Unless \`keepdims\` is true, the rank of the tensor is reduced by 1 for each
  of the entries in \`axis\`, which must be unique. If \`keepdims\` is true, the
  reduced dimensions are retained with length 1.

  If \`axis\` is None, all dimensions are reduced, and a
  tensor with a single element is returned.

  For example:

    >>> x = tf.constant([[True,  True], [False, False]])
    >>> tf.math.reduce_all(x)
    <tf.Tensor: shape=(), dtype=bool, numpy=False>
    >>> tf.math.reduce_all(x, 0)
    <tf.Tensor: shape=(2,), dtype=bool, numpy=array([False, False])>
    >>> tf.math.reduce_all(x, 1)
    <tf.Tensor: shape=(2,), dtype=bool, numpy=array([ True, False])>

  Args:
    input_tensor: The boolean tensor to reduce.
    axis: The dimensions to reduce. If \`None\` (the default), reduces all
      dimensions. Must be in the range \`[-rank(input_tensor),
      rank(input_tensor))\`.
    keepdims: If true, retains reduced dimensions with length 1.
    name: A name for the operation (optional).

  Returns:
    The reduced tensor.

  @compatibility(numpy)
  Equivalent to np.all
  @end_compatibility
  `},{name:"reduce_any",path:"./tf/math/reduce_any.md",desc:'Computes <a href="./tf/math/logical_or.md"><code>tf.math.logical_or</code></a> of elements across dimensions of a tensor.',type:"Functions",docs:`Computes \`tf.math.logical_or\` of elements across dimensions of a tensor.

  This is the reduction operation for the elementwise \`tf.math.logical_or\` op.

  Reduces \`input_tensor\` along the dimensions given in \`axis\`.
  Unless \`keepdims\` is true, the rank of the tensor is reduced by 1 for each
  of the entries in \`axis\`, which must be unique. If \`keepdims\` is true, the
  reduced dimensions are retained with length 1.

  If \`axis\` is None, all dimensions are reduced, and a
  tensor with a single element is returned.

  For example:

    >>> x = tf.constant([[True,  True], [False, False]])
    >>> tf.reduce_any(x)
    <tf.Tensor: shape=(), dtype=bool, numpy=True>
    >>> tf.reduce_any(x, 0)
    <tf.Tensor: shape=(2,), dtype=bool, numpy=array([ True,  True])>
    >>> tf.reduce_any(x, 1)
    <tf.Tensor: shape=(2,), dtype=bool, numpy=array([ True, False])>

  Args:
    input_tensor: The boolean tensor to reduce.
    axis: The dimensions to reduce. If \`None\` (the default), reduces all
      dimensions. Must be in the range \`[-rank(input_tensor),
      rank(input_tensor))\`.
    keepdims: If true, retains reduced dimensions with length 1.
    name: A name for the operation (optional).

  Returns:
    The reduced tensor.

  @compatibility(numpy)
  Equivalent to np.any
  @end_compatibility
  `},{name:"reduce_logsumexp",path:"./tf/math/reduce_logsumexp.md",desc:"Computes log(sum(exp(elements across dimensions of a tensor",type:"Functions",docs:`Computes log(sum(exp(elements across dimensions of a tensor))).

  Reduces \`input_tensor\` along the dimensions given in \`axis\`.
  Unless \`keepdims\` is true, the rank of the tensor is reduced by 1 for each
  of the entries in \`axis\`, which must be unique. If \`keepdims\` is true, the
  reduced dimensions are retained with length 1.

  If \`axis\` has no entries, all dimensions are reduced, and a
  tensor with a single element is returned.

  This function is more numerically stable than log(sum(exp(input))). It avoids
  overflows caused by taking the exp of large inputs and underflows caused by
  taking the log of small inputs.

  For example:

  \`\`\`python
  x = tf.constant([[0., 0., 0.], [0., 0., 0.]])
  tf.reduce_logsumexp(x)  # log(6)
  tf.reduce_logsumexp(x, 0)  # [log(2), log(2), log(2)]
  tf.reduce_logsumexp(x, 1)  # [log(3), log(3)]
  tf.reduce_logsumexp(x, 1, keepdims=True)  # [[log(3)], [log(3)]]
  tf.reduce_logsumexp(x, [0, 1])  # log(6)
  \`\`\`

  Args:
    input_tensor: The tensor to reduce. Should have numeric type.
    axis: The dimensions to reduce. If \`None\` (the default), reduces all
      dimensions. Must be in the range \`[-rank(input_tensor),
      rank(input_tensor))\`.
    keepdims: If true, retains reduced dimensions with length 1.
    name: A name for the operation (optional).

  Returns:
    The reduced tensor.
  `},{name:"reduce_max",path:"./tf/math/reduce_max.md",desc:'Computes <a href="./tf/math/maximum.md"><code>tf.math.maximum</code></a> of elements across dimensions of a tensor.',type:"Functions",docs:`Computes \`tf.math.maximum\` of elements across dimensions of a tensor.

  This is the reduction operation for the elementwise \`tf.math.maximum\` op.

  Reduces \`input_tensor\` along the dimensions given in \`axis\`.
  Unless \`keepdims\` is true, the rank of the tensor is reduced by 1 for each
  of the entries in \`axis\`, which must be unique. If \`keepdims\` is true, the
  reduced dimensions are retained with length 1.

  If \`axis\` is None, all dimensions are reduced, and a
  tensor with a single element is returned.

  Usage example:

    >>> x = tf.constant([5, 1, 2, 4])
    >>> tf.reduce_max(x)
    <tf.Tensor: shape=(), dtype=int32, numpy=5>
    >>> x = tf.constant([-5, -1, -2, -4])
    >>> tf.reduce_max(x)
    <tf.Tensor: shape=(), dtype=int32, numpy=-1>
    >>> x = tf.constant([4, float('nan')])
    >>> tf.reduce_max(x)
    <tf.Tensor: shape=(), dtype=float32, numpy=nan>
    >>> x = tf.constant([float('nan'), float('nan')])
    >>> tf.reduce_max(x)
    <tf.Tensor: shape=(), dtype=float32, numpy=nan>
    >>> x = tf.constant([float('-inf'), float('inf')])
    >>> tf.reduce_max(x)
    <tf.Tensor: shape=(), dtype=float32, numpy=inf>

  See the numpy docs for \`np.amax\` and \`np.nanmax\` behavior.

  Args:
    input_tensor: The tensor to reduce. Should have real numeric type.
    axis: The dimensions to reduce. If \`None\` (the default), reduces all
      dimensions. Must be in the range \`[-rank(input_tensor),
      rank(input_tensor))\`.
    keepdims: If true, retains reduced dimensions with length 1.
    name: A name for the operation (optional).

  Returns:
    The reduced tensor.
  `},{name:"reduce_mean",path:"./tf/math/reduce_mean.md",desc:"Computes the mean of elements across dimensions of a tensor.",type:"Functions",docs:`Computes the mean of elements across dimensions of a tensor.

  Reduces \`input_tensor\` along the dimensions given in \`axis\` by computing the
  mean of elements across the dimensions in \`axis\`.
  Unless \`keepdims\` is true, the rank of the tensor is reduced by 1 for each
  of the entries in \`axis\`, which must be unique. If \`keepdims\` is true, the
  reduced dimensions are retained with length 1.

  If \`axis\` is None, all dimensions are reduced, and a tensor with a single
  element is returned.

  For example:

  >>> x = tf.constant([[1., 1.], [2., 2.]])
  >>> tf.reduce_mean(x)
  <tf.Tensor: shape=(), dtype=float32, numpy=1.5>
  >>> tf.reduce_mean(x, 0)
  <tf.Tensor: shape=(2,), dtype=float32, numpy=array([1.5, 1.5], dtype=float32)>
  >>> tf.reduce_mean(x, 1)
  <tf.Tensor: shape=(2,), dtype=float32, numpy=array([1., 2.], dtype=float32)>

  Args:
    input_tensor: The tensor to reduce. Should have numeric type.
    axis: The dimensions to reduce. If \`None\` (the default), reduces all
      dimensions. Must be in the range \`[-rank(input_tensor),
      rank(input_tensor))\`.
    keepdims: If true, retains reduced dimensions with length 1.
    name: A name for the operation (optional).

  Returns:
    The reduced tensor.

  @compatibility(numpy)
  Equivalent to np.mean

  Please note that \`np.mean\` has a \`dtype\` parameter that could be used to
  specify the output type. By default this is \`dtype=float64\`. On the other
  hand, \`tf.reduce_mean\` has an aggressive type inference from \`input_tensor\`,
  for example:

  >>> x = tf.constant([1, 0, 1, 0])
  >>> tf.reduce_mean(x)
  <tf.Tensor: shape=(), dtype=int32, numpy=0>
  >>> y = tf.constant([1., 0., 1., 0.])
  >>> tf.reduce_mean(y)
  <tf.Tensor: shape=(), dtype=float32, numpy=0.5>

  @end_compatibility
  `},{name:"reduce_min",path:"./tf/math/reduce_min.md",desc:'Computes the <a href="./tf/math/minimum.md"><code>tf.math.minimum</code></a> of elements across dimensions of a tensor.',type:"Functions",docs:`Computes the \`tf.math.minimum\` of elements across dimensions of a tensor.

  This is the reduction operation for the elementwise \`tf.math.minimum\` op.

  Reduces \`input_tensor\` along the dimensions given in \`axis\`.
  Unless \`keepdims\` is true, the rank of the tensor is reduced by 1 for each
  of the entries in \`axis\`, which must be unique. If \`keepdims\` is true, the
  reduced dimensions are retained with length 1.

  If \`axis\` is None, all dimensions are reduced, and a
  tensor with a single element is returned.

  For example:

  >>> a = tf.constant([
  ...   [[1, 2], [3, 4]],
  ...   [[1, 2], [3, 4]]
  ... ])
  >>> tf.reduce_min(a)
  <tf.Tensor: shape=(), dtype=int32, numpy=1>

  Choosing a specific axis returns minimum element in the given axis:

  >>> b = tf.constant([[1, 2, 3], [4, 5, 6]])
  >>> tf.reduce_min(b, axis=0)
  <tf.Tensor: shape=(3,), dtype=int32, numpy=array([1, 2, 3], dtype=int32)>
  >>> tf.reduce_min(b, axis=1)
  <tf.Tensor: shape=(2,), dtype=int32, numpy=array([1, 4], dtype=int32)>

  Setting \`keepdims\` to \`True\` retains the dimension of \`input_tensor\`:

  >>> tf.reduce_min(a, keepdims=True)
  <tf.Tensor: shape=(1, 1, 1), dtype=int32, numpy=array([[[1]]], dtype=int32)>
  >>> tf.math.reduce_min(a, axis=0, keepdims=True)
  <tf.Tensor: shape=(1, 2, 2), dtype=int32, numpy=
  array([[[1, 2],
          [3, 4]]], dtype=int32)>

  Args:
    input_tensor: The tensor to reduce. Should have real numeric type.
    axis: The dimensions to reduce. If \`None\` (the default), reduces all
      dimensions. Must be in the range \`[-rank(input_tensor),
      rank(input_tensor))\`.
    keepdims: If true, retains reduced dimensions with length 1.
    name: A name for the operation (optional).

  Returns:
    The reduced tensor.

  @compatibility(numpy)
  Equivalent to np.min
  @end_compatibility
  `},{name:"reduce_prod",path:"./tf/math/reduce_prod.md",desc:'Computes <a href="./tf/math/multiply.md"><code>tf.math.multiply</code></a> of elements across dimensions of a tensor.',type:"Functions",docs:`Computes \`tf.math.multiply\` of elements across dimensions of a tensor.

  This is the reduction operation for the elementwise \`tf.math.multiply\` op.

  Reduces \`input_tensor\` along the dimensions given in \`axis\`.
  Unless \`keepdims\` is true, the rank of the tensor is reduced by 1 for each
  entry in \`axis\`. If \`keepdims\` is true, the reduced dimensions
  are retained with length 1.

  If \`axis\` is None, all dimensions are reduced, and a
  tensor with a single element is returned.

  For example:

    >>> x = tf.constant([[1., 2.], [3., 4.]])
    >>> tf.math.reduce_prod(x)
    <tf.Tensor: shape=(), dtype=float32, numpy=24.>
    >>> tf.math.reduce_prod(x, 0)
    <tf.Tensor: shape=(2,), dtype=float32, numpy=array([3., 8.], dtype=float32)>
    >>> tf.math.reduce_prod(x, 1)
    <tf.Tensor: shape=(2,), dtype=float32, numpy=array([2., 12.],
    dtype=float32)>

  Args:
    input_tensor: The tensor to reduce. Should have numeric type.
    axis: The dimensions to reduce. If \`None\` (the default), reduces all
      dimensions. Must be in the range \`[-rank(input_tensor),
      rank(input_tensor))\`.
    keepdims: If true, retains reduced dimensions with length 1.
    name: A name for the operation (optional).

  Returns:
    The reduced tensor.

  @compatibility(numpy)
  Equivalent to np.prod
  @end_compatibility
  `},{name:"reduce_sum",path:"./tf/math/reduce_sum.md",desc:"Computes the sum of elements across dimensions of a tensor.",type:"Functions",docs:`Computes the sum of elements across dimensions of a tensor.

  This is the reduction operation for the elementwise \`tf.math.add\` op.

  Reduces \`input_tensor\` along the dimensions given in \`axis\`.
  Unless \`keepdims\` is true, the rank of the tensor is reduced by 1 for each
  of the entries in \`axis\`, which must be unique. If \`keepdims\` is true, the
  reduced dimensions are retained with length 1.

  If \`axis\` is None, all dimensions are reduced, and a
  tensor with a single element is returned.

  For example:

    >>> # x has a shape of (2, 3) (two rows and three columns):
    >>> x = tf.constant([[1, 1, 1], [1, 1, 1]])
    >>> x.numpy()
    array([[1, 1, 1],
           [1, 1, 1]], dtype=int32)
    >>> # sum all the elements
    >>> # 1 + 1 + 1 + 1 + 1+ 1 = 6
    >>> tf.reduce_sum(x).numpy()
    6
    >>> # reduce along the first dimension
    >>> # the result is [1, 1, 1] + [1, 1, 1] = [2, 2, 2]
    >>> tf.reduce_sum(x, 0).numpy()
    array([2, 2, 2], dtype=int32)
    >>> # reduce along the second dimension
    >>> # the result is [1, 1] + [1, 1] + [1, 1] = [3, 3]
    >>> tf.reduce_sum(x, 1).numpy()
    array([3, 3], dtype=int32)
    >>> # keep the original dimensions
    >>> tf.reduce_sum(x, 1, keepdims=True).numpy()
    array([[3],
           [3]], dtype=int32)
    >>> # reduce along both dimensions
    >>> # the result is 1 + 1 + 1 + 1 + 1 + 1 = 6
    >>> # or, equivalently, reduce along rows, then reduce the resultant array
    >>> # [1, 1, 1] + [1, 1, 1] = [2, 2, 2]
    >>> # 2 + 2 + 2 = 6
    >>> tf.reduce_sum(x, [0, 1]).numpy()
    6

  Args:
    input_tensor: The tensor to reduce. Should have numeric type.
    axis: The dimensions to reduce. If \`None\` (the default), reduces all
      dimensions. Must be in the range \`[-rank(input_tensor),
      rank(input_tensor)]\`.
    keepdims: If true, retains reduced dimensions with length 1.
    name: A name for the operation (optional).

  Returns:
    The reduced tensor, of the same dtype as the input_tensor.

  @compatibility(numpy)
  Equivalent to np.sum apart the fact that numpy upcast uint8 and int32 to
  int64 while tensorflow returns the same dtype as the input.
  @end_compatibility
  `},{name:"register_tensor_conversion_function",path:"./tf/register_tensor_conversion_function.md",desc:"Registers a function for converting objects of `base_type` to `Tensor`.",type:"Functions",docs:"Registers a function for converting objects of `base_type` to `Tensor`.\n\n  The conversion function must have the following signature:\n\n  ```python\n      def conversion_func(value, dtype=None, name=None, as_ref=False):\n        # ...\n  ```\n\n  It must return a `Tensor` with the given `dtype` if specified. If the\n  conversion function creates a new `Tensor`, it should use the given\n  `name` if specified. All exceptions will be propagated to the caller.\n\n  The conversion function may return `NotImplemented` for some\n  inputs. In this case, the conversion process will continue to try\n  subsequent conversion functions.\n\n  If `as_ref` is true, the function must return a `Tensor` reference,\n  such as a `Variable`.\n\n  NOTE: The conversion functions will execute in order of priority,\n  followed by order of registration. To ensure that a conversion function\n  `F` runs before another conversion function `G`, ensure that `F` is\n  registered with a smaller priority than `G`.\n\n  Args:\n    base_type: The base type or tuple of base types for all objects that\n      `conversion_func` accepts.\n    conversion_func: A function that converts instances of `base_type` to\n      `Tensor`.\n    priority: Optional integer that indicates the priority for applying this\n      conversion function. Conversion functions with smaller priority values run\n      earlier than conversion functions with larger priority values. Defaults to\n      100.\n\n  Raises:\n    TypeError: If the arguments do not have the appropriate type.\n  "},{name:"repeat",path:"./tf/repeat.md",desc:"Repeat elements of `input`.",type:"Functions",docs:`Repeat elements of \`input\`.

  See also \`tf.concat\`, \`tf.stack\`, \`tf.tile\`.

  Args:
    input: An \`N\`-dimensional Tensor.
    repeats: An 1-D \`int\` Tensor. The number of repetitions for each element.
      repeats is broadcasted to fit the shape of the given axis. \`len(repeats)\`
      must equal \`input.shape[axis]\` if axis is not None.
    axis: An int. The axis along which to repeat values. By default (axis=None),
      use the flattened input array, and return a flat output array.
    name: A name for the operation.

  Returns:
    A Tensor which has the same shape as \`input\`, except along the given axis.
      If axis is None then the output array is flattened to match the flattened
      input array.

  Example usage:

  >>> repeat(['a', 'b', 'c'], repeats=[3, 0, 2], axis=0)
  <tf.Tensor: shape=(5,), dtype=string,
  numpy=array([b'a', b'a', b'a', b'c', b'c'], dtype=object)>

  >>> repeat([[1, 2], [3, 4]], repeats=[2, 3], axis=0)
  <tf.Tensor: shape=(5, 2), dtype=int32, numpy=
  array([[1, 2],
         [1, 2],
         [3, 4],
         [3, 4],
         [3, 4]], dtype=int32)>

  >>> repeat([[1, 2], [3, 4]], repeats=[2, 3], axis=1)
  <tf.Tensor: shape=(2, 5), dtype=int32, numpy=
  array([[1, 1, 2, 2, 2],
         [3, 3, 4, 4, 4]], dtype=int32)>

  >>> repeat(3, repeats=4)
  <tf.Tensor: shape=(4,), dtype=int32, numpy=array([3, 3, 3, 3], dtype=int32)>

  >>> repeat([[1,2], [3,4]], repeats=2)
  <tf.Tensor: shape=(8,), dtype=int32,
  numpy=array([1, 1, 2, 2, 3, 3, 4, 4], dtype=int32)>

  `},{name:"required_space_to_batch_paddings",path:"./tf/required_space_to_batch_paddings.md",desc:"Calculate padding required to make block_shape divide input_shape.",type:"Functions",docs:`Calculate padding required to make block_shape divide input_shape.

  This function can be used to calculate a suitable paddings argument for use
  with space_to_batch_nd and batch_to_space_nd.

  Args:
    input_shape: int32 Tensor of shape [N].
    block_shape: int32 Tensor of shape [N].
    base_paddings: Optional int32 Tensor of shape [N, 2].  Specifies the minimum
      amount of padding to use.  All elements must be >= 0.  If not specified,
      defaults to 0.
    name: string.  Optional name prefix.

  Returns:
    (paddings, crops), where:

    \`paddings\` and \`crops\` are int32 Tensors of rank 2 and shape [N, 2]
    satisfying:

        paddings[i, 0] = base_paddings[i, 0].
        0 <= paddings[i, 1] - base_paddings[i, 1] < block_shape[i]
        (input_shape[i] + paddings[i, 0] + paddings[i, 1]) % block_shape[i] == 0

        crops[i, 0] = 0
        crops[i, 1] = paddings[i, 1] - base_paddings[i, 1]

  Raises: ValueError if called with incompatible shapes.
  `},{name:"reshape",path:"./tf/reshape.md",desc:"Reshapes a tensor.",type:"Functions",docs:`Reshapes a tensor.

  Given \`tensor\`, this operation returns a new \`tf.Tensor\` that has the same
  values as \`tensor\` in the same order, except with a new shape given by
  \`shape\`.

  >>> t1 = [[1, 2, 3],
  ...       [4, 5, 6]]
  >>> print(tf.shape(t1).numpy())
  [2 3]
  >>> t2 = tf.reshape(t1, [6])
  >>> t2
  <tf.Tensor: shape=(6,), dtype=int32,
    numpy=array([1, 2, 3, 4, 5, 6], dtype=int32)>
  >>> tf.reshape(t2, [3, 2])
  <tf.Tensor: shape=(3, 2), dtype=int32, numpy=
    array([[1, 2],
           [3, 4],
           [5, 6]], dtype=int32)>

  The \`tf.reshape\` does not change the order of or the total number of elements
  in the tensor, and so it can reuse the underlying data buffer. This makes it
  a fast operation independent of how big of a tensor it is operating on.

  >>> tf.reshape([1, 2, 3], [2, 2])
  Traceback (most recent call last):
  ...
  InvalidArgumentError: Input to reshape is a tensor with 3 values, but the
  requested shape has 4

  To instead reorder the data to rearrange the dimensions of a tensor, see
  \`tf.transpose\`.

  >>> t = [[1, 2, 3],
  ...      [4, 5, 6]]
  >>> tf.reshape(t, [3, 2]).numpy()
  array([[1, 2],
         [3, 4],
         [5, 6]], dtype=int32)
  >>> tf.transpose(t, perm=[1, 0]).numpy()
  array([[1, 4],
         [2, 5],
         [3, 6]], dtype=int32)

  If one component of \`shape\` is the special value -1, the size of that
  dimension is computed so that the total size remains constant.  In particular,
  a \`shape\` of \`[-1]\` flattens into 1-D.  At most one component of \`shape\` can
  be -1.

  >>> t = [[1, 2, 3],
  ...      [4, 5, 6]]
  >>> tf.reshape(t, [-1])
  <tf.Tensor: shape=(6,), dtype=int32,
    numpy=array([1, 2, 3, 4, 5, 6], dtype=int32)>
  >>> tf.reshape(t, [3, -1])
  <tf.Tensor: shape=(3, 2), dtype=int32, numpy=
    array([[1, 2],
           [3, 4],
           [5, 6]], dtype=int32)>
  >>> tf.reshape(t, [-1, 2])
  <tf.Tensor: shape=(3, 2), dtype=int32, numpy=
    array([[1, 2],
           [3, 4],
           [5, 6]], dtype=int32)>

  \`tf.reshape(t, [])\` reshapes a tensor \`t\` with one element to a scalar.

  >>> tf.reshape([7], []).numpy()
  7

  More examples:

  >>> t = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  >>> print(tf.shape(t).numpy())
  [9]
  >>> tf.reshape(t, [3, 3])
  <tf.Tensor: shape=(3, 3), dtype=int32, numpy=
    array([[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]], dtype=int32)>

  >>> t = [[[1, 1], [2, 2]],
  ...      [[3, 3], [4, 4]]]
  >>> print(tf.shape(t).numpy())
  [2 2 2]
  >>> tf.reshape(t, [2, 4])
  <tf.Tensor: shape=(2, 4), dtype=int32, numpy=
    array([[1, 1, 2, 2],
           [3, 3, 4, 4]], dtype=int32)>

  >>> t = [[[1, 1, 1],
  ...       [2, 2, 2]],
  ...      [[3, 3, 3],
  ...       [4, 4, 4]],
  ...      [[5, 5, 5],
  ...       [6, 6, 6]]]
  >>> print(tf.shape(t).numpy())
  [3 2 3]
  >>> # Pass '[-1]' to flatten 't'.
  >>> tf.reshape(t, [-1])
  <tf.Tensor: shape=(18,), dtype=int32,
    numpy=array([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    dtype=int32)>
  >>> # -- Using -1 to infer the shape --
  >>> # Here -1 is inferred to be 9:
  >>> tf.reshape(t, [2, -1])
  <tf.Tensor: shape=(2, 9), dtype=int32, numpy=
    array([[1, 1, 1, 2, 2, 2, 3, 3, 3],
           [4, 4, 4, 5, 5, 5, 6, 6, 6]], dtype=int32)>
  >>> # -1 is inferred to be 2:
  >>> tf.reshape(t, [-1, 9])
  <tf.Tensor: shape=(2, 9), dtype=int32, numpy=
    array([[1, 1, 1, 2, 2, 2, 3, 3, 3],
           [4, 4, 4, 5, 5, 5, 6, 6, 6]], dtype=int32)>
  >>> # -1 is inferred to be 3:
  >>> tf.reshape(t, [ 2, -1, 3])
  <tf.Tensor: shape=(2, 3, 3), dtype=int32, numpy=
    array([[[1, 1, 1],
            [2, 2, 2],
            [3, 3, 3]],
           [[4, 4, 4],
            [5, 5, 5],
            [6, 6, 6]]], dtype=int32)>

  Args:
    tensor: A \`Tensor\`.
    shape: A \`Tensor\`. Must be one of the following types: \`int32\`, \`int64\`.
      Defines the shape of the output tensor.
    name: Optional string. A name for the operation.

  Returns:
    A \`Tensor\`. Has the same type as \`tensor\`.
  `},{name:"reverse",path:"./tf/reverse.md",desc:"Reverses specific dimensions of a tensor.",type:"Functions",docs:"Reverses specific dimensions of a tensor.\n\n  Given a `tensor`, and a `int32` tensor `axis` representing the set of\n  dimensions of `tensor` to reverse. This operation reverses each dimension\n  `i` for which there exists `j` s.t. `axis[j] == i`.\n\n  `tensor` can have up to 8 dimensions. The number of dimensions specified\n  in `axis` may be 0 or more entries. If an index is specified more than\n  once, a InvalidArgument error is raised.\n\n  For example:\n\n  ```\n  # tensor 't' is [[[[ 0,  1,  2,  3],\n  #                  [ 4,  5,  6,  7],\n  #                  [ 8,  9, 10, 11]],\n  #                 [[12, 13, 14, 15],\n  #                  [16, 17, 18, 19],\n  #                  [20, 21, 22, 23]]]]\n  # tensor 't' shape is [1, 2, 3, 4]\n\n  # 'dims' is [3] or 'dims' is [-1]\n  reverse(t, dims) ==> [[[[ 3,  2,  1,  0],\n                          [ 7,  6,  5,  4],\n                          [ 11, 10, 9, 8]],\n                         [[15, 14, 13, 12],\n                          [19, 18, 17, 16],\n                          [23, 22, 21, 20]]]]\n\n  # 'dims' is '[1]' (or 'dims' is '[-3]')\n  reverse(t, dims) ==> [[[[12, 13, 14, 15],\n                          [16, 17, 18, 19],\n                          [20, 21, 22, 23]\n                         [[ 0,  1,  2,  3],\n                          [ 4,  5,  6,  7],\n                          [ 8,  9, 10, 11]]]]\n\n  # 'dims' is '[2]' (or 'dims' is '[-2]')\n  reverse(t, dims) ==> [[[[8, 9, 10, 11],\n                          [4, 5, 6, 7],\n                          [0, 1, 2, 3]]\n                         [[20, 21, 22, 23],\n                          [16, 17, 18, 19],\n                          [12, 13, 14, 15]]]]\n  ```\n\n  Args:\n    tensor: A `Tensor`. Must be one of the following types: `uint8`, `int8`, `uint16`, `int16`, `int32`, `uint32`, `int64`, `uint64`, `bool`, `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`, `string`.\n      Up to 8-D.\n    axis: A `Tensor`. Must be one of the following types: `int32`, `int64`.\n      1-D. The indices of the dimensions to reverse. Must be in the range\n      `[-rank(tensor), rank(tensor))`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `tensor`.\n  "},{name:"reverse_sequence",path:"./tf/reverse_sequence.md",desc:"Reverses variable length slices.",type:"Functions",docs:"Reverses variable length slices.\n\n  This op first slices `input` along the dimension `batch_axis`, and for\n  each slice `i`, reverses the first `seq_lengths[i]` elements along the\n  dimension `seq_axis`.\n\n  The elements of `seq_lengths` must obey `seq_lengths[i] <=\n  input.dims[seq_axis]`, and `seq_lengths` must be a vector of length\n  `input.dims[batch_axis]`.\n\n  The output slice `i` along dimension `batch_axis` is then given by\n  input slice `i`, with the first `seq_lengths[i]` slices along\n  dimension `seq_axis` reversed.\n\n  Example usage:\n\n  >>> seq_lengths = [7, 2, 3, 5]\n  >>> input = [[1, 2, 3, 4, 5, 0, 0, 0], [1, 2, 0, 0, 0, 0, 0, 0],\n  ...          [1, 2, 3, 4, 0, 0, 0, 0], [1, 2, 3, 4, 5, 6, 7, 8]]\n  >>> output = tf.reverse_sequence(input, seq_lengths, seq_axis=1, batch_axis=0)\n  >>> output\n  <tf.Tensor: shape=(4, 8), dtype=int32, numpy=\n  array([[0, 0, 5, 4, 3, 2, 1, 0],\n         [2, 1, 0, 0, 0, 0, 0, 0],\n         [3, 2, 1, 4, 0, 0, 0, 0],\n         [5, 4, 3, 2, 1, 6, 7, 8]], dtype=int32)>\n\n  Args:\n    input: A `Tensor`. The input to reverse.\n    seq_lengths: A `Tensor`. Must be one of the following types: `int32`,\n      `int64`. 1-D with length `input.dims(batch_axis)` and `max(seq_lengths) <=\n      input.dims(seq_axis)`\n    seq_axis: An `int`. The dimension which is partially reversed.\n    batch_axis: An optional `int`. Defaults to `0`. The dimension along which\n      reversal is performed.\n    name: A name for the operation (optional).\n\n  Returns:\n    A Tensor. Has the same type as input.\n  "},{name:"roll",path:"./tf/roll.md",desc:"Rolls the elements of a tensor along an axis.",type:"Functions",docs:`Rolls the elements of a tensor along an axis.

  The elements are shifted positively (towards larger indices) by the offset of
  \`shift\` along the dimension of \`axis\`. Negative \`shift\` values will shift
  elements in the opposite direction. Elements that roll passed the last position
  will wrap around to the first and vice versa. Multiple shifts along multiple
  axes may be specified.

  For example:

  \`\`\`
  # 't' is [0, 1, 2, 3, 4]
  roll(t, shift=2, axis=0) ==> [3, 4, 0, 1, 2]

  # shifting along multiple dimensions
  # 't' is [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]
  roll(t, shift=[1, -2], axis=[0, 1]) ==> [[7, 8, 9, 5, 6], [2, 3, 4, 0, 1]]

  # shifting along the same axis multiple times
  # 't' is [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]
  roll(t, shift=[2, -3], axis=[1, 1]) ==> [[1, 2, 3, 4, 0], [6, 7, 8, 9, 5]]
  \`\`\`

  Args:
    input: A \`Tensor\`.
    shift: A \`Tensor\`. Must be one of the following types: \`int32\`, \`int64\`.
      Dimension must be 0-D or 1-D. \`shift[i]\` specifies the number of places by which
      elements are shifted positively (towards larger indices) along the dimension
      specified by \`axis[i]\`. Negative shifts will roll the elements in the opposite
      direction.
    axis: A \`Tensor\`. Must be one of the following types: \`int32\`, \`int64\`.
      Dimension must be 0-D or 1-D. \`axis[i]\` specifies the dimension that the shift
      \`shift[i]\` should occur. If the same axis is referenced more than once, the
      total shift for that axis will be the sum of all the shifts that belong to that
      axis.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`input\`.
  `},{name:"round",path:"./tf/math/round.md",desc:"Rounds the values of a tensor to the nearest integer, element-wise.",type:"Functions",docs:"Rounds the values of a tensor to the nearest integer, element-wise.\n\n  Rounds half to even.  Also known as bankers rounding. If you want to round\n  according to the current system rounding mode use tf::cint.\n  For example:\n\n  ```python\n  x = tf.constant([0.9, 2.5, 2.3, 1.5, -4.5])\n  tf.round(x)  # [ 1.0, 2.0, 2.0, 2.0, -4.0 ]\n  ```\n\n  Args:\n    x: A `Tensor` of type `float16`, `float32`, `float64`, `int32`, or `int64`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` of same shape and type as `x`.\n  "},{name:"saturate_cast",path:"./tf/dtypes/saturate_cast.md",desc:"Performs a safe saturating cast of `value` to `dtype`.",type:"Functions",docs:"Performs a safe saturating cast of `value` to `dtype`.\n\n  This function casts the input to `dtype` without applying any scaling.  If\n  there is a danger that values would over or underflow in the cast, this op\n  applies the appropriate clamping before the cast.\n\n  Args:\n    value: A `Tensor`.\n    dtype: The desired output `DType`.\n    name: A name for the operation (optional).\n\n  Returns:\n    `value` safely cast to `dtype`.\n  "},{name:"scalar_mul",path:"./tf/math/scalar_mul.md",desc:"Multiplies a scalar times a `Tensor` or `IndexedSlices` object.",type:"Functions",docs:"Multiplies a scalar times a `Tensor` or `IndexedSlices` object.\n\n  This is a special case of `tf.math.multiply`, where the first value must be a\n  `scalar`. Unlike the general form of `tf.math.multiply`, this is operation is\n  guaranteed to be efficient for `tf.IndexedSlices`.\n\n  >>> x = tf.reshape(tf.range(30, dtype=tf.float32), [10, 3])\n  >>> with tf.GradientTape() as g:\n  ...   g.watch(x)\n  ...   y = tf.gather(x, [1, 2])  # IndexedSlices\n  ...   z = tf.math.scalar_mul(10.0, y)\n\n  Args:\n    scalar: A 0-D scalar `Tensor`. Must have known shape.\n    x: A `Tensor` or `IndexedSlices` to be scaled.\n    name: A name for the operation (optional).\n\n  Returns:\n    `scalar * x` of the same type (`Tensor` or `IndexedSlices`) as `x`.\n\n  Raises:\n    ValueError: if scalar is not a 0-D `scalar`.\n  "},{name:"scan",path:"./tf/scan.md",desc:"scan on the list of tensors unpacked from `elems` on dimension 0. (deprecated argument values",type:"Functions",docs:"scan on the list of tensors unpacked from `elems` on dimension 0. (deprecated argument values)\n\nDeprecated: SOME ARGUMENT VALUES ARE DEPRECATED: `(back_prop=False)`. They will be removed in a future version.\nInstructions for updating:\nback_prop=False is deprecated. Consider using tf.stop_gradient instead.\nInstead of:\nresults = tf.scan(fn, elems, back_prop=False)\nUse:\nresults = tf.nest.map_structure(tf.stop_gradient, tf.scan(fn, elems))\n\nThe simplest version of `scan` repeatedly applies the callable `fn` to a\nsequence of elements from first to last. The elements are made of the tensors\nunpacked from `elems` on dimension 0. The callable fn takes two tensors as\narguments. The first argument is the accumulated value computed from the\npreceding invocation of fn, and the second is the value at the current\nposition of `elems`. If `initializer` is None, `elems` must contain at least\none element, and its first element is used as the initializer.\n\nSuppose that `elems` is unpacked into `values`, a list of tensors. The shape\nof the result tensor is `[len(values)] + fn(initializer, values[0]).shape`.\nIf reverse=True, it's fn(initializer, values[-1]).shape.\n\nThis method also allows multi-arity `elems` and accumulator.  If `elems`\nis a (possibly nested) list or tuple of tensors, then each of these tensors\nmust have a matching first (unpack) dimension.  The second argument of\n`fn` must match the structure of `elems`.\n\nIf no `initializer` is provided, the output structure and dtypes of `fn`\nare assumed to be the same as its input; and in this case, the first\nargument of `fn` must match the structure of `elems`.\n\nIf an `initializer` is provided, then the output of `fn` must have the same\nstructure as `initializer`; and the first argument of `fn` must match\nthis structure.\n\nFor example, if `elems` is `(t1, [t2, t3])` and `initializer` is\n`[i1, i2]` then an appropriate signature for `fn` in `python2` is:\n`fn = lambda (acc_p1, acc_p2), (t1, [t2, t3]):` and `fn` must return a list,\n`[acc_n1, acc_n2]`.  An alternative correct signature for `fn`, and the\n one that works in `python3`, is:\n`fn = lambda a, t:`, where `a` and `t` correspond to the input tuples.\n\nArgs:\n  fn: The callable to be performed.  It accepts two arguments.  The first will\n    have the same structure as `initializer` if one is provided, otherwise it\n    will have the same structure as `elems`.  The second will have the same\n    (possibly nested) structure as `elems`.  Its output must have the same\n    structure as `initializer` if one is provided, otherwise it must have the\n    same structure as `elems`.\n  elems: A tensor or (possibly nested) sequence of tensors, each of which will\n    be unpacked along their first dimension.  The nested sequence of the\n    resulting slices will be the first argument to `fn`.\n  initializer: (optional) A tensor or (possibly nested) sequence of tensors,\n    initial value for the accumulator, and the expected output type of `fn`.\n  parallel_iterations: (optional) The number of iterations allowed to run in\n    parallel.\n  back_prop: (optional) Deprecated. False disables support for back\n    propagation. Prefer using `tf.stop_gradient` instead.\n  swap_memory: (optional) True enables GPU-CPU memory swapping.\n  infer_shape: (optional) False disables tests for consistent output shapes.\n  reverse: (optional) True scans the tensor last to first (instead of first to\n    last).\n  name: (optional) Name prefix for the returned tensors.\n\nReturns:\n  A tensor or (possibly nested) sequence of tensors.  Each tensor packs the\n  results of applying `fn` to tensors unpacked from `elems` along the first\n  dimension, and the previous accumulator value(s), from first to last (or\n  last to first, if `reverse=True`).\n\nRaises:\n  TypeError: if `fn` is not callable or the structure of the output of\n    `fn` and `initializer` do not match.\n  ValueError: if the lengths of the output of `fn` and `initializer`\n    do not match.\n\nExamples:\n  ```python\n  elems = np.array([1, 2, 3, 4, 5, 6])\n  sum = scan(lambda a, x: a + x, elems)\n  # sum == [1, 3, 6, 10, 15, 21]\n  sum = scan(lambda a, x: a + x, elems, reverse=True)\n  # sum == [21, 20, 18, 15, 11, 6]\n  ```\n\n  ```python\n  elems = np.array([1, 2, 3, 4, 5, 6])\n  initializer = np.array(0)\n  sum_one = scan(\n      lambda a, x: x[0] - x[1] + a, (elems + 1, elems), initializer)\n  # sum_one == [1, 2, 3, 4, 5, 6]\n  ```\n\n  ```python\n  elems = np.array([1, 0, 0, 0, 0, 0])\n  initializer = (np.array(0), np.array(1))\n  fibonaccis = scan(lambda a, _: (a[1], a[0] + a[1]), elems, initializer)\n  # fibonaccis == ([1, 1, 2, 3, 5, 8], [1, 2, 3, 5, 8, 13])\n  ```"},{name:"scatter_nd",path:"./tf/scatter_nd.md",desc:"Scatters `updates` into a tensor of shape `shape` according to `indices`.",type:"Functions",docs:`Scatters \`updates\` into a tensor of shape \`shape\` according to \`indices\`.

  Update the input tensor by scattering sparse \`updates\` according to individual values at the specified \`indices\`.
  This op returns an \`output\` tensor with the \`shape\` you specify. This op is the
  inverse of the \`tf.gather_nd\` operator which extracts values or slices from a
  given tensor.

  This operation is similar to \`tf.tensor_scatter_nd_add\`, except that the tensor
  is zero-initialized. Calling \`tf.scatter_nd(indices, values, shape)\`
  is identical to calling
  \`tf.tensor_scatter_nd_add(tf.zeros(shape, values.dtype), indices, values)\`

  If \`indices\` contains duplicates, the duplicate \`values\` are accumulated
  (summed).

  **WARNING**: The order in which updates are applied is nondeterministic, so the
  output will be nondeterministic if \`indices\` contains duplicates;
  numbers summed in different order may yield different results because of some
  numerical approximation issues.

  \`indices\` is an integer tensor of shape \`shape\`. The last dimension
  of \`indices\` can be at most the rank of \`shape\`:

      indices.shape[-1] <= shape.rank

  The last dimension of \`indices\` corresponds to indices of elements
  (if \`indices.shape[-1] = shape.rank\`) or slices
  (if \`indices.shape[-1] < shape.rank\`) along dimension \`indices.shape[-1]\` of
  \`shape\`.

  \`updates\` is a tensor with shape:

      indices.shape[:-1] + shape[indices.shape[-1]:]

  The simplest form of the scatter op is to insert individual elements in
  a tensor by index. Consider an example where you want to insert 4 scattered
  elements in a rank-1 tensor with 8 elements.

  <div style="width:70%; margin:auto; margin-bottom:10px; margin-top:20px;">
  <img style="width:100%" src="https://www.tensorflow.org/images/ScatterNd1.png" alt>
  </div>

  In Python, this scatter operation would look like this:

  \`\`\`python
      indices = tf.constant([[4], [3], [1], [7]])
      updates = tf.constant([9, 10, 11, 12])
      shape = tf.constant([8])
      scatter = tf.scatter_nd(indices, updates, shape)
      print(scatter)
  \`\`\`

  The resulting tensor would look like this:

      [0, 11, 0, 10, 9, 0, 0, 12]

  You can also insert entire slices of a higher rank tensor all at once. For
  example, you can insert two slices in the first dimension of a rank-3 tensor
  with two matrices of new values.

  <div style="width:70%; margin:auto; margin-bottom:10px; margin-top:20px;">
  <img style="width:100%" src="https://www.tensorflow.org/images/ScatterNd2.png" alt>
  </div>

  In Python, this scatter operation would look like this:

  \`\`\`python
      indices = tf.constant([[0], [2]])
      updates = tf.constant([[[5, 5, 5, 5], [6, 6, 6, 6],
                              [7, 7, 7, 7], [8, 8, 8, 8]],
                             [[5, 5, 5, 5], [6, 6, 6, 6],
                              [7, 7, 7, 7], [8, 8, 8, 8]]])
      shape = tf.constant([4, 4, 4])
      scatter = tf.scatter_nd(indices, updates, shape)
      print(scatter)
  \`\`\`

  The resulting tensor would look like this:

      [[[5, 5, 5, 5], [6, 6, 6, 6], [7, 7, 7, 7], [8, 8, 8, 8]],
       [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
       [[5, 5, 5, 5], [6, 6, 6, 6], [7, 7, 7, 7], [8, 8, 8, 8]],
       [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]]

  Note that on CPU, if an out of bound index is found, an error is returned.
  On GPU, if an out of bound index is found, the index is ignored.

  Args:
    indices: A \`Tensor\`. Must be one of the following types: \`int16\`, \`int32\`, \`int64\`.
      Tensor of indices.
    updates: A \`Tensor\`. Values to scatter into the output tensor.
    shape: A \`Tensor\`. Must have the same type as \`indices\`.
      1-D. The shape of the output tensor.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`updates\`.
  `},{name:"searchsorted",path:"./tf/searchsorted.md",desc:"Searches for where a value would go in a sorted sequence.",type:"Functions",docs:`Searches for where a value would go in a sorted sequence.

  This is not a method for checking containment (like python \`in\`).

  The typical use case for this operation is "binning", "bucketing", or
  "discretizing". The \`values\` are assigned to bucket-indices based on the
  **edges** listed in \`sorted_sequence\`. This operation
  returns the bucket-index for each value.

  >>> edges = [-1, 3.3, 9.1, 10.0]
  >>> values = [0.0, 4.1, 12.0]
  >>> tf.searchsorted(edges, values).numpy()
  array([1, 2, 4], dtype=int32)

  The \`side\` argument controls which index is returned if a value lands exactly
  on an edge:

  >>> seq = [0, 3, 9, 10, 10]
  >>> values = [0, 4, 10]
  >>> tf.searchsorted(seq, values).numpy()
  array([0, 2, 3], dtype=int32)
  >>> tf.searchsorted(seq, values, side="right").numpy()
  array([1, 2, 5], dtype=int32)

  The \`axis\` is not settable for this operation. It always operates on the
  innermost dimension (\`axis=-1\`). The operation will accept any number of
  outer dimensions. Here it is applied to the rows of a matrix:

  >>> sorted_sequence = [[0., 3., 8., 9., 10.],
  ...                    [1., 2., 3., 4., 5.]]
  >>> values = [[9.8, 2.1, 4.3],
  ...           [0.1, 6.6, 4.5, ]]
  >>> tf.searchsorted(sorted_sequence, values).numpy()
  array([[4, 1, 2],
         [0, 5, 4]], dtype=int32)

  Note: This operation assumes that \`sorted_sequence\` **is sorted** along the
  innermost axis, maybe using \`tf.sort(..., axis=-1)\`. **If the sequence is not
  sorted no error is raised** and the content of the returned tensor is not well
  defined.

  Args:
    sorted_sequence: N-D \`Tensor\` containing a sorted sequence.
    values: N-D \`Tensor\` containing the search values.
    side: 'left' or 'right'; 'left' corresponds to lower_bound and 'right' to
      upper_bound.
    out_type: The output type (\`int32\` or \`int64\`).  Default is \`tf.int32\`.
    name: Optional name for the operation.

  Returns:
    An N-D \`Tensor\` the size of \`values\` containing the result of applying
    either lower_bound or upper_bound (depending on side) to each value.  The
    result is not a global index to the entire \`Tensor\`, but the index in the
    last dimension.

  Raises:
    ValueError: If the last dimension of \`sorted_sequence >= 2^31-1\` elements.
                If the total size of \`values\` exceeds \`2^31 - 1\` elements.
                If the first \`N-1\` dimensions of the two tensors don't match.
  `},{name:"sequence_mask",path:"./tf/sequence_mask.md",desc:"Returns a mask tensor representing the first N positions of each cell.",type:"Functions",docs:`Returns a mask tensor representing the first N positions of each cell.

  If \`lengths\` has shape \`[d_1, d_2, ..., d_n]\` the resulting tensor \`mask\` has
  dtype \`dtype\` and shape \`[d_1, d_2, ..., d_n, maxlen]\`, with

  \`\`\`
  mask[i_1, i_2, ..., i_n, j] = (j < lengths[i_1, i_2, ..., i_n])
  \`\`\`

  Examples:

  \`\`\`python
  tf.sequence_mask([1, 3, 2], 5)  # [[True, False, False, False, False],
                                  #  [True, True, True, False, False],
                                  #  [True, True, False, False, False]]

  tf.sequence_mask([[1, 3],[2,0]])  # [[[True, False, False],
                                    #   [True, True, True]],
                                    #  [[True, True, False],
                                    #   [False, False, False]]]
  \`\`\`

  Args:
    lengths: integer tensor, all its values <= maxlen.
    maxlen: scalar integer tensor, size of last dimension of returned tensor.
      Default is the maximum value in \`lengths\`.
    dtype: output type of the resulting tensor.
    name: name of the op.

  Returns:
    A mask tensor of shape \`lengths.shape + (maxlen,)\`, cast to specified dtype.
  Raises:
    ValueError: if \`maxlen\` is not a scalar.
  `},{name:"shape",path:"./tf/shape.md",desc:"Returns a tensor containing the shape of the input tensor.",type:"Functions",docs:`Returns a tensor containing the shape of the input tensor.

  See also \`tf.size\`, \`tf.rank\`.

  \`tf.shape\` returns a 1-D integer tensor representing the shape of \`input\`.
  For a scalar input, the tensor returned has a shape of (0,) and its value is
  the empty vector (i.e. []).

  For example:

  >>> tf.shape(1.)
  <tf.Tensor: shape=(0,), dtype=int32, numpy=array([], dtype=int32)>

  >>> t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])
  >>> tf.shape(t)
  <tf.Tensor: shape=(3,), dtype=int32, numpy=array([2, 2, 3], dtype=int32)>

  Note: When using symbolic tensors, such as when using the Keras API,
  tf.shape() will return the shape of the symbolic tensor.

  >>> a = tf.keras.layers.Input((None, 10))
  >>> tf.shape(a)
  <... shape=(3,) dtype=int32...>

  In these cases, using \`tf.Tensor.shape\` will return more informative results.

  >>> a.shape
  TensorShape([None, None, 10])

  (The first \`None\` represents the as yet unknown batch size.)

  \`tf.shape\` and \`Tensor.shape\` should be identical in eager mode.  Within
  \`tf.function\` or within a \`compat.v1\` context, not all dimensions may be
  known until execution time. Hence when defining custom layers and models
  for graph mode, prefer the dynamic \`tf.shape(x)\` over the static \`x.shape\`.

  Args:
    input: A \`Tensor\` or \`SparseTensor\`.
    out_type: (Optional) The specified output type of the operation (\`int32\` or
      \`int64\`). Defaults to \`tf.int32\`.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\` of type \`out_type\`.
  `},{name:"shape_n",path:"./tf/shape_n.md",desc:"Returns shape of tensors.",type:"Functions",docs:"Returns shape of tensors.\n\n  Args:\n    input: A list of at least 1 `Tensor` object with the same type.\n    out_type: The specified output type of the operation (`int32` or `int64`).\n      Defaults to `tf.int32`(optional).\n    name: A name for the operation (optional).\n\n  Returns:\n    A list with the same length as `input` of `Tensor` objects with\n      type `out_type`.\n  "},{name:"sigmoid",path:"./tf/math/sigmoid.md",desc:"Computes sigmoid of `x` element-wise.",type:"Functions",docs:`Computes sigmoid of \`x\` element-wise.

  Formula for calculating $\\mathrm{sigmoid}(x) = y = 1 / (1 + \\exp(-x))$.

  For $x \\in (-\\infty, \\infty)$, $\\mathrm{sigmoid}(x) \\in (0, 1)$.

  Example Usage:

  If a positive number is large, then its sigmoid will approach to 1 since the
  formula will be \`y = <large_num> / (1 + <large_num>)\`

  >>> x = tf.constant([0.0, 1.0, 50.0, 100.0])
  >>> tf.math.sigmoid(x)
  <tf.Tensor: shape=(4,), dtype=float32,
  numpy=array([0.5, 0.7310586, 1.0, 1.0], dtype=float32)>

  If a negative number is large, its sigmoid will approach to 0 since the
  formula will be \`y = 1 / (1 + <large_num>)\`

  >>> x = tf.constant([-100.0, -50.0, -1.0, 0.0])
  >>> tf.math.sigmoid(x)
  <tf.Tensor: shape=(4,), dtype=float32, numpy=
  array([0.0000000e+00, 1.9287499e-22, 2.6894143e-01, 0.5],
        dtype=float32)>

  Args:
    x: A Tensor with type \`float16\`, \`float32\`, \`float64\`, \`complex64\`, or
      \`complex128\`.
    name: A name for the operation (optional).

  Returns:
    A Tensor with the same type as \`x\`.

  Usage Example:

  >>> x = tf.constant([-128.0, 0.0, 128.0], dtype=tf.float32)
  >>> tf.sigmoid(x)
  <tf.Tensor: shape=(3,), dtype=float32,
  numpy=array([0. , 0.5, 1. ], dtype=float32)>

  @compatibility(scipy)
  Equivalent to scipy.special.expit
  @end_compatibility
  `},{name:"sign",path:"./tf/math/sign.md",desc:"Returns an element-wise indication of the sign of a number.",type:"Functions",docs:`Returns an element-wise indication of the sign of a number.

  \`y = sign(x) = -1 if x < 0; 0 if x == 0; 1 if x > 0\`.

  For complex numbers, \`y = sign(x) = x / |x| if x != 0, otherwise y = 0\`.

  Example usage:

  >>> # real number
  >>> tf.math.sign([0., 2., -3.])
  <tf.Tensor: shape=(3,), dtype=float32,
  numpy=array([ 0.,  1., -1.], dtype=float32)>

  >>> # complex number
  >>> tf.math.sign([1 + 1j, 0 + 0j])
  <tf.Tensor: shape=(2,), dtype=complex128,
  numpy=array([0.70710678+0.70710678j, 0.        +0.j        ])>

  Args:
   x: A Tensor. Must be one of the following types: bfloat16, half, float32,
     float64, int32, int64, complex64, complex128.
   name: A name for the operation (optional).

  Returns:
   A Tensor. Has the same type as x.

   If x is a SparseTensor, returns SparseTensor(x.indices,
     tf.math.sign(x.values, ...), x.dense_shape).

    If \`x\` is a \`SparseTensor\`, returns
    \`SparseTensor(x.indices, tf.math.sign(x.values, ...), x.dense_shape)\``},{name:"sin",path:"./tf/math/sin.md",desc:"Computes sine of x element-wise.",type:"Functions",docs:'Computes sine of x element-wise.\n\n    Given an input tensor, this function computes sine of every\n    element in the tensor. Input range is `(-inf, inf)` and\n    output range is `[-1,1]`.\n\n    ```python\n    x = tf.constant([-float("inf"), -9, -0.5, 1, 1.2, 200, 10, float("inf")])\n    tf.math.sin(x) ==> [nan -0.4121185 -0.47942555 0.84147096 0.9320391 -0.87329733 -0.54402107 nan]\n    ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  '},{name:"sinh",path:"./tf/math/sinh.md",desc:"Computes hyperbolic sine of x element-wise.",type:"Functions",docs:'Computes hyperbolic sine of x element-wise.\n\n    Given an input tensor, this function computes hyperbolic sine of every\n    element in the tensor. Input range is `[-inf,inf]` and output range\n    is `[-inf,inf]`.\n\n    ```python\n    x = tf.constant([-float("inf"), -9, -0.5, 1, 1.2, 2, 10, float("inf")])\n    tf.math.sinh(x) ==> [-inf -4.0515420e+03 -5.2109528e-01 1.1752012e+00 1.5094614e+00 3.6268604e+00 1.1013232e+04 inf]\n    ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  '},{name:"size",path:"./tf/size.md",desc:"Returns the size of a tensor.",type:"Functions",docs:`Returns the size of a tensor.

  See also \`tf.shape\`.

  Returns a 0-D \`Tensor\` representing the number of elements in \`input\`
  of type \`out_type\`. Defaults to tf.int32.

  For example:

  >>> t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])
  >>> tf.size(t)
  <tf.Tensor: shape=(), dtype=int32, numpy=12>

  Args:
    input: A \`Tensor\` or \`SparseTensor\`.
    name: A name for the operation (optional).
    out_type: (Optional) The specified non-quantized numeric output type of the
      operation. Defaults to \`tf.int32\`.

  Returns:
    A \`Tensor\` of type \`out_type\`. Defaults to \`tf.int32\`.

  @compatibility(numpy)
  Equivalent to np.size()
  @end_compatibility
  `},{name:"slice",path:"./tf/slice.md",desc:"Extracts a slice from a tensor.",type:"Functions",docs:"Extracts a slice from a tensor.\n\n  See also `tf.strided_slice`.\n\n  This operation extracts a slice of size `size` from a tensor `input_` starting\n  at the location specified by `begin`. The slice `size` is represented as a\n  tensor shape, where `size[i]` is the number of elements of the 'i'th dimension\n  of `input_` that you want to slice. The starting location (`begin`) for the\n  slice is represented as an offset in each dimension of `input_`. In other\n  words, `begin[i]` is the offset into the i'th dimension of `input_` that you\n  want to slice from.\n\n  Note that `tf.Tensor.__getitem__` is typically a more pythonic way to\n  perform slices, as it allows you to write `foo[3:7, :-2]` instead of\n  `tf.slice(foo, [3, 0], [4, foo.get_shape()[1]-2])`.\n\n  `begin` is zero-based; `size` is one-based. If `size[i]` is -1,\n  all remaining elements in dimension i are included in the\n  slice. In other words, this is equivalent to setting:\n\n  `size[i] = input_.dim_size(i) - begin[i]`\n\n  This operation requires that:\n\n  `0 <= begin[i] <= begin[i] + size[i] <= Di  for i in [0, n]`\n\n  For example:\n\n  ```python\n  t = tf.constant([[[1, 1, 1], [2, 2, 2]],\n                   [[3, 3, 3], [4, 4, 4]],\n                   [[5, 5, 5], [6, 6, 6]]])\n  tf.slice(t, [1, 0, 0], [1, 1, 3])  # [[[3, 3, 3]]]\n  tf.slice(t, [1, 0, 0], [1, 2, 3])  # [[[3, 3, 3],\n                                     #   [4, 4, 4]]]\n  tf.slice(t, [1, 0, 0], [2, 1, 3])  # [[[3, 3, 3]],\n                                     #  [[5, 5, 5]]]\n  ```\n\n  Args:\n    input_: A `Tensor`.\n    begin: An `int32` or `int64` `Tensor`.\n    size: An `int32` or `int64` `Tensor`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` the same type as `input_`.\n  "},{name:"sort",path:"./tf/sort.md",desc:"Sorts a tensor.",type:"Functions",docs:`Sorts a tensor.

  Usage:

  >>> a = [1, 10, 26.9, 2.8, 166.32, 62.3]
  >>> tf.sort(a).numpy()
  array([  1.  ,   2.8 ,  10.  ,  26.9 ,  62.3 , 166.32], dtype=float32)

  >>> tf.sort(a, direction='DESCENDING').numpy()
  array([166.32,  62.3 ,  26.9 ,  10.  ,   2.8 ,   1.  ], dtype=float32)

  For multidimensional inputs you can control which axis the sort is applied
  along. The default \`axis=-1\` sorts the innermost axis.

  >>> mat = [[3,2,1],
  ...        [2,1,3],
  ...        [1,3,2]]
  >>> tf.sort(mat, axis=-1).numpy()
  array([[1, 2, 3],
         [1, 2, 3],
         [1, 2, 3]], dtype=int32)
  >>> tf.sort(mat, axis=0).numpy()
  array([[1, 1, 1],
         [2, 2, 2],
         [3, 3, 3]], dtype=int32)

  See also:

    * \`tf.argsort\`: Like sort, but it returns the sort indices.
    * \`tf.math.top_k\`: A partial sort that returns a fixed number of top values
      and corresponding indices.


  Args:
    values: 1-D or higher **numeric** \`Tensor\`.
    axis: The axis along which to sort. The default is -1, which sorts the last
      axis.
    direction: The direction in which to sort the values (\`'ASCENDING'\` or
      \`'DESCENDING'\`).
    name: Optional name for the operation.

  Returns:
    A \`Tensor\` with the same dtype and shape as \`values\`, with the elements
        sorted along the given \`axis\`.

  Raises:
    tf.errors.InvalidArgumentError: If the \`values.dtype\` is not a \`float\` or
        \`int\` type.
    ValueError: If axis is not a constant scalar, or the direction is invalid.
  `},{name:"space_to_batch",path:"./tf/space_to_batch.md",desc:"SpaceToBatch for N-D tensors of type T.",type:"Functions",docs:'SpaceToBatch for N-D tensors of type T.\n\n  This operation divides "spatial" dimensions `[1, ..., M]` of the input into a\n  grid of blocks of shape `block_shape`, and interleaves these blocks with the\n  "batch" dimension (0) such that in the output, the spatial dimensions\n  `[1, ..., M]` correspond to the position within the grid, and the batch\n  dimension combines both the position within a spatial block and the original\n  batch position.  Prior to division into blocks, the spatial dimensions of the\n  input are optionally zero padded according to `paddings`. See below for a\n  precise description.\n\n  This operation is equivalent to the following steps:\n\n  1. Zero-pad the start and end of dimensions `[1, ..., M]` of the\n     input according to `paddings` to produce `padded` of shape `padded_shape`.\n\n  2. Reshape `padded` to `reshaped_padded` of shape:\n\n       [batch] +\n       [padded_shape[1] / block_shape[0],\n         block_shape[0],\n        ...,\n        padded_shape[M] / block_shape[M-1],\n        block_shape[M-1]] +\n       remaining_shape\n\n  3. Permute dimensions of `reshaped_padded` to produce\n     `permuted_reshaped_padded` of shape:\n\n       block_shape +\n       [batch] +\n       [padded_shape[1] / block_shape[0],\n        ...,\n        padded_shape[M] / block_shape[M-1]] +\n       remaining_shape\n\n  4. Reshape `permuted_reshaped_padded` to flatten `block_shape` into the batch\n     dimension, producing an output tensor of shape:\n\n       [batch * prod(block_shape)] +\n       [padded_shape[1] / block_shape[0],\n        ...,\n        padded_shape[M] / block_shape[M-1]] +\n       remaining_shape\n\n  Some examples:\n\n  (1) For the following input of shape `[1, 2, 2, 1]`, `block_shape = [2, 2]`, and\n      `paddings = [[0, 0], [0, 0]]`:\n\n  ```\n  x = [[[[1], [2]], [[3], [4]]]]\n  ```\n\n  The output tensor has shape `[4, 1, 1, 1]` and value:\n\n  ```\n  [[[[1]]], [[[2]]], [[[3]]], [[[4]]]]\n  ```\n\n  (2) For the following input of shape `[1, 2, 2, 3]`, `block_shape = [2, 2]`, and\n      `paddings = [[0, 0], [0, 0]]`:\n\n  ```\n  x = [[[[1, 2, 3], [4, 5, 6]],\n        [[7, 8, 9], [10, 11, 12]]]]\n  ```\n\n  The output tensor has shape `[4, 1, 1, 3]` and value:\n\n  ```\n  [[[[1, 2, 3]]], [[[4, 5, 6]]], [[[7, 8, 9]]], [[[10, 11, 12]]]]\n  ```\n\n  (3) For the following input of shape `[1, 4, 4, 1]`, `block_shape = [2, 2]`, and\n      `paddings = [[0, 0], [0, 0]]`:\n\n  ```\n  x = [[[[1],   [2],  [3],  [4]],\n        [[5],   [6],  [7],  [8]],\n        [[9],  [10], [11],  [12]],\n        [[13], [14], [15],  [16]]]]\n  ```\n\n  The output tensor has shape `[4, 2, 2, 1]` and value:\n\n  ```\n  x = [[[[1], [3]], [[9], [11]]],\n       [[[2], [4]], [[10], [12]]],\n       [[[5], [7]], [[13], [15]]],\n       [[[6], [8]], [[14], [16]]]]\n  ```\n\n  (4) For the following input of shape `[2, 2, 4, 1]`, block_shape = `[2, 2]`, and\n      paddings = `[[0, 0], [2, 0]]`:\n\n  ```\n  x = [[[[1],   [2],  [3],  [4]],\n        [[5],   [6],  [7],  [8]]],\n       [[[9],  [10], [11],  [12]],\n        [[13], [14], [15],  [16]]]]\n  ```\n\n  The output tensor has shape `[8, 1, 3, 1]` and value:\n\n  ```\n  x = [[[[0], [1], [3]]], [[[0], [9], [11]]],\n       [[[0], [2], [4]]], [[[0], [10], [12]]],\n       [[[0], [5], [7]]], [[[0], [13], [15]]],\n       [[[0], [6], [8]]], [[[0], [14], [16]]]]\n  ```\n\n  Among others, this operation is useful for reducing atrous convolution into\n  regular convolution.\n\n  Args:\n    input: A `Tensor`.\n      N-D with shape `input_shape = [batch] + spatial_shape + remaining_shape`,\n      where spatial_shape has `M` dimensions.\n    block_shape: A `Tensor`. Must be one of the following types: `int32`, `int64`.\n      1-D with shape `[M]`, all values must be >= 1.\n    paddings: A `Tensor`. Must be one of the following types: `int32`, `int64`.\n      2-D with shape `[M, 2]`, all values must be >= 0.\n        `paddings[i] = [pad_start, pad_end]` specifies the padding for input dimension\n        `i + 1`, which corresponds to spatial dimension `i`.  It is required that\n        `block_shape[i]` divides `input_shape[i + 1] + pad_start + pad_end`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `input`.\n  '},{name:"space_to_batch_nd",path:"./tf/space_to_batch_nd.md",desc:"SpaceToBatch for N-D tensors of type T.",type:"Functions",docs:'SpaceToBatch for N-D tensors of type T.\n\n  This operation divides "spatial" dimensions `[1, ..., M]` of the input into a\n  grid of blocks of shape `block_shape`, and interleaves these blocks with the\n  "batch" dimension (0) such that in the output, the spatial dimensions\n  `[1, ..., M]` correspond to the position within the grid, and the batch\n  dimension combines both the position within a spatial block and the original\n  batch position.  Prior to division into blocks, the spatial dimensions of the\n  input are optionally zero padded according to `paddings`. See below for a\n  precise description.\n\n  This operation is equivalent to the following steps:\n\n  1. Zero-pad the start and end of dimensions `[1, ..., M]` of the\n     input according to `paddings` to produce `padded` of shape `padded_shape`.\n\n  2. Reshape `padded` to `reshaped_padded` of shape:\n\n       [batch] +\n       [padded_shape[1] / block_shape[0],\n         block_shape[0],\n        ...,\n        padded_shape[M] / block_shape[M-1],\n        block_shape[M-1]] +\n       remaining_shape\n\n  3. Permute dimensions of `reshaped_padded` to produce\n     `permuted_reshaped_padded` of shape:\n\n       block_shape +\n       [batch] +\n       [padded_shape[1] / block_shape[0],\n        ...,\n        padded_shape[M] / block_shape[M-1]] +\n       remaining_shape\n\n  4. Reshape `permuted_reshaped_padded` to flatten `block_shape` into the batch\n     dimension, producing an output tensor of shape:\n\n       [batch * prod(block_shape)] +\n       [padded_shape[1] / block_shape[0],\n        ...,\n        padded_shape[M] / block_shape[M-1]] +\n       remaining_shape\n\n  Some examples:\n\n  (1) For the following input of shape `[1, 2, 2, 1]`, `block_shape = [2, 2]`, and\n      `paddings = [[0, 0], [0, 0]]`:\n\n  ```\n  x = [[[[1], [2]], [[3], [4]]]]\n  ```\n\n  The output tensor has shape `[4, 1, 1, 1]` and value:\n\n  ```\n  [[[[1]]], [[[2]]], [[[3]]], [[[4]]]]\n  ```\n\n  (2) For the following input of shape `[1, 2, 2, 3]`, `block_shape = [2, 2]`, and\n      `paddings = [[0, 0], [0, 0]]`:\n\n  ```\n  x = [[[[1, 2, 3], [4, 5, 6]],\n        [[7, 8, 9], [10, 11, 12]]]]\n  ```\n\n  The output tensor has shape `[4, 1, 1, 3]` and value:\n\n  ```\n  [[[[1, 2, 3]]], [[[4, 5, 6]]], [[[7, 8, 9]]], [[[10, 11, 12]]]]\n  ```\n\n  (3) For the following input of shape `[1, 4, 4, 1]`, `block_shape = [2, 2]`, and\n      `paddings = [[0, 0], [0, 0]]`:\n\n  ```\n  x = [[[[1],   [2],  [3],  [4]],\n        [[5],   [6],  [7],  [8]],\n        [[9],  [10], [11],  [12]],\n        [[13], [14], [15],  [16]]]]\n  ```\n\n  The output tensor has shape `[4, 2, 2, 1]` and value:\n\n  ```\n  x = [[[[1], [3]], [[9], [11]]],\n       [[[2], [4]], [[10], [12]]],\n       [[[5], [7]], [[13], [15]]],\n       [[[6], [8]], [[14], [16]]]]\n  ```\n\n  (4) For the following input of shape `[2, 2, 4, 1]`, block_shape = `[2, 2]`, and\n      paddings = `[[0, 0], [2, 0]]`:\n\n  ```\n  x = [[[[1],   [2],  [3],  [4]],\n        [[5],   [6],  [7],  [8]]],\n       [[[9],  [10], [11],  [12]],\n        [[13], [14], [15],  [16]]]]\n  ```\n\n  The output tensor has shape `[8, 1, 3, 1]` and value:\n\n  ```\n  x = [[[[0], [1], [3]]], [[[0], [9], [11]]],\n       [[[0], [2], [4]]], [[[0], [10], [12]]],\n       [[[0], [5], [7]]], [[[0], [13], [15]]],\n       [[[0], [6], [8]]], [[[0], [14], [16]]]]\n  ```\n\n  Among others, this operation is useful for reducing atrous convolution into\n  regular convolution.\n\n  Args:\n    input: A `Tensor`.\n      N-D with shape `input_shape = [batch] + spatial_shape + remaining_shape`,\n      where spatial_shape has `M` dimensions.\n    block_shape: A `Tensor`. Must be one of the following types: `int32`, `int64`.\n      1-D with shape `[M]`, all values must be >= 1.\n    paddings: A `Tensor`. Must be one of the following types: `int32`, `int64`.\n      2-D with shape `[M, 2]`, all values must be >= 0.\n        `paddings[i] = [pad_start, pad_end]` specifies the padding for input dimension\n        `i + 1`, which corresponds to spatial dimension `i`.  It is required that\n        `block_shape[i]` divides `input_shape[i + 1] + pad_start + pad_end`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `input`.\n  '},{name:"split",path:"./tf/split.md",desc:"Splits a tensor `value` into a list of sub tensors.",type:"Functions",docs:"Splits a tensor `value` into a list of sub tensors.\n\n  See also `tf.unstack`.\n\n  If `num_or_size_splits` is an `int`,  then it splits `value` along the\n  dimension `axis` into `num_or_size_splits` smaller tensors. This requires that\n  `value.shape[axis]` is divisible by `num_or_size_splits`.\n\n  If `num_or_size_splits` is a 1-D Tensor (or list), then `value` is split into\n  `len(num_or_size_splits)` elements. The shape of the `i`-th\n  element has the same size as the `value` except along dimension `axis` where\n  the size is `num_or_size_splits[i]`.\n\n  For example:\n\n  >>> x = tf.Variable(tf.random.uniform([5, 30], -1, 1))\n  >>>\n  >>> # Split `x` into 3 tensors along dimension 1\n  >>> s0, s1, s2 = tf.split(x, num_or_size_splits=3, axis=1)\n  >>> tf.shape(s0).numpy()\n  array([ 5, 10], dtype=int32)\n  >>>\n  >>> # Split `x` into 3 tensors with sizes [4, 15, 11] along dimension 1\n  >>> split0, split1, split2 = tf.split(x, [4, 15, 11], 1)\n  >>> tf.shape(split0).numpy()\n  array([5, 4], dtype=int32)\n  >>> tf.shape(split1).numpy()\n  array([ 5, 15], dtype=int32)\n  >>> tf.shape(split2).numpy()\n  array([ 5, 11], dtype=int32)\n\n  Args:\n    value: The `Tensor` to split.\n    num_or_size_splits: Either an `int` indicating the number of splits\n      along `axis` or a 1-D integer `Tensor` or Python list containing the sizes\n      of each output tensor along `axis`. If an `int`, then it must evenly\n      divide `value.shape[axis]`; otherwise the sum of sizes along the split\n      axis must match that of the `value`.\n    axis: An `int` or scalar `int32` `Tensor`. The dimension along which\n      to split. Must be in the range `[-rank(value), rank(value))`. Defaults to\n      0.\n    num: Optional, an `int`, used to specify the number of outputs when it\n      cannot be inferred from the shape of `size_splits`.\n    name: A name for the operation (optional).\n\n  Returns:\n    if `num_or_size_splits` is an `int` returns a list of\n    `num_or_size_splits` `Tensor` objects; if `num_or_size_splits` is a 1-D\n    list or 1-D `Tensor` returns `num_or_size_splits.get_shape[0]`\n    `Tensor` objects resulting from splitting `value`.\n\n  Raises:\n    ValueError: If `num` is unspecified and cannot be inferred.\n    ValueError: If `num_or_size_splits` is a scalar `Tensor`.\n  "},{name:"sqrt",path:"./tf/math/sqrt.md",desc:"Computes element-wise square root of the input tensor.",type:"Functions",docs:`Computes element-wise square root of the input tensor.

  Note: This operation does not support integer types.

  >>> x = tf.constant([[4.0], [16.0]])
  >>> tf.sqrt(x)
  <tf.Tensor: shape=(2, 1), dtype=float32, numpy=
    array([[2.],
           [4.]], dtype=float32)>
  >>> y = tf.constant([[-4.0], [16.0]])
  >>> tf.sqrt(y)
  <tf.Tensor: shape=(2, 1), dtype=float32, numpy=
    array([[nan],
           [ 4.]], dtype=float32)>
  >>> z = tf.constant([[-1.0], [16.0]], dtype=tf.complex128)
  >>> tf.sqrt(z)
  <tf.Tensor: shape=(2, 1), dtype=complex128, numpy=
    array([[0.0+1.j],
           [4.0+0.j]])>

  Note: In order to support complex type, please provide an input tensor
  of \`complex64\` or \`complex128\`.

  Args:
    x: A \`tf.Tensor\` of type \`bfloat16\`, \`half\`, \`float32\`, \`float64\`,
      \`complex64\`, \`complex128\`
    name: A name for the operation (optional).

  Returns:
    A \`tf.Tensor\` of same size, type and sparsity as \`x\`.

    If \`x\` is a \`SparseTensor\`, returns
    \`SparseTensor(x.indices, tf.math.sqrt(x.values, ...), x.dense_shape)\``},{name:"square",path:"./tf/math/square.md",desc:"Computes square of x element-wise.",type:"Functions",docs:"Computes square of x element-wise.\n\n  I.e., \\\\(y = x * x = x^2\\\\).\n\n  >>> tf.math.square([-2., 0., 3.])\n  <tf.Tensor: shape=(3,), dtype=float32, numpy=array([4., 0., 9.], dtype=float32)>\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int8`, `int16`, `int32`, `int64`, `uint8`, `uint16`, `uint32`, `uint64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n\n    If `x` is a `SparseTensor`, returns\n    `SparseTensor(x.indices, tf.math.square(x.values, ...), x.dense_shape)`"},{name:"squeeze",path:"./tf/squeeze.md",desc:"Removes dimensions of size 1 from the shape of a tensor.",type:"Functions",docs:"Removes dimensions of size 1 from the shape of a tensor.\n\n  Given a tensor `input`, this operation returns a tensor of the same type with\n  all dimensions of size 1 removed. If you don't want to remove all size 1\n  dimensions, you can remove specific size 1 dimensions by specifying\n  `axis`.\n\n  For example:\n\n  ```python\n  # 't' is a tensor of shape [1, 2, 1, 3, 1, 1]\n  tf.shape(tf.squeeze(t))  # [2, 3]\n  ```\n\n  Or, to remove specific size 1 dimensions:\n\n  ```python\n  # 't' is a tensor of shape [1, 2, 1, 3, 1, 1]\n  tf.shape(tf.squeeze(t, [2, 4]))  # [1, 2, 3, 1]\n  ```\n\n  Unlike the older op `tf.compat.v1.squeeze`, this op does not accept a\n  deprecated `squeeze_dims` argument.\n\n  Note: if `input` is a `tf.RaggedTensor`, then this operation takes `O(N)`\n  time, where `N` is the number of elements in the squeezed dimensions.\n\n  Args:\n    input: A `Tensor`. The `input` to squeeze.\n    axis: An optional list of `ints`. Defaults to `[]`. If specified, only\n      squeezes the dimensions listed. The dimension index starts at 0. It is an\n      error to squeeze a dimension that is not 1. Must be in the range\n      `[-rank(input), rank(input))`. Must be specified if `input` is a\n      `RaggedTensor`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `input`.\n    Contains the same data as `input`, but has one or more dimensions of\n    size 1 removed.\n\n  Raises:\n    ValueError: The input cannot be converted to a tensor, or the specified\n      axis cannot be squeezed.\n  "},{name:"stack",path:"./tf/stack.md",desc:"Stacks a list of rank-`R` tensors into one rank-`(R+1",type:"Functions",docs:"Stacks a list of rank-`R` tensors into one rank-`(R+1)` tensor.\n\n  See also `tf.concat`, `tf.tile`, `tf.repeat`.\n\n  Packs the list of tensors in `values` into a tensor with rank one higher than\n  each tensor in `values`, by packing them along the `axis` dimension.\n  Given a list of length `N` of tensors of shape `(A, B, C)`;\n\n  if `axis == 0` then the `output` tensor will have the shape `(N, A, B, C)`.\n  if `axis == 1` then the `output` tensor will have the shape `(A, N, B, C)`.\n  Etc.\n\n  For example:\n\n  >>> x = tf.constant([1, 4])\n  >>> y = tf.constant([2, 5])\n  >>> z = tf.constant([3, 6])\n  >>> tf.stack([x, y, z])\n  <tf.Tensor: shape=(3, 2), dtype=int32, numpy=\n  array([[1, 4],\n         [2, 5],\n         [3, 6]], dtype=int32)>\n  >>> tf.stack([x, y, z], axis=1)\n  <tf.Tensor: shape=(2, 3), dtype=int32, numpy=\n  array([[1, 2, 3],\n         [4, 5, 6]], dtype=int32)>\n\n  This is the opposite of unstack.  The numpy equivalent is `np.stack`\n\n  >>> np.array_equal(np.stack([x, y, z]), tf.stack([x, y, z]))\n  True\n\n  Args:\n    values: A list of `Tensor` objects with the same shape and type.\n    axis: An `int`. The axis to stack along. Defaults to the first dimension.\n      Negative values wrap around, so the valid range is `[-(R+1), R+1)`.\n    name: A name for this operation (optional).\n\n  Returns:\n    output: A stacked `Tensor` with the same type as `values`.\n\n  Raises:\n    ValueError: If `axis` is out of the range [-(R+1), R+1).\n  "},{name:"stop_gradient",path:"./tf/stop_gradient.md",desc:"Stops gradient computation.",type:"Functions",docs:`Stops gradient computation.

  When executed in a graph, this op outputs its input tensor as-is.

  When building ops to compute gradients, this op prevents the contribution of
  its inputs to be taken into account.  Normally, the gradient generator adds ops
  to a graph to compute the derivatives of a specified 'loss' by recursively
  finding out inputs that contributed to its computation.  If you insert this op
  in the graph it inputs are masked from the gradient generator.  They are not
  taken into account for computing gradients.

  This is useful any time you want to compute a value with TensorFlow but need
  to pretend that the value was a constant. For example, the softmax function
  for a vector x can be written as

  \`\`\`python

    def softmax(x):
      numerator = tf.exp(x)
      denominator = tf.reduce_sum(numerator)
      return numerator / denominator
  \`\`\`

  This however is susceptible to overflow if the values in x are large. An
  alternative more stable way is to subtract the maximum of x from each of the
  values.

  \`\`\`python

    def stable_softmax(x):
      z = x - tf.reduce_max(x)
      numerator = tf.exp(z)
      denominator = tf.reduce_sum(numerator)
      return numerator / denominator
  \`\`\`

  However, when we backprop through the softmax to x, we dont want to backprop
  through the \`tf.reduce_max(x)\` (if the max values are not unique then the
  gradient could flow to the wrong input) calculation and treat that as a
  constant. Therefore, we should write this out as

  \`\`\`python

    def stable_softmax(x):
      z = x - tf.stop_gradient(tf.reduce_max(x))
      numerator = tf.exp(z)
      denominator = tf.reduce_sum(numerator)
      return numerator / denominator
  \`\`\`

  Some other examples include:

  *  The *EM* algorithm where the *M-step* should not involve backpropagation
     through the output of the *E-step*.
  *  Contrastive divergence training of Boltzmann machines where, when
     differentiating the energy function, the training must not backpropagate
     through the graph that generated the samples from the model.
  *  Adversarial training, where no backprop should happen through the adversarial
     example generation process.

  Args:
    input: A \`Tensor\`.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`input\`.
  `},{name:"strided_slice",path:"./tf/strided_slice.md",desc:"Extracts a strided slice of a tensor (generalized Python array indexing",type:"Functions",docs:"Extracts a strided slice of a tensor (generalized Python array indexing).\n\n  See also `tf.slice`.\n\n  **Instead of calling this op directly most users will want to use the\n  NumPy-style slicing syntax (e.g. `tensor[..., 3:4:-1, tf.newaxis, 3]`), which\n  is supported via `tf.Tensor.__getitem__` and `tf.Variable.__getitem__`.**\n  The interface of this op is a low-level encoding of the slicing syntax.\n\n  Roughly speaking, this op extracts a slice of size `(end-begin)/stride`\n  from the given `input_` tensor. Starting at the location specified by `begin`\n  the slice continues by adding `stride` to the index until all dimensions are\n  not less than `end`.\n  Note that a stride can be negative, which causes a reverse slice.\n\n  Given a Python slice `input[spec0, spec1, ..., specn]`,\n  this function will be called as follows.\n\n  `begin`, `end`, and `strides` will be vectors of length n.\n  n in general is not equal to the rank of the `input_` tensor.\n\n  In each mask field (`begin_mask`, `end_mask`, `ellipsis_mask`,\n  `new_axis_mask`, `shrink_axis_mask`) the ith bit will correspond to\n  the ith spec.\n\n  If the ith bit of `begin_mask` is set, `begin[i]` is ignored and\n  the fullest possible range in that dimension is used instead.\n  `end_mask` works analogously, except with the end range.\n\n  `foo[5:,:,:3]` on a 7x8x9 tensor is equivalent to `foo[5:7,0:8,0:3]`.\n  `foo[::-1]` reverses a tensor with shape 8.\n\n  If the ith bit of `ellipsis_mask` is set, as many unspecified dimensions\n  as needed will be inserted between other dimensions. Only one\n  non-zero bit is allowed in `ellipsis_mask`.\n\n  For example `foo[3:5,...,4:5]` on a shape 10x3x3x10 tensor is\n  equivalent to `foo[3:5,:,:,4:5]` and\n  `foo[3:5,...]` is equivalent to `foo[3:5,:,:,:]`.\n\n  If the ith bit of `new_axis_mask` is set, then `begin`,\n  `end`, and `stride` are ignored and a new length 1 dimension is\n  added at this point in the output tensor.\n\n  For example,\n  `foo[:4, tf.newaxis, :2]` would produce a shape `(4, 1, 2)` tensor.\n\n  If the ith bit of `shrink_axis_mask` is set, it implies that the ith\n  specification shrinks the dimensionality by 1, taking on the value at index\n  `begin[i]`. `end[i]` and `strides[i]` are ignored in this case. For example in\n  Python one might do `foo[:, 3, :]` which would result in `shrink_axis_mask`\n  equal to 2.\n\n\n  NOTE: `begin` and `end` are zero-indexed.\n  `strides` entries must be non-zero.\n\n\n  ```python\n  t = tf.constant([[[1, 1, 1], [2, 2, 2]],\n                   [[3, 3, 3], [4, 4, 4]],\n                   [[5, 5, 5], [6, 6, 6]]])\n  tf.strided_slice(t, [1, 0, 0], [2, 1, 3], [1, 1, 1])  # [[[3, 3, 3]]]\n  tf.strided_slice(t, [1, 0, 0], [2, 2, 3], [1, 1, 1])  # [[[3, 3, 3],\n                                                        #   [4, 4, 4]]]\n  tf.strided_slice(t, [1, -1, 0], [2, -3, 3], [1, -1, 1])  # [[[4, 4, 4],\n                                                           #   [3, 3, 3]]]\n  ```\n\n  Args:\n    input_: A `Tensor`.\n    begin: An `int32` or `int64` `Tensor`.\n    end: An `int32` or `int64` `Tensor`.\n    strides: An `int32` or `int64` `Tensor`.\n    begin_mask: An `int32` mask.\n    end_mask: An `int32` mask.\n    ellipsis_mask: An `int32` mask.\n    new_axis_mask: An `int32` mask.\n    shrink_axis_mask: An `int32` mask.\n    var: The variable corresponding to `input_` or None\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` the same type as `input`.\n  "},{name:"subtract",path:"./tf/math/subtract.md",desc:"Returns x - y element-wise.",type:"Functions",docs:`Returns x - y element-wise.

  *NOTE*: \`tf.subtract\` supports broadcasting. More about broadcasting
  [here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

  Both input and output have a range \`(-inf, inf)\`.

  Example usages below.

  Subtract operation between an array and a scalar:

  >>> x = [1, 2, 3, 4, 5]
  >>> y = 1
  >>> tf.subtract(x, y)
  <tf.Tensor: shape=(5,), dtype=int32, numpy=array([0, 1, 2, 3, 4], dtype=int32)>
  >>> tf.subtract(y, x)
  <tf.Tensor: shape=(5,), dtype=int32,
  numpy=array([ 0, -1, -2, -3, -4], dtype=int32)>

  Note that binary \`-\` operator can be used instead:

  >>> x = tf.convert_to_tensor([1, 2, 3, 4, 5])
  >>> y = tf.convert_to_tensor(1)
  >>> x - y
  <tf.Tensor: shape=(5,), dtype=int32, numpy=array([0, 1, 2, 3, 4], dtype=int32)>

  Subtract operation between an array and a tensor of same shape:

  >>> x = [1, 2, 3, 4, 5]
  >>> y = tf.constant([5, 4, 3, 2, 1])
  >>> tf.subtract(y, x)
  <tf.Tensor: shape=(5,), dtype=int32,
  numpy=array([ 4,  2,  0, -2, -4], dtype=int32)>

  **Warning**: If one of the inputs (\`x\` or \`y\`) is a tensor and the other is a
  non-tensor, the non-tensor input will adopt (or get casted to) the data type
  of the tensor input. This can potentially cause unwanted overflow or underflow
  conversion.

  For example,

  >>> x = tf.constant([1, 2], dtype=tf.int8)
  >>> y = [2**8 + 1, 2**8 + 2]
  >>> tf.subtract(x, y)
  <tf.Tensor: shape=(2,), dtype=int8, numpy=array([0, 0], dtype=int8)>

  When subtracting two input values of different shapes, \`tf.subtract\` follows the
  [general broadcasting rules](https://numpy.org/doc/stable/user/basics.broadcasting.html#general-broadcasting-rules)
  . The two input array shapes are compared element-wise. Starting with the
  trailing dimensions, the two dimensions either have to be equal or one of them
  needs to be \`1\`.

  For example,

  >>> x = np.ones(6).reshape(2, 3, 1)
  >>> y = np.ones(6).reshape(2, 1, 3)
  >>> tf.subtract(x, y)
  <tf.Tensor: shape=(2, 3, 3), dtype=float64, numpy=
  array([[[0., 0., 0.],
          [0., 0., 0.],
          [0., 0., 0.]],
         [[0., 0., 0.],
          [0., 0., 0.],
          [0., 0., 0.]]])>

  Example with inputs of different dimensions:

  >>> x = np.ones(6).reshape(2, 3, 1)
  >>> y = np.ones(6).reshape(1, 6)
  >>> tf.subtract(x, y)
  <tf.Tensor: shape=(2, 3, 6), dtype=float64, numpy=
  array([[[0., 0., 0., 0., 0., 0.],
          [0., 0., 0., 0., 0., 0.],
          [0., 0., 0., 0., 0., 0.]],
         [[0., 0., 0., 0., 0., 0.],
          [0., 0., 0., 0., 0., 0.],
          [0., 0., 0., 0., 0., 0.]]])>

  Args:
    x: A \`Tensor\`. Must be one of the following types: \`bfloat16\`, \`half\`, \`float32\`, \`float64\`, \`uint8\`, \`int8\`, \`uint16\`, \`int16\`, \`int32\`, \`int64\`, \`complex64\`, \`complex128\`, \`uint32\`, \`uint64\`.
    y: A \`Tensor\`. Must have the same type as \`x\`.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`x\`.
  `},{name:"switch_case",path:"./tf/switch_case.md",desc:"Create a switch/case operation, i.e. an integer-indexed conditional.",type:"Functions",docs:"Create a switch/case operation, i.e. an integer-indexed conditional.\n\n  See also `tf.case`.\n\n  This op can be substantially more efficient than `tf.case` when exactly one\n  branch will be selected. `tf.switch_case` is more like a C++ switch/case\n  statement than `tf.case`, which is more like an if/elif/elif/else chain.\n\n  The `branch_fns` parameter is either a dict from `int` to callables, or list\n  of (`int`, callable) pairs, or simply a list of callables (in which case the\n  index is implicitly the key). The `branch_index` `Tensor` is used to select an\n  element in `branch_fns` with matching `int` key, falling back to `default`\n  if none match, or `max(keys)` if no `default` is provided. The keys must form\n  a contiguous set from `0` to `len(branch_fns) - 1`.\n\n  `tf.switch_case` supports nested structures as implemented in `tf.nest`. All\n  callables must return the same (possibly nested) value structure of lists,\n  tuples, and/or named tuples.\n\n  **Example:**\n\n  Pseudocode:\n\n  ```c++\n  switch (branch_index) {  // c-style switch\n    case 0: return 17;\n    case 1: return 31;\n    default: return -1;\n  }\n  ```\n  or\n  ```python\n  branches = {0: lambda: 17, 1: lambda: 31}\n  branches.get(branch_index, lambda: -1)()\n  ```\n\n  Expressions:\n\n  ```python\n  def f1(): return tf.constant(17)\n  def f2(): return tf.constant(31)\n  def f3(): return tf.constant(-1)\n  r = tf.switch_case(branch_index, branch_fns={0: f1, 1: f2}, default=f3)\n  # Equivalent: tf.switch_case(branch_index, branch_fns={0: f1, 1: f2, 2: f3})\n  ```\n\n  Args:\n    branch_index: An int Tensor specifying which of `branch_fns` should be\n      executed.\n    branch_fns: A `dict` mapping `int`s to callables, or a `list` of\n      (`int`, callable) pairs, or simply a list of callables (in which case the\n      index serves as the key). Each callable must return a matching structure\n      of tensors.\n    default: Optional callable that returns a structure of tensors.\n    name: A name for this operation (optional).\n\n  Returns:\n    The tensors returned by the callable identified by `branch_index`, or those\n    returned by `default` if no key matches and `default` was provided, or those\n    returned by the max-keyed `branch_fn` if no `default` is provided.\n\n  Raises:\n    TypeError: If `branch_fns` is not a list/dictionary.\n    TypeError: If `branch_fns` is a list but does not contain 2-tuples or\n               callables.\n    TypeError: If `fns[i]` is not callable for any i, or `default` is not\n               callable.\n  "},{name:"tan",path:"./tf/math/tan.md",desc:"Computes tan of x element-wise.",type:"Functions",docs:'Computes tan of x element-wise.\n\n    Given an input tensor, this function computes tangent of every\n    element in the tensor. Input range is `(-inf, inf)` and\n    output range is `(-inf, inf)`. If input lies outside the boundary, `nan`\n    is returned.\n\n    ```python\n    x = tf.constant([-float("inf"), -9, -0.5, 1, 1.2, 200, 10000, float("inf")])\n    tf.math.tan(x) ==> [nan 0.45231566 -0.5463025 1.5574077 2.572152 -1.7925274 0.32097113 nan]\n    ```\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int8`, `int16`, `int32`, `int64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  '},{name:"tanh",path:"./tf/math/tanh.md",desc:"Computes hyperbolic tangent of `x` element-wise.",type:"Functions",docs:'Computes hyperbolic tangent of `x` element-wise.\n\n    Given an input tensor, this function computes hyperbolic tangent of every\n    element in the tensor. Input range is `[-inf, inf]` and\n    output range is `[-1,1]`.\n\n    >>> x = tf.constant([-float("inf"), -5, -0.5, 1, 1.2, 2, 3, float("inf")])\n    >>> tf.math.tanh(x)\n    <tf.Tensor: shape=(8,), dtype=float32, numpy=\n    array([-1.0, -0.99990916, -0.46211717,  0.7615942 ,  0.8336547 ,\n            0.9640276 ,  0.9950547 ,  1.0], dtype=float32)>\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n\n    If `x` is a `SparseTensor`, returns\n    `SparseTensor(x.indices, tf.math.tanh(x.values, ...), x.dense_shape)`'},{name:"tensor_scatter_nd_add",path:"./tf/tensor_scatter_nd_add.md",desc:"Adds sparse `updates` to an existing tensor according to `indices`.",type:"Functions",docs:`Adds sparse \`updates\` to an existing tensor according to \`indices\`.

  This operation creates a new tensor by adding sparse \`updates\` to the passed
  in \`tensor\`.
  This operation is very similar to \`tf.compat.v1.scatter_nd_add\`, except that the
  updates are added onto an existing tensor (as opposed to a variable). If the
  memory for the existing tensor cannot be re-used, a copy is made and updated.

  \`indices\` is an integer tensor containing indices into a new tensor of shape
  \`tensor.shape\`.  The last dimension of \`indices\` can be at most the rank of
  \`tensor.shape\`:

  \`\`\`
  indices.shape[-1] <= tensor.shape.rank
  \`\`\`

  The last dimension of \`indices\` corresponds to indices into elements
  (if \`indices.shape[-1] = tensor.shape.rank\`) or slices
  (if \`indices.shape[-1] < tensor.shape.rank\`) along dimension
  \`indices.shape[-1]\` of \`tensor.shape\`.  \`updates\` is a tensor with shape

  \`\`\`
  indices.shape[:-1] + tensor.shape[indices.shape[-1]:]
  \`\`\`

  The simplest form of \`tensor_scatter_nd_add\` is to add individual elements to a
  tensor by index. For example, say we want to add 4 elements in a rank-1
  tensor with 8 elements.

  In Python, this scatter add operation would look like this:

  >>> indices = tf.constant([[4], [3], [1], [7]])
  >>> updates = tf.constant([9, 10, 11, 12])
  >>> tensor = tf.ones([8], dtype=tf.int32)
  >>> updated = tf.tensor_scatter_nd_add(tensor, indices, updates)
  >>> updated
  <tf.Tensor: shape=(8,), dtype=int32,
  numpy=array([ 1, 12,  1, 11, 10,  1,  1, 13], dtype=int32)>

  We can also, insert entire slices of a higher rank tensor all at once. For
  example, if we wanted to insert two slices in the first dimension of a
  rank-3 tensor with two matrices of new values.

  In Python, this scatter add operation would look like this:

  >>> indices = tf.constant([[0], [2]])
  >>> updates = tf.constant([[[5, 5, 5, 5], [6, 6, 6, 6],
  ...                         [7, 7, 7, 7], [8, 8, 8, 8]],
  ...                        [[5, 5, 5, 5], [6, 6, 6, 6],
  ...                         [7, 7, 7, 7], [8, 8, 8, 8]]])
  >>> tensor = tf.ones([4, 4, 4],dtype=tf.int32)
  >>> updated = tf.tensor_scatter_nd_add(tensor, indices, updates)
  >>> updated
  <tf.Tensor: shape=(4, 4, 4), dtype=int32,
  numpy=array([[[6, 6, 6, 6], [7, 7, 7, 7], [8, 8, 8, 8], [9, 9, 9, 9]],
               [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],
               [[6, 6, 6, 6], [7, 7, 7, 7], [8, 8, 8, 8], [9, 9, 9, 9]],
               [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]], dtype=int32)>

  Note: on CPU, if an out of bound index is found, an error is returned.
  On GPU, if an out of bound index is found, the index is ignored.

  Args:
    tensor: A \`Tensor\`. Tensor to copy/update.
    indices: A \`Tensor\`. Must be one of the following types: \`int32\`, \`int64\`.
      Index tensor.
    updates: A \`Tensor\`. Must have the same type as \`tensor\`.
      Updates to scatter into output.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`tensor\`.
  `},{name:"tensor_scatter_nd_max",path:"./tf/tensor_scatter_nd_max.md",desc:"Apply a sparse update to a tensor taking the element-wise maximum.",type:"Functions",docs:`Apply a sparse update to a tensor taking the element-wise maximum.

  Returns a new tensor copied from \`tensor\` whose values are element-wise maximum between
  tensor and updates according to the indices.

  >>> tensor = [0, 0, 0, 0, 0, 0, 0, 0] 
  >>> indices = [[1], [4], [5]]
  >>> updates = [1, -1, 1]
  >>> tf.tensor_scatter_nd_max(tensor, indices, updates).numpy()
  array([0, 1, 0, 0, 0, 1, 0, 0], dtype=int32)

  Refer to \`tf.tensor_scatter_nd_update\` for more details.

  Args:
    tensor: A \`Tensor\`. Tensor to update.
    indices: A \`Tensor\`. Must be one of the following types: \`int32\`, \`int64\`.
      Index tensor.
    updates: A \`Tensor\`. Must have the same type as \`tensor\`.
      Updates to scatter into output.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`tensor\`.
  `},{name:"tensor_scatter_nd_min",path:"./tf/tensor_scatter_nd_min.md",desc:"",type:"Functions",docs:"TODO: add doc.\n\n  Args:\n    tensor: A `Tensor`. Tensor to update.\n    indices: A `Tensor`. Must be one of the following types: `int32`, `int64`.\n      Index tensor.\n    updates: A `Tensor`. Must have the same type as `tensor`.\n      Updates to scatter into output.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `tensor`.\n  "},{name:"tensor_scatter_nd_sub",path:"./tf/tensor_scatter_nd_sub.md",desc:"Subtracts sparse `updates` from an existing tensor according to `indices`.",type:"Functions",docs:`Subtracts sparse \`updates\` from an existing tensor according to \`indices\`.

  This operation creates a new tensor by subtracting sparse \`updates\` from the
  passed in \`tensor\`.
  This operation is very similar to \`tf.scatter_nd_sub\`, except that the updates
  are subtracted from an existing tensor (as opposed to a variable). If the memory
  for the existing tensor cannot be re-used, a copy is made and updated.

  \`indices\` is an integer tensor containing indices into a new tensor of shape
  \`shape\`.  The last dimension of \`indices\` can be at most the rank of \`shape\`:

      indices.shape[-1] <= shape.rank

  The last dimension of \`indices\` corresponds to indices into elements
  (if \`indices.shape[-1] = shape.rank\`) or slices
  (if \`indices.shape[-1] < shape.rank\`) along dimension \`indices.shape[-1]\` of
  \`shape\`.  \`updates\` is a tensor with shape

      indices.shape[:-1] + shape[indices.shape[-1]:]

  The simplest form of tensor_scatter_sub is to subtract individual elements
  from a tensor by index. For example, say we want to insert 4 scattered elements
  in a rank-1 tensor with 8 elements.

  In Python, this scatter subtract operation would look like this:

  \`\`\`python
      indices = tf.constant([[4], [3], [1], [7]])
      updates = tf.constant([9, 10, 11, 12])
      tensor = tf.ones([8], dtype=tf.int32)
      updated = tf.tensor_scatter_nd_sub(tensor, indices, updates)
      print(updated)
  \`\`\`

  The resulting tensor would look like this:

      [1, -10, 1, -9, -8, 1, 1, -11]

  We can also, insert entire slices of a higher rank tensor all at once. For
  example, if we wanted to insert two slices in the first dimension of a
  rank-3 tensor with two matrices of new values.

  In Python, this scatter add operation would look like this:

  \`\`\`python
      indices = tf.constant([[0], [2]])
      updates = tf.constant([[[5, 5, 5, 5], [6, 6, 6, 6],
                              [7, 7, 7, 7], [8, 8, 8, 8]],
                             [[5, 5, 5, 5], [6, 6, 6, 6],
                              [7, 7, 7, 7], [8, 8, 8, 8]]])
      tensor = tf.ones([4, 4, 4],dtype=tf.int32)
      updated = tf.tensor_scatter_nd_sub(tensor, indices, updates)
      print(updated)
  \`\`\`

  The resulting tensor would look like this:

      [[[-4, -4, -4, -4], [-5, -5, -5, -5], [-6, -6, -6, -6], [-7, -7, -7, -7]],
       [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],
       [[-4, -4, -4, -4], [-5, -5, -5, -5], [-6, -6, -6, -6], [-7, -7, -7, -7]],
       [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]]

  Note that on CPU, if an out of bound index is found, an error is returned.
  On GPU, if an out of bound index is found, the index is ignored.

  Args:
    tensor: A \`Tensor\`. Tensor to copy/update.
    indices: A \`Tensor\`. Must be one of the following types: \`int32\`, \`int64\`.
      Index tensor.
    updates: A \`Tensor\`. Must have the same type as \`tensor\`.
      Updates to scatter into output.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`tensor\`.
  `},{name:"tensor_scatter_nd_update",path:"./tf/tensor_scatter_nd_update.md",desc:"Scatter `updates` into an existing tensor according to `indices`.",type:"Functions",docs:`Scatter \`updates\` into an existing tensor according to \`indices\`.

  This operation creates a new tensor by applying sparse \`updates\` to the
  input \`tensor\`. This is similar to an index assignment.

  \`\`\`
  # Not implemented: tensors cannot be updated inplace.
  tensor[indices] = updates
  \`\`\`

  If an out of bound index is found on CPU, an error is returned.

  > **WARNING**: There are some GPU specific semantics for this operation.
  >
  > - If an out of bound index is found, the index is ignored.
  > - The order in which updates are applied is nondeterministic, so the output
  >   will be nondeterministic if \`indices\` contains duplicates.

  This operation is very similar to \`tf.scatter_nd\`, except that the updates are
  scattered onto an existing tensor (as opposed to a zero-tensor). If the memory
  for the existing tensor cannot be re-used, a copy is made and updated.

  In general:

  * \`indices\` is an integer tensor - the indices to update in \`tensor\`.
  * \`indices\` has **at least two** axes, the last axis is the depth of the
    index vectors.
  * For each index vector in \`indices\` there is a corresponding entry in
    \`updates\`.
  * If the length of the index vectors matches the rank of the \`tensor\`, then
    the index vectors each point to scalars in \`tensor\` and each update is a
    scalar.
  * If the length of the index vectors is less than the rank of \`tensor\`, then
    the index vectors each point to slices of \`tensor\` and shape of the updates
    must match that slice.

  Overall this leads to the following shape constraints:

  \`\`\`
  assert tf.rank(indices) >= 2
  index_depth = indices.shape[-1]
  batch_shape = indices.shape[:-1]
  assert index_depth <= tf.rank(tensor)
  outer_shape = tensor.shape[:index_depth]
  inner_shape = tensor.shape[index_depth:]
  assert updates.shape == batch_shape + inner_shape
  \`\`\`

  Typical usage is often much simpler than this general form, and it
  can be better understood starting with simple examples:

  ### Scalar updates

  The simplest usage inserts scalar elements into a tensor by index.
  In this case, the \`index_depth\` must equal the rank of the
  input \`tensor\`, slice each column of \`indices\` is an index into an axis of the
  input \`tensor\`.

  In this simplest case the shape constraints are:

  \`\`\`
  num_updates, index_depth = indices.shape.as_list()
  assert updates.shape == [num_updates]
  assert index_depth == tf.rank(tensor)\`
  \`\`\`

  For example, to insert 4 scattered elements in a rank-1 tensor with
  8 elements.

  <div style="width:70%; margin:auto; margin-bottom:10px; margin-top:20px;">
  <img style="width:100%"
    src="https://www.tensorflow.org/images/ScatterNd1.png">
  </div>

  This scatter operation would look like this:

  >>> tensor = [0, 0, 0, 0, 0, 0, 0, 0]    # tf.rank(tensor) == 1
  >>> indices = [[1], [3], [4], [7]]       # num_updates == 4, index_depth == 1
  >>> updates = [9, 10, 11, 12]            # num_updates == 4
  >>> print(tf.tensor_scatter_nd_update(tensor, indices, updates))
  tf.Tensor([ 0 9  0 10  11  0  0 12], shape=(8,), dtype=int32)

  The length (first axis) of \`updates\` must equal the length of the \`indices\`:
  \`num_updates\`. This is the number of updates being inserted. Each scalar
  update is inserted into \`tensor\` at the indexed location.

  For a higher rank input \`tensor\` scalar updates can be inserted by using an
  \`index_depth\` that matches \`tf.rank(tensor)\`:

  >>> tensor = [[1, 1], [1, 1], [1, 1]]    # tf.rank(tensor) == 2
  >>> indices = [[0, 1], [2, 0]]           # num_updates == 2, index_depth == 2
  >>> updates = [5, 10]                    # num_updates == 2
  >>> print(tf.tensor_scatter_nd_update(tensor, indices, updates))
  tf.Tensor(
      [[ 1  5]
       [ 1  1]
       [10  1]], shape=(3, 2), dtype=int32)

  ### Slice updates

  When the input \`tensor\` has more than one axis scatter can be used to update
  entire slices.

  In this case it's helpful to think of the input \`tensor\` as being a two level
  array-of-arrays. The shape of this two level array is split into the
  \`outer_shape\` and the \`inner_shape\`.

  \`indices\` indexes into the outer level of the input tensor (\`outer_shape\`).
  and replaces the sub-array at that location with the corresponding item from
  the \`updates\` list. The shape of each update is \`inner_shape\`.

  When updating a list of slices the shape constraints are:

  \`\`\`
  num_updates, index_depth = indices.shape.as_list()
  inner_shape = tensor.shape[:index_depth]
  outer_shape = tensor.shape[index_depth:]
  assert updates.shape == [num_updates, inner_shape]
  \`\`\`

  For example, to update rows of a \`(6, 3)\` \`tensor\`:

  >>> tensor = tf.zeros([6, 3], dtype=tf.int32)

  Use an index depth of one.

  >>> indices = tf.constant([[2], [4]])     # num_updates == 2, index_depth == 1
  >>> num_updates, index_depth = indices.shape.as_list()

  The \`outer_shape\` is \`6\`, the inner shape is \`3\`:

  >>> outer_shape = tensor.shape[:index_depth]
  >>> inner_shape = tensor.shape[index_depth:]

  2 rows are being indexed so 2 \`updates\` must be supplied.
  Each update must be shaped to match the \`inner_shape\`.

  >>> # num_updates == 2, inner_shape==3
  >>> updates = tf.constant([[1, 2, 3],
  ...                        [4, 5, 6]])

  Altogether this gives:

  >>> tf.tensor_scatter_nd_update(tensor, indices, updates).numpy()
  array([[0, 0, 0],
         [0, 0, 0],
         [1, 2, 3],
         [0, 0, 0],
         [4, 5, 6],
         [0, 0, 0]], dtype=int32)

  #### More slice update examples

  A tensor representing a batch of uniformly sized video clips naturally has 5
  axes: \`[batch_size, time, width, height, channels]\`.

  For example:

  >>> batch_size, time, width, height, channels = 13,11,7,5,3
  >>> video_batch = tf.zeros([batch_size, time, width, height, channels])

  To replace a selection of video clips:
    * Use an \`index_depth\` of 1 (indexing the \`outer_shape\`: \`[batch_size]\`)
    * Provide updates each with a shape matching the \`inner_shape\`:
      \`[time, width, height, channels]\`.

  To replace the first two clips with ones:

  >>> indices = [[0],[1]]
  >>> new_clips = tf.ones([2, time, width, height, channels])
  >>> tf.tensor_scatter_nd_update(video_batch, indices, new_clips)

  To replace a selection of frames in the videos:

  * \`indices\` must have an \`index_depth\` of 2 for the \`outer_shape\`:
    \`[batch_size, time]\`.
  * \`updates\` must be shaped like a list of images.  Each update must have a
    shape, matching the \`inner_shape\`: \`[width, height, channels]\`.

  To replace the first frame of the first three video clips:

  >>> indices = [[0, 0], [1, 0], [2, 0]] # num_updates=3, index_depth=2
  >>> new_images = tf.ones([
  ...   # num_updates=3, inner_shape=(width, height, channels)
  ...   3, width, height, channels])
  >>> tf.tensor_scatter_nd_update(video_batch, indices, new_images)

  ### Folded indices

  In simple cases it's convenient to think of \`indices\` and \`updates\` as
  lists, but this is not a strict requirement. Instead of a flat \`num_updates\`,
  the \`indices\` and \`updates\` can be folded into a \`batch_shape\`. This
  \`batch_shape\` is all axes of the \`indices\`, except for the innermost
  \`index_depth\` axis.

  \`\`\`
  index_depth = indices.shape[-1]
  batch_shape = indices.shape[:-1]
  \`\`\`

  Note: The one exception is that the \`batch_shape\` cannot be \`[]\`. You can't
  update a single index by passing indices with shape \`[index_depth]\`.

  \`updates\` must have a matching \`batch_shape\` (the axes before \`inner_shape\`).

  \`\`\`
  assert updates.shape == batch_shape + inner_shape
  \`\`\`

  Note: The result is equivalent to flattening the \`batch_shape\` axes of
  \`indices\` and \`updates\`. This generalization just avoids the need
  for reshapes when it is more natural to construct "folded" indices and
  updates.

  With this generalization the full shape constraints are:

  \`\`\`
  assert tf.rank(indices) >= 2
  index_depth = indices.shape[-1]
  batch_shape = indices.shape[:-1]
  assert index_depth <= tf.rank(tensor)
  outer_shape = tensor.shape[:index_depth]
  inner_shape = tensor.shape[index_depth:]
  assert updates.shape == batch_shape + inner_shape
  \`\`\`

  For example, to draw an \`X\` on a \`(5,5)\` matrix start with these indices:

  >>> tensor = tf.zeros([5,5])
  >>> indices = tf.constant([
  ...  [[0,0],
  ...   [1,1],
  ...   [2,2],
  ...   [3,3],
  ...   [4,4]],
  ...  [[0,4],
  ...   [1,3],
  ...   [2,2],
  ...   [3,1],
  ...   [4,0]],
  ... ])
  >>> indices.shape.as_list()  # batch_shape == [2, 5], index_depth == 2
  [2, 5, 2]

  Here the \`indices\` do not have a shape of \`[num_updates, index_depth]\`, but a
  shape of \`batch_shape+[index_depth]\`.

  Since the \`index_depth\` is equal to the rank of \`tensor\`:

  * \`outer_shape\` is \`(5,5)\`
  * \`inner_shape\` is \`()\` - each update is scalar
  * \`updates.shape\` is \`batch_shape + inner_shape == (5,2) + ()\`

  >>> updates = [
  ...   [1,1,1,1,1],
  ...   [1,1,1,1,1],
  ... ]

  Putting this together gives:

  >>> tf.tensor_scatter_nd_update(tensor, indices, updates).numpy()
  array([[1., 0., 0., 0., 1.],
         [0., 1., 0., 1., 0.],
         [0., 0., 1., 0., 0.],
         [0., 1., 0., 1., 0.],
         [1., 0., 0., 0., 1.]], dtype=float32)

  Args:
    tensor: Tensor to copy/update.
    indices: Indices to update.
    updates: Updates to apply at the indices.
    name: Optional name for the operation.

  Returns:
    A new tensor with the given shape and updates applied according to the
    indices.
  `},{name:"tensordot",path:"./tf/tensordot.md",desc:"Tensor contraction of a and b along specified axes and outer product.",type:"Functions",docs:"Tensor contraction of a and b along specified axes and outer product.\n\n  Tensordot (also known as tensor contraction) sums the product of elements\n  from `a` and `b` over the indices specified by `axes`.\n\n  This operation corresponds to `numpy.tensordot(a, b, axes)`.\n\n  Example 1: When `a` and `b` are matrices (order 2), the case `axes=1`\n  is equivalent to matrix multiplication.\n\n  Example 2: When `a` and `b` are matrices (order 2), the case\n  `axes = [[1], [0]]` is equivalent to matrix multiplication.\n\n  Example 3: When `a` and `b` are matrices (order 2), the case `axes=0` gives\n  the outer product, a tensor of order 4.\n\n  Example 4: Suppose that \\\\(a_{ijk}\\\\) and \\\\(b_{lmn}\\\\) represent two\n  tensors of order 3. Then, `contract(a, b, [[0], [2]])` is the order 4 tensor\n  \\\\(c_{jklm}\\\\) whose entry\n  corresponding to the indices \\\\((j,k,l,m)\\\\) is given by:\n\n  \\\\( c_{jklm} = \\sum_i a_{ijk} b_{lmi} \\\\).\n\n  In general, `order(c) = order(a) + order(b) - 2*len(axes[0])`.\n\n  Args:\n    a: `Tensor` of type `float32` or `float64`.\n    b: `Tensor` with the same type as `a`.\n    axes: Either a scalar `N`, or a list or an `int32` `Tensor` of shape [2, k].\n      If axes is a scalar, sum over the last N axes of a and the first N axes of\n      b in order. If axes is a list or `Tensor` the first and second row contain\n      the set of unique integers specifying axes along which the contraction is\n      computed, for `a` and `b`, respectively. The number of axes for `a` and\n      `b` must be equal. If `axes=0`, computes the outer product between `a` and\n      `b`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` with the same type as `a`.\n\n  Raises:\n    ValueError: If the shapes of `a`, `b`, and `axes` are incompatible.\n    IndexError: If the values in axes exceed the rank of the corresponding\n      tensor.\n  "},{name:"tile",path:"./tf/tile.md",desc:"Constructs a tensor by tiling a given tensor.",type:"Functions",docs:`Constructs a tensor by tiling a given tensor.

  This operation creates a new tensor by replicating \`input\` \`multiples\` times.
  The output tensor's i'th dimension has \`input.dims(i) * multiples[i]\` elements,
  and the values of \`input\` are replicated \`multiples[i]\` times along the 'i'th
  dimension. For example, tiling \`[a b c d]\` by \`[2]\` produces
  \`[a b c d a b c d]\`.

  >>> a = tf.constant([[1,2,3],[4,5,6]], tf.int32)
  >>> b = tf.constant([1,2], tf.int32)
  >>> tf.tile(a, b)
  <tf.Tensor: shape=(2, 6), dtype=int32, numpy=
  array([[1, 2, 3, 1, 2, 3],
         [4, 5, 6, 4, 5, 6]], dtype=int32)>
  >>> c = tf.constant([2,1], tf.int32)
  >>> tf.tile(a, c)
  <tf.Tensor: shape=(4, 3), dtype=int32, numpy=
  array([[1, 2, 3],
         [4, 5, 6],
         [1, 2, 3],
         [4, 5, 6]], dtype=int32)>
  >>> d = tf.constant([2,2], tf.int32)
  >>> tf.tile(a, d)
  <tf.Tensor: shape=(4, 6), dtype=int32, numpy=
  array([[1, 2, 3, 1, 2, 3],
         [4, 5, 6, 4, 5, 6],
         [1, 2, 3, 1, 2, 3],
         [4, 5, 6, 4, 5, 6]], dtype=int32)>

  Args:
    input: A \`Tensor\`. 1-D or higher.
    multiples: A \`Tensor\`. Must be one of the following types: \`int32\`, \`int64\`.
      1-D. Length must be the same as the number of dimensions in \`input\`
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`input\`.
  `},{name:"timestamp",path:"./tf/timestamp.md",desc:"Provides the time since epoch in seconds.",type:"Functions",docs:`Provides the time since epoch in seconds.

  Returns the timestamp as a \`float64\` for seconds since the Unix epoch.

  Note: the timestamp is computed when the op is executed, not when it is added
  to the graph.

  Args:
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\` of type \`float64\`.
  `},{name:"transpose",path:"./tf/transpose.md",desc:"Transposes `a`, where `a` is a Tensor.",type:"Functions",docs:`Transposes \`a\`, where \`a\` is a Tensor.

  Permutes the dimensions according to the value of \`perm\`.

  The returned tensor's dimension \`i\` will correspond to the input dimension
  \`perm[i]\`. If \`perm\` is not given, it is set to (n-1...0), where n is the rank
  of the input tensor. Hence by default, this operation performs a regular
  matrix transpose on 2-D input Tensors.

  If conjugate is \`True\` and \`a.dtype\` is either \`complex64\` or \`complex128\`
  then the values of \`a\` are conjugated and transposed.

  @compatibility(numpy)
  In \`numpy\` transposes are memory-efficient constant time operations as they
  simply return a new view of the same data with adjusted \`strides\`.

  TensorFlow does not support strides, so \`transpose\` returns a new tensor with
  the items permuted.
  @end_compatibility

  For example:

  >>> x = tf.constant([[1, 2, 3], [4, 5, 6]])
  >>> tf.transpose(x)
  <tf.Tensor: shape=(3, 2), dtype=int32, numpy=
  array([[1, 4],
         [2, 5],
         [3, 6]], dtype=int32)>

  Equivalently, you could call \`tf.transpose(x, perm=[1, 0])\`.

  If \`x\` is complex, setting conjugate=True gives the conjugate transpose:

  >>> x = tf.constant([[1 + 1j, 2 + 2j, 3 + 3j],
  ...                  [4 + 4j, 5 + 5j, 6 + 6j]])
  >>> tf.transpose(x, conjugate=True)
  <tf.Tensor: shape=(3, 2), dtype=complex128, numpy=
  array([[1.-1.j, 4.-4.j],
         [2.-2.j, 5.-5.j],
         [3.-3.j, 6.-6.j]])>

  'perm' is more useful for n-dimensional tensors where n > 2:

  >>> x = tf.constant([[[ 1,  2,  3],
  ...                   [ 4,  5,  6]],
  ...                  [[ 7,  8,  9],
  ...                   [10, 11, 12]]])

  As above, simply calling \`tf.transpose\` will default to \`perm=[2,1,0]\`.

  To take the transpose of the matrices in dimension-0 (such as when you are
  transposing matrices where 0 is the batch dimension), you would set
  \`perm=[0,2,1]\`.

  >>> tf.transpose(x, perm=[0, 2, 1])
  <tf.Tensor: shape=(2, 3, 2), dtype=int32, numpy=
  array([[[ 1,  4],
          [ 2,  5],
          [ 3,  6]],
          [[ 7, 10],
          [ 8, 11],
          [ 9, 12]]], dtype=int32)>

  Note: This has a shorthand \`linalg.matrix_transpose\`):

  Args:
    a: A \`Tensor\`.
    perm: A permutation of the dimensions of \`a\`.  This should be a vector.
    conjugate: Optional bool. Setting it to \`True\` is mathematically equivalent
      to tf.math.conj(tf.transpose(input)).
    name: A name for the operation (optional).

  Returns:
    A transposed \`Tensor\`.
  `},{name:"truediv",path:"./tf/math/truediv.md",desc:"Divides x / y elementwise (using Python 3 division operator semantics",type:"Functions",docs:"Divides x / y elementwise (using Python 3 division operator semantics).\n\n  NOTE: Prefer using the Tensor operator or tf.divide which obey Python\n  division operator semantics.\n\n  This function forces Python 3 division operator semantics where all integer\n  arguments are cast to floating types first.   This op is generated by normal\n  `x / y` division in Python 3 and in Python 2.7 with\n  `from __future__ import division`.  If you want integer division that rounds\n  down, use `x // y` or `tf.math.floordiv`.\n\n  `x` and `y` must have the same numeric type.  If the inputs are floating\n  point, the output will have the same type.  If the inputs are integral, the\n  inputs are cast to `float32` for `int8` and `int16` and `float64` for `int32`\n  and `int64` (matching the behavior of Numpy).\n\n  Args:\n    x: `Tensor` numerator of numeric type.\n    y: `Tensor` denominator of numeric type.\n    name: A name for the operation (optional).\n\n  Returns:\n    `x / y` evaluated in floating point.\n\n  Raises:\n    TypeError: If `x` and `y` have different dtypes.\n  "},{name:"truncatediv",path:"./tf/truncatediv.md",desc:"Returns x / y element-wise for integer types.",type:"Functions",docs:"Returns x / y element-wise for integer types.\n\n  Truncation designates that negative numbers will round fractional quantities\n  toward zero. I.e. -7 / 5 = -1. This matches C semantics but it is different\n  than Python semantics. See `FloorDiv` for a division function that matches\n  Python Semantics.\n\n  *NOTE*: `truncatediv` supports broadcasting. More about broadcasting\n  [here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`, `int16`, `int32`, `uint32`, `uint64`, `int64`, `complex64`, `complex128`.\n    y: A `Tensor`. Must have the same type as `x`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  "},{name:"truncatemod",path:"./tf/truncatemod.md",desc:"Returns element-wise remainder of division. This emulates C semantics in that",type:"Functions",docs:"Returns element-wise remainder of division. This emulates C semantics in that\n\n  the result here is consistent with a truncating divide. E.g. `truncate(x / y) *\n  y + truncate_mod(x, y) = x`.\n\n  *NOTE*: `truncatemod` supports broadcasting. More about broadcasting\n  [here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)\n\n  Args:\n    x: A `Tensor`. Must be one of the following types: `int32`, `int64`, `bfloat16`, `half`, `float32`, `float64`.\n    y: A `Tensor`. Must have the same type as `x`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor`. Has the same type as `x`.\n  "},{name:"tuple",path:"./tf/tuple.md",desc:"Groups tensors together.",type:"Functions",docs:"Groups tensors together.\n\n  The returned tensors have the same value as the input tensors, but they\n  are computed only after all the input tensors have been computed.\n\n  Note: *In TensorFlow 2 with eager and/or Autograph, you should not require\n  this method, as ops execute in the expected order thanks to automatic control\n  dependencies.* Only use `tf.tuple` when working with v1 `tf.Graph` code.\n\n  See also `tf.group` and `tf.control_dependencies`.\n\n  Args:\n    tensors: A list of `Tensor`s or `IndexedSlices`, some entries can be `None`.\n    control_inputs: List of additional ops to finish before returning.\n    name: (optional) A name to use as a `name_scope` for the operation.\n\n  Returns:\n    Same as `tensors`.\n\n  Raises:\n    ValueError: If `tensors` does not contain any `Tensor` or `IndexedSlices`.\n    TypeError: If `control_inputs` is not a list of `Operation` or `Tensor`\n      objects.\n\n  "},{name:"type_spec_from_value",path:"./tf/type_spec_from_value.md",desc:'Returns a <a href="./tf/TypeSpec.md"><code>tf.TypeSpec</code></a> that represents the given `value`.',type:"Functions",docs:`Returns a \`tf.TypeSpec\` that represents the given \`value\`.

  Examples:

    >>> tf.type_spec_from_value(tf.constant([1, 2, 3]))
    TensorSpec(shape=(3,), dtype=tf.int32, name=None)
    >>> tf.type_spec_from_value(np.array([4.0, 5.0], np.float64))
    TensorSpec(shape=(2,), dtype=tf.float64, name=None)
    >>> tf.type_spec_from_value(tf.ragged.constant([[1, 2], [3, 4, 5]]))
    RaggedTensorSpec(TensorShape([2, None]), tf.int32, 1, tf.int64)

    >>> example_input = tf.ragged.constant([[1, 2], [3]])
    >>> @tf.function(input_signature=[tf.type_spec_from_value(example_input)])
    ... def f(x):
    ...   return tf.reduce_sum(x, axis=1)

  Args:
    value: A value that can be accepted or returned by TensorFlow APIs. Accepted
      types for \`value\` include \`tf.Tensor\`, any value that can be converted to
      \`tf.Tensor\` using \`tf.convert_to_tensor\`, and any subclass of
      \`CompositeTensor\` (such as \`tf.RaggedTensor\`).

  Returns:
    A \`TypeSpec\` that is compatible with \`value\`.

  Raises:
    TypeError: If a TypeSpec cannot be built for \`value\`, because its type
      is not supported.
  `},{name:"unique",path:"./tf/unique.md",desc:"Finds unique elements in a 1-D tensor.",type:"Functions",docs:"Finds unique elements in a 1-D tensor.\n\n  This operation returns a tensor `y` containing all of the unique elements of `x`\n  sorted in the same order that they occur in `x`; `x` does not need to be sorted.\n  This operation also returns a tensor `idx` the same size as `x` that contains\n  the index of each value of `x` in the unique output `y`. In other words:\n\n  `y[idx[i]] = x[i] for i in [0, 1,...,rank(x) - 1]`\n\n  Examples:\n\n  ```\n  # tensor 'x' is [1, 1, 2, 4, 4, 4, 7, 8, 8]\n  y, idx = unique(x)\n  y ==> [1, 2, 4, 7, 8]\n  idx ==> [0, 0, 1, 2, 2, 2, 3, 4, 4]\n  ```\n\n  ```\n  # tensor 'x' is [4, 5, 1, 2, 3, 3, 4, 5]\n  y, idx = unique(x)\n  y ==> [4, 5, 1, 2, 3]\n  idx ==> [0, 1, 2, 3, 4, 4, 0, 1]\n  ```\n\n  Args:\n    x: A `Tensor`. 1-D.\n    out_idx: An optional `tf.DType` from: `tf.int32, tf.int64`. Defaults to `tf.int32`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A tuple of `Tensor` objects (y, idx).\n\n    y: A `Tensor`. Has the same type as `x`.\n    idx: A `Tensor` of type `out_idx`.\n  "},{name:"unique_with_counts",path:"./tf/unique_with_counts.md",desc:"Finds unique elements in a 1-D tensor.",type:"Functions",docs:"Finds unique elements in a 1-D tensor.\n\n  This operation returns a tensor `y` containing all of the unique elements of `x`\n  sorted in the same order that they occur in `x`. This operation also returns a\n  tensor `idx` the same size as `x` that contains the index of each value of `x`\n  in the unique output `y`. Finally, it returns a third tensor `count` that\n  contains the count of each element of `y` in `x`. In other words:\n\n  `y[idx[i]] = x[i] for i in [0, 1,...,rank(x) - 1]`\n\n  For example:\n\n  ```\n  # tensor 'x' is [1, 1, 2, 4, 4, 4, 7, 8, 8]\n  y, idx, count = unique_with_counts(x)\n  y ==> [1, 2, 4, 7, 8]\n  idx ==> [0, 0, 1, 2, 2, 2, 3, 4, 4]\n  count ==> [2, 1, 3, 1, 2]\n  ```\n\n  Args:\n    x: A `Tensor`. 1-D.\n    out_idx: An optional `tf.DType` from: `tf.int32, tf.int64`. Defaults to `tf.int32`.\n    name: A name for the operation (optional).\n\n  Returns:\n    A tuple of `Tensor` objects (y, idx, count).\n\n    y: A `Tensor`. Has the same type as `x`.\n    idx: A `Tensor` of type `out_idx`.\n    count: A `Tensor` of type `out_idx`.\n  "},{name:"unravel_index",path:"./tf/unravel_index.md",desc:"Converts an array of flat indices into a tuple of coordinate arrays.",type:"Functions",docs:`Converts an array of flat indices into a tuple of coordinate arrays.

  
  Example:

  \`\`\`
  y = tf.unravel_index(indices=[2, 5, 7], dims=[3, 3])
  # 'dims' represent a hypothetical (3, 3) tensor of indices:
  # [[0, 1, *2*],
  #  [3, 4, *5*],
  #  [6, *7*, 8]]
  # For each entry from 'indices', this operation returns
  # its coordinates (marked with '*'), such as
  # 2 ==> (0, 2)
  # 5 ==> (1, 2)
  # 7 ==> (2, 1)
  y ==> [[0, 1, 2], [2, 2, 1]]
  \`\`\`

  @compatibility(numpy)
  Equivalent to np.unravel_index
  @end_compatibility

  Args:
    indices: A \`Tensor\`. Must be one of the following types: \`int32\`, \`int64\`.
      An 0-D or 1-D \`int\` Tensor whose elements are indices into the
      flattened version of an array of dimensions dims.
    dims: A \`Tensor\`. Must have the same type as \`indices\`.
      An 1-D \`int\` Tensor. The shape of the array to use for unraveling
      indices.
    name: A name for the operation (optional).

  Returns:
    A \`Tensor\`. Has the same type as \`indices\`.
  `},{name:"unstack",path:"./tf/unstack.md",desc:"Unpacks the given dimension of a rank-`R` tensor into rank-`(R-1",type:"Functions",docs:`Unpacks the given dimension of a rank-\`R\` tensor into rank-\`(R-1)\` tensors.

  Unpacks tensors from \`value\` by chipping it along the \`axis\` dimension.

  >>> x = tf.reshape(tf.range(12), (3,4))
  >>>
  >>> p, q, r = tf.unstack(x)
  >>> p.shape.as_list()
  [4]

  >>> i, j, k, l = tf.unstack(x, axis=1)
  >>> i.shape.as_list()
  [3]

  This is the opposite of stack.

  >>> x = tf.stack([i, j, k, l], axis=1)

  More generally if you have a tensor of shape \`(A, B, C, D)\`:

  >>> A, B, C, D = [2, 3, 4, 5]
  >>> t = tf.random.normal(shape=[A, B, C, D])

  The number of tensor returned is equal to the length of the target \`axis\`:

  >>> axis = 2
  >>> items = tf.unstack(t, axis=axis)
  >>> len(items) == t.shape[axis]
  True

  The shape of each result tensor is equal to the shape of the input tensor,
  with the target \`axis\` removed.

  >>> items[0].shape.as_list()  # [A, B, D]
  [2, 3, 5]

  The value of each tensor \`items[i]\` is equal to the slice of \`input\` across
  \`axis\` at index \`i\`:

  >>> for i in range(len(items)):
  ...   slice = t[:,:,i,:]
  ...   assert tf.reduce_all(slice == items[i])

  #### Python iterable unpacking

  With eager execution you _can_ unstack the 0th axis of a tensor using python's
  iterable unpacking:

  >>> t = tf.constant([1,2,3])
  >>> a,b,c = t

  \`unstack\` is still necessary because Iterable unpacking doesn't work in
  a \`@tf.function\`: Symbolic tensors are not iterable.

  You need to use \`tf.unstack\` here:

  >>> @tf.function
  ... def bad(t):
  ...   a,b,c = t
  ...   return a
  >>>
  >>> bad(t)
  Traceback (most recent call last):
  ...
  OperatorNotAllowedInGraphError: ...

  >>> @tf.function
  ... def good(t):
  ...   a,b,c = tf.unstack(t)
  ...   return a
  >>>
  >>> good(t).numpy()
  1

  #### Unknown shapes

  Eager tensors have concrete values, so their shape is always known.
  Inside a \`tf.function\` the symbolic tensors may have unknown shapes.
  If the length of \`axis\` is unknown \`tf.unstack\` will fail because it cannot
  handle an unknown number of tensors:

  >>> @tf.function(input_signature=[tf.TensorSpec([None], tf.float32)])
  ... def bad(t):
  ...   tensors = tf.unstack(t)
  ...   return tensors[0]
  >>>
  >>> bad(tf.constant([1,2,3]))
  Traceback (most recent call last):
  ...
  ValueError: Cannot infer argument \`num\` from shape (None,)

  If you know the \`axis\` length you can pass it as the \`num\` argument. But this
  must be a constant value.

  If you actually need a variable number of tensors in a single \`tf.function\`
  trace, you will need to use exlicit loops and a \`tf.TensorArray\` instead.

  Args:
    value: A rank \`R > 0\` \`Tensor\` to be unstacked.
    num: An \`int\`. The length of the dimension \`axis\`. Automatically inferred if
      \`None\` (the default).
    axis: An \`int\`. The axis to unstack along. Defaults to the first dimension.
      Negative values wrap around, so the valid range is \`[-R, R)\`.
    name: A name for the operation (optional).

  Returns:
    The list of \`Tensor\` objects unstacked from \`value\`.

  Raises:
    ValueError: If \`axis\` is out of the range \`[-R, R)\`.
    ValueError: If \`num\` is unspecified and cannot be inferred.
    InvalidArgumentError: If \`num\` does not match the shape of \`value\`.
  `},{name:"variable_creator_scope",path:"./tf/variable_creator_scope.md",desc:"Scope which defines a variable creation function to be used by variable(",type:"Functions",docs:`Scope which defines a variable creation function to be used by variable().

  variable_creator is expected to be a function with the following signature:

  \`\`\`
    def variable_creator(next_creator, **kwargs)
  \`\`\`

  The creator is supposed to eventually call the next_creator to create a
  variable if it does want to create a variable and not call Variable or
  ResourceVariable directly. This helps make creators composable. A creator may
  choose to create multiple variables, return already existing variables, or
  simply register that a variable was created and defer to the next creators in
  line. Creators can also modify the keyword arguments seen by the next
  creators.

  Custom getters in the variable scope will eventually resolve down to these
  custom creators when they do create variables.

  The valid keyword arguments in kwds are:

   * initial_value: A \`Tensor\`, or Python object convertible to a \`Tensor\`,
        which is the initial value for the Variable. The initial value must have
        a shape specified unless \`validate_shape\` is set to False. Can also be a
        callable with no argument that returns the initial value when called. In
        that case, \`dtype\` must be specified. (Note that initializer functions
        from init_ops.py must first be bound to a shape before being used here.)
   * trainable: If \`True\`, the default, GradientTapes automatically watch
        uses of this Variable.
   * validate_shape: If \`False\`, allows the variable to be initialized with a
        value of unknown shape. If \`True\`, the default, the shape of
        \`initial_value\` must be known.
   * caching_device: Optional device string describing where the Variable
        should be cached for reading.  Defaults to the Variable's device.
        If not \`None\`, caches on another device.  Typical use is to cache
        on the device where the Ops using the Variable reside, to deduplicate
        copying through \`Switch\` and other conditional statements.
   * name: Optional name for the variable. Defaults to \`'Variable'\` and gets
        uniquified automatically.
      dtype: If set, initial_value will be converted to the given type.
        If \`None\`, either the datatype will be kept (if \`initial_value\` is
        a Tensor), or \`convert_to_tensor\` will decide.
   * constraint: A constraint function to be applied to the variable after
        updates by some algorithms.
   * synchronization: Indicates when a distributed a variable will be
        aggregated. Accepted values are constants defined in the class
        \`tf.VariableSynchronization\`. By default the synchronization is set to
        \`AUTO\` and the current \`DistributionStrategy\` chooses
        when to synchronize.
   * aggregation: Indicates how a distributed variable will be aggregated.
        Accepted values are constants defined in the class
        \`tf.VariableAggregation\`.

  This set may grow over time, so it's important the signature of creators is as
  mentioned above.

  Args:
    variable_creator: the passed creator

  Yields:
    A scope in which the creator is active
  `},{name:"vectorized_map",path:"./tf/vectorized_map.md",desc:"Parallel map on the list of tensors unpacked from `elems` on dimension 0.",type:"Functions",docs:`Parallel map on the list of tensors unpacked from \`elems\` on dimension 0.

  This method works similar to \`tf.map_fn\` but is optimized to run much faster,
  possibly with a much larger memory footprint. The speedups are obtained by
  vectorization (see [Auto-Vectorizing TensorFlow Graphs: Jacobians,
  Auto-Batching and Beyond](https://arxiv.org/pdf/1903.04243.pdf)). The idea
  behind vectorization is to semantically launch all the invocations of \`fn\` in
  parallel and fuse corresponding operations across all these invocations. This
  fusion is done statically at graph generation time and the generated code is
  often similar in performance to a manually fused version.

  Because \`tf.vectorized_map\` fully parallelizes the batch, this method will
  generally be significantly faster than using \`tf.map_fn\`, especially in eager
  mode. However this is an experimental feature and currently has a lot of
  limitations:
    - There should be no data dependency between the different semantic
      invocations of \`fn\`, i.e. it should be safe to map the elements of the
      inputs in any order.
    - Stateful kernels may mostly not be supported since these often imply a
      data dependency. We do support a limited set of such stateful kernels
      though (like RandomFoo, Variable operations like reads, etc).
    - \`fn\` has limited support for control flow operations.
    - \`fn\` should return nested structure of Tensors or Operations. However
      if an Operation is returned, it should have zero outputs.
    - The shape and dtype of any intermediate or output tensors in the
      computation of \`fn\` should not depend on the input to \`fn\`.

  Examples:
  \`\`\`python
  def outer_product(a):
    return tf.tensordot(a, a, 0)

  batch_size = 100
  a = tf.ones((batch_size, 32, 32))
  c = tf.vectorized_map(outer_product, a)
  assert c.shape == (batch_size, 32, 32, 32, 32)
  \`\`\`

  \`\`\`python
  # Computing per-example gradients

  batch_size = 10
  num_features = 32
  layer = tf.keras.layers.Dense(1)

  def model_fn(arg):
    with tf.GradientTape() as g:
      inp, label = arg
      inp = tf.expand_dims(inp, 0)
      label = tf.expand_dims(label, 0)
      prediction = layer(inp)
      loss = tf.nn.l2_loss(label - prediction)
    return g.gradient(loss, (layer.kernel, layer.bias))

  inputs = tf.random.uniform([batch_size, num_features])
  labels = tf.random.uniform([batch_size, 1])
  per_example_gradients = tf.vectorized_map(model_fn, (inputs, labels))
  assert per_example_gradients[0].shape == (batch_size, num_features, 1)
  assert per_example_gradients[1].shape == (batch_size, 1)
  \`\`\`

  Args:
    fn: The callable to be performed. It accepts one argument, which will have
      the same (possibly nested) structure as \`elems\`, and returns a possibly
      nested structure of Tensors and Operations, which may be different than
      the structure of \`elems\`.
    elems: A tensor or (possibly nested) sequence of tensors, each of which will
      be unpacked along their first dimension. The nested sequence of the
      resulting slices will be mapped over by \`fn\`. The first dimensions of all
      elements must broadcast to a consistent value; equivalently, each
      element tensor must have first dimension of either \`B\` or \`1\`, for some
      common batch size \`B >= 1\`.
    fallback_to_while_loop: If true, on failing to vectorize an operation,
      the unsupported op is wrapped in a tf.while_loop to execute the map
      iterations. Note that this fallback only happens for unsupported ops and
      other parts of \`fn\` are still vectorized. If false, on encountering an
      unsupported op, a ValueError is thrown. Note that the fallbacks can result
      in slowdowns since vectorization often yields speedup of one to two orders
      of magnitude.

  Returns:
    A tensor or (possibly nested) sequence of tensors. Each tensor packs the
    results of applying fn to tensors unpacked from elems along the first
    dimension, from first to last.

    Although they are less common as user-visible inputs and outputs, note that
    tensors of type \`tf.variant\` which represent tensor lists (for example from
    \`tf.raw_ops.TensorListFromTensor\`) are vectorized by stacking the list
    contents rather than the variant itself, and so the container tensor will
    have a scalar shape when returned rather than the usual stacked shape. This
    improves the performance of control flow gradient vectorization.

  Raises:
    ValueError: If vectorization fails and fallback_to_while_loop is False.
  `},{name:"where",path:"./tf/where.md",desc:"Returns the indices of non-zero elements, or multiplexes `x` and `y`.",type:"Functions",docs:"Returns the indices of non-zero elements, or multiplexes `x` and `y`.\n\n  This operation has two modes:\n\n  1. **Return the indices of non-zero elements** - When only\n     `condition` is provided the result is an `int64` tensor where each row is\n     the index of a non-zero element of `condition`. The result's shape\n     is `[tf.math.count_nonzero(condition), tf.rank(condition)]`.\n  2. **Multiplex `x` and `y`** - When both `x` and `y` are provided the\n     result has the shape of `x`, `y`, and `condition` broadcast together. The\n     result is taken from `x` where `condition` is non-zero\n     or `y` where `condition` is zero.\n\n  #### 1. Return the indices of non-zero elements\n\n  Note: In this mode `condition` can have a dtype of `bool` or any numeric\n  dtype.\n\n  If `x` and `y` are not provided (both are None):\n\n  `tf.where` will return the indices of `condition` that are non-zero,\n  in the form of a 2-D tensor with shape `[n, d]`, where `n` is the number of\n  non-zero elements in `condition` (`tf.count_nonzero(condition)`), and `d` is\n  the number of axes of `condition` (`tf.rank(condition)`).\n\n  Indices are output in row-major order. The `condition` can have a `dtype` of\n  `tf.bool`, or any numeric `dtype`.\n\n  Here `condition` is a 1-axis `bool` tensor with 2 `True` values. The result\n  has a shape of `[2,1]`\n\n  >>> tf.where([True, False, False, True]).numpy()\n  array([[0],\n         [3]])\n\n  Here `condition` is a 2-axis integer tensor, with 3 non-zero values. The\n  result has a shape of `[3, 2]`.\n\n  >>> tf.where([[1, 0, 0], [1, 0, 1]]).numpy()\n  array([[0, 0],\n         [1, 0],\n         [1, 2]])\n\n  Here `condition` is a 3-axis float tensor, with 5 non-zero values. The output\n  shape is `[5, 3]`.\n\n  >>> float_tensor = [[[0.1, 0], [0, 2.2], [3.5, 1e6]],\n  ...                 [[0,   0], [0,   0], [99,    0]]]\n  >>> tf.where(float_tensor).numpy()\n  array([[0, 0, 0],\n         [0, 1, 1],\n         [0, 2, 0],\n         [0, 2, 1],\n         [1, 2, 0]])\n\n  These indices are the same that `tf.sparse.SparseTensor` would use to\n  represent the condition tensor:\n\n  >>> sparse = tf.sparse.from_dense(float_tensor)\n  >>> sparse.indices.numpy()\n  array([[0, 0, 0],\n         [0, 1, 1],\n         [0, 2, 0],\n         [0, 2, 1],\n         [1, 2, 0]])\n\n  A complex number is considered non-zero if either the real or imaginary\n  component is non-zero:\n\n  >>> tf.where([complex(0.), complex(1.), 0+1j, 1+1j]).numpy()\n  array([[1],\n         [2],\n         [3]])\n\n  #### 2. Multiplex `x` and `y`\n\n  Note: In this mode `condition` must have a dtype of `bool`.\n\n  If `x` and `y` are also provided (both have non-None values) the `condition`\n  tensor acts as a mask that chooses whether the corresponding\n  element / row in the output should be taken from `x` (if the element in\n  `condition` is `True`) or `y` (if it is `False`).\n\n  The shape of the result is formed by\n  [broadcasting](https://docs.scipy.org/doc/numpy/reference/ufuncs.html)\n  together the shapes of `condition`, `x`, and `y`.\n\n  When all three inputs have the same size, each is handled element-wise.\n\n  >>> tf.where([True, False, False, True],\n  ...          [1, 2, 3, 4],\n  ...          [100, 200, 300, 400]).numpy()\n  array([  1, 200, 300,   4], dtype=int32)\n\n  There are two main rules for broadcasting:\n\n  1. If a tensor has fewer axes than the others, length-1 axes are added to the\n     left of the shape.\n  2. Axes with length-1 are streched to match the coresponding axes of the other\n     tensors.\n\n  A length-1 vector is streched to match the other vectors:\n\n  >>> tf.where([True, False, False, True], [1, 2, 3, 4], [100]).numpy()\n  array([  1, 100, 100,   4], dtype=int32)\n\n  A scalar is expanded to match the other arguments:\n\n  >>> tf.where([[True, False], [False, True]], [[1, 2], [3, 4]], 100).numpy()\n  array([[  1, 100], [100,   4]], dtype=int32)\n  >>> tf.where([[True, False], [False, True]], 1, 100).numpy()\n  array([[  1, 100], [100,   1]], dtype=int32)\n\n  A scalar `condition` returns the complete `x` or `y` tensor, with\n  broadcasting applied.\n\n  >>> tf.where(True, [1, 2, 3, 4], 100).numpy()\n  array([1, 2, 3, 4], dtype=int32)\n  >>> tf.where(False, [1, 2, 3, 4], 100).numpy()\n  array([100, 100, 100, 100], dtype=int32)\n\n  For a non-trivial example of broadcasting, here `condition` has a shape of\n  `[3]`, `x` has a shape of `[3,3]`, and `y` has a shape of `[3,1]`.\n  Broadcasting first expands the shape of `condition` to `[1,3]`. The final\n  broadcast shape is `[3,3]`. `condition` will select columns from `x` and `y`.\n  Since `y` only has one column, all columns from `y` will be identical.\n\n  >>> tf.where([True, False, True],\n  ...          x=[[1, 2, 3],\n  ...             [4, 5, 6],\n  ...             [7, 8, 9]],\n  ...          y=[[100],\n  ...             [200],\n  ...             [300]]\n  ... ).numpy()\n  array([[ 1, 100, 3],\n         [ 4, 200, 6],\n         [ 7, 300, 9]], dtype=int32)\n\n  Note that if the gradient of either branch of the `tf.where` generates\n  a `NaN`, then the gradient of the entire `tf.where` will be `NaN`. This is\n  because the gradient calculation for `tf.where` combines the two branches, for\n  performance reasons.\n\n  A workaround is to use an inner `tf.where` to ensure the function has\n  no asymptote, and to avoid computing a value whose gradient is `NaN` by\n  replacing dangerous inputs with safe inputs.\n\n  Instead of this,\n\n  >>> x = tf.constant(0., dtype=tf.float32)\n  >>> with tf.GradientTape() as tape:\n  ...   tape.watch(x)\n  ...   y = tf.where(x < 1., 0., 1. / x)\n  >>> print(tape.gradient(y, x))\n  tf.Tensor(nan, shape=(), dtype=float32)\n\n  Although, the `1. / x` values are never used, its gradient is a `NaN` when\n  `x = 0`. Instead, we should guard that with another `tf.where`\n\n  >>> x = tf.constant(0., dtype=tf.float32)\n  >>> with tf.GradientTape() as tape:\n  ...   tape.watch(x)\n  ...   safe_x = tf.where(tf.equal(x, 0.), 1., x)\n  ...   y = tf.where(x < 1., 0., 1. / safe_x)\n  >>> print(tape.gradient(y, x))\n  tf.Tensor(0.0, shape=(), dtype=float32)\n\n  See also:\n\n  * `tf.sparse` - The indices returned by the first form of `tf.where` can be\n     useful in `tf.sparse.SparseTensor` objects.\n  * `tf.gather_nd`, `tf.scatter_nd`, and related ops - Given the\n    list of indices returned from `tf.where` the `scatter` and `gather` family\n    of ops can be used fetch values or insert values at those indices.\n  * `tf.strings.length` - `tf.string` is not an allowed dtype for the\n    `condition`. Use the string length instead.\n\n  Args:\n    condition: A `tf.Tensor` of dtype bool, or any numeric dtype. `condition`\n      must have dtype `bool` when `x` and `y` are provided.\n    x: If provided, a Tensor which is of the same type as `y`, and has a shape\n      broadcastable with `condition` and `y`.\n    y: If provided, a Tensor which is of the same type as `x`, and has a shape\n      broadcastable with `condition` and `x`.\n    name: A name of the operation (optional).\n\n  Returns:\n    If `x` and `y` are provided:\n      A `Tensor` with the same type as `x` and `y`, and shape that\n      is broadcast from `condition`, `x`, and `y`.\n    Otherwise, a `Tensor` with shape `[tf.math.count_nonzero(condition),\n    tf.rank(condition)]`.\n\n  Raises:\n    ValueError: When exactly one of `x` or `y` is non-None, or the shapes\n      are not all broadcastable.\n  "},{name:"while_loop",path:"./tf/while_loop.md",desc:"Repeat `body` while the condition `cond` is true. (deprecated argument values",type:"Functions",docs:`Repeat \`body\` while the condition \`cond\` is true. (deprecated argument values)

Deprecated: SOME ARGUMENT VALUES ARE DEPRECATED: \`(back_prop=False)\`. They will be removed in a future version.
Instructions for updating:
back_prop=False is deprecated. Consider using tf.stop_gradient instead.
Instead of:
results = tf.while_loop(c, b, vars, back_prop=False)
Use:
results = tf.nest.map_structure(tf.stop_gradient, tf.while_loop(c, b, vars))

\`cond\` is a callable returning a boolean scalar tensor. \`body\` is a callable
returning a (possibly nested) tuple, namedtuple or list of tensors of the same
arity (length and structure) and types as \`loop_vars\`. \`loop_vars\` is a
(possibly nested) tuple, namedtuple or list of tensors that is passed to both
\`cond\` and \`body\`. \`cond\` and \`body\` both take as many arguments as there are
\`loop_vars\`.

In addition to regular Tensors or IndexedSlices, the body may accept and
return TensorArray objects.  The flows of the TensorArray objects will
be appropriately forwarded between loops and during gradient calculations.

Note that \`while_loop\` calls \`cond\` and \`body\` *exactly once* (inside the
call to \`while_loop\`, and not at all during \`Session.run()\`). \`while_loop\`
stitches together the graph fragments created during the \`cond\` and \`body\`
calls with some additional graph nodes to create the graph flow that
repeats \`body\` until \`cond\` returns false.

For correctness, \`tf.while_loop()\` strictly enforces shape invariants for
the loop variables. A shape invariant is a (possibly partial) shape that
is unchanged across the iterations of the loop. An error will be raised
if the shape of a loop variable after an iteration is determined to be more
general than or incompatible with its shape invariant. For example, a shape
of [11, None] is more general than a shape of [11, 17], and [11, 21] is not
compatible with [11, 17]. By default (if the argument \`shape_invariants\` is
not specified), it is assumed that the initial shape of each tensor in
\`loop_vars\` is the same in every iteration. The \`shape_invariants\` argument
allows the caller to specify a less specific shape invariant for each loop
variable, which is needed if the shape varies between iterations. The
\`tf.Tensor.set_shape\`
function may also be used in the \`body\` function to indicate that
the output loop variable has a particular shape. The shape invariant for
SparseTensor and IndexedSlices are treated specially as follows:

a) If a loop variable is a SparseTensor, the shape invariant must be
TensorShape([r]) where r is the rank of the dense tensor represented
by the sparse tensor. It means the shapes of the three tensors of the
SparseTensor are ([None], [None, r], [r]). NOTE: The shape invariant here
is the shape of the SparseTensor.dense_shape property. It must be the shape of
a vector.

b) If a loop variable is an IndexedSlices, the shape invariant must be
a shape invariant of the values tensor of the IndexedSlices. It means
the shapes of the three tensors of the IndexedSlices are (shape, [shape[0]],
[shape.ndims]).

\`while_loop\` implements non-strict semantics, enabling multiple iterations
to run in parallel. The maximum number of parallel iterations can be
controlled by \`parallel_iterations\`, which gives users some control over
memory consumption and execution order. For correct programs, \`while_loop\`
should return the same result for any parallel_iterations > 0.

For training, TensorFlow stores the tensors that are produced in the
forward inference and are needed in back propagation. These tensors are a
main source of memory consumption and often cause OOM errors when training
on GPUs. When the flag swap_memory is true, we swap out these tensors from
GPU to CPU. This for example allows us to train RNN models with very long
sequences and large batches.

Args:
  cond: A callable that represents the termination condition of the loop.
  body: A callable that represents the loop body.
  loop_vars: A (possibly nested) tuple, namedtuple or list of numpy array,
    \`Tensor\`, and \`TensorArray\` objects.
  shape_invariants: The shape invariants for the loop variables.
  parallel_iterations: The number of iterations allowed to run in parallel. It
    must be a positive integer.
  back_prop: (optional) Deprecated. False disables support for back
    propagation. Prefer using \`tf.stop_gradient\` instead.
  swap_memory: Whether GPU-CPU memory swap is enabled for this loop.
  maximum_iterations: Optional maximum number of iterations of the while loop
    to run.  If provided, the \`cond\` output is AND-ed with an additional
    condition ensuring the number of iterations executed is no greater than
    \`maximum_iterations\`.
  name: Optional name prefix for the returned tensors.

Returns:
  The output tensors for the loop variables after the loop. The return value
    has the same structure as \`loop_vars\`.

Raises:
  TypeError: if \`cond\` or \`body\` is not callable.
  ValueError: if \`loop_vars\` is empty.

Example:

\`\`\`python
i = tf.constant(0)
c = lambda i: tf.less(i, 10)
b = lambda i: (tf.add(i, 1), )
r = tf.while_loop(c, b, [i])
\`\`\`

Example with nesting and a namedtuple:

\`\`\`python
import collections
Pair = collections.namedtuple('Pair', 'j, k')
ijk_0 = (tf.constant(0), Pair(tf.constant(1), tf.constant(2)))
c = lambda i, p: i < 10
b = lambda i, p: (i + 1, Pair((p.j + p.k), (p.j - p.k)))
ijk_final = tf.while_loop(c, b, ijk_0)
\`\`\`

Example using shape_invariants:

\`\`\`python
i0 = tf.constant(0)
m0 = tf.ones([2, 2])
c = lambda i, m: i < 10
b = lambda i, m: [i+1, tf.concat([m, m], axis=0)]
tf.while_loop(
    c, b, loop_vars=[i0, m0],
    shape_invariants=[i0.get_shape(), tf.TensorShape([None, 2])])
\`\`\`

Example which demonstrates non-strict semantics: In the following
example, the final value of the counter \`i\` does not depend on \`x\`. So
the \`while_loop\` can increment the counter parallel to updates of \`x\`.
However, because the loop counter at one loop iteration depends
on the value at the previous iteration, the loop counter itself cannot
be incremented in parallel. Hence if we just want the final value of the
counter (which we print on the line \`print(sess.run(i))\`), then
\`x\` will never be incremented, but the counter will be updated on a
single thread. Conversely, if we want the value of the output (which we
print on the line \`print(sess.run(out).shape)\`), then the counter may be
incremented on its own thread, while \`x\` can be incremented in
parallel on a separate thread. In the extreme case, it is conceivable
that the thread incrementing the counter runs until completion before
\`x\` is incremented even a single time. The only thing that can never
happen is that the thread updating \`x\` can never get ahead of the
counter thread because the thread incrementing \`x\` depends on the value
of the counter.

\`\`\`python
import tensorflow as tf

n = 10000
x = tf.constant(list(range(n)))
c = lambda i, x: i < n
b = lambda i, x: (tf.compat.v1.Print(i + 1, [i]), tf.compat.v1.Print(x + 1,
[i], "x:"))
i, out = tf.while_loop(c, b, (0, x))
with tf.compat.v1.Session() as sess:
    print(sess.run(i))  # prints [0] ... [9999]

    # The following line may increment the counter and x in parallel.
    # The counter thread may get ahead of the other thread, but not the
    # other way around. So you may see things like
    # [9996] x:[9987]
    # meaning that the counter thread is on iteration 9996,
    # while the other thread is on iteration 9987
    print(sess.run(out).shape)
\`\`\``},{name:"zeros",path:"./tf/zeros.md",desc:"Creates a tensor with all elements set to zero.",type:"Functions",docs:"Creates a tensor with all elements set to zero.\n\n  See also `tf.zeros_like`, `tf.ones`, `tf.fill`, `tf.eye`.\n\n  This operation returns a tensor of type `dtype` with shape `shape` and\n  all elements set to zero.\n\n  >>> tf.zeros([3, 4], tf.int32)\n  <tf.Tensor: shape=(3, 4), dtype=int32, numpy=\n  array([[0, 0, 0, 0],\n         [0, 0, 0, 0],\n         [0, 0, 0, 0]], dtype=int32)>\n\n  Args:\n    shape: A `list` of integers, a `tuple` of integers, or\n      a 1-D `Tensor` of type `int32`.\n    dtype: The DType of an element in the resulting `Tensor`.\n    name: Optional string. A name for the operation.\n\n  Returns:\n    A `Tensor` with all elements set to zero.\n  "},{name:"zeros_like",path:"./tf/zeros_like.md",desc:"Creates a tensor with all elements set to zero.",type:"Functions",docs:"Creates a tensor with all elements set to zero.\n\n  See also `tf.zeros`.\n\n  Given a single tensor or array-like object (`input`), this operation returns\n  a tensor of the same type and shape as `input` with all elements set to zero.\n  Optionally, you can use `dtype` to specify a new type for the returned tensor.\n\n  Examples:\n\n    >>> tensor = tf.constant([[1, 2, 3], [4, 5, 6]])\n    >>> tf.zeros_like(tensor)\n    <tf.Tensor: shape=(2, 3), dtype=int32, numpy=\n    array([[0, 0, 0],\n           [0, 0, 0]], dtype=int32)>\n\n    >>> tf.zeros_like(tensor, dtype=tf.float32)\n    <tf.Tensor: shape=(2, 3), dtype=float32, numpy=\n    array([[0., 0., 0.],\n           [0., 0., 0.]], dtype=float32)>\n\n    >>> tf.zeros_like([[1, 2, 3], [4, 5, 6]])\n    <tf.Tensor: shape=(2, 3), dtype=int32, numpy=\n    array([[0, 0, 0],\n           [0, 0, 0]], dtype=int32)>\n\n  Args:\n    input: A `Tensor` or array-like object.\n    dtype: A type for the returned `Tensor`. Must be `float16`, `float32`,\n      `float64`, `int8`, `uint8`, `int16`, `uint16`, `int32`, `int64`,\n      `complex64`, `complex128`, `bool` or `string` (optional).\n    name: A name for the operation (optional).\n\n  Returns:\n    A `Tensor` with all elements set to zero.\n  "}];function Xb(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Da=Xb();function g2(e){Da=e}const b2=/[&<>"']/,v2=/[&<>"']/g,y2=/[<>"']|&(?!#?\w+;)/,_2=/[<>"']|&(?!#?\w+;)/g,w2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},qf=e=>w2[e];function Jt(e,t){if(t){if(b2.test(e))return e.replace(v2,qf)}else if(y2.test(e))return e.replace(_2,qf);return e}const x2=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Zb(e){return e.replace(x2,(t,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const k2=/(^|[^\[])\^/g;function Mt(e,t){e=typeof e=="string"?e:e.source,t=t||"";const n={replace:(o,r)=>(r=r.source||r,r=r.replace(k2,"$1"),e=e.replace(o,r),n),getRegex:()=>new RegExp(e,t)};return n}const T2=/[^\w:]/g,C2=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Kf(e,t,n){if(e){let o;try{o=decodeURIComponent(Zb(n)).replace(T2,"").toLowerCase()}catch{return null}if(o.indexOf("javascript:")===0||o.indexOf("vbscript:")===0||o.indexOf("data:")===0)return null}t&&!C2.test(n)&&(n=E2(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const wl={},S2=/^[^:]+:\/*[^/]*$/,$2=/^([^:]+:)[\s\S]*$/,A2=/^([^:]+:\/*[^/]*)[\s\S]*$/;function E2(e,t){wl[" "+e]||(S2.test(e)?wl[" "+e]=e+"/":wl[" "+e]=Fl(e,"/",!0)),e=wl[" "+e];const n=e.indexOf(":")===-1;return t.substring(0,2)==="//"?n?t:e.replace($2,"$1")+t:t.charAt(0)==="/"?n?t:e.replace(A2,"$1")+t:e+t}const _s={exec:function(){}};function so(e){let t=1,n,o;for(;t<arguments.length;t++){n=arguments[t];for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}function Wf(e,t){const n=e.replace(/\|/g,(a,i,l)=>{let s=!1,c=i;for(;--c>=0&&l[c]==="\\";)s=!s;return s?"|":" |"}),o=n.split(/ \|/);let r=0;if(o[0].trim()||o.shift(),o.length>0&&!o[o.length-1].trim()&&o.pop(),o.length>t)o.splice(t);else for(;o.length<t;)o.push("");for(;r<o.length;r++)o[r]=o[r].trim().replace(/\\\|/g,"|");return o}function Fl(e,t,n){const o=e.length;if(o===0)return"";let r=0;for(;r<o;){const a=e.charAt(o-r-1);if(a===t&&!n)r++;else if(a!==t&&n)r++;else break}return e.slice(0,o-r)}function z2(e,t){if(e.indexOf(t[1])===-1)return-1;const n=e.length;let o=0,r=0;for(;r<n;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])o++;else if(e[r]===t[1]&&(o--,o<0))return r;return-1}function Jb(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Uf(e,t){if(t<1)return"";let n="";for(;t>1;)t&1&&(n+=e),t>>=1,e+=e;return n+e}function Yf(e,t,n,o){const r=t.href,a=t.title?Jt(t.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){o.state.inLink=!0;const l={type:"link",raw:n,href:r,title:a,text:i,tokens:o.inlineTokens(i,[])};return o.state.inLink=!1,l}return{type:"image",raw:n,href:r,title:a,text:Jt(i)}}function I2(e,t){const n=e.match(/^(\s+)(?:```)/);if(n===null)return t;const o=n[1];return t.split(`
`).map(r=>{const a=r.match(/^\s+/);if(a===null)return r;const[i]=a;return i.length>=o.length?r.slice(o.length):r}).join(`
`)}class Du{constructor(t){this.options=t||Da}space(t){const n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){const n=this.rules.block.code.exec(t);if(n){const o=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?o:Fl(o,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const o=n[0],r=I2(o,n[3]||"");return{type:"code",raw:o,lang:n[2]?n[2].trim():n[2],text:r}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let o=n[2].trim();if(/#$/.test(o)){const a=Fl(o,"#");(this.options.pedantic||!a||/ $/.test(a))&&(o=a.trim())}const r={type:"heading",raw:n[0],depth:n[1].length,text:o,tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:n[0]}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){const o=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(o,[]),text:o}}}list(t){let n=this.rules.block.list.exec(t);if(n){let o,r,a,i,l,s,c,d,u,p,f,h,b=n[1].trim();const m=b.length>1,g={type:"list",raw:"",ordered:m,start:m?+b.slice(0,-1):"",loose:!1,items:[]};b=m?`\\d{1,9}\\${b.slice(-1)}`:`\\${b}`,this.options.pedantic&&(b=m?b:"[*+-]");const v=new RegExp(`^( {0,3}${b})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(h=!1,!(!(n=v.exec(t))||this.rules.block.hr.test(t)));){if(o=n[0],t=t.substring(o.length),d=n[2].split(`
`,1)[0],u=t.split(`
`,1)[0],this.options.pedantic?(i=2,f=d.trimLeft()):(i=n[2].search(/[^ ]/),i=i>4?1:i,f=d.slice(i),i+=n[1].length),s=!1,!d&&/^ *$/.test(u)&&(o+=u+`
`,t=t.substring(u.length+1),h=!0),!h){const T=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),x=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);for(;t&&(p=t.split(`
`,1)[0],d=p,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(T.test(d)||x.test(t)));){if(d.search(/[^ ]/)>=i||!d.trim())f+=`
`+d.slice(i);else if(!s)f+=`
`+d;else break;!s&&!d.trim()&&(s=!0),o+=p+`
`,t=t.substring(p.length+1)}}g.loose||(c?g.loose=!0:/\n *\n *$/.test(o)&&(c=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(f),r&&(a=r[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),g.items.push({type:"list_item",raw:o,task:!!r,checked:a,loose:!1,text:f}),g.raw+=o}g.items[g.items.length-1].raw=o.trimRight(),g.items[g.items.length-1].text=f.trimRight(),g.raw=g.raw.trimRight();const y=g.items.length;for(l=0;l<y;l++){this.lexer.state.top=!1,g.items[l].tokens=this.lexer.blockTokens(g.items[l].text,[]);const T=g.items[l].tokens.filter(k=>k.type==="space"),x=T.every(k=>{const $=k.raw.split("");let z=0;for(const P of $)if(P===`
`&&(z+=1),z>1)return!0;return!1});!g.loose&&T.length&&x&&(g.loose=!0,g.items[l].loose=!0)}return g}}html(t){const n=this.rules.block.html.exec(t);if(n){const o={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(o.type="paragraph",o.text=this.options.sanitizer?this.options.sanitizer(n[0]):Jt(n[0]),o.tokens=[],this.lexer.inline(o.text,o.tokens)),o}}def(t){const n=this.rules.block.def.exec(t);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const o=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:o,raw:n[0],href:n[2],title:n[3]}}}table(t){const n=this.rules.block.table.exec(t);if(n){const o={type:"table",header:Wf(n[1]).map(r=>({text:r})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(o.header.length===o.align.length){o.raw=n[0];let r=o.align.length,a,i,l,s;for(a=0;a<r;a++)/^ *-+: *$/.test(o.align[a])?o.align[a]="right":/^ *:-+: *$/.test(o.align[a])?o.align[a]="center":/^ *:-+ *$/.test(o.align[a])?o.align[a]="left":o.align[a]=null;for(r=o.rows.length,a=0;a<r;a++)o.rows[a]=Wf(o.rows[a],o.header.length).map(c=>({text:c}));for(r=o.header.length,i=0;i<r;i++)o.header[i].tokens=[],this.lexer.inline(o.header[i].text,o.header[i].tokens);for(r=o.rows.length,i=0;i<r;i++)for(s=o.rows[i],l=0;l<s.length;l++)s[l].tokens=[],this.lexer.inline(s[l].text,s[l].tokens);return o}}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n){const o={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(o.text,o.tokens),o}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n){const o={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(o.text,o.tokens),o}}text(t){const n=this.rules.block.text.exec(t);if(n){const o={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(o.text,o.tokens),o}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:Jt(n[1])}}tag(t){const n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Jt(n[0]):n[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const o=n[2].trim();if(!this.options.pedantic&&/^</.test(o)){if(!/>$/.test(o))return;const i=Fl(o.slice(0,-1),"\\");if((o.length-i.length)%2===0)return}else{const i=z2(n[2],"()");if(i>-1){const s=(n[0].indexOf("!")===0?5:4)+n[1].length+i;n[2]=n[2].substring(0,i),n[0]=n[0].substring(0,s).trim(),n[3]=""}}let r=n[2],a="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);i&&(r=i[1],a=i[3])}else a=n[3]?n[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(o)?r=r.slice(1):r=r.slice(1,-1)),Yf(n,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(t,n){let o;if((o=this.rules.inline.reflink.exec(t))||(o=this.rules.inline.nolink.exec(t))){let r=(o[2]||o[1]).replace(/\s+/g," ");if(r=n[r.toLowerCase()],!r||!r.href){const a=o[0].charAt(0);return{type:"text",raw:a,text:a}}return Yf(o,r,o[0],this.lexer)}}emStrong(t,n,o=""){let r=this.rules.inline.emStrong.lDelim.exec(t);if(!r||r[3]&&o.match(/[\p{L}\p{N}]/u))return;const a=r[1]||r[2]||"";if(!a||a&&(o===""||this.rules.inline.punctuation.exec(o))){const i=r[0].length-1;let l,s,c=i,d=0;const u=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(u.lastIndex=0,n=n.slice(-1*t.length+i);(r=u.exec(n))!=null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(s=l.length,r[3]||r[4]){c+=s;continue}else if((r[5]||r[6])&&i%3&&!((i+s)%3)){d+=s;continue}if(c-=s,c>0)continue;if(s=Math.min(s,s+c+d),Math.min(i,s)%2){const f=t.slice(1,i+r.index+s);return{type:"em",raw:t.slice(0,i+r.index+s+1),text:f,tokens:this.lexer.inlineTokens(f,[])}}const p=t.slice(2,i+r.index+s-1);return{type:"strong",raw:t.slice(0,i+r.index+s+1),text:p,tokens:this.lexer.inlineTokens(p,[])}}}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let o=n[2].replace(/\n/g," ");const r=/[^ ]/.test(o),a=/^ /.test(o)&&/ $/.test(o);return r&&a&&(o=o.substring(1,o.length-1)),o=Jt(o,!0),{type:"codespan",raw:n[0],text:o}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(t,n){const o=this.rules.inline.autolink.exec(t);if(o){let r,a;return o[2]==="@"?(r=Jt(this.options.mangle?n(o[1]):o[1]),a="mailto:"+r):(r=Jt(o[1]),a=r),{type:"link",raw:o[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}url(t,n){let o;if(o=this.rules.inline.url.exec(t)){let r,a;if(o[2]==="@")r=Jt(this.options.mangle?n(o[0]):o[0]),a="mailto:"+r;else{let i;do i=o[0],o[0]=this.rules.inline._backpedal.exec(o[0])[0];while(i!==o[0]);r=Jt(o[0]),o[1]==="www."?a="http://"+r:a=r}return{type:"link",raw:o[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t,n){const o=this.rules.inline.text.exec(t);if(o){let r;return this.lexer.state.inRawBlock?r=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):Jt(o[0]):o[0]:r=Jt(this.options.smartypants?n(o[0]):o[0]),{type:"text",raw:o[0],text:r}}}}const at={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:_s,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};at._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;at._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;at.def=Mt(at.def).replace("label",at._label).replace("title",at._title).getRegex();at.bullet=/(?:[*+-]|\d{1,9}[.)])/;at.listItemStart=Mt(/^( *)(bull) */).replace("bull",at.bullet).getRegex();at.list=Mt(at.list).replace(/bull/g,at.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+at.def.source+")").getRegex();at._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";at._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;at.html=Mt(at.html,"i").replace("comment",at._comment).replace("tag",at._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();at.paragraph=Mt(at._paragraph).replace("hr",at.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",at._tag).getRegex();at.blockquote=Mt(at.blockquote).replace("paragraph",at.paragraph).getRegex();at.normal=so({},at);at.gfm=so({},at.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});at.gfm.table=Mt(at.gfm.table).replace("hr",at.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",at._tag).getRegex();at.gfm.paragraph=Mt(at._paragraph).replace("hr",at.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",at.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",at._tag).getRegex();at.pedantic=so({},at.normal,{html:Mt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",at._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_s,paragraph:Mt(at.normal._paragraph).replace("hr",at.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",at.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const Xe={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:_s,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:_s,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};Xe._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";Xe.punctuation=Mt(Xe.punctuation).replace(/punctuation/g,Xe._punctuation).getRegex();Xe.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;Xe.escapedEmSt=/\\\*|\\_/g;Xe._comment=Mt(at._comment).replace("(?:-->|$)","-->").getRegex();Xe.emStrong.lDelim=Mt(Xe.emStrong.lDelim).replace(/punct/g,Xe._punctuation).getRegex();Xe.emStrong.rDelimAst=Mt(Xe.emStrong.rDelimAst,"g").replace(/punct/g,Xe._punctuation).getRegex();Xe.emStrong.rDelimUnd=Mt(Xe.emStrong.rDelimUnd,"g").replace(/punct/g,Xe._punctuation).getRegex();Xe._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;Xe._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;Xe._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;Xe.autolink=Mt(Xe.autolink).replace("scheme",Xe._scheme).replace("email",Xe._email).getRegex();Xe._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;Xe.tag=Mt(Xe.tag).replace("comment",Xe._comment).replace("attribute",Xe._attribute).getRegex();Xe._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;Xe._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;Xe._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;Xe.link=Mt(Xe.link).replace("label",Xe._label).replace("href",Xe._href).replace("title",Xe._title).getRegex();Xe.reflink=Mt(Xe.reflink).replace("label",Xe._label).replace("ref",at._label).getRegex();Xe.nolink=Mt(Xe.nolink).replace("ref",at._label).getRegex();Xe.reflinkSearch=Mt(Xe.reflinkSearch,"g").replace("reflink",Xe.reflink).replace("nolink",Xe.nolink).getRegex();Xe.normal=so({},Xe);Xe.pedantic=so({},Xe.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Mt(/^!?\[(label)\]\((.*?)\)/).replace("label",Xe._label).getRegex(),reflink:Mt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Xe._label).getRegex()});Xe.gfm=so({},Xe.normal,{escape:Mt(Xe.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});Xe.gfm.url=Mt(Xe.gfm.url,"i").replace("email",Xe.gfm._extended_email).getRegex();Xe.breaks=so({},Xe.gfm,{br:Mt(Xe.br).replace("{2,}","*").getRegex(),text:Mt(Xe.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function N2(e){return e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Gf(e){let t="",n,o;const r=e.length;for(n=0;n<r;n++)o=e.charCodeAt(n),Math.random()>.5&&(o="x"+o.toString(16)),t+="&#"+o+";";return t}class Mo{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Da,this.options.tokenizer=this.options.tokenizer||new Du,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:at.normal,inline:Xe.normal};this.options.pedantic?(n.block=at.pedantic,n.inline=Xe.pedantic):this.options.gfm&&(n.block=at.gfm,this.options.breaks?n.inline=Xe.breaks:n.inline=Xe.gfm),this.tokenizer.rules=n}static get rules(){return{block:at,inline:Xe}}static lex(t,n){return new Mo(n).lex(t)}static lexInline(t,n){return new Mo(n).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(t,n=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(l,s,c)=>s+"    ".repeat(c.length));let o,r,a,i;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(o=l.call({lexer:this},t,n))?(t=t.substring(o.raw.length),n.push(o),!0):!1))){if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length),o.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length),r=n[n.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+o.raw,r.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length),r=n[n.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+o.raw,r.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),n.push(o);continue}if(a=t,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const s=t.slice(1);let c;this.options.extensions.startBlock.forEach(function(d){c=d.call({lexer:this},s),typeof c=="number"&&c>=0&&(l=Math.min(l,c))}),l<1/0&&l>=0&&(a=t.substring(0,l+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){r=n[n.length-1],i&&r.type==="paragraph"?(r.raw+=`
`+o.raw,r.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(o),i=a.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length),r=n[n.length-1],r&&r.type==="text"?(r.raw+=`
`+o.raw,r.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(o);continue}if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(t,n){this.inlineQueue.push({src:t,tokens:n})}inlineTokens(t,n=[]){let o,r,a,i=t,l,s,c;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)d.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,l.index)+"["+Uf("a",l[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,l.index)+"["+Uf("a",l[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(i))!=null;)i=i.slice(0,l.index)+"++"+i.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;t;)if(s||(c=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(o=d.call({lexer:this},t,n))?(t=t.substring(o.raw.length),n.push(o),!0):!1))){if(o=this.tokenizer.escape(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.tag(t)){t=t.substring(o.raw.length),r=n[n.length-1],r&&o.type==="text"&&r.type==="text"?(r.raw+=o.raw,r.text+=o.text):n.push(o);continue}if(o=this.tokenizer.link(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(o.raw.length),r=n[n.length-1],r&&o.type==="text"&&r.type==="text"?(r.raw+=o.raw,r.text+=o.text):n.push(o);continue}if(o=this.tokenizer.emStrong(t,i,c)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.codespan(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.br(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.del(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.autolink(t,Gf)){t=t.substring(o.raw.length),n.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(t,Gf))){t=t.substring(o.raw.length),n.push(o);continue}if(a=t,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const u=t.slice(1);let p;this.options.extensions.startInline.forEach(function(f){p=f.call({lexer:this},u),typeof p=="number"&&p>=0&&(d=Math.min(d,p))}),d<1/0&&d>=0&&(a=t.substring(0,d+1))}if(o=this.tokenizer.inlineText(a,N2)){t=t.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(c=o.raw.slice(-1)),s=!0,r=n[n.length-1],r&&r.type==="text"?(r.raw+=o.raw,r.text+=o.text):n.push(o);continue}if(t){const d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return n}}class Lu{constructor(t){this.options=t||Da}code(t,n,o){const r=(n||"").match(/\S*/)[0];if(this.options.highlight){const a=this.options.highlight(t,r);a!=null&&a!==t&&(o=!0,t=a)}return t=t.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+Jt(r,!0)+'">'+(o?t:Jt(t,!0))+`</code></pre>
`:"<pre><code>"+(o?t:Jt(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,n,o,r){if(this.options.headerIds){const a=this.options.headerPrefix+r.slug(o);return`<h${n} id="${a}">${t}</h${n}>
`}return`<h${n}>${t}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,n,o){const r=n?"ol":"ul",a=n&&o!==1?' start="'+o+'"':"";return"<"+r+a+`>
`+t+"</"+r+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+n+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,n){const o=n.header?"th":"td";return(n.align?`<${o} align="${n.align}">`:`<${o}>`)+t+`</${o}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,n,o){if(t=Kf(this.options.sanitize,this.options.baseUrl,t),t===null)return o;let r='<a href="'+Jt(t)+'"';return n&&(r+=' title="'+n+'"'),r+=">"+o+"</a>",r}image(t,n,o){if(t=Kf(this.options.sanitize,this.options.baseUrl,t),t===null)return o;let r=`<img src="${t}" alt="${o}"`;return n&&(r+=` title="${n}"`),r+=this.options.xhtml?"/>":">",r}text(t){return t}}class Qb{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,n,o){return""+o}image(t,n,o){return""+o}br(){return""}}class ev{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,n){let o=t,r=0;if(this.seen.hasOwnProperty(o)){r=this.seen[t];do r++,o=t+"-"+r;while(this.seen.hasOwnProperty(o))}return n||(this.seen[t]=r,this.seen[o]=0),o}slug(t,n={}){const o=this.serialize(t);return this.getNextSafeSlug(o,n.dryrun)}}class Ro{constructor(t){this.options=t||Da,this.options.renderer=this.options.renderer||new Lu,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Qb,this.slugger=new ev}static parse(t,n){return new Ro(n).parse(t)}static parseInline(t,n){return new Ro(n).parseInline(t)}parse(t,n=!0){let o="",r,a,i,l,s,c,d,u,p,f,h,b,m,g,v,y,T,x,k;const $=t.length;for(r=0;r<$;r++){if(f=t[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(k=this.options.extensions.renderers[f.type].call({parser:this},f),k!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){o+=k||"";continue}switch(f.type){case"space":continue;case"hr":{o+=this.renderer.hr();continue}case"heading":{o+=this.renderer.heading(this.parseInline(f.tokens),f.depth,Zb(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{o+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{for(u="",d="",l=f.header.length,a=0;a<l;a++)d+=this.renderer.tablecell(this.parseInline(f.header[a].tokens),{header:!0,align:f.align[a]});for(u+=this.renderer.tablerow(d),p="",l=f.rows.length,a=0;a<l;a++){for(c=f.rows[a],d="",s=c.length,i=0;i<s;i++)d+=this.renderer.tablecell(this.parseInline(c[i].tokens),{header:!1,align:f.align[i]});p+=this.renderer.tablerow(d)}o+=this.renderer.table(u,p);continue}case"blockquote":{p=this.parse(f.tokens),o+=this.renderer.blockquote(p);continue}case"list":{for(h=f.ordered,b=f.start,m=f.loose,l=f.items.length,p="",a=0;a<l;a++)v=f.items[a],y=v.checked,T=v.task,g="",v.task&&(x=this.renderer.checkbox(y),m?v.tokens.length>0&&v.tokens[0].type==="paragraph"?(v.tokens[0].text=x+" "+v.tokens[0].text,v.tokens[0].tokens&&v.tokens[0].tokens.length>0&&v.tokens[0].tokens[0].type==="text"&&(v.tokens[0].tokens[0].text=x+" "+v.tokens[0].tokens[0].text)):v.tokens.unshift({type:"text",text:x}):g+=x),g+=this.parse(v.tokens,m),p+=this.renderer.listitem(g,T,y);o+=this.renderer.list(p,h,b);continue}case"html":{o+=this.renderer.html(f.text);continue}case"paragraph":{o+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(p=f.tokens?this.parseInline(f.tokens):f.text;r+1<$&&t[r+1].type==="text";)f=t[++r],p+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);o+=n?this.renderer.paragraph(p):p;continue}default:{const z='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(z);return}else throw new Error(z)}}}return o}parseInline(t,n){n=n||this.renderer;let o="",r,a,i;const l=t.length;for(r=0;r<l;r++){if(a=t[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(i=this.options.extensions.renderers[a.type].call({parser:this},a),i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type))){o+=i||"";continue}switch(a.type){case"escape":{o+=n.text(a.text);break}case"html":{o+=n.html(a.text);break}case"link":{o+=n.link(a.href,a.title,this.parseInline(a.tokens,n));break}case"image":{o+=n.image(a.href,a.title,a.text);break}case"strong":{o+=n.strong(this.parseInline(a.tokens,n));break}case"em":{o+=n.em(this.parseInline(a.tokens,n));break}case"codespan":{o+=n.codespan(a.text);break}case"br":{o+=n.br();break}case"del":{o+=n.del(this.parseInline(a.tokens,n));break}case"text":{o+=n.text(a.text);break}default:{const s='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(s);return}else throw new Error(s)}}}return o}}function ht(e,t,n){if(typeof e=="undefined"||e===null)throw new Error("marked(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(typeof t=="function"&&(n=t,t=null),t=so({},ht.defaults,t||{}),Jb(t),n){const o=t.highlight;let r;try{r=Mo.lex(e,t)}catch(l){return n(l)}const a=function(l){let s;if(!l)try{t.walkTokens&&ht.walkTokens(r,t.walkTokens),s=Ro.parse(r,t)}catch(c){l=c}return t.highlight=o,l?n(l):n(null,s)};if(!o||o.length<3||(delete t.highlight,!r.length))return a();let i=0;ht.walkTokens(r,function(l){l.type==="code"&&(i++,setTimeout(()=>{o(l.text,l.lang,function(s,c){if(s)return a(s);c!=null&&c!==l.text&&(l.text=c,l.escaped=!0),i--,i===0&&a()})},0))}),i===0&&a();return}try{const o=Mo.lex(e,t);return t.walkTokens&&ht.walkTokens(o,t.walkTokens),Ro.parse(o,t)}catch(o){if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+Jt(o.message+"",!0)+"</pre>";throw o}}ht.options=ht.setOptions=function(e){return so(ht.defaults,e),g2(ht.defaults),ht};ht.getDefaults=Xb;ht.defaults=Da;ht.use=function(...e){const t=so({},...e),n=ht.defaults.extensions||{renderers:{},childTokens:{}};let o;e.forEach(r=>{if(r.extensions&&(o=!0,r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const i=n.renderers?n.renderers[a.name]:null;i?n.renderers[a.name]=function(...l){let s=a.renderer.apply(this,l);return s===!1&&(s=i.apply(this,l)),s}:n.renderers[a.name]=a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[a.level]?n[a.level].unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}a.childTokens&&(n.childTokens[a.name]=a.childTokens)})),r.renderer){const a=ht.defaults.renderer||new Lu;for(const i in r.renderer){const l=a[i];a[i]=(...s)=>{let c=r.renderer[i].apply(a,s);return c===!1&&(c=l.apply(a,s)),c}}t.renderer=a}if(r.tokenizer){const a=ht.defaults.tokenizer||new Du;for(const i in r.tokenizer){const l=a[i];a[i]=(...s)=>{let c=r.tokenizer[i].apply(a,s);return c===!1&&(c=l.apply(a,s)),c}}t.tokenizer=a}if(r.walkTokens){const a=ht.defaults.walkTokens;t.walkTokens=function(i){r.walkTokens.call(this,i),a&&a.call(this,i)}}o&&(t.extensions=n),ht.setOptions(t)})};ht.walkTokens=function(e,t){for(const n of e)switch(t.call(ht,n),n.type){case"table":{for(const o of n.header)ht.walkTokens(o.tokens,t);for(const o of n.rows)for(const r of o)ht.walkTokens(r.tokens,t);break}case"list":{ht.walkTokens(n.items,t);break}default:ht.defaults.extensions&&ht.defaults.extensions.childTokens&&ht.defaults.extensions.childTokens[n.type]?ht.defaults.extensions.childTokens[n.type].forEach(function(o){ht.walkTokens(n[o],t)}):n.tokens&&ht.walkTokens(n.tokens,t)}};ht.parseInline=function(e,t){if(typeof e=="undefined"||e===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=so({},ht.defaults,t||{}),Jb(t);try{const n=Mo.lexInline(e,t);return t.walkTokens&&ht.walkTokens(n,t.walkTokens),Ro.parseInline(n,t)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+Jt(n.message+"",!0)+"</pre>";throw n}};ht.Parser=Ro;ht.parser=Ro.parse;ht.Renderer=Lu;ht.TextRenderer=Qb;ht.Lexer=Mo;ht.lexer=Mo.lex;ht.Tokenizer=Du;ht.Slugger=ev;ht.parse=ht;Ro.parse;Mo.lex;var tv=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},M2=Object.defineProperty,R2=Object.getOwnPropertyDescriptor,P2=(e,t,n,o)=>{for(var r=o>1?void 0:o?R2(t,n):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(r=(o?i(t,n,r):i(r))||r);return o&&r&&M2(t,n,r),r};function O2(e,t,n){return n.indexOf(e)===t}let wd=class extends Fu{get types(){return Hf.map(e=>e.type).filter(O2)}mounted(){YG(".api").accordion({collapsible:!0,header:".header",heightStyle:"content",active:!1})}encodeHtml(e){return e?ht(e):""}apis(e){return Hf.filter(t=>t.type==e)}};wd=P2([Gb({components:{}})],wd);const F2=wd,D2={id:"Home"},L2={class:"header clickable"},V2={class:"name"},B2=["innerHTML"],j2={class:"content"},H2=["innerHTML"];function q2(e,t,n,o,r,a){return w(),I("div",D2,[(w(!0),I(Fe,null,ct(e.types,i=>(w(),I("div",{class:"category",key:i},[M("h2",null,ve(i),1),(w(!0),I(Fe,null,ct(e.apis(i),l=>(w(),I("div",{class:"api",key:l.name},[M("div",L2,[M("span",V2,ve(l.name),1),M("span",{class:"desc",innerHTML:l.desc},null,8,B2)]),M("div",j2,[M("div",{class:"md-docstring",innerHTML:e.encodeHtml(l.docs)},null,8,H2)])]))),128))]))),128))])}var K2=tv(F2,[["render",q2],["__scopeId","data-v-743fbe10"]]),W2=Object.defineProperty,U2=Object.getOwnPropertyDescriptor,Y2=(e,t,n,o)=>{for(var r=o>1?void 0:o?U2(t,n):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(r=(o?i(t,n,r):i(r))||r);return o&&r&&W2(t,n,r),r};let xd=class extends Fu{};xd=Y2([Gb({components:{}})],xd);const G2=xd,X2=e=>(kw("data-v-bdbb760e"),e=e(),Tw(),e),Z2={id:"About"},J2=it(" This is HyDEV's Template "),Q2=X2(()=>M("div",null,"for Vue 3 + Typescript + Vite + Vue Router + SASS + Element Plus + Class Components",-1)),e3=[J2,Q2];function t3(e,t,n,o,r,a){return w(),I("div",Z2,e3)}var n3=tv(G2,[["render",t3],["__scopeId","data-v-bdbb760e"]]);/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const nv=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",La=e=>nv?Symbol(e):"_vr_"+e,o3=La("rvlm"),Xf=La("rvd"),Vu=La("r"),ov=La("rl"),kd=La("rvl"),la=typeof window!="undefined";function r3(e){return e.__esModule||nv&&e[Symbol.toStringTag]==="Module"}const It=Object.assign;function Tc(e,t){const n={};for(const o in t){const r=t[o];n[o]=Array.isArray(r)?r.map(e):e(r)}return n}const mi=()=>{},a3=/\/$/,i3=e=>e.replace(a3,"");function Cc(e,t,n="/"){let o,r={},a="",i="";const l=t.indexOf("?"),s=t.indexOf("#",l>-1?l:0);return l>-1&&(o=t.slice(0,l),a=t.slice(l+1,s>-1?s:t.length),r=e(a)),s>-1&&(o=o||t.slice(0,s),i=t.slice(s,t.length)),o=d3(o!=null?o:t,n),{fullPath:o+(a&&"?")+a+i,path:o,query:r,hash:i}}function l3(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Zf(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function s3(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&xa(t.matched[o],n.matched[r])&&rv(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function xa(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function rv(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!c3(e[n],t[n]))return!1;return!0}function c3(e,t){return Array.isArray(e)?Jf(e,t):Array.isArray(t)?Jf(t,e):e===t}function Jf(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function d3(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/");let r=n.length-1,a,i;for(a=0;a<o.length;a++)if(i=o[a],!(r===1||i==="."))if(i==="..")r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var Pi;(function(e){e.pop="pop",e.push="push"})(Pi||(Pi={}));var gi;(function(e){e.back="back",e.forward="forward",e.unknown=""})(gi||(gi={}));function u3(e){if(!e)if(la){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),i3(e)}const p3=/^[^#]+#/;function f3(e,t){return e.replace(p3,"#")+t}function h3(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const Gs=()=>({left:window.pageXOffset,top:window.pageYOffset});function m3(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=h3(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Qf(e,t){return(history.state?history.state.position-t:-1)+e}const Td=new Map;function g3(e,t){Td.set(e,t)}function b3(e){const t=Td.get(e);return Td.delete(e),t}let v3=()=>location.protocol+"//"+location.host;function av(e,t){const{pathname:n,search:o,hash:r}=t,a=e.indexOf("#");if(a>-1){let l=r.includes(e.slice(a))?e.slice(a).length:1,s=r.slice(l);return s[0]!=="/"&&(s="/"+s),Zf(s,"")}return Zf(n,e)+o+r}function y3(e,t,n,o){let r=[],a=[],i=null;const l=({state:p})=>{const f=av(e,location),h=n.value,b=t.value;let m=0;if(p){if(n.value=f,t.value=p,i&&i===h){i=null;return}m=b?p.position-b.position:0}else o(f);r.forEach(g=>{g(n.value,h,{delta:m,type:Pi.pop,direction:m?m>0?gi.forward:gi.back:gi.unknown})})};function s(){i=n.value}function c(p){r.push(p);const f=()=>{const h=r.indexOf(p);h>-1&&r.splice(h,1)};return a.push(f),f}function d(){const{history:p}=window;!p.state||p.replaceState(It({},p.state,{scroll:Gs()}),"")}function u(){for(const p of a)p();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:s,listen:c,destroy:u}}function eh(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?Gs():null}}function _3(e){const{history:t,location:n}=window,o={value:av(e,n)},r={value:t.state};r.value||a(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(s,c,d){const u=e.indexOf("#"),p=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+s:v3()+e+s;try{t[d?"replaceState":"pushState"](c,"",p),r.value=c}catch(f){console.error(f),n[d?"replace":"assign"](p)}}function i(s,c){const d=It({},t.state,eh(r.value.back,s,r.value.forward,!0),c,{position:r.value.position});a(s,d,!0),o.value=s}function l(s,c){const d=It({},r.value,t.state,{forward:s,scroll:Gs()});a(d.current,d,!0);const u=It({},eh(o.value,s,null),{position:d.position+1},c);a(s,u,!1),o.value=s}return{location:o,state:r,push:l,replace:i}}function w3(e){e=u3(e);const t=_3(e),n=y3(e,t.state,t.location,t.replace);function o(a,i=!0){i||n.pauseListeners(),history.go(a)}const r=It({location:"",base:e,go:o,createHref:f3.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function x3(e){return typeof e=="string"||e&&typeof e=="object"}function iv(e){return typeof e=="string"||typeof e=="symbol"}const Yo={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lv=La("nf");var th;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(th||(th={}));function ka(e,t){return It(new Error,{type:e,[lv]:!0},t)}function Go(e,t){return e instanceof Error&&lv in e&&(t==null||!!(e.type&t))}const nh="[^/]+?",k3={sensitive:!1,strict:!1,start:!0,end:!0},T3=/[.+*?^${}()[\]/\\]/g;function C3(e,t){const n=It({},k3,t),o=[];let r=n.start?"^":"";const a=[];for(const c of e){const d=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let u=0;u<c.length;u++){const p=c[u];let f=40+(n.sensitive?.25:0);if(p.type===0)u||(r+="/"),r+=p.value.replace(T3,"\\$&"),f+=40;else if(p.type===1){const{value:h,repeatable:b,optional:m,regexp:g}=p;a.push({name:h,repeatable:b,optional:m});const v=g||nh;if(v!==nh){f+=10;try{new RegExp(`(${v})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${h}" (${v}): `+T.message)}}let y=b?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;u||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,f+=20,m&&(f+=-8),b&&(f+=-20),v===".*"&&(f+=-50)}d.push(f)}o.push(d)}if(n.strict&&n.end){const c=o.length-1;o[c][o[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function l(c){const d=c.match(i),u={};if(!d)return null;for(let p=1;p<d.length;p++){const f=d[p]||"",h=a[p-1];u[h.name]=f&&h.repeatable?f.split("/"):f}return u}function s(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const f of p)if(f.type===0)d+=f.value;else if(f.type===1){const{value:h,repeatable:b,optional:m}=f,g=h in c?c[h]:"";if(Array.isArray(g)&&!b)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const v=Array.isArray(g)?g.join("/"):g;if(!v)if(m)p.length<2&&e.length>1&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${h}"`);d+=v}}return d}return{re:i,score:o,keys:a,parse:l,stringify:s}}function S3(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function $3(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const a=S3(o[n],r[n]);if(a)return a;n++}return r.length-o.length}const A3={type:0,value:""},E3=/[a-zA-Z0-9_]/;function z3(e){if(!e)return[[]];if(e==="/")return[[A3]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,o=n;const r=[];let a;function i(){a&&r.push(a),a=[]}let l=0,s,c="",d="";function u(){!c||(n===0?a.push({type:0,value:c}):n===1||n===2||n===3?(a.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:c,regexp:d,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=s}for(;l<e.length;){if(s=e[l++],s==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:s==="/"?(c&&u(),i()):s===":"?(u(),n=1):p();break;case 4:p(),n=o;break;case 1:s==="("?n=2:E3.test(s)?p():(u(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&l--);break;case 2:s===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+s:n=3:d+=s;break;case 3:u(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),i(),r}function I3(e,t,n){const o=C3(z3(e.path),n),r=It(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function N3(e,t){const n=[],o=new Map;t=rh({strict:!1,end:!0,sensitive:!1},t);function r(d){return o.get(d)}function a(d,u,p){const f=!p,h=R3(d);h.aliasOf=p&&p.record;const b=rh(t,d),m=[h];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const T of y)m.push(It({},h,{components:p?p.record.components:h.components,path:T,aliasOf:p?p.record:h}))}let g,v;for(const y of m){const{path:T}=y;if(u&&T[0]!=="/"){const x=u.record.path,k=x[x.length-1]==="/"?"":"/";y.path=u.record.path+(T&&k+T)}if(g=I3(y,u,b),p?p.alias.push(g):(v=v||g,v!==g&&v.alias.push(g),f&&d.name&&!oh(g)&&i(d.name)),"children"in h){const x=h.children;for(let k=0;k<x.length;k++)a(x[k],g,p&&p.children[k])}p=p||g,s(g)}return v?()=>{i(v)}:mi}function i(d){if(iv(d)){const u=o.get(d);u&&(o.delete(d),n.splice(n.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=n.indexOf(d);u>-1&&(n.splice(u,1),d.record.name&&o.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function l(){return n}function s(d){let u=0;for(;u<n.length&&$3(d,n[u])>=0&&(d.record.path!==n[u].record.path||!sv(d,n[u]));)u++;n.splice(u,0,d),d.record.name&&!oh(d)&&o.set(d.record.name,d)}function c(d,u){let p,f={},h,b;if("name"in d&&d.name){if(p=o.get(d.name),!p)throw ka(1,{location:d});b=p.record.name,f=It(M3(u.params,p.keys.filter(v=>!v.optional).map(v=>v.name)),d.params),h=p.stringify(f)}else if("path"in d)h=d.path,p=n.find(v=>v.re.test(h)),p&&(f=p.parse(h),b=p.record.name);else{if(p=u.name?o.get(u.name):n.find(v=>v.re.test(u.path)),!p)throw ka(1,{location:d,currentLocation:u});b=p.record.name,f=It({},u.params,d.params),h=p.stringify(f)}const m=[];let g=p;for(;g;)m.unshift(g.record),g=g.parent;return{name:b,path:h,params:f,matched:m,meta:O3(m)}}return e.forEach(d=>a(d)),{addRoute:a,resolve:c,removeRoute:i,getRoutes:l,getRecordMatcher:r}}function M3(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function R3(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:P3(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function P3(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="boolean"?n:n[o];return t}function oh(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function O3(e){return e.reduce((t,n)=>It(t,n.meta),{})}function rh(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function sv(e,t){return t.children.some(n=>n===e||sv(e,n))}const cv=/#/g,F3=/&/g,D3=/\//g,L3=/=/g,V3=/\?/g,dv=/\+/g,B3=/%5B/g,j3=/%5D/g,uv=/%5E/g,H3=/%60/g,pv=/%7B/g,q3=/%7C/g,fv=/%7D/g,K3=/%20/g;function Bu(e){return encodeURI(""+e).replace(q3,"|").replace(B3,"[").replace(j3,"]")}function W3(e){return Bu(e).replace(pv,"{").replace(fv,"}").replace(uv,"^")}function Cd(e){return Bu(e).replace(dv,"%2B").replace(K3,"+").replace(cv,"%23").replace(F3,"%26").replace(H3,"`").replace(pv,"{").replace(fv,"}").replace(uv,"^")}function U3(e){return Cd(e).replace(L3,"%3D")}function Y3(e){return Bu(e).replace(cv,"%23").replace(V3,"%3F")}function G3(e){return e==null?"":Y3(e).replace(D3,"%2F")}function ws(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function X3(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const a=o[r].replace(dv," "),i=a.indexOf("="),l=ws(i<0?a:a.slice(0,i)),s=i<0?null:ws(a.slice(i+1));if(l in t){let c=t[l];Array.isArray(c)||(c=t[l]=[c]),c.push(s)}else t[l]=s}return t}function ah(e){let t="";for(let n in e){const o=e[n];if(n=U3(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(o)?o.map(a=>a&&Cd(a)):[o&&Cd(o)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Z3(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Array.isArray(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}function Qa(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function nr(e,t,n,o,r){const a=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((i,l)=>{const s=u=>{u===!1?l(ka(4,{from:n,to:t})):u instanceof Error?l(u):x3(u)?l(ka(2,{from:t,to:u})):(a&&o.enterCallbacks[r]===a&&typeof u=="function"&&a.push(u),i())},c=e.call(o&&o.instances[r],t,n,s);let d=Promise.resolve(c);e.length<3&&(d=d.then(s)),d.catch(u=>l(u))})}function Sc(e,t,n,o){const r=[];for(const a of e)for(const i in a.components){let l=a.components[i];if(!(t!=="beforeRouteEnter"&&!a.instances[i]))if(J3(l)){const c=(l.__vccOpts||l)[t];c&&r.push(nr(c,n,o,a,i))}else{let s=l();r.push(()=>s.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));const d=r3(c)?c.default:c;a.components[i]=d;const p=(d.__vccOpts||d)[t];return p&&nr(p,n,o,a,i)()}))}}return r}function J3(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ih(e){const t=Ie(Vu),n=Ie(ov),o=C(()=>t.resolve(_(e.to))),r=C(()=>{const{matched:s}=o.value,{length:c}=s,d=s[c-1],u=n.matched;if(!d||!u.length)return-1;const p=u.findIndex(xa.bind(null,d));if(p>-1)return p;const f=lh(s[c-2]);return c>1&&lh(d)===f&&u[u.length-1].path!==f?u.findIndex(xa.bind(null,s[c-2])):p}),a=C(()=>r.value>-1&&nk(n.params,o.value.params)),i=C(()=>r.value>-1&&r.value===n.matched.length-1&&rv(n.params,o.value.params));function l(s={}){return tk(s)?t[_(e.replace)?"replace":"push"](_(e.to)).catch(mi):Promise.resolve()}return{route:o,href:C(()=>o.value.href),isActive:a,isExactActive:i,navigate:l}}const Q3=ee({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ih,setup(e,{slots:t}){const n=vt(ih(e)),{options:o}=Ie(Vu),r=C(()=>({[sh(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[sh(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Re("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},a)}}}),ek=Q3;function tk(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nk(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Array.isArray(r)||r.length!==o.length||o.some((a,i)=>a!==r[i]))return!1}return!0}function lh(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const sh=(e,t,n)=>e!=null?e:t!=null?t:n,ok=ee({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=Ie(kd),r=C(()=>e.route||o.value),a=Ie(Xf,0),i=C(()=>r.value.matched[a]);ot(Xf,a+1),ot(o3,i),ot(kd,r);const l=A();return ge(()=>[l.value,i.value,e.name],([s,c,d],[u,p,f])=>{c&&(c.instances[d]=s,p&&p!==c&&s&&s===u&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),s&&c&&(!p||!xa(c,p)||!u)&&(c.enterCallbacks[d]||[]).forEach(h=>h(s))},{flush:"post"}),()=>{const s=r.value,c=i.value,d=c&&c.components[e.name],u=e.name;if(!d)return ch(n.default,{Component:d,route:s});const p=c.props[e.name],f=p?p===!0?s.params:typeof p=="function"?p(s):p:null,b=Re(d,It({},f,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(c.instances[u]=null)},ref:l}));return ch(n.default,{Component:b,route:s})||b}}});function ch(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const rk=ok;function ak(e){const t=N3(e.routes,e),n=e.parseQuery||X3,o=e.stringifyQuery||ah,r=e.history,a=Qa(),i=Qa(),l=Qa(),s=Kt(Yo);let c=Yo;la&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Tc.bind(null,oe=>""+oe),u=Tc.bind(null,G3),p=Tc.bind(null,ws);function f(oe,H){let ne,ie;return iv(oe)?(ne=t.getRecordMatcher(oe),ie=H):ie=oe,t.addRoute(ie,ne)}function h(oe){const H=t.getRecordMatcher(oe);H&&t.removeRoute(H)}function b(){return t.getRoutes().map(oe=>oe.record)}function m(oe){return!!t.getRecordMatcher(oe)}function g(oe,H){if(H=It({},H||s.value),typeof oe=="string"){const Me=Cc(n,oe,H.path),j=t.resolve({path:Me.path},H),X=r.createHref(Me.fullPath);return It(Me,j,{params:p(j.params),hash:ws(Me.hash),redirectedFrom:void 0,href:X})}let ne;if("path"in oe)ne=It({},oe,{path:Cc(n,oe.path,H.path).path});else{const Me=It({},oe.params);for(const j in Me)Me[j]==null&&delete Me[j];ne=It({},oe,{params:u(oe.params)}),H.params=u(H.params)}const ie=t.resolve(ne,H),be=oe.hash||"";ie.params=d(p(ie.params));const $e=l3(o,It({},oe,{hash:W3(be),path:ie.path})),Ne=r.createHref($e);return It({fullPath:$e,hash:be,query:o===ah?Z3(oe.query):oe.query||{}},ie,{redirectedFrom:void 0,href:Ne})}function v(oe){return typeof oe=="string"?Cc(n,oe,s.value.path):It({},oe)}function y(oe,H){if(c!==oe)return ka(8,{from:H,to:oe})}function T(oe){return $(oe)}function x(oe){return T(It(v(oe),{replace:!0}))}function k(oe){const H=oe.matched[oe.matched.length-1];if(H&&H.redirect){const{redirect:ne}=H;let ie=typeof ne=="function"?ne(oe):ne;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=v(ie):{path:ie},ie.params={}),It({query:oe.query,hash:oe.hash,params:oe.params},ie)}}function $(oe,H){const ne=c=g(oe),ie=s.value,be=oe.state,$e=oe.force,Ne=oe.replace===!0,Me=k(ne);if(Me)return $(It(v(Me),{state:be,force:$e,replace:Ne}),H||ne);const j=ne;j.redirectedFrom=H;let X;return!$e&&s3(o,ie,ne)&&(X=ka(16,{to:j,from:ie}),Y(ie,ie,!0,!1)),(X?Promise.resolve(X):P(j,ie)).catch(de=>Go(de)?Go(de,2)?de:W(de):E(de,j,ie)).then(de=>{if(de){if(Go(de,2))return $(It(v(de.to),{state:be,force:$e,replace:Ne}),H||j)}else de=D(j,ie,!0,Ne,be);return O(j,ie,de),de})}function z(oe,H){const ne=y(oe,H);return ne?Promise.reject(ne):Promise.resolve()}function P(oe,H){let ne;const[ie,be,$e]=ik(oe,H);ne=Sc(ie.reverse(),"beforeRouteLeave",oe,H);for(const Me of ie)Me.leaveGuards.forEach(j=>{ne.push(nr(j,oe,H))});const Ne=z.bind(null,oe,H);return ne.push(Ne),Qr(ne).then(()=>{ne=[];for(const Me of a.list())ne.push(nr(Me,oe,H));return ne.push(Ne),Qr(ne)}).then(()=>{ne=Sc(be,"beforeRouteUpdate",oe,H);for(const Me of be)Me.updateGuards.forEach(j=>{ne.push(nr(j,oe,H))});return ne.push(Ne),Qr(ne)}).then(()=>{ne=[];for(const Me of oe.matched)if(Me.beforeEnter&&!H.matched.includes(Me))if(Array.isArray(Me.beforeEnter))for(const j of Me.beforeEnter)ne.push(nr(j,oe,H));else ne.push(nr(Me.beforeEnter,oe,H));return ne.push(Ne),Qr(ne)}).then(()=>(oe.matched.forEach(Me=>Me.enterCallbacks={}),ne=Sc($e,"beforeRouteEnter",oe,H),ne.push(Ne),Qr(ne))).then(()=>{ne=[];for(const Me of i.list())ne.push(nr(Me,oe,H));return ne.push(Ne),Qr(ne)}).catch(Me=>Go(Me,8)?Me:Promise.reject(Me))}function O(oe,H,ne){for(const ie of l.list())ie(oe,H,ne)}function D(oe,H,ne,ie,be){const $e=y(oe,H);if($e)return $e;const Ne=H===Yo,Me=la?history.state:{};ne&&(ie||Ne?r.replace(oe.fullPath,It({scroll:Ne&&Me&&Me.scroll},be)):r.push(oe.fullPath,be)),s.value=oe,Y(oe,H,ne,Ne),W()}let L;function F(){L||(L=r.listen((oe,H,ne)=>{const ie=g(oe),be=k(ie);if(be){$(It(be,{replace:!0}),ie).catch(mi);return}c=ie;const $e=s.value;la&&g3(Qf($e.fullPath,ne.delta),Gs()),P(ie,$e).catch(Ne=>Go(Ne,12)?Ne:Go(Ne,2)?($(Ne.to,ie).then(Me=>{Go(Me,20)&&!ne.delta&&ne.type===Pi.pop&&r.go(-1,!1)}).catch(mi),Promise.reject()):(ne.delta&&r.go(-ne.delta,!1),E(Ne,ie,$e))).then(Ne=>{Ne=Ne||D(ie,$e,!1),Ne&&(ne.delta?r.go(-ne.delta,!1):ne.type===Pi.pop&&Go(Ne,20)&&r.go(-1,!1)),O(ie,$e,Ne)}).catch(mi)}))}let V=Qa(),q=Qa(),R;function E(oe,H,ne){W(oe);const ie=q.list();return ie.length?ie.forEach(be=>be(oe,H,ne)):console.error(oe),Promise.reject(oe)}function N(){return R&&s.value!==Yo?Promise.resolve():new Promise((oe,H)=>{V.add([oe,H])})}function W(oe){return R||(R=!oe,F(),V.list().forEach(([H,ne])=>oe?ne(oe):H()),V.reset()),oe}function Y(oe,H,ne,ie){const{scrollBehavior:be}=e;if(!la||!be)return Promise.resolve();const $e=!ne&&b3(Qf(oe.fullPath,0))||(ie||!ne)&&history.state&&history.state.scroll||null;return je().then(()=>be(oe,H,$e)).then(Ne=>Ne&&m3(Ne)).catch(Ne=>E(Ne,oe,H))}const J=oe=>r.go(oe);let Z;const se=new Set;return{currentRoute:s,addRoute:f,removeRoute:h,hasRoute:m,getRoutes:b,resolve:g,options:e,push:T,replace:x,go:J,back:()=>J(-1),forward:()=>J(1),beforeEach:a.add,beforeResolve:i.add,afterEach:l.add,onError:q.add,isReady:N,install(oe){const H=this;oe.component("RouterLink",ek),oe.component("RouterView",rk),oe.config.globalProperties.$router=H,Object.defineProperty(oe.config.globalProperties,"$route",{enumerable:!0,get:()=>_(s)}),la&&!Z&&s.value===Yo&&(Z=!0,T(r.location).catch(be=>{}));const ne={};for(const be in Yo)ne[be]=C(()=>s.value[be]);oe.provide(Vu,H),oe.provide(ov,vt(ne)),oe.provide(kd,s);const ie=oe.unmount;se.add(oe),oe.unmount=function(){se.delete(oe),se.size<1&&(c=Yo,L&&L(),L=null,s.value=Yo,Z=!1,R=!1),ie()}}}}function Qr(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function ik(e,t){const n=[],o=[],r=[],a=Math.max(t.matched.length,e.matched.length);for(let i=0;i<a;i++){const l=t.matched[i];l&&(e.matched.find(c=>xa(c,l))?o.push(l):n.push(l));const s=e.matched[i];s&&(t.matched.find(c=>xa(c,s))||r.push(s))}return[n,o,r]}const lk=[{path:"/",name:"Home",component:K2},{path:"/about",name:"About",component:n3}],sk=ak({history:w3(),routes:lk});var ck=typeof global=="object"&&global&&global.Object===Object&&global,hv=ck,dk=typeof self=="object"&&self&&self.Object===Object&&self,uk=hv||dk||Function("return this")(),co=uk,pk=co.Symbol,jn=pk,mv=Object.prototype,fk=mv.hasOwnProperty,hk=mv.toString,ei=jn?jn.toStringTag:void 0;function mk(e){var t=fk.call(e,ei),n=e[ei];try{e[ei]=void 0;var o=!0}catch{}var r=hk.call(e);return o&&(t?e[ei]=n:delete e[ei]),r}var gk=Object.prototype,bk=gk.toString;function vk(e){return bk.call(e)}var yk="[object Null]",_k="[object Undefined]",dh=jn?jn.toStringTag:void 0;function Va(e){return e==null?e===void 0?_k:yk:dh&&dh in Object(e)?mk(e):vk(e)}function Po(e){return e!=null&&typeof e=="object"}var wk="[object Symbol]";function Xs(e){return typeof e=="symbol"||Po(e)&&Va(e)==wk}function xk(e,t){for(var n=-1,o=e==null?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}var kk=Array.isArray,ro=kk,Tk=1/0,uh=jn?jn.prototype:void 0,ph=uh?uh.toString:void 0;function gv(e){if(typeof e=="string")return e;if(ro(e))return xk(e,gv)+"";if(Xs(e))return ph?ph.call(e):"";var t=e+"";return t=="0"&&1/e==-Tk?"-0":t}var Ck=/\s/;function Sk(e){for(var t=e.length;t--&&Ck.test(e.charAt(t)););return t}var $k=/^\s+/;function Ak(e){return e&&e.slice(0,Sk(e)+1).replace($k,"")}function ao(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var fh=0/0,Ek=/^[-+]0x[0-9a-f]+$/i,zk=/^0b[01]+$/i,Ik=/^0o[0-7]+$/i,Nk=parseInt;function hh(e){if(typeof e=="number")return e;if(Xs(e))return fh;if(ao(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ao(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ak(e);var n=zk.test(e);return n||Ik.test(e)?Nk(e.slice(2),n?2:8):Ek.test(e)?fh:+e}function bv(e){return e}var Mk="[object AsyncFunction]",Rk="[object Function]",Pk="[object GeneratorFunction]",Ok="[object Proxy]";function vv(e){if(!ao(e))return!1;var t=Va(e);return t==Rk||t==Pk||t==Mk||t==Ok}var Fk=co["__core-js_shared__"],$c=Fk,mh=function(){var e=/[^.]+$/.exec($c&&$c.keys&&$c.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Dk(e){return!!mh&&mh in e}var Lk=Function.prototype,Vk=Lk.toString;function Ur(e){if(e!=null){try{return Vk.call(e)}catch{}try{return e+""}catch{}}return""}var Bk=/[\\^$.*+?()[\]{}|]/g,jk=/^\[object .+?Constructor\]$/,Hk=Function.prototype,qk=Object.prototype,Kk=Hk.toString,Wk=qk.hasOwnProperty,Uk=RegExp("^"+Kk.call(Wk).replace(Bk,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Yk(e){if(!ao(e)||Dk(e))return!1;var t=vv(e)?Uk:jk;return t.test(Ur(e))}function Gk(e,t){return e==null?void 0:e[t]}function Yr(e,t){var n=Gk(e,t);return Yk(n)?n:void 0}var Xk=Yr(co,"WeakMap"),Sd=Xk,gh=Object.create,Zk=function(){function e(){}return function(t){if(!ao(t))return{};if(gh)return gh(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),Jk=Zk;function Qk(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function e6(){}function t6(e,t){var n=-1,o=e.length;for(t||(t=Array(o));++n<o;)t[n]=e[n];return t}var n6=800,o6=16,r6=Date.now;function a6(e){var t=0,n=0;return function(){var o=r6(),r=o6-(o-n);if(n=o,r>0){if(++t>=n6)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function i6(e){return function(){return e}}var l6=function(){try{var e=Yr(Object,"defineProperty");return e({},"",{}),e}catch{}}(),xs=l6,s6=xs?function(e,t){return xs(e,"toString",{configurable:!0,enumerable:!1,value:i6(t),writable:!0})}:bv,c6=s6,d6=a6(c6),yv=d6;function u6(e,t){for(var n=-1,o=e==null?0:e.length;++n<o&&t(e[n],n,e)!==!1;);return e}function p6(e,t,n,o){for(var r=e.length,a=n+(o?1:-1);o?a--:++a<r;)if(t(e[a],a,e))return a;return-1}function f6(e){return e!==e}function h6(e,t,n){for(var o=n-1,r=e.length;++o<r;)if(e[o]===t)return o;return-1}function m6(e,t,n){return t===t?h6(e,t,n):p6(e,f6,n)}function g6(e,t){var n=e==null?0:e.length;return!!n&&m6(e,t,0)>-1}var b6=9007199254740991,v6=/^(?:0|[1-9]\d*)$/;function ju(e,t){var n=typeof e;return t=t==null?b6:t,!!t&&(n=="number"||n!="symbol"&&v6.test(e))&&e>-1&&e%1==0&&e<t}function _v(e,t,n){t=="__proto__"&&xs?xs(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Hu(e,t){return e===t||e!==e&&t!==t}var y6=Object.prototype,_6=y6.hasOwnProperty;function qu(e,t,n){var o=e[t];(!(_6.call(e,t)&&Hu(o,n))||n===void 0&&!(t in e))&&_v(e,t,n)}function Zs(e,t,n,o){var r=!n;n||(n={});for(var a=-1,i=t.length;++a<i;){var l=t[a],s=o?o(n[l],e[l],l,n,e):void 0;s===void 0&&(s=e[l]),r?_v(n,l,s):qu(n,l,s)}return n}var bh=Math.max;function wv(e,t,n){return t=bh(t===void 0?e.length-1:t,0),function(){for(var o=arguments,r=-1,a=bh(o.length-t,0),i=Array(a);++r<a;)i[r]=o[t+r];r=-1;for(var l=Array(t+1);++r<t;)l[r]=o[r];return l[t]=n(i),Qk(e,this,l)}}function w6(e,t){return yv(wv(e,t,bv),e+"")}var x6=9007199254740991;function Ku(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=x6}function Wu(e){return e!=null&&Ku(e.length)&&!vv(e)}var k6=Object.prototype;function Uu(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||k6;return e===n}function T6(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}var C6="[object Arguments]";function vh(e){return Po(e)&&Va(e)==C6}var xv=Object.prototype,S6=xv.hasOwnProperty,$6=xv.propertyIsEnumerable,A6=vh(function(){return arguments}())?vh:function(e){return Po(e)&&S6.call(e,"callee")&&!$6.call(e,"callee")},Yu=A6;function E6(){return!1}var kv=typeof $n=="object"&&$n&&!$n.nodeType&&$n,yh=kv&&typeof An=="object"&&An&&!An.nodeType&&An,z6=yh&&yh.exports===kv,_h=z6?co.Buffer:void 0,I6=_h?_h.isBuffer:void 0,N6=I6||E6,ks=N6,M6="[object Arguments]",R6="[object Array]",P6="[object Boolean]",O6="[object Date]",F6="[object Error]",D6="[object Function]",L6="[object Map]",V6="[object Number]",B6="[object Object]",j6="[object RegExp]",H6="[object Set]",q6="[object String]",K6="[object WeakMap]",W6="[object ArrayBuffer]",U6="[object DataView]",Y6="[object Float32Array]",G6="[object Float64Array]",X6="[object Int8Array]",Z6="[object Int16Array]",J6="[object Int32Array]",Q6="[object Uint8Array]",eT="[object Uint8ClampedArray]",tT="[object Uint16Array]",nT="[object Uint32Array]",Lt={};Lt[Y6]=Lt[G6]=Lt[X6]=Lt[Z6]=Lt[J6]=Lt[Q6]=Lt[eT]=Lt[tT]=Lt[nT]=!0;Lt[M6]=Lt[R6]=Lt[W6]=Lt[P6]=Lt[U6]=Lt[O6]=Lt[F6]=Lt[D6]=Lt[L6]=Lt[V6]=Lt[B6]=Lt[j6]=Lt[H6]=Lt[q6]=Lt[K6]=!1;function oT(e){return Po(e)&&Ku(e.length)&&!!Lt[Va(e)]}function Gu(e){return function(t){return e(t)}}var Tv=typeof $n=="object"&&$n&&!$n.nodeType&&$n,bi=Tv&&typeof An=="object"&&An&&!An.nodeType&&An,rT=bi&&bi.exports===Tv,Ac=rT&&hv.process,aT=function(){try{var e=bi&&bi.require&&bi.require("util").types;return e||Ac&&Ac.binding&&Ac.binding("util")}catch{}}(),Ta=aT,wh=Ta&&Ta.isTypedArray,iT=wh?Gu(wh):oT,Cv=iT,lT=Object.prototype,sT=lT.hasOwnProperty;function Sv(e,t){var n=ro(e),o=!n&&Yu(e),r=!n&&!o&&ks(e),a=!n&&!o&&!r&&Cv(e),i=n||o||r||a,l=i?T6(e.length,String):[],s=l.length;for(var c in e)(t||sT.call(e,c))&&!(i&&(c=="length"||r&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||ju(c,s)))&&l.push(c);return l}function $v(e,t){return function(n){return e(t(n))}}var cT=$v(Object.keys,Object),dT=cT,uT=Object.prototype,pT=uT.hasOwnProperty;function fT(e){if(!Uu(e))return dT(e);var t=[];for(var n in Object(e))pT.call(e,n)&&n!="constructor"&&t.push(n);return t}function Xu(e){return Wu(e)?Sv(e):fT(e)}function hT(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var mT=Object.prototype,gT=mT.hasOwnProperty;function bT(e){if(!ao(e))return hT(e);var t=Uu(e),n=[];for(var o in e)o=="constructor"&&(t||!gT.call(e,o))||n.push(o);return n}function Zu(e){return Wu(e)?Sv(e,!0):bT(e)}var vT=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yT=/^\w*$/;function _T(e,t){if(ro(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Xs(e)?!0:yT.test(e)||!vT.test(e)||t!=null&&e in Object(t)}var wT=Yr(Object,"create"),Oi=wT;function xT(){this.__data__=Oi?Oi(null):{},this.size=0}function kT(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var TT="__lodash_hash_undefined__",CT=Object.prototype,ST=CT.hasOwnProperty;function $T(e){var t=this.__data__;if(Oi){var n=t[e];return n===TT?void 0:n}return ST.call(t,e)?t[e]:void 0}var AT=Object.prototype,ET=AT.hasOwnProperty;function zT(e){var t=this.__data__;return Oi?t[e]!==void 0:ET.call(t,e)}var IT="__lodash_hash_undefined__";function NT(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Oi&&t===void 0?IT:t,this}function Br(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}Br.prototype.clear=xT;Br.prototype.delete=kT;Br.prototype.get=$T;Br.prototype.has=zT;Br.prototype.set=NT;function MT(){this.__data__=[],this.size=0}function Js(e,t){for(var n=e.length;n--;)if(Hu(e[n][0],t))return n;return-1}var RT=Array.prototype,PT=RT.splice;function OT(e){var t=this.__data__,n=Js(t,e);if(n<0)return!1;var o=t.length-1;return n==o?t.pop():PT.call(t,n,1),--this.size,!0}function FT(e){var t=this.__data__,n=Js(t,e);return n<0?void 0:t[n][1]}function DT(e){return Js(this.__data__,e)>-1}function LT(e,t){var n=this.__data__,o=Js(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}function Vo(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}Vo.prototype.clear=MT;Vo.prototype.delete=OT;Vo.prototype.get=FT;Vo.prototype.has=DT;Vo.prototype.set=LT;var VT=Yr(co,"Map"),Fi=VT;function BT(){this.size=0,this.__data__={hash:new Br,map:new(Fi||Vo),string:new Br}}function jT(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Qs(e,t){var n=e.__data__;return jT(t)?n[typeof t=="string"?"string":"hash"]:n.map}function HT(e){var t=Qs(this,e).delete(e);return this.size-=t?1:0,t}function qT(e){return Qs(this,e).get(e)}function KT(e){return Qs(this,e).has(e)}function WT(e,t){var n=Qs(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}function Bo(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}Bo.prototype.clear=BT;Bo.prototype.delete=HT;Bo.prototype.get=qT;Bo.prototype.has=KT;Bo.prototype.set=WT;var UT="Expected a function";function ec(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(UT);var n=function(){var o=arguments,r=t?t.apply(this,o):o[0],a=n.cache;if(a.has(r))return a.get(r);var i=e.apply(this,o);return n.cache=a.set(r,i)||a,i};return n.cache=new(ec.Cache||Bo),n}ec.Cache=Bo;var YT=500;function GT(e){var t=ec(e,function(o){return n.size===YT&&n.clear(),o}),n=t.cache;return t}var XT=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ZT=/\\(\\)?/g,JT=GT(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(XT,function(n,o,r,a){t.push(r?a.replace(ZT,"$1"):o||n)}),t}),QT=JT;function eC(e){return e==null?"":gv(e)}function tc(e,t){return ro(e)?e:_T(e,t)?[e]:QT(eC(e))}var tC=1/0;function Ju(e){if(typeof e=="string"||Xs(e))return e;var t=e+"";return t=="0"&&1/e==-tC?"-0":t}function Av(e,t){t=tc(t,e);for(var n=0,o=t.length;e!=null&&n<o;)e=e[Ju(t[n++])];return n&&n==o?e:void 0}function Pt(e,t,n){var o=e==null?void 0:Av(e,t);return o===void 0?n:o}function Qu(e,t){for(var n=-1,o=t.length,r=e.length;++n<o;)e[r+n]=t[n];return e}var xh=jn?jn.isConcatSpreadable:void 0;function nC(e){return ro(e)||Yu(e)||!!(xh&&e&&e[xh])}function nc(e,t,n,o,r){var a=-1,i=e.length;for(n||(n=nC),r||(r=[]);++a<i;){var l=e[a];t>0&&n(l)?t>1?nc(l,t-1,n,o,r):Qu(r,l):o||(r[r.length]=l)}return r}function oC(e){var t=e==null?0:e.length;return t?nc(e,1):[]}function rC(e){return yv(wv(e,void 0,oC),e+"")}var aC=$v(Object.getPrototypeOf,Object),Ev=aC;function Di(){if(!arguments.length)return[];var e=arguments[0];return ro(e)?e:[e]}function iC(){this.__data__=new Vo,this.size=0}function lC(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function sC(e){return this.__data__.get(e)}function cC(e){return this.__data__.has(e)}var dC=200;function uC(e,t){var n=this.__data__;if(n instanceof Vo){var o=n.__data__;if(!Fi||o.length<dC-1)return o.push([e,t]),this.size=++n.size,this;n=this.__data__=new Bo(o)}return n.set(e,t),this.size=n.size,this}function Eo(e){var t=this.__data__=new Vo(e);this.size=t.size}Eo.prototype.clear=iC;Eo.prototype.delete=lC;Eo.prototype.get=sC;Eo.prototype.has=cC;Eo.prototype.set=uC;function pC(e,t){return e&&Zs(t,Xu(t),e)}function fC(e,t){return e&&Zs(t,Zu(t),e)}var zv=typeof $n=="object"&&$n&&!$n.nodeType&&$n,kh=zv&&typeof An=="object"&&An&&!An.nodeType&&An,hC=kh&&kh.exports===zv,Th=hC?co.Buffer:void 0,Ch=Th?Th.allocUnsafe:void 0;function mC(e,t){if(t)return e.slice();var n=e.length,o=Ch?Ch(n):new e.constructor(n);return e.copy(o),o}function gC(e,t){for(var n=-1,o=e==null?0:e.length,r=0,a=[];++n<o;){var i=e[n];t(i,n,e)&&(a[r++]=i)}return a}function Iv(){return[]}var bC=Object.prototype,vC=bC.propertyIsEnumerable,Sh=Object.getOwnPropertySymbols,yC=Sh?function(e){return e==null?[]:(e=Object(e),gC(Sh(e),function(t){return vC.call(e,t)}))}:Iv,ep=yC;function _C(e,t){return Zs(e,ep(e),t)}var wC=Object.getOwnPropertySymbols,xC=wC?function(e){for(var t=[];e;)Qu(t,ep(e)),e=Ev(e);return t}:Iv,Nv=xC;function kC(e,t){return Zs(e,Nv(e),t)}function Mv(e,t,n){var o=t(e);return ro(e)?o:Qu(o,n(e))}function $d(e){return Mv(e,Xu,ep)}function TC(e){return Mv(e,Zu,Nv)}var CC=Yr(co,"DataView"),Ad=CC,SC=Yr(co,"Promise"),Ed=SC,$C=Yr(co,"Set"),ha=$C,$h="[object Map]",AC="[object Object]",Ah="[object Promise]",Eh="[object Set]",zh="[object WeakMap]",Ih="[object DataView]",EC=Ur(Ad),zC=Ur(Fi),IC=Ur(Ed),NC=Ur(ha),MC=Ur(Sd),kr=Va;(Ad&&kr(new Ad(new ArrayBuffer(1)))!=Ih||Fi&&kr(new Fi)!=$h||Ed&&kr(Ed.resolve())!=Ah||ha&&kr(new ha)!=Eh||Sd&&kr(new Sd)!=zh)&&(kr=function(e){var t=Va(e),n=t==AC?e.constructor:void 0,o=n?Ur(n):"";if(o)switch(o){case EC:return Ih;case zC:return $h;case IC:return Ah;case NC:return Eh;case MC:return zh}return t});var Li=kr,RC=Object.prototype,PC=RC.hasOwnProperty;function OC(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&PC.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var FC=co.Uint8Array,Ts=FC;function tp(e){var t=new e.constructor(e.byteLength);return new Ts(t).set(new Ts(e)),t}function DC(e,t){var n=t?tp(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var LC=/\w*$/;function VC(e){var t=new e.constructor(e.source,LC.exec(e));return t.lastIndex=e.lastIndex,t}var Nh=jn?jn.prototype:void 0,Mh=Nh?Nh.valueOf:void 0;function BC(e){return Mh?Object(Mh.call(e)):{}}function jC(e,t){var n=t?tp(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var HC="[object Boolean]",qC="[object Date]",KC="[object Map]",WC="[object Number]",UC="[object RegExp]",YC="[object Set]",GC="[object String]",XC="[object Symbol]",ZC="[object ArrayBuffer]",JC="[object DataView]",QC="[object Float32Array]",eS="[object Float64Array]",tS="[object Int8Array]",nS="[object Int16Array]",oS="[object Int32Array]",rS="[object Uint8Array]",aS="[object Uint8ClampedArray]",iS="[object Uint16Array]",lS="[object Uint32Array]";function sS(e,t,n){var o=e.constructor;switch(t){case ZC:return tp(e);case HC:case qC:return new o(+e);case JC:return DC(e,n);case QC:case eS:case tS:case nS:case oS:case rS:case aS:case iS:case lS:return jC(e,n);case KC:return new o;case WC:case GC:return new o(e);case UC:return VC(e);case YC:return new o;case XC:return BC(e)}}function cS(e){return typeof e.constructor=="function"&&!Uu(e)?Jk(Ev(e)):{}}var dS="[object Map]";function uS(e){return Po(e)&&Li(e)==dS}var Rh=Ta&&Ta.isMap,pS=Rh?Gu(Rh):uS,fS=pS,hS="[object Set]";function mS(e){return Po(e)&&Li(e)==hS}var Ph=Ta&&Ta.isSet,gS=Ph?Gu(Ph):mS,bS=gS,vS=1,yS=2,_S=4,Rv="[object Arguments]",wS="[object Array]",xS="[object Boolean]",kS="[object Date]",TS="[object Error]",Pv="[object Function]",CS="[object GeneratorFunction]",SS="[object Map]",$S="[object Number]",Ov="[object Object]",AS="[object RegExp]",ES="[object Set]",zS="[object String]",IS="[object Symbol]",NS="[object WeakMap]",MS="[object ArrayBuffer]",RS="[object DataView]",PS="[object Float32Array]",OS="[object Float64Array]",FS="[object Int8Array]",DS="[object Int16Array]",LS="[object Int32Array]",VS="[object Uint8Array]",BS="[object Uint8ClampedArray]",jS="[object Uint16Array]",HS="[object Uint32Array]",Rt={};Rt[Rv]=Rt[wS]=Rt[MS]=Rt[RS]=Rt[xS]=Rt[kS]=Rt[PS]=Rt[OS]=Rt[FS]=Rt[DS]=Rt[LS]=Rt[SS]=Rt[$S]=Rt[Ov]=Rt[AS]=Rt[ES]=Rt[zS]=Rt[IS]=Rt[VS]=Rt[BS]=Rt[jS]=Rt[HS]=!0;Rt[TS]=Rt[Pv]=Rt[NS]=!1;function Dl(e,t,n,o,r,a){var i,l=t&vS,s=t&yS,c=t&_S;if(n&&(i=r?n(e,o,r,a):n(e)),i!==void 0)return i;if(!ao(e))return e;var d=ro(e);if(d){if(i=OC(e),!l)return t6(e,i)}else{var u=Li(e),p=u==Pv||u==CS;if(ks(e))return mC(e,l);if(u==Ov||u==Rv||p&&!r){if(i=s||p?{}:cS(e),!l)return s?kC(e,fC(i,e)):_C(e,pC(i,e))}else{if(!Rt[u])return r?e:{};i=sS(e,u,l)}}a||(a=new Eo);var f=a.get(e);if(f)return f;a.set(e,i),bS(e)?e.forEach(function(m){i.add(Dl(m,t,n,m,e,a))}):fS(e)&&e.forEach(function(m,g){i.set(g,Dl(m,t,n,g,e,a))});var h=c?s?TC:$d:s?Zu:Xu,b=d?void 0:h(e);return u6(b||e,function(m,g){b&&(g=m,m=e[g]),qu(i,g,Dl(m,t,n,g,e,a))}),i}var qS=4;function KS(e){return Dl(e,qS)}var WS="__lodash_hash_undefined__";function US(e){return this.__data__.set(e,WS),this}function YS(e){return this.__data__.has(e)}function Vi(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Bo;++t<n;)this.add(e[t])}Vi.prototype.add=Vi.prototype.push=US;Vi.prototype.has=YS;function GS(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(t(e[n],n,e))return!0;return!1}function Fv(e,t){return e.has(t)}var XS=1,ZS=2;function Dv(e,t,n,o,r,a){var i=n&XS,l=e.length,s=t.length;if(l!=s&&!(i&&s>l))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var u=-1,p=!0,f=n&ZS?new Vi:void 0;for(a.set(e,t),a.set(t,e);++u<l;){var h=e[u],b=t[u];if(o)var m=i?o(b,h,u,t,e,a):o(h,b,u,e,t,a);if(m!==void 0){if(m)continue;p=!1;break}if(f){if(!GS(t,function(g,v){if(!Fv(f,v)&&(h===g||r(h,g,n,o,a)))return f.push(v)})){p=!1;break}}else if(!(h===b||r(h,b,n,o,a))){p=!1;break}}return a.delete(e),a.delete(t),p}function JS(e){var t=-1,n=Array(e.size);return e.forEach(function(o,r){n[++t]=[r,o]}),n}function np(e){var t=-1,n=Array(e.size);return e.forEach(function(o){n[++t]=o}),n}var QS=1,e4=2,t4="[object Boolean]",n4="[object Date]",o4="[object Error]",r4="[object Map]",a4="[object Number]",i4="[object RegExp]",l4="[object Set]",s4="[object String]",c4="[object Symbol]",d4="[object ArrayBuffer]",u4="[object DataView]",Oh=jn?jn.prototype:void 0,Ec=Oh?Oh.valueOf:void 0;function p4(e,t,n,o,r,a,i){switch(n){case u4:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case d4:return!(e.byteLength!=t.byteLength||!a(new Ts(e),new Ts(t)));case t4:case n4:case a4:return Hu(+e,+t);case o4:return e.name==t.name&&e.message==t.message;case i4:case s4:return e==t+"";case r4:var l=JS;case l4:var s=o&QS;if(l||(l=np),e.size!=t.size&&!s)return!1;var c=i.get(e);if(c)return c==t;o|=e4,i.set(e,t);var d=Dv(l(e),l(t),o,r,a,i);return i.delete(e),d;case c4:if(Ec)return Ec.call(e)==Ec.call(t)}return!1}var f4=1,h4=Object.prototype,m4=h4.hasOwnProperty;function g4(e,t,n,o,r,a){var i=n&f4,l=$d(e),s=l.length,c=$d(t),d=c.length;if(s!=d&&!i)return!1;for(var u=s;u--;){var p=l[u];if(!(i?p in t:m4.call(t,p)))return!1}var f=a.get(e),h=a.get(t);if(f&&h)return f==t&&h==e;var b=!0;a.set(e,t),a.set(t,e);for(var m=i;++u<s;){p=l[u];var g=e[p],v=t[p];if(o)var y=i?o(v,g,p,t,e,a):o(g,v,p,e,t,a);if(!(y===void 0?g===v||r(g,v,n,o,a):y)){b=!1;break}m||(m=p=="constructor")}if(b&&!m){var T=e.constructor,x=t.constructor;T!=x&&"constructor"in e&&"constructor"in t&&!(typeof T=="function"&&T instanceof T&&typeof x=="function"&&x instanceof x)&&(b=!1)}return a.delete(e),a.delete(t),b}var b4=1,Fh="[object Arguments]",Dh="[object Array]",xl="[object Object]",v4=Object.prototype,Lh=v4.hasOwnProperty;function y4(e,t,n,o,r,a){var i=ro(e),l=ro(t),s=i?Dh:Li(e),c=l?Dh:Li(t);s=s==Fh?xl:s,c=c==Fh?xl:c;var d=s==xl,u=c==xl,p=s==c;if(p&&ks(e)){if(!ks(t))return!1;i=!0,d=!1}if(p&&!d)return a||(a=new Eo),i||Cv(e)?Dv(e,t,n,o,r,a):p4(e,t,s,n,o,r,a);if(!(n&b4)){var f=d&&Lh.call(e,"__wrapped__"),h=u&&Lh.call(t,"__wrapped__");if(f||h){var b=f?e.value():e,m=h?t.value():t;return a||(a=new Eo),r(b,m,n,o,a)}}return p?(a||(a=new Eo),g4(e,t,n,o,r,a)):!1}function Lv(e,t,n,o,r){return e===t?!0:e==null||t==null||!Po(e)&&!Po(t)?e!==e&&t!==t:y4(e,t,n,o,Lv,r)}function _4(e,t){return e!=null&&t in Object(e)}function w4(e,t,n){t=tc(t,e);for(var o=-1,r=t.length,a=!1;++o<r;){var i=Ju(t[o]);if(!(a=e!=null&&n(e,i)))break;e=e[i]}return a||++o!=r?a:(r=e==null?0:e.length,!!r&&Ku(r)&&ju(i,r)&&(ro(e)||Yu(e)))}function x4(e,t){return e!=null&&w4(e,t,_4)}var k4=function(){return co.Date.now()},zc=k4,T4="Expected a function",C4=Math.max,S4=Math.min;function bn(e,t,n){var o,r,a,i,l,s,c=0,d=!1,u=!1,p=!0;if(typeof e!="function")throw new TypeError(T4);t=hh(t)||0,ao(n)&&(d=!!n.leading,u="maxWait"in n,a=u?C4(hh(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p);function f(k){var $=o,z=r;return o=r=void 0,c=k,i=e.apply(z,$),i}function h(k){return c=k,l=setTimeout(g,t),d?f(k):i}function b(k){var $=k-s,z=k-c,P=t-$;return u?S4(P,a-z):P}function m(k){var $=k-s,z=k-c;return s===void 0||$>=t||$<0||u&&z>=a}function g(){var k=zc();if(m(k))return v(k);l=setTimeout(g,b(k))}function v(k){return l=void 0,p&&o?f(k):(o=r=void 0,i)}function y(){l!==void 0&&clearTimeout(l),c=0,o=s=r=l=void 0}function T(){return l===void 0?i:v(zc())}function x(){var k=zc(),$=m(k);if(o=arguments,r=this,s=k,$){if(l===void 0)return h(s);if(u)return clearTimeout(l),l=setTimeout(g,t),f(s)}return l===void 0&&(l=setTimeout(g,t)),i}return x.cancel=y,x.flush=T,x}function $4(e){return Po(e)&&Wu(e)}function A4(e,t,n){for(var o=-1,r=e==null?0:e.length;++o<r;)if(n(t,e[o]))return!0;return!1}var E4=1/0;function z4(e){var t=e==null?0:e.length;return t?nc(e,E4):[]}function Vv(e){for(var t=-1,n=e==null?0:e.length,o={};++t<n;){var r=e[t];o[r[0]]=r[1]}return o}function En(e,t){return Lv(e,t)}function op(e){return e==null}function Bv(e,t,n,o){if(!ao(e))return e;t=tc(t,e);for(var r=-1,a=t.length,i=a-1,l=e;l!=null&&++r<a;){var s=Ju(t[r]),c=n;if(s==="__proto__"||s==="constructor"||s==="prototype")return e;if(r!=i){var d=l[s];c=o?o(d,s,l):void 0,c===void 0&&(c=ao(d)?d:ju(t[r+1])?[]:{})}qu(l,s,c),l=l[s]}return e}function I4(e,t,n){for(var o=-1,r=t.length,a={};++o<r;){var i=t[o],l=Av(e,i);n(l,i)&&Bv(a,tc(i,e),l)}return a}function N4(e,t){return I4(e,t,function(n,o){return x4(e,o)})}var M4=rC(function(e,t){return e==null?{}:N4(e,t)}),rr=M4;function R4(e,t,n){return e==null?e:Bv(e,t,n)}var P4="Expected a function";function Pr(e,t,n){var o=!0,r=!0;if(typeof e!="function")throw new TypeError(P4);return ao(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),bn(e,t,{leading:o,maxWait:t,trailing:r})}var O4=1/0,F4=ha&&1/np(new ha([,-0]))[1]==O4?function(e){return new ha(e)}:e6,D4=F4,L4=200;function V4(e,t,n){var o=-1,r=g6,a=e.length,i=!0,l=[],s=l;if(n)i=!1,r=A4;else if(a>=L4){var c=t?null:D4(e);if(c)return np(c);i=!1,r=Fv,s=new Vi}else s=t?[]:l;e:for(;++o<a;){var d=e[o],u=t?t(d):d;if(d=n||d!==0?d:0,i&&u===u){for(var p=s.length;p--;)if(s[p]===u)continue e;t&&s.push(u),l.push(d)}else r(s,u,n)||(s!==l&&s.push(u),l.push(d))}return l}var B4=w6(function(e){return V4(nc(e,1,$4,!0))}),Ic=B4;const j4='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',H4=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,Vh=e=>Array.from(e.querySelectorAll(j4)).filter(t=>q4(t)&&H4(t)),q4=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},Ll=function(e,t,...n){let o;t.includes("mouse")||t.includes("click")?o="MouseEvents":t.includes("key")?o="KeyboardEvent":o="HTMLEvents";const r=document.createEvent(o);return r.initEvent(t,...n),e.dispatchEvent(r),e},jv=e=>!e.getAttribute("aria-owns"),Hv=(e,t,n)=>{const{parentNode:o}=e;if(!o)return null;const r=o.querySelectorAll(n),a=Array.prototype.indexOf.call(r,e);return r[a+t]||null},Vl=e=>{!e||(e.focus(),!jv(e)&&e.click())},At=(e,t,n,o=!1)=>{e&&t&&n&&(e==null||e.addEventListener(t,n,o))},Bt=(e,t,n,o=!1)=>{e&&t&&n&&(e==null||e.removeEventListener(t,n,o))},K4=(e,t,n)=>{const o=function(...r){n&&n.apply(this,r),Bt(e,t,o)};At(e,t,o)},Ot=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const a=e==null?void 0:e(r);if(n===!1||!a)return t==null?void 0:t(r)},Bh=e=>t=>t.pointerType==="mouse"?e(t):void 0;var W4=Object.defineProperty,U4=Object.defineProperties,Y4=Object.getOwnPropertyDescriptors,jh=Object.getOwnPropertySymbols,G4=Object.prototype.hasOwnProperty,X4=Object.prototype.propertyIsEnumerable,Hh=(e,t,n)=>t in e?W4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z4=(e,t)=>{for(var n in t||(t={}))G4.call(t,n)&&Hh(e,n,t[n]);if(jh)for(var n of jh(t))X4.call(t,n)&&Hh(e,n,t[n]);return e},J4=(e,t)=>U4(e,Y4(t));function qh(e,t){var n;const o=Kt();return Dn(()=>{o.value=e()},J4(Z4({},t),{flush:(n=t==null?void 0:t.flush)!=null?n:"sync"})),Zi(o)}function oc(e){return R1()?(Hg(e),!0):!1}const dt=typeof window!="undefined",on=e=>typeof e=="boolean",mt=e=>typeof e=="number",Q4=e=>typeof e=="string",Nc=()=>{};function qv(e,t){function n(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return n}function e$(e,t={}){let n,o;return a=>{const i=_(e),l=_(t.maxWait);if(n&&clearTimeout(n),i<=0||l!==void 0&&l<=0)return o&&(clearTimeout(o),o=null),a();l&&!o&&(o=setTimeout(()=>{n&&clearTimeout(n),o=null,a()},l)),n=setTimeout(()=>{o&&clearTimeout(o),o=null,a()},i)}}function t$(e,t=!0,n=!0){let o=0,r,a=!n;const i=()=>{r&&(clearTimeout(r),r=void 0)};return s=>{const c=_(e),d=Date.now()-o;if(i(),c<=0)return o=Date.now(),s();d>c&&(o=Date.now(),a?a=!1:s()),t&&(r=setTimeout(()=>{o=Date.now(),n||(a=!0),i(),s()},c)),!n&&!r&&(r=setTimeout(()=>a=!0,c))}}function n$(e,t=200,n={}){return qv(e$(t,n),e)}function o$(e,t=200,n={}){if(t<=0)return e;const o=A(e.value),r=n$(()=>{o.value=e.value},t,n);return ge(e,()=>r()),o}function Kv(e,t=200,n=!0,o=!0){return qv(t$(t,n,o),e)}function r$(e,t=!0){nt()?et(e):t?e():je(e)}function jr(e,t,n={}){const{immediate:o=!0}=n,r=A(!1);let a=null;function i(){a&&(clearTimeout(a),a=null)}function l(){r.value=!1,i()}function s(...c){i(),r.value=!0,a=setTimeout(()=>{r.value=!1,a=null,e(...c)},_(t))}return o&&(r.value=!0,dt&&s()),oc(l),{isPending:r,start:s,stop:l}}function no(e){var t;const n=_(e);return(t=n==null?void 0:n.$el)!=null?t:n}const ol=dt?window:void 0,a$=dt?window.document:void 0;function Ht(...e){let t,n,o,r;if(Q4(e[0])?([n,o,r]=e,t=ol):[t,n,o,r]=e,!t)return Nc;let a=Nc;const i=ge(()=>no(t),s=>{a(),s&&(s.addEventListener(n,o,r),a=()=>{s.removeEventListener(n,o,r),a=Nc})},{immediate:!0,flush:"post"}),l=()=>{i(),a()};return oc(l),l}function Cs(e,t,n={}){const{window:o=ol,ignore:r,capture:a=!0}=n;if(!o)return;const i=A(!0),s=[Ht(o,"click",d=>{const u=no(e),p=d.composedPath();!u||u===d.target||p.includes(u)||!i.value||r&&r.length>0&&r.some(f=>{const h=no(f);return h&&(d.target===h||p.includes(h))})||t(d)},{passive:!0,capture:a}),Ht(o,"pointerdown",d=>{const u=no(e);i.value=!!u&&!d.composedPath().includes(u)},{passive:!0})];return()=>s.forEach(d=>d())}const zd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Id="__vueuse_ssr_handlers__";zd[Id]=zd[Id]||{};zd[Id];function i$({document:e=a$}={}){if(!e)return A("visible");const t=A(e.visibilityState);return Ht(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var Kh=Object.getOwnPropertySymbols,l$=Object.prototype.hasOwnProperty,s$=Object.prototype.propertyIsEnumerable,c$=(e,t)=>{var n={};for(var o in e)l$.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Kh)for(var o of Kh(e))t.indexOf(o)<0&&s$.call(e,o)&&(n[o]=e[o]);return n};function Ba(e,t,n={}){const o=n,{window:r=ol}=o,a=c$(o,["window"]);let i;const l=r&&"ResizeObserver"in r,s=()=>{i&&(i.disconnect(),i=void 0)},c=ge(()=>no(e),u=>{s(),l&&r&&u&&(i=new ResizeObserver(t),i.observe(u,a))},{immediate:!0,flush:"post"}),d=()=>{s(),c()};return oc(d),{isSupported:l,stop:d}}function Wh(e,t={}){const{reset:n=!0,windowResize:o=!0,windowScroll:r=!0}=t,a=A(0),i=A(0),l=A(0),s=A(0),c=A(0),d=A(0),u=A(0),p=A(0);function f(){const h=no(e);if(!h){n&&(a.value=0,i.value=0,l.value=0,s.value=0,c.value=0,d.value=0,u.value=0,p.value=0);return}const b=h.getBoundingClientRect();a.value=b.height,i.value=b.bottom,l.value=b.left,s.value=b.right,c.value=b.top,d.value=b.width,u.value=b.x,p.value=b.y}return Ba(e,f),ge(()=>no(e),h=>!h&&f()),r&&Ht("scroll",f,{passive:!0}),o&&Ht("resize",f,{passive:!0}),{height:a,bottom:i,left:l,right:s,top:c,width:d,x:u,y:p,update:f}}var Uh,Yh;dt&&(window==null?void 0:window.navigator)&&((Uh=window==null?void 0:window.navigator)==null?void 0:Uh.platform)&&/iP(ad|hone|od)/.test((Yh=window==null?void 0:window.navigator)==null?void 0:Yh.platform);function d$({window:e=ol}={}){if(!e)return A(!1);const t=A(e.document.hasFocus());return Ht(e,"blur",()=>{t.value=!1}),Ht(e,"focus",()=>{t.value=!0}),t}function u$({window:e=ol,initialWidth:t=1/0,initialHeight:n=1/0}={}){const o=A(t),r=A(n),a=()=>{e&&(o.value=e.innerWidth,r.value=e.innerHeight)};return a(),r$(a),Ht("resize",a,{passive:!0}),{width:o,height:r}}const p$=(e,t)=>{if(!dt||!e||!t)return!1;const n=e.getBoundingClientRect();let o;return t instanceof Element?o=t.getBoundingClientRect():o={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},n.top<o.bottom&&n.bottom>o.top&&n.right>o.left&&n.left<o.right},Gh=e=>{let t=0,n=e;for(;n;)t+=n.offsetTop,n=n.offsetParent;return t},f$=(e,t)=>Math.abs(Gh(e)-Gh(t)),rp=e=>{let t,n;return e.type==="touchend"?(n=e.changedTouches[0].clientY,t=e.changedTouches[0].clientX):e.type.startsWith("touch")?(n=e.touches[0].clientY,t=e.touches[0].clientX):(n=e.clientY,t=e.clientX),{clientX:t,clientY:n}},h$=function(e){for(const t of e){const n=t.target.__resizeListeners__||[];n.length&&n.forEach(o=>{o()})}},ja=function(e,t){!dt||!e||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new ResizeObserver(h$),e.__ro__.observe(e)),e.__resizeListeners__.push(t))},Ha=function(e,t){var n;!e||!e.__resizeListeners__||(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||(n=e.__ro__)==null||n.disconnect())},Cn=e=>e===void 0,Bi=e=>!e&&e!==0||Ye(e)&&e.length===0||ut(e)&&!Object.keys(e).length,Hr=e=>typeof Element=="undefined"?!1:e instanceof Element,m$=e=>op(e),g$=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Nd=e=>Object.keys(e),b$=e=>Object.entries(e),Bl=(e,t,n)=>({get value(){return Pt(e,t,n)},set value(o){R4(e,t,o)}}),Wv=(e="")=>e.split(" ").filter(t=>!!t.trim()),oo=(e,t)=>{if(!e||!t)return!1;if(t.includes(" "))throw new Error("className should not contain space.");return e.classList.contains(t)},bo=(e,t)=>{!e||!t.trim()||e.classList.add(...Wv(t))},hn=(e,t)=>{!e||!t.trim()||e.classList.remove(...Wv(t))},go=(e,t)=>{var n;if(!dt||!e||!t)return"";Bn(t);try{const o=e.style[t];if(o)return o;const r=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,"");return r?r[t]:""}catch{return e.style[t]}},v$=(e,t)=>{if(!dt)return!1;const n={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)],o=go(e,n);return["scroll","auto","overlay"].some(r=>o.includes(r))},ap=(e,t)=>{if(!dt)return;let n=e;for(;n;){if([window,document,document.documentElement].includes(n))return window;if(v$(n,t))return n;n=n.parentNode}return n};let kl;const y$=()=>{var e;if(!dt)return 0;if(kl!==void 0)return kl;const t=document.createElement("div");t.className="el-scrollbar__wrap",t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const n=t.offsetWidth;t.style.overflow="scroll";const o=document.createElement("div");o.style.width="100%",t.appendChild(o);const r=o.offsetWidth;return(e=t.parentNode)==null||e.removeChild(t),kl=n-r,kl};function Uv(e,t){if(!dt)return;if(!t){e.scrollTop=0;return}const n=[];let o=t.offsetParent;for(;o!==null&&e!==o&&e.contains(o);)n.push(o),o=o.offsetParent;const r=t.offsetTop+n.reduce((s,c)=>s+c.offsetTop,0),a=r+t.offsetHeight,i=e.scrollTop,l=i+e.clientHeight;r<i?e.scrollTop=r:a>l&&(e.scrollTop=a-e.clientHeight)}var yt=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n};const _$=ee({name:"ArrowDown"}),w$={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x$=M("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"},null,-1),k$=[x$];function T$(e,t,n,o,r,a){return w(),I("svg",w$,k$)}var Gr=yt(_$,[["render",T$]]);const C$=ee({name:"ArrowLeft"}),S$={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},$$=M("path",{fill:"currentColor",d:"M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"},null,-1),A$=[$$];function E$(e,t,n,o,r,a){return w(),I("svg",S$,A$)}var Xr=yt(C$,[["render",E$]]);const z$=ee({name:"ArrowRight"}),I$={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},N$=M("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"},null,-1),M$=[N$];function R$(e,t,n,o,r,a){return w(),I("svg",I$,M$)}var Yn=yt(z$,[["render",R$]]);const P$=ee({name:"ArrowUp"}),O$={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},F$=M("path",{fill:"currentColor",d:"m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"},null,-1),D$=[F$];function L$(e,t,n,o,r,a){return w(),I("svg",O$,D$)}var rl=yt(P$,[["render",L$]]);const V$=ee({name:"Back"}),B$={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},j$=M("path",{fill:"currentColor",d:"M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"},null,-1),H$=M("path",{fill:"currentColor",d:"m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"},null,-1),q$=[j$,H$];function K$(e,t,n,o,r,a){return w(),I("svg",B$,q$)}var W$=yt(V$,[["render",K$]]);const U$=ee({name:"Calendar"}),Y$={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},G$=M("path",{fill:"currentColor",d:"M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"},null,-1),X$=[G$];function Z$(e,t,n,o,r,a){return w(),I("svg",Y$,X$)}var J$=yt(U$,[["render",Z$]]);const Q$=ee({name:"CaretRight"}),eA={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},tA=M("path",{fill:"currentColor",d:"M384 192v640l384-320.064z"},null,-1),nA=[tA];function oA(e,t,n,o,r,a){return w(),I("svg",eA,nA)}var Yv=yt(Q$,[["render",oA]]);const rA=ee({name:"CaretTop"}),aA={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},iA=M("path",{fill:"currentColor",d:"M512 320 192 704h639.936z"},null,-1),lA=[iA];function sA(e,t,n,o,r,a){return w(),I("svg",aA,lA)}var cA=yt(rA,[["render",sA]]);const dA=ee({name:"Check"}),uA={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},pA=M("path",{fill:"currentColor",d:"M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"},null,-1),fA=[pA];function hA(e,t,n,o,r,a){return w(),I("svg",uA,fA)}var Ca=yt(dA,[["render",hA]]);const mA=ee({name:"CircleCheckFilled"}),gA={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},bA=M("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"},null,-1),vA=[bA];function yA(e,t,n,o,r,a){return w(),I("svg",gA,vA)}var _A=yt(mA,[["render",yA]]);const wA=ee({name:"CircleCheck"}),xA={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},kA=M("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),TA=M("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"},null,-1),CA=[kA,TA];function SA(e,t,n,o,r,a){return w(),I("svg",xA,CA)}var Ss=yt(wA,[["render",SA]]);const $A=ee({name:"CircleCloseFilled"}),AA={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},EA=M("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"},null,-1),zA=[EA];function IA(e,t,n,o,r,a){return w(),I("svg",AA,zA)}var ip=yt($A,[["render",IA]]);const NA=ee({name:"CircleClose"}),MA={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},RA=M("path",{fill:"currentColor",d:"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"},null,-1),PA=M("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),OA=[RA,PA];function FA(e,t,n,o,r,a){return w(),I("svg",MA,OA)}var Oo=yt(NA,[["render",FA]]);const DA=ee({name:"Clock"}),LA={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},VA=M("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),BA=M("path",{fill:"currentColor",d:"M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"},null,-1),jA=M("path",{fill:"currentColor",d:"M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"},null,-1),HA=[VA,BA,jA];function qA(e,t,n,o,r,a){return w(),I("svg",LA,HA)}var Gv=yt(DA,[["render",qA]]);const KA=ee({name:"Close"}),WA={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},UA=M("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),YA=[UA];function GA(e,t,n,o,r,a){return w(),I("svg",WA,YA)}var Hn=yt(KA,[["render",GA]]);const XA=ee({name:"DArrowLeft"}),ZA={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},JA=M("path",{fill:"currentColor",d:"M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"},null,-1),QA=[JA];function eE(e,t,n,o,r,a){return w(),I("svg",ZA,QA)}var rc=yt(XA,[["render",eE]]);const tE=ee({name:"DArrowRight"}),nE={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},oE=M("path",{fill:"currentColor",d:"M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"},null,-1),rE=[oE];function aE(e,t,n,o,r,a){return w(),I("svg",nE,rE)}var ac=yt(tE,[["render",aE]]);const iE=ee({name:"Delete"}),lE={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},sE=M("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"},null,-1),cE=[sE];function dE(e,t,n,o,r,a){return w(),I("svg",lE,cE)}var uE=yt(iE,[["render",dE]]);const pE=ee({name:"Document"}),fE={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},hE=M("path",{fill:"currentColor",d:"M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"},null,-1),mE=[hE];function gE(e,t,n,o,r,a){return w(),I("svg",fE,mE)}var bE=yt(pE,[["render",gE]]);const vE=ee({name:"FullScreen"}),yE={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},_E=M("path",{fill:"currentColor",d:"m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"},null,-1),wE=[_E];function xE(e,t,n,o,r,a){return w(),I("svg",yE,wE)}var kE=yt(vE,[["render",xE]]);const TE=ee({name:"Hide"}),CE={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},SE=M("path",{d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",fill:"currentColor"},null,-1),$E=M("path",{d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",fill:"currentColor"},null,-1),AE=[SE,$E];function EE(e,t,n,o,r,a){return w(),I("svg",CE,AE)}var zE=yt(TE,[["render",EE]]);const IE=ee({name:"InfoFilled"}),NE={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ME=M("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"},null,-1),RE=[ME];function PE(e,t,n,o,r,a){return w(),I("svg",NE,RE)}var lp=yt(IE,[["render",PE]]);const OE=ee({name:"Loading"}),FE={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},DE=M("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"},null,-1),LE=[DE];function VE(e,t,n,o,r,a){return w(),I("svg",FE,LE)}var hr=yt(OE,[["render",VE]]);const BE=ee({name:"Minus"}),jE={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},HE=M("path",{fill:"currentColor",d:"M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"},null,-1),qE=[HE];function KE(e,t,n,o,r,a){return w(),I("svg",jE,qE)}var WE=yt(BE,[["render",KE]]);const UE=ee({name:"MoreFilled"}),YE={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},GE=M("path",{fill:"currentColor",d:"M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"},null,-1),XE=[GE];function ZE(e,t,n,o,r,a){return w(),I("svg",YE,XE)}var JE=yt(UE,[["render",ZE]]);const QE=ee({name:"More"}),e5={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},t5=M("path",{fill:"currentColor",d:"M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"},null,-1),n5=[t5];function o5(e,t,n,o,r,a){return w(),I("svg",e5,n5)}var r5=yt(QE,[["render",o5]]);const a5=ee({name:"PictureFilled"}),i5={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},l5=M("path",{fill:"currentColor",d:"M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"},null,-1),s5=[l5];function c5(e,t,n,o,r,a){return w(),I("svg",i5,s5)}var d5=yt(a5,[["render",c5]]);const u5=ee({name:"Plus"}),p5={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},f5=M("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"},null,-1),h5=[f5];function m5(e,t,n,o,r,a){return w(),I("svg",p5,h5)}var Xv=yt(u5,[["render",m5]]);const g5=ee({name:"QuestionFilled"}),b5={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},v5=M("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"},null,-1),y5=[v5];function _5(e,t,n,o,r,a){return w(),I("svg",b5,y5)}var w5=yt(g5,[["render",_5]]);const x5=ee({name:"RefreshLeft"}),k5={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},T5=M("path",{fill:"currentColor",d:"M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"},null,-1),C5=[T5];function S5(e,t,n,o,r,a){return w(),I("svg",k5,C5)}var $5=yt(x5,[["render",S5]]);const A5=ee({name:"RefreshRight"}),E5={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z5=M("path",{fill:"currentColor",d:"M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"},null,-1),I5=[z5];function N5(e,t,n,o,r,a){return w(),I("svg",E5,I5)}var M5=yt(A5,[["render",N5]]);const R5=ee({name:"ScaleToOriginal"}),P5={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},O5=M("path",{fill:"currentColor",d:"M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"},null,-1),F5=[O5];function D5(e,t,n,o,r,a){return w(),I("svg",P5,F5)}var L5=yt(R5,[["render",D5]]);const V5=ee({name:"Search"}),B5={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},j5=M("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"},null,-1),H5=[j5];function q5(e,t,n,o,r,a){return w(),I("svg",B5,H5)}var K5=yt(V5,[["render",q5]]);const W5=ee({name:"StarFilled"}),U5={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Y5=M("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"},null,-1),G5=[Y5];function X5(e,t,n,o,r,a){return w(),I("svg",U5,G5)}var Tl=yt(W5,[["render",X5]]);const Z5=ee({name:"Star"}),J5={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Q5=M("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"},null,-1),ez=[Q5];function tz(e,t,n,o,r,a){return w(),I("svg",J5,ez)}var nz=yt(Z5,[["render",tz]]);const oz=ee({name:"SuccessFilled"}),rz={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},az=M("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"},null,-1),iz=[az];function lz(e,t,n,o,r,a){return w(),I("svg",rz,iz)}var Zv=yt(oz,[["render",lz]]);const sz=ee({name:"View"}),cz={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},dz=M("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"},null,-1),uz=[dz];function pz(e,t,n,o,r,a){return w(),I("svg",cz,uz)}var fz=yt(sz,[["render",pz]]);const hz=ee({name:"WarningFilled"}),mz={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},gz=M("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"},null,-1),bz=[gz];function vz(e,t,n,o,r,a){return w(),I("svg",mz,bz)}var ji=yt(hz,[["render",vz]]);const yz=ee({name:"ZoomIn"}),_z={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},wz=M("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"},null,-1),xz=[wz];function kz(e,t,n,o,r,a){return w(),I("svg",_z,xz)}var Jv=yt(yz,[["render",kz]]);const Tz=ee({name:"ZoomOut"}),Cz={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Sz=M("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"},null,-1),$z=[Sz];function Az(e,t,n,o,r,a){return w(),I("svg",Cz,$z)}var Ez=yt(Tz,[["render",Az]]);const Md=Symbol(),Xh="__elPropsReservedKey";function uo(e,t){if(!ut(e)||!!e[Xh])return e;const{values:n,required:o,default:r,type:a,validator:i}=e,l=n||i?c=>{let d=!1,u=[];if(n&&(u=Array.from(n),lt(e,"default")&&u.push(r),d||(d=u.includes(c))),i&&(d||(d=i(c))),!d&&u.length>0){const p=[...new Set(u)].map(f=>JSON.stringify(f)).join(", ");pw(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${p}], got value ${JSON.stringify(c)}.`)}return d}:void 0,s={type:ut(a)&&Object.getOwnPropertySymbols(a).includes(Md)?a[Md]:a,required:!!o,validator:l,[Xh]:!0};return lt(e,"default")&&(s.default=r),s}const Le=e=>Vv(Object.entries(e).map(([t,n])=>[t,uo(n,t)])),Te=e=>({[Md]:e}),an=Te([String,Object,Function]),zz={Close:Hn},ic={Close:Hn,SuccessFilled:Zv,InfoFilled:lp,WarningFilled:ji,CircleCloseFilled:ip},Fo={success:Zv,warning:ji,error:ip,info:lp},Qv={validating:hr,success:Ss,error:Oo},rt=(e,t)=>{if(e.install=n=>{for(const o of[e,...Object.values(t!=null?t:{})])n.component(o.name,o)},t)for(const[n,o]of Object.entries(t))e[n]=o;return e},ey=(e,t)=>(e.install=n=>{e._context=n._context,n.config.globalProperties[t]=e},e),Dt=e=>(e.install=wt,e),sp=(...e)=>t=>{e.forEach(n=>{Je(n)?n(t):n.value=t})};class Iz extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function Wt(e,t){throw new Iz(`[${e}] ${t}`)}function io(e,t="px"){if(!e)return"";if(Qe(e))return e;if(mt(e))return`${e}${t}`}const Pe={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},Nz=["year","month","date","dates","week","datetime","datetimerange","daterange","monthrange"],Mc=["sun","mon","tue","wed","thu","fri","sat"],tt="update:modelValue",Xt="change",pr="input",wo=["","default","small","large"],Mz={large:40,default:32,small:24},ty=(e="default")=>Mz[e||"default"],Nn=e=>["",...wo].includes(e),ny=e=>[...Nz].includes(e);var On=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(On||{});function oy(e){return jt(e)&&e.type===Fe}function Rz(e){return jt(e)&&e.type===dn}function Pz(e){return jt(e)&&!oy(e)&&!Rz(e)}const Oz=e=>{if(!jt(e))return{};const t=e.props||{},n=(jt(e.type)?e.type.props:void 0)||{},o={};return Object.keys(n).forEach(r=>{lt(n[r],"default")&&(o[r]=n[r].default)}),Object.keys(t).forEach(r=>{o[Bn(r)]=t[r]}),o},Fz=e=>{if(!Ye(e)||e.length>1)throw new Error("expect to receive a single Vue element child");return e[0]},Zh=e=>e**3,Dz=e=>e<.5?Zh(e*2)/2:1-Zh((1-e)*2)/2,Jh=e=>[...new Set(e)],Or=e=>!e&&e!==0?[]:Array.isArray(e)?e:[e],cp=()=>dt&&/firefox/i.test(window.navigator.userAgent),lc=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),ry=e=>dt?window.requestAnimationFrame(e):setTimeout(e,16),ay=e=>dt?window.cancelAnimationFrame(e):clearTimeout(e),al=()=>Math.floor(Math.random()*1e4),Ft=e=>e,Lz=["class","style"],Vz=/^on[A-Z]/,dp=(e={})=>{const{excludeListeners:t=!1,excludeKeys:n=[]}=e,o=n.concat(Lz),r=nt();return C(r?()=>{var a;return Vv(Object.entries((a=r.proxy)==null?void 0:a.$attrs).filter(([i])=>!o.includes(i)&&!(t&&Vz.test(i))))}:()=>({}))},iy=Symbol("breadcrumbKey"),ly=Symbol("buttonGroupContextKey"),sy=Symbol("carouselContextKey"),cy=Symbol("collapseContextKey"),dy=Symbol(),uy=Symbol("dialogInjectionKey"),Mn=Symbol("formContextKey"),qn=Symbol("formItemContextKey"),py=Symbol("elPaginationKey"),fy=Symbol("radioGroupKey"),hy=Symbol("rowContextKey"),my=Symbol("scrollbarContextKey"),sc=Symbol("tabsRootContextKey"),gy=Symbol("uploadContextKey"),up=Symbol("popper"),by=Symbol("popperContent"),cc=Symbol("tooltipV2"),vy=Symbol("tooltipV2Content"),Rc="tooltip_v2.open",yy=e=>{const t=nt();return C(()=>{var n,o;return(o=(n=t.proxy)==null?void 0:n.$props[e])!=null?o:void 0})},$s=A();function qa(e,t=void 0){const n=nt()?Ie(dy,$s):$s;return e?C(()=>{var o,r;return(r=(o=n.value)==null?void 0:o[e])!=null?r:t}):n}const _y=(e,t,n=!1)=>{var o;const r=!!nt(),a=r?qa():void 0,i=(o=t==null?void 0:t.provide)!=null?o:r?ot:void 0;if(!i)return;const l=C(()=>{const s=_(e);return a!=null&&a.value?Bz(a.value,s):s});return i(dy,l),(n||!$s.value)&&($s.value=l.value),l},Bz=(e,t)=>{var n;const o=[...new Set([...Nd(e),...Nd(t)])],r={};for(const a of o)r[a]=(n=t[a])!=null?n:e[a];return r},dc=uo({type:String,values:wo,required:!1}),Ut=(e,t={})=>{const n=A(void 0),o=t.prop?n:yy("size"),r=t.global?n:qa("size"),a=t.form?{size:void 0}:Ie(Mn,void 0),i=t.formItem?{size:void 0}:Ie(qn,void 0);return C(()=>o.value||_(e)||(i==null?void 0:i.size)||(a==null?void 0:a.size)||r.value||"")},Zr=e=>{const t=yy("disabled"),n=Ie(Mn,void 0);return C(()=>t.value||_(e)||(n==null?void 0:n.disabled)||!1)},il=({from:e,replacement:t,scope:n,version:o,ref:r,type:a="API"},i)=>{ge(()=>_(i),l=>{},{immediate:!0})},wy=(e,t,n)=>{let o={offsetX:0,offsetY:0};const r=l=>{const s=l.clientX,c=l.clientY,{offsetX:d,offsetY:u}=o,p=e.value.getBoundingClientRect(),f=p.left,h=p.top,b=p.width,m=p.height,g=document.documentElement.clientWidth,v=document.documentElement.clientHeight,y=-f+d,T=-h+u,x=g-f-b+d,k=v-h-m+u,$=P=>{const O=Math.min(Math.max(d+P.clientX-s,y),x),D=Math.min(Math.max(u+P.clientY-c,T),k);o={offsetX:O,offsetY:D},e.value.style.transform=`translate(${io(O)}, ${io(D)})`},z=()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",z)};document.addEventListener("mousemove",$),document.addEventListener("mouseup",z)},a=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",r)},i=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",r)};et(()=>{Dn(()=>{n.value?a():i()})}),$t(()=>{i()})},jz=e=>({focus:()=>{var t,n;(n=(t=e.value)==null?void 0:t.focus)==null||n.call(t)}}),Ka=()=>{const e=Ie(Mn,void 0),t=Ie(qn,void 0);return{form:e,formItem:t}};var Hz={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const qz=e=>(t,n)=>Kz(t,n,_(e)),Kz=(e,t,n)=>Pt(n,e,e).replace(/\{(\w+)\}/g,(o,r)=>{var a;return`${(a=t==null?void 0:t[r])!=null?a:`{${r}}`}`}),Wz=e=>{const t=C(()=>_(e).name),n=Vt(e)?e:A(e);return{lang:t,locale:n,t:qz(e)}},Tt=()=>{const e=qa("locale");return Wz(C(()=>e.value||Hz))},xy=e=>{if(Vt(e)||Wt("[useLockscreen]","You need to pass a ref param to this function"),!dt||oo(document.body,"el-popup-parent--hidden"))return;let t=0,n=!1,o="0",r=0;const a=()=>{hn(document.body,"el-popup-parent--hidden"),n&&(document.body.style.paddingRight=o)};ge(e,i=>{if(!i){a();return}n=!oo(document.body,"el-popup-parent--hidden"),n&&(o=document.body.style.paddingRight,r=Number.parseInt(go(document.body,"paddingRight"),10)),t=y$();const l=document.documentElement.clientHeight<document.body.scrollHeight,s=go(document.body,"overflowY");t>0&&(l||s==="scroll")&&n&&(document.body.style.paddingRight=`${r+t}px`),bo(document.body,"el-popup-parent--hidden")}),Hg(()=>a())},ma=[],Uz=e=>{ma.length!==0&&e.code===Pe.esc&&(e.stopPropagation(),ma[ma.length-1].handleClose())},ky=(e,t)=>{ge(t,n=>{n?ma.push(e):ma.splice(ma.indexOf(e),1)})};dt&&Ht(document,"keydown",Uz);const Yz=uo({type:Te(Boolean),default:null}),Gz=uo({type:Te(Function)}),Xz=e=>{const t={[e]:Yz,[`onUpdate:${e}`]:Gz},n=[`update:${e}`];return{useModelToggle:({indicator:r,shouldHideWhenRouteChanges:a,shouldProceed:i,onShow:l,onHide:s})=>{const c=nt(),d=c.props,{emit:u}=c,p=`update:${e}`,f=C(()=>Je(d[`onUpdate:${e}`])),h=C(()=>d[e]===null),b=()=>{r.value!==!0&&(r.value=!0,Je(l)&&l())},m=()=>{r.value!==!1&&(r.value=!1,Je(s)&&s())},g=()=>{if(d.disabled===!0||Je(i)&&!i())return;const x=f.value&&dt;x&&u(p,!0),(h.value||!x)&&b()},v=()=>{if(d.disabled===!0||!dt)return;const x=f.value&&dt;x&&u(p,!1),(h.value||!x)&&m()},y=x=>{!on(x)||(d.disabled&&x?f.value&&u(p,!1):r.value!==x&&(x?b():m()))},T=()=>{r.value?v():g()};return ge(()=>d[e],y),a&&c.appContext.config.globalProperties.$route!==void 0&&ge(()=>he({},c.proxy.$route),()=>{a.value&&r.value&&v()}),et(()=>{y(d[e])}),{hide:v,show:g,toggle:T}},useModelToggleProps:t,useModelToggleEmits:n}},Zz=(e,t,n)=>{const o=a=>{n(a)&&a.stopImmediatePropagation()};let r;ge(()=>e.value,a=>{a?r=Ht(document,t,o,!0):r==null||r()},{immediate:!0})},Ty=(e,t)=>{let n;ge(()=>e.value,o=>{var r,a;o?(n=document.activeElement,Vt(t)&&((a=(r=t.value).focus)==null||a.call(r))):n.focus()})},pp=e=>{if(!e)return{onClick:wt,onMousedown:wt,onMouseup:wt};let t=!1,n=!1;return{onClick:i=>{t&&n&&e(i),t=n=!1},onMousedown:i=>{t=i.target===i.currentTarget},onMouseup:i=>{n=i.target===i.currentTarget}}},Jz=(e,t=0)=>{if(t===0)return e;const n=A(!1);let o=0;const r=()=>{o&&clearTimeout(o),o=window.setTimeout(()=>{n.value=e.value},t)};return et(r),ge(()=>e.value,a=>{a?r():n.value=a}),n};function Qz(){let e;const t=(o,r)=>{n(),e=window.setTimeout(o,r)},n=()=>window.clearTimeout(e);return oc(()=>n()),{registerTimeout:t,cancelTimeout:n}}const e8={prefix:Math.floor(Math.random()*1e4),current:0},t8=Symbol("elIdInjection"),fp=e=>{const t=Ie(t8,e8);return C(()=>_(e)||`el-id-${t.prefix}-${t.current++}`)},n8=e=>{const t=n=>{const o=n;o.key===Pe.esc&&(e==null||e(o))};et(()=>{At(document,"keydown",t)}),$t(()=>{Bt(document,"keydown",t)})};let Qh;const Cy=`el-popper-container-${al()}`,Sy=`#${Cy}`,o8=()=>{const e=document.createElement("div");return e.id=Cy,document.body.appendChild(e),e},r8=()=>{Ji(()=>{!dt||(!Qh||!document.body.querySelector(Sy))&&(Qh=o8())})},a8=Le({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200}}),i8=({showAfter:e,hideAfter:t,open:n,close:o})=>{const{registerTimeout:r}=Qz();return{onOpen:()=>{r(()=>{n()},_(e))},onClose:()=>{r(()=>{o()},_(t))}}},$y=Symbol("elForwardRef"),l8=e=>{ot($y,{setForwardRef:n=>{e.value=n}})},s8=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),c8="el",d8="is-",_r=(e,t,n,o,r)=>{let a=`${e}-${t}`;return n&&(a+=`-${n}`),o&&(a+=`__${o}`),r&&(a+=`--${r}`),a},ke=e=>{const t=qa("namespace"),n=C(()=>t.value||c8);return{namespace:n,b:(u="")=>_r(_(n),e,u,"",""),e:u=>u?_r(_(n),e,"",u,""):"",m:u=>u?_r(_(n),e,"","",u):"",be:(u,p)=>u&&p?_r(_(n),e,u,p,""):"",em:(u,p)=>u&&p?_r(_(n),e,"",u,p):"",bm:(u,p)=>u&&p?_r(_(n),e,u,"",p):"",bem:(u,p,f)=>u&&p&&f?_r(_(n),e,u,p,f):"",is:(u,...p)=>{const f=p.length>=1?p[0]:!0;return u&&f?`${d8}${u}`:""}}},em=A(0),jo=()=>{const e=qa("zIndex",2e3),t=C(()=>e.value+em.value);return{initialZIndex:e,currentZIndex:t,nextZIndex:()=>(em.value++,t.value)}};function hp(e){return e.split("-")[0]}function Ay(e){return e.split("-")[1]}function mp(e){return["top","bottom"].includes(hp(e))?"x":"y"}function Ey(e){return e==="y"?"height":"width"}function tm(e,t,n){let{reference:o,floating:r}=e;const a=o.x+o.width/2-r.width/2,i=o.y+o.height/2-r.height/2,l=mp(t),s=Ey(l),c=o[s]/2-r[s]/2,d=l==="x";let u;switch(hp(t)){case"top":u={x:a,y:o.y-r.height};break;case"bottom":u={x:a,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:i};break;case"left":u={x:o.x-r.width,y:i};break;default:u={x:o.x,y:o.y}}switch(Ay(t)){case"start":u[l]-=c*(n&&d?-1:1);break;case"end":u[l]+=c*(n&&d?-1:1)}return u}const u8=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:i}=n,l=await(i.isRTL==null?void 0:i.isRTL(t));let s=await i.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=tm(s,o,l),u=o,p={};for(let f=0;f<a.length;f++){const{name:h,fn:b}=a[f],{x:m,y:g,data:v,reset:y}=await b({x:c,y:d,initialPlacement:o,placement:u,strategy:r,middlewareData:p,rects:s,platform:i,elements:{reference:e,floating:t}});c=m!=null?m:c,d=g!=null?g:d,p=ze(he({},p),{[h]:he(he({},p[h]),v)}),y&&(typeof y=="object"&&(y.placement&&(u=y.placement),y.rects&&(s=y.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:r}):y.rects),{x:c,y:d}=tm(s,u,l)),f=-1)}return{x:c,y:d,placement:u,strategy:r,middlewareData:p}};function p8(e){return typeof e!="number"?function(t){return he({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function nm(e){return ze(he({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}const f8=Math.min,h8=Math.max;function m8(e,t,n){return h8(e,f8(t,n))}const g8=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:o=0}=e!=null?e:{},{x:r,y:a,placement:i,rects:l,platform:s}=t;if(n==null)return{};const c=p8(o),d={x:r,y:a},u=mp(i),p=Ey(u),f=await s.getDimensions(n),h=u==="y"?"top":"left",b=u==="y"?"bottom":"right",m=l.reference[p]+l.reference[u]-d[u]-l.floating[p],g=d[u]-l.reference[u],v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(n)),y=v?u==="y"?v.clientHeight||0:v.clientWidth||0:0,T=m/2-g/2,x=c[h],k=y-f[p]-c[b],$=y/2-f[p]/2+T,z=m8(x,$,k);return{data:{[u]:z,centerOffset:$-z}}}}),b8=["top","right","bottom","left"];b8.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);const v8=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o,placement:r,rects:a,platform:i,elements:l}=t,s=function(c,d,u,p){p===void 0&&(p=!1);const f=hp(c),h=Ay(c),b=mp(c)==="x",m=["left","top"].includes(f)?-1:1,g=p&&b?-1:1,v=typeof u=="function"?u(ze(he({},d),{placement:c})):u,y=typeof v=="number";let{mainAxis:T,crossAxis:x,alignmentAxis:k}=y?{mainAxis:v,crossAxis:0,alignmentAxis:null}:he({mainAxis:0,crossAxis:0,alignmentAxis:null},v);return h&&typeof k=="number"&&(x=h==="end"?-1*k:k),b?{x:x*g,y:T*m}:{x:T*m,y:x*g}}(r,a,e,await(i.isRTL==null?void 0:i.isRTL(l.floating)));return{x:n+s.x,y:o+s.y,data:s}}}};function zy(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function Ho(e){if(e==null)return window;if(!zy(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function ll(e){return Ho(e).getComputedStyle(e)}function zo(e){return zy(e)?"":e?(e.nodeName||"").toLowerCase():""}function yo(e){return e instanceof Ho(e).HTMLElement}function Sa(e){return e instanceof Ho(e).Element}function gp(e){return e instanceof Ho(e).ShadowRoot||e instanceof ShadowRoot}function uc(e){const{overflow:t,overflowX:n,overflowY:o}=ll(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function y8(e){return["table","td","th"].includes(zo(e))}function om(e){const t=navigator.userAgent.toLowerCase().includes("firefox"),n=ll(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"}function Iy(){return!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}const rm=Math.min,vi=Math.max,As=Math.round;function Fr(e,t,n){var o,r,a,i;t===void 0&&(t=!1),n===void 0&&(n=!1);const l=e.getBoundingClientRect();let s=1,c=1;t&&yo(e)&&(s=e.offsetWidth>0&&As(l.width)/e.offsetWidth||1,c=e.offsetHeight>0&&As(l.height)/e.offsetHeight||1);const d=Sa(e)?Ho(e):window,u=!Iy()&&n,p=(l.left+(u&&(o=(r=d.visualViewport)==null?void 0:r.offsetLeft)!=null?o:0))/s,f=(l.top+(u&&(a=(i=d.visualViewport)==null?void 0:i.offsetTop)!=null?a:0))/c,h=l.width/s,b=l.height/c;return{width:h,height:b,top:f,right:p+h,bottom:f+b,left:p,x:p,y:f}}function lr(e){return(t=e,(t instanceof Ho(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function pc(e){return Sa(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ny(e){return Fr(lr(e)).left+pc(e).scrollLeft}function _8(e,t,n){const o=yo(t),r=lr(t),a=Fr(e,o&&function(s){const c=Fr(s);return As(c.width)!==s.offsetWidth||As(c.height)!==s.offsetHeight}(t),n==="fixed");let i={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(o||!o&&n!=="fixed")if((zo(t)!=="body"||uc(r))&&(i=pc(t)),yo(t)){const s=Fr(t,!0);l.x=s.x+t.clientLeft,l.y=s.y+t.clientTop}else r&&(l.x=Ny(r));return{x:a.left+i.scrollLeft-l.x,y:a.top+i.scrollTop-l.y,width:a.width,height:a.height}}function My(e){return zo(e)==="html"?e:e.assignedSlot||e.parentNode||(gp(e)?e.host:null)||lr(e)}function am(e){return yo(e)&&getComputedStyle(e).position!=="fixed"?e.offsetParent:null}function Rd(e){const t=Ho(e);let n=am(e);for(;n&&y8(n)&&getComputedStyle(n).position==="static";)n=am(n);return n&&(zo(n)==="html"||zo(n)==="body"&&getComputedStyle(n).position==="static"&&!om(n))?t:n||function(o){let r=My(o);for(gp(r)&&(r=r.host);yo(r)&&!["html","body"].includes(zo(r));){if(om(r))return r;r=r.parentNode}return null}(e)||t}function im(e){if(yo(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=Fr(e);return{width:t.width,height:t.height}}function Ry(e){const t=My(e);return["html","body","#document"].includes(zo(t))?e.ownerDocument.body:yo(t)&&uc(t)?t:Ry(t)}function Py(e,t){var n;t===void 0&&(t=[]);const o=Ry(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=Ho(o),i=r?[a].concat(a.visualViewport||[],uc(o)?o:[]):o,l=t.concat(i);return r?l:l.concat(Py(i))}function lm(e,t,n){return t==="viewport"?nm(function(o,r){const a=Ho(o),i=lr(o),l=a.visualViewport;let s=i.clientWidth,c=i.clientHeight,d=0,u=0;if(l){s=l.width,c=l.height;const p=Iy();(p||!p&&r==="fixed")&&(d=l.offsetLeft,u=l.offsetTop)}return{width:s,height:c,x:d,y:u}}(e,n)):Sa(t)?function(o,r){const a=Fr(o,!1,r==="fixed"),i=a.top+o.clientTop,l=a.left+o.clientLeft;return{top:i,left:l,x:l,y:i,right:l+o.clientWidth,bottom:i+o.clientHeight,width:o.clientWidth,height:o.clientHeight}}(t,n):nm(function(o){var r;const a=lr(o),i=pc(o),l=(r=o.ownerDocument)==null?void 0:r.body,s=vi(a.scrollWidth,a.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),c=vi(a.scrollHeight,a.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0);let d=-i.scrollLeft+Ny(o);const u=-i.scrollTop;return ll(l||a).direction==="rtl"&&(d+=vi(a.clientWidth,l?l.clientWidth:0)-s),{width:s,height:c,x:d,y:u}}(lr(e)))}function w8(e){const t=Py(e),n=["absolute","fixed"].includes(ll(e).position)&&yo(e)?Rd(e):e;return Sa(n)?t.filter(o=>Sa(o)&&function(r,a){const i=a==null||a.getRootNode==null?void 0:a.getRootNode();if(r!=null&&r.contains(a))return!0;if(i&&gp(i)){let l=a;do{if(l&&r===l)return!0;l=l.parentNode||l.host}while(l)}return!1}(o,n)&&zo(o)!=="body"):[]}const x8={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const a=[...n==="clippingAncestors"?w8(t):[].concat(n),o],i=a[0],l=a.reduce((s,c)=>{const d=lm(t,c,r);return s.top=vi(d.top,s.top),s.right=rm(d.right,s.right),s.bottom=rm(d.bottom,s.bottom),s.left=vi(d.left,s.left),s},lm(t,i,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:o}=e;const r=yo(n),a=lr(n);if(n===a)return t;let i={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if((r||!r&&o!=="fixed")&&((zo(n)!=="body"||uc(a))&&(i=pc(n)),yo(n))){const s=Fr(n,!0);l.x=s.x+n.clientLeft,l.y=s.y+n.clientTop}return ze(he({},t),{x:t.x-i.scrollLeft+l.x,y:t.y-i.scrollTop+l.y})},isElement:Sa,getDimensions:im,getOffsetParent:Rd,getDocumentElement:lr,getElementRects:e=>{let{reference:t,floating:n,strategy:o}=e;return{reference:_8(t,Rd(n),o),floating:ze(he({},im(n)),{x:0,y:0})}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>ll(e).direction==="rtl"},k8=(e,t,n)=>u8(e,t,he({platform:x8},n));Le({});const T8=e=>{if(!dt)return;if(!e)return e;const t=no(e);return t||(Vt(e)?t:e)},C8=({middleware:e,placement:t,strategy:n})=>{const o=A(),r=A(),a=A(),i=A(),l=A({}),s={x:a,y:i,placement:t,strategy:n,middlewareData:l},c=async()=>{if(!dt)return;const d=T8(o),u=no(r);if(!d||!u)return;const p=await k8(d,u,{placement:_(t),strategy:_(n),middleware:_(e)});Object.keys(s).forEach(f=>{s[f].value=p[f]})};return et(()=>{Dn(()=>{c()})}),ze(he({},s),{update:c,referenceRef:o,contentRef:r})},S8=({arrowRef:e,padding:t})=>({name:"arrow",options:{element:e,padding:t},fn(n){const o=_(e);return o?g8({element:o,padding:t}).fn(n):{}}}),$8="2.1.9",sm=Symbol("INSTALLED_KEY"),A8=(e=[])=>({version:$8,install:(n,o)=>{n[sm]||(n[sm]=!0,e.forEach(r=>n.use(r)),o&&_y(o,n,!0))}}),E8=Le({zIndex:{type:Te([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),z8={scroll:({scrollTop:e,fixed:t})=>typeof e=="number"&&typeof t=="boolean",change:e=>typeof e=="boolean"};var _e=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n};const I8={name:"ElAffix"},N8=ee(ze(he({},I8),{props:E8,emits:z8,setup(e,{expose:t,emit:n}){const o=e,r="ElAffix",a=ke("affix"),i=Kt(),l=Kt(),s=Kt(),{height:c}=u$(),{height:d,width:u,top:p,bottom:f,update:h}=Wh(l),b=Wh(i),m=A(!1),g=A(0),v=A(0),y=C(()=>({height:m.value?`${d.value}px`:"",width:m.value?`${u.value}px`:""})),T=C(()=>{if(!m.value)return{};const $=o.offset?`${o.offset}px`:0;return{height:`${d.value}px`,width:`${u.value}px`,top:o.position==="top"?$:"",bottom:o.position==="bottom"?$:"",transform:v.value?`translateY(${v.value}px)`:"",zIndex:o.zIndex}}),x=()=>{if(!!s.value)if(g.value=s.value instanceof Window?document.documentElement.scrollTop:s.value.scrollTop||0,o.position==="top")if(o.target){const $=b.bottom.value-o.offset-d.value;m.value=o.offset>p.value&&b.bottom.value>0,v.value=$<0?$:0}else m.value=o.offset>p.value;else if(o.target){const $=c.value-b.top.value-o.offset-d.value;m.value=c.value-o.offset<f.value&&c.value>b.top.value,v.value=$<0?-$:0}else m.value=c.value-o.offset<f.value},k=()=>{n("scroll",{scrollTop:g.value,fixed:m.value})};return ge(m,$=>n("change",$)),et(()=>{var $;o.target?(i.value=($=document.querySelector(o.target))!=null?$:void 0,i.value||Wt(r,`Target is not existed: ${o.target}`)):i.value=document.documentElement,s.value=ap(l.value,!0),h()}),Ht(s,"scroll",k),Dn(x),t({update:x}),($,z)=>(w(),I("div",{ref_key:"root",ref:l,class:S(_(a).b()),style:Oe(_(y))},[M("div",{class:S({[_(a).m("fixed")]:m.value}),style:Oe(_(T))},[ue($.$slots,"default")],6)],6))}}));var M8=_e(N8,[["__file","/home/runner/work/element-plus/element-plus/packages/components/affix/src/affix.vue"]]);const R8=rt(M8),P8=Le({size:{type:Te([Number,String])},color:{type:String}}),O8={name:"ElIcon",inheritAttrs:!1},F8=ee(ze(he({},O8),{props:P8,setup(e){const t=e,n=ke("icon"),o=C(()=>!t.size&&!t.color?{}:{fontSize:Cn(t.size)?void 0:io(t.size),"--color":t.color});return(r,a)=>(w(),I("i",St({class:_(n).b(),style:_(o)},r.$attrs),[ue(r.$slots,"default")],16))}}));var D8=_e(F8,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const qe=rt(D8),L8=["light","dark"],V8=Le({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:Nd(Fo),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:L8,default:"light"}}),B8={close:e=>e instanceof MouseEvent},j8={name:"ElAlert"},H8=ee(ze(he({},j8),{props:V8,emits:B8,setup(e,{emit:t}){const n=e,{Close:o}=ic,r=nl(),a=ke("alert"),i=A(!0),l=C(()=>Fo[n.type]||Fo.info),s=C(()=>n.description||{[a.is("big")]:r.default}),c=C(()=>n.description||{[a.is("bold")]:r.default}),d=u=>{i.value=!1,t("close",u)};return(u,p)=>(w(),Q(qt,{name:_(a).b("fade")},{default:K(()=>[Ue(M("div",{class:S([_(a).b(),_(a).m(u.type),_(a).is("center",u.center),_(a).is(u.effect)]),role:"alert"},[u.showIcon&&_(l)?(w(),Q(_(qe),{key:0,class:S([_(a).e("icon"),_(s)])},{default:K(()=>[(w(),Q(pt(_(l))))]),_:1},8,["class"])):G("v-if",!0),M("div",{class:S(_(a).e("content"))},[u.title||u.$slots.title?(w(),I("span",{key:0,class:S([_(a).e("title"),_(c)])},[ue(u.$slots,"title",{},()=>[it(ve(u.title),1)])],2)):G("v-if",!0),u.$slots.default||u.description?(w(),I("p",{key:1,class:S(_(a).e("description"))},[ue(u.$slots,"default",{},()=>[it(ve(u.description),1)])],2)):G("v-if",!0),u.closable?(w(),I(Fe,{key:2},[u.closeText?(w(),I("div",{key:0,class:S([_(a).e("close-btn"),_(a).is("customed")]),onClick:d},ve(u.closeText),3)):(w(),Q(_(qe),{key:1,class:S(_(a).e("close-btn")),onClick:d},{default:K(()=>[U(_(o))]),_:1},8,["class"]))],2112)):G("v-if",!0)],2)],2),[[ft,i.value]])]),_:3},8,["name"]))}}));var q8=_e(H8,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]);const K8=rt(q8);let Xn;const W8=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,U8=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Y8(e){const t=window.getComputedStyle(e),n=t.getPropertyValue("box-sizing"),o=Number.parseFloat(t.getPropertyValue("padding-bottom"))+Number.parseFloat(t.getPropertyValue("padding-top")),r=Number.parseFloat(t.getPropertyValue("border-bottom-width"))+Number.parseFloat(t.getPropertyValue("border-top-width"));return{contextStyle:U8.map(i=>`${i}:${t.getPropertyValue(i)}`).join(";"),paddingSize:o,borderSize:r,boxSizing:n}}function cm(e,t=1,n){var o;Xn||(Xn=document.createElement("textarea"),document.body.appendChild(Xn));const{paddingSize:r,borderSize:a,boxSizing:i,contextStyle:l}=Y8(e);Xn.setAttribute("style",`${l};${W8}`),Xn.value=e.value||e.placeholder||"";let s=Xn.scrollHeight;const c={};i==="border-box"?s=s+a:i==="content-box"&&(s=s-r),Xn.value="";const d=Xn.scrollHeight-r;if(mt(t)){let u=d*t;i==="border-box"&&(u=u+r+a),s=Math.max(u,s),c.minHeight=`${u}px`}if(mt(n)){let u=d*n;i==="border-box"&&(u=u+r+a),s=Math.min(u,s)}return c.height=`${s}px`,(o=Xn.parentNode)==null||o.removeChild(Xn),Xn=void 0,c}const G8=Le({size:dc,disabled:Boolean,modelValue:{type:Te([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:Te([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:an,default:""},prefixIcon:{type:an,default:""},label:{type:String},tabindex:{type:[Number,String]},validateEvent:{type:Boolean,default:!0},inputStyle:{type:Te([Object,Array,String]),default:()=>Ft({})}}),X8={[tt]:e=>Qe(e),input:e=>Qe(e),change:e=>Qe(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},Z8=["type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder"],J8=["tabindex","disabled","readonly","autocomplete","aria-label","placeholder"],Q8={name:"ElInput",inheritAttrs:!1},eI=ee(ze(he({},Q8),{props:G8,emits:X8,setup(e,{expose:t,emit:n}){const o=e,r={suffix:"append",prefix:"prepend"},a=nt(),i=Rb(),l=nl(),s=dp(),{form:c,formItem:d}=Ka(),u=Ut(),p=Zr(),f=ke("input"),h=ke("textarea"),b=Kt(),m=Kt(),g=A(!1),v=A(!1),y=A(!1),T=A(!1),x=Kt(o.inputStyle),k=C(()=>b.value||m.value),$=C(()=>{var B;return(B=c==null?void 0:c.statusIcon)!=null?B:!1}),z=C(()=>(d==null?void 0:d.validateState)||""),P=C(()=>Qv[z.value]),O=C(()=>T.value?fz:zE),D=C(()=>[i.style,o.inputStyle]),L=C(()=>[o.inputStyle,x.value,{resize:o.resize}]),F=C(()=>op(o.modelValue)?"":String(o.modelValue)),V=C(()=>o.clearable&&!p.value&&!o.readonly&&!!F.value&&(g.value||v.value)),q=C(()=>o.showPassword&&!p.value&&!o.readonly&&(!!F.value||g.value)),R=C(()=>o.showWordLimit&&!!s.value.maxlength&&(o.type==="text"||o.type==="textarea")&&!p.value&&!o.readonly&&!o.showPassword),E=C(()=>Array.from(F.value).length),N=C(()=>!!R.value&&E.value>Number(s.value.maxlength)),W=C(()=>!!l.suffix||!!o.suffixIcon||V.value||o.showPassword||R.value||!!z.value&&$.value),Y=()=>{const{type:B,autosize:me}=o;if(!(!dt||B!=="textarea"))if(me){const Be=ut(me)?me.minRows:void 0,Ze=ut(me)?me.maxRows:void 0;x.value=he({},cm(m.value,Be,Ze))}else x.value={minHeight:cm(m.value).minHeight}},J=()=>{const B=k.value;!B||B.value===F.value||(B.value=F.value)},Z=B=>{const{el:me}=a.vnode;if(!me)return;const Ze=Array.from(me.querySelectorAll(`.${f.e(B)}`)).find(re=>re.parentNode===me);if(!Ze)return;const Ve=r[B];l[Ve]?Ze.style.transform=`translateX(${B==="suffix"?"-":""}${me.querySelector(`.${f.be("group",Ve)}`).offsetWidth}px)`:Ze.removeAttribute("style")},se=()=>{Z("prefix"),Z("suffix")},Se=async B=>{const{value:me}=B.target;y.value||me!==F.value&&(n(tt,me),n("input",me),await je(),J())},oe=B=>{n("change",B.target.value)},H=B=>{n("compositionstart",B),y.value=!0},ne=B=>{var me;n("compositionupdate",B);const Be=(me=B.target)==null?void 0:me.value,Ze=Be[Be.length-1]||"";y.value=!lc(Ze)},ie=B=>{n("compositionend",B),y.value&&(y.value=!1,Se(B))},be=()=>{T.value=!T.value,$e()},$e=async()=>{var B;await je(),(B=k.value)==null||B.focus()},Ne=()=>{var B;return(B=k.value)==null?void 0:B.blur()},Me=B=>{g.value=!0,n("focus",B)},j=B=>{var me;g.value=!1,n("blur",B),o.validateEvent&&((me=d==null?void 0:d.validate)==null||me.call(d,"blur").catch(Be=>void 0))},X=B=>{v.value=!1,n("mouseleave",B)},de=B=>{v.value=!0,n("mouseenter",B)},xe=B=>{n("keydown",B)},we=()=>{var B;(B=k.value)==null||B.select()},Ae=()=>{n(tt,""),n("change",""),n("clear"),n("input","")};ge(()=>o.modelValue,()=>{var B;je(()=>Y()),o.validateEvent&&((B=d==null?void 0:d.validate)==null||B.call(d,"change").catch(me=>void 0))}),ge(F,()=>J()),ge(()=>o.type,async()=>{await je(),J(),Y(),se()});const ce=A(),ae=A(),te=A({}),pe=(B,me)=>{if(B.value){const Be=B.value.offsetWidth;return Be>0?Be+16:me}return me},De=()=>{te.value=he({paddingRight:`${pe(ce,0)}px`,paddingLeft:`${pe(ae,11)}px`},o.inputStyle)};return ge(V,()=>{je(()=>{De()})}),et(async()=>{De(),J(),se(),await je(),Y()}),Un(async()=>{await je(),se()}),t({input:b,textarea:m,ref:k,textareaStyle:L,autosize:Yt(o,"autosize"),focus:$e,blur:Ne,select:we,clear:Ae,resizeTextarea:Y}),(B,me)=>Ue((w(),I("div",{class:S([B.type==="textarea"?_(h).b():_(f).b(),_(f).m(_(u)),_(f).is("disabled",_(p)),_(f).is("exceed",_(N)),{[_(f).b("group")]:B.$slots.prepend||B.$slots.append,[_(f).bm("group","append")]:B.$slots.append,[_(f).bm("group","prepend")]:B.$slots.prepend,[_(f).m("prefix")]:B.$slots.prefix||B.prefixIcon,[_(f).m("suffix")]:B.$slots.suffix||B.suffixIcon||B.clearable||B.showPassword,[_(f).m("suffix--password-clear")]:_(V)&&_(q)},B.$attrs.class]),style:Oe(_(D)),onMouseenter:de,onMouseleave:X},[G(" input "),B.type!=="textarea"?(w(),I(Fe,{key:0},[G(" prepend slot "),B.$slots.prepend?(w(),I("div",{key:0,class:S(_(f).be("group","prepend"))},[ue(B.$slots,"prepend")],2)):G("v-if",!0),M("input",St({ref_key:"input",ref:b,class:_(f).e("inner")},_(s),{type:B.showPassword?T.value?"text":"password":B.type,disabled:_(p),readonly:B.readonly,autocomplete:B.autocomplete,tabindex:B.tabindex,"aria-label":B.label,placeholder:B.placeholder,style:te.value,onCompositionstart:H,onCompositionupdate:ne,onCompositionend:ie,onInput:Se,onFocus:Me,onBlur:j,onChange:oe,onKeydown:xe}),null,16,Z8),G(" prefix slot "),B.$slots.prefix||B.prefixIcon?(w(),I("span",{key:1,class:S(_(f).e("prefix"))},[M("span",{ref_key:"innerPrefixRef",ref:ae,class:S(_(f).e("prefix-inner"))},[ue(B.$slots,"prefix"),B.prefixIcon?(w(),Q(_(qe),{key:0,class:S(_(f).e("icon"))},{default:K(()=>[(w(),Q(pt(B.prefixIcon)))]),_:1},8,["class"])):G("v-if",!0)],2)],2)):G("v-if",!0),G(" suffix slot "),_(W)?(w(),I("span",{key:2,class:S(_(f).e("suffix"))},[M("span",{ref_key:"innerSuffixRef",ref:ce,class:S(_(f).e("suffix-inner"))},[!_(V)||!_(q)||!_(R)?(w(),I(Fe,{key:0},[ue(B.$slots,"suffix"),B.suffixIcon?(w(),Q(_(qe),{key:0,class:S(_(f).e("icon"))},{default:K(()=>[(w(),Q(pt(B.suffixIcon)))]),_:1},8,["class"])):G("v-if",!0)],64)):G("v-if",!0),_(V)?(w(),Q(_(qe),{key:1,class:S([_(f).e("icon"),_(f).e("clear")]),onMousedown:me[0]||(me[0]=He(()=>{},["prevent"])),onClick:Ae},{default:K(()=>[U(_(Oo))]),_:1},8,["class"])):G("v-if",!0),_(q)?(w(),Q(_(qe),{key:2,class:S([_(f).e("icon"),_(f).e("clear")]),onClick:be},{default:K(()=>[(w(),Q(pt(_(O))))]),_:1},8,["class"])):G("v-if",!0),_(R)?(w(),I("span",{key:3,class:S(_(f).e("count"))},[M("span",{class:S(_(f).e("count-inner"))},ve(_(E))+" / "+ve(_(s).maxlength),3)],2)):G("v-if",!0)],2),_(z)&&_(P)&&_($)?(w(),Q(_(qe),{key:0,class:S([_(f).e("icon"),_(f).e("validateIcon"),_(f).is("loading",_(z)==="validating")])},{default:K(()=>[(w(),Q(pt(_(P))))]),_:1},8,["class"])):G("v-if",!0)],2)):G("v-if",!0),G(" append slot "),B.$slots.append?(w(),I("div",{key:3,class:S(_(f).be("group","append"))},[ue(B.$slots,"append")],2)):G("v-if",!0)],64)):(w(),I(Fe,{key:1},[G(" textarea "),M("textarea",St({ref_key:"textarea",ref:m,class:_(h).e("inner")},_(s),{tabindex:B.tabindex,disabled:_(p),readonly:B.readonly,autocomplete:B.autocomplete,style:_(L),"aria-label":B.label,placeholder:B.placeholder,onCompositionstart:H,onCompositionupdate:ne,onCompositionend:ie,onInput:Se,onFocus:Me,onBlur:j,onChange:oe,onKeydown:xe}),null,16,J8),_(R)?(w(),I("span",{key:0,class:S(_(f).e("count"))},ve(_(E))+" / "+ve(_(s).maxlength),3)):G("v-if",!0)],64))],38)),[[ft,B.type!=="hidden"]])}}));var tI=_e(eI,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Gn=rt(tI),Oy={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},nI=({move:e,size:t,bar:n})=>({[n.size]:t,transform:`translate${n.axis}(${e}%)`}),oI=Le({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),dm="Thumb",rI=ee({name:dm,props:oI,setup(e){const t=Ie(my),n=ke("scrollbar");t||Wt(dm,"can not inject scrollbar context");const o=A(),r=A(),a=A({}),i=A(!1);let l=!1,s=!1,c=dt?document.onselectstart:null;const d=C(()=>Oy[e.vertical?"vertical":"horizontal"]),u=C(()=>nI({size:e.size,move:e.move,bar:d.value})),p=C(()=>o.value[d.value.offset]**2/t.wrapElement[d.value.scrollSize]/e.ratio/r.value[d.value.offset]),f=x=>{var k;if(x.stopPropagation(),x.ctrlKey||[1,2].includes(x.button))return;(k=window.getSelection())==null||k.removeAllRanges(),b(x);const $=x.currentTarget;!$||(a.value[d.value.axis]=$[d.value.offset]-(x[d.value.client]-$.getBoundingClientRect()[d.value.direction]))},h=x=>{if(!r.value||!o.value||!t.wrapElement)return;const k=Math.abs(x.target.getBoundingClientRect()[d.value.direction]-x[d.value.client]),$=r.value[d.value.offset]/2,z=(k-$)*100*p.value/o.value[d.value.offset];t.wrapElement[d.value.scroll]=z*t.wrapElement[d.value.scrollSize]/100},b=x=>{x.stopImmediatePropagation(),l=!0,document.addEventListener("mousemove",m),document.addEventListener("mouseup",g),c=document.onselectstart,document.onselectstart=()=>!1},m=x=>{if(!o.value||!r.value||l===!1)return;const k=a.value[d.value.axis];if(!k)return;const $=(o.value.getBoundingClientRect()[d.value.direction]-x[d.value.client])*-1,z=r.value[d.value.offset]-k,P=($-z)*100*p.value/o.value[d.value.offset];t.wrapElement[d.value.scroll]=P*t.wrapElement[d.value.scrollSize]/100},g=()=>{l=!1,a.value[d.value.axis]=0,document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",g),T(),s&&(i.value=!1)},v=()=>{s=!1,i.value=!!e.size},y=()=>{s=!0,i.value=l};$t(()=>{T(),document.removeEventListener("mouseup",g)});const T=()=>{document.onselectstart!==c&&(document.onselectstart=c)};return Ht(Yt(t,"scrollbarElement"),"mousemove",v),Ht(Yt(t,"scrollbarElement"),"mouseleave",y),{ns:n,instance:o,thumb:r,bar:d,thumbStyle:u,visible:i,clickTrackHandler:h,clickThumbHandler:f}}});function aI(e,t,n,o,r,a){return w(),Q(qt,{name:e.ns.b("fade")},{default:K(()=>[Ue(M("div",{ref:"instance",class:S([e.ns.e("bar"),e.ns.is(e.bar.key)]),onMousedown:t[1]||(t[1]=(...i)=>e.clickTrackHandler&&e.clickTrackHandler(...i))},[M("div",{ref:"thumb",class:S(e.ns.e("thumb")),style:Oe(e.thumbStyle),onMousedown:t[0]||(t[0]=(...i)=>e.clickThumbHandler&&e.clickThumbHandler(...i))},null,38)],34),[[ft,e.always||e.visible]])]),_:1},8,["name"])}var iI=_e(rI,[["render",aI],["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const lI=Le({always:{type:Boolean,default:!0},width:{type:String,default:""},height:{type:String,default:""},ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),sI=ee({components:{Thumb:iI},props:lI,setup(e){const t=A(0),n=A(0),o=4;return{handleScroll:a=>{if(a){const i=a.offsetHeight-o,l=a.offsetWidth-o;n.value=a.scrollTop*100/i*e.ratioY,t.value=a.scrollLeft*100/l*e.ratioX}},moveX:t,moveY:n}}});function cI(e,t,n,o,r,a){const i=le("thumb");return w(),I(Fe,null,[U(i,{move:e.moveX,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),U(i,{move:e.moveY,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64)}var dI=_e(sI,[["render",cI],["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const uI=Le({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:Te([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:{type:Boolean,default:!1},minSize:{type:Number,default:20}}),pI={scroll:({scrollTop:e,scrollLeft:t})=>mt(e)&&mt(t)},fI=ee({name:"ElScrollbar",components:{Bar:dI},props:uI,emits:pI,setup(e,{emit:t}){const n=ke("scrollbar");let o,r;const a=A(),i=A(),l=A(),s=A("0"),c=A("0"),d=A(),u=A(0),p=A(0),f=A(1),h=A(1),b=4,m=C(()=>{const k={};return e.height&&(k.height=io(e.height)),e.maxHeight&&(k.maxHeight=io(e.maxHeight)),[e.wrapStyle,k]}),g=()=>{var k;i.value&&((k=d.value)==null||k.handleScroll(i.value),t("scroll",{scrollTop:i.value.scrollTop,scrollLeft:i.value.scrollLeft}))};function v(k,$){ut(k)?i.value.scrollTo(k):mt(k)&&mt($)&&i.value.scrollTo(k,$)}const y=k=>{!mt(k)||(i.value.scrollTop=k)},T=k=>{!mt(k)||(i.value.scrollLeft=k)},x=()=>{if(!i.value)return;const k=i.value.offsetHeight-b,$=i.value.offsetWidth-b,z=k**2/i.value.scrollHeight,P=$**2/i.value.scrollWidth,O=Math.max(z,e.minSize),D=Math.max(P,e.minSize);f.value=z/(k-z)/(O/(k-O)),h.value=P/($-P)/(D/($-D)),c.value=O+b<k?`${O}px`:"",s.value=D+b<$?`${D}px`:""};return ge(()=>e.noresize,k=>{k?(o==null||o(),r==null||r()):({stop:o}=Ba(l,x),r=Ht("resize",x))},{immediate:!0}),ge(()=>[e.maxHeight,e.height],()=>{e.native||je(()=>{var k;x(),i.value&&((k=d.value)==null||k.handleScroll(i.value))})}),ot(my,vt({scrollbarElement:a,wrapElement:i})),et(()=>{e.native||je(()=>x())}),Un(()=>x()),{ns:n,scrollbar$:a,wrap$:i,resize$:l,barRef:d,moveX:u,moveY:p,ratioX:h,ratioY:f,sizeWidth:s,sizeHeight:c,style:m,update:x,handleScroll:g,scrollTo:v,setScrollTop:y,setScrollLeft:T}}});function hI(e,t,n,o,r,a){const i=le("bar");return w(),I("div",{ref:"scrollbar$",class:S(e.ns.b())},[M("div",{ref:"wrap$",class:S([e.wrapClass,e.ns.e("wrap"),{[e.ns.em("wrap","hidden-default")]:!e.native}]),style:Oe(e.style),onScroll:t[0]||(t[0]=(...l)=>e.handleScroll&&e.handleScroll(...l))},[(w(),Q(pt(e.tag),{ref:"resize$",class:S([e.ns.e("view"),e.viewClass]),style:Oe(e.viewStyle)},{default:K(()=>[ue(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?G("v-if",!0):(w(),Q(i,{key:0,ref:"barRef",height:e.sizeHeight,width:e.sizeWidth,always:e.always,"ratio-x":e.ratioX,"ratio-y":e.ratioY},null,8,["height","width","always","ratio-x","ratio-y"]))],2)}var mI=_e(fI,[["render",hI],["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const qo=rt(mI),gI={name:"ElPopperRoot",inheritAttrs:!1},bI=ee(ze(he({},gI),{setup(e,{expose:t}){const n=A(),o=A(),r=A(),a=A(),i={triggerRef:n,popperInstanceRef:o,contentRef:r,referenceRef:a};return t(i),ot(up,i),(l,s)=>ue(l.$slots,"default")}}));var vI=_e(bI,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const Fy=Le({arrowOffset:{type:Number,default:5}}),yI={name:"ElPopperArrow",inheritAttrs:!1},_I=ee(ze(he({},yI),{props:Fy,setup(e,{expose:t}){const n=e,o=ke("popper"),{arrowOffset:r,arrowRef:a}=Ie(by,void 0);return ge(()=>n.arrowOffset,i=>{r.value=i}),$t(()=>{a.value=void 0}),t({arrowRef:a}),(i,l)=>(w(),I("span",{ref_key:"arrowRef",ref:a,class:S(_(o).e("arrow")),"data-popper-arrow":""},null,2))}}));var wI=_e(_I,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const xI="ElOnlyChild",kI=ee({name:xI,setup(e,{slots:t,attrs:n}){var o;const r=Ie($y),a=s8((o=r==null?void 0:r.setForwardRef)!=null?o:wt);return()=>{var i;const l=(i=t.default)==null?void 0:i.call(t,n);if(!l||l.length>1)return null;const s=Dy(l);return s?Ue(No(s,n),[[a]]):null}}});function Dy(e){if(!e)return null;const t=e;for(const n of t){if(ut(n))switch(n.type){case dn:continue;case tl:return Pc(n);case"svg":return Pc(n);case Fe:return Dy(n.children);default:return n}return Pc(n)}return null}function Pc(e){return U("span",{class:"el-only-child__content"},[e])}const Ly=Le({virtualRef:{type:Te(Object)},virtualTriggering:Boolean,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function,onBlur:Function,onContextmenu:Function,id:String,open:Boolean}),TI={name:"ElPopperTrigger",inheritAttrs:!1},CI=ee(ze(he({},TI),{props:Ly,setup(e,{expose:t}){const n=e,{triggerRef:o}=Ie(up,void 0);return l8(o),et(()=>{ge(()=>n.virtualRef,r=>{r&&(o.value=no(r))},{immediate:!0}),ge(()=>o.value,(r,a)=>{Hr(r)&&["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(i=>{var l;const s=n[i];s&&(r.addEventListener(i.slice(2).toLowerCase(),s),(l=a==null?void 0:a.removeEventListener)==null||l.call(a,i.slice(2).toLowerCase(),s))})},{immediate:!0})}),t({triggerRef:o}),(r,a)=>r.virtualTriggering?G("v-if",!0):(w(),Q(_(kI),St({key:0},r.$attrs,{"aria-describedby":r.open?r.id:void 0}),{default:K(()=>[ue(r.$slots,"default")]),_:3},16,["aria-describedby"]))}}));var SI=_e(CI,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]),mn="top",Kn="bottom",Wn="right",gn="left",bp="auto",sl=[mn,Kn,Wn,gn],$a="start",Hi="end",$I="clippingParents",Vy="viewport",ti="popper",AI="reference",um=sl.reduce(function(e,t){return e.concat([t+"-"+$a,t+"-"+Hi])},[]),vp=[].concat(sl,[bp]).reduce(function(e,t){return e.concat([t,t+"-"+$a,t+"-"+Hi])},[]),EI="beforeRead",zI="read",II="afterRead",NI="beforeMain",MI="main",RI="afterMain",PI="beforeWrite",OI="write",FI="afterWrite",DI=[EI,zI,II,NI,MI,RI,PI,OI,FI];function _o(e){return e?(e.nodeName||"").toLowerCase():null}function po(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Aa(e){var t=po(e).Element;return e instanceof t||e instanceof Element}function Ln(e){var t=po(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function yp(e){if(typeof ShadowRoot=="undefined")return!1;var t=po(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function LI(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},r=t.attributes[n]||{},a=t.elements[n];!Ln(a)||!_o(a)||(Object.assign(a.style,o),Object.keys(r).forEach(function(i){var l=r[i];l===!1?a.removeAttribute(i):a.setAttribute(i,l===!0?"":l)}))})}function VI(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],a=t.attributes[o]||{},i=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),l=i.reduce(function(s,c){return s[c]="",s},{});!Ln(r)||!_o(r)||(Object.assign(r.style,l),Object.keys(a).forEach(function(s){r.removeAttribute(s)}))})}}var BI={name:"applyStyles",enabled:!0,phase:"write",fn:LI,effect:VI,requires:["computeStyles"]};function vo(e){return e.split("-")[0]}var Dr=Math.max,Es=Math.min,Ea=Math.round;function za(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(Ln(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=Ea(n.width)/i||1),a>0&&(r=Ea(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function _p(e){var t=za(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function By(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&yp(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Do(e){return po(e).getComputedStyle(e)}function jI(e){return["table","td","th"].indexOf(_o(e))>=0}function mr(e){return((Aa(e)?e.ownerDocument:e.document)||window.document).documentElement}function fc(e){return _o(e)==="html"?e:e.assignedSlot||e.parentNode||(yp(e)?e.host:null)||mr(e)}function pm(e){return!Ln(e)||Do(e).position==="fixed"?null:e.offsetParent}function HI(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&Ln(e)){var o=Do(e);if(o.position==="fixed")return null}var r=fc(e);for(yp(r)&&(r=r.host);Ln(r)&&["html","body"].indexOf(_o(r))<0;){var a=Do(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function cl(e){for(var t=po(e),n=pm(e);n&&jI(n)&&Do(n).position==="static";)n=pm(n);return n&&(_o(n)==="html"||_o(n)==="body"&&Do(n).position==="static")?t:n||HI(e)||t}function wp(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function yi(e,t,n){return Dr(e,Es(t,n))}function qI(e,t,n){var o=yi(e,t,n);return o>n?n:o}function jy(){return{top:0,right:0,bottom:0,left:0}}function Hy(e){return Object.assign({},jy(),e)}function qy(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var KI=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Hy(typeof t!="number"?t:qy(t,sl))};function WI(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,l=vo(n.placement),s=wp(l),c=[gn,Wn].indexOf(l)>=0,d=c?"height":"width";if(!(!a||!i)){var u=KI(r.padding,n),p=_p(a),f=s==="y"?mn:gn,h=s==="y"?Kn:Wn,b=n.rects.reference[d]+n.rects.reference[s]-i[s]-n.rects.popper[d],m=i[s]-n.rects.reference[s],g=cl(a),v=g?s==="y"?g.clientHeight||0:g.clientWidth||0:0,y=b/2-m/2,T=u[f],x=v-p[d]-u[h],k=v/2-p[d]/2+y,$=yi(T,k,x),z=s;n.modifiersData[o]=(t={},t[z]=$,t.centerOffset=$-k,t)}}function UI(e){var t=e.state,n=e.options,o=n.element,r=o===void 0?"[data-popper-arrow]":o;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!By(t.elements.popper,r)||(t.elements.arrow=r))}var YI={name:"arrow",enabled:!0,phase:"main",fn:WI,effect:UI,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ia(e){return e.split("-")[1]}var GI={top:"auto",right:"auto",bottom:"auto",left:"auto"};function XI(e){var t=e.x,n=e.y,o=window,r=o.devicePixelRatio||1;return{x:Ea(t*r)/r||0,y:Ea(n*r)/r||0}}function fm(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,l=e.position,s=e.gpuAcceleration,c=e.adaptive,d=e.roundOffsets,u=e.isFixed,p=i.x,f=p===void 0?0:p,h=i.y,b=h===void 0?0:h,m=typeof d=="function"?d({x:f,y:b}):{x:f,y:b};f=m.x,b=m.y;var g=i.hasOwnProperty("x"),v=i.hasOwnProperty("y"),y=gn,T=mn,x=window;if(c){var k=cl(n),$="clientHeight",z="clientWidth";if(k===po(n)&&(k=mr(n),Do(k).position!=="static"&&l==="absolute"&&($="scrollHeight",z="scrollWidth")),k=k,r===mn||(r===gn||r===Wn)&&a===Hi){T=Kn;var P=u&&k===x&&x.visualViewport?x.visualViewport.height:k[$];b-=P-o.height,b*=s?1:-1}if(r===gn||(r===mn||r===Kn)&&a===Hi){y=Wn;var O=u&&k===x&&x.visualViewport?x.visualViewport.width:k[z];f-=O-o.width,f*=s?1:-1}}var D=Object.assign({position:l},c&&GI),L=d===!0?XI({x:f,y:b}):{x:f,y:b};if(f=L.x,b=L.y,s){var F;return Object.assign({},D,(F={},F[T]=v?"0":"",F[y]=g?"0":"",F.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+b+"px)":"translate3d("+f+"px, "+b+"px, 0)",F))}return Object.assign({},D,(t={},t[T]=v?b+"px":"",t[y]=g?f+"px":"",t.transform="",t))}function ZI(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=o===void 0?!0:o,a=n.adaptive,i=a===void 0?!0:a,l=n.roundOffsets,s=l===void 0?!0:l,c={placement:vo(t.placement),variation:Ia(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,fm(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,fm(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var JI={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ZI,data:{}},Cl={passive:!0};function QI(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=r===void 0?!0:r,i=o.resize,l=i===void 0?!0:i,s=po(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(d){d.addEventListener("scroll",n.update,Cl)}),l&&s.addEventListener("resize",n.update,Cl),function(){a&&c.forEach(function(d){d.removeEventListener("scroll",n.update,Cl)}),l&&s.removeEventListener("resize",n.update,Cl)}}var eN={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:QI,data:{}},tN={left:"right",right:"left",bottom:"top",top:"bottom"};function jl(e){return e.replace(/left|right|bottom|top/g,function(t){return tN[t]})}var nN={start:"end",end:"start"};function hm(e){return e.replace(/start|end/g,function(t){return nN[t]})}function xp(e){var t=po(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function kp(e){return za(mr(e)).left+xp(e).scrollLeft}function oN(e){var t=po(e),n=mr(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,l=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,l=o.offsetTop)),{width:r,height:a,x:i+kp(e),y:l}}function rN(e){var t,n=mr(e),o=xp(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=Dr(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=Dr(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),l=-o.scrollLeft+kp(e),s=-o.scrollTop;return Do(r||n).direction==="rtl"&&(l+=Dr(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:l,y:s}}function Tp(e){var t=Do(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function Ky(e){return["html","body","#document"].indexOf(_o(e))>=0?e.ownerDocument.body:Ln(e)&&Tp(e)?e:Ky(fc(e))}function _i(e,t){var n;t===void 0&&(t=[]);var o=Ky(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=po(o),i=r?[a].concat(a.visualViewport||[],Tp(o)?o:[]):o,l=t.concat(i);return r?l:l.concat(_i(fc(i)))}function Pd(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function aN(e){var t=za(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function mm(e,t){return t===Vy?Pd(oN(e)):Aa(t)?aN(t):Pd(rN(mr(e)))}function iN(e){var t=_i(fc(e)),n=["absolute","fixed"].indexOf(Do(e).position)>=0,o=n&&Ln(e)?cl(e):e;return Aa(o)?t.filter(function(r){return Aa(r)&&By(r,o)&&_o(r)!=="body"}):[]}function lN(e,t,n){var o=t==="clippingParents"?iN(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce(function(l,s){var c=mm(e,s);return l.top=Dr(c.top,l.top),l.right=Es(c.right,l.right),l.bottom=Es(c.bottom,l.bottom),l.left=Dr(c.left,l.left),l},mm(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Wy(e){var t=e.reference,n=e.element,o=e.placement,r=o?vo(o):null,a=o?Ia(o):null,i=t.x+t.width/2-n.width/2,l=t.y+t.height/2-n.height/2,s;switch(r){case mn:s={x:i,y:t.y-n.height};break;case Kn:s={x:i,y:t.y+t.height};break;case Wn:s={x:t.x+t.width,y:l};break;case gn:s={x:t.x-n.width,y:l};break;default:s={x:t.x,y:t.y}}var c=r?wp(r):null;if(c!=null){var d=c==="y"?"height":"width";switch(a){case $a:s[c]=s[c]-(t[d]/2-n[d]/2);break;case Hi:s[c]=s[c]+(t[d]/2-n[d]/2);break}}return s}function qi(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=o===void 0?e.placement:o,a=n.boundary,i=a===void 0?$I:a,l=n.rootBoundary,s=l===void 0?Vy:l,c=n.elementContext,d=c===void 0?ti:c,u=n.altBoundary,p=u===void 0?!1:u,f=n.padding,h=f===void 0?0:f,b=Hy(typeof h!="number"?h:qy(h,sl)),m=d===ti?AI:ti,g=e.rects.popper,v=e.elements[p?m:d],y=lN(Aa(v)?v:v.contextElement||mr(e.elements.popper),i,s),T=za(e.elements.reference),x=Wy({reference:T,element:g,strategy:"absolute",placement:r}),k=Pd(Object.assign({},g,x)),$=d===ti?k:T,z={top:y.top-$.top+b.top,bottom:$.bottom-y.bottom+b.bottom,left:y.left-$.left+b.left,right:$.right-y.right+b.right},P=e.modifiersData.offset;if(d===ti&&P){var O=P[r];Object.keys(z).forEach(function(D){var L=[Wn,Kn].indexOf(D)>=0?1:-1,F=[mn,Kn].indexOf(D)>=0?"y":"x";z[D]+=O[F]*L})}return z}function sN(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,l=n.flipVariations,s=n.allowedAutoPlacements,c=s===void 0?vp:s,d=Ia(o),u=d?l?um:um.filter(function(h){return Ia(h)===d}):sl,p=u.filter(function(h){return c.indexOf(h)>=0});p.length===0&&(p=u);var f=p.reduce(function(h,b){return h[b]=qi(e,{placement:b,boundary:r,rootBoundary:a,padding:i})[vo(b)],h},{});return Object.keys(f).sort(function(h,b){return f[h]-f[b]})}function cN(e){if(vo(e)===bp)return[];var t=jl(e);return[hm(e),t,hm(t)]}function dN(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,l=i===void 0?!0:i,s=n.fallbackPlacements,c=n.padding,d=n.boundary,u=n.rootBoundary,p=n.altBoundary,f=n.flipVariations,h=f===void 0?!0:f,b=n.allowedAutoPlacements,m=t.options.placement,g=vo(m),v=g===m,y=s||(v||!h?[jl(m)]:cN(m)),T=[m].concat(y).reduce(function(Se,oe){return Se.concat(vo(oe)===bp?sN(t,{placement:oe,boundary:d,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:b}):oe)},[]),x=t.rects.reference,k=t.rects.popper,$=new Map,z=!0,P=T[0],O=0;O<T.length;O++){var D=T[O],L=vo(D),F=Ia(D)===$a,V=[mn,Kn].indexOf(L)>=0,q=V?"width":"height",R=qi(t,{placement:D,boundary:d,rootBoundary:u,altBoundary:p,padding:c}),E=V?F?Wn:gn:F?Kn:mn;x[q]>k[q]&&(E=jl(E));var N=jl(E),W=[];if(a&&W.push(R[L]<=0),l&&W.push(R[E]<=0,R[N]<=0),W.every(function(Se){return Se})){P=D,z=!1;break}$.set(D,W)}if(z)for(var Y=h?3:1,J=function(oe){var H=T.find(function(ne){var ie=$.get(ne);if(ie)return ie.slice(0,oe).every(function(be){return be})});if(H)return P=H,"break"},Z=Y;Z>0;Z--){var se=J(Z);if(se==="break")break}t.placement!==P&&(t.modifiersData[o]._skip=!0,t.placement=P,t.reset=!0)}}var uN={name:"flip",enabled:!0,phase:"main",fn:dN,requiresIfExists:["offset"],data:{_skip:!1}};function gm(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function bm(e){return[mn,Wn,Kn,gn].some(function(t){return e[t]>=0})}function pN(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=qi(t,{elementContext:"reference"}),l=qi(t,{altBoundary:!0}),s=gm(i,o),c=gm(l,r,a),d=bm(s),u=bm(c);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":u})}var fN={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:pN};function hN(e,t,n){var o=vo(e),r=[gn,mn].indexOf(o)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=a[0],l=a[1];return i=i||0,l=(l||0)*r,[gn,Wn].indexOf(o)>=0?{x:l,y:i}:{x:i,y:l}}function mN(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=r===void 0?[0,0]:r,i=vp.reduce(function(d,u){return d[u]=hN(u,t.rects,a),d},{}),l=i[t.placement],s=l.x,c=l.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=i}var gN={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:mN};function bN(e){var t=e.state,n=e.name;t.modifiersData[n]=Wy({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var vN={name:"popperOffsets",enabled:!0,phase:"read",fn:bN,data:{}};function yN(e){return e==="x"?"y":"x"}function _N(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,l=i===void 0?!1:i,s=n.boundary,c=n.rootBoundary,d=n.altBoundary,u=n.padding,p=n.tether,f=p===void 0?!0:p,h=n.tetherOffset,b=h===void 0?0:h,m=qi(t,{boundary:s,rootBoundary:c,padding:u,altBoundary:d}),g=vo(t.placement),v=Ia(t.placement),y=!v,T=wp(g),x=yN(T),k=t.modifiersData.popperOffsets,$=t.rects.reference,z=t.rects.popper,P=typeof b=="function"?b(Object.assign({},t.rects,{placement:t.placement})):b,O=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(!!k){if(a){var F,V=T==="y"?mn:gn,q=T==="y"?Kn:Wn,R=T==="y"?"height":"width",E=k[T],N=E+m[V],W=E-m[q],Y=f?-z[R]/2:0,J=v===$a?$[R]:z[R],Z=v===$a?-z[R]:-$[R],se=t.elements.arrow,Se=f&&se?_p(se):{width:0,height:0},oe=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:jy(),H=oe[V],ne=oe[q],ie=yi(0,$[R],Se[R]),be=y?$[R]/2-Y-ie-H-O.mainAxis:J-ie-H-O.mainAxis,$e=y?-$[R]/2+Y+ie+ne+O.mainAxis:Z+ie+ne+O.mainAxis,Ne=t.elements.arrow&&cl(t.elements.arrow),Me=Ne?T==="y"?Ne.clientTop||0:Ne.clientLeft||0:0,j=(F=D==null?void 0:D[T])!=null?F:0,X=E+be-j-Me,de=E+$e-j,xe=yi(f?Es(N,X):N,E,f?Dr(W,de):W);k[T]=xe,L[T]=xe-E}if(l){var we,Ae=T==="x"?mn:gn,ce=T==="x"?Kn:Wn,ae=k[x],te=x==="y"?"height":"width",pe=ae+m[Ae],De=ae-m[ce],B=[mn,gn].indexOf(g)!==-1,me=(we=D==null?void 0:D[x])!=null?we:0,Be=B?pe:ae-$[te]-z[te]-me+O.altAxis,Ze=B?ae+$[te]+z[te]-me-O.altAxis:De,Ve=f&&B?qI(Be,ae,Ze):yi(f?Be:pe,ae,f?Ze:De);k[x]=Ve,L[x]=Ve-ae}t.modifiersData[o]=L}}var wN={name:"preventOverflow",enabled:!0,phase:"main",fn:_N,requiresIfExists:["offset"]};function xN(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function kN(e){return e===po(e)||!Ln(e)?xp(e):xN(e)}function TN(e){var t=e.getBoundingClientRect(),n=Ea(t.width)/e.offsetWidth||1,o=Ea(t.height)/e.offsetHeight||1;return n!==1||o!==1}function CN(e,t,n){n===void 0&&(n=!1);var o=Ln(t),r=Ln(t)&&TN(t),a=mr(t),i=za(e,r),l={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!n)&&((_o(t)!=="body"||Tp(a))&&(l=kN(t)),Ln(t)?(s=za(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=kp(a))),{x:i.left+l.scrollLeft-s.x,y:i.top+l.scrollTop-s.y,width:i.width,height:i.height}}function SN(e){var t=new Map,n=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function r(a){n.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(l){if(!n.has(l)){var s=t.get(l);s&&r(s)}}),o.push(a)}return e.forEach(function(a){n.has(a.name)||r(a)}),o}function $N(e){var t=SN(e);return DI.reduce(function(n,o){return n.concat(t.filter(function(r){return r.phase===o}))},[])}function AN(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function EN(e){var t=e.reduce(function(n,o){var r=n[o.name];return n[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var vm={placement:"bottom",modifiers:[],strategy:"absolute"};function ym(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function zN(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,r=t.defaultOptions,a=r===void 0?vm:r;return function(l,s,c){c===void 0&&(c=a);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},vm,a),modifiersData:{},elements:{reference:l,popper:s},attributes:{},styles:{}},u=[],p=!1,f={state:d,setOptions:function(g){var v=typeof g=="function"?g(d.options):g;b(),d.options=Object.assign({},a,d.options,v),d.scrollParents={reference:Aa(l)?_i(l):l.contextElement?_i(l.contextElement):[],popper:_i(s)};var y=$N(EN([].concat(o,d.options.modifiers)));return d.orderedModifiers=y.filter(function(T){return T.enabled}),h(),f.update()},forceUpdate:function(){if(!p){var g=d.elements,v=g.reference,y=g.popper;if(!!ym(v,y)){d.rects={reference:CN(v,cl(y),d.options.strategy==="fixed"),popper:_p(y)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(O){return d.modifiersData[O.name]=Object.assign({},O.data)});for(var T=0;T<d.orderedModifiers.length;T++){if(d.reset===!0){d.reset=!1,T=-1;continue}var x=d.orderedModifiers[T],k=x.fn,$=x.options,z=$===void 0?{}:$,P=x.name;typeof k=="function"&&(d=k({state:d,options:z,name:P,instance:f})||d)}}}},update:AN(function(){return new Promise(function(m){f.forceUpdate(),m(d)})}),destroy:function(){b(),p=!0}};if(!ym(l,s))return f;f.setOptions(c).then(function(m){!p&&c.onFirstUpdate&&c.onFirstUpdate(m)});function h(){d.orderedModifiers.forEach(function(m){var g=m.name,v=m.options,y=v===void 0?{}:v,T=m.effect;if(typeof T=="function"){var x=T({state:d,name:g,instance:f,options:y}),k=function(){};u.push(x||k)}})}function b(){u.forEach(function(m){return m()}),u=[]}return f}}var IN=[eN,vN,JI,BI,gN,uN,wN,YI,fN],Uy=zN({defaultModifiers:IN});const NN=["fixed","absolute"],MN=Le({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:Te(Array),default:()=>[]},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:vp,default:"bottom"},popperOptions:{type:Te(Object),default:()=>({})},strategy:{type:String,values:NN,default:"absolute"}}),Yy=Le(ze(he({},MN),{style:{type:Te([String,Array,Object])},className:{type:Te([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,popperClass:{type:Te([String,Array,Object])},popperStyle:{type:Te([String,Array,Object])},referenceEl:{type:Te(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},zIndex:Number})),_m=(e,t)=>{const{placement:n,strategy:o,popperOptions:r}=e,a=ze(he({placement:n,strategy:o},r),{modifiers:PN(e)});return ON(a,t),FN(a,r==null?void 0:r.modifiers),a},RN=e=>{if(!!dt)return no(e)};function PN(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,t!=null?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o!=null?o:[]}},{name:"computeStyles",options:{gpuAcceleration:n,adaptive:n}}]}function ON(e,{arrowEl:t,arrowOffset:n}){e.modifiers.push({name:"arrow",options:{element:t,padding:n!=null?n:5}})}function FN(e,t){t&&(e.modifiers=[...e.modifiers,...t!=null?t:[]])}const DN={name:"ElPopperContent"},LN=ee(ze(he({},DN),{props:Yy,emits:["mouseenter","mouseleave"],setup(e,{expose:t}){const n=e,{popperInstanceRef:o,contentRef:r,triggerRef:a}=Ie(up,void 0),{nextZIndex:i}=jo(),l=ke("popper"),s=A(),c=A(),d=A();ot(by,{arrowRef:c,arrowOffset:d});const u=A(n.zIndex||i()),p=C(()=>RN(n.referenceEl)||_(a)),f=C(()=>[{zIndex:_(u)},n.popperStyle]),h=C(()=>[l.b(),l.is("pure",n.pure),l.is(n.effect),n.popperClass]),b=({referenceEl:v,popperContentEl:y,arrowEl:T})=>{const x=_m(n,{arrowEl:T,arrowOffset:_(d)});return Uy(v,y,x)},m=()=>{var v;(v=_(o))==null||v.update(),u.value=n.zIndex||u.value||i()},g=()=>{var v,y;const T={name:"eventListeners",enabled:n.visible};(y=(v=_(o))==null?void 0:v.setOptions)==null||y.call(v,x=>ze(he({},x),{modifiers:[...x.modifiers||[],T]})),m()};return et(()=>{let v;ge(p,y=>{var T;v==null||v();const x=_(o);if((T=x==null?void 0:x.destroy)==null||T.call(x),y){const k=_(s);r.value=k,o.value=b({referenceEl:y,popperContentEl:k,arrowEl:_(c)}),v=ge(()=>y.getBoundingClientRect(),()=>m(),{immediate:!0})}else o.value=void 0},{immediate:!0}),ge(()=>n.visible,g,{immediate:!0}),ge(()=>_m(n,{arrowEl:_(c),arrowOffset:_(d)}),y=>{var T;return(T=o.value)==null?void 0:T.setOptions(y)})}),t({popperContentRef:s,popperInstanceRef:o,updatePopper:m,contentStyle:f}),(v,y)=>(w(),I("div",{ref_key:"popperContentRef",ref:s,style:Oe(_(f)),class:S(_(h)),role:"tooltip",onMouseenter:y[0]||(y[0]=T=>v.$emit("mouseenter",T)),onMouseleave:y[1]||(y[1]=T=>v.$emit("mouseleave",T))},[ue(v.$slots,"default")],38))}}));var VN=_e(LN,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const BN={LIGHT:"light",DARK:"dark"};Le({autoClose:{type:Number,default:0},cutoff:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}});function Wa(e,t){const n=nt(),o=C(()=>on(n.props[t])?n.props[t]:n.props.teleported);return il({scope:e,from:t,replacement:"teleported",version:"2.1.0",ref:"https://element-plus.org/en-US/component/tooltip.html#attributes"},C(()=>on(n.props[t]))),{compatTeleported:o}}const Gy=rt(vI),jN=ee({name:"ElVisuallyHidden",props:{style:{type:[String,Object,Array]}},setup(e){return{computedStyle:C(()=>[e.style,{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}])}}});function HN(e,t,n,o,r,a){return w(),I("span",St(e.$attrs,{style:e.computedStyle}),[ue(e.$slots,"default")],16)}var Xy=_e(jN,[["render",HN],["__file","/home/runner/work/element-plus/element-plus/packages/components/visual-hidden/src/visual-hidden.vue"]]);const tn=Le(ze(he(he({},a8),Yy),{appendTo:{type:Te([String,Object]),default:Sy},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:Te(Boolean),default:null},transition:{type:String,default:"el-fade-in-linear"},teleported:{type:Boolean,default:!0},disabled:{type:Boolean}})),Ki=Le(ze(he({},Ly),{disabled:Boolean,trigger:{type:Te([String,Array]),default:"hover"}})),qN=Le({openDelay:{type:Number},visibleArrow:{type:Boolean,default:void 0},hideAfter:{type:Number,default:200},showArrow:{type:Boolean,default:!0}}),hc=Symbol("elTooltip"),KN=ee({name:"ElTooltipContent",components:{ElPopperContent:VN,ElVisuallyHidden:Xy},inheritAttrs:!1,props:tn,setup(e){const t=A(null),n=A(!1),o=A(!1),r=A(!1),a=A(!1),{controlled:i,id:l,open:s,trigger:c,onClose:d,onOpen:u,onShow:p,onHide:f,onBeforeShow:h,onBeforeHide:b}=Ie(hc,void 0),m=C(()=>e.persistent);$t(()=>{a.value=!0});const g=C(()=>_(m)?!0:_(s)),v=C(()=>e.disabled?!1:_(s)),y=C(()=>{var F;return(F=e.style)!=null?F:{}}),T=C(()=>!_(s));n8(d);const x=()=>{f()},k=()=>{if(_(i))return!0},$=Ot(k,()=>{e.enterable&&_(c)==="hover"&&u()}),z=Ot(k,()=>{_(c)==="hover"&&d()}),P=()=>{var F,V;(V=(F=t.value)==null?void 0:F.updatePopper)==null||V.call(F),h==null||h()},O=()=>{b==null||b()},D=()=>{p()};let L;return ge(()=>_(s),F=>{F?L=Cs(C(()=>{var V;return(V=t.value)==null?void 0:V.popperContentRef}),()=>{if(_(i))return;_(c)!=="hover"&&d()}):L==null||L()},{flush:"post"}),{ariaHidden:T,entering:o,leaving:r,id:l,intermediateOpen:n,contentStyle:y,contentRef:t,destroyed:a,shouldRender:g,shouldShow:v,open:s,onAfterShow:D,onBeforeEnter:P,onBeforeLeave:O,onContentEnter:$,onContentLeave:z,onTransitionLeave:x}}});function WN(e,t,n,o,r,a){const i=le("el-visually-hidden"),l=le("el-popper-content");return w(),Q(el,{disabled:!e.teleported,to:e.appendTo},[U(qt,{name:e.transition,onAfterLeave:e.onTransitionLeave,onBeforeEnter:e.onBeforeEnter,onAfterEnter:e.onAfterShow,onBeforeLeave:e.onBeforeLeave},{default:K(()=>[e.shouldRender?Ue((w(),Q(l,St({key:0,ref:"contentRef"},e.$attrs,{"aria-hidden":e.ariaHidden,"boundaries-padding":e.boundariesPadding,"fallback-placements":e.fallbackPlacements,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,placement:e.placement,"popper-options":e.popperOptions,strategy:e.strategy,effect:e.effect,enterable:e.enterable,pure:e.pure,"popper-class":e.popperClass,"popper-style":[e.popperStyle,e.contentStyle],"reference-el":e.referenceEl,visible:e.shouldShow,"z-index":e.zIndex,onMouseenter:e.onContentEnter,onMouseleave:e.onContentLeave}),{default:K(()=>[G(" Workaround bug #6378 "),e.destroyed?G("v-if",!0):(w(),I(Fe,{key:0},[ue(e.$slots,"default"),U(i,{id:e.id,role:"tooltip"},{default:K(()=>[it(ve(e.ariaLabel),1)]),_:1},8,["id"])],64))]),_:3},16,["aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","visible","z-index","onMouseenter","onMouseleave"])),[[ft,e.shouldShow]]):G("v-if",!0)]),_:3},8,["name","onAfterLeave","onBeforeEnter","onAfterEnter","onBeforeLeave"])],8,["disabled","to"])}var UN=_e(KN,[["render",WN],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const YN=(e,t)=>Ye(e)?e.includes(t):e===t,ea=(e,t,n)=>o=>{YN(_(e),t)&&n(o)},GN=ee({name:"ElTooltipTrigger",components:{ElPopperTrigger:SI},props:Ki,setup(e){const t=ke("tooltip"),{controlled:n,id:o,open:r,onOpen:a,onClose:i,onToggle:l}=Ie(hc,void 0),s=A(null),c=()=>{if(_(n)||e.disabled)return!0},d=Yt(e,"trigger"),u=Ot(c,ea(d,"hover",a)),p=Ot(c,ea(d,"hover",i)),f=Ot(c,ea(d,"click",v=>{v.button===0&&l(v)})),h=Ot(c,ea(d,"focus",a)),b=Ot(c,ea(d,"focus",i)),m=Ot(c,ea(d,"contextmenu",v=>{v.preventDefault(),l(v)})),g=Ot(c,v=>{const{code:y}=v;(y===Pe.enter||y===Pe.space)&&l(v)});return{onBlur:b,onContextMenu:m,onFocus:h,onMouseenter:u,onMouseleave:p,onClick:f,onKeydown:g,open:r,id:o,triggerRef:s,ns:t}}});function XN(e,t,n,o,r,a){const i=le("el-popper-trigger");return w(),Q(i,{id:e.id,"virtual-ref":e.virtualRef,open:e.open,"virtual-triggering":e.virtualTriggering,class:S(e.ns.e("trigger")),onBlur:e.onBlur,onClick:e.onClick,onContextmenu:e.onContextMenu,onFocus:e.onFocus,onMouseenter:e.onMouseenter,onMouseleave:e.onMouseleave,onKeydown:e.onKeydown},{default:K(()=>[ue(e.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"])}var ZN=_e(GN,[["render",XN],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const{useModelToggleProps:JN,useModelToggle:QN,useModelToggleEmits:eM}=Xz("visible"),tM=ee({name:"ElTooltip",components:{ElPopper:Gy,ElPopperArrow:wI,ElTooltipContent:UN,ElTooltipTrigger:ZN},props:he(he(he(he(he({},JN),tn),Ki),Fy),qN),emits:[...eM,"before-show","before-hide","show","hide"],setup(e,{emit:t}){r8();const n=C(()=>(Cn(e.openDelay),e.openDelay||e.showAfter)),o=C(()=>(Cn(e.visibleArrow),on(e.visibleArrow)?e.visibleArrow:e.showArrow)),r=fp(),a=A(null),i=()=>{var f;const h=_(a);h&&((f=h.popperInstanceRef)==null||f.update())},l=A(!1),{show:s,hide:c}=QN({indicator:l}),{onOpen:d,onClose:u}=i8({showAfter:n,hideAfter:Yt(e,"hideAfter"),open:s,close:c}),p=C(()=>on(e.visible));return ot(hc,{controlled:p,id:r,open:Zi(l),trigger:Yt(e,"trigger"),onOpen:d,onClose:u,onToggle:()=>{_(l)?u():d()},onShow:()=>{t("show")},onHide:()=>{t("hide")},onBeforeShow:()=>{t("before-show")},onBeforeHide:()=>{t("before-hide")},updatePopper:i}),ge(()=>e.disabled,f=>{f&&l.value&&(l.value=!1)}),{compatShowAfter:n,compatShowArrow:o,popperRef:a,open:l,hide:c,updatePopper:i,onOpen:d,onClose:u}}}),nM=["innerHTML"],oM={key:1};function rM(e,t,n,o,r,a){const i=le("el-tooltip-trigger"),l=le("el-popper-arrow"),s=le("el-tooltip-content"),c=le("el-popper");return w(),Q(c,{ref:"popperRef"},{default:K(()=>[U(i,{disabled:e.disabled,trigger:e.trigger,"virtual-ref":e.virtualRef,"virtual-triggering":e.virtualTriggering},{default:K(()=>[e.$slots.default?ue(e.$slots,"default",{key:0}):G("v-if",!0)]),_:3},8,["disabled","trigger","virtual-ref","virtual-triggering"]),U(s,{"aria-label":e.ariaLabel,"boundaries-padding":e.boundariesPadding,content:e.content,disabled:e.disabled,effect:e.effect,enterable:e.enterable,"fallback-placements":e.fallbackPlacements,"hide-after":e.hideAfter,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,persistent:e.persistent,"popper-class":e.popperClass,"popper-style":e.popperStyle,placement:e.placement,"popper-options":e.popperOptions,pure:e.pure,"raw-content":e.rawContent,"reference-el":e.referenceEl,"show-after":e.compatShowAfter,strategy:e.strategy,teleported:e.teleported,transition:e.transition,"z-index":e.zIndex,"append-to":e.appendTo},{default:K(()=>[ue(e.$slots,"content",{},()=>[e.rawContent?(w(),I("span",{key:0,innerHTML:e.content},null,8,nM)):(w(),I("span",oM,ve(e.content),1))]),e.compatShowArrow?(w(),Q(l,{key:0,"arrow-offset":e.arrowOffset},null,8,["arrow-offset"])):G("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","show-after","strategy","teleported","transition","z-index","append-to"])]),_:3},512)}var aM=_e(tM,[["render",rM],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);const vn=rt(aM),iM=Le({valueKey:{type:String,default:"value"},modelValue:{type:[String,Number],default:""},debounce:{type:Number,default:300},placement:{type:Te(String),values:["top","top-start","top-end","bottom","bottom-start","bottom-end"],default:"bottom-start"},fetchSuggestions:{type:Te([Function,Array]),default:wt},popperClass:{type:String,default:""},triggerOnFocus:{type:Boolean,default:!0},selectWhenUnmatched:{type:Boolean,default:!1},hideLoading:{type:Boolean,default:!1},popperAppendToBody:{type:Boolean,default:void 0},teleported:tn.teleported,highlightFirstItem:{type:Boolean,default:!1}}),lM={[tt]:e=>Qe(e),input:e=>Qe(e),change:e=>Qe(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,select:e=>ut(e)},sM=["aria-expanded","aria-owns"],cM={key:0},dM=["id","aria-selected","onClick"],uM={name:"ElAutocomplete",inheritAttrs:!1},pM=ee(ze(he({},uM),{props:iM,emits:lM,setup(e,{expose:t,emit:n}){const o=e,r="ElAutocomplete",a=ke("autocomplete"),{compatTeleported:i}=Wa(r,"popperAppendToBody");let l=!1;const s=dp(),c=Rb(),d=A([]),u=A(-1),p=A(""),f=A(!1),h=A(!1),b=A(!1),m=A(),g=A(),v=A(),y=A(),T=C(()=>a.b(String(al()))),x=C(()=>c.style),k=C(()=>(Ye(d.value)&&d.value.length>0||b.value)&&f.value),$=C(()=>!o.hideLoading&&b.value),z=()=>{je(()=>{k.value&&(p.value=`${m.value.$el.offsetWidth}px`)})},O=bn(J=>{if(h.value)return;b.value=!0;const Z=se=>{b.value=!1,!h.value&&(Ye(se)?(d.value=se,u.value=o.highlightFirstItem?0:-1):Wt(r,"autocomplete suggestions must be an array"))};if(Ye(o.fetchSuggestions))Z(o.fetchSuggestions);else{const se=o.fetchSuggestions(J,Z);Ye(se)?Z(se):Vr(se)&&se.then(Z)}},o.debounce),D=J=>{const Z=Boolean(J);if(n("input",J),n(tt,J),h.value=!1,f.value||(f.value=l&&Z),!o.triggerOnFocus&&!J){h.value=!0,d.value=[];return}l&&Z&&(l=!1),O(J)},L=J=>{n("change",J)},F=J=>{f.value=!0,n("focus",J),o.triggerOnFocus&&O(String(o.modelValue))},V=J=>{n("blur",J)},q=()=>{f.value=!1,l=!0,n(tt,""),n("clear")},R=()=>{k.value&&u.value>=0&&u.value<d.value.length?W(d.value[u.value]):o.selectWhenUnmatched&&(n("select",{value:o.modelValue}),je(()=>{d.value=[],u.value=-1}))},E=()=>{f.value=!1},N=()=>{var J;(J=m.value)==null||J.focus()},W=J=>{n("input",J[o.valueKey]),n(tt,J[o.valueKey]),n("select",J),je(()=>{d.value=[],u.value=-1})},Y=J=>{if(!k.value||b.value)return;if(J<0){u.value=-1;return}J>=d.value.length&&(J=d.value.length-1);const Z=g.value.querySelector(`.${a.be("suggestion","wrap")}`),Se=Z.querySelectorAll(`.${a.be("suggestion","list")} li`)[J],oe=Z.scrollTop,{offsetTop:H,scrollHeight:ne}=Se;H+ne>oe+Z.clientHeight&&(Z.scrollTop+=ne),H<oe&&(Z.scrollTop-=ne),u.value=J,m.value.ref.setAttribute("aria-activedescendant",`${T.value}-item-${u.value}`)};return Cs(y,E),et(()=>{m.value.ref.setAttribute("role","textbox"),m.value.ref.setAttribute("aria-autocomplete","list"),m.value.ref.setAttribute("aria-controls","id"),m.value.ref.setAttribute("aria-activedescendant",`${T.value}-item-${u.value}`)}),t({highlightedIndex:u,activated:f,loading:b,inputRef:m,popperRef:v,suggestions:d,handleSelect:W,handleKeyEnter:R,focus:N,close:E,highlight:Y}),(J,Z)=>(w(),Q(_(vn),{ref_key:"popperRef",ref:v,visible:_(k),"onUpdate:visible":Z[2]||(Z[2]=se=>Vt(k)?k.value=se:null),placement:J.placement,"fallback-placements":["bottom-start","top-start"],"popper-class":[_(a).e("popper"),J.popperClass],teleported:_(i),"gpu-acceleration":!1,pure:"","manual-mode":"",effect:"light",trigger:"click",transition:`${_(a).namespace.value}-zoom-in-top`,persistent:"",onBeforeShow:z},{content:K(()=>[M("div",{ref_key:"regionRef",ref:g,class:S([_(a).b("suggestion"),_(a).is("loading",_($))]),style:Oe({minWidth:p.value,outline:"none"}),role:"region"},[U(_(qo),{id:_(T),tag:"ul","wrap-class":_(a).be("suggestion","wrap"),"view-class":_(a).be("suggestion","list"),role:"listbox"},{default:K(()=>[_($)?(w(),I("li",cM,[U(_(qe),{class:S(_(a).is("loading"))},{default:K(()=>[U(_(hr))]),_:1},8,["class"])])):(w(!0),I(Fe,{key:1},ct(d.value,(se,Se)=>(w(),I("li",{id:`${_(T)}-item-${Se}`,key:Se,class:S({highlighted:u.value===Se}),role:"option","aria-selected":u.value===Se,onClick:oe=>W(se)},[ue(J.$slots,"default",{item:se},()=>[it(ve(se[J.valueKey]),1)])],10,dM))),128))]),_:3},8,["id","wrap-class","view-class"])],6)]),default:K(()=>[M("div",{ref_key:"listboxRef",ref:y,class:S([_(a).b(),J.$attrs.class]),style:Oe(_(x)),role:"combobox","aria-haspopup":"listbox","aria-expanded":_(k),"aria-owns":_(T)},[U(_(Gn),St({ref_key:"inputRef",ref:m},_(s),{"model-value":J.modelValue,onInput:D,onChange:L,onFocus:F,onBlur:V,onClear:q,onKeydown:[Z[0]||(Z[0]=st(He(se=>Y(u.value-1),["prevent"]),["up"])),Z[1]||(Z[1]=st(He(se=>Y(u.value+1),["prevent"]),["down"])),st(R,["enter"]),st(E,["tab"])]}),dr({_:2},[J.$slots.prepend?{name:"prepend",fn:K(()=>[ue(J.$slots,"prepend")])}:void 0,J.$slots.append?{name:"append",fn:K(()=>[ue(J.$slots,"append")])}:void 0,J.$slots.prefix?{name:"prefix",fn:K(()=>[ue(J.$slots,"prefix")])}:void 0,J.$slots.suffix?{name:"suffix",fn:K(()=>[ue(J.$slots,"suffix")])}:void 0]),1040,["model-value","onKeydown"])],14,sM)]),_:3},8,["visible","placement","popper-class","teleported","transition"]))}}));var fM=_e(pM,[["__file","/home/runner/work/element-plus/element-plus/packages/components/autocomplete/src/autocomplete.vue"]]);const hM=rt(fM),mM=Le({size:{type:[Number,String],values:wo,default:"",validator:e=>typeof e=="number"},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:an},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:Te(String),default:"cover"}}),gM={error:e=>e instanceof Event},bM=["src","alt","srcset"],vM={name:"ElAvatar"},yM=ee(ze(he({},vM),{props:mM,emits:gM,setup(e,{emit:t}){const n=e,o=ke("avatar"),r=A(!1),a=C(()=>{const{size:c,icon:d,shape:u}=n,p=[o.b()];return Qe(c)&&p.push(o.m(c)),d&&p.push(o.m("icon")),u&&p.push(o.m(u)),p}),i=C(()=>{const{size:c}=n;return mt(c)?{"--el-avatar-size":io(c)}:void 0}),l=C(()=>({objectFit:n.fit}));ge(()=>n.src,()=>r.value=!1);function s(c){r.value=!0,t("error",c)}return(c,d)=>(w(),I("span",{class:S(_(a)),style:Oe(_(i))},[(c.src||c.srcSet)&&!r.value?(w(),I("img",{key:0,src:c.src,alt:c.alt,srcset:c.srcSet,style:Oe(_(l)),onError:s},null,44,bM)):c.icon?(w(),Q(_(qe),{key:1},{default:K(()=>[(w(),Q(pt(c.icon)))]),_:1})):ue(c.$slots,"default",{key:2})],6))}}));var _M=_e(yM,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const wM=rt(_M),xM={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},kM={click:e=>e instanceof MouseEvent},TM=["onClick"],CM={name:"ElBacktop"},SM=ee(ze(he({},CM),{props:xM,emits:kM,setup(e,{emit:t}){const n=e,o="ElBacktop",r=ke("backtop"),a=Kt(),i=Kt(),l=A(!1),s=C(()=>({right:`${n.right}px`,bottom:`${n.bottom}px`})),c=()=>{if(!a.value)return;const f=Date.now(),h=a.value.scrollTop,b=()=>{if(!a.value)return;const m=(Date.now()-f)/500;m<1?(a.value.scrollTop=h*(1-Dz(m)),requestAnimationFrame(b)):a.value.scrollTop=0};requestAnimationFrame(b)},d=()=>{a.value&&(l.value=a.value.scrollTop>=n.visibilityHeight)},u=f=>{c(),t("click",f)},p=Kv(d,300);return et(()=>{var f;i.value=document,a.value=document.documentElement,n.target&&(a.value=(f=document.querySelector(n.target))!=null?f:void 0,a.value||Wt(o,`target is not existed: ${n.target}`),i.value=a.value),Ht(i,"scroll",p)}),(f,h)=>(w(),Q(qt,{name:`${_(r).namespace.value}-fade-in`},{default:K(()=>[l.value?(w(),I("div",{key:0,style:Oe(_(s)),class:S(_(r).b()),onClick:He(u,["stop"])},[ue(f.$slots,"default",{},()=>[U(_(qe),{class:S(_(r).e("icon"))},{default:K(()=>[U(_(cA))]),_:1},8,["class"])])],14,TM)):G("v-if",!0)]),_:3},8,["name"]))}}));var $M=_e(SM,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]);const AM=rt($M),EM=Le({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),zM=["textContent"],IM={name:"ElBadge"},NM=ee(ze(he({},IM),{props:EM,setup(e,{expose:t}){const n=e,o=ke("badge"),r=C(()=>n.isDot?"":mt(n.value)&&mt(n.max)?n.max<n.value?`${n.max}+`:`${n.value}`:`${n.value}`);return t({content:r}),(a,i)=>(w(),I("div",{class:S(_(o).b())},[ue(a.$slots,"default"),U(qt,{name:`${_(o).namespace.value}-zoom-in-center`},{default:K(()=>[Ue(M("sup",{class:S([_(o).e("content"),_(o).em("content",a.type),_(o).is("fixed",!!a.$slots.default),_(o).is("dot",a.isDot)]),textContent:ve(_(r))},null,10,zM),[[ft,!a.hidden&&(_(r)||_(r)==="0"||a.isDot)]])]),_:1},8,["name"])],2))}}));var MM=_e(NM,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Zy=rt(MM),RM=Le({separator:{type:String,default:"/"},separatorIcon:{type:an,default:""}}),PM={name:"ElBreadcrumb"},OM=ee(ze(he({},PM),{props:RM,setup(e){const t=e,n=ke("breadcrumb"),o=A();return ot(iy,t),et(()=>{const r=o.value.querySelectorAll(`.${n.e("item")}`);r.length&&r[r.length-1].setAttribute("aria-current","page")}),(r,a)=>(w(),I("div",{ref_key:"breadcrumb",ref:o,class:S(_(n).b()),"aria-label":"Breadcrumb",role:"navigation"},[ue(r.$slots,"default")],2))}}));var FM=_e(OM,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const DM=Le({to:{type:Te([String,Object]),default:""},replace:{type:Boolean,default:!1}}),LM={name:"ElBreadcrumbItem"},VM=ee(ze(he({},LM),{props:DM,setup(e){const t=e,o=nt().appContext.config.globalProperties.$router,r=Ie(iy,{}),a=ke("breadcrumb"),{separator:i,separatorIcon:l}=r,s=A(),c=()=>{!t.to||!o||(t.replace?o.replace(t.to):o.push(t.to))};return(d,u)=>(w(),I("span",{class:S(_(a).e("item"))},[M("span",{ref_key:"link",ref:s,class:S([_(a).e("inner"),_(a).is("link",!!d.to)]),role:"link",onClick:c},[ue(d.$slots,"default")],2),_(l)?(w(),Q(_(qe),{key:0,class:S(_(a).e("separator"))},{default:K(()=>[(w(),Q(pt(_(l))))]),_:1},8,["class"])):(w(),I("span",{key:1,class:S(_(a).e("separator")),role:"presentation"},ve(_(i)),3))],2))}}));var Jy=_e(VM,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const BM=rt(FM,{BreadcrumbItem:Jy}),jM=Dt(Jy),Od=["default","primary","success","warning","info","danger","text",""],HM=["button","submit","reset"],Fd=Le({size:dc,disabled:Boolean,type:{type:String,values:Od,default:""},icon:{type:an,default:""},nativeType:{type:String,values:HM,default:"button"},loading:Boolean,loadingIcon:{type:an,default:()=>hr},plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),qM={click:e=>e instanceof MouseEvent};function rn(e,t){KM(e)&&(e="100%");var n=WM(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Sl(e){return Math.min(1,Math.max(0,e))}function KM(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function WM(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Qy(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function $l(e){return e<=1?"".concat(Number(e)*100,"%"):e}function Er(e){return e.length===1?"0"+e:String(e)}function UM(e,t,n){return{r:rn(e,255)*255,g:rn(t,255)*255,b:rn(n,255)*255}}function wm(e,t,n){e=rn(e,255),t=rn(t,255),n=rn(n,255);var o=Math.max(e,t,n),r=Math.min(e,t,n),a=0,i=0,l=(o+r)/2;if(o===r)i=0,a=0;else{var s=o-r;switch(i=l>.5?s/(2-o-r):s/(o+r),o){case e:a=(t-n)/s+(t<n?6:0);break;case t:a=(n-e)/s+2;break;case n:a=(e-t)/s+4;break}a/=6}return{h:a,s:i,l}}function Oc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function YM(e,t,n){var o,r,a;if(e=rn(e,360),t=rn(t,100),n=rn(n,100),t===0)r=n,a=n,o=n;else{var i=n<.5?n*(1+t):n+t-n*t,l=2*n-i;o=Oc(l,i,e+1/3),r=Oc(l,i,e),a=Oc(l,i,e-1/3)}return{r:o*255,g:r*255,b:a*255}}function xm(e,t,n){e=rn(e,255),t=rn(t,255),n=rn(n,255);var o=Math.max(e,t,n),r=Math.min(e,t,n),a=0,i=o,l=o-r,s=o===0?0:l/o;if(o===r)a=0;else{switch(o){case e:a=(t-n)/l+(t<n?6:0);break;case t:a=(n-e)/l+2;break;case n:a=(e-t)/l+4;break}a/=6}return{h:a,s,v:i}}function GM(e,t,n){e=rn(e,360)*6,t=rn(t,100),n=rn(n,100);var o=Math.floor(e),r=e-o,a=n*(1-t),i=n*(1-r*t),l=n*(1-(1-r)*t),s=o%6,c=[n,i,a,a,l,n][s],d=[l,n,n,i,a,a][s],u=[a,a,l,n,n,i][s];return{r:c*255,g:d*255,b:u*255}}function km(e,t,n,o){var r=[Er(Math.round(e).toString(16)),Er(Math.round(t).toString(16)),Er(Math.round(n).toString(16))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function XM(e,t,n,o,r){var a=[Er(Math.round(e).toString(16)),Er(Math.round(t).toString(16)),Er(Math.round(n).toString(16)),Er(ZM(o))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function ZM(e){return Math.round(parseFloat(e)*255).toString(16)}function Tm(e){return _n(e)/255}function _n(e){return parseInt(e,16)}function JM(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var Dd={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function QM(e){var t={r:0,g:0,b:0},n=1,o=null,r=null,a=null,i=!1,l=!1;return typeof e=="string"&&(e=nR(e)),typeof e=="object"&&(To(e.r)&&To(e.g)&&To(e.b)?(t=UM(e.r,e.g,e.b),i=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):To(e.h)&&To(e.s)&&To(e.v)?(o=$l(e.s),r=$l(e.v),t=GM(e.h,o,r),i=!0,l="hsv"):To(e.h)&&To(e.s)&&To(e.l)&&(o=$l(e.s),a=$l(e.l),t=YM(e.h,o,a),i=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=Qy(n),{ok:i,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var eR="[-\\+]?\\d+%?",tR="[-\\+]?\\d*\\.\\d+%?",ar="(?:".concat(tR,")|(?:").concat(eR,")"),Fc="[\\s|\\(]+(".concat(ar,")[,|\\s]+(").concat(ar,")[,|\\s]+(").concat(ar,")\\s*\\)?"),Dc="[\\s|\\(]+(".concat(ar,")[,|\\s]+(").concat(ar,")[,|\\s]+(").concat(ar,")[,|\\s]+(").concat(ar,")\\s*\\)?"),Zn={CSS_UNIT:new RegExp(ar),rgb:new RegExp("rgb"+Fc),rgba:new RegExp("rgba"+Dc),hsl:new RegExp("hsl"+Fc),hsla:new RegExp("hsla"+Dc),hsv:new RegExp("hsv"+Fc),hsva:new RegExp("hsva"+Dc),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function nR(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(Dd[e])e=Dd[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=Zn.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=Zn.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=Zn.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=Zn.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=Zn.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=Zn.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=Zn.hex8.exec(e),n?{r:_n(n[1]),g:_n(n[2]),b:_n(n[3]),a:Tm(n[4]),format:t?"name":"hex8"}:(n=Zn.hex6.exec(e),n?{r:_n(n[1]),g:_n(n[2]),b:_n(n[3]),format:t?"name":"hex"}:(n=Zn.hex4.exec(e),n?{r:_n(n[1]+n[1]),g:_n(n[2]+n[2]),b:_n(n[3]+n[3]),a:Tm(n[4]+n[4]),format:t?"name":"hex8"}:(n=Zn.hex3.exec(e),n?{r:_n(n[1]+n[1]),g:_n(n[2]+n[2]),b:_n(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function To(e){return Boolean(Zn.CSS_UNIT.exec(String(e)))}var e0=function(){function e(t,n){t===void 0&&(t=""),n===void 0&&(n={});var o;if(t instanceof e)return t;typeof t=="number"&&(t=JM(t)),this.originalInput=t;var r=QM(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(o=n.format)!==null&&o!==void 0?o:r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),n,o,r,a=t.r/255,i=t.g/255,l=t.b/255;return a<=.03928?n=a/12.92:n=Math.pow((a+.055)/1.055,2.4),i<=.03928?o=i/12.92:o=Math.pow((i+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*n+.7152*o+.0722*r},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=Qy(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.toHsv=function(){var t=xm(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=xm(this.r,this.g,this.b),n=Math.round(t.h*360),o=Math.round(t.s*100),r=Math.round(t.v*100);return this.a===1?"hsv(".concat(n,", ").concat(o,"%, ").concat(r,"%)"):"hsva(".concat(n,", ").concat(o,"%, ").concat(r,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=wm(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=wm(this.r,this.g,this.b),n=Math.round(t.h*360),o=Math.round(t.s*100),r=Math.round(t.l*100);return this.a===1?"hsl(".concat(n,", ").concat(o,"%, ").concat(r,"%)"):"hsla(".concat(n,", ").concat(o,"%, ").concat(r,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),km(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),XM(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),o=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(n,", ").concat(o,")"):"rgba(".concat(t,", ").concat(n,", ").concat(o,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(n){return"".concat(Math.round(rn(n,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(n){return Math.round(rn(n,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+km(this.r,this.g,this.b,!1),n=0,o=Object.entries(Dd);n<o.length;n++){var r=o[n],a=r[0],i=r[1];if(t===i)return a}return!1},e.prototype.toString=function(t){var n=Boolean(t);t=t!=null?t:this.format;var o=!1,r=this.a<1&&this.a>=0,a=!n&&r&&(t.startsWith("hex")||t==="name");return a?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(o=this.toRgbString()),t==="prgb"&&(o=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(o=this.toHexString()),t==="hex3"&&(o=this.toHexString(!0)),t==="hex4"&&(o=this.toHex8String(!0)),t==="hex8"&&(o=this.toHex8String()),t==="name"&&(o=this.toName()),t==="hsl"&&(o=this.toHslString()),t==="hsv"&&(o=this.toHsvString()),o||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=Sl(n.l),new e(n)},e.prototype.brighten=function(t){t===void 0&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)},e.prototype.darken=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=Sl(n.l),new e(n)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=Sl(n.s),new e(n)},e.prototype.saturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=Sl(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),o=(n.h+t)%360;return n.h=o<0?360+o:o,new e(n)},e.prototype.mix=function(t,n){n===void 0&&(n=50);var o=this.toRgb(),r=new e(t).toRgb(),a=n/100,i={r:(r.r-o.r)*a+o.r,g:(r.g-o.g)*a+o.g,b:(r.b-o.b)*a+o.b,a:(r.a-o.a)*a+o.a};return new e(i)},e.prototype.analogous=function(t,n){t===void 0&&(t=6),n===void 0&&(n=30);var o=this.toHsl(),r=360/n,a=[this];for(o.h=(o.h-(r*t>>1)+720)%360;--t;)o.h=(o.h+r)%360,a.push(new e(o));return a},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var n=this.toHsv(),o=n.h,r=n.s,a=n.v,i=[],l=1/t;t--;)i.push(new e({h:o,s:r,v:a})),a=(a+l)%1;return i},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),o=new e(t).toRgb();return new e({r:o.r+(n.r-o.r)*n.a,g:o.g+(n.g-o.g)*n.a,b:o.b+(n.b-o.b)*n.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),o=n.h,r=[this],a=360/t,i=1;i<t;i++)r.push(new e({h:(o+i*a)%360,s:n.s,l:n.l}));return r},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}();function Xo(e,t=20){return e.mix("#141414",t).toString()}function oR(e){const t=Zr();return C(()=>{let n={};const o=e.color;if(o){const r=new e0(o),a=e.dark?r.tint(20).toString():Xo(r,20);if(e.plain)n={"--el-button-bg-color":e.dark?Xo(r,90):r.tint(90).toString(),"--el-button-text-color":o,"--el-button-border-color":e.dark?Xo(r,50):r.tint(50).toString(),"--el-button-hover-text-color":"var(--el-color-white)","--el-button-hover-bg-color":o,"--el-button-hover-border-color":o,"--el-button-active-bg-color":a,"--el-button-active-text-color":"var(--el-color-white)","--el-button-active-border-color":a},t.value&&(n["--el-button-disabled-bg-color"]=e.dark?Xo(r,90):r.tint(90).toString(),n["--el-button-disabled-text-color"]=e.dark?Xo(r,50):r.tint(50).toString(),n["--el-button-disabled-border-color"]=e.dark?Xo(r,80):r.tint(80).toString());else{const i=e.dark?Xo(r,30):r.tint(30).toString(),l=r.isDark()?"var(--el-color-white)":"var(--el-color-black)";if(n={"--el-button-bg-color":o,"--el-button-text-color":l,"--el-button-border-color":o,"--el-button-hover-bg-color":i,"--el-button-hover-text-color":l,"--el-button-hover-border-color":i,"--el-button-active-bg-color":a,"--el-button-active-border-color":a},t.value){const s=e.dark?Xo(r,50):r.tint(50).toString();n["--el-button-disabled-bg-color"]=s,n["--el-button-disabled-text-color"]=e.dark?"rgba(255, 255, 255, 0.5)":"var(--el-color-white)",n["--el-button-disabled-border-color"]=s}}}return n})}const rR=["disabled","autofocus","type"],aR={name:"ElButton"},iR=ee(ze(he({},aR),{props:Fd,emits:qM,setup(e,{expose:t,emit:n}){const o=e,r=nl(),a=Ie(ly,void 0),i=qa("button"),l=ke("button"),{form:s}=Ka(),c=Ut(C(()=>a==null?void 0:a.size)),d=Zr(),u=A(),p=C(()=>o.type||(a==null?void 0:a.type)||""),f=C(()=>{var g,v,y;return(y=(v=o.autoInsertSpace)!=null?v:(g=i.value)==null?void 0:g.autoInsertSpace)!=null?y:!1}),h=C(()=>{var g;const v=(g=r.default)==null?void 0:g.call(r);if(f.value&&(v==null?void 0:v.length)===1){const y=v[0];if((y==null?void 0:y.type)===tl){const T=y.children;return/^\p{Unified_Ideograph}{2}$/u.test(T.trim())}}return!1}),b=oR(o),m=g=>{o.nativeType==="reset"&&(s==null||s.resetFields()),n("click",g)};return t({ref:u,size:c,type:p,disabled:d,shouldAddSpace:h}),(g,v)=>(w(),I("button",{ref_key:"_ref",ref:u,class:S([_(l).b(),_(l).m(_(p)),_(l).m(_(c)),_(l).is("disabled",_(d)),_(l).is("loading",g.loading),_(l).is("plain",g.plain),_(l).is("round",g.round),_(l).is("circle",g.circle)]),disabled:_(d)||g.loading,autofocus:g.autofocus,type:g.nativeType,style:Oe(_(b)),onClick:m},[g.loading?(w(),I(Fe,{key:0},[g.$slots.loading?ue(g.$slots,"loading",{key:0}):(w(),Q(_(qe),{key:1,class:S(_(l).is("loading"))},{default:K(()=>[(w(),Q(pt(g.loadingIcon)))]),_:1},8,["class"]))],2112)):g.icon||g.$slots.icon?(w(),Q(_(qe),{key:1},{default:K(()=>[g.icon?(w(),Q(pt(g.icon),{key:0})):ue(g.$slots,"icon",{key:1})]),_:3})):G("v-if",!0),g.$slots.default?(w(),I("span",{key:2,class:S({[_(l).em("text","expand")]:_(h)})},[ue(g.$slots,"default")],2)):G("v-if",!0)],14,rR))}}));var lR=_e(iR,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const sR={size:Fd.size,type:Fd.type},cR={name:"ElButtonGroup"},dR=ee(ze(he({},cR),{props:sR,setup(e){const t=e;ot(ly,vt({size:Yt(t,"size"),type:Yt(t,"type")}));const n=ke("button");return(o,r)=>(w(),I("div",{class:S(`${_(n).b("group")}`)},[ue(o.$slots,"default")],2))}}));var t0=_e(dR,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const Vn=rt(lR,{ButtonGroup:t0}),n0=Dt(t0);var Ko=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},o0={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(Ko,function(){var n=1e3,o=6e4,r=36e5,a="millisecond",i="second",l="minute",s="hour",c="day",d="week",u="month",p="quarter",f="year",h="date",b="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(F,V,q){var R=String(F);return!R||R.length>=V?F:""+Array(V+1-R.length).join(q)+F},T={s:y,z:function(F){var V=-F.utcOffset(),q=Math.abs(V),R=Math.floor(q/60),E=q%60;return(V<=0?"+":"-")+y(R,2,"0")+":"+y(E,2,"0")},m:function F(V,q){if(V.date()<q.date())return-F(q,V);var R=12*(q.year()-V.year())+(q.month()-V.month()),E=V.clone().add(R,u),N=q-E<0,W=V.clone().add(R+(N?-1:1),u);return+(-(R+(q-E)/(N?E-W:W-E))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:u,y:f,w:d,d:c,D:h,h:s,m:l,s:i,ms:a,Q:p}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},x="en",k={};k[x]=v;var $=function(F){return F instanceof D},z=function F(V,q,R){var E;if(!V)return x;if(typeof V=="string"){var N=V.toLowerCase();k[N]&&(E=N),q&&(k[N]=q,E=N);var W=V.split("-");if(!E&&W.length>1)return F(W[0])}else{var Y=V.name;k[Y]=V,E=Y}return!R&&E&&(x=E),E||!R&&x},P=function(F,V){if($(F))return F.clone();var q=typeof V=="object"?V:{};return q.date=F,q.args=arguments,new D(q)},O=T;O.l=z,O.i=$,O.w=function(F,V){return P(F,{locale:V.$L,utc:V.$u,x:V.$x,$offset:V.$offset})};var D=function(){function F(q){this.$L=z(q.locale,null,!0),this.parse(q)}var V=F.prototype;return V.parse=function(q){this.$d=function(R){var E=R.date,N=R.utc;if(E===null)return new Date(NaN);if(O.u(E))return new Date;if(E instanceof Date)return new Date(E);if(typeof E=="string"&&!/Z$/i.test(E)){var W=E.match(m);if(W){var Y=W[2]-1||0,J=(W[7]||"0").substring(0,3);return N?new Date(Date.UTC(W[1],Y,W[3]||1,W[4]||0,W[5]||0,W[6]||0,J)):new Date(W[1],Y,W[3]||1,W[4]||0,W[5]||0,W[6]||0,J)}}return new Date(E)}(q),this.$x=q.x||{},this.init()},V.init=function(){var q=this.$d;this.$y=q.getFullYear(),this.$M=q.getMonth(),this.$D=q.getDate(),this.$W=q.getDay(),this.$H=q.getHours(),this.$m=q.getMinutes(),this.$s=q.getSeconds(),this.$ms=q.getMilliseconds()},V.$utils=function(){return O},V.isValid=function(){return this.$d.toString()!==b},V.isSame=function(q,R){var E=P(q);return this.startOf(R)<=E&&E<=this.endOf(R)},V.isAfter=function(q,R){return P(q)<this.startOf(R)},V.isBefore=function(q,R){return this.endOf(R)<P(q)},V.$g=function(q,R,E){return O.u(q)?this[R]:this.set(E,q)},V.unix=function(){return Math.floor(this.valueOf()/1e3)},V.valueOf=function(){return this.$d.getTime()},V.startOf=function(q,R){var E=this,N=!!O.u(R)||R,W=O.p(q),Y=function(ie,be){var $e=O.w(E.$u?Date.UTC(E.$y,be,ie):new Date(E.$y,be,ie),E);return N?$e:$e.endOf(c)},J=function(ie,be){return O.w(E.toDate()[ie].apply(E.toDate("s"),(N?[0,0,0,0]:[23,59,59,999]).slice(be)),E)},Z=this.$W,se=this.$M,Se=this.$D,oe="set"+(this.$u?"UTC":"");switch(W){case f:return N?Y(1,0):Y(31,11);case u:return N?Y(1,se):Y(0,se+1);case d:var H=this.$locale().weekStart||0,ne=(Z<H?Z+7:Z)-H;return Y(N?Se-ne:Se+(6-ne),se);case c:case h:return J(oe+"Hours",0);case s:return J(oe+"Minutes",1);case l:return J(oe+"Seconds",2);case i:return J(oe+"Milliseconds",3);default:return this.clone()}},V.endOf=function(q){return this.startOf(q,!1)},V.$set=function(q,R){var E,N=O.p(q),W="set"+(this.$u?"UTC":""),Y=(E={},E[c]=W+"Date",E[h]=W+"Date",E[u]=W+"Month",E[f]=W+"FullYear",E[s]=W+"Hours",E[l]=W+"Minutes",E[i]=W+"Seconds",E[a]=W+"Milliseconds",E)[N],J=N===c?this.$D+(R-this.$W):R;if(N===u||N===f){var Z=this.clone().set(h,1);Z.$d[Y](J),Z.init(),this.$d=Z.set(h,Math.min(this.$D,Z.daysInMonth())).$d}else Y&&this.$d[Y](J);return this.init(),this},V.set=function(q,R){return this.clone().$set(q,R)},V.get=function(q){return this[O.p(q)]()},V.add=function(q,R){var E,N=this;q=Number(q);var W=O.p(R),Y=function(se){var Se=P(N);return O.w(Se.date(Se.date()+Math.round(se*q)),N)};if(W===u)return this.set(u,this.$M+q);if(W===f)return this.set(f,this.$y+q);if(W===c)return Y(1);if(W===d)return Y(7);var J=(E={},E[l]=o,E[s]=r,E[i]=n,E)[W]||1,Z=this.$d.getTime()+q*J;return O.w(Z,this)},V.subtract=function(q,R){return this.add(-1*q,R)},V.format=function(q){var R=this,E=this.$locale();if(!this.isValid())return E.invalidDate||b;var N=q||"YYYY-MM-DDTHH:mm:ssZ",W=O.z(this),Y=this.$H,J=this.$m,Z=this.$M,se=E.weekdays,Se=E.months,oe=function(be,$e,Ne,Me){return be&&(be[$e]||be(R,N))||Ne[$e].slice(0,Me)},H=function(be){return O.s(Y%12||12,be,"0")},ne=E.meridiem||function(be,$e,Ne){var Me=be<12?"AM":"PM";return Ne?Me.toLowerCase():Me},ie={YY:String(this.$y).slice(-2),YYYY:this.$y,M:Z+1,MM:O.s(Z+1,2,"0"),MMM:oe(E.monthsShort,Z,Se,3),MMMM:oe(Se,Z),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:oe(E.weekdaysMin,this.$W,se,2),ddd:oe(E.weekdaysShort,this.$W,se,3),dddd:se[this.$W],H:String(Y),HH:O.s(Y,2,"0"),h:H(1),hh:H(2),a:ne(Y,J,!0),A:ne(Y,J,!1),m:String(J),mm:O.s(J,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:W};return N.replace(g,function(be,$e){return $e||ie[be]||W.replace(":","")})},V.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},V.diff=function(q,R,E){var N,W=O.p(R),Y=P(q),J=(Y.utcOffset()-this.utcOffset())*o,Z=this-Y,se=O.m(this,Y);return se=(N={},N[f]=se/12,N[u]=se,N[p]=se/3,N[d]=(Z-J)/6048e5,N[c]=(Z-J)/864e5,N[s]=Z/r,N[l]=Z/o,N[i]=Z/n,N)[W]||Z,E?se:O.a(se)},V.daysInMonth=function(){return this.endOf(u).$D},V.$locale=function(){return k[this.$L]},V.locale=function(q,R){if(!q)return this.$L;var E=this.clone(),N=z(q,R,!0);return N&&(E.$L=N),E},V.clone=function(){return O.w(this.$d,this)},V.toDate=function(){return new Date(this.valueOf())},V.toJSON=function(){return this.isValid()?this.toISOString():null},V.toISOString=function(){return this.$d.toISOString()},V.toString=function(){return this.$d.toUTCString()},F}(),L=D.prototype;return P.prototype=L,[["$ms",a],["$s",i],["$m",l],["$H",s],["$W",c],["$M",u],["$y",f],["$D",h]].forEach(function(F){L[F[1]]=function(V){return this.$g(V,F[0],F[1])}}),P.extend=function(F,V){return F.$i||(F(V,D,P),F.$i=!0),P},P.locale=z,P.isDayjs=$,P.unix=function(F){return P(1e3*F)},P.en=k[x],P.Ls=k,P.p={},P})})(o0);var Ge=o0.exports,r0={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(Ko,function(){return function(n,o,r){var a=o.prototype,i=function(u){return u&&(u.indexOf?u:u.s)},l=function(u,p,f,h,b){var m=u.name?u:u.$locale(),g=i(m[p]),v=i(m[f]),y=g||v.map(function(x){return x.slice(0,h)});if(!b)return y;var T=m.weekStart;return y.map(function(x,k){return y[(k+(T||0))%7]})},s=function(){return r.Ls[r.locale()]},c=function(u,p){return u.formats[p]||function(f){return f.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(h,b,m){return b||m.slice(1)})}(u.formats[p.toUpperCase()])},d=function(){var u=this;return{months:function(p){return p?p.format("MMMM"):l(u,"months")},monthsShort:function(p){return p?p.format("MMM"):l(u,"monthsShort","months",3)},firstDayOfWeek:function(){return u.$locale().weekStart||0},weekdays:function(p){return p?p.format("dddd"):l(u,"weekdays")},weekdaysMin:function(p){return p?p.format("dd"):l(u,"weekdaysMin","weekdays",2)},weekdaysShort:function(p){return p?p.format("ddd"):l(u,"weekdaysShort","weekdays",3)},longDateFormat:function(p){return c(u.$locale(),p)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};a.localeData=function(){return d.bind(this)()},r.localeData=function(){var u=s();return{firstDayOfWeek:function(){return u.weekStart||0},weekdays:function(){return r.weekdays()},weekdaysShort:function(){return r.weekdaysShort()},weekdaysMin:function(){return r.weekdaysMin()},months:function(){return r.months()},monthsShort:function(){return r.monthsShort()},longDateFormat:function(p){return c(u,p)},meridiem:u.meridiem,ordinal:u.ordinal}},r.months=function(){return l(s(),"months")},r.monthsShort=function(){return l(s(),"monthsShort","months",3)},r.weekdays=function(u){return l(s(),"weekdays",null,null,u)},r.weekdaysShort=function(u){return l(s(),"weekdaysShort","weekdays",3,u)},r.weekdaysMin=function(u){return l(s(),"weekdaysMin","weekdays",2,u)}}})})(r0);var a0=r0.exports,i0={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(Ko,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},o=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,a=/\d\d?/,i=/\d*[^\s\d-_:/()]+/,l={},s=function(b){return(b=+b)+(b>68?1900:2e3)},c=function(b){return function(m){this[b]=+m}},d=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(m){if(!m||m==="Z")return 0;var g=m.match(/([+-]|\d\d)/g),v=60*g[1]+(+g[2]||0);return v===0?0:g[0]==="+"?-v:v}(b)}],u=function(b){var m=l[b];return m&&(m.indexOf?m:m.s.concat(m.f))},p=function(b,m){var g,v=l.meridiem;if(v){for(var y=1;y<=24;y+=1)if(b.indexOf(v(y,0,m))>-1){g=y>12;break}}else g=b===(m?"pm":"PM");return g},f={A:[i,function(b){this.afternoon=p(b,!1)}],a:[i,function(b){this.afternoon=p(b,!0)}],S:[/\d/,function(b){this.milliseconds=100*+b}],SS:[r,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[a,c("seconds")],ss:[a,c("seconds")],m:[a,c("minutes")],mm:[a,c("minutes")],H:[a,c("hours")],h:[a,c("hours")],HH:[a,c("hours")],hh:[a,c("hours")],D:[a,c("day")],DD:[r,c("day")],Do:[i,function(b){var m=l.ordinal,g=b.match(/\d+/);if(this.day=g[0],m)for(var v=1;v<=31;v+=1)m(v).replace(/\[|\]/g,"")===b&&(this.day=v)}],M:[a,c("month")],MM:[r,c("month")],MMM:[i,function(b){var m=u("months"),g=(u("monthsShort")||m.map(function(v){return v.slice(0,3)})).indexOf(b)+1;if(g<1)throw new Error;this.month=g%12||g}],MMMM:[i,function(b){var m=u("months").indexOf(b)+1;if(m<1)throw new Error;this.month=m%12||m}],Y:[/[+-]?\d+/,c("year")],YY:[r,function(b){this.year=s(b)}],YYYY:[/\d{4}/,c("year")],Z:d,ZZ:d};function h(b){var m,g;m=b,g=l&&l.formats;for(var v=(b=m.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(P,O,D){var L=D&&D.toUpperCase();return O||g[D]||n[D]||g[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(F,V,q){return V||q.slice(1)})})).match(o),y=v.length,T=0;T<y;T+=1){var x=v[T],k=f[x],$=k&&k[0],z=k&&k[1];v[T]=z?{regex:$,parser:z}:x.replace(/^\[|\]$/g,"")}return function(P){for(var O={},D=0,L=0;D<y;D+=1){var F=v[D];if(typeof F=="string")L+=F.length;else{var V=F.regex,q=F.parser,R=P.slice(L),E=V.exec(R)[0];q.call(O,E),P=P.replace(E,"")}}return function(N){var W=N.afternoon;if(W!==void 0){var Y=N.hours;W?Y<12&&(N.hours+=12):Y===12&&(N.hours=0),delete N.afternoon}}(O),O}}return function(b,m,g){g.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(s=b.parseTwoDigitYear);var v=m.prototype,y=v.parse;v.parse=function(T){var x=T.date,k=T.utc,$=T.args;this.$u=k;var z=$[1];if(typeof z=="string"){var P=$[2]===!0,O=$[3]===!0,D=P||O,L=$[2];O&&(L=$[2]),l=this.$locale(),!P&&L&&(l=g.Ls[L]),this.$d=function(R,E,N){try{if(["x","X"].indexOf(E)>-1)return new Date((E==="X"?1e3:1)*R);var W=h(E)(R),Y=W.year,J=W.month,Z=W.day,se=W.hours,Se=W.minutes,oe=W.seconds,H=W.milliseconds,ne=W.zone,ie=new Date,be=Z||(Y||J?1:ie.getDate()),$e=Y||ie.getFullYear(),Ne=0;Y&&!J||(Ne=J>0?J-1:ie.getMonth());var Me=se||0,j=Se||0,X=oe||0,de=H||0;return ne?new Date(Date.UTC($e,Ne,be,Me,j,X,de+60*ne.offset*1e3)):N?new Date(Date.UTC($e,Ne,be,Me,j,X,de)):new Date($e,Ne,be,Me,j,X,de)}catch{return new Date("")}}(x,z,k),this.init(),L&&L!==!0&&(this.$L=this.locale(L).$L),D&&x!=this.format(z)&&(this.$d=new Date("")),l={}}else if(z instanceof Array)for(var F=z.length,V=1;V<=F;V+=1){$[1]=z[V-1];var q=g.apply(this,$);if(q.isValid()){this.$d=q.$d,this.$L=q.$L,this.init();break}V===F&&(this.$d=new Date(""))}else y.call(this,T)}}})})(i0);var Cp=i0.exports;const Ld="HH:mm:ss",ii="YYYY-MM-DD",uR={date:ii,week:"gggg[w]ww",year:"YYYY",month:"YYYY-MM",datetime:`${ii} ${Ld}`,monthrange:"YYYY-MM",daterange:ii,datetimerange:`${ii} ${Ld}`},Sp={id:{type:[Array,String]},name:{type:[Array,String],default:""},popperClass:{type:String,default:""},format:{type:String},valueFormat:{type:String},type:{type:String,default:""},clearable:{type:Boolean,default:!0},clearIcon:{type:[String,Object],default:Oo},editable:{type:Boolean,default:!0},prefixIcon:{type:[String,Object],default:""},size:{type:String,validator:Nn},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},modelValue:{type:[Date,Array,String,Number],default:""},rangeSeparator:{type:String,default:"-"},startPlaceholder:String,endPlaceholder:String,defaultValue:{type:[Date,Array]},defaultTime:{type:[Date,Array]},isRange:{type:Boolean,default:!1},disabledHours:{type:Function},disabledMinutes:{type:Function},disabledSeconds:{type:Function},disabledDate:{type:Function},cellClassName:{type:Function},shortcuts:{type:Array,default:()=>[]},arrowControl:{type:Boolean,default:!1},validateEvent:{type:Boolean,default:!0},unlinkPanels:Boolean},Cm=function(e,t){const n=e instanceof Date,o=t instanceof Date;return n&&o?e.getTime()===t.getTime():!n&&!o?e===t:!1},Sm=function(e,t){const n=Array.isArray(e),o=Array.isArray(t);return n&&o?e.length!==t.length?!1:e.every((r,a)=>Cm(r,t[a])):!n&&!o?Cm(e,t):!1},$m=function(e,t,n){const o=Bi(t)||t==="x"?Ge(e).locale(n):Ge(e,t).locale(n);return o.isValid()?o:void 0},Am=function(e,t,n){return Bi(t)?e:t==="x"?+e:Ge(e).locale(n).format(t)},pR=ee({name:"Picker",components:{ElInput:Gn,ElTooltip:vn,ElIcon:qe},props:Sp,emits:["update:modelValue","change","focus","blur","calendar-change","panel-change","visible-change"],setup(e,t){const{lang:n}=Tt(),o=ke("date"),r=ke("input"),a=ke("range"),i=Ie(Mn,{}),l=Ie(qn,{}),s=Ie("ElPopperOptions",{}),c=A(),d=A(),u=A(!1),p=A(!1),f=A(null);ge(u,B=>{var me;B?f.value=e.modelValue:(ie.value=null,je(()=>{h(e.modelValue)}),t.emit("blur"),$e(),e.validateEvent&&((me=l.validate)==null||me.call(l,"blur").catch(Be=>void 0)))});const h=(B,me)=>{var Be;(me||!Sm(B,f.value))&&(t.emit("change",B),e.validateEvent&&((Be=l.validate)==null||Be.call(l,"change").catch(Ze=>void 0)))},b=B=>{if(!Sm(e.modelValue,B)){let me;Array.isArray(B)?me=B.map(Be=>Am(Be,e.valueFormat,n.value)):B&&(me=Am(B,e.valueFormat,n.value)),t.emit("update:modelValue",B&&me,n.value)}},m=C(()=>{if(d.value){const B=se.value?d.value:d.value.$el;return Array.from(B.querySelectorAll("input"))}return[]}),g=C(()=>m==null?void 0:m.value[0]),v=C(()=>m==null?void 0:m.value[1]),y=(B,me,Be)=>{const Ze=m.value;!Ze.length||(!Be||Be==="min"?(Ze[0].setSelectionRange(B,me),Ze[0].focus()):Be==="max"&&(Ze[1].setSelectionRange(B,me),Ze[1].focus()))},T=(B="",me=!1)=>{u.value=me;let Be;Array.isArray(B)?Be=B.map(Ze=>Ze.toDate()):Be=B&&B.toDate(),ie.value=null,b(Be)},x=()=>{p.value=!0},k=()=>{t.emit("visible-change",!0)},$=()=>{p.value=!1,t.emit("visible-change",!1)},z=(B=!0)=>{let me=g.value;!B&&se.value&&(me=v.value),me&&me.focus()},P=B=>{e.readonly||D.value||u.value||(u.value=!0,t.emit("focus",B))},O=()=>{var B;(B=c.value)==null||B.onClose(),$e()},D=C(()=>e.disabled||i.disabled),L=C(()=>{let B;if(Y.value?ae.value.getDefaultValue&&(B=ae.value.getDefaultValue()):Array.isArray(e.modelValue)?B=e.modelValue.map(me=>$m(me,e.valueFormat,n.value)):B=$m(e.modelValue,e.valueFormat,n.value),ae.value.getRangeAvailableTime){const me=ae.value.getRangeAvailableTime(B);En(me,B)||(B=me,b(Array.isArray(B)?B.map(Be=>Be.toDate()):B.toDate()))}return Array.isArray(B)&&B.some(me=>!me)&&(B=[]),B}),F=C(()=>{if(!ae.value.panelReady)return;const B=Me(L.value);if(Array.isArray(ie.value))return[ie.value[0]||B&&B[0]||"",ie.value[1]||B&&B[1]||""];if(ie.value!==null)return ie.value;if(!(!q.value&&Y.value)&&!(!u.value&&Y.value))return B?R.value?B.join(", "):B:""}),V=C(()=>e.type.includes("time")),q=C(()=>e.type.startsWith("time")),R=C(()=>e.type==="dates"),E=C(()=>e.prefixIcon||(V.value?Gv:J$)),N=A(!1),W=B=>{e.readonly||D.value||N.value&&(B.stopPropagation(),b(null),h(null,!0),N.value=!1,u.value=!1,ae.value.handleClear&&ae.value.handleClear())},Y=C(()=>!e.modelValue||Array.isArray(e.modelValue)&&!e.modelValue.length),J=()=>{e.readonly||D.value||!Y.value&&e.clearable&&(N.value=!0)},Z=()=>{N.value=!1},se=C(()=>e.type.includes("range")),Se=Ut(),oe=C(()=>{var B,me;return(me=(B=c.value)==null?void 0:B.popperRef)==null?void 0:me.contentRef}),H=C(()=>{var B,me;return(me=(B=_(c))==null?void 0:B.popperRef)==null?void 0:me.contentRef}),ne=C(()=>{var B;return _(se)?_(d):(B=_(d))==null?void 0:B.$el});Cs(ne,B=>{const me=_(H),Be=_(ne);me&&(B.target===me||B.composedPath().includes(me))||B.target===Be||B.composedPath().includes(Be)||(u.value=!1)});const ie=A(null),be=()=>{if(ie.value){const B=Ne(F.value);B&&j(B)&&(b(Array.isArray(B)?B.map(me=>me.toDate()):B.toDate()),ie.value=null)}ie.value===""&&(b(null),h(null),ie.value=null)},$e=()=>{m.value.forEach(B=>B.blur())},Ne=B=>B?ae.value.parseUserInput(B):null,Me=B=>B?ae.value.formatToString(B):null,j=B=>ae.value.isValidValue(B),X=B=>{const me=B.code;if(me===Pe.esc){u.value=!1,B.stopPropagation();return}if(me===Pe.tab){se.value?setTimeout(()=>{m.value.includes(document.activeElement)||(u.value=!1,$e())},0):(be(),u.value=!1,B.stopPropagation());return}if(me===Pe.enter||me===Pe.numpadEnter){(ie.value===null||ie.value===""||j(Ne(F.value)))&&(be(),u.value=!1),B.stopPropagation();return}if(ie.value){B.stopPropagation();return}ae.value.handleKeydown&&ae.value.handleKeydown(B)},de=B=>{ie.value=B},xe=B=>{ie.value?ie.value=[B.target.value,ie.value[1]]:ie.value=[B.target.value,null]},we=B=>{ie.value?ie.value=[ie.value[0],B.target.value]:ie.value=[null,B.target.value]},Ae=()=>{const B=Ne(ie.value&&ie.value[0]);if(B&&B.isValid()){ie.value=[Me(B),F.value[1]];const me=[B,L.value&&L.value[1]];j(me)&&(b(me),ie.value=null)}},ce=()=>{const B=Ne(ie.value&&ie.value[1]);if(B&&B.isValid()){ie.value=[F.value[0],Me(B)];const me=[L.value&&L.value[0],B];j(me)&&(b(me),ie.value=null)}},ae=A({}),te=B=>{ae.value[B[0]]=B[1],ae.value.panelReady=!0},pe=B=>{t.emit("calendar-change",B)},De=(B,me,Be)=>{t.emit("panel-change",B,me,Be)};return ot("EP_PICKER_BASE",{props:e}),{nsDate:o,nsInput:r,nsRange:a,elPopperOptions:s,isDatesPicker:R,handleEndChange:ce,handleStartChange:Ae,handleStartInput:xe,handleEndInput:we,onUserInput:de,handleChange:be,handleKeydown:X,popperPaneRef:oe,onClickOutside:Cs,pickerSize:Se,isRangeInput:se,onMouseLeave:Z,onMouseEnter:J,onClearIconClick:W,showClose:N,triggerIcon:E,onPick:T,handleFocus:P,handleBlur:O,pickerVisible:u,pickerActualVisible:p,displayValue:F,parsedValue:L,setSelectionRange:y,refPopper:c,inputRef:d,pickerDisabled:D,onSetPickerOption:te,onCalendarChange:pe,onPanelChange:De,focus:z,onShow:k,onBeforeShow:x,onHide:$}}}),fR=["id","name","placeholder","value","disabled","readonly"],hR=["id","name","placeholder","value","disabled","readonly"];function mR(e,t,n,o,r,a){const i=le("el-icon"),l=le("el-input"),s=le("el-tooltip");return w(),Q(s,St({ref:"refPopper",visible:e.pickerVisible,"onUpdate:visible":t[17]||(t[17]=c=>e.pickerVisible=c),effect:"light",pure:"",trigger:"click"},e.$attrs,{"append-to-body":"",transition:`${e.nsDate.namespace.value}-zoom-in-top`,"popper-class":[`${e.nsDate.namespace.value}-picker__popper`,e.popperClass],"popper-options":e.elPopperOptions,"fallback-placements":["bottom","top","right","left"],"gpu-acceleration":!1,"stop-popper-mouse-event":!1,"hide-after":0,persistent:"",onBeforeShow:e.onBeforeShow,onShow:e.onShow,onHide:e.onHide}),{default:K(()=>[e.isRangeInput?(w(),I("div",{key:1,ref:"inputRef",class:S([e.nsDate.b("editor"),e.nsDate.bm("editor",e.type),e.nsInput.e("inner"),e.nsDate.is("disabled",e.pickerDisabled),e.nsDate.is("active",e.pickerVisible),e.nsRange.b("editor"),e.pickerSize?e.nsRange.bm("editor",e.pickerSize):"",e.$attrs.class]),style:Oe(e.$attrs.style),onClick:t[7]||(t[7]=(...c)=>e.handleFocus&&e.handleFocus(...c)),onMouseenter:t[8]||(t[8]=(...c)=>e.onMouseEnter&&e.onMouseEnter(...c)),onMouseleave:t[9]||(t[9]=(...c)=>e.onMouseLeave&&e.onMouseLeave(...c)),onKeydown:t[10]||(t[10]=(...c)=>e.handleKeydown&&e.handleKeydown(...c))},[e.triggerIcon?(w(),Q(i,{key:0,class:S([e.nsInput.e("icon"),e.nsRange.e("icon")]),onClick:e.handleFocus},{default:K(()=>[(w(),Q(pt(e.triggerIcon)))]),_:1},8,["class","onClick"])):G("v-if",!0),M("input",{id:e.id&&e.id[0],autocomplete:"off",name:e.name&&e.name[0],placeholder:e.startPlaceholder,value:e.displayValue&&e.displayValue[0],disabled:e.pickerDisabled,readonly:!e.editable||e.readonly,class:S(e.nsRange.b("input")),onInput:t[1]||(t[1]=(...c)=>e.handleStartInput&&e.handleStartInput(...c)),onChange:t[2]||(t[2]=(...c)=>e.handleStartChange&&e.handleStartChange(...c)),onFocus:t[3]||(t[3]=(...c)=>e.handleFocus&&e.handleFocus(...c))},null,42,fR),ue(e.$slots,"range-separator",{},()=>[M("span",{class:S(e.nsRange.b("separator"))},ve(e.rangeSeparator),3)]),M("input",{id:e.id&&e.id[1],autocomplete:"off",name:e.name&&e.name[1],placeholder:e.endPlaceholder,value:e.displayValue&&e.displayValue[1],disabled:e.pickerDisabled,readonly:!e.editable||e.readonly,class:S(e.nsRange.b("input")),onFocus:t[4]||(t[4]=(...c)=>e.handleFocus&&e.handleFocus(...c)),onInput:t[5]||(t[5]=(...c)=>e.handleEndInput&&e.handleEndInput(...c)),onChange:t[6]||(t[6]=(...c)=>e.handleEndChange&&e.handleEndChange(...c))},null,42,hR),e.clearIcon?(w(),Q(i,{key:1,class:S([e.nsInput.e("icon"),e.nsRange.e("close-icon"),{[e.nsRange.e("close-icon--hidden")]:!e.showClose}]),onClick:e.onClearIconClick},{default:K(()=>[(w(),Q(pt(e.clearIcon)))]),_:1},8,["class","onClick"])):G("v-if",!0)],38)):(w(),Q(l,{key:0,id:e.id,ref:"inputRef","model-value":e.displayValue,name:e.name,size:e.pickerSize,disabled:e.pickerDisabled,placeholder:e.placeholder,class:S([e.nsDate.b("editor"),e.nsDate.bm("editor",e.type),e.$attrs.class]),style:Oe(e.$attrs.style),readonly:!e.editable||e.readonly||e.isDatesPicker||e.type==="week",onInput:e.onUserInput,onFocus:e.handleFocus,onKeydown:e.handleKeydown,onChange:e.handleChange,onMouseenter:e.onMouseEnter,onMouseleave:e.onMouseLeave,onClick:t[0]||(t[0]=He(()=>{},["stop"]))},{prefix:K(()=>[e.triggerIcon?(w(),Q(i,{key:0,class:S(e.nsInput.e("icon")),onClick:e.handleFocus},{default:K(()=>[(w(),Q(pt(e.triggerIcon)))]),_:1},8,["class","onClick"])):G("v-if",!0)]),suffix:K(()=>[e.showClose&&e.clearIcon?(w(),Q(i,{key:0,class:S(`${e.nsInput.e("icon")} clear-icon`),onClick:e.onClearIconClick},{default:K(()=>[(w(),Q(pt(e.clearIcon)))]),_:1},8,["class","onClick"])):G("v-if",!0)]),_:1},8,["id","model-value","name","size","disabled","placeholder","class","style","readonly","onInput","onFocus","onKeydown","onChange","onMouseenter","onMouseleave"]))]),content:K(()=>[ue(e.$slots,"default",{visible:e.pickerVisible,actualVisible:e.pickerActualVisible,parsedValue:e.parsedValue,format:e.format,unlinkPanels:e.unlinkPanels,type:e.type,defaultValue:e.defaultValue,onPick:t[11]||(t[11]=(...c)=>e.onPick&&e.onPick(...c)),onSelectRange:t[12]||(t[12]=(...c)=>e.setSelectionRange&&e.setSelectionRange(...c)),onSetPickerOption:t[13]||(t[13]=(...c)=>e.onSetPickerOption&&e.onSetPickerOption(...c)),onCalendarChange:t[14]||(t[14]=(...c)=>e.onCalendarChange&&e.onCalendarChange(...c)),onPanelChange:t[15]||(t[15]=(...c)=>e.onPanelChange&&e.onPanelChange(...c)),onMousedown:t[16]||(t[16]=He(()=>{},["stop"]))})]),_:3},16,["visible","transition","popper-class","popper-options","onBeforeShow","onShow","onHide"])}var l0=_e(pR,[["render",mR],["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);const Qo=new Map;let Em;dt&&(document.addEventListener("mousedown",e=>Em=e),document.addEventListener("mouseup",e=>{for(const t of Qo.values())for(const{documentHandler:n}of t)n(e,Em)}));function zm(e,t){let n=[];return Array.isArray(t.arg)?n=t.arg:Hr(t.arg)&&n.push(t.arg),function(o,r){const a=t.instance.popperRef,i=o.target,l=r==null?void 0:r.target,s=!t||!t.instance,c=!i||!l,d=e.contains(i)||e.contains(l),u=e===i,p=n.length&&n.some(h=>h==null?void 0:h.contains(i))||n.length&&n.includes(l),f=a&&(a.contains(i)||a.contains(l));s||c||d||u||p||f||t.value(o,r)}}const Jr={beforeMount(e,t){Qo.has(e)||Qo.set(e,[]),Qo.get(e).push({documentHandler:zm(e,t),bindingFn:t.value})},updated(e,t){Qo.has(e)||Qo.set(e,[]);const n=Qo.get(e),o=n.findIndex(a=>a.bindingFn===t.oldValue),r={documentHandler:zm(e,t),bindingFn:t.value};o>=0?n.splice(o,1,r):n.push(r)},unmounted(e){Qo.delete(e)}};var s0={beforeMount(e,t){let n=null,o;const r=()=>t.value&&t.value(),a=()=>{Date.now()-o<100&&r(),clearInterval(n),n=null};At(e,"mousedown",i=>{i.button===0&&(o=Date.now(),K4(document,"mouseup",a),clearInterval(n),n=setInterval(r,100))})}};const Vd="_trap-focus-children",zr=[],Im=e=>{if(zr.length===0)return;const t=zr[zr.length-1][Vd];if(t.length>0&&e.code===Pe.tab){if(t.length===1){e.preventDefault(),document.activeElement!==t[0]&&t[0].focus();return}const n=e.shiftKey,o=e.target===t[0],r=e.target===t[t.length-1];o&&n&&(e.preventDefault(),t[t.length-1].focus()),r&&!n&&(e.preventDefault(),t[0].focus())}},c0={beforeMount(e){e[Vd]=Vh(e),zr.push(e),zr.length<=1&&At(document,"keydown",Im)},updated(e){je(()=>{e[Vd]=Vh(e)})},unmounted(){zr.shift(),zr.length===0&&Bt(document,"keydown",Im)}};var Nm=!1,$r,Bd,jd,Hl,ql,d0,Kl,Hd,qd,Kd,u0,Wd,Ud,p0,f0;function pn(){if(!Nm){Nm=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),n=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(Wd=/\b(iPhone|iP[ao]d)/.exec(e),Ud=/\b(iP[ao]d)/.exec(e),Kd=/Android/i.exec(e),p0=/FBAN\/\w+;/i.exec(e),f0=/Mobile/i.exec(e),u0=!!/Win64/.exec(e),t){$r=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN,$r&&document&&document.documentMode&&($r=document.documentMode);var o=/(?:Trident\/(\d+.\d+))/.exec(e);d0=o?parseFloat(o[1])+4:$r,Bd=t[2]?parseFloat(t[2]):NaN,jd=t[3]?parseFloat(t[3]):NaN,Hl=t[4]?parseFloat(t[4]):NaN,Hl?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),ql=t&&t[1]?parseFloat(t[1]):NaN):ql=NaN}else $r=Bd=jd=ql=Hl=NaN;if(n){if(n[1]){var r=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);Kl=r?parseFloat(r[1].replace("_",".")):!0}else Kl=!1;Hd=!!n[2],qd=!!n[3]}else Kl=Hd=qd=!1}}var Yd={ie:function(){return pn()||$r},ieCompatibilityMode:function(){return pn()||d0>$r},ie64:function(){return Yd.ie()&&u0},firefox:function(){return pn()||Bd},opera:function(){return pn()||jd},webkit:function(){return pn()||Hl},safari:function(){return Yd.webkit()},chrome:function(){return pn()||ql},windows:function(){return pn()||Hd},osx:function(){return pn()||Kl},linux:function(){return pn()||qd},iphone:function(){return pn()||Wd},mobile:function(){return pn()||Wd||Ud||Kd||f0},nativeApp:function(){return pn()||p0},android:function(){return pn()||Kd},ipad:function(){return pn()||Ud}},gR=Yd,Al=!!(typeof window<"u"&&window.document&&window.document.createElement),bR={canUseDOM:Al,canUseWorkers:typeof Worker<"u",canUseEventListeners:Al&&!!(window.addEventListener||window.attachEvent),canUseViewport:Al&&!!window.screen,isInWorker:!Al},h0=bR,m0;h0.canUseDOM&&(m0=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);function vR(e,t){if(!h0.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,o=n in document;if(!o){var r=document.createElement("div");r.setAttribute(n,"return;"),o=typeof r[n]=="function"}return!o&&m0&&e==="wheel"&&(o=document.implementation.hasFeature("Events.wheel","3.0")),o}var yR=vR,Mm=10,Rm=40,Pm=800;function g0(e){var t=0,n=0,o=0,r=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),o=t*Mm,r=n*Mm,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(o=e.deltaX),(o||r)&&e.deltaMode&&(e.deltaMode==1?(o*=Rm,r*=Rm):(o*=Pm,r*=Pm)),o&&!t&&(t=o<1?-1:1),r&&!n&&(n=r<1?-1:1),{spinX:t,spinY:n,pixelX:o,pixelY:r}}g0.getEventType=function(){return gR.firefox()?"DOMMouseScroll":yR("wheel")?"wheel":"mousewheel"};var _R=g0;/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/const wR=function(e,t){if(e&&e.addEventListener){const n=function(o){const r=_R(o);t&&Reflect.apply(t,this,[o,r])};cp()?e.addEventListener("DOMMouseScroll",n):e.onmousewheel=n}},xR={beforeMount(e,t){wR(e,t.value)}},kR={beforeMount(e,t){e._handleResize=()=>{var n;e&&((n=t.value)==null||n.call(t,e))},ja(e,e._handleResize)},beforeUnmount(e){Ha(e,e._handleResize)}},Lc=(e,t,n)=>{const o=[],r=t&&n();for(let a=0;a<e;a++)o[a]=r?r.includes(a):!1;return o},Vc=e=>e.map((t,n)=>t||n).filter(t=>t!==!0),b0=(e,t,n)=>({getHoursList:(i,l)=>Lc(24,e,()=>e(i,l)),getMinutesList:(i,l,s)=>Lc(60,t,()=>t(i,l,s)),getSecondsList:(i,l,s,c)=>Lc(60,n,()=>n(i,l,s,c))}),v0=(e,t,n)=>{const{getHoursList:o,getMinutesList:r,getSecondsList:a}=b0(e,t,n);return{getAvailableHours:(c,d)=>Vc(o(c,d)),getAvailableMinutes:(c,d,u)=>Vc(r(c,d,u)),getAvailableSeconds:(c,d,u,p)=>Vc(a(c,d,u,p))}},y0=e=>{const t=A(e.parsedValue);return ge(()=>e.visible,n=>{n||(t.value=e.parsedValue)}),t},TR=ee({directives:{repeatClick:s0},components:{ElScrollbar:qo,ElIcon:qe,ArrowUp:rl,ArrowDown:Gr},props:{role:{type:String,required:!0},spinnerDate:{type:Object,required:!0},showSeconds:{type:Boolean,default:!0},arrowControl:Boolean,amPmMode:{type:String,default:""},disabledHours:{type:Function},disabledMinutes:{type:Function},disabledSeconds:{type:Function}},emits:["change","select-range","set-option"],setup(e,t){const n=ke("time");let o=!1;const r=bn(H=>{o=!1,P(H)},200),a=A(null),i=A(null),l=A(null),s=A(null),c={hours:i,minutes:l,seconds:s},d=C(()=>{const H=["hours","minutes","seconds"];return e.showSeconds?H:H.slice(0,2)}),u=C(()=>e.spinnerDate.hour()),p=C(()=>e.spinnerDate.minute()),f=C(()=>e.spinnerDate.second()),h=C(()=>({hours:u,minutes:p,seconds:f})),b=C(()=>se(e.role)),m=C(()=>Se(u.value,e.role)),g=C(()=>oe(u.value,p.value,e.role)),v=C(()=>({hours:b,minutes:m,seconds:g})),y=C(()=>{const H=u.value;return[H>0?H-1:void 0,H,H<23?H+1:void 0]}),T=C(()=>{const H=p.value;return[H>0?H-1:void 0,H,H<59?H+1:void 0]}),x=C(()=>{const H=f.value;return[H>0?H-1:void 0,H,H<59?H+1:void 0]}),k=C(()=>({hours:y,minutes:T,seconds:x})),$=H=>{if(!!!e.amPmMode)return"";const ie=e.amPmMode==="A";let be=H<12?" am":" pm";return ie&&(be=be.toUpperCase()),be},z=H=>{H==="hours"?t.emit("select-range",0,2):H==="minutes"?t.emit("select-range",3,5):H==="seconds"&&t.emit("select-range",6,8),a.value=H},P=H=>{L(H,h.value[H].value)},O=()=>{P("hours"),P("minutes"),P("seconds")},D=H=>H.querySelector(`.${n.namespace.value}-scrollbar__wrap`),L=(H,ne)=>{if(e.arrowControl)return;const ie=c[H];ie&&ie.$el&&(D(ie.$el).scrollTop=Math.max(0,ne*F(H)))},F=H=>c[H].$el.querySelector("li").offsetHeight,V=()=>{R(1)},q=()=>{R(-1)},R=H=>{a.value||z("hours");const ne=a.value;let ie=h.value[ne].value;const be=a.value==="hours"?24:60;ie=(ie+H+be)%be,E(ne,ie),L(ne,ie),je(()=>z(a.value))},E=(H,ne)=>{if(!v.value[H].value[ne])switch(H){case"hours":t.emit("change",e.spinnerDate.hour(ne).minute(p.value).second(f.value));break;case"minutes":t.emit("change",e.spinnerDate.hour(u.value).minute(ne).second(f.value));break;case"seconds":t.emit("change",e.spinnerDate.hour(u.value).minute(p.value).second(ne));break}},N=(H,{value:ne,disabled:ie})=>{ie||(E(H,ne),z(H),L(H,ne))},W=H=>{o=!0,r(H);const ne=Math.min(Math.round((D(c[H].$el).scrollTop-(Y(H)*.5-10)/F(H)+3)/F(H)),H==="hours"?23:59);E(H,ne)},Y=H=>c[H].$el.offsetHeight,J=()=>{const H=ne=>{c[ne]&&c[ne].$el&&(D(c[ne].$el).onscroll=()=>{W(ne)})};H("hours"),H("minutes"),H("seconds")};et(()=>{je(()=>{!e.arrowControl&&J(),O(),e.role==="start"&&z("hours")})});const Z=(H,ne)=>{c[ne]=H};t.emit("set-option",[`${e.role}_scrollDown`,R]),t.emit("set-option",[`${e.role}_emitSelectRange`,z]);const{getHoursList:se,getMinutesList:Se,getSecondsList:oe}=b0(e.disabledHours,e.disabledMinutes,e.disabledSeconds);return ge(()=>e.spinnerDate,()=>{o||O()}),{ns:n,setRef:Z,spinnerItems:d,currentScrollbar:a,hours:u,minutes:p,seconds:f,hoursList:b,minutesList:m,arrowHourList:y,arrowMinuteList:T,arrowSecondList:x,getAmPmFlag:$,emitSelectRange:z,adjustCurrentSpinner:P,typeItemHeight:F,listHoursRef:i,listMinutesRef:l,listSecondsRef:s,onIncreaseClick:V,onDecreaseClick:q,handleClick:N,secondsList:g,timePartsMap:h,arrowListMap:k,listMap:v}}}),CR=["onClick"],SR=["onMouseenter"];function $R(e,t,n,o,r,a){const i=le("el-scrollbar"),l=le("arrow-up"),s=le("el-icon"),c=le("arrow-down"),d=In("repeat-click");return w(),I("div",{class:S([e.ns.b("spinner"),{"has-seconds":e.showSeconds}])},[e.arrowControl?G("v-if",!0):(w(!0),I(Fe,{key:0},ct(e.spinnerItems,u=>(w(),Q(i,{key:u,ref_for:!0,ref:p=>e.setRef(p,u),class:S(e.ns.be("spinner","wrapper")),"wrap-style":"max-height: inherit;","view-class":e.ns.be("spinner","list"),noresize:"",tag:"ul",onMouseenter:p=>e.emitSelectRange(u),onMousemove:p=>e.adjustCurrentSpinner(u)},{default:K(()=>[(w(!0),I(Fe,null,ct(e.listMap[u].value,(p,f)=>(w(),I("li",{key:f,class:S([e.ns.be("spinner","item"),e.ns.is("active",f===e.timePartsMap[u].value),e.ns.is("disabled",p)]),onClick:h=>e.handleClick(u,{value:f,disabled:p})},[u==="hours"?(w(),I(Fe,{key:0},[it(ve(("0"+(e.amPmMode?f%12||12:f)).slice(-2))+ve(e.getAmPmFlag(f)),1)],2112)):(w(),I(Fe,{key:1},[it(ve(("0"+f).slice(-2)),1)],2112))],10,CR))),128))]),_:2},1032,["class","view-class","onMouseenter","onMousemove"]))),128)),e.arrowControl?(w(!0),I(Fe,{key:1},ct(e.spinnerItems,u=>(w(),I("div",{key:u,class:S([e.ns.be("spinner","wrapper"),e.ns.is("arrow")]),onMouseenter:p=>e.emitSelectRange(u)},[Ue((w(),Q(s,{class:S(["arrow-up",e.ns.be("spinner","arrow")])},{default:K(()=>[U(l)]),_:1},8,["class"])),[[d,e.onDecreaseClick]]),Ue((w(),Q(s,{class:S(["arrow-down",e.ns.be("spinner","arrow")])},{default:K(()=>[U(c)]),_:1},8,["class"])),[[d,e.onIncreaseClick]]),M("ul",{class:S(e.ns.be("spinner","list"))},[(w(!0),I(Fe,null,ct(e.arrowListMap[u].value,(p,f)=>(w(),I("li",{key:f,class:S([e.ns.be("spinner","item"),e.ns.is("active",p===e.timePartsMap[u].value),e.ns.is("disabled",e.listMap[u].value[p])])},[typeof p=="number"?(w(),I(Fe,{key:0},[u==="hours"?(w(),I(Fe,{key:0},[it(ve(("0"+(e.amPmMode?p%12||12:p)).slice(-2))+ve(e.getAmPmFlag(p)),1)],2112)):(w(),I(Fe,{key:1},[it(ve(("0"+p).slice(-2)),1)],2112))],2112)):G("v-if",!0)],2))),128))],2)],42,SR))),128)):G("v-if",!0)],2)}var _0=_e(TR,[["render",$R],["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);const AR=ee({components:{TimeSpinner:_0},props:{visible:Boolean,actualVisible:{type:Boolean,default:void 0},datetimeRole:{type:String},parsedValue:{type:[Object,String]},format:{type:String,default:""}},emits:["pick","select-range","set-picker-option"],setup(e,t){const n=ke("time"),{t:o,lang:r}=Tt(),a=A([0,2]),i=y0(e),l=C(()=>Cn(e.actualVisible)?`${n.namespace.value}-zoom-in-top`:""),s=C(()=>e.format.includes("ss")),c=C(()=>e.format.includes("A")?"A":e.format.includes("a")?"a":""),d=R=>{const E=Ge(R).locale(r.value),N=g(E);return E.isSame(N)},u=()=>{t.emit("pick",i.value,!1)},p=(R=!1,E=!1)=>{E||t.emit("pick",e.parsedValue,R)},f=R=>{if(!e.visible)return;const E=g(R).millisecond(0);t.emit("pick",E,!0)},h=(R,E)=>{t.emit("select-range",R,E),a.value=[R,E]},b=R=>{const E=[0,3].concat(s.value?[6]:[]),N=["hours","minutes"].concat(s.value?["seconds"]:[]),Y=(E.indexOf(a.value[0])+R+E.length)%E.length;x.start_emitSelectRange(N[Y])},m=R=>{const E=R.code;if(E===Pe.left||E===Pe.right){const N=E===Pe.left?-1:1;b(N),R.preventDefault();return}if(E===Pe.up||E===Pe.down){const N=E===Pe.up?-1:1;x.start_scrollDown(N),R.preventDefault();return}},g=R=>{const E={hour:F,minute:V,second:q};let N=R;return["hour","minute","second"].forEach(W=>{if(E[W]){let Y;const J=E[W];W==="minute"?Y=J(N.hour(),e.datetimeRole):W==="second"?Y=J(N.hour(),N.minute(),e.datetimeRole):Y=J(e.datetimeRole),Y&&Y.length&&!Y.includes(N[W]())&&(N=N[W](Y[0]))}}),N},v=R=>R?Ge(R,e.format).locale(r.value):null,y=R=>R?R.format(e.format):null,T=()=>Ge(L).locale(r.value);t.emit("set-picker-option",["isValidValue",d]),t.emit("set-picker-option",["formatToString",y]),t.emit("set-picker-option",["parseUserInput",v]),t.emit("set-picker-option",["handleKeydown",m]),t.emit("set-picker-option",["getRangeAvailableTime",g]),t.emit("set-picker-option",["getDefaultValue",T]);const x={},k=R=>{x[R[0]]=R[1]},$=Ie("EP_PICKER_BASE"),{arrowControl:z,disabledHours:P,disabledMinutes:O,disabledSeconds:D,defaultValue:L}=$.props,{getAvailableHours:F,getAvailableMinutes:V,getAvailableSeconds:q}=v0(P,O,D);return{ns:n,transitionName:l,arrowControl:z,onSetOption:k,t:o,handleConfirm:p,handleChange:f,setSelectionRange:h,amPmMode:c,showSeconds:s,handleCancel:u,disabledHours:P,disabledMinutes:O,disabledSeconds:D}}});function ER(e,t,n,o,r,a){const i=le("time-spinner");return w(),Q(qt,{name:e.transitionName},{default:K(()=>[e.actualVisible||e.visible?(w(),I("div",{key:0,class:S(e.ns.b("panel"))},[M("div",{class:S([e.ns.be("panel","content"),{"has-seconds":e.showSeconds}])},[U(i,{ref:"spinner",role:e.datetimeRole||"start","arrow-control":e.arrowControl,"show-seconds":e.showSeconds,"am-pm-mode":e.amPmMode,"spinner-date":e.parsedValue,"disabled-hours":e.disabledHours,"disabled-minutes":e.disabledMinutes,"disabled-seconds":e.disabledSeconds,onChange:e.handleChange,onSetOption:e.onSetOption,onSelectRange:e.setSelectionRange},null,8,["role","arrow-control","show-seconds","am-pm-mode","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onChange","onSetOption","onSelectRange"])],2),M("div",{class:S(e.ns.be("panel","footer"))},[M("button",{type:"button",class:S([e.ns.be("panel","btn"),"cancel"]),onClick:t[0]||(t[0]=(...l)=>e.handleCancel&&e.handleCancel(...l))},ve(e.t("el.datepicker.cancel")),3),M("button",{type:"button",class:S([e.ns.be("panel","btn"),"confirm"]),onClick:t[1]||(t[1]=l=>e.handleConfirm())},ve(e.t("el.datepicker.confirm")),3)],2)],2)):G("v-if",!0)]),_:1},8,["name"])}var $p=_e(AR,[["render",ER],["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]);const ta=(e,t)=>{const n=[];for(let o=e;o<=t;o++)n.push(o);return n},zR=ee({components:{TimeSpinner:_0},props:{visible:Boolean,actualVisible:Boolean,parsedValue:{type:[Array]},format:{type:String,default:""}},emits:["pick","select-range","set-picker-option"],setup(e,t){const{t:n,lang:o}=Tt(),r=ke("time"),a=ke("picker"),i=C(()=>e.parsedValue[0]),l=C(()=>e.parsedValue[1]),s=y0(e),c=()=>{t.emit("pick",s.value,!1)},d=C(()=>e.format.includes("ss")),u=C(()=>e.format.includes("A")?"A":e.format.includes("a")?"a":""),p=A([]),f=A([]),h=(be=!1)=>{t.emit("pick",[i.value,l.value],be)},b=be=>{v(be.millisecond(0),l.value)},m=be=>{v(i.value,be.millisecond(0))},g=be=>{const $e=be.map(Me=>Ge(Me).locale(o.value)),Ne=F($e);return $e[0].isSame(Ne[0])&&$e[1].isSame(Ne[1])},v=(be,$e)=>{t.emit("pick",[be,$e],!0)},y=C(()=>i.value>l.value),T=A([0,2]),x=(be,$e)=>{t.emit("select-range",be,$e,"min"),T.value=[be,$e]},k=C(()=>d.value?11:8),$=(be,$e)=>{t.emit("select-range",be,$e,"max"),T.value=[be+k.value,$e+k.value]},z=be=>{const $e=d.value?[0,3,6,11,14,17]:[0,3,8,11],Ne=["hours","minutes"].concat(d.value?["seconds"]:[]),j=($e.indexOf(T.value[0])+be+$e.length)%$e.length,X=$e.length/2;j<X?J.start_emitSelectRange(Ne[j]):J.end_emitSelectRange(Ne[j-X])},P=be=>{const $e=be.code;if($e===Pe.left||$e===Pe.right){const Ne=$e===Pe.left?-1:1;z(Ne),be.preventDefault();return}if($e===Pe.up||$e===Pe.down){const Ne=$e===Pe.up?-1:1,Me=T.value[0]<k.value?"start":"end";J[`${Me}_scrollDown`](Ne),be.preventDefault();return}},O=(be,$e)=>{const Ne=oe?oe(be):[],Me=be==="start",X=($e||(Me?l.value:i.value)).hour(),de=Me?ta(X+1,23):ta(0,X-1);return Ic(Ne,de)},D=(be,$e,Ne)=>{const Me=H?H(be,$e):[],j=$e==="start",X=Ne||(j?l.value:i.value),de=X.hour();if(be!==de)return Me;const xe=X.minute(),we=j?ta(xe+1,59):ta(0,xe-1);return Ic(Me,we)},L=(be,$e,Ne,Me)=>{const j=ne?ne(be,$e,Ne):[],X=Ne==="start",de=Me||(X?l.value:i.value),xe=de.hour(),we=de.minute();if(be!==xe||$e!==we)return j;const Ae=de.second(),ce=X?ta(Ae+1,59):ta(0,Ae-1);return Ic(j,ce)},F=be=>be.map(($e,Ne)=>E(be[0],be[1],Ne===0?"start":"end")),{getAvailableHours:V,getAvailableMinutes:q,getAvailableSeconds:R}=v0(O,D,L),E=(be,$e,Ne)=>{const Me={hour:V,minute:q,second:R},j=Ne==="start";let X=j?be:$e;const de=j?$e:be;return["hour","minute","second"].forEach(xe=>{if(Me[xe]){let we;const Ae=Me[xe];if(xe==="minute"?we=Ae(X.hour(),Ne,de):xe==="second"?we=Ae(X.hour(),X.minute(),Ne,de):we=Ae(Ne,de),we&&we.length&&!we.includes(X[xe]())){const ce=j?0:we.length-1;X=X[xe](we[ce])}}}),X},N=be=>be?Array.isArray(be)?be.map($e=>Ge($e,e.format).locale(o.value)):Ge(be,e.format).locale(o.value):null,W=be=>be?Array.isArray(be)?be.map($e=>$e.format(e.format)):be.format(e.format):null,Y=()=>{if(Array.isArray(ie))return ie.map($e=>Ge($e).locale(o.value));const be=Ge(ie).locale(o.value);return[be,be.add(60,"m")]};t.emit("set-picker-option",["formatToString",W]),t.emit("set-picker-option",["parseUserInput",N]),t.emit("set-picker-option",["isValidValue",g]),t.emit("set-picker-option",["handleKeydown",P]),t.emit("set-picker-option",["getDefaultValue",Y]),t.emit("set-picker-option",["getRangeAvailableTime",F]);const J={},Z=be=>{J[be[0]]=be[1]},se=Ie("EP_PICKER_BASE"),{arrowControl:Se,disabledHours:oe,disabledMinutes:H,disabledSeconds:ne,defaultValue:ie}=se.props;return{nsTime:r,nsPicker:a,arrowControl:Se,onSetOption:Z,setMaxSelectionRange:$,setMinSelectionRange:x,btnConfirmDisabled:y,handleCancel:c,handleConfirm:h,t:n,showSeconds:d,minDate:i,maxDate:l,amPmMode:u,handleMinChange:b,handleMaxChange:m,minSelectableRange:p,maxSelectableRange:f,disabledHours_:O,disabledMinutes_:D,disabledSeconds_:L}}}),IR=["disabled"];function NR(e,t,n,o,r,a){const i=le("time-spinner");return e.actualVisible?(w(),I("div",{key:0,class:S([e.nsTime.b("range-picker"),e.nsPicker.b("panel")])},[M("div",{class:S(e.nsTime.be("range-picker","content"))},[M("div",{class:S(e.nsTime.be("range-picker","cell"))},[M("div",{class:S(e.nsTime.be("range-picker","header"))},ve(e.t("el.datepicker.startTime")),3),M("div",{class:S([e.nsTime.be("range-picker","body"),e.nsTime.be("panel","content"),e.nsTime.is("arrow",e.arrowControl),{"has-seconds":e.showSeconds}])},[U(i,{ref:"minSpinner",role:"start","show-seconds":e.showSeconds,"am-pm-mode":e.amPmMode,"arrow-control":e.arrowControl,"spinner-date":e.minDate,"disabled-hours":e.disabledHours_,"disabled-minutes":e.disabledMinutes_,"disabled-seconds":e.disabledSeconds_,onChange:e.handleMinChange,onSetOption:e.onSetOption,onSelectRange:e.setMinSelectionRange},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onChange","onSetOption","onSelectRange"])],2)],2),M("div",{class:S(e.nsTime.be("range-picker","cell"))},[M("div",{class:S(e.nsTime.be("range-picker","header"))},ve(e.t("el.datepicker.endTime")),3),M("div",{class:S([e.nsTime.be("range-picker","body"),e.nsTime.be("panel","content"),e.nsTime.is("arrow",e.arrowControl),{"has-seconds":e.showSeconds}])},[U(i,{ref:"maxSpinner",role:"end","show-seconds":e.showSeconds,"am-pm-mode":e.amPmMode,"arrow-control":e.arrowControl,"spinner-date":e.maxDate,"disabled-hours":e.disabledHours_,"disabled-minutes":e.disabledMinutes_,"disabled-seconds":e.disabledSeconds_,onChange:e.handleMaxChange,onSetOption:e.onSetOption,onSelectRange:e.setMaxSelectionRange},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onChange","onSetOption","onSelectRange"])],2)],2)],2),M("div",{class:S(e.nsTime.be("panel","footer"))},[M("button",{type:"button",class:S([e.nsTime.be("panel","btn"),"cancel"]),onClick:t[0]||(t[0]=l=>e.handleCancel())},ve(e.t("el.datepicker.cancel")),3),M("button",{type:"button",class:S([e.nsTime.be("panel","btn"),"confirm"]),disabled:e.btnConfirmDisabled,onClick:t[1]||(t[1]=l=>e.handleConfirm())},ve(e.t("el.datepicker.confirm")),11,IR)],2)],2)):G("v-if",!0)}var MR=_e(zR,[["render",NR],["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-range.vue"]]);Ge.extend(Cp);var RR=ee({name:"ElTimePicker",install:null,props:ze(he({},Sp),{isRange:{type:Boolean,default:!1}}),emits:["update:modelValue"],setup(e,t){const n=A(null),o=e.isRange?"timerange":"time",r=e.isRange?MR:$p,a=ze(he({},e),{focus:()=>{var i;(i=n.value)==null||i.handleFocus()},blur:()=>{var i;(i=n.value)==null||i.handleBlur()}});return ot("ElPopperOptions",e.popperOptions),t.expose(a),()=>{var i;const l=(i=e.format)!=null?i:Ld;return Re(l0,ze(he({},e),{format:l,type:o,ref:n,"onUpdate:modelValue":s=>t.emit("update:modelValue",s)}),{default:s=>Re(r,s)})}}});const sr=e=>Array.from(Array.from({length:e}).keys()),w0=e=>e.replace(/\W?m{1,2}|\W?ZZ/g,"").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi,"").trim(),x0=e=>e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g,"").trim(),Wl=RR;Wl.install=e=>{e.component(Wl.name,Wl)};const PR=Wl,OR=(e,t)=>{const n=e.subtract(1,"month").endOf("month").date();return sr(t).map((o,r)=>n-(t-r-1))},FR=e=>{const t=e.daysInMonth();return sr(t).map((n,o)=>o+1)},DR=e=>sr(e.length/7).map(t=>{const n=t*7;return e.slice(n,n+7)}),LR=Le({selectedDay:{type:Te(Object)},range:{type:Te(Array)},date:{type:Te(Object),required:!0},hideHeader:{type:Boolean}}),VR={pick:e=>ut(e)},BR={key:0},jR=["onClick"],HR={name:"DateTable"},qR=ee(ze(he({},HR),{props:LR,emits:VR,setup(e,{expose:t,emit:n}){const o=e;Ge.extend(a0);const{t:r,lang:a}=Tt(),i=ke("calendar-table"),l=ke("calendar-day"),s=Ge().locale(a.value),c=s.$locale().weekStart||0,d=C(()=>!!o.range&&!!o.range.length),u=C(()=>{let g=[];if(d.value){const[v,y]=o.range,T=sr(y.date()-v.date()+1).map($=>({text:v.date()+$,type:"current"}));let x=T.length%7;x=x===0?0:7-x;const k=sr(x).map(($,z)=>({text:z+1,type:"next"}));g=T.concat(k)}else{const v=o.date.startOf("month").day()||7,y=OR(o.date,v-c).map(k=>({text:k,type:"prev"})),T=FR(o.date).map(k=>({text:k,type:"current"}));g=[...y,...T];const x=sr(42-g.length).map((k,$)=>({text:$+1,type:"next"}));g=g.concat(x)}return DR(g)}),p=C(()=>{const g=c;return g===0?Mc.map(v=>r(`el.datepicker.weeks.${v}`)):Mc.slice(g).concat(Mc.slice(0,g)).map(v=>r(`el.datepicker.weeks.${v}`))}),f=(g,v)=>{switch(v){case"prev":return o.date.startOf("month").subtract(1,"month").date(g);case"next":return o.date.startOf("month").add(1,"month").date(g);case"current":return o.date.date(g)}},h=({text:g,type:v})=>{const y=[v];if(v==="current"){const T=f(g,v);T.isSame(o.selectedDay,"day")&&y.push(l.is("selected")),T.isSame(s,"day")&&y.push(l.is("today"))}return y},b=({text:g,type:v})=>{const y=f(g,v);n("pick",y)},m=({text:g,type:v})=>{const y=f(g,v);return{isSelected:y.isSame(o.selectedDay),type:`${v}-month`,day:y.format("YYYY-MM-DD"),date:y.toDate()}};return t({getFormattedDate:f}),(g,v)=>(w(),I("table",{class:S([_(i).b(),_(i).is("range",_(d))]),cellspacing:"0",cellpadding:"0"},[g.hideHeader?G("v-if",!0):(w(),I("thead",BR,[(w(!0),I(Fe,null,ct(_(p),y=>(w(),I("th",{key:y},ve(y),1))),128))])),M("tbody",null,[(w(!0),I(Fe,null,ct(_(u),(y,T)=>(w(),I("tr",{key:T,class:S({[_(i).e("row")]:!0,[_(i).em("row","hide-border")]:T===0&&g.hideHeader})},[(w(!0),I(Fe,null,ct(y,(x,k)=>(w(),I("td",{key:k,class:S(h(x)),onClick:$=>b(x)},[M("div",{class:S(_(l).b())},[ue(g.$slots,"dateCell",{data:m(x)},()=>[M("span",null,ve(x.text),1)])],2)],10,jR))),128))],2))),128))])],2))}}));var Om=_e(qR,[["__file","/home/runner/work/element-plus/element-plus/packages/components/calendar/src/date-table.vue"]]);const KR=Le({modelValue:{type:Date},range:{type:Te(Array),validator:e=>Array.isArray(e)&&e.length===2&&e.every(t=>t instanceof Date)}}),WR={[tt]:e=>e instanceof Date,input:e=>e instanceof Date},UR={name:"ElCalendar"},YR=ee(ze(he({},UR),{props:KR,emits:WR,setup(e,{expose:t,emit:n}){const o=e,r=ke("calendar"),{t:a,lang:i}=Tt(),l=A(),s=Ge().locale(i.value),c=C(()=>b.value.subtract(1,"month").date(1)),d=C(()=>b.value.add(1,"month").date(1)),u=C(()=>b.value.subtract(1,"year").date(1)),p=C(()=>b.value.add(1,"year").date(1)),f=C(()=>{const T=`el.datepicker.month${b.value.format("M")}`;return`${b.value.year()} ${a("el.datepicker.year")} ${a(T)}`}),h=C({get(){return o.modelValue?b.value:l.value},set(T){if(!T)return;l.value=T;const x=T.toDate();n("input",x),n("update:modelValue",x)}}),b=C(()=>o.modelValue?Ge(o.modelValue).locale(i.value):h.value?h.value:g.value.length?g.value[0][0]:s),m=(T,x)=>{const k=T.startOf("week"),$=x.endOf("week"),z=k.get("month"),P=$.get("month");if(z===P)return[[k,$]];if(z+1===P){const O=k.endOf("month"),D=$.startOf("month"),F=O.isSame(D,"week")?D.add(1,"week"):D;return[[k,O],[F.startOf("week"),$]]}else if(z+2===P){const O=k.endOf("month"),D=k.add(1,"month").startOf("month"),L=O.isSame(D,"week")?D.add(1,"week"):D,F=L.endOf("month"),V=$.startOf("month"),q=F.isSame(V,"week")?V.add(1,"week"):V;return[[k,O],[L.startOf("week"),F],[q.startOf("week"),$]]}else return[]},g=C(()=>{if(!o.range)return[];const T=o.range.map($=>Ge($).locale(i.value)),[x,k]=T;return x.isAfter(k)?[]:x.isSame(k,"month")?m(x,k):x.add(1,"month").month()!==k.month()?[]:m(x,k)}),v=T=>{h.value=T},y=T=>{let x;T==="prev-month"?x=c.value:T==="next-month"?x=d.value:T==="prev-year"?x=u.value:T==="next-year"?x=p.value:x=s,!x.isSame(b.value,"day")&&v(x)};return t({selectedDay:h,pickDay:v,selectDate:y,calculateValidatedDateRange:m}),(T,x)=>(w(),I("div",{class:S(_(r).b())},[M("div",{class:S(_(r).e("header"))},[ue(T.$slots,"header",{date:_(f)},()=>[M("div",{class:S(_(r).e("title"))},ve(_(f)),3),_(g).length===0?(w(),I("div",{key:0,class:S(_(r).e("button-group"))},[U(_(n0),null,{default:K(()=>[U(_(Vn),{size:"small",onClick:x[0]||(x[0]=k=>y("prev-month"))},{default:K(()=>[it(ve(_(a)("el.datepicker.prevMonth")),1)]),_:1}),U(_(Vn),{size:"small",onClick:x[1]||(x[1]=k=>y("today"))},{default:K(()=>[it(ve(_(a)("el.datepicker.today")),1)]),_:1}),U(_(Vn),{size:"small",onClick:x[2]||(x[2]=k=>y("next-month"))},{default:K(()=>[it(ve(_(a)("el.datepicker.nextMonth")),1)]),_:1})]),_:1})],2)):G("v-if",!0)])],2),_(g).length===0?(w(),I("div",{key:0,class:S(_(r).e("body"))},[U(Om,{date:_(b),"selected-day":_(h),onPick:v},dr({_:2},[T.$slots.dateCell?{name:"dateCell",fn:K(k=>[ue(T.$slots,"dateCell",eo(ur(k)))])}:void 0]),1032,["date","selected-day"])],2)):(w(),I("div",{key:1,class:S(_(r).e("body"))},[(w(!0),I(Fe,null,ct(_(g),(k,$)=>(w(),Q(Om,{key:$,date:k[0],"selected-day":_(h),range:k,"hide-header":$!==0,onPick:v},dr({_:2},[T.$slots.dateCell?{name:"dateCell",fn:K(z=>[ue(T.$slots,"dateCell",eo(ur(z)))])}:void 0]),1032,["date","selected-day","range","hide-header"]))),128))],2))],2))}}));var GR=_e(YR,[["__file","/home/runner/work/element-plus/element-plus/packages/components/calendar/src/calendar.vue"]]);const XR=rt(GR),ZR=Le({header:{type:String,default:""},bodyStyle:{type:Te([String,Object,Array]),default:""},shadow:{type:String,default:"always"}}),JR={name:"ElCard"},QR=ee(ze(he({},JR),{props:ZR,setup(e){const t=ke("card");return(n,o)=>(w(),I("div",{class:S([_(t).b(),_(t).is(`${n.shadow}-shadow`)])},[n.$slots.header||n.header?(w(),I("div",{key:0,class:S(_(t).e("header"))},[ue(n.$slots,"header",{},()=>[it(ve(n.header),1)])],2)):G("v-if",!0),M("div",{class:S(_(t).e("body")),style:Oe(n.bodyStyle)},[ue(n.$slots,"default")],6)],2))}}));var eP=_e(QR,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const tP=rt(eP),nP=Le({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,default:""},indicator:{type:Boolean,default:!0},arrow:{type:String,default:"hover"},type:{type:String,default:""},loop:{type:Boolean,default:!0},direction:{type:String,default:"horizontal",validator(e){return["horizontal","vertical"].includes(e)}},pauseOnHover:{type:Boolean,default:!0}}),oP={change:(e,t)=>[e,t].every(mt)},rP=["onMouseenter","onMouseleave"],aP=["onMouseenter","onClick"],iP={key:0},lP={name:"ElCarousel"},sP=ee(ze(he({},lP),{props:nP,emits:oP,setup(e,{expose:t,emit:n}){const o=e,r=ke("carousel"),a=300,i=A(-1),l=A(null),s=A(!1),c=A(),d=A([]),u=C(()=>o.arrow!=="never"&&!_(m)),p=C(()=>d.value.some(Y=>Y.props.label.toString().length>0)),f=C(()=>{const Y=[r.b(),r.m(o.direction)];return _(b)&&Y.push(r.m("card")),Y}),h=C(()=>{const Y=[r.e("indicators"),r.em("indicators",o.direction)];return p.value&&Y.push(r.em("indicators","labels")),(o.indicatorPosition==="outside"||_(b))&&Y.push(r.em("indicators","outside")),Y}),b=C(()=>o.type==="card"),m=C(()=>o.direction==="vertical"),g=Pr(Y=>{k(Y)},a,{trailing:!0}),v=Pr(Y=>{R(Y)},a);function y(){l.value&&(clearInterval(l.value),l.value=null)}function T(){o.interval<=0||!o.autoplay||l.value||(l.value=setInterval(()=>x(),o.interval))}const x=()=>{i.value<d.value.length-1?i.value=i.value+1:o.loop&&(i.value=0)};function k(Y){if(Qe(Y)){const se=d.value.filter(Se=>Se.props.name===Y);se.length>0&&(Y=d.value.indexOf(se[0]))}if(Y=Number(Y),Number.isNaN(Y)||Y!==Math.floor(Y))return;const J=d.value.length,Z=i.value;Y<0?i.value=o.loop?J-1:0:Y>=J?i.value=o.loop?0:J-1:i.value=Y,Z===i.value&&$(Z)}function $(Y){d.value.forEach((J,Z)=>{J.translateItem(Z,i.value,Y)})}function z(Y){d.value.push(Y)}function P(Y){const J=d.value.findIndex(Z=>Z.uid===Y);J!==-1&&(d.value.splice(J,1),i.value===J&&N())}function O(Y,J){var Z,se,Se,oe;const H=_(d),ne=H.length;if(ne===0||!Y.states.inStage)return!1;const ie=J+1,be=J-1,$e=ne-1,Ne=H[$e].states.active,Me=H[0].states.active,j=(se=(Z=H[ie])==null?void 0:Z.states)==null?void 0:se.active,X=(oe=(Se=H[be])==null?void 0:Se.states)==null?void 0:oe.active;return J===$e&&Me||j?"left":J===0&&Ne||X?"right":!1}function D(){s.value=!0,o.pauseOnHover&&y()}function L(){s.value=!1,T()}function F(Y){_(m)||d.value.forEach((J,Z)=>{Y===O(J,Z)&&(J.states.hover=!0)})}function V(){_(m)||d.value.forEach(Y=>{Y.states.hover=!1})}function q(Y){i.value=Y}function R(Y){o.trigger==="hover"&&Y!==i.value&&(i.value=Y)}function E(){k(i.value-1)}function N(){k(i.value+1)}ge(()=>i.value,(Y,J)=>{$(J),J>-1&&n("change",Y,J)}),ge(()=>o.autoplay,Y=>{Y?T():y()}),ge(()=>o.loop,()=>{k(i.value)});const W=Kt();return et(async()=>{await je(),W.value=Ba(c.value,()=>{$()}),o.initialIndex<d.value.length&&o.initialIndex>=0&&(i.value=o.initialIndex),T()}),$t(()=>{y(),c.value&&W.value&&W.value.stop()}),ot(sy,{root:c,isCardType:b,isVertical:m,items:d,loop:o.loop,addItem:z,removeItem:P,setActiveItem:k}),t({setActiveItem:k,prev:E,next:N}),(Y,J)=>(w(),I("div",{ref_key:"root",ref:c,class:S(_(f)),onMouseenter:He(D,["stop"]),onMouseleave:He(L,["stop"])},[M("div",{class:S(_(r).e("container")),style:Oe({height:Y.height})},[_(u)?(w(),Q(qt,{key:0,name:"carousel-arrow-left"},{default:K(()=>[Ue(M("button",{type:"button",class:S([_(r).e("arrow"),_(r).em("arrow","left")]),onMouseenter:J[0]||(J[0]=Z=>F("left")),onMouseleave:V,onClick:J[1]||(J[1]=He(Z=>_(g)(i.value-1),["stop"]))},[U(_(qe),null,{default:K(()=>[U(_(Xr))]),_:1})],34),[[ft,(Y.arrow==="always"||s.value)&&(o.loop||i.value>0)]])]),_:1})):G("v-if",!0),_(u)?(w(),Q(qt,{key:1,name:"carousel-arrow-right"},{default:K(()=>[Ue(M("button",{type:"button",class:S([_(r).e("arrow"),_(r).em("arrow","right")]),onMouseenter:J[2]||(J[2]=Z=>F("right")),onMouseleave:V,onClick:J[3]||(J[3]=He(Z=>_(g)(i.value+1),["stop"]))},[U(_(qe),null,{default:K(()=>[U(_(Yn))]),_:1})],34),[[ft,(Y.arrow==="always"||s.value)&&(o.loop||i.value<d.value.length-1)]])]),_:1})):G("v-if",!0),ue(Y.$slots,"default")],6),Y.indicatorPosition!=="none"?(w(),I("ul",{key:0,class:S(_(h))},[(w(!0),I(Fe,null,ct(d.value,(Z,se)=>(w(),I("li",{key:se,class:S([_(r).e("indicator"),_(r).em("indicator",Y.direction),_(r).is("active",se===i.value)]),onMouseenter:Se=>_(v)(se),onClick:He(Se=>q(se),["stop"])},[M("button",{class:S(_(r).e("button"))},[_(p)?(w(),I("span",iP,ve(Z.props.label),1)):G("v-if",!0)],2)],42,aP))),128))],2)):G("v-if",!0)],42,rP))}}));var cP=_e(sP,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const dP=Le({name:{type:String,default:""},label:{type:[String,Number],default:""}}),uP={name:"ElCarouselItem"},pP=ee(ze(he({},uP),{props:dP,setup(e){const t=e,n=ke("carousel"),o=Ie(sy),r=nt(),a=.83,i=A(!1),l=A(0),s=A(1),c=A(!1),d=A(!1),u=A(!1),p=A(!1),{isCardType:f,isVertical:h}=o,b=C(()=>{const k=`${`translate${_(h)?"Y":"X"}`}(${_(l)}px)`,$=`scale(${_(s)})`;return{transform:[k,$].join(" ")}});function m(x,k,$){const z=$-1,P=k-1,O=k+1,D=$/2;return k===0&&x===z?-1:k===z&&x===0?$:x<P&&k-x>=D?$+1:x>O&&x-k>=D?-2:x}function g(x,k){var $;const z=(($=o.root.value)==null?void 0:$.offsetWidth)||0;return u.value?z*((2-a)*(x-k)+1)/4:x<k?-(1+a)*z/4:(3+a)*z/4}function v(x,k,$){const z=o.root.value;return z?(($?z.offsetHeight:z.offsetWidth)||0)*(x-k):0}const y=(x,k,$)=>{var z;const P=_(f),O=(z=o.items.value.length)!=null?z:Number.NaN,D=x===k;!P&&!Cn($)&&(p.value=D||x===$),!D&&O>2&&o.loop&&(x=m(x,k,O));const L=_(h);c.value=D,P?(u.value=Math.round(Math.abs(x-k))<=1,l.value=g(x,k),s.value=_(c)?1:a):l.value=v(x,k,L),d.value=!0};function T(){if(o&&_(f)){const x=o.items.value.findIndex(({uid:k})=>k===r.uid);o.setActiveItem(x)}}return et(()=>{o.addItem({props:t,states:vt({hover:i,translate:l,scale:s,active:c,ready:d,inStage:u,animating:p}),uid:r.uid,translateItem:y})}),Qi(()=>{o.removeItem(r.uid)}),(x,k)=>Ue((w(),I("div",{class:S([_(n).e("item"),_(n).is("active",c.value),_(n).is("in-stage",u.value),_(n).is("hover",i.value),_(n).is("animating",p.value),{[_(n).em("item","card")]:_(f)}]),style:Oe(_(b)),onClick:T},[_(f)?Ue((w(),I("div",{key:0,class:S(_(n).e("mask"))},null,2)),[[ft,!c.value]]):G("v-if",!0),ue(x.$slots,"default")],6)),[[ft,d.value]])}}));var k0=_e(pP,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const fP=rt(cP,{CarouselItem:k0}),hP=Dt(k0),mP={modelValue:{type:[Boolean,Number,String],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},tabindex:[String,Number],size:String},Ua=()=>{const e=Ie(Mn,{}),t=Ie(qn,{}),n=Ie("CheckboxGroup",{}),o=C(()=>n&&(n==null?void 0:n.name)==="ElCheckboxGroup"),r=C(()=>t.size);return{isGroup:o,checkboxGroup:n,elForm:e,elFormItemSize:r,elFormItem:t}},gP=e=>{const t=A(!1),{emit:n}=nt(),{isGroup:o,checkboxGroup:r}=Ua(),a=A(!1);return{model:C({get(){var l,s;return o.value?(l=r.modelValue)==null?void 0:l.value:(s=e.modelValue)!=null?s:t.value},set(l){var s;o.value&&Array.isArray(l)?(a.value=r.max!==void 0&&l.length>r.max.value,a.value===!1&&((s=r==null?void 0:r.changeEvent)==null||s.call(r,l))):(n(tt,l),t.value=l)}}),isLimitExceeded:a}},bP=(e,{model:t})=>{const{isGroup:n,checkboxGroup:o}=Ua(),r=A(!1),a=Ut(o==null?void 0:o.checkboxGroupSize,{prop:!0}),i=C(()=>{const s=t.value;return Fa(s)==="[object Boolean]"?s:Array.isArray(s)?s.includes(e.label):s!=null?s===e.trueLabel:!!s}),l=Ut(C(()=>{var s;return n.value?(s=o==null?void 0:o.checkboxGroupSize)==null?void 0:s.value:void 0}));return{isChecked:i,focus:r,size:a,checkboxSize:l}},vP=(e,{model:t,isChecked:n})=>{const{elForm:o,isGroup:r,checkboxGroup:a}=Ua(),i=C(()=>{var s,c;const d=(s=a.max)==null?void 0:s.value,u=(c=a.min)==null?void 0:c.value;return!!(d||u)&&t.value.length>=d&&!n.value||t.value.length<=u&&n.value});return{isDisabled:C(()=>{var s,c;const d=e.disabled||o.disabled;return(c=r.value?((s=a.disabled)==null?void 0:s.value)||d||i.value:e.disabled||o.disabled)!=null?c:!1}),isLimitDisabled:i}},yP=(e,{model:t})=>{function n(){Array.isArray(t.value)&&!t.value.includes(e.label)?t.value.push(e.label):t.value=e.trueLabel||!0}e.checked&&n()},_P=(e,{isLimitExceeded:t})=>{const{elFormItem:n}=Ua(),{emit:o}=nt();function r(a){var i,l;if(t.value)return;const c=a.target.checked?(i=e.trueLabel)!=null?i:!0:(l=e.falseLabel)!=null?l:!1;o("change",c,a)}return ge(()=>e.modelValue,()=>{var a;(a=n.validate)==null||a.call(n,"change").catch(i=>void 0)}),{handleChange:r}},T0=e=>{const{model:t,isLimitExceeded:n}=gP(e),{focus:o,size:r,isChecked:a,checkboxSize:i}=bP(e,{model:t}),{isDisabled:l}=vP(e,{model:t,isChecked:a}),{handleChange:s}=_P(e,{isLimitExceeded:n});return yP(e,{model:t}),{isChecked:a,isDisabled:l,checkboxSize:i,model:t,handleChange:s,focus:o,size:r}},wP=ee({name:"ElCheckbox",props:{modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:{type:String,validator:Nn},tabindex:[String,Number]},emits:[tt,"change"],setup(e){const t=ke("checkbox");return he({ns:t},T0(e))}}),xP=["id","aria-controls"],kP=["tabindex","role","aria-checked"],TP=["aria-hidden","name","tabindex","disabled","true-value","false-value"],CP=["aria-hidden","disabled","value","name","tabindex"];function SP(e,t,n,o,r,a){return w(),I("label",{id:e.id,class:S([e.ns.b(),e.ns.m(e.checkboxSize),e.ns.is("disabled",e.isDisabled),e.ns.is("bordered",e.border),e.ns.is("checked",e.isChecked)]),"aria-controls":e.indeterminate?e.controls:null},[M("span",{class:S([e.ns.e("input"),e.ns.is("disabled",e.isDisabled),e.ns.is("checked",e.isChecked),e.ns.is("indeterminate",e.indeterminate),e.ns.is("focus",e.focus)]),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":!1},[M("span",{class:S(e.ns.e("inner"))},null,2),e.trueLabel||e.falseLabel?Ue((w(),I("input",{key:0,"onUpdate:modelValue":t[0]||(t[0]=i=>e.model=i),class:S(e.ns.e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:t[1]||(t[1]=(...i)=>e.handleChange&&e.handleChange(...i)),onFocus:t[2]||(t[2]=i=>e.focus=!0),onBlur:t[3]||(t[3]=i=>e.focus=!1)},null,42,TP)),[[vs,e.model]]):Ue((w(),I("input",{key:1,"onUpdate:modelValue":t[4]||(t[4]=i=>e.model=i),class:S(e.ns.e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:e.isDisabled,value:e.label,name:e.name,tabindex:e.tabindex,onChange:t[5]||(t[5]=(...i)=>e.handleChange&&e.handleChange(...i)),onFocus:t[6]||(t[6]=i=>e.focus=!0),onBlur:t[7]||(t[7]=i=>e.focus=!1)},null,42,CP)),[[vs,e.model]])],10,kP),e.$slots.default||e.label?(w(),I("span",{key:0,class:S(e.ns.e("label"))},[ue(e.$slots,"default"),e.$slots.default?G("v-if",!0):(w(),I(Fe,{key:0},[it(ve(e.label),1)],2112))],2)):G("v-if",!0)],10,xP)}var $P=_e(wP,[["render",SP],["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const AP=ee({name:"ElCheckboxButton",props:mP,emits:[tt,"change"],setup(e){const{focus:t,isChecked:n,isDisabled:o,size:r,model:a,handleChange:i}=T0(e),{checkboxGroup:l}=Ua(),s=ke("checkbox"),c=C(()=>{var d,u,p,f;const h=(u=(d=l==null?void 0:l.fill)==null?void 0:d.value)!=null?u:"";return{backgroundColor:h,borderColor:h,color:(f=(p=l==null?void 0:l.textColor)==null?void 0:p.value)!=null?f:"",boxShadow:h?`-1px 0 0 0 ${h}`:null}});return{focus:t,isChecked:n,isDisabled:o,model:a,handleChange:i,activeStyle:c,size:r,ns:s}}}),EP=["aria-checked","aria-disabled"],zP=["name","tabindex","disabled","true-value","false-value"],IP=["name","tabindex","disabled","value"];function NP(e,t,n,o,r,a){return w(),I("label",{class:S([e.ns.b("button"),e.ns.bm("button",e.size),e.ns.is("disabled",e.isDisabled),e.ns.is("checked",e.isChecked),e.ns.is("focus",e.focus)]),role:"checkbox","aria-checked":e.isChecked,"aria-disabled":e.isDisabled},[e.trueLabel||e.falseLabel?Ue((w(),I("input",{key:0,"onUpdate:modelValue":t[0]||(t[0]=i=>e.model=i),class:S(e.ns.be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:t[1]||(t[1]=(...i)=>e.handleChange&&e.handleChange(...i)),onFocus:t[2]||(t[2]=i=>e.focus=!0),onBlur:t[3]||(t[3]=i=>e.focus=!1)},null,42,zP)),[[vs,e.model]]):Ue((w(),I("input",{key:1,"onUpdate:modelValue":t[4]||(t[4]=i=>e.model=i),class:S(e.ns.be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,value:e.label,onChange:t[5]||(t[5]=(...i)=>e.handleChange&&e.handleChange(...i)),onFocus:t[6]||(t[6]=i=>e.focus=!0),onBlur:t[7]||(t[7]=i=>e.focus=!1)},null,42,IP)),[[vs,e.model]]),e.$slots.default||e.label?(w(),I("span",{key:2,class:S(e.ns.be("button","inner")),style:Oe(e.isChecked?e.activeStyle:null)},[ue(e.$slots,"default",{},()=>[it(ve(e.label),1)])],6)):G("v-if",!0)],10,EP)}var C0=_e(AP,[["render",NP],["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const MP=ee({name:"ElCheckboxGroup",props:{modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:{type:String,validator:Nn},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"}},emits:[tt,"change"],setup(e,{emit:t,slots:n}){const{elFormItem:o}=Ua(),r=Ut(),a=ke("checkbox"),i=s=>{t(tt,s),je(()=>{t("change",s)})},l=C({get(){return e.modelValue},set(s){i(s)}});return ot("CheckboxGroup",ze(he({name:"ElCheckboxGroup",modelValue:l},Gt(e)),{checkboxGroupSize:r,changeEvent:i})),ge(()=>e.modelValue,()=>{var s;(s=o.validate)==null||s.call(o,"change").catch(c=>void 0)}),()=>Re(e.tag,{class:a.b("group"),role:"group","aria-label":"checkbox-group"},[ue(n,"default")])}});var S0=_e(MP,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const lo=rt($P,{CheckboxButton:C0,CheckboxGroup:S0}),RP=Dt(C0),$0=Dt(S0),A0=Le({size:dc,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),PP=Le(ze(he({},A0),{modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean})),E0={[tt]:e=>Qe(e)||mt(e)||on(e),change:e=>Qe(e)||mt(e)||on(e)},z0=(e,t)=>{const n=A(),o=Ie(fy,void 0),r=C(()=>!!o),a=C({get(){return r.value?o.modelValue:e.modelValue},set(d){r.value?o.changeEvent(d):t(tt,d),n.value.checked=e.modelValue===e.label}}),i=Ut(C(()=>o==null?void 0:o.size)),l=Zr(C(()=>o==null?void 0:o.disabled)),s=A(!1),c=C(()=>l.value||r.value&&a.value!==e.label?-1:0);return{radioRef:n,isGroup:r,radioGroup:o,focus:s,size:i,disabled:l,tabIndex:c,modelValue:a}},OP=ee({name:"ElRadio",props:PP,emits:E0,setup(e,{emit:t}){const n=ke("radio"),{radioRef:o,isGroup:r,focus:a,size:i,disabled:l,tabIndex:s,modelValue:c}=z0(e,t);function d(){je(()=>t("change",c.value))}return{ns:n,focus:a,isGroup:r,modelValue:c,tabIndex:s,size:i,disabled:l,radioRef:o,handleChange:d}}}),FP=["aria-checked","aria-disabled","tabindex"],DP=["value","name","disabled"];function LP(e,t,n,o,r,a){return w(),I("label",{class:S([e.ns.b(),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.is("bordered",e.border),e.ns.is("checked",e.modelValue===e.label),e.ns.m(e.size)]),role:"radio","aria-checked":e.modelValue===e.label,"aria-disabled":e.disabled,tabindex:e.tabIndex,onKeydown:t[5]||(t[5]=st(He(i=>e.modelValue=e.disabled?e.modelValue:e.label,["stop","prevent"]),["space"]))},[M("span",{class:S([e.ns.e("input"),e.ns.is("disabled",e.disabled),e.ns.is("checked",e.modelValue===e.label)])},[M("span",{class:S(e.ns.e("inner"))},null,2),Ue(M("input",{ref:"radioRef","onUpdate:modelValue":t[0]||(t[0]=i=>e.modelValue=i),class:S(e.ns.e("original")),value:e.label,type:"radio","aria-hidden":"true",name:e.name,disabled:e.disabled,tabindex:"-1",onFocus:t[1]||(t[1]=i=>e.focus=!0),onBlur:t[2]||(t[2]=i=>e.focus=!1),onChange:t[3]||(t[3]=(...i)=>e.handleChange&&e.handleChange(...i))},null,42,DP),[[Hb,e.modelValue]])],2),M("span",{class:S(e.ns.e("label")),onKeydown:t[4]||(t[4]=He(()=>{},["stop"]))},[ue(e.$slots,"default",{},()=>[it(ve(e.label),1)])],34)],42,FP)}var VP=_e(OP,[["render",LP],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const BP=Le(ze(he({},A0),{name:{type:String,default:""}})),jP=ee({name:"ElRadioButton",props:BP,setup(e,{emit:t}){const n=ke("radio"),{radioRef:o,isGroup:r,focus:a,size:i,disabled:l,tabIndex:s,modelValue:c,radioGroup:d}=z0(e,t),u=C(()=>({backgroundColor:(d==null?void 0:d.fill)||"",borderColor:(d==null?void 0:d.fill)||"",boxShadow:d!=null&&d.fill?`-1px 0 0 0 ${d.fill}`:"",color:(d==null?void 0:d.textColor)||""}));return{ns:n,isGroup:r,size:i,disabled:l,tabIndex:s,modelValue:c,focus:a,activeStyle:u,radioRef:o}}}),HP=["aria-checked","aria-disabled","tabindex"],qP=["value","name","disabled"];function KP(e,t,n,o,r,a){return w(),I("label",{class:S([e.ns.b("button"),e.ns.is("active",e.modelValue===e.label),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.bm("button",e.size)]),role:"radio","aria-checked":e.modelValue===e.label,"aria-disabled":e.disabled,tabindex:e.tabIndex,onKeydown:t[4]||(t[4]=st(He(i=>e.modelValue=e.disabled?e.modelValue:e.label,["stop","prevent"]),["space"]))},[Ue(M("input",{ref:"radioRef","onUpdate:modelValue":t[0]||(t[0]=i=>e.modelValue=i),class:S(e.ns.be("button","original-radio")),value:e.label,type:"radio",name:e.name,disabled:e.disabled,tabindex:"-1",onFocus:t[1]||(t[1]=i=>e.focus=!0),onBlur:t[2]||(t[2]=i=>e.focus=!1)},null,42,qP),[[Hb,e.modelValue]]),M("span",{class:S(e.ns.be("button","inner")),style:Oe(e.modelValue===e.label?e.activeStyle:{}),onKeydown:t[3]||(t[3]=He(()=>{},["stop"]))},[ue(e.$slots,"default",{},()=>[it(ve(e.label),1)])],38)],42,HP)}var I0=_e(jP,[["render",KP],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const WP=Le({size:dc,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},textColor:{type:String,default:""}}),UP=E0,YP=ee({name:"ElRadioGroup",props:WP,emits:UP,setup(e,t){const n=ke("radio"),o=A(),{formItem:r}=Ka(),a=l=>{t.emit(tt,l),je(()=>t.emit("change",l))},i=l=>{if(!o.value)return;const s=l.target,c=s.nodeName==="INPUT"?"[type=radio]":"[role=radio]",d=o.value.querySelectorAll(c),u=d.length,p=Array.from(d).indexOf(s),f=o.value.querySelectorAll("[role=radio]");let h=null;switch(l.code){case Pe.left:case Pe.up:l.stopPropagation(),l.preventDefault(),h=p===0?u-1:p-1;break;case Pe.right:case Pe.down:l.stopPropagation(),l.preventDefault(),h=p===u-1?0:p+1;break}h!==null&&(f[h].click(),f[h].focus())};return et(()=>{const l=o.value.querySelectorAll("[type=radio]"),s=l[0];!Array.from(l).some(c=>c.checked)&&s&&(s.tabIndex=0)}),ot(fy,vt(ze(he({},Gt(e)),{changeEvent:a}))),ge(()=>e.modelValue,()=>r==null?void 0:r.validate("change").catch(l=>void 0)),{ns:n,radioGroupRef:o,handleKeydown:i}}});function GP(e,t,n,o,r,a){return w(),I("div",{ref:"radioGroupRef",class:S(e.ns.b("group")),role:"radiogroup",onKeydown:t[0]||(t[0]=(...i)=>e.handleKeydown&&e.handleKeydown(...i))},[ue(e.$slots,"default")],34)}var N0=_e(YP,[["render",GP],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const M0=rt(VP,{RadioButton:I0,RadioGroup:N0}),XP=Dt(N0),ZP=Dt(I0);var JP=ee({name:"NodeContent",setup(){return{ns:ke("cascader-node")}},render(){const{ns:e}=this,{node:t,panel:n}=this.$parent,{data:o,label:r}=t,{renderLabelFn:a}=n;return Re("span",{class:e.e("label")},a?a({node:t,data:o}):r)}});const Ap=Symbol(),QP=ee({name:"ElCascaderNode",components:{ElCheckbox:lo,ElRadio:M0,NodeContent:JP,ElIcon:qe,Check:Ca,Loading:hr,ArrowRight:Yn},props:{node:{type:Object,required:!0},menuId:String},emits:["expand"],setup(e,{emit:t}){const n=Ie(Ap),o=ke("cascader-node"),r=C(()=>n.isHoverMenu),a=C(()=>n.config.multiple),i=C(()=>n.config.checkStrictly),l=C(()=>{var k;return(k=n.checkedNodes[0])==null?void 0:k.uid}),s=C(()=>e.node.isDisabled),c=C(()=>e.node.isLeaf),d=C(()=>i.value&&!c.value||!s.value),u=C(()=>f(n.expandingNode)),p=C(()=>i.value&&n.checkedNodes.some(f)),f=k=>{var $;const{level:z,uid:P}=e.node;return(($=k==null?void 0:k.pathNodes[z-1])==null?void 0:$.uid)===P},h=()=>{u.value||n.expandNode(e.node)},b=k=>{const{node:$}=e;k!==$.checked&&n.handleCheckChange($,k)},m=()=>{n.lazyLoad(e.node,()=>{c.value||h()})},g=k=>{!r.value||(v(),!c.value&&t("expand",k))},v=()=>{const{node:k}=e;!d.value||k.loading||(k.loaded?h():m())},y=()=>{r.value&&!c.value||(c.value&&!s.value&&!i.value&&!a.value?x(!0):v())},T=k=>{i.value?(b(k),e.node.loaded&&h()):x(k)},x=k=>{e.node.loaded?(b(k),!i.value&&h()):m()};return{panel:n,isHoverMenu:r,multiple:a,checkStrictly:i,checkedNodeId:l,isDisabled:s,isLeaf:c,expandable:d,inExpandingPath:u,inCheckedPath:p,ns:o,handleHoverExpand:g,handleExpand:v,handleClick:y,handleCheck:x,handleSelectCheck:T}}}),eO=["id","aria-haspopup","aria-owns","aria-expanded","tabindex"],tO=M("span",null,null,-1);function nO(e,t,n,o,r,a){const i=le("el-checkbox"),l=le("el-radio"),s=le("check"),c=le("el-icon"),d=le("node-content"),u=le("loading"),p=le("arrow-right");return w(),I("li",{id:`${e.menuId}-${e.node.uid}`,role:"menuitem","aria-haspopup":!e.isLeaf,"aria-owns":e.isLeaf?null:e.menuId,"aria-expanded":e.inExpandingPath,tabindex:e.expandable?-1:void 0,class:S([e.ns.b(),e.ns.is("selectable",e.checkStrictly),e.ns.is("active",e.node.checked),e.ns.is("disabled",!e.expandable),e.inExpandingPath&&"in-active-path",e.inCheckedPath&&"in-checked-path"]),onMouseenter:t[2]||(t[2]=(...f)=>e.handleHoverExpand&&e.handleHoverExpand(...f)),onFocus:t[3]||(t[3]=(...f)=>e.handleHoverExpand&&e.handleHoverExpand(...f)),onClick:t[4]||(t[4]=(...f)=>e.handleClick&&e.handleClick(...f))},[G(" prefix "),e.multiple?(w(),Q(i,{key:0,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:e.isDisabled,onClick:t[0]||(t[0]=He(()=>{},["stop"])),"onUpdate:modelValue":e.handleSelectCheck},null,8,["model-value","indeterminate","disabled","onUpdate:modelValue"])):e.checkStrictly?(w(),Q(l,{key:1,"model-value":e.checkedNodeId,label:e.node.uid,disabled:e.isDisabled,"onUpdate:modelValue":e.handleSelectCheck,onClick:t[1]||(t[1]=He(()=>{},["stop"]))},{default:K(()=>[G(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `),tO]),_:1},8,["model-value","label","disabled","onUpdate:modelValue"])):e.isLeaf&&e.node.checked?(w(),Q(c,{key:2,class:S(e.ns.e("prefix"))},{default:K(()=>[U(s)]),_:1},8,["class"])):G("v-if",!0),G(" content "),U(d),G(" postfix "),e.isLeaf?G("v-if",!0):(w(),I(Fe,{key:3},[e.node.loading?(w(),Q(c,{key:0,class:S([e.ns.is("loading"),e.ns.e("postfix")])},{default:K(()=>[U(u)]),_:1},8,["class"])):(w(),Q(c,{key:1,class:S(["arrow-right",e.ns.e("postfix")])},{default:K(()=>[U(p)]),_:1},8,["class"]))],2112))],42,eO)}var oO=_e(QP,[["render",nO],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/node.vue"]]);const rO=ee({name:"ElCascaderMenu",components:{Loading:hr,ElIcon:qe,ElScrollbar:qo,ElCascaderNode:oO},props:{nodes:{type:Array,required:!0},index:{type:Number,required:!0}},setup(e){const t=nt(),n=ke("cascader-menu"),{t:o}=Tt(),r=al();let a=null,i=null;const l=Ie(Ap),s=A(null),c=C(()=>!e.nodes.length),d=C(()=>!l.initialLoaded),u=C(()=>`cascader-menu-${r}-${e.index}`),p=m=>{a=m.target},f=m=>{if(!(!l.isHoverMenu||!a||!s.value))if(a.contains(m.target)){h();const g=t.vnode.el,{left:v}=g.getBoundingClientRect(),{offsetWidth:y,offsetHeight:T}=g,x=m.clientX-v,k=a.offsetTop,$=k+a.offsetHeight;s.value.innerHTML=`
          <path style="pointer-events: auto;" fill="transparent" d="M${x} ${k} L${y} 0 V${k} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${x} ${$} L${y} ${T} V${$} Z" />
          M 50 50
          m 0 ${v?"":"-"}${g}
          a ${g} ${g} 0 1 1 0 ${v?"-":""}${g*2}
          a ${g} ${g} 0 1 1 0 ${v?"":"-"}${g*2}
          `}),i=C(()=>2*Math.PI*r.value),l=C(()=>e.type==="dashboard"?.75:1),s=C(()=>`${-1*i.value*(1-l.value)/2}px`),c=C(()=>({strokeDasharray:`${i.value*l.value}px, ${i.value}px`,strokeDashoffset:s.value})),d=C(()=>({strokeDasharray:`${i.value*l.value*(e.percentage/100)}px, ${i.value}px`,strokeDashoffset:s.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"})),u=C(()=>{let g;if(e.color)g=b(e.percentage);else switch(e.status){case"success":g="#13ce66";break;case"exception":g="#ff4949";break;case"warning":g="#e6a23c";break;default:g="#20a0ff"}return g}),p=C(()=>e.status==="warning"?ji:e.type==="line"?e.status==="success"?Ss:Oo:e.status==="success"?Ca:Hn),f=C(()=>e.type==="line"?12+e.strokeWidth*.4:e.width*.111111+2),h=C(()=>e.format(e.percentage)),b=g=>{var v;const{color:y}=e;if(typeof y=="function")return y(g);if(typeof y=="string")return y;{const T=100/y.length,k=y.map(($,z)=>typeof $=="string"?{color:$,percentage:(z+1)*T}:$).sort(($,z)=>$.percentage-z.percentage);for(const $ of k)if($.percentage>g)return $.color;return(v=k[k.length-1])==null?void 0:v.color}},m=C(()=>({percentage:e.percentage}));return{ns:t,barStyle:n,relativeStrokeWidth:o,radius:r,trackPath:a,perimeter:i,rate:l,strokeDashoffset:s,trailPathStyle:c,circlePathStyle:d,stroke:u,statusIcon:p,progressTextSize:f,content:h,slotData:m}}}),Zj=["aria-valuenow"],Jj={viewBox:"0 0 100 100"},Qj=["d","stroke-width"],eH=["d","stroke","stroke-linecap","stroke-width"],tH={key:0};function nH(e,t,n,o,r,a){const i=le("el-icon");return w(),I("div",{class:S([e.ns.b(),e.ns.m(e.type),e.ns.is(e.status),{[e.ns.m("without-text")]:!e.showText,[e.ns.m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[e.type==="line"?(w(),I("div",{key:0,class:S(e.ns.b("bar"))},[M("div",{class:S(e.ns.be("bar","outer")),style:Oe({height:`${e.strokeWidth}px`})},[M("div",{class:S([e.ns.be("bar","inner"),{[e.ns.bem("bar","inner","indeterminate")]:e.indeterminate}]),style:Oe(e.barStyle)},[(e.showText||e.$slots.default)&&e.textInside?(w(),I("div",{key:0,class:S(e.ns.be("bar","innerText"))},[ue(e.$slots,"default",eo(ur(e.slotData)),()=>[M("span",null,ve(e.content),1)])],2)):G("v-if",!0)],6)],6)],2)):(w(),I("div",{key:1,class:S(e.ns.b("circle")),style:Oe({height:`${e.width}px`,width:`${e.width}px`})},[(w(),I("svg",Jj,[M("path",{class:S(e.ns.be("circle","track")),d:e.trackPath,stroke:"var(--el-fill-color-light, #e5e9f2)","stroke-width":e.relativeStrokeWidth,fill:"none",style:Oe(e.trailPathStyle)},null,14,Qj),M("path",{class:S(e.ns.be("circle","path")),d:e.trackPath,stroke:e.stroke,fill:"none","stroke-linecap":e.strokeLinecap,"stroke-width":e.percentage?e.relativeStrokeWidth:0,style:Oe(e.circlePathStyle)},null,14,eH)]))],6)),(e.showText||e.$slots.default)&&!e.textInside?(w(),I("div",{key:2,class:S(e.ns.e("text")),style:Oe({fontSize:`${e.progressTextSize}px`})},[ue(e.$slots,"default",eo(ur(e.slotData)),()=>[e.status?(w(),Q(i,{key:1},{default:K(()=>[(w(),Q(pt(e.statusIcon)))]),_:1})):(w(),I("span",tH,ve(e.content),1))])],6)):G("v-if",!0)],10,Zj)}var oH=_e(Xj,[["render",nH],["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const k_=rt(oH),rH=Le({modelValue:{type:Number,default:0},lowThreshold:{type:Number,default:2},highThreshold:{type:Number,default:4},max:{type:Number,default:5},colors:{type:Te([Array,Object]),default:()=>Ft(["","",""])},voidColor:{type:String,default:""},disabledVoidColor:{type:String,default:""},icons:{type:Te([Array,Object]),default:()=>[Tl,Tl,Tl]},voidIcon:{type:an,default:()=>nz},disabledVoidIcon:{type:an,default:()=>Tl},disabled:{type:Boolean,default:!1},allowHalf:{type:Boolean,default:!1},showText:{type:Boolean,default:!1},showScore:{type:Boolean,default:!1},textColor:{type:String,default:""},texts:{type:Te(Array),default:()=>Ft(["Extremely bad","Disappointed","Fair","Satisfied","Surprise"])},scoreTemplate:{type:String,default:"{value}"},size:{type:String,validator:Nn}}),aH={change:e=>typeof e=="number",[tt]:e=>typeof e=="number"},iH=["aria-valuenow","aria-valuetext","aria-valuemax"],lH=["onMousemove","onClick"],sH={name:"ElRate"},cH=ee(ze(he({},sH),{props:rH,emits:aH,setup(e,{expose:t,emit:n}){const o=e;function r(F,V){const q=N=>ut(N),R=Object.keys(V).map(N=>+N).filter(N=>{const W=V[N];return(q(W)?W.excluded:!1)?F<N:F<=N}).sort((N,W)=>N-W),E=V[R[0]];return q(E)&&E.value||E}const a=Ie(Mn,void 0),i=Ut(),l=ke("rate"),s=A(o.modelValue),c=A(-1),d=A(!0),u=C(()=>[l.b(),l.m(i.value)]),p=C(()=>o.disabled||(a==null?void 0:a.disabled)),f=C(()=>({"--el-rate-void-color":o.voidColor,"--el-rate-disabled-void-color":o.disabledVoidColor,"--el-rate-fill-color":g.value})),h=C(()=>{let F="";return o.showScore?F=o.scoreTemplate.replace(/\{\s*value\s*\}/,p.value?`${o.modelValue}`:`${s.value}`):o.showText&&(F=o.texts[Math.ceil(s.value)-1]),F}),b=C(()=>o.modelValue*100-Math.floor(o.modelValue)*100),m=C(()=>Ye(o.colors)?{[o.lowThreshold]:o.colors[0],[o.highThreshold]:{value:o.colors[1],excluded:!0},[o.max]:o.colors[2]}:o.colors),g=C(()=>{const F=r(s.value,m.value);return ut(F)?"":F}),v=C(()=>{let F="";return p.value?F=`${b.value}%`:o.allowHalf&&(F="50%"),{color:g.value,width:F}}),y=C(()=>Ye(o.icons)?{[o.lowThreshold]:o.icons[0],[o.highThreshold]:{value:o.icons[1],excluded:!0},[o.max]:o.icons[2]}:o.icons),T=C(()=>r(o.modelValue,y.value)),x=C(()=>p.value?o.disabledVoidIcon:o.voidIcon),k=C(()=>r(s.value,y.value)),$=C(()=>{const F=Array.from({length:o.max}),V=s.value;return F.fill(k.value,0,V),F.fill(x.value,V,o.max),F});function z(F){const V=p.value&&b.value>0&&F-1<o.modelValue&&F>o.modelValue,q=o.allowHalf&&d.value&&F-.5<=s.value&&F>s.value;return V||q}function P(F){p.value||(o.allowHalf&&d.value?(n(tt,s.value),o.modelValue!==s.value&&n("change",s.value)):(n(tt,F),o.modelValue!==F&&n("change",F)))}function O(F){if(p.value)return;let V=s.value;const q=F.code;return q===Pe.up||q===Pe.right?(o.allowHalf?V+=.5:V+=1,F.stopPropagation(),F.preventDefault()):(q===Pe.left||q===Pe.down)&&(o.allowHalf?V-=.5:V-=1,F.stopPropagation(),F.preventDefault()),V=V<0?0:V,V=V>o.max?o.max:V,n(tt,V),n("change",V),V}function D(F,V){if(!p.value){if(o.allowHalf){let q=V.target;oo(q,l.e("item"))&&(q=q.querySelector(`.${l.e("icon")}`)),(q.clientWidth===0||oo(q,l.e("decimal")))&&(q=q.parentNode),d.value=V.offsetX*2<=q.clientWidth,s.value=d.value?F-.5:F}else s.value=F;c.value=F}}function L(){p.value||(o.allowHalf&&(d.value=o.modelValue!==Math.floor(o.modelValue)),s.value=o.modelValue,c.value=-1)}return ge(()=>o.modelValue,F=>{s.value=F,d.value=o.modelValue!==Math.floor(o.modelValue)}),o.modelValue||n(tt,0),t({setCurrentValue:D,resetCurrentValue:L}),(F,V)=>(w(),I("div",{class:S([_(u),_(l).is("disabled",_(p))]),role:"slider","aria-valuenow":s.value,"aria-valuetext":_(h),"aria-valuemin":"0","aria-valuemax":F.max,tabindex:"0",style:Oe(_(f)),onKeydown:O},[(w(!0),I(Fe,null,ct(F.max,(q,R)=>(w(),I("span",{key:R,class:S(_(l).e("item")),onMousemove:E=>D(q,E),onMouseleave:L,onClick:E=>P(q)},[U(_(qe),{class:S([_(l).e("icon"),{hover:c.value===q},_(l).is("active",q<=s.value)])},{default:K(()=>[z(q)?G("v-if",!0):(w(),Q(pt(_($)[q-1]),{key:0})),z(q)?(w(),Q(_(qe),{key:1,style:Oe(_(v)),class:S([_(l).e("icon"),_(l).e("decimal")])},{default:K(()=>[(w(),Q(pt(_(T))))]),_:1},8,["style","class"])):G("v-if",!0)]),_:2},1032,["class"])],42,lH))),128)),F.showText||F.showScore?(w(),I("span",{key:0,class:S(_(l).e("text"))},ve(_(h)),3)):G("v-if",!0)],46,iH))}}));var dH=_e(cH,[["__file","/home/runner/work/element-plus/element-plus/packages/components/rate/src/rate.vue"]]);const uH=rt(dH),ca={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},dg={[ca.success]:_A,[ca.warning]:ji,[ca.error]:ip,[ca.info]:lp},pH=Le({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{values:["success","warning","info","error"],default:"info"}}),ug="ElResult",fH=ee({name:ug,props:pH,setup(e,{slots:t}){const n=ke("result");il({scope:ug,type:"Slot",from:"subTitle",replacement:"sub-title",version:"2.1.3",ref:"https://github.com/element-plus/element-plus/pull/6636/"},C(()=>!!t.subTitle));const o=C(()=>{const r=e.icon,a=r&&ca[r]?ca[r]:"icon-info",i=dg[a]||dg["icon-info"];return{class:a,component:i}});return{ns:n,resultIcon:o}}});function hH(e,t,n,o,r,a){return w(),I("div",{class:S(e.ns.b())},[M("div",{class:S(e.ns.e("icon"))},[ue(e.$slots,"icon",{},()=>[e.resultIcon.component?(w(),Q(pt(e.resultIcon.component),{key:0,class:S(e.resultIcon.class)},null,8,["class"])):G("v-if",!0)])],2),e.title||e.$slots.title?(w(),I("div",{key:0,class:S(e.ns.e("title"))},[ue(e.$slots,"title",{},()=>[M("p",null,ve(e.title),1)])],2)):G("v-if",!0),e.subTitle||e.$slots["sub-title"]?(w(),I("div",{key:1,class:S(e.ns.e("subtitle"))},[ue(e.$slots,"sub-title",{},()=>[M("p",null,ve(e.subTitle),1)])],2)):G("v-if",!0),e.$slots.extra?(w(),I("div",{key:2,class:S(e.ns.e("extra"))},[ue(e.$slots,"extra")],2)):G("v-if",!0)],2)}var mH=_e(fH,[["render",hH],["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]);const gH=rt(mH),bH=Le({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"],default:"top"}}),vH=ee({name:"ElRow",props:bH,setup(e,{slots:t}){const n=ke("row"),o=C(()=>e.gutter);ot(hy,{gutter:o});const r=C(()=>{const a={marginLeft:"",marginRight:""};return e.gutter&&(a.marginLeft=`-${e.gutter/2}px`,a.marginRight=a.marginLeft),a});return()=>U(e.tag,{class:[n.b(),n.is(`justify-${e.justify}`,e.justify!=="start"),n.is(`align-${e.align}`,e.align!=="top")],style:r.value},{default:()=>{var a;return[(a=t.default)==null?void 0:a.call(t)]}})}}),yH=rt(vH);var pg=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function _H(e,t){return!!(e===t||pg(e)&&pg(t))}function wH(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!_H(e[n],t[n]))return!1;return!0}function xH(e,t){t===void 0&&(t=wH);var n=null;function o(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];if(n&&n.lastThis===this&&t(r,n.lastArgs))return n.lastResult;var i=e.apply(this,r);return n={lastResult:i,lastArgs:r,lastThis:this},i}return o.clear=function(){n=null},o}const kH=()=>{const t=nt().proxy.$props;return C(()=>{const n=(o,r,a)=>({});return t.perfMode?ec(n):xH(n)})},TH=50,fg="item-rendered",hg="scroll",T_="forward",C_="backward",Yi="auto",S_="smart",$_="start",Is="center",A_="end",Ma="horizontal",Vp="vertical",CH="ltr",ts="rtl",E_="negative",SH="positive-ascending",z_="positive-descending",$H={[Ma]:"left",[Vp]:"top"},AH=20,EH={[Ma]:"deltaX",[Vp]:"deltaY"},zH=({atEndEdge:e,atStartEdge:t,layout:n},o)=>{let r,a=0;const i=s=>s<0&&t.value||s>0&&e.value;return{hasReachedEdge:i,onWheel:s=>{ay(r);const c=s[EH[n.value]];i(a)&&i(a+c)||(a+=c,cp()||s.preventDefault(),r=ry(()=>{o(a),a=0}))}}},ou=uo({type:Te([Number,Function]),required:!0}),ru=uo({type:Number}),au=uo({type:Number,default:2}),IH=uo({type:String,values:["ltr","rtl"],default:"ltr"}),iu=uo({type:Number,default:0}),Ns=uo({type:Number,required:!0}),I_=uo({type:String,values:["horizontal","vertical"],default:Vp}),N_=Le({className:{type:String,default:""},containerElement:{type:Te([String,Object]),default:"div"},data:{type:Te(Array),default:()=>Ft([])},direction:IH,height:{type:[String,Number],required:!0},innerElement:{type:[String,Object],default:"div"},style:{type:Te([Object,String,Array])},useIsScrolling:{type:Boolean,default:!1},width:{type:[Number,String],required:!1},perfMode:{type:Boolean,default:!0},scrollbarAlwaysOn:{type:Boolean,default:!1}}),NH=Le(he({cache:au,estimatedItemSize:ru,layout:I_,initScrollOffset:iu,total:Ns,itemSize:ou},N_));Le(he({columnCache:au,columnWidth:ou,estimatedColumnWidth:ru,estimatedRowHeight:ru,initScrollLeft:iu,initScrollTop:iu,rowCache:au,rowHeight:ou,totalColumn:Ns,totalRow:Ns},N_));const MH=Le({layout:I_,total:Ns,ratio:{type:Number,required:!0},clientSize:{type:Number,required:!0},scrollFrom:{type:Number,required:!0},visible:Boolean}),Jc=(e,t)=>e<t?T_:C_,Gi=e=>e===CH||e===ts||e===Ma;let oa=null;function mg(e=!1){if(oa===null||e){const t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";const o=document.createElement("div"),r=o.style;return r.width="100px",r.height="100px",t.appendChild(o),document.body.appendChild(t),t.scrollLeft>0?oa=z_:(t.scrollLeft=1,t.scrollLeft===0?oa=E_:oa=SH),document.body.removeChild(t),oa}return oa}function RH({move:e,size:t,bar:n},o){const r={},a=`translate${n.axis}(${e}px)`;return r[n.size]=t,r.transform=a,r.msTransform=a,r.webkitTransform=a,o==="horizontal"?r.height="100%":r.width="100%",r}const PH=ee({name:"ElVirtualScrollBar",props:MH,emits:["scroll","start-move","stop-move"],setup(e,{emit:t}){const o=A(),r=A();let a=null,i=null;const l=vt({isDragging:!1,traveled:0}),s=C(()=>Oy[e.layout]),c=C(()=>e.clientSize-4),d=C(()=>({position:"absolute",width:Ma===e.layout?`${c.value}px`:"6px",height:Ma===e.layout?"6px":`${c.value}px`,[$H[e.layout]]:"2px",right:"2px",bottom:"2px",borderRadius:"4px"})),u=C(()=>{const x=e.ratio,k=e.clientSize;if(x>=100)return Number.POSITIVE_INFINITY;if(x>=50)return x*k/100;const $=k/3;return Math.floor(Math.min(Math.max(x*k,AH),$))}),p=C(()=>{if(!Number.isFinite(u.value))return{display:"none"};const x=`${u.value}px`;return RH({bar:s.value,size:x,move:l.traveled},e.layout)}),f=C(()=>Math.floor(e.clientSize-u.value-4)),h=()=>{At(window,"mousemove",v),At(window,"mouseup",g);const x=_(r);!x||(i=document.onselectstart,document.onselectstart=()=>!1,At(x,"touchmove",v),At(x,"touchend",g))},b=()=>{Bt(window,"mousemove",v),Bt(window,"mouseup",g),document.onselectstart=i,i=null;const x=_(r);!x||(Bt(x,"touchmove",v),Bt(x,"touchend",g))},m=x=>{x.stopImmediatePropagation(),!(x.ctrlKey||[1,2].includes(x.button))&&(l.isDragging=!0,l[s.value.axis]=x.currentTarget[s.value.offset]-(x[s.value.client]-x.currentTarget.getBoundingClientRect()[s.value.direction]),t("start-move"),h())},g=()=>{l.isDragging=!1,l[s.value.axis]=0,t("stop-move"),b()},v=x=>{const{isDragging:k}=l;if(!k||!r.value||!o.value)return;const $=l[s.value.axis];if(!$)return;ay(a);const z=(o.value.getBoundingClientRect()[s.value.direction]-x[s.value.client])*-1,P=r.value[s.value.offset]-$,O=z-P;a=ry(()=>{l.traveled=Math.max(0,Math.min(O,f.value)),t("scroll",O,f.value)})},y=x=>{const k=Math.abs(x.target.getBoundingClientRect()[s.value.direction]-x[s.value.client]),$=r.value[s.value.offset]/2,z=k-$;l.traveled=Math.max(0,Math.min(z,f.value)),t("scroll",z,f.value)},T=x=>x.preventDefault();return ge(()=>e.scrollFrom,x=>{l.isDragging||(l.traveled=Math.ceil(x*f.value))}),et(()=>{!dt||(At(o.value,"touchstart",T),At(r.value,"touchstart",m))}),$t(()=>{Bt(o.value,"touchstart",T),b()}),()=>Re("div",{role:"presentation",ref:o,class:"el-virtual-scrollbar",style:d.value,onMousedown:He(y,["stop","prevent"])},Re("div",{ref:r,class:"el-scrollbar__thumb",style:p.value,onMousedown:m},[]))}}),M_=({name:e,getOffset:t,getItemSize:n,getItemOffset:o,getEstimatedTotalSize:r,getStartIndexForOffset:a,getStopIndexForStartIndex:i,initCache:l,clearCache:s,validateProps:c})=>ee({name:e!=null?e:"ElVirtualList",props:NH,emits:[fg,hg],setup(d,{emit:u,expose:p}){c(d);const f=nt(),h=A(l(d,f)),b=kH(),m=A(),g=A(),v=A(),y=A({isScrolling:!1,scrollDir:"forward",scrollOffset:mt(d.initScrollOffset)?d.initScrollOffset:0,updateRequested:!1,isScrollbarDragging:!1,scrollbarAlwaysOn:d.scrollbarAlwaysOn}),T=C(()=>{const{total:Z,cache:se}=d,{isScrolling:Se,scrollDir:oe,scrollOffset:H}=_(y);if(Z===0)return[0,0,0,0];const ne=a(d,H,_(h)),ie=i(d,ne,H,_(h)),be=!Se||oe===C_?Math.max(1,se):1,$e=!Se||oe===T_?Math.max(1,se):1;return[Math.max(0,ne-be),Math.max(0,Math.min(Z-1,ie+$e)),ne,ie]}),x=C(()=>r(d,_(h))),k=C(()=>Gi(d.layout)),$=C(()=>[{position:"relative",[`overflow-${k.value?"x":"y"}`]:"scroll",WebkitOverflowScrolling:"touch",willChange:"transform"},{direction:d.direction,height:mt(d.height)?`${d.height}px`:d.height,width:mt(d.width)?`${d.width}px`:d.width},d.style]),z=C(()=>{const Z=_(x),se=_(k);return{height:se?"100%":`${Z}px`,pointerEvents:_(y).isScrolling?"none":void 0,width:se?`${Z}px`:"100%"}}),P=C(()=>k.value?d.width:d.height),{onWheel:O}=zH({atStartEdge:C(()=>y.value.scrollOffset<=0),atEndEdge:C(()=>y.value.scrollOffset>=x.value),layout:C(()=>d.layout)},Z=>{var se,Se;(Se=(se=v.value).onMouseUp)==null||Se.call(se),R(Math.min(y.value.scrollOffset+Z,x.value-P.value))}),D=()=>{const{total:Z}=d;if(Z>0){const[H,ne,ie,be]=_(T);u(fg,H,ne,ie,be)}const{scrollDir:se,scrollOffset:Se,updateRequested:oe}=_(y);u(hg,se,Se,oe)},L=Z=>{const{clientHeight:se,scrollHeight:Se,scrollTop:oe}=Z.currentTarget,H=_(y);if(H.scrollOffset===oe)return;const ne=Math.max(0,Math.min(oe,Se-se));y.value=ze(he({},H),{isScrolling:!0,scrollDir:Jc(H.scrollOffset,ne),scrollOffset:ne,updateRequested:!1}),je(W)},F=Z=>{const{clientWidth:se,scrollLeft:Se,scrollWidth:oe}=Z.currentTarget,H=_(y);if(H.scrollOffset===Se)return;const{direction:ne}=d;let ie=Se;if(ne===ts)switch(mg()){case E_:{ie=-Se;break}case z_:{ie=oe-se-Se;break}}ie=Math.max(0,Math.min(ie,oe-se)),y.value=ze(he({},H),{isScrolling:!0,scrollDir:Jc(H.scrollOffset,ie),scrollOffset:ie,updateRequested:!1}),je(W)},V=Z=>{_(k)?F(Z):L(Z),D()},q=(Z,se)=>{const Se=(x.value-P.value)/se*Z;R(Math.min(x.value-P.value,Se))},R=Z=>{Z=Math.max(Z,0),Z!==_(y).scrollOffset&&(y.value=ze(he({},_(y)),{scrollOffset:Z,scrollDir:Jc(_(y).scrollOffset,Z),updateRequested:!0}),je(W))},E=(Z,se=Yi)=>{const{scrollOffset:Se}=_(y);Z=Math.max(0,Math.min(Z,d.total-1)),R(t(d,Z,se,Se,_(h)))},N=Z=>{const{direction:se,itemSize:Se,layout:oe}=d,H=b.value(s&&Se,s&&oe,s&&se);let ne;if(lt(H,String(Z)))ne=H[Z];else{const ie=o(d,Z,_(h)),be=n(d,Z,_(h)),$e=_(k),Ne=se===ts,Me=$e?ie:0;H[Z]=ne={position:"absolute",left:Ne?void 0:`${Me}px`,right:Ne?`${Me}px`:void 0,top:$e?0:`${ie}px`,height:$e?"100%":`${be}px`,width:$e?`${be}px`:"100%"}}return ne},W=()=>{y.value.isScrolling=!1,je(()=>{b.value(-1,null,null)})},Y=()=>{const Z=m.value;Z&&(Z.scrollTop=0)};et(()=>{if(!dt)return;const{initScrollOffset:Z}=d,se=_(m);mt(Z)&&se&&(_(k)?se.scrollLeft=Z:se.scrollTop=Z),D()}),Un(()=>{const{direction:Z,layout:se}=d,{scrollOffset:Se,updateRequested:oe}=_(y),H=_(m);if(oe&&H)if(se===Ma)if(Z===ts)switch(mg()){case"negative":{H.scrollLeft=-Se;break}case"positive-ascending":{H.scrollLeft=Se;break}default:{const{clientWidth:ne,scrollWidth:ie}=H;H.scrollLeft=ie-ne-Se;break}}else H.scrollLeft=Se;else H.scrollTop=Se});const J={clientSize:P,estimatedTotalSize:x,windowStyle:$,windowRef:m,innerRef:g,innerStyle:z,itemsToRender:T,scrollbarRef:v,states:y,getItemStyle:N,onScroll:V,onScrollbarScroll:q,onWheel:O,scrollTo:R,scrollToItem:E,resetScrollTop:Y};return p({windowRef:m,innerRef:g,getItemStyleCache:b,scrollTo:R,scrollToItem:E,resetScrollTop:Y,states:y}),J},render(d){var u;const{$slots:p,className:f,clientSize:h,containerElement:b,data:m,getItemStyle:g,innerElement:v,itemsToRender:y,innerStyle:T,layout:x,total:k,onScroll:$,onScrollbarScroll:z,onWheel:P,states:O,useIsScrolling:D,windowStyle:L}=d,[F,V]=y,q=pt(b),R=pt(v),E=[];if(k>0)for(let J=F;J<=V;J++)E.push((u=p.default)==null?void 0:u.call(p,{data:m,key:J,index:J,isScrolling:D?O.isScrolling:void 0,style:g(J)}));const N=[Re(R,{style:T,ref:"innerRef"},Qe(R)?E:{default:()=>E})],W=Re(PH,{ref:"scrollbarRef",clientSize:h,layout:x,onScroll:z,ratio:h*100/this.estimatedTotalSize,scrollFrom:O.scrollOffset/(this.estimatedTotalSize-h),total:k}),Y=Re(q,{class:["el-vl__window",f],style:L,onScroll:$,onWheel:P,ref:"windowRef",key:0},Qe(q)?[N]:{default:()=>[N]});return Re("div",{key:0,class:["el-vl__wrapper",O.scrollbarAlwaysOn?"always-on":""]},[Y,W])}}),R_=M_({name:"ElFixedSizeList",getItemOffset:({itemSize:e},t)=>t*e,getItemSize:({itemSize:e})=>e,getEstimatedTotalSize:({total:e,itemSize:t})=>t*e,getOffset:({height:e,total:t,itemSize:n,layout:o,width:r},a,i,l)=>{const s=Gi(o)?r:e,c=Math.max(0,t*n-s),d=Math.min(c,a*n),u=Math.max(0,(a+1)*n-s);switch(i===S_&&(l>=u-s&&l<=d+s?i=Yi:i=Is),i){case $_:return d;case A_:return u;case Is:{const p=Math.round(u+(d-u)/2);return p<Math.ceil(s/2)?0:p>c+Math.floor(s/2)?c:p}case Yi:default:return l>=u&&l<=d?l:l<u?u:d}},getStartIndexForOffset:({total:e,itemSize:t},n)=>Math.max(0,Math.min(e-1,Math.floor(n/t))),getStopIndexForStartIndex:({height:e,total:t,itemSize:n,layout:o,width:r},a,i)=>{const l=a*n,s=Gi(o)?r:e,c=Math.ceil((s+i-l)/n);return Math.max(0,Math.min(t-1,a+c-1))},initCache(){},clearCache:!0,validateProps(){}}),da=(e,t,n)=>{const{itemSize:o}=e,{items:r,lastVisitedIndex:a}=n;if(t>a){let i=0;if(a>=0){const l=r[a];i=l.offset+l.size}for(let l=a+1;l<=t;l++){const s=o(l);r[l]={offset:i,size:s},i+=s}n.lastVisitedIndex=t}return r[t]},OH=(e,t,n)=>{const{items:o,lastVisitedIndex:r}=t;return(r>0?o[r].offset:0)>=n?P_(e,t,0,r,n):FH(e,t,Math.max(0,r),n)},P_=(e,t,n,o,r)=>{for(;n<=o;){const a=n+Math.floor((o-n)/2),i=da(e,a,t).offset;if(i===r)return a;i<r?n=a+1:i>r&&(o=a-1)}return Math.max(0,n-1)},FH=(e,t,n,o)=>{const{total:r}=e;let a=1;for(;n<r&&da(e,n,t).offset<o;)n+=a,a*=2;return P_(e,t,Math.floor(n/2),Math.min(n,r-1),o)},gg=({total:e},{items:t,estimatedItemSize:n,lastVisitedIndex:o})=>{let r=0;if(o>=e&&(o=e-1),o>=0){const l=t[o];r=l.offset+l.size}const i=(e-o-1)*n;return r+i},DH=M_({name:"ElDynamicSizeList",getItemOffset:(e,t,n)=>da(e,t,n).offset,getItemSize:(e,t,{items:n})=>n[t].size,getEstimatedTotalSize:gg,getOffset:(e,t,n,o,r)=>{const{height:a,layout:i,width:l}=e,s=Gi(i)?l:a,c=da(e,t,r),d=gg(e,r),u=Math.max(0,Math.min(d-s,c.offset)),p=Math.max(0,c.offset-s+c.size);switch(n===S_&&(o>=p-s&&o<=u+s?n=Yi:n=Is),n){case $_:return u;case A_:return p;case Is:return Math.round(p+(u-p)/2);case Yi:default:return o>=p&&o<=u?o:o<p?p:u}},getStartIndexForOffset:(e,t,n)=>OH(e,n,t),getStopIndexForStartIndex:(e,t,n,o)=>{const{height:r,total:a,layout:i,width:l}=e,s=Gi(i)?l:r,c=da(e,t,o),d=n+s;let u=c.offset+c.size,p=t;for(;p<a-1&&u<d;)p++,u+=da(e,p,o).size;return p},initCache({estimatedItemSize:e=TH},t){const n={items:{},estimatedItemSize:e,lastVisitedIndex:-1};return n.clearCacheAfterIndex=(o,r=!0)=>{var a,i;n.lastVisitedIndex=Math.min(n.lastVisitedIndex,o-1),(a=t.exposed)==null||a.getItemStyleCache(-1),r&&((i=t.proxy)==null||i.$forceUpdate())},n},clearCache:!1,validateProps:({itemSize:e})=>{}}),LH=ee({props:{item:{type:Object,required:!0},style:Object,height:Number},setup(){return{ns:ke("select")}}});function VH(e,t,n,o,r,a){return e.item.isTitle?(w(),I("div",{key:0,class:S(e.ns.be("group","title")),style:Oe([e.style,{lineHeight:`${e.height}px`}])},ve(e.item.label),7)):(w(),I("div",{key:1,class:S(e.ns.be("group","split")),style:Oe(e.style)},[M("span",{class:S(e.ns.be("group","split-dash")),style:Oe({top:`${e.height/2}px`})},null,6)],6))}var BH=_e(LH,[["render",VH],["__file","/home/runner/work/element-plus/element-plus/packages/components/select-v2/src/group-item.vue"]]);function jH(e,{emit:t}){return{hoverItem:()=>{e.disabled||t("hover",e.index)},selectOptionClick:()=>{e.disabled||t("select",e.item,e.index)}}}const HH={allowCreate:Boolean,autocomplete:{type:String,default:"none"},automaticDropdown:Boolean,clearable:Boolean,clearIcon:{type:[String,Object],default:Oo},effect:{type:String,default:"light"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},defaultFirstOption:Boolean,disabled:Boolean,estimatedOptionHeight:{type:Number,default:void 0},filterable:Boolean,filterMethod:Function,height:{type:Number,default:170},itemHeight:{type:Number,default:34},id:String,loading:Boolean,loadingText:String,label:String,modelValue:[Array,String,Number,Boolean,Object],multiple:Boolean,multipleLimit:{type:Number,default:0},name:String,noDataText:String,noMatchText:String,remoteMethod:Function,reserveKeyword:{type:Boolean,default:!0},options:{type:Array,required:!0},placeholder:{type:String},popperAppendToBody:{type:Boolean,default:void 0},teleported:tn.teleported,persistent:{type:Boolean,default:!0},popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,size:{type:String,validator:Nn},valueKey:{type:String,default:"value"},scrollbarAlwaysOn:{type:Boolean,default:!1}},qH={data:Array,disabled:Boolean,hovering:Boolean,item:Object,index:Number,style:Object,selected:Boolean,created:Boolean},KH=ee({props:qH,emits:["select","hover"],setup(e,{emit:t}){const n=ke("select"),{hoverItem:o,selectOptionClick:r}=jH(e,{emit:t});return{ns:n,hoverItem:o,selectOptionClick:r}}}),WH=["aria-selected"];function UH(e,t,n,o,r,a){return w(),I("li",{"aria-selected":e.selected,style:Oe(e.style),class:S([e.ns.be("dropdown","option-item"),e.ns.is("selected",e.selected),e.ns.is("disabled",e.disabled),e.ns.is("created",e.created),{hover:e.hovering}]),onMouseenter:t[0]||(t[0]=(...i)=>e.hoverItem&&e.hoverItem(...i)),onClick:t[1]||(t[1]=He((...i)=>e.selectOptionClick&&e.selectOptionClick(...i),["stop"]))},[ue(e.$slots,"default",{item:e.item,index:e.index,disabled:e.disabled},()=>[M("span",null,ve(e.item.label),1)])],46,WH)}var YH=_e(KH,[["render",UH],["__file","/home/runner/work/element-plus/element-plus/packages/components/select-v2/src/option-item.vue"]]);const O_="ElSelectV2Injection",GH=ee({name:"ElSelectDropdown",props:{data:Array,hoveringIndex:Number,width:Number},setup(e){const t=Ie(O_),n=ke("select"),o=A([]),r=A(null),a=C(()=>Cn(t.props.estimatedOptionHeight)),i=C(()=>a.value?{itemSize:t.props.itemHeight}:{estimatedSize:t.props.estimatedOptionHeight,itemSize:h=>o.value[h]}),l=(h=[],b)=>{const{props:{valueKey:m}}=t;return ut(b)?h&&h.some(g=>Pt(g,m)===Pt(b,m)):h.includes(b)},s=(h,b)=>{if(ut(b)){const{valueKey:m}=t.props;return Pt(h,m)===Pt(b,m)}else return h===b};return{ns:n,select:t,listProps:i,listRef:r,isSized:a,isItemDisabled:(h,b)=>{const{disabled:m,multiple:g,multipleLimit:v}=t.props;return m||!b&&(g?v>0&&h.length>=v:!1)},isItemHovering:h=>e.hoveringIndex===h,isItemSelected:(h,b)=>{const{valueKey:m}=t.props;return t.props.multiple?l(h,Pt(b,m)):s(h,Pt(b,m))},scrollToItem:h=>{const b=r.value;b&&b.scrollToItem(h)},resetScrollTop:()=>{const h=r.value;h&&h.resetScrollTop()}}},render(e,t){var n;const{$slots:o,data:r,listProps:a,select:i,isSized:l,width:s,ns:c,isItemDisabled:d,isItemHovering:u,isItemSelected:p}=e,f=l?R_:DH,{props:h,onSelect:b,onHover:m,onKeyboardNavigate:g,onKeyboardSelect:v}=i,{height:y,modelValue:T,multiple:x}=h;if(r.length===0)return Re("div",{class:c.b("dropdown"),style:{width:`${s}px`}},(n=o.empty)==null?void 0:n.call(o));const k=K(z=>{const{index:P,data:O}=z,D=O[P];if(O[P].type==="Group")return Re(BH,{item:D,style:z.style,height:l?a.itemSize:a.estimatedSize});const L=p(T,D),F=d(T,L);return Re(YH,ze(he({},z),{selected:L,disabled:D.disabled||F,created:!!D.created,hovering:u(P),item:D,onSelect:b,onHover:m}),{default:K(V=>ue(o,"default",V,()=>[Re("span",D.label)]))})}),$=Re(f,he({ref:"listRef",className:c.be("dropdown","list"),data:r,height:y,width:s,total:r.length,scrollbarAlwaysOn:h.scrollbarAlwaysOn,onKeydown:[t[1]||(t[1]=st(He(()=>g("forward"),["stop","prevent"]),["down"])),t[2]||(t[2]=st(He(()=>g("backward"),["stop","prevent"]),["up"])),t[3]||(t[3]=st(He(v,["stop","prevent"]),["enter"])),t[4]||(t[4]=st(He(()=>i.expanded=!1,["stop","prevent"]),["esc"])),t[5]||(t[5]=st(()=>i.expanded=!1,["tab"]))]},a),{default:k});return Re("div",{class:[c.b("dropdown"),c.is("multiple",x)]},[$])}});var XH=_e(GH,[["__file","/home/runner/work/element-plus/element-plus/packages/components/select-v2/src/select-dropdown.vue"]]);function ZH(e,t){const n=A(0),o=A(null),r=C(()=>e.allowCreate&&e.filterable);function a(d){const u=p=>p.value===d;return e.options&&e.options.some(u)||t.createdOptions.some(u)}function i(d){!r.value||(e.multiple&&d.created?n.value++:o.value=d)}function l(d){if(r.value)if(d&&d.length>0&&!a(d)){const u={value:d,label:d,created:!0,disabled:!1};t.createdOptions.length>=n.value?t.createdOptions[n.value]=u:t.createdOptions.push(u)}else if(e.multiple)t.createdOptions.length=n.value;else{const u=o.value;t.createdOptions.length=0,u&&u.created&&t.createdOptions.push(u)}}function s(d){if(!r.value||!d||!d.created||d.created&&e.reserveKeyword&&t.inputValue===d.label)return;const u=t.createdOptions.findIndex(p=>p.value===d.value);~u&&(t.createdOptions.splice(u,1),n.value--)}function c(){r.value&&(t.createdOptions.length=0,n.value=0)}return{createNewOption:l,removeNewOption:s,selectNewOption:i,clearAllNewOption:c}}const JH=e=>{const t=[];return e.forEach(n=>{Ye(n.options)?(t.push({label:n.label,isTitle:!0,type:"Group"}),n.options.forEach(o=>{t.push(o)}),t.push({type:"Group"})):t.push(n)}),t};function QH(e){const t=A(!1);return{handleCompositionStart:()=>{t.value=!0},handleCompositionUpdate:a=>{const i=a.target.value,l=i[i.length-1]||"";t.value=!lc(l)},handleCompositionEnd:a=>{t.value&&(t.value=!1,Je(e)&&e(a))}}}const bg="",vg=11,eq={larget:51,default:42,small:33},tq="ElSelectV2",nq=(e,t)=>{const{t:n}=Tt(),o=ke("select-v2"),r=ke("input"),{form:a,formItem:i}=Ka(),{compatTeleported:l}=Wa(tq,"popperAppendToBody"),s=vt({inputValue:bg,displayInputValue:bg,calculatedWidth:0,cachedPlaceholder:"",cachedOptions:[],createdOptions:[],createdLabel:"",createdSelected:!1,currentPlaceholder:"",hoveringIndex:-1,comboBoxHovering:!1,isOnComposition:!1,isSilentBlur:!1,isComposing:!1,inputLength:20,selectWidth:200,initialInputHeight:0,previousQuery:null,previousValue:"",query:"",selectedLabel:"",softFocus:!1,tagInMultiLine:!1}),c=A(-1),d=A(-1),u=A(null),p=A(null),f=A(null),h=A(null),b=A(null),m=A(null),g=A(null),v=A(!1),y=C(()=>e.disabled||(a==null?void 0:a.disabled)),T=C(()=>{const Ce=F.value.length*34;return Ce>e.height?e.height:Ce}),x=C(()=>e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!==""),k=C(()=>{const Ce=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:x.value;return e.clearable&&!y.value&&s.comboBoxHovering&&Ce}),$=C(()=>e.remote&&e.filterable?"":rl),z=C(()=>$.value&&o.is("reverse",v.value)),P=C(()=>(i==null?void 0:i.validateState)||""),O=C(()=>Qv[P.value]),D=C(()=>e.remote?300:0),L=C(()=>{const Ce=F.value;return e.loading?e.loadingText||n("el.select.loading"):e.remote&&s.inputValue===""&&Ce.length===0?!1:e.filterable&&s.inputValue&&Ce.length>0?e.noMatchText||n("el.select.noMatch"):Ce.length===0?e.noDataText||n("el.select.noData"):null}),F=C(()=>{const Ce=Ke=>{const bt=s.inputValue;return bt?Ke.label.includes(bt):!0};return e.loading?[]:JH(e.options.concat(s.createdOptions).map(Ke=>{if(Ye(Ke.options)){const bt=Ke.options.filter(Ce);if(bt.length>0)return ze(he({},Ke),{options:bt})}else if(e.remote||Ce(Ke))return Ke;return null}).filter(Ke=>Ke!==null))}),V=C(()=>F.value.every(Ce=>Ce.disabled)),q=Ut(),R=C(()=>q.value==="small"?"small":"default"),E=C(()=>{const Ce=m.value,Ke=R.value||"default",bt=Ce?Number.parseInt(getComputedStyle(Ce).paddingLeft):0,zt=Ce?Number.parseInt(getComputedStyle(Ce).paddingRight):0;return s.selectWidth-zt-bt-eq[Ke]}),N=()=>{var Ce,Ke,bt;d.value=((bt=(Ke=(Ce=b.value)==null?void 0:Ce.getBoundingClientRect)==null?void 0:Ke.call(Ce))==null?void 0:bt.width)||200},W=C(()=>({width:`${s.calculatedWidth===0?vg:Math.ceil(s.calculatedWidth)+vg}px`})),Y=C(()=>Ye(e.modelValue)?e.modelValue.length===0&&!s.displayInputValue:e.filterable?s.displayInputValue.length===0:!0),J=C(()=>{const Ce=e.placeholder||n("el.select.placeholder");return e.multiple?Ce:s.selectedLabel||Ce}),Z=C(()=>{var Ce,Ke;return(Ke=(Ce=h.value)==null?void 0:Ce.popperRef)==null?void 0:Ke.contentRef}),se=C(()=>{if(e.multiple){const Ce=e.modelValue.length;if(e.modelValue.length>0)return F.value.findIndex(Ke=>Ke.value===e.modelValue[Ce-1])}else if(e.modelValue)return F.value.findIndex(Ce=>Ce.value===e.modelValue);return-1}),Se=C(()=>v.value&&L.value!==!1),{createNewOption:oe,removeNewOption:H,selectNewOption:ne,clearAllNewOption:ie}=ZH(e,s),{handleCompositionStart:be,handleCompositionUpdate:$e,handleCompositionEnd:Ne}=QH(Ce=>Rn(Ce)),Me=()=>{var Ce,Ke,bt;(Ke=(Ce=p.value).focus)==null||Ke.call(Ce),(bt=h.value)==null||bt.updatePopper()},j=()=>{if(!e.automaticDropdown&&!y.value)return s.isComposing&&(s.softFocus=!0),je(()=>{var Ce,Ke;v.value=!v.value,(Ke=(Ce=p.value)==null?void 0:Ce.focus)==null||Ke.call(Ce)})},X=()=>(e.filterable&&s.inputValue!==s.selectedLabel&&(s.query=s.selectedLabel),xe(s.inputValue),je(()=>{oe(s.inputValue)})),de=bn(X,D.value),xe=Ce=>{s.previousQuery!==Ce&&(s.previousQuery=Ce,e.filterable&&Je(e.filterMethod)?e.filterMethod(Ce):e.filterable&&e.remote&&Je(e.remoteMethod)&&e.remoteMethod(Ce))},we=Ce=>{En(e.modelValue,Ce)||t(Xt,Ce)},Ae=Ce=>{t(tt,Ce),we(Ce),s.previousValue=Ce.toString()},ce=(Ce=[],Ke)=>{if(!ut(Ke))return Ce.indexOf(Ke);const bt=e.valueKey;let zt=-1;return Ce.some((ko,fo)=>Pt(ko,bt)===Pt(Ke,bt)?(zt=fo,!0):!1),zt},ae=Ce=>ut(Ce)?Pt(Ce,e.valueKey):Ce,te=Ce=>ut(Ce)?Ce.label:Ce,pe=()=>{if(!(e.collapseTags&&!e.filterable))return je(()=>{var Ce,Ke;if(!p.value)return;const bt=m.value;b.value.height=bt.offsetHeight,v.value&&L.value!==!1&&((Ke=(Ce=h.value)==null?void 0:Ce.updatePopper)==null||Ke.call(Ce))})},De=()=>{var Ce,Ke;if(B(),N(),(Ke=(Ce=h.value)==null?void 0:Ce.updatePopper)==null||Ke.call(Ce),e.multiple)return pe()},B=()=>{const Ce=m.value;Ce&&(s.selectWidth=Ce.getBoundingClientRect().width)},me=(Ce,Ke,bt=!0)=>{var zt,ko;if(e.multiple){let fo=e.modelValue.slice();const ul=ce(fo,ae(Ce));ul>-1?(fo=[...fo.slice(0,ul),...fo.slice(ul+1)],s.cachedOptions.splice(ul,1),H(Ce)):(e.multipleLimit<=0||fo.length<e.multipleLimit)&&(fo=[...fo,ae(Ce)],s.cachedOptions.push(Ce),ne(Ce),Ct(Ke)),Ae(fo),Ce.created&&(s.query="",xe(""),s.inputLength=20),e.filterable&&!e.reserveKeyword&&((ko=(zt=p.value).focus)==null||ko.call(zt),Ee("")),e.filterable&&(s.calculatedWidth=g.value.getBoundingClientRect().width),pe(),Et()}else c.value=Ke,s.selectedLabel=Ce.label,Ae(ae(Ce)),v.value=!1,s.isComposing=!1,s.isSilentBlur=bt,ne(Ce),Ce.created||ie(),Ct(Ke)},Be=(Ce,Ke)=>{const{valueKey:bt}=e,zt=e.modelValue.indexOf(Pt(Ke,bt));if(zt>-1&&!y.value){const ko=[...e.modelValue.slice(0,zt),...e.modelValue.slice(zt+1)];return s.cachedOptions.splice(zt,1),Ae(ko),t("remove-tag",Pt(Ke,bt)),s.softFocus=!0,H(Ke),je(Me)}Ce.stopPropagation()},Ze=Ce=>{const Ke=s.isComposing;s.isComposing=!0,s.softFocus?s.softFocus=!1:Ke||t("focus",Ce)},Ve=()=>(s.softFocus=!1,je(()=>{var Ce,Ke;(Ke=(Ce=p.value)==null?void 0:Ce.blur)==null||Ke.call(Ce),g.value&&(s.calculatedWidth=g.value.getBoundingClientRect().width),s.isSilentBlur?s.isSilentBlur=!1:s.isComposing&&t("blur"),s.isComposing=!1})),re=()=>{s.displayInputValue.length>0?Ee(""):v.value=!1},ye=Ce=>{if(s.displayInputValue.length===0){Ce.preventDefault();const Ke=e.modelValue.slice();Ke.pop(),H(s.cachedOptions.pop()),Ae(Ke)}},fe=()=>{let Ce;return Ye(e.modelValue)?Ce=[]:Ce="",s.softFocus=!0,e.multiple?s.cachedOptions=[]:s.selectedLabel="",v.value=!1,Ae(Ce),t("clear"),ie(),je(Me)},Ee=Ce=>{s.displayInputValue=Ce,s.inputValue=Ce},We=(Ce,Ke=void 0)=>{const bt=F.value;if(!["forward","backward"].includes(Ce)||y.value||bt.length<=0||V.value)return;if(!v.value)return j();Ke===void 0&&(Ke=s.hoveringIndex);let zt=-1;Ce==="forward"?(zt=Ke+1,zt>=bt.length&&(zt=0)):Ce==="backward"&&(zt=Ke-1,zt<0&&(zt=bt.length-1));const ko=bt[zt];if(ko.disabled||ko.type==="Group")return We(Ce,zt);Ct(zt),gr(zt)},gt=()=>{if(v.value)~s.hoveringIndex&&F.value[s.hoveringIndex]&&me(F.value[s.hoveringIndex],s.hoveringIndex,!1);else return j()},Ct=Ce=>{s.hoveringIndex=Ce},_t=()=>{s.hoveringIndex=-1},Et=()=>{var Ce;const Ke=p.value;Ke&&((Ce=Ke.focus)==null||Ce.call(Ke))},Rn=Ce=>{const Ke=Ce.target.value;if(Ee(Ke),s.displayInputValue.length>0&&!v.value&&(v.value=!0),s.calculatedWidth=g.value.getBoundingClientRect().width,e.multiple&&pe(),e.remote)de();else return X()},un=()=>(v.value=!1,Ve()),yn=()=>(s.inputValue=s.displayInputValue,je(()=>{~se.value&&(Ct(se.value),gr(s.hoveringIndex))})),gr=Ce=>{f.value.scrollToItem(Ce)},Ga=()=>{if(_t(),e.multiple)if(e.modelValue.length>0){let Ce=!1;s.cachedOptions.length=0,s.previousValue=e.modelValue.toString(),e.modelValue.forEach(Ke=>{const bt=F.value.findIndex(zt=>ae(zt)===Ke);~bt&&(s.cachedOptions.push(F.value[bt]),Ce||Ct(bt),Ce=!0)})}else s.cachedOptions=[],s.previousValue="";else if(x.value){s.previousValue=e.modelValue;const Ce=F.value,Ke=Ce.findIndex(bt=>ae(bt)===ae(e.modelValue));~Ke?(s.selectedLabel=Ce[Ke].label,Ct(Ke)):s.selectedLabel=`${e.modelValue}`}else s.selectedLabel="",s.previousValue="";N()};return ge(v,Ce=>{var Ke,bt;t("visible-change",Ce),Ce?(bt=(Ke=h.value).update)==null||bt.call(Ke):(s.displayInputValue="",oe(""))}),ge(()=>e.modelValue,(Ce,Ke)=>{var bt;(!Ce||Ce.toString()!==s.previousValue)&&Ga(),En(Ce,Ke)||(bt=i==null?void 0:i.validate)==null||bt.call(i,"change").catch(zt=>void 0)},{deep:!0}),ge(()=>e.options,()=>{const Ce=p.value;(!Ce||Ce&&document.activeElement!==Ce)&&Ga()},{deep:!0}),ge(F,()=>je(f.value.resetScrollTop)),et(()=>{Ga(),ja(b.value,De)}),Ji(()=>{Ha(b.value,De)}),{collapseTagSize:R,currentPlaceholder:J,expanded:v,emptyText:L,popupHeight:T,debounce:D,filteredOptions:F,iconComponent:$,iconReverse:z,inputWrapperStyle:W,popperSize:d,dropdownMenuVisible:Se,hasModelValue:x,shouldShowPlaceholder:Y,selectDisabled:y,selectSize:q,showClearBtn:k,states:s,tagMaxWidth:E,nsSelectV2:o,nsInput:r,calculatorRef:g,controlRef:u,inputRef:p,menuRef:f,popper:h,selectRef:b,selectionRef:m,popperRef:Z,validateState:P,validateIcon:O,compatTeleported:l,debouncedOnInputChange:de,deleteTag:Be,getLabel:te,getValueKey:ae,handleBlur:Ve,handleClear:fe,handleClickOutside:un,handleDel:ye,handleEsc:re,handleFocus:Ze,handleMenuEnter:yn,handleResize:De,toggleMenu:j,scrollTo:gr,onInput:Rn,onKeyboardNavigate:We,onKeyboardSelect:gt,onSelect:me,onHover:Ct,onUpdateInputValue:Ee,handleCompositionStart:be,handleCompositionEnd:Ne,handleCompositionUpdate:$e}},oq=ee({name:"ElSelectV2",components:{ElSelectMenu:XH,ElTag:mc,ElTooltip:vn,ElIcon:qe},directives:{ClickOutside:Jr,ModelText:Ou},props:HH,emits:[tt,Xt,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:t}){const n=nq(e,t);return ot(O_,{props:vt(ze(he({},Gt(e)),{height:n.popupHeight})),onSelect:n.onSelect,onHover:n.onHover,onKeyboardNavigate:n.onKeyboardNavigate,onKeyboardSelect:n.onKeyboardSelect}),n}}),rq={key:0},aq=["id","autocomplete","aria-expanded","aria-labelledby","disabled","readonly","name","unselectable"],iq=["textContent"],lq=["id","aria-labelledby","aria-expanded","autocomplete","disabled","name","readonly","unselectable"],sq=["textContent"];function cq(e,t,n,o,r,a){const i=le("el-tag"),l=le("el-tooltip"),s=le("el-icon"),c=le("el-select-menu"),d=In("model-text"),u=In("click-outside");return Ue((w(),I("div",{ref:"selectRef",class:S([e.nsSelectV2.b(),e.nsSelectV2.m(e.selectSize)]),onClick:t[24]||(t[24]=He((...p)=>e.toggleMenu&&e.toggleMenu(...p),["stop"])),onMouseenter:t[25]||(t[25]=p=>e.states.comboBoxHovering=!0),onMouseleave:t[26]||(t[26]=p=>e.states.comboBoxHovering=!1)},[U(l,{ref:"popper",visible:e.dropdownMenuVisible,"onUpdate:visible":t[22]||(t[22]=p=>e.dropdownMenuVisible=p),teleported:e.compatTeleported,"popper-class":[e.nsSelectV2.e("popper"),e.popperClass],"gpu-acceleration":!1,"stop-popper-mouse-event":!1,"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,placement:"bottom-start",pure:"",transition:`${e.nsSelectV2.namespace.value}-zoom-in-top`,trigger:"click",persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:t[23]||(t[23]=p=>e.states.inputValue=e.states.displayInputValue)},{default:K(()=>{var p;return[M("div",{ref:"selectionRef",class:S([e.nsSelectV2.e("wrapper"),e.nsSelectV2.is("focused",e.states.isComposing),e.nsSelectV2.is("hovering",e.states.comboBoxHovering),e.nsSelectV2.is("filterable",e.filterable),e.nsSelectV2.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(w(),I("div",rq,[ue(e.$slots,"prefix")])):G("v-if",!0),e.multiple?(w(),I("div",{key:1,class:S(e.nsSelectV2.e("selection"))},[e.collapseTags&&e.modelValue.length>0?(w(),I("div",{key:0,class:S(e.nsSelectV2.e("selected-item"))},[U(i,{closable:!e.selectDisabled&&!((p=e.states.cachedOptions[0])!=null&&p.disable),size:e.collapseTagSize,type:"info","disable-transitions":"",onClose:t[0]||(t[0]=f=>e.deleteTag(f,e.states.cachedOptions[0]))},{default:K(()=>{var f;return[M("span",{class:S(e.nsSelectV2.e("tags-text")),style:Oe({maxWidth:`${e.tagMaxWidth}px`})},ve((f=e.states.cachedOptions[0])==null?void 0:f.label),7)]}),_:1},8,["closable","size"]),e.modelValue.length>1?(w(),Q(i,{key:0,closable:!1,size:e.collapseTagSize,type:"info","disable-transitions":""},{default:K(()=>[e.collapseTagsTooltip?(w(),Q(l,{key:0,disabled:e.dropdownMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:!1},{default:K(()=>[M("span",{class:S(e.nsSelectV2.e("tags-text")),style:Oe({maxWidth:`${e.tagMaxWidth}px`})},"+ "+ve(e.modelValue.length-1),7)]),content:K(()=>[M("div",{class:S(e.nsSelectV2.e("selection"))},[(w(!0),I(Fe,null,ct(e.states.cachedOptions,(f,h)=>(w(),I("div",{key:h,class:S(e.nsSelectV2.e("selected-item"))},[(w(),Q(i,{key:e.getValueKey(f),closable:!e.selectDisabled&&!f.disabled,size:e.collapseTagSize,class:"in-tooltip",type:"info","disable-transitions":"",onClose:b=>e.deleteTag(b,f)},{default:K(()=>[M("span",{class:S(e.nsSelectV2.e("tags-text")),style:Oe({maxWidth:`${e.tagMaxWidth}px`})},ve(e.getLabel(f)),7)]),_:2},1032,["closable","size","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect"])):(w(),I("span",{key:1,class:S(e.nsSelectV2.e("tags-text")),style:Oe({maxWidth:`${e.tagMaxWidth}px`})},"+ "+ve(e.modelValue.length-1),7))]),_:1},8,["size"])):G("v-if",!0)],2)):(w(!0),I(Fe,{key:1},ct(e.states.cachedOptions,(f,h)=>(w(),I("div",{key:h,class:S(e.nsSelectV2.e("selected-item"))},[(w(),Q(i,{key:e.getValueKey(f),closable:!e.selectDisabled&&!f.disabled,size:e.collapseTagSize,type:"info","disable-transitions":"",onClose:b=>e.deleteTag(b,f)},{default:K(()=>[M("span",{class:S(e.nsSelectV2.e("tags-text")),style:Oe({maxWidth:`${e.tagMaxWidth}px`})},ve(e.getLabel(f)),7)]),_:2},1032,["closable","size","onClose"]))],2))),128)),M("div",{class:S([e.nsSelectV2.e("selected-item"),e.nsSelectV2.e("input-wrapper")]),style:Oe(e.inputWrapperStyle)},[Ue(M("input",{id:e.id,ref:"inputRef",autocomplete:e.autocomplete,"aria-autocomplete":"list","aria-haspopup":"listbox",autocapitalize:"off","aria-expanded":e.expanded,"aria-labelledby":e.label,class:S([e.nsSelectV2.is(e.selectSize),e.nsSelectV2.e("combobox-input")]),disabled:e.disabled,role:"combobox",readonly:!e.filterable,spellcheck:"false",type:"text",name:e.name,unselectable:e.expanded?"on":void 0,"onUpdate:modelValue":t[1]||(t[1]=(...f)=>e.onUpdateInputValue&&e.onUpdateInputValue(...f)),onFocus:t[2]||(t[2]=(...f)=>e.handleFocus&&e.handleFocus(...f)),onInput:t[3]||(t[3]=(...f)=>e.onInput&&e.onInput(...f)),onCompositionstart:t[4]||(t[4]=(...f)=>e.handleCompositionStart&&e.handleCompositionStart(...f)),onCompositionupdate:t[5]||(t[5]=(...f)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...f)),onCompositionend:t[6]||(t[6]=(...f)=>e.handleCompositionEnd&&e.handleCompositionEnd(...f)),onKeydown:[t[7]||(t[7]=st(He(f=>e.onKeyboardNavigate("backward"),["stop","prevent"]),["up"])),t[8]||(t[8]=st(He(f=>e.onKeyboardNavigate("forward"),["stop","prevent"]),["down"])),t[9]||(t[9]=st(He((...f)=>e.onKeyboardSelect&&e.onKeyboardSelect(...f),["stop","prevent"]),["enter"])),t[10]||(t[10]=st(He((...f)=>e.handleEsc&&e.handleEsc(...f),["stop","prevent"]),["esc"])),t[11]||(t[11]=st(He((...f)=>e.handleDel&&e.handleDel(...f),["stop"]),["delete"]))]},null,42,aq),[[d,e.states.displayInputValue]]),e.filterable?(w(),I("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:S(e.nsSelectV2.e("input-calculator")),textContent:ve(e.states.displayInputValue)},null,10,iq)):G("v-if",!0)],6)],2)):(w(),I(Fe,{key:2},[M("div",{class:S([e.nsSelectV2.e("selected-item"),e.nsSelectV2.e("input-wrapper")])},[Ue(M("input",{id:e.id,ref:"inputRef","aria-autocomplete":"list","aria-haspopup":"listbox","aria-labelledby":e.label,"aria-expanded":e.expanded,autocapitalize:"off",autocomplete:e.autocomplete,class:S(e.nsSelectV2.e("combobox-input")),disabled:e.disabled,name:e.name,role:"combobox",readonly:!e.filterable,spellcheck:"false",type:"text",unselectable:e.expanded?"on":void 0,onCompositionstart:t[12]||(t[12]=(...f)=>e.handleCompositionStart&&e.handleCompositionStart(...f)),onCompositionupdate:t[13]||(t[13]=(...f)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...f)),onCompositionend:t[14]||(t[14]=(...f)=>e.handleCompositionEnd&&e.handleCompositionEnd(...f)),onFocus:t[15]||(t[15]=(...f)=>e.handleFocus&&e.handleFocus(...f)),onInput:t[16]||(t[16]=(...f)=>e.onInput&&e.onInput(...f)),onKeydown:[t[17]||(t[17]=st(He(f=>e.onKeyboardNavigate("backward"),["stop","prevent"]),["up"])),t[18]||(t[18]=st(He(f=>e.onKeyboardNavigate("forward"),["stop","prevent"]),["down"])),t[19]||(t[19]=st(He((...f)=>e.onKeyboardSelect&&e.onKeyboardSelect(...f),["stop","prevent"]),["enter"])),t[20]||(t[20]=st(He((...f)=>e.handleEsc&&e.handleEsc(...f),["stop","prevent"]),["esc"]))],"onUpdate:modelValue":t[21]||(t[21]=(...f)=>e.onUpdateInputValue&&e.onUpdateInputValue(...f))},null,42,lq),[[d,e.states.displayInputValue]])],2),e.filterable?(w(),I("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:S([e.nsSelectV2.e("selected-item"),e.nsSelectV2.e("input-calculator")]),textContent:ve(e.states.displayInputValue)},null,10,sq)):G("v-if",!0)],64)),e.shouldShowPlaceholder?(w(),I("span",{key:3,class:S([e.nsSelectV2.e("placeholder"),e.nsSelectV2.is("transparent",e.states.isComposing||(e.placeholder&&e.multiple?e.modelValue.length===0:!e.hasModelValue))])},ve(e.currentPlaceholder),3)):G("v-if",!0),M("span",{class:S(e.nsSelectV2.e("suffix"))},[e.iconComponent?Ue((w(),Q(s,{key:0,class:S([e.nsSelectV2.e("caret"),e.nsInput.e("icon"),e.iconReverse])},{default:K(()=>[(w(),Q(pt(e.iconComponent)))]),_:1},8,["class"])),[[ft,!e.showClearBtn]]):G("v-if",!0),e.showClearBtn&&e.clearIcon?(w(),Q(s,{key:1,class:S([e.nsSelectV2.e("caret"),e.nsInput.e("icon")]),onClick:He(e.handleClear,["prevent","stop"])},{default:K(()=>[(w(),Q(pt(e.clearIcon)))]),_:1},8,["class","onClick"])):G("v-if",!0),e.validateState&&e.validateIcon?(w(),Q(s,{key:2,class:S([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:K(()=>[(w(),Q(pt(e.validateIcon)))]),_:1},8,["class"])):G("v-if",!0)],2)],2)]}),content:K(()=>[U(c,{ref:"menuRef",data:e.filteredOptions,width:e.popperSize,"hovering-index":e.states.hoveringIndex,"scrollbar-always-on":e.scrollbarAlwaysOn},{default:K(p=>[ue(e.$slots,"default",eo(ur(p)))]),empty:K(()=>[ue(e.$slots,"empty",{},()=>[M("p",{class:S(e.nsSelectV2.e("empty"))},ve(e.emptyText?e.emptyText:""),3)])]),_:3},8,["data","width","hovering-index","scrollbar-always-on"])]),_:3},8,["visible","teleported","popper-class","popper-options","effect","transition","persistent","onBeforeShow"])],34)),[[u,e.handleClickOutside,e.popperRef]])}var ns=_e(oq,[["render",cq],["__file","/home/runner/work/element-plus/element-plus/packages/components/select-v2/src/select.vue"]]);ns.install=e=>{e.component(ns.name,ns)};const dq=ns,uq=dq,pq=Le({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),fq=Le({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),hq={name:"ElSkeletonItem"},mq=ee(ze(he({},hq),{props:fq,setup(e){const t=ke("skeleton");return(n,o)=>(w(),I("div",{class:S([_(t).e("item"),_(t).e(n.variant)])},[n.variant==="image"?(w(),Q(_(d5),{key:0})):G("v-if",!0)],2))}}));var Ms=_e(mq,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const gq={name:"ElSkeleton"},bq=ee(ze(he({},gq),{props:pq,setup(e,{expose:t}){const n=e,o=ke("skeleton"),r=Jz(Yt(n,"loading"),n.throttle);return t({uiLoading:r}),(a,i)=>_(r)?(w(),I("div",St({key:0,class:[_(o).b(),_(o).is("animated",a.animated)]},a.$attrs),[(w(!0),I(Fe,null,ct(a.count,l=>(w(),I(Fe,{key:l},[a.loading?ue(a.$slots,"template",{key:l},()=>[U(Ms,{class:S(_(o).is("first")),variant:"p"},null,8,["class"]),(w(!0),I(Fe,null,ct(a.rows,s=>(w(),Q(Ms,{key:s,class:S([_(o).e("paragraph"),_(o).is("last",s===a.rows&&a.rows>1)]),variant:"p"},null,8,["class"]))),128))]):G("v-if",!0)],64))),128))],16)):ue(a.$slots,"default",eo(St({key:1},a.$attrs)))}}));var vq=_e(bq,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]);const yq=rt(vq,{SkeletonItem:Ms}),_q=Dt(Ms),wq=(e,t,n)=>{const o=A(null),r=A(!1),a=C(()=>t.value instanceof Function),i=C(()=>a.value&&t.value(e.modelValue)||e.modelValue),l=bn(()=>{n.value&&(r.value=!0)},50),s=bn(()=>{n.value&&(r.value=!1)},50);return{tooltip:o,tooltipVisible:r,formatValue:i,displayTooltip:l,hideTooltip:s}},xq=(e,t,n)=>{const{disabled:o,min:r,max:a,step:i,showTooltip:l,precision:s,sliderSize:c,formatTooltip:d,emitChange:u,resetSize:p,updateDragging:f}=Ie("SliderProvider"),{tooltip:h,tooltipVisible:b,formatValue:m,displayTooltip:g,hideTooltip:v}=wq(e,d,l),y=C(()=>`${(e.modelValue-r.value)/(a.value-r.value)*100}%`),T=C(()=>e.vertical?{bottom:y.value}:{left:y.value}),x=()=>{t.hovering=!0,g()},k=()=>{t.hovering=!1,t.dragging||v()},$=q=>{o.value||(q.preventDefault(),D(q),At(window,"mousemove",L),At(window,"touchmove",L),At(window,"mouseup",F),At(window,"touchend",F),At(window,"contextmenu",F))},z=()=>{o.value||(t.newPosition=Number.parseFloat(y.value)-i.value/(a.value-r.value)*100,V(t.newPosition),u())},P=()=>{o.value||(t.newPosition=Number.parseFloat(y.value)+i.value/(a.value-r.value)*100,V(t.newPosition),u())},O=q=>{let R,E;return q.type.startsWith("touch")?(E=q.touches[0].clientY,R=q.touches[0].clientX):(E=q.clientY,R=q.clientX),{clientX:R,clientY:E}},D=q=>{t.dragging=!0,t.isClick=!0;const{clientX:R,clientY:E}=O(q);e.vertical?t.startY=E:t.startX=R,t.startPosition=Number.parseFloat(y.value),t.newPosition=t.startPosition},L=q=>{if(t.dragging){t.isClick=!1,g(),p();let R;const{clientX:E,clientY:N}=O(q);e.vertical?(t.currentY=N,R=(t.startY-t.currentY)/c.value*100):(t.currentX=E,R=(t.currentX-t.startX)/c.value*100),t.newPosition=t.startPosition+R,V(t.newPosition)}},F=()=>{t.dragging&&(setTimeout(()=>{t.dragging=!1,t.hovering||v(),t.isClick||(V(t.newPosition),u())},0),Bt(window,"mousemove",L),Bt(window,"touchmove",L),Bt(window,"mouseup",F),Bt(window,"touchend",F),Bt(window,"contextmenu",F))},V=async q=>{if(q===null||Number.isNaN(+q))return;q<0?q=0:q>100&&(q=100);const R=100/((a.value-r.value)/i.value);let N=Math.round(q/R)*R*(a.value-r.value)*.01+r.value;N=Number.parseFloat(N.toFixed(s.value)),n(tt,N),!t.dragging&&e.modelValue!==t.oldValue&&(t.oldValue=e.modelValue),await je(),t.dragging&&g(),h.value.updatePopper()};return ge(()=>t.dragging,q=>{f(q)}),{tooltip:h,tooltipVisible:b,showTooltip:l,wrapperStyle:T,formatValue:m,handleMouseEnter:x,handleMouseLeave:k,onButtonDown:$,onLeftKeyDown:z,onRightKeyDown:P,setPosition:V}},kq=ee({name:"ElSliderButton",components:{ElTooltip:vn},props:{modelValue:{type:Number,default:0},vertical:{type:Boolean,default:!1},tooltipClass:{type:String,default:""}},emits:[tt],setup(e,{emit:t}){const n=ke("slider"),o=vt({hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startY:0,currentY:0,startPosition:0,newPosition:0,oldValue:e.modelValue}),{tooltip:r,showTooltip:a,tooltipVisible:i,wrapperStyle:l,formatValue:s,handleMouseEnter:c,handleMouseLeave:d,onButtonDown:u,onLeftKeyDown:p,onRightKeyDown:f,setPosition:h}=xq(e,o,t),{hovering:b,dragging:m}=Gt(o);return{ns:n,tooltip:r,tooltipVisible:i,showTooltip:a,wrapperStyle:l,formatValue:s,handleMouseEnter:c,handleMouseLeave:d,onButtonDown:u,onLeftKeyDown:p,onRightKeyDown:f,setPosition:h,hovering:b,dragging:m}}});function Tq(e,t,n,o,r,a){const i=le("el-tooltip");return w(),I("div",{ref:"button",class:S([e.ns.e("button-wrapper"),{hover:e.hovering,dragging:e.dragging}]),style:Oe(e.wrapperStyle),tabindex:"0",onMouseenter:t[1]||(t[1]=(...l)=>e.handleMouseEnter&&e.handleMouseEnter(...l)),onMouseleave:t[2]||(t[2]=(...l)=>e.handleMouseLeave&&e.handleMouseLeave(...l)),onMousedown:t[3]||(t[3]=(...l)=>e.onButtonDown&&e.onButtonDown(...l)),onTouchstart:t[4]||(t[4]=(...l)=>e.onButtonDown&&e.onButtonDown(...l)),onFocus:t[5]||(t[5]=(...l)=>e.handleMouseEnter&&e.handleMouseEnter(...l)),onBlur:t[6]||(t[6]=(...l)=>e.handleMouseLeave&&e.handleMouseLeave(...l)),onKeydown:[t[7]||(t[7]=st((...l)=>e.onLeftKeyDown&&e.onLeftKeyDown(...l),["left"])),t[8]||(t[8]=st((...l)=>e.onRightKeyDown&&e.onRightKeyDown(...l),["right"])),t[9]||(t[9]=st(He((...l)=>e.onLeftKeyDown&&e.onLeftKeyDown(...l),["prevent"]),["down"])),t[10]||(t[10]=st(He((...l)=>e.onRightKeyDown&&e.onRightKeyDown(...l),["prevent"]),["up"]))]},[U(i,{ref:"tooltip",visible:e.tooltipVisible,"onUpdate:visible":t[0]||(t[0]=l=>e.tooltipVisible=l),placement:"top","stop-popper-mouse-event":!1,"popper-class":e.tooltipClass,disabled:!e.showTooltip,persistent:""},{content:K(()=>[M("span",null,ve(e.formatValue),1)]),default:K(()=>[M("div",{class:S([e.ns.e("button"),{hover:e.hovering,dragging:e.dragging}])},null,2)]),_:1},8,["visible","popper-class","disabled"])],38)}var Cq=_e(kq,[["render",Tq],["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue"]]);const Sq=ee({name:"ElMarker",props:{mark:{type:[String,Object],default:()=>{}}},setup(e){const t=ke("slider"),n=C(()=>typeof e.mark=="string"?e.mark:e.mark.label);return{ns:t,label:n}},render(){var e;return Re("div",{class:this.ns.e("marks-text"),style:(e=this.mark)==null?void 0:e.style},this.label)}});var $q=_e(Sq,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/marker.vue"]]);const Aq=e=>C(()=>e.marks?Object.keys(e.marks).map(parseFloat).sort((n,o)=>n-o).filter(n=>n<=e.max&&n>=e.min).map(n=>({point:n,position:(n-e.min)*100/(e.max-e.min),mark:e.marks[n]})):[]),Eq=(e,t,n)=>{const o=Ie(Mn,{}),r=Ie(qn,{}),a=Kt(null),i=A(null),l=A(null),s={firstButton:i,secondButton:l},c=C(()=>e.disabled||o.disabled||!1),d=C(()=>Math.min(t.firstValue,t.secondValue)),u=C(()=>Math.max(t.firstValue,t.secondValue)),p=C(()=>e.range?`${100*(u.value-d.value)/(e.max-e.min)}%`:`${100*(t.firstValue-e.min)/(e.max-e.min)}%`),f=C(()=>e.range?`${100*(d.value-e.min)/(e.max-e.min)}%`:"0%"),h=C(()=>e.vertical?{height:e.height}:{}),b=C(()=>e.vertical?{height:p.value,bottom:f.value}:{width:p.value,left:f.value}),m=()=>{a.value&&(t.sliderSize=a.value[`client${e.vertical?"Height":"Width"}`])},g=$=>{const z=e.min+$*(e.max-e.min)/100;if(!e.range){i.value.setPosition($);return}let P;Math.abs(d.value-z)<Math.abs(u.value-z)?P=t.firstValue<t.secondValue?"firstButton":"secondButton":P=t.firstValue>t.secondValue?"firstButton":"secondButton",s[P].value.setPosition($)},v=$=>{t.firstValue=$,T(e.range?[d.value,u.value]:$)},y=$=>{t.secondValue=$,e.range&&T([d.value,u.value])},T=$=>{n(tt,$),n(pr,$)},x=async()=>{await je(),n(Xt,e.range?[d.value,u.value]:e.modelValue)};return{elFormItem:r,slider:a,firstButton:i,secondButton:l,sliderDisabled:c,minValue:d,maxValue:u,runwayStyle:h,barStyle:b,resetSize:m,setPosition:g,emitChange:x,onSliderClick:$=>{if(!(c.value||t.dragging)){if(m(),e.vertical){const z=a.value.getBoundingClientRect().bottom;g((z-$.clientY)/t.sliderSize*100)}else{const z=a.value.getBoundingClientRect().left;g(($.clientX-z)/t.sliderSize*100)}x()}},setFirstValue:v,setSecondValue:y}},zq=(e,t,n,o)=>({stops:C(()=>{if(!e.showStops||e.min>e.max)return[];if(e.step===0)return[];const i=(e.max-e.min)/e.step,l=100*e.step/(e.max-e.min),s=Array.from({length:i-1}).map((c,d)=>(d+1)*l);return e.range?s.filter(c=>c<100*(n.value-e.min)/(e.max-e.min)||c>100*(o.value-e.min)/(e.max-e.min)):s.filter(c=>c>100*(t.firstValue-e.min)/(e.max-e.min))}),getStopStyle:i=>e.vertical?{bottom:`${i}%`}:{left:`${i}%`}}),Iq=ee({name:"ElSlider",components:{ElInputNumber:m_,SliderButton:Cq,SliderMarker:$q},props:{modelValue:{type:[Number,Array],default:0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},showInput:{type:Boolean,default:!1},showInputControls:{type:Boolean,default:!0},size:{type:String,validator:Nn},inputSize:{type:String,validator:Nn},showStops:{type:Boolean,default:!1},showTooltip:{type:Boolean,default:!0},formatTooltip:{type:Function,default:void 0},disabled:{type:Boolean,default:!1},range:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},height:{type:String,default:""},debounce:{type:Number,default:300},label:{type:String,default:void 0},tooltipClass:{type:String,default:void 0},marks:Object},emits:[tt,Xt,pr],setup(e,{emit:t}){const n=ke("slider"),o=vt({firstValue:0,secondValue:0,oldValue:0,dragging:!1,sliderSize:1}),{elFormItem:r,slider:a,firstButton:i,secondButton:l,sliderDisabled:s,minValue:c,maxValue:d,runwayStyle:u,barStyle:p,resetSize:f,emitChange:h,onSliderClick:b,setFirstValue:m,setSecondValue:g}=Eq(e,o,t),{stops:v,getStopStyle:y}=zq(e,o,c,d),T=Ut(),x=C(()=>e.inputSize||T.value),k=C(()=>[n.b(),n.m(T.value),n.is("vertical",e.vertical),{[n.m("with-input")]:e.showInput}]),$=Aq(e);Nq(e,o,c,d,t,r);const z=C(()=>{const R=[e.min,e.max,e.step].map(E=>{const N=`${E}`.split(".")[1];return N?N.length:0});return Math.max.apply(null,R)}),{sliderWrapper:P}=Mq(e,o,f),{firstValue:O,secondValue:D,oldValue:L,dragging:F,sliderSize:V}=Gt(o),q=R=>{o.dragging=R};return ot("SliderProvider",ze(he({},Gt(e)),{sliderSize:V,disabled:s,precision:z,emitChange:h,resetSize:f,updateDragging:q})),{ns:n,firstValue:O,secondValue:D,oldValue:L,dragging:F,sliderSize:V,slider:a,firstButton:i,secondButton:l,sliderDisabled:s,runwayStyle:u,barStyle:p,emitChange:h,onSliderClick:b,getStopStyle:y,setFirstValue:m,setSecondValue:g,stops:v,markList:$,sliderWrapper:P,sliderWrapperSize:T,sliderInputSize:x,sliderKls:k}}}),Nq=(e,t,n,o,r,a)=>{const i=c=>{r(tt,c),r(pr,c)},l=()=>e.range?![n.value,o.value].every((c,d)=>c===t.oldValue[d]):e.modelValue!==t.oldValue,s=()=>{var c,d;if(e.min>e.max){Wt("Slider","min should not be greater than max.");return}const u=e.modelValue;e.range&&Array.isArray(u)?u[1]<e.min?i([e.min,e.min]):u[0]>e.max?i([e.max,e.max]):u[0]<e.min?i([e.min,u[1]]):u[1]>e.max?i([u[0],e.max]):(t.firstValue=u[0],t.secondValue=u[1],l()&&((c=a.validate)==null||c.call(a,"change").catch(p=>void 0),t.oldValue=u.slice())):!e.range&&typeof u=="number"&&!Number.isNaN(u)&&(u<e.min?i(e.min):u>e.max?i(e.max):(t.firstValue=u,l()&&((d=a.validate)==null||d.call(a,"change").catch(p=>void 0),t.oldValue=u)))};s(),ge(()=>t.dragging,c=>{c||s()}),ge(()=>e.modelValue,(c,d)=>{t.dragging||Array.isArray(c)&&Array.isArray(d)&&c.every((u,p)=>u===d[p])&&t.firstValue===c[0]&&t.secondValue===c[1]||s()},{deep:!0}),ge(()=>[e.min,e.max],()=>{s()})},Mq=(e,t,n)=>{const o=A(null);return et(async()=>{let r;e.range?(Array.isArray(e.modelValue)?(t.firstValue=Math.max(e.min,e.modelValue[0]),t.secondValue=Math.min(e.max,e.modelValue[1])):(t.firstValue=e.min,t.secondValue=e.max),t.oldValue=[t.firstValue,t.secondValue],r=`${t.firstValue}-${t.secondValue}`):(typeof e.modelValue!="number"||Number.isNaN(e.modelValue)?t.firstValue=e.min:t.firstValue=Math.min(e.max,Math.max(e.min,e.modelValue)),t.oldValue=t.firstValue,r=t.firstValue),o.value.setAttribute("aria-valuetext",r),o.value.setAttribute("aria-label",e.label?e.label:`slider between ${e.min} and ${e.max}`),At(window,"resize",n),await je(),n()}),$t(()=>{Bt(window,"resize",n)}),{sliderWrapper:o}},Rq=["aria-valuemin","aria-valuemax","aria-orientation","aria-disabled"],Pq={key:1};function Oq(e,t,n,o,r,a){const i=le("slider-button"),l=le("slider-marker"),s=le("el-input-number");return w(),I("div",{ref:"sliderWrapper",class:S(e.sliderKls),role:"slider","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-orientation":e.vertical?"vertical":"horizontal","aria-disabled":e.sliderDisabled},[M("div",{ref:"slider",class:S([e.ns.e("runway"),{"show-input":e.showInput&&!e.range},e.ns.is("disabled",e.sliderDisabled)]),style:Oe(e.runwayStyle),onClick:t[0]||(t[0]=(...c)=>e.onSliderClick&&e.onSliderClick(...c))},[M("div",{class:S(e.ns.e("bar")),style:Oe(e.barStyle)},null,6),U(i,{ref:"firstButton","model-value":e.firstValue,vertical:e.vertical,"tooltip-class":e.tooltipClass,"onUpdate:modelValue":e.setFirstValue},null,8,["model-value","vertical","tooltip-class","onUpdate:modelValue"]),e.range?(w(),Q(i,{key:0,ref:"secondButton","model-value":e.secondValue,vertical:e.vertical,"tooltip-class":e.tooltipClass,"onUpdate:modelValue":e.setSecondValue},null,8,["model-value","vertical","tooltip-class","onUpdate:modelValue"])):G("v-if",!0),e.showStops?(w(),I("div",Pq,[(w(!0),I(Fe,null,ct(e.stops,(c,d)=>(w(),I("div",{key:d,class:S(e.ns.e("stop")),style:Oe(e.getStopStyle(c))},null,6))),128))])):G("v-if",!0),e.markList.length>0?(w(),I(Fe,{key:2},[M("div",null,[(w(!0),I(Fe,null,ct(e.markList,(c,d)=>(w(),I("div",{key:d,style:Oe(e.getStopStyle(c.position)),class:S([e.ns.e("stop"),e.ns.e("marks-stop")])},null,6))),128))]),M("div",{class:S(e.ns.e("marks"))},[(w(!0),I(Fe,null,ct(e.markList,(c,d)=>(w(),Q(l,{key:d,mark:c.mark,style:Oe(e.getStopStyle(c.position))},null,8,["mark","style"]))),128))],2)],64)):G("v-if",!0)],6),e.showInput&&!e.range?(w(),Q(s,{key:0,ref:"input","model-value":e.firstValue,class:S(e.ns.e("input")),step:e.step,disabled:e.sliderDisabled,controls:e.showInputControls,min:e.min,max:e.max,debounce:e.debounce,size:e.sliderInputSize,"onUpdate:modelValue":e.setFirstValue,onChange:e.emitChange},null,8,["model-value","class","step","disabled","controls","min","max","debounce","size","onUpdate:modelValue","onChange"])):G("v-if",!0)],10,Rq)}var os=_e(Iq,[["render",Oq],["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/index.vue"]]);os.install=e=>{e.component(os.name,os)};const Fq=os,Dq=Fq,Lq=Le({prefixCls:{type:String,default:""}}),Vq=ee({props:Lq,setup(e){const t=ke("space");return{classes:C(()=>`${e.prefixCls||t.b()}__item`)}}});function Bq(e,t,n,o,r,a){return w(),I("div",{class:S(e.classes)},[ue(e.$slots,"default")],2)}var yg=_e(Vq,[["render",Bq],["__file","/home/runner/work/element-plus/element-plus/packages/components/space/src/item.vue"]]);const _g={small:8,default:12,large:16};function jq(e){const t=ke("space"),n=C(()=>[t.b(),t.m(e.direction),e.class]),o=A(0),r=A(0),a=C(()=>{const l=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${r.value}px`}:{},s={alignItems:e.alignment};return[l,s,e.style]}),i=C(()=>{const l={paddingBottom:`${r.value}px`,marginRight:`${o.value}px`},s=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[l,s]});return Dn(()=>{const{size:l="small",wrap:s,direction:c,fill:d}=e;if(Array.isArray(l)){const[u=0,p=0]=l;o.value=u,r.value=p}else{let u;mt(l)?u=l:u=_g[l]||_g.small,(s||d)&&c==="horizontal"?o.value=r.value=u:c==="horizontal"?(o.value=u,r.value=0):(r.value=u,o.value=0)}}),{classes:n,containerStyle:a,itemStyle:i}}const Hq=Le({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:Te([String,Object,Array]),default:""},style:{type:Te([String,Array,Object]),default:""},alignment:{type:Te(String),default:"center"},prefixCls:{type:String},spacer:{type:Te([Object,String,Number,Array]),default:null,validator:e=>jt(e)||mt(e)||Qe(e)},wrap:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:wo,validator:e=>mt(e)||Ye(e)&&e.length===2&&e.every(t=>mt(t))}});var qq=ee({name:"ElSpace",props:Hq,setup(e,{slots:t}){const{classes:n,containerStyle:o,itemStyle:r}=jq(e);return()=>{var a;const{spacer:i,prefixCls:l,direction:s}=e,c=ue(t,"default",{key:0},()=>[]);if(((a=c.children)!=null?a:[]).length===0)return null;if(Ye(c.children)){let d=[];if(c.children.forEach((u,p)=>{oy(u)?Ye(u.children)&&u.children.forEach((f,h)=>{d.push(U(yg,{style:r.value,prefixCls:l,key:`nested-${h}`},{default:()=>[f]},On.PROPS|On.STYLE,["style","prefixCls"]))}):Pz(u)&&d.push(U(yg,{style:r.value,prefixCls:l,key:`LoopKey${p}`},{default:()=>[u]},On.PROPS|On.STYLE,["style","prefixCls"]))}),i){const u=d.length-1;d=d.reduce((p,f,h)=>{const b=[...p,f];return h!==u&&b.push(U("span",{style:[r.value,s==="vertical"?"width: 100%":null],key:h},[jt(i)?i:it(i,On.TEXT)],On.STYLE)),b},[])}return U("div",{class:n.value,style:o.value},d,On.STYLE|On.CLASS)}return c.children}}});const Kq=rt(qq),Wq=ee({name:"ElSteps",props:{space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},alignCenter:{type:Boolean,default:!1},simple:{type:Boolean,default:!1},finishStatus:{type:String,default:"finish",validator:e=>["wait","process","finish","error","success"].includes(e)},processStatus:{type:String,default:"process",validator:e=>["wait","process","finish","error","success"].includes(e)}},emits:[Xt],setup(e,{emit:t}){const n=ke("steps"),o=A([]);return ge(o,()=>{o.value.forEach((r,a)=>{r.setIndex(a)})}),ot("ElSteps",{props:e,steps:o}),ge(()=>e.active,(r,a)=>{t(Xt,r,a)}),{steps:o,ns:n}}});function Uq(e,t,n,o,r,a){return w(),I("div",{class:S([e.ns.b(),e.ns.m(e.simple?"simple":e.direction)])},[ue(e.$slots,"default")],2)}var Yq=_e(Wq,[["render",Uq],["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/index.vue"]]);const Gq=ee({name:"ElStep",components:{ElIcon:qe,Close:Hn,Check:Ca},props:{title:{type:String,default:""},icon:{type:[String,Object],default:""},description:{type:String,default:""},status:{type:String,default:"",validator:e=>["","wait","process","finish","error","success"].includes(e)}},setup(e){const t=ke("step"),n=A(-1),o=A({}),r=A(""),a=Ie("ElSteps"),i=nt();et(()=>{ge([()=>a.props.active,()=>a.props.processStatus,()=>a.props.finishStatus],([T])=>{v(T)},{immediate:!0})}),$t(()=>{a.steps.value=a.steps.value.filter(T=>T.uid!==i.uid)});const l=C(()=>e.status||r.value),s=C(()=>{const T=a.steps.value[n.value-1];return T?T.currentStatus:"wait"}),c=C(()=>a.props.alignCenter),d=C(()=>a.props.direction==="vertical"),u=C(()=>a.props.simple),p=C(()=>a.steps.value.length),f=C(()=>{var T;return((T=a.steps.value[p.value-1])==null?void 0:T.uid)===i.uid}),h=C(()=>u.value?"":a.props.space),b=C(()=>{const T={flexBasis:typeof h.value=="number"?`${h.value}px`:h.value?h.value:`${100/(p.value-(c.value?0:1))}%`};return d.value||f.value&&(T.maxWidth=`${100/p.value}%`),T}),m=T=>{n.value=T},g=T=>{let x=100;const k={};k.transitionDelay=`${150*n.value}ms`,T===a.props.processStatus?x=0:T==="wait"&&(x=0,k.transitionDelay=`${-150*n.value}ms`),k.borderWidth=x&&!u.value?"1px":0,k[a.props.direction==="vertical"?"height":"width"]=`${x}%`,o.value=k},v=T=>{T>n.value?r.value=a.props.finishStatus:T===n.value&&s.value!=="error"?r.value=a.props.processStatus:r.value="wait";const x=a.steps.value[p.value-1];x&&x.calcProgress(r.value)},y=vt({uid:C(()=>i.uid),currentStatus:l,setIndex:m,calcProgress:g});return a.steps.value=[...a.steps.value,y],{ns:t,index:n,lineStyle:o,currentStatus:l,isCenter:c,isVertical:d,isSimple:u,isLast:f,space:h,style:b,parent:a,setIndex:m,calcProgress:g,updateStatus:v}}});function Xq(e,t,n,o,r,a){const i=le("el-icon"),l=le("check"),s=le("close");return w(),I("div",{style:Oe(e.style),class:S([e.ns.b(),e.ns.is(e.isSimple?"simple":e.parent.props.direction),e.ns.is("flex",e.isLast&&!e.space&&!e.isCenter),e.ns.is("center",e.isCenter&&!e.isVertical&&!e.isSimple)])},[G(" icon & line "),M("div",{class:S([e.ns.e("head"),e.ns.is(e.currentStatus)])},[e.isSimple?G("v-if",!0):(w(),I("div",{key:0,class:S(e.ns.e("line"))},[M("i",{class:S(e.ns.e("line-inner")),style:Oe(e.lineStyle)},null,6)],2)),M("div",{class:S([e.ns.e("icon"),e.ns.is(e.icon?"icon":"text")])},[e.currentStatus!=="success"&&e.currentStatus!=="error"?ue(e.$slots,"icon",{key:0},()=>[e.icon?(w(),Q(i,{key:0,class:S(e.ns.e("icon-inner"))},{default:K(()=>[(w(),Q(pt(e.icon)))]),_:1},8,["class"])):G("v-if",!0),!e.icon&&!e.isSimple?(w(),I("div",{key:1,class:S(e.ns.e("icon-inner"))},ve(e.index+1),3)):G("v-if",!0)]):(w(),Q(i,{key:1,class:S([e.ns.e("icon-inner"),e.ns.is("status")])},{default:K(()=>[e.currentStatus==="success"?(w(),Q(l,{key:0})):(w(),Q(s,{key:1}))]),_:1},8,["class"]))],2)],2),G(" title & description "),M("div",{class:S(e.ns.e("main"))},[M("div",{class:S([e.ns.e("title"),e.ns.is(e.currentStatus)])},[ue(e.$slots,"title",{},()=>[it(ve(e.title),1)])],2),e.isSimple?(w(),I("div",{key:0,class:S(e.ns.e("arrow"))},null,2)):(w(),I("div",{key:1,class:S([e.ns.e("description"),e.ns.is(e.currentStatus)])},[ue(e.$slots,"description",{},()=>[it(ve(e.description),1)])],2))],2)],6)}var F_=_e(Gq,[["render",Xq],["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/item.vue"]]);const Zq=rt(Yq,{Step:F_}),Jq=Dt(F_),Qq=Le({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:Number,default:40},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:an,default:""},inactiveIcon:{type:an,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:Te(Function)},size:{type:String,validator:Nn}}),eK={[tt]:e=>on(e)||Qe(e)||mt(e),[Xt]:e=>on(e)||Qe(e)||mt(e),[pr]:e=>on(e)||Qe(e)||mt(e)},wg="ElSwitch",tK=ee({name:wg,components:{ElIcon:qe,Loading:hr},props:Qq,emits:eK,setup(e,{emit:t}){const{formItem:n}=Ka(),o=Zr(C(()=>e.loading)),r=ke("switch"),a=Ut(),i=A(e.modelValue!==!1),l=A(),s=A(),c=C(()=>[r.b(),r.m(a.value),r.is("disabled",o.value),r.is("checked",u.value)]);ge(()=>e.modelValue,()=>{i.value=!0}),ge(()=>e.value,()=>{i.value=!1});const d=C(()=>i.value?e.modelValue:e.value),u=C(()=>d.value===e.activeValue);[e.activeValue,e.inactiveValue].includes(d.value)||(t(tt,e.inactiveValue),t(Xt,e.inactiveValue),t(pr,e.inactiveValue)),ge(u,()=>{var m;l.value.checked=u.value,(e.activeColor||e.inactiveColor)&&h(),e.validateEvent&&((m=n==null?void 0:n.validate)==null||m.call(n,"change").catch(g=>void 0))});const p=()=>{const m=u.value?e.inactiveValue:e.activeValue;t(tt,m),t(Xt,m),t(pr,m),je(()=>{l.value.checked=u.value})},f=()=>{if(o.value)return;const{beforeChange:m}=e;if(!m){p();return}const g=m();[Vr(g),on(g)].some(y=>y)||Wt(wg,"beforeChange must return type `Promise<boolean>` or `boolean`"),Vr(g)?g.then(y=>{y&&p()}).catch(y=>{}):g&&p()},h=()=>{const m=u.value?e.activeColor:e.inactiveColor,g=s.value;e.borderColor?g.style.borderColor=e.borderColor:e.borderColor||(g.style.borderColor=m),g.style.backgroundColor=m,g.children[0].style.color=m},b=()=>{var m,g;(g=(m=l.value)==null?void 0:m.focus)==null||g.call(m)};return et(()=>{(e.activeColor||e.inactiveColor||e.borderColor)&&h(),l.value.checked=u.value}),{ns:r,input:l,core:s,switchDisabled:o,checked:u,switchKls:c,handleChange:p,switchValue:f,focus:b}}}),nK=["aria-checked","aria-disabled"],oK=["id","name","true-value","false-value","disabled"],rK=["aria-hidden"],aK=["aria-hidden"],iK=["aria-hidden"],lK=["aria-hidden"];function sK(e,t,n,o,r,a){const i=le("el-icon"),l=le("loading");return w(),I("div",{class:S(e.switchKls),role:"switch","aria-checked":e.checked,"aria-disabled":e.switchDisabled,onClick:t[2]||(t[2]=He((...s)=>e.switchValue&&e.switchValue(...s),["prevent"]))},[M("input",{id:e.id,ref:"input",class:S(e.ns.e("input")),type:"checkbox",name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:e.switchDisabled,onChange:t[0]||(t[0]=(...s)=>e.handleChange&&e.handleChange(...s)),onKeydown:t[1]||(t[1]=st((...s)=>e.switchValue&&e.switchValue(...s),["enter"]))},null,42,oK),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(w(),I("span",{key:0,class:S([e.ns.e("label"),e.ns.em("label","left"),e.ns.is("active",!e.checked)])},[e.inactiveIcon?(w(),Q(i,{key:0},{default:K(()=>[(w(),Q(pt(e.inactiveIcon)))]),_:1})):G("v-if",!0),!e.inactiveIcon&&e.inactiveText?(w(),I("span",{key:1,"aria-hidden":e.checked},ve(e.inactiveText),9,rK)):G("v-if",!0)],2)):G("v-if",!0),M("span",{ref:"core",class:S(e.ns.e("core")),style:Oe({width:(e.width||40)+"px"})},[e.inlinePrompt?(w(),I("div",{key:0,class:S(e.ns.e("inner"))},[e.activeIcon||e.inactiveIcon?(w(),I(Fe,{key:0},[e.activeIcon?(w(),Q(i,{key:0,class:S([e.ns.is("icon"),e.checked?e.ns.is("show"):e.ns.is("hide")])},{default:K(()=>[(w(),Q(pt(e.activeIcon)))]),_:1},8,["class"])):G("v-if",!0),e.inactiveIcon?(w(),Q(i,{key:1,class:S([e.ns.is("icon"),e.checked?e.ns.is("hide"):e.ns.is("show")])},{default:K(()=>[(w(),Q(pt(e.inactiveIcon)))]),_:1},8,["class"])):G("v-if",!0)],64)):e.activeText||e.inactiveIcon?(w(),I(Fe,{key:1},[e.activeText?(w(),I("span",{key:0,class:S([e.ns.is("text"),e.checked?e.ns.is("show"):e.ns.is("hide")]),"aria-hidden":!e.checked},ve(e.activeText.substring(0,3)),11,aK)):G("v-if",!0),e.inactiveText?(w(),I("span",{key:1,class:S([e.ns.is("text"),e.checked?e.ns.is("hide"):e.ns.is("show")]),"aria-hidden":e.checked},ve(e.inactiveText.substring(0,3)),11,iK)):G("v-if",!0)],64)):G("v-if",!0)],2)):G("v-if",!0),M("div",{class:S(e.ns.e("action"))},[e.loading?(w(),Q(i,{key:0,class:S(e.ns.is("loading"))},{default:K(()=>[U(l)]),_:1},8,["class"])):G("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(w(),I("span",{key:1,class:S([e.ns.e("label"),e.ns.em("label","right"),e.ns.is("active",e.checked)])},[e.activeIcon?(w(),Q(i,{key:0},{default:K(()=>[(w(),Q(pt(e.activeIcon)))]),_:1})):G("v-if",!0),!e.activeIcon&&e.activeText?(w(),I("span",{key:1,"aria-hidden":!e.checked},ve(e.activeText),9,lK)):G("v-if",!0)],2)):G("v-if",!0)],10,nK)}var cK=_e(tK,[["render",sK],["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const dK=rt(cK);/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed