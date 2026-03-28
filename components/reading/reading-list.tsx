"use client";

import { useState, useMemo } from "react";
import { readingList } from "@/lib/data/reading";
import ReadingItemCard from "@/components/reading/reading-item";
import CornerMarkers from "@/components/CornerMarkers";
import { GenericDropdown } from "@/components/experiments/mdx-dropdown";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";

export default function ReadingList() {
  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // Get unique years sorted descending
  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(readingList.map(item => item.year)))
      .sort((a, b) => b - a);
    return uniqueYears;
  }, []);

  const { books, articles } = useMemo(() => {
    const query = search.trim().toLowerCase();
    let base = !query
      ? readingList
      : readingList.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            item.author.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            (item.tags ?? []).some((t) => t.toLowerCase().includes(query))
        );

    // Filter by year if selected
    if (selectedYear && selectedYear !== "All Years") {
      base = base.filter(item => item.year.toString() === selectedYear);
    }

    const sorted = [...base].sort((a, b) => {
      // Pin currently-reading items to the top
      if (a.status === "reading" && b.status !== "reading") return -1;
      if (b.status === "reading" && a.status !== "reading") return 1;
      // Everything else sorted by publish year ascending
      return a.year - b.year;
    });

    return {
      books: sorted.filter(item => item.type === "book"),
      articles: sorted.filter(item => item.type === "article")
    };
  }, [search, selectedYear]);

  // Year dropdown actions
  const yearActions = [
    {
      label: "All Years",
      onClick: () => setSelectedYear(null),
    },
    ...years.map((year) => ({
      label: year.toString(),
      onClick: () => setSelectedYear(year.toString()),
    })),
  ];

  return (
    <div className="space-y-6 relative">
      {/* ── Filters ────────────────────────────────────────────────────── */}
      <div className="flex flex-row gap-4 items-center relative z-10 overflow-visible justify-between">
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
              placeholder="search titles, authors, tags…"
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

      {/* ── List ───────────────────────────────────────────────────────── */}
      {books.length === 0 && articles.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-400 dark:text-neutral-600 text-[13px]">
            no items match your filters.
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
          {/* Books Section */}
          {books.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-sm font-medium text-gray-800 dark:text-neutral-200 uppercase tracking-wide">
                Books
              </h2>
              <ul className="flex flex-col">
                {books.map((item, index) => (
                  <li
                    key={item.id}
                    className="animate-[slideFadeUp_0.25s_ease-out]"
                    style={{
                      animationDelay: `${(index + 1) * 0.04 + 0.05}s`,
                      animationFillMode: "both",
                    }}
                  >
                    <ReadingItemCard item={item} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Articles Section */}
          {articles.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-sm font-medium text-gray-800 dark:text-neutral-200 uppercase tracking-wide">
                Articles
              </h2>
              <ul className="flex flex-col">
                {articles.map((item, index) => (
                  <li
                    key={item.id}
                    className="animate-[slideFadeUp_0.25s_ease-out]"
                    style={{
                      animationDelay: `${(books.length + index + 1) * 0.04 + 0.05}s`,
                      animationFillMode: "both",
                    }}
                  >
                    <ReadingItemCard item={item} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      {/* ── Footer count ───────────────────────────────────────────────── */}
      {(books.length > 0 || articles.length > 0) && (
        <p className="text-[11px] text-gray-400 dark:text-neutral-700 text-right tabular-nums">
          {books.length + articles.length} {books.length + articles.length === 1 ? "item" : "items"}
        </p>
      )}
    </div>
  );
}