import Link from "next/link";
import { ToolReview } from "@/lib/types";
import ScoreBadge from "./ScoreBadge";
import ToolLogo from "./ToolLogo";

interface ComparisonTableProps {
  tools: ToolReview[];
  showCategory?: boolean;
}

export default function ComparisonTable({
  tools,
  showCategory = false,
}: ComparisonTableProps) {
  const sorted = [...tools].sort(
    (a, b) => b.scores.overall - a.scores.overall
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-foreground">
              #
            </th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">
              Tool
            </th>
            <th className="px-4 py-3 text-center font-semibold text-foreground">
              Score
            </th>
            <th className="hidden px-4 py-3 text-left font-semibold text-foreground sm:table-cell">
              Best For
            </th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">
              Price
            </th>
            <th className="hidden px-4 py-3 text-center font-semibold text-foreground sm:table-cell">
              Free Tier
            </th>
            <th className="px-4 py-3 text-right font-semibold text-foreground">
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((tool, index) => (
            <tr
              key={tool.slug}
              className="border-t border-border transition hover:bg-muted/50"
            >
              <td className="px-4 py-4 font-medium text-muted-foreground">
                {index + 1}
              </td>
              <td className="px-4 py-4">
                <Link
                  href={`/tools/${tool.slug}`}
                  className="flex items-center gap-2 font-medium text-foreground hover:text-primary"
                >
                  <ToolLogo slug={tool.slug} name={tool.name} size="sm" />
                  {tool.name}
                </Link>
                {showCategory && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    {tool.category}
                  </span>
                )}
              </td>
              <td className="px-4 py-4">
                <div className="flex justify-center">
                  <ScoreBadge score={tool.scores.overall} size="sm" />
                </div>
              </td>
              <td className="hidden px-4 py-4 text-muted-foreground sm:table-cell">
                {tool.bestFor.length > 60
                  ? tool.bestFor.slice(0, 60) + "..."
                  : tool.bestFor}
              </td>
              <td className="px-4 py-4 text-muted-foreground">
                {tool.hasFreeTier
                  ? "Free / " + tool.pricing[1]?.price
                  : tool.pricing[0]?.price + "/" + tool.pricing[0]?.period}
              </td>
              <td className="hidden px-4 py-4 text-center sm:table-cell">
                {tool.hasFreeTier ? (
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                    Yes
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                    No
                  </span>
                )}
              </td>
              <td className="px-4 py-4 text-right">
                <Link
                  href={`/tools/${tool.slug}`}
                  className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white transition hover:bg-primary-hover"
                >
                  Review
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
