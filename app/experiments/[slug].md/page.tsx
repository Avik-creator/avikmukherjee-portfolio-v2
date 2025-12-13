import { notFound } from "next/navigation";
import { Metadata } from "next";
import BackNavigation from "@/components/back-navigation";
import { CustomMDX } from "@/components/mdx";
import { getExperimentBySlug, getAllExperimentSlugs } from "@/lib/experiments-data";
import { getExperimentMDXBySlug } from "@/lib/experiments-mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllExperimentSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experiment = getExperimentBySlug(slug);

  if (!experiment) {
    return { title: "Experiment Not Found" };
  }

  const experimentUrl = `https://www.avikmukherjee.me/experiments/${slug}.md`;
  const featuresText = experiment.features?.join(", ") || "";
  const dependenciesText = experiment.dependencies?.join(", ") || "";

  return {
    title: `${experiment.title} (MDX) — UI Experiment by Avik Mukherjee`,
    description: `${experiment.description}${featuresText ? ` Features: ${featuresText}.` : ""}${dependenciesText ? ` Built with: ${dependenciesText}.` : ""}`,
    keywords: [
      experiment.title,
      "UI experiment",
      "React component",
      "Next.js",
      "TypeScript",
      ...(experiment.dependencies || []),
      "Avik Mukherjee",
      "portfolio",
      "web development",
      "frontend",
      "MDX",
    ],
    openGraph: {
      title: `${experiment.title} (MDX) — UI Experiment by Avik Mukherjee`,
      description: experiment.description,
      url: experimentUrl,
      images: ["/og-image.webp"],
      siteName: "Avik Mukherjee",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      title: `${experiment.title} (MDX) — UI Experiment by Avik Mukherjee`,
      card: "summary_large_image",
      images: ["/og-image.webp"],
      description: experiment.description,
      creator: "@avikm744",
      site: "@avikm744",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: experimentUrl,
    },
  };
}

export default async function ExperimentMDXPage({ params }: PageProps) {
  const { slug } = await params;
  const experiment = getExperimentBySlug(slug);

  if (!experiment) {
    notFound();
  }

  // Read MDX content from actual file
  const experimentMDX = await getExperimentMDXBySlug(slug);

  if (!experimentMDX) {
    notFound();
  }

  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <BackNavigation href="/experiments">back</BackNavigation>

      <header className="mt-6 mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-gray-900 dark:text-neutral-100 text-xl font-medium">
            {experiment.title}
          </h1>
          <span className="text-sm text-gray-500 dark:text-neutral-500 tabular-nums">
            {experiment.year}
          </span>
        </div>
        <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
          {experiment.description}
        </p>
      </header>

      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <CustomMDX source={experimentMDX.content} />
      </article>
    </main>
  );
}

