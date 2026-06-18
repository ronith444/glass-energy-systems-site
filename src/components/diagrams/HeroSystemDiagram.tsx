import { TechnicalLabel } from "../ui/TechnicalLabel";
import { GlassPlane } from "../ui/GlassPlane";
import { technicalLabels } from "../../content/siteContent";

export function HeroSystemDiagram() {
  return (
    <figure className="hero-diagram" aria-labelledby="hero-diagram-title">
      <figcaption id="hero-diagram-title">PCS-centered storage deployment path</figcaption>
      <div className="system-rail" aria-hidden="true">
        <span className="system-node">Grid</span>
        <span className="power-line" />
        <span className="system-core">
          <GlassPlane />
          <GlassPlane className="glass-plane-offset" />
          PCS
        </span>
        <span className="control-line" />
        <span className="system-node">BESS</span>
        <span className="control-line" />
        <span className="system-node">C&I</span>
      </div>
      <div className="technical-labels" aria-label="Technical focus">
        {technicalLabels.map((item) => (
          <TechnicalLabel key={item.label}>{item.label}</TechnicalLabel>
        ))}
      </div>
    </figure>
  );
}
