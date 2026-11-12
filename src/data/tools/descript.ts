import { ToolReview } from "@/lib/types";

export const descript: ToolReview = {
  slug: "descript",
  name: "Descript",
  tagline: "**Nov 2026 pricing check: paid plans are Hobbyist $24, Creator $35 and Business $65 per editor per month (from $16 billed annually), each metered in media hours and AI credits.** Edit audio and video by editing text -- the 'Google Docs of media editing' actually lives up to the hype",
  category: "ai-voice-audio",
  url: "https://www.descript.com",

  scores: {
    easeOfUse: 9,
    outputQuality: 8,
    value: 8,
    features: 9,
    overall: 8.5,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["60 media minutes (1 hr) / month", "100 AI credits (one-time)", "720p export with watermark", "5GB cloud storage"],
    },
    {
      plan: "Hobbyist",
      price: "$24",
      period: "month",
      features: ["$16/mo billed annually", "10 media hours / month", "400 AI credits / month", "Export 1080p, watermark-free", "AI Speech with custom voice clones", "1 seat"],
    },
    {
      plan: "Creator",
      price: "$35",
      period: "month",
      features: ["$24/mo billed annually", "30 media hours / month", "800 AI credits / month", "Export 4k, watermark-free", "Full access to Underlord and 20+ AI tools", "Top ups for media hours and AI credits", "Scale to a team of 3 (billed separately)"],
    },
    {
      plan: "Business",
      price: "$65",
      period: "month",
      features: ["$50/mo billed annually", "40 media hours / month", "1500 AI credits / month", "Team-wide Brand Studio", "Translate and dub video in 30+ languages with proofread", "Priority support (with SLA)", "Scale to a team of 5 (billed separately)"],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["AI credits and media hours sized to your team", "SOC 2 Type II: SSO, SCIM, audit logs", "Opt-out of training, custom retention", "Dedicated CSM"],
    },
  ],

  pros: [
    "Text-based editing is a genuine breakthrough -- delete a word from the transcript and it disappears from the video",
    "Filler word removal works shockingly well, it cleaned up an interview in seconds that would've taken an hour manually",
    "Studio Sound feature can make a laptop mic recording sound like it was done in a treated room",
    "Screen recording, transcription, and editing all in one app -- no more juggling three different tools",
  ],
  cons: [
    "The app is resource-heavy -- expect lag and fan noise on anything less than a modern machine with 16GB RAM",
    "Every plan is metered twice -- media hours and AI credits -- and Underlord, generation and Smooth all draw on the credit pool (Hobbyist gets 400 a month, the Free plan 100 one-time)",
    "AI voice clone (Overdub) still sounds noticeably synthetic for longer passages, especially with emotional content",
    "Collaboration features are solid but the real-time sync can be flaky with larger projects",
    "Export times are slow compared to traditional editors like Premiere or DaVinci Resolve",
  ],
  knownIssues: [
    {
      description: "CORRECTION (2026-11-11): this page listed a 'Pro' plan at $33/month with 30 transcription hours and gave Hobbyist 4K export. Descript's live pricing page has no Pro plan: the tiers are Free, Hobbyist ($24 monthly / $16 annual, 10 media hours, 400 AI credits, 1080p), Creator ($35 / $24, 30 media hours, 800 AI credits, 4k), Business ($65 / $50, 40 media hours, 1500 AI credits) and Enterprise (custom). The Free plan is 60 media minutes a month with 100 one-time AI credits and 720p export. Pricing block rewritten from the vendor page; do not restore the Pro / $33 row",
      source: "Descript pricing page (descript.com/pricing, fetched 2026-11-11)",
      date: "2026-11-11",
    },
    {
      description: "JUNE-NOVEMBER 2026 RELEASE ROUNDUPS (vendor changelog): **Nov 6** -- AI-generated layout packs from your brand guidelines (paid plans, uses AI credits); Underlord skills replace prompt templates (templates switch off November 30); deleted projects wait in a trash for 30 days; Firefox officially supported; native Premiere project export in beta; the Descript MCP and API now use Claude Sonnet 5.5 by default and Claude Code and Codex can connect to the MCP. **Oct 12** -- drive-wide search; AI Speech now runs on ElevenLabs v4; Generate video defaults to MiniMax H3 Max Turbo on paid plans (Free stays on PixVerse V4.5); Enterprise drives default to Claude Opus 5.5. **Sep 17** -- caption presets and animations, AI background music and sound effects, local-currency pricing with Apple Pay / Google Pay, and smoothing repriced per second (0.5 AI credits per second of regenerated audio, 1.0 per second of video). **Aug 5** -- Claude Fable 5 as a premium model for paid self-serve and Enterprise, scheduled Rooms, draw-to-edit images",
      source: "Descript changelog (descript.canny.io/changelog -- entries dated 2026-08-05, 2026-09-17, 2026-10-12/13, 2026-11-06)",
      date: "2026-11-06",
    },
    {
      description: "API OPEN BETA + UNDERLORD UPGRADE (2026-05-14, vendor changelog): the **Descript API launched in open beta** -- direct file uploads, publish triggers from external workflows, programmatic project search, and live progress surfaced in Claude and ChatGPT via **MCP connection**. Underlord (the AI editor) gained **context pinning** (@-button attaches files, scenes, timestamps, or individual layers to chat), reasoning-model integration for complex tasks, persistent chat history, and automatic second-pass edit verification. Same entry: ElevenLabs Scribe v2 is now the default transcription engine, GPT Image 2 for image gen, and new media formats (MKV, AVIF, Opus, WebM, multi-channel surround). Earlier (3/17): rebuilt Color adjustment tools with filter presets and a white-balance eyedropper",
      source: "Descript changelog (descript.canny.io/changelog -- 2026-05-14 entry)",
      date: "2026-05-14",
    },
    {
      description: "Projects over 2 hours sometimes experience timeline sync issues where transcript and media drift apart",
      source: "Descript Community Forum",
      date: "2026-03",
    },
    {
      description: "Overdub voice clone occasionally mispronounces common words after recent updates",
      source: "Reddit r/descript",
      date: "2026-02",
    },
  ],
  bestFor: "Podcasters, YouTubers, and content teams who want fast, intuitive editing without learning a traditional NLE.",
  notFor: "Professional video editors who need precise frame-level control and complex compositing.",
  verdict: "Descript genuinely changed how I think about editing. The text-based approach isn't a gimmick -- it's a fundamentally faster way to cut podcasts and talking-head videos. The AI features like filler word removal and Studio Sound save real time. It's not going to replace Premiere for cinematic work, but for content creators who spend most of their time cutting interviews and cleaning up audio, it's the best tool available right now.",

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "Descript pricing page", url: "https://www.descript.com/pricing", dateAccessed: "2026-11-11" },
    { name: "Descript changelog (release roundups Aug 5 - Nov 6, 2026)", url: "https://descript.canny.io/changelog", dateAccessed: "2026-11-11" },
    { name: "Descript official site", dateAccessed: "2026-03-27" },
    { name: "G2 Reviews", dateAccessed: "2026-03-27" },
    { name: "Reddit r/descript", dateAccessed: "2026-03-27" },
  ],
  affiliateUrl: "https://www.descript.com",
  status: "active",
  metaTitle: "Descript Review 2026: Edit Video by Editing Text -- Does It Actually Work?",
  metaDescription: "Descript review. Text-based audio and video editing with AI filler removal, Studio Sound, voice cloning. Hobbyist $24, Creator $35, Business $65/mo.",
};
