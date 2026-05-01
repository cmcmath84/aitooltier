import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolBySlug } from "@/data/tools";
import TierBadge from "@/components/ui/TierBadge";
import ToolLogo from "@/components/ui/ToolLogo";
import ScoreBars from "@/components/ui/ScoreBars";
import BenchmarkComparison from "@/components/ui/BenchmarkComparison";
import { getTierForScore } from "@/lib/tiers";
import { getAffiliateUrl } from "@/lib/affiliates";
import {
  generateRecommendations,
  generateVerdict,
  generateAtGlanceRows,
} from "@/lib/benchmarks";
import { comparePageJsonLd, safeJsonLd } from "@/lib/structured-data";

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
  const hasBenchmarks = toolA.benchmarks || toolB.benchmarks;
  const scoreA = toolA.scores.overall.toFixed(1);
  const scoreB = toolB.scores.overall.toFixed(1);
  const winner = toolA.scores.overall >= toolB.scores.overall ? toolA : toolB;
  const bothHavePersonality = !!(toolA.personality && toolB.personality);
  if (bothHavePersonality) {
    return {
      title: `${toolA.name} vs ${toolB.name} (2026): Personality, Scores & Verdict`,
      description: `${toolA.name} vs ${toolB.name} personality: ${toolA.personality!.oneLiner} vs ${toolB.personality!.oneLiner}. Compare tone, quirks, scores, pricing, and our 2026 verdict.`,
    };
  }
  return {
    title: `${toolA.name} vs ${toolB.name} (2026): Scores, Pricing & Verdict`,
    description: `${toolA.name} scores ${scoreA}/10 vs ${toolB.name} at ${scoreB}/10. Compare pricing, pros, cons${hasBenchmarks ? ", benchmarks," : ","} and why ${winner.name} wins head-to-head in 2026.`,
  };
}

