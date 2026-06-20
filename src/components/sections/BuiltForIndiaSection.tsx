import builtForIndiaVisual from "../../assets/visuals/08-built-for-india.webp";
import { builtForIndia, indiaPoints } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

export function BuiltForIndiaSection() {
  return (
    <Section id={builtForIndia.id} surface="sage" labelledBy="india-title">
      <Container className="built-india-layout">
        <div className="built-india-copy">
          <Eyebrow>{builtForIndia.eyebrow}</Eyebrow>
          <h2 id="india-title" data-motion="headline">
            {builtForIndia.headline}
          </h2>
        </div>
        <RenderedSectionVisual
          src={builtForIndiaVisual}
          alt="Infrastructure oriented PCS deployment visual with grid, storage, controls and C&I load context."
          aspectRatio="1491 / 1055"
          className="built-india-render"
        />
        <ul className="editorial-list built-india-list">
          {indiaPoints.map((item, index) => (
            <li key={item.title} data-motion="item" data-motion-order={index}>
              {item.title}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
