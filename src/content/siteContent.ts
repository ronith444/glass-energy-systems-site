import type {
  ArchitectureNode,
  CTA,
  FooterGroup,
  ListItem,
  NavigationItem,
  SectionCopy,
  TechnicalLabel,
  TimelineStage,
} from "../types/content";

export const contactEmail = "ronith@glassenergysystems.com";

export const navigation: NavigationItem[] = [
  { label: "Approach", href: "#approach" },
  { label: "Technology", href: "#system-architecture" },
  { label: "Service & Support", href: "#service-reliability" },
  { label: "Development", href: "#development-pathway" },
  { label: "Company", href: "#partners" },
];

export const primaryCta: CTA = {
  label: "Discuss a pilot",
  href: `mailto:${contactEmail}?subject=Glass%20Energy%20Systems%20pilot%20discussion`,
};

export const hero = {
  id: "hero",
  eyebrow: "PCS FIRST · INDIA READY · SERVICE LED",
  headline: "PCS first energy storage infrastructure for India.",
  body: "Glass Energy Systems is building the deployment and reliability layer around power conversion. It brings together integration, testing, commissioning, interoperability and responsive field support for commercial and industrial energy storage.",
  primaryCta,
  secondaryCta: { label: "Explore our approach", href: "#approach" },
} satisfies SectionCopy & { primaryCta: CTA; secondaryCta: CTA };

export const technicalLabels: TechnicalLabel[] = [
  { label: "100kW bidirectional PCS initial focus" },
  { label: "700–1000V DC" },
  { label: "400/415V AC" },
  { label: "3 phase · 50Hz" },
  { label: "CAN · Modbus · Ethernet" },
];

export const whatWeBuild = {
  id: "approach",
  eyebrow: "WHAT WE ARE BUILDING",
  headline: "Power conversion is the starting point. Deployment reliability is the product.",
  body: "A PCS specification alone does not make a storage project deployable. Real execution also requires verified hardware, complete documentation, working communication protocols, disciplined commissioning and support when the system enters the field.",
} satisfies SectionCopy;

export const approachOutcomes: ListItem[] = [
  { title: "Grid ready by design" },
  { title: "Engineered for reliability" },
  { title: "Built for scale, supported for life" },
];

export const capabilities = [
  {
    title: "PCS integration",
    body: "Align PCS hardware, BMS, EMS and protection requirements around a repeatable 100kW path.",
    status: "Integrated",
  },
  {
    title: "FAT and documentation",
    body: "Structure FAT support, supplier documents, protocol maps and fault code review before site work.",
    status: "Verified",
  },
  {
    title: "Commissioning and interoperability",
    body: "Connect communication expectations across CAN, Modbus, Ethernet and India grid context.",
    status: "Connected",
  },
  {
    title: "Hypercare, diagnostics and spares",
    body: "Plan diagnostics, issue tracking, warranty paths and critical spares around early field operation.",
    status: "Supported",
  },
] satisfies Array<ListItem & { status: string }>;

export const serviceSpeed = {
  id: "service-speed",
  eyebrow: "SERVICE SPEED",
  headline: "Less time between a fault and a fix.",
  body: "Storage projects lose time when responsibility is fragmented, documentation is incomplete and every issue passes through multiple companies before action begins. Glass is being designed to shorten that chain.",
  highlight: "The equipment matters. How quickly the system returns to stable operation matters more.",
} satisfies SectionCopy & { highlight: string };

export const servicePrinciples: ListItem[] = [
  { title: "Clear fault ownership" },
  { title: "Fast technical triage" },
  { title: "Planned critical spares" },
  { title: "60–90 day hypercare" },
];

export const whyPcs = {
  id: "why-pcs",
  eyebrow: "WHY PCS FIRST",
  headline: "The highest leverage control point in the storage system.",
  body: "The PCS sits between the battery, the electrical load and the grid. It determines how energy is converted, how the system responds and how effectively the surrounding components operate together.",
} satisfies SectionCopy;

export const pcsReasons: ListItem[] = [
  { title: "Central to system performance" },
  { title: "Focused route to market" },
  { title: "Immediate deployment value" },
  { title: "Foundation for future intelligence" },
];

export const deploymentModel = {
  id: "deployment-model",
  eyebrow: "THE GLASS DEPLOYMENT MODEL",
  headline: "Designed around the work that happens before and after delivery.",
  closingLine: "Qualify once. Document properly. Commission with context. Support without delay.",
} satisfies SectionCopy & { closingLine: string };

export const deploymentStages: TimelineStage[] = [
  { title: "Qualify" },
  { title: "Configure" },
  { title: "Verify" },
  { title: "Integrate" },
  { title: "Commission" },
  { title: "Stabilize" },
];

