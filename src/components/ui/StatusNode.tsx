import { cn } from "../../lib/cn";

interface StatusNodeProps {
  index?: number;
  tone?: "mint" | "copper" | "violet";
}

export function StatusNode({ index, tone = "mint" }: StatusNodeProps) {
  return (
    <span className={cn("status-node", `status-node-${tone}`)} aria-hidden="true">
      {typeof index === "number" ? index : null}
    </span>
  );
}
