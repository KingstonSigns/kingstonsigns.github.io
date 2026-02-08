(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ca="161",oi={ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pu=0,$a=1,mu=2,Jl=1,gu=2,dn=3,Fn=0,Oe=1,pn=2,In=0,Ni=1,Qa=2,to=3,eo=4,_u=5,Xn=100,vu=101,xu=102,no=103,io=104,yu=200,Su=201,Mu=202,Eu=203,ua=204,ha=205,bu=206,wu=207,Tu=208,Au=209,Cu=210,Ru=211,Pu=212,Lu=213,Du=214,Iu=0,Uu=1,Nu=2,ns=3,Ou=4,Fu=5,zu=6,Bu=7,$l=0,ku=1,Hu=2,Un=0,Gu=1,Vu=2,Wu=3,Xu=4,qu=5,Yu=6,Ql=300,ki=301,Hi=302,fa=303,da=304,ds=306,pa=1e3,Pe=1001,ma=1002,Re=1003,ro=1004,Zi=1005,De=1006,Ts=1007,Yn=1008,Nn=1009,ju=1010,Zu=1011,Ra=1012,tc=1013,Ln=1014,mn=1015,fr=1016,ec=1017,nc=1018,jn=1020,Ku=1021,Ke=1023,Ju=1024,$u=1025,Zn=1026,Gi=1027,Qu=1028,ic=1029,th=1030,rc=1031,sc=1033,As=33776,Cs=33777,Rs=33778,Ps=33779,so=35840,ao=35841,oo=35842,lo=35843,ac=36196,co=37492,uo=37496,ho=37808,fo=37809,po=37810,mo=37811,go=37812,_o=37813,vo=37814,xo=37815,yo=37816,So=37817,Mo=37818,Eo=37819,bo=37820,wo=37821,Ls=36492,To=36494,Ao=36495,eh=36283,Co=36284,Ro=36285,Po=36286,oc=3e3,Kn=3001,nh=3200,ih=3201,lc=0,rh=1,Xe="",ue="srgb",yn="srgb-linear",Pa="display-p3",ps="display-p3-linear",is="linear",te="srgb",rs="rec709",ss="p3",ci=7680,Lo=519,sh=512,ah=513,oh=514,cc=515,lh=516,ch=517,uh=518,hh=519,ga=35044,Do="300 es",_a=1035,vn=2e3,as=2001;class ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Io=1234567;const sr=Math.PI/180,dr=180/Math.PI;function rn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function La(i,t){return(i%t+t)%t}function fh(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function dh(i,t,e){return i!==t?(e-i)/(t-i):0}function ar(i,t,e){return(1-e)*i+e*t}function ph(i,t,e,n){return ar(i,t,1-Math.exp(-e*n))}function mh(i,t=1){return t-Math.abs(La(i,t*2)-t)}function gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _h(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xh(i,t){return i+Math.random()*(t-i)}function yh(i){return i*(.5-Math.random())}function Sh(i){i!==void 0&&(Io=i);let t=Io+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mh(i){return i*sr}function Eh(i){return i*dr}function va(i){return(i&i-1)===0&&i!==0}function bh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function os(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wh(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),d=s((t-n)/2),m=o((t-n)/2),p=s((n-t)/2),_=o((n-t)/2);switch(r){case"XYX":i.set(a*u,l*d,l*m,a*c);break;case"YZY":i.set(l*m,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*m,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const uc={DEG2RAD:sr,RAD2DEG:dr,generateUUID:rn,clamp:ge,euclideanModulo:La,mapLinear:fh,inverseLerp:dh,lerp:ar,damp:ph,pingpong:mh,smoothstep:gh,smootherstep:_h,randInt:vh,randFloat:xh,randFloatSpread:yh,seededRandom:Sh,degToRad:Mh,radToDeg:Eh,isPowerOfTwo:va,ceilPowerOfTwo:bh,floorPowerOfTwo:os,setQuaternionFromProperEuler:wh,normalize:Jt,denormalize:Je};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,r,s,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],m=n[2],p=n[5],_=n[8],g=r[0],f=r[3],h=r[6],S=r[1],y=r[4],E=r[7],A=r[2],P=r[5],T=r[8];return s[0]=o*g+a*S+l*A,s[3]=o*f+a*y+l*P,s[6]=o*h+a*E+l*T,s[1]=c*g+u*S+d*A,s[4]=c*f+u*y+d*P,s[7]=c*h+u*E+d*T,s[2]=m*g+p*S+_*A,s[5]=m*f+p*y+_*P,s[8]=m*h+p*E+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,m=a*l-u*s,p=c*s-o*l,_=e*d+n*m+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(r*c-u*n)*g,t[2]=(a*n-r*o)*g,t[3]=m*g,t[4]=(u*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ds.makeScale(t,e)),this}rotate(t){return this.premultiply(Ds.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ds.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Yt;function hc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Th(){const i=ls("canvas");return i.style.display="block",i}const Uo={};function Jn(i){i in Uo||(Uo[i]=!0,console.warn(i))}const No=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oo=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),br={[yn]:{transfer:is,primaries:rs,toReference:i=>i,fromReference:i=>i},[ue]:{transfer:te,primaries:rs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ps]:{transfer:is,primaries:ss,toReference:i=>i.applyMatrix3(Oo),fromReference:i=>i.applyMatrix3(No)},[Pa]:{transfer:te,primaries:ss,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Oo),fromReference:i=>i.applyMatrix3(No).convertLinearToSRGB()}},Ah=new Set([yn,ps]),$t={enabled:!0,_workingColorSpace:yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ah.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=br[t].toReference,r=br[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return br[i].primaries},getTransfer:function(i){return i===Xe?is:br[i].transfer}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ui;class fc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=ls("canvas")),ui.width=t.width,ui.height=t.height;const n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ls("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ch=0;class dc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=rn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Us(r[o].image)):s.push(Us(r[o]))}else s=Us(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rh=0;class Le extends ei{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Pe,r=Pe,s=De,o=Yn,a=Ke,l=Nn,c=Le.DEFAULT_ANISOTROPY,u=Xe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=rn(),this.name="",this.source=new dc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Jn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Kn?ue:Xe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pa:t.x=t.x-Math.floor(t.x);break;case Pe:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pa:t.y=t.y-Math.floor(t.y);break;case Pe:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ue?Kn:oc}set encoding(t){Jn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Kn?ue:Xe}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Ql;Le.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],f=l[6],h=l[10];if(Math.abs(u-m)<.01&&Math.abs(d-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+m)<.1&&Math.abs(d+g)<.1&&Math.abs(_+f)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,E=(p+1)/2,A=(h+1)/2,P=(u+m)/4,T=(d+g)/4,k=(_+f)/4;return y>E&&y>A?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=P/n,s=T/n):E>A?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=P/r,s=k/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=T/s,r=k/s),this.set(n,r,s,e),this}let S=Math.sqrt((f-_)*(f-_)+(d-g)*(d-g)+(m-u)*(m-u));return Math.abs(S)<.001&&(S=1),this.x=(f-_)/S,this.y=(d-g)/S,this.z=(m-u)/S,this.w=Math.acos((c+p+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ph extends ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Jn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Kn?ue:Xe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Le(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Ph{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pc extends Le{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lh extends Le{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const m=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=m,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==m||c!==p||u!==_){let f=1-a;const h=l*m+c*p+u*_+d*g,S=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const A=Math.sqrt(y),P=Math.atan2(A,h*S);f=Math.sin(f*P)/A,a=Math.sin(a*P)/A}const E=a*S;if(l=l*f+m*E,c=c*f+p*E,u=u*f+_*E,d=d*f+g*E,f===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],m=s[o+1],p=s[o+2],_=s[o+3];return t[e]=a*_+u*d+l*p-c*m,t[e+1]=l*_+u*m+c*d-a*p,t[e+2]=c*_+u*p+a*m-l*d,t[e+3]=u*_-a*d-l*m-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),m=l(n/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=m*u*d+c*p*_,this._y=c*p*d-m*u*_,this._z=c*u*_+m*p*d,this._w=c*u*d-m*p*_;break;case"YXZ":this._x=m*u*d+c*p*_,this._y=c*p*d-m*u*_,this._z=c*u*_-m*p*d,this._w=c*u*d+m*p*_;break;case"ZXY":this._x=m*u*d-c*p*_,this._y=c*p*d+m*u*_,this._z=c*u*_+m*p*d,this._w=c*u*d-m*p*_;break;case"ZYX":this._x=m*u*d-c*p*_,this._y=c*p*d+m*u*_,this._z=c*u*_-m*p*d,this._w=c*u*d+m*p*_;break;case"YZX":this._x=m*u*d+c*p*_,this._y=c*p*d+m*u*_,this._z=c*u*_-m*p*d,this._w=c*u*d-m*p*_;break;case"XZY":this._x=m*u*d-c*p*_,this._y=c*p*d-m*u*_,this._z=c*u*_+m*p*d,this._w=c*u*d+m*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],m=n+a+d;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,m=Math.sin(e*u)/c;return this._w=o*d+this._w*m,this._x=n*d+this._x*m,this._y=r*d+this._y*m,this._z=s*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,n=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ns.copy(this).projectOnVector(t),this.sub(Ns)}reflect(t){return this.sub(Ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new X,Fo=new sn;class yr{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ye):Ye.fromBufferAttribute(s,o),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),Tr.subVectors(this.max,Ki),hi.subVectors(t.a,Ki),fi.subVectors(t.b,Ki),di.subVectors(t.c,Ki),En.subVectors(fi,hi),bn.subVectors(di,fi),kn.subVectors(hi,di);let e=[0,-En.z,En.y,0,-bn.z,bn.y,0,-kn.z,kn.y,En.z,0,-En.x,bn.z,0,-bn.x,kn.z,0,-kn.x,-En.y,En.x,0,-bn.y,bn.x,0,-kn.y,kn.x,0];return!Os(e,hi,fi,di,Tr)||(e=[1,0,0,0,1,0,0,0,1],!Os(e,hi,fi,di,Tr))?!1:(Ar.crossVectors(En,bn),e=[Ar.x,Ar.y,Ar.z],Os(e,hi,fi,di,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new X,new X,new X,new X,new X,new X,new X,new X],Ye=new X,wr=new yr,hi=new X,fi=new X,di=new X,En=new X,bn=new X,kn=new X,Ki=new X,Tr=new X,Ar=new X,Hn=new X;function Os(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Hn.fromArray(i,s);const a=r.x*Math.abs(Hn.x)+r.y*Math.abs(Hn.y)+r.z*Math.abs(Hn.z),l=t.dot(Hn),c=e.dot(Hn),u=n.dot(Hn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Dh=new yr,Ji=new X,Fs=new X;class ms{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ji,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Fs)),this.expandByPoint(Ji.copy(t.center).sub(Fs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new X,zs=new X,Cr=new X,wn=new X,Bs=new X,Rr=new X,ks=new X;class gs{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){zs.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(zs);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Cr),a=wn.dot(this.direction),l=-wn.dot(Cr),c=wn.lengthSq(),u=Math.abs(1-o*o);let d,m,p,_;if(u>0)if(d=o*l-a,m=o*a-l,_=s*u,d>=0)if(m>=-_)if(m<=_){const g=1/u;d*=g,m*=g,p=d*(d+o*m+2*a)+m*(o*d+m+2*l)+c}else m=s,d=Math.max(0,-(o*m+a)),p=-d*d+m*(m+2*l)+c;else m=-s,d=Math.max(0,-(o*m+a)),p=-d*d+m*(m+2*l)+c;else m<=-_?(d=Math.max(0,-(-o*s+a)),m=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+m*(m+2*l)+c):m<=_?(d=0,m=Math.min(Math.max(-s,-l),s),p=m*(m+2*l)+c):(d=Math.max(0,-(o*s+a)),m=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+m*(m+2*l)+c);else m=o>0?-s:s,d=Math.max(0,-(o*m+a)),p=-d*d+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(zs).addScaledVector(Cr,m),p}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),r=cn.dot(cn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,r=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,r=(t.min.x-m.x)*c),u>=0?(s=(t.min.y-m.y)*u,o=(t.max.y-m.y)*u):(s=(t.max.y-m.y)*u,o=(t.min.y-m.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-m.z)*d,l=(t.max.z-m.z)*d):(a=(t.max.z-m.z)*d,l=(t.min.z-m.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,r,s){Bs.subVectors(e,t),Rr.subVectors(n,t),ks.crossVectors(Bs,Rr);let o=this.direction.dot(ks),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,t);const l=a*this.direction.dot(Rr.crossVectors(wn,Rr));if(l<0)return null;const c=a*this.direction.dot(Bs.cross(wn));if(c<0||l+c>o)return null;const u=-a*wn.dot(ks);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,r,s,o,a,l,c,u,d,m,p,_,g,f){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,d,m,p,_,g,f)}set(t,e,n,r,s,o,a,l,c,u,d,m,p,_,g,f){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=m,h[3]=p,h[7]=_,h[11]=g,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/pi.setFromMatrixColumn(t,0).length(),s=1/pi.setFromMatrixColumn(t,1).length(),o=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const m=o*u,p=o*d,_=a*u,g=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+_*c,e[5]=m-g*c,e[9]=-a*l,e[2]=g-m*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){const m=l*u,p=l*d,_=c*u,g=c*d;e[0]=m+g*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-_,e[6]=g+m*a,e[10]=o*l}else if(t.order==="ZXY"){const m=l*u,p=l*d,_=c*u,g=c*d;e[0]=m-g*a,e[4]=-o*d,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*u,e[9]=g-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const m=o*u,p=o*d,_=a*u,g=a*d;e[0]=l*u,e[4]=_*c-p,e[8]=m*c+g,e[1]=l*d,e[5]=g*c+m,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,p=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-m*d,e[8]=_*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+_,e[10]=m-g*d}else if(t.order==="XZY"){const m=o*l,p=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=m*d+g,e[5]=o*u,e[9]=p*d-_,e[2]=_*d-p,e[6]=a*u,e[10]=g*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ih,t,Uh)}lookAt(t,e,n){const r=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Tn.crossVectors(n,Be),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Tn.crossVectors(n,Be)),Tn.normalize(),Pr.crossVectors(Be,Tn),r[0]=Tn.x,r[4]=Pr.x,r[8]=Be.x,r[1]=Tn.y,r[5]=Pr.y,r[9]=Be.y,r[2]=Tn.z,r[6]=Pr.z,r[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],m=n[9],p=n[13],_=n[2],g=n[6],f=n[10],h=n[14],S=n[3],y=n[7],E=n[11],A=n[15],P=r[0],T=r[4],k=r[8],W=r[12],w=r[1],L=r[5],C=r[9],V=r[13],v=r[2],O=r[6],K=r[10],Y=r[14],et=r[3],j=r[7],nt=r[11],H=r[15];return s[0]=o*P+a*w+l*v+c*et,s[4]=o*T+a*L+l*O+c*j,s[8]=o*k+a*C+l*K+c*nt,s[12]=o*W+a*V+l*Y+c*H,s[1]=u*P+d*w+m*v+p*et,s[5]=u*T+d*L+m*O+p*j,s[9]=u*k+d*C+m*K+p*nt,s[13]=u*W+d*V+m*Y+p*H,s[2]=_*P+g*w+f*v+h*et,s[6]=_*T+g*L+f*O+h*j,s[10]=_*k+g*C+f*K+h*nt,s[14]=_*W+g*V+f*Y+h*H,s[3]=S*P+y*w+E*v+A*et,s[7]=S*T+y*L+E*O+A*j,s[11]=S*k+y*C+E*K+A*nt,s[15]=S*W+y*V+E*Y+A*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],m=t[10],p=t[14],_=t[3],g=t[7],f=t[11],h=t[15];return _*(+s*l*d-r*c*d-s*a*m+n*c*m+r*a*p-n*l*p)+g*(+e*l*p-e*c*m+s*o*m-r*o*p+r*c*u-s*l*u)+f*(+e*c*d-e*a*p-s*o*d+n*o*p+s*a*u-n*c*u)+h*(-r*a*u-e*l*d+e*a*m+r*o*d-n*o*m+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],m=t[10],p=t[11],_=t[12],g=t[13],f=t[14],h=t[15],S=d*f*c-g*m*c+g*l*p-a*f*p-d*l*h+a*m*h,y=_*m*c-u*f*c-_*l*p+o*f*p+u*l*h-o*m*h,E=u*g*c-_*d*c+_*a*p-o*g*p-u*a*h+o*d*h,A=_*d*l-u*g*l-_*a*m+o*g*m+u*a*f-o*d*f,P=e*S+n*y+r*E+s*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=S*T,t[1]=(g*m*s-d*f*s-g*r*p+n*f*p+d*r*h-n*m*h)*T,t[2]=(a*f*s-g*l*s+g*r*c-n*f*c-a*r*h+n*l*h)*T,t[3]=(d*l*s-a*m*s-d*r*c+n*m*c+a*r*p-n*l*p)*T,t[4]=y*T,t[5]=(u*f*s-_*m*s+_*r*p-e*f*p-u*r*h+e*m*h)*T,t[6]=(_*l*s-o*f*s-_*r*c+e*f*c+o*r*h-e*l*h)*T,t[7]=(o*m*s-u*l*s+u*r*c-e*m*c-o*r*p+e*l*p)*T,t[8]=E*T,t[9]=(_*d*s-u*g*s-_*n*p+e*g*p+u*n*h-e*d*h)*T,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*h+e*a*h)*T,t[11]=(u*a*s-o*d*s-u*n*c+e*d*c+o*n*p-e*a*p)*T,t[12]=A*T,t[13]=(u*g*r-_*d*r+_*n*m-e*g*m-u*n*f+e*d*f)*T,t[14]=(_*a*r-o*g*r-_*n*l+e*g*l+o*n*f-e*a*f)*T,t[15]=(o*d*r-u*a*r+u*n*l-e*d*l-o*n*m+e*a*m)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,m=s*c,p=s*u,_=s*d,g=o*u,f=o*d,h=a*d,S=l*c,y=l*u,E=l*d,A=n.x,P=n.y,T=n.z;return r[0]=(1-(g+h))*A,r[1]=(p+E)*A,r[2]=(_-y)*A,r[3]=0,r[4]=(p-E)*P,r[5]=(1-(m+h))*P,r[6]=(f+S)*P,r[7]=0,r[8]=(_+y)*T,r[9]=(f-S)*T,r[10]=(1-(m+g))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=pi.set(r[0],r[1],r[2]).length();const o=pi.set(r[4],r[5],r[6]).length(),a=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],je.copy(this);const c=1/s,u=1/o,d=1/a;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=d,je.elements[9]*=d,je.elements[10]*=d,e.setFromRotationMatrix(je),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=vn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),m=(n+r)/(n-r);let p,_;if(a===vn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===as)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=vn){const l=this.elements,c=1/(e-t),u=1/(n-r),d=1/(o-s),m=(e+t)*c,p=(n+r)*u;let _,g;if(a===vn)_=(o+s)*d,g=-2*d;else if(a===as)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const pi=new X,je=new ne,Ih=new X(0,0,0),Uh=new X(1,1,1),Tn=new X,Pr=new X,Be=new X,zo=new ne,Bo=new sn;class en{constructor(t=0,e=0,n=0,r=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],m=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class Da{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nh=0;const ko=new X,mi=new sn,un=new ne,Lr=new X,$i=new X,Oh=new X,Fh=new sn,Ho=new X(1,0,0),Go=new X(0,1,0),Vo=new X(0,0,1),zh={type:"added"},Bh={type:"removed"};class ae extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new X,e=new en,n=new sn,r=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ne},normalMatrix:{value:new Yt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(Ho,t)}rotateY(t){return this.rotateOnAxis(Go,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,e){return ko.copy(t).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ho,t)}translateY(t){return this.translateOnAxis(Go,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt($i,Lr,this.up):un.lookAt(Lr,$i,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(un),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(zh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,Oh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),m=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ae.DEFAULT_UP=new X(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new X,hn=new X,Hs=new X,fn=new X,gi=new X,_i=new X,Wo=new X,Gs=new X,Vs=new X,Ws=new X;class $e{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ze.subVectors(t,e),r.cross(Ze);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ze.subVectors(r,e),hn.subVectors(n,e),Hs.subVectors(t,e);const o=Ze.dot(Ze),a=Ze.dot(hn),l=Ze.dot(Hs),c=hn.dot(hn),u=hn.dot(Hs),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const m=1/d,p=(c*l-a*u)*m,_=(o*u-a*l)*m;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l)}static isFrontFacing(t,e,n,r){return Ze.subVectors(n,e),hn.subVectors(t,e),Ze.cross(hn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ze.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;gi.subVectors(r,n),_i.subVectors(s,n),Gs.subVectors(t,n);const l=gi.dot(Gs),c=_i.dot(Gs);if(l<=0&&c<=0)return e.copy(n);Vs.subVectors(t,r);const u=gi.dot(Vs),d=_i.dot(Vs);if(u>=0&&d<=u)return e.copy(r);const m=l*d-u*c;if(m<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(gi,o);Ws.subVectors(t,s);const p=gi.dot(Ws),_=_i.dot(Ws);if(_>=0&&p<=_)return e.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(_i,a);const f=u*_-p*d;if(f<=0&&d-u>=0&&p-_>=0)return Wo.subVectors(s,r),a=(d-u)/(d-u+(p-_)),e.copy(r).addScaledVector(Wo,a);const h=1/(f+g+m);return o=g*h,a=m*h,e.copy(n).addScaledVector(gi,o).addScaledVector(_i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Xs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=$t.workingColorSpace){if(t=La(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Xs(o,s,t+1/3),this.g=Xs(o,s,t),this.b=Xs(o,s,t-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(t,e=ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){const n=mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return $t.fromWorkingColorSpace(Me.copy(this),t),Math.round(ge(Me.r*255,0,255))*65536+Math.round(ge(Me.g*255,0,255))*256+Math.round(ge(Me.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,r=Me.g,s=Me.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=ue){$t.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,r=Me.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(Dr);const n=ar(An.h,Dr.h,e),r=ar(An.s,Dr.s,e),s=ar(An.l,Dr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Ht;Ht.NAMES=mc;let kh=0;class ni extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=rn(),this.name="",this.type="Material",this.blending=Ni,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=ha,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Sr extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new X,Ir=new mt;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ga,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Jn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Je(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Je(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Je(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Je(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ga&&(t.usage=this.usage),t}}class gc extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _c extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class be extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hh=0;const Ve=new ne,qs=new ae,vi=new X,ke=new yr,Qi=new yr,me=new X;class He extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hc(t)?_c:gc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return qs.lookAt(t),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ke.setFromBufferAttribute(s),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(ke.min,Qi.min),ke.expandByPoint(me),me.addVectors(ke.max,Qi.max),ke.expandByPoint(me)):(ke.expandByPoint(Qi.min),ke.expandByPoint(Qi.max))}ke.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)me.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)me.fromBufferAttribute(a,c),l&&(vi.fromBufferAttribute(t,c),me.add(vi)),r=Math.max(r,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new X,u[w]=new X;const d=new X,m=new X,p=new X,_=new mt,g=new mt,f=new mt,h=new X,S=new X;function y(w,L,C){d.fromArray(r,w*3),m.fromArray(r,L*3),p.fromArray(r,C*3),_.fromArray(o,w*2),g.fromArray(o,L*2),f.fromArray(o,C*2),m.sub(d),p.sub(d),g.sub(_),f.sub(_);const V=1/(g.x*f.y-f.x*g.y);isFinite(V)&&(h.copy(m).multiplyScalar(f.y).addScaledVector(p,-g.y).multiplyScalar(V),S.copy(p).multiplyScalar(g.x).addScaledVector(m,-f.x).multiplyScalar(V),c[w].add(h),c[L].add(h),c[C].add(h),u[w].add(S),u[L].add(S),u[C].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let w=0,L=E.length;w<L;++w){const C=E[w],V=C.start,v=C.count;for(let O=V,K=V+v;O<K;O+=3)y(n[O+0],n[O+1],n[O+2])}const A=new X,P=new X,T=new X,k=new X;function W(w){T.fromArray(s,w*3),k.copy(T);const L=c[w];A.copy(L),A.sub(T.multiplyScalar(T.dot(L))).normalize(),P.crossVectors(k,L);const V=P.dot(u[w])<0?-1:1;l[w*4]=A.x,l[w*4+1]=A.y,l[w*4+2]=A.z,l[w*4+3]=V}for(let w=0,L=E.length;w<L;++w){const C=E[w],V=C.start,v=C.count;for(let O=V,K=V+v;O<K;O+=3)W(n[O+0]),W(n[O+1]),W(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,p=n.count;m<p;m++)n.setXYZ(m,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,d=new X;if(t)for(let m=0,p=t.count;m<p;m+=3){const _=t.getX(m+0),g=t.getX(m+1),f=t.getX(m+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,f),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let m=0,p=e.count;m<p;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,m=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,f=l.length;g<f;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let h=0;h<u;h++)m[_++]=c[p++]}return new Qe(m,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const m=c[u],p=t(m,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,m=c.length;d<m;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let m=0,p=d.length;m<p;m++)u.push(d[m].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xo=new ne,Gn=new gs,Ur=new ms,qo=new X,xi=new X,yi=new X,Si=new X,Ys=new X,Nr=new X,Or=new mt,Fr=new mt,zr=new mt,Yo=new X,jo=new X,Zo=new X,Br=new X,kr=new X;class _e extends ae{constructor(t=new He,e=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Nr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Ys.fromBufferAttribute(d,t),o?Nr.addScaledVector(Ys,u):Nr.addScaledVector(Ys.sub(e),u))}e.add(Nr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Gn.copy(t.ray).recast(t.near),!(Ur.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Ur,qo)===null||Gn.origin.distanceToSquared(qo)>(t.far-t.near)**2))&&(Xo.copy(s).invert(),Gn.copy(t.ray).applyMatrix4(Xo),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,m=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=m.length;_<g;_++){const f=m[_],h=o[f.materialIndex],S=Math.max(f.start,p.start),y=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let E=S,A=y;E<A;E+=3){const P=a.getX(E),T=a.getX(E+1),k=a.getX(E+2);r=Hr(this,h,t,n,c,u,d,P,T,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let f=_,h=g;f<h;f+=3){const S=a.getX(f),y=a.getX(f+1),E=a.getX(f+2);r=Hr(this,o,t,n,c,u,d,S,y,E),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=m.length;_<g;_++){const f=m[_],h=o[f.materialIndex],S=Math.max(f.start,p.start),y=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let E=S,A=y;E<A;E+=3){const P=E,T=E+1,k=E+2;r=Hr(this,h,t,n,c,u,d,P,T,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let f=_,h=g;f<h;f+=3){const S=f,y=f+1,E=f+2;r=Hr(this,o,t,n,c,u,d,S,y,E),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function Gh(i,t,e,n,r,s,o,a){let l;if(t.side===Oe?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Fn,a),l===null)return null;kr.copy(a),kr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(kr);return c<e.near||c>e.far?null:{distance:c,point:kr.clone(),object:i}}function Hr(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,xi),i.getVertexPosition(l,yi),i.getVertexPosition(c,Si);const u=Gh(i,t,e,n,xi,yi,Si,Br);if(u){r&&(Or.fromBufferAttribute(r,a),Fr.fromBufferAttribute(r,l),zr.fromBufferAttribute(r,c),u.uv=$e.getInterpolation(Br,xi,yi,Si,Or,Fr,zr,new mt)),s&&(Or.fromBufferAttribute(s,a),Fr.fromBufferAttribute(s,l),zr.fromBufferAttribute(s,c),u.uv1=$e.getInterpolation(Br,xi,yi,Si,Or,Fr,zr,new mt),u.uv2=u.uv1),o&&(Yo.fromBufferAttribute(o,a),jo.fromBufferAttribute(o,l),Zo.fromBufferAttribute(o,c),u.normal=$e.getInterpolation(Br,xi,yi,Si,Yo,jo,Zo,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new X,materialIndex:0};$e.getNormal(xi,yi,Si,d.normal),u.face=d}return u}class ii extends He{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let m=0,p=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(d,2));function _(g,f,h,S,y,E,A,P,T,k,W){const w=E/T,L=A/k,C=E/2,V=A/2,v=P/2,O=T+1,K=k+1;let Y=0,et=0;const j=new X;for(let nt=0;nt<K;nt++){const H=nt*L-V;for(let q=0;q<O;q++){const ht=q*w-C;j[g]=ht*S,j[f]=H*y,j[h]=v,c.push(j.x,j.y,j.z),j[g]=0,j[f]=0,j[h]=P>0?1:-1,u.push(j.x,j.y,j.z),d.push(q/T),d.push(1-nt/k),Y+=1}}for(let nt=0;nt<k;nt++)for(let H=0;H<T;H++){const q=m+H+O*nt,ht=m+H+O*(nt+1),J=m+(H+1)+O*(nt+1),Q=m+(H+1)+O*nt;l.push(q,ht,Q),l.push(ht,J,Q),et+=6}a.addGroup(p,et,W),p+=et,m+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ae(i){const t={};for(let e=0;e<i.length;e++){const n=Vi(i[e]);for(const r in n)t[r]=n[r]}return t}function Vh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vc(i){return i.getRenderTarget()===null?i.outputColorSpace:$t.workingColorSpace}const Wh={clone:Vi,merge:Ae};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=Vh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xc extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new X,Ko=new mt,Jo=new mt;class We extends xc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,Ko,Jo),e.subVectors(Jo,Ko)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,Ei=1;class Yh extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new We(Mi,Ei,t,e);r.layers=this.layers,this.add(r);const s=new We(Mi,Ei,t,e);s.layers=this.layers,this.add(s);const o=new We(Mi,Ei,t,e);o.layers=this.layers,this.add(o);const a=new We(Mi,Ei,t,e);a.layers=this.layers,this.add(a);const l=new We(Mi,Ei,t,e);l.layers=this.layers,this.add(l);const c=new We(Mi,Ei,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(d,m,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class yc extends Le{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ki,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jh extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Jn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Kn?ue:Xe),this.texture=new yc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:De}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ii(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:In});s.uniforms.tEquirect.value=e;const o=new _e(r,s),a=e.minFilter;return e.minFilter===Yn&&(e.minFilter=De),new Yh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const js=new X,Zh=new X,Kh=new Yt;class Rn{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=js.subVectors(n,e).cross(Zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(js),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kh.getNormalMatrix(t),r=this.coplanarPoint(js).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new ms,Gr=new X;class Ia{constructor(t=new Rn,e=new Rn,n=new Rn,r=new Rn,s=new Rn,o=new Rn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],m=r[7],p=r[8],_=r[9],g=r[10],f=r[11],h=r[12],S=r[13],y=r[14],E=r[15];if(n[0].setComponents(l-s,m-c,f-p,E-h).normalize(),n[1].setComponents(l+s,m+c,f+p,E+h).normalize(),n[2].setComponents(l+o,m+u,f+_,E+S).normalize(),n[3].setComponents(l-o,m-u,f-_,E-S).normalize(),n[4].setComponents(l-a,m-d,f-g,E-y).normalize(),e===vn)n[5].setComponents(l+a,m+d,f+g,E+y).normalize();else if(e===as)n[5].setComponents(a,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Gr.x=r.normal.x>0?t.max.x:t.min.x,Gr.y=r.normal.y>0?t.max.y:t.min.y,Gr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sc(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Jh(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,u){const d=c.array,m=c.usage,p=d.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,d,m),c.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,d){const m=u.array,p=u._updateRange,_=u.updateRanges;if(i.bindBuffer(d,c),p.count===-1&&_.length===0&&i.bufferSubData(d,0,m),_.length!==0){for(let g=0,f=_.length;g<f;g++){const h=_[g];e?i.bufferSubData(d,h.start*m.BYTES_PER_ELEMENT,m,h.start,h.count):i.bufferSubData(d,h.start*m.BYTES_PER_ELEMENT,m.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(d,p.offset*m.BYTES_PER_ELEMENT,m,p.offset,p.count):i.bufferSubData(d,p.offset*m.BYTES_PER_ELEMENT,m.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const m=n.get(c);(!m||m.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class ri extends He{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=t/a,m=e/l,p=[],_=[],g=[],f=[];for(let h=0;h<u;h++){const S=h*m-o;for(let y=0;y<c;y++){const E=y*d-s;_.push(E,-S,0),g.push(0,0,1),f.push(y/a),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<a;S++){const y=S+c*h,E=S+c*(h+1),A=S+1+c*(h+1),P=S+1+c*h;p.push(y,E,P),p.push(E,A,P)}this.setIndex(p),this.setAttribute("position",new be(_,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.width,t.height,t.widthSegments,t.heightSegments)}}var $h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qh=`#ifdef USE_ALPHAHASH
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
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
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
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
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
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ff=`#ifdef USE_IRIDESCENCE
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
#endif`,df=`#ifdef USE_BUMPMAP
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mf=`#define PI 3.141592653589793
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
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bf=`vec3 transformedNormal = objectNormal;
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
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`
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
}`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kf=`#ifdef USE_GRADIENTMAP
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
}`,Hf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
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
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
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
#endif`,$f=`struct PhysicalMaterial {
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
}`,Qf=`
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
#endif`,td=`#if defined( RE_IndirectDiffuse )
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
#endif`,ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cd=`#if defined( USE_POINTS_UV )
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
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dd=`#ifdef USE_MORPHNORMALS
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
#endif`,pd=`#ifdef USE_MORPHTARGETS
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
#endif`,md=`#ifdef USE_MORPHTARGETS
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
#endif`,gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sd=`#ifdef USE_NORMALMAP
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
#endif`,Md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ed=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ad=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ld=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fd=`float getShadowMask() {
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
}`,zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bd=`#ifdef USE_SKINNING
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
#endif`,kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hd=`#ifdef USE_SKINNING
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
#endif`,Gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#ifdef USE_TRANSMISSION
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
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
}`,sp=`#if DEPTH_PACKING == 3200
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
}`,ap=`#define DISTANCE
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
}`,op=`#define DISTANCE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`uniform float scale;
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
}`,hp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,dp=`uniform vec3 diffuse;
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
}`,pp=`#define LAMBERT
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
}`,mp=`#define LAMBERT
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
}`,gp=`#define MATCAP
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
}`,_p=`#define MATCAP
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
}`,vp=`#define NORMAL
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
}`,xp=`#define NORMAL
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
}`,yp=`#define PHONG
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
}`,Sp=`#define PHONG
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
}`,Mp=`#define STANDARD
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
}`,Ep=`#define STANDARD
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
}`,bp=`#define TOON
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
}`,wp=`#define TOON
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
}`,Tp=`uniform float size;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Rp=`uniform vec3 color;
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
}`,Pp=`uniform float rotation;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:$h,alphahash_pars_fragment:Qh,alphamap_fragment:tf,alphamap_pars_fragment:ef,alphatest_fragment:nf,alphatest_pars_fragment:rf,aomap_fragment:sf,aomap_pars_fragment:af,batching_pars_vertex:of,batching_vertex:lf,begin_vertex:cf,beginnormal_vertex:uf,bsdfs:hf,iridescence_fragment:ff,bumpmap_pars_fragment:df,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:_f,color_fragment:vf,color_pars_fragment:xf,color_pars_vertex:yf,color_vertex:Sf,common:Mf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:bf,displacementmap_pars_vertex:wf,displacementmap_vertex:Tf,emissivemap_fragment:Af,emissivemap_pars_fragment:Cf,colorspace_fragment:Rf,colorspace_pars_fragment:Pf,envmap_fragment:Lf,envmap_common_pars_fragment:Df,envmap_pars_fragment:If,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:qf,envmap_vertex:Nf,fog_vertex:Of,fog_pars_vertex:Ff,fog_fragment:zf,fog_pars_fragment:Bf,gradientmap_pars_fragment:kf,lightmap_fragment:Hf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Wf,lights_pars_begin:Xf,lights_toon_fragment:Yf,lights_toon_pars_fragment:jf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Kf,lights_physical_fragment:Jf,lights_physical_pars_fragment:$f,lights_fragment_begin:Qf,lights_fragment_maps:td,lights_fragment_end:ed,logdepthbuf_fragment:nd,logdepthbuf_pars_fragment:id,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:sd,map_fragment:ad,map_pars_fragment:od,map_particle_fragment:ld,map_particle_pars_fragment:cd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:hd,morphcolor_vertex:fd,morphnormal_vertex:dd,morphtarget_pars_vertex:pd,morphtarget_vertex:md,normal_fragment_begin:gd,normal_fragment_maps:_d,normal_pars_fragment:vd,normal_pars_vertex:xd,normal_vertex:yd,normalmap_pars_fragment:Sd,clearcoat_normal_fragment_begin:Md,clearcoat_normal_fragment_maps:Ed,clearcoat_pars_fragment:bd,iridescence_pars_fragment:wd,opaque_fragment:Td,packing:Ad,premultiplied_alpha_fragment:Cd,project_vertex:Rd,dithering_fragment:Pd,dithering_pars_fragment:Ld,roughnessmap_fragment:Dd,roughnessmap_pars_fragment:Id,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Nd,shadowmap_vertex:Od,shadowmask_pars_fragment:Fd,skinbase_vertex:zd,skinning_pars_vertex:Bd,skinning_vertex:kd,skinnormal_vertex:Hd,specularmap_fragment:Gd,specularmap_pars_fragment:Vd,tonemapping_fragment:Wd,tonemapping_pars_fragment:Xd,transmission_fragment:qd,transmission_pars_fragment:Yd,uv_pars_fragment:jd,uv_pars_vertex:Zd,uv_vertex:Kd,worldpos_vertex:Jd,background_vert:$d,background_frag:Qd,backgroundCube_vert:tp,backgroundCube_frag:ep,cube_vert:np,cube_frag:ip,depth_vert:rp,depth_frag:sp,distanceRGBA_vert:ap,distanceRGBA_frag:op,equirect_vert:lp,equirect_frag:cp,linedashed_vert:up,linedashed_frag:hp,meshbasic_vert:fp,meshbasic_frag:dp,meshlambert_vert:pp,meshlambert_frag:mp,meshmatcap_vert:gp,meshmatcap_frag:_p,meshnormal_vert:vp,meshnormal_frag:xp,meshphong_vert:yp,meshphong_frag:Sp,meshphysical_vert:Mp,meshphysical_frag:Ep,meshtoon_vert:bp,meshtoon_frag:wp,points_vert:Tp,points_frag:Ap,shadow_vert:Cp,shadow_frag:Rp,sprite_vert:Pp,sprite_frag:Lp},Mt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},nn={basic:{uniforms:Ae([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ae([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ae([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ae([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ae([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ae([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ae([Mt.points,Mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ae([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ae([Mt.common,Mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ae([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ae([Mt.sprite,Mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ae([Mt.common,Mt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ae([Mt.lights,Mt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};nn.physical={uniforms:Ae([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Vr={r:0,b:0,g:0};function Dp(i,t,e,n,r,s,o){const a=new Ht(0);let l=s===!0?0:1,c,u,d=null,m=0,p=null;function _(f,h){let S=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?e:t).get(y)),y===null?g(a,l):y&&y.isColor&&(g(y,1),S=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ds)?(u===void 0&&(u=new _e(new ii(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Vi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=$t.getTransfer(y.colorSpace)!==te,(d!==y||m!==y.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,m=y.version,p=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new _e(new ri(2,2),new Sn({name:"BackgroundMaterial",uniforms:Vi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=$t.getTransfer(y.colorSpace)!==te,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||m!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,m=y.version,p=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function g(f,h){f.getRGB(Vr,vc(i)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(f,h=1){a.set(f),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,g(a,l)},render:_}}function Ip(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,u=!1;function d(v,O,K,Y,et){let j=!1;if(o){const nt=g(Y,K,O);c!==nt&&(c=nt,p(c.object)),j=h(v,Y,K,et),j&&S(v,Y,K,et)}else{const nt=O.wireframe===!0;(c.geometry!==Y.id||c.program!==K.id||c.wireframe!==nt)&&(c.geometry=Y.id,c.program=K.id,c.wireframe=nt,j=!0)}et!==null&&e.update(et,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,k(v,O,K,Y),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(et).buffer))}function m(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(v){return n.isWebGL2?i.bindVertexArray(v):s.bindVertexArrayOES(v)}function _(v){return n.isWebGL2?i.deleteVertexArray(v):s.deleteVertexArrayOES(v)}function g(v,O,K){const Y=K.wireframe===!0;let et=a[v.id];et===void 0&&(et={},a[v.id]=et);let j=et[O.id];j===void 0&&(j={},et[O.id]=j);let nt=j[Y];return nt===void 0&&(nt=f(m()),j[Y]=nt),nt}function f(v){const O=[],K=[],Y=[];for(let et=0;et<r;et++)O[et]=0,K[et]=0,Y[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:K,attributeDivisors:Y,object:v,attributes:{},index:null}}function h(v,O,K,Y){const et=c.attributes,j=O.attributes;let nt=0;const H=K.getAttributes();for(const q in H)if(H[q].location>=0){const J=et[q];let Q=j[q];if(Q===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),J===void 0||J.attribute!==Q||Q&&J.data!==Q.data)return!0;nt++}return c.attributesNum!==nt||c.index!==Y}function S(v,O,K,Y){const et={},j=O.attributes;let nt=0;const H=K.getAttributes();for(const q in H)if(H[q].location>=0){let J=j[q];J===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(J=v.instanceColor));const Q={};Q.attribute=J,J&&J.data&&(Q.data=J.data),et[q]=Q,nt++}c.attributes=et,c.attributesNum=nt,c.index=Y}function y(){const v=c.newAttributes;for(let O=0,K=v.length;O<K;O++)v[O]=0}function E(v){A(v,0)}function A(v,O){const K=c.newAttributes,Y=c.enabledAttributes,et=c.attributeDivisors;K[v]=1,Y[v]===0&&(i.enableVertexAttribArray(v),Y[v]=1),et[v]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](v,O),et[v]=O)}function P(){const v=c.newAttributes,O=c.enabledAttributes;for(let K=0,Y=O.length;K<Y;K++)O[K]!==v[K]&&(i.disableVertexAttribArray(K),O[K]=0)}function T(v,O,K,Y,et,j,nt){nt===!0?i.vertexAttribIPointer(v,O,K,et,j):i.vertexAttribPointer(v,O,K,Y,et,j)}function k(v,O,K,Y){if(n.isWebGL2===!1&&(v.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const et=Y.attributes,j=K.getAttributes(),nt=O.defaultAttributeValues;for(const H in j){const q=j[H];if(q.location>=0){let ht=et[H];if(ht===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),ht!==void 0){const J=ht.normalized,Q=ht.itemSize,yt=e.get(ht);if(yt===void 0)continue;const Et=yt.buffer,xt=yt.type,_t=yt.bytesPerElement,Rt=n.isWebGL2===!0&&(xt===i.INT||xt===i.UNSIGNED_INT||ht.gpuType===tc);if(ht.isInterleavedBufferAttribute){const bt=ht.data,B=bt.stride,pt=ht.offset;if(bt.isInstancedInterleavedBuffer){for(let x=0;x<q.locationSize;x++)A(q.location+x,bt.meshPerAttribute);v.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let x=0;x<q.locationSize;x++)E(q.location+x);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let x=0;x<q.locationSize;x++)T(q.location+x,Q/q.locationSize,xt,J,B*_t,(pt+Q/q.locationSize*x)*_t,Rt)}else{if(ht.isInstancedBufferAttribute){for(let bt=0;bt<q.locationSize;bt++)A(q.location+bt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let bt=0;bt<q.locationSize;bt++)E(q.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let bt=0;bt<q.locationSize;bt++)T(q.location+bt,Q/q.locationSize,xt,J,Q*_t,Q/q.locationSize*bt*_t,Rt)}}else if(nt!==void 0){const J=nt[H];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(q.location,J);break;case 3:i.vertexAttrib3fv(q.location,J);break;case 4:i.vertexAttrib4fv(q.location,J);break;default:i.vertexAttrib1fv(q.location,J)}}}}P()}function W(){C();for(const v in a){const O=a[v];for(const K in O){const Y=O[K];for(const et in Y)_(Y[et].object),delete Y[et];delete O[K]}delete a[v]}}function w(v){if(a[v.id]===void 0)return;const O=a[v.id];for(const K in O){const Y=O[K];for(const et in Y)_(Y[et].object),delete Y[et];delete O[K]}delete a[v.id]}function L(v){for(const O in a){const K=a[O];if(K[v.id]===void 0)continue;const Y=K[v.id];for(const et in Y)_(Y[et].object),delete Y[et];delete K[v.id]}}function C(){V(),u=!0,c!==l&&(c=l,p(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:C,resetDefaultState:V,dispose:W,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:E,disableUnusedAttributes:P}}function Up(i,t,e,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,d){i.drawArrays(s,u,d),e.update(d,s,1)}function l(u,d,m){if(m===0)return;let p,_;if(r)p=i,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,u,d,m),e.update(d,s,m)}function c(u,d,m){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<m;_++)this.render(u[_],d[_]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,m);let _=0;for(let g=0;g<m;g++)_+=d[g];e.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Np(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,E=o||t.has("OES_texture_float"),A=y&&E,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:f,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:P}}function Op(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Rn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const p=d.length!==0||m||n!==0||r;return r=m,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){e=u(d,m,0)},this.setState=function(d,m,p){const _=d.clippingPlanes,g=d.clipIntersection,f=d.clipShadows,h=i.get(d);if(!r||_===null||_.length===0||s&&!f)s?u(null):c();else{const S=s?0:n,y=S*4;let E=h.clippingState||null;l.value=E,E=u(_,m,y,p);for(let A=0;A!==y;++A)E[A]=e[A];h.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,m,p,_){const g=d!==null?d.length:0;let f=null;if(g!==0){if(f=l.value,_!==!0||f===null){const h=p+g*4,S=m.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<h)&&(f=new Float32Array(h));for(let y=0,E=p;y!==g;++y,E+=4)o.copy(d[y]).applyMatrix4(S,a),o.normal.toArray(f,E),f[E+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function Fp(i){let t=new WeakMap;function e(o,a){return a===fa?o.mapping=ki:a===da&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fa||a===da)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ua extends xc{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Di=4,$o=[.125,.215,.35,.446,.526,.582],qn=20,Zs=new Ua,Qo=new Ht;let Ks=null,Js=0,$s=0;const Wn=(1+Math.sqrt(5))/2,bi=1/Wn,tl=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Wn,bi),new X(0,Wn,-bi),new X(bi,0,Wn),new X(-bi,0,Wn),new X(Wn,bi,0),new X(-Wn,bi,0)];class el{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ks=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ks,Js,$s),t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ks=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:fr,format:Ke,colorSpace:yn,depthBuffer:!1},r=nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zp(s)),this._blurMaterial=Bp(s,t,e)}return r}_compileMaterial(t){const e=new _e(this._lodPlanes[0],t);this._renderer.compile(e,Zs)}_sceneToCubeUV(t,e,n,r){const a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(Qo),u.toneMapping=Un,u.autoClear=!1;const p=new Sr({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),_=new _e(new ii,p);let g=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,g=!0):(p.color.copy(Qo),g=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):S===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;Wr(r,S*y,h>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=m,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ki||t.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Zs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tl[(r-1)%tl.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new _e(this._lodPlanes[r],c),m=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qn-1),g=s/_,f=isFinite(s)?1+Math.floor(u*g):qn;f>qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${qn}`);const h=[];let S=0;for(let T=0;T<qn;++T){const k=T/g,W=Math.exp(-k*k/2);h.push(W),T===0?S+=W:T<f&&(S+=2*W)}for(let T=0;T<h.length;T++)h[T]=h[T]/S;m.envMap.value=t.texture,m.samples.value=f,m.weights.value=h,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:y}=this;m.dTheta.value=_,m.mipInt.value=y-n;const E=this._sizeLods[r],A=3*E*(r>y-Di?r-y+Di:0),P=4*(this._cubeSize-E);Wr(e,A,P,3*E,2*E),l.setRenderTarget(e),l.render(d,Zs)}}function zp(i){const t=[],e=[],n=[];let r=i;const s=i-Di+1+$o.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Di?l=$o[o-i+Di-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,m=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,g=3,f=2,h=1,S=new Float32Array(g*_*p),y=new Float32Array(f*_*p),E=new Float32Array(h*_*p);for(let P=0;P<p;P++){const T=P%3*2/3-1,k=P>2?0:-1,W=[T,k,0,T+2/3,k,0,T+2/3,k+1,0,T,k,0,T+2/3,k+1,0,T,k+1,0];S.set(W,g*_*P),y.set(m,f*_*P);const w=[P,P,P,P,P,P];E.set(w,h*_*P)}const A=new He;A.setAttribute("position",new Qe(S,g)),A.setAttribute("uv",new Qe(y,f)),A.setAttribute("faceIndex",new Qe(E,h)),t.push(A),r>Di&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nl(i,t,e){const n=new Qn(i,t,e);return n.texture.mapping=ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Bp(i,t,e){const n=new Float32Array(qn),r=new X(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Na(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function il(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function rl(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Na(){return`

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
	`}function kp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fa||l===da,u=l===ki||l===Hi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new el(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){e===null&&(e=new el(i));const m=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,m),a.addEventListener("dispose",s),m.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Gp(i,t,e,n){const r={},s=new WeakMap;function o(d){const m=d.target;m.index!==null&&t.remove(m.index);for(const _ in m.attributes)t.remove(m.attributes[_]);for(const _ in m.morphAttributes){const g=m.morphAttributes[_];for(let f=0,h=g.length;f<h;f++)t.remove(g[f])}m.removeEventListener("dispose",o),delete r[m.id];const p=s.get(m);p&&(t.remove(p),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(d,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function l(d){const m=d.attributes;for(const _ in m)t.update(m[_],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let f=0,h=g.length;f<h;f++)t.update(g[f],i.ARRAY_BUFFER)}}function c(d){const m=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const S=p.array;g=p.version;for(let y=0,E=S.length;y<E;y+=3){const A=S[y+0],P=S[y+1],T=S[y+2];m.push(A,P,P,T,T,A)}}else if(_!==void 0){const S=_.array;g=_.version;for(let y=0,E=S.length/3-1;y<E;y+=3){const A=y+0,P=y+1,T=y+2;m.push(A,P,P,T,T,A)}}else return;const f=new(hc(m)?_c:gc)(m,1);f.version=g;const h=s.get(d);h&&t.remove(h),s.set(d,f)}function u(d){const m=s.get(d);if(m){const p=d.index;p!==null&&m.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Vp(i,t,e,n){const r=n.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,_){i.drawElements(s,_,a,p*l),e.update(_,s,1)}function d(p,_,g){if(g===0)return;let f,h;if(r)f=i,h="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](s,_,a,p*l,g),e.update(_,s,g)}function m(p,_,g){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<g;h++)this.render(p[h]/l,_[h]);else{f.multiDrawElementsWEBGL(s,_,0,a,p,0,g);let h=0;for(let S=0;S<g;S++)h+=_[S];e.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=m}function Wp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Xp(i,t){return i[0]-t[0]}function qp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Yp(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,o=new he,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let f=s.get(u);if(f===void 0||f.count!==g){let O=function(){V.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var p=O;f!==void 0&&f.texture.dispose();const y=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],k=u.morphAttributes.color||[];let W=0;y===!0&&(W=1),E===!0&&(W=2),A===!0&&(W=3);let w=u.attributes.position.count*W,L=1;w>t.maxTextureSize&&(L=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const C=new Float32Array(w*L*4*g),V=new pc(C,w,L,g);V.type=mn,V.needsUpdate=!0;const v=W*4;for(let K=0;K<g;K++){const Y=P[K],et=T[K],j=k[K],nt=w*L*4*K;for(let H=0;H<Y.count;H++){const q=H*v;y===!0&&(o.fromBufferAttribute(Y,H),C[nt+q+0]=o.x,C[nt+q+1]=o.y,C[nt+q+2]=o.z,C[nt+q+3]=0),E===!0&&(o.fromBufferAttribute(et,H),C[nt+q+4]=o.x,C[nt+q+5]=o.y,C[nt+q+6]=o.z,C[nt+q+7]=0),A===!0&&(o.fromBufferAttribute(j,H),C[nt+q+8]=o.x,C[nt+q+9]=o.y,C[nt+q+10]=o.z,C[nt+q+11]=j.itemSize===4?o.w:1)}}f={count:g,texture:V,size:new mt(w,L)},s.set(u,f),u.addEventListener("dispose",O)}let h=0;for(let y=0;y<m.length;y++)h+=m[y];const S=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(i,"morphTargetBaseInfluence",S),d.getUniforms().setValue(i,"morphTargetInfluences",m),d.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const _=m===void 0?0:m.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let E=0;E<_;E++)g[E]=[E,0];n[u.id]=g}for(let E=0;E<_;E++){const A=g[E];A[0]=E,A[1]=m[E]}g.sort(qp);for(let E=0;E<8;E++)E<_&&g[E][1]?(a[E][0]=g[E][0],a[E][1]=g[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(Xp);const f=u.morphAttributes.position,h=u.morphAttributes.normal;let S=0;for(let E=0;E<8;E++){const A=a[E],P=A[0],T=A[1];P!==Number.MAX_SAFE_INTEGER&&T?(f&&u.getAttribute("morphTarget"+E)!==f[P]&&u.setAttribute("morphTarget"+E,f[P]),h&&u.getAttribute("morphNormal"+E)!==h[P]&&u.setAttribute("morphNormal"+E,h[P]),r[E]=T,S+=T):(f&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),h&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const y=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function jp(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Mc extends Le{constructor(t,e,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Zn,u!==Zn&&u!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zn&&(n=Ln),n===void 0&&u===Gi&&(n=jn),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Re,this.minFilter=l!==void 0?l:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ec=new Le,bc=new Mc(1,1);bc.compareFunction=cc;const wc=new pc,Tc=new Lh,Ac=new yc,sl=[],al=[],ol=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function Wi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=sl[r];if(s===void 0&&(s=new Float32Array(r),sl[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function de(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _s(i,t){let e=al[t];e===void 0&&(e=new Int32Array(t),al[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),de(e,t)}}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),de(e,t)}}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),de(e,t)}}function Qp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;cl.set(n),i.uniformMatrix2fv(this.addr,!1,cl),de(e,n)}}function tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),de(e,n)}}function em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;ol.set(n),i.uniformMatrix4fv(this.addr,!1,ol),de(e,n)}}function nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),de(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),de(e,t)}}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),de(e,t)}}function am(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),de(e,t)}}function lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),de(e,t)}}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),de(e,t)}}function um(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?bc:Ec;e.setTexture2D(t||s,r)}function hm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Tc,r)}function fm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ac,r)}function dm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||wc,r)}function pm(i){switch(i){case 5126:return Zp;case 35664:return Kp;case 35665:return Jp;case 35666:return $p;case 35674:return Qp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return rm;case 35669:case 35673:return sm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return dm}}function mm(i,t){i.uniform1fv(this.addr,t)}function gm(i,t){const e=Wi(t,this.size,2);i.uniform2fv(this.addr,e)}function _m(i,t){const e=Wi(t,this.size,3);i.uniform3fv(this.addr,e)}function vm(i,t){const e=Wi(t,this.size,4);i.uniform4fv(this.addr,e)}function xm(i,t){const e=Wi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ym(i,t){const e=Wi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sm(i,t){const e=Wi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Mm(i,t){i.uniform1iv(this.addr,t)}function Em(i,t){i.uniform2iv(this.addr,t)}function bm(i,t){i.uniform3iv(this.addr,t)}function wm(i,t){i.uniform4iv(this.addr,t)}function Tm(i,t){i.uniform1uiv(this.addr,t)}function Am(i,t){i.uniform2uiv(this.addr,t)}function Cm(i,t){i.uniform3uiv(this.addr,t)}function Rm(i,t){i.uniform4uiv(this.addr,t)}function Pm(i,t,e){const n=this.cache,r=t.length,s=_s(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Ec,s[o])}function Lm(i,t,e){const n=this.cache,r=t.length,s=_s(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Tc,s[o])}function Dm(i,t,e){const n=this.cache,r=t.length,s=_s(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ac,s[o])}function Im(i,t,e){const n=this.cache,r=t.length,s=_s(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||wc,s[o])}function Um(i){switch(i){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return vm;case 35674:return xm;case 35675:return ym;case 35676:return Sm;case 5124:case 35670:return Mm;case 35667:case 35671:return Em;case 35668:case 35672:return bm;case 35669:case 35673:return wm;case 5125:return Tm;case 36294:return Am;case 36295:return Cm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Im}}class Nm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pm(e.type)}}class Om{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Um(e.type)}}class Fm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function ul(i,t){i.seq.push(t),i.map[t.id]=t}function zm(i,t,e){const n=i.name,r=n.length;for(Qs.lastIndex=0;;){const s=Qs.exec(n),o=Qs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ul(e,c===void 0?new Nm(a,i,t):new Om(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Fm(a),ul(e,d)),e=d}}}class es{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);zm(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function hl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Bm=37297;let km=0;function Hm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Gm(i){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(i);let n;switch(t===e?n="":t===ss&&e===rs?n="LinearDisplayP3ToLinearSRGB":t===rs&&e===ss&&(n="LinearSRGBToLinearDisplayP3"),i){case yn:case ps:return[n,"LinearTransferOETF"];case ue:case Pa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function fl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Hm(i.getShaderSource(t),o)}else return r}function Vm(i,t){const e=Gm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Wm(i,t){let e;switch(t){case Gu:e="Linear";break;case Vu:e="Reinhard";break;case Wu:e="OptimizedCineon";break;case Xu:e="ACESFilmic";break;case Yu:e="AgX";break;case qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Xm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function Ym(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ii(i){return i!==""}function dl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(i){return i.replace(Zm,Jm)}const Km=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jm(i,t){let e=Wt[t];if(e===void 0){const n=Km.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xa(e)}const $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(i){return i.replace($m,Qm)}function Qm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function tg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function eg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case Hi:t="ENVMAP_TYPE_CUBE";break;case ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ng(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:t="ENVMAP_MODE_REFRACTION";break}return t}function ig(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $l:t="ENVMAP_BLENDING_MULTIPLY";break;case ku:t="ENVMAP_BLENDING_MIX";break;case Hu:t="ENVMAP_BLENDING_ADD";break}return t}function rg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sg(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=tg(e),c=eg(e),u=ng(e),d=ig(e),m=rg(e),p=e.isWebGL2?"":Xm(e),_=qm(e),g=Ym(s),f=r.createProgram();let h,S,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),h.length>0&&(h+=`
`),S=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),S.length>0&&(S+=`
`)):(h=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),S=[p,gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Un?Wm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Vm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),o=xa(o),o=dl(o,e),o=pl(o,e),a=xa(a),a=dl(a,e),a=pl(a,e),o=ml(o),a=ml(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=y+h+o,A=y+S+a,P=hl(r,r.VERTEX_SHADER,E),T=hl(r,r.FRAGMENT_SHADER,A);r.attachShader(f,P),r.attachShader(f,T),e.index0AttributeName!==void 0?r.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function k(C){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(f).trim(),v=r.getShaderInfoLog(P).trim(),O=r.getShaderInfoLog(T).trim();let K=!0,Y=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,P,T);else{const et=fl(r,P,"vertex"),j=fl(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+et+`
`+j)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(v===""||O==="")&&(Y=!1);Y&&(C.diagnostics={runnable:K,programLog:V,vertexShader:{log:v,prefix:h},fragmentShader:{log:O,prefix:S}})}r.deleteShader(P),r.deleteShader(T),W=new es(r,f),w=jm(r,f)}let W;this.getUniforms=function(){return W===void 0&&k(this),W};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(f,Bm)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=km++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=P,this.fragmentShader=T,this}let ag=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lg(t),e.set(t,n)),n}}class lg{constructor(t){this.id=ag++,this.code=t,this.usedTimes=0}}function cg(i,t,e,n,r,s,o){const a=new Da,l=new og,c=new Set,u=[],d=r.isWebGL2,m=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(w){return c.add(w),w===0?"uv":`uv${w}`}function h(w,L,C,V,v){const O=V.fog,K=v.geometry,Y=w.isMeshStandardMaterial?V.environment:null,et=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),j=et&&et.mapping===ds?et.image.height:null,nt=g[w.type];w.precision!==null&&(_=r.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const H=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,q=H!==void 0?H.length:0;let ht=0;K.morphAttributes.position!==void 0&&(ht=1),K.morphAttributes.normal!==void 0&&(ht=2),K.morphAttributes.color!==void 0&&(ht=3);let J,Q,yt,Et;if(nt){const jt=nn[nt];J=jt.vertexShader,Q=jt.fragmentShader}else J=w.vertexShader,Q=w.fragmentShader,l.update(w),yt=l.getVertexShaderID(w),Et=l.getFragmentShaderID(w);const xt=i.getRenderTarget(),_t=v.isInstancedMesh===!0,Rt=v.isBatchedMesh===!0,bt=!!w.map,B=!!w.matcap,pt=!!et,x=!!w.aoMap,Z=!!w.lightMap,z=!!w.bumpMap,D=!!w.normalMap,R=!!w.displacementMap,M=!!w.emissiveMap,b=!!w.metalnessMap,U=!!w.roughnessMap,F=w.anisotropy>0,$=w.clearcoat>0,tt=w.iridescence>0,rt=w.sheen>0,ct=w.transmission>0,gt=F&&!!w.anisotropyMap,St=$&&!!w.clearcoatMap,Dt=$&&!!w.clearcoatNormalMap,ut=$&&!!w.clearcoatRoughnessMap,zt=tt&&!!w.iridescenceMap,Bt=tt&&!!w.iridescenceThicknessMap,At=rt&&!!w.sheenColorMap,Pt=rt&&!!w.sheenRoughnessMap,Tt=!!w.specularMap,Ot=!!w.specularColorMap,G=!!w.specularIntensityMap,vt=ct&&!!w.transmissionMap,wt=ct&&!!w.thicknessMap,It=!!w.gradientMap,N=!!w.alphaMap,dt=w.alphaTest>0,ft=!!w.alphaHash,Lt=!!w.extensions;let Nt=Un;w.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Nt=i.toneMapping);const Zt={isWebGL2:d,shaderID:nt,shaderType:w.type,shaderName:w.name,vertexShader:J,fragmentShader:Q,defines:w.defines,customVertexShaderID:yt,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:Rt,instancing:_t,instancingColor:_t&&v.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:yn,alphaToCoverage:!!w.alphaToCoverage,map:bt,matcap:B,envMap:pt,envMapMode:pt&&et.mapping,envMapCubeUVHeight:j,aoMap:x,lightMap:Z,bumpMap:z,normalMap:D,displacementMap:p&&R,emissiveMap:M,normalMapObjectSpace:D&&w.normalMapType===rh,normalMapTangentSpace:D&&w.normalMapType===lc,metalnessMap:b,roughnessMap:U,anisotropy:F,anisotropyMap:gt,clearcoat:$,clearcoatMap:St,clearcoatNormalMap:Dt,clearcoatRoughnessMap:ut,iridescence:tt,iridescenceMap:zt,iridescenceThicknessMap:Bt,sheen:rt,sheenColorMap:At,sheenRoughnessMap:Pt,specularMap:Tt,specularColorMap:Ot,specularIntensityMap:G,transmission:ct,transmissionMap:vt,thicknessMap:wt,gradientMap:It,opaque:w.transparent===!1&&w.blending===Ni&&w.alphaToCoverage===!1,alphaMap:N,alphaTest:dt,alphaHash:ft,combine:w.combine,mapUv:bt&&f(w.map.channel),aoMapUv:x&&f(w.aoMap.channel),lightMapUv:Z&&f(w.lightMap.channel),bumpMapUv:z&&f(w.bumpMap.channel),normalMapUv:D&&f(w.normalMap.channel),displacementMapUv:R&&f(w.displacementMap.channel),emissiveMapUv:M&&f(w.emissiveMap.channel),metalnessMapUv:b&&f(w.metalnessMap.channel),roughnessMapUv:U&&f(w.roughnessMap.channel),anisotropyMapUv:gt&&f(w.anisotropyMap.channel),clearcoatMapUv:St&&f(w.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&f(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&f(w.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&f(w.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&f(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&f(w.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&f(w.sheenRoughnessMap.channel),specularMapUv:Tt&&f(w.specularMap.channel),specularColorMapUv:Ot&&f(w.specularColorMap.channel),specularIntensityMapUv:G&&f(w.specularIntensityMap.channel),transmissionMapUv:vt&&f(w.transmissionMap.channel),thicknessMapUv:wt&&f(w.thicknessMap.channel),alphaMapUv:N&&f(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(D||F),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!K.attributes.uv&&(bt||N),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:v.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ht,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&w.map.isVideoTexture===!0&&$t.getTransfer(w.map.colorSpace)===te,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pn,flipSided:w.side===Oe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Lt&&w.extensions.derivatives===!0,extensionFragDepth:Lt&&w.extensions.fragDepth===!0,extensionDrawBuffers:Lt&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Lt&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Lt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Lt&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function S(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)L.push(C),L.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(y(L,w),E(L,w),L.push(i.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function y(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function E(w,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.matcap&&a.enable(4),L.envMap&&a.enable(5),L.normalMapObjectSpace&&a.enable(6),L.normalMapTangentSpace&&a.enable(7),L.clearcoat&&a.enable(8),L.iridescence&&a.enable(9),L.alphaTest&&a.enable(10),L.vertexColors&&a.enable(11),L.vertexAlphas&&a.enable(12),L.vertexUv1s&&a.enable(13),L.vertexUv2s&&a.enable(14),L.vertexUv3s&&a.enable(15),L.vertexTangents&&a.enable(16),L.anisotropy&&a.enable(17),L.alphaHash&&a.enable(18),L.batching&&a.enable(19),w.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.useLegacyLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.alphaToCoverage&&a.enable(20),w.push(a.mask)}function A(w){const L=g[w.type];let C;if(L){const V=nn[L];C=Wh.clone(V.uniforms)}else C=w.uniforms;return C}function P(w,L){let C;for(let V=0,v=u.length;V<v;V++){const O=u[V];if(O.cacheKey===L){C=O,++C.usedTimes;break}}return C===void 0&&(C=new sg(i,L,w,s),u.push(C)),C}function T(w){if(--w.usedTimes===0){const L=u.indexOf(w);u[L]=u[u.length-1],u.pop(),w.destroy()}}function k(w){l.remove(w)}function W(){l.dispose()}return{getParameters:h,getProgramCacheKey:S,getUniforms:A,acquireProgram:P,releaseProgram:T,releaseShaderCache:k,programs:u,dispose:W}}function ug(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function hg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _l(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,m,p,_,g,f){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:m,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:f},i[t]=h):(h.id=d.id,h.object=d,h.geometry=m,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=f),t++,h}function a(d,m,p,_,g,f){const h=o(d,m,p,_,g,f);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):e.push(h)}function l(d,m,p,_,g,f){const h=o(d,m,p,_,g,f);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function c(d,m){e.length>1&&e.sort(d||hg),n.length>1&&n.sort(m||_l),r.length>1&&r.sort(m||_l)}function u(){for(let d=t,m=i.length;d<m;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function fg(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new vl,i.set(n,[o])):r>=s.length?(o=new vl,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function dg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Ht};break;case"SpotLight":e={position:new X,direction:new X,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function pg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let mg=0;function gg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _g(i,t){const e=new dg,n=pg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new X);const s=new X,o=new ne,a=new ne;function l(u,d){let m=0,p=0,_=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let g=0,f=0,h=0,S=0,y=0,E=0,A=0,P=0,T=0,k=0,W=0;u.sort(gg);const w=d===!0?Math.PI:1;for(let C=0,V=u.length;C<V;C++){const v=u[C],O=v.color,K=v.intensity,Y=v.distance,et=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)m+=O.r*K*w,p+=O.g*K*w,_+=O.b*K*w;else if(v.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(v.sh.coefficients[j],K);W++}else if(v.isDirectionalLight){const j=e.get(v);if(j.color.copy(v.color).multiplyScalar(v.intensity*w),v.castShadow){const nt=v.shadow,H=n.get(v);H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,r.directionalShadow[g]=H,r.directionalShadowMap[g]=et,r.directionalShadowMatrix[g]=v.shadow.matrix,E++}r.directional[g]=j,g++}else if(v.isSpotLight){const j=e.get(v);j.position.setFromMatrixPosition(v.matrixWorld),j.color.copy(O).multiplyScalar(K*w),j.distance=Y,j.coneCos=Math.cos(v.angle),j.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),j.decay=v.decay,r.spot[h]=j;const nt=v.shadow;if(v.map&&(r.spotLightMap[T]=v.map,T++,nt.updateMatrices(v),v.castShadow&&k++),r.spotLightMatrix[h]=nt.matrix,v.castShadow){const H=n.get(v);H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,r.spotShadow[h]=H,r.spotShadowMap[h]=et,P++}h++}else if(v.isRectAreaLight){const j=e.get(v);j.color.copy(O).multiplyScalar(K),j.halfWidth.set(v.width*.5,0,0),j.halfHeight.set(0,v.height*.5,0),r.rectArea[S]=j,S++}else if(v.isPointLight){const j=e.get(v);if(j.color.copy(v.color).multiplyScalar(v.intensity*w),j.distance=v.distance,j.decay=v.decay,v.castShadow){const nt=v.shadow,H=n.get(v);H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,H.shadowCameraNear=nt.camera.near,H.shadowCameraFar=nt.camera.far,r.pointShadow[f]=H,r.pointShadowMap[f]=et,r.pointShadowMatrix[f]=v.shadow.matrix,A++}r.point[f]=j,f++}else if(v.isHemisphereLight){const j=e.get(v);j.skyColor.copy(v.color).multiplyScalar(K*w),j.groundColor.copy(v.groundColor).multiplyScalar(K*w),r.hemi[y]=j,y++}}S>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_FLOAT_1,r.rectAreaLTC2=Mt.LTC_FLOAT_2):(r.rectAreaLTC1=Mt.LTC_HALF_1,r.rectAreaLTC2=Mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_FLOAT_1,r.rectAreaLTC2=Mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_HALF_1,r.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=p,r.ambient[2]=_;const L=r.hash;(L.directionalLength!==g||L.pointLength!==f||L.spotLength!==h||L.rectAreaLength!==S||L.hemiLength!==y||L.numDirectionalShadows!==E||L.numPointShadows!==A||L.numSpotShadows!==P||L.numSpotMaps!==T||L.numLightProbes!==W)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=S,r.point.length=f,r.hemi.length=y,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=P+T-k,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=W,L.directionalLength=g,L.pointLength=f,L.spotLength=h,L.rectAreaLength=S,L.hemiLength=y,L.numDirectionalShadows=E,L.numPointShadows=A,L.numSpotShadows=P,L.numSpotMaps=T,L.numLightProbes=W,r.version=mg++)}function c(u,d){let m=0,p=0,_=0,g=0,f=0;const h=d.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const E=u[S];if(E.isDirectionalLight){const A=r.directional[m];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),m++}else if(E.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(h),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),_++}else if(E.isRectAreaLight){const A=r.rectArea[g];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(h),a.identity(),o.copy(E.matrixWorld),o.premultiply(h),a.extractRotation(o),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(h),p++}else if(E.isHemisphereLight){const A=r.hemi[f];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(h),f++}}}return{setup:l,setupView:c,state:r}}function xl(i,t){const e=new _g(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(d){n.push(d)}function a(d){r.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function vg(i,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new xl(i,t),e.set(s,[l])):o>=a.length?(l=new xl(i,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class xg extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yg extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
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
}`;function Eg(i,t,e){let n=new Ia;const r=new mt,s=new mt,o=new he,a=new xg({depthPacking:ih}),l=new yg,c={},u=e.maxTextureSize,d={[Fn]:Oe,[Oe]:Fn,[pn]:pn},m=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Sg,fragmentShader:Mg}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const _=new He;_.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new _e(_,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let h=this.type;this.render=function(P,T,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const W=i.getRenderTarget(),w=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),C=i.state;C.setBlending(In),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const V=h!==dn&&this.type===dn,v=h===dn&&this.type!==dn;for(let O=0,K=P.length;O<K;O++){const Y=P[O],et=Y.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;r.copy(et.mapSize);const j=et.getFrameExtents();if(r.multiply(j),s.copy(et.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,et.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,et.mapSize.y=s.y)),et.map===null||V===!0||v===!0){const H=this.type!==dn?{minFilter:Re,magFilter:Re}:{};et.map!==null&&et.map.dispose(),et.map=new Qn(r.x,r.y,H),et.map.texture.name=Y.name+".shadowMap",et.camera.updateProjectionMatrix()}i.setRenderTarget(et.map),i.clear();const nt=et.getViewportCount();for(let H=0;H<nt;H++){const q=et.getViewport(H);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),C.viewport(o),et.updateMatrices(Y,H),n=et.getFrustum(),E(T,k,et.camera,Y,this.type)}et.isPointLightShadow!==!0&&this.type===dn&&S(et,k),et.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(W,w,L)};function S(P,T){const k=t.update(g);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Qn(r.x,r.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,k,m,g,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,k,p,g,null)}function y(P,T,k,W){let w=null;const L=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)w=L;else if(w=k.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const C=w.uuid,V=T.uuid;let v=c[C];v===void 0&&(v={},c[C]=v);let O=v[V];O===void 0&&(O=w.clone(),v[V]=O,T.addEventListener("dispose",A)),w=O}if(w.visible=T.visible,w.wireframe=T.wireframe,W===dn?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:d[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const C=i.properties.get(w);C.light=k}return w}function E(P,T,k,W,w){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===dn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const V=t.update(P),v=P.material;if(Array.isArray(v)){const O=V.groups;for(let K=0,Y=O.length;K<Y;K++){const et=O[K],j=v[et.materialIndex];if(j&&j.visible){const nt=y(P,j,W,w);P.onBeforeShadow(i,P,T,k,V,nt,et),i.renderBufferDirect(k,null,V,nt,P,et),P.onAfterShadow(i,P,T,k,V,nt,et)}}}else if(v.visible){const O=y(P,v,W,w);P.onBeforeShadow(i,P,T,k,V,O,null),i.renderBufferDirect(k,null,V,O,P,null),P.onAfterShadow(i,P,T,k,V,O,null)}}const C=P.children;for(let V=0,v=C.length;V<v;V++)E(C[V],T,k,W,w)}function A(P){P.target.removeEventListener("dispose",A);for(const k in c){const W=c[k],w=P.target.uuid;w in W&&(W[w].dispose(),delete W[w])}}}function bg(i,t,e){const n=e.isWebGL2;function r(){let N=!1;const dt=new he;let ft=null;const Lt=new he(0,0,0,0);return{setMask:function(Nt){ft!==Nt&&!N&&(i.colorMask(Nt,Nt,Nt,Nt),ft=Nt)},setLocked:function(Nt){N=Nt},setClear:function(Nt,Zt,jt,Qt,ve){ve===!0&&(Nt*=Qt,Zt*=Qt,jt*=Qt),dt.set(Nt,Zt,jt,Qt),Lt.equals(dt)===!1&&(i.clearColor(Nt,Zt,jt,Qt),Lt.copy(dt))},reset:function(){N=!1,ft=null,Lt.set(-1,0,0,0)}}}function s(){let N=!1,dt=null,ft=null,Lt=null;return{setTest:function(Nt){Nt?_t(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(Nt){dt!==Nt&&!N&&(i.depthMask(Nt),dt=Nt)},setFunc:function(Nt){if(ft!==Nt){switch(Nt){case Iu:i.depthFunc(i.NEVER);break;case Uu:i.depthFunc(i.ALWAYS);break;case Nu:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case Ou:i.depthFunc(i.EQUAL);break;case Fu:i.depthFunc(i.GEQUAL);break;case zu:i.depthFunc(i.GREATER);break;case Bu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Nt}},setLocked:function(Nt){N=Nt},setClear:function(Nt){Lt!==Nt&&(i.clearDepth(Nt),Lt=Nt)},reset:function(){N=!1,dt=null,ft=null,Lt=null}}}function o(){let N=!1,dt=null,ft=null,Lt=null,Nt=null,Zt=null,jt=null,Qt=null,ve=null;return{setTest:function(Kt){N||(Kt?_t(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(Kt){dt!==Kt&&!N&&(i.stencilMask(Kt),dt=Kt)},setFunc:function(Kt,oe,we){(ft!==Kt||Lt!==oe||Nt!==we)&&(i.stencilFunc(Kt,oe,we),ft=Kt,Lt=oe,Nt=we)},setOp:function(Kt,oe,we){(Zt!==Kt||jt!==oe||Qt!==we)&&(i.stencilOp(Kt,oe,we),Zt=Kt,jt=oe,Qt=we)},setLocked:function(Kt){N=Kt},setClear:function(Kt){ve!==Kt&&(i.clearStencil(Kt),ve=Kt)},reset:function(){N=!1,dt=null,ft=null,Lt=null,Nt=null,Zt=null,jt=null,Qt=null,ve=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let m={},p={},_=new WeakMap,g=[],f=null,h=!1,S=null,y=null,E=null,A=null,P=null,T=null,k=null,W=new Ht(0,0,0),w=0,L=!1,C=null,V=null,v=null,O=null,K=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,j=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(nt)[1]),et=j>=1):nt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),et=j>=2);let H=null,q={};const ht=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),Q=new he().fromArray(ht),yt=new he().fromArray(J);function Et(N,dt,ft,Lt){const Nt=new Uint8Array(4),Zt=i.createTexture();i.bindTexture(N,Zt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<ft;jt++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(dt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(dt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return Zt}const xt={};xt[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xt[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_t(i.DEPTH_TEST),l.setFunc(ns),R(!1),M($a),_t(i.CULL_FACE),z(In);function _t(N){m[N]!==!0&&(i.enable(N),m[N]=!0)}function Rt(N){m[N]!==!1&&(i.disable(N),m[N]=!1)}function bt(N,dt){return p[N]!==dt?(i.bindFramebuffer(N,dt),p[N]=dt,n&&(N===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=dt),N===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=dt)),!0):!1}function B(N,dt){let ft=g,Lt=!1;if(N)if(ft=_.get(dt),ft===void 0&&(ft=[],_.set(dt,ft)),N.isWebGLMultipleRenderTargets){const Nt=N.texture;if(ft.length!==Nt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let Zt=0,jt=Nt.length;Zt<jt;Zt++)ft[Zt]=i.COLOR_ATTACHMENT0+Zt;ft.length=Nt.length,Lt=!0}}else ft[0]!==i.COLOR_ATTACHMENT0&&(ft[0]=i.COLOR_ATTACHMENT0,Lt=!0);else ft[0]!==i.BACK&&(ft[0]=i.BACK,Lt=!0);Lt&&(e.isWebGL2?i.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function pt(N){return f!==N?(i.useProgram(N),f=N,!0):!1}const x={[Xn]:i.FUNC_ADD,[vu]:i.FUNC_SUBTRACT,[xu]:i.FUNC_REVERSE_SUBTRACT};if(n)x[no]=i.MIN,x[io]=i.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(x[no]=N.MIN_EXT,x[io]=N.MAX_EXT)}const Z={[yu]:i.ZERO,[Su]:i.ONE,[Mu]:i.SRC_COLOR,[ua]:i.SRC_ALPHA,[Cu]:i.SRC_ALPHA_SATURATE,[Tu]:i.DST_COLOR,[bu]:i.DST_ALPHA,[Eu]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[Au]:i.ONE_MINUS_DST_COLOR,[wu]:i.ONE_MINUS_DST_ALPHA,[Ru]:i.CONSTANT_COLOR,[Pu]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Du]:i.ONE_MINUS_CONSTANT_ALPHA};function z(N,dt,ft,Lt,Nt,Zt,jt,Qt,ve,Kt){if(N===In){h===!0&&(Rt(i.BLEND),h=!1);return}if(h===!1&&(_t(i.BLEND),h=!0),N!==_u){if(N!==S||Kt!==L){if((y!==Xn||P!==Xn)&&(i.blendEquation(i.FUNC_ADD),y=Xn,P=Xn),Kt)switch(N){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case to:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case to:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,A=null,T=null,k=null,W.set(0,0,0),w=0,S=N,L=Kt}return}Nt=Nt||dt,Zt=Zt||ft,jt=jt||Lt,(dt!==y||Nt!==P)&&(i.blendEquationSeparate(x[dt],x[Nt]),y=dt,P=Nt),(ft!==E||Lt!==A||Zt!==T||jt!==k)&&(i.blendFuncSeparate(Z[ft],Z[Lt],Z[Zt],Z[jt]),E=ft,A=Lt,T=Zt,k=jt),(Qt.equals(W)===!1||ve!==w)&&(i.blendColor(Qt.r,Qt.g,Qt.b,ve),W.copy(Qt),w=ve),S=N,L=!1}function D(N,dt){N.side===pn?Rt(i.CULL_FACE):_t(i.CULL_FACE);let ft=N.side===Oe;dt&&(ft=!ft),R(ft),N.blending===Ni&&N.transparent===!1?z(In):z(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Lt=N.stencilWrite;c.setTest(Lt),Lt&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),U(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function R(N){C!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),C=N)}function M(N){N!==pu?(_t(i.CULL_FACE),N!==V&&(N===$a?i.cullFace(i.BACK):N===mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),V=N}function b(N){N!==v&&(et&&i.lineWidth(N),v=N)}function U(N,dt,ft){N?(_t(i.POLYGON_OFFSET_FILL),(O!==dt||K!==ft)&&(i.polygonOffset(dt,ft),O=dt,K=ft)):Rt(i.POLYGON_OFFSET_FILL)}function F(N){N?_t(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function $(N){N===void 0&&(N=i.TEXTURE0+Y-1),H!==N&&(i.activeTexture(N),H=N)}function tt(N,dt,ft){ft===void 0&&(H===null?ft=i.TEXTURE0+Y-1:ft=H);let Lt=q[ft];Lt===void 0&&(Lt={type:void 0,texture:void 0},q[ft]=Lt),(Lt.type!==N||Lt.texture!==dt)&&(H!==ft&&(i.activeTexture(ft),H=ft),i.bindTexture(N,dt||xt[N]),Lt.type=N,Lt.texture=dt)}function rt(){const N=q[H];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(N){Q.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Q.copy(N))}function G(N){yt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),yt.copy(N))}function vt(N,dt){let ft=d.get(dt);ft===void 0&&(ft=new WeakMap,d.set(dt,ft));let Lt=ft.get(N);Lt===void 0&&(Lt=i.getUniformBlockIndex(dt,N.name),ft.set(N,Lt))}function wt(N,dt){const Lt=d.get(dt).get(N);u.get(dt)!==Lt&&(i.uniformBlockBinding(dt,Lt,N.__bindingPointIndex),u.set(dt,Lt))}function It(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},H=null,q={},p={},_=new WeakMap,g=[],f=null,h=!1,S=null,y=null,E=null,A=null,P=null,T=null,k=null,W=new Ht(0,0,0),w=0,L=!1,C=null,V=null,v=null,O=null,K=null,Q.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:_t,disable:Rt,bindFramebuffer:bt,drawBuffers:B,useProgram:pt,setBlending:z,setMaterial:D,setFlipSided:R,setCullFace:M,setLineWidth:b,setPolygonOffset:U,setScissorTest:F,activeTexture:$,bindTexture:tt,unbindTexture:rt,compressedTexImage2D:ct,compressedTexImage3D:gt,texImage2D:Pt,texImage3D:Tt,updateUBOMapping:vt,uniformBlockBinding:wt,texStorage2D:Bt,texStorage3D:At,texSubImage2D:St,texSubImage3D:Dt,compressedTexSubImage2D:ut,compressedTexSubImage3D:zt,scissor:Ot,viewport:G,reset:It}}function wg(i,t,e,n,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,b){return p?new OffscreenCanvas(M,b):ls("canvas")}function g(M,b,U,F){let $=1;if((M.width>F||M.height>F)&&($=F/Math.max(M.width,M.height)),$<1||b===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const tt=b?os:Math.floor,rt=tt($*M.width),ct=tt($*M.height);d===void 0&&(d=_(rt,ct));const gt=U?_(rt,ct):d;return gt.width=rt,gt.height=ct,gt.getContext("2d").drawImage(M,0,0,rt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+rt+"x"+ct+")."),gt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function f(M){return va(M.width)&&va(M.height)}function h(M){return a?!1:M.wrapS!==Pe||M.wrapT!==Pe||M.minFilter!==Re&&M.minFilter!==De}function S(M,b){return M.generateMipmaps&&b&&M.minFilter!==Re&&M.minFilter!==De}function y(M){i.generateMipmap(M)}function E(M,b,U,F,$=!1){if(a===!1)return b;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let tt=b;if(b===i.RED&&(U===i.FLOAT&&(tt=i.R32F),U===i.HALF_FLOAT&&(tt=i.R16F),U===i.UNSIGNED_BYTE&&(tt=i.R8)),b===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(tt=i.R8UI),U===i.UNSIGNED_SHORT&&(tt=i.R16UI),U===i.UNSIGNED_INT&&(tt=i.R32UI),U===i.BYTE&&(tt=i.R8I),U===i.SHORT&&(tt=i.R16I),U===i.INT&&(tt=i.R32I)),b===i.RG&&(U===i.FLOAT&&(tt=i.RG32F),U===i.HALF_FLOAT&&(tt=i.RG16F),U===i.UNSIGNED_BYTE&&(tt=i.RG8)),b===i.RGBA){const rt=$?is:$t.getTransfer(F);U===i.FLOAT&&(tt=i.RGBA32F),U===i.HALF_FLOAT&&(tt=i.RGBA16F),U===i.UNSIGNED_BYTE&&(tt=rt===te?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function A(M,b,U){return S(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==Re&&M.minFilter!==De?Math.log2(Math.max(b.width,b.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?b.mipmaps.length:1}function P(M){return M===Re||M===ro||M===Zi?i.NEAREST:i.LINEAR}function T(M){const b=M.target;b.removeEventListener("dispose",T),W(b),b.isVideoTexture&&u.delete(b)}function k(M){const b=M.target;b.removeEventListener("dispose",k),L(b)}function W(M){const b=n.get(M);if(b.__webglInit===void 0)return;const U=M.source,F=m.get(U);if(F){const $=F[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(M),Object.keys(F).length===0&&m.delete(U)}n.remove(M)}function w(M){const b=n.get(M);i.deleteTexture(b.__webglTexture);const U=M.source,F=m.get(U);delete F[b.__cacheKey],o.memory.textures--}function L(M){const b=M.texture,U=n.get(M),F=n.get(b);if(F.__webglTexture!==void 0&&(i.deleteTexture(F.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(U.__webglFramebuffer[$]))for(let tt=0;tt<U.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(U.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(U.__webglFramebuffer[$]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[$])}else{if(Array.isArray(U.__webglFramebuffer))for(let $=0;$<U.__webglFramebuffer.length;$++)i.deleteFramebuffer(U.__webglFramebuffer[$]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let $=0;$<U.__webglColorRenderbuffer.length;$++)U.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[$]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let $=0,tt=b.length;$<tt;$++){const rt=n.get(b[$]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(b[$])}n.remove(b),n.remove(M)}let C=0;function V(){C=0}function v(){const M=C;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),C+=1,M}function O(M){const b=[];return b.push(M.wrapS),b.push(M.wrapT),b.push(M.wrapR||0),b.push(M.magFilter),b.push(M.minFilter),b.push(M.anisotropy),b.push(M.internalFormat),b.push(M.format),b.push(M.type),b.push(M.generateMipmaps),b.push(M.premultiplyAlpha),b.push(M.flipY),b.push(M.unpackAlignment),b.push(M.colorSpace),b.join()}function K(M,b){const U=n.get(M);if(M.isVideoTexture&&D(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){const F=M.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(U,M,b);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+b)}function Y(M,b){const U=n.get(M);if(M.version>0&&U.__version!==M.version){Q(U,M,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+b)}function et(M,b){const U=n.get(M);if(M.version>0&&U.__version!==M.version){Q(U,M,b);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+b)}function j(M,b){const U=n.get(M);if(M.version>0&&U.__version!==M.version){yt(U,M,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+b)}const nt={[pa]:i.REPEAT,[Pe]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},H={[Re]:i.NEAREST,[ro]:i.NEAREST_MIPMAP_NEAREST,[Zi]:i.NEAREST_MIPMAP_LINEAR,[De]:i.LINEAR,[Ts]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},q={[sh]:i.NEVER,[hh]:i.ALWAYS,[ah]:i.LESS,[cc]:i.LEQUAL,[oh]:i.EQUAL,[uh]:i.GEQUAL,[lh]:i.GREATER,[ch]:i.NOTEQUAL};function ht(M,b,U){if(b.type===mn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===De||b.magFilter===Ts||b.magFilter===Zi||b.magFilter===Yn||b.minFilter===De||b.minFilter===Ts||b.minFilter===Zi||b.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),U?(i.texParameteri(M,i.TEXTURE_WRAP_S,nt[b.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,nt[b.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,nt[b.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,H[b.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,H[b.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==Pe||b.wrapT!==Pe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,P(b.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,P(b.minFilter)),b.minFilter!==Re&&b.minFilter!==De&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,q[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Re||b.minFilter!==Zi&&b.minFilter!==Yn||b.type===mn&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===fr&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function J(M,b){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,b.addEventListener("dispose",T));const F=b.source;let $=m.get(F);$===void 0&&($={},m.set(F,$));const tt=O(b);if(tt!==M.__cacheKey){$[tt]===void 0&&($[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),$[tt].usedTimes++;const rt=$[M.__cacheKey];rt!==void 0&&($[M.__cacheKey].usedTimes--,rt.usedTimes===0&&w(b)),M.__cacheKey=tt,M.__webglTexture=$[tt].texture}return U}function Q(M,b,U){let F=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(F=i.TEXTURE_3D);const $=J(M,b),tt=b.source;e.bindTexture(F,M.__webglTexture,i.TEXTURE0+U);const rt=n.get(tt);if(tt.version!==rt.__version||$===!0){e.activeTexture(i.TEXTURE0+U);const ct=$t.getPrimaries($t.workingColorSpace),gt=b.colorSpace===Xe?null:$t.getPrimaries(b.colorSpace),St=b.colorSpace===Xe||ct===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Dt=h(b)&&f(b.image)===!1;let ut=g(b.image,Dt,!1,r.maxTextureSize);ut=R(b,ut);const zt=f(ut)||a,Bt=s.convert(b.format,b.colorSpace);let At=s.convert(b.type),Pt=E(b.internalFormat,Bt,At,b.colorSpace,b.isVideoTexture);ht(F,b,zt);let Tt;const Ot=b.mipmaps,G=a&&b.isVideoTexture!==!0&&Pt!==ac,vt=rt.__version===void 0||$===!0,wt=tt.dataReady,It=A(b,ut,zt);if(b.isDepthTexture)Pt=i.DEPTH_COMPONENT,a?b.type===mn?Pt=i.DEPTH_COMPONENT32F:b.type===Ln?Pt=i.DEPTH_COMPONENT24:b.type===jn?Pt=i.DEPTH24_STENCIL8:Pt=i.DEPTH_COMPONENT16:b.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Zn&&Pt===i.DEPTH_COMPONENT&&b.type!==Ra&&b.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ln,At=s.convert(b.type)),b.format===Gi&&Pt===i.DEPTH_COMPONENT&&(Pt=i.DEPTH_STENCIL,b.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=jn,At=s.convert(b.type))),vt&&(G?e.texStorage2D(i.TEXTURE_2D,1,Pt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ut.width,ut.height,0,Bt,At,null));else if(b.isDataTexture)if(Ot.length>0&&zt){G&&vt&&e.texStorage2D(i.TEXTURE_2D,It,Pt,Ot[0].width,Ot[0].height);for(let N=0,dt=Ot.length;N<dt;N++)Tt=Ot[N],G?wt&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,Tt.width,Tt.height,Bt,At,Tt.data):e.texImage2D(i.TEXTURE_2D,N,Pt,Tt.width,Tt.height,0,Bt,At,Tt.data);b.generateMipmaps=!1}else G?(vt&&e.texStorage2D(i.TEXTURE_2D,It,Pt,ut.width,ut.height),wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,Bt,At,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,ut.width,ut.height,0,Bt,At,ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Pt,Ot[0].width,Ot[0].height,ut.depth);for(let N=0,dt=Ot.length;N<dt;N++)Tt=Ot[N],b.format!==Ke?Bt!==null?G?wt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,Tt.width,Tt.height,ut.depth,Bt,Tt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,N,Pt,Tt.width,Tt.height,ut.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,Tt.width,Tt.height,ut.depth,Bt,At,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,N,Pt,Tt.width,Tt.height,ut.depth,0,Bt,At,Tt.data)}else{G&&vt&&e.texStorage2D(i.TEXTURE_2D,It,Pt,Ot[0].width,Ot[0].height);for(let N=0,dt=Ot.length;N<dt;N++)Tt=Ot[N],b.format!==Ke?Bt!==null?G?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,N,0,0,Tt.width,Tt.height,Bt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,N,Pt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?wt&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,Tt.width,Tt.height,Bt,At,Tt.data):e.texImage2D(i.TEXTURE_2D,N,Pt,Tt.width,Tt.height,0,Bt,At,Tt.data)}else if(b.isDataArrayTexture)G?(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Pt,ut.width,ut.height,ut.depth),wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Bt,At,ut.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ut.width,ut.height,ut.depth,0,Bt,At,ut.data);else if(b.isData3DTexture)G?(vt&&e.texStorage3D(i.TEXTURE_3D,It,Pt,ut.width,ut.height,ut.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Bt,At,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ut.width,ut.height,ut.depth,0,Bt,At,ut.data);else if(b.isFramebufferTexture){if(vt)if(G)e.texStorage2D(i.TEXTURE_2D,It,Pt,ut.width,ut.height);else{let N=ut.width,dt=ut.height;for(let ft=0;ft<It;ft++)e.texImage2D(i.TEXTURE_2D,ft,Pt,N,dt,0,Bt,At,null),N>>=1,dt>>=1}}else if(Ot.length>0&&zt){G&&vt&&e.texStorage2D(i.TEXTURE_2D,It,Pt,Ot[0].width,Ot[0].height);for(let N=0,dt=Ot.length;N<dt;N++)Tt=Ot[N],G?wt&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,Bt,At,Tt):e.texImage2D(i.TEXTURE_2D,N,Pt,Bt,At,Tt);b.generateMipmaps=!1}else G?(vt&&e.texStorage2D(i.TEXTURE_2D,It,Pt,ut.width,ut.height),wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Bt,At,ut)):e.texImage2D(i.TEXTURE_2D,0,Pt,Bt,At,ut);S(b,zt)&&y(F),rt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}M.__version=b.version}function yt(M,b,U){if(b.image.length!==6)return;const F=J(M,b),$=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);const tt=n.get($);if($.version!==tt.__version||F===!0){e.activeTexture(i.TEXTURE0+U);const rt=$t.getPrimaries($t.workingColorSpace),ct=b.colorSpace===Xe?null:$t.getPrimaries(b.colorSpace),gt=b.colorSpace===Xe||rt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const St=b.isCompressedTexture||b.image[0].isCompressedTexture,Dt=b.image[0]&&b.image[0].isDataTexture,ut=[];for(let N=0;N<6;N++)!St&&!Dt?ut[N]=g(b.image[N],!1,!0,r.maxCubemapSize):ut[N]=Dt?b.image[N].image:b.image[N],ut[N]=R(b,ut[N]);const zt=ut[0],Bt=f(zt)||a,At=s.convert(b.format,b.colorSpace),Pt=s.convert(b.type),Tt=E(b.internalFormat,At,Pt,b.colorSpace),Ot=a&&b.isVideoTexture!==!0,G=tt.__version===void 0||F===!0,vt=$.dataReady;let wt=A(b,zt,Bt);ht(i.TEXTURE_CUBE_MAP,b,Bt);let It;if(St){Ot&&G&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Tt,zt.width,zt.height);for(let N=0;N<6;N++){It=ut[N].mipmaps;for(let dt=0;dt<It.length;dt++){const ft=It[dt];b.format!==Ke?At!==null?Ot?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt,0,0,ft.width,ft.height,At,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt,Tt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt,0,0,ft.width,ft.height,At,Pt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt,Tt,ft.width,ft.height,0,At,Pt,ft.data)}}}else{It=b.mipmaps,Ot&&G&&(It.length>0&&wt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Tt,ut[0].width,ut[0].height));for(let N=0;N<6;N++)if(Dt){Ot?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,ut[N].width,ut[N].height,At,Pt,ut[N].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Tt,ut[N].width,ut[N].height,0,At,Pt,ut[N].data);for(let dt=0;dt<It.length;dt++){const Lt=It[dt].image[N].image;Ot?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt+1,0,0,Lt.width,Lt.height,At,Pt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt+1,Tt,Lt.width,Lt.height,0,At,Pt,Lt.data)}}else{Ot?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,At,Pt,ut[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Tt,At,Pt,ut[N]);for(let dt=0;dt<It.length;dt++){const ft=It[dt];Ot?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt+1,0,0,At,Pt,ft.image[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt+1,Tt,At,Pt,ft.image[N])}}}S(b,Bt)&&y(i.TEXTURE_CUBE_MAP),tt.__version=$.version,b.onUpdate&&b.onUpdate(b)}M.__version=b.version}function Et(M,b,U,F,$,tt){const rt=s.convert(U.format,U.colorSpace),ct=s.convert(U.type),gt=E(U.internalFormat,rt,ct,U.colorSpace);if(!n.get(b).__hasExternalTextures){const Dt=Math.max(1,b.width>>tt),ut=Math.max(1,b.height>>tt);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,tt,gt,Dt,ut,b.depth,0,rt,ct,null):e.texImage2D($,tt,gt,Dt,ut,0,rt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),z(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,$,n.get(U).__webglTexture,0,Z(b)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,$,n.get(U).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(M,b,U){if(i.bindRenderbuffer(i.RENDERBUFFER,M),b.depthBuffer&&!b.stencilBuffer){let F=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||z(b)){const $=b.depthTexture;$&&$.isDepthTexture&&($.type===mn?F=i.DEPTH_COMPONENT32F:$.type===Ln&&(F=i.DEPTH_COMPONENT24));const tt=Z(b);z(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,F,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,F,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,F,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(b.depthBuffer&&b.stencilBuffer){const F=Z(b);U&&z(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,F,i.DEPTH24_STENCIL8,b.width,b.height):z(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let $=0;$<F.length;$++){const tt=F[$],rt=s.convert(tt.format,tt.colorSpace),ct=s.convert(tt.type),gt=E(tt.internalFormat,rt,ct,tt.colorSpace),St=Z(b);U&&z(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,gt,b.width,b.height):z(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,gt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,gt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(M,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const F=n.get(b.depthTexture).__webglTexture,$=Z(b);if(b.depthTexture.format===Zn)z(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else if(b.depthTexture.format===Gi)z(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Rt(M){const b=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");_t(b.__webglFramebuffer,M)}else if(U){b.__webglDepthbuffer=[];for(let F=0;F<6;F++)e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[F]),b.__webglDepthbuffer[F]=i.createRenderbuffer(),xt(b.__webglDepthbuffer[F],M,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),xt(b.__webglDepthbuffer,M,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(M,b,U){const F=n.get(M);b!==void 0&&Et(F.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Rt(M)}function B(M){const b=M.texture,U=n.get(M),F=n.get(b);M.addEventListener("dispose",k),M.isWebGLMultipleRenderTargets!==!0&&(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=b.version,o.memory.textures++);const $=M.isWebGLCubeRenderTarget===!0,tt=M.isWebGLMultipleRenderTargets===!0,rt=f(M)||a;if($){U.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[ct]=[];for(let gt=0;gt<b.mipmaps.length;gt++)U.__webglFramebuffer[ct][gt]=i.createFramebuffer()}else U.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let ct=0;ct<b.mipmaps.length;ct++)U.__webglFramebuffer[ct]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(tt)if(r.drawBuffers){const ct=M.texture;for(let gt=0,St=ct.length;gt<St;gt++){const Dt=n.get(ct[gt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&z(M)===!1){const ct=tt?b:[b];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let gt=0;gt<ct.length;gt++){const St=ct[gt];U.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[gt]);const Dt=s.convert(St.format,St.colorSpace),ut=s.convert(St.type),zt=E(St.internalFormat,Dt,ut,St.colorSpace,M.isXRRenderTarget===!0),Bt=Z(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,zt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,U.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(U.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),ht(i.TEXTURE_CUBE_MAP,b,rt);for(let ct=0;ct<6;ct++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)Et(U.__webglFramebuffer[ct][gt],M,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else Et(U.__webglFramebuffer[ct],M,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);S(b,rt)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const ct=M.texture;for(let gt=0,St=ct.length;gt<St;gt++){const Dt=ct[gt],ut=n.get(Dt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),ht(i.TEXTURE_2D,Dt,rt),Et(U.__webglFramebuffer,M,Dt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),S(Dt,rt)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?ct=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,F.__webglTexture),ht(ct,b,rt),a&&b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)Et(U.__webglFramebuffer[gt],M,b,i.COLOR_ATTACHMENT0,ct,gt);else Et(U.__webglFramebuffer,M,b,i.COLOR_ATTACHMENT0,ct,0);S(b,rt)&&y(ct),e.unbindTexture()}M.depthBuffer&&Rt(M)}function pt(M){const b=f(M)||a,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let F=0,$=U.length;F<$;F++){const tt=U[F];if(S(tt,b)){const rt=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ct=n.get(tt).__webglTexture;e.bindTexture(rt,ct),y(rt),e.unbindTexture()}}}function x(M){if(a&&M.samples>0&&z(M)===!1){const b=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,F=M.height;let $=i.COLOR_BUFFER_BIT;const tt=[],rt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(M),gt=M.isWebGLMultipleRenderTargets===!0;if(gt)for(let St=0;St<b.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let St=0;St<b.length;St++){tt.push(i.COLOR_ATTACHMENT0+St),M.depthBuffer&&tt.push(rt);const Dt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Dt===!1&&(M.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),gt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[St]),Dt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[rt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[rt])),gt){const ut=n.get(b[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,U,F,0,0,U,F,$,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let St=0;St<b.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,ct.__webglColorRenderbuffer[St]);const Dt=n.get(b[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Z(M){return Math.min(r.maxSamples,M.samples)}function z(M){const b=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function D(M){const b=o.render.frame;u.get(M)!==b&&(u.set(M,b),M.update())}function R(M,b){const U=M.colorSpace,F=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===_a||U!==yn&&U!==Xe&&($t.getTransfer(U)===te?a===!1?t.has("EXT_sRGB")===!0&&F===Ke?(M.format=_a,M.minFilter=De,M.generateMipmaps=!1):b=fc.sRGBToLinear(b):(F!==Ke||$!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),b}this.allocateTextureUnit=v,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=et,this.setTextureCube=j,this.rebindTextures=bt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=x,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=z}function Tg(i,t,e){const n=e.isWebGL2;function r(s,o=Xe){let a;const l=$t.getTransfer(o);if(s===Nn)return i.UNSIGNED_BYTE;if(s===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(s===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===ju)return i.BYTE;if(s===Zu)return i.SHORT;if(s===Ra)return i.UNSIGNED_SHORT;if(s===tc)return i.INT;if(s===Ln)return i.UNSIGNED_INT;if(s===mn)return i.FLOAT;if(s===fr)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ku)return i.ALPHA;if(s===Ke)return i.RGBA;if(s===Ju)return i.LUMINANCE;if(s===$u)return i.LUMINANCE_ALPHA;if(s===Zn)return i.DEPTH_COMPONENT;if(s===Gi)return i.DEPTH_STENCIL;if(s===_a)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Qu)return i.RED;if(s===ic)return i.RED_INTEGER;if(s===th)return i.RG;if(s===rc)return i.RG_INTEGER;if(s===sc)return i.RGBA_INTEGER;if(s===As||s===Cs||s===Rs||s===Ps)if(l===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===As)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===As)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===so||s===ao||s===oo||s===lo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===so)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ao)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===oo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ac)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===co||s===uo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===co)return l===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===uo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ho||s===fo||s===po||s===mo||s===go||s===_o||s===vo||s===xo||s===yo||s===So||s===Mo||s===Eo||s===bo||s===wo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ho)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===po)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===mo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===go)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_o)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===So)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Eo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wo)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ls||s===To||s===Ao)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ls)return l===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===To)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ao)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===eh||s===Co||s===Ro||s===Po)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ls)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ro)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Po)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Ag extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rr extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cg={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,n),h=this._getHandJoint(c,g);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],m=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&m>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
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

}`;class Lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Le,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new Sn({extensions:{fragDepth:!0},vertexShader:Rg,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _e(new ri(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Dg extends ei{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,m=null,p=null,_=null;const g=new Lg,f=e.getContextAttributes();let h=null,S=null;const y=[],E=[],A=new mt;let P=null;const T=new We;T.layers.enable(1),T.viewport=new he;const k=new We;k.layers.enable(2),k.viewport=new he;const W=[T,k],w=new Ag;w.layers.enable(1),w.layers.enable(2);let L=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=y[J];return Q===void 0&&(Q=new ta,y[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=y[J];return Q===void 0&&(Q=new ta,y[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=y[J];return Q===void 0&&(Q=new ta,y[J]=Q),Q.getHandSpace()};function V(J){const Q=E.indexOf(J.inputSource);if(Q===-1)return;const yt=y[Q];yt!==void 0&&(yt.update(J.inputSource,J.frame,c||o),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function v(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",v),r.removeEventListener("inputsourceschange",O);for(let J=0;J<y.length;J++){const Q=E[J];Q!==null&&(E[J]=null,y[J].disconnect(Q))}L=null,C=null,g.reset(),t.setRenderTarget(h),p=null,m=null,d=null,r=null,S=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",v),r.addEventListener("inputsourceschange",O),f.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qn(p.framebufferWidth,p.framebufferHeight,{format:Ke,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Q=null,yt=null,Et=null;f.depth&&(Et=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=f.stencil?Gi:Zn,yt=f.stencil?jn:Ln);const xt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:s};d=new XRWebGLBinding(r,e),m=d.createProjectionLayer(xt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),S=new Qn(m.textureWidth,m.textureHeight,{format:Ke,type:Nn,depthTexture:new Mc(m.textureWidth,m.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0});const _t=t.properties.get(S);_t.__ignoreDepthValues=m.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(J){for(let Q=0;Q<J.removed.length;Q++){const yt=J.removed[Q],Et=E.indexOf(yt);Et>=0&&(E[Et]=null,y[Et].disconnect(yt))}for(let Q=0;Q<J.added.length;Q++){const yt=J.added[Q];let Et=E.indexOf(yt);if(Et===-1){for(let _t=0;_t<y.length;_t++)if(_t>=E.length){E.push(yt),Et=_t;break}else if(E[_t]===null){E[_t]=yt,Et=_t;break}if(Et===-1)break}const xt=y[Et];xt&&xt.connect(yt)}}const K=new X,Y=new X;function et(J,Q,yt){K.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);const Et=K.distanceTo(Y),xt=Q.projectionMatrix.elements,_t=yt.projectionMatrix.elements,Rt=xt[14]/(xt[10]-1),bt=xt[14]/(xt[10]+1),B=(xt[9]+1)/xt[5],pt=(xt[9]-1)/xt[5],x=(xt[8]-1)/xt[0],Z=(_t[8]+1)/_t[0],z=Rt*x,D=Rt*Z,R=Et/(-x+Z),M=R*-x;Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(M),J.translateZ(R),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const b=Rt+R,U=bt+R,F=z-M,$=D+(Et-M),tt=B*bt/U*b,rt=pt*bt/U*b;J.projectionMatrix.makePerspective(F,$,tt,rt,b,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function j(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;g.texture!==null&&(J.near=g.depthNear,J.far=g.depthFar),w.near=k.near=T.near=J.near,w.far=k.far=T.far=J.far,(L!==w.near||C!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,C=w.far,T.near=L,T.far=C,k.near=L,k.far=C,T.updateProjectionMatrix(),k.updateProjectionMatrix(),J.updateProjectionMatrix());const Q=J.parent,yt=w.cameras;j(w,Q);for(let Et=0;Et<yt.length;Et++)j(yt[Et],Q);yt.length===2?et(w,T,k):w.projectionMatrix.copy(T.projectionMatrix),nt(J,w,Q)};function nt(J,Q,yt){yt===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=dr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(m===null&&p===null))return l},this.setFoveation=function(J){l=J,m!==null&&(m.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null};let H=null;function q(J,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const yt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Et=!1;yt.length!==w.cameras.length&&(w.cameras.length=0,Et=!0);for(let _t=0;_t<yt.length;_t++){const Rt=yt[_t];let bt=null;if(p!==null)bt=p.getViewport(Rt);else{const pt=d.getViewSubImage(m,Rt);bt=pt.viewport,_t===0&&(t.setRenderTargetTextures(S,pt.colorTexture,m.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(S))}let B=W[_t];B===void 0&&(B=new We,B.layers.enable(_t),B.viewport=new he,W[_t]=B),B.matrix.fromArray(Rt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Rt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(bt.x,bt.y,bt.width,bt.height),_t===0&&(w.matrix.copy(B.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Et===!0&&w.cameras.push(B)}const xt=r.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const _t=d.getDepthInformation(yt[0]);_t&&_t.isValid&&_t.texture&&g.init(t,_t,r.renderState)}}for(let yt=0;yt<y.length;yt++){const Et=E[yt],xt=y[yt];Et!==null&&xt!==void 0&&xt.update(Et,Q,c||o)}g.render(t,w),H&&H(J,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const ht=new Sc;ht.setAnimationLoop(q),this.setAnimationLoop=function(J){H=J},this.dispose=function(){}}}function Ig(i,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,vc(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,S,y,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(f,h):h.isMeshToonMaterial?(s(f,h),d(f,h)):h.isMeshPhongMaterial?(s(f,h),u(f,h)):h.isMeshStandardMaterial?(s(f,h),m(f,h),h.isMeshPhysicalMaterial&&p(f,h,E)):h.isMeshMatcapMaterial?(s(f,h),_(f,h)):h.isMeshDepthMaterial?s(f,h):h.isMeshDistanceMaterial?(s(f,h),g(f,h)):h.isMeshNormalMaterial?s(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?l(f,h,S,y):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Oe&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Oe&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const S=t.get(h).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*y,e(h.lightMap,f.lightMapTransform)}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,S,y){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*S,f.scale.value=y*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function m(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),t.get(h).envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function p(f,h,S){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Oe&&f.clearcoatNormalScale.value.negate())),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,h){h.matcap&&(f.matcap.value=h.matcap)}function g(f,h){const S=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ug(i,t,e,n){let r={},s={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const E=y.program;n.uniformBlockBinding(S,E)}function c(S,y){let E=r[S.id];E===void 0&&(_(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",f));const A=y.program;n.updateUBOMapping(S,A);const P=t.render.frame;s[S.id]!==P&&(m(S),s[S.id]=P)}function u(S){const y=d();S.__bindingPointIndex=y;const E=i.createBuffer(),A=S.__size,P=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(S){const y=r[S.id],E=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,T=E.length;P<T;P++){const k=Array.isArray(E[P])?E[P]:[E[P]];for(let W=0,w=k.length;W<w;W++){const L=k[W];if(p(L,P,W,A)===!0){const C=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let v=0;for(let O=0;O<V.length;O++){const K=V[O],Y=g(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,C+v,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,v),v+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,y,E,A){const P=S.value,T=y+"_"+E;if(A[T]===void 0)return typeof P=="number"||typeof P=="boolean"?A[T]=P:A[T]=P.clone(),!0;{const k=A[T];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return A[T]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function _(S){const y=S.uniforms;let E=0;const A=16;for(let T=0,k=y.length;T<k;T++){const W=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,L=W.length;w<L;w++){const C=W[w],V=Array.isArray(C.value)?C.value:[C.value];for(let v=0,O=V.length;v<O;v++){const K=V[v],Y=g(K),et=E%A;et!==0&&A-et<Y.boundary&&(E+=A-et),C.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=Y.storage}}}const P=E%A;return P>0&&(E+=A-P),S.__size=E,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function f(S){const y=S.target;y.removeEventListener("dispose",f);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Cc{constructor(t={}){const{canvas:e=Th(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const h=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;const y=this;let E=!1,A=0,P=0,T=null,k=-1,W=null;const w=new he,L=new he;let C=null;const V=new Ht(0);let v=0,O=e.width,K=e.height,Y=1,et=null,j=null;const nt=new he(0,0,O,K),H=new he(0,0,O,K);let q=!1;const ht=new Ia;let J=!1,Q=!1,yt=null;const Et=new ne,xt=new mt,_t=new X,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return T===null?Y:1}let B=n;function pt(I,it){for(let ot=0;ot<I.length;ot++){const lt=I[ot],st=e.getContext(lt,it);if(st!==null)return st}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ca}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",dt,!1),B===null){const it=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&it.shift(),B=pt(it,I),B===null)throw pt(it)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let x,Z,z,D,R,M,b,U,F,$,tt,rt,ct,gt,St,Dt,ut,zt,Bt,At,Pt,Tt,Ot,G;function vt(){x=new Hp(B),Z=new Np(B,x,t),x.init(Z),Tt=new Tg(B,x,Z),z=new bg(B,x,Z),D=new Wp(B),R=new ug,M=new wg(B,x,z,R,Z,Tt,D),b=new Fp(y),U=new kp(y),F=new Jh(B,Z),Ot=new Ip(B,x,F,Z),$=new Gp(B,F,D,Ot),tt=new jp(B,$,F,D),Bt=new Yp(B,Z,M),Dt=new Op(R),rt=new cg(y,b,U,x,Z,Ot,Dt),ct=new Ig(y,R),gt=new fg,St=new vg(x,Z),zt=new Dp(y,b,U,z,tt,m,l),ut=new Eg(y,tt,Z),G=new Ug(B,D,Z,z),At=new Up(B,x,D,Z),Pt=new Vp(B,x,D,Z),D.programs=rt.programs,y.capabilities=Z,y.extensions=x,y.properties=R,y.renderLists=gt,y.shadowMap=ut,y.state=z,y.info=D}vt();const wt=new Dg(y,B);this.xr=wt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=x.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=x.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(I){I!==void 0&&(Y=I,this.setSize(O,K,!1))},this.getSize=function(I){return I.set(O,K)},this.setSize=function(I,it,ot=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=I,K=it,e.width=Math.floor(I*Y),e.height=Math.floor(it*Y),ot===!0&&(e.style.width=I+"px",e.style.height=it+"px"),this.setViewport(0,0,I,it)},this.getDrawingBufferSize=function(I){return I.set(O*Y,K*Y).floor()},this.setDrawingBufferSize=function(I,it,ot){O=I,K=it,Y=ot,e.width=Math.floor(I*ot),e.height=Math.floor(it*ot),this.setViewport(0,0,I,it)},this.getCurrentViewport=function(I){return I.copy(w)},this.getViewport=function(I){return I.copy(nt)},this.setViewport=function(I,it,ot,lt){I.isVector4?nt.set(I.x,I.y,I.z,I.w):nt.set(I,it,ot,lt),z.viewport(w.copy(nt).multiplyScalar(Y).floor())},this.getScissor=function(I){return I.copy(H)},this.setScissor=function(I,it,ot,lt){I.isVector4?H.set(I.x,I.y,I.z,I.w):H.set(I,it,ot,lt),z.scissor(L.copy(H).multiplyScalar(Y).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(I){z.setScissorTest(q=I)},this.setOpaqueSort=function(I){et=I},this.setTransparentSort=function(I){j=I},this.getClearColor=function(I){return I.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(I=!0,it=!0,ot=!0){let lt=0;if(I){let st=!1;if(T!==null){const Ct=T.texture.format;st=Ct===sc||Ct===rc||Ct===ic}if(st){const Ct=T.texture.type,Ut=Ct===Nn||Ct===Ln||Ct===Ra||Ct===jn||Ct===ec||Ct===nc,Ft=zt.getClearColor(),kt=zt.getClearAlpha(),Xt=Ft.r,Gt=Ft.g,Vt=Ft.b;Ut?(p[0]=Xt,p[1]=Gt,p[2]=Vt,p[3]=kt,B.clearBufferuiv(B.COLOR,0,p)):(_[0]=Xt,_[1]=Gt,_[2]=Vt,_[3]=kt,B.clearBufferiv(B.COLOR,0,_))}else lt|=B.COLOR_BUFFER_BIT}it&&(lt|=B.DEPTH_BUFFER_BIT),ot&&(lt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),St.dispose(),R.dispose(),b.dispose(),U.dispose(),tt.dispose(),Ot.dispose(),G.dispose(),rt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",ve),wt.removeEventListener("sessionend",Kt),yt&&(yt.dispose(),yt=null),oe.stop()};function It(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const I=D.autoReset,it=ut.enabled,ot=ut.autoUpdate,lt=ut.needsUpdate,st=ut.type;vt(),D.autoReset=I,ut.enabled=it,ut.autoUpdate=ot,ut.needsUpdate=lt,ut.type=st}function dt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ft(I){const it=I.target;it.removeEventListener("dispose",ft),Lt(it)}function Lt(I){Nt(I),R.remove(I)}function Nt(I){const it=R.get(I).programs;it!==void 0&&(it.forEach(function(ot){rt.releaseProgram(ot)}),I.isShaderMaterial&&rt.releaseShaderCache(I))}this.renderBufferDirect=function(I,it,ot,lt,st,Ct){it===null&&(it=Rt);const Ut=st.isMesh&&st.matrixWorld.determinant()<0,Ft=uu(I,it,ot,lt,st);z.setMaterial(lt,Ut);let kt=ot.index,Xt=1;if(lt.wireframe===!0){if(kt=$.getWireframeAttribute(ot),kt===void 0)return;Xt=2}const Gt=ot.drawRange,Vt=ot.attributes.position;let le=Gt.start*Xt,ze=(Gt.start+Gt.count)*Xt;Ct!==null&&(le=Math.max(le,Ct.start*Xt),ze=Math.min(ze,(Ct.start+Ct.count)*Xt)),kt!==null?(le=Math.max(le,0),ze=Math.min(ze,kt.count)):Vt!=null&&(le=Math.max(le,0),ze=Math.min(ze,Vt.count));const pe=ze-le;if(pe<0||pe===1/0)return;Ot.setup(st,lt,Ft,ot,kt);let on,ie=At;if(kt!==null&&(on=F.get(kt),ie=Pt,ie.setIndex(on)),st.isMesh)lt.wireframe===!0?(z.setLineWidth(lt.wireframeLinewidth*bt()),ie.setMode(B.LINES)):ie.setMode(B.TRIANGLES);else if(st.isLine){let qt=lt.linewidth;qt===void 0&&(qt=1),z.setLineWidth(qt*bt()),st.isLineSegments?ie.setMode(B.LINES):st.isLineLoop?ie.setMode(B.LINE_LOOP):ie.setMode(B.LINE_STRIP)}else st.isPoints?ie.setMode(B.POINTS):st.isSprite&&ie.setMode(B.TRIANGLES);if(st.isBatchedMesh)ie.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else if(st.isInstancedMesh)ie.renderInstances(le,pe,st.count);else if(ot.isInstancedBufferGeometry){const qt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ms=Math.min(ot.instanceCount,qt);ie.renderInstances(le,pe,Ms)}else ie.render(le,pe)};function Zt(I,it,ot){I.transparent===!0&&I.side===pn&&I.forceSinglePass===!1?(I.side=Oe,I.needsUpdate=!0,Er(I,it,ot),I.side=Fn,I.needsUpdate=!0,Er(I,it,ot),I.side=pn):Er(I,it,ot)}this.compile=function(I,it,ot=null){ot===null&&(ot=I),f=St.get(ot),f.init(),S.push(f),ot.traverseVisible(function(st){st.isLight&&st.layers.test(it.layers)&&(f.pushLight(st),st.castShadow&&f.pushShadow(st))}),I!==ot&&I.traverseVisible(function(st){st.isLight&&st.layers.test(it.layers)&&(f.pushLight(st),st.castShadow&&f.pushShadow(st))}),f.setupLights(y._useLegacyLights);const lt=new Set;return I.traverse(function(st){const Ct=st.material;if(Ct)if(Array.isArray(Ct))for(let Ut=0;Ut<Ct.length;Ut++){const Ft=Ct[Ut];Zt(Ft,ot,st),lt.add(Ft)}else Zt(Ct,ot,st),lt.add(Ct)}),S.pop(),f=null,lt},this.compileAsync=function(I,it,ot=null){const lt=this.compile(I,it,ot);return new Promise(st=>{function Ct(){if(lt.forEach(function(Ut){R.get(Ut).currentProgram.isReady()&&lt.delete(Ut)}),lt.size===0){st(I);return}setTimeout(Ct,10)}x.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let jt=null;function Qt(I){jt&&jt(I)}function ve(){oe.stop()}function Kt(){oe.start()}const oe=new Sc;oe.setAnimationLoop(Qt),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(I){jt=I,wt.setAnimationLoop(I),I===null?oe.stop():oe.start()},wt.addEventListener("sessionstart",ve),wt.addEventListener("sessionend",Kt),this.render=function(I,it){if(it!==void 0&&it.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(it),it=wt.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,it,T),f=St.get(I,S.length),f.init(),S.push(f),Et.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),ht.setFromProjectionMatrix(Et),Q=this.localClippingEnabled,J=Dt.init(this.clippingPlanes,Q),g=gt.get(I,h.length),g.init(),h.push(g),we(I,it,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(et,j),this.info.render.frame++,J===!0&&Dt.beginShadows();const ot=f.state.shadowsArray;if(ut.render(ot,I,it),J===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1)&&zt.render(g,I),f.setupLights(y._useLegacyLights),it.isArrayCamera){const lt=it.cameras;for(let st=0,Ct=lt.length;st<Ct;st++){const Ut=lt[st];qa(g,I,Ut,Ut.viewport)}}else qa(g,I,it);T!==null&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(y,I,it),Ot.resetDefaultState(),k=-1,W=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function we(I,it,ot,lt){if(I.visible===!1)return;if(I.layers.test(it.layers)){if(I.isGroup)ot=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(it);else if(I.isLight)f.pushLight(I),I.castShadow&&f.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ht.intersectsSprite(I)){lt&&_t.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Et);const Ut=tt.update(I),Ft=I.material;Ft.visible&&g.push(I,Ut,Ft,ot,_t.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ht.intersectsObject(I))){const Ut=tt.update(I),Ft=I.material;if(lt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),_t.copy(I.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),_t.copy(Ut.boundingSphere.center)),_t.applyMatrix4(I.matrixWorld).applyMatrix4(Et)),Array.isArray(Ft)){const kt=Ut.groups;for(let Xt=0,Gt=kt.length;Xt<Gt;Xt++){const Vt=kt[Xt],le=Ft[Vt.materialIndex];le&&le.visible&&g.push(I,Ut,le,ot,_t.z,Vt)}}else Ft.visible&&g.push(I,Ut,Ft,ot,_t.z,null)}}const Ct=I.children;for(let Ut=0,Ft=Ct.length;Ut<Ft;Ut++)we(Ct[Ut],it,ot,lt)}function qa(I,it,ot,lt){const st=I.opaque,Ct=I.transmissive,Ut=I.transparent;f.setupLightsView(ot),J===!0&&Dt.setGlobalState(y.clippingPlanes,ot),Ct.length>0&&cu(st,Ct,it,ot),lt&&z.viewport(w.copy(lt)),st.length>0&&Mr(st,it,ot),Ct.length>0&&Mr(Ct,it,ot),Ut.length>0&&Mr(Ut,it,ot),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function cu(I,it,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;const Ct=Z.isWebGL2;yt===null&&(yt=new Qn(1,1,{generateMipmaps:!0,type:x.has("EXT_color_buffer_half_float")?fr:Nn,minFilter:Yn,samples:Ct?4:0})),y.getDrawingBufferSize(xt),Ct?yt.setSize(xt.x,xt.y):yt.setSize(os(xt.x),os(xt.y));const Ut=y.getRenderTarget();y.setRenderTarget(yt),y.getClearColor(V),v=y.getClearAlpha(),v<1&&y.setClearColor(16777215,.5),y.clear();const Ft=y.toneMapping;y.toneMapping=Un,Mr(I,ot,lt),M.updateMultisampleRenderTarget(yt),M.updateRenderTargetMipmap(yt);let kt=!1;for(let Xt=0,Gt=it.length;Xt<Gt;Xt++){const Vt=it[Xt],le=Vt.object,ze=Vt.geometry,pe=Vt.material,on=Vt.group;if(pe.side===pn&&le.layers.test(lt.layers)){const ie=pe.side;pe.side=Oe,pe.needsUpdate=!0,Ya(le,ot,lt,ze,pe,on),pe.side=ie,pe.needsUpdate=!0,kt=!0}}kt===!0&&(M.updateMultisampleRenderTarget(yt),M.updateRenderTargetMipmap(yt)),y.setRenderTarget(Ut),y.setClearColor(V,v),y.toneMapping=Ft}function Mr(I,it,ot){const lt=it.isScene===!0?it.overrideMaterial:null;for(let st=0,Ct=I.length;st<Ct;st++){const Ut=I[st],Ft=Ut.object,kt=Ut.geometry,Xt=lt===null?Ut.material:lt,Gt=Ut.group;Ft.layers.test(ot.layers)&&Ya(Ft,it,ot,kt,Xt,Gt)}}function Ya(I,it,ot,lt,st,Ct){I.onBeforeRender(y,it,ot,lt,st,Ct),I.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),st.onBeforeRender(y,it,ot,lt,I,Ct),st.transparent===!0&&st.side===pn&&st.forceSinglePass===!1?(st.side=Oe,st.needsUpdate=!0,y.renderBufferDirect(ot,it,lt,st,I,Ct),st.side=Fn,st.needsUpdate=!0,y.renderBufferDirect(ot,it,lt,st,I,Ct),st.side=pn):y.renderBufferDirect(ot,it,lt,st,I,Ct),I.onAfterRender(y,it,ot,lt,st,Ct)}function Er(I,it,ot){it.isScene!==!0&&(it=Rt);const lt=R.get(I),st=f.state.lights,Ct=f.state.shadowsArray,Ut=st.state.version,Ft=rt.getParameters(I,st.state,Ct,it,ot),kt=rt.getProgramCacheKey(Ft);let Xt=lt.programs;lt.environment=I.isMeshStandardMaterial?it.environment:null,lt.fog=it.fog,lt.envMap=(I.isMeshStandardMaterial?U:b).get(I.envMap||lt.environment),Xt===void 0&&(I.addEventListener("dispose",ft),Xt=new Map,lt.programs=Xt);let Gt=Xt.get(kt);if(Gt!==void 0){if(lt.currentProgram===Gt&&lt.lightsStateVersion===Ut)return Za(I,Ft),Gt}else Ft.uniforms=rt.getUniforms(I),I.onBuild(ot,Ft,y),I.onBeforeCompile(Ft,y),Gt=rt.acquireProgram(Ft,kt),Xt.set(kt,Gt),lt.uniforms=Ft.uniforms;const Vt=lt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Vt.clippingPlanes=Dt.uniform),Za(I,Ft),lt.needsLights=fu(I),lt.lightsStateVersion=Ut,lt.needsLights&&(Vt.ambientLightColor.value=st.state.ambient,Vt.lightProbe.value=st.state.probe,Vt.directionalLights.value=st.state.directional,Vt.directionalLightShadows.value=st.state.directionalShadow,Vt.spotLights.value=st.state.spot,Vt.spotLightShadows.value=st.state.spotShadow,Vt.rectAreaLights.value=st.state.rectArea,Vt.ltc_1.value=st.state.rectAreaLTC1,Vt.ltc_2.value=st.state.rectAreaLTC2,Vt.pointLights.value=st.state.point,Vt.pointLightShadows.value=st.state.pointShadow,Vt.hemisphereLights.value=st.state.hemi,Vt.directionalShadowMap.value=st.state.directionalShadowMap,Vt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Vt.spotShadowMap.value=st.state.spotShadowMap,Vt.spotLightMatrix.value=st.state.spotLightMatrix,Vt.spotLightMap.value=st.state.spotLightMap,Vt.pointShadowMap.value=st.state.pointShadowMap,Vt.pointShadowMatrix.value=st.state.pointShadowMatrix),lt.currentProgram=Gt,lt.uniformsList=null,Gt}function ja(I){if(I.uniformsList===null){const it=I.currentProgram.getUniforms();I.uniformsList=es.seqWithValue(it.seq,I.uniforms)}return I.uniformsList}function Za(I,it){const ot=R.get(I);ot.outputColorSpace=it.outputColorSpace,ot.batching=it.batching,ot.instancing=it.instancing,ot.instancingColor=it.instancingColor,ot.skinning=it.skinning,ot.morphTargets=it.morphTargets,ot.morphNormals=it.morphNormals,ot.morphColors=it.morphColors,ot.morphTargetsCount=it.morphTargetsCount,ot.numClippingPlanes=it.numClippingPlanes,ot.numIntersection=it.numClipIntersection,ot.vertexAlphas=it.vertexAlphas,ot.vertexTangents=it.vertexTangents,ot.toneMapping=it.toneMapping}function uu(I,it,ot,lt,st){it.isScene!==!0&&(it=Rt),M.resetTextureUnits();const Ct=it.fog,Ut=lt.isMeshStandardMaterial?it.environment:null,Ft=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:yn,kt=(lt.isMeshStandardMaterial?U:b).get(lt.envMap||Ut),Xt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Gt=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Vt=!!ot.morphAttributes.position,le=!!ot.morphAttributes.normal,ze=!!ot.morphAttributes.color;let pe=Un;lt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pe=y.toneMapping);const on=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ie=on!==void 0?on.length:0,qt=R.get(lt),Ms=f.state.lights;if(J===!0&&(Q===!0||I!==W)){const Ge=I===W&&lt.id===k;Dt.setState(lt,I,Ge)}let se=!1;lt.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ms.state.version||qt.outputColorSpace!==Ft||st.isBatchedMesh&&qt.batching===!1||!st.isBatchedMesh&&qt.batching===!0||st.isInstancedMesh&&qt.instancing===!1||!st.isInstancedMesh&&qt.instancing===!0||st.isSkinnedMesh&&qt.skinning===!1||!st.isSkinnedMesh&&qt.skinning===!0||st.isInstancedMesh&&qt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&qt.instancingColor===!1&&st.instanceColor!==null||qt.envMap!==kt||lt.fog===!0&&qt.fog!==Ct||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Dt.numPlanes||qt.numIntersection!==Dt.numIntersection)||qt.vertexAlphas!==Xt||qt.vertexTangents!==Gt||qt.morphTargets!==Vt||qt.morphNormals!==le||qt.morphColors!==ze||qt.toneMapping!==pe||Z.isWebGL2===!0&&qt.morphTargetsCount!==ie)&&(se=!0):(se=!0,qt.__version=lt.version);let zn=qt.currentProgram;se===!0&&(zn=Er(lt,it,st));let Ka=!1,ji=!1,Es=!1;const ye=zn.getUniforms(),Bn=qt.uniforms;if(z.useProgram(zn.program)&&(Ka=!0,ji=!0,Es=!0),lt.id!==k&&(k=lt.id,ji=!0),Ka||W!==I){ye.setValue(B,"projectionMatrix",I.projectionMatrix),ye.setValue(B,"viewMatrix",I.matrixWorldInverse);const Ge=ye.map.cameraPosition;Ge!==void 0&&Ge.setValue(B,_t.setFromMatrixPosition(I.matrixWorld)),Z.logarithmicDepthBuffer&&ye.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&ye.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),W!==I&&(W=I,ji=!0,Es=!0)}if(st.isSkinnedMesh){ye.setOptional(B,st,"bindMatrix"),ye.setOptional(B,st,"bindMatrixInverse");const Ge=st.skeleton;Ge&&(Z.floatVertexTextures?(Ge.boneTexture===null&&Ge.computeBoneTexture(),ye.setValue(B,"boneTexture",Ge.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}st.isBatchedMesh&&(ye.setOptional(B,st,"batchingTexture"),ye.setValue(B,"batchingTexture",st._matricesTexture,M));const bs=ot.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0&&Z.isWebGL2===!0)&&Bt.update(st,ot,zn),(ji||qt.receiveShadow!==st.receiveShadow)&&(qt.receiveShadow=st.receiveShadow,ye.setValue(B,"receiveShadow",st.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Bn.envMap.value=kt,Bn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),ji&&(ye.setValue(B,"toneMappingExposure",y.toneMappingExposure),qt.needsLights&&hu(Bn,Es),Ct&&lt.fog===!0&&ct.refreshFogUniforms(Bn,Ct),ct.refreshMaterialUniforms(Bn,lt,Y,K,yt),es.upload(B,ja(qt),Bn,M)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(es.upload(B,ja(qt),Bn,M),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&ye.setValue(B,"center",st.center),ye.setValue(B,"modelViewMatrix",st.modelViewMatrix),ye.setValue(B,"normalMatrix",st.normalMatrix),ye.setValue(B,"modelMatrix",st.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Ge=lt.uniformsGroups;for(let ws=0,du=Ge.length;ws<du;ws++)if(Z.isWebGL2){const Ja=Ge[ws];G.update(Ja,zn),G.bind(Ja,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function hu(I,it){I.ambientLightColor.needsUpdate=it,I.lightProbe.needsUpdate=it,I.directionalLights.needsUpdate=it,I.directionalLightShadows.needsUpdate=it,I.pointLights.needsUpdate=it,I.pointLightShadows.needsUpdate=it,I.spotLights.needsUpdate=it,I.spotLightShadows.needsUpdate=it,I.rectAreaLights.needsUpdate=it,I.hemisphereLights.needsUpdate=it}function fu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,it,ot){R.get(I.texture).__webglTexture=it,R.get(I.depthTexture).__webglTexture=ot;const lt=R.get(I);lt.__hasExternalTextures=!0,lt.__hasExternalTextures&&(lt.__autoAllocateDepthBuffer=ot===void 0,lt.__autoAllocateDepthBuffer||x.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,it){const ot=R.get(I);ot.__webglFramebuffer=it,ot.__useDefaultFramebuffer=it===void 0},this.setRenderTarget=function(I,it=0,ot=0){T=I,A=it,P=ot;let lt=!0,st=null,Ct=!1,Ut=!1;if(I){const kt=R.get(I);kt.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(B.FRAMEBUFFER,null),lt=!1):kt.__webglFramebuffer===void 0?M.setupRenderTarget(I):kt.__hasExternalTextures&&M.rebindTextures(I,R.get(I.texture).__webglTexture,R.get(I.depthTexture).__webglTexture);const Xt=I.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ut=!0);const Gt=R.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Gt[it])?st=Gt[it][ot]:st=Gt[it],Ct=!0):Z.isWebGL2&&I.samples>0&&M.useMultisampledRTT(I)===!1?st=R.get(I).__webglMultisampledFramebuffer:Array.isArray(Gt)?st=Gt[ot]:st=Gt,w.copy(I.viewport),L.copy(I.scissor),C=I.scissorTest}else w.copy(nt).multiplyScalar(Y).floor(),L.copy(H).multiplyScalar(Y).floor(),C=q;if(z.bindFramebuffer(B.FRAMEBUFFER,st)&&Z.drawBuffers&&lt&&z.drawBuffers(I,st),z.viewport(w),z.scissor(L),z.setScissorTest(C),Ct){const kt=R.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+it,kt.__webglTexture,ot)}else if(Ut){const kt=R.get(I.texture),Xt=it||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,kt.__webglTexture,ot||0,Xt)}k=-1},this.readRenderTargetPixels=function(I,it,ot,lt,st,Ct,Ut){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=R.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){z.bindFramebuffer(B.FRAMEBUFFER,Ft);try{const kt=I.texture,Xt=kt.format,Gt=kt.type;if(Xt!==Ke&&Tt.convert(Xt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=Gt===fr&&(x.has("EXT_color_buffer_half_float")||Z.isWebGL2&&x.has("EXT_color_buffer_float"));if(Gt!==Nn&&Tt.convert(Gt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===mn&&(Z.isWebGL2||x.has("OES_texture_float")||x.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=I.width-lt&&ot>=0&&ot<=I.height-st&&B.readPixels(it,ot,lt,st,Tt.convert(Xt),Tt.convert(Gt),Ct)}finally{const kt=T!==null?R.get(T).__webglFramebuffer:null;z.bindFramebuffer(B.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(I,it,ot=0){const lt=Math.pow(2,-ot),st=Math.floor(it.image.width*lt),Ct=Math.floor(it.image.height*lt);M.setTexture2D(it,0),B.copyTexSubImage2D(B.TEXTURE_2D,ot,0,0,I.x,I.y,st,Ct),z.unbindTexture()},this.copyTextureToTexture=function(I,it,ot,lt=0){const st=it.image.width,Ct=it.image.height,Ut=Tt.convert(ot.format),Ft=Tt.convert(ot.type);M.setTexture2D(ot,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ot.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ot.unpackAlignment),it.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,lt,I.x,I.y,st,Ct,Ut,Ft,it.image.data):it.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,lt,I.x,I.y,it.mipmaps[0].width,it.mipmaps[0].height,Ut,it.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,lt,I.x,I.y,Ut,Ft,it.image),lt===0&&ot.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(I,it,ot,lt,st=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=I.max.x-I.min.x+1,Ut=I.max.y-I.min.y+1,Ft=I.max.z-I.min.z+1,kt=Tt.convert(lt.format),Xt=Tt.convert(lt.type);let Gt;if(lt.isData3DTexture)M.setTexture3D(lt,0),Gt=B.TEXTURE_3D;else if(lt.isDataArrayTexture||lt.isCompressedArrayTexture)M.setTexture2DArray(lt,0),Gt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,lt.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,lt.unpackAlignment);const Vt=B.getParameter(B.UNPACK_ROW_LENGTH),le=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ze=B.getParameter(B.UNPACK_SKIP_PIXELS),pe=B.getParameter(B.UNPACK_SKIP_ROWS),on=B.getParameter(B.UNPACK_SKIP_IMAGES),ie=ot.isCompressedTexture?ot.mipmaps[st]:ot.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ie.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ie.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,I.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,I.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,I.min.z),ot.isDataTexture||ot.isData3DTexture?B.texSubImage3D(Gt,st,it.x,it.y,it.z,Ct,Ut,Ft,kt,Xt,ie.data):ot.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Gt,st,it.x,it.y,it.z,Ct,Ut,Ft,kt,ie.data)):B.texSubImage3D(Gt,st,it.x,it.y,it.z,Ct,Ut,Ft,kt,Xt,ie),B.pixelStorei(B.UNPACK_ROW_LENGTH,Vt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,le),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ze),B.pixelStorei(B.UNPACK_SKIP_ROWS,pe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,on),st===0&&lt.generateMipmaps&&B.generateMipmap(Gt),z.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?M.setTextureCube(I,0):I.isData3DTexture?M.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?M.setTexture2DArray(I,0):M.setTexture2D(I,0),z.unbindTexture()},this.resetState=function(){A=0,P=0,T=null,z.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Pa?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===ps?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ue?Kn:oc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Kn?ue:yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ng extends Cc{}Ng.prototype.isWebGL1Renderer=!0;class Og extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Fg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ga,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Jn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Te=new X;class cs{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Je(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Je(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Je(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Je(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new cs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rc extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let wi;const tr=new X,Ti=new X,Ai=new X,Ci=new mt,er=new mt,Pc=new ne,Xr=new X,nr=new X,qr=new X,yl=new mt,ea=new mt,Sl=new mt;class Ri extends ae{constructor(t=new Rc){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new He;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fg(e,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new cs(n,3,0,!1)),wi.setAttribute("uv",new cs(n,2,3,!1))}this.geometry=wi,this.material=t,this.center=new mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ti.setFromMatrixScale(this.matrixWorld),Pc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ai.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ti.multiplyScalar(-Ai.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Yr(Xr.set(-.5,-.5,0),Ai,o,Ti,r,s),Yr(nr.set(.5,-.5,0),Ai,o,Ti,r,s),Yr(qr.set(.5,.5,0),Ai,o,Ti,r,s),yl.set(0,0),ea.set(1,0),Sl.set(1,1);let a=t.ray.intersectTriangle(Xr,nr,qr,!1,tr);if(a===null&&(Yr(nr.set(-.5,.5,0),Ai,o,Ti,r,s),ea.set(0,1),a=t.ray.intersectTriangle(Xr,qr,nr,!1,tr),a===null))return;const l=t.ray.origin.distanceTo(tr);l<t.near||l>t.far||e.push({distance:l,point:tr.clone(),uv:$e.getInterpolation(tr,Xr,nr,qr,yl,ea,Sl,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Yr(i,t,e,n,r,s){Ci.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(er.x=s*Ci.x-r*Ci.y,er.y=r*Ci.x+s*Ci.y):er.copy(Ci),i.copy(t),i.x+=er.x,i.y+=er.y,i.applyMatrix4(Pc)}class Oa extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ml=new X,El=new X,bl=new ne,na=new gs,jr=new ms;class Lc extends ae{constructor(t=new He,e=new Oa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ml.fromBufferAttribute(e,r-1),El.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ml.distanceTo(El);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),jr.radius+=s,t.ray.intersectsSphere(jr)===!1)return;bl.copy(r).invert(),na.copy(t.ray).applyMatrix4(bl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new X,u=new X,d=new X,m=new X,p=this.isLineSegments?2:1,_=n.index,f=n.attributes.position;if(_!==null){const h=Math.max(0,o.start),S=Math.min(_.count,o.start+o.count);for(let y=h,E=S-1;y<E;y+=p){const A=_.getX(y),P=_.getX(y+1);if(c.fromBufferAttribute(f,A),u.fromBufferAttribute(f,P),na.distanceSqToSegment(c,u,m,d)>l)continue;m.applyMatrix4(this.matrixWorld);const k=t.ray.origin.distanceTo(m);k<t.near||k>t.far||e.push({distance:k,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),S=Math.min(f.count,o.start+o.count);for(let y=h,E=S-1;y<E;y+=p){if(c.fromBufferAttribute(f,y),u.fromBufferAttribute(f,y+1),na.distanceSqToSegment(c,u,m,d)>l)continue;m.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(m);P<t.near||P>t.far||e.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const wl=new X,Tl=new X;class zg extends Lc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)wl.fromBufferAttribute(e,r),Tl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+wl.distanceTo(Tl);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class us extends Le{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],m=n[r+1]-u,p=(o-u)/m;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new mt:new X);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new X,r=[],s=[],o=[],a=new X,l=new ne;for(let p=0;p<=t;p++){const _=p/t;r[p]=this.getTangentAt(_,new X)}s[0]=new X,o[0]=new X;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),m=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ge(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(ge(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fa extends an{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new mt,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),m=l-this.aX,p=c-this.aY;l=m*u-p*d+this.aX,c=m*d+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bg extends Fa{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function za(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let m=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;m*=u,p*=u,r(o,a,m,p)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Zr=new X,ia=new za,ra=new za,sa=new za;class kg extends an{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new X){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Zr.subVectors(r[0],r[1]).add(r[0]),c=Zr);const d=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Zr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(m),p),f=Math.pow(m.distanceToSquared(u),p);g<1e-4&&(g=1),_<1e-4&&(_=g),f<1e-4&&(f=g),ia.initNonuniformCatmullRom(c.x,d.x,m.x,u.x,_,g,f),ra.initNonuniformCatmullRom(c.y,d.y,m.y,u.y,_,g,f),sa.initNonuniformCatmullRom(c.z,d.z,m.z,u.z,_,g,f)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,d.x,m.x,u.x,this.tension),ra.initCatmullRom(c.y,d.y,m.y,u.y,this.tension),sa.initCatmullRom(c.z,d.z,m.z,u.z,this.tension));return n.set(ia.calc(l),ra.calc(l),sa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new X().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Al(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Hg(i,t){const e=1-i;return e*e*t}function Gg(i,t){return 2*(1-i)*i*t}function Vg(i,t){return i*i*t}function or(i,t,e,n){return Hg(i,t)+Gg(i,e)+Vg(i,n)}function Wg(i,t){const e=1-i;return e*e*e*t}function Xg(i,t){const e=1-i;return 3*e*e*i*t}function qg(i,t){return 3*(1-i)*i*i*t}function Yg(i,t){return i*i*i*t}function lr(i,t,e,n,r){return Wg(i,t)+Xg(i,e)+qg(i,n)+Yg(i,r)}class Dc extends an{constructor(t=new mt,e=new mt,n=new mt,r=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new mt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(lr(t,r.x,s.x,o.x,a.x),lr(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jg extends an{constructor(t=new X,e=new X,n=new X,r=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new X){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(lr(t,r.x,s.x,o.x,a.x),lr(t,r.y,s.y,o.y,a.y),lr(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ic extends an{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zg extends an{constructor(t=new X,e=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new X){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new X){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uc extends an{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(or(t,r.x,s.x,o.x),or(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kg extends an{constructor(t=new X,e=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new X){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(or(t,r.x,s.x,o.x),or(t,r.y,s.y,o.y),or(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nc extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Al(a,l.x,c.x,u.x,d.x),Al(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new mt().fromArray(r))}return this}}var ya=Object.freeze({__proto__:null,ArcCurve:Bg,CatmullRomCurve3:kg,CubicBezierCurve:Dc,CubicBezierCurve3:jg,EllipseCurve:Fa,LineCurve:Ic,LineCurve3:Zg,QuadraticBezierCurve:Uc,QuadraticBezierCurve3:Kg,SplineCurve:Nc});class Jg extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ya[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new ya[r.type]().fromJSON(r))}return this}}class Sa extends Jg{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ic(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Uc(this.currentPoint.clone(),new mt(t,e),new mt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Dc(this.currentPoint.clone(),new mt(t,e),new mt(n,r),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Nc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new Fa(t,e,n,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ba extends He{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],m=[],p=[];let _=0;const g=[],f=n/2;let h=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(m,3)),this.setAttribute("uv",new be(p,2));function S(){const E=new X,A=new X;let P=0;const T=(e-t)/n;for(let k=0;k<=s;k++){const W=[],w=k/s,L=w*(e-t)+t;for(let C=0;C<=r;C++){const V=C/r,v=V*l+a,O=Math.sin(v),K=Math.cos(v);A.x=L*O,A.y=-w*n+f,A.z=L*K,d.push(A.x,A.y,A.z),E.set(O,T,K).normalize(),m.push(E.x,E.y,E.z),p.push(V,1-w),W.push(_++)}g.push(W)}for(let k=0;k<r;k++)for(let W=0;W<s;W++){const w=g[W][k],L=g[W+1][k],C=g[W+1][k+1],V=g[W][k+1];u.push(w,L,V),u.push(L,C,V),P+=6}c.addGroup(h,P,0),h+=P}function y(E){const A=_,P=new mt,T=new X;let k=0;const W=E===!0?t:e,w=E===!0?1:-1;for(let C=1;C<=r;C++)d.push(0,f*w,0),m.push(0,w,0),p.push(.5,.5),_++;const L=_;for(let C=0;C<=r;C++){const v=C/r*l+a,O=Math.cos(v),K=Math.sin(v);T.x=W*K,T.y=f*w,T.z=W*O,d.push(T.x,T.y,T.z),m.push(0,w,0),P.x=O*.5+.5,P.y=K*.5*w+.5,p.push(P.x,P.y),_++}for(let C=0;C<r;C++){const V=A+C,v=L+C;E===!0?u.push(v,v+1,V):u.push(v+1,v,V),k+=3}c.addGroup(h,k,E===!0?1:2),h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ka extends Ba{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ka(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oc extends Sa{constructor(t){super(t),this.uuid=rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Sa().fromJSON(r))}return this}}const $g={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Fc(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,m,p;if(n&&(s=i_(i,t,s,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let _=e;_<r;_+=e)d=i[_],m=i[_+1],d<a&&(a=d),m<l&&(l=m),d>c&&(c=d),m>u&&(u=m);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return pr(s,o,e,a,l,p,0),o}};function Fc(i,t,e,n,r){let s,o;if(r===p_(i,t,e,n)>0)for(s=t;s<e;s+=n)o=Cl(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=Cl(s,i[s],i[s+1],o);return o&&vs(o,o.next)&&(gr(o),o=o.next),o}function ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(vs(e,e.next)||re(e.prev,e,e.next)===0)){if(gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function pr(i,t,e,n,r,s,o){if(!i)return;!o&&s&&l_(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?t_(i,n,r,s):Qg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),gr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=e_(ti(i),t,e),pr(i,t,e,n,r,s,2)):o===2&&n_(i,t,e,n,r,s):pr(ti(i),t,e,n,r,s,1);break}}}function Qg(i){const t=i.prev,e=i,n=i.next;if(re(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,m=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=m&&_.y>=d&&_.y<=p&&Ui(r,a,s,l,o,c,_.x,_.y)&&re(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function t_(i,t,e,n){const r=i.prev,s=i,o=i.next;if(re(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,m=o.y,p=a<l?a<c?a:c:l<c?l:c,_=u<d?u<m?u:m:d<m?d:m,g=a>l?a>c?a:c:l>c?l:c,f=u>d?u>m?u:m:d>m?d:m,h=Ma(p,_,t,e,n),S=Ma(g,f,t,e,n);let y=i.prevZ,E=i.nextZ;for(;y&&y.z>=h&&E&&E.z<=S;){if(y.x>=p&&y.x<=g&&y.y>=_&&y.y<=f&&y!==r&&y!==o&&Ui(a,u,l,d,c,m,y.x,y.y)&&re(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=p&&E.x<=g&&E.y>=_&&E.y<=f&&E!==r&&E!==o&&Ui(a,u,l,d,c,m,E.x,E.y)&&re(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=h;){if(y.x>=p&&y.x<=g&&y.y>=_&&y.y<=f&&y!==r&&y!==o&&Ui(a,u,l,d,c,m,y.x,y.y)&&re(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=S;){if(E.x>=p&&E.x<=g&&E.y>=_&&E.y<=f&&E!==r&&E!==o&&Ui(a,u,l,d,c,m,E.x,E.y)&&re(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function e_(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!vs(r,s)&&zc(r,n,n.next,s)&&mr(r,s)&&mr(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),gr(n),gr(n.next),n=i=s),n=n.next}while(n!==i);return ti(n)}function n_(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&h_(o,a)){let l=Bc(o,a);o=ti(o,o.next),l=ti(l,l.next),pr(o,t,e,n,r,s,0),pr(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function i_(i,t,e,n){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Fc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(u_(c));for(r.sort(r_),s=0;s<r.length;s++)e=s_(r[s],e);return e}function r_(i,t){return i.x-t.x}function s_(i,t){const e=a_(i,t);if(!e)return t;const n=Bc(e,i);return ti(n,n.next),ti(e,e.next)}function a_(i,t){let e=t,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const m=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=s&&m>n&&(n=m,r=e.x<e.next.x?e:e.next,m===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,d;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&Ui(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),mr(e,i)&&(d<u||d===u&&(e.x>r.x||e.x===r.x&&o_(r,e)))&&(r=e,u=d)),e=e.next;while(e!==a);return r}function o_(i,t){return re(i.prev,i,t.prev)<0&&re(t.next,i,i.next)<0}function l_(i,t,e,n){let r=i;do r.z===0&&(r.z=Ma(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,c_(r)}function c_(i){let t,e,n,r,s,o,a,l,c=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(o>1);return i}function Ma(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function u_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ui(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function h_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!f_(i,t)&&(mr(i,t)&&mr(t,i)&&d_(i,t)&&(re(i.prev,i,t.prev)||re(i,t.prev,t))||vs(i,t)&&re(i.prev,i,i.next)>0&&re(t.prev,t,t.next)>0)}function re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function vs(i,t){return i.x===t.x&&i.y===t.y}function zc(i,t,e,n){const r=Jr(re(i,t,e)),s=Jr(re(i,t,n)),o=Jr(re(e,n,i)),a=Jr(re(e,n,t));return!!(r!==s&&o!==a||r===0&&Kr(i,e,t)||s===0&&Kr(i,n,t)||o===0&&Kr(e,i,n)||a===0&&Kr(e,t,n))}function Kr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Jr(i){return i>0?1:i<0?-1:0}function f_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&zc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function mr(i,t){return re(i.prev,i,i.next)<0?re(i,t,i.next)>=0&&re(i,i.prev,t)>=0:re(i,t,i.prev)<0||re(i,i.next,t)<0}function d_(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bc(i,t){const e=new Ea(i.i,i.x,i.y),n=new Ea(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Cl(i,t,e,n){const r=new Ea(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ea(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function p_(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class cr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return cr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Rl(t),Pl(n,t);let o=t.length;e.forEach(Rl);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Pl(n,e[l]);const a=$g.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Rl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Pl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class hs extends He{constructor(t=new Oc([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new be(r,3)),this.setAttribute("uv",new be(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const h=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:m_;let y,E=!1,A,P,T,k;h&&(y=h.getSpacedPoints(u),E=!0,m=!1,A=h.computeFrenetFrames(u,!1),P=new X,T=new X,k=new X),m||(f=0,p=0,_=0,g=0);const W=a.extractPoints(c);let w=W.shape;const L=W.holes;if(!cr.isClockWise(w)){w=w.reverse();for(let B=0,pt=L.length;B<pt;B++){const x=L[B];cr.isClockWise(x)&&(L[B]=x.reverse())}}const V=cr.triangulateShape(w,L),v=w;for(let B=0,pt=L.length;B<pt;B++){const x=L[B];w=w.concat(x)}function O(B,pt,x){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(pt,x)}const K=w.length,Y=V.length;function et(B,pt,x){let Z,z,D;const R=B.x-pt.x,M=B.y-pt.y,b=x.x-B.x,U=x.y-B.y,F=R*R+M*M,$=R*U-M*b;if(Math.abs($)>Number.EPSILON){const tt=Math.sqrt(F),rt=Math.sqrt(b*b+U*U),ct=pt.x-M/tt,gt=pt.y+R/tt,St=x.x-U/rt,Dt=x.y+b/rt,ut=((St-ct)*U-(Dt-gt)*b)/(R*U-M*b);Z=ct+R*ut-B.x,z=gt+M*ut-B.y;const zt=Z*Z+z*z;if(zt<=2)return new mt(Z,z);D=Math.sqrt(zt/2)}else{let tt=!1;R>Number.EPSILON?b>Number.EPSILON&&(tt=!0):R<-Number.EPSILON?b<-Number.EPSILON&&(tt=!0):Math.sign(M)===Math.sign(U)&&(tt=!0),tt?(Z=-M,z=R,D=Math.sqrt(F)):(Z=R,z=M,D=Math.sqrt(F/2))}return new mt(Z/D,z/D)}const j=[];for(let B=0,pt=v.length,x=pt-1,Z=B+1;B<pt;B++,x++,Z++)x===pt&&(x=0),Z===pt&&(Z=0),j[B]=et(v[B],v[x],v[Z]);const nt=[];let H,q=j.concat();for(let B=0,pt=L.length;B<pt;B++){const x=L[B];H=[];for(let Z=0,z=x.length,D=z-1,R=Z+1;Z<z;Z++,D++,R++)D===z&&(D=0),R===z&&(R=0),H[Z]=et(x[Z],x[D],x[R]);nt.push(H),q=q.concat(H)}for(let B=0;B<f;B++){const pt=B/f,x=p*Math.cos(pt*Math.PI/2),Z=_*Math.sin(pt*Math.PI/2)+g;for(let z=0,D=v.length;z<D;z++){const R=O(v[z],j[z],Z);Et(R.x,R.y,-x)}for(let z=0,D=L.length;z<D;z++){const R=L[z];H=nt[z];for(let M=0,b=R.length;M<b;M++){const U=O(R[M],H[M],Z);Et(U.x,U.y,-x)}}}const ht=_+g;for(let B=0;B<K;B++){const pt=m?O(w[B],q[B],ht):w[B];E?(T.copy(A.normals[0]).multiplyScalar(pt.x),P.copy(A.binormals[0]).multiplyScalar(pt.y),k.copy(y[0]).add(T).add(P),Et(k.x,k.y,k.z)):Et(pt.x,pt.y,0)}for(let B=1;B<=u;B++)for(let pt=0;pt<K;pt++){const x=m?O(w[pt],q[pt],ht):w[pt];E?(T.copy(A.normals[B]).multiplyScalar(x.x),P.copy(A.binormals[B]).multiplyScalar(x.y),k.copy(y[B]).add(T).add(P),Et(k.x,k.y,k.z)):Et(x.x,x.y,d/u*B)}for(let B=f-1;B>=0;B--){const pt=B/f,x=p*Math.cos(pt*Math.PI/2),Z=_*Math.sin(pt*Math.PI/2)+g;for(let z=0,D=v.length;z<D;z++){const R=O(v[z],j[z],Z);Et(R.x,R.y,d+x)}for(let z=0,D=L.length;z<D;z++){const R=L[z];H=nt[z];for(let M=0,b=R.length;M<b;M++){const U=O(R[M],H[M],Z);E?Et(U.x,U.y+y[u-1].y,y[u-1].x+x):Et(U.x,U.y,d+x)}}}J(),Q();function J(){const B=r.length/3;if(m){let pt=0,x=K*pt;for(let Z=0;Z<Y;Z++){const z=V[Z];xt(z[2]+x,z[1]+x,z[0]+x)}pt=u+f*2,x=K*pt;for(let Z=0;Z<Y;Z++){const z=V[Z];xt(z[0]+x,z[1]+x,z[2]+x)}}else{for(let pt=0;pt<Y;pt++){const x=V[pt];xt(x[2],x[1],x[0])}for(let pt=0;pt<Y;pt++){const x=V[pt];xt(x[0]+K*u,x[1]+K*u,x[2]+K*u)}}n.addGroup(B,r.length/3-B,0)}function Q(){const B=r.length/3;let pt=0;yt(v,pt),pt+=v.length;for(let x=0,Z=L.length;x<Z;x++){const z=L[x];yt(z,pt),pt+=z.length}n.addGroup(B,r.length/3-B,1)}function yt(B,pt){let x=B.length;for(;--x>=0;){const Z=x;let z=x-1;z<0&&(z=B.length-1);for(let D=0,R=u+f*2;D<R;D++){const M=K*D,b=K*(D+1),U=pt+Z+M,F=pt+z+M,$=pt+z+b,tt=pt+Z+b;_t(U,F,$,tt)}}}function Et(B,pt,x){l.push(B),l.push(pt),l.push(x)}function xt(B,pt,x){Rt(B),Rt(pt),Rt(x);const Z=r.length/3,z=S.generateTopUV(n,r,Z-3,Z-2,Z-1);bt(z[0]),bt(z[1]),bt(z[2])}function _t(B,pt,x,Z){Rt(B),Rt(pt),Rt(Z),Rt(pt),Rt(x),Rt(Z);const z=r.length/3,D=S.generateSideWallUV(n,r,z-6,z-3,z-2,z-1);bt(D[0]),bt(D[1]),bt(D[3]),bt(D[1]),bt(D[2]),bt(D[3])}function Rt(B){r.push(l[B*3+0]),r.push(l[B*3+1]),r.push(l[B*3+2])}function bt(B){s.push(B.x),s.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return g_(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new ya[r.type]().fromJSON(r)),new hs(n,t.options)}}const m_={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],u=t[r*3+1];return[new mt(s,o),new mt(a,l),new mt(c,u)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],m=t[r*3],p=t[r*3+1],_=t[r*3+2],g=t[s*3],f=t[s*3+1],h=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-d),new mt(m,1-_),new mt(g,1-h)]:[new mt(a,1-l),new mt(u,1-d),new mt(p,1-_),new mt(f,1-h)]}};function g_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class __ extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kc extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class v_ extends kc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const aa=new ne,Ll=new X,Dl=new X;class x_{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ll),Dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dl),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class y_ extends x_{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ha extends kc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new y_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class S_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Il(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Il();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Il(){return(typeof performance>"u"?Date:performance).now()}class M_{constructor(t,e,n=0,r=1/0){this.ray=new gs(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return ba(t,this,n,e),n.sort(Ul),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)ba(t[r],this,n,e);return n.sort(Ul),n}}function Ul(i,t){return i.distance-t.distance}function ba(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)ba(r[s],t,e,!0)}}class Nl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class E_ extends zg{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new He;r.setAttribute("position",new be(e,3)),r.setAttribute("color",new be(n,3));const s=new Oa({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,n){const r=new Ht,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ca);const Ol={type:"change"},oa={type:"start"},Fl={type:"end"},$r=new gs,zl=new Rn,b_=Math.cos(70*uc.DEG2RAD);class w_ extends ei{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",St),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",St),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ol),n.update(),s=r.NONE},this.update=function(){const G=new X,vt=new sn().setFromUnitVectors(t.up,new X(0,1,0)),wt=vt.clone().invert(),It=new X,N=new sn,dt=new X,ft=2*Math.PI;return function(Nt=null){const Zt=n.object.position;G.copy(Zt).sub(n.target),G.applyQuaternion(vt),a.setFromVector3(G),n.autoRotate&&s===r.NONE&&C(w(Nt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let jt=n.minAzimuthAngle,Qt=n.maxAzimuthAngle;isFinite(jt)&&isFinite(Qt)&&(jt<-Math.PI?jt+=ft:jt>Math.PI&&(jt-=ft),Qt<-Math.PI?Qt+=ft:Qt>Math.PI&&(Qt-=ft),jt<=Qt?a.theta=Math.max(jt,Math.min(Qt,a.theta)):a.theta=a.theta>(jt+Qt)/2?Math.max(jt,a.theta):Math.min(Qt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?a.radius=nt(a.radius):a.radius=nt(a.radius*c),G.setFromSpherical(a),G.applyQuaternion(wt),Zt.copy(n.target).add(G),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ve=!1;if(n.zoomToCursor&&P){let Kt=null;if(n.object.isPerspectiveCamera){const oe=G.length();Kt=nt(oe*c);const we=oe-Kt;n.object.position.addScaledVector(E,we),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const oe=new X(A.x,A.y,0);oe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ve=!0;const we=new X(A.x,A.y,0);we.unproject(n.object),n.object.position.sub(we).add(oe),n.object.updateMatrixWorld(),Kt=G.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Kt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Kt).add(n.object.position):($r.origin.copy(n.object.position),$r.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot($r.direction))<b_?t.lookAt(n.target):(zl.setFromNormalAndCoplanarPoint(n.object.up,n.target),$r.intersectPlane(zl,n.target))))}else n.object.isOrthographicCamera&&(ve=c!==1,ve&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,P=!1,ve||It.distanceToSquared(n.object.position)>o||8*(1-N.dot(n.object.quaternion))>o||dt.distanceToSquared(n.target)>0?(n.dispatchEvent(Ol),It.copy(n.object.position),N.copy(n.object.quaternion),dt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",zt),n.domElement.removeEventListener("pointerdown",M),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",U),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",St),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Nl,l=new Nl;let c=1;const u=new X,d=new mt,m=new mt,p=new mt,_=new mt,g=new mt,f=new mt,h=new mt,S=new mt,y=new mt,E=new X,A=new mt;let P=!1;const T=[],k={};let W=!1;function w(G){return G!==null?2*Math.PI/60*n.autoRotateSpeed*G:2*Math.PI/60/60*n.autoRotateSpeed}function L(G){const vt=Math.abs(G*.01);return Math.pow(.95,n.zoomSpeed*vt)}function C(G){l.theta-=G}function V(G){l.phi-=G}const v=function(){const G=new X;return function(wt,It){G.setFromMatrixColumn(It,0),G.multiplyScalar(-wt),u.add(G)}}(),O=function(){const G=new X;return function(wt,It){n.screenSpacePanning===!0?G.setFromMatrixColumn(It,1):(G.setFromMatrixColumn(It,0),G.crossVectors(n.object.up,G)),G.multiplyScalar(wt),u.add(G)}}(),K=function(){const G=new X;return function(wt,It){const N=n.domElement;if(n.object.isPerspectiveCamera){const dt=n.object.position;G.copy(dt).sub(n.target);let ft=G.length();ft*=Math.tan(n.object.fov/2*Math.PI/180),v(2*wt*ft/N.clientHeight,n.object.matrix),O(2*It*ft/N.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(v(wt*(n.object.right-n.object.left)/n.object.zoom/N.clientWidth,n.object.matrix),O(It*(n.object.top-n.object.bottom)/n.object.zoom/N.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(G){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function et(G){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(G,vt){if(!n.zoomToCursor)return;P=!0;const wt=n.domElement.getBoundingClientRect(),It=G-wt.left,N=vt-wt.top,dt=wt.width,ft=wt.height;A.x=It/dt*2-1,A.y=-(N/ft)*2+1,E.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function nt(G){return Math.max(n.minDistance,Math.min(n.maxDistance,G))}function H(G){d.set(G.clientX,G.clientY)}function q(G){j(G.clientX,G.clientX),h.set(G.clientX,G.clientY)}function ht(G){_.set(G.clientX,G.clientY)}function J(G){m.set(G.clientX,G.clientY),p.subVectors(m,d).multiplyScalar(n.rotateSpeed);const vt=n.domElement;C(2*Math.PI*p.x/vt.clientHeight),V(2*Math.PI*p.y/vt.clientHeight),d.copy(m),n.update()}function Q(G){S.set(G.clientX,G.clientY),y.subVectors(S,h),y.y>0?Y(L(y.y)):y.y<0&&et(L(y.y)),h.copy(S),n.update()}function yt(G){g.set(G.clientX,G.clientY),f.subVectors(g,_).multiplyScalar(n.panSpeed),K(f.x,f.y),_.copy(g),n.update()}function Et(G){j(G.clientX,G.clientY),G.deltaY<0?et(L(G.deltaY)):G.deltaY>0&&Y(L(G.deltaY)),n.update()}function xt(G){let vt=!1;switch(G.code){case n.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,n.keyPanSpeed),vt=!0;break;case n.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,-n.keyPanSpeed),vt=!0;break;case n.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(n.keyPanSpeed,0),vt=!0;break;case n.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(-n.keyPanSpeed,0),vt=!0;break}vt&&(G.preventDefault(),n.update())}function _t(G){if(T.length===1)d.set(G.pageX,G.pageY);else{const vt=Tt(G),wt=.5*(G.pageX+vt.x),It=.5*(G.pageY+vt.y);d.set(wt,It)}}function Rt(G){if(T.length===1)_.set(G.pageX,G.pageY);else{const vt=Tt(G),wt=.5*(G.pageX+vt.x),It=.5*(G.pageY+vt.y);_.set(wt,It)}}function bt(G){const vt=Tt(G),wt=G.pageX-vt.x,It=G.pageY-vt.y,N=Math.sqrt(wt*wt+It*It);h.set(0,N)}function B(G){n.enableZoom&&bt(G),n.enablePan&&Rt(G)}function pt(G){n.enableZoom&&bt(G),n.enableRotate&&_t(G)}function x(G){if(T.length==1)m.set(G.pageX,G.pageY);else{const wt=Tt(G),It=.5*(G.pageX+wt.x),N=.5*(G.pageY+wt.y);m.set(It,N)}p.subVectors(m,d).multiplyScalar(n.rotateSpeed);const vt=n.domElement;C(2*Math.PI*p.x/vt.clientHeight),V(2*Math.PI*p.y/vt.clientHeight),d.copy(m)}function Z(G){if(T.length===1)g.set(G.pageX,G.pageY);else{const vt=Tt(G),wt=.5*(G.pageX+vt.x),It=.5*(G.pageY+vt.y);g.set(wt,It)}f.subVectors(g,_).multiplyScalar(n.panSpeed),K(f.x,f.y),_.copy(g)}function z(G){const vt=Tt(G),wt=G.pageX-vt.x,It=G.pageY-vt.y,N=Math.sqrt(wt*wt+It*It);S.set(0,N),y.set(0,Math.pow(S.y/h.y,n.zoomSpeed)),Y(y.y),h.copy(S);const dt=(G.pageX+vt.x)*.5,ft=(G.pageY+vt.y)*.5;j(dt,ft)}function D(G){n.enableZoom&&z(G),n.enablePan&&Z(G)}function R(G){n.enableZoom&&z(G),n.enableRotate&&x(G)}function M(G){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(G.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",U)),Bt(G),G.pointerType==="touch"?Dt(G):F(G))}function b(G){n.enabled!==!1&&(G.pointerType==="touch"?ut(G):$(G))}function U(G){switch(At(G),T.length){case 0:n.domElement.releasePointerCapture(G.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",U),n.dispatchEvent(Fl),s=r.NONE;break;case 1:const vt=T[0],wt=k[vt];Dt({pointerId:vt,pageX:wt.x,pageY:wt.y});break}}function F(G){let vt;switch(G.button){case 0:vt=n.mouseButtons.LEFT;break;case 1:vt=n.mouseButtons.MIDDLE;break;case 2:vt=n.mouseButtons.RIGHT;break;default:vt=-1}switch(vt){case oi.DOLLY:if(n.enableZoom===!1)return;q(G),s=r.DOLLY;break;case oi.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enablePan===!1)return;ht(G),s=r.PAN}else{if(n.enableRotate===!1)return;H(G),s=r.ROTATE}break;case oi.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enableRotate===!1)return;H(G),s=r.ROTATE}else{if(n.enablePan===!1)return;ht(G),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(oa)}function $(G){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;J(G);break;case r.DOLLY:if(n.enableZoom===!1)return;Q(G);break;case r.PAN:if(n.enablePan===!1)return;yt(G);break}}function tt(G){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(G.preventDefault(),n.dispatchEvent(oa),Et(rt(G)),n.dispatchEvent(Fl))}function rt(G){const vt=G.deltaMode,wt={clientX:G.clientX,clientY:G.clientY,deltaY:G.deltaY};switch(vt){case 1:wt.deltaY*=16;break;case 2:wt.deltaY*=100;break}return G.ctrlKey&&!W&&(wt.deltaY*=10),wt}function ct(G){G.key==="Control"&&(W=!0,n.domElement.getRootNode().addEventListener("keyup",gt,{passive:!0,capture:!0}))}function gt(G){G.key==="Control"&&(W=!1,n.domElement.getRootNode().removeEventListener("keyup",gt,{passive:!0,capture:!0}))}function St(G){n.enabled===!1||n.enablePan===!1||xt(G)}function Dt(G){switch(Pt(G),T.length){case 1:switch(n.touches.ONE){case li.ROTATE:if(n.enableRotate===!1)return;_t(G),s=r.TOUCH_ROTATE;break;case li.PAN:if(n.enablePan===!1)return;Rt(G),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(G),s=r.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(G),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(oa)}function ut(G){switch(Pt(G),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;x(G),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Z(G),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(G),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;R(G),n.update();break;default:s=r.NONE}}function zt(G){n.enabled!==!1&&G.preventDefault()}function Bt(G){T.push(G.pointerId)}function At(G){delete k[G.pointerId];for(let vt=0;vt<T.length;vt++)if(T[vt]==G.pointerId){T.splice(vt,1);return}}function Pt(G){let vt=k[G.pointerId];vt===void 0&&(vt=new mt,k[G.pointerId]=vt),vt.set(G.pageX,G.pageY)}function Tt(G){const vt=G.pointerId===T[0]?T[1]:T[0];return k[vt]}n.domElement.addEventListener("contextmenu",zt),n.domElement.addEventListener("pointerdown",M),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",tt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ct,{passive:!0,capture:!0}),this.update()}}class T_ extends ae{constructor(t,e){super(),this.isViewHelper=!0,this.animating=!1,this.center=new X;const n=new Ht("#ff3653"),r=new Ht("#8adb00"),s=new Ht("#2c8fff"),o=[],a=new M_,l=new mt,c=new ae,u=new Ua(-2,2,2,-2,0,4);u.position.set(0,0,2);const d=new ii(.8,.05,.05).translate(.4,0,0),m=new _e(d,O(n)),p=new _e(d,O(r)),_=new _e(d,O(s));p.rotation.z=Math.PI/2,_.rotation.y=-Math.PI/2,this.add(m),this.add(_),this.add(p);const g=new Ri(K(n,"X"));g.userData.type="posX";const f=new Ri(K(r,"Y"));f.userData.type="posY";const h=new Ri(K(s,"Z"));h.userData.type="posZ";const S=new Ri(K(n));S.userData.type="negX";const y=new Ri(K(r));y.userData.type="negY";const E=new Ri(K(s));E.userData.type="negZ",g.position.x=1,f.position.y=1,h.position.z=1,S.position.x=-1,S.scale.setScalar(.8),y.position.y=-1,y.scale.setScalar(.8),E.position.z=-1,E.scale.setScalar(.8),this.add(g),this.add(f),this.add(h),this.add(S),this.add(y),this.add(E),o.push(g),o.push(f),o.push(h),o.push(S),o.push(y),o.push(E);const A=new X,P=128,T=2*Math.PI;this.render=function(Y){this.quaternion.copy(t.quaternion).invert(),this.updateMatrixWorld(),A.set(0,0,1),A.applyQuaternion(t.quaternion),A.x>=0?(g.material.opacity=1,S.material.opacity=.5):(g.material.opacity=.5,S.material.opacity=1),A.y>=0?(f.material.opacity=1,y.material.opacity=.5):(f.material.opacity=.5,y.material.opacity=1),A.z>=0?(h.material.opacity=1,E.material.opacity=.5):(h.material.opacity=.5,E.material.opacity=1);const et=e.offsetWidth-P;Y.clearDepth(),Y.getViewport(C),Y.setViewport(et,0,P,P),Y.render(this,u),Y.setViewport(C.x,C.y,C.z,C.w)};const k=new X,W=new sn,w=new sn,L=new sn,C=new he;let V=0;this.handleClick=function(Y){if(this.animating===!0)return!1;const et=e.getBoundingClientRect(),j=et.left+(e.offsetWidth-P),nt=et.top+(e.offsetHeight-P);l.x=(Y.clientX-j)/(et.right-j)*2-1,l.y=-((Y.clientY-nt)/(et.bottom-nt))*2+1,a.setFromCamera(l,u);const H=a.intersectObjects(o);if(H.length>0){const ht=H[0].object;return v(ht,this.center),this.animating=!0,!0}else return!1},this.update=function(Y){const et=Y*T;w.rotateTowards(L,et),t.position.set(0,0,1).applyQuaternion(w).multiplyScalar(V).add(this.center),t.quaternion.rotateTowards(W,et),w.angleTo(L)===0&&(this.animating=!1)},this.dispose=function(){d.dispose(),m.material.dispose(),p.material.dispose(),_.material.dispose(),g.material.map.dispose(),f.material.map.dispose(),h.material.map.dispose(),S.material.map.dispose(),y.material.map.dispose(),E.material.map.dispose(),g.material.dispose(),f.material.dispose(),h.material.dispose(),S.material.dispose(),y.material.dispose(),E.material.dispose()};function v(Y,et){switch(Y.userData.type){case"posX":k.set(1,0,0),W.setFromEuler(new en(0,Math.PI*.5,0));break;case"posY":k.set(0,1,0),W.setFromEuler(new en(-Math.PI*.5,0,0));break;case"posZ":k.set(0,0,1),W.setFromEuler(new en);break;case"negX":k.set(-1,0,0),W.setFromEuler(new en(0,-Math.PI*.5,0));break;case"negY":k.set(0,-1,0),W.setFromEuler(new en(Math.PI*.5,0,0));break;case"negZ":k.set(0,0,-1),W.setFromEuler(new en(0,Math.PI,0));break;default:console.error("ViewHelper: Invalid axis.")}V=t.position.distanceTo(et),k.multiplyScalar(V).add(et),c.position.copy(et),c.lookAt(t.position),w.copy(c.quaternion),c.lookAt(k),L.copy(c.quaternion)}function O(Y){return new Sr({color:Y,toneMapped:!1})}function K(Y,et=null){const j=document.createElement("canvas");j.width=64,j.height=64;const nt=j.getContext("2d");nt.beginPath(),nt.arc(32,32,16,0,2*Math.PI),nt.closePath(),nt.fillStyle=Y.getStyle(),nt.fill(),et!==null&&(nt.font="24px Arial",nt.textAlign="center",nt.fillStyle="#000000",nt.fillText(et,32,41));const H=new us(j);return new Rc({map:H,toneMapped:!1})}}}class A_ extends ae{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new mt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Pi=new X,Bl=new ne,kl=new ne,Hl=new X,Gl=new X;class C_{constructor(t={}){const e=this;let n,r,s,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:r}},this.render=function(p,_){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Bl.copy(_.matrixWorldInverse),kl.multiplyMatrices(_.projectionMatrix,Bl),c(p,p,_),m(p)},this.setSize=function(p,_){n=p,r=_,s=n/2,o=r/2,l.style.width=p+"px",l.style.height=_+"px"};function c(p,_,g){if(p.isCSS2DObject){Pi.setFromMatrixPosition(p.matrixWorld),Pi.applyMatrix4(kl);const f=p.visible===!0&&Pi.z>=-1&&Pi.z<=1&&p.layers.test(g.layers)===!0;if(p.element.style.display=f===!0?"":"none",f===!0){p.onBeforeRender(e,_,g);const S=p.element;S.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(Pi.x*s+s)+"px,"+(-Pi.y*o+o)+"px)",S.parentNode!==l&&l.appendChild(S),p.onAfterRender(e,_,g)}const h={distanceToCameraSquared:u(g,p)};a.objects.set(p,h)}for(let f=0,h=p.children.length;f<h;f++)c(p.children[f],_,g)}function u(p,_){return Hl.setFromMatrixPosition(p.matrixWorld),Gl.setFromMatrixPosition(_.matrixWorld),Hl.distanceToSquared(Gl)}function d(p){const _=[];return p.traverse(function(g){g.isCSS2DObject&&_.push(g)}),_}function m(p){const _=d(p).sort(function(f,h){if(f.renderOrder!==h.renderOrder)return h.renderOrder-f.renderOrder;const S=a.objects.get(f).distanceToCameraSquared,y=a.objects.get(h).distanceToCameraSquared;return S-y}),g=_.length;for(let f=0,h=_.length;f<h;f++)_[f].element.style.zIndex=g-f}}}const ir=1024,R_=200,Vl=4096;function Hc(i,t,e={}){if(i<=0||t<=0)return{width:ir,height:ir};const n=Math.max(ir,Math.min(e.maxSize??Vl,e.maxSize??Vl)),r=Math.max(50,e.ppi??R_),s=Math.min(2,Math.sqrt(Math.max(1,e.count??1))),o=Math.max(ir,Math.round(i*r*s)),a=Math.max(ir,Math.round(t*r*s)),l=i/t;if(l>=1){let d=Math.min(n,o),m=Math.max(1,Math.round(d/l));return m>n&&(m=n,d=Math.max(1,Math.round(m*l))),{width:d,height:m}}let c=Math.min(n,a),u=Math.max(1,Math.round(c*l));return u>n&&(u=n,c=Math.max(1,Math.round(u/l))),{width:u,height:c}}function P_(i,t,e,n){const{width:r,height:s}=Hc(i,t,n),o=document.createElement("canvas");o.width=r,o.height=s;const a=o.getContext("2d");a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",a.fillStyle="#ffffff",a.fillRect(0,0,r,s),Array.isArray(e)&&(a.fillStyle="#000000",e.forEach(c=>{const u=r/2+c.x/i*r,d=s/2-c.y/t*s,m=c.r/i*r,p=c.r/t*s;a.beginPath(),a.ellipse(u,d,m,p,0,0,Math.PI*2),a.fill()}));const l=new us(o);return l.colorSpace=ue,l.wrapS=Pe,l.wrapT=Pe,l.needsUpdate=!0,l}function L_(i,t,e,n){const{width:r,height:s}=Hc(t,e,{maxSize:n==null?void 0:n.maxSize,ppi:n==null?void 0:n.ppi,count:(n==null?void 0:n.count)??(i==null?void 0:i.length)??1}),o=document.createElement("canvas");o.width=r,o.height=s;const a=o.getContext("2d");if(a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",a.fillStyle="#ffffff",a.fillRect(0,0,r,s),!Array.isArray(i)||i.length===0){const d=new us(o);return d.colorSpace=ue,d}const l=(n==null?void 0:n.layout)??"horizontal";D_(i,l,r,s,t,e).forEach(d=>{const{entry:m,x:p,y:_,width:g,height:f}=d;if(!(m!=null&&m.image))return;const h=Math.max(1,g),S=Math.max(1,f),y=m.image.width,E=m.image.height,A=Number(m.rotation||0)%360,P=A%180!==0,T=P?E:y,k=P?y:E,W=Math.min(h/T,S/k),w=y*W,L=E*W,C=p+g/2,V=_+f/2;a.save(),a.translate(C,V),a.rotate(A*Math.PI/180),a.drawImage(m.image,-w/2,-L/2,w,L),a.restore()});const u=new us(o);return u.colorSpace=ue,u.wrapS=Pe,u.wrapT=Pe,u.needsUpdate=!0,u}function D_(i,t,e,n,r,s){return t==="vertical"?U_(i,e,n,r,s):t==="grid"?N_(i,e,n,r,s):I_(i,e,n,r,s)}function Ga(i,t,e,n,r){const s=i.margin??{left:0,right:0,top:0,bottom:0},o=t>0?Math.max(0,s.left)/t*n:0,a=t>0?Math.max(0,s.right)/t*n:0,l=e>0?Math.max(0,s.top)/e*r:0,c=e>0?Math.max(0,s.bottom)/e*r:0;return{leftPx:o,rightPx:a,topPx:l,bottomPx:c}}function Gc(i){if(!(i!=null&&i.image))return 1;const e=Number(i.rotation||0)%360%180!==0,n=e?i.image.height:i.image.width,r=e?i.image.width:i.image.height;return!n||!r?1:n/r}function I_(i,t,e,n,r){const s=i.length;if(s===0)return[];const o=i.map(g=>Ga(g,n,r,t,e)),a=o.reduce((g,f)=>g+f.leftPx+f.rightPx,0),l=Math.max(1,Math.min(...o.map(g=>e-g.topPx-g.bottomPx))),c=i.map(g=>Gc(g)),u=c.reduce((g,f)=>g+f,0),d=Math.max(1,t-a),m=Math.min(l,d/Math.max(.001,u));let p=0;const _=[];for(let g=0;g<s;g+=1){const f=o[g],h=Math.max(1,c[g]*m),S=Math.max(1,e-f.topPx-f.bottomPx),y=f.topPx+(S-m)/2,E=p+f.leftPx;_.push({entry:i[g],x:E,y,width:h,height:m}),p+=f.leftPx+h+f.rightPx}return _}function U_(i,t,e,n,r){const s=i.length;if(s===0)return[];const o=i.map(g=>Ga(g,n,r,t,e)),a=o.reduce((g,f)=>g+f.topPx+f.bottomPx,0),l=Math.max(1,Math.min(...o.map(g=>t-g.leftPx-g.rightPx))),c=i.map(g=>Gc(g)),u=c.reduce((g,f)=>g+(f>0?1/f:0),0),d=Math.max(1,e-a),m=Math.min(l,d/Math.max(.001,u));let p=0;const _=[];for(let g=0;g<s;g+=1){const f=o[g],h=Math.max(1,m/Math.max(.001,c[g])),S=Math.max(1,t-f.leftPx-f.rightPx),y=f.leftPx+(S-m)/2,E=p+f.topPx;_.push({entry:i[g],x:y,y:E,width:m,height:h}),p+=f.topPx+h+f.bottomPx}return _}function N_(i,t,e,n,r){const s=[],l=t/2,c=e/2;for(let u=0;u<i.length;u+=1){const d=Math.floor(u/2),m=u%2,p=i[u],_=Ga(p,n,r,t,e),g=Math.max(1,l-_.leftPx-_.rightPx),f=Math.max(1,c-_.topPx-_.bottomPx),h=m*l+_.leftPx,S=d*c+_.topPx;s.push({entry:p,x:h,y:S,width:g,height:f})}return s}class O_{parse(t,e={}){e=Object.assign({binary:!1},e);const n=e.binary,r=[];let s=0;t.traverse(function(h){if(h.isMesh){const S=h.geometry,y=S.index,E=S.getAttribute("position");s+=y!==null?y.count/3:E.count/3,r.push({object3d:h,geometry:S})}});let o,a=80;if(n===!0){const h=s*2+s*3*4*4+80+4,S=new ArrayBuffer(h);o=new DataView(S),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const l=new X,c=new X,u=new X,d=new X,m=new X,p=new X;for(let h=0,S=r.length;h<S;h++){const y=r[h].object3d,E=r[h].geometry,A=E.index,P=E.getAttribute("position");if(A!==null)for(let T=0;T<A.count;T+=3){const k=A.getX(T+0),W=A.getX(T+1),w=A.getX(T+2);_(k,W,w,P,y)}else for(let T=0;T<P.count;T+=3){const k=T+0,W=T+1,w=T+2;_(k,W,w,P,y)}}return n===!1&&(o+=`endsolid exported
`),o;function _(h,S,y,E,A){l.fromBufferAttribute(E,h),c.fromBufferAttribute(E,S),u.fromBufferAttribute(E,y),A.isSkinnedMesh===!0&&(A.applyBoneTransform(h,l),A.applyBoneTransform(S,c),A.applyBoneTransform(y,u)),l.applyMatrix4(A.matrixWorld),c.applyMatrix4(A.matrixWorld),u.applyMatrix4(A.matrixWorld),g(l,c,u),f(l),f(c),f(u),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function g(h,S,y){d.subVectors(y,S),m.subVectors(h,S),d.cross(m).normalize(),p.copy(d).normalize(),n===!0?(o.setFloat32(a,p.x,!0),a+=4,o.setFloat32(a,p.y,!0),a+=4,o.setFloat32(a,p.z,!0),a+=4):(o+="	facet normal "+p.x+" "+p.y+" "+p.z+`
`,o+=`		outer loop
`)}function f(h){n===!0?(o.setFloat32(a,h.x,!0),a+=4,o.setFloat32(a,h.y,!0),a+=4,o.setFloat32(a,h.z,!0),a+=4):o+="			vertex "+h.x+" "+h.y+" "+h.z+`
`}}}var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function F_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function ts(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Vc={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function o(c,u){if(!r[c]){if(!n[c]){var d=typeof ts=="function"&&ts;if(!u&&d)return d(c,!0);if(a)return a(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var p=r[c]={exports:{}};n[c][0].call(p.exports,function(_){var g=n[c][1][_];return o(g||_)},p,p.exports,e,n,r,s)}return r[c].exports}for(var a=typeof ts=="function"&&ts,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,n,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,u,d,m,p,_,g,f=[],h=0,S=l.length,y=S,E=s.getTypeOf(l)!=="string";h<l.length;)y=S-h,d=E?(c=l[h++],u=h<S?l[h++]:0,h<S?l[h++]:0):(c=l.charCodeAt(h++),u=h<S?l.charCodeAt(h++):0,h<S?l.charCodeAt(h++):0),m=c>>2,p=(3&c)<<4|u>>4,_=1<y?(15&u)<<2|d>>6:64,g=2<y?63&d:64,f.push(a.charAt(m)+a.charAt(p)+a.charAt(_)+a.charAt(g));return f.join("")},r.decode=function(l){var c,u,d,m,p,_,g=0,f=0,h="data:";if(l.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var S,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&y--,l.charAt(l.length-2)===a.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=o.uint8array?new Uint8Array(0|y):new Array(0|y);g<l.length;)c=a.indexOf(l.charAt(g++))<<2|(m=a.indexOf(l.charAt(g++)))>>4,u=(15&m)<<4|(p=a.indexOf(l.charAt(g++)))>>2,d=(3&p)<<6|(_=a.indexOf(l.charAt(g++))),S[f++]=c,p!==64&&(S[f++]=u),_!==64&&(S[f++]=d);return S}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(u,d,m,p,_){this.compressedSize=u,this.uncompressedSize=d,this.crc32=m,this.compression=p,this.compressedContent=_}c.prototype={getContentWorker:function(){var u=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return u.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,d,m){return u.pipe(new a).pipe(new l("uncompressedSize")).pipe(d.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),o=function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var u=0;u<8;u++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l}();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(c,u,d,m){var p=o,_=m+d;c^=-1;for(var g=m;g<_;g++)c=c>>>8^p[255&(c^u[g])];return-1^c}(0|l,a,a.length,0):function(c,u,d,m){var p=o,_=m+d;c^=-1;for(var g=m;g<_;g++)c=c>>>8^p[255&(c^u.charCodeAt(g))];return-1^c}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function u(d,m){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=m,this.meta={}}r.magic="\b\0",a.inherits(u,l),u.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,d.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(m){d.push({data:m,meta:d.meta})}},r.compressWorker=function(d){return new u("Deflate",d)},r.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(p,_){var g,f="";for(g=0;g<_;g++)f+=String.fromCharCode(255&p),p>>>=8;return f}function o(p,_,g,f,h,S){var y,E,A=p.file,P=p.compression,T=S!==c.utf8encode,k=a.transformTo("string",S(A.name)),W=a.transformTo("string",c.utf8encode(A.name)),w=A.comment,L=a.transformTo("string",S(w)),C=a.transformTo("string",c.utf8encode(w)),V=W.length!==A.name.length,v=C.length!==w.length,O="",K="",Y="",et=A.dir,j=A.date,nt={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(nt.crc32=p.crc32,nt.compressedSize=p.compressedSize,nt.uncompressedSize=p.uncompressedSize);var H=0;_&&(H|=8),T||!V&&!v||(H|=2048);var q=0,ht=0;et&&(q|=16),h==="UNIX"?(ht=798,q|=function(Q,yt){var Et=Q;return Q||(Et=yt?16893:33204),(65535&Et)<<16}(A.unixPermissions,et)):(ht=20,q|=function(Q){return 63&(Q||0)}(A.dosPermissions)),y=j.getUTCHours(),y<<=6,y|=j.getUTCMinutes(),y<<=5,y|=j.getUTCSeconds()/2,E=j.getUTCFullYear()-1980,E<<=4,E|=j.getUTCMonth()+1,E<<=5,E|=j.getUTCDate(),V&&(K=s(1,1)+s(u(k),4)+W,O+="up"+s(K.length,2)+K),v&&(Y=s(1,1)+s(u(L),4)+C,O+="uc"+s(Y.length,2)+Y);var J="";return J+=`
\0`,J+=s(H,2),J+=P.magic,J+=s(y,2),J+=s(E,2),J+=s(nt.crc32,4),J+=s(nt.compressedSize,4),J+=s(nt.uncompressedSize,4),J+=s(k.length,2),J+=s(O.length,2),{fileRecord:d.LOCAL_FILE_HEADER+J+k+O,dirRecord:d.CENTRAL_FILE_HEADER+s(ht,2)+J+s(L.length,2)+"\0\0\0\0"+s(q,4)+s(f,4)+k+O+L}}var a=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),u=e("../crc32"),d=e("../signature");function m(p,_,g,f){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=f,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,l),m.prototype.push=function(p){var _=p.meta.percent||0,g=this.entriesCount,f=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-f-1))/g:100}}))},m.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var _=this.streamFiles&&!p.file.dir;if(_){var g=o(p,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(p){this.accumulate=!1;var _=this.streamFiles&&!p.file.dir,g=o(p,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:function(f){return d.DATA_DESCRIPTOR+s(f.crc32,4)+s(f.compressedSize,4)+s(f.uncompressedSize,4)}(p),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var p=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-p,f=function(h,S,y,E,A){var P=a.transformTo("string",A(E));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(S,4)+s(y,4)+s(P.length,2)+P}(this.dirRecords.length,g,p,this.zipComment,this.encodeFileName);this.push({data:f,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(p){this._sources.push(p);var _=this;return p.on("data",function(g){_.processChunk(g)}),p.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),p.on("error",function(g){_.error(g)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(p){var _=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var g=0;g<_.length;g++)try{_[g].error(p)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,_=0;_<p.length;_++)p[_].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,c){var u=new o(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{a.forEach(function(m,p){d++;var _=function(S,y){var E=S||y,A=s[E];if(!A)throw new Error(E+" is not a valid compression method !");return A}(p.options.compression,l.compression),g=p.options.compressionOptions||l.compressionOptions||{},f=p.dir,h=p.date;p._compressWorker(_,g).withStreamInfo("file",{name:m,dir:f,date:h,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(u)}),u.entriesCount=d}catch(m){u.error(m)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),u=e("./nodejsUtils");function d(m){return new o.Promise(function(p,_){var g=m.decompressed.getContentWorker().pipe(new c);g.on("error",function(f){_(f)}).on("end",function(){g.streamInfo.crc32!==m.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}n.exports=function(m,p){var _=this;return p=s.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),u.isNode&&u.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,p.optimizedBinaryString,p.base64).then(function(g){var f=new l(p);return f.load(g),f}).then(function(g){var f=[o.Promise.resolve(g)],h=g.files;if(p.checkCRC32)for(var S=0;S<h.length;S++)f.push(d(h[S]));return o.Promise.all(f)}).then(function(g){for(var f=g.shift(),h=f.files,S=0;S<h.length;S++){var y=h[S],E=y.fileNameStr,A=s.resolve(y.fileNameStr);_.file(A,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:p.createFolders}),y.dir||(_.file(A).unsafeOriginalName=E)}return f.zipComment.length&&(_.comment=f.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function o(a,l,c){s.call(this,l),this._helper=a;var u=this;a.on("data",function(d,m){u.push(d)||u._helper.pause(),c&&c(m)}).on("error",function(d){u.emit("error",d)}).on("end",function(){u.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(A,P,T){var k,W=a.getTypeOf(P),w=a.extend(T||{},u);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(A=h(A)),w.createFolders&&(k=f(A))&&S.call(this,k,!0);var L=W==="string"&&w.binary===!1&&w.base64===!1;T&&T.binary!==void 0||(w.binary=!L),(P instanceof d&&P.uncompressedSize===0||w.dir||!P||P.length===0)&&(w.base64=!1,w.binary=!0,P="",w.compression="STORE",W="string");var C=null;C=P instanceof d||P instanceof l?P:_.isNode&&_.isStream(P)?new g(A,P):a.prepareContent(A,P,w.binary,w.optimizedBinaryString,w.base64);var V=new m(A,C,w);this.files[A]=V}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),u=e("./defaults"),d=e("./compressedObject"),m=e("./zipObject"),p=e("./generate"),_=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),f=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var P=A.lastIndexOf("/");return 0<P?A.substring(0,P):""},h=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},S=function(A,P){return P=P!==void 0?P:u.createFolders,A=h(A),this.files[A]||s.call(this,A,null,{dir:!0,createFolders:P}),this.files[A]};function y(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var P,T,k;for(P in this.files)k=this.files[P],(T=P.slice(this.root.length,P.length))&&P.slice(0,this.root.length)===this.root&&A(T,k)},filter:function(A){var P=[];return this.forEach(function(T,k){A(T,k)&&P.push(k)}),P},file:function(A,P,T){if(arguments.length!==1)return A=this.root+A,s.call(this,A,P,T),this;if(y(A)){var k=A;return this.filter(function(w,L){return!L.dir&&k.test(w)})}var W=this.files[this.root+A];return W&&!W.dir?W:null},folder:function(A){if(!A)return this;if(y(A))return this.filter(function(W,w){return w.dir&&A.test(W)});var P=this.root+A,T=S.call(this,P),k=this.clone();return k.root=T.name,k},remove:function(A){A=this.root+A;var P=this.files[A];if(P||(A.slice(-1)!=="/"&&(A+="/"),P=this.files[A]),P&&!P.dir)delete this.files[A];else for(var T=this.filter(function(W,w){return w.name.slice(0,A.length)===A}),k=0;k<T.length;k++)delete this.files[T[k].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var P,T={};try{if((T=a.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=T.type.toLowerCase(),T.compression=T.compression.toUpperCase(),T.type==="binarystring"&&(T.type="string"),!T.type)throw new Error("No output type specified.");a.checkSupport(T.type),T.platform!=="darwin"&&T.platform!=="freebsd"&&T.platform!=="linux"&&T.platform!=="sunos"||(T.platform="UNIX"),T.platform==="win32"&&(T.platform="DOS");var k=T.comment||this.comment||"";P=p.generateWorker(this,T,k)}catch(W){(P=new l("error")).error(W)}return new c(P,T.type||"string",T.mimeType)},generateAsync:function(A,P){return this.generateInternalStream(A).accumulate(P)},generateNodeStream:function(A,P){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(P)}};n.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),u=a.charCodeAt(2),d=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===u&&this.data[m+3]===d)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),u=a.charCodeAt(2),d=a.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&u===m[2]&&d===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),u=e("./Uint8ArrayReader");n.exports=function(d){var m=s.getTypeOf(d);return s.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new c(d):o.uint8array?new u(s.transformTo("uint8array",d)):new a(s.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=s.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),c=e("../support"),u=e("../external"),d=null;if(c.nodestream)try{d=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(_,g){return new u.Promise(function(f,h){var S=[],y=_._internalType,E=_._outputType,A=_._mimeType;_.on("data",function(P,T){S.push(P),g&&g(T)}).on("error",function(P){S=[],h(P)}).on("end",function(){try{var P=function(T,k,W){switch(T){case"blob":return s.newBlob(s.transformTo("arraybuffer",k),W);case"base64":return l.encode(k);default:return s.transformTo(T,k)}}(E,function(T,k){var W,w=0,L=null,C=0;for(W=0;W<k.length;W++)C+=k[W].length;switch(T){case"string":return k.join("");case"array":return Array.prototype.concat.apply([],k);case"uint8array":for(L=new Uint8Array(C),W=0;W<k.length;W++)L.set(k[W],w),w+=k[W].length;return L;case"nodebuffer":return Buffer.concat(k);default:throw new Error("concat : unsupported type '"+T+"'")}}(y,S),A);f(P)}catch(T){h(T)}S=[]}).resume()})}function p(_,g,f){var h=g;switch(g){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=g,this._mimeType=f,s.checkSupport(h),this._worker=_.pipe(new o(h)),_.lock()}catch(S){this._worker=new a("error"),this._worker.error(S)}}p.prototype={accumulate:function(_){return m(this,_)},on:function(_,g){var f=this;return _==="data"?this._worker.on(_,function(h){g.call(f,h.data,h.meta)}):this._worker.on(_,function(){s.delay(g,arguments,f)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}r.utf8encode=function(p){return o.nodebuffer?a.newBufferFrom(p,"utf-8"):function(_){var g,f,h,S,y,E=_.length,A=0;for(S=0;S<E;S++)(64512&(f=_.charCodeAt(S)))==55296&&S+1<E&&(64512&(h=_.charCodeAt(S+1)))==56320&&(f=65536+(f-55296<<10)+(h-56320),S++),A+=f<128?1:f<2048?2:f<65536?3:4;for(g=o.uint8array?new Uint8Array(A):new Array(A),S=y=0;y<A;S++)(64512&(f=_.charCodeAt(S)))==55296&&S+1<E&&(64512&(h=_.charCodeAt(S+1)))==56320&&(f=65536+(f-55296<<10)+(h-56320),S++),f<128?g[y++]=f:(f<2048?g[y++]=192|f>>>6:(f<65536?g[y++]=224|f>>>12:(g[y++]=240|f>>>18,g[y++]=128|f>>>12&63),g[y++]=128|f>>>6&63),g[y++]=128|63&f);return g}(p)},r.utf8decode=function(p){return o.nodebuffer?s.transformTo("nodebuffer",p).toString("utf-8"):function(_){var g,f,h,S,y=_.length,E=new Array(2*y);for(g=f=0;g<y;)if((h=_[g++])<128)E[f++]=h;else if(4<(S=c[h]))E[f++]=65533,g+=S-1;else{for(h&=S===2?31:S===3?15:7;1<S&&g<y;)h=h<<6|63&_[g++],S--;1<S?E[f++]=65533:h<65536?E[f++]=h:(h-=65536,E[f++]=55296|h>>10&1023,E[f++]=56320|1023&h)}return E.length!==f&&(E.subarray?E=E.subarray(0,f):E.length=f),s.applyFromCharCode(E)}(p=s.transformTo(o.uint8array?"uint8array":"array",p))},s.inherits(d,l),d.prototype.processChunk=function(p){var _=s.transformTo(o.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var f=function(S,y){var E;for((y=y||S.length)>S.length&&(y=S.length),E=y-1;0<=E&&(192&S[E])==128;)E--;return E<0||E===0?y:E+c[S[E]]>y?E:y}(_),h=_;f!==_.length&&(o.uint8array?(h=_.subarray(0,f),this.leftOver=_.subarray(f,_.length)):(h=_.slice(0,f),this.leftOver=_.slice(f,_.length))),this.push({data:r.utf8decode(h),meta:p.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=d,s.inherits(m,l),m.prototype.processChunk=function(p){this.push({data:r.utf8encode(p.data),meta:p.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function c(g){return g}function u(g,f){for(var h=0;h<g.length;++h)f[h]=255&g.charCodeAt(h);return f}e("setimmediate"),r.newBlob=function(g,f){r.checkSupport("blob");try{return new Blob([g],{type:f})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(g),h.getBlob(f)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(g,f,h){var S=[],y=0,E=g.length;if(E<=h)return String.fromCharCode.apply(null,g);for(;y<E;)f==="array"||f==="nodebuffer"?S.push(String.fromCharCode.apply(null,g.slice(y,Math.min(y+h,E)))):S.push(String.fromCharCode.apply(null,g.subarray(y,Math.min(y+h,E)))),y+=h;return S.join("")},stringifyByChar:function(g){for(var f="",h=0;h<g.length;h++)f+=String.fromCharCode(g[h]);return f},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function m(g){var f=65536,h=r.getTypeOf(g),S=!0;if(h==="uint8array"?S=d.applyCanBeUsed.uint8array:h==="nodebuffer"&&(S=d.applyCanBeUsed.nodebuffer),S)for(;1<f;)try{return d.stringifyByChunk(g,h,f)}catch{f=Math.floor(f/2)}return d.stringifyByChar(g)}function p(g,f){for(var h=0;h<g.length;h++)f[h]=g[h];return f}r.applyFromCharCode=m;var _={};_.string={string:c,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return u(g,new Uint8Array(g.length))},nodebuffer:function(g){return u(g,a.allocBuffer(g.length))}},_.array={string:m,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},_.arraybuffer={string:function(g){return m(new Uint8Array(g))},array:function(g){return p(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:m,array:function(g){return p(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return a.newBufferFrom(g)}},_.nodebuffer={string:m,array:function(g){return p(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return p(g,new Uint8Array(g.length))},nodebuffer:c},r.transformTo=function(g,f){if(f=f||"",!g)return f;r.checkSupport(g);var h=r.getTypeOf(f);return _[h][g](f)},r.resolve=function(g){for(var f=g.split("/"),h=[],S=0;S<f.length;S++){var y=f[S];y==="."||y===""&&S!==0&&S!==f.length-1||(y===".."?h.pop():h.push(y))}return h.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var f,h,S="";for(h=0;h<(g||"").length;h++)S+="\\x"+((f=g.charCodeAt(h))<16?"0":"")+f.toString(16).toUpperCase();return S},r.delay=function(g,f,h){setImmediate(function(){g.apply(h||null,f||[])})},r.inherits=function(g,f){function h(){}h.prototype=f.prototype,g.prototype=new h},r.extend=function(){var g,f,h={};for(g=0;g<arguments.length;g++)for(f in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],f)&&h[f]===void 0&&(h[f]=arguments[g][f]);return h},r.prepareContent=function(g,f,h,S,y){return l.Promise.resolve(f).then(function(E){return s.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new l.Promise(function(A,P){var T=new FileReader;T.onload=function(k){A(k.target.result)},T.onerror=function(k){P(k.target.error)},T.readAsArrayBuffer(E)}):E}).then(function(E){var A=r.getTypeOf(E);return A?(A==="arraybuffer"?E=r.transformTo("uint8array",E):A==="string"&&(y?E=o.decode(E):h&&S!==!0&&(E=function(P){return u(P,s.uint8array?new Uint8Array(P.length):new Array(P.length))}(E))),E):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),c=e("./support");function u(d){this.files=[],this.loadOptions=d}u.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(d)+")")}},isSignature:function(d,m){var p=this.reader.index;this.reader.setIndex(d);var _=this.reader.readString(4)===m;return this.reader.setIndex(p),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",p=o.transformTo(m,d);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,m,p,_=this.zip64EndOfCentralSize-44;0<_;)d=this.reader.readInt(2),m=this.reader.readInt(4),p=this.reader.readData(m),this.zip64ExtensibleData[d]={id:d,length:m,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,m;for(d=0;d<this.files.length;d++)m=this.files[d],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var m=d;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var _=m-p;if(0<_)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(d){this.reader=s(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),u=e("./compressions"),d=e("./support");function m(p,_){this.options=p,this.loadOptions=_}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var _,g;if(p.skip(22),this.fileNameLength=p.readInt(2),g=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(f){for(var h in u)if(Object.prototype.hasOwnProperty.call(u,h)&&u[h].magic===f)return u[h];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var _=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(_),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var _,g,f,h=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<h;)_=p.readInt(2),g=p.readInt(2),f=p.readData(g),this.extraFields[_]={id:_,length:g,value:f};p.setIndex(h)},handleUTF8:function(){var p=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=o.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var f=this.findExtraFieldUnicodeComment();if(f!==null)this.fileCommentStr=f;else{var h=o.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var _=s(p.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var _=s(p.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(p.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(_,g,f){this.name=_,this.dir=f.dir,this.date=f.date,this.comment=f.comment,this.unixPermissions=f.unixPermissions,this.dosPermissions=f.dosPermissions,this._data=g,this._dataBinary=f.binary,this.options={compression:f.compression,compressionOptions:f.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),u=e("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,f="string";try{if(!_)throw new Error("No output type specified.");var h=(f=_.toLowerCase())==="string"||f==="text";f!=="binarystring"&&f!=="text"||(f="string"),g=this._decompressWorker();var S=!this._dataBinary;S&&!h&&(g=g.pipe(new l.Utf8EncodeWorker)),!S&&h&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(y){(g=new u("error")).error(y)}return new o(g,f,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var f=this._decompressWorker();return this._dataBinary||(f=f.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(f,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new a(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<d.length;p++)s.prototype[d[p]]=m;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,u=new l(_),d=s.document.createTextNode("");u.observe(d,{characterData:!0}),o=function(){d.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var m=new s.MessageChannel;m.port1.onmessage=_,o=function(){m.port2.postMessage(0)}}var p=[];function _(){var g,f;a=!0;for(var h=p.length;h;){for(f=p,p=[],g=-1;++g<h;)f[g]();h=p.length}a=!1}n.exports=function(g){p.push(g)!==1||a||o()}}).call(this,typeof Qr<"u"?Qr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function d(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,h!==o&&g(this,h)}function m(h,S,y){this.promise=h,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function p(h,S,y){s(function(){var E;try{E=S(y)}catch(A){return a.reject(h,A)}E===h?a.reject(h,new TypeError("Cannot resolve promise with itself")):a.resolve(h,E)})}function _(h){var S=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof S=="function")return function(){S.apply(h,arguments)}}function g(h,S){var y=!1;function E(T){y||(y=!0,a.reject(h,T))}function A(T){y||(y=!0,a.resolve(h,T))}var P=f(function(){S(A,E)});P.status==="error"&&E(P.value)}function f(h,S){var y={};try{y.value=h(S),y.status="success"}catch(E){y.status="error",y.value=E}return y}(n.exports=d).prototype.finally=function(h){if(typeof h!="function")return this;var S=this.constructor;return this.then(function(y){return S.resolve(h()).then(function(){return y})},function(y){return S.resolve(h()).then(function(){throw y})})},d.prototype.catch=function(h){return this.then(null,h)},d.prototype.then=function(h,S){if(typeof h!="function"&&this.state===c||typeof S!="function"&&this.state===l)return this;var y=new this.constructor(o);return this.state!==u?p(y,this.state===c?h:S,this.outcome):this.queue.push(new m(y,h,S)),y},m.prototype.callFulfilled=function(h){a.resolve(this.promise,h)},m.prototype.otherCallFulfilled=function(h){p(this.promise,this.onFulfilled,h)},m.prototype.callRejected=function(h){a.reject(this.promise,h)},m.prototype.otherCallRejected=function(h){p(this.promise,this.onRejected,h)},a.resolve=function(h,S){var y=f(_,S);if(y.status==="error")return a.reject(h,y.value);var E=y.value;if(E)g(h,E);else{h.state=c,h.outcome=S;for(var A=-1,P=h.queue.length;++A<P;)h.queue[A].callFulfilled(S)}return h},a.reject=function(h,S){h.state=l,h.outcome=S;for(var y=-1,E=h.queue.length;++y<E;)h.queue[y].callRejected(S);return h},d.resolve=function(h){return h instanceof this?h:a.resolve(new this(o),h)},d.reject=function(h){var S=new this(o);return a.reject(S,h)},d.all=function(h){var S=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=h.length,E=!1;if(!y)return this.resolve([]);for(var A=new Array(y),P=0,T=-1,k=new this(o);++T<y;)W(h[T],T);return k;function W(w,L){S.resolve(w).then(function(C){A[L]=C,++P!==y||E||(E=!0,a.resolve(k,A))},function(C){E||(E=!0,a.reject(k,C))})}},d.race=function(h){var S=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=h.length,E=!1;if(!y)return this.resolve([]);for(var A=-1,P=new this(o);++A<y;)T=h[A],S.resolve(T).then(function(k){E||(E=!0,a.resolve(P,k))},function(k){E||(E=!0,a.reject(P,k))});var T;return P}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),u=Object.prototype.toString,d=0,m=-1,p=0,_=8;function g(h){if(!(this instanceof g))return new g(h);this.options=o.assign({level:m,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},h||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var y=s.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(y!==d)throw new Error(l[y]);if(S.header&&s.deflateSetHeader(this.strm,S.header),S.dictionary){var E;if(E=typeof S.dictionary=="string"?a.string2buf(S.dictionary):u.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(y=s.deflateSetDictionary(this.strm,E))!==d)throw new Error(l[y]);this._dict_set=!0}}function f(h,S){var y=new g(S);if(y.push(h,!0),y.err)throw y.msg||l[y.err];return y.result}g.prototype.push=function(h,S){var y,E,A=this.strm,P=this.options.chunkSize;if(this.ended)return!1;E=S===~~S?S:S===!0?4:0,typeof h=="string"?A.input=a.string2buf(h):u.call(h)==="[object ArrayBuffer]"?A.input=new Uint8Array(h):A.input=h,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new o.Buf8(P),A.next_out=0,A.avail_out=P),(y=s.deflate(A,E))!==1&&y!==d)return this.onEnd(y),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(A.output,A.next_out))):this.onData(o.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&y!==1);return E===4?(y=s.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===d):E!==2||(this.onEnd(d),!(A.avail_out=0))},g.prototype.onData=function(h){this.chunks.push(h)},g.prototype.onEnd=function(h){h===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=g,r.deflate=f,r.deflateRaw=function(h,S){return(S=S||{}).raw=!0,f(h,S)},r.gzip=function(h,S){return(S=S||{}).gzip=!0,f(h,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),u=e("./zlib/zstream"),d=e("./zlib/gzheader"),m=Object.prototype.toString;function p(g){if(!(this instanceof p))return new p(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var f=this.options;f.raw&&0<=f.windowBits&&f.windowBits<16&&(f.windowBits=-f.windowBits,f.windowBits===0&&(f.windowBits=-15)),!(0<=f.windowBits&&f.windowBits<16)||g&&g.windowBits||(f.windowBits+=32),15<f.windowBits&&f.windowBits<48&&!(15&f.windowBits)&&(f.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,f.windowBits);if(h!==l.Z_OK)throw new Error(c[h]);this.header=new d,s.inflateGetHeader(this.strm,this.header)}function _(g,f){var h=new p(f);if(h.push(g,!0),h.err)throw h.msg||c[h.err];return h.result}p.prototype.push=function(g,f){var h,S,y,E,A,P,T=this.strm,k=this.options.chunkSize,W=this.options.dictionary,w=!1;if(this.ended)return!1;S=f===~~f?f:f===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?T.input=a.binstring2buf(g):m.call(g)==="[object ArrayBuffer]"?T.input=new Uint8Array(g):T.input=g,T.next_in=0,T.avail_in=T.input.length;do{if(T.avail_out===0&&(T.output=new o.Buf8(k),T.next_out=0,T.avail_out=k),(h=s.inflate(T,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&W&&(P=typeof W=="string"?a.string2buf(W):m.call(W)==="[object ArrayBuffer]"?new Uint8Array(W):W,h=s.inflateSetDictionary(this.strm,P)),h===l.Z_BUF_ERROR&&w===!0&&(h=l.Z_OK,w=!1),h!==l.Z_STREAM_END&&h!==l.Z_OK)return this.onEnd(h),!(this.ended=!0);T.next_out&&(T.avail_out!==0&&h!==l.Z_STREAM_END&&(T.avail_in!==0||S!==l.Z_FINISH&&S!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=a.utf8border(T.output,T.next_out),E=T.next_out-y,A=a.buf2string(T.output,y),T.next_out=E,T.avail_out=k-E,E&&o.arraySet(T.output,T.output,y,E,0),this.onData(A)):this.onData(o.shrinkBuf(T.output,T.next_out)))),T.avail_in===0&&T.avail_out===0&&(w=!0)}while((0<T.avail_in||T.avail_out===0)&&h!==l.Z_STREAM_END);return h===l.Z_STREAM_END&&(S=l.Z_FINISH),S===l.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===l.Z_OK):S!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(T.avail_out=0))},p.prototype.onData=function(g){this.chunks.push(g)},p.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=p,r.inflate=_,r.inflateRaw=function(g,f){return(f=f||{}).raw=!0,_(g,f)},r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var d in u)u.hasOwnProperty(d)&&(l[d]=u[d])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,u,d,m){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+d),m);else for(var p=0;p<d;p++)l[m+p]=c[u+p]},flattenChunks:function(l){var c,u,d,m,p,_;for(c=d=0,u=l.length;c<u;c++)d+=l[c].length;for(_=new Uint8Array(d),c=m=0,u=l.length;c<u;c++)p=l[c],_.set(p,m),m+=p.length;return _}},a={arraySet:function(l,c,u,d,m){for(var p=0;p<d;p++)l[m+p]=c[u+p]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(d,m){if(m<65537&&(d.subarray&&a||!d.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(d,m));for(var p="",_=0;_<m;_++)p+=String.fromCharCode(d[_]);return p}l[254]=l[254]=1,r.string2buf=function(d){var m,p,_,g,f,h=d.length,S=0;for(g=0;g<h;g++)(64512&(p=d.charCodeAt(g)))==55296&&g+1<h&&(64512&(_=d.charCodeAt(g+1)))==56320&&(p=65536+(p-55296<<10)+(_-56320),g++),S+=p<128?1:p<2048?2:p<65536?3:4;for(m=new s.Buf8(S),g=f=0;f<S;g++)(64512&(p=d.charCodeAt(g)))==55296&&g+1<h&&(64512&(_=d.charCodeAt(g+1)))==56320&&(p=65536+(p-55296<<10)+(_-56320),g++),p<128?m[f++]=p:(p<2048?m[f++]=192|p>>>6:(p<65536?m[f++]=224|p>>>12:(m[f++]=240|p>>>18,m[f++]=128|p>>>12&63),m[f++]=128|p>>>6&63),m[f++]=128|63&p);return m},r.buf2binstring=function(d){return u(d,d.length)},r.binstring2buf=function(d){for(var m=new s.Buf8(d.length),p=0,_=m.length;p<_;p++)m[p]=d.charCodeAt(p);return m},r.buf2string=function(d,m){var p,_,g,f,h=m||d.length,S=new Array(2*h);for(p=_=0;p<h;)if((g=d[p++])<128)S[_++]=g;else if(4<(f=l[g]))S[_++]=65533,p+=f-1;else{for(g&=f===2?31:f===3?15:7;1<f&&p<h;)g=g<<6|63&d[p++],f--;1<f?S[_++]=65533:g<65536?S[_++]=g:(g-=65536,S[_++]=55296|g>>10&1023,S[_++]=56320|1023&g)}return u(S,_)},r.utf8border=function(d,m){var p;for((m=m||d.length)>d.length&&(m=d.length),p=m-1;0<=p&&(192&d[p])==128;)p--;return p<0||p===0?m:p+l[d[p]]>m?p:m}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,o,a,l){for(var c=65535&s|0,u=s>>>16&65535|0,d=0;a!==0;){for(a-=d=2e3<a?2e3:a;u=u+(c=c+o[l++]|0)|0,--d;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();n.exports=function(o,a,l,c){var u=s,d=c+l;o^=-1;for(var m=c;m<d;m++)o=o>>>8^u[255&(o^a[m])];return-1^o}},{}],46:[function(e,n,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),c=e("./crc32"),u=e("./messages"),d=0,m=4,p=0,_=-2,g=-1,f=4,h=2,S=8,y=9,E=286,A=30,P=19,T=2*E+1,k=15,W=3,w=258,L=w+W+1,C=42,V=113,v=1,O=2,K=3,Y=4;function et(x,Z){return x.msg=u[Z],Z}function j(x){return(x<<1)-(4<x?9:0)}function nt(x){for(var Z=x.length;0<=--Z;)x[Z]=0}function H(x){var Z=x.state,z=Z.pending;z>x.avail_out&&(z=x.avail_out),z!==0&&(o.arraySet(x.output,Z.pending_buf,Z.pending_out,z,x.next_out),x.next_out+=z,Z.pending_out+=z,x.total_out+=z,x.avail_out-=z,Z.pending-=z,Z.pending===0&&(Z.pending_out=0))}function q(x,Z){a._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,Z),x.block_start=x.strstart,H(x.strm)}function ht(x,Z){x.pending_buf[x.pending++]=Z}function J(x,Z){x.pending_buf[x.pending++]=Z>>>8&255,x.pending_buf[x.pending++]=255&Z}function Q(x,Z){var z,D,R=x.max_chain_length,M=x.strstart,b=x.prev_length,U=x.nice_match,F=x.strstart>x.w_size-L?x.strstart-(x.w_size-L):0,$=x.window,tt=x.w_mask,rt=x.prev,ct=x.strstart+w,gt=$[M+b-1],St=$[M+b];x.prev_length>=x.good_match&&(R>>=2),U>x.lookahead&&(U=x.lookahead);do if($[(z=Z)+b]===St&&$[z+b-1]===gt&&$[z]===$[M]&&$[++z]===$[M+1]){M+=2,z++;do;while($[++M]===$[++z]&&$[++M]===$[++z]&&$[++M]===$[++z]&&$[++M]===$[++z]&&$[++M]===$[++z]&&$[++M]===$[++z]&&$[++M]===$[++z]&&$[++M]===$[++z]&&M<ct);if(D=w-(ct-M),M=ct-w,b<D){if(x.match_start=Z,U<=(b=D))break;gt=$[M+b-1],St=$[M+b]}}while((Z=rt[Z&tt])>F&&--R!=0);return b<=x.lookahead?b:x.lookahead}function yt(x){var Z,z,D,R,M,b,U,F,$,tt,rt=x.w_size;do{if(R=x.window_size-x.lookahead-x.strstart,x.strstart>=rt+(rt-L)){for(o.arraySet(x.window,x.window,rt,rt,0),x.match_start-=rt,x.strstart-=rt,x.block_start-=rt,Z=z=x.hash_size;D=x.head[--Z],x.head[Z]=rt<=D?D-rt:0,--z;);for(Z=z=rt;D=x.prev[--Z],x.prev[Z]=rt<=D?D-rt:0,--z;);R+=rt}if(x.strm.avail_in===0)break;if(b=x.strm,U=x.window,F=x.strstart+x.lookahead,$=R,tt=void 0,tt=b.avail_in,$<tt&&(tt=$),z=tt===0?0:(b.avail_in-=tt,o.arraySet(U,b.input,b.next_in,tt,F),b.state.wrap===1?b.adler=l(b.adler,U,tt,F):b.state.wrap===2&&(b.adler=c(b.adler,U,tt,F)),b.next_in+=tt,b.total_in+=tt,tt),x.lookahead+=z,x.lookahead+x.insert>=W)for(M=x.strstart-x.insert,x.ins_h=x.window[M],x.ins_h=(x.ins_h<<x.hash_shift^x.window[M+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[M+W-1])&x.hash_mask,x.prev[M&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=M,M++,x.insert--,!(x.lookahead+x.insert<W)););}while(x.lookahead<L&&x.strm.avail_in!==0)}function Et(x,Z){for(var z,D;;){if(x.lookahead<L){if(yt(x),x.lookahead<L&&Z===d)return v;if(x.lookahead===0)break}if(z=0,x.lookahead>=W&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+W-1])&x.hash_mask,z=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),z!==0&&x.strstart-z<=x.w_size-L&&(x.match_length=Q(x,z)),x.match_length>=W)if(D=a._tr_tally(x,x.strstart-x.match_start,x.match_length-W),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=W){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+W-1])&x.hash_mask,z=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else D=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(D&&(q(x,!1),x.strm.avail_out===0))return v}return x.insert=x.strstart<W-1?x.strstart:W-1,Z===m?(q(x,!0),x.strm.avail_out===0?K:Y):x.last_lit&&(q(x,!1),x.strm.avail_out===0)?v:O}function xt(x,Z){for(var z,D,R;;){if(x.lookahead<L){if(yt(x),x.lookahead<L&&Z===d)return v;if(x.lookahead===0)break}if(z=0,x.lookahead>=W&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+W-1])&x.hash_mask,z=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=W-1,z!==0&&x.prev_length<x.max_lazy_match&&x.strstart-z<=x.w_size-L&&(x.match_length=Q(x,z),x.match_length<=5&&(x.strategy===1||x.match_length===W&&4096<x.strstart-x.match_start)&&(x.match_length=W-1)),x.prev_length>=W&&x.match_length<=x.prev_length){for(R=x.strstart+x.lookahead-W,D=a._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-W),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=R&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+W-1])&x.hash_mask,z=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=W-1,x.strstart++,D&&(q(x,!1),x.strm.avail_out===0))return v}else if(x.match_available){if((D=a._tr_tally(x,0,x.window[x.strstart-1]))&&q(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return v}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(D=a._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<W-1?x.strstart:W-1,Z===m?(q(x,!0),x.strm.avail_out===0?K:Y):x.last_lit&&(q(x,!1),x.strm.avail_out===0)?v:O}function _t(x,Z,z,D,R){this.good_length=x,this.max_lazy=Z,this.nice_length=z,this.max_chain=D,this.func=R}function Rt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*T),this.dyn_dtree=new o.Buf16(2*(2*A+1)),this.bl_tree=new o.Buf16(2*(2*P+1)),nt(this.dyn_ltree),nt(this.dyn_dtree),nt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(k+1),this.heap=new o.Buf16(2*E+1),nt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*E+1),nt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function bt(x){var Z;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=h,(Z=x.state).pending=0,Z.pending_out=0,Z.wrap<0&&(Z.wrap=-Z.wrap),Z.status=Z.wrap?C:V,x.adler=Z.wrap===2?0:1,Z.last_flush=d,a._tr_init(Z),p):et(x,_)}function B(x){var Z=bt(x);return Z===p&&function(z){z.window_size=2*z.w_size,nt(z.head),z.max_lazy_match=s[z.level].max_lazy,z.good_match=s[z.level].good_length,z.nice_match=s[z.level].nice_length,z.max_chain_length=s[z.level].max_chain,z.strstart=0,z.block_start=0,z.lookahead=0,z.insert=0,z.match_length=z.prev_length=W-1,z.match_available=0,z.ins_h=0}(x.state),Z}function pt(x,Z,z,D,R,M){if(!x)return _;var b=1;if(Z===g&&(Z=6),D<0?(b=0,D=-D):15<D&&(b=2,D-=16),R<1||y<R||z!==S||D<8||15<D||Z<0||9<Z||M<0||f<M)return et(x,_);D===8&&(D=9);var U=new Rt;return(x.state=U).strm=x,U.wrap=b,U.gzhead=null,U.w_bits=D,U.w_size=1<<U.w_bits,U.w_mask=U.w_size-1,U.hash_bits=R+7,U.hash_size=1<<U.hash_bits,U.hash_mask=U.hash_size-1,U.hash_shift=~~((U.hash_bits+W-1)/W),U.window=new o.Buf8(2*U.w_size),U.head=new o.Buf16(U.hash_size),U.prev=new o.Buf16(U.w_size),U.lit_bufsize=1<<R+6,U.pending_buf_size=4*U.lit_bufsize,U.pending_buf=new o.Buf8(U.pending_buf_size),U.d_buf=1*U.lit_bufsize,U.l_buf=3*U.lit_bufsize,U.level=Z,U.strategy=M,U.method=z,B(x)}s=[new _t(0,0,0,0,function(x,Z){var z=65535;for(z>x.pending_buf_size-5&&(z=x.pending_buf_size-5);;){if(x.lookahead<=1){if(yt(x),x.lookahead===0&&Z===d)return v;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var D=x.block_start+z;if((x.strstart===0||x.strstart>=D)&&(x.lookahead=x.strstart-D,x.strstart=D,q(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-L&&(q(x,!1),x.strm.avail_out===0))return v}return x.insert=0,Z===m?(q(x,!0),x.strm.avail_out===0?K:Y):(x.strstart>x.block_start&&(q(x,!1),x.strm.avail_out),v)}),new _t(4,4,8,4,Et),new _t(4,5,16,8,Et),new _t(4,6,32,32,Et),new _t(4,4,16,16,xt),new _t(8,16,32,32,xt),new _t(8,16,128,128,xt),new _t(8,32,128,256,xt),new _t(32,128,258,1024,xt),new _t(32,258,258,4096,xt)],r.deflateInit=function(x,Z){return pt(x,Z,S,15,8,0)},r.deflateInit2=pt,r.deflateReset=B,r.deflateResetKeep=bt,r.deflateSetHeader=function(x,Z){return x&&x.state?x.state.wrap!==2?_:(x.state.gzhead=Z,p):_},r.deflate=function(x,Z){var z,D,R,M;if(!x||!x.state||5<Z||Z<0)return x?et(x,_):_;if(D=x.state,!x.output||!x.input&&x.avail_in!==0||D.status===666&&Z!==m)return et(x,x.avail_out===0?-5:_);if(D.strm=x,z=D.last_flush,D.last_flush=Z,D.status===C)if(D.wrap===2)x.adler=0,ht(D,31),ht(D,139),ht(D,8),D.gzhead?(ht(D,(D.gzhead.text?1:0)+(D.gzhead.hcrc?2:0)+(D.gzhead.extra?4:0)+(D.gzhead.name?8:0)+(D.gzhead.comment?16:0)),ht(D,255&D.gzhead.time),ht(D,D.gzhead.time>>8&255),ht(D,D.gzhead.time>>16&255),ht(D,D.gzhead.time>>24&255),ht(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),ht(D,255&D.gzhead.os),D.gzhead.extra&&D.gzhead.extra.length&&(ht(D,255&D.gzhead.extra.length),ht(D,D.gzhead.extra.length>>8&255)),D.gzhead.hcrc&&(x.adler=c(x.adler,D.pending_buf,D.pending,0)),D.gzindex=0,D.status=69):(ht(D,0),ht(D,0),ht(D,0),ht(D,0),ht(D,0),ht(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),ht(D,3),D.status=V);else{var b=S+(D.w_bits-8<<4)<<8;b|=(2<=D.strategy||D.level<2?0:D.level<6?1:D.level===6?2:3)<<6,D.strstart!==0&&(b|=32),b+=31-b%31,D.status=V,J(D,b),D.strstart!==0&&(J(D,x.adler>>>16),J(D,65535&x.adler)),x.adler=1}if(D.status===69)if(D.gzhead.extra){for(R=D.pending;D.gzindex<(65535&D.gzhead.extra.length)&&(D.pending!==D.pending_buf_size||(D.gzhead.hcrc&&D.pending>R&&(x.adler=c(x.adler,D.pending_buf,D.pending-R,R)),H(x),R=D.pending,D.pending!==D.pending_buf_size));)ht(D,255&D.gzhead.extra[D.gzindex]),D.gzindex++;D.gzhead.hcrc&&D.pending>R&&(x.adler=c(x.adler,D.pending_buf,D.pending-R,R)),D.gzindex===D.gzhead.extra.length&&(D.gzindex=0,D.status=73)}else D.status=73;if(D.status===73)if(D.gzhead.name){R=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>R&&(x.adler=c(x.adler,D.pending_buf,D.pending-R,R)),H(x),R=D.pending,D.pending===D.pending_buf_size)){M=1;break}M=D.gzindex<D.gzhead.name.length?255&D.gzhead.name.charCodeAt(D.gzindex++):0,ht(D,M)}while(M!==0);D.gzhead.hcrc&&D.pending>R&&(x.adler=c(x.adler,D.pending_buf,D.pending-R,R)),M===0&&(D.gzindex=0,D.status=91)}else D.status=91;if(D.status===91)if(D.gzhead.comment){R=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>R&&(x.adler=c(x.adler,D.pending_buf,D.pending-R,R)),H(x),R=D.pending,D.pending===D.pending_buf_size)){M=1;break}M=D.gzindex<D.gzhead.comment.length?255&D.gzhead.comment.charCodeAt(D.gzindex++):0,ht(D,M)}while(M!==0);D.gzhead.hcrc&&D.pending>R&&(x.adler=c(x.adler,D.pending_buf,D.pending-R,R)),M===0&&(D.status=103)}else D.status=103;if(D.status===103&&(D.gzhead.hcrc?(D.pending+2>D.pending_buf_size&&H(x),D.pending+2<=D.pending_buf_size&&(ht(D,255&x.adler),ht(D,x.adler>>8&255),x.adler=0,D.status=V)):D.status=V),D.pending!==0){if(H(x),x.avail_out===0)return D.last_flush=-1,p}else if(x.avail_in===0&&j(Z)<=j(z)&&Z!==m)return et(x,-5);if(D.status===666&&x.avail_in!==0)return et(x,-5);if(x.avail_in!==0||D.lookahead!==0||Z!==d&&D.status!==666){var U=D.strategy===2?function(F,$){for(var tt;;){if(F.lookahead===0&&(yt(F),F.lookahead===0)){if($===d)return v;break}if(F.match_length=0,tt=a._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,tt&&(q(F,!1),F.strm.avail_out===0))return v}return F.insert=0,$===m?(q(F,!0),F.strm.avail_out===0?K:Y):F.last_lit&&(q(F,!1),F.strm.avail_out===0)?v:O}(D,Z):D.strategy===3?function(F,$){for(var tt,rt,ct,gt,St=F.window;;){if(F.lookahead<=w){if(yt(F),F.lookahead<=w&&$===d)return v;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=W&&0<F.strstart&&(rt=St[ct=F.strstart-1])===St[++ct]&&rt===St[++ct]&&rt===St[++ct]){gt=F.strstart+w;do;while(rt===St[++ct]&&rt===St[++ct]&&rt===St[++ct]&&rt===St[++ct]&&rt===St[++ct]&&rt===St[++ct]&&rt===St[++ct]&&rt===St[++ct]&&ct<gt);F.match_length=w-(gt-ct),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=W?(tt=a._tr_tally(F,1,F.match_length-W),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(tt=a._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),tt&&(q(F,!1),F.strm.avail_out===0))return v}return F.insert=0,$===m?(q(F,!0),F.strm.avail_out===0?K:Y):F.last_lit&&(q(F,!1),F.strm.avail_out===0)?v:O}(D,Z):s[D.level].func(D,Z);if(U!==K&&U!==Y||(D.status=666),U===v||U===K)return x.avail_out===0&&(D.last_flush=-1),p;if(U===O&&(Z===1?a._tr_align(D):Z!==5&&(a._tr_stored_block(D,0,0,!1),Z===3&&(nt(D.head),D.lookahead===0&&(D.strstart=0,D.block_start=0,D.insert=0))),H(x),x.avail_out===0))return D.last_flush=-1,p}return Z!==m?p:D.wrap<=0?1:(D.wrap===2?(ht(D,255&x.adler),ht(D,x.adler>>8&255),ht(D,x.adler>>16&255),ht(D,x.adler>>24&255),ht(D,255&x.total_in),ht(D,x.total_in>>8&255),ht(D,x.total_in>>16&255),ht(D,x.total_in>>24&255)):(J(D,x.adler>>>16),J(D,65535&x.adler)),H(x),0<D.wrap&&(D.wrap=-D.wrap),D.pending!==0?p:1)},r.deflateEnd=function(x){var Z;return x&&x.state?(Z=x.state.status)!==C&&Z!==69&&Z!==73&&Z!==91&&Z!==103&&Z!==V&&Z!==666?et(x,_):(x.state=null,Z===V?et(x,-3):p):_},r.deflateSetDictionary=function(x,Z){var z,D,R,M,b,U,F,$,tt=Z.length;if(!x||!x.state||(M=(z=x.state).wrap)===2||M===1&&z.status!==C||z.lookahead)return _;for(M===1&&(x.adler=l(x.adler,Z,tt,0)),z.wrap=0,tt>=z.w_size&&(M===0&&(nt(z.head),z.strstart=0,z.block_start=0,z.insert=0),$=new o.Buf8(z.w_size),o.arraySet($,Z,tt-z.w_size,z.w_size,0),Z=$,tt=z.w_size),b=x.avail_in,U=x.next_in,F=x.input,x.avail_in=tt,x.next_in=0,x.input=Z,yt(z);z.lookahead>=W;){for(D=z.strstart,R=z.lookahead-(W-1);z.ins_h=(z.ins_h<<z.hash_shift^z.window[D+W-1])&z.hash_mask,z.prev[D&z.w_mask]=z.head[z.ins_h],z.head[z.ins_h]=D,D++,--R;);z.strstart=D,z.lookahead=W-1,yt(z)}return z.strstart+=z.lookahead,z.block_start=z.strstart,z.insert=z.lookahead,z.lookahead=0,z.match_length=z.prev_length=W-1,z.match_available=0,x.next_in=U,x.input=F,x.avail_in=b,z.wrap=M,p},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,o){var a,l,c,u,d,m,p,_,g,f,h,S,y,E,A,P,T,k,W,w,L,C,V,v,O;a=s.state,l=s.next_in,v=s.input,c=l+(s.avail_in-5),u=s.next_out,O=s.output,d=u-(o-s.avail_out),m=u+(s.avail_out-257),p=a.dmax,_=a.wsize,g=a.whave,f=a.wnext,h=a.window,S=a.hold,y=a.bits,E=a.lencode,A=a.distcode,P=(1<<a.lenbits)-1,T=(1<<a.distbits)-1;t:do{y<15&&(S+=v[l++]<<y,y+=8,S+=v[l++]<<y,y+=8),k=E[S&P];e:for(;;){if(S>>>=W=k>>>24,y-=W,(W=k>>>16&255)===0)O[u++]=65535&k;else{if(!(16&W)){if(!(64&W)){k=E[(65535&k)+(S&(1<<W)-1)];continue e}if(32&W){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}w=65535&k,(W&=15)&&(y<W&&(S+=v[l++]<<y,y+=8),w+=S&(1<<W)-1,S>>>=W,y-=W),y<15&&(S+=v[l++]<<y,y+=8,S+=v[l++]<<y,y+=8),k=A[S&T];n:for(;;){if(S>>>=W=k>>>24,y-=W,!(16&(W=k>>>16&255))){if(!(64&W)){k=A[(65535&k)+(S&(1<<W)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(L=65535&k,y<(W&=15)&&(S+=v[l++]<<y,(y+=8)<W&&(S+=v[l++]<<y,y+=8)),p<(L+=S&(1<<W)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(S>>>=W,y-=W,(W=u-d)<L){if(g<(W=L-W)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(V=h,(C=0)===f){if(C+=_-W,W<w){for(w-=W;O[u++]=h[C++],--W;);C=u-L,V=O}}else if(f<W){if(C+=_+f-W,(W-=f)<w){for(w-=W;O[u++]=h[C++],--W;);if(C=0,f<w){for(w-=W=f;O[u++]=h[C++],--W;);C=u-L,V=O}}}else if(C+=f-W,W<w){for(w-=W;O[u++]=h[C++],--W;);C=u-L,V=O}for(;2<w;)O[u++]=V[C++],O[u++]=V[C++],O[u++]=V[C++],w-=3;w&&(O[u++]=V[C++],1<w&&(O[u++]=V[C++]))}else{for(C=u-L;O[u++]=O[C++],O[u++]=O[C++],O[u++]=O[C++],2<(w-=3););w&&(O[u++]=O[C++],1<w&&(O[u++]=O[C++]))}break}}break}}while(l<c&&u<m);l-=w=y>>3,S&=(1<<(y-=w<<3))-1,s.next_in=l,s.next_out=u,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=u<m?m-u+257:257-(u-m),a.hold=S,a.bits=y}},{}],49:[function(e,n,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),u=1,d=2,m=0,p=-2,_=1,g=852,f=592;function h(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(C){var V;return C&&C.state?(V=C.state,C.total_in=C.total_out=V.total=0,C.msg="",V.wrap&&(C.adler=1&V.wrap),V.mode=_,V.last=0,V.havedict=0,V.dmax=32768,V.head=null,V.hold=0,V.bits=0,V.lencode=V.lendyn=new s.Buf32(g),V.distcode=V.distdyn=new s.Buf32(f),V.sane=1,V.back=-1,m):p}function E(C){var V;return C&&C.state?((V=C.state).wsize=0,V.whave=0,V.wnext=0,y(C)):p}function A(C,V){var v,O;return C&&C.state?(O=C.state,V<0?(v=0,V=-V):(v=1+(V>>4),V<48&&(V&=15)),V&&(V<8||15<V)?p:(O.window!==null&&O.wbits!==V&&(O.window=null),O.wrap=v,O.wbits=V,E(C))):p}function P(C,V){var v,O;return C?(O=new S,(C.state=O).window=null,(v=A(C,V))!==m&&(C.state=null),v):p}var T,k,W=!0;function w(C){if(W){var V;for(T=new s.Buf32(512),k=new s.Buf32(32),V=0;V<144;)C.lens[V++]=8;for(;V<256;)C.lens[V++]=9;for(;V<280;)C.lens[V++]=7;for(;V<288;)C.lens[V++]=8;for(c(u,C.lens,0,288,T,0,C.work,{bits:9}),V=0;V<32;)C.lens[V++]=5;c(d,C.lens,0,32,k,0,C.work,{bits:5}),W=!1}C.lencode=T,C.lenbits=9,C.distcode=k,C.distbits=5}function L(C,V,v,O){var K,Y=C.state;return Y.window===null&&(Y.wsize=1<<Y.wbits,Y.wnext=0,Y.whave=0,Y.window=new s.Buf8(Y.wsize)),O>=Y.wsize?(s.arraySet(Y.window,V,v-Y.wsize,Y.wsize,0),Y.wnext=0,Y.whave=Y.wsize):(O<(K=Y.wsize-Y.wnext)&&(K=O),s.arraySet(Y.window,V,v-O,K,Y.wnext),(O-=K)?(s.arraySet(Y.window,V,v-O,O,0),Y.wnext=O,Y.whave=Y.wsize):(Y.wnext+=K,Y.wnext===Y.wsize&&(Y.wnext=0),Y.whave<Y.wsize&&(Y.whave+=K))),0}r.inflateReset=E,r.inflateReset2=A,r.inflateResetKeep=y,r.inflateInit=function(C){return P(C,15)},r.inflateInit2=P,r.inflate=function(C,V){var v,O,K,Y,et,j,nt,H,q,ht,J,Q,yt,Et,xt,_t,Rt,bt,B,pt,x,Z,z,D,R=0,M=new s.Buf8(4),b=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return p;(v=C.state).mode===12&&(v.mode=13),et=C.next_out,K=C.output,nt=C.avail_out,Y=C.next_in,O=C.input,j=C.avail_in,H=v.hold,q=v.bits,ht=j,J=nt,Z=m;t:for(;;)switch(v.mode){case _:if(v.wrap===0){v.mode=13;break}for(;q<16;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(2&v.wrap&&H===35615){M[v.check=0]=255&H,M[1]=H>>>8&255,v.check=a(v.check,M,2,0),q=H=0,v.mode=2;break}if(v.flags=0,v.head&&(v.head.done=!1),!(1&v.wrap)||(((255&H)<<8)+(H>>8))%31){C.msg="incorrect header check",v.mode=30;break}if((15&H)!=8){C.msg="unknown compression method",v.mode=30;break}if(q-=4,x=8+(15&(H>>>=4)),v.wbits===0)v.wbits=x;else if(x>v.wbits){C.msg="invalid window size",v.mode=30;break}v.dmax=1<<x,C.adler=v.check=1,v.mode=512&H?10:12,q=H=0;break;case 2:for(;q<16;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(v.flags=H,(255&v.flags)!=8){C.msg="unknown compression method",v.mode=30;break}if(57344&v.flags){C.msg="unknown header flags set",v.mode=30;break}v.head&&(v.head.text=H>>8&1),512&v.flags&&(M[0]=255&H,M[1]=H>>>8&255,v.check=a(v.check,M,2,0)),q=H=0,v.mode=3;case 3:for(;q<32;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}v.head&&(v.head.time=H),512&v.flags&&(M[0]=255&H,M[1]=H>>>8&255,M[2]=H>>>16&255,M[3]=H>>>24&255,v.check=a(v.check,M,4,0)),q=H=0,v.mode=4;case 4:for(;q<16;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}v.head&&(v.head.xflags=255&H,v.head.os=H>>8),512&v.flags&&(M[0]=255&H,M[1]=H>>>8&255,v.check=a(v.check,M,2,0)),q=H=0,v.mode=5;case 5:if(1024&v.flags){for(;q<16;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}v.length=H,v.head&&(v.head.extra_len=H),512&v.flags&&(M[0]=255&H,M[1]=H>>>8&255,v.check=a(v.check,M,2,0)),q=H=0}else v.head&&(v.head.extra=null);v.mode=6;case 6:if(1024&v.flags&&(j<(Q=v.length)&&(Q=j),Q&&(v.head&&(x=v.head.extra_len-v.length,v.head.extra||(v.head.extra=new Array(v.head.extra_len)),s.arraySet(v.head.extra,O,Y,Q,x)),512&v.flags&&(v.check=a(v.check,O,Q,Y)),j-=Q,Y+=Q,v.length-=Q),v.length))break t;v.length=0,v.mode=7;case 7:if(2048&v.flags){if(j===0)break t;for(Q=0;x=O[Y+Q++],v.head&&x&&v.length<65536&&(v.head.name+=String.fromCharCode(x)),x&&Q<j;);if(512&v.flags&&(v.check=a(v.check,O,Q,Y)),j-=Q,Y+=Q,x)break t}else v.head&&(v.head.name=null);v.length=0,v.mode=8;case 8:if(4096&v.flags){if(j===0)break t;for(Q=0;x=O[Y+Q++],v.head&&x&&v.length<65536&&(v.head.comment+=String.fromCharCode(x)),x&&Q<j;);if(512&v.flags&&(v.check=a(v.check,O,Q,Y)),j-=Q,Y+=Q,x)break t}else v.head&&(v.head.comment=null);v.mode=9;case 9:if(512&v.flags){for(;q<16;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(H!==(65535&v.check)){C.msg="header crc mismatch",v.mode=30;break}q=H=0}v.head&&(v.head.hcrc=v.flags>>9&1,v.head.done=!0),C.adler=v.check=0,v.mode=12;break;case 10:for(;q<32;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}C.adler=v.check=h(H),q=H=0,v.mode=11;case 11:if(v.havedict===0)return C.next_out=et,C.avail_out=nt,C.next_in=Y,C.avail_in=j,v.hold=H,v.bits=q,2;C.adler=v.check=1,v.mode=12;case 12:if(V===5||V===6)break t;case 13:if(v.last){H>>>=7&q,q-=7&q,v.mode=27;break}for(;q<3;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}switch(v.last=1&H,q-=1,3&(H>>>=1)){case 0:v.mode=14;break;case 1:if(w(v),v.mode=20,V!==6)break;H>>>=2,q-=2;break t;case 2:v.mode=17;break;case 3:C.msg="invalid block type",v.mode=30}H>>>=2,q-=2;break;case 14:for(H>>>=7&q,q-=7&q;q<32;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if((65535&H)!=(H>>>16^65535)){C.msg="invalid stored block lengths",v.mode=30;break}if(v.length=65535&H,q=H=0,v.mode=15,V===6)break t;case 15:v.mode=16;case 16:if(Q=v.length){if(j<Q&&(Q=j),nt<Q&&(Q=nt),Q===0)break t;s.arraySet(K,O,Y,Q,et),j-=Q,Y+=Q,nt-=Q,et+=Q,v.length-=Q;break}v.mode=12;break;case 17:for(;q<14;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(v.nlen=257+(31&H),H>>>=5,q-=5,v.ndist=1+(31&H),H>>>=5,q-=5,v.ncode=4+(15&H),H>>>=4,q-=4,286<v.nlen||30<v.ndist){C.msg="too many length or distance symbols",v.mode=30;break}v.have=0,v.mode=18;case 18:for(;v.have<v.ncode;){for(;q<3;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}v.lens[b[v.have++]]=7&H,H>>>=3,q-=3}for(;v.have<19;)v.lens[b[v.have++]]=0;if(v.lencode=v.lendyn,v.lenbits=7,z={bits:v.lenbits},Z=c(0,v.lens,0,19,v.lencode,0,v.work,z),v.lenbits=z.bits,Z){C.msg="invalid code lengths set",v.mode=30;break}v.have=0,v.mode=19;case 19:for(;v.have<v.nlen+v.ndist;){for(;_t=(R=v.lencode[H&(1<<v.lenbits)-1])>>>16&255,Rt=65535&R,!((xt=R>>>24)<=q);){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(Rt<16)H>>>=xt,q-=xt,v.lens[v.have++]=Rt;else{if(Rt===16){for(D=xt+2;q<D;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(H>>>=xt,q-=xt,v.have===0){C.msg="invalid bit length repeat",v.mode=30;break}x=v.lens[v.have-1],Q=3+(3&H),H>>>=2,q-=2}else if(Rt===17){for(D=xt+3;q<D;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}q-=xt,x=0,Q=3+(7&(H>>>=xt)),H>>>=3,q-=3}else{for(D=xt+7;q<D;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}q-=xt,x=0,Q=11+(127&(H>>>=xt)),H>>>=7,q-=7}if(v.have+Q>v.nlen+v.ndist){C.msg="invalid bit length repeat",v.mode=30;break}for(;Q--;)v.lens[v.have++]=x}}if(v.mode===30)break;if(v.lens[256]===0){C.msg="invalid code -- missing end-of-block",v.mode=30;break}if(v.lenbits=9,z={bits:v.lenbits},Z=c(u,v.lens,0,v.nlen,v.lencode,0,v.work,z),v.lenbits=z.bits,Z){C.msg="invalid literal/lengths set",v.mode=30;break}if(v.distbits=6,v.distcode=v.distdyn,z={bits:v.distbits},Z=c(d,v.lens,v.nlen,v.ndist,v.distcode,0,v.work,z),v.distbits=z.bits,Z){C.msg="invalid distances set",v.mode=30;break}if(v.mode=20,V===6)break t;case 20:v.mode=21;case 21:if(6<=j&&258<=nt){C.next_out=et,C.avail_out=nt,C.next_in=Y,C.avail_in=j,v.hold=H,v.bits=q,l(C,J),et=C.next_out,K=C.output,nt=C.avail_out,Y=C.next_in,O=C.input,j=C.avail_in,H=v.hold,q=v.bits,v.mode===12&&(v.back=-1);break}for(v.back=0;_t=(R=v.lencode[H&(1<<v.lenbits)-1])>>>16&255,Rt=65535&R,!((xt=R>>>24)<=q);){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(_t&&!(240&_t)){for(bt=xt,B=_t,pt=Rt;_t=(R=v.lencode[pt+((H&(1<<bt+B)-1)>>bt)])>>>16&255,Rt=65535&R,!(bt+(xt=R>>>24)<=q);){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}H>>>=bt,q-=bt,v.back+=bt}if(H>>>=xt,q-=xt,v.back+=xt,v.length=Rt,_t===0){v.mode=26;break}if(32&_t){v.back=-1,v.mode=12;break}if(64&_t){C.msg="invalid literal/length code",v.mode=30;break}v.extra=15&_t,v.mode=22;case 22:if(v.extra){for(D=v.extra;q<D;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}v.length+=H&(1<<v.extra)-1,H>>>=v.extra,q-=v.extra,v.back+=v.extra}v.was=v.length,v.mode=23;case 23:for(;_t=(R=v.distcode[H&(1<<v.distbits)-1])>>>16&255,Rt=65535&R,!((xt=R>>>24)<=q);){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(!(240&_t)){for(bt=xt,B=_t,pt=Rt;_t=(R=v.distcode[pt+((H&(1<<bt+B)-1)>>bt)])>>>16&255,Rt=65535&R,!(bt+(xt=R>>>24)<=q);){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}H>>>=bt,q-=bt,v.back+=bt}if(H>>>=xt,q-=xt,v.back+=xt,64&_t){C.msg="invalid distance code",v.mode=30;break}v.offset=Rt,v.extra=15&_t,v.mode=24;case 24:if(v.extra){for(D=v.extra;q<D;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}v.offset+=H&(1<<v.extra)-1,H>>>=v.extra,q-=v.extra,v.back+=v.extra}if(v.offset>v.dmax){C.msg="invalid distance too far back",v.mode=30;break}v.mode=25;case 25:if(nt===0)break t;if(Q=J-nt,v.offset>Q){if((Q=v.offset-Q)>v.whave&&v.sane){C.msg="invalid distance too far back",v.mode=30;break}yt=Q>v.wnext?(Q-=v.wnext,v.wsize-Q):v.wnext-Q,Q>v.length&&(Q=v.length),Et=v.window}else Et=K,yt=et-v.offset,Q=v.length;for(nt<Q&&(Q=nt),nt-=Q,v.length-=Q;K[et++]=Et[yt++],--Q;);v.length===0&&(v.mode=21);break;case 26:if(nt===0)break t;K[et++]=v.length,nt--,v.mode=21;break;case 27:if(v.wrap){for(;q<32;){if(j===0)break t;j--,H|=O[Y++]<<q,q+=8}if(J-=nt,C.total_out+=J,v.total+=J,J&&(C.adler=v.check=v.flags?a(v.check,K,J,et-J):o(v.check,K,J,et-J)),J=nt,(v.flags?H:h(H))!==v.check){C.msg="incorrect data check",v.mode=30;break}q=H=0}v.mode=28;case 28:if(v.wrap&&v.flags){for(;q<32;){if(j===0)break t;j--,H+=O[Y++]<<q,q+=8}if(H!==(4294967295&v.total)){C.msg="incorrect length check",v.mode=30;break}q=H=0}v.mode=29;case 29:Z=1;break t;case 30:Z=-3;break t;case 31:return-4;case 32:default:return p}return C.next_out=et,C.avail_out=nt,C.next_in=Y,C.avail_in=j,v.hold=H,v.bits=q,(v.wsize||J!==C.avail_out&&v.mode<30&&(v.mode<27||V!==4))&&L(C,C.output,C.next_out,J-C.avail_out)?(v.mode=31,-4):(ht-=C.avail_in,J-=C.avail_out,C.total_in+=ht,C.total_out+=J,v.total+=J,v.wrap&&J&&(C.adler=v.check=v.flags?a(v.check,K,J,C.next_out-J):o(v.check,K,J,C.next_out-J)),C.data_type=v.bits+(v.last?64:0)+(v.mode===12?128:0)+(v.mode===20||v.mode===15?256:0),(ht==0&&J===0||V===4)&&Z===m&&(Z=-5),Z)},r.inflateEnd=function(C){if(!C||!C.state)return p;var V=C.state;return V.window&&(V.window=null),C.state=null,m},r.inflateGetHeader=function(C,V){var v;return C&&C.state&&2&(v=C.state).wrap?((v.head=V).done=!1,m):p},r.inflateSetDictionary=function(C,V){var v,O=V.length;return C&&C.state?(v=C.state).wrap!==0&&v.mode!==11?p:v.mode===11&&o(1,V,O,0)!==v.check?-3:L(C,V,O,O)?(v.mode=31,-4):(v.havedict=1,m):p},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(u,d,m,p,_,g,f,h){var S,y,E,A,P,T,k,W,w,L=h.bits,C=0,V=0,v=0,O=0,K=0,Y=0,et=0,j=0,nt=0,H=0,q=null,ht=0,J=new s.Buf16(16),Q=new s.Buf16(16),yt=null,Et=0;for(C=0;C<=15;C++)J[C]=0;for(V=0;V<p;V++)J[d[m+V]]++;for(K=L,O=15;1<=O&&J[O]===0;O--);if(O<K&&(K=O),O===0)return _[g++]=20971520,_[g++]=20971520,h.bits=1,0;for(v=1;v<O&&J[v]===0;v++);for(K<v&&(K=v),C=j=1;C<=15;C++)if(j<<=1,(j-=J[C])<0)return-1;if(0<j&&(u===0||O!==1))return-1;for(Q[1]=0,C=1;C<15;C++)Q[C+1]=Q[C]+J[C];for(V=0;V<p;V++)d[m+V]!==0&&(f[Q[d[m+V]]++]=V);if(T=u===0?(q=yt=f,19):u===1?(q=o,ht-=257,yt=a,Et-=257,256):(q=l,yt=c,-1),C=v,P=g,et=V=H=0,E=-1,A=(nt=1<<(Y=K))-1,u===1&&852<nt||u===2&&592<nt)return 1;for(;;){for(k=C-et,w=f[V]<T?(W=0,f[V]):f[V]>T?(W=yt[Et+f[V]],q[ht+f[V]]):(W=96,0),S=1<<C-et,v=y=1<<Y;_[P+(H>>et)+(y-=S)]=k<<24|W<<16|w|0,y!==0;);for(S=1<<C-1;H&S;)S>>=1;if(S!==0?(H&=S-1,H+=S):H=0,V++,--J[C]==0){if(C===O)break;C=d[m+f[V]]}if(K<C&&(H&A)!==E){for(et===0&&(et=K),P+=v,j=1<<(Y=C-et);Y+et<O&&!((j-=J[Y+et])<=0);)Y++,j<<=1;if(nt+=1<<Y,u===1&&852<nt||u===2&&592<nt)return 1;_[E=H&A]=K<<24|Y<<16|P-g|0}}return H!==0&&(_[P+H]=C-et<<24|64<<16|0),h.bits=K,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),o=0,a=1;function l(R){for(var M=R.length;0<=--M;)R[M]=0}var c=0,u=29,d=256,m=d+1+u,p=30,_=19,g=2*m+1,f=15,h=16,S=7,y=256,E=16,A=17,P=18,T=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],W=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],L=new Array(2*(m+2));l(L);var C=new Array(2*p);l(C);var V=new Array(512);l(V);var v=new Array(256);l(v);var O=new Array(u);l(O);var K,Y,et,j=new Array(p);function nt(R,M,b,U,F){this.static_tree=R,this.extra_bits=M,this.extra_base=b,this.elems=U,this.max_length=F,this.has_stree=R&&R.length}function H(R,M){this.dyn_tree=R,this.max_code=0,this.stat_desc=M}function q(R){return R<256?V[R]:V[256+(R>>>7)]}function ht(R,M){R.pending_buf[R.pending++]=255&M,R.pending_buf[R.pending++]=M>>>8&255}function J(R,M,b){R.bi_valid>h-b?(R.bi_buf|=M<<R.bi_valid&65535,ht(R,R.bi_buf),R.bi_buf=M>>h-R.bi_valid,R.bi_valid+=b-h):(R.bi_buf|=M<<R.bi_valid&65535,R.bi_valid+=b)}function Q(R,M,b){J(R,b[2*M],b[2*M+1])}function yt(R,M){for(var b=0;b|=1&R,R>>>=1,b<<=1,0<--M;);return b>>>1}function Et(R,M,b){var U,F,$=new Array(f+1),tt=0;for(U=1;U<=f;U++)$[U]=tt=tt+b[U-1]<<1;for(F=0;F<=M;F++){var rt=R[2*F+1];rt!==0&&(R[2*F]=yt($[rt]++,rt))}}function xt(R){var M;for(M=0;M<m;M++)R.dyn_ltree[2*M]=0;for(M=0;M<p;M++)R.dyn_dtree[2*M]=0;for(M=0;M<_;M++)R.bl_tree[2*M]=0;R.dyn_ltree[2*y]=1,R.opt_len=R.static_len=0,R.last_lit=R.matches=0}function _t(R){8<R.bi_valid?ht(R,R.bi_buf):0<R.bi_valid&&(R.pending_buf[R.pending++]=R.bi_buf),R.bi_buf=0,R.bi_valid=0}function Rt(R,M,b,U){var F=2*M,$=2*b;return R[F]<R[$]||R[F]===R[$]&&U[M]<=U[b]}function bt(R,M,b){for(var U=R.heap[b],F=b<<1;F<=R.heap_len&&(F<R.heap_len&&Rt(M,R.heap[F+1],R.heap[F],R.depth)&&F++,!Rt(M,U,R.heap[F],R.depth));)R.heap[b]=R.heap[F],b=F,F<<=1;R.heap[b]=U}function B(R,M,b){var U,F,$,tt,rt=0;if(R.last_lit!==0)for(;U=R.pending_buf[R.d_buf+2*rt]<<8|R.pending_buf[R.d_buf+2*rt+1],F=R.pending_buf[R.l_buf+rt],rt++,U===0?Q(R,F,M):(Q(R,($=v[F])+d+1,M),(tt=T[$])!==0&&J(R,F-=O[$],tt),Q(R,$=q(--U),b),(tt=k[$])!==0&&J(R,U-=j[$],tt)),rt<R.last_lit;);Q(R,y,M)}function pt(R,M){var b,U,F,$=M.dyn_tree,tt=M.stat_desc.static_tree,rt=M.stat_desc.has_stree,ct=M.stat_desc.elems,gt=-1;for(R.heap_len=0,R.heap_max=g,b=0;b<ct;b++)$[2*b]!==0?(R.heap[++R.heap_len]=gt=b,R.depth[b]=0):$[2*b+1]=0;for(;R.heap_len<2;)$[2*(F=R.heap[++R.heap_len]=gt<2?++gt:0)]=1,R.depth[F]=0,R.opt_len--,rt&&(R.static_len-=tt[2*F+1]);for(M.max_code=gt,b=R.heap_len>>1;1<=b;b--)bt(R,$,b);for(F=ct;b=R.heap[1],R.heap[1]=R.heap[R.heap_len--],bt(R,$,1),U=R.heap[1],R.heap[--R.heap_max]=b,R.heap[--R.heap_max]=U,$[2*F]=$[2*b]+$[2*U],R.depth[F]=(R.depth[b]>=R.depth[U]?R.depth[b]:R.depth[U])+1,$[2*b+1]=$[2*U+1]=F,R.heap[1]=F++,bt(R,$,1),2<=R.heap_len;);R.heap[--R.heap_max]=R.heap[1],function(St,Dt){var ut,zt,Bt,At,Pt,Tt,Ot=Dt.dyn_tree,G=Dt.max_code,vt=Dt.stat_desc.static_tree,wt=Dt.stat_desc.has_stree,It=Dt.stat_desc.extra_bits,N=Dt.stat_desc.extra_base,dt=Dt.stat_desc.max_length,ft=0;for(At=0;At<=f;At++)St.bl_count[At]=0;for(Ot[2*St.heap[St.heap_max]+1]=0,ut=St.heap_max+1;ut<g;ut++)dt<(At=Ot[2*Ot[2*(zt=St.heap[ut])+1]+1]+1)&&(At=dt,ft++),Ot[2*zt+1]=At,G<zt||(St.bl_count[At]++,Pt=0,N<=zt&&(Pt=It[zt-N]),Tt=Ot[2*zt],St.opt_len+=Tt*(At+Pt),wt&&(St.static_len+=Tt*(vt[2*zt+1]+Pt)));if(ft!==0){do{for(At=dt-1;St.bl_count[At]===0;)At--;St.bl_count[At]--,St.bl_count[At+1]+=2,St.bl_count[dt]--,ft-=2}while(0<ft);for(At=dt;At!==0;At--)for(zt=St.bl_count[At];zt!==0;)G<(Bt=St.heap[--ut])||(Ot[2*Bt+1]!==At&&(St.opt_len+=(At-Ot[2*Bt+1])*Ot[2*Bt],Ot[2*Bt+1]=At),zt--)}}(R,M),Et($,gt,R.bl_count)}function x(R,M,b){var U,F,$=-1,tt=M[1],rt=0,ct=7,gt=4;for(tt===0&&(ct=138,gt=3),M[2*(b+1)+1]=65535,U=0;U<=b;U++)F=tt,tt=M[2*(U+1)+1],++rt<ct&&F===tt||(rt<gt?R.bl_tree[2*F]+=rt:F!==0?(F!==$&&R.bl_tree[2*F]++,R.bl_tree[2*E]++):rt<=10?R.bl_tree[2*A]++:R.bl_tree[2*P]++,$=F,gt=(rt=0)===tt?(ct=138,3):F===tt?(ct=6,3):(ct=7,4))}function Z(R,M,b){var U,F,$=-1,tt=M[1],rt=0,ct=7,gt=4;for(tt===0&&(ct=138,gt=3),U=0;U<=b;U++)if(F=tt,tt=M[2*(U+1)+1],!(++rt<ct&&F===tt)){if(rt<gt)for(;Q(R,F,R.bl_tree),--rt!=0;);else F!==0?(F!==$&&(Q(R,F,R.bl_tree),rt--),Q(R,E,R.bl_tree),J(R,rt-3,2)):rt<=10?(Q(R,A,R.bl_tree),J(R,rt-3,3)):(Q(R,P,R.bl_tree),J(R,rt-11,7));$=F,gt=(rt=0)===tt?(ct=138,3):F===tt?(ct=6,3):(ct=7,4)}}l(j);var z=!1;function D(R,M,b,U){J(R,(c<<1)+(U?1:0),3),function(F,$,tt,rt){_t(F),ht(F,tt),ht(F,~tt),s.arraySet(F.pending_buf,F.window,$,tt,F.pending),F.pending+=tt}(R,M,b)}r._tr_init=function(R){z||(function(){var M,b,U,F,$,tt=new Array(f+1);for(F=U=0;F<u-1;F++)for(O[F]=U,M=0;M<1<<T[F];M++)v[U++]=F;for(v[U-1]=F,F=$=0;F<16;F++)for(j[F]=$,M=0;M<1<<k[F];M++)V[$++]=F;for($>>=7;F<p;F++)for(j[F]=$<<7,M=0;M<1<<k[F]-7;M++)V[256+$++]=F;for(b=0;b<=f;b++)tt[b]=0;for(M=0;M<=143;)L[2*M+1]=8,M++,tt[8]++;for(;M<=255;)L[2*M+1]=9,M++,tt[9]++;for(;M<=279;)L[2*M+1]=7,M++,tt[7]++;for(;M<=287;)L[2*M+1]=8,M++,tt[8]++;for(Et(L,m+1,tt),M=0;M<p;M++)C[2*M+1]=5,C[2*M]=yt(M,5);K=new nt(L,T,d+1,m,f),Y=new nt(C,k,0,p,f),et=new nt(new Array(0),W,0,_,S)}(),z=!0),R.l_desc=new H(R.dyn_ltree,K),R.d_desc=new H(R.dyn_dtree,Y),R.bl_desc=new H(R.bl_tree,et),R.bi_buf=0,R.bi_valid=0,xt(R)},r._tr_stored_block=D,r._tr_flush_block=function(R,M,b,U){var F,$,tt=0;0<R.level?(R.strm.data_type===2&&(R.strm.data_type=function(rt){var ct,gt=4093624447;for(ct=0;ct<=31;ct++,gt>>>=1)if(1&gt&&rt.dyn_ltree[2*ct]!==0)return o;if(rt.dyn_ltree[18]!==0||rt.dyn_ltree[20]!==0||rt.dyn_ltree[26]!==0)return a;for(ct=32;ct<d;ct++)if(rt.dyn_ltree[2*ct]!==0)return a;return o}(R)),pt(R,R.l_desc),pt(R,R.d_desc),tt=function(rt){var ct;for(x(rt,rt.dyn_ltree,rt.l_desc.max_code),x(rt,rt.dyn_dtree,rt.d_desc.max_code),pt(rt,rt.bl_desc),ct=_-1;3<=ct&&rt.bl_tree[2*w[ct]+1]===0;ct--);return rt.opt_len+=3*(ct+1)+5+5+4,ct}(R),F=R.opt_len+3+7>>>3,($=R.static_len+3+7>>>3)<=F&&(F=$)):F=$=b+5,b+4<=F&&M!==-1?D(R,M,b,U):R.strategy===4||$===F?(J(R,2+(U?1:0),3),B(R,L,C)):(J(R,4+(U?1:0),3),function(rt,ct,gt,St){var Dt;for(J(rt,ct-257,5),J(rt,gt-1,5),J(rt,St-4,4),Dt=0;Dt<St;Dt++)J(rt,rt.bl_tree[2*w[Dt]+1],3);Z(rt,rt.dyn_ltree,ct-1),Z(rt,rt.dyn_dtree,gt-1)}(R,R.l_desc.max_code+1,R.d_desc.max_code+1,tt+1),B(R,R.dyn_ltree,R.dyn_dtree)),xt(R),U&&_t(R)},r._tr_tally=function(R,M,b){return R.pending_buf[R.d_buf+2*R.last_lit]=M>>>8&255,R.pending_buf[R.d_buf+2*R.last_lit+1]=255&M,R.pending_buf[R.l_buf+R.last_lit]=255&b,R.last_lit++,M===0?R.dyn_ltree[2*b]++:(R.matches++,M--,R.dyn_ltree[2*(v[b]+d+1)]++,R.dyn_dtree[2*q(M)]++),R.last_lit===R.lit_bufsize-1},r._tr_align=function(R){J(R,2,3),Q(R,y,L),function(M){M.bi_valid===16?(ht(M,M.bi_buf),M.bi_buf=0,M.bi_valid=0):8<=M.bi_valid&&(M.pending_buf[M.pending++]=255&M.bi_buf,M.bi_buf>>=8,M.bi_valid-=8)}(R)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(o,a){if(!o.setImmediate){var l,c,u,d,m=1,p={},_=!1,g=o.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(o);f=f&&f.setTimeout?f:o,l={}.toString.call(o.process)==="[object process]"?function(E){process.nextTick(function(){S(E)})}:function(){if(o.postMessage&&!o.importScripts){var E=!0,A=o.onmessage;return o.onmessage=function(){E=!1},o.postMessage("","*"),o.onmessage=A,E}}()?(d="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",y,!1):o.attachEvent("onmessage",y),function(E){o.postMessage(d+E,"*")}):o.MessageChannel?((u=new MessageChannel).port1.onmessage=function(E){S(E.data)},function(E){u.port2.postMessage(E)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(E){var A=g.createElement("script");A.onreadystatechange=function(){S(E),A.onreadystatechange=null,c.removeChild(A),A=null},c.appendChild(A)}):function(E){setTimeout(S,0,E)},f.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var A=new Array(arguments.length-1),P=0;P<A.length;P++)A[P]=arguments[P+1];var T={callback:E,args:A};return p[m]=T,l(m),m++},f.clearImmediate=h}function h(E){delete p[E]}function S(E){if(_)setTimeout(S,0,E);else{var A=p[E];if(A){_=!0;try{(function(P){var T=P.callback,k=P.args;switch(k.length){case 0:T();break;case 1:T(k[0]);break;case 2:T(k[0],k[1]);break;case 3:T(k[0],k[1],k[2]);break;default:T.apply(a,k)}})(A)}finally{h(E),_=!1}}}}function y(E){E.source===o&&typeof E.data=="string"&&E.data.indexOf(d)===0&&S(+E.data.slice(d.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Qr<"u"?Qr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Vc);var z_=Vc.exports;const B_=F_(z_);function k_(i,t){const e=URL.createObjectURL(i),n=document.createElement("a");n.href=e,n.download=t,n.click(),URL.revokeObjectURL(e)}async function H_({mesh:i,dimensions:t,imageFiles:e,chamfer:n}){const s=new O_().parse(i,{binary:!1}),o=new Blob([s],{type:"model/stl"}),a=!!(n!=null&&n.enabled),l=a?n.depth:0,c=[`width_in=${t.width}`,`height_in=${t.height}`,`depth_in=${t.depth}`,`pad_x_in=${t.padX??0}`,`pad_y_in=${t.padY??0}`,`chamfer_enabled=${a}`,`chamfer_angle_deg=${a?45:0}`,`chamfer_depth_in=${l}`,`image_filenames=${e!=null&&e.length?e.map(m=>m.name).join(","):"none"}`,`generated_at=${new Date().toISOString()}`].join(`
`),u=new B_;u.file("panel.stl",o),u.file("metadata.txt",c),Array.isArray(e)&&e.forEach(m=>{m&&u.file(`image_${m.name}`,m)});const d=await u.generateAsync({type:"blob"});k_(d,"panel_export.zip")}const tn=document.querySelector("#viewport"),si=document.querySelector("#width"),ai=document.querySelector("#height"),Xi=document.querySelector("#depth"),wa=document.querySelector("#chamfer"),Ta=document.querySelector("#imageLayout"),Wc=document.querySelector("#addImageSlotBottom"),Fi=Array.from(document.querySelectorAll("#imageSlots .slot")),Xc=document.querySelector("#matchWidth"),qc=document.querySelector("#matchHeight"),zi=document.querySelector("#screwholes"),Wl=document.querySelector("#togglePanel"),G_=document.querySelector("#exportBtn"),Xl=document.querySelector("#imageStatus"),V_=document.querySelector("#panel"),W_=document.querySelector("#app"),X_=document.querySelectorAll(".section-toggle"),xn=document.querySelector("#helpOverlay"),ql=document.querySelector("#helpBtn"),at={width:Number(si.value),height:Number(ai.value),depth:Number(Xi.value),chamfer:wa.checked,screwHoles:(zi==null?void 0:zi.checked)??!1,imageCount:1,layout:Ta.value,images:Array.from({length:4},()=>({image:null,file:null,rotation:0,margin:{left:0,right:0,top:0,bottom:0}}))},qe=new Og;qe.background=new Ht("#0f1317");const Ne=new We(45,1,.1,2e3);Ne.position.set(0,0,80);Ne.lookAt(0,0,0);const ee=new Cc({antialias:!0});ee.setPixelRatio(window.devicePixelRatio);ee.setSize(tn.clientWidth,tn.clientHeight);ee.shadowMap.enabled=!0;ee.autoClear=!1;tn.appendChild(ee.domElement);const Fe=new C_;Fe.setSize(tn.clientWidth,tn.clientHeight);Fe.domElement.style.position="absolute";Fe.domElement.style.top="0";Fe.domElement.style.left="0";Fe.domElement.style.pointerEvents="auto";tn.appendChild(Fe.domElement);Fe.domElement.addEventListener("pointerdown",xs);Fe.domElement.addEventListener("pointermove",xs);Fe.domElement.addEventListener("pointerup",xs);Fe.domElement.addEventListener("wheel",xs,{passive:!1});Fe.domElement.addEventListener("pointerdown",i=>{iu(i)&&(i.preventDefault(),i.stopPropagation())});tn.addEventListener("wheel",i=>{(i.target===ee.domElement||i.target===Fe.domElement)&&i.preventDefault()},{passive:!1});const Mn=new w_(Ne,ee.domElement);Mn.enableDamping=!0;Mn.dampingFactor=.08;Mn.minDistance=10;Mn.maxDistance=300;Mn.target.set(0,0,0);const q_=new v_(16777215,2107443,.9);qe.add(q_);const Va=new Ha(16777215,1);Va.position.set(60,90,50);Va.castShadow=!0;qe.add(Va);const Yc=new Ha(10470655,.45);Yc.position.set(-40,30,20);qe.add(Yc);const jc=new Ha(16777215,.35);jc.position.set(-20,50,-60);qe.add(jc);const Y_=e0();qe.add(Y_);const j_=new E_(20);qe.add(j_);const Zc=new __({color:2830648,metalness:.2,roughness:.65}),Ce=new Sr({color:16777215});Ce.toneMapped=!1;Ce.transparent=!0;Ce.alphaTest=.5;let Dn=$_();qe.add(Dn);let Li=_0();qe.add(Li);const gn=new rr;qe.add(gn);const xe=t0(),Ee=Array.from({length:4},()=>null),Pn={width:new X(0,0,0),height:new X(0,0,0),depth:new X(0,0,0)},Ie={active:null,startX:0,startY:0,startOffset:new X(0,0,0)},ur={width:{},height:{},depth:{}},fs={active:null},Aa=new Ht(10134704),Z_=new Ht(16762967);let $n=null;const Yl=.5,K_=4/25.4,_r=K_/2;function J_(i){return i instanceof Element?!!i.closest(".dim-label"):!1}function xs(i){if(!(J_(i.target)||$n)&&i.target!==ee.domElement){if(i.type==="wheel"){i.preventDefault(),ee.domElement.dispatchEvent(new WheelEvent(i.type,i));return}ee.domElement.dispatchEvent(new PointerEvent(i.type,i))}}function $_(){const i=Xa(),t=new _e(i,Zc);return t.castShadow=!0,t.receiveShadow=!0,t.position.set(0,at.height/2,0),t}function qi(){Dn&&(Dn.geometry.dispose(),Dn.geometry=Xa(),Dn.position.set(0,at.height/2,0)),v0(),Ue(),xr()}function Ue(){const i=Ss(),t=Math.min(4096,ee.capabilities.maxTextureSize||4096),e=lu({width:at.width,height:at.height,innerW:i.width,innerH:i.height}),n=u0().filter(a=>a==null?void 0:a.image),r={layout:at.layout,maxSize:t,ppi:220,count:Math.max(1,n.length)};Ce.alphaMap&&Ce.alphaMap.dispose(),Ce.alphaMap=P_(i.width,i.height,e.map(a=>({...a,r:_r})),r);const s=n.length;if(s===0){Ce.map&&(Ce.map.dispose(),Ce.map=null),Ce.needsUpdate=!0,Xl.textContent="No images loaded",Zl(!1);return}const o=L_(n,i.width,i.height,r);Ce.map&&Ce.map.dispose(),Ce.map=o,Ce.needsUpdate=!0,Xl.textContent=`${s} image${s===1?"":"s"} loaded`,Zl(!0)}function On(i,t,e,n=1/0){if(i==="")return t;const r=Number(i);return Number.isFinite(r)?Math.min(Math.max(r,e),n):t}function Yi(i){const t=On(si.value,at.width,1),e=On(ai.value,at.height,1,35),n=On(Xi.value,at.depth,.1,1);t===null||e===null||n===null||(at.width=t,at.height=e,at.depth=n,qi())}function vr(){si.value=at.width.toFixed(2),ai.value=at.height.toFixed(2),Xi.value=at.depth.toFixed(2)}si.addEventListener("input",()=>Yi());ai.addEventListener("input",()=>Yi());Xi.addEventListener("input",()=>Yi());wa.addEventListener("change",()=>{at.chamfer=wa.checked,qi()});zi&&zi.addEventListener("change",()=>{at.screwHoles=zi.checked,qi()});si.addEventListener("blur",()=>{Yi(),vr()});ai.addEventListener("blur",()=>{Yi(),vr()});Xi.addEventListener("blur",()=>{Yi(),vr()});Ta.addEventListener("change",()=>{at.layout=Ta.value,Ue()});Wc.addEventListener("click",()=>{f0(at.imageCount+1)});Fi.forEach(i=>{const t=Number(i.dataset.index),e=i.querySelector(".image-input"),n=i.querySelector(".rotation"),r=i.querySelector(".toggle-advanced"),s=i.querySelector(".slot-advanced"),o=i.querySelector(".toggle-margins"),a=i.querySelector(".slot-margins"),l=i.querySelector(".margin-left"),c=i.querySelector(".margin-right"),u=i.querySelector(".margin-top"),d=i.querySelector(".margin-bottom"),m=i.querySelector(".remove-slot");s&&s.classList.add("collapsed"),r&&s&&r.addEventListener("click",()=>{s.classList.toggle("collapsed")}),a&&a.classList.add("collapsed"),o&&a&&o.addEventListener("click",()=>{a.classList.toggle("collapsed")}),e.addEventListener("change",p=>{var f;const _=(f=p.target.files)==null?void 0:f[0];if(!_){at.images[t].image=null,at.images[t].file=null,Ee[t]&&(URL.revokeObjectURL(Ee[t]),Ee[t]=null),Ue();return}const g=new Image;g.onload=()=>{at.images[t].image=g,at.images[t].file=_,Ue(),Ee[t]&&(URL.revokeObjectURL(Ee[t]),Ee[t]=null)},Ee[t]&&URL.revokeObjectURL(Ee[t]),Ee[t]=URL.createObjectURL(_),g.src=Ee[t]}),n.addEventListener("change",()=>{at.images[t].rotation=Number(n.value)||0,Ue()}),l.addEventListener("input",()=>{at.images[t].margin.left=Number(l.value)||0,Ue()}),c.addEventListener("input",()=>{at.images[t].margin.right=Number(c.value)||0,Ue()}),u.addEventListener("input",()=>{at.images[t].margin.top=Number(u.value)||0,Ue()}),d.addEventListener("input",()=>{at.images[t].margin.bottom=Number(d.value)||0,Ue()}),m.addEventListener("click",()=>{d0(t)})});Wl.addEventListener("click",()=>{const i=V_.classList.toggle("collapsed");W_.classList.toggle("panel-floating",i),Wl.setAttribute("aria-label",i?"Expand panel":"Collapse panel"),ys()});X_.forEach(i=>{i.addEventListener("click",()=>{const t=i.closest(".section");t&&t.classList.toggle("collapsed")})});function Kc(){xn&&(xn.classList.add("is-visible"),xn.setAttribute("aria-hidden","false"))}function Jc(){xn&&(xn.classList.remove("is-visible"),xn.setAttribute("aria-hidden","true"))}ql&&ql.addEventListener("click",()=>{Kc()});xn&&xn.addEventListener("click",i=>{i.target===xn&&Jc()});window.addEventListener("keydown",i=>{i.key==="Escape"&&Jc()});Xc.addEventListener("click",()=>{if(!su())return;const t=On(m0(),at.width,1);at.width=t,si.value=at.width.toFixed(2),qi(),Ue()});qc.addEventListener("click",()=>{if(!su())return;const t=On(p0(),at.height,1,35);at.height=t,ai.value=at.height.toFixed(2),qi(),Ue()});G_.addEventListener("click",async()=>{const i=at.screwHoles;at.screwHoles=!0;const t=Xa();at.screwHoles=i,t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere();const e=new _e(t,Zc);e.position.copy(Dn.position),e.rotation.copy(Dn.rotation),e.scale.copy(Dn.scale),e.updateMatrixWorld(!0),await H_({mesh:e,dimensions:{width:at.width,height:at.height,depth:at.depth,padX:0,padY:0},imageFiles:h0(),chamfer:{enabled:at.chamfer,depth:at.chamfer?at.depth*.3:0}}),t.dispose()});const Q_=new S_,hr=new T_(Ne,ee.domElement);hr.center.copy(Mn.target);ee.domElement.addEventListener("pointerdown",i=>{if(iu(i)){i.preventDefault(),i.stopPropagation();return}hr.handleClick(i)&&(i.preventDefault(),i.stopPropagation())});function ys(){const{clientWidth:i,clientHeight:t}=tn;Ne.aspect=i/t,Ne.updateProjectionMatrix(),ee.setSize(i,t),Fe.setSize(i,t)}const $c=new ResizeObserver(()=>{requestAnimationFrame(ys)});$c.observe(tn);$c.observe(document.body);window.addEventListener("resize",ys);function Qc(){requestAnimationFrame(Qc);const i=Q_.getDelta();Mn.update(),hr.animating&&hr.update(i),ee.setViewport(0,0,tn.clientWidth,tn.clientHeight),ee.setScissorTest(!1),ee.clear(),ee.render(qe,Ne),hr.render(ee),Fe.render(qe,Ne)}Qc();ys();Wa();Kc();function t0(){const i=t=>{const e=document.createElement("div");return e.className="dim-label",e.textContent=t,new A_(e)};return{width:i(""),height:i(""),depth:i("")}}function e0(){const i=new ri(1e4,1e4,1,1),t=new Sn({transparent:!0,depthWrite:!1,uniforms:{minorColor:{value:new Ht(8030102)},majorColor:{value:new Ht(6056569)},minorSpacing:{value:5},majorSpacing:{value:25},fadeDistance:{value:220}},vertexShader:`
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
    `}),e=new _e(i,t);return e.rotation.x=-Math.PI/2,e.position.y=0,e}function xr(){gn.traverse(m=>{m.geometry&&m.geometry.dispose(),m.material&&m.material.dispose()}),gn.clear();const i=Math.max(.4,Math.min(at.width,at.height)*.03),t=new ka(i*.4,i,12),e=.02,n=at.width/2,r=at.depth/2,s=0,o=new X(-n,s,r+e).add(Pn.width),a=new X(n,s,r+e).add(Pn.width),l=new X(n+e,s,r).add(Pn.height),c=new X(n+e,at.height+s,r).add(Pn.height),u=new X(n,at.height+s+e,-r).add(Pn.depth),d=new X(n,at.height+s+e,r).add(Pn.depth);ur.width=ca(o,a,t),ur.height=ca(l,c,t),ur.depth=ca(u,d,t),xe.width.element.textContent=`${at.width} in`,xe.height.element.textContent=`${at.height} in`,xe.depth.element.textContent=`${at.depth} in`,xe.width.position.copy(o).lerp(a,.5).add(new X(0,.6,0)),xe.height.position.copy(l).lerp(c,.5).add(new X(.6,0,0)),xe.depth.position.copy(u).lerp(d,.5).add(new X(.6,.6,0)),gn.add(xe.width),gn.add(xe.height),gn.add(xe.depth),eu()}xr();const n0={width:new X(0,0,1),height:new X(1,0,0),depth:new X(0,1,0)},i0=14;function r0(i){if($n)return;const t=xe[i];if(!t)return;const e=t.element;$n=i,e.contentEditable="true",e.classList.add("is-editing"),e.focus();const n=window.getSelection(),r=document.createRange();r.selectNodeContents(e),n.removeAllRanges(),n.addRange(r)}function la(i){if(!$n)return;const t=$n,e=xe[t],n=e==null?void 0:e.element;n&&(i&&s0(t,n.textContent||""),n.contentEditable="false",n.classList.remove("is-editing")),$n=null}function s0(i,t){const e=String(t).toLowerCase().replace(/[^0-9.]/g,""),n=Number(e);if(!Number.isFinite(n)){vr(),xr();return}i==="width"?(at.width=On(n,at.width,1),si.value=at.width.toFixed(2)):i==="height"?(at.height=On(n,at.height,1,35),ai.value=at.height.toFixed(2)):i==="depth"&&(at.depth=On(n,at.depth,.1,1),Xi.value=at.depth.toFixed(2)),qi(),Ue(),vr(),xr()}function a0(i){const t=ee.domElement.getBoundingClientRect(),e=i.position.clone().project(Ne);return{x:(e.x*.5+.5)*t.width,y:(-e.y*.5+.5)*t.height}}function tu(i){const t=ee.domElement.getBoundingClientRect(),e=i.clientX-t.left,n=i.clientY-t.top,r={width:xe.width,height:xe.height,depth:xe.depth};let s=null,o=1/0;return Object.entries(r).forEach(([a,l])=>{const c=a0(l),u=c.x-e,d=c.y-n,m=Math.hypot(u,d);m<i0&&m<o&&(s=a,o=m)}),s}function jl(i){const t=ee.domElement.getBoundingClientRect(),e=i.clone().project(Ne);return{x:(e.x*.5+.5)*t.width,y:(-e.y*.5+.5)*t.height}}function o0(i,t,e,n,r,s){const o=r-e,a=s-n,l=i-e,c=t-n,u=o*o+a*a||1,d=Math.max(0,Math.min(1,(l*o+c*a)/u)),m=e+o*d,p=n+a*d,_=i-m,g=t-p;return Math.hypot(_,g)}function l0(i){const t=ee.domElement.getBoundingClientRect(),e=i.clientX-t.left,n=i.clientY-t.top,r=tu(i);let s=r,o=r?0:1/0;const a=8;return["width","height","depth"].forEach(l=>{const c=ur[l];if(!(c!=null&&c.start)||!(c!=null&&c.end))return;const u=jl(c.start),d=jl(c.end),m=o0(e,n,u.x,u.y,d.x,d.y);m<a&&m<o&&(s=l,o=m)}),s}function eu(){["width","height","depth"].forEach(i=>{const t=ur[i];if(!(t!=null&&t.line)||!(t!=null&&t.coneA)||!(t!=null&&t.coneB))return;const e=fs.active===i?Z_:Aa;t.line.material.color.copy(e),t.coneA.material.color.copy(e),t.coneB.material.color.copy(e),xe[i].element.classList.toggle("is-hover",fs.active===i)})}function nu(i){if(Ie.active)return;const t=l0(i);t!==fs.active&&(fs.active=t,eu())}function iu(i){if($n)return!1;const t=tu(i);if(!t)return!1;const e=ee.domElement.getBoundingClientRect();return Ie.active=t,Ie.startX=i.clientX-e.left,Ie.startY=i.clientY-e.top,Ie.startOffset.copy(Pn[t]),Mn.enabled=!1,!0}function c0(i){if(!Ie.active)return;const t=ee.domElement.getBoundingClientRect(),e=i.clientX-t.left-Ie.startX,n=i.clientY-t.top-Ie.startY,r=xe[Ie.active],s=Ne.position.distanceTo(r.position),o=2*Math.tan(uc.degToRad(Ne.fov*.5))*s/t.height,a=new X(1,0,0).applyQuaternion(Ne.quaternion),l=new X(0,1,0).applyQuaternion(Ne.quaternion),c=a.multiplyScalar(e*o).add(l.multiplyScalar(-n*o)),u=n0[Ie.active],d=u.clone().multiplyScalar(c.dot(u));Pn[Ie.active].copy(Ie.startOffset).add(d),xr()}function ru(){Ie.active&&(Ie.active=null,Mn.enabled=!0)}window.addEventListener("pointermove",i=>{c0(i),nu(i)});window.addEventListener("pointerup",i=>{ru(),nu(i)});window.addEventListener("blur",()=>{ru()});["width","height","depth"].forEach(i=>{const t=xe[i].element;t.addEventListener("dblclick",e=>{e.preventDefault(),e.stopPropagation(),r0(i)}),t.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),la(!0)),e.key==="Escape"&&(e.preventDefault(),la(!1))}),t.addEventListener("blur",()=>{la(!0)})});function Zl(i){Xc.disabled=!i,qc.disabled=!i}function u0(){return at.images.slice(0,at.imageCount).map(i=>({image:i.image,rotation:i.rotation,margin:i.margin}))}function h0(){return at.images.slice(0,at.imageCount).map(i=>i.file).filter(Boolean)}function su(){const i=at.images.find((t,e)=>e<at.imageCount&&t.image);return(i==null?void 0:i.image)??null}function Wa(){Fi.forEach((i,t)=>{t<at.imageCount?i.classList.remove("hidden"):i.classList.add("hidden")}),Wc.disabled=at.imageCount>=4}function f0(i){const t=Math.min(4,Math.max(1,i));if(t!==at.imageCount){if(t<at.imageCount)for(let e=t;e<at.imageCount;e+=1){const n=at.images[e];n!=null&&n.image&&(n.image=null,n.file=null),Ee[e]&&(URL.revokeObjectURL(Ee[e]),Ee[e]=null);const r=Fi[e];if(r){const s=r.querySelector(".image-input");s&&(s.value="")}}at.imageCount=t,Wa(),Ue()}}function d0(i){var r,s,o,a;if(at.imageCount<=1)return;for(let l=i;l<at.imageCount-1;l+=1){at.images[l]={...at.images[l+1],margin:{...at.images[l+1].margin}};const c=Fi[l+1],u=Fi[l];if(c&&u){const d=u.querySelector(".image-input");d&&(d.value="");const m=c.querySelector(".rotation"),p=u.querySelector(".rotation");m&&p&&(p.value=m.value);const _={left:((r=c.querySelector(".margin-left"))==null?void 0:r.value)??0,right:((s=c.querySelector(".margin-right"))==null?void 0:s.value)??0,top:((o=c.querySelector(".margin-top"))==null?void 0:o.value)??0,bottom:((a=c.querySelector(".margin-bottom"))==null?void 0:a.value)??0},g={left:u.querySelector(".margin-left"),right:u.querySelector(".margin-right"),top:u.querySelector(".margin-top"),bottom:u.querySelector(".margin-bottom")};g.left&&(g.left.value=_.left),g.right&&(g.right.value=_.right),g.top&&(g.top.value=_.top),g.bottom&&(g.bottom.value=_.bottom)}}const t=at.imageCount-1,e=at.images[t];e!=null&&e.image&&(e.image=null,e.file=null),Ee[t]&&(URL.revokeObjectURL(Ee[t]),Ee[t]=null),at.imageCount-=1;const n=Fi[at.imageCount];if(n){const l=n.querySelector(".image-input");l&&(l.value="")}Wa(),Ue()}function au(){const i=Math.max(1,at.imageCount);let t=1,e=i;return at.layout==="vertical"?(t=i,e=1):at.layout==="grid"&&(t=2,e=2),{rows:t,cols:e,count:i}}function Bi(i){if(!(i!=null&&i.image))return null;const e=Number(i.rotation||0)%360%180!==0,n=e?i.image.height:i.image.width,r=e?i.image.width:i.image.height;return!n||!r?null:n/r}function _n(i){var e;const t=((e=at.images[i])==null?void 0:e.margin)??{};return{left:Math.max(0,t.left??0),right:Math.max(0,t.right??0),top:Math.max(0,t.top??0),bottom:Math.max(0,t.bottom??0)}}function p0(){const i=at.images.slice(0,at.imageCount).filter(s=>s.image);if(i.length===0)return at.height;if(at.layout==="horizontal"){const s=i.reduce((c,u)=>c+(Bi(u)??0),0),o=i.reduce((c,u)=>{const d=_n(at.images.indexOf(u));return c+d.left+d.right},0),a=i.reduce((c,u)=>{const d=_n(at.images.indexOf(u));return Math.max(c,d.top+d.bottom)},0),l=(at.width-o)/Math.max(.001,s);return Math.max(1,l+a)}if(at.layout==="vertical"){let s=0;return i.forEach(o=>{const a=at.images.indexOf(o),l=_n(a),c=Bi(o)??.001,u=Math.max(.01,at.width-l.left-l.right);s+=u/c+l.top+l.bottom}),Math.max(1,s)}const{rows:t,cols:e}=au(),n=at.width/e;let r=0;return at.images.slice(0,at.imageCount).forEach((s,o)=>{const a=Bi(s);if(!a)return;const l=_n(o),u=Math.max(.01,n-l.left-l.right)/a+l.top+l.bottom;r=Math.max(r,u)}),Math.max(1,r*t)}function m0(){const i=at.images.slice(0,at.imageCount).filter(s=>s.image);if(i.length===0)return at.width;if(at.layout==="horizontal"){const s=i.reduce((c,u)=>c+(Bi(u)??0),0),o=i.reduce((c,u)=>{const d=_n(at.images.indexOf(u));return c+d.left+d.right},0),a=i.reduce((c,u)=>{const d=_n(at.images.indexOf(u));return Math.max(c,d.top+d.bottom)},0),l=at.height-a;return Math.max(1,l*Math.max(.001,s)+o)}if(at.layout==="vertical"){const s=i.reduce((c,u)=>{const d=Bi(u)??.001;return c+(d>0?1/d:0)},0),o=i.reduce((c,u)=>{const d=_n(at.images.indexOf(u));return c+d.top+d.bottom},0),a=i.reduce((c,u)=>{const d=_n(at.images.indexOf(u));return Math.max(c,d.left+d.right)},0),l=(at.height-o)/Math.max(.001,s);return Math.max(1,l+a)}const{rows:t,cols:e}=au(),n=at.height/t;let r=0;return at.images.slice(0,at.imageCount).forEach((s,o)=>{const a=Bi(s);if(!a)return;const l=_n(o),u=Math.max(.01,n-l.top-l.bottom)*a+l.left+l.right;r=Math.max(r,u)}),Math.max(1,r*e)}function ou(){if(!at.chamfer)return 0;const i=Math.max(.001,at.depth*.3),t=Math.min(at.width/2,at.height/2,at.depth/2);return Math.min(i,t)}function Ss(){const i=ou();return{width:Math.max(.01,at.width-i*2),height:Math.max(.01,at.height-i*2)}}function Xa(){if(!at.chamfer){if(!at.screwHoles)return new ii(at.width,at.height,at.depth);const a=Kl({width:at.width,height:at.height,innerW:at.width,innerH:at.height,bevel:0}),l=new hs(a,{depth:at.depth,bevelEnabled:!1,steps:1,curveSegments:24});return l.center(),l}const i=ou(),t=Ss(),e=t.width,n=t.height,r=Kl({width:at.width,height:at.height,innerW:e,innerH:n,bevel:i}),s=Math.max(.01,at.depth-i*2),o=new hs(r,{depth:s,bevelEnabled:!0,bevelSize:i,bevelThickness:i,bevelSegments:1,steps:1,curveSegments:1});return o.center(),o}function Kl({width:i,height:t,innerW:e,innerH:n,bevel:r}){const s=new Oc;return s.moveTo(-e/2,-n/2),s.lineTo(e/2,-n/2),s.lineTo(e/2,n/2),s.lineTo(-e/2,n/2),s.closePath(),g0(s,{width:i,height:t,innerW:e,innerH:n,bevel:r}),s}function g0(i,{width:t,height:e,innerW:n,innerH:r,bevel:s}){if(!at.screwHoles)return;lu({width:t,height:e,innerW:n,innerH:r}).forEach(({x:a,y:l})=>{const c=new Sa;c.absellipse(a,l,_r,_r,0,Math.PI*2,!1,0),i.holes.push(c)})}function lu({width:i,height:t,innerW:e,innerH:n}){if(!at.screwHoles)return[];const r=.01,s=e/2-_r-r,o=n/2-_r-r;if(s<=0||o<=0)return[];const a=i/2-Yl,l=t/2-Yl,c=Math.min(a,s),u=Math.min(l,o);return c<=0||u<=0?[]:[{x:c,y:u},{x:-c,y:u},{x:-c,y:-u},{x:c,y:-u}]}function _0(){const i=Ss(),t=new ri(i.width,i.height),e=new _e(t,Ce);return e.position.set(0,at.height/2,at.depth/2+.01),e}function v0(){if(!Li)return;const i=Ss();Li.geometry.dispose(),Li.geometry=new ri(i.width,i.height),Li.position.set(0,at.height/2,at.depth/2+.01),Li.visible=!0}function ca(i,t,e){const n=new Oa({color:Aa.clone()}),r=new Sr({color:Aa.clone()}),s=new He().setFromPoints([i,t]),o=new Lc(s,n);gn.add(o);const a=new X().subVectors(t,i).normalize(),l=i.distanceTo(t),c=Math.min(l*.06,.6),u=new _e(e,r);u.position.copy(i).add(a.clone().multiplyScalar(c)),u.quaternion.setFromUnitVectors(new X(0,1,0),a.clone().negate()),gn.add(u);const d=new _e(e,r);return d.position.copy(t).add(a.clone().multiplyScalar(-c)),d.quaternion.setFromUnitVectors(new X(0,1,0),a),gn.add(d),{line:o,coneA:u,coneB:d,start:i.clone(),end:t.clone()}}
