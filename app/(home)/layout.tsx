import { PropsWithChildren } from 'react';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avik Mukherjee — Full-Stack Web Developer & Software Engineer',
  description: 'Avik Mukherjee is a full-stack software developer building scalable web applications. Explore projects, experience, and blog.',
  keywords: ['Avik Mukherjee', 'full-stack developer', 'software engineer', 'Next.js', 'React', 'TypeScript', 'Node.js', 'web developer', 'portfolio', 'SuperAlign AI', 'India'],
  openGraph: {
    title: 'Avik Mukherjee',
    description: 'Avik Mukherjee is a developer who loves to code and build things.',
    images: ['/og-image.webp'],
    url: 'https://www.avikmukherjee.me',
    siteName: 'Avik Mukherjee',
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Avik Mukherjee',
    description: 'Avik Mukherjee is a developer who loves to code and build things.',
    images: ['/og-image.webp'],
    creator: '@avikm744',
    site: '@avikm744',
    siteId: '@avikm744',
  },
  alternates: {
    canonical: 'https://www.avikmukherjee.me',
  },
};




export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <main
      className={cn(
        GeistMono.className,
        'text-[13px] [text-rendering:geometricPrecision] container font-serif'
      )}>
      {children}
    </main>
  );
}