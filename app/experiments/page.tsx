import BackNavigation from "@/components/back-navigation";
import ExperimentItem from "@/components/experiments/experiment-item";
import { experiments, type Experiment } from "@/lib/experiments-data";

export default function ExperimentsPage() {
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <BackNavigation href="/">back</BackNavigation>
      <h1 className="text-2xl font-serif font-semibold mb-4 mt-4 text-gray-900 dark:text-neutral-100 animate-[slideFadeUp_0.4s_ease-out]">
        experiments
      </h1>
      <p className="mt-2 mb-8 text-gray-600 dark:text-neutral-400 leading-relaxed animate-[slideFadeUp_0.5s_ease-out]">
        Interactive components and UI experiments. Click to explore the code and see them in action.
      </p>
      <div>
        {experiments.map((experiment: Experiment, index: number) => (
          <div
            key={experiment.slug}
            className="animate-[slideFadeUp_0.6s_ease-out]"
            style={{ animationDelay: `${(index + 1) * 0.1}s`, animationFillMode: 'both' }}
          >
            <ExperimentItem
              slug={experiment.slug}
              title={experiment.title}
              description={experiment.description}
              year={experiment.year}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

