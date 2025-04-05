import type React from "react"
import { JetBrains_Mono } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main
      className={`min-h-screen bg-black text-white/90 flex justify-center py-16 px-4 md:px-6 ${jetbrainsMono.variable} font-mono`}
    >
      <div className="max-w-2xl w-full">{children}</div>
    </main>
  )
}

