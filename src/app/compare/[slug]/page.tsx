import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolBySlug } from "@/data/tools";
import ScoreBadge from "@/components/ui/ScoreBadge";
import TierBadge from "@/components/ui/TierBadge";
import { getTierForScore } from "@/lib/tiers";
import { getAffiliateUrl } from "@/lib/affiliates";

// Generate all possible VS combinations
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (let i = 0; i < tools.length; i++) {
    for (let j = i + 1; j < tools.length; j++) {
      params.push({ slug: `${tools[i].slug}-vs-${tools[j].slug}` });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [slugA, slugB] = slug.split("-vs-");
  const toolA = getToolBySlug(slugA);
  const toolB = getToolBySlug(slugB);
  if (!toolA || !toolB) return { title: "Comparison Not Found" };
  return {
    title: `${toolA.name} vs ${toolB.name} (2026): Which Is Better?`,
    description: `Detailed comparison of ${toolA.name} and ${toolB.name}. Scores, pricing, pros and cons, and our recommendation.`,
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [slugA, slugB] = slug.split("-vs-");
  const toolA = getToolBySlug(slugA);
  const toolB = getToolBySlug(slugB);

  if (!toolA || !toolB) notFound();

  const winner =
    toolA.scores.overall >= toolB.scores.overall ? toolA : toolB;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/compare" className="hover:text-foreground">
          Compare
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">
          {toolA.name} vs {toolB.name}
        </span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground">
        {toolA.name} vs {toolB.name}
      </h1>
      <p className="mt-2 text-muted-foreground">
        Which one should you pick? Here&apos;s the full breakdown.
      </p>

      {/* Score comparison with tier badges */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
        {[toolA, toolB].map((tool) => {
          const tier = getTierForScore(tool.scores.overall);
          return (
            <div
              key={tool.slug}
              className={`rounded-xl border p-5 text-center sm:p-6 ${
                tool.slug === winner.slug
                  ? `${tier.border} ${tier.bg}`
                  : "border-border bg-card"
              }`}
            >
              {tool.slug === winner.slug && (
                <span className={`mb-3 inline-block rounded-full ${tier.labelBg} px-3 py-0.5 text-xs font-bold text-white`}>
                  Our Pick
                </span>
              )}
              <h2 className="text-xl font-bold text-foreground">{tool.name}</h2>
              <div className="mt-3 flex justify-center">
                <TierBadge score={tool.scores.overall} size="xl" showScore />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{tool.tagline}</p>
            </div>
          );
        })}
      </div>

      {/* Detailed score comparison table */}
      <div className="mt-8 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-2 py-2 text-left font-semibold sm:px-4 sm:py-3">Category</th>
              <th className="px-2 py-2 text-center font-semibold sm:px-4 sm:py-3">
                {toolA.name}
              </th>
              <th className="px-2 py-2 text-center font-semibold sm:px-4 sm:py-3">
                {toolB.name}
              </th>
            </tr>
          </thead>
          <tbody>
            {(
              [
                ["Ease of Use", "easeOfUse"],
                ["Output Quality", "outputQuality"],
                ["Value", "value"],
                ["Features", "features"],
                ["Overall", "overall"],
              ] as const
            ).map(([label, key]) => (
              <tr key={key} className="border-t border-border">
                <td className="px-2 py-2 font-medium text-foreground sm:px-4 sm:py-3">
                  {label}
                </td>
                <td className="px-2 py-2 text-center sm:px-4 sm:py-3">
                  <span
                    className={
                      toolA.scores[key] > toolB.scores[key]
                        ? "font-bold text-primary"
                        : "text-muted-foreground"
                    }
                  >
                    {toolA.scores[key].toFixed(1)}
                  </span>
                </td>
                <td className="px-2 py-2 text-center sm:px-4 sm:py-3">
                  <span
                    className={
                      toolB.scores[key] > toolA.scores[key]
                        ? "font-bold text-primary"
                        : "text-muted-foreground"
                    }
                  >
                    {toolB.scores[key].toFixed(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pricing comparison */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">
          Pricing Comparison
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-2 py-2 text-left font-semibold sm:px-4 sm:py-3">Feature</th>
                <th className="px-2 py-2 text-center font-semibold sm:px-4 sm:py-3">
                  {toolA.name}
                </th>
                <th className="px-2 py-2 text-center font-semibold sm:px-4 sm:py-3">
                  {toolB.name}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="px-2 py-2 font-medium sm:px-4 sm:py-3">Free Tier</td>
                <td className="px-2 py-2 text-center sm:px-4 sm:py-3">
                  {toolA.hasFreeTier ? "Yes" : "No"}
                </td>
                <td className="px-2 py-2 text-center sm:px-4 sm:py-3">
                  {toolB.hasFreeTier ? "Yes" : "No"}
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-2 py-2 font-medium sm:px-4 sm:py-3">Starting Price</td>
                <td className="px-2 py-2 text-center sm:px-4 sm:py-3">
                  {toolA.pricing[0]?.price}
                </td>
                <td className="px-2 py-2 text-center sm:px-4 sm:py-3">
                  {toolB.pricing[0]?.price}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Choose if */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[toolA, toolB].map((tool) => (
          <div
            key={tool.slug}
            className="rounded-lg border border-border bg-card p-5"
          >
            <h3 className="font-semibold text-foreground">
              Choose {tool.name} if...
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {tool.bestFor}
            </p>
            <a
              href={getAffiliateUrl(tool.slug, tool.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-xs font-medium text-white transition hover:bg-primary-hover"
            >
              Visit {tool.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
