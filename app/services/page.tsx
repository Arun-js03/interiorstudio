import type { Metadata } from 'next'
import Image from 'next/image'
import { services } from '@/lib/data'
import { SectionHeader } from '@/components/ui'
import ServiceCard from '@/components/ui/ServiceCard'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services — Elara Interior Studio',
  description: 'Explore our full range of interior design services: residential, commercial, office, renovation, and 3D visualization.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end pb-16 overflow-hidden bg-[#1a1714]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Interior design services"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714] to-transparent" />
        </div>
        <div className="container-xl relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#c4922e]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#d4a853] font-body">What We Offer</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#fdf9f3]">
            Our Services
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[#fdf9f3] border-b border-[#e8c99a]/30">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl font-light text-[#3d3530] leading-relaxed italic">
              &ldquo;Every service we offer begins and ends in the same place — with a deep understanding of how you want to feel in your space.&rdquo;
            </p>
            <div className="mt-6 text-xs tracking-[0.25em] uppercase text-[#c4922e] font-body">— Elara Voss, Founder</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-[#fdf9f3]">
        <div className="container-xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image */}
                <div className="img-zoom relative aspect-[4/3] overflow-hidden bg-[#e8c99a]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#c4922e] font-body">
                      Service {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px w-10 bg-[#e8c99a]" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-light text-[#1a1714]">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-[#8a7f78] font-body font-light leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#c4922e] rounded-full flex-shrink-0" />
                        <span className="text-sm text-[#3d3530] font-body font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <a href="/contact" className="btn-gold">
                      Enquire About This Service
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-[#1a1714]">
        <div className="container-xl">
          <SectionHeader
            eyebrow="How We Work"
            title={`Our Design\nProcess`}
            subtitle="A clear, collaborative process that keeps you informed and involved at every stage."
            light
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
            {[
              { step: '01', title: 'Discovery', desc: 'We begin with an in-depth consultation to understand your lifestyle, aspirations, and constraints. We listen more than we speak.' },
              { step: '02', title: 'Concept', desc: 'We develop a design concept presented through mood boards, spatial layouts, and material selections for your review and feedback.' },
              { step: '03', title: 'Development', desc: 'The approved concept is developed into detailed construction drawings, specifications, and a full project programme.' },
              { step: '04', title: 'Delivery', desc: 'We manage contractors, suppliers, and installation to deliver your space to the highest standard, on time and on budget.' },
            ].map((step) => (
              <div key={step.step} className="border border-[#fdf9f3]/10 p-8">
                <div className="font-display text-5xl font-light text-[#c4922e]/40 mb-6">{step.step}</div>
                <h4 className="font-display text-xl font-light text-[#fdf9f3] mb-3">{step.title}</h4>
                <p className="text-sm text-[#fdf9f3]/40 font-body font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
