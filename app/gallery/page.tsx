'use client'

import { useState } from 'react'
import Image from 'next/image'
import { galleryImages } from '@/lib/data'

export default function GalleryPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1a1714]">
        <div className="container-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#c4922e]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#d4a853] font-body">Imagery</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#fdf9f3]">
              Gallery
            </h1>
            <p className="text-[#fdf9f3]/40 font-body font-light max-w-md">
              A curated selection of spaces, details, and moments from our most celebrated projects.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="bg-[#fdf9f3] py-12 md:py-20">
        <div className="container-xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, index) => {
              const isTall = index % 5 === 0 || index % 7 === 0
              return (
                <div
                  key={img.id}
                  className="break-inside-avoid group relative overflow-hidden bg-[#e8c99a] cursor-pointer"
                  onMouseEnter={() => setHoveredId(img.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setLightboxSrc(img.src)}
                >
                  <div className={`relative ${isTall ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className={`object-cover transition-transform duration-700 ease-out ${
                        hoveredId === img.id ? 'scale-110' : 'scale-100'
                      }`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Hover overlay */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        hoveredId === img.id
                          ? 'bg-[#1a1714]/60'
                          : 'bg-transparent'
                      }`}
                    />

                    {/* Hover content */}
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                        hoveredId === img.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {/* Animated border */}
                      <div
                        className={`border border-[#fdf9f3]/40 absolute transition-all duration-500 ${
                          hoveredId === img.id
                            ? 'inset-4'
                            : 'inset-1/2'
                        }`}
                      />

                      <span className="text-[#fdf9f3] font-display text-2xl font-light italic mb-2 relative z-10">
                        {img.alt}
                      </span>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#d4a853] font-body relative z-10">
                        {img.category}
                      </span>

                      {/* Expand icon */}
                      <div className="mt-5 w-10 h-10 border border-[#fdf9f3]/40 flex items-center justify-center relative z-10">
                        <svg className="w-4 h-4 text-[#fdf9f3]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] bg-[#1a1714]/95 flex items-center justify-center p-4 md:p-12"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 border border-[#fdf9f3]/20 flex items-center justify-center text-[#fdf9f3]/60 hover:text-[#fdf9f3] transition-colors z-10"
            onClick={() => setLightboxSrc(null)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative w-full max-w-5xl max-h-[85vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxSrc}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  )
}
