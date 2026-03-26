import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AIToolTier",
  description:
    "We review AI tools honestly. No paid placements, no fluff. Just data-backed reviews with real scores and known issues.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-foreground">About AIToolTier</h1>

      <div className="mt-6 space-y-4 text-muted-foreground">
        <p>
          There are hundreds of AI tools launching every week. Most review sites
          rank whoever pays them the most. We don&apos;t do that.
        </p>

        <p>
          AIToolTier exists because we got tired of reading &quot;best AI
          tools&quot; articles that were just ads. Every tool rated 9/10, no
          mention of bugs, no real comparison -- just affiliate links dressed up
          as reviews.
        </p>

        <p>
          We do things differently. Every tool on this site is scored on a
          consistent rubric. We cross-reference user reviews from G2, Capterra,
          Reddit, and Product Hunt. We test tools ourselves. We report known
          bugs and issues, with dates and sources so you know if they&apos;re
          still relevant.
        </p>

        <p>
          If a tool is bad, we say it&apos;s bad. If it&apos;s great but
          overpriced, we say that too. Our goal is to help you find the right
          tool, not to sell you on whatever pays us the most.
        </p>
      </div>

      <div className="mt-8">
        <Link
          href="/how-we-review"
          className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
        >
          See How We Review Tools
        </Link>
      </div>
    </div>
  );
}
