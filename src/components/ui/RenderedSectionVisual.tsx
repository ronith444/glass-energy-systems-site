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
  reflection?: boolean;
}

export function RenderedSectionVisual({
  src,
  alt,
  aspectRatio,
  className,
  decorative = false,
  fetchPriority,
  loading = "lazy",
  reflection = false,
}: RenderedSectionVisualProps) {
  return (
    <figure
      className={cn("rendered-visual", className)}
      data-motion="visual"
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
      <span className="motion-visual-overlay" aria-hidden="true" />
      {reflection ? <span className="motion-reflection" data-motion="reflection" aria-hidden="true" /> : null}
    </figure>
  );
}
