import BackNavigation from "@/components/back-navigation";
import ExperienceItem from "@/components/ExperienceItem";
import { Experience } from "@/lib/data";
import { Metadata } from "next";


export default function Page() {
  const allExperiences = Experience;
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <BackNavigation href="/">back</BackNavigation>
      <h1 className="text-2xl font-serif font-semibold mb-4 mt-4 text-gray-900 dark:text-neutral-100 animate-[slideFadeUp_0.4s_ease-out]">experience</h1>
      <p className="mt-2 mb-8 text-gray-600 dark:text-neutral-400 leading-relaxed animate-[slideFadeUp_0.5s_ease-out]">
        Companies I&apos;ve worked with to deliver software solutions and drive technical growth of the company.
      </p>
      <div className="space-y-0">
        {allExperiences.map((experience, index) => (
          <div
            key={index}
            className="animate-[slideFadeUp_0.6s_ease-out]"
            style={{ animationDelay: `${(index + 1) * 0.1}s`, animationFillMode: 'both' }}
          >
            <ExperienceItem
              title={experience.title}
              company={experience.company}
              year={experience.year}
              description={experience.description}
              companySite={experience.companySite}
            />
          </div>
        ))}
      </div>
    </main>
  )
}