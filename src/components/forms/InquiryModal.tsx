import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent, type MouseEvent, type MutableRefObject } from "react";
import { DiscussionForm } from "./DiscussionForm";
import { TechnologyPartnerForm } from "./TechnologyPartnerForm";
import {
  createInitialValues,
  inquiryFormConfigs,
  type InquiryErrors,
  type InquiryType,
  type InquiryValues,
} from "./formTypes";
import { validateInquiryValues } from "./formValidation";

type SubmitState = "idle" | "submitting" | "success" | "error";

interface InquiryModalProps {
  inquiryType: InquiryType | null;
  openerRef: MutableRefObject<HTMLElement | null>;
  onClose: () => void;
}

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

function createDrafts(): Record<InquiryType, InquiryValues> {
  return {
    discussion: createInitialValues(inquiryFormConfigs.discussion),
    "technology-partner": createInitialValues(inquiryFormConfigs["technology-partner"]),
  };
}

function getScrollbarWidth(): number {
  return window.innerWidth - document.documentElement.clientWidth;
}

export function InquiryModal({ inquiryType, onClose, openerRef }: InquiryModalProps) {
  const [drafts, setDrafts] = useState<Record<InquiryType, InquiryValues>>(createDrafts);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [botcheck, setBotcheck] = useState("");

  const panelRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const errorRef = useRef<HTMLParagraphElement | null>(null);
  const fieldRefs = useRef<
    Record<string, HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>
  >({});
  const scrollPositionRef = useRef(0);
  const previousBodyStylesRef = useRef<Partial<CSSStyleDeclaration> | null>(null);
  const mountedRef = useRef(true);
  const requestIdRef = useRef(0);

  const config = inquiryType ? inquiryFormConfigs[inquiryType] : null;
  const values = inquiryType && config ? drafts[inquiryType] : {};
  const isSubmitting = submitState === "submitting";
  const isSuccess = submitState === "success";

  const modalTitleId = useMemo(
    () => (config ? `inquiry-${config.type}-title` : "inquiry-modal-title"),
    [config],
  );
  const modalIntroId = useMemo(
    () => (config ? `inquiry-${config.type}-intro` : "inquiry-modal-intro"),
    [config],
  );

  const closeModal = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!inquiryType) {
      return;
    }

    setErrors({});
    setErrorMessage("");
    setSubmitState("idle");
    setBotcheck("");

    const scrollbarWidth = getScrollbarWidth();
    scrollPositionRef.current = window.scrollY;
    previousBodyStylesRef.current = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const focusFrame = window.requestAnimationFrame(() => {
      titleRef.current?.focus({ preventScroll: true });
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);

      const previousStyles = previousBodyStylesRef.current;
      if (previousStyles) {
        document.body.style.position = previousStyles.position ?? "";
        document.body.style.top = previousStyles.top ?? "";
        document.body.style.left = previousStyles.left ?? "";
        document.body.style.right = previousStyles.right ?? "";
        document.body.style.width = previousStyles.width ?? "";
        document.body.style.overflow = previousStyles.overflow ?? "";
        document.body.style.paddingRight = previousStyles.paddingRight ?? "";
      }

      window.scrollTo(0, scrollPositionRef.current);
      openerRef.current?.focus({ preventScroll: true });
    };
  }, [inquiryType, openerRef]);

  useEffect(() => {
    if (!inquiryType) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);

      if (focusable.length === 0) {
        event.preventDefault();
        titleRef.current?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal, inquiryType]);

  useEffect(() => {
    if (submitState === "error") {
      errorRef.current?.focus({ preventScroll: false });
    }
  }, [submitState]);

  const registerField = useCallback(
    (
      name: string,
      element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null,
    ) => {
      fieldRefs.current[name] = element;
    },
    [],
  );

  const updateValue = useCallback(
    (name: string, value: string) => {
      if (!inquiryType) {
        return;
      }

      setDrafts((current) => ({
        ...current,
        [inquiryType]: {
          ...current[inquiryType],
          [name]: value,
        },
      }));

      setErrors((current) => {
        if (!current[name]) {
          return current;
        }

        const next = { ...current };
        delete next[name];
        return next;
      });

      if (submitState === "error") {
        setSubmitState("idle");
        setErrorMessage("");
      }
    },
    [inquiryType, submitState],
  );

  const handleBackdropMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!config || !inquiryType || isSubmitting) {
      return;
    }

    const validation = validateInquiryValues(config, drafts[inquiryType]);
    setDrafts((current) => ({
      ...current,
      [inquiryType]: validation.values,
    }));
    setErrors(validation.errors);

    const firstErrorName = Object.keys(validation.errors)[0];
    if (firstErrorName) {
      fieldRefs.current[firstErrorName]?.focus({ preventScroll: false });
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("Missing VITE_WEB3FORMS_ACCESS_KEY for Web3Forms submission.");
      setErrorMessage(
        "We couldn’t send your inquiry. Please try again or email ronith@glassenergysystems.com.",
      );
      setSubmitState("error");
      return;
    }

    const currentRequestId = requestIdRef.current + 1;
    requestIdRef.current = currentRequestId;
    setSubmitState("submitting");
    setErrorMessage("");

    const payload = {
      access_key: accessKey,
      subject: config.subject,
      from_name: "Glass Energy Systems Website",
      form_type: config.formTypeValue,
      email: validation.values.email,
      botcheck,
      ...validation.values,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean } | null;

      if (!response.ok || !result?.success) {
        throw new Error("Web3Forms rejected the submission.");
      }

      if (!mountedRef.current || requestIdRef.current !== currentRequestId) {
        return;
      }

      setDrafts((current) => ({
        ...current,
        [inquiryType]: createInitialValues(config),
      }));
      setSubmitState("success");
      setErrors({});
      setBotcheck("");
    } catch {
      if (!mountedRef.current || requestIdRef.current !== currentRequestId) {
        return;
      }

      setErrorMessage(
        "We couldn’t send your inquiry. Please try again or email ronith@glassenergysystems.com.",
      );
      setSubmitState("error");
    }
  };

  if (!config || !inquiryType) {
    return null;
  }

  return (
    <div
      className="inquiry-modal"
      data-state={submitState}
      role="presentation"
      onMouseDown={handleBackdropMouseDown}
      onTouchMove={(event) => {
        if (event.target === event.currentTarget) {
          event.preventDefault();
        }
      }}
    >
      <div
        ref={panelRef}
        className="inquiry-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={modalTitleId}
        aria-describedby={modalIntroId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="inquiry-modal__header">
          <div>
            <p className="inquiry-modal__eyebrow">{config.eyebrow}</p>
            <h2 id={modalTitleId} ref={titleRef} tabIndex={-1}>
              {config.title}
            </h2>
            <p id={modalIntroId}>{config.intro}</p>
          </div>
          <button
            className="inquiry-modal__close"
            type="button"
            aria-label="Close inquiry form"
            onClick={closeModal}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="inquiry-modal__body" aria-live="polite">
          {isSuccess ? (
            <div className="inquiry-success" data-visible="true">
              <span className="inquiry-success__mark" aria-hidden="true">
                <svg viewBox="0 0 28 28" focusable="false">
                  <circle cx="14" cy="14" r="12" />
                  <path d="m8.6 14.3 3.4 3.3 7.5-8" />
                </svg>
              </span>
              <div>
                <h3>Inquiry sent</h3>
                <p>Thanks. Your inquiry has been sent. We’ll get back to you shortly.</p>
              </div>
              <button className="button button-primary inquiry-success__button" type="button" onClick={closeModal}>
                Close
              </button>
            </div>
          ) : (
            <form className="inquiry-form" noValidate onSubmit={handleSubmit}>
              {inquiryType === "discussion" ? (
                <DiscussionForm
                  config={config}
                  disabled={isSubmitting}
                  errors={errors}
                  registerField={registerField}
                  values={values}
                  onChange={updateValue}
                />
              ) : (
                <TechnologyPartnerForm
                  config={config}
                  disabled={isSubmitting}
                  errors={errors}
                  registerField={registerField}
                  values={values}
                  onChange={updateValue}
                />
              )}
              <label className="inquiry-botcheck" aria-hidden="true">
                Leave this field empty
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  checked={botcheck === "true"}
                  onChange={(event) => setBotcheck(event.target.checked ? "true" : "")}
                />
              </label>
              <div className="inquiry-modal__footer">
                {submitState === "error" && errorMessage ? (
                  <p
                    ref={errorRef}
                    className="inquiry-error-summary"
                    tabIndex={-1}
                    role="alert"
                  >
                    {errorMessage}
                  </p>
                ) : null}
                <button className="button button-primary inquiry-submit" type="submit" disabled={isSubmitting}>
                  <span>{isSubmitting ? "Sending…" : "Send inquiry"}</span>
                  {isSubmitting ? <i aria-hidden="true" /> : null}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
