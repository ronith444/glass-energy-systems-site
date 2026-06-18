import developmentVisual from "../../assets/visuals/10-development-pathway.webp";
import { developmentPathway, developmentStages } from "../../content/siteContent";
import { DevelopmentTimeline } from "../diagrams/DevelopmentTimeline";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";
import { Eyebrow } from "../ui/Eyebrow";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

export function DevelopmentPathwaySection() {
  return (
    <Section id={developmentPathway.id} surface="cream" labelledBy="development-title">
      <ConnectorAnchor position="entry" />
      <Container className="rendered-process-section development-render-section">
        <div className="section-heading-block">
          <Eyebrow>{developmentPathway.eyebrow}</Eyebrow>
          <h2 id="development-title">{developmentPathway.headline}</h2>
        </div>
        <RenderedSectionVisual
          src={developmentVisual}
          alt="Five-stage development pathway showing capability growth toward layered intelligence."
          aspectRatio="1672 / 941"
          className="development-render"
        />
        <DevelopmentTimeline stages={developmentStages} />
        <p className="disclaimer">{developmentPathway.disclaimer}</p>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
