0%`,end:`bottom center`,toggleActions:`play none none reverse`}}).fromTo([n.current,r.current
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