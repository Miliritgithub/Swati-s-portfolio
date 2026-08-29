# Page Topology — spydyy-portfolio.vercel.app

Target: `https://spydyy-portfolio.vercel.app/` (Vite + React 19 SPA, Tailwind v4, GSAP 3.15 + ScrollTrigger).

Full client-side app source was recovered from the production bundle (`index-7gpe6wYR.js`), so every
class list, GSAP tween config and text string below is verbatim from the original, not estimated.
Recovered slices are kept next to this file as `app-src.js` (nav + hero) and `app-src2.js`
(about → contact). CSS tokens come from `index-BPMueBD_.css`.

## Root render order (`yc` component)

| # | Original fn | Role | Section id | Flow |
|---|-------------|------|-----------|------|
| 1 | `Hi` | Navbar | — | `fixed top-0 z-50` overlay |
| 2 | `Vi` | Hero + Marquee (one `<main>`, two `<section>`) | — | flow |
| 3 | `pc` | About | — (nav links `#about`, no matching id on the original) | flow |
| 4 | `hc` | Skills | `skills` | flow |
| 5 | `_c` | Projects | `projects` | flow |
| 6 | `vc` | Contact | `contact` | flow |

No footer exists on the original.

## Layout facts

- `body { font-family: var(--font-sans); background-color:#fafafa; margin:0; overflow-x:hidden }`
- No scroll container, no scroll-snap, no smooth-scroll library (no Lenis / Locomotive).
- Custom scrollbar: 6px, track `#fafafa`, thumb `#e4e4e7`, thumb hover `#d4d4d8`.
- Page height at 1440×900: 3891px.
- Hero `<main>` wrapper: `w-full flex flex-col bg-white overflow-hidden`.
- Sections 3–6 are plain flow blocks, each `border-t border-gray-100`, no z-index stacking except
  the decorative absolutely-positioned webs/spiders (`z-0`, `z-30`) inside each section.

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| Brand red | `#a31515` | eyebrows, buttons, borders, hover fills |
| Brand red hover | `#7a0f0f` | button hover |
| Text shadow red | `#ef4444` + `#a31515` | hero h1 double shadow |
| Heading shadow | `#fca5a5` | section h2 offset shadow |
| Page bg | `#fafafa` (body), `#ffffff` / `bg-gray-50` per section | |
| Nav scrolled | `bg-black/90` + `border-red-900/50` | |

## Fonts

Imported in CSS via `@import url(https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap)`.

- `--font-sans: "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- `--font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`

Mono is declared but never applied by any element in the markup.

## Assets

| Original | Local | Used by |
|----------|-------|---------|
| `/assets/image-1-fYP2o7gg.png` | `public/images/hero-mask-top.png` | Hero top (masked) layer — Spider-Man |
| `/assets/image-2-DS0sMyr7.png` | `public/images/hero-identity-bottom.png` | Hero bottom layer — the person |
| `/assets/web1-770H2sSx.png` | `public/images/web.png` | webs in hero / about / skills / projects / contact + marquee separator |
| `/assets/spydy-DLbFrGCQ.png` | `public/images/spider.png` | marquee separator, about + contact eyebrow icon |
| `/assets/spydy_hang-Cac1gK30.png` | `public/images/spider-hanging.png` | skills + contact hanging figure |
| `/assets/spydy_stand-BwBM-zCr.png` | `public/images/spider-standing.png` | projects standing figure |
| `/assets/mypic-a3-nZ6gT.png` | `public/images/profile.png` | about profile portrait |
| `/favicon.svg` | `public/favicon.svg` | favicon |
| `/sde_resume.pdf` | replaced by `public/Kutluhan_Gul_FullStack.pdf` | hero download button |

## Dead code in the original (deliberately NOT cloned)

- `aos` is imported and `AOS.init({duration:1000, once:true, easing:'ease-out-expo'})` runs, but no
  element carries a `data-aos` attribute — the library has zero visual effect. Not reproduced.
- CSS keyframes `breathe`, `pulse-slow`, `scan`, `spin-slow` are shipped but referenced by no class.
  Only `animate-bounce` (Tailwind built-in) is actually used, in the contact success state.
