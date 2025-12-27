import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { VideoSection } from "@/components/video-section";

export default function AboutPage() {
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <PageHeader
        backHref="/"
        title="about"
        description="I started my programming journey in my 3rd year of college, beginning with Python and Java before diving deep into the JavaScript ecosystem. What began as building simple websites evolved into creating products that solve real-world problems."
      />

      {/* Video early — optional, not intrusive */}
      <AnimatedSection delay="0.5s" className="mt-6 mb-10">
        <VideoSection />
      </AnimatedSection>

      {/* Core thesis */}
      <AnimatedSection delay="0.6s" className="mt-4 mb-6">
        <h2 className="text-lg font-serif font-semibold text-gray-900 dark:text-neutral-100 mb-4">
          What Makes Me Different?
        </h2>
        <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
          I&apos;m not interested in shipping code for the sake of it. I focus
          on understanding the problem first—technical constraints, business
          impact, and failure modes—and then building systems that actually hold
          up in the real world. I take ownership of what I build, including the
          tradeoffs and the mess that comes with it.
        </p>
        <p className="text-gray-600 dark:text-neutral-400 leading-relaxed mt-4">
          I use AI as a force multiplier, not a crutch. It helps me move faster
          on exploration and execution, but every decision still goes through
          review, reasoning, and architectural judgment. The goal is reliability
          and leverage, not flashy output.
        </p>
      </AnimatedSection>
    </main>
  );
}
