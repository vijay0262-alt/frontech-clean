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
          ? 'bg-white shadow-md border-b border-[#e5e7eb]'
          : 'bg-white border-b border-[#e5e7eb]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-[#0066cc] flex items-center justify-center shadow-md group-hover:shadow-[#0066cc]/40 transition-shadow">
              <Shield size={20} className="text-white" />
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-lg text-[#1a1a1a] font-serif tracking-tight">
                Frontech<span className="text-[#0066cc]">Security</span>
              </span>
              <span className="block text-[10px] text-[#4a4a4a] tracking-widest uppercase">
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
                  <button className="flex items-center gap-1 px-4 py-2 text-[#4a4a4a] hover:text-[#0066cc] text-sm font-medium transition-colors rounded-lg hover:bg-blue-50">
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${dropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdown === link.label && (
                    <div className="absolute top-full left-0 w-56 mt-1 bg-white border border-[#e5e7eb] rounded-lg shadow-lg py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-[#4a4a4a] hover:text-[#0066cc] hover:bg-blue-50 transition-colors"
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
                  className="px-4 py-2 text-[#4a4a4a] hover:text-[#0066cc] text-sm font-medium transition-colors rounded-lg hover:bg-blue-50"
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
              className="px-4 py-2 text-sm font-semibold text-[#0066cc] border border-[#0066cc] rounded-lg hover:bg-blue-50 transition-all"
            >
              Book Install
            </Link>
            <a
              href="tel:+18448100173"
              className="flex items-center gap-2 px-4 py-2 bg-[#0066cc] hover:bg-[#0052a3] text-white text-sm font-bold rounded-lg hover:shadow-lg transition-all"
            >
              <Phone size={14} />
              (844) 810-0173
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#4a4a4a] hover:text-[#0066cc]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#f9f9f9] border-t border-[#e5e7eb] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block px-4 py-3 text-[#4a4a4a] hover:text-[#0066cc] hover:bg-blue-50 rounded-lg font-medium transition-colors"
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
                      className="block px-4 py-2 text-sm text-[#4a4a4a] hover:text-[#0066cc] hover:bg-blue-50 rounded-lg transition-colors"
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
              className="block text-center px-4 py-3 text-[#0066cc] border border-[#0066cc] rounded-lg font-semibold hover:bg-blue-50 transition-all"
              onClick={() => setOpen(false)}
            >
              Book Installation
            </Link>
            <a
              href="tel:+18448100173"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold rounded-lg"
            >
              <Phone size={16} />
              Call (844) 810-0173
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
