import Link from "next/link"
import Experience from "./experience"

interface ExperienceData {
  title: string
  year: string
  description: string[]
  companySite: string
}

interface ExperiencesProps {
  intro: string
  experiences: ExperienceData[]
  showViewAllExperiences?: boolean
}

export default function Experiences({ intro, experiences, showViewAllExperiences = true }: ExperiencesProps) {
  return (
    <section className="mb-12">
      <h2 className="text-sm mb-4">experience</h2>
      <p className="mb-6 leading-relaxed">{intro}</p>

      {experiences.map((project, index) => (
        <Experience
          key={index}
          title={project.title}
          year={project.year}
          description={project.description.join(" ")} 
          companySite={project.companySite}
        />
      ))}

      {showViewAllExperiences && (
        <div className="mt-4">
          <Link href="/experience" className="text-white/70 text-sm underline">
            view all Experiences →
          </Link>
        </div>
      )}
    </section>
  )
}
