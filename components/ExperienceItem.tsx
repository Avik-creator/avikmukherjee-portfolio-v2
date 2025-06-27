import { cn } from "@/lib/utils"
import Link from "next/link"

interface ExperienceItemProps {
  title: string
  year: string
  company: string
  description: string[]
  companySite: string
}

export default function ExperienceItem({ title, year, company, description, companySite }: ExperienceItemProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-1">
        <Link
          href={companySite}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group flex items-center gap-1',
            'hover:outline-[0.5px] outline-offset-[6px] hover:outline-neutral-600/50 border-0',
            'relative'
          )}
        >
          {/* Top left */}
          <div
            className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block"
            style={{ '--cross-size': '10px' } as React.CSSProperties}>
            <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
            <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
          </div>
          {/* Bottom right */}
          <div
            className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block"
            style={{ '--cross-size': '10px' } as React.CSSProperties}>
            <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
            <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
          </div>
          <h3 className="font-medium text-neutral-200 underline decoration-neutral-400/50 underline-offset-[3px] transition-colors group-hover:text-white">
            {title} @{company}
          </h3>
        </Link>
        <span className="text-neutral-500 text-sm">{year}</span>
      </div>
      
      <div className="text-neutral-400 mb-2 space-y-1">
        {description.map((desc, index) => (
          <p key={index} className="text-sm">• {desc}</p>
        ))}
      </div>
    </div>
  )
} 