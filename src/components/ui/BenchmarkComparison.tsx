import { ToolReview } from "@/lib/types";
import { getSharedBenchmarks, getBenchmarkInfo } from "@/lib/benchmarks";

interface BenchmarkComparisonProps {
  toolA: ToolReview;
  toolB: ToolReview;
}

export default function BenchmarkComparison({
  toolA,
  toolB,
}: BenchmarkComparisonProps) {
  const hasBenchmarksA = !!toolA.benchmarks;
  const hasBenchmarksB = !!toolB.benchmarks;

  if (!hasBenchmarksA && !hasBenchmarksB) return null;

  const bothHaveBenchmarks = hasBenchmarksA && hasBenchmarksB;
  const shared = getSharedBenchmarks(toolA, toolB);

  const eloA = toolA.benchmarks?.chatbotArenaElo;
  const eloB = toolB.benchmarks?.chatbotArenaElo;

  // Single-tool fallback: show that tool's benchmarks with a note
  const soloTool = hasBenchmarksA ? toolA : toolB;
  const missingTool = hasBenchmarksA ? toolB : toolA;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold text-foreground">
        Benchmark Head-to-Head
      </h3>
      {bothHaveBenchmarks ? (
        <p className="text-sm text-muted-foreground">
          {toolA.benchmarks!.modelName} vs {toolB.benchmarks!.modelName}
        </p>
      ) : (
        <p className="text-sm text-muted-foreground">
          {soloTool.benchmarks!.modelName} benchmarks &mdash;{" "}
          {missingTool.name} has no published benchmarks
        </p>
      )}

      {/* Arena ELO comparison */}
      {bothHaveBenchmarks && eloA && eloB && (
        <div className="flex items-center gap-4 rounded-lg bg-muted px-4 py-3">
          <span className="text-sm font-semibold text-foreground">
            Chatbot Arena ELO
          </span>
          <span className="ml-auto flex items-center gap-4">
            <span
              className={`text-base font-bold ${
                eloA > eloB ? "text-primary" : "text-foreground"
              }`}
            >
              {eloA}
            </span>
            <span className="text-xs text-muted-foreground">vs</span>
            <span
              className={`text-base font-bold ${
                eloB > eloA ? "text-primary" : "text-foreground"
              }`}
            >
              {eloB}
            </span>
          </span>
        </div>
      )}

      {bothHaveBenchmarks && shared.length > 0 ? (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Benchmark
                </th>
                <th className="px-4 py-3 text-right font-semibold text-foreground">
                  {toolA.name}
                </th>
                <th className="px-4 py-3 text-right font-semibold text-foreground">
                  {toolB.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {shared.map(({ name, scoreA, scoreB }) => {
                const info = getBenchmarkInfo(name);
                const aWins = scoreA.score > scoreB.score;
                const bWins = scoreB.score > scoreA.score;

                return (
                  <tr
                    key={name}
                    className="border-t border-border transition hover:bg-muted/50"
                  >
                    <td className="px-4 py-3">
                      <span className="font-medium text-foreground">
                        {info.label}
                      </span>
                      <span className="ml-2 text-xs text-muted-foreground hidden sm:inline">
                        {info.description}
                      </span>
                    </td>
                    <td
                      className={`px-4 py-3 text-right whitespace-nowrap ${
                        aWins ? "font-bold text-primary" : "text-foreground"
                      }`}
                    >
                      {scoreA.score}
                      {scoreA.unit}
                    </td>
                    <td
                      className={`px-4 py-3 text-right whitespace-nowrap ${
                        bWins ? "font-bold text-primary" : "text-foreground"
                      }`}
                    >
                      {scoreB.score}
                      {scoreB.unit}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : !bothHaveBenchmarks && soloTool.benchmarks ? (
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
              </tr>
            </thead>
            <tbody>
              {soloTool.benchmarks.scores.map((score) => {
                const info = getBenchmarkInfo(score.name);
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : bothHaveBenchmarks && shared.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          These tools have no shared benchmarks to compare.
        </p>
      ) : null}
    </div>
  );
}
