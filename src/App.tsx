import { useCallback, useRef, useState } from "react";
import { SiteHeader } from "./components/layout/SiteHeader";
import { SiteFooter } from "./components/layout/SiteFooter";
import { HeroSection } from "./components/sections/HeroSection";
import { WhatWeBuildSection } from "./components/sections/WhatWeBuildSection";
import { ServiceSpeedConclusion, ServiceSpeedSection } from "./components/sections/ServiceSpeedSection";
import { WhyPCSSection } from "./components/sections/WhyPCSSection";
import { DeploymentModelSection } from "./components/sections/DeploymentModelSection";
import { SystemArchitectureSection } from "./components/sections/SystemArchitectureSection";
import { InitialPlatformSection } from "./components/sections/InitialPlatformSection";
import { BuiltForIndiaSection } from "./components/sections/BuiltForIndiaSection";
import { ServiceReliabilitySection } from "./components/sections/ServiceReliabilitySection";
import { DevelopmentPathwaySection } from "./components/sections/DevelopmentPathwaySection";
import { PartnershipCTASection } from "./components/sections/PartnershipCTASection";
import { InquiryModal } from "./components/forms/InquiryModal";
import type { InquiryType } from "./components/forms/formTypes";
import { useSiteMotion } from "./motion/useSiteMotion";

export default function App() {
  const [inquiryType, setInquiryType] = useState<InquiryType | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  useSiteMotion();

  const openInquiry = useCallback((type: InquiryType, opener: HTMLElement) => {
    openerRef.current = opener;
    setInquiryType(type);
  }, []);

  const closeInquiry = useCallback(() => {
    setInquiryType(null);
  }, []);

  return (
    <>
      <SiteHeader onOpenDiscussion={(opener) => openInquiry("discussion", opener)} />
      <main className="site-story">
        <div className="scene scene-opening-service">
          <HeroSection onOpenDiscussion={(opener) => openInquiry("discussion", opener)} />
          <WhatWeBuildSection />
          <ServiceSpeedSection />
          <ServiceSpeedConclusion />
        </div>
        <div className="scene scene-editorial-cream">
          <WhyPCSSection />
          <DeploymentModelSection />
        </div>
        <div className="scene scene-deployment-technical">
          <SystemArchitectureSection />
          <InitialPlatformSection />
          <BuiltForIndiaSection />
        </div>
        <div className="scene scene-reliability-development">
          <ServiceReliabilitySection />
        </div>
        <div className="scene scene-development-closing">
          <DevelopmentPathwaySection />
          <PartnershipCTASection
            onOpenDiscussion={(opener) => openInquiry("discussion", opener)}
            onOpenTechnologyPartner={(opener) => openInquiry("technology-partner", opener)}
          />
          <SiteFooter />
        </div>
      </main>
      <InquiryModal inquiryType={inquiryType} openerRef={openerRef} onClose={closeInquiry} />
    </>
  );
}
