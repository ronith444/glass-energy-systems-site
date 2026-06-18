# Glass Energy Systems — Section Flow Map

Each homepage section owns its own connector fragment. Do not implement one giant page-height SVG. Align fragments with shared CSS variables and section-level connector anchors.

## Connector Anchor Variables

```text
--connector-center-x
--connector-left-x
--connector-right-x
--connector-entry-y
--connector-exit-y
```

Desktop:

- `--connector-center-x` aligns to the center of the 1200-1280px content container.
- `--connector-left-x` aligns near the left visual/content third, roughly 18-24% of the container.
- `--connector-right-x` aligns near the right visual/content third, roughly 76-82% of the container.
- `--connector-entry-y` sits near the section top divider or first visual node.
- `--connector-exit-y` sits near the bottom divider or next-section handoff node.

Tablet:

- Preserve center, left and right anchors but reduce lateral spread.
- Avoid connector branches that cross body copy.
- When a section stacks, route the connector through the visual first and the copy second.

Mobile:

- Use one central vertical mint line.
- Suppress most copper branches.
- Limit violet to one or two visible nodes per long page segment.
- Avoid horizontal overflow and side branches wider than the content column.

## Full Homepage Flow

| Section | Background | Connector entering | Connector leaving | Dominant composition | Next transition |
|---|---|---|---|---|---|
| 01 Hero | Deep green / Dark Canopy atmospheric field | None; system starts in hero visual | Mint line leaves through `--connector-center-x`; copper/violet appear only as internal legend traces | Large PCS-first system scene with grid, power conversion, storage and C&I application | Dark continuation into What We Are Building |
| 02 What We Are Building | Dark green system surface | Center mint connector lands on large systems panel | Center mint connector exits downward; small copper and violet traces may branch behind panel | Left editorial headline, right dark glass system list | Dark-to-sage service transition |
| 03 Service Speed | Dark-to-sage transition | Mint connector enters top center and travels into service principles | Mint connector exits bottom center toward light editorial area | Large headline and compact service principles connected by a shared line | Cream Paper / Sheet White light editorial transition |
| 04 Why PCS First | Cream Paper / Sheet White | Mint and one violet dotted fragment enter at top edge | Mint connector exits from bottom center into Deployment Model | Left editorial text, right thin icon columns and dividers | Continue light editorial process section |
| 05 Deployment Model | Cream Paper or Sheet White | Mint connector enters first timeline node from top center | Final Stabilize node sends mint line downward into System Architecture | Horizontal six-stage numbered process with one continuous mint line | Pale sage-to-lavender technical network |
| 06 System Architecture | Pale Sage with subtle Hero Wash / lavender atmosphere | Mint connector enters central Power conversion node | Branches converge into one downward connector at center | Open network diagram dominated by Power conversion and glass planes | Sheet White technical platform section |
| 07 Initial Platform | Sheet White / Cream Paper | Center connector enters top node, then platform spec field | Connector exits bottom center or lower-right toward Built for India | Specs strip, isometric grid/PCS/storage platform | Continue practical localization from same visual language |
| 08 Built for India | Cream Paper, Sheet White and Pale Sage | Mint connector bends into left isometric infrastructure platform | Mint control line exits lower-right toward Service and Reliability | Two-column infrastructure platform plus four editorial points | Light service reliability section |
| 09 Service and Reliability | Sheet White / light editorial | Mint line enters top center and feeds module row | Mint line exits toward Development Pathway timeline | Editorial reliability modules; use approved copy, not unsupported raster claims | Continue light timeline rhythm |
| 10 Development Pathway | Sheet White or Cream Paper | Mint line enters first pathway stage | Final stage curves downward toward dark CTA, desktop `--connector-right-x`, mobile center | Five-stage capability timeline with gradually increasing complexity | Return to deep dark Canopy CTA |
| 11 Partnership CTA | Dark Canopy / Near Black Green | Mint line enters from Development Pathway into right plane visual | Connector resolves near plane stack and continues subtly to Footer brand area | Left CTA copy, right layered Glass mark planes | Dark footer resolution |
| 12 Footer | Near Black Green or deep Canopy | Mint connector enters near logo mark or brand statement | Terminates; no outgoing connector | Logo, brand statement, grouped links and contact email | End state |

## Color and Motif Distribution

- Mint appears in every section as the primary continuity line.
- Copper appears only where electrical power or validation is being represented: hero, Deployment Model, System Architecture, Built for India and CTA trace.
- Violet appears sparingly for telemetry/diagnostics: hero legend, Deployment Model test-data branch, System Architecture diagnostics node, Development Pathway stage 5 and CTA endpoint.
- Glass planes appear in hero, What We Are Building, System Architecture, Initial Platform, Built for India, Development Pathway stage 5 and Partnership CTA.
- Quiet sections: Why PCS First, Deployment Model, Built for India, Footer. These should not become dense dashboards or visual set pieces.
- Major visual peaks: Hero first, System Architecture second, Partnership CTA as final resolution.

## Section Connector Rules

- Each section renders its connector fragment inside that section only.
- Adjacent fragments align through the anchor variables rather than by sharing one SVG.
- Section connectors may overlap section dividers by a small amount only if controlled locally.
- Connector strokes should remain thin: 1-2px desktop, 1px mobile.
- Dots/nodes should be purposeful handoff points, not decorative confetti.
- All connector meaning must remain understandable in static form before any motion is added.

## Responsive Connector Rules

- Desktop can use center, left and right anchors with subtle side branches.
- Tablet reduces branch length and keeps connectors away from headings and paragraph text.
- Mobile uses a single central vertical mint line with compact nodes and very limited copper/violet.
- Mobile diagrams should never rely on horizontal scrolling.
