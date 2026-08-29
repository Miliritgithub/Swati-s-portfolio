# AboutSection Specification

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Original component:** `pc`
- **Interaction model:** scroll-driven (ScrollTrigger) + idle loops + hover

## DOM Structure
```
section.min-h-screen.bg-gray-50 (id="about")
├─ div hanging web left  (thread div + img.bg-web-left)   z-0
├─ div hanging web right (thread div + img.bg-web-right)  z-0
└─ div container (flex-col-reverse lg:flex-row)           z-10
   ├─ div text column
   │  ├─ div.overflow-hidden → span eyebrow (spider icon + "Behind the Mask")
   │  ├─ div.overflow-hidden.py-2 → h2 name
   │  ├─ div paragraphs (perspective:1000px)
   │  └─ div "Primary Tech Stack" → pills (.tech-pill)
   └─ div portrait column → div.group (thread + .glow-frame + img)
```

## Classes (verbatim)
- section: `relative w-full min-h-screen bg-gray-50 text-gray-900 py-24 flex items-center justify-center overflow-hidden`
- web left wrapper: `absolute top-[-50px] left-[-5%] md:left-[2%] flex flex-col items-center pointer-events-none z-0`
  - thread: `w-[1px] h-[250px] md:h-[350px] bg-gradient-to-b from-transparent to-gray-300`
  - img: `bg-web-left w-64 h-64 md:w-96 md:h-96 object-contain -mt-12 opacity-[0.12] mix-blend-multiply`
- web right wrapper: `absolute top-[-50px] right-[-5%] md:right-[2%] …`
  - thread: `w-[1px] h-[200px] md:h-[300px] …`
  - img: `bg-web-right w-56 h-56 md:w-80 md:h-80 object-contain -mt-10 opacity-[0.12] mix-blend-multiply`
- container: `container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-20 z-10 relative`
- text column: `flex-1 flex flex-col gap-6 mt-10 lg:mt-0 relative z-20`
- eyebrow: `inline-flex items-center gap-2 text-[#a31515] font-bold uppercase text-xs md:text-sm tracking-[0.2em]`, icon `w-5 h-5 object-contain drop-shadow-sm`
- h2: `text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase italic text-gray-900`, `style={{ textShadow: "2px 2px 0px #fca5a5" }}`
- paragraph wrapper: `flex flex-col gap-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl font-medium mt-2` + `style={{ perspective: "1000px" }}`; each `p` is `origin-bottom`
- stack label `h3`: `text-xs uppercase tracking-widest text-gray-500 mb-6 font-bold border-b border-gray-300 pb-2 inline-block`
- pill: `tech-pill px-5 py-2.5 border border-[#a31515]/30 bg-white text-[#a31515] rounded-xl text-sm font-bold tracking-wider hover:bg-[#a31515] hover:text-white hover:border-[#a31515] shadow-sm hover:shadow-[0_8px_20px_rgba(163,21,21,0.3)] transition-colors duration-300 cursor-default`
- portrait column: `flex-1 relative flex justify-center items-start min-h-[550px] w-full pt-0`
- portrait group: `flex flex-col items-center z-30 group`
  - thread: `w-[2px] h-[200px] md:h-[350px] bg-gradient-to-b from-transparent via-[#a31515]/60 to-[#a31515]`
  - frame: `glow-frame relative w-64 h-64 md:w-[340px] md:h-[340px] rounded-full border-[6px] border-[#a31515] p-2 bg-white shadow-2xl transition-transform duration-500 group-hover:scale-105`
  - img: `w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700`

## States & Behaviors
Full tween list in `BEHAVIORS.md` → "About". Trigger `start:'top 70%'`, `end:'bottom center'`,
`toggleActions:'play none none reverse'`; six chained `fromTo`s plus five idle loops.

## Assets
`public/images/web.png`, `public/images/spider.png`, `public/images/profile.png`

## Content (this clone)
- Eyebrow: `Behind the Mask` (kept — it is part of the visual theme)
- Heading: `Kutluhan Gül.`
- Two paragraphs sourced from the CV professional summary (`src/data/portfolio.ts` → `ABOUT_PARAGRAPHS`)
- Pills: React · TypeScript · Node.js · Redux · REST API · Git

## Responsive
- `lg` and up: two columns, portrait right, gap 20.
- Below `lg`: `flex-col-reverse` → portrait above the text, gap 12.
- Portrait frame `w-64 h-64` → `md:w-[340px] md:h-[340px]`.

## Deviations from the original
- `id="about"` added to the section. The original navbar links to `#about` but no element carries
  that id, so the link is dead on the source site; the clone makes it work.
- Profile image is still the original photo — the user will supply a replacement later.
