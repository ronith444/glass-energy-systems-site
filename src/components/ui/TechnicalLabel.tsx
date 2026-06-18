interface TechnicalLabelProps {
  children: string;
}

export function TechnicalLabel({ children }: TechnicalLabelProps) {
  return <span className="technical-label">{children}</span>;
}
