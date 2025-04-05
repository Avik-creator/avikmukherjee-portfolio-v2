import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white/90 flex justify-center py-16 px-4 md:px-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-xl font-medium mb-4">404 - Page Not Found</h1>
        <p className="mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="underline">
          Return Home
        </Link>
      </div>
    </main>
  )
}

