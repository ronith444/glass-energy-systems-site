# Glass Energy Systems — Rebuild Plan

## Reference Precedence

Use this order when sources conflict:

1. Final approved Glass mockup for that section
2. `docs/DESIGN.md`
3. `docs/CONTENT.md`
4. Arcadia visual references
5. Existing Glass brand assets
6. Existing website code

The old website must not override the new design direction.

## Implementation Rule

Do not use full mockup screenshots as production page backgrounds.

Recreate the design with:

- semantic HTML
- React components
- CSS
- SVG
- reusable diagram components
- responsive layout primitives

## Static-First Rule

Build in this order:

1. Static desktop
2. Screenshot comparison
3. Tablet
4. Mobile
5. Motion
6. Final optimization

## Repository Cleanup

Cleanup happens only after this handoff is approved. Preserve the archived branch and tag. Remove old implementation files only on the rebuild branch after a specific cleanup task is issued.

## Files to Preserve

- `docs/`
- `references/`
- existing brand assets in `assets/` and `public/`
- package and Vite configuration until replacement is explicitly approved
- archive branch `archive/old-website`
- archive tag `old-website-final`

## Files to Remove Later

The previous frontend implementation may be removed later on the rebuild branch only after the user approves repository cleanup. Do not delete frontend files during handoff work.

## Design Tokens

Tokens come from `docs/DESIGN.md`. The initial implementation should translate color, typography, spacing, radius and surface rules into a compact CSS token layer before building sections.

## Component Architecture

Use small section components for each homepage chapter. Diagrams should be reusable SVG/CSS/HTML components, not flattened raster screenshots.

Recommended structure for the rebuild phase:

- shell/navigation
- hero
- what-we-are-building
- service-speed
- why-pcs-first
- deployment-model
- system-architecture
- initial-platform
- built-for-india
- service-reliability
- development-pathway
- partnership-cta
- footer

## Desktop Build Sequence

Start with the approved desktop mockups and content order. Build static desktop first at 1440px and compare against references before tablet/mobile work.

## Illustration Strategy

Create responsive diagrams from SVG, CSS and semantic HTML. Use clean isometric geometry, connector lines and glass-electronics layers. Do not use fake photorealistic product cabinets, miniature cities or dashboard screenshots as production visuals.

## Screenshot Review Process

Capture desktop screenshots after the static pass and compare against the active mockups by section. Record visual gaps before beginning responsive adaptation.

## Tablet and Mobile

After desktop approval, adapt sections to 1024px, 768px and 390px. Preserve section hierarchy, readable typography, touch-safe controls and no horizontal overflow.

## Motion

No motion is implemented during the first visual-fidelity build. Motion begins only after desktop, tablet, mobile, connector alignment and reduced-motion rules are approved.

## Accessibility

Use semantic landmarks, real HTML text, labeled form controls, meaningful image alt text, keyboard focus states and contrast suitable for WCAG AA fundamentals.

## Performance

Avoid using full-page mockup rasters as production surfaces. Optimize images, use responsive assets and keep CSS/SVG diagrams efficient.

## SEO

Preserve the Glass Energy Systems brand name, direct description, favicon, Open Graph image and metadata during rebuild. Update final metadata only after final copy is approved.

## Staging

Use a staging deployment before production launch. Staging must verify visual fidelity, content accuracy, responsive behavior and contact behavior.

## Production Launch

Do not launch until QA is complete, archive remains intact, final content is approved and the previous frontend has been intentionally replaced on the correct branch.
