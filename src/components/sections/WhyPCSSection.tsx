import { pcsReasons, whyPcs } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";

export function WhyPCSSection() {
  return (
    <Section id={whyPcs.id} surface="cream" labelledBy="why-pcs-title">
      <ConnectorAnchor position="entry" />
      <Container className="split-grid">
        <div>
          <Eyebrow>{whyPcs.eyebrow}</Eyebrow>
          <h2 id="why-pcs-title">{whyPcs.headline}</h2>
          <p>{whyPcs.body}</p>
        </div>
        <ul className="reason-columns">
          {pcsReasons.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
