import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/footer";
import { Instrument_Serif } from "next/font/google";
import { GeistMono } from 'geist/font/mono';
import { cn } from "@/lib/utils";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avikmukherjee.me/"),
  title: {
    template: "%s | Avik Mukherjee",
    default: "Avik Mukherjee — Full-Stack Web Developer & Software Engineer",
  },
  description: "Avik Mukherjee is a full-stack software developer specializing in Next.js, React, TypeScript, and Node.js. Explore projects, experience, and technical writing.",
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
    title: "Avik Mukherjee — Full-Stack Web Developer & Software Engineer",
    description: "Avik Mukherjee is a full-stack software developer specializing in Next.js, React, TypeScript, and Node.js. Explore projects, experience, and technical writing.",
    url: "https://www.avikmukherjee.me/",
    siteName: "Avik Mukherjee's Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Avik Mukherjee — Full-Stack Software Developer Portfolio",
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
        url: "/my-favicon/favicon.ico",
        href: "/my-favicon/favicon.ico",
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
    title: "Avik Mukherjee — Full-Stack Web Developer & Software Engineer",
    card: "summary_large_image",
    creator: "@avikm744",
    site: "@avikm744",
    siteId: "@avikm744",
    description: "Avik Mukherjee is a full-stack software developer specializing in Next.js, React, TypeScript, and Node.js. Explore projects, experience, and technical writing.",
    images: ["/og-image.webp"]
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Avik Mukherjee",
              url: "https://www.avikmukherjee.me",
              image: "https://www.avikmukherjee.me/og-image.webp",
              sameAs: [
                "https://x.com/avikm744",
                "https://github.com/Avik-creator",
                "https://www.linkedin.com/in/avik-mukherjee-8ab9911bb/",
                "https://peerlist.io/avikmukherjee/",
              ],
              jobTitle: "Full-Stack Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "SuperAlign AI",
                url: "https://www.superalign.ai",
              },
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Full-Stack Development",
                "Web Applications",
              ],
              description:
                "Avik Mukherjee is a full-stack software developer specializing in Next.js, React, TypeScript, and Node.js, building scalable web applications.",
            }),
          }}
        />
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
        <main className="flex-1 pt-24">{children}

        </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
