import Anchor from "@/components/Anchor";
import Header from "@/components/Header";
import HomeLink from "@/components/HomeLink";
import QuoteBlock from "@/components/QuoteBlock";
import ReachSection from "@/components/ReachSection";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <Header name="Avik Mukherjee" location="Hyderabad, India." />

      <AnimatedSection delay="0.05s" className="mt-6">
        <p className="text-gray-600 dark:text-stone-400 leading-relaxed">
          Full-stack developer currently working at{" "}
          <Anchor
            href="https://www.superalign.ai"
            target="_blank"
            className="transition-all duration-200 hover:opacity-80"
          >
            SuperAlign AI
          </Anchor>
          . building high-throughput analytics, security pipelines, and
          developer tooling.
        </p>
      </AnimatedSection>

      <QuoteBlock
        quote="My approach to building software is simple: clarity over cleverness, performance over abstraction, and shipping over perfection."
        animationDelay="0.11s"
      />

      <HomeLink
        href="/experiments"
        label="experiments"
        description="Interactive components and UI experiments. Click to explore the code and see them in action."
        animationDelay="0.14s"
      />
      <HomeLink
        href="/experience"
        label="experience"
        description="Companies I've worked with to deliver software solutions and drive technical growth of the company."
        animationDelay="0.17s"
      />
      <HomeLink
        href="/projects"
        label="work"
        description="Batteleground of my personal projects that I've built to learn new technologies."
        animationDelay="0.20s"
      />
      <HomeLink
        href="/blog"
        label="writing"
        description="Thoughts, tutorials, and insights on web development, technology, and software engineering."
        animationDelay="0.23s"
      />
      <HomeLink
        href="/about"
        label="about"
        description="Learn more about my journey, background, and what drives me as a developer."
        animationDelay="0.26s"
      />

      <ReachSection animationDelay="0.29s" />
    </main>
  );
}
