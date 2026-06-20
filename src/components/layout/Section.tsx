import type { HTMLAttributes, ReactNode } from "react";
import type { Surface } from "../../types/content";
import { cn } from "../../lib/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  surface: Surface;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}

export function Section({ id, surface, children, className, labelledBy, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section", `section-${surface}`, className)}
      aria-labelledby={labelledBy}
      data-motion-section
      {...props}
    >
      {children}
    </section>
  );
}
