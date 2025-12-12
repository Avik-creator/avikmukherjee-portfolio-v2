import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  title: string;
  slug: string;
  date: string;
}

export default function BlogItem({ title, slug, date }: Props) {
  return (
    <div className="py-2 text-gray-700 dark:text-neutral-300">
      <Link
        href={`/blog/${slug}`}
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
        <h3 className="grow font-medium text-gray-800 dark:text-neutral-200 underline decoration-gray-400 dark:decoration-neutral-400/50 underline-offset-[3px] transition-all duration-300 group-hover:underline-offset-[5px] group-hover:decoration-gray-600 dark:group-hover:decoration-neutral-300">
          {title}
        </h3>

        <span
          className={
            'ml-1 flex items-center gap-1 whitespace-nowrap transition-colors text-gray-600 dark:text-neutral-400'
          }>
          <span>
            {date &&
              new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
          </span>
        </span>
      </Link>
    </div>
  );
}