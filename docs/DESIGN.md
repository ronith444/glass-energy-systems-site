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

Do not introduce red, bright cyan, rainbow gradients or unrelated saturated colors.

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
Maximum content width: 1200-1280px
Major section padding: 96-140px
Internal content gap: 24-48px
Card padding: 24-40px
Card radius: 16px
Button radius: 8px
Input radius: 4px
```

Use one focused idea per section. Avoid masonry layouts and repetitive grids of identical cards.

## Radius System

Use 16px for primary cards and surfaces, 8px for buttons, 4px for inputs and small controls. Keep radii consistent and avoid overly rounded SaaS pills except where a control specifically benefits from that shape.

## Surface System

Surfaces should feel editorial and precise:

- dark sections use subtle canopy gradients and thin sage borders
- light sections use Cream Paper and Sheet White
- cards should be calm and readable
- surface layering should clarify system hierarchy
- avoid heavy blur, heavy shadows and cards nested inside cards

## Dark-to-Light Page Progression

The homepage should progress through:

1. Deep green, atmospheric hero
2. Dark green systems section
3. Dark-to-sage service-speed transition
4. Cream Paper editorial sections
5. Sheet White and pale-sage technical sections
6. Dark partnership CTA
7. Dark footer

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

## Connector-Line System

Use three connector types:

```text
Mint solid line: controls and communication
Copper solid line: electrical power flow
Violet dotted line: telemetry and diagnostics
```

Connections should leave one section and enter the next, guide the eye down the page, become timelines, networks or card inputs, change composition between sections, remain subtle and be implemented section-by-section rather than as one fragile page-length SVG.

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
