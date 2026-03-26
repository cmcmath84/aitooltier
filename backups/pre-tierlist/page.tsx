import Link from "next/link";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import ComparisonTable from "@/components/ui/ComparisonTable";
import ToolCard from "@/components/tools/ToolCard";
import CategoryIcon from "@/components/ui/CategoryIcon";

export default function Home() {
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
      <section className="bg-gradient-to-b from-muted to-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Find the Best AI Tool for Any Task
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Honest reviews backed by real data. We test every tool, report the
            bugs, and tell you what actually works — no fluff, no paid rankings.
          </p>
        </div>
      </section>

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

      {/* Top Rated Table */}
      {tools.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">
            Top Rated AI Tools
          </h2>
          <p className="mt-1 text-muted-foreground">
            Our highest-scoring tools across all categories.
          </p>
          <div className="mt-6">
            <ComparisonTable tools={tools} showCategory />
          </div>
        </section>
      )}

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
