var PlexusNav=function(m){"use strict";var Qr=Object.defineProperty;var d=(m,K)=>Qr(m,"name",{value:K,configurable:!0});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ne,oe,F,le,G,de,ce,he,pe,ue,Ss,ge,ve,me,fe,be,ye,$e,we,_e,xe,ke;const K=globalThis,et=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),jt=new WeakMap;let Ht=(ne=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(et&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=jt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&jt.set(t,e))}return e}toString(){return this.cssText}},d(ne,"n"),ne);const Cs=d(i=>new Ht(typeof i=="string"?i:i+"",void 0,tt),"r$4"),Es=d((i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new Ht(t,i,tt)},"i$3"),Ms=d((i,e)=>{if(et)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=K.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},"S$2"),Rt=et?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Cs(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ps,defineProperty:Os,getOwnPropertyDescriptor:Us,getOwnPropertyNames:Ts,getOwnPropertySymbols:zs,getPrototypeOf:js}=Object,C=globalThis,Dt=C.trustedTypes,Hs=Dt?Dt.emptyScript:"",st=C.reactiveElementPolyfillSupport,Ae=d((i,e)=>i,"d$1"),Le={toAttribute(i,e){switch(e){case Boolean:i=i?Hs:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},rt=d((i,e)=>!Ps(i,e),"f$2"),Nt={attribute:!0,type:String,converter:Le,reflect:!1,useDefault:!1,hasChanged:rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);let J=(oe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Nt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Os(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:n}=Us(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){const o=r==null?void 0:r.call(this);n==null||n.call(this,a),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Nt}static _$Ei(){if(this.hasOwnProperty(Ae("elementProperties")))return;const e=js(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ae("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ae("properties"))){const t=this.properties,s=[...Ts(t),...zs(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(Rt(r))}else e!==void 0&&t.push(Rt(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ms(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var n;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const a=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:Le).toAttribute(t,s.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){var n,a;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Le;this._$Em=r;const p=l.fromAttribute(t,o.type);this[r]=p??((a=this._$Ej)==null?void 0:a.get(r))??p,this._$Em=null}}requestUpdate(e,t,s,r=!1,n){var a;if(e!==void 0){const o=this.constructor;if(r===!1&&(n=this[e]),s??(s=o.getPropertyOptions(e)),!((s.hasChanged??rt)(n,t)||s.useDefault&&s.reflect&&n===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:n},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,a]of r){const{wrapped:o}=a,l=this[n];o!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},d(oe,"y"),oe);J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[Ae("elementProperties")]=new Map,J[Ae("finalized")]=new Map,st==null||st({ReactiveElement:J}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=globalThis,Lt=d(i=>i,"i$1"),Ie=Se.trustedTypes,It=Ie?Ie.createPolicy("lit-html",{createHTML:d(i=>i,"createHTML")}):void 0,Bt="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Vt="?"+E,Rs=`<${Vt}>`,z=document,Ce=d(()=>z.createComment(""),"c"),Ee=d(i=>i===null||typeof i!="object"&&typeof i!="function","a"),it=Array.isArray,Ds=d(i=>it(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function","d"),at=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wt=/-->/g,qt=/>/g,j=RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ft=/'/g,Gt=/"/g,Kt=/^(?:script|style|textarea|title)$/i,Ns=d(i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),"x$1"),Jt=Ns(1),Q=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Qt=new WeakMap,H=z.createTreeWalker(z,129);function Zt(i,e){if(!it(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return It!==void 0?It.createHTML(e):e}d(Zt,"V$1");const Ls=d((i,e)=>{const t=i.length-1,s=[];let r,n=e===2?"<svg>":e===3?"<math>":"",a=Me;for(let o=0;o<t;o++){const l=i[o];let p,g,u=-1,f=0;for(;f<l.length&&(a.lastIndex=f,g=a.exec(l),g!==null);)f=a.lastIndex,a===Me?g[1]==="!--"?a=Wt:g[1]!==void 0?a=qt:g[2]!==void 0?(Kt.test(g[2])&&(r=RegExp("</"+g[2],"g")),a=j):g[3]!==void 0&&(a=j):a===j?g[0]===">"?(a=r??Me,u=-1):g[1]===void 0?u=-2:(u=a.lastIndex-g[2].length,p=g[1],a=g[3]===void 0?j:g[3]==='"'?Gt:Ft):a===Gt||a===Ft?a=j:a===Wt||a===qt?a=Me:(a=j,r=void 0);const y=a===j&&i[o+1].startsWith("/>")?" ":"";n+=a===Me?l+Rs:u>=0?(s.push(p),l.slice(0,u)+Bt+l.slice(u)+E+y):l+E+(u===-2?o:y)}return[Zt(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},"N$1");let nt=(F=class{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[p,g]=Ls(e,t);if(this.el=F.createElement(p,s),H.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=H.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(Bt)){const f=g[a++],y=r.getAttribute(u).split(E),S=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:S[2],strings:y,ctor:S[1]==="."?Bs:S[1]==="?"?Vs:S[1]==="@"?Ws:Be}),r.removeAttribute(u)}else u.startsWith(E)&&(l.push({type:6,index:n}),r.removeAttribute(u));if(Kt.test(r.tagName)){const u=r.textContent.split(E),f=u.length-1;if(f>0){r.textContent=Ie?Ie.emptyScript:"";for(let y=0;y<f;y++)r.append(u[y],Ce()),H.nextNode(),l.push({type:2,index:++n});r.append(u[f],Ce())}}}else if(r.nodeType===8)if(r.data===Vt)l.push({type:2,index:n});else{let u=-1;for(;(u=r.data.indexOf(E,u+1))!==-1;)l.push({type:7,index:n}),u+=E.length-1}n++}}static createElement(e,t){const s=z.createElement("template");return s.innerHTML=e,s}},d(F,"S"),F);function Z(i,e,t=i,s){var a,o;if(e===Q)return e;let r=s!==void 0?(a=t._$Co)==null?void 0:a[s]:t._$Cl;const n=Ee(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((o=r==null?void 0:r._$AO)==null||o.call(r,!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=r:t._$Cl=r),r!==void 0&&(e=Z(i,r._$AS(i,e.values),r,s)),e}d(Z,"M$1");let Is=(le=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??z).importNode(t,!0);H.currentNode=r;let n=H.nextNode(),a=0,o=0,l=s[0];for(;l!==void 0;){if(a===l.index){let p;l.type===2?p=new ot(n,n.nextSibling,this,e):l.type===1?p=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(p=new qs(n,this,e)),this._$AV.push(p),l=s[++o]}a!==(l==null?void 0:l.index)&&(n=H.nextNode(),a++)}return H.currentNode=z,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},d(le,"R"),le),ot=(G=class{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),Ee(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==Q&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ds(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&Ee(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=nt.createElement(Zt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const a=new Is(r,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Qt.get(e.strings);return t===void 0&&Qt.set(e.strings,t=new nt(e)),t}k(e){it(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const n of e)r===t.length?t.push(s=new G(this.O(Ce()),this.O(Ce()),this,this.options)):s=t[r],s._$AI(n),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const r=Lt(e).nextSibling;Lt(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},d(G,"k"),G),Be=(de=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,n){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(e,t=this,s,r){const n=this.strings;let a=!1;if(n===void 0)e=Z(this,e,t,0),a=!Ee(e)||e!==this._$AH&&e!==Q,a&&(this._$AH=e);else{const o=e;let l,p;for(e=n[0],l=0;l<n.length-1;l++)p=Z(this,o[s+l],t,l),p===Q&&(p=this._$AH[l]),a||(a=!Ee(p)||p!==this._$AH[l]),p===b?e=b:e!==b&&(e+=(p??"")+n[l+1]),this._$AH[l]=p}a&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},d(de,"H"),de),Bs=(ce=class extends Be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},d(ce,"I"),ce),Vs=(he=class extends Be{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},d(he,"L"),he),Ws=(pe=class extends Be{constructor(e,t,s,r,n){super(e,t,s,r,n),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??b)===Q)return;const s=this._$AH,r=e===b&&s!==b||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==b&&(s===b||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},d(pe,"z"),pe),qs=(ue=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}},d(ue,"Z"),ue);const lt=Se.litHtmlPolyfillSupport;lt==null||lt(nt,ot),(Se.litHtmlVersions??(Se.litHtmlVersions=[])).push("3.3.2");const Fs=d((i,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=r=new ot(e.insertBefore(Ce(),n),n,void 0,t??{})}return r._$AI(i),r},"D$1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,Ct=class Ct extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fs(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Q}};d(Ct,"i");let D=Ct;D._$litElement$=!0,D.finalized=!0,(Ss=R.litElementHydrateSupport)==null||Ss.call(R,{LitElement:D});const dt=R.litElementPolyfillSupport;dt==null||dt({LitElement:D}),(R.litElementVersions??(R.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gs=d(i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)},"t");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ks={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:rt},Js=d((i=Ks,e,t)=>{const{kind:s,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(t.name,i),s==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,i,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,i,o),o}}}if(s==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,i,!0,o)}}throw Error("Unsupported decorator location: "+s)},"r$1");function Yt(i){return(e,t)=>typeof t=="object"?Js(i,e,t):((s,r,n)=>{const a=r.hasOwnProperty(n);return r.constructor.createProperty(n,s),a?Object.getOwnPropertyDescriptor(r,n):void 0})(i,e,t)}d(Yt,"n");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qs(i){return Yt({...i,state:!0,attribute:!1})}d(Qs,"r");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=globalThis,ct=Ve.ShadowRoot&&(Ve.ShadyCSS===void 0||Ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ht=Symbol(),Xt=new WeakMap;let es=(ge=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ht)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ct&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Xt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Xt.set(t,e))}return e}toString(){return this.cssText}},d(ge,"Pe"),ge);const pt=d(i=>new es(typeof i=="string"?i:i+"",void 0,ht),"ue"),_=d((i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new es(t,i,ht)},"g"),Zs=d((i,e)=>{if(ct)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=Ve.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},"He"),ts=ct?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return pt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ys,defineProperty:Xs,getOwnPropertyDescriptor:er,getOwnPropertyNames:tr,getOwnPropertySymbols:sr,getPrototypeOf:rr}=Object,Y=globalThis,ss=Y.trustedTypes,ir=ss?ss.emptyScript:"",rs=Y.reactiveElementPolyfillSupport,Pe=d((i,e)=>i,"V"),We={toAttribute(i,e){switch(e){case Boolean:i=i?ir:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ut=d((i,e)=>!Ys(i,e),"ve"),is={attribute:!0,type:String,converter:We,reflect:!1,useDefault:!1,hasChanged:ut};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Y.litPropertyMetadata??(Y.litPropertyMetadata=new WeakMap);let X=(ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=is){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Xs(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:n}=er(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){const o=r==null?void 0:r.call(this);n==null||n.call(this,a),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??is}static _$Ei(){if(this.hasOwnProperty(Pe("elementProperties")))return;const e=rr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Pe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pe("properties"))){const t=this.properties,s=[...tr(t),...sr(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(ts(r))}else e!==void 0&&t.push(ts(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zs(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var s;const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){const a=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:We).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){var s,r;const n=this.constructor,a=n._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const o=n.getPropertyOptions(a),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:We;this._$Em=a;const p=l.fromAttribute(t,o.type);this[a]=p??((r=this._$Ej)==null?void 0:r.get(a))??p,this._$Em=null}}requestUpdate(e,t,s,r=!1,n){var a;if(e!==void 0){const o=this.constructor;if(r===!1&&(n=this[e]),s??(s=o.getPropertyOptions(e)),!((s.hasChanged??ut)(n,t)||s.useDefault&&s.reflect&&n===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:n},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,a]of r){const{wrapped:o}=a,l=this[n];o!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,a,l)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(s)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},d(ve,"j"),ve);X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[Pe("elementProperties")]=new Map,X[Pe("finalized")]=new Map,rs==null||rs({ReactiveElement:X}),(Y.reactiveElementVersions??(Y.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=globalThis,as=d(i=>i,"xe"),Fe=qe.trustedTypes,ns=Fe?Fe.createPolicy("lit-html",{createHTML:d(i=>i,"createHTML")}):void 0,os="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,ls="?"+M,ar=`<${ls}>`,N=document,Oe=d(()=>N.createComment(""),"F"),Ue=d(i=>i===null||typeof i!="object"&&typeof i!="function","q"),gt=Array.isArray,nr=d(i=>gt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function","qe"),vt=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ds=/-->/g,cs=/>/g,L=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hs=/'/g,ps=/"/g,us=/^(?:script|style|textarea|title)$/i,or=d(i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),"Ke"),c=or(1),ee=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),gs=new WeakMap,I=N.createTreeWalker(N,129);function vs(i,e){if(!gt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ns!==void 0?ns.createHTML(e):e}d(vs,"je");const lr=d((i,e)=>{const t=i.length-1,s=[];let r,n=e===2?"<svg>":e===3?"<math>":"",a=Te;for(let o=0;o<t;o++){const l=i[o];let p,g,u=-1,f=0;for(;f<l.length&&(a.lastIndex=f,g=a.exec(l),g!==null);)f=a.lastIndex,a===Te?g[1]==="!--"?a=ds:g[1]!==void 0?a=cs:g[2]!==void 0?(us.test(g[2])&&(r=RegExp("</"+g[2],"g")),a=L):g[3]!==void 0&&(a=L):a===L?g[0]===">"?(a=r??Te,u=-1):g[1]===void 0?u=-2:(u=a.lastIndex-g[2].length,p=g[1],a=g[3]===void 0?L:g[3]==='"'?ps:hs):a===ps||a===hs?a=L:a===ds||a===cs?a=Te:(a=L,r=void 0);const y=a===L&&i[o+1].startsWith("/>")?" ":"";n+=a===Te?l+ar:u>=0?(s.push(p),l.slice(0,u)+os+l.slice(u)+M+y):l+M+(u===-2?o:y)}return[vs(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},"Qe"),Ye=class Ye{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[p,g]=lr(e,t);if(this.el=Ye.createElement(p,s),I.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=I.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(os)){const f=g[a++],y=r.getAttribute(u).split(M),S=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:S[2],strings:y,ctor:S[1]==="."?ft:S[1]==="?"?bt:S[1]==="@"?yt:se}),r.removeAttribute(u)}else u.startsWith(M)&&(l.push({type:6,index:n}),r.removeAttribute(u));if(us.test(r.tagName)){const u=r.textContent.split(M),f=u.length-1;if(f>0){r.textContent=Fe?Fe.emptyScript:"";for(let y=0;y<f;y++)r.append(u[y],Oe()),I.nextNode(),l.push({type:2,index:++n});r.append(u[f],Oe())}}}else if(r.nodeType===8)if(r.data===ls)l.push({type:2,index:n});else{let u=-1;for(;(u=r.data.indexOf(M,u+1))!==-1;)l.push({type:7,index:n}),u+=M.length-1}n++}}static createElement(e,t){const s=N.createElement("template");return s.innerHTML=e,s}};d(Ye,"K");let ze=Ye;function te(i,e,t=i,s){var r,n;if(e===ee)return e;let a=s!==void 0?(r=t._$Co)==null?void 0:r[s]:t._$Cl;const o=Ue(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==o&&((n=a==null?void 0:a._$AO)==null||n.call(a,!1),o===void 0?a=void 0:(a=new o(i),a._$AT(i,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=a:t._$Cl=a),a!==void 0&&(e=te(i,a._$AS(i,e.values),a,s)),e}d(te,"L");const Et=class Et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??N).importNode(t,!0);I.currentNode=r;let n=I.nextNode(),a=0,o=0,l=s[0];for(;l!==void 0;){if(a===l.index){let p;l.type===2?p=new je(n,n.nextSibling,this,e):l.type===1?p=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(p=new $t(n,this,e)),this._$AV.push(p),l=s[++o]}a!==(l==null?void 0:l.index)&&(n=I.nextNode(),a++)}return I.currentNode=N,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}};d(Et,"Ge");let mt=Et;const Xe=class Xe{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=te(this,e,t),Ue(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==ee&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):nr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&Ue(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ze.createElement(vs(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)==null?void 0:t._$AD)===n)this._$AH.p(s);else{const a=new mt(n,this),o=a.u(this.options);a.p(s),this.T(o),this._$AH=a}}_$AC(e){let t=gs.get(e.strings);return t===void 0&&gs.set(e.strings,t=new ze(e)),t}k(e){gt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const n of e)r===t.length?t.push(s=new Xe(this.O(Oe()),this.O(Oe()),this,this.options)):s=t[r],s._$AI(n),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const r=as(e).nextSibling;as(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};d(Xe,"Q");let je=Xe;const Mt=class Mt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,r){const n=this.strings;let a=!1;if(n===void 0)e=te(this,e,t,0),a=!Ue(e)||e!==this._$AH&&e!==ee,a&&(this._$AH=e);else{const o=e;let l,p;for(e=n[0],l=0;l<n.length-1;l++)p=te(this,o[s+l],t,l),p===ee&&(p=this._$AH[l]),a||(a=!Ue(p)||p!==this._$AH[l]),p===h?e=h:e!==h&&(e+=(p??"")+n[l+1]),this._$AH[l]=p}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};d(Mt,"ae");let se=Mt;const Pt=class Pt extends se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}};d(Pt,"Ye");let ft=Pt;const Ot=class Ot extends se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}};d(Ot,"Ze");let bt=Ot;const Ut=class Ut extends se{constructor(e,t,s,r,n){super(e,t,s,r,n),this.type=5}_$AI(e,t=this){if((e=te(this,e,t,0)??h)===ee)return;const s=this._$AH,r=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==h&&(s===h||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}};d(Ut,"Je");let yt=Ut;const Tt=class Tt{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){te(this,e)}};d(Tt,"Xe");let $t=Tt;const ms=qe.litHtmlPolyfillSupport;ms==null||ms(ze,je),(qe.litHtmlVersions??(qe.litHtmlVersions=[])).push("3.3.2");const dr=d((i,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=r=new je(e.insertBefore(Oe(),n),n,void 0,t??{})}return r._$AI(i),r},"et");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=globalThis,zt=class zt extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ee}};d(zt,"m");let $=zt;var fs;$._$litElement$=!0,$.finalized=!0,(fs=He.litElementHydrateSupport)==null||fs.call(He,{LitElement:$});const bs=He.litElementPolyfillSupport;bs==null||bs({LitElement:$}),(He.litElementVersions??(He.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=d(i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)},"A");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr={attribute:!0,type:String,converter:We,reflect:!1,hasChanged:ut},hr=d((i=cr,e,t)=>{const{kind:s,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(t.name,i),s==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,i,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,i,o),o}}}if(s==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,i,!0,o)}}throw Error("Unsupported decorator location: "+s)},"st");function v(i){return(e,t)=>typeof t=="object"?hr(i,e,t):((s,r,n)=>{const a=r.hasOwnProperty(n);return r.constructor.createProperty(n,s),a?Object.getOwnPropertyDescriptor(r,n):void 0})(i,e,t)}d(v,"h");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Re(i){return v({...i,state:!0,attribute:!1})}d(Re,"G");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pr=d((i,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(i,e,t),t),"rt");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ur(i,e){return(t,s,r)=>{const n=d(a=>{var o;return((o=a.renderRoot)==null?void 0:o.querySelector(i))??null},"i");return pr(t,s,{get(){return n(this)}})}}d(ur,"at");const gr={colors:{palette:{slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"}},light:{background:{primary:"#ffffff",secondary:"#f8fafc",tertiary:"#f1f5f9",inverse:"#0f172a"},text:{primary:"#1e293b",secondary:"#475569",muted:"#94a3b8",inverse:"#f8fafc"},border:{default:"#e2e8f0",strong:"#cbd5e1",subtle:"#f1f5f9"},accent:{default:"#06b6d4",hover:"#0891b2",muted:"#cffafe"},status:{success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#3b82f6"},maturity:{m1:"#ef4444",m2:"#f59e0b",m3:"#eab308",m4:"#22c55e",m5:"#3b82f6"}},dark:{background:{primary:"#0f172a",secondary:"#1e293b",tertiary:"#334155",inverse:"#f8fafc"},text:{primary:"#f1f5f9",secondary:"#cbd5e1",muted:"#64748b",inverse:"#0f172a"},border:{default:"#475569",strong:"#64748b",subtle:"#334155"},accent:{default:"#22d3ee",hover:"#67e8f9",muted:"#164e63"},status:{success:"#34d399",warning:"#fbbf24",error:"#f87171",info:"#60a5fa"},maturity:{m1:"#f87171",m2:"#fbbf24",m3:"#facc15",m4:"#4ade80",m5:"#60a5fa"}}},typography:{fontFamily:{sans:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',mono:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem"}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem"},radius:{sm:"0.25rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},shadow:{light:{none:"none",sm:"0 1px 2px rgba(0, 0, 0, 0.05)",md:"0 4px 6px rgba(0, 0, 0, 0.1)",lg:"0 10px 15px rgba(0, 0, 0, 0.1)"},dark:{none:"none",sm:"0 1px 2px rgba(0, 0, 0, 0.3)",md:"0 4px 6px rgba(0, 0, 0, 0.4)",lg:"0 10px 15px rgba(0, 0, 0, 0.5)"}},transition:{fast:"150ms ease",normal:"200ms ease",slow:"300ms ease"}};function Ge(i="light"){const e=gr,t=e.colors[i],s=e.shadow[i];return`
    /* Background */
    --ds-bg-primary: ${t.background.primary};
    --ds-bg-secondary: ${t.background.secondary};
    --ds-bg-tertiary: ${t.background.tertiary};
    --ds-bg-inverse: ${t.background.inverse};

    /* Text */
    --ds-text-primary: ${t.text.primary};
    --ds-text-secondary: ${t.text.secondary};
    --ds-text-muted: ${t.text.muted};
    --ds-text-inverse: ${t.text.inverse};

    /* Border */
    --ds-border-default: ${t.border.default};
    --ds-border-strong: ${t.border.strong};
    --ds-border-subtle: ${t.border.subtle};

    /* Accent */
    --ds-accent: ${t.accent.default};
    --ds-accent-hover: ${t.accent.hover};
    --ds-accent-muted: ${t.accent.muted};

    /* Status */
    --ds-status-success: ${t.status.success};
    --ds-status-warning: ${t.status.warning};
    --ds-status-error: ${t.status.error};
    --ds-status-info: ${t.status.info};

    /* Maturity */
    --ds-maturity-m1: ${t.maturity.m1};
    --ds-maturity-m2: ${t.maturity.m2};
    --ds-maturity-m3: ${t.maturity.m3};
    --ds-maturity-m4: ${t.maturity.m4};
    --ds-maturity-m5: ${t.maturity.m5};

    /* Typography */
    --ds-font-sans: ${e.typography.fontFamily.sans};
    --ds-font-mono: ${e.typography.fontFamily.mono};
    --ds-text-xs: ${e.typography.fontSize.xs};
    --ds-text-sm: ${e.typography.fontSize.sm};
    --ds-text-base: ${e.typography.fontSize.base};
    --ds-text-lg: ${e.typography.fontSize.lg};
    --ds-text-xl: ${e.typography.fontSize.xl};
    --ds-text-2xl: ${e.typography.fontSize["2xl"]};
    --ds-text-3xl: ${e.typography.fontSize["3xl"]};

    /* Spacing */
    --ds-space-1: ${e.spacing[1]};
    --ds-space-2: ${e.spacing[2]};
    --ds-space-3: ${e.spacing[3]};
    --ds-space-4: ${e.spacing[4]};
    --ds-space-5: ${e.spacing[5]};
    --ds-space-6: ${e.spacing[6]};
    --ds-space-8: ${e.spacing[8]};

    /* Radius */
    --ds-radius-sm: ${e.radius.sm};
    --ds-radius-md: ${e.radius.md};
    --ds-radius-lg: ${e.radius.lg};
    --ds-radius-xl: ${e.radius.xl};
    --ds-radius-full: ${e.radius.full};

    /* Shadow */
    --ds-shadow-sm: ${s.sm};
    --ds-shadow-md: ${s.md};
    --ds-shadow-lg: ${s.lg};

    /* Transition */
    --ds-transition-fast: ${e.transition.fast};
    --ds-transition-normal: ${e.transition.normal};
    --ds-transition-slow: ${e.transition.slow};
  `}d(Ge,"ee");function Ke(i="light"){return pt(Ge(i))}d(Ke,"re");const wt=pt(`
  :root,
  :host,
  :host([theme="light"]),
  [theme="light"] {
    ${Ge("light")}
  }

  :host([theme="dark"]),
  [theme="dark"] {
    ${Ge("dark")}
  }

  @media (prefers-color-scheme: dark) {
    :root:not([theme="light"]),
    :host:not([theme="light"]) {
      ${Ge("dark")}
    }
  }
`),vr=_`
  :host {
    /* Light theme - using design system as primary, with hardcoded fallbacks */
    ${Ke("light")}

    /* Component-level variables that reference design system */
    --wt-nav-bg-primary: var(--wt-theme-bg-primary, var(--ds-bg-primary, #ffffff));
    --wt-nav-bg-secondary: var(--wt-theme-bg-secondary, var(--ds-bg-secondary, #f8fafc));
    --wt-nav-bg-tertiary: var(--wt-theme-bg-tertiary, var(--ds-bg-tertiary, #f1f5f9));
    --wt-nav-border: var(--wt-theme-border, var(--ds-border-default, #e2e8f0));
    --wt-nav-text-primary: var(--wt-theme-text-primary, var(--ds-text-primary, #1e293b));
    --wt-nav-text-secondary: var(--wt-theme-text-secondary, var(--ds-text-secondary, #475569));
    --wt-nav-text-muted: var(--wt-theme-text-muted, var(--ds-text-muted, #94a3b8));
    --wt-nav-accent: var(--wt-theme-accent, var(--ds-accent, #06b6d4));
    --wt-nav-accent-hover: var(--wt-theme-accent-hover, var(--ds-accent-hover, #0891b2));

    /* Status colors from design system */
    --wt-nav-status-success: var(--ds-status-success, #10b981);
    --wt-nav-status-warning: var(--ds-status-warning, #f59e0b);
    --wt-nav-status-error: var(--ds-status-error, #ef4444);
    --wt-nav-status-info: var(--ds-status-info, #3b82f6);

    /* Maturity colors from design system */
    --wt-nav-maturity-m1: var(--ds-maturity-m1, #ef4444);
    --wt-nav-maturity-m2: var(--ds-maturity-m2, #f59e0b);
    --wt-nav-maturity-m3: var(--ds-maturity-m3, #eab308);
    --wt-nav-maturity-m4: var(--ds-maturity-m4, #22c55e);
    --wt-nav-maturity-m5: var(--ds-maturity-m5, #3b82f6);

    /* Spacing - from design system */
    --wt-nav-spacing-xs: var(--wt-theme-spacing-xs, var(--ds-space-1, 4px));
    --wt-nav-spacing-sm: var(--wt-theme-spacing-sm, var(--ds-space-2, 8px));
    --wt-nav-spacing-md: var(--wt-theme-spacing-md, var(--ds-space-4, 16px));
    --wt-nav-spacing-lg: var(--wt-theme-spacing-lg, var(--ds-space-6, 24px));

    /* Border radius - from design system */
    --wt-nav-radius-sm: var(--wt-theme-radius-sm, var(--ds-radius-sm, 4px));
    --wt-nav-radius-md: var(--wt-theme-radius-md, var(--ds-radius-md, 8px));
    --wt-nav-radius-lg: var(--wt-theme-radius-lg, var(--ds-radius-lg, 12px));

    /* Font - from design system */
    --wt-nav-font-sans: var(--wt-theme-font-sans, var(--ds-font-sans, system-ui, -apple-system, sans-serif));
    --wt-nav-font-size-sm: var(--wt-theme-font-size-sm, var(--ds-text-sm, 0.75rem));
    --wt-nav-font-size-md: var(--wt-theme-font-size-md, var(--ds-text-base, 0.875rem));
    --wt-nav-font-size-lg: var(--wt-theme-font-size-lg, var(--ds-text-lg, 1rem));

    /* Shadows - from design system */
    --wt-nav-shadow-sm: var(--wt-theme-shadow-sm, var(--ds-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.05)));
    --wt-nav-shadow-md: var(--wt-theme-shadow-md, var(--ds-shadow-md, 0 4px 6px rgba(0, 0, 0, 0.1)));

    /* Transitions - from design system */
    --wt-nav-transition-fast: var(--ds-transition-fast, 150ms ease);
    --wt-nav-transition-normal: var(--ds-transition-normal, 200ms ease);
  }

  :host([theme='dark']) {
    ${Ke("dark")}

    --wt-nav-bg-primary: var(--wt-theme-bg-primary, var(--ds-bg-primary, #0f172a));
    --wt-nav-bg-secondary: var(--wt-theme-bg-secondary, var(--ds-bg-secondary, #1e293b));
    --wt-nav-bg-tertiary: var(--wt-theme-bg-tertiary, var(--ds-bg-tertiary, #334155));
    --wt-nav-border: var(--wt-theme-border, var(--ds-border-default, #475569));
    --wt-nav-text-primary: var(--wt-theme-text-primary, var(--ds-text-primary, #f1f5f9));
    --wt-nav-text-secondary: var(--wt-theme-text-secondary, var(--ds-text-secondary, #cbd5e1));
    --wt-nav-text-muted: var(--wt-theme-text-muted, var(--ds-text-muted, #64748b));
    --wt-nav-accent: var(--wt-theme-accent, var(--ds-accent, #22d3ee));
    --wt-nav-accent-hover: var(--wt-theme-accent-hover, var(--ds-accent-hover, #67e8f9));
  }
`,mr=_`
  * {
    box-sizing: border-box;
  }

  :host {
    font-family: var(--wt-nav-font-sans);
    font-size: var(--wt-nav-font-size-md);
    color: var(--wt-nav-text-primary);
  }
`,fr=_`
  :focus-visible {
    outline: 2px solid var(--wt-nav-accent);
    outline-offset: 2px;
  }

  button:focus-visible {
    outline: 2px solid var(--wt-nav-accent);
    outline-offset: 2px;
  }
`,br=_`
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--wt-nav-spacing-sm);
    padding: var(--wt-nav-spacing-sm) var(--wt-nav-spacing-md);
    border: 1px solid var(--wt-nav-border);
    border-radius: var(--wt-nav-radius-sm);
    background: var(--wt-nav-bg-primary);
    color: var(--wt-nav-text-primary);
    font-family: inherit;
    font-size: var(--wt-nav-font-size-md);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  button:hover {
    background: var(--wt-nav-bg-secondary);
    border-color: var(--wt-nav-text-muted);
  }

  button:active {
    background: var(--wt-nav-bg-tertiary);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  button.primary {
    background: var(--wt-nav-accent);
    border-color: var(--wt-nav-accent);
    color: var(--wt-nav-bg-primary);
  }

  button.primary:hover {
    background: var(--wt-nav-accent-hover);
    border-color: var(--wt-nav-accent-hover);
  }

  button.ghost {
    background: transparent;
    border-color: transparent;
  }

  button.ghost:hover {
    background: var(--wt-nav-bg-secondary);
  }
`,Je=[vr,mr,fr,br];var yr=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,De=d((i,e,t,s)=>{for(var r=s>1?void 0:s?$r(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(s?a(e,t,r):a(r))||r);return s&&r&&yr(e,t,r),r},"Y");let B=(me=class extends ${constructor(){super(...arguments),this.items=[],this.active="",this.theme="light",this.orientation="horizontal"}_handleClick(e){if(e.disabled)return;const t=this.active;if(this.active=e.id,e.href){window.location.href=e.href;return}const s={itemId:e.id,previousItemId:t||void 0};this.dispatchEvent(new CustomEvent("wt-nav-change",{detail:s,bubbles:!0,composed:!0}))}render(){return c`
      <nav class="nav" role="tablist">
        ${this.items.map(e=>c`
            <button
              class="nav-btn ${this.active===e.id?"nav-btn--active":""}"
              role="tab"
              aria-selected="${this.active===e.id}"
              ?disabled="${e.disabled}"
              @click="${()=>this._handleClick(e)}"
            >
              ${e.icon?c`<span class="nav-icon">${e.icon}</span>`:h}
              <span class="nav-label">${e.label}</span>
              ${e.count!==void 0?c`<span class="nav-count">${e.count}</span>`:h}
            </button>
          `)}
      </nav>
    `}},d(me,"P"),me);B.styles=[...Je,_`
      :host {
        display: block;
      }

      .nav {
        display: flex;
        gap: var(--wt-nav-spacing-xs);
        padding: var(--wt-nav-spacing-xs);
        background: var(--wt-nav-bg-secondary);
        border-radius: var(--wt-nav-radius-md);
        overflow-x: auto;
        scrollbar-width: thin;
      }

      .nav::-webkit-scrollbar {
        height: 4px;
      }

      .nav::-webkit-scrollbar-track {
        background: transparent;
      }

      .nav::-webkit-scrollbar-thumb {
        background: var(--wt-nav-border);
        border-radius: 2px;
      }

      .nav-btn {
        display: flex;
        align-items: center;
        gap: var(--wt-nav-spacing-sm);
        padding: var(--wt-nav-spacing-sm) var(--wt-nav-spacing-md);
        font-size: var(--wt-nav-font-size-md);
        font-weight: 500;
        background: transparent;
        color: var(--wt-nav-text-secondary);
        border: none;
        border-radius: var(--wt-nav-radius-sm);
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.2s ease;
      }

      .nav-btn:hover:not([disabled]) {
        background: var(--wt-nav-bg-tertiary);
        color: var(--wt-nav-text-primary);
      }

      .nav-btn--active {
        background: var(--wt-nav-bg-primary);
        color: var(--wt-nav-text-primary);
        box-shadow: var(--wt-nav-shadow-sm);
      }

      .nav-btn[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .nav-icon {
        font-size: 1rem;
      }

      .nav-count {
        font-size: var(--wt-nav-font-size-sm);
        padding: 2px 6px;
        background: var(--wt-nav-bg-tertiary);
        border-radius: var(--wt-nav-radius-sm);
        color: var(--wt-nav-text-muted);
      }

      .nav-btn--active .nav-count {
        background: var(--wt-nav-accent);
        color: var(--wt-nav-bg-primary);
      }

      /* Vertical variant */
      :host([orientation='vertical']) .nav {
        flex-direction: column;
        overflow-x: visible;
        overflow-y: auto;
      }

      :host([orientation='vertical']) .nav-btn {
        justify-content: flex-start;
      }
    `],De([v({type:Array})],B.prototype,"items",2),De([v({type:String,reflect:!0})],B.prototype,"active",2),De([v({type:String,reflect:!0})],B.prototype,"theme",2),De([v({type:String,reflect:!0})],B.prototype,"orientation",2),B=De([P("wt-nav")],B);var wr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,re=d((i,e,t,s)=>{for(var r=s>1?void 0:s?_r(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(s?a(e,t,r):a(r))||r);return s&&r&&wr(e,t,r),r},"R");let O=(fe=class extends ${constructor(){super(...arguments),this.title="",this.version="",this.description="",this.actions=[],this.theme="light"}_handleAction(e){if(e.disabled)return;const t={actionId:e.id};this.dispatchEvent(new CustomEvent("wt-header-action",{detail:t,bubbles:!0,composed:!0}))}render(){return c`
      <header class="header">
        <div class="header-info">
          <div class="header-title-row">
            <h1 class="header-title">${this.title}</h1>
            ${this.version?c`<span class="header-version">v${this.version}</span>`:h}
          </div>
          ${this.description?c`<p class="header-description">${this.description}</p>`:h}
        </div>

        ${this.actions.length>0?c`
              <div class="header-actions">
                ${this.actions.map(e=>c`
                    <button
                      class="${e.variant||"default"}"
                      ?disabled="${e.disabled}"
                      @click="${()=>this._handleAction(e)}"
                    >
                      ${e.icon?c`<span>${e.icon}</span>`:h}
                      ${e.label}
                    </button>
                  `)}
              </div>
            `:h}
      </header>
    `}},d(fe,"k"),fe);O.styles=[...Je,_`
      :host {
        display: block;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: var(--wt-nav-spacing-lg);
        padding-bottom: var(--wt-nav-spacing-lg);
        border-bottom: 1px solid var(--wt-nav-border);
      }

      .header-info {
        flex: 1;
        min-width: 0;
      }

      .header-title-row {
        display: flex;
        align-items: center;
        gap: var(--wt-nav-spacing-sm);
        flex-wrap: wrap;
      }

      .header-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin: 0;
        color: var(--wt-nav-text-primary);
        letter-spacing: -0.025em;
      }

      .header-version {
        display: inline-block;
        padding: 4px 8px;
        font-size: var(--wt-nav-font-size-sm);
        font-weight: 500;
        background: var(--wt-nav-accent);
        color: var(--wt-nav-bg-primary);
        border-radius: var(--wt-nav-radius-sm);
      }

      .header-description {
        font-size: var(--wt-nav-font-size-lg);
        color: var(--wt-nav-text-secondary);
        margin: var(--wt-nav-spacing-sm) 0 0;
        max-width: 600px;
        line-height: 1.5;
      }

      .header-actions {
        display: flex;
        gap: var(--wt-nav-spacing-sm);
        align-items: center;
        flex-shrink: 0;
      }

      /* Responsive: stack on small screens */
      @media (max-width: 640px) {
        .header {
          flex-direction: column;
          align-items: stretch;
        }

        .header-actions {
          justify-content: flex-start;
        }
      }
    `],re([v({type:String})],O.prototype,"title",2),re([v({type:String})],O.prototype,"version",2),re([v({type:String})],O.prototype,"description",2),re([v({type:Array})],O.prototype,"actions",2),re([v({type:String,reflect:!0})],O.prototype,"theme",2),O=re([P("wt-header")],O);var xr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,ie=d((i,e,t,s)=>{for(var r=s>1?void 0:s?kr(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(s?a(e,t,r):a(r))||r);return s&&r&&xr(e,t,r),r},"B");let U=(be=class extends ${constructor(){super(...arguments),this.variant="default",this.theme="light",this.size="md",this.outline=!1}render(){return c`
      <span class="badge badge--${this.variant}">
        ${this.count!==void 0?this.count:c`<slot></slot>`}
      </span>
    `}},d(be,"S"),be);U.styles=[...Je,_`
      :host {
        display: inline-flex;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 2px 8px;
        font-size: var(--wt-nav-font-size-sm);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        border-radius: var(--wt-nav-radius-sm);
        white-space: nowrap;
      }

      /* Variants */
      .badge--default {
        background: var(--wt-nav-bg-tertiary);
        color: var(--wt-nav-text-secondary);
      }

      .badge--primary {
        background: var(--wt-nav-accent);
        color: var(--wt-nav-bg-primary);
      }

      .badge--success {
        background: #10b981;
        color: #ffffff;
      }

      .badge--warning {
        background: #f59e0b;
        color: #000000;
      }

      .badge--error {
        background: #ef4444;
        color: #ffffff;
      }

      .badge--info {
        background: #3b82f6;
        color: #ffffff;
      }

      /* Maturity level variants */
      .badge--m1 {
        background: #ef4444;
        color: #ffffff;
      }

      .badge--m2 {
        background: #f59e0b;
        color: #000000;
      }

      .badge--m3 {
        background: #eab308;
        color: #000000;
      }

      .badge--m4 {
        background: #22c55e;
        color: #ffffff;
      }

      .badge--m5 {
        background: #3b82f6;
        color: #ffffff;
      }

      /* Outline variant */
      :host([outline]) .badge {
        background: transparent;
        border: 1px solid currentColor;
      }

      :host([outline]) .badge--default {
        color: var(--wt-nav-text-secondary);
        border-color: var(--wt-nav-border);
      }

      :host([outline]) .badge--success {
        color: #10b981;
      }

      :host([outline]) .badge--warning {
        color: #f59e0b;
      }

      :host([outline]) .badge--error {
        color: #ef4444;
      }

      :host([outline]) .badge--info {
        color: #3b82f6;
      }

      /* Size variants */
      :host([size='sm']) .badge {
        padding: 1px 4px;
        font-size: 0.625rem;
      }

      :host([size='lg']) .badge {
        padding: 4px 12px;
        font-size: var(--wt-nav-font-size-md);
      }
    `],ie([v({type:String,reflect:!0})],U.prototype,"variant",2),ie([v({type:Number})],U.prototype,"count",2),ie([v({type:String,reflect:!0})],U.prototype,"theme",2),ie([v({type:String,reflect:!0})],U.prototype,"size",2),ie([v({type:Boolean,reflect:!0})],U.prototype,"outline",2),U=ie([P("wt-badge")],U);var Ar=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,V=d((i,e,t,s)=>{for(var r=s>1?void 0:s?Sr(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(s?a(e,t,r):a(r))||r);return s&&r&&Ar(e,t,r),r},"T");let k=(ye=class extends ${constructor(){super(...arguments),this.name="",this.label="",this.options=[],this.showActions=!1,this.theme="light",this._selectedValues=new Set}connectedCallback(){super.connectedCallback(),this._selectedValues=new Set(this.options.filter(e=>e.checked!==!1).map(e=>e.value))}updated(e){e.has("options")&&(this._selectedValues=new Set(this.options.filter(t=>t.checked!==!1).map(t=>t.value)))}_toggleOption(e){this._selectedValues.has(e)?this._selectedValues.delete(e):this._selectedValues.add(e),this._selectedValues=new Set(this._selectedValues),this._dispatchChange()}_selectAll(){this._selectedValues=new Set(this.options.map(e=>e.value)),this._dispatchChange()}_clearAll(){this._selectedValues=new Set,this._dispatchChange()}_dispatchChange(){const e={filterName:this.name,selectedValues:Array.from(this._selectedValues),allValues:this.options.map(t=>t.value)};this.dispatchEvent(new CustomEvent("wt-filter-change",{detail:e,bubbles:!0,composed:!0}))}render(){return c`
      <div class="filter-group">
        ${this.label?c`<div class="filter-label">${this.label}</div>`:h}

        <div class="filter-options">
          ${this.options.map(e=>{const t=this._selectedValues.has(e.value);return c`
              <label
                class="filter-btn ${t?"":"filter-btn--inactive"}"
                @click="${()=>this._toggleOption(e.value)}"
              >
                <input type="checkbox" ?checked="${t}" />
                ${e.color?c`<span
                      class="filter-color"
                      style="background-color: ${e.color}"
                    ></span>`:h}
                <span>${e.label}</span>
              </label>
            `})}
        </div>

        ${this.showActions?c`
              <div class="filter-actions">
                <button class="ghost" @click="${this._selectAll}">Select All</button>
                <button class="ghost" @click="${this._clearAll}">Clear All</button>
              </div>
            `:h}
      </div>
    `}},d(ye,"y"),ye);k.styles=[...Je,_`
      :host {
        display: block;
      }

      .filter-group {
        display: flex;
        flex-direction: column;
        gap: var(--wt-nav-spacing-sm);
      }

      .filter-label {
        font-size: var(--wt-nav-font-size-sm);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--wt-nav-text-muted);
      }

      .filter-options {
        display: flex;
        flex-wrap: wrap;
        gap: var(--wt-nav-spacing-sm);
      }

      .filter-btn {
        display: flex;
        align-items: center;
        gap: var(--wt-nav-spacing-sm);
        padding: var(--wt-nav-spacing-sm) var(--wt-nav-spacing-md);
        border-radius: var(--wt-nav-radius-md);
        font-size: var(--wt-nav-font-size-md);
        font-weight: 500;
        cursor: pointer;
        transition: all 0.15s ease;
        border: 1px solid var(--wt-nav-border);
        background: transparent;
        color: var(--wt-nav-text-primary);
        user-select: none;
      }

      .filter-btn:hover {
        background: var(--wt-nav-bg-secondary);
      }

      .filter-btn input {
        display: none;
      }

      .filter-btn--inactive {
        opacity: 0.4;
      }

      .filter-color {
        width: 14px;
        height: 14px;
        border-radius: var(--wt-nav-radius-sm);
        flex-shrink: 0;
      }

      .filter-actions {
        display: flex;
        gap: var(--wt-nav-spacing-sm);
        margin-top: var(--wt-nav-spacing-sm);
        padding-top: var(--wt-nav-spacing-sm);
        border-top: 1px solid var(--wt-nav-border);
      }

      .filter-actions button {
        padding: var(--wt-nav-spacing-xs) var(--wt-nav-spacing-sm);
        font-size: var(--wt-nav-font-size-sm);
      }
    `],V([v({type:String})],k.prototype,"name",2),V([v({type:String})],k.prototype,"label",2),V([v({type:Array})],k.prototype,"options",2),V([v({type:Boolean})],k.prototype,"showActions",2),V([v({type:String,reflect:!0})],k.prototype,"theme",2),V([Re()],k.prototype,"_selectedValues",2),k=V([P("wt-filter-group")],k);var Cr=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,T=d((i,e,t,s)=>{for(var r=s>1?void 0:s?Er(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(s?a(e,t,r):a(r))||r);return s&&r&&Cr(e,t,r),r},"M");const ys="wt-theme-preference";let x=($e=class extends ${constructor(){super(...arguments),this.mode="system",this.theme="dark",this.showLabel=!1,this.variant="icon",this.persist=!0,this.targetSelector="html",this._resolvedTheme="dark",this._mediaQuery=null,this._handleSystemChange=()=>{this.mode==="system"&&this._updateResolvedTheme()}}connectedCallback(){if(super.connectedCallback(),this.persist){const e=localStorage.getItem(ys);e&&["light","dark","system"].includes(e)&&(this.mode=e)}this._mediaQuery=window.matchMedia("(prefers-color-scheme: dark)"),this._mediaQuery.addEventListener("change",this._handleSystemChange),this._updateResolvedTheme()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._mediaQuery)==null||e.removeEventListener("change",this._handleSystemChange)}_updateResolvedTheme(){var e;let t;this.mode==="system"?t=(e=this._mediaQuery)!=null&&e.matches?"dark":"light":t=this.mode,this._resolvedTheme=t,this.theme=t;const s=document.querySelector(this.targetSelector);s&&s.setAttribute("theme",t),this.dispatchEvent(new CustomEvent("wt-theme-change",{detail:{theme:this.mode,resolvedTheme:t},bubbles:!0,composed:!0}))}_setMode(e){this.mode=e,this.persist&&localStorage.setItem(ys,e),this._updateResolvedTheme()}_toggleTheme(){const e=this._resolvedTheme==="dark"?"light":"dark";this._setMode(e)}_renderSunIcon(){return c`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `}_renderMoonIcon(){return c`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `}_renderSystemIcon(){return c`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    `}_renderIconVariant(){return c`
      <button
        class="toggle-button"
        @click=${this._toggleTheme}
        aria-label=${this._resolvedTheme==="dark"?"Switch to light mode":"Switch to dark mode"}
        title=${this._resolvedTheme==="dark"?"Switch to light mode":"Switch to dark mode"}
      >
        ${this._resolvedTheme==="dark"?this._renderSunIcon():this._renderMoonIcon()}
      </button>
      ${this.showLabel?c`<span class="toggle-label">${this._resolvedTheme==="dark"?"Light":"Dark"}</span>`:""}
    `}_renderSegmentedVariant(){return c`
      <div class="segmented-control" role="group" aria-label="Theme selection">
        <button
          class="segment"
          aria-pressed=${this.mode==="light"}
          @click=${()=>this._setMode("light")}
          title="Light mode"
        >
          ${this._renderSunIcon()}
          ${this.showLabel?c`<span class="segment-label">Light</span>`:""}
        </button>
        <button
          class="segment"
          aria-pressed=${this.mode==="system"}
          @click=${()=>this._setMode("system")}
          title="System preference"
        >
          ${this._renderSystemIcon()}
          ${this.showLabel?c`<span class="segment-label">System</span>`:""}
        </button>
        <button
          class="segment"
          aria-pressed=${this.mode==="dark"}
          @click=${()=>this._setMode("dark")}
          title="Dark mode"
        >
          ${this._renderMoonIcon()}
          ${this.showLabel?c`<span class="segment-label">Dark</span>`:""}
        </button>
      </div>
    `}render(){return c`
      <div class="toggle-container">
        ${this.variant==="segmented"?this._renderSegmentedVariant():this._renderIconVariant()}
      </div>
    `}},d($e,"f"),$e);x.styles=_`
    :host {
      ${Ke("dark")}
      display: inline-flex;
      align-items: center;
      gap: var(--ds-space-2);
    }

    :host([theme="light"]) {
      ${Ke("light")}
    }

    .toggle-container {
      display: flex;
      align-items: center;
      gap: var(--ds-space-2);
    }

    .toggle-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0;
      border: 1px solid var(--ds-border-default);
      border-radius: var(--ds-radius-md);
      background: var(--ds-bg-secondary);
      color: var(--ds-text-primary);
      cursor: pointer;
      transition: all var(--ds-transition-fast);
    }

    .toggle-button:hover {
      background: var(--ds-bg-tertiary);
      border-color: var(--ds-border-strong);
    }

    .toggle-button:focus-visible {
      outline: 2px solid var(--ds-accent);
      outline-offset: 2px;
    }

    .toggle-button svg {
      width: 20px;
      height: 20px;
    }

    .toggle-label {
      font-family: var(--ds-font-sans);
      font-size: var(--ds-text-sm);
      color: var(--ds-text-secondary);
    }

    /* Segmented control variant */
    .segmented-control {
      display: flex;
      background: var(--ds-bg-tertiary);
      border-radius: var(--ds-radius-md);
      padding: 2px;
      gap: 2px;
    }

    .segment {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--ds-space-1) var(--ds-space-2);
      border: none;
      border-radius: var(--ds-radius-sm);
      background: transparent;
      color: var(--ds-text-muted);
      cursor: pointer;
      transition: all var(--ds-transition-fast);
      font-family: var(--ds-font-sans);
      font-size: var(--ds-text-xs);
    }

    .segment:hover {
      color: var(--ds-text-secondary);
    }

    .segment[aria-pressed="true"] {
      background: var(--ds-bg-primary);
      color: var(--ds-text-primary);
      box-shadow: var(--ds-shadow-sm);
    }

    .segment:focus-visible {
      outline: 2px solid var(--ds-accent);
      outline-offset: -2px;
    }

    .segment svg {
      width: 14px;
      height: 14px;
    }

    .segment-label {
      margin-left: var(--ds-space-1);
    }
  `,T([v({type:String})],x.prototype,"mode",2),T([v({type:String,reflect:!0})],x.prototype,"theme",2),T([v({type:Boolean,attribute:"show-label"})],x.prototype,"showLabel",2),T([v({type:String})],x.prototype,"variant",2),T([v({type:Boolean})],x.prototype,"persist",2),T([v({type:String,attribute:"target-selector"})],x.prototype,"targetSelector",2),T([Re()],x.prototype,"_resolvedTheme",2),x=T([P("wt-theme-toggle")],x);const _t=_`
  .icon {
    width: 1em;
    height: 1em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  .chevron {
    width: 0.75em;
    height: 0.75em;
    transition: transform var(--ds-transition-fast);
  }

  .chevron.open {
    transform: rotate(180deg);
  }
`,Mr=_`
  ${wt}
  ${_t}

  :host {
    display: block;
    font-family: var(--ds-font-sans);
  }

  /* Skip link for accessibility */
  .skip-link {
    position: absolute;
    left: -9999px;
    top: 0;
    z-index: 9999;
    padding: var(--ds-space-2) var(--ds-space-4);
    background: var(--ds-accent);
    color: var(--ds-text-inverse);
    text-decoration: none;
    font-weight: 500;
  }

  .skip-link:focus {
    left: 0;
  }

  /* Main nav container */
  .navbar {
    position: relative;
    background: var(--ds-bg-primary);
    border-bottom: 1px solid var(--ds-border-default);
  }

  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--ds-space-4);
    height: 64px;
  }

  /* Brand */
  .navbar-brand {
    display: flex;
    align-items: center;
    gap: var(--ds-space-2);
    text-decoration: none;
    color: var(--ds-text-primary);
    font-weight: 600;
    font-size: var(--ds-text-lg);
  }

  .navbar-brand:hover {
    text-decoration: none;
  }

  .navbar-logo {
    height: 32px;
    width: auto;
  }

  .navbar-title {
    display: flex;
    align-items: baseline;
  }

  /* Desktop links */
  .navbar-links {
    display: flex;
    align-items: center;
    gap: var(--ds-space-1);
  }

  .navbar-link {
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-1);
    padding: var(--ds-space-2) var(--ds-space-3);
    color: var(--ds-text-secondary);
    text-decoration: none;
    font-size: var(--ds-text-sm);
    font-weight: 500;
    border-radius: var(--ds-radius-md);
    border: none;
    background: transparent;
    cursor: pointer;
    transition: all var(--ds-transition-fast);
  }

  .navbar-link:hover {
    color: var(--ds-text-primary);
    background: var(--ds-bg-secondary);
  }

  .navbar-link[aria-expanded="true"] {
    color: var(--ds-text-primary);
    background: var(--ds-bg-secondary);
  }

  /* Dropdown container */
  .navbar-dropdown {
    position: relative;
  }

  .navbar-dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    padding: var(--ds-space-2);
    background: var(--ds-bg-primary);
    border: 1px solid var(--ds-border-default);
    border-radius: var(--ds-radius-lg);
    box-shadow: var(--ds-shadow-lg);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: all var(--ds-transition-fast);
    z-index: 100;
  }

  .navbar-dropdown.open .navbar-dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(4px);
  }

  .navbar-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--ds-space-2);
    padding: var(--ds-space-2) var(--ds-space-3);
    color: var(--ds-text-secondary);
    text-decoration: none;
    font-size: var(--ds-text-sm);
    border-radius: var(--ds-radius-md);
    transition: all var(--ds-transition-fast);
  }

  .navbar-dropdown-item:hover {
    color: var(--ds-text-primary);
    background: var(--ds-bg-secondary);
  }

  .navbar-dropdown-divider {
    height: 1px;
    margin: var(--ds-space-2) 0;
    background: var(--ds-border-subtle);
  }

  /* Action buttons (e.g., GitHub) */
  .navbar-action {
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-2);
    padding: var(--ds-space-2) var(--ds-space-4);
    color: var(--ds-text-primary);
    text-decoration: none;
    font-size: var(--ds-text-sm);
    font-weight: 500;
    background: var(--ds-bg-secondary);
    border: 1px solid var(--ds-border-default);
    border-radius: var(--ds-radius-md);
    transition: all var(--ds-transition-fast);
  }

  .navbar-action:hover {
    background: var(--ds-bg-tertiary);
    border-color: var(--ds-border-strong);
  }

  /* Mobile toggle button */
  .navbar-mobile-toggle {
    display: none;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    background: transparent;
    border: none;
    border-radius: var(--ds-radius-md);
    cursor: pointer;
    color: var(--ds-text-primary);
  }

  .navbar-mobile-toggle:hover {
    background: var(--ds-bg-secondary);
  }

  .navbar-mobile-toggle .icon-hamburger,
  .navbar-mobile-toggle .icon-close {
    width: 24px;
    height: 24px;
  }

  .navbar-mobile-toggle .icon-close {
    display: none;
  }

  .navbar-mobile-toggle[aria-expanded="true"] .icon-hamburger {
    display: none;
  }

  .navbar-mobile-toggle[aria-expanded="true"] .icon-close {
    display: block;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .navbar-links {
      display: none;
    }

    .navbar-mobile-toggle {
      display: flex;
    }
  }
`,Pr=_`
  ${wt}
  ${_t}

  :host {
    display: block;
    font-family: var(--ds-font-sans);
  }

  :host(:not([open])) .mega-menu {
    display: none;
  }

  .mega-menu {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
  }

  .mega-menu-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .mega-menu-panel {
    position: relative;
    background: var(--ds-bg-primary);
    border-bottom: 1px solid var(--ds-border-default);
    box-shadow: var(--ds-shadow-lg);
    max-height: calc(100vh - 64px - 48px);
    overflow-y: auto;
  }

  .mega-menu-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--ds-space-6) var(--ds-space-4);
  }

  .mega-menu-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--ds-space-6);
  }

  /* Category */
  .category {
    display: flex;
    flex-direction: column;
  }

  .category-header {
    margin-bottom: var(--ds-space-4);
  }

  .category-title {
    margin: 0 0 var(--ds-space-1);
    font-size: var(--ds-text-sm);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .category-title a {
    color: var(--ds-text-primary);
    text-decoration: none;
  }

  .category-title a:hover {
    color: var(--ds-accent);
  }

  .category-desc {
    margin: 0;
    font-size: var(--ds-text-xs);
    color: var(--ds-text-muted);
  }

  /* Products list */
  .items-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--ds-space-1);
  }

  .item-link {
    display: block;
    padding: var(--ds-space-2) var(--ds-space-3);
    border-radius: var(--ds-radius-md);
    text-decoration: none;
    transition: all var(--ds-transition-fast);
  }

  .item-link:hover {
    background: var(--ds-bg-secondary);
  }

  .item-name {
    display: block;
    font-size: var(--ds-text-sm);
    font-weight: 500;
    color: var(--ds-text-primary);
  }

  .item-tagline {
    margin: 2px 0 0;
    font-size: var(--ds-text-xs);
    color: var(--ds-text-muted);
  }

  .view-more {
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-1);
    margin-top: var(--ds-space-3);
    padding: var(--ds-space-2) var(--ds-space-3);
    font-size: var(--ds-text-xs);
    font-weight: 500;
    color: var(--ds-accent);
    text-decoration: none;
    border-radius: var(--ds-radius-md);
    transition: all var(--ds-transition-fast);
  }

  .view-more:hover {
    background: var(--ds-accent-muted);
  }

  /* Footer */
  .mega-menu-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--ds-space-6);
    padding-top: var(--ds-space-4);
    border-top: 1px solid var(--ds-border-subtle);
  }

  .footer-links {
    display: flex;
    align-items: center;
    gap: var(--ds-space-4);
  }

  .footer-link {
    font-size: var(--ds-text-sm);
    color: var(--ds-text-secondary);
    text-decoration: none;
    transition: color var(--ds-transition-fast);
  }

  .footer-link:hover {
    color: var(--ds-text-primary);
  }

  .footer-divider {
    color: var(--ds-text-muted);
  }

  .footer-link-legal {
    font-size: var(--ds-text-xs);
    color: var(--ds-text-muted);
  }

  .mega-menu-stats {
    font-size: var(--ds-text-xs);
    color: var(--ds-text-muted);
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .mega-menu-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .mega-menu-grid {
      grid-template-columns: 1fr;
    }

    .mega-menu-footer {
      flex-direction: column;
      gap: var(--ds-space-3);
      text-align: center;
    }

    .footer-links {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`,Or=_`
  ${wt}
  ${_t}

  :host {
    display: block;
    font-family: var(--ds-font-sans);
  }

  :host(:not([open])) .mobile-menu {
    display: none;
  }

  .mobile-menu {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--ds-bg-primary);
    overflow-y: auto;
    z-index: 40;
    padding: var(--ds-space-4);
  }

  .mobile-section {
    padding: var(--ds-space-3) 0;
    border-bottom: 1px solid var(--ds-border-subtle);
  }

  .mobile-section:last-child {
    border-bottom: none;
  }

  .mobile-label {
    display: block;
    padding: var(--ds-space-2) var(--ds-space-3);
    font-size: var(--ds-text-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--ds-text-muted);
  }

  .mobile-link {
    display: flex;
    align-items: center;
    gap: var(--ds-space-3);
    padding: var(--ds-space-3) var(--ds-space-3);
    font-size: var(--ds-text-base);
    font-weight: 500;
    color: var(--ds-text-primary);
    text-decoration: none;
    border-radius: var(--ds-radius-md);
    transition: all var(--ds-transition-fast);
  }

  .mobile-link:hover {
    background: var(--ds-bg-secondary);
  }

  .mobile-link-icon {
    width: 20px;
    height: 20px;
    color: var(--ds-text-secondary);
  }
`,$s=c`
  <svg class="chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
  </svg>
`,Ur=c`
  <svg class="chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
  </svg>
`,Tr=c`
  <svg class="icon-hamburger" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
`,zr=c`
  <svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
`;c`
  <svg class="icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
  </svg>
`,c`
  <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
  </svg>
`,c`
  <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z" />
    <path d="M3.75 8a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4a6 6 0 016 6v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16a8 8 0 00-8-8h-.25z" />
    <circle cx="5" cy="19" r="2" />
  </svg>
`,c`
  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
`;var jr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Ne=d((i,e,t,s)=>{for(var r=s>1?void 0:s?Hr(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(s?a(e,t,r):a(r))||r);return s&&r&&jr(e,t,r),r},"Z");let W=(we=class extends ${constructor(){super(...arguments),this.open=!1,this.config=null,this.baseUrl="",this.theme="dark",this._handleBackdropClick=()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))},this._handleLinkClick=()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}}_getItemsByCategory(e){if(!this.config)return[];const t=this.config.maxFeaturedPerCategory??5;return this.config.items.filter(s=>s.categoryId===e&&s.featured!==!1).slice(0,t)}_getCategoryCount(e){return this.config?this.config.items.filter(t=>t.categoryId===e).length:0}_getUrl(e){return e?e.startsWith("http")||e.startsWith("/")?e:`${this.baseUrl}${e.startsWith("/")?"":"/"}${e}`:"#"}render(){if(!this.config)return h;const e=this.config.items.length,t=this.config.categories.length;return c`
      <div class="mega-menu">
        <div class="mega-menu-backdrop" @click=${this._handleBackdropClick}></div>
        <div class="mega-menu-panel">
          <div class="mega-menu-content">
            <div class="mega-menu-grid">
              ${this.config.categories.sort((s,r)=>(s.order??0)-(r.order??0)).map(s=>this._renderCategory(s))}
            </div>
            ${this._renderFooter(e,t)}
          </div>
        </div>
      </div>
    `}_renderCategory(e){const t=this._getItemsByCategory(e.id),s=this._getCategoryCount(e.id)-t.length;return c`
      <div class="category">
        <div class="category-header">
          <h3 class="category-title">
            ${e.href?c`<a href=${this._getUrl(e.href)} @click=${this._handleLinkClick}>
                  ${e.label}
                </a>`:e.label}
          </h3>
          ${e.description?c`<p class="category-desc">${e.description}</p>`:h}
        </div>
        <ul class="items-list">
          ${t.map(r=>c`
              <li>
                <a
                  href=${this._getUrl(r.href)}
                  class="item-link"
                  @click=${this._handleLinkClick}
                >
                  <span class="item-name">${r.label}</span>
                  ${r.tagline?c`<p class="item-tagline">${r.tagline}</p>`:h}
                </a>
              </li>
            `)}
        </ul>
        ${s>0&&e.href?c`
              <a
                href=${this._getUrl(e.href)}
                class="view-more"
                @click=${this._handleLinkClick}
              >
                +${s} more ${e.label.toLowerCase()}
                ${Ur}
              </a>
            `:h}
      </div>
    `}_renderFooter(e,t){var s,r;const n=(s=this.config)==null?void 0:s.footerLinks,a=(r=this.config)==null?void 0:r.footerText;return!(n!=null&&n.length)&&!a?h:c`
      <div class="mega-menu-footer">
        ${n!=null&&n.length?c`
              <div class="footer-links">
                ${n.map((o,l)=>{var p,g;return c`
                    ${l>0&&(p=o.id)!=null&&p.startsWith("legal-")?c`<span class="footer-divider">|</span>`:h}
                    <a
                      href=${this._getUrl(o.href)}
                      class="footer-link ${(g=o.id)!=null&&g.startsWith("legal-")?"footer-link-legal":""}"
                      ?target=${o.external?"_blank":h}
                      ?rel=${o.external?"noopener noreferrer":h}
                      @click=${this._handleLinkClick}
                    >
                      ${o.label}
                    </a>
                  `})}
              </div>
            `:h}
        ${a?c`<span class="mega-menu-stats">${a}</span>`:e>0?c`<span class="mega-menu-stats">
              ${e} items across ${t} categories
            </span>`:h}
      </div>
    `}},d(we,"U"),we);W.styles=Pr,Ne([v({type:Boolean,reflect:!0})],W.prototype,"open",2),Ne([v({type:Object})],W.prototype,"config",2),Ne([v({type:String})],W.prototype,"baseUrl",2),Ne([v({type:String,reflect:!0})],W.prototype,"theme",2),W=Ne([P("wt-mega-menu")],W);var Rr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,Qe=d((i,e,t,s)=>{for(var r=s>1?void 0:s?Dr(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(s?a(e,t,r):a(r))||r);return s&&r&&Rr(e,t,r),r},"ie");let ae=(_e=class extends ${constructor(){super(...arguments),this.open=!1,this.config={},this.theme="dark",this._handleLinkClick=()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}}_getUrl(e){return e?e.startsWith("http")||e.startsWith("/")?e:`${this.config.baseUrl||""}${e.startsWith("/")?"":"/"}${e}`:"#"}_getSections(){var e,t,s,r;if((e=this.config.mobileSections)!=null&&e.length)return this.config.mobileSections;const n=[];return(this.config.megaMenus??(this.config.megaMenu?[this.config.megaMenu]:[])).forEach((a,o)=>{const l=a.categories.map(p=>({id:p.id,label:p.label,href:p.href}));n.push({id:a.id??`mega-menu-${o}`,label:a.label,items:l})}),(t=this.config.links)!=null&&t.length&&n.push({id:"links",items:this.config.links}),(s=this.config.dropdowns)==null||s.forEach(a=>{const o=[...a.items];a.extraItems&&o.push(...a.extraItems),n.push({id:a.id,label:a.label,items:o})}),(r=this.config.actions)!=null&&r.length&&n.push({id:"actions",items:this.config.actions}),n}render(){const e=this._getSections();return c`
      <div class="mobile-menu" role="navigation" aria-label="Mobile navigation">
        ${e.map(t=>this._renderSection(t))}
      </div>
    `}_renderSection(e){return c`
      <div class="mobile-section">
        ${e.label?c`<span class="mobile-label">${e.label}</span>`:h}
        ${e.items.map(t=>this._renderLink(t))}
      </div>
    `}_renderLink(e){return c`
      <a
        href=${this._getUrl(e.href)}
        class="mobile-link"
        ?target=${e.external?"_blank":h}
        ?rel=${e.external?"noopener noreferrer":h}
        @click=${this._handleLinkClick}
      >
        ${e.icon?c`<span class="mobile-link-icon" .innerHTML=${e.icon}></span>`:h}
        ${e.label}
      </a>
    `}},d(_e,"I"),_e);ae.styles=Or,Qe([v({type:Boolean,reflect:!0})],ae.prototype,"open",2),Qe([v({type:Object})],ae.prototype,"config",2),Qe([v({type:String,reflect:!0})],ae.prototype,"theme",2),ae=Qe([P("wt-mobile-menu")],ae);var Nr=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,q=d((i,e,t,s)=>{for(var r=s>1?void 0:s?Lr(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(s?a(e,t,r):a(r))||r);return s&&r&&Nr(e,t,r),r},"D");let A=(xe=class extends ${constructor(){super(),this.config={},this.theme="dark",this._activeMegaMenu=null,this._mobileMenuOpen=!1,this._activeDropdown=null,this._boundHandleKeydown=this._handleKeydown.bind(this),this._boundHandleClickOutside=this._handleClickOutside.bind(this)}_getMegaMenus(){return(this.config.megaMenus??(this.config.megaMenu?[this.config.megaMenu]:[])).map((e,t)=>({id:e.id??e.label??`megamenu-${t}`,config:e}))}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._boundHandleKeydown),document.addEventListener("mousedown",this._boundHandleClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._boundHandleKeydown),document.removeEventListener("mousedown",this._boundHandleClickOutside)}_handleKeydown(e){var t,s,r;if(e.key==="Escape")if(this._activeDropdown)this._activeDropdown=null;else if(this._activeMegaMenu){const n=this._activeMegaMenu;this._activeMegaMenu=null,(s=(t=this.shadowRoot)==null?void 0:t.querySelector(`.megamenu-trigger[data-megamenu-id="${n}"]`))==null||s.focus()}else this._mobileMenuOpen&&(this._mobileMenuOpen=!1,(r=this._mobileToggle)==null||r.focus())}_handleClickOutside(e){var t;const s=e.target;if(this._activeDropdown){const r=(t=this.shadowRoot)==null?void 0:t.querySelector(`[data-dropdown="${this._activeDropdown}"]`);r&&!r.contains(s)&&(this._activeDropdown=null)}}_toggleMegaMenu(e){this._activeDropdown=null,this._activeMegaMenu=this._activeMegaMenu===e?null:e}_toggleDropdown(e){this._activeMegaMenu=null,this._activeDropdown=this._activeDropdown===e?null:e}_toggleMobileMenu(){this._mobileMenuOpen=!this._mobileMenuOpen}_closeMegaMenu(){this._activeMegaMenu=null}_closeMobileMenu(){this._mobileMenuOpen=!1}_closeDropdowns(){this._activeDropdown=null}_getUrl(e){return e?e.startsWith("http")||e.startsWith("/")?e:`${this.config.baseUrl||""}${e.startsWith("/")?"":"/"}${e}`:"#"}render(){return c`
      <nav class="navbar" aria-label="Main navigation">
        <a href="#main-content" class="skip-link">Skip to main content</a>

        <div class="navbar-container">
          ${this._renderBrand()}
          ${this._renderDesktopLinks()}
          ${this._renderMobileToggle()}
        </div>

        ${this._getMegaMenus().map(({id:e,config:t})=>c`
            <wt-mega-menu
              ?open=${this._activeMegaMenu===e}
              .config=${t}
              .baseUrl=${this.config.baseUrl||""}
              theme=${this.theme}
              @close=${this._closeMegaMenu}
            ></wt-mega-menu>
          `)}

        <wt-mobile-menu
          ?open=${this._mobileMenuOpen}
          .config=${this.config}
          theme=${this.theme}
          @close=${this._closeMobileMenu}
        ></wt-mobile-menu>
      </nav>
    `}_renderBrand(){const e=this.config.brand;if(!e)return h;const t=e.href||this.config.baseUrl||"/";return e.html?c`
        <a href=${t} class="navbar-brand">
          <span .innerHTML=${e.html}></span>
        </a>
      `:c`
      <a href=${t} class="navbar-brand">
        ${e.logoUrl?c`<img
              src=${e.logoUrl}
              alt=${e.logoAlt||e.name}
              class="navbar-logo"
            />`:h}
        <span class="navbar-title">${e.name}</span>
      </a>
    `}_renderDesktopLinks(){var e,t,s;return c`
      <div class="navbar-links">
        <!-- Mega menu triggers -->
        ${this._getMegaMenus().map(({id:r,config:n})=>c`
            <button
              class="navbar-link megamenu-trigger"
              data-megamenu-id=${r}
              aria-expanded=${this._activeMegaMenu===r}
              aria-haspopup="true"
              @click=${()=>this._toggleMegaMenu(r)}
            >
              ${n.label} ${$s}
            </button>
          `)}

        <!-- Simple links -->
        ${(e=this.config.links)==null?void 0:e.map(r=>c`
            <a
              href=${this._getUrl(r.href)}
              class="navbar-link"
              ?target=${r.external?"_blank":h}
              ?rel=${r.external?"noopener noreferrer":h}
            >
              ${r.label}
            </a>
          `)}

        <!-- Dropdown menus -->
        ${(t=this.config.dropdowns)==null?void 0:t.map(r=>this._renderDropdown(r))}

        <!-- Action buttons -->
        ${(s=this.config.actions)==null?void 0:s.map(r=>c`
            <a
              href=${this._getUrl(r.href)}
              class="navbar-action"
              ?target=${r.external?"_blank":h}
              ?rel=${r.external?"noopener noreferrer":h}
            >
              ${r.icon?c`<span class="icon" .innerHTML=${r.icon}></span>`:h}
              ${r.label}
            </a>
          `)}
      </div>
    `}_renderDropdown(e){const t=this._activeDropdown===e.id;return c`
      <div
        class="navbar-dropdown ${t?"open":""}"
        data-dropdown=${e.id}
      >
        <button
          class="navbar-link"
          aria-expanded=${t}
          aria-haspopup="true"
          @click=${()=>this._toggleDropdown(e.id)}
        >
          ${e.label} ${$s}
        </button>
        <div class="navbar-dropdown-menu">
          ${e.items.map(s=>c`
              <a
                href=${this._getUrl(s.href)}
                class="navbar-dropdown-item"
                ?target=${s.external?"_blank":h}
                ?rel=${s.external?"noopener noreferrer":h}
                @click=${this._closeDropdowns}
              >
                ${s.icon?c`<span class="icon" .innerHTML=${s.icon}></span>`:h}
                ${s.label}
              </a>
            `)}
          ${e.extraItems?c`
                <div class="navbar-dropdown-divider"></div>
                ${e.extraItems.map(s=>c`
                    <a
                      href=${this._getUrl(s.href)}
                      class="navbar-dropdown-item"
                      ?target=${s.external?"_blank":h}
                      ?rel=${s.external?"noopener noreferrer":h}
                      @click=${this._closeDropdowns}
                    >
                      ${s.icon?c`<span class="icon" .innerHTML=${s.icon}></span>`:h}
                      ${s.label}
                    </a>
                  `)}
              `:h}
        </div>
      </div>
    `}_renderMobileToggle(){return c`
      <button
        class="navbar-mobile-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded=${this._mobileMenuOpen}
        aria-controls="mobile-menu"
        @click=${this._toggleMobileMenu}
      >
        ${Tr} ${zr}
      </button>
    `}},d(xe,"$"),xe);A.styles=Mr,q([v({type:Object})],A.prototype,"config",2),q([v({type:String,reflect:!0})],A.prototype,"theme",2),q([Re()],A.prototype,"_activeMegaMenu",2),q([Re()],A.prototype,"_mobileMenuOpen",2),q([Re()],A.prototype,"_activeDropdown",2),q([ur(".navbar-mobile-toggle")],A.prototype,"_mobileToggle",2),A=q([P("wt-navbar")],A);const w={$schema:"https://plexusone.dev/design-system-spec/v1/schema.json",meta:{name:"PlexusOne",version:"0.1.0",description:"Design system for PlexusOne - AI Agent Development Platform",repository:"https://github.com/plexusone/plexusone-design-system",documentation:"https://plexusone.dev"},foundations:{colors:[{id:"dark",value:"#0a0e1a",semantic:"background",usage:"Primary dark background"},{id:"navy",value:"#0f172a",semantic:"background-secondary",usage:"Card backgrounds, sections"},{id:"slate",value:"#1e293b",semantic:"background-tertiary",usage:"Elevated surfaces, inputs"},{id:"cyan",value:"#06b6d4",semantic:"primary",usage:"Primary accent, links, active states"},{id:"cyan-light",value:"#22d3ee",semantic:"primary-light",usage:"Hover states, highlights"},{id:"cyan-dark",value:"#0891b2",semantic:"primary-dark",usage:"Pressed states, borders"},{id:"purple",value:"#8b5cf6",semantic:"accent",usage:"Secondary accent, focus rings"},{id:"purple-light",value:"#a78bfa",semantic:"accent-light",usage:"Hover states"},{id:"purple-dark",value:"#7c3aed",semantic:"accent-dark",usage:"Pressed states"},{id:"pink",value:"#ec4899",semantic:"tertiary",usage:"Tertiary accent, gradients"},{id:"pink-light",value:"#f472b6",semantic:"tertiary-light",usage:"Hover states"},{id:"pink-dark",value:"#db2777",semantic:"tertiary-dark",usage:"Pressed states"},{id:"violet",value:"#a855f7",semantic:"highlight",usage:"Gradient accent"},{id:"text",value:"#f1f5f9",semantic:"text",usage:"Primary text on dark backgrounds"},{id:"text-muted",value:"#94a3b8",semantic:"text-muted",usage:"Secondary text, descriptions"}],typography:{fontFamilies:[{id:"sans",value:"Inter, system-ui, -apple-system, sans-serif",usage:"Body text, UI elements"},{id:"mono",value:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",usage:"Code blocks, technical content"}],fontSizes:[{id:"xs",value:"0.75rem"},{id:"sm",value:"0.875rem"},{id:"base",value:"1rem"},{id:"lg",value:"1.125rem"},{id:"xl",value:"1.25rem"},{id:"2xl",value:"1.5rem"},{id:"3xl",value:"1.875rem"},{id:"4xl",value:"2.25rem"}],fontWeights:[{id:"normal",value:400},{id:"medium",value:500},{id:"semibold",value:600},{id:"bold",value:700}],lineHeights:[{id:"tight",value:"1.25"},{id:"normal",value:"1.5"},{id:"relaxed",value:"1.625"}]},spacing:{baseUnit:"0.25rem",scale:[{id:"0",value:"0"},{id:"1",value:"0.25rem"},{id:"2",value:"0.5rem"},{id:"4",value:"1rem"},{id:"6",value:"1.5rem"},{id:"8",value:"2rem"},{id:"12",value:"3rem"},{id:"16",value:"4rem"}]},borderRadius:[{id:"none",value:"0"},{id:"sm",value:"0.125rem"},{id:"default",value:"0.25rem"},{id:"md",value:"0.375rem"},{id:"lg",value:"0.5rem"},{id:"xl",value:"0.75rem"},{id:"full",value:"9999px"}]},brand:{identity:{name:"PlexusOne",tagline:"AI Agent Development Platform",mission:"Empowering developers to build, deploy, and manage AI agents at scale",domain:"plexusone.dev",social:{github:"https://github.com/plexusone"}},logos:{primary:{description:"PlexusOne wordmark with gradient",variants:{gradient:{svg:"assets/wordmark-gradient.svg",usage:"Primary on dark backgrounds"},light:{svg:"assets/wordmark-light.svg",usage:"On dark backgrounds"}},minWidth:"180px",clearSpace:"1em"},icon:{description:"Plexus network icon",svg:"assets/icon.svg",favicon:"assets/favicon.svg",design:{background:"linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)",foreground:"#ffffff",cornerRadius:"8px"}}},navigation:{brand:{name:"PlexusOne",href:"https://plexusone.dev"},baseUrl:"https://plexusone.dev",links:[{id:"libraries",label:"Libraries",href:"/libraries"},{id:"tools",label:"Tools",href:"/tools"},{id:"docs",label:"Docs",href:"/docs"}],dropdowns:[],actions:[{id:"github",label:"GitHub",href:"https://github.com/plexusone",icon:"github",external:!0}]},colorCombinations:[{name:"Dark Canvas",description:"Primary dark background",background:"dark",text:"text",accent:"cyan"},{name:"Card Surface",description:"Elevated card surfaces",background:"navy",text:"text",accent:"purple"},{name:"Gradient Accent",description:"Cyan to purple to pink gradient",background:"dark",text:"text",accent:"violet"}]},profiles:{website:{description:"Dark website optimized for LCD displays",inherits:"default",css:{prefix:"--plexus",selector:":root"}},marp:{description:"Brighter colors optimized for projection",inherits:"default",colorOverrides:[{tokenId:"dark",value:"linear-gradient(135deg, #0a0e1a 0%, #1a237e 50%, #0a0e1a 100%)"},{tokenId:"cyan",value:"#00d4ff"},{tokenId:"pink",value:"#e040fb"},{tokenId:"text",value:"#e8eaf6"}],additionalColors:[{id:"deep-blue",value:"#1a237e",semantic:"background-gradient",usage:"Slide background gradient midpoint"},{id:"lavender",value:"#b388ff",semantic:"heading-secondary",usage:"H2 headings, code highlights"}],additionalTypography:{fontFamilies:[{id:"mono",value:"JetBrains Mono, Courier New, monospace",usage:"Code blocks in presentations"}]}},pdf:{description:"Print-optimized with light background",inherits:"default",colorOverrides:[{tokenId:"dark",value:"#ffffff"},{tokenId:"navy",value:"#f8fafc"},{tokenId:"text",value:"#1e293b"},{tokenId:"text-muted",value:"#64748b"}]}},output:{css:{prefix:"--plexus",selector:":root",mappings:{colors:"--{prefix}-{id}",spacing:"--{prefix}-space-{id}","typography.fontFamilies":"--{prefix}-font-{id}",borderRadius:"--{prefix}-radius-{id}"}}}};function Ir(i){const e=w.foundations.colors.find(t=>t.id===i);return(e==null?void 0:e.value)??""}d(Ir,"getColor");function xt(){return Object.fromEntries(w.foundations.colors.map(i=>[i.id,i.value]))}d(xt,"getColorMap");function Br(i="--plexus"){return w.foundations.colors.map(e=>`  ${i}-${e.id}: ${e.value};`).join(`
`)}d(Br,"generateColorCSS");function ws(){const i=w.output.css.prefix,e=w.output.css.selector,t=w.foundations.colors.map(o=>`  ${i}-${o.id}: ${o.value};`).join(`
`),s=w.foundations.typography.fontFamilies.map(o=>`  ${i}-font-${o.id}: ${o.value};`).join(`
`),r=w.foundations.typography.fontSizes.map(o=>`  ${i}-text-${o.id}: ${o.value};`).join(`
`),n=w.foundations.borderRadius.map(o=>`  ${i}-radius-${o.id}: ${o.value};`).join(`
`),a=w.foundations.spacing.scale.map(o=>`  ${i}-space-${o.id}: ${o.value};`).join(`
`);return`${e} {
  /* Colors */
${t}

  /* Typography */
${s}
${r}

  /* Border Radius */
${n}

  /* Spacing */
${a}
}`}d(ws,"generateDesignSystemCSS");const kt=w.brand.identity.name,Vr=w.brand.identity.domain,At=w.brand.identity.social.github,Ze="",_s={library:"/libraries",agent:"/agents",application:"/applications",specification:"/specifications"},Wr=[{id:"agents",label:"Agents",description:"AI agents and the Omni modules",href:"/agents"},{id:"systems",label:"Systems",description:"SaaS backends with SystemForge",href:"/systems"},{id:"operations",label:"Operations",description:"Release and pipeline automation",href:"/operations"},{id:"specs",label:"Specs",description:"Open, machine-readable specs",href:"/specs"},{id:"app",label:"PlexusOne App",description:"The agentic dev workbench",href:"/app"}];function qr(i){const e=xt(),s=`linear-gradient(135deg, ${[e.cyan,e.purple,e.pink].filter(Boolean).join(", ")})`;return{baseUrl:i,brand:{name:kt,html:`<img src="${i}/icon.png" alt="${kt}" style="height: 32px; width: 32px; margin-right: 8px; vertical-align: bottom;" /><span style="background: ${s}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; vertical-align: bottom;">Plexus</span><span style="font-weight: 300; vertical-align: bottom;">One</span>`,href:i||"/"},links:[{id:"projects",label:"Projects",href:"/projects"}],dropdowns:[{id:"developers",label:"Developers",items:[{id:"academy",label:"Academy",href:"/academy"},{id:"mcp",label:"MCP",href:"/mcp"},{id:"tools",label:"Tools",href:"/tools/"}]},{id:"community",label:"Community",items:[{id:"blog",label:"Blog",href:"/blog"},{id:"releases",label:"Releases",href:"/releases"},{id:"why",label:"Why PlexusOne?",href:"/why"}],extraItems:[{id:"rss",label:"RSS Feed",href:"/blog/atom.xml",external:!0}]}],actions:[{id:"github",label:"GitHub",href:At,external:!0}],megaMenu:{label:"Platform",categories:[],items:[],footerLinks:[{id:"overview",label:"Platform Overview",href:"/#pillars"},{id:"all-projects",label:"All Projects",href:"/projects"},{id:"integrations",label:"Integrations",href:"/integrations"},{id:"github",label:"GitHub",href:At,external:!0}]}}}d(qr,"createBaseConfig");function Fr(i,e){const t=Wr.map((a,o)=>({id:a.id,label:a.label,description:a.description,order:o+1,href:a.href})),s=i.products.filter(a=>a.featured&&a.pillar),r=d(a=>{var p,g;const o=((g=(p=i.pillars)==null?void 0:p[a.pillar])==null?void 0:g.menu)??[],l=o.indexOf(a.slug);return l===-1?o.length:l},"rank");s.sort((a,o)=>r(a)-r(o));const n=s.map(a=>({id:a.slug,label:a.name,categoryId:a.pillar,tagline:a.tagline,featured:!0,href:a.docsUrl||a.githubUrl||`${_s[a.category]}/${a.slug}`}));return{categories:t,items:n}}d(Fr,"productsToMegaMenu");function Gr(i,e,t){const{categories:s,items:r}=Fr(e);return{...i,megaMenu:{...i.megaMenu,categories:s,items:r}}}d(Gr,"mergeProductsIntoConfig");function xs(){const i=xt();return`
:root {
  /* PlexusOne theme for wt-navbar */
  --lit-navbar-primary: ${i.cyan};
  --lit-navbar-secondary: ${i.purple};
  --lit-navbar-bg: ${i.dark};
  --lit-navbar-bg-elevated: ${i.navy||i.slate};
  --lit-navbar-text: ${i.text};
  --lit-navbar-text-muted: ${i["text-muted"]};
  --lit-navbar-border: rgba(255, 255, 255, 0.1);
  --lit-navbar-title-gradient: linear-gradient(135deg, ${i.cyan}, ${i.purple}, ${i.pink});
}`}d(xs,"getNavbarThemeCSS");var Kr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,St=d((i,e,t,s)=>{for(var r=s>1?void 0:s?Jr(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(s?a(e,t,r):a(r))||r);return s&&r&&Kr(e,t,r),r},"__decorateClass");function ks(){if(typeof document>"u"||document.getElementById("plexus-design-system-css"))return;const i=document.createElement("style");i.id="plexus-design-system-css",i.textContent=ws()+`
`+xs(),document.head.appendChild(i)}d(ks,"injectDesignSystemCSS"),m.PlexusNav=(ke=class extends D{constructor(){super(...arguments),this.config={},this._navbarConfig=null,this._baseUrl=Ze}connectedCallback(){super.connectedCallback(),ks(),this._baseUrl=this.config.baseUrl??Ze,this._initConfig()}updated(e){e.has("config")&&(this._baseUrl=this.config.baseUrl??Ze,this._initConfig())}async _initConfig(){const e=qr(this._baseUrl);this._navbarConfig=e;try{const t=this.config.productsUrl??`${this._baseUrl}/data/products.json`,s=await fetch(t);if(s.ok){const r=await s.json();this._navbarConfig=Gr(e,r,this._baseUrl)}}catch(t){console.warn("PlexusNav: Failed to load products.json",t)}}render(){return this._navbarConfig?Jt`
      <wt-navbar
        .config=${this._navbarConfig}
        theme=${this.config.theme??"dark"}
      ></wt-navbar>
    `:Jt``}},d(ke,"PlexusNav"),ke),m.PlexusNav.styles=Es`
    :host {
      display: block;
    }
  `,St([Yt({type:Object})],m.PlexusNav.prototype,"config",2),St([Qs()],m.PlexusNav.prototype,"_navbarConfig",2),m.PlexusNav=St([Gs("plexus-nav")],m.PlexusNav);function As(){ks();const i=document.getElementById("plexus-nav-root");if(i&&!i.querySelector("plexus-nav")){const e=document.createElement("plexus-nav");i.appendChild(e)}}return d(As,"autoInit"),typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",As):As()),m.BRAND_DOMAIN=Vr,m.BRAND_NAME=kt,m.CATEGORY_PATHS=_s,m.DEFAULT_BASE_URL=Ze,m.GITHUB_URL=At,m.designSystem=w,m.generateColorCSS=Br,m.generateDesignSystemCSS=ws,m.getColor=Ir,m.getColorMap=xt,m.getNavbarThemeCSS=xs,Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),m}({});
//# sourceMappingURL=plexus-nav.min.js.map
