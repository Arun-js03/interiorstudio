import Link from 'next/link'

const footerLinks = {
  pages: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services', label: 'Home Interior Design' },
    { href: '/services', label: 'Office Interior Design' },
    { href: '/services', label: 'Commercial Design' },
    { href: '/services', label: 'Renovation & Remodeling' },
    { href: '/services', label: '3D Visualization' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#1a1714] text-[#fdf9f3]">
      {/* Main Footer */}
      <div className="container-xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group">
              <div className="font-display text-3xl font-light tracking-widest uppercase text-[#fdf9f3]">
                Elara
              </div>
              <div className="text-[10px] tracking-[0.35em] uppercase text-[#c4922e] mt-0.5">
                Interior Studio
              </div>
            </Link>
            <p className="mt-6 text-[#fdf9f3]/50 text-sm leading-relaxed font-body font-light">
              Crafting timeless interior spaces where beauty meets purpose. Award-winning design studio since 2006.
            </p>
            <div className="mt-8 flex gap-4">
              {['IG', 'PI', 'LI', 'HO'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 border border-[#fdf9f3]/15 flex items-center justify-center text-xs text-[#fdf9f3]/40 hover:border-[#c4922e] hover:text-[#c4922e] transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#c4922e] mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#fdf9f3]/50 hover:text-[#fdf9f3] transition-colors duration-300 font-body font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#c4922e] mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#fdf9f3]/50 hover:text-[#fdf9f3] transition-colors duration-300 font-body font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#c4922e] mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-[#fdf9f3]/50 font-body font-light">
              <li>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#fdf9f3]/25 mb-1">Studio</span>
                14 Mayfair Square<br />London, W1K 4AB
              </li>
              <li>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#fdf9f3]/25 mb-1">Email</span>
                <a href="mailto:hello@elarastudio.com" className="hover:text-[#c4922e] transition-colors">
                  hello@elarastudio.com
                </a>
              </li>
              <li>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#fdf9f3]/25 mb-1">Phone</span>
                <a href="tel:+442071234567" className="hover:text-[#c4922e] transition-colors">
                  +44 207 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#fdf9f3]/8">
        <div className="container-xl py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#fdf9f3]/25 tracking-wider font-body">
            © {new Date().getFullYear()} Elara Interior Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-xs text-[#fdf9f3]/25 hover:text-[#fdf9f3]/60 transition-colors tracking-wide">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
