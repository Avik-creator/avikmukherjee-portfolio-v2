import Experiences from "@/components/experiences";
import ProjectLayout from "@/components/projectLayout";

import { Experience } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "See my Experience.",
    openGraph: {
      title: "Experience | Avik",
      description: "Experience of Avik Mukherjee.",
      url: "https://www.avikmukherjee.tech/experience",
      images: ["https://www.avikmukherjee.tech/og-image.jpg"],
      siteName: "Avik Mukherjee",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: "Projects | Avik",
      card: "summary_large_image",
      images: ["https://www.avikmukherjee.tech/og-image.jpg"],
      description: "Experiences of Avik Mukherjee.",
    },
  };

export default function Page() {
    return(
        <ProjectLayout>
            <Experiences
            intro="Here you can find all my experiences, internships and projects I have worked on."
            experiences={Experience}
            showViewAllExperiences={false} // Set to false to hide the "view all" link
          />
        </ProjectLayout>
    )
}