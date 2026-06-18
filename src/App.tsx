import { useEffect, useRef, useState } from "react";
import type { CSSProperties, FormEvent, ReactNode } from "react";
import type { Variants } from "motion/react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import { navLoad, revealSoft, stagger } from "../lib/animations";
import { Reveal } from "../components/animated/reveal";
import heroPcsEntry from "../assets/motion/hero-pcs-entry.mp4";
import supplierReadinessToPcs from "../assets/motion/supplier-readiness-to-pcs.mp4";
import batteryThroughPcsToGrid from "../assets/motion/battery-through-pcs-to-grid.mp4";
import contactHandoff from "../assets/motion/contact-handoff.mp4";
import posterHero from "../assets/motion/poster-hero.webp";
import posterReadiness from "../assets/motion/poster-readiness.webp";
import posterTechnical from "../assets/motion/poster-technical.webp";
import posterContact from "../assets/motion/poster-contact.webp";
import glassLogo from "../assets/glass-logo-mark-96.png";

const navItems = [
  ["Why Glass", "#why"],
  ["What We Handle", "#handles"],
  ["Technical Focus", "#technical"],
  ["Fit", "#fit"],
  ["Contact", "#contact"],
];

const storyChapters = [
  ["PCS intro", "#top"],
  ["PCS readiness", "#why"],
  ["Source / validate", "#handles"],
  ["Architecture peak", "#technical"],
  ["Partner fit", "#fit"],
  ["Handoff", "#contact"],
];

const heroChips = [
  "100kW PCS path",
  "700-1000V DC",
  "400/415V AC, 3P, 50Hz",
  "CAN / Modbus / Ethernet",
];

const handleSteps = [
  ["Source", "Identify PCS hardware, documentation, support readiness, and supplier fit."],
  ["Integrate", "Align PCS, BMS, EMS, protection, and communication requirements around a repeatable 100kW path."],
  ["Validate", "Structure FAT, protocol checks, fault-code review, and deployment documentation before site work."],
  ["Deploy", "Support commissioning readiness, issue tracking, spares planning, and early field feedback."],
];

const architectureNodes = [
  {
    className: "arch-supplier",
    label: "Supplier hardware",
    value: "PCS + documentation readiness",
    detail: "Manuals, datasheets, protocol maps, warranty and spares context.",
  },
  {
    className: "arch-battery",
    label: "Battery DC Bus",
    value: "700-1000V DC",
    detail: "Battery-side target range, protection coordination, and BMS interface context.",
  },
  {
    className: "arch-pcs",
    label: "PCS Conversion Core",
    value: "100kW bidirectional path",
    detail: "The conversion point Glass is structuring for integration, FAT, limits, alarms, and commissioning readiness.",
  },
  {
    className: "arch-grid",
    label: "Grid Output",
    value: "400/415V AC, 3P, 50Hz",
    detail: "India C&I grid-side context for site handover and field deployment planning.",
  },
];

const architectureBadges = ["CAN / Modbus / Ethernet", "FAT + protocol checks", "Fault-code review", "Documentation before site work"];

const architectureSequence = ["Supplier docs", "Battery DC", "PCS core", "Grid output", "Validation"];

const statusItems = [
  "Supplier discussions focused on the 100kW bidirectional PCS path",
  "Documentation, FAT, and protocol workflow being structured",
  "India C&I deployment conditions shaping the field-readiness path",
  "Technical discussions open for suppliers, EPCs, integrators, developers, and partners",
];

const fitColumns = [
  {
    title: "PCS suppliers",
    kind: "Supplier readiness",
    body: "For PCS suppliers prepared to discuss manuals, datasheets, protocol maps, FAT procedures, fault-code lists, warranty, spares, India grid readiness, and pilot-unit support.",
    checks: ["100kW bidirectional PCS focus", "Technical unit support", "Documentation and support readiness"],
  },
  {
    title: "Customers / integrators",
    kind: "Deployment users",
    body: "For C&I BESS developers, EPCs, integrators, and project owners planning storage deployments where PCS reliability and field readiness matter.",
    checks: ["PCS-side execution clarity", "Validation before site work", "Commissioning readiness"],
  },
  {
    title: "Strategic partners",
    kind: "Partner fit",
    body: "For partners focused on India's energy infrastructure buildout and disciplined deployment execution.",
    checks: ["Focused PCS deployment wedge", "India C&I BESS context", "No fake traction claims"],
  },
];

