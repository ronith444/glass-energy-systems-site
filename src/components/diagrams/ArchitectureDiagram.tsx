import { architectureNodes } from "../../content/siteContent";
import { GlassPlane } from "../ui/GlassPlane";

export function ArchitectureDiagram() {
  const central = architectureNodes.find((node) => node.kind === "central");
  const supports = architectureNodes.filter((node) => node.kind === "support");

  return (
    <div className="architecture-diagram" aria-label="Power conversion architecture nodes">
      <div className="architecture-core">
        <GlassPlane />
        <GlassPlane className="glass-plane-offset" />
        <strong>{central?.title}</strong>
      </div>
      <ul className="architecture-nodes">
        {supports.map((node) => (
          <li key={node.title}>{node.title}</li>
        ))}
      </ul>
    </div>
  );
}
