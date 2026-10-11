import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Phone, ArrowRight, Shield, Star, Clock, Zap, Headphones, RefreshCw, MonitorSmartphone, Wrench, ChevronDown } from 'lucide-react'

const BASE = 'https://frontechsecurity.com'
const PAGE_URL = `${BASE}/services/quick-service-plan`

export const metadata: Metadata = {
  title: 'Security Camera Service & Care Plans | $9.99/mo — FrontechSecurity USA & Canada',
  description: 'Fast security camera and smart doorbell expert service — 7 days a week, 7AM–10PM. Resolve cameras offline, app issues, firmware failures. Plans from $9.99/month. Call +1 (844) 966-7866.',
  keywords: [
    'security camera expert service',
    'security camera service',
    'camera offline service',
    'security camera not working service',
    'Ring camera offline help',
    'Nest camera not connecting resolve',
    'smart doorbell not working',
    'security camera guided assistance',
    'security camera diagnostics service',
    'home security camera help',
    'security camera app not working',
    'camera firmware update service',
    'security camera service plan',
    'monthly security camera service plan',
    'smart home expert care plan',
    'security camera assistance USA',
    'security camera assistance Canada',
    'security camera annual service plan',
    'cheap security camera assistance',
  ].join(', '),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Security Camera Service Plans | $9.99/month — FrontechSecurity',
    description: 'Resolve cameras offline, app failures, and firmware issues — 7 days a week by phone or guided. Plans from $9.99/month. USA & Canada.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'FrontechSecurity',
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: 'Security Camera Service — FrontechSecurity' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Camera Service Plans | $9.99/month | FrontechSecurity',
    description: 'Resolve any camera or doorbell issue fast by phone — 7 days a week. USA & Canada.',
    images: [`${BASE}/og-image.png`],
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
        { '@type': 'ListItem', position: 3, name: 'Security Camera Assistance & Service Plans', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Security Camera Service & Care Plans',
      serviceType: 'Service & Care',
      description: 'Phone and guided expert service for security cameras and smart doorbells, 7 days a week. Monthly and annual plans with unlimited assistance, priority access, and on-site visits.',
      url: PAGE_URL,
      provider: { '@type': 'LocalBusiness', name: 'FrontechSecurity', url: BASE },
      areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
      offers: [
        { '@type': 'Offer', name: 'Monthly Service Plan', price: '9.99', priceCurrency: 'USD', description: 'Unlimited phone and guided assistance, cancel anytime.' },
        { '@type': 'Offer', name: 'Annual Service Plan', price: '99.99', priceCurrency: 'USD', description: 'Best value — unlimited assistance plus 2 on-site visits and system health check.' },
      ],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '2400', bestRating: '5' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Can you resolve my camera by phone without a home visit?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The vast majority of security camera issues can be resolved by phone over the phone. We only schedule an on-site visit if phone-based resolution is not possible.' } },
        { '@type': 'Question', name: 'What brands do you cover for guided service?', acceptedAnswer: { '@type': 'Answer', text: 'We provide guided assistance for Ring, Google Nest, Arlo, Wyze, Eufy, Reolink, Hikvision, Dahua, Amcrest, Lorex, and more.' } },
        { '@type': 'Question', name: 'How quickly will someone respond when I call?', acceptedAnswer: { '@type': 'Answer', text: 'Average hold time is under 60 seconds. We answer 7 days a week from 7AM to 10PM EST.' } },
        { '@type': 'Question', name: 'Is there a contract for the monthly plan?', acceptedAnswer: { '@type': 'Answer', text: 'No contracts. The monthly plan is billed month-to-month and can be cancelled at any time with no cancellation fee.' } },
        { '@type': 'Question', name: 'What if my issue cannot be resolved by phone?', acceptedAnswer: { '@type': 'Answer', text: 'If we cannot resolve your issue by phone we will schedule an on-site technician visit. Annual plan members get on-site visits included.' } },
      ],
    },
  ],
}

