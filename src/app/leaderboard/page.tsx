import { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { tools, getToolsByCategory } from "@/data/tools";
import { getTierForScore } from "@/lib/tiers";
import { leaderboardSlug } from "@/lib/leaderboards";
import { safeJsonLd } from "@/lib/structured-data";
import CategoryIcon from "@/components/ui/CategoryIcon";

const BASE_URL = "https://aitooltier.com";

export const metadata: Metadata = {
  title: "AI Leaderboards (2026): Best AI Models, LLMs, and Tools Ranked",
  description:
    "Tier-list leaderboards for every AI category: LLMs, coding agents, image generators, video models, agents, and more. Ranked S/A/B/C/D/F across 128 reviewed tools.",
};

export default function LeaderboardHubPage() {
  // Categories sorted by tool count (richest leaderboards first).
  const withCounts = categories
    .map((c) => ({ cat: c, count: getToolsByCategory(c.slug).length }))
    .filter((x) => x.count > 0)
    .sort((a, b) => b.count - a.count);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Leaderboards",
        item: `${BASE_URL}/leaderboard`,
      },
    ],
  };

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Leaderboards (2026)",
    description:
      "Tier-list leaderboards for every AI tool category, ranked S/A/B/C/D/F.",
    url: `${BASE_URL}/leaderboard`,
    hasPart: withCounts.map((x) => ({
      "@type": "WebPage",
      name: `Best ${x.cat.name} (2026)`,
      url: `${BASE_URL}/leaderboard/${leaderboardSlug(x.cat.slug)}`,
      description: x.cat.description,
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(collection) }}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          AI Leaderboards (2026)
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Tier-list rankings for every AI category. Each leaderboard ranks
          tools S through F based on output quality, ease of use, value, and
          features -- no paid placements, no affiliate tier boosts.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {tools.length} tools ranked across {withCounts.length} leaderboards.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {withCounts.map(({ cat, count }) => {
          const categoryTools = getToolsByCategory(cat.slug);
          const sorted = [...categoryTools].sort(
            (a, b) => b.scores.overall - a.scores.overall,
          );
          const top3 = sorted.slice(0, 3);

          return (
            <Link
              key={cat.slug}
              href={`/leaderboard/${leaderboardSlug(cat.slug)}`}
              className="group rounded-xl border border-border bg-card p-5 transition hover:border-foreground/20 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <CategoryIcon slug={cat.slug} size="md" />
                  <div>
                    <h2 className="text-base font-bold text-foreground group-hover:underline">
                      {cat.name}
                    </h2>
                    <div className="text-xs text-muted-foreground">
                      {count} tool{count !== 1 && "s"} ranked
                    </div>
                  </div>
                </div>
              </div>
              {top3.length > 0 && (
                <div className="mt-4 space-y-1.5 border-t border-border pt-3">
                  {top3.map((tool, i) => {
                    const tier = getTierForScore(tool.scores.overall);
                    return (
                      <div
                        key={tool.slug}
                        className="flex items-center justify-between text-sm"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="w-4 shrink-0 font-mono text-xs text-muted-foreground">
                            {i + 1}.
                          </span>
                          <span
                            className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-bold ${tier.labelBg} ${tier.labelText}`}
                          >
                            {tier.rank}
                          </span>
                          <span className="truncate font-medium text-foreground">
                            {tool.name}
                          </span>
                        </div>
                        <span className="shrink-0 font-mono text-sm text-foreground">
                          {tool.scores.overall.toFixed(1)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </Link>
          );
        })}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-lg font-bold text-foreground">
          How AIToolTier ranks
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Every tool scores on four axes (ease of use, output quality, value,
          features), averaged into a 0-10 overall score that determines tier
          placement: S (9.0+), A (8.0-8.9), B (7.0-7.9), C (6.0-6.9), D
          (5.0-5.9), F (below 5.0). Scores are set by the editorial team based
          on cross-referenced public data, hands-on testing, and current
          known-issue tracking -- never by vendor input. Read the full{" "}
          <Link href="/methodology" className="underline">
            methodology
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
