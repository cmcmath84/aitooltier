import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolsByCategory } from "@/data/tools";
import { professions, getProfessionBySlug } from "@/data/professions";
import { getCategoryBySlug } from "@/data/categories";
import { getTierForScore } from "@/lib/tiers";
import { getAffiliateUrl } from "@/lib/affiliates";
import { safeJsonLd } from "@/lib/structured-data";
import TierBadge from "@/components/ui/TierBadge";
import ToolLogo from "@/components/ui/ToolLogo";
import ScoreBadge from "@/components/ui/ScoreBadge";

export async function generateStaticParams() {
  return professions.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const profession = getProfessionBySlug(slug);
  if (!profession) return { title: "Not Found" };
  return {
    title: profession.metaTitle,
    description: profession.metaDescription,
  };
}

export default async function ProfessionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profession = getProfessionBySlug(slug);
  if (!profession) notFound();

  // Collect tools from all relevant categories, deduped
  const toolSet = new Set<string>();
  const categoryTools: { category: string; tools: typeof tools }[] = [];

  for (const catSlug of profession.categories) {
    const category = getCategoryBySlug(catSlug);
    const catTools = getToolsByCategory(catSlug)
      .filter((t) => {
        if (toolSet.has(t.slug)) return false;
        toolSet.add(t.slug);
        return true;
      })
      .sort((a, b) => b.scores.overall - a.scores.overall);

    if (catTools.length > 0 && category) {
      categoryTools.push({ category: category.name, tools: catTools });
    }
  }

  // Add featured tools
  const featuredExtras = (profession.featuredTools || [])
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter((t) => t && !toolSet.has(t.slug)) as typeof tools;

  const allTools = [
    ...categoryTools.flatMap((ct) => ct.tools),
    ...featuredExtras,
  ].sort((a, b) => b.scores.overall - a.scores.overall);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: profession.title,
    description: profession.description,
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
        <span className="text-foreground">{profession.title}</span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground">
        {profession.title}
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        {profession.description}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        {allTools.length} tools reviewed &middot; Last updated April 2026
      </p>

      {/* Top 3 picks */}
      {allTools.length >= 3 && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {allTools.slice(0, 3).map((tool, i) => {
            const tier = getTierForScore(tool.scores.overall);
            const labels = ["Best Overall", "Runner Up", "Best Value"];
            return (
              <div
                key={tool.slug}
                className={`rounded-lg border p-4 ${tier.border} ${tier.bg}`}
              >
                <span
                  className={`rounded-full ${
                    i === 0 ? "bg-primary" : "bg-foreground/20"
                  } px-2.5 py-0.5 text-xs font-bold ${
                    i === 0 ? "text-white" : "text-foreground"
                  }`}
                >
                  {labels[i]}
                </span>
                <div className="mt-3 flex items-center gap-2">
                  <ToolLogo slug={tool.slug} name={tool.name} size="md" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {tool.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <TierBadge score={tool.scores.overall} size="sm" />
                      <span className="text-sm font-bold text-foreground">
                        {tool.scores.overall.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {tool.bestFor}
                </p>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="mt-3 inline-block text-xs font-medium text-primary hover:underline"
                >
                  Read review
                </Link>
              </div>
            );
          })}
        </div>
      )}

      {/* Tools by category */}
      {categoryTools.map(({ category, tools: catTools }) => (
        <div key={category} className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-foreground">
            {category}
          </h2>
          <div className="space-y-3">
            {catTools.map((tool, i) => {
              const tier = getTierForScore(tool.scores.overall);
              return (
                <div
                  key={tool.slug}
                  className={`rounded-lg border p-4 ${tier.border} ${tier.bg}`}
                >
                  <div className="flex items-start gap-3">
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
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-lg font-bold text-foreground">
                        {tool.scores.overall.toFixed(1)}
                      </div>
                      <a
                        href={getAffiliateUrl(tool.slug, tool.url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block rounded-md bg-primary px-3 py-1 text-xs font-medium text-white transition hover:bg-primary-hover"
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Full comparison table */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">
          Full Comparison
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Tool</th>
                <th className="px-3 py-2 text-center font-semibold">Score</th>
                <th className="px-3 py-2 text-center font-semibold">Free?</th>
                <th className="px-3 py-2 text-center font-semibold">Price</th>
                <th className="px-3 py-2 text-center font-semibold">Value</th>
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
                  <td className="px-3 py-2 text-center font-bold">
                    {tool.scores.overall.toFixed(1)}
                  </td>
                  <td className="px-3 py-2 text-center">
                    {tool.hasFreeTier ? "Yes" : "No"}
                  </td>
                  <td className="px-3 py-2 text-center">
                    {tool.pricing[0]?.price}
                    {tool.pricing[0]?.period
                      ? `/${tool.pricing[0].period}`
                      : ""}
                  </td>
                  <td className="px-3 py-2 text-center">
                    {tool.scores.value}/10
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
