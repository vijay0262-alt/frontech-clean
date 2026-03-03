import Link from 'next/link'
import { Phone, CalendarCheck, ShieldCheck, Star, CheckCircle2 } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#0a0f1e]" style={{ minHeight: 'calc(100svh - 64px)' }}>
      {/* Lightweight CSS background — no external SVG file, no layout shift */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(29,110,245,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(29,110,245,0.08) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1d6ef5]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1d6ef5]/8 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-[#00c2ff]/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1d6ef5]/15 border border-[#1d6ef5]/40 rounded-full px-3 py-1.5 mb-5 sm:mb-6">
            <ShieldCheck size={13} className="text-[#00c2ff] shrink-0" />
            <span className="text-[#00c2ff] text-[11px] sm:text-xs font-bold tracking-wider uppercase">Certified Smart Home Security Experts</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-5 font-serif text-balance">
            Professional Security Camera &amp;{' '}
            <span className="gradient-text">Smart Doorbell</span>{' '}
            Installation
          </h1>

          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Expert installation, setup &amp; fast service for all security camera systems and smart doorbells. Serving homes across the USA &amp; Canada. Plans starting at just{' '}
            <span className="text-white font-bold">$49.99</span>.
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-7 sm:mb-9">
            {['Same-Day Service', 'All Major Brands', 'Full App Setup', '100% Satisfaction'].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs sm:text-sm text-[#f0f4ff] bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <CheckCircle2 size={12} className="text-[#22c55e] shrink-0" />
                {b}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a
              href="tel:+18884003290"
              className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:shadow-2xl hover:shadow-[#1d6ef5]/40 transition-shadow pulse-phone"
            >
              <Phone size={18} />
              Call +1 (888) 400-3290
            </a>
            <Link
              href="/book"
              className="flex items-center justify-center gap-2 sm:gap-3 border-2 border-[#00c2ff] text-[#00c2ff] font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-[#00c2ff] hover:text-[#0a0f1e] transition-colors"
            >
              <CalendarCheck size={18} />
              Book Free Consultation
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((s) => <Star key={s} size={14} fill="#f59e0b" className="text-[#f59e0b]" />)}
              <span className="text-white text-sm font-semibold ml-1">4.9/5</span>
              <span className="text-[#94a3b8] text-sm ml-1">(2,400+ Reviews)</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-[#1e3a5f]" />
            <span className="text-[#94a3b8] text-sm">Serving <span className="text-white font-semibold">50+ Cities</span> in USA &amp; Canada</span>
          </div>
        </div>
      </div>

      {/* Stat cards — visible on large screens only */}
      <div className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-4 z-10">
        {[
          { num: '10,000+', label: 'Installations Done' },
          { num: '98%', label: 'Customer Satisfaction' },
          { num: '< 2 hrs', label: 'Avg. Install Time' },
        ].map((stat) => (
          <div key={stat.num} className="bg-[#111827]/90 border border-[#1e3a5f] rounded-xl px-5 py-4 text-center min-w-[150px] glow-card">
            <p className="text-2xl font-black gradient-text">{stat.num}</p>
            <p className="text-[#94a3b8] text-xs mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mobile stat strip */}
      <div className="absolute bottom-4 left-4 right-4 xl:hidden">
        <div className="grid grid-cols-3 gap-2">
          {[
            { num: '10k+', label: 'Installs' },
            { num: '98%', label: 'Satisfied' },
            { num: '< 2h', label: 'Avg. Time' },
          ].map((stat) => (
            <div key={stat.num} className="bg-[#111827]/80 border border-[#1e3a5f] rounded-lg px-2 py-2 text-center">
              <p className="text-sm font-black gradient-text">{stat.num}</p>
              <p className="text-[#94a3b8] text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
