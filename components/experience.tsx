interface ExperienceProps {
    title: string
    year: string
    description: string
    companySite?: string
  }
  
  export default function Experience({ title, year, description, companySite }: ExperienceProps) {
    return (
      <div className="mb-8">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium">{title}</h3>
          <span className="text-white/70 text-sm">{year}</span>
        </div>
  
        <p className="leading-relaxed mb-2">{description}</p>
  
        {companySite && (
          <div>
            <a
              href={companySite}
              className="text-white/70 text-sm underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              company site
            </a>
          </div>
        )}
      </div>
    )
  }
  