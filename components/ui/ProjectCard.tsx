import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/data'
import { CategoryBadge, ArrowLink } from '@/components/ui'

interface ProjectCardProps {
  project: Project
  priority?: boolean
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.id}`} className="group block">
      <div className="card-hover">
        {/* Image */}
        <div className="img-zoom relative aspect-[4/3] overflow-hidden bg-[#e8c99a]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="overlay-dark" />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#c4922e]/0 group-hover:bg-[#c4922e]/10 transition-colors duration-500" />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <CategoryBadge category={project.category} />
          </div>
          {/* View label on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <span className="bg-[#fdf9f3]/90 text-[#1a1714] text-xs tracking-[0.2em] uppercase px-5 py-2.5 font-body">
              View Project
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="pt-5 pb-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-light text-[#1a1714] group-hover:text-[#c4922e] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-[#8a7f78] tracking-wide font-body">
                {project.location} · {project.year}
              </p>
            </div>
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#8a7f78] font-body whitespace-nowrap pt-1">
              {project.style}
            </span>
          </div>
          <p className="mt-3 text-sm text-[#8a7f78] font-body font-light leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
