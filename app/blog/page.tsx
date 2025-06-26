import { Metadata } from "next";
import BlogList from "@/components/blog/blog-list";
import BackNavigation from "@/components/back-navigation";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on design, development, and technology.",
  openGraph: {
    title: "Writing | Avik Mukherjee",
    description: "Thoughts on design, development, and technology.",
    url: "https://www.avikmukherjee.me/blog",
    images: ["https://www.avikmukherjee.me/og-image.jpg"],
    siteName: "Avik Mukherjee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Writing | Avik Mukherjee",
    card: "summary_large_image",
    images: ["https://www.avikmukherjee.me/og-image.jpg"],
    description: "Thoughts on design, development, and technology.",
  },
};

export default async function BlogPage() {
  try {
    return (
      <main className="mb-32 text-neutral-400">
        <BackNavigation href="/">back</BackNavigation>
        
        <header className="mt-6 mb-12">
          <h1 className="text-neutral-100 text-xl font-medium mb-2">writing</h1>
          <p className="text-neutral-400">Thoughts on design, development, and technology.</p>
        </header>

        <section>
          <BlogList />
        </section>
      </main>
    )
  } catch (error) {
    console.error("Error in blog page:", error)
    return (
      <main className="mb-32 text-neutral-400">
        <BackNavigation href="/">back</BackNavigation>
        <h1 className="text-neutral-100 text-xl font-medium mb-2">Error</h1>
        <p>There was an error loading the blog posts. Please try again later.</p>
      </main>
    )
  }
}

