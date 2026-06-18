import type { TimelineStage } from "../../types/content";
import { StatusNode } from "../ui/StatusNode";

interface DeploymentTimelineProps {
  stages: TimelineStage[];
}

export function DeploymentTimeline({ stages }: DeploymentTimelineProps) {
  return (
    <ol className="timeline timeline-six" aria-label="Deployment model stages">
      {stages.map((stage, index) => (
        <li key={stage.title}>
          <StatusNode index={index + 1} />
          <h3>{stage.title}</h3>
          {stage.body ? <p>{stage.body}</p> : null}
        </li>
      ))}
    </ol>
  );
}
