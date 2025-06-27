import { PropsWithChildren } from 'react';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';


export const metadata = {
  title: 'Resume',
  description: 'Resume of Avik Mukherjee',
  openGraph: {
    title: 'Resume',
    description: 'Resume of Avik Mukherjee',
    images: ['https://avikmukherjee.me/og-image.jpg'],
    url: 'https://avikmukherjee.me/resume',
  },
  twitter: {
    title: 'Resume',
    description: 'Resume of Avik Mukherjee',
    images: ['https://avikmukherjee.me/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://avikmukherjee.me/resume',
  },
  robots: {
    index: true,
    follow: true,
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