
import BlogList from "@/components/blog/blog-list";
import BackNavigation from "@/components/back-navigation";



export default async function BlogPage() {
  try {
    return (
      <main className="mb-32 text-gray-700 dark:text-neutral-400">
        <BackNavigation href="/">back</BackNavigation>

        <header className="mt-6 mb-12">
          <h1 className="text-gray-900 dark:text-neutral-100 text-xl font-medium mb-2">writing</h1>
          <p className="text-gray-600 dark:text-neutral-400">I write about development techniques, project insights, and lessons learned building software.</p>
        </header>

        <section>
          <BlogList />
        </section>
      </main>
    )
  } catch (error) {
    console.error("Error in blog page:", error)
    return (
      <main className="mb-32 text-gray-700 dark:text-neutral-400">
        <BackNavigation href="/">back</BackNavigation>
        <h1 className="text-gray-900 dark:text-neutral-100 text-xl font-medium mb-2">Error</h1>
        <p className="text-gray-600 dark:text-neutral-400">There was an error loading the blog posts. Please try again later.</p>
      </main>
    )
  }
}

