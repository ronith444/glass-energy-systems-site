import { whyPcs } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";

export function WhyPCSSection() {
  return (
    <Section id={whyPcs.id} surface="cream" labelledBy="why-pcs-title" className="why-pcs-entry-section">
      <ConnectorAnchor position="entry" />
      <Container className="why-pcs-entry">
        <div className="why-pcs-copy">
          <Eyebrow>{whyPcs.eyebrow}</Eyebrow>
          <h2 id="why-pcs-title">{whyPcs.headline}</h2>
          <p>{whyPcs.body}</p>
        </div>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
