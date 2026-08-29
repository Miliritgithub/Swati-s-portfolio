N(o.offset)&&(r=parseInt(o.offset)),o.anchor&&document.querySelectorAll(o.anchor)&&(e=document.querySelectorAll(o.anchor)[0]),n=(0,i.default)(e).top,o.anchorPlacement){case`top-bottom`:break;case`center-bottom`:n+=e.offsetHeight/2;break;case`bottom-bottom`:n+=e.offsetHeight;break;case`top-center`:n+=a/2;break;case`bottom-center`:n+=a/2+e.offsetHeight;break;case`center-center`:n+=a/2+e.offsetHeight/2;break;case`top-top`:n+=a;break;case`bottom-top`:n+=e.offsetHeight+a;break;case`center-top`:n+=e.offsetHeight/2+a}return o.anchorPlacement||o.offset||isNaN(t)||(r=t),n+r}},function(e,t){Object.defineProperty(t,`__esModule`,{value:!0
}),t.default=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-(e.tagName==`BODY`?0:e.scrollLeft),n+=e.offsetTop-(e.tagName==`BODY`?0:e.scrollTop),e=e.offsetParent;return{top:n,left:t}}},function(e,t){Object.defineProperty(t,`__esModule`,{value:!0
}),t.default=function(e){return e||=document.querySelectorAll(`[data-aos]`),Array.prototype.map.call(e,function(e){return{node:e}})}}])})}))(),1),Ii=`/assets/image-1-fYP2o7gg.png`,Li=`/assets/image-2-DS0sMyr7.png`,Ri=`/assets/web1-770H2sSx.png`,zi=`/assets/spydy-DLbFrGCQ.png`,Bi=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);
function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),q=o(((e,t)=>{t.exports=Bi()}))();
function Vi(){let e=
(0,_.useRef)(null),t=
(0,_.useRef)(null),n=
(0,_.useRef)(null),r=
(0,_.useRef)(null),i=
(0,_.useRef)(null),a=
(0,_.useRef)(null),o=
(0,_.useRef)(null),s=
(0,_.useRef)(null),c=
(0,_.useRef)({x:typeof window<`u`?window.innerWidth/2:500,y:typeof window<`u`?window.innerHeight/2:500,alpha:1,size:50}).current,l=
(0,_.useRef)(null),u=
(0,_.useRef)(null),d=
(0,_.useRef)(null),f=
(0,_.useRef)(null);
(0,_.useEffect)(()=>{Fi.default.init({duration:1e3,once:!0,easing:`ease-out-expo`});let e=K.context(()=>{K.timeline({defaults:{ease:`back.out(1.7)`}}).fromTo(a.current.children,{opacity:0,scale:.5
},{opacity:.5,scale:1,duration:2,stagger:.4,ease:`power3.out`}).fromTo(n.current,{x:-100,opacity:0
},{x:0,opacity:1,duration:1.2},`-=1.5`).fromTo(r.current,{x:-150,opacity:0,skewX:-15
},{x:0,opacity:1,skewX:0,duration:1.2},`-=1.0`).fromTo(i.current.children,{y:40,opacity:0
},{y:0,opacity:1,duration:.8,stagger:.15,ease:`back.out(2)`},`-=0.8`),K.to(a.current.children,{rotation:360,duration:120,repeat:-1,ease:`linear`
}),K.to(a.current.children,{scale:1.1,duration:4,yoyo:!0,repeat:-1,ease:`sine.inOut`
}),d.current=K.to(o.current,{x:`-50%`,repeat:-1,duration:15,ease:`none`
}),K.set(s.current,{x:`-50%`
}),f.current=K.to(s.current,{x:`0%`,repeat:-1,duration:20,ease:`none`
}),K.to(`.marquee-text`,{y:-4,yoyo:!0,repeat:-1,duration:.8,ease:`sine.inOut`,stagger:.1})});return()=>e.revert()},[]),
(0,_.useEffect)(()=>{l.current=K.quickTo(c,`x`,{duration:.3,ease:`power4.out`
}),u.current=K.quickTo(c,`y`,{duration:.3,ease:`power4.out`});let e=()=>{if(t.current){let{x:e,y:n,alpha:r,size:i}=c,a=`radial-gradient(circle ${i}px at ${e}px ${n}px, rgba(0,0,0,${r}) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,1) 100%)`;t.current.style.webkitMaskImage=a,t.current.style.maskImage=a}};return K.ticker.add(e),()=>K.ticker.remove(e)},[c]);let p=e=>{l.current(e.clientX),u.current(e.clientY)},m=()=>{K.to(c,{alpha:0,size:700,duration:.8,ease:`elastic.out(1, 0.7)`,overwrite:`auto`})},h=()=>{K.to(c,{alpha:1,size:50,duration:1.2,ease:`power4.inOut`,overwrite:`auto`})},g=()=>{d.current&&f.current&&K.to([d.current,f.current
],{timeScale:.1,duration:.8,ease:`power2.out`})},v=()=>{d.current&&f.current&&K.to([d.current,f.current
],{timeScale:1,duration:.8,ease:`power2.out`})},y=[`FRONTEND DEVELOPMENT`,`UI/UX DESIGN`,`GSAP ANIMATIONS`,`REACT NATIVE`,`FULL STACK ENGINEER`
],b=e=>
(0,q.jsx)(q.Fragment,{children:[...[,,]].map((t,n)=>
(0,q.jsx)(`div`,{className:`flex items-center h-full shrink-0`,children:e.map((e,t)=>
(0,q.jsxs)(_.Fragment,{children:[
(0,q.jsx)(`span`,{className:`marquee-text mx-4 md:mx-6 text-sm md:text-base lg:text-xl font-black uppercase italic tracking-widest whitespace-nowrap shrink-0 drop-shadow-sm`,children:e
}),
(0,q.jsx)(`img`,{src:t%2==0?zi:Ri,alt:`Separator`,className:`mx-4 md:mx-6 h-full w-auto object-cover shrink-0 drop-shadow-md`})]},`${n}-${t}`))},n))});return
(0,q.jsxs)(`main`,{className:`w-full flex flex-col bg-white overflow-hidden`,children:[
(0,q.jsxs)(`section`,{ref:e,className:`relative w-full h-screen overflow-hidden flex items-center justify-center cursor-crosshair`,onMouseMove:p,onMouseEnter:m,onMouseLeave:h,children:[
(0,q.jsx)(`img`,{src:Li,alt:`Bottom Identity Layer`,className:`absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-10`
}),
(0,q.jsx)(`img`,{ref:t,src:Ii,alt:`Top Mask Layer`,className:`absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-20`,style:{WebkitMaskRepeat:`no-repeat`,maskRepeat:`no-repeat`}
}),
(0,q.jsxs)(`div`,{ref:a,className:`absolute inset-0 pointer-events-none z-[25] overflow-hidden`,children:[
(0,q.jsx)(`img`,{src:Ri,alt:`Spider Web Top`,className:`absolute top-0 left-0 w-[400px] h-[400px] object-contain opacity-50 -translate-x-1/4 -translate-y-1/4 mix-blend-multiply`
}),
(0,q.jsx)(`img`,{src:Ri,alt:`Spider Web Bottom`,className:`absolute bottom-0 right-0 w-[500px] h-[500px] object-contain opacity-50 translate-x-1/4 translate-y-1/4 mix-blend-multiply`})]
}),
(0,q.jsxs)(`div`,{className:`absolute top-1/2 -translate-y-1/2 left-6 md:left-12 lg:left-24 z-30 flex flex-col gap-3 pointer-events-none drop-shadow-md max-w-lg w-full`,children:[
(0,q.jsx)(`span`,{ref:n,className:`text-[#a31515] font-bold uppercase text-xs md:text-sm tracking-[0.2em] opacity-0`,children:`Your Friendly Neighborhood Engineer`
}),
(0,q.jsxs)(`h1`,{ref:r,className:`text-gray-900 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none opacity-0 italic uppercase`,style:{textShadow:`4px 4px 0px #ef4444, 7px 7px 0px #a31515`},children:[`SRI`,
(0,q.jsx)(`br`,{
}),`SUSHMITA.`]
}),
(0,q.jsxs)(`div`,{ref:i,className:`flex flex-wrap items-center gap-4 mt-6 pointer-events-auto`,children:[
(0,q.jsx)(`button`,{className:`relative overflow-hidden bg-[#a31515] hover:bg-[#7a0f0f] text-white px-8 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(163,21,21,0.4)] cursor-pointer uppercase border border-[#a31515]`,children:`Explore Projects`
}),
(0,q.jsxs)(`a`,{href:`/sde_resume.pdf`,download:!0,className:`flex items-center gap-2 text-white bg-gray-900 hover:bg-black px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] uppercase text-sm group`,children:[
(0,q.jsx)(`svg`,{className:`w-4 h-4 fill-current transition-transform group-hover:scale-110`,viewBox:`0 0 24 24`,children:
(0,q.jsx)(`path`,{d:`M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z`})
}),`sde_resume.pdf`]})]})]})]
}),
(0,q.jsxs)(`section`,{className:`relative w-full h-[20vh] md:h-[30vh] bg-white overflow-hidden flex items-center justify-center z-40`,onMouseEnter:g,onMouseLeave:v,children:[
(0,q.jsx)(`div`,{className:`absolute w-[110vw] h-12 md:h-16 lg:h-20 bg-[#a31515] text-white border-y-[3px] border-black rotate-[4deg] -translate-y-4 md:-translate-y-6 shadow-[0_10px_20px_rgba(0,0,0,0.4)] z-20 flex items-center overflow-hidden scale-105`,children:
(0,q.jsx)(`div`,{ref:o,className:`flex items-center h-full w-max`,children:b(y)})
}),
(0,q.jsx)(`div`,{className:`absolute w-[110vw] h-12 md:h-16 lg:h-20 bg-[#111111] text-[#a31515] border-y-[3px] border-[#a31515] rotate-[-4deg] translate-y-4 md:translate-y-6 shadow-[0_5px_15px_rgba(0,0,0,0.5)] z-10 flex items-center overflow-hidden scale-105`,children:
(0,q.jsx)(`div`,{ref:s,className:`flex items-center h-full w-max`,children:b(y)})})]})]})}
function Hi(){let[e,t]=
(0,_.useState)(!1);return
(0,_.useEffect)(()=>{let e=()=>{t(window.scrollY>50)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),
(0,q.jsx)(`nav`,{className:`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${e?`bg-black/90 backdrop-blur-md border-red-900/50 py-3 shadow-[0_4px_30px_rgba(220,38,38,0.15)]`:`bg-transparent border-transparent py-5`}`,children:
(0,q.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between`,children:[
(0,q.jsxs)(`a`,{href:`/`,className:`text-white text-2xl font-black tracking-tighter italic uppercase group flex items-center`,children:[
(0,q.jsx)(`span`,{className:`text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]`,children:`S`
}),
(0,q.jsx)(`span`,{className:`group-hover:text-red-500 transition-colors duration-300`,children:`USHMITA.`})]
}),
(0,q.jsx)(`div`,{className:`hidden md:flex items-center gap-8`,children:[`About`,`Skills`,`Projects`,`Contact`].map(e=>
(0,q.jsxs)(`a`,{href:`#${e.toLowerCase()}`,className:`relative text-xs md:text-sm font-bold text-gray-400 uppercase tracking-[0.15em] transition-colors duration-300 hover:text-white group`,children:[e,
(0,q.jsx)(`span`,{className:`absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(220,38,38,0.8)]`})]},e))
}),
(0,q.jsx)(`button`,{className:`md:hidden text-gray-400 hover:text-red-600 transition-colors`,children:
(0,q.jsx)(`svg`,{className:`w-7 h-7`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:
(0,q.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M4 6h16M4 12h16M4 18h16`})})})]})})}
function Ui(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}
function Wi(e,t,n){return t&&Ui(e.prototype,t),n&&Ui(e,n),e}var Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia=function(){return Gi||typeof window<`u`&&(Gi=window.gsap)&&Gi.registerPlugin&&Gi},aa=1,oa=[
],J=[
],sa=[
],ca=Date.now,la=function(e,t){return t},ua=function(){var e=$i.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,J),r.push.apply(r,sa),J=n,sa=r,la=function(e,n){return t[e](n)}},da=function(e,t){return~sa.indexOf(e)&&sa[sa.indexOf(e)+1][t]},fa=function(e){return!!~ea.indexOf(e)},pa=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},ma=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},ha=`scrollLeft`,ga=`scrollTop`,_a=function(){return ta&&ta.isPressed||J.cache++},va=function(e,t){var n=
function n(r){if(r||r===0){aa&&(qi.history.scrollRestoration=`manual`);var i=ta&&ta.isPressed;r=n.v=Math.round(r)||(ta&&ta.iOS?1:0),e(r),n.cacheID=J.cache,i&&la(`ss`,r)}else (t||J.cache!==n.cacheID||la(`ref`))&&(n.cacheID=J.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},ya={s:ha,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:va(function(e){return arguments.length?qi.scrollTo(e,ba.sc()):qi.pageXOffset||Ji[ha]||Yi[ha]||Xi[ha]||0})},ba={s:ga,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:ya,sc:va(function(e){return arguments.length?qi.scrollTo(ya.sc(),e):qi.pageYOffset||Ji[ga]||Yi[ga]||Xi[ga]||0})},xa=function(e,t){return(t&&t._ctx&&t._ctx.selector||Gi.utils.toArray)(e)[0]||(typeof e==`string`&&Gi.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},Sa=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ca=function(e,t){var n=t.s,r=t.sc;fa(e)&&(e=Ji.scrollingElement||Yi);var i=J.indexOf(e),a=r===ba.sc?1:2;!~i&&(i=J.push(e)-1),J[i+a]||pa(e,`scroll`,_a);var o=J[i+a
],s=o||(J[i+a]=va(da(e,n),!0)||(fa(e)?r:va(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=Gi.getProperty(e,`scrollBehavior`)===`smooth`),s},wa=function(e,t,n){var r=e,i=e,a=ca(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=ca();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=ca();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},Ta=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ea=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Da=function(){$i=Gi.core.globals().ScrollTrigger,$i&&$i.core&&ua()},Oa=function(e){return Gi=e||ia(),!Ki&&Gi&&typeof document<`u`&&document.body&&(qi=window,Ji=document,Yi=Ji.documentElement,Xi=Ji.body,ea=[qi,Ji,Yi,Xi
],Gi.utils.clamp,ra=Gi.core.context||function(){},Qi=`onpointerenter`in Xi?`pointer`:`mouse`,Zi=ka.isTouch=qi.matchMedia&&qi.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in qi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,na=ka.eventTypes=(`ontouchstart`in Yi?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in Yi?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return aa=0},500),Ki=1),$i||Da(),Ki};ya.op=ba,J.cache=0;var ka=function(){
function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){Ki||Oa(Gi)||console.warn(`Please gsap.registerPlugin(Observer)`),$i||Da();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,ee=e.onGestureEnd,N=e.onWheel,P=e.onEnable,F=e.onDisable,I=e.onClick,L=e.scrollSpeed,te=e.capture,ne=e.allowClicks,R=e.lockAxis,re=e.onLockAxis;this.target=i=xa(i)||Yi,this.vars=e,u&&=Gi.utils.toArray(u),t||=1e-9,n||=0,d||=1,L||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(qi.getComputedStyle(Xi).lineHeight)||22;var z,ie,ae,oe,se,ce,le,B=this,ue=0,de=0,V=e.passive||!s&&e.passive!==!1,fe=Ca(i,ya),pe=Ca(i,ba),me=fe(),he=pe(),ge=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&na[0]===`pointerdown`,_e=fa(i),H=i.ownerDocument||Ji,ve=[0,0,0
],ye=[0,0,0
],be=0,xe=function(){return be=ca()},Se=function(e,t){return(B.event=e)&&u&&Sa(e.target,u)||t&&ge&&e.pointerType!==`touch`||A&&A(e,t)},Ce=function(){B._vx.reset(),B._vy.reset(),ie.pause(),c&&c(B)},we=function(){var e=B.deltaX=Ea(ve),n=B.deltaY=Ea(ye),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(B,e,n,ve,ye),r&&(v&&B.deltaX>0&&v(B),y&&B.deltaX<0&&y(B),S&&S(B),T&&B.deltaX<0!=ue<0&&T(B),ue=B.deltaX,ve[0]=ve[1]=ve[2]=0),i&&(x&&B.deltaY>0&&x(B),b&&B.deltaY<0&&b(B),C&&C(B),E&&B.deltaY<0!=de<0&&E(B),de=B.deltaY,ye[0]=ye[1]=ye[2]=0),(oe||ae)&&(k&&k(B),ae&&=(p&&ae===1&&p(B),h&&h(B),0),oe=!1),ce&&!(ce=!1)&&re&&re(B),se&&=(N(B),!1),z=0},Te=function(e,t,n){ve[n]+=e,ye[n]+=t,B._vx.update(e),B._vy.update(t),o?z||=requestAnimationFrame(we):we()},Ee=function(e,t){R&&!le&&(B.axis=le=Math.abs(e)>Math.abs(t)?`x`:`y`,ce=!0),le!==`y`&&(ve[2]+=e,B._vx.update(e,!0)),le!==`x`&&(ye[2]+=t,B._vy.update(t,!0)),o?z||=requestAnimationFrame(we):we()},De=function(e){if(!Se(e,1)){e=Ta(e,s);var t=e.clientX,r=e.clientY,i=t-B.x,a=r-B.y,o=B.isDragging;B.x=t,B.y=r,(o||(i||a)&&(Math.abs(B.startX-t)>=n||Math.abs(B.startY-r)>=n))&&(ae||=o?2:1,o||(B.isDragging=!0),Ee(i,a))}},Oe=B.onPress=function(e){Se(e,1)||e&&e.button||(B.axis=le=null,ie.pause(),B.isPressed=!0,e=Ta(e),ue=de=0,B.startX=B.x=e.clientX,B.startY=B.y=e.clientY,B._vx.reset(),B._vy.reset(),pa(j?i:H,na[1
],De,V,!0),B.deltaX=B.deltaY=0,g&&g(B))},ke=B.onRelease=function(e){if(!Se(e,1)){ma(j?i:H,na[1
],De,!0);var t=!isNaN(B.y-B.startY),n=B.isDragging,r=n&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),a=Ta(e);!r&&t&&(B._vx.reset(),B._vy.reset(),s&&ne&&Gi.delayedCall(.08,function(){if(ca()-be>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(H.createEvent){var t=H.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,qi,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,c&&n&&!j&&ie.restart(!0),ae&&we(),m&&n&&m(B),_&&_(B,r)}},U=function(e){return e.touches&&e.touches.length>1&&(B.isGesturing=!0)&&M(e,B.isDragging)},Ae=function(){return(B.isGesturing=!1)||ee(B)},je=function(e){if(!Se(e)){var t=fe(),n=pe();Te((t-me)*L,(n-he)*L,1),me=t,he=n,c&&ie.restart(!0)}},Me=function(e){if(!Se(e)){e=Ta(e,s),N&&(se=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?qi.innerHeight:1)*d;Te(e.deltaX*t,e.deltaY*t,0),c&&!j&&ie.restart(!0)}},Ne=function(e){if(!Se(e)){var t=e.clientX,n=e.clientY,r=t-B.x,i=n-B.y;B.x=t,B.y=n,oe=!0,c&&ie.restart(!0),(r||i)&&Ee(r,i)}},Pe=function(e){B.event=e,D(B)},Fe=function(e){B.event=e,O(B)},Ie=function(e){return Se(e)||Ta(e,s)&&I(B)};ie=B._dc=Gi.delayedCall(l||.25,Ce).pause(),B.deltaX=B.deltaY=0,B._vx=wa(0,50,!0),B._vy=wa(0,50,!0),B.scrollX=fe,B.scrollY=pe,B.isDragging=B.isGesturing=B.isPressed=!1,ra(this),B.enable=function(e){return B.isEnabled||(pa(_e?H:i,`scroll`,_a),r.indexOf(`scroll`)>=0&&pa(_e?H:i,`scroll`,je,V,te),r.indexOf(`wheel`)>=0&&pa(i,`wheel`,Me,V,te),(r.indexOf(`touch`)>=0&&Zi||r.indexOf(`pointer`)>=0)&&(pa(i,na[0
],Oe,V,te),pa(H,na[2
],ke),pa(H,na[3
],ke),ne&&pa(i,`click`,xe,!0,!0),I&&pa(i,`click`,Ie),M&&pa(H,`gesturestart`,U),ee&&pa(H,`gestureend`,Ae),D&&pa(i,Qi+`enter`,Pe),O&&pa(i,Qi+`leave`,Fe),k&&pa(i,Qi+`move`,Ne)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=oe=ae=!1,B._vx.reset(),B._vy.reset(),me=fe(),he=pe(),e&&e.type&&Oe(e),P&&P(B)),B},B.disable=function(){B.isEnabled&&(oa.filter(function(e){return e!==B&&fa(e.target)}).length||ma(_e?H:i,`scroll`,_a),B.isPressed&&(B._vx.reset(),B._vy.reset(),ma(j?i:H,na[1
],De,!0)),ma(_e?H:i,`scroll`,je,te),ma(i,`wheel`,Me,te),ma(i,na[0
],Oe,te),ma(H,na[2
],ke),ma(H,na[3
],ke),ma(i,`click`,xe,!0),ma(i,`click`,Ie),ma(H,`gesturestart`,U),ma(H,`gestureend`,Ae),ma(i,Qi+`enter`,Pe),ma(i,Qi+`leave`,Fe),ma(i,Qi+`move`,Ne),B.isEnabled=B.isPressed=B.isDragging=!1,F&&F(B))},B.kill=B.revert=function(){B.disable();var e=oa.indexOf(B);e>=0&&oa.splice(e,1),ta===B&&(ta=0)},oa.push(B),j&&fa(i)&&(ta=B),B.enable(f)},Wi(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}
},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}();ka.version=`3.15.0`,ka.create=function(e){return new ka(e)},ka.register=Oa,ka.getAll=function(){return oa.slice()},ka.getById=function(e){return oa.filter(function(t){return t.vars.id===e})[0]},ia()&&Gi.registerPlugin(ka);var Y,Aa,X,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,Z,no,ro,io,ao,oo,so=1,co=Date.now,lo=co(),uo=0,fo=0,po=function(e,t,n){var r=ko(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},mo=function(e,t){return t&&(!ko(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},ho=
function e(){return fo&&requestAnimationFrame(e)},go=function(){return Va=1},_o=function(){return Va=0},vo=function(e){return e},yo=function(e){return Math.round(e*1e5)/1e5||0},bo=function(){return typeof window<`u`},xo=function(){return Y||bo()&&(Y=window.gsap)&&Y.registerPlugin&&Y},So=function(e){return!!~Pa.indexOf(e)},Co=function(e){return(e===`Height`?ro:X[`inner`+e])||Ma[`client`+e]||Na[`client`+e]},wo=function(e){return da(e,`getBoundingClientRect`)||(So(e)?function(){return Xs.width=X.innerWidth,Xs.height=ro,Xs}:function(){return es(e)})},To=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=da(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?Co(i):e[`client`+i])||0}},Eo=function(e,t){return!t||~sa.indexOf(e)?wo(e):function(){return Xs}},Do=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=da(e,n))?a()-wo(e)()[i]:So(e)?(Ma[n]||Na[n])-Co(r):e[n]-e[`offset`+r])},Oo=function(e,t){for(var n=0;n<Ka.length;n+=3)(!t||~t.indexOf(Ka[n+1]))&&e(Ka[n
],Ka[n+1
],Ka[n+2])},ko=function(e){return typeof e==`string`},Ao=function(e){return typeof e==`function`},jo=function(e){return typeof e==`number`},Mo=function(e){return typeof e==`object`},No=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},Po=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},Fo=Math.abs,Io=`left`,Lo=`top`,Ro=`right`,zo=`bottom`,Bo=`width`,Vo=`height`,Ho=`Right`,Uo=`Left`,Wo=`Top`,Go=`Bottom`,Ko=`padding`,qo=`margin`,Jo=`Width`,Yo=`Height`,Xo=`px`,Zo=function(e){return X.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Qo=function(e){var t=Zo(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},$o=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},es=function(e,t){var n=t&&Zo(e)[Ha]!==`matrix(1, 0, 0, 1, 0, 0)`&&Y.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},ts=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},ns=function(e){var t=[
],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},rs=function(e){return function(t){return Y.utils.snap(ns(e),t)}},is=function(e){var t=Y.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}else for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},as=function(e){return function(t,n){return is(ns(e))(t,n.direction)}},os=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},ss=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},cs=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},ls=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},us={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},ds={toggleActions:`play`,anticipatePin:0},fs={top:0,left:0,center:.5,bottom:1,right:1},ps=function(e,t){if(ko(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in fs?fs[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ms=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=ja.createElement(`div`),m=So(n)||da(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?Na:n.tagName===`IFRAME`?n.contentDocument.body:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===ba?Ro:zo)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2
],hs(p,0,r,_),p},hs=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`
],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+Jo]=1,i[`border`+o+Jo]=0,i[n.p]=t+`px`,Y.set(e,i)},Q=[
],gs={},_s,vs=function(){return co()-uo>34&&(_s||=requestAnimationFrame(Vs))},ys=function(){(!Xa||!Xa.isPressed||Xa.startX>Na.clientWidth)&&(J.cache++,Xa?_s||=requestAnimationFrame(Vs):Vs(),uo||Ts(`scrollStart`),uo=co())},bs=function(){$a=X.innerWidth,Qa=X.innerHeight},xs=function(e){J.cache++,(e===!0||!Ba&&!Ya&&!ja.fullscreenElement&&!ja.webkitFullscreenElement&&(!Za||$a!==X.innerWidth||Math.abs(X.innerHeight-Qa)>X.innerHeight*.25))&&Fa.restart(!0)},Ss={},Cs=[
],ws=
function e(){return cs($,`scrollEnd`,e)||Ls(!0)},Ts=function(e){return Ss[e]&&Ss[e].map(function(e){return e()})||Cs},Es=[
],Ds=function(e){for(var t=0;t<Es.length;t+=5)(!e||Es[t+4]&&Es[t+4].query===e)&&(Es[t].style.cssText=Es[t+1
],Es[t].getBBox&&Es[t].setAttribute(`transform`,Es[t+2]||``),Es[t+3].uncache=1)},Os=function(){return J.forEach(function(e){return Ao(e)&&++e.cacheID&&(e.rec=e())})},ks=function(e,t){var n;for(Ua=0;Ua<Q.length;Ua++)n=Q[Ua
],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));io=!0,t&&Ds(t),t||Ts(`revert`)},As=function(e,t){J.cache++,(t||!js)&&J.forEach(function(e){return Ao(e)&&e.cacheID++&&(e.rec=0)
}),ko(e)&&(X.history.scrollRestoration=Z=e)},js,Ms=0,Ns,Ps=function(){if(Ns!==Ms){var e=Ns=Ms;requestAnimationFrame(function(){return e===Ms&&Ls(!0)})}},Fs=function(){Na.appendChild(no),ro=!Xa&&no.offsetHeight||X.innerHeight,Na.removeChild(no)},Is=function(e){return Ia(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},Ls=function(e,t){if(Ma=ja.documentElement,Na=ja.body,Pa=[X,ja,Ma,Na
],uo&&!e&&!io){ss($,`scrollEnd`,ws);return}Fs(),js=$.isRefreshing=!0,io||Os();var n=Ts(`refreshInit`);qa&&$.sort(),t||ks(),J.forEach(function(e){Ao(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))
}),Q.slice(0).forEach(function(e){return e.refresh()
}),io=!1,Q.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}
}),ao=1,Is(!0),Q.forEach(function(e){var t=Do(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)
}),Is(!1),ao=0,n.forEach(function(e){return e&&e.render&&e.render(-1)
}),J.forEach(function(e){Ao(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`
}),e.rec&&e(e.rec))
}),As(Z,1),Fa.pause(),Ms++,js=2,Vs(2),Q.forEach(function(e){return Ao(e.vars.onRefresh)&&e.vars.onRefresh(e)
}),js=$.isRefreshing=!1,Ts(`refresh`)},Rs=0,zs=1,Bs,Vs=function(e){if(e===2||!js&&!io){$.isUpdating=!0,Bs&&Bs.update(0);var t=Q.length,n=co(),r=n-lo>=50,i=t&&Q[0].scroll();if(zs=Rs>i?-1:1,js||(Rs=i),r&&(uo&&!Va&&n-uo>200&&(uo=0,Ts(`scrollEnd`)),Ra=lo,lo=n),zs<0){for(Ua=t;Ua-- >0;)Q[Ua]&&Q[Ua].update(0,r);zs=1}else for(Ua=0;Ua<t;Ua++)Q[Ua]&&Q[Ua].update(0,r);$.isUpdating=!1}_s=0},Hs=[Io,Lo,zo,Ro,qo+Go,qo+Ho,qo+Wo,qo+Uo,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`
],Us=Hs.concat([Bo,Vo,`boxSizing`,`max`+Jo,`max`+Yo,`position`,qo,Ko,Ko+Wo,Ko+Ho,Ko+Go,Ko+Uo]),Ws=function(e,t,n){qs(n);var r=e._gsap;if(r.spacerIsNative)qs(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},Gs=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=Hs.length,a=t.style,o=e.style,s;i--;)s=Hs[i
],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[zo]=o[Ro]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[Bo]=ts(e,ya)+Xo,a[Vo]=ts(e,ba)+Xo,a[Ko]=o[qo]=o[Lo]=o[Io]=`0`,qs(r),o[Bo]=o[`max`+Jo]=n[Bo
],o[Vo]=o[`max`+Yo]=n[Vo
],o[Ko]=n[Ko
],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ks=/([A-Z])/g,qs=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||Y.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1
],i=e[r
],a?t[i]=a:t[i]&&t.removeProperty(i.replace(Ks,`-$1`).toLowerCase())}},Js=function(e){for(var t=Us.length,n=e.style,r=[
],i=0;i<t;i++)r.push(Us[i
],n[Us[i]]);return r.t=e,r},Ys=function(e,t,n){for(var r=[
],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a
],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Xs={left:0,top:0},Zs=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){Ao(e)&&(e=e(s)),ko(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?ps(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),jo(e))f&&(e=Y.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&hs(o,n,r,!0);else{Ao(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=xa(t,s)||Na,y=es(_)||{},(!y||!y.left&&!y.top)&&Zo(_).display===`none`&&(S=_.style.display,_.style.display=`block`,y=es(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=ps(v[0
],y[r.d]),x=ps(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&hs(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,hs(a,C,r,w&&C>20||!w&&(u?Math.max(Na[h
],Ma[h]):a.parentNode[h])<=C+1),u&&(c=es(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+Xo))}return f&&_&&(h=es(_),f.seek(d),g=es(_),f._caScrollDist=h[r.p]-g[r.p
],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},Qs=/(webkit|moz|length|cssText|inset)/i,$s=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===Na){for(a in e._stOrig=i.cssText,o=Zo(e),o)!+a&&!Qs.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;Y.core.getCache(e).uncache=1,t.appendChild(e)}},ec=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},tc=function(e,t,n){var r={};r[t.p]=`+=`+n,Y.set(e,r)},nc=function(e,t){var n=Ca(e,t),r=`_scroll`+t.p2,i=
function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=ec(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){J.cache++,t.tween&&Vs()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=Y.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},ss(e,`wheel`,n.wheelHandler),$.isTouch&&ss(e,`touchmove`,n.wheelHandler),i},$=function(){
function e(t,n){Aa||e.register(Y)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),to(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!fo){this.update=this.refresh=this.kill=vo;return}t=$o(ko(t)||jo(t)||t.nodeType?{trigger:t}:t,ds);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?ya:ba,T=!l&&l!==0,E=xa(t.scroller||X),D=Y.core.getCache(E),O=So(E),k=(`pinType`in t?t.pinType:da(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack
],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:ds.markers,ee=O?0:parseFloat(Zo(E)[`border`+w.p2+Jo])||0,N=this,P=t.onRefreshInit&&function(){return t.onRefreshInit(N)},F=To(E,O,w),I=Eo(E,O),L=0,te=0,ne=0,R=Ca(E,w),re,z,ie,ae,oe,se,ce,le,B,ue,de,V,fe,pe,me,he,ge,_e,H,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,U,Ae,je,Me,Ne,Pe,Fe,Ie;if(N._startClamp=N._endClamp=!1,N._dir=w,m*=45,N.scroller=E,N.scroll=x?x.time.bind(x):R,ae=R(),N.vars=t,n||=t.animation,`refreshPriority`in t&&(qa=1,t.refreshPriority===-9999&&(Bs=N)),D.tweenScroll=D.tweenScroll||{top:nc(E,ba),left:nc(E,ya)},N.tweenTo=re=D.tweenScroll[w.p
],N.scrubDuration=function(e){Ae=jo(e)&&e,Ae?U?U.duration(e):U=Y.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:Ae,paused:!0,onComplete:function(){return h&&h(N)}}):(U&&U.progress(1).kill(),U=0)},n&&(n.vars.lazy=!1,n._initted&&!N.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),N.animation=n.pause(),n.scrollTrigger=N,N.scrubDuration(l),Oe=0,o||=n.vars.id),v&&((!Mo(v)||v.push)&&(v={snapTo:v
}),`scrollBehavior`in Na.style&&Y.set(O?[Na,Ma]:E,{scrollBehavior:`auto`
}),J.forEach(function(e){return Ao(e)&&e.target===(O?ja.scrollingElement||Ma:E)&&(e.smooth=!1)
}),ie=Ao(v.snapTo)?v.snapTo:v.snapTo===`labels`?rs(n):v.snapTo===`labelsDirectional`?as(n):v.directional===!1?Y.utils.snap(v.snapTo):function(e,t){return is(v.snapTo)(e,co()-te<500?0:t.direction)},je=v.duration||{min:.1,max:2},je=Mo(je)?La(je.min,je.max):La(je,je),Me=Y.delayedCall(v.delay||Ae/2||.1,function(){var e=R(),t=co()-te<500,r=re.tween;if((t||Math.abs(N.getVelocity())<10)&&!r&&!Va&&L!==e){var i=(e-se)/pe,a=n&&!T?n.totalProgress():i,o=t?0:(a-ke)/(co()-Ra)*1e3||0,s=Y.utils.clamp(-i,1-i,Fo(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=ie(c,N),jo(l)||(l=c),u=Math.max(0,Math.round(se+l*pe)),e<=ce&&e>=se&&u!==e){if(r&&!r._initted&&r.data<=Fo(u-e))return;v.inertia===!1&&(s=l-i),re(u,{duration:je(Fo(Math.max(Fo(c-a),Fo(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:Fo(u-e),onInterrupt:function(){return Me.restart(!0)&&p&&Po(N,p)},onComplete:function(){N.update(),L=R(),n&&!T&&(U?U.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),Oe=ke=n&&!T?n.totalProgress():N.progress,g&&g(N),m&&Po(N,m)}},e,s*pe,u-e-s*pe),f&&Po(N,f,re.tween)}}else N.isActive&&L!==e&&Me.restart(!0)}).pause()),o&&(gs[o]=N),u=N.trigger=xa(u||d!==!0&&d),Ie=u&&u._gsap&&u._gsap.stRevert,Ie&&=Ie(N),d=d===!0?u:xa(d),ko(a)&&(a={targets:u,className:a
}),d&&(f===!1||f===qo||(f=!f&&d.parentNode&&d.parentNode.style&&Zo(d.parentNode).display===`flex`?!1:Ko),N.pin=d,z=Y.core.getCache(d),z.spacer?me=z.pinState:(b&&(b=xa(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),z.spacerIsNative=!!b,b&&(z.spacerState=Js(b))),z.spacer=_e=b||ja.createElement(`div`),_e.classList.add(`pin-spacer`),o&&_e.classList.add(`pin-spacer-`+o),z.pinState=me=Js(d)),t.force3D!==!1&&Y.set(d,{force3D:!0
}),N.spacer=_e=z.spacer,De=Zo(d),Se=De[f+w.os2
],ve=Y.getProperty(d),ye=Y.quickSetter(d,w.a,Xo),Gs(d,_e,De),ge=Js(d)),M){V=Mo(M)?$o(M,us):us,ue=ms(`scroller-start`,o,E,w,V,0),de=ms(`scroller-end`,o,E,w,V,0,ue),H=ue[`offset`+w.op.d2];var Le=xa(da(E,`content`)||E);le=this.markerStart=ms(`start`,o,Le,w,V,H,0,x),B=this.markerEnd=ms(`end`,o,Le,w,V,H,0,x),x&&(Fe=Y.quickSetter([le,B
],w.a,Xo)),!k&&!(sa.length&&da(E,`fixedMarkers`)===!0)&&(Qo(O?Na:E),Y.set([ue,de
],{force3D:!0
}),we=Y.quickSetter(ue,w.a,Xo),Ee=Y.quickSetter(de,w.a,Xo))}if(x){var Re=x.vars.onUpdate,ze=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){N.update(0,0,1),Re&&Re.apply(x,ze||[])})}if(N.previous=function(){return Q[Q.indexOf(N)-1]},N.next=function(){return Q[Q.indexOf(N)+1]},N.revert=function(e,t){if(!t)return N.kill(!0);var r=e!==!1||!N.enabled,i=Ba;r!==N.isReverted&&(r&&(Ne=Math.max(R(),N.scroll.rec||0),ne=N.progress,Pe=n&&n.progress()),le&&[le,B,ue,de].forEach(function(e){return e.style.display=r?`none`:`block`
}),r&&(Ba=N,N.update(r)),d&&(!y||!N.isActive)&&(r?Ws(d,_e,me):Gs(d,_e,Zo(d),Ce)),r||N.update(r),Ba=i,N.isReverted=r)},N.refresh=function(r,i,a,o){if(!((Ba||!N.enabled)&&!i)){if(d&&r&&uo){ss(e,`scrollEnd`,ws);return}!js&&P&&P(N),Ba=N,re.tween&&!a&&(re.tween.kill(),re.tween=0),U&&U.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var s=F(),l=I(),m=x?x.duration():Do(E,w),h=pe<=.01||!pe,g=0,_=o||0,v=Mo(a)?a.end:t.end,b=t.endTrigger||u,S=Mo(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=N.pinnedContainer=t.pinnedContainer&&xa(t.pinnedContainer,N),D=u&&Math.max(0,Q.indexOf(N))||0,A=D,j,z,ie,V,H,ye,Se,we,Ee,De,Oe,ke,Ae;for(M&&Mo(a)&&(ke=Y.getProperty(ue,w.p),Ae=Y.getProperty(de,w.p));A-- >0;)ye=Q[A
],ye.end||ye.refresh(0,1)||(Ba=N),Se=ye.pin,Se&&(Se===u||Se===d||Se===C)&&!ye.isReverted&&(De||=[
],De.unshift(ye),ye.revert(!0,!0)),ye!==Q[A]&&(D--,A--);for(Ao(S)&&(S=S(N)),S=po(S,`start`,N),se=Zs(S,u,s,w,R(),le,ue,N,l,ee,k,m,x,N._startClamp&&`_startClamp`)||(d?-.001:0),Ao(v)&&(v=v(N)),ko(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(ko(S)?S.split(` `)[0]:``)+v:(g=ps(v.substr(2),s),v=ko(S)?S:(x?Y.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,se):se)+g,b=u)),v=po(v,`end`,N),ce=Math.max(se,Zs(v||(b?`100% 0`:m),b,s,w,R()+g,B,de,N,l,ee,k,m,x,N._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)ye=Q[A]||{},Se=ye.pin,Se&&ye.start-ye._pinPush<=se&&!x&&ye.end>0&&(j=ye.end-(N._startClamp?Math.max(0,ye.start):ye.start),(Se===u&&ye.start-ye._pinPush<se||Se===C)&&isNaN(S)&&(g+=j*(1-ye.progress)),Se===d&&(_+=j));if(se+=g,ce+=g,N._startClamp&&(N._startClamp+=g),N._endClamp&&!js&&(N._endClamp=ce||-.001,ce=Math.min(ce,Do(E,w))),pe=ce-se||(se-=.01)&&.001,h&&(ne=Y.utils.clamp(0,1,Y.utils.normalize(se,ce,Ne))),N._pinPush=_,le&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+R()),Y.set([le,B
],j)),d&&!(ao&&N.end>=Do(E,w)))j=Zo(d),V=w===ba,ie=R(),be=parseFloat(ve(w.a))+_,!m&&ce>1&&(Oe=(O?ja.scrollingElement||Ma:E).style,Oe={style:Oe,value:Oe[`overflow`+w.a.toUpperCase()]},O&&Zo(Na)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(Oe.style[`overflow`+w.a.toUpperCase()]=`scroll`)),Gs(d,_e,j),ge=Js(d),z=es(d,!0),we=k&&Ca(E,V?ya:ba)(),f?(Ce=[f+w.os2,pe+_+Xo
],Ce.t=_e,A=f===Ko?ts(d,w)+pe+_:0,A&&(Ce.push(w.d,A+Xo),_e.style.flexBasis!==`auto`&&(_e.style.flexBasis=A+Xo)),qs(Ce),C&&Q.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)
}),k&&R(Ne)):(A=ts(d,w),A&&_e.style.flexBasis!==`auto`&&(_e.style.flexBasis=A+Xo)),k&&(H={top:z.top+(V?ie-se:we)+Xo,left:z.left+(V?we:ie-se)+Xo,boxSizing:`border-box`,position:`fixed`},H[Bo]=H[`max`+Jo]=Math.ceil(z.width)+Xo,H[Vo]=H[`max`+Yo]=Math.ceil(z.height)+Xo,H[qo]=H[qo+Wo]=H[qo+Ho]=H[qo+Go]=H[qo+Uo]=`0`,H[Ko]=j[Ko
],H[Ko+Wo]=j[Ko+Wo
],H[Ko+Ho]=j[Ko+Ho
],H[Ko+Go]=j[Ko+Go
],H[Ko+Uo]=j[Ko+Uo
],he=Ys(me,H,y),js&&R(0)),n?(Ee=n._initted,Ja(1),n.render(n.duration(),!0,!0),xe=ve(w.a)-be+pe+_,Te=Math.abs(pe-xe)>1,k&&Te&&he.splice(he.length-2,2),n.render(0,!0,!0),Ee||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Ja(0)):xe=pe,Oe&&(Oe.value?Oe.style[`overflow`+w.a.toUpperCase()]=Oe.value:Oe.style.removeProperty(`overflow-`+w.a));else if(u&&R()&&!x)for(z=u.parentNode;z&&z!==Na;)z._pinOffset&&(se-=z._pinOffset,ce-=z._pinOffset),z=z.parentNode;De&&De.forEach(function(e){return e.revert(!1,!0)
}),N.start=se,N.end=ce,ae=oe=js?Ne:R(),!x&&!js&&(ae<Ne&&R(Ne),N.scroll.rec=0),N.revert(!1,!0),te=co(),Me&&(L=-1,Me.restart(!0)),Ba=0,n&&T&&(n._initted||Pe)&&n.progress()!==Pe&&n.progress(Pe||0,!0).render(n.time(),!0,!0),(h||ne!==N.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||ne||n.vars.immediateRender!==!1)&&n.totalProgress(x&&se<-.001&&!ne?Y.utils.normalize(se,ce,0):ne,!0),N.progress=h||(ae-se)/pe===ne?0:ne),d&&f&&(_e._pinOffset=Math.round(N.progress*xe)),U&&U.invalidate(),isNaN(ke)||(ke-=Y.getProperty(ue,w.p),Ae-=Y.getProperty(de,w.p),tc(ue,w,ke),tc(le,w,ke-(o||0)),tc(de,w,Ae),tc(B,w,Ae-(o||0))),h&&!js&&N.update(),c&&!js&&!fe&&(fe=!0,c(N),fe=!1)}},N.getVelocity=function(){return(R()-oe)/(co()-Ra)*1e3||0},N.endAnimation=function(){No(N.callbackAnimation),n&&(U?U.progress(1):n.paused()?T||No(n,N.direction<0,1):No(n,n.reversed()))},N.labelToScroll=function(e){return n&&n.labels&&(se||N.refresh()||se)+n.labels[e]/n.duration()*pe||0},N.getTrailing=function(e){var t=Q.indexOf(N),n=N.direction>0?Q.slice(0,t).reverse():Q.slice(t+1);return(ko(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return N.direction>0?e.end<=se:e.start>=ce})},N.update=function(e,t,r){if(!(x&&!r&&!e)){var o=js===!0?Ne:N.scroll(),c=e?0:(o-se)/pe,u=c<0?0:c>1?1:c||0,p=N.progress,h,g,b,D,O,M,ee,P;if(t&&(oe=ae,ae=x?R():o,v&&(ke=Oe,Oe=n&&!T?n.totalProgress():u)),m&&d&&!Ba&&!so&&uo&&(!u&&se<o+(o-oe)/(co()-Ra)*m?u=1e-4:u===1&&ce>o+(o-oe)/(co()-Ra)*m&&(u=.9999)),u!==p&&N.enabled){if(h=N.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,N.direction=u>p?1:-1,N.progress=u,O&&!Ba&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b
],P=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||P)&&(P||l||!n)&&(Ao(C)?C(N):N.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(U&&!Ba&&!so?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo(`totalProgress`,u,n._tTime/n._tDur):(U.vars.totalProgress=u,U.invalidate().restart())):n&&n.totalProgress(u,!!(Ba&&(te||e)))),d){if(e&&f&&(_e.style[f+w.os2]=Se),!k)ye(yo(be+xe*u));else if(O){if(ee=!e&&u>p&&ce+1>o&&o+1>=Do(E,w),y)if(!e&&(h||ee)){var F=es(d,!0),I=o-se;$s(d,Na,F.top+(w===ba?I:0)+Xo,F.left+(w===ba?0:I)+Xo)}else $s(d,_e);qs(h||ee?he:ge),Te&&u<1&&h||ye(be+(u===1&&!ee?xe:0))}}v&&!re.tween&&!Ba&&!so&&Me.restart(!0),a&&(M||_&&u&&(u<1||!oo))&&Ia(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)
}),i&&!T&&!e&&i(N),O&&!Ba?(T&&(P&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(N)),(M||!oo)&&(s&&M&&Po(N,s),A[b]&&Po(N,A[b]),_&&(u===1?N.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&Po(N,A[b]))),S&&!h&&Math.abs(N.getVelocity())>(jo(S)?S:2500)&&(No(N.callbackAnimation),U?U.progress(1):No(n,D===`reverse`?1:!u,1))):T&&i&&!Ba&&i(N)}if(Ee){var L=x?o/x.duration()*(x._caScrollDist||0):o;we(L+ +!!ue._isFlipped),Ee(L)}Fe&&Fe(-o/x.duration()*(x._caScrollDist||0))}},N.enable=function(t,n){N.enabled||(N.enabled=!0,ss(E,`resize`,xs),O||ss(E,`scroll`,ys),P&&ss(e,`refreshInit`,P),t!==!1&&(N.progress=ne=0,ae=oe=L=R()),n!==!1&&N.refresh())},N.getTween=function(e){return e&&re?re.tween:U},N.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}N.refresh(!1,!1,{start:mo(e,n&&!!N._startClamp),end:mo(t,n&&!!N._endClamp)},r),N.update()},N.adjustPinSpacing=function(e){if(Ce&&e){var t=Ce.indexOf(w.d)+1;Ce[t]=parseFloat(Ce[t])+e+Xo,Ce[1]=parseFloat(Ce[1])+e+Xo,qs(Ce)}},N.disable=function(t,n){if(t!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,n||U&&U.pause(),Ne=0,z&&(z.uncache=1),P&&cs(e,`refreshInit`,P),Me&&(Me.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!O)){for(var r=Q.length;r--;)if(Q[r].scroller===E&&Q[r]!==N)return;cs(E,`resize`,xs),O||cs(E,`scroll`,ys)}},N.kill=function(e,r){N.disable(e,r),U&&!r&&U.kill(),o&&delete gs[o];var i=Q.indexOf(N);i>=0&&Q.splice(i,1),i===Ua&&zs>0&&Ua--,i=0,Q.forEach(function(e){return e.scroller===N.scroller&&(i=1)
}),i||js||(N.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1
}),r||n.kill()),le&&[le,B,ue,de].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)
}),Bs===N&&(Bs=0),d&&(z&&(z.uncache=1),i=0,Q.forEach(function(e){return e.pin===d&&i++
}),i||(z.spacer=0)),t.onKill&&t.onKill(N)},Q.push(N),N.enable(!1,!1),Ie&&Ie(N),n&&n.add&&!pe){var Be=N.update;N.update=function(){N.update=Be,J.cache++,se||ce||N.refresh()},Y.delayedCall(.01,N.update),pe=.01,se=ce=0}else N.refresh();d&&Ps()},e.register=function(t){return Aa||=(Y=t||xo(),bo()&&window.document&&e.enable(),fo),Aa},e.defaults=function(e){if(e)for(var t in e)ds[t]=e[t];return ds},e.disable=function(e,t){fo=0,Q.forEach(function(n){return n[t?`kill`:`disable`](e)
}),cs(X,`wheel`,ys),cs(ja,`scroll`,ys),clearInterval(za),cs(ja,`touchcancel`,vo),cs(Na,`touchstart`,vo),os(cs,ja,`pointerdown,touchstart,mousedown`,go),os(cs,ja,`pointerup,touchend,mouseup`,_o),Fa.kill(),Oo(cs);for(var n=0;n<J.length;n+=3)ls(cs,J[n
],J[n+1]),ls(cs,J[n
],J[n+2])},e.enable=function(){if(X=window,ja=document,Ma=ja.documentElement,Na=ja.body,Y)if(Ia=Y.utils.toArray,La=Y.utils.clamp,to=Y.core.context||vo,Ja=Y.core.suppressOverwrites||vo,Z=X.history.scrollRestoration||`auto`,Rs=X.pageYOffset||0,Y.core.globals(`ScrollTrigger`,e),Na){fo=1,no=document.createElement(`div`),no.style.height=`100vh`,no.style.position=`absolute`,Fs(),ho(),ka.register(Y),e.isTouch=ka.isTouch,eo=ka.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Za=ka.isTouch===1,ss(X,`wheel`,ys),Pa=[X,ja,Ma,Na
],Y.matchMedia?(e.matchMedia=function(e){var t=Y.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},Y.addEventListener(`matchMediaInit`,function(){Os(),ks()
}),Y.addEventListener(`matchMediaRevert`,function(){return Ds()
}),Y.addEventListener(`matchMedia`,function(){Ls(0,1),Ts(`matchMedia`)
}),Y.matchMedia().add(`(orientation: portrait)`,function(){return bs(),bs})):console.warn(`Requires GSAP 3.11.0 or later`),bs(),ss(ja,`scroll`,ys);var t=Na.hasAttribute(`style`),n=Na.style,r=n.borderTopStyle,i=Y.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,`revert`,{value:function(){return this.time(-.01,!0)}
}),n.borderTopStyle=`solid`,a=es(Na),ba.m=Math.round(a.top+ba.sc())||0,ya.m=Math.round(a.left+ya.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(Na.setAttribute(`style`,``),Na.removeAttribute(`style`)),za=setInterval(vs,250),Y.delayedCall(.5,function(){return so=0
}),ss(ja,`touchcancel`,vo),ss(Na,`touchstart`,vo),os(ss,ja,`pointerdown,touchstart,mousedown`,go),os(ss,ja,`pointerup,touchend,mouseup`,_o),Ha=Y.utils.checkPrefix(`transform`),Us.push(Ha),Aa=co(),Fa=Y.delayedCall(.2,Ls).pause(),Ka=[ja,`visibilitychange`,function(){var e=X.innerWidth,t=X.innerHeight;ja.hidden?(Wa=e,Ga=t):(Wa!==e||Ga!==t)&&xs()},ja,`DOMContentLoaded`,Ls,X,`load`,Ls,X,`resize`,xs
],Oo(ss),Q.forEach(function(e){return e.enable(0,1)
}),o=0;o<J.length;o+=3)ls(cs,J[o
],J[o+1]),ls(cs,J[o
],J[o+2])}else ja&&ja.addEventListener(`DOMContentLoaded`,
function t(){e.enable(),ja.removeEventListener(`DOMContentLoaded`,t)})},e.config=function(t){`limitCallbacks`in t&&(oo=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(za)||(za=n)&&setInterval(vs,n),`ignoreMobileResize`in t&&(Za=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(Oo(cs)||Oo(ss,t.autoRefreshEvents||`none`),Ya=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=xa(e),r=J.indexOf(n),i=So(n);~r&&J.splice(r,i?6:2),t&&(i?sa.unshift(X,t,Na,t,Ma,t):sa.unshift(n,t))},e.clearMatchMedia=function(e){Q.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(ko(e)?xa(e):e).getBoundingClientRect(),i=r[n?Bo:Vo]*t||0;return n?r.right-i>0&&r.left+i<X.innerWidth:r.bottom-i>0&&r.top+i<X.innerHeight},e.positionInViewport=function(e,t,n){ko(e)&&(e=xa(e));var r=e.getBoundingClientRect(),i=r[n?Bo:Vo
],a=t==null?i/2:t in fs?fs[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/X.innerWidth:(r.top+a)/X.innerHeight},e.killAll=function(e){if(Q.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()
}),e!==!0){var t=Ss.killAll||[];Ss={},t.forEach(function(e){return e()})}},e}();$.version=`3.15.0`,$.saveStyles=function(e){return e?Ia(e).forEach(function(e){if(e&&e.style){var t=Es.indexOf(e);t>=0&&Es.splice(t,5),Es.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),Y.core.getCache(e),to())}}):Es},$.revert=function(e,t){return ks(!e,t)},$.create=function(e,t){return new $(e,t)},$.refresh=function(e){return e?xs(!0):(Aa||$.register())&&Ls(!0)},$.update=function(e){return++J.cache&&Vs(e===!0?2:0)},$.clearScrollMemory=As,$.maxScroll=function(e,t){return Do(e,t?ya:ba)},$.getScrollFunc=function(e,t){return Ca(xa(e),t?ya:ba)},$.getById=function(e){return gs[e]},$.getAll=function(){return Q.filter(function(e){return e.vars.id!==`ScrollSmoother`})},$.isScrolling=function(){return!!uo},$.snapDirectional=is,$.addEventListener=function(e,t){var n=Ss[e]||(Ss[e]=[]);~n.indexOf(t)||n.push(t)},$.removeEventListener=function(e,t){var n=Ss[e
],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},$.batch=function(e,t){var n=[
],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[
],r=[
],o=Y.delayedCall(i,function(){t(n,r),n=[
],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&Ao(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return Ao(a)&&(a=a(),ss($,`refresh`,function(){return a=t.batchMax()})),Ia(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push($.create(t))
}),n};var rc=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},ic=
function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(ka.isTouch?` pinch-zoom`:``):`none`,t===Ma&&e(Na,n)},ac={auto:1,scroll:1},oc=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||Y.core.getCache(i),o=co(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==Na&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(ac[(s=Zo(i)).overflowY]||ac[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!So(i)&&(ac[(s=Zo(i)).overflowY]||ac[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},sc=function(e,t,n,r){return ka.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=oc,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&ss(ja,ka.eventTypes[0
],uc,!1,!0)},onDisable:function(){return cs(ja,ka.eventTypes[0
],uc,!0)}})},cc=/(input|label|select|textarea)/i,lc,uc=function(e){var t=cc.test(e.target.tagName);(t||lc)&&(e._gsapAllow=!0,lc=t)},dc=function(e){Mo(e)||(e={
}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||=`wheel,touch`,e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=xa(e.target)||Ma,l=Y.core.globals().ScrollSmoother,u=l&&l.get(),d=eo&&(e.content&&xa(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=Ca(c,ba),p=Ca(c,ya),m=1,h=(ka.isTouch&&X.visualViewport?X.visualViewport.scale*X.visualViewport.width:X.outerWidth)/X.innerWidth,g=0,_=Ao(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=sc(c,e.type,!0,i),x=function(){return y=!1},S=vo,C=vo,w=function(){s=Do(c,ba),C=La(+!!eo,s),n&&(S=La(0,Do(c,ya))),v=Ms},T=function(){d._gsap.y=yo(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=yo(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=yo((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=J.cache,Vs()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&Y.set(d,{y:`+=0`
}),e.ignoreCheck=function(e){return eo&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=yo((X.visualViewport&&X.visualViewport.scale||1)/h),D.pause(),e!==m&&ic(c,m>1.01?!0:n?!1:`x`),O=p(),k=f(),w(),v=Ms},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{J.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=rc(p,i,o,Do(c,ya)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=rc(f,i,o,Do(c,ba)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(eo&&D.vars.scrollY>=s||i>=s-1)&&Y.to({
},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),co()-g>1e3&&(v=0,g=co())},e.onChange=function(e,t,r,i,a){if(Ms!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1
],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&Vs()},e.onEnable=function(){ic(c,n?!1:`x`),$.addEventListener(`refresh`,j),ss(X,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){ic(c,!0),cs(X,`resize`,j),$.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new ka(e),o.iOS=eo,eo&&!f()&&f(1),eo&&Y.ticker.add(vo),A=o._dc,D=Y.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:ec(f,f(),function(){return D.pause()})},onUpdate:Vs,onComplete:A.vars.onComplete
}),o};$.sort=function(e){if(Ao(e))return Q.sort(e);var t=X.pageYOffset||0;return $.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+X.innerHeight
}),Q.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},$.observe=function(e){return new ka(e)},$.normalizeScroll=function(e){if(e===void 0)return Xa;if(e===!0&&Xa)return Xa.enable();if(e===!1){Xa&&Xa.kill(),Xa=e;return}var t=e instanceof ka?e:dc(e);return Xa&&Xa.target===t.target&&Xa.kill(),So(t.target)&&(Xa=t),t},$.core={_getVelocityProp:wa,_inputObserver:sc,_scrollers:J,_proxies:sa,bridge:{ss:function(){uo||Ts(`scrollStart`),uo=co()},ref:function(){return Ba}}},xo()&&Y.registerPlugin($);var fc=`/assets/mypic-a3-nZ6gT.png`;K.registerPlugin($);
function pc(){let e=
(0,_.useRef)(null),t=
(0,_.useRef)(null),n=
(0,_.useRef)(null),r=
(0,_.useRef)(null),i=
(0,_.useRef)(null),a=
(0,_.useRef)(null),o=
(0,_.useRef)(null),s=
(0,_.useRef)(null);return
(0,_.useEffect)(()=>{let c=K.context(()=>{K.timeline({scrollTrigger:{trigger:e.current,start:`top 70%`,end:`bottom center`,toggleActions:`play none none reverse`}}).fromTo([n.current,r.current
],{y:-600,opacity:0
},{y:0,opacity:1,duration:1.8,ease:`elastic.out(0.8, 0.4)`,stagger:.3}).fromTo(i.current,{x:-50,opacity:0,clipPath:`polygon(0 0, 0 0, 0 100%, 0% 100%)`
},{x:0,opacity:1,clipPath:`polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,duration:.8,ease:`power3.out`},`-=1.4`).fromTo(a.current,{y:50,opacity:0,clipPath:`polygon(0 100%, 100% 100%, 100% 100%, 0 100%)`
},{y:0,opacity:1,clipPath:`polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,duration:.8,ease:`power3.out`},`-=1.0`).fromTo(t.current,{y:-800,opacity:0
},{y:0,opacity:1,duration:1.8,ease:`elastic.out(0.7, 0.4)`},`-=0.8`).fromTo(o.current.children,{y:40,opacity:0,rotationX:-45
},{y:0,opacity:1,rotationX:0,duration:1,stagger:.15,ease:`back.out(1.2)`},`-=1.2`).fromTo(s.current.children,{scale:.5,opacity:0,y:20
},{scale:1,opacity:1,y:0,duration:.5,stagger:.1,ease:`back.out(1.5)`},`-=0.8`),K.to(t.current,{rotation:2.5,transformOrigin:`top center`,yoyo:!0,repeat:-1,duration:3.2,ease:`sine.inOut`,delay:2
}),K.to(`.bg-web-left`,{rotation:360,transformOrigin:`center center`,repeat:-1,duration:70,ease:`linear`
}),K.to(`.bg-web-right`,{rotation:-360,transformOrigin:`center center`,repeat:-1,duration:90,ease:`linear`
}),K.to(`.glow-frame`,{boxShadow:`0px 15px 35px rgba(163,21,21,0.25)`,yoyo:!0,repeat:-1,duration:2,ease:`sine.inOut`
}),K.to(`.tech-pill`,{y:-4,yoyo:!0,repeat:-1,duration:1.5,ease:`sine.inOut`,stagger:{each:.2,from:`random`},delay:1.5})},e);return()=>c.revert()},[]),
(0,q.jsxs)(`section`,{ref:e,className:`relative w-full min-h-screen bg-gray-50 text-gray-900 py-24 flex items-center justify-center overflow-hidden`,children:[
(0,q.jsxs)(`div`,{ref:n,className:`absolute top-[-50px] left-[-5%] md:left-[2%] flex flex-col items-center pointer-events-none z-0`,children:[
(0,q.jsx)(`div`,{className:`w-[1px] h-[250px] md:h-[350px] bg-gradient-to-b from-transparent to-gray-300`
}),
(0,q.jsx)(`img`,{src:Ri,alt:`Hanging Web`,className:`bg-web-left w-64 h-64 md:w-96 md:h-96 object-contain -mt-12 opacity-[0.12] mix-blend-multiply`})]
}),
(0,q.jsxs)(`div`,{ref:r,className:`absolute top-[-50px] right-[-5%] md:right-[2%] flex flex-col items-center pointer-events-none z-0`,children:[
(0,q.jsx)(`div`,{className:`w-[1px] h-[200px] md:h-[300px] bg-gradient-to-b from-transparent to-gray-300`
}),
(0,q.jsx)(`img`,{src:Ri,alt:`Hanging Web`,className:`bg-web-right w-56 h-56 md:w-80 md:h-80 object-contain -mt-10 opacity-[0.12] mix-blend-multiply`})]
}),
(0,q.jsxs)(`div`,{className:`container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-20 z-10 relative`,children:[
(0,q.jsxs)(`div`,{className:`flex-1 flex flex-col gap-6 mt-10 lg:mt-0 relative z-20`,children:[
(0,q.jsx)(`div`,{className:`overflow-hidden`,children:
(0,q.jsxs)(`span`,{ref:i,className:`inline-flex items-center gap-2 text-[#a31515] font-bold uppercase text-xs md:text-sm tracking-[0.2em]`,children:[
(0,q.jsx)(`img`,{src:zi,alt:`Spider`,className:`w-5 h-5 object-contain drop-shadow-sm`
}),`Behind the Mask`]})
}),
(0,q.jsx)(`div`,{className:`overflow-hidden py-2`,children:
(0,q.jsx)(`h2`,{ref:a,className:`text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase italic text-gray-900`,style:{textShadow:`2px 2px 0px #fca5a5`},children:`Sri Sushmita.`})
}),
(0,q.jsxs)(`div`,{ref:o,className:`flex flex-col gap-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl font-medium mt-2`,style:{perspective:`1000px`},children:[
(0,q.jsx)(`p`,{className:`origin-bottom`,children:`I'm a full-stack engineer and AI/ML undergrad at Aditya Engineering College, passionate about bridging scalable web infrastructure with data-driven insights.`
}),
(0,q.jsx)(`p`,{className:`origin-bottom`,children:`From engineering robust SaaS platforms at Technical Hub to mastering algorithms with the AlgoUniversity Tech Fellowship, I thrive on turning complex logic into seamless, high-performance digital experiences.`})]
}),
(0,q.jsxs)(`div`,{className:`mt-6`,children:[
(0,q.jsx)(`h3`,{className:`text-xs uppercase tracking-widest text-gray-500 mb-6 font-bold border-b border-gray-300 pb-2 inline-block`,children:`Primary Tech Stack`
}),
(0,q.jsx)(`div`,{ref:s,className:`flex flex-wrap gap-3`,children:[`React`,`Node.js`,`Express`,`PostgreSQL`,`MongoDB`,`Docker`].map((e,t)=>
(0,q.jsx)(`div`,{className:`tech-pill px-5 py-2.5 border border-[#a31515]/30 bg-white text-[#a31515] rounded-xl text-sm font-bold tracking-wider hover:bg-[#a31515] hover:text-white hover:border-[#a31515] shadow-sm hover:shadow-[0_8px_20px_rgba(163,21,21,0.3)] transition-colors duration-300 cursor-default`,children:e},t))})]})]
}),
(0,q.jsx)(`div`,{className:`flex-1 relative flex justify-center items-start min-h-[550px] w-full pt-0`,children:
(0,q.jsxs)(`div`,{ref:t,className:`flex flex-col items-center z-30 group`,children:[
(0,q.jsx)(`div`,{className:`w-[2px] h-[200px] md:h-[350px] bg-gradient-to-b from-transparent via-[#a31515]/60 to-[#a31515]`
}),
(0,q.jsx)(`div`,{className:`glow-frame relative w-64 h-64 md:w-[340px] md:h-[340px] rounded-full border-[6px] border-[#a31515] p-2 bg-white shadow-2xl transition-transform duration-500 group-hover:scale-105`,children:
(0,q.jsx)(`img`,{src:fc,alt:`Sri Sushmita Profile`,className:`w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700`})})]})})]})]})}var mc=`/assets/spydy_hang-Cac1gK30.png`;K.registerPlugin($);
function hc(){let e=
(0,_.useRef)(null),t=
(0,_.useRef)(null),n=
(0,_.useRef)(null),r=
(0,_.useRef)(null);return
(0,_.useEffect)(()=>{let i=K.context(()=>{K.timeline({scrollTrigger:{trigger:e.current,start:`top 80%`,toggleActions:`play none none reverse`}}).fromTo(t.current,{y:20,opacity:0
},{y:0,opacity:1,duration:.6,ease:`power3.out`}).fromTo(`.matrix-item`,{y:30,opacity:0,x:-15
},{y:0,opacity:1,x:0,duration:.5,stagger:.04,ease:`back.out(1.5)`},`-=0.3`),K.to(n.current,{scale:1.05,opacity:.06,repeat:-1,yoyo:!0,duration:5,ease:`sine.inOut`
}),K.to(r.current,{rotation:5,transformOrigin:`top center`,repeat:-1,yoyo:!0,duration:3.2,ease:`sine.inOut`})},e);return()=>i.revert()},[]),
(0,q.jsxs)(`section`,{id:`skills`,ref:e,className:`relative w-full bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100`,children:[
(0,q.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0`,children:
(0,q.jsx)(`img`,{ref:n,src:Ri,alt:`Background Web`,className:`w-[600px] h-[600px] md:w-[800px] md:h-[800px] object-contain opacity-[0.04] mix-blend-multiply`})
}),
(0,q.jsxs)(`div`,{ref:r,className:`absolute top-0 right-8 md:right-16 z-30 pointer-events-none flex flex-col items-center origin-top`,children:[
(0,q.jsx)(`div`,{className:`w-[2px] h-16 md:h-24 bg-gradient-to-b from-transparent to-gray-400 opacity-60`
}),
(0,q.jsx)(`img`,{src:mc,alt:`Hanging Spider-Man`,className:`w-28 md:w-40 h-auto object-contain drop-shadow-lg -mt-2`})]
}),
(0,q.jsxs)(`div`,{ref:t,className:`flex flex-col items-center text-center mb-10 z-10`,children:[
(0,q.jsx)(`span`,{className:`text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2`,children:`Arsenal & Expertise`
}),
(0,q.jsx)(`h2`,{className:`text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900`,style:{textShadow:`2px 2px 0px #fca5a5`},children:`TECHNICAL SKILLS.`
}),
(0,q.jsx)(`div`,{className:`w-12 h-1 bg-[#a31515] mt-2 rounded-full`})]
}),
(0,q.jsx)(`div`,{className:`w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 z-10`,children:[{name:`React / Next.js`,category:`Frontend`,level:`Advanced`
},{name:`JavaScript / TS`,category:`Languages`,level:`Advanced`
},{name:`Node.js & Express`,category:`Backend`,level:`Advanced`
},{name:`PostgreSQL & Mongo`,category:`Backend`,level:`Proficient`
},{name:`Docker & Dev`,category:`Tools`,level:`Proficient`
},{name:`Python / AI & ML`,category:`Languages`,level:`Proficient`
},{name:`GSAP Animations`,category:`Frontend`,level:`Advanced`
},{name:`Tailwind CSS`,category:`Frontend`,level:`Advanced`
},{name:`Git & GitHub`,category:`Tools`,level:`Advanced`
},{name:`Data Structures`,category:`Languages`,level:`Advanced`}].map((e,t)=>
(0,q.jsxs)(`div`,{className:`matrix-item group relative bg-gray-50/90 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] px-5 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_8px_20px_rgba(163,21,21,0.15)] transform hover:-translate-y-0.5`,children:[
(0,q.jsx)(`div`,{className:`absolute inset-0 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out z-0`
}),
(0,q.jsxs)(`div`,{className:`relative z-10 flex items-center gap-3`,children:[
(0,q.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-[#a31515] group-hover:bg-white transition-colors duration-300 shadow-[0_0_8px_rgba(163,21,21,0.6)]`
}),
(0,q.jsxs)(`div`,{className:`flex flex-col`,children:[
(0,q.jsx)(`span`,{className:`text-sm md:text-base font-black uppercase tracking-tight text-gray-900 group-hover:text-white transition-colors duration-300`,children:e.name
}),
(0,q.jsx)(`span`,{className:`text-[10px] font-semibold text-gray-400 group-hover:text-gray-200 transition-colors duration-300 uppercase tracking-widest`,children:e.category})]})]
}),
(0,q.jsx)(`div`,{className:`relative z-10`,children:
(0,q.jsx)(`span`,{className:`text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-white text-gray-700 group-hover:bg-black group-hover:text-white rounded-full transition-colors duration-300 shadow-sm`,children:e.level})})]},t))})]})}var gc=`/assets/spydy_stand-BwBM-zCr.png`;K.registerPlugin($);
function _c(){let e=
(0,_.useRef)(null),t=
(0,_.useRef)(null),n=
(0,_.useRef)(null),r=
(0,_.useRef)(null);return
(0,_.useEffect)(()=>{let i=K.context(()=>{K.timeline({scrollTrigger:{trigger:e.current,start:`top 80%`,toggleActions:`play none none reverse`}}).fromTo(t.current,{y:20,opacity:0
},{y:0,opacity:1,duration:.6,ease:`power3.out`}).fromTo(`.project-item`,{y:30,opacity:0
},{y:0,opacity:1,duration:.5,stagger:.1,ease:`back.out(1.4)`},`-=0.3`).fromTo(r.current,{y:100,opacity:0
},{y:0,opacity:1,duration:.8,ease:`back.out(1.7)`},`-=0.4`),K.set(n.current,{transformOrigin:`top right`
}),K.to(n.current,{rotation:8,repeat:-1,yoyo:!0,duration:6,ease:`sine.inOut`
}),K.to(n.current,{scale:1.1,opacity:.07,repeat:-1,yoyo:!0,duration:4,ease:`sine.inOut`
}),K.to(r.current,{y:-10,repeat:-1,yoyo:!0,duration:2.5,ease:`sine.inOut`})},e);return()=>i.revert()},[]),
(0,q.jsxs)(`section`,{id:`projects`,ref:e,className:`relative w-full bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100`,children:[
(0,q.jsx)(`div`,{className:`absolute top-0 right-0 pointer-events-none overflow-hidden z-0`,children:
(0,q.jsx)(`img`,{ref:n,src:Ri,alt:`Background Web`,className:`w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-contain opacity-[0.04] mix-blend-multiply translate-x-1/4 -translate-y-1/4`})
}),
(0,q.jsx)(`div`,{ref:r,className:`absolute bottom-0 left-4 md:left-12 z-30 pointer-events-none`,children:
(0,q.jsx)(`img`,{src:gc,alt:`Standing Spider-Man`,className:`w-32 md:w-48 h-auto object-contain drop-shadow-2xl`})
}),
(0,q.jsxs)(`div`,{ref:t,className:`flex flex-col items-center text-center mb-10 z-10`,children:[
(0,q.jsx)(`span`,{className:`text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2`,children:`Featured Works`
}),
(0,q.jsx)(`h2`,{className:`text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900`,style:{textShadow:`2px 2px 0px #fca5a5`},children:`PROJECTS.`
}),
(0,q.jsx)(`div`,{className:`w-12 h-1 bg-[#a31515] mt-2 rounded-full`})]
}),
(0,q.jsx)(`div`,{className:`w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 z-10`,children:[{title:`Multi-Tenant SaaS Platform`,description:`Engineered a containerized multi-tenant SaaS application featuring strict data isolation, dynamic tenancy resolution, and role-based access control.`,tags:[`React`,`Node.js`,`PostgreSQL`,`Docker`
],link:`#`
},{title:`Full-Stack Payment Gateway`,description:`Built a robust payment gateway system simulating real-time transaction state management, secure webhooks, and multi-method processing workflows.`,tags:[`Node.js`,`Express`,`MongoDB`,`REST APIs`
],link:`#`
},{title:`Notice Hub University Portal`,description:`Developed a centralized real-time notification platform to streamline university announcements, student communication, and campus updates.`,tags:[`React`,`Tailwind CSS`,`Node.js`
],link:`#`
},{title:`Productivity Suite Extension`,description:`Created a feature-rich Chrome extension utilizing JavaScript and Chrome APIs to optimize personal daily task management and workflow tracking.`,tags:[`JavaScript`,`Chrome APIs`,`Tailwind`
],link:`#`}].map((e,t)=>
(0,q.jsxs)(`div`,{className:`project-item group relative bg-gray-50/90 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_10px_25px_rgba(163,21,21,0.15)] transform hover:-translate-y-1`,children:[
(0,q.jsx)(`div`,{className:`absolute top-0 left-0 w-full h-1 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out`
}),
(0,q.jsxs)(`div`,{children:[
(0,q.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[
(0,q.jsx)(`h3`,{className:`text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-[#a31515] transition-colors duration-300`,children:e.title
}),
(0,q.jsx)(`svg`,{className:`w-5 h-5 text-gray-400 group-hover:text-[#a31515] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:
(0,q.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`})})]
}),
(0,q.jsx)(`p`,{className:`text-xs md:text-sm text-gray-600 leading-relaxed font-medium mb-6`,children:e.description})]
}),
(0,q.jsx)(`div`,{className:`flex flex-wrap gap-2 pt-2 border-t border-gray-200/60`,children:e.tags.map((e,t)=>
(0,q.jsx)(`span`,{className:`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white border border-gray-200 text-gray-600 group-hover:border-[#a31515]/30 group-hover:text-[#a31515] rounded-md transition-colors duration-300`,children:e},t))})]},t))})]})}K.registerPlugin($);
function vc(){let e=
(0,_.useRef)(null),t=
(0,_.useRef)(null),n=
(0,_.useRef)(null),r=
(0,_.useRef)(null),i=
(0,_.useRef)(null),[a,o]=
(0,_.useState)(!1);return
(0,_.useEffect)(()=>{let a=K.context(()=>{K.timeline({scrollTrigger:{trigger:e.current,start:`top 80%`,toggleActions:`play none none reverse`}}).fromTo(t.current,{y:20,opacity:0
},{y:0,opacity:1,duration:.6,ease:`power3.out`}).fromTo(r.current,{y:30,opacity:0
},{y:0,opacity:1,duration:.7,ease:`back.out(1.4)`},`-=0.3`),K.to(n.current,{scale:1.15,opacity:.06,repeat:-1,yoyo:!0,duration:4.5,ease:`sine.inOut`
}),K.to(i.current,{rotation:8,transformOrigin:`top center`,repeat:-1,yoyo:!0,duration:2,ease:`sine.inOut`})},e);return()=>a.revert()},[]),
(0,q.jsxs)(`section`,{id:`contact`,ref:e,className:`relative w-full bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100`,children:[
(0,q.jsx)(`div`,{className:`absolute bottom-0 left-0 pointer-events-none overflow-hidden z-0`,children:
(0,q.jsx)(`img`,{ref:n,src:Ri,alt:`Background Web`,className:`w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-contain opacity-[0.04] mix-blend-multiply -translate-x-1/4 translate-y-1/4`})
}),
(0,q.jsxs)(`div`,{ref:i,className:`absolute top-0 right-8 md:right-20 z-30 pointer-events-none flex flex-col items-center origin-top`,children:[
(0,q.jsx)(`div`,{className:`w-[2px] h-24 md:h-36 bg-gradient-to-b from-transparent to-gray-400 opacity-60`
}),
(0,q.jsx)(`img`,{src:mc,alt:`Hanging Spider-Man`,className:`w-40 md:w-60 h-auto object-contain drop-shadow-2xl -mt-2`})]
}),
(0,q.jsxs)(`div`,{ref:t,className:`flex flex-col items-center text-center mb-10 z-10`,children:[
(0,q.jsxs)(`span`,{className:`text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2 flex items-center gap-1.5`,children:[
(0,q.jsx)(`img`,{src:zi,alt:`Spider`,className:`w-4 h-4 object-contain`
}),`Get In Touch`]
}),
(0,q.jsx)(`h2`,{className:`text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900`,style:{textShadow:`2px 2px 0px #fca5a5`},children:`CONTACT.`
}),
(0,q.jsx)(`div`,{className:`w-12 h-1 bg-[#a31515] mt-2 rounded-full`})]
}),
(0,q.jsx)(`div`,{ref:r,className:`w-full max-w-2xl bg-gray-50/90 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-sm relative z-10`,children:a?
(0,q.jsxs)(`div`,{className:`py-12 flex flex-col items-center text-center`,children:[
(0,q.jsx)(`div`,{className:`w-12 h-12 bg-[#a31515] text-white rounded-full flex items-center justify-center text-xl font-black mb-4 shadow-md animate-bounce`,children:`✓`
}),
(0,q.jsx)(`h3`,{className:`text-xl font-black uppercase tracking-tight text-gray-900 mb-2`,children:`Message Sent!`
}),
(0,q.jsx)(`p`,{className:`text-sm text-gray-600 font-medium`,children:`Thanks for reaching out. I'll get back to you shortly.`})]}):
(0,q.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),o(!0),setTimeout(()=>o(!1),4e3)},className:`flex flex-col gap-5`,children:[
(0,q.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[
(0,q.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[
(0,q.jsx)(`label`,{className:`text-xs font-bold uppercase tracking-wider text-gray-600`,children:`Your Name`
}),
(0,q.jsx)(`input`,{required:!0,type:`text`,placeholder:`Peter Parker`,className:`w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all`})]
}),
(0,q.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[
(0,q.jsx)(`label`,{className:`text-xs font-bold uppercase tracking-wider text-gray-600`,children:`Your Email`
}),
(0,q.jsx)(`input`,{required:!0,type:`email`,placeholder:`peter@stark.com`,className:`w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all`})]})]
}),
(0,q.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[
(0,q.jsx)(`label`,{className:`text-xs font-bold uppercase tracking-wider text-gray-600`,children:`Message`
}),
(0,q.jsx)(`textarea`,{required:!0,rows:`4`,placeholder:`Let's build something amazing together...`,className:`w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all resize-none`})]
}),
(0,q.jsx)(`button`,{type:`submit`,className:`w-full bg-[#a31515] hover:bg-[#7a0f0f] text-white py-3.5 rounded-xl font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-[0_4px_15px_rgba(163,21,21,0.3)] hover:shadow-[0_6px_20px_rgba(163,21,21,0.5)] cursor-pointer mt-2`,children:`Send Message`})]})})]})}
function yc(){return
(0,q.jsxs)(q.Fragment,{children:[
(0,q.jsx)(Hi,{
}),
(0,q.jsx)(Vi,{
}),
(0,q.jsx)(pc,{
}),
(0,q.jsx)(hc,{
}),
(0,q.jsx)(_c,{
}),
(0,q.jsx)(vc,{})]})}(0,v.createRoot)(document.getElementById(`root`)).render(
(0,q.jsx)(_.StrictMode,{children:
(0,q.jsx)(yc,{})}));