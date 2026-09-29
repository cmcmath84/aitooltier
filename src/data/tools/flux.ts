import { ToolReview } from "@/lib/types";

export const flux: ToolReview = {
  slug: "flux",
  name: "Flux (FLUX 3 + FLUX.2 [klein])",
  tagline: "Black Forest Labs' model family has moved past still images. **FLUX 3** is a single multimodal foundation model trained across images, video and audio (Early Access 2026-07-23); **FLUX 3 Video went GA on the BFL API on 2026-08-04** with clips up to 20 seconds, native audio, multi-shot scenes and 1080p output, priced per second of video ($0.17/s HD text-to-video). **FLUX 3 Action (2026-09-22)** is an open-weight 7B world action model for robots. The open-core FLUX.2 [klein] image models (Jan 2026, sub-0.5s generation) remain the local-inference workhorse",
  category: "ai-image-generators",
  url: "https://flux1.ai",

  scores: {
    easeOfUse: 6,
    outputQuality: 9.5,
    value: 8.5,
    features: 7,
    overall: 7.8,
  },

  hasFreeTier: true,
  pricing: [
    {
      plan: "FLUX.2 [klein] (Open-core)",
      price: "$0",
      features: [
        "Launched 2026-01-15 -- 4B + 9B parameter variants",
        "Apache 2.0 on open-core weights",
        "Under 0.5s generation on modern hardware, 4MP coherence",
        "Multi-reference mode + native image editing",
        "Requires 13 GB VRAM minimum (4B variant)",
      ],
    },
    {
      plan: "FLUX 3 Video API",
      price: "$0.17",
      period: "per second of HD video",
      features: [
        "Text-to-video and image-to-video: $0.17 (HD) / $0.29 (Full HD) / $0.40 (QHD) / $0.80 (4K UHD) per second, clips of 5-20 seconds (docs.bfl.ai, 2026-09-28)",
        "Video continuation from your own clip: $0.41-$0.95 per second, 5-15 seconds; draft renders $0.06/s (t2v, i2v) and $0.12/s (v2v)",
        "Native audio, dialogue and lip-sync in many languages, multiple shots and camera angles in one generation, 24 fps up to 3840 x 2176",
        "Docs still label FLUX 3 a preview model; Omni Reference with images and videos is promised but not live",
        "FLUX Video Upscale tool (2026-08-20): regenerate 480p+ video at up to 4K, Precise $0.07 or Creative $0.10 per megapixel-second",
      ],
    },
    {
      plan: "FLUX 3 Action (open weights)",
      price: "$0",
      features: [
        "7B world action model released 2026-09-22 on Hugging Face (base weights plus SO-101 and DROID robot policies), runs through LeRobot",
        "FLUX Kommunity License: non-commercial and non-production use, or commercial use only if your gross annual revenue is under $5M; a paid licence otherwise",
        "Vendor claim, unreplicated: new state of the art on the RoboLab-120 leaderboard at under half the parameters of the previous best open model, up to 3.95x faster",
        "Text encoder is an unmodified Qwen3-VL-4B-Instruct; joint action plus roughly two seconds of predicted video per step",
      ],
    },
    {
      plan: "Flux.1 Schnell (legacy)",
      price: "$0",
      features: ["Apache 2.0 license", "Run locally", "Fast generation", "Superseded by FLUX.2 [klein] for most use cases"],
    },
    {
      plan: "FLUX.2 [max] / [pro] API",
      price: "$0.05",
      period: "per image",
      features: [
        "BFL's hosted API -- highest quality tier",
        "Multi-reference + editing + higher resolution than [klein]",
        "Commercial license included",
        "Positioned vs Nano Banana 2 and Midjourney",
      ],
    },
  ],

  pros: [
    "FLUX.2 [klein] (Jan 15 2026) is the fastest frontier-quality image model to date -- sub-0.5s generation on modern hardware unlocks iterative prompt design in a way earlier Flux generations couldn't. Open-core + 13 GB VRAM minimum puts it within reach of consumer GPUs",
    "Native image editing + multi-reference mode (new in FLUX.2 [klein]) closes the biggest UX gap vs Nano Banana 2 -- you no longer need ComfyUI inpainting workflows for basic edits",
    "Photorealistic output quality remains top-tier. Text rendering in images is vastly better than legacy DALL-E and rivals Nano Banana 2 for Latin scripts",
    "Community ecosystem (LoRAs, fine-tunes, workflows on Civitai, ComfyUI) is the deepest in open-source image generation -- moved quickly to FLUX.2 [klein] support within 2 weeks of release",
    "FLUX 3 Video is one of the few frontier video APIs that publishes a flat per-second rate card with native audio included ($0.17/s HD), and it accepts keyframes, multi-image references and continuation of your own clip in a single request",
  ],
  cons: [
    "FLUX.2 [klein] requires 13 GB VRAM minimum for the 4B variant -- still puts it out of reach of 8 GB consumer cards. Use Flux.1 Schnell or legacy SD models on smaller hardware",
    "Hosted API ([max] / [pro]) can be slow for high-resolution outputs -- expect 10-20 seconds per image in 4K",
    "Prompt adherence is still inconsistent on complex multi-element scenes -- Nano Banana 2 is more literal/reliable for commercial design work with tight spec requirements",
    "Non-technical users still face a steep onramp -- ComfyUI or Forge is the realistic path to getting best results, which is a wall for anyone who just wants to type a prompt and get an image",
    "FLUX 3 video is API-only and priced per second, so a single 20-second 4K clip is $16 before retries; the docs still call FLUX 3 a preview model and the promised Omni Reference mode is not live",
    "FLUX 3 Action ships under the FLUX Kommunity License, not Apache 2.0 -- commercial use is limited to companies under $5M revenue, and the benchmark claim is vendor-only so far",
  ],
  knownIssues: [
    {
      description: "THE FLUX FAMILY NOW GENERATES VIDEO WITH SOUND -- FLUX 3 (2026-07-23, Early Access) AND FLUX 3 VIDEO GA ON THE BFL API (2026-08-04), PLUS A 4K VIDEO UPSCALER (2026-08-20). This page had been reviewed last on 2026-04-17 and described FLUX.2 [klein] as the current release; four Black Forest Labs launches went unrecorded in between. **FLUX 3** is one model 'jointly trained across images, video and audio' on BFL's Self-Flow approach; the launch post says it generates 'images and video+audio jointly' from text or reference images and video, and that video prediction accounts for over 95% of training compute. **FLUX 3 Video** shipped to a general audience on 2026-08-04 'via the BFL API and select partners': clips up to 20 seconds at 720p or 1080p with native audio, text-to-video, image-to-video with keyframes, continuation of up to four seconds of your own video and audio, multi-shot scenes, dialogue with lip-sync in multiple languages. **Verified rate card (docs.bfl.ai, 2026-09-28): $0.17 / $0.29 / $0.40 / $0.80 per second at HD / FHD / QHD / UHD for text- or image-to-video; $0.41-$0.95 per second for video continuation; drafts $0.06/s; 24 fps, up to 3840 x 2176.** The docs still say 'FLUX 3 is a preview model' and that Omni Reference 'will be available soon'. **FLUX Video Upscale (2026-08-20)** regenerates any 480p+ video at up to 4K in two modes, Precise (4 steps, $0.07 per megapixel-second) and Creative (8 steps, $0.10), with 1.5x, 2x and 3x factors. Also unrecorded: **FLUX.2 [klein] 4B ships preloaded on ASUS ProArt RTX laptops (2026-06-04)** as the first FLUX model on consumer hardware, targeting sub-5-second generation on 8 GB of VRAM. Why it matters for this page: the 'Flux' entry is now a video vendor as much as an image one, and the video product has a public per-second price where Veo and Kling bill through app tiers or credits.",
      source: "Black Forest Labs blog: 'FLUX 3' (bfl.ai/blog/flux-3, JSON-LD datePublished 2026-07-23), 'FLUX 3 Video, Part 1: Generation' (bfl.ai/blog/flux-3-video, 2026-08-04), 'FLUX Video Upscale: 2K and 4K' (bfl.ai/blog/flux-video-upscale, 2026-08-20), 'FLUX.2 is now on device' (bfl.ai/blog/flux2-klein-on-device, 2026-06-04); docs.bfl.ai/flux_3/flux3_overview (rate table, fetched 2026-09-28)",
      date: "2026-08-04",
    },
    {
      description: "FLUX 3 ACTION -- AN OPEN-WEIGHT 7B WORLD ACTION MODEL FOR ROBOTS, UNDER A LICENCE THAT IS NOT APACHE (2026-09-22, vendor-primary). BFL released FLUX 3 Action on Hugging Face (base weights for embodiment adaptation plus ready-to-run SO-101 and DROID policies, loadable through LeRobot): given camera frames, the robot state and a text instruction it 'returns the next chunk of actions, denoised together with the next video frames', about two seconds of predicted video per step. **Vendor claim, unreplicated:** 'a new state-of-the-art success rate' on the RoboLab-120 leaderboard 'at less than half the parameters of the previous best open model, while running up to 3.95x faster', against Cosmos 3 Nano (36.8%) and Pi0.5 (28.0%) as the cited baselines; BFL also argues hybrid fast-control plus frontier-reasoning systems deliver 'up to 53.64% more success per dollar'. The text encoder is an unmodified Qwen3-VL-4B-Instruct. **Licence: FLUX Kommunity License v1.0** -- free for 'non-commercial and non-production use', and for commercial use only by a 'Qualifying User' with under US$5,000,000 in gross annual revenue; anyone larger needs a paid licence from bfl.ai/licensing; military, surveillance and biometric uses are excluded. This continues the July FLUX-mimic collaboration (robots deployed at Audi) rather than replacing it. Not a change to the image models on this page, but it is the vendor's stated direction: 'models that perceive, predict, and act'.",
      source: "Black Forest Labs: 'Introducing FLUX 3 Action Models' (bfl.ai/blog/flux-3-action, JSON-LD 2026-09-22); Hugging Face black-forest-labs/flux-3-action-base README and LICENSE.md (fetched 2026-09-28); 'FLUX-mimic' (bfl.ai/blog/flux-3-mimic, 2026-07-23)",
      date: "2026-09-22",
    },
    {
      description: "FLUX.2 [klein] 4B variant can produce hand/finger artifacts in ~5% of generations -- materially better than Flux.1 Dev's ~10-15%, but not solved",
      source: "Reddit r/StableDiffusion, Hugging Face discussions",
      date: "2026-02",
    },
    {
      description: "Multi-reference mode in FLUX.2 [klein] occasionally blends stylistically-divergent sources inconsistently -- same class of issue Nano Banana 2 has",
      source: "Reddit r/StableDiffusion",
      date: "2026-03",
    },
    {
      description: "BFL API rate limits and occasional downtime still frustrate developers building production applications -- the [klein] open-core release partially addresses this by enabling self-hosting",
      source: "GitHub Issues",
      date: "2026-03",
    },
  ],
  bestFor: "Technically savvy users who want the best possible image quality and are willing to set up local inference. Also great for developers who want an open-source model they can fine-tune and deploy on their own infrastructure.",
  notFor: "Non-technical users who want a simple web interface. If you don't know what ComfyUI is and don't want to learn, Midjourney or DALL-E will get you results with far less friction.",
  verdict: "Flux earned its reputation as the photorealism benchmark in open image generation, and FLUX.2 [klein] is still the model to run locally if you have 13 GB of VRAM and the patience for ComfyUI. What changed in mid-2026 is scope: FLUX 3 makes Black Forest Labs a video-with-audio vendor with a flat per-second API price, and FLUX 3 Action points the same model at robots. Neither is plug-and-play -- the video side is API-only and still labelled a preview, and the Action weights carry a revenue-capped licence. If you want the best open image weights and are willing to invest in setup, this is still the answer. If you want to type a prompt and get a picture, look elsewhere; if you want 20-second clips with sound on a metered API, FLUX 3 Video is now a real option to price against Veo and Kling.",

  lastReviewedDate: "2026-09-28",
  dataSources: [
    { name: "Black Forest Labs blog: FLUX 3 (2026-07-23) -- multimodal image, video and audio foundation model, Early Access", url: "https://bfl.ai/blog/flux-3", dateAccessed: "2026-09-28" },
    { name: "Black Forest Labs blog: FLUX 3 Video, Part 1: Generation (2026-08-04) -- GA on the BFL API, 20-second clips with native audio", url: "https://bfl.ai/blog/flux-3-video", dateAccessed: "2026-09-28" },
    { name: "Black Forest Labs blog: FLUX Video Upscale: 2K and 4K (2026-08-20) -- $0.07 / $0.10 per megapixel-second", url: "https://bfl.ai/blog/flux-video-upscale", dateAccessed: "2026-09-28" },
    { name: "Black Forest Labs blog: Introducing FLUX 3 Action Models (2026-09-22) -- open-weight 7B world action model", url: "https://bfl.ai/blog/flux-3-action", dateAccessed: "2026-09-28" },
    { name: "BFL docs: FLUX 3 overview -- per-second rate table (HD $0.17/s to UHD $0.80/s), modes, limits (fetched 2026-09-28)", url: "https://docs.bfl.ai/flux_3/flux3_overview", dateAccessed: "2026-09-28" },
    { name: "Hugging Face: black-forest-labs/flux-3-action-base -- model card and FLUX Kommunity License v1.0", url: "https://huggingface.co/black-forest-labs/flux-3-action-base", dateAccessed: "2026-09-28" },
    { name: "Black Forest Labs blog: FLUX.2 is now on device -- ASUS ProArt laptops ship FLUX.2 [klein] 4B (2026-06-04)", url: "https://bfl.ai/blog/flux2-klein-on-device", dateAccessed: "2026-09-28" },
    { name: "Black Forest Labs official site", url: "https://bfl.ai/", dateAccessed: "2026-04-17" },
    { name: "VentureBeat: FLUX.2 [klein] open-source launch", url: "https://venturebeat.com/technology/black-forest-labs-launches-open-source-flux-2-klein-to-generate-ai-images-in", dateAccessed: "2026-04-17" },
    { name: "MarkTechPost: FLUX.2 [klein] compact flow models", url: "https://www.marktechpost.com/2026/01/16/black-forest-labs-releases-flux-2-klein-compact-flow-models-for-interactive-visual-intelligence/", dateAccessed: "2026-04-17" },
    { name: "Reddit r/StableDiffusion", dateAccessed: "2026-04-17" },
    { name: "Artificial Analysis image benchmarks", dateAccessed: "2026-04-17" },
    { name: "Hands-on testing", dateAccessed: "2026-04-17" },
  ],
  affiliateUrl: "https://flux1.ai",
  status: "active",
  metaTitle: "Flux Review 2026: FLUX 3 Video at $0.17/s, FLUX 3 Action Open Weights, FLUX.2 klein",
  metaDescription: "Flux review. FLUX 3 Video went GA on the BFL API Aug 4, 2026: 20-second clips with native audio from $0.17 per second. FLUX 3 Action (Sept 22) is an open-weight 7B robot model under a revenue-capped licence. FLUX.2 klein still the local pick. Verified prices, tradeoffs.",
};
