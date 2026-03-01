import ExperienceItem from "@/components/ExperienceItem";
import PageHeader from "@/components/PageHeader";
import AnimatedListItem from "@/components/AnimatedListItem";
import { ExperienceMap } from "@/components/experience-map";
import { experiences } from "@/lib/data/experiences-normalized";
import { ExperienceType } from "@/lib/data/types";

const CATEGORY_ORDER = ["Work", "Community"];
// Group flat array by category
const groupedExperiences = CATEGORY_ORDER.reduce(
  (acc, category) => {
    acc[category] = experiences.filter(
      (exp) => exp.category === category
    );
    return acc;
  },
  {} as Record<string, ExperienceType[]>
);

export default function Page() {
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <PageHeader
        backHref="/"
        title="experience"
        description="Places where I shipped production software and, where relevant, contributed to developer communities and ecosystem growth."
      />

      <div className="mb-12">
        <ExperienceMap experiences={experiences} />
      </div>

      <div className="space-y-16">
        {Object.entries(groupedExperiences).map(([category, items]) => (
          <section key={category}>
            <h2 className="text-lg font-serif mb-6 font-semibold text-gray-900 dark:text-neutral-100 underline decoration-gray-500 dark:decoration-neutral-400/50 underline-offset-4 transition-all duration-300 group-hover:underline-offset-[6px] group-hover:decoration-gray-700 dark:group-hover:decoration-neutral-300">{category}</h2>

            {items.map((experience: ExperienceType, index: number) => (
              <AnimatedListItem key={experience.id ?? index} index={index}>
                <ExperienceItem
                  title={experience.role as string}
                  company={experience.company}
                  year={`${experience.startDate} - ${experience.endDate}`}
                  description={experience.description}
                  companySite={experience.companySite}
                />
              </AnimatedListItem>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}