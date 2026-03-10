'use client'
import { useState, useEffect } from 'react'
import { Phone, Shield } from 'lucide-react'

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Sticky Mobile Header - Always visible on mobile */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0f1e]/98 backdrop-blur-md shadow-xl' : 'bg-[#0a0f1e]/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1d6ef5] to-[#00c2ff] flex items-center justify-center">
              <Shield size={16} className="text-white" />
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-base text-white font-serif tracking-tight">
                Frontech<span className="text-[#00c2ff]">Security</span>
              </span>
            </div>
          </div>

          {/* Phone CTA - Always visible */}
          <a
            href="tel:+18884003290"
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all pulse-phone"
          >
            <Phone size={16} className="animate-pulse" />
            <span className="hidden xs:inline">(888) 400-3290</span>
            <span className="xs:hidden">Call Now</span>
          </a>
        </div>
      </div>

      {/* Add padding to prevent content from being hidden under fixed header */}
      <div className="pt-16">
        {children}
      </div>

      {/* Minimal Footer - No navigation links */}
      <footer className="bg-[#060c1a] border-t border-[#1e3a5f] py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1d6ef5] to-[#00c2ff] flex items-center justify-center">
                <Shield size={22} className="text-white" />
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-xl text-white font-serif tracking-tight">
                  Frontech<span className="text-[#00c2ff]">Security</span>
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href="tel:+18884003290"
                className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-[#00c2ff] transition-colors"
              >
                <Phone size={18} className="text-[#00c2ff]" />
                +1 (888) 400-3290
              </a>
              <p className="text-sm text-[#94a3b8]">Available 7 Days a Week • Same-Day Service</p>
              <p className="text-xs text-[#64748b]">Serving USA & Canada</p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <span className="text-xs text-[#94a3b8]">🔒 Licensed & Insured</span>
              <span className="text-xs text-[#94a3b8]">⭐ 4.9/5 Rating</span>
              <span className="text-xs text-[#94a3b8]">✓ Certified Technicians</span>
              <span className="text-xs text-[#94a3b8]">⚡ Same-Day Available</span>
            </div>

            {/* Legal */}
            <div className="border-t border-[#1e3a5f] pt-6 mt-6">
              <p className="text-xs text-[#64748b]">
                © {new Date().getFullYear()} FrontechSecurity. All rights reserved.
              </p>
              <p className="text-[10px] text-[#475569] mt-2">
                Professional security camera & doorbell installation service across United States & Canada
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e] to-transparent p-4">
        <a
          href="tel:+18884003290"
          className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white text-base font-bold rounded-xl shadow-2xl hover:shadow-[#1d6ef5]/50 transition-all pulse-phone"
        >
          <Phone size={20} className="animate-pulse" />
          Call Now - Free Quote
        </a>
      </div>
    </>
  )
}
