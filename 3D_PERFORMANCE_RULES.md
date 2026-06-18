# Glass Energy Systems 3D Performance Rules

## Purpose

This file defines performance and resilience rules for any future 3D or near-3D version of the Glass Energy Systems website. It applies to React Three Fiber, Three.js, Spline, CSS/SVG pseudo-3D, and hybrid implementations.

## Non-Negotiables

* Do not run heavy 3D on mobile without a simplified scene or static fallback.
* Use simplified mobile scenes, SVG/HTML substitutes, or static rendered fallbacks when needed.
* Avoid unnecessary continuously running animations.
* Respect `prefers-reduced-motion`.
* Avoid layout shift during scene load.
* Lazy-load heavy 3D only after essential copy and navigation are usable.
* Keep important text readable outside the canvas.
* Do not embed important copy only inside raster imagery, canvas, or a third-party scene.
* Use optimized assets.
* Measure build output impact after any 3D dependency or heavy asset is added.
* Keep the landing page usable if 3D fails.
* Avoid unnecessary dependencies.

## Mobile Rules

At 390px and other mobile widths:

* The page must not horizontally overflow.
* Navigation, hero copy, and contact must remain usable without 3D.
* The battery -> PCS -> grid story may simplify to a stacked near-3D/SVG flow.
* Camera movement, parallax, blur, and shader-like effects must be reduced or removed.
* Touch interaction must not depend on precise hover behavior.
* Text labels must stay readable at real mobile sizes.

## Reduced-Motion Rules

Under `prefers-reduced-motion: reduce`:

* Stop continuous power-flow loops unless they are replaced with a static active state.
* Disable camera sweeps, large parallax, and long staged sequences.
* Keep content visible without waiting for animation events.
* Preserve the static relationship: supplier hardware -> PCS -> battery/grid -> validation -> contact.

## Loading And Failure Rules

If a heavy scene is used:

* Render essential HTML copy, navigation, and CTA first.
* Reserve scene dimensions to avoid layout shift.
* Provide an accessible fallback if the scene fails to load.
* Use a loading state that does not imply fake telemetry or fake product status.
* Do not block contact access while the scene loads.

## Asset Rules

* Reuse current logo and hero assets as visual reference unless a future design pass explicitly replaces them.
* Compress any new textures, renders, or environment maps.
* Avoid shipping large source models or unoptimized exports.
* Prefer WebP/AVIF/optimized PNG/JPEG for raster fallbacks.
* Avoid multiple redundant hero-resolution assets for the same visual.

## React Three Fiber / Three.js Rules

If React Three Fiber or Three.js is added in a future step:

* Justify the dependency before installing it.
* Keep scene code isolated from page content.
* Avoid excessive React re-renders inside animation loops.
* Avoid fast-state React updates for per-frame animation.
* Use refs or library-native animation loops for frame-level changes.
* Avoid unnecessary remounting of Canvas or scene objects.
* Limit draw calls, lights, transparent layers, and postprocessing.
* Dispose geometry, materials, and textures when scenes unmount.
* Do not attach heavy scroll listeners to update React state on every frame.
* Test mobile fallback before polishing desktop.

## Spline Rules

If Spline is used in a future step:

* Confirm whether the scene is embedded, exported, or self-hosted.
* Measure load cost and failure behavior.
* Keep critical labels and CTAs outside the Spline canvas.
* Provide a fallback for blocked/slow embeds.
* Avoid Spline-only navigation, CTAs, or supplier/customer explanation.

## CSS/SVG Pseudo-3D Rules

If CSS/SVG pseudo-3D is used:

* Prefer transforms, opacity, masks, and SVG stroke animation.
* Avoid animating layout properties.
* Keep filter and blur areas bounded.
* Use semantic HTML text for labels and narrative copy.
* Verify no stacked layers cause mobile overflow.
* Make the static state meaningful.

## Build And QA Rules

After any future app-affecting 3D implementation:

* Run `npm run build`.
* Run `npm run lint`.
* Check build output size and note any major bundle increase.
* Verify local preview.
* Check 390px, 768px, 1024px, and 1440px.
* Check no console errors, no missing assets, no broken anchors, no horizontal overflow, and usable mobile nav.
* Score performance risk and implementation risk before continuing.
