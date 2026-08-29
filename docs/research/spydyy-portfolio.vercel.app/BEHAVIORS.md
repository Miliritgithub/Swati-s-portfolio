# Behaviors — spydyy-portfolio.vercel.app

All values are verbatim from the recovered bundle source, not observed approximations.

## Global

- GSAP 3.15 with `ScrollTrigger` (`gsap.registerPlugin(ScrollTrigger)` before About/Skills/Projects/Contact).
- Every section scopes its animations with `gsap.context(fn, sectionRef)` and reverts on unmount.
- No smooth-scroll library. Native scrolling only.
- Nav anchors are plain `href="#about|#skills|#projects|#contact"` — native jump, no smooth behavior.

## Navbar — scroll-driven

- **Trigger:** `window.scrollY > 50` (plain scroll listener, `useState` boolean).
- **State A (top):** `bg-transparent border-transparent py-5`
- **State B (scrolled):** `bg-black/90 backdrop-blur-md border-red-900/50 py-3 shadow-[0_4px_30px_rgba(220,38,38,0.15)]`
- **Transition:** `transition-all duration-300` on the `<nav>`.
- **Hover:** nav link text `text-gray-400 → text-white` (`duration-300`); underline span grows
  `w-0 → w-full` (`transition-all duration-300 ease-out`), `bg-red-600`, `shadow-[0_0_8px_rgba(220,38,38,0.8)]`.

## Hero — pointer-driven mask + intro timeline

- **Cursor spotlight:** the top image (`z-20`) gets a JS-driven `mask-image`:
  `radial-gradient(circle ${size}px at ${x}px ${y}px, rgba(0,0,0,${alpha}) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,1) 100%)`
  written every tick from `gsap.ticker.add`.
  - Pointer position is smoothed with `gsap.quickTo(state,'x'|'y',{duration:0.3, ease:'power4.out'})`.
  - Initial / mouse-leave state: `alpha:1, size:50` — top layer fully opaque.
    `onMouseLeave → gsap.to(state,{alpha:1,size:50,duration:1.2,ease:'power4.inOut',overwrite:'auto'})`
  - `onMouseEnter → gsap.to(state,{alpha:0,size:700,duration:0.8,ease:'elastic.out(1, 0.7)',overwrite:'auto'})`
    — a 700px hole opens around the cursor and reveals the bottom identity layer.
  - Section cursor: `cursor-crosshair`.
- **Intro timeline** (`defaults:{ease:'back.out(1.7)'}`, runs on mount, no ScrollTrigger):
  1. webs container children: `{opacity:0,scale:0.5} → {opacity:0.5,scale:1,duration:2,stagger:0.4,ease:'power3.out'}`
  2. eyebrow: `{x:-100,opacity:0} → {x:0,opacity:1,duration:1.2}` at `-=1.5`
  3. h1: `{x:-150,opacity:0,skewX:-15} → {x:0,opacity:1,skewX:0,duration:1.2}` at `-=1.0`
  4. button row children: `{y:40,opacity:0} → {y:0,opacity:1,duration:0.8,stagger:0.15,ease:'back.out(2)'}` at `-=0.8`
- **Idle loops:**
  - webs children: `rotation:360, duration:120, repeat:-1, ease:'linear'`
  - webs children: `scale:1.1, duration:4, yoyo:true, repeat:-1, ease:'sine.inOut'`
- **Hero buttons hover:** `hover:-translate-y-1` + red / black shadow, `transition-all duration-300`.

## Marquee band — time-driven, hover-throttled

- Two counter-rotated bands: red `rotate-[4deg]` (`z-20`) over black `rotate-[-4deg]` (`z-10`), both
  `w-[110vw] scale-105`, `border-y-[3px]`.
- Top track: `gsap.to(top,{x:'-50%',repeat:-1,duration:15,ease:'none'})`
- Bottom track: `gsap.set(bottom,{x:'-50%'})` then `gsap.to(bottom,{x:'0%',repeat:-1,duration:20,ease:'none'})`
- Each track renders the item list **twice** (`[...[,,]].map`) so the 50% shift loops seamlessly.
- Text bob: `.marquee-text → {y:-4, yoyo:true, repeat:-1, duration:0.8, ease:'sine.inOut', stagger:0.1}`
- **Hover on the band section:** both track tweens `timeScale: 1 → 0.1` (`duration:0.8, ease:'power2.out'`);
  on leave back to `1` with the same tween.
