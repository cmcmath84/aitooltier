import { ToolReview } from "@/lib/types";

export const notionAi: ToolReview = {
  slug: "notion-ai",
  name: "Notion AI",
  tagline: "**Notion changed how Notion AI is paid for on 2026-10-19: Business and Enterprise seats now include 1,500 Standard credits a month for work where Notion picks the model and 500 Select credits for picking a model or running Custom Agents, and extra Notion credits cost $10 per 1,000 monthly or $13 per 1,000 annual. New customers are on it now and existing workspaces move on 2026-11-02. Seat prices stay at $10 Plus and $20 Business per seat a month billed yearly ($12 and $24 billed monthly).** **Notion's 2026-10-13 release lets Business and Enterprise members connect a ChatGPT Plus or Pro subscription to cover their Notion AI usage with no markup, adds a Skills API that syncs Skills to ChatGPT and Claude, column-level database permissions, admin controls for MCP-connected agents, rebuilt GitHub/Jira/Salesforce synced databases and seven new models including GPT-6.1 Sol and Opus 5.5.** **Notion 3.7 (2026-09-15)**: Agent skills for the whole team -- reusable instructions that teach Notion Agent how your team works, kept in a shared skills library and run with a slash command. **Model controls (2026-09-09)**: Business/Enterprise workspace owners can now pick which AI models Notion Agent and Custom Agents may use and set a default -- a cost and compliance lever the page lacked. Also new since July: suggest-edits mode (8/28), a model picker with scorecards (8/14), the Developer Portal in the sidebar (8/19), and AI Meeting Notes triggering Custom Agents (7/31). AI built into Notion -- Custom Agents exited beta 2026-05-04/05 with admin controls (per-agent spend caps, workspace caps, auto-pause on limit) and credit billing live at $10 / 1,000 credits (~$0.17-$0.33 per agent run) as an add-on to Business/Enterprise",
  category: "ai-business-productivity",
  url: "https://notion.so",

  scores: {
    easeOfUse: 9,
    outputQuality: 6,
    value: 6,
    features: 7,
    overall: 7.0,
  },

  hasFreeTier: false,
  pricing: [
    { plan: "Free", price: "$0", features: ["Limited trial of Notion AI", "Basic forms and sites", "Notion Calendar"] },
    { plan: "Plus", price: "$10", period: "seat/month billed yearly ($12 monthly)", features: ["Limited trial of Notion AI (Standard credits)", "Custom forms and sites, charts", "Basic connections"] },
    { plan: "Business", price: "$20", period: "seat/month billed yearly ($24 monthly)", features: ["Notion Agent, Custom Agents, AI Meeting Notes, Enterprise Search", "1,500 Standard and 500 Select credits per seat each month, no rollover or pooling (existing workspaces from 2026-11-02)", "SAML SSO, granular database permissions"] },
    { plan: "Enterprise", price: "Custom", features: ["Custom credit amounts", "Zero data retention with LLM providers", "SCIM, audit log, DLP and SIEM connections", "Bring your own key (private alpha)"] },
    { plan: "Notion credits (add-on)", price: "$10 / 1,000", period: "monthly credits ($13 / 1,000 annual)", features: ["Bought by admins for the workspace", "Covers usage past included Standard and Select credits, high credit consumption models such as Fable and Astra, and workspace-funded Custom Agents"] },
  ],

  pros: [
    "Since 2026-10-13 Business and Enterprise members with ChatGPT Plus or Pro can connect that plan to pay for Notion AI usage on GPT models with no Notion markup, and a Skills API keeps the same Skills in sync across Notion, ChatGPT and Claude",
    "Zero friction if you already use Notion -- AI is right there in your existing documents and databases",
    "Q&A across your workspace is genuinely useful for finding information buried in old pages",
    "Summarizing long meeting notes and project docs into action items works well and saves real time",
    "Autofill for database properties is a quiet killer feature -- it can tag, categorize, and extract data automatically",
  ],
  cons: [
    "The writing quality is generic ChatGPT-level output -- fine for first drafts but needs heavy editing",
    "Credits now gate everything: Business seats include 1,500 Standard and 500 Select credits a month that do not roll over or pool, picking Fable or Astra draws on paid workspace credits ($10 per 1,000), and AI Meeting Notes start using Standard credits on 2026-12-01",
    "External connectivity is young -- Database Sync, MCP connections, and External Agents (Notion 3.6) are new and still beta-grade in places",
    "Q&A sometimes confidently returns wrong answers based on outdated or irrelevant pages in your workspace",
  ],
  knownIssues: [
    {
      description: "NEW CREDIT SYSTEM, A CHEAPER AUTO ROUTER AND CHATGPT GO SUPPORT (2026-10-19, vendor-primary): 'Business and Enterprise seats come with 1,500 Standard credits per month, for work where Notion picks the model, and 500 Select credits per month, for work where you pick the model or to run your Custom Agents.' Credits are per member, reset monthly and do not roll over or pool. Workspace Notion credits ($10 per 1,000 monthly, $13 per 1,000 annual) cover usage beyond that, high credit consumption models such as Fable and Astra, and workspace-funded Custom Agents, when an admin turns this on. 'The new system is live today for new customers. Existing customers move over on November 2'; Custom Agents created before November 2 keep drawing on shared workspace credits, and AI Meeting Notes start using Standard credits on 2026-12-01 (about 10 per one-hour meeting). Notion says its Auto router matched Opus 5.5 and Astra on 20+ common tasks at about 90% lower average cost (its help page says 87%). Also: agents get their own computer and browser for long tasks (the release says up to 24 hours, the blog more than 24), ChatGPT Plus, Pro or Go accounts can power the personal Notion Agent (Go is new since 10/13; not Custom Agents), BYOK is in alpha for Enterprise, and an AI Command Center is coming. Seat prices are unchanged; our old 'Plus + AI $18' and 'Business + AI $28' add-on rows were out of date and are replaced.",
      source: "Notion releases (notion.com/releases/2026-10-19) + Notion blog (notion.com/blog/notion-ai-more-for-less, datePublished 2026-10-19) + Notion help (what-are-notion-credits, manage-your-ai-credits, how-ai-credits-work-for-custom-agents, auto) + notion.com/pricing (curl yearly view, Firecrawl monthly view), all fetched 2026-10-29",
      date: "2026-10-19",
    },
    {
      description: "PAY FOR NOTION AI WITH YOUR CHATGPT PLAN, SKILLS API, COLUMN PERMISSIONS, MCP CONTROLS (2026-10-13 release, vendor-primary): Notion's 'all about context' release. **(1) ChatGPT subscription billing:** 'If you have ChatGPT Plus or Pro, your subscription can now cover your AI usage in Notion. Just connect your plan, pick a GPT model, and go. We don't add a markup.' **Available for Business and Enterprise plans.** This is the 'Sign in with ChatGPT' item earlier sweeps deferred; it changes the cost maths for heavy users who already pay OpenAI, but only for GPT models and only on the two top Notion tiers. **(2) Skills:** a new **Skills API** syncs Skills stored in Notion to ChatGPT, Claude 'and more' (it 'loads Skills from Notion into GitHub'). **(3) Agents from outside:** any MCP-compatible agent ('Claudes, Muses, GrokBots, Dots') can read and update the workspace; **Notion MCP controls** let admins see who connected each AI tool, when it was last used, and revoke one person's access; 150+ MCP connections feed Notion Agent and Custom Agents (HubSpot, Stripe, Cloudflare named). **(4) Column permissions** -- long-requested -- let database owners set which properties each person or agent can view or edit. **(5)** Upgraded version history with attribution for agent edits; rebuilt synced databases for GitHub, Jira and Salesforce with live health status; **seven new models including GPT-6.1 Sol, GPT-6 Luna, Opus 5.5 and Sonnet 5.5**; a public 'Knowledge Board' of model performance on knowledge work; redesigned Connections settings with admin allow-lists; Notion notifications in Microsoft Teams. No price change to Notion's own plans or credits was announced.",
      source: "Notion releases (notion.com/releases/2026-10-13) -- fetched 2026-10-15 via curl",
      date: "2026-10-13",
    },
    {
      description: "SKILLS BECOME A SHARED TEAM ASSET -- NOTION 3.7 (2026-09-15, vendor releases page; published one day after this page was last reviewed). Notion 3.7 introduces **Agent skills**: 'reusable instructions that teach AI how your team works', such as generating a monthly business review in the team format or critiquing a doc the way a manager would. A **skills library** gives the workspace 'one hub for all shared skills'; related skills can live in a Notion database and be shared one at a time or as a whole database, with everyone on the latest version. Skills are created by chatting with Notion Agent ('Review this feature proposal using our product, design, and engineering standards'), Notion can suggest skills 'based on the work you already do', and a skill is run by typing / in a Notion Agent chat. Why it matters for this page: combined with the 9/09 model controls, admins now govern both which models agents use and which procedures they follow, which is the missing piece for the Custom Agents credit billing recorded below to be predictable at team scale. No pricing change announced with 3.7.",
      source: "Notion releases: 'Notion 3.7: Agent skills for your whole team' (notion.com/releases/2026-09-15, fetched 2026-09-28)",
      date: "2026-09-15",
    },
    {
      description: "MODEL CONTROLS FOR AGENTS, SUGGEST-EDITS MODE, AND A MODEL PICKER WITH SCORECARDS -- SIX NOTION RELEASES SINCE THIS PAGE WAS LAST REVIEWED (2026-07-31 to 2026-09-09, all vendor release notes; page last reviewed 7/18): **(1) Model controls (2026-09-09):** 'workspace owners can choose which AI models are available in **Notion Agent and Custom Agents separately**, and set a default model for Custom Agents' -- pitched as 'keep costs predictable and support your compliance needs.' **Business and Enterprise plans only**, under Settings -> Notion AI -> General -> Model controls. This is the first admin-side lever over which vendor's model handles company data inside Notion, and it pairs with the per-agent spend caps recorded in May. **(2) Suggest edits (2026-08-28):** agents 'can now propose changes instead of making them directly' -- ask for 'suggest edits' and approve each one top to bottom; Notion positions it for line-level passes like grammar. **(3) Developer Portal in the sidebar (2026-08-19):** manage Workers, connections and personal access tokens from a new Developer section, see deployed Workers and per-run logs, and a **developer bar** that surfaces page/database/block/workspace/user IDs (or the full API object) in one click; enable under Settings -> Developer. **(4) Model selection, simplified (2026-08-14):** the picker 'now leads with a shortlist of models made for your hardest tasks, and every model has a **scorecard to compare speed, intelligence, and cost**', with pinning and an effort dial. **(5) Share context from the Share menu (2026-08-07)** -- share a doc or database directly to a Custom Agent. **(6) AI Meeting Notes can trigger Custom Agents (2026-07-31):** a 'Meeting note summarized' trigger runs an agent after a call -- update a tracker, post a recap, file tickets. **NET:** no pricing change and no plan restructure in the window; credit billing ($10 / 1,000 credits) and the Business/Enterprise gating on Custom Agents stand. The direction is admin control and agent governance, which is what Enterprise buyers were asking for after the May GA.",
      source: "Notion releases (notion.com/releases/2026-09-09, /2026-08-28, /2026-08-19, /2026-08-14, /2026-08-07, /2026-07-31) -- all fetched 2026-09-14 via curl",
      date: "2026-09-09",
    },
    {
      description: "PRODUCT (2026-07-09, vendor release notes): **Notion Workers are now shareable across teams** -- 'You can now share your Notion Workers': build a Worker once, distribute it to power Custom Agents across departments, with two permission tiers (`Can connect` = teammates use it; `Full access` = teammates can modify/repurpose it). Managed from the Developer Portal (Settings -> Connections). Example use: one teammate's Salesforce Worker powering sales + marketing agents org-wide. REMINDER on the money clock: Workers remain free until **August 11, 2026, when the credit system begins** (announced with Platform 3.5) -- shared Workers spreading through an org now will start metering then; audit which Workers teams depend on before the flip",
      source: "Notion releases (notion.com/releases/2026-07-09)",
      date: "2026-07-09",
    },
    {
      description: "NOTION 3.6 (2026-07-01, vendor releases page): the External Agents alpha from Platform 3.5 is now a headline feature -- **External Agents (Claude and Cursor first)** can be assigned tasks from a shared board, @-mentioned like teammates, and watched as they run; **multi-agent workflows** bring several agents into one UI to automate workflows end-to-end. Also shipped: **interactive HTML blocks** (agents build ROI calculators/quizzes/org-chart visualizers that live in Notion), **speaker identification in AI Meeting Notes** (mic-based) + audio file uploads, **Microsoft Office file support** (create/read PPTX/XLSX/DOCX), **Outlook Mail + Calendar integration**, 5 new MCP connections for Custom Agents (Mercury, Mixpanel, Miro, Box, ClickHouse), expanded model options (**Opus 4.8, Grok 4.3, GLM 5.2**), Custom Agent audit logging (Enterprise), and Windows CLI support. The 'Notion can't reach outside Notion' criticism is now largely obsolete",
      source: "Notion releases (notion.com/releases/2026-07-01)",
      date: "2026-07-01",
    },
    {
      description: "DEVELOPER PLATFORM 3.5 (2026-05-13, vendor releases page): Notion's biggest platform release of 2026 -- **Notion Workers** (hosted runtime: deploy custom code via CLI into a Notion-managed sandbox; **free during beta, pricing starts August 11, 2026** billed in Notion credits), **Database Sync beta** (sync any API source -- Zendesk, Salesforce -- into Notion databases), **bidirectional webhook triggers** (external apps can now trigger Notion workflows), Custom Agent Tools beta, a Notion CLI, an **External Agents API alpha** (Claude, Codex, and Decagon agents operating inside Notion -- waitlist), Agent SDK alpha, and a Developer Portal (app.notion.com/developers). Also notable: Notion MCP rebuilt to be 91% more token-efficient on database operations. Earlier in May: **Plan Mode** (5/7) -- agents ask clarifying questions and present a plan before bulk edits. Mark your calendar on the Workers pricing date if you build on the beta",
      source: "Notion releases (notion.com/releases/2026-05-13), Notion help center",
      date: "2026-05-13",
    },
    {
      description: "PRODUCT + PRICING (2026-05-04 / 2026-05-05): Notion **Custom Agents** exited beta with admin-grade governance controls: **per-agent spend caps**, **workspace-wide credit caps**, **auto-pause on limit** (agents stop before exceeding budget rather than soft-billing over), **creator permissions** (control who in a workspace can build agents), and a **credits dashboard** for monthly spend visibility. Same window: **credit billing went live at $10 per 1,000 credits** as a paid add-on to Business/Enterprise plans. Notion's own help docs estimate ~30-60 agent runs per 1,000 credits -- so roughly $0.17 to $0.33 per agent run depending on workload complexity. The free-Skills-framework window that ran through 2026-05-03 is now closed. Material for any team that built workflows on Custom Agents during the free trial -- those workflows now meter. Sets up the comparison to n8n's per-execution pricing + Microsoft Agent 365's $15/user/mo flat rate (5/1 GA).",
      source: "Notion releases (notion.com/releases/2026-05-05), Notion help (notion.com/help/custom-agent-pricing)",
      date: "2026-05-05",
    },
    {
      description:
        "Notion's April 2026 release (2026-04-14) introduced Agent integrations -- Notion Agent can now connect Calendar, Mail, and Slack to read and summarize across systems. Custom Agents with Skills framework (free through 2026-05-03). AI Meeting Notes now live in Command Search with custom formatting. n8n integration for building custom agents against Notion data",
      source: "Notion releases (2026-04-14), Fazm Blog",
      date: "2026-04",
    },
    {
      description:
        "AI Q&A occasionally cites the wrong source page, leading users to incorrect information",
      source: "Reddit r/Notion",
      date: "2026-02",
    },
    {
      description:
        "Autofill on large databases can be slow and sometimes times out without completing",
      source: "Notion Community Forum",
      date: "2026-03",
    },
  ],
  bestFor:
    "Teams already deep in Notion who want AI assistance without adding another tool to the stack.",
  notFor:
    "Anyone not already using Notion -- the AI alone isn't a reason to switch workspace tools.",
  verdict:
    "Notion AI is convenient, not exceptional. If Notion is already your team's brain, the AI features add genuine value for summarization and workspace search. But the writing output is mediocre, the per-member pricing adds up fast, and you can get better AI writing from dedicated tools. It's a nice-to-have, not a must-have.",

  lastReviewedDate: "2026-10-29",
  dataSources: [
    { name: "Notion: More AI for less, new credit system (2026-10-19)", url: "https://www.notion.com/blog/notion-ai-more-for-less", dateAccessed: "2026-10-29" },
    { name: "Notion releases: October 19, 2026", url: "https://www.notion.com/releases/2026-10-19", dateAccessed: "2026-10-29" },
    { name: "Notion help: What are Notion credits ($10 per 1,000 monthly, $13 per 1,000 annual)", url: "https://www.notion.com/help/what-are-notion-credits", dateAccessed: "2026-10-29" },
    { name: "Notion pricing: Plus $10 / Business $20 per seat billed yearly ($12 / $24 monthly)", url: "https://www.notion.com/pricing", dateAccessed: "2026-10-29" },
    { name: "Notion releases -- 2026-10-13: ChatGPT Plus/Pro covers Notion AI usage, Skills API, column permissions, MCP controls, seven new models", url: "https://www.notion.com/releases/2026-10-13", dateAccessed: "2026-10-15" },
    { name: "Notion releases: Notion 3.7 -- Agent skills for your whole team, skills library (2026-09-15)", url: "https://www.notion.com/releases/2026-09-15", dateAccessed: "2026-09-28" },
    { name: "Notion releases 2026-09-09 -- Control which AI models your agents can use (Business/Enterprise)", url: "https://www.notion.com/releases/2026-09-09", dateAccessed: "2026-09-14" },
    { name: "Notion releases 2026-08-28 -- Ask your agent to suggest edits", url: "https://www.notion.com/releases/2026-08-28", dateAccessed: "2026-09-14" },
    { name: "Notion releases 2026-08-19 -- Developer Portal in the sidebar, developer bar", url: "https://www.notion.com/releases/2026-08-19", dateAccessed: "2026-09-14" },
    { name: "Notion releases 2026-08-14 -- Model selection simplified, per-model scorecards", url: "https://www.notion.com/releases/2026-08-14", dateAccessed: "2026-09-14" },
    { name: "Notion releases 2026-07-31 -- AI Meeting Notes can trigger Custom Agents", url: "https://www.notion.com/releases/2026-07-31", dateAccessed: "2026-09-14" },
    { name: "Notion releases 2026-07-09 (shareable Workers)", url: "https://www.notion.com/releases/2026-07-09", dateAccessed: "2026-07-18" },
    { name: "Notion releases 2026-04-14", url: "https://www.notion.com/releases/2026-04-14", dateAccessed: "2026-04-18" },
    { name: "Fazm Blog: Notion AI April 2026", url: "https://fazm.ai/blog/notion-ai-releases-april-2026-complete-list-of-every-ai-feature-shipped", dateAccessed: "2026-04-18" },
    { name: "Reddit r/Notion", dateAccessed: "2026-04-18" },
    { name: "G2 Reviews", dateAccessed: "2026-04-18" },
  ],
  affiliateUrl: "https://notion.so",
  status: "active",
  metaTitle: "Notion AI Review 2026: New Credit System (1,500 Standard + 500 Select per Seat), ChatGPT Plans, Agents",
  metaDescription: "Notion AI review. Since Oct 19, 2026 Business and Enterprise seats include 1,500 Standard and 500 Select AI credits a month, with extra credits at $10 per 1,000; existing workspaces switch Nov 2. Seats stay $10 Plus and $20 Business billed yearly. ChatGPT Plus, Pro or Go can power Notion Agent.",
};
