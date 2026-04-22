import { categories } from "@/data/categories";
import { Category } from "./types";

// Leaderboard URLs strip the "ai-" prefix for cleaner SEO.
// Category slug "ai-llms" -> leaderboard slug "llms".
export function leaderboardSlug(categorySlug: string): string {
  return categorySlug.startsWith("ai-")
    ? categorySlug.slice(3)
    : categorySlug;
}

export function getCategoryForLeaderboard(
  leaderboardSlug: string,
): Category | undefined {
  return (
    categories.find((c) => c.slug === `ai-${leaderboardSlug}`) ||
    categories.find((c) => c.slug === leaderboardSlug)
  );
}

// Human-readable label when the category name is generic.
// Used for metadata and H1s on /leaderboard/[slug] pages.
export function leaderboardTitle(category: Category): string {
  // Strip "AI " prefix from category.name since the leaderboard h1 already
  // says "Best ... AI ...".
  return category.name.replace(/^AI\s+/i, "");
}
