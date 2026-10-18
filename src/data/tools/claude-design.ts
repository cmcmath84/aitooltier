import { ToolReview } from "@/lib/types";

export const claudeDesign: ToolReview = {
  slug: "claude-design",
  name: "Claude Design (Anthropic)",
  tagline: "**Claude Design now lives inside Claude: the standalone site (claude.ai/design) closes on 2026-12-14, and new designs, design systems and slide decks are created as artifacts in the Claude app -- on Free, Pro, Max, Team and Enterprise plans.** Design systems migrate in one step from the Artifacts page (one run covers the whole organization); projects stay in the standalone version until it closes. Launched 2026-04-17 on Opus 4.7 as Anthropic's AI-native tool for design systems, prototypes, slide decks and one-pagers",
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
      plan: "Claude Free",
      price: "$0",
      features: ["Claude Design is available on the Free plan", "New designs, design systems and slide decks are created as artifacts in Claude", "Standalone claude.ai/design usable until 2026-12-14"],
    },
    {
      plan: "Claude Pro (via claude.ai)",
      price: "$20",
      period: "month",
      features: ["Claude Design included alongside Claude chat and coding tools", "Higher usage than Free", "Design systems migrate with no confirmation step on individual plans"],
    },
    {
      plan: "Claude Max (5x/20x)",
      price: "$100-200",
      period: "month",
      features: ["5x or 20x Pro usage", "Best for designers doing hundreds of variations"],
    },
    {
      plan: "Claude Team / Enterprise",
      price: "Per seat",
      features: ["Owner can set an organization default design system", "One migration moves every design system in the organization", "Enterprise: design systems are off by default -- an owner must turn artifacts and design systems on"],
    },
  ],

  pros: [
    "Design-systems-first approach is the differentiator -- Claude Design outputs a coherent token palette (colors, type scale, spacing, components) first, then applies it across the prototype. That is structurally the right move and what most AI design tools have gotten wrong",
    "Launched 2026-04-17 as a natural same-week follow-on to Opus 4.7 -- the underlying reasoning quality is best-in-class for layout decisions, information hierarchy, and long-horizon consistency across a multi-page deliverable",
    "Positioned as 'replaces the starting point, not the workflow' -- outputs are editable in Figma, Canva, and exportable to HTML/PDF, so it doesn't lock you into Anthropic's tooling",
    "Included on every Claude plan, Free through Enterprise, and now built into the Claude app as artifacts -- if you use Claude, you already have it. No new subscription to evaluate",
  ],
  cons: [
    "Fresh as of 2026-04-17 -- no real-world track record yet. Expect rough edges on complex multi-artboard documents through at least Q2 2026",
    "The standalone claude.ai/design site closes on 2026-12-14 -- design systems have to be migrated into Claude, and on Enterprise plans design systems stay off until an owner turns them on",
    "Not a full Figma/Canva replacement. The workflow is: Claude Design generates the starting point, you edit in Figma. If you were hoping to abandon Figma, you won't",
    "Anthropic's CPO leaving Figma's board the same week (per TechCrunch) signals the competitive positioning is intentional and adversarial. Figma, Canva, and Adobe will respond -- expect feature leapfrogging through 2026",
  ],
  knownIssues: [
    {
      description: "MOVING INTO CLAUDE (announced October 2026): **Claude Design now lives in Claude.** Anthropic's help center says the standalone Claude Design site (claude.ai/design) **will close on December 14, 2026** and stays usable until then; afterwards claude.ai/design redirects to Claude. New designs, design systems and slide decks started in Claude are created as **artifacts**. Claude Design is available on **Free, Pro, Max, Team and Enterprise** plans. Migration: open the Artifacts page, click 'Migrate team design systems' in the 'Claude Design lives here now' banner; one migration brings over every design system in the organization (anyone with Claude Design access can start it); owners and sharing carry over; empty systems and ones made from a built-in starter theme are not migrated; published non-private systems become visible to the whole organization. Projects need no action yet. Team/Enterprise owners should set a default design system and check that artifacts and design systems are on (off by default on Enterprise). Claude Code 2.1.302 (2026-10-16) added the same closure notice to /design-sync and /design-login.",
      source: "support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude, Claude Code CHANGELOG 2.1.302",
      date: "2026-10-17",
    },
    {
      description: "SUPERSEDED (Claude Design is now on every plan, Free included -- see the 2026-10 entry): gated research-preview rollout as of launch date 2026-04-17. Not everyone has access yet. Broad Pro-tier availability is rolling out through end of April per Anthropic",
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

  lastReviewedDate: "2026-10-17",
  dataSources: [
    { name: "Claude Help Center: Migrate from standalone Claude Design to Claude", url: "https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude", dateAccessed: "2026-10-17" },
    { name: "Claude Code CHANGELOG (2.1.302 closure notice)", url: "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md", dateAccessed: "2026-10-17" },
    { name: "Anthropic: Claude Design launch", url: "https://www.anthropic.com/claude-design", dateAccessed: "2026-04-17" },
    { name: "The New Stack: Anthropic Claude Design launch", url: "https://thenewstack.io/anthropic-claude-design-launch/", dateAccessed: "2026-04-17" },
    { name: "TechCrunch: Anthropic CPO leaves Figma board after competing-product reports", url: "https://techcrunch.com/2026/04/16/anthropic-cpo-leaves-figmas-board-after-reports-he-will-offer-a-competing-product/", dateAccessed: "2026-04-17" },
    { name: "Hands-on testing via claude.ai", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://www.anthropic.com/claude-design",
  status: "active",
  metaTitle: "Claude Design Review 2026: Now Inside Claude, Standalone Site Closes Dec 14",
  metaDescription: "Claude Design review. Anthropic's AI design tool for design systems, prototypes and slide decks now lives in Claude as artifacts on every plan, Free included; the standalone claude.ai/design site closes December 14, 2026. How to migrate design systems.",
};
