import { ArrowRightIcon } from "lucide-react"
import Anchor from "./Anchor"

interface HeaderProps {
  name: string
  location: string
  resumeUrl?: string
}

export default function Header({ name, location, resumeUrl }: HeaderProps) {
  return (
    <header className="mb-6">
      <div className="flex items-center justify-between">
        <h1 className='text-xl font-serif font-medium text-stone-100 [font-feature-setting:"kern","calt","case"]'>
          {name}
        </h1>
        {resumeUrl && (
          
            <Anchor href={resumeUrl} target="_blank" className="text-stone-100 font-serif flex items-center gap-1">
              resume 
              <ArrowRightIcon className="w-4 h-4 text-stone-100" />
            </Anchor>
            
         
        )}
      </div>
      <p className="text-neutral-500 mt-1">{location}</p>
    </header>
  )
} 