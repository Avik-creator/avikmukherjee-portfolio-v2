'use client';

import BlogItem from '@/components/blog/blog-item';
import CornerMarkers from '@/components/CornerMarkers';
import { GenericDropdown } from '@/components/experiments/mdx-dropdown';
import { cn } from '@/lib/utils';
import { useState, useMemo, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface Post {
  slug: string;
  title: string;
  date: string;
  _index?: number;
}

interface GroupedPosts {
  [year: string]: Post[];
}

interface Props {
  groupedPosts: GroupedPosts;
  sortedYears: string[];
}

export default function BlogListClient({ groupedPosts, sortedYears }: Props) {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  // Filter posts based on search
  const filteredGroupedPosts = useMemo(() => {
    if (!search.trim()) {
      return groupedPosts;
    }

    const query = search.trim().toLowerCase();
    const filtered: GroupedPosts = {};

    Object.entries(groupedPosts).forEach(([year, posts]) => {
      const filtered_posts = posts.filter(post =>
        post.title.toLowerCase().includes(query)
      );
      if (filtered_posts.length > 0) {
        filtered[year] = filtered_posts;
      }
    });

    return filtered;
  }, [search, groupedPosts]);

  // Get available years after filtering
  const availableYears = Object.keys(filteredGroupedPosts).sort((a, b) => parseInt(b) - parseInt(a));

  // Reset selected year if it's no longer available
  useEffect(() => {
    if (selectedYear && !availableYears.includes(selectedYear)) {
      setSelectedYear(null);
    }
  }, [availableYears, selectedYear]);

  // Determine which years to display
  const yearsToDisplay = selectedYear && availableYears.includes(selectedYear) 
    ? [selectedYear] 
    : availableYears;

  // Year dropdown actions
  const yearActions = [
    {
      label: "All Years",
      onClick: () => setSelectedYear(null),
    },
    ...availableYears.map((year) => ({
      label: year,
      onClick: () => setSelectedYear(year),
    })),
  ];

  return (
    <div className="m-auto flex flex-col gap-8 relative">
      {/* ── Filters ────────────────────────────────────────────────────── */}
      <div className="flex flex-row gap-4 items-center animate-[slideFadeUp_0.25s_ease-out] relative z-10 overflow-visible justify-between" style={{ animationDelay: '0.05s', animationFillMode: 'both' }}>
        {/* Search Input */}
        <div className="group relative flex-1 max-w-lg overflow-visible">
          <CornerMarkers variant="static" />
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-neutral-500 group-hover:text-gray-600 dark:group-hover:text-neutral-300 transition-colors duration-300"
              width={13}
              height={13}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search posts…"
              className={cn(
                "w-full pl-7 pr-8 py-2 text-[12px]",
                "bg-transparent",
                "text-gray-800 dark:text-neutral-200",
                "placeholder:text-gray-400 dark:placeholder:text-neutral-600",
                "rounded-sm outline-none",
                "transition-colors duration-300"
              )}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-300 transition-colors"
              >
                <X width={12} height={12} />
              </button>
            )}
          </div>
        </div>

        {/* Year Dropdown */}
        <div className="flex-shrink-0">
          <GenericDropdown
            title={selectedYear || "Year"}
            actions={yearActions}
            className="px-0"
          />
        </div>
      </div>

      {/* ── Posts ──────────────────────────────────────────────────────── */}
      {yearsToDisplay.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-400 dark:text-neutral-600 text-[13px]">
            no posts match your filters.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-[12px] text-gray-500 dark:text-neutral-500 underline underline-offset-4 hover:text-gray-700 dark:hover:text-neutral-300 transition-colors"
              >
                clear search
              </button>
            )}
            {selectedYear && (
              <>
                {search && <span className="text-gray-400 dark:text-neutral-600">•</span>}
                <button
                  onClick={() => setSelectedYear(null)}
                  className="text-[12px] text-gray-500 dark:text-neutral-500 underline underline-offset-4 hover:text-gray-700 dark:hover:text-neutral-300 transition-colors"
                >
                  clear year filter
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Grouped Posts */}
          {yearsToDisplay.map((year, yearIdx) => (
            <div
              key={year}
              className="animate-[slideFadeUp_0.6s_ease-out]"
              style={{ animationDelay: `${0.2 + yearIdx * 0.1}s`, animationFillMode: 'both' }}
            >
              <h2
                id={`year-${year}`}
                className="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-4 scroll-mt-20"
              >
                {year}
              </h2>
              <ul className="flex flex-col gap-1">
                {filteredGroupedPosts[year]?.map((post) => (
                  <li
                    key={post.slug}
                    className="animate-[slideFadeUp_0.6s_ease-out]"
                    style={{ animationDelay: `${0.3 + (post._index || 0) * 0.05}s`, animationFillMode: 'both' }}
                  >
                    <BlogItem
                      title={post.title}
                      date={post.date}
                      slug={post.slug}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
