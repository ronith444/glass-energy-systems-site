# Glass Energy Systems 3D Story System

## Purpose

This file prepares future redesign passes for a heavily animated, 3D or near-3D, story-led version of the Glass Energy Systems website. It is guidance only. It does not require installing new dependencies or changing the current site.

The ambition is a premium hard-tech experience that helps suppliers and customers understand Glass quickly, while making the PCS integration path feel physical, technical, and deployment-minded.

## Core Story

The 3D or near-3D experience should make this sequence legible:

1. Supplier PCS hardware enters the system.
2. Glass defines the 100kW PCS integration path.
3. Battery DC side connects to PCS.
4. PCS conversion core synchronizes with grid output.
5. Validation, FAT, and protocol layer activates.
6. Deployment readiness is established.
7. Visitor is guided into a technical discussion.

This story must remain readable even when motion is reduced, 3D fails, or the visitor is on mobile.

## 3D Story Without Internal Roadmap Disclosure

The 3D story should show an external customer/supplier-facing deployment narrative, not an internal product roadmap.

Approved story:

1. Supplier hardware enters the Glass technical review layer.
2. Documentation, protocol maps, and FAT readiness are checked.
3. Battery-side DC range connects to the PCS conversion path.
4. PCS conversion synchronizes toward India grid output.
5. Communication/protocol layer confirms CAN / Modbus / Ethernet alignment.
6. Deployment readiness resolves into a technical handoff.
7. Visitor is guided to start a technical discussion.

Do not visualize:

* Internal manufacturing roadmap.
* Future localized modules.
* Control boards, gate-driver boards, or power-stage plans.
* Internal R&D sequence.
* Private supplier strategy.
* Fake factory or production claims.
* Fake installed sites.
* Fake certification badges.

The story should feel established by showing process maturity, not fake scale.

## Full-Page Scroll Story Requirement

The 3D or near-3D story must run from hero to footer. Every section should feel like a chapter in the same technical deployment narrative, not a standalone visual trick.

Approved full-page narrative:

1. Top: brand and PCS system introduction.
2. Early scroll: why PCS readiness matters.
3. Middle: source, integrate, validate, and deploy pathway.
4. Technical peak: battery -> PCS -> grid architecture.
5. Late scroll: supplier/customer fit and process credibility.
6. End: technical discussion handoff.

The page should feel like one connected system:

Supplier/customer context -> supplier documentation and hardware -> PCS integration -> FAT/protocol validation -> grid/deployment readiness -> contact handoff.

Reject:

* One cool 3D hero followed by normal landing-page cards.
* One animated architecture block followed by static content.
* Disconnected section animations.
* Generic scroll reveals without story meaning.
* A footer that feels pasted onto the end of a separate site.

Section chapter roles:

* Hero: visitor enters the Glass system; the premium PCS/conversion-core visual establishes brand and domain.
* Why Glass Exists: external deployment problem; India's C&I storage market needs field-ready PCS integration, not only battery capacity.
* What Glass Handles: source -> integrate -> validate -> deploy.
* Technical Focus: supplier hardware -> battery DC bus -> PCS conversion core -> grid output -> communication/protocol layer -> validation layer.
* Supplier / Customer Fit: the story branches into PCS suppliers, EPCs, integrators, C&I developers, and strategic partners.
* Current Status: process maturity through documentation, FAT, protocol alignment, and field-readiness workflow.
* Contact: technical handoff for project context, PCS specs, supplier profile, or pilot requirements.
* Footer: resolved system state, compact trust context, and continuation path.

## Primary Audiences

* PCS suppliers
* EPCs
* C&I BESS developers
* Integrators
* Strategic partners / investors

## What The 3D/Motion Must Communicate

* Glass is focused.
* Glass is technical.
* Glass is commercially serious.
* Glass is supplier-ready.
* Glass understands deployment reality.
* Glass is not a generic energy site.

Supplier and customer clarity outrank spectacle. The experience should feel like power electronics, validation, and deployment readiness, not abstract sci-fi.

## Approved 3D / Near-3D Directions

* Cinematic PCS conversion core.
* Battery-side energy entering from one side.
* Grid-side output leaving the other side.
* Supplier hardware layer entering before integration.
* Validation/FAT layer activating after PCS and grid synchronization.
* Protocol/data layer with CAN, Modbus, Ethernet, documentation, and fault-code cues.
* HTML/SVG labels over 3D or pseudo-3D visuals.
* Controlled blue/green technical power flow.
* Dark premium hard-tech atmosphere.
* Real current logo/assets and hero PCS assets as visual reference material.

