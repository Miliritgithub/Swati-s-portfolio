# HeroSection Specification (hero + marquee)

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Original component:** `Vi` — renders `<main>` wrapping two `<section>`s
- **Interaction model:** pointer-driven mask + mount timeline (hero); time-driven + hover-throttled (marquee)

## DOM Structure
```
main.w-full.flex.flex-col.bg-white.overflow-hidden
├─ section (h-screen, cursor-crosshair, onMouseMove/Enter/Leave)
│  ├─ img  bottom identity layer            z-10
│  ├─ img  top mask layer (JS mask-image)   z-20
│  ├─ div  webs container                   z-[25]
│  │  ├─ img web top-left  w-[400px] h-[400px]
│  │  └─ img web bottom-right w-[500px] h-[500px]
│  └─ div  copy block (absolute, left-6/12/24, centered)  z-30
│     ├─ span eyebrow (opacity-0 until timeline)
│     ├─ h1   name (opacity-0 until timeline)
│     └─ div  actions: primary CTA + resume download
└─ section (marquee band, h-[20vh] md:h-[30vh], z-40)
   ├─ div red band  rotate-[4deg]  z-20 → track (ref)
   └─ div black band rotate-[-4deg] z-10 → track (ref)
```

## Classes (verbatim, abridged to the load-bearing ones)
- hero section: `relative w-full h-screen overflow-hidden flex items-center justify-center cursor-crosshair`
- layer imgs: `absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-10|z-20`
- webs container: `absolute inset-0 pointer-events-none z-[25] overflow-hidden`
- web imgs: `absolute top-0 left-0 w-[400px] h-[400px] object-contain opacity-50 -translate-x-1/4 -translate-y-1/4 mix-blend-multiply`
  / `absolute bottom-0 right-0 w-[500px] h-[500px] … translate-x-1/4 translate-y-1/4 mix-blend-multiply`
- copy block: `absolute top-1/2 -translate-y-1/2 left-6 md:left-12 lg:left-24 z-30 flex flex-col gap-3 pointer-events-none drop-shadow-md max-w-lg w-full`
- eyebrow: `text-[#a31515] font-bold uppercase text-xs md:text-sm tracking-[0.2em] opacity-0`
- h1: `text-gray-900 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none opacity-0 italic uppercase`
  with `style={{ textShadow: "4px 4px 0px #ef4444, 7px 7px 0px #a31515" }}`
- actions: `flex flex-wrap items-center gap-4 mt-6 pointer-events-auto`
- primary CTA: `relative overflow-hidden bg-[#a31515] hover:bg-[#7a0f0f] text-white px-8 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(163,21,21,0.4)] cursor-pointer uppercase border border-[#a31515]`
- resume link: `flex items-center gap-2 text-white bg-gray-900 hover:bg-black px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] uppercase text-sm group`
  with download icon path `M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z`
- marquee section: `relative w-full h-[20vh] md:h-[30vh] bg-white overflow-hidden flex items-center justify-center z-40`
- red band: `absolute w-[110vw] h-12 md:h-16 lg:h-20 bg-[#a31515] text-white border-y-[3px] border-black rotate-[4deg] -translate-y-4 md:-translate-y-6 shadow-[0_10px_20px_rgba(0,0,0,0.4)] z-20 flex items-center overflow-hidden scale-105`
- black band: `absolute w-[110vw] h-12 md:h-16 lg:h-20 bg-[#111111] text-[#a31515] border-y-[3px] border-[#a31515] rotate-[-4deg] translate-y-4 md:translate-y-6 shadow-[0_5px_15px_rgba(0,0,0,0.5)] z-10 flex items-center overflow-hidden scale-105`
- marquee text: `marquee-text mx-4 md:mx-6 text-sm md:text-base lg:text-xl font-black uppercase italic tracking-widest whitespace-nowrap shrink-0 drop-shadow-sm`
- separator img: `mx-4 md:mx-6 h-full w-auto object-cover shrink-0 drop-shadow-md` (even index → spider, odd → web)

## States & Behaviors
See `docs/research/spydyy-portfolio.vercel.app/BEHAVIORS.md` → "Hero" and "Marquee band" for the exact
GSAP tween parameters (mask gradient formula, quickTo smoothing, intro timeline offsets, idle loops,
`timeScale 1 ↔ 0.1` hover throttle). Every value in the clone is copied from there.

## Assets
- `public/images/hero-identity-bottom.png` (bottom layer)
- `public/images/hero-mask-top.png` (masked top layer)
- `public/images/web.png`, `public/images/spider.png`
- `public/Kutluhan_Gul_FullStack.pdf` (resume download)

## Content (this clone)
- Eyebrow: `Your Friendly Neighborhood Developer`
- Heading: `KUTLUHAN` / `GÜL.`
- CTA: `Explore Projects`, resume label `kutluhan_gul_cv.pdf`
- Marquee: FRONTEND DEVELOPMENT · REACT & REDUX · NODE.JS & REST API · TYPESCRIPT · FULL STACK DEVELOPER

## Responsive
- h1 `text-5xl` → `md:text-6xl` → `lg:text-7xl`; copy block left inset `6 → 12 → 24`.
- Marquee band height `h-12 → md:h-16 → lg:h-20`, section height `20vh → md:30vh`.

## Deviations from the original
- "Explore Projects" is an `<a href="#projects">` instead of an inert `<button>` (same classes, same
  flex-item rendering) so the CTA actually navigates.