const inquiryPrompts = [
  "Project type",
  "Power range",
  "Battery/DC range",
  "Grid connection",
  "Supplier/company profile",
  "Timeline",
  "Country/market",
];

const handoffSteps = ["Project context", "PCS / supplier details", "Direct email draft"];

const flowEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const flowGroup: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

const flowItem: Variants = {
  hidden: { opacity: 0, transform: "translate3d(0, 18px, 0)", filter: "blur(10px)" },
  visible: {
    opacity: 1,
    transform: "translate3d(0, 0px, 0)",
    filter: "blur(0px)",
    transition: { duration: 0.56, ease: flowEase },
  },
};

type StoryVideoKey = "readiness" | "technical";

type StoryPhase = {
  id: string;
  anchor?: string;
  headingId?: string;
  videoKey: StoryVideoKey;
  eyebrow: string;
  title: string;
  body: string;
  cardTitle: string;
  cardBody: string;
  checks: string[];
  stageLabel: string;
};

const scrollStoryPhases: StoryPhase[] = [
  {
    id: "why",
    anchor: "why",
    headingId: "why-title",
    videoKey: "readiness",
    eyebrow: "Why Glass exists",
    title: "Reliable storage deployment depends on the PCS layer.",
    body: "Supplier documentation, site requirements, grid conditions, and deployment execution need one disciplined PCS integration path.",
    cardTitle: "Supplier readiness before field work",
    cardBody: "Supplier hardware must meet site context before it reaches the field.",
    checks: [
      "Protocol clarity",
      "FAT structure",
      "Fault-code review and spares planning",
    ],
    stageLabel: "Supplier readiness",
  },
  {
    id: "source",
    anchor: "handles",
    headingId: "handles-title",
    videoKey: "readiness",
    eyebrow: "What Glass handles",
    title: "Source",
    body: "Identify PCS hardware, documentation, support readiness, and supplier fit before integration work starts.",
    cardTitle: handleSteps[0][0],
    cardBody: handleSteps[0][1],
    checks: ["PCS hardware", "Documentation", "Supplier fit"],
    stageLabel: "Source",
  },
  {
    id: "integrate",
    videoKey: "readiness",
    eyebrow: "What Glass handles",
    title: "Integrate",
    body: "Close PCS, BMS, EMS, protection, and communication interfaces around the 100kW path.",
    cardTitle: handleSteps[1][0],
    cardBody: handleSteps[1][1],
    checks: ["PCS + BMS", "EMS interface", "Protection context"],
    stageLabel: "Integrate",
  },
  {
    id: "validate",
    videoKey: "readiness",
    eyebrow: "What Glass handles",
    title: "Validate",
    body: "Turn supplier readiness into FAT, protocol checks, fault-code review, and deployment documentation.",
    cardTitle: handleSteps[2][0],
    cardBody: handleSteps[2][1],
    checks: ["FAT", "Protocol checks", "Fault-code review"],
    stageLabel: "Validate",
  },
  {
    id: "deploy",
    videoKey: "readiness",
    eyebrow: "What Glass handles",
    title: "Deploy",
    body: "Resolve the workflow into commissioning readiness, issue tracking, spares planning, and early field feedback.",
    cardTitle: handleSteps[3][0],
    cardBody: handleSteps[3][1],
    checks: ["Commissioning readiness", "Issue tracking", "Spares planning"],
    stageLabel: "Deploy",
  },
  {
    id: "battery",
    anchor: "technical",
    headingId: "technical-title",
    videoKey: "technical",
    eyebrow: "Technical focus",
    title: "Focused first on a repeatable 100kW PCS path.",
    body: "The battery-side path starts with a 700-1000V DC target range for C&I storage sites in India.",
    cardTitle: "Battery DC input",
    cardBody: architectureNodes[1].detail,
    checks: ["700-1000V DC", "BMS interface", "Protection coordination"],
    stageLabel: "Battery DC",
  },
  {
    id: "pcs",
    videoKey: "technical",
    eyebrow: "Technical focus",
    title: "PCS conversion core",
    body: "The PCS is the conversion point for integration, FAT, limits, alarms, and commissioning readiness.",
    cardTitle: architectureNodes[2].value,
    cardBody: architectureNodes[2].detail,
    checks: ["100kW bidirectional path", "Limits and alarms", "Commissioning readiness"],
    stageLabel: "PCS core",
  },
  {
    id: "grid",
    videoKey: "technical",
    eyebrow: "Technical focus",
    title: "Grid AC output",
    body: "Grid-side context resolves into 400/415V AC, 3-phase, 50Hz, and protocol clarity for handover.",
    cardTitle: architectureNodes[3].value,
    cardBody: architectureNodes[3].detail,
    checks: ["400/415V AC", "3-phase, 50Hz", "CAN / Modbus / Ethernet"],
    stageLabel: "Grid AC",
  },
];

