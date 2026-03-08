'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projects } from '@/lib/data'
import ProjectCard from '@/components/ui/ProjectCard'

const PROJECTS_PER_PAGE = 6

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'living-room', label: 'Living Room' },
  { id: 'bedroom', label: 'Bedroom' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'office', label: 'Office' },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [page, setPage] = useState(1)

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const totalPages = Math.ceil(filtered.length / PROJECTS_PER_PAGE)
  const paginated = filtered.slice((page - 1) * PROJECTS_PER_PAGE, page * PROJECTS_PER_PAGE)

  const handleCategory = (cat: string) => {
    setActiveCategory(cat)
    setPage(1)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end pb-16 overflow-hidden bg-[#1a1714]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
            alt="Portfolio"
            fill
            className="object-cover opacity-35"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714] to-transparent" />
        </div>
        <div className="container-xl relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#c4922e]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#d4a853] font-body">Our Work</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#fdf9f3]">
            Portfolio
          </h1>
          <p className="mt-4 text-[#fdf9f3]/50 font-body font-light max-w-lg">
            {projects.length} projects across {categories.length - 1} categories, spanning four continents.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-pad bg-[#fdf9f3]">
        <div className="container-xl">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-12 border-b border-[#e8c99a]/40 pb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.id)}
                className={`px-5 py-2 text-xs tracking-[0.2em] uppercase font-body transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#1a1714] text-[#fdf9f3]'
                    : 'border border-[#e8c99a] text-[#8a7f78] hover:border-[#1a1714] hover:text-[#1a1714]'
                }`}
              >
                {cat.label}
              </button>
            ))}
            <span className="ml-auto text-xs text-[#8a7f78] font-body self-center hidden md:block">
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Projects Grid */}
          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {paginated.map((project, i) => (
                <ProjectCard key={project.id} project={project} priority={i < 3} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-[#8a7f78] font-body font-light">No projects found in this category.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-10 h-10 border border-[#e8c99a] text-[#8a7f78] hover:border-[#1a1714] hover:text-[#1a1714] disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 text-xs font-body tracking-wide transition-colors ${
                    page === i + 1
                      ? 'bg-[#1a1714] text-[#fdf9f3]'
                      : 'border border-[#e8c99a] text-[#8a7f78] hover:border-[#1a1714] hover:text-[#1a1714]'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-10 h-10 border border-[#e8c99a] text-[#8a7f78] hover:border-[#1a1714] hover:text-[#1a1714] disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
