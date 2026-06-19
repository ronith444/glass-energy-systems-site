# Transition Audit

Starting commit: `f307272f127318e75daf45baab2f115f561a2eac`

Preflight note: the working tree was not clean at the start of this pass. The dirty files were known visual-review changes already requested in the current working stream:

- `src/components/layout/SiteHeader.tsx`
- `src/components/sections/PartnershipCTASection.tsx`
- `src/styles/layout.css`
- `references/incoming/transition-final/`

Build and lint passed before this transition repair.

## Service Speed To Why PCS

Current parent wrapper:

- `src/App.tsx`: `chapter chapter-dark` contains Hero, What We Are Building, and Service Speed.
- `chapter chapter-light` contains Why PCS First and Deployment Model.

Current outgoing section:

- `src/components/sections/ServiceSpeedSection.tsx`
- `section#service-speed.service-speed-section`
- Children: `.service-speed-main`, `.service-speed-conclusion`.

Current incoming section:

- `section#why-pcs.why-pcs-entry-section`

Active background declarations:

- `.chapter-dark` owns a broad dark-to-sage background.
- `.service-speed-section` is transparent.
- `.service-speed-main` has spacing only.
- `.service-speed-conclusion` currently owns transition variables and a separate transition area.
- `.why-pcs-entry-section` is transparent over `chapter-light`, which is Cream Paper.

Active pseudo-elements:

- `.service-speed-conclusion::before` creates the primary green-to-cream transition strip.
- `.service-speed-conclusion::after` adds a second radial wash over the same strip.
- `.why-pcs-entry-section::before` and `::after` are disabled.
- `.service-speed-section::before` and `::after` are disabled.

Transparent stops:

- Many local decorative gradients use transparent stops, but the transition failure is from `.service-speed-conclusion::after` and older crossfade ownership, not from image/glass details.

Filters and shadows:

- Image and panel treatments use shadows/backdrop filters and must remain.
- Transition-specific blur/backdrop filters are not used here and must not be introduced.

Clipping ancestors:

- `.chapter` and `.section` use `overflow: hidden`.
- `.service-speed-section` may retain clipping if it owns the full atmospheric scene.

Padding:

- `.service-speed-main`: desktop `clamp(88px, 7vw, 96px) var(--transition-standard)`.
- `.service-speed-conclusion`: desktop `padding-top: clamp(148px, 11vw, 172px); padding-bottom: 82px;`
- Mobile overrides redefine conclusion padding and transition pseudo-element height.

Empty vertical space:

- The transition currently appears after the process panel as a separate pale strip before the conclusion text, creating a band rather than a continuous scene.

Selectors to remove or neutralize:

- `.service-speed-conclusion` crossfade variables.
- `.service-speed-conclusion::before`.
- `.service-speed-conclusion::after`.
- Mobile rules that resize those pseudo-elements.

Selectors to retain:

- `.service-speed-render`, `.service-speed-render::before`, `.service-speed-process`, `.service-stage`.
- Liquid-glass process styling.
- Image clipping and panel borders.

## Development Pathway To CTA To Footer

Current parent wrappers:

- `chapter chapter-editorial` contains Service and Reliability plus Development Pathway.
- `chapter chapter-closing` contains Partnership CTA plus Footer.

Current outgoing section:

- `section#development-pathway`

Current incoming sections:

- `section#partners`
- `.site-footer`

Active background declarations:

- `.chapter-editorial` is a light `Sheet White -> Cream Paper` gradient.
- `.chapter-closing` is a dark Canopy-to-near-black background.
- `.chapter-closing::before` creates a cream-to-transparent top overlay.
- `#partners` owns crossfade variables and top padding to create a separate transition field.
- `.site-footer` sits after CTA on the dark closing chapter.

Active pseudo-elements:

- `.chapter-closing::before`.
- `#partners::before` from shared crossfade selector.
- `.partnership-render::before` and `::after` are visual-panel treatments and must remain.

Transparent stops:

- `.chapter-closing::before` fades to transparent, exposing the dark wrapper beneath.
- `#partners::before` fades from cream to dark through a section-local strip.

Filters and shadows:

- Footer and CTA do not need transition shadows.
- Existing CTA logo panel shadow/backdrop-filter is not transition architecture and should remain.

Clipping ancestors:

- `.chapter` and `.section` currently clip backgrounds independently.
- A new `.development-closing-scene` wrapper should own the shared cream-to-dark scene.

Padding:

- `#development-pathway`: `clamp(80px, 6.5vw, 88px) clamp(88px, 7vw, 96px)`.
- `#partners`: `padding-top: 148px; padding-bottom: clamp(72px, 6vw, 80px);`
- `.site-footer`: `padding-top: clamp(56px, 5vw, 64px);`

Empty vertical space:

- The CTA top padding plus crossfade overlay creates a visible transition band above the CTA content.
- Footer is visually close, but the parent architecture is still split into independent sections.

Selectors to remove or neutralize:

- `.chapter-closing::before`.
- `#partners` crossfade variables.
- `#partners::before` from shared crossfade rules.
- Mobile `#partners` crossfade overrides.

Selectors to retain:

- `.partnership-render`, `.partnership-render::before`, `.partnership-render::after`.
- `.site-footer` layout and footer content.
- Development image and timeline rules.

## Existing Shared Crossfade Rule

Current shared transition machinery:

```css
.service-speed-conclusion,
#service-reliability,
#partners {
  background-color: var(--crossfade-to);
}

.service-speed-conclusion::before,
#service-reliability::before,
#partners::before {
  ...
}
```

Decision:

- Remove `service-speed-conclusion` and `#partners` from this shared crossfade machinery.
- Retain `#service-reliability` behavior unless a verified regression appears, because this pass is scoped to Service Speed and the Development/CTA/Footer close.

## Reference Direction

`references/incoming/transition-final/03-target-continuous-atmosphere.jpg` uses a scene-wide atmosphere: content lives inside the changing surface, with broad lower-center illumination and no visible divider strip. The implementation should borrow that behavior only, not the content, icons, linework, layout, or exact visual design.
