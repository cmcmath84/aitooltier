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

  const freeOffer = tool.hasFreeTier
    ? { "@type": "Offer", price: "0", priceCurrency: "USD" }
    : undefined;

  const rating5 = Math.round((tool.scores.overall / 2) * 10) / 10;

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.tagline,
    url: `${BASE_URL}/tools/${tool.slug}`,
    applicationCategory: category?.name || "AI Tool",
    operatingSystem: "Web",
    dateModified: tool.lastReviewedDate,
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
      name: `${tool.name} Review: ${getTierForScore(tool.scores.overall).label} Rank`,
      reviewRating: {
        "@type": "Rating",
        ratingValue: rating5,
        bestRating: 5,
        worstRating: 1,
      },
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

export function pricingPageJsonLd(tool: ToolReview) {
  const parsePrice = (price: string): number | null => {
    if (!price) return null;
    if (price === "Free" || price === "$0") return 0;
    const match = price.match(/\$?\s*([0-9]+(?:\.[0-9]+)?)/);
    return match ? parseFloat(match[1]) : null;
  };

  const numericPrices = tool.pricing
    .map((p) => parsePrice(p.price))
    .filter((p): p is number => p !== null);
  const paidPrices = numericPrices.filter((p) => p > 0);
  const lowPrice = paidPrices.length > 0 ? Math.min(...paidPrices) : 0;
  const highPrice = numericPrices.length > 0 ? Math.max(...numericPrices) : 0;

  const rating5 = Math.round((tool.scores.overall / 2) * 10) / 10;

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${tool.name} Pricing`,
    description: `${tool.name} pricing tiers, plans, and costs for 2026. ${tool.tagline}`,
    url: `${BASE_URL}/pricing/${tool.slug}`,
    image: `${BASE_URL}/logo.png`,
    brand: { "@type": "Brand", name: tool.name },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: lowPrice.toFixed(2),
      highPrice: highPrice.toFixed(2),
      offerCount: tool.pricing.length,
      availability: "https://schema.org/InStock",
      url: tool.url,
    },
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: "AIToolTier", url: BASE_URL },
      datePublished: tool.lastReviewedDate,
      reviewBody: tool.verdict,
      name: `${tool.name} Pricing Analysis`,
      reviewRating: {
        "@type": "Rating",
        ratingValue: rating5,
        bestRating: 5,
        worstRating: 1,
      },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: tool.name,
        item: `${BASE_URL}/tools/${tool.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pricing",
        item: `${BASE_URL}/pricing/${tool.slug}`,
      },
    ],
  };

  return [product, breadcrumb];
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
