import partnershipVisual from "../../assets/visuals/11-partnership-glass-mark.webp";
import { partnershipCta } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Eyebrow";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

export function PartnershipCTASection() {
  return (
    <Section id={partnershipCta.id} surface="cta" labelledBy="partners-title">
      <Container className="cta-grid">
        <div>
          <Eyebrow>{partnershipCta.eyebrow}</Eyebrow>
          <h2 id="partners-title">{partnershipCta.headline}</h2>
          <p>{partnershipCta.body}</p>
          <div className="button-row">
            <Button href={partnershipCta.primaryCta.href}>{partnershipCta.primaryCta.label}</Button>
            <Button href={partnershipCta.secondaryCta.href} variant="secondary">
              {partnershipCta.secondaryCta.label}
            </Button>
          </div>
        </div>
        <div className="partnership-visual-field">
          <RenderedSectionVisual
            src={partnershipVisual}
            alt="Abstract layered glass sculpture representing a supported pilot handoff."
            aspectRatio="1491 / 1055"
            className="partnership-render"
          />
        </div>
      </Container>
    </Section>
  );
}
