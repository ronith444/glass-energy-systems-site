import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { reveal } from "../../lib/animations";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const components = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    li: motion.li,
  };
  const Component = components[as];

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={reveal}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
