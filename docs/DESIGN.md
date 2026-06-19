# Glass Energy Systems — Design System

Glass Energy Systems uses Arcadia as its primary design reference, altered into a more industrial and technical energy-infrastructure system.

The website should feel:

- serious
- clean
- precise
- modern
- industrial
- editorial
- calm
- infrastructure-grade
- technically credible

It must not feel:

- like a gaming company
- cyberpunk
- crypto-like
- generic SaaS
- excessively futuristic
- like an AI-generated hardware concept
- like a mature product catalogue
- like a dashboard on every screen

## Primary Visual Reference

Use the approved Glass mockups in `references/glass-mockups/` first. Use Arcadia references only for typography, section rhythm, transitions, surface treatment, diagram composition, connected visual flow and editorial spacing.

## Arcadia Adaptation

Arcadia's softness, white-space discipline, layered isometric composition and connected sections should be adapted into a more technical infrastructure language. Glass should replace Arcadia's SaaS/data objects with PCS, grid, BESS, commissioning, documentation and field-support concepts.

Do not copy Arcadia's branding, copy, purple SaaS subject matter or product category.

## Brand Positioning

Glass Energy Systems is building the deployment and reliability layer around power conversion for India. The public site should communicate a PCS-first, service-led, India-ready energy storage infrastructure company without claiming mature deployments, certifications, proprietary hardware or manufacturing scale.

## Color Tokens

```css
--color-canopy: #104336;
--color-dark-canopy: #071b17;
--color-near-black-green: #081513;
--color-mint-pulse: #0fff87;
--color-orb-violet: #7c18d3;
--color-cream-paper: #f3f1ec;
--color-sheet-white: #ffffff;
--color-bark: #101f1e;
--color-ink: #000000;
--color-slate: #535e5d;
--color-charcoal: #333333;
--color-sage-mist: #afc4bf;
--color-pale-sage: #c2cec8;
--color-muted-slate: #798281;
--color-hero-wash: #e8e7f5;
--color-power-copper: #b97a56;
--color-glass-blue-deep: #193a7d;
--color-glass-blue: #4481ba;
--color-glass-ice: #85bdee;
--glass-edge-highlight: color-mix(in srgb, var(--color-glass-ice) 82%, var(--color-sheet-white));
--glass-surface-dark: color-mix(in srgb, var(--color-glass-blue-deep) 38%, transparent);
--glass-surface-light: color-mix(in srgb, var(--color-glass-ice) 18%, transparent);
```

Color roles:

- Dark Canopy: hero and opening sections.
- Canopy: structural brand color and standard CTA.
- Mint Pulse: active state, priority CTA and communication path.
- Orb Violet: limited telemetry and decorative data nodes.
- Power Copper: restrained power-flow paths.
- Cream Paper: principal light canvas.
- Sheet White: card and elevated surface.
- Sage Mist: dividers and borders.
- Bark: body text.
- Ink: major light-background headings.
- Glass Blue Deep / Glass Blue / Glass Ice: sampled from the correct master logo and reserved for logo-derived glass edges, reflective planes and restrained architectural layer highlights.

Do not introduce red, bright cyan, rainbow gradients or unrelated saturated colors.

## Correct Logo System

The correct-logo source for the rebuild is `references/brand/glass-logo-correct-master.jpeg`. No SVG, PDF, AI or transparent production logo source was supplied during this pass, so the production web variants are transparent PNGs extracted from the JPEG master:

- `src/assets/brand/glass-logo-full-dark.png`: compact full lockup for desktop header and dark footer surfaces.
- `src/assets/brand/glass-logo-mark-dark.png`: dark-surface mark for compact/mobile header use.
- `src/assets/brand/glass-logo-mark-transparent.png`: transparent mark reference for controlled brand-motif use.

Do not recreate `GLASS` or `ENERGY SYSTEMS` with live text, substitute a similar font, distort the panel geometry, recolor the mark into a flat blue icon or place an HTML wordmark next to a separate mark. The full lockup is used on dark desktop/footer surfaces; the mark-only variant is used in the mobile header so the wordmark is not compressed into illegibility.

Existing favicons and app icons remain active until a true vector or transparent icon master is supplied. The JPEG-derived mark is clean enough for dark brand surfaces but should not replace tiny favicons by default.

