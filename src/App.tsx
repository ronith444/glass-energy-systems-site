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

export default function App() {
  return (
    <>
      <SiteHeader />
      <main className="site-story">
        <div className="surface-chapter surface-opening-dark">
          <HeroSection />
          <WhatWeBuildSection />
          <ServiceSpeedSection />
        </div>
        <div className="surface-bridge surface-bridge-a surface-bridge-dark-cream">
          <ServiceSpeedConclusion />
        </div>
        <div className="surface-chapter surface-editorial-cream">
          <WhyPCSSection />
          <DeploymentModelSection />
        </div>
        <div className="surface-bridge surface-bridge-b surface-bridge-cream-sage" aria-hidden="true" />
        <div className="surface-chapter surface-technical-sage">
          <SystemArchitectureSection />
          <InitialPlatformSection />
          <BuiltForIndiaSection />
        </div>
        <div className="surface-bridge surface-bridge-c surface-bridge-sage-warm" aria-hidden="true" />
        <div className="surface-chapter surface-editorial-warm">
          <ServiceReliabilitySection />
          <DevelopmentPathwaySection />
        </div>
        <div className="surface-bridge surface-bridge-d surface-bridge-warm-dark" aria-hidden="true" />
        <div className="surface-chapter surface-closing-dark">
          <PartnershipCTASection />
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
