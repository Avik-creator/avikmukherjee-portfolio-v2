import { cn } from "@/lib/utils";
import Link from "next/link";

interface ExperimentItemProps {
  slug: string;
  title: string;
  description: string;
  year: string;
}

export default function ExperimentItem({ slug, title, description, year }: ExperimentItemProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-1">
        <Link
          href={`/experiments/${slug}`}
          className={cn(
            'group flex items-center justify-between gap-1 w-full',
            'relative transition-all duration-300 ease-out',
            'hover:translate-x-[-2px]'
          )}
        >
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

          <h3 className="grow text-lg font-serif font-semibold text-gray-900 dark:text-neutral-100 underline decoration-gray-500 dark:decoration-neutral-400/50 underline-offset-4 transition-all duration-300 group-hover:underline-offset-[6px] group-hover:decoration-gray-700 dark:group-hover:decoration-neutral-300">
            {title}
          </h3>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-gray-500 dark:text-neutral-500 text-sm tabular-nums transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white">
              {year}
            </span>
          </div>
        </Link>
      </div>

      <p className="text-gray-600 dark:text-neutral-400 mb-2">{description}</p>
    </div>
  );
}

