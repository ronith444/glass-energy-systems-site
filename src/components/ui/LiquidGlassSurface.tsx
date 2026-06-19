import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface LiquidGlassSurfaceProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  density?: "compact" | "standard";
  highlight?: boolean;
  radius?: 10 | 12 | 14;
  variant?: "dark" | "light" | "button" | "menu";
}

export function LiquidGlassSurface({
  as: Component = "div",
  children,
  className,
  density = "standard",
  highlight = true,
  radius = 12,
  variant = "dark",
  ...props
}: LiquidGlassSurfaceProps) {
  return (
    <Component
      className={cn(
        "liquid-glass-surface",
        `liquid-glass-${variant}`,
        `liquid-glass-${density}`,
        `liquid-glass-radius-${radius}`,
        highlight && "liquid-glass-highlight",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
