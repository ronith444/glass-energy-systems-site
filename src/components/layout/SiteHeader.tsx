import { useState } from "react";
import logoFull from "../../assets/brand/glass-logo-full-dark.png";
import logoMark from "../../assets/brand/glass-logo-mark-dark.png";
import { navigation, primaryCta } from "../../content/siteContent";
import { Button } from "../ui/Button";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="brand-lockup" href="#hero" aria-label="Glass Energy Systems home">
          <picture>
            <source media="(max-width: 640px)" srcSet={logoMark} />
            <img src={logoFull} alt="" width="154" height="64" />
          </picture>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <nav
          id="primary-navigation"
          className="site-nav"
          data-open={menuOpen}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button href={primaryCta.href} className="header-cta">
          {primaryCta.label}
        </Button>
      </div>
    </header>
  );
}
