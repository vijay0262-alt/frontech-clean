'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Shield, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Security Camera Installation', href: '/services/security-camera-installation' },
      { label: 'Smart Doorbell Installation', href: '/services/doorbell-installation' },
      { label: 'Wi-Fi & Network Setup', href: '/services/wifi-network-setup' },
      { label: 'Quick Service & Support', href: '/services/quick-service-support' },
      { label: 'All Services', href: '/services' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg shadow-[#1d6ef5]/10 border-b border-[#1e3a5f]'
          : 'bg-[#0a0f1e]/80 backdrop-blur-sm border-b border-[#1e3a5f]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1d6ef5] to-[#00c2ff] flex items-center justify-center shadow-lg group-hover:shadow-[#1d6ef5]/40 transition-shadow">
              <Shield size={20} className="text-white" />
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-lg text-white font-serif tracking-tight">
                Frontech<span className="text-[#00c2ff]">Security</span>
              </span>
              <span className="block text-[10px] text-[#94a3b8] tracking-widest uppercase">
                Smart Home Experts
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-[#94a3b8] hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5">
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${dropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdown === link.label && (
                    <div className="absolute top-full left-0 w-56 mt-1 bg-[#111827] border border-[#1e3a5f] rounded-xl shadow-2xl shadow-black/40 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-[#94a3b8] hover:text-white hover:bg-[#1d6ef5]/10 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-[#94a3b8] hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/book"
              className="px-4 py-2 text-sm font-semibold text-[#00c2ff] border border-[#00c2ff]/40 rounded-lg hover:bg-[#00c2ff]/10 transition-all"
            >
              Book Install
            </Link>
            <a
              href="tel:+18884003290"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-0.5"
            >
              <Phone size={14} />
              (888) 400-3290
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#94a3b8] hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#111827] border-t border-[#1e3a5f] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block px-4 py-3 text-[#94a3b8] hover:text-white hover:bg-[#1d6ef5]/10 rounded-lg font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-[#94a3b8] hover:text-white hover:bg-[#1d6ef5]/10 rounded-lg transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 space-y-2">
            <Link
              href="/book"
              className="block text-center px-4 py-3 text-[#00c2ff] border border-[#00c2ff]/40 rounded-lg font-semibold hover:bg-[#00c2ff]/10 transition-all"
              onClick={() => setOpen(false)}
            >
              Book Installation
            </Link>
            <a
              href="tel:+18884003290"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold rounded-lg"
            >
              <Phone size={16} />
              Call +1 (888) 400-3290
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
