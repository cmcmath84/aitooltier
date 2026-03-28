import Link from "next/link";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { getTierForScore } from "@/lib/tiers";
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
  // Pick the top A-tier tool + 1 B-tier tool from each featured category
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

  const latestTools = [...tools]
    .sort(
      (a, b) =>
        new Date(b.lastReviewedDate).getTime() -
        new Date(a.lastReviewedDate).getTime()
    )
    .slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 px-4 py-16 sm:py-24">
        {/* Decorative tier strips */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <div className="flex flex-col gap-4 text-white">
            {["S", "A", "B", "C", "D"].map((t) => (
              <div key={t} className="text-[12rem] font-black leading-none">
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Updated daily with real data
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI Tools, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-emerald-400">Ranked by Tier</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Every tool tested, scored, and placed in its tier. We report the
            bugs, show the data, and tell you what actually works.
          </p>

          {/* Mini tier legend */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3">
            {[
              { rank: "S", color: "from-red-500 to-rose-600", label: "9+" },
              { rank: "A", color: "from-orange-500 to-amber-500", label: "8-9" },
              { rank: "B", color: "from-yellow-400 to-yellow-500 text-yellow-900", label: "7-8" },
              { rank: "C", color: "from-emerald-500 to-green-600", label: "6-7" },
              { rank: "D", color: "from-blue-500 to-indigo-500", label: "5-6" },
              { rank: "F", color: "from-gray-500 to-gray-600", label: "<5" },
            ].map((t) => (
              <div key={t.rank} className="flex flex-col items-center gap-1">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${t.color} text-sm font-black text-white shadow-lg sm:h-10 sm:w-10 sm:text-base`}
                >
                  {t.rank}
                </div>
                <span className="text-[10px] text-gray-500">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier List */}
      {tools.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-black text-foreground">
                The Tier List
              </h2>
              <p className="mt-1 text-muted-foreground">
                Top picks across 5 categories.
              </p>
            </div>
            <span className="text-xs text-muted-foreground">
              {tools.length} tools ranked total
            </span>
          </div>
          <div className="mt-6">
            <TierList tools={featuredTools} />
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/compare"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition hover:text-primary-hover"
            >
              View all {tools.length} tools
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* Category Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          Browse by Category
        </h2>
        <p className="mt-1 text-muted-foreground">
          Find tools for exactly what you need.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
            >
              <CategoryIcon slug={cat.slug} size="md" />
              <div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Reviews */}
      {latestTools.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">
            Latest Reviews
          </h2>
          <p className="mt-1 text-muted-foreground">
            Recently reviewed and updated.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      )}

      {/* Trust / How We Review CTA */}
      <section className="bg-muted px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Reviews You Can Actually Trust
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every review on AIToolTier is based on hands-on testing,
            cross-referenced user reviews from G2, Reddit, and Capterra, and
            real pricing data. We report known bugs and issues. We don&apos;t do
            paid placements.
          </p>
          <Link
            href="/how-we-review"
            className="mt-6 inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
          >
            See How We Review
          </Link>
        </div>
      </section>
    </div>
  );
}
