import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avikmukherjee.tech"),
  title: {
    default: "Avik Mukherjee",
    template: "%s | Avik Mukherjee",
  },
  description: "My personal site to showcase my developer work and projects.",
  keywords: ["developer", "web", "software", "engineer", "react", "next", "Avik", "Mukherjee", "Avik Mukherjee", "portfolio", "projects", "blog"],
  openGraph: {
    description: "My personal site to showcase my developer work and projects.",
    title: "Avik Mukherjee",
    type: "website",
    siteName: "Avik Mukherjee",
    locale: "en_US",
    url: "https://avikmukherjee.me/",
    images: [
      {
        url: "https://avikmukherjee.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Avik Mukherjee",
      },
    ]
  },
  twitter:{
    card: "summary_large_image",
    description: "My personal site to showcase my developer work and projects.",
    title: "Avik Mukherjee",
    images: [
      {
        url: "https://avikmukherjee.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Avik Mukherjee",
      },
    ]
  },
  icons:{
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
        defer
        data-domain="avikmukherjee.tech"
        src="https://webtracker.avikmukherjee.tech/tracking-script.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
