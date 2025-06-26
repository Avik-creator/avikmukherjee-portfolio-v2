import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/footer";
import { Instrument_Serif } from "next/font/google";
import { GeistMono } from 'geist/font/mono';
import { cn } from "@/lib/utils";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avikmukherjee.me"),
  title: {
    default: "Avik Mukherjee",
    template: "%s | Avik Mukherjee",
  },
  description: "My personal site to showcase my developer work and projects.",
  keywords: ["developer", "web", "software", "engineer", "react", "next", "Avik", "Mukherjee", "Avik Mukherjee", "portfolio", "projects", "blog"],
  openGraph: {
    title: "Avik Mukherjee",
    description: "My personal site to showcase my developer work and projects.",
    url: "https://www.avikmukherjee.me",
    siteName: "Avik Mukherjee",
    images: [
      {
        url: "https://www.avikmukherjee.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Avik Mukherjee",
      },
    ],
    locale: "en_US",
    type: "website",
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
    title: "Avik Mukherjee",
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <head />
      <body
        className={cn(
          GeistMono.variable,
          'flex min-h-screen mx-auto flex-col bg-neutral-950 font-mono text-neutral-100 text-sm'
        )}>
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
