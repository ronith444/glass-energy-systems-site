import { builtForIndia, indiaPoints } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";
import { Eyebrow } from "../ui/Eyebrow";
import { GlassPlane } from "../ui/GlassPlane";

export function BuiltForIndiaSection() {
  return (
    <Section id={builtForIndia.id} surface="sage" labelledBy="india-title">
      <ConnectorAnchor position="entry" />
      <Container className="split-grid">
        <div className="platform-placeholder" aria-label="Simplified grid, PCS control, and storage platform">
          <span>Grid interface</span>
          <GlassPlane />
          <span>PCS control layers</span>
          <span>Storage modules</span>
        </div>
        <div>
          <Eyebrow>{builtForIndia.eyebrow}</Eyebrow>
          <h2 id="india-title">{builtForIndia.headline}</h2>
          <ul className="editorial-list">
            {indiaPoints.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
