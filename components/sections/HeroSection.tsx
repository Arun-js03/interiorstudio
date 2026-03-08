'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden bg-[#1a1714]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85"
          alt="Luxury interior design"
          fill
          className={`object-cover transition-all duration-[1.5s] ease-out ${loaded ? 'opacity-70 scale-100' : 'opacity-0 scale-105'}`}
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714] via-[#1a1714]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1714]/60 via-transparent to-transparent" />
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <div
          className="writing-mode-vertical text-[10px] tracking-[0.4em] uppercase text-[#fdf9f3]/25 font-body"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Elara Interior Studio · Est. 2006
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-[#fdf9f3]/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-[#c4922e] animate-pulse" style={{ height: '40%', animation: 'scrollPulse 2s ease-in-out infinite' }} />
        </div>
        <span className="text-[9px] tracking-[0.35em] uppercase text-[#fdf9f3]/30 font-body">Scroll</span>
      </div>

      {/* Content */}
      <div className="container-xl relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="h-px w-10 bg-[#c4922e]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#d4a853] font-body">
              Award-Winning Interior Studio
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#fdf9f3] leading-[1.05] transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Where Beauty
            <span className="block italic text-[#fdf9f3]/80">Meets Purpose</span>
          </h1>

          {/* Description */}
          <p
            className={`mt-7 text-base md:text-lg text-[#fdf9f3]/60 font-body font-light max-w-xl leading-relaxed transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            We craft timeless interior spaces that tell your story. From private residences to landmark commercial projects, every design begins with a single question: how do you want to feel?
          </p>

          {/* Buttons */}
          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[900ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link
              href="/portfolio"
              className="btn-dark inline-flex items-center gap-2 justify-center sm:justify-start hover:bg-[#c4922e]"
            >
              Explore Our Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="btn-gold justify-center sm:justify-start hover:bg-[#c4922e] hover:border-[#c4922e] hover:text-white border-[#fdf9f3]/40 text-[#fdf9f3] hover:border-[#fdf9f3]/40"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-16 md:mt-20 grid grid-cols-3 gap-px bg-[#fdf9f3]/10 transition-all duration-700 delay-[1100ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ maxWidth: '600px' }}
        >
          {[
            { value: '18+', label: 'Years of Excellence' },
            { value: '340+', label: 'Projects Completed' },
            { value: '24', label: 'Design Awards' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#1a1714]/60 backdrop-blur-sm px-6 py-5">
              <div className="font-display text-3xl font-light text-[#fdf9f3]">{stat.value}</div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#fdf9f3]/40 font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
