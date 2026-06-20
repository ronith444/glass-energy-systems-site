import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("container", className)} {...props}>
      {children}
    </div>
  );
}
