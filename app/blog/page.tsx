import { getAllPosts } from "@/lib/mdx"
import BlogLayout from "@/components/blog-layout"
import Link from "next/link"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "See my Blog.",
    openGraph: {
      title: "Blogs | Avik",
      description: "Blogs of Avik Mukherjee.",
      url: "https://www.avikmukherjee.tech/projects",
      images: ["https://www.avikmukherjee.tech/og-image.jpg"],
      siteName: "Avik Mukherjee",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: "Blogs | Avik",
      card: "summary_large_image",
      images: ["https://www.avikmukherjee.tech/og-image.jpg"],
      description: "Blogs of Avik Mukherjee.",
    },
  };

export default async function BlogPage() {
  try {
    const posts = await getAllPosts()

    return (
      <BlogLayout backLink="/" backText="← back">
        <header className="mb-12">
          <h1 className="text-xl font-medium mb-6">writing</h1>
          <p className="text-white/70">Thoughts on design, development, and technology.</p>
        </header>

        <section>
          {posts.map((post) => (
            <div key={post.slug} className="mb-8 pb-8 border-b border-white/10">
              <div className="flex justify-between items-start mb-2">
                <Link href={`/blog/${post.slug}`} className="text-lg font-medium hover:underline">
                  {post.title}
                </Link>
                <span className="text-white/70 text-sm">{post.date}</span>
              </div>
              <p className="text-white/80 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-white/70 text-sm underline">
                read more →
              </Link>
            </div>
          ))}
        </section>
      </BlogLayout>
    )
  } catch (error) {
    console.error("Error in blog page:", error)
    return (
      <BlogLayout backLink="/" backText="← back">
        <h1 className="text-xl font-medium mb-6">writing</h1>
        <p>There was an error loading the blog posts. Please try again later.</p>
      </BlogLayout>
    )
  }
}

