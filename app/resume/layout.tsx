import { PropsWithChildren } from 'react';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';


export const metadata = {
  title: {
    template: '%s | Resume',
    default: 'Avik Mukherjee',
  },
  description: 'Resume of Avik Mukherjee',
  openGraph: {
    title: 'Resume',
    description: 'Resume of Avik Mukherjee',
    images: ['/og?title=Resume'],
    url: 'https://avikmukherjee.me/resume',
  },
  twitter: {
    title: 'Resume',
    description: 'Resume of Avik Mukherjee',
    images: ['/og?title=Resume'],
  },
  alternates: {
    canonical: 'https://avikmukherjee.me/resume',
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
}


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