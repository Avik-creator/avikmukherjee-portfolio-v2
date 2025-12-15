import { getExampleUsage } from "./registry-examples";

interface ExperimentData {
  component: string;
  title: string;
  description: string;
}

export function generatePageContent(experiment: ExperimentData): string {
  return `import ${experiment.component} from "@/components/${
    experiment.component
  }";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-950 dark:to-neutral-900 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-semibold text-gray-900 dark:text-neutral-100 mb-3">
            ${experiment.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-neutral-400">
            ${experiment.description}
          </p>
        </div>
        
        <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-lg p-12 flex items-center justify-center min-h-[400px]">
          ${getExampleUsage(experiment.component)}
        </div>
      </div>
    </main>
  );
}`;
}

export function generateLayoutContent(experiment: ExperimentData): string {
  const escapedTitle = experiment.title.replace(/"/g, '\\"');
  const escapedDescription = experiment.description.replace(/"/g, '\\"');

  return `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${escapedTitle}",
  description: "${escapedDescription}",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-950 dark:to-neutral-900 text-gray-900 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}`;
}
