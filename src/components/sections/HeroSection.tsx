import { hero } from "../../content/siteContent";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";
import { HeroSystemDiagram } from "../diagrams/HeroSystemDiagram";

export function HeroSection() {
  return (
    <Section id={hero.id} surface="hero" labelledBy="hero-title" className="hero-section">
      <Container className="hero-layout">
        <div className="hero-copy">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 id="hero-title">{hero.headline}</h1>
          <p>{hero.body}</p>
          <div className="button-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
        <HeroSystemDiagram />
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
