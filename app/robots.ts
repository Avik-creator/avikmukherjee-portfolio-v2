import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseURL = "https://avikmukherjee.me";
    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/blog", "/projects", "/experience", "/resume", "/rss", "/about", "/experiments"],
            disallow: [],
        },
        sitemap: `${baseURL}/sitemap.xml`
    }
}