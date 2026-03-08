import Image from 'next/image'
import { Testimonial } from '@/lib/data'
import { Stars } from '@/components/ui'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-8 md:p-10 bg-white border border-[#e8c99a]/30 flex flex-col">
      <Stars rating={testimonial.rating} />
      <blockquote className="mt-6 font-display text-xl md:text-2xl font-light text-[#1a1714] leading-relaxed italic flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <div className="mt-8 pt-6 border-t border-[#e8c99a]/30 flex items-center gap-4">
        <div className="w-12 h-12 relative rounded-full overflow-hidden bg-[#e8c99a] flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <div className="font-body font-light text-[#1a1714] text-sm">{testimonial.name}</div>
          <div className="text-xs text-[#8a7f78] tracking-wide font-body">{testimonial.role}</div>
          <div className="text-[10px] text-[#c4922e] tracking-[0.15em] uppercase mt-0.5 font-body">{testimonial.project}</div>
        </div>
      </div>
    </div>
  )
}
