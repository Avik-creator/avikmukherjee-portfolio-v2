import Link from "next/link"

interface BioProps {
  intro: string
  projectDescription: string
  projectName: string
  projectUrl: string
}

export default function Bio({ intro, projectDescription, projectName, projectUrl }: BioProps) {
  return (
    <section className="mb-12">
      <p className="mb-6 leading-relaxed">{intro}</p>
      <p className="leading-relaxed">
        Built{" "}
        <Link href={projectUrl} className="underline">
          {projectName}
        </Link>{" "}
        - {projectDescription}
      </p>
    </section>
  )
}

