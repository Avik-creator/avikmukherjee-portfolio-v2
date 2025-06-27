import { cn } from "@/lib/utils"
import Link from "next/link"

interface ProjectItemProps {
  title: string
  description: string
  demoUrl?: string
  githubUrl?: string
}

export default function ProjectItem({ title, description, demoUrl, githubUrl }: ProjectItemProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-1">
        <div
          className={cn(
            'group flex items-center justify-between gap-4 w-full',
            'hover:outline-[0.5px] outline-offset-[6px] hover:outline-gray-400/50 dark:hover:outline-neutral-600/50 hover:[&>h3]:text-gray-900 dark:hover:[&>h3]:text-white hover:[&>div>span]:text-gray-900 dark:hover:[&>div>span]:text-white border-0',
            'relative'
          )}
        >
          {/* Top left */}
          <div
            className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block"
            style={{ '--cross-size': '10px' } as React.CSSProperties}>
            <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
            <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
          </div>
          {/* Bottom right */}
          <div
            className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block"
            style={{ '--cross-size': '10px' } as React.CSSProperties}>
            <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
            <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
          </div>
          
          <h3 className="grow font-medium text-gray-800 dark:text-neutral-200 underline decoration-gray-400 dark:decoration-neutral-400/50 underline-offset-[3px] transition-colors">
            <Link href={demoUrl || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">
              {title}
            </Link>
          </h3>

          <div className="flex items-center gap-2 flex-shrink-0">
            {githubUrl && (
              <span className="underline decoration-gray-400 dark:decoration-neutral-400/50 underline-offset-[3px] transition-colors text-gray-600 dark:text-neutral-500 text-sm">
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  github
                </Link>
              </span>
            )}
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-neutral-400 mb-2">{description}</p>
    </div>
  )
} 