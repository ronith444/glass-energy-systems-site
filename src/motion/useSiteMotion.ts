import { useLayoutEffect } from "react";

const DESKTOP_OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.18,
  rootMargin: "0px 0px -12% 0px",
};

const MOBILE_OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -8% 0px",
};

export function useSiteMotion() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-section]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const revealAll = () => {
      sections.forEach((section) => {
        section.dataset.motionState = "visible";
      });
    };

    const revealThrough = (target: HTMLElement) => {
      for (const section of sections) {
        section.dataset.motionState = "visible";
        if (section === target) {
          break;
        }
      }
    };

    const revealThroughViewport = () => {
      let latestVisibleSection: HTMLElement | null = null;

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
          latestVisibleSection = section;
        }
      });

      if (latestVisibleSection) {
        revealThrough(latestVisibleSection);
      }
    };

    if (reducedMotion.matches) {
      root.classList.remove("motion-enabled");
      root.classList.add("motion-reduced");
      revealAll();
      return undefined;
    }

    root.classList.remove("motion-reduced");
    root.classList.add("motion-enabled");

    sections.forEach((section) => {
      if (!section.dataset.motionState) {
        section.dataset.motionState = "idle";
      }
    });

    if (!("IntersectionObserver" in window)) {
      revealAll();
      return undefined;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const viewportTrigger = isMobile ? 0.92 : 0.88;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && entry.boundingClientRect.bottom > 0) {
          return;
        }

        const section = entry.target as HTMLElement;
        revealThrough(section);
        revealThroughViewport();
        observer.unobserve(section);
      });
    }, isMobile ? MOBILE_OBSERVER_OPTIONS : DESKTOP_OBSERVER_OPTIONS);

    sections.forEach((section) => observer.observe(section));

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * viewportTrigger && rect.bottom > 0) {
        revealThrough(section);
        observer.unobserve(section);
      }
    });
    revealThroughViewport();

    const reducedMotionHandler = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        return;
      }

      root.classList.remove("motion-enabled");
      root.classList.add("motion-reduced");
      revealAll();
      observer.disconnect();
    };

    reducedMotion.addEventListener("change", reducedMotionHandler);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", reducedMotionHandler);
    };
  }, []);
}