- Separator image alternates per index: even → spider icon, odd → web image.

## About — ScrollTrigger

- **Trigger:** `{trigger: section, start:'top 70%', end:'bottom center', toggleActions:'play none none reverse'}`
- Sequence:
  1. both hanging-web columns: `{y:-600,opacity:0} → {y:0,opacity:1,duration:1.8,ease:'elastic.out(0.8, 0.4)',stagger:0.3}`
  2. eyebrow: `{x:-50,opacity:0,clipPath:'polygon(0 0, 0 0, 0 100%, 0% 100%)'} → {x:0,opacity:1,clipPath:'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',duration:0.8,ease:'power3.out'}` at `-=1.4`
  3. h2: `{y:50,opacity:0,clipPath:'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'} → {...,duration:0.8,ease:'power3.out'}` at `-=1.0`
  4. portrait column: `{y:-800,opacity:0} → {y:0,opacity:1,duration:1.8,ease:'elastic.out(0.7, 0.4)'}` at `-=0.8`
  5. paragraph children: `{y:40,opacity:0,rotationX:-45} → {y:0,opacity:1,rotationX:0,duration:1,stagger:0.15,ease:'back.out(1.2)'}` at `-=1.2` (parent has `perspective:1000px`)
  6. tech pills: `{scale:0.5,opacity:0,y:20} → {scale:1,opacity:1,y:0,duration:0.5,stagger:0.1,ease:'back.out(1.5)'}` at `-=0.8`
- **Idle loops:**
  - portrait column swings: `rotation:2.5, transformOrigin:'top center', yoyo:true, repeat:-1, duration:3.2, ease:'sine.inOut', delay:2`
  - `.bg-web-left`: `rotation:360, repeat:-1, duration:70, ease:'linear'`
  - `.bg-web-right`: `rotation:-360, repeat:-1, duration:90, ease:'linear'`
  - `.glow-frame`: `boxShadow:'0px 15px 35px rgba(163,21,21,0.25)', yoyo:true, repeat:-1, duration:2, ease:'sine.inOut'`
  - `.tech-pill`: `y:-4, yoyo:true, repeat:-1, duration:1.5, ease:'sine.inOut', stagger:{each:0.2, from:'random'}, delay:1.5`
- **Hover:** portrait wrapper is `group`; frame `group-hover:scale-105` (`duration-500`); image
  `grayscale → hover:grayscale-0` (`duration-700`). Tech pill hover: bg red, white text, red shadow.

## Skills — ScrollTrigger

- **Trigger:** `{trigger: section, start:'top 80%', toggleActions:'play none none reverse'}`
- Heading block: `{y:20,opacity:0} → {y:0,opacity:1,duration:0.6,ease:'power3.out'}`
- `.matrix-item`: `{y:30,opacity:0,x:-15} → {y:0,opacity:1,x:0,duration:0.5,stagger:0.04,ease:'back.out(1.5)'}` at `-=0.3`
- Background web: `scale:1.05, opacity:0.06, repeat:-1, yoyo:true, duration:5, ease:'sine.inOut'`
- Hanging figure: `rotation:5, transformOrigin:'top center', repeat:-1, yoyo:true, duration:3.2, ease:'sine.inOut'`
- **Card hover:** red panel slides in (`-translate-x-full → translate-x-0`, `duration-400 ease-out`),
  border → `#a31515`, card lifts `-translate-y-0.5`, name/category text → white, level badge → black bg / white text.

## Projects — ScrollTrigger

- **Trigger:** `{trigger: section, start:'top 80%', toggleActions:'play none none reverse'}`
- Heading: `{y:20,opacity:0} → {y:0,opacity:1,duration:0.6,ease:'power3.out'}`
- `.project-item`: `{y:30,opacity:0} → {y:0,opacity:1,duration:0.5,stagger:0.1,ease:'back.out(1.4)'}` at `-=0.3`
- Standing figure: `{y:100,opacity:0} → {y:0,opacity:1,duration:0.8,ease:'back.out(1.7)'}` at `-=0.4`,
  then idle `y:-10, repeat:-1, yoyo:true, duration:2.5, ease:'sine.inOut'`
