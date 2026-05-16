import { MetadataRoute } from "next";

const BASE_URL = "https://sayenglish.com"; // TODO: 실제 도메인으로 교체

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
