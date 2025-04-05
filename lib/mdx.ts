import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"

const postsDirectory = path.join(process.cwd(), "content/blog")

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

// Recursively get all markdown files inside a directory and its subdirectories
function getAllMarkdownFiles(dir: string, files: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      getAllMarkdownFiles(fullPath, files)
    } else if (entry.isFile() && fullPath.endsWith(".md")) {
      files.push(fullPath)
    }
  }

  return files
}

export async function getAllPosts(): Promise<Post[]> {
  const filePaths = getAllMarkdownFiles(postsDirectory)

  const allPostsData = await Promise.all(
    filePaths.map(async (fullPath) => {
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const matterResult = matter(fileContents)

      const processedContent = await remark()
        .use(remarkGfm)
        .use(html, { sanitize: false })
        .process(matterResult.content)

      const content = processedContent.toString()

      // Generate slug based on relative path from postsDirectory
      const relativePath = path.relative(postsDirectory, fullPath)
      const slug = relativePath.replace(/\.md$/, "").replace(/\\/g, "/")

      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.publishDate,
        excerpt: matterResult.data.description || "",
        content,
      }
    })
  )

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Get all .md file paths in subfolders
    const filePaths = getAllMarkdownFiles(postsDirectory)

    // Try to find the full path that matches the given slug
    const targetPath = filePaths.find((fullPath) => {
      const relativePath = path.relative(postsDirectory, fullPath)
      const currentSlug = relativePath.replace(/\.md$/, "").replace(/\\/g, "/")
      return currentSlug === slug
    })

    if (!targetPath) {
      return null
    }

    const fileContents = fs.readFileSync(targetPath, "utf8")
    const matterResult = matter(fileContents)

    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .process(matterResult.content)

    const content = processedContent.toString()

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.publishDate,
      excerpt: matterResult.data.description || "",
      content,
    }
  } catch (error) {
    console.error("Error getting post by slug:", error)
    return null
  }
}
