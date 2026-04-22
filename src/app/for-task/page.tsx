import { Metadata } from "next";
import Link from "next/link";
import {
  tasks,
  getTasksByIntent,
  getToolsForTask,
  INTENT_LABELS,
  TaskIntent,
} from "@/data/tasks";
import { safeJsonLd } from "@/lib/structured-data";
import { getTierForScore } from "@/lib/tiers";

const BASE_URL = "https://aitooltier.com";

const INTENT_ORDER: TaskIntent[] = [
  "write",
  "code",
  "design",
  "create-media",
  "analyze",
  "automate",
];

const INTENT_TAGLINES: Record<TaskIntent, string> = {
  write: "Anything text-out: blog posts, emails, resumes, SEO content, proofreading.",
  code: "Debugging, autocompleting, refactoring, testing, and end-to-end building.",
  design: "Logos, posters, presentations, social graphics, photo editing, upscaling.",
  "create-media": "Text-to-video, music generation, voice cloning, dubbing, avatars.",
  analyze: "Research, documents, spreadsheets, translation, and AI-text detection.",
  automate: "Workflow builders, browser agents, voice calling, and multi-agent orchestration.",
};

export const metadata: Metadata = {
  title: "AI Tools by Task (2026): Find the Right AI for What You Need to Do",
  description:
    "Pick an AI tool by what you want to do, not by category. Write a cold email, debug code, generate a logo, transcribe audio, run a research agent -- each task links to a tier-list of the best AI tools for it.",
};

export default function ForTaskHubPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "By Task",
        item: `${BASE_URL}/for-task`,
      },
    ],
  };

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Tools by Task (2026)",
    description: "Pick an AI tool by what you need to do.",
    url: `${BASE_URL}/for-task`,
    hasPart: tasks.map((t) => ({
      "@type": "WebPage",
      name: `${t.searchHeadline} (2026)`,
      url: `${BASE_URL}/for-task/${t.slug}`,
      description: t.description,
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(collection) }}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          AI Tools by Task (2026)
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Categories are useful, but most people don&apos;t think in categories
          -- they think in tasks. Pick what you actually need to do and get a
          tier-list of the tools that do it best.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {tasks.length} tasks across {INTENT_ORDER.length} intents.
        </p>
      </div>

      {INTENT_ORDER.map((intent) => {
        const list = getTasksByIntent(intent);
        if (list.length === 0) return null;

        return (
          <section key={intent} className="mb-10">
            <h2 className="mb-1 text-xl font-black text-foreground">
              {INTENT_LABELS[intent]}
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              {INTENT_TAGLINES[intent]}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((task) => {
                const candidateTools = getToolsForTask(task);
                const top = candidateTools[0];
                const topTier = top ? getTierForScore(top.scores.overall) : null;

                return (
                  <Link
                    key={task.slug}
                    href={`/for-task/${task.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 transition hover:border-foreground/20 hover:shadow-md"
                  >
                    <h3 className="text-base font-bold text-foreground group-hover:underline">
                      {task.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {task.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                      <span>
                        {candidateTools.length} tool
                        {candidateTools.length !== 1 && "s"}
                      </span>
                      {top && topTier && (
                        <span className="flex items-center gap-1.5">
                          <span>Top pick:</span>
                          <span
                            className={`inline-flex h-4 w-4 items-center justify-center rounded text-[10px] font-bold ${topTier.labelBg} ${topTier.labelText}`}
                          >
                            {topTier.rank}
                          </span>
                          <span className="font-medium text-foreground">
                            {top.name}
                          </span>
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
