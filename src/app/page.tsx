import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { getTierForScore } from "@/lib/tiers";
import { homepageJsonLd, safeJsonLd } from "@/lib/structured-data";
import TierList from "@/components/ui/TierList";
import ToolCard from "@/components/tools/ToolCard";
import CategoryIcon from "@/components/ui/CategoryIcon";

// The homepage is the only indexed page and was the one page with no
// canonical tag, so Google indexed the apex and www copies as separate
// documents. Self-canonical to apex (resolved against metadataBase).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const featuredCategories = [
  "ai-chatbots",
  "ai-code-assistants",
  "ai-image-generators",
  "ai-llms",
  "ai-voice-audio",
];

export default function Home() {
  const featuredTools = featuredCategories.flatMap((catSlug) => {
    const catTools = tools
      .filter((t) => t.category === catSlug)
      .sort((a, b) => b.scores.overall - a.scores.overall);

    const aTier = catTools.filter(
      (t) => getTierForScore(t.scores.overall).rank === "A"
    );
    const bTier = catTools.filter(
      (t) => getTierForScore(t.scores.overall).rank === "B"
    );

    return [...aTier.slice(0, 1), ...bTier.slice(0, 1)];
  });

  const lastUpdated = tools.reduce((latest, t) =>
    t.lastReviewedDate > latest ? t.lastReviewedDate : latest,
    tools[0].lastReviewedDate
  );

  const byRecency = [...tools].sort(
    (a, b) =>
      new Date(b.lastReviewedDate).getTime() -
      new Date(a.lastReviewedDate).getTime()
  );
  const latestTools = byRecency.slice(0, 6);
  const tickerTools = byRecency.slice(0, 10);

  const jsonLdItems = homepageJsonLd(tools.length);

  const totalComparisons = (tools.length * (tools.length - 1)) / 2;

  const tierLegend = [
    { rank: "S", cls: "bg-tier-s-bg text-tier-s", label: "9.0+" },
    { rank: "A", cls: "bg-tier-a-bg text-tier-a", label: "8.0" },
    { rank: "B", cls: "bg-tier-b-bg text-tier-b", label: "7.0" },
    { rank: "C", cls: "bg-tier-c-bg text-tier-c", label: "6.0" },
    { rank: "D", cls: "bg-tier-d-bg text-tier-d", label: "5.0" },
    { rank: "F", cls: "bg-tier-f-bg text-tier-f", label: "<5" },
  ];

  return (
    <div>
      {jsonLdItems.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(item) }}
        />
      ))}

      {/* ============ HERO ============ */}
      <section className="hero-surface px-4 py-16 sm:py-24">
        {/* Latest-sweep ticker */}
        <div className="ticker absolute inset-x-0 top-0 overflow-hidden border-b border-white/5 [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
          <div className="ticker-track items-center gap-8 px-6 py-2">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                aria-hidden={dup === 1}
                className="flex items-center gap-8 pr-8 font-mono text-[11px] tracking-wide"
              >
                <span className="font-semibold uppercase text-primary">
                  Latest sweep
                </span>
                {tickerTools.map((t) => {
                  const tier = getTierForScore(t.scores.overall);
                  return (
                    <Link
                      key={`${dup}-${t.slug}`}
                      href={`/tools/${t.slug}`}
                      tabIndex={dup === 1 ? -1 : undefined}
                      className="group flex items-center gap-2 whitespace-nowrap"
                    >
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${tier.labelBg} ${tier.labelText}`}
                      >
                        {tier.rank}
                      </span>
                      <span className="text-muted-foreground transition group-hover:text-foreground">
                        {t.name}
                      </span>
                      <span className="tabular text-foreground/70">
                        {t.scores.overall.toFixed(1)}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <p className="fade-in-up eyebrow flex items-center justify-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-tier-c" />
            AI Tool Tier List · Updated Daily
          </p>

          <h1 className="fade-in-up-d1 mt-5 text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI tools, ranked <span className="text-primary">S to F.</span>
          </h1>

          <p className="fade-in-up-d2 mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Every tool tested, scored, and placed in its tier. We report the
            bugs, show the pricing traps, and tell you what actually works. No
            sponsored placements.
          </p>

          <div className="fade-in-up-d3 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              Compare Tools
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/all-tools"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              View All {tools.length} Tools
            </Link>
          </div>

          {/* Flat tier legend */}
          <div className="fade-in-up-d4 mt-12 flex items-center justify-center gap-3 sm:gap-5">
            {tierLegend.map((t) => (
              <div key={t.rank} className="flex flex-col items-center gap-1.5">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-lg font-mono text-base font-bold sm:h-12 sm:w-12 ${t.cls}`}
                >
                  {t.rank}
                </div>
                <span className="tabular font-mono text-[11px] text-muted-foreground">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="mx-auto max-w-4xl px-4">
        <div className="fade-in-up-d5 relative z-10 -mt-8 grid grid-cols-2 divide-y divide-border rounded-xl border border-border bg-card sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {[
            { value: tools.length.toString(), label: "Tools ranked" },
            { value: categories.length.toString(), label: "Categories" },
            { value: totalComparisons.toLocaleString() + "+", label: "Comparisons" },
            { value: "Daily", label: "Updates" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-5 text-center">
              <div className="tabular font-mono text-2xl font-black text-foreground sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TIER LIST ============ */}
      {tools.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="flex items-center gap-2.5 text-2xl font-black text-foreground sm:text-3xl">
                <span className="sec-n">01</span> The Tier List
              </h2>
              <p className="mt-1 text-muted-foreground">
                Top picks across {featuredCategories.length} categories.
              </p>
            </div>
            <span className="text-right text-xs text-muted-foreground">
              {tools.length} tools ranked<br />
              Last updated: {new Date(lastUpdated).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </div>
          <div className="mt-6">
            <TierList tools={featuredTools} />
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/all-tools"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/40"
            >
              View all {tools.length} tools
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* ============ CATEGORIES ============ */}
      <section className="section-alt px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="flex items-center gap-2.5 text-2xl font-black text-foreground sm:text-3xl">
            <span className="sec-n">02</span> Browse by Category
          </h2>
          <p className="mt-1 text-muted-foreground">
            Find tools for exactly what you need.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat, i) => {
              const toolCount = tools.filter((t) => t.category === cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 transition hover:border-primary/40"
                  style={{ animationDelay: `${i * 0.03}s` }}
                >
                  <CategoryIcon slug={cat.slug} size="md" />
                  <div className="min-w-0">
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cat.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {toolCount} tool{toolCount !== 1 ? "s" : ""}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ LATEST REVIEWS ============ */}
      {latestTools.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="flex items-center gap-2.5 text-2xl font-black text-foreground sm:text-3xl">
                <span className="sec-n">03</span> Latest Reviews
              </h2>
              <p className="mt-1 text-muted-foreground">
                Recently reviewed and updated.
              </p>
            </div>
            <Link
              href="/trending"
              className="text-sm font-medium text-primary transition hover:text-primary-hover"
            >
              See trending &rarr;
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      )}

      {/* ============ TRUST CTA ============ */}
      <section className="border-t border-border bg-muted px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="flex items-center justify-center gap-2.5 text-balance text-2xl font-black text-foreground sm:text-3xl">
            <span className="sec-n">04</span> Reviews you can actually trust
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every review is based on hands-on testing, cross-referenced user
            sentiment from G2, Reddit, and Capterra, and real pricing data. We
            report known bugs. We don&apos;t do paid placements.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/how-we-review"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              See How We Review
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              Our Methodology
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {["No paid placements", "Real bug reports", "Updated daily"].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-tier-c" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 10.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
