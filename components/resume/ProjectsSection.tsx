interface Project {
  title: string;
  techStack: string;
  points: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

// Helper function to bold technologies in tech stack
function formatTechStack(techStack: string) {
  // Remove parentheses and split by comma
  const cleaned = techStack.replace(/[()]/g, '').trim();
  const technologies = cleaned.split(',').map(t => t.trim());

  return (
    <span className="text-gray-600 dark:text-neutral-500 text-sm italic">
      ({technologies.map((tech, index) => (
        <span key={index}>
          <strong className="font-semibold text-gray-800 dark:text-neutral-200">{tech}</strong>
          {index < technologies.length - 1 && ', '}
        </span>
      ))})
    </span>
  );
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="animate-[slideFadeUp_0.6s_ease-out]">
      <h2 className="text-xl font-medium text-gray-900 dark:text-neutral-100 mb-6">
        Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="space-y-2 animate-[slideFadeUp_0.7s_ease-out]"
            style={{ animationDelay: `${(index + 1) * 0.1}s`, animationFillMode: 'both' }}
          >
            <div>
              <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                {project.title}
              </h3>
              {formatTechStack(project.techStack)}
            </div>
            <div className="space-y-1 text-gray-600 dark:text-neutral-400 text-sm">
              {project.points.map((point, pointIndex) => (
                <p key={pointIndex}>{point}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
