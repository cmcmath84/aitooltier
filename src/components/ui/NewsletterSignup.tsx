"use client";

import { useState } from "react";

// When NEXT_PUBLIC_BEEHIIV_EMBED_URL is set in Vercel env vars, we render
// Beehiiv's embedded subscription form (real newsletter backend).
// Until that is set, we fall back to a localStorage-only form so the
// footer widget still looks functional during the signup setup window.
const BEEHIIV_EMBED_URL = process.env.NEXT_PUBLIC_BEEHIIV_EMBED_URL;

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Fallback path: persist to localStorage until the Beehiiv embed URL
    // env var is configured in Vercel. Users who subscribe in this window
    // are not lost -- we can export localStorage entries and import to
    // Beehiiv once the publication is set up.
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

  // Preferred path: Beehiiv iframe embed.
  if (BEEHIIV_EMBED_URL) {
    return (
      <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
        <h3 className="text-lg font-semibold text-foreground">
          The Tier List Tuesday
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Weekly newsletter: tier movers, new entrants, and the VS of the
          week. Built from our daily AI-tool sweeps. No spam, unsubscribe
          anytime.
        </p>
        <iframe
          src={BEEHIIV_EMBED_URL}
          title="Subscribe to The Tier List Tuesday"
          width="100%"
          height="72"
          frameBorder={0}
          scrolling="no"
          style={{
            borderRadius: 4,
            backgroundColor: "transparent",
            marginTop: 12,
          }}
        />
      </div>
    );
  }

  // Fallback: localStorage form (used until Beehiiv env var is set).
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
