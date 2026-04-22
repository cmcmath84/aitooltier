import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolBySlug, getToolsByCategory } from "@/data/tools";
import { getCategoryBySlug } from "@/data/categories";
import { getAffiliateUrl } from "@/lib/affiliates";
import { getTierForScore } from "@/lib/tiers";
import { toolPageJsonLd, safeJsonLd } from "@/lib/structured-data";
import { BENCHMARK_PAGES } from "@/lib/benchmarks";
import { leaderboardSlug } from "@/lib/leaderboards";
import { tasks } from "@/data/tasks";
import ScoreBadge from "@/components/ui/ScoreBadge";
import TierBadge from "@/components/ui/TierBadge";
import ToolLogo from "@/components/ui/ToolLogo";
import ProsCons from "@/components/ui/ProsCons";
import BenchmarkTable from "@/components/ui/BenchmarkTable";
import ToolCard from "@/components/tools/ToolCard";

const BASE_URL = "https://aitooltier.com";

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
  const canonical = `${BASE_URL}/tools/${tool.slug}`;
  const title = tool.metaTitle || `${tool.name} Review`;
  const description = tool.metaDescription || tool.tagline;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      siteName: "AIToolTier",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
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

  // Tasks whose primary categories include this tool's category. Used to
  // expose the new /for-task/ hub from the tool page so Google crawls both.
  const relatedTasks = tasks
    .filter((t) => t.primaryCategories.includes(tool.category))
    .slice(0, 3);

  // Benchmarks this tool has scores on, matched by alias.
  const relatedBenchmarks = tool.benchmarks
    ? BENCHMARK_PAGES.filter((b) =>
        tool.benchmarks!.scores.some((s) => b.aliases.includes(s.name)),
      ).slice(0, 4)
    : [];

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
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>Last updated: {tool.lastReviewedDate}</span>
              {tool.hasFreeTier && (
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                  Free tier available
                </span>
              )}
              {tool.poweredBy && (
                <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">
                  Powered by {tool.poweredBy}
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

      {/* Personality & Tone (conversational tools only) */}
      {tool.personality && (
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Personality &amp; Tone
          </h2>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-base font-semibold text-foreground">
              {tool.personality.oneLiner}
            </p>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Tone: </span>
                {tool.personality.tone}
              </p>
              <p>
                <span className="font-medium text-foreground">Quirks: </span>
                {tool.personality.quirks}
              </p>
            </div>
          </div>
        </div>
      )}

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

      {/* System Requirements (local LLMs only) */}
      {tool.systemRequirements && tool.systemRequirements.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            System Requirements
          </h2>
          <p className="mb-3 text-sm text-muted-foreground">
            Hardware needed to self-host. Min = smallest viable setup (usually
            heavy quantization). Max = full-precision / production-grade.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-2 font-semibold">Model variant</th>
                  <th className="px-4 py-2 font-semibold">Min</th>
                  <th className="px-4 py-2 font-semibold">Max</th>
                </tr>
              </thead>
              <tbody>
                {tool.systemRequirements.map((req, i) => (
                  <tr
                    key={i}
                    className="border-t border-border align-top odd:bg-background even:bg-muted/20"
                  >
                    <td className="px-4 py-3 font-medium text-foreground">
                      {req.variant}
                      {req.notes && (
                        <span className="mt-1 block text-xs font-normal text-muted-foreground">
                          {req.notes}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {req.min}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {req.max}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

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

      {/* Explore more rankings */}
      <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6">
        <h2 className="mb-1 text-lg font-bold text-foreground">
          Explore more {tool.name} rankings
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Deeper leaderboards, benchmarks, task-specific tier lists, and
          status/pricing pages for {tool.name}.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {category && (
            <Link
              href={`/leaderboard/${leaderboardSlug(category.slug)}`}
              className="rounded-lg border border-border bg-card p-3 transition hover:border-foreground/20"
            >
              <div className="text-sm font-medium text-foreground">
                Full {category.name} tier list
              </div>
              <div className="text-xs text-muted-foreground">
                Where {tool.name} ranks vs every competitor in its category
              </div>
            </Link>
          )}
          {relatedBenchmarks.map((b) => (
            <Link
              key={b.slug}
              href={`/benchmarks/${b.slug}`}
              className="rounded-lg border border-border bg-card p-3 transition hover:border-foreground/20"
            >
              <div className="text-sm font-medium text-foreground">
                {b.name} leaderboard
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {b.tagline}
              </div>
            </Link>
          ))}
          {relatedTasks.map((task) => (
            <Link
              key={task.slug}
              href={`/for-task/${task.slug}`}
              className="rounded-lg border border-border bg-card p-3 transition hover:border-foreground/20"
            >
              <div className="text-sm font-medium text-foreground">
                Best AI tools to {task.name.toLowerCase()}
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {task.description}
              </div>
            </Link>
          ))}
          <Link
            href={`/is-it-down/${tool.slug}`}
            className="rounded-lg border border-border bg-card p-3 transition hover:border-foreground/20"
          >
            <div className="text-sm font-medium text-foreground">
              Is {tool.name} down?
            </div>
            <div className="text-xs text-muted-foreground">
              Outage check plus rolling log of known issues
            </div>
          </Link>
          <Link
            href={`/pricing/${tool.slug}`}
            className="rounded-lg border border-border bg-card p-3 transition hover:border-foreground/20"
          >
            <div className="text-sm font-medium text-foreground">
              {tool.name} pricing
            </div>
            <div className="text-xs text-muted-foreground">
              Every tier and what&apos;s included
            </div>
          </Link>
          <Link
            href={`/alternatives/${tool.slug}`}
            className="rounded-lg border border-border bg-card p-3 transition hover:border-foreground/20"
          >
            <div className="text-sm font-medium text-foreground">
              {tool.name} alternatives
            </div>
            <div className="text-xs text-muted-foreground">
              Comparable tools at every tier
            </div>
          </Link>
        </div>
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
