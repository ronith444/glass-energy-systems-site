# Glass Energy Systems Design System

## Art Direction

Glass Energy Systems should read as a premium hard-tech energy infrastructure company. The world is power electronics, grid-tied storage, field commissioning, and reliability engineering. The site should feel cinematic, calm, technical, and grounded in real hardware.

Core idea: Precision Infrastructure. Use a strong rendered PCS conversion visual, precise power-flow traces, sparse specifications, layered glass/metal surfaces, and generous negative space.

## Related Guidance

Use `BRAND_MESSAGING.md` for approved copy, claims, audiences, and section structure. Use `VISUAL_QA.md` for launch-quality visual checks. Use `MOTION_SYSTEM.md` for animation choreography and reduced-motion requirements. Use `REFERENCES.md` for the reference lane and signature interaction.

## Framework Rules

* The current app is Vite + React + TypeScript.
* Motion is the default animation engine and must be imported as `import { motion } from "motion/react"`.
* shadcn/ui is not initialized unless a future component requirement clearly needs it.
* Magic UI, Aceternity UI, Componentry, and Refero are design references, not template sources.
* Useful Magic-UI-style pieces can be implemented locally when they directly support the power-electronics story.
* Aceternity and Componentry folders are reserved for project-local primitives or source-attributed adaptations, not copied demo dumps.

## Typography

* Display and body: Space Grotesk.
* Technical accents: IBM Plex Mono.
* Display headings use tight tracking and short line counts.
* Body copy should stay under roughly 55 characters per line.
* Avoid title-casing every phrase. Use plain, specific language.

## Colors

* Base: off-black graphite and dark navy.
* Surface: translucent charcoal with restrained inner highlights.
* Text: near-white for headings, cool grey for body.
* Accent: one disciplined electric blue.
* Secondary signal: muted green only for power-flow and grid/battery cues.
* Avoid purple-blue AI gradients, rainbow meshes, and neon glow stacks.

## Spacing

* Sections need large vertical spacing and clear chapter rhythm.
* The hero must fit a small laptop first viewport without looking crowded.
* Favor open layouts over nested panels.
* Use CSS grid for major structure. Avoid complex flex percentage math.

## Surfaces

* Use double-bezel surfaces for major framed objects: subtle outer border, inner highlight, dark surface, soft tinted shadow.
* Cards are allowed only when they carry real structure.
* Avoid cards inside cards inside cards.
* Corners are consistent: large outer radii, smaller inner radii, pill buttons.

## Motion Rules

* Motion must explain hierarchy, power flow, or interaction feedback.
* Use transform and opacity for animations.
* Use Motion viewport/reveal primitives for scroll reveal.
* Use short stagger delays between grouped items.
* Buttons need hover and active press feedback.
* Avoid continuous scroll listeners.
* Always support `prefers-reduced-motion`.

## Anti-Patterns

* SaaS-template hero with generic dashboard.
* Three equal feature cards as the dominant design language.
* Fake telemetry, fake metrics, fake certification claims, or invented customer logos.
* Excessive pills, badges, pseudo-system labels, and tiny decorative metadata.
* Vague copy such as next-gen, seamless, unleash, elevate, revolutionize.
* Random icons that do not support PCS, grid, battery, or reliability.

## Hero Visual Rules

* The hero visual should feel like a premium rendered PCS conversion environment, not a SaaS dashboard.
* Battery, PCS, and grid relationships should be visible through linework, depth, and flow.
* Power flow animation should be subtle and slow enough to feel controlled.
* The visual should feel machined and physical, not like an amateur SVG diagram.
* Avoid fake dashboards, charts, clunky cabinets, cartoon boxes, and arbitrary UI panels.

## Responsiveness Rules

* Desktop: hero can use asymmetric text and object composition.
* Tablet and mobile: stack text first, visual second, with generous spacing.
* Buttons should remain one line when possible and full-width on small screens.
* Hero object must remain centered and never cause horizontal overflow.
* Navigation must stay one line and under 80px tall on desktop.

## Contact Form Rules

* Static HTML may use `mailto`, but the form must feel intentional and honest.
* Do not fake a backend success state.
* Preserve email, company, and message fields.
* Inputs need clear labels, visible focus rings, readable placeholders, and high contrast.
* The direct email address should remain visible.
