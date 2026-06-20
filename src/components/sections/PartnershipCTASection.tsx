import partnershipVisual from "../../assets/brand/glass-logo-full-dark.png";
import { partnershipCta } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Eyebrow";
import { RenderedSectionVisual } from "../ui/RenderedSectionVisual";

interface PartnershipCTASectionProps {
  onOpenDiscussion: (opener: HTMLElement) => void;
  onOpenTechnologyPartner: (opener: HTMLElement) => void;
}

export function PartnershipCTASection({
  onOpenDiscussion,
  onOpenTechnologyPartner,
}: PartnershipCTASectionProps) {
  return (
    <Section id={partnershipCta.id} surface="cta" labelledBy="partners-title">
      <Container className="cta-grid">
        <div>
          <Eyebrow>{partnershipCta.eyebrow}</Eyebrow>
          <h2 id="partners-title">{partnershipCta.headline}</h2>
          <p>{partnershipCta.body}</p>
          <div className="button-row">
            <Button
              href={partnershipCta.primaryCta.href}
              onClick={(event) => {
                event.preventDefault();
                onOpenDiscussion(event.currentTarget);
              }}
            >
              {partnershipCta.primaryCta.label}
            </Button>
            <Button
              href={partnershipCta.secondaryCta.href}
              variant="secondary"
              onClick={(event) => {
                event.preventDefault();
                onOpenTechnologyPartner(event.currentTarget);
              }}
            >
              {partnershipCta.secondaryCta.label}
            </Button>
          </div>
        </div>
        <div className="partnership-visual-field">
          <RenderedSectionVisual
            src={partnershipVisual}
            alt="Glass Energy Systems logo."
            aspectRatio="1491 / 1055"
            className="partnership-render"
          />
        </div>
      </Container>
    </Section>
  );
}
