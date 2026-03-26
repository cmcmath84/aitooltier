import { MetadataRoute } from "next";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";

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
  ];

  // Tool review pages
  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
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

  return [...staticPages, ...toolPages, ...categoryPages, ...comparisonPages];
}
