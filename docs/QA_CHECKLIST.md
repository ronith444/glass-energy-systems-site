# Visual and Technical QA Checklist

## Visual Fidelity

- Compare every implemented section against the approved mockup for that section when one exists.
- Record missing-section design decisions before implementation.
- Do not use full mockup screenshots as production backgrounds.

## Typography

- Use DM Sans as the primary typeface.
- Preserve light headline weight and generous line height.
- Avoid condensed, gaming, serif display or excessive monospace typography.

## Spacing

- Verify section padding, content width and internal gaps against `docs/DESIGN.md`.
- Avoid crowded desktop compositions and over-long mobile sections.
- Keep one focused idea per section.

## Colors

- Use the approved color tokens from `docs/DESIGN.md`.
- Preserve the dark-to-light page progression.
- Avoid red, bright cyan, rainbow gradients and unrelated saturated colors.

## Section Continuity

- Make the page feel like one connected infrastructure story.
- Ensure connectors or motifs transition between sections without becoming a fragile full-page SVG.
- Keep Arcadia references separate from Glass production visuals.

## Connector Lines

- Use mint solid lines for controls and communication.
- Use copper solid lines for electrical power flow.
- Use violet dotted lines only for limited telemetry and diagnostics.
- Confirm connector meaning is understandable without animation.

## Glass Elements

- Use thin transparent planes and subtle edge details.
- Avoid heavy glassmorphism, glowing bubbles and decorative floating panels.
- Limit major visuals to two to five glass layers.

## Responsive Layout

- Check 390px, 768px, 1024px and 1440px.
- Confirm no horizontal overflow.
- Ensure diagrams stack or simplify without losing meaning.
- Keep navigation, CTAs and forms touch-safe.

## Accessibility

- Use semantic landmarks and real HTML text.
- Keep focus states visible.
- Label all form fields.
- Provide useful alt text for meaningful images.
- Meet WCAG AA contrast fundamentals.

## Performance

- Avoid production use of full-page raster mockups.
- Optimize any exported images.
- Keep SVG/CSS diagrams efficient.
- Do not add motion before the static and responsive build is approved.

## SEO

- Preserve brand name, page title, description, favicon and Open Graph image until final copy is approved.
- Keep public claims accurate and stage-aware.

## Forms

- Preserve honest contact behavior.
- Do not fake backend success states.
- Keep direct contact options visible.

## Browser Testing

- Test current supported desktop and mobile browsers.
- Check console errors, missing assets, white flash, image sharpness and responsive layout.

## Content Accuracy

- Follow `docs/CONTENT.md`.
- Do not claim deployed PCS units, proven uptime, current 24/7 support, proprietary production hardware, completed local manufacturing, current AI diagnostics, unverified certifications or guaranteed response times.
- Use approved terms such as developing, initial focus, target architecture, intended, planned, pilot pathway and subject to validation.
