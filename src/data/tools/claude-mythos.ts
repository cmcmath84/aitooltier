import { ToolReview } from "@/lib/types";

export const claudeMythos: ToolReview = {
  slug: "claude-mythos",
  name: "Claude Mythos Preview",
  tagline: "Anthropic's most capable model -- a gated research preview via Project Glasswing, cybersecurity-specialized. 73% success on expert CTF tasks, 32-step autonomous network attacks. Not generally available.",
  category: "ai-llms",
  url: "https://red.anthropic.com/2026/mythos-preview/",

  scores: {
    easeOfUse: 2,
    outputQuality: 10,
    value: 5,
    features: 9,
    overall: 6.5,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Project Glasswing (Gated)",
      price: "Invite only",
      features: [
        "Not publicly available -- access limited to ~50 pilot organizations",
        "Founding partners: Amazon, Apple, Google, Cisco, CrowdStrike, JPMorgan, Microsoft, Nvidia",
        "$100M in total Anthropic credit commitments across partners",
        "$4M in open-source security donations",
        "Cybersecurity research and defense use cases only",
      ],
    },
    {
      plan: "Public access",
      price: "Not available",
      features: [
        "Anthropic deliberately withholding broad release due to cybersecurity risk",
        "For general-purpose work, use Claude Opus 4.7 (see /tools/claude)",
        "Anthropic describes Mythos as 'less broadly capable' than Opus 4.7 outside cyber tasks",
      ],
    },
  ],

  pros: [
    "The most capable Anthropic model available -- meaningfully stronger than Opus 4.7 on cybersecurity reasoning, long-horizon autonomy, and multi-step attack/defense planning per Anthropic's published evaluations",
    "73% success rate on expert-level Capture-the-Flag tasks -- a benchmark other frontier models (GPT-5.x, Gemini 3.1 Pro, Opus 4.7) are well below",
    "Autonomously executes 32-step network attacks in Anthropic's red-team evals -- demonstrates sustained agentic capability on security tooling without losing track",
    "Paired with Project Glasswing: a coalition model where 8 founding enterprise partners get controlled access, $100M in credits, and shared threat intelligence",
  ],
  cons: [
    "Not available to the public. If you're reading this thinking you might use it: you probably can't. Invite-only rollout to ~50 orgs with active cybersecurity or research commitments",
    "Even if you are in a Glasswing partner org, access is heavily gated -- deployment requires explicit use-case approval and extensive safety review",
    "Specialized for security work. Anthropic explicitly notes Mythos is 'less broadly capable' than Opus 4.7 outside the cyber domain -- so it is NOT the answer for general coding, writing, or analysis work",
    "Anthropic withholding the weights and API access is a policy call, not a technical one. This is the first time a frontier Claude model has been deliberately kept out of the API, signaling a new safety/release posture you should expect to see repeat",
  ],
  knownIssues: [
    {
      description: "Mythos's cybersecurity capability is the reason for its gated release. Anthropic's red-team evaluations showed the model could plan end-to-end network intrusion chains, which Anthropic deemed too risky for open API access",
      source: "Anthropic Project Glasswing announcement, Axios, CNBC, Schneier on Security",
      date: "2026-04",
    },
    {
      description: "Naming convention is confusing: 'Claude Mythos Preview' is the public product name, internal codename was Capybara, and it's sometimes referred to as 'Mythos 5' by third-party reporters (there is no Mythos 1-4)",
      source: "Axios, Fortune",
      date: "2026-04",
    },
    {
      description: "Access applications are not open -- Anthropic is approaching partner orgs directly rather than accepting inbound requests",
      source: "Anthropic Glasswing page",
      date: "2026-04",
    },
    {
      description: "Axios reported 2026-04-19 that the NSA is among the ~40 orgs with Mythos access, despite the Pentagon's formal supply-chain risk designation of Anthropic. Dario Amodei reportedly met with W.H. Chief of Staff Susie Wiles and Treasury Secretary Scott Bessent on 2026-04-17. Material context if you are evaluating Mythos / Glasswing in a federal or defense-adjacent procurement -- the political posture inside the US government is not uniform",
      source: "Axios, TechCrunch, Engadget",
      date: "2026-04",
    },
  ],
  bestFor: "Partner organizations in Project Glasswing doing cybersecurity research, defensive red-teaming, threat intelligence, or large-scale vulnerability triage. If your use case is legitimate cybersecurity and you have enterprise Anthropic contact, ask about Glasswing admission.",
  notFor: "Everyone else. For general coding, writing, analysis, agent work, or consumer use: use Claude Opus 4.7 (see /tools/claude). It is Anthropic's most capable generally-available model, and for >95% of real-world tasks it's functionally equivalent.",
  verdict: "Claude Mythos Preview is the first frontier Claude model Anthropic deliberately kept out of the public API. Announced alongside Project Glasswing on April 7, 2026, it's a cybersecurity-specialized model that posts uncommonly high scores on expert CTF tasks and long-horizon agentic security work -- high enough that Anthropic judged broad release too risky. For the ~50 pilot organizations with access (including Apple, Google, Microsoft, Nvidia, JPMorgan), Mythos is a real capability leap on security-domain tasks. For everyone else, it's a signal about where frontier release policy is heading: expect more 'gated preview' drops that never reach broad GA. If you're not in Glasswing, use Opus 4.7 and don't lose sleep over it -- the general-purpose quality gap is small outside the cyber niche.",

  lastReviewedDate: "2026-04-20",
  dataSources: [
    { name: "Anthropic: Project Glasswing", url: "https://www.anthropic.com/glasswing", dateAccessed: "2026-04-17" },
    { name: "Anthropic Red: Mythos Preview", url: "https://red.anthropic.com/2026/mythos-preview/", dateAccessed: "2026-04-17" },
    { name: "Fortune: Anthropic's Mythos model + Project Glasswing", url: "https://fortune.com/2026/04/07/anthropic-claude-mythos-model-project-glasswing-cybersecurity/", dateAccessed: "2026-04-17" },
    { name: "Axios: Anthropic releases Opus 4.7, concedes it trails unreleased Mythos", url: "https://www.axios.com/2026/04/16/anthropic-claude-opus-model-mythos", dateAccessed: "2026-04-17" },
    { name: "Schneier on Security: On Mythos Preview and Project Glasswing", url: "https://www.schneier.com/blog/archives/2026/04/on-anthropics-mythos-preview-and-project-glasswing.html", dateAccessed: "2026-04-17" },
    { name: "CNBC: Anthropic Opus 4.7 less risky than Mythos", url: "https://www.cnbc.com/2026/04/16/anthropic-claude-opus-4-7-model-mythos.html", dateAccessed: "2026-04-17" },
    { name: "Axios: NSA uses Mythos despite Pentagon feud (2026-04-19)", url: "https://www.axios.com/2026/04/19/nsa-anthropic-mythos-pentagon", dateAccessed: "2026-04-20" },
    { name: "TechCrunch: NSA spies reportedly using Anthropic Mythos", url: "https://techcrunch.com/2026/04/20/nsa-spies-are-reportedly-using-anthropics-mythos-despite-pentagon-feud/", dateAccessed: "2026-04-20" },
  ],
  affiliateUrl: "https://red.anthropic.com/2026/mythos-preview/",
  status: "active",
  personality: {
    oneLiner: "The gated red-team specialist",
    tone: "When Anthropic does publish Mythos outputs (in sanitized research reports), the voice is careful, technically dense, and deliberately unperformed -- much more 'senior security researcher writing an internal memo' than Claude Opus's conversational style.",
    quirks: "Mythos is tuned to produce its cybersecurity reasoning with extensive show-your-work traces. Anthropic publishes some outputs with full CoT visible as evidence of capability claims. Outside of security tasks, the model reportedly sounds much like Opus 4.6 / 4.7 -- Anthropic hasn't published a distinct general-purpose voice for Mythos.",
  },
  metaTitle: "Claude Mythos Preview (Project Glasswing): Anthropic's Gated Cybersecurity Model",
  metaDescription: "Claude Mythos Preview review. Anthropic's gated research preview: 73% expert CTF tasks, 32-step autonomous network attacks, ~50-org Project Glasswing rollout. Not publicly available. April 2026.",
};
