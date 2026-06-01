import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'

interface PolicyLayoutProps {
  title: string
  subtitle: string
  lastUpdated: string
  children: React.ReactNode
}

export default function PolicyLayout({ title, subtitle, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, #1d6ef5, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto relative">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[#4a4a4a] text-sm hover:text-[#1a1a1a] transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-3 font-serif text-balance">{title}</h1>
          <p className="text-[#4a4a4a] mb-3">{subtitle}</p>
          <p className="text-[#4b5563] text-xs">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glow-card bg-white rounded-2xl p-8 md:p-12 prose-policy">
            {children}
          </div>

          {/* Footer CTA */}
          <div className="mt-10 text-center">
            <p className="text-[#4a4a4a] text-sm mb-4">Questions about this policy? Contact us directly.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+18448100173"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0066cc] to-[#0052a3] text-[#1a1a1a] font-bold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-[#0066cc]/30 transition-all"
              >
                <Phone size={15} /> +1 (844) 810-0173
              </a>
              <a
                href="mailto:support@frontechsecurity.com"
                className="inline-flex items-center justify-center gap-2 border border-[#e5e7eb] text-[#4a4a4a] hover:text-[#1a1a1a] hover:border-[#0066cc] font-semibold px-6 py-3 rounded-xl transition-all"
              >
                support@frontechsecurity.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Reusable section helpers
export function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-[#1a1a1a] font-bold text-lg font-serif mb-3 pb-2 border-b border-[#e5e7eb]">{title}</h2>
      <div className="text-[#4a4a4a] text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

export function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 ml-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-[#4a4a4a] text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-2 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}
