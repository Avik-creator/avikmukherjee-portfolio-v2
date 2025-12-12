import BackNavigation from "@/components/back-navigation";
import { VideoSection } from "@/components/video-section";

export default function AboutPage() {
  return (
    <main className="mb-32 text-gray-700 dark:text-neutral-400">
      <BackNavigation href="/">back</BackNavigation>
      <h1 className="text-2xl font-serif font-semibold mb-4 mt-4 text-gray-900 dark:text-neutral-100 animate-[slideFadeUp_0.4s_ease-out]">about</h1>
      <p className="mt-2 mb-4 text-gray-600 dark:text-neutral-400 leading-relaxed animate-[slideFadeUp_0.5s_ease-out]">
        I started my programming journey in my 3rd year of college, beginning with Python and Java before diving deep into the JavaScript ecosystem. What began as building simple websites evolved into creating products that solve real-world problems.
      </p>
      <p className="mt-4 mb-4 text-gray-600 dark:text-neutral-400 leading-relaxed animate-[slideFadeUp_0.6s_ease-out]">
        Previously shipped features at DataFoundry AI, Dank, and other startups. I enjoy working in different environments — from intimate 3-person teams to larger organizations — and take pride in delivering quality software that makes a difference.
      </p>
      <p className="mt-4 mb-4 text-gray-600 dark:text-neutral-400 leading-relaxed animate-[slideFadeUp_0.7s_ease-out]">
        Currently exploring new domains in technology while staying focused on building user-friendly applications that address real-world problems.
      </p>
      <p className='mt-4 mb-8 text-gray-600 dark:text-neutral-400 leading-relaxed animate-[slideFadeUp_0.8s_ease-out]'>
        If you don&apos;t want to read so much text, you can watch my video below.
      </p>
      <div className="animate-[slideFadeUp_0.9s_ease-out]">
        <VideoSection />
      </div>
    </main>
  );
}
