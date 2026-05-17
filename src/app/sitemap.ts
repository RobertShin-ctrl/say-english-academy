import { MetadataRoute } from "next";

const BASE_URL = "https://say-english-academy.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/programs", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/curriculum", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/why-sayenglish", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
