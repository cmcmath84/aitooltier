import { ToolReview } from "@/lib/types";

export const gptCyber: ToolReview = {
  slug: "gpt-cyber",
  name: "GPT-5.4-Cyber (OpenAI)",
  tagline: "OpenAI's defensive-cybersecurity variant of GPT-5.4, launched 2026-04-16. Lowered refusal boundary for security-research tasks and native binary reverse-engineering. Access gated via Trusted Access for Cyber (TAC) program -- thousands of verified defenders, hundreds of teams, no public pricing",
  category: "ai-llms",
  url: "https://openai.com/index/scaling-trusted-access-for-cyber-defense/",

  scores: {
    easeOfUse: 5,
    outputQuality: 8.5,
    value: 7,
    features: 8,
    overall: 7.2,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Trusted Access for Cyber (TAC) -- gated",
      price: "Not publicly disclosed",
      features: [
        "Verified access for defenders, red/blue-team practitioners, and enterprise SOC teams",
        "Eligibility reviewed by OpenAI -- application-only",
        "Thousands of individual defenders + hundreds of teams currently enrolled per OpenAI's announcement",
        "No self-serve sign-up; no consumer tier",
      ],
    },
    {
      plan: "ChatGPT / API (general-availability GPT-5.4)",
      price: "See chatgpt / chatgpt-pricing",
      features: [
        "GPT-5.4-Cyber capabilities are NOT available in standard GPT-5.4",
        "If you are not in TAC, you use standard GPT-5.4 and it will refuse most offensive-security-adjacent requests",
      ],
    },
  ],

  pros: [
    "Directly competes with Claude Mythos Preview on the cyber-defense axis -- OpenAI's explicit response to Anthropic's Project Glasswing. Two of the three frontier labs are now shipping dedicated cyber-tuned models to vetted defenders",
    "Lowered refusal boundary on defensive-security work (vulnerability research, reverse engineering, IR analysis) is the real differentiator -- standard GPT-5.4 will refuse most of these requests by default",
    "Native binary reverse-engineering is a capability step-change for a foundation model -- previously required heavy tooling (Ghidra/IDA Pro scaffolding) to get useful output",
    "TAC enrollment gives you a direct line to OpenAI's safety + red-team review process -- valuable if you're on a team that actually builds defensive tools",
  ],
  cons: [
    "You cannot simply buy access. If you are not inside the TAC program, this tool is functionally invisible -- there is no Plus/Pro/Team SKU that unlocks GPT-5.4-Cyber",
    "No public pricing means no clear way to evaluate cost-per-token or per-seat total cost. Enterprises procuring this go through OpenAI's account team, not a billing console",
    "'Lowered refusal boundary' is not 'no refusal' -- OpenAI still applies safety policy, which means sophisticated red teams may still hit refusals on the specific prompts they care most about. Claude Mythos Preview is perceived to go slightly further on security capability, though neither vendor has published head-to-head evals",
    "Gated access is a real procurement obstacle for smaller security shops that can't get a meeting with OpenAI's enterprise team",
  ],
  knownIssues: [
    {
      description: "TAC enrollment is reviewed manually -- expect weeks to months for approval. Smaller individual researchers have reported being declined or put on hold; enterprise SOC teams with a named account manager get faster turnaround",
      source: "CyberScoop, AI Business coverage",
      date: "2026-04",
    },
    {
      description: "Direct competitive positioning vs. Claude Mythos Preview. Both are gated-access cyber-tuned frontier models as of April 2026. If you get declined by one, applying to the other is a reasonable next step -- the programs are not exclusive with each other",
      source: "OpenAI + Anthropic launch posts, The Hacker News",
      date: "2026-04",
    },
    {
      description: "No public benchmark scores vs. Claude Mythos. Both vendors cite internal cyber-capability evals but neither has released a shared third-party benchmark, so head-to-head comparisons are anecdotal as of April 2026",
      source: "OpenAI announcement, Anthropic Mythos announcement",
      date: "2026-04",
    },
  ],
  bestFor: "Enterprise SOC teams, established security research orgs, and vetted individual defenders who can qualify for Trusted Access for Cyber. Strongest fit if your work involves binary analysis, vulnerability research, or defensive-security tooling where standard GPT-5.4 refusals actually block the work.",
  notFor: "Anyone who can't clear TAC enrollment -- this includes most indie researchers, small consultancies, and students. For those audiences, standard GPT-5.4 (via ChatGPT Plus) or Claude Opus 4.7 are the realistic options. Also not for offensive-security workflows -- the model is tuned for defense, and refusal patterns reflect that.",
  verdict: "GPT-5.4-Cyber is one half of the two-model cyber-access picture in 2026 (the other being Anthropic's Claude Mythos Preview). Both are frontier models with relaxed refusals for vetted defenders. If you are on a team that qualifies, apply to both -- the programs are complementary, not exclusive. If you don't qualify, the tool is effectively invisible: there is no consumer tier, no published pricing, and no self-serve path. That gating is the whole point, but it also means most of the buzz around GPT-5.4-Cyber is watched from outside the program rather than evaluated from inside it. For now, the honest read is: it exists, it's meaningful if you can get in, and the public-SERP question is 'how do I get TAC access,' not 'should I buy this.'",

  lastReviewedDate: "2026-04-19",
  dataSources: [
    { name: "OpenAI: Scaling Trusted Access for Cyber", url: "https://openai.com/index/scaling-trusted-access-for-cyber-defense/", dateAccessed: "2026-04-19" },
    { name: "The Hacker News: OpenAI GPT-5.4-Cyber", url: "https://thehackernews.com/2026/04/openai-launches-gpt-54-cyber-with.html", dateAccessed: "2026-04-19" },
    { name: "CyberScoop: TAC program expansion", url: "https://cyberscoop.com/openai-expands-trusted-access-for-cyber-to-thousands-for-cybersecurity/", dateAccessed: "2026-04-19" },
    { name: "Bloomberg: OpenAI cyber model release", url: "https://www.bloomberg.com/news/articles/2026-04-14/openai-releases-cyber-model-to-limited-group-in-race-with-mythos", dateAccessed: "2026-04-19" },
  ],
  affiliateUrl: "https://openai.com/index/scaling-trusted-access-for-cyber-defense/",
  status: "active",
  metaTitle: "GPT-5.4-Cyber Review 2026: OpenAI's Defensive-Cyber Model (Trusted Access Only)",
  metaDescription: "GPT-5.4-Cyber review. OpenAI's cyber-tuned GPT-5.4 (launched Apr 16 2026). Trusted Access for Cyber (TAC) program only, no public pricing. vs Claude Mythos Preview.",
};
