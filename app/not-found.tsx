import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdf9f3] flex items-center justify-center">
      <div className="text-center">
        <div className="font-display text-[140px] font-light text-[#e8c99a] leading-none">404</div>
        <h1 className="font-display text-3xl font-light text-[#1a1714] mt-4">Page Not Found</h1>
        <p className="mt-4 text-[#8a7f78] font-body font-light max-w-sm mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Link href="/" className="btn-dark">Return Home</Link>
          <Link href="/portfolio" className="btn-gold">View Portfolio</Link>
        </div>
      </div>
    </div>
  )
}
