import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/mdx"

import BlogLayout from "@/components/blog-layout"
import "./prism-theme.css"

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string[]}>;
}) {
  const {slug} = await params;
  try {
    const slugPath = slug.join("/")
    const post = await getPostBySlug(slugPath)

    if (!post) {
      return {
        title: "Post Not Found",
      }
    }

    return {
      title: `${post.title} | Your Name`,
      description: post.excerpt,
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Error",
    }
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()

    return posts.map((post) => ({
      slug: post.slug.split("/"),
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  try {
    const slugPath = params.slug.join("/")
    const post = await getPostBySlug(slugPath)

    if (!post) {
      notFound()
    }

    return (
      <BlogLayout backLink="/blog" backText="← back to all posts">
        <header className="mb-8">
          <h1 className="text-xl font-medium mb-2">{post.title}</h1>
          <p className="text-white/70">{post.date}</p>
        </header>

        <article className="prose prose-invert prose-sm max-w-none blog-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </BlogLayout>
    )
  } catch (error) {
    console.error("Error in blog post page:", error)
    return (
      <BlogLayout backLink="/blog" backText="← back to all posts">
        <h1 className="text-xl font-medium mb-2">Error</h1>
        <p>There was an error loading this blog post. Please try again later.</p>
      </BlogLayout>
    )
  }
}
