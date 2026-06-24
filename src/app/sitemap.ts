import type { MetadataRoute } from "next";
import { TEMPLATES } from "@/lib/templates";

const BASE_URL = "https://northkraken.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const templateRoutes = TEMPLATES.map((tpl) => ({
    url: `${BASE_URL}/templates/${tpl.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/apps`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...templateRoutes,
  ];
}
