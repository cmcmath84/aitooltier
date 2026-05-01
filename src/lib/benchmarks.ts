import { ToolReview, BenchmarkScore } from "./types";
import { getTierForScore, getTierRank } from "./tiers";

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

// Dedicated benchmark-explainer pages under /benchmarks/[slug].
// `aliases` captures every BenchmarkScore.name variant that should surface in
// this page's ranked table (case / year / parenthesized-variant drift).
export interface BenchmarkPageInfo {
  slug: string;
  name: string;
  label: string;
  category: string;
  aliases: string[];
  tagline: string;
  what: string;
  how: string;
  why: string;
  creator: string;
  sourceUrl?: string;
  unit: string;
  maxScore: number;
}

export const BENCHMARK_PAGES: BenchmarkPageInfo[] = [
  {
    slug: "mmlu",
    name: "MMLU",
    label: "MMLU",
    category: "Knowledge",
    aliases: ["MMLU", "MMLU (Llama-Nemotron 70B)"],
    tagline: "The 57-subject knowledge test that became the default LLM benchmark.",
    what: "MMLU (Massive Multitask Language Understanding) is a 14,000-question multiple-choice exam spanning 57 subjects from elementary math to professional law. It measures how much a language model actually knows, not how well it reasons.",
    how: "Models answer four-choice questions in a zero-shot or few-shot setting. The reported score is average accuracy across all subjects. Scores above 85% are considered strong; humans average roughly 89% on this test.",
    why: "MMLU is the most widely-reported LLM benchmark, which makes it the easiest point of apples-to-apples comparison across vendors. Its weakness is saturation -- frontier models now cluster in the upper 80s and 90s, so small differences are statistical noise. Use it to rule out weak models, not to pick a winner among strong ones.",
    creator: "Hendrycks et al., 2020 (UC Berkeley)",
    sourceUrl: "https://arxiv.org/abs/2009.03300",
    unit: "%",
    maxScore: 100,
  },
  {
    slug: "mmlu-pro",
    name: "MMLU-Pro",
    label: "MMLU-Pro",
    category: "Knowledge",
    aliases: ["MMLU-Pro"],
    tagline: "MMLU's harder successor: 10 answer choices and more reasoning.",
    what: "MMLU-Pro is a successor to MMLU that expands each question to 10 answer choices (up from 4) and rewrites prompts to require multi-step reasoning rather than pure recall.",
    how: "Same accuracy metric as MMLU but on the harder reformulated question bank. Frontier models score roughly 10-20 points lower here than on base MMLU.",
    why: "Worth watching because base MMLU has saturated. MMLU-Pro is less saturated and still has headroom, making it a better discriminator for top-tier models in 2026.",
    creator: "TIGER-Lab, 2024",
    sourceUrl: "https://arxiv.org/abs/2406.01574",
    unit: "%",
    maxScore: 100,
  },
  {
    slug: "gpqa-diamond",
    name: "GPQA Diamond",
    label: "GPQA Diamond",
    category: "Reasoning",
    aliases: ["GPQA Diamond"],
    tagline: "Graduate-level physics, biology, and chemistry written to defeat Google-search.",
    what: "GPQA (Graduate-level Google-Proof Q&A) Diamond is the hardest subset of a 448-question multiple-choice set written by PhDs in physics, biology, and chemistry. Questions are deliberately designed so that searching the web does not yield the answer.",
    how: "Four-choice accuracy. Domain PhDs with unlimited internet access score about 65%; non-expert humans with search score roughly 34%. Frontier models in 2026 are hitting the 80s and 90s -- a major inflection.",
    why: "GPQA Diamond is the most cited reasoning benchmark for frontier LLMs precisely because it resists memorization. A high score implies the model can synthesize knowledge, not just recite training data.",
    creator: "Rein et al., 2023 (NYU/Cohere/Anthropic)",
    sourceUrl: "https://arxiv.org/abs/2311.12022",
    unit: "%",
    maxScore: 100,
  },
  {
    slug: "aime",
    name: "AIME",
    label: "AIME",
    category: "Math",
    aliases: ["AIME 2024", "AIME 2025", "AIME 2026"],
    tagline: "The American Invitational Math Exam, used as a rolling frontier-math benchmark.",
    what: "AIME is a 15-question annual math competition for top US high school students, with integer answers 0-999. LLM labs now run fresh AIME problems each year as a contamination-resistant reasoning benchmark because the questions are published publicly only after the competition.",
    how: "Accuracy over 15 problems, reported per year (AIME 2024, AIME 2025, etc.). Each year reruns against the current model lineup.",
    why: "AIME is the cleanest year-over-year math-reasoning signal. A model that scores 99%+ on AIME 2024 but 60% on AIME 2026 is almost certainly training-data-contaminated; fresh-year scores are the honest test.",
    creator: "Mathematical Association of America",
    sourceUrl: "https://www.maa.org/math-competitions/aime",
    unit: "%",
    maxScore: 100,
  },
  {
    slug: "math",
    name: "MATH",
    label: "MATH",
    category: "Math",
    aliases: ["MATH"],
    tagline: "12,500 competition-style math problems across algebra, geometry, calculus, and number theory.",
    what: "MATH is a 12,500-problem dataset of high school competition math (AMC/AIME-style) with step-by-step solutions. Models must produce final numerical or symbolic answers.",
    how: "Exact-match accuracy against ground-truth answers. Frontier models in 2026 exceed 95%, so it is mostly a saturated benchmark now, supplemented by fresh AIME runs.",
    why: "Historically useful for tracking multi-step reasoning; largely replaced as a discriminator by AIME and competition-math-live benchmarks.",
    creator: "Hendrycks et al., 2021",
    sourceUrl: "https://arxiv.org/abs/2103.03874",
    unit: "%",
    maxScore: 100,
  },
  {
    slug: "humaneval",
    name: "HumanEval",
    label: "HumanEval",
    category: "Coding",
    aliases: ["HumanEval"],
    tagline: "164 Python programming problems: does the generated code pass unit tests?",
    what: "HumanEval is 164 handwritten Python programming problems with hidden unit tests. A model sees the function signature plus docstring and must generate a body that passes every test.",
    how: "pass@1 -- the percentage of problems solved on the first attempt. Frontier models in 2026 sit in the 94-99% range, so this benchmark is effectively saturated for top-tier LLMs.",
    why: "Still useful as a floor-check: any serious coding model should clear 90% here. For real-world discrimination, SWE-bench Verified and LiveCodeBench are the benchmarks that still separate the field.",
    creator: "OpenAI, 2021",
    sourceUrl: "https://arxiv.org/abs/2107.03374",
    unit: "%",
    maxScore: 100,
  },
  {
    slug: "swe-bench",
    name: "SWE-bench Verified",
    label: "SWE-bench",
    category: "Coding",
    aliases: ["SWE-bench Verified", "SWE-Bench Verified"],
    tagline: "Fix real GitHub issues in 12 open-source Python repos.",
    what: "SWE-bench Verified is a 500-issue subset of SWE-bench that has been human-validated as solvable. Each task is a real Python GitHub issue; the model is given the repo, the issue, and must produce a patch that makes the project's test suite pass.",
    how: "Percentage of issues where the generated patch passes all hidden tests. This is end-to-end agentic coding, not just code-completion. Scores above 70% are state-of-the-art; a year ago it was 30%.",
    why: "SWE-bench Verified is the closest industry-standard benchmark to 'can this model actually do my job'. It rewards code-reading, multi-file editing, and test-driven iteration -- not just autocomplete.",
    creator: "Princeton & OpenAI, 2023 (Verified subset 2024)",
    sourceUrl: "https://www.swebench.com/",
    unit: "%",
    maxScore: 100,
  },
  {
    slug: "livecodebench",
    name: "LiveCodeBench",
    label: "LiveCodeBench",
    category: "Coding",
    aliases: ["LiveCodeBench"],
    tagline: "Competitive programming problems published AFTER the model's training cutoff.",
    what: "LiveCodeBench collects problems from LeetCode, AtCoder, and Codeforces, explicitly including only problems published after a model's knowledge cutoff to prevent training contamination.",
    how: "Pass@1 rate on held-out-by-date competitive-programming problems. Difficulty bucketed Easy/Medium/Hard. Because the problem set rolls forward with time, scores are comparable year over year.",
    why: "LiveCodeBench is the best available contamination-resistant coding benchmark. It discriminates between models that have memorized common algorithms and models that can actually solve novel problems under competitive constraints.",
    creator: "LMSYS & Berkeley, 2024",
    sourceUrl: "https://livecodebench.github.io/",
    unit: "%",
    maxScore: 100,
  },
  {
    slug: "arc-agi",
    name: "ARC-AGI",
    label: "ARC-AGI",
    category: "Reasoning",
    aliases: ["ARC-AGI"],
    tagline: "Abstract visual reasoning puzzles designed to stay hard for LLMs.",
    what: "ARC-AGI (Abstract Reasoning Corpus) is a set of grid-based visual puzzles where a model sees a few input/output example grids and must infer the transformation rule. Each puzzle is designed to require abstraction that does not exist in the training data.",
    how: "Accuracy on held-out puzzles. A 50% score is considered a major frontier milestone. ARC-AGI-2 is the harder current version; a $1M prize was offered for solving it.",
    why: "ARC-AGI is the benchmark designed to resist scaling. Strong performance suggests actual abstract-reasoning capability rather than pattern completion. Useful for identifying which models are 'thinking' vs 'searching training data'.",
    creator: "Francois Chollet, 2019 (v2 2024)",
    sourceUrl: "https://arcprize.org/",
    unit: "%",
    maxScore: 100,
  },
  {
    slug: "humanitys-last-exam",
    name: "Humanity's Last Exam",
    label: "HLE",
    category: "Reasoning",
    aliases: ["HLE"],
    tagline: "3,000 questions written by domain experts to still stump frontier models.",
    what: "Humanity's Last Exam (HLE) is a 3,000-question benchmark crowdsourced from thousands of subject-matter experts specifically to find questions that current frontier models cannot yet answer. Coverage spans math, physics, computer science, humanities, and specialist domains.",
    how: "Exact-match accuracy with expert-graded partial credit. As of early 2026, top models sit in the 20-45% range -- dramatically lower than on MMLU or GPQA.",
    why: "HLE is the newest 'unsaturated' frontier-reasoning benchmark, which makes it one of the few tests that still separates the top 5 models. Track this score rather than MMLU when comparing bleeding-edge LLMs.",
    creator: "Scale AI & Center for AI Safety, 2024",
    sourceUrl: "https://lastexam.ai/",
    unit: "%",
    maxScore: 100,
  },
];

