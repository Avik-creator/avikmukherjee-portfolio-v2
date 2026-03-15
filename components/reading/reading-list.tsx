"use client";

import { useState, useMemo } from "react";
import { readingList } from "@/lib/data/reading";
import ReadingItemCard from "@/components/reading/reading-item";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";

export default function ReadingList() {
  const [search, setSearch] = useState("");

  const { books, articles } = useMemo(() => {
    const query = search.trim().toLowerCase();
    const base = !query
      ? readingList
      : readingList.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            item.author.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            (item.tags ?? []).some((t) => t.toLowerCase().includes(query))
        );

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
  }, [search]);

  return (
    <div className="space-y-6">
      {/* ── Search ─────────────────────────────────────────────────────── */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-neutral-500"
          width={13}
          height={13}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search titles, authors, tags…"
          className={cn(
            "w-full pl-8 pr-9 py-2 text-[13px]",
            "bg-gray-50 dark:bg-neutral-900",
            "border border-gray-200 dark:border-neutral-800",
            "text-gray-800 dark:text-neutral-200",
            "placeholder:text-gray-400 dark:placeholder:text-neutral-600",
            "rounded-sm outline-none",
            "focus:border-gray-400 dark:focus:border-neutral-600",
            "transition-colors duration-200"
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

      {/* ── List ───────────────────────────────────────────────────────── */}
      {books.length === 0 && articles.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-400 dark:text-neutral-600 text-[13px]">
            no items match your search.
          </p>
          <button
            onClick={() => setSearch("")}
            className="mt-2 text-[12px] text-gray-500 dark:text-neutral-500 underline underline-offset-4 hover:text-gray-700 dark:hover:text-neutral-300 transition-colors"
          >
            clear search
          </button>
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