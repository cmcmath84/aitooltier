import { ToolReview } from "@/lib/types";

export const midjourney: ToolReview = {
  slug: "midjourney",
  name: "Midjourney",
  tagline: "Industry-leading AI image generation with stunning artistic quality. **The V8.2 Edit Model opened to everyone on 2026-08-27** -- instruction-based edits, up to four image references (replacing omni-reference), inpainting and outpainting -- and the **2026-09-24 update** makes targeted edits change only the pixels you select, adds live style previews, and fixes --tile seams on V8.1/8.2. V8.2 itself launched 2026-07-24 as the default model. No price change",
  category: "ai-image-generators",
  url: "https://midjourney.com",

  scores: {
    easeOfUse: 6,
    outputQuality: 10,
    value: 7,
    features: 8,
    overall: 7.8,
  },

  hasFreeTier: false,
  pricing: [
    {
      plan: "Basic",
      price: "$10",
      period: "month",
      features: ["~200 generations/mo", "3 concurrent jobs", "General commercial terms"],
    },
    {
      plan: "Standard",
      price: "$30",
      period: "month",
      features: ["15hr fast generations", "Unlimited relaxed", "General commercial terms"],
    },
    {
      plan: "Pro",
      price: "$60",
      period: "month",
      features: ["30hr fast generations", "Stealth mode", "12 concurrent jobs"],
    },
  ],

  pros: [
    "Best-in-class image quality, especially for artistic and photorealistic styles",
    "Huge active community for prompt inspiration",
    "Consistent improvements with each version update",
    "Strong upscaling and variation controls",
    "The V8.2 edit model (Aug 2026) finally gives Midjourney instruction-based editing, four-image references, inpainting and outpainting inside its own UI, closing the gap with Nano Banana and FLUX for edits",
  ],
  cons: [
    "No free tier -- you have to pay to try it",
    "Still primarily Discord-based which is clunky for non-gamers",
    "Web interface exists but lacks some Discord features",
    "No API access for developers on lower plans",
  ],
  knownIssues: [
    {
      description: "THE EDIT MODEL IS THE STORY SINCE V8.2 -- COMMUNITY TESTING OPENED 2026-08-27, AND THE 2026-09-24 UPDATE MADE EDITS PIXEL-PRECISE (vendor-primary; this page was last reviewed 2026-07-29). On 2026-08-27 Midjourney said 'today we're gonna start letting everyone test our first V8.2 image edit model': editing images with instructions, generating from other images with **up to 4 image references at once, replacing omni-reference**, changing specific areas (inpainting) or expanding the canvas (outpainting), with personalization, moodboards and srefs supported (the last two 'may work best with some extra prompt direction'). Ways in: drag images into the prompt bar, the edit button in the lightbox, the edit tab, or --edit on Discord; both midjourney.com and alpha.midjourney.com got new UIs. **2026-09-24 update**: 'Making targeted edits to the image will change only the pixels that you've selected', so repeated edits no longer degrade the image; the Styles sidebar gained **Live previews** of your current prompt across liked and featured styles (click a thumbnail to generate with it); **--tile now blends invisibly on V8.1/8.2** where seams used to show; and Midjourney is 'experimenting with fast models in the interface' on alpha. The alpha changelog of 9/23 added saved default parameters (Settings > Advanced > Your defaults), a full-width masonry Create feed with hover prompts and in-place Organize mode, and Archive across all projects; 9/16 added Korean. No pricing change; the tiers on this page were unchanged as of this pass.",
      source: "Midjourney updates: 'Edit Model for V8' (updates.midjourney.com/edit-model-for-v8/, 2026-08-27), 'Edit updates, thumbnail previews, and more' (updates.midjourney.com/edit-updates-thumbnail-previews-and-more/, 2026-09-24), 'Alpha Changelog - 9/23/26' and '9/16/26' (fetched 2026-09-28)",
      date: "2026-09-24",
    },
    {
      description: "FIRST ACQUISITION -- CO-STAR (2026-07-23): Midjourney bought **Co-Star**, its first acquisition ever, to build out its Product and Design organization; Co-Star founder Banu will lead that effort. The strategic signal matters more than the deal: the post describes 'the slow blossoming of a very unusual research lab' and promises 'the announcement of half a dozen similarly ambitious projects over the next 6 months,' citing **Midjourney Medical** as the first example. Read: Midjourney is deliberately widening past image generation, which is worth watching if you evaluate it purely as an image tool",
      source: "Midjourney updates (updates.midjourney.com/midjourneys-first-acquisition/, fetched 2026-07-29)",
      date: "2026-07-23",
    },
    {
      description: "MODEL RELEASE -- V8.2 IS NOW THE DEFAULT (2026-07-24): Midjourney shipped V8.2 as its live image model, ending the preview-only period that started with the `--preview` flag on 6/25. The vendor post is an aesthetics-and-quality release rather than an architecture change: images should be 'more creative, bold, sophisticated, edgy and fresh', occurrences of a 'low quality image' are 'dramatically reduced', and Personalization understands preferences better for accounts with long rating histories, with a larger image pool available for building personalization profiles. **No pricing change accompanied the release** -- the vendor post mentions none. Supersedes the two entries below that state V8.2 does not exist / remains preview-only",
      source: "Midjourney updates (updates.midjourney.com/version-8-2/, fetched 2026-07-29)",
      date: "2026-07-24",
    },
    {
      description: "LAWSUIT UPDATE (2026-07-09 coverage; motion filed 6/29): in the Disney/Universal/Warner Bros. copyright case, Midjourney went on offense -- after a mid-June ruling denied its initial discovery request, it filed a renewed motion demanding the studios **reveal their own internal use of generative AI**. Midjourney's argument: if the studios are 'training generative-AI models on third-party copyrighted works' themselves, that conduct supports the industry treating AI training as fair use -- 'The studios are engaging in the very conduct they complained about.' No ruling yet on the renewed motion. Meanwhile **v8.2 remains preview-only** (`--preview` flag on v8.1; no GA date; updates.midjourney.com has no posts since 6/25). The case outcome remains the biggest structural risk/catalyst for the product",
      source: "The Art Newspaper (theartnewspaper.com/2026/07/09/midjourney-demands-hollywood-AI-secrets)",
      date: "2026-07-09",
    },
    {
      description: "WEB UPDATE (2026-05-27, vendor changelog 'Web Updates 5'): conversational/voice sessions gained **Image Prompts and Style References** plus sidebar settings and recent-jobs access; Image Prompts now work from the tray/sidebar; tray images persist across voice submissions; new **'Rerun as HD' button upgrades V8.1 standard-res images** in one click; folder hidden-item counts and mobile settings cleanup. NOTE: 'V8.2 imminent' claims circulate in aggregators but the vendor changelog's newest version entries remain V8.1 Updates (4/30) and V8.1 Alpha (4/14) -- no V8.2 exists yet",
      source: "Midjourney updates (updates.midjourney.com/web-updates-5/)",
      date: "2026-05-27",
    },
    {
      description: "Midjourney V8.1 Alpha opened on 2026-04-14 at alpha.midjourney.com -- default HD/2K output, roughly 3x faster than V8, meaningfully better prompt adherence. SUPERSEDED -- V8.1 later became the default and was itself replaced by V8.2 on 2026-07-24 (see the V8.2 entry above); retained for version history",
      source: "Midjourney docs (docs.midjourney.com/hc/en-us/articles/32199405667853-Version)",
      date: "2026-04",
    },
    {
      description: "Hands and text in images still inconsistent, though improved in v6",
      source: "Reddit r/midjourney",
      date: "2026-03",
    },
    {
      description: "Discord bot occasionally slow during peak hours",
      source: "Midjourney community forum",
      date: "2026-02",
    },
  ],
  bestFor: "Artists, designers, and content creators who need the highest quality AI-generated images and don't mind the Discord workflow.",
  notFor: "Beginners who want a simple web interface, or developers who need API access on a budget.",
  verdict: "Midjourney is still the gold standard for AI image quality. The output is consistently stunning. But the Discord-first experience is a real barrier for casual users, and the lack of a free tier means you can't even test it before committing. If image quality is your top priority, it's worth the price. If you want something simpler, look at DALL-E or Leonardo AI.",

  lastReviewedDate: "2026-09-28",
  dataSources: [
    { name: "Midjourney updates: Edit Model for V8 (2026-08-27) -- instruction edits, 4 image references, inpainting and outpainting", url: "https://updates.midjourney.com/edit-model-for-v8/", dateAccessed: "2026-09-28" },
    { name: "Midjourney updates: Edit updates, thumbnail previews, and more (2026-09-24) -- pixel-precise edits, live style previews, --tile fix", url: "https://updates.midjourney.com/edit-updates-thumbnail-previews-and-more/", dateAccessed: "2026-09-28" },
    { name: "Midjourney updates: Version 8.2 (2026-07-24, new default model)", url: "https://updates.midjourney.com/version-8-2/", dateAccessed: "2026-07-29" },
    { name: "Midjourney updates: Midjourney's First Acquisition (Co-Star, 2026-07-23)", url: "https://updates.midjourney.com/midjourneys-first-acquisition/", dateAccessed: "2026-07-29" },
    { name: "The Art Newspaper: Midjourney demands Hollywood AI secrets (2026-07-09)", url: "https://www.theartnewspaper.com/2026/07/09/midjourney-demands-hollywood-AI-secrets", dateAccessed: "2026-07-18" },
    { name: "Midjourney docs: Version page", url: "https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version", dateAccessed: "2026-04-21" },
    { name: "Official Midjourney pricing page", dateAccessed: "2026-04-21" },
    { name: "Reddit r/midjourney", dateAccessed: "2026-04-21" },
  ],
  affiliateUrl: "https://midjourney.com",
  status: "active",

  metaTitle: "Midjourney Review 2026: V8.2 Edit Model, Pixel-Precise Edits (Sept 24), Live Style Previews",
  metaDescription: "Midjourney review. The V8.2 edit model opened to everyone Aug 27, 2026 (instruction edits, 4 image references, inpainting, outpainting); the Sept 24 update makes edits change only selected pixels and adds live style previews. V8.2 default since Jul 24, no price change. Scores, pricing, alternatives.",
};
