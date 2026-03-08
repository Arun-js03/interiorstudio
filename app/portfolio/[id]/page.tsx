import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/data'
import { CategoryBadge, Tag } from '@/components/ui'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: `${project.title} — Elara Interior Studio`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id)
  if (!project) notFound()

  const related = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden bg-[#1a1714]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover opacity-75"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714] via-[#1a1714]/20 to-transparent" />

        {/* Back button */}
        <div className="absolute top-28 left-0 right-0">
          <div className="container-xl">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#fdf9f3]/60 hover:text-[#fdf9f3] transition-colors font-body"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-xl pb-12">
            <CategoryBadge category={project.category} />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#fdf9f3] mt-3">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 mt-4 text-xs text-[#fdf9f3]/50 font-body">
              <span>{project.location}</span>
              <span className="opacity-30">·</span>
              <span>{project.year}</span>
              <span className="opacity-30">·</span>
              <span>{project.style}</span>
              <span className="opacity-30">·</span>
              <span>{project.area}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-pad bg-[#fdf9f3]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left: Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#c4922e]" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#c4922e] font-body">The Project</span>
              </div>
              <p className="font-body font-light text-[#3d3530] leading-relaxed text-lg whitespace-pre-line">
                {project.fullDescription}
              </p>

              {/* Image grid */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((img, i) => (
                  <div key={i} className="img-zoom relative aspect-[4/3] overflow-hidden bg-[#e8c99a]">
                    <Image
                      src={img}
                      alt={`${project.title} - view ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Details sidebar */}
            <div className="space-y-8">
              {/* Client Requirements */}
              <div className="p-7 border border-[#e8c99a]/40 bg-white">
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c4922e] font-body mb-4">Client Requirements</h3>
                <p className="text-sm text-[#8a7f78] font-body font-light leading-relaxed">
                  {project.clientRequirements}
                </p>
              </div>

              {/* Project Details */}
              <div className="p-7 border border-[#e8c99a]/40 bg-white">
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c4922e] font-body mb-5">Project Details</h3>
                <dl className="space-y-4">
                  {[
                    { label: 'Client', value: project.client },
                    { label: 'Location', value: project.location },
                    { label: 'Year', value: project.year },
                    { label: 'Style', value: project.style },
                    { label: 'Area', value: project.area },
                  ].map((detail) => (
                    <div key={detail.label} className="flex justify-between gap-4 pb-3 border-b border-[#e8c99a]/30 last:border-0 last:pb-0">
                      <dt className="text-xs text-[#8a7f78] font-body">{detail.label}</dt>
                      <dd className="text-xs text-[#1a1714] font-body text-right">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Materials */}
              <div className="p-7 border border-[#e8c99a]/40 bg-white">
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c4922e] font-body mb-5">Materials Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((m) => (
                    <Tag key={m} label={m} />
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="p-7 border border-[#e8c99a]/40 bg-white">
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c4922e] font-body mb-5">Design Style</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="text-[10px] tracking-[0.15em] uppercase text-[#8a7f78] font-body bg-[#fdf9f3] border border-[#e8c99a]/40 px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="btn-dark w-full justify-center">
                Start a Similar Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-16 bg-white border-t border-[#e8c99a]/30">
          <div className="container-xl">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display text-2xl font-light text-[#1a1714]">Related Projects</h2>
              <Link href="/portfolio" className="text-xs tracking-[0.2em] uppercase text-[#c4922e] font-body hover:text-[#1a1714] transition-colors">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link key={p.id} href={`/portfolio/${p.id}`} className="group block">
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden bg-[#e8c99a]">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="overlay-dark" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-xl font-light text-[#fdf9f3] group-hover:text-[#d4a853] transition-colors">{p.title}</h3>
                      <p className="text-xs text-[#fdf9f3]/50 font-body mt-1">{p.location}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
