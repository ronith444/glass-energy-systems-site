export type Surface =
  | "hero"
  | "dark"
  | "transition"
  | "cream"
  | "sheet"
  | "sage"
  | "cta"
  | "footer";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface SectionCopy {
  id: string;
  eyebrow: string;
  headline: string;
  body?: string;
}

export interface TechnicalLabel {
  label: string;
}

export interface ListItem {
  title: string;
  body?: string;
}

export interface TimelineStage {
  title: string;
  body?: string;
}

export interface ArchitectureNode {
  title: string;
  kind: "central" | "support";
}

export interface FooterGroup {
  title: string;
  links: NavigationItem[];
}
