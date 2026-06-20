import { InquiryFormFields } from "./InquiryFormFields";
import type { InquiryErrors, InquiryFormConfig, InquiryValues } from "./formTypes";

interface TechnologyPartnerFormProps {
  config: InquiryFormConfig;
  errors: InquiryErrors;
  values: InquiryValues;
  disabled: boolean;
  onChange: (name: string, value: string) => void;
  registerField: (name: string, element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null) => void;
}

export function TechnologyPartnerForm(props: TechnologyPartnerFormProps) {
  return <InquiryFormFields {...props} />;
}
