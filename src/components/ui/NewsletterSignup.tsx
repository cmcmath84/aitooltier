"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    // For now, store signups in localStorage until a backend is set up
    try {
      const existing = JSON.parse(
        localStorage.getItem("newsletter_signups") || "[]"
      );
      existing.push({ email, date: new Date().toISOString() });
      localStorage.setItem("newsletter_signups", JSON.stringify(existing));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
      <h3 className="text-lg font-semibold text-foreground">
        Stay in the loop
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Get notified when we add new tools, update scores, or spot pricing
        changes. No spam, unsubscribe anytime.
      </p>
      {status === "success" ? (
        <p className="mt-3 text-sm font-medium text-emerald-700">
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="flex-1 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-hover"
          >
            Subscribe
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-2 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
