import { PropsWithChildren } from 'react';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reading — Articles & Books by Avik Mukherjee",
  description: "A curated list of articles and books I am currently reading, have finished, or want to read. Tracking my learning and staying accountable.",
  openGraph: {
    title: "Reading — Articles & Books by Avik Mukherjee",
    description: "A curated list of articles and books I am currently reading, have finished, or want to read. Tracking my learning and staying accountable.",
    url: "https://www.avikmukherjee.me/reading",
    images: ["/og-image.webp"],
    siteName: "Avik Mukherjee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Reading — Articles & Books by Avik Mukherjee",
    card: "summary_large_image",
    images: ["/og-image.webp"],
    description: "A curated list of articles and books I am currently reading, have finished, or want to read. Tracking my learning and staying accountable.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.avikmukherjee.me/reading",
  },
};

export default function ReadingLayout({ children }: PropsWithChildren) {
  return (
    <main
      className={cn(
        GeistMono.className,
        'text-[13px] [text-rendering:geometricPrecision] container'
      )}>
      {children}
    </main>
  );
}