# Glass Energy Systems — Missing Section Specifications

These specifications close the six sections that do not have dedicated approved raster mockups. They are implementation instructions, not new visual directions. Build them from `docs/DESIGN.md`, `docs/CONTENT.md`, the approved Glass mockups, Arcadia reference rhythm and existing Glass brand assets.

## Recurring Approved System

- Content width: 1200-1280px centered container.
- Heading scale: 44-56px section headings, weight 300; 13px uppercase eyebrow with 0.07em letter spacing.
- Section height: desktop sections should generally occupy 80-100vh when visual content is dominant, with 96-140px vertical padding.
- Page progression: dark hero, dark systems, dark-to-sage transition, Cream Paper editorial sections, Sheet White/pale-sage technical sections, dark CTA, dark footer.
- Connector entry and exit: each section owns its own connector fragment; top entry and bottom exit align to shared conceptual anchors.
- Card and border treatments: thin Sage Mist borders, 16px card radius, low shadow, no nested cards.
- Glass-plane usage: two to five transparent structural planes in major visuals; low opacity, thin sage/blue-green edges.
- Illustration perspective: clean isometric, lightly dimensional, industrial, never photoreal fake hardware.
- Line colors: mint solid for control/communication, copper solid for power flow, violet dotted for telemetry or diagnostics.
- Icon style: thin green outline icons, simple geometric forms, no emoji or random library decoration.
- Whitespace: generous, editorial, with one focused idea per section.
- Alignment rules: text blocks align to the same left content column; visuals align to either the center axis or a right/left isometric plane; connectors align with shared anchors rather than arbitrary offsets.

## Documented Inconsistencies

- `references/glass-mockups/09-service-reliability.png` contains unsupported mature claims such as 24/7 monitoring, AI/ML insights and predictive maintenance. Use its layout rhythm only.
- `references/glass-mockups/07-initial-platform.png` includes dashboard-like overlays. Use the platform, connector and two-column rhythm, but avoid fake operational dashboards.
- Arcadia references include purple SaaS/data-product subject matter and browser/header chrome. Use only spacing, layer composition, connected flow and section rhythm.

## Deployment Model

### Purpose

Explain the operational pathway that turns a PCS-centered system from supplier fit into supported field operation.

### Background and Position in Page Flow

Place directly after Why PCS First and before System Architecture. It should continue the Cream Paper editorial language from Why PCS First while shifting from reasons into process.

### Desktop Layout

Use a warm Cream Paper or Sheet White editorial section with one horizontal six-stage process across the container. Do not use six large cards. Put the eyebrow and headline in a left-aligned top row, then place the six-stage line across the middle, and the closing line below the process.

### Tablet Layout

Keep the timeline horizontal if 1024px has enough width. At 768px, allow two rows of three stages while preserving one continuous mint path that turns at the row break.

### Mobile Layout

Convert to a vertical timeline with one central mint line. Each node stacks as number, stage title and one short description. Suppress most side branches.

### Copy Placement

Use the copy from `docs/CONTENT.md`: eyebrow, headline, stages and closing line. Stage descriptions should be short implementation labels, not new claims.

### Visual Composition

Create one continuous mint line with six numbered nodes. Alternate stage labels above and below the line where useful. Add a restrained copper branch around Verify or Commission to represent power-path validation. Add one or two violet dotted branches for telemetry or test data.

### Connector Entry

The connector enters from the previous section at `--connector-center-x` near the top edge and lands on the Qualify node.

### Connector Exit

The Stabilize node sends a mint connector downward from `--connector-center-x` into System Architecture.

### Glass Elements

Use only one or two very faint transparent planes behind the center of the process, no large glass card stack.

### Icons and Diagram Elements

Use numbered circles as the primary elements. Optional micro-icons may be used only if they are single-stroke and specific: document, sliders, check, link, wrench, pulse.

### Dimensions and Spacing

Desktop timeline width: 100% of the 1200-1280px container. Node diameter: 36-44px. Stage label max width: 150-180px. Section padding: 112-128px top/bottom.

### Colors

Background: Cream Paper or Sheet White. Text: Ink/Bark. Primary line: Mint Pulse softened with opacity. Dividers: Sage Mist. Copper branch: Power Copper. Violet branch: Orb Violet with low opacity.

### Borders and Radius

Use thin Sage Mist section dividers only where needed. Do not put each stage inside a card. If a callout is needed, use 16px radius and a single thin border.

