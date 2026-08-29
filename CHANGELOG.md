# Changelog

## 2026-08-13

- Added a working mobile menu to the navbar (drop-down panel, X/Escape/link-click close, body scroll lock, aria attributes) — the original hamburger opened nothing.
- Verified the clone at 390px and 768px via same-origin iframes: no horizontal overflow, all sections stack as the original does; findings recorded in `docs/research/spydyy-portfolio.vercel.app/BEHAVIORS.md`.

- Cloned `spydyy-portfolio.vercel.app` as a personal portfolio: Navbar, Hero + marquee, About, Skills, Projects and Contact sections rebuilt in Next.js with GSAP/ScrollTrigger animations copied 1:1 from the target.
- Added portfolio content model (`src/types/portfolio.ts`, `src/data/portfolio.ts`) filled with Kutluhan Gül's CV, GitHub and portfolio data — 10 skills and 12 projects with live/repo links.
- Added `scripts/download-assets.mjs` and pulled the target site's 7 images + favicon into `public/`; CV PDF exposed at `public/Kutluhan_Gul_FullStack.pdf` for the hero download button.
- Switched fonts to Outfit + JetBrains Mono and applied the target's base styles (page background, custom scrollbar) in `globals.css`.
- Documented the clone in `docs/research/` (page topology, behaviors, per-component specs) with the recovered bundle sources kept as artifacts.
- Removed the unused shadcn carousel component and its dependency; ignored `docs/research/**` in ESLint.
- Scaffolded base project: Next.js 16.3 (App Router, src/, TypeScript, Turbopack) + Tailwind v4 + ESLint.
- Initialized shadcn/ui (radix base, nova preset, CSS variables) and added base components: accordion, avatar, badge, button, card, dialog, dropdown-menu, input, label, navigation-menu, separator, sheet, skeleton, tabs, textarea, tooltip.
- Created clone-website output directories: `docs/research/`, `docs/research/components/`, `docs/design-references/`, `scripts/`.
