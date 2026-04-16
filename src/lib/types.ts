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

export interface BenchmarkScore {
  name: string;        // e.g., "MMLU", "HumanEval", "AIME 2024"
  score: number;       // The raw score
  maxScore: number;    // Max possible (100 for %, varies for others)
  unit: string;        // "%", "ELO", "pass@1"
}

export interface ToolBenchmarks {
  modelName: string;              // e.g., "GPT-5.4", "Claude Opus 4.6"
  scores: BenchmarkScore[];
  chatbotArenaElo?: number;
  lastUpdated: string;
}

// Hardware requirements for self-hosting local/open-weight LLMs
export interface ModelVariantRequirements {
  variant: string;   // e.g., "Llama 4 Scout 109B MoE"
  min: string;       // minimum viable hardware to run
  max: string;       // full-precision / production hardware
  notes?: string;    // e.g., license carve-outs, architecture notes
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

  // Powered by (optional -- for tools that run on a specific LLM)
  poweredBy?: string; // e.g., "Claude Opus 4.6", "GPT-5.4 / Claude (user selects)"

  // Benchmarks (optional -- only for LLMs, chatbots, code assistants)
  benchmarks?: ToolBenchmarks;

  // System requirements (optional -- only for self-hostable local LLMs)
  systemRequirements?: ModelVariantRequirements[];

  // Personality & tone (optional -- for conversational tools: LLMs, chatbots)
  personality?: {
    oneLiner: string;  // short tagline, e.g. "The thoughtful consultant"
    tone: string;      // 1-2 sentences on how it sounds
    quirks: string;    // 1-2 sentences on notable behaviors
  };

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
