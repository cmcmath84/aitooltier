import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import {
  BENCHMARK_PAGES,
  getBenchmarkPage,
  getRankedToolsForBenchmark,
} from "@/lib/benchmarks";
import { safeJsonLd } from "@/lib/structured-data";
import { getTierForScore } from "@/lib/tiers";

const BASE_URL = "https://aitooltier.com";

export async function generateStaticParams() {
  return BENCHMARK_PAGES.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getBenchmarkPage(slug);
  if (!page) return { title: "Benchmark Not Found" };
  return {
    title: `${page.name} Benchmark (2026): AI Leaderboard + Methodology`,
    description: `${page.tagline} Current leaderboard: top-scoring models on ${page.name} across 128 reviewed AI tools.`,
  };
}

export default async function BenchmarkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getBenchmarkPage(slug);
  if (!page) notFound();

  const ranked = getRankedToolsForBenchmark(page, tools);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Benchmarks",
        item: `${BASE_URL}/benchmarks`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.name,
        item: `${BASE_URL}/benchmarks/${page.slug}`,
      },
    ],
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${page.name} Leaderboard (2026)`,
    description: page.tagline,
    numberOfItems: ranked.length,
    itemListElement: ranked.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.tool.name,
      url: `${BASE_URL}/tools/${r.tool.slug}`,
    })),
  };

  const otherBenchmarks = BENCHMARK_PAGES.filter((b) => b.slug !== slug).slice(
    0,
    6,
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(itemList) }}
      />

      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/benchmarks" className="hover:underline">
          Benchmarks
        </Link>{" "}
        / <span className="text-foreground">{page.name}</span>
      </nav>

      <header className="mb-8">
        <div className="mb-2 inline-block rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
          {page.category}
        </div>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          {page.name}: 2026 AI Leaderboard
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{page.tagline}</p>
      </header>

      <section className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
            What it tests
          </h2>
          <p className="mt-2 text-sm text-foreground">{page.what}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
            How it is scored
          </h2>
          <p className="mt-2 text-sm text-foreground">{page.how}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
            Why it matters
          </h2>
          <p className="mt-2 text-sm text-foreground">{page.why}</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-1 text-xl font-black text-foreground">
          Leaderboard ({ranked.length} models)
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Sorted by {page.name} score. Tier column shows the tool&apos;s overall
          AIToolTier rank, which blends this benchmark with pricing, features,
          and real-world usability.
        </p>

        {ranked.length === 0 ? (
          <div className="rounded-lg border border-border bg-muted/50 p-8 text-center">
            <p className="text-muted-foreground">
              No AIToolTier-reviewed models currently have a published{" "}
              {page.name} score. Check back after the next sweep.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Model</th>
                  <th className="px-4 py-3">Tier</th>
                  <th className="px-4 py-3 text-right">
                    {page.name} score
                  </th>
                  <th className="hidden px-4 py-3 text-right sm:table-cell">
                    Variant
                  </th>
                  <th className="hidden px-4 py-3 text-right md:table-cell">
                    Overall
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {ranked.map((r, i) => {
                  const tier = getTierForScore(r.tool.scores.overall);
                  return (
                    <tr key={r.tool.slug} className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-mono text-muted-foreground">
                        {i + 1}
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/tools/${r.tool.slug}`}
                          className="font-semibold text-foreground hover:underline"
                        >
                          {r.tool.name}
                        </Link>
                        {r.tool.benchmarks?.modelName &&
                          r.tool.benchmarks.modelName !== r.tool.name && (
                            <div className="text-xs text-muted-foreground">
                              {r.tool.benchmarks.modelName}
                            </div>
                          )}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex h-6 w-6 items-center justify-center rounded text-xs font-bold ${tier.labelBg} ${tier.labelText}`}
                        >
                          {tier.rank}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-foreground">
                        {r.score.score}
                        {r.score.unit}
                      </td>
                      <td className="hidden px-4 py-3 text-right text-xs text-muted-foreground sm:table-cell">
                        {r.scoreVariant}
                      </td>
                      <td className="hidden px-4 py-3 text-right text-muted-foreground md:table-cell">
                        {r.tool.scores.overall.toFixed(1)}/10
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mb-10 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-lg font-bold text-foreground">
          About {page.name}
        </h2>
        <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Creator
            </dt>
            <dd className="text-foreground">{page.creator}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Unit
            </dt>
            <dd className="text-foreground">
              {page.unit} (max {page.maxScore})
            </dd>
          </div>
          {page.sourceUrl && (
            <div className="sm:col-span-2">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Official source
              </dt>
              <dd>
                <a
                  href={page.sourceUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-foreground underline"
                >
                  {page.sourceUrl}
                </a>
              </dd>
            </div>
          )}
        </dl>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold text-foreground">
          Other benchmarks
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {otherBenchmarks.map((b) => (
            <Link
              key={b.slug}
              href={`/benchmarks/${b.slug}`}
              className="rounded-lg border border-border bg-card p-3 text-sm font-medium text-foreground transition hover:border-foreground/20"
            >
              {b.name}
              <div className="mt-1 text-xs font-normal text-muted-foreground">
                {b.category}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
