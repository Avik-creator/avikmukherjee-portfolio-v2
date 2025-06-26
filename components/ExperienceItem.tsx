import Anchor from "./Anchor"

interface ExperienceItemProps {
  title: string
  year: string
  description: string[]
  companySite: string
}

export default function ExperienceItem({ title, year, description, companySite }: ExperienceItemProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-medium text-neutral-100">{title}</h3>
        <span className="text-neutral-500 text-sm">{year}</span>
      </div>
      
      <div className="text-neutral-400 mb-2 space-y-1">
        {description.map((desc, index) => (
          <p key={index} className="text-sm">• {desc}</p>
        ))}
      </div>

      <div>
        <Anchor
          href={companySite}
          target="_blank"
          rel="noopener noreferrer"
        >
          company site
        </Anchor>
      </div>
    </div>
  )
} 