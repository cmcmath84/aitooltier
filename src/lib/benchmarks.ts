import { ToolReview, BenchmarkScore } from "./types";

// Plain-English descriptions for each benchmark
export const BENCHMARK_INFO: Record<string, { label: string; description: string; category: string }> = {
  "MMLU": { label: "MMLU", description: "Knowledge across 57 subjects", category: "Knowledge" },
  "MMLU-Pro": { label: "MMLU-Pro", description: "Harder multi-subject reasoning", category: "Knowledge" },
  "GPQA Diamond": { label: "GPQA Diamond", description: "Graduate-level science questions", category: "Reasoning" },
  "AIME 2024": { label: "AIME 2024", description: "Competition math problems", category: "Math" },
  "MATH": { label: "MATH", description: "Math problem solving", category: "Math" },
  "HumanEval": { label: "HumanEval", description: "Python code generation", category: "Coding" },
  "SWE-bench Verified": { label: "SWE-bench", description: "Real GitHub issue fixing", category: "Coding" },
  "ARC-AGI": { label: "ARC-AGI", description: "Abstract reasoning puzzles", category: "Reasoning" },
  "HLE": { label: "Humanity's Last Exam", description: "Frontier difficulty questions", category: "Reasoning" },
  "Chatbot Arena ELO": { label: "Arena ELO", description: "Human preference rating", category: "Overall" },
};

export function getBenchmarkInfo(name: string) {
  return BENCHMARK_INFO[name] || { label: name, description: "", category: "Other" };
}

// Find benchmarks that both tools share
export function getSharedBenchmarks(a: ToolReview, b: ToolReview): { name: string; scoreA: BenchmarkScore; scoreB: BenchmarkScore }[] {
  if (!a.benchmarks || !b.benchmarks) return [];
  const shared: { name: string; scoreA: BenchmarkScore; scoreB: BenchmarkScore }[] = [];
  for (const scoreA of a.benchmarks.scores) {
    const scoreB = b.benchmarks.scores.find((s) => s.name === scoreA.name);
    if (scoreB) {
      shared.push({ name: scoreA.name, scoreA, scoreB });
    }
  }
  return shared;
}

// Auto-generate "Pick X if..." recommendations based on scores and benchmarks
export function generateRecommendations(a: ToolReview, b: ToolReview): { pickA: string[]; pickB: string[] } {
  const pickA: string[] = [];
  const pickB: string[] = [];

  // Score-based recommendations
  if (a.scores.outputQuality - b.scores.outputQuality >= 1) pickA.push(`Higher output quality (${a.scores.outputQuality} vs ${b.scores.outputQuality})`);
  if (b.scores.outputQuality - a.scores.outputQuality >= 1) pickB.push(`Higher output quality (${b.scores.outputQuality} vs ${a.scores.outputQuality})`);

  if (a.scores.easeOfUse - b.scores.easeOfUse >= 1) pickA.push(`Easier to use (${a.scores.easeOfUse} vs ${b.scores.easeOfUse})`);
  if (b.scores.easeOfUse - a.scores.easeOfUse >= 1) pickB.push(`Easier to use (${b.scores.easeOfUse} vs ${a.scores.easeOfUse})`);

  if (a.scores.value - b.scores.value >= 1) pickA.push(`Better value for money (${a.scores.value}/10)`);
  if (b.scores.value - a.scores.value >= 1) pickB.push(`Better value for money (${b.scores.value}/10)`);

  if (a.scores.features - b.scores.features >= 1) pickA.push(`More features (${a.scores.features} vs ${b.scores.features})`);
  if (b.scores.features - a.scores.features >= 1) pickB.push(`More features (${b.scores.features} vs ${a.scores.features})`);

  // Pricing recommendations
  if (a.hasFreeTier && !b.hasFreeTier) pickA.push("Has a free tier");
  if (b.hasFreeTier && !a.hasFreeTier) pickB.push("Has a free tier");

  // Benchmark-based recommendations
  const shared = getSharedBenchmarks(a, b);
  const aWins = shared.filter((s) => s.scoreA.score > s.scoreB.score);
  const bWins = shared.filter((s) => s.scoreB.score > s.scoreA.score);

  if (aWins.length > 0) {
    const topWin = aWins.sort((x, y) => {
      const diffY = (y.scoreA.score - y.scoreB.score) / y.scoreA.maxScore;
      const diffX = (x.scoreA.score - x.scoreB.score) / x.scoreA.maxScore;
      return diffY - diffX;
    })[0];
    const info = getBenchmarkInfo(topWin.name);
    const diff = (topWin.scoreA.score - topWin.scoreB.score).toFixed(1);
    pickA.push(`Stronger on ${info.description.toLowerCase()} (+${diff}${topWin.scoreA.unit} on ${info.label})`);
  }

  if (bWins.length > 0) {
    const topWin = bWins.sort((x, y) => {
      const diffY = (y.scoreB.score - y.scoreA.score) / y.scoreB.maxScore;
      const diffX = (x.scoreB.score - x.scoreA.score) / x.scoreB.maxScore;
      return diffY - diffX;
    })[0];
    const info = getBenchmarkInfo(topWin.name);
    const diff = (topWin.scoreB.score - topWin.scoreA.score).toFixed(1);
    pickB.push(`Stronger on ${info.description.toLowerCase()} (+${diff}${topWin.scoreB.unit} on ${info.label})`);
  }

  // Arena ELO
  if (a.benchmarks?.chatbotArenaElo && b.benchmarks?.chatbotArenaElo) {
    const diff = a.benchmarks.chatbotArenaElo - b.benchmarks.chatbotArenaElo;
    if (diff >= 20) pickA.push(`Higher human preference rating (Arena ELO ${a.benchmarks.chatbotArenaElo} vs ${b.benchmarks.chatbotArenaElo})`);
    if (diff <= -20) pickB.push(`Higher human preference rating (Arena ELO ${b.benchmarks.chatbotArenaElo} vs ${a.benchmarks.chatbotArenaElo})`);
  }

  return { pickA, pickB };
}

// Generate a comparison verdict
export function generateVerdict(a: ToolReview, b: ToolReview): string {
  const diff = a.scores.overall - b.scores.overall;
  const winner = diff >= 0 ? a : b;
  const loser = diff >= 0 ? b : a;
  const absDiff = Math.abs(diff);

  if (absDiff < 0.3) {
    return `${a.name} and ${b.name} are extremely close overall. Your choice comes down to specific needs -- ${a.name} is better for ${a.bestFor.split(".")[0].toLowerCase()}, while ${b.name} works best for ${b.bestFor.split(".")[0].toLowerCase()}.`;
  }
  if (absDiff < 1) {
    return `${winner.name} edges out ${loser.name} with a ${winner.scores.overall.toFixed(1)} vs ${loser.scores.overall.toFixed(1)} overall score. Both are solid picks, but ${winner.name} has the advantage in ${winner.scores.outputQuality > loser.scores.outputQuality ? "output quality" : winner.scores.value > loser.scores.value ? "value" : "features"}.`;
  }
  return `${winner.name} is the clear winner here with ${winner.scores.overall.toFixed(1)}/10 vs ${loser.scores.overall.toFixed(1)}/10. ${loser.name} isn't bad, but ${winner.name} outperforms it across the board. Pick ${loser.name} only if ${loser.bestFor.split(".")[0].toLowerCase()}.`;
}
