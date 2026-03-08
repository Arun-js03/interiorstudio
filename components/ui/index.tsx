import Link from 'next/link'

// Section Header Component
interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeader({ eyebrow, title, subtitle, centered = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
          <span className={`h-px w-10 ${light ? 'bg-[#fdf9f3]/30' : 'bg-[#c4922e]'}`} />
          <span className={`text-[10px] tracking-[0.35em] uppercase font-body ${light ? 'text-[#d4a853]' : 'text-[#c4922e]'}`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight ${light ? 'text-[#fdf9f3]' : 'text-[#1a1714]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg font-body font-light leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-[#fdf9f3]/60' : 'text-[#8a7f78]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// Stats Counter
interface StatProps {
  value: string
  label: string
  light?: boolean
}

export function Stat({ value, label, light = false }: StatProps) {
  return (
    <div>
      <div className={`font-display text-5xl md:text-6xl font-light ${light ? 'text-[#fdf9f3]' : 'text-[#1a1714]'}`}>
        {value}
      </div>
      <div className={`mt-2 text-xs tracking-[0.2em] uppercase font-body ${light ? 'text-[#fdf9f3]/50' : 'text-[#8a7f78]'}`}>
        {label}
      </div>
    </div>
  )
}

// Gold Divider
export function GoldDivider({ className = '' }: { className?: string }) {
  return <div className={`h-px bg-[#c4922e] w-16 ${className}`} />
}

// Tag Badge
export function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block text-[10px] tracking-[0.2em] uppercase border border-[#e8c99a] text-[#8a7f78] px-3 py-1 font-body">
      {label}
    </span>
  )
}

// Arrow Link
export function ArrowLink({ href, label, light = false }: { href: string; label: string; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-body transition-all duration-300 ${
        light ? 'text-[#d4a853] hover:text-[#fdf9f3]' : 'text-[#c4922e] hover:text-[#1a1714]'
      }`}
    >
      {label}
      <span className="inline-block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
    </Link>
  )
}

// Project Category Badge
export function CategoryBadge({ category }: { category: string }) {
  const labels: Record<string, string> = {
    'living-room': 'Living Room',
    'bedroom': 'Bedroom',
    'kitchen': 'Kitchen',
    'office': 'Office',
  }
  return (
    <span className="inline-block text-[10px] tracking-[0.2em] uppercase bg-[#c4922e] text-white px-3 py-1 font-body">
      {labels[category] || category}
    </span>
  )
}

// Rating Stars
export function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < rating ? 'text-[#c4922e]' : 'text-[#e8c99a]'}`}>★</span>
      ))}
    </div>
  )
}
