import { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { getTierForScore } from "@/lib/tiers";
import { safeJsonLd } from "@/lib/structured-data";

const BASE_URL = "https://aitooltier.com";

export const metadata: Metadata = {
  title: "Is Your AI Tool Down? (2026) -- Outage Check for Every AI Tool We Review",
  description:
    "Check if ChatGPT, Claude, Gemini, Cursor, Midjourney, or any other AI tool is down. Status page links, DownDetector, known issues, and alternatives for 128 AI tools.",
};

export default function IsItDownHub() {
  const active = tools.filter((t) => t.status !== "deprecated");

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Outage Checks",
        item: `${BASE_URL}/is-it-down`,
      },
    ],
  };

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Is Your AI Tool Down?",
    description:
      "Outage check pages for every AI tool in the AIToolTier catalog.",
    url: `${BASE_URL}/is-it-down`,
    hasPart: active.map((t) => ({
      "@type": "WebPage",
      name: `Is ${t.name} Down?`,
      url: `${BASE_URL}/is-it-down/${t.slug}`,
    })),
  };

  const sorted = [...active].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
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
          Is Your AI Tool Down?
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Quick outage checks for every AI tool we review. Each page points to
          the vendor&apos;s official status page, DownDetector, their X feed,
          and any known issues we&apos;ve tracked in our editorial sweeps.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {active.length} AI tools covered.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Tool</th>
              <th className="px-4 py-3">Tier</th>
              <th className="hidden px-4 py-3 sm:table-cell">Known Issues</th>
              <th className="px-4 py-3 text-right">Status Check</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            {sorted.map((tool) => {
              const tier = getTierForScore(tool.scores.overall);
              const issueCount = tool.knownIssues?.length || 0;
              return (
                <tr key={tool.slug} className="hover:bg-muted/30">
                  <td className="px-4 py-3">
                    <Link
                      href={`/is-it-down/${tool.slug}`}
                      className="font-semibold text-foreground hover:underline"
                    >
                      Is {tool.name} down?
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded text-xs font-bold ${tier.labelBg} ${tier.labelText}`}
                    >
                      {tier.rank}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                    {issueCount === 0
                      ? "None logged"
                      : `${issueCount} logged`}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/is-it-down/${tool.slug}`}
                      className="text-sm font-medium text-foreground hover:underline"
                    >
                      Check &rarr;
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
        <p>
          <strong className="text-foreground">How these pages work:</strong>{" "}
          we don&apos;t run our own uptime probes. Each page aggregates the
          most useful sources for checking an AI tool&apos;s current status
          -- official status pages, DownDetector, vendor social -- plus a
          rolling log of known issues from our own review sweeps.
        </p>
      </div>
    </div>
  );
}