type MotionVisualProps = {
  className?: string;
  video: string;
  poster: string;
  title: string;
  active?: boolean;
  scrubProgress?: number;
  children?: ReactNode;
};

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
}

function MotionVisual({ className = "", video, poster, title, active = true, scrubProgress, children }: MotionVisualProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const mobileStatic = useMediaQuery("(max-width: 760px)");
  const disableVideo = Boolean(shouldReduceMotion || mobileStatic);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) {
      return;
    }

    if (!active || disableVideo) {
      videoElement.pause();
      return;
    }

    if (typeof scrubProgress === "number") {
      const progress = Math.min(1, Math.max(0, scrubProgress));

      if (Number.isFinite(videoElement.duration) && videoElement.duration > 0) {
        const targetTime = Math.min(videoElement.duration - 0.04, videoElement.duration * progress);

        if (Math.abs(videoElement.currentTime - targetTime) > 0.08) {
          videoElement.currentTime = targetTime;
        }
      }

      videoElement.pause();
      return;
    }

    void videoElement.play().catch(() => {
      videoElement.pause();
    });
  }, [active, disableVideo, scrubProgress, video]);

  return (
    <div className={`motion-visual ${className}`} aria-label={title}>
      <img className="motion-poster" src={poster} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <video
        ref={videoRef}
        autoPlay={active && !disableVideo}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        poster={poster}
      >
        <source src={video} type="video/mp4" />
      </video>
      <span className="motion-vignette" aria-hidden="true" />
      {children ? <div className="motion-overlay">{children}</div> : null}
    </div>
  );
}