### Responsive Simplification

Mobile uses one central vertical mint line, hides copper unless it can fit without crowding and limits violet to one dot.

### Accessibility

Represent the timeline as an ordered list in HTML. Do not rely on connector color alone; include stage numbers and text labels.

### Prohibited Interpretations

No six-card grid. No fake project-management dashboard. No progress bar that implies completed deployments. No animated scroll hijack.

### Implementation Components

- `SectionShell`
- `SectionHeading`
- `ProcessTimeline`
- `ConnectorFragment`
- `TimelineNode`
- `SectionClosingLine`

## System Architecture

### Purpose

Show how Glass acts as one accountable layer across power, controls and field support.

### Background and Position in Page Flow

Place between Deployment Model and Initial Platform. This should be the most technical missing section and should bridge operational process into target architecture.

### Desktop Layout

Use a pale sage-to-lavender atmospheric wash with an open network diagram. Put the heading on the left or upper-left, then let the architecture diagram occupy the center/right without a boxed dashboard frame.

### Tablet Layout

Keep Power conversion central. Surrounding nodes may move closer into a compact radial or two-column network while preserving line meaning.

### Mobile Layout

Stack as a vertical architecture chain: Battery/BMS, Power conversion, EMS/site controls, Grid/protection, Diagnostics/support, C&I application. Use one central mint connector with small side labels.

### Copy Placement

Use the System Architecture eyebrow, headline and six node names from `docs/CONTENT.md`. Keep node descriptions optional and short.

### Visual Composition

Central dominant node: `Power conversion`. Surround it with no more than five supporting nodes: Battery and BMS interface, EMS and site controls, Grid interface and protection, Diagnostics and support record, Commercial and industrial application. Use two or three transparent glass planes behind the central node.

### Connector Entry

Mint connector enters from Deployment Model at `--connector-center-x` from the top edge and lands on the Power conversion node.

### Connector Exit

Architecture branches converge back into a single downward connector at `--connector-center-x`, leading into Initial Platform.

### Glass Elements

Use two or three layered glass planes behind the central Power conversion node, similar to the active hero and Initial Platform references. Keep opacity low.

### Icons and Diagram Elements

Use industrial outline icons or abstract nodes: converter block, battery/BMS, control interface, grid protection, diagnostic record and C&I load. Nodes should feel like clean labels, not colorful bubbles.

### Dimensions and Spacing

Central node visual footprint: 260-340px desktop. Supporting node labels: 160-220px. Maintain at least 56px between node clusters. Section padding: 120-140px.

### Colors

Background: Pale Sage with a soft Hero Wash/Lavender atmospheric wash. Mint lines for communication. Copper lines for electrical power. Violet dotted line only for diagnostics and support record.

### Borders and Radius

Node labels use thin Sage Mist borders, 16px radius if boxed. Avoid heavy cards and dashboards.

### Responsive Simplification

On mobile, reduce to a vertical readable diagram with color-coded line segments and no radial overflow.

### Accessibility

Provide node labels as real HTML text. If the diagram is SVG, include a text equivalent and ensure the reading order follows the system path.

### Prohibited Interpretations

No generic SaaS graph. No fake command center. No colorful bubble network. No fake telemetry metrics. No dashboard grid.

### Implementation Components

- `ArchitectureSection`
- `ArchitectureNetwork`
- `ArchitectureNode`
- `GlassPlaneStack`
- `ConnectorFragment`
- `TechnicalLegend`

## Built for India

### Purpose

Communicate practical India deployment readiness without nationalism, fake manufacturing or unsupported localization claims.

### Background and Position in Page Flow

Place after Initial Platform. It must visually continue from `07-initial-platform.png` and feel like the platform view is being explained, not replaced.

### Desktop Layout

Use a two-column layout. Left: simplified isometric infrastructure platform. Right: four editorial points.

### Tablet Layout

Keep the two-column layout at 1024px. At 768px, place the visual above the editorial list if the columns become cramped.

### Mobile Layout

Stack heading, visual and four editorial points. Use a compact isometric visual or simplified line diagram.

### Copy Placement

Use the Built for India headline and four focus areas from `docs/CONTENT.md`. Avoid adding claims beyond the approved text.

### Visual Composition

Left visual includes grid interface, abstract PCS/control layers, storage modules and restrained documentation or diagnostic overlays. Add a subtle copper route through the infrastructure and a mint control line that exits toward Service and Reliability. Violet appears only as one telemetry marker.