// Format an ISO-ish lastReviewedDate ("2026-04-30") into a human label.
function formatReviewDate(iso: string): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return iso;
  const [, y, mm, dd] = m;
  return `${months[parseInt(mm, 10) - 1]} ${parseInt(dd, 10)}, ${y}`;
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

  const jsonLd = comparePageJsonLd(toolA, toolB);

  const winner =
    toolA.scores.overall >= toolB.scores.overall ? toolA : toolB;
  const winnerTier = getTierForScore(winner.scores.overall);
  const tierA = getTierForScore(toolA.scores.overall);
  const tierB = getTierForScore(toolB.scores.overall);
  const atGlance = generateAtGlanceRows(toolA, toolB);
  const recs = generateRecommendations(toolA, toolB);
  const verdictParagraphs = generateVerdict(toolA, toolB).split("\n\n");

  // Most-recent of the two review dates drives the freshness signal.
  const freshDate =
    toolA.lastReviewedDate >= toolB.lastReviewedDate
      ? toolA.lastReviewedDate
      : toolB.lastReviewedDate;

  // Compare pages to suggest at the bottom: the highest-scored tools NOT in this pair,
  // capped at 6, used to seed "Compare X vs..." cross-links.
  const otherTopTools = tools
    .filter((t) => t.slug !== toolA.slug && t.slug !== toolB.slug)
    .sort((a, b) => b.scores.overall - a.scores.overall)
    .slice(0, 6);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      {/* HERO VERSUS BAND */}
      <section
        className={`relative overflow-hidden border-b ${winnerTier.border} ${winnerTier.bg}`}
      >
        {/* Subtle radial pattern, no AI-slop neon */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
            color: "currentColor",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-8 lg:px-8">
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

          {/* Logo showdown */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6">
            <ToolBlock tool={toolA} winner={winner} align="right" />
            <div className="flex flex-col items-center">
              <span className="select-none bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-5xl">
                VS
              </span>
            </div>
            <ToolBlock tool={toolB} winner={winner} align="left" />
          </div>

          {/* Title + freshness pill */}
          <div className="mt-8 text-center">
            <h1 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              {toolA.name} vs {toolB.name}
            </h1>
            <p className="mt-2 text-pretty text-sm text-muted-foreground sm:text-base">
              Tier-list head-to-head. {winner.name} takes the {winnerTier.rank}
              -tier slot &mdash; here&apos;s the breakdown.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Last reviewed {formatReviewDate(freshDate)} &middot; sweep-fresh
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* AT A GLANCE */}
        <section className="mt-2">
          <SectionHeading kicker="Spec sheet" title="At a glance" />
          <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-muted/60">
                <tr>
                  <th className="w-1/4 px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:px-5 sm:py-4">
                    &nbsp;
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground sm:px-5 sm:py-4">
                    <span className="inline-flex items-center gap-2">
                      <ToolLogo
                        slug={toolA.slug}
                        name={toolA.name}
                        size="sm"
                      />
                      {toolA.name}
                    </span>
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground sm:px-5 sm:py-4">
                    <span className="inline-flex items-center gap-2">
                      <ToolLogo
                        slug={toolB.slug}
                        name={toolB.name}
                        size="sm"
                      />
                      {toolB.name}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {atGlance.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="px-3 py-3 align-top text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:px-5 sm:py-4">
                      {row.label}
                    </td>
                    <td
                      className={`px-3 py-3 align-top text-sm sm:px-5 sm:py-4 ${
                        row.highlight === "a"
                          ? "font-semibold text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {row.a}
                      {row.highlight === "a" && (
                        <span className="ml-2 inline-flex h-4 items-center rounded bg-primary/10 px-1.5 text-[10px] font-bold uppercase text-primary">
                          win
                        </span>
                      )}
                    </td>
                    <td
                      className={`px-3 py-3 align-top text-sm sm:px-5 sm:py-4 ${
                        row.highlight === "b"
                          ? "font-semibold text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {row.b}
                      {row.highlight === "b" && (
                        <span className="ml-2 inline-flex h-4 items-center rounded bg-primary/10 px-1.5 text-[10px] font-bold uppercase text-primary">
                          win
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SCORE SHOWDOWN -- visceral bars */}
        <section className="mt-12">
          <SectionHeading
            kicker="Head-to-head"
            title="Score showdown"
            sub="Rated 1-10 on the same rubric across all 130 tools we cover."
          />
          <div className="mt-6 rounded-xl border border-border bg-card p-5 shadow-sm sm:p-7">
            <ScoreBars toolA={toolA} toolB={toolB} />
          </div>
        </section>

        {/* PERSONALITY -- only when both have it */}
        {toolA.personality && toolB.personality && (
          <section className="mt-12">
            <SectionHeading
              kicker="Vibe check"
              title="Personality &amp; tone"
              sub="How each tool actually sounds when you talk to it."
            />
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[toolA, toolB].map((tool) => (
                <article
                  key={tool.slug}
                  className="relative rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6"
                >
                  <span className="absolute -top-3 left-5 rounded-full border border-border bg-card px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                    {tool.name}
                  </span>
                  <p className="text-lg font-bold text-foreground">
                    &ldquo;{tool.personality!.oneLiner}&rdquo;
                  </p>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                        Tone
                      </dt>
                      <dd className="mt-1 text-muted-foreground">
                        {tool.personality!.tone}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                        Quirks
                      </dt>
                      <dd className="mt-1 text-muted-foreground">
                        {tool.personality!.quirks}
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* PRICING SNAPSHOT */}
        <section className="mt-12">
          <SectionHeading
            kicker="What you'll pay"
            title="Pricing snapshot"
            sub="Look past the headline number -- entry-tier limits drive most cost surprises."
          />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[toolA, toolB].map((tool) => (
              <article
                key={tool.slug}
                className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6"
              >
                <header className="mb-4 flex items-center gap-3">
                  <ToolLogo slug={tool.slug} name={tool.name} size="md" />
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {tool.hasFreeTier ? "Free tier available" : "No free tier"}
                    </p>
                  </div>
                </header>
                <ul className="space-y-2 text-sm">
                  {tool.pricing.slice(0, 3).map((plan) => (
                    <li
                      key={plan.plan}
                      className="flex items-baseline justify-between gap-3 border-t border-border pt-2 first:border-t-0 first:pt-0"
                    >
                      <span className="truncate text-muted-foreground">
                        {plan.plan}
                      </span>
                      <span className="shrink-0 font-mono text-sm font-semibold text-foreground tabular-nums">
                        {plan.price}
                        {plan.period && (
                          <span className="ml-1 text-xs font-normal text-muted-foreground">
                            /{plan.period.replace(/^month$/, "mo")}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* BENCHMARK HEAD-TO-HEAD */}
        <section className="mt-12">
          <BenchmarkComparison toolA={toolA} toolB={toolB} />
        </section>

        {/* WHEN TO PICK X / WHEN TO PICK Y */}
        <section className="mt-12">
          <SectionHeading
            kicker="The decision"
            title="Which should you pick?"
            sub="Use-case anchors and category strengths, side by side."
          />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { tool: toolA, reasons: recs.pickA, tier: tierA },
              { tool: toolB, reasons: recs.pickB, tier: tierB },
            ].map(({ tool, reasons, tier }) => {
              const isWinner = tool.slug === winner.slug;
              return (
                <article
                  key={tool.slug}
                  className={`relative overflow-hidden rounded-xl border p-5 shadow-sm sm:p-6 ${
                    isWinner
                      ? `${tier.border} ${tier.bg}`
                      : "border-border bg-card"
                  }`}
                >
                  {isWinner && (
                    <span
                      className={`absolute right-4 top-4 inline-flex items-center gap-1 rounded-full ${tier.labelBg} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm`}
                    >
                      Our pick
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <ToolLogo slug={tool.slug} name={tool.name} size="lg" />
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        Pick {tool.name} if&hellip;
                      </h3>
                      <TierBadge score={tool.scores.overall} size="sm" showScore />
                    </div>
                  </div>

                  {reasons.length > 0 && (
                    <ul className="mt-4 space-y-2.5">
                      {reasons.map((r, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                              isWinner ? tier.labelBg : "bg-muted-foreground/40"
                            } text-[9px] font-bold text-white`}
                          >
                            &#10003;
                          </span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-4 border-t border-border pt-4 text-sm italic text-muted-foreground">
                    {tool.bestFor}
                  </p>

                  <a
                    href={getAffiliateUrl(tool.slug, tool.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary-hover"
                  >
                    Visit {tool.name}
                    <span aria-hidden>&rarr;</span>
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* THE VERDICT -- editorial */}
        <section className="mt-12">
          <SectionHeading kicker="Bottom line" title="The verdict" />
          <article className="relative mt-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-6 shadow-sm sm:p-8">
            <span
              aria-hidden
              className="absolute left-6 top-3 select-none font-serif text-7xl leading-none text-primary/15 sm:text-8xl"
            >
              &ldquo;
            </span>
            <div className="relative space-y-4 pt-6 text-base leading-relaxed text-foreground/90 sm:text-[17px]">
              {verdictParagraphs.map((p, i) => (
                <p key={i} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>
            <footer className="relative mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-border pt-4 text-xs text-muted-foreground">
              <span className="font-semibold uppercase tracking-wide">
                AIToolTier verdict
              </span>
              <span>Last reviewed {formatReviewDate(freshDate)}</span>
              <span>Tier rubric &middot; ease of use, output, value, features</span>
            </footer>
          </article>
        </section>

        {/* CROSS-LINKS / EXPLORE MORE */}
        <section className="mt-12">
          <SectionHeading
            kicker="Keep digging"
            title="Compare more &amp; explore"
          />
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ExploreCard
              title={`Full ${toolA.name} review`}
              href={`/tools/${toolA.slug}`}
              meta={`Tier ${tierA.rank} &middot; ${toolA.scores.overall.toFixed(1)}/10`}
            />
            <ExploreCard
              title={`Full ${toolB.name} review`}
              href={`/tools/${toolB.slug}`}
              meta={`Tier ${tierB.rank} &middot; ${toolB.scores.overall.toFixed(1)}/10`}
            />
            <ExploreCard
              title={`${toolA.name} alternatives`}
              href={`/alternatives/${toolA.slug}`}
              meta="Other tools in this lane"
            />
            <ExploreCard
              title={`${toolB.name} alternatives`}
              href={`/alternatives/${toolB.slug}`}
              meta="Other tools in this lane"
            />
          </div>

          {/* Pill-button row of head-to-head suggestions */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="mr-1 self-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Compare {toolA.name} vs:
            </span>
            {otherTopTools.slice(0, 4).map((t) => {
              const [first, second] =
                toolA.slug < t.slug
                  ? [toolA.slug, t.slug]
                  : [t.slug, toolA.slug];
              return (
                <Link
                  key={`a-${t.slug}`}
                  href={`/compare/${first}-vs-${second}`}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition hover:border-primary hover:text-primary"
                >
                  {t.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="mr-1 self-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Compare {toolB.name} vs:
            </span>
            {otherTopTools.slice(0, 4).map((t) => {
              const [first, second] =
                toolB.slug < t.slug
                  ? [toolB.slug, t.slug]
                  : [t.slug, toolB.slug];
              return (
                <Link
                  key={`b-${t.slug}`}
                  href={`/compare/${first}-vs-${second}`}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition hover:border-primary hover:text-primary"
                >
                  {t.name}
                </Link>
              );
            })}
          </div>
        </section>

        {/* METHODOLOGY MICRO-CALLOUT */}
        <section className="mt-10 rounded-xl border border-dashed border-border bg-muted/40 p-5 text-sm text-muted-foreground sm:p-6">
          <p>
            Built from our daily AI-tool sweep, last touched{" "}
            <span className="font-semibold text-foreground">
              {formatReviewDate(freshDate)}
            </span>
            . Honest tier-list reviews &mdash; no affiliate-link pieces
            disguised as advice.{" "}
            <Link
              href="/methodology"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              See the rubric
            </Link>{" "}
            or{" "}
            <Link
              href="/how-we-review"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              how we review
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

// --- Hero sub-components ---

function ToolBlock({
  tool,
  winner,
  align,
}: {
  tool: { slug: string; name: string; tagline: string; scores: { overall: number }; poweredBy?: string };
  winner: { slug: string };
  align: "left" | "right";
}) {
  const tier = getTierForScore(tool.scores.overall);
  const isWinner = tool.slug === winner.slug;
  return (
    <div
      className={`flex flex-col items-center gap-3 ${
        align === "right" ? "sm:items-end sm:text-right" : "sm:items-start sm:text-left"
      }`}
    >
      <div
        className={`relative rounded-2xl border-2 ${tier.border} bg-card p-3 shadow-md transition sm:p-4 ${
          isWinner ? `ring-2 ring-offset-2 ${tier.glow}` : "opacity-95"
        }`}
        style={{
          // Use tier border color via the existing class system; ring uses default.
        }}
      >
        <ToolLogo slug={tool.slug} name={tool.name} size="2xl" />
        {isWinner && (
          <span
            className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full ${tier.labelBg} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-md`}
          >
            Our pick
          </span>
        )}
      </div>
      <div className={`flex flex-col items-center gap-1 ${align === "right" ? "sm:items-end" : "sm:items-start"}`}>
        <TierBadge score={tool.scores.overall} size="md" showScore />
        <p className="max-w-[14rem] text-xs font-medium text-foreground sm:text-sm">
          {tool.name}
        </p>
        {tool.poweredBy && (
          <p className="hidden text-[10px] font-medium text-muted-foreground sm:block">
            {tool.poweredBy}
          </p>
        )}
      </div>
    </div>
  );
}

// --- Section heading helper ---

function SectionHeading({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub?: string;
}) {
  return (
    <header>
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
        {kicker}
      </p>
      <h2
        className="mt-1 text-2xl font-black tracking-tight text-foreground sm:text-3xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {sub && (
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{sub}</p>
      )}
    </header>
  );
}

// --- Explore card helper ---

function ExploreCard({
  title,
  href,
  meta,
}: {
  title: string;
  href: string;
  meta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition hover:border-primary hover:shadow-md"
    >
      <div>
        <p className="text-sm font-semibold text-foreground group-hover:text-primary">
          {title}
        </p>
        <p
          className="mt-0.5 text-xs text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: meta }}
        />
      </div>
      <span className="text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary">
        &rarr;
      </span>
    </Link>
  );
}
