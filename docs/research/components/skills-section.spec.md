# SkillsSection Specification

## Overview
- **Target file:** `src/components/SkillsSection.tsx`
- **Original component:** `hc`
- **Interaction model:** scroll-driven (ScrollTrigger) + idle loops + card hover

## DOM Structure
```
section#skills
├─ div background web (absolute inset-0, centered)     z-0
├─ div hanging figure (thread + img)                   z-30
├─ div heading (eyebrow + h2 + underline bar)          z-10
└─ div grid (1 → sm:2 cols) of .matrix-item cards      z-10
```

## Classes (verbatim)
- section: `relative w-full bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100`
- bg web wrapper: `absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0`
  - img: `w-[600px] h-[600px] md:w-[800px] md:h-[800px] object-contain opacity-[0.04] mix-blend-multiply`
- hanging wrapper: `absolute top-0 right-8 md:right-16 z-30 pointer-events-none flex flex-col items-center origin-top`
  - thread: `w-[2px] h-16 md:h-24 bg-gradient-to-b from-transparent to-gray-400 opacity-60`
  - img: `w-28 md:w-40 h-auto object-contain drop-shadow-lg -mt-2`
- heading wrapper: `flex flex-col items-center text-center mb-10 z-10`
  - eyebrow: `text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2`
  - h2: `text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900` + `textShadow: 2px 2px 0px #fca5a5`
  - bar: `w-12 h-1 bg-[#a31515] mt-2 rounded-full`
- grid: `w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 z-10`
- card: `matrix-item group relative bg-gray-50/90 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] px-5 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_8px_20px_rgba(163,21,21,0.15)] transform hover:-translate-y-0.5`
  - sliding fill: `absolute inset-0 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out z-0`
  - dot: `w-2 h-2 rounded-full bg-[#a31515] group-hover:bg-white transition-colors duration-300 shadow-[0_0_8px_rgba(163,21,21,0.6)]`
  - name: `text-sm md:text-base font-black uppercase tracking-tight text-gray-900 group-hover:text-white transition-colors duration-300`
  - category: `text-[10px] font-semibold text-gray-400 group-hover:text-gray-200 transition-colors duration-300 uppercase tracking-widest`
  - level badge: `text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-white text-gray-700 group-hover:bg-black group-hover:text-white rounded-full transition-colors duration-300 shadow-sm`

## States & Behaviors
`BEHAVIORS.md` → "Skills". Trigger `start:'top 80%'`, `toggleActions:'play none none reverse'`;
heading fade-up then `.matrix-item` stagger `0.04`; background web breathing loop; hanging figure swing.

## Content (this clone) — 10 items, `{ name, category, level }`
React · JavaScript / TS · HTML / CSS · Node.js & Express · Redux Toolkit · REST API · Tailwind CSS ·
MongoDB · Git & GitHub · Prompt Engineering — see `src/data/portfolio.ts` → `SKILLS`.

**Open item:** the CV lists skills without proficiency levels. The Advanced/Proficient values are an
assumption made to fill the original card layout and need the user's confirmation.

## Responsive
- Single column below `sm`, two columns from `sm` (640px) up.
- Hanging figure `w-28` → `md:w-40`; section padding `px-6 → md:px-16 → lg:px-24`.

## Deviations from the original
- None beyond content.
