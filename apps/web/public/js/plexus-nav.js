var PlexusNav=function(m){"use strict";var Qr=Object.defineProperty;var d=(m,K)=>Qr(m,"name",{value:K,configurable:!0});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ae,oe,F,le,G,de,ce,he,pe,ue,Cs,ge,ve,me,fe,be,ye,$e,_e,we,xe,ke;const K=globalThis,et=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),Rt=new WeakMap;let jt=(ae=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(et&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Rt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Rt.set(t,e))}return e}toString(){return this.cssText}},d(ae,"n"),ae);const Es=d(i=>new jt(typeof i=="string"?i:i+"",void 0,tt),"r$4"),Ms=d((i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new jt(t,i,tt)},"i$3"),Ps=d((i,e)=>{if(et)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=K.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},"S$2"),Dt=et?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Es(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Os,defineProperty:Us,getOwnPropertyDescriptor:Ts,getOwnPropertyNames:zs,getOwnPropertySymbols:Hs,getPrototypeOf:Rs}=Object,C=globalThis,Nt=C.trustedTypes,js=Nt?Nt.emptyScript:"",st=C.reactiveElementPolyfillSupport,Ae=d((i,e)=>i,"d$1"),Le={toAttribute(i,e){switch(e){case Boolean:i=i?js:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},rt=d((i,e)=>!Os(i,e),"f$2"),Lt={attribute:!0,type:String,converter:Le,reflect:!1,useDefault:!1,hasChanged:rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);let J=(oe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Lt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Us(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:a}=Ts(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:r,set(n){const o=r==null?void 0:r.call(this);a==null||a.call(this,n),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Lt}static _$Ei(){if(this.hasOwnProperty(Ae("elementProperties")))return;const e=Rs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ae("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ae("properties"))){const t=this.properties,s=[...zs(t),...Hs(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(Dt(r))}else e!==void 0&&t.push(Dt(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ps(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var a;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const n=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:Le).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var a,n;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((a=o.converter)==null?void 0:a.fromAttribute)!==void 0?o.converter:Le;this._$Em=r;const u=l.fromAttribute(t,o.type);this[r]=u??((n=this._$Ej)==null?void 0:n.get(r))??u,this._$Em=null}}requestUpdate(e,t,s,r=!1,a){var n;if(e!==void 0){const o=this.constructor;if(r===!1&&(a=this[e]),s??(s=o.getPropertyOptions(e)),!((s.hasChanged??rt)(a,t)||s.useDefault&&s.reflect&&a===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:a},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),a!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[a,n]of r){const{wrapped:o}=n,l=this[a];o!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(r=>{var a;return(a=r.hostUpdate)==null?void 0:a.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},d(oe,"y"),oe);J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[Ae("elementProperties")]=new Map,J[Ae("finalized")]=new Map,st==null||st({ReactiveElement:J}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=globalThis,It=d(i=>i,"i$1"),Ie=Se.trustedTypes,Bt=Ie?Ie.createPolicy("lit-html",{createHTML:d(i=>i,"createHTML")}):void 0,Vt="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Wt="?"+E,Ds=`<${Wt}>`,H=document,Ce=d(()=>H.createComment(""),"c"),Ee=d(i=>i===null||typeof i!="object"&&typeof i!="function","a"),it=Array.isArray,Ns=d(i=>it(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function","d"),nt=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qt=/-->/g,Ft=/>/g,R=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gt=/'/g,Kt=/"/g,Jt=/^(?:script|style|textarea|title)$/i,Ls=d(i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),"x$1"),Qt=Ls(1),Q=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Yt=new WeakMap,j=H.createTreeWalker(H,129);function Zt(i,e){if(!it(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bt!==void 0?Bt.createHTML(e):e}d(Zt,"V$1");const Is=d((i,e)=>{const t=i.length-1,s=[];let r,a=e===2?"<svg>":e===3?"<math>":"",n=Me;for(let o=0;o<t;o++){const l=i[o];let u,g,p=-1,f=0;for(;f<l.length&&(n.lastIndex=f,g=n.exec(l),g!==null);)f=n.lastIndex,n===Me?g[1]==="!--"?n=qt:g[1]!==void 0?n=Ft:g[2]!==void 0?(Jt.test(g[2])&&(r=RegExp("</"+g[2],"g")),n=R):g[3]!==void 0&&(n=R):n===R?g[0]===">"?(n=r??Me,p=-1):g[1]===void 0?p=-2:(p=n.lastIndex-g[2].length,u=g[1],n=g[3]===void 0?R:g[3]==='"'?Kt:Gt):n===Kt||n===Gt?n=R:n===qt||n===Ft?n=Me:(n=R,r=void 0);const y=n===R&&i[o+1].startsWith("/>")?" ":"";a+=n===Me?l+Ds:p>=0?(s.push(u),l.slice(0,p)+Vt+l.slice(p)+E+y):l+E+(p===-2?o:y)}return[Zt(i,a+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},"N$1");let at=(F=class{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let a=0,n=0;const o=e.length-1,l=this.parts,[u,g]=Is(e,t);if(this.el=F.createElement(u,s),j.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=j.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(Vt)){const f=g[n++],y=r.getAttribute(p).split(E),S=/([.?@])?(.*)/.exec(f);l.push({type:1,index:a,name:S[2],strings:y,ctor:S[1]==="."?Vs:S[1]==="?"?Ws:S[1]==="@"?qs:Be}),r.removeAttribute(p)}else p.startsWith(E)&&(l.push({type:6,index:a}),r.removeAttribute(p));if(Jt.test(r.tagName)){const p=r.textContent.split(E),f=p.length-1;if(f>0){r.textContent=Ie?Ie.emptyScript:"";for(let y=0;y<f;y++)r.append(p[y],Ce()),j.nextNode(),l.push({type:2,index:++a});r.append(p[f],Ce())}}}else if(r.nodeType===8)if(r.data===Wt)l.push({type:2,index:a});else{let p=-1;for(;(p=r.data.indexOf(E,p+1))!==-1;)l.push({type:7,index:a}),p+=E.length-1}a++}}static createElement(e,t){const s=H.createElement("template");return s.innerHTML=e,s}},d(F,"S"),F);function Y(i,e,t=i,s){var n,o;if(e===Q)return e;let r=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const a=Ee(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((o=r==null?void 0:r._$AO)==null||o.call(r,!1),a===void 0?r=void 0:(r=new a(i),r._$AT(i,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=r:t._$Cl=r),r!==void 0&&(e=Y(i,r._$AS(i,e.values),r,s)),e}d(Y,"M$1");let Bs=(le=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??H).importNode(t,!0);j.currentNode=r;let a=j.nextNode(),n=0,o=0,l=s[0];for(;l!==void 0;){if(n===l.index){let u;l.type===2?u=new ot(a,a.nextSibling,this,e):l.type===1?u=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(u=new Fs(a,this,e)),this._$AV.push(u),l=s[++o]}n!==(l==null?void 0:l.index)&&(a=j.nextNode(),n++)}return j.currentNode=H,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},d(le,"R"),le),ot=(G=class{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),Ee(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==Q&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ns(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&Ee(this._$AH)?this._$AA.nextSibling.data=e:this.T(H.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=at.createElement(Zt(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===r)this._$AH.p(t);else{const n=new Bs(r,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=Yt.get(e.strings);return t===void 0&&Yt.set(e.strings,t=new at(e)),t}k(e){it(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const a of e)r===t.length?t.push(s=new G(this.O(Ce()),this.O(Ce()),this,this.options)):s=t[r],s._$AI(a),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const r=It(e).nextSibling;It(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},d(G,"k"),G),Be=(de=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,a){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(e,t=this,s,r){const a=this.strings;let n=!1;if(a===void 0)e=Y(this,e,t,0),n=!Ee(e)||e!==this._$AH&&e!==Q,n&&(this._$AH=e);else{const o=e;let l,u;for(e=a[0],l=0;l<a.length-1;l++)u=Y(this,o[s+l],t,l),u===Q&&(u=this._$AH[l]),n||(n=!Ee(u)||u!==this._$AH[l]),u===b?e=b:e!==b&&(e+=(u??"")+a[l+1]),this._$AH[l]=u}n&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},d(de,"H"),de),Vs=(ce=class extends Be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},d(ce,"I"),ce),Ws=(he=class extends Be{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},d(he,"L"),he),qs=(pe=class extends Be{constructor(e,t,s,r,a){super(e,t,s,r,a),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??b)===Q)return;const s=this._$AH,r=e===b&&s!==b||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==b&&(s===b||r);r&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},d(pe,"z"),pe),Fs=(ue=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}},d(ue,"Z"),ue);const lt=Se.litHtmlPolyfillSupport;lt==null||lt(at,ot),(Se.litHtmlVersions??(Se.litHtmlVersions=[])).push("3.3.2");const Gs=d((i,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const a=(t==null?void 0:t.renderBefore)??null;s._$litPart$=r=new ot(e.insertBefore(Ce(),a),a,void 0,t??{})}return r._$AI(i),r},"D$1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,Et=class Et extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Gs(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Q}};d(Et,"i");let N=Et;N._$litElement$=!0,N.finalized=!0,(Cs=D.litElementHydrateSupport)==null||Cs.call(D,{LitElement:N});const dt=D.litElementPolyfillSupport;dt==null||dt({LitElement:N}),(D.litElementVersions??(D.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ks=d(i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)},"t");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:rt},Qs=d((i=Js,e,t)=>{const{kind:s,metadata:r}=t;let a=globalThis.litPropertyMetadata.get(r);if(a===void 0&&globalThis.litPropertyMetadata.set(r,a=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),a.set(t.name,i),s==="accessor"){const{name:n}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(n,l,i,!0,o)},init(o){return o!==void 0&&this.C(n,void 0,i,o),o}}}if(s==="setter"){const{name:n}=t;return function(o){const l=this[n];e.call(this,o),this.requestUpdate(n,l,i,!0,o)}}throw Error("Unsupported decorator location: "+s)},"r$1");function Xt(i){return(e,t)=>typeof t=="object"?Qs(i,e,t):((s,r,a)=>{const n=r.hasOwnProperty(a);return r.constructor.createProperty(a,s),n?Object.getOwnPropertyDescriptor(r,a):void 0})(i,e,t)}d(Xt,"n");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ys(i){return Xt({...i,state:!0,attribute:!1})}d(Ys,"r");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=globalThis,ct=Ve.ShadowRoot&&(Ve.ShadyCSS===void 0||Ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ht=Symbol(),es=new WeakMap;let ts=(ge=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ht)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ct&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=es.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&es.set(t,e))}return e}toString(){return this.cssText}},d(ge,"Pe"),ge);const pt=d(i=>new ts(typeof i=="string"?i:i+"",void 0,ht),"ue"),w=d((i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new ts(t,i,ht)},"g"),Zs=d((i,e)=>{if(ct)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=Ve.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},"Le"),ss=ct?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return pt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Xs,defineProperty:er,getOwnPropertyDescriptor:tr,getOwnPropertyNames:sr,getOwnPropertySymbols:rr,getPrototypeOf:ir}=Object,Z=globalThis,rs=Z.trustedTypes,nr=rs?rs.emptyScript:"",is=Z.reactiveElementPolyfillSupport,Pe=d((i,e)=>i,"V"),We={toAttribute(i,e){switch(e){case Boolean:i=i?nr:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ut=d((i,e)=>!Xs(i,e),"ve"),ns={attribute:!0,type:String,converter:We,reflect:!1,useDefault:!1,hasChanged:ut};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Z.litPropertyMetadata??(Z.litPropertyMetadata=new WeakMap);let X=(ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ns){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&er(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:a}=tr(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:r,set(n){const o=r==null?void 0:r.call(this);a==null||a.call(this,n),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ns}static _$Ei(){if(this.hasOwnProperty(Pe("elementProperties")))return;const e=ir(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Pe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pe("properties"))){const t=this.properties,s=[...sr(t),...rr(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(ss(r))}else e!==void 0&&t.push(ss(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zs(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var s;const r=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,r);if(a!==void 0&&r.reflect===!0){const n=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:We).toAttribute(t,r.type);this._$Em=e,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){var s,r;const a=this.constructor,n=a._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=a.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:We;this._$Em=n;const u=l.fromAttribute(t,o.type);this[n]=u??((r=this._$Ej)==null?void 0:r.get(n))??u,this._$Em=null}}requestUpdate(e,t,s,r=!1,a){var n;if(e!==void 0){const o=this.constructor;if(r===!1&&(a=this[e]),s??(s=o.getPropertyOptions(e)),!((s.hasChanged??ut)(a,t)||s.useDefault&&s.reflect&&a===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:a},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),a!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[a,n]of r){const{wrapped:o}=n,l=this[a];o!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,n,l)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$EO)==null||e.forEach(r=>{var a;return(a=r.hostUpdate)==null?void 0:a.call(r)}),this.update(s)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},d(ve,"j"),ve);X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[Pe("elementProperties")]=new Map,X[Pe("finalized")]=new Map,is==null||is({ReactiveElement:X}),(Z.reactiveElementVersions??(Z.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=globalThis,as=d(i=>i,"xe"),Fe=qe.trustedTypes,os=Fe?Fe.createPolicy("lit-html",{createHTML:d(i=>i,"createHTML")}):void 0,ls="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,ds="?"+M,ar=`<${ds}>`,L=document,Oe=d(()=>L.createComment(""),"F"),Ue=d(i=>i===null||typeof i!="object"&&typeof i!="function","q"),gt=Array.isArray,or=d(i=>gt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function","Ke"),vt=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cs=/-->/g,hs=/>/g,I=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ps=/'/g,us=/"/g,gs=/^(?:script|style|textarea|title)$/i,lr=d(i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),"Qe"),c=lr(1),ee=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),vs=new WeakMap,B=L.createTreeWalker(L,129);function ms(i,e){if(!gt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return os!==void 0?os.createHTML(e):e}d(ms,"je");const dr=d((i,e)=>{const t=i.length-1,s=[];let r,a=e===2?"<svg>":e===3?"<math>":"",n=Te;for(let o=0;o<t;o++){const l=i[o];let u,g,p=-1,f=0;for(;f<l.length&&(n.lastIndex=f,g=n.exec(l),g!==null);)f=n.lastIndex,n===Te?g[1]==="!--"?n=cs:g[1]!==void 0?n=hs:g[2]!==void 0?(gs.test(g[2])&&(r=RegExp("</"+g[2],"g")),n=I):g[3]!==void 0&&(n=I):n===I?g[0]===">"?(n=r??Te,p=-1):g[1]===void 0?p=-2:(p=n.lastIndex-g[2].length,u=g[1],n=g[3]===void 0?I:g[3]==='"'?us:ps):n===us||n===ps?n=I:n===cs||n===hs?n=Te:(n=I,r=void 0);const y=n===I&&i[o+1].startsWith("/>")?" ":"";a+=n===Te?l+ar:p>=0?(s.push(u),l.slice(0,p)+ls+l.slice(p)+M+y):l+M+(p===-2?o:y)}return[ms(i,a+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},"Ge"),Ze=class Ze{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let a=0,n=0;const o=e.length-1,l=this.parts,[u,g]=dr(e,t);if(this.el=Ze.createElement(u,s),B.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=B.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(ls)){const f=g[n++],y=r.getAttribute(p).split(M),S=/([.?@])?(.*)/.exec(f);l.push({type:1,index:a,name:S[2],strings:y,ctor:S[1]==="."?ft:S[1]==="?"?bt:S[1]==="@"?yt:se}),r.removeAttribute(p)}else p.startsWith(M)&&(l.push({type:6,index:a}),r.removeAttribute(p));if(gs.test(r.tagName)){const p=r.textContent.split(M),f=p.length-1;if(f>0){r.textContent=Fe?Fe.emptyScript:"";for(let y=0;y<f;y++)r.append(p[y],Oe()),B.nextNode(),l.push({type:2,index:++a});r.append(p[f],Oe())}}}else if(r.nodeType===8)if(r.data===ds)l.push({type:2,index:a});else{let p=-1;for(;(p=r.data.indexOf(M,p+1))!==-1;)l.push({type:7,index:a}),p+=M.length-1}a++}}static createElement(e,t){const s=L.createElement("template");return s.innerHTML=e,s}};d(Ze,"K");let ze=Ze;function te(i,e,t=i,s){var r,a;if(e===ee)return e;let n=s!==void 0?(r=t._$Co)==null?void 0:r[s]:t._$Cl;const o=Ue(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==o&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=n:t._$Cl=n),n!==void 0&&(e=te(i,n._$AS(i,e.values),n,s)),e}d(te,"L");const Mt=class Mt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??L).importNode(t,!0);B.currentNode=r;let a=B.nextNode(),n=0,o=0,l=s[0];for(;l!==void 0;){if(n===l.index){let u;l.type===2?u=new He(a,a.nextSibling,this,e):l.type===1?u=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(u=new $t(a,this,e)),this._$AV.push(u),l=s[++o]}n!==(l==null?void 0:l.index)&&(a=B.nextNode(),n++)}return B.currentNode=L,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}};d(Mt,"Ye");let mt=Mt;const Xe=class Xe{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=te(this,e,t),Ue(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==ee&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):or(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&Ue(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ze.createElement(ms(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)==null?void 0:t._$AD)===a)this._$AH.p(s);else{const n=new mt(a,this),o=n.u(this.options);n.p(s),this.T(o),this._$AH=n}}_$AC(e){let t=vs.get(e.strings);return t===void 0&&vs.set(e.strings,t=new ze(e)),t}k(e){gt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const a of e)r===t.length?t.push(s=new Xe(this.O(Oe()),this.O(Oe()),this,this.options)):s=t[r],s._$AI(a),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const r=as(e).nextSibling;as(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};d(Xe,"Q");let He=Xe;const Pt=class Pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,a){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,r){const a=this.strings;let n=!1;if(a===void 0)e=te(this,e,t,0),n=!Ue(e)||e!==this._$AH&&e!==ee,n&&(this._$AH=e);else{const o=e;let l,u;for(e=a[0],l=0;l<a.length-1;l++)u=te(this,o[s+l],t,l),u===ee&&(u=this._$AH[l]),n||(n=!Ue(u)||u!==this._$AH[l]),u===h?e=h:e!==h&&(e+=(u??"")+a[l+1]),this._$AH[l]=u}n&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};d(Pt,"ae");let se=Pt;const Ot=class Ot extends se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}};d(Ot,"Ze");let ft=Ot;const Ut=class Ut extends se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}};d(Ut,"Je");let bt=Ut;const Tt=class Tt extends se{constructor(e,t,s,r,a){super(e,t,s,r,a),this.type=5}_$AI(e,t=this){if((e=te(this,e,t,0)??h)===ee)return;const s=this._$AH,r=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==h&&(s===h||r);r&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}};d(Tt,"Xe");let yt=Tt;const zt=class zt{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){te(this,e)}};d(zt,"et");let $t=zt;const fs=qe.litHtmlPolyfillSupport;fs==null||fs(ze,He),(qe.litHtmlVersions??(qe.litHtmlVersions=[])).push("3.3.3");const cr=d((i,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const a=(t==null?void 0:t.renderBefore)??null;s._$litPart$=r=new He(e.insertBefore(Oe(),a),a,void 0,t??{})}return r._$AI(i),r},"tt");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=globalThis,Ht=class Ht extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=cr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ee}};d(Ht,"m");let $=Ht;var bs;$._$litElement$=!0,$.finalized=!0,(bs=Re.litElementHydrateSupport)==null||bs.call(Re,{LitElement:$});const ys=Re.litElementPolyfillSupport;ys==null||ys({LitElement:$}),(Re.litElementVersions??(Re.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=d(i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)},"A");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hr={attribute:!0,type:String,converter:We,reflect:!1,hasChanged:ut},pr=d((i=hr,e,t)=>{const{kind:s,metadata:r}=t;let a=globalThis.litPropertyMetadata.get(r);if(a===void 0&&globalThis.litPropertyMetadata.set(r,a=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),a.set(t.name,i),s==="accessor"){const{name:n}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(n,l,i,!0,o)},init(o){return o!==void 0&&this.C(n,void 0,i,o),o}}}if(s==="setter"){const{name:n}=t;return function(o){const l=this[n];e.call(this,o),this.requestUpdate(n,l,i,!0,o)}}throw Error("Unsupported decorator location: "+s)},"rt");function v(i){return(e,t)=>typeof t=="object"?pr(i,e,t):((s,r,a)=>{const n=r.hasOwnProperty(a);return r.constructor.createProperty(a,s),n?Object.getOwnPropertyDescriptor(r,a):void 0})(i,e,t)}d(v,"h");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function je(i){return v({...i,state:!0,attribute:!1})}d(je,"G");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ur=d((i,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(i,e,t),t),"at");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $s(i,e){return(t,s,r)=>{const a=d(n=>{var o;return((o=n.renderRoot)==null?void 0:o.querySelector(i))??null},"i");return ur(t,s,{get(){return a(this)}})}}d($s,"He");const gr={colors:{palette:{slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"}},light:{background:{primary:"#ffffff",secondary:"#f8fafc",tertiary:"#f1f5f9",inverse:"#0f172a"},text:{primary:"#1e293b",secondary:"#475569",muted:"#94a3b8",inverse:"#f8fafc"},border:{default:"#e2e8f0",strong:"#cbd5e1",subtle:"#f1f5f9"},accent:{default:"#06b6d4",hover:"#0891b2",muted:"#cffafe"},status:{success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#3b82f6"},maturity:{m1:"#ef4444",m2:"#f59e0b",m3:"#eab308",m4:"#22c55e",m5:"#3b82f6"}},dark:{background:{primary:"#0f172a",secondary:"#1e293b",tertiary:"#334155",inverse:"#f8fafc"},text:{primary:"#f1f5f9",secondary:"#cbd5e1",muted:"#64748b",inverse:"#0f172a"},border:{default:"#475569",strong:"#64748b",subtle:"#334155"},accent:{default:"#22d3ee",hover:"#67e8f9",muted:"#164e63"},status:{success:"#34d399",warning:"#fbbf24",error:"#f87171",info:"#60a5fa"},maturity:{m1:"#f87171",m2:"#fbbf24",m3:"#facc15",m4:"#4ade80",m5:"#60a5fa"}}},typography:{fontFamily:{sans:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',mono:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem"}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem"},radius:{sm:"0.25rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},shadow:{light:{none:"none",sm:"0 1px 2px rgba(0, 0, 0, 0.05)",md:"0 4px 6px rgba(0, 0, 0, 0.1)",lg:"0 10px 15px rgba(0, 0, 0, 0.1)"},dark:{none:"none",sm:"0 1px 2px rgba(0, 0, 0, 0.3)",md:"0 4px 6px rgba(0, 0, 0, 0.4)",lg:"0 10px 15px rgba(0, 0, 0, 0.5)"}},transition:{fast:"150ms ease",normal:"200ms ease",slow:"300ms ease"}};function Ge(i="light"){const e=gr,t=e.colors[i],s=e.shadow[i];return`
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
  `}d(Ge,"ee");function Ke(i="light"){return pt(Ge(i))}d(Ke,"re");const _t=pt(`
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
`),vr=w`
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
`,mr=w`
  * {
    box-sizing: border-box;
  }

  :host {
    font-family: var(--wt-nav-font-sans);
    font-size: var(--wt-nav-font-size-md);
    color: var(--wt-nav-text-primary);
  }
`,fr=w`
  :focus-visible {
    outline: 2px solid var(--wt-nav-accent);
    outline-offset: 2px;
  }

  button:focus-visible {
    outline: 2px solid var(--wt-nav-accent);
    outline-offset: 2px;
  }
`,br=w`
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
`,Je=[vr,mr,fr,br];var yr=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,De=d((i,e,t,s)=>{for(var r=s>1?void 0:s?$r(e,t):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&yr(e,t,r),r},"Y");let V=(me=class extends ${constructor(){super(...arguments),this.items=[],this.active="",this.theme="light",this.orientation="horizontal"}_handleClick(e){if(e.disabled)return;const t=this.active;if(this.active=e.id,e.href){window.location.href=e.href;return}const s={itemId:e.id,previousItemId:t||void 0};this.dispatchEvent(new CustomEvent("wt-nav-change",{detail:s,bubbles:!0,composed:!0}))}render(){return c`
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
    `}},d(me,"T"),me);V.styles=[...Je,w`
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
    `],De([v({type:Array})],V.prototype,"items",2),De([v({type:String,reflect:!0})],V.prototype,"active",2),De([v({type:String,reflect:!0})],V.prototype,"theme",2),De([v({type:String,reflect:!0})],V.prototype,"orientation",2),V=De([P("wt-nav")],V);var _r=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,re=d((i,e,t,s)=>{for(var r=s>1?void 0:s?wr(e,t):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&_r(e,t,r),r},"R");let O=(fe=class extends ${constructor(){super(...arguments),this.title="",this.version="",this.description="",this.actions=[],this.theme="light"}_handleAction(e){if(e.disabled)return;const t={actionId:e.id};this.dispatchEvent(new CustomEvent("wt-header-action",{detail:t,bubbles:!0,composed:!0}))}render(){return c`
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
    `}},d(fe,"k"),fe);O.styles=[...Je,w`
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
    `],re([v({type:String})],O.prototype,"title",2),re([v({type:String})],O.prototype,"version",2),re([v({type:String})],O.prototype,"description",2),re([v({type:Array})],O.prototype,"actions",2),re([v({type:String,reflect:!0})],O.prototype,"theme",2),O=re([P("wt-header")],O);var xr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,ie=d((i,e,t,s)=>{for(var r=s>1?void 0:s?kr(e,t):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&xr(e,t,r),r},"B");let U=(be=class extends ${constructor(){super(...arguments),this.variant="default",this.theme="light",this.size="md",this.outline=!1}render(){return c`
      <span class="badge badge--${this.variant}">
        ${this.count!==void 0?this.count:c`<slot></slot>`}
      </span>
    `}},d(be,"S"),be);U.styles=[...Je,w`
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
    `],ie([v({type:String,reflect:!0})],U.prototype,"variant",2),ie([v({type:Number})],U.prototype,"count",2),ie([v({type:String,reflect:!0})],U.prototype,"theme",2),ie([v({type:String,reflect:!0})],U.prototype,"size",2),ie([v({type:Boolean,reflect:!0})],U.prototype,"outline",2),U=ie([P("wt-badge")],U);var Ar=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,W=d((i,e,t,s)=>{for(var r=s>1?void 0:s?Sr(e,t):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&Ar(e,t,r),r},"D");let A=(ye=class extends ${constructor(){super(...arguments),this.name="",this.label="",this.options=[],this.showActions=!1,this.theme="light",this._selectedValues=new Set}connectedCallback(){super.connectedCallback(),this._selectedValues=new Set(this.options.filter(e=>e.checked!==!1).map(e=>e.value))}updated(e){e.has("options")&&(this._selectedValues=new Set(this.options.filter(t=>t.checked!==!1).map(t=>t.value)))}_toggleOption(e){this._selectedValues.has(e)?this._selectedValues.delete(e):this._selectedValues.add(e),this._selectedValues=new Set(this._selectedValues),this._dispatchChange()}_selectAll(){this._selectedValues=new Set(this.options.map(e=>e.value)),this._dispatchChange()}_clearAll(){this._selectedValues=new Set,this._dispatchChange()}_dispatchChange(){const e={filterName:this.name,selectedValues:Array.from(this._selectedValues),allValues:this.options.map(t=>t.value)};this.dispatchEvent(new CustomEvent("wt-filter-change",{detail:e,bubbles:!0,composed:!0}))}render(){return c`
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
    `}},d(ye,"$"),ye);A.styles=[...Je,w`
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
    `],W([v({type:String})],A.prototype,"name",2),W([v({type:String})],A.prototype,"label",2),W([v({type:Array})],A.prototype,"options",2),W([v({type:Boolean})],A.prototype,"showActions",2),W([v({type:String,reflect:!0})],A.prototype,"theme",2),W([je()],A.prototype,"_selectedValues",2),A=W([P("wt-filter-group")],A);var Cr=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,T=d((i,e,t,s)=>{for(var r=s>1?void 0:s?Er(e,t):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&Cr(e,t,r),r},"C");const _s="wt-theme-preference";let x=($e=class extends ${constructor(){super(...arguments),this.mode="system",this.theme="dark",this.showLabel=!1,this.variant="icon",this.persist=!0,this.targetSelector="html",this._resolvedTheme="dark",this._mediaQuery=null,this._handleSystemChange=()=>{this.mode==="system"&&this._updateResolvedTheme()}}connectedCallback(){if(super.connectedCallback(),this.persist){const e=localStorage.getItem(_s);e&&["light","dark","system"].includes(e)&&(this.mode=e)}this._mediaQuery=window.matchMedia("(prefers-color-scheme: dark)"),this._mediaQuery.addEventListener("change",this._handleSystemChange),this._updateResolvedTheme()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._mediaQuery)==null||e.removeEventListener("change",this._handleSystemChange)}_updateResolvedTheme(){var e;let t;this.mode==="system"?t=(e=this._mediaQuery)!=null&&e.matches?"dark":"light":t=this.mode,this._resolvedTheme=t,this.theme=t;const s=document.querySelector(this.targetSelector);s&&s.setAttribute("theme",t),this.dispatchEvent(new CustomEvent("wt-theme-change",{detail:{theme:this.mode,resolvedTheme:t},bubbles:!0,composed:!0}))}_setMode(e){this.mode=e,this.persist&&localStorage.setItem(_s,e),this._updateResolvedTheme()}_toggleTheme(){const e=this._resolvedTheme==="dark"?"light":"dark";this._setMode(e)}_renderSunIcon(){return c`
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
    `}},d($e,"f"),$e);x.styles=w`
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
  `,T([v({type:String})],x.prototype,"mode",2),T([v({type:String,reflect:!0})],x.prototype,"theme",2),T([v({type:Boolean,attribute:"show-label"})],x.prototype,"showLabel",2),T([v({type:String})],x.prototype,"variant",2),T([v({type:Boolean})],x.prototype,"persist",2),T([v({type:String,attribute:"target-selector"})],x.prototype,"targetSelector",2),T([je()],x.prototype,"_resolvedTheme",2),x=T([P("wt-theme-toggle")],x);const wt=w`
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
`,Mr=w`
  ${_t}
  ${wt}

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
`,Pr=w`
  ${_t}
  ${wt}

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
`,Or=w`
  ${_t}
  ${wt}

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
`,ws=c`
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
`;var Hr=Object.defineProperty,Rr=Object.getOwnPropertyDescriptor,Ne=d((i,e,t,s)=>{for(var r=s>1?void 0:s?Rr(e,t):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&Hr(e,t,r),r},"Z");let q=(_e=class extends ${constructor(){super(...arguments),this.open=!1,this.config=null,this.baseUrl="",this.theme="dark",this._handleBackdropClick=()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))},this._handleLinkClick=()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}}_getItemsByCategory(e){if(!this.config)return[];const t=this.config.maxFeaturedPerCategory??5;return this.config.items.filter(s=>s.categoryId===e&&s.featured!==!1).slice(0,t)}_getCategoryCount(e){return this.config?this.config.items.filter(t=>t.categoryId===e).length:0}_getUrl(e){return e?e.startsWith("http")||e.startsWith("/")?e:`${this.baseUrl}${e.startsWith("/")?"":"/"}${e}`:"#"}render(){if(!this.config)return h;const e=this.config.items.length,t=this.config.categories.length;return c`
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
    `}_renderFooter(e,t){var s,r;const a=(s=this.config)==null?void 0:s.footerLinks,n=(r=this.config)==null?void 0:r.footerText;return!(a!=null&&a.length)&&!n?h:c`
      <div class="mega-menu-footer">
        ${a!=null&&a.length?c`
              <div class="footer-links">
                ${a.map((o,l)=>{var u,g;return c`
                    ${l>0&&(u=o.id)!=null&&u.startsWith("legal-")?c`<span class="footer-divider">|</span>`:h}
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
        ${n?c`<span class="mega-menu-stats">${n}</span>`:e>0?c`<span class="mega-menu-stats">
              ${e} items across ${t} categories
            </span>`:h}
      </div>
    `}},d(_e,"U"),_e);q.styles=Pr,Ne([v({type:Boolean,reflect:!0})],q.prototype,"open",2),Ne([v({type:Object})],q.prototype,"config",2),Ne([v({type:String})],q.prototype,"baseUrl",2),Ne([v({type:String,reflect:!0})],q.prototype,"theme",2),q=Ne([P("wt-mega-menu")],q);var jr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,Qe=d((i,e,t,s)=>{for(var r=s>1?void 0:s?Dr(e,t):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&jr(e,t,r),r},"ie");let ne=(we=class extends ${constructor(){super(...arguments),this.open=!1,this.config={},this.theme="dark",this._handleLinkClick=()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}}_getUrl(e){return e?e.startsWith("http")||e.startsWith("/")?e:`${this.config.baseUrl||""}${e.startsWith("/")?"":"/"}${e}`:"#"}_getSections(){var e,t,s,r;if((e=this.config.mobileSections)!=null&&e.length)return this.config.mobileSections;const a=[];if(this.config.megaMenu){const n=this.config.megaMenu.categories.map(o=>({id:o.id,label:o.label,href:o.href}));a.push({id:"mega-menu",label:this.config.megaMenu.label,items:n})}return(t=this.config.links)!=null&&t.length&&a.push({id:"links",items:this.config.links}),(s=this.config.dropdowns)==null||s.forEach(n=>{const o=[...n.items];n.extraItems&&o.push(...n.extraItems),a.push({id:n.id,label:n.label,items:o})}),(r=this.config.actions)!=null&&r.length&&a.push({id:"actions",items:this.config.actions}),a}render(){const e=this._getSections();return c`
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
    `}},d(we,"I"),we);ne.styles=Or,Qe([v({type:Boolean,reflect:!0})],ne.prototype,"open",2),Qe([v({type:Object})],ne.prototype,"config",2),Qe([v({type:String,reflect:!0})],ne.prototype,"theme",2),ne=Qe([P("wt-mobile-menu")],ne);var Nr=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,z=d((i,e,t,s)=>{for(var r=s>1?void 0:s?Lr(e,t):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&Nr(e,t,r),r},"M");let k=(xe=class extends ${constructor(){super(),this.config={},this.theme="dark",this._megaMenuOpen=!1,this._mobileMenuOpen=!1,this._activeDropdown=null,this._boundHandleKeydown=this._handleKeydown.bind(this),this._boundHandleClickOutside=this._handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._boundHandleKeydown),document.addEventListener("mousedown",this._boundHandleClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._boundHandleKeydown),document.removeEventListener("mousedown",this._boundHandleClickOutside)}_handleKeydown(e){var t,s;e.key==="Escape"&&(this._activeDropdown?this._activeDropdown=null:this._megaMenuOpen?(this._megaMenuOpen=!1,(t=this._megaMenuTrigger)==null||t.focus()):this._mobileMenuOpen&&(this._mobileMenuOpen=!1,(s=this._mobileToggle)==null||s.focus()))}_handleClickOutside(e){var t;const s=e.target;if(this._activeDropdown){const r=(t=this.shadowRoot)==null?void 0:t.querySelector(`[data-dropdown="${this._activeDropdown}"]`);r&&!r.contains(s)&&(this._activeDropdown=null)}}_toggleMegaMenu(){this._activeDropdown=null,this._megaMenuOpen=!this._megaMenuOpen}_toggleDropdown(e){this._megaMenuOpen=!1,this._activeDropdown=this._activeDropdown===e?null:e}_toggleMobileMenu(){this._mobileMenuOpen=!this._mobileMenuOpen}_closeMegaMenu(){this._megaMenuOpen=!1}_closeMobileMenu(){this._mobileMenuOpen=!1}_closeDropdowns(){this._activeDropdown=null}_getUrl(e){return e?e.startsWith("http")||e.startsWith("/")?e:`${this.config.baseUrl||""}${e.startsWith("/")?"":"/"}${e}`:"#"}render(){return c`
      <nav class="navbar" aria-label="Main navigation">
        <a href="#main-content" class="skip-link">Skip to main content</a>

        <div class="navbar-container">
          ${this._renderBrand()}
          ${this._renderDesktopLinks()}
          ${this._renderMobileToggle()}
        </div>

        ${this.config.megaMenu?c`
              <wt-mega-menu
                ?open=${this._megaMenuOpen}
                .config=${this.config.megaMenu}
                .baseUrl=${this.config.baseUrl||""}
                theme=${this.theme}
                @close=${this._closeMegaMenu}
              ></wt-mega-menu>
            `:h}

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
        <!-- Mega menu trigger -->
        ${this.config.megaMenu?c`
              <button
                class="navbar-link megamenu-trigger"
                aria-expanded=${this._megaMenuOpen}
                aria-haspopup="true"
                @click=${this._toggleMegaMenu}
              >
                ${this.config.megaMenu.label} ${ws}
              </button>
            `:h}

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
          ${e.label} ${ws}
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
    `}},d(xe,"b"),xe);k.styles=Mr,z([v({type:Object})],k.prototype,"config",2),z([v({type:String,reflect:!0})],k.prototype,"theme",2),z([je()],k.prototype,"_megaMenuOpen",2),z([je()],k.prototype,"_mobileMenuOpen",2),z([je()],k.prototype,"_activeDropdown",2),z([$s(".navbar-mobile-toggle")],k.prototype,"_mobileToggle",2),z([$s(".megamenu-trigger")],k.prototype,"_megaMenuTrigger",2),k=z([P("wt-navbar")],k);const _={$schema:"https://plexusone.dev/design-system-spec/v1/schema.json",meta:{name:"PlexusOne",version:"0.1.0",description:"Design system for PlexusOne - AI Agent Development Platform",repository:"https://github.com/plexusone/plexusone-design-system",documentation:"https://plexusone.dev"},foundations:{colors:[{id:"dark",value:"#0a0e1a",semantic:"background",usage:"Primary dark background"},{id:"navy",value:"#0f172a",semantic:"background-secondary",usage:"Card backgrounds, sections"},{id:"slate",value:"#1e293b",semantic:"background-tertiary",usage:"Elevated surfaces, inputs"},{id:"cyan",value:"#06b6d4",semantic:"primary",usage:"Primary accent, links, active states"},{id:"cyan-light",value:"#22d3ee",semantic:"primary-light",usage:"Hover states, highlights"},{id:"cyan-dark",value:"#0891b2",semantic:"primary-dark",usage:"Pressed states, borders"},{id:"purple",value:"#8b5cf6",semantic:"accent",usage:"Secondary accent, focus rings"},{id:"purple-light",value:"#a78bfa",semantic:"accent-light",usage:"Hover states"},{id:"purple-dark",value:"#7c3aed",semantic:"accent-dark",usage:"Pressed states"},{id:"pink",value:"#ec4899",semantic:"tertiary",usage:"Tertiary accent, gradients"},{id:"pink-light",value:"#f472b6",semantic:"tertiary-light",usage:"Hover states"},{id:"pink-dark",value:"#db2777",semantic:"tertiary-dark",usage:"Pressed states"},{id:"violet",value:"#a855f7",semantic:"highlight",usage:"Gradient accent"},{id:"text",value:"#f1f5f9",semantic:"text",usage:"Primary text on dark backgrounds"},{id:"text-muted",value:"#94a3b8",semantic:"text-muted",usage:"Secondary text, descriptions"}],typography:{fontFamilies:[{id:"sans",value:"Inter, system-ui, -apple-system, sans-serif",usage:"Body text, UI elements"},{id:"mono",value:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",usage:"Code blocks, technical content"}],fontSizes:[{id:"xs",value:"0.75rem"},{id:"sm",value:"0.875rem"},{id:"base",value:"1rem"},{id:"lg",value:"1.125rem"},{id:"xl",value:"1.25rem"},{id:"2xl",value:"1.5rem"},{id:"3xl",value:"1.875rem"},{id:"4xl",value:"2.25rem"}],fontWeights:[{id:"normal",value:400},{id:"medium",value:500},{id:"semibold",value:600},{id:"bold",value:700}],lineHeights:[{id:"tight",value:"1.25"},{id:"normal",value:"1.5"},{id:"relaxed",value:"1.625"}]},spacing:{baseUnit:"0.25rem",scale:[{id:"0",value:"0"},{id:"1",value:"0.25rem"},{id:"2",value:"0.5rem"},{id:"4",value:"1rem"},{id:"6",value:"1.5rem"},{id:"8",value:"2rem"},{id:"12",value:"3rem"},{id:"16",value:"4rem"}]},borderRadius:[{id:"none",value:"0"},{id:"sm",value:"0.125rem"},{id:"default",value:"0.25rem"},{id:"md",value:"0.375rem"},{id:"lg",value:"0.5rem"},{id:"xl",value:"0.75rem"},{id:"full",value:"9999px"}]},brand:{identity:{name:"PlexusOne",tagline:"AI Agent Development Platform",mission:"Empowering developers to build, deploy, and manage AI agents at scale",domain:"plexusone.dev",social:{github:"https://github.com/plexusone"}},logos:{primary:{description:"PlexusOne wordmark with gradient",variants:{gradient:{svg:"assets/wordmark-gradient.svg",usage:"Primary on dark backgrounds"},light:{svg:"assets/wordmark-light.svg",usage:"On dark backgrounds"}},minWidth:"180px",clearSpace:"1em"},icon:{description:"Plexus network icon",svg:"assets/icon.svg",favicon:"assets/favicon.svg",design:{background:"linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)",foreground:"#ffffff",cornerRadius:"8px"}}},navigation:{brand:{name:"PlexusOne",href:"https://plexusone.dev"},baseUrl:"https://plexusone.dev",links:[{id:"libraries",label:"Libraries",href:"/libraries"},{id:"tools",label:"Tools",href:"/tools"},{id:"docs",label:"Docs",href:"/docs"}],dropdowns:[],actions:[{id:"github",label:"GitHub",href:"https://github.com/plexusone",icon:"github",external:!0}]},colorCombinations:[{name:"Dark Canvas",description:"Primary dark background",background:"dark",text:"text",accent:"cyan"},{name:"Card Surface",description:"Elevated card surfaces",background:"navy",text:"text",accent:"purple"},{name:"Gradient Accent",description:"Cyan to purple to pink gradient",background:"dark",text:"text",accent:"violet"}]},profiles:{website:{description:"Dark website optimized for LCD displays",inherits:"default",css:{prefix:"--plexus",selector:":root"}},marp:{description:"Brighter colors optimized for projection",inherits:"default",colorOverrides:[{tokenId:"dark",value:"linear-gradient(135deg, #0a0e1a 0%, #1a237e 50%, #0a0e1a 100%)"},{tokenId:"cyan",value:"#00d4ff"},{tokenId:"pink",value:"#e040fb"},{tokenId:"text",value:"#e8eaf6"}],additionalColors:[{id:"deep-blue",value:"#1a237e",semantic:"background-gradient",usage:"Slide background gradient midpoint"},{id:"lavender",value:"#b388ff",semantic:"heading-secondary",usage:"H2 headings, code highlights"}],additionalTypography:{fontFamilies:[{id:"mono",value:"JetBrains Mono, Courier New, monospace",usage:"Code blocks in presentations"}]}},pdf:{description:"Print-optimized with light background",inherits:"default",colorOverrides:[{tokenId:"dark",value:"#ffffff"},{tokenId:"navy",value:"#f8fafc"},{tokenId:"text",value:"#1e293b"},{tokenId:"text-muted",value:"#64748b"}]}},output:{css:{prefix:"--plexus",selector:":root",mappings:{colors:"--{prefix}-{id}",spacing:"--{prefix}-space-{id}","typography.fontFamilies":"--{prefix}-font-{id}",borderRadius:"--{prefix}-radius-{id}"}}}};function Ir(i){const e=_.foundations.colors.find(t=>t.id===i);return(e==null?void 0:e.value)??""}d(Ir,"getColor");function xt(){return Object.fromEntries(_.foundations.colors.map(i=>[i.id,i.value]))}d(xt,"getColorMap");function Br(i="--plexus"){return _.foundations.colors.map(e=>`  ${i}-${e.id}: ${e.value};`).join(`
`)}d(Br,"generateColorCSS");function xs(){const i=_.output.css.prefix,e=_.output.css.selector,t=_.foundations.colors.map(o=>`  ${i}-${o.id}: ${o.value};`).join(`
`),s=_.foundations.typography.fontFamilies.map(o=>`  ${i}-font-${o.id}: ${o.value};`).join(`
`),r=_.foundations.typography.fontSizes.map(o=>`  ${i}-text-${o.id}: ${o.value};`).join(`
`),a=_.foundations.borderRadius.map(o=>`  ${i}-radius-${o.id}: ${o.value};`).join(`
`),n=_.foundations.spacing.scale.map(o=>`  ${i}-space-${o.id}: ${o.value};`).join(`
`);return`${e} {
  /* Colors */
${t}

  /* Typography */
${s}
${r}

  /* Border Radius */
${a}

  /* Spacing */
${n}
}`}d(xs,"generateDesignSystemCSS");const kt=_.brand.identity.name,Vr=_.brand.identity.domain,At=_.brand.identity.social.github,Ye="",Wr=["library","agent","application","specification"],St={library:"/libraries",agent:"/agents",application:"/applications",specification:"/specifications"};function qr(i){const e=xt(),s=`linear-gradient(135deg, ${[e.cyan,e.purple,e.pink].filter(Boolean).join(", ")})`;return{baseUrl:i,brand:{name:kt,html:`<img src="${i}/icon.png" alt="${kt}" style="height: 32px; width: 32px; margin-right: 8px; vertical-align: bottom;" /><span style="background: ${s}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; vertical-align: bottom;">Plexus</span><span style="font-weight: 300; vertical-align: bottom;">One</span>`,href:i||"/"},links:[{id:"platform",label:"Platform",href:"/platform"},{id:"projects",label:"Projects",href:"/projects"}],dropdowns:[{id:"developers",label:"Developers",items:[{id:"academy",label:"Academy",href:"/academy"},{id:"mcp",label:"MCP",href:"/mcp"},{id:"tools",label:"Tools",href:"/tools/"}]},{id:"community",label:"Community",items:[{id:"blog",label:"Blog",href:"/blog"},{id:"releases",label:"Releases",href:"/releases"},{id:"why",label:"Why PlexusOne?",href:"/why"}],extraItems:[{id:"rss",label:"RSS Feed",href:"/blog/atom.xml",external:!0}]}],actions:[{id:"github",label:"GitHub",href:At,external:!0}],megaMenu:{label:"Products",categories:[],items:[],footerLinks:[{id:"all-products",label:"All Products",href:"/products"},{id:"integrations",label:"Integrations",href:"/integrations"},{id:"github",label:"GitHub",href:At,external:!0}]}}}d(qr,"createBaseConfig");function Fr(i,e){const t=Wr.map((n,o)=>{const l=i.categories[n];return{id:n,label:(l==null?void 0:l.label)||n,description:(l==null?void 0:l.description)||"",order:(l==null?void 0:l.order)??o,href:St[n]}}),s=i.products.filter(n=>n.featured),a=(s.length>0?s:i.products).map(n=>({id:n.slug,label:n.name,categoryId:n.category,tagline:n.tagline,featured:n.featured??!1,href:n.docsUrl||`${St[n.category]}/${n.slug}`}));return{categories:t,items:a}}d(Fr,"productsToMegaMenu");function Gr(i,e,t){const{categories:s,items:r}=Fr(e);return{...i,megaMenu:{...i.megaMenu,categories:s,items:r}}}d(Gr,"mergeProductsIntoConfig");function ks(){const i=xt();return`
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
}`}d(ks,"getNavbarThemeCSS");var Kr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Ct=d((i,e,t,s)=>{for(var r=s>1?void 0:s?Jr(e,t):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&Kr(e,t,r),r},"__decorateClass");function As(){if(typeof document>"u"||document.getElementById("plexus-design-system-css"))return;const i=document.createElement("style");i.id="plexus-design-system-css",i.textContent=xs()+`
`+ks(),document.head.appendChild(i)}d(As,"injectDesignSystemCSS"),m.PlexusNav=(ke=class extends N{constructor(){super(...arguments),this.config={},this._navbarConfig=null,this._baseUrl=Ye}connectedCallback(){super.connectedCallback(),As(),this._baseUrl=this.config.baseUrl??Ye,this._initConfig()}updated(e){e.has("config")&&(this._baseUrl=this.config.baseUrl??Ye,this._initConfig())}async _initConfig(){const e=qr(this._baseUrl);this._navbarConfig=e;try{const t=this.config.productsUrl??`${this._baseUrl}/data/products.json`,s=await fetch(t);if(s.ok){const r=await s.json();this._navbarConfig=Gr(e,r,this._baseUrl)}}catch(t){console.warn("PlexusNav: Failed to load products.json",t)}}render(){return this._navbarConfig?Qt`
      <wt-navbar
        .config=${this._navbarConfig}
        theme=${this.config.theme??"dark"}
      ></wt-navbar>
    `:Qt``}},d(ke,"PlexusNav"),ke),m.PlexusNav.styles=Ms`
    :host {
      display: block;
    }
  `,Ct([Xt({type:Object})],m.PlexusNav.prototype,"config",2),Ct([Ys()],m.PlexusNav.prototype,"_navbarConfig",2),m.PlexusNav=Ct([Ks("plexus-nav")],m.PlexusNav);function Ss(){As();const i=document.getElementById("plexus-nav-root");if(i&&!i.querySelector("plexus-nav")){const e=document.createElement("plexus-nav");i.appendChild(e)}}return d(Ss,"autoInit"),typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ss):Ss()),m.BRAND_DOMAIN=Vr,m.BRAND_NAME=kt,m.CATEGORY_PATHS=St,m.DEFAULT_BASE_URL=Ye,m.GITHUB_URL=At,m.designSystem=_,m.generateColorCSS=Br,m.generateDesignSystemCSS=xs,m.getColor=Ir,m.getColorMap=xt,m.getNavbarThemeCSS=ks,Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),m}({});
//# sourceMappingURL=plexus-nav.min.js.map
