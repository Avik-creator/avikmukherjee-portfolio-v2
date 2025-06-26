import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { CustomMDX } from "@/components/mdx";
import BackNavigation from "@/components/back-navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string[]}>;
}) {
  const {slug} = await params;
  try {
    const slugPath = slug.join("/")
    const post = await getPostBySlug(slugPath)

    if (!post) {
      return {
        title: "Post Not Found",
      }
    }

    return {
      title: `${post.title} | Avik Mukherjee`,
      description: post.excerpt,
      openGraph: {
        title: `${post.title} | Avik Mukherjee`,
        description: post.excerpt,
        url: `https://www.avikmukherjee.me/blog/${slugPath}`,
        images: ["https://www.avikmukherjee.me/og-image.jpg"],
        siteName: "Avik Mukherjee",
        locale: "en_US",
        type: "article",
      },
      twitter: {
        title: `${post.title} | Avik Mukherjee`,
        card: "summary_large_image",
        images: ["https://www.avikmukherjee.me/og-image.jpg"],
        description: post.excerpt,
      },
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Error",
    }
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()

    return posts.map((post) => ({
      slug: post.slug.split("/"),
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default async function Page({ params }: { params: Promise<{slug: string[]}> }) {
  const {slug} = await params;
  
  try {
    const slugPath = slug.join("/")
    const post = await getPostBySlug(slugPath)

    if (!post) {
      notFound()
    }

    return (
      <main className="mb-32 text-neutral-400">
        <BackNavigation href="/blog">back</BackNavigation>
        
        <header className="mt-6 mb-8">
          <h1 className="text-neutral-100 text-xl font-medium mb-2">{post.title}</h1>
          <p className="text-neutral-500 text-sm">{post.date}</p>
        </header>

        <article className="prose prose-invert prose-neutral max-w-none">
          <CustomMDX source={post.content}/>
        </article>
      </main>
    )
  } catch (error) {
    console.error("Error in blog post page:", error)
    return (
      <main className="mb-32 text-neutral-400">
        <BackNavigation href="/blog">back</BackNavigation>
        <h1 className="text-neutral-100 text-xl font-medium mb-2">Error</h1>
        <p>There was an error loading this blog post. Please try again later.</p>
      </main>
    )
  }
}
