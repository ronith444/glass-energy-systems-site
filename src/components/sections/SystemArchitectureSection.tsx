import architectureVisual from "../../assets/visuals/06-system-architecture.webp";
import { architectureNodes, systemArchitecture } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { LiquidGlassSurface } from "../ui/LiquidGlassSurface";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

export function SystemArchitectureSection() {
  return (
    <Section id={systemArchitecture.id} surface="sage" labelledBy="architecture-title">
      <Container className="architecture-render-layout">
        <div className="architecture-copy">
          <Eyebrow>{systemArchitecture.eyebrow}</Eyebrow>
          <h2 id="architecture-title" data-motion="headline">
            {systemArchitecture.headline}
          </h2>
        </div>
        <div className="architecture-visual-field">
          <RenderedSectionVisual
            src={architectureVisual}
            alt="Open system architecture network centered on power conversion with battery, controls, grid, diagnostics and C&I application nodes."
            aspectRatio="1491 / 1055"
            className="architecture-render"
          />
        </div>
        <LiquidGlassSurface
          as="ul"
          className="architecture-node-list"
          variant="light"
          aria-label="Architecture legend"
          radius={12}
          data-motion="panel"
        >
          {architectureNodes.map((node, index) => (
            <li key={node.title} data-kind={node.kind} data-motion="item" data-motion-order={index}>
              {node.title}
            </li>
          ))}
        </LiquidGlassSurface>
      </Container>
    </Section>
  );
}
