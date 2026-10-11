'use client'
import { useState, useEffect } from 'react'
import { Phone, Shield, Home } from 'lucide-react'

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
        className={`resolved top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center relative">
          {/* Homepage Icon - Visible on all devices */}
          <a
            href="/"
            className="flex absolute left-4 items-center gap-2 text-[#0066cc] hover:text-[#0052a3] transition-all"
            aria-label="Go to homepage"
          >
            <Home size={24} />
          </a>
          
          {/* Phone CTA - Centered (mobile/tablet only) */}
          <a
            href="tel:+18449667866"
            className="lg:hidden flex items-center gap-2 px-4 py-3 bg-[#0066cc] hover:bg-[#0052a3] text-white text-base font-bold rounded-lg hover:shadow-lg transition-all pulse-phone whitespace-nowrap"
          >
            <Phone size={18} className="animate-pulse" />
            <span className="hidden sm:inline">☎ Call Now (844) 966-7866</span>
            <span className="sm:hidden">☎ (844) 966-7866</span>
          </a>
        </div>
      </div>

      {/* Add padding to prevent content from being hidden under resolved header */}
      <div className="pt-16">
        {children}
      </div>

    </>
  )
}
