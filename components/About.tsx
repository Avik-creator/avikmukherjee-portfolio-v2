interface AboutProps {
    paragraphs: string[]
  }
  
  export default function About({ paragraphs }: AboutProps) {
    return (
      <section className="mb-12">
        <h2 className="text-sm mb-4">me</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={`leading-relaxed ${index < paragraphs.length - 1 ? "mb-6" : ""}`}>
            {paragraph}
          </p>
        ))}
      </section>
    )
  }
  
  