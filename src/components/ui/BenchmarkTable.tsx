import { ToolBenchmarks } from "@/lib/types";
import { getBenchmarkInfo } from "@/lib/benchmarks";

interface BenchmarkTableProps {
  benchmarks: ToolBenchmarks;
}

export default function BenchmarkTable({ benchmarks }: BenchmarkTableProps) {
  const { modelName, scores, chatbotArenaElo, lastUpdated } = benchmarks;

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-muted-foreground">
        Benchmarks for {modelName}
      </p>

      {chatbotArenaElo && (
        <div className="flex items-center gap-3 rounded-lg bg-muted px-4 py-3">
          <span className="text-sm font-semibold text-foreground">
            Chatbot Arena ELO
          </span>
          <span className="text-xs text-muted-foreground">
            Human preference rating
          </span>
          <span className="ml-auto text-lg font-bold text-primary">
            {chatbotArenaElo}
          </span>
        </div>
      )}

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Benchmark
              </th>
              <th className="hidden px-4 py-3 text-left font-semibold text-foreground sm:table-cell">
                Description
              </th>
              <th className="px-4 py-3 text-right font-semibold text-foreground">
                Score
              </th>
              <th className="hidden px-4 py-3 text-left font-semibold text-foreground min-w-[120px] md:table-cell">
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score) => {
              const info = getBenchmarkInfo(score.name);
              const pct = Math.min((score.score / score.maxScore) * 100, 100);

              return (
                <tr
                  key={score.name}
                  className="border-t border-border transition hover:bg-muted/50"
                >
                  <td className="px-4 py-3 font-medium text-foreground">
                    {info.label}
                  </td>
                  <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                    {info.description}
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-foreground whitespace-nowrap">
                    {score.score}
                    {score.unit}
                  </td>
                  <td className="hidden px-4 py-3 md:table-cell">
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-primary transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground">
        Last updated: {lastUpdated}
      </p>
    </div>
  );
}
