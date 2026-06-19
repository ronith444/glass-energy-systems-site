# Before / After

## Service Speed To Why PCS

Before:
- Service Speed behaved like a dark section followed by a separate pale transition band.
- The conclusion statement sat after the process panel but did not feel fully integrated with the same scene.
- The dark-to-light movement was functional, but still read as a stacked strip at the lower edge of the section.

After:
- `.service-speed-section` now carries one continuous dark-to-cream atmosphere across the copy, rendered asset, four-stage process panel and conclusion statement.
- The conclusion sits on the same scene field and the page reaches Cream Paper before Why PCS First begins.
- No connector line, empty transition block or decorative blur layer is used.

Evidence:
- Before desktop: `before/service-scene-1440.png`
- After desktop: `after/service-scene-1440.png`
- After mobile: `after/service-scene-390.png`

Remaining compromise:
- The rendered Service Speed asset has its own baked light floor, so the scene gradient is tuned to blend with that image rather than completely erase the asset's native tonal shift.

## Development Pathway To Partnership CTA To Footer

Before:
- Development Pathway, Partnership CTA and Footer were separate surfaces.
- The CTA transition relied on the incoming CTA section and could read as a visible band between cream and dark.
- On mobile, the CTA handoff risked either a harsh step or low contrast if the dark surface arrived too late.

After:
- `DevelopmentPathwaySection`, `PartnershipCTASection` and `SiteFooter` now sit inside `.development-closing-scene`.
- The shared scene starts on Cream Paper, passes through sage and resolves into deep evergreen before the CTA body and footer.
- `#partners` adds a short, section-local darkening gradient so the white CTA copy lands on a readable surface at mobile and tablet widths.

Evidence:
- Before mobile closing: `before/cta-footer-390.png`
- After desktop closing: `after/cta-footer-1440.png`
- After mobile closing: `after/cta-footer-390.png`
- After full mobile page: `after/full-390.png`

Remaining compromise:
- The mobile CTA still needs enough vertical distance to complete the cream-to-dark fade before the headline, so the handoff is intentionally atmospheric rather than ultra-compact.

## Production Safety

- No new assets were generated.
- No image assets were replaced.
- No copy, navigation order, form behavior or claims were changed.
- No motion, canvas, WebGL, Three.js, React Three Fiber, GSAP or new dependency was added.
