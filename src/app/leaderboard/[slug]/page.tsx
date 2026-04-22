import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools";
import {
  leaderboardSlug,
  getCategoryForLeaderboard,
  leaderboardTitle,
} from "@/lib/leaderboards";
import { getTierForScore, tiers } from "@/lib/tiers";
import { safeJsonLd } from "@/lib/structured-data";
import CategoryIcon from "@/components/ui/CategoryIcon";

const BASE_URL = "https://aitooltier.com";

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: leaderboardSlug(c.slug) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryForLeaderboard(slug);
  if (!category) return { title: "Leaderboard Not Found" };
  const label = leaderboardTitle(category);
  return {
    title: `Best ${category.name} (2026): Tier List Leaderboard`,
    description: `${label} ranked S through F in 2026. ${category.description} AIToolTier editorial ratings, no paid placements.`,
  };
}

export default async function LeaderboardDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryForLeaderboard(slug);
  if (!category) notFound();

  const categoryTools = getToolsByCategory(category.slug);
  const ranked = [...categoryTools].sort(
    (a, b) => b.scores.overall - a.scores.overall,
  );

  // Group into tiers.
  const byTier = tiers.map((t) => ({
    tier: t,
    tools: ranked.filter((tool) => getTierForScore(tool.scores.overall).rank === t.rank),
  }));

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
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `${BASE_URL}/leaderboard/${slug}`,
      },
    ],
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best ${category.name} (2026)`,
    description: category.description,
    numberOfItems: ranked.length,
    itemListElement: ranked.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tool.name,
      url: `${BASE_URL}/tools/${tool.slug}`,
    })),
  };

  const label = leaderboardTitle(category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
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
        <Link href="/leaderboard" className="hover:underline">
          Leaderboards
        </Link>{" "}
        / <span className="text-foreground">{category.name}</span>
      </nav>

      <header className="mb-8">
        <div className="mb-3">
          <CategoryIcon slug={category.slug} size="lg" />
        </div>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Best {label} (2026)
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          {category.description}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {ranked.length} tool{ranked.length !== 1 && "s"} ranked S through F.
        </p>
      </header>

      {ranked.length === 0 ? (
        <div className="rounded-lg border border-border bg-muted/50 p-8 text-center">
          <p className="text-muted-foreground">
            Rankings for this category are coming soon.
          </p>
        </div>
      ) : (
        <>
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-black text-foreground">
              Tier rankings
            </h2>
            <div className="space-y-3">
              {byTier
                .filter((t) => t.tools.length > 0)
                .map(({ tier, tools: tierTools }) => (
                  <div
                    key={tier.rank}
                    className={`flex gap-4 rounded-xl border ${tier.border} ${tier.bg} p-4`}
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg text-xl font-black ${tier.labelBg} ${tier.labelText}`}
                    >
                      {tier.rank}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {tierTools.map((tool) => (
                        <Link
                          key={tool.slug}
                          href={`/tools/${tool.slug}`}
                          className="rounded-md border border-border bg-white px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-foreground/30 hover:shadow-sm dark:bg-card"
                        >
                          {tool.name}
                          <span className="ml-2 font-mono text-xs text-muted-foreground">
                            {tool.scores.overall.toFixed(1)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-1 text-xl font-black text-foreground">
              Full ranking
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Sorted by overall score. Click any tool for the full review.
            </p>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Tool</th>
                    <th className="px-4 py-3">Tier</th>
                    <th className="px-4 py-3 text-right">Overall</th>
                    <th className="hidden px-4 py-3 text-right sm:table-cell">
                      Ease
                    </th>
                    <th className="hidden px-4 py-3 text-right sm:table-cell">
                      Output
                    </th>
                    <th className="hidden px-4 py-3 text-right md:table-cell">
                      Value
                    </th>
                    <th className="hidden px-4 py-3 text-right md:table-cell">
                      Features
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {ranked.map((tool, i) => {
                    const tier = getTierForScore(tool.scores.overall);
                    return (
                      <tr key={tool.slug} className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-mono text-muted-foreground">
                          {i + 1}
                        </td>
                        <td className="px-4 py-3">
                          <Link
                            href={`/tools/${tool.slug}`}
                            className="font-semibold text-foreground hover:underline"
                          >
                            {tool.name}
                          </Link>
                          <div className="truncate text-xs text-muted-foreground">
                            {tool.tagline}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex h-6 w-6 items-center justify-center rounded text-xs font-bold ${tier.labelBg} ${tier.labelText}`}
                          >
                            {tier.rank}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right font-mono font-bold text-foreground">
                          {tool.scores.overall.toFixed(1)}
                        </td>
                        <td className="hidden px-4 py-3 text-right text-muted-foreground sm:table-cell">
                          {tool.scores.easeOfUse}
                        </td>
                        <td className="hidden px-4 py-3 text-right text-muted-foreground sm:table-cell">
                          {tool.scores.outputQuality}
                        </td>
                        <td className="hidden px-4 py-3 text-right text-muted-foreground md:table-cell">
                          {tool.scores.value}
                        </td>
                        <td className="hidden px-4 py-3 text-right text-muted-foreground md:table-cell">
                          {tool.scores.features}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}

      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-foreground">
          Other leaderboards
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories
            .filter((c) => c.slug !== category.slug)
            .slice(0, 8)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/leaderboard/${leaderboardSlug(c.slug)}`}
                className="rounded-lg border border-border bg-card p-3 text-sm font-medium text-foreground transition hover:border-foreground/20"
              >
                {c.name}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
