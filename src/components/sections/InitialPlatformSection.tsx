import { initialPlatform, initialSpecs } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";
import { Eyebrow } from "../ui/Eyebrow";

export function InitialPlatformSection() {
  return (
    <Section id={initialPlatform.id} surface="cream" labelledBy="initial-platform-title">
      <ConnectorAnchor position="entry" />
      <Container>
        <Eyebrow>{initialPlatform.eyebrow}</Eyebrow>
        <h2 id="initial-platform-title">{initialPlatform.headline}</h2>
        <ul className="spec-strip">
          {initialSpecs.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
        <p className="disclaimer">{initialPlatform.disclaimer}</p>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
