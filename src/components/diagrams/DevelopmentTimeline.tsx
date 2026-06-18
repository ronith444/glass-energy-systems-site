import type { TimelineStage } from "../../types/content";
import { StatusNode } from "../ui/StatusNode";

interface DevelopmentTimelineProps {
  stages: TimelineStage[];
}

export function DevelopmentTimeline({ stages }: DevelopmentTimelineProps) {
  return (
    <ol className="timeline timeline-five" aria-label="Development pathway stages">
      {stages.map((stage, index) => (
        <li key={stage.title}>
          <StatusNode index={index + 1} />
          <span className="stage-symbol" aria-hidden="true" />
          <h3>{stage.title}</h3>
          {stage.body ? <p>{stage.body}</p> : null}
        </li>
      ))}
    </ol>
  );
}
