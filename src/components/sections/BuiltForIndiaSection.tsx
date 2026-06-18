import builtForIndiaVisual from "../../assets/visuals/08-built-for-india.webp";
import { builtForIndia, indiaPoints } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";
import { Eyebrow } from "../ui/Eyebrow";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

export function BuiltForIndiaSection() {
  return (
    <Section id={builtForIndia.id} surface="sage" labelledBy="india-title">
      <ConnectorAnchor position="entry" />
      <Container className="built-india-layout">
        <RenderedSectionVisual
          src={builtForIndiaVisual}
          alt="Infrastructure-oriented PCS deployment visual with grid, storage, controls and C&I load context."
          aspectRatio="1491 / 1055"
          className="built-india-render"
        />
        <div>
          <Eyebrow>{builtForIndia.eyebrow}</Eyebrow>
          <h2 id="india-title">{builtForIndia.headline}</h2>
          <ul className="editorial-list">
            {indiaPoints.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
