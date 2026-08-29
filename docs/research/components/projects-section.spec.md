# ProjectsSection Specification

## Overview
- **Target file:** `src/components/ProjectsSection.tsx`
- **Original component:** `_c`
- **Interaction model:** scroll-driven (ScrollTrigger) + idle loops + card hover

## DOM Structure
```
section#projects
├─ div background web (absolute top-right)     z-0
├─ div standing figure (absolute bottom-left)  z-30
├─ div heading (eyebrow + h2 + bar)            z-10
└─ div grid (1 → sm:2 cols) of .project-item   z-10
```

## Classes (verbatim)
- section: `relative w-full bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100`
- bg web wrapper: `absolute top-0 right-0 pointer-events-none overflow-hidden z-0`
  - img: `w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-contain opacity-[0.04] mix-blend-multiply translate-x-1/4 -translate-y-1/4`
- standing figure wrapper: `absolute bottom-0 left-4 md:left-12 z-30 pointer-events-none`
  - img: `w-32 md:w-48 h-auto object-contain drop-shadow-2xl`
- heading: same structure/classes as Skills (`Featured Works` / `PROJECTS.`)
- grid: `w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 z-10`
- card: `project-item group relative bg-gray-50/90 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_10px_25px_rgba(163,21,21,0.15)] transform hover:-translate-y-1`
  - top bar: `absolute top-0 left-0 w-full h-1 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out`
  - title `h3`: `text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-[#a31515] transition-colors duration-300`
  - icon `svg`: `w-5 h-5 text-gray-400 group-hover:text-[#a31515] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300`,
    path `M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`
  - description `p`: `text-xs md:text-sm text-gray-600 leading-relaxed font-medium mb-6`
  - tag row: `flex flex-wrap gap-2 pt-2 border-t border-gray-200/60`
  - tag: `text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white border border-gray-200 text-gray-600 group-hover:border-[#a31515]/30 group-hover:text-[#a31515] rounded-md transition-colors duration-300`

## States & Behaviors
`BEHAVIORS.md` → "Projects". Trigger `start:'top 80%'`; heading fade-up, `.project-item` stagger `0.1`,
standing figure entrance `back.out(1.7)` then a `y:-10` float; background web rotates/breathes from
`transformOrigin:'top right'`.

## Content (this clone) — 12 projects
Cinemania · Money Guard · Slim Moms · Focus Frame · GitVitals · SubSense · Next Step · City Verse ·
ReBuild ReBreak · Minik Gezgin · Time Shift · Apartment Management.

Titles come from the CV, live/repo URLs from the CV's PDF link annotations, descriptions condensed
from the matching GitHub repository descriptions. Data lives in `src/data/portfolio.ts` → `PROJECTS`.

## Responsive
- Single column below `sm`, two columns from `sm` up; grid capped at `max-w-4xl`.
- Standing figure `w-32` → `md:w-48`, offset `left-4` → `md:left-12`.

## Deviations from the original
- The original card is an inert `div` with `link:'#'`. The clone renders an `<a target="_blank" rel="noreferrer">`
  with the identical class list, pointing at each project's live URL, so the cards actually work.
- `Project.repo` is carried in the data model for later use (a second link/button is not part of the
  original design, so nothing renders it yet).
