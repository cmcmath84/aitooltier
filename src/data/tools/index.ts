import { ToolReview } from "@/lib/types";

// AI Image Generators
import { midjourney } from "./midjourney";
import { dalle } from "./dalle";
import { stableDiffusion } from "./stable-diffusion";
import { leonardoAi } from "./leonardo-ai";
import { adobeFirefly } from "./adobe-firefly";
import { ideogram } from "./ideogram";
import { flux } from "./flux";
import { kreaAi } from "./krea-ai";
import { nightcafe } from "./nightcafe";

// AI LLMs & Models
import { claude } from "./claude";
import { gemini } from "./gemini";
import { llama } from "./llama";
import { mistral } from "./mistral";
import { deepseek } from "./deepseek";
import { grok } from "./grok";
import { gemma } from "./gemma";

// AI Writing Tools
import { jasper } from "./jasper";
import { copyAi } from "./copy-ai";
import { grammarly } from "./grammarly";
import { writesonic } from "./writesonic";
import { quillbot } from "./quillbot";
import { wordtune } from "./wordtune";
import { sudowrite } from "./sudowrite";
import { tailor } from "./tailor";

// AI Video Generators
import { runway } from "./runway";
import { pika } from "./pika";
import { sora } from "./sora";
import { heygen } from "./heygen";
import { klingAi } from "./kling-ai";
import { veo } from "./veo";
import { luma } from "./luma";
import { captionsAi } from "./captions-ai";
import { opusClip } from "./opus-clip";
import { invideoAi } from "./invideo-ai";
import { pictory } from "./pictory";

// AI Code Assistants
import { githubCopilot } from "./github-copilot";
import { cursor } from "./cursor";
import { windsurf } from "./windsurf";
import { tabnine } from "./tabnine";
import { claudeCode } from "./claude-code";
import { lovable } from "./lovable";
import { devin } from "./devin";
import { replit } from "./replit";

// AI Chatbots & Assistants
import { chatgpt } from "./chatgpt";
import { perplexity } from "./perplexity";
import { microsoftCopilot } from "./microsoft-copilot";
import { poe } from "./poe";
import { notebookLm } from "./notebooklm";

// AI Voice & Audio
import { elevenlabs } from "./elevenlabs";
import { murfAi } from "./murf-ai";
import { descript } from "./descript";
import { speechify } from "./speechify";

// AI Voice Agents
import { blandAi } from "./bland-ai";
import { vapiAi } from "./vapi-ai";

// AI Automation & Workflow
import { n8n } from "./n8n";

// AI Music Generators
import { suno } from "./suno";
import { udio } from "./udio";
import { aiva } from "./aiva";
import { soundraw } from "./soundraw";
import { lyria } from "./lyria";

// AI Business Productivity
import { notionAi } from "./notion-ai";
import { otterAi } from "./otter-ai";
import { fireflies } from "./fireflies";

// AI Marketing Tools
import { hubspotAi } from "./hubspot-ai";
import { synthesia } from "./synthesia";

// AI Data Analytics
import { juliusAi } from "./julius-ai";
import { tableauAi } from "./tableau-ai";
import { powerBi } from "./power-bi";

// AI Presentation Tools
import { napkinAi } from "./napkin-ai";
import { beautifulAi } from "./beautiful-ai";

// AI Photo Editing
import { topazAi } from "./topaz-ai";
import { magnificAi } from "./magnific-ai";
import { photoroom } from "./photoroom";

// AI Website Builders
import { boltNew } from "./bolt-new";
import { v0 } from "./v0";

// AI Design Tools
import { canvaAi } from "./canva-ai";
import { figmaAi } from "./figma-ai";
import { looka } from "./looka";
import { gamma } from "./gamma";

// AI SEO Tools
import { surferSeo } from "./surfer-seo";
import { ahrefs } from "./ahrefs";
import { semrush } from "./semrush";

// AI Detection
import { gptZero } from "./gptzero";

// AI Translation
import { deepl } from "./deepl";

export const tools: ToolReview[] = [
  // Image Generators
  midjourney,
  dalle,
  stableDiffusion,
  leonardoAi,
  adobeFirefly,
  ideogram,
  flux,
  kreaAi,
  nightcafe,
  // LLMs
  claude,
  gemini,
  llama,
  mistral,
  deepseek,
  grok,
  gemma,
  // Writing
  jasper,
  copyAi,
  grammarly,
  writesonic,
  quillbot,
  wordtune,
  sudowrite,
  tailor,
  // Video
  runway,
  pika,
  sora,
  heygen,
  klingAi,
  veo,
  luma,
  captionsAi,
  opusClip,
  invideoAi,
  pictory,
  // Code
  githubCopilot,
  cursor,
  windsurf,
  tabnine,
  claudeCode,
  lovable,
  devin,
  replit,
  // Chatbots
  chatgpt,
  perplexity,
  microsoftCopilot,
  poe,
  notebookLm,
  // Voice & Audio
  elevenlabs,
  murfAi,
  descript,
  speechify,
  // Voice Agents
  blandAi,
  vapiAi,
  // Automation & Workflow
  n8n,
  // Music
  suno,
  udio,
  aiva,
  soundraw,
  lyria,
  // Business Productivity
  notionAi,
  otterAi,
  fireflies,
  // Marketing
  hubspotAi,
  synthesia,
  // Data Analytics
  juliusAi,
  tableauAi,
  powerBi,
  // Presentation Tools
  napkinAi,
  beautifulAi,
  // Photo Editing
  topazAi,
  magnificAi,
  photoroom,
  // Website Builders
  boltNew,
  v0,
  // Design
  canvaAi,
  figmaAi,
  looka,
  gamma,
  // SEO
  surferSeo,
  ahrefs,
  semrush,
  // Detection
  gptZero,
  // Translation
  deepl,
];

export function getToolBySlug(slug: string): ToolReview | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(categorySlug: string): ToolReview[] {
  return tools.filter((t) => t.category === categorySlug);
}

export function getAllToolSlugs(): string[] {
  return tools.map((t) => t.slug);
}
