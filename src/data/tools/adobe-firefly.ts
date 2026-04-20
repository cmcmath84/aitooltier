import { ToolReview } from "@/lib/types";

export const adobeFirefly: ToolReview = {
  slug: "adobe-firefly",
  name: "Adobe Firefly",
  tagline: "Adobe's AI image generator -- commercially safe and baked into Creative Cloud",
  category: "ai-image-generators",
  url: "https://firefly.adobe.com",

  scores: {
    easeOfUse: 9,
    outputQuality: 7,
    value: 6,
    features: 7,
    overall: 7.3,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "Free",
      price: "$0",
      features: ["25 credits/mo", "Basic generation", "Watermarked outputs"],
    },
    {
      plan: "Firefly Premium",
      price: "$10.99",
      period: "month",
      features: ["100 credits/mo", "No watermarks", "Adobe Fonts access (price raised from $9.99 in 2026)"],
    },
    {
      plan: "Creative Cloud Standard (new 2026 tier)",
      price: "$54.99",
      period: "month",
      features: ["Middle tier introduced 2026", "1,000 credits/mo", "Core Adobe apps + Firefly integration"],
    },
    {
      plan: "Creative Cloud Pro",
      price: "$69.99",
      period: "month",
      features: ["All Adobe apps", "Higher credit allocations", "Multi-model access (Firefly, GPT Image, Google Imagen/Veo, Flux) directly inside Adobe apps (2026)", "Price raised from $59.99 to $69.99 in 2026"],
    },
    {
      plan: "Photography Plan (1TB)",
      price: "$21.99",
      period: "month",
      features: [
        "Lightroom + Photoshop + 1TB storage",
        "Price raised from $19.99 in 2026",
        "Generative Fill with multi-model picker",
      ],
    },
  ],

  pros: [
    "Trained on licensed content -- legally safe for commercial use (the one area where Adobe has a durable advantage over Midjourney/Flux)",
    "Multi-model picker in 2026 -- Firefly now lets you choose between its own model, GPT Image, Google Imagen, Google Veo, or FLUX inside Photoshop/Illustrator. This is a major change -- Firefly is now a meta-tool, not just Adobe's model",
    "Integrated directly into Photoshop, Illustrator, and other Adobe apps. Generative Fill in Photoshop is still the killer app -- genuinely useful for real design work in a way standalone image gen isn't",
    "Very clean, intuitive web interface and in-app UX for both technical and non-technical users",
  ],
  cons: [
    "Image quality noticeably behind Midjourney and even DALL-E for standalone generation",
    "Credit system is stingy -- 25 free credits go fast",
    "Full value requires an expensive Creative Cloud subscription",
    "Limited style control compared to Stable Diffusion or Leonardo",
  ],
  knownIssues: [
    {
      description: "Firefly AI Assistant (Adobe's agentic Creative Cloud copilot, successor to Project Moonlight) was announced 2026-04-15. Orchestrates multi-step workflows across Photoshop, Premiere, Lightroom, Express, Illustrator, and Firefly from a single chat interface. Public beta opens 'in coming weeks' -- live demos at Adobe Summit 2026-04-19 through 2026-04-22. Worth a re-review when beta opens to the public",
      source: "Adobe blog announcement, TechCrunch",
      date: "2026-04",
    },
    {
      description: "Adobe Summit Day 1 keynote (2026-04-20) shipped five agentic-AI product announcements beyond Firefly AI Assistant: (1) Adobe CX Enterprise -- end-to-end agentic AI for customer-lifecycle management; (2) CX Enterprise Coworker -- agentic AI coworker orchestrating CX workflows; (3) Brand Intelligence + GenStudio expansion -- agentic content supply chain; (4) Brand Visibility Solution -- tooling to help brands stay accurate and cited in AI search / chatbot answers (direct response to GEO/AEO search); (5) expanded partner ecosystem across tech + agencies + SIs. These are CX / enterprise-marketing products, not creative-suite features -- included here as context because Firefly is now part of a much broader agentic stack",
      source: "Adobe newsroom, diginomica, TechRadar Pro live coverage",
      date: "2026-04",
    },
    {
      description: "Generative Fill sometimes produces visible seams and color mismatches at edit boundaries",
      source: "Adobe Community Forums",
      date: "2026-03",
    },
    {
      description: "Free tier watermarks are aggressive and cover a large portion of the image",
      source: "Reddit r/adobefirefly",
      date: "2026-02",
    },
  ],
  bestFor: "Adobe Creative Cloud subscribers who want AI generation baked into their existing workflow. Designers who need commercially safe images.",
  notFor: "Anyone looking for the best standalone AI image generator. The quality doesn't justify the price on its own -- the value is in the Adobe integration.",
  verdict: "Firefly's real strength isn't as a standalone generator -- it's as a feature inside Photoshop. Generative Fill is a game-changer for photo editing. But if you're comparing it to Midjourney or DALL-E purely on image generation quality, it falls short. Worth it if you already pay for Creative Cloud. Hard to justify otherwise.",

  lastReviewedDate: "2026-04-20",
  dataSources: [
    { name: "Adobe: 2026 Creative Cloud pricing + plan changes", url: "https://helpx.adobe.com/account/individual/subscriptions-and-plans/plan-types-and-eligibility/changes-to-individual-plan.html", dateAccessed: "2026-04-17" },
    { name: "Adobe Firefly official site", url: "https://firefly.adobe.com", dateAccessed: "2026-04-17" },
    { name: "G2 Reviews", dateAccessed: "2026-04-17" },
    { name: "Adobe Community Forums", dateAccessed: "2026-04-17" },
    { name: "Hands-on testing", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://firefly.adobe.com",
  status: "active",
  metaTitle: "Adobe Firefly Review 2026: Multi-Model Picker + Creative Cloud Pricing Hike",
  metaDescription: "Adobe Firefly review. 2026 multi-model picker (GPT Image, Imagen, Veo, Flux inside Firefly). CC Pro $69.99/mo, Photography $21.99, Premium $10.99. Scores + pricing changes.",
};
