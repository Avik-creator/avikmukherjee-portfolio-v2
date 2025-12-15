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
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-50">
      ${getExampleUsage(experiment.component)}
    </div>
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}`;
}
