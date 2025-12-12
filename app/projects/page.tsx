import BackNavigation from "@/components/back-navigation";
import ProjectItem from "@/components/ProjectItem";
import { projects } from "@/lib/data";
import { Metadata } from "next";



export default function Page() {
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <BackNavigation href="/">back</BackNavigation>
      <h1 className="text-2xl font-serif font-semibold mb-4 mt-4 text-gray-900 dark:text-neutral-100 animate-[slideFadeUp_0.4s_ease-out]">work</h1>
      <p className="mt-2 mb-8 text-gray-600 dark:text-neutral-400 leading-relaxed animate-[slideFadeUp_0.5s_ease-out]">
        Batteleground of my personal projects that I&apos;ve built to learn new technologies.
      </p>
      <div className="space-y-0">
        {projects.map((project, index) => (
          <div
            key={index}
            className="animate-[slideFadeUp_0.6s_ease-out]"
            style={{ animationDelay: `${(index + 1) * 0.1}s`, animationFillMode: 'both' }}
          >
            <ProjectItem
              title={project.title}
              description={project.description}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          </div>
        ))}
      </div>
    </main>
  )
}
