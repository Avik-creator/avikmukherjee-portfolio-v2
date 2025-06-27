import Anchor from '@/components/Anchor';
import BlogList from '@/components/blog/blog-list';
import ExperienceItem from '@/components/ExperienceItem';
import ProjectItem from '@/components/ProjectItem';
import Header from '@/components/Header';
import Link from 'next/link';
import { Experience, projects } from '@/lib/data';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Avik Mukherjee',
  description: 'Avik Mukherjee is a developer who loves to code and build things.',
  keywords: ['Avik Mukherjee', 'developer', 'software engineer', 'portfolio', 'projects', 'blog', 'formcraftai', 'formcraftai-delta', 'formcraftai-ai', 'formcraftai-ai-powered', 'formcraftai-ai-powered-application', 'formcraftai-ai-powered-application-that-helps-you-to-create-google-forms-with-ease'],
  openGraph: {
    title: 'Avik Mukherjee',
    description: 'Avik Mukherjee is a developer who loves to code and build things.',
    images: ['https://www.avikmukherjee.me/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avik Mukherjee',
    description: 'Avik Mukherjee is a developer who loves to code and build things.',
    images: ['https://www.avikmukherjee.me/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.avikmukherjee.me',
  },
};

export default function Home() {
  const recentExperiences = Experience.slice(0, 3);
  const recentProjects = projects.slice(0, 3);

  return (
    <main className="mb-32 text-neutral-400">
      <Header 
        name="Avik Mukherjee" 
        location="Kolkata, India." 
        resumeUrl="https://docs.google.com/document/d/1KZ0hvzUtQV_F0gGc8Bw6j5E-RsyaFhx6OXhyzdu_r5Y/edit?usp=sharing"
      />

      <section className="mt-6">
        <p className="text-stone-400">
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
          'hover:outline-[0.5px] outline-offset-[6px] hover:outline-neutral-600/50 hover:[&>h3]:text-white hover:[&>span]:text-white border-0',
          'relative'
        )}>
        {/* Top left */}
        <div
          className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block"
          style={{ '--cross-size': '10px' } as React.CSSProperties}>
          <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
          <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
        </div>
        {/* Bottom right */}
        <div
          className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block"
          style={{ '--cross-size': '10px' } as React.CSSProperties}>
          <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
          <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
        </div>
        <h3 className="grow font-medium text-neutral-200 underline decoration-neutral-400/50 underline-offset-[3px] transition-colors">
          work
        </h3>
        </Link>
        <p className="mt-2">
          Recent projects I&apos;ve built to solve real-world problems and help businesses scale.
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
          'hover:outline-[0.5px] outline-offset-[6px] hover:outline-neutral-600/50 hover:[&>h3]:text-white hover:[&>span]:text-white border-0',
          'relative'
        )}>
        {/* Top left */}
        <div
          className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block"
          style={{ '--cross-size': '10px' } as React.CSSProperties}>
          <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
          <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
        </div>
        {/* Bottom right */}
        <div
          className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block"
          style={{ '--cross-size': '10px' } as React.CSSProperties}>
          <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
          <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
        </div>
        <h3 className="grow font-medium text-neutral-200 underline decoration-neutral-400/50 underline-offset-[3px] transition-colors">
          experience
        </h3>
        </Link>
        <p className="mt-2">
          Companies I&apos;ve worked with to deliver software solutions and drive technical growth.
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
          'hover:outline-[0.5px] outline-offset-[6px] hover:outline-neutral-600/50 hover:[&>h3]:text-white hover:[&>span]:text-white border-0',
          'relative'
        )}>
        {/* Top left */}
        <div
          className="absolute left-[-6.25px] top-[-6.25px] hidden group-hover:block"
          style={{ '--cross-size': '10px' } as React.CSSProperties}>
          <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
          <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
        </div>
        {/* Bottom right */}
        <div
          className="absolute bottom-[-6.25px] right-[-6.25px] hidden group-hover:block"
          style={{ '--cross-size': '10px' } as React.CSSProperties}>
          <div className="absolute left-0 top-0 h-[var(--cross-size)] w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
          <div className="absolute left-0 top-0 h-[0.5px] w-[var(--cross-size)] -translate-x-1/2 -translate-y-1/2 bg-neutral-500" />
        </div>
        <h3 className="grow font-medium text-neutral-200 underline decoration-neutral-400/50 underline-offset-[3px] transition-colors">
          writing
        </h3>
        </Link>
        <p className="mt-2">
          I write about development techniques, project insights, and lessons learned building software.
        </p>
        <div className="py-4">
            <BlogList length={3} />
          </div>
      </section>

      <section className="mt-12">
        <h2 className="text-neutral-100">about</h2>
        <p className="mt-2">
          I started my programming journey in my 3rd year of college, beginning with Python and Java before diving deep into the JavaScript ecosystem. What began as building simple websites evolved into creating products that solve real-world problems.
        </p>
        <p className="mt-4">
          Previously shipped features at DataFoundry AI, Dank, and other startups. I enjoy working in different environments — from intimate 3-person teams to larger organizations — and take pride in delivering quality software that makes a difference.
        </p>
        <p className="mt-4">
          Currently exploring new domains in technology while staying focused on building user-friendly applications that address real-world problems.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-neutral-100">reach</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="whitespace-nowrap">
            <span>connect on </span>
            <Anchor href="https://x.com/avikm744" target="_blank">
              {'𝕏'}
            </Anchor>
            <span className="mx-1 text-neutral-400/50">·</span>
            <Anchor href="https://github.com/Avik-creator" target="_blank">
              GitHub
            </Anchor>
            <span className="mx-1 text-neutral-400/50">·</span>
            <Anchor href="https://www.linkedin.com/in/avik-mukherjee-8ab9911bb/" target="_blank">
              LinkedIn
            </Anchor>
            <span className="mx-1 text-neutral-400/50">·</span>
            <Anchor href="https://peerlist.io/avikmukherjee/" target="_blank">
              Peerlist
            </Anchor>
          </span>
          <span>
            — or send me an email at{' '}
            <Anchor href="mailto:avikm744@gmail.com" target="_blank">
              avikm744@gmail.com
            </Anchor>
          </span>
        </div>
      </section>
    </main>
  );
}