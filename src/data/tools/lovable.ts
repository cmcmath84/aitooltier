import { ToolReview } from "@/lib/types";

export const lovable: ToolReview = {
  slug: "lovable",
  name: "Lovable",
  tagline: "Describe the app you want in plain English and watch it build itself -- 8M users and $400M+ ARR say it works",
  category: "ai-code-assistants",
  url: "https://lovable.dev",

  scores: {
    easeOfUse: 9.5,
    outputQuality: 6.5,
    value: 7.5,
    features: 7.5,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["5 edits/day", "Basic app generation", "Lovable subdomain hosting"],
    },
    {
      plan: "Starter",
      price: "$20",
      period: "month",
      features: ["100 edits/mo", "Custom domain", "GitHub export", "Supabase integration"],
    },
    {
      plan: "Launch",
      price: "$50",
      period: "month",
      features: ["500 edits/mo", "Priority generation", "Advanced integrations"],
    },
    {
      plan: "Scale",
      price: "$200",
      period: "month",
      features: ["Unlimited edits", "Team features", "Priority support"],
    },
  ],

  pros: [
    "The ease of use is unmatched -- describe what you want in natural language and get a working full-stack app in minutes",
    "Built-in Supabase integration means you get a real database and auth without configuring anything yourself",
    "Iterative editing actually works -- you can say 'make the header blue' or 'add a login page' and it just does it",
    "One-click deploy to a live URL removes the entire DevOps headache for simple projects",
  ],
  cons: [
    "Generated code gets messy fast once you go beyond simple apps -- expect spaghetti React components on complex projects",
    "Backend flexibility is limited -- you're mostly locked into Supabase, and custom server logic is an afterthought",
    "Vendor lock-in is a real concern -- while you can export to GitHub, the code is structured around Lovable's patterns",
    "The 'edit' credit system means you're constantly watching a meter instead of just building -- 100 edits on Starter goes fast",
  ],
  knownIssues: [
    {
      description: "SECURITY (April 2026): Lovable disclosed a Broken Object-Level Authorization (BOLA) vulnerability that exposed source code + AI chat history of public projects created between 2026-02-03 and 2026-04-20 to any other Lovable user. Private projects and Lovable Cloud were unaffected. A security researcher reported the issue on 2026-04-20; Lovable shipped a patch within 2 hours. Background: HackerOne reports filed starting 2026-02-22 were incorrectly closed without escalation due to outdated internal documentation, contributing to a ~57-day delay until public disclosure. If you used Lovable Free or Starter to build a project in that window and exported / deployed it, audit the project for any data that was incidentally exposed",
      source: "Lovable blog (lovable.dev/blog/our-response-to-the-april-2026-incident), The Register, The Next Web",
      date: "2026-04-22",
    },
    {
      description: "Complex state management often breaks during iterative edits -- the AI loses track of component relationships",
      source: "Reddit r/webdev",
      date: "2026-03",
    },
    {
      description: "GitHub export sometimes produces code with hardcoded Lovable-specific config that needs manual cleanup",
      source: "Product Hunt reviews",
      date: "2026-02",
    },
  ],
  bestFor: "Non-technical founders who need an MVP fast, or designers who want to turn mockups into working apps without learning to code. Also great for rapid prototyping even if you do know how to code.",
  notFor: "Experienced developers building production applications with complex business logic. If you need custom backends, specific architectures, or clean maintainable code, you'll outgrow Lovable quickly.",
  verdict: "Lovable is genuinely magical for its target audience. Watching an app materialize from a text description is still impressive, and the 8M user base proves there's massive demand for this. But there's a ceiling, and you'll hit it faster than the marketing suggests. Simple CRUD apps and landing pages? Fantastic. Anything with complex state, custom business logic, or specific architectural needs? The generated code becomes a liability. Use it for prototypes and MVPs, but plan to rewrite if the project takes off.",

  lastReviewedDate: "2026-05-01",
  dataSources: [
    { name: "Lovable official site", dateAccessed: "2026-03-31" },
    { name: "Reddit r/webdev", dateAccessed: "2026-03-31" },
    { name: "Product Hunt reviews", dateAccessed: "2026-03-31" },
    { name: "Hands-on testing", dateAccessed: "2026-03-31" },
  ],
  affiliateUrl: "https://lovable.dev",
  status: "active",
  poweredBy: "Claude (Anthropic)",
  metaTitle: "Lovable Review 2026: AI App Builder That Turns Text Into Working Web Apps",
  metaDescription: "Lovable review. Build full-stack web apps from natural language, 8M users, one-click deploy. But generated code has limits. Scores, pricing. March 2026.",
};
