import ExperienceItem from "@/components/ExperienceItem";
import PageHeader from "@/components/PageHeader";
import AnimatedListItem from "@/components/AnimatedListItem";
import { ExperienceMap } from "@/components/experience-map";
import { experiences } from "@/lib/data/experiences-normalized";

export default function Page() {
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <PageHeader
        backHref="/"
        title="experience"
        description="Places where I shipped production software and, where relevant, contributed to developer communities and ecosystem growth."
      />

      {/* Interactive World Map */}
      <div className="mb-12">
        <ExperienceMap experiences={experiences} />
      </div>

      {/* Experience List */}
      <div className="space-y-0">
        {experiences.map((experience, index) => (
          <AnimatedListItem key={experience.id} index={index}>
            <ExperienceItem
              title={experience.role as string}
              company={experience.company}
              year={`${experience.startDate} - ${experience.endDate}`}
              description={experience.description}
              companySite={experience.companySite}
            />
          </AnimatedListItem>
        ))}
      </div>
    </main>
  );
}
