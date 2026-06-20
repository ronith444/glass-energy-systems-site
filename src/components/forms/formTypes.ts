export type InquiryType = "discussion" | "technology-partner";

export type FieldKind = "text" | "email" | "tel" | "url" | "select" | "textarea";

export interface InquiryField {
  name: string;
  label: string;
  kind: FieldKind;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  maxLength?: number;
  minLength?: number;
  autoComplete?: string;
  textareaRows?: number;
  fullWidth?: boolean;
}

export interface InquiryFormConfig {
  type: InquiryType;
  eyebrow: string;
  title: string;
  intro: string;
  subject: string;
  formTypeValue: string;
  fields: InquiryField[];
}

export type InquiryValues = Record<string, string>;
export type InquiryErrors = Record<string, string>;

const discussionFields: InquiryField[] = [
  {
    name: "fullName",
    label: "Full name",
    kind: "text",
    required: true,
    minLength: 2,
    maxLength: 100,
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Work email",
    kind: "email",
    required: true,
    maxLength: 254,
    autoComplete: "email",
  },
  {
    name: "company",
    label: "Company or organization",
    kind: "text",
    required: true,
    maxLength: 150,
    autoComplete: "organization",
  },
  {
    name: "role",
    label: "Role or title",
    kind: "text",
    maxLength: 120,
    autoComplete: "organization-title",
  },
  {
    name: "phone",
    label: "Phone number",
    kind: "tel",
    maxLength: 30,
    autoComplete: "tel",
  },
  {
    name: "projectLocation",
    label: "Project location",
    kind: "text",
    required: true,
    maxLength: 150,
    autoComplete: "address-level2",
  },
  {
    name: "areaOfInterest",
    label: "Area of interest",
    kind: "select",
    required: true,
    options: [
      "PCS integration",
      "C&I energy storage",
      "Pilot deployment",
      "Commissioning and service",
      "General discussion",
    ],
    fullWidth: true,
  },
  {
    name: "projectStage",
    label: "Project stage",
    kind: "select",
    required: true,
    options: [
      "Early exploration",
      "Technical planning",
      "Procurement",
      "Deployment",
      "Existing system support",
    ],
  },
  {
    name: "expectedTimeline",
    label: "Expected timeline",
    kind: "select",
    required: true,
    options: [
      "Immediately",
      "Within 3 months",
      "3-6 months",
      "6-12 months",
      "More than 12 months",
      "Not decided",
    ],
  },
  {
    name: "approximateProjectSize",
    label: "Approximate project size",
    kind: "text",
    maxLength: 150,
    placeholder: "Example: 100 kW / 200 kWh",
    fullWidth: true,
  },
  {
    name: "projectSummary",
    label: "Project summary",
    kind: "textarea",
    required: true,
    maxLength: 2000,
    placeholder:
      "Briefly describe the project, site, current need, and what you would like to discuss.",
    textareaRows: 6,
    fullWidth: true,
  },
];

const partnerFields: InquiryField[] = [
  {
    name: "fullName",
    label: "Full name",
    kind: "text",
    required: true,
    minLength: 2,
    maxLength: 100,
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Work email",
    kind: "email",
    required: true,
    maxLength: 254,
    autoComplete: "email",
  },
  {
    name: "company",
    label: "Company",
    kind: "text",
    required: true,
    maxLength: 150,
    autoComplete: "organization",
  },
  {
    name: "role",
    label: "Role or title",
    kind: "text",
    required: true,
    maxLength: 120,
    autoComplete: "organization-title",
  },
  {
    name: "phone",
    label: "Phone number",
    kind: "tel",
    maxLength: 30,
    autoComplete: "tel",
  },
  {
    name: "companyWebsite",
    label: "Company website",
    kind: "url",
    required: true,
    maxLength: 150,
    autoComplete: "url",
    placeholder: "https://example.com",
    fullWidth: true,
  },
  {
    name: "countryOrRegion",
    label: "Country or region",
    kind: "text",
    required: true,
    maxLength: 150,
    autoComplete: "country-name",
  },
  {
    name: "partnershipType",
    label: "Partnership type",
    kind: "select",
    required: true,
    options: [
      "PCS or power-electronics supplier",
      "Battery or BMS supplier",
      "EMS or controls provider",
      "EPC or system integrator",
      "Transformer or switchgear supplier",
      "Testing or certification partner",
      "Service or spare-parts partner",
      "Strategic or investment partner",
      "Other",
    ],
    fullWidth: true,
  },
  {
    name: "currentMarketPresence",
    label: "Current market presence",
    kind: "textarea",
    maxLength: 1000,
    textareaRows: 4,
    fullWidth: true,
  },
  {
    name: "capabilityDeckUrl",
    label: "Capability deck or company profile URL",
    kind: "url",
    maxLength: 150,
    placeholder: "https://example.com/company-profile",
    fullWidth: true,
  },
  {
    name: "relevantCapabilities",
    label: "Relevant capabilities",
    kind: "textarea",
    required: true,
    maxLength: 2000,
    placeholder:
      "Describe your products, technical strengths, certifications, manufacturing capabilities, or service coverage.",
    textareaRows: 6,
    fullWidth: true,
  },
  {
    name: "proposedCollaboration",
    label: "Proposed collaboration",
    kind: "textarea",
    required: true,
    maxLength: 2000,
    placeholder: "Explain how you would like to work with Glass Energy Systems.",
    textareaRows: 6,
    fullWidth: true,
  },
];

export const inquiryFormConfigs: Record<InquiryType, InquiryFormConfig> = {
  discussion: {
    type: "discussion",
    eyebrow: "Project inquiry",
    title: "Start a Discussion",
    intro: "Tell us briefly about your project, timeline, and current requirements.",
    subject: "Start a Discussion — Glass Energy Systems Website",
    formTypeValue: "Start a Discussion",
    fields: discussionFields,
  },
  "technology-partner": {
    type: "technology-partner",
    eyebrow: "Partner inquiry",
    title: "Become a Technology Partner",
    intro: "Tell us about your capabilities and the type of collaboration you are exploring.",
    subject: "Technology Partner Inquiry — Glass Energy Systems Website",
    formTypeValue: "Technology Partner Inquiry",
    fields: partnerFields,
  },
};

export function createInitialValues(config: InquiryFormConfig): InquiryValues {
  return Object.fromEntries(config.fields.map((field) => [field.name, ""]));
}
