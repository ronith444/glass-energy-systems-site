import type { TimelineStage } from "../../types/content";

interface DevelopmentTimelineProps {
  stages: TimelineStage[];
}

export function DevelopmentTimeline({ stages }: DevelopmentTimelineProps) {
  return (
    <ol className="rendered-stage-list rendered-stage-list-five" aria-label="Operating capability stages">
      {stages.map((stage, index) => (
        <li key={stage.title}>
          <span className="stage-number">0{index + 1}</span>
          <h3>{stage.title}</h3>
          {stage.body ? <p>{stage.body}</p> : null}
        </li>
      ))}
    </ol>
  );
}