### Connector Entry

Mint connector enters from Initial Platform near `--connector-center-x`, then bends into the left isometric platform.

### Connector Exit

Mint control line exits from the right or lower-right side toward Service and Reliability.

### Glass Elements

Use thin transparent glass planes around the abstract PCS/control layers. Avoid frosted cards for every point.

### Icons and Diagram Elements

Editorial points use thin check-circle icons. Visual uses grid tower, control layers and storage modules in the same isometric perspective as Initial Platform.

### Dimensions and Spacing

Left visual: 48-54% desktop width. Right list: 38-44% desktop width. Row gap: 24-32px. Point dividers: thin Sage Mist.

### Colors

Background: Cream Paper, Sheet White and Pale Sage. Mint for control line. Copper for power route. One low-opacity violet telemetry marker.

### Borders and Radius

Use thin Sage Mist borders and 16px radius only on the main platform base or optional list container. No heavy shadow.

### Responsive Simplification

Mobile removes floating overlays and shows one clean platform plus the four points.

### Accessibility

Do not embed the four focus areas only in an image. Keep them as HTML list items.

### Prohibited Interpretations

No Indian flag graphics. No map of India. No Made in India badge. No fake factory. No finished proprietary PCS. No nationalism-heavy language.

### Implementation Components

- `BuiltForIndiaSection`
- `IsometricInfrastructurePlatform`
- `EditorialPointList`
- `ConnectorFragment`
- `ControlLine`

## Development Pathway

### Purpose

Show a staged direction for capability development while avoiding claims that every capability is currently operational.

### Background and Position in Page Flow

Place after Service and Reliability and before Partnership CTA. This section should be light, editorial and quiet, then curve the story back into a dark CTA.

### Desktop Layout

Create a horizontal five-stage progression with one mint timeline. Each stage has one restrained isometric object or abstract layered symbol. Place the disclaimer directly below the timeline.

### Tablet Layout

Use the same five-stage timeline at 1024px. At 768px, allow a two-row timeline with stages 1-3 on the first row and 4-5 on the second, connected by a soft line turn.

### Mobile Layout

Convert to a vertical timeline with stage numbers on the central mint line and objects reduced to small symbols.

### Copy Placement

Use the Development Pathway eyebrow, headline, five stages and disclaimer from `docs/CONTENT.md`. Do not add AI or manufacturing completion claims.

### Visual Composition

Visual complexity increases gradually: Stage 1 one simple module; Stage 2 documentation and service layers; Stage 3 multiple modules; Stage 4 controls and communication; Stage 5 layered glass planes with one violet telemetry node.

### Connector Entry

Mint connector enters from Service and Reliability at the top center or upper-left depending on the preceding section's exit.

### Connector Exit

The final timeline line curves downward into Partnership CTA at `--connector-right-x` on desktop and center on mobile.

### Glass Elements

Use subtle glass-plane symbols only in Stage 2 and Stage 5. Do not turn every stage into a glass card.

### Icons and Diagram Elements

Use abstract isometric modules, document layer, module cluster, control layer and glass intelligence layer. Keep all forms simple and industrial.

### Dimensions and Spacing

Stage group width: 180-220px desktop. Timeline runs nearly full container width. Object footprint: 80-140px per stage. Disclaimer max width: 640px.

### Colors

Background: Sheet White or Cream Paper. Timeline: mint. Stage object lines: muted green/sage. One violet telemetry node only at Stage 5. Minimal copper unless needed to show power capability.

### Borders and Radius

Avoid stage cards. Use tiny label pills only when needed, with 8px radius and Sage Mist border.

### Responsive Simplification

Mobile removes horizontal object spread and keeps the stage labels readable beside a vertical line.

### Accessibility

Use an ordered list. The disclaimer must be visible immediately after the timeline and not hidden in hover/fine print.

### Prohibited Interpretations

Do not claim current AI capability. Do not imply completed local assembly or proprietary production hardware. Do not copy the unsupported claims in the lower-page composite.

### Implementation Components

- `DevelopmentPathwaySection`
- `CapabilityTimeline`
- `TimelineStageSymbol`
- `ConnectorFragment`
- `DisclaimerNote`

## Partnership CTA

### Purpose

Convert the page story into a direct technical conversation without becoming generic marketing.

### Background and Position in Page Flow

