type TechnicalGlyphVariant =
  | "grid"
  | "conversion"
  | "storage"
  | "load"
  | "source"
  | "integrate"
  | "validate"
  | "support";

type TechnicalGlyphProps = {
  variant: TechnicalGlyphVariant;
  className?: string;
};

export function TechnicalGlyph({ variant, className = "" }: TechnicalGlyphProps) {
  return (
    <span className={`technical-glyph technical-glyph-${variant} ${className}`} aria-hidden="true">
      <span />
    </span>
  );
}

export function GlassPlaneStack() {
  return (
    <div className="glass-plane-stack" aria-hidden="true">
      <span className="glass-plane-layer glass-plane-layer-back" />
      <span className="glass-plane-layer glass-plane-layer-mid" />
      <span className="glass-plane-layer glass-plane-layer-front" />
      <span className="glass-plane-core" />
      <span className="glass-plane-status" />
    </div>
  );
}
