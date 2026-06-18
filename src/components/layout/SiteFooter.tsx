import logoMark from "../../../assets/glass-logo-mark-96.png";
import { footer, footerGroups } from "../../content/siteContent";
import { Container } from "./Container";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <ConnectorAnchor position="entry" />
      <Container className="footer-grid">
        <div className="footer-brand">
          <a className="brand-lockup" href="#hero" aria-label="Glass Energy Systems home">
            <img src={logoMark} alt="" width="35" height="48" />
            <span>
              <strong>Glass</strong>
              <small>Energy Systems</small>
            </span>
          </a>
          <p>{footer.brandStatement}</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
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
        <div className="footer-contact">
          <h2>Connect</h2>
          <a href={`mailto:${footer.email}`}>{footer.email}</a>
        </div>
      </Container>
      <Container className="footer-bottom">
        <p>{footer.finalLine}</p>
      </Container>
    </footer>
  );
}
