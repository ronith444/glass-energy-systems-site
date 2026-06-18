import { useState } from "react";
import logoMark from "../../../assets/glass-logo-mark-96.png";
import { navigation, primaryCta } from "../../content/siteContent";
import { Button } from "../ui/Button";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="brand-lockup" href="#hero" aria-label="Glass Energy Systems home">
          <img src={logoMark} alt="" width="35" height="48" />
          <span>
            <strong>Glass</strong>
            <small>Energy Systems</small>
          </span>
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
