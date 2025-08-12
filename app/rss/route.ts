import { getAllPosts } from "@/lib/mdx";
import type { Post } from "@/lib/mdx";

function toRfc822Date(dateString: string): string {
    // Try native parse first
    let parsed = new Date(dateString);
    if (isNaN(parsed.getTime())) {
        // Fix common misspelling in content: "Feburary" -> "February"
        const fixed = dateString.replace(/Feburary/gi, "February");
        parsed = new Date(fixed);
    }
    if (isNaN(parsed.getTime())) {
        // Fallback to now if still invalid
        parsed = new Date();
    }
    return parsed.toUTCString();
}

function escapeCdata(text: string): string {
    return text.replaceAll("]]>", "]]&gt;");
}

function generateRSSFeed(posts: Post[], blogUrl: string): string {
    const feedItems = posts
        .map((post) => {
            const postUrl = `${blogUrl}/${post.slug}`;
            const title = escapeCdata(post.title ?? "Untitled");
            const description = escapeCdata(post.excerpt ?? "");
            const pubDate = toRfc822Date(post.date ?? "");

            return `
        <item>
            <title><![CDATA[${title}]]></title>
            <link>${postUrl}</link>
            <guid>${postUrl}</guid>
            <pubDate>${pubDate}</pubDate>
            <description><![CDATA[<p>${description}</p>]]></description>
        </item>`;
        })
        .join("");

    return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title><![CDATA[Avik Mukherjee's Blog]]></title>
    <link>${blogUrl}</link>
    <description><![CDATA[Explore blog posts on engineering, design, and product development.]]></description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${feedItems}
  </channel>
</rss>`;
}

export const GET = async (req: Request) => {
    const posts = await getAllPosts();
    const siteUrl = process.env.APP_URL || new URL(req.url).origin;
    const blogUrl = `${siteUrl}/blog`;
    const rss = generateRSSFeed(posts, blogUrl);

    return new Response(rss, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate",
        },
    });
};