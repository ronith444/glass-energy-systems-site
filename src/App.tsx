import { SiteHeader } from "./components/layout/SiteHeader";
import { SiteFooter } from "./components/layout/SiteFooter";
import { HeroSection } from "./components/sections/HeroSection";
import { WhatWeBuildSection } from "./components/sections/WhatWeBuildSection";
import { ServiceSpeedSection } from "./components/sections/ServiceSpeedSection";
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
      <main>
        <div className="chapter chapter-dark">
          <HeroSection />
          <WhatWeBuildSection />
          <ServiceSpeedSection />
        </div>
        <div className="chapter chapter-light">
          <WhyPCSSection />
          <DeploymentModelSection />
        </div>
        <div className="chapter chapter-technical">
          <SystemArchitectureSection />
          <InitialPlatformSection />
          <BuiltForIndiaSection />
        </div>
        <div className="chapter chapter-editorial">
          <ServiceReliabilitySection />
          <DevelopmentPathwaySection />
        </div>
        <div className="chapter chapter-closing">
          <PartnershipCTASection />
        </div>
      </main>
      <div className="chapter chapter-closing chapter-footer">
        <SiteFooter />
      </div>
    </>
  );
}
