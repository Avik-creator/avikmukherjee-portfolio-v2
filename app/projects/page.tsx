import BackNavigation from "@/components/back-navigation";
import ProjectItem from "@/components/ProjectItem";
import { projects } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "See my Projects.",
    openGraph: {
      title: "Projects | Avik",
      description: "Projects of Avik Mukherjee.",
      url: "https://www.avikmukherjee.me/projects",
      images: ["https://www.avikmukherjee.me/og-image.png"],
      siteName: "Avik Mukherjee",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: "Projects | Avik",
      card: "summary_large_image",
      images: ["https://www.avikmukherjee.me/og-image.png"],
      description: "Projects of Avik Mukherjee.",
    },
  };

export default function Page() {
    return(
        <main className="mb-32 text-gray-700 dark:text-neutral-400">
            <BackNavigation href="/">back</BackNavigation>
            <h1 className="text-2xl font-bold mb-4 mt-4 text-gray-900 dark:text-neutral-100">Projects</h1>
            {projects.map((project, index) => (
                <ProjectItem
                    key={index}
                    title={project.title}
                    description={project.description}
                    demoUrl={project.demoUrl}
                    githubUrl={project.githubUrl}
                />
            ))}
        </main>
    )
}