# ContactSection Specification

## Overview
- **Target file:** `src/components/ContactSection.tsx`
- **Original component:** `vc`
- **Interaction model:** scroll-driven (ScrollTrigger) + idle loops + local form state

## DOM Structure
```
section#contact
├─ div background web (absolute bottom-left)   z-0
├─ div hanging figure (thread + img, top-right) z-30
├─ div heading (eyebrow with spider icon + h2 + bar) z-10
└─ div card → form | success panel             z-10
```

## Classes (verbatim)
- section: `relative w-full bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100`
- bg web wrapper: `absolute bottom-0 left-0 pointer-events-none overflow-hidden z-0`
  - img: `w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-contain opacity-[0.04] mix-blend-multiply -translate-x-1/4 translate-y-1/4`
- hanging wrapper: `absolute top-0 right-8 md:right-20 z-30 pointer-events-none flex flex-col items-center origin-top`
  - thread: `w-[2px] h-24 md:h-36 bg-gradient-to-b from-transparent to-gray-400 opacity-60`
  - img: `w-40 md:w-60 h-auto object-contain drop-shadow-2xl -mt-2`
- eyebrow: `text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2 flex items-center gap-1.5` + spider icon `w-4 h-4 object-contain`
- h2 `CONTACT.` + bar: same as Skills/Projects
- card: `w-full max-w-2xl bg-gray-50/90 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-sm relative z-10`
- form: `flex flex-col gap-5`; name/email row `grid grid-cols-1 sm:grid-cols-2 gap-4`
- label: `text-xs font-bold uppercase tracking-wider text-gray-600`
- input/textarea: `w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all` (textarea adds `resize-none`, `rows=4`)
- submit: `w-full bg-[#a31515] hover:bg-[#7a0f0f] text-white py-3.5 rounded-xl font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-[0_4px_15px_rgba(163,21,21,0.3)] hover:shadow-[0_6px_20px_rgba(163,21,21,0.5)] cursor-pointer mt-2`
- success panel: `py-12 flex flex-col items-center text-center`
  - badge: `w-12 h-12 bg-[#a31515] text-white rounded-full flex items-center justify-center text-xl font-black mb-4 shadow-md animate-bounce` with `✓`
  - title: `text-xl font-black uppercase tracking-tight text-gray-900 mb-2` — "Message Sent!"
  - copy: `text-sm text-gray-600 font-medium` — "Thanks for reaching out. I'll get back to you shortly."

## States & Behaviors
- ScrollTrigger `start:'top 80%'`: heading fade-up, then card `back.out(1.4)`.
- Background web breathing loop, hanging figure swing — values in `BEHAVIORS.md` → "Contact".
- **Form:** `onSubmit` → `preventDefault()` → `sent=true` → `setTimeout(() => sent=false, 4000)`.
  Nothing is transmitted anywhere. This is the original's behaviour, reproduced as-is.

## Placeholders (kept from the original, theme-consistent)
`Peter Parker`, `peter@stark.com`, `Let's build something amazing together...`

## Responsive
- Name/email row is single column below `sm`, two columns from `sm` up.
- Hanging figure `w-40` → `md:w-60`, offset `right-8` → `md:right-20`.

## Deviations from the original
- None. Note for follow-up: the form is decorative — it needs a real submit target (mailto, Formspree,
  Resend, a route handler) before this page is used as a live contact channel.
- The `animate-bounce` success badge is flagged by the repo's design hook as dated easing; it is kept
  because this is a faithful clone of the target's markup.
