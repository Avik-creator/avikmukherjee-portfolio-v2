import BackNavigation from "@/components/back-navigation";
import ExperienceItem from "@/components/ExperienceItem";
import { Experience } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "See my Experience.",
    openGraph: {
      title: "Experience | Avik",
      description: "Experience of Avik Mukherjee.",
      url: "https://www.avikmukherjee.me/experience",
      images: ["https://www.avikmukherjee.me/og-image.jpg"],
      siteName: "Avik Mukherjee",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: "Projects | Avik",
      card: "summary_large_image",
      images: ["https://www.avikmukherjee.me/og-image.jpg"],
      description: "Experiences of Avik Mukherjee.",
    },
  };

export default function Page() {
    const allExperiences = Experience;
    return(
        <main className="mb-32 text-gray-700 dark:text-neutral-400">
            <BackNavigation href="/">back</BackNavigation>
            <h1 className="text-2xl font-bold mb-4 mt-4 text-gray-900 dark:text-neutral-100">Experience</h1>
            {allExperiences.map((experience, index) => (
                <ExperienceItem
                    key={index}
                    title={experience.title}
                    company={experience.company}
                    year={experience.year}
                    description={experience.description}
                    companySite={experience.companySite}
                />
            ))}
        </main>
    )
}