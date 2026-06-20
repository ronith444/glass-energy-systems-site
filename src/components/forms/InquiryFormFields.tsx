import type { InquiryErrors, InquiryFormConfig, InquiryValues } from "./formTypes";

interface InquiryFormFieldsProps {
  config: InquiryFormConfig;
  errors: InquiryErrors;
  values: InquiryValues;
  disabled: boolean;
  onChange: (name: string, value: string) => void;
  registerField: (
    name: string,
    element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null,
  ) => void;
}

export function InquiryFormFields({
  config,
  disabled,
  errors,
  onChange,
  registerField,
  values,
}: InquiryFormFieldsProps) {
  return (
    <div className="inquiry-form-grid">
      {config.fields.map((field) => {
        const fieldId = `inquiry-${config.type}-${field.name}`;
        const errorId = `${fieldId}-error`;
        const counterId = `${fieldId}-counter`;
        const hasError = Boolean(errors[field.name]);
        const describedBy = [
          hasError ? errorId : null,
          field.kind === "textarea" && field.maxLength ? counterId : null,
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div
            className="inquiry-field-group"
            data-full-width={field.fullWidth || field.kind === "textarea" ? "true" : undefined}
            key={field.name}
          >
            <label className="inquiry-label" htmlFor={fieldId}>
              <span>{field.label}</span>
              {field.required ? <span aria-hidden="true">Required</span> : null}
            </label>
            {field.kind === "select" ? (
              <select
                id={fieldId}
                ref={(element) => registerField(field.name, element)}
                className="inquiry-field"
                name={field.name}
                value={values[field.name] ?? ""}
                disabled={disabled}
                aria-invalid={hasError}
                aria-describedby={describedBy || undefined}
                required={field.required}
                onChange={(event) => onChange(field.name, event.target.value)}
              >
                <option value="">Select one</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.kind === "textarea" ? (
              <textarea
                id={fieldId}
                ref={(element) => registerField(field.name, element)}
                className="inquiry-field inquiry-textarea"
                name={field.name}
                value={values[field.name] ?? ""}
                disabled={disabled}
                maxLength={field.maxLength}
                rows={field.textareaRows ?? 5}
                placeholder={field.placeholder}
                aria-invalid={hasError}
                aria-describedby={describedBy || undefined}
                required={field.required}
                onChange={(event) => onChange(field.name, event.target.value)}
              />
            ) : (
              <input
                id={fieldId}
                ref={(element) => registerField(field.name, element)}
                className="inquiry-field"
                name={field.name}
                type={field.kind}
                value={values[field.name] ?? ""}
                disabled={disabled}
                maxLength={field.maxLength}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                aria-invalid={hasError}
                aria-describedby={describedBy || undefined}
                required={field.required}
                onChange={(event) => onChange(field.name, event.target.value)}
              />
            )}
            {hasError ? (
              <p className="inquiry-field-error" id={errorId}>
                {errors[field.name]}
              </p>
            ) : null}
            {field.kind === "textarea" && field.maxLength ? (
              <p className="inquiry-character-count" id={counterId}>
                {(values[field.name] ?? "").length}/{field.maxLength}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
