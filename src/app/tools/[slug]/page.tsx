import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolBySlug, getToolsByCategory } from "@/data/tools";
import { getCategoryBySlug } from "@/data/categories";
import { getAffiliateUrl } from "@/lib/affiliates";
import { getTierForScore } from "@/lib/tiers";
import { toolPageJsonLd, safeJsonLd } from "@/lib/structured-data";
import ScoreBadge from "@/components/ui/ScoreBadge";
import TierBadge from "@/components/ui/TierBadge";
import ToolLogo from "@/components/ui/ToolLogo";
import ProsCons from "@/components/ui/ProsCons";
import BenchmarkTable from "@/components/ui/BenchmarkTable";
import ToolCard from "@/components/tools/ToolCard";

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
  if (!tool) return { title: "Tool Not Found" };
  return {
    title: tool.metaTitle || `${tool.name} Review`,
    description: tool.metaDescription || tool.tagline,
  };
}

export default async function ToolReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const category = getCategoryBySlug(tool.category);
  const relatedTools = getToolsByCategory(tool.category).filter(
    (t) => t.slug !== tool.slug
  );
  const visitUrl = getAffiliateUrl(tool.slug, tool.url);
  const tier = getTierForScore(tool.scores.overall);

  const jsonLdItems = toolPageJsonLd(tool, category || undefined);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {jsonLdItems.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(item) }}
        />
      ))}
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        {category && (
          <>
            <Link
              href={`/categories/${category.slug}`}
              className="hover:text-foreground"
            >
              {category.name}
            </Link>
            <span className="mx-2">/</span>
          </>
        )}
        <span className="text-foreground">{tool.name}</span>
      </nav>

      {/* Header with Tier */}
      <div className={`-mx-4 sm:-mx-6 lg:-mx-8 mb-8 rounded-xl border ${tier.border} ${tier.bg} p-6 sm:p-8`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <ToolLogo slug={tool.slug} name={tool.name} size="lg" />
              <TierBadge score={tool.scores.overall} size="lg" />
              <div>
                <h1 className="text-2xl font-black text-foreground sm:text-3xl">
                  {tool.name}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {tier.rank} Tier &middot; {tool.scores.overall.toFixed(1)}/10
                </p>
              </div>
            </div>
            <p className="mt-2 text-muted-foreground">{tool.tagline}</p>
            <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
              <span>Last updated: {tool.lastReviewedDate}</span>
              {tool.hasFreeTier && (
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                  Free tier available
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="mt-8 rounded-lg border border-border bg-muted/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Score Breakdown
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <ScoreBadge
            score={tool.scores.easeOfUse}
            size="md"
            label="Ease of Use"
          />
          <ScoreBadge
            score={tool.scores.outputQuality}
            size="md"
            label="Output Quality"
          />
          <ScoreBadge score={tool.scores.value} size="md" label="Value" />
          <ScoreBadge
            score={tool.scores.features}
            size="md"
            label="Features"
          />
        </div>
      </div>

      {/* Benchmark Scores */}
      {tool.benchmarks && (
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Benchmark Scores
          </h2>
          <BenchmarkTable benchmarks={tool.benchmarks} />
        </div>
      )}

      {/* Visit button */}
      <div className="mt-6">
        <a
          href={visitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
        >
          Visit {tool.name}
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>

      {/* Pros / Cons */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          The Good and the Bad
        </h2>
        <ProsCons pros={tool.pros} cons={tool.cons} />
      </div>

      {/* Pricing */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Pricing</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {tool.pricing.map((plan, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-card p-4"
            >
              <h3 className="font-semibold text-foreground">{plan.plan}</h3>
              <div className="mt-1 text-2xl font-bold text-primary">
                {plan.price}
                {plan.period && (
                  <span className="text-sm font-normal text-muted-foreground">
                    /{plan.period}
                  </span>
                )}
              </div>
              <ul className="mt-3 space-y-1">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-0.5 text-primary">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Known Issues */}
      {tool.knownIssues.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Known Issues
          </h2>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <ul className="space-y-3">
              {tool.knownIssues.map((issue, i) => (
                <li key={i} className="text-sm text-amber-900">
                  <span className="font-medium">{issue.description}</span>
                  <span className="mt-0.5 block text-xs text-amber-700">
                    Source: {issue.source} &middot; {issue.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Best For / Not For */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <h3 className="mb-2 font-semibold text-foreground">Best for</h3>
          <p className="text-sm text-muted-foreground">{tool.bestFor}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <h3 className="mb-2 font-semibold text-foreground">Not for</h3>
          <p className="text-sm text-muted-foreground">{tool.notFor}</p>
        </div>
      </div>

      {/* Verdict */}
      <div className="mt-8 rounded-lg border border-primary/20 bg-blue-50 p-6">
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          Our Verdict
        </h2>
        <p className="text-muted-foreground">{tool.verdict}</p>
      </div>

      {/* Data Sources */}
      <div className="mt-8 text-sm text-muted-foreground">
        <h3 className="font-semibold text-foreground">Sources</h3>
        <ul className="mt-2 space-y-1">
          {tool.dataSources.map((source, i) => (
            <li key={i}>
              {source.name} (accessed {source.dateAccessed})
            </li>
          ))}
        </ul>
      </div>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Alternatives to {tool.name}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relatedTools.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
