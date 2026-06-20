import type { InquiryErrors, InquiryFormConfig, InquiryValues } from "./formTypes";

export interface ValidationResult {
  errors: InquiryErrors;
  values: InquiryValues;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-()\s]+$/;

function normalizeUrl(value: string): string {
  if (!value) {
    return value;
  }

  if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(value)) {
    return value;
  }

  return `https://${value}`;
}

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateInquiryValues(
  config: InquiryFormConfig,
  inputValues: InquiryValues,
): ValidationResult {
  const errors: InquiryErrors = {};
  const values: InquiryValues = {};

  for (const field of config.fields) {
    const rawValue = inputValues[field.name] ?? "";
    let value = rawValue.trim();
    values[field.name] = value;

    if (field.required && !value) {
      errors[field.name] = "This field is required.";
      continue;
    }

    if (!value) {
      continue;
    }

    if (field.kind === "url") {
      value = normalizeUrl(value);
      values[field.name] = value;
    }

    const maxLength = field.maxLength ?? 150;
    if (value.length > maxLength) {
      errors[field.name] = `Keep this under ${maxLength} characters.`;
      continue;
    }

    if (field.minLength && value.length < field.minLength) {
      errors[field.name] = `Enter at least ${field.minLength} characters.`;
      continue;
    }

    if (field.kind === "email") {
      if (value.length > 254 || !emailPattern.test(value)) {
        errors[field.name] = "Enter a valid work email.";
      }
    }

    if (field.kind === "tel" && !phonePattern.test(value)) {
      errors[field.name] = "Use only digits, spaces, +, -, or parentheses.";
    }

    if (field.kind === "url" && !isHttpUrl(value)) {
      errors[field.name] = "Enter a valid HTTP or HTTPS URL.";
    }
  }

  return { errors, values };
}
