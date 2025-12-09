import Anchor from '@/components/Anchor';
import BlogList from '@/components/blog/blog-list';
import ExperienceItem from '@/components/ExperienceItem';
import ProjectItem from '@/components/ProjectItem';
import Header from '@/components/Header';
import Link from 'next/link';
import { Experience, projects } from '@/lib/data';
import { cn } from '@/lib/utils';
import { VideoSection } from '@/components/video-section';


export default function Home() {
  const recentExperiences = Experience.slice(0, 3);
  const recentProjects = projects.slice(0, 3);

  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <Header
        name="Avik Mukherjee"
        location="Hyderabad, India."
      />

      <section className="mt-6">
        <p className="text-gray-600 dark:text-stone-400">
          Full-stack developer currently working at{' '}
          <Anchor href="https://www.superalign.ai" target="_blank">SuperAlign AI</Anchor>.
          I build scalable web applications with Next.js, React, and Node.js that help businesses grow and solve real problems.
        </p>
      </section>

      <section className="mt-12">
        <Link
          href={`/projects`}
          className={cn(
            'group flex items-center justify-between gap-1',
            'hover:outline-[0.5px] outline-offset-[6px] hover:outline-gray-400/50 dark:hover:outline-neutral-600/50 hover:[&>h3]:text-gray-900 dark:hover:[&>h3]:text-white hover:[&>span]:text-gray-900 dark:hover:[&>span]:text-white border-0',
            'relative'
          )}>
          {/* Top left */}
          <div
            className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block"
            style={{ '--cross-size': '10px' } as React.CSSProperties}>
            <div className="absolute left-0 top-0 h-(--cross-size).5px] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
            <div className="absolute left-0 top-0 h-[0.5px] w-(--cross-size)nslate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
          </div>
          {/* Bottom right */}
          <div
            className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block"
            style={{ '--cross-size': '10px' } as React.CSSProperties}>
            <div className="absolute left-0 top-0 h-(--cross-size).5px] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
            <div className="absolute left-0 top-0 h-[0.5px] w-(--cross-size)nslate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
          </div>
          <h2 className="grow text-lg font-semibold text-gray-900 dark:text-neutral-100 underline decoration-gray-500 dark:decoration-neutral-400/50 underline-offset-4nsition-colors">
            work
          </h2>
        </Link>
        <p className="mt-2 text-gray-600 dark:text-neutral-400">
          Batteleground of my personal projects that I&apos;ve built to learn new technologies.
        </p>
        <div className="py-4">
          {recentProjects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <Link
          href={`/experience`}
          className={cn(
            'group flex items-center justify-between gap-1',
            'hover:outline-[0.5px] outline-offset-[6px] hover:outline-gray-400/50 dark:hover:outline-neutral-600/50 hover:[&>h3]:text-gray-900 dark:hover:[&>h3]:text-white hover:[&>span]:text-gray-900 dark:hover:[&>span]:text-white border-0',
            'relative'
          )}>
          {/* Top left */}
          <div
            className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block"
            style={{ '--cross-size': '10px' } as React.CSSProperties}>
            <div className="absolute left-0 top-0 h-(--cross-size).5px] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
            <div className="absolute left-0 top-0 h-[0.5px] w-(--cross-size)nslate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
          </div>
          {/* Bottom right */}
          <div
            className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block"
            style={{ '--cross-size': '10px' } as React.CSSProperties}>
            <div className="absolute left-0 top-0 h-(--cross-size) w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
            <div className="absolute left-0 top-0 h-[0.5px] w-(--cross-size)nslate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
          </div>
          <h2 className="grow text-lg font-semibold text-gray-900 dark:text-neutral-100 underline decoration-gray-500 dark:decoration-neutral-400/50 underline-offset-4nsition-colors">
            experience
          </h2>
        </Link>
        <p className="mt-2 text-gray-600 dark:text-neutral-400">
          Companies I&apos;ve worked with to deliver software solutions and drive technical growth of the company.
        </p>
        <div className="py-4">
          {recentExperiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              title={experience.title}
              company={experience.company}
              year={experience.year}
              description={experience.description}
              companySite={experience.companySite}
            />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <Link
          href={`/blog`}
          className={cn(
            'group flex items-center justify-between gap-1',
            'hover:outline-[0.5px] outline-offset-[6px] hover:outline-gray-400/50 dark:hover:outline-neutral-600/50 hover:[&>h3]:text-gray-900 dark:hover:[&>h3]:text-white hover:[&>span]:text-gray-900 dark:hover:[&>span]:text-white border-0',
            'relative'
          )}>
          {/* Top left */}
          <div
            className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block"
            style={{ '--cross-size': '10px' } as React.CSSProperties}>
            <div className="absolute left-0 top-0 h-(--cross-size).5px] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
            <div className="absolute left-0 top-0 h-[0.5px] w-(--cross-size)nslate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
          </div>
          {/* Bottom right */}
          <div
            className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block"
            style={{ '--cross-size': '10px' } as React.CSSProperties}>
            <div className="absolute left-0 top-0 h-(--cross-size).5px] -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
            <div className="absolute left-0 top-0 h-[0.5px] w-(--cross-size) -translate-x-1/2 -translate-y-1/2 bg-gray-500 dark:bg-neutral-500" />
          </div>
          <h2 className="grow text-lg font-semibold text-gray-900 dark:text-neutral-100 underline decoration-gray-500 dark:decoration-neutral-400/50 underline-offset-4 transition-colors">
            writing
          </h2>
        </Link>
        <p className="mt-2 text-gray-600 dark:text-neutral-400">
          I write about development techniques, project insights, and lessons learned building software.
        </p>
        <div className="py-4">
          <BlogList length={3} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">about</h2>
        <p className="mt-2 text-gray-600 dark:text-neutral-400">
          I started my programming journey in my 3rd year of college, beginning with Python and Java before diving deep into the JavaScript ecosystem. What began as building simple websites evolved into creating products that solve real-world problems.
        </p>
        <p className="mt-4 text-gray-600 dark:text-neutral-400">
          Previously shipped features at DataFoundry AI, Dank, and other startups. I enjoy working in different environments — from intimate 3-person teams to larger organizations — and take pride in delivering quality software that makes a difference.
        </p>
        <p className="mt-4 text-gray-600 dark:text-neutral-400">
          Currently exploring new domains in technology while staying focused on building user-friendly applications that address real-world problems.
        </p>
        <p className='mt-4 text-gray-600 dark:text-neutral-400'>
          If you don&apos;t want to read so much text, you can watch my video below.
        </p>
        <VideoSection />
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">reach</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="whitespace-nowrap text-gray-700 dark:text-neutral-400">
            <span>connect on </span>
            <Anchor href="https://x.com/avikm744" target="_blank">
              {'𝕏'}
            </Anchor>
            <span className="mx-1 text-gray-400 dark:text-neutral-400/50">·</span>
            <Anchor href="https://github.com/Avik-creator" target="_blank">
              GitHub
            </Anchor>
            <span className="mx-1 text-gray-400 dark:text-neutral-400/50">·</span>
            <Anchor href="https://www.linkedin.com/in/avik-mukherjee-8ab9911bb/" target="_blank">
              LinkedIn
            </Anchor>
            <span className="mx-1 text-gray-400 dark:text-neutral-400/50">·</span>
            <Anchor href="https://peerlist.io/avikmukherjee/" target="_blank">
              Peerlist
            </Anchor>
          </span>
          <span className="text-gray-700 dark:text-neutral-400">
            — or send me an email at{" "}
            <Anchor href="mailto:avikm744@gmail.com" target="_blank">
              avikm744@gmail.com
            </Anchor>
          </span>
        </div>
      </section>
    </main>
  );
}
