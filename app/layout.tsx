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
  metadataBase: new URL("https://www.avikmukherjee.me/"),
  title: {
    default: "Avik Mukherjee",
    template: "%s | Software Developer",
  },
  description: "Full-stack software developer specializing in Next.js, React, and TypeScript. Portfolio, projects, and writing by Avik Mukherjee.",
  keywords: [
    "developer",
    "web",
    "software",
    "engineer",
    "react",
    "next",
    "next.js",
    "typescript",
    "full stack",
    "full-stack",
    "Avik",
    "Mukherjee",
    "Avik Mukherjee",
    "portfolio",
    "projects",
    "blog",
    "India"
  ],
  openGraph: {
    title: "Avik Mukherjee",
    description: "Full-stack software developer specializing in Next.js, React, and TypeScript.",
    url: "https://www.avikmukherjee.me/",
    siteName: "Avik Mukherjee's Portfolio",
    images: [
      {
        url: "/og",
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
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/my-favicon/web-app-manifest-192x192.png",
        href: "/my-favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        rel: "icon",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/my-favicon/favicon.svg",
        type: "image/svg+xml",
        rel: "icon",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/my-favicon/web-app-manifest-192x192-dark.png",
        href: "/my-favicon/web-app-manifest-192x192-dark.png",
        sizes: "192x192",
        type: "image/png",
        rel: "icon",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/my-favicon/favicon.svg",
        type: "image/svg+xml",
        rel: "icon",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/my-favicon/favicon.ico",
        href: "/my-favicon/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/my-favicon/favicon-dark.ico",
        href: "/my-favicon/favicon-dark.ico",
      },
    ],
    apple: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/my-favicon/apple-icon.png",
        href: "/my-favicon/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/my-favicon/apple-icon.png",
        href: "/my-favicon/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  twitter: {
    title: "Avik Mukherjee",
    card: "summary_large_image",
    creator: "@avikm744",
    site: "@avikm744",
    siteId: "@avikm744",
    description: "Full-stack software developer specializing in Next.js, React, and TypeScript.",
    images: ["/og"]
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
