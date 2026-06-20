import type { HTMLAttributes, ReactNode } from "react";

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function Eyebrow({ children, ...props }: EyebrowProps) {
  return (
    <p className="eyebrow" data-motion="eyebrow" {...props}>
      {children}
    </p>
  );
}
