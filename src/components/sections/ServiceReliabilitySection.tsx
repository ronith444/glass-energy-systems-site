import { serviceModules, serviceReliability } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";

export function ServiceReliabilitySection() {
  return (
    <Section id={serviceReliability.id} surface="sheet" labelledBy="reliability-title">
      <Container>
        <Eyebrow>{serviceReliability.eyebrow}</Eyebrow>
        <h2 id="reliability-title" data-motion="headline">
          {serviceReliability.headline}
        </h2>
        <ul className="module-grid">
          {serviceModules.map((item, index) => (
            <li key={item.title} data-motion="item" data-motion-order={index}>
              <span>0{index + 1}</span>
              <strong>{item.title}</strong>
            </li>
          ))}
        </ul>
        <p className="section-closing" data-motion="body">
          {serviceReliability.closingLine}
        </p>
      </Container>
    </Section>
  );
}
