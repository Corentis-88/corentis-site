"use client";

import { type FormEvent, type KeyboardEvent, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ChevronDown, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  getPackByRequestType,
  getPackBySlug,
  getRequestOptionBySlug,
  getRequestOptionByType,
  requestTypes,
  type RequestType,
} from "@/lib/packs";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  interestType: string;
  message: string;
  consent: boolean;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  organisation: "",
  interestType: "",
  message: "",
  consent: false,
};

const isDevelopment = process.env.NODE_ENV !== "production";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ErrorState>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fulfilledRequestType, setFulfilledRequestType] = useState<RequestType | null>(null);

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim() ?? "";
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";
  const endpointConfigured = endpoint.length > 0;
  const selectedRequest = getRequestOptionByType(form.interestType);
  const selectedPack = getPackByRequestType(form.interestType);
  const selectedDestination = selectedPack?.downloadHref ?? selectedRequest?.successHref ?? "";
  const fulfilledRequest = getRequestOptionByType(fulfilledRequestType);
  const fulfilledPack = getPackByRequestType(fulfilledRequestType);

  function updateFormField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));

    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
      setFulfilledRequestType(null);
    }
  }

  useEffect(() => {
    const requestedSlug = searchParams.get("pack");
    const requestedPack = getPackBySlug(requestedSlug);
    const requestedOption = requestedPack ?? getRequestOptionBySlug(searchParams.get("request"));

    if (!requestedOption) {
      return;
    }

    setForm((current) => {
      if (current.interestType === requestedOption.requestType) {
        return current;
      }

      return {
        ...current,
        interestType: requestedOption.requestType,
      };
    });
  }, [searchParams]);

  function validate(state: FormState) {
    const nextErrors: ErrorState = {};

    if (!state.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!state.lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!state.organisation.trim()) nextErrors.organisation = "Organisation is required.";
    if (!state.interestType.trim()) nextErrors.interestType = "Select an interest type.";
    if (!state.email.trim()) {
      nextErrors.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!state.message.trim()) nextErrors.message = "Please include a short message.";

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isDevelopment) {
      console.info("[Corentis form] form submit fired");
      console.info(`[Corentis form] endpoint value ${endpointConfigured ? "present" : "missing"}`);
    }

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      setMessage("Please correct the highlighted fields and try again.");

      if (isDevelopment) {
        console.error("[Corentis form] submission blocked by client validation");
      }

      return;
    }

    if (!endpointConfigured) {
      setStatus("error");
      setMessage("This form is temporarily unavailable. Please try again shortly or contact hello@corentis.co.uk.");

      if (isDevelopment) {
        console.error("[Corentis form] endpoint value missing");
      }

      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const formData = new FormData(event.currentTarget);
      const requestedPack = getPackByRequestType(form.interestType);
      const requestedOption = getRequestOptionByType(form.interestType);
      const intendedDestination = requestedPack?.downloadHref ?? requestedOption?.successHref ?? "";
      const sourcePage = typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "";
      formData.set("first_name", form.firstName.trim());
      formData.set("last_name", form.lastName.trim());
      formData.set("email", form.email.trim());
      formData.set("organisation", form.organisation.trim());
      formData.set("interest_type", form.interestType.trim());
      formData.set("audience", form.interestType.trim());
      formData.set("message", form.message.trim());
      formData.set("consent", form.consent ? "yes" : "no");
      formData.set("requested_pack", requestedPack?.title ?? "");
      formData.set("selected_pack", requestedPack?.title ?? "No PDF requested");
      formData.set("intended_download_page", intendedDestination);
      formData.set("source_page", sourcePage);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        let errorMessage = "Something went wrong while sending your details. Please try again in a moment.";

        try {
          const data = (await response.json()) as { errors?: Array<{ message?: string }> };
          if (data.errors?.length) {
            errorMessage = data.errors
              .map((item) => item.message)
              .filter(Boolean)
              .join(" ");
          } else if (response.status === 429) {
            errorMessage = "Too many attempts were made in a short period. Please wait a moment and try again.";
          }
        } catch {
          if (response.status === 429) {
            errorMessage = "Too many attempts were made in a short period. Please wait a moment and try again.";
          }
        }

        throw new Error(errorMessage);
      }

      if (isDevelopment) {
        console.info("[Corentis form] success of the POST");
      }

      setStatus("success");
      setFulfilledRequestType(form.interestType as RequestType);
      setMessage("");
      setForm(initialState);
      setErrors({});
    } catch (error) {
      if (isDevelopment) {
        console.error("[Corentis form] failure of the POST", error);
      }

      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong while sending your details. Please try again in a moment.");
    }
  }

  return (
    <div id="request-form" className="glass-panel p-6 sm:p-8">
      <div className="mb-8">
        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {selectedRequest?.formHeading ?? "Request a Corentis overview"}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
                {selectedRequest?.formHint ??
                  "Request the pack or conversation most relevant to you and, after submission, we will route you to the right material here on the page."}
              </p>
            </div>
            {selectedRequest ? <div className="status-pill w-fit">Request selected</div> : null}
          </div>
          {selectedRequest?.packSlug ? (
            <div className="mt-5 rounded-[1.4rem] border border-[rgba(73,166,255,0.2)] bg-[rgba(73,166,255,0.08)] px-4 py-4 sm:px-5">
              <p className="text-sm font-medium text-white">How access works</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                Complete your details below and, once the form is submitted successfully, the requested PDF will be
                available immediately here for download.
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <form
        action={endpointConfigured ? endpoint : undefined}
        method="POST"
        className="grid gap-5"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="First name"
            name="first_name"
            value={form.firstName}
            error={errors.firstName}
            onChange={(value) => updateFormField("firstName", value)}
          />
          <Field
            label="Last name"
            name="last_name"
            value={form.lastName}
            error={errors.lastName}
            onChange={(value) => updateFormField("lastName", value)}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Work email"
            name="email"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={(value) => updateFormField("email", value)}
          />
          <Field
            label="Organisation"
            name="organisation"
            value={form.organisation}
            error={errors.organisation}
            onChange={(value) => updateFormField("organisation", value)}
          />
        </div>

        <InterestTypeField
          value={form.interestType}
          error={errors.interestType}
          onChange={(value) => updateFormField("interestType", value)}
        />
        <input type="hidden" name="requested_pack" value={selectedPack?.title ?? ""} />
        <input type="hidden" name="audience" value={form.interestType} />
        <input type="hidden" name="selected_pack" value={selectedPack?.title ?? "No PDF requested"} />
        <input type="hidden" name="intended_download_page" value={selectedDestination} />

        <label className="grid gap-2.5">
          <span className="text-sm font-medium text-white">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={(event) => updateFormField("message", event.target.value)}
            className="input-shell min-h-36 resize-y"
            placeholder="Tell us what you are exploring, where you are in the process, or what kind of conversation would be helpful."
          />
          {errors.message ? <p className="text-sm text-rose-300">{errors.message}</p> : null}
        </label>

        {turnstileSiteKey ? (
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-4 text-sm leading-6 text-[var(--color-text-muted)]">
            <p className="font-medium text-white">Verification</p>
            <p className="mt-2">
              A Turnstile site key is configured. Replace this integration slot with the live widget and verify the token
              in your submission endpoint.
            </p>
          </div>
        ) : null}

        <input type="hidden" name="consent" value={form.consent ? "yes" : "no"} />

        <label className="flex items-start gap-3 rounded-3xl border border-white/8 bg-white/[0.02] p-4 text-sm text-[var(--color-text-muted)]">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={(event) => updateFormField("consent", event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-[var(--color-electric)]"
          />
          <span>
            I agree to receive occasional updates from Corentis about the company, product development, and relevant
            news. I understand that I can unsubscribe at any time.
          </span>
        </label>

        {!endpointConfigured ? (
          <p className="rounded-2xl border border-amber-300/20 bg-amber-300/8 px-4 py-3 text-sm text-amber-100">
            This form is temporarily unavailable. Please try again shortly or email hello@corentis.co.uk.
          </p>
        ) : null}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" className="min-w-52 w-full sm:w-auto" disabled={status === "submitting" || !endpointConfigured}>
            {status === "submitting" ? (
              <span className="inline-flex items-center gap-2">
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Sending
              </span>
            ) : (
              selectedRequest?.ctaLabel ?? "Request overview"
            )}
          </Button>

          <div className="min-h-6 text-sm text-[var(--color-text-muted)]">
            {message ? (
              <span className="inline-flex items-center gap-2">
                {status === "success" && <CheckCircle2 className="h-4 w-4 text-emerald-300" />}
                {message}
              </span>
            ) : null}
          </div>
        </div>

        {status === "success" && fulfilledRequest?.packSlug && fulfilledPack ? (
          <div className="rounded-[1.5rem] border border-[rgba(73,166,255,0.24)] bg-[linear-gradient(180deg,rgba(16,38,82,0.9),rgba(7,20,46,0.88))] p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-electric-soft)]">
                  Requested Material
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {fulfilledRequest.successHeading}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
                  {fulfilledRequest.successDescription}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">{fulfilledRequest.successFollowUp}</p>
              </div>
              <div className="status-pill w-fit">Available now</div>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={fulfilledPack.downloadHref}
                download={fulfilledPack.fileName}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-cobalt),var(--color-electric))] px-5 py-3 text-sm font-semibold tracking-[0.01em] text-[var(--color-near-white)] shadow-[0_20px_60px_rgba(73,166,255,0.22)] transition duration-300 hover:brightness-110 hover:shadow-[0_24px_80px_rgba(73,166,255,0.3)]"
              >
                {fulfilledRequest.successLabel}
              </a>
              <Link
                href="/privacy/"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(26,49,95,0.95)] bg-[rgba(10,30,70,0.55)] px-5 py-3 text-sm font-semibold tracking-[0.01em] text-[var(--color-near-white)] transition duration-300 hover:border-[rgba(73,166,255,0.4)] hover:bg-[rgba(10,30,70,0.72)]"
              >
                Review privacy notice
              </Link>
            </div>
          </div>
        ) : null}

        {status === "success" && !fulfilledRequest?.packSlug ? (
          <div className="rounded-[1.5rem] border border-[rgba(73,166,255,0.24)] bg-[linear-gradient(180deg,rgba(16,38,82,0.9),rgba(7,20,46,0.88))] p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-electric-soft)]">
                  Conversation Requested
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {fulfilledRequest?.successHeading ?? "Thank you. Your message has been received"}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
                  {fulfilledRequest?.successDescription}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">{fulfilledRequest?.successFollowUp}</p>
              </div>
              <div className="status-pill w-fit">Conversation queued</div>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={fulfilledRequest?.successHref ?? "/platform/"}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-cobalt),var(--color-electric))] px-5 py-3 text-sm font-semibold tracking-[0.01em] text-[var(--color-near-white)] shadow-[0_20px_60px_rgba(73,166,255,0.22)] transition duration-300 hover:brightness-110 hover:shadow-[0_24px_80px_rgba(73,166,255,0.3)]"
              >
                {fulfilledRequest?.successLabel ?? "Explore the platform"}
              </Link>
              <Link
                href="/privacy/"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(26,49,95,0.95)] bg-[rgba(10,30,70,0.55)] px-5 py-3 text-sm font-semibold tracking-[0.01em] text-[var(--color-near-white)] transition duration-300 hover:border-[rgba(73,166,255,0.4)] hover:bg-[rgba(10,30,70,0.72)]"
              >
                Review privacy notice
              </Link>
            </div>
          </div>
        ) : null}

      </form>
    </div>
  );
}