const plans = [
  {
    name: 'One-Time Service Call',
    price: 'From $29.99',
    desc: 'Single guided session to diagnose and resolve one specific issue.',
    features: ['One guided assistance session', 'Camera offline diagnosis', 'App sync and login issues', 'Firmware diagnostics', 'No ongoing commitment'],
    cta: 'Book a Service Call',
    color: 'border-[#e5e7eb]',
    badge: null,
  },
  {
    name: 'Monthly Service Plan',
    price: '$9.99 / month',
    desc: 'Unlimited phone and guided assistance every month with no contracts.',
    features: ['Unlimited phone assistance', 'Unlimited guided sessions', 'Camera offline resolution', 'App and firmware updates', 'Motion & alert tuning', 'Cancel anytime'],
    cta: 'Start Monthly Plan',
    color: 'border-[#0066cc]',
    badge: 'Most Popular',
  },
  {
    name: 'Annual Service Plan',
    price: '$99.99 / year',
    desc: 'Best value plan with everything in monthly plus on-site visits.',
    features: ['Everything in Monthly Plan', 'Priority queue — no waiting', 'Up to 2 on-site technician visits', 'System health check every 6 months', 'New device setup assistance', 'Best rate — save 17%'],
    cta: 'Start Annual Plan',
    color: 'border-[#22c55e]',
    badge: 'Best Value',
  },
]

const issues = [
  { icon: MonitorSmartphone, title: 'Camera Offline', desc: 'We diagnose and resolve disconnected cameras whether the issue is Wi-Fi, power, firmware, or settings.' },
  { icon: RefreshCw, title: 'App Sync Issues', desc: 'Resolve login failures, device not appearing in app, or camera not syncing across multiple devices.' },
  { icon: Wrench, title: 'Firmware Updates', desc: 'We handle manufacturer firmware updates that require specific steps to avoid bricking your devices.' },
  { icon: Headphones, title: 'Alert & Motion Issues', desc: 'Resolve missing motion alerts, constant false notifications, or two-way audio that is not working.' },
  { icon: Zap, title: 'Recording Failures', desc: 'Diagnose cloud recording, NVR/DVR issues, and SD card failures so your footage is always saved.' },
  { icon: Shield, title: 'New Device Setup', desc: 'Already on a plan? Adding a new camera or doorbell to your existing system is covered — just call.' },
]

const faqs = [
  { q: 'Can you resolve my camera by phone without a home visit?', a: 'Yes. The vast majority of security camera issues — offline cameras, app sync problems, firmware failures, motion alert misconfiguration — can be resolved by phone over the phone and via guided connection to your system. We only schedule an on-site visit if phone-based resolution is not possible.' },
  { q: 'What brands do you cover for guided service?', a: 'We provide guided assistance for all major security brands including Ring, Google Nest, Arlo, Wyze, Eufy, Reolink, Hikvision, Dahua, Amcrest, Lorex, and more. If you have a less common brand, call us and we will confirm.' },
  { q: 'How quickly will someone respond when I call?', a: 'Average hold time is under 60 seconds. We answer 7 days a week from 7AM to 10PM EST. Annual plan members receive priority queue access and are connected first.' },
  { q: 'Is there a contract for the monthly plan?', a: 'No contracts. The monthly plan is billed month-to-month and can be cancelled at any time with no cancellation fee. The annual plan is billed once per year and provides the lowest per-month cost.' },
  { q: 'What if my issue cannot be resolved by phone?', a: 'If we cannot resolve your issue by phone we will schedule an on-site technician visit. For Annual plan members, on-site visits are included. For other plans, on-site visits are available at an additional flat rate.' },
]

