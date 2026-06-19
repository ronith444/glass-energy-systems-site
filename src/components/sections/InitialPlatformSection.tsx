import initialPlatformVisual from "../../assets/visuals/07-initial-platform.webp";
import { initialPlatform, initialSpecs } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

export function InitialPlatformSection() {
  return (
    <Section id={initialPlatform.id} surface="cream" labelledBy="initial-platform-title">
      <Container className="initial-platform-layout">
        <div className="initial-platform-copy">
          <Eyebrow>{initialPlatform.eyebrow}</Eyebrow>
          <h2 id="initial-platform-title">{initialPlatform.headline}</h2>
          <p className="visual-qualifier">Conceptual system architecture</p>
          <ul className="spec-strip">
            {initialSpecs.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
          <p className="disclaimer">{initialPlatform.disclaimer}</p>
        </div>
        <div className="initial-platform-visual-field">
          <RenderedSectionVisual
            src={initialPlatformVisual}
            alt="Conceptual system architecture showing PCS controls, storage, grid and C&I loads."
            aspectRatio="1491 / 1055"
            className="initial-platform-render"
          />
        </div>
      </Container>
    </Section>
  );
}
