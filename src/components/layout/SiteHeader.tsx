import { useState } from "react";
import logoFull from "../../assets/brand/glass-logo-full-dark.png";
import { navigation, primaryCta } from "../../content/siteContent";
import { Button } from "../ui/Button";

interface SiteHeaderProps {
  onOpenDiscussion: (opener: HTMLElement) => void;
}

export function SiteHeader({ onOpenDiscussion }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="brand-lockup" href="#hero" aria-label="Glass Energy Systems home">
          <img src={logoFull} alt="" width="154" height="64" />
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
        <Button
          href={primaryCta.href}
          className="header-cta"
          onClick={(event) => {
            event.preventDefault();
            setMenuOpen(false);
            onOpenDiscussion(event.currentTarget);
          }}
        >
          {primaryCta.label}
        </Button>
      </div>
    </header>
  );
}
