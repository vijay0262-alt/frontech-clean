'use client'
import { useState, useEffect } from 'react'
import { Phone, Shield } from 'lucide-react'

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Hide only the default header from main layout (keep footer visible)
    const topBar = document.querySelector('.trust-bar')
    const navbar = document.querySelector('nav')
    
    if (topBar) (topBar as HTMLElement).style.display = 'none'
    if (navbar) (navbar as HTMLElement).style.display = 'none'

    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', onScroll)
      // Restore on unmount
      if (topBar) (topBar as HTMLElement).style.display = ''
      if (navbar) (navbar as HTMLElement).style.display = ''
    }
  }, [])

  return (
    <>
      {/* Sticky Mobile Header - Always visible on mobile */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0f1e]/98 backdrop-blur-md shadow-xl' : 'bg-[#0a0f1e]/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center">
          {/* Phone CTA - Centered */}
          <a
            href="tel:+18884003290"
            className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white text-base font-bold rounded-lg hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all pulse-phone whitespace-nowrap"
          >
            <Phone size={18} className="animate-pulse" />
            <span className="hidden sm:inline">Call Now (888) 400-3290</span>
            <span className="sm:hidden">(888) 400-3290</span>
          </a>
        </div>
      </div>

      {/* Add padding to prevent content from being hidden under fixed header */}
      <div className="pt-16">
        {children}
      </div>

      {/* Floating Mobile CTA - with higher z-index to stay above footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e] to-transparent p-4 pointer-events-none">
        <a
          href="tel:+18884003290"
          className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white text-base font-bold rounded-xl shadow-2xl hover:shadow-[#1d6ef5]/50 transition-all pulse-phone pointer-events-auto"
        >
          <Phone size={20} className="animate-pulse" />
          Call Now (888) 400-3290
        </a>
      </div>
    </>
  )
}
