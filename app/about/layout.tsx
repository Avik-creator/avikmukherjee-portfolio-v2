import { PropsWithChildren } from 'react';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About — Avik Mukherjee",
  description: "Learn about Avik Mukherjee's journey as a full-stack developer, from starting with Python and Java to building scalable web applications with Next.js, React, and Node.js.",
  openGraph: {
    title: "About — Avik Mukherjee",
    description: "Learn about Avik Mukherjee's journey as a full-stack developer, from starting with Python and Java to building scalable web applications with Next.js, React, and Node.js.",
    url: "https://www.avikmukherjee.me/about",
    images: ["/og-image.webp"],
    siteName: "Avik Mukherjee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "About — Avik Mukherjee",
    card: "summary_large_image",
    images: ["/og-image.webp"],
    description: "Learn about Avik Mukherjee's journey as a full-stack developer, from starting with Python and Java to building scalable web applications with Next.js, React, and Node.js.",
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
    canonical: "https://www.avikmukherjee.me/about",
  },
};

export default function AboutLayout({ children }: PropsWithChildren) {
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
