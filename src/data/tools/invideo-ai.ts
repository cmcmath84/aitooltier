import { ToolReview } from "@/lib/types";

export const invideoAi: ToolReview = {
  slug: "invideo-ai",
  name: "InVideo AI",
  tagline: "Turn text prompts into fully edited videos with stock footage, voiceover, and music",
  category: "ai-video-generators",
  url: "https://invideo.io",

  scores: {
    easeOfUse: 9,
    outputQuality: 6,
    value: 7,
    features: 7,
    overall: 7.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Starter",
      price: "$20",
      period: "seat/month monthly; $10 billed annually",
      features: ["400 credits per seat/mo (about 160 Nano Banana Pro images or 15 Seedance 2 fast videos)", "Agent Two Lite only; Seedance 2.0 Fast and 2.0 Mini", "Timeline editor, multiplayer editing up to 5 seats", "200 GB storage, 100 premium stock clips"],
    },
    {
      plan: "Plus",
      price: "$60",
      period: "seat/month monthly; $30 billed annually",
      features: ["2,000 credits per seat/mo", "Agent Two Lite, Pro and Ultra; all models including Seedance 2.5 and 2.0 at 4K", "Up to 10 seats plus 10 free guest seats", "600 GB storage, early access features"],
    },
    {
      plan: "Max",
      price: "$150",
      period: "seat/month monthly; $75 billed annually",
      features: ["5,000 credits per seat/mo (10,000 and 15,000 options)", "Everything in Plus", "20 free guest seats, lowest cost per credit"],
    },
  ],

  pros: [
    "Fastest way to go from an idea to a complete video -- type a prompt, get a video in minutes",
    "Automatic stock footage selection is better than expected and usually relevant",
    "AI voiceover sounds decent and supports multiple languages",
    "Good template library for YouTube, TikTok, ads, and explainer formats",
  ],
  cons: [
    "Output looks like a stock footage slideshow -- it won't pass for custom-produced content",
    "AI voiceover is clearly synthetic and lacks the natural cadence of real narration",
    "Limited control over individual clips and transitions without manual editing",
    "At $20-150 per seat per month (half that on annual billing) and credit-metered generation, it's expensive for what is often automated stock footage assembly",
  ],
  knownIssues: [
    {
      description: "PRICE CHECK -- NOW CREDIT-BASED: STARTER $20, PLUS $60, MAX $150 PER SEAT MONTHLY (verified 2026-10-15 on the live pricing page): InVideo has moved from minutes of AI video to **credits** that pay for its agents and for third-party generative models ('All models are available at their original API pricing'; unused credits do not roll over). Plans: **Starter 400 credits, $20/seat monthly or $10 annually**; **Plus 2,000 credits, $60 or $30**; **Max 5,000 credits (10,000/15,000 options), $150 or $75** -- the page labels annual billing '50% off'. Seedance 2.5 and 2.0 and the Agent Two Pro/Ultra agents are Plus and up. This page had shown Plus $25 (50 min) and Max $60 (200 min) since April. **A Free plan was not shown on the 10/15 pricing page** (hasFreeTier left unchanged pending a check of the signup flow).",
      source: "InVideo pricing page (invideo.io/pricing, title 'Pricing | invideo AI') -- fetched 2026-10-15 via curl",
      date: "2026-10-15",
    },
    {
      description: "AI sometimes selects completely irrelevant stock footage that contradicts the narration",
      source: "Reddit r/VideoEditing",
      date: "2026-03",
    },
    {
      description: "Rendering queue can take 15+ minutes during peak hours even for short videos",
      source: "G2 Reviews",
      date: "2026-02",
    },
    {
      description: "Exported videos occasionally have audio sync issues where voiceover drifts from the visuals",
      source: "Trustpilot",
      date: "2026-01",
    },
  ],
  bestFor: "Marketers and small business owners who need quick social media or explainer videos and don't have a video editing background.",
  notFor: "Anyone who needs polished, professional-looking video content. The output screams 'AI-generated stock footage compilation.'",
  verdict: "InVideo AI is impressive as a concept -- type a prompt, get a video. But the reality is that the output looks like what it is: AI-assembled stock footage with a synthetic voiceover. It's useful for quick social media content where production quality isn't critical, but don't expect to fool anyone into thinking these are professionally produced. For the price, tools like CapCut or even Canva's video editor give you more control.",

  lastReviewedDate: "2026-10-15",
  dataSources: [
    { name: "InVideo AI pricing -- Starter $20/$10, Plus $60/$30, Max $150/$75 per seat (monthly/annual), credit-based (verified 2026-10-15)", url: "https://invideo.io/pricing", dateAccessed: "2026-10-15" },
    { name: "InVideo official site", dateAccessed: "2026-04-02" },
    { name: "G2 Reviews", dateAccessed: "2026-04-02" },
    { name: "Reddit r/VideoEditing", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://invideo.io",
  status: "active",
  metaTitle: "InVideo AI Review 2026: Text-to-Video Worth the Price?",
  metaDescription: "Honest InVideo AI review with real scores and pricing. Now credit-based (verified October 2026): Starter $20, Plus $60, Max $150 per seat per month, half that billed annually, with Seedance and Nano Banana models inside. How good are AI-generated videos from text prompts?",
};
