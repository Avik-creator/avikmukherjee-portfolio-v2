import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/footer";
import { Instrument_Serif } from "next/font/google";
import { GeistMono } from 'geist/font/mono';
import { cn } from "@/lib/utils";
import Script from "next/script";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avikmukherjee.me"),
  title: {
    default: "Avik Mukherjee",
    template: "%s | Software Developer",
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
  icons:{
    icon: "/my-favicon/web-app-manifest-192x192.png",
    shortcut: "/my-favicon/web-app-manifest-192x192.png",
    apple: "/my-favicon/web-app-manifest-192x192.png",
    other: {
      rel: "icon",
      url: "/my-favicon/web-app-manifest-192x192.png",
    },
  },
  twitter: {
    title: "Avik Mukherjee",
    card: "summary_large_image",
    images: ['https://avikmukherjee.me/og-image.jpg']
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <head>
      <meta name="apple-mobile-web-app-title" content="Avik" />
        <Script
          defer
          data-domain="avikmukherjee.me"
          src="https://webtracker.avikmukherjee.me/tracking-script.js"
        />
        </head>
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
