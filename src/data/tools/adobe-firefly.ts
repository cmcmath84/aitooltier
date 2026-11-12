import { ToolReview } from "@/lib/types";

export const adobeFirefly: ToolReview = {
  slug: "adobe-firefly",
  name: "Adobe Firefly",
  tagline: "**Adobe MAX (Nov 10): Firefly Design and Firefly Graph arrive in beta, AI Assistant beta spreads to the Creative Cloud desktop apps, and Adobe closed its Topaz Labs acquisition on Sept 23. Firefly plans now run Standard $9.99, Pro $19.99, Pro Plus $49.99 and Premium $199.99 a month.** Adobe's all-in-one creative AI studio -- commercially safe Firefly models plus partner models from Google, OpenAI, Kling, Luma and Runway, baked into Creative Cloud. Firefly AI Assistant (beta since 2026-04-27) orchestrates multi-step workflows across Photoshop, Lightroom, Premiere, and Illustrator from a single chat",
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
      features: ["Limited free daily generations for images and video", "Limited access to top AI models from Adobe, Google, OpenAI, and more", "Image and video editors, Firefly Boards", "1 concurrent generation"],
    },
    {
      plan: "Firefly Standard",
      price: "$9.99",
      period: "month",
      features: ["2,000 monthly generative credits (up to 400 images and 20 five-second videos)", "Access to top AI models from Adobe, Google, OpenAI, and more", "2 concurrent generations", "Adobe Fonts"],
    },
    {
      plan: "Firefly Pro",
      price: "$19.99",
      period: "month",
      features: ["4,000 monthly generative credits", "Unlimited image generations on select models for the first year", "4 concurrent generations", "Adobe Express Premium + Photoshop on web and mobile", "Promo: $9.99/mo for the first 6 months, ends Dec 6"],
    },
    {
      plan: "Firefly Pro Plus",
      price: "$49.99",
      period: "month",
      features: ["10,000 monthly generative credits", "Unlimited image generations on all models (1K/2K) and unlimited video on select models for the first year", "6 concurrent generations", "Firefly Graph (beta)", "Promo: $19.99/mo for the first 6 months, ends Dec 6"],
    },
    {
      plan: "Firefly Premium",
      price: "$199.99",
      period: "month",
      features: ["50,000 credits", "Unlimited access to the Firefly Video model", "Built for creating content at scale"],
    },
    {
      plan: "Creative Cloud Standard",
      price: "$54.99",
      period: "month (annual, billed monthly)",
      features: ["Top Creative Cloud apps like Photoshop, Illustrator, Acrobat Pro", "Firefly integration inside the apps"],
    },
    {
      plan: "Creative Cloud Pro",
      price: "$69.99",
      period: "month (annual, billed monthly)",
      features: ["20+ apps, including Photoshop, Illustrator, and Premiere, plus Adobe Firefly creative AI", "Multi-model access (Firefly plus partner models) directly inside Adobe apps", "New-subscriber promo: $34.99/mo for the first 3 months"],
    },
    {
      plan: "Photography Plan (1TB)",
      price: "$19.99",
      period: "month (annual, billed monthly)",
      features: [
        "Photoshop and Lightroom across devices, Lightroom Classic, 1TB of cloud storage",
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
    "Credit system takes budgeting -- the Free plan is limited daily generations, and Standard's 2,000 credits cover roughly 400 images or 20 five-second videos",
    "Full value requires an expensive Creative Cloud subscription",
    "Limited style control compared to Stable Diffusion or Leonardo",
  ],
  knownIssues: [
    {
      description: "ADOBE MAX 2026 (2026-11-10): **Firefly Design (beta)** brings raster, vector, motion, 3D and print onto a single canvas with client review and export built in; **Firefly Graph (beta)** builds repeatable AI-integrated workflows (listed on the Pro Plus plan); **Firefly Builder** is previewed in private beta for turning an idea into a working app or website prototype. **AI Assistant (beta)** comes to Premiere, Illustrator, InDesign, After Effects and Frame.io, and Adobe previewed **MCP integrations** that let a third-party agent drive Photoshop, Illustrator, Premiere and After Effects locally -- coming to Creative Cloud customers in early 2027. Firefly AI Assistant previews always-on agents for recurring background work. Photoshop adds Relight, Generative Restyle and an AI Assisted Editor; Premiere's Generative Media tool generates video, sound effects and music in the timeline with Firefly or partner models (Google, Kling, Runway, Luma). Same day, Google announced an expanded partnership: Adobe connectors in Gemini and AI Mode, and a Google DeepMind image model for Photoshop aimed at near-real-time edits (exploratory, no date)",
      source: "Adobe blog (blog.adobe.com/en/publish/2026/11/10/explore-new-ways-create-across-creative-cloud-adobe-firefly-while-advancing-craft-precision-choice-control, .../2026/11/10/adobe-firefly-premiere-mobile-ways-create-videos-edit-content-perfect-soundtrack-stories), Google blog (Google and Adobe partnership, 2026-11-10)",
      date: "2026-11-10",
    },
    {
      description: "CORRECTION (2026-11-11): the pricing block listed 'Firefly Premium' at $10.99/month with 100 credits, a 25-credit Free plan, and a Photography Plan (1TB) at $21.99 'raised from $19.99'. None of that matches Adobe's live plan pages. The Firefly ladder is Free (limited daily generations), Standard US$9.99 (2,000 credits), Pro US$19.99 (4,000), Pro Plus US$49.99 (10,000) and Premium US$199.99 (50,000 credits); Photography (1TB) is listed at US$19.99/mo annual, billed monthly. Creative Cloud Standard US$54.99 and Creative Cloud Pro US$69.99 were confirmed. The '1,000 credits/mo' figure for CC Standard and the 'raised from $59.99' note for CC Pro were not on the live pages and were removed. Promo prices running through Dec 6 are intro rates, not list prices",
      source: "Adobe Firefly plans page (adobe.com/products/firefly/plans.html) and Creative Cloud plans page (adobe.com/creativecloud/plans.html), both fetched 2026-11-11",
      date: "2026-11-11",
    },
    {
      description: "TOPAZ LABS ACQUISITION CLOSED (2026-09-23): Adobe completed its acquisition of Topaz Labs. Topaz upscaling and enhancement models are available in Adobe Firefly and Photoshop; the Topaz Labs brand remains and its apps continue as standalone products. Topaz CEO Eric Yang joins Adobe's Digital Video and Audio team",
      source: "Adobe blog (blog.adobe.com/en/publish/2026/09/23/adobe-completes-acquisition-of-topaz-labs)",
      date: "2026-09-23",
    },
    {
      description: "AUDIO GA + FREE AI ASSISTANT (2026-08-20): Firefly's Generate Music, Generate Speech and Generate Sound Effects left beta and are generally available; Firefly AI Assistant gained a free experience with daily generations; Gemini Omni Flash joined the partner-model list. Earlier, on 2026-06-18, Adobe put AI Assistant into public beta across Premiere, Photoshop, Illustrator, InDesign and Frame.io and opened the upgraded Firefly studio (unified generation and editing space, Elements, Projects) as a waitlisted private beta",
      source: "Adobe blog (blog.adobe.com/en/publish/2026/08/20/adobe-firefly-expands-its-creative-ai-studio-generate-music-speech-and-sound-effects-in-one-place, .../2026/06/18/adobe-firefly-introduces-new-agentic-capabilities-and-an-upgraded-creative-ai-studio-built-for-the-way-you-work)",
      date: "2026-08-20",
    },
    {
      description: "APRIL MODEL + AUDIO WAVE, MAY PHOTOSHOP FOLLOW-ON (verified vendor-primary 2026-06-11): April 2026 shipped a **new Firefly Image Model** ('significant improvements in precision, clarity, and realism for both people and animals' -- powering Photoshop 27.6's Generative Fill/Expand with natural-language instructional prompts), **Speech Generation and Soundtrack Generation public betas**, and the **Firefly Creator team licensing plan**. May 2026 (Photoshop 27.7): **on-device generative model option** (choose local vs cloud processing for generative features -- a privacy/latency lever no major rival offers in-app) and Firefly Boards hand-off for PSD files. NOTE: aggregators circulated the April items as 'May' news -- vendor pages date them April",
      source: "Adobe Firefly what's-new (helpx.adobe.com/firefly/web/whats-new), Photoshop what's-new (27.6/27.7 entries)",
      date: "2026-05",
    },
    {
      description: "Firefly AI Assistant public beta SHIPPED 2026-04-27 -- available globally inside Adobe Firefly to Creative Cloud Pro / Firefly Pro / Pro Plus / Premium subscribers. The agent orchestrates multi-step workflows across Photoshop, Lightroom, Premiere, Firefly, Illustrator, and 60+ pro-grade tools from a single chat interface. Eligible users get complimentary daily generative credits during the beta. This is the first Adobe agent to span the full Creative Cloud surface area -- meaningful step beyond Generative Fill in Photoshop only. Standard pricing post-beta not disclosed yet",
      source: "Adobe blog (blog.adobe.com/en/publish/2026/04/27/firefly-ai-assistant-public-beta), 9to5mac, Digital Trends",
      date: "2026-04-27",
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

  lastReviewedDate: "2026-11-11",
  dataSources: [
    { name: "Adobe Firefly plans page", url: "https://www.adobe.com/products/firefly/plans.html", dateAccessed: "2026-11-11" },
    { name: "Adobe Creative Cloud plans and pricing", url: "https://www.adobe.com/creativecloud/plans.html", dateAccessed: "2026-11-11" },
    { name: "Adobe blog: MAX 2026 Creative Cloud and Firefly announcements (2026-11-10)", url: "https://blog.adobe.com/en/publish/2026/11/10/explore-new-ways-create-across-creative-cloud-adobe-firefly-while-advancing-craft-precision-choice-control", dateAccessed: "2026-11-11" },
    { name: "Adobe blog: Firefly and Premiere mobile (2026-11-10)", url: "https://blog.adobe.com/en/publish/2026/11/10/adobe-firefly-premiere-mobile-ways-create-videos-edit-content-perfect-soundtrack-stories", dateAccessed: "2026-11-11" },
    { name: "Adobe blog: Adobe completes acquisition of Topaz Labs (2026-09-23)", url: "https://blog.adobe.com/en/publish/2026/09/23/adobe-completes-acquisition-of-topaz-labs", dateAccessed: "2026-11-11" },
    { name: "Adobe blog: Firefly audio tools generally available (2026-08-20)", url: "https://blog.adobe.com/en/publish/2026/08/20/adobe-firefly-expands-its-creative-ai-studio-generate-music-speech-and-sound-effects-in-one-place", dateAccessed: "2026-11-11" },
    { name: "Adobe blog: Firefly agentic capabilities and upgraded studio (2026-06-18)", url: "https://blog.adobe.com/en/publish/2026/06/18/adobe-firefly-introduces-new-agentic-capabilities-and-an-upgraded-creative-ai-studio-built-for-the-way-you-work", dateAccessed: "2026-11-11" },
    { name: "Adobe: Firefly AI Assistant public beta (2026-04-27)", url: "https://blog.adobe.com/en/publish/2026/04/27/firefly-ai-assistant-public-beta", dateAccessed: "2026-04-29" },
    { name: "Adobe: 2026 Creative Cloud pricing + plan changes", url: "https://helpx.adobe.com/account/individual/subscriptions-and-plans/plan-types-and-eligibility/changes-to-individual-plan.html", dateAccessed: "2026-04-17" },
    { name: "Adobe Firefly official site", url: "https://firefly.adobe.com", dateAccessed: "2026-04-29" },
    { name: "G2 Reviews", dateAccessed: "2026-04-17" },
    { name: "Adobe Community Forums", dateAccessed: "2026-04-17" },
    { name: "Hands-on testing", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://firefly.adobe.com",
  status: "active",
  metaTitle: "Adobe Firefly Review 2026: MAX Updates, Plans From $9.99",
  metaDescription: "Adobe Firefly review. MAX 2026: Firefly Design and Graph betas, AI Assistant across Creative Cloud. Standard $9.99, Pro $19.99, Pro Plus $49.99/mo.",
};
