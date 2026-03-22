import type { MetadataRoute } from "next";
import { baseUrl } from "@/app/sitemap";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/blog",
          "/blog/",
          "/projects",
          "/experience",
          "/resume",
          "/about",
          "/experiments",
          "/reading",
        ],
        disallow: ["/api/", "/vcard", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
