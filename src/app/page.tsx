import Link from "next/link";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { getTierForScore } from "@/lib/tiers";
import { homepageJsonLd, safeJsonLd } from "@/lib/structured-data";
import TierList from "@/components/ui/TierList";
import ToolCard from "@/components/tools/ToolCard";
import CategoryIcon from "@/components/ui/CategoryIcon";

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

  const latestTools = [...tools]
    .sort(
      (a, b) =>
        new Date(b.lastReviewedDate).getTime() -
        new Date(a.lastReviewedDate).getTime()
    )
    .slice(0, 6);

  const jsonLdItems = homepageJsonLd(tools.length);

  const totalComparisons = (tools.length * (tools.length - 1)) / 2;

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
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-slate-900 px-4 py-20 sm:py-28">
        {/* Animated gradient orbs */}
        <div className="gradient-orb animate-float" style={{ width: 500, height: 500, top: -100, left: -100, background: 'radial-gradient(circle, rgba(239,68,68,0.5), transparent)' }} />
        <div className="gradient-orb animate-float-slow" style={{ width: 400, height: 400, top: 50, right: -50, background: 'radial-gradient(circle, rgba(59,130,246,0.5), transparent)' }} />
        <div className="gradient-orb animate-float-delay" style={{ width: 300, height: 300, bottom: -50, left: '40%', background: 'radial-gradient(circle, rgba(16,185,129,0.4), transparent)' }} />

        {/* Grid pattern overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Status badge */}
          <div className="fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Updated daily with real data
          </div>

          {/* Title with gradient shimmer */}
          <h1 className="fade-in-up-d1 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            AI Tools,{" "}
            <span className="text-shimmer text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 via-yellow-300 to-emerald-400">
              Ranked by Tier
            </span>
          </h1>

          <p className="fade-in-up-d2 mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
            Every tool tested, scored, and placed in its tier. We report the
            bugs, show the data, and tell you what actually works.
          </p>

          {/* CTA buttons */}
          <div className="fade-in-up-d3 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-hover hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Compare Tools
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/all-tools"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-300 backdrop-blur-sm transition hover:bg-white/10 hover:-translate-y-0.5"
            >
              View All {tools.length} Tools
            </Link>
          </div>

          {/* Mini tier legend */}
          <div className="fade-in-up-d4 mt-12 flex items-center justify-center gap-2 sm:gap-4">
            {[
              { rank: "S", color: "from-red-500 to-rose-600", label: "9+" },
              { rank: "A", color: "from-orange-500 to-amber-500", label: "8-9" },
              { rank: "B", color: "from-yellow-400 to-yellow-500 text-yellow-900", label: "7-8" },
              { rank: "C", color: "from-emerald-500 to-green-600", label: "6-7" },
              { rank: "D", color: "from-blue-500 to-indigo-500", label: "5-6" },
              { rank: "F", color: "from-gray-500 to-gray-600", label: "<5" },
            ].map((t) => (
              <div key={t.rank} className="group flex flex-col items-center gap-1.5 transition-transform hover:scale-110">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${t.color} text-sm font-black text-white shadow-lg transition-shadow group-hover:shadow-xl sm:h-12 sm:w-12 sm:text-base`}
                >
                  {t.rank}
                </div>
                <span className="text-[10px] text-gray-500">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="relative -mt-6 z-10 mx-auto max-w-4xl px-4">
        <div className="fade-in-up-d5 flex items-center justify-around rounded-2xl border border-border bg-white px-6 py-5 shadow-xl shadow-black/5">
          {[
            { value: tools.length.toString(), label: "Tools Ranked" },
            { value: categories.length.toString(), label: "Categories" },
            { value: totalComparisons.toLocaleString() + "+", label: "Comparisons" },
            { value: "Daily", label: "Updates" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-foreground sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
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
              <h2 className="text-2xl font-black text-foreground sm:text-3xl">
                The Tier List
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
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
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
          <h2 className="text-2xl font-black text-foreground sm:text-3xl">
            Browse by Category
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
                  className="card-shine group flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-4 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
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
              <h2 className="text-2xl font-black text-foreground sm:text-3xl">
                Latest Reviews
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 px-4 py-20">
        {/* Decorative gradient */}
        <div className="gradient-orb animate-float-slow" style={{ width: 400, height: 400, top: -100, right: -100, background: 'radial-gradient(circle, rgba(37,99,235,0.4), transparent)' }} />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-black text-white sm:text-3xl">
            Reviews You Can Actually Trust
          </h2>
          <p className="mt-4 text-gray-400 sm:text-lg">
            Every review on AIToolTier is based on hands-on testing,
            cross-referenced user reviews from G2, Reddit, and Capterra, and
            real pricing data. We report known bugs and issues. We don&apos;t do
            paid placements.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/how-we-review"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-hover hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              See How We Review
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-300 backdrop-blur-sm transition hover:bg-white/10 hover:-translate-y-0.5"
            >
              Our Methodology
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex items-center justify-center gap-8 text-gray-500">
            {[
              { icon: "&#10003;", text: "No paid placements" },
              { icon: "&#10003;", text: "Real bug reports" },
              { icon: "&#10003;", text: "Updated daily" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
