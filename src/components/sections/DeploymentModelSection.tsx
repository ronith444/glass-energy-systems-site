import { deploymentModel, deploymentStages } from "../../content/siteContent";
import { DeploymentTimeline } from "../diagrams/DeploymentTimeline";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";
import { Eyebrow } from "../ui/Eyebrow";

export function DeploymentModelSection() {
  return (
    <Section id={deploymentModel.id} surface="sheet" labelledBy="deployment-title">
      <ConnectorAnchor position="entry" />
      <Container>
        <Eyebrow>{deploymentModel.eyebrow}</Eyebrow>
        <h2 id="deployment-title">{deploymentModel.headline}</h2>
        <DeploymentTimeline stages={deploymentStages} />
        <p className="section-closing">{deploymentModel.closingLine}</p>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
