import Anchor from "@/components/Anchor"
import Header from "@/components/Header"

export default function NotFound() {
  return (
    <main className="mb-32 text-neutral-400 max-w-2xl mx-auto">
      <Header 
        name="Avik Mukherjee" 
        location="Kolkata, India." 
      />

      <section className="mt-6">
        <h2 className="text-neutral-100">404</h2>
        <p className="mt-2">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you may have entered an incorrect URL.
        </p>
        <p className="mt-4">
          You can return to the{" "}
          <Anchor href="/">home page</Anchor>
          {" "}or explore other sections of my site.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-neutral-100">quick links</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="whitespace-nowrap">
            <span>explore </span>
            <Anchor href="/projects">work</Anchor>
            <span className="mx-1 text-neutral-400/50">·</span>
            <Anchor href="/experience">experience</Anchor>
            <span className="mx-1 text-neutral-400/50">·</span>
            <Anchor href="/blog">writing</Anchor>
          </span>
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
            — or send me an email at{" "}
            <Anchor href="mailto:avikm744@gmail.com" target="_blank">
              avikm744@gmail.com
            </Anchor>
          </span>
        </div>
      </section>
    </main>
  )
}

