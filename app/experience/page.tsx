import BackNavigation from "@/components/back-navigation";
import ExperienceItem from "@/components/ExperienceItem";
import { Experience } from "@/lib/data";
import { Metadata } from "next";


export default function Page() {
  const allExperiences = Experience;
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <BackNavigation href="/">back</BackNavigation>
      <h1 className="text-2xl font-semibold mb-4 mt-4 text-gray-900 dark:text-neutral-100">experience</h1>
      <p className="mt-2 mb-8 text-gray-600 dark:text-neutral-400">
        Companies I&apos;ve worked with to deliver software solutions and drive technical growth of the company.
      </p>
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