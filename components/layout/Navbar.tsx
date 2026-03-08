'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isTransparent = isHome && !scrolled && !menuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-[#fdf9f3]/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span
              className={`font-display text-2xl md:text-3xl font-light tracking-widest uppercase transition-colors duration-300 ${
                isTransparent ? 'text-[#fdf9f3]' : 'text-[#1a1714]'
              }`}
            >
              Elara
            </span>
            <span
              className={`text-[10px] tracking-[0.3em] uppercase font-body font-light transition-colors duration-300 ${
                isTransparent ? 'text-[#d4a853]' : 'text-[#c4922e]'
              }`}
            >
              Interior Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link text-xs tracking-[0.2em] uppercase font-body font-light transition-colors duration-300 ${
                    pathname === link.href
                      ? isTransparent ? 'text-[#d4a853] active' : 'text-[#c4922e] active'
                      : isTransparent
                      ? 'text-[#fdf9f3]/80 hover:text-[#fdf9f3]'
                      : 'text-[#3d3530]/70 hover:text-[#1a1714]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`text-xs tracking-[0.2em] uppercase font-body border px-6 py-2.5 transition-all duration-300 ${
                isTransparent
                  ? 'border-[#fdf9f3]/50 text-[#fdf9f3] hover:border-[#fdf9f3] hover:bg-[#fdf9f3]/10'
                  : 'border-[#c4922e] text-[#c4922e] hover:bg-[#c4922e] hover:text-white'
              }`}
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-px transition-all duration-300 ${
                  isTransparent ? 'bg-[#fdf9f3]' : 'bg-[#1a1714]'
                } ${
                  menuOpen
                    ? i === 0
                      ? 'w-6 rotate-45 translate-y-2.5'
                      : i === 1
                      ? 'w-0 opacity-0'
                      : 'w-6 -rotate-45 -translate-y-2.5'
                    : i === 1
                    ? 'w-4'
                    : 'w-6'
                }`}
              />
            ))}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden bg-[#fdf9f3] ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-6 px-6 gap-1 border-t border-[#e8c99a]/30">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-3 text-sm tracking-[0.15em] uppercase font-body font-light border-b border-[#e8c99a]/20 transition-colors ${
                  pathname === link.href ? 'text-[#c4922e]' : 'text-[#3d3530]/70'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link href="/contact" className="btn-gold w-full justify-center">
              Get in touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