function InterestTypeField({
  value,
  error,
  onChange,
}: {
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() => Math.max(0, requestTypes.findIndex((item) => item === value)));
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listboxId = useId();
  const errorId = useId();
  const selectedLabel = value || "Select one";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const selectedIndex = requestTypes.findIndex((item) => item === value);
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
  }, [value]);

  function selectValue(nextValue: string) {
    onChange(nextValue);
    setIsOpen(false);
    buttonRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();

      if (!isOpen) {
        setIsOpen(true);
        return;
      }

      const direction = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((current) => {
        const nextIndex = (current + direction + requestTypes.length) % requestTypes.length;
        onChange(requestTypes[nextIndex]);
        return nextIndex;
      });
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen((current) => !current);
    }
  }

  return (
    <div className="grid gap-2.5" ref={containerRef}>
      <span className="text-sm font-medium text-white">Requested pack or conversation</span>
      <input name="interest_type" type="hidden" value={value} />
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-describedby={error ? errorId : undefined}
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={handleKeyDown}
        className={`input-shell flex min-h-[3.75rem] items-center justify-between gap-4 text-left ${
          error ? "border-rose-300/70 shadow-[0_0_0_4px_rgba(253,164,175,0.08)]" : ""
        }`}
      >
        <span className={value ? "text-[var(--color-near-white)]" : "text-[rgba(170,182,207,0.7)]"}>{selectedLabel}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--color-electric-soft)] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen ? (
        <div
          id={listboxId}
          role="listbox"
          aria-label="Interest type"
          className="overflow-hidden rounded-[1.25rem] border border-[rgba(73,166,255,0.22)] bg-[rgba(6,20,48,0.98)] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          {requestTypes.map((item, index) => {
            const isSelected = item === value;

            return (
              <button
                key={item}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => selectValue(item)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${
                  isSelected || activeIndex === index
                    ? "bg-[rgba(73,166,255,0.14)] text-white"
                    : "text-[var(--color-text-muted)] hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span>{item}</span>
                {isSelected ? <CheckCircle2 className="h-4 w-4 text-[var(--color-electric-soft)]" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}

      {error ? (
        <p id={errorId} className="text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Field({
  label,
  name,
  value,
  error,
  type = "text",
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2.5">
      <span className="text-sm font-medium text-white">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`input-shell min-h-[3.75rem] ${error ? "border-rose-300/70 shadow-[0_0_0_4px_rgba(253,164,175,0.08)]" : ""}`}
      />
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
    </label>
  );
}
