(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();class Uu{constructor(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}const Wn=Uu,Mr={PROPERTYCHANGE:"propertychange"};class Nu{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}const fo=Nu;function po(i,e){return i>e?1:i<e?-1:0}function mo(i,e,t){if(i[0]<=e)return 0;const n=i.length;if(e<=i[n-1])return n-1;if(typeof t=="function"){for(let r=1;r<n;++r){const s=i[r];if(s===e)return r;if(s<e)return t(e,i[r-1],s)>0?r-1:r}return n-1}if(t>0){for(let r=1;r<n;++r)if(i[r]<e)return r-1;return n-1}if(t<0){for(let r=1;r<n;++r)if(i[r]<=e)return r;return n-1}for(let r=1;r<n;++r){if(i[r]==e)return r;if(i[r]<e)return i[r-1]-e<e-i[r]?r-1:r}return n-1}function Fu(i,e){const t=Array.isArray(e)?e:[e],n=t.length;for(let r=0;r<n;r++)i[i.length]=t[r]}function Ps(i,e){const t=i.length;if(t!==e.length)return!1;for(let n=0;n<t;n++)if(i[n]!==e[n])return!1;return!0}function Ou(i,e,t){const n=e||po;return i.every(function(r,s){if(s===0)return!0;const a=n(i[s-1],r);return!(a>0||t&&a===0)})}function Ms(){return!0}function Is(){return!1}function ys(){}function zu(i){let e=!1,t,n,r;return function(){const s=Array.prototype.slice.call(arguments);return(!e||this!==r||!Ps(s,n))&&(e=!0,r=this,n=s,t=i.apply(this,arguments)),t}}function Ds(i){for(const e in i)delete i[e]}function Gu(i){let e;for(e in i)return!1;return!e}class Bu extends fo{constructor(e){super(),this.eventTarget_=e,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(e,t){if(!e||!t)return;const n=this.listeners_||(this.listeners_={}),r=n[e]||(n[e]=[]);r.includes(t)||r.push(t)}dispatchEvent(e){const t=typeof e=="string",n=t?e:e.type,r=this.listeners_&&this.listeners_[n];if(!r)return;const s=t?new Wn(e):e;s.target||(s.target=this.eventTarget_||this);const a=this.dispatching_||(this.dispatching_={}),o=this.pendingRemovals_||(this.pendingRemovals_={});n in a||(a[n]=0,o[n]=0),++a[n];let l;for(let c=0,h=r.length;c<h;++c)if("handleEvent"in r[c]?l=r[c].handleEvent(s):l=r[c].call(this,s),l===!1||s.propagationStopped){l=!1;break}if(--a[n]===0){let c=o[n];for(delete o[n];c--;)this.removeEventListener(n,ys);delete a[n]}return l}disposeInternal(){this.listeners_&&Ds(this.listeners_)}getListeners(e){return this.listeners_&&this.listeners_[e]||void 0}hasListener(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(e,t){const n=this.listeners_&&this.listeners_[e];if(n){const r=n.indexOf(t);r!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(n[r]=ys,++this.pendingRemovals_[e]):(n.splice(r,1),n.length===0&&delete this.listeners_[e]))}}}const go=Bu,Oe={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function ke(i,e,t,n,r){if(n&&n!==i&&(t=t.bind(n)),r){const a=t;t=function(){i.removeEventListener(e,t),a.apply(this,arguments)}}const s={target:i,type:e,listener:t};return i.addEventListener(e,t),s}function Ss(i,e,t,n){return ke(i,e,t,n,!0)}function nt(i){i&&i.target&&(i.target.removeEventListener(i.type,i.listener),Ds(i))}class Us extends go{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(Oe.CHANGE)}getRevision(){return this.revision_}onInternal(e,t){if(Array.isArray(e)){const n=e.length,r=new Array(n);for(let s=0;s<n;++s)r[s]=ke(this,e[s],t);return r}return ke(this,e,t)}onceInternal(e,t){let n;if(Array.isArray(e)){const r=e.length;n=new Array(r);for(let s=0;s<r;++s)n[s]=Ss(this,e[s],t)}else n=Ss(this,e,t);return t.ol_key=n,n}unInternal(e,t){const n=t.ol_key;if(n)Hu(n);else if(Array.isArray(e))for(let r=0,s=e.length;r<s;++r)this.removeEventListener(e[r],t);else this.removeEventListener(e,t)}}Us.prototype.on;Us.prototype.once;Us.prototype.un;function Hu(i){if(Array.isArray(i))for(let e=0,t=i.length;e<t;++e)nt(i[e]);else nt(i)}const sh=Us;function Qe(){throw new Error("Unimplemented abstract method.")}let Vu=0;function wt(i){return i.ol_uid||(i.ol_uid=String(++Vu))}class Jo extends Wn{constructor(e,t,n){super(e),this.key=t,this.oldValue=n}}class ku extends sh{constructor(e){super(),this.on,this.once,this.un,wt(this),this.values_=null,e!==void 0&&this.setProperties(e)}get(e){let t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,t){let n;n=`change:${e}`,this.hasListener(n)&&this.dispatchEvent(new Jo(n,e,t)),n=Mr.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new Jo(n,e,t))}addChangeListener(e,t){this.addEventListener(`change:${e}`,t)}removeChangeListener(e,t){this.removeEventListener(`change:${e}`,t)}set(e,t,n){const r=this.values_||(this.values_={});if(n)r[e]=t;else{const s=r[e];r[e]=t,s!==t&&this.notify(e,s)}}setProperties(e,t){for(const n in e)this.set(n,e[n],t)}applyProperties(e){e.values_&&Object.assign(this.values_||(this.values_={}),e.values_)}unset(e,t){if(this.values_&&e in this.values_){const n=this.values_[e];delete this.values_[e],Gu(this.values_)&&(this.values_=null),t||this.notify(e,n)}}}const An=ku,Ht={ADD:"add",REMOVE:"remove"},Qo={LENGTH:"length"};class Hr extends Wn{constructor(e,t,n){super(e),this.element=t,this.index=n}}class Wu extends An{constructor(e,t){if(super(),this.on,this.once,this.un,t=t||{},this.unique_=!!t.unique,this.array_=e||[],this.unique_)for(let n=0,r=this.array_.length;n<r;++n)this.assertUnique_(this.array_[n],n);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(e){for(let t=0,n=e.length;t<n;++t)this.push(e[t]);return this}forEach(e){const t=this.array_;for(let n=0,r=t.length;n<r;++n)e(t[n],n,t)}getArray(){return this.array_}item(e){return this.array_[e]}getLength(){return this.get(Qo.LENGTH)}insertAt(e,t){if(e<0||e>this.getLength())throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t),this.array_.splice(e,0,t),this.updateLength_(),this.dispatchEvent(new Hr(Ht.ADD,t,e))}pop(){return this.removeAt(this.getLength()-1)}push(e){this.unique_&&this.assertUnique_(e);const t=this.getLength();return this.insertAt(t,e),this.getLength()}remove(e){const t=this.array_;for(let n=0,r=t.length;n<r;++n)if(t[n]===e)return this.removeAt(n)}removeAt(e){if(e<0||e>=this.getLength())return;const t=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new Hr(Ht.REMOVE,t,e)),t}setAt(e,t){const n=this.getLength();if(e>=n){this.insertAt(e,t);return}if(e<0)throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t,e);const r=this.array_[e];this.array_[e]=t,this.dispatchEvent(new Hr(Ht.REMOVE,r,e)),this.dispatchEvent(new Hr(Ht.ADD,t,e))}updateLength_(){this.set(Qo.LENGTH,this.array_.length)}assertUnique_(e,t){for(let n=0,r=this.array_.length;n<r;++n)if(this.array_[n]===e&&n!==t)throw new Error("Duplicate item added to a unique collection")}}const Sn=Wu;function qe(i,e){if(!i)throw new Error(e)}const Vn=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",Xu=Vn.includes("firefox"),Yu=Vn.includes("safari")&&!Vn.includes("chrom");Yu&&(Vn.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(Vn));const qu=Vn.includes("webkit")&&!Vn.includes("edge"),ah=Vn.includes("macintosh"),oh=typeof devicePixelRatio<"u"?devicePixelRatio:1,lh=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,Ku=typeof Image<"u"&&Image.prototype.decode,ch=function(){let i=!1;try{const e=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return i}();new Array(6);function Xi(){return[1,0,0,1,0,0]}function Gt(i,e){const t=e[0],n=e[1];return e[0]=i[0]*t+i[2]*n+i[4],e[1]=i[1]*t+i[3]*n+i[5],e}function yr(i,e,t,n,r,s,a,o){const l=Math.sin(s),c=Math.cos(s);return i[0]=n*c,i[1]=r*l,i[2]=-n*l,i[3]=r*c,i[4]=a*n*c-o*n*l+e,i[5]=a*r*l+o*r*c+t,i}function hh(i,e){const t=Zu(e);qe(t!==0,"Transformation matrix cannot be inverted");const n=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5];return i[0]=a/t,i[1]=-r/t,i[2]=-s/t,i[3]=n/t,i[4]=(s*l-a*o)/t,i[5]=-(n*l-r*o)/t,i}function Zu(i){return i[0]*i[3]-i[1]*i[2]}let el;function ju(i){const e="matrix("+i.join(", ")+")";if(lh)return e;const t=el||(el=document.createElement("div"));return t.style.transform=e,t.style.transform}const vt={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function tl(i){const e=di();for(let t=0,n=i.length;t<n;++t)vs(e,i[t]);return e}function $u(i,e,t){const n=Math.min.apply(null,i),r=Math.min.apply(null,e),s=Math.max.apply(null,i),a=Math.max.apply(null,e);return sr(n,r,s,a,t)}function Ju(i,e){return e?(e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e):i.slice()}function uh(i,e,t){let n,r;return e<i[0]?n=i[0]-e:i[2]<e?n=e-i[2]:n=0,t<i[1]?r=i[1]-t:i[3]<t?r=t-i[3]:r=0,n*n+r*r}function _o(i,e){return dh(i,e[0],e[1])}function Qu(i,e){return i[0]<=e[0]&&e[2]<=i[2]&&i[1]<=e[1]&&e[3]<=i[3]}function dh(i,e,t){return i[0]<=e&&e<=i[2]&&i[1]<=t&&t<=i[3]}function nl(i,e){const t=i[0],n=i[1],r=i[2],s=i[3],a=e[0],o=e[1];let l=vt.UNKNOWN;return a<t?l=l|vt.LEFT:a>r&&(l=l|vt.RIGHT),o<n?l=l|vt.BELOW:o>s&&(l=l|vt.ABOVE),l===vt.UNKNOWN&&(l=vt.INTERSECTING),l}function di(){return[1/0,1/0,-1/0,-1/0]}function sr(i,e,t,n,r){return r?(r[0]=i,r[1]=e,r[2]=t,r[3]=n,r):[i,e,t,n]}function Lr(i){return sr(1/0,1/0,-1/0,-1/0,i)}function ed(i,e){const t=i[0],n=i[1];return sr(t,n,t,n,e)}function td(i,e,t,n,r){const s=Lr(r);return fh(s,i,e,t,n)}function Oa(i,e){return i[0]==e[0]&&i[2]==e[2]&&i[1]==e[1]&&i[3]==e[3]}function nd(i,e){return e[0]<i[0]&&(i[0]=e[0]),e[2]>i[2]&&(i[2]=e[2]),e[1]<i[1]&&(i[1]=e[1]),e[3]>i[3]&&(i[3]=e[3]),i}function vs(i,e){e[0]<i[0]&&(i[0]=e[0]),e[0]>i[2]&&(i[2]=e[0]),e[1]<i[1]&&(i[1]=e[1]),e[1]>i[3]&&(i[3]=e[1])}function fh(i,e,t,n,r){for(;t<n;t+=r)id(i,e[t],e[t+1]);return i}function id(i,e,t){i[0]=Math.min(i[0],e),i[1]=Math.min(i[1],t),i[2]=Math.max(i[2],e),i[3]=Math.max(i[3],t)}function ph(i,e){let t;return t=e(Ns(i)),t||(t=e(Fs(i)),t)||(t=e(Os(i)),t)||(t=e(fi(i)),t)?t:!1}function za(i){let e=0;return Ir(i)||(e=mt(i)*ln(i)),e}function Ns(i){return[i[0],i[1]]}function Fs(i){return[i[2],i[1]]}function Sr(i){return[(i[0]+i[2])/2,(i[1]+i[3])/2]}function rd(i,e){let t;if(e==="bottom-left")t=Ns(i);else if(e==="bottom-right")t=Fs(i);else if(e==="top-left")t=fi(i);else if(e==="top-right")t=Os(i);else throw new Error("Invalid corner");return t}function Ga(i,e,t,n,r){const[s,a,o,l,c,h,u,d]=Ba(i,e,t,n);return sr(Math.min(s,o,c,u),Math.min(a,l,h,d),Math.max(s,o,c,u),Math.max(a,l,h,d),r)}function Ba(i,e,t,n){const r=e*n[0]/2,s=e*n[1]/2,a=Math.cos(t),o=Math.sin(t),l=r*a,c=r*o,h=s*a,u=s*o,d=i[0],m=i[1];return[d-l+u,m-c-h,d-l-u,m-c+h,d+l-u,m+c+h,d+l+u,m+c-h,d-l+u,m-c-h]}function ln(i){return i[3]-i[1]}function vr(i,e,t){const n=t||di();return Pr(i,e)?(i[0]>e[0]?n[0]=i[0]:n[0]=e[0],i[1]>e[1]?n[1]=i[1]:n[1]=e[1],i[2]<e[2]?n[2]=i[2]:n[2]=e[2],i[3]<e[3]?n[3]=i[3]:n[3]=e[3]):Lr(n),n}function fi(i){return[i[0],i[3]]}function Os(i){return[i[2],i[3]]}function mt(i){return i[2]-i[0]}function Pr(i,e){return i[0]<=e[2]&&i[2]>=e[0]&&i[1]<=e[3]&&i[3]>=e[1]}function Ir(i){return i[2]<i[0]||i[3]<i[1]}function sd(i,e){return e?(e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e):i}function ad(i,e,t){let n=!1;const r=nl(i,e),s=nl(i,t);if(r===vt.INTERSECTING||s===vt.INTERSECTING)n=!0;else{const a=i[0],o=i[1],l=i[2],c=i[3],h=e[0],u=e[1],d=t[0],m=t[1],g=(m-u)/(d-h);let _,p;s&vt.ABOVE&&!(r&vt.ABOVE)&&(_=d-(m-c)/g,n=_>=a&&_<=l),!n&&s&vt.RIGHT&&!(r&vt.RIGHT)&&(p=m-(d-l)*g,n=p>=o&&p<=c),!n&&s&vt.BELOW&&!(r&vt.BELOW)&&(_=d-(m-o)/g,n=_>=a&&_<=l),!n&&s&vt.LEFT&&!(r&vt.LEFT)&&(p=m-(d-a)*g,n=p>=o&&p<=c)}return n}function od(i,e,t,n){if(Ir(i))return Lr(t);let r=[];if(n>1){const o=i[2]-i[0],l=i[3]-i[1];for(let c=0;c<n;++c)r.push(i[0]+o*c/n,i[1],i[2],i[1]+l*c/n,i[2]-o*c/n,i[3],i[0],i[3]-l*c/n)}else r=[i[0],i[1],i[2],i[1],i[2],i[3],i[0],i[3]];e(r,r,2);const s=[],a=[];for(let o=0,l=r.length;o<l;o+=2)s.push(r[o]),a.push(r[o+1]);return $u(s,a,t)}const Tr={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};class ld{constructor(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent!==void 0?e.extent:null,this.worldExtent_=e.worldExtent!==void 0?e.worldExtent:null,this.axisOrientation_=e.axisOrientation!==void 0?e.axisOrientation:"enu",this.global_=e.global!==void 0?e.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||Tr[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(e){this.defaultTileGrid_=e}setExtent(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)}setWorldExtent(e){this.worldExtent_=e}setGetPointResolution(e){this.getPointResolutionFunc_=e}getPointResolutionFunc(){return this.getPointResolutionFunc_}}const mh=ld,Dr=6378137,Hi=Math.PI*Dr,cd=[-Hi,-Hi,Hi,Hi],hd=[-180,-85,180,85],Vr=Dr*Math.log(Math.tan(Math.PI/2));class pi extends mh{constructor(e){super({code:e,units:"m",extent:cd,global:!0,worldExtent:hd,getPointResolution:function(t,n){return t/Math.cosh(n[1]/Dr)}})}}const il=[new pi("EPSG:3857"),new pi("EPSG:102100"),new pi("EPSG:102113"),new pi("EPSG:900913"),new pi("http://www.opengis.net/def/crs/EPSG/0/3857"),new pi("http://www.opengis.net/gml/srs/epsg.xml#3857")];function ud(i,e,t){const n=i.length;t=t>1?t:2,e===void 0&&(t>2?e=i.slice():e=new Array(n));for(let r=0;r<n;r+=t){e[r]=Hi*i[r]/180;let s=Dr*Math.log(Math.tan(Math.PI*(+i[r+1]+90)/360));s>Vr?s=Vr:s<-Vr&&(s=-Vr),e[r+1]=s}return e}function dd(i,e,t){const n=i.length;t=t>1?t:2,e===void 0&&(t>2?e=i.slice():e=new Array(n));for(let r=0;r<n;r+=t)e[r]=180*i[r]/Hi,e[r+1]=360*Math.atan(Math.exp(i[r+1]/Dr))/Math.PI-90;return e}const fd=6378137,rl=[-180,-90,180,90],pd=Math.PI*fd/180;class qn extends mh{constructor(e,t){super({code:e,units:"degrees",extent:rl,axisOrientation:t,global:!0,metersPerUnit:pd,worldExtent:rl})}}const sl=[new qn("CRS:84"),new qn("EPSG:4326","neu"),new qn("urn:ogc:def:crs:OGC:1.3:CRS84"),new qn("urn:ogc:def:crs:OGC:2:84"),new qn("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new qn("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new qn("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];let Ha={};function md(i){return Ha[i]||Ha[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function gd(i,e){Ha[i]=e}let Yi={};function Ts(i,e,t){const n=i.getCode(),r=e.getCode();n in Yi||(Yi[n]={}),Yi[n][r]=t}function _d(i,e){let t;return i in Yi&&e in Yi[i]&&(t=Yi[i][e]),t}function gt(i,e,t){return Math.min(Math.max(i,e),t)}function vd(i,e,t,n,r,s){const a=r-t,o=s-n;if(a!==0||o!==0){const l=((i-t)*a+(e-n)*o)/(a*a+o*o);l>1?(t=r,n=s):l>0&&(t+=a*l,n+=o*l)}return qi(i,e,t,n)}function qi(i,e,t,n){const r=t-i,s=n-e;return r*r+s*s}function xd(i){const e=i.length;for(let n=0;n<e;n++){let r=n,s=Math.abs(i[n][n]);for(let o=n+1;o<e;o++){const l=Math.abs(i[o][n]);l>s&&(s=l,r=o)}if(s===0)return null;const a=i[r];i[r]=i[n],i[n]=a;for(let o=n+1;o<e;o++){const l=-i[o][n]/i[n][n];for(let c=n;c<e+1;c++)n==c?i[o][c]=0:i[o][c]+=l*i[n][c]}}const t=new Array(e);for(let n=e-1;n>=0;n--){t[n]=i[n][e]/i[n][n];for(let r=n-1;r>=0;r--)i[r][e]-=i[r][n]*t[n]}return t}function xs(i){return i*Math.PI/180}function Ki(i,e){const t=i%e;return t*e<0?t+e:t}function Ed(i,e,t){return i+t*(e-i)}function gh(i,e){const t=Math.pow(10,e);return Math.round(i*t)/t}function kr(i,e){return Math.floor(gh(i,e))}function Wr(i,e){return Math.ceil(gh(i,e))}function Md(i,e){return i[0]+=+e[0],i[1]+=+e[1],i}function As(i,e){let t=!0;for(let n=i.length-1;n>=0;--n)if(i[n]!=e[n]){t=!1;break}return t}function vo(i,e){const t=Math.cos(e),n=Math.sin(e),r=i[0]*t-i[1]*n,s=i[1]*t+i[0]*n;return i[0]=r,i[1]=s,i}function yd(i,e){return i[0]*=e,i[1]*=e,i}function Sd(i,e){if(e.canWrapX()){const t=mt(e.getExtent()),n=Td(i,e,t);n&&(i[0]-=n*t)}return i}function Td(i,e,t){const n=e.getExtent();let r=0;return e.canWrapX()&&(i[0]<n[0]||i[0]>n[2])&&(t=t||mt(n),r=Math.floor((i[0]-n[0])/t)),r}const Ad=63710088e-1;function al(i,e,t){t=t||Ad;const n=xs(i[1]),r=xs(e[1]),s=(r-n)/2,a=xs(e[0]-i[0])/2,o=Math.sin(s)*Math.sin(s)+Math.sin(a)*Math.sin(a)*Math.cos(n)*Math.cos(r);return 2*t*Math.atan2(Math.sqrt(o),Math.sqrt(1-o))}const _h={info:1,warn:2,error:3,none:4};let Rd=_h.info;function vh(...i){Rd>_h.warn||console.warn(...i)}let Va=!0;function bd(i){Va=!(i===void 0?!0:i)}function xo(i,e){if(e!==void 0){for(let t=0,n=i.length;t<n;++t)e[t]=i[t];e=e}else e=i.slice();return e}function xh(i,e){if(e!==void 0&&i!==e){for(let t=0,n=i.length;t<n;++t)e[t]=i[t];i=e}return i}function wd(i){gd(i.getCode(),i),Ts(i,i,xo)}function Cd(i){i.forEach(wd)}function Wt(i){return typeof i=="string"?md(i):i||null}function ol(i,e,t,n){i=Wt(i);let r;const s=i.getPointResolutionFunc();if(s){if(r=s(e,t),n&&n!==i.getUnits()){const a=i.getMetersPerUnit();a&&(r=r*a/Tr[n])}}else{const a=i.getUnits();if(a=="degrees"&&!n||n=="degrees")r=e;else{const o=Mo(i,Wt("EPSG:4326"));if(o===xh&&a!=="degrees")r=e*i.getMetersPerUnit();else{let c=[t[0]-e/2,t[1],t[0]+e/2,t[1],t[0],t[1]-e/2,t[0],t[1]+e/2];c=o(c,c,2);const h=al(c.slice(0,2),c.slice(2,4)),u=al(c.slice(4,6),c.slice(6,8));r=(h+u)/2}const l=n?Tr[n]:i.getMetersPerUnit();l!==void 0&&(r/=l)}}return r}function ll(i){Cd(i),i.forEach(function(e){i.forEach(function(t){e!==t&&Ts(e,t,xo)})})}function Ld(i,e,t,n){i.forEach(function(r){e.forEach(function(s){Ts(r,s,t),Ts(s,r,n)})})}function Eo(i,e){return i?typeof i=="string"?Wt(i):i:Wt(e)}function Oi(i,e){if(i===e)return!0;const t=i.getUnits()===e.getUnits();return(i.getCode()===e.getCode()||Mo(i,e)===xo)&&t}function Mo(i,e){const t=i.getCode(),n=e.getCode();let r=_d(t,n);return r||(r=xh),r}function Ar(i,e){const t=Wt(i),n=Wt(e);return Mo(t,n)}function yo(i,e,t){return Ar(e,t)(i,void 0,i.length)}function Eh(i,e,t,n){const r=Ar(e,t);return od(i,r,void 0,n)}let cn=null;function Pd(i){cn=Wt(i)}function Id(){return cn}function Dd(){Pd("EPSG:4326")}function ka(i,e){return cn?yo(i,e,cn):i}function xn(i,e){return cn?yo(i,cn,e):(Va&&!As(i,[0,0])&&i[0]>=-180&&i[0]<=180&&i[1]>=-90&&i[1]<=90&&(Va=!1,vh("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),i)}function Ud(i,e){return cn?Eh(i,e,cn):i}function Vi(i,e){return cn?Eh(i,cn,e):i}function Nd(){ll(il),ll(sl),Ld(sl,il,ud,dd)}Nd();function Fd(i,e,t,n,r,s){s=s||[];let a=0;for(let o=e;o<t;o+=n){const l=i[o],c=i[o+1];s[a++]=r[0]*l+r[2]*c+r[4],s[a++]=r[1]*l+r[3]*c+r[5]}return s&&s.length!=a&&(s.length=a),s}function Od(i,e,t,n,r,s,a){a=a||[];const o=Math.cos(r),l=Math.sin(r),c=s[0],h=s[1];let u=0;for(let d=e;d<t;d+=n){const m=i[d]-c,g=i[d+1]-h;a[u++]=c+m*o-g*l,a[u++]=h+m*l+g*o;for(let _=d+2;_<d+n;++_)a[u++]=i[_]}return a&&a.length!=u&&(a.length=u),a}function zd(i,e,t,n,r,s,a,o){o=o||[];const l=a[0],c=a[1];let h=0;for(let u=e;u<t;u+=n){const d=i[u]-l,m=i[u+1]-c;o[h++]=l+r*d,o[h++]=c+s*m;for(let g=u+2;g<u+n;++g)o[h++]=i[g]}return o&&o.length!=h&&(o.length=h),o}function Gd(i,e,t,n,r,s,a){a=a||[];let o=0;for(let l=e;l<t;l+=n){a[o++]=i[l]+r,a[o++]=i[l+1]+s;for(let c=l+2;c<l+n;++c)a[o++]=i[c]}return a&&a.length!=o&&(a.length=o),a}const cl=Xi();class Bd extends An{constructor(){super(),this.extent_=di(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=zu(function(e,t,n){if(!n)return this.getSimplifiedGeometry(t);const r=this.clone();return r.applyTransform(n),r.getSimplifiedGeometry(t)})}simplifyTransformed(e,t){return this.simplifyTransformedInternal(this.getRevision(),e,t)}clone(){return Qe()}closestPointXY(e,t,n,r){return Qe()}containsXY(e,t){const n=this.getClosestPoint([e,t]);return n[0]===e&&n[1]===t}getClosestPoint(e,t){return t=t||[NaN,NaN],this.closestPointXY(e[0],e[1],t,1/0),t}intersectsCoordinate(e){return this.containsXY(e[0],e[1])}computeExtent(e){return Qe()}getExtent(e){if(this.extentRevision_!=this.getRevision()){const t=this.computeExtent(this.extent_);(isNaN(t[0])||isNaN(t[1]))&&Lr(t),this.extentRevision_=this.getRevision()}return sd(this.extent_,e)}rotate(e,t){Qe()}scale(e,t,n){Qe()}simplify(e){return this.getSimplifiedGeometry(e*e)}getSimplifiedGeometry(e){return Qe()}getType(){return Qe()}applyTransform(e){Qe()}intersectsExtent(e){return Qe()}translate(e,t){Qe()}transform(e,t){const n=Wt(e),r=n.getUnits()=="tile-pixels"?function(s,a,o){const l=n.getExtent(),c=n.getWorldExtent(),h=ln(c)/ln(l);return yr(cl,c[0],c[3],h,-h,0,0,0),Fd(s,0,s.length,o,cl,a),Ar(n,t)(s,a,o)}:Ar(n,t);return this.applyTransform(r),this}}const Hd=Bd;class Vd extends Hd{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates=null}computeExtent(e){return td(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinates(){return Qe()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;const t=this.getSimplifiedGeometryInternal(e);return t.getFlatCoordinates().length<this.flatCoordinates.length?t:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getSimplifiedGeometryInternal(e){return this}getStride(){return this.stride}setFlatCoordinates(e,t){this.stride=hl(e),this.layout=e,this.flatCoordinates=t}setCoordinates(e,t){Qe()}setLayout(e,t,n){let r;if(e)r=hl(e);else{for(let s=0;s<n;++s){if(t.length===0){this.layout="XY",this.stride=2;return}t=t[0]}r=t.length,e=kd(r)}this.layout=e,this.stride=r}applyTransform(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())}rotate(e,t){const n=this.getFlatCoordinates();if(n){const r=this.getStride();Od(n,0,n.length,r,e,t,n),this.changed()}}scale(e,t,n){t===void 0&&(t=e),n||(n=Sr(this.getExtent()));const r=this.getFlatCoordinates();if(r){const s=this.getStride();zd(r,0,r.length,s,e,t,n,r),this.changed()}}translate(e,t){const n=this.getFlatCoordinates();if(n){const r=this.getStride();Gd(n,0,n.length,r,e,t,n),this.changed()}}}function kd(i){let e;return i==2?e="XY":i==3?e="XYZ":i==4&&(e="XYZM"),e}function hl(i){let e;return i=="XY"?e=2:i=="XYZ"||i=="XYM"?e=3:i=="XYZM"&&(e=4),e}const So=Vd;function ul(i,e,t,n,r,s,a){const o=i[e],l=i[e+1],c=i[t]-o,h=i[t+1]-l;let u;if(c===0&&h===0)u=e;else{const d=((r-o)*c+(s-l)*h)/(c*c+h*h);if(d>1)u=t;else if(d>0){for(let m=0;m<n;++m)a[m]=Ed(i[e+m],i[t+m],d);a.length=n;return}else u=e}for(let d=0;d<n;++d)a[d]=i[u+d];a.length=n}function Mh(i,e,t,n,r){let s=i[e],a=i[e+1];for(e+=n;e<t;e+=n){const o=i[e],l=i[e+1],c=qi(s,a,o,l);c>r&&(r=c),s=o,a=l}return r}function Wd(i,e,t,n,r){for(let s=0,a=t.length;s<a;++s){const o=t[s];r=Mh(i,e,o,n,r),e=o}return r}function yh(i,e,t,n,r,s,a,o,l,c,h){if(e==t)return c;let u,d;if(r===0){if(d=qi(a,o,i[e],i[e+1]),d<c){for(u=0;u<n;++u)l[u]=i[e+u];return l.length=n,d}return c}h=h||[NaN,NaN];let m=e+n;for(;m<t;)if(ul(i,m-n,m,n,a,o,h),d=qi(a,o,h[0],h[1]),d<c){for(c=d,u=0;u<n;++u)l[u]=h[u];l.length=n,m+=n}else m+=n*Math.max((Math.sqrt(d)-Math.sqrt(c))/r|0,1);if(s&&(ul(i,t-n,e,n,a,o,h),d=qi(a,o,h[0],h[1]),d<c)){for(c=d,u=0;u<n;++u)l[u]=h[u];l.length=n}return c}function Xd(i,e,t,n,r,s,a,o,l,c,h){h=h||[NaN,NaN];for(let u=0,d=t.length;u<d;++u){const m=t[u];c=yh(i,e,m,n,r,s,a,o,l,c,h),e=m}return c}function Yd(i,e,t,n){for(let r=0,s=t.length;r<s;++r)i[e++]=t[r];return e}function Sh(i,e,t,n){for(let r=0,s=t.length;r<s;++r){const a=t[r];for(let o=0;o<n;++o)i[e++]=a[o]}return e}function qd(i,e,t,n,r){r=r||[];let s=0;for(let a=0,o=t.length;a<o;++a){const l=Sh(i,e,t[a],n);r[s++]=l,e=l}return r.length=s,r}function Kd(i,e,t,n,r,s,a){const o=(t-e)/n;if(o<3){for(;e<t;e+=n)s[a++]=i[e],s[a++]=i[e+1];return a}const l=new Array(o);l[0]=1,l[o-1]=1;const c=[e,t-n];let h=0;for(;c.length>0;){const u=c.pop(),d=c.pop();let m=0;const g=i[d],_=i[d+1],p=i[u],f=i[u+1];for(let y=d+n;y<u;y+=n){const v=i[y],x=i[y+1],A=vd(v,x,g,_,p,f);A>m&&(h=y,m=A)}m>r&&(l[(h-e)/n]=1,d+n<h&&c.push(d,h),h+n<u&&c.push(h,u))}for(let u=0;u<o;++u)l[u]&&(s[a++]=i[e+u*n],s[a++]=i[e+u*n+1]);return a}function mi(i,e){return e*Math.round(i/e)}function Zd(i,e,t,n,r,s,a){if(e==t)return a;let o=mi(i[e],r),l=mi(i[e+1],r);e+=n,s[a++]=o,s[a++]=l;let c,h;do if(c=mi(i[e],r),h=mi(i[e+1],r),e+=n,e==t)return s[a++]=c,s[a++]=h,a;while(c==o&&h==l);for(;e<t;){const u=mi(i[e],r),d=mi(i[e+1],r);if(e+=n,u==c&&d==h)continue;const m=c-o,g=h-l,_=u-o,p=d-l;if(m*p==g*_&&(m<0&&_<m||m==_||m>0&&_>m)&&(g<0&&p<g||g==p||g>0&&p>g)){c=u,h=d;continue}s[a++]=c,s[a++]=h,o=c,l=h,c=u,h=d}return s[a++]=c,s[a++]=h,a}function jd(i,e,t,n,r,s,a,o){for(let l=0,c=t.length;l<c;++l){const h=t[l];a=Zd(i,e,h,n,r,s,a),o.push(a),e=h}return a}function Th(i,e,t,n,r){r=r!==void 0?r:[];let s=0;for(let a=e;a<t;a+=n)r[s++]=i.slice(a,a+n);return r.length=s,r}function $d(i,e,t,n,r){r=r!==void 0?r:[];let s=0;for(let a=0,o=t.length;a<o;++a){const l=t[a];r[s++]=Th(i,e,l,n,r[s]),e=l}return r.length=s,r}function Ah(i,e,t,n){let r=0,s=i[t-n],a=i[t-n+1];for(;e<t;e+=n){const o=i[e],l=i[e+1];r+=a*o-s*l,s=o,a=l}return r/2}function Jd(i,e,t,n){let r=0;for(let s=0,a=t.length;s<a;++s){const o=t[s];r+=Ah(i,e,o,n),e=o}return r}class Rs extends So{constructor(e,t){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}clone(){return new Rs(this.flatCoordinates.slice(),this.layout)}closestPointXY(e,t,n,r){return r<uh(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Mh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),yh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,t,n,r))}getArea(){return Ah(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return Th(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(e){const t=[];return t.length=Kd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t,0),new Rs(t,"XY")}getType(){return"LinearRing"}intersectsExtent(e){return!1}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Sh(this.flatCoordinates,0,e,this.stride),this.changed()}}const dl=Rs;class To extends So{constructor(e,t){super(),this.setCoordinates(e,t)}clone(){const e=new To(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,t,n,r){const s=this.flatCoordinates,a=qi(e,t,s[0],s[1]);if(a<r){const o=this.stride;for(let l=0;l<o;++l)n[l]=s[l];return n.length=o,a}return r}getCoordinates(){return this.flatCoordinates?this.flatCoordinates.slice():[]}computeExtent(e){return ed(this.flatCoordinates,e)}getType(){return"Point"}intersectsExtent(e){return dh(e,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(e,t){this.setLayout(t,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Yd(this.flatCoordinates,0,e,this.stride),this.changed()}}const Qd=To;function ef(i,e,t,n,r){return!ph(r,function(a){return!ii(i,e,t,n,a[0],a[1])})}function ii(i,e,t,n,r,s){let a=0,o=i[t-n],l=i[t-n+1];for(;e<t;e+=n){const c=i[e],h=i[e+1];l<=s?h>s&&(c-o)*(s-l)-(r-o)*(h-l)>0&&a++:h<=s&&(c-o)*(s-l)-(r-o)*(h-l)<0&&a--,o=c,l=h}return a!==0}function Rh(i,e,t,n,r,s){if(t.length===0||!ii(i,e,t[0],n,r,s))return!1;for(let a=1,o=t.length;a<o;++a)if(ii(i,t[a-1],t[a],n,r,s))return!1;return!0}function tf(i,e,t,n,r,s,a){let o,l,c,h,u,d,m;const g=r[s+1],_=[];for(let y=0,v=t.length;y<v;++y){const x=t[y];for(h=i[x-n],d=i[x-n+1],o=e;o<x;o+=n)u=i[o],m=i[o+1],(g<=d&&m<=g||d<=g&&g<=m)&&(c=(g-d)/(m-d)*(u-h)+h,_.push(c)),h=u,d=m}let p=NaN,f=-1/0;for(_.sort(po),h=_[0],o=1,l=_.length;o<l;++o){u=_[o];const y=Math.abs(u-h);y>f&&(c=(h+u)/2,Rh(i,e,t,n,c,g)&&(p=c,f=y)),h=u}return isNaN(p)&&(p=r[s]),a?(a.push(p,g,f),a):[p,g,f]}function nf(i,e,t,n,r){let s;for(e+=n;e<t;e+=n)if(s=r(i.slice(e-n,e),i.slice(e,e+n)),s)return s;return!1}function bh(i,e,t,n,r){const s=fh(di(),i,e,t,n);return Pr(r,s)?Qu(r,s)||s[0]>=r[0]&&s[2]<=r[2]||s[1]>=r[1]&&s[3]<=r[3]?!0:nf(i,e,t,n,function(a,o){return ad(r,a,o)}):!1}function wh(i,e,t,n,r){return!!(bh(i,e,t,n,r)||ii(i,e,t,n,r[0],r[1])||ii(i,e,t,n,r[0],r[3])||ii(i,e,t,n,r[2],r[1])||ii(i,e,t,n,r[2],r[3]))}function rf(i,e,t,n,r){if(!wh(i,e,t[0],n,r))return!1;if(t.length===1)return!0;for(let s=1,a=t.length;s<a;++s)if(ef(i,t[s-1],t[s],n,r)&&!bh(i,t[s-1],t[s],n,r))return!1;return!0}function sf(i,e,t,n){for(;e<t-n;){for(let r=0;r<n;++r){const s=i[e+r];i[e+r]=i[t-n+r],i[t-n+r]=s}e+=n,t-=n}}function Ch(i,e,t,n){let r=0,s=i[t-n],a=i[t-n+1];for(;e<t;e+=n){const o=i[e],l=i[e+1];r+=(o-s)*(l+a),s=o,a=l}return r===0?void 0:r>0}function af(i,e,t,n,r){r=r!==void 0?r:!1;for(let s=0,a=t.length;s<a;++s){const o=t[s],l=Ch(i,e,o,n);if(s===0){if(r&&l||!r&&!l)return!1}else if(r&&!l||!r&&l)return!1;e=o}return!0}function fl(i,e,t,n,r){r=r!==void 0?r:!1;for(let s=0,a=t.length;s<a;++s){const o=t[s],l=Ch(i,e,o,n);(s===0?r&&l||!r&&!l:r&&!l||!r&&l)&&sf(i,e,o,n),e=o}return e}class Rr extends So{constructor(e,t,n){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,t!==void 0&&n?(this.setFlatCoordinates(t,e),this.ends_=n):this.setCoordinates(e,t)}appendLinearRing(e){this.flatCoordinates?Fu(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const e=new Rr(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,t,n,r){return r<uh(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Wd(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Xd(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,t,n,r))}containsXY(e,t){return Rh(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,t)}getArea(){return Jd(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(e){let t;return e!==void 0?(t=this.getOrientedFlatCoordinates().slice(),fl(t,0,this.ends_,this.stride,e)):t=this.flatCoordinates,$d(t,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){const e=Sr(this.getExtent());this.flatInteriorPoint_=tf(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new Qd(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(e){return e<0||this.ends_.length<=e?null:new dl(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLinearRings(){const e=this.layout,t=this.flatCoordinates,n=this.ends_,r=[];let s=0;for(let a=0,o=n.length;a<o;++a){const l=n[a],c=new dl(t.slice(s,l),e);r.push(c),s=l}return r}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const e=this.flatCoordinates;af(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=fl(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){const t=[],n=[];return t.length=jd(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(e),t,0,n),new Rr(t,"XY",n)}getType(){return"Polygon"}intersectsExtent(e){return rf(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||(this.flatCoordinates=[]);const n=qd(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()}}function pl(i){if(Ir(i))throw new Error("Cannot create polygon from empty extent");const e=i[0],t=i[1],n=i[2],r=i[3],s=[e,t,e,r,n,r,n,t,e,t];return new Rr(s,"XY",[s.length])}const zn={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},gi={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};function ml(i){return i[0]>0&&i[1]>0}function of(i,e,t){return t===void 0&&(t=[0,0]),t[0]=i[0]*e+.5|0,t[1]=i[1]*e+.5|0,t}function Nn(i,e){return Array.isArray(i)?i:(e===void 0?e=[i,i]:(e[0]=i,e[1]=i),e)}const lf=/^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,cf=/^([a-z]*)$|^hsla?\(.*\)$/i;function hf(i){return typeof i=="string"?i:pf(i)}function uf(i){const e=document.createElement("div");if(e.style.color=i,e.style.color!==""){document.body.appendChild(e);const t=getComputedStyle(e).color;return document.body.removeChild(e),t}return""}const df=function(){const e={};let t=0;return function(n){let r;if(e.hasOwnProperty(n))r=e[n];else{if(t>=1024){let s=0;for(const a in e)s++&3||(delete e[a],--t)}r=ff(n),e[n]=r,++t}return r}}();function gl(i){return Array.isArray(i)?i:df(i)}function ff(i){let e,t,n,r,s;if(cf.exec(i)&&(i=uf(i)),lf.exec(i)){const a=i.length-1;let o;a<=4?o=1:o=2;const l=a===4||a===8;e=parseInt(i.substr(1+0*o,o),16),t=parseInt(i.substr(1+1*o,o),16),n=parseInt(i.substr(1+2*o,o),16),l?r=parseInt(i.substr(1+3*o,o),16):r=255,o==1&&(e=(e<<4)+e,t=(t<<4)+t,n=(n<<4)+n,l&&(r=(r<<4)+r)),s=[e,t,n,r/255]}else if(i.startsWith("rgba("))s=i.slice(5,-1).split(",").map(Number),_l(s);else if(i.startsWith("rgb("))s=i.slice(4,-1).split(",").map(Number),s.push(1),_l(s);else throw new Error("Invalid color");return s}function _l(i){return i[0]=gt(i[0]+.5|0,0,255),i[1]=gt(i[1]+.5|0,0,255),i[2]=gt(i[2]+.5|0,0,255),i[3]=gt(i[3],0,1),i}function pf(i){let e=i[0];e!=(e|0)&&(e=e+.5|0);let t=i[1];t!=(t|0)&&(t=t+.5|0);let n=i[2];n!=(n|0)&&(n=n+.5|0);const r=i[3]===void 0?1:Math.round(i[3]*100)/100;return"rgba("+e+","+t+","+n+","+r+")"}function er(i,e,t,n){let r;return t&&t.length?r=t.shift():lh?r=new OffscreenCanvas(i||300,e||300):r=document.createElement("canvas"),i&&(r.width=i),e&&(r.height=e),r.getContext("2d",n)}function Ao(i){const e=i.canvas;e.width=1,e.height=1,i.clearRect(0,0,1,1)}function vl(i,e){const t=e.parentNode;t&&t.replaceChild(i,e)}function Wa(i){return i&&i.parentNode?i.parentNode.removeChild(i):null}function mf(i){for(;i.lastChild;)i.removeChild(i.lastChild)}function gf(i,e){const t=i.childNodes;for(let n=0;;++n){const r=t[n],s=e[n];if(!r&&!s)break;if(r!==s){if(!r){i.appendChild(s);continue}if(!s){i.removeChild(r),--n;continue}i.insertBefore(s,r)}}}const Xr="ol-hidden",zs="ol-unselectable",Ro="ol-control",xl="ol-collapsed",_f=new An,Ve={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};class vf extends An{constructor(e){super(),this.on,this.once,this.un,this.background_=e.background;const t=Object.assign({},e);typeof e.properties=="object"&&(delete t.properties,Object.assign(t,e.properties)),t[Ve.OPACITY]=e.opacity!==void 0?e.opacity:1,qe(typeof t[Ve.OPACITY]=="number","Layer opacity must be a number"),t[Ve.VISIBLE]=e.visible!==void 0?e.visible:!0,t[Ve.Z_INDEX]=e.zIndex,t[Ve.MAX_RESOLUTION]=e.maxResolution!==void 0?e.maxResolution:1/0,t[Ve.MIN_RESOLUTION]=e.minResolution!==void 0?e.minResolution:0,t[Ve.MIN_ZOOM]=e.minZoom!==void 0?e.minZoom:-1/0,t[Ve.MAX_ZOOM]=e.maxZoom!==void 0?e.maxZoom:1/0,this.className_=t.className!==void 0?t.className:"ol-layer",delete t.className,this.setProperties(t),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(e){const t=this.state_||{layer:this,managed:e===void 0?!0:e},n=this.getZIndex();return t.opacity=gt(Math.round(this.getOpacity()*100)/100,0,1),t.visible=this.getVisible(),t.extent=this.getExtent(),t.zIndex=n===void 0&&!t.managed?1/0:n,t.maxResolution=this.getMaxResolution(),t.minResolution=Math.max(this.getMinResolution(),0),t.minZoom=this.getMinZoom(),t.maxZoom=this.getMaxZoom(),this.state_=t,t}getLayersArray(e){return Qe()}getLayerStatesArray(e){return Qe()}getExtent(){return this.get(Ve.EXTENT)}getMaxResolution(){return this.get(Ve.MAX_RESOLUTION)}getMinResolution(){return this.get(Ve.MIN_RESOLUTION)}getMinZoom(){return this.get(Ve.MIN_ZOOM)}getMaxZoom(){return this.get(Ve.MAX_ZOOM)}getOpacity(){return this.get(Ve.OPACITY)}getSourceState(){return Qe()}getVisible(){return this.get(Ve.VISIBLE)}getZIndex(){return this.get(Ve.Z_INDEX)}setBackground(e){this.background_=e,this.changed()}setExtent(e){this.set(Ve.EXTENT,e)}setMaxResolution(e){this.set(Ve.MAX_RESOLUTION,e)}setMinResolution(e){this.set(Ve.MIN_RESOLUTION,e)}setMaxZoom(e){this.set(Ve.MAX_ZOOM,e)}setMinZoom(e){this.set(Ve.MIN_ZOOM,e)}setOpacity(e){qe(typeof e=="number","Layer opacity must be a number"),this.set(Ve.OPACITY,e)}setVisible(e){this.set(Ve.VISIBLE,e)}setZIndex(e){this.set(Ve.Z_INDEX,e)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}}const Lh=vf,Bt={ANIMATING:0,INTERACTING:1},Xt={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"},xf=42,bo=256;function El(i,e,t){return function(n,r,s,a,o){if(!n)return;if(!r&&!e)return n;const l=e?0:s[0]*r,c=e?0:s[1]*r,h=o?o[0]:0,u=o?o[1]:0;let d=i[0]+l/2+h,m=i[2]-l/2+h,g=i[1]+c/2+u,_=i[3]-c/2+u;d>m&&(d=(m+d)/2,m=d),g>_&&(g=(_+g)/2,_=g);let p=gt(n[0],d,m),f=gt(n[1],g,_);if(a&&t&&r){const y=30*r;p+=-y*Math.log(1+Math.max(0,d-n[0])/y)+y*Math.log(1+Math.max(0,n[0]-m)/y),f+=-y*Math.log(1+Math.max(0,g-n[1])/y)+y*Math.log(1+Math.max(0,n[1]-_)/y)}return[p,f]}}function Ef(i){return i}function wo(i,e,t,n){const r=mt(e)/t[0],s=ln(e)/t[1];return n?Math.min(i,Math.max(r,s)):Math.min(i,Math.min(r,s))}function Co(i,e,t){let n=Math.min(i,e);const r=50;return n*=Math.log(1+r*Math.max(0,i/e-1))/r+1,t&&(n=Math.max(n,t),n/=Math.log(1+r*Math.max(0,t/i-1))/r+1),gt(n,t/2,e*2)}function Mf(i,e,t,n){return e=e!==void 0?e:!0,function(r,s,a,o){if(r!==void 0){const l=i[0],c=i[i.length-1],h=t?wo(l,t,a,n):l;if(o)return e?Co(r,h,c):gt(r,c,h);const u=Math.min(h,r),d=Math.floor(mo(i,u,s));return i[d]>h&&d<i.length-1?i[d+1]:i[d]}}}function yf(i,e,t,n,r,s){return n=n!==void 0?n:!0,t=t!==void 0?t:0,function(a,o,l,c){if(a!==void 0){const h=r?wo(e,r,l,s):e;if(c)return n?Co(a,h,t):gt(a,t,h);const u=1e-9,d=Math.ceil(Math.log(e/h)/Math.log(i)-u),m=-o*(.5-u)+.5,g=Math.min(h,a),_=Math.floor(Math.log(e/g)/Math.log(i)+m),p=Math.max(d,_),f=e/Math.pow(i,p);return gt(f,t,h)}}}function Ml(i,e,t,n,r){return t=t!==void 0?t:!0,function(s,a,o,l){if(s!==void 0){const c=n?wo(i,n,o,r):i;return!t||!l?gt(s,e,c):Co(s,c,e)}}}function Lo(i){if(i!==void 0)return 0}function yl(i){if(i!==void 0)return i}function Sf(i){const e=2*Math.PI/i;return function(t,n){if(n)return t;if(t!==void 0)return t=Math.floor(t/e+.5)*e,t}}function Tf(i){return i=i||xs(5),function(e,t){if(t)return e;if(e!==void 0)return Math.abs(e)<=i?0:e}}function Ph(i){return Math.pow(i,3)}function ar(i){return 1-Ph(1-i)}function Af(i){return 3*i*i-2*i*i*i}function Rf(i){return i}const js=0;class bf extends An{constructor(e){super(),this.on,this.once,this.un,e=Object.assign({},e),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=Eo(e.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,e.projection&&bd(),e.center&&(e.center=xn(e.center,this.projection_)),e.extent&&(e.extent=Vi(e.extent,this.projection_)),this.applyOptions_(e)}applyOptions_(e){const t=Object.assign({},e);for(const o in Xt)delete t[o];this.setProperties(t,!0);const n=Cf(e);this.maxResolution_=n.maxResolution,this.minResolution_=n.minResolution,this.zoomFactor_=n.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=n.minZoom;const r=wf(e),s=n.constraint,a=Lf(e);this.constraints_={center:r,resolution:s,rotation:a},this.setRotation(e.rotation!==void 0?e.rotation:0),this.setCenterInternal(e.center!==void 0?e.center:null),e.resolution!==void 0?this.setResolution(e.resolution):e.zoom!==void 0&&this.setZoom(e.zoom)}get padding(){return this.padding_}set padding(e){let t=this.padding_;this.padding_=e;const n=this.getCenterInternal();if(n){const r=e||[0,0,0,0];t=t||[0,0,0,0];const s=this.getResolution(),a=s/2*(r[3]-t[3]+t[1]-r[1]),o=s/2*(r[0]-t[0]+t[2]-r[2]);this.setCenterInternal([n[0]+a,n[1]-o])}}getUpdatedOptions_(e){const t=this.getProperties();return t.resolution!==void 0?t.resolution=this.getResolution():t.zoom=this.getZoom(),t.center=this.getCenterInternal(),t.rotation=this.getRotation(),Object.assign({},t,e)}animate(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);const t=new Array(arguments.length);for(let n=0;n<t.length;++n){let r=arguments[n];r.center&&(r=Object.assign({},r),r.center=xn(r.center,this.getProjection())),r.anchor&&(r=Object.assign({},r),r.anchor=xn(r.anchor,this.getProjection())),t[n]=r}this.animateInternal.apply(this,t)}animateInternal(e){let t=arguments.length,n;t>1&&typeof arguments[t-1]=="function"&&(n=arguments[t-1],--t);let r=0;for(;r<t&&!this.isDef();++r){const h=arguments[r];h.center&&this.setCenterInternal(h.center),h.zoom!==void 0?this.setZoom(h.zoom):h.resolution&&this.setResolution(h.resolution),h.rotation!==void 0&&this.setRotation(h.rotation)}if(r===t){n&&Yr(n,!0);return}let s=Date.now(),a=this.targetCenter_.slice(),o=this.targetResolution_,l=this.targetRotation_;const c=[];for(;r<t;++r){const h=arguments[r],u={start:s,complete:!1,anchor:h.anchor,duration:h.duration!==void 0?h.duration:1e3,easing:h.easing||Af,callback:n};if(h.center&&(u.sourceCenter=a,u.targetCenter=h.center.slice(),a=u.targetCenter),h.zoom!==void 0?(u.sourceResolution=o,u.targetResolution=this.getResolutionForZoom(h.zoom),o=u.targetResolution):h.resolution&&(u.sourceResolution=o,u.targetResolution=h.resolution,o=u.targetResolution),h.rotation!==void 0){u.sourceRotation=l;const d=Ki(h.rotation-l+Math.PI,2*Math.PI)-Math.PI;u.targetRotation=l+d,l=u.targetRotation}Pf(u)?u.complete=!0:s+=u.duration,c.push(u)}this.animations_.push(c),this.setHint(Bt.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[Bt.ANIMATING]>0}getInteracting(){return this.hints_[Bt.INTERACTING]>0}cancelAnimations(){this.setHint(Bt.ANIMATING,-this.hints_[Bt.ANIMATING]);let e;for(let t=0,n=this.animations_.length;t<n;++t){const r=this.animations_[t];if(r[0].callback&&Yr(r[0].callback,!1),!e)for(let s=0,a=r.length;s<a;++s){const o=r[s];if(!o.complete){e=o.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;const e=Date.now();let t=!1;for(let n=this.animations_.length-1;n>=0;--n){const r=this.animations_[n];let s=!0;for(let a=0,o=r.length;a<o;++a){const l=r[a];if(l.complete)continue;const c=e-l.start;let h=l.duration>0?c/l.duration:1;h>=1?(l.complete=!0,h=1):s=!1;const u=l.easing(h);if(l.sourceCenter){const d=l.sourceCenter[0],m=l.sourceCenter[1],g=l.targetCenter[0],_=l.targetCenter[1];this.nextCenter_=l.targetCenter;const p=d+u*(g-d),f=m+u*(_-m);this.targetCenter_=[p,f]}if(l.sourceResolution&&l.targetResolution){const d=u===1?l.targetResolution:l.sourceResolution+u*(l.targetResolution-l.sourceResolution);if(l.anchor){const m=this.getViewportSize_(this.getRotation()),g=this.constraints_.resolution(d,0,m,!0);this.targetCenter_=this.calculateCenterZoom(g,l.anchor)}this.nextResolution_=l.targetResolution,this.targetResolution_=d,this.applyTargetState_(!0)}if(l.sourceRotation!==void 0&&l.targetRotation!==void 0){const d=u===1?Ki(l.targetRotation+Math.PI,2*Math.PI)-Math.PI:l.sourceRotation+u*(l.targetRotation-l.sourceRotation);if(l.anchor){const m=this.constraints_.rotation(d,!0);this.targetCenter_=this.calculateCenterRotate(m,l.anchor)}this.nextRotation_=l.targetRotation,this.targetRotation_=d}if(this.applyTargetState_(!0),t=!0,!l.complete)break}if(s){this.animations_[n]=null,this.setHint(Bt.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;const a=r[0].callback;a&&Yr(a,!0)}}this.animations_=this.animations_.filter(Boolean),t&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(e,t){let n;const r=this.getCenterInternal();return r!==void 0&&(n=[r[0]-t[0],r[1]-t[1]],vo(n,e-this.getRotation()),Md(n,t)),n}calculateCenterZoom(e,t){let n;const r=this.getCenterInternal(),s=this.getResolution();if(r!==void 0&&s!==void 0){const a=t[0]-e*(t[0]-r[0])/s,o=t[1]-e*(t[1]-r[1])/s;n=[a,o]}return n}getViewportSize_(e){const t=this.viewportSize_;if(e){const n=t[0],r=t[1];return[Math.abs(n*Math.cos(e))+Math.abs(r*Math.sin(e)),Math.abs(n*Math.sin(e))+Math.abs(r*Math.cos(e))]}return t}setViewportSize(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){const e=this.getCenterInternal();return e&&ka(e,this.getProjection())}getCenterInternal(){return this.get(Xt.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(e){return e!==void 0?(e[0]=this.hints_[0],e[1]=this.hints_[1],e):this.hints_.slice()}calculateExtent(e){const t=this.calculateExtentInternal(e);return Ud(t,this.getProjection())}calculateExtentInternal(e){e=e||this.getViewportSizeMinusPadding_();const t=this.getCenterInternal();qe(t,"The view center is not defined");const n=this.getResolution();qe(n!==void 0,"The view resolution is not defined");const r=this.getRotation();return qe(r!==void 0,"The view rotation is not defined"),Ga(t,n,r,e)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))}setConstrainResolution(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))}getProjection(){return this.projection_}getResolution(){return this.get(Xt.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(e,t){return this.getResolutionForExtentInternal(Vi(e,this.getProjection()),t)}getResolutionForExtentInternal(e,t){t=t||this.getViewportSizeMinusPadding_();const n=mt(e)/t[0],r=ln(e)/t[1];return Math.max(n,r)}getResolutionForValueFunction(e){e=e||2;const t=this.getConstrainedResolution(this.maxResolution_),n=this.minResolution_,r=Math.log(t/n)/Math.log(e);return function(s){return t/Math.pow(e,s*r)}}getRotation(){return this.get(Xt.ROTATION)}getValueForResolutionFunction(e){const t=Math.log(e||2),n=this.getConstrainedResolution(this.maxResolution_),r=this.minResolution_,s=Math.log(n/r)/t;return function(a){return Math.log(n/a)/t/s}}getViewportSizeMinusPadding_(e){let t=this.getViewportSize_(e);const n=this.padding_;return n&&(t=[t[0]-n[1]-n[3],t[1]-n[0]-n[2]]),t}getState(){const e=this.getProjection(),t=this.getResolution(),n=this.getRotation();let r=this.getCenterInternal();const s=this.padding_;if(s){const a=this.getViewportSizeMinusPadding_();r=$s(r,this.getViewportSize_(),[a[0]/2+s[3],a[1]/2+s[0]],t,n)}return{center:r.slice(0),projection:e!==void 0?e:null,resolution:t,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:n,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let e;const t=this.getResolution();return t!==void 0&&(e=this.getZoomForResolution(t)),e}getZoomForResolution(e){let t=this.minZoom_||0,n,r;if(this.resolutions_){const s=mo(this.resolutions_,e,1);t=s,n=this.resolutions_[s],s==this.resolutions_.length-1?r=2:r=n/this.resolutions_[s+1]}else n=this.maxResolution_,r=this.zoomFactor_;return t+Math.log(n/e)/Math.log(r)}getResolutionForZoom(e){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;const t=gt(Math.floor(e),0,this.resolutions_.length-2),n=this.resolutions_[t]/this.resolutions_[t+1];return this.resolutions_[t]/Math.pow(n,gt(e-t,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,e-this.minZoom_)}fit(e,t){let n;if(qe(Array.isArray(e)||typeof e.getSimplifiedGeometry=="function","Invalid extent or geometry provided as `geometry`"),Array.isArray(e)){qe(!Ir(e),"Cannot fit empty extent provided as `geometry`");const r=Vi(e,this.getProjection());n=pl(r)}else if(e.getType()==="Circle"){const r=Vi(e.getExtent(),this.getProjection());n=pl(r),n.rotate(this.getRotation(),Sr(r))}else{const r=Id();r?n=e.clone().transform(r,this.getProjection()):n=e}this.fitInternal(n,t)}rotatedExtentForGeometry(e){const t=this.getRotation(),n=Math.cos(t),r=Math.sin(-t),s=e.getFlatCoordinates(),a=e.getStride();let o=1/0,l=1/0,c=-1/0,h=-1/0;for(let u=0,d=s.length;u<d;u+=a){const m=s[u]*n-s[u+1]*r,g=s[u]*r+s[u+1]*n;o=Math.min(o,m),l=Math.min(l,g),c=Math.max(c,m),h=Math.max(h,g)}return[o,l,c,h]}fitInternal(e,t){t=t||{};let n=t.size;n||(n=this.getViewportSizeMinusPadding_());const r=t.padding!==void 0?t.padding:[0,0,0,0],s=t.nearest!==void 0?t.nearest:!1;let a;t.minResolution!==void 0?a=t.minResolution:t.maxZoom!==void 0?a=this.getResolutionForZoom(t.maxZoom):a=0;const o=this.rotatedExtentForGeometry(e);let l=this.getResolutionForExtentInternal(o,[n[0]-r[1]-r[3],n[1]-r[0]-r[2]]);l=isNaN(l)?a:Math.max(l,a),l=this.getConstrainedResolution(l,s?0:1);const c=this.getRotation(),h=Math.sin(c),u=Math.cos(c),d=Sr(o);d[0]+=(r[1]-r[3])/2*l,d[1]+=(r[0]-r[2])/2*l;const m=d[0]*u-d[1]*h,g=d[1]*u+d[0]*h,_=this.getConstrainedCenter([m,g],l),p=t.callback?t.callback:ys;t.duration!==void 0?this.animateInternal({resolution:l,center:_,duration:t.duration,easing:t.easing},p):(this.targetResolution_=l,this.targetCenter_=_,this.applyTargetState_(!1,!0),Yr(p,!0))}centerOn(e,t,n){this.centerOnInternal(xn(e,this.getProjection()),t,n)}centerOnInternal(e,t,n){this.setCenterInternal($s(e,t,n,this.getResolution(),this.getRotation()))}calculateCenterShift(e,t,n,r){let s;const a=this.padding_;if(a&&e){const o=this.getViewportSizeMinusPadding_(-n),l=$s(e,r,[o[0]/2+a[3],o[1]/2+a[0]],t,n);s=[e[0]-l[0],e[1]-l[1]]}return s}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(e){const t=ka(this.targetCenter_,this.getProjection());this.setCenter([t[0]+e[0],t[1]+e[1]])}adjustCenterInternal(e){const t=this.targetCenter_;this.setCenterInternal([t[0]+e[0],t[1]+e[1]])}adjustResolution(e,t){t=t&&xn(t,this.getProjection()),this.adjustResolutionInternal(e,t)}adjustResolutionInternal(e,t){const n=this.getAnimating()||this.getInteracting(),r=this.getViewportSize_(this.getRotation()),s=this.constraints_.resolution(this.targetResolution_*e,0,r,n);t&&(this.targetCenter_=this.calculateCenterZoom(s,t)),this.targetResolution_*=e,this.applyTargetState_()}adjustZoom(e,t){this.adjustResolution(Math.pow(this.zoomFactor_,-e),t)}adjustRotation(e,t){t&&(t=xn(t,this.getProjection())),this.adjustRotationInternal(e,t)}adjustRotationInternal(e,t){const n=this.getAnimating()||this.getInteracting(),r=this.constraints_.rotation(this.targetRotation_+e,n);t&&(this.targetCenter_=this.calculateCenterRotate(r,t)),this.targetRotation_+=e,this.applyTargetState_()}setCenter(e){this.setCenterInternal(e&&xn(e,this.getProjection()))}setCenterInternal(e){this.targetCenter_=e,this.applyTargetState_()}setHint(e,t){return this.hints_[e]+=t,this.changed(),this.hints_[e]}setResolution(e){this.targetResolution_=e,this.applyTargetState_()}setRotation(e){this.targetRotation_=e,this.applyTargetState_()}setZoom(e){this.setResolution(this.getResolutionForZoom(e))}applyTargetState_(e,t){const n=this.getAnimating()||this.getInteracting()||t,r=this.constraints_.rotation(this.targetRotation_,n),s=this.getViewportSize_(r),a=this.constraints_.resolution(this.targetResolution_,0,s,n),o=this.constraints_.center(this.targetCenter_,a,s,n,this.calculateCenterShift(this.targetCenter_,a,r,s));this.get(Xt.ROTATION)!==r&&this.set(Xt.ROTATION,r),this.get(Xt.RESOLUTION)!==a&&(this.set(Xt.RESOLUTION,a),this.set("zoom",this.getZoom(),!0)),(!o||!this.get(Xt.CENTER)||!As(this.get(Xt.CENTER),o))&&this.set(Xt.CENTER,o),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(e,t,n){e=e!==void 0?e:200;const r=t||0,s=this.constraints_.rotation(this.targetRotation_),a=this.getViewportSize_(s),o=this.constraints_.resolution(this.targetResolution_,r,a),l=this.constraints_.center(this.targetCenter_,o,a,!1,this.calculateCenterShift(this.targetCenter_,o,s,a));if(e===0&&!this.cancelAnchor_){this.targetResolution_=o,this.targetRotation_=s,this.targetCenter_=l,this.applyTargetState_();return}n=n||(e===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==o||this.getRotation()!==s||!this.getCenterInternal()||!As(this.getCenterInternal(),l))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:s,center:l,resolution:o,duration:e,easing:ar,anchor:n}))}beginInteraction(){this.resolveConstraints(0),this.setHint(Bt.INTERACTING,1)}endInteraction(e,t,n){n=n&&xn(n,this.getProjection()),this.endInteractionInternal(e,t,n)}endInteractionInternal(e,t,n){this.getInteracting()&&(this.setHint(Bt.INTERACTING,-1),this.resolveConstraints(e,t,n))}getConstrainedCenter(e,t){const n=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,t||this.getResolution(),n)}getConstrainedZoom(e,t){const n=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(n,t))}getConstrainedResolution(e,t){t=t||0;const n=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,t,n)}}function Yr(i,e){setTimeout(function(){i(e)},0)}function wf(i){if(i.extent!==void 0){const t=i.smoothExtentConstraint!==void 0?i.smoothExtentConstraint:!0;return El(i.extent,i.constrainOnlyCenter,t)}const e=Eo(i.projection,"EPSG:3857");if(i.multiWorld!==!0&&e.isGlobal()){const t=e.getExtent().slice();return t[0]=-1/0,t[2]=1/0,El(t,!1,!1)}return Ef}function Cf(i){let e,t,n,a=i.minZoom!==void 0?i.minZoom:js,o=i.maxZoom!==void 0?i.maxZoom:28;const l=i.zoomFactor!==void 0?i.zoomFactor:2,c=i.multiWorld!==void 0?i.multiWorld:!1,h=i.smoothResolutionConstraint!==void 0?i.smoothResolutionConstraint:!0,u=i.showFullExtent!==void 0?i.showFullExtent:!1,d=Eo(i.projection,"EPSG:3857"),m=d.getExtent();let g=i.constrainOnlyCenter,_=i.extent;if(!c&&!_&&d.isGlobal()&&(g=!1,_=m),i.resolutions!==void 0){const p=i.resolutions;t=p[a],n=p[o]!==void 0?p[o]:p[p.length-1],i.constrainResolution?e=Mf(p,h,!g&&_,u):e=Ml(t,n,h,!g&&_,u)}else{const f=(m?Math.max(mt(m),ln(m)):360*Tr.degrees/d.getMetersPerUnit())/bo/Math.pow(2,js),y=f/Math.pow(2,28-js);t=i.maxResolution,t!==void 0?a=0:t=f/Math.pow(l,a),n=i.minResolution,n===void 0&&(i.maxZoom!==void 0?i.maxResolution!==void 0?n=t/Math.pow(l,o):n=f/Math.pow(l,o):n=y),o=a+Math.floor(Math.log(t/n)/Math.log(l)),n=t/Math.pow(l,o-a),i.constrainResolution?e=yf(l,t,n,h,!g&&_,u):e=Ml(t,n,h,!g&&_,u)}return{constraint:e,maxResolution:t,minResolution:n,minZoom:a,zoomFactor:l}}function Lf(i){if(i.enableRotation!==void 0?i.enableRotation:!0){const t=i.constrainRotation;return t===void 0||t===!0?Tf():t===!1?yl:typeof t=="number"?Sf(t):yl}return Lo}function Pf(i){return!(i.sourceCenter&&i.targetCenter&&!As(i.sourceCenter,i.targetCenter)||i.sourceResolution!==i.targetResolution||i.sourceRotation!==i.targetRotation)}function $s(i,e,t,n,r){const s=Math.cos(-r);let a=Math.sin(-r),o=i[0]*s-i[1]*a,l=i[1]*s+i[0]*a;o+=(e[0]/2-t[0])*n,l+=(t[1]-e[1]/2)*n,a=-a;const c=o*s-l*a,h=l*s+o*a;return[c,h]}const an=bf;class If extends Lh{constructor(e){const t=Object.assign({},e);delete t.source,super(t),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,e.render&&(this.render=e.render),e.map&&this.setMap(e.map),this.addChangeListener(Ve.SOURCE,this.handleSourcePropertyChange_);const n=e.source?e.source:null;this.setSource(n)}getLayersArray(e){return e=e||[],e.push(this),e}getLayerStatesArray(e){return e=e||[],e.push(this.getLayerState()),e}getSource(){return this.get(Ve.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){const e=this.getSource();return e?e.getState():"undefined"}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!=="ready")&&(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&(nt(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;const e=this.getSource();e&&(this.sourceChangeKey_=ke(e,Oe.CHANGE,this.handleSourceChange_,this),e.getState()==="ready"&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(e){return this.renderer_?this.renderer_.getFeatures(e):Promise.resolve([])}getData(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)}isVisible(e){let t;const n=this.getMapInternal();!e&&n&&(e=n.getView()),e instanceof an?t={viewState:e.getState(),extent:e.calculateExtent()}:t=e,!t.layerStatesArray&&n&&(t.layerStatesArray=n.getLayerGroup().getLayerStatesArray());let r;t.layerStatesArray?r=t.layerStatesArray.find(a=>a.layer===this):r=this.getLayerState();const s=this.getExtent();return Po(r,t.viewState)&&(!s||Pr(s,t.extent))}getAttributions(e){if(!this.isVisible(e))return[];let t;const n=this.getSource();if(n&&(t=n.getAttributions()),!t)return[];const r=e instanceof an?e.getViewStateAndExtent():e;let s=t(r);return Array.isArray(s)||(s=[s]),s}render(e,t){const n=this.getRenderer();return n.prepareFrame(e)?(this.rendered=!0,n.renderFrame(e,t)):null}unrender(){this.rendered=!1}setMapInternal(e){e||this.unrender(),this.set(Ve.MAP,e)}getMapInternal(){return this.get(Ve.MAP)}setMap(e){this.mapPrecomposeKey_&&(nt(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),e||this.changed(),this.mapRenderKey_&&(nt(this.mapRenderKey_),this.mapRenderKey_=null),e&&(this.mapPrecomposeKey_=ke(e,zn.PRECOMPOSE,function(t){const r=t.frameState.layerStatesArray,s=this.getLayerState(!1);qe(!r.some(function(a){return a.layer===s.layer}),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),r.push(s)},this),this.mapRenderKey_=ke(this,Oe.CHANGE,e.render,e),this.changed())}setSource(e){this.set(Ve.SOURCE,e)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}disposeInternal(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),super.disposeInternal()}}function Po(i,e){if(!i.visible)return!1;const t=e.resolution;if(t<i.minResolution||t>=i.maxResolution)return!1;const n=e.zoom;return n>i.minZoom&&n<=i.maxZoom}const Io=If;function Df(i,e,t){const n=i;let r=!0,s=!1,a=!1;const o=[Ss(n,Oe.LOAD,function(){a=!0,s||e()})];return n.src&&Ku?(s=!0,n.decode().then(function(){r&&e()}).catch(function(l){r&&(a?e():t())})):o.push(Ss(n,Oe.ERROR,t)),function(){r=!1,o.forEach(nt)}}class Uf{constructor(){this.cache_={},this.cacheSize_=0,this.maxCacheSize_=32}clear(){this.cache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let e=0;for(const t in this.cache_){const n=this.cache_[t];!(e++&3)&&!n.hasListener()&&(delete this.cache_[t],--this.cacheSize_)}}}get(e,t,n){const r=Sl(e,t,n);return r in this.cache_?this.cache_[r]:null}set(e,t,n,r){const s=Sl(e,t,n);this.cache_[s]=r,++this.cacheSize_}setSize(e){this.maxCacheSize_=e,this.expire()}}function Sl(i,e,t){const n=t?hf(t):"null";return e+":"+i+":"+n}const Ih=new Uf;class Nf extends sh{constructor(e){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=e,this.declutterExecutorGroup=null}getFeatures(e){return Qe()}getData(e){return null}prepareFrame(e){return Qe()}renderFrame(e,t){return Qe()}loadedTileCallback(e,t,n){e[t]||(e[t]={}),e[t][n.tileCoord.toString()]=n}createLoadedTileFinder(e,t,n){return(r,s)=>{const a=this.loadedTileCallback.bind(this,n,r);return e.forEachLoadedTile(t,r,s,a)}}forEachFeatureAtCoordinate(e,t,n,r,s){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(e){const t=e.target;(t.getState()===gi.LOADED||t.getState()===gi.ERROR)&&this.renderIfReadyAndVisible()}loadImage(e){let t=e.getState();return t!=gi.LOADED&&t!=gi.ERROR&&e.addEventListener(Oe.CHANGE,this.boundHandleImageChange_),t==gi.IDLE&&(e.load(),t=e.getState()),t==gi.LOADED}renderIfReadyAndVisible(){const e=this.getLayer();e&&e.getVisible()&&e.getSourceState()==="ready"&&e.changed()}disposeInternal(){delete this.layer_,super.disposeInternal()}}const Ff=Nf;class Of extends Wn{constructor(e,t,n,r){super(e),this.inversePixelTransform=t,this.frameState=n,this.context=r}}const Dh=Of;let zi=null;function zf(){zi=er(1,1,void 0,{willReadFrequently:!0})}class Gf extends Ff{constructor(e){super(e),this.container=null,this.renderedResolution,this.tempTransform=Xi(),this.pixelTransform=Xi(),this.inversePixelTransform=Xi(),this.context=null,this.containerReused=!1,this.pixelContext_=null,this.frameState=null}getImageData(e,t,n){zi||zf(),zi.clearRect(0,0,1,1);let r;try{zi.drawImage(e,t,n,1,1,0,0,1,1),r=zi.getImageData(0,0,1,1).data}catch{return zi=null,null}return r}getBackground(e){let n=this.getLayer().getBackground();return typeof n=="function"&&(n=n(e.viewState.resolution)),n||void 0}useContainer(e,t,n){const r=this.getLayer().getClassName();let s,a;if(e&&e.className===r&&(!n||e&&e.style.backgroundColor&&Ps(gl(e.style.backgroundColor),gl(n)))){const o=e.firstElementChild;o instanceof HTMLCanvasElement&&(a=o.getContext("2d"))}if(a&&a.canvas.style.transform===t?(this.container=e,this.context=a,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){s=document.createElement("div"),s.className=r;let o=s.style;o.position="absolute",o.width="100%",o.height="100%",a=er();const l=a.canvas;s.appendChild(l),o=l.style,o.position="absolute",o.left="0",o.transformOrigin="top left",this.container=s,this.context=a}!this.containerReused&&n&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=n)}clipUnrotated(e,t,n){const r=fi(n),s=Os(n),a=Fs(n),o=Ns(n);Gt(t.coordinateToPixelTransform,r),Gt(t.coordinateToPixelTransform,s),Gt(t.coordinateToPixelTransform,a),Gt(t.coordinateToPixelTransform,o);const l=this.inversePixelTransform;Gt(l,r),Gt(l,s),Gt(l,a),Gt(l,o),e.save(),e.beginPath(),e.moveTo(Math.round(r[0]),Math.round(r[1])),e.lineTo(Math.round(s[0]),Math.round(s[1])),e.lineTo(Math.round(a[0]),Math.round(a[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.clip()}dispatchRenderEvent_(e,t,n){const r=this.getLayer();if(r.hasListener(e)){const s=new Dh(e,this.inversePixelTransform,n,t);r.dispatchEvent(s)}}preRender(e,t){this.frameState=t,this.dispatchRenderEvent_(zn.PRERENDER,e,t)}postRender(e,t){this.dispatchRenderEvent_(zn.POSTRENDER,e,t)}getRenderTransform(e,t,n,r,s,a,o){const l=s/2,c=a/2,h=r/t,u=-h,d=-e[0]+o,m=-e[1];return yr(this.tempTransform,l,c,h,u,-n,d,m)}disposeInternal(){delete this.frameState,super.disposeInternal()}}const Bf=Gf;let Hf=class extends An{constructor(e){super(),this.projection=Wt(e.projection),this.attributions_=Tl(e.attributions),this.attributionsCollapsible_=e.attributionsCollapsible!==void 0?e.attributionsCollapsible:!0,this.loading=!1,this.state_=e.state!==void 0?e.state:"ready",this.wrapX_=e.wrapX!==void 0?e.wrapX:!1,this.interpolate_=!!e.interpolate,this.viewResolver=null,this.viewRejector=null;const t=this;this.viewPromise_=new Promise(function(n,r){t.viewResolver=n,t.viewRejector=r})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(e){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(e){this.attributions_=Tl(e),this.changed()}setState(e){this.state_=e,this.changed()}};function Tl(i){return i?Array.isArray(i)?function(e){return i}:typeof i=="function"?i:function(e){return[i]}:null}const Vf=Hf,_e={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};class kf extends go{constructor(e,t,n){super(),n=n||{},this.tileCoord=e,this.state=t,this.interimTile=null,this.key="",this.transition_=n.transition===void 0?250:n.transition,this.transitionStarts_={},this.interpolate=!!n.interpolate}changed(){this.dispatchEvent(Oe.CHANGE)}release(){this.state===_e.ERROR&&this.setState(_e.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getInterimTile(){if(!this.interimTile)return this;let e=this.interimTile;do{if(e.getState()==_e.LOADED)return this.transition_=0,e;e=e.interimTile}while(e);return this}refreshInterimChain(){if(!this.interimTile)return;let e=this.interimTile,t=this;do{if(e.getState()==_e.LOADED){e.interimTile=null;break}else e.getState()==_e.LOADING?t=e:e.getState()==_e.IDLE?t.interimTile=e.interimTile:t=e;e=t.interimTile}while(e)}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(e){if(this.state!==_e.ERROR&&this.state>e)throw new Error("Tile load sequence violation");this.state=e,this.changed()}load(){Qe()}getAlpha(e,t){if(!this.transition_)return 1;let n=this.transitionStarts_[e];if(!n)n=t,this.transitionStarts_[e]=n;else if(n===-1)return 1;const r=t-n+1e3/60;return r>=this.transition_?1:Ph(r/this.transition_)}inTransition(e){return this.transition_?this.transitionStarts_[e]!==-1:!1}endTransition(e){this.transition_&&(this.transitionStarts_[e]=-1)}}const Uh=kf;class Wf extends Uh{constructor(e,t,n,r,s,a){super(e,t,a),this.crossOrigin_=r,this.src_=n,this.key=n,this.image_=new Image,r!==null&&(this.image_.crossOrigin=r),this.unlisten_=null,this.tileLoadFunction_=s}getImage(){return this.image_}setImage(e){this.image_=e,this.state=_e.LOADED,this.unlistenImage_(),this.changed()}handleImageError_(){this.state=_e.ERROR,this.unlistenImage_(),this.image_=Xf(),this.changed()}handleImageLoad_(){const e=this.image_;e.naturalWidth&&e.naturalHeight?this.state=_e.LOADED:this.state=_e.EMPTY,this.unlistenImage_(),this.changed()}load(){this.state==_e.ERROR&&(this.state=_e.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==_e.IDLE&&(this.state=_e.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=Df(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}}function Xf(){const i=er(1,1);return i.fillStyle="rgba(0,0,0,0)",i.fillRect(0,0,1,1),i.canvas}const Nh=Wf;class Yf{constructor(e,t,n){this.decay_=e,this.minVelocity_=t,this.delay_=n,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(e,t){this.points_.push(e,t,Date.now())}end(){if(this.points_.length<6)return!1;const e=Date.now()-this.delay_,t=this.points_.length-3;if(this.points_[t+2]<e)return!1;let n=t-3;for(;n>0&&this.points_[n+2]>e;)n-=3;const r=this.points_[t+2]-this.points_[n+2];if(r<1e3/60)return!1;const s=this.points_[t]-this.points_[n],a=this.points_[t+1]-this.points_[n+1];return this.angle_=Math.atan2(a,s),this.initialVelocity_=Math.sqrt(s*s+a*a)/r,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}}const qf=Yf;class Kf extends fo{constructor(e){super(),this.map_=e}dispatchRenderEvent(e,t){Qe()}calculateMatrices2D(e){const t=e.viewState,n=e.coordinateToPixelTransform,r=e.pixelToCoordinateTransform;yr(n,e.size[0]/2,e.size[1]/2,1/t.resolution,-1/t.resolution,-t.rotation,-t.center[0],-t.center[1]),hh(r,n)}forEachFeatureAtCoordinate(e,t,n,r,s,a,o,l){let c;const h=t.viewState;function u(x,A,w,b){return s.call(a,A,x?w:null,b)}const d=h.projection,m=Sd(e.slice(),d),g=[[0,0]];if(d.canWrapX()&&r){const x=d.getExtent(),A=mt(x);g.push([-A,0],[A,0])}const _=t.layerStatesArray,p=_.length,f=[],y=[];for(let x=0;x<g.length;x++)for(let A=p-1;A>=0;--A){const w=_[A],b=w.layer;if(b.hasRenderer()&&Po(w,h)&&o.call(l,b)){const U=b.getRenderer(),M=b.getSource();if(U&&M){const R=M.getWrapX()?m:e,Z=u.bind(null,w.managed);y[0]=R[0]+g[x][0],y[1]=R[1]+g[x][1],c=U.forEachFeatureAtCoordinate(y,t,n,Z,f)}if(c)return c}}if(f.length===0)return;const v=1/f.length;return f.forEach((x,A)=>x.distanceSq+=A*v),f.sort((x,A)=>x.distanceSq-A.distanceSq),f.some(x=>c=x.callback(x.feature,x.layer,x.geometry)),c}hasFeatureAtCoordinate(e,t,n,r,s,a){return this.forEachFeatureAtCoordinate(e,t,n,r,Ms,this,s,a)!==void 0}getMap(){return this.map_}renderFrame(e){Qe()}flushDeclutterItems(e){}scheduleExpireIconCache(e){Ih.canExpireCache()&&e.postRenderFunctions.push(Zf)}}function Zf(i,e){Ih.expire()}const jf=Kf;class $f extends jf{constructor(e){super(e),this.fontChangeListenerKey_=ke(_f,Mr.PROPERTYCHANGE,e.redrawText.bind(e)),this.element_=document.createElement("div");const t=this.element_.style;t.position="absolute",t.width="100%",t.height="100%",t.zIndex="0",this.element_.className=zs+" ol-layers";const n=e.getViewport();n.insertBefore(this.element_,n.firstChild||null),this.children_=[],this.renderedVisible_=!0,this.declutterLayers_=[]}dispatchRenderEvent(e,t){const n=this.getMap();if(n.hasListener(e)){const r=new Dh(e,void 0,t);n.dispatchEvent(r)}}disposeInternal(){nt(this.fontChangeListenerKey_),this.element_.parentNode.removeChild(this.element_),super.disposeInternal()}renderFrame(e){if(!e){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(e),this.dispatchRenderEvent(zn.PRECOMPOSE,e);const t=e.layerStatesArray.sort(function(a,o){return a.zIndex-o.zIndex}),n=e.viewState;this.children_.length=0;const r=this.declutterLayers_;r.length=0;let s=null;for(let a=0,o=t.length;a<o;++a){const l=t[a];e.layerIndex=a;const c=l.layer,h=c.getSourceState();if(!Po(l,n)||h!="ready"&&h!="undefined"){c.unrender();continue}const u=c.render(e,s);u&&(u!==s&&(this.children_.push(u),s=u),"getDeclutter"in c&&r.push(c))}this.flushDeclutterItems(e),gf(this.element_,this.children_),this.dispatchRenderEvent(zn.POSTCOMPOSE,e),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(e)}flushDeclutterItems(e){const t=this.declutterLayers_;for(let n=t.length-1;n>=0;--n)t[n].renderDeclutter(e);t.length=0}}const Jf=$f;class Un extends Wn{constructor(e,t){super(e),this.layer=t}}const Js={LAYERS:"layers"};class Do extends Lh{constructor(e){e=e||{};const t=Object.assign({},e);delete t.layers;let n=e.layers;super(t),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(Js.LAYERS,this.handleLayersChanged_),n?Array.isArray(n)?n=new Sn(n.slice(),{unique:!0}):qe(typeof n.getArray=="function","Expected `layers` to be an array or a `Collection`"):n=new Sn(void 0,{unique:!0}),this.setLayers(n)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(nt),this.layersListenerKeys_.length=0;const e=this.getLayers();this.layersListenerKeys_.push(ke(e,Ht.ADD,this.handleLayersAdd_,this),ke(e,Ht.REMOVE,this.handleLayersRemove_,this));for(const n in this.listenerKeys_)this.listenerKeys_[n].forEach(nt);Ds(this.listenerKeys_);const t=e.getArray();for(let n=0,r=t.length;n<r;n++){const s=t[n];this.registerLayerListeners_(s),this.dispatchEvent(new Un("addlayer",s))}this.changed()}registerLayerListeners_(e){const t=[ke(e,Mr.PROPERTYCHANGE,this.handleLayerChange_,this),ke(e,Oe.CHANGE,this.handleLayerChange_,this)];e instanceof Do&&t.push(ke(e,"addlayer",this.handleLayerGroupAdd_,this),ke(e,"removelayer",this.handleLayerGroupRemove_,this)),this.listenerKeys_[wt(e)]=t}handleLayerGroupAdd_(e){this.dispatchEvent(new Un("addlayer",e.layer))}handleLayerGroupRemove_(e){this.dispatchEvent(new Un("removelayer",e.layer))}handleLayersAdd_(e){const t=e.element;this.registerLayerListeners_(t),this.dispatchEvent(new Un("addlayer",t)),this.changed()}handleLayersRemove_(e){const t=e.element,n=wt(t);this.listenerKeys_[n].forEach(nt),delete this.listenerKeys_[n],this.dispatchEvent(new Un("removelayer",t)),this.changed()}getLayers(){return this.get(Js.LAYERS)}setLayers(e){const t=this.getLayers();if(t){const n=t.getArray();for(let r=0,s=n.length;r<s;++r)this.dispatchEvent(new Un("removelayer",n[r]))}this.set(Js.LAYERS,e)}getLayersArray(e){return e=e!==void 0?e:[],this.getLayers().forEach(function(t){t.getLayersArray(e)}),e}getLayerStatesArray(e){const t=e!==void 0?e:[],n=t.length;this.getLayers().forEach(function(a){a.getLayerStatesArray(t)});const r=this.getLayerState();let s=r.zIndex;!e&&r.zIndex===void 0&&(s=0);for(let a=n,o=t.length;a<o;a++){const l=t[a];l.opacity*=r.opacity,l.visible=l.visible&&r.visible,l.maxResolution=Math.min(l.maxResolution,r.maxResolution),l.minResolution=Math.max(l.minResolution,r.minResolution),l.minZoom=Math.max(l.minZoom,r.minZoom),l.maxZoom=Math.min(l.maxZoom,r.maxZoom),r.extent!==void 0&&(l.extent!==void 0?l.extent=vr(l.extent,r.extent):l.extent=r.extent),l.zIndex===void 0&&(l.zIndex=s)}return t}getSourceState(){return"ready"}}const Gs=Do;class Qf extends Wn{constructor(e,t,n){super(e),this.map=t,this.frameState=n!==void 0?n:null}}const Gi=Qf;class ep extends Gi{constructor(e,t,n,r,s,a){super(e,t,s),this.originalEvent=n,this.pixel_=null,this.coordinate_=null,this.dragging=r!==void 0?r:!1,this.activePointers=a}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(e){this.pixel_=e}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(e){this.coordinate_=e}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}}const In=ep,Je={SINGLECLICK:"singleclick",CLICK:Oe.CLICK,DBLCLICK:Oe.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"},Xa={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"};class tp extends go{constructor(e,t){super(e),this.map_=e,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=t===void 0?1:t,this.down_=null;const n=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=n,this.pointerdownListenerKey_=ke(n,Xa.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=ke(n,Xa.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(Oe.TOUCHMOVE,this.boundHandleTouchMove_,ch?{passive:!1}:!1)}emulateClick_(e){let t=new In(Je.CLICK,this.map_,e);this.dispatchEvent(t),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,t=new In(Je.DBLCLICK,this.map_,e),this.dispatchEvent(t)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;const n=new In(Je.SINGLECLICK,this.map_,e);this.dispatchEvent(n)},250)}updateActivePointers_(e){const t=e,n=t.pointerId;if(t.type==Je.POINTERUP||t.type==Je.POINTERCANCEL){delete this.trackedTouches_[n];for(const r in this.trackedTouches_)if(this.trackedTouches_[r].target!==t.target){delete this.trackedTouches_[r];break}}else(t.type==Je.POINTERDOWN||t.type==Je.POINTERMOVE)&&(this.trackedTouches_[n]=t);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(e){this.updateActivePointers_(e);const t=new In(Je.POINTERUP,this.map_,e,void 0,void 0,this.activePointers_);this.dispatchEvent(t),this.emulateClicks_&&!t.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(e)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(nt),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(e){return e.button===0}handlePointerDown_(e){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(e);const t=new In(Je.POINTERDOWN,this.map_,e,void 0,void 0,this.activePointers_);if(this.dispatchEvent(t),this.down_=new PointerEvent(e.type,e),Object.defineProperty(this.down_,"target",{writable:!1,value:e.target}),this.dragListenerKeys_.length===0){const n=this.map_.getOwnerDocument();this.dragListenerKeys_.push(ke(n,Je.POINTERMOVE,this.handlePointerMove_,this),ke(n,Je.POINTERUP,this.handlePointerUp_,this),ke(this.element_,Je.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==n&&this.dragListenerKeys_.push(ke(this.element_.getRootNode(),Je.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(e){if(this.isMoving_(e)){this.updateActivePointers_(e),this.dragging_=!0;const t=new In(Je.POINTERDRAG,this.map_,e,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(t)}}relayMoveEvent_(e){this.originalPointerMoveEvent_=e;const t=!!(this.down_&&this.isMoving_(e));this.dispatchEvent(new In(Je.POINTERMOVE,this.map_,e,t))}handleTouchMove_(e){const t=this.originalPointerMoveEvent_;(!t||t.defaultPrevented)&&(typeof e.cancelable!="boolean"||e.cancelable===!0)&&e.preventDefault()}isMoving_(e){return this.dragging_||Math.abs(e.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(e.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(nt(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(Oe.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(nt(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(nt),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}}const np=tp,Dn={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"},yt={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"},bs=1/0;class ip{constructor(e,t){this.priorityFunction_=e,this.keyFunction_=t,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,Ds(this.queuedElements_)}dequeue(){const e=this.elements_,t=this.priorities_,n=e[0];e.length==1?(e.length=0,t.length=0):(e[0]=e.pop(),t[0]=t.pop(),this.siftUp_(0));const r=this.keyFunction_(n);return delete this.queuedElements_[r],n}enqueue(e){qe(!(this.keyFunction_(e)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");const t=this.priorityFunction_(e);return t!=bs?(this.elements_.push(e),this.priorities_.push(t),this.queuedElements_[this.keyFunction_(e)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(e){return e*2+1}getRightChildIndex_(e){return e*2+2}getParentIndex_(e){return e-1>>1}heapify_(){let e;for(e=(this.elements_.length>>1)-1;e>=0;e--)this.siftUp_(e)}isEmpty(){return this.elements_.length===0}isKeyQueued(e){return e in this.queuedElements_}isQueued(e){return this.isKeyQueued(this.keyFunction_(e))}siftUp_(e){const t=this.elements_,n=this.priorities_,r=t.length,s=t[e],a=n[e],o=e;for(;e<r>>1;){const l=this.getLeftChildIndex_(e),c=this.getRightChildIndex_(e),h=c<r&&n[c]<n[l]?c:l;t[e]=t[h],n[e]=n[h],e=h}t[e]=s,n[e]=a,this.siftDown_(o,e)}siftDown_(e,t){const n=this.elements_,r=this.priorities_,s=n[t],a=r[t];for(;t>e;){const o=this.getParentIndex_(t);if(r[o]>a)n[t]=n[o],r[t]=r[o],t=o;else break}n[t]=s,r[t]=a}reprioritize(){const e=this.priorityFunction_,t=this.elements_,n=this.priorities_;let r=0;const s=t.length;let a,o,l;for(o=0;o<s;++o)a=t[o],l=e(a),l==bs?delete this.queuedElements_[this.keyFunction_(a)]:(n[r]=l,t[r++]=a);t.length=r,n.length=r,this.heapify_()}}const rp=ip;class sp extends rp{constructor(e,t){super(function(n){return e.apply(null,n)},function(n){return n[0].getKey()}),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=t,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(e){const t=super.enqueue(e);return t&&e[0].addEventListener(Oe.CHANGE,this.boundHandleTileChange_),t}getTilesLoading(){return this.tilesLoading_}handleTileChange(e){const t=e.target,n=t.getState();if(n===_e.LOADED||n===_e.ERROR||n===_e.EMPTY){n!==_e.ERROR&&t.removeEventListener(Oe.CHANGE,this.boundHandleTileChange_);const r=t.getKey();r in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[r],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(e,t){let n=0,r,s,a;for(;this.tilesLoading_<e&&n<t&&this.getCount()>0;)s=this.dequeue()[0],a=s.getKey(),r=s.getState(),r===_e.IDLE&&!(a in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[a]=!0,++this.tilesLoading_,++n,s.load())}}const ap=sp;function op(i,e,t,n,r){if(!i||!(t in i.wantedTiles)||!i.wantedTiles[t][e.getKey()])return bs;const s=i.viewState.center,a=n[0]-s[0],o=n[1]-s[1];return 65536*Math.log(r)+Math.sqrt(a*a+o*o)/r}class lp extends An{constructor(e){super();const t=e.element;t&&!e.target&&!t.style.pointerEvents&&(t.style.pointerEvents="auto"),this.element=t||null,this.target_=null,this.map_=null,this.listenerKeys=[],e.render&&(this.render=e.render),e.target&&this.setTarget(e.target)}disposeInternal(){Wa(this.element),super.disposeInternal()}getMap(){return this.map_}setMap(e){this.map_&&Wa(this.element);for(let t=0,n=this.listenerKeys.length;t<n;++t)nt(this.listenerKeys[t]);this.listenerKeys.length=0,this.map_=e,e&&((this.target_?this.target_:e.getOverlayContainerStopEvent()).appendChild(this.element),this.render!==ys&&this.listenerKeys.push(ke(e,Dn.POSTRENDER,this.render,this)),e.render())}render(e){}setTarget(e){this.target_=typeof e=="string"?document.getElementById(e):e}}const Uo=lp;class cp extends Uo{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=e.collapsed!==void 0?e.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=e.collapsible!==void 0,this.collapsible_=e.collapsible!==void 0?e.collapsible:!0,this.collapsible_||(this.collapsed_=!1);const t=e.className!==void 0?e.className:"ol-attribution",n=e.tipLabel!==void 0?e.tipLabel:"Attributions",r=e.expandClassName!==void 0?e.expandClassName:t+"-expand",s=e.collapseLabel!==void 0?e.collapseLabel:"›",a=e.collapseClassName!==void 0?e.collapseClassName:t+"-collapse";typeof s=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=s,this.collapseLabel_.className=a):this.collapseLabel_=s;const o=e.label!==void 0?e.label:"i";typeof o=="string"?(this.label_=document.createElement("span"),this.label_.textContent=o,this.label_.className=r):this.label_=o;const l=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=n,this.toggleButton_.appendChild(l),this.toggleButton_.addEventListener(Oe.CLICK,this.handleClick_.bind(this),!1);const c=t+" "+zs+" "+Ro+(this.collapsed_&&this.collapsible_?" "+xl:"")+(this.collapsible_?"":" ol-uncollapsible"),h=this.element;h.className=c,h.appendChild(this.toggleButton_),h.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(e){const t=Array.from(new Set(this.getMap().getAllLayers().flatMap(r=>r.getAttributions(e)))),n=!this.getMap().getAllLayers().some(r=>r.getSource()&&r.getSource().getAttributionsCollapsible()===!1);return this.overrideCollapsible_||this.setCollapsible(n),t}updateElement_(e){if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const t=this.collectSourceAttributions_(e),n=t.length>0;if(this.renderedVisible_!=n&&(this.element.style.display=n?"":"none",this.renderedVisible_=n),!Ps(t,this.renderedAttributions_)){mf(this.ulElement_);for(let r=0,s=t.length;r<s;++r){const a=document.createElement("li");a.innerHTML=t[r],this.ulElement_.appendChild(a)}this.renderedAttributions_=t}}handleClick_(e){e.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(xl),this.collapsed_?vl(this.collapseLabel_,this.label_):vl(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(e){this.userCollapsed_=e,!(!this.collapsible_||this.collapsed_===e)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(e){this.updateElement_(e.frameState)}}const hp=cp;class up extends Uo{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target});const t=e.className!==void 0?e.className:"ol-rotate",n=e.label!==void 0?e.label:"⇧",r=e.compassClassName!==void 0?e.compassClassName:"ol-compass";this.label_=null,typeof n=="string"?(this.label_=document.createElement("span"),this.label_.className=r,this.label_.textContent=n):(this.label_=n,this.label_.classList.add(r));const s=e.tipLabel?e.tipLabel:"Reset rotation",a=document.createElement("button");a.className=t+"-reset",a.setAttribute("type","button"),a.title=s,a.appendChild(this.label_),a.addEventListener(Oe.CLICK,this.handleClick_.bind(this),!1);const o=t+" "+zs+" "+Ro,l=this.element;l.className=o,l.appendChild(a),this.callResetNorth_=e.resetNorth?e.resetNorth:void 0,this.duration_=e.duration!==void 0?e.duration:250,this.autoHide_=e.autoHide!==void 0?e.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(Xr)}handleClick_(e){e.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){const t=this.getMap().getView();if(!t)return;const n=t.getRotation();n!==void 0&&(this.duration_>0&&n%(2*Math.PI)!==0?t.animate({rotation:0,duration:this.duration_,easing:ar}):t.setRotation(0))}render(e){const t=e.frameState;if(!t)return;const n=t.viewState.rotation;if(n!=this.rotation_){const r="rotate("+n+"rad)";if(this.autoHide_){const s=this.element.classList.contains(Xr);!s&&n===0?this.element.classList.add(Xr):s&&n!==0&&this.element.classList.remove(Xr)}this.label_.style.transform=r}this.rotation_=n}}const dp=up;class fp extends Uo{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target});const t=e.className!==void 0?e.className:"ol-zoom",n=e.delta!==void 0?e.delta:1,r=e.zoomInClassName!==void 0?e.zoomInClassName:t+"-in",s=e.zoomOutClassName!==void 0?e.zoomOutClassName:t+"-out",a=e.zoomInLabel!==void 0?e.zoomInLabel:"+",o=e.zoomOutLabel!==void 0?e.zoomOutLabel:"–",l=e.zoomInTipLabel!==void 0?e.zoomInTipLabel:"Zoom in",c=e.zoomOutTipLabel!==void 0?e.zoomOutTipLabel:"Zoom out",h=document.createElement("button");h.className=r,h.setAttribute("type","button"),h.title=l,h.appendChild(typeof a=="string"?document.createTextNode(a):a),h.addEventListener(Oe.CLICK,this.handleClick_.bind(this,n),!1);const u=document.createElement("button");u.className=s,u.setAttribute("type","button"),u.title=c,u.appendChild(typeof o=="string"?document.createTextNode(o):o),u.addEventListener(Oe.CLICK,this.handleClick_.bind(this,-n),!1);const d=t+" "+zs+" "+Ro,m=this.element;m.className=d,m.appendChild(h),m.appendChild(u),this.duration_=e.duration!==void 0?e.duration:250}handleClick_(e,t){t.preventDefault(),this.zoomByDelta_(e)}zoomByDelta_(e){const n=this.getMap().getView();if(!n)return;const r=n.getZoom();if(r!==void 0){const s=n.getConstrainedZoom(r+e);this.duration_>0?(n.getAnimating()&&n.cancelAnimations(),n.animate({zoom:s,duration:this.duration_,easing:ar})):n.setZoom(s)}}}const pp=fp;function mp(i){i=i||{};const e=new Sn;return(i.zoom!==void 0?i.zoom:!0)&&e.push(new pp(i.zoomOptions)),(i.rotate!==void 0?i.rotate:!0)&&e.push(new dp(i.rotateOptions)),(i.attribution!==void 0?i.attribution:!0)&&e.push(new hp(i.attributionOptions)),e}const Al={ACTIVE:"active"};class gp extends An{constructor(e){super(),this.on,this.once,this.un,e&&e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(Al.ACTIVE)}getMap(){return this.map_}handleEvent(e){return!0}setActive(e){this.set(Al.ACTIVE,e)}setMap(e){this.map_=e}}function _p(i,e,t){const n=i.getCenterInternal();if(n){const r=[n[0]+e[0],n[1]+e[1]];i.animateInternal({duration:t!==void 0?t:250,easing:Rf,center:i.getConstrainedCenter(r)})}}function No(i,e,t,n){const r=i.getZoom();if(r===void 0)return;const s=i.getConstrainedZoom(r+e),a=i.getResolutionForZoom(s);i.getAnimating()&&i.cancelAnimations(),i.animate({resolution:a,anchor:t,duration:n!==void 0?n:250,easing:ar})}const Ur=gp;class vp extends Ur{constructor(e){super(),e=e||{},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:250}handleEvent(e){let t=!1;if(e.type==Je.DBLCLICK){const n=e.originalEvent,r=e.map,s=e.coordinate,a=n.shiftKey?-this.delta_:this.delta_,o=r.getView();No(o,a,s,this.duration_),n.preventDefault(),t=!0}return!t}}const xp=vp;class Ep extends Ur{constructor(e){e=e||{},super(e),e.handleDownEvent&&(this.handleDownEvent=e.handleDownEvent),e.handleDragEvent&&(this.handleDragEvent=e.handleDragEvent),e.handleMoveEvent&&(this.handleMoveEvent=e.handleMoveEvent),e.handleUpEvent&&(this.handleUpEvent=e.handleUpEvent),e.stopDown&&(this.stopDown=e.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(e){return!1}handleDragEvent(e){}handleEvent(e){if(!e.originalEvent)return!0;let t=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence){if(e.type==Je.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==Je.POINTERUP){const n=this.handleUpEvent(e);this.handlingDownUpSequence=n&&this.targetPointers.length>0}}else if(e.type==Je.POINTERDOWN){const n=this.handleDownEvent(e);this.handlingDownUpSequence=n,t=this.stopDown(n)}else e.type==Je.POINTERMOVE&&this.handleMoveEvent(e);return!t}handleMoveEvent(e){}handleUpEvent(e){return!1}stopDown(e){return e}updateTrackedPointers_(e){e.activePointers&&(this.targetPointers=e.activePointers)}}function Fo(i){const e=i.length;let t=0,n=0;for(let r=0;r<e;r++)t+=i[r].clientX,n+=i[r].clientY;return{clientX:t/e,clientY:n/e}}const Nr=Ep;function Ya(i){const e=arguments;return function(t){let n=!0;for(let r=0,s=e.length;r<s&&(n=n&&e[r](t),!!n);++r);return n}}const Mp=function(i){const e=i.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},yp=function(i){const e=i.map.getTargetElement(),t=i.map.getOwnerDocument().activeElement;return e.contains(t)},Fh=function(i){return i.map.getTargetElement().hasAttribute("tabindex")?yp(i):!0},Sp=Ms,Oh=function(i){const e=i.originalEvent;return e.button==0&&!(qu&&ah&&e.ctrlKey)},zh=function(i){const e=i.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},Tp=function(i){const e=i.originalEvent;return ah?e.metaKey:e.ctrlKey},Ap=function(i){const e=i.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},Gh=function(i){const e=i.originalEvent,t=e.target.tagName;return t!=="INPUT"&&t!=="SELECT"&&t!=="TEXTAREA"&&!e.target.isContentEditable},Qs=function(i){const e=i.originalEvent;return qe(e!==void 0,"mapBrowserEvent must originate from a pointer event"),e.pointerType=="mouse"},Rp=function(i){const e=i.originalEvent;return qe(e!==void 0,"mapBrowserEvent must originate from a pointer event"),e.isPrimary&&e.button===0};class bp extends Nr{constructor(e){super({stopDown:Is}),e=e||{},this.kinetic_=e.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;const t=e.condition?e.condition:Ya(zh,Rp);this.condition_=e.onFocusOnly?Ya(Fh,t):t,this.noKinetic_=!1}handleDragEvent(e){const t=e.map;this.panning_||(this.panning_=!0,t.getView().beginInteraction());const n=this.targetPointers,r=t.getEventPixel(Fo(n));if(n.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(r[0],r[1]),this.lastCentroid){const s=[this.lastCentroid[0]-r[0],r[1]-this.lastCentroid[1]],o=e.map.getView();yd(s,o.getResolution()),vo(s,o.getRotation()),o.adjustCenterInternal(s)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=r,this.lastPointersCount_=n.length,e.originalEvent.preventDefault()}handleUpEvent(e){const t=e.map,n=t.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){const r=this.kinetic_.getDistance(),s=this.kinetic_.getAngle(),a=n.getCenterInternal(),o=t.getPixelFromCoordinateInternal(a),l=t.getCoordinateFromPixelInternal([o[0]-r*Math.cos(s),o[1]-r*Math.sin(s)]);n.animateInternal({center:n.getConstrainedCenter(l),duration:500,easing:ar})}return this.panning_&&(this.panning_=!1,n.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(e){if(this.targetPointers.length>0&&this.condition_(e)){const n=e.map.getView();return this.lastCentroid=null,n.getAnimating()&&n.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}}const wp=bp;class Cp extends Nr{constructor(e){e=e||{},super({stopDown:Is}),this.condition_=e.condition?e.condition:Mp,this.lastAngle_=void 0,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){if(!Qs(e))return;const t=e.map,n=t.getView();if(n.getConstraints().rotation===Lo)return;const r=t.getSize(),s=e.pixel,a=Math.atan2(r[1]/2-s[1],s[0]-r[0]/2);if(this.lastAngle_!==void 0){const o=a-this.lastAngle_;n.adjustRotationInternal(-o)}this.lastAngle_=a}handleUpEvent(e){return Qs(e)?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){return Qs(e)&&Oh(e)&&this.condition_(e)?(e.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}}const Lp=Cp;class Pp extends fo{constructor(e){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+e,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){const e=this.startPixel_,t=this.endPixel_,n="px",r=this.element_.style;r.left=Math.min(e[0],t[0])+n,r.top=Math.min(e[1],t[1])+n,r.width=Math.abs(t[0]-e[0])+n,r.height=Math.abs(t[1]-e[1])+n}setMap(e){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);const t=this.element_.style;t.left="inherit",t.top="inherit",t.width="inherit",t.height="inherit"}this.map_=e,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(e,t){this.startPixel_=e,this.endPixel_=t,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){const e=this.startPixel_,t=this.endPixel_,r=[e,[e[0],t[1]],t,[t[0],e[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);r[4]=r[0].slice(),this.geometry_?this.geometry_.setCoordinates([r]):this.geometry_=new Rr([r])}getGeometry(){return this.geometry_}}const Ip=Pp,qr={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"};class ea extends Wn{constructor(e,t,n){super(e),this.coordinate=t,this.mapBrowserEvent=n}}class Dp extends Nr{constructor(e){super(),this.on,this.once,this.un,e=e||{},this.box_=new Ip(e.className||"ol-dragbox"),this.minArea_=e.minArea!==void 0?e.minArea:64,e.onBoxEnd&&(this.onBoxEnd=e.onBoxEnd),this.startPixel_=null,this.condition_=e.condition?e.condition:Oh,this.boxEndCondition_=e.boxEndCondition?e.boxEndCondition:this.defaultBoxEndCondition}defaultBoxEndCondition(e,t,n){const r=n[0]-t[0],s=n[1]-t[1];return r*r+s*s>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(e){this.box_.setPixels(this.startPixel_,e.pixel),this.dispatchEvent(new ea(qr.BOXDRAG,e.coordinate,e))}handleUpEvent(e){this.box_.setMap(null);const t=this.boxEndCondition_(e,this.startPixel_,e.pixel);return t&&this.onBoxEnd(e),this.dispatchEvent(new ea(t?qr.BOXEND:qr.BOXCANCEL,e.coordinate,e)),!1}handleDownEvent(e){return this.condition_(e)?(this.startPixel_=e.pixel,this.box_.setMap(e.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new ea(qr.BOXSTART,e.coordinate,e)),!0):!1}onBoxEnd(e){}}const Up=Dp;class Np extends Up{constructor(e){e=e||{};const t=e.condition?e.condition:Ap;super({condition:t,className:e.className||"ol-dragzoom",minArea:e.minArea}),this.duration_=e.duration!==void 0?e.duration:200,this.out_=e.out!==void 0?e.out:!1}onBoxEnd(e){const n=this.getMap().getView();let r=this.getGeometry();if(this.out_){const s=n.rotatedExtentForGeometry(r),a=n.getResolutionForExtentInternal(s),o=n.getResolution()/a;r=r.clone(),r.scale(o*o)}n.fitInternal(r,{duration:this.duration_,easing:ar})}}const Fp=Np,Kn={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"};class Op extends Ur{constructor(e){super(),e=e||{},this.defaultCondition_=function(t){return zh(t)&&Gh(t)},this.condition_=e.condition!==void 0?e.condition:this.defaultCondition_,this.duration_=e.duration!==void 0?e.duration:100,this.pixelDelta_=e.pixelDelta!==void 0?e.pixelDelta:128}handleEvent(e){let t=!1;if(e.type==Oe.KEYDOWN){const n=e.originalEvent,r=n.key;if(this.condition_(e)&&(r==Kn.DOWN||r==Kn.LEFT||r==Kn.RIGHT||r==Kn.UP)){const a=e.map.getView(),o=a.getResolution()*this.pixelDelta_;let l=0,c=0;r==Kn.DOWN?c=-o:r==Kn.LEFT?l=-o:r==Kn.RIGHT?l=o:c=o;const h=[l,c];vo(h,a.getRotation()),_p(a,h,this.duration_),n.preventDefault(),t=!0}}return!t}}const zp=Op;class Gp extends Ur{constructor(e){super(),e=e||{},this.condition_=e.condition?e.condition:function(t){return!Tp(t)&&Gh(t)},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:100}handleEvent(e){let t=!1;if(e.type==Oe.KEYDOWN||e.type==Oe.KEYPRESS){const n=e.originalEvent,r=n.key;if(this.condition_(e)&&(r==="+"||r==="-")){const s=e.map,a=r==="+"?this.delta_:-this.delta_,o=s.getView();No(o,a,void 0,this.duration_),n.preventDefault(),t=!0}}return!t}}const Bp=Gp;class Hp extends Ur{constructor(e){e=e||{},super(e),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=e.maxDelta!==void 0?e.maxDelta:1,this.duration_=e.duration!==void 0?e.duration:250,this.timeout_=e.timeout!==void 0?e.timeout:80,this.useAnchor_=e.useAnchor!==void 0?e.useAnchor:!0,this.constrainResolution_=e.constrainResolution!==void 0?e.constrainResolution:!1;const t=e.condition?e.condition:Sp;this.condition_=e.onFocusOnly?Ya(Fh,t):t,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300}endInteraction_(){this.trackpadTimeoutId_=void 0;const e=this.getMap();if(!e)return;e.getView().endInteraction(void 0,this.lastDelta_?this.lastDelta_>0?1:-1:0,this.lastAnchor_)}handleEvent(e){if(!this.condition_(e)||e.type!==Oe.WHEEL)return!0;const n=e.map,r=e.originalEvent;r.preventDefault(),this.useAnchor_&&(this.lastAnchor_=e.coordinate);let s;if(e.type==Oe.WHEEL&&(s=r.deltaY,Xu&&r.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(s/=oh),r.deltaMode===WheelEvent.DOM_DELTA_LINE&&(s*=40)),s===0)return!1;this.lastDelta_=s;const a=Date.now();this.startTime_===void 0&&(this.startTime_=a),(!this.mode_||a-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(s)<4?"trackpad":"wheel");const o=n.getView();if(this.mode_==="trackpad"&&!(o.getConstrainResolution()||this.constrainResolution_))return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(o.getAnimating()&&o.cancelAnimations(),o.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),o.adjustZoom(-s/this.deltaPerZoom_,this.lastAnchor_),this.startTime_=a,!1;this.totalDelta_+=s;const l=Math.max(this.timeout_-(a-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,n),l),!1}handleWheelZoom_(e){const t=e.getView();t.getAnimating()&&t.cancelAnimations();let n=-gt(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(t.getConstrainResolution()||this.constrainResolution_)&&(n=n?n>0?1:-1:0),No(t,n,this.lastAnchor_,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(e){this.useAnchor_=e,e||(this.lastAnchor_=null)}}const Vp=Hp;class kp extends Nr{constructor(e){e=e||{};const t=e;t.stopDown||(t.stopDown=Is),super(t),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=e.threshold!==void 0?e.threshold:.3,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){let t=0;const n=this.targetPointers[0],r=this.targetPointers[1],s=Math.atan2(r.clientY-n.clientY,r.clientX-n.clientX);if(this.lastAngle_!==void 0){const l=s-this.lastAngle_;this.rotationDelta_+=l,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),t=l}this.lastAngle_=s;const a=e.map,o=a.getView();o.getConstraints().rotation!==Lo&&(this.anchor_=a.getCoordinateFromPixelInternal(a.getEventPixel(Fo(this.targetPointers))),this.rotating_&&(a.render(),o.adjustRotationInternal(t,this.anchor_)))}handleUpEvent(e){return this.targetPointers.length<2?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){if(this.targetPointers.length>=2){const t=e.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}}const Wp=kp;class Xp extends Nr{constructor(e){e=e||{};const t=e;t.stopDown||(t.stopDown=Is),super(t),this.anchor_=null,this.duration_=e.duration!==void 0?e.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(e){let t=1;const n=this.targetPointers[0],r=this.targetPointers[1],s=n.clientX-r.clientX,a=n.clientY-r.clientY,o=Math.sqrt(s*s+a*a);this.lastDistance_!==void 0&&(t=this.lastDistance_/o),this.lastDistance_=o;const l=e.map,c=l.getView();t!=1&&(this.lastScaleDelta_=t),this.anchor_=l.getCoordinateFromPixelInternal(l.getEventPixel(Fo(this.targetPointers))),l.render(),c.adjustResolutionInternal(t,this.anchor_)}handleUpEvent(e){if(this.targetPointers.length<2){const n=e.map.getView(),r=this.lastScaleDelta_>1?1:-1;return n.endInteraction(this.duration_,r),!1}return!0}handleDownEvent(e){if(this.targetPointers.length>=2){const t=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}}const Yp=Xp;function qp(i){i=i||{};const e=new Sn,t=new qf(-.005,.05,100);return(i.altShiftDragRotate!==void 0?i.altShiftDragRotate:!0)&&e.push(new Lp),(i.doubleClickZoom!==void 0?i.doubleClickZoom:!0)&&e.push(new xp({delta:i.zoomDelta,duration:i.zoomDuration})),(i.dragPan!==void 0?i.dragPan:!0)&&e.push(new wp({onFocusOnly:i.onFocusOnly,kinetic:t})),(i.pinchRotate!==void 0?i.pinchRotate:!0)&&e.push(new Wp),(i.pinchZoom!==void 0?i.pinchZoom:!0)&&e.push(new Yp({duration:i.zoomDuration})),(i.keyboard!==void 0?i.keyboard:!0)&&(e.push(new zp),e.push(new Bp({delta:i.zoomDelta,duration:i.zoomDuration}))),(i.mouseWheelZoom!==void 0?i.mouseWheelZoom:!0)&&e.push(new Vp({onFocusOnly:i.onFocusOnly,duration:i.zoomDuration})),(i.shiftDragZoom!==void 0?i.shiftDragZoom:!0)&&e.push(new Fp({duration:i.zoomDuration})),e}function Bh(i){if(i instanceof Io){i.setMapInternal(null);return}i instanceof Gs&&i.getLayers().forEach(Bh)}function Hh(i,e){if(i instanceof Io){i.setMapInternal(e);return}if(i instanceof Gs){const t=i.getLayers().getArray();for(let n=0,r=t.length;n<r;++n)Hh(t[n],e)}}let Kp=class extends An{constructor(e){super(),e=e||{},this.on,this.once,this.un;const t=Zp(e);this.renderComplete_,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=e.maxTilesLoading!==void 0?e.maxTilesLoading:16,this.pixelRatio_=e.pixelRatio!==void 0?e.pixelRatio:oh,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=Xi(),this.pixelToCoordinateTransform_=Xi(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_),this.mapBrowserEventHandler_=null,this.moveTolerance_=e.moveTolerance,this.keyboardEventTarget_=t.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,this.resizeObserver_=new ResizeObserver(()=>this.updateSize()),this.controls=t.controls||mp(),this.interactions=t.interactions||qp({onFocusOnly:!0}),this.overlays_=t.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new ap(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(yt.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(yt.VIEW,this.handleViewChanged_),this.addChangeListener(yt.SIZE,this.handleSizeChanged_),this.addChangeListener(yt.TARGET,this.handleTargetChanged_),this.setProperties(t.values);const n=this;e.view&&!(e.view instanceof an)&&e.view.then(function(r){n.setView(new an(r))}),this.controls.addEventListener(Ht.ADD,r=>{r.element.setMap(this)}),this.controls.addEventListener(Ht.REMOVE,r=>{r.element.setMap(null)}),this.interactions.addEventListener(Ht.ADD,r=>{r.element.setMap(this)}),this.interactions.addEventListener(Ht.REMOVE,r=>{r.element.setMap(null)}),this.overlays_.addEventListener(Ht.ADD,r=>{this.addOverlayInternal_(r.element)}),this.overlays_.addEventListener(Ht.REMOVE,r=>{const s=r.element.getId();s!==void 0&&delete this.overlayIdIndex_[s.toString()],r.element.setMap(null)}),this.controls.forEach(r=>{r.setMap(this)}),this.interactions.forEach(r=>{r.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(e){this.getControls().push(e)}addInteraction(e){this.getInteractions().push(e)}addLayer(e){this.getLayerGroup().getLayers().push(e)}handleLayerAdd_(e){Hh(e.layer,this)}addOverlay(e){this.getOverlays().push(e)}addOverlayInternal_(e){const t=e.getId();t!==void 0&&(this.overlayIdIndex_[t.toString()]=e),e.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(e,t,n){if(!this.frameState_||!this.renderer_)return;const r=this.getCoordinateFromPixelInternal(e);n=n!==void 0?n:{};const s=n.hitTolerance!==void 0?n.hitTolerance:0,a=n.layerFilter!==void 0?n.layerFilter:Ms,o=n.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(r,this.frameState_,s,o,t,null,a,null)}getFeaturesAtPixel(e,t){const n=[];return this.forEachFeatureAtPixel(e,function(r){n.push(r)},t),n}getAllLayers(){const e=[];function t(n){n.forEach(function(r){r instanceof Gs?t(r.getLayers()):e.push(r)})}return t(this.getLayers()),e}hasFeatureAtPixel(e,t){if(!this.frameState_||!this.renderer_)return!1;const n=this.getCoordinateFromPixelInternal(e);t=t!==void 0?t:{};const r=t.layerFilter!==void 0?t.layerFilter:Ms,s=t.hitTolerance!==void 0?t.hitTolerance:0,a=t.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(n,this.frameState_,s,a,r,null)}getEventCoordinate(e){return this.getCoordinateFromPixel(this.getEventPixel(e))}getEventCoordinateInternal(e){return this.getCoordinateFromPixelInternal(this.getEventPixel(e))}getEventPixel(e){const n=this.viewport_.getBoundingClientRect(),r=this.getSize(),s=n.width/r[0],a=n.height/r[1],o="changedTouches"in e?e.changedTouches[0]:e;return[(o.clientX-n.left)/s,(o.clientY-n.top)/a]}getTarget(){return this.get(yt.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(e){return ka(this.getCoordinateFromPixelInternal(e),this.getView().getProjection())}getCoordinateFromPixelInternal(e){const t=this.frameState_;return t?Gt(t.pixelToCoordinateTransform,e.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(e){const t=this.overlayIdIndex_[e.toString()];return t!==void 0?t:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(yt.LAYERGROUP)}setLayers(e){const t=this.getLayerGroup();if(e instanceof Sn){t.setLayers(e);return}const n=t.getLayers();n.clear(),n.extend(e)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){const e=this.getLayerGroup().getLayerStatesArray();for(let t=0,n=e.length;t<n;++t){const r=e[t];if(!r.visible)continue;const s=r.layer.getRenderer();if(s&&!s.ready)return!0;const a=r.layer.getSource();if(a&&a.loading)return!0}return!1}getPixelFromCoordinate(e){const t=xn(e,this.getView().getProjection());return this.getPixelFromCoordinateInternal(t)}getPixelFromCoordinateInternal(e){const t=this.frameState_;return t?Gt(t.coordinateToPixelTransform,e.slice(0,2)):null}getRenderer(){return this.renderer_}getSize(){return this.get(yt.SIZE)}getView(){return this.get(yt.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){const e=this.getTargetElement();return e?e.ownerDocument:document}getTilePriority(e,t,n,r){return op(this.frameState_,e,t,n,r)}handleBrowserEvent(e,t){t=t||e.type;const n=new In(t,this,e);this.handleMapBrowserEvent(n)}handleMapBrowserEvent(e){if(!this.frameState_)return;const t=e.originalEvent,n=t.type;if(n===Xa.POINTERDOWN||n===Oe.WHEEL||n===Oe.KEYDOWN){const r=this.getOwnerDocument(),s=this.viewport_.getRootNode?this.viewport_.getRootNode():r,a=t.target;if(this.overlayContainerStopEvent_.contains(a)||!(s===r?r.documentElement:s).contains(a))return}if(e.frameState=this.frameState_,this.dispatchEvent(e)!==!1){const r=this.getInteractions().getArray().slice();for(let s=r.length-1;s>=0;s--){const a=r[s];if(a.getMap()!==this||!a.getActive()||!this.getTargetElement())continue;if(!a.handleEvent(e)||e.propagationStopped)break}}}handlePostRender(){const e=this.frameState_,t=this.tileQueue_;if(!t.isEmpty()){let r=this.maxTilesLoading_,s=r;if(e){const a=e.viewHints;if(a[Bt.ANIMATING]||a[Bt.INTERACTING]){const o=Date.now()-e.time>8;r=o?0:8,s=o?0:2}}t.getTilesLoading()<r&&(t.reprioritize(),t.loadMoreTiles(r,s))}e&&this.renderer_&&!e.animate&&(this.renderComplete_===!0?(this.hasListener(zn.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(zn.RENDERCOMPLETE,e),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new Gi(Dn.LOADEND,this,e)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new Gi(Dn.LOADSTART,this,e))));const n=this.postRenderFunctions_;for(let r=0,s=n.length;r<s;++r)n[r](this,e);n.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let n=0,r=this.targetChangeHandlerKeys_.length;n<r;++n)nt(this.targetChangeHandlerKeys_[n]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(Oe.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(Oe.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,Wa(this.viewport_)}if(this.targetElement_){this.resizeObserver_.unobserve(this.targetElement_);const n=this.targetElement_.getRootNode();n instanceof ShadowRoot&&this.resizeObserver_.unobserve(n.host),this.setSize(void 0)}const e=this.getTarget(),t=typeof e=="string"?document.getElementById(e):e;if(this.targetElement_=t,!t)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{t.appendChild(this.viewport_),this.renderer_||(this.renderer_=new Jf(this)),this.mapBrowserEventHandler_=new np(this,this.moveTolerance_);for(const s in Je)this.mapBrowserEventHandler_.addEventListener(Je[s],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(Oe.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(Oe.WHEEL,this.boundHandleBrowserEvent_,ch?{passive:!1}:!1);const n=this.keyboardEventTarget_?this.keyboardEventTarget_:t;this.targetChangeHandlerKeys_=[ke(n,Oe.KEYDOWN,this.handleBrowserEvent,this),ke(n,Oe.KEYPRESS,this.handleBrowserEvent,this)];const r=t.getRootNode();r instanceof ShadowRoot&&this.resizeObserver_.observe(r.host),this.resizeObserver_.observe(t)}this.updateSize()}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(nt(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(nt(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);const e=this.getView();e&&(this.updateViewportSize_(),this.viewPropertyListenerKey_=ke(e,Mr.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=ke(e,Oe.CHANGE,this.handleViewPropertyChanged_,this),e.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(nt),this.layerGroupPropertyListenerKeys_=null);const e=this.getLayerGroup();e&&(this.handleLayerAdd_(new Un("addlayer",e)),this.layerGroupPropertyListenerKeys_=[ke(e,Mr.PROPERTYCHANGE,this.render,this),ke(e,Oe.CHANGE,this.render,this),ke(e,"addlayer",this.handleLayerAdd_,this),ke(e,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){const e=this.getLayerGroup().getLayerStatesArray();for(let t=0,n=e.length;t<n;++t){const r=e[t].layer;r.hasRenderer()&&r.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}flushDeclutterItems(){const e=this.frameState_;e&&this.renderer_.flushDeclutterItems(e)}removeControl(e){return this.getControls().remove(e)}removeInteraction(e){return this.getInteractions().remove(e)}removeLayer(e){return this.getLayerGroup().getLayers().remove(e)}handleLayerRemove_(e){Bh(e.layer)}removeOverlay(e){return this.getOverlays().remove(e)}renderFrame_(e){const t=this.getSize(),n=this.getView(),r=this.frameState_;let s=null;if(t!==void 0&&ml(t)&&n&&n.isDef()){const a=n.getHints(this.frameState_?this.frameState_.viewHints:void 0),o=n.getState();if(s={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutterTree:null,extent:Ga(o.center,o.resolution,o.rotation,t),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:t,tileQueue:this.tileQueue_,time:e,usedTiles:{},viewState:o,viewHints:a,wantedTiles:{},mapId:wt(this),renderTargets:{}},o.nextCenter&&o.nextResolution){const l=isNaN(o.nextRotation)?o.rotation:o.nextRotation;s.nextExtent=Ga(o.nextCenter,o.nextResolution,l,t)}}this.frameState_=s,this.renderer_.renderFrame(s),s&&(s.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,s.postRenderFunctions),r&&(!this.previousExtent_||!Ir(this.previousExtent_)&&!Oa(s.extent,this.previousExtent_))&&(this.dispatchEvent(new Gi(Dn.MOVESTART,this,r)),this.previousExtent_=Lr(this.previousExtent_)),this.previousExtent_&&!s.viewHints[Bt.ANIMATING]&&!s.viewHints[Bt.INTERACTING]&&!Oa(s.extent,this.previousExtent_)&&(this.dispatchEvent(new Gi(Dn.MOVEEND,this,s)),Ju(s.extent,this.previousExtent_))),this.dispatchEvent(new Gi(Dn.POSTRENDER,this,s)),this.renderComplete_=this.hasListener(Dn.LOADSTART)||this.hasListener(Dn.LOADEND)||this.hasListener(zn.RENDERCOMPLETE)?!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady():void 0,this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(e){const t=this.getLayerGroup();t&&this.handleLayerRemove_(new Un("removelayer",t)),this.set(yt.LAYERGROUP,e)}setSize(e){this.set(yt.SIZE,e)}setTarget(e){this.set(yt.TARGET,e)}setView(e){if(!e||e instanceof an){this.set(yt.VIEW,e);return}this.set(yt.VIEW,new an);const t=this;e.then(function(n){t.setView(new an(n))})}updateSize(){const e=this.getTargetElement();let t;if(e){const r=getComputedStyle(e),s=e.offsetWidth-parseFloat(r.borderLeftWidth)-parseFloat(r.paddingLeft)-parseFloat(r.paddingRight)-parseFloat(r.borderRightWidth),a=e.offsetHeight-parseFloat(r.borderTopWidth)-parseFloat(r.paddingTop)-parseFloat(r.paddingBottom)-parseFloat(r.borderBottomWidth);!isNaN(s)&&!isNaN(a)&&(t=[s,a],!ml(t)&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&vh("No map visible because the map container's width or height are 0."))}const n=this.getSize();t&&(!n||!Ps(t,n))&&(this.setSize(t),this.updateViewportSize_())}updateViewportSize_(){const e=this.getView();if(e){let t;const n=getComputedStyle(this.viewport_);n.width&&n.height&&(t=[parseInt(n.width,10),parseInt(n.height,10)]),e.setViewportSize(t)}}};function Zp(i){let e=null;i.keyboardEventTarget!==void 0&&(e=typeof i.keyboardEventTarget=="string"?document.getElementById(i.keyboardEventTarget):i.keyboardEventTarget);const t={},n=i.layers&&typeof i.layers.getLayers=="function"?i.layers:new Gs({layers:i.layers});t[yt.LAYERGROUP]=n,t[yt.TARGET]=i.target,t[yt.VIEW]=i.view instanceof an?i.view:new an;let r;i.controls!==void 0&&(Array.isArray(i.controls)?r=new Sn(i.controls.slice()):(qe(typeof i.controls.getArray=="function","Expected `controls` to be an array or an `ol/Collection.js`"),r=i.controls));let s;i.interactions!==void 0&&(Array.isArray(i.interactions)?s=new Sn(i.interactions.slice()):(qe(typeof i.interactions.getArray=="function","Expected `interactions` to be an array or an `ol/Collection.js`"),s=i.interactions));let a;return i.overlays!==void 0?Array.isArray(i.overlays)?a=new Sn(i.overlays.slice()):(qe(typeof i.overlays.getArray=="function","Expected `overlays` to be an array or an `ol/Collection.js`"),a=i.overlays):a=new Sn,{controls:r,interactions:s,keyboardEventTarget:e,overlays:a,values:t}}const jp=Kp;class $p{constructor(e){this.highWaterMark=e!==void 0?e:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(e){for(;this.canExpireCache();)this.pop()}clear(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}containsKey(e){return this.entries_.hasOwnProperty(e)}forEach(e){let t=this.oldest_;for(;t;)e(t.value_,t.key_,this),t=t.newer}get(e,t){const n=this.entries_[e];return qe(n!==void 0,"Tried to get a value for a key that does not exist in the cache"),n===this.newest_||(n===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(n.newer.older=n.older,n.older.newer=n.newer),n.newer=null,n.older=this.newest_,this.newest_.newer=n,this.newest_=n),n.value_}remove(e){const t=this.entries_[e];return qe(t!==void 0,"Tried to get a value for a key that does not exist in the cache"),t===this.newest_?(this.newest_=t.older,this.newest_&&(this.newest_.newer=null)):t===this.oldest_?(this.oldest_=t.newer,this.oldest_&&(this.oldest_.older=null)):(t.newer.older=t.older,t.older.newer=t.newer),delete this.entries_[e],--this.count_,t.value_}getCount(){return this.count_}getKeys(){const e=new Array(this.count_);let t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.key_;return e}getValues(){const e=new Array(this.count_);let t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.value_;return e}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(e){if(this.containsKey(e))return this.entries_[e].value_}pop(){const e=this.oldest_;return delete this.entries_[e.key_],e.newer&&(e.newer.older=null),this.oldest_=e.newer,this.oldest_||(this.newest_=null),--this.count_,e.value_}replace(e,t){this.get(e),this.entries_[e].value_=t}set(e,t){qe(!(e in this.entries_),"Tried to set a value for a key that is used already");const n={key_:e,newer:null,older:this.newest_,value_:t};this.newest_?this.newest_.newer=n:this.oldest_=n,this.newest_=n,this.entries_[e]=n,++this.count_}setSize(e){this.highWaterMark=e}}const Jp=$p;function Rl(i,e,t,n){return n!==void 0?(n[0]=i,n[1]=e,n[2]=t,n):[i,e,t]}function Bs(i,e,t){return i+"/"+e+"/"+t}function Vh(i){return Bs(i[0],i[1],i[2])}function Qp(i){return i.split("/").map(Number)}function em(i){return(i[1]<<i[0])+i[2]}function tm(i,e){const t=i[0],n=i[1],r=i[2];if(e.getMinZoom()>t||t>e.getMaxZoom())return!1;const s=e.getFullTileRange(t);return s?s.containsXY(n,r):!0}class nm extends Jp{clear(){for(;this.getCount()>0;)this.pop().release();super.clear()}expireCache(e){for(;this.canExpireCache()&&!(this.peekLast().getKey()in e);)this.pop().release()}pruneExceptNewestZ(){if(this.getCount()===0)return;const e=this.peekFirstKey(),n=Qp(e)[0];this.forEach(r=>{r.tileCoord[0]!==n&&(this.remove(Vh(r.tileCoord)),r.release())})}}const kh=nm;class Wh{constructor(e,t,n,r){this.minX=e,this.maxX=t,this.minY=n,this.maxY=r}contains(e){return this.containsXY(e[1],e[2])}containsTileRange(e){return this.minX<=e.minX&&e.maxX<=this.maxX&&this.minY<=e.minY&&e.maxY<=this.maxY}containsXY(e,t){return this.minX<=e&&e<=this.maxX&&this.minY<=t&&t<=this.maxY}equals(e){return this.minX==e.minX&&this.minY==e.minY&&this.maxX==e.maxX&&this.maxY==e.maxY}extend(e){e.minX<this.minX&&(this.minX=e.minX),e.maxX>this.maxX&&(this.maxX=e.maxX),e.minY<this.minY&&(this.minY=e.minY),e.maxY>this.maxY&&(this.maxY=e.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(e){return this.minX<=e.maxX&&this.maxX>=e.minX&&this.minY<=e.maxY&&this.maxY>=e.minY}}function _i(i,e,t,n,r){return r!==void 0?(r.minX=i,r.maxX=e,r.minY=t,r.maxY=n,r):new Wh(i,e,t,n)}const Xh=Wh,Kr={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};class im extends Io{constructor(e){e=e||{};const t=Object.assign({},e);delete t.preload,delete t.useInterimTilesOnError,super(t),this.on,this.once,this.un,this.setPreload(e.preload!==void 0?e.preload:0),this.setUseInterimTilesOnError(e.useInterimTilesOnError!==void 0?e.useInterimTilesOnError:!0)}getPreload(){return this.get(Kr.PRELOAD)}setPreload(e){this.set(Kr.PRELOAD,e)}getUseInterimTilesOnError(){return this.get(Kr.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(e){this.set(Kr.USE_INTERIM_TILES_ON_ERROR,e)}getData(e){return super.getData(e)}}const rm=im,sm=.5,am=10,bl=.25;class om{constructor(e,t,n,r,s,a){this.sourceProj_=e,this.targetProj_=t;let o={};const l=Ar(this.targetProj_,this.sourceProj_);this.transformInv_=function(y){const v=y[0]+"/"+y[1];return o[v]||(o[v]=l(y)),o[v]},this.maxSourceExtent_=r,this.errorThresholdSquared_=s*s,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!r&&!!this.sourceProj_.getExtent()&&mt(r)>=mt(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?mt(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?mt(this.targetProj_.getExtent()):null;const c=fi(n),h=Os(n),u=Fs(n),d=Ns(n),m=this.transformInv_(c),g=this.transformInv_(h),_=this.transformInv_(u),p=this.transformInv_(d),f=am+(a?Math.max(0,Math.ceil(Math.log2(za(n)/(a*a*256*256)))):0);if(this.addQuad_(c,h,u,d,m,g,_,p,f),this.wrapsXInSource_){let y=1/0;this.triangles_.forEach(function(v,x,A){y=Math.min(y,v.source[0][0],v.source[1][0],v.source[2][0])}),this.triangles_.forEach(v=>{if(Math.max(v.source[0][0],v.source[1][0],v.source[2][0])-y>this.sourceWorldWidth_/2){const x=[[v.source[0][0],v.source[0][1]],[v.source[1][0],v.source[1][1]],[v.source[2][0],v.source[2][1]]];x[0][0]-y>this.sourceWorldWidth_/2&&(x[0][0]-=this.sourceWorldWidth_),x[1][0]-y>this.sourceWorldWidth_/2&&(x[1][0]-=this.sourceWorldWidth_),x[2][0]-y>this.sourceWorldWidth_/2&&(x[2][0]-=this.sourceWorldWidth_);const A=Math.min(x[0][0],x[1][0],x[2][0]);Math.max(x[0][0],x[1][0],x[2][0])-A<this.sourceWorldWidth_/2&&(v.source=x)}})}o={}}addTriangle_(e,t,n,r,s,a){this.triangles_.push({source:[r,s,a],target:[e,t,n]})}addQuad_(e,t,n,r,s,a,o,l,c){const h=tl([s,a,o,l]),u=this.sourceWorldWidth_?mt(h)/this.sourceWorldWidth_:null,d=this.sourceWorldWidth_,m=this.sourceProj_.canWrapX()&&u>.5&&u<1;let g=!1;if(c>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){const p=tl([e,t,n,r]);g=mt(p)/this.targetWorldWidth_>bl||g}!m&&this.sourceProj_.isGlobal()&&u&&(g=u>bl||g)}if(!g&&this.maxSourceExtent_&&isFinite(h[0])&&isFinite(h[1])&&isFinite(h[2])&&isFinite(h[3])&&!Pr(h,this.maxSourceExtent_))return;let _=0;if(!g&&(!isFinite(s[0])||!isFinite(s[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(l[0])||!isFinite(l[1]))){if(c>0)g=!0;else if(_=(!isFinite(s[0])||!isFinite(s[1])?8:0)+(!isFinite(a[0])||!isFinite(a[1])?4:0)+(!isFinite(o[0])||!isFinite(o[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),_!=1&&_!=2&&_!=4&&_!=8)return}if(c>0){if(!g){const p=[(e[0]+n[0])/2,(e[1]+n[1])/2],f=this.transformInv_(p);let y;m?y=(Ki(s[0],d)+Ki(o[0],d))/2-Ki(f[0],d):y=(s[0]+o[0])/2-f[0];const v=(s[1]+o[1])/2-f[1];g=y*y+v*v>this.errorThresholdSquared_}if(g){if(Math.abs(e[0]-n[0])<=Math.abs(e[1]-n[1])){const p=[(t[0]+n[0])/2,(t[1]+n[1])/2],f=this.transformInv_(p),y=[(r[0]+e[0])/2,(r[1]+e[1])/2],v=this.transformInv_(y);this.addQuad_(e,t,p,y,s,a,f,v,c-1),this.addQuad_(y,p,n,r,v,f,o,l,c-1)}else{const p=[(e[0]+t[0])/2,(e[1]+t[1])/2],f=this.transformInv_(p),y=[(n[0]+r[0])/2,(n[1]+r[1])/2],v=this.transformInv_(y);this.addQuad_(e,p,y,r,s,f,v,l,c-1),this.addQuad_(p,t,n,y,f,a,o,v,c-1)}return}}if(m){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}_&11||this.addTriangle_(e,n,r,s,o,l),_&14||this.addTriangle_(e,n,t,s,o,a),_&&(_&13||this.addTriangle_(t,r,e,a,l,s),_&7||this.addTriangle_(t,r,n,a,l,o))}calculateSourceExtent(){const e=di();return this.triangles_.forEach(function(t,n,r){const s=t.source;vs(e,s[0]),vs(e,s[1]),vs(e,s[2])}),e}getTriangles(){return this.triangles_}}const lm=om;let ta;const Zi=[];function wl(i,e,t,n,r){i.beginPath(),i.moveTo(0,0),i.lineTo(e,t),i.lineTo(n,r),i.closePath(),i.save(),i.clip(),i.fillRect(0,0,Math.max(e,n)+1,Math.max(t,r)),i.restore()}function na(i,e){return Math.abs(i[e*4]-210)>2||Math.abs(i[e*4+3]-.75*255)>2}function cm(){if(ta===void 0){const i=er(6,6,Zi);i.globalCompositeOperation="lighter",i.fillStyle="rgba(210, 0, 0, 0.75)",wl(i,4,5,4,0),wl(i,4,5,0,5);const e=i.getImageData(0,0,3,3).data;ta=na(e,0)||na(e,4)||na(e,8),Ao(i),Zi.push(i.canvas)}return ta}function Cl(i,e,t,n){const r=yo(t,e,i);let s=ol(e,n,t);const a=e.getMetersPerUnit();a!==void 0&&(s*=a);const o=i.getMetersPerUnit();o!==void 0&&(s/=o);const l=i.getExtent();if(!l||_o(l,r)){const c=ol(i,s,r)/s;isFinite(c)&&c>0&&(s/=c)}return s}function hm(i,e,t,n){const r=Sr(t);let s=Cl(i,e,r,n);return(!isFinite(s)||s<=0)&&ph(t,function(a){return s=Cl(i,e,a,n),isFinite(s)&&s>0}),s}function um(i,e,t,n,r,s,a,o,l,c,h,u){const d=er(Math.round(t*i),Math.round(t*e),Zi);if(u||(d.imageSmoothingEnabled=!1),l.length===0)return d.canvas;d.scale(t,t);function m(x){return Math.round(x*t)/t}d.globalCompositeOperation="lighter";const g=di();l.forEach(function(x,A,w){nd(g,x.extent)});const _=mt(g),p=ln(g),f=er(Math.round(t*_/n),Math.round(t*p/n),Zi);u||(f.imageSmoothingEnabled=!1);const y=t/n;l.forEach(function(x,A,w){const b=x.extent[0]-g[0],U=-(x.extent[3]-g[3]),M=mt(x.extent),R=ln(x.extent);x.image.width>0&&x.image.height>0&&f.drawImage(x.image,c,c,x.image.width-2*c,x.image.height-2*c,b*y,U*y,M*y,R*y)});const v=fi(a);return o.getTriangles().forEach(function(x,A,w){const b=x.source,U=x.target;let M=b[0][0],R=b[0][1],Z=b[1][0],q=b[1][1],P=b[2][0],B=b[2][1];const V=m((U[0][0]-v[0])/s),j=m(-(U[0][1]-v[1])/s),z=m((U[1][0]-v[0])/s),Y=m(-(U[1][1]-v[1])/s),$=m((U[2][0]-v[0])/s),K=m(-(U[2][1]-v[1])/s),G=M,H=R;M=0,R=0,Z-=G,q-=H,P-=G,B-=H;const re=[[Z,q,0,0,z-V],[P,B,0,0,$-V],[0,0,Z,q,Y-j],[0,0,P,B,K-j]],ee=xd(re);if(ee){if(d.save(),d.beginPath(),cm()||!u){d.moveTo(z,Y);const ne=4,pe=V-z,ve=j-Y;for(let he=0;he<ne;he++)d.lineTo(z+m((he+1)*pe/ne),Y+m(he*ve/(ne-1))),he!=ne-1&&d.lineTo(z+m((he+1)*pe/ne),Y+m((he+1)*ve/(ne-1)));d.lineTo($,K)}else d.moveTo(z,Y),d.lineTo(V,j),d.lineTo($,K);d.clip(),d.transform(ee[0],ee[2],ee[1],ee[3],V,j),d.translate(g[0]-G,g[3]-H),d.scale(n/t,-n/t),d.drawImage(f.canvas,0,0),d.restore()}}),Ao(f),Zi.push(f.canvas),h&&(d.save(),d.globalCompositeOperation="source-over",d.strokeStyle="black",d.lineWidth=1,o.getTriangles().forEach(function(x,A,w){const b=x.target,U=(b[0][0]-v[0])/s,M=-(b[0][1]-v[1])/s,R=(b[1][0]-v[0])/s,Z=-(b[1][1]-v[1])/s,q=(b[2][0]-v[0])/s,P=-(b[2][1]-v[1])/s;d.beginPath(),d.moveTo(R,Z),d.lineTo(U,M),d.lineTo(q,P),d.closePath(),d.stroke()}),d.restore()),d.canvas}class dm extends Uh{constructor(e,t,n,r,s,a,o,l,c,h,u,d){super(s,_e.IDLE,{interpolate:!!d}),this.renderEdges_=u!==void 0?u:!1,this.pixelRatio_=o,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=t,this.targetTileGrid_=r,this.wrappedTileCoord_=a||s,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0;const m=r.getTileCoordExtent(this.wrappedTileCoord_),g=this.targetTileGrid_.getExtent();let _=this.sourceTileGrid_.getExtent();const p=g?vr(m,g):m;if(za(p)===0){this.state=_e.EMPTY;return}const f=e.getExtent();f&&(_?_=vr(_,f):_=f);const y=r.getResolution(this.wrappedTileCoord_[0]),v=hm(e,n,p,y);if(!isFinite(v)||v<=0){this.state=_e.EMPTY;return}const x=h!==void 0?h:sm;if(this.triangulation_=new lm(e,n,p,_,v*x,y),this.triangulation_.getTriangles().length===0){this.state=_e.EMPTY;return}this.sourceZ_=t.getZForResolution(v);let A=this.triangulation_.calculateSourceExtent();if(_&&(e.canWrapX()?(A[1]=gt(A[1],_[1],_[3]),A[3]=gt(A[3],_[1],_[3])):A=vr(A,_)),!za(A))this.state=_e.EMPTY;else{const w=t.getTileRangeForExtentAndZ(A,this.sourceZ_);for(let b=w.minX;b<=w.maxX;b++)for(let U=w.minY;U<=w.maxY;U++){const M=c(this.sourceZ_,b,U,o);M&&this.sourceTiles_.push(M)}this.sourceTiles_.length===0&&(this.state=_e.EMPTY)}}getImage(){return this.canvas_}reproject_(){const e=[];if(this.sourceTiles_.forEach(t=>{t&&t.getState()==_e.LOADED&&e.push({extent:this.sourceTileGrid_.getTileCoordExtent(t.tileCoord),image:t.getImage()})}),this.sourceTiles_.length=0,e.length===0)this.state=_e.ERROR;else{const t=this.wrappedTileCoord_[0],n=this.targetTileGrid_.getTileSize(t),r=typeof n=="number"?n:n[0],s=typeof n=="number"?n:n[1],a=this.targetTileGrid_.getResolution(t),o=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=um(r,s,this.pixelRatio_,o,this.sourceTileGrid_.getExtent(),a,l,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=_e.LOADED}this.changed()}load(){if(this.state==_e.IDLE){this.state=_e.LOADING,this.changed();let e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(t=>{const n=t.getState();if(n==_e.IDLE||n==_e.LOADING){e++;const r=ke(t,Oe.CHANGE,function(s){const a=t.getState();(a==_e.LOADED||a==_e.ERROR||a==_e.EMPTY)&&(nt(r),e--,e===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(r)}}),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(t,n,r){t.getState()==_e.IDLE&&t.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(nt),this.sourcesListenerKeys_=null}release(){this.canvas_&&(Ao(this.canvas_.getContext("2d")),Zi.push(this.canvas_),this.canvas_=null),super.release()}}const qa=dm;class fm extends Bf{constructor(e){super(e),this.extentChanged=!0,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedRevision,this.renderedTiles=[],this.newTiles_=!1,this.tmpExtent=di(),this.tmpTileRange_=new Xh(0,0,0,0)}isDrawableTile(e){const t=this.getLayer(),n=e.getState(),r=t.getUseInterimTilesOnError();return n==_e.LOADED||n==_e.EMPTY||n==_e.ERROR&&!r}getTile(e,t,n,r){const s=r.pixelRatio,a=r.viewState.projection,o=this.getLayer();let c=o.getSource().getTile(e,t,n,s,a);return c.getState()==_e.ERROR&&o.getUseInterimTilesOnError()&&o.getPreload()>0&&(this.newTiles_=!0),this.isDrawableTile(c)||(c=c.getInterimTile()),c}getData(e){const t=this.frameState;if(!t)return null;const n=this.getLayer(),r=Gt(t.pixelToCoordinateTransform,e.slice()),s=n.getExtent();if(s&&!_o(s,r))return null;const a=t.pixelRatio,o=t.viewState.projection,l=t.viewState,c=n.getRenderSource(),h=c.getTileGridForProjection(l.projection),u=c.getTilePixelRatio(t.pixelRatio);for(let d=h.getZForResolution(l.resolution);d>=h.getMinZoom();--d){const m=h.getTileCoordForCoordAndZ(r,d),g=c.getTile(d,m[1],m[2],a,o);if(!(g instanceof Nh||g instanceof qa)||g instanceof qa&&g.getState()===_e.EMPTY)return null;if(g.getState()!==_e.LOADED)continue;const _=h.getOrigin(d),p=Nn(h.getTileSize(d)),f=h.getResolution(d),y=Math.floor(u*((r[0]-_[0])/f-m[1]*p[0])),v=Math.floor(u*((_[1]-r[1])/f-m[2]*p[1])),x=Math.round(u*c.getGutterForProjection(l.projection));return this.getImageData(g.getImage(),y+x,v+x)}return null}loadedTileCallback(e,t,n){return this.isDrawableTile(n)?super.loadedTileCallback(e,t,n):!1}prepareFrame(e){return!!this.getLayer().getSource()}renderFrame(e,t){const n=e.layerStatesArray[e.layerIndex],r=e.viewState,s=r.projection,a=r.resolution,o=r.center,l=r.rotation,c=e.pixelRatio,h=this.getLayer(),u=h.getSource(),d=u.getRevision(),m=u.getTileGridForProjection(s),g=m.getZForResolution(a,u.zDirection),_=m.getResolution(g);let p=e.extent;const f=e.viewState.resolution,y=u.getTilePixelRatio(c),v=Math.round(mt(p)/f*c),x=Math.round(ln(p)/f*c),A=n.extent&&Vi(n.extent,s);A&&(p=vr(p,Vi(n.extent,s)));const w=_*v/2/y,b=_*x/2/y,U=[o[0]-w,o[1]-b,o[0]+w,o[1]+b],M=m.getTileRangeForExtentAndZ(p,g),R={};R[g]={};const Z=this.createLoadedTileFinder(u,s,R),q=this.tmpExtent,P=this.tmpTileRange_;this.newTiles_=!1;const B=l?Ba(r.center,f,l,e.size):void 0;for(let re=M.minX;re<=M.maxX;++re)for(let ee=M.minY;ee<=M.maxY;++ee){if(l&&!m.tileCoordIntersectsViewport([g,re,ee],B))continue;const ne=this.getTile(g,re,ee,e);if(this.isDrawableTile(ne)){const he=wt(this);if(ne.getState()==_e.LOADED){R[g][ne.tileCoord.toString()]=ne;let De=ne.inTransition(he);De&&n.opacity!==1&&(ne.endTransition(he),De=!1),!this.newTiles_&&(De||!this.renderedTiles.includes(ne))&&(this.newTiles_=!0)}if(ne.getAlpha(he,e.time)===1)continue}const pe=m.getTileCoordChildTileRange(ne.tileCoord,P,q);let ve=!1;pe&&(ve=Z(g+1,pe)),ve||m.forEachTileCoordParentTileRange(ne.tileCoord,Z,P,q)}const V=_/a*c/y;yr(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/c,1/c,l,-v/2,-x/2);const j=ju(this.pixelTransform);this.useContainer(t,j,this.getBackground(e));const z=this.context,Y=z.canvas;hh(this.inversePixelTransform,this.pixelTransform),yr(this.tempTransform,v/2,x/2,V,V,0,-v/2,-x/2),Y.width!=v||Y.height!=x?(Y.width=v,Y.height=x):this.containerReused||z.clearRect(0,0,v,x),A&&this.clipUnrotated(z,e,A),u.getInterpolate()||(z.imageSmoothingEnabled=!1),this.preRender(z,e),this.renderedTiles.length=0;let $=Object.keys(R).map(Number);$.sort(po);let K,G,H;n.opacity===1&&(!this.containerReused||u.getOpaque(e.viewState.projection))?$=$.reverse():(K=[],G=[]);for(let re=$.length-1;re>=0;--re){const ee=$[re],ne=u.getTilePixelSize(ee,c,s),ve=m.getResolution(ee)/_,he=ne[0]*ve*V,De=ne[1]*ve*V,dt=m.getTileCoordForCoordAndZ(fi(U),ee),be=m.getTileCoordExtent(dt),I=Gt(this.tempTransform,[y*(be[0]-U[0])/_,y*(U[3]-be[3])/_]),ft=y*u.getGutterForProjection(s),Ee=R[ee];for(const Re in Ee){const Me=Ee[Re],We=Me.tileCoord,Pe=dt[1]-We[1],we=Math.round(I[0]-(Pe-1)*he),He=dt[2]-We[2],lt=Math.round(I[1]-(He-1)*De),Xe=Math.round(I[0]-Pe*he),T=Math.round(I[1]-He*De),E=we-Xe,F=lt-T,te=g===ee,J=te&&Me.getAlpha(wt(this),e.time)!==1;let Q=!1;if(!J)if(K){H=[Xe,T,Xe+E,T,Xe+E,T+F,Xe,T+F];for(let fe=0,ie=K.length;fe<ie;++fe)if(g!==ee&&ee<G[fe]){const O=K[fe];Pr([Xe,T,Xe+E,T+F],[O[0],O[3],O[4],O[7]])&&(Q||(z.save(),Q=!0),z.beginPath(),z.moveTo(H[0],H[1]),z.lineTo(H[2],H[3]),z.lineTo(H[4],H[5]),z.lineTo(H[6],H[7]),z.moveTo(O[6],O[7]),z.lineTo(O[4],O[5]),z.lineTo(O[2],O[3]),z.lineTo(O[0],O[1]),z.clip())}K.push(H),G.push(ee)}else z.clearRect(Xe,T,E,F);this.drawTileImage(Me,e,Xe,T,E,F,ft,te),K&&!J?(Q&&z.restore(),this.renderedTiles.unshift(Me)):this.renderedTiles.push(Me),this.updateUsedTiles(e.usedTiles,u,Me)}}return this.renderedRevision=d,this.renderedResolution=_,this.extentChanged=!this.renderedExtent_||!Oa(this.renderedExtent_,U),this.renderedExtent_=U,this.renderedPixelRatio=c,this.renderedProjection=s,this.manageTilePyramid(e,u,m,c,s,p,g,h.getPreload()),this.scheduleExpireCache(e,u),this.postRender(z,e),n.extent&&z.restore(),z.imageSmoothingEnabled=!0,j!==Y.style.transform&&(Y.style.transform=j),this.container}drawTileImage(e,t,n,r,s,a,o,l){const c=this.getTileImage(e);if(!c)return;const h=wt(this),u=t.layerStatesArray[t.layerIndex],d=u.opacity*(l?e.getAlpha(h,t.time):1),m=d!==this.context.globalAlpha;m&&(this.context.save(),this.context.globalAlpha=d),this.context.drawImage(c,o,o,c.width-2*o,c.height-2*o,n,r,s,a),m&&this.context.restore(),d!==u.opacity?t.animate=!0:l&&e.endTransition(h)}getImage(){const e=this.context;return e?e.canvas:null}getTileImage(e){return e.getImage()}scheduleExpireCache(e,t){if(t.canExpireCache()){const n=(function(r,s,a){const o=wt(r);o in a.usedTiles&&r.expireCache(a.viewState.projection,a.usedTiles[o])}).bind(null,t);e.postRenderFunctions.push(n)}}updateUsedTiles(e,t,n){const r=wt(t);r in e||(e[r]={}),e[r][n.getKey()]=!0}manageTilePyramid(e,t,n,r,s,a,o,l,c){const h=wt(t);h in e.wantedTiles||(e.wantedTiles[h]={});const u=e.wantedTiles[h],d=e.tileQueue,m=n.getMinZoom(),g=e.viewState.rotation,_=g?Ba(e.viewState.center,e.viewState.resolution,g,e.size):void 0;let p=0,f,y,v,x,A,w;for(w=m;w<=o;++w)for(y=n.getTileRangeForExtentAndZ(a,w,y),v=n.getResolution(w),x=y.minX;x<=y.maxX;++x)for(A=y.minY;A<=y.maxY;++A)g&&!n.tileCoordIntersectsViewport([w,x,A],_)||(o-w<=l?(++p,f=t.getTile(w,x,A,r,s),f.getState()==_e.IDLE&&(u[f.getKey()]=!0,d.isKeyQueued(f.getKey())||d.enqueue([f,h,n.getTileCoordCenter(f.tileCoord),v])),c!==void 0&&c(f)):t.useTile(w,x,A,s));t.updateCacheSize(p,s)}}const pm=fm;class mm extends rm{constructor(e){super(e)}createRenderer(){return new pm(this)}}const gm=mm,ia={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"},vi=[0,0,0],bn=5;class _m{constructor(e){this.minZoom=e.minZoom!==void 0?e.minZoom:0,this.resolutions_=e.resolutions,qe(Ou(this.resolutions_,function(r,s){return s-r},!0),"`resolutions` must be sorted in descending order");let t;if(!e.origins){for(let r=0,s=this.resolutions_.length-1;r<s;++r)if(!t)t=this.resolutions_[r]/this.resolutions_[r+1];else if(this.resolutions_[r]/this.resolutions_[r+1]!==t){t=void 0;break}}this.zoomFactor_=t,this.maxZoom=this.resolutions_.length-1,this.origin_=e.origin!==void 0?e.origin:null,this.origins_=null,e.origins!==void 0&&(this.origins_=e.origins,qe(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));const n=e.extent;n!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=fi(n)),qe(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,e.tileSizes!==void 0&&(this.tileSizes_=e.tileSizes,qe(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=e.tileSize!==void 0?e.tileSize:this.tileSizes_?null:bo,qe(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=n!==void 0?n:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],e.sizes!==void 0?this.fullTileRanges_=e.sizes.map(function(r,s){const a=new Xh(Math.min(0,r[0]),Math.max(r[0]-1,-1),Math.min(0,r[1]),Math.max(r[1]-1,-1));if(n){const o=this.getTileRangeForExtentAndZ(n,s);a.minX=Math.max(o.minX,a.minX),a.maxX=Math.min(o.maxX,a.maxX),a.minY=Math.max(o.minY,a.minY),a.maxY=Math.min(o.maxY,a.maxY)}return a},this):n&&this.calculateTileRanges_(n)}forEachTileCoord(e,t,n){const r=this.getTileRangeForExtentAndZ(e,t);for(let s=r.minX,a=r.maxX;s<=a;++s)for(let o=r.minY,l=r.maxY;o<=l;++o)n([t,s,o])}forEachTileCoordParentTileRange(e,t,n,r){let s,a,o,l=null,c=e[0]-1;for(this.zoomFactor_===2?(a=e[1],o=e[2]):l=this.getTileCoordExtent(e,r);c>=this.minZoom;){if(this.zoomFactor_===2?(a=Math.floor(a/2),o=Math.floor(o/2),s=_i(a,a,o,o,n)):s=this.getTileRangeForExtentAndZ(l,c,n),t(c,s))return!0;--c}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(e){return this.origin_?this.origin_:this.origins_[e]}getResolution(e){return this.resolutions_[e]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(e,t,n){if(e[0]<this.maxZoom){if(this.zoomFactor_===2){const s=e[1]*2,a=e[2]*2;return _i(s,s+1,a,a+1,t)}const r=this.getTileCoordExtent(e,n||this.tmpExtent_);return this.getTileRangeForExtentAndZ(r,e[0]+1,t)}return null}getTileRangeForTileCoordAndZ(e,t,n){if(t>this.maxZoom||t<this.minZoom)return null;const r=e[0],s=e[1],a=e[2];if(t===r)return _i(s,a,s,a,n);if(this.zoomFactor_){const l=Math.pow(this.zoomFactor_,t-r),c=Math.floor(s*l),h=Math.floor(a*l);if(t<r)return _i(c,c,h,h,n);const u=Math.floor(l*(s+1))-1,d=Math.floor(l*(a+1))-1;return _i(c,u,h,d,n)}const o=this.getTileCoordExtent(e,this.tmpExtent_);return this.getTileRangeForExtentAndZ(o,t,n)}getTileRangeForExtentAndZ(e,t,n){this.getTileCoordForXYAndZ_(e[0],e[3],t,!1,vi);const r=vi[1],s=vi[2];this.getTileCoordForXYAndZ_(e[2],e[1],t,!0,vi);const a=vi[1],o=vi[2];return _i(r,a,s,o,n)}getTileCoordCenter(e){const t=this.getOrigin(e[0]),n=this.getResolution(e[0]),r=Nn(this.getTileSize(e[0]),this.tmpSize_);return[t[0]+(e[1]+.5)*r[0]*n,t[1]-(e[2]+.5)*r[1]*n]}getTileCoordExtent(e,t){const n=this.getOrigin(e[0]),r=this.getResolution(e[0]),s=Nn(this.getTileSize(e[0]),this.tmpSize_),a=n[0]+e[1]*s[0]*r,o=n[1]-(e[2]+1)*s[1]*r,l=a+s[0]*r,c=o+s[1]*r;return sr(a,o,l,c,t)}getTileCoordForCoordAndResolution(e,t,n){return this.getTileCoordForXYAndResolution_(e[0],e[1],t,!1,n)}getTileCoordForXYAndResolution_(e,t,n,r,s){const a=this.getZForResolution(n),o=n/this.getResolution(a),l=this.getOrigin(a),c=Nn(this.getTileSize(a),this.tmpSize_);let h=o*(e-l[0])/n/c[0],u=o*(l[1]-t)/n/c[1];return r?(h=Wr(h,bn)-1,u=Wr(u,bn)-1):(h=kr(h,bn),u=kr(u,bn)),Rl(a,h,u,s)}getTileCoordForXYAndZ_(e,t,n,r,s){const a=this.getOrigin(n),o=this.getResolution(n),l=Nn(this.getTileSize(n),this.tmpSize_);let c=(e-a[0])/o/l[0],h=(a[1]-t)/o/l[1];return r?(c=Wr(c,bn)-1,h=Wr(h,bn)-1):(c=kr(c,bn),h=kr(h,bn)),Rl(n,c,h,s)}getTileCoordForCoordAndZ(e,t,n){return this.getTileCoordForXYAndZ_(e[0],e[1],t,!1,n)}getTileCoordResolution(e){return this.resolutions_[e[0]]}getTileSize(e){return this.tileSize_?this.tileSize_:this.tileSizes_[e]}getFullTileRange(e){return this.fullTileRanges_?this.fullTileRanges_[e]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,e):null}getZForResolution(e,t){const n=mo(this.resolutions_,e,t||0);return gt(n,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(e,t){return wh(t,0,t.length,2,this.getTileCoordExtent(e))}calculateTileRanges_(e){const t=this.resolutions_.length,n=new Array(t);for(let r=this.minZoom;r<t;++r)n[r]=this.getTileRangeForExtentAndZ(e,r);this.fullTileRanges_=n}}const Yh=_m;function qh(i){let e=i.getDefaultTileGrid();return e||(e=Mm(i),i.setDefaultTileGrid(e)),e}function vm(i,e,t){const n=e[0],r=i.getTileCoordCenter(e),s=Oo(t);if(!_o(s,r)){const a=mt(s),o=Math.ceil((s[0]-r[0])/a);return r[0]+=a*o,i.getTileCoordForCoordAndZ(r,n)}return e}function xm(i,e,t,n){n=n!==void 0?n:"top-left";const r=Kh(i,e,t);return new Yh({extent:i,origin:rd(i,n),resolutions:r,tileSize:t})}function Em(i){const e=i||{},t=e.extent||Wt("EPSG:3857").getExtent(),n={extent:t,minZoom:e.minZoom,tileSize:e.tileSize,resolutions:Kh(t,e.maxZoom,e.tileSize,e.maxResolution)};return new Yh(n)}function Kh(i,e,t,n){e=e!==void 0?e:xf,t=Nn(t!==void 0?t:bo);const r=ln(i),s=mt(i);n=n>0?n:Math.max(s/t[0],r/t[1]);const a=e+1,o=new Array(a);for(let l=0;l<a;++l)o[l]=n/Math.pow(2,l);return o}function Mm(i,e,t,n){const r=Oo(i);return xm(r,e,t,n)}function Oo(i){i=Wt(i);let e=i.getExtent();if(!e){const t=180*Tr.degrees/i.getMetersPerUnit();e=sr(-t,-t,t,t)}return e}class ym extends Vf{constructor(e){super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate}),this.on,this.once,this.un,this.opaque_=e.opaque!==void 0?e.opaque:!1,this.tilePixelRatio_=e.tilePixelRatio!==void 0?e.tilePixelRatio:1,this.tileGrid=e.tileGrid!==void 0?e.tileGrid:null;const t=[256,256];this.tileGrid&&Nn(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),t),this.tileCache=new kh(e.cacheSize||0),this.tmpSize=[0,0],this.key_=e.key||"",this.tileOptions={transition:e.transition,interpolate:e.interpolate},this.zDirection=e.zDirection?e.zDirection:0}canExpireCache(){return this.tileCache.canExpireCache()}expireCache(e,t){const n=this.getTileCacheForProjection(e);n&&n.expireCache(t)}forEachLoadedTile(e,t,n,r){const s=this.getTileCacheForProjection(e);if(!s)return!1;let a=!0,o,l,c;for(let h=n.minX;h<=n.maxX;++h)for(let u=n.minY;u<=n.maxY;++u)l=Bs(t,h,u),c=!1,s.containsKey(l)&&(o=s.get(l),c=o.getState()===_e.LOADED,c&&(c=r(o)!==!1)),c||(a=!1);return a}getGutterForProjection(e){return 0}getKey(){return this.key_}setKey(e){this.key_!==e&&(this.key_=e,this.changed())}getOpaque(e){return this.opaque_}getResolutions(e){const t=e?this.getTileGridForProjection(e):this.tileGrid;return t?t.getResolutions():null}getTile(e,t,n,r,s){return Qe()}getTileGrid(){return this.tileGrid}getTileGridForProjection(e){return this.tileGrid?this.tileGrid:qh(e)}getTileCacheForProjection(e){const t=this.getProjection();return qe(t===null||Oi(t,e),"A VectorTile source can only be rendered if it has a projection compatible with the view projection."),this.tileCache}getTilePixelRatio(e){return this.tilePixelRatio_}getTilePixelSize(e,t,n){const r=this.getTileGridForProjection(n),s=this.getTilePixelRatio(t),a=Nn(r.getTileSize(e),this.tmpSize);return s==1?a:of(a,s,this.tmpSize)}getTileCoordForTileUrlFunction(e,t){t=t!==void 0?t:this.getProjection();const n=this.getTileGridForProjection(t);return this.getWrapX()&&t.isGlobal()&&(e=vm(n,e,t)),tm(e,n)?e:null}clear(){this.tileCache.clear()}refresh(){this.clear(),super.refresh()}updateCacheSize(e,t){const n=this.getTileCacheForProjection(t);e>n.highWaterMark&&(n.highWaterMark=e)}useTile(e,t,n,r){}}class Sm extends Wn{constructor(e,t){super(e),this.tile=t}}const Tm=ym;function Am(i,e){const t=/\{z\}/g,n=/\{x\}/g,r=/\{y\}/g,s=/\{-y\}/g;return function(a,o,l){if(a)return i.replace(t,a[0].toString()).replace(n,a[1].toString()).replace(r,a[2].toString()).replace(s,function(){const c=a[0],h=e.getFullTileRange(c);return qe(h,"The {-y} placeholder requires a tile grid with extent"),(h.getHeight()-a[2]-1).toString()})}}function Rm(i,e){const t=i.length,n=new Array(t);for(let r=0;r<t;++r)n[r]=Am(i[r],e);return bm(n)}function bm(i){return i.length===1?i[0]:function(e,t,n){if(!e)return;const r=em(e),s=Ki(r,i.length);return i[s](e,t,n)}}function wm(i){const e=[];let t=/\{([a-z])-([a-z])\}/.exec(i);if(t){const n=t[1].charCodeAt(0),r=t[2].charCodeAt(0);let s;for(s=n;s<=r;++s)e.push(i.replace(t[0],String.fromCharCode(s)));return e}if(t=/\{(\d+)-(\d+)\}/.exec(i),t){const n=parseInt(t[2],10);for(let r=parseInt(t[1],10);r<=n;r++)e.push(i.replace(t[0],r.toString()));return e}return e.push(i),e}class zo extends Tm{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===zo.prototype.tileUrlFunction,this.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(this.tileUrlFunction=e.tileUrlFunction),this.urls=null,e.urls?this.setUrls(e.urls):e.url&&this.setUrl(e.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(e){const t=e.target,n=wt(t),r=t.getState();let s;r==_e.LOADING?(this.tileLoadingKeys_[n]=!0,s=ia.TILELOADSTART):n in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[n],s=r==_e.ERROR?ia.TILELOADERROR:r==_e.LOADED?ia.TILELOADEND:void 0),s!=null&&this.dispatchEvent(new Sm(s,t))}setTileLoadFunction(e){this.tileCache.clear(),this.tileLoadFunction=e,this.changed()}setTileUrlFunction(e,t){this.tileUrlFunction=e,this.tileCache.pruneExceptNewestZ(),typeof t<"u"?this.setKey(t):this.changed()}setUrl(e){const t=wm(e);this.urls=t,this.setUrls(t)}setUrls(e){this.urls=e;const t=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(Rm(e,this.tileGrid),t):this.setKey(t)}tileUrlFunction(e,t,n){}useTile(e,t,n){const r=Bs(e,t,n);this.tileCache.containsKey(r)&&this.tileCache.get(r)}}const Cm=zo;class Lm extends Cm{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:Pm,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate!==void 0?e.interpolate:!0,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,this.tileClass=e.tileClass!==void 0?e.tileClass:Nh,this.tileCacheForProjection={},this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}canExpireCache(){if(this.tileCache.canExpireCache())return!0;for(const e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1}expireCache(e,t){const n=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==n?t:{});for(const r in this.tileCacheForProjection){const s=this.tileCacheForProjection[r];s.expireCache(s==n?t:{})}}getGutterForProjection(e){return this.getProjection()&&e&&!Oi(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=":disable-interpolation"),e}getOpaque(e){return this.getProjection()&&e&&!Oi(this.getProjection(),e)?!1:super.getOpaque(e)}getTileGridForProjection(e){const t=this.getProjection();if(this.tileGrid&&(!t||Oi(t,e)))return this.tileGrid;const n=wt(e);return n in this.tileGridForProjection||(this.tileGridForProjection[n]=qh(e)),this.tileGridForProjection[n]}getTileCacheForProjection(e){const t=this.getProjection();if(!t||Oi(t,e))return this.tileCache;const n=wt(e);return n in this.tileCacheForProjection||(this.tileCacheForProjection[n]=new kh(this.tileCache.highWaterMark)),this.tileCacheForProjection[n]}createTile_(e,t,n,r,s,a){const o=[e,t,n],l=this.getTileCoordForTileUrlFunction(o,s),c=l?this.tileUrlFunction(l,r,s):void 0,h=new this.tileClass(o,c!==void 0?_e.IDLE:_e.EMPTY,c!==void 0?c:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return h.key=a,h.addEventListener(Oe.CHANGE,this.handleTileChange.bind(this)),h}getTile(e,t,n,r,s){const a=this.getProjection();if(!a||!s||Oi(a,s))return this.getTileInternal(e,t,n,r,a||s);const o=this.getTileCacheForProjection(s),l=[e,t,n];let c;const h=Vh(l);o.containsKey(h)&&(c=o.get(h));const u=this.getKey();if(c&&c.key==u)return c;const d=this.getTileGridForProjection(a),m=this.getTileGridForProjection(s),g=this.getTileCoordForTileUrlFunction(l,s),_=new qa(a,d,s,m,l,g,this.getTilePixelRatio(r),this.getGutter(),(p,f,y,v)=>this.getTileInternal(p,f,y,v,a),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.getInterpolate());return _.key=u,c?(_.interimTile=c,_.refreshInterimChain(),o.replace(h,_)):o.set(h,_),_}getTileInternal(e,t,n,r,s){let a=null;const o=Bs(e,t,n),l=this.getKey();if(!this.tileCache.containsKey(o))a=this.createTile_(e,t,n,r,s,l),this.tileCache.set(o,a);else if(a=this.tileCache.get(o),a.key!=l){const c=a;a=this.createTile_(e,t,n,r,s,l),c.getState()==_e.IDLE?a.interimTile=c.interimTile:a.interimTile=c,a.refreshInterimChain(),this.tileCache.replace(o,a)}return a}setRenderReprojectionEdges(e){if(this.renderReprojectionEdges_!=e){this.renderReprojectionEdges_=e;for(const t in this.tileCacheForProjection)this.tileCacheForProjection[t].clear();this.changed()}}setTileGridForProjection(e,t){const n=Wt(e);if(n){const r=wt(n);r in this.tileGridForProjection||(this.tileGridForProjection[r]=t)}}clear(){super.clear();for(const e in this.tileCacheForProjection)this.tileCacheForProjection[e].clear()}}function Pm(i,e){i.getImage().src=e}const Im=Lm;class Dm extends Im{constructor(e){e=e||{};const t=e.projection!==void 0?e.projection:"EPSG:3857",n=e.tileGrid!==void 0?e.tileGrid:Em({extent:Oo(t),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:e.opaque,projection:t,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:n,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0}getGutter(){return this.gutter_}}const Um=Dm,Nm='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';class Fm extends Um{constructor(e){e=e||{};let t;e.attributions!==void 0?t=e.attributions:t=[Nm];const n=e.crossOrigin!==void 0?e.crossOrigin:"anonymous",r=e.url!==void 0?e.url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png";super({attributions:t,attributionsCollapsible:!1,cacheSize:e.cacheSize,crossOrigin:n,interpolate:e.interpolate,maxZoom:e.maxZoom!==void 0?e.maxZoom:19,opaque:e.opaque!==void 0?e.opaque:!0,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,transition:e.transition,url:r,wrapX:e.wrapX,zDirection:e.zDirection})}}const Om=Fm;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="156",zm=0,Ll=1,Gm=2,Zh=1,Bm=2,En=3,kn=0,Lt=1,yn=2,Gn=0,ji=1,Pl=2,Il=3,Dl=4,Hm=5,Bi=100,Vm=101,km=102,Ul=103,Nl=104,Wm=200,Xm=201,Ym=202,qm=203,jh=204,$h=205,Km=206,Zm=207,jm=208,$m=209,Jm=210,Qm=0,eg=1,tg=2,Ka=3,ng=4,ig=5,rg=6,sg=7,Jh=0,ag=1,og=2,Bn=0,lg=1,cg=2,hg=3,ug=4,dg=5,Qh=300,tr=301,nr=302,Za=303,ja=304,Hs=306,$a=1e3,en=1001,Ja=1002,Rt=1003,Fl=1004,ra=1005,Vt=1006,fg=1007,br=1008,Hn=1009,pg=1010,mg=1011,Bo=1012,eu=1013,Fn=1014,On=1015,wr=1016,tu=1017,nu=1018,si=1020,gg=1021,tn=1023,_g=1024,vg=1025,ai=1026,ir=1027,xg=1028,iu=1029,Eg=1030,ru=1031,su=1033,sa=33776,aa=33777,oa=33778,la=33779,Ol=35840,zl=35841,Gl=35842,Bl=35843,Mg=36196,Hl=37492,Vl=37496,kl=37808,Wl=37809,Xl=37810,Yl=37811,ql=37812,Kl=37813,Zl=37814,jl=37815,$l=37816,Jl=37817,Ql=37818,ec=37819,tc=37820,nc=37821,ca=36492,ic=36494,rc=36495,yg=36283,sc=36284,ac=36285,oc=36286,au=3e3,oi=3001,Sg=3200,Tg=3201,ou=0,Ag=1,li="",Ze="srgb",hn="srgb-linear",Vs="display-p3",ha=7680,Rg=519,bg=512,wg=513,Cg=514,Lg=515,Pg=516,Ig=517,Dg=518,Ug=519,lc=35044,cc="300 es",Qa=1035,Tn=2e3,ws=2001;class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,eo=180/Math.PI;function Fr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function Ng(i,e){return(i%e+e)%e}function da(i,e,t){return(1-t)*i+t*e}function hc(i){return(i&i-1)===0&&i!==0}function to(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ur(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,n,r,s,a,o,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=r[0],p=r[3],f=r[6],y=r[1],v=r[4],x=r[7],A=r[2],w=r[5],b=r[8];return s[0]=a*_+o*y+l*A,s[3]=a*p+o*v+l*w,s[6]=a*f+o*x+l*b,s[1]=c*_+h*y+u*A,s[4]=c*p+h*v+u*w,s[7]=c*f+h*x+u*b,s[2]=d*_+m*y+g*A,s[5]=d*p+m*v+g*w,s[8]=d*f+m*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,m=c*s-a*l,g=t*u+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new Ie;function lu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fg(){const i=Cs("canvas");return i.style.display="block",i}const uc={};function xr(i){i in uc||(uc[i]=!0,console.warn(i))}function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Og=new Ie().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),zg=new Ie().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Gg(i){return i.convertSRGBToLinear().applyMatrix3(zg)}function Bg(i){return i.applyMatrix3(Og).convertLinearToSRGB()}const Hg={[hn]:i=>i,[Ze]:i=>i.convertSRGBToLinear(),[Vs]:Gg},Vg={[hn]:i=>i,[Ze]:i=>i.convertLinearToSRGB(),[Vs]:Bg},Yt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return hn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Hg[e],r=Vg[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let xi;class cu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=Cs("canvas")),xi.width=e.width,xi.height=e.height;const n=xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$i(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kg=0;class hu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Fr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ma(r[a].image)):s.push(ma(r[a]))}else s=ma(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wg=0;class Pt extends or{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=en,r=en,s=Vt,a=br,o=tn,l=Hn,c=Pt.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Fr(),this.name="",this.source=new hu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===oi?Ze:li),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $a:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $a:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ze?oi:au}set encoding(e){xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===oi?Ze:li}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Qh;Pt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(m+1)/2,A=(f+1)/2,w=(h+d)/4,b=(u+_)/4,U=(g+p)/4;return v>x&&v>A?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=b/n):x>A?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=w/r,s=U/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=b/s,r=U/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xg extends or{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===oi?Ze:li),this.texture=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Xg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uu extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yg extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let p=1-o;const f=l*d+c*m+h*g+u*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const A=Math.sqrt(v),w=Math.atan2(A,f*y);p=Math.sin(p*w)/A,o=Math.sin(o*w)/A}const x=o*y;if(l=l*p+d*x,c=c*p+m*x,h=h*p+g*x,u=u*p+_*x,p===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-o*m,e[t+2]=c*g+h*m+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,h=l*n+o*t-s*r,u=l*r+s*n-a*t,d=-s*t-a*n-o*r;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new L,dc=new Or;class zr{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ei.copy(e.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)pn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(pn)}else r.boundingBox===null&&r.computeBoundingBox(),Ei.copy(r.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),Zr.subVectors(this.max,dr),Mi.subVectors(e.a,dr),yi.subVectors(e.b,dr),Si.subVectors(e.c,dr),wn.subVectors(yi,Mi),Cn.subVectors(Si,yi),Zn.subVectors(Mi,Si);let t=[0,-wn.z,wn.y,0,-Cn.z,Cn.y,0,-Zn.z,Zn.y,wn.z,0,-wn.x,Cn.z,0,-Cn.x,Zn.z,0,-Zn.x,-wn.y,wn.x,0,-Cn.y,Cn.x,0,-Zn.y,Zn.x,0];return!_a(t,Mi,yi,Si,Zr)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,Mi,yi,Si,Zr))?!1:(jr.crossVectors(wn,Cn),t=[jr.x,jr.y,jr.z],_a(t,Mi,yi,Si,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new L,new L,new L,new L,new L,new L,new L,new L],pn=new L,Ei=new zr,Mi=new L,yi=new L,Si=new L,wn=new L,Cn=new L,Zn=new L,dr=new L,Zr=new L,jr=new L,jn=new L;function _a(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){jn.fromArray(i,s);const o=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const qg=new zr,fr=new L,va=new L;class ks{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(fr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(va)),this.expandByPoint(fr.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new L,xa=new L,$r=new L,Ln=new L,Ea=new L,Jr=new L,Ma=new L;class du{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xa.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(xa);const s=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=Ln.dot(this.direction),l=-Ln.dot($r),c=Ln.lengthSq(),h=Math.abs(1-a*a);let u,d,m,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(xa).addScaledVector($r,d),m}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,r,s){Ea.subVectors(t,e),Jr.subVectors(n,e),Ma.crossVectors(Ea,Jr);let a=this.direction.dot(Ma),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const l=o*this.direction.dot(Jr.crossVectors(Ln,Jr));if(l<0)return null;const c=o*this.direction.dot(Ea.cross(Ln));if(c<0||l+c>a)return null;const h=-o*Ln.dot(Ma);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,r,s,a,o,l,c,h,u,d,m,g,_,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,d,m,g,_,p)}set(e,t,n,r,s,a,o,l,c,h,u,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ti.setFromMatrixColumn(e,0).length(),s=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kg,e,Zg)}lookAt(e,t,n){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Pn.crossVectors(n,Ut),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Pn.crossVectors(n,Ut)),Pn.normalize(),Qr.crossVectors(Ut,Pn),r[0]=Pn.x,r[4]=Qr.x,r[8]=Ut.x,r[1]=Pn.y,r[5]=Qr.y,r[9]=Ut.y,r[2]=Pn.z,r[6]=Qr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],y=n[3],v=n[7],x=n[11],A=n[15],w=r[0],b=r[4],U=r[8],M=r[12],R=r[1],Z=r[5],q=r[9],P=r[13],B=r[2],V=r[6],j=r[10],z=r[14],Y=r[3],$=r[7],K=r[11],G=r[15];return s[0]=a*w+o*R+l*B+c*Y,s[4]=a*b+o*Z+l*V+c*$,s[8]=a*U+o*q+l*j+c*K,s[12]=a*M+o*P+l*z+c*G,s[1]=h*w+u*R+d*B+m*Y,s[5]=h*b+u*Z+d*V+m*$,s[9]=h*U+u*q+d*j+m*K,s[13]=h*M+u*P+d*z+m*G,s[2]=g*w+_*R+p*B+f*Y,s[6]=g*b+_*Z+p*V+f*$,s[10]=g*U+_*q+p*j+f*K,s[14]=g*M+_*P+p*z+f*G,s[3]=y*w+v*R+x*B+A*Y,s[7]=y*b+v*Z+x*V+A*$,s[11]=y*U+v*q+x*j+A*K,s[15]=y*M+v*P+x*z+A*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*m-n*l*m)+_*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*h-s*l*h)+p*(+t*c*u-t*o*m-s*a*u+n*a*m+s*o*h-n*c*h)+f*(-r*o*h-t*l*u+t*o*d+r*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],y=u*p*c-_*d*c+_*l*m-o*p*m-u*l*f+o*d*f,v=g*d*c-h*p*c-g*l*m+a*p*m+h*l*f-a*d*f,x=h*_*c-g*u*c+g*o*m-a*_*m-h*o*f+a*u*f,A=g*u*l-h*_*l-g*o*d+a*_*d+h*o*p-a*u*p,w=t*y+n*v+r*x+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=y*b,e[1]=(_*d*s-u*p*s-_*r*m+n*p*m+u*r*f-n*d*f)*b,e[2]=(o*p*s-_*l*s+_*r*c-n*p*c-o*r*f+n*l*f)*b,e[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*m-n*l*m)*b,e[4]=v*b,e[5]=(h*p*s-g*d*s+g*r*m-t*p*m-h*r*f+t*d*f)*b,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*f-t*l*f)*b,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*m+t*l*m)*b,e[8]=x*b,e[9]=(g*u*s-h*_*s-g*n*m+t*_*m+h*n*f-t*u*f)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*f+t*o*f)*b,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*m-t*o*m)*b,e[12]=A*b,e[13]=(h*_*r-g*u*r+g*n*d-t*_*d-h*n*p+t*u*p)*b,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*p-t*o*p)*b,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,m=s*h,g=s*u,_=a*h,p=a*u,f=o*u,y=l*c,v=l*h,x=l*u,A=n.x,w=n.y,b=n.z;return r[0]=(1-(_+f))*A,r[1]=(m+x)*A,r[2]=(g-v)*A,r[3]=0,r[4]=(m-x)*w,r[5]=(1-(d+f))*w,r[6]=(p+y)*w,r[7]=0,r[8]=(g+v)*b,r[9]=(p-y)*b,r[10]=(1-(d+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const a=Ti.set(r[4],r[5],r[6]).length(),o=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,h=1/a,u=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=h,qt.elements[5]*=h,qt.elements[6]*=h,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Tn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let m,g;if(o===Tn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ws)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Tn){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),d=(t+e)*c,m=(n+r)*h;let g,_;if(o===Tn)g=(a+s)*u,_=-2*u;else if(o===ws)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new L,qt=new ot,Kg=new L(0,0,0),Zg=new L(1,1,1),Pn=new L,Qr=new L,Ut=new L,fc=new ot,pc=new Or;class Ws{constructor(e=0,t=0,n=0,r=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jg=0;const mc=new L,Ai=new Or,gn=new ot,es=new L,pr=new L,$g=new L,Jg=new Or,gc=new L(1,0,0),_c=new L(0,1,0),vc=new L(0,0,1),Qg={type:"added"},e_={type:"removed"};class xt extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new L,t=new Ws,n=new Or,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ie}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(_c,e)}rotateZ(e){return this.rotateOnAxis(vc,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(_c,e)}translateZ(e){return this.translateOnAxis(vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(pr,es,this.up):gn.lookAt(es,pr,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(gn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,$g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}xt.DEFAULT_UP=new L(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new L,_n=new L,ya=new L,vn=new L,Ri=new L,bi=new L,xc=new L,Sa=new L,Ta=new L,Aa=new L;let ts=!1;class Jt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kt.subVectors(r,t),_n.subVectors(n,t),ya.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(_n),l=Kt.dot(ya),c=_n.dot(_n),h=_n.dot(ya),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vn),vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,n,r,s,a,o,l){return ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ts=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,vn),l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),_n.subVectors(e,t),Kt.cross(_n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Kt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ts=!0),Jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ri.subVectors(r,n),bi.subVectors(s,n),Sa.subVectors(e,n);const l=Ri.dot(Sa),c=bi.dot(Sa);if(l<=0&&c<=0)return t.copy(n);Ta.subVectors(e,r);const h=Ri.dot(Ta),u=bi.dot(Ta);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ri,a);Aa.subVectors(e,s);const m=Ri.dot(Aa),g=bi.dot(Aa);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(bi,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return xc.subVectors(s,r),o=(u-h)/(u-h+(m-g)),t.copy(r).addScaledVector(xc,o);const f=1/(p+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(Ri,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let t_=0;class lr extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=ji,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=$h,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ha,this.stencilZFail=ha,this.stencilZPass=ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zt={h:0,s:0,l:0},ns={h:0,s:0,l:0};function Ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Yt.workingColorSpace){if(e=Ng(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ra(a,s,e+1/3),this.g=Ra(a,s,e),this.b=Ra(a,s,e-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){const n=pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return Yt.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Ct(Mt.r*255,0,255))*65536+Math.round(Ct(Mt.g*255,0,255))*256+Math.round(Ct(Mt.b*255,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,s=Mt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Ze){Yt.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==Ze?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Zt),Zt.h+=e,Zt.s+=t,Zt.l+=n,this.setHSL(Zt.h,Zt.s,Zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zt),e.getHSL(ns);const n=da(Zt.h,ns.h,t),r=da(Zt.s,ns.s,t),s=da(Zt.l,ns.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ge;Ge.NAMES=pu;class Ji extends lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new L,is=new Be;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lc,this.updateRange={offset:0,count:-1},this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ur(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class mu extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gu extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let n_=0;const zt=new ot,ba=new xt,wi=new L,Nt=new zr,mr=new zr,pt=new L;class un extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lu(e)?gu:mu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Nt.min,mr.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,mr.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(mr.min),Nt.expandByPoint(mr.max))}Nt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pt.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(e,c),pt.add(wi)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new L,h[R]=new L;const u=new L,d=new L,m=new L,g=new Be,_=new Be,p=new Be,f=new L,y=new L;function v(R,Z,q){u.fromArray(r,R*3),d.fromArray(r,Z*3),m.fromArray(r,q*3),g.fromArray(a,R*2),_.fromArray(a,Z*2),p.fromArray(a,q*2),d.sub(u),m.sub(u),_.sub(g),p.sub(g);const P=1/(_.x*p.y-p.x*_.y);isFinite(P)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(P),y.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(P),c[R].add(f),c[Z].add(f),c[q].add(f),h[R].add(y),h[Z].add(y),h[q].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let R=0,Z=x.length;R<Z;++R){const q=x[R],P=q.start,B=q.count;for(let V=P,j=P+B;V<j;V+=3)v(n[V+0],n[V+1],n[V+2])}const A=new L,w=new L,b=new L,U=new L;function M(R){b.fromArray(s,R*3),U.copy(b);const Z=c[R];A.copy(Z),A.sub(b.multiplyScalar(b.dot(Z))).normalize(),w.crossVectors(U,Z);const P=w.dot(h[R])<0?-1:1;l[R*4]=A.x,l[R*4+1]=A.y,l[R*4+2]=A.z,l[R*4+3]=P}for(let R=0,Z=x.length;R<Z;++R){const q=x[R],P=q.start,B=q.count;for(let V=P,j=P+B;V<j;V+=3)M(n[V+0]),M(n[V+1]),M(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new on(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ec=new ot,$n=new du,rs=new ks,Mc=new L,Ci=new L,Li=new L,Pi=new L,wa=new L,ss=new L,as=new Be,os=new Be,ls=new Be,yc=new L,Sc=new L,Tc=new L,cs=new L,hs=new L;class Ft extends xt{constructor(e=new un,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(wa.fromBufferAttribute(u,e),a?ss.addScaledVector(wa,h):ss.addScaledVector(wa.sub(t),h))}t.add(ss)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(s),$n.copy(e.ray).recast(e.near),!(rs.containsPoint($n.origin)===!1&&($n.intersectSphere(rs,Mc)===null||$n.origin.distanceToSquared(Mc)>(e.far-e.near)**2))&&(Ec.copy(s).invert(),$n.copy(e.ray).applyMatrix4(Ec),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=y,A=v;x<A;x+=3){const w=o.getX(x),b=o.getX(x+1),U=o.getX(x+2);r=us(this,f,e,n,c,h,u,w,b,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=o.getX(p),v=o.getX(p+1),x=o.getX(p+2);r=us(this,a,e,n,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=y,A=v;x<A;x+=3){const w=x,b=x+1,U=x+2;r=us(this,f,e,n,c,h,u,w,b,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=p,v=p+1,x=p+2;r=us(this,a,e,n,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function i_(i,e,t,n,r,s,a,o){let l;if(e.side===Lt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===kn,o),l===null)return null;hs.copy(o),hs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(hs);return c<t.near||c>t.far?null:{distance:c,point:hs.clone(),object:i}}function us(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ci),i.getVertexPosition(l,Li),i.getVertexPosition(c,Pi);const h=i_(i,e,t,n,Ci,Li,Pi,cs);if(h){r&&(as.fromBufferAttribute(r,o),os.fromBufferAttribute(r,l),ls.fromBufferAttribute(r,c),h.uv=Jt.getInterpolation(cs,Ci,Li,Pi,as,os,ls,new Be)),s&&(as.fromBufferAttribute(s,o),os.fromBufferAttribute(s,l),ls.fromBufferAttribute(s,c),h.uv1=Jt.getInterpolation(cs,Ci,Li,Pi,as,os,ls,new Be),h.uv2=h.uv1),a&&(yc.fromBufferAttribute(a,o),Sc.fromBufferAttribute(a,l),Tc.fromBufferAttribute(a,c),h.normal=Jt.getInterpolation(cs,Ci,Li,Pi,yc,Sc,Tc,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};Jt.getNormal(Ci,Li,Pi,u.normal),h.face=u}return h}class hi extends un{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(_,p,f,y,v,x,A,w,b,U,M){const R=x/b,Z=A/U,q=x/2,P=A/2,B=w/2,V=b+1,j=U+1;let z=0,Y=0;const $=new L;for(let K=0;K<j;K++){const G=K*Z-P;for(let H=0;H<V;H++){const re=H*R-q;$[_]=re*y,$[p]=G*v,$[f]=B,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[f]=w>0?1:-1,h.push($.x,$.y,$.z),u.push(H/b),u.push(1-K/U),z+=1}}for(let K=0;K<U;K++)for(let G=0;G<b;G++){const H=d+G+V*K,re=d+G+V*(K+1),ee=d+(G+1)+V*(K+1),ne=d+(G+1)+V*K;l.push(H,re,ne),l.push(re,ee,ne),Y+=6}o.addGroup(m,Y,M),m+=Y,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=rr(i[t]);for(const r in n)e[r]=n[r]}return e}function r_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _u(i){return i.getRenderTarget()===null?i.outputColorSpace:hn}const s_={clone:rr,merge:At};var a_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a_,this.fragmentShader=o_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=r_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vu extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends vu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Di=1;class l_ extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new kt(Ii,Di,e,t);r.layers=this.layers,this.add(r);const s=new kt(Ii,Di,e,t);s.layers=this.layers,this.add(s);const a=new kt(Ii,Di,e,t);a.layers=this.layers,this.add(a);const o=new kt(Ii,Di,e,t);o.layers=this.layers,this.add(o);const l=new kt(Ii,Di,e,t);l.layers=this.layers,this.add(l);const c=new kt(Ii,Di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.xr.enabled;e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class xu extends Pt{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:tr,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c_ extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===oi?Ze:li),this.texture=new xu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hi(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Gn});s.uniforms.tEquirect.value=t;const a=new Ft(r,s),o=t.minFilter;return t.minFilter===br&&(t.minFilter=Vt),new l_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ca=new L,h_=new L,u_=new Ie;class ei{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ca.subVectors(n,t).cross(h_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ca),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||u_.getNormalMatrix(e),r=this.coplanarPoint(Ca).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new ks,ds=new L;class Ho{constructor(e=new ei,t=new ei,n=new ei,r=new ei,s=new ei,a=new ei){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],p=r[11],f=r[12],y=r[13],v=r[14],x=r[15];if(n[0].setComponents(l-s,d-c,p-m,x-f).normalize(),n[1].setComponents(l+s,d+c,p+m,x+f).normalize(),n[2].setComponents(l+a,d+h,p+g,x+y).normalize(),n[3].setComponents(l-a,d-h,p-g,x-y).normalize(),n[4].setComponents(l-o,d-u,p-_,x-v).normalize(),t===Tn)n[5].setComponents(l+o,d+u,p+_,x+v).normalize();else if(t===ws)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ds.x=r.normal.x>0?e.max.x:e.min.x,ds.y=r.normal.y>0?e.max.y:e.min.y,ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function d_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,d=c.usage,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,m=h.updateRange;i.bindBuffer(u,c),m.count===-1?i.bufferSubData(u,0,d):(t?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,r(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class Cr extends un{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const y=f*d-a;for(let v=0;v<c;v++){const x=v*u-s;g.push(x,-y,0),_.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const v=y+c*f,x=y+c*(f+1),A=y+1+c*(f+1),w=y+1+c*f;m.push(v,x,w),m.push(x,A,w)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}var f_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p_=`#ifdef USE_ALPHAHASH
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
#endif`,m_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,v_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,E_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T_=`#ifdef USE_IRIDESCENCE
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
#endif`,A_=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,U_=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,N_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,F_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H_="gl_FragColor = linearToOutputTexel( gl_FragColor );",V_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,W_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,K_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J_=`#ifdef USE_GRADIENTMAP
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
}`,Q_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,e0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,r0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,h0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,u0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,p0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M0=`#if defined( USE_POINTS_UV )
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
#endif`,y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,R0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,C0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
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
#endif`,U0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,J0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iv=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rv=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sv=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uv=`uniform sampler2D t2D;
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
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,_v=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,vv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,xv=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tv=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Av=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Rv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,bv=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Cv=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Lv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pv=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Dv=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Uv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Nv=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ov=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zv=`uniform float size;
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
}`,Gv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Hv=`uniform vec3 color;
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
}`,Vv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,kv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Le={alphahash_fragment:f_,alphahash_pars_fragment:p_,alphamap_fragment:m_,alphamap_pars_fragment:g_,alphatest_fragment:__,alphatest_pars_fragment:v_,aomap_fragment:x_,aomap_pars_fragment:E_,begin_vertex:M_,beginnormal_vertex:y_,bsdfs:S_,iridescence_fragment:T_,bumpmap_pars_fragment:A_,clipping_planes_fragment:R_,clipping_planes_pars_fragment:b_,clipping_planes_pars_vertex:w_,clipping_planes_vertex:C_,color_fragment:L_,color_pars_fragment:P_,color_pars_vertex:I_,color_vertex:D_,common:U_,cube_uv_reflection_fragment:N_,defaultnormal_vertex:F_,displacementmap_pars_vertex:O_,displacementmap_vertex:z_,emissivemap_fragment:G_,emissivemap_pars_fragment:B_,colorspace_fragment:H_,colorspace_pars_fragment:V_,envmap_fragment:k_,envmap_common_pars_fragment:W_,envmap_pars_fragment:X_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:r0,envmap_vertex:q_,fog_vertex:K_,fog_pars_vertex:Z_,fog_fragment:j_,fog_pars_fragment:$_,gradientmap_pars_fragment:J_,lightmap_fragment:Q_,lightmap_pars_fragment:e0,lights_lambert_fragment:t0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:s0,lights_toon_pars_fragment:a0,lights_phong_fragment:o0,lights_phong_pars_fragment:l0,lights_physical_fragment:c0,lights_physical_pars_fragment:h0,lights_fragment_begin:u0,lights_fragment_maps:d0,lights_fragment_end:f0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:v0,map_pars_fragment:x0,map_particle_fragment:E0,map_particle_pars_fragment:M0,metalnessmap_fragment:y0,metalnessmap_pars_fragment:S0,morphcolor_vertex:T0,morphnormal_vertex:A0,morphtarget_pars_vertex:R0,morphtarget_vertex:b0,normal_fragment_begin:w0,normal_fragment_maps:C0,normal_pars_fragment:L0,normal_pars_vertex:P0,normal_vertex:I0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:U0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:F0,iridescence_pars_fragment:O0,opaque_fragment:z0,packing:G0,premultiplied_alpha_fragment:B0,project_vertex:H0,dithering_fragment:V0,dithering_pars_fragment:k0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:q0,shadowmap_vertex:K0,shadowmask_pars_fragment:Z0,skinbase_vertex:j0,skinning_pars_vertex:$0,skinning_vertex:J0,skinnormal_vertex:Q0,specularmap_fragment:ev,specularmap_pars_fragment:tv,tonemapping_fragment:nv,tonemapping_pars_fragment:iv,transmission_fragment:rv,transmission_pars_fragment:sv,uv_pars_fragment:av,uv_pars_vertex:ov,uv_vertex:lv,worldpos_vertex:cv,background_vert:hv,background_frag:uv,backgroundCube_vert:dv,backgroundCube_frag:fv,cube_vert:pv,cube_frag:mv,depth_vert:gv,depth_frag:_v,distanceRGBA_vert:vv,distanceRGBA_frag:xv,equirect_vert:Ev,equirect_frag:Mv,linedashed_vert:yv,linedashed_frag:Sv,meshbasic_vert:Tv,meshbasic_frag:Av,meshlambert_vert:Rv,meshlambert_frag:bv,meshmatcap_vert:wv,meshmatcap_frag:Cv,meshnormal_vert:Lv,meshnormal_frag:Pv,meshphong_vert:Iv,meshphong_frag:Dv,meshphysical_vert:Uv,meshphysical_frag:Nv,meshtoon_vert:Fv,meshtoon_frag:Ov,points_vert:zv,points_frag:Gv,shadow_vert:Bv,shadow_frag:Hv,sprite_vert:Vv,sprite_frag:kv},ae={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},sn={basic:{uniforms:At([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:At([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:At([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:At([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:At([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:At([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:At([ae.points,ae.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:At([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:At([ae.common,ae.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:At([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:At([ae.sprite,ae.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:At([ae.common,ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:At([ae.lights,ae.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};sn.physical={uniforms:At([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const fs={r:0,b:0,g:0};function Wv(i,e,t,n,r,s,a){const o=new Ge(0);let l=s===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Hs)?(h===void 0&&(h=new Ft(new hi(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:rr(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=v.colorSpace!==Ze,(u!==v||d!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ft(new Cr(2,2),new ui({name:"BackgroundMaterial",uniforms:rr(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(fs,_u(i)),n.buffers.color.setClear(fs.r,fs.g,fs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function Xv(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function u(B,V,j,z,Y){let $=!1;if(a){const K=_(z,j,V);c!==K&&(c=K,m(c.object)),$=f(B,z,j,Y),$&&y(B,z,j,Y)}else{const K=V.wireframe===!0;(c.geometry!==z.id||c.program!==j.id||c.wireframe!==K)&&(c.geometry=z.id,c.program=j.id,c.wireframe=K,$=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,U(B,V,j,z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(B){return n.isWebGL2?i.bindVertexArray(B):s.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?i.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function _(B,V,j){const z=j.wireframe===!0;let Y=o[B.id];Y===void 0&&(Y={},o[B.id]=Y);let $=Y[V.id];$===void 0&&($={},Y[V.id]=$);let K=$[z];return K===void 0&&(K=p(d()),$[z]=K),K}function p(B){const V=[],j=[],z=[];for(let Y=0;Y<r;Y++)V[Y]=0,j[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:z,object:B,attributes:{},index:null}}function f(B,V,j,z){const Y=c.attributes,$=V.attributes;let K=0;const G=j.getAttributes();for(const H in G)if(G[H].location>=0){const ee=Y[H];let ne=$[H];if(ne===void 0&&(H==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),H==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor)),ee===void 0||ee.attribute!==ne||ne&&ee.data!==ne.data)return!0;K++}return c.attributesNum!==K||c.index!==z}function y(B,V,j,z){const Y={},$=V.attributes;let K=0;const G=j.getAttributes();for(const H in G)if(G[H].location>=0){let ee=$[H];ee===void 0&&(H==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),H==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor));const ne={};ne.attribute=ee,ee&&ee.data&&(ne.data=ee.data),Y[H]=ne,K++}c.attributes=Y,c.attributesNum=K,c.index=z}function v(){const B=c.newAttributes;for(let V=0,j=B.length;V<j;V++)B[V]=0}function x(B){A(B,0)}function A(B,V){const j=c.newAttributes,z=c.enabledAttributes,Y=c.attributeDivisors;j[B]=1,z[B]===0&&(i.enableVertexAttribArray(B),z[B]=1),Y[B]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,V),Y[B]=V)}function w(){const B=c.newAttributes,V=c.enabledAttributes;for(let j=0,z=V.length;j<z;j++)V[j]!==B[j]&&(i.disableVertexAttribArray(j),V[j]=0)}function b(B,V,j,z,Y,$,K){K===!0?i.vertexAttribIPointer(B,V,j,Y,$):i.vertexAttribPointer(B,V,j,z,Y,$)}function U(B,V,j,z){if(n.isWebGL2===!1&&(B.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Y=z.attributes,$=j.getAttributes(),K=V.defaultAttributeValues;for(const G in $){const H=$[G];if(H.location>=0){let re=Y[G];if(re===void 0&&(G==="instanceMatrix"&&B.instanceMatrix&&(re=B.instanceMatrix),G==="instanceColor"&&B.instanceColor&&(re=B.instanceColor)),re!==void 0){const ee=re.normalized,ne=re.itemSize,pe=t.get(re);if(pe===void 0)continue;const ve=pe.buffer,he=pe.type,De=pe.bytesPerElement,dt=n.isWebGL2===!0&&(he===i.INT||he===i.UNSIGNED_INT||re.gpuType===eu);if(re.isInterleavedBufferAttribute){const be=re.data,I=be.stride,ft=re.offset;if(be.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)A(H.location+Ee,be.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)x(H.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let Ee=0;Ee<H.locationSize;Ee++)b(H.location+Ee,ne/H.locationSize,he,ee,I*De,(ft+ne/H.locationSize*Ee)*De,dt)}else{if(re.isInstancedBufferAttribute){for(let be=0;be<H.locationSize;be++)A(H.location+be,re.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let be=0;be<H.locationSize;be++)x(H.location+be);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let be=0;be<H.locationSize;be++)b(H.location+be,ne/H.locationSize,he,ee,ne*De,ne/H.locationSize*be*De,dt)}}else if(K!==void 0){const ee=K[G];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(H.location,ee);break;case 3:i.vertexAttrib3fv(H.location,ee);break;case 4:i.vertexAttrib4fv(H.location,ee);break;default:i.vertexAttrib1fv(H.location,ee)}}}}w()}function M(){q();for(const B in o){const V=o[B];for(const j in V){const z=V[j];for(const Y in z)g(z[Y].object),delete z[Y];delete V[j]}delete o[B]}}function R(B){if(o[B.id]===void 0)return;const V=o[B.id];for(const j in V){const z=V[j];for(const Y in z)g(z[Y].object),delete z[Y];delete V[j]}delete o[B.id]}function Z(B){for(const V in o){const j=o[V];if(j[B.id]===void 0)continue;const z=j[B.id];for(const Y in z)g(z[Y].object),delete z[Y];delete j[B.id]}}function q(){P(),h=!0,c!==l&&(c=l,m(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:Z,initAttributes:v,enableAttribute:x,disableUnusedAttributes:w}}function Yv(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,h){i.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,h,u),t.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function qv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,x=a||e.has("OES_texture_float"),A=v&&x,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:A,maxSamples:w}}function Kv(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new ei,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,v=y*4;let x=f.clippingState||null;l.value=x,x=h(g,d,v,m);for(let A=0;A!==v;++A)x[A]=t[A];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,x=m;v!==_;++v,x+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Zv(i){let e=new WeakMap;function t(a,o){return o===Za?a.mapping=tr:o===ja&&(a.mapping=nr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Za||o===ja)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new c_(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Mu extends vu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ki=4,Ac=[.125,.215,.35,.446,.526,.582],ni=20,La=new Mu,Rc=new Ge;let Pa=null;const ti=(1+Math.sqrt(5))/2,Ui=1/ti,bc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ti,Ui),new L(0,ti,-Ui),new L(Ui,0,ti),new L(-Ui,0,ti),new L(ti,Ui,0),new L(-ti,Ui,0)];class wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Pa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa),e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:wr,format:tn,colorSpace:hn,depthBuffer:!1},r=Cc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jv(s)),this._blurMaterial=$v(s,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,r){const o=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Rc),h.toneMapping=Bn,h.autoClear=!1;const m=new Ji({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new Ft(new hi,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Rc),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;ps(r,y*v,f>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===tr||e.mapping===nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bc[(r-1)%bc.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ft(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ni-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):ni;p>ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);const f=[];let y=0;for(let b=0;b<ni;++b){const U=b/_,M=Math.exp(-U*U/2);f.push(M),b===0?y+=M:b<p&&(y+=2*M)}for(let b=0;b<f.length;b++)f[b]=f[b]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[r],A=3*x*(r>v-ki?r-v+ki:0),w=4*(this._cubeSize-x);ps(t,A,w,3*x,2*x),l.setRenderTarget(t),l.render(u,La)}}function jv(i){const e=[],t=[],n=[];let r=i;const s=i-ki+1+Ac.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-ki?l=Ac[a-i+ki-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),x=new Float32Array(f*g*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,U=w>2?0:-1,M=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];y.set(M,_*g*w),v.set(d,p*g*w);const R=[w,w,w,w,w,w];x.set(R,f*g*w)}const A=new un;A.setAttribute("position",new on(y,_)),A.setAttribute("uv",new on(v,p)),A.setAttribute("faceIndex",new on(x,f)),e.push(A),r>ki&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cc(i,e,t){const n=new ci(i,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $v(i,e,t){const n=new Float32Array(ni),r=new L(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Lc(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Pc(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Vo(){return`

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
	`}function Jv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Za||l===ja,h=l===tr||l===nr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new wc(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new wc(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Qv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ex(i,e,t,n){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,x=y.length;v<x;v+=3){const A=y[v+0],w=y[v+1],b=y[v+2];d.push(A,w,w,b,b,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const A=v+0,w=v+1,b=v+2;d.push(A,w,w,b,b,A)}}else return;const p=new(lu(d)?gu:mu)(d,1);p.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function tx(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,m){i.drawElements(s,m,o,d*l),t.update(m,s,1)}function u(d,m,g){if(g===0)return;let _,p;if(r)_=i,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,d*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function nx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ix(i,e){return i[0]-e[0]}function rx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function sx(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let V=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),A===!0&&(M=3);let R=h.attributes.position.count*M,Z=1;R>e.maxTextureSize&&(Z=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const q=new Float32Array(R*Z*4*_),P=new uu(q,R,Z,_);P.type=On,P.needsUpdate=!0;const B=M*4;for(let j=0;j<_;j++){const z=w[j],Y=b[j],$=U[j],K=R*Z*4*j;for(let G=0;G<z.count;G++){const H=G*B;v===!0&&(a.fromBufferAttribute(z,G),q[K+H+0]=a.x,q[K+H+1]=a.y,q[K+H+2]=a.z,q[K+H+3]=0),x===!0&&(a.fromBufferAttribute(Y,G),q[K+H+4]=a.x,q[K+H+5]=a.y,q[K+H+6]=a.z,q[K+H+7]=0),A===!0&&(a.fromBufferAttribute($,G),q[K+H+8]=a.x,q[K+H+9]=a.y,q[K+H+10]=a.z,q[K+H+11]=$.itemSize===4?a.w:1)}}p={count:_,texture:P,size:new Be(R,Z)},s.set(h,p),h.addEventListener("dispose",V)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<g;x++){const A=_[x];A[0]=x,A[1]=d[x]}_.sort(rx);for(let x=0;x<8;x++)x<g&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(ix);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const A=o[x],w=A[0],b=A[1];w!==Number.MAX_SAFE_INTEGER&&b?(p&&h.getAttribute("morphTarget"+x)!==p[w]&&h.setAttribute("morphTarget"+x,p[w]),f&&h.getAttribute("morphNormal"+x)!==f[w]&&h.setAttribute("morphNormal"+x,f[w]),r[x]=b,y+=b):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),f&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function ax(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const yu=new Pt,Su=new uu,Tu=new Yg,Au=new xu,Ic=[],Dc=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Fc=new Float32Array(4);function cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ic[r];if(s===void 0&&(s=new Float32Array(r),Ic[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xs(i,e){let t=Dc[e];t===void 0&&(t=new Int32Array(e),Dc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ox(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),ut(t,e)}}function cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),ut(t,e)}}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),ut(t,e)}}function ux(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Fc.set(n),i.uniformMatrix2fv(this.addr,!1,Fc),ut(t,n)}}function dx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Nc.set(n),i.uniformMatrix3fv(this.addr,!1,Nc),ut(t,n)}}function fx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Uc.set(n),i.uniformMatrix4fv(this.addr,!1,Uc),ut(t,n)}}function px(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),ut(t,e)}}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),ut(t,e)}}function _x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),ut(t,e)}}function vx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),ut(t,e)}}function Ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),ut(t,e)}}function Mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),ut(t,e)}}function yx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||yu,r)}function Sx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Tu,r)}function Tx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Au,r)}function Ax(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Su,r)}function Rx(i){switch(i){case 5126:return ox;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return vx;case 36294:return xx;case 36295:return Ex;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ax}}function bx(i,e){i.uniform1fv(this.addr,e)}function wx(i,e){const t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function Cx(i,e){const t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function Lx(i,e){const t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function Px(i,e){const t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ix(i,e){const t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dx(i,e){const t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ux(i,e){i.uniform1iv(this.addr,e)}function Nx(i,e){i.uniform2iv(this.addr,e)}function Fx(i,e){i.uniform3iv(this.addr,e)}function Ox(i,e){i.uniform4iv(this.addr,e)}function zx(i,e){i.uniform1uiv(this.addr,e)}function Gx(i,e){i.uniform2uiv(this.addr,e)}function Bx(i,e){i.uniform3uiv(this.addr,e)}function Hx(i,e){i.uniform4uiv(this.addr,e)}function Vx(i,e,t){const n=this.cache,r=e.length,s=Xs(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||yu,s[a])}function kx(i,e,t){const n=this.cache,r=e.length,s=Xs(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Tu,s[a])}function Wx(i,e,t){const n=this.cache,r=e.length,s=Xs(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Au,s[a])}function Xx(i,e,t){const n=this.cache,r=e.length,s=Xs(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Su,s[a])}function Yx(i){switch(i){case 5126:return bx;case 35664:return wx;case 35665:return Cx;case 35666:return Lx;case 35674:return Px;case 35675:return Ix;case 35676:return Dx;case 5124:case 35670:return Ux;case 35667:case 35671:return Nx;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return zx;case 36294:return Gx;case 36295:return Bx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}class qx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Rx(t.type)}}class Kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Yx(t.type)}}class Zx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function Oc(i,e){i.seq.push(e),i.map[e.id]=e}function jx(i,e,t){const n=i.name,r=n.length;for(Ia.lastIndex=0;;){const s=Ia.exec(n),a=Ia.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Oc(t,c===void 0?new qx(o,i,e):new Kx(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Zx(o),Oc(t,u)),t=u}}}class Es{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);jx(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function zc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let $x=0;function Jx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Qx(i){switch(i){case hn:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Gc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Jx(i.getShaderSource(e),a)}else return r}function eE(i,e){const t=Qx(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tE(i,e){let t;switch(e){case lg:t="Linear";break;case cg:t="Reinhard";break;case hg:t="OptimizedCineon";break;case ug:t="ACESFilmic";break;case dg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nE(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function iE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function _r(i){return i!==""}function Bc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sE=/^[ \t]*#include +<([\w\d./]+)>/gm;function no(i){return i.replace(sE,oE)}const aE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function oE(i,e){let t=Le[e];if(t===void 0){const n=aE.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return no(t)}const lE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(i){return i.replace(lE,cE)}function cE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function uE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function fE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jh:e="ENVMAP_BLENDING_MULTIPLY";break;case ag:e="ENVMAP_BLENDING_MIX";break;case og:e="ENVMAP_BLENDING_ADD";break}return e}function pE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function mE(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=hE(t),c=uE(t),h=dE(t),u=fE(t),d=pE(t),m=t.isWebGL2?"":nE(t),g=iE(s),_=r.createProgram();let p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),f.length>0&&(f+=`
`)):(p=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),f=[m,kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Le.tonemapping_pars_fragment:"",t.toneMapping!==Bn?tE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,eE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=no(a),a=Bc(a,t),a=Hc(a,t),o=no(o),o=Bc(o,t),o=Hc(o,t),a=Vc(a),o=Vc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+p+a,x=y+f+o,A=zc(r,r.VERTEX_SHADER,v),w=zc(r,r.FRAGMENT_SHADER,x);if(r.attachShader(_,A),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),R=r.getShaderInfoLog(A).trim(),Z=r.getShaderInfoLog(w).trim();let q=!0,P=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,w);else{const B=Gc(r,A,"vertex"),V=Gc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+B+`
`+V)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||Z==="")&&(P=!1);P&&(this.diagnostics={runnable:q,programLog:M,vertexShader:{log:R,prefix:p},fragmentShader:{log:Z,prefix:f}})}r.deleteShader(A),r.deleteShader(w);let b;this.getUniforms=function(){return b===void 0&&(b=new Es(r,_)),b};let U;return this.getAttributes=function(){return U===void 0&&(U=rE(r,_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$x++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let gE=0;class _E{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vE(e),t.set(e,n)),n}}class vE{constructor(e){this.id=gE++,this.code=e,this.usedTimes=0}}function xE(i,e,t,n,r,s,a){const o=new fu,l=new _E,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,R,Z,q,P){const B=q.fog,V=P.geometry,j=M.isMeshStandardMaterial?q.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),Y=z&&z.mapping===Hs?z.image.height:null,$=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,G=K!==void 0?K.length:0;let H=0;V.morphAttributes.position!==void 0&&(H=1),V.morphAttributes.normal!==void 0&&(H=2),V.morphAttributes.color!==void 0&&(H=3);let re,ee,ne,pe;if($){const Ke=sn[$];re=Ke.vertexShader,ee=Ke.fragmentShader}else re=M.vertexShader,ee=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const ve=i.getRenderTarget(),he=P.isInstancedMesh===!0,De=!!M.map,dt=!!M.matcap,be=!!z,I=!!M.aoMap,ft=!!M.lightMap,Ee=!!M.bumpMap,Re=!!M.normalMap,Me=!!M.displacementMap,We=!!M.emissiveMap,Pe=!!M.metalnessMap,we=!!M.roughnessMap,He=M.anisotropy>0,lt=M.clearcoat>0,Xe=M.iridescence>0,T=M.sheen>0,E=M.transmission>0,F=He&&!!M.anisotropyMap,te=lt&&!!M.clearcoatMap,J=lt&&!!M.clearcoatNormalMap,Q=lt&&!!M.clearcoatRoughnessMap,fe=Xe&&!!M.iridescenceMap,ie=Xe&&!!M.iridescenceThicknessMap,O=T&&!!M.sheenColorMap,xe=T&&!!M.sheenRoughnessMap,me=!!M.specularMap,ge=!!M.specularColorMap,ue=!!M.specularIntensityMap,de=E&&!!M.transmissionMap,Ue=E&&!!M.thicknessMap,Ye=!!M.gradientMap,C=!!M.alphaMap,oe=M.alphaTest>0,k=!!M.alphaHash,se=!!M.extensions,le=!!V.attributes.uv1,ze=!!V.attributes.uv2,je=!!V.attributes.uv3;let it=Bn;return M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(it=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:ee,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:he,instancingColor:he&&P.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:hn,map:De,matcap:dt,envMap:be,envMapMode:be&&z.mapping,envMapCubeUVHeight:Y,aoMap:I,lightMap:ft,bumpMap:Ee,normalMap:Re,displacementMap:d&&Me,emissiveMap:We,normalMapObjectSpace:Re&&M.normalMapType===Ag,normalMapTangentSpace:Re&&M.normalMapType===ou,metalnessMap:Pe,roughnessMap:we,anisotropy:He,anisotropyMap:F,clearcoat:lt,clearcoatMap:te,clearcoatNormalMap:J,clearcoatRoughnessMap:Q,iridescence:Xe,iridescenceMap:fe,iridescenceThicknessMap:ie,sheen:T,sheenColorMap:O,sheenRoughnessMap:xe,specularMap:me,specularColorMap:ge,specularIntensityMap:ue,transmission:E,transmissionMap:de,thicknessMap:Ue,gradientMap:Ye,opaque:M.transparent===!1&&M.blending===ji,alphaMap:C,alphaTest:oe,alphaHash:k,combine:M.combine,mapUv:De&&_(M.map.channel),aoMapUv:I&&_(M.aoMap.channel),lightMapUv:ft&&_(M.lightMap.channel),bumpMapUv:Ee&&_(M.bumpMap.channel),normalMapUv:Re&&_(M.normalMap.channel),displacementMapUv:Me&&_(M.displacementMap.channel),emissiveMapUv:We&&_(M.emissiveMap.channel),metalnessMapUv:Pe&&_(M.metalnessMap.channel),roughnessMapUv:we&&_(M.roughnessMap.channel),anisotropyMapUv:F&&_(M.anisotropyMap.channel),clearcoatMapUv:te&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:O&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(M.sheenRoughnessMap.channel),specularMapUv:me&&_(M.specularMap.channel),specularColorMapUv:ge&&_(M.specularColorMap.channel),specularIntensityMapUv:ue&&_(M.specularIntensityMap.channel),transmissionMapUv:de&&_(M.transmissionMap.channel),thicknessMapUv:Ue&&_(M.thicknessMap.channel),alphaMapUv:C&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Re||He),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:ze,vertexUv3s:je,pointsUvs:P.isPoints===!0&&!!V.attributes.uv&&(De||C),fog:!!B,useFog:M.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:H,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,useLegacyLights:i._useLegacyLights,decodeVideoTexture:De&&M.map.isVideoTexture===!0&&M.map.colorSpace===Ze,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===yn,flipSided:M.side===Lt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:se&&M.extensions.derivatives===!0,extensionFragDepth:se&&M.extensions.fragDepth===!0,extensionDrawBuffers:se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Z in M.defines)R.push(Z),R.push(M.defines[Z]);return M.isRawShaderMaterial===!1&&(y(R,M),v(R,M),R.push(i.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function y(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function v(M,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function x(M){const R=g[M.type];let Z;if(R){const q=sn[R];Z=s_.clone(q.uniforms)}else Z=M.uniforms;return Z}function A(M,R){let Z;for(let q=0,P=c.length;q<P;q++){const B=c[q];if(B.cacheKey===R){Z=B,++Z.usedTimes;break}}return Z===void 0&&(Z=new mE(i,R,M,s),c.push(Z)),Z}function w(M){if(--M.usedTimes===0){const R=c.indexOf(M);c[R]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:U}}function EE(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function ME(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,d,m,g,_,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),e++,f}function o(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||ME),n.length>1&&n.sort(d||Wc),r.length>1&&r.sort(d||Wc)}function h(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function yE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Xc,i.set(n,[a])):r>=s.length?(a=new Xc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function SE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ge};break;case"SpotLight":t={position:new L,direction:new L,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function TE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let AE=0;function RE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bE(i,e){const t=new SE,n=TE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new L);const s=new L,a=new ot,o=new ot;function l(h,u){let d=0,m=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let _=0,p=0,f=0,y=0,v=0,x=0,A=0,w=0,b=0,U=0;h.sort(RE);const M=u===!0?Math.PI:1;for(let Z=0,q=h.length;Z<q;Z++){const P=h[Z],B=P.color,V=P.intensity,j=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=B.r*V*M,m+=B.g*V*M,g+=B.b*V*M;else if(P.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(P.sh.coefficients[Y],V);else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const $=P.shadow,K=n.get(P);K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=z,r.directionalShadowMatrix[_]=P.shadow.matrix,x++}r.directional[_]=Y,_++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(B).multiplyScalar(V*M),Y.distance=j,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,r.spot[f]=Y;const $=P.shadow;if(P.map&&(r.spotLightMap[b]=P.map,b++,$.updateMatrices(P),P.castShadow&&U++),r.spotLightMatrix[f]=$.matrix,P.castShadow){const K=n.get(P);K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,r.spotShadow[f]=K,r.spotShadowMap[f]=z,w++}f++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(B).multiplyScalar(V),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),r.rectArea[y]=Y,y++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*M),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const $=P.shadow,K=n.get(P);K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=z,r.pointShadowMatrix[p]=P.shadow.matrix,A++}r.point[p]=Y,p++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(V*M),Y.groundColor.copy(P.groundColor).multiplyScalar(V*M),r.hemi[v]=Y,v++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==f||R.rectAreaLength!==y||R.hemiLength!==v||R.numDirectionalShadows!==x||R.numPointShadows!==A||R.numSpotShadows!==w||R.numSpotMaps!==b)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=y,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=w+b-U,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=U,R.directionalLength=_,R.pointLength=p,R.spotLength=f,R.rectAreaLength=y,R.hemiLength=v,R.numDirectionalShadows=x,R.numPointShadows=A,R.numSpotShadows=w,R.numSpotMaps=b,r.version=AE++)}function c(h,u){let d=0,m=0,g=0,_=0,p=0;const f=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const x=h[y];if(x.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),d++}else if(x.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),g++}else if(x.isRectAreaLight){const A=r.rectArea[_];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),o.identity(),a.copy(x.matrixWorld),a.premultiply(f),o.extractRotation(a),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),m++}else if(x.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function Yc(i,e){const t=new bE(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(u){n.push(u)}function o(u){r.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function wE(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Yc(i,e),t.set(s,[l])):a>=o.length?(l=new Yc(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class CE extends lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LE extends lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IE=`uniform sampler2D shadow_pass;
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
}`;function DE(i,e,t){let n=new Ho;const r=new Be,s=new Be,a=new _t,o=new CE({depthPacking:Tg}),l=new LE,c={},h=t.maxTextureSize,u={[kn]:Lt,[Lt]:kn,[yn]:yn},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:PE,fragmentShader:IE}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let f=this.type;this.render=function(A,w,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const U=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Gn),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const q=f!==En&&this.type===En,P=f===En&&this.type!==En;for(let B=0,V=A.length;B<V;B++){const j=A[B],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Y=z.getFrameExtents();if(r.multiply(Y),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,z.mapSize.y=s.y)),z.map===null||q===!0||P===!0){const K=this.type!==En?{minFilter:Rt,magFilter:Rt}:{};z.map!==null&&z.map.dispose(),z.map=new ci(r.x,r.y,K),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const $=z.getViewportCount();for(let K=0;K<$;K++){const G=z.getViewport(K);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),Z.viewport(a),z.updateMatrices(j,K),n=z.getFrustum(),x(w,b,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===En&&y(z,b),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(U,M,R)};function y(A,w){const b=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ci(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,b,d,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,b,m,_,null)}function v(A,w,b,U){let M=null;const R=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=b.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Z=M.uuid,q=w.uuid;let P=c[Z];P===void 0&&(P={},c[Z]=P);let B=P[q];B===void 0&&(B=M.clone(),P[q]=B),M=B}if(M.visible=w.visible,M.wireframe=w.wireframe,U===En?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Z=i.properties.get(M);Z.light=b}return M}function x(A,w,b,U,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===En)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const q=e.update(A),P=A.material;if(Array.isArray(P)){const B=q.groups;for(let V=0,j=B.length;V<j;V++){const z=B[V],Y=P[z.materialIndex];if(Y&&Y.visible){const $=v(A,Y,U,M);i.renderBufferDirect(b,null,q,$,A,z)}}}else if(P.visible){const B=v(A,P,U,M);i.renderBufferDirect(b,null,q,B,A,null)}}const Z=A.children;for(let q=0,P=Z.length;q<P;q++)x(Z[q],w,b,U,M)}}function UE(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const oe=new _t;let k=null;const se=new _t(0,0,0,0);return{setMask:function(le){k!==le&&!C&&(i.colorMask(le,le,le,le),k=le)},setLocked:function(le){C=le},setClear:function(le,ze,je,it,Rn){Rn===!0&&(le*=it,ze*=it,je*=it),oe.set(le,ze,je,it),se.equals(oe)===!1&&(i.clearColor(le,ze,je,it),se.copy(oe))},reset:function(){C=!1,k=null,se.set(-1,0,0,0)}}}function s(){let C=!1,oe=null,k=null,se=null;return{setTest:function(le){le?ve(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(le){oe!==le&&!C&&(i.depthMask(le),oe=le)},setFunc:function(le){if(k!==le){switch(le){case Qm:i.depthFunc(i.NEVER);break;case eg:i.depthFunc(i.ALWAYS);break;case tg:i.depthFunc(i.LESS);break;case Ka:i.depthFunc(i.LEQUAL);break;case ng:i.depthFunc(i.EQUAL);break;case ig:i.depthFunc(i.GEQUAL);break;case rg:i.depthFunc(i.GREATER);break;case sg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=le}},setLocked:function(le){C=le},setClear:function(le){se!==le&&(i.clearDepth(le),se=le)},reset:function(){C=!1,oe=null,k=null,se=null}}}function a(){let C=!1,oe=null,k=null,se=null,le=null,ze=null,je=null,it=null,Rn=null;return{setTest:function(Ke){C||(Ke?ve(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!C&&(i.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,nn,St){(k!==Ke||se!==nn||le!==St)&&(i.stencilFunc(Ke,nn,St),k=Ke,se=nn,le=St)},setOp:function(Ke,nn,St){(ze!==Ke||je!==nn||it!==St)&&(i.stencilOp(Ke,nn,St),ze=Ke,je=nn,it=St)},setLocked:function(Ke){C=Ke},setClear:function(Ke){Rn!==Ke&&(i.clearStencil(Ke),Rn=Ke)},reset:function(){C=!1,oe=null,k=null,se=null,le=null,ze=null,je=null,it=null,Rn=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,y=null,v=null,x=null,A=null,w=null,b=null,U=null,M=!1,R=null,Z=null,q=null,P=null,B=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,z=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=z>=2);let $=null,K={};const G=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),re=new _t().fromArray(G),ee=new _t().fromArray(H);function ne(C,oe,k,se){const le=new Uint8Array(4),ze=i.createTexture();i.bindTexture(C,ze),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<k;je++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(oe+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ze}const pe={};pe[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pe[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(i.DEPTH_TEST),l.setFunc(Ka),Me(!1),We(Ll),ve(i.CULL_FACE),Ee(Gn);function ve(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function he(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function De(C,oe){return m[C]!==oe?(i.bindFramebuffer(C,oe),m[C]=oe,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=oe),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function dt(C,oe){let k=_,se=!1;if(C)if(k=g.get(oe),k===void 0&&(k=[],g.set(oe,k)),C.isWebGLMultipleRenderTargets){const le=C.texture;if(k.length!==le.length||k[0]!==i.COLOR_ATTACHMENT0){for(let ze=0,je=le.length;ze<je;ze++)k[ze]=i.COLOR_ATTACHMENT0+ze;k.length=le.length,se=!0}}else k[0]!==i.COLOR_ATTACHMENT0&&(k[0]=i.COLOR_ATTACHMENT0,se=!0);else k[0]!==i.BACK&&(k[0]=i.BACK,se=!0);se&&(t.isWebGL2?i.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function be(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const I={[Bi]:i.FUNC_ADD,[Vm]:i.FUNC_SUBTRACT,[km]:i.FUNC_REVERSE_SUBTRACT};if(n)I[Ul]=i.MIN,I[Nl]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(I[Ul]=C.MIN_EXT,I[Nl]=C.MAX_EXT)}const ft={[Wm]:i.ZERO,[Xm]:i.ONE,[Ym]:i.SRC_COLOR,[jh]:i.SRC_ALPHA,[Jm]:i.SRC_ALPHA_SATURATE,[jm]:i.DST_COLOR,[Km]:i.DST_ALPHA,[qm]:i.ONE_MINUS_SRC_COLOR,[$h]:i.ONE_MINUS_SRC_ALPHA,[$m]:i.ONE_MINUS_DST_COLOR,[Zm]:i.ONE_MINUS_DST_ALPHA};function Ee(C,oe,k,se,le,ze,je,it){if(C===Gn){f===!0&&(he(i.BLEND),f=!1);return}if(f===!1&&(ve(i.BLEND),f=!0),C!==Hm){if(C!==y||it!==M){if((v!==Bi||w!==Bi)&&(i.blendEquation(i.FUNC_ADD),v=Bi,w=Bi),it)switch(C){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pl:i.blendFunc(i.ONE,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}x=null,A=null,b=null,U=null,y=C,M=it}return}le=le||oe,ze=ze||k,je=je||se,(oe!==v||le!==w)&&(i.blendEquationSeparate(I[oe],I[le]),v=oe,w=le),(k!==x||se!==A||ze!==b||je!==U)&&(i.blendFuncSeparate(ft[k],ft[se],ft[ze],ft[je]),x=k,A=se,b=ze,U=je),y=C,M=!1}function Re(C,oe){C.side===yn?he(i.CULL_FACE):ve(i.CULL_FACE);let k=C.side===Lt;oe&&(k=!k),Me(k),C.blending===ji&&C.transparent===!1?Ee(Gn):Ee(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const se=C.stencilWrite;c.setTest(se),se&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),we(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(C){R!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),R=C)}function We(C){C!==zm?(ve(i.CULL_FACE),C!==Z&&(C===Ll?i.cullFace(i.BACK):C===Gm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),Z=C}function Pe(C){C!==q&&(j&&i.lineWidth(C),q=C)}function we(C,oe,k){C?(ve(i.POLYGON_OFFSET_FILL),(P!==oe||B!==k)&&(i.polygonOffset(oe,k),P=oe,B=k)):he(i.POLYGON_OFFSET_FILL)}function He(C){C?ve(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function lt(C){C===void 0&&(C=i.TEXTURE0+V-1),$!==C&&(i.activeTexture(C),$=C)}function Xe(C,oe,k){k===void 0&&($===null?k=i.TEXTURE0+V-1:k=$);let se=K[k];se===void 0&&(se={type:void 0,texture:void 0},K[k]=se),(se.type!==C||se.texture!==oe)&&($!==k&&(i.activeTexture(k),$=k),i.bindTexture(C,oe||pe[C]),se.type=C,se.texture=oe)}function T(){const C=K[$];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function E(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function F(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function O(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(C){re.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function ue(C){ee.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ee.copy(C))}function de(C,oe){let k=u.get(oe);k===void 0&&(k=new WeakMap,u.set(oe,k));let se=k.get(C);se===void 0&&(se=i.getUniformBlockIndex(oe,C.name),k.set(C,se))}function Ue(C,oe){const se=u.get(oe).get(C);h.get(oe)!==se&&(i.uniformBlockBinding(oe,se,C.__bindingPointIndex),h.set(oe,se))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},$=null,K={},m={},g=new WeakMap,_=[],p=null,f=!1,y=null,v=null,x=null,A=null,w=null,b=null,U=null,M=!1,R=null,Z=null,q=null,P=null,B=null,re.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ve,disable:he,bindFramebuffer:De,drawBuffers:dt,useProgram:be,setBlending:Ee,setMaterial:Re,setFlipSided:Me,setCullFace:We,setLineWidth:Pe,setPolygonOffset:we,setScissorTest:He,activeTexture:lt,bindTexture:Xe,unbindTexture:T,compressedTexImage2D:E,compressedTexImage3D:F,texImage2D:xe,texImage3D:me,updateUBOMapping:de,uniformBlockBinding:Ue,texStorage2D:ie,texStorage3D:O,texSubImage2D:te,texSubImage3D:J,compressedTexSubImage2D:Q,compressedTexSubImage3D:fe,scissor:ge,viewport:ue,reset:Ye}}function NE(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,E){return f?new OffscreenCanvas(T,E):Cs("canvas")}function v(T,E,F,te){let J=1;if((T.width>te||T.height>te)&&(J=te/Math.max(T.width,T.height)),J<1||E===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const Q=E?to:Math.floor,fe=Q(J*T.width),ie=Q(J*T.height);_===void 0&&(_=y(fe,ie));const O=F?y(fe,ie):_;return O.width=fe,O.height=ie,O.getContext("2d").drawImage(T,0,0,fe,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+fe+"x"+ie+")."),O}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function x(T){return hc(T.width)&&hc(T.height)}function A(T){return o?!1:T.wrapS!==en||T.wrapT!==en||T.minFilter!==Rt&&T.minFilter!==Vt}function w(T,E){return T.generateMipmaps&&E&&T.minFilter!==Rt&&T.minFilter!==Vt}function b(T){i.generateMipmap(T)}function U(T,E,F,te,J=!1){if(o===!1)return E;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=E;return E===i.RED&&(F===i.FLOAT&&(Q=i.R32F),F===i.HALF_FLOAT&&(Q=i.R16F),F===i.UNSIGNED_BYTE&&(Q=i.R8)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.R8UI),F===i.UNSIGNED_SHORT&&(Q=i.R16UI),F===i.UNSIGNED_INT&&(Q=i.R32UI),F===i.BYTE&&(Q=i.R8I),F===i.SHORT&&(Q=i.R16I),F===i.INT&&(Q=i.R32I)),E===i.RG&&(F===i.FLOAT&&(Q=i.RG32F),F===i.HALF_FLOAT&&(Q=i.RG16F),F===i.UNSIGNED_BYTE&&(Q=i.RG8)),E===i.RGBA&&(F===i.FLOAT&&(Q=i.RGBA32F),F===i.HALF_FLOAT&&(Q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Q=te===Ze&&J===!1?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)),(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(T,E,F){return w(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Rt&&T.minFilter!==Vt?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function R(T){return T===Rt||T===Fl||T===ra?i.NEAREST:i.LINEAR}function Z(T){const E=T.target;E.removeEventListener("dispose",Z),P(E),E.isVideoTexture&&g.delete(E)}function q(T){const E=T.target;E.removeEventListener("dispose",q),V(E)}function P(T){const E=n.get(T);if(E.__webglInit===void 0)return;const F=T.source,te=p.get(F);if(te){const J=te[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&B(T),Object.keys(te).length===0&&p.delete(F)}n.remove(T)}function B(T){const E=n.get(T);i.deleteTexture(E.__webglTexture);const F=T.source,te=p.get(F);delete te[E.__cacheKey],a.memory.textures--}function V(T){const E=T.texture,F=n.get(T),te=n.get(E);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let Q=0;Q<F.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(F.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)i.deleteFramebuffer(F.__webglFramebuffer[J]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,Q=E.length;J<Q;J++){const fe=n.get(E[J]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(E[J])}n.remove(E),n.remove(T)}let j=0;function z(){j=0}function Y(){const T=j;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),j+=1,T}function $(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function K(T,E){const F=n.get(T);if(T.isVideoTexture&&lt(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(F,T,E);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function G(T,E){const F=n.get(T);if(T.version>0&&F.__version!==T.version){De(F,T,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function H(T,E){const F=n.get(T);if(T.version>0&&F.__version!==T.version){De(F,T,E);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function re(T,E){const F=n.get(T);if(T.version>0&&F.__version!==T.version){dt(F,T,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}const ee={[$a]:i.REPEAT,[en]:i.CLAMP_TO_EDGE,[Ja]:i.MIRRORED_REPEAT},ne={[Rt]:i.NEAREST,[Fl]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[fg]:i.LINEAR_MIPMAP_NEAREST,[br]:i.LINEAR_MIPMAP_LINEAR},pe={[bg]:i.NEVER,[Ug]:i.ALWAYS,[wg]:i.LESS,[Lg]:i.LEQUAL,[Cg]:i.EQUAL,[Dg]:i.GEQUAL,[Pg]:i.GREATER,[Ig]:i.NOTEQUAL};function ve(T,E,F){if(F?(i.texParameteri(T,i.TEXTURE_WRAP_S,ee[E.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ee[E.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ee[E.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ne[E.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ne[E.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==en||E.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,R(E.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,R(E.minFilter)),E.minFilter!==Rt&&E.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Rt||E.minFilter!==ra&&E.minFilter!==br||E.type===On&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===wr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function he(T,E){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",Z));const te=E.source;let J=p.get(te);J===void 0&&(J={},p.set(te,J));const Q=$(E);if(Q!==T.__cacheKey){J[Q]===void 0&&(J[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[Q].usedTimes++;const fe=J[T.__cacheKey];fe!==void 0&&(J[T.__cacheKey].usedTimes--,fe.usedTimes===0&&B(E)),T.__cacheKey=Q,T.__webglTexture=J[Q].texture}return F}function De(T,E,F){let te=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=i.TEXTURE_3D);const J=he(T,E),Q=E.source;t.bindTexture(te,T.__webglTexture,i.TEXTURE0+F);const fe=n.get(Q);if(Q.version!==fe.__version||J===!0){t.activeTexture(i.TEXTURE0+F),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ie=A(E)&&x(E.image)===!1;let O=v(E.image,ie,!1,h);O=Xe(E,O);const xe=x(O)||o,me=s.convert(E.format,E.colorSpace);let ge=s.convert(E.type),ue=U(E.internalFormat,me,ge,E.colorSpace,E.isVideoTexture);ve(te,E,xe);let de;const Ue=E.mipmaps,Ye=o&&E.isVideoTexture!==!0,C=fe.__version===void 0||J===!0,oe=M(E,O,xe);if(E.isDepthTexture)ue=i.DEPTH_COMPONENT,o?E.type===On?ue=i.DEPTH_COMPONENT32F:E.type===Fn?ue=i.DEPTH_COMPONENT24:E.type===si?ue=i.DEPTH24_STENCIL8:ue=i.DEPTH_COMPONENT16:E.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ai&&ue===i.DEPTH_COMPONENT&&E.type!==Bo&&E.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Fn,ge=s.convert(E.type)),E.format===ir&&ue===i.DEPTH_COMPONENT&&(ue=i.DEPTH_STENCIL,E.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=si,ge=s.convert(E.type))),C&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,ue,O.width,O.height):t.texImage2D(i.TEXTURE_2D,0,ue,O.width,O.height,0,me,ge,null));else if(E.isDataTexture)if(Ue.length>0&&xe){Ye&&C&&t.texStorage2D(i.TEXTURE_2D,oe,ue,Ue[0].width,Ue[0].height);for(let k=0,se=Ue.length;k<se;k++)de=Ue[k],Ye?t.texSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,me,ge,de.data):t.texImage2D(i.TEXTURE_2D,k,ue,de.width,de.height,0,me,ge,de.data);E.generateMipmaps=!1}else Ye?(C&&t.texStorage2D(i.TEXTURE_2D,oe,ue,O.width,O.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,O.width,O.height,me,ge,O.data)):t.texImage2D(i.TEXTURE_2D,0,ue,O.width,O.height,0,me,ge,O.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&C&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ue,Ue[0].width,Ue[0].height,O.depth);for(let k=0,se=Ue.length;k<se;k++)de=Ue[k],E.format!==tn?me!==null?Ye?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,O.depth,me,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,ue,de.width,de.height,O.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,O.depth,me,ge,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,ue,de.width,de.height,O.depth,0,me,ge,de.data)}else{Ye&&C&&t.texStorage2D(i.TEXTURE_2D,oe,ue,Ue[0].width,Ue[0].height);for(let k=0,se=Ue.length;k<se;k++)de=Ue[k],E.format!==tn?me!==null?Ye?t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,me,de.data):t.compressedTexImage2D(i.TEXTURE_2D,k,ue,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,me,ge,de.data):t.texImage2D(i.TEXTURE_2D,k,ue,de.width,de.height,0,me,ge,de.data)}else if(E.isDataArrayTexture)Ye?(C&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ue,O.width,O.height,O.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,me,ge,O.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,O.width,O.height,O.depth,0,me,ge,O.data);else if(E.isData3DTexture)Ye?(C&&t.texStorage3D(i.TEXTURE_3D,oe,ue,O.width,O.height,O.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,me,ge,O.data)):t.texImage3D(i.TEXTURE_3D,0,ue,O.width,O.height,O.depth,0,me,ge,O.data);else if(E.isFramebufferTexture){if(C)if(Ye)t.texStorage2D(i.TEXTURE_2D,oe,ue,O.width,O.height);else{let k=O.width,se=O.height;for(let le=0;le<oe;le++)t.texImage2D(i.TEXTURE_2D,le,ue,k,se,0,me,ge,null),k>>=1,se>>=1}}else if(Ue.length>0&&xe){Ye&&C&&t.texStorage2D(i.TEXTURE_2D,oe,ue,Ue[0].width,Ue[0].height);for(let k=0,se=Ue.length;k<se;k++)de=Ue[k],Ye?t.texSubImage2D(i.TEXTURE_2D,k,0,0,me,ge,de):t.texImage2D(i.TEXTURE_2D,k,ue,me,ge,de);E.generateMipmaps=!1}else Ye?(C&&t.texStorage2D(i.TEXTURE_2D,oe,ue,O.width,O.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,ge,O)):t.texImage2D(i.TEXTURE_2D,0,ue,me,ge,O);w(E,xe)&&b(te),fe.__version=Q.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function dt(T,E,F){if(E.image.length!==6)return;const te=he(T,E),J=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const Q=n.get(J);if(J.version!==Q.__version||te===!0){t.activeTexture(i.TEXTURE0+F),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,O=[];for(let k=0;k<6;k++)!fe&&!ie?O[k]=v(E.image[k],!1,!0,c):O[k]=ie?E.image[k].image:E.image[k],O[k]=Xe(E,O[k]);const xe=O[0],me=x(xe)||o,ge=s.convert(E.format,E.colorSpace),ue=s.convert(E.type),de=U(E.internalFormat,ge,ue,E.colorSpace),Ue=o&&E.isVideoTexture!==!0,Ye=Q.__version===void 0||te===!0;let C=M(E,xe,me);ve(i.TEXTURE_CUBE_MAP,E,me);let oe;if(fe){Ue&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,C,de,xe.width,xe.height);for(let k=0;k<6;k++){oe=O[k].mipmaps;for(let se=0;se<oe.length;se++){const le=oe[se];E.format!==tn?ge!==null?Ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,0,0,le.width,le.height,ge,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,de,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,0,0,le.width,le.height,ge,ue,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,de,le.width,le.height,0,ge,ue,le.data)}}}else{oe=E.mipmaps,Ue&&Ye&&(oe.length>0&&C++,t.texStorage2D(i.TEXTURE_CUBE_MAP,C,de,O[0].width,O[0].height));for(let k=0;k<6;k++)if(ie){Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,O[k].width,O[k].height,ge,ue,O[k].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,de,O[k].width,O[k].height,0,ge,ue,O[k].data);for(let se=0;se<oe.length;se++){const ze=oe[se].image[k].image;Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,0,0,ze.width,ze.height,ge,ue,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,de,ze.width,ze.height,0,ge,ue,ze.data)}}else{Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ge,ue,O[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,de,ge,ue,O[k]);for(let se=0;se<oe.length;se++){const le=oe[se];Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,0,0,ge,ue,le.image[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,de,ge,ue,le.image[k])}}}w(E,me)&&b(i.TEXTURE_CUBE_MAP),Q.__version=J.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function be(T,E,F,te,J,Q){const fe=s.convert(F.format,F.colorSpace),ie=s.convert(F.type),O=U(F.internalFormat,fe,ie,F.colorSpace);if(!n.get(E).__hasExternalTextures){const me=Math.max(1,E.width>>Q),ge=Math.max(1,E.height>>Q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,Q,O,me,ge,E.depth,0,fe,ie,null):t.texImage2D(J,Q,O,me,ge,0,fe,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),He(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,n.get(F).__webglTexture,0,we(E)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,J,n.get(F).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function I(T,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let te=i.DEPTH_COMPONENT16;if(F||He(E)){const J=E.depthTexture;J&&J.isDepthTexture&&(J.type===On?te=i.DEPTH_COMPONENT32F:J.type===Fn&&(te=i.DEPTH_COMPONENT24));const Q=we(E);He(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,te,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,te,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){const te=we(E);F&&He(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,E.width,E.height):He(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0;J<te.length;J++){const Q=te[J],fe=s.convert(Q.format,Q.colorSpace),ie=s.convert(Q.type),O=U(Q.internalFormat,fe,ie,Q.colorSpace),xe=we(E);F&&He(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,O,E.width,E.height):He(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,O,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,O,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const te=n.get(E.depthTexture).__webglTexture,J=we(E);if(E.depthTexture.format===ai)He(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(E.depthTexture.format===ir)He(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ee(T){const E=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ft(E.__webglFramebuffer,T)}else if(F){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=i.createRenderbuffer(),I(E.__webglDepthbuffer[te],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),I(E.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(T,E,F){const te=n.get(T);E!==void 0&&be(te.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ee(T)}function Me(T){const E=T.texture,F=n.get(T),te=n.get(E);T.addEventListener("dispose",q),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=E.version,a.memory.textures++);const J=T.isWebGLCubeRenderTarget===!0,Q=T.isWebGLMultipleRenderTargets===!0,fe=x(T)||o;if(J){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(o&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let O=0;O<E.mipmaps.length;O++)F.__webglFramebuffer[ie][O]=i.createFramebuffer()}else F.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<E.mipmaps.length;ie++)F.__webglFramebuffer[ie]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Q)if(r.drawBuffers){const ie=T.texture;for(let O=0,xe=ie.length;O<xe;O++){const me=n.get(ie[O]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&He(T)===!1){const ie=Q?E:[E];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let O=0;O<ie.length;O++){const xe=ie[O];F.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[O]);const me=s.convert(xe.format,xe.colorSpace),ge=s.convert(xe.type),ue=U(xe.internalFormat,me,ge,xe.colorSpace,T.isXRRenderTarget===!0),de=we(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ue,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,F.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),I(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ve(i.TEXTURE_CUBE_MAP,E,fe);for(let ie=0;ie<6;ie++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let O=0;O<E.mipmaps.length;O++)be(F.__webglFramebuffer[ie][O],T,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,O);else be(F.__webglFramebuffer[ie],T,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);w(E,fe)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const ie=T.texture;for(let O=0,xe=ie.length;O<xe;O++){const me=ie[O],ge=n.get(me);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),ve(i.TEXTURE_2D,me,fe),be(F.__webglFramebuffer,T,me,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,0),w(me,fe)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ie=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,te.__webglTexture),ve(ie,E,fe),o&&E.mipmaps&&E.mipmaps.length>0)for(let O=0;O<E.mipmaps.length;O++)be(F.__webglFramebuffer[O],T,E,i.COLOR_ATTACHMENT0,ie,O);else be(F.__webglFramebuffer,T,E,i.COLOR_ATTACHMENT0,ie,0);w(E,fe)&&b(ie),t.unbindTexture()}T.depthBuffer&&Ee(T)}function We(T){const E=x(T)||o,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,J=F.length;te<J;te++){const Q=F[te];if(w(Q,E)){const fe=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ie=n.get(Q).__webglTexture;t.bindTexture(fe,ie),b(fe),t.unbindTexture()}}}function Pe(T){if(o&&T.samples>0&&He(T)===!1){const E=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,te=T.height;let J=i.COLOR_BUFFER_BIT;const Q=[],fe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(T),O=T.isWebGLMultipleRenderTargets===!0;if(O)for(let xe=0;xe<E.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){Q.push(i.COLOR_ATTACHMENT0+xe),T.depthBuffer&&Q.push(fe);const me=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(me===!1&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),O&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]),me===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[fe])),O){const ge=n.get(E[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,F,te,0,0,F,te,J,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let xe=0;xe<E.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);const me=n.get(E[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function we(T){return Math.min(u,T.samples)}function He(T){const E=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function lt(T){const E=a.render.frame;g.get(T)!==E&&(g.set(T,E),T.update())}function Xe(T,E){const F=T.colorSpace,te=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Qa||F!==hn&&F!==li&&(F===Ze||F===Vs?o===!1?e.has("EXT_sRGB")===!0&&te===tn?(T.format=Qa,T.minFilter=Vt,T.generateMipmaps=!1):E=cu.sRGBToLinear(E):(te!==tn||J!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}this.allocateTextureUnit=Y,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=H,this.setTextureCube=re,this.rebindTextures=Re,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=be,this.useMultisampledRTT=He}const FE=0,ct=1;function OE(i,e,t){const n=t.isWebGL2;function r(s,a=li){let o;const l=a===Ze||a===Vs?ct:FE;if(s===Hn)return i.UNSIGNED_BYTE;if(s===tu)return i.UNSIGNED_SHORT_4_4_4_4;if(s===nu)return i.UNSIGNED_SHORT_5_5_5_1;if(s===pg)return i.BYTE;if(s===mg)return i.SHORT;if(s===Bo)return i.UNSIGNED_SHORT;if(s===eu)return i.INT;if(s===Fn)return i.UNSIGNED_INT;if(s===On)return i.FLOAT;if(s===wr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===gg)return i.ALPHA;if(s===tn)return i.RGBA;if(s===_g)return i.LUMINANCE;if(s===vg)return i.LUMINANCE_ALPHA;if(s===ai)return i.DEPTH_COMPONENT;if(s===ir)return i.DEPTH_STENCIL;if(s===Qa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===xg)return i.RED;if(s===iu)return i.RED_INTEGER;if(s===Eg)return i.RG;if(s===ru)return i.RG_INTEGER;if(s===su)return i.RGBA_INTEGER;if(s===sa||s===aa||s===oa||s===la)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===sa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===aa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===la)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ol||s===zl||s===Gl||s===Bl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ol)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hl||s===Vl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Hl)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Vl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===kl||s===Wl||s===Xl||s===Yl||s===ql||s===Kl||s===Zl||s===jl||s===$l||s===Jl||s===Ql||s===ec||s===tc||s===nc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===kl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ql)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$l)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ql)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ec)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ca||s===ic||s===rc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ca)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ic)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yg||s===sc||s===ac||s===oc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ca)return o.COMPRESSED_RED_RGTC1_EXT;if(s===sc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ac)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===oc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===si?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class zE extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ms extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GE={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(GE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class BE extends Pt{constructor(e,t,n,r,s,a,o,l,c,h){if(h=h!==void 0?h:ai,h!==ai&&h!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ai&&(n=Fn),n===void 0&&h===ir&&(n=si),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class HE extends or{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=t.getContextAttributes();let p=null,f=null;const y=[],v=[],x=new kt;x.layers.enable(1),x.viewport=new _t;const A=new kt;A.layers.enable(2),A.viewport=new _t;const w=[x,A],b=new zE;b.layers.enable(1),b.layers.enable(2);let U=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let H=y[G];return H===void 0&&(H=new Da,y[G]=H),H.getTargetRaySpace()},this.getControllerGrip=function(G){let H=y[G];return H===void 0&&(H=new Da,y[G]=H),H.getGripSpace()},this.getHand=function(G){let H=y[G];return H===void 0&&(H=new Da,y[G]=H),H.getHandSpace()};function R(G){const H=v.indexOf(G.inputSource);if(H===-1)return;const re=y[H];re!==void 0&&(re.update(G.inputSource,G.frame,c||a),re.dispatchEvent({type:G.type,data:G.inputSource}))}function Z(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",q);for(let G=0;G<y.length;G++){const H=v[G];H!==null&&(v[G]=null,y[G].disconnect(H))}U=null,M=null,e.setRenderTarget(p),m=null,d=null,u=null,r=null,f=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:m}),f=new ci(m.framebufferWidth,m.framebufferHeight,{format:tn,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let H=null,re=null,ee=null;_.depth&&(ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=_.stencil?ir:ai,re=_.stencil?si:Fn);const ne={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ne),r.updateRenderState({layers:[d]}),f=new ci(d.textureWidth,d.textureHeight,{format:tn,type:Hn,depthTexture:new BE(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const pe=e.properties.get(f);pe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(G){for(let H=0;H<G.removed.length;H++){const re=G.removed[H],ee=v.indexOf(re);ee>=0&&(v[ee]=null,y[ee].disconnect(re))}for(let H=0;H<G.added.length;H++){const re=G.added[H];let ee=v.indexOf(re);if(ee===-1){for(let pe=0;pe<y.length;pe++)if(pe>=v.length){v.push(re),ee=pe;break}else if(v[pe]===null){v[pe]=re,ee=pe;break}if(ee===-1)break}const ne=y[ee];ne&&ne.connect(re)}}const P=new L,B=new L;function V(G,H,re){P.setFromMatrixPosition(H.matrixWorld),B.setFromMatrixPosition(re.matrixWorld);const ee=P.distanceTo(B),ne=H.projectionMatrix.elements,pe=re.projectionMatrix.elements,ve=ne[14]/(ne[10]-1),he=ne[14]/(ne[10]+1),De=(ne[9]+1)/ne[5],dt=(ne[9]-1)/ne[5],be=(ne[8]-1)/ne[0],I=(pe[8]+1)/pe[0],ft=ve*be,Ee=ve*I,Re=ee/(-be+I),Me=Re*-be;H.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Me),G.translateZ(Re),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const We=ve+Re,Pe=he+Re,we=ft-Me,He=Ee+(ee-Me),lt=De*he/Pe*We,Xe=dt*he/Pe*We;G.projectionMatrix.makePerspective(we,He,lt,Xe,We,Pe),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function j(G,H){H===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(H.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;b.near=A.near=x.near=G.near,b.far=A.far=x.far=G.far,(U!==b.near||M!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,M=b.far);const H=G.parent,re=b.cameras;j(b,H);for(let ee=0;ee<re.length;ee++)j(re[ee],H);re.length===2?V(b,x,A):b.projectionMatrix.copy(x.projectionMatrix),z(G,b,H)};function z(G,H,re){re===null?G.matrix.copy(H.matrixWorld):(G.matrix.copy(re.matrixWorld),G.matrix.invert(),G.matrix.multiply(H.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(H.projectionMatrix),G.projectionMatrixInverse.copy(H.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=eo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let Y=null;function $(G,H){if(h=H.getViewerPose(c||a),g=H,h!==null){const re=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ee=!1;re.length!==b.cameras.length&&(b.cameras.length=0,ee=!0);for(let ne=0;ne<re.length;ne++){const pe=re[ne];let ve=null;if(m!==null)ve=m.getViewport(pe);else{const De=u.getViewSubImage(d,pe);ve=De.viewport,ne===0&&(e.setRenderTargetTextures(f,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(f))}let he=w[ne];he===void 0&&(he=new kt,he.layers.enable(ne),he.viewport=new _t,w[ne]=he),he.matrix.fromArray(pe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(pe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ve.x,ve.y,ve.width,ve.height),ne===0&&(b.matrix.copy(he.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ee===!0&&b.cameras.push(he)}}for(let re=0;re<y.length;re++){const ee=v[re],ne=y[re];ee!==null&&ne!==void 0&&ne.update(ee,H,c||a)}Y&&Y(G,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),g=null}const K=new Eu;K.setAnimationLoop($),this.setAnimationLoop=function(G){Y=G},this.dispose=function(){}}}function VE(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,_u(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,y,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,x)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,y,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Lt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Lt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Lt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function kE(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=r[y.id];x===void 0&&(g(y),x=h(y),r[y.id]=x,y.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(y,A);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function h(y){const v=u();y.__bindingPointIndex=v;const x=i.createBuffer(),A=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],x=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,b=x.length;w<b;w++){const U=x[w];if(m(U,w,A)===!0){const M=U.__offset,R=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let q=0;q<R.length;q++){const P=R[q],B=_(P);typeof P=="number"?(U.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,M+Z,U.__data)):P.isMatrix3?(U.__data[0]=P.elements[0],U.__data[1]=P.elements[1],U.__data[2]=P.elements[2],U.__data[3]=P.elements[0],U.__data[4]=P.elements[3],U.__data[5]=P.elements[4],U.__data[6]=P.elements[5],U.__data[7]=P.elements[0],U.__data[8]=P.elements[6],U.__data[9]=P.elements[7],U.__data[10]=P.elements[8],U.__data[11]=P.elements[0]):(P.toArray(U.__data,Z),Z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,U.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,v,x){const A=y.value;if(x[v]===void 0){if(typeof A=="number")x[v]=A;else{const w=Array.isArray(A)?A:[A],b=[];for(let U=0;U<w.length;U++)b.push(w[U].clone());x[v]=b}return!0}else if(typeof A=="number"){if(x[v]!==A)return x[v]=A,!0}else{const w=Array.isArray(x[v])?x[v]:[x[v]],b=Array.isArray(A)?A:[A];for(let U=0;U<w.length;U++){const M=w[U];if(M.equals(b[U])===!1)return M.copy(b[U]),!0}}return!1}function g(y){const v=y.uniforms;let x=0;const A=16;let w=0;for(let b=0,U=v.length;b<U;b++){const M=v[b],R={boundary:0,storage:0},Z=Array.isArray(M.value)?M.value:[M.value];for(let q=0,P=Z.length;q<P;q++){const B=Z[q],V=_(B);R.boundary+=V.boundary,R.storage+=V.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,b>0){w=x%A;const q=A-w;w!==0&&q-R.boundary<0&&(x+=A-w,M.__offset=x)}x+=R.storage}return w=x%A,w>0&&(x+=A-w),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Ru{constructor(e={}){const{canvas:t=Fg(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const v=this;let x=!1,A=0,w=0,b=null,U=-1,M=null;const R=new _t,Z=new _t;let q=null;const P=new Ge(0);let B=0,V=t.width,j=t.height,z=1,Y=null,$=null;const K=new _t(0,0,V,j),G=new _t(0,0,V,j);let H=!1;const re=new Ho;let ee=!1,ne=!1,pe=null;const ve=new ot,he=new Be,De=new L,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return b===null?z:1}let I=n;function ft(S,D){for(let W=0;W<S.length;W++){const N=S[W],X=t.getContext(N,D);if(X!==null)return X}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),I=ft(D,S),I===null)throw ft(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ee,Re,Me,We,Pe,we,He,lt,Xe,T,E,F,te,J,Q,fe,ie,O,xe,me,ge,ue,de,Ue;function Ye(){Ee=new Qv(I),Re=new qv(I,Ee,e),Ee.init(Re),ue=new OE(I,Ee,Re),Me=new UE(I,Ee,Re),We=new nx(I),Pe=new EE,we=new NE(I,Ee,Me,Pe,Re,ue,We),He=new Zv(v),lt=new Jv(v),Xe=new d_(I,Re),de=new Xv(I,Ee,Xe,Re),T=new ex(I,Xe,We,de),E=new ax(I,T,Xe,We),xe=new sx(I,Re,we),fe=new Kv(Pe),F=new xE(v,He,lt,Ee,Re,de,fe),te=new VE(v,Pe),J=new yE,Q=new wE(Ee,Re),O=new Wv(v,He,lt,Me,E,d,l),ie=new DE(v,E,Re),Ue=new kE(I,We,Re,Me),me=new Yv(I,Ee,We,Re),ge=new tx(I,Ee,We,Re),We.programs=F.programs,v.capabilities=Re,v.extensions=Ee,v.properties=Pe,v.renderLists=J,v.shadowMap=ie,v.state=Me,v.info=We}Ye();const C=new HE(v,I);this.xr=C,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(V,j,!1))},this.getSize=function(S){return S.set(V,j)},this.setSize=function(S,D,W=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,j=D,t.width=Math.floor(S*z),t.height=Math.floor(D*z),W===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(V*z,j*z).floor()},this.setDrawingBufferSize=function(S,D,W){V=S,j=D,z=W,t.width=Math.floor(S*W),t.height=Math.floor(D*W),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,D,W,N){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,D,W,N),Me.viewport(R.copy(K).multiplyScalar(z).floor())},this.getScissor=function(S){return S.copy(G)},this.setScissor=function(S,D,W,N){S.isVector4?G.set(S.x,S.y,S.z,S.w):G.set(S,D,W,N),Me.scissor(Z.copy(G).multiplyScalar(z).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(S){Me.setScissorTest(H=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor.apply(O,arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha.apply(O,arguments)},this.clear=function(S=!0,D=!0,W=!0){let N=0;if(S){let X=!1;if(b!==null){const ce=b.texture.format;X=ce===su||ce===ru||ce===iu}if(X){const ce=b.texture.type,ye=ce===Hn||ce===Fn||ce===Bo||ce===si||ce===tu||ce===nu,Te=O.getClearColor(),Ae=O.getClearAlpha(),Ne=Te.r,Se=Te.g,Ce=Te.b;ye?(m[0]=Ne,m[1]=Se,m[2]=Ce,m[3]=Ae,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ne,g[1]=Se,g[2]=Ce,g[3]=Ae,I.clearBufferiv(I.COLOR,0,g))}else N|=I.COLOR_BUFFER_BIT}D&&(N|=I.DEPTH_BUFFER_BIT),W&&(N|=I.STENCIL_BUFFER_BIT),I.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",se,!1),J.dispose(),Q.dispose(),Pe.dispose(),He.dispose(),lt.dispose(),E.dispose(),de.dispose(),Ue.dispose(),F.dispose(),C.dispose(),C.removeEventListener("sessionstart",Ke),C.removeEventListener("sessionend",nn),pe&&(pe.dispose(),pe=null),St.stop()};function oe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=We.autoReset,D=ie.enabled,W=ie.autoUpdate,N=ie.needsUpdate,X=ie.type;Ye(),We.autoReset=S,ie.enabled=D,ie.autoUpdate=W,ie.needsUpdate=N,ie.type=X}function se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function le(S){const D=S.target;D.removeEventListener("dispose",le),ze(D)}function ze(S){je(S),Pe.remove(S)}function je(S){const D=Pe.get(S).programs;D!==void 0&&(D.forEach(function(W){F.releaseProgram(W)}),S.isShaderMaterial&&F.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,W,N,X,ce){D===null&&(D=dt);const ye=X.isMesh&&X.matrixWorld.determinant()<0,Te=Lu(S,D,W,N,X);Me.setMaterial(N,ye);let Ae=W.index,Ne=1;if(N.wireframe===!0){if(Ae=T.getWireframeAttribute(W),Ae===void 0)return;Ne=2}const Se=W.drawRange,Ce=W.attributes.position;let $e=Se.start*Ne,tt=(Se.start+Se.count)*Ne;ce!==null&&($e=Math.max($e,ce.start*Ne),tt=Math.min(tt,(ce.start+ce.count)*Ne)),Ae!==null?($e=Math.max($e,0),tt=Math.min(tt,Ae.count)):Ce!=null&&($e=Math.max($e,0),tt=Math.min(tt,Ce.count));const Ot=tt-$e;if(Ot<0||Ot===1/0)return;de.setup(X,N,Te,W,Ae);let dn,rt=me;if(Ae!==null&&(dn=Xe.get(Ae),rt=ge,rt.setIndex(dn)),X.isMesh)N.wireframe===!0?(Me.setLineWidth(N.wireframeLinewidth*be()),rt.setMode(I.LINES)):rt.setMode(I.TRIANGLES);else if(X.isLine){let Fe=N.linewidth;Fe===void 0&&(Fe=1),Me.setLineWidth(Fe*be()),X.isLineSegments?rt.setMode(I.LINES):X.isLineLoop?rt.setMode(I.LINE_LOOP):rt.setMode(I.LINE_STRIP)}else X.isPoints?rt.setMode(I.POINTS):X.isSprite&&rt.setMode(I.TRIANGLES);if(X.isInstancedMesh)rt.renderInstances($e,Ot,X.count);else if(W.isInstancedBufferGeometry){const Fe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ys=Math.min(W.instanceCount,Fe);rt.renderInstances($e,Ot,Ys)}else rt.render($e,Ot)},this.compile=function(S,D){function W(N,X,ce){N.transparent===!0&&N.side===yn&&N.forceSinglePass===!1?(N.side=Lt,N.needsUpdate=!0,Br(N,X,ce),N.side=kn,N.needsUpdate=!0,Br(N,X,ce),N.side=yn):Br(N,X,ce)}p=Q.get(S),p.init(),y.push(p),S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(v._useLegacyLights),S.traverse(function(N){const X=N.material;if(X)if(Array.isArray(X))for(let ce=0;ce<X.length;ce++){const ye=X[ce];W(ye,S,N)}else W(X,S,N)}),y.pop(),p=null};let it=null;function Rn(S){it&&it(S)}function Ke(){St.stop()}function nn(){St.start()}const St=new Eu;St.setAnimationLoop(Rn),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(S){it=S,C.setAnimationLoop(S),S===null?St.stop():St.start()},C.addEventListener("sessionstart",Ke),C.addEventListener("sessionend",nn),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(D),D=C.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,D,b),p=Q.get(S,y.length),p.init(),y.push(p),ve.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),re.setFromProjectionMatrix(ve),ne=this.localClippingEnabled,ee=fe.init(this.clippingPlanes,ne),_=J.get(S,f.length),_.init(),f.push(_),Yo(S,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,$),this.info.render.frame++,ee===!0&&fe.beginShadows();const W=p.state.shadowsArray;if(ie.render(W,S,D),ee===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),O.render(_,S),p.setupLights(v._useLegacyLights),D.isArrayCamera){const N=D.cameras;for(let X=0,ce=N.length;X<ce;X++){const ye=N[X];qo(_,S,ye,ye.viewport)}}else qo(_,S,D);b!==null&&(we.updateMultisampleRenderTarget(b),we.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,D),de.resetDefaultState(),U=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Yo(S,D,W,N){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||re.intersectsSprite(S)){N&&De.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const ye=E.update(S),Te=S.material;Te.visible&&_.push(S,ye,Te,W,De.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||re.intersectsObject(S))){const ye=E.update(S),Te=S.material;if(N&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),De.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),De.copy(ye.boundingSphere.center)),De.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(Te)){const Ae=ye.groups;for(let Ne=0,Se=Ae.length;Ne<Se;Ne++){const Ce=Ae[Ne],$e=Te[Ce.materialIndex];$e&&$e.visible&&_.push(S,ye,$e,W,De.z,Ce)}}else Te.visible&&_.push(S,ye,Te,W,De.z,null)}}const ce=S.children;for(let ye=0,Te=ce.length;ye<Te;ye++)Yo(ce[ye],D,W,N)}function qo(S,D,W,N){const X=S.opaque,ce=S.transmissive,ye=S.transparent;p.setupLightsView(W),ee===!0&&fe.setGlobalState(v.clippingPlanes,W),ce.length>0&&Cu(X,ce,D,W),N&&Me.viewport(R.copy(N)),X.length>0&&Gr(X,D,W),ce.length>0&&Gr(ce,D,W),ye.length>0&&Gr(ye,D,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Cu(S,D,W,N){const X=Re.isWebGL2;pe===null&&(pe=new ci(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?wr:Hn,minFilter:br,samples:X?4:0})),v.getDrawingBufferSize(he),X?pe.setSize(he.x,he.y):pe.setSize(to(he.x),to(he.y));const ce=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(P),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();const ye=v.toneMapping;v.toneMapping=Bn,Gr(S,W,N),we.updateMultisampleRenderTarget(pe),we.updateRenderTargetMipmap(pe);let Te=!1;for(let Ae=0,Ne=D.length;Ae<Ne;Ae++){const Se=D[Ae],Ce=Se.object,$e=Se.geometry,tt=Se.material,Ot=Se.group;if(tt.side===yn&&Ce.layers.test(N.layers)){const dn=tt.side;tt.side=Lt,tt.needsUpdate=!0,Ko(Ce,W,N,$e,tt,Ot),tt.side=dn,tt.needsUpdate=!0,Te=!0}}Te===!0&&(we.updateMultisampleRenderTarget(pe),we.updateRenderTargetMipmap(pe)),v.setRenderTarget(ce),v.setClearColor(P,B),v.toneMapping=ye}function Gr(S,D,W){const N=D.isScene===!0?D.overrideMaterial:null;for(let X=0,ce=S.length;X<ce;X++){const ye=S[X],Te=ye.object,Ae=ye.geometry,Ne=N===null?ye.material:N,Se=ye.group;Te.layers.test(W.layers)&&Ko(Te,D,W,Ae,Ne,Se)}}function Ko(S,D,W,N,X,ce){S.onBeforeRender(v,D,W,N,X,ce),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(v,D,W,N,S,ce),X.transparent===!0&&X.side===yn&&X.forceSinglePass===!1?(X.side=Lt,X.needsUpdate=!0,v.renderBufferDirect(W,D,N,X,S,ce),X.side=kn,X.needsUpdate=!0,v.renderBufferDirect(W,D,N,X,S,ce),X.side=yn):v.renderBufferDirect(W,D,N,X,S,ce),S.onAfterRender(v,D,W,N,X,ce)}function Br(S,D,W){D.isScene!==!0&&(D=dt);const N=Pe.get(S),X=p.state.lights,ce=p.state.shadowsArray,ye=X.state.version,Te=F.getParameters(S,X.state,ce,D,W),Ae=F.getProgramCacheKey(Te);let Ne=N.programs;N.environment=S.isMeshStandardMaterial?D.environment:null,N.fog=D.fog,N.envMap=(S.isMeshStandardMaterial?lt:He).get(S.envMap||N.environment),Ne===void 0&&(S.addEventListener("dispose",le),Ne=new Map,N.programs=Ne);let Se=Ne.get(Ae);if(Se!==void 0){if(N.currentProgram===Se&&N.lightsStateVersion===ye)return Zo(S,Te),Se}else Te.uniforms=F.getUniforms(S),S.onBuild(W,Te,v),S.onBeforeCompile(Te,v),Se=F.acquireProgram(Te,Ae),Ne.set(Ae,Se),N.uniforms=Te.uniforms;const Ce=N.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=fe.uniform),Zo(S,Te),N.needsLights=Iu(S),N.lightsStateVersion=ye,N.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.directionalShadowMap.value=X.state.directionalShadowMap,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotShadowMap.value=X.state.spotShadowMap,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMap.value=X.state.pointShadowMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix);const $e=Se.getUniforms(),tt=Es.seqWithValue($e.seq,Ce);return N.currentProgram=Se,N.uniformsList=tt,Se}function Zo(S,D){const W=Pe.get(S);W.outputColorSpace=D.outputColorSpace,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Lu(S,D,W,N,X){D.isScene!==!0&&(D=dt),we.resetTextureUnits();const ce=D.fog,ye=N.isMeshStandardMaterial?D.environment:null,Te=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:hn,Ae=(N.isMeshStandardMaterial?lt:He).get(N.envMap||ye),Ne=N.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Se=!!W.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Ce=!!W.morphAttributes.position,$e=!!W.morphAttributes.normal,tt=!!W.morphAttributes.color;let Ot=Bn;N.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ot=v.toneMapping);const dn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=dn!==void 0?dn.length:0,Fe=Pe.get(N),Ys=p.state.lights;if(ee===!0&&(ne===!0||S!==M)){const Dt=S===M&&N.id===U;fe.setState(N,S,Dt)}let st=!1;N.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ys.state.version||Fe.outputColorSpace!==Te||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||Fe.envMap!==Ae||N.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==fe.numPlanes||Fe.numIntersection!==fe.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==Se||Fe.morphTargets!==Ce||Fe.morphNormals!==$e||Fe.morphColors!==tt||Fe.toneMapping!==Ot||Re.isWebGL2===!0&&Fe.morphTargetsCount!==rt)&&(st=!0):(st=!0,Fe.__version=N.version);let Xn=Fe.currentProgram;st===!0&&(Xn=Br(N,D,X));let jo=!1,hr=!1,qs=!1;const Tt=Xn.getUniforms(),Yn=Fe.uniforms;if(Me.useProgram(Xn.program)&&(jo=!0,hr=!0,qs=!0),N.id!==U&&(U=N.id,hr=!0),jo||M!==S){Tt.setValue(I,"projectionMatrix",S.projectionMatrix),Tt.setValue(I,"viewMatrix",S.matrixWorldInverse);const Dt=Tt.map.cameraPosition;Dt!==void 0&&Dt.setValue(I,De.setFromMatrixPosition(S.matrixWorld)),Re.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,hr=!0,qs=!0)}if(X.isSkinnedMesh){Tt.setOptional(I,X,"bindMatrix"),Tt.setOptional(I,X,"bindMatrixInverse");const Dt=X.skeleton;Dt&&(Re.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Tt.setValue(I,"boneTexture",Dt.boneTexture,we),Tt.setValue(I,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ks=W.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0&&Re.isWebGL2===!0)&&xe.update(X,W,Xn),(hr||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,Tt.setValue(I,"receiveShadow",X.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Yn.envMap.value=Ae,Yn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),hr&&(Tt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&Pu(Yn,qs),ce&&N.fog===!0&&te.refreshFogUniforms(Yn,ce),te.refreshMaterialUniforms(Yn,N,z,j,pe),Es.upload(I,Fe.uniformsList,Yn,we)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Es.upload(I,Fe.uniformsList,Yn,we),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Tt.setValue(I,"center",X.center),Tt.setValue(I,"modelViewMatrix",X.modelViewMatrix),Tt.setValue(I,"normalMatrix",X.normalMatrix),Tt.setValue(I,"modelMatrix",X.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Dt=N.uniformsGroups;for(let Zs=0,Du=Dt.length;Zs<Du;Zs++)if(Re.isWebGL2){const $o=Dt[Zs];Ue.update($o,Xn),Ue.bind($o,Xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xn}function Pu(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Iu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,D,W){Pe.get(S.texture).__webglTexture=D,Pe.get(S.depthTexture).__webglTexture=W;const N=Pe.get(S);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=W===void 0,N.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const W=Pe.get(S);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,W=0){b=S,A=D,w=W;let N=!0,X=null,ce=!1,ye=!1;if(S){const Ae=Pe.get(S);Ae.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(I.FRAMEBUFFER,null),N=!1):Ae.__webglFramebuffer===void 0?we.setupRenderTarget(S):Ae.__hasExternalTextures&&we.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const Se=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Se[D])?X=Se[D][W]:X=Se[D],ce=!0):Re.isWebGL2&&S.samples>0&&we.useMultisampledRTT(S)===!1?X=Pe.get(S).__webglMultisampledFramebuffer:Array.isArray(Se)?X=Se[W]:X=Se,R.copy(S.viewport),Z.copy(S.scissor),q=S.scissorTest}else R.copy(K).multiplyScalar(z).floor(),Z.copy(G).multiplyScalar(z).floor(),q=H;if(Me.bindFramebuffer(I.FRAMEBUFFER,X)&&Re.drawBuffers&&N&&Me.drawBuffers(S,X),Me.viewport(R),Me.scissor(Z),Me.setScissorTest(q),ce){const Ae=Pe.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,W)}else if(ye){const Ae=Pe.get(S.texture),Ne=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,Ne)}U=-1},this.readRenderTargetPixels=function(S,D,W,N,X,ce,ye){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){Me.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Ae=S.texture,Ne=Ae.format,Se=Ae.type;if(Ne!==tn&&ue.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Se===wr&&(Ee.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Se!==Hn&&ue.convert(Se)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===On&&(Re.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-N&&W>=0&&W<=S.height-X&&I.readPixels(D,W,N,X,ue.convert(Ne),ue.convert(Se),ce)}finally{const Ae=b!==null?Pe.get(b).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(S,D,W=0){const N=Math.pow(2,-W),X=Math.floor(D.image.width*N),ce=Math.floor(D.image.height*N);we.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,S.x,S.y,X,ce),Me.unbindTexture()},this.copyTextureToTexture=function(S,D,W,N=0){const X=D.image.width,ce=D.image.height,ye=ue.convert(W.format),Te=ue.convert(W.type);we.setTexture2D(W,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,S.x,S.y,X,ce,ye,Te,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,ye,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,N,S.x,S.y,ye,Te,D.image),N===0&&W.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(S,D,W,N,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=S.max.x-S.min.x+1,ye=S.max.y-S.min.y+1,Te=S.max.z-S.min.z+1,Ae=ue.convert(N.format),Ne=ue.convert(N.type);let Se;if(N.isData3DTexture)we.setTexture3D(N,0),Se=I.TEXTURE_3D;else if(N.isDataArrayTexture)we.setTexture2DArray(N,0),Se=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),$e=I.getParameter(I.UNPACK_IMAGE_HEIGHT),tt=I.getParameter(I.UNPACK_SKIP_PIXELS),Ot=I.getParameter(I.UNPACK_SKIP_ROWS),dn=I.getParameter(I.UNPACK_SKIP_IMAGES),rt=W.isCompressedTexture?W.mipmaps[0]:W.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,rt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,S.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S.min.z),W.isDataTexture||W.isData3DTexture?I.texSubImage3D(Se,X,D.x,D.y,D.z,ce,ye,Te,Ae,Ne,rt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Se,X,D.x,D.y,D.z,ce,ye,Te,Ae,rt.data)):I.texSubImage3D(Se,X,D.x,D.y,D.z,ce,ye,Te,Ae,Ne,rt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$e),I.pixelStorei(I.UNPACK_SKIP_PIXELS,tt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,dn),X===0&&N.generateMipmaps&&I.generateMipmap(Se),Me.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?we.setTextureCube(S,0):S.isData3DTexture?we.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?we.setTexture2DArray(S,0):we.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){A=0,w=0,b=null,Me.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ze?oi:au}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===oi?Ze:hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class WE extends Ru{}WE.prototype.isWebGL1Renderer=!0;class XE extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class bu extends lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qc=new L,Kc=new L,Zc=new ot,Ua=new du,gs=new ks;class YE extends xt{constructor(e=new un,t=new bu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)qc.fromBufferAttribute(t,r-1),Kc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=qc.distanceTo(Kc);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),gs.radius+=s,e.ray.intersectsSphere(gs)===!1)return;Zc.copy(r).invert(),Ua.copy(e.ray).applyMatrix4(Zc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,h=new L,u=new L,d=new L,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=f,x=y-1;v<x;v+=m){const A=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(p,A),h.fromBufferAttribute(p,w),Ua.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let v=f,x=y-1;v<x;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Ua.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const jc=new L,$c=new L;class qE extends YE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)jc.fromBufferAttribute(t,r),$c.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+jc.distanceTo($c);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class KE extends Pt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ko extends un{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],m=[];let g=0;const _=[],p=n/2;let f=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(m,2));function y(){const x=new L,A=new L;let w=0;const b=(t-e)/n;for(let U=0;U<=s;U++){const M=[],R=U/s,Z=R*(t-e)+e;for(let q=0;q<=r;q++){const P=q/r,B=P*l+o,V=Math.sin(B),j=Math.cos(B);A.x=Z*V,A.y=-R*n+p,A.z=Z*j,u.push(A.x,A.y,A.z),x.set(V,b,j).normalize(),d.push(x.x,x.y,x.z),m.push(P,1-R),M.push(g++)}_.push(M)}for(let U=0;U<r;U++)for(let M=0;M<s;M++){const R=_[M][U],Z=_[M+1][U],q=_[M+1][U+1],P=_[M][U+1];h.push(R,Z,P),h.push(Z,q,P),w+=6}c.addGroup(f,w,0),f+=w}function v(x){const A=g,w=new Be,b=new L;let U=0;const M=x===!0?e:t,R=x===!0?1:-1;for(let q=1;q<=r;q++)u.push(0,p*R,0),d.push(0,R,0),m.push(.5,.5),g++;const Z=g;for(let q=0;q<=r;q++){const B=q/r*l+o,V=Math.cos(B),j=Math.sin(B);b.x=M*j,b.y=p*R,b.z=M*V,u.push(b.x,b.y,b.z),d.push(0,R,0),w.x=V*.5+.5,w.y=j*.5*R+.5,m.push(w.x,w.y),g++}for(let q=0;q<r;q++){const P=A+q,B=Z+q;x===!0?h.push(B,B+1,P):h.push(B+1,B,P),U+=3}c.addGroup(f,U,x===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wo extends ko{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Wo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ZE extends lr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class jE extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Na=new ot,Jc=new L,Qc=new L;class $E{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jc),Qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qc),t.updateMatrixWorld(),Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class JE extends $E{constructor(){super(new Mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class QE extends jE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new JE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eM extends qE{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ge(n),r=new Ge(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,m=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===s?n:r;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const h=new un;h.setAttribute("position",new It(l,3)),h.setAttribute("color",new It(c,3));const u=new bu({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);const Er=1e3,io=1e3;let Ls,ro=0,so=0,Qt,Qn=.04,ao=0,oo=0,eh=3,th=100,Mn=25,nh=1,ih=10,Ni=3,rn=new L(0,0,0),Fi=new L(0,0,Mn),jt=new L(0,0,1),gr=jt.clone(),lo,$t,_s,rh,ri,co,ho,Qi,et;const tM=new Array;let uo,Wi,Fa=0;function nM(){navbarExitFullscreen.classList.remove("d-none"),navbarEnterFullscreen.classList.add("d-none"),document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen()}function iM(){navbarExitFullscreen.classList.add("d-none"),navbarEnterFullscreen.classList.remove("d-none"),document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}let Xo=!1;function rM(i){Xo=!0,ro=i.screenX,so=i.screenY,hudModeFollow.checked&&(hudModeFree.checked||(hudModeFree.checked=!0))}function sM(i){Xo=!1}function aM(i){Xo&&(ao+=(ro-i.screenX)/50,oo-=(so-i.screenY)/50,ro=i.screenX,so=i.screenY)}function oM(i){hudViewpointTop.checked?(Mn+=Mn*i.deltaY/360,Mn<eh?Mn=eh:Mn>th&&(Mn=th)):hudViewpointBack.checked&&(Ni+=Ni*i.deltaY/360,Ni<nh?Ni=nh:Ni>ih&&(Ni=ih))}function lM(i){switch(console.log(i.keyCode),i.keyCode){case 37:et.rotation.z+=.01;break;case 39:et.rotation.z-=.01;break}}function cM(){const i=window.innerWidth,e=window.innerHeight;Qt.aspect=i/e,Qt.updateProjectionMatrix(),Ls.setSize(i,e)}function hM(){let i=document.getElementById("mapCanvas").children[0].children[0].children[0].children[0];const e=new KE(i),t=new Ji({map:e});ri!=null&&$t.remove(ri),ri=new Ft(co,t),$t.add(ri)}function uM(){[...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(e=>new bootstrap.Tooltip(e)),window.addEventListener("resize",cM),document.addEventListener("keydown",lM),navbarEnterFullscreen.addEventListener("click",nM),navbarExitFullscreen.addEventListener("click",iM),fM(),dM(),pM()}function dM(){Wi=new Stats,Wi.showPanel(0),Wi.dom.style="",debugCardFPS.appendChild(Wi.dom)}function fM(){threeCanvas.addEventListener("mousedown",rM),threeCanvas.addEventListener("mouseup",sM),threeCanvas.addEventListener("mousemove",aM),threeCanvas.addEventListener("wheel",oM),Ls=new Ru({canvas:threeCanvas,antialias:!0}),Ls.setSize(window.innerWidth,window.innerHeight),Qt=new kt(75,window.innerWidth/window.innerHeight,.1,1e3),$t=new XE,$t.background=new Ge(10408698),lo=new QE(16777215,.8),$t.add(lo);let i=new Cr(Er,Er,1,1),e=new Ji({color:8429915});ho=new Ft(i,e),$t.add(ho),Qi=new eM(Er,io,14540253,14540253),Qi.rotateX(Math.PI/2),$t.add(Qi),co=new Cr(100,100),co.translate(0,0,.001);let t=new hi(.1,1,.1);t.rotateY(Math.PI/2),t.translate(0,0,.05);let n=new Ji({color:65280,wireframe:!0});et=new Ft(t,n),$t.add(et);let r=new Wo(.2,1,20);r.rotateX(Math.PI/2),r.translate(0,0,.5);let s=new ZE({color:2162464});for(let l=0;l<10;l++)for(let c=0;c<100;c++){const h=new Ft(r,s);h.position.y=-9+c*2,h.position.x=-9+l*2,tM.push(h),$t.add(h)}let a=new hi(.01,.01,.01),o=new Ji({color:16711680});uo=new Ft(a,o),$t.add(uo)}function pM(){Dd(),_s=new an({center:[0,0],zoom:1}),rh=new jp({target:"mapCanvas",layers:[new gm({source:new Om})],view:_s}),rh.on("postrender",hM),_s.setCenter([16.94529940000001,46.685864200000026]),_s.setZoom(22)}function wu(){Wi.begin(),mM(),gM();let i=new L(Math.cos(Math.PI/180*Fa)*.1,Math.sin(Math.PI/180*Fa*3)*.1,.2);i.add(et.position),uo.position.copy(i),_M(),lo.position.copy(Qt.position),Ls.render($t,Qt),Wi.end(),Fa++,requestAnimationFrame(wu)}function mM(){et.rotation.z-=.005;const i=new L(0,.01,0);i.applyEuler(et.rotation),et.position.addScaledVector(i,1)}function gM(){hudGroundMap.checked?(ri.visible=!0,Qi.visible=!1):hudGroundGrid.checked&&(ri!=null&&(ri.visible=!1),Qi.visible=!0),ho.position.set(et.position.x,et.position.y,0),Qi.position.set(et.position.x-et.position.x%(Er/io),et.position.y-et.position.y%(Er/io),.001)}function _M(){hudModeFollow.checked?(hudViewpointTop.checked?(ao=et.position.x,oo=et.position.y,rn.set(0,0,Mn),Fi.lerp(rn,Qn),jt.set(0,1,0),hudHeadingFront.checked&&jt.applyEuler(et.rotation),gr.lerp(jt,Qn)):hudViewpointBack.checked&&(rn.set(0,-2,.8),hudHeadingFront.checked&&rn.applyEuler(et.rotation),Fi.lerp(rn,Qn),jt.set(0,0,1),gr.lerp(jt,Qn)),Qt.up.copy(gr),Qt.position.copy(et.position),Qt.position.add(Fi),Qt.lookAt(et.position)):hudModeFree.checked&&(hudViewpointTop.checked?(rn.set(ao,oo,Mn),Fi.copy(rn),jt.set(0,1,0),hudHeadingFront.checked&&jt.applyEuler(et.rotation),gr.lerp(jt,Qn)):hudViewpointBack.checked&&(rn.set(0,-2,.8),hudHeadingFront.checked&&rn.applyEuler(et.rotation),Fi.lerp(rn,Qn),jt.set(0,0,1),gr.lerp(jt,Qn)),Qt.up.set(0,0,1),Qt.position.copy(Fi))}uM();wu();
//# sourceMappingURL=index-b05a3064.js.map
