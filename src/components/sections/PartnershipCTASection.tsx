import { partnershipCta } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";
import { Eyebrow } from "../ui/Eyebrow";
import { GlassPlane } from "../ui/GlassPlane";

export function PartnershipCTASection() {
  return (
    <Section id={partnershipCta.id} surface="cta" labelledBy="partners-title">
      <ConnectorAnchor position="entry" />
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
        <div className="plane-stack" aria-hidden="true">
          <GlassPlane />
          <GlassPlane className="glass-plane-offset" />
          <GlassPlane className="glass-plane-deep" />
        </div>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
