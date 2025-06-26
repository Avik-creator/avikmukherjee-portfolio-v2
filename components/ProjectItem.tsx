import Anchor from "./Anchor"

interface ProjectItemProps {
  title: string
  year: string
  description: string
  demoUrl?: string
  githubUrl?: string
}

export default function ProjectItem({ title, year, description, demoUrl, githubUrl }: ProjectItemProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-medium text-neutral-100">{title}</h3>
        <span className="text-neutral-500 text-sm">{year}</span>
      </div>
      
      <p className="text-neutral-400 mb-2">{description}</p>

      {(demoUrl || githubUrl) && (
        <div className="flex space-x-4">
          {demoUrl && (
            <Anchor href={demoUrl} target="_blank">
              demo
            </Anchor>
          )}
          {githubUrl && (
            <Anchor href={githubUrl} target="_blank">
              github
            </Anchor>
          )}
        </div>
      )}
    </div>
  )
} 