## Banned Directions

* Crypto-looking particles.
* Random stars.
* Sparkles.
* Meteors.
* Vortex effects.
* Playful robot/product demo treatment.
* Fake dashboard.
* Sci-fi clutter.
* Unreadable tiny labels.
* Heavy 3D that breaks mobile.
* 3D that distracts from supplier/customer clarity.
* Fake telemetry, fake customer proof, fake certifications, or fake manufacturing claims.
* Internal roadmap, future component plans, private R&D sequence, or manufacturing ambitions.

## Implementation Approaches To Evaluate

Future implementation prompts must compare these approaches before coding.

### A. React Three Fiber / Three.js

Evaluate:

* Visual potential: highest potential for physical PCS depth, camera movement, parallax, and conversion-core storytelling.
* Implementation complexity: high, especially if modeling, lighting, responsive camera behavior, and event coordination are custom.
* Performance risk: high without strict asset, draw-call, shader, animation-loop, and mobile fallback discipline.
* Mobile risk: high unless simplified or replaced with a static/near-3D fallback.
* Maintainability: moderate to low unless scene code is isolated, documented, and kept small.
* Glass fit: strong only if the scene is hardware-specific, supplier-readable, and restrained.
* Codex safety: use only if the future audit proves the scene can be implemented and verified safely.

### B. Spline Embed / Export

Evaluate:

* Visual potential: strong for fast 3D mockups and art-directed hardware scenes.
* Implementation complexity: moderate if embedded, higher if exported and customized.
* Performance risk: medium to high depending on asset weight and runtime.
* Mobile risk: medium to high unless a fallback is designed first.
* Maintainability: depends on whether the source scene is available, versioned, and editable.
* Glass fit: strong only if labels and story remain accessible outside the canvas/embed.
* Codex safety: use only if future agents can verify the embed/export behavior, fallback, and load cost.

### C. CSS/SVG Pseudo-3D With Motion

Evaluate:

* Visual potential: moderate to high for layered panels, depth planes, conversion traces, and technical labels.
* Implementation complexity: moderate and aligned with the current React/Vite/Motion stack.
* Performance risk: lower than full 3D when transforms, opacity, SVG strokes, and masks are controlled.
* Mobile risk: lower if the system stacks or simplifies cleanly.
* Maintainability: high when built from semantic HTML/SVG and current CSS conventions.
* Glass fit: strong for supplier/customer clarity and accessible labels.
* Codex safety: safest near-term path if a full 3D scene is not proven necessary.

### D. Hybrid: 3D/Near-3D Hero + Motion/SVG Lower Sections

Evaluate:

* Visual potential: high, with a cinematic hero or architecture set piece plus readable lower sections.
* Implementation complexity: moderate to high depending on the hero scene choice.
* Performance risk: manageable if heavy 3D is isolated and lazy-loaded.
* Mobile risk: manageable if the fallback is designed before coding.
* Maintainability: stronger than a full-page 3D rebuild when the story is split into clear modules.
* Glass fit: strongest default because the hero/architecture can carry ambition while HTML/SVG sections preserve clarity.
* Codex safety: preferred default unless a future audit proves another route is better.

## Preferred Default

Use the hybrid approach by default:

* 3D or near-3D hero/architecture moment for the supplier-hardware-to-PCS-to-grid story.
* Motion/SVG/HTML lower sections for validation, fit, status, and contact.
* Accessible text outside canvas/raster layers.
* Simplified mobile scene or static fallback planned before implementation.

Future agents may choose React Three Fiber, Spline, or CSS/SVG pseudo-3D instead, but only after scoring the approaches and explaining why the chosen route is safer and more Glass-specific than the hybrid default.

## Story Quality Checklist

Before any 3D implementation, verify:

* The first viewport still says what Glass does.
* The supplier hardware layer is visible or clearly implied.
* The 100kW PCS path is explicit.
* Battery DC, PCS conversion, grid output, validation/FAT, and protocol mapping are understandable.
* Contact is still a direct technical discussion, not a generic marketing CTA.
* No important claim is only visible inside a canvas, raster image, or external embed.
* No internal roadmap, component roadmap, manufacturing plan, or private supplier strategy is exposed.
* The company feels established through process maturity, not fake scale.
* Reduced-motion and mobile fallback behavior are defined before coding.
