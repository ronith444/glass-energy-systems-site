import serviceSpeedVisual from "../../assets/visuals/03-service-speed-transition.webp";
import { servicePrinciples, serviceSpeed } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

export function ServiceSpeedSection() {
  return (
    <Section
      id={serviceSpeed.id}
      surface="transition"
      labelledBy="service-speed-title"
      className="service-speed-section"
    >
      <Container className="service-speed-layout">
        <div className="service-speed-copy">
          <Eyebrow>{serviceSpeed.eyebrow}</Eyebrow>
          <h2 id="service-speed-title">{serviceSpeed.headline}</h2>
          <p>{serviceSpeed.body}</p>
        </div>
        <RenderedSectionVisual
          src={serviceSpeedVisual}
          alt="Connected service process from fault ownership through technical triage, spares and hypercare."
          aspectRatio="1672 / 941"
          className="service-speed-render"
        />
        <ol className="service-process" aria-label="Service speed process">
          {servicePrinciples.map((item, index) => (
            <li key={item.title} className={`service-stage service-stage-${index + 1}`}>
              <span className="service-stage-index">0{index + 1}</span>
              <strong>{item.title}</strong>
            </li>
          ))}
        </ol>
        <p className="section-highlight">{serviceSpeed.highlight}</p>
      </Container>
    </Section>
  );
}
