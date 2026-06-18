import { motion, useReducedMotion } from "motion/react";

type EnergyBeamProps = {
  className?: string;
};

export function EnergyBeam({ className }: EnergyBeamProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg className={className} viewBox="0 0 1072 610" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="beam-green" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#83f3bd" stopOpacity="0" />
          <stop offset="46%" stopColor="#83f3bd" stopOpacity=".95" />
          <stop offset="100%" stopColor="#83f3bd" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="beam-blue" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#74a9ff" stopOpacity="0" />
          <stop offset="50%" stopColor="#b7dcff" stopOpacity=".96" />
          <stop offset="100%" stopColor="#74a9ff" stopOpacity="0" />
        </linearGradient>
        <filter id="beam-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {[
        ["M74 324C192 322 233 333 298 296C349 267 376 276 438 278", "url(#beam-green)", 0],
        ["M74 405C187 402 232 387 299 423C354 453 380 432 438 432", "url(#beam-green)", -1.4],
        ["M548 365C642 363 701 363 782 362C884 360 923 365 1012 374", "url(#beam-blue)", -0.6],
        ["M552 392C646 393 718 408 786 387C836 372 864 393 920 386", "url(#beam-blue)", -2],
      ].map(([d, stroke, delay]) => (
        <motion.path
          key={String(d)}
          d={String(d)}
          fill="none"
          stroke={String(stroke)}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="64 148"
          filter="url(#beam-glow)"
          initial={false}
          animate={shouldReduceMotion ? undefined : { strokeDashoffset: [0, -212], opacity: [0.58, 1, 0.68] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "linear", delay: Number(delay) }}
        />
      ))}
    </svg>
  );
}
