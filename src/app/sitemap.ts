import { MetadataRoute } from "next";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { BENCHMARK_PAGES } from "@/lib/benchmarks";
import { isIndexableCompare } from "@/lib/indexable-compares";

// SEO footprint policy (2026-06-09): the sitemap deliberately lists ONLY the
// surfaces we want Google to index -- tool reviews, pricing, alternatives,
// categories, benchmarks, hubs, and the curated indexable compare pairs.
// Excluded on purpose (live but noindexed): the ~8,800 non-curated compare
// pairs, /is-it-down/*, /for-task/*, /best-for/*, /ai-tools-for/*, and
// /leaderboard/* (duplicates of /categories). Do not re-add a surface here
// without also removing its noindex -- see project_aitooltier_gsc_diagnosis.

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aitooltier.com";

  const entries: MetadataRoute.Sitemap = [];

  const toDate = (iso: string) => {
    const d = new Date(iso);
    return isNaN(d.getTime()) ? undefined : d;
  };

  const newestReviewDate = tools.reduce((max, t) => {
    const d = toDate(t.lastReviewedDate)?.getTime() || 0;
    return d > max ? d : max;
  }, 0);
  const siteLastModified = newestReviewDate ? new Date(newestReviewDate) : undefined;

  // Static pages
  entries.push(
    { url: baseUrl, lastModified: siteLastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/compare`, lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/how-we-review`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/all-tools`, lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/methodology`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/trending`, lastModified: siteLastModified, changeFrequency: "daily", priority: 0.7 },
    { url: `${baseUrl}/benchmarks`, lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/submit`, changeFrequency: "monthly", priority: 0.4 },
  );

  // Benchmark detail pages
  for (const b of BENCHMARK_PAGES) {
    entries.push({
      url: `${baseUrl}/benchmarks/${b.slug}`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

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
    entries.push({
      url: `${baseUrl}/categories/${cat.slug}`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // Comparison pages -- curated indexable pairs only
  for (let i = 0; i < tools.length; i++) {
    for (let j = i + 1; j < tools.length; j++) {
      const a = tools[i];
      const b = tools[j];
      if (!isIndexableCompare(a.slug, b.slug)) continue;
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
