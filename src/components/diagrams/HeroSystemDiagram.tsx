import { TechnicalLabel } from "../ui/TechnicalLabel";
import { technicalLabels } from "../../content/siteContent";

const systemNodes = [
  {
    className: "grid-interface",
    title: "Grid interface",
    detail: "400/415V AC · 3P · 50Hz",
  },
  {
    className: "power-conversion",
    title: "Power conversion",
    detail: "100kW bidirectional PCS path",
  },
  {
    className: "storage-system",
    title: "Storage system",
    detail: "700-1000V DC battery side",
  },
  {
    className: "ci-application",
    title: "C&I application",
    detail: "Commercial and industrial loads",
  },
];

export function HeroSystemDiagram() {
  return (
    <figure className="hero-diagram" aria-labelledby="hero-diagram-title">
      <figcaption id="hero-diagram-title">PCS-centered storage deployment path</figcaption>
      <div className="hero-system-stage">
        <svg className="hero-system-lines" viewBox="0 0 1180 420" aria-hidden="true">
          <path className="line-power" d="M112 244 H338 C382 244 386 204 426 204 H524" />
          <path className="line-control" d="M632 238 H758 C798 238 798 270 840 270 H1056" />
          <path className="line-control" d="M612 210 H738" />
          <path className="line-telemetry" d="M354 164 C440 112 512 112 594 150" />
          <path className="line-telemetry" d="M772 166 C840 120 902 120 978 164" />
          <path className="line-drop" d="M590 268 V404" />
          <circle className="node-power" cx="338" cy="244" r="7" />
          <circle className="node-control" cx="758" cy="238" r="7" />
          <circle className="node-control" cx="590" cy="404" r="7" />
          <circle className="node-telemetry" cx="354" cy="164" r="4" />
          <circle className="node-telemetry" cx="978" cy="164" r="4" />
        </svg>
        <div className="system-node-row" aria-hidden="true">
          {systemNodes.map((node) => (
            <div className={`system-node system-node-${node.className}`} key={node.title}>
              {node.title === "Power conversion" ? (
                <div className="conversion-stack" aria-hidden="true">
                  <span className="conversion-plane conversion-plane-back" />
                  <span className="conversion-plane conversion-plane-mid" />
                  <span className="conversion-plane conversion-plane-front" />
                  <span className="conversion-core" />
                  <span className="conversion-pulse" />
                </div>
              ) : (
                <span className="node-illustration" />
              )}
              <span className="node-title">{node.title}</span>
              <span className="node-detail">{node.detail}</span>
            </div>
          ))}
        </div>
        <div className="system-legend" aria-hidden="true">
          <span>
            <i className="legend-power" />
            Power flow
          </span>
          <span>
            <i className="legend-control" />
            Control & communication
          </span>
          <span>
            <i className="legend-telemetry" />
            Telemetry
          </span>
        </div>
      </div>
      <div className="technical-labels" aria-label="Technical focus">
        {technicalLabels.map((item) => (
          <TechnicalLabel key={item.label}>{item.label}</TechnicalLabel>
        ))}
      </div>
    </figure>
  );
}
