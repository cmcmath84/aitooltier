"use client";

import { useState } from "react";

// Beehiiv publication slug -- aitooltier.beehiiv.com (confirmed live 2026-04-29).
// Pub ID for future API integration: pub_d5960df1-02f5-4f09-a68e-d130c6ba1b01
// Tonight's flow: brand-styled form on aitooltier.com -> open Beehiiv
// hosted subscribe page in new tab with email prefilled. Beehiiv handles
// double opt-in + Cloudflare bot protection on their side.
// TODO (post API-key unlock): swap to authenticated POST to
// https://api.beehiiv.com/v2/publications/pub_d5960df1.../subscriptions
// via a Next.js Route Handler that keeps BEEHIIV_API_KEY server-side.
const BEEHIIV_HOSTED_SUBSCRIBE_URL = "https://aitooltier.beehiiv.com";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    try {
      // Failsafe capture: also persist locally so we have a record
      // even if the user closes the Beehiiv tab without confirming.
      const existing = JSON.parse(
        localStorage.getItem("newsletter_signups") || "[]"
      );
      existing.push({ email, date: new Date().toISOString() });
      localStorage.setItem("newsletter_signups", JSON.stringify(existing));

      // Hand off to Beehiiv hosted page with email prefilled.
      // Opens in new tab so the user doesn't lose their place on aitooltier.com.
      const subscribeUrl = `${BEEHIIV_HOSTED_SUBSCRIBE_URL}?email=${encodeURIComponent(email)}`;
      window.open(subscribeUrl, "_blank", "noopener,noreferrer");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
      <h3 className="text-lg font-semibold text-foreground">
        The Tier List Tuesday
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Weekly newsletter: tier movers, new entrants, and the VS of the week.
        Built from our daily AI-tool sweeps. No spam, unsubscribe anytime.
      </p>
      {status === "success" ? (
        <p className="mt-3 text-sm font-medium text-emerald-700">
          Almost there -- confirm in the tab that just opened, then check your
          inbox.
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
