import { ToolReview } from "@/lib/types";

export const githubCopilot: ToolReview = {
  slug: "github-copilot",
  name: "GitHub Copilot",
  tagline: "AI code assistant that lives in your editor -- autocomplete on steroids",
  category: "ai-code-assistants",
  url: "https://github.com/features/copilot",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 8,
    features: 8,
    overall: 8.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["2,000 completions/mo", "50 chat messages/mo", "VS Code + JetBrains"],
    },
    {
      plan: "Pro",
      price: "$10",
      period: "month",
      features: ["Unlimited completions", "Unlimited chat", "CLI access"],
    },
    {
      plan: "Business",
      price: "$19",
      period: "month",
      features: ["Organization management", "Policy controls", "Audit logs"],
    },
  ],

  pros: [
    "Inline code completions feel magical -- it predicts what you're about to type with scary accuracy",
    "Works directly in VS Code, JetBrains, Neovim -- no context switching",
    "Copilot Chat is great for explaining code, writing tests, and debugging",
    "Free tier is functional enough for personal projects",
  ],
  cons: [
    "Suggestions can be confidently wrong -- it'll autocomplete plausible-looking code that has subtle bugs",
    "Sometimes suggests code that's clearly copied from public repos, raising licensing questions",
    "Context window for chat is smaller than standalone tools like Claude",
    "Multi-file refactoring understanding is limited compared to Cursor",
  ],
  knownIssues: [
    {
      description: "GitHub Copilot will use Copilot Free/Pro/Pro+ user inputs, outputs, code snippets, and context to train its AI models UNLESS users opt out. Effective 2026-04-24. Business and Enterprise plans are excluded from training by default. Individual developers on Free/Pro/Pro+ must explicitly opt out in settings before 2026-04-24 if they want to prevent training on their code. Big differentiator vs. Cursor and Claude Code, both of which do NOT train on user code by default",
      source: "GitHub docs (docs.github.com/copilot/get-started/plans), The Register",
      date: "2026-04",
    },
    {
      description: "New 'premium requests' currency system rolled out in early 2026 -- Pro plan now gets 300 premium requests/mo, Business 1,500, Enterprise 1,000. Beyond those quotas, requests pay-as-you-go. Check the new plan details page before assuming legacy 'unlimited chat' behavior still applies",
      source: "GitHub Copilot plans page",
      date: "2026-03",
    },
    {
      description: "Agent mode reached GA on VS Code and JetBrains in March 2026 -- Copilot can now run multi-step agentic workflows rather than just reply to chat messages. Still behind Cursor Composer 2 and Claude Code on autonomous multi-file work but closes the gap meaningfully",
      source: "GitHub Copilot blog",
      date: "2026-03",
    },
    {
      description: "Copilot chat occasionally loses context mid-conversation in larger projects, giving irrelevant suggestions",
      source: "GitHub Community Discussions",
      date: "2026-03",
    },
  ],
  bestFor: "Any developer who wants productivity gains without changing their workflow. It works in your existing editor and the inline suggestions are the best in the business.",
  notFor: "Developers who need deep codebase understanding and multi-file refactoring. Cursor does that better. Also not for anyone uncomfortable with potential code licensing issues.",
  verdict: "Copilot is still the default AI code assistant for good reason. The inline completions are the best available, and it works seamlessly in the editors most developers already use. At $10/mo it's an easy expense to justify. But if you want something that truly understands your entire codebase and can do complex refactors, look at Cursor.",

  lastReviewedDate: "2026-04-18",
  dataSources: [
    { name: "GitHub Copilot plans", url: "https://github.com/features/copilot/plans", dateAccessed: "2026-04-18" },
    { name: "GitHub: Copilot Pro/Business training policy", url: "https://docs.github.com/en/copilot/get-started/plans", dateAccessed: "2026-04-18" },
    { name: "G2 Reviews", dateAccessed: "2026-04-18" },
    { name: "Reddit r/programming", dateAccessed: "2026-04-18" },
    { name: "Daily use testing", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://github.com/features/copilot",
  status: "active",
  poweredBy: "GPT-5.4",
  metaTitle: "GitHub Copilot Review 2026: Agent Mode GA, Training-Data Policy Shift",
  metaDescription: "GitHub Copilot review. Training-data opt-in default (Apr 24 2026), Agent mode GA, new premium requests system. Pro $10, Business $19. April 2026.",
};
