import { MetadataRoute } from "next";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { useCases } from "@/data/use-cases";
import { professions } from "@/data/professions";
import { BENCHMARK_PAGES } from "@/lib/benchmarks";
import { leaderboardSlug } from "@/lib/leaderboards";
import { tasks } from "@/data/tasks";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aitooltier.com";

  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  entries.push(
    { url: baseUrl, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/compare`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/how-we-review`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/all-tools`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/methodology`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/trending`, changeFrequency: "daily", priority: 0.7 },
    { url: `${baseUrl}/benchmarks`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/leaderboard`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/for-task`, changeFrequency: "weekly", priority: 0.8 },
  );

  // Task pages (AI-tools-by-task taxonomy)
  for (const t of tasks) {
    entries.push({
      url: `${baseUrl}/for-task/${t.slug}`,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Benchmark detail pages
  for (const b of BENCHMARK_PAGES) {
    entries.push({
      url: `${baseUrl}/benchmarks/${b.slug}`,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // Leaderboard pages (one per category)
  for (const cat of categories) {
    entries.push({
      url: `${baseUrl}/leaderboard/${leaderboardSlug(cat.slug)}`,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  const toDate = (iso: string) => {
    const d = new Date(iso);
    return isNaN(d.getTime()) ? undefined : d;
  };

  // Tool review pages
  for (const tool of tools) {
    entries.push({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: toDate(tool.lastReviewedDate),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Alternatives pages
  for (const tool of tools) {
    entries.push({
      url: `${baseUrl}/alternatives/${tool.slug}`,
      lastModified: toDate(tool.lastReviewedDate),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Pricing pages
  for (const tool of tools) {
    entries.push({
      url: `${baseUrl}/pricing/${tool.slug}`,
      lastModified: toDate(tool.lastReviewedDate),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Category pages
  for (const cat of categories) {
    entries.push({ url: `${baseUrl}/categories/${cat.slug}`, changeFrequency: "weekly", priority: 0.7 });
  }

  // Use case pages
  for (const uc of useCases) {
    entries.push({ url: `${baseUrl}/best-for/${uc.slug}`, changeFrequency: "weekly", priority: 0.8 });
  }

  // Profession pages
  for (const p of professions) {
    entries.push({ url: `${baseUrl}/ai-tools-for/${p.slug}`, changeFrequency: "weekly", priority: 0.8 });
  }

  // Comparison pages — all VS combos
  for (let i = 0; i < tools.length; i++) {
    for (let j = i + 1; j < tools.length; j++) {
      const a = tools[i];
      const b = tools[j];
      const newer =
        (toDate(a.lastReviewedDate)?.getTime() || 0) >
        (toDate(b.lastReviewedDate)?.getTime() || 0)
          ? a.lastReviewedDate
          : b.lastReviewedDate;
      entries.push({
        url: `${baseUrl}/compare/${a.slug}-vs-${b.slug}`,
        lastModified: toDate(newer),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
