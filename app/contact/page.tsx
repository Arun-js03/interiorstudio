'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end pb-14 overflow-hidden bg-[#1a1714]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600&q=80"
            alt="Contact Elara Studio"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714] to-transparent" />
        </div>
        <div className="container-xl relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#c4922e]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#d4a853] font-body">Let&apos;s Talk</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#fdf9f3]">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main */}
      <section className="section-pad bg-[#fdf9f3]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-10">
                <h2 className="font-display text-3xl md:text-4xl font-light text-[#1a1714]">
                  Start a Conversation
                </h2>
                <p className="mt-3 text-[#8a7f78] font-body font-light leading-relaxed">
                  Whether you have a clear vision or simply a feeling, we would love to hear from you. All enquiries receive a personal response within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-10 border border-[#c4922e] bg-[#fdf9f3] text-center">
                  <div className="w-14 h-14 border border-[#c4922e] flex items-center justify-center mx-auto mb-5">
                    <svg className="w-6 h-6 text-[#c4922e]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-light text-[#1a1714] mb-3">Thank You</h3>
                  <p className="text-[#8a7f78] font-body font-light text-sm">
                    Your message has been received. A member of our team will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-[#8a7f78] font-body mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full border-b border-[#e8c99a] focus:border-[#c4922e] bg-transparent py-3 text-sm text-[#1a1714] font-body font-light outline-none transition-colors placeholder:text-[#8a7f78]/40"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-[#8a7f78] font-body mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full border-b border-[#e8c99a] focus:border-[#c4922e] bg-transparent py-3 text-sm text-[#1a1714] font-body font-light outline-none transition-colors placeholder:text-[#8a7f78]/40"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-[#8a7f78] font-body mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full border-b border-[#e8c99a] focus:border-[#c4922e] bg-transparent py-3 text-sm text-[#1a1714] font-body font-light outline-none transition-colors placeholder:text-[#8a7f78]/40"
                        placeholder="+44 000 000 0000"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-[#8a7f78] font-body mb-2">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full border-b border-[#e8c99a] focus:border-[#c4922e] bg-transparent py-3 text-sm text-[#1a1714] font-body font-light outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option>Home Interior Design</option>
                        <option>Office Interior Design</option>
                        <option>Commercial Interior Design</option>
                        <option>Renovation & Remodeling</option>
                        <option>3D Visualization</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-[#8a7f78] font-body mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border-b border-[#e8c99a] focus:border-[#c4922e] bg-transparent py-3 text-sm text-[#1a1714] font-body font-light outline-none transition-colors resize-none placeholder:text-[#8a7f78]/40"
                      placeholder="Tell us about your project, space, and vision..."
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="btn-dark">
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Details Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Studios */}
              <div>
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c4922e] font-body mb-6">Our Studios</h3>
                <div className="space-y-6">
                  {[
                    { city: 'London', address: '14 Mayfair Square, London, W1K 4AB', phone: '+44 207 123 4567', hours: 'Mon–Fri, 9am–6pm' },
                    { city: 'New York', address: '432 Park Avenue, New York, NY 10022', phone: '+1 212 456 7890', hours: 'Mon–Fri, 9am–6pm EST' },
                    { city: 'Paris', address: '18 Rue du Faubourg, 75008 Paris', phone: '+33 1 42 34 56 78', hours: 'Mon–Fri, 9h–18h' },
                  ].map((studio) => (
                    <div key={studio.city} className="pb-6 border-b border-[#e8c99a]/30">
                      <div className="font-display text-lg font-light text-[#1a1714] mb-2">{studio.city}</div>
                      <div className="text-sm text-[#8a7f78] font-body font-light space-y-1">
                        <p>{studio.address}</p>
                        <p>
                          <a href={`tel:${studio.phone.replace(/\s/g,'')}`} className="hover:text-[#c4922e] transition-colors">
                            {studio.phone}
                          </a>
                        </p>
                        <p className="text-[#8a7f78]/60 text-xs">{studio.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c4922e] font-body mb-3">Email</h3>
                <a href="mailto:hello@elarastudio.com" className="text-sm text-[#3d3530] font-body hover:text-[#c4922e] transition-colors">
                  hello@elarastudio.com
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 bg-[#e8c99a]/30 border border-[#e8c99a]/40 overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <svg className="w-8 h-8 text-[#c4922e]/40" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#8a7f78]/60 font-body">
                    Map · 14 Mayfair Square, London
                  </span>
                  <span className="text-[10px] text-[#8a7f78]/40 font-body">Google Maps Placeholder</span>
                </div>
                {/* Grid lines for map effect */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(#c4922e 1px, transparent 1px), linear-gradient(90deg, #c4922e 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
