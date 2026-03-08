import Image from 'next/image'
import Link from 'next/link'
import { Service } from '@/lib/data'

const icons: Record<string, React.ReactNode> = {
  home: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  briefcase: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  store: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
    </svg>
  ),
  wrench: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  cube: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
}

interface ServiceCardProps {
  service: Service
  variant?: 'default' | 'compact'
}

export default function ServiceCard({ service, variant = 'default' }: ServiceCardProps) {
  if (variant === 'compact') {
    return (
      <div className="group p-8 border border-[#e8c99a]/40 hover:border-[#c4922e] transition-all duration-400 card-hover bg-white">
        <div className="w-12 h-12 border border-[#e8c99a] flex items-center justify-center text-[#c4922e] mb-6 group-hover:bg-[#c4922e] group-hover:border-[#c4922e] group-hover:text-white transition-all duration-300">
          {icons[service.icon]}
        </div>
        <h3 className="font-display text-xl font-light text-[#1a1714] mb-3">{service.title}</h3>
        <p className="text-sm text-[#8a7f78] font-body font-light leading-relaxed line-clamp-3">
          {service.description}
        </p>
        <div className="mt-6">
          <Link
            href="/services"
            className="group/link inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c4922e] font-body transition-all duration-300"
          >
            Learn more
            <span className="inline-block w-5 h-px bg-[#c4922e] transition-all duration-300 group-hover/link:w-8" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="group">
      {/* Image */}
      <div className="img-zoom relative aspect-[16/9] overflow-hidden bg-[#e8c99a]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-[#1a1714]/20 group-hover:bg-[#1a1714]/10 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="pt-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 border border-[#c4922e] flex items-center justify-center text-[#c4922e] flex-shrink-0 mt-0.5">
            {icons[service.icon]}
          </div>
          <div>
            <h3 className="font-display text-2xl font-light text-[#1a1714]">{service.title}</h3>
            <p className="mt-3 text-sm text-[#8a7f78] font-body font-light leading-relaxed">
              {service.description}
            </p>
            <ul className="mt-4 space-y-1.5">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-[#8a7f78] font-body">
                  <span className="w-1 h-1 bg-[#c4922e] rounded-full flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
