import initialPlatformVisual from "../../assets/visuals/07-initial-platform.webp";
import { initialPlatform, initialSpecs } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { LiquidGlassSurface } from "../ui/LiquidGlassSurface";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

export function InitialPlatformSection() {
  return (
    <Section id={initialPlatform.id} surface="cream" labelledBy="initial-platform-title">
      <Container className="initial-platform-layout">
        <div className="initial-platform-copy">
          <Eyebrow>{initialPlatform.eyebrow}</Eyebrow>
          <h2 id="initial-platform-title" data-motion="headline">
            {initialPlatform.headline}
          </h2>
          <p className="visual-qualifier" data-motion="body">
            Conceptual system architecture
          </p>
        </div>
        <div className="initial-platform-visual-field">
          <RenderedSectionVisual
            src={initialPlatformVisual}
            alt="Conceptual system architecture showing PCS controls, storage, grid and C&I loads."
            aspectRatio="1491 / 1055"
            className="initial-platform-render"
          />
        </div>
        <LiquidGlassSurface
          as="ul"
          className="spec-strip initial-spec-console"
          variant="light"
          aria-label="Initial platform specifications"
          radius={12}
          data-motion="panel"
          data-motion-reflection
        >
          {initialSpecs.map((item, index) => (
            <li key={item.title} data-motion="item" data-motion-order={index}>
              {item.title}
            </li>
          ))}
        </LiquidGlassSurface>
        <p className="disclaimer initial-platform-disclaimer" data-motion="body">
          {initialPlatform.disclaimer}
        </p>
      </Container>
    </Section>
  );
}
