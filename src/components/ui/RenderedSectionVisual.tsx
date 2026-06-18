import type { CSSProperties } from "react";
import { cn } from "../../lib/cn";

type LoadingMode = "eager" | "lazy";
type FetchPriority = "high" | "low" | "auto";

interface RenderedSectionVisualProps {
  src: string;
  alt: string;
  aspectRatio: string;
  className?: string;
  decorative?: boolean;
  fetchPriority?: FetchPriority;
  loading?: LoadingMode;
}

export function RenderedSectionVisual({
  src,
  alt,
  aspectRatio,
  className,
  decorative = false,
  fetchPriority,
  loading = "eager",
}: RenderedSectionVisualProps) {
  return (
    <figure
      className={cn("rendered-visual", className)}
      style={{ "--visual-aspect-ratio": aspectRatio } as CSSProperties}
    >
      <img
        src={src}
        alt={decorative ? "" : alt}
        aria-hidden={decorative ? "true" : undefined}
        decoding="async"
        fetchPriority={fetchPriority}
        loading={loading}
      />
    </figure>
  );
}
