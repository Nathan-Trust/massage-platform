"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/content";

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
};

/** Label + control + hint + inline error. Errors use an icon and text, never colour alone. */
export function Field({ id, label, required, optional, hint, error, full, children }: FieldProps) {
  return (
    <div className={full ? "field full" : "field"}>
      <label htmlFor={id}>
        {label}
        {required && <span className="req">Required</span>}
        {optional && <span className="opt">Optional</span>}
      </label>
      {children}
      {hint && (
        <p className="hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="err" id={`${id}-err`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/** aria wiring for a control rendered inside <Field>. */
export const describe = (id: string, error?: string, hint?: boolean) => ({
  id,
  "aria-invalid": error ? true : undefined,
  "aria-describedby": [hint ? `${id}-hint` : "", error ? `${id}-err` : ""].filter(Boolean).join(" ") || undefined,
});

type ResultProps = {
  heading: string;
  message: string;
  url: string;
  popupBlocked: boolean;
};

/**
 * Shown after a valid submit: the exact message, a link to send it in WhatsApp, a copy button,
 * and the phone number in case WhatsApp can't open (AC-09, AC-13).
 */
export function WhatsAppResult({ heading, message, url, popupBlocked }: ResultProps) {
  const ref = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState<"idle" | "copied" | "selected">("idle");

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied("copied");
    } catch {
      const range = document.createRange();
      if (preRef.current) range.selectNodeContents(preRef.current);
      const sel = getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      setCopied("selected");
    }
    setTimeout(() => setCopied("idle"), 2200);
  };

  return (
    <div ref={ref} className="result" aria-live="polite">
      <h3>{heading}</h3>
      <p className="privacy">
        {popupBlocked
          ? "WhatsApp didn’t open automatically. Use the button below, or copy your message."
          : "Review your message in WhatsApp and edit it if you need to before you send it."}
      </p>
      <pre ref={preRef}>{message}</pre>
      <div className="flex flex-wrap items-center gap-2.5">
        <a className="btn btn-gold" href={url} target="_blank" rel="noopener noreferrer">
          Open WhatsApp
          <span className="chip" aria-hidden="true">
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </span>
        </a>
        <button type="button" className="btn btn-dark plain" onClick={copy}>
          {copied === "copied" ? "Copied" : copied === "selected" ? "Selected, press copy" : "Copy message"}
        </button>
      </div>
      <p className="privacy">
        If WhatsApp doesn’t open, call or message us on{" "}
        <a href={`tel:${BRAND.phoneE164}`} className="font-semibold text-foreground underline underline-offset-4">
          {BRAND.phoneDisplay}
        </a>{" "}
        and paste your details.
      </p>
    </div>
  );
}

/** Opens WhatsApp in a new tab from a user gesture; returns false if the browser blocked it. */
export function openWhatsApp(url: string) {
  const w = window.open(url, "_blank");
  if (w) w.opener = null;
  return Boolean(w);
}
