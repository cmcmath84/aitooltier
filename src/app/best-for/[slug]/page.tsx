import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolsByCategory } from "@/data/tools";
import { useCases, getUseCaseBySlug } from "@/data/use-cases";
import { getTierForScore } from "@/lib/tiers";
import { getAffiliateUrl } from "@/lib/affiliates";
import { safeJsonLd } from "@/lib/structured-data";
import TierBadge from "@/components/ui/TierBadge";
import ToolLogo from "@/components/ui/ToolLogo";
import ScoreBadge from "@/components/ui/ScoreBadge";

export async function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) return { title: "Not Found" };
  return {
    title: useCase.metaTitle,
    description: useCase.metaDescription,
  };
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) notFound();

  // Collect tools from all relevant categories
  const toolSet = new Set<string>();
  const relevantTools = useCase.categories
    .flatMap((catSlug) => getToolsByCategory(catSlug))
    .filter((t) => {
      if (toolSet.has(t.slug)) return false;
      toolSet.add(t.slug);
      return true;
    });

  // Add featured tools that aren't already included
  const featuredExtras = (useCase.featuredTools || [])
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter((t) => t && !toolSet.has(t.slug)) as typeof tools;

  const allTools = [...relevantTools, ...featuredExtras].sort(
    (a, b) => b.scores.overall - a.scores.overall
  );

  const topPick = allTools[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: useCase.title,
    description: useCase.description,
    numberOfItems: allTools.length,
    itemListElement: allTools.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tool.name,
      url: `https://aitooltier.com/tools/${tool.slug}`,
    })),
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{useCase.title}</span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground">{useCase.title}</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        {useCase.description}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        {allTools.length} tools reviewed &middot; Last updated April 2026
      </p>

      {/* Top pick highlight */}
      {topPick && (
        <div className="mt-6 rounded-xl border-2 border-primary/30 bg-blue-50 p-6">
          <span className="rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-white">
            Top Pick
          </span>
          <div className="mt-3 flex items-center gap-3">
            <ToolLogo slug={topPick.slug} name={topPick.name} size="lg" />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground">
                {topPick.name}
              </h2>
              <p className="text-sm text-muted-foreground">{topPick.tagline}</p>
            </div>
            <TierBadge score={topPick.scores.overall} size="xl" showScore />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {topPick.verdict}
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href={`/tools/${topPick.slug}`}
              className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              Full Review
            </Link>
            <a
              href={getAffiliateUrl(topPick.slug, topPick.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-hover"
            >
              Visit {topPick.name}
            </a>
          </div>
        </div>
      )}

      {/* Full rankings */}
      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-bold text-foreground">
          All Tools Ranked
        </h2>
        {allTools.map((tool, i) => {
          const tier = getTierForScore(tool.scores.overall);
          return (
            <div
              key={tool.slug}
              className={`rounded-lg border p-4 ${tier.border} ${tier.bg}`}
            >
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-sm font-bold text-foreground">
                  #{i + 1}
                </span>
                <ToolLogo slug={tool.slug} name={tool.name} size="md" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="font-semibold text-foreground hover:underline"
                    >
                      {tool.name}
                    </Link>
                    <TierBadge score={tool.scores.overall} size="sm" />
                    {tool.hasFreeTier && (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                        Free tier
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tool.tagline}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <ScoreBadge
                      score={tool.scores.easeOfUse}
                      size="sm"
                      label="Ease"
                    />
                    <ScoreBadge
                      score={tool.scores.outputQuality}
                      size="sm"
                      label="Quality"
                    />
                    <ScoreBadge
                      score={tool.scores.value}
                      size="sm"
                      label="Value"
                    />
                    <ScoreBadge
                      score={tool.scores.features}
                      size="sm"
                      label="Features"
                    />
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <a
                    href={getAffiliateUrl(tool.slug, tool.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white transition hover:bg-primary-hover"
                  >
                    Visit
                  </a>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-xs text-primary hover:underline"
                  >
                    Full review
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison table */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">
          Quick Comparison
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Tool</th>
                <th className="px-3 py-2 text-center font-semibold">Tier</th>
                <th className="px-3 py-2 text-center font-semibold">Score</th>
                <th className="px-3 py-2 text-center font-semibold">Free?</th>
                <th className="px-3 py-2 text-center font-semibold">
                  Starting Price
                </th>
              </tr>
            </thead>
            <tbody>
              {allTools.map((tool) => (
                <tr key={tool.slug} className="border-t border-border">
                  <td className="px-3 py-2 font-medium">
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="hover:underline"
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
      </div>
    </div>
  );
}
