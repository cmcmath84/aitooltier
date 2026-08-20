import { ToolReview } from "@/lib/types";

export const perplexity: ToolReview = {
  slug: "perplexity",
  name: "Perplexity AI",
  tagline: "AI-powered search engine that gives cited answers instead of a list of links",
  category: "ai-chatbots",
  url: "https://perplexity.ai",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 9,
    features: 8,
    overall: 8.5,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["Unlimited quick searches", "5 Pro searches/day", "Basic AI model"] },
    { plan: "Pro", price: "$20", period: "month", features: ["600 Pro searches/day", "Frontier model access", "File uploads (PDF/DOC/DOCX/TXT/RTF)", "API access + official Python/TypeScript SDKs", "**Personal Computer included since 2026-05-07** via the Perplexity Mac app (was Max-only at April launch); Windows since 2026-07-28", "**Kimi K3 (2.8T open-weight, 1M context, US-hosted) added 2026-08-04**", "Projects (shared workspaces, replaced Spaces 2026-08-04) + Model Council (2-8 models per question)"] },
    { plan: "Max", price: "$200", period: "month", features: ["Personal Computer (first access 2026-04-16)", "Highest priority queue", "All frontier models", "Always-on agent orchestrates Mail, Notes, iMessage, Safari, local files", "**Kimi K3 US-hosted added 2026-08-04**", "Projects + Model Council"] },
  ],

  pros: [
    "Every answer includes numbered citations to real sources -- you can verify claims",
    "Pro search mode deeply researches your question across multiple sources before answering",
    "Faster than ChatGPT for factual research and current events",
    "Free tier is surprisingly generous for casual research",
  ],
  cons: [
    "Not great for creative tasks -- it's a research tool, not a creative partner",
    "Citations sometimes link to low-quality or paywalled sources",
    "Writing quality is functional but bland compared to Claude",
    "Pro searches are limited even on the paid plan",
  ],
  knownIssues: [
    {
      description: "COMPUTER IN EMAIL -- THE AGENT NOW RUNS FROM YOUR INBOX, AND IT IS LIVE FOR EVERY COMPUTER USER TODAY (2026-08-18, vendor-primary): Perplexity added email as a launch surface for Computer. You '**send, forward, or cc computer@perplexity.com**' -- a new message, a forwarded thread, or a cc on an existing conversation -- and '**Computer verifies the sender, reads the full thread and any attachments, and runs the task with the sender's own connectors and permissions**'. The reply comes back **in the same thread**, with deliverables like **Excel models, PDFs and decks returned as attachments**. **AVAILABILITY IS THE STRONG PART:** '**Computer in Email is available to all Computer users today**' -- no waitlist, no tier gate beyond already having Computer (Pro $20/mo and Max $200/mo per the pricing above). **THE SECURITY MODEL, WHICH IS THE FIRST THING TO ASK ABOUT AN EMAIL-TRIGGERED AGENT:** Perplexity says Computer **verifies the sender before answering**, so 'a task only runs with that person's own access', and for security it '**replies only to the sender**' -- **'Reply all' support for Enterprise is 'coming soon'**, i.e. not shipped. Every email task is a full Computer session viewable on web and mobile '**with the same steps and audit trail**' as a web-app task. **CONTEXT CARRIES OVER:** an email task draws on the same **Brain** self-improving memory as web and Slack sessions, so team terminology, output-format preferences and prior decisions apply. **WHERE IT SITS:** email joins **Computer in Slack** and **Computer in Teams** as the third collaboration surface. Perplexity's rationale is that 'nearly a third of knowledge work still happens over email' and its worked examples are pointedly finance and legal -- forwarding a CIM and data-room thread to get a first-pass LBO model back as Excel, cc'ing Computer on a redline exchange for a summary of open issues, emailing for a five-year DCF. **THE CAUTION WORTH STATING:** a forwarded thread hands the agent everything in that thread including attachments, and the trigger is an email address -- so sender verification is the entire boundary between 'my agent' and 'anyone who can spoof me'. Perplexity does not describe the verification mechanism in the post",
      source: "Perplexity (perplexity.ai/hub/blog/computer-now-works-in-email, dated Aug 18, 2026, fetched 2026-08-20 via curl -- perplexity.ai 403s WebFetch)",
      date: "2026-08-18",
    },
    {
      description: "FIVE-PART RELEASE: PROJECTS, MODEL COUNCIL, US-HOSTED KIMI K3, VOICE MEMORY AND AN OPEN-SOURCE AGENT SECURITY TOOL (2026-08-04, vendor changelog): Perplexity's largest single release since Computer launched, and none of it was picked up by aggregator coverage. **(1) PROJECTS REPLACE SPACES.** Projects are shared Computer workspaces with a **persistent file system where humans and agents edit the same files**, a self-improving memory via **Brain** that carries context between tasks, and **connectors scoped per project** rather than per account. **Every existing Space is migrated automatically** -- if you had Spaces, they are now Projects, so this is a change you get whether or not you wanted it. Collaboration detail that matters for privacy: invited teammates share files, artifacts and history, but '**personal memory and connector accounts stay scoped to each individual**'. You can link a Slack or Teams channel to a project with `/project` and start tasks in-channel with full project context. **(2) MODEL COUNCIL IN COMPUTER** -- assemble '**a board of top models for a single question**': pick **two to eight models across OpenAI, Anthropic, Gemini and open source**, choose an analysis depth, and Computer runs each independently then synthesises **where they agree, where they disagree, and what each uniquely surfaces**, before turning the result into reports or decks. This is the most interesting product idea in the release: it sells model disagreement as the deliverable, which is the opposite of every router that tries to hide it. **(3) KIMI K3, US-HOSTED** -- the 2.8T open-weight frontier model is now in Perplexity and Perplexity Computer for **Pro and Max**, '**hosted exclusively on US-based servers**', with 1M context and native vision, explicitly pitched as getting the model '**without data leaving US infrastructure**'. That is a jurisdictional answer to the main enterprise objection to Chinese models, made possible by the weights being public (see /tools/kimi). **(4) VOICE MODE MEMORY** -- voice on web and Computer now opens with your personalisation context (profession, interests) already loaded, so you stop re-explaining yourself each session. **(5) NUMBAT** -- a genuinely unexpected one: Perplexity released an **open-source agent-detection and response layer** giving security teams live visibility into what AI coding agents do on endpoints, **with the ability to block risky actions before they run**. It ships as a **single Go binary for macOS, Linux and Windows**, integrates with the leading agent harnesses, emits **hook-based and OpenTelemetry telemetry**, enforces **CEL rules** to stop network egress, sensitive file access or shell commands on-device, and can **reconstruct a forensic timeline from on-disk artifacts even with no live telemetry running**. A search company shipping open-source EDR for coding agents is a real signal about where the agent-security gap is",
      source: "Perplexity changelog (perplexity.ai/changelog/shared-workspaces-personal-computer-for-windows-and-model-council, dated 08/04/26, fetched 2026-08-06 via curl -- perplexity.ai 403s WebFetch)",
      date: "2026-08-04",
    },
    {
      description: "PERSONAL COMPUTER FOR WINDOWS (2026-07-28, vendor-primary): Perplexity's agent platform came to Windows -- 'Today we're launching Personal Computer for Windows, bringing Perplexity's agent platform to more than a billion devices globally.' It works on local files (create and edit Word/Excel, find files and file them in Explorer), moves between local files and the web, connects to Microsoft 365 (Word, Excel, PowerPoint, Outlook, Teams) plus 400+ App Connectors, supports voice mode, and hands tasks off from phone to desktop. **AVAILABILITY CORRECTION -- this is NOT Max-gated, contrary to some coverage.** The vendor page states plainly: '**Personal Computer is available now for Pro, Max, and Enterprise subscribers on Windows 10 and 11**' (verified by direct fetch 2026-08-03). Safety posture: it 'always alerts a user before it takes a sensitive action like sending an email or deleting a file', files are created in a secure sandbox, and actions are auditable. Perplexity's own scale claim: Computer has performed 'more than $9.4B in labor-equivalent work' since launching earlier this year. This closes the Mac-only gap the April 2026 launch left open",
      source: "Perplexity blog (perplexity.ai/hub/blog/personal-computer-on-windows, fetched 2026-08-03 via curl -- perplexity.ai 403s WebFetch)",
      date: "2026-07-28",
    },
    {
      description: "BRAIN MEMORY + CLAUDE OPUS 5 UNDERNEATH (2026-07-13 and 2026-07-27, vendor changelog): **Brain**, Perplexity's self-improving memory system, launched in Computer on 7/13 -- it builds a private context graph across sessions, connectors, files and past decisions, refreshes nightly, links every memory back to its source, and can be switched off. Vendor-reported effect: it 'lifted answer correctness 25% and recall 16% while cutting cost 13% on tasks with prior context.' On **7/27 Brain went global for Max subscribers** in 15 languages. Same day, **Claude Opus 5 went live across Perplexity Search and Computer** -- vendor wording: 'On the WANDR benchmark, it outperformed every model tested except Fable 5, while costing 57% less per task.' Also in this window: mid-task orchestrator model switching, one-click website publishing to pplx.app or your own domain via Vercel, and Agent API Skills. Treat the Brain and WANDR figures as first-party",
      source: "Perplexity changelog (perplexity.ai/changelog, entries 2026-07-13 and 2026-07-27)",
      date: "2026-07-27",
    },
    { description: "PERSONAL COMPUTER EXPANSION (2026-05-07, vendor-confirmed): 'Personal Computer is Available to All Mac Users' -- the always-on agent rolled out to **Pro ($20/mo) and Max subscribers via the new Perplexity Mac app**, ending the Max-only gate from the April 16 launch. Runs locally and autonomously (optimized for Mac/Mac mini), 400+ connectors, credit usage tied to subscription tier. Since then: a hybrid local-server inference orchestrator (~2026-06-05, automatic on-device vs cloud task routing, shown at Computex 2026) and an announced **Windows version** (~2026-06-04, orchestrates local apps, files, and 20+ AI models -- not yet shipped)", source: "Perplexity blog (perplexity.ai/hub/blog/personal-computer-is-available-to-all-mac-users), VentureBeat (Computex hybrid inference), heise (Windows version)", date: "2026-06" },
    { description: "Pro Search reached GA in April 2026 with multi-step reasoning across sources. Official Python and TypeScript SDKs also released. File attachment support (PDF/DOC/DOCX/TXT/RTF) rolled out in the same window", source: "TechBriefly, Perplexity blog", date: "2026-04" },
    { description: "Occasionally cites sources that don't actually support the claim being made", source: "Reddit r/perplexity_ai", date: "2026-03" },
  ],
  bestFor: "Researchers, students, professionals, and anyone who needs factual answers with sources. It's what Google should have become.",
  notFor: "Creative writing, brainstorming, or tasks where you need a conversational AI partner. Use Claude or ChatGPT for that.",
  verdict: "Perplexity is the best AI tool for research, period. The citation system means you can actually trust and verify answers instead of blindly hoping the AI didn't hallucinate. It's not trying to be ChatGPT -- it's trying to replace Google for research queries, and it's succeeding. If you do any kind of research work, the Pro plan is worth it.",

  lastReviewedDate: "2026-08-20",
  dataSources: [
    { name: "Perplexity: Computer now works in email -- available to all Computer users (2026-08-18)", url: "https://www.perplexity.ai/hub/blog/computer-now-works-in-email", dateAccessed: "2026-08-20" },
    { name: "Perplexity changelog: Shared workspaces, Personal Computer for Windows, and Model Council (2026-08-04 -- Projects, Model Council, US-hosted Kimi K3, voice memory, Numbat)", url: "https://www.perplexity.ai/changelog/shared-workspaces-personal-computer-for-windows-and-model-council", dateAccessed: "2026-08-06" },
    { name: "Perplexity blog: Personal Computer is Available to All Mac Users (2026-05-07)", url: "https://www.perplexity.ai/hub/blog/personal-computer-is-available-to-all-mac-users", dateAccessed: "2026-06-09" },
    { name: "Perplexity official site", dateAccessed: "2026-04-18" },
    { name: "Engadget: Perplexity Personal Computer for Mac", url: "https://www.engadget.com/ai/perplexity-brings-its-personal-computer-ai-assistant-to-mac-202045969.html", dateAccessed: "2026-04-18" },
    { name: "MacRumors: Perplexity Personal Computer for Mac", url: "https://www.macrumors.com/2026/04/16/perplexity-personal-computer-for-mac/", dateAccessed: "2026-04-18" },
    { name: "Reddit r/perplexity_ai", dateAccessed: "2026-04-18" },
    { name: "Hands-on testing", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://perplexity.ai",
  status: "active",
  personality: {
    oneLiner: "The citation-first researcher",
    tone: "Clean, web-grounded, and clinical. Perplexity treats every answer like a research brief -- short intro, bullet findings, inline citations -- rather than a conversation.",
    quirks: "Hedges less than Claude because it is citing sources rather than stating opinions. Pro Search and Deep Research modes sound almost academic; casual chat feels stiff compared to ChatGPT.",
  },
  metaTitle: "Perplexity AI Review 2026: Projects, Model Council + US-Hosted Kimi K3",
  metaDescription: "Perplexity AI review. Personal Computer agent now included with Pro ($20/mo) via the Mac app since May 7 2026 -- Windows version announced. Pro Search GA, citations-first AI search. June 2026.",
};
