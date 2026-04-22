import { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { BENCHMARK_PAGES, getRankedToolsForBenchmark } from "@/lib/benchmarks";
import { safeJsonLd } from "@/lib/structured-data";
import { getTierForScore } from "@/lib/tiers";

const BASE_URL = "https://aitooltier.com";

export const metadata: Metadata = {
  title: "AI Benchmarks (2026): The LLM and Coding-Agent Leaderboards",
  description:
    "Every major AI benchmark with rankings, explanations, and methodology. MMLU, GPQA Diamond, AIME, SWE-bench Verified, HumanEval, LiveCodeBench, ARC-AGI, and Humanity's Last Exam scored across 128 AI tools.",
};

export default function BenchmarksHubPage() {
  const byCategory: Record<string, typeof BENCHMARK_PAGES> = {};
  for (const b of BENCHMARK_PAGES) {
    byCategory[b.category] = byCategory[b.category] || [];
    byCategory[b.category].push(b);
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Benchmarks", item: `${BASE_URL}/benchmarks` },
    ],
  };

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Benchmarks (2026)",
    description:
      "Every major AI benchmark with rankings, explanations, and methodology.",
    url: `${BASE_URL}/benchmarks`,
    hasPart: BENCHMARK_PAGES.map((b) => ({
      "@type": "WebPage",
      name: `${b.name}: 2026 Rankings`,
      url: `${BASE_URL}/benchmarks/${b.slug}`,
      description: b.tagline,
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
          AI Benchmarks (2026)
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Every benchmark that matters for ranking LLMs and coding agents, with
          what it tests, how it is scored, why it matters, and the current
          leaderboard across {tools.length} reviewed AI tools.
        </p>
      </div>

      {Object.entries(byCategory).map(([category, pages]) => (
        <section key={category} className="mb-10">
          <h2 className="mb-4 text-xl font-black text-foreground">
            {category}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((b) => {
              const ranked = getRankedToolsForBenchmark(b, tools);
              const top3 = ranked.slice(0, 3);
              return (
                <Link
                  key={b.slug}
                  href={`/benchmarks/${b.slug}`}
                  className="group rounded-xl border border-border bg-card p-5 transition hover:border-foreground/20 hover:shadow-md"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-bold text-foreground group-hover:underline">
                      {b.name}
                    </h3>
                    <span className="shrink-0 text-xs font-medium text-muted-foreground">
                      {ranked.length} scored
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {b.tagline}
                  </p>
                  {top3.length > 0 && (
                    <div className="mt-4 space-y-1.5 border-t border-border pt-3">
                      {top3.map((r, i) => {
                        const tier = getTierForScore(r.tool.scores.overall);
                        return (
                          <div
                            key={r.tool.slug}
                            className="flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span className="w-4 shrink-0 font-mono text-muted-foreground">
                                {i + 1}.
                              </span>
                              <span
                                className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-bold ${tier.labelBg} ${tier.labelText}`}
                              >
                                {tier.rank}
                              </span>
                              <span className="truncate font-medium text-foreground">
                                {r.tool.name}
                              </span>
                            </div>
                            <span className="shrink-0 font-mono text-foreground">
                              {r.score.score}
                              {r.score.unit}
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
        </section>
      ))}

      <div className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-lg font-bold text-foreground">
          How we source benchmark scores
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Every score on this site comes from the model vendor&apos;s own
          published technical report or from LMSYS Arena. We cite the source on
          each tool page and date-stamp the pull. When third-party verification
          lags vendor claims, we mark the score with a pending label rather
          than invent a number. See our{" "}
          <Link href="/methodology" className="underline">
            methodology
          </Link>{" "}
          for the full policy.
        </p>
      </div>
    </div>
  );
}
