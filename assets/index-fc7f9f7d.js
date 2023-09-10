(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();class Uu{constructor(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}const kn=Uu,Tr={PROPERTYCHANGE:"propertychange"};class Nu{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}const fa=Nu;function pa(i,e){return i>e?1:i<e?-1:0}function ma(i,e,t){if(i[0]<=e)return 0;const n=i.length;if(e<=i[n-1])return n-1;if(typeof t=="function"){for(let r=1;r<n;++r){const s=i[r];if(s===e)return r;if(s<e)return t(e,i[r-1],s)>0?r-1:r}return n-1}if(t>0){for(let r=1;r<n;++r)if(i[r]<e)return r-1;return n-1}if(t<0){for(let r=1;r<n;++r)if(i[r]<=e)return r;return n-1}for(let r=1;r<n;++r){if(i[r]==e)return r;if(i[r]<e)return i[r-1]-e<e-i[r]?r-1:r}return n-1}function Ou(i,e){const t=Array.isArray(e)?e:[e],n=t.length;for(let r=0;r<n;r++)i[i.length]=t[r]}function Ns(i,e){const t=i.length;if(t!==e.length)return!1;for(let n=0;n<t;n++)if(i[n]!==e[n])return!1;return!0}function Fu(i,e,t){const n=e||pa;return i.every(function(r,s){if(s===0)return!0;const a=n(i[s-1],r);return!(a>0||t&&a===0)})}function bs(){return!0}function Os(){return!1}function As(){}function zu(i){let e=!1,t,n,r;return function(){const s=Array.prototype.slice.call(arguments);return(!e||this!==r||!Ns(s,n))&&(e=!0,r=this,n=s,t=i.apply(this,arguments)),t}}function Fs(i){for(const e in i)delete i[e]}function Gu(i){let e;for(e in i)return!1;return!e}class Bu extends fa{constructor(e){super(),this.eventTarget_=e,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(e,t){if(!e||!t)return;const n=this.listeners_||(this.listeners_={}),r=n[e]||(n[e]=[]);r.includes(t)||r.push(t)}dispatchEvent(e){const t=typeof e=="string",n=t?e:e.type,r=this.listeners_&&this.listeners_[n];if(!r)return;const s=t?new kn(e):e;s.target||(s.target=this.eventTarget_||this);const a=this.dispatching_||(this.dispatching_={}),o=this.pendingRemovals_||(this.pendingRemovals_={});n in a||(a[n]=0,o[n]=0),++a[n];let l;for(let c=0,h=r.length;c<h;++c)if("handleEvent"in r[c]?l=r[c].handleEvent(s):l=r[c].call(this,s),l===!1||s.propagationStopped){l=!1;break}if(--a[n]===0){let c=o[n];for(delete o[n];c--;)this.removeEventListener(n,As);delete a[n]}return l}disposeInternal(){this.listeners_&&Fs(this.listeners_)}getListeners(e){return this.listeners_&&this.listeners_[e]||void 0}hasListener(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(e,t){const n=this.listeners_&&this.listeners_[e];if(n){const r=n.indexOf(t);r!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(n[r]=As,++this.pendingRemovals_[e]):(n.splice(r,1),n.length===0&&delete this.listeners_[e]))}}}const ga=Bu,He={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function Xe(i,e,t,n,r){if(n&&n!==i&&(t=t.bind(n)),r){const a=t;t=function(){i.removeEventListener(e,t),a.apply(this,arguments)}}const s={target:i,type:e,listener:t};return i.addEventListener(e,t),s}function Rs(i,e,t,n){return Xe(i,e,t,n,!0)}function st(i){i&&i.target&&(i.target.removeEventListener(i.type,i.listener),Fs(i))}class zs extends ga{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(He.CHANGE)}getRevision(){return this.revision_}onInternal(e,t){if(Array.isArray(e)){const n=e.length,r=new Array(n);for(let s=0;s<n;++s)r[s]=Xe(this,e[s],t);return r}return Xe(this,e,t)}onceInternal(e,t){let n;if(Array.isArray(e)){const r=e.length;n=new Array(r);for(let s=0;s<r;++s)n[s]=Rs(this,e[s],t)}else n=Rs(this,e,t);return t.ol_key=n,n}unInternal(e,t){const n=t.ol_key;if(n)Hu(n);else if(Array.isArray(e))for(let r=0,s=e.length;r<s;++r)this.removeEventListener(e[r],t);else this.removeEventListener(e,t)}}zs.prototype.on;zs.prototype.once;zs.prototype.un;function Hu(i){if(Array.isArray(i))for(let e=0,t=i.length;e<t;++e)st(i[e]);else st(i)}const oh=zs;function et(){throw new Error("Unimplemented abstract method.")}let Vu=0;function Ct(i){return i.ol_uid||(i.ol_uid=String(++Vu))}class Qa extends kn{constructor(e,t,n){super(e),this.key=t,this.oldValue=n}}class ku extends oh{constructor(e){super(),this.on,this.once,this.un,Ct(this),this.values_=null,e!==void 0&&this.setProperties(e)}get(e){let t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,t){let n;n=`change:${e}`,this.hasListener(n)&&this.dispatchEvent(new Qa(n,e,t)),n=Tr.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new Qa(n,e,t))}addChangeListener(e,t){this.addEventListener(`change:${e}`,t)}removeChangeListener(e,t){this.removeEventListener(`change:${e}`,t)}set(e,t,n){const r=this.values_||(this.values_={});if(n)r[e]=t;else{const s=r[e];r[e]=t,s!==t&&this.notify(e,s)}}setProperties(e,t){for(const n in e)this.set(n,e[n],t)}applyProperties(e){e.values_&&Object.assign(this.values_||(this.values_={}),e.values_)}unset(e,t){if(this.values_&&e in this.values_){const n=this.values_[e];delete this.values_[e],Gu(this.values_)&&(this.values_=null),t||this.notify(e,n)}}}const Sn=ku,Vt={ADD:"add",REMOVE:"remove"},el={LENGTH:"length"};class kr extends kn{constructor(e,t,n){super(e),this.element=t,this.index=n}}class Wu extends Sn{constructor(e,t){if(super(),this.on,this.once,this.un,t=t||{},this.unique_=!!t.unique,this.array_=e||[],this.unique_)for(let n=0,r=this.array_.length;n<r;++n)this.assertUnique_(this.array_[n],n);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(e){for(let t=0,n=e.length;t<n;++t)this.push(e[t]);return this}forEach(e){const t=this.array_;for(let n=0,r=t.length;n<r;++n)e(t[n],n,t)}getArray(){return this.array_}item(e){return this.array_[e]}getLength(){return this.get(el.LENGTH)}insertAt(e,t){if(e<0||e>this.getLength())throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t),this.array_.splice(e,0,t),this.updateLength_(),this.dispatchEvent(new kr(Vt.ADD,t,e))}pop(){return this.removeAt(this.getLength()-1)}push(e){this.unique_&&this.assertUnique_(e);const t=this.getLength();return this.insertAt(t,e),this.getLength()}remove(e){const t=this.array_;for(let n=0,r=t.length;n<r;++n)if(t[n]===e)return this.removeAt(n)}removeAt(e){if(e<0||e>=this.getLength())return;const t=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new kr(Vt.REMOVE,t,e)),t}setAt(e,t){const n=this.getLength();if(e>=n){this.insertAt(e,t);return}if(e<0)throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t,e);const r=this.array_[e];this.array_[e]=t,this.dispatchEvent(new kr(Vt.REMOVE,r,e)),this.dispatchEvent(new kr(Vt.ADD,t,e))}updateLength_(){this.set(el.LENGTH,this.array_.length)}assertUnique_(e,t){for(let n=0,r=this.array_.length;n<r;++n)if(this.array_[n]===e&&n!==t)throw new Error("Duplicate item added to a unique collection")}}const Mn=Wu;function qe(i,e){if(!i)throw new Error(e)}const Hn=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",Xu=Hn.includes("firefox"),Yu=Hn.includes("safari")&&!Hn.includes("chrom");Yu&&(Hn.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(Hn));const ju=Hn.includes("webkit")&&!Hn.includes("edge"),ah=Hn.includes("macintosh"),lh=typeof devicePixelRatio<"u"?devicePixelRatio:1,ch=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,Ku=typeof Image<"u"&&Image.prototype.decode,hh=function(){let i=!1;try{const e=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return i}();new Array(6);function ji(){return[1,0,0,1,0,0]}function Bt(i,e){const t=e[0],n=e[1];return e[0]=i[0]*t+i[2]*n+i[4],e[1]=i[1]*t+i[3]*n+i[5],e}function br(i,e,t,n,r,s,a,o){const l=Math.sin(s),c=Math.cos(s);return i[0]=n*c,i[1]=r*l,i[2]=-n*l,i[3]=r*c,i[4]=a*n*c-o*n*l+e,i[5]=a*r*l+o*r*c+t,i}function uh(i,e){const t=qu(e);qe(t!==0,"Transformation matrix cannot be inverted");const n=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5];return i[0]=a/t,i[1]=-r/t,i[2]=-s/t,i[3]=n/t,i[4]=(s*l-a*o)/t,i[5]=-(n*l-r*o)/t,i}function qu(i){return i[0]*i[3]-i[1]*i[2]}let tl;function Zu(i){const e="matrix("+i.join(", ")+")";if(ch)return e;const t=tl||(tl=document.createElement("div"));return t.style.transform=e,t.style.transform}const vt={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function nl(i){const e=hi();for(let t=0,n=i.length;t<n;++t)ys(e,i[t]);return e}function $u(i,e,t){const n=Math.min.apply(null,i),r=Math.min.apply(null,e),s=Math.max.apply(null,i),a=Math.max.apply(null,e);return ar(n,r,s,a,t)}function Ju(i,e){return e?(e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e):i.slice()}function dh(i,e,t){let n,r;return e<i[0]?n=i[0]-e:i[2]<e?n=e-i[2]:n=0,t<i[1]?r=i[1]-t:i[3]<t?r=t-i[3]:r=0,n*n+r*r}function _a(i,e){return fh(i,e[0],e[1])}function Qu(i,e){return i[0]<=e[0]&&e[2]<=i[2]&&i[1]<=e[1]&&e[3]<=i[3]}function fh(i,e,t){return i[0]<=e&&e<=i[2]&&i[1]<=t&&t<=i[3]}function il(i,e){const t=i[0],n=i[1],r=i[2],s=i[3],a=e[0],o=e[1];let l=vt.UNKNOWN;return a<t?l=l|vt.LEFT:a>r&&(l=l|vt.RIGHT),o<n?l=l|vt.BELOW:o>s&&(l=l|vt.ABOVE),l===vt.UNKNOWN&&(l=vt.INTERSECTING),l}function hi(){return[1/0,1/0,-1/0,-1/0]}function ar(i,e,t,n,r){return r?(r[0]=i,r[1]=e,r[2]=t,r[3]=n,r):[i,e,t,n]}function Dr(i){return ar(1/0,1/0,-1/0,-1/0,i)}function ed(i,e){const t=i[0],n=i[1];return ar(t,n,t,n,e)}function td(i,e,t,n,r){const s=Dr(r);return ph(s,i,e,t,n)}function ko(i,e){return i[0]==e[0]&&i[2]==e[2]&&i[1]==e[1]&&i[3]==e[3]}function nd(i,e){return e[0]<i[0]&&(i[0]=e[0]),e[2]>i[2]&&(i[2]=e[2]),e[1]<i[1]&&(i[1]=e[1]),e[3]>i[3]&&(i[3]=e[3]),i}function ys(i,e){e[0]<i[0]&&(i[0]=e[0]),e[0]>i[2]&&(i[2]=e[0]),e[1]<i[1]&&(i[1]=e[1]),e[1]>i[3]&&(i[3]=e[1])}function ph(i,e,t,n,r){for(;t<n;t+=r)id(i,e[t],e[t+1]);return i}function id(i,e,t){i[0]=Math.min(i[0],e),i[1]=Math.min(i[1],t),i[2]=Math.max(i[2],e),i[3]=Math.max(i[3],t)}function mh(i,e){let t;return t=e(Gs(i)),t||(t=e(Bs(i)),t)||(t=e(Hs(i)),t)||(t=e(ui(i)),t)?t:!1}function Wo(i){let e=0;return Nr(i)||(e=mt(i)*an(i)),e}function Gs(i){return[i[0],i[1]]}function Bs(i){return[i[2],i[1]]}function Ar(i){return[(i[0]+i[2])/2,(i[1]+i[3])/2]}function rd(i,e){let t;if(e==="bottom-left")t=Gs(i);else if(e==="bottom-right")t=Bs(i);else if(e==="top-left")t=ui(i);else if(e==="top-right")t=Hs(i);else throw new Error("Invalid corner");return t}function Xo(i,e,t,n,r){const[s,a,o,l,c,h,u,d]=Yo(i,e,t,n);return ar(Math.min(s,o,c,u),Math.min(a,l,h,d),Math.max(s,o,c,u),Math.max(a,l,h,d),r)}function Yo(i,e,t,n){const r=e*n[0]/2,s=e*n[1]/2,a=Math.cos(t),o=Math.sin(t),l=r*a,c=r*o,h=s*a,u=s*o,d=i[0],m=i[1];return[d-l+u,m-c-h,d-l-u,m-c+h,d+l-u,m+c+h,d+l+u,m+c-h,d-l+u,m-c-h]}function an(i){return i[3]-i[1]}function vr(i,e,t){const n=t||hi();return Ur(i,e)?(i[0]>e[0]?n[0]=i[0]:n[0]=e[0],i[1]>e[1]?n[1]=i[1]:n[1]=e[1],i[2]<e[2]?n[2]=i[2]:n[2]=e[2],i[3]<e[3]?n[3]=i[3]:n[3]=e[3]):Dr(n),n}function ui(i){return[i[0],i[3]]}function Hs(i){return[i[2],i[3]]}function mt(i){return i[2]-i[0]}function Ur(i,e){return i[0]<=e[2]&&i[2]>=e[0]&&i[1]<=e[3]&&i[3]>=e[1]}function Nr(i){return i[2]<i[0]||i[3]<i[1]}function sd(i,e){return e?(e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e):i}function od(i,e,t){let n=!1;const r=il(i,e),s=il(i,t);if(r===vt.INTERSECTING||s===vt.INTERSECTING)n=!0;else{const a=i[0],o=i[1],l=i[2],c=i[3],h=e[0],u=e[1],d=t[0],m=t[1],g=(m-u)/(d-h);let _,p;s&vt.ABOVE&&!(r&vt.ABOVE)&&(_=d-(m-c)/g,n=_>=a&&_<=l),!n&&s&vt.RIGHT&&!(r&vt.RIGHT)&&(p=m-(d-l)*g,n=p>=o&&p<=c),!n&&s&vt.BELOW&&!(r&vt.BELOW)&&(_=d-(m-o)/g,n=_>=a&&_<=l),!n&&s&vt.LEFT&&!(r&vt.LEFT)&&(p=m-(d-a)*g,n=p>=o&&p<=c)}return n}function ad(i,e,t,n){if(Nr(i))return Dr(t);let r=[];if(n>1){const o=i[2]-i[0],l=i[3]-i[1];for(let c=0;c<n;++c)r.push(i[0]+o*c/n,i[1],i[2],i[1]+l*c/n,i[2]-o*c/n,i[3],i[0],i[3]-l*c/n)}else r=[i[0],i[1],i[2],i[1],i[2],i[3],i[0],i[3]];e(r,r,2);const s=[],a=[];for(let o=0,l=r.length;o<l;o+=2)s.push(r[o]),a.push(r[o+1]);return $u(s,a,t)}const Rr={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};class ld{constructor(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent!==void 0?e.extent:null,this.worldExtent_=e.worldExtent!==void 0?e.worldExtent:null,this.axisOrientation_=e.axisOrientation!==void 0?e.axisOrientation:"enu",this.global_=e.global!==void 0?e.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||Rr[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(e){this.defaultTileGrid_=e}setExtent(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)}setWorldExtent(e){this.worldExtent_=e}setGetPointResolution(e){this.getPointResolutionFunc_=e}getPointResolutionFunc(){return this.getPointResolutionFunc_}}const gh=ld,Or=6378137,ki=Math.PI*Or,cd=[-ki,-ki,ki,ki],hd=[-180,-85,180,85],Wr=Or*Math.log(Math.tan(Math.PI/2));class fi extends gh{constructor(e){super({code:e,units:"m",extent:cd,global:!0,worldExtent:hd,getPointResolution:function(t,n){return t/Math.cosh(n[1]/Or)}})}}const rl=[new fi("EPSG:3857"),new fi("EPSG:102100"),new fi("EPSG:102113"),new fi("EPSG:900913"),new fi("http://www.opengis.net/def/crs/EPSG/0/3857"),new fi("http://www.opengis.net/gml/srs/epsg.xml#3857")];function ud(i,e,t){const n=i.length;t=t>1?t:2,e===void 0&&(t>2?e=i.slice():e=new Array(n));for(let r=0;r<n;r+=t){e[r]=ki*i[r]/180;let s=Or*Math.log(Math.tan(Math.PI*(+i[r+1]+90)/360));s>Wr?s=Wr:s<-Wr&&(s=-Wr),e[r+1]=s}return e}function dd(i,e,t){const n=i.length;t=t>1?t:2,e===void 0&&(t>2?e=i.slice():e=new Array(n));for(let r=0;r<n;r+=t)e[r]=180*i[r]/ki,e[r+1]=360*Math.atan(Math.exp(i[r+1]/Or))/Math.PI-90;return e}const fd=6378137,sl=[-180,-90,180,90],pd=Math.PI*fd/180;class Yn extends gh{constructor(e,t){super({code:e,units:"degrees",extent:sl,axisOrientation:t,global:!0,metersPerUnit:pd,worldExtent:sl})}}const ol=[new Yn("CRS:84"),new Yn("EPSG:4326","neu"),new Yn("urn:ogc:def:crs:OGC:1.3:CRS84"),new Yn("urn:ogc:def:crs:OGC:2:84"),new Yn("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new Yn("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new Yn("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];let jo={};function md(i){return jo[i]||jo[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function gd(i,e){jo[i]=e}let Ki={};function ws(i,e,t){const n=i.getCode(),r=e.getCode();n in Ki||(Ki[n]={}),Ki[n][r]=t}function _d(i,e){let t;return i in Ki&&e in Ki[i]&&(t=Ki[i][e]),t}function gt(i,e,t){return Math.min(Math.max(i,e),t)}function vd(i,e,t,n,r,s){const a=r-t,o=s-n;if(a!==0||o!==0){const l=((i-t)*a+(e-n)*o)/(a*a+o*o);l>1?(t=r,n=s):l>0&&(t+=a*l,n+=o*l)}return qi(i,e,t,n)}function qi(i,e,t,n){const r=t-i,s=n-e;return r*r+s*s}function xd(i){const e=i.length;for(let n=0;n<e;n++){let r=n,s=Math.abs(i[n][n]);for(let o=n+1;o<e;o++){const l=Math.abs(i[o][n]);l>s&&(s=l,r=o)}if(s===0)return null;const a=i[r];i[r]=i[n],i[n]=a;for(let o=n+1;o<e;o++){const l=-i[o][n]/i[n][n];for(let c=n;c<e+1;c++)n==c?i[o][c]=0:i[o][c]+=l*i[n][c]}}const t=new Array(e);for(let n=e-1;n>=0;n--){t[n]=i[n][e]/i[n][n];for(let r=n-1;r>=0;r--)i[r][e]-=i[r][n]*t[n]}return t}function Ss(i){return i*Math.PI/180}function Zi(i,e){const t=i%e;return t*e<0?t+e:t}function Ed(i,e,t){return i+t*(e-i)}function _h(i,e){const t=Math.pow(10,e);return Math.round(i*t)/t}function Xr(i,e){return Math.floor(_h(i,e))}function Yr(i,e){return Math.ceil(_h(i,e))}function Md(i,e){return i[0]+=+e[0],i[1]+=+e[1],i}function Cs(i,e){let t=!0;for(let n=i.length-1;n>=0;--n)if(i[n]!=e[n]){t=!1;break}return t}function va(i,e){const t=Math.cos(e),n=Math.sin(e),r=i[0]*t-i[1]*n,s=i[1]*t+i[0]*n;return i[0]=r,i[1]=s,i}function yd(i,e){return i[0]*=e,i[1]*=e,i}function Sd(i,e){if(e.canWrapX()){const t=mt(e.getExtent()),n=Td(i,e,t);n&&(i[0]-=n*t)}return i}function Td(i,e,t){const n=e.getExtent();let r=0;return e.canWrapX()&&(i[0]<n[0]||i[0]>n[2])&&(t=t||mt(n),r=Math.floor((i[0]-n[0])/t)),r}const bd=63710088e-1;function al(i,e,t){t=t||bd;const n=Ss(i[1]),r=Ss(e[1]),s=(r-n)/2,a=Ss(e[0]-i[0])/2,o=Math.sin(s)*Math.sin(s)+Math.sin(a)*Math.sin(a)*Math.cos(n)*Math.cos(r);return 2*t*Math.atan2(Math.sqrt(o),Math.sqrt(1-o))}const vh={info:1,warn:2,error:3,none:4};let Ad=vh.info;function xh(...i){Ad>vh.warn||console.warn(...i)}let Ko=!0;function Rd(i){Ko=!(i===void 0?!0:i)}function xa(i,e){if(e!==void 0){for(let t=0,n=i.length;t<n;++t)e[t]=i[t];e=e}else e=i.slice();return e}function Eh(i,e){if(e!==void 0&&i!==e){for(let t=0,n=i.length;t<n;++t)e[t]=i[t];i=e}return i}function wd(i){gd(i.getCode(),i),ws(i,i,xa)}function Cd(i){i.forEach(wd)}function Xt(i){return typeof i=="string"?md(i):i||null}function ll(i,e,t,n){i=Xt(i);let r;const s=i.getPointResolutionFunc();if(s){if(r=s(e,t),n&&n!==i.getUnits()){const a=i.getMetersPerUnit();a&&(r=r*a/Rr[n])}}else{const a=i.getUnits();if(a=="degrees"&&!n||n=="degrees")r=e;else{const o=Ma(i,Xt("EPSG:4326"));if(o===Eh&&a!=="degrees")r=e*i.getMetersPerUnit();else{let c=[t[0]-e/2,t[1],t[0]+e/2,t[1],t[0],t[1]-e/2,t[0],t[1]+e/2];c=o(c,c,2);const h=al(c.slice(0,2),c.slice(2,4)),u=al(c.slice(4,6),c.slice(6,8));r=(h+u)/2}const l=n?Rr[n]:i.getMetersPerUnit();l!==void 0&&(r/=l)}}return r}function cl(i){Cd(i),i.forEach(function(e){i.forEach(function(t){e!==t&&ws(e,t,xa)})})}function Ld(i,e,t,n){i.forEach(function(r){e.forEach(function(s){ws(r,s,t),ws(s,r,n)})})}function Ea(i,e){return i?typeof i=="string"?Xt(i):i:Xt(e)}function Fi(i,e){if(i===e)return!0;const t=i.getUnits()===e.getUnits();return(i.getCode()===e.getCode()||Ma(i,e)===xa)&&t}function Ma(i,e){const t=i.getCode(),n=e.getCode();let r=_d(t,n);return r||(r=Eh),r}function wr(i,e){const t=Xt(i),n=Xt(e);return Ma(t,n)}function ya(i,e,t){return wr(e,t)(i,void 0,i.length)}function Mh(i,e,t,n){const r=wr(e,t);return ad(i,r,void 0,n)}let ln=null;function Pd(i){ln=Xt(i)}function Id(){return ln}function Dd(){Pd("EPSG:4326")}function qo(i,e){return ln?ya(i,e,ln):i}function vn(i,e){return ln?ya(i,ln,e):(Ko&&!Cs(i,[0,0])&&i[0]>=-180&&i[0]<=180&&i[1]>=-90&&i[1]<=90&&(Ko=!1,xh("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),i)}function Ud(i,e){return ln?Mh(i,e,ln):i}function Wi(i,e){return ln?Mh(i,ln,e):i}function Nd(){cl(rl),cl(ol),Ld(ol,rl,ud,dd)}Nd();function Od(i,e,t,n,r,s){s=s||[];let a=0;for(let o=e;o<t;o+=n){const l=i[o],c=i[o+1];s[a++]=r[0]*l+r[2]*c+r[4],s[a++]=r[1]*l+r[3]*c+r[5]}return s&&s.length!=a&&(s.length=a),s}function Fd(i,e,t,n,r,s,a){a=a||[];const o=Math.cos(r),l=Math.sin(r),c=s[0],h=s[1];let u=0;for(let d=e;d<t;d+=n){const m=i[d]-c,g=i[d+1]-h;a[u++]=c+m*o-g*l,a[u++]=h+m*l+g*o;for(let _=d+2;_<d+n;++_)a[u++]=i[_]}return a&&a.length!=u&&(a.length=u),a}function zd(i,e,t,n,r,s,a,o){o=o||[];const l=a[0],c=a[1];let h=0;for(let u=e;u<t;u+=n){const d=i[u]-l,m=i[u+1]-c;o[h++]=l+r*d,o[h++]=c+s*m;for(let g=u+2;g<u+n;++g)o[h++]=i[g]}return o&&o.length!=h&&(o.length=h),o}function Gd(i,e,t,n,r,s,a){a=a||[];let o=0;for(let l=e;l<t;l+=n){a[o++]=i[l]+r,a[o++]=i[l+1]+s;for(let c=l+2;c<l+n;++c)a[o++]=i[c]}return a&&a.length!=o&&(a.length=o),a}const hl=ji();class Bd extends Sn{constructor(){super(),this.extent_=hi(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=zu(function(e,t,n){if(!n)return this.getSimplifiedGeometry(t);const r=this.clone();return r.applyTransform(n),r.getSimplifiedGeometry(t)})}simplifyTransformed(e,t){return this.simplifyTransformedInternal(this.getRevision(),e,t)}clone(){return et()}closestPointXY(e,t,n,r){return et()}containsXY(e,t){const n=this.getClosestPoint([e,t]);return n[0]===e&&n[1]===t}getClosestPoint(e,t){return t=t||[NaN,NaN],this.closestPointXY(e[0],e[1],t,1/0),t}intersectsCoordinate(e){return this.containsXY(e[0],e[1])}computeExtent(e){return et()}getExtent(e){if(this.extentRevision_!=this.getRevision()){const t=this.computeExtent(this.extent_);(isNaN(t[0])||isNaN(t[1]))&&Dr(t),this.extentRevision_=this.getRevision()}return sd(this.extent_,e)}rotate(e,t){et()}scale(e,t,n){et()}simplify(e){return this.getSimplifiedGeometry(e*e)}getSimplifiedGeometry(e){return et()}getType(){return et()}applyTransform(e){et()}intersectsExtent(e){return et()}translate(e,t){et()}transform(e,t){const n=Xt(e),r=n.getUnits()=="tile-pixels"?function(s,a,o){const l=n.getExtent(),c=n.getWorldExtent(),h=an(c)/an(l);return br(hl,c[0],c[3],h,-h,0,0,0),Od(s,0,s.length,o,hl,a),wr(n,t)(s,a,o)}:wr(n,t);return this.applyTransform(r),this}}const Hd=Bd;class Vd extends Hd{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates=null}computeExtent(e){return td(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinates(){return et()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;const t=this.getSimplifiedGeometryInternal(e);return t.getFlatCoordinates().length<this.flatCoordinates.length?t:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getSimplifiedGeometryInternal(e){return this}getStride(){return this.stride}setFlatCoordinates(e,t){this.stride=ul(e),this.layout=e,this.flatCoordinates=t}setCoordinates(e,t){et()}setLayout(e,t,n){let r;if(e)r=ul(e);else{for(let s=0;s<n;++s){if(t.length===0){this.layout="XY",this.stride=2;return}t=t[0]}r=t.length,e=kd(r)}this.layout=e,this.stride=r}applyTransform(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())}rotate(e,t){const n=this.getFlatCoordinates();if(n){const r=this.getStride();Fd(n,0,n.length,r,e,t,n),this.changed()}}scale(e,t,n){t===void 0&&(t=e),n||(n=Ar(this.getExtent()));const r=this.getFlatCoordinates();if(r){const s=this.getStride();zd(r,0,r.length,s,e,t,n,r),this.changed()}}translate(e,t){const n=this.getFlatCoordinates();if(n){const r=this.getStride();Gd(n,0,n.length,r,e,t,n),this.changed()}}}function kd(i){let e;return i==2?e="XY":i==3?e="XYZ":i==4&&(e="XYZM"),e}function ul(i){let e;return i=="XY"?e=2:i=="XYZ"||i=="XYM"?e=3:i=="XYZM"&&(e=4),e}const Sa=Vd;function dl(i,e,t,n,r,s,a){const o=i[e],l=i[e+1],c=i[t]-o,h=i[t+1]-l;let u;if(c===0&&h===0)u=e;else{const d=((r-o)*c+(s-l)*h)/(c*c+h*h);if(d>1)u=t;else if(d>0){for(let m=0;m<n;++m)a[m]=Ed(i[e+m],i[t+m],d);a.length=n;return}else u=e}for(let d=0;d<n;++d)a[d]=i[u+d];a.length=n}function yh(i,e,t,n,r){let s=i[e],a=i[e+1];for(e+=n;e<t;e+=n){const o=i[e],l=i[e+1],c=qi(s,a,o,l);c>r&&(r=c),s=o,a=l}return r}function Wd(i,e,t,n,r){for(let s=0,a=t.length;s<a;++s){const o=t[s];r=yh(i,e,o,n,r),e=o}return r}function Sh(i,e,t,n,r,s,a,o,l,c,h){if(e==t)return c;let u,d;if(r===0){if(d=qi(a,o,i[e],i[e+1]),d<c){for(u=0;u<n;++u)l[u]=i[e+u];return l.length=n,d}return c}h=h||[NaN,NaN];let m=e+n;for(;m<t;)if(dl(i,m-n,m,n,a,o,h),d=qi(a,o,h[0],h[1]),d<c){for(c=d,u=0;u<n;++u)l[u]=h[u];l.length=n,m+=n}else m+=n*Math.max((Math.sqrt(d)-Math.sqrt(c))/r|0,1);if(s&&(dl(i,t-n,e,n,a,o,h),d=qi(a,o,h[0],h[1]),d<c)){for(c=d,u=0;u<n;++u)l[u]=h[u];l.length=n}return c}function Xd(i,e,t,n,r,s,a,o,l,c,h){h=h||[NaN,NaN];for(let u=0,d=t.length;u<d;++u){const m=t[u];c=Sh(i,e,m,n,r,s,a,o,l,c,h),e=m}return c}function Yd(i,e,t,n){for(let r=0,s=t.length;r<s;++r)i[e++]=t[r];return e}function Th(i,e,t,n){for(let r=0,s=t.length;r<s;++r){const a=t[r];for(let o=0;o<n;++o)i[e++]=a[o]}return e}function jd(i,e,t,n,r){r=r||[];let s=0;for(let a=0,o=t.length;a<o;++a){const l=Th(i,e,t[a],n);r[s++]=l,e=l}return r.length=s,r}function Kd(i,e,t,n,r,s,a){const o=(t-e)/n;if(o<3){for(;e<t;e+=n)s[a++]=i[e],s[a++]=i[e+1];return a}const l=new Array(o);l[0]=1,l[o-1]=1;const c=[e,t-n];let h=0;for(;c.length>0;){const u=c.pop(),d=c.pop();let m=0;const g=i[d],_=i[d+1],p=i[u],f=i[u+1];for(let y=d+n;y<u;y+=n){const v=i[y],x=i[y+1],T=vd(v,x,g,_,p,f);T>m&&(h=y,m=T)}m>r&&(l[(h-e)/n]=1,d+n<h&&c.push(d,h),h+n<u&&c.push(h,u))}for(let u=0;u<o;++u)l[u]&&(s[a++]=i[e+u*n],s[a++]=i[e+u*n+1]);return a}function pi(i,e){return e*Math.round(i/e)}function qd(i,e,t,n,r,s,a){if(e==t)return a;let o=pi(i[e],r),l=pi(i[e+1],r);e+=n,s[a++]=o,s[a++]=l;let c,h;do if(c=pi(i[e],r),h=pi(i[e+1],r),e+=n,e==t)return s[a++]=c,s[a++]=h,a;while(c==o&&h==l);for(;e<t;){const u=pi(i[e],r),d=pi(i[e+1],r);if(e+=n,u==c&&d==h)continue;const m=c-o,g=h-l,_=u-o,p=d-l;if(m*p==g*_&&(m<0&&_<m||m==_||m>0&&_>m)&&(g<0&&p<g||g==p||g>0&&p>g)){c=u,h=d;continue}s[a++]=c,s[a++]=h,o=c,l=h,c=u,h=d}return s[a++]=c,s[a++]=h,a}function Zd(i,e,t,n,r,s,a,o){for(let l=0,c=t.length;l<c;++l){const h=t[l];a=qd(i,e,h,n,r,s,a),o.push(a),e=h}return a}function bh(i,e,t,n,r){r=r!==void 0?r:[];let s=0;for(let a=e;a<t;a+=n)r[s++]=i.slice(a,a+n);return r.length=s,r}function $d(i,e,t,n,r){r=r!==void 0?r:[];let s=0;for(let a=0,o=t.length;a<o;++a){const l=t[a];r[s++]=bh(i,e,l,n,r[s]),e=l}return r.length=s,r}function Ah(i,e,t,n){let r=0,s=i[t-n],a=i[t-n+1];for(;e<t;e+=n){const o=i[e],l=i[e+1];r+=a*o-s*l,s=o,a=l}return r/2}function Jd(i,e,t,n){let r=0;for(let s=0,a=t.length;s<a;++s){const o=t[s];r+=Ah(i,e,o,n),e=o}return r}class Ls extends Sa{constructor(e,t){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}clone(){return new Ls(this.flatCoordinates.slice(),this.layout)}closestPointXY(e,t,n,r){return r<dh(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(yh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Sh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,t,n,r))}getArea(){return Ah(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return bh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(e){const t=[];return t.length=Kd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t,0),new Ls(t,"XY")}getType(){return"LinearRing"}intersectsExtent(e){return!1}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Th(this.flatCoordinates,0,e,this.stride),this.changed()}}const fl=Ls;class Ta extends Sa{constructor(e,t){super(),this.setCoordinates(e,t)}clone(){const e=new Ta(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,t,n,r){const s=this.flatCoordinates,a=qi(e,t,s[0],s[1]);if(a<r){const o=this.stride;for(let l=0;l<o;++l)n[l]=s[l];return n.length=o,a}return r}getCoordinates(){return this.flatCoordinates?this.flatCoordinates.slice():[]}computeExtent(e){return ed(this.flatCoordinates,e)}getType(){return"Point"}intersectsExtent(e){return fh(e,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(e,t){this.setLayout(t,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Yd(this.flatCoordinates,0,e,this.stride),this.changed()}}const Qd=Ta;function ef(i,e,t,n,r){return!mh(r,function(a){return!ei(i,e,t,n,a[0],a[1])})}function ei(i,e,t,n,r,s){let a=0,o=i[t-n],l=i[t-n+1];for(;e<t;e+=n){const c=i[e],h=i[e+1];l<=s?h>s&&(c-o)*(s-l)-(r-o)*(h-l)>0&&a++:h<=s&&(c-o)*(s-l)-(r-o)*(h-l)<0&&a--,o=c,l=h}return a!==0}function Rh(i,e,t,n,r,s){if(t.length===0||!ei(i,e,t[0],n,r,s))return!1;for(let a=1,o=t.length;a<o;++a)if(ei(i,t[a-1],t[a],n,r,s))return!1;return!0}function tf(i,e,t,n,r,s,a){let o,l,c,h,u,d,m;const g=r[s+1],_=[];for(let y=0,v=t.length;y<v;++y){const x=t[y];for(h=i[x-n],d=i[x-n+1],o=e;o<x;o+=n)u=i[o],m=i[o+1],(g<=d&&m<=g||d<=g&&g<=m)&&(c=(g-d)/(m-d)*(u-h)+h,_.push(c)),h=u,d=m}let p=NaN,f=-1/0;for(_.sort(pa),h=_[0],o=1,l=_.length;o<l;++o){u=_[o];const y=Math.abs(u-h);y>f&&(c=(h+u)/2,Rh(i,e,t,n,c,g)&&(p=c,f=y)),h=u}return isNaN(p)&&(p=r[s]),a?(a.push(p,g,f),a):[p,g,f]}function nf(i,e,t,n,r){let s;for(e+=n;e<t;e+=n)if(s=r(i.slice(e-n,e),i.slice(e,e+n)),s)return s;return!1}function wh(i,e,t,n,r){const s=ph(hi(),i,e,t,n);return Ur(r,s)?Qu(r,s)||s[0]>=r[0]&&s[2]<=r[2]||s[1]>=r[1]&&s[3]<=r[3]?!0:nf(i,e,t,n,function(a,o){return od(r,a,o)}):!1}function Ch(i,e,t,n,r){return!!(wh(i,e,t,n,r)||ei(i,e,t,n,r[0],r[1])||ei(i,e,t,n,r[0],r[3])||ei(i,e,t,n,r[2],r[1])||ei(i,e,t,n,r[2],r[3]))}function rf(i,e,t,n,r){if(!Ch(i,e,t[0],n,r))return!1;if(t.length===1)return!0;for(let s=1,a=t.length;s<a;++s)if(ef(i,t[s-1],t[s],n,r)&&!wh(i,t[s-1],t[s],n,r))return!1;return!0}function sf(i,e,t,n){for(;e<t-n;){for(let r=0;r<n;++r){const s=i[e+r];i[e+r]=i[t-n+r],i[t-n+r]=s}e+=n,t-=n}}function Lh(i,e,t,n){let r=0,s=i[t-n],a=i[t-n+1];for(;e<t;e+=n){const o=i[e],l=i[e+1];r+=(o-s)*(l+a),s=o,a=l}return r===0?void 0:r>0}function of(i,e,t,n,r){r=r!==void 0?r:!1;for(let s=0,a=t.length;s<a;++s){const o=t[s],l=Lh(i,e,o,n);if(s===0){if(r&&l||!r&&!l)return!1}else if(r&&!l||!r&&l)return!1;e=o}return!0}function pl(i,e,t,n,r){r=r!==void 0?r:!1;for(let s=0,a=t.length;s<a;++s){const o=t[s],l=Lh(i,e,o,n);(s===0?r&&l||!r&&!l:r&&!l||!r&&l)&&sf(i,e,o,n),e=o}return e}class Cr extends Sa{constructor(e,t,n){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,t!==void 0&&n?(this.setFlatCoordinates(t,e),this.ends_=n):this.setCoordinates(e,t)}appendLinearRing(e){this.flatCoordinates?Ou(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const e=new Cr(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,t,n,r){return r<dh(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Wd(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Xd(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,t,n,r))}containsXY(e,t){return Rh(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,t)}getArea(){return Jd(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(e){let t;return e!==void 0?(t=this.getOrientedFlatCoordinates().slice(),pl(t,0,this.ends_,this.stride,e)):t=this.flatCoordinates,$d(t,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){const e=Ar(this.getExtent());this.flatInteriorPoint_=tf(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new Qd(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(e){return e<0||this.ends_.length<=e?null:new fl(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLinearRings(){const e=this.layout,t=this.flatCoordinates,n=this.ends_,r=[];let s=0;for(let a=0,o=n.length;a<o;++a){const l=n[a],c=new fl(t.slice(s,l),e);r.push(c),s=l}return r}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const e=this.flatCoordinates;of(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=pl(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){const t=[],n=[];return t.length=Zd(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(e),t,0,n),new Cr(t,"XY",n)}getType(){return"Polygon"}intersectsExtent(e){return rf(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||(this.flatCoordinates=[]);const n=jd(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()}}function ml(i){if(Nr(i))throw new Error("Cannot create polygon from empty extent");const e=i[0],t=i[1],n=i[2],r=i[3],s=[e,t,e,r,n,r,n,t,e,t];return new Cr(s,"XY",[s.length])}const Fn={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},mi={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};function gl(i){return i[0]>0&&i[1]>0}function af(i,e,t){return t===void 0&&(t=[0,0]),t[0]=i[0]*e+.5|0,t[1]=i[1]*e+.5|0,t}function Un(i,e){return Array.isArray(i)?i:(e===void 0?e=[i,i]:(e[0]=i,e[1]=i),e)}const lf=/^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,cf=/^([a-z]*)$|^hsla?\(.*\)$/i;function hf(i){return typeof i=="string"?i:pf(i)}function uf(i){const e=document.createElement("div");if(e.style.color=i,e.style.color!==""){document.body.appendChild(e);const t=getComputedStyle(e).color;return document.body.removeChild(e),t}return""}const df=function(){const e={};let t=0;return function(n){let r;if(e.hasOwnProperty(n))r=e[n];else{if(t>=1024){let s=0;for(const a in e)s++&3||(delete e[a],--t)}r=ff(n),e[n]=r,++t}return r}}();function _l(i){return Array.isArray(i)?i:df(i)}function ff(i){let e,t,n,r,s;if(cf.exec(i)&&(i=uf(i)),lf.exec(i)){const a=i.length-1;let o;a<=4?o=1:o=2;const l=a===4||a===8;e=parseInt(i.substr(1+0*o,o),16),t=parseInt(i.substr(1+1*o,o),16),n=parseInt(i.substr(1+2*o,o),16),l?r=parseInt(i.substr(1+3*o,o),16):r=255,o==1&&(e=(e<<4)+e,t=(t<<4)+t,n=(n<<4)+n,l&&(r=(r<<4)+r)),s=[e,t,n,r/255]}else if(i.startsWith("rgba("))s=i.slice(5,-1).split(",").map(Number),vl(s);else if(i.startsWith("rgb("))s=i.slice(4,-1).split(",").map(Number),s.push(1),vl(s);else throw new Error("Invalid color");return s}function vl(i){return i[0]=gt(i[0]+.5|0,0,255),i[1]=gt(i[1]+.5|0,0,255),i[2]=gt(i[2]+.5|0,0,255),i[3]=gt(i[3],0,1),i}function pf(i){let e=i[0];e!=(e|0)&&(e=e+.5|0);let t=i[1];t!=(t|0)&&(t=t+.5|0);let n=i[2];n!=(n|0)&&(n=n+.5|0);const r=i[3]===void 0?1:Math.round(i[3]*100)/100;return"rgba("+e+","+t+","+n+","+r+")"}function nr(i,e,t,n){let r;return t&&t.length?r=t.shift():ch?r=new OffscreenCanvas(i||300,e||300):r=document.createElement("canvas"),i&&(r.width=i),e&&(r.height=e),r.getContext("2d",n)}function ba(i){const e=i.canvas;e.width=1,e.height=1,i.clearRect(0,0,1,1)}function xl(i,e){const t=e.parentNode;t&&t.replaceChild(i,e)}function Zo(i){return i&&i.parentNode?i.parentNode.removeChild(i):null}function mf(i){for(;i.lastChild;)i.removeChild(i.lastChild)}function gf(i,e){const t=i.childNodes;for(let n=0;;++n){const r=t[n],s=e[n];if(!r&&!s)break;if(r!==s){if(!r){i.appendChild(s);continue}if(!s){i.removeChild(r),--n;continue}i.insertBefore(s,r)}}}const jr="ol-hidden",Vs="ol-unselectable",Aa="ol-control",El="ol-collapsed",_f=new Sn,We={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};class vf extends Sn{constructor(e){super(),this.on,this.once,this.un,this.background_=e.background;const t=Object.assign({},e);typeof e.properties=="object"&&(delete t.properties,Object.assign(t,e.properties)),t[We.OPACITY]=e.opacity!==void 0?e.opacity:1,qe(typeof t[We.OPACITY]=="number","Layer opacity must be a number"),t[We.VISIBLE]=e.visible!==void 0?e.visible:!0,t[We.Z_INDEX]=e.zIndex,t[We.MAX_RESOLUTION]=e.maxResolution!==void 0?e.maxResolution:1/0,t[We.MIN_RESOLUTION]=e.minResolution!==void 0?e.minResolution:0,t[We.MIN_ZOOM]=e.minZoom!==void 0?e.minZoom:-1/0,t[We.MAX_ZOOM]=e.maxZoom!==void 0?e.maxZoom:1/0,this.className_=t.className!==void 0?t.className:"ol-layer",delete t.className,this.setProperties(t),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(e){const t=this.state_||{layer:this,managed:e===void 0?!0:e},n=this.getZIndex();return t.opacity=gt(Math.round(this.getOpacity()*100)/100,0,1),t.visible=this.getVisible(),t.extent=this.getExtent(),t.zIndex=n===void 0&&!t.managed?1/0:n,t.maxResolution=this.getMaxResolution(),t.minResolution=Math.max(this.getMinResolution(),0),t.minZoom=this.getMinZoom(),t.maxZoom=this.getMaxZoom(),this.state_=t,t}getLayersArray(e){return et()}getLayerStatesArray(e){return et()}getExtent(){return this.get(We.EXTENT)}getMaxResolution(){return this.get(We.MAX_RESOLUTION)}getMinResolution(){return this.get(We.MIN_RESOLUTION)}getMinZoom(){return this.get(We.MIN_ZOOM)}getMaxZoom(){return this.get(We.MAX_ZOOM)}getOpacity(){return this.get(We.OPACITY)}getSourceState(){return et()}getVisible(){return this.get(We.VISIBLE)}getZIndex(){return this.get(We.Z_INDEX)}setBackground(e){this.background_=e,this.changed()}setExtent(e){this.set(We.EXTENT,e)}setMaxResolution(e){this.set(We.MAX_RESOLUTION,e)}setMinResolution(e){this.set(We.MIN_RESOLUTION,e)}setMaxZoom(e){this.set(We.MAX_ZOOM,e)}setMinZoom(e){this.set(We.MIN_ZOOM,e)}setOpacity(e){qe(typeof e=="number","Layer opacity must be a number"),this.set(We.OPACITY,e)}setVisible(e){this.set(We.VISIBLE,e)}setZIndex(e){this.set(We.Z_INDEX,e)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}}const Ph=vf,Ht={ANIMATING:0,INTERACTING:1},Yt={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"},xf=42,Ra=256;function Ml(i,e,t){return function(n,r,s,a,o){if(!n)return;if(!r&&!e)return n;const l=e?0:s[0]*r,c=e?0:s[1]*r,h=o?o[0]:0,u=o?o[1]:0;let d=i[0]+l/2+h,m=i[2]-l/2+h,g=i[1]+c/2+u,_=i[3]-c/2+u;d>m&&(d=(m+d)/2,m=d),g>_&&(g=(_+g)/2,_=g);let p=gt(n[0],d,m),f=gt(n[1],g,_);if(a&&t&&r){const y=30*r;p+=-y*Math.log(1+Math.max(0,d-n[0])/y)+y*Math.log(1+Math.max(0,n[0]-m)/y),f+=-y*Math.log(1+Math.max(0,g-n[1])/y)+y*Math.log(1+Math.max(0,n[1]-_)/y)}return[p,f]}}function Ef(i){return i}function wa(i,e,t,n){const r=mt(e)/t[0],s=an(e)/t[1];return n?Math.min(i,Math.max(r,s)):Math.min(i,Math.min(r,s))}function Ca(i,e,t){let n=Math.min(i,e);const r=50;return n*=Math.log(1+r*Math.max(0,i/e-1))/r+1,t&&(n=Math.max(n,t),n/=Math.log(1+r*Math.max(0,t/i-1))/r+1),gt(n,t/2,e*2)}function Mf(i,e,t,n){return e=e!==void 0?e:!0,function(r,s,a,o){if(r!==void 0){const l=i[0],c=i[i.length-1],h=t?wa(l,t,a,n):l;if(o)return e?Ca(r,h,c):gt(r,c,h);const u=Math.min(h,r),d=Math.floor(ma(i,u,s));return i[d]>h&&d<i.length-1?i[d+1]:i[d]}}}function yf(i,e,t,n,r,s){return n=n!==void 0?n:!0,t=t!==void 0?t:0,function(a,o,l,c){if(a!==void 0){const h=r?wa(e,r,l,s):e;if(c)return n?Ca(a,h,t):gt(a,t,h);const u=1e-9,d=Math.ceil(Math.log(e/h)/Math.log(i)-u),m=-o*(.5-u)+.5,g=Math.min(h,a),_=Math.floor(Math.log(e/g)/Math.log(i)+m),p=Math.max(d,_),f=e/Math.pow(i,p);return gt(f,t,h)}}}function yl(i,e,t,n,r){return t=t!==void 0?t:!0,function(s,a,o,l){if(s!==void 0){const c=n?wa(i,n,o,r):i;return!t||!l?gt(s,e,c):Ca(s,c,e)}}}function La(i){if(i!==void 0)return 0}function Sl(i){if(i!==void 0)return i}function Sf(i){const e=2*Math.PI/i;return function(t,n){if(n)return t;if(t!==void 0)return t=Math.floor(t/e+.5)*e,t}}function Tf(i){return i=i||Ss(5),function(e,t){if(t)return e;if(e!==void 0)return Math.abs(e)<=i?0:e}}function Ih(i){return Math.pow(i,3)}function lr(i){return 1-Ih(1-i)}function bf(i){return 3*i*i-2*i*i*i}function Af(i){return i}const eo=0;class Rf extends Sn{constructor(e){super(),this.on,this.once,this.un,e=Object.assign({},e),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=Ea(e.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,e.projection&&Rd(),e.center&&(e.center=vn(e.center,this.projection_)),e.extent&&(e.extent=Wi(e.extent,this.projection_)),this.applyOptions_(e)}applyOptions_(e){const t=Object.assign({},e);for(const o in Yt)delete t[o];this.setProperties(t,!0);const n=Cf(e);this.maxResolution_=n.maxResolution,this.minResolution_=n.minResolution,this.zoomFactor_=n.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=n.minZoom;const r=wf(e),s=n.constraint,a=Lf(e);this.constraints_={center:r,resolution:s,rotation:a},this.setRotation(e.rotation!==void 0?e.rotation:0),this.setCenterInternal(e.center!==void 0?e.center:null),e.resolution!==void 0?this.setResolution(e.resolution):e.zoom!==void 0&&this.setZoom(e.zoom)}get padding(){return this.padding_}set padding(e){let t=this.padding_;this.padding_=e;const n=this.getCenterInternal();if(n){const r=e||[0,0,0,0];t=t||[0,0,0,0];const s=this.getResolution(),a=s/2*(r[3]-t[3]+t[1]-r[1]),o=s/2*(r[0]-t[0]+t[2]-r[2]);this.setCenterInternal([n[0]+a,n[1]-o])}}getUpdatedOptions_(e){const t=this.getProperties();return t.resolution!==void 0?t.resolution=this.getResolution():t.zoom=this.getZoom(),t.center=this.getCenterInternal(),t.rotation=this.getRotation(),Object.assign({},t,e)}animate(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);const t=new Array(arguments.length);for(let n=0;n<t.length;++n){let r=arguments[n];r.center&&(r=Object.assign({},r),r.center=vn(r.center,this.getProjection())),r.anchor&&(r=Object.assign({},r),r.anchor=vn(r.anchor,this.getProjection())),t[n]=r}this.animateInternal.apply(this,t)}animateInternal(e){let t=arguments.length,n;t>1&&typeof arguments[t-1]=="function"&&(n=arguments[t-1],--t);let r=0;for(;r<t&&!this.isDef();++r){const h=arguments[r];h.center&&this.setCenterInternal(h.center),h.zoom!==void 0?this.setZoom(h.zoom):h.resolution&&this.setResolution(h.resolution),h.rotation!==void 0&&this.setRotation(h.rotation)}if(r===t){n&&Kr(n,!0);return}let s=Date.now(),a=this.targetCenter_.slice(),o=this.targetResolution_,l=this.targetRotation_;const c=[];for(;r<t;++r){const h=arguments[r],u={start:s,complete:!1,anchor:h.anchor,duration:h.duration!==void 0?h.duration:1e3,easing:h.easing||bf,callback:n};if(h.center&&(u.sourceCenter=a,u.targetCenter=h.center.slice(),a=u.targetCenter),h.zoom!==void 0?(u.sourceResolution=o,u.targetResolution=this.getResolutionForZoom(h.zoom),o=u.targetResolution):h.resolution&&(u.sourceResolution=o,u.targetResolution=h.resolution,o=u.targetResolution),h.rotation!==void 0){u.sourceRotation=l;const d=Zi(h.rotation-l+Math.PI,2*Math.PI)-Math.PI;u.targetRotation=l+d,l=u.targetRotation}Pf(u)?u.complete=!0:s+=u.duration,c.push(u)}this.animations_.push(c),this.setHint(Ht.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[Ht.ANIMATING]>0}getInteracting(){return this.hints_[Ht.INTERACTING]>0}cancelAnimations(){this.setHint(Ht.ANIMATING,-this.hints_[Ht.ANIMATING]);let e;for(let t=0,n=this.animations_.length;t<n;++t){const r=this.animations_[t];if(r[0].callback&&Kr(r[0].callback,!1),!e)for(let s=0,a=r.length;s<a;++s){const o=r[s];if(!o.complete){e=o.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;const e=Date.now();let t=!1;for(let n=this.animations_.length-1;n>=0;--n){const r=this.animations_[n];let s=!0;for(let a=0,o=r.length;a<o;++a){const l=r[a];if(l.complete)continue;const c=e-l.start;let h=l.duration>0?c/l.duration:1;h>=1?(l.complete=!0,h=1):s=!1;const u=l.easing(h);if(l.sourceCenter){const d=l.sourceCenter[0],m=l.sourceCenter[1],g=l.targetCenter[0],_=l.targetCenter[1];this.nextCenter_=l.targetCenter;const p=d+u*(g-d),f=m+u*(_-m);this.targetCenter_=[p,f]}if(l.sourceResolution&&l.targetResolution){const d=u===1?l.targetResolution:l.sourceResolution+u*(l.targetResolution-l.sourceResolution);if(l.anchor){const m=this.getViewportSize_(this.getRotation()),g=this.constraints_.resolution(d,0,m,!0);this.targetCenter_=this.calculateCenterZoom(g,l.anchor)}this.nextResolution_=l.targetResolution,this.targetResolution_=d,this.applyTargetState_(!0)}if(l.sourceRotation!==void 0&&l.targetRotation!==void 0){const d=u===1?Zi(l.targetRotation+Math.PI,2*Math.PI)-Math.PI:l.sourceRotation+u*(l.targetRotation-l.sourceRotation);if(l.anchor){const m=this.constraints_.rotation(d,!0);this.targetCenter_=this.calculateCenterRotate(m,l.anchor)}this.nextRotation_=l.targetRotation,this.targetRotation_=d}if(this.applyTargetState_(!0),t=!0,!l.complete)break}if(s){this.animations_[n]=null,this.setHint(Ht.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;const a=r[0].callback;a&&Kr(a,!0)}}this.animations_=this.animations_.filter(Boolean),t&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(e,t){let n;const r=this.getCenterInternal();return r!==void 0&&(n=[r[0]-t[0],r[1]-t[1]],va(n,e-this.getRotation()),Md(n,t)),n}calculateCenterZoom(e,t){let n;const r=this.getCenterInternal(),s=this.getResolution();if(r!==void 0&&s!==void 0){const a=t[0]-e*(t[0]-r[0])/s,o=t[1]-e*(t[1]-r[1])/s;n=[a,o]}return n}getViewportSize_(e){const t=this.viewportSize_;if(e){const n=t[0],r=t[1];return[Math.abs(n*Math.cos(e))+Math.abs(r*Math.sin(e)),Math.abs(n*Math.sin(e))+Math.abs(r*Math.cos(e))]}return t}setViewportSize(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){const e=this.getCenterInternal();return e&&qo(e,this.getProjection())}getCenterInternal(){return this.get(Yt.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(e){return e!==void 0?(e[0]=this.hints_[0],e[1]=this.hints_[1],e):this.hints_.slice()}calculateExtent(e){const t=this.calculateExtentInternal(e);return Ud(t,this.getProjection())}calculateExtentInternal(e){e=e||this.getViewportSizeMinusPadding_();const t=this.getCenterInternal();qe(t,"The view center is not defined");const n=this.getResolution();qe(n!==void 0,"The view resolution is not defined");const r=this.getRotation();return qe(r!==void 0,"The view rotation is not defined"),Xo(t,n,r,e)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))}setConstrainResolution(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))}getProjection(){return this.projection_}getResolution(){return this.get(Yt.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(e,t){return this.getResolutionForExtentInternal(Wi(e,this.getProjection()),t)}getResolutionForExtentInternal(e,t){t=t||this.getViewportSizeMinusPadding_();const n=mt(e)/t[0],r=an(e)/t[1];return Math.max(n,r)}getResolutionForValueFunction(e){e=e||2;const t=this.getConstrainedResolution(this.maxResolution_),n=this.minResolution_,r=Math.log(t/n)/Math.log(e);return function(s){return t/Math.pow(e,s*r)}}getRotation(){return this.get(Yt.ROTATION)}getValueForResolutionFunction(e){const t=Math.log(e||2),n=this.getConstrainedResolution(this.maxResolution_),r=this.minResolution_,s=Math.log(n/r)/t;return function(a){return Math.log(n/a)/t/s}}getViewportSizeMinusPadding_(e){let t=this.getViewportSize_(e);const n=this.padding_;return n&&(t=[t[0]-n[1]-n[3],t[1]-n[0]-n[2]]),t}getState(){const e=this.getProjection(),t=this.getResolution(),n=this.getRotation();let r=this.getCenterInternal();const s=this.padding_;if(s){const a=this.getViewportSizeMinusPadding_();r=to(r,this.getViewportSize_(),[a[0]/2+s[3],a[1]/2+s[0]],t,n)}return{center:r.slice(0),projection:e!==void 0?e:null,resolution:t,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:n,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let e;const t=this.getResolution();return t!==void 0&&(e=this.getZoomForResolution(t)),e}getZoomForResolution(e){let t=this.minZoom_||0,n,r;if(this.resolutions_){const s=ma(this.resolutions_,e,1);t=s,n=this.resolutions_[s],s==this.resolutions_.length-1?r=2:r=n/this.resolutions_[s+1]}else n=this.maxResolution_,r=this.zoomFactor_;return t+Math.log(n/e)/Math.log(r)}getResolutionForZoom(e){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;const t=gt(Math.floor(e),0,this.resolutions_.length-2),n=this.resolutions_[t]/this.resolutions_[t+1];return this.resolutions_[t]/Math.pow(n,gt(e-t,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,e-this.minZoom_)}fit(e,t){let n;if(qe(Array.isArray(e)||typeof e.getSimplifiedGeometry=="function","Invalid extent or geometry provided as `geometry`"),Array.isArray(e)){qe(!Nr(e),"Cannot fit empty extent provided as `geometry`");const r=Wi(e,this.getProjection());n=ml(r)}else if(e.getType()==="Circle"){const r=Wi(e.getExtent(),this.getProjection());n=ml(r),n.rotate(this.getRotation(),Ar(r))}else{const r=Id();r?n=e.clone().transform(r,this.getProjection()):n=e}this.fitInternal(n,t)}rotatedExtentForGeometry(e){const t=this.getRotation(),n=Math.cos(t),r=Math.sin(-t),s=e.getFlatCoordinates(),a=e.getStride();let o=1/0,l=1/0,c=-1/0,h=-1/0;for(let u=0,d=s.length;u<d;u+=a){const m=s[u]*n-s[u+1]*r,g=s[u]*r+s[u+1]*n;o=Math.min(o,m),l=Math.min(l,g),c=Math.max(c,m),h=Math.max(h,g)}return[o,l,c,h]}fitInternal(e,t){t=t||{};let n=t.size;n||(n=this.getViewportSizeMinusPadding_());const r=t.padding!==void 0?t.padding:[0,0,0,0],s=t.nearest!==void 0?t.nearest:!1;let a;t.minResolution!==void 0?a=t.minResolution:t.maxZoom!==void 0?a=this.getResolutionForZoom(t.maxZoom):a=0;const o=this.rotatedExtentForGeometry(e);let l=this.getResolutionForExtentInternal(o,[n[0]-r[1]-r[3],n[1]-r[0]-r[2]]);l=isNaN(l)?a:Math.max(l,a),l=this.getConstrainedResolution(l,s?0:1);const c=this.getRotation(),h=Math.sin(c),u=Math.cos(c),d=Ar(o);d[0]+=(r[1]-r[3])/2*l,d[1]+=(r[0]-r[2])/2*l;const m=d[0]*u-d[1]*h,g=d[1]*u+d[0]*h,_=this.getConstrainedCenter([m,g],l),p=t.callback?t.callback:As;t.duration!==void 0?this.animateInternal({resolution:l,center:_,duration:t.duration,easing:t.easing},p):(this.targetResolution_=l,this.targetCenter_=_,this.applyTargetState_(!1,!0),Kr(p,!0))}centerOn(e,t,n){this.centerOnInternal(vn(e,this.getProjection()),t,n)}centerOnInternal(e,t,n){this.setCenterInternal(to(e,t,n,this.getResolution(),this.getRotation()))}calculateCenterShift(e,t,n,r){let s;const a=this.padding_;if(a&&e){const o=this.getViewportSizeMinusPadding_(-n),l=to(e,r,[o[0]/2+a[3],o[1]/2+a[0]],t,n);s=[e[0]-l[0],e[1]-l[1]]}return s}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(e){const t=qo(this.targetCenter_,this.getProjection());this.setCenter([t[0]+e[0],t[1]+e[1]])}adjustCenterInternal(e){const t=this.targetCenter_;this.setCenterInternal([t[0]+e[0],t[1]+e[1]])}adjustResolution(e,t){t=t&&vn(t,this.getProjection()),this.adjustResolutionInternal(e,t)}adjustResolutionInternal(e,t){const n=this.getAnimating()||this.getInteracting(),r=this.getViewportSize_(this.getRotation()),s=this.constraints_.resolution(this.targetResolution_*e,0,r,n);t&&(this.targetCenter_=this.calculateCenterZoom(s,t)),this.targetResolution_*=e,this.applyTargetState_()}adjustZoom(e,t){this.adjustResolution(Math.pow(this.zoomFactor_,-e),t)}adjustRotation(e,t){t&&(t=vn(t,this.getProjection())),this.adjustRotationInternal(e,t)}adjustRotationInternal(e,t){const n=this.getAnimating()||this.getInteracting(),r=this.constraints_.rotation(this.targetRotation_+e,n);t&&(this.targetCenter_=this.calculateCenterRotate(r,t)),this.targetRotation_+=e,this.applyTargetState_()}setCenter(e){this.setCenterInternal(e&&vn(e,this.getProjection()))}setCenterInternal(e){this.targetCenter_=e,this.applyTargetState_()}setHint(e,t){return this.hints_[e]+=t,this.changed(),this.hints_[e]}setResolution(e){this.targetResolution_=e,this.applyTargetState_()}setRotation(e){this.targetRotation_=e,this.applyTargetState_()}setZoom(e){this.setResolution(this.getResolutionForZoom(e))}applyTargetState_(e,t){const n=this.getAnimating()||this.getInteracting()||t,r=this.constraints_.rotation(this.targetRotation_,n),s=this.getViewportSize_(r),a=this.constraints_.resolution(this.targetResolution_,0,s,n),o=this.constraints_.center(this.targetCenter_,a,s,n,this.calculateCenterShift(this.targetCenter_,a,r,s));this.get(Yt.ROTATION)!==r&&this.set(Yt.ROTATION,r),this.get(Yt.RESOLUTION)!==a&&(this.set(Yt.RESOLUTION,a),this.set("zoom",this.getZoom(),!0)),(!o||!this.get(Yt.CENTER)||!Cs(this.get(Yt.CENTER),o))&&this.set(Yt.CENTER,o),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(e,t,n){e=e!==void 0?e:200;const r=t||0,s=this.constraints_.rotation(this.targetRotation_),a=this.getViewportSize_(s),o=this.constraints_.resolution(this.targetResolution_,r,a),l=this.constraints_.center(this.targetCenter_,o,a,!1,this.calculateCenterShift(this.targetCenter_,o,s,a));if(e===0&&!this.cancelAnchor_){this.targetResolution_=o,this.targetRotation_=s,this.targetCenter_=l,this.applyTargetState_();return}n=n||(e===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==o||this.getRotation()!==s||!this.getCenterInternal()||!Cs(this.getCenterInternal(),l))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:s,center:l,resolution:o,duration:e,easing:lr,anchor:n}))}beginInteraction(){this.resolveConstraints(0),this.setHint(Ht.INTERACTING,1)}endInteraction(e,t,n){n=n&&vn(n,this.getProjection()),this.endInteractionInternal(e,t,n)}endInteractionInternal(e,t,n){this.getInteracting()&&(this.setHint(Ht.INTERACTING,-1),this.resolveConstraints(e,t,n))}getConstrainedCenter(e,t){const n=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,t||this.getResolution(),n)}getConstrainedZoom(e,t){const n=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(n,t))}getConstrainedResolution(e,t){t=t||0;const n=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,t,n)}}function Kr(i,e){setTimeout(function(){i(e)},0)}function wf(i){if(i.extent!==void 0){const t=i.smoothExtentConstraint!==void 0?i.smoothExtentConstraint:!0;return Ml(i.extent,i.constrainOnlyCenter,t)}const e=Ea(i.projection,"EPSG:3857");if(i.multiWorld!==!0&&e.isGlobal()){const t=e.getExtent().slice();return t[0]=-1/0,t[2]=1/0,Ml(t,!1,!1)}return Ef}function Cf(i){let e,t,n,a=i.minZoom!==void 0?i.minZoom:eo,o=i.maxZoom!==void 0?i.maxZoom:28;const l=i.zoomFactor!==void 0?i.zoomFactor:2,c=i.multiWorld!==void 0?i.multiWorld:!1,h=i.smoothResolutionConstraint!==void 0?i.smoothResolutionConstraint:!0,u=i.showFullExtent!==void 0?i.showFullExtent:!1,d=Ea(i.projection,"EPSG:3857"),m=d.getExtent();let g=i.constrainOnlyCenter,_=i.extent;if(!c&&!_&&d.isGlobal()&&(g=!1,_=m),i.resolutions!==void 0){const p=i.resolutions;t=p[a],n=p[o]!==void 0?p[o]:p[p.length-1],i.constrainResolution?e=Mf(p,h,!g&&_,u):e=yl(t,n,h,!g&&_,u)}else{const f=(m?Math.max(mt(m),an(m)):360*Rr.degrees/d.getMetersPerUnit())/Ra/Math.pow(2,eo),y=f/Math.pow(2,28-eo);t=i.maxResolution,t!==void 0?a=0:t=f/Math.pow(l,a),n=i.minResolution,n===void 0&&(i.maxZoom!==void 0?i.maxResolution!==void 0?n=t/Math.pow(l,o):n=f/Math.pow(l,o):n=y),o=a+Math.floor(Math.log(t/n)/Math.log(l)),n=t/Math.pow(l,o-a),i.constrainResolution?e=yf(l,t,n,h,!g&&_,u):e=yl(t,n,h,!g&&_,u)}return{constraint:e,maxResolution:t,minResolution:n,minZoom:a,zoomFactor:l}}function Lf(i){if(i.enableRotation!==void 0?i.enableRotation:!0){const t=i.constrainRotation;return t===void 0||t===!0?Tf():t===!1?Sl:typeof t=="number"?Sf(t):Sl}return La}function Pf(i){return!(i.sourceCenter&&i.targetCenter&&!Cs(i.sourceCenter,i.targetCenter)||i.sourceResolution!==i.targetResolution||i.sourceRotation!==i.targetRotation)}function to(i,e,t,n,r){const s=Math.cos(-r);let a=Math.sin(-r),o=i[0]*s-i[1]*a,l=i[1]*s+i[0]*a;o+=(e[0]/2-t[0])*n,l+=(t[1]-e[1]/2)*n,a=-a;const c=o*s-l*a,h=l*s+o*a;return[c,h]}const sn=Rf;class If extends Ph{constructor(e){const t=Object.assign({},e);delete t.source,super(t),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,e.render&&(this.render=e.render),e.map&&this.setMap(e.map),this.addChangeListener(We.SOURCE,this.handleSourcePropertyChange_);const n=e.source?e.source:null;this.setSource(n)}getLayersArray(e){return e=e||[],e.push(this),e}getLayerStatesArray(e){return e=e||[],e.push(this.getLayerState()),e}getSource(){return this.get(We.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){const e=this.getSource();return e?e.getState():"undefined"}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!=="ready")&&(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&(st(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;const e=this.getSource();e&&(this.sourceChangeKey_=Xe(e,He.CHANGE,this.handleSourceChange_,this),e.getState()==="ready"&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(e){return this.renderer_?this.renderer_.getFeatures(e):Promise.resolve([])}getData(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)}isVisible(e){let t;const n=this.getMapInternal();!e&&n&&(e=n.getView()),e instanceof sn?t={viewState:e.getState(),extent:e.calculateExtent()}:t=e,!t.layerStatesArray&&n&&(t.layerStatesArray=n.getLayerGroup().getLayerStatesArray());let r;t.layerStatesArray?r=t.layerStatesArray.find(a=>a.layer===this):r=this.getLayerState();const s=this.getExtent();return Pa(r,t.viewState)&&(!s||Ur(s,t.extent))}getAttributions(e){if(!this.isVisible(e))return[];let t;const n=this.getSource();if(n&&(t=n.getAttributions()),!t)return[];const r=e instanceof sn?e.getViewStateAndExtent():e;let s=t(r);return Array.isArray(s)||(s=[s]),s}render(e,t){const n=this.getRenderer();return n.prepareFrame(e)?(this.rendered=!0,n.renderFrame(e,t)):null}unrender(){this.rendered=!1}setMapInternal(e){e||this.unrender(),this.set(We.MAP,e)}getMapInternal(){return this.get(We.MAP)}setMap(e){this.mapPrecomposeKey_&&(st(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),e||this.changed(),this.mapRenderKey_&&(st(this.mapRenderKey_),this.mapRenderKey_=null),e&&(this.mapPrecomposeKey_=Xe(e,Fn.PRECOMPOSE,function(t){const r=t.frameState.layerStatesArray,s=this.getLayerState(!1);qe(!r.some(function(a){return a.layer===s.layer}),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),r.push(s)},this),this.mapRenderKey_=Xe(this,He.CHANGE,e.render,e),this.changed())}setSource(e){this.set(We.SOURCE,e)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}disposeInternal(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),super.disposeInternal()}}function Pa(i,e){if(!i.visible)return!1;const t=e.resolution;if(t<i.minResolution||t>=i.maxResolution)return!1;const n=e.zoom;return n>i.minZoom&&n<=i.maxZoom}const Ia=If;function Df(i,e,t){const n=i;let r=!0,s=!1,a=!1;const o=[Rs(n,He.LOAD,function(){a=!0,s||e()})];return n.src&&Ku?(s=!0,n.decode().then(function(){r&&e()}).catch(function(l){r&&(a?e():t())})):o.push(Rs(n,He.ERROR,t)),function(){r=!1,o.forEach(st)}}class Uf{constructor(){this.cache_={},this.cacheSize_=0,this.maxCacheSize_=32}clear(){this.cache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let e=0;for(const t in this.cache_){const n=this.cache_[t];!(e++&3)&&!n.hasListener()&&(delete this.cache_[t],--this.cacheSize_)}}}get(e,t,n){const r=Tl(e,t,n);return r in this.cache_?this.cache_[r]:null}set(e,t,n,r){const s=Tl(e,t,n);this.cache_[s]=r,++this.cacheSize_}setSize(e){this.maxCacheSize_=e,this.expire()}}function Tl(i,e,t){const n=t?hf(t):"null";return e+":"+i+":"+n}const Dh=new Uf;class Nf extends oh{constructor(e){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=e,this.declutterExecutorGroup=null}getFeatures(e){return et()}getData(e){return null}prepareFrame(e){return et()}renderFrame(e,t){return et()}loadedTileCallback(e,t,n){e[t]||(e[t]={}),e[t][n.tileCoord.toString()]=n}createLoadedTileFinder(e,t,n){return(r,s)=>{const a=this.loadedTileCallback.bind(this,n,r);return e.forEachLoadedTile(t,r,s,a)}}forEachFeatureAtCoordinate(e,t,n,r,s){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(e){const t=e.target;(t.getState()===mi.LOADED||t.getState()===mi.ERROR)&&this.renderIfReadyAndVisible()}loadImage(e){let t=e.getState();return t!=mi.LOADED&&t!=mi.ERROR&&e.addEventListener(He.CHANGE,this.boundHandleImageChange_),t==mi.IDLE&&(e.load(),t=e.getState()),t==mi.LOADED}renderIfReadyAndVisible(){const e=this.getLayer();e&&e.getVisible()&&e.getSourceState()==="ready"&&e.changed()}disposeInternal(){delete this.layer_,super.disposeInternal()}}const Of=Nf;class Ff extends kn{constructor(e,t,n,r){super(e),this.inversePixelTransform=t,this.frameState=n,this.context=r}}const Uh=Ff;let zi=null;function zf(){zi=nr(1,1,void 0,{willReadFrequently:!0})}class Gf extends Of{constructor(e){super(e),this.container=null,this.renderedResolution,this.tempTransform=ji(),this.pixelTransform=ji(),this.inversePixelTransform=ji(),this.context=null,this.containerReused=!1,this.pixelContext_=null,this.frameState=null}getImageData(e,t,n){zi||zf(),zi.clearRect(0,0,1,1);let r;try{zi.drawImage(e,t,n,1,1,0,0,1,1),r=zi.getImageData(0,0,1,1).data}catch{return zi=null,null}return r}getBackground(e){let n=this.getLayer().getBackground();return typeof n=="function"&&(n=n(e.viewState.resolution)),n||void 0}useContainer(e,t,n){const r=this.getLayer().getClassName();let s,a;if(e&&e.className===r&&(!n||e&&e.style.backgroundColor&&Ns(_l(e.style.backgroundColor),_l(n)))){const o=e.firstElementChild;o instanceof HTMLCanvasElement&&(a=o.getContext("2d"))}if(a&&a.canvas.style.transform===t?(this.container=e,this.context=a,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){s=document.createElement("div"),s.className=r;let o=s.style;o.position="absolute",o.width="100%",o.height="100%",a=nr();const l=a.canvas;s.appendChild(l),o=l.style,o.position="absolute",o.left="0",o.transformOrigin="top left",this.container=s,this.context=a}!this.containerReused&&n&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=n)}clipUnrotated(e,t,n){const r=ui(n),s=Hs(n),a=Bs(n),o=Gs(n);Bt(t.coordinateToPixelTransform,r),Bt(t.coordinateToPixelTransform,s),Bt(t.coordinateToPixelTransform,a),Bt(t.coordinateToPixelTransform,o);const l=this.inversePixelTransform;Bt(l,r),Bt(l,s),Bt(l,a),Bt(l,o),e.save(),e.beginPath(),e.moveTo(Math.round(r[0]),Math.round(r[1])),e.lineTo(Math.round(s[0]),Math.round(s[1])),e.lineTo(Math.round(a[0]),Math.round(a[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.clip()}dispatchRenderEvent_(e,t,n){const r=this.getLayer();if(r.hasListener(e)){const s=new Uh(e,this.inversePixelTransform,n,t);r.dispatchEvent(s)}}preRender(e,t){this.frameState=t,this.dispatchRenderEvent_(Fn.PRERENDER,e,t)}postRender(e,t){this.dispatchRenderEvent_(Fn.POSTRENDER,e,t)}getRenderTransform(e,t,n,r,s,a,o){const l=s/2,c=a/2,h=r/t,u=-h,d=-e[0]+o,m=-e[1];return br(this.tempTransform,l,c,h,u,-n,d,m)}disposeInternal(){delete this.frameState,super.disposeInternal()}}const Bf=Gf;let Hf=class extends Sn{constructor(e){super(),this.projection=Xt(e.projection),this.attributions_=bl(e.attributions),this.attributionsCollapsible_=e.attributionsCollapsible!==void 0?e.attributionsCollapsible:!0,this.loading=!1,this.state_=e.state!==void 0?e.state:"ready",this.wrapX_=e.wrapX!==void 0?e.wrapX:!1,this.interpolate_=!!e.interpolate,this.viewResolver=null,this.viewRejector=null;const t=this;this.viewPromise_=new Promise(function(n,r){t.viewResolver=n,t.viewRejector=r})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(e){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(e){this.attributions_=bl(e),this.changed()}setState(e){this.state_=e,this.changed()}};function bl(i){return i?Array.isArray(i)?function(e){return i}:typeof i=="function"?i:function(e){return[i]}:null}const Vf=Hf,Me={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};class kf extends ga{constructor(e,t,n){super(),n=n||{},this.tileCoord=e,this.state=t,this.interimTile=null,this.key="",this.transition_=n.transition===void 0?250:n.transition,this.transitionStarts_={},this.interpolate=!!n.interpolate}changed(){this.dispatchEvent(He.CHANGE)}release(){this.state===Me.ERROR&&this.setState(Me.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getInterimTile(){if(!this.interimTile)return this;let e=this.interimTile;do{if(e.getState()==Me.LOADED)return this.transition_=0,e;e=e.interimTile}while(e);return this}refreshInterimChain(){if(!this.interimTile)return;let e=this.interimTile,t=this;do{if(e.getState()==Me.LOADED){e.interimTile=null;break}else e.getState()==Me.LOADING?t=e:e.getState()==Me.IDLE?t.interimTile=e.interimTile:t=e;e=t.interimTile}while(e)}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(e){if(this.state!==Me.ERROR&&this.state>e)throw new Error("Tile load sequence violation");this.state=e,this.changed()}load(){et()}getAlpha(e,t){if(!this.transition_)return 1;let n=this.transitionStarts_[e];if(!n)n=t,this.transitionStarts_[e]=n;else if(n===-1)return 1;const r=t-n+1e3/60;return r>=this.transition_?1:Ih(r/this.transition_)}inTransition(e){return this.transition_?this.transitionStarts_[e]!==-1:!1}endTransition(e){this.transition_&&(this.transitionStarts_[e]=-1)}}const Nh=kf;class Wf extends Nh{constructor(e,t,n,r,s,a){super(e,t,a),this.crossOrigin_=r,this.src_=n,this.key=n,this.image_=new Image,r!==null&&(this.image_.crossOrigin=r),this.unlisten_=null,this.tileLoadFunction_=s}getImage(){return this.image_}setImage(e){this.image_=e,this.state=Me.LOADED,this.unlistenImage_(),this.changed()}handleImageError_(){this.state=Me.ERROR,this.unlistenImage_(),this.image_=Xf(),this.changed()}handleImageLoad_(){const e=this.image_;e.naturalWidth&&e.naturalHeight?this.state=Me.LOADED:this.state=Me.EMPTY,this.unlistenImage_(),this.changed()}load(){this.state==Me.ERROR&&(this.state=Me.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==Me.IDLE&&(this.state=Me.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=Df(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}}function Xf(){const i=nr(1,1);return i.fillStyle="rgba(0,0,0,0)",i.fillRect(0,0,1,1),i.canvas}const Oh=Wf;class Yf{constructor(e,t,n){this.decay_=e,this.minVelocity_=t,this.delay_=n,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(e,t){this.points_.push(e,t,Date.now())}end(){if(this.points_.length<6)return!1;const e=Date.now()-this.delay_,t=this.points_.length-3;if(this.points_[t+2]<e)return!1;let n=t-3;for(;n>0&&this.points_[n+2]>e;)n-=3;const r=this.points_[t+2]-this.points_[n+2];if(r<1e3/60)return!1;const s=this.points_[t]-this.points_[n],a=this.points_[t+1]-this.points_[n+1];return this.angle_=Math.atan2(a,s),this.initialVelocity_=Math.sqrt(s*s+a*a)/r,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}}const jf=Yf;class Kf extends fa{constructor(e){super(),this.map_=e}dispatchRenderEvent(e,t){et()}calculateMatrices2D(e){const t=e.viewState,n=e.coordinateToPixelTransform,r=e.pixelToCoordinateTransform;br(n,e.size[0]/2,e.size[1]/2,1/t.resolution,-1/t.resolution,-t.rotation,-t.center[0],-t.center[1]),uh(r,n)}forEachFeatureAtCoordinate(e,t,n,r,s,a,o,l){let c;const h=t.viewState;function u(x,T,w,R){return s.call(a,T,x?w:null,R)}const d=h.projection,m=Sd(e.slice(),d),g=[[0,0]];if(d.canWrapX()&&r){const x=d.getExtent(),T=mt(x);g.push([-T,0],[T,0])}const _=t.layerStatesArray,p=_.length,f=[],y=[];for(let x=0;x<g.length;x++)for(let T=p-1;T>=0;--T){const w=_[T],R=w.layer;if(R.hasRenderer()&&Pa(w,h)&&o.call(l,R)){const U=R.getRenderer(),M=R.getSource();if(U&&M){const A=M.getWrapX()?m:e,q=u.bind(null,w.managed);y[0]=A[0]+g[x][0],y[1]=A[1]+g[x][1],c=U.forEachFeatureAtCoordinate(y,t,n,q,f)}if(c)return c}}if(f.length===0)return;const v=1/f.length;return f.forEach((x,T)=>x.distanceSq+=T*v),f.sort((x,T)=>x.distanceSq-T.distanceSq),f.some(x=>c=x.callback(x.feature,x.layer,x.geometry)),c}hasFeatureAtCoordinate(e,t,n,r,s,a){return this.forEachFeatureAtCoordinate(e,t,n,r,bs,this,s,a)!==void 0}getMap(){return this.map_}renderFrame(e){et()}flushDeclutterItems(e){}scheduleExpireIconCache(e){Dh.canExpireCache()&&e.postRenderFunctions.push(qf)}}function qf(i,e){Dh.expire()}const Zf=Kf;class $f extends Zf{constructor(e){super(e),this.fontChangeListenerKey_=Xe(_f,Tr.PROPERTYCHANGE,e.redrawText.bind(e)),this.element_=document.createElement("div");const t=this.element_.style;t.position="absolute",t.width="100%",t.height="100%",t.zIndex="0",this.element_.className=Vs+" ol-layers";const n=e.getViewport();n.insertBefore(this.element_,n.firstChild||null),this.children_=[],this.renderedVisible_=!0,this.declutterLayers_=[]}dispatchRenderEvent(e,t){const n=this.getMap();if(n.hasListener(e)){const r=new Uh(e,void 0,t);n.dispatchEvent(r)}}disposeInternal(){st(this.fontChangeListenerKey_),this.element_.parentNode.removeChild(this.element_),super.disposeInternal()}renderFrame(e){if(!e){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(e),this.dispatchRenderEvent(Fn.PRECOMPOSE,e);const t=e.layerStatesArray.sort(function(a,o){return a.zIndex-o.zIndex}),n=e.viewState;this.children_.length=0;const r=this.declutterLayers_;r.length=0;let s=null;for(let a=0,o=t.length;a<o;++a){const l=t[a];e.layerIndex=a;const c=l.layer,h=c.getSourceState();if(!Pa(l,n)||h!="ready"&&h!="undefined"){c.unrender();continue}const u=c.render(e,s);u&&(u!==s&&(this.children_.push(u),s=u),"getDeclutter"in c&&r.push(c))}this.flushDeclutterItems(e),gf(this.element_,this.children_),this.dispatchRenderEvent(Fn.POSTCOMPOSE,e),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(e)}flushDeclutterItems(e){const t=this.declutterLayers_;for(let n=t.length-1;n>=0;--n)t[n].renderDeclutter(e);t.length=0}}const Jf=$f;class Pn extends kn{constructor(e,t){super(e),this.layer=t}}const no={LAYERS:"layers"};class Da extends Ph{constructor(e){e=e||{};const t=Object.assign({},e);delete t.layers;let n=e.layers;super(t),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(no.LAYERS,this.handleLayersChanged_),n?Array.isArray(n)?n=new Mn(n.slice(),{unique:!0}):qe(typeof n.getArray=="function","Expected `layers` to be an array or a `Collection`"):n=new Mn(void 0,{unique:!0}),this.setLayers(n)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(st),this.layersListenerKeys_.length=0;const e=this.getLayers();this.layersListenerKeys_.push(Xe(e,Vt.ADD,this.handleLayersAdd_,this),Xe(e,Vt.REMOVE,this.handleLayersRemove_,this));for(const n in this.listenerKeys_)this.listenerKeys_[n].forEach(st);Fs(this.listenerKeys_);const t=e.getArray();for(let n=0,r=t.length;n<r;n++){const s=t[n];this.registerLayerListeners_(s),this.dispatchEvent(new Pn("addlayer",s))}this.changed()}registerLayerListeners_(e){const t=[Xe(e,Tr.PROPERTYCHANGE,this.handleLayerChange_,this),Xe(e,He.CHANGE,this.handleLayerChange_,this)];e instanceof Da&&t.push(Xe(e,"addlayer",this.handleLayerGroupAdd_,this),Xe(e,"removelayer",this.handleLayerGroupRemove_,this)),this.listenerKeys_[Ct(e)]=t}handleLayerGroupAdd_(e){this.dispatchEvent(new Pn("addlayer",e.layer))}handleLayerGroupRemove_(e){this.dispatchEvent(new Pn("removelayer",e.layer))}handleLayersAdd_(e){const t=e.element;this.registerLayerListeners_(t),this.dispatchEvent(new Pn("addlayer",t)),this.changed()}handleLayersRemove_(e){const t=e.element,n=Ct(t);this.listenerKeys_[n].forEach(st),delete this.listenerKeys_[n],this.dispatchEvent(new Pn("removelayer",t)),this.changed()}getLayers(){return this.get(no.LAYERS)}setLayers(e){const t=this.getLayers();if(t){const n=t.getArray();for(let r=0,s=n.length;r<s;++r)this.dispatchEvent(new Pn("removelayer",n[r]))}this.set(no.LAYERS,e)}getLayersArray(e){return e=e!==void 0?e:[],this.getLayers().forEach(function(t){t.getLayersArray(e)}),e}getLayerStatesArray(e){const t=e!==void 0?e:[],n=t.length;this.getLayers().forEach(function(a){a.getLayerStatesArray(t)});const r=this.getLayerState();let s=r.zIndex;!e&&r.zIndex===void 0&&(s=0);for(let a=n,o=t.length;a<o;a++){const l=t[a];l.opacity*=r.opacity,l.visible=l.visible&&r.visible,l.maxResolution=Math.min(l.maxResolution,r.maxResolution),l.minResolution=Math.max(l.minResolution,r.minResolution),l.minZoom=Math.max(l.minZoom,r.minZoom),l.maxZoom=Math.min(l.maxZoom,r.maxZoom),r.extent!==void 0&&(l.extent!==void 0?l.extent=vr(l.extent,r.extent):l.extent=r.extent),l.zIndex===void 0&&(l.zIndex=s)}return t}getSourceState(){return"ready"}}const ks=Da;class Qf extends kn{constructor(e,t,n){super(e),this.map=t,this.frameState=n!==void 0?n:null}}const Gi=Qf;class ep extends Gi{constructor(e,t,n,r,s,a){super(e,t,s),this.originalEvent=n,this.pixel_=null,this.coordinate_=null,this.dragging=r!==void 0?r:!1,this.activePointers=a}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(e){this.pixel_=e}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(e){this.coordinate_=e}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}}const Cn=ep,Qe={SINGLECLICK:"singleclick",CLICK:He.CLICK,DBLCLICK:He.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"},$o={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"};class tp extends ga{constructor(e,t){super(e),this.map_=e,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=t===void 0?1:t,this.down_=null;const n=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=n,this.pointerdownListenerKey_=Xe(n,$o.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=Xe(n,$o.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(He.TOUCHMOVE,this.boundHandleTouchMove_,hh?{passive:!1}:!1)}emulateClick_(e){let t=new Cn(Qe.CLICK,this.map_,e);this.dispatchEvent(t),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,t=new Cn(Qe.DBLCLICK,this.map_,e),this.dispatchEvent(t)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;const n=new Cn(Qe.SINGLECLICK,this.map_,e);this.dispatchEvent(n)},250)}updateActivePointers_(e){const t=e,n=t.pointerId;if(t.type==Qe.POINTERUP||t.type==Qe.POINTERCANCEL){delete this.trackedTouches_[n];for(const r in this.trackedTouches_)if(this.trackedTouches_[r].target!==t.target){delete this.trackedTouches_[r];break}}else(t.type==Qe.POINTERDOWN||t.type==Qe.POINTERMOVE)&&(this.trackedTouches_[n]=t);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(e){this.updateActivePointers_(e);const t=new Cn(Qe.POINTERUP,this.map_,e,void 0,void 0,this.activePointers_);this.dispatchEvent(t),this.emulateClicks_&&!t.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(e)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(st),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(e){return e.button===0}handlePointerDown_(e){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(e);const t=new Cn(Qe.POINTERDOWN,this.map_,e,void 0,void 0,this.activePointers_);if(this.dispatchEvent(t),this.down_=new PointerEvent(e.type,e),Object.defineProperty(this.down_,"target",{writable:!1,value:e.target}),this.dragListenerKeys_.length===0){const n=this.map_.getOwnerDocument();this.dragListenerKeys_.push(Xe(n,Qe.POINTERMOVE,this.handlePointerMove_,this),Xe(n,Qe.POINTERUP,this.handlePointerUp_,this),Xe(this.element_,Qe.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==n&&this.dragListenerKeys_.push(Xe(this.element_.getRootNode(),Qe.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(e){if(this.isMoving_(e)){this.updateActivePointers_(e),this.dragging_=!0;const t=new Cn(Qe.POINTERDRAG,this.map_,e,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(t)}}relayMoveEvent_(e){this.originalPointerMoveEvent_=e;const t=!!(this.down_&&this.isMoving_(e));this.dispatchEvent(new Cn(Qe.POINTERMOVE,this.map_,e,t))}handleTouchMove_(e){const t=this.originalPointerMoveEvent_;(!t||t.defaultPrevented)&&(typeof e.cancelable!="boolean"||e.cancelable===!0)&&e.preventDefault()}isMoving_(e){return this.dragging_||Math.abs(e.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(e.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(st(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(He.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(st(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(st),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}}const np=tp,Ln={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"},yt={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"},Ps=1/0;class ip{constructor(e,t){this.priorityFunction_=e,this.keyFunction_=t,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,Fs(this.queuedElements_)}dequeue(){const e=this.elements_,t=this.priorities_,n=e[0];e.length==1?(e.length=0,t.length=0):(e[0]=e.pop(),t[0]=t.pop(),this.siftUp_(0));const r=this.keyFunction_(n);return delete this.queuedElements_[r],n}enqueue(e){qe(!(this.keyFunction_(e)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");const t=this.priorityFunction_(e);return t!=Ps?(this.elements_.push(e),this.priorities_.push(t),this.queuedElements_[this.keyFunction_(e)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(e){return e*2+1}getRightChildIndex_(e){return e*2+2}getParentIndex_(e){return e-1>>1}heapify_(){let e;for(e=(this.elements_.length>>1)-1;e>=0;e--)this.siftUp_(e)}isEmpty(){return this.elements_.length===0}isKeyQueued(e){return e in this.queuedElements_}isQueued(e){return this.isKeyQueued(this.keyFunction_(e))}siftUp_(e){const t=this.elements_,n=this.priorities_,r=t.length,s=t[e],a=n[e],o=e;for(;e<r>>1;){const l=this.getLeftChildIndex_(e),c=this.getRightChildIndex_(e),h=c<r&&n[c]<n[l]?c:l;t[e]=t[h],n[e]=n[h],e=h}t[e]=s,n[e]=a,this.siftDown_(o,e)}siftDown_(e,t){const n=this.elements_,r=this.priorities_,s=n[t],a=r[t];for(;t>e;){const o=this.getParentIndex_(t);if(r[o]>a)n[t]=n[o],r[t]=r[o],t=o;else break}n[t]=s,r[t]=a}reprioritize(){const e=this.priorityFunction_,t=this.elements_,n=this.priorities_;let r=0;const s=t.length;let a,o,l;for(o=0;o<s;++o)a=t[o],l=e(a),l==Ps?delete this.queuedElements_[this.keyFunction_(a)]:(n[r]=l,t[r++]=a);t.length=r,n.length=r,this.heapify_()}}const rp=ip;class sp extends rp{constructor(e,t){super(function(n){return e.apply(null,n)},function(n){return n[0].getKey()}),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=t,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(e){const t=super.enqueue(e);return t&&e[0].addEventListener(He.CHANGE,this.boundHandleTileChange_),t}getTilesLoading(){return this.tilesLoading_}handleTileChange(e){const t=e.target,n=t.getState();if(n===Me.LOADED||n===Me.ERROR||n===Me.EMPTY){n!==Me.ERROR&&t.removeEventListener(He.CHANGE,this.boundHandleTileChange_);const r=t.getKey();r in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[r],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(e,t){let n=0,r,s,a;for(;this.tilesLoading_<e&&n<t&&this.getCount()>0;)s=this.dequeue()[0],a=s.getKey(),r=s.getState(),r===Me.IDLE&&!(a in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[a]=!0,++this.tilesLoading_,++n,s.load())}}const op=sp;function ap(i,e,t,n,r){if(!i||!(t in i.wantedTiles)||!i.wantedTiles[t][e.getKey()])return Ps;const s=i.viewState.center,a=n[0]-s[0],o=n[1]-s[1];return 65536*Math.log(r)+Math.sqrt(a*a+o*o)/r}class lp extends Sn{constructor(e){super();const t=e.element;t&&!e.target&&!t.style.pointerEvents&&(t.style.pointerEvents="auto"),this.element=t||null,this.target_=null,this.map_=null,this.listenerKeys=[],e.render&&(this.render=e.render),e.target&&this.setTarget(e.target)}disposeInternal(){Zo(this.element),super.disposeInternal()}getMap(){return this.map_}setMap(e){this.map_&&Zo(this.element);for(let t=0,n=this.listenerKeys.length;t<n;++t)st(this.listenerKeys[t]);this.listenerKeys.length=0,this.map_=e,e&&((this.target_?this.target_:e.getOverlayContainerStopEvent()).appendChild(this.element),this.render!==As&&this.listenerKeys.push(Xe(e,Ln.POSTRENDER,this.render,this)),e.render())}render(e){}setTarget(e){this.target_=typeof e=="string"?document.getElementById(e):e}}const Ua=lp;class cp extends Ua{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=e.collapsed!==void 0?e.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=e.collapsible!==void 0,this.collapsible_=e.collapsible!==void 0?e.collapsible:!0,this.collapsible_||(this.collapsed_=!1);const t=e.className!==void 0?e.className:"ol-attribution",n=e.tipLabel!==void 0?e.tipLabel:"Attributions",r=e.expandClassName!==void 0?e.expandClassName:t+"-expand",s=e.collapseLabel!==void 0?e.collapseLabel:"›",a=e.collapseClassName!==void 0?e.collapseClassName:t+"-collapse";typeof s=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=s,this.collapseLabel_.className=a):this.collapseLabel_=s;const o=e.label!==void 0?e.label:"i";typeof o=="string"?(this.label_=document.createElement("span"),this.label_.textContent=o,this.label_.className=r):this.label_=o;const l=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=n,this.toggleButton_.appendChild(l),this.toggleButton_.addEventListener(He.CLICK,this.handleClick_.bind(this),!1);const c=t+" "+Vs+" "+Aa+(this.collapsed_&&this.collapsible_?" "+El:"")+(this.collapsible_?"":" ol-uncollapsible"),h=this.element;h.className=c,h.appendChild(this.toggleButton_),h.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(e){const t=Array.from(new Set(this.getMap().getAllLayers().flatMap(r=>r.getAttributions(e)))),n=!this.getMap().getAllLayers().some(r=>r.getSource()&&r.getSource().getAttributionsCollapsible()===!1);return this.overrideCollapsible_||this.setCollapsible(n),t}updateElement_(e){if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const t=this.collectSourceAttributions_(e),n=t.length>0;if(this.renderedVisible_!=n&&(this.element.style.display=n?"":"none",this.renderedVisible_=n),!Ns(t,this.renderedAttributions_)){mf(this.ulElement_);for(let r=0,s=t.length;r<s;++r){const a=document.createElement("li");a.innerHTML=t[r],this.ulElement_.appendChild(a)}this.renderedAttributions_=t}}handleClick_(e){e.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(El),this.collapsed_?xl(this.collapseLabel_,this.label_):xl(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(e){this.userCollapsed_=e,!(!this.collapsible_||this.collapsed_===e)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(e){this.updateElement_(e.frameState)}}const hp=cp;class up extends Ua{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target});const t=e.className!==void 0?e.className:"ol-rotate",n=e.label!==void 0?e.label:"⇧",r=e.compassClassName!==void 0?e.compassClassName:"ol-compass";this.label_=null,typeof n=="string"?(this.label_=document.createElement("span"),this.label_.className=r,this.label_.textContent=n):(this.label_=n,this.label_.classList.add(r));const s=e.tipLabel?e.tipLabel:"Reset rotation",a=document.createElement("button");a.className=t+"-reset",a.setAttribute("type","button"),a.title=s,a.appendChild(this.label_),a.addEventListener(He.CLICK,this.handleClick_.bind(this),!1);const o=t+" "+Vs+" "+Aa,l=this.element;l.className=o,l.appendChild(a),this.callResetNorth_=e.resetNorth?e.resetNorth:void 0,this.duration_=e.duration!==void 0?e.duration:250,this.autoHide_=e.autoHide!==void 0?e.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(jr)}handleClick_(e){e.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){const t=this.getMap().getView();if(!t)return;const n=t.getRotation();n!==void 0&&(this.duration_>0&&n%(2*Math.PI)!==0?t.animate({rotation:0,duration:this.duration_,easing:lr}):t.setRotation(0))}render(e){const t=e.frameState;if(!t)return;const n=t.viewState.rotation;if(n!=this.rotation_){const r="rotate("+n+"rad)";if(this.autoHide_){const s=this.element.classList.contains(jr);!s&&n===0?this.element.classList.add(jr):s&&n!==0&&this.element.classList.remove(jr)}this.label_.style.transform=r}this.rotation_=n}}const dp=up;class fp extends Ua{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target});const t=e.className!==void 0?e.className:"ol-zoom",n=e.delta!==void 0?e.delta:1,r=e.zoomInClassName!==void 0?e.zoomInClassName:t+"-in",s=e.zoomOutClassName!==void 0?e.zoomOutClassName:t+"-out",a=e.zoomInLabel!==void 0?e.zoomInLabel:"+",o=e.zoomOutLabel!==void 0?e.zoomOutLabel:"–",l=e.zoomInTipLabel!==void 0?e.zoomInTipLabel:"Zoom in",c=e.zoomOutTipLabel!==void 0?e.zoomOutTipLabel:"Zoom out",h=document.createElement("button");h.className=r,h.setAttribute("type","button"),h.title=l,h.appendChild(typeof a=="string"?document.createTextNode(a):a),h.addEventListener(He.CLICK,this.handleClick_.bind(this,n),!1);const u=document.createElement("button");u.className=s,u.setAttribute("type","button"),u.title=c,u.appendChild(typeof o=="string"?document.createTextNode(o):o),u.addEventListener(He.CLICK,this.handleClick_.bind(this,-n),!1);const d=t+" "+Vs+" "+Aa,m=this.element;m.className=d,m.appendChild(h),m.appendChild(u),this.duration_=e.duration!==void 0?e.duration:250}handleClick_(e,t){t.preventDefault(),this.zoomByDelta_(e)}zoomByDelta_(e){const n=this.getMap().getView();if(!n)return;const r=n.getZoom();if(r!==void 0){const s=n.getConstrainedZoom(r+e);this.duration_>0?(n.getAnimating()&&n.cancelAnimations(),n.animate({zoom:s,duration:this.duration_,easing:lr})):n.setZoom(s)}}}const pp=fp;function mp(i){i=i||{};const e=new Mn;return(i.zoom!==void 0?i.zoom:!0)&&e.push(new pp(i.zoomOptions)),(i.rotate!==void 0?i.rotate:!0)&&e.push(new dp(i.rotateOptions)),(i.attribution!==void 0?i.attribution:!0)&&e.push(new hp(i.attributionOptions)),e}const Al={ACTIVE:"active"};class gp extends Sn{constructor(e){super(),this.on,this.once,this.un,e&&e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(Al.ACTIVE)}getMap(){return this.map_}handleEvent(e){return!0}setActive(e){this.set(Al.ACTIVE,e)}setMap(e){this.map_=e}}function _p(i,e,t){const n=i.getCenterInternal();if(n){const r=[n[0]+e[0],n[1]+e[1]];i.animateInternal({duration:t!==void 0?t:250,easing:Af,center:i.getConstrainedCenter(r)})}}function Na(i,e,t,n){const r=i.getZoom();if(r===void 0)return;const s=i.getConstrainedZoom(r+e),a=i.getResolutionForZoom(s);i.getAnimating()&&i.cancelAnimations(),i.animate({resolution:a,anchor:t,duration:n!==void 0?n:250,easing:lr})}const Fr=gp;class vp extends Fr{constructor(e){super(),e=e||{},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:250}handleEvent(e){let t=!1;if(e.type==Qe.DBLCLICK){const n=e.originalEvent,r=e.map,s=e.coordinate,a=n.shiftKey?-this.delta_:this.delta_,o=r.getView();Na(o,a,s,this.duration_),n.preventDefault(),t=!0}return!t}}const xp=vp;class Ep extends Fr{constructor(e){e=e||{},super(e),e.handleDownEvent&&(this.handleDownEvent=e.handleDownEvent),e.handleDragEvent&&(this.handleDragEvent=e.handleDragEvent),e.handleMoveEvent&&(this.handleMoveEvent=e.handleMoveEvent),e.handleUpEvent&&(this.handleUpEvent=e.handleUpEvent),e.stopDown&&(this.stopDown=e.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(e){return!1}handleDragEvent(e){}handleEvent(e){if(!e.originalEvent)return!0;let t=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence){if(e.type==Qe.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==Qe.POINTERUP){const n=this.handleUpEvent(e);this.handlingDownUpSequence=n&&this.targetPointers.length>0}}else if(e.type==Qe.POINTERDOWN){const n=this.handleDownEvent(e);this.handlingDownUpSequence=n,t=this.stopDown(n)}else e.type==Qe.POINTERMOVE&&this.handleMoveEvent(e);return!t}handleMoveEvent(e){}handleUpEvent(e){return!1}stopDown(e){return e}updateTrackedPointers_(e){e.activePointers&&(this.targetPointers=e.activePointers)}}function Oa(i){const e=i.length;let t=0,n=0;for(let r=0;r<e;r++)t+=i[r].clientX,n+=i[r].clientY;return{clientX:t/e,clientY:n/e}}const zr=Ep;function Jo(i){const e=arguments;return function(t){let n=!0;for(let r=0,s=e.length;r<s&&(n=n&&e[r](t),!!n);++r);return n}}const Mp=function(i){const e=i.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},yp=function(i){const e=i.map.getTargetElement(),t=i.map.getOwnerDocument().activeElement;return e.contains(t)},Fh=function(i){return i.map.getTargetElement().hasAttribute("tabindex")?yp(i):!0},Sp=bs,zh=function(i){const e=i.originalEvent;return e.button==0&&!(ju&&ah&&e.ctrlKey)},Gh=function(i){const e=i.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},Tp=function(i){const e=i.originalEvent;return ah?e.metaKey:e.ctrlKey},bp=function(i){const e=i.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},Bh=function(i){const e=i.originalEvent,t=e.target.tagName;return t!=="INPUT"&&t!=="SELECT"&&t!=="TEXTAREA"&&!e.target.isContentEditable},io=function(i){const e=i.originalEvent;return qe(e!==void 0,"mapBrowserEvent must originate from a pointer event"),e.pointerType=="mouse"},Ap=function(i){const e=i.originalEvent;return qe(e!==void 0,"mapBrowserEvent must originate from a pointer event"),e.isPrimary&&e.button===0};class Rp extends zr{constructor(e){super({stopDown:Os}),e=e||{},this.kinetic_=e.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;const t=e.condition?e.condition:Jo(Gh,Ap);this.condition_=e.onFocusOnly?Jo(Fh,t):t,this.noKinetic_=!1}handleDragEvent(e){const t=e.map;this.panning_||(this.panning_=!0,t.getView().beginInteraction());const n=this.targetPointers,r=t.getEventPixel(Oa(n));if(n.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(r[0],r[1]),this.lastCentroid){const s=[this.lastCentroid[0]-r[0],r[1]-this.lastCentroid[1]],o=e.map.getView();yd(s,o.getResolution()),va(s,o.getRotation()),o.adjustCenterInternal(s)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=r,this.lastPointersCount_=n.length,e.originalEvent.preventDefault()}handleUpEvent(e){const t=e.map,n=t.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){const r=this.kinetic_.getDistance(),s=this.kinetic_.getAngle(),a=n.getCenterInternal(),o=t.getPixelFromCoordinateInternal(a),l=t.getCoordinateFromPixelInternal([o[0]-r*Math.cos(s),o[1]-r*Math.sin(s)]);n.animateInternal({center:n.getConstrainedCenter(l),duration:500,easing:lr})}return this.panning_&&(this.panning_=!1,n.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(e){if(this.targetPointers.length>0&&this.condition_(e)){const n=e.map.getView();return this.lastCentroid=null,n.getAnimating()&&n.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}}const wp=Rp;class Cp extends zr{constructor(e){e=e||{},super({stopDown:Os}),this.condition_=e.condition?e.condition:Mp,this.lastAngle_=void 0,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){if(!io(e))return;const t=e.map,n=t.getView();if(n.getConstraints().rotation===La)return;const r=t.getSize(),s=e.pixel,a=Math.atan2(r[1]/2-s[1],s[0]-r[0]/2);if(this.lastAngle_!==void 0){const o=a-this.lastAngle_;n.adjustRotationInternal(-o)}this.lastAngle_=a}handleUpEvent(e){return io(e)?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){return io(e)&&zh(e)&&this.condition_(e)?(e.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}}const Lp=Cp;class Pp extends fa{constructor(e){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+e,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){const e=this.startPixel_,t=this.endPixel_,n="px",r=this.element_.style;r.left=Math.min(e[0],t[0])+n,r.top=Math.min(e[1],t[1])+n,r.width=Math.abs(t[0]-e[0])+n,r.height=Math.abs(t[1]-e[1])+n}setMap(e){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);const t=this.element_.style;t.left="inherit",t.top="inherit",t.width="inherit",t.height="inherit"}this.map_=e,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(e,t){this.startPixel_=e,this.endPixel_=t,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){const e=this.startPixel_,t=this.endPixel_,r=[e,[e[0],t[1]],t,[t[0],e[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);r[4]=r[0].slice(),this.geometry_?this.geometry_.setCoordinates([r]):this.geometry_=new Cr([r])}getGeometry(){return this.geometry_}}const Ip=Pp,qr={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"};class ro extends kn{constructor(e,t,n){super(e),this.coordinate=t,this.mapBrowserEvent=n}}class Dp extends zr{constructor(e){super(),this.on,this.once,this.un,e=e||{},this.box_=new Ip(e.className||"ol-dragbox"),this.minArea_=e.minArea!==void 0?e.minArea:64,e.onBoxEnd&&(this.onBoxEnd=e.onBoxEnd),this.startPixel_=null,this.condition_=e.condition?e.condition:zh,this.boxEndCondition_=e.boxEndCondition?e.boxEndCondition:this.defaultBoxEndCondition}defaultBoxEndCondition(e,t,n){const r=n[0]-t[0],s=n[1]-t[1];return r*r+s*s>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(e){this.box_.setPixels(this.startPixel_,e.pixel),this.dispatchEvent(new ro(qr.BOXDRAG,e.coordinate,e))}handleUpEvent(e){this.box_.setMap(null);const t=this.boxEndCondition_(e,this.startPixel_,e.pixel);return t&&this.onBoxEnd(e),this.dispatchEvent(new ro(t?qr.BOXEND:qr.BOXCANCEL,e.coordinate,e)),!1}handleDownEvent(e){return this.condition_(e)?(this.startPixel_=e.pixel,this.box_.setMap(e.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new ro(qr.BOXSTART,e.coordinate,e)),!0):!1}onBoxEnd(e){}}const Up=Dp;class Np extends Up{constructor(e){e=e||{};const t=e.condition?e.condition:bp;super({condition:t,className:e.className||"ol-dragzoom",minArea:e.minArea}),this.duration_=e.duration!==void 0?e.duration:200,this.out_=e.out!==void 0?e.out:!1}onBoxEnd(e){const n=this.getMap().getView();let r=this.getGeometry();if(this.out_){const s=n.rotatedExtentForGeometry(r),a=n.getResolutionForExtentInternal(s),o=n.getResolution()/a;r=r.clone(),r.scale(o*o)}n.fitInternal(r,{duration:this.duration_,easing:lr})}}const Op=Np,jn={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"};class Fp extends Fr{constructor(e){super(),e=e||{},this.defaultCondition_=function(t){return Gh(t)&&Bh(t)},this.condition_=e.condition!==void 0?e.condition:this.defaultCondition_,this.duration_=e.duration!==void 0?e.duration:100,this.pixelDelta_=e.pixelDelta!==void 0?e.pixelDelta:128}handleEvent(e){let t=!1;if(e.type==He.KEYDOWN){const n=e.originalEvent,r=n.key;if(this.condition_(e)&&(r==jn.DOWN||r==jn.LEFT||r==jn.RIGHT||r==jn.UP)){const a=e.map.getView(),o=a.getResolution()*this.pixelDelta_;let l=0,c=0;r==jn.DOWN?c=-o:r==jn.LEFT?l=-o:r==jn.RIGHT?l=o:c=o;const h=[l,c];va(h,a.getRotation()),_p(a,h,this.duration_),n.preventDefault(),t=!0}}return!t}}const zp=Fp;class Gp extends Fr{constructor(e){super(),e=e||{},this.condition_=e.condition?e.condition:function(t){return!Tp(t)&&Bh(t)},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:100}handleEvent(e){let t=!1;if(e.type==He.KEYDOWN||e.type==He.KEYPRESS){const n=e.originalEvent,r=n.key;if(this.condition_(e)&&(r==="+"||r==="-")){const s=e.map,a=r==="+"?this.delta_:-this.delta_,o=s.getView();Na(o,a,void 0,this.duration_),n.preventDefault(),t=!0}}return!t}}const Bp=Gp;class Hp extends Fr{constructor(e){e=e||{},super(e),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=e.maxDelta!==void 0?e.maxDelta:1,this.duration_=e.duration!==void 0?e.duration:250,this.timeout_=e.timeout!==void 0?e.timeout:80,this.useAnchor_=e.useAnchor!==void 0?e.useAnchor:!0,this.constrainResolution_=e.constrainResolution!==void 0?e.constrainResolution:!1;const t=e.condition?e.condition:Sp;this.condition_=e.onFocusOnly?Jo(Fh,t):t,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300}endInteraction_(){this.trackpadTimeoutId_=void 0;const e=this.getMap();if(!e)return;e.getView().endInteraction(void 0,this.lastDelta_?this.lastDelta_>0?1:-1:0,this.lastAnchor_)}handleEvent(e){if(!this.condition_(e)||e.type!==He.WHEEL)return!0;const n=e.map,r=e.originalEvent;r.preventDefault(),this.useAnchor_&&(this.lastAnchor_=e.coordinate);let s;if(e.type==He.WHEEL&&(s=r.deltaY,Xu&&r.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(s/=lh),r.deltaMode===WheelEvent.DOM_DELTA_LINE&&(s*=40)),s===0)return!1;this.lastDelta_=s;const a=Date.now();this.startTime_===void 0&&(this.startTime_=a),(!this.mode_||a-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(s)<4?"trackpad":"wheel");const o=n.getView();if(this.mode_==="trackpad"&&!(o.getConstrainResolution()||this.constrainResolution_))return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(o.getAnimating()&&o.cancelAnimations(),o.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),o.adjustZoom(-s/this.deltaPerZoom_,this.lastAnchor_),this.startTime_=a,!1;this.totalDelta_+=s;const l=Math.max(this.timeout_-(a-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,n),l),!1}handleWheelZoom_(e){const t=e.getView();t.getAnimating()&&t.cancelAnimations();let n=-gt(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(t.getConstrainResolution()||this.constrainResolution_)&&(n=n?n>0?1:-1:0),Na(t,n,this.lastAnchor_,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(e){this.useAnchor_=e,e||(this.lastAnchor_=null)}}const Vp=Hp;class kp extends zr{constructor(e){e=e||{};const t=e;t.stopDown||(t.stopDown=Os),super(t),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=e.threshold!==void 0?e.threshold:.3,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){let t=0;const n=this.targetPointers[0],r=this.targetPointers[1],s=Math.atan2(r.clientY-n.clientY,r.clientX-n.clientX);if(this.lastAngle_!==void 0){const l=s-this.lastAngle_;this.rotationDelta_+=l,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),t=l}this.lastAngle_=s;const a=e.map,o=a.getView();o.getConstraints().rotation!==La&&(this.anchor_=a.getCoordinateFromPixelInternal(a.getEventPixel(Oa(this.targetPointers))),this.rotating_&&(a.render(),o.adjustRotationInternal(t,this.anchor_)))}handleUpEvent(e){return this.targetPointers.length<2?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){if(this.targetPointers.length>=2){const t=e.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}}const Wp=kp;class Xp extends zr{constructor(e){e=e||{};const t=e;t.stopDown||(t.stopDown=Os),super(t),this.anchor_=null,this.duration_=e.duration!==void 0?e.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(e){let t=1;const n=this.targetPointers[0],r=this.targetPointers[1],s=n.clientX-r.clientX,a=n.clientY-r.clientY,o=Math.sqrt(s*s+a*a);this.lastDistance_!==void 0&&(t=this.lastDistance_/o),this.lastDistance_=o;const l=e.map,c=l.getView();t!=1&&(this.lastScaleDelta_=t),this.anchor_=l.getCoordinateFromPixelInternal(l.getEventPixel(Oa(this.targetPointers))),l.render(),c.adjustResolutionInternal(t,this.anchor_)}handleUpEvent(e){if(this.targetPointers.length<2){const n=e.map.getView(),r=this.lastScaleDelta_>1?1:-1;return n.endInteraction(this.duration_,r),!1}return!0}handleDownEvent(e){if(this.targetPointers.length>=2){const t=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}}const Yp=Xp;function jp(i){i=i||{};const e=new Mn,t=new jf(-.005,.05,100);return(i.altShiftDragRotate!==void 0?i.altShiftDragRotate:!0)&&e.push(new Lp),(i.doubleClickZoom!==void 0?i.doubleClickZoom:!0)&&e.push(new xp({delta:i.zoomDelta,duration:i.zoomDuration})),(i.dragPan!==void 0?i.dragPan:!0)&&e.push(new wp({onFocusOnly:i.onFocusOnly,kinetic:t})),(i.pinchRotate!==void 0?i.pinchRotate:!0)&&e.push(new Wp),(i.pinchZoom!==void 0?i.pinchZoom:!0)&&e.push(new Yp({duration:i.zoomDuration})),(i.keyboard!==void 0?i.keyboard:!0)&&(e.push(new zp),e.push(new Bp({delta:i.zoomDelta,duration:i.zoomDuration}))),(i.mouseWheelZoom!==void 0?i.mouseWheelZoom:!0)&&e.push(new Vp({onFocusOnly:i.onFocusOnly,duration:i.zoomDuration})),(i.shiftDragZoom!==void 0?i.shiftDragZoom:!0)&&e.push(new Op({duration:i.zoomDuration})),e}function Hh(i){if(i instanceof Ia){i.setMapInternal(null);return}i instanceof ks&&i.getLayers().forEach(Hh)}function Vh(i,e){if(i instanceof Ia){i.setMapInternal(e);return}if(i instanceof ks){const t=i.getLayers().getArray();for(let n=0,r=t.length;n<r;++n)Vh(t[n],e)}}let Kp=class extends Sn{constructor(e){super(),e=e||{},this.on,this.once,this.un;const t=qp(e);this.renderComplete_,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=e.maxTilesLoading!==void 0?e.maxTilesLoading:16,this.pixelRatio_=e.pixelRatio!==void 0?e.pixelRatio:lh,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=ji(),this.pixelToCoordinateTransform_=ji(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_),this.mapBrowserEventHandler_=null,this.moveTolerance_=e.moveTolerance,this.keyboardEventTarget_=t.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,this.resizeObserver_=new ResizeObserver(()=>this.updateSize()),this.controls=t.controls||mp(),this.interactions=t.interactions||jp({onFocusOnly:!0}),this.overlays_=t.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new op(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(yt.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(yt.VIEW,this.handleViewChanged_),this.addChangeListener(yt.SIZE,this.handleSizeChanged_),this.addChangeListener(yt.TARGET,this.handleTargetChanged_),this.setProperties(t.values);const n=this;e.view&&!(e.view instanceof sn)&&e.view.then(function(r){n.setView(new sn(r))}),this.controls.addEventListener(Vt.ADD,r=>{r.element.setMap(this)}),this.controls.addEventListener(Vt.REMOVE,r=>{r.element.setMap(null)}),this.interactions.addEventListener(Vt.ADD,r=>{r.element.setMap(this)}),this.interactions.addEventListener(Vt.REMOVE,r=>{r.element.setMap(null)}),this.overlays_.addEventListener(Vt.ADD,r=>{this.addOverlayInternal_(r.element)}),this.overlays_.addEventListener(Vt.REMOVE,r=>{const s=r.element.getId();s!==void 0&&delete this.overlayIdIndex_[s.toString()],r.element.setMap(null)}),this.controls.forEach(r=>{r.setMap(this)}),this.interactions.forEach(r=>{r.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(e){this.getControls().push(e)}addInteraction(e){this.getInteractions().push(e)}addLayer(e){this.getLayerGroup().getLayers().push(e)}handleLayerAdd_(e){Vh(e.layer,this)}addOverlay(e){this.getOverlays().push(e)}addOverlayInternal_(e){const t=e.getId();t!==void 0&&(this.overlayIdIndex_[t.toString()]=e),e.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(e,t,n){if(!this.frameState_||!this.renderer_)return;const r=this.getCoordinateFromPixelInternal(e);n=n!==void 0?n:{};const s=n.hitTolerance!==void 0?n.hitTolerance:0,a=n.layerFilter!==void 0?n.layerFilter:bs,o=n.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(r,this.frameState_,s,o,t,null,a,null)}getFeaturesAtPixel(e,t){const n=[];return this.forEachFeatureAtPixel(e,function(r){n.push(r)},t),n}getAllLayers(){const e=[];function t(n){n.forEach(function(r){r instanceof ks?t(r.getLayers()):e.push(r)})}return t(this.getLayers()),e}hasFeatureAtPixel(e,t){if(!this.frameState_||!this.renderer_)return!1;const n=this.getCoordinateFromPixelInternal(e);t=t!==void 0?t:{};const r=t.layerFilter!==void 0?t.layerFilter:bs,s=t.hitTolerance!==void 0?t.hitTolerance:0,a=t.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(n,this.frameState_,s,a,r,null)}getEventCoordinate(e){return this.getCoordinateFromPixel(this.getEventPixel(e))}getEventCoordinateInternal(e){return this.getCoordinateFromPixelInternal(this.getEventPixel(e))}getEventPixel(e){const n=this.viewport_.getBoundingClientRect(),r=this.getSize(),s=n.width/r[0],a=n.height/r[1],o="changedTouches"in e?e.changedTouches[0]:e;return[(o.clientX-n.left)/s,(o.clientY-n.top)/a]}getTarget(){return this.get(yt.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(e){return qo(this.getCoordinateFromPixelInternal(e),this.getView().getProjection())}getCoordinateFromPixelInternal(e){const t=this.frameState_;return t?Bt(t.pixelToCoordinateTransform,e.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(e){const t=this.overlayIdIndex_[e.toString()];return t!==void 0?t:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(yt.LAYERGROUP)}setLayers(e){const t=this.getLayerGroup();if(e instanceof Mn){t.setLayers(e);return}const n=t.getLayers();n.clear(),n.extend(e)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){const e=this.getLayerGroup().getLayerStatesArray();for(let t=0,n=e.length;t<n;++t){const r=e[t];if(!r.visible)continue;const s=r.layer.getRenderer();if(s&&!s.ready)return!0;const a=r.layer.getSource();if(a&&a.loading)return!0}return!1}getPixelFromCoordinate(e){const t=vn(e,this.getView().getProjection());return this.getPixelFromCoordinateInternal(t)}getPixelFromCoordinateInternal(e){const t=this.frameState_;return t?Bt(t.coordinateToPixelTransform,e.slice(0,2)):null}getRenderer(){return this.renderer_}getSize(){return this.get(yt.SIZE)}getView(){return this.get(yt.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){const e=this.getTargetElement();return e?e.ownerDocument:document}getTilePriority(e,t,n,r){return ap(this.frameState_,e,t,n,r)}handleBrowserEvent(e,t){t=t||e.type;const n=new Cn(t,this,e);this.handleMapBrowserEvent(n)}handleMapBrowserEvent(e){if(!this.frameState_)return;const t=e.originalEvent,n=t.type;if(n===$o.POINTERDOWN||n===He.WHEEL||n===He.KEYDOWN){const r=this.getOwnerDocument(),s=this.viewport_.getRootNode?this.viewport_.getRootNode():r,a=t.target;if(this.overlayContainerStopEvent_.contains(a)||!(s===r?r.documentElement:s).contains(a))return}if(e.frameState=this.frameState_,this.dispatchEvent(e)!==!1){const r=this.getInteractions().getArray().slice();for(let s=r.length-1;s>=0;s--){const a=r[s];if(a.getMap()!==this||!a.getActive()||!this.getTargetElement())continue;if(!a.handleEvent(e)||e.propagationStopped)break}}}handlePostRender(){const e=this.frameState_,t=this.tileQueue_;if(!t.isEmpty()){let r=this.maxTilesLoading_,s=r;if(e){const a=e.viewHints;if(a[Ht.ANIMATING]||a[Ht.INTERACTING]){const o=Date.now()-e.time>8;r=o?0:8,s=o?0:2}}t.getTilesLoading()<r&&(t.reprioritize(),t.loadMoreTiles(r,s))}e&&this.renderer_&&!e.animate&&(this.renderComplete_===!0?(this.hasListener(Fn.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(Fn.RENDERCOMPLETE,e),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new Gi(Ln.LOADEND,this,e)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new Gi(Ln.LOADSTART,this,e))));const n=this.postRenderFunctions_;for(let r=0,s=n.length;r<s;++r)n[r](this,e);n.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let n=0,r=this.targetChangeHandlerKeys_.length;n<r;++n)st(this.targetChangeHandlerKeys_[n]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(He.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(He.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,Zo(this.viewport_)}if(this.targetElement_){this.resizeObserver_.unobserve(this.targetElement_);const n=this.targetElement_.getRootNode();n instanceof ShadowRoot&&this.resizeObserver_.unobserve(n.host),this.setSize(void 0)}const e=this.getTarget(),t=typeof e=="string"?document.getElementById(e):e;if(this.targetElement_=t,!t)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{t.appendChild(this.viewport_),this.renderer_||(this.renderer_=new Jf(this)),this.mapBrowserEventHandler_=new np(this,this.moveTolerance_);for(const s in Qe)this.mapBrowserEventHandler_.addEventListener(Qe[s],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(He.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(He.WHEEL,this.boundHandleBrowserEvent_,hh?{passive:!1}:!1);const n=this.keyboardEventTarget_?this.keyboardEventTarget_:t;this.targetChangeHandlerKeys_=[Xe(n,He.KEYDOWN,this.handleBrowserEvent,this),Xe(n,He.KEYPRESS,this.handleBrowserEvent,this)];const r=t.getRootNode();r instanceof ShadowRoot&&this.resizeObserver_.observe(r.host),this.resizeObserver_.observe(t)}this.updateSize()}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(st(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(st(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);const e=this.getView();e&&(this.updateViewportSize_(),this.viewPropertyListenerKey_=Xe(e,Tr.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=Xe(e,He.CHANGE,this.handleViewPropertyChanged_,this),e.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(st),this.layerGroupPropertyListenerKeys_=null);const e=this.getLayerGroup();e&&(this.handleLayerAdd_(new Pn("addlayer",e)),this.layerGroupPropertyListenerKeys_=[Xe(e,Tr.PROPERTYCHANGE,this.render,this),Xe(e,He.CHANGE,this.render,this),Xe(e,"addlayer",this.handleLayerAdd_,this),Xe(e,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){const e=this.getLayerGroup().getLayerStatesArray();for(let t=0,n=e.length;t<n;++t){const r=e[t].layer;r.hasRenderer()&&r.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}flushDeclutterItems(){const e=this.frameState_;e&&this.renderer_.flushDeclutterItems(e)}removeControl(e){return this.getControls().remove(e)}removeInteraction(e){return this.getInteractions().remove(e)}removeLayer(e){return this.getLayerGroup().getLayers().remove(e)}handleLayerRemove_(e){Hh(e.layer)}removeOverlay(e){return this.getOverlays().remove(e)}renderFrame_(e){const t=this.getSize(),n=this.getView(),r=this.frameState_;let s=null;if(t!==void 0&&gl(t)&&n&&n.isDef()){const a=n.getHints(this.frameState_?this.frameState_.viewHints:void 0),o=n.getState();if(s={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutterTree:null,extent:Xo(o.center,o.resolution,o.rotation,t),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:t,tileQueue:this.tileQueue_,time:e,usedTiles:{},viewState:o,viewHints:a,wantedTiles:{},mapId:Ct(this),renderTargets:{}},o.nextCenter&&o.nextResolution){const l=isNaN(o.nextRotation)?o.rotation:o.nextRotation;s.nextExtent=Xo(o.nextCenter,o.nextResolution,l,t)}}this.frameState_=s,this.renderer_.renderFrame(s),s&&(s.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,s.postRenderFunctions),r&&(!this.previousExtent_||!Nr(this.previousExtent_)&&!ko(s.extent,this.previousExtent_))&&(this.dispatchEvent(new Gi(Ln.MOVESTART,this,r)),this.previousExtent_=Dr(this.previousExtent_)),this.previousExtent_&&!s.viewHints[Ht.ANIMATING]&&!s.viewHints[Ht.INTERACTING]&&!ko(s.extent,this.previousExtent_)&&(this.dispatchEvent(new Gi(Ln.MOVEEND,this,s)),Ju(s.extent,this.previousExtent_))),this.dispatchEvent(new Gi(Ln.POSTRENDER,this,s)),this.renderComplete_=this.hasListener(Ln.LOADSTART)||this.hasListener(Ln.LOADEND)||this.hasListener(Fn.RENDERCOMPLETE)?!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady():void 0,this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(e){const t=this.getLayerGroup();t&&this.handleLayerRemove_(new Pn("removelayer",t)),this.set(yt.LAYERGROUP,e)}setSize(e){this.set(yt.SIZE,e)}setTarget(e){this.set(yt.TARGET,e)}setView(e){if(!e||e instanceof sn){this.set(yt.VIEW,e);return}this.set(yt.VIEW,new sn);const t=this;e.then(function(n){t.setView(new sn(n))})}updateSize(){const e=this.getTargetElement();let t;if(e){const r=getComputedStyle(e),s=e.offsetWidth-parseFloat(r.borderLeftWidth)-parseFloat(r.paddingLeft)-parseFloat(r.paddingRight)-parseFloat(r.borderRightWidth),a=e.offsetHeight-parseFloat(r.borderTopWidth)-parseFloat(r.paddingTop)-parseFloat(r.paddingBottom)-parseFloat(r.borderBottomWidth);!isNaN(s)&&!isNaN(a)&&(t=[s,a],!gl(t)&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&xh("No map visible because the map container's width or height are 0."))}const n=this.getSize();t&&(!n||!Ns(t,n))&&(this.setSize(t),this.updateViewportSize_())}updateViewportSize_(){const e=this.getView();if(e){let t;const n=getComputedStyle(this.viewport_);n.width&&n.height&&(t=[parseInt(n.width,10),parseInt(n.height,10)]),e.setViewportSize(t)}}};function qp(i){let e=null;i.keyboardEventTarget!==void 0&&(e=typeof i.keyboardEventTarget=="string"?document.getElementById(i.keyboardEventTarget):i.keyboardEventTarget);const t={},n=i.layers&&typeof i.layers.getLayers=="function"?i.layers:new ks({layers:i.layers});t[yt.LAYERGROUP]=n,t[yt.TARGET]=i.target,t[yt.VIEW]=i.view instanceof sn?i.view:new sn;let r;i.controls!==void 0&&(Array.isArray(i.controls)?r=new Mn(i.controls.slice()):(qe(typeof i.controls.getArray=="function","Expected `controls` to be an array or an `ol/Collection.js`"),r=i.controls));let s;i.interactions!==void 0&&(Array.isArray(i.interactions)?s=new Mn(i.interactions.slice()):(qe(typeof i.interactions.getArray=="function","Expected `interactions` to be an array or an `ol/Collection.js`"),s=i.interactions));let a;return i.overlays!==void 0?Array.isArray(i.overlays)?a=new Mn(i.overlays.slice()):(qe(typeof i.overlays.getArray=="function","Expected `overlays` to be an array or an `ol/Collection.js`"),a=i.overlays):a=new Mn,{controls:r,interactions:s,keyboardEventTarget:e,overlays:a,values:t}}const Zp=Kp;class $p{constructor(e){this.highWaterMark=e!==void 0?e:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(e){for(;this.canExpireCache();)this.pop()}clear(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}containsKey(e){return this.entries_.hasOwnProperty(e)}forEach(e){let t=this.oldest_;for(;t;)e(t.value_,t.key_,this),t=t.newer}get(e,t){const n=this.entries_[e];return qe(n!==void 0,"Tried to get a value for a key that does not exist in the cache"),n===this.newest_||(n===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(n.newer.older=n.older,n.older.newer=n.newer),n.newer=null,n.older=this.newest_,this.newest_.newer=n,this.newest_=n),n.value_}remove(e){const t=this.entries_[e];return qe(t!==void 0,"Tried to get a value for a key that does not exist in the cache"),t===this.newest_?(this.newest_=t.older,this.newest_&&(this.newest_.newer=null)):t===this.oldest_?(this.oldest_=t.newer,this.oldest_&&(this.oldest_.older=null)):(t.newer.older=t.older,t.older.newer=t.newer),delete this.entries_[e],--this.count_,t.value_}getCount(){return this.count_}getKeys(){const e=new Array(this.count_);let t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.key_;return e}getValues(){const e=new Array(this.count_);let t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.value_;return e}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(e){if(this.containsKey(e))return this.entries_[e].value_}pop(){const e=this.oldest_;return delete this.entries_[e.key_],e.newer&&(e.newer.older=null),this.oldest_=e.newer,this.oldest_||(this.newest_=null),--this.count_,e.value_}replace(e,t){this.get(e),this.entries_[e].value_=t}set(e,t){qe(!(e in this.entries_),"Tried to set a value for a key that is used already");const n={key_:e,newer:null,older:this.newest_,value_:t};this.newest_?this.newest_.newer=n:this.oldest_=n,this.newest_=n,this.entries_[e]=n,++this.count_}setSize(e){this.highWaterMark=e}}const Jp=$p;function Rl(i,e,t,n){return n!==void 0?(n[0]=i,n[1]=e,n[2]=t,n):[i,e,t]}function Ws(i,e,t){return i+"/"+e+"/"+t}function kh(i){return Ws(i[0],i[1],i[2])}function Qp(i){return i.split("/").map(Number)}function em(i){return(i[1]<<i[0])+i[2]}function tm(i,e){const t=i[0],n=i[1],r=i[2];if(e.getMinZoom()>t||t>e.getMaxZoom())return!1;const s=e.getFullTileRange(t);return s?s.containsXY(n,r):!0}class nm extends Jp{clear(){for(;this.getCount()>0;)this.pop().release();super.clear()}expireCache(e){for(;this.canExpireCache()&&!(this.peekLast().getKey()in e);)this.pop().release()}pruneExceptNewestZ(){if(this.getCount()===0)return;const e=this.peekFirstKey(),n=Qp(e)[0];this.forEach(r=>{r.tileCoord[0]!==n&&(this.remove(kh(r.tileCoord)),r.release())})}}const Wh=nm;class Xh{constructor(e,t,n,r){this.minX=e,this.maxX=t,this.minY=n,this.maxY=r}contains(e){return this.containsXY(e[1],e[2])}containsTileRange(e){return this.minX<=e.minX&&e.maxX<=this.maxX&&this.minY<=e.minY&&e.maxY<=this.maxY}containsXY(e,t){return this.minX<=e&&e<=this.maxX&&this.minY<=t&&t<=this.maxY}equals(e){return this.minX==e.minX&&this.minY==e.minY&&this.maxX==e.maxX&&this.maxY==e.maxY}extend(e){e.minX<this.minX&&(this.minX=e.minX),e.maxX>this.maxX&&(this.maxX=e.maxX),e.minY<this.minY&&(this.minY=e.minY),e.maxY>this.maxY&&(this.maxY=e.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(e){return this.minX<=e.maxX&&this.maxX>=e.minX&&this.minY<=e.maxY&&this.maxY>=e.minY}}function gi(i,e,t,n,r){return r!==void 0?(r.minX=i,r.maxX=e,r.minY=t,r.maxY=n,r):new Xh(i,e,t,n)}const Yh=Xh,Zr={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};class im extends Ia{constructor(e){e=e||{};const t=Object.assign({},e);delete t.preload,delete t.useInterimTilesOnError,super(t),this.on,this.once,this.un,this.setPreload(e.preload!==void 0?e.preload:0),this.setUseInterimTilesOnError(e.useInterimTilesOnError!==void 0?e.useInterimTilesOnError:!0)}getPreload(){return this.get(Zr.PRELOAD)}setPreload(e){this.set(Zr.PRELOAD,e)}getUseInterimTilesOnError(){return this.get(Zr.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(e){this.set(Zr.USE_INTERIM_TILES_ON_ERROR,e)}getData(e){return super.getData(e)}}const rm=im,sm=.5,om=10,wl=.25;class am{constructor(e,t,n,r,s,a){this.sourceProj_=e,this.targetProj_=t;let o={};const l=wr(this.targetProj_,this.sourceProj_);this.transformInv_=function(y){const v=y[0]+"/"+y[1];return o[v]||(o[v]=l(y)),o[v]},this.maxSourceExtent_=r,this.errorThresholdSquared_=s*s,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!r&&!!this.sourceProj_.getExtent()&&mt(r)>=mt(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?mt(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?mt(this.targetProj_.getExtent()):null;const c=ui(n),h=Hs(n),u=Bs(n),d=Gs(n),m=this.transformInv_(c),g=this.transformInv_(h),_=this.transformInv_(u),p=this.transformInv_(d),f=om+(a?Math.max(0,Math.ceil(Math.log2(Wo(n)/(a*a*256*256)))):0);if(this.addQuad_(c,h,u,d,m,g,_,p,f),this.wrapsXInSource_){let y=1/0;this.triangles_.forEach(function(v,x,T){y=Math.min(y,v.source[0][0],v.source[1][0],v.source[2][0])}),this.triangles_.forEach(v=>{if(Math.max(v.source[0][0],v.source[1][0],v.source[2][0])-y>this.sourceWorldWidth_/2){const x=[[v.source[0][0],v.source[0][1]],[v.source[1][0],v.source[1][1]],[v.source[2][0],v.source[2][1]]];x[0][0]-y>this.sourceWorldWidth_/2&&(x[0][0]-=this.sourceWorldWidth_),x[1][0]-y>this.sourceWorldWidth_/2&&(x[1][0]-=this.sourceWorldWidth_),x[2][0]-y>this.sourceWorldWidth_/2&&(x[2][0]-=this.sourceWorldWidth_);const T=Math.min(x[0][0],x[1][0],x[2][0]);Math.max(x[0][0],x[1][0],x[2][0])-T<this.sourceWorldWidth_/2&&(v.source=x)}})}o={}}addTriangle_(e,t,n,r,s,a){this.triangles_.push({source:[r,s,a],target:[e,t,n]})}addQuad_(e,t,n,r,s,a,o,l,c){const h=nl([s,a,o,l]),u=this.sourceWorldWidth_?mt(h)/this.sourceWorldWidth_:null,d=this.sourceWorldWidth_,m=this.sourceProj_.canWrapX()&&u>.5&&u<1;let g=!1;if(c>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){const p=nl([e,t,n,r]);g=mt(p)/this.targetWorldWidth_>wl||g}!m&&this.sourceProj_.isGlobal()&&u&&(g=u>wl||g)}if(!g&&this.maxSourceExtent_&&isFinite(h[0])&&isFinite(h[1])&&isFinite(h[2])&&isFinite(h[3])&&!Ur(h,this.maxSourceExtent_))return;let _=0;if(!g&&(!isFinite(s[0])||!isFinite(s[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(l[0])||!isFinite(l[1]))){if(c>0)g=!0;else if(_=(!isFinite(s[0])||!isFinite(s[1])?8:0)+(!isFinite(a[0])||!isFinite(a[1])?4:0)+(!isFinite(o[0])||!isFinite(o[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),_!=1&&_!=2&&_!=4&&_!=8)return}if(c>0){if(!g){const p=[(e[0]+n[0])/2,(e[1]+n[1])/2],f=this.transformInv_(p);let y;m?y=(Zi(s[0],d)+Zi(o[0],d))/2-Zi(f[0],d):y=(s[0]+o[0])/2-f[0];const v=(s[1]+o[1])/2-f[1];g=y*y+v*v>this.errorThresholdSquared_}if(g){if(Math.abs(e[0]-n[0])<=Math.abs(e[1]-n[1])){const p=[(t[0]+n[0])/2,(t[1]+n[1])/2],f=this.transformInv_(p),y=[(r[0]+e[0])/2,(r[1]+e[1])/2],v=this.transformInv_(y);this.addQuad_(e,t,p,y,s,a,f,v,c-1),this.addQuad_(y,p,n,r,v,f,o,l,c-1)}else{const p=[(e[0]+t[0])/2,(e[1]+t[1])/2],f=this.transformInv_(p),y=[(n[0]+r[0])/2,(n[1]+r[1])/2],v=this.transformInv_(y);this.addQuad_(e,p,y,r,s,f,v,l,c-1),this.addQuad_(p,t,n,y,f,a,o,v,c-1)}return}}if(m){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}_&11||this.addTriangle_(e,n,r,s,o,l),_&14||this.addTriangle_(e,n,t,s,o,a),_&&(_&13||this.addTriangle_(t,r,e,a,l,s),_&7||this.addTriangle_(t,r,n,a,l,o))}calculateSourceExtent(){const e=hi();return this.triangles_.forEach(function(t,n,r){const s=t.source;ys(e,s[0]),ys(e,s[1]),ys(e,s[2])}),e}getTriangles(){return this.triangles_}}const lm=am;let so;const $i=[];function Cl(i,e,t,n,r){i.beginPath(),i.moveTo(0,0),i.lineTo(e,t),i.lineTo(n,r),i.closePath(),i.save(),i.clip(),i.fillRect(0,0,Math.max(e,n)+1,Math.max(t,r)),i.restore()}function oo(i,e){return Math.abs(i[e*4]-210)>2||Math.abs(i[e*4+3]-.75*255)>2}function cm(){if(so===void 0){const i=nr(6,6,$i);i.globalCompositeOperation="lighter",i.fillStyle="rgba(210, 0, 0, 0.75)",Cl(i,4,5,4,0),Cl(i,4,5,0,5);const e=i.getImageData(0,0,3,3).data;so=oo(e,0)||oo(e,4)||oo(e,8),ba(i),$i.push(i.canvas)}return so}function Ll(i,e,t,n){const r=ya(t,e,i);let s=ll(e,n,t);const a=e.getMetersPerUnit();a!==void 0&&(s*=a);const o=i.getMetersPerUnit();o!==void 0&&(s/=o);const l=i.getExtent();if(!l||_a(l,r)){const c=ll(i,s,r)/s;isFinite(c)&&c>0&&(s/=c)}return s}function hm(i,e,t,n){const r=Ar(t);let s=Ll(i,e,r,n);return(!isFinite(s)||s<=0)&&mh(t,function(a){return s=Ll(i,e,a,n),isFinite(s)&&s>0}),s}function um(i,e,t,n,r,s,a,o,l,c,h,u){const d=nr(Math.round(t*i),Math.round(t*e),$i);if(u||(d.imageSmoothingEnabled=!1),l.length===0)return d.canvas;d.scale(t,t);function m(x){return Math.round(x*t)/t}d.globalCompositeOperation="lighter";const g=hi();l.forEach(function(x,T,w){nd(g,x.extent)});const _=mt(g),p=an(g),f=nr(Math.round(t*_/n),Math.round(t*p/n),$i);u||(f.imageSmoothingEnabled=!1);const y=t/n;l.forEach(function(x,T,w){const R=x.extent[0]-g[0],U=-(x.extent[3]-g[3]),M=mt(x.extent),A=an(x.extent);x.image.width>0&&x.image.height>0&&f.drawImage(x.image,c,c,x.image.width-2*c,x.image.height-2*c,R*y,U*y,M*y,A*y)});const v=ui(a);return o.getTriangles().forEach(function(x,T,w){const R=x.source,U=x.target;let M=R[0][0],A=R[0][1],q=R[1][0],K=R[1][1],I=R[2][0],V=R[2][1];const H=m((U[0][0]-v[0])/s),$=m(-(U[0][1]-v[1])/s),G=m((U[1][0]-v[0])/s),j=m(-(U[1][1]-v[1])/s),Q=m((U[2][0]-v[0])/s),Z=m(-(U[2][1]-v[1])/s),B=M,k=A;M=0,A=0,q-=B,K-=k,I-=B,V-=k;const ae=[[q,K,0,0,G-H],[I,V,0,0,Q-H],[0,0,q,K,j-$],[0,0,I,V,Z-$]],ie=xd(ae);if(ie){if(d.save(),d.beginPath(),cm()||!u){d.moveTo(G,j);const oe=4,_e=H-G,ve=$-j;for(let pe=0;pe<oe;pe++)d.lineTo(G+m((pe+1)*_e/oe),j+m(pe*ve/(oe-1))),pe!=oe-1&&d.lineTo(G+m((pe+1)*_e/oe),j+m((pe+1)*ve/(oe-1)));d.lineTo(Q,Z)}else d.moveTo(G,j),d.lineTo(H,$),d.lineTo(Q,Z);d.clip(),d.transform(ie[0],ie[2],ie[1],ie[3],H,$),d.translate(g[0]-B,g[3]-k),d.scale(n/t,-n/t),d.drawImage(f.canvas,0,0),d.restore()}}),ba(f),$i.push(f.canvas),h&&(d.save(),d.globalCompositeOperation="source-over",d.strokeStyle="black",d.lineWidth=1,o.getTriangles().forEach(function(x,T,w){const R=x.target,U=(R[0][0]-v[0])/s,M=-(R[0][1]-v[1])/s,A=(R[1][0]-v[0])/s,q=-(R[1][1]-v[1])/s,K=(R[2][0]-v[0])/s,I=-(R[2][1]-v[1])/s;d.beginPath(),d.moveTo(A,q),d.lineTo(U,M),d.lineTo(K,I),d.closePath(),d.stroke()}),d.restore()),d.canvas}class dm extends Nh{constructor(e,t,n,r,s,a,o,l,c,h,u,d){super(s,Me.IDLE,{interpolate:!!d}),this.renderEdges_=u!==void 0?u:!1,this.pixelRatio_=o,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=t,this.targetTileGrid_=r,this.wrappedTileCoord_=a||s,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0;const m=r.getTileCoordExtent(this.wrappedTileCoord_),g=this.targetTileGrid_.getExtent();let _=this.sourceTileGrid_.getExtent();const p=g?vr(m,g):m;if(Wo(p)===0){this.state=Me.EMPTY;return}const f=e.getExtent();f&&(_?_=vr(_,f):_=f);const y=r.getResolution(this.wrappedTileCoord_[0]),v=hm(e,n,p,y);if(!isFinite(v)||v<=0){this.state=Me.EMPTY;return}const x=h!==void 0?h:sm;if(this.triangulation_=new lm(e,n,p,_,v*x,y),this.triangulation_.getTriangles().length===0){this.state=Me.EMPTY;return}this.sourceZ_=t.getZForResolution(v);let T=this.triangulation_.calculateSourceExtent();if(_&&(e.canWrapX()?(T[1]=gt(T[1],_[1],_[3]),T[3]=gt(T[3],_[1],_[3])):T=vr(T,_)),!Wo(T))this.state=Me.EMPTY;else{const w=t.getTileRangeForExtentAndZ(T,this.sourceZ_);for(let R=w.minX;R<=w.maxX;R++)for(let U=w.minY;U<=w.maxY;U++){const M=c(this.sourceZ_,R,U,o);M&&this.sourceTiles_.push(M)}this.sourceTiles_.length===0&&(this.state=Me.EMPTY)}}getImage(){return this.canvas_}reproject_(){const e=[];if(this.sourceTiles_.forEach(t=>{t&&t.getState()==Me.LOADED&&e.push({extent:this.sourceTileGrid_.getTileCoordExtent(t.tileCoord),image:t.getImage()})}),this.sourceTiles_.length=0,e.length===0)this.state=Me.ERROR;else{const t=this.wrappedTileCoord_[0],n=this.targetTileGrid_.getTileSize(t),r=typeof n=="number"?n:n[0],s=typeof n=="number"?n:n[1],a=this.targetTileGrid_.getResolution(t),o=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=um(r,s,this.pixelRatio_,o,this.sourceTileGrid_.getExtent(),a,l,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=Me.LOADED}this.changed()}load(){if(this.state==Me.IDLE){this.state=Me.LOADING,this.changed();let e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(t=>{const n=t.getState();if(n==Me.IDLE||n==Me.LOADING){e++;const r=Xe(t,He.CHANGE,function(s){const a=t.getState();(a==Me.LOADED||a==Me.ERROR||a==Me.EMPTY)&&(st(r),e--,e===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(r)}}),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(t,n,r){t.getState()==Me.IDLE&&t.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(st),this.sourcesListenerKeys_=null}release(){this.canvas_&&(ba(this.canvas_.getContext("2d")),$i.push(this.canvas_),this.canvas_=null),super.release()}}const Qo=dm;class fm extends Bf{constructor(e){super(e),this.extentChanged=!0,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedRevision,this.renderedTiles=[],this.newTiles_=!1,this.tmpExtent=hi(),this.tmpTileRange_=new Yh(0,0,0,0)}isDrawableTile(e){const t=this.getLayer(),n=e.getState(),r=t.getUseInterimTilesOnError();return n==Me.LOADED||n==Me.EMPTY||n==Me.ERROR&&!r}getTile(e,t,n,r){const s=r.pixelRatio,a=r.viewState.projection,o=this.getLayer();let c=o.getSource().getTile(e,t,n,s,a);return c.getState()==Me.ERROR&&o.getUseInterimTilesOnError()&&o.getPreload()>0&&(this.newTiles_=!0),this.isDrawableTile(c)||(c=c.getInterimTile()),c}getData(e){const t=this.frameState;if(!t)return null;const n=this.getLayer(),r=Bt(t.pixelToCoordinateTransform,e.slice()),s=n.getExtent();if(s&&!_a(s,r))return null;const a=t.pixelRatio,o=t.viewState.projection,l=t.viewState,c=n.getRenderSource(),h=c.getTileGridForProjection(l.projection),u=c.getTilePixelRatio(t.pixelRatio);for(let d=h.getZForResolution(l.resolution);d>=h.getMinZoom();--d){const m=h.getTileCoordForCoordAndZ(r,d),g=c.getTile(d,m[1],m[2],a,o);if(!(g instanceof Oh||g instanceof Qo)||g instanceof Qo&&g.getState()===Me.EMPTY)return null;if(g.getState()!==Me.LOADED)continue;const _=h.getOrigin(d),p=Un(h.getTileSize(d)),f=h.getResolution(d),y=Math.floor(u*((r[0]-_[0])/f-m[1]*p[0])),v=Math.floor(u*((_[1]-r[1])/f-m[2]*p[1])),x=Math.round(u*c.getGutterForProjection(l.projection));return this.getImageData(g.getImage(),y+x,v+x)}return null}loadedTileCallback(e,t,n){return this.isDrawableTile(n)?super.loadedTileCallback(e,t,n):!1}prepareFrame(e){return!!this.getLayer().getSource()}renderFrame(e,t){const n=e.layerStatesArray[e.layerIndex],r=e.viewState,s=r.projection,a=r.resolution,o=r.center,l=r.rotation,c=e.pixelRatio,h=this.getLayer(),u=h.getSource(),d=u.getRevision(),m=u.getTileGridForProjection(s),g=m.getZForResolution(a,u.zDirection),_=m.getResolution(g);let p=e.extent;const f=e.viewState.resolution,y=u.getTilePixelRatio(c),v=Math.round(mt(p)/f*c),x=Math.round(an(p)/f*c),T=n.extent&&Wi(n.extent,s);T&&(p=vr(p,Wi(n.extent,s)));const w=_*v/2/y,R=_*x/2/y,U=[o[0]-w,o[1]-R,o[0]+w,o[1]+R],M=m.getTileRangeForExtentAndZ(p,g),A={};A[g]={};const q=this.createLoadedTileFinder(u,s,A),K=this.tmpExtent,I=this.tmpTileRange_;this.newTiles_=!1;const V=l?Yo(r.center,f,l,e.size):void 0;for(let ae=M.minX;ae<=M.maxX;++ae)for(let ie=M.minY;ie<=M.maxY;++ie){if(l&&!m.tileCoordIntersectsViewport([g,ae,ie],V))continue;const oe=this.getTile(g,ae,ie,e);if(this.isDrawableTile(oe)){const pe=Ct(this);if(oe.getState()==Me.LOADED){A[g][oe.tileCoord.toString()]=oe;let Ie=oe.inTransition(pe);Ie&&n.opacity!==1&&(oe.endTransition(pe),Ie=!1),!this.newTiles_&&(Ie||!this.renderedTiles.includes(oe))&&(this.newTiles_=!0)}if(oe.getAlpha(pe,e.time)===1)continue}const _e=m.getTileCoordChildTileRange(oe.tileCoord,I,K);let ve=!1;_e&&(ve=q(g+1,_e)),ve||m.forEachTileCoordParentTileRange(oe.tileCoord,q,I,K)}const H=_/a*c/y;br(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/c,1/c,l,-v/2,-x/2);const $=Zu(this.pixelTransform);this.useContainer(t,$,this.getBackground(e));const G=this.context,j=G.canvas;uh(this.inversePixelTransform,this.pixelTransform),br(this.tempTransform,v/2,x/2,H,H,0,-v/2,-x/2),j.width!=v||j.height!=x?(j.width=v,j.height=x):this.containerReused||G.clearRect(0,0,v,x),T&&this.clipUnrotated(G,e,T),u.getInterpolate()||(G.imageSmoothingEnabled=!1),this.preRender(G,e),this.renderedTiles.length=0;let Q=Object.keys(A).map(Number);Q.sort(pa);let Z,B,k;n.opacity===1&&(!this.containerReused||u.getOpaque(e.viewState.projection))?Q=Q.reverse():(Z=[],B=[]);for(let ae=Q.length-1;ae>=0;--ae){const ie=Q[ae],oe=u.getTilePixelSize(ie,c,s),ve=m.getResolution(ie)/_,pe=oe[0]*ve*H,Ie=oe[1]*ve*H,tt=m.getTileCoordForCoordAndZ(ui(U),ie),Ce=m.getTileCoordExtent(tt),D=Bt(this.tempTransform,[y*(Ce[0]-U[0])/_,y*(U[3]-Ce[3])/_]),nt=y*u.getGutterForProjection(s),xe=A[ie];for(const Te in xe){const Ee=xe[Te],Ye=Ee.tileCoord,Pe=tt[1]-Ye[1],Re=Math.round(D[0]-(Pe-1)*pe),ze=tt[2]-Ye[2],it=Math.round(D[1]-(ze-1)*Ie),je=Math.round(D[0]-Pe*pe),b=Math.round(D[1]-ze*Ie),E=Re-je,F=it-b,re=g===ie,ee=re&&Ee.getAlpha(Ct(this),e.time)!==1;let ne=!1;if(!ee)if(Z){k=[je,b,je+E,b,je+E,b+F,je,b+F];for(let ge=0,se=Z.length;ge<se;++ge)if(g!==ie&&ie<B[ge]){const O=Z[ge];Ur([je,b,je+E,b+F],[O[0],O[3],O[4],O[7]])&&(ne||(G.save(),ne=!0),G.beginPath(),G.moveTo(k[0],k[1]),G.lineTo(k[2],k[3]),G.lineTo(k[4],k[5]),G.lineTo(k[6],k[7]),G.moveTo(O[6],O[7]),G.lineTo(O[4],O[5]),G.lineTo(O[2],O[3]),G.lineTo(O[0],O[1]),G.clip())}Z.push(k),B.push(ie)}else G.clearRect(je,b,E,F);this.drawTileImage(Ee,e,je,b,E,F,nt,re),Z&&!ee?(ne&&G.restore(),this.renderedTiles.unshift(Ee)):this.renderedTiles.push(Ee),this.updateUsedTiles(e.usedTiles,u,Ee)}}return this.renderedRevision=d,this.renderedResolution=_,this.extentChanged=!this.renderedExtent_||!ko(this.renderedExtent_,U),this.renderedExtent_=U,this.renderedPixelRatio=c,this.renderedProjection=s,this.manageTilePyramid(e,u,m,c,s,p,g,h.getPreload()),this.scheduleExpireCache(e,u),this.postRender(G,e),n.extent&&G.restore(),G.imageSmoothingEnabled=!0,$!==j.style.transform&&(j.style.transform=$),this.container}drawTileImage(e,t,n,r,s,a,o,l){const c=this.getTileImage(e);if(!c)return;const h=Ct(this),u=t.layerStatesArray[t.layerIndex],d=u.opacity*(l?e.getAlpha(h,t.time):1),m=d!==this.context.globalAlpha;m&&(this.context.save(),this.context.globalAlpha=d),this.context.drawImage(c,o,o,c.width-2*o,c.height-2*o,n,r,s,a),m&&this.context.restore(),d!==u.opacity?t.animate=!0:l&&e.endTransition(h)}getImage(){const e=this.context;return e?e.canvas:null}getTileImage(e){return e.getImage()}scheduleExpireCache(e,t){if(t.canExpireCache()){const n=(function(r,s,a){const o=Ct(r);o in a.usedTiles&&r.expireCache(a.viewState.projection,a.usedTiles[o])}).bind(null,t);e.postRenderFunctions.push(n)}}updateUsedTiles(e,t,n){const r=Ct(t);r in e||(e[r]={}),e[r][n.getKey()]=!0}manageTilePyramid(e,t,n,r,s,a,o,l,c){const h=Ct(t);h in e.wantedTiles||(e.wantedTiles[h]={});const u=e.wantedTiles[h],d=e.tileQueue,m=n.getMinZoom(),g=e.viewState.rotation,_=g?Yo(e.viewState.center,e.viewState.resolution,g,e.size):void 0;let p=0,f,y,v,x,T,w;for(w=m;w<=o;++w)for(y=n.getTileRangeForExtentAndZ(a,w,y),v=n.getResolution(w),x=y.minX;x<=y.maxX;++x)for(T=y.minY;T<=y.maxY;++T)g&&!n.tileCoordIntersectsViewport([w,x,T],_)||(o-w<=l?(++p,f=t.getTile(w,x,T,r,s),f.getState()==Me.IDLE&&(u[f.getKey()]=!0,d.isKeyQueued(f.getKey())||d.enqueue([f,h,n.getTileCoordCenter(f.tileCoord),v])),c!==void 0&&c(f)):t.useTile(w,x,T,s));t.updateCacheSize(p,s)}}const pm=fm;class mm extends rm{constructor(e){super(e)}createRenderer(){return new pm(this)}}const gm=mm,ao={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"},_i=[0,0,0],Tn=5;class _m{constructor(e){this.minZoom=e.minZoom!==void 0?e.minZoom:0,this.resolutions_=e.resolutions,qe(Fu(this.resolutions_,function(r,s){return s-r},!0),"`resolutions` must be sorted in descending order");let t;if(!e.origins){for(let r=0,s=this.resolutions_.length-1;r<s;++r)if(!t)t=this.resolutions_[r]/this.resolutions_[r+1];else if(this.resolutions_[r]/this.resolutions_[r+1]!==t){t=void 0;break}}this.zoomFactor_=t,this.maxZoom=this.resolutions_.length-1,this.origin_=e.origin!==void 0?e.origin:null,this.origins_=null,e.origins!==void 0&&(this.origins_=e.origins,qe(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));const n=e.extent;n!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=ui(n)),qe(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,e.tileSizes!==void 0&&(this.tileSizes_=e.tileSizes,qe(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=e.tileSize!==void 0?e.tileSize:this.tileSizes_?null:Ra,qe(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=n!==void 0?n:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],e.sizes!==void 0?this.fullTileRanges_=e.sizes.map(function(r,s){const a=new Yh(Math.min(0,r[0]),Math.max(r[0]-1,-1),Math.min(0,r[1]),Math.max(r[1]-1,-1));if(n){const o=this.getTileRangeForExtentAndZ(n,s);a.minX=Math.max(o.minX,a.minX),a.maxX=Math.min(o.maxX,a.maxX),a.minY=Math.max(o.minY,a.minY),a.maxY=Math.min(o.maxY,a.maxY)}return a},this):n&&this.calculateTileRanges_(n)}forEachTileCoord(e,t,n){const r=this.getTileRangeForExtentAndZ(e,t);for(let s=r.minX,a=r.maxX;s<=a;++s)for(let o=r.minY,l=r.maxY;o<=l;++o)n([t,s,o])}forEachTileCoordParentTileRange(e,t,n,r){let s,a,o,l=null,c=e[0]-1;for(this.zoomFactor_===2?(a=e[1],o=e[2]):l=this.getTileCoordExtent(e,r);c>=this.minZoom;){if(this.zoomFactor_===2?(a=Math.floor(a/2),o=Math.floor(o/2),s=gi(a,a,o,o,n)):s=this.getTileRangeForExtentAndZ(l,c,n),t(c,s))return!0;--c}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(e){return this.origin_?this.origin_:this.origins_[e]}getResolution(e){return this.resolutions_[e]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(e,t,n){if(e[0]<this.maxZoom){if(this.zoomFactor_===2){const s=e[1]*2,a=e[2]*2;return gi(s,s+1,a,a+1,t)}const r=this.getTileCoordExtent(e,n||this.tmpExtent_);return this.getTileRangeForExtentAndZ(r,e[0]+1,t)}return null}getTileRangeForTileCoordAndZ(e,t,n){if(t>this.maxZoom||t<this.minZoom)return null;const r=e[0],s=e[1],a=e[2];if(t===r)return gi(s,a,s,a,n);if(this.zoomFactor_){const l=Math.pow(this.zoomFactor_,t-r),c=Math.floor(s*l),h=Math.floor(a*l);if(t<r)return gi(c,c,h,h,n);const u=Math.floor(l*(s+1))-1,d=Math.floor(l*(a+1))-1;return gi(c,u,h,d,n)}const o=this.getTileCoordExtent(e,this.tmpExtent_);return this.getTileRangeForExtentAndZ(o,t,n)}getTileRangeForExtentAndZ(e,t,n){this.getTileCoordForXYAndZ_(e[0],e[3],t,!1,_i);const r=_i[1],s=_i[2];this.getTileCoordForXYAndZ_(e[2],e[1],t,!0,_i);const a=_i[1],o=_i[2];return gi(r,a,s,o,n)}getTileCoordCenter(e){const t=this.getOrigin(e[0]),n=this.getResolution(e[0]),r=Un(this.getTileSize(e[0]),this.tmpSize_);return[t[0]+(e[1]+.5)*r[0]*n,t[1]-(e[2]+.5)*r[1]*n]}getTileCoordExtent(e,t){const n=this.getOrigin(e[0]),r=this.getResolution(e[0]),s=Un(this.getTileSize(e[0]),this.tmpSize_),a=n[0]+e[1]*s[0]*r,o=n[1]-(e[2]+1)*s[1]*r,l=a+s[0]*r,c=o+s[1]*r;return ar(a,o,l,c,t)}getTileCoordForCoordAndResolution(e,t,n){return this.getTileCoordForXYAndResolution_(e[0],e[1],t,!1,n)}getTileCoordForXYAndResolution_(e,t,n,r,s){const a=this.getZForResolution(n),o=n/this.getResolution(a),l=this.getOrigin(a),c=Un(this.getTileSize(a),this.tmpSize_);let h=o*(e-l[0])/n/c[0],u=o*(l[1]-t)/n/c[1];return r?(h=Yr(h,Tn)-1,u=Yr(u,Tn)-1):(h=Xr(h,Tn),u=Xr(u,Tn)),Rl(a,h,u,s)}getTileCoordForXYAndZ_(e,t,n,r,s){const a=this.getOrigin(n),o=this.getResolution(n),l=Un(this.getTileSize(n),this.tmpSize_);let c=(e-a[0])/o/l[0],h=(a[1]-t)/o/l[1];return r?(c=Yr(c,Tn)-1,h=Yr(h,Tn)-1):(c=Xr(c,Tn),h=Xr(h,Tn)),Rl(n,c,h,s)}getTileCoordForCoordAndZ(e,t,n){return this.getTileCoordForXYAndZ_(e[0],e[1],t,!1,n)}getTileCoordResolution(e){return this.resolutions_[e[0]]}getTileSize(e){return this.tileSize_?this.tileSize_:this.tileSizes_[e]}getFullTileRange(e){return this.fullTileRanges_?this.fullTileRanges_[e]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,e):null}getZForResolution(e,t){const n=ma(this.resolutions_,e,t||0);return gt(n,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(e,t){return Ch(t,0,t.length,2,this.getTileCoordExtent(e))}calculateTileRanges_(e){const t=this.resolutions_.length,n=new Array(t);for(let r=this.minZoom;r<t;++r)n[r]=this.getTileRangeForExtentAndZ(e,r);this.fullTileRanges_=n}}const jh=_m;function Kh(i){let e=i.getDefaultTileGrid();return e||(e=Mm(i),i.setDefaultTileGrid(e)),e}function vm(i,e,t){const n=e[0],r=i.getTileCoordCenter(e),s=Fa(t);if(!_a(s,r)){const a=mt(s),o=Math.ceil((s[0]-r[0])/a);return r[0]+=a*o,i.getTileCoordForCoordAndZ(r,n)}return e}function xm(i,e,t,n){n=n!==void 0?n:"top-left";const r=qh(i,e,t);return new jh({extent:i,origin:rd(i,n),resolutions:r,tileSize:t})}function Em(i){const e=i||{},t=e.extent||Xt("EPSG:3857").getExtent(),n={extent:t,minZoom:e.minZoom,tileSize:e.tileSize,resolutions:qh(t,e.maxZoom,e.tileSize,e.maxResolution)};return new jh(n)}function qh(i,e,t,n){e=e!==void 0?e:xf,t=Un(t!==void 0?t:Ra);const r=an(i),s=mt(i);n=n>0?n:Math.max(s/t[0],r/t[1]);const a=e+1,o=new Array(a);for(let l=0;l<a;++l)o[l]=n/Math.pow(2,l);return o}function Mm(i,e,t,n){const r=Fa(i);return xm(r,e,t,n)}function Fa(i){i=Xt(i);let e=i.getExtent();if(!e){const t=180*Rr.degrees/i.getMetersPerUnit();e=ar(-t,-t,t,t)}return e}class ym extends Vf{constructor(e){super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate}),this.on,this.once,this.un,this.opaque_=e.opaque!==void 0?e.opaque:!1,this.tilePixelRatio_=e.tilePixelRatio!==void 0?e.tilePixelRatio:1,this.tileGrid=e.tileGrid!==void 0?e.tileGrid:null;const t=[256,256];this.tileGrid&&Un(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),t),this.tileCache=new Wh(e.cacheSize||0),this.tmpSize=[0,0],this.key_=e.key||"",this.tileOptions={transition:e.transition,interpolate:e.interpolate},this.zDirection=e.zDirection?e.zDirection:0}canExpireCache(){return this.tileCache.canExpireCache()}expireCache(e,t){const n=this.getTileCacheForProjection(e);n&&n.expireCache(t)}forEachLoadedTile(e,t,n,r){const s=this.getTileCacheForProjection(e);if(!s)return!1;let a=!0,o,l,c;for(let h=n.minX;h<=n.maxX;++h)for(let u=n.minY;u<=n.maxY;++u)l=Ws(t,h,u),c=!1,s.containsKey(l)&&(o=s.get(l),c=o.getState()===Me.LOADED,c&&(c=r(o)!==!1)),c||(a=!1);return a}getGutterForProjection(e){return 0}getKey(){return this.key_}setKey(e){this.key_!==e&&(this.key_=e,this.changed())}getOpaque(e){return this.opaque_}getResolutions(e){const t=e?this.getTileGridForProjection(e):this.tileGrid;return t?t.getResolutions():null}getTile(e,t,n,r,s){return et()}getTileGrid(){return this.tileGrid}getTileGridForProjection(e){return this.tileGrid?this.tileGrid:Kh(e)}getTileCacheForProjection(e){const t=this.getProjection();return qe(t===null||Fi(t,e),"A VectorTile source can only be rendered if it has a projection compatible with the view projection."),this.tileCache}getTilePixelRatio(e){return this.tilePixelRatio_}getTilePixelSize(e,t,n){const r=this.getTileGridForProjection(n),s=this.getTilePixelRatio(t),a=Un(r.getTileSize(e),this.tmpSize);return s==1?a:af(a,s,this.tmpSize)}getTileCoordForTileUrlFunction(e,t){t=t!==void 0?t:this.getProjection();const n=this.getTileGridForProjection(t);return this.getWrapX()&&t.isGlobal()&&(e=vm(n,e,t)),tm(e,n)?e:null}clear(){this.tileCache.clear()}refresh(){this.clear(),super.refresh()}updateCacheSize(e,t){const n=this.getTileCacheForProjection(t);e>n.highWaterMark&&(n.highWaterMark=e)}useTile(e,t,n,r){}}class Sm extends kn{constructor(e,t){super(e),this.tile=t}}const Tm=ym;function bm(i,e){const t=/\{z\}/g,n=/\{x\}/g,r=/\{y\}/g,s=/\{-y\}/g;return function(a,o,l){if(a)return i.replace(t,a[0].toString()).replace(n,a[1].toString()).replace(r,a[2].toString()).replace(s,function(){const c=a[0],h=e.getFullTileRange(c);return qe(h,"The {-y} placeholder requires a tile grid with extent"),(h.getHeight()-a[2]-1).toString()})}}function Am(i,e){const t=i.length,n=new Array(t);for(let r=0;r<t;++r)n[r]=bm(i[r],e);return Rm(n)}function Rm(i){return i.length===1?i[0]:function(e,t,n){if(!e)return;const r=em(e),s=Zi(r,i.length);return i[s](e,t,n)}}function wm(i){const e=[];let t=/\{([a-z])-([a-z])\}/.exec(i);if(t){const n=t[1].charCodeAt(0),r=t[2].charCodeAt(0);let s;for(s=n;s<=r;++s)e.push(i.replace(t[0],String.fromCharCode(s)));return e}if(t=/\{(\d+)-(\d+)\}/.exec(i),t){const n=parseInt(t[2],10);for(let r=parseInt(t[1],10);r<=n;r++)e.push(i.replace(t[0],r.toString()));return e}return e.push(i),e}class za extends Tm{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===za.prototype.tileUrlFunction,this.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(this.tileUrlFunction=e.tileUrlFunction),this.urls=null,e.urls?this.setUrls(e.urls):e.url&&this.setUrl(e.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(e){const t=e.target,n=Ct(t),r=t.getState();let s;r==Me.LOADING?(this.tileLoadingKeys_[n]=!0,s=ao.TILELOADSTART):n in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[n],s=r==Me.ERROR?ao.TILELOADERROR:r==Me.LOADED?ao.TILELOADEND:void 0),s!=null&&this.dispatchEvent(new Sm(s,t))}setTileLoadFunction(e){this.tileCache.clear(),this.tileLoadFunction=e,this.changed()}setTileUrlFunction(e,t){this.tileUrlFunction=e,this.tileCache.pruneExceptNewestZ(),typeof t<"u"?this.setKey(t):this.changed()}setUrl(e){const t=wm(e);this.urls=t,this.setUrls(t)}setUrls(e){this.urls=e;const t=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(Am(e,this.tileGrid),t):this.setKey(t)}tileUrlFunction(e,t,n){}useTile(e,t,n){const r=Ws(e,t,n);this.tileCache.containsKey(r)&&this.tileCache.get(r)}}const Cm=za;class Lm extends Cm{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:Pm,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate!==void 0?e.interpolate:!0,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,this.tileClass=e.tileClass!==void 0?e.tileClass:Oh,this.tileCacheForProjection={},this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}canExpireCache(){if(this.tileCache.canExpireCache())return!0;for(const e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1}expireCache(e,t){const n=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==n?t:{});for(const r in this.tileCacheForProjection){const s=this.tileCacheForProjection[r];s.expireCache(s==n?t:{})}}getGutterForProjection(e){return this.getProjection()&&e&&!Fi(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=":disable-interpolation"),e}getOpaque(e){return this.getProjection()&&e&&!Fi(this.getProjection(),e)?!1:super.getOpaque(e)}getTileGridForProjection(e){const t=this.getProjection();if(this.tileGrid&&(!t||Fi(t,e)))return this.tileGrid;const n=Ct(e);return n in this.tileGridForProjection||(this.tileGridForProjection[n]=Kh(e)),this.tileGridForProjection[n]}getTileCacheForProjection(e){const t=this.getProjection();if(!t||Fi(t,e))return this.tileCache;const n=Ct(e);return n in this.tileCacheForProjection||(this.tileCacheForProjection[n]=new Wh(this.tileCache.highWaterMark)),this.tileCacheForProjection[n]}createTile_(e,t,n,r,s,a){const o=[e,t,n],l=this.getTileCoordForTileUrlFunction(o,s),c=l?this.tileUrlFunction(l,r,s):void 0,h=new this.tileClass(o,c!==void 0?Me.IDLE:Me.EMPTY,c!==void 0?c:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return h.key=a,h.addEventListener(He.CHANGE,this.handleTileChange.bind(this)),h}getTile(e,t,n,r,s){const a=this.getProjection();if(!a||!s||Fi(a,s))return this.getTileInternal(e,t,n,r,a||s);const o=this.getTileCacheForProjection(s),l=[e,t,n];let c;const h=kh(l);o.containsKey(h)&&(c=o.get(h));const u=this.getKey();if(c&&c.key==u)return c;const d=this.getTileGridForProjection(a),m=this.getTileGridForProjection(s),g=this.getTileCoordForTileUrlFunction(l,s),_=new Qo(a,d,s,m,l,g,this.getTilePixelRatio(r),this.getGutter(),(p,f,y,v)=>this.getTileInternal(p,f,y,v,a),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.getInterpolate());return _.key=u,c?(_.interimTile=c,_.refreshInterimChain(),o.replace(h,_)):o.set(h,_),_}getTileInternal(e,t,n,r,s){let a=null;const o=Ws(e,t,n),l=this.getKey();if(!this.tileCache.containsKey(o))a=this.createTile_(e,t,n,r,s,l),this.tileCache.set(o,a);else if(a=this.tileCache.get(o),a.key!=l){const c=a;a=this.createTile_(e,t,n,r,s,l),c.getState()==Me.IDLE?a.interimTile=c.interimTile:a.interimTile=c,a.refreshInterimChain(),this.tileCache.replace(o,a)}return a}setRenderReprojectionEdges(e){if(this.renderReprojectionEdges_!=e){this.renderReprojectionEdges_=e;for(const t in this.tileCacheForProjection)this.tileCacheForProjection[t].clear();this.changed()}}setTileGridForProjection(e,t){const n=Xt(e);if(n){const r=Ct(n);r in this.tileGridForProjection||(this.tileGridForProjection[r]=t)}}clear(){super.clear();for(const e in this.tileCacheForProjection)this.tileCacheForProjection[e].clear()}}function Pm(i,e){i.getImage().src=e}const Im=Lm;class Dm extends Im{constructor(e){e=e||{};const t=e.projection!==void 0?e.projection:"EPSG:3857",n=e.tileGrid!==void 0?e.tileGrid:Em({extent:Fa(t),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:e.opaque,projection:t,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:n,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0}getGutter(){return this.gutter_}}const Um=Dm,Nm='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';class Om extends Um{constructor(e){e=e||{};let t;e.attributions!==void 0?t=e.attributions:t=[Nm];const n=e.crossOrigin!==void 0?e.crossOrigin:"anonymous",r=e.url!==void 0?e.url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png";super({attributions:t,attributionsCollapsible:!1,cacheSize:e.cacheSize,crossOrigin:n,interpolate:e.interpolate,maxZoom:e.maxZoom!==void 0?e.maxZoom:19,opaque:e.opaque!==void 0?e.opaque:!0,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,transition:e.transition,url:r,wrapX:e.wrapX,zDirection:e.zDirection})}}const Fm=Om;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ga="156",vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zm=0,Pl=1,Gm=2,Zh=1,Bm=2,xn=3,Vn=0,Lt=1,En=2,zn=0,Ji=1,Il=2,Dl=3,Ul=4,Hm=5,Bi=100,Vm=101,km=102,Nl=103,Ol=104,Wm=200,Xm=201,Ym=202,jm=203,$h=204,Jh=205,Km=206,qm=207,Zm=208,$m=209,Jm=210,Qm=0,eg=1,tg=2,ea=3,ng=4,ig=5,rg=6,sg=7,Qh=0,og=1,ag=2,Gn=0,lg=1,cg=2,hg=3,ug=4,dg=5,eu=300,ir=301,rr=302,ta=303,na=304,Xs=306,ia=1e3,Qt=1001,ra=1002,wt=1003,Fl=1004,lo=1005,kt=1006,fg=1007,Lr=1008,Bn=1009,pg=1010,mg=1011,Ba=1012,tu=1013,Nn=1014,On=1015,Pr=1016,nu=1017,iu=1018,ni=1020,gg=1021,en=1023,_g=1024,vg=1025,ii=1026,sr=1027,xg=1028,ru=1029,Eg=1030,su=1031,ou=1033,co=33776,ho=33777,uo=33778,fo=33779,zl=35840,Gl=35841,Bl=35842,Hl=35843,Mg=36196,Vl=37492,kl=37496,Wl=37808,Xl=37809,Yl=37810,jl=37811,Kl=37812,ql=37813,Zl=37814,$l=37815,Jl=37816,Ql=37817,ec=37818,tc=37819,nc=37820,ic=37821,po=36492,rc=36494,sc=36495,yg=36283,oc=36284,ac=36285,lc=36286,au=3e3,ri=3001,Sg=3200,Tg=3201,lu=0,bg=1,si="",$e="srgb",cn="srgb-linear",Ys="display-p3",mo=7680,Ag=519,Rg=512,wg=513,Cg=514,Lg=515,Pg=516,Ig=517,Dg=518,Ug=519,cc=35044,hc="300 es",sa=1035,yn=2e3,Is=2001;class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uc=1234567;const xr=Math.PI/180,Ir=180/Math.PI;function cr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function Ha(i,e){return(i%e+e)%e}function Ng(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Og(i,e,t){return i!==e?(t-i)/(e-i):0}function Er(i,e,t){return(1-t)*i+t*e}function Fg(i,e,t,n){return Er(i,e,1-Math.exp(-t*n))}function zg(i,e=1){return e-Math.abs(Ha(i,e*2)-e)}function Gg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vg(i,e){return i+Math.random()*(e-i)}function kg(i){return i*(.5-Math.random())}function Wg(i){i!==void 0&&(uc=i);let e=uc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xg(i){return i*xr}function Yg(i){return i*Ir}function oa(i){return(i&i-1)===0&&i!==0}function jg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ds(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kg(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qg={DEG2RAD:xr,RAD2DEG:Ir,generateUUID:cr,clamp:St,euclideanModulo:Ha,mapLinear:Ng,inverseLerp:Og,lerp:Er,damp:Fg,pingpong:zg,smoothstep:Gg,smootherstep:Bg,randInt:Hg,randFloat:Vg,randFloatSpread:kg,seededRandom:Wg,degToRad:Xg,radToDeg:Yg,isPowerOfTwo:oa,ceilPowerOfTwo:jg,floorPowerOfTwo:Ds,setQuaternionFromProperEuler:Kg,normalize:At,denormalize:Hi};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,r,s,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=r[0],p=r[3],f=r[6],y=r[1],v=r[4],x=r[7],T=r[2],w=r[5],R=r[8];return s[0]=a*_+o*y+l*T,s[3]=a*p+o*v+l*w,s[6]=a*f+o*x+l*R,s[1]=c*_+h*y+u*T,s[4]=c*p+h*v+u*w,s[7]=c*f+h*x+u*R,s[2]=d*_+m*y+g*T,s[5]=d*p+m*v+g*w,s[8]=d*f+m*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,m=c*s-a*l,g=t*u+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const go=new Ne;function cu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zg(){const i=Us("canvas");return i.style.display="block",i}const dc={};function Mr(i){i in dc||(dc[i]=!0,console.warn(i))}function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _o(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const $g=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Jg=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Qg(i){return i.convertSRGBToLinear().applyMatrix3(Jg)}function e_(i){return i.applyMatrix3($g).convertLinearToSRGB()}const t_={[cn]:i=>i,[$e]:i=>i.convertSRGBToLinear(),[Ys]:Qg},n_={[cn]:i=>i,[$e]:i=>i.convertLinearToSRGB(),[Ys]:e_},jt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return cn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=t_[e],r=n_[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Ei;class hu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=Us("canvas")),Ei.width=e.width,Ei.height=e.height;const n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i_=0;class uu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(vo(r[a].image)):s.push(vo(r[a]))}else s=vo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let r_=0;class Pt extends di{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Qt,r=Qt,s=kt,a=Lr,o=en,l=Bn,c=Pt.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=cr(),this.name="",this.source=new uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ri?$e:si),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$e?ri:au}set encoding(e){Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ri?$e:si}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=eu;Pt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(m+1)/2,T=(f+1)/2,w=(h+d)/4,R=(u+_)/4,U=(g+p)/4;return v>x&&v>T?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=R/n):x>T?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=w/r,s=U/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=R/s,r=U/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s_ extends di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ri?$e:si),this.texture=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends s_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class du extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class o_ extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let p=1-o;const f=l*d+c*m+h*g+u*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const T=Math.sqrt(v),w=Math.atan2(T,f*y);p=Math.sin(p*w)/T,o=Math.sin(o*w)/T}const x=o*y;if(l=l*p+d*x,c=c*p+m*x,h=h*p+g*x,u=u*p+_*x,p===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-o*m,e[t+2]=c*g+h*m+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,h=l*n+o*t-s*r,u=l*r+s*n-a*t,d=-s*t-a*n-o*r;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xo=new P,fc=new ai;class Gr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Mi.copy(e.boundingBox),Mi.applyMatrix4(e.matrixWorld),this.union(Mi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)fn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(fn)}else r.boundingBox===null&&r.computeBoundingBox(),Mi.copy(r.boundingBox),Mi.applyMatrix4(e.matrixWorld),this.union(Mi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),$r.subVectors(this.max,fr),yi.subVectors(e.a,fr),Si.subVectors(e.b,fr),Ti.subVectors(e.c,fr),bn.subVectors(Si,yi),An.subVectors(Ti,Si),Kn.subVectors(yi,Ti);let t=[0,-bn.z,bn.y,0,-An.z,An.y,0,-Kn.z,Kn.y,bn.z,0,-bn.x,An.z,0,-An.x,Kn.z,0,-Kn.x,-bn.y,bn.x,0,-An.y,An.x,0,-Kn.y,Kn.x,0];return!Eo(t,yi,Si,Ti,$r)||(t=[1,0,0,0,1,0,0,0,1],!Eo(t,yi,Si,Ti,$r))?!1:(Jr.crossVectors(bn,An),t=[Jr.x,Jr.y,Jr.z],Eo(t,yi,Si,Ti,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new P,new P,new P,new P,new P,new P,new P,new P],fn=new P,Mi=new Gr,yi=new P,Si=new P,Ti=new P,bn=new P,An=new P,Kn=new P,fr=new P,$r=new P,Jr=new P,qn=new P;function Eo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){qn.fromArray(i,s);const o=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const a_=new Gr,pr=new P,Mo=new P;class js{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):a_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(pr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Mo)),this.expandByPoint(pr.copy(e.center).sub(Mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new P,yo=new P,Qr=new P,Rn=new P,So=new P,es=new P,To=new P;class Va{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yo.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(yo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=Rn.dot(this.direction),l=-Rn.dot(Qr),c=Rn.lengthSq(),h=Math.abs(1-a*a);let u,d,m,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(yo).addScaledVector(Qr,d),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),r=pn.dot(pn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,r,s){So.subVectors(t,e),es.subVectors(n,e),To.crossVectors(So,es);let a=this.direction.dot(To),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);const l=o*this.direction.dot(es.crossVectors(Rn,es));if(l<0)return null;const c=o*this.direction.dot(So.cross(Rn));if(c<0||l+c>a)return null;const h=-o*Rn.dot(To);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,r,s,a,o,l,c,h,u,d,m,g,_,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,d,m,g,_,p)}set(e,t,n,r,s,a,o,l,c,h,u,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l_,e,c_)}lookAt(e,t,n){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),wn.crossVectors(n,Nt),wn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),wn.crossVectors(n,Nt)),wn.normalize(),ts.crossVectors(Nt,wn),r[0]=wn.x,r[4]=ts.x,r[8]=Nt.x,r[1]=wn.y,r[5]=ts.y,r[9]=Nt.y,r[2]=wn.z,r[6]=ts.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],y=n[3],v=n[7],x=n[11],T=n[15],w=r[0],R=r[4],U=r[8],M=r[12],A=r[1],q=r[5],K=r[9],I=r[13],V=r[2],H=r[6],$=r[10],G=r[14],j=r[3],Q=r[7],Z=r[11],B=r[15];return s[0]=a*w+o*A+l*V+c*j,s[4]=a*R+o*q+l*H+c*Q,s[8]=a*U+o*K+l*$+c*Z,s[12]=a*M+o*I+l*G+c*B,s[1]=h*w+u*A+d*V+m*j,s[5]=h*R+u*q+d*H+m*Q,s[9]=h*U+u*K+d*$+m*Z,s[13]=h*M+u*I+d*G+m*B,s[2]=g*w+_*A+p*V+f*j,s[6]=g*R+_*q+p*H+f*Q,s[10]=g*U+_*K+p*$+f*Z,s[14]=g*M+_*I+p*G+f*B,s[3]=y*w+v*A+x*V+T*j,s[7]=y*R+v*q+x*H+T*Q,s[11]=y*U+v*K+x*$+T*Z,s[15]=y*M+v*I+x*G+T*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*m-n*l*m)+_*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*h-s*l*h)+p*(+t*c*u-t*o*m-s*a*u+n*a*m+s*o*h-n*c*h)+f*(-r*o*h-t*l*u+t*o*d+r*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],y=u*p*c-_*d*c+_*l*m-o*p*m-u*l*f+o*d*f,v=g*d*c-h*p*c-g*l*m+a*p*m+h*l*f-a*d*f,x=h*_*c-g*u*c+g*o*m-a*_*m-h*o*f+a*u*f,T=g*u*l-h*_*l-g*o*d+a*_*d+h*o*p-a*u*p,w=t*y+n*v+r*x+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=y*R,e[1]=(_*d*s-u*p*s-_*r*m+n*p*m+u*r*f-n*d*f)*R,e[2]=(o*p*s-_*l*s+_*r*c-n*p*c-o*r*f+n*l*f)*R,e[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*m-n*l*m)*R,e[4]=v*R,e[5]=(h*p*s-g*d*s+g*r*m-t*p*m-h*r*f+t*d*f)*R,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*f-t*l*f)*R,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*m+t*l*m)*R,e[8]=x*R,e[9]=(g*u*s-h*_*s-g*n*m+t*_*m+h*n*f-t*u*f)*R,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*f+t*o*f)*R,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*m-t*o*m)*R,e[12]=T*R,e[13]=(h*_*r-g*u*r+g*n*d-t*_*d-h*n*p+t*u*p)*R,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*p-t*o*p)*R,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,m=s*h,g=s*u,_=a*h,p=a*u,f=o*u,y=l*c,v=l*h,x=l*u,T=n.x,w=n.y,R=n.z;return r[0]=(1-(_+f))*T,r[1]=(m+x)*T,r[2]=(g-v)*T,r[3]=0,r[4]=(m-x)*w,r[5]=(1-(d+f))*w,r[6]=(p+y)*w,r[7]=0,r[8]=(g+v)*R,r[9]=(p-y)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=bi.set(r[0],r[1],r[2]).length();const a=bi.set(r[4],r[5],r[6]).length(),o=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const c=1/s,h=1/a,u=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=u,Kt.elements[9]*=u,Kt.elements[10]*=u,t.setFromRotationMatrix(Kt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=yn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let m,g;if(o===yn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Is)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=yn){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),d=(t+e)*c,m=(n+r)*h;let g,_;if(o===yn)g=(a+s)*u,_=-2*u;else if(o===Is)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new P,Kt=new ct,l_=new P(0,0,0),c_=new P(1,1,1),wn=new P,ts=new P,Nt=new P,pc=new ct,mc=new ai;class Ks{constructor(e=0,t=0,n=0,r=Ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ks.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h_=0;const gc=new P,Ai=new ai,mn=new ct,ns=new P,mr=new P,u_=new P,d_=new ai,_c=new P(1,0,0),vc=new P(0,1,0),xc=new P(0,0,1),f_={type:"added"},p_={type:"removed"};class xt extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new P,t=new Ks,n=new ai,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ne}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return gc.copy(e).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(mr,ns,this.up):mn.lookAt(ns,mr,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(mn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(f_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,u_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,d_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}xt.DEFAULT_UP=new P(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new P,gn=new P,bo=new P,_n=new P,Ri=new P,wi=new P,Ec=new P,Ao=new P,Ro=new P,wo=new P;let is=!1;class Jt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qt.subVectors(r,t),gn.subVectors(n,t),bo.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(gn),l=qt.dot(bo),c=gn.dot(gn),h=gn.dot(bo),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,n,r,s,a,o,l){return is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),is=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,_n),l.setScalar(0),l.addScaledVector(s,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l}static isFrontFacing(e,t,n,r){return qt.subVectors(n,t),gn.subVectors(e,t),qt.cross(gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),qt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),is=!0),Jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ri.subVectors(r,n),wi.subVectors(s,n),Ao.subVectors(e,n);const l=Ri.dot(Ao),c=wi.dot(Ao);if(l<=0&&c<=0)return t.copy(n);Ro.subVectors(e,r);const h=Ri.dot(Ro),u=wi.dot(Ro);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ri,a);wo.subVectors(e,s);const m=Ri.dot(wo),g=wi.dot(wo);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(wi,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Ec.subVectors(s,r),o=(u-h)/(u-h+(m-g)),t.copy(r).addScaledVector(Ec,o);const f=1/(p+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(Ri,a).addScaledVector(wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let m_=0;class hr extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Ji,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Jh,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zt={h:0,s:0,l:0},rs={h:0,s:0,l:0};function Co(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,jt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=jt.workingColorSpace){if(e=Ha(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Co(a,s,e+1/3),this.g=Co(a,s,e),this.b=Co(a,s,e-1/3)}return jt.toWorkingColorSpace(this,r),this}setStyle(e,t=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){const n=pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return jt.fromWorkingColorSpace(Mt.copy(this),e),Math.round(St(Mt.r*255,0,255))*65536+Math.round(St(Mt.g*255,0,255))*256+Math.round(St(Mt.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,s=Mt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=jt.workingColorSpace){return jt.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=$e){jt.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Zt),Zt.h+=e,Zt.s+=t,Zt.l+=n,this.setHSL(Zt.h,Zt.s,Zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zt),e.getHSL(rs);const n=Er(Zt.h,rs.h,t),r=Er(Zt.s,rs.s,t),s=Er(Zt.l,rs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ve;Ve.NAMES=pu;class er extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new P,ss=new Le;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cc,this.updateRange={offset:0,count:-1},this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class mu extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gu extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let g_=0;const Gt=new ct,Lo=new xt,Ci=new P,Ot=new Gr,gr=new Gr,pt=new P;class hn extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?gu:mu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Ot.min,gr.min),Ot.expandByPoint(pt),pt.addVectors(Ot.max,gr.max),Ot.expandByPoint(pt)):(Ot.expandByPoint(gr.min),Ot.expandByPoint(gr.max))}Ot.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pt.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),pt.add(Ci)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new P,h[A]=new P;const u=new P,d=new P,m=new P,g=new Le,_=new Le,p=new Le,f=new P,y=new P;function v(A,q,K){u.fromArray(r,A*3),d.fromArray(r,q*3),m.fromArray(r,K*3),g.fromArray(a,A*2),_.fromArray(a,q*2),p.fromArray(a,K*2),d.sub(u),m.sub(u),_.sub(g),p.sub(g);const I=1/(_.x*p.y-p.x*_.y);isFinite(I)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(I),y.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(I),c[A].add(f),c[q].add(f),c[K].add(f),h[A].add(y),h[q].add(y),h[K].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let A=0,q=x.length;A<q;++A){const K=x[A],I=K.start,V=K.count;for(let H=I,$=I+V;H<$;H+=3)v(n[H+0],n[H+1],n[H+2])}const T=new P,w=new P,R=new P,U=new P;function M(A){R.fromArray(s,A*3),U.copy(R);const q=c[A];T.copy(q),T.sub(R.multiplyScalar(R.dot(q))).normalize(),w.crossVectors(U,q);const I=w.dot(h[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=I}for(let A=0,q=x.length;A<q;++A){const K=x[A],I=K.start,V=K.count;for(let H=I,$=I+V;H<$;H+=3)M(n[H+0]),M(n[H+1]),M(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new P,s=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new on(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new ct,Zn=new Va,os=new js,yc=new P,Li=new P,Pi=new P,Ii=new P,Po=new P,as=new P,ls=new Le,cs=new Le,hs=new Le,Sc=new P,Tc=new P,bc=new P,us=new P,ds=new P;class Ft extends xt{constructor(e=new hn,t=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){as.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Po.fromBufferAttribute(u,e),a?as.addScaledVector(Po,h):as.addScaledVector(Po.sub(t),h))}t.add(as)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(s),Zn.copy(e.ray).recast(e.near),!(os.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(os,yc)===null||Zn.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(Mc.copy(s).invert(),Zn.copy(e.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=y,T=v;x<T;x+=3){const w=o.getX(x),R=o.getX(x+1),U=o.getX(x+2);r=fs(this,f,e,n,c,h,u,w,R,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=o.getX(p),v=o.getX(p+1),x=o.getX(p+2);r=fs(this,a,e,n,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=y,T=v;x<T;x+=3){const w=x,R=x+1,U=x+2;r=fs(this,f,e,n,c,h,u,w,R,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=p,v=p+1,x=p+2;r=fs(this,a,e,n,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function __(i,e,t,n,r,s,a,o){let l;if(e.side===Lt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Vn,o),l===null)return null;ds.copy(o),ds.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ds);return c<t.near||c>t.far?null:{distance:c,point:ds.clone(),object:i}}function fs(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Li),i.getVertexPosition(l,Pi),i.getVertexPosition(c,Ii);const h=__(i,e,t,n,Li,Pi,Ii,us);if(h){r&&(ls.fromBufferAttribute(r,o),cs.fromBufferAttribute(r,l),hs.fromBufferAttribute(r,c),h.uv=Jt.getInterpolation(us,Li,Pi,Ii,ls,cs,hs,new Le)),s&&(ls.fromBufferAttribute(s,o),cs.fromBufferAttribute(s,l),hs.fromBufferAttribute(s,c),h.uv1=Jt.getInterpolation(us,Li,Pi,Ii,ls,cs,hs,new Le),h.uv2=h.uv1),a&&(Sc.fromBufferAttribute(a,o),Tc.fromBufferAttribute(a,l),bc.fromBufferAttribute(a,c),h.normal=Jt.getInterpolation(us,Li,Pi,Ii,Sc,Tc,bc,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};Jt.getNormal(Li,Pi,Ii,u.normal),h.face=u}return h}class li extends hn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(_,p,f,y,v,x,T,w,R,U,M){const A=x/R,q=T/U,K=x/2,I=T/2,V=w/2,H=R+1,$=U+1;let G=0,j=0;const Q=new P;for(let Z=0;Z<$;Z++){const B=Z*q-I;for(let k=0;k<H;k++){const ae=k*A-K;Q[_]=ae*y,Q[p]=B*v,Q[f]=V,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[f]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(k/R),u.push(1-Z/U),G+=1}}for(let Z=0;Z<U;Z++)for(let B=0;B<R;B++){const k=d+B+H*Z,ae=d+B+H*(Z+1),ie=d+(B+1)+H*(Z+1),oe=d+(B+1)+H*Z;l.push(k,ae,oe),l.push(ae,ie,oe),j+=6}o.addGroup(m,j,M),m+=j,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=or(i[t]);for(const r in n)e[r]=n[r]}return e}function v_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _u(i){return i.getRenderTarget()===null?i.outputColorSpace:cn}const x_={clone:or,merge:Rt};var E_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E_,this.fragmentShader=M_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=v_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vu extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends vu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Ui=1;class y_ extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Wt(Di,Ui,e,t);r.layers=this.layers,this.add(r);const s=new Wt(Di,Ui,e,t);s.layers=this.layers,this.add(s);const a=new Wt(Di,Ui,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Di,Ui,e,t);o.layers=this.layers,this.add(o);const l=new Wt(Di,Ui,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Di,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.xr.enabled;e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class xu extends Pt{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S_ extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ri?$e:si),this.texture=new xu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new li(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:zn});s.uniforms.tEquirect.value=t;const a=new Ft(r,s),o=t.minFilter;return t.minFilter===Lr&&(t.minFilter=kt),new y_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Io=new P,T_=new P,b_=new Ne;class In{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Io.subVectors(n,t).cross(T_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Io),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||b_.getNormalMatrix(e),r=this.coplanarPoint(Io).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new js,ps=new P;class ka{constructor(e=new In,t=new In,n=new In,r=new In,s=new In,a=new In){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],p=r[11],f=r[12],y=r[13],v=r[14],x=r[15];if(n[0].setComponents(l-s,d-c,p-m,x-f).normalize(),n[1].setComponents(l+s,d+c,p+m,x+f).normalize(),n[2].setComponents(l+a,d+h,p+g,x+y).normalize(),n[3].setComponents(l-a,d-h,p-g,x-y).normalize(),n[4].setComponents(l-o,d-u,p-_,x-v).normalize(),t===yn)n[5].setComponents(l+o,d+u,p+_,x+v).normalize();else if(t===Is)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ps.x=r.normal.x>0?e.max.x:e.min.x,ps.y=r.normal.y>0?e.max.y:e.min.y,ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function A_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,d=c.usage,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,m=h.updateRange;i.bindBuffer(u,c),m.count===-1?i.bufferSubData(u,0,d):(t?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,r(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class Br extends hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const y=f*d-a;for(let v=0;v<c;v++){const x=v*u-s;g.push(x,-y,0),_.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const v=y+c*f,x=y+c*(f+1),T=y+1+c*(f+1),w=y+1+c*f;m.push(v,x,w),m.push(x,T,w)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}var R_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
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
#endif`,C_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,I_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,U_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z_=`#ifdef USE_IRIDESCENCE
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
#endif`,G_=`#ifdef USE_BUMPMAP
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,K_=`#define PI 3.141592653589793
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
} // validated`,q_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z_=`vec3 transformedNormal = objectNormal;
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
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
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
}`,f0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
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
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S0=`PhysicalMaterial material;
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
#endif`,T0=`struct PhysicalMaterial {
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
}`,b0=`
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,w0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,O0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G0=`#ifdef USE_MORPHNORMALS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
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
#endif`,H0=`#ifdef USE_MORPHTARGETS
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
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,k0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j0=`#ifdef USE_NORMALMAP
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
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cv=`float getShadowMask() {
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
}`,hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uv=`#ifdef USE_SKINNING
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
#endif`,dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fv=`#ifdef USE_SKINNING
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
#endif`,pv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_v=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vv=`#ifdef USE_TRANSMISSION
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
#endif`,xv=`#ifdef USE_TRANSMISSION
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bv=`uniform sampler2D t2D;
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`#include <common>
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
}`,Pv=`#if DEPTH_PACKING == 3200
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
}`,Iv=`#define DISTANCE
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
}`,Dv=`#define DISTANCE
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`uniform float scale;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Bv=`#define LAMBERT
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
}`,Hv=`#define LAMBERT
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
}`,Vv=`#define MATCAP
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
}`,kv=`#define MATCAP
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
}`,Wv=`#define NORMAL
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
}`,Xv=`#define NORMAL
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
}`,Yv=`#define PHONG
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
}`,jv=`#define PHONG
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
}`,Kv=`#define STANDARD
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
}`,qv=`#define STANDARD
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
}`,Zv=`#define TOON
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
}`,$v=`#define TOON
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
}`,Jv=`uniform float size;
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
}`,Qv=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,tx=`uniform vec3 color;
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
}`,nx=`uniform float rotation;
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
}`,ix=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:R_,alphahash_pars_fragment:w_,alphamap_fragment:C_,alphamap_pars_fragment:L_,alphatest_fragment:P_,alphatest_pars_fragment:I_,aomap_fragment:D_,aomap_pars_fragment:U_,begin_vertex:N_,beginnormal_vertex:O_,bsdfs:F_,iridescence_fragment:z_,bumpmap_pars_fragment:G_,clipping_planes_fragment:B_,clipping_planes_pars_fragment:H_,clipping_planes_pars_vertex:V_,clipping_planes_vertex:k_,color_fragment:W_,color_pars_fragment:X_,color_pars_vertex:Y_,color_vertex:j_,common:K_,cube_uv_reflection_fragment:q_,defaultnormal_vertex:Z_,displacementmap_pars_vertex:$_,displacementmap_vertex:J_,emissivemap_fragment:Q_,emissivemap_pars_fragment:e0,colorspace_fragment:t0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:r0,envmap_pars_fragment:s0,envmap_pars_vertex:o0,envmap_physical_pars_fragment:v0,envmap_vertex:a0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:h0,fog_pars_fragment:u0,gradientmap_pars_fragment:d0,lightmap_fragment:f0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:_0,lights_toon_fragment:x0,lights_toon_pars_fragment:E0,lights_phong_fragment:M0,lights_phong_pars_fragment:y0,lights_physical_fragment:S0,lights_physical_pars_fragment:T0,lights_fragment_begin:b0,lights_fragment_maps:A0,lights_fragment_end:R0,logdepthbuf_fragment:w0,logdepthbuf_pars_fragment:C0,logdepthbuf_pars_vertex:L0,logdepthbuf_vertex:P0,map_fragment:I0,map_pars_fragment:D0,map_particle_fragment:U0,map_particle_pars_fragment:N0,metalnessmap_fragment:O0,metalnessmap_pars_fragment:F0,morphcolor_vertex:z0,morphnormal_vertex:G0,morphtarget_pars_vertex:B0,morphtarget_vertex:H0,normal_fragment_begin:V0,normal_fragment_maps:k0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:Y0,normalmap_pars_fragment:j0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:q0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:$0,opaque_fragment:J0,packing:Q0,premultiplied_alpha_fragment:ev,project_vertex:tv,dithering_fragment:nv,dithering_pars_fragment:iv,roughnessmap_fragment:rv,roughnessmap_pars_fragment:sv,shadowmap_pars_fragment:ov,shadowmap_pars_vertex:av,shadowmap_vertex:lv,shadowmask_pars_fragment:cv,skinbase_vertex:hv,skinning_pars_vertex:uv,skinning_vertex:dv,skinnormal_vertex:fv,specularmap_fragment:pv,specularmap_pars_fragment:mv,tonemapping_fragment:gv,tonemapping_pars_fragment:_v,transmission_fragment:vv,transmission_pars_fragment:xv,uv_pars_fragment:Ev,uv_pars_vertex:Mv,uv_vertex:yv,worldpos_vertex:Sv,background_vert:Tv,background_frag:bv,backgroundCube_vert:Av,backgroundCube_frag:Rv,cube_vert:wv,cube_frag:Cv,depth_vert:Lv,depth_frag:Pv,distanceRGBA_vert:Iv,distanceRGBA_frag:Dv,equirect_vert:Uv,equirect_frag:Nv,linedashed_vert:Ov,linedashed_frag:Fv,meshbasic_vert:zv,meshbasic_frag:Gv,meshlambert_vert:Bv,meshlambert_frag:Hv,meshmatcap_vert:Vv,meshmatcap_frag:kv,meshnormal_vert:Wv,meshnormal_frag:Xv,meshphong_vert:Yv,meshphong_frag:jv,meshphysical_vert:Kv,meshphysical_frag:qv,meshtoon_vert:Zv,meshtoon_frag:$v,points_vert:Jv,points_frag:Qv,shadow_vert:ex,shadow_frag:tx,sprite_vert:nx,sprite_frag:ix},he={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},rn={basic:{uniforms:Rt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Rt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Rt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Rt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Rt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Rt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Rt([he.points,he.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Rt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Rt([he.common,he.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Rt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Rt([he.sprite,he.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Rt([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Rt([he.lights,he.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};rn.physical={uniforms:Rt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const ms={r:0,b:0,g:0};function rx(i,e,t,n,r,s,a){const o=new Ve(0);let l=s===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Xs)?(h===void 0&&(h=new Ft(new li(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:or(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=v.colorSpace!==$e,(u!==v||d!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ft(new Br(2,2),new ci({name:"BackgroundMaterial",uniforms:or(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==$e,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(ms,_u(i)),n.buffers.color.setClear(ms.r,ms.g,ms.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function sx(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function u(V,H,$,G,j){let Q=!1;if(a){const Z=_(G,$,H);c!==Z&&(c=Z,m(c.object)),Q=f(V,G,$,j),Q&&y(V,G,$,j)}else{const Z=H.wireframe===!0;(c.geometry!==G.id||c.program!==$.id||c.wireframe!==Z)&&(c.geometry=G.id,c.program=$.id,c.wireframe=Z,Q=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,U(V,H,$,G),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(V){return n.isWebGL2?i.bindVertexArray(V):s.bindVertexArrayOES(V)}function g(V){return n.isWebGL2?i.deleteVertexArray(V):s.deleteVertexArrayOES(V)}function _(V,H,$){const G=$.wireframe===!0;let j=o[V.id];j===void 0&&(j={},o[V.id]=j);let Q=j[H.id];Q===void 0&&(Q={},j[H.id]=Q);let Z=Q[G];return Z===void 0&&(Z=p(d()),Q[G]=Z),Z}function p(V){const H=[],$=[],G=[];for(let j=0;j<r;j++)H[j]=0,$[j]=0,G[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:G,object:V,attributes:{},index:null}}function f(V,H,$,G){const j=c.attributes,Q=H.attributes;let Z=0;const B=$.getAttributes();for(const k in B)if(B[k].location>=0){const ie=j[k];let oe=Q[k];if(oe===void 0&&(k==="instanceMatrix"&&V.instanceMatrix&&(oe=V.instanceMatrix),k==="instanceColor"&&V.instanceColor&&(oe=V.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;Z++}return c.attributesNum!==Z||c.index!==G}function y(V,H,$,G){const j={},Q=H.attributes;let Z=0;const B=$.getAttributes();for(const k in B)if(B[k].location>=0){let ie=Q[k];ie===void 0&&(k==="instanceMatrix"&&V.instanceMatrix&&(ie=V.instanceMatrix),k==="instanceColor"&&V.instanceColor&&(ie=V.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),j[k]=oe,Z++}c.attributes=j,c.attributesNum=Z,c.index=G}function v(){const V=c.newAttributes;for(let H=0,$=V.length;H<$;H++)V[H]=0}function x(V){T(V,0)}function T(V,H){const $=c.newAttributes,G=c.enabledAttributes,j=c.attributeDivisors;$[V]=1,G[V]===0&&(i.enableVertexAttribArray(V),G[V]=1),j[V]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,H),j[V]=H)}function w(){const V=c.newAttributes,H=c.enabledAttributes;for(let $=0,G=H.length;$<G;$++)H[$]!==V[$]&&(i.disableVertexAttribArray($),H[$]=0)}function R(V,H,$,G,j,Q,Z){Z===!0?i.vertexAttribIPointer(V,H,$,j,Q):i.vertexAttribPointer(V,H,$,G,j,Q)}function U(V,H,$,G){if(n.isWebGL2===!1&&(V.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=G.attributes,Q=$.getAttributes(),Z=H.defaultAttributeValues;for(const B in Q){const k=Q[B];if(k.location>=0){let ae=j[B];if(ae===void 0&&(B==="instanceMatrix"&&V.instanceMatrix&&(ae=V.instanceMatrix),B==="instanceColor"&&V.instanceColor&&(ae=V.instanceColor)),ae!==void 0){const ie=ae.normalized,oe=ae.itemSize,_e=t.get(ae);if(_e===void 0)continue;const ve=_e.buffer,pe=_e.type,Ie=_e.bytesPerElement,tt=n.isWebGL2===!0&&(pe===i.INT||pe===i.UNSIGNED_INT||ae.gpuType===tu);if(ae.isInterleavedBufferAttribute){const Ce=ae.data,D=Ce.stride,nt=ae.offset;if(Ce.isInstancedInterleavedBuffer){for(let xe=0;xe<k.locationSize;xe++)T(k.location+xe,Ce.meshPerAttribute);V.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let xe=0;xe<k.locationSize;xe++)x(k.location+xe);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let xe=0;xe<k.locationSize;xe++)R(k.location+xe,oe/k.locationSize,pe,ie,D*Ie,(nt+oe/k.locationSize*xe)*Ie,tt)}else{if(ae.isInstancedBufferAttribute){for(let Ce=0;Ce<k.locationSize;Ce++)T(k.location+Ce,ae.meshPerAttribute);V.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ce=0;Ce<k.locationSize;Ce++)x(k.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let Ce=0;Ce<k.locationSize;Ce++)R(k.location+Ce,oe/k.locationSize,pe,ie,oe*Ie,oe/k.locationSize*Ce*Ie,tt)}}else if(Z!==void 0){const ie=Z[B];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(k.location,ie);break;case 3:i.vertexAttrib3fv(k.location,ie);break;case 4:i.vertexAttrib4fv(k.location,ie);break;default:i.vertexAttrib1fv(k.location,ie)}}}}w()}function M(){K();for(const V in o){const H=o[V];for(const $ in H){const G=H[$];for(const j in G)g(G[j].object),delete G[j];delete H[$]}delete o[V]}}function A(V){if(o[V.id]===void 0)return;const H=o[V.id];for(const $ in H){const G=H[$];for(const j in G)g(G[j].object),delete G[j];delete H[$]}delete o[V.id]}function q(V){for(const H in o){const $=o[H];if($[V.id]===void 0)continue;const G=$[V.id];for(const j in G)g(G[j].object),delete G[j];delete $[V.id]}}function K(){I(),h=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:K,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:x,disableUnusedAttributes:w}}function ox(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,h){i.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,h,u),t.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function ax(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,x=a||e.has("OES_texture_float"),T=v&&x,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:w}}function lx(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new In,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,v=y*4;let x=f.clippingState||null;l.value=x,x=h(g,d,v,m);for(let T=0;T!==v;++T)x[T]=t[T];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,x=m;v!==_;++v,x+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function cx(i){let e=new WeakMap;function t(a,o){return o===ta?a.mapping=ir:o===na&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ta||o===na)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new S_(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Mu extends vu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,Ac=[.125,.215,.35,.446,.526,.582],Qn=20,Do=new Mu,Rc=new Ve;let Uo=null;const Jn=(1+Math.sqrt(5))/2,Ni=1/Jn,wc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Jn,Ni),new P(0,Jn,-Ni),new P(Ni,0,Jn),new P(-Ni,0,Jn),new P(Jn,Ni,0),new P(-Jn,Ni,0)];class Cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Uo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo),e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Pr,format:en,colorSpace:cn,depthBuffer:!1},r=Lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hx(s)),this._blurMaterial=ux(s,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,n,r){const o=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Rc),h.toneMapping=Gn,h.autoClear=!1;const m=new er({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new Ft(new li,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Rc),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;gs(r,y*v,f>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ir||e.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;gs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Do)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wc[(r-1)%wc.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ft(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Qn-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Qn;p>Qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qn}`);const f=[];let y=0;for(let R=0;R<Qn;++R){const U=R/_,M=Math.exp(-U*U/2);f.push(M),R===0?y+=M:R<p&&(y+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[r],T=3*x*(r>v-Xi?r-v+Xi:0),w=4*(this._cubeSize-x);gs(t,T,w,3*x,2*x),l.setRenderTarget(t),l.render(u,Do)}}function hx(i){const e=[],t=[],n=[];let r=i;const s=i-Xi+1+Ac.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Xi?l=Ac[a-i+Xi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),x=new Float32Array(f*g*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,U=w>2?0:-1,M=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];y.set(M,_*g*w),v.set(d,p*g*w);const A=[w,w,w,w,w,w];x.set(A,f*g*w)}const T=new hn;T.setAttribute("position",new on(y,_)),T.setAttribute("uv",new on(v,p)),T.setAttribute("faceIndex",new on(x,f)),e.push(T),r>Xi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lc(i,e,t){const n=new oi(i,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ux(i,e,t){const n=new Float32Array(Qn),r=new P(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Pc(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ic(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Wa(){return`

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
	`}function dx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ta||l===na,h=l===ir||l===rr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Cc(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new Cc(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function px(i,e,t,n){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,x=y.length;v<x;v+=3){const T=y[v+0],w=y[v+1],R=y[v+2];d.push(T,w,w,R,R,T)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const T=v+0,w=v+1,R=v+2;d.push(T,w,w,R,R,T)}}else return;const p=new(cu(d)?gu:mu)(d,1);p.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function mx(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,m){i.drawElements(s,m,o,d*l),t.update(m,s,1)}function u(d,m,g){if(g===0)return;let _,p;if(r)_=i,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,d*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function gx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function _x(i,e){return i[0]-e[0]}function vx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function xx(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let H=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",H)};var m=H;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),T===!0&&(M=3);let A=h.attributes.position.count*M,q=1;A>e.maxTextureSize&&(q=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const K=new Float32Array(A*q*4*_),I=new du(K,A,q,_);I.type=On,I.needsUpdate=!0;const V=M*4;for(let $=0;$<_;$++){const G=w[$],j=R[$],Q=U[$],Z=A*q*4*$;for(let B=0;B<G.count;B++){const k=B*V;v===!0&&(a.fromBufferAttribute(G,B),K[Z+k+0]=a.x,K[Z+k+1]=a.y,K[Z+k+2]=a.z,K[Z+k+3]=0),x===!0&&(a.fromBufferAttribute(j,B),K[Z+k+4]=a.x,K[Z+k+5]=a.y,K[Z+k+6]=a.z,K[Z+k+7]=0),T===!0&&(a.fromBufferAttribute(Q,B),K[Z+k+8]=a.x,K[Z+k+9]=a.y,K[Z+k+10]=a.z,K[Z+k+11]=Q.itemSize===4?a.w:1)}}p={count:_,texture:I,size:new Le(A,q)},s.set(h,p),h.addEventListener("dispose",H)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<g;x++){const T=_[x];T[0]=x,T[1]=d[x]}_.sort(vx);for(let x=0;x<8;x++)x<g&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(_x);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const T=o[x],w=T[0],R=T[1];w!==Number.MAX_SAFE_INTEGER&&R?(p&&h.getAttribute("morphTarget"+x)!==p[w]&&h.setAttribute("morphTarget"+x,p[w]),f&&h.getAttribute("morphNormal"+x)!==f[w]&&h.setAttribute("morphNormal"+x,f[w]),r[x]=R,y+=R):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),f&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Ex(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const yu=new Pt,Su=new du,Tu=new o_,bu=new xu,Dc=[],Uc=[],Nc=new Float32Array(16),Oc=new Float32Array(9),Fc=new Float32Array(4);function ur(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Dc[r];if(s===void 0&&(s=new Float32Array(r),Dc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qs(i,e){let t=Uc[e];t===void 0&&(t=new Int32Array(e),Uc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function Sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function Tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function bx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Fc.set(n),i.uniformMatrix2fv(this.addr,!1,Fc),ft(t,n)}}function Ax(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Oc.set(n),i.uniformMatrix3fv(this.addr,!1,Oc),ft(t,n)}}function Rx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Nc.set(n),i.uniformMatrix4fv(this.addr,!1,Nc),ft(t,n)}}function wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function Lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function Px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function Ix(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function Ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function Nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function Ox(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||yu,r)}function Fx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Tu,r)}function zx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||bu,r)}function Gx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Su,r)}function Bx(i){switch(i){case 5126:return Mx;case 35664:return yx;case 35665:return Sx;case 35666:return Tx;case 35674:return bx;case 35675:return Ax;case 35676:return Rx;case 5124:case 35670:return wx;case 35667:case 35671:return Cx;case 35668:case 35672:return Lx;case 35669:case 35673:return Px;case 5125:return Ix;case 36294:return Dx;case 36295:return Ux;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Hx(i,e){i.uniform1fv(this.addr,e)}function Vx(i,e){const t=ur(e,this.size,2);i.uniform2fv(this.addr,t)}function kx(i,e){const t=ur(e,this.size,3);i.uniform3fv(this.addr,t)}function Wx(i,e){const t=ur(e,this.size,4);i.uniform4fv(this.addr,t)}function Xx(i,e){const t=ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yx(i,e){const t=ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jx(i,e){const t=ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Kx(i,e){i.uniform1iv(this.addr,e)}function qx(i,e){i.uniform2iv(this.addr,e)}function Zx(i,e){i.uniform3iv(this.addr,e)}function $x(i,e){i.uniform4iv(this.addr,e)}function Jx(i,e){i.uniform1uiv(this.addr,e)}function Qx(i,e){i.uniform2uiv(this.addr,e)}function eE(i,e){i.uniform3uiv(this.addr,e)}function tE(i,e){i.uniform4uiv(this.addr,e)}function nE(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||yu,s[a])}function iE(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Tu,s[a])}function rE(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||bu,s[a])}function sE(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Su,s[a])}function oE(i){switch(i){case 5126:return Hx;case 35664:return Vx;case 35665:return kx;case 35666:return Wx;case 35674:return Xx;case 35675:return Yx;case 35676:return jx;case 5124:case 35670:return Kx;case 35667:case 35671:return qx;case 35668:case 35672:return Zx;case 35669:case 35673:return $x;case 5125:return Jx;case 36294:return Qx;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return sE}}class aE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Bx(t.type)}}class lE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=oE(t.type)}}class cE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const No=/(\w+)(\])?(\[|\.)?/g;function zc(i,e){i.seq.push(e),i.map[e.id]=e}function hE(i,e,t){const n=i.name,r=n.length;for(No.lastIndex=0;;){const s=No.exec(n),a=No.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){zc(t,c===void 0?new aE(o,i,e):new lE(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new cE(o),zc(t,u)),t=u}}}class Ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);hE(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Gc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let uE=0;function dE(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function fE(i){switch(i){case cn:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Bc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+dE(i.getShaderSource(e),a)}else return r}function pE(i,e){const t=fE(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function mE(i,e){let t;switch(e){case lg:t="Linear";break;case cg:t="Reinhard";break;case hg:t="OptimizedCineon";break;case ug:t="ACESFilmic";break;case dg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gE(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function _E(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function _r(i){return i!==""}function Hc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xE=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(i){return i.replace(xE,ME)}const EE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ME(i,e){let t=Ue[e];if(t===void 0){const n=EE.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return aa(t)}const yE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(i){return i.replace(yE,SE)}function SE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function bE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ir:case rr:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function RE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case og:e="ENVMAP_BLENDING_MIX";break;case ag:e="ENVMAP_BLENDING_ADD";break}return e}function wE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function CE(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=TE(t),c=bE(t),h=AE(t),u=RE(t),d=wE(t),m=t.isWebGL2?"":gE(t),g=_E(s),_=r.createProgram();let p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),f.length>0&&(f+=`
`)):(p=[Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),f=[m,Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Gn?mE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,pE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=aa(a),a=Hc(a,t),a=Vc(a,t),o=aa(o),o=Hc(o,t),o=Vc(o,t),a=kc(a),o=kc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+p+a,x=y+f+o,T=Gc(r,r.VERTEX_SHADER,v),w=Gc(r,r.FRAGMENT_SHADER,x);if(r.attachShader(_,T),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),A=r.getShaderInfoLog(T).trim(),q=r.getShaderInfoLog(w).trim();let K=!0,I=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,w);else{const V=Bc(r,T,"vertex"),H=Bc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+V+`
`+H)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(A===""||q==="")&&(I=!1);I&&(this.diagnostics={runnable:K,programLog:M,vertexShader:{log:A,prefix:p},fragmentShader:{log:q,prefix:f}})}r.deleteShader(T),r.deleteShader(w);let R;this.getUniforms=function(){return R===void 0&&(R=new Ts(r,_)),R};let U;return this.getAttributes=function(){return U===void 0&&(U=vE(r,_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let LE=0;class PE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new IE(e),t.set(e,n)),n}}class IE{constructor(e){this.id=LE++,this.code=e,this.usedTimes=0}}function DE(i,e,t,n,r,s,a){const o=new fu,l=new PE,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,A,q,K,I){const V=K.fog,H=I.geometry,$=M.isMeshStandardMaterial?K.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),j=G&&G.mapping===Xs?G.image.height:null,Q=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,B=Z!==void 0?Z.length:0;let k=0;H.morphAttributes.position!==void 0&&(k=1),H.morphAttributes.normal!==void 0&&(k=2),H.morphAttributes.color!==void 0&&(k=3);let ae,ie,oe,_e;if(Q){const Ze=rn[Q];ae=Ze.vertexShader,ie=Ze.fragmentShader}else ae=M.vertexShader,ie=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const ve=i.getRenderTarget(),pe=I.isInstancedMesh===!0,Ie=!!M.map,tt=!!M.matcap,Ce=!!G,D=!!M.aoMap,nt=!!M.lightMap,xe=!!M.bumpMap,Te=!!M.normalMap,Ee=!!M.displacementMap,Ye=!!M.emissiveMap,Pe=!!M.metalnessMap,Re=!!M.roughnessMap,ze=M.anisotropy>0,it=M.clearcoat>0,je=M.iridescence>0,b=M.sheen>0,E=M.transmission>0,F=ze&&!!M.anisotropyMap,re=it&&!!M.clearcoatMap,ee=it&&!!M.clearcoatNormalMap,ne=it&&!!M.clearcoatRoughnessMap,ge=je&&!!M.iridescenceMap,se=je&&!!M.iridescenceThicknessMap,O=b&&!!M.sheenColorMap,C=b&&!!M.sheenRoughnessMap,J=!!M.specularMap,fe=!!M.specularColorMap,ce=!!M.specularIntensityMap,de=E&&!!M.transmissionMap,we=E&&!!M.thicknessMap,Be=!!M.gradientMap,L=!!M.alphaMap,ue=M.alphaTest>0,W=!!M.alphaHash,te=!!M.extensions,le=!!H.attributes.uv1,Oe=!!H.attributes.uv2,ke=!!H.attributes.uv3;let Ke=Gn;return M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ke=i.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:ae,fragmentShader:ie,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:pe,instancingColor:pe&&I.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:cn,map:Ie,matcap:tt,envMap:Ce,envMapMode:Ce&&G.mapping,envMapCubeUVHeight:j,aoMap:D,lightMap:nt,bumpMap:xe,normalMap:Te,displacementMap:d&&Ee,emissiveMap:Ye,normalMapObjectSpace:Te&&M.normalMapType===bg,normalMapTangentSpace:Te&&M.normalMapType===lu,metalnessMap:Pe,roughnessMap:Re,anisotropy:ze,anisotropyMap:F,clearcoat:it,clearcoatMap:re,clearcoatNormalMap:ee,clearcoatRoughnessMap:ne,iridescence:je,iridescenceMap:ge,iridescenceThicknessMap:se,sheen:b,sheenColorMap:O,sheenRoughnessMap:C,specularMap:J,specularColorMap:fe,specularIntensityMap:ce,transmission:E,transmissionMap:de,thicknessMap:we,gradientMap:Be,opaque:M.transparent===!1&&M.blending===Ji,alphaMap:L,alphaTest:ue,alphaHash:W,combine:M.combine,mapUv:Ie&&_(M.map.channel),aoMapUv:D&&_(M.aoMap.channel),lightMapUv:nt&&_(M.lightMap.channel),bumpMapUv:xe&&_(M.bumpMap.channel),normalMapUv:Te&&_(M.normalMap.channel),displacementMapUv:Ee&&_(M.displacementMap.channel),emissiveMapUv:Ye&&_(M.emissiveMap.channel),metalnessMapUv:Pe&&_(M.metalnessMap.channel),roughnessMapUv:Re&&_(M.roughnessMap.channel),anisotropyMapUv:F&&_(M.anisotropyMap.channel),clearcoatMapUv:re&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:O&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:C&&_(M.sheenRoughnessMap.channel),specularMapUv:J&&_(M.specularMap.channel),specularColorMapUv:fe&&_(M.specularColorMap.channel),specularIntensityMapUv:ce&&_(M.specularIntensityMap.channel),transmissionMapUv:de&&_(M.transmissionMap.channel),thicknessMapUv:we&&_(M.thicknessMap.channel),alphaMapUv:L&&_(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Te||ze),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:Oe,vertexUv3s:ke,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(Ie||L),fog:!!V,useFog:M.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:k,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ie&&M.map.isVideoTexture===!0&&M.map.colorSpace===$e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===En,flipSided:M.side===Lt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:te&&M.extensions.derivatives===!0,extensionFragDepth:te&&M.extensions.fragDepth===!0,extensionDrawBuffers:te&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:te&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const q in M.defines)A.push(q),A.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(y(A,M),v(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function y(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function x(M){const A=g[M.type];let q;if(A){const K=rn[A];q=x_.clone(K.uniforms)}else q=M.uniforms;return q}function T(M,A){let q;for(let K=0,I=c.length;K<I;K++){const V=c[K];if(V.cacheKey===A){q=V,++q.usedTimes;break}}return q===void 0&&(q=new CE(i,A,M,s),c.push(q)),q}function w(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:U}}function UE(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function NE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,d,m,g,_,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),e++,f}function o(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||NE),n.length>1&&n.sort(d||Xc),r.length>1&&r.sort(d||Xc)}function h(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function OE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Yc,i.set(n,[a])):r>=s.length?(a=new Yc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function FE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ve};break;case"SpotLight":t={position:new P,direction:new P,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function zE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let GE=0;function BE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function HE(i,e){const t=new FE,n=zE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new P);const s=new P,a=new ct,o=new ct;function l(h,u){let d=0,m=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,p=0,f=0,y=0,v=0,x=0,T=0,w=0,R=0,U=0;h.sort(BE);const M=u===!0?Math.PI:1;for(let q=0,K=h.length;q<K;q++){const I=h[q],V=I.color,H=I.intensity,$=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=V.r*H*M,m+=V.g*H*M,g+=V.b*H*M;else if(I.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(I.sh.coefficients[j],H);else if(I.isDirectionalLight){const j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const Q=I.shadow,Z=n.get(I);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,r.directionalShadow[_]=Z,r.directionalShadowMap[_]=G,r.directionalShadowMatrix[_]=I.shadow.matrix,x++}r.directional[_]=j,_++}else if(I.isSpotLight){const j=t.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(V).multiplyScalar(H*M),j.distance=$,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,r.spot[f]=j;const Q=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,Q.updateMatrices(I),I.castShadow&&U++),r.spotLightMatrix[f]=Q.matrix,I.castShadow){const Z=n.get(I);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,r.spotShadow[f]=Z,r.spotShadowMap[f]=G,w++}f++}else if(I.isRectAreaLight){const j=t.get(I);j.color.copy(V).multiplyScalar(H),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=j,y++}else if(I.isPointLight){const j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*M),j.distance=I.distance,j.decay=I.decay,I.castShadow){const Q=I.shadow,Z=n.get(I);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,r.pointShadow[p]=Z,r.pointShadowMap[p]=G,r.pointShadowMatrix[p]=I.shadow.matrix,T++}r.point[p]=j,p++}else if(I.isHemisphereLight){const j=t.get(I);j.skyColor.copy(I.color).multiplyScalar(H*M),j.groundColor.copy(I.groundColor).multiplyScalar(H*M),r.hemi[v]=j,v++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==_||A.pointLength!==p||A.spotLength!==f||A.rectAreaLength!==y||A.hemiLength!==v||A.numDirectionalShadows!==x||A.numPointShadows!==T||A.numSpotShadows!==w||A.numSpotMaps!==R)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=y,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+R-U,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=U,A.directionalLength=_,A.pointLength=p,A.spotLength=f,A.rectAreaLength=y,A.hemiLength=v,A.numDirectionalShadows=x,A.numPointShadows=T,A.numSpotShadows=w,A.numSpotMaps=R,r.version=GE++)}function c(h,u){let d=0,m=0,g=0,_=0,p=0;const f=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const x=h[y];if(x.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),d++}else if(x.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),g++}else if(x.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),o.identity(),a.copy(x.matrixWorld),a.premultiply(f),o.extractRotation(a),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),m++}else if(x.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function jc(i,e){const t=new HE(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(u){n.push(u)}function o(u){r.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function VE(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new jc(i,e),t.set(s,[l])):a>=o.length?(l=new jc(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class kE extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WE extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YE=`uniform sampler2D shadow_pass;
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
}`;function jE(i,e,t){let n=new ka;const r=new Le,s=new Le,a=new _t,o=new kE({depthPacking:Tg}),l=new WE,c={},h=t.maxTextureSize,u={[Vn]:Lt,[Lt]:Vn,[En]:En},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:XE,fragmentShader:YE}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let f=this.type;this.render=function(T,w,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const U=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),q=i.state;q.setBlending(zn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const K=f!==xn&&this.type===xn,I=f===xn&&this.type!==xn;for(let V=0,H=T.length;V<H;V++){const $=T[V],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const j=G.getFrameExtents();if(r.multiply(j),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/j.x),r.x=s.x*j.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/j.y),r.y=s.y*j.y,G.mapSize.y=s.y)),G.map===null||K===!0||I===!0){const Z=this.type!==xn?{minFilter:wt,magFilter:wt}:{};G.map!==null&&G.map.dispose(),G.map=new oi(r.x,r.y,Z),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const Q=G.getViewportCount();for(let Z=0;Z<Q;Z++){const B=G.getViewport(Z);a.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),q.viewport(a),G.updateMatrices($,Z),n=G.getFrustum(),x(w,R,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===xn&&y(G,R),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(U,M,A)};function y(T,w){const R=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new oi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,R,d,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,R,m,_,null)}function v(T,w,R,U){let M=null;const A=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)M=A;else if(M=R.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const q=M.uuid,K=w.uuid;let I=c[q];I===void 0&&(I={},c[q]=I);let V=I[K];V===void 0&&(V=M.clone(),I[K]=V),M=V}if(M.visible=w.visible,M.wireframe=w.wireframe,U===xn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=i.properties.get(M);q.light=R}return M}function x(T,w,R,U,M){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const K=e.update(T),I=T.material;if(Array.isArray(I)){const V=K.groups;for(let H=0,$=V.length;H<$;H++){const G=V[H],j=I[G.materialIndex];if(j&&j.visible){const Q=v(T,j,U,M);i.renderBufferDirect(R,null,K,Q,T,G)}}}else if(I.visible){const V=v(T,I,U,M);i.renderBufferDirect(R,null,K,V,T,null)}}const q=T.children;for(let K=0,I=q.length;K<I;K++)x(q[K],w,R,U,M)}}function KE(i,e,t){const n=t.isWebGL2;function r(){let L=!1;const ue=new _t;let W=null;const te=new _t(0,0,0,0);return{setMask:function(le){W!==le&&!L&&(i.colorMask(le,le,le,le),W=le)},setLocked:function(le){L=le},setClear:function(le,Oe,ke,Ke,Dt){Dt===!0&&(le*=Ke,Oe*=Ke,ke*=Ke),ue.set(le,Oe,ke,Ke),te.equals(ue)===!1&&(i.clearColor(le,Oe,ke,Ke),te.copy(ue))},reset:function(){L=!1,W=null,te.set(-1,0,0,0)}}}function s(){let L=!1,ue=null,W=null,te=null;return{setTest:function(le){le?ve(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(le){ue!==le&&!L&&(i.depthMask(le),ue=le)},setFunc:function(le){if(W!==le){switch(le){case Qm:i.depthFunc(i.NEVER);break;case eg:i.depthFunc(i.ALWAYS);break;case tg:i.depthFunc(i.LESS);break;case ea:i.depthFunc(i.LEQUAL);break;case ng:i.depthFunc(i.EQUAL);break;case ig:i.depthFunc(i.GEQUAL);break;case rg:i.depthFunc(i.GREATER);break;case sg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=le}},setLocked:function(le){L=le},setClear:function(le){te!==le&&(i.clearDepth(le),te=le)},reset:function(){L=!1,ue=null,W=null,te=null}}}function a(){let L=!1,ue=null,W=null,te=null,le=null,Oe=null,ke=null,Ke=null,Dt=null;return{setTest:function(Ze){L||(Ze?ve(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Ze){ue!==Ze&&!L&&(i.stencilMask(Ze),ue=Ze)},setFunc:function(Ze,nn,Tt){(W!==Ze||te!==nn||le!==Tt)&&(i.stencilFunc(Ze,nn,Tt),W=Ze,te=nn,le=Tt)},setOp:function(Ze,nn,Tt){(Oe!==Ze||ke!==nn||Ke!==Tt)&&(i.stencilOp(Ze,nn,Tt),Oe=Ze,ke=nn,Ke=Tt)},setLocked:function(Ze){L=Ze},setClear:function(Ze){Dt!==Ze&&(i.clearStencil(Ze),Dt=Ze)},reset:function(){L=!1,ue=null,W=null,te=null,le=null,Oe=null,ke=null,Ke=null,Dt=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,y=null,v=null,x=null,T=null,w=null,R=null,U=null,M=!1,A=null,q=null,K=null,I=null,V=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=G>=2);let Q=null,Z={};const B=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),ae=new _t().fromArray(B),ie=new _t().fromArray(k);function oe(L,ue,W,te){const le=new Uint8Array(4),Oe=i.createTexture();i.bindTexture(L,Oe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<W;ke++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(ue,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ue+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return Oe}const _e={};_e[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_e[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(i.DEPTH_TEST),l.setFunc(ea),Ee(!1),Ye(Pl),ve(i.CULL_FACE),xe(zn);function ve(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function pe(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Ie(L,ue){return m[L]!==ue?(i.bindFramebuffer(L,ue),m[L]=ue,n&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ue),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ue)),!0):!1}function tt(L,ue){let W=_,te=!1;if(L)if(W=g.get(ue),W===void 0&&(W=[],g.set(ue,W)),L.isWebGLMultipleRenderTargets){const le=L.texture;if(W.length!==le.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Oe=0,ke=le.length;Oe<ke;Oe++)W[Oe]=i.COLOR_ATTACHMENT0+Oe;W.length=le.length,te=!0}}else W[0]!==i.COLOR_ATTACHMENT0&&(W[0]=i.COLOR_ATTACHMENT0,te=!0);else W[0]!==i.BACK&&(W[0]=i.BACK,te=!0);te&&(t.isWebGL2?i.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function Ce(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const D={[Bi]:i.FUNC_ADD,[Vm]:i.FUNC_SUBTRACT,[km]:i.FUNC_REVERSE_SUBTRACT};if(n)D[Nl]=i.MIN,D[Ol]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(D[Nl]=L.MIN_EXT,D[Ol]=L.MAX_EXT)}const nt={[Wm]:i.ZERO,[Xm]:i.ONE,[Ym]:i.SRC_COLOR,[$h]:i.SRC_ALPHA,[Jm]:i.SRC_ALPHA_SATURATE,[Zm]:i.DST_COLOR,[Km]:i.DST_ALPHA,[jm]:i.ONE_MINUS_SRC_COLOR,[Jh]:i.ONE_MINUS_SRC_ALPHA,[$m]:i.ONE_MINUS_DST_COLOR,[qm]:i.ONE_MINUS_DST_ALPHA};function xe(L,ue,W,te,le,Oe,ke,Ke){if(L===zn){f===!0&&(pe(i.BLEND),f=!1);return}if(f===!1&&(ve(i.BLEND),f=!0),L!==Hm){if(L!==y||Ke!==M){if((v!==Bi||w!==Bi)&&(i.blendEquation(i.FUNC_ADD),v=Bi,w=Bi),Ke)switch(L){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Il:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Il:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,T=null,R=null,U=null,y=L,M=Ke}return}le=le||ue,Oe=Oe||W,ke=ke||te,(ue!==v||le!==w)&&(i.blendEquationSeparate(D[ue],D[le]),v=ue,w=le),(W!==x||te!==T||Oe!==R||ke!==U)&&(i.blendFuncSeparate(nt[W],nt[te],nt[Oe],nt[ke]),x=W,T=te,R=Oe,U=ke),y=L,M=!1}function Te(L,ue){L.side===En?pe(i.CULL_FACE):ve(i.CULL_FACE);let W=L.side===Lt;ue&&(W=!W),Ee(W),L.blending===Ji&&L.transparent===!1?xe(zn):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const te=L.stencilWrite;c.setTest(te),te&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(L){A!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),A=L)}function Ye(L){L!==zm?(ve(i.CULL_FACE),L!==q&&(L===Pl?i.cullFace(i.BACK):L===Gm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),q=L}function Pe(L){L!==K&&($&&i.lineWidth(L),K=L)}function Re(L,ue,W){L?(ve(i.POLYGON_OFFSET_FILL),(I!==ue||V!==W)&&(i.polygonOffset(ue,W),I=ue,V=W)):pe(i.POLYGON_OFFSET_FILL)}function ze(L){L?ve(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function it(L){L===void 0&&(L=i.TEXTURE0+H-1),Q!==L&&(i.activeTexture(L),Q=L)}function je(L,ue,W){W===void 0&&(Q===null?W=i.TEXTURE0+H-1:W=Q);let te=Z[W];te===void 0&&(te={type:void 0,texture:void 0},Z[W]=te),(te.type!==L||te.texture!==ue)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(L,ue||_e[L]),te.type=L,te.texture=ue)}function b(){const L=Z[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function E(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(L){ae.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function ce(L){ie.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ie.copy(L))}function de(L,ue){let W=u.get(ue);W===void 0&&(W=new WeakMap,u.set(ue,W));let te=W.get(L);te===void 0&&(te=i.getUniformBlockIndex(ue,L.name),W.set(L,te))}function we(L,ue){const te=u.get(ue).get(L);h.get(ue)!==te&&(i.uniformBlockBinding(ue,te,L.__bindingPointIndex),h.set(ue,te))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,Z={},m={},g=new WeakMap,_=[],p=null,f=!1,y=null,v=null,x=null,T=null,w=null,R=null,U=null,M=!1,A=null,q=null,K=null,I=null,V=null,ae.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ve,disable:pe,bindFramebuffer:Ie,drawBuffers:tt,useProgram:Ce,setBlending:xe,setMaterial:Te,setFlipSided:Ee,setCullFace:Ye,setLineWidth:Pe,setPolygonOffset:Re,setScissorTest:ze,activeTexture:it,bindTexture:je,unbindTexture:b,compressedTexImage2D:E,compressedTexImage3D:F,texImage2D:C,texImage3D:J,updateUBOMapping:de,uniformBlockBinding:we,texStorage2D:se,texStorage3D:O,texSubImage2D:re,texSubImage3D:ee,compressedTexSubImage2D:ne,compressedTexSubImage3D:ge,scissor:fe,viewport:ce,reset:Be}}function qE(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,E){return f?new OffscreenCanvas(b,E):Us("canvas")}function v(b,E,F,re){let ee=1;if((b.width>re||b.height>re)&&(ee=re/Math.max(b.width,b.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ne=E?Ds:Math.floor,ge=ne(ee*b.width),se=ne(ee*b.height);_===void 0&&(_=y(ge,se));const O=F?y(ge,se):_;return O.width=ge,O.height=se,O.getContext("2d").drawImage(b,0,0,ge,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ge+"x"+se+")."),O}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function x(b){return oa(b.width)&&oa(b.height)}function T(b){return o?!1:b.wrapS!==Qt||b.wrapT!==Qt||b.minFilter!==wt&&b.minFilter!==kt}function w(b,E){return b.generateMipmaps&&E&&b.minFilter!==wt&&b.minFilter!==kt}function R(b){i.generateMipmap(b)}function U(b,E,F,re,ee=!1){if(o===!1)return E;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=E;return E===i.RED&&(F===i.FLOAT&&(ne=i.R32F),F===i.HALF_FLOAT&&(ne=i.R16F),F===i.UNSIGNED_BYTE&&(ne=i.R8)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.R8UI),F===i.UNSIGNED_SHORT&&(ne=i.R16UI),F===i.UNSIGNED_INT&&(ne=i.R32UI),F===i.BYTE&&(ne=i.R8I),F===i.SHORT&&(ne=i.R16I),F===i.INT&&(ne=i.R32I)),E===i.RG&&(F===i.FLOAT&&(ne=i.RG32F),F===i.HALF_FLOAT&&(ne=i.RG16F),F===i.UNSIGNED_BYTE&&(ne=i.RG8)),E===i.RGBA&&(F===i.FLOAT&&(ne=i.RGBA32F),F===i.HALF_FLOAT&&(ne=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ne=re===$e&&ee===!1?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)),(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(b,E,F){return w(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==wt&&b.minFilter!==kt?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function A(b){return b===wt||b===Fl||b===lo?i.NEAREST:i.LINEAR}function q(b){const E=b.target;E.removeEventListener("dispose",q),I(E),E.isVideoTexture&&g.delete(E)}function K(b){const E=b.target;E.removeEventListener("dispose",K),H(E)}function I(b){const E=n.get(b);if(E.__webglInit===void 0)return;const F=b.source,re=p.get(F);if(re){const ee=re[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&V(b),Object.keys(re).length===0&&p.delete(F)}n.remove(b)}function V(b){const E=n.get(b);i.deleteTexture(E.__webglTexture);const F=b.source,re=p.get(F);delete re[E.__cacheKey],a.memory.textures--}function H(b){const E=b.texture,F=n.get(b),re=n.get(E);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(F.__webglFramebuffer[ee]))for(let ne=0;ne<F.__webglFramebuffer[ee].length;ne++)i.deleteFramebuffer(F.__webglFramebuffer[ee][ne]);else i.deleteFramebuffer(F.__webglFramebuffer[ee]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ee])}else{if(Array.isArray(F.__webglFramebuffer))for(let ee=0;ee<F.__webglFramebuffer.length;ee++)i.deleteFramebuffer(F.__webglFramebuffer[ee]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ee=0;ee<F.__webglColorRenderbuffer.length;ee++)F.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ee]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,ne=E.length;ee<ne;ee++){const ge=n.get(E[ee]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(E[ee])}n.remove(E),n.remove(b)}let $=0;function G(){$=0}function j(){const b=$;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),$+=1,b}function Q(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function Z(b,E){const F=n.get(b);if(b.isVideoTexture&&it(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(F,b,E);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function B(b,E){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Ie(F,b,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function k(b,E){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Ie(F,b,E);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function ae(b,E){const F=n.get(b);if(b.version>0&&F.__version!==b.version){tt(F,b,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}const ie={[ia]:i.REPEAT,[Qt]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},oe={[wt]:i.NEAREST,[Fl]:i.NEAREST_MIPMAP_NEAREST,[lo]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[fg]:i.LINEAR_MIPMAP_NEAREST,[Lr]:i.LINEAR_MIPMAP_LINEAR},_e={[Rg]:i.NEVER,[Ug]:i.ALWAYS,[wg]:i.LESS,[Lg]:i.LEQUAL,[Cg]:i.EQUAL,[Dg]:i.GEQUAL,[Pg]:i.GREATER,[Ig]:i.NOTEQUAL};function ve(b,E,F){if(F?(i.texParameteri(b,i.TEXTURE_WRAP_S,ie[E.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ie[E.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ie[E.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,oe[E.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,oe[E.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Qt||E.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,A(E.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==wt&&E.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===wt||E.minFilter!==lo&&E.minFilter!==Lr||E.type===On&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Pr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(b,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function pe(b,E){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",q));const re=E.source;let ee=p.get(re);ee===void 0&&(ee={},p.set(re,ee));const ne=Q(E);if(ne!==b.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ee[ne].usedTimes++;const ge=ee[b.__cacheKey];ge!==void 0&&(ee[b.__cacheKey].usedTimes--,ge.usedTimes===0&&V(E)),b.__cacheKey=ne,b.__webglTexture=ee[ne].texture}return F}function Ie(b,E,F){let re=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=i.TEXTURE_3D);const ee=pe(b,E),ne=E.source;t.bindTexture(re,b.__webglTexture,i.TEXTURE0+F);const ge=n.get(ne);if(ne.version!==ge.__version||ee===!0){t.activeTexture(i.TEXTURE0+F),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const se=T(E)&&x(E.image)===!1;let O=v(E.image,se,!1,h);O=je(E,O);const C=x(O)||o,J=s.convert(E.format,E.colorSpace);let fe=s.convert(E.type),ce=U(E.internalFormat,J,fe,E.colorSpace,E.isVideoTexture);ve(re,E,C);let de;const we=E.mipmaps,Be=o&&E.isVideoTexture!==!0,L=ge.__version===void 0||ee===!0,ue=M(E,O,C);if(E.isDepthTexture)ce=i.DEPTH_COMPONENT,o?E.type===On?ce=i.DEPTH_COMPONENT32F:E.type===Nn?ce=i.DEPTH_COMPONENT24:E.type===ni?ce=i.DEPTH24_STENCIL8:ce=i.DEPTH_COMPONENT16:E.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ii&&ce===i.DEPTH_COMPONENT&&E.type!==Ba&&E.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Nn,fe=s.convert(E.type)),E.format===sr&&ce===i.DEPTH_COMPONENT&&(ce=i.DEPTH_STENCIL,E.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ni,fe=s.convert(E.type))),L&&(Be?t.texStorage2D(i.TEXTURE_2D,1,ce,O.width,O.height):t.texImage2D(i.TEXTURE_2D,0,ce,O.width,O.height,0,J,fe,null));else if(E.isDataTexture)if(we.length>0&&C){Be&&L&&t.texStorage2D(i.TEXTURE_2D,ue,ce,we[0].width,we[0].height);for(let W=0,te=we.length;W<te;W++)de=we[W],Be?t.texSubImage2D(i.TEXTURE_2D,W,0,0,de.width,de.height,J,fe,de.data):t.texImage2D(i.TEXTURE_2D,W,ce,de.width,de.height,0,J,fe,de.data);E.generateMipmaps=!1}else Be?(L&&t.texStorage2D(i.TEXTURE_2D,ue,ce,O.width,O.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,O.width,O.height,J,fe,O.data)):t.texImage2D(i.TEXTURE_2D,0,ce,O.width,O.height,0,J,fe,O.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&L&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,ce,we[0].width,we[0].height,O.depth);for(let W=0,te=we.length;W<te;W++)de=we[W],E.format!==en?J!==null?Be?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,O.depth,J,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,ce,de.width,de.height,O.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,O.depth,J,fe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,ce,de.width,de.height,O.depth,0,J,fe,de.data)}else{Be&&L&&t.texStorage2D(i.TEXTURE_2D,ue,ce,we[0].width,we[0].height);for(let W=0,te=we.length;W<te;W++)de=we[W],E.format!==en?J!==null?Be?t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,de.width,de.height,J,de.data):t.compressedTexImage2D(i.TEXTURE_2D,W,ce,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(i.TEXTURE_2D,W,0,0,de.width,de.height,J,fe,de.data):t.texImage2D(i.TEXTURE_2D,W,ce,de.width,de.height,0,J,fe,de.data)}else if(E.isDataArrayTexture)Be?(L&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,ce,O.width,O.height,O.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,J,fe,O.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,O.width,O.height,O.depth,0,J,fe,O.data);else if(E.isData3DTexture)Be?(L&&t.texStorage3D(i.TEXTURE_3D,ue,ce,O.width,O.height,O.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,J,fe,O.data)):t.texImage3D(i.TEXTURE_3D,0,ce,O.width,O.height,O.depth,0,J,fe,O.data);else if(E.isFramebufferTexture){if(L)if(Be)t.texStorage2D(i.TEXTURE_2D,ue,ce,O.width,O.height);else{let W=O.width,te=O.height;for(let le=0;le<ue;le++)t.texImage2D(i.TEXTURE_2D,le,ce,W,te,0,J,fe,null),W>>=1,te>>=1}}else if(we.length>0&&C){Be&&L&&t.texStorage2D(i.TEXTURE_2D,ue,ce,we[0].width,we[0].height);for(let W=0,te=we.length;W<te;W++)de=we[W],Be?t.texSubImage2D(i.TEXTURE_2D,W,0,0,J,fe,de):t.texImage2D(i.TEXTURE_2D,W,ce,J,fe,de);E.generateMipmaps=!1}else Be?(L&&t.texStorage2D(i.TEXTURE_2D,ue,ce,O.width,O.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,J,fe,O)):t.texImage2D(i.TEXTURE_2D,0,ce,J,fe,O);w(E,C)&&R(re),ge.__version=ne.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function tt(b,E,F){if(E.image.length!==6)return;const re=pe(b,E),ee=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const ne=n.get(ee);if(ee.version!==ne.__version||re===!0){t.activeTexture(i.TEXTURE0+F),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ge=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,O=[];for(let W=0;W<6;W++)!ge&&!se?O[W]=v(E.image[W],!1,!0,c):O[W]=se?E.image[W].image:E.image[W],O[W]=je(E,O[W]);const C=O[0],J=x(C)||o,fe=s.convert(E.format,E.colorSpace),ce=s.convert(E.type),de=U(E.internalFormat,fe,ce,E.colorSpace),we=o&&E.isVideoTexture!==!0,Be=ne.__version===void 0||re===!0;let L=M(E,C,J);ve(i.TEXTURE_CUBE_MAP,E,J);let ue;if(ge){we&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,L,de,C.width,C.height);for(let W=0;W<6;W++){ue=O[W].mipmaps;for(let te=0;te<ue.length;te++){const le=ue[te];E.format!==en?fe!==null?we?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,0,0,le.width,le.height,fe,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,de,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,0,0,le.width,le.height,fe,ce,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,de,le.width,le.height,0,fe,ce,le.data)}}}else{ue=E.mipmaps,we&&Be&&(ue.length>0&&L++,t.texStorage2D(i.TEXTURE_CUBE_MAP,L,de,O[0].width,O[0].height));for(let W=0;W<6;W++)if(se){we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,O[W].width,O[W].height,fe,ce,O[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,de,O[W].width,O[W].height,0,fe,ce,O[W].data);for(let te=0;te<ue.length;te++){const Oe=ue[te].image[W].image;we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,0,0,Oe.width,Oe.height,fe,ce,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,de,Oe.width,Oe.height,0,fe,ce,Oe.data)}}else{we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,fe,ce,O[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,de,fe,ce,O[W]);for(let te=0;te<ue.length;te++){const le=ue[te];we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,0,0,fe,ce,le.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,de,fe,ce,le.image[W])}}}w(E,J)&&R(i.TEXTURE_CUBE_MAP),ne.__version=ee.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Ce(b,E,F,re,ee,ne){const ge=s.convert(F.format,F.colorSpace),se=s.convert(F.type),O=U(F.internalFormat,ge,se,F.colorSpace);if(!n.get(E).__hasExternalTextures){const J=Math.max(1,E.width>>ne),fe=Math.max(1,E.height>>ne);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,O,J,fe,E.depth,0,ge,se,null):t.texImage2D(ee,ne,O,J,fe,0,ge,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ze(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ee,n.get(F).__webglTexture,0,Re(E)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ee,n.get(F).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(b,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),E.depthBuffer&&!E.stencilBuffer){let re=i.DEPTH_COMPONENT16;if(F||ze(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===On?re=i.DEPTH_COMPONENT32F:ee.type===Nn&&(re=i.DEPTH_COMPONENT24));const ne=Re(E);ze(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,re,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,re,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(E.depthBuffer&&E.stencilBuffer){const re=Re(E);F&&ze(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,E.width,E.height):ze(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const re=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<re.length;ee++){const ne=re[ee],ge=s.convert(ne.format,ne.colorSpace),se=s.convert(ne.type),O=U(ne.internalFormat,ge,se,ne.colorSpace),C=Re(E);F&&ze(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,C,O,E.width,E.height):ze(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C,O,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,O,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const re=n.get(E.depthTexture).__webglTexture,ee=Re(E);if(E.depthTexture.format===ii)ze(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(E.depthTexture.format===sr)ze(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function xe(b){const E=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");nt(E.__webglFramebuffer,b)}else if(F){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]=i.createRenderbuffer(),D(E.__webglDepthbuffer[re],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),D(E.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(b,E,F){const re=n.get(b);E!==void 0&&Ce(re.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&xe(b)}function Ee(b){const E=b.texture,F=n.get(b),re=n.get(E);b.addEventListener("dispose",K),b.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=E.version,a.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,ne=b.isWebGLMultipleRenderTargets===!0,ge=x(b)||o;if(ee){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(o&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let O=0;O<E.mipmaps.length;O++)F.__webglFramebuffer[se][O]=i.createFramebuffer()}else F.__webglFramebuffer[se]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)F.__webglFramebuffer[se]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ne)if(r.drawBuffers){const se=b.texture;for(let O=0,C=se.length;O<C;O++){const J=n.get(se[O]);J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&ze(b)===!1){const se=ne?E:[E];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let O=0;O<se.length;O++){const C=se[O];F.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[O]);const J=s.convert(C.format,C.colorSpace),fe=s.convert(C.type),ce=U(C.internalFormat,J,fe,C.colorSpace,b.isXRRenderTarget===!0),de=Re(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ce,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,F.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),D(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),ve(i.TEXTURE_CUBE_MAP,E,ge);for(let se=0;se<6;se++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let O=0;O<E.mipmaps.length;O++)Ce(F.__webglFramebuffer[se][O],b,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,O);else Ce(F.__webglFramebuffer[se],b,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);w(E,ge)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const se=b.texture;for(let O=0,C=se.length;O<C;O++){const J=se[O],fe=n.get(J);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),ve(i.TEXTURE_2D,J,ge),Ce(F.__webglFramebuffer,b,J,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,0),w(J,ge)&&R(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?se=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,re.__webglTexture),ve(se,E,ge),o&&E.mipmaps&&E.mipmaps.length>0)for(let O=0;O<E.mipmaps.length;O++)Ce(F.__webglFramebuffer[O],b,E,i.COLOR_ATTACHMENT0,se,O);else Ce(F.__webglFramebuffer,b,E,i.COLOR_ATTACHMENT0,se,0);w(E,ge)&&R(se),t.unbindTexture()}b.depthBuffer&&xe(b)}function Ye(b){const E=x(b)||o,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0,ee=F.length;re<ee;re++){const ne=F[re];if(w(ne,E)){const ge=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,se=n.get(ne).__webglTexture;t.bindTexture(ge,se),R(ge),t.unbindTexture()}}}function Pe(b){if(o&&b.samples>0&&ze(b)===!1){const E=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,re=b.height;let ee=i.COLOR_BUFFER_BIT;const ne=[],ge=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(b),O=b.isWebGLMultipleRenderTargets===!0;if(O)for(let C=0;C<E.length;C++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let C=0;C<E.length;C++){ne.push(i.COLOR_ATTACHMENT0+C),b.depthBuffer&&ne.push(ge);const J=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(J===!1&&(b.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),O&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[C]),J===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ge])),O){const fe=n.get(E[C]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,F,re,0,0,F,re,ee,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let C=0;C<E.length;C++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.RENDERBUFFER,se.__webglColorRenderbuffer[C]);const J=n.get(E[C]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Re(b){return Math.min(u,b.samples)}function ze(b){const E=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function it(b){const E=a.render.frame;g.get(b)!==E&&(g.set(b,E),b.update())}function je(b,E){const F=b.colorSpace,re=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===sa||F!==cn&&F!==si&&(F===$e||F===Ys?o===!1?e.has("EXT_sRGB")===!0&&re===en?(b.format=sa,b.minFilter=kt,b.generateMipmaps=!1):E=hu.sRGBToLinear(E):(re!==en||ee!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}this.allocateTextureUnit=j,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=ae,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ze}const ZE=0,ht=1;function $E(i,e,t){const n=t.isWebGL2;function r(s,a=si){let o;const l=a===$e||a===Ys?ht:ZE;if(s===Bn)return i.UNSIGNED_BYTE;if(s===nu)return i.UNSIGNED_SHORT_4_4_4_4;if(s===iu)return i.UNSIGNED_SHORT_5_5_5_1;if(s===pg)return i.BYTE;if(s===mg)return i.SHORT;if(s===Ba)return i.UNSIGNED_SHORT;if(s===tu)return i.INT;if(s===Nn)return i.UNSIGNED_INT;if(s===On)return i.FLOAT;if(s===Pr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===gg)return i.ALPHA;if(s===en)return i.RGBA;if(s===_g)return i.LUMINANCE;if(s===vg)return i.LUMINANCE_ALPHA;if(s===ii)return i.DEPTH_COMPONENT;if(s===sr)return i.DEPTH_STENCIL;if(s===sa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===xg)return i.RED;if(s===ru)return i.RED_INTEGER;if(s===Eg)return i.RG;if(s===su)return i.RG_INTEGER;if(s===ou)return i.RGBA_INTEGER;if(s===co||s===ho||s===uo||s===fo)if(l===ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zl||s===Gl||s===Bl||s===Hl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===zl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vl||s===kl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Vl)return l===ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===kl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wl||s===Xl||s===Yl||s===jl||s===Kl||s===ql||s===Zl||s===$l||s===Jl||s===Ql||s===ec||s===tc||s===nc||s===ic)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Wl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ql)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$l)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jl)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ql)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ec)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nc)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ic)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===po||s===rc||s===sc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===po)return l===ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yg||s===oc||s===ac||s===lc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===po)return o.COMPRESSED_RED_RGTC1_EXT;if(s===oc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ac)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ni?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class JE extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _s extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QE={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(QE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _s;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class eM extends Pt{constructor(e,t,n,r,s,a,o,l,c,h){if(h=h!==void 0?h:ii,h!==ii&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ii&&(n=Nn),n===void 0&&h===sr&&(n=ni),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tM extends di{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=t.getContextAttributes();let p=null,f=null;const y=[],v=[],x=new Wt;x.layers.enable(1),x.viewport=new _t;const T=new Wt;T.layers.enable(2),T.viewport=new _t;const w=[x,T],R=new JE;R.layers.enable(1),R.layers.enable(2);let U=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let k=y[B];return k===void 0&&(k=new Oo,y[B]=k),k.getTargetRaySpace()},this.getControllerGrip=function(B){let k=y[B];return k===void 0&&(k=new Oo,y[B]=k),k.getGripSpace()},this.getHand=function(B){let k=y[B];return k===void 0&&(k=new Oo,y[B]=k),k.getHandSpace()};function A(B){const k=v.indexOf(B.inputSource);if(k===-1)return;const ae=y[k];ae!==void 0&&(ae.update(B.inputSource,B.frame,c||a),ae.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",K);for(let B=0;B<y.length;B++){const k=v[B];k!==null&&(v[B]=null,y[B].disconnect(k))}U=null,M=null,e.setRenderTarget(p),m=null,d=null,u=null,r=null,f=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",q),r.addEventListener("inputsourceschange",K),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:m}),f=new oi(m.framebufferWidth,m.framebufferHeight,{format:en,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let k=null,ae=null,ie=null;_.depth&&(ie=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=_.stencil?sr:ii,ae=_.stencil?ni:Nn);const oe={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(oe),r.updateRenderState({layers:[d]}),f=new oi(d.textureWidth,d.textureHeight,{format:en,type:Bn,depthTexture:new eM(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const _e=e.properties.get(f);_e.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Z.setContext(r),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(B){for(let k=0;k<B.removed.length;k++){const ae=B.removed[k],ie=v.indexOf(ae);ie>=0&&(v[ie]=null,y[ie].disconnect(ae))}for(let k=0;k<B.added.length;k++){const ae=B.added[k];let ie=v.indexOf(ae);if(ie===-1){for(let _e=0;_e<y.length;_e++)if(_e>=v.length){v.push(ae),ie=_e;break}else if(v[_e]===null){v[_e]=ae,ie=_e;break}if(ie===-1)break}const oe=y[ie];oe&&oe.connect(ae)}}const I=new P,V=new P;function H(B,k,ae){I.setFromMatrixPosition(k.matrixWorld),V.setFromMatrixPosition(ae.matrixWorld);const ie=I.distanceTo(V),oe=k.projectionMatrix.elements,_e=ae.projectionMatrix.elements,ve=oe[14]/(oe[10]-1),pe=oe[14]/(oe[10]+1),Ie=(oe[9]+1)/oe[5],tt=(oe[9]-1)/oe[5],Ce=(oe[8]-1)/oe[0],D=(_e[8]+1)/_e[0],nt=ve*Ce,xe=ve*D,Te=ie/(-Ce+D),Ee=Te*-Ce;k.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ee),B.translateZ(Te),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ye=ve+Te,Pe=pe+Te,Re=nt-Ee,ze=xe+(ie-Ee),it=Ie*pe/Pe*Ye,je=tt*pe/Pe*Ye;B.projectionMatrix.makePerspective(Re,ze,it,je,Ye,Pe),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function $(B,k){k===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(k.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;R.near=T.near=x.near=B.near,R.far=T.far=x.far=B.far,(U!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,M=R.far);const k=B.parent,ae=R.cameras;$(R,k);for(let ie=0;ie<ae.length;ie++)$(ae[ie],k);ae.length===2?H(R,x,T):R.projectionMatrix.copy(x.projectionMatrix),G(B,R,k)};function G(B,k,ae){ae===null?B.matrix.copy(k.matrixWorld):(B.matrix.copy(ae.matrixWorld),B.matrix.invert(),B.matrix.multiply(k.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(k.projectionMatrix),B.projectionMatrixInverse.copy(k.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ir*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let j=null;function Q(B,k){if(h=k.getViewerPose(c||a),g=k,h!==null){const ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ie=!1;ae.length!==R.cameras.length&&(R.cameras.length=0,ie=!0);for(let oe=0;oe<ae.length;oe++){const _e=ae[oe];let ve=null;if(m!==null)ve=m.getViewport(_e);else{const Ie=u.getViewSubImage(d,_e);ve=Ie.viewport,oe===0&&(e.setRenderTargetTextures(f,Ie.colorTexture,d.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(f))}let pe=w[oe];pe===void 0&&(pe=new Wt,pe.layers.enable(oe),pe.viewport=new _t,w[oe]=pe),pe.matrix.fromArray(_e.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(_e.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(ve.x,ve.y,ve.width,ve.height),oe===0&&(R.matrix.copy(pe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ie===!0&&R.cameras.push(pe)}}for(let ae=0;ae<y.length;ae++){const ie=v[ae],oe=y[ae];ie!==null&&oe!==void 0&&oe.update(ie,k,c||a)}j&&j(B,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}const Z=new Eu;Z.setAnimationLoop(Q),this.setAnimationLoop=function(B){j=B},this.dispose=function(){}}}function nM(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,_u(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,y,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,x)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,y,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Lt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Lt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Lt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function iM(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=r[y.id];x===void 0&&(g(y),x=h(y),r[y.id]=x,y.addEventListener("dispose",p));const T=v.program;n.updateUBOMapping(y,T);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function h(y){const v=u();y.__bindingPointIndex=v;const x=i.createBuffer(),T=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],x=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,R=x.length;w<R;w++){const U=x[w];if(m(U,w,T)===!0){const M=U.__offset,A=Array.isArray(U.value)?U.value:[U.value];let q=0;for(let K=0;K<A.length;K++){const I=A[K],V=_(I);typeof I=="number"?(U.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,M+q,U.__data)):I.isMatrix3?(U.__data[0]=I.elements[0],U.__data[1]=I.elements[1],U.__data[2]=I.elements[2],U.__data[3]=I.elements[0],U.__data[4]=I.elements[3],U.__data[5]=I.elements[4],U.__data[6]=I.elements[5],U.__data[7]=I.elements[0],U.__data[8]=I.elements[6],U.__data[9]=I.elements[7],U.__data[10]=I.elements[8],U.__data[11]=I.elements[0]):(I.toArray(U.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,U.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,v,x){const T=y.value;if(x[v]===void 0){if(typeof T=="number")x[v]=T;else{const w=Array.isArray(T)?T:[T],R=[];for(let U=0;U<w.length;U++)R.push(w[U].clone());x[v]=R}return!0}else if(typeof T=="number"){if(x[v]!==T)return x[v]=T,!0}else{const w=Array.isArray(x[v])?x[v]:[x[v]],R=Array.isArray(T)?T:[T];for(let U=0;U<w.length;U++){const M=w[U];if(M.equals(R[U])===!1)return M.copy(R[U]),!0}}return!1}function g(y){const v=y.uniforms;let x=0;const T=16;let w=0;for(let R=0,U=v.length;R<U;R++){const M=v[R],A={boundary:0,storage:0},q=Array.isArray(M.value)?M.value:[M.value];for(let K=0,I=q.length;K<I;K++){const V=q[K],H=_(V);A.boundary+=H.boundary,A.storage+=H.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,R>0){w=x%T;const K=T-w;w!==0&&K-A.boundary<0&&(x+=T-w,M.__offset=x)}x+=A.storage}return w=x%T,w>0&&(x+=T-w),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Au{constructor(e={}){const{canvas:t=Zg(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=Gn,this.toneMappingExposure=1;const v=this;let x=!1,T=0,w=0,R=null,U=-1,M=null;const A=new _t,q=new _t;let K=null;const I=new Ve(0);let V=0,H=t.width,$=t.height,G=1,j=null,Q=null;const Z=new _t(0,0,H,$),B=new _t(0,0,H,$);let k=!1;const ae=new ka;let ie=!1,oe=!1,_e=null;const ve=new ct,pe=new Le,Ie=new P,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return R===null?G:1}let D=n;function nt(S,N){for(let X=0;X<S.length;X++){const z=S[X],Y=t.getContext(z,N);if(Y!==null)return Y}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ga}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",te,!1),D===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),D=nt(N,S),D===null)throw nt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xe,Te,Ee,Ye,Pe,Re,ze,it,je,b,E,F,re,ee,ne,ge,se,O,C,J,fe,ce,de,we;function Be(){xe=new fx(D),Te=new ax(D,xe,e),xe.init(Te),ce=new $E(D,xe,Te),Ee=new KE(D,xe,Te),Ye=new gx(D),Pe=new UE,Re=new qE(D,xe,Ee,Pe,Te,ce,Ye),ze=new cx(v),it=new dx(v),je=new A_(D,Te),de=new sx(D,xe,je,Te),b=new px(D,je,Ye,de),E=new Ex(D,b,je,Ye),C=new xx(D,Te,Re),ge=new lx(Pe),F=new DE(v,ze,it,xe,Te,de,ge),re=new nM(v,Pe),ee=new OE,ne=new VE(xe,Te),O=new rx(v,ze,it,Ee,E,d,l),se=new jE(v,E,Te),we=new iM(D,Ye,Te,Ee),J=new ox(D,xe,Ye,Te),fe=new mx(D,xe,Ye,Te),Ye.programs=F.programs,v.capabilities=Te,v.extensions=xe,v.properties=Pe,v.renderLists=ee,v.shadowMap=se,v.state=Ee,v.info=Ye}Be();const L=new tM(v,D);this.xr=L,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=xe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=xe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(H,$,!1))},this.getSize=function(S){return S.set(H,$)},this.setSize=function(S,N,X=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,$=N,t.width=Math.floor(S*G),t.height=Math.floor(N*G),X===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(H*G,$*G).floor()},this.setDrawingBufferSize=function(S,N,X){H=S,$=N,G=X,t.width=Math.floor(S*X),t.height=Math.floor(N*X),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,N,X,z){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,N,X,z),Ee.viewport(A.copy(Z).multiplyScalar(G).floor())},this.getScissor=function(S){return S.copy(B)},this.setScissor=function(S,N,X,z){S.isVector4?B.set(S.x,S.y,S.z,S.w):B.set(S,N,X,z),Ee.scissor(q.copy(B).multiplyScalar(G).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(S){Ee.setScissorTest(k=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){Q=S},this.getClearColor=function(S){return S.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor.apply(O,arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha.apply(O,arguments)},this.clear=function(S=!0,N=!0,X=!0){let z=0;if(S){let Y=!1;if(R!==null){const me=R.texture.format;Y=me===ou||me===su||me===ru}if(Y){const me=R.texture.type,ye=me===Bn||me===Nn||me===Ba||me===ni||me===nu||me===iu,be=O.getClearColor(),Ae=O.getClearAlpha(),Fe=be.r,Se=be.g,De=be.b;ye?(m[0]=Fe,m[1]=Se,m[2]=De,m[3]=Ae,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Fe,g[1]=Se,g[2]=De,g[3]=Ae,D.clearBufferiv(D.COLOR,0,g))}else z|=D.COLOR_BUFFER_BIT}N&&(z|=D.DEPTH_BUFFER_BIT),X&&(z|=D.STENCIL_BUFFER_BIT),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",te,!1),ee.dispose(),ne.dispose(),Pe.dispose(),ze.dispose(),it.dispose(),E.dispose(),de.dispose(),we.dispose(),F.dispose(),L.dispose(),L.removeEventListener("sessionstart",Ze),L.removeEventListener("sessionend",nn),_e&&(_e.dispose(),_e=null),Tt.stop()};function ue(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=Ye.autoReset,N=se.enabled,X=se.autoUpdate,z=se.needsUpdate,Y=se.type;Be(),Ye.autoReset=S,se.enabled=N,se.autoUpdate=X,se.needsUpdate=z,se.type=Y}function te(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function le(S){const N=S.target;N.removeEventListener("dispose",le),Oe(N)}function Oe(S){ke(S),Pe.remove(S)}function ke(S){const N=Pe.get(S).programs;N!==void 0&&(N.forEach(function(X){F.releaseProgram(X)}),S.isShaderMaterial&&F.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,X,z,Y,me){N===null&&(N=tt);const ye=Y.isMesh&&Y.matrixWorld.determinant()<0,be=Lu(S,N,X,z,Y);Ee.setMaterial(z,ye);let Ae=X.index,Fe=1;if(z.wireframe===!0){if(Ae=b.getWireframeAttribute(X),Ae===void 0)return;Fe=2}const Se=X.drawRange,De=X.attributes.position;let Je=Se.start*Fe,rt=(Se.start+Se.count)*Fe;me!==null&&(Je=Math.max(Je,me.start*Fe),rt=Math.min(rt,(me.start+me.count)*Fe)),Ae!==null?(Je=Math.max(Je,0),rt=Math.min(rt,Ae.count)):De!=null&&(Je=Math.max(Je,0),rt=Math.min(rt,De.count));const zt=rt-Je;if(zt<0||zt===1/0)return;de.setup(Y,z,be,X,Ae);let un,ot=J;if(Ae!==null&&(un=je.get(Ae),ot=fe,ot.setIndex(un)),Y.isMesh)z.wireframe===!0?(Ee.setLineWidth(z.wireframeLinewidth*Ce()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(Y.isLine){let Ge=z.linewidth;Ge===void 0&&(Ge=1),Ee.setLineWidth(Ge*Ce()),Y.isLineSegments?ot.setMode(D.LINES):Y.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else Y.isPoints?ot.setMode(D.POINTS):Y.isSprite&&ot.setMode(D.TRIANGLES);if(Y.isInstancedMesh)ot.renderInstances(Je,zt,Y.count);else if(X.isInstancedBufferGeometry){const Ge=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Zs=Math.min(X.instanceCount,Ge);ot.renderInstances(Je,zt,Zs)}else ot.render(Je,zt)},this.compile=function(S,N){function X(z,Y,me){z.transparent===!0&&z.side===En&&z.forceSinglePass===!1?(z.side=Lt,z.needsUpdate=!0,Vr(z,Y,me),z.side=Vn,z.needsUpdate=!0,Vr(z,Y,me),z.side=En):Vr(z,Y,me)}p=ne.get(S),p.init(),y.push(p),S.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(v._useLegacyLights),S.traverse(function(z){const Y=z.material;if(Y)if(Array.isArray(Y))for(let me=0;me<Y.length;me++){const ye=Y[me];X(ye,S,z)}else X(Y,S,z)}),y.pop(),p=null};let Ke=null;function Dt(S){Ke&&Ke(S)}function Ze(){Tt.stop()}function nn(){Tt.start()}const Tt=new Eu;Tt.setAnimationLoop(Dt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(S){Ke=S,L.setAnimationLoop(S),S===null?Tt.stop():Tt.start()},L.addEventListener("sessionstart",Ze),L.addEventListener("sessionend",nn),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(N),N=L.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,R),p=ne.get(S,y.length),p.init(),y.push(p),ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ae.setFromProjectionMatrix(ve),oe=this.localClippingEnabled,ie=ge.init(this.clippingPlanes,oe),_=ee.get(S,f.length),_.init(),f.push(_),ja(S,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,Q),this.info.render.frame++,ie===!0&&ge.beginShadows();const X=p.state.shadowsArray;if(se.render(X,S,N),ie===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),O.render(_,S),p.setupLights(v._useLegacyLights),N.isArrayCamera){const z=N.cameras;for(let Y=0,me=z.length;Y<me;Y++){const ye=z[Y];Ka(_,S,ye,ye.viewport)}}else Ka(_,S,N);R!==null&&(Re.updateMultisampleRenderTarget(R),Re.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(v,S,N),de.resetDefaultState(),U=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ja(S,N,X,z){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ae.intersectsSprite(S)){z&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const ye=E.update(S),be=S.material;be.visible&&_.push(S,ye,be,X,Ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ae.intersectsObject(S))){const ye=E.update(S),be=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ie.copy(ye.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(be)){const Ae=ye.groups;for(let Fe=0,Se=Ae.length;Fe<Se;Fe++){const De=Ae[Fe],Je=be[De.materialIndex];Je&&Je.visible&&_.push(S,ye,Je,X,Ie.z,De)}}else be.visible&&_.push(S,ye,be,X,Ie.z,null)}}const me=S.children;for(let ye=0,be=me.length;ye<be;ye++)ja(me[ye],N,X,z)}function Ka(S,N,X,z){const Y=S.opaque,me=S.transmissive,ye=S.transparent;p.setupLightsView(X),ie===!0&&ge.setGlobalState(v.clippingPlanes,X),me.length>0&&Cu(Y,me,N,X),z&&Ee.viewport(A.copy(z)),Y.length>0&&Hr(Y,N,X),me.length>0&&Hr(me,N,X),ye.length>0&&Hr(ye,N,X),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Cu(S,N,X,z){const Y=Te.isWebGL2;_e===null&&(_e=new oi(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Pr:Bn,minFilter:Lr,samples:Y?4:0})),v.getDrawingBufferSize(pe),Y?_e.setSize(pe.x,pe.y):_e.setSize(Ds(pe.x),Ds(pe.y));const me=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(I),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear();const ye=v.toneMapping;v.toneMapping=Gn,Hr(S,X,z),Re.updateMultisampleRenderTarget(_e),Re.updateRenderTargetMipmap(_e);let be=!1;for(let Ae=0,Fe=N.length;Ae<Fe;Ae++){const Se=N[Ae],De=Se.object,Je=Se.geometry,rt=Se.material,zt=Se.group;if(rt.side===En&&De.layers.test(z.layers)){const un=rt.side;rt.side=Lt,rt.needsUpdate=!0,qa(De,X,z,Je,rt,zt),rt.side=un,rt.needsUpdate=!0,be=!0}}be===!0&&(Re.updateMultisampleRenderTarget(_e),Re.updateRenderTargetMipmap(_e)),v.setRenderTarget(me),v.setClearColor(I,V),v.toneMapping=ye}function Hr(S,N,X){const z=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,me=S.length;Y<me;Y++){const ye=S[Y],be=ye.object,Ae=ye.geometry,Fe=z===null?ye.material:z,Se=ye.group;be.layers.test(X.layers)&&qa(be,N,X,Ae,Fe,Se)}}function qa(S,N,X,z,Y,me){S.onBeforeRender(v,N,X,z,Y,me),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(v,N,X,z,S,me),Y.transparent===!0&&Y.side===En&&Y.forceSinglePass===!1?(Y.side=Lt,Y.needsUpdate=!0,v.renderBufferDirect(X,N,z,Y,S,me),Y.side=Vn,Y.needsUpdate=!0,v.renderBufferDirect(X,N,z,Y,S,me),Y.side=En):v.renderBufferDirect(X,N,z,Y,S,me),S.onAfterRender(v,N,X,z,Y,me)}function Vr(S,N,X){N.isScene!==!0&&(N=tt);const z=Pe.get(S),Y=p.state.lights,me=p.state.shadowsArray,ye=Y.state.version,be=F.getParameters(S,Y.state,me,N,X),Ae=F.getProgramCacheKey(be);let Fe=z.programs;z.environment=S.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(S.isMeshStandardMaterial?it:ze).get(S.envMap||z.environment),Fe===void 0&&(S.addEventListener("dispose",le),Fe=new Map,z.programs=Fe);let Se=Fe.get(Ae);if(Se!==void 0){if(z.currentProgram===Se&&z.lightsStateVersion===ye)return Za(S,be),Se}else be.uniforms=F.getUniforms(S),S.onBuild(X,be,v),S.onBeforeCompile(be,v),Se=F.acquireProgram(be,Ae),Fe.set(Ae,Se),z.uniforms=be.uniforms;const De=z.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(De.clippingPlanes=ge.uniform),Za(S,be),z.needsLights=Iu(S),z.lightsStateVersion=ye,z.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.directionalShadowMap.value=Y.state.directionalShadowMap,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotShadowMap.value=Y.state.spotShadowMap,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMap.value=Y.state.pointShadowMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Je=Se.getUniforms(),rt=Ts.seqWithValue(Je.seq,De);return z.currentProgram=Se,z.uniformsList=rt,Se}function Za(S,N){const X=Pe.get(S);X.outputColorSpace=N.outputColorSpace,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Lu(S,N,X,z,Y){N.isScene!==!0&&(N=tt),Re.resetTextureUnits();const me=N.fog,ye=z.isMeshStandardMaterial?N.environment:null,be=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:cn,Ae=(z.isMeshStandardMaterial?it:ze).get(z.envMap||ye),Fe=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Se=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),De=!!X.morphAttributes.position,Je=!!X.morphAttributes.normal,rt=!!X.morphAttributes.color;let zt=Gn;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(zt=v.toneMapping);const un=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=un!==void 0?un.length:0,Ge=Pe.get(z),Zs=p.state.lights;if(ie===!0&&(oe===!0||S!==M)){const Ut=S===M&&z.id===U;ge.setState(z,S,Ut)}let at=!1;z.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Zs.state.version||Ge.outputColorSpace!==be||Y.isInstancedMesh&&Ge.instancing===!1||!Y.isInstancedMesh&&Ge.instancing===!0||Y.isSkinnedMesh&&Ge.skinning===!1||!Y.isSkinnedMesh&&Ge.skinning===!0||Y.isInstancedMesh&&Ge.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ge.instancingColor===!1&&Y.instanceColor!==null||Ge.envMap!==Ae||z.fog===!0&&Ge.fog!==me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ge.numPlanes||Ge.numIntersection!==ge.numIntersection)||Ge.vertexAlphas!==Fe||Ge.vertexTangents!==Se||Ge.morphTargets!==De||Ge.morphNormals!==Je||Ge.morphColors!==rt||Ge.toneMapping!==zt||Te.isWebGL2===!0&&Ge.morphTargetsCount!==ot)&&(at=!0):(at=!0,Ge.__version=z.version);let Wn=Ge.currentProgram;at===!0&&(Wn=Vr(z,N,Y));let $a=!1,dr=!1,$s=!1;const bt=Wn.getUniforms(),Xn=Ge.uniforms;if(Ee.useProgram(Wn.program)&&($a=!0,dr=!0,$s=!0),z.id!==U&&(U=z.id,dr=!0),$a||M!==S){bt.setValue(D,"projectionMatrix",S.projectionMatrix),bt.setValue(D,"viewMatrix",S.matrixWorldInverse);const Ut=bt.map.cameraPosition;Ut!==void 0&&Ut.setValue(D,Ie.setFromMatrixPosition(S.matrixWorld)),Te.logarithmicDepthBuffer&&bt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&bt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,dr=!0,$s=!0)}if(Y.isSkinnedMesh){bt.setOptional(D,Y,"bindMatrix"),bt.setOptional(D,Y,"bindMatrixInverse");const Ut=Y.skeleton;Ut&&(Te.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),bt.setValue(D,"boneTexture",Ut.boneTexture,Re),bt.setValue(D,"boneTextureSize",Ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Js=X.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0&&Te.isWebGL2===!0)&&C.update(Y,X,Wn),(dr||Ge.receiveShadow!==Y.receiveShadow)&&(Ge.receiveShadow=Y.receiveShadow,bt.setValue(D,"receiveShadow",Y.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Xn.envMap.value=Ae,Xn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),dr&&(bt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&Pu(Xn,$s),me&&z.fog===!0&&re.refreshFogUniforms(Xn,me),re.refreshMaterialUniforms(Xn,z,G,$,_e),Ts.upload(D,Ge.uniformsList,Xn,Re)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ts.upload(D,Ge.uniformsList,Xn,Re),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&bt.setValue(D,"center",Y.center),bt.setValue(D,"modelViewMatrix",Y.modelViewMatrix),bt.setValue(D,"normalMatrix",Y.normalMatrix),bt.setValue(D,"modelMatrix",Y.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ut=z.uniformsGroups;for(let Qs=0,Du=Ut.length;Qs<Du;Qs++)if(Te.isWebGL2){const Ja=Ut[Qs];we.update(Ja,Wn),we.bind(Ja,Wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wn}function Pu(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Iu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,N,X){Pe.get(S.texture).__webglTexture=N,Pe.get(S.depthTexture).__webglTexture=X;const z=Pe.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=X===void 0,z.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){const X=Pe.get(S);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,X=0){R=S,T=N,w=X;let z=!0,Y=null,me=!1,ye=!1;if(S){const Ae=Pe.get(S);Ae.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(D.FRAMEBUFFER,null),z=!1):Ae.__webglFramebuffer===void 0?Re.setupRenderTarget(S):Ae.__hasExternalTextures&&Re.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const Se=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Se[N])?Y=Se[N][X]:Y=Se[N],me=!0):Te.isWebGL2&&S.samples>0&&Re.useMultisampledRTT(S)===!1?Y=Pe.get(S).__webglMultisampledFramebuffer:Array.isArray(Se)?Y=Se[X]:Y=Se,A.copy(S.viewport),q.copy(S.scissor),K=S.scissorTest}else A.copy(Z).multiplyScalar(G).floor(),q.copy(B).multiplyScalar(G).floor(),K=k;if(Ee.bindFramebuffer(D.FRAMEBUFFER,Y)&&Te.drawBuffers&&z&&Ee.drawBuffers(S,Y),Ee.viewport(A),Ee.scissor(q),Ee.setScissorTest(K),me){const Ae=Pe.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,X)}else if(ye){const Ae=Pe.get(S.texture),Fe=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.__webglTexture,X||0,Fe)}U=-1},this.readRenderTargetPixels=function(S,N,X,z,Y,me,ye){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){Ee.bindFramebuffer(D.FRAMEBUFFER,be);try{const Ae=S.texture,Fe=Ae.format,Se=Ae.type;if(Fe!==en&&ce.convert(Fe)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Se===Pr&&(xe.has("EXT_color_buffer_half_float")||Te.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Se!==Bn&&ce.convert(Se)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===On&&(Te.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-z&&X>=0&&X<=S.height-Y&&D.readPixels(N,X,z,Y,ce.convert(Fe),ce.convert(Se),me)}finally{const Ae=R!==null?Pe.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(S,N,X=0){const z=Math.pow(2,-X),Y=Math.floor(N.image.width*z),me=Math.floor(N.image.height*z);Re.setTexture2D(N,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,S.x,S.y,Y,me),Ee.unbindTexture()},this.copyTextureToTexture=function(S,N,X,z=0){const Y=N.image.width,me=N.image.height,ye=ce.convert(X.format),be=ce.convert(X.type);Re.setTexture2D(X,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,X.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,X.unpackAlignment),N.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,S.x,S.y,Y,me,ye,be,N.image.data):N.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,ye,N.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,z,S.x,S.y,ye,be,N.image),z===0&&X.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(S,N,X,z,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=S.max.x-S.min.x+1,ye=S.max.y-S.min.y+1,be=S.max.z-S.min.z+1,Ae=ce.convert(z.format),Fe=ce.convert(z.type);let Se;if(z.isData3DTexture)Re.setTexture3D(z,0),Se=D.TEXTURE_3D;else if(z.isDataArrayTexture)Re.setTexture2DArray(z,0),Se=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const De=D.getParameter(D.UNPACK_ROW_LENGTH),Je=D.getParameter(D.UNPACK_IMAGE_HEIGHT),rt=D.getParameter(D.UNPACK_SKIP_PIXELS),zt=D.getParameter(D.UNPACK_SKIP_ROWS),un=D.getParameter(D.UNPACK_SKIP_IMAGES),ot=X.isCompressedTexture?X.mipmaps[0]:X.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ot.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,S.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,S.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,S.min.z),X.isDataTexture||X.isData3DTexture?D.texSubImage3D(Se,Y,N.x,N.y,N.z,me,ye,be,Ae,Fe,ot.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Se,Y,N.x,N.y,N.z,me,ye,be,Ae,ot.data)):D.texSubImage3D(Se,Y,N.x,N.y,N.z,me,ye,be,Ae,Fe,ot),D.pixelStorei(D.UNPACK_ROW_LENGTH,De),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je),D.pixelStorei(D.UNPACK_SKIP_PIXELS,rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,un),Y===0&&z.generateMipmaps&&D.generateMipmap(Se),Ee.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Re.setTextureCube(S,0):S.isData3DTexture?Re.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Re.setTexture2DArray(S,0):Re.setTexture2D(S,0),Ee.unbindTexture()},this.resetState=function(){T=0,w=0,R=null,Ee.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$e?ri:au}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ri?$e:cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rM extends Au{}rM.prototype.isWebGL1Renderer=!0;class sM extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ru extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kc=new P,qc=new P,Zc=new ct,Fo=new Va,vs=new js;class oM extends xt{constructor(e=new hn,t=new Ru){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Kc.fromBufferAttribute(t,r-1),qc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Kc.distanceTo(qc);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),vs.radius+=s,e.ray.intersectsSphere(vs)===!1)return;Zc.copy(r).invert(),Fo.copy(e.ray).applyMatrix4(Zc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,h=new P,u=new P,d=new P,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=f,x=y-1;v<x;v+=m){const T=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,w),Fo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let v=f,x=y-1;v<x;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Fo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const $c=new P,Jc=new P;class aM extends oM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)$c.fromBufferAttribute(t,r),Jc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+$c.distanceTo(Jc);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lM extends Pt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xa extends hn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],m=[];let g=0;const _=[],p=n/2;let f=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(m,2));function y(){const x=new P,T=new P;let w=0;const R=(t-e)/n;for(let U=0;U<=s;U++){const M=[],A=U/s,q=A*(t-e)+e;for(let K=0;K<=r;K++){const I=K/r,V=I*l+o,H=Math.sin(V),$=Math.cos(V);T.x=q*H,T.y=-A*n+p,T.z=q*$,u.push(T.x,T.y,T.z),x.set(H,R,$).normalize(),d.push(x.x,x.y,x.z),m.push(I,1-A),M.push(g++)}_.push(M)}for(let U=0;U<r;U++)for(let M=0;M<s;M++){const A=_[M][U],q=_[M+1][U],K=_[M+1][U+1],I=_[M][U+1];h.push(A,q,I),h.push(q,K,I),w+=6}c.addGroup(f,w,0),f+=w}function v(x){const T=g,w=new Le,R=new P;let U=0;const M=x===!0?e:t,A=x===!0?1:-1;for(let K=1;K<=r;K++)u.push(0,p*A,0),d.push(0,A,0),m.push(.5,.5),g++;const q=g;for(let K=0;K<=r;K++){const V=K/r*l+o,H=Math.cos(V),$=Math.sin(V);R.x=M*$,R.y=p*A,R.z=M*H,u.push(R.x,R.y,R.z),d.push(0,A,0),w.x=H*.5+.5,w.y=$*.5*A+.5,m.push(w.x,w.y),g++}for(let K=0;K<r;K++){const I=T+K,V=q+K;x===!0?h.push(V,V+1,I):h.push(V+1,V,I),U+=3}c.addGroup(f,U,x===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ya extends Xa{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ya(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cM extends hr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class hM extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const zo=new ct,Qc=new P,eh=new P;class uM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qc),eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eh),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dM extends uM{constructor(){super(new Mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fM extends hM{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new dM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class th{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pM extends aM{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ve(n),r=new Ve(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,m=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===s?n:r;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const h=new hn;h.setAttribute("position",new It(l,3)),h.setAttribute("color",new It(c,3));const u=new Ru({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ga);const nh={type:"change"},Go={type:"start"},ih={type:"end"},xs=new Va,rh=new In,mM=Math.cos(70*qg.DEG2RAD);class gM extends di{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",E),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(nh),n.update(),s=r.NONE},this.update=function(){const C=new P,J=new ai().setFromUnitVectors(e.up,new P(0,1,0)),fe=J.clone().invert(),ce=new P,de=new ai,we=new P,Be=2*Math.PI;return function(ue=null){const W=n.object.position;C.copy(W).sub(n.target),C.applyQuaternion(J),o.setFromVector3(C),n.autoRotate&&s===r.NONE&&q(M(ue)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let te=n.minAzimuthAngle,le=n.maxAzimuthAngle;isFinite(te)&&isFinite(le)&&(te<-Math.PI?te+=Be:te>Math.PI&&(te-=Be),le<-Math.PI?le+=Be:le>Math.PI&&(le-=Be),te<=le?o.theta=Math.max(te,Math.min(le,o.theta)):o.theta=o.theta>(te+le)/2?Math.max(te,o.theta):Math.min(le,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=Q(o.radius):o.radius=Q(o.radius*c),C.setFromSpherical(o),C.applyQuaternion(fe),W.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Oe=!1;if(n.zoomToCursor&&w){let ke=null;if(n.object.isPerspectiveCamera){const Ke=C.length();ke=Q(Ke*c);const Dt=Ke-ke;n.object.position.addScaledVector(x,Dt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ke=new P(T.x,T.y,0);Ke.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Oe=!0;const Dt=new P(T.x,T.y,0);Dt.unproject(n.object),n.object.position.sub(Dt).add(Ke),n.object.updateMatrixWorld(),ke=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ke!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ke).add(n.object.position):(xs.origin.copy(n.object.position),xs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(xs.direction))<mM?e.lookAt(n.target):(rh.setFromNormalAndCoplanarPoint(n.object.up,n.target),xs.intersectPlane(rh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Oe=!0);return c=1,w=!1,Oe||ce.distanceToSquared(n.object.position)>a||8*(1-de.dot(n.object.quaternion))>a||we.distanceToSquared(n.target)>0?(n.dispatchEvent(nh),ce.copy(n.object.position),de.copy(n.object.quaternion),we.copy(n.target),Oe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee),n.domElement.removeEventListener("pointerdown",Pe),n.domElement.removeEventListener("pointercancel",ze),n.domElement.removeEventListener("wheel",b),n.domElement.removeEventListener("pointermove",Re),n.domElement.removeEventListener("pointerup",ze),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new th,l=new th;let c=1;const h=new P,u=new Le,d=new Le,m=new Le,g=new Le,_=new Le,p=new Le,f=new Le,y=new Le,v=new Le,x=new P,T=new Le;let w=!1;const R=[],U={};function M(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function q(C){l.theta-=C}function K(C){l.phi-=C}const I=function(){const C=new P;return function(fe,ce){C.setFromMatrixColumn(ce,0),C.multiplyScalar(-fe),h.add(C)}}(),V=function(){const C=new P;return function(fe,ce){n.screenSpacePanning===!0?C.setFromMatrixColumn(ce,1):(C.setFromMatrixColumn(ce,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(fe),h.add(C)}}(),H=function(){const C=new P;return function(fe,ce){const de=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;C.copy(we).sub(n.target);let Be=C.length();Be*=Math.tan(n.object.fov/2*Math.PI/180),I(2*fe*Be/de.clientHeight,n.object.matrix),V(2*ce*Be/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(fe*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),V(ce*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(C){if(!n.zoomToCursor)return;w=!0;const J=n.domElement.getBoundingClientRect(),fe=C.clientX-J.left,ce=C.clientY-J.top,de=J.width,we=J.height;T.x=fe/de*2-1,T.y=-(ce/we)*2+1,x.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function Z(C){u.set(C.clientX,C.clientY)}function B(C){j(C),f.set(C.clientX,C.clientY)}function k(C){g.set(C.clientX,C.clientY)}function ae(C){d.set(C.clientX,C.clientY),m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const J=n.domElement;q(2*Math.PI*m.x/J.clientHeight),K(2*Math.PI*m.y/J.clientHeight),u.copy(d),n.update()}function ie(C){y.set(C.clientX,C.clientY),v.subVectors(y,f),v.y>0?$(A()):v.y<0&&G(A()),f.copy(y),n.update()}function oe(C){_.set(C.clientX,C.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),H(p.x,p.y),g.copy(_),n.update()}function _e(C){j(C),C.deltaY<0?G(A()):C.deltaY>0&&$(A()),n.update()}function ve(C){let J=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),J=!0;break}J&&(C.preventDefault(),n.update())}function pe(){if(R.length===1)u.set(R[0].pageX,R[0].pageY);else{const C=.5*(R[0].pageX+R[1].pageX),J=.5*(R[0].pageY+R[1].pageY);u.set(C,J)}}function Ie(){if(R.length===1)g.set(R[0].pageX,R[0].pageY);else{const C=.5*(R[0].pageX+R[1].pageX),J=.5*(R[0].pageY+R[1].pageY);g.set(C,J)}}function tt(){const C=R[0].pageX-R[1].pageX,J=R[0].pageY-R[1].pageY,fe=Math.sqrt(C*C+J*J);f.set(0,fe)}function Ce(){n.enableZoom&&tt(),n.enablePan&&Ie()}function D(){n.enableZoom&&tt(),n.enableRotate&&pe()}function nt(C){if(R.length==1)d.set(C.pageX,C.pageY);else{const fe=O(C),ce=.5*(C.pageX+fe.x),de=.5*(C.pageY+fe.y);d.set(ce,de)}m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const J=n.domElement;q(2*Math.PI*m.x/J.clientHeight),K(2*Math.PI*m.y/J.clientHeight),u.copy(d)}function xe(C){if(R.length===1)_.set(C.pageX,C.pageY);else{const J=O(C),fe=.5*(C.pageX+J.x),ce=.5*(C.pageY+J.y);_.set(fe,ce)}p.subVectors(_,g).multiplyScalar(n.panSpeed),H(p.x,p.y),g.copy(_)}function Te(C){const J=O(C),fe=C.pageX-J.x,ce=C.pageY-J.y,de=Math.sqrt(fe*fe+ce*ce);y.set(0,de),v.set(0,Math.pow(y.y/f.y,n.zoomSpeed)),$(v.y),f.copy(y)}function Ee(C){n.enableZoom&&Te(C),n.enablePan&&xe(C)}function Ye(C){n.enableZoom&&Te(C),n.enableRotate&&nt(C)}function Pe(C){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",Re),n.domElement.addEventListener("pointerup",ze)),ne(C),C.pointerType==="touch"?F(C):it(C))}function Re(C){n.enabled!==!1&&(C.pointerType==="touch"?re(C):je(C))}function ze(C){ge(C),R.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",Re),n.domElement.removeEventListener("pointerup",ze)),n.dispatchEvent(ih),s=r.NONE}function it(C){let J;switch(C.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case vi.DOLLY:if(n.enableZoom===!1)return;B(C),s=r.DOLLY;break;case vi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;k(C),s=r.PAN}else{if(n.enableRotate===!1)return;Z(C),s=r.ROTATE}break;case vi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;Z(C),s=r.ROTATE}else{if(n.enablePan===!1)return;k(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Go)}function je(C){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ae(C);break;case r.DOLLY:if(n.enableZoom===!1)return;ie(C);break;case r.PAN:if(n.enablePan===!1)return;oe(C);break}}function b(C){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(C.preventDefault(),n.dispatchEvent(Go),_e(C),n.dispatchEvent(ih))}function E(C){n.enabled===!1||n.enablePan===!1||ve(C)}function F(C){switch(se(C),R.length){case 1:switch(n.touches.ONE){case xi.ROTATE:if(n.enableRotate===!1)return;pe(),s=r.TOUCH_ROTATE;break;case xi.PAN:if(n.enablePan===!1)return;Ie(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case xi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),s=r.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;D(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Go)}function re(C){switch(se(C),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;nt(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;xe(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ye(C),n.update();break;default:s=r.NONE}}function ee(C){n.enabled!==!1&&C.preventDefault()}function ne(C){R.push(C)}function ge(C){delete U[C.pointerId];for(let J=0;J<R.length;J++)if(R[J].pointerId==C.pointerId){R.splice(J,1);return}}function se(C){let J=U[C.pointerId];J===void 0&&(J=new Le,U[C.pointerId]=J),J.set(C.pageX,C.pageY)}function O(C){const J=C.pointerId===R[0].pointerId?R[1]:R[0];return U[J.pointerId]}n.domElement.addEventListener("contextmenu",ee),n.domElement.addEventListener("pointerdown",Pe),n.domElement.addEventListener("pointercancel",ze),n.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}const yr=1e3,la=1e3;let Sr,tn,Es=.04,Oi=new P(0,0,0),Bo=new P(0,0,100),Vi=new P(0,0,1),Ho=Vi.clone(),Dn,ca,$t,Ms,sh,ti,ha,ua,tr,ut;const _M=new Array;let da,Yi,Vo=0;function vM(){navbarExitFullscreen.classList.remove("d-none"),navbarEnterFullscreen.classList.add("d-none"),document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen()}function xM(){navbarExitFullscreen.classList.add("d-none"),navbarEnterFullscreen.classList.remove("d-none"),document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}function EM(i){switch(console.log(i.keyCode),i.keyCode){case 37:ut.rotation.z+=.01;break;case 39:ut.rotation.z-=.01;break}}function MM(){const i=window.innerWidth,e=window.innerHeight;tn.aspect=i/e,tn.updateProjectionMatrix(),Sr.setSize(i,e)}function yM(){let i=document.getElementById("mapCanvas").children[0].children[0].children[0].children[0];const e=new lM(i),t=new er({map:e});ti!=null&&$t.remove(ti),ti=new Ft(ha,t),$t.add(ti)}function SM(){window.addEventListener("resize",MM),document.addEventListener("keydown",EM),navbarEnterFullscreen.addEventListener("click",vM),navbarExitFullscreen.addEventListener("click",xM),bM(),TM(),AM()}function TM(){Yi=new Stats,Yi.showPanel(0),Yi.dom.style="",debugCardFPS.appendChild(Yi.dom)}function bM(){Sr=new Au({canvas:threeCanvas,antialias:!0}),Sr.setSize(window.innerWidth,window.innerHeight),tn=new Wt(75,window.innerWidth/window.innerHeight,.1,1e3),Dn=new gM(tn,Sr.domElement),Dn.minDistance=10,Dn.maxPolarAngle=Math.PI/180*80,Dn.enableDamping=!1,Dn.screenSpacePanning=!0,$t=new sM,$t.background=new Ve(10408698),ca=new fM(16777215,.8),$t.add(ca);let i=new Br(yr,yr,1,1),e=new er({color:8429915});ua=new Ft(i,e),$t.add(ua),tr=new pM(yr,la,14540253,14540253),tr.rotateX(Math.PI/2),$t.add(tr);let t=new li(.1,1,.1);t.rotateY(Math.PI/2),t.translate(0,0,.05);let n=new er({color:65280,wireframe:!0});ut=new Ft(t,n),$t.add(ut);let r=new Ya(.2,1,20);r.rotateX(Math.PI/2),r.translate(0,0,.5);let s=new cM({color:2162464});for(let l=0;l<10;l++)for(let c=0;c<100;c++){const h=new Ft(r,s);h.position.y=-9+c*2,h.position.x=-9+l*2,_M.push(h),$t.add(h)}let a=new li(.01,.01,.01),o=new er({color:16711680});da=new Ft(a,o),$t.add(da)}function AM(){Dd(),Ms=new sn({center:[0,0],zoom:1}),sh=new Zp({target:"mapCanvas",layers:[new gm({source:new Fm})],view:Ms}),sh.on("postrender",yM),Ms.setCenter([16.94529940000001,46.685864200000026]),Ms.setZoom(22),ha=new Br(100,100),ha.translate(0,0,.001)}function wu(){Yi.begin(),RM(),wM();let i=new P(Math.cos(Math.PI/180*Vo)*.1,Math.sin(Math.PI/180*Vo*3)*.1,.2);i.add(ut.position),da.position.copy(i),CM(),ca.position.copy(tn.position),Sr.render($t,tn),Yi.end(),Vo++,requestAnimationFrame(wu)}function RM(){ut.rotation.z-=.005;const i=new P(0,.01,0);i.applyEuler(ut.rotation),ut.position.addScaledVector(i,1)}function wM(){hudGroundMap.checked?(ti.visible=!0,tr.visible=!1):hudGroundGrid.checked&&(ti!=null&&(ti.visible=!1),tr.visible=!0),ua.position.set(ut.position.x,ut.position.y,0),tr.position.set(ut.position.x-ut.position.x%(yr/la),ut.position.y-ut.position.y%(yr/la),.001)}function CM(){hudModeFollow.checked?(Dn.enabled=!1,hudViewpointTop.checked?(Oi.set(0,0,15),hudHeadingFront.checked&&Oi.applyEuler(ut.rotation),Bo.lerp(Oi,Es),Vi.set(0,1,0),hudHeadingFront.checked&&Vi.applyEuler(ut.rotation),Ho.lerp(Vi,Es)):hudViewpointBack.checked&&(Oi.set(0,-2,.8),hudHeadingFront.checked&&Oi.applyEuler(ut.rotation),Bo.lerp(Oi,Es),Vi.set(0,0,1),Ho.lerp(Vi,Es)),tn.up.copy(Ho),tn.position.copy(ut.position),tn.position.add(Bo),tn.lookAt(ut.position)):hudModeFree.checked&&(Dn.enabled=!0,tn.up.set(0,0,1),Dn.update())}SM();wu();
//# sourceMappingURL=index-fc7f9f7d.js.map
