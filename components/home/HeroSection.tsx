import Link from 'next/link'
import Image from 'next/image'
import { Phone, CalendarCheck, ShieldCheck, Star, CheckCircle2 } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden bg-white sm:min-h-[calc(100svh-64px)]" style={{ minHeight: '100svh' }}>
      {/* Lightweight CSS background — subtle light blue accent */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 mb-5 sm:mb-6">
            <ShieldCheck size={13} className="text-[#0066cc] shrink-0" />
            <span className="text-[#0066cc] text-[11px] sm:text-xs font-bold tracking-wider uppercase">Certified Smart Home Security Experts</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-[#1a1a1a] leading-tight mb-4 sm:mb-5 font-serif text-balance">
            Professional Security Camera &amp;{' '}
            <span className="text-[#0066cc]">Smart Doorbell</span>{' '}
            Installation
          </h1>

          <p className="text-base sm:text-lg text-[#4a4a4a] leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Expert installation, setup &amp; fast service for all security camera systems and smart doorbells. Serving homes across the USA &amp; Canada. Plans starting at just{' '}
            <span className="text-[#1a1a1a] font-bold">$49.99</span>.
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-7 sm:mb-9">
            {['Same-Day Service', 'All Major Brands', 'Full App Setup', '100% Satisfaction'].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs sm:text-sm text-[#1a1a1a] bg-[#22c55e]/60 border border-[#22c55e] rounded-full px-3 py-1">
                <CheckCircle2 size={12} className="text-[#22c55e] shrink-0" />
                {b}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a
              href="tel:+18448100173"
              className="flex items-center justify-center gap-2 sm:gap-3 bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:shadow-xl transition-all pulse-phone"
            >
              <Phone size={20} />
              📞 Call (844) 810-0173
            </a>
            <Link
              href="/book"
              className="flex items-center justify-center gap-2 sm:gap-3 border-2 border-[#0066cc] text-[#0066cc] font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <CalendarCheck size={20} />
              Book Free Consultation
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((s) => <Star key={s} size={14} fill="#fbbf24" className="text-[#fbbf24]" />)}
              <span className="text-[#1a1a1a] text-sm font-semibold ml-1">4.9/5</span>
              <span className="text-[#4a4a4a] text-sm ml-1">(2,400+ Reviews)</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-[#d1d5db]" />
            <span className="text-[#4a4a4a] text-sm">Serving <span className="text-[#1a1a1a] font-semibold">50+ Cities</span> in USA &amp; Canada</span>
          </div>
        </div>
      </div>

      {/* Security Camera & Doorbell Image — visible on large screens only */}
      <div className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <Image
            src="/hero.png"
            alt="Security Camera and Smart Doorbell Installation"
            width={620}
            height={496}
            className="rounded-2xl shadow-2xl"
            priority
          />
          {/* Stat overlay on image */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-xl font-black text-[#0066cc]">10k+</p>
                <p className="text-[10px] text-[#4a4a4a]">Installs</p>
              </div>
              <div>
                <p className="text-xl font-black text-[#0066cc]">98%</p>
                <p className="text-[10px] text-[#4a4a4a]">Satisfied</p>
              </div>
              <div>
                <p className="text-xl font-black text-[#0066cc]">&lt;2h</p>
                <p className="text-[10px] text-[#4a4a4a]">Avg Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stat strip */}
      <div className="absolute bottom-4 left-4 right-4 xl:hidden">
        <div className="grid grid-cols-3 gap-2">
          {[
            { num: '10k+', label: 'Installs' },
            { num: '98%', label: 'Satisfied' },
            { num: '< 2h', label: 'Avg. Time' },
          ].map((stat) => (
            <div key={stat.num} className="bg-white border border-[#e5e7eb] rounded-lg px-2 py-2 text-center shadow-sm">
              <p className="text-sm font-black text-[#0066cc]">{stat.num}</p>
              <p className="text-[#4a4a4a] text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
