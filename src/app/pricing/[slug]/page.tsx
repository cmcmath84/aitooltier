import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolBySlug, getToolsByCategory } from "@/data/tools";
import { getCategoryBySlug } from "@/data/categories";
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
    title: `${tool.name} Pricing (2026): Plans, Costs & Free Tier`,
    description: `${tool.name} pricing breakdown. ${
      tool.hasFreeTier ? "Free tier available. " : ""
    }Compare all plans, features, and costs. Updated ${tool.lastReviewedDate}.`,
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const category = getCategoryBySlug(tool.category);
  const visitUrl = getAffiliateUrl(tool.slug, tool.url);

  // Get competitor pricing for comparison
  const competitors = getToolsByCategory(tool.category)
    .filter((t) => t.slug !== tool.slug)
    .sort((a, b) => b.scores.overall - a.scores.overall)
    .slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: tool.name,
    description: tool.tagline,
    url: tool.url,
    offers: tool.pricing.map((plan) => ({
      "@type": "Offer",
      name: plan.plan,
      price: plan.price === "$0" || plan.price === "Free" ? "0" : plan.price.replace("$", ""),
      priceCurrency: "USD",
      ...(plan.period ? { billingDuration: plan.period } : {}),
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
        <span className="text-foreground">Pricing</span>
      </nav>

      {/* Header */}
      <div className="flex items-center gap-3">
        <ToolLogo slug={tool.slug} name={tool.name} size="lg" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {tool.name} Pricing
          </h1>
          <p className="mt-1 text-muted-foreground">
            All plans and pricing as of {tool.lastReviewedDate}
          </p>
        </div>
      </div>

      {/* Quick summary */}
      <div className="mt-6 flex flex-wrap gap-3">
        {tool.hasFreeTier && (
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
            Free tier available
          </span>
        )}
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
          {tool.pricing.length} plan{tool.pricing.length !== 1 ? "s" : ""}
        </span>
        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
          {getTierLabel(tool.scores.value)} value score ({tool.scores.value}/10)
        </span>
      </div>

      {/* Pricing cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tool.pricing.map((plan, i) => {
          const isFree = plan.price === "$0" || plan.price === "Free";
          const isMostPopular =
            !isFree && i === tool.pricing.findIndex((p) => p.price !== "$0" && p.price !== "Free");
          return (
            <div
              key={i}
              className={`relative rounded-lg border p-5 ${
                isMostPopular
                  ? "border-primary bg-blue-50 shadow-md"
                  : "border-border bg-card"
              }`}
            >
              {isMostPopular && (
                <span className="absolute -top-2.5 left-4 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">
                {plan.plan}
              </h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">
                    /{plan.period}
                  </span>
                )}
              </div>
              <ul className="mt-4 space-y-2">
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
              <a
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 block w-full rounded-md px-4 py-2 text-center text-sm font-medium transition ${
                  isMostPopular
                    ? "bg-primary text-white hover:bg-primary-hover"
                    : "border border-border bg-card text-foreground hover:bg-muted"
                }`}
              >
                {isFree ? "Start Free" : `Get ${plan.plan}`}
              </a>
            </div>
          );
        })}
      </div>

      {/* Value analysis */}
      <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
        <h2 className="text-lg font-semibold text-foreground">
          Is {tool.name} Worth the Price?
        </h2>
        <div className="mt-3 flex items-center gap-3">
          <TierBadge score={tool.scores.value} size="lg" />
          <div>
            <p className="font-medium text-foreground">
              Value Score: {tool.scores.value}/10
            </p>
            <p className="text-sm text-muted-foreground">
              Overall Score: {tool.scores.overall.toFixed(1)}/10 &middot;{" "}
              {tool.bestFor}
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{tool.verdict}</p>
      </div>

      {/* Competitor pricing comparison */}
      {competitors.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-foreground">
            How {tool.name} Pricing Compares
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Tool</th>
                  <th className="px-3 py-2 text-center font-semibold">
                    Free Tier
                  </th>
                  <th className="px-3 py-2 text-center font-semibold">
                    Starting Price
                  </th>
                  <th className="px-3 py-2 text-center font-semibold">
                    Value Score
                  </th>
                  <th className="px-3 py-2 text-center font-semibold">
                    Overall
                  </th>
                </tr>
              </thead>
              <tbody>
                {[tool, ...competitors].map((t) => (
                  <tr
                    key={t.slug}
                    className={`border-t border-border ${
                      t.slug === tool.slug ? "bg-blue-50/50" : ""
                    }`}
                  >
                    <td className="px-3 py-2 font-medium">
                      <Link
                        href={`/pricing/${t.slug}`}
                        className="hover:underline"
                      >
                        {t.name}
                      </Link>
                      {t.slug === tool.slug && (
                        <span className="ml-1 text-xs text-muted-foreground">
                          (this tool)
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {t.hasFreeTier ? (
                        <span className="text-emerald-600">Yes</span>
                      ) : (
                        <span className="text-red-500">No</span>
                      )}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {t.pricing[0]?.price}
                      {t.pricing[0]?.period
                        ? `/${t.pricing[0].period}`
                        : ""}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {t.scores.value}/10
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

      {/* Links */}
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={`/tools/${tool.slug}`}
          className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
        >
          Full {tool.name} Review
        </Link>
        <Link
          href={`/alternatives/${tool.slug}`}
          className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
        >
          {tool.name} Alternatives
        </Link>
        <a
          href={visitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-hover"
        >
          Visit {tool.name}
        </a>
      </div>
    </div>
  );
}

function getTierLabel(score: number): string {
  if (score >= 9) return "Excellent";
  if (score >= 8) return "Great";
  if (score >= 7) return "Good";
  if (score >= 6) return "Okay";
  if (score >= 5) return "Below average";
  return "Poor";
}
