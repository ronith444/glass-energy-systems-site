# Glass Energy Systems Visual QA

## Quality Bar

The Glass website should feel like a MotionSites-level hard-tech brand surface: cinematic, precise, and physically grounded. It must look like a professional hyperscaling energy infrastructure startup, not a vibe-coded landing page dressed in dark colors.

Passing build and lint only proves the code compiles. It does not prove the design is credible, readable, responsive, or production-clean.

## Professional Hard-tech Startup Criteria

* The first viewport immediately communicates PCS integration for India's C&I BESS market.
* Visuals should feel related to power electronics, grid-tied storage, validation, and field deployment.
* The site should feel calm, expensive, engineered, and restrained.
* The site should feel commercially serious and established through process maturity, not fake scale.
* Copy must avoid fake traction, fake certifications, fake customers, and fake manufacturing capability.
* Copy must avoid one-person founder energy, tentative public phrasing, and internal roadmap disclosure.
* Every visual flourish must support hierarchy, hardware, power flow, technical trust, or interaction feedback.
* Important meaning must not live only in raster imagery. Text that matters should remain selectable HTML text.

## Hero Visual Checklist

* The hero fits a small laptop first viewport without feeling cramped.
* The PCS conversion visual is the strongest visual moment on the page.
* The headline is specific and readable at 390px, 768px, 1024px, and 1440px.
* The hero image is optimized, responsive, and not blurry.
* Battery, PCS, and grid relationships are visible through linework, composition, or motion.
* CTAs have clear contrast, visible hover states, active states, and keyboard focus.
* The logo is crisp, not oversized, and not distorted.
* The hero does not rely on fake dashboards, fake telemetry, arbitrary metrics, or ornamental labels.
* The page avoids a white flash on load.

## Technology Architecture Checklist

* The architecture section is the second strongest visual moment after the hero.
* The battery -> PCS -> grid story is visually clear before reading the body text.
* Technical labels are real and useful: DC bus, PCS conversion core, grid output, BMS/EMS communication, protection, protocol mapping.
* Power-flow animation is subtle, directional, and tied to the technical story.
* Specs are stage-accurate: 100kW path, 700-1000V DC, 400/415V AC, 3-phase, 50Hz, CAN / Modbus / Ethernet.
* Icons and diagrams share one stroke language and do not feel like random library decoration.
* No amateur schematic drawing should carry the main technology story.
* For any 3D or near-3D rebuild, use `3D_STORY_SYSTEM.md` and `3D_PERFORMANCE_RULES.md` before judging visual ambition or launch readiness.

## Lower-section Checklist

* Sections should follow the approved story: Why Glass Exists, What Glass Handles, Technical Focus, Supplier / Customer Fit, Current Status, Contact, Footer.
* Avoid a large public roadmap section unless the content is stage-accurate and necessary.
* Avoid generic Problem / Solution headings when they make the site feel like a pitch deck.
* Avoid bloated feature grids and generic bento grids.
* Every section should either clarify the market, the PCS path, supplier readiness, validation workflow, or contact intent.
* Contact behavior must be honest. A static site can use mailto, but it must not imply a fake backend.
* Footer content should be compact and not invent legal, certification, or company claims.

## Mobile QA Checklist

Check at 390px, 768px, 1024px, and 1440px:

* No horizontal scrolling.
* Text does not overlap images, diagrams, nav, buttons, or form controls.
* Buttons remain legible and usable with touch.
* Hero visual remains centered and understandable.
* Architecture flow remains readable, even if it stacks.
* Form labels and inputs remain readable with visible focus states.
* Navigation does not exceed the viewport or cover content.
* Motion is reduced or simplified on small screens when needed for performance.
* Images remain appropriately sized and do not force layout jumps.

## Launch Readiness Scoring

Score each area from 1 to 10:

* Brand clarity: Can a visitor explain what Glass does after the first viewport?
* Supplier trust: Would a serious PCS supplier know what to prepare for a discussion?
* Customer clarity: Would a C&I developer, EPC, or integrator know why Glass exists?
* Content quality: Are claims specific, honest, and free of AI cliches?
* Visual quality: Does the site feel premium, physical, and engineered?
* Motion quality: Does motion explain power flow, hierarchy, or feedback?
* Responsive quality: Does the site hold up at 390px, 768px, 1024px, and 1440px?
* Production quality: Are metadata, images, icons, alt text, load states, and console health clean?
* Established-company perception: Does Glass feel commercially serious, focused, credible, and not tentative?
* Full-page story quality: Does the site feel like one continuous supplier/customer deployment narrative from hero to footer?

Launch-ready means no category below 8/10 and no credibility issue involving fake claims.

## Established-Company Perception Scoring

Score high only if:

* The site feels commercially serious.
* The brand feels focused and credible.
* The copy does not sound tentative.
* Trust is created through technical specificity.
* No fake scale or fake claims are used.
* No internal roadmap is exposed.

Score low if:

* The site feels like a founder portfolio.
* The copy says "early", "pilot", or "under development" too often.
* Roadmap/future plans are shown publicly.
* The visual story feels like a demo rather than a company website.

## Full-Page Story Quality Score

Score high only if:

* The site feels like one continuous story from hero to footer.
* The story starts with the brand and PCS system introduction.
* The story ends in contact/footer as a natural technical handoff.
* Every section has a clear role in the deployment narrative.
* 3D or near-3D depth supports the whole page, not only one isolated moment.
* Lower sections do not collapse into normal card grids.
* The architecture section is the technical peak, not the only meaningful animation.
* Supplier/customer buy-in improves as the visitor scrolls.

Score low if:

* 3D only appears in the hero.
* The architecture section is the only animated or premium section.
* Sections feel disconnected from one another.
* Lower sections feel like generic landing-page cards.
* Contact/footer feel pasted on.
* Motion is decorative instead of narrative.

## Anti-patterns

* Generic SaaS dashboard hero
* AI-purple gradients or decorative glow stacks
* Static content blocks with no hierarchy
* Decorative card grids
* Cards inside cards
* Fake dashboards, fake telemetry, fake customers, fake certifications, fake manufacturing claims
* Founder-portfolio or hobby-project cues
* Public roadmap, future component, internal R&D, or manufacturing-plan exposure
* Random icons unrelated to PCS, battery, grid, controls, validation, or field support
* Weak motion that only fades everything upward
* Motion that hides content until JavaScript runs
* Cluttered metadata labels that do not add information
* Vague copy such as "revolutionizing energy", "cutting-edge solutions", "future of energy", "seamless", "unleash", "elevate", or "sustainable innovation"
