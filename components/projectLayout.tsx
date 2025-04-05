import type React from "react"
import Link from "next/link"
import Layout from "./layout"

interface BlogLayoutProps {
  children: React.ReactNode
  backLink?: string
  backText?: string
}

export default function ProjectLayout({ children, backLink = "/", backText = "← back" }: BlogLayoutProps) {
  return (
    <Layout>
      <div className="mb-8">
        <Link href={backLink} className="text-white/70 hover:text-white inline-block">
          {backText}
        </Link>
      </div>
      {children}
    </Layout>
  )
}

