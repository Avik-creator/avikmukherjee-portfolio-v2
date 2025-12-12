import Anchor from '@/components/Anchor';

interface ReachSectionProps {
  animationDelay?: string;
  xLink: string;
  githubLink: string;
  linkedinLink: string;
  peerlistLink: string;
  emailLink: string;
}

export default function ReachSection({ animationDelay = '1.1s', xLink, githubLink, linkedinLink, peerlistLink, emailLink }: ReachSectionProps) {
  return (
    <section
      className="mt-12 animate-[slideFadeUp_0.6s_ease-out]"
      style={{ animationDelay, animationFillMode: 'both' }}
    >
      <h2 className="text-lg font-serif font-semibold text-gray-900 dark:text-neutral-100">reach</h2>
      <div className="mt-2 flex flex-wrap gap-2">
        <span className="whitespace-nowrap text-gray-700 dark:text-neutral-400">
          <span>connect on </span>
          <Anchor href={xLink} target="_blank" className="transition-all duration-200 hover:opacity-70 hover:scale-105 inline-block">
            {'𝕏'}
          </Anchor>
          <span className="mx-1 text-gray-400 dark:text-neutral-400/50 transition-opacity duration-200">·</span>
          <Anchor href={githubLink} target="_blank" className="transition-all duration-200 hover:opacity-70 hover:scale-105 inline-block">
            GitHub
          </Anchor>
          <span className="mx-1 text-gray-400 dark:text-neutral-400/50 transition-opacity duration-200">·</span>
          <Anchor href={linkedinLink} target="_blank" className="transition-all duration-200 hover:opacity-70 hover:scale-105 inline-block">
            LinkedIn
          </Anchor>
          <span className="mx-1 text-gray-400 dark:text-neutral-400/50 transition-opacity duration-200">·</span>
          <Anchor href={peerlistLink} target="_blank" className="transition-all duration-200 hover:opacity-70 hover:scale-105 inline-block">
            Peerlist
          </Anchor>
        </span>
        <span className="text-gray-700 dark:text-neutral-400">
          — or send me an email at{" "}
          <Anchor href={emailLink} target="_blank" className="transition-all duration-200 hover:opacity-70 hover:underline underline-offset-2">
            avikm744@gmail.com
          </Anchor>
        </span>
      </div>
    </section>
  );
}

