import { InquiryFormFields } from "./InquiryFormFields";
import type { InquiryErrors, InquiryFormConfig, InquiryValues } from "./formTypes";

interface DiscussionFormProps {
  config: InquiryFormConfig;
  errors: InquiryErrors;
  values: InquiryValues;
  disabled: boolean;
  onChange: (name: string, value: string) => void;
  registerField: (name: string, element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null) => void;
}

export function DiscussionForm(props: DiscussionFormProps) {
  return <InquiryFormFields {...props} />;
}
