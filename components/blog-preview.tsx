import Link from "next/link"

interface BlogPostPreviewProps {
  title: string
  date: string
  slug: string
}

export default function BlogPostPreview({ title, date, slug }: BlogPostPreviewProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <Link href={`/blog/${slug}`} className="underline">
          {title}
        </Link>
        <span className="text-white/70 text-sm">{date}</span>
      </div>
    </div>
  )
}

