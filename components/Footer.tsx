import Link from 'next/link'
import { Phone, Mail, MapPin, Shield, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const services = [
  { label: 'Security Camera Installation', href: '/services/security-camera-installation' },
  { label: 'Smart Doorbell Installation', href: '/services/doorbell-installation' },
  { label: 'Wi-Fi & Network Setup', href: '/services/wifi-network-setup' },
  { label: 'Quick Service & Support', href: '/services/quick-service-support' },
  { label: 'All Services', href: '/services' },
  { label: 'Book Installation', href: '/book' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Pricing Plans', href: '/pricing' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Schedule Installation', href: '/book' },
  { label: 'FAQ', href: '/faq' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e7eb]">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#0066cc] to-[#0052a3] py-8 sm:py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/90 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">Ready to Secure Your Home?</p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 font-serif text-balance">
            Get Expert Installation — Call Now
          </h3>
          <a
            href="tel:+18448100173"
            className="inline-flex items-center gap-2 sm:gap-3 bg-white text-[#0066cc] font-bold text-lg sm:text-xl px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-blue-50 hover:shadow-2xl transition-all"
          >
            <Phone size={20} />
            ☎ +1 (844) 810-0173
          </a>
          <p className="text-white/90 text-xs sm:text-sm mt-3">USA &amp; Canada — Mon to Sun, 7AM–10PM EST</p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#0052a3] flex items-center justify-center">
                <Shield size={22} className="text-white" />
              </div>
              <div>
                <span className="block font-bold text-lg text-[#1a1a1a] font-serif">
                  Frontech<span className="text-[#0066cc]">Security</span>
                </span>
                <span className="text-[10px] text-[#4a4a4a] tracking-widest uppercase">Smart Home Experts</span>
              </div>
            </Link>
            <p className="text-[#4a4a4a] text-sm leading-relaxed mb-5">
              Certified security technicians providing professional smart home camera and doorbell installation, setup, and support across the USA &amp; Canada.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:+18448100173" className="flex items-center gap-2 text-[#0066cc] hover:text-[#0052a3] transition-colors font-semibold">
                <Phone size={15} /> +1 (844) 810-0173
              </a>
              <a href="mailto:support@frontechsecurity.com" className="flex items-center gap-2 text-[#4a4a4a] hover:text-[#0066cc] transition-colors">
                <Mail size={15} /> support@frontechsecurity.com
              </a>
              <span className="flex items-start gap-2 text-[#4a4a4a]">
                <MapPin size={15} className="shrink-0 mt-0.5" />
                <span>
                  7430 Pasito Ave<br />
                  Rancho Cucamonga, CA 91730<br />
                  USA
                </span>
              </span>
            </div>
            <div className="flex items-center gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-[#f5f5f5] flex items-center justify-center text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#0066cc] transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#1a1a1a] font-bold text-sm uppercase tracking-wider mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-[#4a4a4a] hover:text-[#0066cc] text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#0066cc] group-hover:bg-[#0052a3] transition-colors" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#1a1a1a] font-bold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-[#4a4a4a] hover:text-[#0066cc] text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#0066cc] group-hover:bg-[#0052a3] transition-colors" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#1a1a1a] font-bold text-sm uppercase tracking-wider mb-5">Legal</h4>
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#4a4a4a] hover:text-[#0066cc] text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#0066cc] group-hover:bg-[#0052a3] transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 rounded-lg bg-[#f5f5f5] border border-[#e5e7eb]">
              <p className="text-xs text-[#4a4a4a] leading-relaxed">
                <span className="text-[#22c55e] font-bold">Licensed &amp; Insured.</span> Our technicians are fully certified and background-checked.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer bar */}
      <div className="border-t border-[#e5e7eb] bg-[#fafafa] px-4 py-5">
        <div className="max-w-7xl mx-auto space-y-3">
          <p className="text-[11px] text-[#666666] leading-relaxed text-center sm:text-left">
            <span className="text-[#4a4a4a] font-semibold">Disclaimer: </span>
            FrontechSecurity is an independent third-party installation and technical support service. We are not affiliated with, authorized by, endorsed by, or in any way officially connected to Ring, Google Nest, Arlo, Wyze, Eufy, SimpliSafe, ADT, or any other security brand or manufacturer. All product names, logos, and trademarks are the property of their respective owners. Our services consist solely of third-party installation, setup, and support. Prices listed on this website are for installation and support services only and do not include the cost of hardware or devices.
          </p>
          <p className="text-[11px] text-[#666666] leading-relaxed text-center sm:text-left">
            Results may vary based on property layout, internet infrastructure, and device compatibility. All service descriptions and response times are estimates and not guarantees. By using this website or our services, you agree to our{' '}
            <Link href="/terms-of-service" className="text-[#4a4a4a] underline hover:text-[#0066cc] transition-colors">Terms of Service</Link>,{' '}
            <Link href="/privacy-policy" className="text-[#4a4a4a] underline hover:text-[#0066cc] transition-colors">Privacy Policy</Link>, and{' '}
            <Link href="/refund-policy" className="text-[#4a4a4a] underline hover:text-[#0066cc] transition-colors">Refund Policy</Link>.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e5e7eb] py-4 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#666666]">
          <p>© {new Date().getFullYear()} FrontechSecurity.com. All rights reserved.</p>
          <p className="flex items-center gap-2 flex-wrap justify-center">
            <Link href="/privacy-policy" className="hover:text-[#0066cc] transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms-of-service" className="hover:text-[#0066cc] transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link href="/refund-policy" className="hover:text-[#0066cc] transition-colors">Refund Policy</Link>
            <span>·</span>
            <Link href="/disclaimer" className="hover:text-[#0066cc] transition-colors">Disclaimer</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
