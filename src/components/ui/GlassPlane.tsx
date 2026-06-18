import { cn } from "../../lib/cn";

interface GlassPlaneProps {
  className?: string;
}

export function GlassPlane({ className }: GlassPlaneProps) {
  return <span className={cn("glass-plane", className)} aria-hidden="true" />;
}
