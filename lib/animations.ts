import type { Variants } from "motion/react";

export const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1];
export const easeInOut: [number, number, number, number] = [0.77, 0, 0.175, 1];
export const easeExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const reveal: Variants = {
  hidden: { opacity: 0, transform: "translate3d(0, 30px, 0)", filter: "blur(16px)" },
  visible: {
    opacity: 1,
    transform: "translate3d(0, 0px, 0)",
    filter: "blur(0px)",
    transition: { duration: 0.76, ease: easeExpo },
  },
};

export const revealSoft: Variants = {
  hidden: { opacity: 0, transform: "translate3d(0, 24px, 0)", filter: "blur(14px)" },
  visible: {
    opacity: 1,
    transform: "translate3d(0, 0px, 0)",
    filter: "blur(0px)",
    transition: { duration: 0.68, ease: easeExpo },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.16,
    },
  },
};

export const navLoad = {
  initial: { opacity: 0, transform: "translate3d(0, -12px, 0)", filter: "blur(8px)" },
  animate: {
    opacity: 1,
    transform: "translate3d(0, 0px, 0)",
    filter: "blur(0px)",
    transition: { duration: 0.54, ease: easeExpo, delay: 0.04 },
  },
};

export const heroImage = {
  initial: { opacity: 0, transform: "translate3d(32px, 16px, 0) scale(0.974)", filter: "blur(18px)" },
  animate: {
    opacity: 1,
    transform: "translate3d(0px, 0px, 0) scale(1)",
    filter: "blur(0px)",
    transition: { duration: 1.08, ease: easeExpo, delay: 0.42 },
  },
};
