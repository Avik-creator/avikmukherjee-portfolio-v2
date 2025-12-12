import Anchor from '@/components/Anchor';
import Header from '@/components/Header';
import HomeLink from '@/components/HomeLink';
import QuoteBlock from '@/components/QuoteBlock';

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

      <HomeLink href="/experiments" label="experiments" animationDelay="0.7s" />
      <HomeLink href="/experience" label="experience" animationDelay="0.8s" />
      <HomeLink href="/projects" label="work" animationDelay="0.9s" />
      <HomeLink href="/blog" label="writing" animationDelay="1.0s" />
      <HomeLink href="/about" label="about" animationDelay="1.1s" />

      <section
        className="mt-12 animate-[slideFadeUp_0.6s_ease-out]"
        style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
      >
        <h2 className="text-lg font-serif font-semibold text-gray-900 dark:text-neutral-100">reach</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="whitespace-nowrap text-gray-700 dark:text-neutral-400">
            <span>connect on </span>
            <Anchor href="https://x.com/avikm744" target="_blank" className="transition-all duration-200 hover:opacity-70 hover:scale-105 inline-block">
              {'𝕏'}
            </Anchor>
            <span className="mx-1 text-gray-400 dark:text-neutral-400/50 transition-opacity duration-200">·</span>
            <Anchor href="https://github.com/Avik-creator" target="_blank" className="transition-all duration-200 hover:opacity-70 hover:scale-105 inline-block">
              GitHub
            </Anchor>
            <span className="mx-1 text-gray-400 dark:text-neutral-400/50 transition-opacity duration-200">·</span>
            <Anchor href="https://www.linkedin.com/in/avik-mukherjee-8ab9911bb/" target="_blank" className="transition-all duration-200 hover:opacity-70 hover:scale-105 inline-block">
              LinkedIn
            </Anchor>
            <span className="mx-1 text-gray-400 dark:text-neutral-400/50 transition-opacity duration-200">·</span>
            <Anchor href="https://peerlist.io/avikmukherjee/" target="_blank" className="transition-all duration-200 hover:opacity-70 hover:scale-105 inline-block">
              Peerlist
            </Anchor>
          </span>
          <span className="text-gray-700 dark:text-neutral-400">
            — or send me an email at{" "}
            <Anchor href="mailto:avikm744@gmail.com" target="_blank" className="transition-all duration-200 hover:opacity-70 hover:underline underline-offset-2">
              avikm744@gmail.com
            </Anchor>
          </span>
        </div>
      </section>
    </main>
  );
}
