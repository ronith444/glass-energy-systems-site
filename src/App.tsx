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
        <div className="scene scene-opening-service">
          <HeroSection />
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
          <PartnershipCTASection />
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
