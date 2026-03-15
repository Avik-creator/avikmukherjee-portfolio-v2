export type ReadingStatus = "reading" | "finished" | "want-to-read" | "planning-to-read"
export type ReadingType = "article" | "book";

export interface ReadingItem {
  id: string;
  title: string;
  author: string;
  year: number;
  type: ReadingType;
  status: ReadingStatus;
  url?: string;
  description: string;
  dateAdded: string;
  tags?: string[];
}

export const statusConfig: Record<
  ReadingStatus,
  { dotClass: string; label: string }
> = {
  finished: {
    dotClass: "bg-neutral-600 dark:bg-neutral-500",
    label: "finished",
  },
  reading: {
    dotClass: "bg-neutral-500 dark:bg-white animate-pulse",
    label: "reading",
  },
  "want-to-read": {
    dotClass: "bg-neutral-300 dark:bg-neutral-400",
    label: "want to read",
  },
  "planning-to-read": {
    dotClass: "bg-neutral-200 dark:bg-neutral-600",
    label: "planning to read",
  },
};

export const readingList: ReadingItem[] = [
  {
    id: "book-1",
    title: "Designing Data-Intensive Applications — Part 1",
    author: "Martin Kleppmann",
    year: 2017,
    type: "book",
    status: "finished",
    url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
    description:
      "Foundations of data systems — reliable, scalable, and maintainable applications. Part 1 covers data models, storage engines, encoding, and replication.",
    dateAdded: "2026-02-01",
    tags: ["systems", "databases", "engineering"],
  },
  {
    id: "book-2",
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    year: 2018,
    type: "book",
    status: "finished",
    url: "https://refactoringui.com/",
    description:
      "Practical UI design tactics explained from a developer's point-of-view. From the creators of Tailwind CSS — learn to make your ideas look awesome without relying on a designer.",
    dateAdded: "2026-02-20",
    tags: ["design", "ui", "css"],
  },
  {
    id: "book-3",
    title: "Clean Architecture",
    author: "Robert C. Martin",
    year: 2017,
    type: "book",
    status: "planning-to-read",
    url: "https://www.oreilly.com/library/view/clean-architecture/9780134494272/",
    description:
      "Robert C. Martin's seminal work on software architecture. Explores the principles of clean architecture, focusing on the separation of concerns and the importance of a well-designed system architecture.",
    dateAdded: "2026-03-22",
    tags: ["design-patterns", "oop", "engineering"],
  }
];
