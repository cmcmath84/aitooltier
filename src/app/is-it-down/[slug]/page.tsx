import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolBySlug, getToolsByCategory } from "@/data/tools";
import { getTierForScore } from "@/lib/tiers";
import { safeJsonLd } from "@/lib/structured-data";

const BASE_URL = "https://aitooltier.com";

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function getDownDetectorUrl(toolName: string): string {
  const slug = toolName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `https://downdetector.com/status/${slug}/`;
}

function getXSearchUrl(toolName: string): string {
  return `https://x.com/search?q=${encodeURIComponent(toolName + " down OR outage")}&f=live`;
}

export async function generateStaticParams() {
  return tools
    .filter((t) => t.status !== "deprecated")
    .map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Tool Not Found" };
  return {
    title: `Is ${tool.name} Down? (2026): Status Check, Known Issues, Alternatives`,
    description: `Check if ${tool.name} is down right now. Official status page, DownDetector, X outage reports, recent known issues, and working alternatives if it is down.`,
  };
}

export default async function IsItDownDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const domain = getDomain(tool.url);
  const downDetectorUrl = getDownDetectorUrl(tool.name);
  const xSearchUrl = getXSearchUrl(tool.name);

  const alternatives = getToolsByCategory(tool.category)
    .filter((t) => t.slug !== tool.slug && t.status !== "deprecated")
    .sort((a, b) => b.scores.overall - a.scores.overall)
    .slice(0, 5);

  const recentIssues = (tool.knownIssues || []).slice(0, 6);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Outage Checks",
        item: `${BASE_URL}/is-it-down`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Is ${tool.name} Down?`,
        item: `${BASE_URL}/is-it-down/${tool.slug}`,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is ${tool.name} down right now?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We do not run live uptime probes. To verify ${tool.name}'s current status, check the vendor's official status page, DownDetector, or the vendor's X feed. Links are on this page.`,
        },
      },
      {
        "@type": "Question",
        name: `What should I use if ${tool.name} is down?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The top AIToolTier-ranked alternatives to ${tool.name} are ${alternatives
            .slice(0, 3)
            .map((a) => a.name)
            .join(", ")}. Full list and tier rankings are on this page.`,
        },
      },
    ],
  };

  const tier = getTierForScore(tool.scores.overall);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faq) }}
      />

      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/is-it-down" className="hover:underline">
          Outage Checks
        </Link>{" "}
        / <span className="text-foreground">Is {tool.name} down?</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Is {tool.name} Down?
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Quickest ways to check the current status of{" "}
          <a
            href={tool.url}
            className="text-foreground underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            {domain}
          </a>{" "}
          plus recent known issues and working alternatives if it&apos;s out.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Last editorial review:{" "}
          <span className="text-foreground">{tool.lastReviewedDate}</span>
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-black text-foreground">
          How to check right now
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={tool.url}
            rel="noopener noreferrer"
            target="_blank"
            className="rounded-xl border border-border bg-card p-4 transition hover:border-foreground/20"
          >
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Step 1 -- Load the site
            </div>
            <div className="mt-1 text-base font-bold text-foreground">
              Open {domain} &rarr;
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              The simplest check. If it loads and you can log in, the tool is
              up for you.
            </p>
          </a>

          <a
            href={downDetectorUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="rounded-xl border border-border bg-card p-4 transition hover:border-foreground/20"
          >
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Step 2 -- Crowdsourced reports
            </div>
            <div className="mt-1 text-base font-bold text-foreground">
              DownDetector: {tool.name} &rarr;
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              User-reported outages aggregated across regions. Good signal for
              partial or regional outages.
            </p>
          </a>

          <a
            href={xSearchUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="rounded-xl border border-border bg-card p-4 transition hover:border-foreground/20"
          >
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Step 3 -- Live social
            </div>
            <div className="mt-1 text-base font-bold text-foreground">
              Search X for &ldquo;{tool.name} down&rdquo; &rarr;
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Live tweets from other users. Fastest signal for a fresh outage
              -- often beats status pages by 10-20 minutes.
            </p>
          </a>

          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(tool.name + " status page")}`}
            rel="noopener noreferrer"
            target="_blank"
            className="rounded-xl border border-border bg-card p-4 transition hover:border-foreground/20"
          >
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Step 4 -- Official status page
            </div>
            <div className="mt-1 text-base font-bold text-foreground">
              Find {tool.name}&apos;s status page &rarr;
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Most vendors publish a status page at status.[domain] or on
              Statuspage.io. Google-search to find the current URL.
            </p>
          </a>
        </div>
      </section>

      {recentIssues.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-black text-foreground">
            Known issues we&apos;ve tracked
          </h2>
          <div className="space-y-3">
            {recentIssues.map((issue, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-4"
              >
                <div className="text-sm text-foreground">{issue.description}</div>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{issue.date}</span>
                  {issue.source && (
                    <>
                      <span>&bull;</span>
                      <span className="truncate">{issue.source}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Issues here are sourced from our editorial sweeps, not real-time
            telemetry. Newer issues may exist.
          </p>
        </section>
      )}

      {alternatives.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-1 text-xl font-black text-foreground">
            What to use if {tool.name} is down
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Top AIToolTier-ranked alternatives in the same category, ordered
            by our overall score.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {alternatives.map((alt) => {
              const altTier = getTierForScore(alt.scores.overall);
              return (
                <Link
                  key={alt.slug}
                  href={`/tools/${alt.slug}`}
                  className="group rounded-lg border border-border bg-card p-4 transition hover:border-foreground/20"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded text-sm font-bold ${altTier.labelBg} ${altTier.labelText}`}
                    >
                      {altTier.rank}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="truncate text-base font-bold text-foreground group-hover:underline">
                          {alt.name}
                        </h3>
                        <span className="shrink-0 font-mono text-sm text-foreground">
                          {alt.scores.overall.toFixed(1)}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                        {alt.tagline}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section className="mb-6 rounded-xl border border-border bg-muted/40 p-5">
        <h2 className="text-base font-bold text-foreground">
          About {tool.name}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            Tier {tier.rank} ({tool.scores.overall.toFixed(1)}/10).
          </span>{" "}
          {tool.tagline}
        </p>
        <div className="mt-3">
          <Link
            href={`/tools/${tool.slug}`}
            className="text-sm font-medium text-foreground underline"
          >
            Read the full {tool.name} review &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
