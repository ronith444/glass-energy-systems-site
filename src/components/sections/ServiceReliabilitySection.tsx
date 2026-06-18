import { serviceModules, serviceReliability } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";
import { Eyebrow } from "../ui/Eyebrow";

export function ServiceReliabilitySection() {
  return (
    <Section id={serviceReliability.id} surface="sheet" labelledBy="reliability-title">
      <ConnectorAnchor position="entry" />
      <Container>
        <Eyebrow>{serviceReliability.eyebrow}</Eyebrow>
        <h2 id="reliability-title">{serviceReliability.headline}</h2>
        <ul className="module-grid">
          {serviceModules.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
        <p className="section-closing">{serviceReliability.closingLine}</p>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
