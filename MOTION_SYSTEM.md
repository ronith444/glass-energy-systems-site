# Glass Energy Systems Motion System

## Motion Principle

Motion must explain power flow, hierarchy, system state, or interaction feedback. It should feel controlled, engineered, and physically weighted. It must never feel like decoration applied after the page was designed.

For 3D or near-3D story-led rebuilds, also follow `3D_STORY_SYSTEM.md` and `3D_PERFORMANCE_RULES.md` before choosing a motion or scene implementation approach.

Motion must tell the external deployment story:

Supplier documentation -> PCS integration -> validation -> grid readiness -> technical discussion.

Motion must not tell an internal roadmap, future component, manufacturing, or R&D story.

## Full-Page Motion Story

Motion must carry the story from top to bottom, not only reveal sections. The hero introduces the PCS/conversion system. Early sections should show why readiness matters. Middle sections should show the source -> integrate -> validate -> deploy progression. The architecture section is the technical peak. Contact and footer should resolve the motion into a direct technical handoff.

Approved continuity devices:

* Persistent deployment rail.
* Scroll-progress technical trace.
* Recurring signal or power-flow motif.
* Scene-to-scene activation where one section's output becomes the next section's input.
* Section status dots that imply process state, not decorative pagination.
* Subtle 3D or pseudo-3D continuity layer that stays readable on mobile.

Every animated section should answer one question: what changed in the Glass deployment path? Do not use motion only as reveal animation, and do not create isolated animation islands that are unrelated to the supplier/customer story.

## First-load Hero Sequence

* The page should start on a dark base to avoid a white flash.
* The logo/nav appears first with a short opacity and translate reveal.
* The hero headline appears next, followed by subheadline and CTAs.
* The PCS visual resolves with a slightly slower reveal so the hardware feels physical.
* Power traces activate last, after the static system is understandable.
* Total first-load choreography should feel complete within roughly 900-1400ms.
* Do not block reading content while waiting for motion.

## Battery -> PCS -> Grid Power-flow Rules

* Direction should be unambiguous: battery side to PCS conversion core to grid output.
* Animated flow should be subtle, slow, and continuous only when it clarifies the system.
* Muted green may represent battery/DC energy. Electric blue may represent controlled grid/output energy.
* The PCS should feel like the conversion point, not a generic icon in a row.
* Flow lines should use transform, opacity, stroke-dashoffset, or Motion values. Avoid animating layout properties.
* The animation must still make sense as a static diagram when reduced motion is enabled.

## Scroll-triggered Architecture Sequence

* The architecture section should reveal as a system, not as disconnected cards.
* First reveal the section heading and framing.
* Then reveal battery/DC, PCS core, grid output, and communication layer in logical order.
* Then activate a single directional flow pass.
* Do not run heavy continuous scroll listeners.
* Prefer Motion viewport primitives, IntersectionObserver, or CSS keyframes tied to classes.
* The architecture section must remain the second strongest visual moment after the hero.

## Section Reveal Timing

* Use reveals sparingly and vary them by content purpose.
* Standard section reveal: 220-360ms delay after viewport entry, 500-800ms duration.
* Small grouped elements: 60-100ms stagger.
* Technical lists: reveal in short groups, not one item at a time forever.
* Forms and utility content should be fast and direct.
* Avoid identical fade-up motion on every section.

## CTA Microinteractions

* Hover should communicate affordance with color, border, shadow, or icon movement.
* Active state should feel pressed: small translate or scale within 100-160ms.
* Focus states must be visible and not rely on hover.
* Icon movement should be internal to the button and must not shift layout.
* Button transitions should target specific properties, not `transition: all`.

## Mobile-safe Motion

* Reduce distance, blur, and parallax on mobile.
* Avoid large fixed backgrounds, large backdrop blurs, and expensive filter animation on scrolling containers.
* Keep touch interactions responsive. Do not delay taps with decorative motion.
* Architecture motion may simplify to one directional pulse or a static flow state.
* Verify no animation causes horizontal overflow at 390px.

## `prefers-reduced-motion` Rules

* All non-essential motion must stop or reduce under `prefers-reduced-motion: reduce`.
* Content must be visible without waiting for animation events.
* Replace motion with instant state, short opacity changes, or static diagrams.
* Disable continuous flow loops, parallax, large transforms, and long stagger sequences.
* Keep focus, hover, and active feedback readable without relying on movement.

## Performance Rules

* Animate transform and opacity by default.
* Use stroke-dashoffset only for small SVG paths where it is visually valuable.
* Avoid animating top, left, width, height, margin, padding, or box-shadow on large elements.
* Use `will-change` sparingly and remove it from inactive elements when possible.
* Avoid backdrop blur on large scrolling surfaces.
* Keep hero image assets responsive and compressed.
* Keep motion code local to the sections that need it.

## Prohibited Animation Patterns

* Motion added only because the page feels static.
* Infinite loops that distract from reading.
* Bouncy, elastic, playful easing that conflicts with infrastructure credibility.
* Scroll hijacking.
* Heavy parallax on mobile.
* Every section using the same fade-up reveal.
* Content hidden by default and revealed only if JavaScript succeeds.
* Decorative animated particles, orbs, or glow fields unrelated to PCS power flow.
