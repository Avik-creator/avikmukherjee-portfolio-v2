import type { Metadata } from "next";
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Experiments",
  description: "Interactive code experiments and UI components you can explore in real-time.",
};

export default function ExperimentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        GeistMono.className,
        'text-[13px] [text-rendering:geometricPrecision] container font-serif'
      )}>
      {children}
    </div>
  );
}

