import Link from "next/link"
import Project from "./project"

interface ProjectData {
  title: string
  year: string
  description: string
  demoUrl?: string
  githubUrl?: string
}

interface ProjectsProps {
  intro: string
  projects: ProjectData[]
  showViewAllProjects?: boolean
}

export default function Projects({ intro, projects, showViewAllProjects= true }: ProjectsProps) {

  return (
    <section className="mb-12">
      <h2 className="text-sm mb-4">work</h2>
      <p className="mb-6 leading-relaxed">{intro}</p>

      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          year={project.year}
          description={project.description}
          demoUrl={project.demoUrl}
          githubUrl={project.githubUrl}
        />
      ))}

{showViewAllProjects && <div className="mt-4">
        <Link href="/projects" className="text-white/70 text-sm underline">
          view all Projects →
        </Link>
      </div>}
    </section>
  )
}

