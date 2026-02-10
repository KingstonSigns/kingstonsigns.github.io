(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vo="161",wi={ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ah=0,Go=1,Ch=2,Jc=1,Rh=2,wn=3,Qn=0,ze=1,Tn=2,Zn=0,rr=1,Vo=2,Wo=3,Xo=4,Ph=5,oi=100,Lh=101,Dh=102,qo=103,Yo=104,Ih=200,Uh=201,Nh=202,Oh=203,eo=204,no=205,Fh=206,Bh=207,zh=208,kh=209,Hh=210,Gh=211,Vh=212,Wh=213,Xh=214,qh=0,Yh=1,jh=2,Ls=3,Zh=4,Kh=5,$h=6,Jh=7,Qc=0,Qh=1,td=2,Kn=0,ed=1,nd=2,id=3,rd=4,sd=5,ad=6,tu=300,or=301,lr=302,io=303,ro=304,Xs=306,so=1e3,Ue=1001,ao=1002,De=1003,jo=1004,mr=1005,Oe=1006,ra=1007,ci=1008,$n=1009,od=1010,ld=1011,xo=1012,eu=1013,qn=1014,An=1015,Fr=1016,nu=1017,iu=1018,ui=1020,cd=1021,sn=1023,ud=1024,hd=1025,hi=1026,cr=1027,dd=1028,ru=1029,fd=1030,su=1031,au=1033,sa=33776,aa=33777,oa=33778,la=33779,Zo=35840,Ko=35841,$o=35842,Jo=35843,ou=36196,Qo=37492,tl=37496,el=37808,nl=37809,il=37810,rl=37811,sl=37812,al=37813,ol=37814,ll=37815,cl=37816,ul=37817,hl=37818,dl=37819,fl=37820,pl=37821,ca=36492,ml=36494,gl=36495,pd=36283,_l=36284,vl=36285,xl=36286,lu=3e3,di=3001,md=3200,gd=3201,cu=0,_d=1,$e="",fe="srgb",Ln="srgb-linear",yo="display-p3",qs="display-p3-linear",Ds="linear",ne="srgb",Is="rec709",Us="p3",Ai=7680,yl=519,vd=512,xd=513,yd=514,uu=515,Sd=516,Md=517,Ed=518,bd=519,oo=35044,Sl="300 es",lo=1035,Rn=2e3,Ns=2001;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ml=1234567;const Rr=Math.PI/180,Br=180/Math.PI;function mn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function So(i,t){return(i%t+t)%t}function wd(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Td(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function Ad(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function Cd(i,t=1){return t-Math.abs(So(i,t*2)-t)}function Rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ld(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dd(i,t){return i+Math.random()*(t-i)}function Id(i){return i*(.5-Math.random())}function Ud(i){i!==void 0&&(Ml=i);let t=Ml+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(i){return i*Rr}function Od(i){return i*Br}function co(i){return(i&i-1)===0&&i!==0}function Fd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Os(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bd(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),p=s((t-n)/2),m=o((t-n)/2),f=s((n-t)/2),_=o((n-t)/2);switch(r){case"XYX":i.set(a*u,l*p,l*m,a*c);break;case"YZY":i.set(l*m,a*u,l*p,a*c);break;case"ZXZ":i.set(l*p,l*m,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const hu={DEG2RAD:Rr,RAD2DEG:Br,generateUUID:mn,clamp:xe,euclideanModulo:So,mapLinear:wd,inverseLerp:Td,lerp:Pr,damp:Ad,pingpong:Cd,smoothstep:Rd,smootherstep:Pd,randInt:Ld,randFloat:Dd,randFloatSpread:Id,seededRandom:Ud,degToRad:Nd,radToDeg:Od,isPowerOfTwo:co,ceilPowerOfTwo:Fd,floorPowerOfTwo:Os,setQuaternionFromProperEuler:Bd,normalize:Jt,denormalize:an};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,r,s,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],p=n[7],m=n[2],f=n[5],_=n[8],g=r[0],h=r[3],d=r[6],S=r[1],y=r[4],E=r[7],A=r[2],P=r[5],T=r[8];return s[0]=o*g+a*S+l*A,s[3]=o*h+a*y+l*P,s[6]=o*d+a*E+l*T,s[1]=c*g+u*S+p*A,s[4]=c*h+u*y+p*P,s[7]=c*d+u*E+p*T,s[2]=m*g+f*S+_*A,s[5]=m*h+f*y+_*P,s[8]=m*d+f*E+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],p=u*o-a*c,m=a*l-u*s,f=c*s-o*l,_=e*p+n*m+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=p*g,t[1]=(r*c-u*n)*g,t[2]=(a*n-r*o)*g,t[3]=m*g,t[4]=(u*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ua.makeScale(t,e)),this}rotate(t){return this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new jt;function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zd(){const i=Fs("canvas");return i.style.display="block",i}const El={};function fi(i){i in El||(El[i]=!0,console.warn(i))}const bl=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wl=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[Ln]:{transfer:Ds,primaries:Is,toReference:i=>i,fromReference:i=>i},[fe]:{transfer:ne,primaries:Is,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[qs]:{transfer:Ds,primaries:Us,toReference:i=>i.applyMatrix3(wl),fromReference:i=>i.applyMatrix3(bl)},[yo]:{transfer:ne,primaries:Us,toReference:i=>i.convertSRGBToLinear().applyMatrix3(wl),fromReference:i=>i.applyMatrix3(bl).convertLinearToSRGB()}},kd=new Set([Ln,qs]),Qt={enabled:!0,_workingColorSpace:Ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!kd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Yr[t].toReference,r=Yr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Yr[i].primaries},getTransfer:function(i){return i===$e?Ds:Yr[i].transfer}};function sr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ha(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ci;class fu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=Fs("canvas")),Ci.width=t.width,Ci.height=t.height;const n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=sr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(sr(e[n]/255)*255):e[n]=sr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hd=0;class pu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(da(r[o].image)):s.push(da(r[o]))}else s=da(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gd=0;class Ne extends Si{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Ue,r=Ue,s=Oe,o=ci,a=sn,l=$n,c=Ne.DEFAULT_ANISOTROPY,u=$e){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=mn(),this.name="",this.source=new pu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===di?fe:$e),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case so:t.x=t.x-Math.floor(t.x);break;case Ue:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case so:t.y=t.y-Math.floor(t.y);break;case Ue:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?di:lu}set encoding(t){fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===di?fe:$e}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=tu;Ne.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,r=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],p=l[8],m=l[1],f=l[5],_=l[9],g=l[2],h=l[6],d=l[10];if(Math.abs(u-m)<.01&&Math.abs(p-g)<.01&&Math.abs(_-h)<.01){if(Math.abs(u+m)<.1&&Math.abs(p+g)<.1&&Math.abs(_+h)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,E=(f+1)/2,A=(d+1)/2,P=(u+m)/4,T=(p+g)/4,k=(_+h)/4;return y>E&&y>A?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=P/n,s=T/n):E>A?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=P/r,s=k/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=T/s,r=k/s),this.set(n,r,s,e),this}let S=Math.sqrt((h-_)*(h-_)+(p-g)*(p-g)+(m-u)*(m-u));return Math.abs(S)<.001&&(S=1),this.x=(h-_)/S,this.y=(p-g)/S,this.z=(m-u)/S,this.w=Math.acos((c+f+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vd extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(fi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===di?fe:$e),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ne(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new pu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Vd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class mu extends Ne{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wd extends Ne{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],p=n[r+3];const m=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p;return}if(a===1){t[e+0]=m,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(p!==g||l!==m||c!==f||u!==_){let h=1-a;const d=l*m+c*f+u*_+p*g,S=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const A=Math.sqrt(y),P=Math.atan2(A,d*S);h=Math.sin(h*P)/A,a=Math.sin(a*P)/A}const E=a*S;if(l=l*h+m*E,c=c*h+f*E,u=u*h+_*E,p=p*h+g*E,h===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=A,c*=A,u*=A,p*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],p=s[o],m=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+u*p+l*f-c*m,t[e+1]=l*_+u*m+c*p-a*f,t[e+2]=c*_+u*f+a*m-l*p,t[e+3]=u*_-a*p-l*m-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),p=a(s/2),m=l(n/2),f=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=m*u*p+c*f*_,this._y=c*f*p-m*u*_,this._z=c*u*_+m*f*p,this._w=c*u*p-m*f*_;break;case"YXZ":this._x=m*u*p+c*f*_,this._y=c*f*p-m*u*_,this._z=c*u*_-m*f*p,this._w=c*u*p+m*f*_;break;case"ZXY":this._x=m*u*p-c*f*_,this._y=c*f*p+m*u*_,this._z=c*u*_+m*f*p,this._w=c*u*p-m*f*_;break;case"ZYX":this._x=m*u*p-c*f*_,this._y=c*f*p+m*u*_,this._z=c*u*_-m*f*p,this._w=c*u*p+m*f*_;break;case"YZX":this._x=m*u*p+c*f*_,this._y=c*f*p+m*u*_,this._z=c*u*_-m*f*p,this._w=c*u*p-m*f*_;break;case"XZY":this._x=m*u*p-c*f*_,this._y=c*f*p-m*u*_,this._z=c*u*_+m*f*p,this._w=c*u*p+m*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],p=e[10],m=n+a+p;if(m>0){const f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>p){const f=2*Math.sqrt(1+n-a-p);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>p){const f=2*Math.sqrt(1+a-n-p);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+p-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),p=Math.sin((1-e)*u)/c,m=Math.sin(e*u)/c;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,n=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),p=2*(s*n-o*e);return this.x=e+l*c+o*p-a*u,this.y=n+l*u+a*c-s*p,this.z=r+l*p+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new X,Tl=new gn;class Wr{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(s,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(t.matrixWorld),this.union(jr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),Zr.subVectors(this.max,gr),Ri.subVectors(t.a,gr),Pi.subVectors(t.b,gr),Li.subVectors(t.c,gr),Fn.subVectors(Pi,Ri),Bn.subVectors(Li,Pi),ni.subVectors(Ri,Li);let e=[0,-Fn.z,Fn.y,0,-Bn.z,Bn.y,0,-ni.z,ni.y,Fn.z,0,-Fn.x,Bn.z,0,-Bn.x,ni.z,0,-ni.x,-Fn.y,Fn.x,0,-Bn.y,Bn.x,0,-ni.y,ni.x,0];return!pa(e,Ri,Pi,Li,Zr)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,Ri,Pi,Li,Zr))?!1:(Kr.crossVectors(Fn,Bn),e=[Kr.x,Kr.y,Kr.z],pa(e,Ri,Pi,Li,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new X,new X,new X,new X,new X,new X,new X,new X],tn=new X,jr=new Wr,Ri=new X,Pi=new X,Li=new X,Fn=new X,Bn=new X,ni=new X,gr=new X,Zr=new X,Kr=new X,ii=new X;function pa(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ii.fromArray(i,s);const a=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xd=new Wr,_r=new X,ma=new X;class Ys{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xd.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_r.subVectors(t,this.center);const e=_r.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(_r,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_r.copy(t.center).add(ma)),this.expandByPoint(_r.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new X,ga=new X,$r=new X,zn=new X,_a=new X,Jr=new X,va=new X;class js{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ga.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(ga);const s=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=zn.dot(this.direction),l=-zn.dot($r),c=zn.lengthSq(),u=Math.abs(1-o*o);let p,m,f,_;if(u>0)if(p=o*l-a,m=o*a-l,_=s*u,p>=0)if(m>=-_)if(m<=_){const g=1/u;p*=g,m*=g,f=p*(p+o*m+2*a)+m*(o*p+m+2*l)+c}else m=s,p=Math.max(0,-(o*m+a)),f=-p*p+m*(m+2*l)+c;else m=-s,p=Math.max(0,-(o*m+a)),f=-p*p+m*(m+2*l)+c;else m<=-_?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-l),s),f=-p*p+m*(m+2*l)+c):m<=_?(p=0,m=Math.min(Math.max(-s,-l),s),f=m*(m+2*l)+c):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-l),s),f=-p*p+m*(m+2*l)+c);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),f=-p*p+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ga).addScaledVector($r,m),f}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),r=Sn.dot(Sn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,r=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,r=(t.min.x-m.x)*c),u>=0?(s=(t.min.y-m.y)*u,o=(t.max.y-m.y)*u):(s=(t.max.y-m.y)*u,o=(t.min.y-m.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(t.min.z-m.z)*p,l=(t.max.z-m.z)*p):(a=(t.max.z-m.z)*p,l=(t.min.z-m.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,r,s){_a.subVectors(e,t),Jr.subVectors(n,t),va.crossVectors(_a,Jr);let o=this.direction.dot(va),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const l=a*this.direction.dot(Jr.crossVectors(zn,Jr));if(l<0)return null;const c=a*this.direction.dot(_a.cross(zn));if(c<0||l+c>o)return null;const u=-a*zn.dot(va);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,r,s,o,a,l,c,u,p,m,f,_,g,h){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,p,m,f,_,g,h)}set(t,e,n,r,s,o,a,l,c,u,p,m,f,_,g,h){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=p,d[14]=m,d[3]=f,d[7]=_,d[11]=g,d[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Di.setFromMatrixColumn(t,0).length(),s=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const m=o*u,f=o*p,_=a*u,g=a*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=f+_*c,e[5]=m-g*c,e[9]=-a*l,e[2]=g-m*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const m=l*u,f=l*p,_=c*u,g=c*p;e[0]=m+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*p,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=g+m*a,e[10]=o*l}else if(t.order==="ZXY"){const m=l*u,f=l*p,_=c*u,g=c*p;e[0]=m-g*a,e[4]=-o*p,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=g-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const m=o*u,f=o*p,_=a*u,g=a*p;e[0]=l*u,e[4]=_*c-f,e[8]=m*c+g,e[1]=l*p,e[5]=g*c+m,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-m*p,e[8]=_*p+f,e[1]=p,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*p+_,e[10]=m-g*p}else if(t.order==="XZY"){const m=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=m*p+g,e[5]=o*u,e[9]=f*p-_,e[2]=_*p-f,e[6]=a*u,e[10]=g*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qd,t,Yd)}lookAt(t,e,n){const r=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),kn.crossVectors(n,Ve),kn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),kn.crossVectors(n,Ve)),kn.normalize(),Qr.crossVectors(Ve,kn),r[0]=kn.x,r[4]=Qr.x,r[8]=Ve.x,r[1]=kn.y,r[5]=Qr.y,r[9]=Ve.y,r[2]=kn.z,r[6]=Qr.z,r[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],p=n[5],m=n[9],f=n[13],_=n[2],g=n[6],h=n[10],d=n[14],S=n[3],y=n[7],E=n[11],A=n[15],P=r[0],T=r[4],k=r[8],W=r[12],w=r[1],L=r[5],C=r[9],V=r[13],v=r[2],O=r[6],K=r[10],Y=r[14],nt=r[3],j=r[7],it=r[11],H=r[15];return s[0]=o*P+a*w+l*v+c*nt,s[4]=o*T+a*L+l*O+c*j,s[8]=o*k+a*C+l*K+c*it,s[12]=o*W+a*V+l*Y+c*H,s[1]=u*P+p*w+m*v+f*nt,s[5]=u*T+p*L+m*O+f*j,s[9]=u*k+p*C+m*K+f*it,s[13]=u*W+p*V+m*Y+f*H,s[2]=_*P+g*w+h*v+d*nt,s[6]=_*T+g*L+h*O+d*j,s[10]=_*k+g*C+h*K+d*it,s[14]=_*W+g*V+h*Y+d*H,s[3]=S*P+y*w+E*v+A*nt,s[7]=S*T+y*L+E*O+A*j,s[11]=S*k+y*C+E*K+A*it,s[15]=S*W+y*V+E*Y+A*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],p=t[6],m=t[10],f=t[14],_=t[3],g=t[7],h=t[11],d=t[15];return _*(+s*l*p-r*c*p-s*a*m+n*c*m+r*a*f-n*l*f)+g*(+e*l*f-e*c*m+s*o*m-r*o*f+r*c*u-s*l*u)+h*(+e*c*p-e*a*f-s*o*p+n*o*f+s*a*u-n*c*u)+d*(-r*a*u-e*l*p+e*a*m+r*o*p-n*o*m+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],p=t[9],m=t[10],f=t[11],_=t[12],g=t[13],h=t[14],d=t[15],S=p*h*c-g*m*c+g*l*f-a*h*f-p*l*d+a*m*d,y=_*m*c-u*h*c-_*l*f+o*h*f+u*l*d-o*m*d,E=u*g*c-_*p*c+_*a*f-o*g*f-u*a*d+o*p*d,A=_*p*l-u*g*l-_*a*m+o*g*m+u*a*h-o*p*h,P=e*S+n*y+r*E+s*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=S*T,t[1]=(g*m*s-p*h*s-g*r*f+n*h*f+p*r*d-n*m*d)*T,t[2]=(a*h*s-g*l*s+g*r*c-n*h*c-a*r*d+n*l*d)*T,t[3]=(p*l*s-a*m*s-p*r*c+n*m*c+a*r*f-n*l*f)*T,t[4]=y*T,t[5]=(u*h*s-_*m*s+_*r*f-e*h*f-u*r*d+e*m*d)*T,t[6]=(_*l*s-o*h*s-_*r*c+e*h*c+o*r*d-e*l*d)*T,t[7]=(o*m*s-u*l*s+u*r*c-e*m*c-o*r*f+e*l*f)*T,t[8]=E*T,t[9]=(_*p*s-u*g*s-_*n*f+e*g*f+u*n*d-e*p*d)*T,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*d+e*a*d)*T,t[11]=(u*a*s-o*p*s-u*n*c+e*p*c+o*n*f-e*a*f)*T,t[12]=A*T,t[13]=(u*g*r-_*p*r+_*n*m-e*g*m-u*n*h+e*p*h)*T,t[14]=(_*a*r-o*g*r-_*n*l+e*g*l+o*n*h-e*a*h)*T,t[15]=(o*p*r-u*a*r+u*n*l-e*p*l-o*n*m+e*a*m)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,p=a+a,m=s*c,f=s*u,_=s*p,g=o*u,h=o*p,d=a*p,S=l*c,y=l*u,E=l*p,A=n.x,P=n.y,T=n.z;return r[0]=(1-(g+d))*A,r[1]=(f+E)*A,r[2]=(_-y)*A,r[3]=0,r[4]=(f-E)*P,r[5]=(1-(m+d))*P,r[6]=(h+S)*P,r[7]=0,r[8]=(_+y)*T,r[9]=(h-S)*T,r[10]=(1-(m+g))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Di.set(r[0],r[1],r[2]).length();const o=Di.set(r[4],r[5],r[6]).length(),a=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],en.copy(this);const c=1/s,u=1/o,p=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=p,en.elements[9]*=p,en.elements[10]*=p,e.setFromRotationMatrix(en),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Rn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),p=(e+t)/(e-t),m=(n+r)/(n-r);let f,_;if(a===Rn)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ns)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Rn){const l=this.elements,c=1/(e-t),u=1/(n-r),p=1/(o-s),m=(e+t)*c,f=(n+r)*u;let _,g;if(a===Rn)_=(o+s)*p,g=-2*p;else if(a===Ns)_=s*p,g=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new X,en=new ie,qd=new X(0,0,0),Yd=new X(1,1,1),kn=new X,Qr=new X,Ve=new X,Al=new ie,Cl=new gn;class hn{constructor(t=0,e=0,n=0,r=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],p=r[2],m=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Mo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jd=0;const Rl=new X,Ii=new gn,Mn=new ie,ts=new X,vr=new X,Zd=new X,Kd=new gn,Pl=new X(1,0,0),Ll=new X(0,1,0),Dl=new X(0,0,1),$d={type:"added"},Jd={type:"removed"};class ce extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new X,e=new hn,n=new gn,r=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new jt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Ll,t)}rotateZ(t){return this.rotateOnAxis(Dl,t)}translateOnAxis(t,e){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Ll,t)}translateZ(t){return this.translateOnAxis(Dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ts.copy(t):ts.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(vr,ts,this.up):Mn.lookAt(ts,vr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent($d)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,Zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),p=o(t.shapes),m=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ce.DEFAULT_UP=new X(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new X,En=new X,xa=new X,bn=new X,Ui=new X,Ni=new X,Il=new X,ya=new X,Sa=new X,Ma=new X;class on{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),nn.subVectors(t,e),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){nn.subVectors(r,e),En.subVectors(n,e),xa.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(En),l=nn.dot(xa),c=En.dot(En),u=En.dot(xa),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const m=1/p,f=(c*l-a*u)*m,_=(o*u-a*l)*m;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static isFrontFacing(t,e,n,r){return nn.subVectors(n,e),En.subVectors(t,e),nn.cross(En).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),nn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return on.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Ui.subVectors(r,n),Ni.subVectors(s,n),ya.subVectors(t,n);const l=Ui.dot(ya),c=Ni.dot(ya);if(l<=0&&c<=0)return e.copy(n);Sa.subVectors(t,r);const u=Ui.dot(Sa),p=Ni.dot(Sa);if(u>=0&&p<=u)return e.copy(r);const m=l*p-u*c;if(m<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ui,o);Ma.subVectors(t,s);const f=Ui.dot(Ma),_=Ni.dot(Ma);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Ni,a);const h=u*_-f*p;if(h<=0&&p-u>=0&&f-_>=0)return Il.subVectors(s,r),a=(p-u)/(p-u+(f-_)),e.copy(r).addScaledVector(Il,a);const d=1/(h+g+m);return o=g*d,a=m*d,e.copy(n).addScaledVector(Ui,o).addScaledVector(Ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},es={h:0,s:0,l:0};function Ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=So(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ea(o,s,t+1/3),this.g=Ea(o,s,t),this.b=Ea(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=fe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){const n=gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}copyLinearToSRGB(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return Qt.fromWorkingColorSpace(be.copy(this),t),Math.round(xe(be.r*255,0,255))*65536+Math.round(xe(be.g*255,0,255))*256+Math.round(xe(be.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,r=be.g,s=be.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=fe){Qt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,r=be.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(es);const n=Pr(Hn.h,es.h,e),r=Pr(Hn.s,es.s,e),s=Pr(Hn.l,es.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Gt;Gt.NAMES=gu;let Qd=0;class Mi extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=rr,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=no,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eo&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hr extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new X,ns=new mt;class ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return fi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ns.fromBufferAttribute(this,e),ns.applyMatrix3(t),this.setXY(e,ns.x,ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oo&&(t.usage=this.usage),t}}class _u extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vu extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let tf=0;const je=new ie,ba=new ce,Oi=new X,We=new Wr,xr=new Wr,ve=new X;class qe extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?vu:_u)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];We.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(We.min,xr.min),We.expandByPoint(ve),ve.addVectors(We.max,xr.max),We.expandByPoint(ve)):(We.expandByPoint(xr.min),We.expandByPoint(xr.max))}We.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ve.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ve));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ve.fromBufferAttribute(a,c),l&&(Oi.fromBufferAttribute(t,c),ve.add(Oi)),r=Math.max(r,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new X,u[w]=new X;const p=new X,m=new X,f=new X,_=new mt,g=new mt,h=new mt,d=new X,S=new X;function y(w,L,C){p.fromArray(r,w*3),m.fromArray(r,L*3),f.fromArray(r,C*3),_.fromArray(o,w*2),g.fromArray(o,L*2),h.fromArray(o,C*2),m.sub(p),f.sub(p),g.sub(_),h.sub(_);const V=1/(g.x*h.y-h.x*g.y);isFinite(V)&&(d.copy(m).multiplyScalar(h.y).addScaledVector(f,-g.y).multiplyScalar(V),S.copy(f).multiplyScalar(g.x).addScaledVector(m,-h.x).multiplyScalar(V),c[w].add(d),c[L].add(d),c[C].add(d),u[w].add(S),u[L].add(S),u[C].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let w=0,L=E.length;w<L;++w){const C=E[w],V=C.start,v=C.count;for(let O=V,K=V+v;O<K;O+=3)y(n[O+0],n[O+1],n[O+2])}const A=new X,P=new X,T=new X,k=new X;function W(w){T.fromArray(s,w*3),k.copy(T);const L=c[w];A.copy(L),A.sub(T.multiplyScalar(T.dot(L))).normalize(),P.crossVectors(k,L);const V=P.dot(u[w])<0?-1:1;l[w*4]=A.x,l[w*4+1]=A.y,l[w*4+2]=A.z,l[w*4+3]=V}for(let w=0,L=E.length;w<L;++w){const C=E[w],V=C.start,v=C.count;for(let O=V,K=V+v;O<K;O+=3)W(n[O+0]),W(n[O+1]),W(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,f=n.count;m<f;m++)n.setXYZ(m,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,p=new X;if(t)for(let m=0,f=t.count;m<f;m+=3){const _=t.getX(m+0),g=t.getX(m+1),h=t.getX(m+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,h),u.subVectors(o,s),p.subVectors(r,s),u.cross(p),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,h),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let m=0,f=e.count;m<f;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),u.subVectors(o,s),p.subVectors(r,s),u.cross(p),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,p=a.normalized,m=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,h=l.length;g<h;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let d=0;d<u;d++)m[_++]=c[f++]}return new ln(m,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,p=c.length;u<p;u++){const m=c[u],f=t(m,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,m=c.length;p<m;p++){const f=c[p];u.push(f.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],p=s[c];for(let m=0,f=p.length;m<f;m++)u.push(p[m].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new ie,ri=new js,is=new Ys,Nl=new X,Fi=new X,Bi=new X,zi=new X,wa=new X,rs=new X,ss=new mt,as=new mt,os=new mt,Ol=new X,Fl=new X,Bl=new X,ls=new X,cs=new X;class le extends ce{constructor(t=new qe,e=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],p=s[l];u!==0&&(wa.fromBufferAttribute(p,t),o?rs.addScaledVector(wa,u):rs.addScaledVector(wa.sub(e),u))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(s),ri.copy(t.ray).recast(t.near),!(is.containsPoint(ri.origin)===!1&&(ri.intersectSphere(is,Nl)===null||ri.origin.distanceToSquared(Nl)>(t.far-t.near)**2))&&(Ul.copy(s).invert(),ri.copy(t.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,m=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=m.length;_<g;_++){const h=m[_],d=o[h.materialIndex],S=Math.max(h.start,f.start),y=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let E=S,A=y;E<A;E+=3){const P=a.getX(E),T=a.getX(E+1),k=a.getX(E+2);r=us(this,d,t,n,c,u,p,P,T,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=h.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let h=_,d=g;h<d;h+=3){const S=a.getX(h),y=a.getX(h+1),E=a.getX(h+2);r=us(this,o,t,n,c,u,p,S,y,E),r&&(r.faceIndex=Math.floor(h/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=m.length;_<g;_++){const h=m[_],d=o[h.materialIndex],S=Math.max(h.start,f.start),y=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let E=S,A=y;E<A;E+=3){const P=E,T=E+1,k=E+2;r=us(this,d,t,n,c,u,p,P,T,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=h.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let h=_,d=g;h<d;h+=3){const S=h,y=h+1,E=h+2;r=us(this,o,t,n,c,u,p,S,y,E),r&&(r.faceIndex=Math.floor(h/3),e.push(r))}}}}function ef(i,t,e,n,r,s,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Qn,a),l===null)return null;cs.copy(a),cs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(cs);return c<e.near||c>e.far?null:{distance:c,point:cs.clone(),object:i}}function us(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Fi),i.getVertexPosition(l,Bi),i.getVertexPosition(c,zi);const u=ef(i,t,e,n,Fi,Bi,zi,ls);if(u){r&&(ss.fromBufferAttribute(r,a),as.fromBufferAttribute(r,l),os.fromBufferAttribute(r,c),u.uv=on.getInterpolation(ls,Fi,Bi,zi,ss,as,os,new mt)),s&&(ss.fromBufferAttribute(s,a),as.fromBufferAttribute(s,l),os.fromBufferAttribute(s,c),u.uv1=on.getInterpolation(ls,Fi,Bi,zi,ss,as,os,new mt),u.uv2=u.uv1),o&&(Ol.fromBufferAttribute(o,a),Fl.fromBufferAttribute(o,l),Bl.fromBufferAttribute(o,c),u.normal=on.getInterpolation(ls,Fi,Bi,zi,Ol,Fl,Bl,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new X,materialIndex:0};on.getNormal(Fi,Bi,zi,p.normal),u.face=p}return u}class Un extends qe{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],p=[];let m=0,f=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(p,2));function _(g,h,d,S,y,E,A,P,T,k,W){const w=E/T,L=A/k,C=E/2,V=A/2,v=P/2,O=T+1,K=k+1;let Y=0,nt=0;const j=new X;for(let it=0;it<K;it++){const H=it*L-V;for(let q=0;q<O;q++){const ht=q*w-C;j[g]=ht*S,j[h]=H*y,j[d]=v,c.push(j.x,j.y,j.z),j[g]=0,j[h]=0,j[d]=P>0?1:-1,u.push(j.x,j.y,j.z),p.push(q/T),p.push(1-it/k),Y+=1}}for(let it=0;it<k;it++)for(let H=0;H<T;H++){const q=m+H+O*it,ht=m+H+O*(it+1),$=m+(H+1)+O*(it+1),tt=m+(H+1)+O*it;l.push(q,ht,tt),l.push(ht,$,tt),nt+=6}a.addGroup(f,nt,W),f+=nt,m+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=ur(i[e]);for(const r in n)t[r]=n[r]}return t}function nf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xu(i){return i.getRenderTarget()===null?i.outputColorSpace:Qt.workingColorSpace}const rf={clone:ur,merge:Re};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class yu extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new X,zl=new mt,kl=new mt;class Ke extends yu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,zl,kl),e.subVectors(kl,zl)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Hi=1;class of extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ke(ki,Hi,t,e);r.layers=this.layers,this.add(r);const s=new Ke(ki,Hi,t,e);s.layers=this.layers,this.add(s);const o=new Ke(ki,Hi,t,e);o.layers=this.layers,this.add(o);const a=new Ke(ki,Hi,t,e);a.layers=this.layers,this.add(a);const l=new Ke(ki,Hi,t,e);l.layers=this.layers,this.add(l);const c=new Ke(ki,Hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,p=t.getRenderTarget(),m=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(p,m,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Su extends Ne{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lf extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(fi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===di?fe:$e),this.texture=new Su(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Un(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Zn});s.uniforms.tEquirect.value=e;const o=new le(r,s),a=e.minFilter;return e.minFilter===ci&&(e.minFilter=Oe),new of(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Ta=new X,cf=new X,uf=new jt;class Wn{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ta.subVectors(n,e).cross(cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uf.getNormalMatrix(t),r=this.coplanarPoint(Ta).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Ys,hs=new X;class Eo{constructor(t=new Wn,e=new Wn,n=new Wn,r=new Wn,s=new Wn,o=new Wn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],p=r[6],m=r[7],f=r[8],_=r[9],g=r[10],h=r[11],d=r[12],S=r[13],y=r[14],E=r[15];if(n[0].setComponents(l-s,m-c,h-f,E-d).normalize(),n[1].setComponents(l+s,m+c,h+f,E+d).normalize(),n[2].setComponents(l+o,m+u,h+_,E+S).normalize(),n[3].setComponents(l-o,m-u,h-_,E-S).normalize(),n[4].setComponents(l-a,m-p,h-g,E-y).normalize(),e===Rn)n[5].setComponents(l+a,m+p,h+g,E+y).normalize();else if(e===Ns)n[5].setComponents(a,p,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(hs.x=r.normal.x>0?t.max.x:t.min.x,hs.y=r.normal.y>0?t.max.y:t.min.y,hs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mu(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function hf(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,u){const p=c.array,m=c.usage,f=p.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,p,m),c.onUploadCallback();let g;if(p instanceof Float32Array)g=i.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)g=i.SHORT;else if(p instanceof Uint32Array)g=i.UNSIGNED_INT;else if(p instanceof Int32Array)g=i.INT;else if(p instanceof Int8Array)g=i.BYTE;else if(p instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,p){const m=u.array,f=u._updateRange,_=u.updateRanges;if(i.bindBuffer(p,c),f.count===-1&&_.length===0&&i.bufferSubData(p,0,m),_.length!==0){for(let g=0,h=_.length;g<h;g++){const d=_[g];e?i.bufferSubData(p,d.start*m.BYTES_PER_ELEMENT,m,d.start,d.count):i.bufferSubData(p,d.start*m.BYTES_PER_ELEMENT,m.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(p,f.offset*m.BYTES_PER_ELEMENT,m,f.offset,f.count):i.bufferSubData(p,f.offset*m.BYTES_PER_ELEMENT,m.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const m=n.get(c);(!m||m.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=n.get(c);if(p===void 0)n.set(c,r(c,u));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,c,u),p.version=c.version}}return{get:o,remove:a,update:l}}class Nn extends qe{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,p=t/a,m=e/l,f=[],_=[],g=[],h=[];for(let d=0;d<u;d++){const S=d*m-o;for(let y=0;y<c;y++){const E=y*p-s;_.push(E,-S,0),g.push(0,0,1),h.push(y/a),h.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){const y=S+c*d,E=S+c*(d+1),A=S+1+c*(d+1),P=S+1+c*d;f.push(y,E,P),f.push(E,A,P)}this.setIndex(f),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.width,t.height,t.widthSegments,t.heightSegments)}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
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
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nf=`#define PI 3.141592653589793
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
} // validated`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ff=`vec3 transformedNormal = objectNormal;
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
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
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
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
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
#endif`,hp=`struct PhysicalMaterial {
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
}`,dp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kp=`float getShadowMask() {
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
}`,$p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,vm=`#if DEPTH_PACKING == 3200
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
	#endif
}`,xm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
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
}`,Rm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define NORMAL
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
}`,Im=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,Om=`#define STANDARD
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
}`,Fm=`#define TOON
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
}`,Bm=`#define TOON
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
}`,zm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,Gm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:vf,aomap_pars_fragment:xf,batching_pars_vertex:yf,batching_vertex:Sf,begin_vertex:Mf,beginnormal_vertex:Ef,bsdfs:bf,iridescence_fragment:wf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Pf,color_fragment:Lf,color_pars_fragment:Df,color_pars_vertex:If,color_vertex:Uf,common:Nf,cube_uv_reflection_fragment:Of,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Bf,displacementmap_vertex:zf,emissivemap_fragment:kf,emissivemap_pars_fragment:Hf,colorspace_fragment:Gf,colorspace_pars_fragment:Vf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:sp,envmap_vertex:jf,fog_vertex:Zf,fog_pars_vertex:Kf,fog_fragment:$f,fog_pars_fragment:Jf,gradientmap_pars_fragment:Qf,lightmap_fragment:tp,lightmap_pars_fragment:ep,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:rp,lights_toon_fragment:ap,lights_toon_pars_fragment:op,lights_phong_fragment:lp,lights_phong_pars_fragment:cp,lights_physical_fragment:up,lights_physical_pars_fragment:hp,lights_fragment_begin:dp,lights_fragment_maps:fp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:vp,map_fragment:xp,map_pars_fragment:yp,map_particle_fragment:Sp,map_particle_pars_fragment:Mp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:bp,morphcolor_vertex:wp,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Cp,normal_fragment_begin:Rp,normal_fragment_maps:Pp,normal_pars_fragment:Lp,normal_pars_vertex:Dp,normal_vertex:Ip,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Bp,opaque_fragment:zp,packing:kp,premultiplied_alpha_fragment:Hp,project_vertex:Gp,dithering_fragment:Vp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:jp,shadowmap_vertex:Zp,shadowmask_pars_fragment:Kp,skinbase_vertex:$p,skinning_pars_vertex:Jp,skinning_vertex:Qp,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:rm,transmission_fragment:sm,transmission_pars_fragment:am,uv_pars_fragment:om,uv_pars_vertex:lm,uv_vertex:cm,worldpos_vertex:um,background_vert:hm,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:_m,depth_frag:vm,distanceRGBA_vert:xm,distanceRGBA_frag:ym,equirect_vert:Sm,equirect_frag:Mm,linedashed_vert:Em,linedashed_frag:bm,meshbasic_vert:wm,meshbasic_frag:Tm,meshlambert_vert:Am,meshlambert_frag:Cm,meshmatcap_vert:Rm,meshmatcap_frag:Pm,meshnormal_vert:Lm,meshnormal_frag:Dm,meshphong_vert:Im,meshphong_frag:Um,meshphysical_vert:Nm,meshphysical_frag:Om,meshtoon_vert:Fm,meshtoon_frag:Bm,points_vert:zm,points_frag:km,shadow_vert:Hm,shadow_frag:Gm,sprite_vert:Vm,sprite_frag:Wm},Mt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},dn={basic:{uniforms:Re([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Re([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Re([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Re([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Re([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Re([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Re([Mt.points,Mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Re([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Re([Mt.common,Mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Re([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Re([Mt.sprite,Mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Re([Mt.common,Mt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Re([Mt.lights,Mt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};dn.physical={uniforms:Re([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const ds={r:0,b:0,g:0};function Xm(i,t,e,n,r,s,o){const a=new Gt(0);let l=s===!0?0:1,c,u,p=null,m=0,f=null;function _(h,d){let S=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?e:t).get(y)),y===null?g(a,l):y&&y.isColor&&(g(y,1),S=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Xs)?(u===void 0&&(u=new le(new Un(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:ur(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ne,(p!==y||m!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,p=y,m=y.version,f=i.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new le(new Nn(2,2),new Dn({name:"BackgroundMaterial",uniforms:ur(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||m!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,p=y,m=y.version,f=i.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null))}function g(h,d){h.getRGB(ds,xu(i)),n.buffers.color.setClear(ds.r,ds.g,ds.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(h,d=1){a.set(h),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,g(a,l)},render:_}}function qm(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=h(null);let c=l,u=!1;function p(v,O,K,Y,nt){let j=!1;if(o){const it=g(Y,K,O);c!==it&&(c=it,f(c.object)),j=d(v,Y,K,nt),j&&S(v,Y,K,nt)}else{const it=O.wireframe===!0;(c.geometry!==Y.id||c.program!==K.id||c.wireframe!==it)&&(c.geometry=Y.id,c.program=K.id,c.wireframe=it,j=!0)}nt!==null&&e.update(nt,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,k(v,O,K,Y),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function m(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(v){return n.isWebGL2?i.bindVertexArray(v):s.bindVertexArrayOES(v)}function _(v){return n.isWebGL2?i.deleteVertexArray(v):s.deleteVertexArrayOES(v)}function g(v,O,K){const Y=K.wireframe===!0;let nt=a[v.id];nt===void 0&&(nt={},a[v.id]=nt);let j=nt[O.id];j===void 0&&(j={},nt[O.id]=j);let it=j[Y];return it===void 0&&(it=h(m()),j[Y]=it),it}function h(v){const O=[],K=[],Y=[];for(let nt=0;nt<r;nt++)O[nt]=0,K[nt]=0,Y[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:K,attributeDivisors:Y,object:v,attributes:{},index:null}}function d(v,O,K,Y){const nt=c.attributes,j=O.attributes;let it=0;const H=K.getAttributes();for(const q in H)if(H[q].location>=0){const $=nt[q];let tt=j[q];if(tt===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(tt=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(tt=v.instanceColor)),$===void 0||$.attribute!==tt||tt&&$.data!==tt.data)return!0;it++}return c.attributesNum!==it||c.index!==Y}function S(v,O,K,Y){const nt={},j=O.attributes;let it=0;const H=K.getAttributes();for(const q in H)if(H[q].location>=0){let $=j[q];$===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&($=v.instanceColor));const tt={};tt.attribute=$,$&&$.data&&(tt.data=$.data),nt[q]=tt,it++}c.attributes=nt,c.attributesNum=it,c.index=Y}function y(){const v=c.newAttributes;for(let O=0,K=v.length;O<K;O++)v[O]=0}function E(v){A(v,0)}function A(v,O){const K=c.newAttributes,Y=c.enabledAttributes,nt=c.attributeDivisors;K[v]=1,Y[v]===0&&(i.enableVertexAttribArray(v),Y[v]=1),nt[v]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](v,O),nt[v]=O)}function P(){const v=c.newAttributes,O=c.enabledAttributes;for(let K=0,Y=O.length;K<Y;K++)O[K]!==v[K]&&(i.disableVertexAttribArray(K),O[K]=0)}function T(v,O,K,Y,nt,j,it){it===!0?i.vertexAttribIPointer(v,O,K,nt,j):i.vertexAttribPointer(v,O,K,Y,nt,j)}function k(v,O,K,Y){if(n.isWebGL2===!1&&(v.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const nt=Y.attributes,j=K.getAttributes(),it=O.defaultAttributeValues;for(const H in j){const q=j[H];if(q.location>=0){let ht=nt[H];if(ht===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),ht!==void 0){const $=ht.normalized,tt=ht.itemSize,yt=e.get(ht);if(yt===void 0)continue;const Et=yt.buffer,xt=yt.type,_t=yt.bytesPerElement,Rt=n.isWebGL2===!0&&(xt===i.INT||xt===i.UNSIGNED_INT||ht.gpuType===eu);if(ht.isInterleavedBufferAttribute){const bt=ht.data,z=bt.stride,pt=ht.offset;if(bt.isInstancedInterleavedBuffer){for(let x=0;x<q.locationSize;x++)A(q.location+x,bt.meshPerAttribute);v.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let x=0;x<q.locationSize;x++)E(q.location+x);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let x=0;x<q.locationSize;x++)T(q.location+x,tt/q.locationSize,xt,$,z*_t,(pt+tt/q.locationSize*x)*_t,Rt)}else{if(ht.isInstancedBufferAttribute){for(let bt=0;bt<q.locationSize;bt++)A(q.location+bt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let bt=0;bt<q.locationSize;bt++)E(q.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let bt=0;bt<q.locationSize;bt++)T(q.location+bt,tt/q.locationSize,xt,$,tt*_t,tt/q.locationSize*bt*_t,Rt)}}else if(it!==void 0){const $=it[H];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(q.location,$);break;case 3:i.vertexAttrib3fv(q.location,$);break;case 4:i.vertexAttrib4fv(q.location,$);break;default:i.vertexAttrib1fv(q.location,$)}}}}P()}function W(){C();for(const v in a){const O=a[v];for(const K in O){const Y=O[K];for(const nt in Y)_(Y[nt].object),delete Y[nt];delete O[K]}delete a[v]}}function w(v){if(a[v.id]===void 0)return;const O=a[v.id];for(const K in O){const Y=O[K];for(const nt in Y)_(Y[nt].object),delete Y[nt];delete O[K]}delete a[v.id]}function L(v){for(const O in a){const K=a[O];if(K[v.id]===void 0)continue;const Y=K[v.id];for(const nt in Y)_(Y[nt].object),delete Y[nt];delete K[v.id]}}function C(){V(),u=!0,c!==l&&(c=l,f(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:C,resetDefaultState:V,dispose:W,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:E,disableUnusedAttributes:P}}function Ym(i,t,e,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,p){i.drawArrays(s,u,p),e.update(p,s,1)}function l(u,p,m){if(m===0)return;let f,_;if(r)f=i,_="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](s,u,p,m),e.update(p,s,m)}function c(u,p,m){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<m;_++)this.render(u[_],p[_]);else{f.multiDrawArraysWEBGL(s,u,0,p,0,m);let _=0;for(let g=0;g<m;g++)_+=p[g];e.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function jm(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,E=o||t.has("OES_texture_float"),A=y&&E,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:h,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:P}}function Zm(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Wn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const f=p.length!==0||m||n!==0||r;return r=m,n=p.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){e=u(p,m,0)},this.setState=function(p,m,f){const _=p.clippingPlanes,g=p.clipIntersection,h=p.clipShadows,d=i.get(p);if(!r||_===null||_.length===0||s&&!h)s?u(null):c();else{const S=s?0:n,y=S*4;let E=d.clippingState||null;l.value=E,E=u(_,m,y,f);for(let A=0;A!==y;++A)E[A]=e[A];d.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,m,f,_){const g=p!==null?p.length:0;let h=null;if(g!==0){if(h=l.value,_!==!0||h===null){const d=f+g*4,S=m.matrixWorldInverse;a.getNormalMatrix(S),(h===null||h.length<d)&&(h=new Float32Array(d));for(let y=0,E=f;y!==g;++y,E+=4)o.copy(p[y]).applyMatrix4(S,a),o.normal.toArray(h,E),h[E+3]=o.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,h}}function Km(i){let t=new WeakMap;function e(o,a){return a===io?o.mapping=or:a===ro&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===io||a===ro)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class bo extends yu{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ji=4,Hl=[.125,.215,.35,.446,.526,.582],li=20,Aa=new bo,Gl=new Gt;let Ca=null,Ra=0,Pa=0;const ai=(1+Math.sqrt(5))/2,Gi=1/ai,Vl=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,ai,Gi),new X(0,ai,-Gi),new X(Gi,0,ai),new X(-Gi,0,ai),new X(ai,Gi,0),new X(-ai,Gi,0)];class Wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ca=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ca,Ra,Pa),t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ca=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Fr,format:sn,colorSpace:Ln,depthBuffer:!1},r=Xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$m(s)),this._blurMaterial=Jm(s,t,e)}return r}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,n,r){const a=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(Gl),u.toneMapping=Kn,u.autoClear=!1;const f=new hr({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),_=new le(new Un,f);let g=!1;const h=t.background;h?h.isColor&&(f.color.copy(h),t.background=null,g=!0):(f.color.copy(Gl),g=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):S===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;fs(r,S*y,d>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=m,u.autoClear=p,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===or||t.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vl[(r-1)%Vl.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new le(this._lodPlanes[r],c),m=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*li-1),g=s/_,h=isFinite(s)?1+Math.floor(u*g):li;h>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${li}`);const d=[];let S=0;for(let T=0;T<li;++T){const k=T/g,W=Math.exp(-k*k/2);d.push(W),T===0?S+=W:T<h&&(S+=2*W)}for(let T=0;T<d.length;T++)d[T]=d[T]/S;m.envMap.value=t.texture,m.samples.value=h,m.weights.value=d,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:y}=this;m.dTheta.value=_,m.mipInt.value=y-n;const E=this._sizeLods[r],A=3*E*(r>y-Ji?r-y+Ji:0),P=4*(this._cubeSize-E);fs(e,A,P,3*E,2*E),l.setRenderTarget(e),l.render(p,Aa)}}function $m(i){const t=[],e=[],n=[];let r=i;const s=i-Ji+1+Hl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Ji?l=Hl[o-i+Ji-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,p=1+c,m=[u,u,p,u,p,p,u,u,p,p,u,p],f=6,_=6,g=3,h=2,d=1,S=new Float32Array(g*_*f),y=new Float32Array(h*_*f),E=new Float32Array(d*_*f);for(let P=0;P<f;P++){const T=P%3*2/3-1,k=P>2?0:-1,W=[T,k,0,T+2/3,k,0,T+2/3,k+1,0,T,k,0,T+2/3,k+1,0,T,k+1,0];S.set(W,g*_*P),y.set(m,h*_*P);const w=[P,P,P,P,P,P];E.set(w,d*_*P)}const A=new qe;A.setAttribute("position",new ln(S,g)),A.setAttribute("uv",new ln(y,h)),A.setAttribute("faceIndex",new ln(E,d)),t.push(A),r>Ji&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xl(i,t,e){const n=new xi(i,t,e);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Jm(i,t,e){const n=new Float32Array(li),r=new X(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ql(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Yl(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function wo(){return`

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
	`}function Qm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===io||l===ro,u=l===or||l===lr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=t.get(a);return e===null&&(e=new Wl(i)),p=c?e.fromEquirectangular(a,p):e.fromCubemap(a,p),t.set(a,p),p.texture}else{if(t.has(a))return t.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||u&&p&&r(p)){e===null&&(e=new Wl(i));const m=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,m),a.addEventListener("dispose",s),m.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function tg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function eg(i,t,e,n){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&t.remove(m.index);for(const _ in m.attributes)t.remove(m.attributes[_]);for(const _ in m.morphAttributes){const g=m.morphAttributes[_];for(let h=0,d=g.length;h<d;h++)t.remove(g[h])}m.removeEventListener("dispose",o),delete r[m.id];const f=s.get(m);f&&(t.remove(f),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function l(p){const m=p.attributes;for(const _ in m)t.update(m[_],i.ARRAY_BUFFER);const f=p.morphAttributes;for(const _ in f){const g=f[_];for(let h=0,d=g.length;h<d;h++)t.update(g[h],i.ARRAY_BUFFER)}}function c(p){const m=[],f=p.index,_=p.attributes.position;let g=0;if(f!==null){const S=f.array;g=f.version;for(let y=0,E=S.length;y<E;y+=3){const A=S[y+0],P=S[y+1],T=S[y+2];m.push(A,P,P,T,T,A)}}else if(_!==void 0){const S=_.array;g=_.version;for(let y=0,E=S.length/3-1;y<E;y+=3){const A=y+0,P=y+1,T=y+2;m.push(A,P,P,T,T,A)}}else return;const h=new(du(m)?vu:_u)(m,1);h.version=g;const d=s.get(p);d&&t.remove(d),s.set(p,h)}function u(p){const m=s.get(p);if(m){const f=p.index;f!==null&&m.version<f.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function ng(i,t,e,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,_){i.drawElements(s,_,a,f*l),e.update(_,s,1)}function p(f,_,g){if(g===0)return;let h,d;if(r)h=i,d="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,_,a,f*l,g),e.update(_,s,g)}function m(f,_,g){if(g===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<g;d++)this.render(f[d]/l,_[d]);else{h.multiDrawElementsWEBGL(s,_,0,a,f,0,g);let d=0;for(let S=0;S<g;S++)d+=_[S];e.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=p,this.renderMultiDraw=m}function ig(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function rg(i,t){return i[0]-t[0]}function sg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function ag(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,o=new pe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,p){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let h=s.get(u);if(h===void 0||h.count!==g){let O=function(){V.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var f=O;h!==void 0&&h.texture.dispose();const y=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],k=u.morphAttributes.color||[];let W=0;y===!0&&(W=1),E===!0&&(W=2),A===!0&&(W=3);let w=u.attributes.position.count*W,L=1;w>t.maxTextureSize&&(L=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const C=new Float32Array(w*L*4*g),V=new mu(C,w,L,g);V.type=An,V.needsUpdate=!0;const v=W*4;for(let K=0;K<g;K++){const Y=P[K],nt=T[K],j=k[K],it=w*L*4*K;for(let H=0;H<Y.count;H++){const q=H*v;y===!0&&(o.fromBufferAttribute(Y,H),C[it+q+0]=o.x,C[it+q+1]=o.y,C[it+q+2]=o.z,C[it+q+3]=0),E===!0&&(o.fromBufferAttribute(nt,H),C[it+q+4]=o.x,C[it+q+5]=o.y,C[it+q+6]=o.z,C[it+q+7]=0),A===!0&&(o.fromBufferAttribute(j,H),C[it+q+8]=o.x,C[it+q+9]=o.y,C[it+q+10]=o.z,C[it+q+11]=j.itemSize===4?o.w:1)}}h={count:g,texture:V,size:new mt(w,L)},s.set(u,h),u.addEventListener("dispose",O)}let d=0;for(let y=0;y<m.length;y++)d+=m[y];const S=u.morphTargetsRelative?1:1-d;p.getUniforms().setValue(i,"morphTargetBaseInfluence",S),p.getUniforms().setValue(i,"morphTargetInfluences",m),p.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),p.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}else{const _=m===void 0?0:m.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let E=0;E<_;E++)g[E]=[E,0];n[u.id]=g}for(let E=0;E<_;E++){const A=g[E];A[0]=E,A[1]=m[E]}g.sort(sg);for(let E=0;E<8;E++)E<_&&g[E][1]?(a[E][0]=g[E][0],a[E][1]=g[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(rg);const h=u.morphAttributes.position,d=u.morphAttributes.normal;let S=0;for(let E=0;E<8;E++){const A=a[E],P=A[0],T=A[1];P!==Number.MAX_SAFE_INTEGER&&T?(h&&u.getAttribute("morphTarget"+E)!==h[P]&&u.setAttribute("morphTarget"+E,h[P]),d&&u.getAttribute("morphNormal"+E)!==d[P]&&u.setAttribute("morphNormal"+E,d[P]),r[E]=T,S+=T):(h&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),d&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const y=u.morphTargetsRelative?1:1-S;p.getUniforms().setValue(i,"morphTargetBaseInfluence",y),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function og(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,p=t.get(l,u);if(r.get(p)!==c&&(t.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Eu extends Ne{constructor(t,e,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:hi,u!==hi&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hi&&(n=qn),n===void 0&&u===cr&&(n=ui),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bu=new Ne,wu=new Eu(1,1);wu.compareFunction=uu;const Tu=new mu,Au=new Wd,Cu=new Su,jl=[],Zl=[],Kl=new Float32Array(16),$l=new Float32Array(9),Jl=new Float32Array(4);function dr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=jl[r];if(s===void 0&&(s=new Float32Array(r),jl[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zs(i,t){let e=Zl[t];e===void 0&&(e=new Int32Array(t),Zl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Jl.set(n),i.uniformMatrix2fv(this.addr,!1,Jl),ge(e,n)}}function fg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;$l.set(n),i.uniformMatrix3fv(this.addr,!1,$l),ge(e,n)}}function pg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Kl.set(n),i.uniformMatrix4fv(this.addr,!1,Kl),ge(e,n)}}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Eg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?wu:bu;e.setTexture2D(t||s,r)}function bg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Au,r)}function wg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Cu,r)}function Tg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Tu,r)}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return ug;case 35666:return hg;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return vg;case 5125:return xg;case 36294:return yg;case 36295:return Sg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}function Cg(i,t){i.uniform1fv(this.addr,t)}function Rg(i,t){const e=dr(t,this.size,2);i.uniform2fv(this.addr,e)}function Pg(i,t){const e=dr(t,this.size,3);i.uniform3fv(this.addr,e)}function Lg(i,t){const e=dr(t,this.size,4);i.uniform4fv(this.addr,e)}function Dg(i,t){const e=dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ig(i,t){const e=dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ug(i,t){const e=dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ng(i,t){i.uniform1iv(this.addr,t)}function Og(i,t){i.uniform2iv(this.addr,t)}function Fg(i,t){i.uniform3iv(this.addr,t)}function Bg(i,t){i.uniform4iv(this.addr,t)}function zg(i,t){i.uniform1uiv(this.addr,t)}function kg(i,t){i.uniform2uiv(this.addr,t)}function Hg(i,t){i.uniform3uiv(this.addr,t)}function Gg(i,t){i.uniform4uiv(this.addr,t)}function Vg(i,t,e){const n=this.cache,r=t.length,s=Zs(e,r);me(n,s)||(i.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||bu,s[o])}function Wg(i,t,e){const n=this.cache,r=t.length,s=Zs(e,r);me(n,s)||(i.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Au,s[o])}function Xg(i,t,e){const n=this.cache,r=t.length,s=Zs(e,r);me(n,s)||(i.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Cu,s[o])}function qg(i,t,e){const n=this.cache,r=t.length,s=Zs(e,r);me(n,s)||(i.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Tu,s[o])}function Yg(i){switch(i){case 5126:return Cg;case 35664:return Rg;case 35665:return Pg;case 35666:return Lg;case 35674:return Dg;case 35675:return Ig;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Og;case 35668:case 35672:return Fg;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Hg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}class jg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}}class Zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yg(e.type)}}class Kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function Ql(i,t){i.seq.push(t),i.map[t.id]=t}function $g(i,t,e){const n=i.name,r=n.length;for(La.lastIndex=0;;){const s=La.exec(n),o=La.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ql(e,c===void 0?new jg(a,i,t):new Zg(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Kg(a),Ql(e,p)),e=p}}}class Cs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);$g(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function tc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Jg=37297;let Qg=0;function t_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function e_(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===Us&&e===Is?n="LinearDisplayP3ToLinearSRGB":t===Is&&e===Us&&(n="LinearSRGBToLinearDisplayP3"),i){case Ln:case qs:return[n,"LinearTransferOETF"];case fe:case yo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ec(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+t_(i.getShaderSource(t),o)}else return r}function n_(i,t){const e=e_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function i_(i,t){let e;switch(t){case ed:e="Linear";break;case nd:e="Reinhard";break;case id:e="OptimizedCineon";break;case rd:e="ACESFilmic";break;case ad:e="AgX";break;case sd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function r_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qi).join(`
`)}function s_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function a_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qi(i){return i!==""}function nc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ic(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(i){return i.replace(l_,u_)}const c_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function u_(i,t){let e=Xt[t];if(e===void 0){const n=c_.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uo(e)}const h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(i){return i.replace(h_,d_)}function d_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function f_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function p_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case lr:t="ENVMAP_TYPE_CUBE";break;case Xs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case lr:t="ENVMAP_MODE_REFRACTION";break}return t}function g_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qc:t="ENVMAP_BLENDING_MULTIPLY";break;case Qh:t="ENVMAP_BLENDING_MIX";break;case td:t="ENVMAP_BLENDING_ADD";break}return t}function __(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function v_(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=f_(e),c=p_(e),u=m_(e),p=g_(e),m=__(e),f=e.isWebGL2?"":r_(e),_=s_(e),g=a_(s),h=r.createProgram();let d,S,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),d.length>0&&(d+=`
`),S=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),S.length>0&&(S+=`
`)):(d=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),S=[f,sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?i_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,n_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),o=uo(o),o=nc(o,e),o=ic(o,e),a=uo(a),a=nc(a,e),a=ic(a,e),o=rc(o),a=rc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=y+d+o,A=y+S+a,P=tc(r,r.VERTEX_SHADER,E),T=tc(r,r.FRAGMENT_SHADER,A);r.attachShader(h,P),r.attachShader(h,T),e.index0AttributeName!==void 0?r.bindAttribLocation(h,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h);function k(C){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(h).trim(),v=r.getShaderInfoLog(P).trim(),O=r.getShaderInfoLog(T).trim();let K=!0,Y=!0;if(r.getProgramParameter(h,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,h,P,T);else{const nt=ec(r,P,"vertex"),j=ec(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+nt+`
`+j)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(v===""||O==="")&&(Y=!1);Y&&(C.diagnostics={runnable:K,programLog:V,vertexShader:{log:v,prefix:d},fragmentShader:{log:O,prefix:S}})}r.deleteShader(P),r.deleteShader(T),W=new Cs(r,h),w=o_(r,h)}let W;this.getUniforms=function(){return W===void 0&&k(this),W};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(h,Jg)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=P,this.fragmentShader=T,this}let x_=0;class y_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new S_(t),e.set(t,n)),n}}class S_{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}}function M_(i,t,e,n,r,s,o){const a=new Mo,l=new y_,c=new Set,u=[],p=r.isWebGL2,m=r.logarithmicDepthBuffer,f=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(w){return c.add(w),w===0?"uv":`uv${w}`}function d(w,L,C,V,v){const O=V.fog,K=v.geometry,Y=w.isMeshStandardMaterial?V.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),j=nt&&nt.mapping===Xs?nt.image.height:null,it=g[w.type];w.precision!==null&&(_=r.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const H=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,q=H!==void 0?H.length:0;let ht=0;K.morphAttributes.position!==void 0&&(ht=1),K.morphAttributes.normal!==void 0&&(ht=2),K.morphAttributes.color!==void 0&&(ht=3);let $,tt,yt,Et;if(it){const Zt=dn[it];$=Zt.vertexShader,tt=Zt.fragmentShader}else $=w.vertexShader,tt=w.fragmentShader,l.update(w),yt=l.getVertexShaderID(w),Et=l.getFragmentShaderID(w);const xt=i.getRenderTarget(),_t=v.isInstancedMesh===!0,Rt=v.isBatchedMesh===!0,bt=!!w.map,z=!!w.matcap,pt=!!nt,x=!!w.aoMap,Z=!!w.lightMap,B=!!w.bumpMap,D=!!w.normalMap,R=!!w.displacementMap,M=!!w.emissiveMap,b=!!w.metalnessMap,U=!!w.roughnessMap,F=w.anisotropy>0,J=w.clearcoat>0,et=w.iridescence>0,st=w.sheen>0,ct=w.transmission>0,gt=F&&!!w.anisotropyMap,St=J&&!!w.clearcoatMap,Dt=J&&!!w.clearcoatNormalMap,ut=J&&!!w.clearcoatRoughnessMap,zt=et&&!!w.iridescenceMap,kt=et&&!!w.iridescenceThicknessMap,At=st&&!!w.sheenColorMap,Pt=st&&!!w.sheenRoughnessMap,Tt=!!w.specularMap,Ot=!!w.specularColorMap,G=!!w.specularIntensityMap,vt=ct&&!!w.transmissionMap,wt=ct&&!!w.thicknessMap,It=!!w.gradientMap,N=!!w.alphaMap,ft=w.alphaTest>0,dt=!!w.alphaHash,Lt=!!w.extensions;let Nt=Kn;w.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Nt=i.toneMapping);const Kt={isWebGL2:p,shaderID:it,shaderType:w.type,shaderName:w.name,vertexShader:$,fragmentShader:tt,defines:w.defines,customVertexShaderID:yt,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:Rt,instancing:_t,instancingColor:_t&&v.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Ln,alphaToCoverage:!!w.alphaToCoverage,map:bt,matcap:z,envMap:pt,envMapMode:pt&&nt.mapping,envMapCubeUVHeight:j,aoMap:x,lightMap:Z,bumpMap:B,normalMap:D,displacementMap:f&&R,emissiveMap:M,normalMapObjectSpace:D&&w.normalMapType===_d,normalMapTangentSpace:D&&w.normalMapType===cu,metalnessMap:b,roughnessMap:U,anisotropy:F,anisotropyMap:gt,clearcoat:J,clearcoatMap:St,clearcoatNormalMap:Dt,clearcoatRoughnessMap:ut,iridescence:et,iridescenceMap:zt,iridescenceThicknessMap:kt,sheen:st,sheenColorMap:At,sheenRoughnessMap:Pt,specularMap:Tt,specularColorMap:Ot,specularIntensityMap:G,transmission:ct,transmissionMap:vt,thicknessMap:wt,gradientMap:It,opaque:w.transparent===!1&&w.blending===rr&&w.alphaToCoverage===!1,alphaMap:N,alphaTest:ft,alphaHash:dt,combine:w.combine,mapUv:bt&&h(w.map.channel),aoMapUv:x&&h(w.aoMap.channel),lightMapUv:Z&&h(w.lightMap.channel),bumpMapUv:B&&h(w.bumpMap.channel),normalMapUv:D&&h(w.normalMap.channel),displacementMapUv:R&&h(w.displacementMap.channel),emissiveMapUv:M&&h(w.emissiveMap.channel),metalnessMapUv:b&&h(w.metalnessMap.channel),roughnessMapUv:U&&h(w.roughnessMap.channel),anisotropyMapUv:gt&&h(w.anisotropyMap.channel),clearcoatMapUv:St&&h(w.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&h(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&h(w.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&h(w.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&h(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&h(w.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&h(w.sheenRoughnessMap.channel),specularMapUv:Tt&&h(w.specularMap.channel),specularColorMapUv:Ot&&h(w.specularColorMap.channel),specularIntensityMapUv:G&&h(w.specularIntensityMap.channel),transmissionMapUv:vt&&h(w.transmissionMap.channel),thicknessMapUv:wt&&h(w.thicknessMap.channel),alphaMapUv:N&&h(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(D||F),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!K.attributes.uv&&(bt||N),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:v.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ht,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&w.map.isVideoTexture===!0&&Qt.getTransfer(w.map.colorSpace)===ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Tn,flipSided:w.side===ze,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Lt&&w.extensions.derivatives===!0,extensionFragDepth:Lt&&w.extensions.fragDepth===!0,extensionDrawBuffers:Lt&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Lt&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Lt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Lt&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function S(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)L.push(C),L.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(y(L,w),E(L,w),L.push(i.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function y(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function E(w,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.matcap&&a.enable(4),L.envMap&&a.enable(5),L.normalMapObjectSpace&&a.enable(6),L.normalMapTangentSpace&&a.enable(7),L.clearcoat&&a.enable(8),L.iridescence&&a.enable(9),L.alphaTest&&a.enable(10),L.vertexColors&&a.enable(11),L.vertexAlphas&&a.enable(12),L.vertexUv1s&&a.enable(13),L.vertexUv2s&&a.enable(14),L.vertexUv3s&&a.enable(15),L.vertexTangents&&a.enable(16),L.anisotropy&&a.enable(17),L.alphaHash&&a.enable(18),L.batching&&a.enable(19),w.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.useLegacyLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.alphaToCoverage&&a.enable(20),w.push(a.mask)}function A(w){const L=g[w.type];let C;if(L){const V=dn[L];C=rf.clone(V.uniforms)}else C=w.uniforms;return C}function P(w,L){let C;for(let V=0,v=u.length;V<v;V++){const O=u[V];if(O.cacheKey===L){C=O,++C.usedTimes;break}}return C===void 0&&(C=new v_(i,L,w,s),u.push(C)),C}function T(w){if(--w.usedTimes===0){const L=u.indexOf(w);u[L]=u[u.length-1],u.pop(),w.destroy()}}function k(w){l.remove(w)}function W(){l.dispose()}return{getParameters:d,getProgramCacheKey:S,getUniforms:A,acquireProgram:P,releaseProgram:T,releaseShaderCache:k,programs:u,dispose:W}}function E_(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function b_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(p,m,f,_,g,h){let d=i[t];return d===void 0?(d={id:p.id,object:p,geometry:m,material:f,groupOrder:_,renderOrder:p.renderOrder,z:g,group:h},i[t]=d):(d.id=p.id,d.object=p,d.geometry=m,d.material=f,d.groupOrder=_,d.renderOrder=p.renderOrder,d.z=g,d.group=h),t++,d}function a(p,m,f,_,g,h){const d=o(p,m,f,_,g,h);f.transmission>0?n.push(d):f.transparent===!0?r.push(d):e.push(d)}function l(p,m,f,_,g,h){const d=o(p,m,f,_,g,h);f.transmission>0?n.unshift(d):f.transparent===!0?r.unshift(d):e.unshift(d)}function c(p,m){e.length>1&&e.sort(p||b_),n.length>1&&n.sort(m||ac),r.length>1&&r.sort(m||ac)}function u(){for(let p=t,m=i.length;p<m;p++){const f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function w_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new oc,i.set(n,[o])):r>=s.length?(o=new oc,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function T_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Gt};break;case"SpotLight":e={position:new X,direction:new X,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function A_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let C_=0;function R_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function P_(i,t){const e=new T_,n=A_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new X);const s=new X,o=new ie,a=new ie;function l(u,p){let m=0,f=0,_=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let g=0,h=0,d=0,S=0,y=0,E=0,A=0,P=0,T=0,k=0,W=0;u.sort(R_);const w=p===!0?Math.PI:1;for(let C=0,V=u.length;C<V;C++){const v=u[C],O=v.color,K=v.intensity,Y=v.distance,nt=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)m+=O.r*K*w,f+=O.g*K*w,_+=O.b*K*w;else if(v.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(v.sh.coefficients[j],K);W++}else if(v.isDirectionalLight){const j=e.get(v);if(j.color.copy(v.color).multiplyScalar(v.intensity*w),v.castShadow){const it=v.shadow,H=n.get(v);H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,r.directionalShadow[g]=H,r.directionalShadowMap[g]=nt,r.directionalShadowMatrix[g]=v.shadow.matrix,E++}r.directional[g]=j,g++}else if(v.isSpotLight){const j=e.get(v);j.position.setFromMatrixPosition(v.matrixWorld),j.color.copy(O).multiplyScalar(K*w),j.distance=Y,j.coneCos=Math.cos(v.angle),j.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),j.decay=v.decay,r.spot[d]=j;const it=v.shadow;if(v.map&&(r.spotLightMap[T]=v.map,T++,it.updateMatrices(v),v.castShadow&&k++),r.spotLightMatrix[d]=it.matrix,v.castShadow){const H=n.get(v);H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,r.spotShadow[d]=H,r.spotShadowMap[d]=nt,P++}d++}else if(v.isRectAreaLight){const j=e.get(v);j.color.copy(O).multiplyScalar(K),j.halfWidth.set(v.width*.5,0,0),j.halfHeight.set(0,v.height*.5,0),r.rectArea[S]=j,S++}else if(v.isPointLight){const j=e.get(v);if(j.color.copy(v.color).multiplyScalar(v.intensity*w),j.distance=v.distance,j.decay=v.decay,v.castShadow){const it=v.shadow,H=n.get(v);H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,H.shadowCameraNear=it.camera.near,H.shadowCameraFar=it.camera.far,r.pointShadow[h]=H,r.pointShadowMap[h]=nt,r.pointShadowMatrix[h]=v.shadow.matrix,A++}r.point[h]=j,h++}else if(v.isHemisphereLight){const j=e.get(v);j.skyColor.copy(v.color).multiplyScalar(K*w),j.groundColor.copy(v.groundColor).multiplyScalar(K*w),r.hemi[y]=j,y++}}S>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_FLOAT_1,r.rectAreaLTC2=Mt.LTC_FLOAT_2):(r.rectAreaLTC1=Mt.LTC_HALF_1,r.rectAreaLTC2=Mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_FLOAT_1,r.rectAreaLTC2=Mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_HALF_1,r.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=f,r.ambient[2]=_;const L=r.hash;(L.directionalLength!==g||L.pointLength!==h||L.spotLength!==d||L.rectAreaLength!==S||L.hemiLength!==y||L.numDirectionalShadows!==E||L.numPointShadows!==A||L.numSpotShadows!==P||L.numSpotMaps!==T||L.numLightProbes!==W)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=S,r.point.length=h,r.hemi.length=y,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=P+T-k,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=W,L.directionalLength=g,L.pointLength=h,L.spotLength=d,L.rectAreaLength=S,L.hemiLength=y,L.numDirectionalShadows=E,L.numPointShadows=A,L.numSpotShadows=P,L.numSpotMaps=T,L.numLightProbes=W,r.version=C_++)}function c(u,p){let m=0,f=0,_=0,g=0,h=0;const d=p.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const E=u[S];if(E.isDirectionalLight){const A=r.directional[m];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),m++}else if(E.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const A=r.rectArea[g];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const A=r.point[f];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),f++}else if(E.isHemisphereLight){const A=r.hemi[h];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(d),h++}}}return{setup:l,setupView:c,state:r}}function lc(i,t){const e=new P_(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(p){n.push(p)}function a(p){r.push(p)}function l(p){e.setup(n,p)}function c(p){e.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function L_(i,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new lc(i,t),e.set(s,[l])):o>=a.length?(l=new lc(i,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class D_ extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class I_ extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
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
}`;function O_(i,t,e){let n=new Eo;const r=new mt,s=new mt,o=new pe,a=new D_({depthPacking:gd}),l=new I_,c={},u=e.maxTextureSize,p={[Qn]:ze,[ze]:Qn,[Tn]:Tn},m=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:U_,fragmentShader:N_}),f=m.clone();f.defines.HORIZONTAL_PASS=1;const _=new qe;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new le(_,m),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let d=this.type;this.render=function(P,T,k){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||P.length===0)return;const W=i.getRenderTarget(),w=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Zn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const V=d!==wn&&this.type===wn,v=d===wn&&this.type!==wn;for(let O=0,K=P.length;O<K;O++){const Y=P[O],nt=Y.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;r.copy(nt.mapSize);const j=nt.getFrameExtents();if(r.multiply(j),s.copy(nt.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,nt.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,nt.mapSize.y=s.y)),nt.map===null||V===!0||v===!0){const H=this.type!==wn?{minFilter:De,magFilter:De}:{};nt.map!==null&&nt.map.dispose(),nt.map=new xi(r.x,r.y,H),nt.map.texture.name=Y.name+".shadowMap",nt.camera.updateProjectionMatrix()}i.setRenderTarget(nt.map),i.clear();const it=nt.getViewportCount();for(let H=0;H<it;H++){const q=nt.getViewport(H);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),C.viewport(o),nt.updateMatrices(Y,H),n=nt.getFrustum(),E(T,k,nt.camera,Y,this.type)}nt.isPointLightShadow!==!0&&this.type===wn&&S(nt,k),nt.needsUpdate=!1}d=this.type,h.needsUpdate=!1,i.setRenderTarget(W,w,L)};function S(P,T){const k=t.update(g);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new xi(r.x,r.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,k,m,g,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,k,f,g,null)}function y(P,T,k,W){let w=null;const L=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)w=L;else if(w=k.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const C=w.uuid,V=T.uuid;let v=c[C];v===void 0&&(v={},c[C]=v);let O=v[V];O===void 0&&(O=w.clone(),v[V]=O,T.addEventListener("dispose",A)),w=O}if(w.visible=T.visible,w.wireframe=T.wireframe,W===wn?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:p[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const C=i.properties.get(w);C.light=k}return w}function E(P,T,k,W,w){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===wn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const V=t.update(P),v=P.material;if(Array.isArray(v)){const O=V.groups;for(let K=0,Y=O.length;K<Y;K++){const nt=O[K],j=v[nt.materialIndex];if(j&&j.visible){const it=y(P,j,W,w);P.onBeforeShadow(i,P,T,k,V,it,nt),i.renderBufferDirect(k,null,V,it,P,nt),P.onAfterShadow(i,P,T,k,V,it,nt)}}}else if(v.visible){const O=y(P,v,W,w);P.onBeforeShadow(i,P,T,k,V,O,null),i.renderBufferDirect(k,null,V,O,P,null),P.onAfterShadow(i,P,T,k,V,O,null)}}const C=P.children;for(let V=0,v=C.length;V<v;V++)E(C[V],T,k,W,w)}function A(P){P.target.removeEventListener("dispose",A);for(const k in c){const W=c[k],w=P.target.uuid;w in W&&(W[w].dispose(),delete W[w])}}}function F_(i,t,e){const n=e.isWebGL2;function r(){let N=!1;const ft=new pe;let dt=null;const Lt=new pe(0,0,0,0);return{setMask:function(Nt){dt!==Nt&&!N&&(i.colorMask(Nt,Nt,Nt,Nt),dt=Nt)},setLocked:function(Nt){N=Nt},setClear:function(Nt,Kt,Zt,te,ye){ye===!0&&(Nt*=te,Kt*=te,Zt*=te),ft.set(Nt,Kt,Zt,te),Lt.equals(ft)===!1&&(i.clearColor(Nt,Kt,Zt,te),Lt.copy(ft))},reset:function(){N=!1,dt=null,Lt.set(-1,0,0,0)}}}function s(){let N=!1,ft=null,dt=null,Lt=null;return{setTest:function(Nt){Nt?_t(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(Nt){ft!==Nt&&!N&&(i.depthMask(Nt),ft=Nt)},setFunc:function(Nt){if(dt!==Nt){switch(Nt){case qh:i.depthFunc(i.NEVER);break;case Yh:i.depthFunc(i.ALWAYS);break;case jh:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Zh:i.depthFunc(i.EQUAL);break;case Kh:i.depthFunc(i.GEQUAL);break;case $h:i.depthFunc(i.GREATER);break;case Jh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=Nt}},setLocked:function(Nt){N=Nt},setClear:function(Nt){Lt!==Nt&&(i.clearDepth(Nt),Lt=Nt)},reset:function(){N=!1,ft=null,dt=null,Lt=null}}}function o(){let N=!1,ft=null,dt=null,Lt=null,Nt=null,Kt=null,Zt=null,te=null,ye=null;return{setTest:function($t){N||($t?_t(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function($t){ft!==$t&&!N&&(i.stencilMask($t),ft=$t)},setFunc:function($t,ue,Ae){(dt!==$t||Lt!==ue||Nt!==Ae)&&(i.stencilFunc($t,ue,Ae),dt=$t,Lt=ue,Nt=Ae)},setOp:function($t,ue,Ae){(Kt!==$t||Zt!==ue||te!==Ae)&&(i.stencilOp($t,ue,Ae),Kt=$t,Zt=ue,te=Ae)},setLocked:function($t){N=$t},setClear:function($t){ye!==$t&&(i.clearStencil($t),ye=$t)},reset:function(){N=!1,ft=null,dt=null,Lt=null,Nt=null,Kt=null,Zt=null,te=null,ye=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,p=new WeakMap;let m={},f={},_=new WeakMap,g=[],h=null,d=!1,S=null,y=null,E=null,A=null,P=null,T=null,k=null,W=new Gt(0,0,0),w=0,L=!1,C=null,V=null,v=null,O=null,K=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,j=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(it)[1]),nt=j>=1):it.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),nt=j>=2);let H=null,q={};const ht=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),tt=new pe().fromArray(ht),yt=new pe().fromArray($);function Et(N,ft,dt,Lt){const Nt=new Uint8Array(4),Kt=i.createTexture();i.bindTexture(N,Kt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<dt;Zt++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(ft,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(ft+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return Kt}const xt={};xt[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xt[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_t(i.DEPTH_TEST),l.setFunc(Ls),R(!1),M(Go),_t(i.CULL_FACE),B(Zn);function _t(N){m[N]!==!0&&(i.enable(N),m[N]=!0)}function Rt(N){m[N]!==!1&&(i.disable(N),m[N]=!1)}function bt(N,ft){return f[N]!==ft?(i.bindFramebuffer(N,ft),f[N]=ft,n&&(N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ft),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ft)),!0):!1}function z(N,ft){let dt=g,Lt=!1;if(N)if(dt=_.get(ft),dt===void 0&&(dt=[],_.set(ft,dt)),N.isWebGLMultipleRenderTargets){const Nt=N.texture;if(dt.length!==Nt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let Kt=0,Zt=Nt.length;Kt<Zt;Kt++)dt[Kt]=i.COLOR_ATTACHMENT0+Kt;dt.length=Nt.length,Lt=!0}}else dt[0]!==i.COLOR_ATTACHMENT0&&(dt[0]=i.COLOR_ATTACHMENT0,Lt=!0);else dt[0]!==i.BACK&&(dt[0]=i.BACK,Lt=!0);Lt&&(e.isWebGL2?i.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function pt(N){return h!==N?(i.useProgram(N),h=N,!0):!1}const x={[oi]:i.FUNC_ADD,[Lh]:i.FUNC_SUBTRACT,[Dh]:i.FUNC_REVERSE_SUBTRACT};if(n)x[qo]=i.MIN,x[Yo]=i.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(x[qo]=N.MIN_EXT,x[Yo]=N.MAX_EXT)}const Z={[Ih]:i.ZERO,[Uh]:i.ONE,[Nh]:i.SRC_COLOR,[eo]:i.SRC_ALPHA,[Hh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Fh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[kh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Gh]:i.CONSTANT_COLOR,[Vh]:i.ONE_MINUS_CONSTANT_COLOR,[Wh]:i.CONSTANT_ALPHA,[Xh]:i.ONE_MINUS_CONSTANT_ALPHA};function B(N,ft,dt,Lt,Nt,Kt,Zt,te,ye,$t){if(N===Zn){d===!0&&(Rt(i.BLEND),d=!1);return}if(d===!1&&(_t(i.BLEND),d=!0),N!==Ph){if(N!==S||$t!==L){if((y!==oi||P!==oi)&&(i.blendEquation(i.FUNC_ADD),y=oi,P=oi),$t)switch(N){case rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.ONE,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,A=null,T=null,k=null,W.set(0,0,0),w=0,S=N,L=$t}return}Nt=Nt||ft,Kt=Kt||dt,Zt=Zt||Lt,(ft!==y||Nt!==P)&&(i.blendEquationSeparate(x[ft],x[Nt]),y=ft,P=Nt),(dt!==E||Lt!==A||Kt!==T||Zt!==k)&&(i.blendFuncSeparate(Z[dt],Z[Lt],Z[Kt],Z[Zt]),E=dt,A=Lt,T=Kt,k=Zt),(te.equals(W)===!1||ye!==w)&&(i.blendColor(te.r,te.g,te.b,ye),W.copy(te),w=ye),S=N,L=!1}function D(N,ft){N.side===Tn?Rt(i.CULL_FACE):_t(i.CULL_FACE);let dt=N.side===ze;ft&&(dt=!dt),R(dt),N.blending===rr&&N.transparent===!1?B(Zn):B(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Lt=N.stencilWrite;c.setTest(Lt),Lt&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),U(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function R(N){C!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),C=N)}function M(N){N!==Ah?(_t(i.CULL_FACE),N!==V&&(N===Go?i.cullFace(i.BACK):N===Ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),V=N}function b(N){N!==v&&(nt&&i.lineWidth(N),v=N)}function U(N,ft,dt){N?(_t(i.POLYGON_OFFSET_FILL),(O!==ft||K!==dt)&&(i.polygonOffset(ft,dt),O=ft,K=dt)):Rt(i.POLYGON_OFFSET_FILL)}function F(N){N?_t(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function J(N){N===void 0&&(N=i.TEXTURE0+Y-1),H!==N&&(i.activeTexture(N),H=N)}function et(N,ft,dt){dt===void 0&&(H===null?dt=i.TEXTURE0+Y-1:dt=H);let Lt=q[dt];Lt===void 0&&(Lt={type:void 0,texture:void 0},q[dt]=Lt),(Lt.type!==N||Lt.texture!==ft)&&(H!==dt&&(i.activeTexture(dt),H=dt),i.bindTexture(N,ft||xt[N]),Lt.type=N,Lt.texture=ft)}function st(){const N=q[H];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(N){tt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),tt.copy(N))}function G(N){yt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),yt.copy(N))}function vt(N,ft){let dt=p.get(ft);dt===void 0&&(dt=new WeakMap,p.set(ft,dt));let Lt=dt.get(N);Lt===void 0&&(Lt=i.getUniformBlockIndex(ft,N.name),dt.set(N,Lt))}function wt(N,ft){const Lt=p.get(ft).get(N);u.get(ft)!==Lt&&(i.uniformBlockBinding(ft,Lt,N.__bindingPointIndex),u.set(ft,Lt))}function It(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},H=null,q={},f={},_=new WeakMap,g=[],h=null,d=!1,S=null,y=null,E=null,A=null,P=null,T=null,k=null,W=new Gt(0,0,0),w=0,L=!1,C=null,V=null,v=null,O=null,K=null,tt.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:_t,disable:Rt,bindFramebuffer:bt,drawBuffers:z,useProgram:pt,setBlending:B,setMaterial:D,setFlipSided:R,setCullFace:M,setLineWidth:b,setPolygonOffset:U,setScissorTest:F,activeTexture:J,bindTexture:et,unbindTexture:st,compressedTexImage2D:ct,compressedTexImage3D:gt,texImage2D:Pt,texImage3D:Tt,updateUBOMapping:vt,uniformBlockBinding:wt,texStorage2D:kt,texStorage3D:At,texSubImage2D:St,texSubImage3D:Dt,compressedTexSubImage2D:ut,compressedTexSubImage3D:zt,scissor:Ot,viewport:G,reset:It}}function B_(i,t,e,n,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let p;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,b){return f?new OffscreenCanvas(M,b):Fs("canvas")}function g(M,b,U,F){let J=1;if((M.width>F||M.height>F)&&(J=F/Math.max(M.width,M.height)),J<1||b===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const et=b?Os:Math.floor,st=et(J*M.width),ct=et(J*M.height);p===void 0&&(p=_(st,ct));const gt=U?_(st,ct):p;return gt.width=st,gt.height=ct,gt.getContext("2d").drawImage(M,0,0,st,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+st+"x"+ct+")."),gt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function h(M){return co(M.width)&&co(M.height)}function d(M){return a?!1:M.wrapS!==Ue||M.wrapT!==Ue||M.minFilter!==De&&M.minFilter!==Oe}function S(M,b){return M.generateMipmaps&&b&&M.minFilter!==De&&M.minFilter!==Oe}function y(M){i.generateMipmap(M)}function E(M,b,U,F,J=!1){if(a===!1)return b;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let et=b;if(b===i.RED&&(U===i.FLOAT&&(et=i.R32F),U===i.HALF_FLOAT&&(et=i.R16F),U===i.UNSIGNED_BYTE&&(et=i.R8)),b===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(et=i.R8UI),U===i.UNSIGNED_SHORT&&(et=i.R16UI),U===i.UNSIGNED_INT&&(et=i.R32UI),U===i.BYTE&&(et=i.R8I),U===i.SHORT&&(et=i.R16I),U===i.INT&&(et=i.R32I)),b===i.RG&&(U===i.FLOAT&&(et=i.RG32F),U===i.HALF_FLOAT&&(et=i.RG16F),U===i.UNSIGNED_BYTE&&(et=i.RG8)),b===i.RGBA){const st=J?Ds:Qt.getTransfer(F);U===i.FLOAT&&(et=i.RGBA32F),U===i.HALF_FLOAT&&(et=i.RGBA16F),U===i.UNSIGNED_BYTE&&(et=st===ne?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function A(M,b,U){return S(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==De&&M.minFilter!==Oe?Math.log2(Math.max(b.width,b.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?b.mipmaps.length:1}function P(M){return M===De||M===jo||M===mr?i.NEAREST:i.LINEAR}function T(M){const b=M.target;b.removeEventListener("dispose",T),W(b),b.isVideoTexture&&u.delete(b)}function k(M){const b=M.target;b.removeEventListener("dispose",k),L(b)}function W(M){const b=n.get(M);if(b.__webglInit===void 0)return;const U=M.source,F=m.get(U);if(F){const J=F[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(M),Object.keys(F).length===0&&m.delete(U)}n.remove(M)}function w(M){const b=n.get(M);i.deleteTexture(b.__webglTexture);const U=M.source,F=m.get(U);delete F[b.__cacheKey],o.memory.textures--}function L(M){const b=M.texture,U=n.get(M),F=n.get(b);if(F.__webglTexture!==void 0&&(i.deleteTexture(F.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(U.__webglFramebuffer[J]))for(let et=0;et<U.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(U.__webglFramebuffer[J][et]);else i.deleteFramebuffer(U.__webglFramebuffer[J]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[J])}else{if(Array.isArray(U.__webglFramebuffer))for(let J=0;J<U.__webglFramebuffer.length;J++)i.deleteFramebuffer(U.__webglFramebuffer[J]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let J=0,et=b.length;J<et;J++){const st=n.get(b[J]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(b[J])}n.remove(b),n.remove(M)}let C=0;function V(){C=0}function v(){const M=C;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),C+=1,M}function O(M){const b=[];return b.push(M.wrapS),b.push(M.wrapT),b.push(M.wrapR||0),b.push(M.magFilter),b.push(M.minFilter),b.push(M.anisotropy),b.push(M.internalFormat),b.push(M.format),b.push(M.type),b.push(M.generateMipmaps),b.push(M.premultiplyAlpha),b.push(M.flipY),b.push(M.unpackAlignment),b.push(M.colorSpace),b.join()}function K(M,b){const U=n.get(M);if(M.isVideoTexture&&D(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){const F=M.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(U,M,b);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+b)}function Y(M,b){const U=n.get(M);if(M.version>0&&U.__version!==M.version){tt(U,M,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+b)}function nt(M,b){const U=n.get(M);if(M.version>0&&U.__version!==M.version){tt(U,M,b);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+b)}function j(M,b){const U=n.get(M);if(M.version>0&&U.__version!==M.version){yt(U,M,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+b)}const it={[so]:i.REPEAT,[Ue]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},H={[De]:i.NEAREST,[jo]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Oe]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},q={[vd]:i.NEVER,[bd]:i.ALWAYS,[xd]:i.LESS,[uu]:i.LEQUAL,[yd]:i.EQUAL,[Ed]:i.GEQUAL,[Sd]:i.GREATER,[Md]:i.NOTEQUAL};function ht(M,b,U){if(b.type===An&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Oe||b.magFilter===ra||b.magFilter===mr||b.magFilter===ci||b.minFilter===Oe||b.minFilter===ra||b.minFilter===mr||b.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),U?(i.texParameteri(M,i.TEXTURE_WRAP_S,it[b.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,it[b.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,it[b.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,H[b.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,H[b.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==Ue||b.wrapT!==Ue)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,P(b.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,P(b.minFilter)),b.minFilter!==De&&b.minFilter!==Oe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,q[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===De||b.minFilter!==mr&&b.minFilter!==ci||b.type===An&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===Fr&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function $(M,b){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,b.addEventListener("dispose",T));const F=b.source;let J=m.get(F);J===void 0&&(J={},m.set(F,J));const et=O(b);if(et!==M.__cacheKey){J[et]===void 0&&(J[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[et].usedTimes++;const st=J[M.__cacheKey];st!==void 0&&(J[M.__cacheKey].usedTimes--,st.usedTimes===0&&w(b)),M.__cacheKey=et,M.__webglTexture=J[et].texture}return U}function tt(M,b,U){let F=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(F=i.TEXTURE_3D);const J=$(M,b),et=b.source;e.bindTexture(F,M.__webglTexture,i.TEXTURE0+U);const st=n.get(et);if(et.version!==st.__version||J===!0){e.activeTexture(i.TEXTURE0+U);const ct=Qt.getPrimaries(Qt.workingColorSpace),gt=b.colorSpace===$e?null:Qt.getPrimaries(b.colorSpace),St=b.colorSpace===$e||ct===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Dt=d(b)&&h(b.image)===!1;let ut=g(b.image,Dt,!1,r.maxTextureSize);ut=R(b,ut);const zt=h(ut)||a,kt=s.convert(b.format,b.colorSpace);let At=s.convert(b.type),Pt=E(b.internalFormat,kt,At,b.colorSpace,b.isVideoTexture);ht(F,b,zt);let Tt;const Ot=b.mipmaps,G=a&&b.isVideoTexture!==!0&&Pt!==ou,vt=st.__version===void 0||J===!0,wt=et.dataReady,It=A(b,ut,zt);if(b.isDepthTexture)Pt=i.DEPTH_COMPONENT,a?b.type===An?Pt=i.DEPTH_COMPONENT32F:b.type===qn?Pt=i.DEPTH_COMPONENT24:b.type===ui?Pt=i.DEPTH24_STENCIL8:Pt=i.DEPTH_COMPONENT16:b.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===hi&&Pt===i.DEPTH_COMPONENT&&b.type!==xo&&b.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=qn,At=s.convert(b.type)),b.format===cr&&Pt===i.DEPTH_COMPONENT&&(Pt=i.DEPTH_STENCIL,b.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ui,At=s.convert(b.type))),vt&&(G?e.texStorage2D(i.TEXTURE_2D,1,Pt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ut.width,ut.height,0,kt,At,null));else if(b.isDataTexture)if(Ot.length>0&&zt){G&&vt&&e.texStorage2D(i.TEXTURE_2D,It,Pt,Ot[0].width,Ot[0].height);for(let N=0,ft=Ot.length;N<ft;N++)Tt=Ot[N],G?wt&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,Tt.width,Tt.height,kt,At,Tt.data):e.texImage2D(i.TEXTURE_2D,N,Pt,Tt.width,Tt.height,0,kt,At,Tt.data);b.generateMipmaps=!1}else G?(vt&&e.texStorage2D(i.TEXTURE_2D,It,Pt,ut.width,ut.height),wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,kt,At,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,ut.width,ut.height,0,kt,At,ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Pt,Ot[0].width,Ot[0].height,ut.depth);for(let N=0,ft=Ot.length;N<ft;N++)Tt=Ot[N],b.format!==sn?kt!==null?G?wt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,Tt.width,Tt.height,ut.depth,kt,Tt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,N,Pt,Tt.width,Tt.height,ut.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,Tt.width,Tt.height,ut.depth,kt,At,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,N,Pt,Tt.width,Tt.height,ut.depth,0,kt,At,Tt.data)}else{G&&vt&&e.texStorage2D(i.TEXTURE_2D,It,Pt,Ot[0].width,Ot[0].height);for(let N=0,ft=Ot.length;N<ft;N++)Tt=Ot[N],b.format!==sn?kt!==null?G?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,N,0,0,Tt.width,Tt.height,kt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,N,Pt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?wt&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,Tt.width,Tt.height,kt,At,Tt.data):e.texImage2D(i.TEXTURE_2D,N,Pt,Tt.width,Tt.height,0,kt,At,Tt.data)}else if(b.isDataArrayTexture)G?(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Pt,ut.width,ut.height,ut.depth),wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,kt,At,ut.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ut.width,ut.height,ut.depth,0,kt,At,ut.data);else if(b.isData3DTexture)G?(vt&&e.texStorage3D(i.TEXTURE_3D,It,Pt,ut.width,ut.height,ut.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,kt,At,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ut.width,ut.height,ut.depth,0,kt,At,ut.data);else if(b.isFramebufferTexture){if(vt)if(G)e.texStorage2D(i.TEXTURE_2D,It,Pt,ut.width,ut.height);else{let N=ut.width,ft=ut.height;for(let dt=0;dt<It;dt++)e.texImage2D(i.TEXTURE_2D,dt,Pt,N,ft,0,kt,At,null),N>>=1,ft>>=1}}else if(Ot.length>0&&zt){G&&vt&&e.texStorage2D(i.TEXTURE_2D,It,Pt,Ot[0].width,Ot[0].height);for(let N=0,ft=Ot.length;N<ft;N++)Tt=Ot[N],G?wt&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,kt,At,Tt):e.texImage2D(i.TEXTURE_2D,N,Pt,kt,At,Tt);b.generateMipmaps=!1}else G?(vt&&e.texStorage2D(i.TEXTURE_2D,It,Pt,ut.width,ut.height),wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,At,ut)):e.texImage2D(i.TEXTURE_2D,0,Pt,kt,At,ut);S(b,zt)&&y(F),st.__version=et.version,b.onUpdate&&b.onUpdate(b)}M.__version=b.version}function yt(M,b,U){if(b.image.length!==6)return;const F=$(M,b),J=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);const et=n.get(J);if(J.version!==et.__version||F===!0){e.activeTexture(i.TEXTURE0+U);const st=Qt.getPrimaries(Qt.workingColorSpace),ct=b.colorSpace===$e?null:Qt.getPrimaries(b.colorSpace),gt=b.colorSpace===$e||st===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const St=b.isCompressedTexture||b.image[0].isCompressedTexture,Dt=b.image[0]&&b.image[0].isDataTexture,ut=[];for(let N=0;N<6;N++)!St&&!Dt?ut[N]=g(b.image[N],!1,!0,r.maxCubemapSize):ut[N]=Dt?b.image[N].image:b.image[N],ut[N]=R(b,ut[N]);const zt=ut[0],kt=h(zt)||a,At=s.convert(b.format,b.colorSpace),Pt=s.convert(b.type),Tt=E(b.internalFormat,At,Pt,b.colorSpace),Ot=a&&b.isVideoTexture!==!0,G=et.__version===void 0||F===!0,vt=J.dataReady;let wt=A(b,zt,kt);ht(i.TEXTURE_CUBE_MAP,b,kt);let It;if(St){Ot&&G&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Tt,zt.width,zt.height);for(let N=0;N<6;N++){It=ut[N].mipmaps;for(let ft=0;ft<It.length;ft++){const dt=It[ft];b.format!==sn?At!==null?Ot?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft,0,0,dt.width,dt.height,At,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft,Tt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft,0,0,dt.width,dt.height,At,Pt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft,Tt,dt.width,dt.height,0,At,Pt,dt.data)}}}else{It=b.mipmaps,Ot&&G&&(It.length>0&&wt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Tt,ut[0].width,ut[0].height));for(let N=0;N<6;N++)if(Dt){Ot?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,ut[N].width,ut[N].height,At,Pt,ut[N].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Tt,ut[N].width,ut[N].height,0,At,Pt,ut[N].data);for(let ft=0;ft<It.length;ft++){const Lt=It[ft].image[N].image;Ot?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft+1,0,0,Lt.width,Lt.height,At,Pt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft+1,Tt,Lt.width,Lt.height,0,At,Pt,Lt.data)}}else{Ot?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,At,Pt,ut[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Tt,At,Pt,ut[N]);for(let ft=0;ft<It.length;ft++){const dt=It[ft];Ot?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft+1,0,0,At,Pt,dt.image[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft+1,Tt,At,Pt,dt.image[N])}}}S(b,kt)&&y(i.TEXTURE_CUBE_MAP),et.__version=J.version,b.onUpdate&&b.onUpdate(b)}M.__version=b.version}function Et(M,b,U,F,J,et){const st=s.convert(U.format,U.colorSpace),ct=s.convert(U.type),gt=E(U.internalFormat,st,ct,U.colorSpace);if(!n.get(b).__hasExternalTextures){const Dt=Math.max(1,b.width>>et),ut=Math.max(1,b.height>>et);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,et,gt,Dt,ut,b.depth,0,st,ct,null):e.texImage2D(J,et,gt,Dt,ut,0,st,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),B(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,J,n.get(U).__webglTexture,0,Z(b)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,J,n.get(U).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(M,b,U){if(i.bindRenderbuffer(i.RENDERBUFFER,M),b.depthBuffer&&!b.stencilBuffer){let F=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||B(b)){const J=b.depthTexture;J&&J.isDepthTexture&&(J.type===An?F=i.DEPTH_COMPONENT32F:J.type===qn&&(F=i.DEPTH_COMPONENT24));const et=Z(b);B(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,F,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,et,F,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,F,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(b.depthBuffer&&b.stencilBuffer){const F=Z(b);U&&B(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,F,i.DEPTH24_STENCIL8,b.width,b.height):B(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0;J<F.length;J++){const et=F[J],st=s.convert(et.format,et.colorSpace),ct=s.convert(et.type),gt=E(et.internalFormat,st,ct,et.colorSpace),St=Z(b);U&&B(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,gt,b.width,b.height):B(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,gt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,gt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(M,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const F=n.get(b.depthTexture).__webglTexture,J=Z(b);if(b.depthTexture.format===hi)B(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else if(b.depthTexture.format===cr)B(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Rt(M){const b=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");_t(b.__webglFramebuffer,M)}else if(U){b.__webglDepthbuffer=[];for(let F=0;F<6;F++)e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[F]),b.__webglDepthbuffer[F]=i.createRenderbuffer(),xt(b.__webglDepthbuffer[F],M,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),xt(b.__webglDepthbuffer,M,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(M,b,U){const F=n.get(M);b!==void 0&&Et(F.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Rt(M)}function z(M){const b=M.texture,U=n.get(M),F=n.get(b);M.addEventListener("dispose",k),M.isWebGLMultipleRenderTargets!==!0&&(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=b.version,o.memory.textures++);const J=M.isWebGLCubeRenderTarget===!0,et=M.isWebGLMultipleRenderTargets===!0,st=h(M)||a;if(J){U.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[ct]=[];for(let gt=0;gt<b.mipmaps.length;gt++)U.__webglFramebuffer[ct][gt]=i.createFramebuffer()}else U.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let ct=0;ct<b.mipmaps.length;ct++)U.__webglFramebuffer[ct]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(et)if(r.drawBuffers){const ct=M.texture;for(let gt=0,St=ct.length;gt<St;gt++){const Dt=n.get(ct[gt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&B(M)===!1){const ct=et?b:[b];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let gt=0;gt<ct.length;gt++){const St=ct[gt];U.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[gt]);const Dt=s.convert(St.format,St.colorSpace),ut=s.convert(St.type),zt=E(St.internalFormat,Dt,ut,St.colorSpace,M.isXRRenderTarget===!0),kt=Z(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,zt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,U.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(U.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),ht(i.TEXTURE_CUBE_MAP,b,st);for(let ct=0;ct<6;ct++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)Et(U.__webglFramebuffer[ct][gt],M,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else Et(U.__webglFramebuffer[ct],M,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);S(b,st)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){const ct=M.texture;for(let gt=0,St=ct.length;gt<St;gt++){const Dt=ct[gt],ut=n.get(Dt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),ht(i.TEXTURE_2D,Dt,st),Et(U.__webglFramebuffer,M,Dt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),S(Dt,st)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?ct=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,F.__webglTexture),ht(ct,b,st),a&&b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)Et(U.__webglFramebuffer[gt],M,b,i.COLOR_ATTACHMENT0,ct,gt);else Et(U.__webglFramebuffer,M,b,i.COLOR_ATTACHMENT0,ct,0);S(b,st)&&y(ct),e.unbindTexture()}M.depthBuffer&&Rt(M)}function pt(M){const b=h(M)||a,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let F=0,J=U.length;F<J;F++){const et=U[F];if(S(et,b)){const st=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ct=n.get(et).__webglTexture;e.bindTexture(st,ct),y(st),e.unbindTexture()}}}function x(M){if(a&&M.samples>0&&B(M)===!1){const b=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,F=M.height;let J=i.COLOR_BUFFER_BIT;const et=[],st=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(M),gt=M.isWebGLMultipleRenderTargets===!0;if(gt)for(let St=0;St<b.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let St=0;St<b.length;St++){et.push(i.COLOR_ATTACHMENT0+St),M.depthBuffer&&et.push(st);const Dt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Dt===!1&&(M.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),gt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[St]),Dt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[st]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[st])),gt){const ut=n.get(b[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,U,F,0,0,U,F,J,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let St=0;St<b.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,ct.__webglColorRenderbuffer[St]);const Dt=n.get(b[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Z(M){return Math.min(r.maxSamples,M.samples)}function B(M){const b=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function D(M){const b=o.render.frame;u.get(M)!==b&&(u.set(M,b),M.update())}function R(M,b){const U=M.colorSpace,F=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===lo||U!==Ln&&U!==$e&&(Qt.getTransfer(U)===ne?a===!1?t.has("EXT_sRGB")===!0&&F===sn?(M.format=lo,M.minFilter=Oe,M.generateMipmaps=!1):b=fu.sRGBToLinear(b):(F!==sn||J!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),b}this.allocateTextureUnit=v,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=nt,this.setTextureCube=j,this.rebindTextures=bt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=x,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=B}function z_(i,t,e){const n=e.isWebGL2;function r(s,o=$e){let a;const l=Qt.getTransfer(o);if(s===$n)return i.UNSIGNED_BYTE;if(s===nu)return i.UNSIGNED_SHORT_4_4_4_4;if(s===iu)return i.UNSIGNED_SHORT_5_5_5_1;if(s===od)return i.BYTE;if(s===ld)return i.SHORT;if(s===xo)return i.UNSIGNED_SHORT;if(s===eu)return i.INT;if(s===qn)return i.UNSIGNED_INT;if(s===An)return i.FLOAT;if(s===Fr)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cd)return i.ALPHA;if(s===sn)return i.RGBA;if(s===ud)return i.LUMINANCE;if(s===hd)return i.LUMINANCE_ALPHA;if(s===hi)return i.DEPTH_COMPONENT;if(s===cr)return i.DEPTH_STENCIL;if(s===lo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dd)return i.RED;if(s===ru)return i.RED_INTEGER;if(s===fd)return i.RG;if(s===su)return i.RG_INTEGER;if(s===au)return i.RGBA_INTEGER;if(s===sa||s===aa||s===oa||s===la)if(l===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===sa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===sa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===aa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===la)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zo||s===Ko||s===$o||s===Jo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ko)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$o)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ou)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qo||s===tl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Qo)return l===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===tl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===el||s===nl||s===il||s===rl||s===sl||s===al||s===ol||s===ll||s===cl||s===ul||s===hl||s===dl||s===fl||s===pl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===el)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===il)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===al)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ol)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ll)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ul)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ca||s===ml||s===gl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===ca)return l===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ml)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pd||s===_l||s===vl||s===xl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===ca)return a.COMPRESSED_RED_RGTC1_EXT;if(s===_l)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ui?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class k_ extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class tr extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H_={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const h=e.getJointPose(g,n),d=this._getHandJoint(c,g);h!==null&&(d.matrix.fromArray(h.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=h.radius),d.visible=h!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=u.position.distanceTo(p.position),f=.02,_=.005;c.inputState.pinching&&m>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new tr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class W_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ne,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new Dn({extensions:{fragDepth:!0},vertexShader:G_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new le(new Nn(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class X_ extends Si{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,m=null,f=null,_=null;const g=new W_,h=e.getContextAttributes();let d=null,S=null;const y=[],E=[],A=new mt;let P=null;const T=new Ke;T.layers.enable(1),T.viewport=new pe;const k=new Ke;k.layers.enable(2),k.viewport=new pe;const W=[T,k],w=new k_;w.layers.enable(1),w.layers.enable(2);let L=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=y[$];return tt===void 0&&(tt=new Da,y[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=y[$];return tt===void 0&&(tt=new Da,y[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=y[$];return tt===void 0&&(tt=new Da,y[$]=tt),tt.getHandSpace()};function V($){const tt=E.indexOf($.inputSource);if(tt===-1)return;const yt=y[tt];yt!==void 0&&(yt.update($.inputSource,$.frame,c||o),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function v(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",v),r.removeEventListener("inputsourceschange",O);for(let $=0;$<y.length;$++){const tt=E[$];tt!==null&&(E[$]=null,y[$].disconnect(tt))}L=null,C=null,g.reset(),t.setRenderTarget(d),f=null,m=null,p=null,r=null,S=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",v),r.addEventListener("inputsourceschange",O),h.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new xi(f.framebufferWidth,f.framebufferHeight,{format:sn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil})}else{let tt=null,yt=null,Et=null;h.depth&&(Et=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=h.stencil?cr:hi,yt=h.stencil?ui:qn);const xt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:s};p=new XRWebGLBinding(r,e),m=p.createProjectionLayer(xt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),S=new xi(m.textureWidth,m.textureHeight,{format:sn,type:$n,depthTexture:new Eu(m.textureWidth,m.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0});const _t=t.properties.get(S);_t.__ignoreDepthValues=m.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O($){for(let tt=0;tt<$.removed.length;tt++){const yt=$.removed[tt],Et=E.indexOf(yt);Et>=0&&(E[Et]=null,y[Et].disconnect(yt))}for(let tt=0;tt<$.added.length;tt++){const yt=$.added[tt];let Et=E.indexOf(yt);if(Et===-1){for(let _t=0;_t<y.length;_t++)if(_t>=E.length){E.push(yt),Et=_t;break}else if(E[_t]===null){E[_t]=yt,Et=_t;break}if(Et===-1)break}const xt=y[Et];xt&&xt.connect(yt)}}const K=new X,Y=new X;function nt($,tt,yt){K.setFromMatrixPosition(tt.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);const Et=K.distanceTo(Y),xt=tt.projectionMatrix.elements,_t=yt.projectionMatrix.elements,Rt=xt[14]/(xt[10]-1),bt=xt[14]/(xt[10]+1),z=(xt[9]+1)/xt[5],pt=(xt[9]-1)/xt[5],x=(xt[8]-1)/xt[0],Z=(_t[8]+1)/_t[0],B=Rt*x,D=Rt*Z,R=Et/(-x+Z),M=R*-x;tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(M),$.translateZ(R),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const b=Rt+R,U=bt+R,F=B-M,J=D+(Et-M),et=z*bt/U*b,st=pt*bt/U*b;$.projectionMatrix.makePerspective(F,J,et,st,b,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function j($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;g.texture!==null&&($.near=g.depthNear,$.far=g.depthFar),w.near=k.near=T.near=$.near,w.far=k.far=T.far=$.far,(L!==w.near||C!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,C=w.far,T.near=L,T.far=C,k.near=L,k.far=C,T.updateProjectionMatrix(),k.updateProjectionMatrix(),$.updateProjectionMatrix());const tt=$.parent,yt=w.cameras;j(w,tt);for(let Et=0;Et<yt.length;Et++)j(yt[Et],tt);yt.length===2?nt(w,T,k):w.projectionMatrix.copy(T.projectionMatrix),it($,w,tt)};function it($,tt,yt){yt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Br*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(m===null&&f===null))return l},this.setFoveation=function($){l=$,m!==null&&(m.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null};let H=null;function q($,tt){if(u=tt.getViewerPose(c||o),_=tt,u!==null){const yt=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Et=!1;yt.length!==w.cameras.length&&(w.cameras.length=0,Et=!0);for(let _t=0;_t<yt.length;_t++){const Rt=yt[_t];let bt=null;if(f!==null)bt=f.getViewport(Rt);else{const pt=p.getViewSubImage(m,Rt);bt=pt.viewport,_t===0&&(t.setRenderTargetTextures(S,pt.colorTexture,m.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(S))}let z=W[_t];z===void 0&&(z=new Ke,z.layers.enable(_t),z.viewport=new pe,W[_t]=z),z.matrix.fromArray(Rt.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Rt.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(bt.x,bt.y,bt.width,bt.height),_t===0&&(w.matrix.copy(z.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Et===!0&&w.cameras.push(z)}const xt=r.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const _t=p.getDepthInformation(yt[0]);_t&&_t.isValid&&_t.texture&&g.init(t,_t,r.renderState)}}for(let yt=0;yt<y.length;yt++){const Et=E[yt],xt=y[yt];Et!==null&&xt!==void 0&&xt.update(Et,tt,c||o)}g.render(t,w),H&&H($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}const ht=new Mu;ht.setAnimationLoop(q),this.setAnimationLoop=function($){H=$},this.dispose=function(){}}}function q_(i,t){function e(h,d){h.matrixAutoUpdate===!0&&h.updateMatrix(),d.value.copy(h.matrix)}function n(h,d){d.color.getRGB(h.fogColor.value,xu(i)),d.isFog?(h.fogNear.value=d.near,h.fogFar.value=d.far):d.isFogExp2&&(h.fogDensity.value=d.density)}function r(h,d,S,y,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(h,d):d.isMeshToonMaterial?(s(h,d),p(h,d)):d.isMeshPhongMaterial?(s(h,d),u(h,d)):d.isMeshStandardMaterial?(s(h,d),m(h,d),d.isMeshPhysicalMaterial&&f(h,d,E)):d.isMeshMatcapMaterial?(s(h,d),_(h,d)):d.isMeshDepthMaterial?s(h,d):d.isMeshDistanceMaterial?(s(h,d),g(h,d)):d.isMeshNormalMaterial?s(h,d):d.isLineBasicMaterial?(o(h,d),d.isLineDashedMaterial&&a(h,d)):d.isPointsMaterial?l(h,d,S,y):d.isSpriteMaterial?c(h,d):d.isShadowMaterial?(h.color.value.copy(d.color),h.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(h,d){h.opacity.value=d.opacity,d.color&&h.diffuse.value.copy(d.color),d.emissive&&h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(h.map.value=d.map,e(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.bumpMap&&(h.bumpMap.value=d.bumpMap,e(d.bumpMap,h.bumpMapTransform),h.bumpScale.value=d.bumpScale,d.side===ze&&(h.bumpScale.value*=-1)),d.normalMap&&(h.normalMap.value=d.normalMap,e(d.normalMap,h.normalMapTransform),h.normalScale.value.copy(d.normalScale),d.side===ze&&h.normalScale.value.negate()),d.displacementMap&&(h.displacementMap.value=d.displacementMap,e(d.displacementMap,h.displacementMapTransform),h.displacementScale.value=d.displacementScale,h.displacementBias.value=d.displacementBias),d.emissiveMap&&(h.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,h.emissiveMapTransform)),d.specularMap&&(h.specularMap.value=d.specularMap,e(d.specularMap,h.specularMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest);const S=t.get(d).envMap;if(S&&(h.envMap.value=S,h.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=d.reflectivity,h.ior.value=d.ior,h.refractionRatio.value=d.refractionRatio),d.lightMap){h.lightMap.value=d.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=d.lightMapIntensity*y,e(d.lightMap,h.lightMapTransform)}d.aoMap&&(h.aoMap.value=d.aoMap,h.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,h.aoMapTransform))}function o(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,d.map&&(h.map.value=d.map,e(d.map,h.mapTransform))}function a(h,d){h.dashSize.value=d.dashSize,h.totalSize.value=d.dashSize+d.gapSize,h.scale.value=d.scale}function l(h,d,S,y){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.size.value=d.size*S,h.scale.value=y*.5,d.map&&(h.map.value=d.map,e(d.map,h.uvTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function c(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.rotation.value=d.rotation,d.map&&(h.map.value=d.map,e(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function u(h,d){h.specular.value.copy(d.specular),h.shininess.value=Math.max(d.shininess,1e-4)}function p(h,d){d.gradientMap&&(h.gradientMap.value=d.gradientMap)}function m(h,d){h.metalness.value=d.metalness,d.metalnessMap&&(h.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,h.metalnessMapTransform)),h.roughness.value=d.roughness,d.roughnessMap&&(h.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,h.roughnessMapTransform)),t.get(d).envMap&&(h.envMapIntensity.value=d.envMapIntensity)}function f(h,d,S){h.ior.value=d.ior,d.sheen>0&&(h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),h.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(h.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,h.sheenColorMapTransform)),d.sheenRoughnessMap&&(h.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,h.sheenRoughnessMapTransform))),d.clearcoat>0&&(h.clearcoat.value=d.clearcoat,h.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(h.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,h.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(h.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ze&&h.clearcoatNormalScale.value.negate())),d.iridescence>0&&(h.iridescence.value=d.iridescence,h.iridescenceIOR.value=d.iridescenceIOR,h.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(h.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,h.iridescenceMapTransform)),d.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),d.transmission>0&&(h.transmission.value=d.transmission,h.transmissionSamplerMap.value=S.texture,h.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(h.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,h.transmissionMapTransform)),h.thickness.value=d.thickness,d.thicknessMap&&(h.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=d.attenuationDistance,h.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(h.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(h.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=d.specularIntensity,h.specularColor.value.copy(d.specularColor),d.specularColorMap&&(h.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,h.specularColorMapTransform)),d.specularIntensityMap&&(h.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,h.specularIntensityMapTransform))}function _(h,d){d.matcap&&(h.matcap.value=d.matcap)}function g(h,d){const S=t.get(d).light;h.referencePosition.value.setFromMatrixPosition(S.matrixWorld),h.nearDistance.value=S.shadow.camera.near,h.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Y_(i,t,e,n){let r={},s={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const E=y.program;n.uniformBlockBinding(S,E)}function c(S,y){let E=r[S.id];E===void 0&&(_(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",h));const A=y.program;n.updateUBOMapping(S,A);const P=t.render.frame;s[S.id]!==P&&(m(S),s[S.id]=P)}function u(S){const y=p();S.__bindingPointIndex=y;const E=i.createBuffer(),A=S.__size,P=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function p(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(S){const y=r[S.id],E=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,T=E.length;P<T;P++){const k=Array.isArray(E[P])?E[P]:[E[P]];for(let W=0,w=k.length;W<w;W++){const L=k[W];if(f(L,P,W,A)===!0){const C=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let v=0;for(let O=0;O<V.length;O++){const K=V[O],Y=g(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,C+v,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,v),v+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,y,E,A){const P=S.value,T=y+"_"+E;if(A[T]===void 0)return typeof P=="number"||typeof P=="boolean"?A[T]=P:A[T]=P.clone(),!0;{const k=A[T];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return A[T]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function _(S){const y=S.uniforms;let E=0;const A=16;for(let T=0,k=y.length;T<k;T++){const W=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,L=W.length;w<L;w++){const C=W[w],V=Array.isArray(C.value)?C.value:[C.value];for(let v=0,O=V.length;v<O;v++){const K=V[v],Y=g(K),nt=E%A;nt!==0&&A-nt<Y.boundary&&(E+=A-nt),C.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=Y.storage}}}const P=E%A;return P>0&&(E+=A-P),S.__size=E,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function h(S){const y=S.target;y.removeEventListener("dispose",h);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Ru{constructor(t={}){const{canvas:e=zd(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,h=null;const d=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;const y=this;let E=!1,A=0,P=0,T=null,k=-1,W=null;const w=new pe,L=new pe;let C=null;const V=new Gt(0);let v=0,O=e.width,K=e.height,Y=1,nt=null,j=null;const it=new pe(0,0,O,K),H=new pe(0,0,O,K);let q=!1;const ht=new Eo;let $=!1,tt=!1,yt=null;const Et=new ie,xt=new mt,_t=new X,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return T===null?Y:1}let z=n;function pt(I,rt){for(let ot=0;ot<I.length;ot++){const lt=I[ot],at=e.getContext(lt,rt);if(at!==null)return at}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vo}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",ft,!1),z===null){const rt=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&rt.shift(),z=pt(rt,I),z===null)throw pt(rt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let x,Z,B,D,R,M,b,U,F,J,et,st,ct,gt,St,Dt,ut,zt,kt,At,Pt,Tt,Ot,G;function vt(){x=new tg(z),Z=new jm(z,x,t),x.init(Z),Tt=new z_(z,x,Z),B=new F_(z,x,Z),D=new ig(z),R=new E_,M=new B_(z,x,B,R,Z,Tt,D),b=new Km(y),U=new Qm(y),F=new hf(z,Z),Ot=new qm(z,x,F,Z),J=new eg(z,F,D,Ot),et=new og(z,J,F,D),kt=new ag(z,Z,M),Dt=new Zm(R),st=new M_(y,b,U,x,Z,Ot,Dt),ct=new q_(y,R),gt=new w_,St=new L_(x,Z),zt=new Xm(y,b,U,B,et,m,l),ut=new O_(y,et,Z),G=new Y_(z,D,Z,B),At=new Ym(z,x,D,Z),Pt=new ng(z,x,D,Z),D.programs=st.programs,y.capabilities=Z,y.extensions=x,y.properties=R,y.renderLists=gt,y.shadowMap=ut,y.state=B,y.info=D}vt();const wt=new X_(y,z);this.xr=wt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const I=x.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=x.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(I){I!==void 0&&(Y=I,this.setSize(O,K,!1))},this.getSize=function(I){return I.set(O,K)},this.setSize=function(I,rt,ot=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=I,K=rt,e.width=Math.floor(I*Y),e.height=Math.floor(rt*Y),ot===!0&&(e.style.width=I+"px",e.style.height=rt+"px"),this.setViewport(0,0,I,rt)},this.getDrawingBufferSize=function(I){return I.set(O*Y,K*Y).floor()},this.setDrawingBufferSize=function(I,rt,ot){O=I,K=rt,Y=ot,e.width=Math.floor(I*ot),e.height=Math.floor(rt*ot),this.setViewport(0,0,I,rt)},this.getCurrentViewport=function(I){return I.copy(w)},this.getViewport=function(I){return I.copy(it)},this.setViewport=function(I,rt,ot,lt){I.isVector4?it.set(I.x,I.y,I.z,I.w):it.set(I,rt,ot,lt),B.viewport(w.copy(it).multiplyScalar(Y).floor())},this.getScissor=function(I){return I.copy(H)},this.setScissor=function(I,rt,ot,lt){I.isVector4?H.set(I.x,I.y,I.z,I.w):H.set(I,rt,ot,lt),B.scissor(L.copy(H).multiplyScalar(Y).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(I){B.setScissorTest(q=I)},this.setOpaqueSort=function(I){nt=I},this.setTransparentSort=function(I){j=I},this.getClearColor=function(I){return I.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(I=!0,rt=!0,ot=!0){let lt=0;if(I){let at=!1;if(T!==null){const Ct=T.texture.format;at=Ct===au||Ct===su||Ct===ru}if(at){const Ct=T.texture.type,Ut=Ct===$n||Ct===qn||Ct===xo||Ct===ui||Ct===nu||Ct===iu,Bt=zt.getClearColor(),Ht=zt.getClearAlpha(),qt=Bt.r,Vt=Bt.g,Wt=Bt.b;Ut?(f[0]=qt,f[1]=Vt,f[2]=Wt,f[3]=Ht,z.clearBufferuiv(z.COLOR,0,f)):(_[0]=qt,_[1]=Vt,_[2]=Wt,_[3]=Ht,z.clearBufferiv(z.COLOR,0,_))}else lt|=z.COLOR_BUFFER_BIT}rt&&(lt|=z.DEPTH_BUFFER_BIT),ot&&(lt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),gt.dispose(),St.dispose(),R.dispose(),b.dispose(),U.dispose(),et.dispose(),Ot.dispose(),G.dispose(),st.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",ye),wt.removeEventListener("sessionend",$t),yt&&(yt.dispose(),yt=null),ue.stop()};function It(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const I=D.autoReset,rt=ut.enabled,ot=ut.autoUpdate,lt=ut.needsUpdate,at=ut.type;vt(),D.autoReset=I,ut.enabled=rt,ut.autoUpdate=ot,ut.needsUpdate=lt,ut.type=at}function ft(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function dt(I){const rt=I.target;rt.removeEventListener("dispose",dt),Lt(rt)}function Lt(I){Nt(I),R.remove(I)}function Nt(I){const rt=R.get(I).programs;rt!==void 0&&(rt.forEach(function(ot){st.releaseProgram(ot)}),I.isShaderMaterial&&st.releaseShaderCache(I))}this.renderBufferDirect=function(I,rt,ot,lt,at,Ct){rt===null&&(rt=Rt);const Ut=at.isMesh&&at.matrixWorld.determinant()<0,Bt=Eh(I,rt,ot,lt,at);B.setMaterial(lt,Ut);let Ht=ot.index,qt=1;if(lt.wireframe===!0){if(Ht=J.getWireframeAttribute(ot),Ht===void 0)return;qt=2}const Vt=ot.drawRange,Wt=ot.attributes.position;let he=Vt.start*qt,Ge=(Vt.start+Vt.count)*qt;Ct!==null&&(he=Math.max(he,Ct.start*qt),Ge=Math.min(Ge,(Ct.start+Ct.count)*qt)),Ht!==null?(he=Math.max(he,0),Ge=Math.min(Ge,Ht.count)):Wt!=null&&(he=Math.max(he,0),Ge=Math.min(Ge,Wt.count));const _e=Ge-he;if(_e<0||_e===1/0)return;Ot.setup(at,lt,Bt,ot,Ht);let xn,re=At;if(Ht!==null&&(xn=F.get(Ht),re=Pt,re.setIndex(xn)),at.isMesh)lt.wireframe===!0?(B.setLineWidth(lt.wireframeLinewidth*bt()),re.setMode(z.LINES)):re.setMode(z.TRIANGLES);else if(at.isLine){let Yt=lt.linewidth;Yt===void 0&&(Yt=1),B.setLineWidth(Yt*bt()),at.isLineSegments?re.setMode(z.LINES):at.isLineLoop?re.setMode(z.LINE_LOOP):re.setMode(z.LINE_STRIP)}else at.isPoints?re.setMode(z.POINTS):at.isSprite&&re.setMode(z.TRIANGLES);if(at.isBatchedMesh)re.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else if(at.isInstancedMesh)re.renderInstances(he,_e,at.count);else if(ot.isInstancedBufferGeometry){const Yt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,ta=Math.min(ot.instanceCount,Yt);re.renderInstances(he,_e,ta)}else re.render(he,_e)};function Kt(I,rt,ot){I.transparent===!0&&I.side===Tn&&I.forceSinglePass===!1?(I.side=ze,I.needsUpdate=!0,qr(I,rt,ot),I.side=Qn,I.needsUpdate=!0,qr(I,rt,ot),I.side=Tn):qr(I,rt,ot)}this.compile=function(I,rt,ot=null){ot===null&&(ot=I),h=St.get(ot),h.init(),S.push(h),ot.traverseVisible(function(at){at.isLight&&at.layers.test(rt.layers)&&(h.pushLight(at),at.castShadow&&h.pushShadow(at))}),I!==ot&&I.traverseVisible(function(at){at.isLight&&at.layers.test(rt.layers)&&(h.pushLight(at),at.castShadow&&h.pushShadow(at))}),h.setupLights(y._useLegacyLights);const lt=new Set;return I.traverse(function(at){const Ct=at.material;if(Ct)if(Array.isArray(Ct))for(let Ut=0;Ut<Ct.length;Ut++){const Bt=Ct[Ut];Kt(Bt,ot,at),lt.add(Bt)}else Kt(Ct,ot,at),lt.add(Ct)}),S.pop(),h=null,lt},this.compileAsync=function(I,rt,ot=null){const lt=this.compile(I,rt,ot);return new Promise(at=>{function Ct(){if(lt.forEach(function(Ut){R.get(Ut).currentProgram.isReady()&&lt.delete(Ut)}),lt.size===0){at(I);return}setTimeout(Ct,10)}x.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Zt=null;function te(I){Zt&&Zt(I)}function ye(){ue.stop()}function $t(){ue.start()}const ue=new Mu;ue.setAnimationLoop(te),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(I){Zt=I,wt.setAnimationLoop(I),I===null?ue.stop():ue.start()},wt.addEventListener("sessionstart",ye),wt.addEventListener("sessionend",$t),this.render=function(I,rt){if(rt!==void 0&&rt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(rt),rt=wt.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,rt,T),h=St.get(I,S.length),h.init(),S.push(h),Et.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),ht.setFromProjectionMatrix(Et),tt=this.localClippingEnabled,$=Dt.init(this.clippingPlanes,tt),g=gt.get(I,d.length),g.init(),d.push(g),Ae(I,rt,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(nt,j),this.info.render.frame++,$===!0&&Dt.beginShadows();const ot=h.state.shadowsArray;if(ut.render(ot,I,rt),$===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1)&&zt.render(g,I),h.setupLights(y._useLegacyLights),rt.isArrayCamera){const lt=rt.cameras;for(let at=0,Ct=lt.length;at<Ct;at++){const Ut=lt[at];Oo(g,I,Ut,Ut.viewport)}}else Oo(g,I,rt);T!==null&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(y,I,rt),Ot.resetDefaultState(),k=-1,W=null,S.pop(),S.length>0?h=S[S.length-1]:h=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Ae(I,rt,ot,lt){if(I.visible===!1)return;if(I.layers.test(rt.layers)){if(I.isGroup)ot=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(rt);else if(I.isLight)h.pushLight(I),I.castShadow&&h.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ht.intersectsSprite(I)){lt&&_t.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Et);const Ut=et.update(I),Bt=I.material;Bt.visible&&g.push(I,Ut,Bt,ot,_t.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ht.intersectsObject(I))){const Ut=et.update(I),Bt=I.material;if(lt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),_t.copy(I.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),_t.copy(Ut.boundingSphere.center)),_t.applyMatrix4(I.matrixWorld).applyMatrix4(Et)),Array.isArray(Bt)){const Ht=Ut.groups;for(let qt=0,Vt=Ht.length;qt<Vt;qt++){const Wt=Ht[qt],he=Bt[Wt.materialIndex];he&&he.visible&&g.push(I,Ut,he,ot,_t.z,Wt)}}else Bt.visible&&g.push(I,Ut,Bt,ot,_t.z,null)}}const Ct=I.children;for(let Ut=0,Bt=Ct.length;Ut<Bt;Ut++)Ae(Ct[Ut],rt,ot,lt)}function Oo(I,rt,ot,lt){const at=I.opaque,Ct=I.transmissive,Ut=I.transparent;h.setupLightsView(ot),$===!0&&Dt.setGlobalState(y.clippingPlanes,ot),Ct.length>0&&Mh(at,Ct,rt,ot),lt&&B.viewport(w.copy(lt)),at.length>0&&Xr(at,rt,ot),Ct.length>0&&Xr(Ct,rt,ot),Ut.length>0&&Xr(Ut,rt,ot),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Mh(I,rt,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;const Ct=Z.isWebGL2;yt===null&&(yt=new xi(1,1,{generateMipmaps:!0,type:x.has("EXT_color_buffer_half_float")?Fr:$n,minFilter:ci,samples:Ct?4:0})),y.getDrawingBufferSize(xt),Ct?yt.setSize(xt.x,xt.y):yt.setSize(Os(xt.x),Os(xt.y));const Ut=y.getRenderTarget();y.setRenderTarget(yt),y.getClearColor(V),v=y.getClearAlpha(),v<1&&y.setClearColor(16777215,.5),y.clear();const Bt=y.toneMapping;y.toneMapping=Kn,Xr(I,ot,lt),M.updateMultisampleRenderTarget(yt),M.updateRenderTargetMipmap(yt);let Ht=!1;for(let qt=0,Vt=rt.length;qt<Vt;qt++){const Wt=rt[qt],he=Wt.object,Ge=Wt.geometry,_e=Wt.material,xn=Wt.group;if(_e.side===Tn&&he.layers.test(lt.layers)){const re=_e.side;_e.side=ze,_e.needsUpdate=!0,Fo(he,ot,lt,Ge,_e,xn),_e.side=re,_e.needsUpdate=!0,Ht=!0}}Ht===!0&&(M.updateMultisampleRenderTarget(yt),M.updateRenderTargetMipmap(yt)),y.setRenderTarget(Ut),y.setClearColor(V,v),y.toneMapping=Bt}function Xr(I,rt,ot){const lt=rt.isScene===!0?rt.overrideMaterial:null;for(let at=0,Ct=I.length;at<Ct;at++){const Ut=I[at],Bt=Ut.object,Ht=Ut.geometry,qt=lt===null?Ut.material:lt,Vt=Ut.group;Bt.layers.test(ot.layers)&&Fo(Bt,rt,ot,Ht,qt,Vt)}}function Fo(I,rt,ot,lt,at,Ct){I.onBeforeRender(y,rt,ot,lt,at,Ct),I.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),at.onBeforeRender(y,rt,ot,lt,I,Ct),at.transparent===!0&&at.side===Tn&&at.forceSinglePass===!1?(at.side=ze,at.needsUpdate=!0,y.renderBufferDirect(ot,rt,lt,at,I,Ct),at.side=Qn,at.needsUpdate=!0,y.renderBufferDirect(ot,rt,lt,at,I,Ct),at.side=Tn):y.renderBufferDirect(ot,rt,lt,at,I,Ct),I.onAfterRender(y,rt,ot,lt,at,Ct)}function qr(I,rt,ot){rt.isScene!==!0&&(rt=Rt);const lt=R.get(I),at=h.state.lights,Ct=h.state.shadowsArray,Ut=at.state.version,Bt=st.getParameters(I,at.state,Ct,rt,ot),Ht=st.getProgramCacheKey(Bt);let qt=lt.programs;lt.environment=I.isMeshStandardMaterial?rt.environment:null,lt.fog=rt.fog,lt.envMap=(I.isMeshStandardMaterial?U:b).get(I.envMap||lt.environment),qt===void 0&&(I.addEventListener("dispose",dt),qt=new Map,lt.programs=qt);let Vt=qt.get(Ht);if(Vt!==void 0){if(lt.currentProgram===Vt&&lt.lightsStateVersion===Ut)return zo(I,Bt),Vt}else Bt.uniforms=st.getUniforms(I),I.onBuild(ot,Bt,y),I.onBeforeCompile(Bt,y),Vt=st.acquireProgram(Bt,Ht),qt.set(Ht,Vt),lt.uniforms=Bt.uniforms;const Wt=lt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Wt.clippingPlanes=Dt.uniform),zo(I,Bt),lt.needsLights=wh(I),lt.lightsStateVersion=Ut,lt.needsLights&&(Wt.ambientLightColor.value=at.state.ambient,Wt.lightProbe.value=at.state.probe,Wt.directionalLights.value=at.state.directional,Wt.directionalLightShadows.value=at.state.directionalShadow,Wt.spotLights.value=at.state.spot,Wt.spotLightShadows.value=at.state.spotShadow,Wt.rectAreaLights.value=at.state.rectArea,Wt.ltc_1.value=at.state.rectAreaLTC1,Wt.ltc_2.value=at.state.rectAreaLTC2,Wt.pointLights.value=at.state.point,Wt.pointLightShadows.value=at.state.pointShadow,Wt.hemisphereLights.value=at.state.hemi,Wt.directionalShadowMap.value=at.state.directionalShadowMap,Wt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Wt.spotShadowMap.value=at.state.spotShadowMap,Wt.spotLightMatrix.value=at.state.spotLightMatrix,Wt.spotLightMap.value=at.state.spotLightMap,Wt.pointShadowMap.value=at.state.pointShadowMap,Wt.pointShadowMatrix.value=at.state.pointShadowMatrix),lt.currentProgram=Vt,lt.uniformsList=null,Vt}function Bo(I){if(I.uniformsList===null){const rt=I.currentProgram.getUniforms();I.uniformsList=Cs.seqWithValue(rt.seq,I.uniforms)}return I.uniformsList}function zo(I,rt){const ot=R.get(I);ot.outputColorSpace=rt.outputColorSpace,ot.batching=rt.batching,ot.instancing=rt.instancing,ot.instancingColor=rt.instancingColor,ot.skinning=rt.skinning,ot.morphTargets=rt.morphTargets,ot.morphNormals=rt.morphNormals,ot.morphColors=rt.morphColors,ot.morphTargetsCount=rt.morphTargetsCount,ot.numClippingPlanes=rt.numClippingPlanes,ot.numIntersection=rt.numClipIntersection,ot.vertexAlphas=rt.vertexAlphas,ot.vertexTangents=rt.vertexTangents,ot.toneMapping=rt.toneMapping}function Eh(I,rt,ot,lt,at){rt.isScene!==!0&&(rt=Rt),M.resetTextureUnits();const Ct=rt.fog,Ut=lt.isMeshStandardMaterial?rt.environment:null,Bt=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ln,Ht=(lt.isMeshStandardMaterial?U:b).get(lt.envMap||Ut),qt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Vt=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Wt=!!ot.morphAttributes.position,he=!!ot.morphAttributes.normal,Ge=!!ot.morphAttributes.color;let _e=Kn;lt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_e=y.toneMapping);const xn=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,re=xn!==void 0?xn.length:0,Yt=R.get(lt),ta=h.state.lights;if($===!0&&(tt===!0||I!==W)){const Ye=I===W&&lt.id===k;Dt.setState(lt,I,Ye)}let ae=!1;lt.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==ta.state.version||Yt.outputColorSpace!==Bt||at.isBatchedMesh&&Yt.batching===!1||!at.isBatchedMesh&&Yt.batching===!0||at.isInstancedMesh&&Yt.instancing===!1||!at.isInstancedMesh&&Yt.instancing===!0||at.isSkinnedMesh&&Yt.skinning===!1||!at.isSkinnedMesh&&Yt.skinning===!0||at.isInstancedMesh&&Yt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Yt.instancingColor===!1&&at.instanceColor!==null||Yt.envMap!==Ht||lt.fog===!0&&Yt.fog!==Ct||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Dt.numPlanes||Yt.numIntersection!==Dt.numIntersection)||Yt.vertexAlphas!==qt||Yt.vertexTangents!==Vt||Yt.morphTargets!==Wt||Yt.morphNormals!==he||Yt.morphColors!==Ge||Yt.toneMapping!==_e||Z.isWebGL2===!0&&Yt.morphTargetsCount!==re)&&(ae=!0):(ae=!0,Yt.__version=lt.version);let ti=Yt.currentProgram;ae===!0&&(ti=qr(lt,rt,at));let ko=!1,pr=!1,ea=!1;const Me=ti.getUniforms(),ei=Yt.uniforms;if(B.useProgram(ti.program)&&(ko=!0,pr=!0,ea=!0),lt.id!==k&&(k=lt.id,pr=!0),ko||W!==I){Me.setValue(z,"projectionMatrix",I.projectionMatrix),Me.setValue(z,"viewMatrix",I.matrixWorldInverse);const Ye=Me.map.cameraPosition;Ye!==void 0&&Ye.setValue(z,_t.setFromMatrixPosition(I.matrixWorld)),Z.logarithmicDepthBuffer&&Me.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Me.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),W!==I&&(W=I,pr=!0,ea=!0)}if(at.isSkinnedMesh){Me.setOptional(z,at,"bindMatrix"),Me.setOptional(z,at,"bindMatrixInverse");const Ye=at.skeleton;Ye&&(Z.floatVertexTextures?(Ye.boneTexture===null&&Ye.computeBoneTexture(),Me.setValue(z,"boneTexture",Ye.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}at.isBatchedMesh&&(Me.setOptional(z,at,"batchingTexture"),Me.setValue(z,"batchingTexture",at._matricesTexture,M));const na=ot.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0&&Z.isWebGL2===!0)&&kt.update(at,ot,ti),(pr||Yt.receiveShadow!==at.receiveShadow)&&(Yt.receiveShadow=at.receiveShadow,Me.setValue(z,"receiveShadow",at.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(ei.envMap.value=Ht,ei.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),pr&&(Me.setValue(z,"toneMappingExposure",y.toneMappingExposure),Yt.needsLights&&bh(ei,ea),Ct&&lt.fog===!0&&ct.refreshFogUniforms(ei,Ct),ct.refreshMaterialUniforms(ei,lt,Y,K,yt),Cs.upload(z,Bo(Yt),ei,M)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Cs.upload(z,Bo(Yt),ei,M),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Me.setValue(z,"center",at.center),Me.setValue(z,"modelViewMatrix",at.modelViewMatrix),Me.setValue(z,"normalMatrix",at.normalMatrix),Me.setValue(z,"modelMatrix",at.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Ye=lt.uniformsGroups;for(let ia=0,Th=Ye.length;ia<Th;ia++)if(Z.isWebGL2){const Ho=Ye[ia];G.update(Ho,ti),G.bind(Ho,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function bh(I,rt){I.ambientLightColor.needsUpdate=rt,I.lightProbe.needsUpdate=rt,I.directionalLights.needsUpdate=rt,I.directionalLightShadows.needsUpdate=rt,I.pointLights.needsUpdate=rt,I.pointLightShadows.needsUpdate=rt,I.spotLights.needsUpdate=rt,I.spotLightShadows.needsUpdate=rt,I.rectAreaLights.needsUpdate=rt,I.hemisphereLights.needsUpdate=rt}function wh(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,rt,ot){R.get(I.texture).__webglTexture=rt,R.get(I.depthTexture).__webglTexture=ot;const lt=R.get(I);lt.__hasExternalTextures=!0,lt.__hasExternalTextures&&(lt.__autoAllocateDepthBuffer=ot===void 0,lt.__autoAllocateDepthBuffer||x.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,rt){const ot=R.get(I);ot.__webglFramebuffer=rt,ot.__useDefaultFramebuffer=rt===void 0},this.setRenderTarget=function(I,rt=0,ot=0){T=I,A=rt,P=ot;let lt=!0,at=null,Ct=!1,Ut=!1;if(I){const Ht=R.get(I);Ht.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(z.FRAMEBUFFER,null),lt=!1):Ht.__webglFramebuffer===void 0?M.setupRenderTarget(I):Ht.__hasExternalTextures&&M.rebindTextures(I,R.get(I.texture).__webglTexture,R.get(I.depthTexture).__webglTexture);const qt=I.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ut=!0);const Vt=R.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Vt[rt])?at=Vt[rt][ot]:at=Vt[rt],Ct=!0):Z.isWebGL2&&I.samples>0&&M.useMultisampledRTT(I)===!1?at=R.get(I).__webglMultisampledFramebuffer:Array.isArray(Vt)?at=Vt[ot]:at=Vt,w.copy(I.viewport),L.copy(I.scissor),C=I.scissorTest}else w.copy(it).multiplyScalar(Y).floor(),L.copy(H).multiplyScalar(Y).floor(),C=q;if(B.bindFramebuffer(z.FRAMEBUFFER,at)&&Z.drawBuffers&&lt&&B.drawBuffers(I,at),B.viewport(w),B.scissor(L),B.setScissorTest(C),Ct){const Ht=R.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ht.__webglTexture,ot)}else if(Ut){const Ht=R.get(I.texture),qt=rt||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ht.__webglTexture,ot||0,qt)}k=-1},this.readRenderTargetPixels=function(I,rt,ot,lt,at,Ct,Ut){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=R.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){B.bindFramebuffer(z.FRAMEBUFFER,Bt);try{const Ht=I.texture,qt=Ht.format,Vt=Ht.type;if(qt!==sn&&Tt.convert(qt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Vt===Fr&&(x.has("EXT_color_buffer_half_float")||Z.isWebGL2&&x.has("EXT_color_buffer_float"));if(Vt!==$n&&Tt.convert(Vt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===An&&(Z.isWebGL2||x.has("OES_texture_float")||x.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=I.width-lt&&ot>=0&&ot<=I.height-at&&z.readPixels(rt,ot,lt,at,Tt.convert(qt),Tt.convert(Vt),Ct)}finally{const Ht=T!==null?R.get(T).__webglFramebuffer:null;B.bindFramebuffer(z.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(I,rt,ot=0){const lt=Math.pow(2,-ot),at=Math.floor(rt.image.width*lt),Ct=Math.floor(rt.image.height*lt);M.setTexture2D(rt,0),z.copyTexSubImage2D(z.TEXTURE_2D,ot,0,0,I.x,I.y,at,Ct),B.unbindTexture()},this.copyTextureToTexture=function(I,rt,ot,lt=0){const at=rt.image.width,Ct=rt.image.height,Ut=Tt.convert(ot.format),Bt=Tt.convert(ot.type);M.setTexture2D(ot,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,ot.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,ot.unpackAlignment),rt.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,lt,I.x,I.y,at,Ct,Ut,Bt,rt.image.data):rt.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,lt,I.x,I.y,rt.mipmaps[0].width,rt.mipmaps[0].height,Ut,rt.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,lt,I.x,I.y,Ut,Bt,rt.image),lt===0&&ot.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(I,rt,ot,lt,at=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=I.max.x-I.min.x+1,Ut=I.max.y-I.min.y+1,Bt=I.max.z-I.min.z+1,Ht=Tt.convert(lt.format),qt=Tt.convert(lt.type);let Vt;if(lt.isData3DTexture)M.setTexture3D(lt,0),Vt=z.TEXTURE_3D;else if(lt.isDataArrayTexture||lt.isCompressedArrayTexture)M.setTexture2DArray(lt,0),Vt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,lt.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,lt.unpackAlignment);const Wt=z.getParameter(z.UNPACK_ROW_LENGTH),he=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ge=z.getParameter(z.UNPACK_SKIP_PIXELS),_e=z.getParameter(z.UNPACK_SKIP_ROWS),xn=z.getParameter(z.UNPACK_SKIP_IMAGES),re=ot.isCompressedTexture?ot.mipmaps[at]:ot.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,re.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,re.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,I.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,I.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,I.min.z),ot.isDataTexture||ot.isData3DTexture?z.texSubImage3D(Vt,at,rt.x,rt.y,rt.z,Ct,Ut,Bt,Ht,qt,re.data):ot.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Vt,at,rt.x,rt.y,rt.z,Ct,Ut,Bt,Ht,re.data)):z.texSubImage3D(Vt,at,rt.x,rt.y,rt.z,Ct,Ut,Bt,Ht,qt,re),z.pixelStorei(z.UNPACK_ROW_LENGTH,Wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,he),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ge),z.pixelStorei(z.UNPACK_SKIP_ROWS,_e),z.pixelStorei(z.UNPACK_SKIP_IMAGES,xn),at===0&&lt.generateMipmaps&&z.generateMipmap(Vt),B.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?M.setTextureCube(I,0):I.isData3DTexture?M.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?M.setTexture2DArray(I,0):M.setTexture2D(I,0),B.unbindTexture()},this.resetState=function(){A=0,P=0,T=null,B.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===yo?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===qs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?di:lu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===di?fe:Ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class j_ extends Ru{}j_.prototype.isWebGL1Renderer=!0;class Z_ extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class K_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return fi("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ce=new X;class Bs{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Bs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pu extends Mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vi;const yr=new X,Wi=new X,Xi=new X,qi=new mt,Sr=new mt,Lu=new ie,ps=new X,Mr=new X,ms=new X,cc=new mt,Ia=new mt,uc=new mt;class Yi extends ce{constructor(t=new Pu){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new K_(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Bs(n,3,0,!1)),Vi.setAttribute("uv",new Bs(n,2,3,!1))}this.geometry=Vi,this.material=t,this.center=new mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),Lu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;gs(ps.set(-.5,-.5,0),Xi,o,Wi,r,s),gs(Mr.set(.5,-.5,0),Xi,o,Wi,r,s),gs(ms.set(.5,.5,0),Xi,o,Wi,r,s),cc.set(0,0),Ia.set(1,0),uc.set(1,1);let a=t.ray.intersectTriangle(ps,Mr,ms,!1,yr);if(a===null&&(gs(Mr.set(-.5,.5,0),Xi,o,Wi,r,s),Ia.set(0,1),a=t.ray.intersectTriangle(ps,ms,Mr,!1,yr),a===null))return;const l=t.ray.origin.distanceTo(yr);l<t.near||l>t.far||e.push({distance:l,point:yr.clone(),uv:on.getInterpolation(yr,ps,Mr,ms,cc,Ia,uc,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function gs(i,t,e,n,r,s){qi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Sr.x=s*qi.x-r*qi.y,Sr.y=r*qi.x+s*qi.y):Sr.copy(qi),i.copy(t),i.x+=Sr.x,i.y+=Sr.y,i.applyMatrix4(Lu)}class To extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const hc=new X,dc=new X,fc=new ie,Ua=new js,_s=new Ys;class Du extends ce{constructor(t=new qe,e=new To){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)hc.fromBufferAttribute(e,r-1),dc.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=hc.distanceTo(dc);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),_s.radius+=s,t.ray.intersectsSphere(_s)===!1)return;fc.copy(r).invert(),Ua.copy(t.ray).applyMatrix4(fc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new X,u=new X,p=new X,m=new X,f=this.isLineSegments?2:1,_=n.index,h=n.attributes.position;if(_!==null){const d=Math.max(0,o.start),S=Math.min(_.count,o.start+o.count);for(let y=d,E=S-1;y<E;y+=f){const A=_.getX(y),P=_.getX(y+1);if(c.fromBufferAttribute(h,A),u.fromBufferAttribute(h,P),Ua.distanceSqToSegment(c,u,m,p)>l)continue;m.applyMatrix4(this.matrixWorld);const k=t.ray.origin.distanceTo(m);k<t.near||k>t.far||e.push({distance:k,point:p.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),S=Math.min(h.count,o.start+o.count);for(let y=d,E=S-1;y<E;y+=f){if(c.fromBufferAttribute(h,y),u.fromBufferAttribute(h,y+1),Ua.distanceSqToSegment(c,u,m,p)>l)continue;m.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(m);P<t.near||P>t.far||e.push({distance:P,point:p.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const pc=new X,mc=new X;class $_ extends Du{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)pc.fromBufferAttribute(e,r),mc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+pc.distanceTo(mc);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zs extends Ne{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],m=n[r+1]-u,f=(o-u)/m;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new mt:new X);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new X,r=[],s=[],o=[],a=new X,l=new ie;for(let f=0;f<=t;f++){const _=f/t;r[f]=this.getTangentAt(_,new X)}s[0]=new X,o[0]=new X;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),p=Math.abs(r[0].y),m=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(xe(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(xe(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],f*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ao extends vn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new mt,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=l-this.aX,f=c-this.aY;l=m*u-f*p+this.aX,c=m*p+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class J_ extends Ao{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Co(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,p){let m=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+p)+(l-a)/p;m*=u,f*=u,r(o,a,m,f)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const vs=new X,Na=new Co,Oa=new Co,Fa=new Co;class Q_ extends vn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new X){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(vs.subVectors(r[0],r[1]).add(r[0]),c=vs);const p=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(vs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=vs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(p),f),g=Math.pow(p.distanceToSquared(m),f),h=Math.pow(m.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),h<1e-4&&(h=g),Na.initNonuniformCatmullRom(c.x,p.x,m.x,u.x,_,g,h),Oa.initNonuniformCatmullRom(c.y,p.y,m.y,u.y,_,g,h),Fa.initNonuniformCatmullRom(c.z,p.z,m.z,u.z,_,g,h)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(c.x,p.x,m.x,u.x,this.tension),Oa.initCatmullRom(c.y,p.y,m.y,u.y,this.tension),Fa.initCatmullRom(c.z,p.z,m.z,u.z,this.tension));return n.set(Na.calc(l),Oa.calc(l),Fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new X().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gc(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function t0(i,t){const e=1-i;return e*e*t}function e0(i,t){return 2*(1-i)*i*t}function n0(i,t){return i*i*t}function Lr(i,t,e,n){return t0(i,t)+e0(i,e)+n0(i,n)}function i0(i,t){const e=1-i;return e*e*e*t}function r0(i,t){const e=1-i;return 3*e*e*i*t}function s0(i,t){return 3*(1-i)*i*i*t}function a0(i,t){return i*i*i*t}function Dr(i,t,e,n,r){return i0(i,t)+r0(i,e)+s0(i,n)+a0(i,r)}class Iu extends vn{constructor(t=new mt,e=new mt,n=new mt,r=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new mt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Dr(t,r.x,s.x,o.x,a.x),Dr(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class o0 extends vn{constructor(t=new X,e=new X,n=new X,r=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new X){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Dr(t,r.x,s.x,o.x,a.x),Dr(t,r.y,s.y,o.y,a.y),Dr(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uu extends vn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l0 extends vn{constructor(t=new X,e=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new X){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new X){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nu extends vn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Lr(t,r.x,s.x,o.x),Lr(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class c0 extends vn{constructor(t=new X,e=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new X){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Lr(t,r.x,s.x,o.x),Lr(t,r.y,s.y,o.y),Lr(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ou extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return n.set(gc(a,l.x,c.x,u.x,p.x),gc(a,l.y,c.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new mt().fromArray(r))}return this}}var ho=Object.freeze({__proto__:null,ArcCurve:J_,CatmullRomCurve3:Q_,CubicBezierCurve:Iu,CubicBezierCurve3:o0,EllipseCurve:Ao,LineCurve:Uu,LineCurve3:l0,QuadraticBezierCurve:Nu,QuadraticBezierCurve3:c0,SplineCurve:Ou});class u0 extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ho[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new ho[r.type]().fromJSON(r))}return this}}class fo extends u0{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Uu(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Nu(this.currentPoint.clone(),new mt(t,e),new mt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Iu(this.currentPoint.clone(),new mt(t,e),new mt(n,r),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ou(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new Ao(t,e,n,r,s,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ks extends qe{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],m=[],f=[];let _=0;const g=[],h=n/2;let d=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(m,3)),this.setAttribute("uv",new Te(f,2));function S(){const E=new X,A=new X;let P=0;const T=(e-t)/n;for(let k=0;k<=s;k++){const W=[],w=k/s,L=w*(e-t)+t;for(let C=0;C<=r;C++){const V=C/r,v=V*l+a,O=Math.sin(v),K=Math.cos(v);A.x=L*O,A.y=-w*n+h,A.z=L*K,p.push(A.x,A.y,A.z),E.set(O,T,K).normalize(),m.push(E.x,E.y,E.z),f.push(V,1-w),W.push(_++)}g.push(W)}for(let k=0;k<r;k++)for(let W=0;W<s;W++){const w=g[W][k],L=g[W+1][k],C=g[W+1][k+1],V=g[W][k+1];u.push(w,L,V),u.push(L,C,V),P+=6}c.addGroup(d,P,0),d+=P}function y(E){const A=_,P=new mt,T=new X;let k=0;const W=E===!0?t:e,w=E===!0?1:-1;for(let C=1;C<=r;C++)p.push(0,h*w,0),m.push(0,w,0),f.push(.5,.5),_++;const L=_;for(let C=0;C<=r;C++){const v=C/r*l+a,O=Math.cos(v),K=Math.sin(v);T.x=W*K,T.y=h*w,T.z=W*O,p.push(T.x,T.y,T.z),m.push(0,w,0),P.x=O*.5+.5,P.y=K*.5*w+.5,f.push(P.x,P.y),_++}for(let C=0;C<r;C++){const V=A+C,v=L+C;E===!0?u.push(v,v+1,V):u.push(v+1,v,V),k+=3}c.addGroup(d,k,E===!0?1:2),d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ro extends Ks{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ro(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fu extends fo{constructor(t){super(t),this.uuid=mn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new fo().fromJSON(r))}return this}}const h0={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Bu(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,p,m,f;if(n&&(s=g0(i,t,s,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let _=e;_<r;_+=e)p=i[_],m=i[_+1],p<a&&(a=p),m<l&&(l=m),p>c&&(c=p),m>u&&(u=m);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return zr(s,o,e,a,l,f,0),o}};function Bu(i,t,e,n,r){let s,o;if(r===A0(i,t,e,n)>0)for(s=t;s<e;s+=n)o=_c(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=_c(s,i[s],i[s+1],o);return o&&$s(o,o.next)&&(Hr(o),o=o.next),o}function yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($s(e,e.next)||se(e.prev,e,e.next)===0)){if(Hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zr(i,t,e,n,r,s,o){if(!i)return;!o&&s&&S0(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?f0(i,n,r,s):d0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Hr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=p0(yi(i),t,e),zr(i,t,e,n,r,s,2)):o===2&&m0(i,t,e,n,r,s):zr(yi(i),t,e,n,r,s,1);break}}}function d0(i){const t=i.prev,e=i,n=i.next;if(se(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,p=a<l?a<c?a:c:l<c?l:c,m=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=m&&_.y>=p&&_.y<=f&&er(r,a,s,l,o,c,_.x,_.y)&&se(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function f0(i,t,e,n){const r=i.prev,s=i,o=i.next;if(se(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,p=s.y,m=o.y,f=a<l?a<c?a:c:l<c?l:c,_=u<p?u<m?u:m:p<m?p:m,g=a>l?a>c?a:c:l>c?l:c,h=u>p?u>m?u:m:p>m?p:m,d=po(f,_,t,e,n),S=po(g,h,t,e,n);let y=i.prevZ,E=i.nextZ;for(;y&&y.z>=d&&E&&E.z<=S;){if(y.x>=f&&y.x<=g&&y.y>=_&&y.y<=h&&y!==r&&y!==o&&er(a,u,l,p,c,m,y.x,y.y)&&se(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=f&&E.x<=g&&E.y>=_&&E.y<=h&&E!==r&&E!==o&&er(a,u,l,p,c,m,E.x,E.y)&&se(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=d;){if(y.x>=f&&y.x<=g&&y.y>=_&&y.y<=h&&y!==r&&y!==o&&er(a,u,l,p,c,m,y.x,y.y)&&se(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=S;){if(E.x>=f&&E.x<=g&&E.y>=_&&E.y<=h&&E!==r&&E!==o&&er(a,u,l,p,c,m,E.x,E.y)&&se(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function p0(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!$s(r,s)&&zu(r,n,n.next,s)&&kr(r,s)&&kr(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Hr(n),Hr(n.next),n=i=s),n=n.next}while(n!==i);return yi(n)}function m0(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&b0(o,a)){let l=ku(o,a);o=yi(o,o.next),l=yi(l,l.next),zr(o,t,e,n,r,s,0),zr(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function g0(i,t,e,n){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Bu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(E0(c));for(r.sort(_0),s=0;s<r.length;s++)e=v0(r[s],e);return e}function _0(i,t){return i.x-t.x}function v0(i,t){const e=x0(i,t);if(!e)return t;const n=ku(e,i);return yi(n,n.next),yi(e,e.next)}function x0(i,t){let e=t,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const m=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=s&&m>n&&(n=m,r=e.x<e.next.x?e:e.next,m===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,p;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&er(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(p=Math.abs(o-e.y)/(s-e.x),kr(e,i)&&(p<u||p===u&&(e.x>r.x||e.x===r.x&&y0(r,e)))&&(r=e,u=p)),e=e.next;while(e!==a);return r}function y0(i,t){return se(i.prev,i,t.prev)<0&&se(t.next,i,i.next)<0}function S0(i,t,e,n){let r=i;do r.z===0&&(r.z=po(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,M0(r)}function M0(i){let t,e,n,r,s,o,a,l,c=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(o>1);return i}function po(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function E0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function er(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function b0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!w0(i,t)&&(kr(i,t)&&kr(t,i)&&T0(i,t)&&(se(i.prev,i,t.prev)||se(i,t.prev,t))||$s(i,t)&&se(i.prev,i,i.next)>0&&se(t.prev,t,t.next)>0)}function se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $s(i,t){return i.x===t.x&&i.y===t.y}function zu(i,t,e,n){const r=ys(se(i,t,e)),s=ys(se(i,t,n)),o=ys(se(e,n,i)),a=ys(se(e,n,t));return!!(r!==s&&o!==a||r===0&&xs(i,e,t)||s===0&&xs(i,n,t)||o===0&&xs(e,i,n)||a===0&&xs(e,t,n))}function xs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ys(i){return i>0?1:i<0?-1:0}function w0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&zu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function kr(i,t){return se(i.prev,i,i.next)<0?se(i,t,i.next)>=0&&se(i,i.prev,t)>=0:se(i,t,i.prev)<0||se(i,i.next,t)<0}function T0(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ku(i,t){const e=new mo(i.i,i.x,i.y),n=new mo(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function _c(i,t,e,n){const r=new mo(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A0(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Ir{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Ir.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];vc(t),xc(n,t);let o=t.length;e.forEach(vc);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,xc(n,e[l]);const a=h0.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function vc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ks extends qe{constructor(t=new Fu([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Te(r,3)),this.setAttribute("uv",new Te(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,h=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:C0;let y,E=!1,A,P,T,k;d&&(y=d.getSpacedPoints(u),E=!0,m=!1,A=d.computeFrenetFrames(u,!1),P=new X,T=new X,k=new X),m||(h=0,f=0,_=0,g=0);const W=a.extractPoints(c);let w=W.shape;const L=W.holes;if(!Ir.isClockWise(w)){w=w.reverse();for(let z=0,pt=L.length;z<pt;z++){const x=L[z];Ir.isClockWise(x)&&(L[z]=x.reverse())}}const V=Ir.triangulateShape(w,L),v=w;for(let z=0,pt=L.length;z<pt;z++){const x=L[z];w=w.concat(x)}function O(z,pt,x){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(pt,x)}const K=w.length,Y=V.length;function nt(z,pt,x){let Z,B,D;const R=z.x-pt.x,M=z.y-pt.y,b=x.x-z.x,U=x.y-z.y,F=R*R+M*M,J=R*U-M*b;if(Math.abs(J)>Number.EPSILON){const et=Math.sqrt(F),st=Math.sqrt(b*b+U*U),ct=pt.x-M/et,gt=pt.y+R/et,St=x.x-U/st,Dt=x.y+b/st,ut=((St-ct)*U-(Dt-gt)*b)/(R*U-M*b);Z=ct+R*ut-z.x,B=gt+M*ut-z.y;const zt=Z*Z+B*B;if(zt<=2)return new mt(Z,B);D=Math.sqrt(zt/2)}else{let et=!1;R>Number.EPSILON?b>Number.EPSILON&&(et=!0):R<-Number.EPSILON?b<-Number.EPSILON&&(et=!0):Math.sign(M)===Math.sign(U)&&(et=!0),et?(Z=-M,B=R,D=Math.sqrt(F)):(Z=R,B=M,D=Math.sqrt(F/2))}return new mt(Z/D,B/D)}const j=[];for(let z=0,pt=v.length,x=pt-1,Z=z+1;z<pt;z++,x++,Z++)x===pt&&(x=0),Z===pt&&(Z=0),j[z]=nt(v[z],v[x],v[Z]);const it=[];let H,q=j.concat();for(let z=0,pt=L.length;z<pt;z++){const x=L[z];H=[];for(let Z=0,B=x.length,D=B-1,R=Z+1;Z<B;Z++,D++,R++)D===B&&(D=0),R===B&&(R=0),H[Z]=nt(x[Z],x[D],x[R]);it.push(H),q=q.concat(H)}for(let z=0;z<h;z++){const pt=z/h,x=f*Math.cos(pt*Math.PI/2),Z=_*Math.sin(pt*Math.PI/2)+g;for(let B=0,D=v.length;B<D;B++){const R=O(v[B],j[B],Z);Et(R.x,R.y,-x)}for(let B=0,D=L.length;B<D;B++){const R=L[B];H=it[B];for(let M=0,b=R.length;M<b;M++){const U=O(R[M],H[M],Z);Et(U.x,U.y,-x)}}}const ht=_+g;for(let z=0;z<K;z++){const pt=m?O(w[z],q[z],ht):w[z];E?(T.copy(A.normals[0]).multiplyScalar(pt.x),P.copy(A.binormals[0]).multiplyScalar(pt.y),k.copy(y[0]).add(T).add(P),Et(k.x,k.y,k.z)):Et(pt.x,pt.y,0)}for(let z=1;z<=u;z++)for(let pt=0;pt<K;pt++){const x=m?O(w[pt],q[pt],ht):w[pt];E?(T.copy(A.normals[z]).multiplyScalar(x.x),P.copy(A.binormals[z]).multiplyScalar(x.y),k.copy(y[z]).add(T).add(P),Et(k.x,k.y,k.z)):Et(x.x,x.y,p/u*z)}for(let z=h-1;z>=0;z--){const pt=z/h,x=f*Math.cos(pt*Math.PI/2),Z=_*Math.sin(pt*Math.PI/2)+g;for(let B=0,D=v.length;B<D;B++){const R=O(v[B],j[B],Z);Et(R.x,R.y,p+x)}for(let B=0,D=L.length;B<D;B++){const R=L[B];H=it[B];for(let M=0,b=R.length;M<b;M++){const U=O(R[M],H[M],Z);E?Et(U.x,U.y+y[u-1].y,y[u-1].x+x):Et(U.x,U.y,p+x)}}}$(),tt();function $(){const z=r.length/3;if(m){let pt=0,x=K*pt;for(let Z=0;Z<Y;Z++){const B=V[Z];xt(B[2]+x,B[1]+x,B[0]+x)}pt=u+h*2,x=K*pt;for(let Z=0;Z<Y;Z++){const B=V[Z];xt(B[0]+x,B[1]+x,B[2]+x)}}else{for(let pt=0;pt<Y;pt++){const x=V[pt];xt(x[2],x[1],x[0])}for(let pt=0;pt<Y;pt++){const x=V[pt];xt(x[0]+K*u,x[1]+K*u,x[2]+K*u)}}n.addGroup(z,r.length/3-z,0)}function tt(){const z=r.length/3;let pt=0;yt(v,pt),pt+=v.length;for(let x=0,Z=L.length;x<Z;x++){const B=L[x];yt(B,pt),pt+=B.length}n.addGroup(z,r.length/3-z,1)}function yt(z,pt){let x=z.length;for(;--x>=0;){const Z=x;let B=x-1;B<0&&(B=z.length-1);for(let D=0,R=u+h*2;D<R;D++){const M=K*D,b=K*(D+1),U=pt+Z+M,F=pt+B+M,J=pt+B+b,et=pt+Z+b;_t(U,F,J,et)}}}function Et(z,pt,x){l.push(z),l.push(pt),l.push(x)}function xt(z,pt,x){Rt(z),Rt(pt),Rt(x);const Z=r.length/3,B=S.generateTopUV(n,r,Z-3,Z-2,Z-1);bt(B[0]),bt(B[1]),bt(B[2])}function _t(z,pt,x,Z){Rt(z),Rt(pt),Rt(Z),Rt(pt),Rt(x),Rt(Z);const B=r.length/3,D=S.generateSideWallUV(n,r,B-6,B-3,B-2,B-1);bt(D[0]),bt(D[1]),bt(D[3]),bt(D[1]),bt(D[2]),bt(D[3])}function Rt(z){r.push(l[z*3+0]),r.push(l[z*3+1]),r.push(l[z*3+2])}function bt(z){s.push(z.x),s.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return R0(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new ho[r.type]().fromJSON(r)),new ks(n,t.options)}}const C0={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],u=t[r*3+1];return[new mt(s,o),new mt(a,l),new mt(c,u)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],p=t[n*3+2],m=t[r*3],f=t[r*3+1],_=t[r*3+2],g=t[s*3],h=t[s*3+1],d=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-p),new mt(m,1-_),new mt(g,1-d)]:[new mt(a,1-l),new mt(u,1-p),new mt(f,1-_),new mt(h,1-d)]}};function R0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Hu extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gu extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class P0 extends Gu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ba=new ie,yc=new X,Sc=new X;class L0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yc.setFromMatrixPosition(t.matrixWorld),e.position.copy(yc),Sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sc),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class D0 extends L0{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Po extends Gu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new D0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class I0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Mc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Mc(){return(typeof performance>"u"?Date:performance).now()}class U0{constructor(t,e,n=0,r=1/0){this.ray=new js(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return go(t,this,n,e),n.sort(Ec),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)go(t[r],this,n,e);return n.sort(Ec),n}}function Ec(i,t){return i.distance-t.distance}function go(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)go(r[s],t,e,!0)}}class bc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class N0 extends $_{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new qe;r.setAttribute("position",new Te(e,3)),r.setAttribute("color",new Te(n,3));const s=new To({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,n){const r=new Gt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vo);const wc={type:"change"},za={type:"start"},Tc={type:"end"},Ss=new js,Ac=new Wn,O0=Math.cos(70*hu.DEG2RAD);class F0 extends Si{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",St),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",St),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wc),n.update(),s=r.NONE},this.update=function(){const G=new X,vt=new gn().setFromUnitVectors(t.up,new X(0,1,0)),wt=vt.clone().invert(),It=new X,N=new gn,ft=new X,dt=2*Math.PI;return function(Nt=null){const Kt=n.object.position;G.copy(Kt).sub(n.target),G.applyQuaternion(vt),a.setFromVector3(G),n.autoRotate&&s===r.NONE&&C(w(Nt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Zt=n.minAzimuthAngle,te=n.maxAzimuthAngle;isFinite(Zt)&&isFinite(te)&&(Zt<-Math.PI?Zt+=dt:Zt>Math.PI&&(Zt-=dt),te<-Math.PI?te+=dt:te>Math.PI&&(te-=dt),Zt<=te?a.theta=Math.max(Zt,Math.min(te,a.theta)):a.theta=a.theta>(Zt+te)/2?Math.max(Zt,a.theta):Math.min(te,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?a.radius=it(a.radius):a.radius=it(a.radius*c),G.setFromSpherical(a),G.applyQuaternion(wt),Kt.copy(n.target).add(G),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ye=!1;if(n.zoomToCursor&&P){let $t=null;if(n.object.isPerspectiveCamera){const ue=G.length();$t=it(ue*c);const Ae=ue-$t;n.object.position.addScaledVector(E,Ae),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ue=new X(A.x,A.y,0);ue.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ye=!0;const Ae=new X(A.x,A.y,0);Ae.unproject(n.object),n.object.position.sub(Ae).add(ue),n.object.updateMatrixWorld(),$t=G.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;$t!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar($t).add(n.object.position):(Ss.origin.copy(n.object.position),Ss.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ss.direction))<O0?t.lookAt(n.target):(Ac.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ss.intersectPlane(Ac,n.target))))}else n.object.isOrthographicCamera&&(ye=c!==1,ye&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,P=!1,ye||It.distanceToSquared(n.object.position)>o||8*(1-N.dot(n.object.quaternion))>o||ft.distanceToSquared(n.target)>0?(n.dispatchEvent(wc),It.copy(n.object.position),N.copy(n.object.quaternion),ft.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",zt),n.domElement.removeEventListener("pointerdown",M),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",et),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",U),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",St),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new bc,l=new bc;let c=1;const u=new X,p=new mt,m=new mt,f=new mt,_=new mt,g=new mt,h=new mt,d=new mt,S=new mt,y=new mt,E=new X,A=new mt;let P=!1;const T=[],k={};let W=!1;function w(G){return G!==null?2*Math.PI/60*n.autoRotateSpeed*G:2*Math.PI/60/60*n.autoRotateSpeed}function L(G){const vt=Math.abs(G*.01);return Math.pow(.95,n.zoomSpeed*vt)}function C(G){l.theta-=G}function V(G){l.phi-=G}const v=function(){const G=new X;return function(wt,It){G.setFromMatrixColumn(It,0),G.multiplyScalar(-wt),u.add(G)}}(),O=function(){const G=new X;return function(wt,It){n.screenSpacePanning===!0?G.setFromMatrixColumn(It,1):(G.setFromMatrixColumn(It,0),G.crossVectors(n.object.up,G)),G.multiplyScalar(wt),u.add(G)}}(),K=function(){const G=new X;return function(wt,It){const N=n.domElement;if(n.object.isPerspectiveCamera){const ft=n.object.position;G.copy(ft).sub(n.target);let dt=G.length();dt*=Math.tan(n.object.fov/2*Math.PI/180),v(2*wt*dt/N.clientHeight,n.object.matrix),O(2*It*dt/N.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(v(wt*(n.object.right-n.object.left)/n.object.zoom/N.clientWidth,n.object.matrix),O(It*(n.object.top-n.object.bottom)/n.object.zoom/N.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(G){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function nt(G){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(G,vt){if(!n.zoomToCursor)return;P=!0;const wt=n.domElement.getBoundingClientRect(),It=G-wt.left,N=vt-wt.top,ft=wt.width,dt=wt.height;A.x=It/ft*2-1,A.y=-(N/dt)*2+1,E.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function it(G){return Math.max(n.minDistance,Math.min(n.maxDistance,G))}function H(G){p.set(G.clientX,G.clientY)}function q(G){j(G.clientX,G.clientX),d.set(G.clientX,G.clientY)}function ht(G){_.set(G.clientX,G.clientY)}function $(G){m.set(G.clientX,G.clientY),f.subVectors(m,p).multiplyScalar(n.rotateSpeed);const vt=n.domElement;C(2*Math.PI*f.x/vt.clientHeight),V(2*Math.PI*f.y/vt.clientHeight),p.copy(m),n.update()}function tt(G){S.set(G.clientX,G.clientY),y.subVectors(S,d),y.y>0?Y(L(y.y)):y.y<0&&nt(L(y.y)),d.copy(S),n.update()}function yt(G){g.set(G.clientX,G.clientY),h.subVectors(g,_).multiplyScalar(n.panSpeed),K(h.x,h.y),_.copy(g),n.update()}function Et(G){j(G.clientX,G.clientY),G.deltaY<0?nt(L(G.deltaY)):G.deltaY>0&&Y(L(G.deltaY)),n.update()}function xt(G){let vt=!1;switch(G.code){case n.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,n.keyPanSpeed),vt=!0;break;case n.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,-n.keyPanSpeed),vt=!0;break;case n.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(n.keyPanSpeed,0),vt=!0;break;case n.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(-n.keyPanSpeed,0),vt=!0;break}vt&&(G.preventDefault(),n.update())}function _t(G){if(T.length===1)p.set(G.pageX,G.pageY);else{const vt=Tt(G),wt=.5*(G.pageX+vt.x),It=.5*(G.pageY+vt.y);p.set(wt,It)}}function Rt(G){if(T.length===1)_.set(G.pageX,G.pageY);else{const vt=Tt(G),wt=.5*(G.pageX+vt.x),It=.5*(G.pageY+vt.y);_.set(wt,It)}}function bt(G){const vt=Tt(G),wt=G.pageX-vt.x,It=G.pageY-vt.y,N=Math.sqrt(wt*wt+It*It);d.set(0,N)}function z(G){n.enableZoom&&bt(G),n.enablePan&&Rt(G)}function pt(G){n.enableZoom&&bt(G),n.enableRotate&&_t(G)}function x(G){if(T.length==1)m.set(G.pageX,G.pageY);else{const wt=Tt(G),It=.5*(G.pageX+wt.x),N=.5*(G.pageY+wt.y);m.set(It,N)}f.subVectors(m,p).multiplyScalar(n.rotateSpeed);const vt=n.domElement;C(2*Math.PI*f.x/vt.clientHeight),V(2*Math.PI*f.y/vt.clientHeight),p.copy(m)}function Z(G){if(T.length===1)g.set(G.pageX,G.pageY);else{const vt=Tt(G),wt=.5*(G.pageX+vt.x),It=.5*(G.pageY+vt.y);g.set(wt,It)}h.subVectors(g,_).multiplyScalar(n.panSpeed),K(h.x,h.y),_.copy(g)}function B(G){const vt=Tt(G),wt=G.pageX-vt.x,It=G.pageY-vt.y,N=Math.sqrt(wt*wt+It*It);S.set(0,N),y.set(0,Math.pow(S.y/d.y,n.zoomSpeed)),Y(y.y),d.copy(S);const ft=(G.pageX+vt.x)*.5,dt=(G.pageY+vt.y)*.5;j(ft,dt)}function D(G){n.enableZoom&&B(G),n.enablePan&&Z(G)}function R(G){n.enableZoom&&B(G),n.enableRotate&&x(G)}function M(G){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(G.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",U)),kt(G),G.pointerType==="touch"?Dt(G):F(G))}function b(G){n.enabled!==!1&&(G.pointerType==="touch"?ut(G):J(G))}function U(G){switch(At(G),T.length){case 0:n.domElement.releasePointerCapture(G.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",U),n.dispatchEvent(Tc),s=r.NONE;break;case 1:const vt=T[0],wt=k[vt];Dt({pointerId:vt,pageX:wt.x,pageY:wt.y});break}}function F(G){let vt;switch(G.button){case 0:vt=n.mouseButtons.LEFT;break;case 1:vt=n.mouseButtons.MIDDLE;break;case 2:vt=n.mouseButtons.RIGHT;break;default:vt=-1}switch(vt){case wi.DOLLY:if(n.enableZoom===!1)return;q(G),s=r.DOLLY;break;case wi.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enablePan===!1)return;ht(G),s=r.PAN}else{if(n.enableRotate===!1)return;H(G),s=r.ROTATE}break;case wi.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enableRotate===!1)return;H(G),s=r.ROTATE}else{if(n.enablePan===!1)return;ht(G),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(za)}function J(G){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;$(G);break;case r.DOLLY:if(n.enableZoom===!1)return;tt(G);break;case r.PAN:if(n.enablePan===!1)return;yt(G);break}}function et(G){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(G.preventDefault(),n.dispatchEvent(za),Et(st(G)),n.dispatchEvent(Tc))}function st(G){const vt=G.deltaMode,wt={clientX:G.clientX,clientY:G.clientY,deltaY:G.deltaY};switch(vt){case 1:wt.deltaY*=16;break;case 2:wt.deltaY*=100;break}return G.ctrlKey&&!W&&(wt.deltaY*=10),wt}function ct(G){G.key==="Control"&&(W=!0,n.domElement.getRootNode().addEventListener("keyup",gt,{passive:!0,capture:!0}))}function gt(G){G.key==="Control"&&(W=!1,n.domElement.getRootNode().removeEventListener("keyup",gt,{passive:!0,capture:!0}))}function St(G){n.enabled===!1||n.enablePan===!1||xt(G)}function Dt(G){switch(Pt(G),T.length){case 1:switch(n.touches.ONE){case Ti.ROTATE:if(n.enableRotate===!1)return;_t(G),s=r.TOUCH_ROTATE;break;case Ti.PAN:if(n.enablePan===!1)return;Rt(G),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Ti.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(G),s=r.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(G),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(za)}function ut(G){switch(Pt(G),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;x(G),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Z(G),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(G),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;R(G),n.update();break;default:s=r.NONE}}function zt(G){n.enabled!==!1&&G.preventDefault()}function kt(G){T.push(G.pointerId)}function At(G){delete k[G.pointerId];for(let vt=0;vt<T.length;vt++)if(T[vt]==G.pointerId){T.splice(vt,1);return}}function Pt(G){let vt=k[G.pointerId];vt===void 0&&(vt=new mt,k[G.pointerId]=vt),vt.set(G.pageX,G.pageY)}function Tt(G){const vt=G.pointerId===T[0]?T[1]:T[0];return k[vt]}n.domElement.addEventListener("contextmenu",zt),n.domElement.addEventListener("pointerdown",M),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",et,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ct,{passive:!0,capture:!0}),this.update()}}class B0 extends ce{constructor(t,e){super(),this.isViewHelper=!0,this.animating=!1,this.center=new X;const n=new Gt("#ff3653"),r=new Gt("#8adb00"),s=new Gt("#2c8fff"),o=[],a=new U0,l=new mt,c=new ce,u=new bo(-2,2,2,-2,0,4);u.position.set(0,0,2);const p=new Un(.8,.05,.05).translate(.4,0,0),m=new le(p,O(n)),f=new le(p,O(r)),_=new le(p,O(s));f.rotation.z=Math.PI/2,_.rotation.y=-Math.PI/2,this.add(m),this.add(_),this.add(f);const g=new Yi(K(n,"X"));g.userData.type="posX";const h=new Yi(K(r,"Y"));h.userData.type="posY";const d=new Yi(K(s,"Z"));d.userData.type="posZ";const S=new Yi(K(n));S.userData.type="negX";const y=new Yi(K(r));y.userData.type="negY";const E=new Yi(K(s));E.userData.type="negZ",g.position.x=1,h.position.y=1,d.position.z=1,S.position.x=-1,S.scale.setScalar(.8),y.position.y=-1,y.scale.setScalar(.8),E.position.z=-1,E.scale.setScalar(.8),this.add(g),this.add(h),this.add(d),this.add(S),this.add(y),this.add(E),o.push(g),o.push(h),o.push(d),o.push(S),o.push(y),o.push(E);const A=new X,P=128,T=2*Math.PI;this.render=function(Y){this.quaternion.copy(t.quaternion).invert(),this.updateMatrixWorld(),A.set(0,0,1),A.applyQuaternion(t.quaternion),A.x>=0?(g.material.opacity=1,S.material.opacity=.5):(g.material.opacity=.5,S.material.opacity=1),A.y>=0?(h.material.opacity=1,y.material.opacity=.5):(h.material.opacity=.5,y.material.opacity=1),A.z>=0?(d.material.opacity=1,E.material.opacity=.5):(d.material.opacity=.5,E.material.opacity=1);const nt=e.offsetWidth-P;Y.clearDepth(),Y.getViewport(C),Y.setViewport(nt,0,P,P),Y.render(this,u),Y.setViewport(C.x,C.y,C.z,C.w)};const k=new X,W=new gn,w=new gn,L=new gn,C=new pe;let V=0;this.handleClick=function(Y){if(this.animating===!0)return!1;const nt=e.getBoundingClientRect(),j=nt.left+(e.offsetWidth-P),it=nt.top+(e.offsetHeight-P);l.x=(Y.clientX-j)/(nt.right-j)*2-1,l.y=-((Y.clientY-it)/(nt.bottom-it))*2+1,a.setFromCamera(l,u);const H=a.intersectObjects(o);if(H.length>0){const ht=H[0].object;return v(ht,this.center),this.animating=!0,!0}else return!1},this.update=function(Y){const nt=Y*T;w.rotateTowards(L,nt),t.position.set(0,0,1).applyQuaternion(w).multiplyScalar(V).add(this.center),t.quaternion.rotateTowards(W,nt),w.angleTo(L)===0&&(this.animating=!1)},this.dispose=function(){p.dispose(),m.material.dispose(),f.material.dispose(),_.material.dispose(),g.material.map.dispose(),h.material.map.dispose(),d.material.map.dispose(),S.material.map.dispose(),y.material.map.dispose(),E.material.map.dispose(),g.material.dispose(),h.material.dispose(),d.material.dispose(),S.material.dispose(),y.material.dispose(),E.material.dispose()};function v(Y,nt){switch(Y.userData.type){case"posX":k.set(1,0,0),W.setFromEuler(new hn(0,Math.PI*.5,0));break;case"posY":k.set(0,1,0),W.setFromEuler(new hn(-Math.PI*.5,0,0));break;case"posZ":k.set(0,0,1),W.setFromEuler(new hn);break;case"negX":k.set(-1,0,0),W.setFromEuler(new hn(0,-Math.PI*.5,0));break;case"negY":k.set(0,-1,0),W.setFromEuler(new hn(Math.PI*.5,0,0));break;case"negZ":k.set(0,0,-1),W.setFromEuler(new hn(0,Math.PI,0));break;default:console.error("ViewHelper: Invalid axis.")}V=t.position.distanceTo(nt),k.multiplyScalar(V).add(nt),c.position.copy(nt),c.lookAt(t.position),w.copy(c.quaternion),c.lookAt(k),L.copy(c.quaternion)}function O(Y){return new hr({color:Y,toneMapped:!1})}function K(Y,nt=null){const j=document.createElement("canvas");j.width=64,j.height=64;const it=j.getContext("2d");it.beginPath(),it.arc(32,32,16,0,2*Math.PI),it.closePath(),it.fillStyle=Y.getStyle(),it.fill(),nt!==null&&(it.font="24px Arial",it.textAlign="center",it.fillStyle="#000000",it.fillText(nt,32,41));const H=new zs(j);return new Pu({map:H,toneMapped:!1})}}}class z0 extends ce{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new mt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const ji=new X,Cc=new ie,Rc=new ie,Pc=new X,Lc=new X;class k0{constructor(t={}){const e=this;let n,r,s,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:r}},this.render=function(f,_){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Cc.copy(_.matrixWorldInverse),Rc.multiplyMatrices(_.projectionMatrix,Cc),c(f,f,_),m(f)},this.setSize=function(f,_){n=f,r=_,s=n/2,o=r/2,l.style.width=f+"px",l.style.height=_+"px"};function c(f,_,g){if(f.isCSS2DObject){ji.setFromMatrixPosition(f.matrixWorld),ji.applyMatrix4(Rc);const h=f.visible===!0&&ji.z>=-1&&ji.z<=1&&f.layers.test(g.layers)===!0;if(f.element.style.display=h===!0?"":"none",h===!0){f.onBeforeRender(e,_,g);const S=f.element;S.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(ji.x*s+s)+"px,"+(-ji.y*o+o)+"px)",S.parentNode!==l&&l.appendChild(S),f.onAfterRender(e,_,g)}const d={distanceToCameraSquared:u(g,f)};a.objects.set(f,d)}for(let h=0,d=f.children.length;h<d;h++)c(f.children[h],_,g)}function u(f,_){return Pc.setFromMatrixPosition(f.matrixWorld),Lc.setFromMatrixPosition(_.matrixWorld),Pc.distanceToSquared(Lc)}function p(f){const _=[];return f.traverse(function(g){g.isCSS2DObject&&_.push(g)}),_}function m(f){const _=p(f).sort(function(h,d){if(h.renderOrder!==d.renderOrder)return d.renderOrder-h.renderOrder;const S=a.objects.get(h).distanceToCameraSquared,y=a.objects.get(d).distanceToCameraSquared;return S-y}),g=_.length;for(let h=0,d=_.length;h<d;h++)_[h].element.style.zIndex=g-h}}}const Er=1024,H0=200,Dc=4096;function Vu(i,t,e={}){if(i<=0||t<=0)return{width:Er,height:Er};const n=Math.max(Er,Math.min(e.maxSize??Dc,e.maxSize??Dc)),r=Math.max(50,e.ppi??H0),s=Math.min(2,Math.sqrt(Math.max(1,e.count??1))),o=Math.max(Er,Math.round(i*r*s)),a=Math.max(Er,Math.round(t*r*s)),l=i/t;if(l>=1){let p=Math.min(n,o),m=Math.max(1,Math.round(p/l));return m>n&&(m=n,p=Math.max(1,Math.round(m*l))),{width:p,height:m}}let c=Math.min(n,a),u=Math.max(1,Math.round(c*l));return u>n&&(u=n,c=Math.max(1,Math.round(u/l))),{width:u,height:c}}function G0(i,t,e,n){const{width:r,height:s}=Vu(i,t,n),o=document.createElement("canvas");o.width=r,o.height=s;const a=o.getContext("2d");a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",a.fillStyle="#ffffff",a.fillRect(0,0,r,s),Array.isArray(e)&&(a.fillStyle="#000000",e.forEach(c=>{const u=r/2+c.x/i*r,p=s/2-c.y/t*s,m=c.r/i*r,f=c.r/t*s;a.beginPath(),a.ellipse(u,p,m,f,0,0,Math.PI*2),a.fill()}));const l=new zs(o);return l.colorSpace=fe,l.wrapS=Ue,l.wrapT=Ue,l.needsUpdate=!0,l}function Wu(i,t,e,n){const{width:r,height:s}=Vu(t,e,{maxSize:n==null?void 0:n.maxSize,ppi:n==null?void 0:n.ppi,count:(n==null?void 0:n.count)??(i==null?void 0:i.length)??1}),o=document.createElement("canvas");o.width=r,o.height=s;const a=o.getContext("2d");if(a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",a.fillStyle="#ffffff",a.fillRect(0,0,r,s),!Array.isArray(i)||i.length===0){const p=new zs(o);return p.colorSpace=fe,p}const l=(n==null?void 0:n.layout)??"horizontal";V0(i,l,r,s,t,e).forEach(p=>{const{entry:m,x:f,y:_,width:g,height:h}=p;if(!(m!=null&&m.image))return;const d=Math.max(1,g),S=Math.max(1,h),y=m.image.width,E=m.image.height,A=Number(m.rotation||0)%360,P=A%180!==0,T=P?E:y,k=P?y:E,W=Math.min(d/T,S/k),w=y*W,L=E*W,C=f+g/2,V=_+h/2;a.save(),a.translate(C,V),a.rotate(A*Math.PI/180),a.drawImage(m.image,-w/2,-L/2,w,L),a.restore()});const u=new zs(o);return u.colorSpace=fe,u.wrapS=Ue,u.wrapT=Ue,u.needsUpdate=!0,u}function V0(i,t,e,n,r,s){return t==="vertical"?X0(i,e,n,r,s):t==="grid"?q0(i,e,n,r,s):W0(i,e,n,r,s)}function Lo(i,t,e,n,r){const s=i.margin??{left:0,right:0,top:0,bottom:0},o=t>0?Math.max(0,s.left)/t*n:0,a=t>0?Math.max(0,s.right)/t*n:0,l=e>0?Math.max(0,s.top)/e*r:0,c=e>0?Math.max(0,s.bottom)/e*r:0;return{leftPx:o,rightPx:a,topPx:l,bottomPx:c}}function Xu(i){if(!(i!=null&&i.image))return 1;const e=Number(i.rotation||0)%360%180!==0,n=e?i.image.height:i.image.width,r=e?i.image.width:i.image.height;return!n||!r?1:n/r}function W0(i,t,e,n,r){const s=i.length;if(s===0)return[];const o=i.map(g=>Lo(g,n,r,t,e)),a=o.reduce((g,h)=>g+h.leftPx+h.rightPx,0),l=Math.max(1,Math.min(...o.map(g=>e-g.topPx-g.bottomPx))),c=i.map(g=>Xu(g)),u=c.reduce((g,h)=>g+h,0),p=Math.max(1,t-a),m=Math.min(l,p/Math.max(.001,u));let f=0;const _=[];for(let g=0;g<s;g+=1){const h=o[g],d=Math.max(1,c[g]*m),S=Math.max(1,e-h.topPx-h.bottomPx),y=h.topPx+(S-m)/2,E=f+h.leftPx;_.push({entry:i[g],x:E,y,width:d,height:m}),f+=h.leftPx+d+h.rightPx}return _}function X0(i,t,e,n,r){const s=i.length;if(s===0)return[];const o=i.map(g=>Lo(g,n,r,t,e)),a=o.reduce((g,h)=>g+h.topPx+h.bottomPx,0),l=Math.max(1,Math.min(...o.map(g=>t-g.leftPx-g.rightPx))),c=i.map(g=>Xu(g)),u=c.reduce((g,h)=>g+(h>0?1/h:0),0),p=Math.max(1,e-a),m=Math.min(l,p/Math.max(.001,u));let f=0;const _=[];for(let g=0;g<s;g+=1){const h=o[g],d=Math.max(1,m/Math.max(.001,c[g])),S=Math.max(1,t-h.leftPx-h.rightPx),y=h.leftPx+(S-m)/2,E=f+h.topPx;_.push({entry:i[g],x:y,y:E,width:m,height:d}),f+=h.topPx+d+h.bottomPx}return _}function q0(i,t,e,n,r){const s=[],l=t/2,c=e/2;for(let u=0;u<i.length;u+=1){const p=Math.floor(u/2),m=u%2,f=i[u],_=Lo(f,n,r,t,e),g=Math.max(1,l-_.leftPx-_.rightPx),h=Math.max(1,c-_.topPx-_.bottomPx),d=m*l+_.leftPx,S=p*c+_.topPx;s.push({entry:f,x:d,y:S,width:g,height:h})}return s}class Y0{parse(t,e={}){e=Object.assign({binary:!1},e);const n=e.binary,r=[];let s=0;t.traverse(function(d){if(d.isMesh){const S=d.geometry,y=S.index,E=S.getAttribute("position");s+=y!==null?y.count/3:E.count/3,r.push({object3d:d,geometry:S})}});let o,a=80;if(n===!0){const d=s*2+s*3*4*4+80+4,S=new ArrayBuffer(d);o=new DataView(S),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const l=new X,c=new X,u=new X,p=new X,m=new X,f=new X;for(let d=0,S=r.length;d<S;d++){const y=r[d].object3d,E=r[d].geometry,A=E.index,P=E.getAttribute("position");if(A!==null)for(let T=0;T<A.count;T+=3){const k=A.getX(T+0),W=A.getX(T+1),w=A.getX(T+2);_(k,W,w,P,y)}else for(let T=0;T<P.count;T+=3){const k=T+0,W=T+1,w=T+2;_(k,W,w,P,y)}}return n===!1&&(o+=`endsolid exported
`),o;function _(d,S,y,E,A){l.fromBufferAttribute(E,d),c.fromBufferAttribute(E,S),u.fromBufferAttribute(E,y),A.isSkinnedMesh===!0&&(A.applyBoneTransform(d,l),A.applyBoneTransform(S,c),A.applyBoneTransform(y,u)),l.applyMatrix4(A.matrixWorld),c.applyMatrix4(A.matrixWorld),u.applyMatrix4(A.matrixWorld),g(l,c,u),h(l),h(c),h(u),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function g(d,S,y){p.subVectors(y,S),m.subVectors(d,S),p.cross(m).normalize(),f.copy(p).normalize(),n===!0?(o.setFloat32(a,f.x,!0),a+=4,o.setFloat32(a,f.y,!0),a+=4,o.setFloat32(a,f.z,!0),a+=4):(o+="	facet normal "+f.x+" "+f.y+" "+f.z+`
`,o+=`		outer loop
`)}function h(d){n===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):o+="			vertex "+d.x+" "+d.y+" "+d.z+`
`}}}var Ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function j0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Es(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var qu={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function o(c,u){if(!r[c]){if(!n[c]){var p=typeof Es=="function"&&Es;if(!u&&p)return p(c,!0);if(a)return a(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var f=r[c]={exports:{}};n[c][0].call(f.exports,function(_){var g=n[c][1][_];return o(g||_)},f,f.exports,e,n,r,s)}return r[c].exports}for(var a=typeof Es=="function"&&Es,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,n,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,u,p,m,f,_,g,h=[],d=0,S=l.length,y=S,E=s.getTypeOf(l)!=="string";d<l.length;)y=S-d,p=E?(c=l[d++],u=d<S?l[d++]:0,d<S?l[d++]:0):(c=l.charCodeAt(d++),u=d<S?l.charCodeAt(d++):0,d<S?l.charCodeAt(d++):0),m=c>>2,f=(3&c)<<4|u>>4,_=1<y?(15&u)<<2|p>>6:64,g=2<y?63&p:64,h.push(a.charAt(m)+a.charAt(f)+a.charAt(_)+a.charAt(g));return h.join("")},r.decode=function(l){var c,u,p,m,f,_,g=0,h=0,d="data:";if(l.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var S,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&y--,l.charAt(l.length-2)===a.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=o.uint8array?new Uint8Array(0|y):new Array(0|y);g<l.length;)c=a.indexOf(l.charAt(g++))<<2|(m=a.indexOf(l.charAt(g++)))>>4,u=(15&m)<<4|(f=a.indexOf(l.charAt(g++)))>>2,p=(3&f)<<6|(_=a.indexOf(l.charAt(g++))),S[h++]=c,f!==64&&(S[h++]=u),_!==64&&(S[h++]=p);return S}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(u,p,m,f,_){this.compressedSize=u,this.uncompressedSize=p,this.crc32=m,this.compression=f,this.compressedContent=_}c.prototype={getContentWorker:function(){var u=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),p=this;return u.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,p,m){return u.pipe(new a).pipe(new l("uncompressedSize")).pipe(p.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",p)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),o=function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var u=0;u<8;u++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l}();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(c,u,p,m){var f=o,_=m+p;c^=-1;for(var g=m;g<_;g++)c=c>>>8^f[255&(c^u[g])];return-1^c}(0|l,a,a.length,0):function(c,u,p,m){var f=o,_=m+p;c^=-1;for(var g=m;g<_;g++)c=c>>>8^f[255&(c^u.charCodeAt(g))];return-1^c}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function u(p,m){l.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=m,this.meta={}}r.magic="\b\0",a.inherits(u,l),u.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,p.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(m){p.push({data:m,meta:p.meta})}},r.compressWorker=function(p){return new u("Deflate",p)},r.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(f,_){var g,h="";for(g=0;g<_;g++)h+=String.fromCharCode(255&f),f>>>=8;return h}function o(f,_,g,h,d,S){var y,E,A=f.file,P=f.compression,T=S!==c.utf8encode,k=a.transformTo("string",S(A.name)),W=a.transformTo("string",c.utf8encode(A.name)),w=A.comment,L=a.transformTo("string",S(w)),C=a.transformTo("string",c.utf8encode(w)),V=W.length!==A.name.length,v=C.length!==w.length,O="",K="",Y="",nt=A.dir,j=A.date,it={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(it.crc32=f.crc32,it.compressedSize=f.compressedSize,it.uncompressedSize=f.uncompressedSize);var H=0;_&&(H|=8),T||!V&&!v||(H|=2048);var q=0,ht=0;nt&&(q|=16),d==="UNIX"?(ht=798,q|=function(tt,yt){var Et=tt;return tt||(Et=yt?16893:33204),(65535&Et)<<16}(A.unixPermissions,nt)):(ht=20,q|=function(tt){return 63&(tt||0)}(A.dosPermissions)),y=j.getUTCHours(),y<<=6,y|=j.getUTCMinutes(),y<<=5,y|=j.getUTCSeconds()/2,E=j.getUTCFullYear()-1980,E<<=4,E|=j.getUTCMonth()+1,E<<=5,E|=j.getUTCDate(),V&&(K=s(1,1)+s(u(k),4)+W,O+="up"+s(K.length,2)+K),v&&(Y=s(1,1)+s(u(L),4)+C,O+="uc"+s(Y.length,2)+Y);var $="";return $+=`
\0`,$+=s(H,2),$+=P.magic,$+=s(y,2),$+=s(E,2),$+=s(it.crc32,4),$+=s(it.compressedSize,4),$+=s(it.uncompressedSize,4),$+=s(k.length,2),$+=s(O.length,2),{fileRecord:p.LOCAL_FILE_HEADER+$+k+O,dirRecord:p.CENTRAL_FILE_HEADER+s(ht,2)+$+s(L.length,2)+"\0\0\0\0"+s(q,4)+s(h,4)+k+O+L}}var a=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),u=e("../crc32"),p=e("../signature");function m(f,_,g,h){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=h,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,l),m.prototype.push=function(f){var _=f.meta.percent||0,g=this.entriesCount,h=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-h-1))/g:100}}))},m.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var _=this.streamFiles&&!f.file.dir;if(_){var g=o(f,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(f){this.accumulate=!1;var _=this.streamFiles&&!f.file.dir,g=o(f,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:function(h){return p.DATA_DESCRIPTOR+s(h.crc32,4)+s(h.compressedSize,4)+s(h.uncompressedSize,4)}(f),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var f=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-f,h=function(d,S,y,E,A){var P=a.transformTo("string",A(E));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(d,2)+s(d,2)+s(S,4)+s(y,4)+s(P.length,2)+P}(this.dirRecords.length,g,f,this.zipComment,this.encodeFileName);this.push({data:h,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(f){this._sources.push(f);var _=this;return f.on("data",function(g){_.processChunk(g)}),f.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),f.on("error",function(g){_.error(g)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(f){var _=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var g=0;g<_.length;g++)try{_[g].error(f)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,_=0;_<f.length;_++)f[_].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,c){var u=new o(l.streamFiles,c,l.platform,l.encodeFileName),p=0;try{a.forEach(function(m,f){p++;var _=function(S,y){var E=S||y,A=s[E];if(!A)throw new Error(E+" is not a valid compression method !");return A}(f.options.compression,l.compression),g=f.options.compressionOptions||l.compressionOptions||{},h=f.dir,d=f.date;f._compressWorker(_,g).withStreamInfo("file",{name:m,dir:h,date:d,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(u)}),u.entriesCount=p}catch(m){u.error(m)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),u=e("./nodejsUtils");function p(m){return new o.Promise(function(f,_){var g=m.decompressed.getContentWorker().pipe(new c);g.on("error",function(h){_(h)}).on("end",function(){g.streamInfo.crc32!==m.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}n.exports=function(m,f){var _=this;return f=s.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),u.isNode&&u.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,f.optimizedBinaryString,f.base64).then(function(g){var h=new l(f);return h.load(g),h}).then(function(g){var h=[o.Promise.resolve(g)],d=g.files;if(f.checkCRC32)for(var S=0;S<d.length;S++)h.push(p(d[S]));return o.Promise.all(h)}).then(function(g){for(var h=g.shift(),d=h.files,S=0;S<d.length;S++){var y=d[S],E=y.fileNameStr,A=s.resolve(y.fileNameStr);_.file(A,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:f.createFolders}),y.dir||(_.file(A).unsafeOriginalName=E)}return h.zipComment.length&&(_.comment=h.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function o(a,l,c){s.call(this,l),this._helper=a;var u=this;a.on("data",function(p,m){u.push(p)||u._helper.pause(),c&&c(m)}).on("error",function(p){u.emit("error",p)}).on("end",function(){u.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(A,P,T){var k,W=a.getTypeOf(P),w=a.extend(T||{},u);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(A=d(A)),w.createFolders&&(k=h(A))&&S.call(this,k,!0);var L=W==="string"&&w.binary===!1&&w.base64===!1;T&&T.binary!==void 0||(w.binary=!L),(P instanceof p&&P.uncompressedSize===0||w.dir||!P||P.length===0)&&(w.base64=!1,w.binary=!0,P="",w.compression="STORE",W="string");var C=null;C=P instanceof p||P instanceof l?P:_.isNode&&_.isStream(P)?new g(A,P):a.prepareContent(A,P,w.binary,w.optimizedBinaryString,w.base64);var V=new m(A,C,w);this.files[A]=V}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),u=e("./defaults"),p=e("./compressedObject"),m=e("./zipObject"),f=e("./generate"),_=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),h=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var P=A.lastIndexOf("/");return 0<P?A.substring(0,P):""},d=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},S=function(A,P){return P=P!==void 0?P:u.createFolders,A=d(A),this.files[A]||s.call(this,A,null,{dir:!0,createFolders:P}),this.files[A]};function y(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var P,T,k;for(P in this.files)k=this.files[P],(T=P.slice(this.root.length,P.length))&&P.slice(0,this.root.length)===this.root&&A(T,k)},filter:function(A){var P=[];return this.forEach(function(T,k){A(T,k)&&P.push(k)}),P},file:function(A,P,T){if(arguments.length!==1)return A=this.root+A,s.call(this,A,P,T),this;if(y(A)){var k=A;return this.filter(function(w,L){return!L.dir&&k.test(w)})}var W=this.files[this.root+A];return W&&!W.dir?W:null},folder:function(A){if(!A)return this;if(y(A))return this.filter(function(W,w){return w.dir&&A.test(W)});var P=this.root+A,T=S.call(this,P),k=this.clone();return k.root=T.name,k},remove:function(A){A=this.root+A;var P=this.files[A];if(P||(A.slice(-1)!=="/"&&(A+="/"),P=this.files[A]),P&&!P.dir)delete this.files[A];else for(var T=this.filter(function(W,w){return w.name.slice(0,A.length)===A}),k=0;k<T.length;k++)delete this.files[T[k].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var P,T={};try{if((T=a.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=T.type.toLowerCase(),T.compression=T.compression.toUpperCase(),T.type==="binarystring"&&(T.type="string"),!T.type)throw new Error("No output type specified.");a.checkSupport(T.type),T.platform!=="darwin"&&T.platform!=="freebsd"&&T.platform!=="linux"&&T.platform!=="sunos"||(T.platform="UNIX"),T.platform==="win32"&&(T.platform="DOS");var k=T.comment||this.comment||"";P=f.generateWorker(this,T,k)}catch(W){(P=new l("error")).error(W)}return new c(P,T.type||"string",T.mimeType)},generateAsync:function(A,P){return this.generateInternalStream(A).accumulate(P)},generateNodeStream:function(A,P){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(P)}};n.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),u=a.charCodeAt(2),p=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===u&&this.data[m+3]===p)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),u=a.charCodeAt(2),p=a.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&u===m[2]&&p===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),u=e("./Uint8ArrayReader");n.exports=function(p){var m=s.getTypeOf(p);return s.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new c(p):o.uint8array?new u(s.transformTo("uint8array",p)):new a(s.transformTo("array",p)):new l(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=s.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),c=e("../support"),u=e("../external"),p=null;if(c.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(_,g){return new u.Promise(function(h,d){var S=[],y=_._internalType,E=_._outputType,A=_._mimeType;_.on("data",function(P,T){S.push(P),g&&g(T)}).on("error",function(P){S=[],d(P)}).on("end",function(){try{var P=function(T,k,W){switch(T){case"blob":return s.newBlob(s.transformTo("arraybuffer",k),W);case"base64":return l.encode(k);default:return s.transformTo(T,k)}}(E,function(T,k){var W,w=0,L=null,C=0;for(W=0;W<k.length;W++)C+=k[W].length;switch(T){case"string":return k.join("");case"array":return Array.prototype.concat.apply([],k);case"uint8array":for(L=new Uint8Array(C),W=0;W<k.length;W++)L.set(k[W],w),w+=k[W].length;return L;case"nodebuffer":return Buffer.concat(k);default:throw new Error("concat : unsupported type '"+T+"'")}}(y,S),A);h(P)}catch(T){d(T)}S=[]}).resume()})}function f(_,g,h){var d=g;switch(g){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=g,this._mimeType=h,s.checkSupport(d),this._worker=_.pipe(new o(d)),_.lock()}catch(S){this._worker=new a("error"),this._worker.error(S)}}f.prototype={accumulate:function(_){return m(this,_)},on:function(_,g){var h=this;return _==="data"?this._worker.on(_,function(d){g.call(h,d.data,d.meta)}):this._worker.on(_,function(){s.delay(g,arguments,h)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function p(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}r.utf8encode=function(f){return o.nodebuffer?a.newBufferFrom(f,"utf-8"):function(_){var g,h,d,S,y,E=_.length,A=0;for(S=0;S<E;S++)(64512&(h=_.charCodeAt(S)))==55296&&S+1<E&&(64512&(d=_.charCodeAt(S+1)))==56320&&(h=65536+(h-55296<<10)+(d-56320),S++),A+=h<128?1:h<2048?2:h<65536?3:4;for(g=o.uint8array?new Uint8Array(A):new Array(A),S=y=0;y<A;S++)(64512&(h=_.charCodeAt(S)))==55296&&S+1<E&&(64512&(d=_.charCodeAt(S+1)))==56320&&(h=65536+(h-55296<<10)+(d-56320),S++),h<128?g[y++]=h:(h<2048?g[y++]=192|h>>>6:(h<65536?g[y++]=224|h>>>12:(g[y++]=240|h>>>18,g[y++]=128|h>>>12&63),g[y++]=128|h>>>6&63),g[y++]=128|63&h);return g}(f)},r.utf8decode=function(f){return o.nodebuffer?s.transformTo("nodebuffer",f).toString("utf-8"):function(_){var g,h,d,S,y=_.length,E=new Array(2*y);for(g=h=0;g<y;)if((d=_[g++])<128)E[h++]=d;else if(4<(S=c[d]))E[h++]=65533,g+=S-1;else{for(d&=S===2?31:S===3?15:7;1<S&&g<y;)d=d<<6|63&_[g++],S--;1<S?E[h++]=65533:d<65536?E[h++]=d:(d-=65536,E[h++]=55296|d>>10&1023,E[h++]=56320|1023&d)}return E.length!==h&&(E.subarray?E=E.subarray(0,h):E.length=h),s.applyFromCharCode(E)}(f=s.transformTo(o.uint8array?"uint8array":"array",f))},s.inherits(p,l),p.prototype.processChunk=function(f){var _=s.transformTo(o.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var h=function(S,y){var E;for((y=y||S.length)>S.length&&(y=S.length),E=y-1;0<=E&&(192&S[E])==128;)E--;return E<0||E===0?y:E+c[S[E]]>y?E:y}(_),d=_;h!==_.length&&(o.uint8array?(d=_.subarray(0,h),this.leftOver=_.subarray(h,_.length)):(d=_.slice(0,h),this.leftOver=_.slice(h,_.length))),this.push({data:r.utf8decode(d),meta:f.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=p,s.inherits(m,l),m.prototype.processChunk=function(f){this.push({data:r.utf8encode(f.data),meta:f.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function c(g){return g}function u(g,h){for(var d=0;d<g.length;++d)h[d]=255&g.charCodeAt(d);return h}e("setimmediate"),r.newBlob=function(g,h){r.checkSupport("blob");try{return new Blob([g],{type:h})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(g),d.getBlob(h)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(g,h,d){var S=[],y=0,E=g.length;if(E<=d)return String.fromCharCode.apply(null,g);for(;y<E;)h==="array"||h==="nodebuffer"?S.push(String.fromCharCode.apply(null,g.slice(y,Math.min(y+d,E)))):S.push(String.fromCharCode.apply(null,g.subarray(y,Math.min(y+d,E)))),y+=d;return S.join("")},stringifyByChar:function(g){for(var h="",d=0;d<g.length;d++)h+=String.fromCharCode(g[d]);return h},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function m(g){var h=65536,d=r.getTypeOf(g),S=!0;if(d==="uint8array"?S=p.applyCanBeUsed.uint8array:d==="nodebuffer"&&(S=p.applyCanBeUsed.nodebuffer),S)for(;1<h;)try{return p.stringifyByChunk(g,d,h)}catch{h=Math.floor(h/2)}return p.stringifyByChar(g)}function f(g,h){for(var d=0;d<g.length;d++)h[d]=g[d];return h}r.applyFromCharCode=m;var _={};_.string={string:c,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return u(g,new Uint8Array(g.length))},nodebuffer:function(g){return u(g,a.allocBuffer(g.length))}},_.array={string:m,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},_.arraybuffer={string:function(g){return m(new Uint8Array(g))},array:function(g){return f(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:m,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return a.newBufferFrom(g)}},_.nodebuffer={string:m,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return f(g,new Uint8Array(g.length))},nodebuffer:c},r.transformTo=function(g,h){if(h=h||"",!g)return h;r.checkSupport(g);var d=r.getTypeOf(h);return _[d][g](h)},r.resolve=function(g){for(var h=g.split("/"),d=[],S=0;S<h.length;S++){var y=h[S];y==="."||y===""&&S!==0&&S!==h.length-1||(y===".."?d.pop():d.push(y))}return d.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var h,d,S="";for(d=0;d<(g||"").length;d++)S+="\\x"+((h=g.charCodeAt(d))<16?"0":"")+h.toString(16).toUpperCase();return S},r.delay=function(g,h,d){setImmediate(function(){g.apply(d||null,h||[])})},r.inherits=function(g,h){function d(){}d.prototype=h.prototype,g.prototype=new d},r.extend=function(){var g,h,d={};for(g=0;g<arguments.length;g++)for(h in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],h)&&d[h]===void 0&&(d[h]=arguments[g][h]);return d},r.prepareContent=function(g,h,d,S,y){return l.Promise.resolve(h).then(function(E){return s.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new l.Promise(function(A,P){var T=new FileReader;T.onload=function(k){A(k.target.result)},T.onerror=function(k){P(k.target.error)},T.readAsArrayBuffer(E)}):E}).then(function(E){var A=r.getTypeOf(E);return A?(A==="arraybuffer"?E=r.transformTo("uint8array",E):A==="string"&&(y?E=o.decode(E):d&&S!==!0&&(E=function(P){return u(P,s.uint8array?new Uint8Array(P.length):new Array(P.length))}(E))),E):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),c=e("./support");function u(p){this.files=[],this.loadOptions=p}u.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(p)+")")}},isSignature:function(p,m){var f=this.reader.index;this.reader.setIndex(p);var _=this.reader.readString(4)===m;return this.reader.setIndex(f),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",f=o.transformTo(m,p);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,m,f,_=this.zip64EndOfCentralSize-44;0<_;)p=this.reader.readInt(2),m=this.reader.readInt(4),f=this.reader.readData(m),this.zip64ExtensibleData[p]={id:p,length:m,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,m;for(p=0;p<this.files.length;p++)m=this.files[p],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(p=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var m=p;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var _=m-f;if(0<_)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(p){this.reader=s(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),u=e("./compressions"),p=e("./support");function m(f,_){this.options=f,this.loadOptions=_}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var _,g;if(f.skip(22),this.fileNameLength=f.readInt(2),g=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(h){for(var d in u)if(Object.prototype.hasOwnProperty.call(u,d)&&u[d].magic===h)return u[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var _=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(_),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var _,g,h,d=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<d;)_=f.readInt(2),g=f.readInt(2),h=f.readData(g),this.extraFields[_]={id:_,length:g,value:h};f.setIndex(d)},handleUTF8:function(){var f=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=o.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var h=this.findExtraFieldUnicodeComment();if(h!==null)this.fileCommentStr=h;else{var d=o.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var _=s(f.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var _=s(f.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(f.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(_,g,h){this.name=_,this.dir=h.dir,this.date=h.date,this.comment=h.comment,this.unixPermissions=h.unixPermissions,this.dosPermissions=h.dosPermissions,this._data=g,this._dataBinary=h.binary,this.options={compression:h.compression,compressionOptions:h.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),u=e("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,h="string";try{if(!_)throw new Error("No output type specified.");var d=(h=_.toLowerCase())==="string"||h==="text";h!=="binarystring"&&h!=="text"||(h="string"),g=this._decompressWorker();var S=!this._dataBinary;S&&!d&&(g=g.pipe(new l.Utf8EncodeWorker)),!S&&d&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(y){(g=new u("error")).error(y)}return new o(g,h,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var h=this._decompressWorker();return this._dataBinary||(h=h.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(h,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new a(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<p.length;f++)s.prototype[p[f]]=m;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,u=new l(_),p=s.document.createTextNode("");u.observe(p,{characterData:!0}),o=function(){p.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var m=new s.MessageChannel;m.port1.onmessage=_,o=function(){m.port2.postMessage(0)}}var f=[];function _(){var g,h;a=!0;for(var d=f.length;d;){for(h=f,f=[],g=-1;++g<d;)h[g]();d=f.length}a=!1}n.exports=function(g){f.push(g)!==1||a||o()}}).call(this,typeof Ms<"u"?Ms:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function p(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,d!==o&&g(this,d)}function m(d,S,y){this.promise=d,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function f(d,S,y){s(function(){var E;try{E=S(y)}catch(A){return a.reject(d,A)}E===d?a.reject(d,new TypeError("Cannot resolve promise with itself")):a.resolve(d,E)})}function _(d){var S=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof S=="function")return function(){S.apply(d,arguments)}}function g(d,S){var y=!1;function E(T){y||(y=!0,a.reject(d,T))}function A(T){y||(y=!0,a.resolve(d,T))}var P=h(function(){S(A,E)});P.status==="error"&&E(P.value)}function h(d,S){var y={};try{y.value=d(S),y.status="success"}catch(E){y.status="error",y.value=E}return y}(n.exports=p).prototype.finally=function(d){if(typeof d!="function")return this;var S=this.constructor;return this.then(function(y){return S.resolve(d()).then(function(){return y})},function(y){return S.resolve(d()).then(function(){throw y})})},p.prototype.catch=function(d){return this.then(null,d)},p.prototype.then=function(d,S){if(typeof d!="function"&&this.state===c||typeof S!="function"&&this.state===l)return this;var y=new this.constructor(o);return this.state!==u?f(y,this.state===c?d:S,this.outcome):this.queue.push(new m(y,d,S)),y},m.prototype.callFulfilled=function(d){a.resolve(this.promise,d)},m.prototype.otherCallFulfilled=function(d){f(this.promise,this.onFulfilled,d)},m.prototype.callRejected=function(d){a.reject(this.promise,d)},m.prototype.otherCallRejected=function(d){f(this.promise,this.onRejected,d)},a.resolve=function(d,S){var y=h(_,S);if(y.status==="error")return a.reject(d,y.value);var E=y.value;if(E)g(d,E);else{d.state=c,d.outcome=S;for(var A=-1,P=d.queue.length;++A<P;)d.queue[A].callFulfilled(S)}return d},a.reject=function(d,S){d.state=l,d.outcome=S;for(var y=-1,E=d.queue.length;++y<E;)d.queue[y].callRejected(S);return d},p.resolve=function(d){return d instanceof this?d:a.resolve(new this(o),d)},p.reject=function(d){var S=new this(o);return a.reject(S,d)},p.all=function(d){var S=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=d.length,E=!1;if(!y)return this.resolve([]);for(var A=new Array(y),P=0,T=-1,k=new this(o);++T<y;)W(d[T],T);return k;function W(w,L){S.resolve(w).then(function(C){A[L]=C,++P!==y||E||(E=!0,a.resolve(k,A))},function(C){E||(E=!0,a.reject(k,C))})}},p.race=function(d){var S=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=d.length,E=!1;if(!y)return this.resolve([]);for(var A=-1,P=new this(o);++A<y;)T=d[A],S.resolve(T).then(function(k){E||(E=!0,a.resolve(P,k))},function(k){E||(E=!0,a.reject(P,k))});var T;return P}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),u=Object.prototype.toString,p=0,m=-1,f=0,_=8;function g(d){if(!(this instanceof g))return new g(d);this.options=o.assign({level:m,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},d||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var y=s.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(y!==p)throw new Error(l[y]);if(S.header&&s.deflateSetHeader(this.strm,S.header),S.dictionary){var E;if(E=typeof S.dictionary=="string"?a.string2buf(S.dictionary):u.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(y=s.deflateSetDictionary(this.strm,E))!==p)throw new Error(l[y]);this._dict_set=!0}}function h(d,S){var y=new g(S);if(y.push(d,!0),y.err)throw y.msg||l[y.err];return y.result}g.prototype.push=function(d,S){var y,E,A=this.strm,P=this.options.chunkSize;if(this.ended)return!1;E=S===~~S?S:S===!0?4:0,typeof d=="string"?A.input=a.string2buf(d):u.call(d)==="[object ArrayBuffer]"?A.input=new Uint8Array(d):A.input=d,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new o.Buf8(P),A.next_out=0,A.avail_out=P),(y=s.deflate(A,E))!==1&&y!==p)return this.onEnd(y),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(A.output,A.next_out))):this.onData(o.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&y!==1);return E===4?(y=s.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===p):E!==2||(this.onEnd(p),!(A.avail_out=0))},g.prototype.onData=function(d){this.chunks.push(d)},g.prototype.onEnd=function(d){d===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},r.Deflate=g,r.deflate=h,r.deflateRaw=function(d,S){return(S=S||{}).raw=!0,h(d,S)},r.gzip=function(d,S){return(S=S||{}).gzip=!0,h(d,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),u=e("./zlib/zstream"),p=e("./zlib/gzheader"),m=Object.prototype.toString;function f(g){if(!(this instanceof f))return new f(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var h=this.options;h.raw&&0<=h.windowBits&&h.windowBits<16&&(h.windowBits=-h.windowBits,h.windowBits===0&&(h.windowBits=-15)),!(0<=h.windowBits&&h.windowBits<16)||g&&g.windowBits||(h.windowBits+=32),15<h.windowBits&&h.windowBits<48&&!(15&h.windowBits)&&(h.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var d=s.inflateInit2(this.strm,h.windowBits);if(d!==l.Z_OK)throw new Error(c[d]);this.header=new p,s.inflateGetHeader(this.strm,this.header)}function _(g,h){var d=new f(h);if(d.push(g,!0),d.err)throw d.msg||c[d.err];return d.result}f.prototype.push=function(g,h){var d,S,y,E,A,P,T=this.strm,k=this.options.chunkSize,W=this.options.dictionary,w=!1;if(this.ended)return!1;S=h===~~h?h:h===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?T.input=a.binstring2buf(g):m.call(g)==="[object ArrayBuffer]"?T.input=new Uint8Array(g):T.input=g,T.next_in=0,T.avail_in=T.input.length;do{if(T.avail_out===0&&(T.output=new o.Buf8(k),T.next_out=0,T.avail_out=k),(d=s.inflate(T,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&W&&(P=typeof W=="string"?a.string2buf(W):m.call(W)==="[object ArrayBuffer]"?new Uint8Array(W):W,d=s.inflateSetDictionary(this.strm,P)),d===l.Z_BUF_ERROR&&w===!0&&(d=l.Z_OK,w=!1),d!==l.Z_STREAM_END&&d!==l.Z_OK)return this.onEnd(d),!(this.ended=!0);T.next_out&&(T.avail_out!==0&&d!==l.Z_STREAM_END&&(T.avail_in!==0||S!==l.Z_FINISH&&S!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=a.utf8border(T.output,T.next_out),E=T.next_out-y,A=a.buf2string(T.output,y),T.next_out=E,T.avail_out=k-E,E&&o.arraySet(T.output,T.output,y,E,0),this.onData(A)):this.onData(o.shrinkBuf(T.output,T.next_out)))),T.avail_in===0&&T.avail_out===0&&(w=!0)}while((0<T.avail_in||T.avail_out===0)&&d!==l.Z_STREAM_END);return d===l.Z_STREAM_END&&(S=l.Z_FINISH),S===l.Z_FINISH?(d=s.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===l.Z_OK):S!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(T.avail_out=0))},f.prototype.onData=function(g){this.chunks.push(g)},f.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=f,r.inflate=_,r.inflateRaw=function(g,h){return(h=h||{}).raw=!0,_(g,h)},r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var p in u)u.hasOwnProperty(p)&&(l[p]=u[p])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,u,p,m){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+p),m);else for(var f=0;f<p;f++)l[m+f]=c[u+f]},flattenChunks:function(l){var c,u,p,m,f,_;for(c=p=0,u=l.length;c<u;c++)p+=l[c].length;for(_=new Uint8Array(p),c=m=0,u=l.length;c<u;c++)f=l[c],_.set(f,m),m+=f.length;return _}},a={arraySet:function(l,c,u,p,m){for(var f=0;f<p;f++)l[m+f]=c[u+f]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(p,m){if(m<65537&&(p.subarray&&a||!p.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(p,m));for(var f="",_=0;_<m;_++)f+=String.fromCharCode(p[_]);return f}l[254]=l[254]=1,r.string2buf=function(p){var m,f,_,g,h,d=p.length,S=0;for(g=0;g<d;g++)(64512&(f=p.charCodeAt(g)))==55296&&g+1<d&&(64512&(_=p.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(_-56320),g++),S+=f<128?1:f<2048?2:f<65536?3:4;for(m=new s.Buf8(S),g=h=0;h<S;g++)(64512&(f=p.charCodeAt(g)))==55296&&g+1<d&&(64512&(_=p.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(_-56320),g++),f<128?m[h++]=f:(f<2048?m[h++]=192|f>>>6:(f<65536?m[h++]=224|f>>>12:(m[h++]=240|f>>>18,m[h++]=128|f>>>12&63),m[h++]=128|f>>>6&63),m[h++]=128|63&f);return m},r.buf2binstring=function(p){return u(p,p.length)},r.binstring2buf=function(p){for(var m=new s.Buf8(p.length),f=0,_=m.length;f<_;f++)m[f]=p.charCodeAt(f);return m},r.buf2string=function(p,m){var f,_,g,h,d=m||p.length,S=new Array(2*d);for(f=_=0;f<d;)if((g=p[f++])<128)S[_++]=g;else if(4<(h=l[g]))S[_++]=65533,f+=h-1;else{for(g&=h===2?31:h===3?15:7;1<h&&f<d;)g=g<<6|63&p[f++],h--;1<h?S[_++]=65533:g<65536?S[_++]=g:(g-=65536,S[_++]=55296|g>>10&1023,S[_++]=56320|1023&g)}return u(S,_)},r.utf8border=function(p,m){var f;for((m=m||p.length)>p.length&&(m=p.length),f=m-1;0<=f&&(192&p[f])==128;)f--;return f<0||f===0?m:f+l[p[f]]>m?f:m}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,o,a,l){for(var c=65535&s|0,u=s>>>16&65535|0,p=0;a!==0;){for(a-=p=2e3<a?2e3:a;u=u+(c=c+o[l++]|0)|0,--p;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();n.exports=function(o,a,l,c){var u=s,p=c+l;o^=-1;for(var m=c;m<p;m++)o=o>>>8^u[255&(o^a[m])];return-1^o}},{}],46:[function(e,n,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),c=e("./crc32"),u=e("./messages"),p=0,m=4,f=0,_=-2,g=-1,h=4,d=2,S=8,y=9,E=286,A=30,P=19,T=2*E+1,k=15,W=3,w=258,L=w+W+1,C=42,V=113,v=1,O=2,K=3,Y=4;function nt(x,Z){return x.msg=u[Z],Z}function j(x){return(x<<1)-(4<x?9:0)}function it(x){for(var Z=x.length;0<=--Z;)x[Z]=0}function H(x){var Z=x.state,B=Z.pending;B>x.avail_out&&(B=x.avail_out),B!==0&&(o.arraySet(x.output,Z.pending_buf,Z.pending_out,B,x.next_out),x.next_out+=B,Z.pending_out+=B,x.total_out+=B,x.avail_out-=B,Z.pending-=B,Z.pending===0&&(Z.pending_out=0))}function q(x,Z){a._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,Z),x.block_start=x.strstart,H(x.strm)}function ht(x,Z){x.pending_buf[x.pending++]=Z}function $(x,Z){x.pending_buf[x.pending++]=Z>>>8&255,x.pending_buf[x.pending++]=255&Z}function tt(x,Z){var B,D,R=x.max_chain_length,M=x.strstart,b=x.prev_length,U=x.nice_match,F=x.strstart>x.w_size-L?x.strstart-(x.w_size-L):0,J=x.window,et=x.w_mask,st=x.prev,ct=x.strstart+w,gt=J[M+b-1],St=J[M+b];x.prev_length>=x.good_match&&(R>>=2),U>x.lookahead&&(U=x.lookahead);do if(J[(B=Z)+b]===St&&J[B+b-1]===gt&&J[B]===J[M]&&J[++B]===J[M+1]){M+=2,B++;do;while(J[++M]===J[++B]&&J[++M]===J[++B]&&J[++M]===J[++B]&&J[++M]===J[++B]&&J[++M]===J[++B]&&J[++M]===J[++B]&&J[++M]===J[++B]&&J[++M]===J[++B]&&M<ct);if(D=w-(ct-M),M=ct-w,b<D){if(x.match_start=Z,U<=(b=D))break;gt=J[M+b-1],St=J[M+b]}}while((Z=st[Z&et])>F&&--R!=0);return b<=x.lookahead?b:x.lookahead}function yt(x){var Z,B,D,R,M,b,U,F,J,et,st=x.w_size;do{if(R=x.window_size-x.lookahead-x.strstart,x.strstart>=st+(st-L)){for(o.arraySet(x.window,x.window,st,st,0),x.match_start-=st,x.strstart-=st,x.block_start-=st,Z=B=x.hash_size;D=x.head[--Z],x.head[Z]=st<=D?D-st:0,--B;);for(Z=B=st;D=x.prev[--Z],x.prev[Z]=st<=D?D-st:0,--B;);R+=st}if(x.strm.avail_in===0)break;if(b=x.strm,U=x.window,F=x.strstart+x.lookahead,J=R,et=void 0,et=b.avail_in,J<et&&(et=J),B=et===0?0:(b.avail_in-=et,o.arraySet(U,b.input,b.next_in,et,F),b.state.wrap===1?b.adler=l(b.adler,U,et,F):b.state.wrap===2&&(b.adler=c(b.adler,U,et,F)),b.next_in+=et,b.total_in+=et,et),x.lookahead+=B,x.lookahead+x.insert>=W)for(M=x.strstart-x.insert,x.ins_h=x.window[M],x.ins_h=(x.ins_h<<x.hash_shift^x.window[M+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[M+W-1])&x.hash_mask,x.prev[M&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=M,M++,x.insert--,!(x.lookahead+x.insert<W)););}while(x.lookahead<L&&x.strm.avail_in!==0)}function Et(x,Z){for(var B,D;;){if(x.lookahead<L){if(yt(x),x.lookahead<L&&Z===p)return v;if(x.lookahead===0)break}if(B=0,x.lookahead>=W&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+W-1])&x.hash_mask,B=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),B!==0&&x.strstart-B<=x.w_size-L&&(x.match_length=tt(x,B)),x.match_length>=W)if(D=a._tr_tally(x,x.strstart-x.match_start,x.match_length-W),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=W){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+W-1])&x.hash_mask,B=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else D=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(D&&(q(x,!1),x.strm.avail_out===0))return v}return x.insert=x.strstart<W-1?x.strstart:W-1,Z===m?(q(x,!0),x.strm.avail_out===0?K:Y):x.last_lit&&(q(x,!1),x.strm.avail_out===0)?v:O}function xt(x,Z){for(var B,D,R;;){if(x.lookahead<L){if(yt(x),x.lookahead<L&&Z===p)return v;if(x.lookahead===0)break}if(B=0,x.lookahead>=W&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+W-1])&x.hash_mask,B=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=W-1,B!==0&&x.prev_length<x.max_lazy_match&&x.strstart-B<=x.w_size-L&&(x.match_length=tt(x,B),x.match_length<=5&&(x.strategy===1||x.match_length===W&&4096<x.strstart-x.match_start)&&(x.match_length=W-1)),x.prev_length>=W&&x.match_length<=x.prev_length){for(R=x.strstart+x.lookahead-W,D=a._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-W),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=R&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+W-1])&x.hash_mask,B=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=W-1,x.strstart++,D&&(q(x,!1),x.strm.avail_out===0))return v}else if(x.match_available){if((D=a._tr_tally(x,0,x.window[x.strstart-1]))&&q(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return v}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(D=a._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<W-1?x.strstart:W-1,Z===m?(q(x,!0),x.strm.avail_out===0?K:Y):x.last_lit&&(q(x,!1),x.strm.avail_out===0)?v:O}function _t(x,Z,B,D,R){this.good_length=x,this.max_lazy=Z,this.nice_length=B,this.max_chain=D,this.func=R}function Rt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*T),this.dyn_dtree=new o.Buf16(2*(2*A+1)),this.bl_tree=new o.Buf16(2*(2*P+1)),it(this.dyn_ltree),it(this.dyn_dtree),it(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(k+1),this.heap=new o.Buf16(2*E+1),it(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*E+1),it(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function bt(x){var Z;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=d,(Z=x.state).pending=0,Z.pending_out=0,Z.wrap<0&&(Z.wrap=-Z.wrap),Z.status=Z.wrap?C:V,x.adler=Z.wrap===2?0:1,Z.last_flush=p,a._tr_init(Z),f):nt(x,_)}function z(x){var Z=bt(x);return Z===f&&function(B){B.window_size=2*B.w_size,it(B.head),B.max_lazy_match=s[B.level].max_lazy,B.good_match=s[B.level].good_length,B.nice_match=s[B.level].nice_length,B.max_chain_length=s[B.level].max_chain,B.strstart=0,B.block_start=0,B.lookahead=0,B.insert=0,B.match_length=B.prev_length=W-1,B.match_available=0,B.ins_h=0}(x.state),Z}function pt(x,Z,B,D,R,M){if(!x)return _;var b=1;if(Z===g&&(Z=6),D<0?(b=0,D=-D):15<D&&(b=2,D-=16),R<1||y<R||B!==S||D<8||15<D||Z<0||9<Z||M<0||h<M)return nt(x,_);D===8&&(D=9);var U=new Rt;return(x.state=U).strm=x,U.wrap=b,U.gzhead=null,U.w_bits=D,U.w_size=1<<U.w_bits,U.w_mask=U.w_size-1,U.hash_bits=R+7,U.hash_size=1<<U.hash_bits,U.hash_mask=U.hash_size-1,U.hash_shift=~~((U.hash_bits+W-1)/W),U.window=new o.Buf8(2*U.w_size),U.head=new o.Buf16(U.hash_size),U.prev=new o.Buf16(U.w_size),U.lit_bufsize=1<<R+6,U.pending_buf_size=4*U.lit_bufsize,U.pending_buf=new o.Buf8(U.pending_buf_size),U.d_buf=1*U.lit_bufsize,U.l_buf=3*U.lit_bufsize,U.level=Z,U.strategy=M,U.method=B,z(x)}s=[new _t(0,0,0,0,function(x,Z){var B=65535;for(B>x.pending_buf_size-5&&(B=x.pending_buf_size-5);;){if(x.lookahead<=1){if(yt(x),x.lookahead===0&&Z===p)return v;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var D=x.block_start+B;if((x.strstart===0||x.strstart>=D)&&(x.lookahead=x.strstart-D,x.strstart=D,q(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-L&&(q(x,!1),x.strm.avail_out===0))return v}return x.insert=0,Z===m?(q(x,!0),x.strm.avail_out===0?K:Y):(x.strstart>x.block_start&&(q(x,!1),x.strm.avail_out),v)}),new _t(4,4,8,4,Et),new _t(4,5,16,8,Et),new _t(4,6,32,32,Et),new _t(4,4,16,16,xt),new _t(8,16,32,32,xt),new _t(8,16,128,128,xt),new _t(8,32,128,256,xt),new _t(32,128,258,1024,xt),new _t(32,258,258,4096,xt)],r.deflateInit=function(x,Z){return pt(x,Z,S,15,8,0)},r.deflateInit2=pt,r.deflateReset=z,r.deflateResetKeep=bt,r.deflateSetHeader=function(x,Z){return x&&x.state?x.state.wrap!==2?_:(x.state.gzhead=Z,f):_},r.deflate=function(x,Z){var B,D,R,M;if(!x||!x.state||5<Z||Z<0)return x?nt(x,_):_;if(D=x.state,!x.output||!x.input&&x.avail_in!==0||D.status===666&&Z!==m)return nt(x,x.avail_out===0?-5:_);if(D.strm=x,B=D.last_flush,D.last_flush=Z,D.status===C)if(D.wrap===2)x.adler=0,ht(D,31),ht(D,139),ht(D,8),D.gzhead?(ht(D,(D.gzhead.text?1:0)+(D.gzhead.hcrc?2:0)+(D.gzhead.extra?4:0)+(D.gzhead.name?8:0)+(D.gzhead.comment?16:0)),ht(D,255&D.gzhead.time),ht(D,D.gzhead.time>>8&255),ht(D,D.gzhead.time>>16&255),ht(D,D.gzhead.time>>24&255),ht(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),ht(D,255&D.gzhead.os),D.gzhead.extra&&D.gzhead.extra.length&&(ht(D,255&D.gzhead.extra.length),ht(D,D.gzhead.extra.length>>8&255)),D.gzhead.hcrc&&(x.adler=c(x.adler,D.pending_buf,D.pending,0)),D.gzindex=0,D.status=69):(ht(D,0),ht(D,0),ht(D,0),ht(D,0),ht(D,0),ht(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),ht(D,3),D.status=V);else{var b=S+(D.w_bits-8<<4)<<8;b|=(2<=D.strategy||D.level<2?0:D.level<6?1:D.level===6?2:3)<<6,D.strstart!==0&&(b|=32),b+=31-b%31,D.status=V,$(D,b),D.strstart!==0&&($(D,x.adler>>>16),$(D,65535&x.adler)),x.adler=1}if(D.status===69)if(D.gzhead.extra){for(R=D.pending;D.gzindex<(65535&D.gzhead.extra.length)&&(D.pending!==D.pending_buf_size||(D.gzhead.hcrc&&D.pending>R&&(x.adler=c(x.adler,D.pending_buf,D.pending-R,R)),H(x),R=D.pending,D.pending!==D.pending_buf_size));)ht(D,255&D.gzhead.extra[D.gzindex]),D.gzindex++;D.gzhead.hcrc&&D.pending>R&&(x.adler=c(x.adler,D.pending_buf,D.pending-R,R)),D.gzindex===D.gzhead.extra.length&&(D.gzindex=0,D.status=73)}else D.status=73;if(D.status===73)if(D.gzhead.name){R=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>R&&(x.adler=c(x.adler,D.pending_buf,D.pending-R,R)),H(x),R=D.pending,D.pending===D.pending_buf_size)){M=1;break}M=D.gzindex<D.gzhead.name.length?255&D.gzhead.name.charCodeAt(D.gzindex++):0,ht(D,M)}while(M!==0);D.gzhead.hcrc&&D.pending>R&&(x.adler=c(x.adler,D.pending_buf,D.pending-R,R)),M===0&&(D.gzindex=0,D.status=91)}else D.status=91;if(D.status===91)if(D.gzhead.comment){R=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>R&&(x.adler=c(x.adler,D.pending_buf,D.pending-R,R)),H(x),R=D.pending,D.pending===D.pending_buf_size)){M=1;break}M=D.gzindex<D.gzhead.comment.length?255&D.gzhead.comment.charCodeAt(D.gzindex++):0,ht(D,M)}while(M!==0);D.gzhead.hcrc&&D.pending>R&&(x.adler=c(x.adler,D.pending_buf,D.pending-R,R)),M===0&&(D.status=103)}else D.status=103;if(D.status===103&&(D.gzhead.hcrc?(D.pending+2>D.pending_buf_size&&H(x),D.pending+2<=D.pending_buf_size&&(ht(D,255&x.adler),ht(D,x.adler>>8&255),x.adler=0,D.status=V)):D.status=V),D.pending!==0){if(H(x),x.avail_out===0)return D.last_flush=-1,f}else if(x.avail_in===0&&j(Z)<=j(B)&&Z!==m)return nt(x,-5);if(D.status===666&&x.avail_in!==0)return nt(x,-5);if(x.avail_in!==0||D.lookahead!==0||Z!==p&&D.status!==666){var U=D.strategy===2?function(F,J){for(var et;;){if(F.lookahead===0&&(yt(F),F.lookahead===0)){if(J===p)return v;break}if(F.match_length=0,et=a._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,et&&(q(F,!1),F.strm.avail_out===0))return v}return F.insert=0,J===m?(q(F,!0),F.strm.avail_out===0?K:Y):F.last_lit&&(q(F,!1),F.strm.avail_out===0)?v:O}(D,Z):D.strategy===3?function(F,J){for(var et,st,ct,gt,St=F.window;;){if(F.lookahead<=w){if(yt(F),F.lookahead<=w&&J===p)return v;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=W&&0<F.strstart&&(st=St[ct=F.strstart-1])===St[++ct]&&st===St[++ct]&&st===St[++ct]){gt=F.strstart+w;do;while(st===St[++ct]&&st===St[++ct]&&st===St[++ct]&&st===St[++ct]&&st===St[++ct]&&st===St[++ct]&&st===St[++ct]&&st===St[++ct]&&ct<gt);F.match_length=w-(gt-ct),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=W?(et=a._tr_tally(F,1,F.match_length-W),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(et=a._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),et&&(q(F,!1),F.strm.avail_out===0))return v}return F.insert=0,J===m?(q(F,!0),F.strm.avail_out===0?K:Y):F.last_lit&&(q(F,!1),F.strm.avail_out===0)?v:O}(D,Z):s[D.level].func(D,Z);if(U!==K&&U!==Y||(D.status=666),U===v||U===K)return x.avail_out===0&&(D.last_flush=-1),f;if(U===O&&(Z===1?a._tr_align(D):Z!==5&&(a._tr_stored_block(D,0,0,!1),Z===3&&(it(D.head),D.lookahead===0&&(D.strstart=0,D.block_start=0,D.insert=0))),H(x),x.avail_out===0))return D.last_flush=-1,f}return Z!==m?f:D.wrap<=0?1:(D.wrap===2?(ht(D,255&x.adler),ht(D,x.adler>>8&255),ht(D,x.adler>>16&255),ht(D,x.adler>>24&255),ht(D,255&x.total_in),ht(D,x.total_in>>8&255),ht(D,x.total_in>>16&255),ht(D,x.total_in>>24&255)):($(D,x.adler>>>16),$(D,65535&x.adler)),H(x),0<D.wrap&&(D.wrap=-D.wrap),D.pending!==0?f:1)},r.deflateEnd=function(x){var Z;return x&&x.state?(Z=x.state.status)!==C&&Z!==69&&Z!==73&&Z!==91&&Z!==103&&Z!==V&&Z!==666?nt(x,_):(x.state=null,Z===V?nt(x,-3):f):_},r.deflateSetDictionary=function(x,Z){var B,D,R,M,b,U,F,J,et=Z.length;if(!x||!x.state||(M=(B=x.state).wrap)===2||M===1&&B.status!==C||B.lookahead)return _;for(M===1&&(x.adler=l(x.adler,Z,et,0)),B.wrap=0,et>=B.w_size&&(M===0&&(it(B.head),B.strstart=0,B.block_start=0,B.insert=0),J=new o.Buf8(B.w_size),o.arraySet(J,Z,et-B.w_size,B.w_size,0),Z=J,et=B.w_size),b=x.avail_in,U=x.next_in,F=x.input,x.avail_in=et,x.next_in=0,x.input=Z,yt(B);B.lookahead>=W;){for(D=B.strstart,R=B.lookahead-(W-1);B.ins_h=(B.ins_h<<B.hash_shift^B.window[D+W-1])&B.hash_mask,B.prev[D&B.w_mask]=B.head[B.ins_h],B.head[B.ins_h]=D,D++,--R;);B.strstart=D,B.lookahead=W-1,yt(B)}return B.strstart+=B.lookahead,B.block_start=B.strstart,B.insert=B.lookahead,B.lookahead=0,B.match_length=B.prev_length=W-1,B.match_available=0,x.next_in=U,x.input=F,x.avail_in=b,B.wrap=M,f},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,o){var a,l,c,u,p,m,f,_,g,h,d,S,y,E,A,P,T,k,W,w,L,C,V,v,O;a=s.state,l=s.next_in,v=s.input,c=l+(s.avail_in-5),u=s.next_out,O=s.output,p=u-(o-s.avail_out),m=u+(s.avail_out-257),f=a.dmax,_=a.wsize,g=a.whave,h=a.wnext,d=a.window,S=a.hold,y=a.bits,E=a.lencode,A=a.distcode,P=(1<<a.lenbits)-1,T=(1<<a.distbits)-1;t:do{y<15&&(S+=v[l++]<<y,y+=8,S+=v[l++]<<y,y+=8),k=E[S&P];e:for(;;){if(S>>>=W=k>>>24,y-=W,(W=k>>>16&255)===0)O[u++]=65535&k;else{if(!(16&W)){if(!(64&W)){k=E[(65535&k)+(S&(1<<W)-1)];continue e}if(32&W){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}w=65535&k,(W&=15)&&(y<W&&(S+=v[l++]<<y,y+=8),w+=S&(1<<W)-1,S>>>=W,y-=W),y<15&&(S+=v[l++]<<y,y+=8,S+=v[l++]<<y,y+=8),k=A[S&T];n:for(;;){if(S>>>=W=k>>>24,y-=W,!(16&(W=k>>>16&255))){if(!(64&W)){k=A[(65535&k)+(S&(1<<W)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(L=65535&k,y<(W&=15)&&(S+=v[l++]<<y,(y+=8)<W&&(S+=v[l++]<<y,y+=8)),f<(L+=S&(1<<W)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(S>>>=W,y-=W,(W=u-p)<L){if(g<(W=L-W)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(V=d,(C=0)===h){if(C+=_-W,W<w){for(w-=W;O[u++]=d[C++],--W;);C=u-L,V=O}}else if(h<W){if(C+=_+h-W,(W-=h)<w){for(w-=W;O[u++]=d[C++],--W;);if(C=0,h<w){for(w-=W=h;O[u++]=d[C++],--W;);C=u-L,V=O}}}else if(C+=h-W,W<w){for(w-=W;O[u++]=d[C++],--W;);C=u-L,V=O}for(;2<w;)O[u++]=V[C++],O[u++]=V[C++],O[u++]=V[C++],w-=3;w&&(O[u++]=V[C++],1<w&&(O[u++]=V[C++]))}else{for(C=u-L;O[u++]=O[C++],O[u++]=O[C++],O[u++]=O[C++],2<(w-=3););w&&(O[u++]=O[C++],1<w&&(O[u++]=O[C++]))}break}}break}}while(l<c&&u<m);l-=w=y>>3,S&=(1<<(y-=w<<3))-1,s.next_in=l,s.next_out=u,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=u<m?m-u+257:257-(u-m),a.hold=S,a.bits=y}},{}],49:[function(e,n,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),u=1,p=2,m=0,f=-2,_=1,g=852,h=592;function d(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(C){var V;return C&&C.state?(V=C.state,C.total_in=C.total_out=V.total=0,C.msg="",V.wrap&&(C.adler=1&V.wrap),V.mode=_,V.last=0,V.havedict=0,V.dmax=32768,V.head=null,V.hold=0,V.bits=0,V.lencode=V.lendyn=new s.Buf32(g),V.distcode=V.distdyn=new s.Buf32(h),V.sane=1,V.back=-1,m):f}function E(C){var V;return C&&C.state?((V=C.state).wsize=0,V.whave=0,V.wnext=0,y(C)):f}function A(C,V){var v,O;return C&&C.state?(O=C.state,V<0?(v=0,V=-V):(v=1+(V>>4),V<48&&(V&=15)),V&&(V<8||15<V)?f:(O.window!==null&&O.wbits!==V&&(O.window=null),O.wrap=v,O.wbits=V,E(C))):f}function P(C,V){var v,O;return C?(O=new S,(C.state=O).window=null,(v=A(C,V))!==m&&(C.state=null),v):f}var T,k,W=!0;function w(C){if(W){var V;for(T=new s.Buf32(512),k=new s.Buf32(32),V=0;V<144;)C.lens[V++]=8;for(;V<256;)C.lens[V++]=9;for(;V<280;)C.lens[V++]=7;for(;V<288;)C.lens[V++]=8;for(c(u,C.lens,0,288,T,0,C.work,{bits:9}),V=0;V<32;)C.lens[V++]=5;c(p,C.lens,0,32,k,0,C.work,{bits:5}),W=!1}C.lencode=T,C.lenbits=9,C.distcode=k,C.distbits=5}function L(C,V,v,O){var K,Y=C.state;return Y.window===null&&(Y.wsize=1<<Y.wbits,Y.wnext=0,Y.whave=0,Y.window=new s.Buf8(Y.wsize)),O>=Y.wsize?(s.arraySet(Y.window,V,v-Y.wsize,Y.wsize,0),Y.wnext=0,Y.whave=Y.wsize):(O<(K=Y.wsize-Y.wnext)&&(K=O),s.arraySet(Y.window,V,v-O,K,Y.wnext),(O-=K)?(s.arraySet(Y.window,V,v-O,O,0),Y.wnext=O,Y.whave=Y.wsize):(Y.wnext+=K,Y.wnext===Y.wsize&&(Y.wnext=0),Y.whave<Y.wsize&&(Y.whave+=K))),0}r.inflateReset=E,r.inflateReset2=A,r.inflateResetKeep=y,r.inflateInit=function(C){return P(C,15)},r.inflateInit2=P,r.inflate=function(C,V){var v,O,K,Y,nt,j,it,H,q,ht,$,tt,yt,Et,xt,_t,Rt,bt,z,pt,x,Z,B,D,R=0,M=new s.Buf8(4),b=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return f;(v=C.state).mode===12&&(v.mode=13),nt=C.next_out,K=C.output,it=C.avail_out,Y=C.next_in,O=C.input,j=C.avail_in,H=v.hold,q=v.bits,ht=j,$=it,Z=m;t:for(;;)switch(v.mode){case _:if(v.wrap===0){v.mode=13;break}for(;q<16;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(2&v.wrap&&H===35615){M[v.check=0]=255&H,M[1]=H>>>8&255,v.check=a(v.check,M,2,0),q=H=0,v.mode=2;break}if(v.flags=0,v.head&&(v.head.done=!1),!(1&v.wrap)||(((255&H)<<8)+(H>>8))%31){C.msg="incorrect header check",v.mode=30;break}if((15&H)!=8){C.msg="unknown compression method",v.mode=30;break}if(q-=4,x=8+(15&(H>>>=4)),v.wbits===0)v.wbits=x;else if(x>v.wbits){C.msg="invalid window size",v.mode=30;break}v.dmax=1<<x,C.adler=v.check=1,v.mode=512&H?10:12,q=H=0;break;case 2:for(;q<16;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(v.flags=H,(255&v.flags)!=8){C.msg="unknown compression method",v.mode=30;break}if(57344&v.flags){C.msg="unknown header flags set",v.mode=30;break}v.head&&(v.head.text=H>>8&1),512&v.flags&&(M[0]=255&H,M[1]=H>>>8&255,v.check=a(v.check,M,2,0)),q=H=0,v.mode=3;case 3:for(;q<32;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}v.head&&(v.head.time=H),512&v.flags&&(M[0]=255&H,M[1]=H>>>8&255,M[2]=H>>>16&255,M[3]=H>>>24&255,v.check=a(v.check,M,4,0)),q=H=0,v.mode=4;case 4:for(;q<16;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}v.head&&(v.head.xflags=255&H,v.head.os=H>>8),512&v.flags&&(M[0]=255&H,M[1]=H>>>8&255,v.check=a(v.check,M,2,0)),q=H=0,v.mode=5;case 5:if(1024&v.flags){for(;q<16;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}v.length=H,v.head&&(v.head.extra_len=H),512&v.flags&&(M[0]=255&H,M[1]=H>>>8&255,v.check=a(v.check,M,2,0)),q=H=0}else v.head&&(v.head.extra=null);v.mode=6;case 6:if(1024&v.flags&&(j<(tt=v.length)&&(tt=j),tt&&(v.head&&(x=v.head.extra_len-v.length,v.head.extra||(v.head.extra=new Array(v.head.extra_len)),s.arraySet(v.head.extra,O,Y,tt,x)),512&v.flags&&(v.check=a(v.check,O,tt,Y)),j-=tt,Y+=tt,v.length-=tt),v.length))break t;v.length=0,v.mode=7;case 7:if(2048&v.flags){if(j===0)break t;for(tt=0;x=O[Y+tt++],v.head&&x&&v.length<65536&&(v.head.name+=String.fromCharCode(x)),x&&tt<j;);if(512&v.flags&&(v.check=a(v.check,O,tt,Y)),j-=tt,Y+=tt,x)break t}else v.head&&(v.head.name=null);v.length=0,v.mode=8;case 8:if(4096&v.flags){if(j===0)break t;for(tt=0;x=O[Y+tt++],v.head&&x&&v.length<65536&&(v.head.comment+=String.fromCharCode(x)),x&&tt<j;);if(512&v.flags&&(v.check=a(v.check,O,tt,Y)),j-=tt,Y+=tt,x)break t}else v.head&&(v.head.comment=null);v.mode=9;case 9:if(512&v.flags){for(;q<16;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(H!==(65535&v.check)){C.msg="header crc mismatch",v.mode=30;break}q=H=0}v.head&&(v.head.hcrc=v.flags>>9&1,v.head.done=!0),C.adler=v.check=0,v.mode=12;break;case 10:for(;q<32;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}C.adler=v.check=d(H),q=H=0,v.mode=11;case 11:if(v.havedict===0)return C.next_out=nt,C.avail_out=it,C.next_in=Y,C.avail_in=j,v.hold=H,v.bits=q,2;C.adler=v.check=1,v.mode=12;case 12:if(V===5||V===6)break t;case 13:if(v.last){H>>>=7&q,q-=7&q,v.mode=27;break}for(;q<3;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}switch(v.last=1&H,q-=1,3&(H>>>=1)){case 0:v.mode=14;break;case 1:if(w(v),v.mode=20,V!==6)break;H>>>=2,q-=2;break t;case 2:v.mode=17;break;case 3:C.msg="invalid block type",v.mode=30}H>>>=2,q-=2;break;case 14:for(H>>>=7&q,q-=7&q;q<32;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if((65535&H)!=(H>>>16^65535)){C.msg="invalid stored block lengths",v.mode=30;break}if(v.length=65535&H,q=H=0,v.mode=15,V===6)break t;case 15:v.mode=16;case 16:if(tt=v.length){if(j<tt&&(tt=j),it<tt&&(tt=it),tt===0)break t;s.arraySet(K,O,Y,tt,nt),j-=tt,Y+=tt,it-=tt,nt+=tt,v.length-=tt;break}v.mode=12;break;case 17:for(;q<14;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(v.nlen=257+(31&H),H>>>=5,q-=5,v.ndist=1+(31&H),H>>>=5,q-=5,v.ncode=4+(15&H),H>>>=4,q-=4,286<v.nlen||30<v.ndist){C.msg="too many length or distance symbols",v.mode=30;break}v.have=0,v.mode=18;case 18:for(;v.have<v.ncode;){for(;q<3;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}v.lens[b[v.have++]]=7&H,H>>>=3,q-=3}for(;v.have<19;)v.lens[b[v.have++]]=0;if(v.lencode=v.lendyn,v.lenbits=7,B={bits:v.lenbits},Z=c(0,v.lens,0,19,v.lencode,0,v.work,B),v.lenbits=B.bits,Z){C.msg="invalid code lengths set",v.mode=30;break}v.have=0,v.mode=19;case 19:for(;v.have<v.nlen+v.ndist;){for(;_t=(R=v.lencode[H&(1<<v.lenbits)-1])>>>16&255,Rt=65535&R,!((xt=R>>>24)<=q);){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(Rt<16)H>>>=xt,q-=xt,v.lens[v.have++]=Rt;else{if(Rt===16){for(D=xt+2;q<D;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(H>>>=xt,q-=xt,v.have===0){C.msg="invalid bit length repeat",v.mode=30;break}x=v.lens[v.have-1],tt=3+(3&H),H>>>=2,q-=2}else if(Rt===17){for(D=xt+3;q<D;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}q-=xt,x=0,tt=3+(7&(H>>>=xt)),H>>>=3,q-=3}else{for(D=xt+7;q<D;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}q-=xt,x=0,tt=11+(127&(H>>>=xt)),H>>>=7,q-=7}if(v.have+tt>v.nlen+v.ndist){C.msg="invalid bit length repeat",v.mode=30;break}for(;tt--;)v.lens[v.have++]=x}}if(v.mode===30)break;if(v.lens[256]===0){C.msg="invalid code -- missing end-of-block",v.mode=30;break}if(v.lenbits=9,B={bits:v.lenbits},Z=c(u,v.lens,0,v.nlen,v.lencode,0,v.work,B),v.lenbits=B.bits,Z){C.msg="invalid literal/lengths set",v.mode=30;break}if(v.distbits=6,v.distcode=v.distdyn,B={bits:v.distbits},Z=c(p,v.lens,v.nlen,v.ndist,v.distcode,0,v.work,B),v.distbits=B.bits,Z){C.msg="invalid distances set",v.mode=30;break}if(v.mode=20,V===6)break t;case 20:v.mode=21;case 21:if(6<=j&&258<=it){C.next_out=nt,C.avail_out=it,C.next_in=Y,C.avail_in=j,v.hold=H,v.bits=q,l(C,$),nt=C.next_out,K=C.output,it=C.avail_out,Y=C.next_in,O=C.input,j=C.avail_in,H=v.hold,q=v.bits,v.mode===12&&(v.back=-1);break}for(v.back=0;_t=(R=v.lencode[H&(1<<v.lenbits)-1])>>>16&255,Rt=65535&R,!((xt=R>>>24)<=q);){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(_t&&!(240&_t)){for(bt=xt,z=_t,pt=Rt;_t=(R=v.lencode[pt+((H&(1<<bt+z)-1)>>bt)])>>>16&255,Rt=65535&R,!(bt+(xt=R>>>24)<=q);){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}H>>>=bt,q-=bt,v.back+=bt}if(H>>>=xt,q-=xt,v.back+=xt,v.length=Rt,_t===0){v.mode=26;break}if(32&_t){v.back=-1,v.mode=12;break}if(64&_t){C.msg="invalid literal/length code",v.mode=30;break}v.extra=15&_t,v.mode=22;case 22:if(v.extra){for(D=v.extra;q<D;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}v.length+=H&(1<<v.extra)-1,H>>>=v.extra,q-=v.extra,v.back+=v.extra}v.was=v.length,v.mode=23;case 23:for(;_t=(R=v.distcode[H&(1<<v.distbits)-1])>>>16&255,Rt=65535&R,!((xt=R>>>24)<=q);){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(!(240&_t)){for(bt=xt,z=_t,pt=Rt;_t=(R=v.distcode[pt+((H&(1<<bt+z)-1)>>bt)])>>>16&255,Rt=65535&R,!(bt+(xt=R>>>24)<=q);){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}H>>>=bt,q-=bt,v.back+=bt}if(H>>>=xt,q-=xt,v.back+=xt,64&_t){C.msg="invalid distance code",v.mode=30;break}v.offset=Rt,v.extra=15&_t,v.mode=24;case 24:if(v.extra){for(D=v.extra;q<D;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}v.offset+=H&(1<<v.extra)-1,H>>>=v.extra,q-=v.extra,v.back+=v.extra}if(v.offset>v.dmax){C.msg="invalid distance too far back",v.mode=30;break}v.mode=25;case 25:if(it===0)break t;if(tt=$-it,v.offset>tt){if((tt=v.offset-tt)>v.whave&&v.sane){C.msg="invalid distance too far back",v.mode=30;break}yt=tt>v.wnext?(tt-=v.wnext,v.wsize-tt):v.wnext-tt,tt>v.length&&(tt=v.length),Et=v.window}else Et=K,yt=nt-v.offset,tt=v.length;for(it<tt&&(tt=it),it-=tt,v.length-=tt;K[nt++]=Et[yt++],--tt;);v.length===0&&(v.mode=21);break;case 26:if(it===0)break t;K[nt++]=v.length,it--,v.mode=21;break;case 27:if(v.wrap){for(;q<32;){if(j===0)break t;j--,H|=O[Y++]<<q,q+=8}if($-=it,C.total_out+=$,v.total+=$,$&&(C.adler=v.check=v.flags?a(v.check,K,$,nt-$):o(v.check,K,$,nt-$)),$=it,(v.flags?H:d(H))!==v.check){C.msg="incorrect data check",v.mode=30;break}q=H=0}v.mode=28;case 28:if(v.wrap&&v.flags){for(;q<32;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(H!==(4294967295&v.total)){C.msg="incorrect length check",v.mode=30;break}q=H=0}v.mode=29;case 29:Z=1;break t;case 30:Z=-3;break t;case 31:return-4;case 32:default:return f}return C.next_out=nt,C.avail_out=it,C.next_in=Y,C.avail_in=j,v.hold=H,v.bits=q,(v.wsize||$!==C.avail_out&&v.mode<30&&(v.mode<27||V!==4))&&L(C,C.output,C.next_out,$-C.avail_out)?(v.mode=31,-4):(ht-=C.avail_in,$-=C.avail_out,C.total_in+=ht,C.total_out+=$,v.total+=$,v.wrap&&$&&(C.adler=v.check=v.flags?a(v.check,K,$,C.next_out-$):o(v.check,K,$,C.next_out-$)),C.data_type=v.bits+(v.last?64:0)+(v.mode===12?128:0)+(v.mode===20||v.mode===15?256:0),(ht==0&&$===0||V===4)&&Z===m&&(Z=-5),Z)},r.inflateEnd=function(C){if(!C||!C.state)return f;var V=C.state;return V.window&&(V.window=null),C.state=null,m},r.inflateGetHeader=function(C,V){var v;return C&&C.state&&2&(v=C.state).wrap?((v.head=V).done=!1,m):f},r.inflateSetDictionary=function(C,V){var v,O=V.length;return C&&C.state?(v=C.state).wrap!==0&&v.mode!==11?f:v.mode===11&&o(1,V,O,0)!==v.check?-3:L(C,V,O,O)?(v.mode=31,-4):(v.havedict=1,m):f},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(u,p,m,f,_,g,h,d){var S,y,E,A,P,T,k,W,w,L=d.bits,C=0,V=0,v=0,O=0,K=0,Y=0,nt=0,j=0,it=0,H=0,q=null,ht=0,$=new s.Buf16(16),tt=new s.Buf16(16),yt=null,Et=0;for(C=0;C<=15;C++)$[C]=0;for(V=0;V<f;V++)$[p[m+V]]++;for(K=L,O=15;1<=O&&$[O]===0;O--);if(O<K&&(K=O),O===0)return _[g++]=20971520,_[g++]=20971520,d.bits=1,0;for(v=1;v<O&&$[v]===0;v++);for(K<v&&(K=v),C=j=1;C<=15;C++)if(j<<=1,(j-=$[C])<0)return-1;if(0<j&&(u===0||O!==1))return-1;for(tt[1]=0,C=1;C<15;C++)tt[C+1]=tt[C]+$[C];for(V=0;V<f;V++)p[m+V]!==0&&(h[tt[p[m+V]]++]=V);if(T=u===0?(q=yt=h,19):u===1?(q=o,ht-=257,yt=a,Et-=257,256):(q=l,yt=c,-1),C=v,P=g,nt=V=H=0,E=-1,A=(it=1<<(Y=K))-1,u===1&&852<it||u===2&&592<it)return 1;for(;;){for(k=C-nt,w=h[V]<T?(W=0,h[V]):h[V]>T?(W=yt[Et+h[V]],q[ht+h[V]]):(W=96,0),S=1<<C-nt,v=y=1<<Y;_[P+(H>>nt)+(y-=S)]=k<<24|W<<16|w|0,y!==0;);for(S=1<<C-1;H&S;)S>>=1;if(S!==0?(H&=S-1,H+=S):H=0,V++,--$[C]==0){if(C===O)break;C=p[m+h[V]]}if(K<C&&(H&A)!==E){for(nt===0&&(nt=K),P+=v,j=1<<(Y=C-nt);Y+nt<O&&!((j-=$[Y+nt])<=0);)Y++,j<<=1;if(it+=1<<Y,u===1&&852<it||u===2&&592<it)return 1;_[E=H&A]=K<<24|Y<<16|P-g|0}}return H!==0&&(_[P+H]=C-nt<<24|64<<16|0),d.bits=K,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),o=0,a=1;function l(R){for(var M=R.length;0<=--M;)R[M]=0}var c=0,u=29,p=256,m=p+1+u,f=30,_=19,g=2*m+1,h=15,d=16,S=7,y=256,E=16,A=17,P=18,T=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],W=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],L=new Array(2*(m+2));l(L);var C=new Array(2*f);l(C);var V=new Array(512);l(V);var v=new Array(256);l(v);var O=new Array(u);l(O);var K,Y,nt,j=new Array(f);function it(R,M,b,U,F){this.static_tree=R,this.extra_bits=M,this.extra_base=b,this.elems=U,this.max_length=F,this.has_stree=R&&R.length}function H(R,M){this.dyn_tree=R,this.max_code=0,this.stat_desc=M}function q(R){return R<256?V[R]:V[256+(R>>>7)]}function ht(R,M){R.pending_buf[R.pending++]=255&M,R.pending_buf[R.pending++]=M>>>8&255}function $(R,M,b){R.bi_valid>d-b?(R.bi_buf|=M<<R.bi_valid&65535,ht(R,R.bi_buf),R.bi_buf=M>>d-R.bi_valid,R.bi_valid+=b-d):(R.bi_buf|=M<<R.bi_valid&65535,R.bi_valid+=b)}function tt(R,M,b){$(R,b[2*M],b[2*M+1])}function yt(R,M){for(var b=0;b|=1&R,R>>>=1,b<<=1,0<--M;);return b>>>1}function Et(R,M,b){var U,F,J=new Array(h+1),et=0;for(U=1;U<=h;U++)J[U]=et=et+b[U-1]<<1;for(F=0;F<=M;F++){var st=R[2*F+1];st!==0&&(R[2*F]=yt(J[st]++,st))}}function xt(R){var M;for(M=0;M<m;M++)R.dyn_ltree[2*M]=0;for(M=0;M<f;M++)R.dyn_dtree[2*M]=0;for(M=0;M<_;M++)R.bl_tree[2*M]=0;R.dyn_ltree[2*y]=1,R.opt_len=R.static_len=0,R.last_lit=R.matches=0}function _t(R){8<R.bi_valid?ht(R,R.bi_buf):0<R.bi_valid&&(R.pending_buf[R.pending++]=R.bi_buf),R.bi_buf=0,R.bi_valid=0}function Rt(R,M,b,U){var F=2*M,J=2*b;return R[F]<R[J]||R[F]===R[J]&&U[M]<=U[b]}function bt(R,M,b){for(var U=R.heap[b],F=b<<1;F<=R.heap_len&&(F<R.heap_len&&Rt(M,R.heap[F+1],R.heap[F],R.depth)&&F++,!Rt(M,U,R.heap[F],R.depth));)R.heap[b]=R.heap[F],b=F,F<<=1;R.heap[b]=U}function z(R,M,b){var U,F,J,et,st=0;if(R.last_lit!==0)for(;U=R.pending_buf[R.d_buf+2*st]<<8|R.pending_buf[R.d_buf+2*st+1],F=R.pending_buf[R.l_buf+st],st++,U===0?tt(R,F,M):(tt(R,(J=v[F])+p+1,M),(et=T[J])!==0&&$(R,F-=O[J],et),tt(R,J=q(--U),b),(et=k[J])!==0&&$(R,U-=j[J],et)),st<R.last_lit;);tt(R,y,M)}function pt(R,M){var b,U,F,J=M.dyn_tree,et=M.stat_desc.static_tree,st=M.stat_desc.has_stree,ct=M.stat_desc.elems,gt=-1;for(R.heap_len=0,R.heap_max=g,b=0;b<ct;b++)J[2*b]!==0?(R.heap[++R.heap_len]=gt=b,R.depth[b]=0):J[2*b+1]=0;for(;R.heap_len<2;)J[2*(F=R.heap[++R.heap_len]=gt<2?++gt:0)]=1,R.depth[F]=0,R.opt_len--,st&&(R.static_len-=et[2*F+1]);for(M.max_code=gt,b=R.heap_len>>1;1<=b;b--)bt(R,J,b);for(F=ct;b=R.heap[1],R.heap[1]=R.heap[R.heap_len--],bt(R,J,1),U=R.heap[1],R.heap[--R.heap_max]=b,R.heap[--R.heap_max]=U,J[2*F]=J[2*b]+J[2*U],R.depth[F]=(R.depth[b]>=R.depth[U]?R.depth[b]:R.depth[U])+1,J[2*b+1]=J[2*U+1]=F,R.heap[1]=F++,bt(R,J,1),2<=R.heap_len;);R.heap[--R.heap_max]=R.heap[1],function(St,Dt){var ut,zt,kt,At,Pt,Tt,Ot=Dt.dyn_tree,G=Dt.max_code,vt=Dt.stat_desc.static_tree,wt=Dt.stat_desc.has_stree,It=Dt.stat_desc.extra_bits,N=Dt.stat_desc.extra_base,ft=Dt.stat_desc.max_length,dt=0;for(At=0;At<=h;At++)St.bl_count[At]=0;for(Ot[2*St.heap[St.heap_max]+1]=0,ut=St.heap_max+1;ut<g;ut++)ft<(At=Ot[2*Ot[2*(zt=St.heap[ut])+1]+1]+1)&&(At=ft,dt++),Ot[2*zt+1]=At,G<zt||(St.bl_count[At]++,Pt=0,N<=zt&&(Pt=It[zt-N]),Tt=Ot[2*zt],St.opt_len+=Tt*(At+Pt),wt&&(St.static_len+=Tt*(vt[2*zt+1]+Pt)));if(dt!==0){do{for(At=ft-1;St.bl_count[At]===0;)At--;St.bl_count[At]--,St.bl_count[At+1]+=2,St.bl_count[ft]--,dt-=2}while(0<dt);for(At=ft;At!==0;At--)for(zt=St.bl_count[At];zt!==0;)G<(kt=St.heap[--ut])||(Ot[2*kt+1]!==At&&(St.opt_len+=(At-Ot[2*kt+1])*Ot[2*kt],Ot[2*kt+1]=At),zt--)}}(R,M),Et(J,gt,R.bl_count)}function x(R,M,b){var U,F,J=-1,et=M[1],st=0,ct=7,gt=4;for(et===0&&(ct=138,gt=3),M[2*(b+1)+1]=65535,U=0;U<=b;U++)F=et,et=M[2*(U+1)+1],++st<ct&&F===et||(st<gt?R.bl_tree[2*F]+=st:F!==0?(F!==J&&R.bl_tree[2*F]++,R.bl_tree[2*E]++):st<=10?R.bl_tree[2*A]++:R.bl_tree[2*P]++,J=F,gt=(st=0)===et?(ct=138,3):F===et?(ct=6,3):(ct=7,4))}function Z(R,M,b){var U,F,J=-1,et=M[1],st=0,ct=7,gt=4;for(et===0&&(ct=138,gt=3),U=0;U<=b;U++)if(F=et,et=M[2*(U+1)+1],!(++st<ct&&F===et)){if(st<gt)for(;tt(R,F,R.bl_tree),--st!=0;);else F!==0?(F!==J&&(tt(R,F,R.bl_tree),st--),tt(R,E,R.bl_tree),$(R,st-3,2)):st<=10?(tt(R,A,R.bl_tree),$(R,st-3,3)):(tt(R,P,R.bl_tree),$(R,st-11,7));J=F,gt=(st=0)===et?(ct=138,3):F===et?(ct=6,3):(ct=7,4)}}l(j);var B=!1;function D(R,M,b,U){$(R,(c<<1)+(U?1:0),3),function(F,J,et,st){_t(F),ht(F,et),ht(F,~et),s.arraySet(F.pending_buf,F.window,J,et,F.pending),F.pending+=et}(R,M,b)}r._tr_init=function(R){B||(function(){var M,b,U,F,J,et=new Array(h+1);for(F=U=0;F<u-1;F++)for(O[F]=U,M=0;M<1<<T[F];M++)v[U++]=F;for(v[U-1]=F,F=J=0;F<16;F++)for(j[F]=J,M=0;M<1<<k[F];M++)V[J++]=F;for(J>>=7;F<f;F++)for(j[F]=J<<7,M=0;M<1<<k[F]-7;M++)V[256+J++]=F;for(b=0;b<=h;b++)et[b]=0;for(M=0;M<=143;)L[2*M+1]=8,M++,et[8]++;for(;M<=255;)L[2*M+1]=9,M++,et[9]++;for(;M<=279;)L[2*M+1]=7,M++,et[7]++;for(;M<=287;)L[2*M+1]=8,M++,et[8]++;for(Et(L,m+1,et),M=0;M<f;M++)C[2*M+1]=5,C[2*M]=yt(M,5);K=new it(L,T,p+1,m,h),Y=new it(C,k,0,f,h),nt=new it(new Array(0),W,0,_,S)}(),B=!0),R.l_desc=new H(R.dyn_ltree,K),R.d_desc=new H(R.dyn_dtree,Y),R.bl_desc=new H(R.bl_tree,nt),R.bi_buf=0,R.bi_valid=0,xt(R)},r._tr_stored_block=D,r._tr_flush_block=function(R,M,b,U){var F,J,et=0;0<R.level?(R.strm.data_type===2&&(R.strm.data_type=function(st){var ct,gt=4093624447;for(ct=0;ct<=31;ct++,gt>>>=1)if(1&gt&&st.dyn_ltree[2*ct]!==0)return o;if(st.dyn_ltree[18]!==0||st.dyn_ltree[20]!==0||st.dyn_ltree[26]!==0)return a;for(ct=32;ct<p;ct++)if(st.dyn_ltree[2*ct]!==0)return a;return o}(R)),pt(R,R.l_desc),pt(R,R.d_desc),et=function(st){var ct;for(x(st,st.dyn_ltree,st.l_desc.max_code),x(st,st.dyn_dtree,st.d_desc.max_code),pt(st,st.bl_desc),ct=_-1;3<=ct&&st.bl_tree[2*w[ct]+1]===0;ct--);return st.opt_len+=3*(ct+1)+5+5+4,ct}(R),F=R.opt_len+3+7>>>3,(J=R.static_len+3+7>>>3)<=F&&(F=J)):F=J=b+5,b+4<=F&&M!==-1?D(R,M,b,U):R.strategy===4||J===F?($(R,2+(U?1:0),3),z(R,L,C)):($(R,4+(U?1:0),3),function(st,ct,gt,St){var Dt;for($(st,ct-257,5),$(st,gt-1,5),$(st,St-4,4),Dt=0;Dt<St;Dt++)$(st,st.bl_tree[2*w[Dt]+1],3);Z(st,st.dyn_ltree,ct-1),Z(st,st.dyn_dtree,gt-1)}(R,R.l_desc.max_code+1,R.d_desc.max_code+1,et+1),z(R,R.dyn_ltree,R.dyn_dtree)),xt(R),U&&_t(R)},r._tr_tally=function(R,M,b){return R.pending_buf[R.d_buf+2*R.last_lit]=M>>>8&255,R.pending_buf[R.d_buf+2*R.last_lit+1]=255&M,R.pending_buf[R.l_buf+R.last_lit]=255&b,R.last_lit++,M===0?R.dyn_ltree[2*b]++:(R.matches++,M--,R.dyn_ltree[2*(v[b]+p+1)]++,R.dyn_dtree[2*q(M)]++),R.last_lit===R.lit_bufsize-1},r._tr_align=function(R){$(R,2,3),tt(R,y,L),function(M){M.bi_valid===16?(ht(M,M.bi_buf),M.bi_buf=0,M.bi_valid=0):8<=M.bi_valid&&(M.pending_buf[M.pending++]=255&M.bi_buf,M.bi_buf>>=8,M.bi_valid-=8)}(R)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(o,a){if(!o.setImmediate){var l,c,u,p,m=1,f={},_=!1,g=o.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(o);h=h&&h.setTimeout?h:o,l={}.toString.call(o.process)==="[object process]"?function(E){process.nextTick(function(){S(E)})}:function(){if(o.postMessage&&!o.importScripts){var E=!0,A=o.onmessage;return o.onmessage=function(){E=!1},o.postMessage("","*"),o.onmessage=A,E}}()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",y,!1):o.attachEvent("onmessage",y),function(E){o.postMessage(p+E,"*")}):o.MessageChannel?((u=new MessageChannel).port1.onmessage=function(E){S(E.data)},function(E){u.port2.postMessage(E)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(E){var A=g.createElement("script");A.onreadystatechange=function(){S(E),A.onreadystatechange=null,c.removeChild(A),A=null},c.appendChild(A)}):function(E){setTimeout(S,0,E)},h.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var A=new Array(arguments.length-1),P=0;P<A.length;P++)A[P]=arguments[P+1];var T={callback:E,args:A};return f[m]=T,l(m),m++},h.clearImmediate=d}function d(E){delete f[E]}function S(E){if(_)setTimeout(S,0,E);else{var A=f[E];if(A){_=!0;try{(function(P){var T=P.callback,k=P.args;switch(k.length){case 0:T();break;case 1:T(k[0]);break;case 2:T(k[0],k[1]);break;case 3:T(k[0],k[1],k[2]);break;default:T.apply(a,k)}})(A)}finally{d(E),_=!1}}}}function y(E){E.source===o&&typeof E.data=="string"&&E.data.indexOf(p)===0&&S(+E.data.slice(p.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Ms<"u"?Ms:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(qu);var Z0=qu.exports;const K0=j0(Z0);function $0(i,t){const e=URL.createObjectURL(i),n=document.createElement("a");n.href=e,n.download=t,n.click(),URL.revokeObjectURL(e)}async function J0({mesh:i,dimensions:t,imageFiles:e,chamfer:n}){const s=new Y0().parse(i,{binary:!1}),o=new Blob([s],{type:"model/stl"}),a=!!(n!=null&&n.enabled),l=a?n.depth:0,c=[`width_in=${t.width}`,`height_in=${t.height}`,`depth_in=${t.depth}`,`pad_x_in=${t.padX??0}`,`pad_y_in=${t.padY??0}`,`chamfer_enabled=${a}`,`chamfer_angle_deg=${a?45:0}`,`chamfer_depth_in=${l}`,`image_filenames=${e!=null&&e.length?e.map(m=>m.name).join(","):"none"}`,`generated_at=${new Date().toISOString()}`].join(`
`),u=new K0;u.file("panel.stl",o),u.file("metadata.txt",c),Array.isArray(e)&&e.forEach(m=>{m&&u.file(`image_${m.name}`,m)});const p=await u.generateAsync({type:"blob"});$0(p,"panel_export.zip")}const Yu="panel",Q0="Signage Panel",tv=!0,ev=!0,nv=!1,iv=null,rv=4,sv=["horizontal","vertical","grid"],av={width:30,height:10,depth:.2},Ic=.5,ov=4/25.4,Gr=ov/2;function lv(){return Gr}function Do({width:i,height:t,depth:e,chamfer:n}){if(!n)return 0;const r=Math.max(.001,e*.3),s=Math.min(i/2,t/2,e/2);return Math.min(r,s)}function ju({width:i,height:t,depth:e,chamfer:n}){const r=Do({width:i,height:t,depth:e,chamfer:n});return{width:Math.max(.01,i-r*2),height:Math.max(.01,t-r*2)}}function Zu({width:i,height:t,innerW:e,innerH:n,screwHoles:r}){if(!r)return[];const s=.01,o=e/2-Gr-s,a=n/2-Gr-s;if(o<=0||a<=0)return[];const l=i/2-Ic,c=t/2-Ic,u=Math.min(l,o),p=Math.min(c,a);return u<=0||p<=0?[]:[{x:u,y:p},{x:-u,y:p},{x:-u,y:-p},{x:u,y:-p}]}function cv(i,{width:t,height:e,innerW:n,innerH:r,screwHoles:s}){if(!s)return;Zu({width:t,height:e,innerW:n,innerH:r,screwHoles:s}).forEach(({x:a,y:l})=>{const c=new fo;c.absellipse(a,l,Gr,Gr,0,Math.PI*2,!1,0),i.holes.push(c)})}function Uc({width:i,height:t,innerW:e,innerH:n,screwHoles:r}){const s=new Fu;return s.moveTo(-e/2,-n/2),s.lineTo(e/2,-n/2),s.lineTo(e/2,n/2),s.lineTo(-e/2,n/2),s.closePath(),cv(s,{width:i,height:t,innerW:e,innerH:n,screwHoles:r}),s}function Ku({width:i,height:t,depth:e,chamfer:n,screwHoles:r}){if(!n){if(!r)return new Un(i,t,e);const m=Uc({width:i,height:t,innerW:i,innerH:t,screwHoles:r}),f=new ks(m,{depth:e,bevelEnabled:!1,steps:1,curveSegments:24});return f.center(),f}const s=Do({width:i,height:t,depth:e,chamfer:n}),o=ju({width:i,height:t,depth:e,chamfer:n}),a=o.width,l=o.height,c=Uc({width:i,height:t,innerW:a,innerH:l,screwHoles:r}),u=Math.max(.01,e-s*2),p=new ks(c,{depth:u,bevelEnabled:!0,bevelSize:s,bevelThickness:s,bevelSegments:1,steps:1,curveSegments:1});return p.center(),p}function uv(i){return Ku(i)}function Io(i,t){const e=Math.max(1,t);let n=1,r=e;return i==="vertical"?(n=e,r=1):i==="grid"&&(n=2,r=2),{rows:n,cols:r,count:e}}function pi(i){if(!(i!=null&&i.image))return null;const e=Number(i.rotation||0)%360%180!==0,n=e?i.image.height:i.image.width,r=e?i.image.width:i.image.height;return!n||!r?null:n/r}function pn(i){const t=(i==null?void 0:i.margin)??{};return{left:Math.max(0,t.left??0),right:Math.max(0,t.right??0),top:Math.max(0,t.top??0),bottom:Math.max(0,t.bottom??0)}}function hv({width:i,height:t,layout:e,imageCount:n,images:r}){const s=r.slice(0,n).filter(u=>u.image);if(s.length===0)return t;if(e==="horizontal"){const u=s.reduce((_,g)=>_+(pi(g)??0),0),p=s.reduce((_,g)=>{const h=pn(g);return _+h.left+h.right},0),m=s.reduce((_,g)=>{const h=pn(g);return Math.max(_,h.top+h.bottom)},0),f=(i-p)/Math.max(.001,u);return Math.max(1,f+m)}if(e==="vertical"){let u=0;return s.forEach(p=>{const m=pn(p),f=pi(p)??.001,_=Math.max(.01,i-m.left-m.right);u+=_/f+m.top+m.bottom}),Math.max(1,u)}const{rows:o,cols:a}=Io(e,n),l=i/a;let c=0;return r.slice(0,n).forEach(u=>{const p=pi(u);if(!p)return;const m=pn(u),_=Math.max(.01,l-m.left-m.right)/p+m.top+m.bottom;c=Math.max(c,_)}),Math.max(1,c*o)}function dv({width:i,height:t,layout:e,imageCount:n,images:r}){const s=r.slice(0,n).filter(u=>u.image);if(s.length===0)return i;if(e==="horizontal"){const u=s.reduce((_,g)=>_+(pi(g)??0),0),p=s.reduce((_,g)=>{const h=pn(g);return _+h.left+h.right},0),m=s.reduce((_,g)=>{const h=pn(g);return Math.max(_,h.top+h.bottom)},0),f=t-m;return Math.max(1,f*Math.max(.001,u)+p)}if(e==="vertical"){const u=s.reduce((_,g)=>{const h=pi(g)??.001;return _+(h>0?1/h:0)},0),p=s.reduce((_,g)=>{const h=pn(g);return _+h.top+h.bottom},0),m=s.reduce((_,g)=>{const h=pn(g);return Math.max(_,h.left+h.right)},0),f=(t-p)/Math.max(.001,u);return Math.max(1,f+m)}const{rows:o,cols:a}=Io(e,n),l=t/o;let c=0;return r.slice(0,n).forEach(u=>{const p=pi(u);if(!p)return;const m=pn(u),_=Math.max(.01,l-m.top-m.bottom)*p+m.left+m.right;c=Math.max(c,_)}),Math.max(1,c*a)}const fv=Object.freeze(Object.defineProperty({__proto__:null,PANEL_MODEL_ID:Yu,createGeometry:uv,createPanelGeometry:Ku,defaultDimensions:av,fixedDepth:iv,getChamferBevel:Do,getImageAspect:pi,getLayoutGrid:Io,getMatchedHeight:hv,getMatchedWidth:dv,getPrintableSize:ju,getScrewHoleCenters:Zu,getScrewHoleRadiusIn:lv,getSlotMargins:pn,layoutOptions:sv,maxImages:rv,name:Q0,supportsBackImage:nv,supportsChamfer:tv,supportsScrewHoles:ev},Symbol.toStringTag,{value:"Module"})),$u="projecting-tray",pv="Projecting Tray",mv=!1,gv=!1,_v=!0,vv=3,xv=15,yv=10,Sv={width:15,height:10,depth:3},Mv=1,Ev=[];function bv({width:i,height:t}){return{width:Math.max(.01,i),height:Math.max(.01,t)}}function wv(){return 0}function Tv(){return[]}function Av(){return 0}function Cv({width:i,height:t,depth:e}){return new Un(i,t,e)}function Rv({height:i}){return i}function Pv({width:i}){return i}const Lv=Object.freeze(Object.defineProperty({__proto__:null,PROJECTING_TRAY_ID:$u,createGeometry:Cv,defaultDimensions:Sv,fixedDepth:vv,fixedHeight:yv,fixedWidth:xv,getChamferBevel:wv,getMatchedHeight:Rv,getMatchedWidth:Pv,getPrintableSize:bv,getScrewHoleCenters:Tv,getScrewHoleRadiusIn:Av,layoutOptions:Ev,maxImages:Mv,name:pv,supportsBackImage:_v,supportsChamfer:mv,supportsScrewHoles:gv},Symbol.toStringTag,{value:"Module"})),Ju={[Yu]:fv,[$u]:Lv};function Dv(i){return Ju[i]||null}function Qu(){return Object.keys(Ju)}const ka={},Iv=(ka==null?void 0:ka.VITE_API_BASE)||"";let Vn=null;function Ha(){return Qu().map(i=>({id:i,name:i.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "),preview:{image:`/models/${i}.png`}}))}function Uv(){return Qu()[0]??null}function th(i){return Dv(i)}async function Nv(){if(Vn)return Vn;try{const i=await fetch(`${Iv}/api/models`);if(!i.ok)return Vn=Ha(),Vn;const t=await i.json(),e=Array.isArray(t==null?void 0:t.models)?t.models:[];return Vn=e.length?e:Ha(),Vn}catch{return Vn=Ha(),Vn}}const Ga={},Ov=(Ga==null?void 0:Ga.VITE_API_BASE)||"";async function Fv(i){const t=await fetch(`${Ov}/api/pricing/quote`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!t.ok){const e=await t.json().catch(()=>({})),n=(e==null?void 0:e.error)||"Failed to fetch quote";throw new Error(n)}return t.json()}const Va={},Bv=(Va==null?void 0:Va.VITE_API_BASE)||"";async function zv({amount:i,currency:t}){const e=await fetch(`${Bv}/api/payments/intent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:i,currency:t})});if(!e.ok){const n=await e.json().catch(()=>({})),r=(n==null?void 0:n.error)||"Failed to create payment intent";throw new Error(r)}return e.json()}var eh="https://js.stripe.com/v3",kv=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;var Hv=function(){for(var t=document.querySelectorAll('script[src^="'.concat(eh,'"]')),e=0;e<t.length;e++){var n=t[e];if(kv.test(n.src))return n}return null},Nc=function(t){var e="",n=document.createElement("script");n.src="".concat(eh).concat(e);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},Gv=function(t,e){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"3.4.1",startTime:e})},br=null,bs=null,ws=null,Vv=function(t){return function(){t(new Error("Failed to load Stripe.js"))}},Wv=function(t,e){return function(){window.Stripe?t(window.Stripe):e(new Error("Stripe.js not available"))}},Xv=function(t){return br!==null?br:(br=new Promise(function(e,n){if(typeof window>"u"||typeof document>"u"){e(null);return}if(window.Stripe){e(window.Stripe);return}try{var r=Hv();if(!(r&&t)){if(!r)r=Nc(t);else if(r&&ws!==null&&bs!==null){var s;r.removeEventListener("load",ws),r.removeEventListener("error",bs),(s=r.parentNode)===null||s===void 0||s.removeChild(r),r=Nc(t)}}ws=Wv(e,n),bs=Vv(n),r.addEventListener("load",ws),r.addEventListener("error",bs)}catch(o){n(o);return}}),br.catch(function(e){return br=null,Promise.reject(e)}))},qv=function(t,e,n){if(t===null)return null;var r=t.apply(void 0,e);return Gv(r,n),r},wr,nh=!1,ih=function(){return wr||(wr=Xv(null).catch(function(t){return wr=null,Promise.reject(t)}),wr)};Promise.resolve().then(function(){return ih()}).catch(function(i){nh||console.warn(i)});var Yv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];nh=!0;var r=Date.now();return ih().then(function(s){return qv(s,e,r)})};const Wa={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},cn=document.querySelector("#viewport"),Je=document.querySelector("#width"),Qe=document.querySelector("#height"),Le=document.querySelector("#depth"),Xa=document.querySelector("#depthField"),Tr=document.querySelector("#modelList"),Yn=document.querySelector("#chamfer"),mi=document.querySelector("#imageLayout"),Oc=document.querySelector("#layoutField"),Fc=document.querySelector("#scaleSection"),Ur=document.querySelector("#addImageSlotBottom"),gi=Array.from(document.querySelectorAll("#imageSlots .slot")),Bc=gi.map(i=>i.querySelector(".field span")),rh=document.querySelector("#matchWidth"),sh=document.querySelector("#matchHeight"),Xe=document.querySelector("#screwholes"),Ts=document.querySelector('[data-section="screwholes"]'),zc=document.querySelector("#togglePanel"),jv=document.querySelector("#exportBtn"),kc=document.querySelector("#imageStatus"),Zi=document.querySelector("#backImageSection"),Hc=document.querySelector("#backImageInput"),As=document.querySelector("#backImageStatus"),Gc=document.querySelector("#backAdvancedToggle"),Hs=document.querySelector("#backAdvancedPanel"),Vc=document.querySelector("#backMarginsToggle"),Gs=document.querySelector("#backMarginsPanel"),qa=document.querySelector("#backRotation"),Ya=document.querySelector("#backMarginLeft"),ja=document.querySelector("#backMarginRight"),Za=document.querySelector("#backMarginTop"),Ka=document.querySelector("#backMarginBottom"),Zv=document.querySelector("#panel"),Kv=document.querySelector("#app"),$v=document.querySelectorAll(".section-toggle"),Wc=document.querySelector('[data-section="dimensions"]'),Pn=document.querySelector("#helpOverlay"),Xc=document.querySelector("#helpBtn"),qc=document.querySelector("#priceTotal"),Jv=document.querySelector("#priceMaterials"),Qv=document.querySelector("#priceLabor"),tx=document.querySelector("#priceMargin"),ex=document.querySelector("#priceVat"),ar=document.querySelector("#priceStatus"),Yc=document.querySelector("#payBtn"),Vs=document.querySelector("#payConfirmBtn"),jc=document.querySelector("#paymentElement"),oe=document.querySelector("#payStatus"),ah=Uv();let Ft=th(ah);if(!Ft)throw new Error("Default model is not registered");const Ki=Ft.defaultDimensions??{width:Number(Je.value),height:Number(Qe.value),depth:Number(Le.value)},Q={modelId:ah,width:Ki.width,height:Ki.height,depth:Ki.depth,chamfer:Yn.checked,screwHoles:(Xe==null?void 0:Xe.checked)??!1,backImage:null,backFile:null,backRotation:0,backMargin:{left:0,right:0,top:0,bottom:0},lastFreeDimensions:{width:Ki.width,height:Ki.height,depth:Ki.depth},lastFreeSettings:{chamfer:Yn.checked,screwHoles:(Xe==null?void 0:Xe.checked)??!1,layout:mi.value},modelDimensions:{},imageCount:1,layout:mi.value,images:Array.from({length:4},()=>({image:null,file:null,rotation:0,margin:{left:0,right:0,top:0,bottom:0}}))};let $a=null,Rs=null,nr=null,ir=null,Ar=null;Je.value=Q.width.toFixed(2);Qe.value=Q.height.toFixed(2);Le.value=Q.depth.toFixed(2);function _n(i={}){return{width:Q.width,height:Q.height,depth:Q.depth,chamfer:Q.chamfer,screwHoles:Q.screwHoles,...i}}function oh(i){var l,c;const t=th(i);if(!t)return;const e=Ft;(e==null?void 0:e.fixedWidth)!=null&&(e==null?void 0:e.fixedHeight)!=null&&(e==null?void 0:e.fixedDepth)!=null||(Q.lastFreeDimensions={width:Q.width,height:Q.height,depth:Q.depth},Q.lastFreeSettings={chamfer:Q.chamfer,screwHoles:Q.screwHoles,layout:Q.layout}),Q.modelId&&(Q.modelDimensions[Q.modelId]={width:Q.width,height:Q.height,depth:Q.depth}),Ft=t,Q.modelId=i;const r=Ft.fixedWidth!=null&&Ft.fixedHeight!=null&&Ft.fixedDepth!=null;r&&(Q.chamfer=!1,Q.screwHoles=!1,Q.backImage=null,Q.backFile=null);const s=Ft.defaultDimensions??Q.lastFreeDimensions,o=Q.modelDimensions[i]??s;Ft.fixedDepth!=null?(Q.depth=Ft.fixedDepth,Le.value=Q.depth.toFixed(2),Le.min=String(Ft.fixedDepth),Le.max=String(Ft.fixedDepth),Le.disabled=!0):(Q.depth=o.depth,Le.value=Q.depth.toFixed(2),Le.min="0.1",Le.max="1",Le.disabled=!1),Ft.fixedWidth!=null?(Q.width=Ft.fixedWidth,Je.value=Q.width.toFixed(2),Je.disabled=!0):(Q.width=o.width,Je.value=Q.width.toFixed(2),Je.disabled=!1),Ft.fixedHeight!=null?(Q.height=Ft.fixedHeight,Qe.value=Q.height.toFixed(2),Qe.disabled=!0):(Q.height=o.height,Qe.value=Q.height.toFixed(2),Qe.disabled=!1),Wc&&Wc.classList.toggle("hidden",r),r||(Q.chamfer=Q.lastFreeSettings.chamfer,Yn.checked=Q.chamfer,Q.screwHoles=Q.lastFreeSettings.screwHoles,Xe&&(Xe.checked=Q.screwHoles),Q.layout=Q.lastFreeSettings.layout,mi.value=Q.layout),r&&(Q.modelDimensions[i]={width:Q.width,height:Q.height,depth:Q.depth}),Ft.supportsChamfer?Yn.disabled=!1:(Q.chamfer=!1,Yn.checked=!1,Yn.disabled=!0),Xa&&(Ft.fixedDepth!=null?Xa.classList.add("hidden"):Xa.classList.remove("hidden")),Ft.supportsScrewHoles?Ts&&Ts.classList.remove("hidden"):(Q.screwHoles=!1,Xe&&(Xe.checked=!1),Ts&&Ts.classList.add("hidden")),Ft.supportsBackImage?Zi==null||Zi.classList.remove("hidden"):Zi==null||Zi.classList.add("hidden"),Fc&&Fc.classList.toggle("hidden",r);const a=Ft.maxImages??1;if(Ft.supportsBackImage?Ps(1):Q.imageCount>a?Ps(a):Q.imageCount<1&&Ps(1),Ur.disabled=a<=1,Ur&&Ur.classList.toggle("hidden",a<=1),(l=Ft.layoutOptions)!=null&&l.length?mi.disabled=!1:mi.disabled=!0,Oc){const u=(Ft.maxImages??1)<=1||!((c=Ft.layoutOptions)!=null&&c.length);Oc.classList.toggle("hidden",u)}Bc[0]&&(Bc[0].textContent=Ft.supportsBackImage?"Front Image":"Image 1"),bi(),Ie(),In(),vi(),Ei()}async function nx(){if(!Tr)return;const i=await Nv();Tr.innerHTML="",i.forEach((t,e)=>{var c,u;const n=document.createElement("div");n.className="model-item",n.dataset.modelId=t.id,(c=t.preview)!=null&&c.image&&(n.dataset.previewImage=t.preview.image),t.id===Q.modelId&&n.classList.add("selected");const r=document.createElement("div");r.className="model-thumb";const s=document.createElement("img");s.alt=t.name||t.id,s.loading="lazy",s.className="model-thumb-image",s.src=((u=t.preview)==null?void 0:u.image)||"",r.appendChild(s);const o=document.createElement("div");o.className="model-info";const a=document.createElement("div");a.className="model-name",a.textContent=t.name||t.id;const l=document.createElement("div");l.className="model-meta",t.description?l.textContent=t.description:t.version?l.textContent=`v${t.version}`:l.textContent="",o.appendChild(a),o.appendChild(l),n.appendChild(r),n.appendChild(o),Tr.appendChild(n)}),Tr.addEventListener("click",t=>{const e=t.target.closest(".model-item");if(!e)return;const n=e.dataset.modelId;n&&(oh(n),Array.from(Tr.querySelectorAll(".model-item")).forEach(r=>{r.classList.toggle("selected",r.dataset.modelId===n)}))})}function Cr(i,t="GBP"){return Number.isFinite(i)?new Intl.NumberFormat("en-GB",{style:"currency",currency:t,maximumFractionDigits:2}).format(i):"--"}function ix(i){var t,e,n,r;qc&&(Rs=i,qc.textContent=Cr(i.total,i.currency),Jv.textContent=Cr(((t=i.breakdown)==null?void 0:t.materials)??0,i.currency),Qv.textContent=Cr(((e=i.breakdown)==null?void 0:e.labor)??0,i.currency),tx.textContent=Cr(((n=i.breakdown)==null?void 0:n.margin)??0,i.currency),ex.textContent=Cr(((r=i.breakdown)==null?void 0:r.vat)??0,i.currency),ar&&(ar.textContent="Quote updated."))}async function rx(){if(ar){ar.textContent="Updating quote...";try{const i=await Fv({modelId:Q.modelId,inputs:{width:Q.width,height:Q.height,depth:Q.depth,chamfer:Q.chamfer,screwHoles:Q.screwHoles}});ix(i)}catch(i){ar.textContent=(i==null?void 0:i.message)||"Quote failed."}}}function Ei(){ar&&($a&&window.clearTimeout($a),$a=window.setTimeout(()=>{rx()},250))}const ke=new Z_;ke.background=new Gt("#0f1317");const Be=new Ke(45,1,.1,2e3);Be.position.set(0,0,80);Be.lookAt(0,0,0);const ee=new Ru({antialias:!0});ee.setPixelRatio(window.devicePixelRatio);ee.setSize(cn.clientWidth,cn.clientHeight);ee.shadowMap.enabled=!0;ee.autoClear=!1;cn.appendChild(ee.domElement);const He=new k0;He.setSize(cn.clientWidth,cn.clientHeight);He.domElement.style.position="absolute";He.domElement.style.top="0";He.domElement.style.left="0";He.domElement.style.pointerEvents="auto";cn.appendChild(He.domElement);He.domElement.addEventListener("pointerdown",Js);He.domElement.addEventListener("pointermove",Js);He.domElement.addEventListener("pointerup",Js);He.domElement.addEventListener("wheel",Js,{passive:!1});He.domElement.addEventListener("pointerdown",i=>{xh(i)&&(i.preventDefault(),i.stopPropagation())});cn.addEventListener("wheel",i=>{(i.target===ee.domElement||i.target===He.domElement)&&i.preventDefault()},{passive:!1});const On=new F0(Be,ee.domElement);On.enableDamping=!0;On.dampingFactor=.08;On.minDistance=10;On.maxDistance=300;On.target.set(0,0,0);const sx=new P0(16777215,2107443,.9);ke.add(sx);const Uo=new Po(16777215,1);Uo.position.set(60,90,50);Uo.castShadow=!0;ke.add(Uo);const lh=new Po(10470655,.45);lh.position.set(-40,30,20);ke.add(lh);const ch=new Po(16777215,.35);ch.position.set(-20,50,-60);ke.add(ch);const ax=fx();ke.add(ax);const ox=new N0(20);ke.add(ox);const uh=new Hu({color:2830648,metalness:.2,roughness:.65}),Ja=new Hu({color:3818059,metalness:.15,roughness:.7}),Pe=new hr({color:16777215});Pe.toneMapped=!1;Pe.transparent=!0;Pe.alphaTest=.5;const Ze=new hr({color:16777215});Ze.toneMapped=!1;Ze.transparent=!0;Ze.alphaTest=.5;let jn=ux();ke.add(jn);let $i=wx();ke.add($i);let rn=Ax();ke.add(rn);let fn=Rx();ke.add(fn);const Cn=new tr;ke.add(Cn);const Se=dx(),we=Array.from({length:4},()=>null);let un=null;const Xn={width:new X(0,0,0),height:new X(0,0,0),depth:new X(0,0,0)},Fe={active:null,startX:0,startY:0,startOffset:new X(0,0,0)},Nr={width:{},height:{},depth:{}},Ws={active:null},_o=new Gt(10134704),lx=new Gt(16762967);let _i=null;function hh(i){return!(Ft.fixedWidth!=null&&i==="width"||Ft.fixedHeight!=null&&i==="height"||Ft.fixedDepth!=null&&i==="depth")}function cx(i){return i instanceof Element?!!i.closest(".dim-label"):!1}function Js(i){if(!(cx(i.target)||_i)&&i.target!==ee.domElement){if(i.type==="wheel"){i.preventDefault(),ee.domElement.dispatchEvent(new WheelEvent(i.type,i));return}ee.domElement.dispatchEvent(new PointerEvent(i.type,i))}}function ux(){const i=Ft.createGeometry(_n()),t=new le(i,uh);return t.castShadow=!0,t.receiveShadow=!0,t.position.set(0,Q.height/2,0),t}function bi(){jn&&(jn.geometry.dispose(),jn.geometry=Ft.createGeometry(_n()),jn.position.set(0,Q.height/2,0)),Tx(),Cx(),Px(),Ie(),In(),vi()}function Ie(){const i=Ft.getPrintableSize(_n()),t=Math.min(4096,ee.capabilities.maxTextureSize||4096),e=Ft.getScrewHoleCenters({width:Q.width,height:Q.height,innerW:i.width,innerH:i.height,screwHoles:Q.screwHoles}),n=Mx().filter(a=>a==null?void 0:a.image),r={layout:Q.layout,maxSize:t,ppi:220,count:Math.max(1,n.length)};Pe.alphaMap&&Pe.alphaMap.dispose(),Pe.alphaMap=G0(i.width,i.height,e.map(a=>({...a,r:Ft.getScrewHoleRadiusIn()})),r);const s=n.length;if(s===0){Pe.map&&(Pe.map.dispose(),Pe.map=null),Pe.needsUpdate=!0,kc.textContent="No images loaded",Kc(!1);return}const o=Wu(n,i.width,i.height,r);Pe.map&&Pe.map.dispose(),Pe.map=o,Pe.needsUpdate=!0,kc.textContent=`${s} image${s===1?"":"s"} loaded`,Kc(!0)}function In(){if(!rn)return;if(!Ft.supportsBackImage){rn.visible=!1;return}if(rn.visible=!0,!Q.backImage){Ze.map&&(Ze.map.dispose(),Ze.map=null),Ze.needsUpdate=!0,As&&(As.textContent="No back image loaded");return}const i=Ft.getPrintableSize(_n()),e={layout:"horizontal",maxSize:Math.min(4096,ee.capabilities.maxTextureSize||4096),ppi:220,count:1},n=Wu([{image:Q.backImage,rotation:Q.backRotation,margin:Q.backMargin}],i.width,i.height,e);Ze.map&&Ze.map.dispose(),Ze.map=n,Ze.needsUpdate=!0,As&&(As.textContent="Back image loaded")}function Jn(i,t,e,n=1/0){if(i==="")return t;const r=Number(i);return Number.isFinite(r)?Math.min(Math.max(r,e),n):t}function fr(i){const t=Jn(Je.value,Q.width,1),e=Jn(Qe.value,Q.height,1,35),n=Jn(Le.value,Q.depth,.1,1);t===null||e===null||n===null||(Q.width=t,Q.height=e,Q.depth=n,bi(),Ei())}function Vr(){Je.value=Q.width.toFixed(2),Qe.value=Q.height.toFixed(2),Le.value=Q.depth.toFixed(2)}Je.addEventListener("input",()=>fr());Qe.addEventListener("input",()=>fr());Le.addEventListener("input",()=>fr());Yn.addEventListener("change",()=>{Q.chamfer=Yn.checked,bi(),Ei()});Xe&&Xe.addEventListener("change",()=>{Q.screwHoles=Xe.checked,bi(),Ei()});Je.addEventListener("blur",()=>{fr(),Vr()});Qe.addEventListener("blur",()=>{fr(),Vr()});Le.addEventListener("blur",()=>{fr(),Vr()});mi.addEventListener("change",()=>{Q.layout=mi.value,Ie()});Ur.addEventListener("click",()=>{Ps(Q.imageCount+1)});gi.forEach(i=>{const t=Number(i.dataset.index),e=i.querySelector(".image-input"),n=i.querySelector(".rotation"),r=i.querySelector(".toggle-advanced"),s=i.querySelector(".slot-advanced"),o=i.querySelector(".toggle-margins"),a=i.querySelector(".slot-margins"),l=i.querySelector(".margin-left"),c=i.querySelector(".margin-right"),u=i.querySelector(".margin-top"),p=i.querySelector(".margin-bottom"),m=i.querySelector(".remove-slot");s&&s.classList.add("collapsed"),r&&s&&r.addEventListener("click",()=>{s.classList.toggle("collapsed")}),a&&a.classList.add("collapsed"),o&&a&&o.addEventListener("click",()=>{a.classList.toggle("collapsed")}),e.addEventListener("change",f=>{var h;const _=(h=f.target.files)==null?void 0:h[0];if(!_){Q.images[t].image=null,Q.images[t].file=null,we[t]&&(URL.revokeObjectURL(we[t]),we[t]=null),Ie();return}const g=new Image;g.onload=()=>{Q.images[t].image=g,Q.images[t].file=_,Ie(),we[t]&&(URL.revokeObjectURL(we[t]),we[t]=null)},we[t]&&URL.revokeObjectURL(we[t]),we[t]=URL.createObjectURL(_),g.src=we[t]}),n.addEventListener("change",()=>{Q.images[t].rotation=Number(n.value)||0,Ie()}),l.addEventListener("input",()=>{Q.images[t].margin.left=Number(l.value)||0,Ie()}),c.addEventListener("input",()=>{Q.images[t].margin.right=Number(c.value)||0,Ie()}),u.addEventListener("input",()=>{Q.images[t].margin.top=Number(u.value)||0,Ie()}),p.addEventListener("input",()=>{Q.images[t].margin.bottom=Number(p.value)||0,Ie()}),m.addEventListener("click",()=>{bx(t)})});Hc&&Hc.addEventListener("change",i=>{var n;const t=(n=i.target.files)==null?void 0:n[0];if(!t){Q.backImage=null,Q.backFile=null,un&&(URL.revokeObjectURL(un),un=null),In();return}const e=new Image;e.onload=()=>{Q.backImage=e,Q.backFile=t,In(),un&&(URL.revokeObjectURL(un),un=null)},un&&URL.revokeObjectURL(un),un=URL.createObjectURL(t),e.src=un});Hs&&Hs.classList.add("collapsed");Gc&&Hs&&Gc.addEventListener("click",()=>{Hs.classList.toggle("collapsed")});Gs&&Gs.classList.add("collapsed");Vc&&Gs&&Vc.addEventListener("click",()=>{Gs.classList.toggle("collapsed")});qa&&qa.addEventListener("change",()=>{Q.backRotation=Number(qa.value)||0,In()});Ya&&Ya.addEventListener("input",()=>{Q.backMargin.left=Number(Ya.value)||0,In()});ja&&ja.addEventListener("input",()=>{Q.backMargin.right=Number(ja.value)||0,In()});Za&&Za.addEventListener("input",()=>{Q.backMargin.top=Number(Za.value)||0,In()});Ka&&Ka.addEventListener("input",()=>{Q.backMargin.bottom=Number(Ka.value)||0,In()});zc.addEventListener("click",()=>{const i=Zv.classList.toggle("collapsed");Kv.classList.toggle("panel-floating",i),zc.setAttribute("aria-label",i?"Expand panel":"Collapse panel"),Qs()});$v.forEach(i=>{i.addEventListener("click",()=>{const t=i.closest(".section");t&&t.classList.toggle("collapsed")})});function dh(){Pn&&(Pn.classList.add("is-visible"),Pn.setAttribute("aria-hidden","false"))}function fh(){Pn&&(Pn.classList.remove("is-visible"),Pn.setAttribute("aria-hidden","true"))}Xc&&Xc.addEventListener("click",()=>{dh()});Pn&&Pn.addEventListener("click",i=>{i.target===Pn&&fh()});window.addEventListener("keydown",i=>{i.key==="Escape"&&fh()});rh.addEventListener("click",()=>{if(!Sh())return;const t=Jn(Ft.getMatchedWidth({width:Q.width,height:Q.height,layout:Q.layout,imageCount:Q.imageCount,images:Q.images}),Q.width,1);Q.width=t,Je.value=Q.width.toFixed(2),bi(),Ie(),Ei()});sh.addEventListener("click",()=>{if(!Sh())return;const t=Jn(Ft.getMatchedHeight({width:Q.width,height:Q.height,layout:Q.layout,imageCount:Q.imageCount,images:Q.images}),Q.height,1,35);Q.height=t,Qe.value=Q.height.toFixed(2),bi(),Ie(),Ei()});jv.addEventListener("click",async()=>{const i=Ft.createGeometry(_n({screwHoles:!!Ft.supportsScrewHoles,chamfer:Ft.supportsChamfer?Q.chamfer:!1}));i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere();const t=new le(i,uh);t.position.copy(jn.position),t.rotation.copy(jn.rotation),t.scale.copy(jn.scale),t.updateMatrixWorld(!0),await J0({mesh:t,dimensions:{width:Q.width,height:Q.height,depth:Q.depth,padX:0,padY:0},imageFiles:Ex(),chamfer:{enabled:Ft.supportsChamfer?Q.chamfer:!1,depth:Ft.supportsChamfer?Ft.getChamferBevel(_n()):0}}),i.dispose()});Yc&&Yc.addEventListener("click",async()=>{if(!Rs){oe&&(oe.textContent="Quote not available yet.");return}oe&&(oe.textContent="Creating payment intent...");try{const i=await zv({amount:Rs.total,currency:Rs.currency});if(!(i!=null&&i.clientSecret)){oe&&(oe.textContent="Intent created (no client secret returned).");return}const t=Wa==null?void 0:Wa.VITE_STRIPE_PUBLISHABLE_KEY;if(!t){oe&&(oe.textContent="Missing VITE_STRIPE_PUBLISHABLE_KEY.");return}if(nr||(nr=await Yv(t)),!nr){oe&&(oe.textContent="Stripe failed to initialize.");return}ir&&(ir=null),ir=nr.elements({clientSecret:i.clientSecret}),Ar&&(Ar.unmount(),Ar=null),Ar=ir.create("payment"),jc&&Ar.mount(jc),Vs&&(Vs.disabled=!1),oe&&(oe.textContent="Payment intent ready.")}catch(i){oe&&(oe.textContent=(i==null?void 0:i.message)||"Payment intent failed.")}});Vs&&Vs.addEventListener("click",async()=>{if(!nr||!ir){oe&&(oe.textContent="Payment form not ready.");return}oe&&(oe.textContent="Confirming payment...");const{error:i}=await nr.confirmPayment({elements:ir,redirect:"if_required",confirmParams:{return_url:window.location.href}});if(i){oe&&(oe.textContent=i.message||"Payment failed.");return}oe&&(oe.textContent="Payment confirmed.")});const hx=new I0,Or=new B0(Be,ee.domElement);Or.center.copy(On.target);ee.domElement.addEventListener("pointerdown",i=>{if(xh(i)){i.preventDefault(),i.stopPropagation();return}Or.handleClick(i)&&(i.preventDefault(),i.stopPropagation())});function Qs(){const{clientWidth:i,clientHeight:t}=cn;Be.aspect=i/t,Be.updateProjectionMatrix(),ee.setSize(i,t),He.setSize(i,t)}const ph=new ResizeObserver(()=>{requestAnimationFrame(Qs)});ph.observe(cn);ph.observe(document.body);window.addEventListener("resize",Qs);function mh(){requestAnimationFrame(mh);const i=hx.getDelta();On.update(),Or.animating&&Or.update(i),ee.setViewport(0,0,cn.clientWidth,cn.clientHeight),ee.setScissorTest(!1),ee.clear(),ee.render(ke,Be),Or.render(ee),He.render(ke,Be)}mh();Qs();No();dh();Ei();nx();oh(Q.modelId);function dx(){const i=t=>{const e=document.createElement("div");return e.className="dim-label",e.textContent=t,new z0(e)};return{width:i(""),height:i(""),depth:i("")}}function fx(){const i=new Nn(1e4,1e4,1,1),t=new Dn({transparent:!0,depthWrite:!1,uniforms:{minorColor:{value:new Gt(8030102)},majorColor:{value:new Gt(6056569)},minorSpacing:{value:5},majorSpacing:{value:25},fadeDistance:{value:220}},vertexShader:`
      varying vec3 vWorldPos;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      varying vec3 vWorldPos;
      uniform vec3 minorColor;
      uniform vec3 majorColor;
      uniform float minorSpacing;
      uniform float majorSpacing;
      uniform float fadeDistance;
      float gridLine(float spacing) {
        vec2 coord = vWorldPos.xz / spacing;
        vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
        float line = min(grid.x, grid.y);
        return 1.0 - clamp(line, 0.0, 1.0);
      }
      void main() {
        float minor = gridLine(minorSpacing);
        float major = gridLine(majorSpacing);
        vec3 color = mix(minorColor, majorColor, major);
        float dist = length(cameraPosition.xz - vWorldPos.xz);
        float fade = 1.0 - smoothstep(0.0, fadeDistance, dist);
        float alpha = clamp(max(minor, major) * 1.4, 0.0, 1.0) * fade;
        gl_FragColor = vec4(color, alpha);
      }
    `}),e=new le(i,t);return e.rotation.x=-Math.PI/2,e.position.y=0,e}function vi(){Cn.traverse(m=>{m.geometry&&m.geometry.dispose(),m.material&&m.material.dispose()}),Cn.clear();const i=Math.max(.4,Math.min(Q.width,Q.height)*.03),t=new Ro(i*.4,i,12),e=.02,n=Q.width/2,r=Q.depth/2,s=0,o=new X(-n,s,r+e).add(Xn.width),a=new X(n,s,r+e).add(Xn.width),l=new X(n+e,s,r).add(Xn.height),c=new X(n+e,Q.height+s,r).add(Xn.height),u=new X(n,Q.height+s+e,-r).add(Xn.depth),p=new X(n,Q.height+s+e,r).add(Xn.depth);Nr.width=to(o,a,t),Nr.height=to(l,c,t),Nr.depth=to(u,p,t),Se.width.element.textContent=`${Q.width} in`,Se.height.element.textContent=`${Q.height} in`,Se.depth.element.textContent=`${Q.depth} in`,Se.width.position.copy(o).lerp(a,.5).add(new X(0,.6,0)),Se.height.position.copy(l).lerp(c,.5).add(new X(.6,0,0)),Se.depth.position.copy(u).lerp(p,.5).add(new X(.6,.6,0)),Cn.add(Se.width),Cn.add(Se.height),Cn.add(Se.depth),_h()}vi();const px={width:new X(0,0,1),height:new X(1,0,0),depth:new X(0,1,0)},mx=14;function gx(i){if(_i||!hh(i))return;const t=Se[i];if(!t)return;const e=t.element;_i=i,e.contentEditable="true",e.classList.add("is-editing"),e.focus();const n=window.getSelection(),r=document.createRange();r.selectNodeContents(e),n.removeAllRanges(),n.addRange(r)}function Qa(i){if(!_i)return;const t=_i,e=Se[t],n=e==null?void 0:e.element;n&&(i&&_x(t,n.textContent||""),n.contentEditable="false",n.classList.remove("is-editing")),_i=null}function _x(i,t){if(!hh(i)){vi();return}const e=String(t).toLowerCase().replace(/[^0-9.]/g,""),n=Number(e);if(!Number.isFinite(n)){Vr(),vi();return}i==="width"?(Q.width=Jn(n,Q.width,1),Je.value=Q.width.toFixed(2)):i==="height"?(Q.height=Jn(n,Q.height,1,35),Qe.value=Q.height.toFixed(2)):i==="depth"&&(Q.depth=Jn(n,Q.depth,.1,1),Le.value=Q.depth.toFixed(2)),bi(),Ie(),Vr(),vi()}function vx(i){const t=ee.domElement.getBoundingClientRect(),e=i.position.clone().project(Be);return{x:(e.x*.5+.5)*t.width,y:(-e.y*.5+.5)*t.height}}function gh(i){const t=ee.domElement.getBoundingClientRect(),e=i.clientX-t.left,n=i.clientY-t.top,r={width:Se.width,height:Se.height,depth:Se.depth};let s=null,o=1/0;return Object.entries(r).forEach(([a,l])=>{const c=vx(l),u=c.x-e,p=c.y-n,m=Math.hypot(u,p);m<mx&&m<o&&(s=a,o=m)}),s}function Zc(i){const t=ee.domElement.getBoundingClientRect(),e=i.clone().project(Be);return{x:(e.x*.5+.5)*t.width,y:(-e.y*.5+.5)*t.height}}function xx(i,t,e,n,r,s){const o=r-e,a=s-n,l=i-e,c=t-n,u=o*o+a*a||1,p=Math.max(0,Math.min(1,(l*o+c*a)/u)),m=e+o*p,f=n+a*p,_=i-m,g=t-f;return Math.hypot(_,g)}function yx(i){const t=ee.domElement.getBoundingClientRect(),e=i.clientX-t.left,n=i.clientY-t.top,r=gh(i);let s=r,o=r?0:1/0;const a=8;return["width","height","depth"].forEach(l=>{const c=Nr[l];if(!(c!=null&&c.start)||!(c!=null&&c.end))return;const u=Zc(c.start),p=Zc(c.end),m=xx(e,n,u.x,u.y,p.x,p.y);m<a&&m<o&&(s=l,o=m)}),s}function _h(){["width","height","depth"].forEach(i=>{const t=Nr[i];if(!(t!=null&&t.line)||!(t!=null&&t.coneA)||!(t!=null&&t.coneB))return;const e=Ws.active===i?lx:_o;t.line.material.color.copy(e),t.coneA.material.color.copy(e),t.coneB.material.color.copy(e),Se[i].element.classList.toggle("is-hover",Ws.active===i)})}function vh(i){if(Fe.active)return;const t=yx(i);t!==Ws.active&&(Ws.active=t,_h())}function xh(i){if(_i)return!1;const t=gh(i);if(!t)return!1;const e=ee.domElement.getBoundingClientRect();return Fe.active=t,Fe.startX=i.clientX-e.left,Fe.startY=i.clientY-e.top,Fe.startOffset.copy(Xn[t]),On.enabled=!1,!0}function Sx(i){if(!Fe.active)return;const t=ee.domElement.getBoundingClientRect(),e=i.clientX-t.left-Fe.startX,n=i.clientY-t.top-Fe.startY,r=Se[Fe.active],s=Be.position.distanceTo(r.position),o=2*Math.tan(hu.degToRad(Be.fov*.5))*s/t.height,a=new X(1,0,0).applyQuaternion(Be.quaternion),l=new X(0,1,0).applyQuaternion(Be.quaternion),c=a.multiplyScalar(e*o).add(l.multiplyScalar(-n*o)),u=px[Fe.active],p=u.clone().multiplyScalar(c.dot(u));Xn[Fe.active].copy(Fe.startOffset).add(p),vi()}function yh(){Fe.active&&(Fe.active=null,On.enabled=!0)}window.addEventListener("pointermove",i=>{Sx(i),vh(i)});window.addEventListener("pointerup",i=>{yh(),vh(i)});window.addEventListener("blur",()=>{yh()});["width","height","depth"].forEach(i=>{const t=Se[i].element;t.addEventListener("dblclick",e=>{e.preventDefault(),e.stopPropagation(),gx(i)}),t.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),Qa(!0)),e.key==="Escape"&&(e.preventDefault(),Qa(!1))}),t.addEventListener("blur",()=>{Qa(!0)})});function Kc(i){rh.disabled=!i,sh.disabled=!i}function Mx(){return Q.images.slice(0,Q.imageCount).map(i=>({image:i.image,rotation:i.rotation,margin:i.margin}))}function Ex(){const i=Q.images.slice(0,Q.imageCount).map(t=>t.file).filter(Boolean);return Ft.supportsBackImage&&Q.backFile&&i.push(Q.backFile),i}function Sh(){const i=Q.images.find((t,e)=>e<Q.imageCount&&t.image);return(i==null?void 0:i.image)??null}function No(){gi.forEach((i,t)=>{t<Q.imageCount?i.classList.remove("hidden"):i.classList.add("hidden")}),Ur.disabled=Q.imageCount>=4}function Ps(i){const t=Math.min(4,Math.max(1,i));if(t!==Q.imageCount){if(t<Q.imageCount)for(let e=t;e<Q.imageCount;e+=1){const n=Q.images[e];n!=null&&n.image&&(n.image=null,n.file=null),we[e]&&(URL.revokeObjectURL(we[e]),we[e]=null);const r=gi[e];if(r){const s=r.querySelector(".image-input");s&&(s.value="")}}Q.imageCount=t,No(),Ie()}}function bx(i){var r,s,o,a;if(Q.imageCount<=1)return;for(let l=i;l<Q.imageCount-1;l+=1){Q.images[l]={...Q.images[l+1],margin:{...Q.images[l+1].margin}};const c=gi[l+1],u=gi[l];if(c&&u){const p=u.querySelector(".image-input");p&&(p.value="");const m=c.querySelector(".rotation"),f=u.querySelector(".rotation");m&&f&&(f.value=m.value);const _={left:((r=c.querySelector(".margin-left"))==null?void 0:r.value)??0,right:((s=c.querySelector(".margin-right"))==null?void 0:s.value)??0,top:((o=c.querySelector(".margin-top"))==null?void 0:o.value)??0,bottom:((a=c.querySelector(".margin-bottom"))==null?void 0:a.value)??0},g={left:u.querySelector(".margin-left"),right:u.querySelector(".margin-right"),top:u.querySelector(".margin-top"),bottom:u.querySelector(".margin-bottom")};g.left&&(g.left.value=_.left),g.right&&(g.right.value=_.right),g.top&&(g.top.value=_.top),g.bottom&&(g.bottom.value=_.bottom)}}const t=Q.imageCount-1,e=Q.images[t];e!=null&&e.image&&(e.image=null,e.file=null),we[t]&&(URL.revokeObjectURL(we[t]),we[t]=null),Q.imageCount-=1;const n=gi[Q.imageCount];if(n){const l=n.querySelector(".image-input");l&&(l.value="")}No(),Ie()}function wx(){const i=Ft.getPrintableSize(_n()),t=new Nn(i.width,i.height),e=new le(t,Pe);return e.position.set(0,Q.height/2,Q.depth/2+.01),e}function Tx(){if(!$i)return;const i=Ft.getPrintableSize(_n());$i.geometry.dispose(),$i.geometry=new Nn(i.width,i.height),$i.position.set(0,Q.height/2,Q.depth/2+.01),$i.visible=!0}function Ax(){const i=Ft.getPrintableSize(_n()),t=new Nn(i.width,i.height),e=new le(t,Ze);return e.position.set(0,Q.height/2,-Q.depth/2-.01),e.rotation.y=Math.PI,e.visible=!!Ft.supportsBackImage,e}function Cx(){if(!rn)return;if(!Ft.supportsBackImage){rn.visible=!1;return}const i=Ft.getPrintableSize(_n());rn.geometry.dispose(),rn.geometry=new Nn(i.width,i.height),rn.position.set(0,Q.height/2,-Q.depth/2-.01),rn.rotation.y=Math.PI,rn.visible=!0}function Rx(){const i=new tr;return i.visible=!1,i}function $c(){fn&&(fn.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()}),fn.clear())}function Px(){if(!fn)return;if(Q.modelId!=="projecting-tray"){fn.visible=!1,$c();return}fn.visible=!0,$c();const i=10,t=3,e=.5,n=.75/2,r=2,s=2.5,o=.02,a=new Un(e,i,t),l=new le(a,Ja);l.position.set(-Q.width/2-e/2-r-o,Q.height/2,0),fn.add(l);const c=new Ks(n,n,r,20),u=new le(c,Ja);u.rotation.z=Math.PI/2,u.position.set(-Q.width/2-r/2-o,Q.height/2+s,0),fn.add(u);const p=new le(c,Ja);p.rotation.z=Math.PI/2,p.position.set(-Q.width/2-r/2-o,Q.height/2-s,0),fn.add(p)}function to(i,t,e){const n=new To({color:_o.clone()}),r=new hr({color:_o.clone()}),s=new qe().setFromPoints([i,t]),o=new Du(s,n);Cn.add(o);const a=new X().subVectors(t,i).normalize(),l=i.distanceTo(t),c=Math.min(l*.06,.6),u=new le(e,r);u.position.copy(i).add(a.clone().multiplyScalar(c)),u.quaternion.setFromUnitVectors(new X(0,1,0),a.clone().negate()),Cn.add(u);const p=new le(e,r);return p.position.copy(t).add(a.clone().multiplyScalar(-c)),p.quaternion.setFromUnitVectors(new X(0,1,0),a),Cn.add(p),{line:o,coneA:u,coneB:p,start:i.clone(),end:t.clone()}}
