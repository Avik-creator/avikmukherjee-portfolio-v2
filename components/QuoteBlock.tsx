interface QuoteBlockProps {
  quote: string;
  animationDelay?: string;
}

export default function QuoteBlock({ quote, animationDelay = '0.05s' }: QuoteBlockProps) {
  return (
    <section
      className="mt-12 animate-[slideFadeUp_0.6s_ease-out]"
      style={{ animationDelay, animationFillMode: 'both' }}
    >
      <blockquote className="relative italic text-gray-700 dark:text-neutral-400 py-4 px-6 max-w-2xl">
        {/* Top left */}
        <div className="absolute left-[-6.25px] top-[-6.25px] opacity-100 w-[10px] h-[10px]">
          <div className="absolute left-0 top-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 scale-y-100 origin-top shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          <div className="absolute left-0 top-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 scale-x-100 origin-left shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
        </div>
        {/* Top right */}
        <div className="absolute right-[-6.25px] top-[-6.25px] opacity-100 w-[10px] h-[10px]">
          <div className="absolute right-0 top-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 scale-y-100 origin-top shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          <div className="absolute right-0 top-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 scale-x-100 origin-right shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
        </div>
        {/* Bottom left */}
        <div className="absolute left-[-6.25px] bottom-[-6.25px] opacity-100 w-[10px] h-[10px]">
          <div className="absolute left-0 bottom-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 scale-y-100 origin-bottom shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          <div className="absolute left-0 bottom-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 scale-x-100 origin-left shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
        </div>
        {/* Bottom right */}
        <div className="absolute bottom-[-6.25px] right-[-6.25px] opacity-100 w-[10px] h-[10px]">
          <div className="absolute right-0 bottom-0 h-[10px] w-[0.5px] bg-gray-500 dark:bg-neutral-500 scale-y-100 origin-bottom shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
          <div className="absolute right-0 bottom-0 h-[0.5px] w-[10px] bg-gray-500 dark:bg-neutral-500 scale-x-100 origin-right shadow-[0_0_4px_rgba(107,114,128,0.4)] dark:shadow-[0_0_4px_rgba(163,163,163,0.4)]" />
        </div>
        <p className="leading-relaxed">
          {quote}
        </p>
      </blockquote>
    </section>
  );
}
