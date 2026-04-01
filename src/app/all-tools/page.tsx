import { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { tools, getToolsByCategory } from "@/data/tools";
import { getTierForScore } from "@/lib/tiers";
import CategoryIcon from "@/components/ui/CategoryIcon";

export const metadata: Metadata = {
  title: "All AI Tools Reviewed — Complete Directory",
  description:
    "Browse all AI tools reviewed on AIToolTier. Organized by category with tier rankings, scores, and links to full reviews and comparisons.",
};

export default function AllToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-foreground">
        All AI Tools Directory
      </h1>
      <p className="mt-2 text-muted-foreground">
        {tools.length} tools reviewed across {categories.length} categories.
        Click any tool for the full review, or browse comparisons below.
      </p>

      {/* Category sections with all tools */}
      {categories.map((cat) => {
        const catTools = getToolsByCategory(cat.slug).sort(
          (a, b) => b.scores.overall - a.scores.overall
        );
        if (catTools.length === 0) return null;

        return (
          <section key={cat.slug} className="mt-10">
            <div className="flex items-center gap-3 mb-4">
              <CategoryIcon slug={cat.slug} size="md" />
              <h2 className="text-xl font-bold text-foreground">
                <Link
                  href={`/categories/${cat.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {cat.name}
                </Link>
              </h2>
              <span className="text-sm text-muted-foreground">
                ({catTools.length} tools)
              </span>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">Tool</th>
                    <th className="px-4 py-2 text-center font-semibold">
                      Tier
                    </th>
                    <th className="px-4 py-2 text-center font-semibold">
                      Score
                    </th>
                    <th className="px-4 py-2 text-center font-semibold hidden sm:table-cell">
                      Free Tier
                    </th>
                    <th className="px-4 py-2 text-left font-semibold hidden md:table-cell">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {catTools.map((tool) => {
                    const tier = getTierForScore(tool.scores.overall);
                    return (
                      <tr
                        key={tool.slug}
                        className="border-t border-border hover:bg-muted/50"
                      >
                        <td className="px-4 py-2">
                          <Link
                            href={`/tools/${tool.slug}`}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {tool.name}
                          </Link>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <span
                            className={`inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br ${tier.labelBg} text-xs font-black text-white`}
                          >
                            {tier.rank}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-center font-medium">
                          {tool.scores.overall.toFixed(1)}
                        </td>
                        <td className="px-4 py-2 text-center hidden sm:table-cell">
                          {tool.hasFreeTier ? "Yes" : "No"}
                        </td>
                        <td className="px-4 py-2 text-muted-foreground hidden md:table-cell max-w-xs truncate">
                          {tool.bestFor.slice(0, 80)}
                          {tool.bestFor.length > 80 ? "..." : ""}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Popular comparisons for this category */}
            {catTools.length > 1 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {catTools.slice(0, 4).flatMap((a, i) =>
                  catTools.slice(i + 1, i + 3).map((b) => (
                    <Link
                      key={`${a.slug}-${b.slug}`}
                      href={`/compare/${a.slug}-vs-${b.slug}`}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {a.name} vs {b.name}
                    </Link>
                  ))
                )}
              </div>
            )}
          </section>
        );
      })}

      {/* Quick links */}
      <section className="mt-12 rounded-lg border border-border bg-muted/50 p-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">
          Quick Links
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/compare"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Compare Tools
          </Link>
          <Link
            href="/how-we-review"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How We Review
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About Us
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
