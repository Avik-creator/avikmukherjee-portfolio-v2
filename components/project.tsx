interface ProjectProps {
    title: string
    year: string
    description: string
    demoUrl?: string
    githubUrl?: string
  }
  
  export default function Project({ title, year, description, demoUrl, githubUrl }: ProjectProps) {
    return (
      <div className="mb-8">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium">{title}</h3>
          <span className="text-white/70 text-sm">{year}</span>
        </div>
        <p className="leading-relaxed mb-2">{description}</p>
        {(demoUrl || githubUrl) && (
          <div className="flex space-x-4">
            {demoUrl && (
              <a href={demoUrl} className="text-white/70 text-sm underline hover:text-white">
                demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} className="text-white/70 text-sm underline hover:text-white">
                github
              </a>
            )}
          </div>
        )}
      </div>
    )
  }
  
  