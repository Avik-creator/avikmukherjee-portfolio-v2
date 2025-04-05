import Link from "next/link"
import BlogPostPreview from "./blog-preview"

interface BlogPost {
  title: string
  date: string
  slug: string
}

interface WritingProps {
  intro: string
  posts: BlogPost[]
}

export default function Writing({ intro, posts }: WritingProps) {
  return (
    <section className="mb-12">
      <h2 className="text-sm mb-4">writing</h2>
      <p className="mb-6 leading-relaxed">{intro}</p>

      {posts.map((post, index) => (
        <BlogPostPreview key={index} title={post.title} date={post.date} slug={post.slug} />
      ))}

      <div className="mt-4">
        <Link href="/blog" className="text-white/70 text-sm underline">
          view all posts →
        </Link>
      </div>
    </section>
  )
}