export const systemArchitecture = {
  id: "system-architecture",
  eyebrow: "SYSTEM ARCHITECTURE",
  headline: "One accountable layer across power, controls and field support.",
} satisfies SectionCopy;

export const architectureNodes: ArchitectureNode[] = [
  { title: "Power conversion", kind: "central" },
  { title: "Battery and BMS interface", kind: "support" },
  { title: "EMS and site controls", kind: "support" },
  { title: "Grid interface and protection", kind: "support" },
  { title: "Diagnostics and support record", kind: "support" },
  { title: "Commercial and industrial application", kind: "support" },
];

export const initialPlatform = {
  id: "initial-platform",
  eyebrow: "INITIAL PLATFORM",
  headline: "Starting narrow. Building correctly.",
  disclaimer: "Specifications represent the initial target architecture and remain subject to engineering and pilot validation.",
} satisfies SectionCopy & { disclaimer: string };

export const initialSpecs: ListItem[] = [
  { title: "100kW initial focus" },
  { title: "700–1000V DC target" },
  { title: "400/415V AC" },
  { title: "3 phase · 50Hz" },
  { title: "CAN · Modbus · Ethernet" },
  { title: "C&I storage, backup and renewable integration" },
];

export const builtForIndia = {
  id: "built-for-india",
  eyebrow: "BUILT FOR INDIA",
  headline: "Global power technology. India owned deployment capability.",
} satisfies SectionCopy;

export const indiaPoints: ListItem[] = [
  { title: "Indian electrical conditions" },
  { title: "Deployment ready documentation" },
  { title: "Local integration knowledge" },
  { title: "Service continuity" },
];

export const serviceReliability = {
  id: "service-reliability",
  eyebrow: "AFTER COMMISSIONING",
  headline: "Delivery is an event. Reliability is an operating system.",
  closingLine: "The long term advantage is not simply supplying a PCS. It is learning from every deployment and resolving the next issue faster.",
} satisfies SectionCopy & { closingLine: string };

export const serviceModules: ListItem[] = [
  { title: "Commissioning records" },
  { title: "Remote fault triage" },
  { title: "Spares strategy" },
  { title: "Escalation management" },
  { title: "Preventive diagnostics" },
];

export const developmentPathway = {
  id: "development-pathway",
  eyebrow: "DEVELOPMENT PATHWAY",
  headline: "Localize the capabilities that create value, in the right order.",
  disclaimer: "This is a staged development direction, not a claim that every capability is currently operational.",
} satisfies SectionCopy & { disclaimer: string };

export const developmentStages: TimelineStage[] = [
  { title: "Pilot proven technology" },
  { title: "Own deployment reliability" },
  { title: "Expand local assembly" },
  { title: "Deepen controls capability" },
  { title: "Build the intelligence layer" },
];

export const partnershipCta = {
  id: "partners",
  eyebrow: "BUILD WITH GLASS",
  headline: "Build a pilot that can be supported, not just delivered.",
  body: "We are engaging with C&I storage integrators, battery partners, PCS and component suppliers, pilot customers and technical service partners who want to build dependable energy storage capability for India.",
  primaryCta,
  secondaryCta: {
    label: "Become a technology partner",
    href: `mailto:${contactEmail}?subject=Glass%20Energy%20Systems%20technology%20partner%20discussion`,
  },
} satisfies SectionCopy & { primaryCta: CTA; secondaryCta: CTA };

export const footer = {
  brandStatement: "Building the deployment, reliability and intelligence layer for India’s energy storage infrastructure.",
  finalLine: "Engineered for deployment. Supported for operation. Built to improve with every system.",
  email: contactEmail,
};

export const footerGroups: FooterGroup[] = [
  {
    title: "Technology",
    links: [
      { label: "System architecture", href: "#system-architecture" },
      { label: "Initial platform", href: "#initial-platform" },
    ],
  },
  {
    title: "Approach",
    links: [
      { label: "What we are building", href: "#approach" },
      { label: "Why PCS first", href: "#why-pcs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Built for India", href: "#built-for-india" },
      { label: "Development pathway", href: "#development-pathway" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Service and reliability", href: "#service-reliability" },
      { label: "Discuss a pilot", href: primaryCta.href },
    ],
  },
];

export const claimDisclaimers = [
  "Do not claim deployed Glass PCS units.",
  "Do not claim proven uptime.",
  "Do not claim current 24/7 support.",
  "Do not claim proprietary production hardware.",
  "Do not claim completed local manufacturing capability.",
  "Do not claim current AI diagnostics.",
  "Do not claim existing certifications unless verified.",
  "Do not claim guaranteed response times.",
];
