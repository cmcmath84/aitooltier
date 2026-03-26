export interface ToolPricing {
  plan: string;
  price: string;
  period?: string;
  features: string[];
}

export interface KnownIssue {
  description: string;
  source: string;
  date: string;
}

export interface DataSource {
  name: string;
  url?: string;
  dateAccessed: string;
}

export interface ToolReview {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  subcategories?: string[];
  url: string;
  logoUrl?: string;

  // Scores (1-10)
  scores: {
    easeOfUse: number;
    outputQuality: number;
    value: number;
    features: number;
    overall: number;
  };

  // Pricing
  hasFreeTier: boolean;
  pricing: ToolPricing[];

  // Review content
  pros: string[];
  cons: string[];
  knownIssues: KnownIssue[];
  bestFor: string;
  notFor: string;
  verdict: string;

  // Metadata
  lastReviewedDate: string;
  dataSources: DataSource[];
  affiliateUrl: string; // hidden until monetization enabled
  status: "active" | "needs-update" | "deprecated";

  // SEO
  metaTitle?: string;
  metaDescription?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface ComparisonArticle {
  slug: string;
  title: string;
  description: string;
  tools: string[]; // tool slugs
  category: string;
  lastUpdated: string;
  content: string; // MDX content path
}
