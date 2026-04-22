import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  tasks,
  getTaskBySlug,
  getToolsForTask,
  INTENT_LABELS,
} from "@/data/tasks";
import { getTierForScore, tiers } from "@/lib/tiers";
import { safeJsonLd } from "@/lib/structured-data";

const BASE_URL = "https://aitooltier.com";

export async function generateStaticParams() {
  return tasks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const task = getTaskBySlug(slug);
  if (!task) return { title: "Task Not Found" };
  return {
    title: `Best ${task.searchHeadline} (2026): Tier List + Reviews`,
    description: `${task.description} Ranked S through F across AIToolTier's reviewed catalog -- no paid placements.`,
  };
}

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const task = getTaskBySlug(slug);
  if (!task) notFound();

  const ranked = getToolsForTask(task);

  const byTier = tiers.map((t) => ({
    tier: t,
    tools: ranked.filter(
      (tool) => getTierForScore(tool.scores.overall).rank === t.rank,
    ),
  }));

  const relatedTasks = tasks
    .filter((t) => t.intent === task.intent && t.slug !== task.slug)
    .slice(0, 6);

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
      {
        "@type": "ListItem",
        position: 3,
        name: task.name,
        item: `${BASE_URL}/for-task/${task.slug}`,
      },
    ],
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best AI Tools to ${task.name} (2026)`,
    description: task.description,
    numberOfItems: ranked.length,
    itemListElement: ranked.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tool.name,
      url: `${BASE_URL}/tools/${tool.slug}`,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(itemList) }}
      />

      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/for-task" className="hover:underline">
          By Task
        </Link>{" "}
        / <span className="text-foreground">{task.name}</span>
      </nav>

      <header className="mb-8">
        <div className="mb-2 inline-block rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
          {INTENT_LABELS[task.intent]}
        </div>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Best {task.searchHeadline} (2026)
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          {task.description}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {ranked.length} AI tool{ranked.length !== 1 && "s"} ranked for this
          task.
        </p>
      </header>

      {ranked.length === 0 ? (
        <div className="rounded-lg border border-border bg-muted/50 p-8 text-center">
          <p className="text-muted-foreground">
            No reviewed tools are currently tagged for this task. Suggest one
            via our{" "}
            <Link href="/submit" className="underline">
              submit-a-tool
            </Link>{" "}
            page.
          </p>
        </div>
      ) : (
        <>
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-black text-foreground">
              Tier rankings
            </h2>
            <div className="space-y-3">
              {byTier
                .filter((t) => t.tools.length > 0)
                .map(({ tier, tools: tierTools }) => (
                  <div
                    key={tier.rank}
                    className={`flex gap-4 rounded-xl border ${tier.border} ${tier.bg} p-4`}
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg text-xl font-black ${tier.labelBg} ${tier.labelText}`}
                    >
                      {tier.rank}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {tierTools.map((tool) => (
                        <Link
                          key={tool.slug}
                          href={`/tools/${tool.slug}`}
                          className="rounded-md border border-border bg-white px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-foreground/30 hover:shadow-sm dark:bg-card"
                        >
                          {tool.name}
                          <span className="ml-2 font-mono text-xs text-muted-foreground">
                            {tool.scores.overall.toFixed(1)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-1 text-xl font-black text-foreground">
              Reviews
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Short take + overall score for each tool. Click through for the
              full review, pricing, and known issues.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ranked.map((tool) => {
                const tier = getTierForScore(tool.scores.overall);
                return (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="group rounded-lg border border-border bg-card p-4 transition hover:border-foreground/20"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded text-sm font-bold ${tier.labelBg} ${tier.labelText}`}
                      >
                        {tier.rank}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <h3 className="truncate text-base font-bold text-foreground group-hover:underline">
                            {tool.name}
                          </h3>
                          <span className="shrink-0 font-mono text-sm text-foreground">
                            {tool.scores.overall.toFixed(1)}
                          </span>
                        </div>
                        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                          {tool.bestFor}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </>
      )}

      {relatedTasks.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-bold text-foreground">
            Related tasks
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {relatedTasks.map((t) => (
              <Link
                key={t.slug}
                href={`/for-task/${t.slug}`}
                className="rounded-lg border border-border bg-card p-3 text-sm font-medium text-foreground transition hover:border-foreground/20"
              >
                {t.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
