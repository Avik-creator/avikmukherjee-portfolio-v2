'use client';

import BlogItem from '@/components/blog/blog-item';
import CornerMarkers from '@/components/CornerMarkers';
import { useState } from 'react';

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

  // Handle year navigation with animation
  const handleYearClick = (year: string) => {
    setSelectedYear(selectedYear === year ? null : year);
    setTimeout(() => {
      const element = document.getElementById(`year-${year}`);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  // Determine which years to display
  const yearsToDisplay = selectedYear ? [selectedYear] : sortedYears;

  return (
    <div className="m-auto flex flex-col gap-8">
      {/* Year Navigation */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-gray-200 dark:border-neutral-800 animate-[slideFadeUp_0.25s_ease-out]" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
        {sortedYears.map((year, idx) => (
          <div
            key={year}
            className="group relative"
            style={{
              animation: 'slideFadeUp 0.25s ease-out both',
              animationDelay: `${0.15 + idx * 0.05}s`,
            }}
          >
            <button
              onClick={() => handleYearClick(year)}
              className={`px-3 py-1.5 text-sm rounded-none transition-all duration-200
                cursor-pointer ${
                  selectedYear === year
                    ? 'text-gray-900 dark:text-neutral-100 font-medium'
                    : 'text-gray-600 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-neutral-200'
                } active:scale-95`}
            >
              {year}
            </button>
            <CornerMarkers />
          </div>
        ))}
      </div>

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
            {groupedPosts[year]?.map((post) => (
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
    </div>
  );
}
