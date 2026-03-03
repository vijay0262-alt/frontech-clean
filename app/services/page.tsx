import type { Metadata } from 'next'
import Link from 'next/link'
import { Camera, Wifi, Headphones, CheckCircle2, Phone, ArrowRight, Settings, MonitorPlay, Lock, Zap } from 'lucide-react'
import SecurityCameraIllustration from '@/components/illustrations/SecurityCameraIllustration'
import DoorbellIllustration from '@/components/illustrations/DoorbellIllustration'
import NetworkIllustration from '@/components/illustrations/NetworkIllustration'
import QuickServiceIllustration from '@/components/illustrations/QuickServiceIllustration'

const BASE = 'https://frontechsecurity.com'
const PAGE_URL = `${BASE}/services`

export const metadata: Metadata = {
  title: 'Security Camera Installation, Doorbell Setup & Support Services | FrontechSecurity',
  description: 'Expert security camera installation, smart doorbell setup, Wi-Fi network optimization, and ongoing tech support — certified technicians across USA & Canada. Same-day service from $49.99. Call +1 (888) 400-3290.',
  keywords: [
    'security camera installation service',
    'smart doorbell installation service',
    'home security installation services',
    'security camera setup near me',
    'professional security camera installer',
    'CCTV installation services',
    'smart home security services',
    'security camera wifi setup',
    'security camera tech support',
    'home security system installation',
    'security installation services USA',
    'security installation services Canada',
  ].join(', '),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Security Camera & Doorbell Installation Services | FrontechSecurity',
    description: 'Camera mounting, doorbell setup, Wi-Fi optimization, and service plans. Certified technicians across USA & Canada. Same-day from $49.99.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'FrontechSecurity',
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: 'Security Installation Services — FrontechSecurity' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Camera & Doorbell Installation Services | FrontechSecurity',
    description: 'Expert installation services across USA & Canada. Same-day from $49.99.',
    images: [`${BASE}/og-image.png`],
  },
}

const servicesCatalogSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Services', item: PAGE_URL },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': `${PAGE_URL}#page`,
      name: 'Security Camera & Smart Home Installation Services',
      description: 'Complete range of security camera installation, smart doorbell setup, Wi-Fi network configuration, and ongoing support services by FrontechSecurity across USA and Canada.',
      url: PAGE_URL,
      provider: { '@type': 'LocalBusiness', name: 'FrontechSecurity', url: BASE },
      hasPart: [
        { '@type': 'Service', name: 'Security Camera Installation', url: `${BASE}/services/security-camera-installation` },
        { '@type': 'Service', name: 'Smart Doorbell Installation', url: `${BASE}/services/doorbell-installation` },
        { '@type': 'Service', name: 'Wi-Fi & Network Setup', url: `${BASE}/services/wifi-network-setup` },
        { '@type': 'Service', name: 'Security Camera Support Plans', url: `${BASE}/services/quick-service-support` },
      ],
    },
  ],
}

const serviceSections = [
  {
    id: 'camera',
    icon: Camera,
    badge: 'Most Requested',
    title: 'Security Camera Installation',
    subtitle: 'Professional mounting, wiring & configuration',
    desc: 'Our certified technicians handle the complete installation of your security camera system — from initial placement planning and cable routing to configuration and app setup. We ensure optimal coverage, perfect angles, and reliable connectivity for every camera installed.',
    features: [
      'Indoor & outdoor camera installation',
      'Wired & wireless systems',
      '4K/HD resolution configuration',
      'Night vision & IR setup',
      'Motion detection zone setup',
      'Cloud & local (NVR/DVR) storage config',
      'Remote viewing app setup',
      'Multi-camera system planning',
    ],
    cta: 'Book Camera Install',
    color: 'from-[#1d6ef5] to-[#0ea5e9]',
  },
  {
    id: 'doorbell',
    icon: Settings,
    badge: 'High Demand',
    title: 'Smart Doorbell Installation',
    subtitle: 'Complete video doorbell setup from start to finish',
    desc: 'Get your smart video doorbell installed by a professional in less than an hour. We handle everything from removing your existing doorbell, mounting the new device, wiring or battery setup, Wi-Fi pairing, motion sensitivity configuration, and full walkthrough of the app and features.',
    features: [
      'Doorbell removal & replacement',
      'Hardwired & battery models',
      'Wi-Fi network pairing',
      'Chime box installation',
      'Motion zones & sensitivity',
      'Two-way audio testing',
      'Package detection setup',
      'App setup for all family members',
    ],
    cta: 'Book Doorbell Install',
    color: 'from-[#0ea5e9] to-[#00c2ff]',
  },
  {
    id: 'setup',
    icon: Wifi,
    badge: 'Critical Step',
    title: 'Setup, Configuration & Network Optimization',
    subtitle: 'Ensuring reliable connectivity for all your devices',
    desc: 'Even the best security hardware fails without proper network setup. Our technicians assess your home\'s Wi-Fi coverage, resolve dead zones, configure port forwarding, optimize bandwidth allocation for cameras, and ensure every device maintains a stable, fast connection 24/7.',
    features: [
      'Wi-Fi coverage assessment',
      'Extender & mesh network setup',
      'Port forwarding & router config',
      'Camera bandwidth optimization',
      'Remote access (DDNS) setup',
      'Static IP configuration',
      'App training & walkthrough',
      'All users & permissions setup',
    ],
    cta: 'Book Setup Service',
    color: 'from-[#7c3aed] to-[#1d6ef5]',
  },
  {
    id: 'support',
    icon: Headphones,
    badge: '7 Days Available',
    title: 'Quick Service & Ongoing Help',
    subtitle: 'Fast remote and on-site service for your system',
    desc: 'Technology can be unpredictable. Our specialists are available 7 days a week to diagnose and fix issues with your security system — whether it\'s a camera going offline, app connectivity issues, firmware problems, or a complete system reset. We keep you protected.',
    features: [
      'Unlimited phone service',
      'Remote diagnostics',
      'Firmware update assistance',
      'Camera offline resolution',
      'App login & sync fixes',
      'On-site visits (Annual plan)',
      'System health monitoring',
      'Priority emergency response',
    ],
    cta: 'Get Service Plan',
    color: 'from-[#22c55e] to-[#0ea5e9]',
  },
]

