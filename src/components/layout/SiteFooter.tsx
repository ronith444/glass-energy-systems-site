import logoFull from "../../assets/brand/glass-logo-full-dark.png";
import { footer, footerGroups } from "../../content/siteContent";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="site-footer" data-motion-section>
      <Container className="footer-grid">
        <div className="footer-brand" data-motion="item">
          <a className="brand-lockup" href="#hero" aria-label="Glass Energy Systems home">
            <img src={logoFull} alt="" width="154" height="64" />
          </a>
          <p>{footer.brandStatement}</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation" data-motion="item">
          {footerGroups.map((group) => (
            <div className="footer-group" key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-contact" data-motion="item">
          <h2>Connect</h2>
          <a href={`mailto:${footer.email}`}>{footer.email}</a>
        </div>
      </Container>
      <Container className="footer-bottom" data-motion="item">
        <p>{footer.finalLine}</p>
      </Container>
    </footer>
  );
}
