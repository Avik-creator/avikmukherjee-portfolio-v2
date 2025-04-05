import ProjectLayout from "@/components/projectLayout";
import Projects from "@/components/projects";
import { projects } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "See my Projects.",
    openGraph: {
      title: "Projects | Avik",
      description: "Projects of Avik Mukherjee.",
      url: "https://www.avikmukherjee.tech/projects",
      images: ["https://www.avikmukherjee.tech/og-image.jpg"],
      siteName: "Avik Mukherjee",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: "Projects | Avik",
      card: "summary_large_image",
      images: ["https://www.avikmukherjee.tech/og-image.jpg"],
      description: "Projects of Avik Mukherjee.",
    },
  };

export default function Page() {
    return(
        <ProjectLayout>
            <Projects
            intro="Interactive experiments and projects exploring the intersection of design and technology."
            projects={projects}
          />
        </ProjectLayout>
    )
}