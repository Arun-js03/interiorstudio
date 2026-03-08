import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/data'
import { SectionHeader, CategoryBadge } from '@/components/ui'

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <SectionHeader
            eyebrow="Featured Work"
            title={`Spaces That\nInspire Living`}
          />
          <Link href="/portfolio" className="btn-dark flex-shrink-0 self-start md:self-auto">
            View All Projects
          </Link>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large featured project */}
          <div className="lg:col-span-2 lg:row-span-2">
            <Link href={`/portfolio/${featured[0]?.id}`} className="group block h-full">
              <div className="img-zoom relative h-72 md:h-full min-h-[400px] overflow-hidden bg-[#e8c99a]">
                <Image
                  src={featured[0]?.coverImage || ''}
                  alt={featured[0]?.title || ''}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="overlay-dark" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <CategoryBadge category={featured[0]?.category || ''} />
                  <h3 className="font-display text-3xl md:text-4xl font-light text-[#fdf9f3] mt-3 group-hover:text-[#d4a853] transition-colors duration-300">
                    {featured[0]?.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#fdf9f3]/60 font-body font-light">
                    {featured[0]?.location} · {featured[0]?.year}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#d4a853] text-xs tracking-[0.2em] uppercase font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                    <span className="w-5 h-px bg-[#d4a853] inline-block" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Smaller projects */}
          {featured.slice(1, 4).map((project) => (
            <Link key={project.id} href={`/portfolio/${project.id}`} className="group block">
              <div className="img-zoom relative h-60 overflow-hidden bg-[#e8c99a]">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="overlay-dark" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <CategoryBadge category={project.category} />
                  <h3 className="font-display text-xl font-light text-[#fdf9f3] mt-2 group-hover:text-[#d4a853] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#fdf9f3]/50 font-body">{project.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