function ScrollStory({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  const [activePhaseId, setActivePhaseId] = useState(scrollStoryPhases[0].id);
  const stepRefs = useRef<Record<string, HTMLElement | null>>({});
  const rafRef = useRef<number | null>(null);

  const activeIndex = Math.max(0, scrollStoryPhases.findIndex((phase) => phase.id === activePhaseId));
  const activePhase = scrollStoryPhases[activeIndex];
  const activeVideoKey = activePhase.videoKey;

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const updateActivePhase = () => {
      const focusY = window.innerHeight * 0.48;
      let closestPhaseId = scrollStoryPhases[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      scrollStoryPhases.forEach((phase) => {
        const node = stepRefs.current[phase.id];

        if (!node) {
          return;
        }

        const rect = node.getBoundingClientRect();
        const isNearViewport = rect.bottom > window.innerHeight * 0.08 && rect.top < window.innerHeight * 0.92;

        if (!isNearViewport) {
          return;
        }

        const phaseCenter = rect.top + rect.height * 0.45;
        const distance = Math.abs(phaseCenter - focusY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestPhaseId = phase.id;
        }
      });

      setActivePhaseId(closestPhaseId);
    };

    const queueActivePhaseUpdate = () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = window.requestAnimationFrame(updateActivePhase);
    };

    const observer = new IntersectionObserver(
      () => queueActivePhaseUpdate(),
      {
        root: null,
        rootMargin: "-12% 0px -12% 0px",
        threshold: [0, 0.2, 0.42, 0.68],
      },
    );

    scrollStoryPhases.forEach((phase) => {
      const node = stepRefs.current[phase.id];

      if (node) {
        observer.observe(node);
      }
    });

    queueActivePhaseUpdate();
    window.addEventListener("scroll", queueActivePhaseUpdate, { passive: true });
    window.addEventListener("resize", queueActivePhaseUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", queueActivePhaseUpdate);
      window.removeEventListener("resize", queueActivePhaseUpdate);

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [shouldReduceMotion]);

  return (
    <section className="section scroll-story shell" aria-label="Scroll-linked PCS deployment story">
      <div className="scroll-story-layout">
        <aside className="scroll-story-stage" aria-label="Active motion story stage">
          <div className={`story-screen story-screen-${activeVideoKey}`}>
            <div className="story-motion-stack">
              <MotionVisual
                className={`story-motion story-motion-readiness ${activeVideoKey === "readiness" ? "is-active" : ""}`}
                video={supplierReadinessToPcs}
                poster={posterReadiness}
                title="Supplier documentation and PCS readiness visual"
                active={activeVideoKey === "readiness"}
              >
                <div className="story-visual-labels mono" aria-label="Readiness sequence">
                  {scrollStoryPhases
                    .filter((phase) => phase.videoKey === "readiness" && phase.id !== "why")
                    .map((phase) => {
                      const phaseIndex = scrollStoryPhases.findIndex((item) => item.id === phase.id);
                      const state = phaseIndex === activeIndex ? "is-active" : phaseIndex < activeIndex ? "is-passed" : "";

                      return <span className={state} key={phase.id}>{phase.stageLabel}</span>;
                    })}
                </div>
              </MotionVisual>
              <MotionVisual
                className={`story-motion story-motion-technical ${activeVideoKey === "technical" ? "is-active" : ""}`}
                video={batteryThroughPcsToGrid}
                poster={posterTechnical}
                title="Battery DC through PCS conversion to grid output"
                active={activeVideoKey === "technical"}
              >
                <div className="story-visual-labels mono" aria-label="Battery to PCS to grid sequence">
                  {scrollStoryPhases
                    .filter((phase) => phase.videoKey === "technical")
                    .map((phase) => {
                      const phaseIndex = scrollStoryPhases.findIndex((item) => item.id === phase.id);
                      const state = phaseIndex === activeIndex ? "is-active" : phaseIndex < activeIndex ? "is-passed" : "";

                      return <span className={state} key={phase.id}>{phase.stageLabel}</span>;
                    })}
                </div>
              </MotionVisual>
            </div>

            <div className="story-stage-copy">
              <p className="mono">{activePhase.eyebrow}</p>
              <strong>{activePhase.stageLabel}</strong>
              <span>{activePhase.cardTitle}</span>
            </div>

            <div className="story-phase-track mono" aria-label="Scroll story phase progress">
              {scrollStoryPhases.map((phase, index) => {
                const state = index === activeIndex ? "is-active" : index < activeIndex ? "is-passed" : "";

                return (
                  <span className={state} key={phase.id}>
                    <b>0{index + 1}</b>
                    {phase.stageLabel}
                  </span>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="scroll-story-steps">
          {scrollStoryPhases.map((phase, index) => {
            const phaseState = index === activeIndex ? "is-active" : index < activeIndex ? "is-passed" : "is-waiting";

            return (
            <motion.article
              id={phase.anchor}
              ref={(node) => {
                stepRefs.current[phase.id] = node;
              }}
              className={`story-step story-step-${phase.videoKey} ${phaseState}`}
              data-phase={phase.id}
              aria-current={phase.id === activePhaseId ? "step" : undefined}
              key={phase.id}
              initial={shouldReduceMotion ? false : { opacity: 0.72, y: 26, filter: "blur(8px)" }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.44 }}
              transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="story-step-shell">
                <span className="story-step-index mono">0{index + 1}</span>
                <p className="story-step-kicker mono">{phase.eyebrow}</p>
                <h2 id={phase.headingId}>{phase.title}</h2>
                <p className="story-step-body">{phase.body}</p>

                <div className="story-card">
                  <div>
                    <span className="mono">{phase.stageLabel}</span>
                    <h3>{phase.cardTitle}</h3>
                  </div>
                  <p>{phase.cardBody}</p>
                  <ul>
                    {phase.checks.map((check) => (
                      <li key={check}>{check}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function App() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLElement | null>(null);
  const [heroProgress, setHeroProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setHeroProgress(1);
      return;
    }

    let frame = 0;

    const updateHeroProgress = () => {
      const hero = heroRef.current;

      if (!hero) {
        return;
      }

      const rect = hero.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));

      setHeroProgress((previous) => (Math.abs(previous - progress) > 0.012 ? progress : previous));
    };

    const queueHeroProgress = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(updateHeroProgress);
    };

    queueHeroProgress();
    window.addEventListener("scroll", queueHeroProgress, { passive: true });
    window.addEventListener("resize", queueHeroProgress);

    return () => {
      window.removeEventListener("scroll", queueHeroProgress);
      window.removeEventListener("resize", queueHeroProgress);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [shouldReduceMotion]);

  const heroBeat = Math.min(5, Math.max(1, heroProgress >= 0.7 ? 5 : heroProgress >= 0.55 ? 4 : heroProgress >= 0.4 ? 3 : heroProgress >= 0.25 ? 2 : 1));
  const heroVideoActive = heroProgress > 0.015 && heroProgress < 0.99;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim();
    const company = String(form.get("company") || "").trim();
    const role = String(form.get("role") || "").trim();
    const projectType = String(form.get("projectType") || "").trim();
    const powerRange = String(form.get("powerRange") || "").trim();
    const dcRange = String(form.get("dcRange") || "").trim();
    const gridConnection = String(form.get("gridConnection") || "").trim();
    const timeline = String(form.get("timeline") || "").trim();
    const market = String(form.get("market") || "").trim();
    const message = String(form.get("message") || "").trim();
    const subject = `Glass Energy Systems technical discussion${company ? ` - ${company}` : ""}`;
    const body = [
      `Email: ${email || "Not provided"}`,
      `Company: ${company || "Not provided"}`,
      `Role / context: ${role || "Not provided"}`,
      `Project type: ${projectType || "Not provided"}`,
      `Power range: ${powerRange || "Not provided"}`,
      `Battery/DC range: ${dcRange || "Not provided"}`,
      `Grid connection: ${gridConnection || "Not provided"}`,
      `Timeline: ${timeline || "Not provided"}`,
      `Country/market: ${market || "Not provided"}`,
      "",
      "Message:",
      message || "Not provided",
      "",
      "Context: 100kW bidirectional PCS path / India C&I BESS",
    ].join("\n");

    window.location.href = `mailto:ronith@glassenergysystems.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <motion.div
        className="page-progress"
        aria-hidden="true"
        style={{ scaleX: shouldReduceMotion ? 1 : scrollYProgress }}
      />
      <div className="deployment-rail" aria-hidden="true">
        <span className="deployment-rail-track" />
        <motion.span
          className="deployment-rail-fill"
          style={{ scaleY: shouldReduceMotion ? 1 : scrollYProgress }}
        />
        <span className="deployment-rail-pulse" />
        <span className="deployment-dots">
          {storyChapters.map(([label, href]) => (
            <span key={href} data-label={label} />
          ))}
        </span>
      </div>
      <motion.header className="site-header" initial={shouldReduceMotion ? false : navLoad.initial} animate={navLoad.animate}>
        <nav className="site-nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Glass Energy Systems home" onClick={closeMenu}>
            <img src={glassLogo} width="70" height="96" alt="Glass Energy Systems logo mark" />
            <span>Glass Energy Systems</span>
          </a>
          <div className="nav-links">
            {navItems.map(([label, href]) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </div>
          <a className="nav-cta mono" href="#contact">Contact</a>
          <button
            className="menu-button mono"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className="menu-icon" aria-hidden="true">
              <b />
              <b />
            </span>
          </button>
        </nav>
        <motion.div
          id="mobile-menu"
          className="mobile-menu shell"
          initial={false}
          animate={menuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, y: 0, pointerEvents: "auto" },
            closed: { opacity: 0, y: -12, pointerEvents: "none" },
          }}
          transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {navItems.map(([label, href]) => (
            <a href={href} key={href} onClick={closeMenu}>{label}</a>
          ))}
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </motion.div>
      </motion.header>

      <main id="main">
        <section
          className={`hero ${heroProgress >= 0.995 ? "is-released" : "is-pinned"}`}
          id="top"
          aria-labelledby="hero-title"
          ref={heroRef}
          data-hero-beat={heroBeat}
          style={{ "--hero-progress": heroProgress } as CSSProperties}
        >
          <div className="hero-sticky shell">
            <div className="hero-copy" aria-label="Glass Energy Systems opening message">
              <p className={`eyebrow mono hero-beat ${heroBeat >= 1 ? "is-visible" : ""}`}>India-focused PCS reliability systems</p>
              <h1 id="hero-title" className={`hero-beat ${heroBeat >= 1 ? "is-visible" : ""}`}>
                PCS integration for India&apos;s C&I storage buildout.
              </h1>
              <p className={`hero-lede hero-beat ${heroBeat >= 2 ? "is-visible" : ""}`}>
                Glass Energy Systems is building a focused 100kW bidirectional PCS integration, validation, and deployment pathway for commercial and industrial battery storage projects in India.
              </p>
              <p className={`hero-audience hero-beat ${heroBeat >= 3 ? "is-visible" : ""}`}>
                For PCS suppliers, EPCs, integrators, C&I BESS developers, and strategic partners.
              </p>
              <div className={`hero-chip-list mono hero-beat ${heroBeat >= 4 ? "is-visible" : ""}`} aria-label="Technical focus">
                {heroChips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
              <div className={`hero-actions hero-beat ${heroBeat >= 5 ? "is-visible" : ""}`}>
                <a className="button button-primary mono" href="#contact">Start technical discussion</a>
                <a className="button button-secondary mono" href="#technical">View PCS focus</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="render-field">
                <MotionVisual
                  className="hero-motion"
                  video={heroPcsEntry}
                  poster={posterHero}
                  title="Battery system, PCS conversion core, and India grid connection architecture"
                  active={heroVideoActive || Boolean(shouldReduceMotion)}
                  scrubProgress={shouldReduceMotion ? undefined : heroProgress}
                />
                <span className="hero-stage-glow hero-stage-glow-a" aria-hidden="true" />
                <span className="hero-stage-glow hero-stage-glow-b" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <ScrollStory shouldReduceMotion={Boolean(shouldReduceMotion)} />

        <section className="section fit shell" id="fit" aria-labelledby="fit-title">
          <Reveal className="section-heading">
            <h2 id="fit-title">Built for technical conversations with the right partners.</h2>
            <p>Glass is useful when the discussion is concrete: PCS readiness, documentation, grid context, FAT, pilot units, and field deployment support.</p>
          </Reveal>
          <motion.div
            className="fit-grid"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            variants={flowGroup}
          >
            <span className="fit-bridge" aria-hidden="true" />
            {fitColumns.map((fit, index) => (
              <motion.article className={`fit-card fit-card-${index + 1}`} key={fit.title} variants={flowItem}>
                <div className="fit-card-head">
                  <span className="mono">{fit.kind}</span>
                  <strong>{fit.title}</strong>
                </div>
                <p>{fit.body}</p>
                <ul>
                  {fit.checks.map((check) => (
                    <li key={check}>{check}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="section status shell" id="status" aria-labelledby="status-title">
          <Reveal className="status-panel">
            <div>
              <p className="section-kicker mono">Current status</p>
              <h2 id="status-title">Current status.</h2>
            </div>
            <motion.div
              className="status-list"
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={flowGroup}
            >
              {statusItems.map((item, index) => (
                <motion.p key={item} variants={flowItem}><span className="status-dot mono">0{index + 1}</span>{item}</motion.p>
              ))}
            </motion.div>
            <p className="status-note">Public status is limited to supplier discussions, workflow structure, and technical conversations. No deployed-site, certification, manufacturing, revenue, or customer claims are implied.</p>
          </Reveal>
        </section>

        <section className="section cta shell" id="contact" aria-labelledby="contact-title">
          <Reveal className="cta-panel">
            <MotionVisual
              className="contact-motion"
              video={contactHandoff}
              poster={posterContact}
              title="Technical handoff endpoint visual"
            />
            <div className="contact-copy">
              <p className="section-kicker mono">Contact</p>
              <h2 id="contact-title">Start a technical discussion.</h2>
              <p>Send project context, PCS specs, supplier profile, or pilot requirements. We&apos;ll respond directly.</p>
              <p>This mailto handoff opens a prefilled email draft so early supplier and pilot discussions stay direct.</p>
              <div className="inquiry-prompts" aria-label="Useful inquiry prompts">
                {inquiryPrompts.map((prompt) => (
                  <span key={prompt}>{prompt}</span>
                ))}
              </div>
              <div className="handoff-flow mono" aria-label="Technical handoff flow">
                {handoffSteps.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
              <a className="direct-email mono" href="mailto:ronith@glassenergysystems.com">ronith@glassenergysystems.com</a>
            </div>
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={shouldReduceMotion ? false : { opacity: 0.92, y: 18, filter: "blur(8px)" }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ delay: 0.12, duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="contact-primary-fields">
                <label>
                  <span className="mono">Email</span>
                  <input name="email" type="email" autoComplete="email" placeholder="name@company.com" required />
                </label>
                <label>
                  <span className="mono">Company</span>
                  <input name="company" type="text" autoComplete="organization" placeholder="Company name" />
                </label>
                <label className="contact-role-field">
                  <span className="mono">Role / context</span>
                  <input name="role" type="text" placeholder="Supplier, EPC, developer, integrator, or partner" />
                </label>
              </div>
              <div className="contact-field-grid" aria-label="Technical inquiry context">
                <label>
                  <span className="mono">Project type</span>
                  <input name="projectType" type="text" placeholder="Supplier review, pilot, site, integration" />
                </label>
                <label>
                  <span className="mono">Power range</span>
                  <input name="powerRange" type="text" placeholder="100kW or site target" />
                </label>
                <label>
                  <span className="mono">Battery/DC range</span>
                  <input name="dcRange" type="text" placeholder="700-1000V DC or target range" />
                </label>
                <label>
                  <span className="mono">Grid connection</span>
                  <input name="gridConnection" type="text" placeholder="400/415V AC, 3-phase, 50Hz" />
                </label>
                <label>
                  <span className="mono">Timeline</span>
                  <input name="timeline" type="text" placeholder="Near-term, pilot, evaluation" />
                </label>
                <label>
                  <span className="mono">Country / market</span>
                  <input name="market" type="text" placeholder="India, export, supplier location" />
                </label>
              </div>
              <label>
                <span className="mono">Message</span>
                <textarea name="message" placeholder="Project type, power range, DC range, grid connection, company profile, timeline, or market" required />
              </label>
              <div className="contact-actions">
                <button className="button button-primary mono" type="submit">Open email draft</button>
                <p className="form-note">Your email app opens with these details. Nothing is stored on this static site.</p>
              </div>
            </motion.form>
          </Reveal>
        </section>
      </main>

      <footer className="footer shell">
        <div className="footer-brand">
          <img src={glassLogo} width="70" height="96" alt="Glass Energy Systems logo mark" />
          <span>Glass Energy Systems</span>
        </div>
        <p className="footer-summary">India C&I BESS context, 100kW PCS path first, direct supplier and deployment conversations.</p>
        <div className="footer-meta mono">
          <span>100kW PCS path</span>
          <span>India C&I BESS</span>
          <a href="mailto:ronith@glassenergysystems.com">ronith@glassenergysystems.com</a>
        </div>
        <div className="footer-links">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </div>
        <p className="footer-line">100kW PCS path for India&apos;s C&I BESS deployment layer.</p>
        <p className="footer-endpoint mono">Supplier docs -&gt; PCS validation -&gt; field-readiness handoff</p>
        <p className="copyright mono">© 2026 Glass Energy Systems. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
