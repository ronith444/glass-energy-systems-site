import { cn } from "../../lib/cn";

interface BrandGlassPlanesProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  quiet?: boolean;
}

export function BrandGlassPlanes({ className, size = "md", quiet = false }: BrandGlassPlanesProps) {
  return (
    <span
      className={cn("brand-glass-planes", `brand-glass-planes-${size}`, quiet && "brand-glass-planes-quiet", className)}
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
    </span>
  );
}
