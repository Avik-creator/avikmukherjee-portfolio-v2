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
    dateAdded: "2025-05-01",
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
    dateAdded: "2025-05-20",
    tags: ["design", "ui", "css"],
  },
  {
    id: "book-3",
    title: "Head First Design Patterns",
    author: "Eric Freeman & Elisabeth Robson",
    year: 2020,
    type: "book",
    status: "planning-to-read",
    url: "https://www.oreilly.com/library/view/head-first-design/9781492077992/",
    description:
      "Brain-friendly guide to design patterns using Java. Covers the Gang of Four patterns with visual, hands-on explanations and real-world scenarios.",
    dateAdded: "2025-05-22",
    tags: ["design-patterns", "oop", "engineering"],
  },
  {
    id: "book-4",
    title: "Designing Data-Intensive Applications — 2nd Edition",
    author: "Martin Kleppmann & Chris Riccomini",
    year: 2026,
    type: "book",
    status: "planning-to-read",
    url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781098119058/",
    description:
      "Updated edition integrating new technologies and emerging trends in distributed systems, cloud services, and modern data architecture.",
    dateAdded: "2025-05-22",
    tags: ["systems", "databases", "engineering"],
  },
];
