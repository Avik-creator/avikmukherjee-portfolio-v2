import { getExampleUsage } from "./registry-examples";

interface ExperimentData {
  component: string;
  title: string;
  description: string;
}

export function generatePageContent(experiment: ExperimentData): string {
  return `import ${experiment.component} from "@/components/${experiment.component
    }";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
      
      <div className="w-full max-w-4xl relative z-10">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold text-neutral-100 mb-3 tracking-tight">
            ${experiment.title}
          </h1>
          <p className="text-lg text-neutral-400">
            ${experiment.description}
          </p>
        </div>
        
        <div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/50 backdrop-blur-sm shadow-2xl shadow-black/20 p-12 flex items-center justify-center min-h-[400px]">
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
import "./globals.css";

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
    <html lang="en" className="dark">
      <body className="antialiased bg-neutral-950 text-neutral-100">
        {children}
      </body>
    </html>
  );
}`;
}

export function generateGlobalsCssContent(): string {
  return `@import "tailwindcss";

@theme {
  /* Colors - Dark Mode Palette */
  --color-background: oklch(0.145 0 0);
  --color-foreground: oklch(0.985 0 0);
  --color-card: oklch(0.145 0 0);
  --color-card-foreground: oklch(0.985 0 0);
  --color-popover: oklch(0.145 0 0);
  --color-popover-foreground: oklch(0.985 0 0);
  --color-primary: oklch(0.985 0 0);
  --color-primary-foreground: oklch(0.205 0 0);
  --color-secondary: oklch(0.269 0 0);
  --color-secondary-foreground: oklch(0.985 0 0);
  --color-muted: oklch(0.269 0 0);
  --color-muted-foreground: oklch(0.708 0 0);
  --color-accent: oklch(0.269 0 0);
  --color-accent-foreground: oklch(0.985 0 0);
  --color-destructive: oklch(0.396 0.141 25.723);
  --color-destructive-foreground: oklch(0.637 0.237 25.331);
  --color-border: oklch(0.269 0 0);
  --color-input: oklch(0.269 0 0);
  --color-ring: oklch(0.556 0 0);

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;

  /* Font Family */
  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;

  /* Animations */
  --animate-fade-in: fade-in 0.5s ease-out;
  --animate-slide-up: slide-up 0.5s ease-out;
  --animate-scale-in: scale-in 0.3s ease-out;

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scale-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
}

@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-border);
  }

  html {
    color-scheme: dark;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: oklch(0.4 0.1 260);
    color: white;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .text-pretty {
    text-wrap: pretty;
  }
}`;
}
