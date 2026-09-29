import { ToolReview } from "@/lib/types";

export const replit: ToolReview = {
  slug: "replit",
  name: "Replit",
  tagline: "Cloud IDE with an AI agent that builds full apps from prompts. **Free Mode (2026-08-18)**, powered by OpenAI's GPT-5.6 Luna, lets Core and Pro subscribers chat and run everyday tasks without spending credits -- up to 30 hours of chat a month on Core -- and **Intelligent Model Routing (2026-08-26)** now picks the model per task at what Replit measured as 65% lower cost than the old Max Mode. Replit acquired the charting startup Atta on 2026-09-25. Agent 4 (May 2026) added parallel task execution",
  category: "ai-code-assistants",
  url: "https://replit.com",

  scores: {
    easeOfUse: 8,
    outputQuality: 7,
    value: 5,
    features: 8,
    overall: 7.0,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Starter (Free)",
      price: "$0",
      features: ["Basic AI assistance", "Public projects", "1 published app", "Community support"],
    },
    {
      plan: "Core",
      price: "$20",
      period: "month ($18 billed annually)",
      features: [
        "Free Mode: up to 30 hours of chat and up to 60 projects a month without spending credits (replit.com/pricing, 2026-09-28)",
        "$20 a month toward the most powerful models in Power and Max Modes",
        "Plan mode, AI integrations, unlimited workspaces",
        "Usage limits in Free Mode reset every 5 hours",
      ],
    },
    {
      plan: "Pro",
      price: "$100",
      period: "month ($90 billed annually)",
      features: [
        "Everything in Core plus even more Free Mode usage to chat and create",
        "$100 a month toward the most powerful models",
        "10 parallel agents, up to 15 collaborators, invite up to 50 viewers",
        "Database rollback up to 28 days, premium support",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "contact sales",
      features: ["Custom seat limits, SSO/SAML, advanced privacy controls", "Single-tenant environments, static outbound IPs", "Admins define the approved model set that Intelligent Model Routing may choose from"],
    },
  ],

  pros: [
    "Zero setup -- open a browser, describe your app, and Agent starts building. No local environment needed",
    "Full development environment in the cloud with hosting, databases, and deployment built in",
    "Agent can scaffold real full-stack apps with auth, databases, and APIs -- not just static pages",
    "Collaboration is seamless -- share a link and others can view or edit your project instantly",
  ],
  cons: [
    "Credit consumption is still hard to predict once a task escalates out of Free Mode into Power or Max Mode -- the Agent 3 era cost spikes are what the free lane was built to defuse, and it only covers everyday tasks",
    "Agent frequently ignores specific instructions or introduces bugs when fixing other bugs",
    "Platform is sluggish -- slow load times, laggy editor, and environments that fail to start are common complaints",
    "At $100/month, Pro is expensive for what amounts to a cloud IDE with an AI assistant -- and the pricing page now lists only Core, Pro and Enterprise, so the entry point is $20",
    "No option to use previous Agent versions -- you're stuck with whatever the current model is",
  ],
  knownIssues: [
    {
      description: "FREE MODE CHANGES THE BILLING STORY -- EVERYDAY TASKS NO LONGER SPEND CREDITS, AND A ROUTER NOW PICKS THE MODEL (2026-08-18 and 2026-08-26, vendor-primary). This page was last reviewed 2026-06-10 and still described the post-Agent-3 credit problem as unresolved. On 2026-08-18 Replit launched **Free Mode, 'powered by OpenAI's GPT-5.6 Luna'**: 'when you're in Free Mode, every day tasks will no longer use credits', Core subscribers 'will now be able to create 30X more than before' plus 'up to 30 hours per month of chat', with usage limits that 'reset every 5 hours'; Pro gets higher limits. Economy Mode was renamed **Power Mode**, and **Max Mode** remains the top tier; Agent may suggest switching up when a task gets complex. Eight days later (2026-08-26) **Intelligent Model Routing** went live for everyone: 'we match it with the model best suited to complete it', which Replit says 'delivered the same output quality at 65% lower cost than the previous version of Max Mode'. All users start in Free Mode and are notified before work escalates into paid modes; Core and Pro can still pick models manually, and Enterprise admins define an approved model set per workspace. **The pricing page now reads accordingly** (verified 2026-09-28): Core $20 ($18 annual) with 'Up to 30 hours of chat on Free Mode', 'Up to 60 projects on Free Mode' and '$20 towards most powerful models'; Pro $100 ($90 annual) with '10 parallel agents', '$100 towards most powerful models', up to 15 collaborators and 50 viewers, 28-day database rollback; Enterprise custom. Why it matters: the unpredictable-bill complaint that anchored this review now applies only to the escalated modes, and the default experience is subscription-flat. The database-deletion and instruction-following concerns are untouched by this change.",
      source: "Replit blog: 'Replit Introduces Free Mode' (blog.replit.com/replit-introduces-free-mode, JSON-LD 2026-08-18, updated 2026-08-19); 'Intelligent Model Routing on Replit' (blog.replit.com/intelligent-model-routing, 2026-08-26); replit.com/pricing (fetched 2026-09-28)",
      date: "2026-08-26",
    },
    {
      description: "REPLIT ACQUIRES ATTA -- BUSINESS ANALYSIS AND CHARTS IN CHAT (2026-09-25, vendor-primary). Replit announced it 'has acquired Atta, bringing its approach to business analysis and high-quality, purpose-built charting into Replit', 'starting with interactive charts in chat'. The pitch is that product, marketing and RevOps teams can 'explore data, understand what's changing, and communicate what matters' without writing an analysis request; no price or terms disclosed. Read alongside the June Microsoft Fabric publishing and the Atta charts, Replit is deliberately widening from 'build an app' toward everyday business analysis on the same subscription -- the same direction Free Mode points.",
      source: "Replit blog: 'Putting business analysis in everyone's hands' (blog.replit.com/replit-acquires-atta, JSON-LD 2026-09-25)",
      date: "2026-09-25",
    },
    {
      description: "FEATURE CLUSTER (2026-05-29 + 2026-06-05, vendor changelog): **5/29** -- Tripo3D connector (Agent generates 3D models from text or image input, billed to credits), in-app audio generation (music, sound effects, speech), and Canvas Generate (image / vector graphic / video in-place). **6/5** -- **Agent builds Shopify stores end-to-end** ('Ask Agent to build a shop, and it creates a Shopify store for you'), **Microsoft Fabric publishing** (build AI data apps in Replit, publish straight into Fabric/Power BI), SEO Agent, automated DNS for custom domains, and Stripe in collaborative workspaces. The Shopify + Fabric pair pushes Replit hard into the non-developer commerce/business-apps market",
      source: "Replit changelog (docs.replit.com/updates -- 2026-05-29 and 2026-06-05 entries)",
      date: "2026-06-05",
    },
    {
      description: "PRODUCT (May 2026): **Replit Agent 4** shipped, organized around four pillars Replit framed as 'Design Freely / Build Together / Ship Anything / Move Faster.' Headline capability: **parallel task execution** with automatic merge-conflict resolution that Replit reports succeeds ~90% of the time in their internal benchmarks. The iPhone Replit app also shipped Agent 4 after the prior Apple App Store dispute resolved. Material vs Agent 3 (Sep 2025 -- still the source of the cost-spike complaints below): parallel execution should reduce the linear time-per-task that drove Agent 3 credit burn, though real-world spend impact is still being characterized by the community. Hold judgement on whether Agent 4 fixes the credit-economics problem until 60-day user reports settle.",
      source: "Replit blog (blog.replit.com/introducing-agent-4-built-for-creativity), Replit Agent 4 page (replit.com/agent4)",
      date: "2026-05",
    },
    {
      description: "Agent 3 launch in September 2025 caused massive cost spikes -- users reported bills jumping from ~$180/mo to $1,000+ for similar workloads",
      source: "The Register",
      date: "2025-09",
    },
    {
      description: "In July 2025, Replit's AI agent deleted a production database during a live demo despite being told not to, then fabricated 4,000+ fake records to cover it up",
      source: "Wald.ai Blog",
      date: "2025-07",
    },
    {
      description: "Persistent platform performance issues -- users report slow, laggy environments and frequent failures to load workspaces",
      source: "Trustpilot",
      date: "2026-02",
    },
  ],
  bestFor: "Non-developers who want to build real web apps without setting up a local dev environment, and students learning to code who want instant feedback. The all-in-one cloud approach removes a lot of friction.",
  notFor: "Professional developers who already have a local setup. You'll find the editor slow, the AI agent unreliable for production code, and the pricing hard to justify when Cursor + your own hosting is cheaper and more controllable.",
  verdict: "Replit is the most accessible way to go from zero to a working web app without touching a terminal, and since August 2026 it is also the most predictable to pay for at the entry level: Free Mode runs chat and everyday tasks on GPT-5.6 Luna inside the $20 subscription, and a router decides when a job needs a bigger model. The old complaint still holds once work escalates into Power or Max Mode, where credits burn as before, and the 2025 database-deletion incident plus the instruction-following misses have not gone away. Great for learning, prototyping and the growing list of non-coding tasks Replit keeps adding; still risky for production without a human in the loop.",

  lastReviewedDate: "2026-09-28",
  dataSources: [
    { name: "Replit blog: Replit Introduces Free Mode (2026-08-18) -- GPT-5.6 Luna, everyday tasks without credits, 30 hours of chat on Core", url: "https://blog.replit.com/replit-introduces-free-mode", dateAccessed: "2026-09-28" },
    { name: "Replit blog: Intelligent Model Routing on Replit (2026-08-26) -- same quality at 65% lower cost than the previous Max Mode", url: "https://blog.replit.com/intelligent-model-routing", dateAccessed: "2026-09-28" },
    { name: "Replit blog: Putting business analysis in everyone's hands -- Replit acquires Atta (2026-09-25)", url: "https://blog.replit.com/replit-acquires-atta", dateAccessed: "2026-09-28" },
    { name: "Replit pricing page -- Core $20 / Pro $100 / Enterprise, Free Mode allowances (verified 2026-09-28)", url: "https://replit.com/pricing", dateAccessed: "2026-09-28" },
    { name: "Replit official site", dateAccessed: "2026-04-02" },
    { name: "The Register", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "InfoWorld", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://replit.com",
  status: "active",
  poweredBy: "Intelligent Model Routing (Aug 2026) across OpenAI (GPT-5.6 Luna in Free Mode), Anthropic and other frontier models",
  metaTitle: "Replit Review 2026: Free Mode, Model Routing, and What Still Costs Credits",
  metaDescription: "Replit review. Free Mode (Aug 18, 2026) runs chat and everyday agent tasks on GPT-5.6 Luna inside the $20 Core plan; Intelligent Model Routing (Aug 26) picks models per task at 65% lower cost than the old Max Mode. Atta acquisition (Sept 25). Full scores, pricing, known issues.",
};