## Typography

Use DM Sans as the primary brand typeface.

```text
Display: 56-72px desktop, weight 300
Section heading: 44-56px, weight 300
Subheading: 20-24px, weight 400 or 500
Body: 16-18px, weight 400
Eyebrow: 13px, uppercase, weight 700, letter spacing 0.07em
Metadata: 12-14px, weight 400 or 500
```

Use restrained line lengths, generous line height, light headline weight, minimal bold, no serif display typography, no condensed gaming fonts and no excessive monospace typography.

## Spacing

```text
Maximum page width: 1280px
Maximum content width: 1180px
Reading width: 620px
Wide visual width: 1240px
Standard visual width: 760px
Major section padding: 88-152px depending on hierarchy
Internal content gap: 24-64px
Card padding: 24-40px
Card radius: 16px
Button radius: 8px
Input radius: 4px
```

Use one focused idea per section. Do not apply one universal section padding to every chapter. Major visual chapters may be large; supporting editorial chapters must stay compact. Avoid masonry layouts and repetitive grids of identical cards.

## Composition Hierarchy

Treat the homepage as five major visual chapters separated by quieter editorial chapters.

Major visual chapters:

1. Hero system
2. What We Are Building
3. Service Speed
4. System Architecture / Initial Platform
5. Partnership CTA

Supporting editorial chapters:

- Why PCS First
- Deployment Model explanation
- Built for India principles
- Service and Reliability
- Development Pathway explanation

System Architecture should read as the second strongest technical visual chapter after the hero. The lower editorial sections should not all become equally large hero sections.

## Radius System

Use 16px for primary cards and surfaces, 8px for buttons, 4px for inputs and small controls. Keep radii consistent and avoid overly rounded SaaS pills except where a control specifically benefits from that shape.

## Surface System

Surfaces should feel editorial and precise:

- dark sections use subtle canopy gradients and thin sage borders

## Mobile Responsive Repair Strategy

The desktop composition at `1024px` and above is treated as approved. Mobile repair work is scoped to `max-width: 767px` and `max-width: 479px` unless an existing narrow-tablet overflow must be corrected.

Mobile rules:

- Use `--mobile-page-pad`, `--mobile-section-major`, `--mobile-section-standard`, `--mobile-section-compact`, `--mobile-content-gap`, `--mobile-header-height`, and `--mobile-header-safe-offset`.
- Reset rendered technical visuals to `width: 100%`, `height: auto`, `object-fit: contain`, `object-position: center`, and no transforms.
- Preserve important copy as semantic HTML and keep every section readable without horizontal scrolling.
- Keep only the approved mobile glass surfaces: hero secondary CTA, hero technical rail, capability panel, service process panel, architecture legend, initial specification console, partnership secondary CTA, and mobile menu.
- Use the compact mark-only logo in the mobile header and the full lockup in the footer.
- Mobile section order is:
  - Hero: copy, CTAs, complete system visual, technical rail.
  - What We Are Building: copy, outcomes, technical image, capability panel.
  - Service Speed: copy, image, process rows, conclusion.
  - System Architecture: copy, complete image, legend.
  - Initial Platform: copy and qualifier, image, specification console, disclaimer.
  - Built for India: copy, image, principle list.
  - Partnership CTA: copy, CTAs, abstract glass sculpture.

Mobile overflow acceptance rule: at `767px`, `480px`, `430px`, `390px`, and `360px`, no visible text, image, button, panel, footer group, or section content may cross the viewport bounds.
- light sections use Cream Paper and Sheet White
- cards should be calm and readable
- surface layering should clarify system hierarchy
- avoid heavy blur, heavy shadows and cards nested inside cards

## Restrained Liquid-Glass System

Liquid glass is a functional UI material, not a page background or decorative theme. It is approved only for:

- Hero secondary CTA.
- Hero technical specification rail.
- What We Are Building capability panel.
- Service Speed process strip.
- System Architecture legend.
- Initial Platform specification console.
- Partnership CTA secondary button.
- Mobile navigation menu.

