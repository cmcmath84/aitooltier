import { MetadataRoute } from "next";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { useCases } from "@/data/use-cases";
import { professions } from "@/data/professions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aitooltier.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/compare`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.3 },
    {
      url: `${baseUrl}/how-we-review`,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/all-tools`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/methodology`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/trending`,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];

  // Tool review pages
  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Alternatives pages
  const alternativesPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/alternatives/${tool.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Pricing pages
  const pricingPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/pricing/${tool.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Use case pages ("Best AI for X")
  const useCasePages: MetadataRoute.Sitemap = useCases.map((uc) => ({
    url: `${baseUrl}/best-for/${uc.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Profession pages ("AI Tools for X")
  const professionPages: MetadataRoute.Sitemap = professions.map((p) => ({
    url: `${baseUrl}/ai-tools-for/${p.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Comparison pages (all VS combos)
  const comparisonPages: MetadataRoute.Sitemap = [];
  for (let i = 0; i < tools.length; i++) {
    for (let j = i + 1; j < tools.length; j++) {
      comparisonPages.push({
        url: `${baseUrl}/compare/${tools[i].slug}-vs-${tools[j].slug}`,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return [
    ...staticPages,
    ...toolPages,
    ...alternativesPages,
    ...pricingPages,
    ...categoryPages,
    ...useCasePages,
    ...professionPages,
    ...comparisonPages,
  ];
}
