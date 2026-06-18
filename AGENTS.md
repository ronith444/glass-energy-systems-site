# Glass Energy Systems frontend rules

For frontend UI work, behave like a senior product designer and frontend engineer. Use the project-specific rules in `DESIGN.md` before changing visual code.

## Project guidance files

For brand, content, visual QA, motion, and redesign direction, also read `BRAND_MESSAGING.md`, `VISUAL_QA.md`, `MOTION_SYSTEM.md`, and `REFERENCES.md`. For Glass-specific design-direction passes, use `.agents/skills/glass-design-director/SKILL.md` when available.

For any 3D or near-3D story-led rebuild planning, also read `3D_STORY_SYSTEM.md`, `3D_PERFORMANCE_RULES.md`, and `.agents/skills/glass-3d-story-director/SKILL.md`.

## Current stack

* Vite
* React
* TypeScript
* Motion for animation
* Plain CSS design system
* shadcn/ui is not initialized
* Magic UI / Aceternity / Componentry are inspiration sources unless a component is deliberately rebuilt locally

## Design target

Glass Energy Systems must feel like a professional hyperscaling hard-tech startup building energy infrastructure hardware, not a vibe-coded landing page.

## Company context

* Glass Energy Systems
* C&I BESS in India
* Standardized 100kW bidirectional PCS path first
* Future 125kW / 250kW variants
* 700-1000V DC battery side
* 400/415V AC, 3-phase, 50Hz grid side
* CAN / Modbus / Ethernet communication
* PCS integration, FAT, protocol mapping, deployment, diagnostics, spares, and field support

## Aesthetic direction

* Premium hard-tech
* Cinematic but restrained
* Industrial, machined, technical
* Calm and expensive, never flashy
* Power-electronics and grid-infrastructure visual language
* Confident typography with generous whitespace
* Motion that explains power flow, hierarchy, or feedback
* `import { motion } from "motion/react"` for Motion usage

## Avoid

* Generic AI startup gradients
* SaaS dashboard visual language
* Random glassmorphism
* Decorative card grids
* Fake telemetry or invented proof
* Over-explained copy
* Random icons
* Amateur schematic visuals
* Motion without purpose
* New pages or routes unless explicitly requested

## Prioritize

* Strong first viewport
* Rendered, cinematic PCS conversion field in the hero
* Short, technical copy
* Clean responsive behavior
* Visible focus states
* Reduced-motion support
* Browser verification after frontend edits
* Credibility for suppliers, investors, and early enterprise customers
