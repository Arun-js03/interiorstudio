import Image from 'next/image'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#1a1714]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80"
          alt="Luxury interior"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1714] via-[#1a1714]/90 to-[#1a1714]/60" />
      </div>

      <div className="container-xl relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#c4922e]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#d4a853] font-body">
              Begin Your Journey
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#fdf9f3] leading-tight">
            Ready to Transform
            <span className="block italic text-[#fdf9f3]/70">Your Space?</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-[#fdf9f3]/50 font-body font-light leading-relaxed max-w-lg">
            Every extraordinary space begins with a single conversation. Tell us about your vision, and we will show you what is possible.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-gold border-[#c4922e] text-[#d4a853] hover:bg-[#c4922e] hover:text-white hover:border-[#c4922e] justify-center sm:justify-start">
              Start a Conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#fdf9f3]/50 hover:text-[#fdf9f3] transition-colors duration-300 font-body justify-center sm:justify-start">
              Browse Portfolio
              <span className="w-5 h-px bg-current inline-block" />
            </Link>
          </div>

          {/* Contact info */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: 'Email', value: 'hello@elarastudio.com', href: 'mailto:hello@elarastudio.com' },
              { label: 'Phone', value: '+44 207 123 4567', href: 'tel:+442071234567' },
              { label: 'Studio', value: 'London · New York · Paris', href: '/contact' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-[9px] tracking-[0.3em] uppercase text-[#fdf9f3]/25 font-body mb-1">{item.label}</div>
                <a href={item.href} className="text-sm text-[#fdf9f3]/50 hover:text-[#c4922e] transition-colors font-body">
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
