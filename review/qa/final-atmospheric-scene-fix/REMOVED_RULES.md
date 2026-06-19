# Removed Rules

## Removed Transition Rules

- Removed `.service-speed-conclusion` from the shared incoming-section crossfade rule.
- Removed `#partners` from the shared incoming-section crossfade rule.
- Stopped treating the Service Speed conclusion as a separate light transition band.
- Stopped treating Partnership CTA as an incoming section with an isolated cream-to-dark strip.
- Kept the compact `#service-reliability` crossfade because it is still a simple editorial chapter handoff.

## New Rules

- `.service-speed-section` owns one full atmospheric background from the dark Service Speed content through the conclusion and into the Why PCS handoff.
- `.development-closing-scene` wraps Development Pathway, Partnership CTA and Footer as one continuous closing atmosphere.
- `#partners` can darken locally before CTA text begins so the white copy remains readable.
- Transitions use solid color stops from the existing evergreen, sage and cream palette.

## Still Prohibited

- Empty transition divs.
- Page-length connector spines.
- Floating connector circles.
- Decorative three-panel logo watermarks.
- CSS `filter` blur for transitions.
- `backdrop-filter` or box-shadow used as transition hiding.
- Transparent transition endpoints.
- New imagery, animation, canvas, WebGL, Three.js or GSAP.
