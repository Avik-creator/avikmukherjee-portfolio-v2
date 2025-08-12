"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <section className="mb-16 mt-12">
      <div className="relative">
        {!isPlaying ? (
          <article
            role="button"
            aria-label="Play video: Building Modern Web Applications"
            tabIndex={0}
            onClick={handlePlay}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handlePlay()
              }
            }}
            className="group cursor-pointer select-none border border-gray-800 bg-neutral-950 overflow-hidden transition-colors focus:outline-[0.5px] outline-offset-[6px] focus:outline-gray-400/50 dark:focus:outline-neutral-600/50"
          >
            {/* Hover corner crosses to match site */}
            <div
              className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block"
              style={{ '--cross-size': '10px' } as React.CSSProperties}
            >
              <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
              <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
            </div>
            <div
              className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block"
              style={{ '--cross-size': '10px' } as React.CSSProperties}
            >
              <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
              <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
            </div>

            {/* Thumbnail */}
            <div className="aspect-video bg-neutral-900 flex items-center justify-center">
              <img
                src="https://img.youtube.com/vi/BvAWNrlYMJ4/maxresdefault.jpg"
                alt="Building Modern Web Applications - thumbnail"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
                loading="lazy"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full p-4 bg-white/5 group-hover:bg-white/10 backdrop-blur-sm transition-colors border border-white/10">
                  <Play className="w-8 h-8 text-neutral-100 ml-1" />
                </div>
              </div>
            </div>
            
          </article>
        ) : (
          <div className="aspect-video border border-gray-800 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/BvAWNrlYMJ4?autoplay=1"
              title="Building Modern Web Applications"
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        )}
      </div>
    </section>
  )
}
