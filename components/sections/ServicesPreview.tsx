import Link from 'next/link'
import { services } from '@/lib/data'
import { SectionHeader } from '@/components/ui'
import ServiceCard from '@/components/ui/ServiceCard'

export default function ServicesPreview() {
  const previewServices = services.slice(0, 3)

  return (
    <section className="section-pad bg-[#fdf9f3]">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <SectionHeader
            eyebrow="What We Do"
            title={`Design Services\nTailored for You`}
            subtitle="From intimate residential spaces to landmark commercial projects, our expertise spans every facet of the built environment."
          />
          <Link href="/services" className="btn-gold flex-shrink-0 self-start md:self-auto">
            All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {previewServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="compact" />
          ))}
        </div>

        {/* Feature strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e8c99a]/30 border border-[#e8c99a]/30">
          {[
            { icon: '◈', label: 'Bespoke Design' },
            { icon: '◈', label: 'Full Project Management' },
            { icon: '◈', label: 'Luxury Material Sourcing' },
            { icon: '◈', label: '18+ Years Experience' },
          ].map((item) => (
            <div key={item.label} className="bg-[#fdf9f3] px-6 py-5 flex items-center gap-3">
              <span className="text-[#c4922e] text-lg">{item.icon}</span>
              <span className="text-xs tracking-[0.15em] uppercase text-[#8a7f78] font-body">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
