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
      features: ["Unlimited logo designs", "Preview only", "No downloads"],
    },
    {
      plan: "Basic Logo",
      price: "$20",
      features: ["1 logo file", "PNG format", "No vector files"],
    },
    {
      plan: "Premium Logo",
      price: "$65",
      features: ["Multiple file formats", "Vector SVG files", "Color variations"],
    },
    {
      plan: "Brand Kit",
      price: "$96",
      period: "year",
      features: ["Logo files", "Business card designs", "Social media kit", "Brand guidelines"],
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

  lastReviewedDate: "2026-03-27",
  dataSources: [
    { name: "Looka official site", dateAccessed: "2026-03-27" },
    { name: "Trustpilot Reviews", dateAccessed: "2026-03-27" },
    { name: "Reddit r/Entrepreneur", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://looka.com",
  status: "active",
  metaTitle: "Looka Review 2026: AI Logo Maker for Startups and Small Business",
  metaDescription: "Looka review. AI-generated logos and brand kits for small businesses. Good enough to ship? Honest scores, pricing breakdown, pros and cons. March 2026.",
};
