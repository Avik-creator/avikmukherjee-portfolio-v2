import Link from "next/link"

interface AboutProps {
  paragraphs: string[]
  href?: string
}

export default function About({ paragraphs, href }: AboutProps) {
  return (
    <section className="mb-12">
      <h2 className="text-sm mb-4">me</h2>
      {paragraphs.map((paragraph, index) => {
        const isLast = index === paragraphs.length - 1
        return (
          <p key={index} className={`leading-relaxed ${!isLast ? "mb-6" : ""}`}>
            {isLast && href ? (
              <>
                {paragraph.split("Resume")[0]}
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Resume
                </Link>
                {paragraph.split("Resume")[1]}
              </>
            ) : (
              paragraph
            )}
          </p>
        )
      })}
    </section>
  )
}
