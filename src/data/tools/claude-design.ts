import { ToolReview } from "@/lib/types";

export const claudeDesign: ToolReview = {
  slug: "claude-design",
  name: "Claude Design (Anthropic)",
  tagline: "Anthropic's AI-native design tool -- launched 2026-04-17, built on Opus 4.7. Generates full design systems, website prototypes, slide decks, and one-pagers from natural language. Positioned as a Figma / Canva / Adobe starter-replacement (Figma stock dropped 5% on the launch news)",
  category: "ai-design-tools",
  url: "https://www.anthropic.com/claude-design",

  scores: {
    easeOfUse: 9,
    outputQuality: 8.5,
    value: 8,
    features: 8,
    overall: 8.4,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Research Preview (Free, gated rollout)",
      price: "$0",
      features: [
        "Limited-access rollout starting 2026-04-17",
        "Generated design systems, website prototypes, slide decks, one-pagers",
        "Outputs editable in Figma, Canva, and export to PDF / HTML",
        "Built on Opus 4.7 backend",
      ],
    },
    {
      plan: "Claude Pro (via claude.ai)",
      price: "$20",
      period: "month",
      features: [
        "Claude Design included alongside Claude chat + coding tools",
        "Higher design-generation quotas",
        "Single-person workflow",
      ],
    },
    {
      plan: "Claude Max (5x/20x)",
      price: "$100-200",
      period: "month",
      features: [
        "5x or 20x design generation quota",
        "Priority compute",
        "Best for designers doing hundreds of variations",
      ],
    },
  ],

  pros: [
    "Design-systems-first approach is the differentiator -- Claude Design outputs a coherent token palette (colors, type scale, spacing, components) first, then applies it across the prototype. That is structurally the right move and what most AI design tools have gotten wrong",
    "Launched 2026-04-17 as a natural same-week follow-on to Opus 4.7 -- the underlying reasoning quality is best-in-class for layout decisions, information hierarchy, and long-horizon consistency across a multi-page deliverable",
    "Positioned as 'replaces the starting point, not the workflow' -- outputs are editable in Figma, Canva, and exportable to HTML/PDF, so it doesn't lock you into Anthropic's tooling",
    "Bundled into existing Claude Pro ($20/mo) and Max tiers -- if you already pay for Claude, you already have it. No new subscription to evaluate",
  ],
  cons: [
    "Fresh as of 2026-04-17 -- no real-world track record yet. Expect rough edges on complex multi-artboard documents through at least Q2 2026",
    "Research-preview rollout is gated -- broad access is rolling out, not instant. Some users on waitlists",
    "Not a full Figma/Canva replacement. The workflow is: Claude Design generates the starting point, you edit in Figma. If you were hoping to abandon Figma, you won't",
    "Anthropic's CPO leaving Figma's board the same week (per TechCrunch) signals the competitive positioning is intentional and adversarial. Figma, Canva, and Adobe will respond -- expect feature leapfrogging through 2026",
  ],
  knownIssues: [
    {
      description: "Gated research-preview rollout as of launch date 2026-04-17. Not everyone has access yet. Broad Pro-tier availability is rolling out through end of April per Anthropic",
      source: "Anthropic launch post, TechCrunch",
      date: "2026-04",
    },
    {
      description: "Figma (ticker FIG) stock dropped approximately 5 percent on the launch news. This is a real competitive signal -- track whether Figma's own AI features (Figma AI, already on this site) accelerate in response through Q2 2026",
      source: "TechCrunch, The New Stack",
      date: "2026-04",
    },
  ],
  bestFor: "Designers who use Claude Pro or Max and want an AI starting point for design systems, prototypes, slide decks, or one-pagers -- especially when the design decisions need to be internally consistent across many screens or slides. Also good for non-designer product managers and founders who need credible deliverables without hiring.",
  notFor: "Full production design workflows that end at Claude Design rather than continue in Figma or Canva. Also not ideal for heavily visual/illustrative work where Midjourney, Nano Banana 2, or a human illustrator will outperform on the image side. Use Gamma or Canva AI for pure slide generation if you do not already live in the Claude ecosystem.",
  verdict: "Claude Design is the most credible move into AI-native design tooling since Figma AI and Canva AI shipped in 2024. Launching the day after Opus 4.7, on the same Anthropic reasoning stack, gives it a quality foundation the pure-play AI design startups cannot match. The 'replaces the starting point, not the workflow' positioning is exactly right -- Anthropic is not trying to be your whole design stack, just the one that eliminates the blank canvas. For anyone already paying for Claude, it is essentially a free new capability worth trying in week one. For serious designers, expect this to become a routine ideation layer feeding into Figma, not a Figma replacement. Watch how Figma and Canva respond through Q2 2026.",

  lastReviewedDate: "2026-04-17",
  dataSources: [
    { name: "Anthropic: Claude Design launch", url: "https://www.anthropic.com/claude-design", dateAccessed: "2026-04-17" },
    { name: "The New Stack: Anthropic Claude Design launch", url: "https://thenewstack.io/anthropic-claude-design-launch/", dateAccessed: "2026-04-17" },
    { name: "TechCrunch: Anthropic CPO leaves Figma board after competing-product reports", url: "https://techcrunch.com/2026/04/16/anthropic-cpo-leaves-figmas-board-after-reports-he-will-offer-a-competing-product/", dateAccessed: "2026-04-17" },
    { name: "Hands-on testing via claude.ai", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://www.anthropic.com/claude-design",
  status: "active",
  metaTitle: "Claude Design Review (Launched April 17 2026): Anthropic's Figma Competitor",
  metaDescription: "Claude Design review. Anthropic's AI-native design tool -- design systems, prototypes, decks from natural language. Launched Apr 17 2026 on Opus 4.7. Figma dropped 5% on the news.",
};
