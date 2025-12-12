import Anchor from '@/components/Anchor';
import Header from '@/components/Header';
import HomeLink from '@/components/HomeLink';
import QuoteBlock from '@/components/QuoteBlock';
import ReachSection from '@/components/ReachSection';

export default function Home() {
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <Header
        name="Avik Mukherjee"
        location="Hyderabad, India."
      />

      <section className="mt-6 animate-[slideFadeUp_0.4s_ease-out]">
        <p className="text-gray-600 dark:text-stone-400 leading-relaxed">
          Full-stack developer currently working at{' '}
          <Anchor href="https://www.superalign.ai" target="_blank" className="transition-all duration-200 hover:opacity-80">SuperAlign AI</Anchor>.
          I build scalable web applications with Next.js, React, and Node.js that help businesses grow and solve real problems.
        </p>
      </section>

      <section className="mt-6 animate-[slideFadeUp_0.5s_ease-out]">
        <p className="text-gray-700 dark:text-neutral-400">This is something I remind myself of every day.</p>
      </section>

      <QuoteBlock
        quote="Every morning you have two choices: Continue to sleep with your dreams or wake up and chase them 💪🏻"
        animationDelay="0.6s"
      />

      <HomeLink
        href="/experiments"
        label="experiments"
        description="Interactive components and UI experiments. Click to explore the code and see them in action."
        animationDelay="0.7s"
      />
      <HomeLink
        href="/experience"
        label="experience"
        description="Companies I've worked with to deliver software solutions and drive technical growth of the company."
        animationDelay="0.8s"
      />
      <HomeLink
        href="/projects"
        label="work"
        description="Batteleground of my personal projects that I've built to learn new technologies."
        animationDelay="0.9s"
      />
      <HomeLink
        href="/blog"
        label="writing"
        description="Thoughts, tutorials, and insights on web development, technology, and software engineering."
        animationDelay="1.0s"
      />
      <HomeLink
        href="/about"
        label="about"
        description="Learn more about my journey, background, and what drives me as a developer."
        animationDelay="1.1s"
      />

      <ReachSection animationDelay="1.2s" xLink="https://x.com/avikm744" githubLink="https://github.com/Avik-creator" linkedinLink="https://www.linkedin.com/in/avik-mukherjee-8ab9911bb/" peerlistLink="https://peerlist.io/avikmukherjee/" emailLink="mailto:avikm744@gmail.com" />
    </main>
  );
}