export default function QuickServiceAssistancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <div className="bg-white">
      <section className="relative py-10 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(34,197,94,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#22c55e]/8 to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <nav className="flex items-center gap-2 text-xs text-[#64748b] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#4a4a4a] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#4a4a4a] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#4a4a4a]">Quick Service Plan</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#22c55e]/15 border border-[#22c55e]/40 rounded-full px-3 py-1.5 mb-5">
            <Headphones size={13} className="text-[#22c55e]" />
            <span className="text-[#22c55e] text-xs font-bold tracking-wider uppercase">Available 7 Days a Week</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] leading-tight mb-5 font-serif text-balance">
            Security Camera Assistance <span className="gradient-text">& Service Plans</span>
          </h1>
          <p className="text-lg text-[#4a4a4a] leading-relaxed mb-8 max-w-3xl">
            Our specialists are available 7 days a week, 7AM to 10PM EST to diagnose and resolve any issue with your security cameras or smart doorbells — fast, by phone or guided session, with no long wait times. Whether your camera just went offline, your app stopped working, or your recordings are failing, we get your system back online quickly.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['7-Day Phone Assistance', 'Guided Diagnostics', 'Under 60 Sec Wait', 'All Major Brands', 'No Contracts', 'On-Site Available'].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs text-[#f0f4ff] bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <CheckCircle2 size={11} className="text-[#22c55e] shrink-0" />{b}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+18449667866" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#22c55e] to-[#0052a3] text-white font-bold text-base px-7 py-4 rounded-xl hover:shadow-xl hover:shadow-[#22c55e]/30 transition-shadow pulse-phone">
              <Phone size={18} /> Call +1 (844) 966-7866 — Under 60 Sec
            </a>
            <Link href="/book" className="inline-flex items-center justify-center gap-2 border-2 border-[#0066cc] text-[#0066cc] font-bold text-base px-7 py-4 rounded-xl hover:bg-[#0066cc] hover:text-[#0a0f1e] transition-colors">
              Book a Service Call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-[#0066cc] to-[#0052a3] border-y border-[#e5e7eb] py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[
            { icon: Star, text: '4.9/5 Rating (2,400+ Reviews)', color: '#f59e0b' },
            { icon: Clock, text: 'Average Wait: Under 60 Seconds', color: '#22c55e' },
            { icon: Shield, text: 'Certified Service Specialists', color: '#1d6ef5' },
            { icon: Zap, text: '95% of Issues Resolved in One Call', color: '#00c2ff' },
          ].map(({ icon: Icon, text, color }) => (
            <span key={text} className="flex items-center gap-2 text-sm text-white">
              <Icon size={14} style={{ color }} />{text}
            </span>
          ))}
        </div>
      </div>

      {/* Issues we resolve */}
      <section className="py-20 px-4 bg-\[#f5f5f5\]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#22c55e] text-xs font-bold uppercase tracking-widest">What We Resolve</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mt-2 mb-4 font-serif text-balance">Common Issues Our Specialists Resolve</h2>
            <p className="text-[#4a4a4a] max-w-2xl mx-auto">95% of security camera and smart doorbell issues are resolved in a single call.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {issues.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glow-card bg-white rounded-xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[#22c55e]/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#22c55e]" />
                </div>
                <h3 className="text-[#1a1a1a] font-bold mb-2">{title}</h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#22c55e] text-xs font-bold uppercase tracking-widest">Service Plans</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mt-2 mb-4 font-serif text-balance">Choose the Right Service Plan for You</h2>
            <p className="text-[#4a4a4a] max-w-2xl mx-auto">All prices are for the service only. No payment is collected online.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {plans.map(({ name, price, desc, features, cta, color, badge }) => (
              <div key={name} className={`glow-card bg-white rounded-2xl p-7 border-2 ${color} flex flex-col`}>
                {badge && (
                  <span className="self-start text-xs font-black bg-gradient-to-r from-[#0066cc] to-[#22c55e] text-white rounded-full px-3 py-1 mb-4">{badge}</span>
                )}
                <h3 className="text-[#1a1a1a] font-black font-serif text-xl mb-1">{name}</h3>
                <p className="text-[#0066cc] font-bold text-lg mb-2">{price}</p>
                <p className="text-[#4a4a4a] text-sm mb-5">{desc}</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#4a4a4a]">
                      <CheckCircle2 size={14} className="text-[#22c55e] shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
                <Link href="/book" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#22c55e] to-[#0052a3] text-white font-bold rounded-xl hover:shadow-lg transition-shadow">
                  {cta} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-\[#f5f5f5\]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#22c55e] text-xs font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl font-black text-[#1a1a1a] mt-2 font-serif text-balance">Service Plans — Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group glow-card bg-white rounded-xl">
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-6 text-[#1a1a1a] font-semibold text-sm list-none">
                  {q}
                  <ChevronDown size={16} className="text-[#22c55e] shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="px-6 pb-6 text-[#4a4a4a] text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-black text-[#1a1a1a] font-serif mb-6 text-center">Explore Our Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: '/services/security-camera-installation', title: 'Security Camera Installation', desc: 'Full camera mounting, wiring, and configuration service.' },
              { href: '/services/doorbell-installation', title: 'Smart Doorbell Installation', desc: 'Professional doorbell setup from removal to app walkthrough.' },
              { href: '/services/wifi-network-setup', title: 'Wi-Fi & Network Setup', desc: 'Ensure cameras stay online with optimized network settings.' },
            ].map(({ href, title, desc }) => (
              <Link key={href} href={href} className="glow-card bg-white rounded-xl p-5 hover:border-[#22c55e] border border-[#e5e7eb] transition-colors group">
                <h3 className="text-[#1a1a1a] font-bold text-sm mb-1 group-hover:text-[#22c55e] transition-colors">{title}</h3>
                <p className="text-[#4a4a4a] text-xs leading-relaxed">{desc}</p>
                <span className="inline-flex items-center gap-1 text-[#22c55e] text-xs font-semibold mt-3">Learn More <ArrowRight size={12} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
