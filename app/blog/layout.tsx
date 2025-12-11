import { PropsWithChildren } from 'react';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog — Technical Writing by Avik Mukherjee",
  description: "Read technical articles about web development, Next.js, React, TypeScript, and software engineering. Insights, tutorials, and lessons learned by Avik Mukherjee.",
  openGraph: {
    title: "Blog — Technical Writing by Avik Mukherjee",
    description: "Read technical articles about web development, Next.js, React, TypeScript, and software engineering. Insights, tutorials, and lessons learned by Avik Mukherjee.",
    url: "https://www.avikmukherjee.me/blog",
    images: ["/og-image.webp"],
    siteName: "Avik Mukherjee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Blog — Technical Writing by Avik Mukherjee",
    card: "summary_large_image",
    images: ["/og-image.webp"],
    description: "Read technical articles about web development, Next.js, React, TypeScript, and software engineering. Insights, tutorials, and lessons learned by Avik Mukherjee.",
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
    canonical: "https://www.avikmukherjee.me/blog",
  },
};

export default function HomeLayout({ children }: PropsWithChildren) {
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