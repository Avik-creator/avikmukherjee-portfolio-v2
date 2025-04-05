import type { MDXComponents } from "mdx/types"
import Link from "next/link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-2xl font-medium mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-medium mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-medium mt-5 mb-2">{children}</h3>,
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    a: ({ href, children }) => (
      <Link href={href || "#"} className="text-white underline hover:opacity-80">
        {children}
      </Link>
    ),
    ul: ({ children }) => <ul className="mb-4 pl-6 list-disc">{children}</ul>,
    ol: ({ children }) => <ol className="mb-4 pl-6 list-decimal">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-white/20 pl-4 italic my-4">{children}</blockquote>
    ),
    code: ({ children }) => <code className="bg-white/10 rounded px-1 py-0.5 font-mono text-sm">{children}</code>,
    pre: ({ children }) => <pre className="bg-white/10 p-4 rounded-md overflow-x-auto mb-4 text-sm">{children}</pre>,
    ...components,
  }
}

