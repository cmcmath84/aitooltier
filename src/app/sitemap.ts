import { MetadataRoute } from "next";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { useCases } from "@/data/use-cases";
import { professions } from "@/data/professions";

// Split into chunks to avoid oversized sitemaps
const CHUNK_SIZE = 5000;

export async function generateSitemaps() {
  const totalComparisons = (tools.length * (tools.length - 1)) / 2;
  const totalUrls =
    7 + // static pages
    tools.length + // tool pages
    tools.length + // alternatives
    tools.length + // pricing
    categories.length + // categories
    useCases.length + // best-for
    professions.length + // ai-tools-for
    totalComparisons; // comparisons

  const numSitemaps = Math.ceil(totalUrls / CHUNK_SIZE);
  return Array.from({ length: numSitemaps }, (_, i) => ({ id: i }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const baseUrl = "https://aitooltier.com";

  // Build ALL URLs in order
  const allUrls: MetadataRoute.Sitemap = [];

  // Static pages
  allUrls.push(
    { url: baseUrl, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/compare`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/how-we-review`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/all-tools`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/methodology`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/trending`, changeFrequency: "daily", priority: 0.7 },
  );

  // Tool review pages
  for (const tool of tools) {
    allUrls.push({
      url: `${baseUrl}/tools/${tool.slug}`,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  // Alternatives pages
  for (const tool of tools) {
    allUrls.push({
      url: `${baseUrl}/alternatives/${tool.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Pricing pages
  for (const tool of tools) {
    allUrls.push({
      url: `${baseUrl}/pricing/${tool.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Category pages
  for (const cat of categories) {
    allUrls.push({
      url: `${baseUrl}/categories/${cat.slug}`,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // Use case pages ("Best AI for X")
  for (const uc of useCases) {
    allUrls.push({
      url: `${baseUrl}/best-for/${uc.slug}`,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Profession pages ("AI Tools for X")
  for (const p of professions) {
    allUrls.push({
      url: `${baseUrl}/ai-tools-for/${p.slug}`,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Comparison pages (all VS combos)
  for (let i = 0; i < tools.length; i++) {
    for (let j = i + 1; j < tools.length; j++) {
      allUrls.push({
        url: `${baseUrl}/compare/${tools[i].slug}-vs-${tools[j].slug}`,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  // Return the chunk for this sitemap ID
  const start = id * CHUNK_SIZE;
  return allUrls.slice(start, start + CHUNK_SIZE);
}
