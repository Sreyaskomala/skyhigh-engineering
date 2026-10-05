"use client";

import { useState, type FormEvent } from "react";
import { solutions } from "@/lib/solutions";

export default function EnquiryForm({
  initialSolution = "",
  configured = true,
}: {
  initialSolution?: string;
  configured?: boolean;
}) {
  const [status, setStatus] = useState<{
    type: "success" | "error" | "info";
    message: string;
  } | null>(null);
  const [busy, setBusy] = useState(false);

  function download(form: HTMLFormElement) {
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const text = [
      "SKYHIGH ENGINEERING — PROJECT BRIEF",
      "Recipient Email: aeronixskylabs@gmail.com",
      "",
      ...["name", "email", "phone", "solution", "location", "requirements"].map(
        (k) => `${k.toUpperCase()}: ${data.get(k) || "Not provided"}`,
      ),
    ].join("\n\n");

    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "skyhigh-project-brief.txt";
    a.click();
    URL.revokeObjectURL(url);
    setStatus({
      type: "info",
      message: "Your project brief has been downloaded.",
    });
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setBusy(true);
    setStatus(null);

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "We could not send your enquiry. Please try again.",
        );
      }

      setStatus({
        type: "success",
        message:
          result.message ||
          "Thank you! Your enquiry has been sent to aeronixskylabs@gmail.com. Our engineering team will review it and get in touch with you shortly.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your enquiry. Please try again.",
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Your name <span>*</span>
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            placeholder="Full name"
          />
        </label>
        <label>
          Email address <span>*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@company.com"
          />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            placeholder="e.g. +91 98765 43210"
          />
        </label>
        <label>
          Project location
          <input
            name="location"
            autoComplete="address-level2"
            maxLength={160}
            placeholder="City or site location"
          />
        </label>
        <label className="full-width">
          What would you like to build?
          <select name="solution" defaultValue={initialSolution}>
            <option value="">Help me choose a solution</option>
            {solutions.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="full-width">
          Tell us about your project <span>*</span>
          <textarea
            name="requirements"
            required
            minLength={5}
            maxLength={5000}
            rows={5}
            placeholder="How will you use the space? Include any dimensions, quantity or timeline you have in mind."
          />
        </label>
      </div>

      <div className="honeypot" aria-hidden="true">
        <label>
          Leave this empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="form-note">
        Submissions are routed directly to our engineering team at{" "}
        <strong>aeronixskylabs@gmail.com</strong>. View our{" "}
        <a href="/privacy">Privacy information</a>.
      </p>

      <button type="submit" className="button button-dark" disabled={busy}>
        {busy ? "Sending enquiry…" : "Send project enquiry"}
      </button>

      <button
        type="button"
        className="secondary-form-action"
        onClick={(e) => download(e.currentTarget.form!)}
      >
        Download a copy of my brief
      </button>

      {status && (
        <div
          className={`form-status form-status-${status.type}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </div>
      )}
    </form>
  );
}
