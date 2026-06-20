import developmentVisual from "../../assets/visuals/10-development-pathway.webp";
import { developmentPathway, developmentStages } from "../../content/siteContent";
import { DevelopmentTimeline } from "../diagrams/DevelopmentTimeline";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

export function DevelopmentPathwaySection() {
  return (
    <Section id={developmentPathway.id} surface="cream" labelledBy="development-title">
      <Container className="rendered-process-section development-render-section">
        <div className="section-heading-block">
          <Eyebrow>{developmentPathway.eyebrow}</Eyebrow>
          <h2 id="development-title" data-motion="headline">
            {developmentPathway.headline}
          </h2>
        </div>
        <RenderedSectionVisual
          src={developmentVisual}
          alt="Five stage operating capability sequence across hardware, documentation, controls and service."
          aspectRatio="1672 / 941"
          className="development-render"
        />
        <DevelopmentTimeline stages={developmentStages} />
        <p className="disclaimer" data-motion="body">
          {developmentPathway.disclaimer}
        </p>
      </Container>
    </Section>
  );
}
