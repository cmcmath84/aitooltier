import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/go/",
    },
    sitemap: "https://aitooltier.com/sitemap.xml",
  };
}
