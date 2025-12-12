import Anchor from '@/components/Anchor';
import Header from '@/components/Header';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <Header
        name="Avik Mukherjee"
        location="Hyderabad, India."
      />

      <section className="mt-6 animate-[slideFadeUp_0.4s_ease-out]">
        <p className="text-gray-600 dark:text-stone-400 leading-relaxed">
          Full-stack developer currently working at{' '}
          <Anchor href="https://www.superalign.ai" target="_blank" className="transition-all duration-200 hover:opacity-80">SuperAlign AI</Anchor>.
          I build scalable web applications with Next.js, React, and Node.js that help businesses grow and solve real problems.
        </p>
      </section>

      <section className="mt-12 animate-[slideFadeUp_0.5s_ease-out]">
        <Link
          href={`/projects`}
          className={cn(
            'group flex items-center justify-between gap-1',
            'relative transition-all duration-300 ease-out',
            'hover:translate-x-[-2px]'
          )}>
          {/* Top left */}
          <div
            className="absolute left-[-6.25px] top-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 w-[10px] h-[10px]">
            <div className="absolute left-0 top-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-top group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute left-0 top-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-left group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          {/* Top right */}
          <div
            className="absolute right-[-6.25px] top-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 w-[10px] h-[10px]">
            <div className="absolute right-0 top-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-top group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute right-0 top-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-right group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          {/* Bottom left */}
          <div
            className="absolute left-[-6.25px] bottom-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-125 w-[10px] h-[10px]">
            <div className="absolute left-0 bottom-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-bottom group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute left-0 bottom-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-left group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          {/* Bottom right */}
          <div
            className="absolute bottom-[-6.25px] right-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 w-[10px] h-[10px]">
            <div className="absolute right-0 bottom-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-bottom group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute right-0 bottom-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-right group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          <h2 className="grow text-lg font-serif font-semibold text-gray-900 dark:text-neutral-100 underline decoration-gray-500 dark:decoration-neutral-400/50 underline-offset-4 transition-all duration-300 group-hover:underline-offset-[6px] group-hover:decoration-gray-700 dark:group-hover:decoration-neutral-300">
            work
          </h2>
        </Link>
      </section>

      <section className="mt-12 animate-[slideFadeUp_0.6s_ease-out]">
        <Link
          href={`/experience`}
          className={cn(
            'group flex items-center justify-between gap-1',
            'relative transition-all duration-300 ease-out',
            'hover:translate-x-[-2px]'
          )}>
          {/* Top left */}
          <div
            className="absolute left-[-6.25px] top-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 w-[10px] h-[10px]">
            <div className="absolute left-0 top-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-top group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute left-0 top-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-left group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          {/* Top right */}
          <div
            className="absolute right-[-6.25px] top-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 w-[10px] h-[10px]">
            <div className="absolute right-0 top-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-top group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute right-0 top-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-right group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          {/* Bottom left */}
          <div
            className="absolute left-[-6.25px] bottom-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-125 w-[10px] h-[10px]">
            <div className="absolute left-0 bottom-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-bottom group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute left-0 bottom-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-left group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          {/* Bottom right */}
          <div
            className="absolute bottom-[-6.25px] right-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 w-[10px] h-[10px]">
            <div className="absolute right-0 bottom-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-bottom group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute right-0 bottom-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-right group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          <h2 className="grow text-lg font-serif font-semibold text-gray-900 dark:text-neutral-100 underline decoration-gray-500 dark:decoration-neutral-400/50 underline-offset-4 transition-all duration-300 group-hover:underline-offset-[6px] group-hover:decoration-gray-700 dark:group-hover:decoration-neutral-300">
            experience
          </h2>
        </Link>
      </section>

      <section className="mt-12 animate-[slideFadeUp_0.7s_ease-out]">
        <Link
          href={`/blog`}
          className={cn(
            'group flex items-center justify-between gap-1',
            'relative transition-all duration-300 ease-out',
            'hover:translate-x-[-2px]'
          )}>
          {/* Top left */}
          <div
            className="absolute left-[-6.25px] top-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 w-[10px] h-[10px]">
            <div className="absolute left-0 top-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-top group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute left-0 top-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-left group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          {/* Top right */}
          <div
            className="absolute right-[-6.25px] top-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 w-[10px] h-[10px]">
            <div className="absolute right-0 top-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-top group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute right-0 top-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-right group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          {/* Bottom left */}
          <div
            className="absolute left-[-6.25px] bottom-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-125 w-[10px] h-[10px]">
            <div className="absolute left-0 bottom-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-bottom group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute left-0 bottom-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-left group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          {/* Bottom right */}
          <div
            className="absolute bottom-[-6.25px] right-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 w-[10px] h-[10px]">
            <div className="absolute right-0 bottom-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-bottom group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute right-0 bottom-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-right group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          <h2 className="grow text-lg font-serif font-semibold text-gray-900 dark:text-neutral-100 underline decoration-gray-500 dark:decoration-neutral-400/50 underline-offset-4 transition-all duration-300 group-hover:underline-offset-[6px] group-hover:decoration-gray-700 dark:group-hover:decoration-neutral-300">
            writing
          </h2>
        </Link>
      </section>

      <section className="mt-12 animate-[slideFadeUp_0.8s_ease-out]">
        <Link
          href={`/about`}
          className={cn(
            'group flex items-center justify-between gap-1',
            'relative transition-all duration-300 ease-out',
            'hover:translate-x-[-2px]'
          )}>
          {/* Top left */}
          <div
            className="absolute left-[-6.25px] top-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 w-[10px] h-[10px]">
            <div className="absolute left-0 top-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-top group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute left-0 top-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-left group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          {/* Top right */}
          <div
            className="absolute right-[-6.25px] top-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 w-[10px] h-[10px]">
            <div className="absolute right-0 top-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-top group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute right-0 top-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-right group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          {/* Bottom left */}
          <div
            className="absolute left-[-6.25px] bottom-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-125 w-[10px] h-[10px]">
            <div className="absolute left-0 bottom-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-bottom group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute left-0 bottom-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-left group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          {/* Bottom right */}
          <div
            className="absolute bottom-[-6.25px] right-[-6.25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 w-[10px] h-[10px]">
            <div className="absolute right-0 bottom-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-y-100 scale-y-0 origin-bottom group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
            <div className="absolute right-0 bottom-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 transition-all duration-300 group-hover:scale-x-100 scale-x-0 origin-right group-hover:shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:group-hover:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          </div>
          <h2 className="grow text-lg font-serif font-semibold text-gray-900 dark:text-neutral-100 underline decoration-gray-500 dark:decoration-neutral-400/50 underline-offset-4 transition-all duration-300 group-hover:underline-offset-[6px] group-hover:decoration-gray-700 dark:group-hover:decoration-neutral-300">
            about
          </h2>
        </Link>
      </section>

      <section className="mt-12 animate-[slideFadeUp_0.9s_ease-out]">
        <h2 className="text-lg font-serif font-semibold text-gray-900 dark:text-neutral-100">reach</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="whitespace-nowrap text-gray-700 dark:text-neutral-400">
            <span>connect on </span>
            <Anchor href="https://x.com/avikm744" target="_blank" className="transition-all duration-200 hover:opacity-70 hover:scale-105 inline-block">
              {'𝕏'}
            </Anchor>
            <span className="mx-1 text-gray-400 dark:text-neutral-400/50 transition-opacity duration-200">·</span>
            <Anchor href="https://github.com/Avik-creator" target="_blank" className="transition-all duration-200 hover:opacity-70 hover:scale-105 inline-block">
              GitHub
            </Anchor>
            <span className="mx-1 text-gray-400 dark:text-neutral-400/50 transition-opacity duration-200">·</span>
            <Anchor href="https://www.linkedin.com/in/avik-mukherjee-8ab9911bb/" target="_blank" className="transition-all duration-200 hover:opacity-70 hover:scale-105 inline-block">
              LinkedIn
            </Anchor>
            <span className="mx-1 text-gray-400 dark:text-neutral-400/50 transition-opacity duration-200">·</span>
            <Anchor href="https://peerlist.io/avikmukherjee/" target="_blank" className="transition-all duration-200 hover:opacity-70 hover:scale-105 inline-block">
              Peerlist
            </Anchor>
          </span>
          <span className="text-gray-700 dark:text-neutral-400">
            — or send me an email at{" "}
            <Anchor href="mailto:avikm744@gmail.com" target="_blank" className="transition-all duration-200 hover:opacity-70 hover:underline underline-offset-2">
              avikm744@gmail.com
            </Anchor>
          </span>
        </div>
      </section>
    </main>
  );
}