Place after Development Pathway and before Footer. This section returns the page to deep dark Canopy.

### Desktop Layout

Use a two-column dark CTA. Left: headline, body and two CTAs. Right: layered transparent Glass logo-inspired planes with connector traces.

### Tablet Layout

Keep two columns at 1024px. At 768px, stack copy above the plane visual while keeping CTA buttons side by side if space allows.

### Mobile Layout

Stack headline, body, primary CTA, secondary CTA and a compact plane visual. Make buttons full width if needed.

### Copy Placement

Use the Partnership CTA eyebrow, headline, body and CTA labels from `docs/CONTENT.md`.

### Visual Composition

Right visual contains three or four layered transparent Glass logo-inspired planes. A restrained mint connector enters from Development Pathway, one small violet telemetry node sits near a plane edge and a subtle copper trace crosses beneath the planes.

### Connector Entry

Mint connector enters from Development Pathway at `--connector-right-x` on desktop and center on mobile.

### Connector Exit

Connector resolves into a small node near the plane stack, then continues subtly toward the Footer logo/brand statement.

### Glass Elements

Use three or four transparent planes inspired by the Glass mark. Keep opacity low and edges crisp.

### Icons and Diagram Elements

No icons required beyond CTA arrows if used. Plane stack and connector traces carry the visual.

### Dimensions and Spacing

Section padding: 104-128px. Copy column: 44-50%. Visual column: 40-48%. Plane stack footprint: 360-520px desktop.

### Colors

Background: Dark Canopy / Near Black Green. Primary CTA: Mint Pulse. Secondary CTA: dark outlined treatment. Text: Sheet White and Sage Mist. Copper trace: low opacity.

### Borders and Radius

Primary CTA radius 8px. Secondary CTA thin Sage Mist border. Optional section divider: thin Sage Mist with low opacity.

### Responsive Simplification

Mobile reduces plane count to two or three and hides most secondary trace detail.

### Accessibility

CTAs are real links/buttons with visible focus states. Plane visual is decorative unless it communicates flow, in which case provide a concise label.

### Prohibited Interpretations

No hardware render. No dashboard. No generic marketing illustration. No excessive glow. No fake customer proof.

### Implementation Components

- `PartnershipCtaSection`
- `CtaButtonGroup`
- `GlassPlaneMarkVisual`
- `ConnectorFragment`

## Footer

### Purpose

Resolve the site into a credible brand and contact endpoint.

### Background and Position in Page Flow

Place after Partnership CTA. It should feel like the final resting point of the connector system.

### Desktop Layout

Use near-black green or deep Canopy. Left: Glass Energy Systems logo and approved brand statement. Middle: grouped links. Right: contact email and optional social links only if they currently exist.

### Tablet Layout

Use two rows: brand statement on top, links/contact below.

### Mobile Layout

Stack logo, brand statement, link groups, contact email and closing line. Keep spacing generous and text readable.

### Copy Placement

Use the footer brand statement and final line from `docs/CONTENT.md`.

### Visual Composition

Thin Sage Mist divider at the top. Connector terminates subtly near the Glass logo mark or brand statement. No decorative card grid.

### Connector Entry

Mint connector enters from Partnership CTA near the brand mark or brand statement.

### Connector Exit

No outgoing connector. The line terminates as a small mint node or fades into the divider.

### Glass Elements

Optional tiny Glass mark plane echo near the logo only. Do not add a full background illustration.

### Icons and Diagram Elements

Only use social icons if existing approved links exist. No placeholder social links.

### Dimensions and Spacing

Footer padding: 64-88px top, 32-48px bottom. Link text: 14-15px. Legal row: 12-13px if actual pages exist.

### Colors

Background: Near Black Green or Dark Canopy. Text: Sheet White. Muted text: Sage Mist / Muted Slate. Divider: Sage Mist low opacity. Connector: subdued Mint Pulse.

### Borders and Radius

Thin top divider only. No card containers.

### Responsive Simplification

Mobile collapses link columns into simple stacked groups. Keep contact email visible.

### Accessibility

Use semantic footer markup. Link text must be descriptive and keyboard focus visible.

### Prohibited Interpretations

No newsletter form unless explicitly approved. No fake legal pages. No oversized logo. No bright gradients. No decorative card grid.

### Implementation Components

- `Footer`
- `FooterBrand`
- `FooterLinkGroup`
- `FooterContact`
- `ConnectorTerminus`
