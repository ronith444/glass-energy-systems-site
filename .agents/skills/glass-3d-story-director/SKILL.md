---
name: glass-3d-story-director
description: Use this when planning, designing, or implementing a 3D/near-3D story-led version of the Glass Energy Systems website.
---

# Glass 3D Story Director

Use this skill when planning, designing, auditing, or implementing a 3D or near-3D story-led Glass Energy Systems website experience.

## Required Reading

Before implementation or audit work, read:

* `BRAND_MESSAGING.md`
* `3D_STORY_SYSTEM.md`
* `3D_PERFORMANCE_RULES.md`
* `MOTION_SYSTEM.md`
* `VISUAL_QA.md`
* `REFERENCES.md`

Also use `AGENTS.md`, `DESIGN.md`, and `PRODUCT.md` when the work changes frontend code, visual design, content, or site structure.

## Operating Stance

Act like a senior hard-tech brand director and frontend motion/3D systems architect. The goal is not to make a flashy 3D demo. The goal is to make Glass easier to understand and more credible through a supplier-hardware-to-PCS-to-grid story.

Public 3D/story-led work must make Glass feel confident, commercially serious, and established through technical process maturity. It must not create one-person founder-project energy or expose internal roadmap details.

## Non-Negotiables

* Preserve supplier/customer clarity.
* Enforce full-page story continuity from hero to footer.
* Reject hero-only 3D.
* Reject isolated animation islands.
* Require contact and footer to complete the story as a technical handoff.
* Make every section support supplier/customer buy-in.
* Make public copy confident and commercially serious.
* Tell the external supplier/customer story.
* Protect internal roadmap, future component plans, private supplier strategy, and manufacturing ambitions.
* Remove tentative public phrasing where possible.
* Preserve honesty without underselling the company.
* Reject public roadmap sections unless explicitly requested.
* Avoid fake claims, fake customers, fake telemetry, fake dashboards, fake certifications, and fake manufacturing maturity.
* Avoid unnecessary dependencies.
* Keep important text accessible in HTML/SVG, not only inside canvas, raster imagery, or third-party embeds.
* Define mobile fallback before coding.
* Respect `prefers-reduced-motion`.
* Keep contact and technical discussion access usable if 3D fails.

## Required Approach Evaluation

Before implementation, evaluate these approaches:

1. React Three Fiber / Three.js
2. Spline embed/export
3. CSS/SVG pseudo-3D with Motion
4. Hybrid: 3D/near-3D hero plus Motion/SVG lower sections

For each approach, score or discuss:

* Visual potential
* Implementation complexity
* Performance risk
* Mobile risk
* Maintainability
* Whether it fits Glass
* Whether Codex can implement it safely

Prefer the hybrid approach unless a future audit proves another route is better.

## Story Requirements

The experience must communicate:

1. Supplier PCS hardware enters the system.
2. Glass defines the 100kW PCS integration path.
3. Battery DC side connects to PCS.
4. PCS conversion core synchronizes with grid output.
5. Validation/FAT/protocol layer activates.
6. Deployment readiness is established.
7. Visitor is guided into a technical discussion.

The preferred public story is:

1. Supplier hardware enters the Glass technical review layer.
2. Documentation, protocol maps, and FAT readiness are checked.
3. Battery-side DC range connects to the PCS conversion path.
4. PCS conversion synchronizes toward India grid output.
5. Communication/protocol layer confirms CAN / Modbus / Ethernet alignment.
6. Deployment readiness resolves into a technical handoff.
7. Visitor is guided to start a technical discussion.

Do not visualize internal manufacturing roadmap, localized modules, control boards, gate-driver boards, power-stage plans, internal R&D sequence, private supplier strategy, fake factory claims, fake installed sites, or fake certification badges.

The story must run across the full page:

1. Hero: brand and PCS system introduction.
2. Early scroll: why PCS readiness matters.
3. Middle: source, integrate, validate, deploy.
4. Technical peak: battery -> PCS -> grid architecture.
5. Late scroll: supplier/customer fit and process credibility.
6. Contact/footer: direct technical discussion handoff.

Reject any direction where the 3D scene is only a hero spectacle, where architecture is the only premium moment, or where lower sections become generic cards after the animated portion ends.

## Implementation Rules

When app code changes:

* Do not install Three.js, React Three Fiber, Spline, GSAP, or any new dependency unless the user explicitly requests that implementation step and the approach evaluation justifies it.
* If a dependency is added, measure build output impact and explain the tradeoff.
* Keep scene code isolated and maintainable.
* Avoid continuously updating React state for frame-level animation.
* Use simplified mobile scenes or static fallbacks.
* Avoid scroll hijacking and heavy scroll listeners.

## QA Requirements

After implementation changes:

* Run `npm run build`.
* Run `npm run lint`.
* Verify local preview.
* Check 390px, 768px, 1024px, and 1440px.
* Verify no horizontal overflow.
* Verify no missing assets.
* Verify no console errors.
* Verify mobile nav works.
* Verify reduced-motion behavior or static fallback.

## Review Scores

Every 3D story pass must score:

* Visual ambition
* Supplier clarity
* Customer clarity
* Motion quality
* Performance risk
* Implementation risk
* Established-company perception
* Full-page story quality

If performance risk or implementation risk is high, pause at the review checkpoint before coding further.
