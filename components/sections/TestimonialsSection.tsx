import { testimonials } from '@/lib/data'
import { SectionHeader } from '@/components/ui'
import TestimonialCard from '@/components/ui/TestimonialCard'

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-[#fdf9f3]">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Client Stories"
          title={`Words from\nThose We've Served`}
          subtitle="We measure success not in awards — but in the delight of clients who cannot imagine living or working in any other space."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Logo strip placeholder */}
        <div className="mt-16 pt-12 border-t border-[#e8c99a]/40">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-[#8a7f78]/50 font-body mb-8">
            As featured in
          </p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-30">
            {['Architectural Digest', 'Elle Decoration', 'Wallpaper*', 'Dezeen', 'Frame Magazine'].map((pub) => (
              <span key={pub} className="font-display text-lg text-[#3d3530] italic">{pub}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
