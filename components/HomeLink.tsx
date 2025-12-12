import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HomeLinkProps {
  href: string;
  label: string;
  animationDelay?: string;
}

export default function HomeLink({ href, label, animationDelay = '0.1s' }: HomeLinkProps) {
  return (
    <section
      className="mt-12 animate-[slideFadeUp_0.6s_ease-out]"
      style={{ animationDelay, animationFillMode: 'both' }}
    >
      <Link
        href={href}
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
          {label}
        </h2>
      </Link>
    </section>
  );
}
