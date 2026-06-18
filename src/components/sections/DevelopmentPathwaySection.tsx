import { developmentPathway, developmentStages } from "../../content/siteContent";
import { DevelopmentTimeline } from "../diagrams/DevelopmentTimeline";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";
import { Eyebrow } from "../ui/Eyebrow";

export function DevelopmentPathwaySection() {
  return (
    <Section id={developmentPathway.id} surface="cream" labelledBy="development-title">
      <ConnectorAnchor position="entry" />
      <Container>
        <Eyebrow>{developmentPathway.eyebrow}</Eyebrow>
        <h2 id="development-title">{developmentPathway.headline}</h2>
        <DevelopmentTimeline stages={developmentStages} />
        <p className="disclaimer">{developmentPathway.disclaimer}</p>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
