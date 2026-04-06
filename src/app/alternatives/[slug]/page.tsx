import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolBySlug, getToolsByCategory } from "@/data/tools";
import { getCategoryBySlug } from "@/data/categories";
import { getTierForScore } from "@/lib/tiers";
import { getAffiliateUrl } from "@/lib/affiliates";
import { safeJsonLd } from "@/lib/structured-data";
import TierBadge from "@/components/ui/TierBadge";
import ToolLogo from "@/components/ui/ToolLogo";

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Not Found" };
  return {
    title: `Best ${tool.name} Alternatives (2026): Top Picks Ranked`,
    description: `Looking for ${tool.name} alternatives? We ranked and scored the best options. Side-by-side comparisons, pricing, and honest reviews.`,
  };
}

export default async function AlternativesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const category = getCategoryBySlug(tool.category);

  // Get same-category tools as primary alternatives
  const sameCategoryAlts = getToolsByCategory(tool.category)
    .filter((t) => t.slug !== tool.slug)
    .sort((a, b) => b.scores.overall - a.scores.overall);

  // Get tools from related categories that might be alternatives
  const allAlts = sameCategoryAlts;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best ${tool.name} Alternatives (2026)`,
    description: `Top alternatives to ${tool.name}, ranked by overall score.`,
    numberOfItems: allAlts.length,
    itemListElement: allAlts.map((alt, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: alt.name,
      url: `https://aitooltier.com/tools/${alt.slug}`,
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
        <Link href={`/tools/${tool.slug}`} className="hover:text-foreground">
          {tool.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Alternatives</span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground">
        Best {tool.name} Alternatives in 2026
      </h1>
      <p className="mt-2 text-muted-foreground">
        {tool.name} scores {tool.scores.overall.toFixed(1)}/10 on our tests.
        {allAlts.length > 0
          ? ` Here are ${allAlts.length} alternatives worth considering${
              category ? ` in the ${category.name} space` : ""
            }.`
          : " No direct alternatives found in the same category yet."}
      </p>

      {/* Original tool summary card */}
      <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4">
        <div className="flex items-center gap-3">
          <ToolLogo slug={tool.slug} name={tool.name} size="md" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-foreground">{tool.name}</h2>
              <TierBadge score={tool.scores.overall} size="sm" />
            </div>
            <p className="text-sm text-muted-foreground">{tool.tagline}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-foreground">
              {tool.scores.overall.toFixed(1)}
            </div>
            <div className="text-xs text-muted-foreground">Current pick</div>
          </div>
        </div>
      </div>

      {/* Alternatives list */}
      {allAlts.length > 0 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-bold text-foreground">
            Top Alternatives, Ranked
          </h2>
          {allAlts.map((alt, i) => {
            const tier = getTierForScore(alt.scores.overall);
            const scoreDiff = alt.scores.overall - tool.scores.overall;
            return (
              <div
                key={alt.slug}
                className={`rounded-lg border p-4 transition hover:shadow-sm ${tier.border} ${tier.bg}`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-sm font-bold text-foreground">
                    {i + 1}
                  </span>
                  <ToolLogo slug={alt.slug} name={alt.name} size="md" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/tools/${alt.slug}`}
                        className="font-semibold text-foreground hover:underline"
                      >
                        {alt.name}
                      </Link>
                      <TierBadge score={alt.scores.overall} size="sm" />
                      {scoreDiff > 0 && (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                          +{scoreDiff.toFixed(1)} higher
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {alt.tagline}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span>
                        Overall: {alt.scores.overall.toFixed(1)}/10
                      </span>
                      <span>
                        {alt.hasFreeTier ? "Free tier available" : "No free tier"}
                      </span>
                      <span>
                        From {alt.pricing[0]?.price}
                        {alt.pricing[0]?.period
                          ? `/${alt.pricing[0].period}`
                          : ""}
                      </span>
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <Link
                      href={`/compare/${
                        tool.slug < alt.slug
                          ? `${tool.slug}-vs-${alt.slug}`
                          : `${alt.slug}-vs-${tool.slug}`
                      }`}
                      className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted"
                    >
                      Compare
                    </Link>
                    <a
                      href={getAffiliateUrl(alt.slug, alt.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white transition hover:bg-primary-hover"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Score comparison table */}
      {allAlts.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-foreground">
            Score Comparison
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Tool</th>
                  <th className="px-3 py-2 text-center font-semibold">
                    Ease of Use
                  </th>
                  <th className="px-3 py-2 text-center font-semibold">
                    Output Quality
                  </th>
                  <th className="px-3 py-2 text-center font-semibold">Value</th>
                  <th className="px-3 py-2 text-center font-semibold">
                    Features
                  </th>
                  <th className="px-3 py-2 text-center font-semibold">
                    Overall
                  </th>
                </tr>
              </thead>
              <tbody>
                {[tool, ...allAlts].map((t) => (
                  <tr key={t.slug} className="border-t border-border">
                    <td className="px-3 py-2 font-medium">
                      <Link
                        href={`/tools/${t.slug}`}
                        className="hover:underline"
                      >
                        {t.name}
                      </Link>
                      {t.slug === tool.slug && (
                        <span className="ml-1 text-xs text-muted-foreground">
                          (current)
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {t.scores.easeOfUse.toFixed(1)}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {t.scores.outputQuality.toFixed(1)}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {t.scores.value.toFixed(1)}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {t.scores.features.toFixed(1)}
                    </td>
                    <td className="px-3 py-2 text-center font-bold">
                      {t.scores.overall.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-8 rounded-lg border border-primary/20 bg-blue-50 p-6 text-center">
        <h2 className="text-lg font-semibold text-foreground">
          Not sure which to pick?
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Read our full reviews or use the comparison tool to see how they stack
          up head-to-head.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <Link
            href={`/tools/${tool.slug}`}
            className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            Full {tool.name} Review
          </Link>
          {category && (
            <Link
              href={`/categories/${category.slug}`}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-hover"
            >
              All {category.name}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
