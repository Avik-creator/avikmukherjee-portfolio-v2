import Anchor from '@/components/Anchor';
import BlogList from '@/components/blog/blog-list';
import ExperienceItem from '@/components/ExperienceItem';
import ProjectItem from '@/components/ProjectItem';
import Header from '@/components/Header';
import Link from 'next/link';
import { Experience, projects } from '@/lib/data';

export const metadata = {
  title: 'Avik Mukherjee',
  description: 'Avik Mukherjee is a developer who loves to code and build things.',
  keywords: ['Avik Mukherjee', 'developer', 'software engineer', 'portfolio', 'projects', 'blog', 'formcraftai', 'formcraftai-delta', 'formcraftai-ai', 'formcraftai-ai-powered', 'formcraftai-ai-powered-application', 'formcraftai-ai-powered-application-that-helps-you-to-create-google-forms-with-ease'],
  openGraph: {
    title: 'Avik Mukherjee',
    description: 'Avik Mukherjee is a developer who loves to code and build things.',
    images: ['/images/avik-mukherjee.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avik Mukherjee',
    description: 'Avik Mukherjee is a developer who loves to code and build things.',
    images: ['/images/avik-mukherjee.png'],
  },
  icons: {
    icon: '/images/avik-mukherjee.png',
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
        <p>
          I&apos;m a full-stack developer who thrives in fast-paced environments, whether it&apos;s early-stage startups or established tech companies. I take ownership of my work and adapt quickly to different team dynamics — from intimate 3-person teams to larger organizations.
        </p>
        <p className="mt-4">
          Currently working as a Software Engineer Intern at{' '}
          <Anchor href="https://www.superalign.ai" target="_blank">SuperAlign AI</Anchor>, 
          where I build scalable frontends with Next.js and robust backends with HonoJS. Previously shipped features at DataFoundry AI (MNC), Dank, and other startups.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-neutral-100">me</h2>
        <p className="mt-2">
          I started my journey in the programming and development world at my 3rd Year, curious about various technologies and technology domains. I began with Python, then Java a little bit and then hit the ground with Javascript world which led me to build simple websites, which eventually evolved into creating products that solve real-world problems
        </p>
        <p className="mt-4">
        Over time, I am still learning and exploring new domains of technology, and I am currently focused on building products that are user-friendly and solve real-world problems. I am also interested in Application Development, and I am currently learning about it.
        </p>
      </section>

      <section className="mt-12">
        <Link href="/projects">
          <h2 className="text-neutral-100">work</h2>
        </Link>
        <p className="mt-2">
          I welcome you to my battleground where I always try to build something new and interesting.
        </p>
        <div className="py-4">
          {recentProjects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              year={project.year}
              description={project.description}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <Link href="/experience">
          <h2 className="text-neutral-100">experience</h2>
        </Link>
        <p className="mt-2">
          I have worked on various projects and internships, where I have learned a lot and gained valuable experience.
        </p>
        <div className="py-4">
          {recentExperiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              title={experience.title}
              year={experience.year}
              description={experience.description}
              companySite={experience.companySite}
            />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <Link href="/blog">
          <h2 className="text-neutral-100">writing</h2>
        </Link>
        <p className="mt-2">
          I write about things I&apos;m learning, my experiences and thoughts on
          design and technology.
        </p>
        <div className="py-4">
            <BlogList length={3} />
          </div>
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