Dark liquid glass uses restrained evergreen transparency, a cool blue-gray border, a single upper-edge highlight, 10-12px blur and 10-14px radius. Light liquid glass uses warm translucent white, sage dividers, 14px blur and the same radius range. Fallbacks must remain opaque enough to read when `backdrop-filter` is unsupported.

Do not use liquid glass for whole sections, long paragraphs, every list item, Footer, Why PCS First, Deployment Model, Built for India, Service and Reliability, or Development Pathway.

## Dark-to-Light Page Progression

The homepage should progress through:

1. Deep green, atmospheric hero
2. Dark green systems section
3. Dark-to-sage service-speed transition
4. Cream Paper editorial sections
5. Sheet White and pale-sage technical sections
6. Dark partnership CTA
7. Dark footer

Current chapter structure:

1. Dark systems story: Hero, What We Are Building, Service Speed.
2. Light deployment story: Why PCS First, Deployment Model.
3. Technical architecture story: System Architecture, Initial Platform, Built for India.
4. Reliability and roadmap: Service and Reliability, Development Pathway.
5. Dark close: Partnership CTA and Footer in one uninterrupted surface.

The transition must be gradual rather than switching abruptly from dark to white.

## Glass Electronics Motif

Glass should appear as:

- thin transparent structural planes
- layered control surfaces
- restrained interface overlays
- subtle section-transition shapes
- abstract system layers
- small brand-linked edge details

Glass must not appear as:

- every card being frosted
- heavy backdrop blur
- excessive reflections
- glowing bubbles
- blue SaaS glassmorphism
- floating decorative panels without meaning

Glass elements should use very low opacity, thin sage or blue-green edges, minimal blur, limited highlights and two to five layers per major visual.

## BrandGlassPlanes Motif

`BrandGlassPlanes` is the approved reusable motif derived from the three vertical glass panels in the correct logo. It uses three offset translucent planes, sampled Glass blue edges, low-opacity interiors and restrained reflections.

Use it only where it has structural meaning:

- Hero power-conversion core
- One Hero-to-Approach transition/detail layer
- System Architecture
- Initial Platform as a minor control layer
- Partnership CTA
- Subtle footer terminus

Do not use it behind every card, behind all headings, as a repeating page background or as random decoration.

## Connector-Line System

Use three connector types:

```text
Mint solid line: controls and communication
Copper solid line: electrical power flow
Violet dotted line: telemetry and diagnostics
```

Connections should leave one section and enter the next, guide the eye down the page, become timelines, networks or card inputs, change composition between sections, remain subtle and be implemented section-by-section rather than as one fragile page-length SVG.

Remove connector lines that enter empty space, terminate in floating circles without a chapter handoff, cross important copy, duplicate a line already present in a rendered asset or make mobile pages longer. On mobile, most decorative section-to-section connectors should be removed.

## Illustration Rules

Use clean isometric geometry, flat or lightly dimensional industrial forms, abstract power architecture, simplified grid/storage/conversion/load concepts, diagrams constructed from SVG/CSS/HTML, consistent perspective and lighting and restrained labels.

Avoid photorealistic fake PCS products, miniature cities, random solar/wind/truck/factory combinations, excessive glowing nodes, fictional AI chips, gaming hardware vents, unrealistic infrastructure and raster diagrams that cannot respond to screen size.

## Responsive Rules

Desktop should preserve the full editorial composition and section-to-section connector logic. Tablet should simplify multi-column diagrams without losing hierarchy. Mobile should prioritize readable content, stacked diagrams, accessible controls and no horizontal overflow.

## Prohibited Design Patterns

- red or black gaming aesthetic
- neon cyberpunk
- excessive dark glass panels
- generic card grids
- fake product render as the hero
- scroll hijacking
- particle systems
- constant floating motion
- excessive gradients
- heavy drop shadows
- inflated unsupported company claims

## Accessibility Requirements

All meaningful text must be real HTML text, not embedded only in mockup screenshots. Target WCAG AA contrast, visible focus states, semantic landmarks, keyboard-accessible navigation, labeled forms, useful alt text and `prefers-reduced-motion` support when motion is added.

## Motion

Do not implement motion during the initial static build.

Later motion may include slow connector drawing, node activation, minor glass-layer movement, subtle section entrances and sticky navigation transition.

Motion must support `prefers-reduced-motion`.
