(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const bu={1:"The view center is not defined",2:"The view resolution is not defined",3:"The view rotation is not defined",4:"`image` and `src` cannot be provided at the same time",5:"`imgSize` must be set when `image` is provided",7:"`format` must be set when `url` is set",8:"Unknown `serverType` configured",9:"`url` must be configured or set using `#setUrl()`",10:"The default `geometryFunction` can only handle `Point` geometries",11:"`options.featureTypes` must be an Array",12:"`options.geometryName` must also be provided when `options.bbox` is set",13:"Invalid corner",14:"Invalid color",15:"Tried to get a value for a key that does not exist in the cache",16:"Tried to set a value for a key that is used already",17:"`resolutions` must be sorted in descending order",18:"Either `origin` or `origins` must be configured, never both",19:"Number of `tileSizes` and `resolutions` must be equal",20:"Number of `origins` and `resolutions` must be equal",22:"Either `tileSize` or `tileSizes` must be configured, never both",24:"Invalid extent or geometry provided as `geometry`",25:"Cannot fit empty extent provided as `geometry`",26:"Features must have an id set",27:"Features must have an id set",28:'`renderMode` must be `"hybrid"` or `"vector"`',30:"The passed `feature` was already added to the source",31:"Tried to enqueue an `element` that was already added to the queue",32:"Transformation matrix cannot be inverted",33:"Invalid units",34:"Invalid geometry layout",36:"Unknown SRS type",37:"Unknown geometry type found",38:"`styleMapValue` has an unknown type",39:"Unknown geometry type",40:"Expected `feature` to have a geometry",41:"Expected an `ol/style/Style` or an array of `ol/style/Style.js`",42:"Question unknown, the answer is 42",43:"Expected `layers` to be an array or a `Collection`",47:"Expected `controls` to be an array or an `ol/Collection`",48:"Expected `interactions` to be an array or an `ol/Collection`",49:"Expected `overlays` to be an array or an `ol/Collection`",50:"`options.featureTypes` should be an Array",51:"Either `url` or `tileJSON` options must be provided",52:"Unknown `serverType` configured",53:"Unknown `tierSizeCalculation` configured",55:"The {-y} placeholder requires a tile grid with extent",56:"mapBrowserEvent must originate from a pointer event",57:"At least 2 conditions are required",59:"Invalid command found in the PBF",60:"Missing or invalid `size`",61:"Cannot determine IIIF Image API version from provided image information JSON",62:"A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`",64:"Layer opacity must be a number",66:"`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has not been enabled. This is done by providing adequate shaders using the `hitVertexShader` and `hitFragmentShader` properties of `WebGLPointsLayerRenderer`",67:"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both",68:"A VectorTile source can only be rendered if it has a projection compatible with the view projection"};class wu extends Error{constructor(e){const t=bu[e];super(t),this.code=e,this.name="AssertionError",this.message=t}}const Qc=wu;class Cu{constructor(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}const Hn=Cu,fr={PROPERTYCHANGE:"propertychange"};class Lu{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}const sa=Lu;function oa(i,e){return i>e?1:i<e?-1:0}function aa(i,e,t){const n=i.length;if(i[0]<=e)return 0;if(e<=i[n-1])return n-1;{let r;if(t>0){for(r=1;r<n;++r)if(i[r]<e)return r-1}else if(t<0){for(r=1;r<n;++r)if(i[r]<=e)return r}else for(r=1;r<n;++r){if(i[r]==e)return r;if(i[r]<e)return typeof t=="function"?t(e,i[r-1],i[r])>0?r-1:r:i[r-1]-e<e-i[r]?r-1:r}return n-1}}function Pu(i,e){const t=Array.isArray(e)?e:[e],n=t.length;for(let r=0;r<n;r++)i[i.length]=t[r]}function la(i,e){const t=i.length;if(t!==e.length)return!1;for(let n=0;n<t;n++)if(i[n]!==e[n])return!1;return!0}function Iu(i,e,t){const n=e||oa;return i.every(function(r,s){if(s===0)return!0;const o=n(i[s-1],r);return!(o>0||t&&o===0)})}function ps(){return!0}function Ts(){return!1}function pr(){}function Du(i){let e=!1,t,n,r;return function(){const s=Array.prototype.slice.call(arguments);return(!e||this!==r||!la(s,n))&&(e=!0,r=this,n=s,t=i.apply(this,arguments)),t}}function As(i){for(const e in i)delete i[e]}function Uu(i){let e;for(e in i)return!1;return!e}class Nu extends sa{constructor(e){super(),this.eventTarget_=e,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(e,t){if(!e||!t)return;const n=this.listeners_||(this.listeners_={}),r=n[e]||(n[e]=[]);r.includes(t)||r.push(t)}dispatchEvent(e){const t=typeof e=="string",n=t?e:e.type,r=this.listeners_&&this.listeners_[n];if(!r)return;const s=t?new Hn(e):e;s.target||(s.target=this.eventTarget_||this);const o=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});n in o||(o[n]=0,a[n]=0),++o[n];let l;for(let c=0,h=r.length;c<h;++c)if("handleEvent"in r[c]?l=r[c].handleEvent(s):l=r[c].call(this,s),l===!1||s.propagationStopped){l=!1;break}if(--o[n]===0){let c=a[n];for(delete a[n];c--;)this.removeEventListener(n,pr);delete o[n]}return l}disposeInternal(){this.listeners_&&As(this.listeners_)}getListeners(e){return this.listeners_&&this.listeners_[e]||void 0}hasListener(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(e,t){const n=this.listeners_&&this.listeners_[e];if(n){const r=n.indexOf(t);r!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(n[r]=pr,++this.pendingRemovals_[e]):(n.splice(r,1),n.length===0&&delete this.listeners_[e]))}}}const ca=Nu,Oe={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function Ve(i,e,t,n,r){if(n&&n!==i&&(t=t.bind(n)),r){const o=t;t=function(){i.removeEventListener(e,t),o.apply(this,arguments)}}const s={target:i,type:e,listener:t};return i.addEventListener(e,t),s}function ms(i,e,t,n){return Ve(i,e,t,n,!0)}function tt(i){i&&i.target&&(i.target.removeEventListener(i.type,i.listener),As(i))}class Rs extends ca{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(Oe.CHANGE)}getRevision(){return this.revision_}onInternal(e,t){if(Array.isArray(e)){const n=e.length,r=new Array(n);for(let s=0;s<n;++s)r[s]=Ve(this,e[s],t);return r}else return Ve(this,e,t)}onceInternal(e,t){let n;if(Array.isArray(e)){const r=e.length;n=new Array(r);for(let s=0;s<r;++s)n[s]=ms(this,e[s],t)}else n=ms(this,e,t);return t.ol_key=n,n}unInternal(e,t){const n=t.ol_key;if(n)Fu(n);else if(Array.isArray(e))for(let r=0,s=e.length;r<s;++r)this.removeEventListener(e[r],t);else this.removeEventListener(e,t)}}Rs.prototype.on;Rs.prototype.once;Rs.prototype.un;function Fu(i){if(Array.isArray(i))for(let e=0,t=i.length;e<t;++e)tt(i[e]);else tt(i)}const eh=Rs;function $e(){throw new Error("Unimplemented abstract method.")}let Ou=0;function wt(i){return i.ol_uid||(i.ol_uid=String(++Ou))}class Wa extends Hn{constructor(e,t,n){super(e),this.key=t,this.oldValue=n}}class zu extends eh{constructor(e){super(),this.on,this.once,this.un,wt(this),this.values_=null,e!==void 0&&this.setProperties(e)}get(e){let t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}hasProperties(){return!!this.values_}notify(e,t){let n;n=`change:${e}`,this.hasListener(n)&&this.dispatchEvent(new Wa(n,e,t)),n=fr.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new Wa(n,e,t))}addChangeListener(e,t){this.addEventListener(`change:${e}`,t)}removeChangeListener(e,t){this.removeEventListener(`change:${e}`,t)}set(e,t,n){const r=this.values_||(this.values_={});if(n)r[e]=t;else{const s=r[e];r[e]=t,s!==t&&this.notify(e,s)}}setProperties(e,t){for(const n in e)this.set(n,e[n],t)}applyProperties(e){e.values_&&Object.assign(this.values_||(this.values_={}),e.values_)}unset(e,t){if(this.values_&&e in this.values_){const n=this.values_[e];delete this.values_[e],Uu(this.values_)&&(this.values_=null),t||this.notify(e,n)}}}const yn=zu,Ht={ADD:"add",REMOVE:"remove"},Xa={LENGTH:"length"};class Pr extends Hn{constructor(e,t,n){super(e),this.element=t,this.index=n}}class Bu extends yn{constructor(e,t){if(super(),this.on,this.once,this.un,t=t||{},this.unique_=!!t.unique,this.array_=e||[],this.unique_)for(let n=0,r=this.array_.length;n<r;++n)this.assertUnique_(this.array_[n],n);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(e){for(let t=0,n=e.length;t<n;++t)this.push(e[t]);return this}forEach(e){const t=this.array_;for(let n=0,r=t.length;n<r;++n)e(t[n],n,t)}getArray(){return this.array_}item(e){return this.array_[e]}getLength(){return this.get(Xa.LENGTH)}insertAt(e,t){if(e<0||e>this.getLength())throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t),this.array_.splice(e,0,t),this.updateLength_(),this.dispatchEvent(new Pr(Ht.ADD,t,e))}pop(){return this.removeAt(this.getLength()-1)}push(e){this.unique_&&this.assertUnique_(e);const t=this.getLength();return this.insertAt(t,e),this.getLength()}remove(e){const t=this.array_;for(let n=0,r=t.length;n<r;++n)if(t[n]===e)return this.removeAt(n)}removeAt(e){if(e<0||e>=this.getLength())return;const t=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new Pr(Ht.REMOVE,t,e)),t}setAt(e,t){const n=this.getLength();if(e>=n){this.insertAt(e,t);return}if(e<0)throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t,e);const r=this.array_[e];this.array_[e]=t,this.dispatchEvent(new Pr(Ht.REMOVE,r,e)),this.dispatchEvent(new Pr(Ht.ADD,t,e))}updateLength_(){this.set(Xa.LENGTH,this.array_.length)}assertUnique_(e,t){for(let n=0,r=this.array_.length;n<r;++n)if(this.array_[n]===e&&n!==t)throw new Qc(58)}}const xn=Bu;function We(i,e){if(!i)throw new Qc(e)}const Bn=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",Gu=Bn.includes("firefox"),Hu=Bn.includes("safari")&&!Bn.includes("chrom");Hu&&(Bn.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(Bn));const Vu=Bn.includes("webkit")&&!Bn.includes("edge"),ku=Bn.includes("macintosh"),th=typeof devicePixelRatio<"u"?devicePixelRatio:1,nh=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,Wu=typeof Image<"u"&&Image.prototype.decode,ih=function(){let i=!1;try{const e=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return i}();new Array(6);function Gi(){return[1,0,0,1,0,0]}function Bt(i,e){const t=e[0],n=e[1];return e[0]=i[0]*t+i[2]*n+i[4],e[1]=i[1]*t+i[3]*n+i[5],e}function mr(i,e,t,n,r,s,o,a){const l=Math.sin(s),c=Math.cos(s);return i[0]=n*c,i[1]=r*l,i[2]=-n*l,i[3]=r*c,i[4]=o*n*c-a*n*l+e,i[5]=o*r*l+a*r*c+t,i}function rh(i,e){const t=Xu(e);We(t!==0,32);const n=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5];return i[0]=o/t,i[1]=-r/t,i[2]=-s/t,i[3]=n/t,i[4]=(s*l-o*a)/t,i[5]=-(n*l-r*a)/t,i}function Xu(i){return i[0]*i[3]-i[1]*i[2]}let Ya;function Yu(i){const e="matrix("+i.join(", ")+")";if(nh)return e;const t=Ya||(Ya=document.createElement("div"));return t.style.transform=e,t.style.transform}const vt={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function qa(i){const e=ci();for(let t=0,n=i.length;t<n;++t)us(e,i[t]);return e}function qu(i,e,t){const n=Math.min.apply(null,i),r=Math.min.apply(null,e),s=Math.max.apply(null,i),o=Math.max.apply(null,e);return si(n,r,s,o,t)}function Ku(i,e){return e?(e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e):i.slice()}function sh(i,e,t){let n,r;return e<i[0]?n=i[0]-e:i[2]<e?n=e-i[2]:n=0,t<i[1]?r=i[1]-t:i[3]<t?r=t-i[3]:r=0,n*n+r*r}function ha(i,e){return oh(i,e[0],e[1])}function Zu(i,e){return i[0]<=e[0]&&e[2]<=i[2]&&i[1]<=e[1]&&e[3]<=i[3]}function oh(i,e,t){return i[0]<=e&&e<=i[2]&&i[1]<=t&&t<=i[3]}function Ka(i,e){const t=i[0],n=i[1],r=i[2],s=i[3],o=e[0],a=e[1];let l=vt.UNKNOWN;return o<t?l=l|vt.LEFT:o>r&&(l=l|vt.RIGHT),a<n?l=l|vt.BELOW:a>s&&(l=l|vt.ABOVE),l===vt.UNKNOWN&&(l=vt.INTERSECTING),l}function ci(){return[1/0,1/0,-1/0,-1/0]}function si(i,e,t,n,r){return r?(r[0]=i,r[1]=e,r[2]=t,r[3]=n,r):[i,e,t,n]}function bs(i){return si(1/0,1/0,-1/0,-1/0,i)}function ju(i,e){const t=i[0],n=i[1];return si(t,n,t,n,e)}function $u(i,e,t,n,r){const s=bs(r);return ah(s,i,e,t,n)}function Uo(i,e){return i[0]==e[0]&&i[2]==e[2]&&i[1]==e[1]&&i[3]==e[3]}function Ju(i,e){return e[0]<i[0]&&(i[0]=e[0]),e[2]>i[2]&&(i[2]=e[2]),e[1]<i[1]&&(i[1]=e[1]),e[3]>i[3]&&(i[3]=e[3]),i}function us(i,e){e[0]<i[0]&&(i[0]=e[0]),e[0]>i[2]&&(i[2]=e[0]),e[1]<i[1]&&(i[1]=e[1]),e[1]>i[3]&&(i[3]=e[1])}function ah(i,e,t,n,r){for(;t<n;t+=r)Qu(i,e[t],e[t+1]);return i}function Qu(i,e,t){i[0]=Math.min(i[0],e),i[1]=Math.min(i[1],t),i[2]=Math.max(i[2],e),i[3]=Math.max(i[3],t)}function lh(i,e){let t;return t=e(ws(i)),t||(t=e(Cs(i)),t)||(t=e(Ls(i)),t)||(t=e(hi(i)),t)?t:!1}function No(i){let e=0;return ua(i)||(e=mt(i)*rn(i)),e}function ws(i){return[i[0],i[1]]}function Cs(i){return[i[2],i[1]]}function gr(i){return[(i[0]+i[2])/2,(i[1]+i[3])/2]}function ed(i,e){let t;return e==="bottom-left"?t=ws(i):e==="bottom-right"?t=Cs(i):e==="top-left"?t=hi(i):e==="top-right"?t=Ls(i):We(!1,13),t}function Fo(i,e,t,n,r){const[s,o,a,l,c,h,u,d]=Oo(i,e,t,n);return si(Math.min(s,a,c,u),Math.min(o,l,h,d),Math.max(s,a,c,u),Math.max(o,l,h,d),r)}function Oo(i,e,t,n){const r=e*n[0]/2,s=e*n[1]/2,o=Math.cos(t),a=Math.sin(t),l=r*o,c=r*a,h=s*o,u=s*a,d=i[0],m=i[1];return[d-l+u,m-c-h,d-l-u,m-c+h,d+l-u,m+c+h,d+l+u,m+c-h,d-l+u,m-c-h]}function rn(i){return i[3]-i[1]}function hr(i,e,t){const n=t||ci();return Ps(i,e)?(i[0]>e[0]?n[0]=i[0]:n[0]=e[0],i[1]>e[1]?n[1]=i[1]:n[1]=e[1],i[2]<e[2]?n[2]=i[2]:n[2]=e[2],i[3]<e[3]?n[3]=i[3]:n[3]=e[3]):bs(n),n}function hi(i){return[i[0],i[3]]}function Ls(i){return[i[2],i[3]]}function mt(i){return i[2]-i[0]}function Ps(i,e){return i[0]<=e[2]&&i[2]>=e[0]&&i[1]<=e[3]&&i[3]>=e[1]}function ua(i){return i[2]<i[0]||i[3]<i[1]}function td(i,e){return e?(e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e):i}function nd(i,e,t){let n=!1;const r=Ka(i,e),s=Ka(i,t);if(r===vt.INTERSECTING||s===vt.INTERSECTING)n=!0;else{const o=i[0],a=i[1],l=i[2],c=i[3],h=e[0],u=e[1],d=t[0],m=t[1],g=(m-u)/(d-h);let _,p;s&vt.ABOVE&&!(r&vt.ABOVE)&&(_=d-(m-c)/g,n=_>=o&&_<=l),!n&&s&vt.RIGHT&&!(r&vt.RIGHT)&&(p=m-(d-l)*g,n=p>=a&&p<=c),!n&&s&vt.BELOW&&!(r&vt.BELOW)&&(_=d-(m-a)/g,n=_>=o&&_<=l),!n&&s&vt.LEFT&&!(r&vt.LEFT)&&(p=m-(d-o)*g,n=p>=a&&p<=c)}return n}function id(i,e,t,n){let r=[];if(n>1){const a=i[2]-i[0],l=i[3]-i[1];for(let c=0;c<n;++c)r.push(i[0]+a*c/n,i[1],i[2],i[1]+l*c/n,i[2]-a*c/n,i[3],i[0],i[3]-l*c/n)}else r=[i[0],i[1],i[2],i[1],i[2],i[3],i[0],i[3]];e(r,r,2);const s=[],o=[];for(let a=0,l=r.length;a<l;a+=2)s.push(r[a]),o.push(r[a+1]);return qu(s,o,t)}const _r={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};class rd{constructor(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent!==void 0?e.extent:null,this.worldExtent_=e.worldExtent!==void 0?e.worldExtent:null,this.axisOrientation_=e.axisOrientation!==void 0?e.axisOrientation:"enu",this.global_=e.global!==void 0?e.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||_r[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(e){this.defaultTileGrid_=e}setExtent(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)}setWorldExtent(e){this.worldExtent_=e}setGetPointResolution(e){this.getPointResolutionFunc_=e}getPointResolutionFunc(){return this.getPointResolutionFunc_}}const ch=rd,yr=6378137,Fi=Math.PI*yr,sd=[-Fi,-Fi,Fi,Fi],od=[-180,-85,180,85],Ir=yr*Math.log(Math.tan(Math.PI/2));class ui extends ch{constructor(e){super({code:e,units:"m",extent:sd,global:!0,worldExtent:od,getPointResolution:function(t,n){return t/Math.cosh(n[1]/yr)}})}}const Za=[new ui("EPSG:3857"),new ui("EPSG:102100"),new ui("EPSG:102113"),new ui("EPSG:900913"),new ui("http://www.opengis.net/def/crs/EPSG/0/3857"),new ui("http://www.opengis.net/gml/srs/epsg.xml#3857")];function ad(i,e,t){const n=i.length;t=t>1?t:2,e===void 0&&(t>2?e=i.slice():e=new Array(n));for(let r=0;r<n;r+=t){e[r]=Fi*i[r]/180;let s=yr*Math.log(Math.tan(Math.PI*(+i[r+1]+90)/360));s>Ir?s=Ir:s<-Ir&&(s=-Ir),e[r+1]=s}return e}function ld(i,e,t){const n=i.length;t=t>1?t:2,e===void 0&&(t>2?e=i.slice():e=new Array(n));for(let r=0;r<n;r+=t)e[r]=180*i[r]/Fi,e[r+1]=360*Math.atan(Math.exp(i[r+1]/yr))/Math.PI-90;return e}const cd=6378137,ja=[-180,-90,180,90],hd=Math.PI*cd/180;class Wn extends ch{constructor(e,t){super({code:e,units:"degrees",extent:ja,axisOrientation:t,global:!0,metersPerUnit:hd,worldExtent:ja})}}const $a=[new Wn("CRS:84"),new Wn("EPSG:4326","neu"),new Wn("urn:ogc:def:crs:OGC:1.3:CRS84"),new Wn("urn:ogc:def:crs:OGC:2:84"),new Wn("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new Wn("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new Wn("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];let zo={};function ud(i){return zo[i]||zo[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function dd(i,e){zo[i]=e}let Hi={};function gs(i,e,t){const n=i.getCode(),r=e.getCode();n in Hi||(Hi[n]={}),Hi[n][r]=t}function fd(i,e){let t;return i in Hi&&e in Hi[i]&&(t=Hi[i][e]),t}function gt(i,e,t){return Math.min(Math.max(i,e),t)}function pd(i,e,t,n,r,s){const o=r-t,a=s-n;if(o!==0||a!==0){const l=((i-t)*o+(e-n)*a)/(o*o+a*a);l>1?(t=r,n=s):l>0&&(t+=o*l,n+=a*l)}return Vi(i,e,t,n)}function Vi(i,e,t,n){const r=t-i,s=n-e;return r*r+s*s}function md(i){const e=i.length;for(let n=0;n<e;n++){let r=n,s=Math.abs(i[n][n]);for(let a=n+1;a<e;a++){const l=Math.abs(i[a][n]);l>s&&(s=l,r=a)}if(s===0)return null;const o=i[r];i[r]=i[n],i[n]=o;for(let a=n+1;a<e;a++){const l=-i[a][n]/i[n][n];for(let c=n;c<e+1;c++)n==c?i[a][c]=0:i[a][c]+=l*i[n][c]}}const t=new Array(e);for(let n=e-1;n>=0;n--){t[n]=i[n][e]/i[n][n];for(let r=n-1;r>=0;r--)i[r][e]-=i[r][n]*t[n]}return t}function ds(i){return i*Math.PI/180}function ki(i,e){const t=i%e;return t*e<0?t+e:t}function gd(i,e,t){return i+t*(e-i)}function hh(i,e){const t=Math.pow(10,e);return Math.round(i*t)/t}function Dr(i,e){return Math.floor(hh(i,e))}function Ur(i,e){return Math.ceil(hh(i,e))}function _d(i,e){return i[0]+=+e[0],i[1]+=+e[1],i}function _s(i,e){let t=!0;for(let n=i.length-1;n>=0;--n)if(i[n]!=e[n]){t=!1;break}return t}function da(i,e){const t=Math.cos(e),n=Math.sin(e),r=i[0]*t-i[1]*n,s=i[1]*t+i[0]*n;return i[0]=r,i[1]=s,i}function vd(i,e){return i[0]*=e,i[1]*=e,i}function xd(i,e){if(e.canWrapX()){const t=mt(e.getExtent()),n=Ed(i,e,t);n&&(i[0]-=n*t)}return i}function Ed(i,e,t){const n=e.getExtent();let r=0;return e.canWrapX()&&(i[0]<n[0]||i[0]>n[2])&&(t=t||mt(n),r=Math.floor((i[0]-n[0])/t)),r}const Md=63710088e-1;function Ja(i,e,t){t=t||Md;const n=ds(i[1]),r=ds(e[1]),s=(r-n)/2,o=ds(e[0]-i[0])/2,a=Math.sin(s)*Math.sin(s)+Math.sin(o)*Math.sin(o)*Math.cos(n)*Math.cos(r);return 2*t*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}let Bo=!0;function yd(i){Bo=!(i===void 0?!0:i)}function fa(i,e,t){if(e!==void 0){for(let n=0,r=i.length;n<r;++n)e[n]=i[n];e=e}else e=i.slice();return e}function uh(i,e,t){if(e!==void 0&&i!==e){for(let n=0,r=i.length;n<r;++n)e[n]=i[n];i=e}return i}function Sd(i){dd(i.getCode(),i),gs(i,i,fa)}function Td(i){i.forEach(Sd)}function Wt(i){return typeof i=="string"?ud(i):i||null}function Qa(i,e,t,n){i=Wt(i);let r;const s=i.getPointResolutionFunc();if(s){if(r=s(e,t),n&&n!==i.getUnits()){const o=i.getMetersPerUnit();o&&(r=r*o/_r[n])}}else{const o=i.getUnits();if(o=="degrees"&&!n||n=="degrees")r=e;else{const a=ma(i,Wt("EPSG:4326"));if(a===uh&&o!=="degrees")r=e*i.getMetersPerUnit();else{let c=[t[0]-e/2,t[1],t[0]+e/2,t[1],t[0],t[1]-e/2,t[0],t[1]+e/2];c=a(c,c,2);const h=Ja(c.slice(0,2),c.slice(2,4)),u=Ja(c.slice(4,6),c.slice(6,8));r=(h+u)/2}const l=n?_r[n]:i.getMetersPerUnit();l!==void 0&&(r/=l)}}return r}function el(i){Td(i),i.forEach(function(e){i.forEach(function(t){e!==t&&gs(e,t,fa)})})}function Ad(i,e,t,n){i.forEach(function(r){e.forEach(function(s){gs(r,s,t),gs(s,r,n)})})}function pa(i,e){return i?typeof i=="string"?Wt(i):i:Wt(e)}function Pi(i,e){if(i===e)return!0;const t=i.getUnits()===e.getUnits();return(i.getCode()===e.getCode()||ma(i,e)===fa)&&t}function ma(i,e){const t=i.getCode(),n=e.getCode();let r=fd(t,n);return r||(r=uh),r}function vr(i,e){const t=Wt(i),n=Wt(e);return ma(t,n)}function ga(i,e,t){return vr(e,t)(i,void 0,i.length)}function dh(i,e,t,n){const r=vr(e,t);return id(i,r,void 0,n)}let sn=null;function Rd(i){sn=Wt(i)}function bd(){return sn}function wd(){Rd("EPSG:4326")}function Go(i,e){return sn?ga(i,e,sn):i}function mn(i,e){return sn?ga(i,sn,e):(Bo&&!_s(i,[0,0])&&i[0]>=-180&&i[0]<=180&&i[1]>=-90&&i[1]<=90&&(Bo=!1,console.warn("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),i)}function Cd(i,e){return sn?dh(i,e,sn):i}function Oi(i,e){return sn?dh(i,sn,e):i}function Ld(){el(Za),el($a),Ad($a,Za,ad,ld)}Ld();function Pd(i,e,t,n,r,s){s=s||[];let o=0;for(let a=e;a<t;a+=n){const l=i[a],c=i[a+1];s[o++]=r[0]*l+r[2]*c+r[4],s[o++]=r[1]*l+r[3]*c+r[5]}return s&&s.length!=o&&(s.length=o),s}function Id(i,e,t,n,r,s,o){o=o||[];const a=Math.cos(r),l=Math.sin(r),c=s[0],h=s[1];let u=0;for(let d=e;d<t;d+=n){const m=i[d]-c,g=i[d+1]-h;o[u++]=c+m*a-g*l,o[u++]=h+m*l+g*a;for(let _=d+2;_<d+n;++_)o[u++]=i[_]}return o&&o.length!=u&&(o.length=u),o}function Dd(i,e,t,n,r,s,o,a){a=a||[];const l=o[0],c=o[1];let h=0;for(let u=e;u<t;u+=n){const d=i[u]-l,m=i[u+1]-c;a[h++]=l+r*d,a[h++]=c+s*m;for(let g=u+2;g<u+n;++g)a[h++]=i[g]}return a&&a.length!=h&&(a.length=h),a}function Ud(i,e,t,n,r,s,o){o=o||[];let a=0;for(let l=e;l<t;l+=n){o[a++]=i[l]+r,o[a++]=i[l+1]+s;for(let c=l+2;c<l+n;++c)o[a++]=i[c]}return o&&o.length!=a&&(o.length=a),o}const tl=Gi();class Nd extends yn{constructor(){super(),this.extent_=ci(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=Du(function(e,t,n){if(!n)return this.getSimplifiedGeometry(t);const r=this.clone();return r.applyTransform(n),r.getSimplifiedGeometry(t)})}simplifyTransformed(e,t){return this.simplifyTransformedInternal(this.getRevision(),e,t)}clone(){return $e()}closestPointXY(e,t,n,r){return $e()}containsXY(e,t){const n=this.getClosestPoint([e,t]);return n[0]===e&&n[1]===t}getClosestPoint(e,t){return t=t||[NaN,NaN],this.closestPointXY(e[0],e[1],t,1/0),t}intersectsCoordinate(e){return this.containsXY(e[0],e[1])}computeExtent(e){return $e()}getExtent(e){if(this.extentRevision_!=this.getRevision()){const t=this.computeExtent(this.extent_);(isNaN(t[0])||isNaN(t[1]))&&bs(t),this.extentRevision_=this.getRevision()}return td(this.extent_,e)}rotate(e,t){$e()}scale(e,t,n){$e()}simplify(e){return this.getSimplifiedGeometry(e*e)}getSimplifiedGeometry(e){return $e()}getType(){return $e()}applyTransform(e){$e()}intersectsExtent(e){return $e()}translate(e,t){$e()}transform(e,t){const n=Wt(e),r=n.getUnits()=="tile-pixels"?function(s,o,a){const l=n.getExtent(),c=n.getWorldExtent(),h=rn(c)/rn(l);return mr(tl,c[0],c[3],h,-h,0,0,0),Pd(s,0,s.length,a,tl,o),vr(n,t)(s,o,a)}:vr(n,t);return this.applyTransform(r),this}}const Fd=Nd;class Od extends Fd{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates=null}computeExtent(e){return $u(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinates(){return $e()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;const t=this.getSimplifiedGeometryInternal(e);return t.getFlatCoordinates().length<this.flatCoordinates.length?t:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getSimplifiedGeometryInternal(e){return this}getStride(){return this.stride}setFlatCoordinates(e,t){this.stride=nl(e),this.layout=e,this.flatCoordinates=t}setCoordinates(e,t){$e()}setLayout(e,t,n){let r;if(e)r=nl(e);else{for(let s=0;s<n;++s)if(t.length===0){this.layout="XY",this.stride=2;return}else t=t[0];r=t.length,e=zd(r)}this.layout=e,this.stride=r}applyTransform(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())}rotate(e,t){const n=this.getFlatCoordinates();if(n){const r=this.getStride();Id(n,0,n.length,r,e,t,n),this.changed()}}scale(e,t,n){t===void 0&&(t=e),n||(n=gr(this.getExtent()));const r=this.getFlatCoordinates();if(r){const s=this.getStride();Dd(r,0,r.length,s,e,t,n,r),this.changed()}}translate(e,t){const n=this.getFlatCoordinates();if(n){const r=this.getStride();Ud(n,0,n.length,r,e,t,n),this.changed()}}}function zd(i){let e;return i==2?e="XY":i==3?e="XYZ":i==4&&(e="XYZM"),e}function nl(i){let e;return i=="XY"?e=2:i=="XYZ"||i=="XYM"?e=3:i=="XYZM"&&(e=4),e}const _a=Od;function il(i,e,t,n,r,s,o){const a=i[e],l=i[e+1],c=i[t]-a,h=i[t+1]-l;let u;if(c===0&&h===0)u=e;else{const d=((r-a)*c+(s-l)*h)/(c*c+h*h);if(d>1)u=t;else if(d>0){for(let m=0;m<n;++m)o[m]=gd(i[e+m],i[t+m],d);o.length=n;return}else u=e}for(let d=0;d<n;++d)o[d]=i[u+d];o.length=n}function fh(i,e,t,n,r){let s=i[e],o=i[e+1];for(e+=n;e<t;e+=n){const a=i[e],l=i[e+1],c=Vi(s,o,a,l);c>r&&(r=c),s=a,o=l}return r}function Bd(i,e,t,n,r){for(let s=0,o=t.length;s<o;++s){const a=t[s];r=fh(i,e,a,n,r),e=a}return r}function ph(i,e,t,n,r,s,o,a,l,c,h){if(e==t)return c;let u,d;if(r===0)if(d=Vi(o,a,i[e],i[e+1]),d<c){for(u=0;u<n;++u)l[u]=i[e+u];return l.length=n,d}else return c;h=h||[NaN,NaN];let m=e+n;for(;m<t;)if(il(i,m-n,m,n,o,a,h),d=Vi(o,a,h[0],h[1]),d<c){for(c=d,u=0;u<n;++u)l[u]=h[u];l.length=n,m+=n}else m+=n*Math.max((Math.sqrt(d)-Math.sqrt(c))/r|0,1);if(s&&(il(i,t-n,e,n,o,a,h),d=Vi(o,a,h[0],h[1]),d<c)){for(c=d,u=0;u<n;++u)l[u]=h[u];l.length=n}return c}function Gd(i,e,t,n,r,s,o,a,l,c,h){h=h||[NaN,NaN];for(let u=0,d=t.length;u<d;++u){const m=t[u];c=ph(i,e,m,n,r,s,o,a,l,c,h),e=m}return c}function Hd(i,e,t,n){for(let r=0,s=t.length;r<s;++r)i[e++]=t[r];return e}function mh(i,e,t,n){for(let r=0,s=t.length;r<s;++r){const o=t[r];for(let a=0;a<n;++a)i[e++]=o[a]}return e}function Vd(i,e,t,n,r){r=r||[];let s=0;for(let o=0,a=t.length;o<a;++o){const l=mh(i,e,t[o],n);r[s++]=l,e=l}return r.length=s,r}function kd(i,e,t,n,r,s,o){const a=(t-e)/n;if(a<3){for(;e<t;e+=n)s[o++]=i[e],s[o++]=i[e+1];return o}const l=new Array(a);l[0]=1,l[a-1]=1;const c=[e,t-n];let h=0;for(;c.length>0;){const u=c.pop(),d=c.pop();let m=0;const g=i[d],_=i[d+1],p=i[u],f=i[u+1];for(let y=d+n;y<u;y+=n){const v=i[y],x=i[y+1],A=pd(v,x,g,_,p,f);A>m&&(h=y,m=A)}m>r&&(l[(h-e)/n]=1,d+n<h&&c.push(d,h),h+n<u&&c.push(h,u))}for(let u=0;u<a;++u)l[u]&&(s[o++]=i[e+u*n],s[o++]=i[e+u*n+1]);return o}function di(i,e){return e*Math.round(i/e)}function Wd(i,e,t,n,r,s,o){if(e==t)return o;let a=di(i[e],r),l=di(i[e+1],r);e+=n,s[o++]=a,s[o++]=l;let c,h;do if(c=di(i[e],r),h=di(i[e+1],r),e+=n,e==t)return s[o++]=c,s[o++]=h,o;while(c==a&&h==l);for(;e<t;){const u=di(i[e],r),d=di(i[e+1],r);if(e+=n,u==c&&d==h)continue;const m=c-a,g=h-l,_=u-a,p=d-l;if(m*p==g*_&&(m<0&&_<m||m==_||m>0&&_>m)&&(g<0&&p<g||g==p||g>0&&p>g)){c=u,h=d;continue}s[o++]=c,s[o++]=h,a=c,l=h,c=u,h=d}return s[o++]=c,s[o++]=h,o}function Xd(i,e,t,n,r,s,o,a){for(let l=0,c=t.length;l<c;++l){const h=t[l];o=Wd(i,e,h,n,r,s,o),a.push(o),e=h}return o}function gh(i,e,t,n,r){r=r!==void 0?r:[];let s=0;for(let o=e;o<t;o+=n)r[s++]=i.slice(o,o+n);return r.length=s,r}function Yd(i,e,t,n,r){r=r!==void 0?r:[];let s=0;for(let o=0,a=t.length;o<a;++o){const l=t[o];r[s++]=gh(i,e,l,n,r[s]),e=l}return r.length=s,r}function _h(i,e,t,n){let r=0,s=i[t-n],o=i[t-n+1];for(;e<t;e+=n){const a=i[e],l=i[e+1];r+=o*a-s*l,s=a,o=l}return r/2}function qd(i,e,t,n){let r=0;for(let s=0,o=t.length;s<o;++s){const a=t[s];r+=_h(i,e,a,n),e=a}return r}class vs extends _a{constructor(e,t){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}clone(){return new vs(this.flatCoordinates.slice(),this.layout)}closestPointXY(e,t,n,r){return r<sh(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(fh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),ph(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,t,n,r))}getArea(){return _h(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return gh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(e){const t=[];return t.length=kd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t,0),new vs(t,"XY")}getType(){return"LinearRing"}intersectsExtent(e){return!1}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=mh(this.flatCoordinates,0,e,this.stride),this.changed()}}const rl=vs;class va extends _a{constructor(e,t){super(),this.setCoordinates(e,t)}clone(){const e=new va(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,t,n,r){const s=this.flatCoordinates,o=Vi(e,t,s[0],s[1]);if(o<r){const a=this.stride;for(let l=0;l<a;++l)n[l]=s[l];return n.length=a,o}else return r}getCoordinates(){return this.flatCoordinates?this.flatCoordinates.slice():[]}computeExtent(e){return ju(this.flatCoordinates,e)}getType(){return"Point"}intersectsExtent(e){return oh(e,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(e,t){this.setLayout(t,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Hd(this.flatCoordinates,0,e,this.stride),this.changed()}}const Kd=va;function Zd(i,e,t,n,r){return!lh(r,function(o){return!Qn(i,e,t,n,o[0],o[1])})}function Qn(i,e,t,n,r,s){let o=0,a=i[t-n],l=i[t-n+1];for(;e<t;e+=n){const c=i[e],h=i[e+1];l<=s?h>s&&(c-a)*(s-l)-(r-a)*(h-l)>0&&o++:h<=s&&(c-a)*(s-l)-(r-a)*(h-l)<0&&o--,a=c,l=h}return o!==0}function vh(i,e,t,n,r,s){if(t.length===0||!Qn(i,e,t[0],n,r,s))return!1;for(let o=1,a=t.length;o<a;++o)if(Qn(i,t[o-1],t[o],n,r,s))return!1;return!0}function jd(i,e,t,n,r,s,o){let a,l,c,h,u,d,m;const g=r[s+1],_=[];for(let y=0,v=t.length;y<v;++y){const x=t[y];for(h=i[x-n],d=i[x-n+1],a=e;a<x;a+=n)u=i[a],m=i[a+1],(g<=d&&m<=g||d<=g&&g<=m)&&(c=(g-d)/(m-d)*(u-h)+h,_.push(c)),h=u,d=m}let p=NaN,f=-1/0;for(_.sort(oa),h=_[0],a=1,l=_.length;a<l;++a){u=_[a];const y=Math.abs(u-h);y>f&&(c=(h+u)/2,vh(i,e,t,n,c,g)&&(p=c,f=y)),h=u}return isNaN(p)&&(p=r[s]),o?(o.push(p,g,f),o):[p,g,f]}function $d(i,e,t,n,r){let s;for(e+=n;e<t;e+=n)if(s=r(i.slice(e-n,e),i.slice(e,e+n)),s)return s;return!1}function xh(i,e,t,n,r){const s=ah(ci(),i,e,t,n);return Ps(r,s)?Zu(r,s)||s[0]>=r[0]&&s[2]<=r[2]||s[1]>=r[1]&&s[3]<=r[3]?!0:$d(i,e,t,n,function(o,a){return nd(r,o,a)}):!1}function Eh(i,e,t,n,r){return!!(xh(i,e,t,n,r)||Qn(i,e,t,n,r[0],r[1])||Qn(i,e,t,n,r[0],r[3])||Qn(i,e,t,n,r[2],r[1])||Qn(i,e,t,n,r[2],r[3]))}function Jd(i,e,t,n,r){if(!Eh(i,e,t[0],n,r))return!1;if(t.length===1)return!0;for(let s=1,o=t.length;s<o;++s)if(Zd(i,t[s-1],t[s],n,r)&&!xh(i,t[s-1],t[s],n,r))return!1;return!0}function Qd(i,e,t,n){for(;e<t-n;){for(let r=0;r<n;++r){const s=i[e+r];i[e+r]=i[t-n+r],i[t-n+r]=s}e+=n,t-=n}}function Mh(i,e,t,n){let r=0,s=i[t-n],o=i[t-n+1];for(;e<t;e+=n){const a=i[e],l=i[e+1];r+=(a-s)*(l+o),s=a,o=l}return r===0?void 0:r>0}function ef(i,e,t,n,r){r=r!==void 0?r:!1;for(let s=0,o=t.length;s<o;++s){const a=t[s],l=Mh(i,e,a,n);if(s===0){if(r&&l||!r&&!l)return!1}else if(r&&!l||!r&&l)return!1;e=a}return!0}function sl(i,e,t,n,r){r=r!==void 0?r:!1;for(let s=0,o=t.length;s<o;++s){const a=t[s],l=Mh(i,e,a,n);(s===0?r&&l||!r&&!l:r&&!l||!r&&l)&&Qd(i,e,a,n),e=a}return e}class xr extends _a{constructor(e,t,n){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,t!==void 0&&n?(this.setFlatCoordinates(t,e),this.ends_=n):this.setCoordinates(e,t)}appendLinearRing(e){this.flatCoordinates?Pu(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const e=new xr(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,t,n,r){return r<sh(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Bd(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Gd(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,t,n,r))}containsXY(e,t){return vh(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,t)}getArea(){return qd(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(e){let t;return e!==void 0?(t=this.getOrientedFlatCoordinates().slice(),sl(t,0,this.ends_,this.stride,e)):t=this.flatCoordinates,Yd(t,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){const e=gr(this.getExtent());this.flatInteriorPoint_=jd(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new Kd(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(e){return e<0||this.ends_.length<=e?null:new rl(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLinearRings(){const e=this.layout,t=this.flatCoordinates,n=this.ends_,r=[];let s=0;for(let o=0,a=n.length;o<a;++o){const l=n[o],c=new rl(t.slice(s,l),e);r.push(c),s=l}return r}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const e=this.flatCoordinates;ef(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=sl(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){const t=[],n=[];return t.length=Xd(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(e),t,0,n),new xr(t,"XY",n)}getType(){return"Polygon"}intersectsExtent(e){return Jd(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||(this.flatCoordinates=[]);const n=Vd(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()}}function ol(i){const e=i[0],t=i[1],n=i[2],r=i[3],s=[e,t,e,r,n,r,n,t,e,t];return new xr(s,"XY",[s.length])}const Nn={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},ir={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};function al(i){return i[0]>0&&i[1]>0}function tf(i,e,t){return t===void 0&&(t=[0,0]),t[0]=i[0]*e+.5|0,t[1]=i[1]*e+.5|0,t}function _n(i,e){return Array.isArray(i)?i:(e===void 0?e=[i,i]:(e[0]=i,e[1]=i),e)}const nf=/^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,rf=/^([a-z]*)$|^hsla?\(.*\)$/i;function sf(i){return typeof i=="string"?i:cf(i)}function of(i){const e=document.createElement("div");if(e.style.color=i,e.style.color!==""){document.body.appendChild(e);const t=getComputedStyle(e).color;return document.body.removeChild(e),t}else return""}const af=function(){const e={};let t=0;return function(n){let r;if(e.hasOwnProperty(n))r=e[n];else{if(t>=1024){let s=0;for(const o in e)s++&3||(delete e[o],--t)}r=lf(n),e[n]=r,++t}return r}}();function ll(i){return Array.isArray(i)?i:af(i)}function lf(i){let e,t,n,r,s;if(rf.exec(i)&&(i=of(i)),nf.exec(i)){const o=i.length-1;let a;o<=4?a=1:a=2;const l=o===4||o===8;e=parseInt(i.substr(1+0*a,a),16),t=parseInt(i.substr(1+1*a,a),16),n=parseInt(i.substr(1+2*a,a),16),l?r=parseInt(i.substr(1+3*a,a),16):r=255,a==1&&(e=(e<<4)+e,t=(t<<4)+t,n=(n<<4)+n,l&&(r=(r<<4)+r)),s=[e,t,n,r/255]}else i.startsWith("rgba(")?(s=i.slice(5,-1).split(",").map(Number),cl(s)):i.startsWith("rgb(")?(s=i.slice(4,-1).split(",").map(Number),s.push(1),cl(s)):We(!1,14);return s}function cl(i){return i[0]=gt(i[0]+.5|0,0,255),i[1]=gt(i[1]+.5|0,0,255),i[2]=gt(i[2]+.5|0,0,255),i[3]=gt(i[3],0,1),i}function cf(i){let e=i[0];e!=(e|0)&&(e=e+.5|0);let t=i[1];t!=(t|0)&&(t=t+.5|0);let n=i[2];n!=(n|0)&&(n=n+.5|0);const r=i[3]===void 0?1:Math.round(i[3]*100)/100;return"rgba("+e+","+t+","+n+","+r+")"}function xs(i,e,t,n){let r;return t&&t.length?r=t.shift():nh?r=new OffscreenCanvas(i||300,e||300):r=document.createElement("canvas"),i&&(r.width=i),e&&(r.height=e),r.getContext("2d",n)}function hf(i){const e=i.canvas;e.width=1,e.height=1,i.clearRect(0,0,1,1)}function hl(i,e){const t=e.parentNode;t&&t.replaceChild(i,e)}function Ho(i){return i&&i.parentNode?i.parentNode.removeChild(i):null}function uf(i){for(;i.lastChild;)i.removeChild(i.lastChild)}function df(i,e){const t=i.childNodes;for(let n=0;;++n){const r=t[n],s=e[n];if(!r&&!s)break;if(r!==s){if(!r){i.appendChild(s);continue}if(!s){i.removeChild(r),--n;continue}i.insertBefore(s,r)}}}const Nr="ol-hidden",Is="ol-unselectable",xa="ol-control",ul="ol-collapsed",ff=new yn,ke={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};class pf extends yn{constructor(e){super(),this.on,this.once,this.un,this.background_=e.background;const t=Object.assign({},e);typeof e.properties=="object"&&(delete t.properties,Object.assign(t,e.properties)),t[ke.OPACITY]=e.opacity!==void 0?e.opacity:1,We(typeof t[ke.OPACITY]=="number",64),t[ke.VISIBLE]=e.visible!==void 0?e.visible:!0,t[ke.Z_INDEX]=e.zIndex,t[ke.MAX_RESOLUTION]=e.maxResolution!==void 0?e.maxResolution:1/0,t[ke.MIN_RESOLUTION]=e.minResolution!==void 0?e.minResolution:0,t[ke.MIN_ZOOM]=e.minZoom!==void 0?e.minZoom:-1/0,t[ke.MAX_ZOOM]=e.maxZoom!==void 0?e.maxZoom:1/0,this.className_=t.className!==void 0?t.className:"ol-layer",delete t.className,this.setProperties(t),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(e){const t=this.state_||{layer:this,managed:e===void 0?!0:e},n=this.getZIndex();return t.opacity=gt(Math.round(this.getOpacity()*100)/100,0,1),t.visible=this.getVisible(),t.extent=this.getExtent(),t.zIndex=n===void 0&&!t.managed?1/0:n,t.maxResolution=this.getMaxResolution(),t.minResolution=Math.max(this.getMinResolution(),0),t.minZoom=this.getMinZoom(),t.maxZoom=this.getMaxZoom(),this.state_=t,t}getLayersArray(e){return $e()}getLayerStatesArray(e){return $e()}getExtent(){return this.get(ke.EXTENT)}getMaxResolution(){return this.get(ke.MAX_RESOLUTION)}getMinResolution(){return this.get(ke.MIN_RESOLUTION)}getMinZoom(){return this.get(ke.MIN_ZOOM)}getMaxZoom(){return this.get(ke.MAX_ZOOM)}getOpacity(){return this.get(ke.OPACITY)}getSourceState(){return $e()}getVisible(){return this.get(ke.VISIBLE)}getZIndex(){return this.get(ke.Z_INDEX)}setBackground(e){this.background_=e,this.changed()}setExtent(e){this.set(ke.EXTENT,e)}setMaxResolution(e){this.set(ke.MAX_RESOLUTION,e)}setMinResolution(e){this.set(ke.MIN_RESOLUTION,e)}setMaxZoom(e){this.set(ke.MAX_ZOOM,e)}setMinZoom(e){this.set(ke.MIN_ZOOM,e)}setOpacity(e){We(typeof e=="number",64),this.set(ke.OPACITY,e)}setVisible(e){this.set(ke.VISIBLE,e)}setZIndex(e){this.set(ke.Z_INDEX,e)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}}const yh=pf;class mf extends yh{constructor(e){const t=Object.assign({},e);delete t.source,super(t),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.rendered=!1,e.render&&(this.render=e.render),e.map&&this.setMap(e.map),this.addChangeListener(ke.SOURCE,this.handleSourcePropertyChange_);const n=e.source?e.source:null;this.setSource(n)}getLayersArray(e){return e=e||[],e.push(this),e}getLayerStatesArray(e){return e=e||[],e.push(this.getLayerState()),e}getSource(){return this.get(ke.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){const e=this.getSource();return e?e.getState():"undefined"}handleSourceChange_(){this.changed()}handleSourcePropertyChange_(){this.sourceChangeKey_&&(tt(this.sourceChangeKey_),this.sourceChangeKey_=null);const e=this.getSource();e&&(this.sourceChangeKey_=Ve(e,Oe.CHANGE,this.handleSourceChange_,this)),this.changed()}getFeatures(e){return this.renderer_?this.renderer_.getFeatures(e):new Promise(t=>t([]))}getData(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)}render(e,t){const n=this.getRenderer();if(n.prepareFrame(e))return this.rendered=!0,n.renderFrame(e,t)}unrender(){this.rendered=!1}setMapInternal(e){e||this.unrender(),this.set(ke.MAP,e)}getMapInternal(){return this.get(ke.MAP)}setMap(e){this.mapPrecomposeKey_&&(tt(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),e||this.changed(),this.mapRenderKey_&&(tt(this.mapRenderKey_),this.mapRenderKey_=null),e&&(this.mapPrecomposeKey_=Ve(e,Nn.PRECOMPOSE,function(t){const r=t.frameState.layerStatesArray,s=this.getLayerState(!1);We(!r.some(function(o){return o.layer===s.layer}),67),r.push(s)},this),this.mapRenderKey_=Ve(this,Oe.CHANGE,e.render,e),this.changed())}setSource(e){this.set(ke.SOURCE,e)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}disposeInternal(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),super.disposeInternal()}}function Ea(i,e){if(!i.visible)return!1;const t=e.resolution;if(t<i.minResolution||t>=i.maxResolution)return!1;const n=e.zoom;return n>i.minZoom&&n<=i.maxZoom}const Ma=mf;class gf{constructor(){this.cache_={},this.cacheSize_=0,this.maxCacheSize_=32}clear(){this.cache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let e=0;for(const t in this.cache_){const n=this.cache_[t];!(e++&3)&&!n.hasListener()&&(delete this.cache_[t],--this.cacheSize_)}}}get(e,t,n){const r=dl(e,t,n);return r in this.cache_?this.cache_[r]:null}set(e,t,n,r){const s=dl(e,t,n);this.cache_[s]=r,++this.cacheSize_}setSize(e){this.maxCacheSize_=e,this.expire()}}function dl(i,e,t){const n=t?sf(t):"null";return e+":"+i+":"+n}const Sh=new gf;function _f(i,e,t){const n=i;let r=!0,s=!1,o=!1;const a=[ms(n,Oe.LOAD,function(){o=!0,s||e()})];return n.src&&Wu?(s=!0,n.decode().then(function(){r&&e()}).catch(function(l){r&&(o?e():t())})):a.push(ms(n,Oe.ERROR,t)),function(){r=!1,a.forEach(tt)}}class vf extends eh{constructor(e){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=e,this.declutterExecutorGroup=null}getFeatures(e){return $e()}getData(e){return null}prepareFrame(e){return $e()}renderFrame(e,t){return $e()}loadedTileCallback(e,t,n){e[t]||(e[t]={}),e[t][n.tileCoord.toString()]=n}createLoadedTileFinder(e,t,n){return function(r,s){const o=this.loadedTileCallback.bind(this,n,r);return e.forEachLoadedTile(t,r,s,o)}.bind(this)}forEachFeatureAtCoordinate(e,t,n,r,s){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(e){e.target.getState()===ir.LOADED&&this.renderIfReadyAndVisible()}loadImage(e){let t=e.getState();return t!=ir.LOADED&&t!=ir.ERROR&&e.addEventListener(Oe.CHANGE,this.boundHandleImageChange_),t==ir.IDLE&&(e.load(),t=e.getState()),t==ir.LOADED}renderIfReadyAndVisible(){const e=this.getLayer();e&&e.getVisible()&&e.getSourceState()==="ready"&&e.changed()}disposeInternal(){delete this.layer_,super.disposeInternal()}}const xf=vf;class Ef extends Hn{constructor(e,t,n,r){super(e),this.inversePixelTransform=t,this.frameState=n,this.context=r}}const Th=Ef;let Ii=null;function Mf(){const i=document.createElement("canvas");i.width=1,i.height=1,Ii=i.getContext("2d")}class yf extends xf{constructor(e){super(e),this.container=null,this.renderedResolution,this.tempTransform=Gi(),this.pixelTransform=Gi(),this.inversePixelTransform=Gi(),this.context=null,this.containerReused=!1,this.pixelContext_=null,this.frameState=null}getImageData(e,t,n){Ii||Mf(),Ii.clearRect(0,0,1,1);let r;try{Ii.drawImage(e,t,n,1,1,0,0,1,1),r=Ii.getImageData(0,0,1,1).data}catch{return Ii=null,null}return r}getBackground(e){let n=this.getLayer().getBackground();return typeof n=="function"&&(n=n(e.viewState.resolution)),n||void 0}useContainer(e,t,n){const r=this.getLayer().getClassName();let s,o;if(e&&e.className===r&&(!n||e&&e.style.backgroundColor&&la(ll(e.style.backgroundColor),ll(n)))){const a=e.firstElementChild;a instanceof HTMLCanvasElement&&(o=a.getContext("2d"))}if(o&&o.canvas.style.transform===t?(this.container=e,this.context=o,this.containerReused=!0):this.containerReused&&(this.container=null,this.context=null,this.containerReused=!1),!this.container){s=document.createElement("div"),s.className=r;let a=s.style;a.position="absolute",a.width="100%",a.height="100%",o=xs();const l=o.canvas;s.appendChild(l),a=l.style,a.position="absolute",a.left="0",a.transformOrigin="top left",this.container=s,this.context=o}!this.containerReused&&n&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=n)}clipUnrotated(e,t,n){const r=hi(n),s=Ls(n),o=Cs(n),a=ws(n);Bt(t.coordinateToPixelTransform,r),Bt(t.coordinateToPixelTransform,s),Bt(t.coordinateToPixelTransform,o),Bt(t.coordinateToPixelTransform,a);const l=this.inversePixelTransform;Bt(l,r),Bt(l,s),Bt(l,o),Bt(l,a),e.save(),e.beginPath(),e.moveTo(Math.round(r[0]),Math.round(r[1])),e.lineTo(Math.round(s[0]),Math.round(s[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.lineTo(Math.round(a[0]),Math.round(a[1])),e.clip()}dispatchRenderEvent_(e,t,n){const r=this.getLayer();if(r.hasListener(e)){const s=new Th(e,this.inversePixelTransform,n,t);r.dispatchEvent(s)}}preRender(e,t){this.frameState=t,this.dispatchRenderEvent_(Nn.PRERENDER,e,t)}postRender(e,t){this.dispatchRenderEvent_(Nn.POSTRENDER,e,t)}getRenderTransform(e,t,n,r,s,o,a){const l=s/2,c=o/2,h=r/t,u=-h,d=-e[0]+a,m=-e[1];return mr(this.tempTransform,l,c,h,u,-n,d,m)}disposeInternal(){delete this.frameState,super.disposeInternal()}}const Sf=yf,Gt={ANIMATING:0,INTERACTING:1};let Tf=class extends yn{constructor(e){super(),this.projection=Wt(e.projection),this.attributions_=fl(e.attributions),this.attributionsCollapsible_=e.attributionsCollapsible!==void 0?e.attributionsCollapsible:!0,this.loading=!1,this.state_=e.state!==void 0?e.state:"ready",this.wrapX_=e.wrapX!==void 0?e.wrapX:!1,this.interpolate_=!!e.interpolate,this.viewResolver=null,this.viewRejector=null;const t=this;this.viewPromise_=new Promise(function(n,r){t.viewResolver=n,t.viewRejector=r})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(){return $e()}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(e){this.attributions_=fl(e),this.changed()}setState(e){this.state_=e,this.changed()}};function fl(i){return i?Array.isArray(i)?function(e){return i}:typeof i=="function"?i:function(e){return[i]}:null}const Af=Tf,_e={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};function Ah(i){return Math.pow(i,3)}function Ji(i){return 1-Ah(1-i)}function Rf(i){return 3*i*i-2*i*i*i}function bf(i){return i}class wf extends ca{constructor(e,t,n){super(),n=n||{},this.tileCoord=e,this.state=t,this.interimTile=null,this.key="",this.transition_=n.transition===void 0?250:n.transition,this.transitionStarts_={},this.interpolate=!!n.interpolate}changed(){this.dispatchEvent(Oe.CHANGE)}release(){this.state===_e.ERROR&&this.setState(_e.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getInterimTile(){if(!this.interimTile)return this;let e=this.interimTile;do{if(e.getState()==_e.LOADED)return this.transition_=0,e;e=e.interimTile}while(e);return this}refreshInterimChain(){if(!this.interimTile)return;let e=this.interimTile,t=this;do{if(e.getState()==_e.LOADED){e.interimTile=null;break}else e.getState()==_e.LOADING?t=e:e.getState()==_e.IDLE?t.interimTile=e.interimTile:t=e;e=t.interimTile}while(e)}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(e){if(this.state!==_e.ERROR&&this.state>e)throw new Error("Tile load sequence violation");this.state=e,this.changed()}load(){$e()}getAlpha(e,t){if(!this.transition_)return 1;let n=this.transitionStarts_[e];if(!n)n=t,this.transitionStarts_[e]=n;else if(n===-1)return 1;const r=t-n+1e3/60;return r>=this.transition_?1:Ah(r/this.transition_)}inTransition(e){return this.transition_?this.transitionStarts_[e]!==-1:!1}endTransition(e){this.transition_&&(this.transitionStarts_[e]=-1)}}const Rh=wf;class Cf extends Rh{constructor(e,t,n,r,s,o){super(e,t,o),this.crossOrigin_=r,this.src_=n,this.key=n,this.image_=new Image,r!==null&&(this.image_.crossOrigin=r),this.unlisten_=null,this.tileLoadFunction_=s}getImage(){return this.image_}setImage(e){this.image_=e,this.state=_e.LOADED,this.unlistenImage_(),this.changed()}handleImageError_(){this.state=_e.ERROR,this.unlistenImage_(),this.image_=Lf(),this.changed()}handleImageLoad_(){const e=this.image_;e.naturalWidth&&e.naturalHeight?this.state=_e.LOADED:this.state=_e.EMPTY,this.unlistenImage_(),this.changed()}load(){this.state==_e.ERROR&&(this.state=_e.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==_e.IDLE&&(this.state=_e.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=_f(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}}function Lf(){const i=xs(1,1);return i.fillStyle="rgba(0,0,0,0)",i.fillRect(0,0,1,1),i.canvas}const bh=Cf;class Pf{constructor(e,t,n){this.decay_=e,this.minVelocity_=t,this.delay_=n,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(e,t){this.points_.push(e,t,Date.now())}end(){if(this.points_.length<6)return!1;const e=Date.now()-this.delay_,t=this.points_.length-3;if(this.points_[t+2]<e)return!1;let n=t-3;for(;n>0&&this.points_[n+2]>e;)n-=3;const r=this.points_[t+2]-this.points_[n+2];if(r<1e3/60)return!1;const s=this.points_[t]-this.points_[n],o=this.points_[t+1]-this.points_[n+1];return this.angle_=Math.atan2(o,s),this.initialVelocity_=Math.sqrt(s*s+o*o)/r,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}}const If=Pf;class Df extends sa{constructor(e){super(),this.map_=e}dispatchRenderEvent(e,t){$e()}calculateMatrices2D(e){const t=e.viewState,n=e.coordinateToPixelTransform,r=e.pixelToCoordinateTransform;mr(n,e.size[0]/2,e.size[1]/2,1/t.resolution,-1/t.resolution,-t.rotation,-t.center[0],-t.center[1]),rh(r,n)}forEachFeatureAtCoordinate(e,t,n,r,s,o,a,l){let c;const h=t.viewState;function u(x,A,w,b){return s.call(o,A,x?w:null,b)}const d=h.projection,m=xd(e.slice(),d),g=[[0,0]];if(d.canWrapX()&&r){const x=d.getExtent(),A=mt(x);g.push([-A,0],[A,0])}const _=t.layerStatesArray,p=_.length,f=[],y=[];for(let x=0;x<g.length;x++)for(let A=p-1;A>=0;--A){const w=_[A],b=w.layer;if(b.hasRenderer()&&Ea(w,h)&&a.call(l,b)){const U=b.getRenderer(),M=b.getSource();if(U&&M){const R=M.getWrapX()?m:e,Z=u.bind(null,w.managed);y[0]=R[0]+g[x][0],y[1]=R[1]+g[x][1],c=U.forEachFeatureAtCoordinate(y,t,n,Z,f)}if(c)return c}}if(f.length===0)return;const v=1/f.length;return f.forEach((x,A)=>x.distanceSq+=A*v),f.sort((x,A)=>x.distanceSq-A.distanceSq),f.some(x=>c=x.callback(x.feature,x.layer,x.geometry)),c}hasFeatureAtCoordinate(e,t,n,r,s,o){return this.forEachFeatureAtCoordinate(e,t,n,r,ps,this,s,o)!==void 0}getMap(){return this.map_}renderFrame(e){$e()}scheduleExpireIconCache(e){Sh.canExpireCache()&&e.postRenderFunctions.push(Uf)}}function Uf(i,e){Sh.expire()}const Nf=Df;class Ff extends Nf{constructor(e){super(e),this.fontChangeListenerKey_=Ve(ff,fr.PROPERTYCHANGE,e.redrawText.bind(e)),this.element_=document.createElement("div");const t=this.element_.style;t.position="absolute",t.width="100%",t.height="100%",t.zIndex="0",this.element_.className=Is+" ol-layers";const n=e.getViewport();n.insertBefore(this.element_,n.firstChild||null),this.children_=[],this.renderedVisible_=!0}dispatchRenderEvent(e,t){const n=this.getMap();if(n.hasListener(e)){const r=new Th(e,void 0,t);n.dispatchEvent(r)}}disposeInternal(){tt(this.fontChangeListenerKey_),this.element_.parentNode.removeChild(this.element_),super.disposeInternal()}renderFrame(e){if(!e){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(e),this.dispatchRenderEvent(Nn.PRECOMPOSE,e);const t=e.layerStatesArray.sort(function(o,a){return o.zIndex-a.zIndex}),n=e.viewState;this.children_.length=0;const r=[];let s=null;for(let o=0,a=t.length;o<a;++o){const l=t[o];e.layerIndex=o;const c=l.layer,h=c.getSourceState();if(!Ea(l,n)||h!="ready"&&h!="undefined"){c.unrender();continue}const u=c.render(e,s);u&&(u!==s&&(this.children_.push(u),s=u),"getDeclutter"in c&&r.push(c))}for(let o=r.length-1;o>=0;--o)r[o].renderDeclutter(e);df(this.element_,this.children_),this.dispatchRenderEvent(Nn.POSTCOMPOSE,e),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(e)}}const Of=Ff;class Pn extends Hn{constructor(e,t){super(e),this.layer=t}}const Ws={LAYERS:"layers"};class ya extends yh{constructor(e){e=e||{};const t=Object.assign({},e);delete t.layers;let n=e.layers;super(t),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(Ws.LAYERS,this.handleLayersChanged_),n?Array.isArray(n)?n=new xn(n.slice(),{unique:!0}):We(typeof n.getArray=="function",43):n=new xn(void 0,{unique:!0}),this.setLayers(n)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(tt),this.layersListenerKeys_.length=0;const e=this.getLayers();this.layersListenerKeys_.push(Ve(e,Ht.ADD,this.handleLayersAdd_,this),Ve(e,Ht.REMOVE,this.handleLayersRemove_,this));for(const n in this.listenerKeys_)this.listenerKeys_[n].forEach(tt);As(this.listenerKeys_);const t=e.getArray();for(let n=0,r=t.length;n<r;n++){const s=t[n];this.registerLayerListeners_(s),this.dispatchEvent(new Pn("addlayer",s))}this.changed()}registerLayerListeners_(e){const t=[Ve(e,fr.PROPERTYCHANGE,this.handleLayerChange_,this),Ve(e,Oe.CHANGE,this.handleLayerChange_,this)];e instanceof ya&&t.push(Ve(e,"addlayer",this.handleLayerGroupAdd_,this),Ve(e,"removelayer",this.handleLayerGroupRemove_,this)),this.listenerKeys_[wt(e)]=t}handleLayerGroupAdd_(e){this.dispatchEvent(new Pn("addlayer",e.layer))}handleLayerGroupRemove_(e){this.dispatchEvent(new Pn("removelayer",e.layer))}handleLayersAdd_(e){const t=e.element;this.registerLayerListeners_(t),this.dispatchEvent(new Pn("addlayer",t)),this.changed()}handleLayersRemove_(e){const t=e.element,n=wt(t);this.listenerKeys_[n].forEach(tt),delete this.listenerKeys_[n],this.dispatchEvent(new Pn("removelayer",t)),this.changed()}getLayers(){return this.get(Ws.LAYERS)}setLayers(e){const t=this.getLayers();if(t){const n=t.getArray();for(let r=0,s=n.length;r<s;++r)this.dispatchEvent(new Pn("removelayer",n[r]))}this.set(Ws.LAYERS,e)}getLayersArray(e){return e=e!==void 0?e:[],this.getLayers().forEach(function(t){t.getLayersArray(e)}),e}getLayerStatesArray(e){const t=e!==void 0?e:[],n=t.length;this.getLayers().forEach(function(o){o.getLayerStatesArray(t)});const r=this.getLayerState();let s=r.zIndex;!e&&r.zIndex===void 0&&(s=0);for(let o=n,a=t.length;o<a;o++){const l=t[o];l.opacity*=r.opacity,l.visible=l.visible&&r.visible,l.maxResolution=Math.min(l.maxResolution,r.maxResolution),l.minResolution=Math.max(l.minResolution,r.minResolution),l.minZoom=Math.max(l.minZoom,r.minZoom),l.maxZoom=Math.min(l.maxZoom,r.maxZoom),r.extent!==void 0&&(l.extent!==void 0?l.extent=hr(l.extent,r.extent):l.extent=r.extent),l.zIndex===void 0&&(l.zIndex=s)}return t}getSourceState(){return"ready"}}const Ds=ya;class zf extends Hn{constructor(e,t,n){super(e),this.map=t,this.frameState=n!==void 0?n:null}}const Di=zf;class Bf extends Di{constructor(e,t,n,r,s,o){super(e,t,s),this.originalEvent=n,this.pixel_=null,this.coordinate_=null,this.dragging=r!==void 0?r:!1,this.activePointers=o}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(e){this.pixel_=e}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(e){this.coordinate_=e}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}}const Cn=Bf,Qe={SINGLECLICK:"singleclick",CLICK:Oe.CLICK,DBLCLICK:Oe.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"},Vo={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"};class Gf extends ca{constructor(e,t){super(e),this.map_=e,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=t===void 0?1:t,this.down_=null;const n=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=n,this.pointerdownListenerKey_=Ve(n,Vo.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=Ve(n,Vo.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(Oe.TOUCHMOVE,this.boundHandleTouchMove_,ih?{passive:!1}:!1)}emulateClick_(e){let t=new Cn(Qe.CLICK,this.map_,e);this.dispatchEvent(t),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,t=new Cn(Qe.DBLCLICK,this.map_,e),this.dispatchEvent(t)):this.clickTimeoutId_=setTimeout(function(){this.clickTimeoutId_=void 0;const n=new Cn(Qe.SINGLECLICK,this.map_,e);this.dispatchEvent(n)}.bind(this),250)}updateActivePointers_(e){const t=e,n=t.pointerId;if(t.type==Qe.POINTERUP||t.type==Qe.POINTERCANCEL){delete this.trackedTouches_[n];for(const r in this.trackedTouches_)if(this.trackedTouches_[r].target!==t.target){delete this.trackedTouches_[r];break}}else(t.type==Qe.POINTERDOWN||t.type==Qe.POINTERMOVE)&&(this.trackedTouches_[n]=t);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(e){this.updateActivePointers_(e);const t=new Cn(Qe.POINTERUP,this.map_,e,void 0,void 0,this.activePointers_);this.dispatchEvent(t),this.emulateClicks_&&!t.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(e)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(tt),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(e){return e.button===0}handlePointerDown_(e){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(e);const t=new Cn(Qe.POINTERDOWN,this.map_,e,void 0,void 0,this.activePointers_);this.dispatchEvent(t),this.down_={};for(const n in e){const r=e[n];this.down_[n]=typeof r=="function"?pr:r}if(this.dragListenerKeys_.length===0){const n=this.map_.getOwnerDocument();this.dragListenerKeys_.push(Ve(n,Qe.POINTERMOVE,this.handlePointerMove_,this),Ve(n,Qe.POINTERUP,this.handlePointerUp_,this),Ve(this.element_,Qe.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==n&&this.dragListenerKeys_.push(Ve(this.element_.getRootNode(),Qe.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(e){if(this.isMoving_(e)){this.updateActivePointers_(e),this.dragging_=!0;const t=new Cn(Qe.POINTERDRAG,this.map_,e,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(t)}}relayMoveEvent_(e){this.originalPointerMoveEvent_=e;const t=!!(this.down_&&this.isMoving_(e));this.dispatchEvent(new Cn(Qe.POINTERMOVE,this.map_,e,t))}handleTouchMove_(e){const t=this.originalPointerMoveEvent_;(!t||t.defaultPrevented)&&(typeof e.cancelable!="boolean"||e.cancelable===!0)&&e.preventDefault()}isMoving_(e){return this.dragging_||Math.abs(e.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(e.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(tt(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(Oe.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(tt(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(tt),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}}const Hf=Gf,Ln={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"},yt={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"},Es=1/0;class Vf{constructor(e,t){this.priorityFunction_=e,this.keyFunction_=t,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,As(this.queuedElements_)}dequeue(){const e=this.elements_,t=this.priorities_,n=e[0];e.length==1?(e.length=0,t.length=0):(e[0]=e.pop(),t[0]=t.pop(),this.siftUp_(0));const r=this.keyFunction_(n);return delete this.queuedElements_[r],n}enqueue(e){We(!(this.keyFunction_(e)in this.queuedElements_),31);const t=this.priorityFunction_(e);return t!=Es?(this.elements_.push(e),this.priorities_.push(t),this.queuedElements_[this.keyFunction_(e)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(e){return e*2+1}getRightChildIndex_(e){return e*2+2}getParentIndex_(e){return e-1>>1}heapify_(){let e;for(e=(this.elements_.length>>1)-1;e>=0;e--)this.siftUp_(e)}isEmpty(){return this.elements_.length===0}isKeyQueued(e){return e in this.queuedElements_}isQueued(e){return this.isKeyQueued(this.keyFunction_(e))}siftUp_(e){const t=this.elements_,n=this.priorities_,r=t.length,s=t[e],o=n[e],a=e;for(;e<r>>1;){const l=this.getLeftChildIndex_(e),c=this.getRightChildIndex_(e),h=c<r&&n[c]<n[l]?c:l;t[e]=t[h],n[e]=n[h],e=h}t[e]=s,n[e]=o,this.siftDown_(a,e)}siftDown_(e,t){const n=this.elements_,r=this.priorities_,s=n[t],o=r[t];for(;t>e;){const a=this.getParentIndex_(t);if(r[a]>o)n[t]=n[a],r[t]=r[a],t=a;else break}n[t]=s,r[t]=o}reprioritize(){const e=this.priorityFunction_,t=this.elements_,n=this.priorities_;let r=0;const s=t.length;let o,a,l;for(a=0;a<s;++a)o=t[a],l=e(o),l==Es?delete this.queuedElements_[this.keyFunction_(o)]:(n[r]=l,t[r++]=o);t.length=r,n.length=r,this.heapify_()}}const kf=Vf;class Wf extends kf{constructor(e,t){super(function(n){return e.apply(null,n)},function(n){return n[0].getKey()}),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=t,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(e){const t=super.enqueue(e);return t&&e[0].addEventListener(Oe.CHANGE,this.boundHandleTileChange_),t}getTilesLoading(){return this.tilesLoading_}handleTileChange(e){const t=e.target,n=t.getState();if(n===_e.LOADED||n===_e.ERROR||n===_e.EMPTY){n!==_e.ERROR&&t.removeEventListener(Oe.CHANGE,this.boundHandleTileChange_);const r=t.getKey();r in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[r],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(e,t){let n=0,r,s,o;for(;this.tilesLoading_<e&&n<t&&this.getCount()>0;)s=this.dequeue()[0],o=s.getKey(),r=s.getState(),r===_e.IDLE&&!(o in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[o]=!0,++this.tilesLoading_,++n,s.load())}}const Xf=Wf;function Yf(i,e,t,n,r){if(!i||!(t in i.wantedTiles)||!i.wantedTiles[t][e.getKey()])return Es;const s=i.viewState.center,o=n[0]-s[0],a=n[1]-s[1];return 65536*Math.log(r)+Math.sqrt(o*o+a*a)/r}const Xt={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"},qf=42,Sa=256;function pl(i,e,t){return function(n,r,s,o,a){if(!n)return;if(!r&&!e)return n;const l=e?0:s[0]*r,c=e?0:s[1]*r,h=a?a[0]:0,u=a?a[1]:0;let d=i[0]+l/2+h,m=i[2]-l/2+h,g=i[1]+c/2+u,_=i[3]-c/2+u;d>m&&(d=(m+d)/2,m=d),g>_&&(g=(_+g)/2,_=g);let p=gt(n[0],d,m),f=gt(n[1],g,_);if(o&&t&&r){const y=30*r;p+=-y*Math.log(1+Math.max(0,d-n[0])/y)+y*Math.log(1+Math.max(0,n[0]-m)/y),f+=-y*Math.log(1+Math.max(0,g-n[1])/y)+y*Math.log(1+Math.max(0,n[1]-_)/y)}return[p,f]}}function Kf(i){return i}function Ta(i,e,t,n){const r=mt(e)/t[0],s=rn(e)/t[1];return n?Math.min(i,Math.max(r,s)):Math.min(i,Math.min(r,s))}function Aa(i,e,t){let n=Math.min(i,e);const r=50;return n*=Math.log(1+r*Math.max(0,i/e-1))/r+1,t&&(n=Math.max(n,t),n/=Math.log(1+r*Math.max(0,t/i-1))/r+1),gt(n,t/2,e*2)}function Zf(i,e,t,n){return e=e!==void 0?e:!0,function(r,s,o,a){if(r!==void 0){const l=i[0],c=i[i.length-1],h=t?Ta(l,t,o,n):l;if(a)return e?Aa(r,h,c):gt(r,c,h);const u=Math.min(h,r),d=Math.floor(aa(i,u,s));return i[d]>h&&d<i.length-1?i[d+1]:i[d]}else return}}function jf(i,e,t,n,r,s){return n=n!==void 0?n:!0,t=t!==void 0?t:0,function(o,a,l,c){if(o!==void 0){const h=r?Ta(e,r,l,s):e;if(c)return n?Aa(o,h,t):gt(o,t,h);const u=1e-9,d=Math.ceil(Math.log(e/h)/Math.log(i)-u),m=-a*(.5-u)+.5,g=Math.min(h,o),_=Math.floor(Math.log(e/g)/Math.log(i)+m),p=Math.max(d,_),f=e/Math.pow(i,p);return gt(f,t,h)}else return}}function ml(i,e,t,n,r){return t=t!==void 0?t:!0,function(s,o,a,l){if(s!==void 0){const c=n?Ta(i,n,a,r):i;return!t||!l?gt(s,e,c):Aa(s,c,e)}else return}}function Ra(i){if(i!==void 0)return 0}function gl(i){if(i!==void 0)return i}function $f(i){const e=2*Math.PI/i;return function(t,n){if(n)return t;if(t!==void 0)return t=Math.floor(t/e+.5)*e,t}}function Jf(i){return i=i||ds(5),function(e,t){if(t)return e;if(e!==void 0)return Math.abs(e)<=i?0:e}}const Xs=0;class Qf extends yn{constructor(e){super(),this.on,this.once,this.un,e=Object.assign({},e),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=pa(e.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,e.projection&&yd(),e.center&&(e.center=mn(e.center,this.projection_)),e.extent&&(e.extent=Oi(e.extent,this.projection_)),this.applyOptions_(e)}applyOptions_(e){const t=Object.assign({},e);for(const a in Xt)delete t[a];this.setProperties(t,!0);const n=tp(e);this.maxResolution_=n.maxResolution,this.minResolution_=n.minResolution,this.zoomFactor_=n.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=n.minZoom;const r=ep(e),s=n.constraint,o=np(e);this.constraints_={center:r,resolution:s,rotation:o},this.setRotation(e.rotation!==void 0?e.rotation:0),this.setCenterInternal(e.center!==void 0?e.center:null),e.resolution!==void 0?this.setResolution(e.resolution):e.zoom!==void 0&&this.setZoom(e.zoom)}get padding(){return this.padding_}set padding(e){let t=this.padding_;this.padding_=e;const n=this.getCenter();if(n){const r=e||[0,0,0,0];t=t||[0,0,0,0];const s=this.getResolution(),o=s/2*(r[3]-t[3]+t[1]-r[1]),a=s/2*(r[0]-t[0]+t[2]-r[2]);this.setCenterInternal([n[0]+o,n[1]-a])}}getUpdatedOptions_(e){const t=this.getProperties();return t.resolution!==void 0?t.resolution=this.getResolution():t.zoom=this.getZoom(),t.center=this.getCenterInternal(),t.rotation=this.getRotation(),Object.assign({},t,e)}animate(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);const t=new Array(arguments.length);for(let n=0;n<t.length;++n){let r=arguments[n];r.center&&(r=Object.assign({},r),r.center=mn(r.center,this.getProjection())),r.anchor&&(r=Object.assign({},r),r.anchor=mn(r.anchor,this.getProjection())),t[n]=r}this.animateInternal.apply(this,t)}animateInternal(e){let t=arguments.length,n;t>1&&typeof arguments[t-1]=="function"&&(n=arguments[t-1],--t);let r=0;for(;r<t&&!this.isDef();++r){const h=arguments[r];h.center&&this.setCenterInternal(h.center),h.zoom!==void 0?this.setZoom(h.zoom):h.resolution&&this.setResolution(h.resolution),h.rotation!==void 0&&this.setRotation(h.rotation)}if(r===t){n&&Fr(n,!0);return}let s=Date.now(),o=this.targetCenter_.slice(),a=this.targetResolution_,l=this.targetRotation_;const c=[];for(;r<t;++r){const h=arguments[r],u={start:s,complete:!1,anchor:h.anchor,duration:h.duration!==void 0?h.duration:1e3,easing:h.easing||Rf,callback:n};if(h.center&&(u.sourceCenter=o,u.targetCenter=h.center.slice(),o=u.targetCenter),h.zoom!==void 0?(u.sourceResolution=a,u.targetResolution=this.getResolutionForZoom(h.zoom),a=u.targetResolution):h.resolution&&(u.sourceResolution=a,u.targetResolution=h.resolution,a=u.targetResolution),h.rotation!==void 0){u.sourceRotation=l;const d=ki(h.rotation-l+Math.PI,2*Math.PI)-Math.PI;u.targetRotation=l+d,l=u.targetRotation}ip(u)?u.complete=!0:s+=u.duration,c.push(u)}this.animations_.push(c),this.setHint(Gt.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[Gt.ANIMATING]>0}getInteracting(){return this.hints_[Gt.INTERACTING]>0}cancelAnimations(){this.setHint(Gt.ANIMATING,-this.hints_[Gt.ANIMATING]);let e;for(let t=0,n=this.animations_.length;t<n;++t){const r=this.animations_[t];if(r[0].callback&&Fr(r[0].callback,!1),!e)for(let s=0,o=r.length;s<o;++s){const a=r[s];if(!a.complete){e=a.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;const e=Date.now();let t=!1;for(let n=this.animations_.length-1;n>=0;--n){const r=this.animations_[n];let s=!0;for(let o=0,a=r.length;o<a;++o){const l=r[o];if(l.complete)continue;const c=e-l.start;let h=l.duration>0?c/l.duration:1;h>=1?(l.complete=!0,h=1):s=!1;const u=l.easing(h);if(l.sourceCenter){const d=l.sourceCenter[0],m=l.sourceCenter[1],g=l.targetCenter[0],_=l.targetCenter[1];this.nextCenter_=l.targetCenter;const p=d+u*(g-d),f=m+u*(_-m);this.targetCenter_=[p,f]}if(l.sourceResolution&&l.targetResolution){const d=u===1?l.targetResolution:l.sourceResolution+u*(l.targetResolution-l.sourceResolution);if(l.anchor){const m=this.getViewportSize_(this.getRotation()),g=this.constraints_.resolution(d,0,m,!0);this.targetCenter_=this.calculateCenterZoom(g,l.anchor)}this.nextResolution_=l.targetResolution,this.targetResolution_=d,this.applyTargetState_(!0)}if(l.sourceRotation!==void 0&&l.targetRotation!==void 0){const d=u===1?ki(l.targetRotation+Math.PI,2*Math.PI)-Math.PI:l.sourceRotation+u*(l.targetRotation-l.sourceRotation);if(l.anchor){const m=this.constraints_.rotation(d,!0);this.targetCenter_=this.calculateCenterRotate(m,l.anchor)}this.nextRotation_=l.targetRotation,this.targetRotation_=d}if(this.applyTargetState_(!0),t=!0,!l.complete)break}if(s){this.animations_[n]=null,this.setHint(Gt.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;const o=r[0].callback;o&&Fr(o,!0)}}this.animations_=this.animations_.filter(Boolean),t&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(e,t){let n;const r=this.getCenterInternal();return r!==void 0&&(n=[r[0]-t[0],r[1]-t[1]],da(n,e-this.getRotation()),_d(n,t)),n}calculateCenterZoom(e,t){let n;const r=this.getCenterInternal(),s=this.getResolution();if(r!==void 0&&s!==void 0){const o=t[0]-e*(t[0]-r[0])/s,a=t[1]-e*(t[1]-r[1])/s;n=[o,a]}return n}getViewportSize_(e){const t=this.viewportSize_;if(e){const n=t[0],r=t[1];return[Math.abs(n*Math.cos(e))+Math.abs(r*Math.sin(e)),Math.abs(n*Math.sin(e))+Math.abs(r*Math.cos(e))]}else return t}setViewportSize(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){const e=this.getCenterInternal();return e&&Go(e,this.getProjection())}getCenterInternal(){return this.get(Xt.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(e){return e!==void 0?(e[0]=this.hints_[0],e[1]=this.hints_[1],e):this.hints_.slice()}calculateExtent(e){const t=this.calculateExtentInternal(e);return Cd(t,this.getProjection())}calculateExtentInternal(e){e=e||this.getViewportSizeMinusPadding_();const t=this.getCenterInternal();We(t,1);const n=this.getResolution();We(n!==void 0,2);const r=this.getRotation();return We(r!==void 0,3),Fo(t,n,r,e)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))}setConstrainResolution(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))}getProjection(){return this.projection_}getResolution(){return this.get(Xt.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(e,t){return this.getResolutionForExtentInternal(Oi(e,this.getProjection()),t)}getResolutionForExtentInternal(e,t){t=t||this.getViewportSizeMinusPadding_();const n=mt(e)/t[0],r=rn(e)/t[1];return Math.max(n,r)}getResolutionForValueFunction(e){e=e||2;const t=this.getConstrainedResolution(this.maxResolution_),n=this.minResolution_,r=Math.log(t/n)/Math.log(e);return function(s){return t/Math.pow(e,s*r)}}getRotation(){return this.get(Xt.ROTATION)}getValueForResolutionFunction(e){const t=Math.log(e||2),n=this.getConstrainedResolution(this.maxResolution_),r=this.minResolution_,s=Math.log(n/r)/t;return function(o){return Math.log(n/o)/t/s}}getViewportSizeMinusPadding_(e){let t=this.getViewportSize_(e);const n=this.padding_;return n&&(t=[t[0]-n[1]-n[3],t[1]-n[0]-n[2]]),t}getState(){const e=this.getProjection(),t=this.getResolution(),n=this.getRotation();let r=this.getCenterInternal();const s=this.padding_;if(s){const o=this.getViewportSizeMinusPadding_();r=Ys(r,this.getViewportSize_(),[o[0]/2+s[3],o[1]/2+s[0]],t,n)}return{center:r.slice(0),projection:e!==void 0?e:null,resolution:t,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:n,zoom:this.getZoom()}}getZoom(){let e;const t=this.getResolution();return t!==void 0&&(e=this.getZoomForResolution(t)),e}getZoomForResolution(e){let t=this.minZoom_||0,n,r;if(this.resolutions_){const s=aa(this.resolutions_,e,1);t=s,n=this.resolutions_[s],s==this.resolutions_.length-1?r=2:r=n/this.resolutions_[s+1]}else n=this.maxResolution_,r=this.zoomFactor_;return t+Math.log(n/e)/Math.log(r)}getResolutionForZoom(e){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;const t=gt(Math.floor(e),0,this.resolutions_.length-2),n=this.resolutions_[t]/this.resolutions_[t+1];return this.resolutions_[t]/Math.pow(n,gt(e-t,0,1))}else return this.maxResolution_/Math.pow(this.zoomFactor_,e-this.minZoom_)}fit(e,t){let n;if(We(Array.isArray(e)||typeof e.getSimplifiedGeometry=="function",24),Array.isArray(e)){We(!ua(e),25);const r=Oi(e,this.getProjection());n=ol(r)}else if(e.getType()==="Circle"){const r=Oi(e.getExtent(),this.getProjection());n=ol(r),n.rotate(this.getRotation(),gr(r))}else{const r=bd();r?n=e.clone().transform(r,this.getProjection()):n=e}this.fitInternal(n,t)}rotatedExtentForGeometry(e){const t=this.getRotation(),n=Math.cos(t),r=Math.sin(-t),s=e.getFlatCoordinates(),o=e.getStride();let a=1/0,l=1/0,c=-1/0,h=-1/0;for(let u=0,d=s.length;u<d;u+=o){const m=s[u]*n-s[u+1]*r,g=s[u]*r+s[u+1]*n;a=Math.min(a,m),l=Math.min(l,g),c=Math.max(c,m),h=Math.max(h,g)}return[a,l,c,h]}fitInternal(e,t){t=t||{};let n=t.size;n||(n=this.getViewportSizeMinusPadding_());const r=t.padding!==void 0?t.padding:[0,0,0,0],s=t.nearest!==void 0?t.nearest:!1;let o;t.minResolution!==void 0?o=t.minResolution:t.maxZoom!==void 0?o=this.getResolutionForZoom(t.maxZoom):o=0;const a=this.rotatedExtentForGeometry(e);let l=this.getResolutionForExtentInternal(a,[n[0]-r[1]-r[3],n[1]-r[0]-r[2]]);l=isNaN(l)?o:Math.max(l,o),l=this.getConstrainedResolution(l,s?0:1);const c=this.getRotation(),h=Math.sin(c),u=Math.cos(c),d=gr(a);d[0]+=(r[1]-r[3])/2*l,d[1]+=(r[0]-r[2])/2*l;const m=d[0]*u-d[1]*h,g=d[1]*u+d[0]*h,_=this.getConstrainedCenter([m,g],l),p=t.callback?t.callback:pr;t.duration!==void 0?this.animateInternal({resolution:l,center:_,duration:t.duration,easing:t.easing},p):(this.targetResolution_=l,this.targetCenter_=_,this.applyTargetState_(!1,!0),Fr(p,!0))}centerOn(e,t,n){this.centerOnInternal(mn(e,this.getProjection()),t,n)}centerOnInternal(e,t,n){this.setCenterInternal(Ys(e,t,n,this.getResolution(),this.getRotation()))}calculateCenterShift(e,t,n,r){let s;const o=this.padding_;if(o&&e){const a=this.getViewportSizeMinusPadding_(-n),l=Ys(e,r,[a[0]/2+o[3],a[1]/2+o[0]],t,n);s=[e[0]-l[0],e[1]-l[1]]}return s}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(e){const t=Go(this.targetCenter_,this.getProjection());this.setCenter([t[0]+e[0],t[1]+e[1]])}adjustCenterInternal(e){const t=this.targetCenter_;this.setCenterInternal([t[0]+e[0],t[1]+e[1]])}adjustResolution(e,t){t=t&&mn(t,this.getProjection()),this.adjustResolutionInternal(e,t)}adjustResolutionInternal(e,t){const n=this.getAnimating()||this.getInteracting(),r=this.getViewportSize_(this.getRotation()),s=this.constraints_.resolution(this.targetResolution_*e,0,r,n);t&&(this.targetCenter_=this.calculateCenterZoom(s,t)),this.targetResolution_*=e,this.applyTargetState_()}adjustZoom(e,t){this.adjustResolution(Math.pow(this.zoomFactor_,-e),t)}adjustRotation(e,t){t&&(t=mn(t,this.getProjection())),this.adjustRotationInternal(e,t)}adjustRotationInternal(e,t){const n=this.getAnimating()||this.getInteracting(),r=this.constraints_.rotation(this.targetRotation_+e,n);t&&(this.targetCenter_=this.calculateCenterRotate(r,t)),this.targetRotation_+=e,this.applyTargetState_()}setCenter(e){this.setCenterInternal(e&&mn(e,this.getProjection()))}setCenterInternal(e){this.targetCenter_=e,this.applyTargetState_()}setHint(e,t){return this.hints_[e]+=t,this.changed(),this.hints_[e]}setResolution(e){this.targetResolution_=e,this.applyTargetState_()}setRotation(e){this.targetRotation_=e,this.applyTargetState_()}setZoom(e){this.setResolution(this.getResolutionForZoom(e))}applyTargetState_(e,t){const n=this.getAnimating()||this.getInteracting()||t,r=this.constraints_.rotation(this.targetRotation_,n),s=this.getViewportSize_(r),o=this.constraints_.resolution(this.targetResolution_,0,s,n),a=this.constraints_.center(this.targetCenter_,o,s,n,this.calculateCenterShift(this.targetCenter_,o,r,s));this.get(Xt.ROTATION)!==r&&this.set(Xt.ROTATION,r),this.get(Xt.RESOLUTION)!==o&&(this.set(Xt.RESOLUTION,o),this.set("zoom",this.getZoom(),!0)),(!a||!this.get(Xt.CENTER)||!_s(this.get(Xt.CENTER),a))&&this.set(Xt.CENTER,a),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(e,t,n){e=e!==void 0?e:200;const r=t||0,s=this.constraints_.rotation(this.targetRotation_),o=this.getViewportSize_(s),a=this.constraints_.resolution(this.targetResolution_,r,o),l=this.constraints_.center(this.targetCenter_,a,o,!1,this.calculateCenterShift(this.targetCenter_,a,s,o));if(e===0&&!this.cancelAnchor_){this.targetResolution_=a,this.targetRotation_=s,this.targetCenter_=l,this.applyTargetState_();return}n=n||(e===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==a||this.getRotation()!==s||!this.getCenterInternal()||!_s(this.getCenterInternal(),l))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:s,center:l,resolution:a,duration:e,easing:Ji,anchor:n}))}beginInteraction(){this.resolveConstraints(0),this.setHint(Gt.INTERACTING,1)}endInteraction(e,t,n){n=n&&mn(n,this.getProjection()),this.endInteractionInternal(e,t,n)}endInteractionInternal(e,t,n){this.setHint(Gt.INTERACTING,-1),this.resolveConstraints(e,t,n)}getConstrainedCenter(e,t){const n=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,t||this.getResolution(),n)}getConstrainedZoom(e,t){const n=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(n,t))}getConstrainedResolution(e,t){t=t||0;const n=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,t,n)}}function Fr(i,e){setTimeout(function(){i(e)},0)}function ep(i){if(i.extent!==void 0){const t=i.smoothExtentConstraint!==void 0?i.smoothExtentConstraint:!0;return pl(i.extent,i.constrainOnlyCenter,t)}const e=pa(i.projection,"EPSG:3857");if(i.multiWorld!==!0&&e.isGlobal()){const t=e.getExtent().slice();return t[0]=-1/0,t[2]=1/0,pl(t,!1,!1)}return Kf}function tp(i){let e,t,n,o=i.minZoom!==void 0?i.minZoom:Xs,a=i.maxZoom!==void 0?i.maxZoom:28;const l=i.zoomFactor!==void 0?i.zoomFactor:2,c=i.multiWorld!==void 0?i.multiWorld:!1,h=i.smoothResolutionConstraint!==void 0?i.smoothResolutionConstraint:!0,u=i.showFullExtent!==void 0?i.showFullExtent:!1,d=pa(i.projection,"EPSG:3857"),m=d.getExtent();let g=i.constrainOnlyCenter,_=i.extent;if(!c&&!_&&d.isGlobal()&&(g=!1,_=m),i.resolutions!==void 0){const p=i.resolutions;t=p[o],n=p[a]!==void 0?p[a]:p[p.length-1],i.constrainResolution?e=Zf(p,h,!g&&_,u):e=ml(t,n,h,!g&&_,u)}else{const f=(m?Math.max(mt(m),rn(m)):360*_r.degrees/d.getMetersPerUnit())/Sa/Math.pow(2,Xs),y=f/Math.pow(2,28-Xs);t=i.maxResolution,t!==void 0?o=0:t=f/Math.pow(l,o),n=i.minResolution,n===void 0&&(i.maxZoom!==void 0?i.maxResolution!==void 0?n=t/Math.pow(l,a):n=f/Math.pow(l,a):n=y),a=o+Math.floor(Math.log(t/n)/Math.log(l)),n=t/Math.pow(l,a-o),i.constrainResolution?e=jf(l,t,n,h,!g&&_,u):e=ml(t,n,h,!g&&_,u)}return{constraint:e,maxResolution:t,minResolution:n,minZoom:o,zoomFactor:l}}function np(i){if(i.enableRotation!==void 0?i.enableRotation:!0){const t=i.constrainRotation;return t===void 0||t===!0?Jf():t===!1?gl:typeof t=="number"?$f(t):gl}else return Ra}function ip(i){return!(i.sourceCenter&&i.targetCenter&&!_s(i.sourceCenter,i.targetCenter)||i.sourceResolution!==i.targetResolution||i.sourceRotation!==i.targetRotation)}function Ys(i,e,t,n,r){const s=Math.cos(-r);let o=Math.sin(-r),a=i[0]*s-i[1]*o,l=i[1]*s+i[0]*o;a+=(e[0]/2-t[0])*n,l+=(t[1]-e[1]/2)*n,o=-o;const c=a*s-l*o,h=l*s+a*o;return[c,h]}const In=Qf;class rp extends yn{constructor(e){super();const t=e.element;t&&!e.target&&!t.style.pointerEvents&&(t.style.pointerEvents="auto"),this.element=t||null,this.target_=null,this.map_=null,this.listenerKeys=[],e.render&&(this.render=e.render),e.target&&this.setTarget(e.target)}disposeInternal(){Ho(this.element),super.disposeInternal()}getMap(){return this.map_}setMap(e){this.map_&&Ho(this.element);for(let t=0,n=this.listenerKeys.length;t<n;++t)tt(this.listenerKeys[t]);this.listenerKeys.length=0,this.map_=e,e&&((this.target_?this.target_:e.getOverlayContainerStopEvent()).appendChild(this.element),this.render!==pr&&this.listenerKeys.push(Ve(e,Ln.POSTRENDER,this.render,this)),e.render())}render(e){}setTarget(e){this.target_=typeof e=="string"?document.getElementById(e):e}}const ba=rp;class sp extends ba{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=e.collapsed!==void 0?e.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=e.collapsible!==void 0,this.collapsible_=e.collapsible!==void 0?e.collapsible:!0,this.collapsible_||(this.collapsed_=!1);const t=e.className!==void 0?e.className:"ol-attribution",n=e.tipLabel!==void 0?e.tipLabel:"Attributions",r=e.expandClassName!==void 0?e.expandClassName:t+"-expand",s=e.collapseLabel!==void 0?e.collapseLabel:"›",o=e.collapseClassName!==void 0?e.collapseClassName:t+"-collapse";typeof s=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=s,this.collapseLabel_.className=o):this.collapseLabel_=s;const a=e.label!==void 0?e.label:"i";typeof a=="string"?(this.label_=document.createElement("span"),this.label_.textContent=a,this.label_.className=r):this.label_=a;const l=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=n,this.toggleButton_.appendChild(l),this.toggleButton_.addEventListener(Oe.CLICK,this.handleClick_.bind(this),!1);const c=t+" "+Is+" "+xa+(this.collapsed_&&this.collapsible_?" "+ul:"")+(this.collapsible_?"":" ol-uncollapsible"),h=this.element;h.className=c,h.appendChild(this.toggleButton_),h.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(e){const t={},n=[];let r=!0;const s=e.layerStatesArray;for(let o=0,a=s.length;o<a;++o){const l=s[o];if(!Ea(l,e.viewState))continue;const c=l.layer.getSource();if(!c)continue;const h=c.getAttributions();if(!h)continue;const u=h(e);if(u)if(r=r&&c.getAttributionsCollapsible()!==!1,Array.isArray(u))for(let d=0,m=u.length;d<m;++d)u[d]in t||(n.push(u[d]),t[u[d]]=!0);else u in t||(n.push(u),t[u]=!0)}return this.overrideCollapsible_||this.setCollapsible(r),n}updateElement_(e){if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const t=this.collectSourceAttributions_(e),n=t.length>0;if(this.renderedVisible_!=n&&(this.element.style.display=n?"":"none",this.renderedVisible_=n),!la(t,this.renderedAttributions_)){uf(this.ulElement_);for(let r=0,s=t.length;r<s;++r){const o=document.createElement("li");o.innerHTML=t[r],this.ulElement_.appendChild(o)}this.renderedAttributions_=t}}handleClick_(e){e.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(ul),this.collapsed_?hl(this.collapseLabel_,this.label_):hl(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(e){this.userCollapsed_=e,!(!this.collapsible_||this.collapsed_===e)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(e){this.updateElement_(e.frameState)}}const op=sp;class ap extends ba{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target});const t=e.className!==void 0?e.className:"ol-rotate",n=e.label!==void 0?e.label:"⇧",r=e.compassClassName!==void 0?e.compassClassName:"ol-compass";this.label_=null,typeof n=="string"?(this.label_=document.createElement("span"),this.label_.className=r,this.label_.textContent=n):(this.label_=n,this.label_.classList.add(r));const s=e.tipLabel?e.tipLabel:"Reset rotation",o=document.createElement("button");o.className=t+"-reset",o.setAttribute("type","button"),o.title=s,o.appendChild(this.label_),o.addEventListener(Oe.CLICK,this.handleClick_.bind(this),!1);const a=t+" "+Is+" "+xa,l=this.element;l.className=a,l.appendChild(o),this.callResetNorth_=e.resetNorth?e.resetNorth:void 0,this.duration_=e.duration!==void 0?e.duration:250,this.autoHide_=e.autoHide!==void 0?e.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(Nr)}handleClick_(e){e.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){const t=this.getMap().getView();if(!t)return;const n=t.getRotation();n!==void 0&&(this.duration_>0&&n%(2*Math.PI)!==0?t.animate({rotation:0,duration:this.duration_,easing:Ji}):t.setRotation(0))}render(e){const t=e.frameState;if(!t)return;const n=t.viewState.rotation;if(n!=this.rotation_){const r="rotate("+n+"rad)";if(this.autoHide_){const s=this.element.classList.contains(Nr);!s&&n===0?this.element.classList.add(Nr):s&&n!==0&&this.element.classList.remove(Nr)}this.label_.style.transform=r}this.rotation_=n}}const lp=ap;class cp extends ba{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target});const t=e.className!==void 0?e.className:"ol-zoom",n=e.delta!==void 0?e.delta:1,r=e.zoomInClassName!==void 0?e.zoomInClassName:t+"-in",s=e.zoomOutClassName!==void 0?e.zoomOutClassName:t+"-out",o=e.zoomInLabel!==void 0?e.zoomInLabel:"+",a=e.zoomOutLabel!==void 0?e.zoomOutLabel:"–",l=e.zoomInTipLabel!==void 0?e.zoomInTipLabel:"Zoom in",c=e.zoomOutTipLabel!==void 0?e.zoomOutTipLabel:"Zoom out",h=document.createElement("button");h.className=r,h.setAttribute("type","button"),h.title=l,h.appendChild(typeof o=="string"?document.createTextNode(o):o),h.addEventListener(Oe.CLICK,this.handleClick_.bind(this,n),!1);const u=document.createElement("button");u.className=s,u.setAttribute("type","button"),u.title=c,u.appendChild(typeof a=="string"?document.createTextNode(a):a),u.addEventListener(Oe.CLICK,this.handleClick_.bind(this,-n),!1);const d=t+" "+Is+" "+xa,m=this.element;m.className=d,m.appendChild(h),m.appendChild(u),this.duration_=e.duration!==void 0?e.duration:250}handleClick_(e,t){t.preventDefault(),this.zoomByDelta_(e)}zoomByDelta_(e){const n=this.getMap().getView();if(!n)return;const r=n.getZoom();if(r!==void 0){const s=n.getConstrainedZoom(r+e);this.duration_>0?(n.getAnimating()&&n.cancelAnimations(),n.animate({zoom:s,duration:this.duration_,easing:Ji})):n.setZoom(s)}}}const hp=cp;function up(i){i=i||{};const e=new xn;return(i.zoom!==void 0?i.zoom:!0)&&e.push(new hp(i.zoomOptions)),(i.rotate!==void 0?i.rotate:!0)&&e.push(new lp(i.rotateOptions)),(i.attribution!==void 0?i.attribution:!0)&&e.push(new op(i.attributionOptions)),e}const _l={ACTIVE:"active"};class dp extends yn{constructor(e){super(),this.on,this.once,this.un,e&&e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(_l.ACTIVE)}getMap(){return this.map_}handleEvent(e){return!0}setActive(e){this.set(_l.ACTIVE,e)}setMap(e){this.map_=e}}function fp(i,e,t){const n=i.getCenterInternal();if(n){const r=[n[0]+e[0],n[1]+e[1]];i.animateInternal({duration:t!==void 0?t:250,easing:bf,center:i.getConstrainedCenter(r)})}}function wa(i,e,t,n){const r=i.getZoom();if(r===void 0)return;const s=i.getConstrainedZoom(r+e),o=i.getResolutionForZoom(s);i.getAnimating()&&i.cancelAnimations(),i.animate({resolution:o,anchor:t,duration:n!==void 0?n:250,easing:Ji})}const Sr=dp;class pp extends Sr{constructor(e){super(),e=e||{},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:250}handleEvent(e){let t=!1;if(e.type==Qe.DBLCLICK){const n=e.originalEvent,r=e.map,s=e.coordinate,o=n.shiftKey?-this.delta_:this.delta_,a=r.getView();wa(a,o,s,this.duration_),n.preventDefault(),t=!0}return!t}}const mp=pp;class gp extends Sr{constructor(e){e=e||{},super(e),e.handleDownEvent&&(this.handleDownEvent=e.handleDownEvent),e.handleDragEvent&&(this.handleDragEvent=e.handleDragEvent),e.handleMoveEvent&&(this.handleMoveEvent=e.handleMoveEvent),e.handleUpEvent&&(this.handleUpEvent=e.handleUpEvent),e.stopDown&&(this.stopDown=e.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(e){return!1}handleDragEvent(e){}handleEvent(e){if(!e.originalEvent)return!0;let t=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence){if(e.type==Qe.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==Qe.POINTERUP){const n=this.handleUpEvent(e);this.handlingDownUpSequence=n&&this.targetPointers.length>0}}else if(e.type==Qe.POINTERDOWN){const n=this.handleDownEvent(e);this.handlingDownUpSequence=n,t=this.stopDown(n)}else e.type==Qe.POINTERMOVE&&this.handleMoveEvent(e);return!t}handleMoveEvent(e){}handleUpEvent(e){return!1}stopDown(e){return e}updateTrackedPointers_(e){e.activePointers&&(this.targetPointers=e.activePointers)}}function Ca(i){const e=i.length;let t=0,n=0;for(let r=0;r<e;r++)t+=i[r].clientX,n+=i[r].clientY;return[t/e,n/e]}const Tr=gp;function ko(i){const e=arguments;return function(t){let n=!0;for(let r=0,s=e.length;r<s&&(n=n&&e[r](t),!!n);++r);return n}}const _p=function(i){const e=i.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},vp=function(i){const e=i.map.getTargetElement(),t=i.map.getOwnerDocument().activeElement;return e.contains(t)},wh=function(i){return i.map.getTargetElement().hasAttribute("tabindex")?vp(i):!0},xp=ps,Ch=function(i){const e=i.originalEvent;return e.button==0&&!(Vu&&ku&&e.ctrlKey)},Lh=function(i){const e=i.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},Ep=function(i){const e=i.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},Ph=function(i){const e=i.originalEvent,t=e.target.tagName;return t!=="INPUT"&&t!=="SELECT"&&t!=="TEXTAREA"&&!e.target.isContentEditable},qs=function(i){const e=i.originalEvent;return We(e!==void 0,56),e.pointerType=="mouse"},Mp=function(i){const e=i.originalEvent;return We(e!==void 0,56),e.isPrimary&&e.button===0};class yp extends Tr{constructor(e){super({stopDown:Ts}),e=e||{},this.kinetic_=e.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;const t=e.condition?e.condition:ko(Lh,Mp);this.condition_=e.onFocusOnly?ko(wh,t):t,this.noKinetic_=!1}handleDragEvent(e){this.panning_||(this.panning_=!0,this.getMap().getView().beginInteraction());const t=this.targetPointers,n=Ca(t);if(t.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(n[0],n[1]),this.lastCentroid){const r=[this.lastCentroid[0]-n[0],n[1]-this.lastCentroid[1]],o=e.map.getView();vd(r,o.getResolution()),da(r,o.getRotation()),o.adjustCenterInternal(r)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=n,this.lastPointersCount_=t.length,e.originalEvent.preventDefault()}handleUpEvent(e){const t=e.map,n=t.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){const r=this.kinetic_.getDistance(),s=this.kinetic_.getAngle(),o=n.getCenterInternal(),a=t.getPixelFromCoordinateInternal(o),l=t.getCoordinateFromPixelInternal([a[0]-r*Math.cos(s),a[1]-r*Math.sin(s)]);n.animateInternal({center:n.getConstrainedCenter(l),duration:500,easing:Ji})}return this.panning_&&(this.panning_=!1,n.endInteraction()),!1}else return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(e){if(this.targetPointers.length>0&&this.condition_(e)){const n=e.map.getView();return this.lastCentroid=null,n.getAnimating()&&n.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}else return!1}}const Sp=yp;class Tp extends Tr{constructor(e){e=e||{},super({stopDown:Ts}),this.condition_=e.condition?e.condition:_p,this.lastAngle_=void 0,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){if(!qs(e))return;const t=e.map,n=t.getView();if(n.getConstraints().rotation===Ra)return;const r=t.getSize(),s=e.pixel,o=Math.atan2(r[1]/2-s[1],s[0]-r[0]/2);if(this.lastAngle_!==void 0){const a=o-this.lastAngle_;n.adjustRotationInternal(-a)}this.lastAngle_=o}handleUpEvent(e){return qs(e)?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){return qs(e)&&Ch(e)&&this.condition_(e)?(e.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}}const Ap=Tp;class Rp extends sa{constructor(e){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+e,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){const e=this.startPixel_,t=this.endPixel_,n="px",r=this.element_.style;r.left=Math.min(e[0],t[0])+n,r.top=Math.min(e[1],t[1])+n,r.width=Math.abs(t[0]-e[0])+n,r.height=Math.abs(t[1]-e[1])+n}setMap(e){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);const t=this.element_.style;t.left="inherit",t.top="inherit",t.width="inherit",t.height="inherit"}this.map_=e,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(e,t){this.startPixel_=e,this.endPixel_=t,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){const e=this.startPixel_,t=this.endPixel_,r=[e,[e[0],t[1]],t,[t[0],e[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);r[4]=r[0].slice(),this.geometry_?this.geometry_.setCoordinates([r]):this.geometry_=new xr([r])}getGeometry(){return this.geometry_}}const bp=Rp,Or={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"};class Ks extends Hn{constructor(e,t,n){super(e),this.coordinate=t,this.mapBrowserEvent=n}}class wp extends Tr{constructor(e){super(),this.on,this.once,this.un,e=e||{},this.box_=new bp(e.className||"ol-dragbox"),this.minArea_=e.minArea!==void 0?e.minArea:64,e.onBoxEnd&&(this.onBoxEnd=e.onBoxEnd),this.startPixel_=null,this.condition_=e.condition?e.condition:Ch,this.boxEndCondition_=e.boxEndCondition?e.boxEndCondition:this.defaultBoxEndCondition}defaultBoxEndCondition(e,t,n){const r=n[0]-t[0],s=n[1]-t[1];return r*r+s*s>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(e){this.box_.setPixels(this.startPixel_,e.pixel),this.dispatchEvent(new Ks(Or.BOXDRAG,e.coordinate,e))}handleUpEvent(e){this.box_.setMap(null);const t=this.boxEndCondition_(e,this.startPixel_,e.pixel);return t&&this.onBoxEnd(e),this.dispatchEvent(new Ks(t?Or.BOXEND:Or.BOXCANCEL,e.coordinate,e)),!1}handleDownEvent(e){return this.condition_(e)?(this.startPixel_=e.pixel,this.box_.setMap(e.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new Ks(Or.BOXSTART,e.coordinate,e)),!0):!1}onBoxEnd(e){}}const Cp=wp;class Lp extends Cp{constructor(e){e=e||{};const t=e.condition?e.condition:Ep;super({condition:t,className:e.className||"ol-dragzoom",minArea:e.minArea}),this.duration_=e.duration!==void 0?e.duration:200,this.out_=e.out!==void 0?e.out:!1}onBoxEnd(e){const n=this.getMap().getView();let r=this.getGeometry();if(this.out_){const s=n.rotatedExtentForGeometry(r),o=n.getResolutionForExtentInternal(s),a=n.getResolution()/o;r=r.clone(),r.scale(a*a)}n.fitInternal(r,{duration:this.duration_,easing:Ji})}}const Pp=Lp,Xn={LEFT:37,UP:38,RIGHT:39,DOWN:40};class Ip extends Sr{constructor(e){super(),e=e||{},this.defaultCondition_=function(t){return Lh(t)&&Ph(t)},this.condition_=e.condition!==void 0?e.condition:this.defaultCondition_,this.duration_=e.duration!==void 0?e.duration:100,this.pixelDelta_=e.pixelDelta!==void 0?e.pixelDelta:128}handleEvent(e){let t=!1;if(e.type==Oe.KEYDOWN){const n=e.originalEvent,r=n.keyCode;if(this.condition_(e)&&(r==Xn.DOWN||r==Xn.LEFT||r==Xn.RIGHT||r==Xn.UP)){const o=e.map.getView(),a=o.getResolution()*this.pixelDelta_;let l=0,c=0;r==Xn.DOWN?c=-a:r==Xn.LEFT?l=-a:r==Xn.RIGHT?l=a:c=a;const h=[l,c];da(h,o.getRotation()),fp(o,h,this.duration_),n.preventDefault(),t=!0}}return!t}}const Dp=Ip;class Up extends Sr{constructor(e){super(),e=e||{},this.condition_=e.condition?e.condition:Ph,this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:100}handleEvent(e){let t=!1;if(e.type==Oe.KEYDOWN||e.type==Oe.KEYPRESS){const n=e.originalEvent,r=n.charCode;if(this.condition_(e)&&(r=="+".charCodeAt(0)||r=="-".charCodeAt(0))){const s=e.map,o=r=="+".charCodeAt(0)?this.delta_:-this.delta_,a=s.getView();wa(a,o,void 0,this.duration_),n.preventDefault(),t=!0}}return!t}}const Np=Up;class Fp extends Sr{constructor(e){e=e||{},super(e),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=e.maxDelta!==void 0?e.maxDelta:1,this.duration_=e.duration!==void 0?e.duration:250,this.timeout_=e.timeout!==void 0?e.timeout:80,this.useAnchor_=e.useAnchor!==void 0?e.useAnchor:!0,this.constrainResolution_=e.constrainResolution!==void 0?e.constrainResolution:!1;const t=e.condition?e.condition:xp;this.condition_=e.onFocusOnly?ko(wh,t):t,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300}endInteraction_(){this.trackpadTimeoutId_=void 0;const e=this.getMap();if(!e)return;e.getView().endInteraction(void 0,this.lastDelta_?this.lastDelta_>0?1:-1:0,this.lastAnchor_)}handleEvent(e){if(!this.condition_(e)||e.type!==Oe.WHEEL)return!0;const n=e.map,r=e.originalEvent;r.preventDefault(),this.useAnchor_&&(this.lastAnchor_=e.coordinate);let s;if(e.type==Oe.WHEEL&&(s=r.deltaY,Gu&&r.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(s/=th),r.deltaMode===WheelEvent.DOM_DELTA_LINE&&(s*=40)),s===0)return!1;this.lastDelta_=s;const o=Date.now();this.startTime_===void 0&&(this.startTime_=o),(!this.mode_||o-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(s)<4?"trackpad":"wheel");const a=n.getView();if(this.mode_==="trackpad"&&!(a.getConstrainResolution()||this.constrainResolution_))return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(a.getAnimating()&&a.cancelAnimations(),a.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),a.adjustZoom(-s/this.deltaPerZoom_,this.lastAnchor_),this.startTime_=o,!1;this.totalDelta_+=s;const l=Math.max(this.timeout_-(o-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,n),l),!1}handleWheelZoom_(e){const t=e.getView();t.getAnimating()&&t.cancelAnimations();let n=-gt(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(t.getConstrainResolution()||this.constrainResolution_)&&(n=n?n>0?1:-1:0),wa(t,n,this.lastAnchor_,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(e){this.useAnchor_=e,e||(this.lastAnchor_=null)}}const Op=Fp;class zp extends Tr{constructor(e){e=e||{};const t=e;t.stopDown||(t.stopDown=Ts),super(t),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=e.threshold!==void 0?e.threshold:.3,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){let t=0;const n=this.targetPointers[0],r=this.targetPointers[1],s=Math.atan2(r.clientY-n.clientY,r.clientX-n.clientX);if(this.lastAngle_!==void 0){const h=s-this.lastAngle_;this.rotationDelta_+=h,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),t=h}this.lastAngle_=s;const o=e.map,a=o.getView();if(a.getConstraints().rotation===Ra)return;const l=o.getViewport().getBoundingClientRect(),c=Ca(this.targetPointers);c[0]-=l.left,c[1]-=l.top,this.anchor_=o.getCoordinateFromPixelInternal(c),this.rotating_&&(o.render(),a.adjustRotationInternal(t,this.anchor_))}handleUpEvent(e){return this.targetPointers.length<2?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){if(this.targetPointers.length>=2){const t=e.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}else return!1}}const Bp=zp;class Gp extends Tr{constructor(e){e=e||{};const t=e;t.stopDown||(t.stopDown=Ts),super(t),this.anchor_=null,this.duration_=e.duration!==void 0?e.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(e){let t=1;const n=this.targetPointers[0],r=this.targetPointers[1],s=n.clientX-r.clientX,o=n.clientY-r.clientY,a=Math.sqrt(s*s+o*o);this.lastDistance_!==void 0&&(t=this.lastDistance_/a),this.lastDistance_=a;const l=e.map,c=l.getView();t!=1&&(this.lastScaleDelta_=t);const h=l.getViewport().getBoundingClientRect(),u=Ca(this.targetPointers);u[0]-=h.left,u[1]-=h.top,this.anchor_=l.getCoordinateFromPixelInternal(u),l.render(),c.adjustResolutionInternal(t,this.anchor_)}handleUpEvent(e){if(this.targetPointers.length<2){const n=e.map.getView(),r=this.lastScaleDelta_>1?1:-1;return n.endInteraction(this.duration_,r),!1}else return!0}handleDownEvent(e){if(this.targetPointers.length>=2){const t=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}else return!1}}const Hp=Gp;function Vp(i){i=i||{};const e=new xn,t=new If(-.005,.05,100);return(i.altShiftDragRotate!==void 0?i.altShiftDragRotate:!0)&&e.push(new Ap),(i.doubleClickZoom!==void 0?i.doubleClickZoom:!0)&&e.push(new mp({delta:i.zoomDelta,duration:i.zoomDuration})),(i.dragPan!==void 0?i.dragPan:!0)&&e.push(new Sp({onFocusOnly:i.onFocusOnly,kinetic:t})),(i.pinchRotate!==void 0?i.pinchRotate:!0)&&e.push(new Bp),(i.pinchZoom!==void 0?i.pinchZoom:!0)&&e.push(new Hp({duration:i.zoomDuration})),(i.keyboard!==void 0?i.keyboard:!0)&&(e.push(new Dp),e.push(new Np({delta:i.zoomDelta,duration:i.zoomDuration}))),(i.mouseWheelZoom!==void 0?i.mouseWheelZoom:!0)&&e.push(new Op({onFocusOnly:i.onFocusOnly,duration:i.zoomDuration})),(i.shiftDragZoom!==void 0?i.shiftDragZoom:!0)&&e.push(new Pp({duration:i.zoomDuration})),e}function Ih(i){if(i instanceof Ma){i.setMapInternal(null);return}i instanceof Ds&&i.getLayers().forEach(Ih)}function Dh(i,e){if(i instanceof Ma){i.setMapInternal(e);return}if(i instanceof Ds){const t=i.getLayers().getArray();for(let n=0,r=t.length;n<r;++n)Dh(t[n],e)}}let kp=class extends yn{constructor(e){super(),e=e||{},this.on,this.once,this.un;const t=Wp(e);this.renderComplete_,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=e.maxTilesLoading!==void 0?e.maxTilesLoading:16,this.pixelRatio_=e.pixelRatio!==void 0?e.pixelRatio:th,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=Gi(),this.pixelToCoordinateTransform_=Gi(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_),this.mapBrowserEventHandler_=null,this.moveTolerance_=e.moveTolerance,this.keyboardEventTarget_=t.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.controls=t.controls||up(),this.interactions=t.interactions||Vp({onFocusOnly:!0}),this.overlays_=t.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new Xf(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(yt.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(yt.VIEW,this.handleViewChanged_),this.addChangeListener(yt.SIZE,this.handleSizeChanged_),this.addChangeListener(yt.TARGET,this.handleTargetChanged_),this.setProperties(t.values);const n=this;e.view&&!(e.view instanceof In)&&e.view.then(function(r){n.setView(new In(r))}),this.controls.addEventListener(Ht.ADD,function(r){r.element.setMap(this)}.bind(this)),this.controls.addEventListener(Ht.REMOVE,function(r){r.element.setMap(null)}.bind(this)),this.interactions.addEventListener(Ht.ADD,function(r){r.element.setMap(this)}.bind(this)),this.interactions.addEventListener(Ht.REMOVE,function(r){r.element.setMap(null)}.bind(this)),this.overlays_.addEventListener(Ht.ADD,function(r){this.addOverlayInternal_(r.element)}.bind(this)),this.overlays_.addEventListener(Ht.REMOVE,function(r){const s=r.element.getId();s!==void 0&&delete this.overlayIdIndex_[s.toString()],r.element.setMap(null)}.bind(this)),this.controls.forEach(function(r){r.setMap(this)}.bind(this)),this.interactions.forEach(function(r){r.setMap(this)}.bind(this)),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(e){this.getControls().push(e)}addInteraction(e){this.getInteractions().push(e)}addLayer(e){this.getLayerGroup().getLayers().push(e)}handleLayerAdd_(e){Dh(e.layer,this)}addOverlay(e){this.getOverlays().push(e)}addOverlayInternal_(e){const t=e.getId();t!==void 0&&(this.overlayIdIndex_[t.toString()]=e),e.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(e,t,n){if(!this.frameState_||!this.renderer_)return;const r=this.getCoordinateFromPixelInternal(e);n=n!==void 0?n:{};const s=n.hitTolerance!==void 0?n.hitTolerance:0,o=n.layerFilter!==void 0?n.layerFilter:ps,a=n.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(r,this.frameState_,s,a,t,null,o,null)}getFeaturesAtPixel(e,t){const n=[];return this.forEachFeatureAtPixel(e,function(r){n.push(r)},t),n}getAllLayers(){const e=[];function t(n){n.forEach(function(r){r instanceof Ds?t(r.getLayers()):e.push(r)})}return t(this.getLayers()),e}hasFeatureAtPixel(e,t){if(!this.frameState_||!this.renderer_)return!1;const n=this.getCoordinateFromPixelInternal(e);t=t!==void 0?t:{};const r=t.layerFilter!==void 0?t.layerFilter:ps,s=t.hitTolerance!==void 0?t.hitTolerance:0,o=t.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(n,this.frameState_,s,o,r,null)}getEventCoordinate(e){return this.getCoordinateFromPixel(this.getEventPixel(e))}getEventCoordinateInternal(e){return this.getCoordinateFromPixelInternal(this.getEventPixel(e))}getEventPixel(e){const t=this.viewport_.getBoundingClientRect(),n="changedTouches"in e?e.changedTouches[0]:e;return[n.clientX-t.left,n.clientY-t.top]}getTarget(){return this.get(yt.TARGET)}getTargetElement(){const e=this.getTarget();return e!==void 0?typeof e=="string"?document.getElementById(e):e:null}getCoordinateFromPixel(e){return Go(this.getCoordinateFromPixelInternal(e),this.getView().getProjection())}getCoordinateFromPixelInternal(e){const t=this.frameState_;return t?Bt(t.pixelToCoordinateTransform,e.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(e){const t=this.overlayIdIndex_[e.toString()];return t!==void 0?t:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(yt.LAYERGROUP)}setLayers(e){const t=this.getLayerGroup();if(e instanceof xn){t.setLayers(e);return}const n=t.getLayers();n.clear(),n.extend(e)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){const e=this.getLayerGroup().getLayerStatesArray();for(let t=0,n=e.length;t<n;++t){const r=e[t];if(!r.visible)continue;const s=r.layer.getRenderer();if(s&&!s.ready)return!0;const o=r.layer.getSource();if(o&&o.loading)return!0}return!1}getPixelFromCoordinate(e){const t=mn(e,this.getView().getProjection());return this.getPixelFromCoordinateInternal(t)}getPixelFromCoordinateInternal(e){const t=this.frameState_;return t?Bt(t.coordinateToPixelTransform,e.slice(0,2)):null}getRenderer(){return this.renderer_}getSize(){return this.get(yt.SIZE)}getView(){return this.get(yt.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){const e=this.getTargetElement();return e?e.ownerDocument:document}getTilePriority(e,t,n,r){return Yf(this.frameState_,e,t,n,r)}handleBrowserEvent(e,t){t=t||e.type;const n=new Cn(t,this,e);this.handleMapBrowserEvent(n)}handleMapBrowserEvent(e){if(!this.frameState_)return;const t=e.originalEvent,n=t.type;if(n===Vo.POINTERDOWN||n===Oe.WHEEL||n===Oe.KEYDOWN){const r=this.getOwnerDocument(),s=this.viewport_.getRootNode?this.viewport_.getRootNode():r,o=t.target;if(this.overlayContainerStopEvent_.contains(o)||!(s===r?r.documentElement:s).contains(o))return}if(e.frameState=this.frameState_,this.dispatchEvent(e)!==!1){const r=this.getInteractions().getArray().slice();for(let s=r.length-1;s>=0;s--){const o=r[s];if(o.getMap()!==this||!o.getActive()||!this.getTargetElement())continue;if(!o.handleEvent(e)||e.propagationStopped)break}}}handlePostRender(){const e=this.frameState_,t=this.tileQueue_;if(!t.isEmpty()){let r=this.maxTilesLoading_,s=r;if(e){const o=e.viewHints;if(o[Gt.ANIMATING]||o[Gt.INTERACTING]){const a=Date.now()-e.time>8;r=a?0:8,s=a?0:2}}t.getTilesLoading()<r&&(t.reprioritize(),t.loadMoreTiles(r,s))}e&&this.renderer_&&!e.animate&&(this.renderComplete_===!0?(this.hasListener(Nn.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(Nn.RENDERCOMPLETE,e),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new Di(Ln.LOADEND,this,e)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new Di(Ln.LOADSTART,this,e))));const n=this.postRenderFunctions_;for(let r=0,s=n.length;r<s;++r)n[r](this,e);n.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let t=0,n=this.targetChangeHandlerKeys_.length;t<n;++t)tt(this.targetChangeHandlerKeys_[t]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(Oe.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(Oe.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,Ho(this.viewport_)}const e=this.getTargetElement();if(!e)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{e.appendChild(this.viewport_),this.renderer_||(this.renderer_=new Of(this)),this.mapBrowserEventHandler_=new Hf(this,this.moveTolerance_);for(const r in Qe)this.mapBrowserEventHandler_.addEventListener(Qe[r],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(Oe.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(Oe.WHEEL,this.boundHandleBrowserEvent_,ih?{passive:!1}:!1);const t=this.getOwnerDocument().defaultView,n=this.keyboardEventTarget_?this.keyboardEventTarget_:e;this.targetChangeHandlerKeys_=[Ve(n,Oe.KEYDOWN,this.handleBrowserEvent,this),Ve(n,Oe.KEYPRESS,this.handleBrowserEvent,this),Ve(t,Oe.RESIZE,this.updateSize,this)]}this.updateSize()}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(tt(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(tt(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);const e=this.getView();e&&(this.updateViewportSize_(),this.viewPropertyListenerKey_=Ve(e,fr.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=Ve(e,Oe.CHANGE,this.handleViewPropertyChanged_,this),e.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(tt),this.layerGroupPropertyListenerKeys_=null);const e=this.getLayerGroup();e&&(this.handleLayerAdd_(new Pn("addlayer",e)),this.layerGroupPropertyListenerKeys_=[Ve(e,fr.PROPERTYCHANGE,this.render,this),Ve(e,Oe.CHANGE,this.render,this),Ve(e,"addlayer",this.handleLayerAdd_,this),Ve(e,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){const e=this.getLayerGroup().getLayerStatesArray();for(let t=0,n=e.length;t<n;++t){const r=e[t].layer;r.hasRenderer()&&r.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}removeControl(e){return this.getControls().remove(e)}removeInteraction(e){return this.getInteractions().remove(e)}removeLayer(e){return this.getLayerGroup().getLayers().remove(e)}handleLayerRemove_(e){Ih(e.layer)}removeOverlay(e){return this.getOverlays().remove(e)}renderFrame_(e){const t=this.getSize(),n=this.getView(),r=this.frameState_;let s=null;if(t!==void 0&&al(t)&&n&&n.isDef()){const o=n.getHints(this.frameState_?this.frameState_.viewHints:void 0),a=n.getState();if(s={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutterTree:null,extent:Fo(a.center,a.resolution,a.rotation,t),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:t,tileQueue:this.tileQueue_,time:e,usedTiles:{},viewState:a,viewHints:o,wantedTiles:{},mapId:wt(this),renderTargets:{}},a.nextCenter&&a.nextResolution){const l=isNaN(a.nextRotation)?a.rotation:a.nextRotation;s.nextExtent=Fo(a.nextCenter,a.nextResolution,l,t)}}this.frameState_=s,this.renderer_.renderFrame(s),s&&(s.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,s.postRenderFunctions),r&&(!this.previousExtent_||!ua(this.previousExtent_)&&!Uo(s.extent,this.previousExtent_))&&(this.dispatchEvent(new Di(Ln.MOVESTART,this,r)),this.previousExtent_=bs(this.previousExtent_)),this.previousExtent_&&!s.viewHints[Gt.ANIMATING]&&!s.viewHints[Gt.INTERACTING]&&!Uo(s.extent,this.previousExtent_)&&(this.dispatchEvent(new Di(Ln.MOVEEND,this,s)),Ku(s.extent,this.previousExtent_))),this.dispatchEvent(new Di(Ln.POSTRENDER,this,s)),this.renderComplete_=this.hasListener(Ln.LOADSTART)||this.hasListener(Ln.LOADEND)||this.hasListener(Nn.RENDERCOMPLETE)?!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady():void 0,this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(e){const t=this.getLayerGroup();t&&this.handleLayerRemove_(new Pn("removelayer",t)),this.set(yt.LAYERGROUP,e)}setSize(e){this.set(yt.SIZE,e)}setTarget(e){this.set(yt.TARGET,e)}setView(e){if(!e||e instanceof In){this.set(yt.VIEW,e);return}this.set(yt.VIEW,new In);const t=this;e.then(function(n){t.setView(new In(n))})}updateSize(){const e=this.getTargetElement();let t;if(e){const n=getComputedStyle(e),r=e.offsetWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight)-parseFloat(n.borderRightWidth),s=e.offsetHeight-parseFloat(n.borderTopWidth)-parseFloat(n.paddingTop)-parseFloat(n.paddingBottom)-parseFloat(n.borderBottomWidth);!isNaN(r)&&!isNaN(s)&&(t=[r,s],!al(t)&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&console.warn("No map visible because the map container's width or height are 0."))}this.setSize(t),this.updateViewportSize_()}updateViewportSize_(){const e=this.getView();if(e){let t;const n=getComputedStyle(this.viewport_);n.width&&n.height&&(t=[parseInt(n.width,10),parseInt(n.height,10)]),e.setViewportSize(t)}}};function Wp(i){let e=null;i.keyboardEventTarget!==void 0&&(e=typeof i.keyboardEventTarget=="string"?document.getElementById(i.keyboardEventTarget):i.keyboardEventTarget);const t={},n=i.layers&&typeof i.layers.getLayers=="function"?i.layers:new Ds({layers:i.layers});t[yt.LAYERGROUP]=n,t[yt.TARGET]=i.target,t[yt.VIEW]=i.view instanceof In?i.view:new In;let r;i.controls!==void 0&&(Array.isArray(i.controls)?r=new xn(i.controls.slice()):(We(typeof i.controls.getArray=="function",47),r=i.controls));let s;i.interactions!==void 0&&(Array.isArray(i.interactions)?s=new xn(i.interactions.slice()):(We(typeof i.interactions.getArray=="function",48),s=i.interactions));let o;return i.overlays!==void 0?Array.isArray(i.overlays)?o=new xn(i.overlays.slice()):(We(typeof i.overlays.getArray=="function",49),o=i.overlays):o=new xn,{controls:r,interactions:s,keyboardEventTarget:e,overlays:o,values:t}}const Xp=kp;class Yp{constructor(e){this.highWaterMark=e!==void 0?e:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(e){for(;this.canExpireCache();)this.pop()}clear(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}containsKey(e){return this.entries_.hasOwnProperty(e)}forEach(e){let t=this.oldest_;for(;t;)e(t.value_,t.key_,this),t=t.newer}get(e,t){const n=this.entries_[e];return We(n!==void 0,15),n===this.newest_||(n===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(n.newer.older=n.older,n.older.newer=n.newer),n.newer=null,n.older=this.newest_,this.newest_.newer=n,this.newest_=n),n.value_}remove(e){const t=this.entries_[e];return We(t!==void 0,15),t===this.newest_?(this.newest_=t.older,this.newest_&&(this.newest_.newer=null)):t===this.oldest_?(this.oldest_=t.newer,this.oldest_&&(this.oldest_.older=null)):(t.newer.older=t.older,t.older.newer=t.newer),delete this.entries_[e],--this.count_,t.value_}getCount(){return this.count_}getKeys(){const e=new Array(this.count_);let t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.key_;return e}getValues(){const e=new Array(this.count_);let t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.value_;return e}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(e){if(this.containsKey(e))return this.entries_[e].value_}pop(){const e=this.oldest_;return delete this.entries_[e.key_],e.newer&&(e.newer.older=null),this.oldest_=e.newer,this.oldest_||(this.newest_=null),--this.count_,e.value_}replace(e,t){this.get(e),this.entries_[e].value_=t}set(e,t){We(!(e in this.entries_),16);const n={key_:e,newer:null,older:this.newest_,value_:t};this.newest_?this.newest_.newer=n:this.oldest_=n,this.newest_=n,this.entries_[e]=n,++this.count_}setSize(e){this.highWaterMark=e}}const qp=Yp;function vl(i,e,t,n){return n!==void 0?(n[0]=i,n[1]=e,n[2]=t,n):[i,e,t]}function Us(i,e,t){return i+"/"+e+"/"+t}function Uh(i){return Us(i[0],i[1],i[2])}function Kp(i){return i.split("/").map(Number)}function Zp(i){return(i[1]<<i[0])+i[2]}function jp(i,e){const t=i[0],n=i[1],r=i[2];if(e.getMinZoom()>t||t>e.getMaxZoom())return!1;const s=e.getFullTileRange(t);return s?s.containsXY(n,r):!0}class $p extends qp{clear(){for(;this.getCount()>0;)this.pop().release();super.clear()}expireCache(e){for(;this.canExpireCache()&&!(this.peekLast().getKey()in e);)this.pop().release()}pruneExceptNewestZ(){if(this.getCount()===0)return;const e=this.peekFirstKey(),n=Kp(e)[0];this.forEach(function(r){r.tileCoord[0]!==n&&(this.remove(Uh(r.tileCoord)),r.release())}.bind(this))}}const Nh=$p;class Fh{constructor(e,t,n,r){this.minX=e,this.maxX=t,this.minY=n,this.maxY=r}contains(e){return this.containsXY(e[1],e[2])}containsTileRange(e){return this.minX<=e.minX&&e.maxX<=this.maxX&&this.minY<=e.minY&&e.maxY<=this.maxY}containsXY(e,t){return this.minX<=e&&e<=this.maxX&&this.minY<=t&&t<=this.maxY}equals(e){return this.minX==e.minX&&this.minY==e.minY&&this.maxX==e.maxX&&this.maxY==e.maxY}extend(e){e.minX<this.minX&&(this.minX=e.minX),e.maxX>this.maxX&&(this.maxX=e.maxX),e.minY<this.minY&&(this.minY=e.minY),e.maxY>this.maxY&&(this.maxY=e.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(e){return this.minX<=e.maxX&&this.maxX>=e.minX&&this.minY<=e.maxY&&this.maxY>=e.minY}}function fi(i,e,t,n,r){return r!==void 0?(r.minX=i,r.maxX=e,r.minY=t,r.maxY=n,r):new Fh(i,e,t,n)}const Oh=Fh,zr={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};class Jp extends Ma{constructor(e){e=e||{};const t=Object.assign({},e);delete t.preload,delete t.useInterimTilesOnError,super(t),this.on,this.once,this.un,this.setPreload(e.preload!==void 0?e.preload:0),this.setUseInterimTilesOnError(e.useInterimTilesOnError!==void 0?e.useInterimTilesOnError:!0)}getPreload(){return this.get(zr.PRELOAD)}setPreload(e){this.set(zr.PRELOAD,e)}getUseInterimTilesOnError(){return this.get(zr.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(e){this.set(zr.USE_INTERIM_TILES_ON_ERROR,e)}getData(e){return super.getData(e)}}const Qp=Jp,em=.5,tm=10,xl=.25;class nm{constructor(e,t,n,r,s,o){this.sourceProj_=e,this.targetProj_=t;let a={};const l=vr(this.targetProj_,this.sourceProj_);this.transformInv_=function(y){const v=y[0]+"/"+y[1];return a[v]||(a[v]=l(y)),a[v]},this.maxSourceExtent_=r,this.errorThresholdSquared_=s*s,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!r&&!!this.sourceProj_.getExtent()&&mt(r)==mt(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?mt(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?mt(this.targetProj_.getExtent()):null;const c=hi(n),h=Ls(n),u=Cs(n),d=ws(n),m=this.transformInv_(c),g=this.transformInv_(h),_=this.transformInv_(u),p=this.transformInv_(d),f=tm+(o?Math.max(0,Math.ceil(Math.log2(No(n)/(o*o*256*256)))):0);if(this.addQuad_(c,h,u,d,m,g,_,p,f),this.wrapsXInSource_){let y=1/0;this.triangles_.forEach(function(v,x,A){y=Math.min(y,v.source[0][0],v.source[1][0],v.source[2][0])}),this.triangles_.forEach(function(v){if(Math.max(v.source[0][0],v.source[1][0],v.source[2][0])-y>this.sourceWorldWidth_/2){const x=[[v.source[0][0],v.source[0][1]],[v.source[1][0],v.source[1][1]],[v.source[2][0],v.source[2][1]]];x[0][0]-y>this.sourceWorldWidth_/2&&(x[0][0]-=this.sourceWorldWidth_),x[1][0]-y>this.sourceWorldWidth_/2&&(x[1][0]-=this.sourceWorldWidth_),x[2][0]-y>this.sourceWorldWidth_/2&&(x[2][0]-=this.sourceWorldWidth_);const A=Math.min(x[0][0],x[1][0],x[2][0]);Math.max(x[0][0],x[1][0],x[2][0])-A<this.sourceWorldWidth_/2&&(v.source=x)}}.bind(this))}a={}}addTriangle_(e,t,n,r,s,o){this.triangles_.push({source:[r,s,o],target:[e,t,n]})}addQuad_(e,t,n,r,s,o,a,l,c){const h=qa([s,o,a,l]),u=this.sourceWorldWidth_?mt(h)/this.sourceWorldWidth_:null,d=this.sourceWorldWidth_,m=this.sourceProj_.canWrapX()&&u>.5&&u<1;let g=!1;if(c>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){const p=qa([e,t,n,r]);g=mt(p)/this.targetWorldWidth_>xl||g}!m&&this.sourceProj_.isGlobal()&&u&&(g=u>xl||g)}if(!g&&this.maxSourceExtent_&&isFinite(h[0])&&isFinite(h[1])&&isFinite(h[2])&&isFinite(h[3])&&!Ps(h,this.maxSourceExtent_))return;let _=0;if(!g&&(!isFinite(s[0])||!isFinite(s[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(l[0])||!isFinite(l[1]))){if(c>0)g=!0;else if(_=(!isFinite(s[0])||!isFinite(s[1])?8:0)+(!isFinite(o[0])||!isFinite(o[1])?4:0)+(!isFinite(a[0])||!isFinite(a[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),_!=1&&_!=2&&_!=4&&_!=8)return}if(c>0){if(!g){const p=[(e[0]+n[0])/2,(e[1]+n[1])/2],f=this.transformInv_(p);let y;m?y=(ki(s[0],d)+ki(a[0],d))/2-ki(f[0],d):y=(s[0]+a[0])/2-f[0];const v=(s[1]+a[1])/2-f[1];g=y*y+v*v>this.errorThresholdSquared_}if(g){if(Math.abs(e[0]-n[0])<=Math.abs(e[1]-n[1])){const p=[(t[0]+n[0])/2,(t[1]+n[1])/2],f=this.transformInv_(p),y=[(r[0]+e[0])/2,(r[1]+e[1])/2],v=this.transformInv_(y);this.addQuad_(e,t,p,y,s,o,f,v,c-1),this.addQuad_(y,p,n,r,v,f,a,l,c-1)}else{const p=[(e[0]+t[0])/2,(e[1]+t[1])/2],f=this.transformInv_(p),y=[(n[0]+r[0])/2,(n[1]+r[1])/2],v=this.transformInv_(y);this.addQuad_(e,p,y,r,s,f,v,l,c-1),this.addQuad_(p,t,n,y,f,o,a,v,c-1)}return}}if(m){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}_&11||this.addTriangle_(e,n,r,s,a,l),_&14||this.addTriangle_(e,n,t,s,a,o),_&&(_&13||this.addTriangle_(t,r,e,o,l,s),_&7||this.addTriangle_(t,r,n,o,l,a))}calculateSourceExtent(){const e=ci();return this.triangles_.forEach(function(t,n,r){const s=t.source;us(e,s[0]),us(e,s[1]),us(e,s[2])}),e}getTriangles(){return this.triangles_}}const im=nm;let Zs;const zh=[];function El(i,e,t,n,r){i.beginPath(),i.moveTo(0,0),i.lineTo(e,t),i.lineTo(n,r),i.closePath(),i.save(),i.clip(),i.fillRect(0,0,Math.max(e,n)+1,Math.max(t,r)),i.restore()}function js(i,e){return Math.abs(i[e*4]-210)>2||Math.abs(i[e*4+3]-.75*255)>2}function rm(){if(Zs===void 0){const i=document.createElement("canvas").getContext("2d");i.globalCompositeOperation="lighter",i.fillStyle="rgba(210, 0, 0, 0.75)",El(i,4,5,4,0),El(i,4,5,0,5);const e=i.getImageData(0,0,3,3).data;Zs=js(e,0)||js(e,4)||js(e,8)}return Zs}function Ml(i,e,t,n){const r=ga(t,e,i);let s=Qa(e,n,t);const o=e.getMetersPerUnit();o!==void 0&&(s*=o);const a=i.getMetersPerUnit();a!==void 0&&(s/=a);const l=i.getExtent();if(!l||ha(l,r)){const c=Qa(i,s,r)/s;isFinite(c)&&c>0&&(s/=c)}return s}function sm(i,e,t,n){const r=gr(t);let s=Ml(i,e,r,n);return(!isFinite(s)||s<=0)&&lh(t,function(o){return s=Ml(i,e,o,n),isFinite(s)&&s>0}),s}function om(i,e,t,n,r,s,o,a,l,c,h,u){const d=xs(Math.round(t*i),Math.round(t*e),zh);if(u||(d.imageSmoothingEnabled=!1),l.length===0)return d.canvas;d.scale(t,t);function m(x){return Math.round(x*t)/t}d.globalCompositeOperation="lighter";const g=ci();l.forEach(function(x,A,w){Ju(g,x.extent)});const _=mt(g),p=rn(g),f=xs(Math.round(t*_/n),Math.round(t*p/n));u||(f.imageSmoothingEnabled=!1);const y=t/n;l.forEach(function(x,A,w){const b=x.extent[0]-g[0],U=-(x.extent[3]-g[3]),M=mt(x.extent),R=rn(x.extent);x.image.width>0&&x.image.height>0&&f.drawImage(x.image,c,c,x.image.width-2*c,x.image.height-2*c,b*y,U*y,M*y,R*y)});const v=hi(o);return a.getTriangles().forEach(function(x,A,w){const b=x.source,U=x.target;let M=b[0][0],R=b[0][1],Z=b[1][0],q=b[1][1],P=b[2][0],G=b[2][1];const V=m((U[0][0]-v[0])/s),j=m(-(U[0][1]-v[1])/s),z=m((U[1][0]-v[0])/s),Y=m(-(U[1][1]-v[1])/s),$=m((U[2][0]-v[0])/s),K=m(-(U[2][1]-v[1])/s),B=M,H=R;M=0,R=0,Z-=B,q-=H,P-=B,G-=H;const re=[[Z,q,0,0,z-V],[P,G,0,0,$-V],[0,0,Z,q,Y-j],[0,0,P,G,K-j]],ee=md(re);if(ee){if(d.save(),d.beginPath(),rm()||!u){d.moveTo(z,Y);const ne=4,pe=V-z,ve=j-Y;for(let he=0;he<ne;he++)d.lineTo(z+m((he+1)*pe/ne),Y+m(he*ve/(ne-1))),he!=ne-1&&d.lineTo(z+m((he+1)*pe/ne),Y+m((he+1)*ve/(ne-1)));d.lineTo($,K)}else d.moveTo(z,Y),d.lineTo(V,j),d.lineTo($,K);d.clip(),d.transform(ee[0],ee[2],ee[1],ee[3],V,j),d.translate(g[0]-B,g[3]-H),d.scale(n/t,-n/t),d.drawImage(f.canvas,0,0),d.restore()}}),h&&(d.save(),d.globalCompositeOperation="source-over",d.strokeStyle="black",d.lineWidth=1,a.getTriangles().forEach(function(x,A,w){const b=x.target,U=(b[0][0]-v[0])/s,M=-(b[0][1]-v[1])/s,R=(b[1][0]-v[0])/s,Z=-(b[1][1]-v[1])/s,q=(b[2][0]-v[0])/s,P=-(b[2][1]-v[1])/s;d.beginPath(),d.moveTo(R,Z),d.lineTo(U,M),d.lineTo(q,P),d.closePath(),d.stroke()}),d.restore()),d.canvas}class am extends Rh{constructor(e,t,n,r,s,o,a,l,c,h,u,d){super(s,_e.IDLE,{interpolate:!!d}),this.renderEdges_=u!==void 0?u:!1,this.pixelRatio_=a,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=t,this.targetTileGrid_=r,this.wrappedTileCoord_=o||s,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0;const m=r.getTileCoordExtent(this.wrappedTileCoord_),g=this.targetTileGrid_.getExtent();let _=this.sourceTileGrid_.getExtent();const p=g?hr(m,g):m;if(No(p)===0){this.state=_e.EMPTY;return}const f=e.getExtent();f&&(_?_=hr(_,f):_=f);const y=r.getResolution(this.wrappedTileCoord_[0]),v=sm(e,n,p,y);if(!isFinite(v)||v<=0){this.state=_e.EMPTY;return}const x=h!==void 0?h:em;if(this.triangulation_=new im(e,n,p,_,v*x,y),this.triangulation_.getTriangles().length===0){this.state=_e.EMPTY;return}this.sourceZ_=t.getZForResolution(v);let A=this.triangulation_.calculateSourceExtent();if(_&&(e.canWrapX()?(A[1]=gt(A[1],_[1],_[3]),A[3]=gt(A[3],_[1],_[3])):A=hr(A,_)),!No(A))this.state=_e.EMPTY;else{const w=t.getTileRangeForExtentAndZ(A,this.sourceZ_);for(let b=w.minX;b<=w.maxX;b++)for(let U=w.minY;U<=w.maxY;U++){const M=c(this.sourceZ_,b,U,a);M&&this.sourceTiles_.push(M)}this.sourceTiles_.length===0&&(this.state=_e.EMPTY)}}getImage(){return this.canvas_}reproject_(){const e=[];if(this.sourceTiles_.forEach(function(t,n,r){t&&t.getState()==_e.LOADED&&e.push({extent:this.sourceTileGrid_.getTileCoordExtent(t.tileCoord),image:t.getImage()})}.bind(this)),this.sourceTiles_.length=0,e.length===0)this.state=_e.ERROR;else{const t=this.wrappedTileCoord_[0],n=this.targetTileGrid_.getTileSize(t),r=typeof n=="number"?n:n[0],s=typeof n=="number"?n:n[1],o=this.targetTileGrid_.getResolution(t),a=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=om(r,s,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,l,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=_e.LOADED}this.changed()}load(){if(this.state==_e.IDLE){this.state=_e.LOADING,this.changed();let e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(function(t,n,r){const s=t.getState();if(s==_e.IDLE||s==_e.LOADING){e++;const o=Ve(t,Oe.CHANGE,function(a){const l=t.getState();(l==_e.LOADED||l==_e.ERROR||l==_e.EMPTY)&&(tt(o),e--,e===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(o)}}.bind(this)),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(t,n,r){t.getState()==_e.IDLE&&t.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(tt),this.sourcesListenerKeys_=null}release(){this.canvas_&&(hf(this.canvas_.getContext("2d")),zh.push(this.canvas_),this.canvas_=null),super.release()}}const Wo=am;class lm extends Sf{constructor(e){super(e),this.extentChanged=!0,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedRevision,this.renderedTiles=[],this.newTiles_=!1,this.tmpExtent=ci(),this.tmpTileRange_=new Oh(0,0,0,0)}isDrawableTile(e){const t=this.getLayer(),n=e.getState(),r=t.getUseInterimTilesOnError();return n==_e.LOADED||n==_e.EMPTY||n==_e.ERROR&&!r}getTile(e,t,n,r){const s=r.pixelRatio,o=r.viewState.projection,a=this.getLayer();let c=a.getSource().getTile(e,t,n,s,o);return c.getState()==_e.ERROR&&a.getUseInterimTilesOnError()&&a.getPreload()>0&&(this.newTiles_=!0),this.isDrawableTile(c)||(c=c.getInterimTile()),c}getData(e){const t=this.frameState;if(!t)return null;const n=this.getLayer(),r=Bt(t.pixelToCoordinateTransform,e.slice()),s=n.getExtent();if(s&&!ha(s,r))return null;const o=t.pixelRatio,a=t.viewState.projection,l=t.viewState,c=n.getRenderSource(),h=c.getTileGridForProjection(l.projection),u=c.getTilePixelRatio(t.pixelRatio);for(let d=h.getZForResolution(l.resolution);d>=h.getMinZoom();--d){const m=h.getTileCoordForCoordAndZ(r,d),g=c.getTile(d,m[1],m[2],o,a);if(!(g instanceof bh||g instanceof Wo)||g instanceof Wo&&g.getState()===_e.EMPTY)return null;if(g.getState()!==_e.LOADED)continue;const _=h.getOrigin(d),p=_n(h.getTileSize(d)),f=h.getResolution(d),y=Math.floor(u*((r[0]-_[0])/f-m[1]*p[0])),v=Math.floor(u*((_[1]-r[1])/f-m[2]*p[1])),x=Math.round(u*c.getGutterForProjection(l.projection));return this.getImageData(g.getImage(),y+x,v+x)}return null}loadedTileCallback(e,t,n){return this.isDrawableTile(n)?super.loadedTileCallback(e,t,n):!1}prepareFrame(e){return!!this.getLayer().getSource()}renderFrame(e,t){const n=e.layerStatesArray[e.layerIndex],r=e.viewState,s=r.projection,o=r.resolution,a=r.center,l=r.rotation,c=e.pixelRatio,h=this.getLayer(),u=h.getSource(),d=u.getRevision(),m=u.getTileGridForProjection(s),g=m.getZForResolution(o,u.zDirection),_=m.getResolution(g);let p=e.extent;const f=e.viewState.resolution,y=u.getTilePixelRatio(c),v=Math.round(mt(p)/f*c),x=Math.round(rn(p)/f*c),A=n.extent&&Oi(n.extent,s);A&&(p=hr(p,Oi(n.extent,s)));const w=_*v/2/y,b=_*x/2/y,U=[a[0]-w,a[1]-b,a[0]+w,a[1]+b],M=m.getTileRangeForExtentAndZ(p,g),R={};R[g]={};const Z=this.createLoadedTileFinder(u,s,R),q=this.tmpExtent,P=this.tmpTileRange_;this.newTiles_=!1;const G=l?Oo(r.center,f,l,e.size):void 0;for(let re=M.minX;re<=M.maxX;++re)for(let ee=M.minY;ee<=M.maxY;++ee){if(l&&!m.tileCoordIntersectsViewport([g,re,ee],G))continue;const ne=this.getTile(g,re,ee,e);if(this.isDrawableTile(ne)){const he=wt(this);if(ne.getState()==_e.LOADED){R[g][ne.tileCoord.toString()]=ne;let De=ne.inTransition(he);De&&n.opacity!==1&&(ne.endTransition(he),De=!1),!this.newTiles_&&(De||!this.renderedTiles.includes(ne))&&(this.newTiles_=!0)}if(ne.getAlpha(he,e.time)===1)continue}const pe=m.getTileCoordChildTileRange(ne.tileCoord,P,q);let ve=!1;pe&&(ve=Z(g+1,pe)),ve||m.forEachTileCoordParentTileRange(ne.tileCoord,Z,P,q)}const V=_/o*c/y;mr(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/c,1/c,l,-v/2,-x/2);const j=Yu(this.pixelTransform);this.useContainer(t,j,this.getBackground(e));const z=this.context,Y=z.canvas;rh(this.inversePixelTransform,this.pixelTransform),mr(this.tempTransform,v/2,x/2,V,V,0,-v/2,-x/2),Y.width!=v||Y.height!=x?(Y.width=v,Y.height=x):this.containerReused||z.clearRect(0,0,v,x),A&&this.clipUnrotated(z,e,A),u.getInterpolate()||(z.imageSmoothingEnabled=!1),this.preRender(z,e),this.renderedTiles.length=0;let $=Object.keys(R).map(Number);$.sort(oa);let K,B,H;n.opacity===1&&(!this.containerReused||u.getOpaque(e.viewState.projection))?$=$.reverse():(K=[],B=[]);for(let re=$.length-1;re>=0;--re){const ee=$[re],ne=u.getTilePixelSize(ee,c,s),ve=m.getResolution(ee)/_,he=ne[0]*ve*V,De=ne[1]*ve*V,dt=m.getTileCoordForCoordAndZ(hi(U),ee),be=m.getTileCoordExtent(dt),I=Bt(this.tempTransform,[y*(be[0]-U[0])/_,y*(U[3]-be[3])/_]),ft=y*u.getGutterForProjection(s),Ee=R[ee];for(const Re in Ee){const Me=Ee[Re],Xe=Me.tileCoord,Pe=dt[1]-Xe[1],we=Math.round(I[0]-(Pe-1)*he),He=dt[2]-Xe[2],at=Math.round(I[1]-(He-1)*De),Ye=Math.round(I[0]-Pe*he),T=Math.round(I[1]-He*De),E=we-Ye,F=at-T,te=g===ee,J=te&&Me.getAlpha(wt(this),e.time)!==1;let Q=!1;if(!J)if(K){H=[Ye,T,Ye+E,T,Ye+E,T+F,Ye,T+F];for(let fe=0,ie=K.length;fe<ie;++fe)if(g!==ee&&ee<B[fe]){const O=K[fe];Ps([Ye,T,Ye+E,T+F],[O[0],O[3],O[4],O[7]])&&(Q||(z.save(),Q=!0),z.beginPath(),z.moveTo(H[0],H[1]),z.lineTo(H[2],H[3]),z.lineTo(H[4],H[5]),z.lineTo(H[6],H[7]),z.moveTo(O[6],O[7]),z.lineTo(O[4],O[5]),z.lineTo(O[2],O[3]),z.lineTo(O[0],O[1]),z.clip())}K.push(H),B.push(ee)}else z.clearRect(Ye,T,E,F);this.drawTileImage(Me,e,Ye,T,E,F,ft,te),K&&!J?(Q&&z.restore(),this.renderedTiles.unshift(Me)):this.renderedTiles.push(Me),this.updateUsedTiles(e.usedTiles,u,Me)}}return this.renderedRevision=d,this.renderedResolution=_,this.extentChanged=!this.renderedExtent_||!Uo(this.renderedExtent_,U),this.renderedExtent_=U,this.renderedPixelRatio=c,this.renderedProjection=s,this.manageTilePyramid(e,u,m,c,s,p,g,h.getPreload()),this.scheduleExpireCache(e,u),this.postRender(z,e),n.extent&&z.restore(),z.imageSmoothingEnabled=!0,j!==Y.style.transform&&(Y.style.transform=j),this.container}drawTileImage(e,t,n,r,s,o,a,l){const c=this.getTileImage(e);if(!c)return;const h=wt(this),u=t.layerStatesArray[t.layerIndex],d=u.opacity*(l?e.getAlpha(h,t.time):1),m=d!==this.context.globalAlpha;m&&(this.context.save(),this.context.globalAlpha=d),this.context.drawImage(c,a,a,c.width-2*a,c.height-2*a,n,r,s,o),m&&this.context.restore(),d!==u.opacity?t.animate=!0:l&&e.endTransition(h)}getImage(){const e=this.context;return e?e.canvas:null}getTileImage(e){return e.getImage()}scheduleExpireCache(e,t){if(t.canExpireCache()){const n=function(r,s,o){const a=wt(r);a in o.usedTiles&&r.expireCache(o.viewState.projection,o.usedTiles[a])}.bind(null,t);e.postRenderFunctions.push(n)}}updateUsedTiles(e,t,n){const r=wt(t);r in e||(e[r]={}),e[r][n.getKey()]=!0}manageTilePyramid(e,t,n,r,s,o,a,l,c){const h=wt(t);h in e.wantedTiles||(e.wantedTiles[h]={});const u=e.wantedTiles[h],d=e.tileQueue,m=n.getMinZoom(),g=e.viewState.rotation,_=g?Oo(e.viewState.center,e.viewState.resolution,g,e.size):void 0;let p=0,f,y,v,x,A,w;for(w=m;w<=a;++w)for(y=n.getTileRangeForExtentAndZ(o,w,y),v=n.getResolution(w),x=y.minX;x<=y.maxX;++x)for(A=y.minY;A<=y.maxY;++A)g&&!n.tileCoordIntersectsViewport([w,x,A],_)||(a-w<=l?(++p,f=t.getTile(w,x,A,r,s),f.getState()==_e.IDLE&&(u[f.getKey()]=!0,d.isKeyQueued(f.getKey())||d.enqueue([f,h,n.getTileCoordCenter(f.tileCoord),v])),c!==void 0&&c(f)):t.useTile(w,x,A,s));t.updateCacheSize(p,s)}}const cm=lm;class hm extends Qp{constructor(e){super(e)}createRenderer(){return new cm(this)}}const um=hm,$s={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"},dm=[0,0,0],Tn=5;class fm{constructor(e){this.minZoom=e.minZoom!==void 0?e.minZoom:0,this.resolutions_=e.resolutions,We(Iu(this.resolutions_,function(r,s){return s-r},!0),17);let t;if(!e.origins){for(let r=0,s=this.resolutions_.length-1;r<s;++r)if(!t)t=this.resolutions_[r]/this.resolutions_[r+1];else if(this.resolutions_[r]/this.resolutions_[r+1]!==t){t=void 0;break}}this.zoomFactor_=t,this.maxZoom=this.resolutions_.length-1,this.origin_=e.origin!==void 0?e.origin:null,this.origins_=null,e.origins!==void 0&&(this.origins_=e.origins,We(this.origins_.length==this.resolutions_.length,20));const n=e.extent;n!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=hi(n)),We(!this.origin_&&this.origins_||this.origin_&&!this.origins_,18),this.tileSizes_=null,e.tileSizes!==void 0&&(this.tileSizes_=e.tileSizes,We(this.tileSizes_.length==this.resolutions_.length,19)),this.tileSize_=e.tileSize!==void 0?e.tileSize:this.tileSizes_?null:Sa,We(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,22),this.extent_=n!==void 0?n:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],e.sizes!==void 0?this.fullTileRanges_=e.sizes.map(function(r,s){const o=new Oh(Math.min(0,r[0]),Math.max(r[0]-1,-1),Math.min(0,r[1]),Math.max(r[1]-1,-1));if(n){const a=this.getTileRangeForExtentAndZ(n,s);o.minX=Math.max(a.minX,o.minX),o.maxX=Math.min(a.maxX,o.maxX),o.minY=Math.max(a.minY,o.minY),o.maxY=Math.min(a.maxY,o.maxY)}return o},this):n&&this.calculateTileRanges_(n)}forEachTileCoord(e,t,n){const r=this.getTileRangeForExtentAndZ(e,t);for(let s=r.minX,o=r.maxX;s<=o;++s)for(let a=r.minY,l=r.maxY;a<=l;++a)n([t,s,a])}forEachTileCoordParentTileRange(e,t,n,r){let s,o,a,l=null,c=e[0]-1;for(this.zoomFactor_===2?(o=e[1],a=e[2]):l=this.getTileCoordExtent(e,r);c>=this.minZoom;){if(this.zoomFactor_===2?(o=Math.floor(o/2),a=Math.floor(a/2),s=fi(o,o,a,a,n)):s=this.getTileRangeForExtentAndZ(l,c,n),t(c,s))return!0;--c}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(e){return this.origin_?this.origin_:this.origins_[e]}getResolution(e){return this.resolutions_[e]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(e,t,n){if(e[0]<this.maxZoom){if(this.zoomFactor_===2){const s=e[1]*2,o=e[2]*2;return fi(s,s+1,o,o+1,t)}const r=this.getTileCoordExtent(e,n||this.tmpExtent_);return this.getTileRangeForExtentAndZ(r,e[0]+1,t)}return null}getTileRangeForTileCoordAndZ(e,t,n){if(t>this.maxZoom||t<this.minZoom)return null;const r=e[0],s=e[1],o=e[2];if(t===r)return fi(s,o,s,o,n);if(this.zoomFactor_){const l=Math.pow(this.zoomFactor_,t-r),c=Math.floor(s*l),h=Math.floor(o*l);if(t<r)return fi(c,c,h,h,n);const u=Math.floor(l*(s+1))-1,d=Math.floor(l*(o+1))-1;return fi(c,u,h,d,n)}const a=this.getTileCoordExtent(e,this.tmpExtent_);return this.getTileRangeForExtentAndZ(a,t,n)}getTileRangeExtent(e,t,n){const r=this.getOrigin(e),s=this.getResolution(e),o=_n(this.getTileSize(e),this.tmpSize_),a=r[0]+t.minX*o[0]*s,l=r[0]+(t.maxX+1)*o[0]*s,c=r[1]+t.minY*o[1]*s,h=r[1]+(t.maxY+1)*o[1]*s;return si(a,c,l,h,n)}getTileRangeForExtentAndZ(e,t,n){const r=dm;this.getTileCoordForXYAndZ_(e[0],e[3],t,!1,r);const s=r[1],o=r[2];return this.getTileCoordForXYAndZ_(e[2],e[1],t,!0,r),fi(s,r[1],o,r[2],n)}getTileCoordCenter(e){const t=this.getOrigin(e[0]),n=this.getResolution(e[0]),r=_n(this.getTileSize(e[0]),this.tmpSize_);return[t[0]+(e[1]+.5)*r[0]*n,t[1]-(e[2]+.5)*r[1]*n]}getTileCoordExtent(e,t){const n=this.getOrigin(e[0]),r=this.getResolution(e[0]),s=_n(this.getTileSize(e[0]),this.tmpSize_),o=n[0]+e[1]*s[0]*r,a=n[1]-(e[2]+1)*s[1]*r,l=o+s[0]*r,c=a+s[1]*r;return si(o,a,l,c,t)}getTileCoordForCoordAndResolution(e,t,n){return this.getTileCoordForXYAndResolution_(e[0],e[1],t,!1,n)}getTileCoordForXYAndResolution_(e,t,n,r,s){const o=this.getZForResolution(n),a=n/this.getResolution(o),l=this.getOrigin(o),c=_n(this.getTileSize(o),this.tmpSize_);let h=a*(e-l[0])/n/c[0],u=a*(l[1]-t)/n/c[1];return r?(h=Ur(h,Tn)-1,u=Ur(u,Tn)-1):(h=Dr(h,Tn),u=Dr(u,Tn)),vl(o,h,u,s)}getTileCoordForXYAndZ_(e,t,n,r,s){const o=this.getOrigin(n),a=this.getResolution(n),l=_n(this.getTileSize(n),this.tmpSize_);let c=(e-o[0])/a/l[0],h=(o[1]-t)/a/l[1];return r?(c=Ur(c,Tn)-1,h=Ur(h,Tn)-1):(c=Dr(c,Tn),h=Dr(h,Tn)),vl(n,c,h,s)}getTileCoordForCoordAndZ(e,t,n){return this.getTileCoordForXYAndZ_(e[0],e[1],t,!1,n)}getTileCoordResolution(e){return this.resolutions_[e[0]]}getTileSize(e){return this.tileSize_?this.tileSize_:this.tileSizes_[e]}getFullTileRange(e){return this.fullTileRanges_?this.fullTileRanges_[e]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,e):null}getZForResolution(e,t){const n=aa(this.resolutions_,e,t||0);return gt(n,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(e,t){return Eh(t,0,t.length,2,this.getTileCoordExtent(e))}calculateTileRanges_(e){const t=this.resolutions_.length,n=new Array(t);for(let r=this.minZoom;r<t;++r)n[r]=this.getTileRangeForExtentAndZ(e,r);this.fullTileRanges_=n}}const Bh=fm;function Gh(i){let e=i.getDefaultTileGrid();return e||(e=_m(i),i.setDefaultTileGrid(e)),e}function pm(i,e,t){const n=e[0],r=i.getTileCoordCenter(e),s=La(t);if(ha(s,r))return e;{const o=mt(s),a=Math.ceil((s[0]-r[0])/o);return r[0]+=o*a,i.getTileCoordForCoordAndZ(r,n)}}function mm(i,e,t,n){n=n!==void 0?n:"top-left";const r=Hh(i,e,t);return new Bh({extent:i,origin:ed(i,n),resolutions:r,tileSize:t})}function gm(i){const e=i||{},t=e.extent||Wt("EPSG:3857").getExtent(),n={extent:t,minZoom:e.minZoom,tileSize:e.tileSize,resolutions:Hh(t,e.maxZoom,e.tileSize,e.maxResolution)};return new Bh(n)}function Hh(i,e,t,n){e=e!==void 0?e:qf,t=_n(t!==void 0?t:Sa);const r=rn(i),s=mt(i);n=n>0?n:Math.max(s/t[0],r/t[1]);const o=e+1,a=new Array(o);for(let l=0;l<o;++l)a[l]=n/Math.pow(2,l);return a}function _m(i,e,t,n){const r=La(i);return mm(r,e,t,n)}function La(i){i=Wt(i);let e=i.getExtent();if(!e){const t=180*_r.degrees/i.getMetersPerUnit();e=si(-t,-t,t,t)}return e}class vm extends Af{constructor(e){super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate}),this.on,this.once,this.un,this.opaque_=e.opaque!==void 0?e.opaque:!1,this.tilePixelRatio_=e.tilePixelRatio!==void 0?e.tilePixelRatio:1,this.tileGrid=e.tileGrid!==void 0?e.tileGrid:null;const t=[256,256];this.tileGrid&&_n(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),t),this.tileCache=new Nh(e.cacheSize||0),this.tmpSize=[0,0],this.key_=e.key||"",this.tileOptions={transition:e.transition,interpolate:e.interpolate},this.zDirection=e.zDirection?e.zDirection:0}canExpireCache(){return this.tileCache.canExpireCache()}expireCache(e,t){const n=this.getTileCacheForProjection(e);n&&n.expireCache(t)}forEachLoadedTile(e,t,n,r){const s=this.getTileCacheForProjection(e);if(!s)return!1;let o=!0,a,l,c;for(let h=n.minX;h<=n.maxX;++h)for(let u=n.minY;u<=n.maxY;++u)l=Us(t,h,u),c=!1,s.containsKey(l)&&(a=s.get(l),c=a.getState()===_e.LOADED,c&&(c=r(a)!==!1)),c||(o=!1);return o}getGutterForProjection(e){return 0}getKey(){return this.key_}setKey(e){this.key_!==e&&(this.key_=e,this.changed())}getOpaque(e){return this.opaque_}getResolutions(){return this.tileGrid?this.tileGrid.getResolutions():null}getTile(e,t,n,r,s){return $e()}getTileGrid(){return this.tileGrid}getTileGridForProjection(e){return this.tileGrid?this.tileGrid:Gh(e)}getTileCacheForProjection(e){const t=this.getProjection();return We(t===null||Pi(t,e),68),this.tileCache}getTilePixelRatio(e){return this.tilePixelRatio_}getTilePixelSize(e,t,n){const r=this.getTileGridForProjection(n),s=this.getTilePixelRatio(t),o=_n(r.getTileSize(e),this.tmpSize);return s==1?o:tf(o,s,this.tmpSize)}getTileCoordForTileUrlFunction(e,t){t=t!==void 0?t:this.getProjection();const n=this.getTileGridForProjection(t);return this.getWrapX()&&t.isGlobal()&&(e=pm(n,e,t)),jp(e,n)?e:null}clear(){this.tileCache.clear()}refresh(){this.clear(),super.refresh()}updateCacheSize(e,t){const n=this.getTileCacheForProjection(t);e>n.highWaterMark&&(n.highWaterMark=e)}useTile(e,t,n,r){}}class xm extends Hn{constructor(e,t){super(e),this.tile=t}}const Em=vm;function Mm(i,e){const t=/\{z\}/g,n=/\{x\}/g,r=/\{y\}/g,s=/\{-y\}/g;return function(o,a,l){if(o)return i.replace(t,o[0].toString()).replace(n,o[1].toString()).replace(r,o[2].toString()).replace(s,function(){const c=o[0],h=e.getFullTileRange(c);return We(h,55),(h.getHeight()-o[2]-1).toString()})}}function ym(i,e){const t=i.length,n=new Array(t);for(let r=0;r<t;++r)n[r]=Mm(i[r],e);return Sm(n)}function Sm(i){return i.length===1?i[0]:function(e,t,n){if(e){const r=Zp(e),s=ki(r,i.length);return i[s](e,t,n)}else return}}function Tm(i){const e=[];let t=/\{([a-z])-([a-z])\}/.exec(i);if(t){const n=t[1].charCodeAt(0),r=t[2].charCodeAt(0);let s;for(s=n;s<=r;++s)e.push(i.replace(t[0],String.fromCharCode(s)));return e}if(t=/\{(\d+)-(\d+)\}/.exec(i),t){const n=parseInt(t[2],10);for(let r=parseInt(t[1],10);r<=n;r++)e.push(i.replace(t[0],r.toString()));return e}return e.push(i),e}class Pa extends Em{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===Pa.prototype.tileUrlFunction,this.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(this.tileUrlFunction=e.tileUrlFunction),this.urls=null,e.urls?this.setUrls(e.urls):e.url&&this.setUrl(e.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(e){const t=e.target,n=wt(t),r=t.getState();let s;r==_e.LOADING?(this.tileLoadingKeys_[n]=!0,s=$s.TILELOADSTART):n in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[n],s=r==_e.ERROR?$s.TILELOADERROR:r==_e.LOADED?$s.TILELOADEND:void 0),s!=null&&this.dispatchEvent(new xm(s,t))}setTileLoadFunction(e){this.tileCache.clear(),this.tileLoadFunction=e,this.changed()}setTileUrlFunction(e,t){this.tileUrlFunction=e,this.tileCache.pruneExceptNewestZ(),typeof t<"u"?this.setKey(t):this.changed()}setUrl(e){const t=Tm(e);this.urls=t,this.setUrls(t)}setUrls(e){this.urls=e;const t=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(ym(e,this.tileGrid),t):this.setKey(t)}tileUrlFunction(e,t,n){}useTile(e,t,n){const r=Us(e,t,n);this.tileCache.containsKey(r)&&this.tileCache.get(r)}}const Am=Pa;class Rm extends Am{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:bm,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate!==void 0?e.interpolate:!0,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,this.tileClass=e.tileClass!==void 0?e.tileClass:bh,this.tileCacheForProjection={},this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}canExpireCache(){if(this.tileCache.canExpireCache())return!0;for(const e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1}expireCache(e,t){const n=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==n?t:{});for(const r in this.tileCacheForProjection){const s=this.tileCacheForProjection[r];s.expireCache(s==n?t:{})}}getGutterForProjection(e){return this.getProjection()&&e&&!Pi(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=":disable-interpolation"),e}getOpaque(e){return this.getProjection()&&e&&!Pi(this.getProjection(),e)?!1:super.getOpaque(e)}getTileGridForProjection(e){const t=this.getProjection();if(this.tileGrid&&(!t||Pi(t,e)))return this.tileGrid;{const n=wt(e);return n in this.tileGridForProjection||(this.tileGridForProjection[n]=Gh(e)),this.tileGridForProjection[n]}}getTileCacheForProjection(e){const t=this.getProjection();if(!t||Pi(t,e))return this.tileCache;{const n=wt(e);return n in this.tileCacheForProjection||(this.tileCacheForProjection[n]=new Nh(this.tileCache.highWaterMark)),this.tileCacheForProjection[n]}}createTile_(e,t,n,r,s,o){const a=[e,t,n],l=this.getTileCoordForTileUrlFunction(a,s),c=l?this.tileUrlFunction(l,r,s):void 0,h=new this.tileClass(a,c!==void 0?_e.IDLE:_e.EMPTY,c!==void 0?c:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return h.key=o,h.addEventListener(Oe.CHANGE,this.handleTileChange.bind(this)),h}getTile(e,t,n,r,s){const o=this.getProjection();if(!o||!s||Pi(o,s))return this.getTileInternal(e,t,n,r,o||s);{const a=this.getTileCacheForProjection(s),l=[e,t,n];let c;const h=Uh(l);a.containsKey(h)&&(c=a.get(h));const u=this.getKey();if(c&&c.key==u)return c;{const d=this.getTileGridForProjection(o),m=this.getTileGridForProjection(s),g=this.getTileCoordForTileUrlFunction(l,s),_=new Wo(o,d,s,m,l,g,this.getTilePixelRatio(r),this.getGutter(),function(p,f,y,v){return this.getTileInternal(p,f,y,v,o)}.bind(this),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.getInterpolate());return _.key=u,c?(_.interimTile=c,_.refreshInterimChain(),a.replace(h,_)):a.set(h,_),_}}}getTileInternal(e,t,n,r,s){let o=null;const a=Us(e,t,n),l=this.getKey();if(!this.tileCache.containsKey(a))o=this.createTile_(e,t,n,r,s,l),this.tileCache.set(a,o);else if(o=this.tileCache.get(a),o.key!=l){const c=o;o=this.createTile_(e,t,n,r,s,l),c.getState()==_e.IDLE?o.interimTile=c.interimTile:o.interimTile=c,o.refreshInterimChain(),this.tileCache.replace(a,o)}return o}setRenderReprojectionEdges(e){if(this.renderReprojectionEdges_!=e){this.renderReprojectionEdges_=e;for(const t in this.tileCacheForProjection)this.tileCacheForProjection[t].clear();this.changed()}}setTileGridForProjection(e,t){const n=Wt(e);if(n){const r=wt(n);r in this.tileGridForProjection||(this.tileGridForProjection[r]=t)}}clear(){super.clear();for(const e in this.tileCacheForProjection)this.tileCacheForProjection[e].clear()}}function bm(i,e){i.getImage().src=e}const wm=Rm;class Cm extends wm{constructor(e){e=e||{};const t=e.projection!==void 0?e.projection:"EPSG:3857",n=e.tileGrid!==void 0?e.tileGrid:gm({extent:La(t),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:e.opaque,projection:t,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:n,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0}getGutter(){return this.gutter_}}const Lm=Cm,Pm='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';class Im extends Lm{constructor(e){e=e||{};let t;e.attributions!==void 0?t=e.attributions:t=[Pm];const n=e.crossOrigin!==void 0?e.crossOrigin:"anonymous",r=e.url!==void 0?e.url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png";super({attributions:t,attributionsCollapsible:!1,cacheSize:e.cacheSize,crossOrigin:n,interpolate:e.interpolate,maxZoom:e.maxZoom!==void 0?e.maxZoom:19,opaque:e.opaque!==void 0?e.opaque:!0,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,transition:e.transition,url:r,wrapX:e.wrapX,zDirection:e.zDirection})}}const Dm=Im;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ia="156",Um=0,yl=1,Nm=2,Vh=1,Fm=2,gn=3,Gn=0,Lt=1,vn=2,Fn=0,Wi=1,Sl=2,Tl=3,Al=4,Om=5,Ui=100,zm=101,Bm=102,Rl=103,bl=104,Gm=200,Hm=201,Vm=202,km=203,kh=204,Wh=205,Wm=206,Xm=207,Ym=208,qm=209,Km=210,Zm=0,jm=1,$m=2,Xo=3,Jm=4,Qm=5,eg=6,tg=7,Xh=0,ng=1,ig=2,On=0,rg=1,sg=2,og=3,ag=4,lg=5,Yh=300,Ki=301,Zi=302,Yo=303,qo=304,Ns=306,Ko=1e3,Jt=1001,Zo=1002,Rt=1003,wl=1004,Js=1005,Vt=1006,cg=1007,Er=1008,zn=1009,hg=1010,ug=1011,Da=1012,qh=1013,Dn=1014,Un=1015,Mr=1016,Kh=1017,Zh=1018,ti=1020,dg=1021,Qt=1023,fg=1024,pg=1025,ni=1026,ji=1027,mg=1028,jh=1029,gg=1030,$h=1031,Jh=1033,Qs=33776,eo=33777,to=33778,no=33779,Cl=35840,Ll=35841,Pl=35842,Il=35843,_g=36196,Dl=37492,Ul=37496,Nl=37808,Fl=37809,Ol=37810,zl=37811,Bl=37812,Gl=37813,Hl=37814,Vl=37815,kl=37816,Wl=37817,Xl=37818,Yl=37819,ql=37820,Kl=37821,io=36492,Zl=36494,jl=36495,vg=36283,$l=36284,Jl=36285,Ql=36286,Qh=3e3,ii=3001,xg=3200,Eg=3201,eu=0,Mg=1,ri="",Ze="srgb",on="srgb-linear",Fs="display-p3",ro=7680,yg=519,Sg=512,Tg=513,Ag=514,Rg=515,bg=516,wg=517,Cg=518,Lg=519,ec=35044,tc="300 es",jo=1035,En=2e3,Ms=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],so=Math.PI/180,$o=180/Math.PI;function Ar(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function Pg(i,e){return(i%e+e)%e}function oo(i,e,t){return(1-t)*i+t*e}function nc(i){return(i&i-1)===0&&i!==0}function Jo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,n,r,s,o,a,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=r[0],p=r[3],f=r[6],y=r[1],v=r[4],x=r[7],A=r[2],w=r[5],b=r[8];return s[0]=o*_+a*y+l*A,s[3]=o*p+a*v+l*w,s[6]=o*f+a*x+l*b,s[1]=c*_+h*y+u*A,s[4]=c*p+h*v+u*w,s[7]=c*f+h*x+u*b,s[2]=d*_+m*y+g*A,s[5]=d*p+m*v+g*w,s[8]=d*f+m*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,m=c*s-o*l,g=t*u+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ao.makeScale(e,t)),this}rotate(e){return this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new Ie;function tu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ig(){const i=ys("canvas");return i.style.display="block",i}const ic={};function ur(i){i in ic||(ic[i]=!0,console.warn(i))}function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Dg=new Ie().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ug=new Ie().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ng(i){return i.convertSRGBToLinear().applyMatrix3(Ug)}function Fg(i){return i.applyMatrix3(Dg).convertLinearToSRGB()}const Og={[on]:i=>i,[Ze]:i=>i.convertSRGBToLinear(),[Fs]:Ng},zg={[on]:i=>i,[Ze]:i=>i.convertLinearToSRGB(),[Fs]:Fg},Yt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return on},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Og[e],r=zg[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let pi;class nu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=ys("canvas")),pi.width=e.width,pi.height=e.height;const n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bg=0;class iu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Ar(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(co(r[o].image)):s.push(co(r[o]))}else s=co(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gg=0;class Pt extends Qi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Jt,r=Jt,s=Vt,o=Er,a=Qt,l=zn,c=Pt.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Ar(),this.name="",this.source=new iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ii?Ze:ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ko:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ko:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ze?ii:Qh}set encoding(e){ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ii?Ze:ri}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Yh;Pt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(m+1)/2,A=(f+1)/2,w=(h+d)/4,b=(u+_)/4,U=(g+p)/4;return v>x&&v>A?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=b/n):x>A?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=w/r,s=U/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=b/s,r=U/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hg extends Qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ur("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ii?Ze:ri),this.texture=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new iu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Hg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ru extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vg extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let p=1-a;const f=l*d+c*m+h*g+u*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const A=Math.sqrt(v),w=Math.atan2(A,f*y);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const x=a*y;if(l=l*p+d*x,c=c*p+m*x,h=h*p+g*x,u=u*p+_*x,p===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-a*m,e[t+2]=c*g+h*m+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),d=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,h=l*n+a*t-s*r,u=l*r+s*n-o*t,d=-s*t-o*n-a*r;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ho.copy(this).projectOnVector(e),this.sub(ho)}reflect(e){return this.sub(ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ho=new L,rc=new Rr;class br{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),mi.copy(e.boundingBox),mi.applyMatrix4(e.matrixWorld),this.union(mi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)hn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(hn)}else r.boundingBox===null&&r.computeBoundingBox(),mi.copy(r.boundingBox),mi.applyMatrix4(e.matrixWorld),this.union(mi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Br.subVectors(this.max,sr),gi.subVectors(e.a,sr),_i.subVectors(e.b,sr),vi.subVectors(e.c,sr),An.subVectors(_i,gi),Rn.subVectors(vi,_i),Yn.subVectors(gi,vi);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Yn.z,Yn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Yn.z,0,-Yn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Yn.y,Yn.x,0];return!uo(t,gi,_i,vi,Br)||(t=[1,0,0,0,1,0,0,0,1],!uo(t,gi,_i,vi,Br))?!1:(Gr.crossVectors(An,Rn),t=[Gr.x,Gr.y,Gr.z],uo(t,gi,_i,vi,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,mi=new br,gi=new L,_i=new L,vi=new L,An=new L,Rn=new L,Yn=new L,sr=new L,Br=new L,Gr=new L,qn=new L;function uo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){qn.fromArray(i,s);const a=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const kg=new br,or=new L,fo=new L;class Os{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(or,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(fo)),this.expandByPoint(or.copy(e.center).sub(fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new L,po=new L,Hr=new L,bn=new L,mo=new L,Vr=new L,go=new L;class su{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){po.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(po);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Hr),a=bn.dot(this.direction),l=-bn.dot(Hr),c=bn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(po).addScaledVector(Hr,d),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){mo.subVectors(t,e),Vr.subVectors(n,e),go.crossVectors(mo,Vr);let o=this.direction.dot(go),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bn.subVectors(this.origin,e);const l=a*this.direction.dot(Vr.crossVectors(bn,Vr));if(l<0)return null;const c=a*this.direction.dot(mo.cross(bn));if(c<0||l+c>o)return null;const h=-a*bn.dot(go);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,r,s,o,a,l,c,h,u,d,m,g,_,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,d,m,g,_,p)}set(e,t,n,r,s,o,a,l,c,h,u,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/xi.setFromMatrixColumn(e,0).length(),s=1/xi.setFromMatrixColumn(e,1).length(),o=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wg,e,Xg)}lookAt(e,t,n){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),wn.crossVectors(n,Ut),wn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),wn.crossVectors(n,Ut)),wn.normalize(),kr.crossVectors(Ut,wn),r[0]=wn.x,r[4]=kr.x,r[8]=Ut.x,r[1]=wn.y,r[5]=kr.y,r[9]=Ut.y,r[2]=wn.z,r[6]=kr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],y=n[3],v=n[7],x=n[11],A=n[15],w=r[0],b=r[4],U=r[8],M=r[12],R=r[1],Z=r[5],q=r[9],P=r[13],G=r[2],V=r[6],j=r[10],z=r[14],Y=r[3],$=r[7],K=r[11],B=r[15];return s[0]=o*w+a*R+l*G+c*Y,s[4]=o*b+a*Z+l*V+c*$,s[8]=o*U+a*q+l*j+c*K,s[12]=o*M+a*P+l*z+c*B,s[1]=h*w+u*R+d*G+m*Y,s[5]=h*b+u*Z+d*V+m*$,s[9]=h*U+u*q+d*j+m*K,s[13]=h*M+u*P+d*z+m*B,s[2]=g*w+_*R+p*G+f*Y,s[6]=g*b+_*Z+p*V+f*$,s[10]=g*U+_*q+p*j+f*K,s[14]=g*M+_*P+p*z+f*B,s[3]=y*w+v*R+x*G+A*Y,s[7]=y*b+v*Z+x*V+A*$,s[11]=y*U+v*q+x*j+A*K,s[15]=y*M+v*P+x*z+A*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*l*u-r*c*u-s*a*d+n*c*d+r*a*m-n*l*m)+_*(+t*l*m-t*c*d+s*o*d-r*o*m+r*c*h-s*l*h)+p*(+t*c*u-t*a*m-s*o*u+n*o*m+s*a*h-n*c*h)+f*(-r*a*h-t*l*u+t*a*d+r*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],y=u*p*c-_*d*c+_*l*m-a*p*m-u*l*f+a*d*f,v=g*d*c-h*p*c-g*l*m+o*p*m+h*l*f-o*d*f,x=h*_*c-g*u*c+g*a*m-o*_*m-h*a*f+o*u*f,A=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,w=t*y+n*v+r*x+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=y*b,e[1]=(_*d*s-u*p*s-_*r*m+n*p*m+u*r*f-n*d*f)*b,e[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*f+n*l*f)*b,e[3]=(u*l*s-a*d*s-u*r*c+n*d*c+a*r*m-n*l*m)*b,e[4]=v*b,e[5]=(h*p*s-g*d*s+g*r*m-t*p*m-h*r*f+t*d*f)*b,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*f-t*l*f)*b,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*m+t*l*m)*b,e[8]=x*b,e[9]=(g*u*s-h*_*s-g*n*m+t*_*m+h*n*f-t*u*f)*b,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*f+t*a*f)*b,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*m-t*a*m)*b,e[12]=A*b,e[13]=(h*_*r-g*u*r+g*n*d-t*_*d-h*n*p+t*u*p)*b,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*p-t*a*p)*b,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,m=s*h,g=s*u,_=o*h,p=o*u,f=a*u,y=l*c,v=l*h,x=l*u,A=n.x,w=n.y,b=n.z;return r[0]=(1-(_+f))*A,r[1]=(m+x)*A,r[2]=(g-v)*A,r[3]=0,r[4]=(m-x)*w,r[5]=(1-(d+f))*w,r[6]=(p+y)*w,r[7]=0,r[8]=(g+v)*b,r[9]=(p-y)*b,r[10]=(1-(d+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=xi.set(r[0],r[1],r[2]).length();const o=xi.set(r[4],r[5],r[6]).length(),a=xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,h=1/o,u=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=h,qt.elements[5]*=h,qt.elements[6]*=h,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=En){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let m,g;if(a===En)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ms)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=En){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(o-s),d=(t+e)*c,m=(n+r)*h;let g,_;if(a===En)g=(o+s)*u,_=-2*u;else if(a===Ms)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new L,qt=new ot,Wg=new L(0,0,0),Xg=new L(1,1,1),wn=new L,kr=new L,Ut=new L,sc=new ot,oc=new Rr;class zs{constructor(e=0,t=0,n=0,r=zs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oc.setFromEuler(this),this.setFromQuaternion(oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zs.DEFAULT_ORDER="XYZ";class ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yg=0;const ac=new L,Ei=new Rr,dn=new ot,Wr=new L,ar=new L,qg=new L,Kg=new Rr,lc=new L(1,0,0),cc=new L(0,1,0),hc=new L(0,0,1),Zg={type:"added"},jg={type:"removed"};class xt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new L,t=new zs,n=new Rr,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ie}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(lc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(hc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(ar,Wr,this.up):dn.lookAt(Wr,ar,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(dn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}xt.DEFAULT_UP=new L(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new L,fn=new L,_o=new L,pn=new L,Mi=new L,yi=new L,uc=new L,vo=new L,xo=new L,Eo=new L;let Xr=!1;class $t{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kt.subVectors(r,t),fn.subVectors(n,t),_o.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(fn),l=Kt.dot(_o),c=fn.dot(fn),h=fn.dot(_o),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,n,r,s,o,a,l){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,pn),l.setScalar(0),l.addScaledVector(s,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),fn.subVectors(e,t),Kt.cross(fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Kt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Mi.subVectors(r,n),yi.subVectors(s,n),vo.subVectors(e,n);const l=Mi.dot(vo),c=yi.dot(vo);if(l<=0&&c<=0)return t.copy(n);xo.subVectors(e,r);const h=Mi.dot(xo),u=yi.dot(xo);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Mi,o);Eo.subVectors(e,s);const m=Mi.dot(Eo),g=yi.dot(Eo);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(yi,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return uc.subVectors(s,r),a=(u-h)/(u-h+(m-g)),t.copy(r).addScaledVector(uc,a);const f=1/(p+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Mi,o).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let $g=0;class er extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=Wi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=Wh,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zt={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Mo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Yt.workingColorSpace){if(e=Pg(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Mo(o,s,e+1/3),this.g=Mo(o,s,e),this.b=Mo(o,s,e-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){const n=au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return Yt.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Ct(Mt.r*255,0,255))*65536+Math.round(Ct(Mt.g*255,0,255))*256+Math.round(Ct(Mt.b*255,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,s=Mt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Ze){Yt.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==Ze?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Zt),Zt.h+=e,Zt.s+=t,Zt.l+=n,this.setHSL(Zt.h,Zt.s,Zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zt),e.getHSL(Yr);const n=oo(Zt.h,Yr.h,t),r=oo(Zt.s,Yr.s,t),s=oo(Zt.l,Yr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Be;Be.NAMES=au;class Yi extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new L,qr=new Ge;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ec,this.updateRange={offset:0,count:-1},this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ec&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class lu extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cu extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jg=0;const zt=new ot,yo=new xt,Si=new L,Nt=new br,lr=new br,pt=new L;class an extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tu(e)?cu:lu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return yo.lookAt(e),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Nt.min,lr.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,lr.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(lr.min),Nt.expandByPoint(lr.max))}Nt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pt.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(e,c),pt.add(Si)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<a;R++)c[R]=new L,h[R]=new L;const u=new L,d=new L,m=new L,g=new Ge,_=new Ge,p=new Ge,f=new L,y=new L;function v(R,Z,q){u.fromArray(r,R*3),d.fromArray(r,Z*3),m.fromArray(r,q*3),g.fromArray(o,R*2),_.fromArray(o,Z*2),p.fromArray(o,q*2),d.sub(u),m.sub(u),_.sub(g),p.sub(g);const P=1/(_.x*p.y-p.x*_.y);isFinite(P)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(P),y.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(P),c[R].add(f),c[Z].add(f),c[q].add(f),h[R].add(y),h[Z].add(y),h[q].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let R=0,Z=x.length;R<Z;++R){const q=x[R],P=q.start,G=q.count;for(let V=P,j=P+G;V<j;V+=3)v(n[V+0],n[V+1],n[V+2])}const A=new L,w=new L,b=new L,U=new L;function M(R){b.fromArray(s,R*3),U.copy(b);const Z=c[R];A.copy(Z),A.sub(b.multiplyScalar(b.dot(Z))).normalize(),w.crossVectors(U,Z);const P=w.dot(h[R])<0?-1:1;l[R*4]=A.x,l[R*4+1]=A.y,l[R*4+2]=A.z,l[R*4+3]=P}for(let R=0,Z=x.length;R<Z;++R){const q=x[R],P=q.start,G=q.count;for(let V=P,j=P+G;V<j;V+=3)M(n[V+0]),M(n[V+1]),M(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new ot,Kn=new su,Kr=new Os,fc=new L,Ti=new L,Ai=new L,Ri=new L,So=new L,Zr=new L,jr=new Ge,$r=new Ge,Jr=new Ge,pc=new L,mc=new L,gc=new L,Qr=new L,es=new L;class Ft extends xt{constructor(e=new an,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(So.fromBufferAttribute(u,e),o?Zr.addScaledVector(So,h):Zr.addScaledVector(So.sub(t),h))}t.add(Zr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kn.copy(e.ray).recast(e.near),!(Kr.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Kr,fc)===null||Kn.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(dc.copy(s).invert(),Kn.copy(e.ray).applyMatrix4(dc),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=y,A=v;x<A;x+=3){const w=a.getX(x),b=a.getX(x+1),U=a.getX(x+2);r=ts(this,f,e,n,c,h,u,w,b,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);r=ts(this,o,e,n,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=y,A=v;x<A;x+=3){const w=x,b=x+1,U=x+2;r=ts(this,f,e,n,c,h,u,w,b,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=p,v=p+1,x=p+2;r=ts(this,o,e,n,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Qg(i,e,t,n,r,s,o,a){let l;if(e.side===Lt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Gn,a),l===null)return null;es.copy(a),es.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(es);return c<t.near||c>t.far?null:{distance:c,point:es.clone(),object:i}}function ts(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Ti),i.getVertexPosition(l,Ai),i.getVertexPosition(c,Ri);const h=Qg(i,e,t,n,Ti,Ai,Ri,Qr);if(h){r&&(jr.fromBufferAttribute(r,a),$r.fromBufferAttribute(r,l),Jr.fromBufferAttribute(r,c),h.uv=$t.getInterpolation(Qr,Ti,Ai,Ri,jr,$r,Jr,new Ge)),s&&(jr.fromBufferAttribute(s,a),$r.fromBufferAttribute(s,l),Jr.fromBufferAttribute(s,c),h.uv1=$t.getInterpolation(Qr,Ti,Ai,Ri,jr,$r,Jr,new Ge),h.uv2=h.uv1),o&&(pc.fromBufferAttribute(o,a),mc.fromBufferAttribute(o,l),gc.fromBufferAttribute(o,c),h.normal=$t.getInterpolation(Qr,Ti,Ai,Ri,pc,mc,gc,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};$t.getNormal(Ti,Ai,Ri,u.normal),h.face=u}return h}class ai extends an{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(_,p,f,y,v,x,A,w,b,U,M){const R=x/b,Z=A/U,q=x/2,P=A/2,G=w/2,V=b+1,j=U+1;let z=0,Y=0;const $=new L;for(let K=0;K<j;K++){const B=K*Z-P;for(let H=0;H<V;H++){const re=H*R-q;$[_]=re*y,$[p]=B*v,$[f]=G,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[f]=w>0?1:-1,h.push($.x,$.y,$.z),u.push(H/b),u.push(1-K/U),z+=1}}for(let K=0;K<U;K++)for(let B=0;B<b;B++){const H=d+B+V*K,re=d+B+V*(K+1),ee=d+(B+1)+V*(K+1),ne=d+(B+1)+V*K;l.push(H,re,ne),l.push(re,ee,ne),Y+=6}a.addGroup(m,Y,M),m+=Y,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=$i(i[t]);for(const r in n)e[r]=n[r]}return e}function e_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hu(i){return i.getRenderTarget()===null?i.outputColorSpace:on}const t_={clone:$i,merge:At};var n_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=e_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uu extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends uu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(so*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,wi=1;class r_ extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new kt(bi,wi,e,t);r.layers=this.layers,this.add(r);const s=new kt(bi,wi,e,t);s.layers=this.layers,this.add(s);const o=new kt(bi,wi,e,t);o.layers=this.layers,this.add(o);const a=new kt(bi,wi,e,t);a.layers=this.layers,this.add(a);const l=new kt(bi,wi,e,t);l.layers=this.layers,this.add(l);const c=new kt(bi,wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.xr.enabled;e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class du extends Pt{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s_ extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ur("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ii?Ze:ri),this.texture=new du(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ai(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Fn});s.uniforms.tEquirect.value=t;const o=new Ft(r,s),a=t.minFilter;return t.minFilter===Er&&(t.minFilter=Vt),new r_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const To=new L,o_=new L,a_=new Ie;class jn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=To.subVectors(n,t).cross(o_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(To),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||a_.getNormalMatrix(e),r=this.coplanarPoint(To).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Os,ns=new L;class Ua{constructor(e=new jn,t=new jn,n=new jn,r=new jn,s=new jn,o=new jn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],p=r[11],f=r[12],y=r[13],v=r[14],x=r[15];if(n[0].setComponents(l-s,d-c,p-m,x-f).normalize(),n[1].setComponents(l+s,d+c,p+m,x+f).normalize(),n[2].setComponents(l+o,d+h,p+g,x+y).normalize(),n[3].setComponents(l-o,d-h,p-g,x-y).normalize(),n[4].setComponents(l-a,d-u,p-_,x-v).normalize(),t===En)n[5].setComponents(l+a,d+u,p+_,x+v).normalize();else if(t===Ms)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ns.x=r.normal.x>0?e.max.x:e.min.x,ns.y=r.normal.y>0?e.max.y:e.min.y,ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function l_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,d=c.usage,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,m=h.updateRange;i.bindBuffer(u,c),m.count===-1?i.bufferSubData(u,0,d):(t?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,r(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class wr extends an{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const y=f*d-o;for(let v=0;v<c;v++){const x=v*u-s;g.push(x,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const v=y+c*f,x=y+c*(f+1),A=y+1+c*(f+1),w=y+1+c*f;m.push(v,x,w),m.push(x,A,w)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var c_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h_=`#ifdef USE_ALPHAHASH
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
#endif`,u_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,p_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,g_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,__=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E_=`#ifdef USE_IRIDESCENCE
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
#endif`,M_=`#ifdef USE_BUMPMAP
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
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,L_=`#define PI 3.141592653589793
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
} // validated`,P_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I_=`vec3 transformedNormal = objectNormal;
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
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O_="gl_FragColor = linearToOutputTexel( gl_FragColor );",z_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,V_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,W_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
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
}`,Z_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,j_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q_=`uniform bool receiveShadow;
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
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
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
#endif`,o0=`struct PhysicalMaterial {
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
}`,a0=`
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,h0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,p0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_0=`#if defined( USE_POINTS_UV )
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
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
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
#endif`,T0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X0=`float getShadowMask() {
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
}`,Y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,av=`uniform sampler2D t2D;
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
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
}`,fv=`#if DEPTH_PACKING == 3200
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
}`,pv=`#define DISTANCE
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
}`,mv=`#define DISTANCE
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
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
}`,xv=`uniform vec3 diffuse;
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
}`,Ev=`#include <common>
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
}`,Mv=`uniform vec3 diffuse;
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
}`,yv=`#define LAMBERT
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
}`,Sv=`#define LAMBERT
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
}`,Tv=`#define MATCAP
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
}`,Av=`#define MATCAP
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
}`,Rv=`#define NORMAL
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
}`,bv=`#define NORMAL
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
}`,wv=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Lv=`#define STANDARD
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
}`,Pv=`#define STANDARD
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
}`,Iv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Uv=`uniform float size;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Fv=`#include <common>
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
}`,Ov=`uniform vec3 color;
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
}`,zv=`uniform float rotation;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:c_,alphahash_pars_fragment:h_,alphamap_fragment:u_,alphamap_pars_fragment:d_,alphatest_fragment:f_,alphatest_pars_fragment:p_,aomap_fragment:m_,aomap_pars_fragment:g_,begin_vertex:__,beginnormal_vertex:v_,bsdfs:x_,iridescence_fragment:E_,bumpmap_pars_fragment:M_,clipping_planes_fragment:y_,clipping_planes_pars_fragment:S_,clipping_planes_pars_vertex:T_,clipping_planes_vertex:A_,color_fragment:R_,color_pars_fragment:b_,color_pars_vertex:w_,color_vertex:C_,common:L_,cube_uv_reflection_fragment:P_,defaultnormal_vertex:I_,displacementmap_pars_vertex:D_,displacementmap_vertex:U_,emissivemap_fragment:N_,emissivemap_pars_fragment:F_,colorspace_fragment:O_,colorspace_pars_fragment:z_,envmap_fragment:B_,envmap_common_pars_fragment:G_,envmap_pars_fragment:H_,envmap_pars_vertex:V_,envmap_physical_pars_fragment:e0,envmap_vertex:k_,fog_vertex:W_,fog_pars_vertex:X_,fog_fragment:Y_,fog_pars_fragment:q_,gradientmap_pars_fragment:K_,lightmap_fragment:Z_,lightmap_pars_fragment:j_,lights_lambert_fragment:$_,lights_lambert_pars_fragment:J_,lights_pars_begin:Q_,lights_toon_fragment:t0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:r0,lights_physical_fragment:s0,lights_physical_pars_fragment:o0,lights_fragment_begin:a0,lights_fragment_maps:l0,lights_fragment_end:c0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:u0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:f0,map_fragment:p0,map_pars_fragment:m0,map_particle_fragment:g0,map_particle_pars_fragment:_0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:x0,morphcolor_vertex:E0,morphnormal_vertex:M0,morphtarget_pars_vertex:y0,morphtarget_vertex:S0,normal_fragment_begin:T0,normal_fragment_maps:A0,normal_pars_fragment:R0,normal_pars_vertex:b0,normal_vertex:w0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:D0,opaque_fragment:U0,packing:N0,premultiplied_alpha_fragment:F0,project_vertex:O0,dithering_fragment:z0,dithering_pars_fragment:B0,roughnessmap_fragment:G0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:V0,shadowmap_pars_vertex:k0,shadowmap_vertex:W0,shadowmask_pars_fragment:X0,skinbase_vertex:Y0,skinning_pars_vertex:q0,skinning_vertex:K0,skinnormal_vertex:Z0,specularmap_fragment:j0,specularmap_pars_fragment:$0,tonemapping_fragment:J0,tonemapping_pars_fragment:Q0,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:rv,worldpos_vertex:sv,background_vert:ov,background_frag:av,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:hv,cube_frag:uv,depth_vert:dv,depth_frag:fv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:xv,meshbasic_vert:Ev,meshbasic_frag:Mv,meshlambert_vert:yv,meshlambert_frag:Sv,meshmatcap_vert:Tv,meshmatcap_frag:Av,meshnormal_vert:Rv,meshnormal_frag:bv,meshphong_vert:wv,meshphong_frag:Cv,meshphysical_vert:Lv,meshphysical_frag:Pv,meshtoon_vert:Iv,meshtoon_frag:Dv,points_vert:Uv,points_frag:Nv,shadow_vert:Fv,shadow_frag:Ov,sprite_vert:zv,sprite_frag:Bv},oe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},tn={basic:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:At([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:At([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:At([oe.points,oe.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:At([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:At([oe.common,oe.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:At([oe.sprite,oe.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:At([oe.common,oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:At([oe.lights,oe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};tn.physical={uniforms:At([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const is={r:0,b:0,g:0};function Gv(i,e,t,n,r,s,o){const a=new Be(0);let l=s===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ns)?(h===void 0&&(h=new Ft(new ai(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:$i(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=v.colorSpace!==Ze,(u!==v||d!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ft(new wr(2,2),new li({name:"BackgroundMaterial",uniforms:$i(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(is,hu(i)),n.buffers.color.setClear(is.r,is.g,is.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Hv(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function u(G,V,j,z,Y){let $=!1;if(o){const K=_(z,j,V);c!==K&&(c=K,m(c.object)),$=f(G,z,j,Y),$&&y(G,z,j,Y)}else{const K=V.wireframe===!0;(c.geometry!==z.id||c.program!==j.id||c.wireframe!==K)&&(c.geometry=z.id,c.program=j.id,c.wireframe=K,$=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,U(G,V,j,z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(G){return n.isWebGL2?i.bindVertexArray(G):s.bindVertexArrayOES(G)}function g(G){return n.isWebGL2?i.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function _(G,V,j){const z=j.wireframe===!0;let Y=a[G.id];Y===void 0&&(Y={},a[G.id]=Y);let $=Y[V.id];$===void 0&&($={},Y[V.id]=$);let K=$[z];return K===void 0&&(K=p(d()),$[z]=K),K}function p(G){const V=[],j=[],z=[];for(let Y=0;Y<r;Y++)V[Y]=0,j[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:z,object:G,attributes:{},index:null}}function f(G,V,j,z){const Y=c.attributes,$=V.attributes;let K=0;const B=j.getAttributes();for(const H in B)if(B[H].location>=0){const ee=Y[H];let ne=$[H];if(ne===void 0&&(H==="instanceMatrix"&&G.instanceMatrix&&(ne=G.instanceMatrix),H==="instanceColor"&&G.instanceColor&&(ne=G.instanceColor)),ee===void 0||ee.attribute!==ne||ne&&ee.data!==ne.data)return!0;K++}return c.attributesNum!==K||c.index!==z}function y(G,V,j,z){const Y={},$=V.attributes;let K=0;const B=j.getAttributes();for(const H in B)if(B[H].location>=0){let ee=$[H];ee===void 0&&(H==="instanceMatrix"&&G.instanceMatrix&&(ee=G.instanceMatrix),H==="instanceColor"&&G.instanceColor&&(ee=G.instanceColor));const ne={};ne.attribute=ee,ee&&ee.data&&(ne.data=ee.data),Y[H]=ne,K++}c.attributes=Y,c.attributesNum=K,c.index=z}function v(){const G=c.newAttributes;for(let V=0,j=G.length;V<j;V++)G[V]=0}function x(G){A(G,0)}function A(G,V){const j=c.newAttributes,z=c.enabledAttributes,Y=c.attributeDivisors;j[G]=1,z[G]===0&&(i.enableVertexAttribArray(G),z[G]=1),Y[G]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,V),Y[G]=V)}function w(){const G=c.newAttributes,V=c.enabledAttributes;for(let j=0,z=V.length;j<z;j++)V[j]!==G[j]&&(i.disableVertexAttribArray(j),V[j]=0)}function b(G,V,j,z,Y,$,K){K===!0?i.vertexAttribIPointer(G,V,j,Y,$):i.vertexAttribPointer(G,V,j,z,Y,$)}function U(G,V,j,z){if(n.isWebGL2===!1&&(G.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Y=z.attributes,$=j.getAttributes(),K=V.defaultAttributeValues;for(const B in $){const H=$[B];if(H.location>=0){let re=Y[B];if(re===void 0&&(B==="instanceMatrix"&&G.instanceMatrix&&(re=G.instanceMatrix),B==="instanceColor"&&G.instanceColor&&(re=G.instanceColor)),re!==void 0){const ee=re.normalized,ne=re.itemSize,pe=t.get(re);if(pe===void 0)continue;const ve=pe.buffer,he=pe.type,De=pe.bytesPerElement,dt=n.isWebGL2===!0&&(he===i.INT||he===i.UNSIGNED_INT||re.gpuType===qh);if(re.isInterleavedBufferAttribute){const be=re.data,I=be.stride,ft=re.offset;if(be.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)A(H.location+Ee,be.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)x(H.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let Ee=0;Ee<H.locationSize;Ee++)b(H.location+Ee,ne/H.locationSize,he,ee,I*De,(ft+ne/H.locationSize*Ee)*De,dt)}else{if(re.isInstancedBufferAttribute){for(let be=0;be<H.locationSize;be++)A(H.location+be,re.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let be=0;be<H.locationSize;be++)x(H.location+be);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let be=0;be<H.locationSize;be++)b(H.location+be,ne/H.locationSize,he,ee,ne*De,ne/H.locationSize*be*De,dt)}}else if(K!==void 0){const ee=K[B];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(H.location,ee);break;case 3:i.vertexAttrib3fv(H.location,ee);break;case 4:i.vertexAttrib4fv(H.location,ee);break;default:i.vertexAttrib1fv(H.location,ee)}}}}w()}function M(){q();for(const G in a){const V=a[G];for(const j in V){const z=V[j];for(const Y in z)g(z[Y].object),delete z[Y];delete V[j]}delete a[G]}}function R(G){if(a[G.id]===void 0)return;const V=a[G.id];for(const j in V){const z=V[j];for(const Y in z)g(z[Y].object),delete z[Y];delete V[j]}delete a[G.id]}function Z(G){for(const V in a){const j=a[V];if(j[G.id]===void 0)continue;const z=j[G.id];for(const Y in z)g(z[Y].object),delete z[Y];delete j[G.id]}}function q(){P(),h=!0,c!==l&&(c=l,m(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:Z,initAttributes:v,enableAttribute:x,disableUnusedAttributes:w}}function Vv(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,h){i.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function kv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,x=o||e.has("OES_texture_float"),A=v&&x,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:A,maxSamples:w}}function Wv(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new jn,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,v=y*4;let x=f.clippingState||null;l.value=x,x=h(g,d,v,m);for(let A=0;A!==v;++A)x[A]=t[A];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,x=m;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Xv(i){let e=new WeakMap;function t(o,a){return a===Yo?o.mapping=Ki:a===qo&&(o.mapping=Zi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Yo||a===qo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new s_(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class pu extends uu{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=4,_c=[.125,.215,.35,.446,.526,.582],Jn=20,Ao=new pu,vc=new Be;let Ro=null;const $n=(1+Math.sqrt(5))/2,Ci=1/$n,xc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,$n,Ci),new L(0,$n,-Ci),new L(Ci,0,$n),new L(-Ci,0,$n),new L($n,Ci,0),new L(-$n,Ci,0)];class Ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ro=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ro),e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ro=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Mr,format:Qt,colorSpace:on,depthBuffer:!1},r=Mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yv(s)),this._blurMaterial=qv(s,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Ao)}_sceneToCubeUV(e,t,n,r){const a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(vc),h.toneMapping=On,h.autoClear=!1;const m=new Yi({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new Ft(new ai,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(vc),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;rs(r,y*v,f>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ki||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ao)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xc[(r-1)%xc.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ft(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Jn;p>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);const f=[];let y=0;for(let b=0;b<Jn;++b){const U=b/_,M=Math.exp(-U*U/2);f.push(M),b===0?y+=M:b<p&&(y+=2*M)}for(let b=0;b<f.length;b++)f[b]=f[b]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[r],A=3*x*(r>v-zi?r-v+zi:0),w=4*(this._cubeSize-x);rs(t,A,w,3*x,2*x),l.setRenderTarget(t),l.render(u,Ao)}}function Yv(i){const e=[],t=[],n=[];let r=i;const s=i-zi+1+_c.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-zi?l=_c[o-i+zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),x=new Float32Array(f*g*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,U=w>2?0:-1,M=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];y.set(M,_*g*w),v.set(d,p*g*w);const R=[w,w,w,w,w,w];x.set(R,f*g*w)}const A=new an;A.setAttribute("position",new nn(y,_)),A.setAttribute("uv",new nn(v,p)),A.setAttribute("faceIndex",new nn(x,f)),e.push(A),r>zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mc(i,e,t){const n=new oi(i,e,t);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function qv(i,e,t){const n=new Float32Array(Jn),r=new L(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Na(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function yc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Sc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Na(){return`

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
	`}function Kv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yo||l===qo,h=l===Ki||l===Zi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ec(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new Ec(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function jv(i,e,t,n){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,x=y.length;v<x;v+=3){const A=y[v+0],w=y[v+1],b=y[v+2];d.push(A,w,w,b,b,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const A=v+0,w=v+1,b=v+2;d.push(A,w,w,b,b,A)}}else return;const p=new(tu(d)?cu:lu)(d,1);p.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function $v(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,m){i.drawElements(s,m,a,d*l),t.update(m,s,1)}function u(d,m,g){if(g===0)return;let _,p;if(r)_=i,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,a,d*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Jv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Qv(i,e){return i[0]-e[0]}function ex(i,e){return Math.abs(e[1])-Math.abs(i[1])}function tx(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let V=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),A===!0&&(M=3);let R=h.attributes.position.count*M,Z=1;R>e.maxTextureSize&&(Z=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const q=new Float32Array(R*Z*4*_),P=new ru(q,R,Z,_);P.type=Un,P.needsUpdate=!0;const G=M*4;for(let j=0;j<_;j++){const z=w[j],Y=b[j],$=U[j],K=R*Z*4*j;for(let B=0;B<z.count;B++){const H=B*G;v===!0&&(o.fromBufferAttribute(z,B),q[K+H+0]=o.x,q[K+H+1]=o.y,q[K+H+2]=o.z,q[K+H+3]=0),x===!0&&(o.fromBufferAttribute(Y,B),q[K+H+4]=o.x,q[K+H+5]=o.y,q[K+H+6]=o.z,q[K+H+7]=0),A===!0&&(o.fromBufferAttribute($,B),q[K+H+8]=o.x,q[K+H+9]=o.y,q[K+H+10]=o.z,q[K+H+11]=$.itemSize===4?o.w:1)}}p={count:_,texture:P,size:new Ge(R,Z)},s.set(h,p),h.addEventListener("dispose",V)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<g;x++){const A=_[x];A[0]=x,A[1]=d[x]}_.sort(ex);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Qv);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const A=a[x],w=A[0],b=A[1];w!==Number.MAX_SAFE_INTEGER&&b?(p&&h.getAttribute("morphTarget"+x)!==p[w]&&h.setAttribute("morphTarget"+x,p[w]),f&&h.getAttribute("morphNormal"+x)!==f[w]&&h.setAttribute("morphNormal"+x,f[w]),r[x]=b,y+=b):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),f&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function nx(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const mu=new Pt,gu=new ru,_u=new Vg,vu=new du,Tc=[],Ac=[],Rc=new Float32Array(16),bc=new Float32Array(9),wc=new Float32Array(4);function tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Tc[r];if(s===void 0&&(s=new Float32Array(r),Tc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bs(i,e){let t=Ac[e];t===void 0&&(t=new Int32Array(e),Ac[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ix(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),ut(t,e)}}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),ut(t,e)}}function ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),ut(t,e)}}function ax(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;wc.set(n),i.uniformMatrix2fv(this.addr,!1,wc),ut(t,n)}}function lx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;bc.set(n),i.uniformMatrix3fv(this.addr,!1,bc),ut(t,n)}}function cx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Rc.set(n),i.uniformMatrix4fv(this.addr,!1,Rc),ut(t,n)}}function hx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),ut(t,e)}}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),ut(t,e)}}function fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),ut(t,e)}}function px(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),ut(t,e)}}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),ut(t,e)}}function _x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),ut(t,e)}}function vx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||mu,r)}function xx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||_u,r)}function Ex(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||vu,r)}function Mx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||gu,r)}function yx(i){switch(i){case 5126:return ix;case 35664:return rx;case 35665:return sx;case 35666:return ox;case 35674:return ax;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return hx;case 35667:case 35671:return ux;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Mx}}function Sx(i,e){i.uniform1fv(this.addr,e)}function Tx(i,e){const t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ax(i,e){const t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function Rx(i,e){const t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function bx(i,e){const t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wx(i,e){const t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cx(i,e){const t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lx(i,e){i.uniform1iv(this.addr,e)}function Px(i,e){i.uniform2iv(this.addr,e)}function Ix(i,e){i.uniform3iv(this.addr,e)}function Dx(i,e){i.uniform4iv(this.addr,e)}function Ux(i,e){i.uniform1uiv(this.addr,e)}function Nx(i,e){i.uniform2uiv(this.addr,e)}function Fx(i,e){i.uniform3uiv(this.addr,e)}function Ox(i,e){i.uniform4uiv(this.addr,e)}function zx(i,e,t){const n=this.cache,r=e.length,s=Bs(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||mu,s[o])}function Bx(i,e,t){const n=this.cache,r=e.length,s=Bs(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||_u,s[o])}function Gx(i,e,t){const n=this.cache,r=e.length,s=Bs(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||vu,s[o])}function Hx(i,e,t){const n=this.cache,r=e.length,s=Bs(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gu,s[o])}function Vx(i){switch(i){case 5126:return Sx;case 35664:return Tx;case 35665:return Ax;case 35666:return Rx;case 35674:return bx;case 35675:return wx;case 35676:return Cx;case 5124:case 35670:return Lx;case 35667:case 35671:return Px;case 35668:case 35672:return Ix;case 35669:case 35673:return Dx;case 5125:return Ux;case 36294:return Nx;case 36295:return Fx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Hx}}class kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=yx(t.type)}}class Wx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Vx(t.type)}}class Xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function Cc(i,e){i.seq.push(e),i.map[e.id]=e}function Yx(i,e,t){const n=i.name,r=n.length;for(bo.lastIndex=0;;){const s=bo.exec(n),o=bo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cc(t,c===void 0?new kx(a,i,e):new Wx(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Xx(a),Cc(t,u)),t=u}}}class fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Yx(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Lc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let qx=0;function Kx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Zx(i){switch(i){case on:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Pc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Kx(i.getShaderSource(e),o)}else return r}function jx(i,e){const t=Zx(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $x(i,e){let t;switch(e){case rg:t="Linear";break;case sg:t="Reinhard";break;case og:t="OptimizedCineon";break;case ag:t="ACESFilmic";break;case lg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Jx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function Qx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function eE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function cr(i){return i!==""}function Ic(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(i){return i.replace(tE,iE)}const nE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function iE(i,e){let t=Le[e];if(t===void 0){const n=nE.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qo(t)}const rE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(i){return i.replace(rE,sE)}function sE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function aE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ki:case Zi:e="ENVMAP_TYPE_CUBE";break;case Ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function cE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xh:e="ENVMAP_BLENDING_MULTIPLY";break;case ng:e="ENVMAP_BLENDING_MIX";break;case ig:e="ENVMAP_BLENDING_ADD";break}return e}function hE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function uE(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=oE(t),c=aE(t),h=lE(t),u=cE(t),d=hE(t),m=t.isWebGL2?"":Jx(t),g=Qx(s),_=r.createProgram();let p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),f.length>0&&(f+=`
