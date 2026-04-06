import { ToolReview } from "@/lib/types";

export const soundraw: ToolReview = {
  slug: "soundraw",
  name: "Soundraw",
  tagline: "AI music generator that builds royalty-free tracks you can customize beat by beat",
  category: "ai-music-generators",
  url: "https://soundraw.io",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 7,
    features: 6,
    overall: 7.3,
  },

  hasFreeTier: true,
  pricing: [
    { plan: "Free", price: "$0", features: ["Preview tracks", "No downloads", "Explore the generator"] },
    { plan: "Creator", price: "$11.04", period: "month", features: ["Unlimited MP3 downloads", "Royalty-free for videos, podcasts, ads", "Lifetime license on downloaded tracks"] },
    { plan: "Artist Starter", price: "$19.49", period: "month", features: ["10 MP3 downloads/mo", "Distribute on streaming platforms", "Monetize tracks"] },
    { plan: "Artist Pro", price: "$23.39", period: "month", features: ["20 downloads/mo", "WAV + stem exports", "Streaming distribution"] },
    { plan: "Artist Unlimited", price: "$32.49", period: "month", features: ["Unlimited downloads", "MP3, WAV, and stems", "Full streaming distribution"] },
  ],

  pros: [
    "Dead simple to use -- pick a mood, genre, and tempo and you get a usable track in seconds",
    "The per-section editor lets you tweak energy, instruments, and transitions without starting over",
    "Creator plan is reasonably priced at $11/mo for unlimited downloads",
    "Downloaded tracks stay licensed forever, even after you cancel",
  ],
  cons: [
    "Tracks start sounding samey after a while -- the AI leans on the same patterns and structures",
    "No vocal generation at all, so you're limited to instrumentals and beats",
    "MP3 only on the Creator plan; you need the pricier Artist tiers for WAV and stems",
    "Users have reported getting copyright claims on YouTube despite the royalty-free license",
  ],
  knownIssues: [
    { description: "Some users received copyright strikes on YouTube content made with Soundraw tracks, despite the platform's royalty-free claims", source: "Trustpilot", date: "2025-11" },
    { description: "Billing complaints: users charged after cancellation, with one reporting a $225 charge on a 'yearly installment' they didn't knowingly select", source: "Trustpilot", date: "2025-08" },
  ],
  bestFor: "YouTubers, podcasters, and content creators who need quick background music without licensing headaches. The speed and simplicity are genuinely hard to beat.",
  notFor: "Musicians or producers looking for original-sounding compositions. The output is functional but formulaic, and serious music work needs a real DAW.",
  verdict: "Soundraw is the fastest way to get decent background music for content. The editor is intuitive, the pricing is fair, and the lifetime license on downloads is a nice touch. But the tracks lack variety over time, and the copyright claim reports are concerning for creators who depend on clean monetization. Good utility tool, not a creative one.",

  lastReviewedDate: "2026-04-02",
  dataSources: [
    { name: "Soundraw official site", dateAccessed: "2026-04-02" },
    { name: "Trustpilot reviews", dateAccessed: "2026-04-02" },
    { name: "CyberNews review", dateAccessed: "2026-04-02" },
    { name: "GenMediaLab review", dateAccessed: "2026-04-02" },
  ],
  affiliateUrl: "https://soundraw.io",
  status: "active",
  metaTitle: "Soundraw Review 2026: Fast AI Music, But Does It Hold Up?",
  metaDescription: "Soundraw review with real scores. Quick royalty-free music for creators, but tracks get repetitive. Pricing, pros, cons, and known issues. April 2026.",
};
