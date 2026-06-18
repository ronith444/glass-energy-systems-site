import { servicePrinciples, serviceSpeed } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";

export function ServiceSpeedSection() {
  return (
    <Section id={serviceSpeed.id} surface="transition" labelledBy="service-speed-title">
      <ConnectorAnchor position="entry" />
      <Container className="split-grid">
        <div>
          <Eyebrow>{serviceSpeed.eyebrow}</Eyebrow>
          <h2 id="service-speed-title">{serviceSpeed.headline}</h2>
          <p>{serviceSpeed.body}</p>
          <p className="section-highlight">{serviceSpeed.highlight}</p>
        </div>
        <ul className="principle-grid">
          {servicePrinciples.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
