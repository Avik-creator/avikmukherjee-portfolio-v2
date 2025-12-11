import { PropsWithChildren } from 'react';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Experience — Professional Work History of Avik Mukherjee",
  description: "Professional experience of Avik Mukherjee as a software engineer at SuperAlign AI, DataFoundry, Dank, and more. Full-stack development roles and achievements.",
  openGraph: {
    title: "Experience — Professional Work History of Avik Mukherjee",
    description: "Professional experience of Avik Mukherjee as a software engineer at SuperAlign AI, DataFoundry, Dank, and more. Full-stack development roles and achievements.",
    url: "https://www.avikmukherjee.me/experience",
    images: ["/og-image.webp"],
    siteName: "Avik Mukherjee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Experience — Professional Work History of Avik Mukherjee",
    card: "summary_large_image",
    images: ["/og-image.webp"],
    description: "Professional experience of Avik Mukherjee as a software engineer at SuperAlign AI, DataFoundry, Dank, and more. Full-stack development roles and achievements.",
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
    canonical: "https://www.avikmukherjee.me/experience",
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