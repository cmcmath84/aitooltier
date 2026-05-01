import Image from "next/image";

const logoMap: Record<string, string> = {
  // Image
  midjourney: "/logos/midjourney.png",
  dalle: "/logos/openai.png",
  "dall-e": "/logos/openai.png",
  "nano-banana": "/logos/gemini.png",
  "mai-image-2": "/logos/microsoft.png",
  "stable-diffusion": "/logos/stability.png",
  "leonardo-ai": "/logos/leonardo.png",
  "adobe-firefly": "/logos/adobe.png",
  ideogram: "/logos/ideogram.png",
  flux: "/logos/flux.png",
  "krea-ai": "/logos/krea.png",
  nightcafe: "/logos/nightcafe.png",

  // LLMs / chatbots
  claude: "/logos/anthropic.png",
  "claude-mythos": "/logos/anthropic.png",
  chatgpt: "/logos/openai.png",
  "gpt-rosalind": "/logos/openai.png",
  "gpt-cyber": "/logos/openai.png",
  "character-ai": "/logos/character-ai.png",
  gemini: "/logos/gemini.png",
  grok: "/logos/grok.png",
  "microsoft-copilot": "/logos/microsoft.png",
  perplexity: "/logos/perplexity.png",
  poe: "/logos/poe.png",
  notebooklm: "/logos/notebooklm.png",
  "muse-spark": "/logos/meta.png",
  "alexa-plus": "/logos/amazon.png",

  // Local / open-weight LLMs
  llama: "/logos/meta.png",
  mistral: "/logos/mistral.png",
  deepseek: "/logos/deepseek.png",
  gemma: "/logos/gemini.png",
  qwen: "/logos/qwen.png",
  glm: "/logos/glm.png",
  kimi: "/logos/kimi.png",
  nemotron: "/logos/nvidia.png",
  minimax: "/logos/minimax.png",
  falcon: "/logos/falcon.png",
  "gpt-oss": "/logos/openai.png",
  granite: "/logos/ibm.png",
  "arcee-trinity": "/logos/arcee.png",
  olmo: "/logos/allenai.png",
  jamba: "/logos/ai21.png",
  stepfun: "/logos/stepfun.png",
  "command-a": "/logos/cohere.png",
  "hunyuan-3": "/logos/tencent.png",
  mimo: "/logos/xiaomi.png",

  // Writing
  jasper: "/logos/jasper.png",
  "copy-ai": "/logos/copyai.png",
  grammarly: "/logos/grammarly.png",
  quillbot: "/logos/quillbot.png",
  wordtune: "/logos/wordtune.png",
  sudowrite: "/logos/sudowrite.png",
  writesonic: "/logos/writesonic.png",
  tailor: "/logos/tailor.png",

  // Video
  runway: "/logos/runway.png",
  pika: "/logos/pika.png",
  sora: "/logos/sora.png",
  seedance: "/logos/bytedance.png",
  heygen: "/logos/heygen.png",
  "kling-ai": "/logos/kling.png",
  veo: "/logos/veo.png",
  luma: "/logos/luma.png",
  "opus-clip": "/logos/opus-clip.png",
  "invideo-ai": "/logos/invideo.png",
  pictory: "/logos/pictory.png",
  "captions-ai": "/logos/captions.png",

  // Code assistants
  "github-copilot": "/logos/github.png",
  cursor: "/logos/cursor.png",
  windsurf: "/logos/windsurf.png",
  tabnine: "/logos/tabnine.png",
  "claude-code": "/logos/claude-code.png",
  lovable: "/logos/lovable.png",
  devin: "/logos/devin.png",
  replit: "/logos/replit.png",
  codex: "/logos/openai.png",
  antigravity: "/logos/antigravity.png",
  codestral: "/logos/mistral.png",
  "roblox-assistant": "/logos/roblox.png",

  // Voice & audio
  elevenlabs: "/logos/elevenlabs.png",
  "murf-ai": "/logos/murf.png",
  descript: "/logos/descript.png",
  speechify: "/logos/speechify.png",
  "mai-voice-1": "/logos/microsoft.png",
  "grok-voice": "/logos/grok.png",
  "cohere-transcribe": "/logos/cohere.png",

  // Design
  "claude-design": "/logos/anthropic.png",

  // Design
  "canva-ai": "/logos/canva.png",
  "figma-ai": "/logos/figma.png",
  looka: "/logos/looka.png",
  gamma: "/logos/gamma.png",

  // SEO
  "surfer-seo": "/logos/surfer.png",
  ahrefs: "/logos/ahrefs.png",
  semrush: "/logos/semrush.png",

  // Music
  suno: "/logos/suno.png",
  udio: "/logos/udio.png",
  aiva: "/logos/aiva.png",
  soundraw: "/logos/soundraw.png",
  lyria: "/logos/gemini.png",
  elevenmusic: "/logos/elevenlabs.png",

  // Business / productivity
  "notion-ai": "/logos/notion.png",
  "otter-ai": "/logos/otter.png",
  fireflies: "/logos/fireflies.png",
  "mai-transcribe-1": "/logos/microsoft.png",

  // Marketing
  "hubspot-ai": "/logos/hubspot.png",
  synthesia: "/logos/synthesia.png",

  // Data / analytics
  "julius-ai": "/logos/julius.png",
  "tableau-ai": "/logos/tableau.png",
  "power-bi": "/logos/powerbi.png",

  // Translation / detection
  deepl: "/logos/deepl.png",
  gptzero: "/logos/gptzero.png",

  // Presentations
  "napkin-ai": "/logos/napkin.png",
  "beautiful-ai": "/logos/beautiful.png",

  // Website builders
  "bolt-new": "/logos/bolt.png",
  v0: "/logos/v0.png",

  // Photo editing
  "topaz-ai": "/logos/topaz.png",
  "magnific-ai": "/logos/magnific.png",
  photoroom: "/logos/photoroom.png",

  // Automation / agents
  n8n: "/logos/n8n.png",
  "bland-ai": "/logos/bland.png",
  "vapi-ai": "/logos/vapi.png",
  openclaw: "/logos/openclaw.png",
  "hermes-agent": "/logos/hermes.png",
  "manus-ai": "/logos/manus.png",
  "perplexity-computer": "/logos/perplexity.png",
  "perplexity-comet": "/logos/perplexity.png",
  "emergent-wingman": "/logos/emergent.png",
  paperclip: "/logos/paperclip.png",
  crewai: "/logos/crewai.png",
  langgraph: "/logos/langgraph.png",
  "microsoft-agent-framework": "/logos/microsoft.png",
  "microsoft-agent-365": "/logos/microsoft.png",
  "agentforce-vibes": "/logos/salesforce.png",
  "augment-intent": "/logos/augment.png",
};

interface ToolLogoProps {
  slug: string;
  name: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const sizes = {
  sm: 24,
  md: 32,
  lg: 40,
  xl: 80,
  "2xl": 112,
};

export default function ToolLogo({ slug, name, size = "md" }: ToolLogoProps) {
  const src = logoMap[slug];
  const px = sizes[size];

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={px}
      height={px}
      className="shrink-0 rounded-md"
      unoptimized
    />
  );
}
