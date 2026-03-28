import Image from "next/image";

const logoMap: Record<string, string> = {
  midjourney: "/logos/midjourney.png",
  "dall-e": "/logos/openai.png",
  "stable-diffusion": "/logos/stability.png",
  "leonardo-ai": "/logos/leonardo.png",
  "adobe-firefly": "/logos/adobe.png",
  ideogram: "/logos/ideogram.png",
  claude: "/logos/anthropic.png",
  "gpt-4": "/logos/openai.png",
  gemini: "/logos/gemini.png",
  llama: "/logos/meta.png",
  mistral: "/logos/mistral.png",
  jasper: "/logos/jasper.png",
  "copy-ai": "/logos/copyai.png",
  grammarly: "/logos/grammarly.png",
  runway: "/logos/runway.png",
  pika: "/logos/pika.png",
  "github-copilot": "/logos/github.png",
  cursor: "/logos/cursor.png",
  chatgpt: "/logos/openai.png",
  perplexity: "/logos/perplexity.png",
  elevenlabs: "/logos/elevenlabs.png",
  "canva-ai": "/logos/canva.png",
  "surfer-seo": "/logos/surfer.png",
  suno: "/logos/suno.png",
  udio: "/logos/udio.png",
  "notion-ai": "/logos/notion.png",
  "otter-ai": "/logos/otter.png",
  "hubspot-ai": "/logos/hubspot.png",
  synthesia: "/logos/synthesia.png",
  "julius-ai": "/logos/julius.png",
  "tableau-ai": "/logos/tableau.png",
  sora: "/logos/sora.png",
  heygen: "/logos/heygen.png",
  "murf-ai": "/logos/murf.png",
  descript: "/logos/descript.png",
  "figma-ai": "/logos/figma.png",
  looka: "/logos/looka.png",
  ahrefs: "/logos/ahrefs.png",
  semrush: "/logos/semrush.png",
  windsurf: "/logos/windsurf.png",
  tabnine: "/logos/tabnine.png",
  "microsoft-copilot": "/logos/microsoft.png",
  poe: "/logos/poe.png",
};

interface ToolLogoProps {
  slug: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: 24,
  md: 32,
  lg: 40,
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
