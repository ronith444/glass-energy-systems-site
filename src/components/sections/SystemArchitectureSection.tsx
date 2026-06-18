import { systemArchitecture } from "../../content/siteContent";
import { ArchitectureDiagram } from "../diagrams/ArchitectureDiagram";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";
import { Eyebrow } from "../ui/Eyebrow";

export function SystemArchitectureSection() {
  return (
    <Section id={systemArchitecture.id} surface="sage" labelledBy="architecture-title">
      <ConnectorAnchor position="entry" />
      <Container className="split-grid">
        <div>
          <Eyebrow>{systemArchitecture.eyebrow}</Eyebrow>
          <h2 id="architecture-title">{systemArchitecture.headline}</h2>
        </div>
        <ArchitectureDiagram />
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