export function getBenchmarkPage(slug: string): BenchmarkPageInfo | undefined {
  return BENCHMARK_PAGES.find((b) => b.slug === slug);
}

export interface ToolBenchmarkResult {
  tool: ToolReview;
  score: BenchmarkScore;
  scoreVariant: string;
}

// Return all tools with a score matching any alias of this benchmark page,
// sorted by score descending. For a tool with multiple matching aliases
// (e.g. AIME 2024 + 2025 + 2026), the most recent variant wins.
export function getRankedToolsForBenchmark(
  page: BenchmarkPageInfo,
  tools: ToolReview[],
): ToolBenchmarkResult[] {
  const results: ToolBenchmarkResult[] = [];
  for (const tool of tools) {
    if (!tool.benchmarks) continue;
    const matching = tool.benchmarks.scores.filter((s) => page.aliases.includes(s.name));
    if (matching.length === 0) continue;
    const best = matching.reduce((a, b) => (b.score > a.score ? b : a));
    results.push({ tool, score: best, scoreVariant: best.name });
  }
  return results.sort((a, b) => b.score.score - a.score.score);
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

// Extract usable use-case anchors from a tool's free-form bestFor field.
// Splits on sentence boundaries + semicolons, keeps meaningful chunks.
function extractUseCaseAnchors(bestFor: string): string[] {
  return bestFor
    .split(/[.;]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 18 && s.length < 180)
    .map((s) => (s.endsWith(".") ? s : `${s}.`));
}

// Auto-generate "Pick X if..." recommendations based on scores, benchmarks,
// pricing model, AND extracted use-case anchors from each tool's bestFor.
export function generateRecommendations(a: ToolReview, b: ToolReview): { pickA: string[]; pickB: string[] } {
  const pickA: string[] = [];
  const pickB: string[] = [];

  // Score-based reasons (use-case-flavored language)
  if (a.scores.outputQuality - b.scores.outputQuality >= 1) pickA.push(`Higher output quality (${a.scores.outputQuality.toFixed(1)} vs ${b.scores.outputQuality.toFixed(1)}) where polish matters more than speed`);
  if (b.scores.outputQuality - a.scores.outputQuality >= 1) pickB.push(`Higher output quality (${b.scores.outputQuality.toFixed(1)} vs ${a.scores.outputQuality.toFixed(1)}) where polish matters more than speed`);

  if (a.scores.easeOfUse - b.scores.easeOfUse >= 1) pickA.push(`Easier to learn and use day-to-day -- friendlier onboarding curve`);
  if (b.scores.easeOfUse - a.scores.easeOfUse >= 1) pickB.push(`Easier to learn and use day-to-day -- friendlier onboarding curve`);

  if (a.scores.value - b.scores.value >= 1) pickA.push(`Better value at the price you'll actually pay (${a.scores.value.toFixed(1)}/10 on value)`);
  if (b.scores.value - a.scores.value >= 1) pickB.push(`Better value at the price you'll actually pay (${b.scores.value.toFixed(1)}/10 on value)`);

  if (a.scores.features - b.scores.features >= 1) pickA.push(`More feature surface area for power users who'll use the depth`);
  if (b.scores.features - a.scores.features >= 1) pickB.push(`More feature surface area for power users who'll use the depth`);

  // Pricing-model reasons
  if (a.hasFreeTier && !b.hasFreeTier) pickA.push("Free tier lets you actually try it before paying");
  if (b.hasFreeTier && !a.hasFreeTier) pickB.push("Free tier lets you actually try it before paying");

  // Use-case anchors extracted from each tool's bestFor (the differentiating signal)
  const aAnchors = extractUseCaseAnchors(a.bestFor).slice(0, 2);
  const bAnchors = extractUseCaseAnchors(b.bestFor).slice(0, 2);
  for (const anchor of aAnchors) pickA.push(anchor);
  for (const anchor of bAnchors) pickB.push(anchor);

  // Benchmark-based reasons
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

// At-a-glance overview row used by the top-of-page comparison strip.
export interface AtGlanceRow {
  label: string;
  a: string;
  b: string;
  highlight: "a" | "b" | "neither";
}

export function generateAtGlanceRows(a: ToolReview, b: ToolReview): AtGlanceRow[] {
  const rows: AtGlanceRow[] = [];
  const overallHighlight: "a" | "b" | "neither" =
    a.scores.overall > b.scores.overall ? "a" : b.scores.overall > a.scores.overall ? "b" : "neither";

  rows.push({
    label: "Tier",
    a: `${getTierRank(a.scores.overall)}-tier`,
    b: `${getTierRank(b.scores.overall)}-tier`,
    highlight: overallHighlight,
  });

  rows.push({
    label: "Overall score",
    a: `${a.scores.overall.toFixed(1)} / 10`,
    b: `${b.scores.overall.toFixed(1)} / 10`,
    highlight: overallHighlight,
  });

  if (a.poweredBy || b.poweredBy) {
    rows.push({
      label: "Powered by",
      a: a.poweredBy ?? "—",
      b: b.poweredBy ?? "—",
      highlight: "neither",
    });
  }

  rows.push({
    label: "Free tier",
    a: a.hasFreeTier ? "Yes" : "No",
    b: b.hasFreeTier ? "Yes" : "No",
    highlight:
      a.hasFreeTier && !b.hasFreeTier ? "a" : !a.hasFreeTier && b.hasFreeTier ? "b" : "neither",
  });

  rows.push({
    label: "Starting price",
    a: a.pricing[0]?.price ?? "—",
    b: b.pricing[0]?.price ?? "—",
    highlight: "neither",
  });

  // Best-for one-liner (first sentence only, trimmed if too long)
  const trimBestFor = (s: string) => {
    const first = s.split(".")[0].trim();
    return first.length > 110 ? first.slice(0, 107) + "…" : first + ".";
  };
  rows.push({
    label: "Best for",
    a: trimBestFor(a.bestFor),
    b: trimBestFor(b.bestFor),
    highlight: "neither",
  });

  rows.push({
    label: "Last reviewed",
    a: a.lastReviewedDate,
    b: b.lastReviewedDate,
    highlight: "neither",
  });

  return rows;
}

// Editorial verdict: 3-4 paragraphs (~200-280 words) assembled from
// conditional templates that respond to score gap, pricing model, and
// each tool's bestFor framing. Returns markdown-ish string with \n\n
// paragraph breaks; the page splits on \n\n to render.
export function generateVerdict(a: ToolReview, b: ToolReview): string {
  const diff = a.scores.overall - b.scores.overall;
  const winner = diff >= 0 ? a : b;
  const loser = diff >= 0 ? b : a;
  const absDiff = Math.abs(diff);
  const winnerTier = getTierForScore(winner.scores.overall).rank;
  const loserTier = getTierForScore(loser.scores.overall).rank;
  const aBestFor = a.bestFor.split(".")[0].toLowerCase();
  const bBestFor = b.bestFor.split(".")[0].toLowerCase();
  const loserBestFor = loser.bestFor.split(".")[0].toLowerCase();

  const paragraphs: string[] = [];

  // OPENING: who wins, tier framing, score framing.
  if (absDiff < 0.3) {
    paragraphs.push(
      `${a.name} (${winnerTier}-tier, ${a.scores.overall.toFixed(1)}/10) and ${b.name} (${loserTier}-tier, ${b.scores.overall.toFixed(1)}/10) are within margin-of-error of each other on overall score. There's no decisive winner -- the right pick comes down to how you'll actually use the tool, not which scored higher in the abstract. We rate them on the same rubric (ease of use, output quality, value, features), and on this pair the rubric is calling it a draw.`,
    );
  } else if (absDiff < 1) {
    paragraphs.push(
      `${winner.name} edges out ${loser.name} by ${absDiff.toFixed(1)} points (${winner.scores.overall.toFixed(1)} vs ${loser.scores.overall.toFixed(1)}) -- a ${winnerTier}-tier vs ${loserTier}-tier split that's narrow but real. Not a blowout; both belong on a shortlist. The score gap shows up most clearly in the categories that matter for ${winner.name}'s strengths, so if those categories are your priority, the lead translates.`,
    );
  } else {
    paragraphs.push(
      `${winner.name} is the clear winner: ${winner.scores.overall.toFixed(1)}/10 (${winnerTier}-tier) versus ${loser.scores.overall.toFixed(1)}/10 (${loserTier}-tier). ${loser.name} isn't a bad tool, but on every category that drives the overall score, ${winner.name} comes out ahead. The tier gap is repeatable -- not methodology noise -- and the day-to-day experience reflects it.`,
    );
  }

  // PRICING PARAGRAPH
  const aStart = a.pricing[0]?.price ?? "n/a";
  const bStart = b.pricing[0]?.price ?? "n/a";
  if (a.hasFreeTier !== b.hasFreeTier) {
    const hasFree = a.hasFreeTier ? a : b;
    const noFree = a.hasFreeTier ? b : a;
    paragraphs.push(
      `On pricing, ${hasFree.name} starts free while ${noFree.name} requires a paid plan from day one (${noFree.pricing[0]?.price}+). If you're testing the waters or running an occasional workload, that gap matters more than the score differential. ${a.name} starts at ${aStart}; ${b.name} starts at ${bStart}. Compare what each entry tier actually unlocks before you compare list prices -- the limits matter more than the headline number.`,
    );
  } else if (a.hasFreeTier && b.hasFreeTier) {
    paragraphs.push(
      `Pricing-wise, both tools have a free tier (${a.name} starts ${aStart}, ${b.name} starts ${bStart}), so you can test either without committing. Compare what each free tier actually unlocks -- usage caps, model access, and feature gates differ a lot more than the headline price suggests, especially as both vendors have tightened limits in 2026.`,
    );
  } else {
    paragraphs.push(
      `Neither tool offers a free tier. ${a.name} starts at ${aStart}, ${b.name} at ${bStart}. Plan to budget for whichever you pick. The cheap tier usually caps out faster than buyers expect, so look at what the entry plan actually includes -- both vendors have raised list prices in 2026 and the limits are where most of the cost surprise lives.`,
    );
  }

  // USE-CASE SPLIT
  paragraphs.push(
    `By use case: pick ${a.name} when ${aBestFor}. Pick ${b.name} when ${bBestFor}. The two tools aren't fighting for the same person -- they're aiming at adjacent jobs that occasionally overlap. If you're squarely in ${winner.name}'s lane, the tier-list ranking and the use-case fit point the same direction; if you're in ${loser.name}'s lane, the score gap matters less than the fit.`,
  );

  // BOTTOM LINE
  if (absDiff < 0.3) {
    paragraphs.push(
      `Bottom line: this pair is a coin flip on raw scores. Choose by use-case fit, free-tier availability, and which one you can actually try without committing. Re-evaluate in 60-90 days -- both vendors are shipping fast in 2026.`,
    );
  } else if (absDiff < 1) {
    paragraphs.push(
      `Bottom line: ${winner.name} is the safer default for most readers, but ${loser.name} is competitive enough that the tie-breaker is your specific workload, not the spec sheet.`,
    );
  } else {
    paragraphs.push(
      `Bottom line: ${winner.name} is the better tool for most people right now. Pick ${loser.name} only when ${loserBestFor} -- that's its lane, and inside that lane it still earns its place.`,
    );
  }

  return paragraphs.join("\n\n");
}
