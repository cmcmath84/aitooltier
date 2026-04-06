import { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { getCategoryBySlug } from "@/data/categories";
import { getTierForScore } from "@/lib/tiers";
import TierBadge from "@/components/ui/TierBadge";
import ToolLogo from "@/components/ui/ToolLogo";

export const metadata: Metadata = {
  title: "Trending AI Tools (2026): Recently Updated & Rising",
  description:
    "See which AI tools were recently updated, newly added, or seeing the most interest. Updated daily.",
};

export default function TrendingPage() {
  // Sort by most recently reviewed
  const recentlyUpdated = [...tools]
    .sort(
      (a, b) =>
        new Date(b.lastReviewedDate).getTime() -
        new Date(a.lastReviewedDate).getTime()
    )
    .slice(0, 15);

  // Highest scoring tools
  const topRated = [...tools]
    .sort((a, b) => b.scores.overall - a.scores.overall)
    .slice(0, 10);

  // Best value tools (highest value score)
  const bestValue = [...tools]
    .sort((a, b) => b.scores.value - a.scores.value)
    .slice(0, 10);

  // New additions (most recently reviewed that are also recent dates)
  const newAdditions = [...tools]
    .sort(
      (a, b) =>
        new Date(b.lastReviewedDate).getTime() -
        new Date(a.lastReviewedDate).getTime()
    )
    .slice(0, 10);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Trending</span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground">
        Trending AI Tools
      </h1>
      <p className="mt-2 text-muted-foreground">
        Recently updated reviews, top-rated tools, and best value picks. Updated
        daily.
      </p>

      {/* Recently Updated */}
      <section className="mt-8">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Recently Updated
        </h2>
        <div className="space-y-3">
          {recentlyUpdated.map((tool) => {
            const tier = getTierForScore(tool.scores.overall);
            const category = getCategoryBySlug(tool.category);
            return (
              <div
                key={tool.slug}
                className={`rounded-lg border p-3 ${tier.border} ${tier.bg}`}
              >
                <div className="flex items-center gap-3">
                  <ToolLogo slug={tool.slug} name={tool.name} size="sm" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/tools/${tool.slug}`}
                        className="font-semibold text-foreground hover:underline"
                      >
                        {tool.name}
                      </Link>
                      <TierBadge score={tool.scores.overall} size="sm" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {category?.name} &middot; Updated{" "}
                      {tool.lastReviewedDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-foreground">
                      {tool.scores.overall.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Top Rated */}
      <section className="mt-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
          Highest Rated
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">#</th>
                <th className="px-3 py-2 text-left font-semibold">Tool</th>
                <th className="px-3 py-2 text-center font-semibold">Tier</th>
                <th className="px-3 py-2 text-center font-semibold">Score</th>
                <th className="px-3 py-2 text-center font-semibold">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {topRated.map((tool, i) => {
                const category = getCategoryBySlug(tool.category);
                return (
                  <tr key={tool.slug} className="border-t border-border">
                    <td className="px-3 py-2 font-bold text-foreground">
                      {i + 1}
                    </td>
                    <td className="px-3 py-2">
                      <Link
                        href={`/tools/${tool.slug}`}
                        className="font-medium text-foreground hover:underline"
                      >
                        {tool.name}
                      </Link>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <TierBadge score={tool.scores.overall} size="sm" />
                    </td>
                    <td className="px-3 py-2 text-center font-bold">
                      {tool.scores.overall.toFixed(1)}
                    </td>
                    <td className="px-3 py-2 text-center text-muted-foreground">
                      {category?.name}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Value */}
      <section className="mt-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
          Best Value
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">#</th>
                <th className="px-3 py-2 text-left font-semibold">Tool</th>
                <th className="px-3 py-2 text-center font-semibold">
                  Value Score
                </th>
                <th className="px-3 py-2 text-center font-semibold">
                  Free Tier?
                </th>
                <th className="px-3 py-2 text-center font-semibold">
                  Starting Price
                </th>
              </tr>
            </thead>
            <tbody>
              {bestValue.map((tool, i) => (
                <tr key={tool.slug} className="border-t border-border">
                  <td className="px-3 py-2 font-bold text-foreground">
                    {i + 1}
                  </td>
                  <td className="px-3 py-2">
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="font-medium text-foreground hover:underline"
                    >
                      {tool.name}
                    </Link>
                  </td>
                  <td className="px-3 py-2 text-center font-bold">
                    {tool.scores.value}/10
                  </td>
                  <td className="px-3 py-2 text-center">
                    {tool.hasFreeTier ? (
                      <span className="text-emerald-600">Yes</span>
                    ) : (
                      <span className="text-red-500">No</span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-center">
                    {tool.pricing[0]?.price}
                    {tool.pricing[0]?.period
                      ? `/${tool.pricing[0].period}`
                      : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Browse all */}
      <div className="mt-8 text-center">
        <Link
          href="/all-tools"
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
        >
          Browse All Tools
        </Link>
      </div>
    </div>
  );
}
