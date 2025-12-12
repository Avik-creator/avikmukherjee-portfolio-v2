"use client";

import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import CornerMarkers from "@/components/CornerMarkers";

interface OpenInV0ButtonProps {
  url: string;
  className?: string;
}

export function OpenInV0Button({ url, className }: OpenInV0ButtonProps) {
  return (
    <a
      href={`https://v0.app/chat/api/open?url=${encodeURIComponent(url)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open in v0"
      className={cn(
        'group flex items-center gap-2',
        'relative transition-all duration-300 ease-out',
        'hover:translate-x-[-2px]',
        'px-2 py-1',
        className
      )}
    >
      <CornerMarkers />
      <span className="text-lg font-serif font-semibold text-gray-900 dark:text-neutral-100 underline decoration-gray-500 dark:decoration-neutral-400/50 underline-offset-4 transition-all duration-300 group-hover:underline-offset-[6px] group-hover:decoration-gray-700 dark:group-hover:decoration-neutral-300 relative z-10">
        Open in
      </span>
      <Icons.v0 className="w-5 h-5 text-gray-900 dark:text-neutral-100 relative z-10" />
    </a>
  );
}
