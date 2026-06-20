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
  { label: "Operations", href: "#development-pathway" },
  { label: "Company", href: "#partners" },
];

export const primaryCta: CTA = {
  label: "Discuss a project",
  href: `mailto:${contactEmail}?subject=Glass%20Energy%20Systems%20project%20discussion`,
};

export const hero = {
  id: "hero",
  eyebrow: "PCS FIRST · INDIA READY · SERVICE LED",
  headline: "PCS infrastructure for India’s C&I storage.",
  body: "Glass Energy Systems handles PCS integration, documentation, commissioning and support for dependable C&I battery storage deployment.",
  primaryCta,
  secondaryCta: { label: "Explore our approach", href: "#approach" },
} satisfies SectionCopy & { primaryCta: CTA; secondaryCta: CTA };

export const technicalLabels: TechnicalLabel[] = [
  { label: "100kW bidirectional PCS path" },
  { label: "700–1000V DC" },
  { label: "400/415V AC" },
  { label: "3 phase · 50Hz" },
  { label: "CAN · Modbus · Ethernet" },
];

export const whatWeBuild = {
  id: "approach",
  eyebrow: "WHAT WE ARE BUILDING",
  headline: "PCS integration, ready for the field.",
  body: "Glass turns PCS hardware, supplier documents, protocols and site requirements into a deployable operating package.",
} satisfies SectionCopy;

export const approachOutcomes: ListItem[] = [
  { title: "Grid ready by design" },
  { title: "Engineered for reliability" },
  { title: "Built for scale, supported for life" },
];

export const capabilities = [
  {
    title: "PCS integration",
    body: "Align PCS hardware, BMS, EMS and protection requirements.",
    status: "Integrated",
  },
  {
    title: "FAT and documentation",
    body: "Organize supplier documents, protocol maps and fault code review.",
    status: "Verified",
  },
  {
    title: "Commissioning and interoperability",
    body: "Connect CAN, Modbus, Ethernet and India grid requirements.",
    status: "Connected",
  },
  {
    title: "Hypercare, diagnostics and spares",
    body: "Coordinate diagnostics, issue tracking, warranty paths and spares.",
    status: "Supported",
  },
] satisfies Array<ListItem & { status: string }>;

export const serviceSpeed = {
  id: "service-speed",
  eyebrow: "SERVICE SPEED",
  headline: "Less time between a fault and a fix.",
  body: "Storage projects lose time when ownership is unclear. Glass keeps documentation, triage, spares and support connected.",
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
  headline: "The control point of the storage system.",
  body: "The PCS connects battery, load and grid. It determines conversion quality, response behavior and system coordination.",
} satisfies SectionCopy;

export const pcsReasons: ListItem[] = [
  { title: "Central to system performance" },
  { title: "Focused route to market" },
  { title: "Immediate deployment value" },
  { title: "Foundation for controls and diagnostics" },
];

export const deploymentModel = {
  id: "deployment-model",
  eyebrow: "THE GLASS DEPLOYMENT MODEL",
  headline: "Before delivery. After commissioning.",
  closingLine: "Qualify. Configure. Verify. Integrate. Commission. Support.",
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
  headline: "One layer across power, controls and support.",
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
  eyebrow: "PCS PLATFORM",
  headline: "A standardized PCS operating layer.",
  disclaimer: "Project specifications are confirmed through engineering review and supplier documentation.",
} satisfies SectionCopy & { disclaimer: string };

export const initialSpecs: ListItem[] = [
  { title: "100kW PCS path" },
  { title: "700–1000V DC" },
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
  headline: "Reliability is an operating system.",
  closingLine: "Commissioning records, diagnostics, spares and escalation paths keep every issue easier to resolve.",
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
  eyebrow: "OPERATING CAPABILITY",
  headline: "Capability across the system lifecycle.",
  disclaimer: "These operating disciplines support supplier coordination, commissioning and field operation.",
} satisfies SectionCopy & { disclaimer: string };

export const developmentStages: TimelineStage[] = [
  { title: "Qualified hardware" },
  { title: "Deployment ownership" },
  { title: "Documentation control" },
  { title: "Controls integration" },
  { title: "Service intelligence" },
];

export const partnershipCta = {
  id: "partners",
  eyebrow: "BUILD WITH GLASS",
  headline: "Build storage projects that stay supported.",
  body: "Glass works with integrators, battery partners, PCS suppliers, C&I customers and service partners across India’s storage market.",
  primaryCta,
  secondaryCta: {
    label: "Become a technology partner",
    href: `mailto:${contactEmail}?subject=Glass%20Energy%20Systems%20technology%20partner%20discussion`,
  },
} satisfies SectionCopy & { primaryCta: CTA; secondaryCta: CTA };

export const footer = {
  brandStatement: "Deployment, reliability and intelligence for India’s energy storage infrastructure.",
  finalLine: "Engineered for deployment. Supported for operation. Built to improve with every system.",
  email: contactEmail,
};

export const footerGroups: FooterGroup[] = [
  {
    title: "Technology",
    links: [
      { label: "System architecture", href: "#system-architecture" },
      { label: "PCS platform", href: "#initial-platform" },
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
      { label: "Operating capability", href: "#development-pathway" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Service and reliability", href: "#service-reliability" },
      { label: "Discuss a project", href: primaryCta.href },
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
