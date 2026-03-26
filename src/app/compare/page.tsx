import { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import CategoryIcon from "@/components/ui/CategoryIcon";

export const metadata: Metadata = {
  title: "Compare AI Tools",
  description:
    "Side-by-side comparisons of the best AI tools. Scores, pricing, features, and honest analysis.",
};

export default function ComparePage() {
  // Group tools by category for comparison suggestions
  const toolsByCategory = categories
    .map((cat) => ({
      category: cat,
      tools: tools.filter((t) => t.category === cat.slug),
    }))
    .filter((group) => group.tools.length >= 2);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-foreground">Compare AI Tools</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Head-to-head comparisons to help you pick the right tool.
      </p>

      {toolsByCategory.length > 0 ? (
        <div className="mt-8 space-y-8">
          {toolsByCategory.map((group) => (
            <div key={group.category.slug}>
              <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-foreground">
                <CategoryIcon slug={group.category.slug} size="sm" />
                {group.category.name}
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {/* Generate VS pairs */}
                {group.tools.map((toolA, i) =>
                  group.tools.slice(i + 1).map((toolB) => (
                    <Link
                      key={`${toolA.slug}-${toolB.slug}`}
                      href={`/compare/${toolA.slug}-vs-${toolB.slug}`}
                      className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition hover:border-primary/30 hover:shadow-sm"
                    >
                      <span className="font-medium text-foreground">
                        {toolA.name}
                      </span>
                      <span className="mx-2 text-sm font-bold text-muted-foreground">
                        vs
                      </span>
                      <span className="font-medium text-foreground">
                        {toolB.name}
                      </span>
                    </Link>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-border bg-muted/50 p-8 text-center">
          <p className="text-muted-foreground">
            Comparisons are coming soon. We need at least two reviewed tools per
            category to generate comparisons.
          </p>
        </div>
      )}
    </div>
  );
}
