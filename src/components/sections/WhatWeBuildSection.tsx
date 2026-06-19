import approachVisual from "../../assets/visuals/02-approach-capability-system.webp";
import { approachOutcomes, capabilities, whatWeBuild } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { LiquidGlassSurface } from "../ui/LiquidGlassSurface";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

export function WhatWeBuildSection() {
  return (
    <Section id={whatWeBuild.id} surface="dark" labelledBy="what-title" className="approach-section">
      <Container className="approach-grid">
        <div className="approach-copy">
          <Eyebrow>{whatWeBuild.eyebrow}</Eyebrow>
          <h2 id="what-title">{whatWeBuild.headline}</h2>
          <p>{whatWeBuild.body}</p>
          <ul className="outcome-list" aria-label="Deployment outcomes">
            {approachOutcomes.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div className="approach-visual-stack">
          <RenderedSectionVisual
            src={approachVisual}
            alt="Rendered technical register showing PCS hardware, documentation, grid context and support readiness."
            aspectRatio="1491 / 1055"
            className="approach-render"
          />
          <LiquidGlassSurface
            as="ul"
            className="capability-list rendered-capability-list"
            aria-label="Glass capability workflow"
            radius={14}
          >
            {capabilities.map((item) => (
              <li key={item.title}>
                <span>
                  <strong>{item.title}</strong>
                  <em>{item.body}</em>
                </span>
                <small>
                  <i aria-hidden="true" />
                  {item.status}
                </small>
              </li>
            ))}
          </LiquidGlassSurface>
        </div>
      </Container>
    </Section>
  );
}