`)):(p=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),f=[m,Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Le.tonemapping_pars_fragment:"",t.toneMapping!==On?$x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,jx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),o=Qo(o),o=Ic(o,t),o=Dc(o,t),a=Qo(a),a=Ic(a,t),a=Dc(a,t),o=Uc(o),a=Uc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+p+o,x=y+f+a,A=Lc(r,r.VERTEX_SHADER,v),w=Lc(r,r.FRAGMENT_SHADER,x);if(r.attachShader(_,A),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),R=r.getShaderInfoLog(A).trim(),Z=r.getShaderInfoLog(w).trim();let q=!0,P=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,w);else{const G=Pc(r,A,"vertex"),V=Pc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+G+`
`+V)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||Z==="")&&(P=!1);P&&(this.diagnostics={runnable:q,programLog:M,vertexShader:{log:R,prefix:p},fragmentShader:{log:Z,prefix:f}})}r.deleteShader(A),r.deleteShader(w);let b;this.getUniforms=function(){return b===void 0&&(b=new fs(r,_)),b};let U;return this.getAttributes=function(){return U===void 0&&(U=eE(r,_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let dE=0;class fE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pE(e),t.set(e,n)),n}}class pE{constructor(e){this.id=dE++,this.code=e,this.usedTimes=0}}function mE(i,e,t,n,r,s,o){const a=new ou,l=new fE,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,R,Z,q,P){const G=q.fog,V=P.geometry,j=M.isMeshStandardMaterial?q.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),Y=z&&z.mapping===Ns?z.image.height:null,$=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,B=K!==void 0?K.length:0;let H=0;V.morphAttributes.position!==void 0&&(H=1),V.morphAttributes.normal!==void 0&&(H=2),V.morphAttributes.color!==void 0&&(H=3);let re,ee,ne,pe;if($){const Ke=tn[$];re=Ke.vertexShader,ee=Ke.fragmentShader}else re=M.vertexShader,ee=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const ve=i.getRenderTarget(),he=P.isInstancedMesh===!0,De=!!M.map,dt=!!M.matcap,be=!!z,I=!!M.aoMap,ft=!!M.lightMap,Ee=!!M.bumpMap,Re=!!M.normalMap,Me=!!M.displacementMap,Xe=!!M.emissiveMap,Pe=!!M.metalnessMap,we=!!M.roughnessMap,He=M.anisotropy>0,at=M.clearcoat>0,Ye=M.iridescence>0,T=M.sheen>0,E=M.transmission>0,F=He&&!!M.anisotropyMap,te=at&&!!M.clearcoatMap,J=at&&!!M.clearcoatNormalMap,Q=at&&!!M.clearcoatRoughnessMap,fe=Ye&&!!M.iridescenceMap,ie=Ye&&!!M.iridescenceThicknessMap,O=T&&!!M.sheenColorMap,xe=T&&!!M.sheenRoughnessMap,me=!!M.specularMap,ge=!!M.specularColorMap,ue=!!M.specularIntensityMap,de=E&&!!M.transmissionMap,Ue=E&&!!M.thicknessMap,qe=!!M.gradientMap,C=!!M.alphaMap,ae=M.alphaTest>0,k=!!M.alphaHash,se=!!M.extensions,le=!!V.attributes.uv1,ze=!!V.attributes.uv2,je=!!V.attributes.uv3;let nt=On;return M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(nt=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:ee,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:he,instancingColor:he&&P.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:on,map:De,matcap:dt,envMap:be,envMapMode:be&&z.mapping,envMapCubeUVHeight:Y,aoMap:I,lightMap:ft,bumpMap:Ee,normalMap:Re,displacementMap:d&&Me,emissiveMap:Xe,normalMapObjectSpace:Re&&M.normalMapType===Mg,normalMapTangentSpace:Re&&M.normalMapType===eu,metalnessMap:Pe,roughnessMap:we,anisotropy:He,anisotropyMap:F,clearcoat:at,clearcoatMap:te,clearcoatNormalMap:J,clearcoatRoughnessMap:Q,iridescence:Ye,iridescenceMap:fe,iridescenceThicknessMap:ie,sheen:T,sheenColorMap:O,sheenRoughnessMap:xe,specularMap:me,specularColorMap:ge,specularIntensityMap:ue,transmission:E,transmissionMap:de,thicknessMap:Ue,gradientMap:qe,opaque:M.transparent===!1&&M.blending===Wi,alphaMap:C,alphaTest:ae,alphaHash:k,combine:M.combine,mapUv:De&&_(M.map.channel),aoMapUv:I&&_(M.aoMap.channel),lightMapUv:ft&&_(M.lightMap.channel),bumpMapUv:Ee&&_(M.bumpMap.channel),normalMapUv:Re&&_(M.normalMap.channel),displacementMapUv:Me&&_(M.displacementMap.channel),emissiveMapUv:Xe&&_(M.emissiveMap.channel),metalnessMapUv:Pe&&_(M.metalnessMap.channel),roughnessMapUv:we&&_(M.roughnessMap.channel),anisotropyMapUv:F&&_(M.anisotropyMap.channel),clearcoatMapUv:te&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:O&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(M.sheenRoughnessMap.channel),specularMapUv:me&&_(M.specularMap.channel),specularColorMapUv:ge&&_(M.specularColorMap.channel),specularIntensityMapUv:ue&&_(M.specularIntensityMap.channel),transmissionMapUv:de&&_(M.transmissionMap.channel),thicknessMapUv:Ue&&_(M.thicknessMap.channel),alphaMapUv:C&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Re||He),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:ze,vertexUv3s:je,pointsUvs:P.isPoints===!0&&!!V.attributes.uv&&(De||C),fog:!!G,useFog:M.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:H,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:De&&M.map.isVideoTexture===!0&&M.map.colorSpace===Ze,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vn,flipSided:M.side===Lt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:se&&M.extensions.derivatives===!0,extensionFragDepth:se&&M.extensions.fragDepth===!0,extensionDrawBuffers:se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Z in M.defines)R.push(Z),R.push(M.defines[Z]);return M.isRawShaderMaterial===!1&&(y(R,M),v(R,M),R.push(i.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function y(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function v(M,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function x(M){const R=g[M.type];let Z;if(R){const q=tn[R];Z=t_.clone(q.uniforms)}else Z=M.uniforms;return Z}function A(M,R){let Z;for(let q=0,P=c.length;q<P;q++){const G=c[q];if(G.cacheKey===R){Z=G,++Z.usedTimes;break}}return Z===void 0&&(Z=new uE(i,R,M,s),c.push(Z)),Z}function w(M){if(--M.usedTimes===0){const R=c.indexOf(M);c[R]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:U}}function gE(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function _E(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,d,m,g,_,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),e++,f}function a(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||_E),n.length>1&&n.sort(d||Fc),r.length>1&&r.sort(d||Fc)}function h(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function vE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Oc,i.set(n,[o])):r>=s.length?(o=new Oc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function xE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function EE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ME=0;function yE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function SE(i,e){const t=new xE,n=EE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new L);const s=new L,o=new ot,a=new ot;function l(h,u){let d=0,m=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let _=0,p=0,f=0,y=0,v=0,x=0,A=0,w=0,b=0,U=0;h.sort(yE);const M=u===!0?Math.PI:1;for(let Z=0,q=h.length;Z<q;Z++){const P=h[Z],G=P.color,V=P.intensity,j=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=G.r*V*M,m+=G.g*V*M,g+=G.b*V*M;else if(P.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(P.sh.coefficients[Y],V);else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const $=P.shadow,K=n.get(P);K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=z,r.directionalShadowMatrix[_]=P.shadow.matrix,x++}r.directional[_]=Y,_++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(G).multiplyScalar(V*M),Y.distance=j,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,r.spot[f]=Y;const $=P.shadow;if(P.map&&(r.spotLightMap[b]=P.map,b++,$.updateMatrices(P),P.castShadow&&U++),r.spotLightMatrix[f]=$.matrix,P.castShadow){const K=n.get(P);K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,r.spotShadow[f]=K,r.spotShadowMap[f]=z,w++}f++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(G).multiplyScalar(V),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),r.rectArea[y]=Y,y++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*M),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const $=P.shadow,K=n.get(P);K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=z,r.pointShadowMatrix[p]=P.shadow.matrix,A++}r.point[p]=Y,p++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(V*M),Y.groundColor.copy(P.groundColor).multiplyScalar(V*M),r.hemi[v]=Y,v++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==f||R.rectAreaLength!==y||R.hemiLength!==v||R.numDirectionalShadows!==x||R.numPointShadows!==A||R.numSpotShadows!==w||R.numSpotMaps!==b)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=y,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=w+b-U,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=U,R.directionalLength=_,R.pointLength=p,R.spotLength=f,R.rectAreaLength=y,R.hemiLength=v,R.numDirectionalShadows=x,R.numPointShadows=A,R.numSpotShadows=w,R.numSpotMaps=b,r.version=ME++)}function c(h,u){let d=0,m=0,g=0,_=0,p=0;const f=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const x=h[y];if(x.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),d++}else if(x.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),g++}else if(x.isRectAreaLight){const A=r.rectArea[_];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),a.identity(),o.copy(x.matrixWorld),o.premultiply(f),a.extractRotation(o),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),m++}else if(x.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function zc(i,e){const t=new SE(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function TE(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new zc(i,e),t.set(s,[l])):o>=a.length?(l=new zc(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class AE extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RE extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wE=`uniform sampler2D shadow_pass;
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
}`;function CE(i,e,t){let n=new Ua;const r=new Ge,s=new Ge,o=new _t,a=new AE({depthPacking:Eg}),l=new RE,c={},h=t.maxTextureSize,u={[Gn]:Lt,[Lt]:Gn,[vn]:vn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:bE,fragmentShader:wE}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let f=this.type;this.render=function(A,w,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const U=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Fn),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const q=f!==gn&&this.type===gn,P=f===gn&&this.type!==gn;for(let G=0,V=A.length;G<V;G++){const j=A[G],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Y=z.getFrameExtents();if(r.multiply(Y),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,z.mapSize.y=s.y)),z.map===null||q===!0||P===!0){const K=this.type!==gn?{minFilter:Rt,magFilter:Rt}:{};z.map!==null&&z.map.dispose(),z.map=new oi(r.x,r.y,K),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const $=z.getViewportCount();for(let K=0;K<$;K++){const B=z.getViewport(K);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),Z.viewport(o),z.updateMatrices(j,K),n=z.getFrustum(),x(w,b,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===gn&&y(z,b),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(U,M,R)};function y(A,w){const b=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new oi(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,b,d,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,b,m,_,null)}function v(A,w,b,U){let M=null;const R=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=b.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Z=M.uuid,q=w.uuid;let P=c[Z];P===void 0&&(P={},c[Z]=P);let G=P[q];G===void 0&&(G=M.clone(),P[q]=G),M=G}if(M.visible=w.visible,M.wireframe=w.wireframe,U===gn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Z=i.properties.get(M);Z.light=b}return M}function x(A,w,b,U,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===gn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const q=e.update(A),P=A.material;if(Array.isArray(P)){const G=q.groups;for(let V=0,j=G.length;V<j;V++){const z=G[V],Y=P[z.materialIndex];if(Y&&Y.visible){const $=v(A,Y,U,M);i.renderBufferDirect(b,null,q,$,A,z)}}}else if(P.visible){const G=v(A,P,U,M);i.renderBufferDirect(b,null,q,G,A,null)}}const Z=A.children;for(let q=0,P=Z.length;q<P;q++)x(Z[q],w,b,U,M)}}function LE(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const ae=new _t;let k=null;const se=new _t(0,0,0,0);return{setMask:function(le){k!==le&&!C&&(i.colorMask(le,le,le,le),k=le)},setLocked:function(le){C=le},setClear:function(le,ze,je,nt,Sn){Sn===!0&&(le*=nt,ze*=nt,je*=nt),ae.set(le,ze,je,nt),se.equals(ae)===!1&&(i.clearColor(le,ze,je,nt),se.copy(ae))},reset:function(){C=!1,k=null,se.set(-1,0,0,0)}}}function s(){let C=!1,ae=null,k=null,se=null;return{setTest:function(le){le?ve(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(le){ae!==le&&!C&&(i.depthMask(le),ae=le)},setFunc:function(le){if(k!==le){switch(le){case Zm:i.depthFunc(i.NEVER);break;case jm:i.depthFunc(i.ALWAYS);break;case $m:i.depthFunc(i.LESS);break;case Xo:i.depthFunc(i.LEQUAL);break;case Jm:i.depthFunc(i.EQUAL);break;case Qm:i.depthFunc(i.GEQUAL);break;case eg:i.depthFunc(i.GREATER);break;case tg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=le}},setLocked:function(le){C=le},setClear:function(le){se!==le&&(i.clearDepth(le),se=le)},reset:function(){C=!1,ae=null,k=null,se=null}}}function o(){let C=!1,ae=null,k=null,se=null,le=null,ze=null,je=null,nt=null,Sn=null;return{setTest:function(Ke){C||(Ke?ve(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!C&&(i.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,en,St){(k!==Ke||se!==en||le!==St)&&(i.stencilFunc(Ke,en,St),k=Ke,se=en,le=St)},setOp:function(Ke,en,St){(ze!==Ke||je!==en||nt!==St)&&(i.stencilOp(Ke,en,St),ze=Ke,je=en,nt=St)},setLocked:function(Ke){C=Ke},setClear:function(Ke){Sn!==Ke&&(i.clearStencil(Ke),Sn=Ke)},reset:function(){C=!1,ae=null,k=null,se=null,le=null,ze=null,je=null,nt=null,Sn=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,y=null,v=null,x=null,A=null,w=null,b=null,U=null,M=!1,R=null,Z=null,q=null,P=null,G=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,z=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=z>=2);let $=null,K={};const B=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),re=new _t().fromArray(B),ee=new _t().fromArray(H);function ne(C,ae,k,se){const le=new Uint8Array(4),ze=i.createTexture();i.bindTexture(C,ze),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<k;je++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ae+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ze}const pe={};pe[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pe[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(i.DEPTH_TEST),l.setFunc(Xo),Me(!1),Xe(yl),ve(i.CULL_FACE),Ee(Fn);function ve(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function he(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function De(C,ae){return m[C]!==ae?(i.bindFramebuffer(C,ae),m[C]=ae,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ae),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function dt(C,ae){let k=_,se=!1;if(C)if(k=g.get(ae),k===void 0&&(k=[],g.set(ae,k)),C.isWebGLMultipleRenderTargets){const le=C.texture;if(k.length!==le.length||k[0]!==i.COLOR_ATTACHMENT0){for(let ze=0,je=le.length;ze<je;ze++)k[ze]=i.COLOR_ATTACHMENT0+ze;k.length=le.length,se=!0}}else k[0]!==i.COLOR_ATTACHMENT0&&(k[0]=i.COLOR_ATTACHMENT0,se=!0);else k[0]!==i.BACK&&(k[0]=i.BACK,se=!0);se&&(t.isWebGL2?i.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function be(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const I={[Ui]:i.FUNC_ADD,[zm]:i.FUNC_SUBTRACT,[Bm]:i.FUNC_REVERSE_SUBTRACT};if(n)I[Rl]=i.MIN,I[bl]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(I[Rl]=C.MIN_EXT,I[bl]=C.MAX_EXT)}const ft={[Gm]:i.ZERO,[Hm]:i.ONE,[Vm]:i.SRC_COLOR,[kh]:i.SRC_ALPHA,[Km]:i.SRC_ALPHA_SATURATE,[Ym]:i.DST_COLOR,[Wm]:i.DST_ALPHA,[km]:i.ONE_MINUS_SRC_COLOR,[Wh]:i.ONE_MINUS_SRC_ALPHA,[qm]:i.ONE_MINUS_DST_COLOR,[Xm]:i.ONE_MINUS_DST_ALPHA};function Ee(C,ae,k,se,le,ze,je,nt){if(C===Fn){f===!0&&(he(i.BLEND),f=!1);return}if(f===!1&&(ve(i.BLEND),f=!0),C!==Om){if(C!==y||nt!==M){if((v!==Ui||w!==Ui)&&(i.blendEquation(i.FUNC_ADD),v=Ui,w=Ui),nt)switch(C){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sl:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}x=null,A=null,b=null,U=null,y=C,M=nt}return}le=le||ae,ze=ze||k,je=je||se,(ae!==v||le!==w)&&(i.blendEquationSeparate(I[ae],I[le]),v=ae,w=le),(k!==x||se!==A||ze!==b||je!==U)&&(i.blendFuncSeparate(ft[k],ft[se],ft[ze],ft[je]),x=k,A=se,b=ze,U=je),y=C,M=!1}function Re(C,ae){C.side===vn?he(i.CULL_FACE):ve(i.CULL_FACE);let k=C.side===Lt;ae&&(k=!k),Me(k),C.blending===Wi&&C.transparent===!1?Ee(Fn):Ee(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const se=C.stencilWrite;c.setTest(se),se&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),we(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(C){R!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),R=C)}function Xe(C){C!==Um?(ve(i.CULL_FACE),C!==Z&&(C===yl?i.cullFace(i.BACK):C===Nm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),Z=C}function Pe(C){C!==q&&(j&&i.lineWidth(C),q=C)}function we(C,ae,k){C?(ve(i.POLYGON_OFFSET_FILL),(P!==ae||G!==k)&&(i.polygonOffset(ae,k),P=ae,G=k)):he(i.POLYGON_OFFSET_FILL)}function He(C){C?ve(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function at(C){C===void 0&&(C=i.TEXTURE0+V-1),$!==C&&(i.activeTexture(C),$=C)}function Ye(C,ae,k){k===void 0&&($===null?k=i.TEXTURE0+V-1:k=$);let se=K[k];se===void 0&&(se={type:void 0,texture:void 0},K[k]=se),(se.type!==C||se.texture!==ae)&&($!==k&&(i.activeTexture(k),$=k),i.bindTexture(C,ae||pe[C]),se.type=C,se.texture=ae)}function T(){const C=K[$];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function E(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function F(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function O(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(C){re.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function ue(C){ee.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ee.copy(C))}function de(C,ae){let k=u.get(ae);k===void 0&&(k=new WeakMap,u.set(ae,k));let se=k.get(C);se===void 0&&(se=i.getUniformBlockIndex(ae,C.name),k.set(C,se))}function Ue(C,ae){const se=u.get(ae).get(C);h.get(ae)!==se&&(i.uniformBlockBinding(ae,se,C.__bindingPointIndex),h.set(ae,se))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},$=null,K={},m={},g=new WeakMap,_=[],p=null,f=!1,y=null,v=null,x=null,A=null,w=null,b=null,U=null,M=!1,R=null,Z=null,q=null,P=null,G=null,re.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ve,disable:he,bindFramebuffer:De,drawBuffers:dt,useProgram:be,setBlending:Ee,setMaterial:Re,setFlipSided:Me,setCullFace:Xe,setLineWidth:Pe,setPolygonOffset:we,setScissorTest:He,activeTexture:at,bindTexture:Ye,unbindTexture:T,compressedTexImage2D:E,compressedTexImage3D:F,texImage2D:xe,texImage3D:me,updateUBOMapping:de,uniformBlockBinding:Ue,texStorage2D:ie,texStorage3D:O,texSubImage2D:te,texSubImage3D:J,compressedTexSubImage2D:Q,compressedTexSubImage3D:fe,scissor:ge,viewport:ue,reset:qe}}function PE(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,E){return f?new OffscreenCanvas(T,E):ys("canvas")}function v(T,E,F,te){let J=1;if((T.width>te||T.height>te)&&(J=te/Math.max(T.width,T.height)),J<1||E===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const Q=E?Jo:Math.floor,fe=Q(J*T.width),ie=Q(J*T.height);_===void 0&&(_=y(fe,ie));const O=F?y(fe,ie):_;return O.width=fe,O.height=ie,O.getContext("2d").drawImage(T,0,0,fe,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+fe+"x"+ie+")."),O}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function x(T){return nc(T.width)&&nc(T.height)}function A(T){return a?!1:T.wrapS!==Jt||T.wrapT!==Jt||T.minFilter!==Rt&&T.minFilter!==Vt}function w(T,E){return T.generateMipmaps&&E&&T.minFilter!==Rt&&T.minFilter!==Vt}function b(T){i.generateMipmap(T)}function U(T,E,F,te,J=!1){if(a===!1)return E;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=E;return E===i.RED&&(F===i.FLOAT&&(Q=i.R32F),F===i.HALF_FLOAT&&(Q=i.R16F),F===i.UNSIGNED_BYTE&&(Q=i.R8)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.R8UI),F===i.UNSIGNED_SHORT&&(Q=i.R16UI),F===i.UNSIGNED_INT&&(Q=i.R32UI),F===i.BYTE&&(Q=i.R8I),F===i.SHORT&&(Q=i.R16I),F===i.INT&&(Q=i.R32I)),E===i.RG&&(F===i.FLOAT&&(Q=i.RG32F),F===i.HALF_FLOAT&&(Q=i.RG16F),F===i.UNSIGNED_BYTE&&(Q=i.RG8)),E===i.RGBA&&(F===i.FLOAT&&(Q=i.RGBA32F),F===i.HALF_FLOAT&&(Q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Q=te===Ze&&J===!1?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)),(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(T,E,F){return w(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Rt&&T.minFilter!==Vt?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function R(T){return T===Rt||T===wl||T===Js?i.NEAREST:i.LINEAR}function Z(T){const E=T.target;E.removeEventListener("dispose",Z),P(E),E.isVideoTexture&&g.delete(E)}function q(T){const E=T.target;E.removeEventListener("dispose",q),V(E)}function P(T){const E=n.get(T);if(E.__webglInit===void 0)return;const F=T.source,te=p.get(F);if(te){const J=te[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&G(T),Object.keys(te).length===0&&p.delete(F)}n.remove(T)}function G(T){const E=n.get(T);i.deleteTexture(E.__webglTexture);const F=T.source,te=p.get(F);delete te[E.__cacheKey],o.memory.textures--}function V(T){const E=T.texture,F=n.get(T),te=n.get(E);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let Q=0;Q<F.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(F.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)i.deleteFramebuffer(F.__webglFramebuffer[J]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,Q=E.length;J<Q;J++){const fe=n.get(E[J]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(E[J])}n.remove(E),n.remove(T)}let j=0;function z(){j=0}function Y(){const T=j;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),j+=1,T}function $(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function K(T,E){const F=n.get(T);if(T.isVideoTexture&&at(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(F,T,E);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function B(T,E){const F=n.get(T);if(T.version>0&&F.__version!==T.version){De(F,T,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function H(T,E){const F=n.get(T);if(T.version>0&&F.__version!==T.version){De(F,T,E);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function re(T,E){const F=n.get(T);if(T.version>0&&F.__version!==T.version){dt(F,T,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}const ee={[Ko]:i.REPEAT,[Jt]:i.CLAMP_TO_EDGE,[Zo]:i.MIRRORED_REPEAT},ne={[Rt]:i.NEAREST,[wl]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[cg]:i.LINEAR_MIPMAP_NEAREST,[Er]:i.LINEAR_MIPMAP_LINEAR},pe={[Sg]:i.NEVER,[Lg]:i.ALWAYS,[Tg]:i.LESS,[Rg]:i.LEQUAL,[Ag]:i.EQUAL,[Cg]:i.GEQUAL,[bg]:i.GREATER,[wg]:i.NOTEQUAL};function ve(T,E,F){if(F?(i.texParameteri(T,i.TEXTURE_WRAP_S,ee[E.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ee[E.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ee[E.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ne[E.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ne[E.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Jt||E.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,R(E.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,R(E.minFilter)),E.minFilter!==Rt&&E.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Rt||E.minFilter!==Js&&E.minFilter!==Er||E.type===Un&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Mr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function he(T,E){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",Z));const te=E.source;let J=p.get(te);J===void 0&&(J={},p.set(te,J));const Q=$(E);if(Q!==T.__cacheKey){J[Q]===void 0&&(J[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[Q].usedTimes++;const fe=J[T.__cacheKey];fe!==void 0&&(J[T.__cacheKey].usedTimes--,fe.usedTimes===0&&G(E)),T.__cacheKey=Q,T.__webglTexture=J[Q].texture}return F}function De(T,E,F){let te=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=i.TEXTURE_3D);const J=he(T,E),Q=E.source;t.bindTexture(te,T.__webglTexture,i.TEXTURE0+F);const fe=n.get(Q);if(Q.version!==fe.__version||J===!0){t.activeTexture(i.TEXTURE0+F),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ie=A(E)&&x(E.image)===!1;let O=v(E.image,ie,!1,h);O=Ye(E,O);const xe=x(O)||a,me=s.convert(E.format,E.colorSpace);let ge=s.convert(E.type),ue=U(E.internalFormat,me,ge,E.colorSpace,E.isVideoTexture);ve(te,E,xe);let de;const Ue=E.mipmaps,qe=a&&E.isVideoTexture!==!0,C=fe.__version===void 0||J===!0,ae=M(E,O,xe);if(E.isDepthTexture)ue=i.DEPTH_COMPONENT,a?E.type===Un?ue=i.DEPTH_COMPONENT32F:E.type===Dn?ue=i.DEPTH_COMPONENT24:E.type===ti?ue=i.DEPTH24_STENCIL8:ue=i.DEPTH_COMPONENT16:E.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ni&&ue===i.DEPTH_COMPONENT&&E.type!==Da&&E.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Dn,ge=s.convert(E.type)),E.format===ji&&ue===i.DEPTH_COMPONENT&&(ue=i.DEPTH_STENCIL,E.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ti,ge=s.convert(E.type))),C&&(qe?t.texStorage2D(i.TEXTURE_2D,1,ue,O.width,O.height):t.texImage2D(i.TEXTURE_2D,0,ue,O.width,O.height,0,me,ge,null));else if(E.isDataTexture)if(Ue.length>0&&xe){qe&&C&&t.texStorage2D(i.TEXTURE_2D,ae,ue,Ue[0].width,Ue[0].height);for(let k=0,se=Ue.length;k<se;k++)de=Ue[k],qe?t.texSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,me,ge,de.data):t.texImage2D(i.TEXTURE_2D,k,ue,de.width,de.height,0,me,ge,de.data);E.generateMipmaps=!1}else qe?(C&&t.texStorage2D(i.TEXTURE_2D,ae,ue,O.width,O.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,O.width,O.height,me,ge,O.data)):t.texImage2D(i.TEXTURE_2D,0,ue,O.width,O.height,0,me,ge,O.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qe&&C&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ue,Ue[0].width,Ue[0].height,O.depth);for(let k=0,se=Ue.length;k<se;k++)de=Ue[k],E.format!==Qt?me!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,O.depth,me,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,ue,de.width,de.height,O.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,O.depth,me,ge,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,ue,de.width,de.height,O.depth,0,me,ge,de.data)}else{qe&&C&&t.texStorage2D(i.TEXTURE_2D,ae,ue,Ue[0].width,Ue[0].height);for(let k=0,se=Ue.length;k<se;k++)de=Ue[k],E.format!==Qt?me!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,me,de.data):t.compressedTexImage2D(i.TEXTURE_2D,k,ue,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,me,ge,de.data):t.texImage2D(i.TEXTURE_2D,k,ue,de.width,de.height,0,me,ge,de.data)}else if(E.isDataArrayTexture)qe?(C&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ue,O.width,O.height,O.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,me,ge,O.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,O.width,O.height,O.depth,0,me,ge,O.data);else if(E.isData3DTexture)qe?(C&&t.texStorage3D(i.TEXTURE_3D,ae,ue,O.width,O.height,O.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,me,ge,O.data)):t.texImage3D(i.TEXTURE_3D,0,ue,O.width,O.height,O.depth,0,me,ge,O.data);else if(E.isFramebufferTexture){if(C)if(qe)t.texStorage2D(i.TEXTURE_2D,ae,ue,O.width,O.height);else{let k=O.width,se=O.height;for(let le=0;le<ae;le++)t.texImage2D(i.TEXTURE_2D,le,ue,k,se,0,me,ge,null),k>>=1,se>>=1}}else if(Ue.length>0&&xe){qe&&C&&t.texStorage2D(i.TEXTURE_2D,ae,ue,Ue[0].width,Ue[0].height);for(let k=0,se=Ue.length;k<se;k++)de=Ue[k],qe?t.texSubImage2D(i.TEXTURE_2D,k,0,0,me,ge,de):t.texImage2D(i.TEXTURE_2D,k,ue,me,ge,de);E.generateMipmaps=!1}else qe?(C&&t.texStorage2D(i.TEXTURE_2D,ae,ue,O.width,O.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,ge,O)):t.texImage2D(i.TEXTURE_2D,0,ue,me,ge,O);w(E,xe)&&b(te),fe.__version=Q.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function dt(T,E,F){if(E.image.length!==6)return;const te=he(T,E),J=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const Q=n.get(J);if(J.version!==Q.__version||te===!0){t.activeTexture(i.TEXTURE0+F),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,O=[];for(let k=0;k<6;k++)!fe&&!ie?O[k]=v(E.image[k],!1,!0,c):O[k]=ie?E.image[k].image:E.image[k],O[k]=Ye(E,O[k]);const xe=O[0],me=x(xe)||a,ge=s.convert(E.format,E.colorSpace),ue=s.convert(E.type),de=U(E.internalFormat,ge,ue,E.colorSpace),Ue=a&&E.isVideoTexture!==!0,qe=Q.__version===void 0||te===!0;let C=M(E,xe,me);ve(i.TEXTURE_CUBE_MAP,E,me);let ae;if(fe){Ue&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,C,de,xe.width,xe.height);for(let k=0;k<6;k++){ae=O[k].mipmaps;for(let se=0;se<ae.length;se++){const le=ae[se];E.format!==Qt?ge!==null?Ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,0,0,le.width,le.height,ge,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,de,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,0,0,le.width,le.height,ge,ue,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,de,le.width,le.height,0,ge,ue,le.data)}}}else{ae=E.mipmaps,Ue&&qe&&(ae.length>0&&C++,t.texStorage2D(i.TEXTURE_CUBE_MAP,C,de,O[0].width,O[0].height));for(let k=0;k<6;k++)if(ie){Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,O[k].width,O[k].height,ge,ue,O[k].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,de,O[k].width,O[k].height,0,ge,ue,O[k].data);for(let se=0;se<ae.length;se++){const ze=ae[se].image[k].image;Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,0,0,ze.width,ze.height,ge,ue,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,de,ze.width,ze.height,0,ge,ue,ze.data)}}else{Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ge,ue,O[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,de,ge,ue,O[k]);for(let se=0;se<ae.length;se++){const le=ae[se];Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,0,0,ge,ue,le.image[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,de,ge,ue,le.image[k])}}}w(E,me)&&b(i.TEXTURE_CUBE_MAP),Q.__version=J.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function be(T,E,F,te,J,Q){const fe=s.convert(F.format,F.colorSpace),ie=s.convert(F.type),O=U(F.internalFormat,fe,ie,F.colorSpace);if(!n.get(E).__hasExternalTextures){const me=Math.max(1,E.width>>Q),ge=Math.max(1,E.height>>Q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,Q,O,me,ge,E.depth,0,fe,ie,null):t.texImage2D(J,Q,O,me,ge,0,fe,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),He(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,n.get(F).__webglTexture,0,we(E)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,J,n.get(F).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function I(T,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let te=i.DEPTH_COMPONENT16;if(F||He(E)){const J=E.depthTexture;J&&J.isDepthTexture&&(J.type===Un?te=i.DEPTH_COMPONENT32F:J.type===Dn&&(te=i.DEPTH_COMPONENT24));const Q=we(E);He(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,te,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,te,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){const te=we(E);F&&He(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,E.width,E.height):He(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0;J<te.length;J++){const Q=te[J],fe=s.convert(Q.format,Q.colorSpace),ie=s.convert(Q.type),O=U(Q.internalFormat,fe,ie,Q.colorSpace),xe=we(E);F&&He(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,O,E.width,E.height):He(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,O,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,O,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const te=n.get(E.depthTexture).__webglTexture,J=we(E);if(E.depthTexture.format===ni)He(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(E.depthTexture.format===ji)He(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ee(T){const E=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ft(E.__webglFramebuffer,T)}else if(F){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=i.createRenderbuffer(),I(E.__webglDepthbuffer[te],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),I(E.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(T,E,F){const te=n.get(T);E!==void 0&&be(te.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ee(T)}function Me(T){const E=T.texture,F=n.get(T),te=n.get(E);T.addEventListener("dispose",q),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=E.version,o.memory.textures++);const J=T.isWebGLCubeRenderTarget===!0,Q=T.isWebGLMultipleRenderTargets===!0,fe=x(T)||a;if(J){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(a&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let O=0;O<E.mipmaps.length;O++)F.__webglFramebuffer[ie][O]=i.createFramebuffer()}else F.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<E.mipmaps.length;ie++)F.__webglFramebuffer[ie]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Q)if(r.drawBuffers){const ie=T.texture;for(let O=0,xe=ie.length;O<xe;O++){const me=n.get(ie[O]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&He(T)===!1){const ie=Q?E:[E];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let O=0;O<ie.length;O++){const xe=ie[O];F.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[O]);const me=s.convert(xe.format,xe.colorSpace),ge=s.convert(xe.type),ue=U(xe.internalFormat,me,ge,xe.colorSpace,T.isXRRenderTarget===!0),de=we(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ue,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,F.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),I(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ve(i.TEXTURE_CUBE_MAP,E,fe);for(let ie=0;ie<6;ie++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let O=0;O<E.mipmaps.length;O++)be(F.__webglFramebuffer[ie][O],T,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,O);else be(F.__webglFramebuffer[ie],T,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);w(E,fe)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const ie=T.texture;for(let O=0,xe=ie.length;O<xe;O++){const me=ie[O],ge=n.get(me);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),ve(i.TEXTURE_2D,me,fe),be(F.__webglFramebuffer,T,me,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,0),w(me,fe)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ie=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,te.__webglTexture),ve(ie,E,fe),a&&E.mipmaps&&E.mipmaps.length>0)for(let O=0;O<E.mipmaps.length;O++)be(F.__webglFramebuffer[O],T,E,i.COLOR_ATTACHMENT0,ie,O);else be(F.__webglFramebuffer,T,E,i.COLOR_ATTACHMENT0,ie,0);w(E,fe)&&b(ie),t.unbindTexture()}T.depthBuffer&&Ee(T)}function Xe(T){const E=x(T)||a,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,J=F.length;te<J;te++){const Q=F[te];if(w(Q,E)){const fe=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ie=n.get(Q).__webglTexture;t.bindTexture(fe,ie),b(fe),t.unbindTexture()}}}function Pe(T){if(a&&T.samples>0&&He(T)===!1){const E=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,te=T.height;let J=i.COLOR_BUFFER_BIT;const Q=[],fe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(T),O=T.isWebGLMultipleRenderTargets===!0;if(O)for(let xe=0;xe<E.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){Q.push(i.COLOR_ATTACHMENT0+xe),T.depthBuffer&&Q.push(fe);const me=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(me===!1&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),O&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]),me===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[fe])),O){const ge=n.get(E[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,F,te,0,0,F,te,J,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let xe=0;xe<E.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);const me=n.get(E[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function we(T){return Math.min(u,T.samples)}function He(T){const E=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function at(T){const E=o.render.frame;g.get(T)!==E&&(g.set(T,E),T.update())}function Ye(T,E){const F=T.colorSpace,te=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===jo||F!==on&&F!==ri&&(F===Ze||F===Fs?a===!1?e.has("EXT_sRGB")===!0&&te===Qt?(T.format=jo,T.minFilter=Vt,T.generateMipmaps=!1):E=nu.sRGBToLinear(E):(te!==Qt||J!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}this.allocateTextureUnit=Y,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=re,this.rebindTextures=Re,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=be,this.useMultisampledRTT=He}const IE=0,lt=1;function DE(i,e,t){const n=t.isWebGL2;function r(s,o=ri){let a;const l=o===Ze||o===Fs?lt:IE;if(s===zn)return i.UNSIGNED_BYTE;if(s===Kh)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Zh)return i.UNSIGNED_SHORT_5_5_5_1;if(s===hg)return i.BYTE;if(s===ug)return i.SHORT;if(s===Da)return i.UNSIGNED_SHORT;if(s===qh)return i.INT;if(s===Dn)return i.UNSIGNED_INT;if(s===Un)return i.FLOAT;if(s===Mr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===dg)return i.ALPHA;if(s===Qt)return i.RGBA;if(s===fg)return i.LUMINANCE;if(s===pg)return i.LUMINANCE_ALPHA;if(s===ni)return i.DEPTH_COMPONENT;if(s===ji)return i.DEPTH_STENCIL;if(s===jo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===mg)return i.RED;if(s===jh)return i.RED_INTEGER;if(s===gg)return i.RG;if(s===$h)return i.RG_INTEGER;if(s===Jh)return i.RGBA_INTEGER;if(s===Qs||s===eo||s===to||s===no)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===to)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===to)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===no)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cl||s===Ll||s===Pl||s===Il)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Cl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ll)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Il)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_g)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Dl||s===Ul)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Dl)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ul)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Nl||s===Fl||s===Ol||s===zl||s===Bl||s===Gl||s===Hl||s===Vl||s===kl||s===Wl||s===Xl||s===Yl||s===ql||s===Kl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Nl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ol)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===kl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ql)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kl)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===io||s===Zl||s===jl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===io)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===vg||s===$l||s===Jl||s===Ql)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===io)return a.COMPRESSED_RED_RGTC1_EXT;if(s===$l)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ql)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ti?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class UE extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ss extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NE={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(NE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class FE extends Pt{constructor(e,t,n,r,s,o,a,l,c,h){if(h=h!==void 0?h:ni,h!==ni&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ni&&(n=Dn),n===void 0&&h===ji&&(n=ti),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class OE extends Qi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=t.getContextAttributes();let p=null,f=null;const y=[],v=[],x=new kt;x.layers.enable(1),x.viewport=new _t;const A=new kt;A.layers.enable(2),A.viewport=new _t;const w=[x,A],b=new UE;b.layers.enable(1),b.layers.enable(2);let U=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let H=y[B];return H===void 0&&(H=new wo,y[B]=H),H.getTargetRaySpace()},this.getControllerGrip=function(B){let H=y[B];return H===void 0&&(H=new wo,y[B]=H),H.getGripSpace()},this.getHand=function(B){let H=y[B];return H===void 0&&(H=new wo,y[B]=H),H.getHandSpace()};function R(B){const H=v.indexOf(B.inputSource);if(H===-1)return;const re=y[H];re!==void 0&&(re.update(B.inputSource,B.frame,c||o),re.dispatchEvent({type:B.type,data:B.inputSource}))}function Z(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",q);for(let B=0;B<y.length;B++){const H=v[B];H!==null&&(v[B]=null,y[B].disconnect(H))}U=null,M=null,e.setRenderTarget(p),m=null,d=null,u=null,r=null,f=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:m}),f=new oi(m.framebufferWidth,m.framebufferHeight,{format:Qt,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let H=null,re=null,ee=null;_.depth&&(ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=_.stencil?ji:ni,re=_.stencil?ti:Dn);const ne={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ne),r.updateRenderState({layers:[d]}),f=new oi(d.textureWidth,d.textureHeight,{format:Qt,type:zn,depthTexture:new FE(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const pe=e.properties.get(f);pe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(B){for(let H=0;H<B.removed.length;H++){const re=B.removed[H],ee=v.indexOf(re);ee>=0&&(v[ee]=null,y[ee].disconnect(re))}for(let H=0;H<B.added.length;H++){const re=B.added[H];let ee=v.indexOf(re);if(ee===-1){for(let pe=0;pe<y.length;pe++)if(pe>=v.length){v.push(re),ee=pe;break}else if(v[pe]===null){v[pe]=re,ee=pe;break}if(ee===-1)break}const ne=y[ee];ne&&ne.connect(re)}}const P=new L,G=new L;function V(B,H,re){P.setFromMatrixPosition(H.matrixWorld),G.setFromMatrixPosition(re.matrixWorld);const ee=P.distanceTo(G),ne=H.projectionMatrix.elements,pe=re.projectionMatrix.elements,ve=ne[14]/(ne[10]-1),he=ne[14]/(ne[10]+1),De=(ne[9]+1)/ne[5],dt=(ne[9]-1)/ne[5],be=(ne[8]-1)/ne[0],I=(pe[8]+1)/pe[0],ft=ve*be,Ee=ve*I,Re=ee/(-be+I),Me=Re*-be;H.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Me),B.translateZ(Re),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Xe=ve+Re,Pe=he+Re,we=ft-Me,He=Ee+(ee-Me),at=De*he/Pe*Xe,Ye=dt*he/Pe*Xe;B.projectionMatrix.makePerspective(we,He,at,Ye,Xe,Pe),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function j(B,H){H===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(H.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;b.near=A.near=x.near=B.near,b.far=A.far=x.far=B.far,(U!==b.near||M!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,M=b.far);const H=B.parent,re=b.cameras;j(b,H);for(let ee=0;ee<re.length;ee++)j(re[ee],H);re.length===2?V(b,x,A):b.projectionMatrix.copy(x.projectionMatrix),z(B,b,H)};function z(B,H,re){re===null?B.matrix.copy(H.matrixWorld):(B.matrix.copy(re.matrixWorld),B.matrix.invert(),B.matrix.multiply(H.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(H.projectionMatrix),B.projectionMatrixInverse.copy(H.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=$o*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let Y=null;function $(B,H){if(h=H.getViewerPose(c||o),g=H,h!==null){const re=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ee=!1;re.length!==b.cameras.length&&(b.cameras.length=0,ee=!0);for(let ne=0;ne<re.length;ne++){const pe=re[ne];let ve=null;if(m!==null)ve=m.getViewport(pe);else{const De=u.getViewSubImage(d,pe);ve=De.viewport,ne===0&&(e.setRenderTargetTextures(f,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(f))}let he=w[ne];he===void 0&&(he=new kt,he.layers.enable(ne),he.viewport=new _t,w[ne]=he),he.matrix.fromArray(pe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(pe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ve.x,ve.y,ve.width,ve.height),ne===0&&(b.matrix.copy(he.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ee===!0&&b.cameras.push(he)}}for(let re=0;re<y.length;re++){const ee=v[re],ne=y[re];ee!==null&&ne!==void 0&&ne.update(ee,H,c||o)}Y&&Y(B,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),g=null}const K=new fu;K.setAnimationLoop($),this.setAnimationLoop=function(B){Y=B},this.dispose=function(){}}}function zE(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,hu(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,y,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,x)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,y,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Lt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Lt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Lt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function BE(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=r[y.id];x===void 0&&(g(y),x=h(y),r[y.id]=x,y.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(y,A);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function h(y){const v=u();y.__bindingPointIndex=v;const x=i.createBuffer(),A=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],x=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,b=x.length;w<b;w++){const U=x[w];if(m(U,w,A)===!0){const M=U.__offset,R=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let q=0;q<R.length;q++){const P=R[q],G=_(P);typeof P=="number"?(U.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,M+Z,U.__data)):P.isMatrix3?(U.__data[0]=P.elements[0],U.__data[1]=P.elements[1],U.__data[2]=P.elements[2],U.__data[3]=P.elements[0],U.__data[4]=P.elements[3],U.__data[5]=P.elements[4],U.__data[6]=P.elements[5],U.__data[7]=P.elements[0],U.__data[8]=P.elements[6],U.__data[9]=P.elements[7],U.__data[10]=P.elements[8],U.__data[11]=P.elements[0]):(P.toArray(U.__data,Z),Z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,U.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,v,x){const A=y.value;if(x[v]===void 0){if(typeof A=="number")x[v]=A;else{const w=Array.isArray(A)?A:[A],b=[];for(let U=0;U<w.length;U++)b.push(w[U].clone());x[v]=b}return!0}else if(typeof A=="number"){if(x[v]!==A)return x[v]=A,!0}else{const w=Array.isArray(x[v])?x[v]:[x[v]],b=Array.isArray(A)?A:[A];for(let U=0;U<w.length;U++){const M=w[U];if(M.equals(b[U])===!1)return M.copy(b[U]),!0}}return!1}function g(y){const v=y.uniforms;let x=0;const A=16;let w=0;for(let b=0,U=v.length;b<U;b++){const M=v[b],R={boundary:0,storage:0},Z=Array.isArray(M.value)?M.value:[M.value];for(let q=0,P=Z.length;q<P;q++){const G=Z[q],V=_(G);R.boundary+=V.boundary,R.storage+=V.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,b>0){w=x%A;const q=A-w;w!==0&&q-R.boundary<0&&(x+=A-w,M.__offset=x)}x+=R.storage}return w=x%A,w>0&&(x+=A-w),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class xu{constructor(e={}){const{canvas:t=Ig(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const v=this;let x=!1,A=0,w=0,b=null,U=-1,M=null;const R=new _t,Z=new _t;let q=null;const P=new Be(0);let G=0,V=t.width,j=t.height,z=1,Y=null,$=null;const K=new _t(0,0,V,j),B=new _t(0,0,V,j);let H=!1;const re=new Ua;let ee=!1,ne=!1,pe=null;const ve=new ot,he=new Ge,De=new L,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return b===null?z:1}let I=n;function ft(S,D){for(let W=0;W<S.length;W++){const N=S[W],X=t.getContext(N,D);if(X!==null)return X}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ia}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),I=ft(D,S),I===null)throw ft(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ee,Re,Me,Xe,Pe,we,He,at,Ye,T,E,F,te,J,Q,fe,ie,O,xe,me,ge,ue,de,Ue;function qe(){Ee=new Zv(I),Re=new kv(I,Ee,e),Ee.init(Re),ue=new DE(I,Ee,Re),Me=new LE(I,Ee,Re),Xe=new Jv(I),Pe=new gE,we=new PE(I,Ee,Me,Pe,Re,ue,Xe),He=new Xv(v),at=new Kv(v),Ye=new l_(I,Re),de=new Hv(I,Ee,Ye,Re),T=new jv(I,Ye,Xe,de),E=new nx(I,T,Ye,Xe),xe=new tx(I,Re,we),fe=new Wv(Pe),F=new mE(v,He,at,Ee,Re,de,fe),te=new zE(v,Pe),J=new vE,Q=new TE(Ee,Re),O=new Gv(v,He,at,Me,E,d,l),ie=new CE(v,E,Re),Ue=new BE(I,Xe,Re,Me),me=new Vv(I,Ee,Xe,Re),ge=new $v(I,Ee,Xe,Re),Xe.programs=F.programs,v.capabilities=Re,v.extensions=Ee,v.properties=Pe,v.renderLists=J,v.shadowMap=ie,v.state=Me,v.info=Xe}qe();const C=new OE(v,I);this.xr=C,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(V,j,!1))},this.getSize=function(S){return S.set(V,j)},this.setSize=function(S,D,W=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,j=D,t.width=Math.floor(S*z),t.height=Math.floor(D*z),W===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(V*z,j*z).floor()},this.setDrawingBufferSize=function(S,D,W){V=S,j=D,z=W,t.width=Math.floor(S*W),t.height=Math.floor(D*W),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,D,W,N){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,D,W,N),Me.viewport(R.copy(K).multiplyScalar(z).floor())},this.getScissor=function(S){return S.copy(B)},this.setScissor=function(S,D,W,N){S.isVector4?B.set(S.x,S.y,S.z,S.w):B.set(S,D,W,N),Me.scissor(Z.copy(B).multiplyScalar(z).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(S){Me.setScissorTest(H=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor.apply(O,arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha.apply(O,arguments)},this.clear=function(S=!0,D=!0,W=!0){let N=0;if(S){let X=!1;if(b!==null){const ce=b.texture.format;X=ce===Jh||ce===$h||ce===jh}if(X){const ce=b.texture.type,ye=ce===zn||ce===Dn||ce===Da||ce===ti||ce===Kh||ce===Zh,Te=O.getClearColor(),Ae=O.getClearAlpha(),Ne=Te.r,Se=Te.g,Ce=Te.b;ye?(m[0]=Ne,m[1]=Se,m[2]=Ce,m[3]=Ae,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ne,g[1]=Se,g[2]=Ce,g[3]=Ae,I.clearBufferiv(I.COLOR,0,g))}else N|=I.COLOR_BUFFER_BIT}D&&(N|=I.DEPTH_BUFFER_BIT),W&&(N|=I.STENCIL_BUFFER_BIT),I.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",se,!1),J.dispose(),Q.dispose(),Pe.dispose(),He.dispose(),at.dispose(),E.dispose(),de.dispose(),Ue.dispose(),F.dispose(),C.dispose(),C.removeEventListener("sessionstart",Ke),C.removeEventListener("sessionend",en),pe&&(pe.dispose(),pe=null),St.stop()};function ae(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=Xe.autoReset,D=ie.enabled,W=ie.autoUpdate,N=ie.needsUpdate,X=ie.type;qe(),Xe.autoReset=S,ie.enabled=D,ie.autoUpdate=W,ie.needsUpdate=N,ie.type=X}function se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function le(S){const D=S.target;D.removeEventListener("dispose",le),ze(D)}function ze(S){je(S),Pe.remove(S)}function je(S){const D=Pe.get(S).programs;D!==void 0&&(D.forEach(function(W){F.releaseProgram(W)}),S.isShaderMaterial&&F.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,W,N,X,ce){D===null&&(D=dt);const ye=X.isMesh&&X.matrixWorld.determinant()<0,Te=Su(S,D,W,N,X);Me.setMaterial(N,ye);let Ae=W.index,Ne=1;if(N.wireframe===!0){if(Ae=T.getWireframeAttribute(W),Ae===void 0)return;Ne=2}const Se=W.drawRange,Ce=W.attributes.position;let Je=Se.start*Ne,et=(Se.start+Se.count)*Ne;ce!==null&&(Je=Math.max(Je,ce.start*Ne),et=Math.min(et,(ce.start+ce.count)*Ne)),Ae!==null?(Je=Math.max(Je,0),et=Math.min(et,Ae.count)):Ce!=null&&(Je=Math.max(Je,0),et=Math.min(et,Ce.count));const Ot=et-Je;if(Ot<0||Ot===1/0)return;de.setup(X,N,Te,W,Ae);let ln,it=me;if(Ae!==null&&(ln=Ye.get(Ae),it=ge,it.setIndex(ln)),X.isMesh)N.wireframe===!0?(Me.setLineWidth(N.wireframeLinewidth*be()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(X.isLine){let Fe=N.linewidth;Fe===void 0&&(Fe=1),Me.setLineWidth(Fe*be()),X.isLineSegments?it.setMode(I.LINES):X.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else X.isPoints?it.setMode(I.POINTS):X.isSprite&&it.setMode(I.TRIANGLES);if(X.isInstancedMesh)it.renderInstances(Je,Ot,X.count);else if(W.isInstancedBufferGeometry){const Fe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Gs=Math.min(W.instanceCount,Fe);it.renderInstances(Je,Ot,Gs)}else it.render(Je,Ot)},this.compile=function(S,D){function W(N,X,ce){N.transparent===!0&&N.side===vn&&N.forceSinglePass===!1?(N.side=Lt,N.needsUpdate=!0,Lr(N,X,ce),N.side=Gn,N.needsUpdate=!0,Lr(N,X,ce),N.side=vn):Lr(N,X,ce)}p=Q.get(S),p.init(),y.push(p),S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(v._useLegacyLights),S.traverse(function(N){const X=N.material;if(X)if(Array.isArray(X))for(let ce=0;ce<X.length;ce++){const ye=X[ce];W(ye,S,N)}else W(X,S,N)}),y.pop(),p=null};let nt=null;function Sn(S){nt&&nt(S)}function Ke(){St.stop()}function en(){St.start()}const St=new fu;St.setAnimationLoop(Sn),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(S){nt=S,C.setAnimationLoop(S),S===null?St.stop():St.start()},C.addEventListener("sessionstart",Ke),C.addEventListener("sessionend",en),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(D),D=C.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,D,b),p=Q.get(S,y.length),p.init(),y.push(p),ve.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),re.setFromProjectionMatrix(ve),ne=this.localClippingEnabled,ee=fe.init(this.clippingPlanes,ne),_=J.get(S,f.length),_.init(),f.push(_),za(S,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,$),this.info.render.frame++,ee===!0&&fe.beginShadows();const W=p.state.shadowsArray;if(ie.render(W,S,D),ee===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),O.render(_,S),p.setupLights(v._useLegacyLights),D.isArrayCamera){const N=D.cameras;for(let X=0,ce=N.length;X<ce;X++){const ye=N[X];Ba(_,S,ye,ye.viewport)}}else Ba(_,S,D);b!==null&&(we.updateMultisampleRenderTarget(b),we.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,D),de.resetDefaultState(),U=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function za(S,D,W,N){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||re.intersectsSprite(S)){N&&De.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const ye=E.update(S),Te=S.material;Te.visible&&_.push(S,ye,Te,W,De.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||re.intersectsObject(S))){const ye=E.update(S),Te=S.material;if(N&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),De.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),De.copy(ye.boundingSphere.center)),De.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(Te)){const Ae=ye.groups;for(let Ne=0,Se=Ae.length;Ne<Se;Ne++){const Ce=Ae[Ne],Je=Te[Ce.materialIndex];Je&&Je.visible&&_.push(S,ye,Je,W,De.z,Ce)}}else Te.visible&&_.push(S,ye,Te,W,De.z,null)}}const ce=S.children;for(let ye=0,Te=ce.length;ye<Te;ye++)za(ce[ye],D,W,N)}function Ba(S,D,W,N){const X=S.opaque,ce=S.transmissive,ye=S.transparent;p.setupLightsView(W),ee===!0&&fe.setGlobalState(v.clippingPlanes,W),ce.length>0&&yu(X,ce,D,W),N&&Me.viewport(R.copy(N)),X.length>0&&Cr(X,D,W),ce.length>0&&Cr(ce,D,W),ye.length>0&&Cr(ye,D,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function yu(S,D,W,N){const X=Re.isWebGL2;pe===null&&(pe=new oi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Mr:zn,minFilter:Er,samples:X?4:0})),v.getDrawingBufferSize(he),X?pe.setSize(he.x,he.y):pe.setSize(Jo(he.x),Jo(he.y));const ce=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(P),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear();const ye=v.toneMapping;v.toneMapping=On,Cr(S,W,N),we.updateMultisampleRenderTarget(pe),we.updateRenderTargetMipmap(pe);let Te=!1;for(let Ae=0,Ne=D.length;Ae<Ne;Ae++){const Se=D[Ae],Ce=Se.object,Je=Se.geometry,et=Se.material,Ot=Se.group;if(et.side===vn&&Ce.layers.test(N.layers)){const ln=et.side;et.side=Lt,et.needsUpdate=!0,Ga(Ce,W,N,Je,et,Ot),et.side=ln,et.needsUpdate=!0,Te=!0}}Te===!0&&(we.updateMultisampleRenderTarget(pe),we.updateRenderTargetMipmap(pe)),v.setRenderTarget(ce),v.setClearColor(P,G),v.toneMapping=ye}function Cr(S,D,W){const N=D.isScene===!0?D.overrideMaterial:null;for(let X=0,ce=S.length;X<ce;X++){const ye=S[X],Te=ye.object,Ae=ye.geometry,Ne=N===null?ye.material:N,Se=ye.group;Te.layers.test(W.layers)&&Ga(Te,D,W,Ae,Ne,Se)}}function Ga(S,D,W,N,X,ce){S.onBeforeRender(v,D,W,N,X,ce),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(v,D,W,N,S,ce),X.transparent===!0&&X.side===vn&&X.forceSinglePass===!1?(X.side=Lt,X.needsUpdate=!0,v.renderBufferDirect(W,D,N,X,S,ce),X.side=Gn,X.needsUpdate=!0,v.renderBufferDirect(W,D,N,X,S,ce),X.side=vn):v.renderBufferDirect(W,D,N,X,S,ce),S.onAfterRender(v,D,W,N,X,ce)}function Lr(S,D,W){D.isScene!==!0&&(D=dt);const N=Pe.get(S),X=p.state.lights,ce=p.state.shadowsArray,ye=X.state.version,Te=F.getParameters(S,X.state,ce,D,W),Ae=F.getProgramCacheKey(Te);let Ne=N.programs;N.environment=S.isMeshStandardMaterial?D.environment:null,N.fog=D.fog,N.envMap=(S.isMeshStandardMaterial?at:He).get(S.envMap||N.environment),Ne===void 0&&(S.addEventListener("dispose",le),Ne=new Map,N.programs=Ne);let Se=Ne.get(Ae);if(Se!==void 0){if(N.currentProgram===Se&&N.lightsStateVersion===ye)return Ha(S,Te),Se}else Te.uniforms=F.getUniforms(S),S.onBuild(W,Te,v),S.onBeforeCompile(Te,v),Se=F.acquireProgram(Te,Ae),Ne.set(Ae,Se),N.uniforms=Te.uniforms;const Ce=N.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=fe.uniform),Ha(S,Te),N.needsLights=Au(S),N.lightsStateVersion=ye,N.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.directionalShadowMap.value=X.state.directionalShadowMap,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotShadowMap.value=X.state.spotShadowMap,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMap.value=X.state.pointShadowMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix);const Je=Se.getUniforms(),et=fs.seqWithValue(Je.seq,Ce);return N.currentProgram=Se,N.uniformsList=et,Se}function Ha(S,D){const W=Pe.get(S);W.outputColorSpace=D.outputColorSpace,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Su(S,D,W,N,X){D.isScene!==!0&&(D=dt),we.resetTextureUnits();const ce=D.fog,ye=N.isMeshStandardMaterial?D.environment:null,Te=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:on,Ae=(N.isMeshStandardMaterial?at:He).get(N.envMap||ye),Ne=N.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Se=!!W.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Ce=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,et=!!W.morphAttributes.color;let Ot=On;N.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ot=v.toneMapping);const ln=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=ln!==void 0?ln.length:0,Fe=Pe.get(N),Gs=p.state.lights;if(ee===!0&&(ne===!0||S!==M)){const Dt=S===M&&N.id===U;fe.setState(N,S,Dt)}let rt=!1;N.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Gs.state.version||Fe.outputColorSpace!==Te||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||Fe.envMap!==Ae||N.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==fe.numPlanes||Fe.numIntersection!==fe.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==Se||Fe.morphTargets!==Ce||Fe.morphNormals!==Je||Fe.morphColors!==et||Fe.toneMapping!==Ot||Re.isWebGL2===!0&&Fe.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Fe.__version=N.version);let Vn=Fe.currentProgram;rt===!0&&(Vn=Lr(N,D,X));let Va=!1,nr=!1,Hs=!1;const Tt=Vn.getUniforms(),kn=Fe.uniforms;if(Me.useProgram(Vn.program)&&(Va=!0,nr=!0,Hs=!0),N.id!==U&&(U=N.id,nr=!0),Va||M!==S){Tt.setValue(I,"projectionMatrix",S.projectionMatrix),Tt.setValue(I,"viewMatrix",S.matrixWorldInverse);const Dt=Tt.map.cameraPosition;Dt!==void 0&&Dt.setValue(I,De.setFromMatrixPosition(S.matrixWorld)),Re.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,nr=!0,Hs=!0)}if(X.isSkinnedMesh){Tt.setOptional(I,X,"bindMatrix"),Tt.setOptional(I,X,"bindMatrixInverse");const Dt=X.skeleton;Dt&&(Re.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Tt.setValue(I,"boneTexture",Dt.boneTexture,we),Tt.setValue(I,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vs=W.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0&&Re.isWebGL2===!0)&&xe.update(X,W,Vn),(nr||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,Tt.setValue(I,"receiveShadow",X.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(kn.envMap.value=Ae,kn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),nr&&(Tt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&Tu(kn,Hs),ce&&N.fog===!0&&te.refreshFogUniforms(kn,ce),te.refreshMaterialUniforms(kn,N,z,j,pe),fs.upload(I,Fe.uniformsList,kn,we)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(fs.upload(I,Fe.uniformsList,kn,we),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Tt.setValue(I,"center",X.center),Tt.setValue(I,"modelViewMatrix",X.modelViewMatrix),Tt.setValue(I,"normalMatrix",X.normalMatrix),Tt.setValue(I,"modelMatrix",X.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Dt=N.uniformsGroups;for(let ks=0,Ru=Dt.length;ks<Ru;ks++)if(Re.isWebGL2){const ka=Dt[ks];Ue.update(ka,Vn),Ue.bind(ka,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function Tu(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Au(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,D,W){Pe.get(S.texture).__webglTexture=D,Pe.get(S.depthTexture).__webglTexture=W;const N=Pe.get(S);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=W===void 0,N.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const W=Pe.get(S);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,W=0){b=S,A=D,w=W;let N=!0,X=null,ce=!1,ye=!1;if(S){const Ae=Pe.get(S);Ae.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(I.FRAMEBUFFER,null),N=!1):Ae.__webglFramebuffer===void 0?we.setupRenderTarget(S):Ae.__hasExternalTextures&&we.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const Se=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Se[D])?X=Se[D][W]:X=Se[D],ce=!0):Re.isWebGL2&&S.samples>0&&we.useMultisampledRTT(S)===!1?X=Pe.get(S).__webglMultisampledFramebuffer:Array.isArray(Se)?X=Se[W]:X=Se,R.copy(S.viewport),Z.copy(S.scissor),q=S.scissorTest}else R.copy(K).multiplyScalar(z).floor(),Z.copy(B).multiplyScalar(z).floor(),q=H;if(Me.bindFramebuffer(I.FRAMEBUFFER,X)&&Re.drawBuffers&&N&&Me.drawBuffers(S,X),Me.viewport(R),Me.scissor(Z),Me.setScissorTest(q),ce){const Ae=Pe.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,W)}else if(ye){const Ae=Pe.get(S.texture),Ne=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,Ne)}U=-1},this.readRenderTargetPixels=function(S,D,W,N,X,ce,ye){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){Me.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Ae=S.texture,Ne=Ae.format,Se=Ae.type;if(Ne!==Qt&&ue.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Se===Mr&&(Ee.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Se!==zn&&ue.convert(Se)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===Un&&(Re.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-N&&W>=0&&W<=S.height-X&&I.readPixels(D,W,N,X,ue.convert(Ne),ue.convert(Se),ce)}finally{const Ae=b!==null?Pe.get(b).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(S,D,W=0){const N=Math.pow(2,-W),X=Math.floor(D.image.width*N),ce=Math.floor(D.image.height*N);we.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,S.x,S.y,X,ce),Me.unbindTexture()},this.copyTextureToTexture=function(S,D,W,N=0){const X=D.image.width,ce=D.image.height,ye=ue.convert(W.format),Te=ue.convert(W.type);we.setTexture2D(W,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,S.x,S.y,X,ce,ye,Te,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,ye,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,N,S.x,S.y,ye,Te,D.image),N===0&&W.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(S,D,W,N,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=S.max.x-S.min.x+1,ye=S.max.y-S.min.y+1,Te=S.max.z-S.min.z+1,Ae=ue.convert(N.format),Ne=ue.convert(N.type);let Se;if(N.isData3DTexture)we.setTexture3D(N,0),Se=I.TEXTURE_3D;else if(N.isDataArrayTexture)we.setTexture2DArray(N,0),Se=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),Je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),et=I.getParameter(I.UNPACK_SKIP_PIXELS),Ot=I.getParameter(I.UNPACK_SKIP_ROWS),ln=I.getParameter(I.UNPACK_SKIP_IMAGES),it=W.isCompressedTexture?W.mipmaps[0]:W.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,it.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,S.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S.min.z),W.isDataTexture||W.isData3DTexture?I.texSubImage3D(Se,X,D.x,D.y,D.z,ce,ye,Te,Ae,Ne,it.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Se,X,D.x,D.y,D.z,ce,ye,Te,Ae,it.data)):I.texSubImage3D(Se,X,D.x,D.y,D.z,ce,ye,Te,Ae,Ne,it),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,et),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ln),X===0&&N.generateMipmaps&&I.generateMipmap(Se),Me.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?we.setTextureCube(S,0):S.isData3DTexture?we.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?we.setTexture2DArray(S,0):we.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){A=0,w=0,b=null,Me.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ze?ii:Qh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ii?Ze:on}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class GE extends xu{}GE.prototype.isWebGL1Renderer=!0;class HE extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Eu extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bc=new L,Gc=new L,Hc=new ot,Co=new su,os=new Os;class VE extends xt{constructor(e=new an,t=new Eu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Bc.fromBufferAttribute(t,r-1),Gc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Bc.distanceTo(Gc);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(r),os.radius+=s,e.ray.intersectsSphere(os)===!1)return;Hc.copy(r).invert(),Co.copy(e.ray).applyMatrix4(Hc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,h=new L,u=new L,d=new L,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=f,x=y-1;v<x;v+=m){const A=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(p,A),h.fromBufferAttribute(p,w),Co.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=f,x=y-1;v<x;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Co.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Vc=new L,kc=new L;class kE extends VE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Vc.fromBufferAttribute(t,r),kc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Vc.distanceTo(kc);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class WE extends Pt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fa extends an{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],m=[];let g=0;const _=[],p=n/2;let f=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(m,2));function y(){const x=new L,A=new L;let w=0;const b=(t-e)/n;for(let U=0;U<=s;U++){const M=[],R=U/s,Z=R*(t-e)+e;for(let q=0;q<=r;q++){const P=q/r,G=P*l+a,V=Math.sin(G),j=Math.cos(G);A.x=Z*V,A.y=-R*n+p,A.z=Z*j,u.push(A.x,A.y,A.z),x.set(V,b,j).normalize(),d.push(x.x,x.y,x.z),m.push(P,1-R),M.push(g++)}_.push(M)}for(let U=0;U<r;U++)for(let M=0;M<s;M++){const R=_[M][U],Z=_[M+1][U],q=_[M+1][U+1],P=_[M][U+1];h.push(R,Z,P),h.push(Z,q,P),w+=6}c.addGroup(f,w,0),f+=w}function v(x){const A=g,w=new Ge,b=new L;let U=0;const M=x===!0?e:t,R=x===!0?1:-1;for(let q=1;q<=r;q++)u.push(0,p*R,0),d.push(0,R,0),m.push(.5,.5),g++;const Z=g;for(let q=0;q<=r;q++){const G=q/r*l+a,V=Math.cos(G),j=Math.sin(G);b.x=M*j,b.y=p*R,b.z=M*V,u.push(b.x,b.y,b.z),d.push(0,R,0),w.x=V*.5+.5,w.y=j*.5*R+.5,m.push(w.x,w.y),g++}for(let q=0;q<r;q++){const P=A+q,G=Z+q;x===!0?h.push(G,G+1,P):h.push(G+1,G,P),U+=3}c.addGroup(f,U,x===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oa extends Fa{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Oa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class XE extends er{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class YE extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Lo=new ot,Wc=new L,Xc=new L;class qE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class KE extends qE{constructor(){super(new pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ZE extends YE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new KE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jE extends kE{constructor(e=10,t=10,n=4473924,r=8947848){n=new Be(n),r=new Be(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,m=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===s?n:r;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const h=new an;h.setAttribute("position",new It(l,3)),h.setAttribute("color",new It(c,3));const u=new Eu({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);const dr=1e3,ea=1e3;let as,Yc,ls=.04,jt,ei,ta;const $E=new Array;let Mn,na,Ss,qc,Kc,ia,qi,cs,Zc,ct,hs,jc,$c,Jc,ra,Li=new L(0,0,0),Po=new L(0,0,100),Ni=new L(0,0,1),Io=Ni.clone(),Bi,Do=0;function JE(){navbarExitFullscreen.classList.remove("d-none"),navbarEnterFullscreen.classList.add("d-none"),document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen()}function QE(){navbarExitFullscreen.classList.add("d-none"),navbarEnterFullscreen.classList.remove("d-none"),document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}function eM(i){switch(console.log(i.keyCode),i.keyCode){case 37:ct.rotation.z+=.01;break;case 39:ct.rotation.z-=.01;break}}function tM(){const i=window.innerWidth,e=window.innerHeight;Mn.aspect=i/e,Mn.updateProjectionMatrix(),Ss.setSize(i,e)}function nM(){let i=document.getElementById("mapCanvas").children[0].children[0].children[0].children[0];const e=new WE(i),t=new Yi({map:e});ei!=null&&jt.remove(ei),ei=new Ft(ta,t),jt.add(ei)}function iM(){window.addEventListener("resize",tM),document.addEventListener("keydown",eM),navbarEnterFullscreen.addEventListener("click",JE),navbarExitFullscreen.addEventListener("click",QE),sM(),rM(),oM()}function rM(){Bi=new Stats,Bi.showPanel(0),Bi.dom.style="",debugCardFPS.appendChild(Bi.dom)}function sM(){Ss=new xu({canvas:threeCanvas,antialias:!0}),Ss.setSize(window.innerWidth,window.innerHeight),jt=new HE,jt.background=new Be(10408698),Mn=new kt(75,window.innerWidth/window.innerHeight,.1,1e3),na=new ZE(16777215,.8),jt.add(na),qc=new wr(dr,dr,1,1),Kc=new Yi({color:8429915}),ia=new Ft(qc,Kc),jt.add(ia),qi=new jE(dr,ea,14540253,14540253),qi.rotateX(Math.PI/2),jt.add(qi),cs=new ai(.1,1,.1),cs.rotateY(Math.PI/2),cs.translate(0,0,.05),Zc=new Yi({color:65280,wireframe:!0}),ct=new Ft(cs,Zc),jt.add(ct),hs=new Oa(.2,1,20),hs.rotateX(Math.PI/2),hs.translate(0,0,.5),jc=new XE({color:2162464});for(let i=0;i<10;i++)for(let e=0;e<100;e++){const t=new Ft(hs,jc);t.position.y=-9+e*2,t.position.x=-9+i*2,$E.push(t),jt.add(t)}$c=new ai(.01,.01,.01),Jc=new Yi({color:16711680}),ra=new Ft($c,Jc),jt.add(ra)}function oM(){wd(),as=new In({center:[0,0],zoom:1}),Yc=new Xp({target:"mapCanvas",layers:[new um({source:new Dm})],view:as}),Yc.on("postrender",nM),as.setCenter([16.94529940000001,46.685864200000026]),as.setZoom(22),ta=new wr(100,100),ta.translate(0,0,.001)}function Mu(){Bi.begin(),aM(),lM();let i=new L(Math.cos(Math.PI/180*Do)*.1,Math.sin(Math.PI/180*Do*3)*.1,.2);i.add(ct.position),ra.position.copy(i),cM(),na.position.copy(Mn.position),Ss.render(jt,Mn),Bi.end(),Do++,requestAnimationFrame(Mu)}function aM(){ct.rotation.z-=.005;const i=new L(0,.01,0);i.applyEuler(ct.rotation),ct.position.addScaledVector(i,1)}function lM(){hudGroundMap.checked?(ei.visible=!0,qi.visible=!1):hudGroundGrid.checked&&(ei!=null&&(ei.visible=!1),qi.visible=!0),ia.position.set(ct.position.x,ct.position.y,0),qi.position.set(ct.position.x-ct.position.x%(dr/ea),ct.position.y-ct.position.y%(dr/ea),.001)}function cM(){hudModeFollow.checked?(hudViewpointTop.checked?(Li.set(0,0,15),hudHeadingFront.checked&&Li.applyEuler(ct.rotation),Po.lerp(Li,ls),Ni.set(0,1,0),hudHeadingFront.checked&&Ni.applyEuler(ct.rotation),Io.lerp(Ni,ls)):hudViewpointBack.checked&&(Li.set(0,-2,.8),hudHeadingFront.checked&&Li.applyEuler(ct.rotation),Po.lerp(Li,ls),Ni.set(0,0,1),Io.lerp(Ni,ls)),Mn.up.copy(Io),Mn.position.copy(ct.position),Mn.position.add(Po),Mn.lookAt(ct.position)):hudModeFree.checked}iM();Mu();
//# sourceMappingURL=index-c15c5f59.js.map
