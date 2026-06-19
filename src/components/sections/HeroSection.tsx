import heroSystemVisual from "../../assets/visuals/01-hero-system-desktop.webp";
import { hero, technicalLabels } from "../../content/siteContent";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { LiquidGlassSurface } from "../ui/LiquidGlassSurface";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

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
        <div className="hero-rendered-system">
          <RenderedSectionVisual
            src={heroSystemVisual}
            alt="Conceptual PCS-centered system linking grid interface, power conversion, storage and C&I application."
            aspectRatio="1672 / 941"
            className="hero-system-render"
            fetchPriority="high"
            loading="eager"
          />
          <LiquidGlassSurface
            className="technical-labels hero-technical-rail"
            aria-label="Technical focus"
            density="compact"
            radius={12}
          >
            {technicalLabels.map((item) => (
              <span className="technical-label" key={item.label}>
                {item.label}
              </span>
            ))}
          </LiquidGlassSurface>
        </div>
      </Container>
    </Section>
  );
}
