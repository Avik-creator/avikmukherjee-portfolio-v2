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
        id: "book-2",
        title: "Clean Architecture",
        author: "Robert C. Martin",
        year: 2017,
        type: "book",
        status: "finished",
        url: "https://www.oreilly.com/library/view/clean-architecture/9780134494272/",
        description:
            "Robert C. Martin's seminal work on software architecture. Explores the principles of clean architecture, focusing on the separation of concerns and the importance of a well-designed system architecture.",
        dateAdded: "2026-03-22",
        tags: ["design-patterns", "oop", "engineering"],
    },
    {
        id: "book-3",
        title: "Database Design Book",
        author: "Alexey Makhotkin",
        year: 2025,
        type: "book",
        status: "finished",
        url: "https://databasedesignbook.com",
        description: "A practical guide to designing clean, scalable databases using solid data modeling fundamentals.",
        dateAdded: "2026-03-30",
        tags: ["databases", "sql", "engineering"],
    },
    {
        id: "book-4",
        title: "Designing Data-Intensive Applications, 2nd Edition",
        author: "Martin Kleppmann",
        year: 2026,
        type: "book",
        status: "reading",
        url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781098119058/",
        description: "An updated edition of the classic book on data systems, covering the latest developments in databases, distributed systems, and data processing. It provides a comprehensive overview of the design principles and trade-offs involved in building data-intensive applications.",
        dateAdded: "2026-03-30",
        tags: ["databases", "sql", "engineering", "distributed-systems"],
    },
 {
        id: "book-5",
        title: "Database Internals: A Deep Dive into How Distributed Data Systems Work",
        author: "Alex Petrov",
        year: 2019,
        type: "book",
        status: "planning-to-read",
        url: "https://www.oreilly.com/library/view/database-internals/9781492040330",
        description: "An in-depth exploration of the inner workings of distributed data systems, covering topics such as storage engines, replication, sharding, and consistency models. It provides insights into the design and implementation of modern databases and distributed systems.",
        dateAdded: "2026-03-30",
        tags: ["databases", "sql", "engineering", "distributed-systems"],
    },


    {
        id: "article-1",
        title: "In-Built App Notifications in Avenue Ticketing",
        author: "Ayush Chugh",
        year: 2026,
        type: "article",
        status: "finished",
        url: "https://x.com/aayushchugh/status/2033122128938377251?s=20",
        description:
            "It covers a deep dive into the implementation of in-built app notifications in Avenue Ticketing. Will try to do a POC for this feature.",
        dateAdded: "2026-03-22",
        tags: ["engineering", "realtime", "push-notifications"],
    },
    {
        id: "article-2",
        title: "Prompt Caching",
        author: "Sam Rose",
        year: 2026,
        type: "article",
        status: "finished",
        url: "https://ngrok.com/blog/prompt-caching",
        description:
            "How does prompt caching work?",
        dateAdded: "2026-03-22",
        tags: ["LLM", "caching", "engineering"],
    },
];
