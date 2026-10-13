import { ToolReview } from "@/lib/types";

export const looka: ToolReview = {
  slug: "looka",
  name: "Looka",
  tagline: "AI logo maker that gets you 80% of the way to a real brand identity -- for a fraction of what a designer costs",
  category: "ai-design-tools",
  url: "https://looka.com",

  scores: {
    easeOfUse: 9,
    outputQuality: 6,
    value: 7,
    features: 6,
    overall: 7,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["Unlimited logo designs", "Preview only -- pay only when you download", "No downloads"],
    },
    {
      plan: "Basic Logo Package",
      price: "$35",
      period: "one-time",
      features: ["One low-res PNG logo file", "No vector files"],
    },
    {
      plan: "Premium Logo Package",
      price: "$72",
      period: "one-time",
      features: ["High-res PNG, EPS, SVG and PDF", "Colour variations including transparent backgrounds", "Unlimited post-purchase changes, full ownership"],
    },
    {
      plan: "Brand Kit Subscription",
      price: "$96",
      period: "year (billed annually)",
      features: ["Unlimited logo changes, hi-res and vector files", "300+ branded assets: social profiles and posts, business cards, email signatures, letterheads, invoices, brand guidelines", "Logo ownership kept after the subscription ends"],
    },
    {
      plan: "Brand Kit Web Subscription",
      price: "$129",
      period: "year (billed annually)",
      features: ["Everything in Brand Kit", "AI-generated website"],
    },
  ],

  pros: [
    "The onboarding flow is excellent -- you pick styles, colors, and icons, and it generates dozens of options in seconds",
    "Good enough for MVPs, side projects, and small businesses that need something professional-looking fast",
    "Brand Kit package gives you social media templates, business cards, and brand guidelines all matching your logo",
    "Easy to customize -- you can swap fonts, adjust layouts, and tweak colors without any design skills",
  ],
  cons: [
    "Logos feel generic if you've seen enough of them -- experienced designers will spot a Looka logo immediately",
    "The one-time purchase model for logos is fair, but the Brand Kit subscription feels overpriced for what's included",
    "Limited icon library means logos in niche industries often look similar to each other",
    "No way to upload custom icons or truly break out of the template system -- you're always working within constraints",
  ],
  knownIssues: [
    {
      description: "PRICING REFRESH -- LOGO PACKAGES UP, A WEBSITE TIER ADDED (looka.com/pricing checked 2026-10-12, vendor-primary; this page was last reviewed 2026-03-27): **Basic Logo Package $35 one-time** (one low-res PNG; this page had $20), **Premium Logo Package $72 one-time** (multiple high-res formats, colour variations, unlimited post-purchase changes; had $65), **Brand Kit Subscription $96 a year** (unchanged; 300+ branded assets, unlimited logo edits, ownership kept after the subscription ends) and a **Brand Kit Web Subscription at $129 a year** that adds an AI-generated website. Designing remains free; you pay only to download. Looka's FAQ says you hold copyright in the logo as a whole but not its individual elements (such as symbols), and recommends registering a trademark separately. The page's metadata still carries an older 'Basic, Premium, and Enterprise' description; the live cards are the source used here. No rename or ownership change found (title and host unchanged).",
      source: "Looka pricing page (looka.com/pricing/) -- fetched 2026-10-12 via Firecrawl (curl and WebFetch are blocked by Cloudflare)",
      date: "2026-10-12",
    },
    {
      description: "SVG exports occasionally have misaligned elements that don't match the preview shown in the editor",
      source: "Trustpilot Reviews",
      date: "2026-02",
    },
    {
      description: "Brand Kit subscription auto-renews and some users report difficulty canceling through the website",
      source: "Reddit r/Entrepreneur",
      date: "2026-01",
    },
  ],
  bestFor: "Bootstrapped founders and small businesses who need a decent logo and brand kit today, not next month.",
  notFor: "Established brands or anyone who wants a truly unique, custom logo -- you'll outgrow Looka quickly.",
  verdict: "Looka solves a real problem: most small businesses and side projects need a logo and brand identity, but can't justify $2,000+ for a designer. The AI-generated options are polished enough to use on a real website or business card. But there's a ceiling -- the logos are assembled from templates and a limited icon set, so they'll never feel truly custom. For getting started quickly, Looka is excellent. For building a lasting brand identity, you'll eventually want to hire a human.",

  lastReviewedDate: "2026-10-12",
  dataSources: [
    { name: "Looka: Pricing -- logo packages, Brand Kit and Brand Kit Web subscriptions", url: "https://looka.com/pricing/", dateAccessed: "2026-10-12" },
    { name: "Looka official site", dateAccessed: "2026-03-27" },
    { name: "Trustpilot Reviews", dateAccessed: "2026-03-27" },
    { name: "Reddit r/Entrepreneur", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://looka.com",
  status: "active",
  metaTitle: "Looka Review 2026: AI Logo Maker Pricing ($35-$72 Logos, $96 Brand Kit, $129 With Website)",
  metaDescription: "Looka review. AI-generated logos and brand kits for small businesses: free to design, $35 Basic or $72 Premium logo packages, a $96/year Brand Kit with 300+ branded assets, and a $129/year tier that adds an AI-built website. Honest scores, pros and cons. Pricing checked October 2026.",
};
