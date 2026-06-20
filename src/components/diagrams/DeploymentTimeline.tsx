import type { TimelineStage } from "../../types/content";

interface DeploymentTimelineProps {
  stages: TimelineStage[];
}

export function DeploymentTimeline({ stages }: DeploymentTimelineProps) {
  return (
    <ol className="rendered-stage-list rendered-stage-list-six" aria-label="Deployment model stages">
      {stages.map((stage, index) => (
        <li key={stage.title} data-motion="item" data-motion-order={index}>
          <span className="stage-number">0{index + 1}</span>
          <h3>{stage.title}</h3>
          {stage.body ? <p>{stage.body}</p> : null}
        </li>
      ))}
    </ol>
  );
}
