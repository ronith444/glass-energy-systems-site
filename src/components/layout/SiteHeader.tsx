import logoMark from "../../../assets/glass-logo-mark-96.png";
import { navigation, primaryCta } from "../../content/siteContent";
import { Button } from "../ui/Button";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#hero" aria-label="Glass Energy Systems home">
        <img src={logoMark} alt="" width="35" height="48" />
        <span>
          <strong>Glass</strong>
          <small>Energy Systems</small>
        </span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <Button href={primaryCta.href} className="header-cta">
        {primaryCta.label}
      </Button>
    </header>
  );
}
