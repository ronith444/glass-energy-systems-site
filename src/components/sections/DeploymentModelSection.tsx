import deploymentVisual from "../../assets/visuals/05-deployment-model.webp";
import { deploymentModel, deploymentStages } from "../../content/siteContent";
import { DeploymentTimeline } from "../diagrams/DeploymentTimeline";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

export function DeploymentModelSection() {
  return (
    <Section id={deploymentModel.id} surface="sheet" labelledBy="deployment-title">
      <Container className="rendered-process-section">
        <div className="section-heading-block">
          <Eyebrow>{deploymentModel.eyebrow}</Eyebrow>
          <h2 id="deployment-title" data-motion="headline">
            {deploymentModel.headline}
          </h2>
        </div>
        <RenderedSectionVisual
          src={deploymentVisual}
          alt="Six stage deployment process from qualification through stabilization."
          aspectRatio="1672 / 941"
          className="deployment-render"
        />
        <DeploymentTimeline stages={deploymentStages} />
        <p className="section-closing" data-motion="body">
          {deploymentModel.closingLine}
        </p>
      </Container>
    </Section>
  );
}
