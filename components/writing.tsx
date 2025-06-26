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
    <section className="mt-12">
      <Link href="/blog">
        <h2 className="text-neutral-100">writing</h2>
      </Link>
      <p className="mt-2 text-neutral-400">{intro}</p>
      
      <div className="py-4">
        {posts.map((post, index) => (
          <BlogPostPreview key={index} title={post.title} date={post.date} slug={post.slug} />
        ))}
      </div>
    </section>
  )
}

