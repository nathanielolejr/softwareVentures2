"use client";

import { useState } from "react";
import { budgetOptions, contactCopy, projectTypeOptions } from "@/content/contact";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "mt-1 block w-full rounded-lg border border-slate-400 bg-white px-3 py-2.5 text-base text-ink placeholder:text-slate-500";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {optional && <span className="text-muted font-normal"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setErrors({});
    setMessage("");
    try {
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: Record<string, string>;
      };
      if (res.ok && json.ok) {
        setStatus("success");
        setMessage(contactCopy.success);
        form.reset();
      } else {
        setStatus("error");
        setErrors(json.fieldErrors ?? {});
        setMessage(json.error ?? contactCopy.error);
      }
    } catch {
      setStatus("error");
      setMessage(contactCopy.error);
    }
  }

  const invalid = (k: string) =>
    errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-error` } : {};

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            {...invalid("name")}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            {...invalid("email")}
          />
        </Field>
      </div>
      <Field id="company" label="Company" optional error={errors.company}>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          className={fieldClass}
          {...invalid("company")}
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="projectType" label="Project type" error={errors.projectType}>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className={fieldClass}
            {...invalid("projectType")}
          >
            <option value="" disabled>
              Select…
            </option>
            {projectTypeOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field id="budget" label="Budget range" error={errors.budget}>
          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className={fieldClass}
            {...invalid("budget")}
          >
            <option value="" disabled>
              Select…
            </option>
            {budgetOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={fieldClass}
          {...invalid("message")}
        />
      </Field>

      {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-accent hover:bg-accent-dark inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium text-white transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="rounded-lg border border-green-300 bg-green-50 p-4 text-green-900">
            {message}
          </p>
        )}
      </div>
      <div role="alert">
        {status === "error" && (
          <p className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-900">{message}</p>
        )}
      </div>
    </form>
  );
}
