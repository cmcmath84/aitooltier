import { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { getTierForScore } from "@/lib/tiers";
import ToolLogo from "@/components/ui/ToolLogo";
import CompareSearch from "@/components/ui/CompareSearch";

export const metadata: Metadata = {
  title: "Compare AI Tools | Head-to-Head with Scores and Benchmarks",
  description:
    "Side-by-side comparisons of the best AI tools. Scores, benchmarks, pricing, features, and honest analysis.",
};

// Popular comparisons — manually curated from GSC data
const popularSlugs = [
  "claude-vs-grok",
  "chatgpt-vs-claude",
  "github-copilot-vs-chatgpt",
  "deepseek-vs-github-copilot",
  "midjourney-vs-dall-e",
  "claude-code-vs-replit",
  "cursor-vs-windsurf",
  "canva-ai-vs-gamma",
  "codex-vs-claude-code",
  "antigravity-vs-cursor",
  "gemini-vs-chatgpt",
  "codex-vs-antigravity",
];

// LLMs vs Local/Open-Weight Models — cross-category comparisons
const llmVsLocalSlugs = [
  "claude-vs-llama",
  "chatgpt-vs-deepseek",
  "gemini-vs-mistral",
  "grok-vs-deepseek",
  "claude-vs-qwen",
  "gemini-vs-gemma",
];

function CompareCard({
  toolA,
  toolB,
}: {
  toolA: (typeof tools)[0];
  toolB: (typeof tools)[0];
}) {
  const tierA = getTierForScore(toolA.scores.overall);
  const tierB = getTierForScore(toolB.scores.overall);
  const aWins = toolA.scores.overall > toolB.scores.overall;
  const bWins = toolB.scores.overall > toolA.scores.overall;

  return (
    <Link
      href={`/compare/${toolA.slug}-vs-${toolB.slug}`}
      className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
    >
      {/* Tool A */}
      <div className="flex flex-1 items-center gap-2 min-w-0">
        <ToolLogo slug={toolA.slug} name={toolA.name} size="sm" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {toolA.name}
          </p>
          <span
            className={`text-xs font-bold ${
              aWins ? tierA.labelText.replace("text-white", "text-primary") : "text-muted-foreground"
            }`}
          >
            {toolA.scores.overall.toFixed(1)}
          </span>
        </div>
      </div>

      {/* VS badge */}
      <div className="flex shrink-0 items-center justify-center">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-black text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition">
          VS
        </span>
      </div>

      {/* Tool B */}
      <div className="flex flex-1 items-center justify-end gap-2 min-w-0">
        <div className="min-w-0 text-right">
          <p className="truncate text-sm font-semibold text-foreground">
            {toolB.name}
          </p>
          <span
            className={`text-xs font-bold ${
              bWins ? tierB.labelText.replace("text-white", "text-primary") : "text-muted-foreground"
            }`}
          >
            {toolB.scores.overall.toFixed(1)}
          </span>
        </div>
        <ToolLogo slug={toolB.slug} name={toolB.name} size="sm" />
      </div>
    </Link>
  );
}

export default function ComparePage() {
  // Build popular comparisons
  const popular = popularSlugs
    .map((slug) => {
      const [a, b] = slug.split("-vs-");
      const toolA = tools.find((t) => t.slug === a);
      const toolB = tools.find((t) => t.slug === b);
      return toolA && toolB ? { toolA, toolB } : null;
    })
    .filter(Boolean) as { toolA: (typeof tools)[0]; toolB: (typeof tools)[0] }[];

  // Build LLM vs Local comparisons
  const llmVsLocal = llmVsLocalSlugs
    .map((slug) => {
      const [a, b] = slug.split("-vs-");
      const toolA = tools.find((t) => t.slug === a);
      const toolB = tools.find((t) => t.slug === b);
      return toolA && toolB ? { toolA, toolB } : null;
    })
    .filter(Boolean) as { toolA: (typeof tools)[0]; toolB: (typeof tools)[0] }[];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-foreground">Compare AI Tools</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Head-to-head comparisons with scores, benchmarks, and honest recommendations.
      </p>

      {/* Popular Comparisons */}
      {popular.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-sm">
              &#9733;
            </span>
            Popular Comparisons
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map(({ toolA, toolB }) => (
              <CompareCard
                key={`${toolA.slug}-${toolB.slug}`}
                toolA={toolA}
                toolB={toolB}
              />
            ))}
          </div>
        </div>
      )}

      {/* LLMs vs Local/Open-Weight Models */}
      {llmVsLocal.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-sm">
              &#9878;
            </span>
            Cloud LLMs vs Open-Weight Models
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            How do proprietary cloud models compare to self-hostable open-weight alternatives?
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {llmVsLocal.map(({ toolA, toolB }) => (
              <CompareCard
                key={`${toolA.slug}-${toolB.slug}`}
                toolA={toolA}
                toolB={toolB}
              />
            ))}
          </div>
        </div>
      )}

      {/* Searchable comparison grid */}
      <CompareSearch
        tools={tools.map((t) => ({
          slug: t.slug,
          name: t.name,
          category: t.category,
          scores: { overall: t.scores.overall },
        }))}
      />
    </div>
  );
}
