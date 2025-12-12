import BackNavigation from "@/components/back-navigation";
import { VideoSection } from "@/components/video-section";

export default function AboutPage() {
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <BackNavigation href="/">back</BackNavigation>
      <h1 className="text-2xl font-semibold mb-4 mt-4 text-gray-900 dark:text-neutral-100">about</h1>
      <p className="mt-2 mb-4 text-gray-600 dark:text-neutral-400">
        I started my programming journey in my 3rd year of college, beginning with Python and Java before diving deep into the JavaScript ecosystem. What began as building simple websites evolved into creating products that solve real-world problems.
      </p>
      <p className="mt-4 mb-4 text-gray-600 dark:text-neutral-400">
        Previously shipped features at DataFoundry AI, Dank, and other startups. I enjoy working in different environments — from intimate 3-person teams to larger organizations — and take pride in delivering quality software that makes a difference.
      </p>
      <p className="mt-4 mb-4 text-gray-600 dark:text-neutral-400">
        Currently exploring new domains in technology while staying focused on building user-friendly applications that address real-world problems.
      </p>
      <p className='mt-4 mb-8 text-gray-600 dark:text-neutral-400'>
        If you don&apos;t want to read so much text, you can watch my video below.
      </p>
      <VideoSection />
    </main>
  );
}