- Background web: `gsap.set(web,{transformOrigin:'top right'})`, then
  `rotation:8, repeat:-1, yoyo:true, duration:6, ease:'sine.inOut'` and
  `scale:1.1, opacity:0.07, repeat:-1, yoyo:true, duration:4, ease:'sine.inOut'`
- **Card hover:** top red bar slides in (`-translate-x-full → translate-x-0`, `duration-500 ease-out`),
  title → red, external-link icon translates `x+1 / y-1`, card lifts `-translate-y-1`, tag borders → red.

## Contact — ScrollTrigger + local form state

- **Trigger:** `{trigger: section, start:'top 80%', toggleActions:'play none none reverse'}`
- Heading: `{y:20,opacity:0} → {y:0,opacity:1,duration:0.6,ease:'power3.out'}`
- Card: `{y:30,opacity:0} → {y:0,opacity:1,duration:0.7,ease:'back.out(1.4)'}` at `-=0.3`
- Background web: `scale:1.15, opacity:0.06, repeat:-1, yoyo:true, duration:4.5, ease:'sine.inOut'`
- Hanging figure: `rotation:8, transformOrigin:'top center', repeat:-1, yoyo:true, duration:2, ease:'sine.inOut'`
- **Form:** `onSubmit` calls `preventDefault()`, sets `sent=true`, and `setTimeout(() => sent=false, 4000)`.
  Nothing is sent anywhere — the success panel (`✓` badge with `animate-bounce`, "Message Sent!") is
  purely local state. Inputs use `focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515]`.

## Responsive

Breakpoints are Tailwind defaults (`sm:640px`, `md:768px`, `lg:1024px`).

| Section | Desktop (1440) | Tablet (768) | Mobile (390) |
|---------|----------------|--------------|--------------|
| Nav | links row visible, `px-12` | links visible from `md` | links hidden, hamburger button shown (decorative — no menu is wired up) |
| Hero | h1 `text-7xl` (`lg`), copy block `left-24` | `text-6xl`, `left-12` | `text-5xl`, `left-6` |
| Marquee | band `h-20` (`lg`), text `text-xl` | `h-16`, `text-base` | `h-12`, `text-sm`, section height `20vh` (`md:30vh`) |
| About | `lg:flex-row`, gap 20, portrait right | stacked `flex-col-reverse` (portrait above text), gap 12 | same as tablet, smaller portrait `w-64` |
| Skills | 2-column grid | 2-column from `sm`, hanging figure `w-40` (`md`) | single column, figure `w-28` |
| Projects | 2-column grid, `max-w-4xl` | 2-column from `sm` | single column, standing figure `w-32` |
| Contact | form 2-column name/email row | 2-column from `sm` | single column |

### Clone verification (2026-08-13)

Verified by rendering the clone inside 390×740 and 768×740 same-origin iframes (the Chrome window
would not resize, and media queries respond to the iframe viewport, so this is equivalent).

- No horizontal overflow at either width (`scrollWidth` 384 at 390, 762 at 768; `body` keeps `overflow-x:hidden`).
- Hero: heading/eyebrow/CTA stack correctly; buttons wrap to two rows at 390.
- About: `flex-col-reverse` puts the portrait above the copy at both widths.
- Skills: 1 column at 390, 2 columns at 768. Projects: same. Contact: name/email stack at 390.
- Nav: hamburger replaces the link row below `md`; scrolled black bar renders correctly.

Known overlaps, present in the original with the same classes and therefore kept:
- Skills hanging figure overlaps the top-right card's level badge.
- Contact hanging figure overlaps the form card (it is `pointer-events-none`, so input focus still works).
- Hero copy block is `left-6 … w-full`, so it extends ~18px past the right edge at 390; clipped by
  `overflow-x:hidden`.

Functional gap inherited from the original: the mobile hamburger button opens nothing — there is no
mobile menu, so navigation is unavailable below 768px.

**Closed since:** the clone adds a mobile drop-down menu (spec in
`docs/research/components/navbar.spec.md`). Verified at 390px: panel opens to 204px, closes on link
click (scrolls to the section), on the X icon and on `Escape`; body scroll is locked while open and
restored afterwards.
