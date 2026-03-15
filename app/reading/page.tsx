import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";
import ReadingList from "@/components/reading/reading-list";

export default function ReadingPage() {
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <PageHeader
        backHref="/"
        title="reading"
        description="Articles and books I am reading, have finished, or want to read. A way to track my learning and stay accountable — insights from here find their way into my blog and socials."
        titleSize="sm"
        descriptionClassName="mb-10"
      />

      <AnimatedSection delay="0.6s">
        <ReadingList />
      </AnimatedSection>
    </main>
  );
}