import { ToolReview } from "./types";
import { Category } from "./types";
import { getTierForScore } from "./tiers";

const BASE_URL = "https://aitooltier.com";

export function safeJsonLd(obj: Record<string, unknown>): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export function toolPageJsonLd(tool: ToolReview, category?: Category) {
  const tier = getTierForScore(tool.scores.overall);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      ...(category
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: category.name,
              item: `${BASE_URL}/categories/${category.slug}`,
            },
          ]
        : []),
      {
        "@type": "ListItem",
        position: category ? 3 : 2,
        name: tool.name,
        item: `${BASE_URL}/tools/${tool.slug}`,
      },
    ],
  };

  const lowestPrice = tool.pricing.find((p) => p.price !== "$0" && p.price !== "Free");
  const freeOffer = tool.hasFreeTier
    ? { "@type": "Offer", price: "0", priceCurrency: "USD" }
    : undefined;

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.tagline,
    url: tool.url,
    applicationCategory: category?.name || "AI Tool",
    ...(freeOffer ? { offers: freeOffer } : {}),
    review: {
      "@type": "Review",
      author: {
        "@type": "Organization",
        name: "AIToolTier",
        url: BASE_URL,
      },
      datePublished: tool.lastReviewedDate,
      reviewBody: tool.verdict,
      reviewRating: {
        "@type": "Rating",
        ratingValue: tool.scores.overall,
        bestRating: 10,
        worstRating: 0,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.scores.overall,
      bestRating: 10,
      worstRating: 0,
      ratingCount: 4,
      reviewCount: 1,
    },
  };

  return [breadcrumb, softwareApp];
}

export function categoryPageJsonLd(
  category: Category,
  tools: ToolReview[]
) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.name,
        item: `${BASE_URL}/categories/${category.slug}`,
      },
    ],
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best ${category.name} (2026)`,
    description: category.description,
    numberOfItems: tools.length,
    itemListElement: tools
      .sort((a, b) => b.scores.overall - a.scores.overall)
      .map((tool, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: tool.name,
        url: `${BASE_URL}/tools/${tool.slug}`,
      })),
  };

  return [breadcrumb, itemList];
}

export function comparePageJsonLd(
  toolA: ToolReview,
  toolB: ToolReview
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Compare",
        item: `${BASE_URL}/compare`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${toolA.name} vs ${toolB.name}`,
        item: `${BASE_URL}/compare/${toolA.slug}-vs-${toolB.slug}`,
      },
    ],
  };
}

export function homepageJsonLd(toolCount: number) {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AIToolTier",
    url: BASE_URL,
    description:
      "Data-backed AI tool reviews with real scores, pricing breakdowns, known issues, and honest comparisons.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/compare?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AIToolTier",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
  };

  return [website, org];
}
