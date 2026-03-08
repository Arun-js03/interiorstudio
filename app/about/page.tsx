import type { Metadata } from 'next'
import Image from 'next/image'
import { team } from '@/lib/data'
import { SectionHeader, Stat, GoldDivider } from '@/components/ui'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About — Elara Interior Studio',
  description: 'Learn about Elara Interior Studio — our story, mission, team, and design philosophy.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end pb-16 overflow-hidden bg-[#1a1714]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=80"
            alt="Elara Studio"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714] via-[#1a1714]/30 to-transparent" />
        </div>
        <div className="container-xl relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#c4922e]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#d4a853] font-body">Our Story</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#fdf9f3]">
            About Elara Studio
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad bg-[#fdf9f3]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title={`Design That\nEndures`}
              />
              <div className="space-y-5 text-[#8a7f78] font-body font-light leading-relaxed">
                <p>
                  Elara Interior Studio was founded in 2006 by Elara Voss with a singular conviction: that great design is not a luxury, but a necessity. That the spaces we inhabit shape how we think, feel, and live — and that everyone deserves spaces designed with intelligence and care.
                </p>
                <p>
                  Over eighteen years, we have grown from a two-person studio in Mayfair to an internationally recognised practice with studios in London, New York, and Paris. We have completed over 340 projects across 22 countries, and yet our approach remains unchanged: we listen first, design second.
                </p>
                <p>
                  Every project is a collaboration. We do not impose a signature style — we discover the aesthetic that lives within each client, and we give it form.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-8">
                <Stat value="18+" label="Years" />
                <Stat value="340+" label="Projects" />
                <Stat value="22" label="Countries" />
              </div>
            </div>

            <div className="relative">
              <div className="img-zoom relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                  alt="Elara Studio work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent box */}
              <div className="absolute -bottom-8 -left-8 bg-[#c4922e] text-white p-8 w-48 hidden lg:block">
                <div className="font-display text-4xl font-light">24</div>
                <div className="text-[10px] tracking-[0.2em] uppercase mt-1 font-body">Design Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-[#1a1714]">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="p-10 border border-[#fdf9f3]/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#c4922e]" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#c4922e] font-body">Our Mission</span>
              </div>
              <h3 className="font-display text-3xl font-light text-[#fdf9f3] mb-5">
                To design spaces that elevate everyday life
              </h3>
              <p className="text-[#fdf9f3]/50 font-body font-light leading-relaxed">
                We believe that a well-designed space is transformative. Our mission is to create interiors that do not merely look beautiful in photographs, but that feel extraordinary to live and work within — day after day, year after year.
              </p>
            </div>

            <div className="p-10 border border-[#fdf9f3]/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#c4922e]" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#c4922e] font-body">Our Vision</span>
              </div>
              <h3 className="font-display text-3xl font-light text-[#fdf9f3] mb-5">
                A world where design is measured by how it feels
              </h3>
              <p className="text-[#fdf9f3]/50 font-body font-light leading-relaxed">
                We envision a design culture that prioritises emotional resonance over visual spectacle. We want every space we create to become a place people love — not because it is impressive, but because it is deeply, specifically right for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-pad bg-[#fdf9f3]">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Our Philosophy"
            title={`The Art of\nConsidered Design`}
            subtitle="Five principles guide every decision we make — from the proportions of a room to the texture of a door handle."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#e8c99a]/30 border border-[#e8c99a]/30 mt-12">
            {[
              { num: '01', title: 'Listen First', desc: 'Every project begins with deep listening. We learn how our clients truly live before we pick up a pencil.' },
              { num: '02', title: 'Materials Matter', desc: 'We believe in honest, quality materials chosen for how they age and how they feel, not just how they photograph.' },
              { num: '03', title: 'Light is Architecture', desc: 'Natural and artificial light shape every space we design. We consider light as a primary material.' },
              { num: '04', title: 'Nothing Superfluous', desc: 'Every element must earn its place. We resist decoration for its own sake, seeking instead meaningful beauty.' },
              { num: '05', title: 'Timeless Over Trendy', desc: 'We design for how our clients will feel in ten years, not how the work will perform in a photoshoot.' },
            ].map((p) => (
              <div key={p.num} className="bg-[#fdf9f3] p-7">
                <div className="font-display text-4xl font-light text-[#e8c99a] mb-4">{p.num}</div>
                <h4 className="font-body text-sm font-light tracking-wide text-[#1a1714] mb-3 uppercase tracking-[0.1em]">{p.title}</h4>
                <p className="text-xs text-[#8a7f78] font-body font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <SectionHeader
            eyebrow="The Team"
            title={`The People Behind\nEvery Great Space`}
            subtitle="Our studio brings together designers, architects, and artisans united by a shared obsession with excellence."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="img-zoom relative aspect-[3/4] overflow-hidden bg-[#e8c99a]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#1a1714]/0 group-hover:bg-[#1a1714]/30 transition-colors duration-500" />
                </div>
                <div className="pt-5">
                  <h3 className="font-display text-xl font-light text-[#1a1714]">{member.name}</h3>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#c4922e] font-body mt-1">{member.role}</p>
                  <p className="mt-3 text-sm text-[#8a7f78] font-body font-light leading-relaxed line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