const addOns = [
  { icon: MonitorPlay, title: 'NVR/DVR Setup', desc: 'Complete network video recorder installation and configuration for local recording.' },
  { icon: Lock, title: 'Smart Lock Integration', desc: 'Connect your smart lock to your security ecosystem for full home access control.' },
  { icon: Zap, title: 'Floodlight Camera Setup', desc: 'High-brightness floodlight camera installation with motion-triggered lighting.' },
  { icon: MonitorPlay, title: 'Monitor & Display Setup', desc: 'Indoor security monitor installation for real-time multi-camera viewing.' },
]

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesCatalogSchema) }} />
    <div className="bg-[#0a0f1e]">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #1d6ef5, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">Our Services</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-5 font-serif">
            Complete Smart Home <span className="gradient-text">Security Services</span>
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto mb-8">
            From a single camera installation to a full smart home security ecosystem — our certified technicians handle every aspect of your setup.
          </p>
          <a
            href="tel:+18884003290"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-1"
          >
            <Phone size={18} />
            Call for Free Estimate — +1 (888) 400-3290
          </a>
        </div>
      </section>

      {/* Service sections */}
      {serviceSections.map((svc, idx) => (
        <section key={svc.id} id={svc.id} className={`py-20 px-4 ${idx % 2 === 0 ? 'bg-[#0a0f1e]' : 'bg-[#060c1a]'}`}>
          <div className="max-w-6xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${svc.color} rounded-full px-3 py-1 mb-4`}>
                  <svc.icon size={13} className="text-white" />
                  <span className="text-white text-xs font-bold">{svc.badge}</span>
                </div>
                <h2 className="text-3xl font-black text-white mb-2 font-serif">{svc.title}</h2>
                <p className="text-[#00c2ff] font-semibold text-sm mb-4">{svc.subtitle}</p>
                <p className="text-[#94a3b8] leading-relaxed mb-6">{svc.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
                  {svc.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                      <CheckCircle2 size={14} className="text-[#22c55e] shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${svc.color} text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5`}
                  >
                    {svc.cta} <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+18884003290"
                    className="inline-flex items-center gap-2 border border-[#1e3a5f] text-[#94a3b8] hover:text-white hover:border-[#1d6ef5] font-semibold px-6 py-3 rounded-xl transition-all"
                  >
                    <Phone size={15} />
                    Call Now
                  </a>
                </div>
              </div>
              <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden glow-card bg-[#0a0f1e]">
                  {svc.id === 'camera' && <SecurityCameraIllustration />}
                  {svc.id === 'doorbell' && <DoorbellIllustration />}
                  {svc.id === 'setup' && <NetworkIllustration />}
                  {svc.id === 'support' && <QuickServiceIllustration />}
                  <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-5 pointer-events-none`} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Add-ons */}
      <section className="py-20 px-4 bg-[#060c1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-white font-serif">Additional Services & Add-Ons</h2>
            <p className="text-[#94a3b8] mt-2">Enhance your security setup with our specialty services</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {addOns.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glow-card bg-[#111827] rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#1d6ef5]/15 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-[#1d6ef5]" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
                <p className="text-[#94a3b8] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 px-4 bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white font-serif mb-4">Ready to Get Started?</h2>
          <p className="text-[#94a3b8] mb-7">Call us now for a free consultation or book online in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18884003290" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-1">
              <Phone size={18} /> +1 (888) 400-3290
            </a>
            <Link href="/book" className="inline-flex items-center justify-center gap-2 border-2 border-[#00c2ff] text-[#00c2ff] font-bold px-8 py-4 rounded-xl hover:bg-[#00c2ff] hover:text-[#0a0f1e] transition-all">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
