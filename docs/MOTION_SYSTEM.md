# Glass Energy Systems Motion System

## Principle

Motion is progressive enhancement. The approved static site remains the source of truth, and every animation resolves back to that exact settled state. Motion should communicate system activation, component alignment, technical verification, stable resolution and controlled energy flow.

The site must not behave like a motion showcase, WebGL demo, pinned cinematic scroll, gaming interface or generic landing-page preset.

## Architecture

- One React hook, `useSiteMotion`, runs once near the application root.
- One shared `IntersectionObserver` observes `[data-motion-section]`.
- A section receives `data-motion-state="visible"` once, then is unobserved.
- When a later section becomes visible, earlier sections are also marked visible so fast scrolling cannot leave hidden content above the viewport.
- If JavaScript fails, content remains visible because initial hidden states only apply after `motion-enabled` is added to the document root.
- If `prefers-reduced-motion` is active or Intersection Observer is unavailable, every section is revealed immediately.

Observer settings:

- Desktop and tablet: `threshold: 0.18`, `rootMargin: "0px 0px -12% 0px"`
- Mobile below 768px: `threshold: 0.12`, `rootMargin: "0px 0px -8% 0px"`

## Timing Tokens

Defined in `src/styles/motion.css`:

- `--motion-ease-enter: cubic-bezier(0.22, 1, 0.36, 1)`
- `--motion-ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--motion-ease-reflection: cubic-bezier(0.33, 1, 0.68, 1)`
- `--motion-duration-headline: 760ms`
- `--motion-duration-body: 620ms`
- `--motion-duration-visual: 860ms`
- `--motion-duration-item: 480ms`
- `--motion-duration-divider: 520ms`
- `--motion-duration-reflection: 900ms`
- `--motion-stagger-text: 90ms`
- `--motion-stagger-item: 85ms`
- `--motion-stagger-timeline: 100ms`
- `--motion-stagger-spec: 65ms`

Mobile reduces durations, distance and stagger so no section feels delayed.

## Allowed Properties

Allowed:

- `opacity`
- `transform`
- `clip-path`
- existing accurate SVG stroke properties, if present
- temporary transform-based reflection pseudo-elements

Prohibited:

- width, height, margin, padding, top, left or grid animation
- animated page surfaces, atmospheric gradients or transitions
- backdrop-filter animation
- large shadow animation
- continuous requestAnimationFrame loops
- scroll locking, pinning, scroll scrubbing, parallax or WebGL
- infinite animation loops

## Section Sequence Map

- Header: one load-only opacity and slight upward settle.
- Hero: eyebrow, headline, body, CTAs, system visual, one reflection, technical rail and cells.
- What We Are Building: text, outcomes, visual, unified capability panel and entries.
- Service Speed: text, visual, process panel, four stages and conclusion.
- Why PCS First: text and four editorial reasons.
- Deployment Model: text, rendered visual, six stage labels and closing sentence.
- System Architecture: text, rendered visual, legend panel and rows, with restrained central-row emphasis.
- Initial Platform: text, qualifier, visual, specification console, cells, one reflection and disclaimer.
- Built for India: text, infrastructure visual and four principles.
- Service and Reliability: text, five modules and final statement.
- Development Pathway: text, pathway visual, five stages and disclaimer.
- Partnership CTA: text, buttons, logo sculpture and one reflection.
- Footer: one grouped reveal.

## Reflections

Reflection sweeps are permitted only on:

1. Hero visual
2. Initial Platform specification console
3. Partnership CTA sculpture

They run once, do not loop, and are disabled below 768px and in reduced-motion mode.

## Reduced Motion

Under `prefers-reduced-motion: reduce`, all `[data-motion]` targets are immediately visible with no transform, clip-path, transition or animation. Visual overlays and reflections are disabled.

## QA Procedure

For motion changes:

1. Run `npm run build`.
2. Run `npm run lint`.
3. Verify browser console has no errors or React warnings.
4. Check 1440px, 1280px, 1024px, 768px, 430px, 390px and 360px.
5. Confirm no horizontal overflow.
6. Confirm fast scrolling leaves no hidden content.
7. Confirm reduced-motion mode reveals content immediately.
8. Confirm `document.getAnimations().filter((animation) => animation.effect?.getTiming().iterations === Infinity)` returns an empty array.
9. Confirm no page-surface transition, layout, copy, asset, logo, typography or dependency changes were introduced.
