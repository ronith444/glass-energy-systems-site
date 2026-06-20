import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <a data-motion="button" className={cn("button", `button-${variant}`, className)} {...props}>
      {children}
    </a>
  );
}
