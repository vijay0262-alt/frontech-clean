'use client'
import { useEffect } from 'react'
import { Phone, Home } from 'lucide-react'

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hide the default site navbar + trust bar on landing pages (keep footer visible)
    const topBar = document.querySelector('.trust-bar')
    const navbar = document.querySelector('nav')

    if (topBar) (topBar as HTMLElement).style.display = 'none'
    if (navbar) (navbar as HTMLElement).style.display = 'none'

    return () => {
      // Restore on unmount
      if (topBar) (topBar as HTMLElement).style.display = ''
      if (navbar) (navbar as HTMLElement).style.display = ''
    }
  }, [])

  return (
    <>
      {/* Floating home button — all devices */}
      <a
        href="/"
        className="fixed top-4 left-4 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-white/95 backdrop-blur border border-[#e5e7eb] text-[#0066cc] shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:text-[#0052a3] transition-all"
        aria-label="Go to homepage"
      >
        <Home size={20} />
      </a>

      {/* Floating call button — mobile & tablet only */}
      <a
        href="tel:+18449667866"
        className="fixed bottom-5 right-5 z-50 lg:hidden flex items-center gap-2 px-5 py-3.5 bg-[#0066cc] hover:bg-[#0052a3] text-white text-sm font-bold rounded-full shadow-xl shadow-[#0066cc]/30 transition-all pulse-phone"
        aria-label="Call now"
      >
        <Phone size={17} />
        (844) 966-7866
      </a>

      {children}
    </>
  )
}
