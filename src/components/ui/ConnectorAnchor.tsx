import { cn } from "../../lib/cn";

interface ConnectorAnchorProps {
  position: "entry" | "exit" | "center" | "left" | "right";
  tone?: "mint" | "copper" | "violet";
}

export function ConnectorAnchor({ position, tone = "mint" }: ConnectorAnchorProps) {
  return <span className={cn("connector-anchor", `connector-${position}`, `connector-${tone}`)} aria-hidden="true" />;
}
