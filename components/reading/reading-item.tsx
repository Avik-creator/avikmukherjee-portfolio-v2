import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils/date-utils";
import { ReadingItem, statusConfig } from "@/lib/data/reading";
import CornerMarkers from "@/components/CornerMarkers";
import Link from "next/link";

interface ReadingItemCardProps {
  item: ReadingItem;
}

export default function ReadingItemCard({ item }: ReadingItemCardProps) {
  const status = statusConfig[item.status];

  const TitleWrapper = item.url
    ? ({ children }: { children: React.ReactNode }) => (
        <Link
          href={item.url!}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      )
    : ({ children }: { children: React.ReactNode }) => <span>{children}</span>;

  return (
    <div className="py-3 border-b border-gray-100 dark:border-neutral-800/60 last:border-0">
      <div
        className={cn(
          "group flex items-start gap-3",
          "relative transition-all duration-300 ease-out",
          item.url && "hover:-translate-x-0.5"
        )}
      >
        <CornerMarkers />

        {/* Status dot */}
        <div
          className={cn(
            "mt-[5px] w-2 h-2 rounded-full shrink-0",
            status.dotClass
          )}
        />

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline flex-wrap gap-x-1.5 gap-y-0.5">
            <TitleWrapper>
              <span
                className={cn(
                  "font-medium text-gray-800 dark:text-neutral-200",
                  "underline decoration-gray-400 dark:decoration-neutral-400/50 underline-offset-[3px]",
                  "transition-all duration-300",
                  "group-hover:underline-offset-[5px] group-hover:decoration-gray-600 dark:group-hover:decoration-neutral-300"
                )}
              >
                {item.title}
              </span>
            </TitleWrapper>

            {/* Type badge */}
            <span className="text-[10px] px-1.5 py-px rounded-sm border border-gray-200 dark:border-neutral-700 text-gray-400 dark:text-neutral-600 leading-none self-center">
              {item.type}
            </span>

            {/* Status badge */}
            <span className="flex items-center gap-1 text-[10px] px-1.5 py-px rounded-sm border border-gray-200 dark:border-neutral-700 text-gray-400 dark:text-neutral-600 leading-none self-center">
              <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", status.dotClass)} />
              {status.label}
            </span>

            <span className="text-gray-400 dark:text-neutral-600 select-none">
              ·
            </span>
            <span className="text-gray-500 dark:text-neutral-500 text-[12px] shrink-0">
              {item.author}
            </span>
            <span className="text-gray-400 dark:text-neutral-600 select-none">
              ·
            </span>
            <span className="text-gray-400 dark:text-neutral-600 text-[12px] tabular-nums shrink-0">
              {item.year}
            </span>
          </div>

          {item.description && (
            <p className="mt-0.5 text-gray-500 dark:text-neutral-500 text-[12px] leading-relaxed line-clamp-1">
              {item.description}
            </p>
          )}
        </div>

        {/* Date */}
        <span className="shrink-0 text-[11px] text-gray-400 dark:text-neutral-600 tabular-nums whitespace-nowrap pt-[3px]">
          {formatDate(item.dateAdded, { month: "short", year: "2-digit" })}
        </span>
      </div>
    </div>
  );
}