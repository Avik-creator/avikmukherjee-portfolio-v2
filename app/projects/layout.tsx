import { PropsWithChildren } from 'react';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description: "See my Projects.",
  openGraph: {
    title: "Projects | Avik",
    description: "Projects of Avik Mukherjee.",
    url: "https://www.avikmukherjee.me/projects",
    images: ["https://www.avikmukherjee.me/og-image.webp"],
    siteName: "Avik Mukherjee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Projects | Avik",
    card: "summary_large_image",
    images: ["https://www.avikmukherjee.me/og-image.webp"],
    description: "Projects of Avik Mukherjee.",
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
    canonical: "https://www.avikmukherjee.me/projects",
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