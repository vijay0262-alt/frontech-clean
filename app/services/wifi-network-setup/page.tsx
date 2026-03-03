import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Phone, ArrowRight, Shield, Star, Clock, Zap, Wifi, Router, Globe, Lock, ChevronDown } from 'lucide-react'

const BASE = 'https://frontechsecurity.com'
const PAGE_URL = `${BASE}/services/wifi-network-setup`

export const metadata: Metadata = {
  title: 'Wi-Fi & Network Setup for Security Cameras — Router, Extender & Remote Access | FrontechSecurity',
  description: 'Professional Wi-Fi optimization for security cameras and smart doorbells — router config, extender installation, port forwarding, and remote access setup. USA & Canada. Call +1 (888) 400-3290.',
  keywords: [
    'wifi setup for security cameras',
    'network setup security cameras',
    'security camera wifi not working',
    'security camera keeps going offline',
    'router configuration security cameras',
    'port forwarding security cameras',
    'remote access security camera setup',
    'wifi extender for security cameras',
    'mesh network security cameras',
    'NVR remote access setup',
    'DDNS setup security camera',
    'QoS router security camera',
    'security camera network optimization',
    'CCTV network setup service',
    'smart home network configuration',
    'router setup smart home USA',
    'wifi camera keeps disconnecting fix',
    'security camera ip address setup',
  ].join(', '),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Wi-Fi & Network Setup for Security Cameras — FrontechSecurity',
    description: 'Expert network optimization so your cameras and doorbells stay online 24/7. Router config, extenders, port forwarding, remote access. USA & Canada.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'FrontechSecurity',
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: 'Wi-Fi Network Setup for Security Cameras — FrontechSecurity' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wi-Fi & Network Setup for Security Cameras | FrontechSecurity',
    description: 'Fix disconnecting cameras with expert Wi-Fi and network optimization. USA & Canada.',
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
        { '@type': 'ListItem', position: 3, name: 'Wi-Fi & Network Setup', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Wi-Fi & Network Setup for Security Cameras',
      serviceType: 'Network Configuration',
      description: 'Professional Wi-Fi and network optimization for security cameras and smart doorbells — signal assessment, extender installation, router configuration, port forwarding, DDNS setup, and remote access.',
      url: PAGE_URL,
      provider: { '@type': 'LocalBusiness', name: 'FrontechSecurity', url: BASE },
      areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Why does my security camera keep going offline?', acceptedAnswer: { '@type': 'Answer', text: 'The most common causes are weak Wi-Fi signal at the camera location, router firmware issues, IP address conflicts, or a router that drops idle connections. Our technicians diagnose the exact cause and fix it during a single visit.' } },
        { '@type': 'Question', name: 'Do I need a separate network for my security cameras?', acceptedAnswer: { '@type': 'Answer', text: 'It is best practice to put security cameras on a dedicated network or VLAN for security and performance. We can set this up if your router supports it.' } },
        { '@type': 'Question', name: 'What is port forwarding and do I need it?', acceptedAnswer: { '@type': 'Answer', text: 'Port forwarding allows you to access your NVR or camera system remotely over the internet without a cloud subscription. We set it up on your router so you can view cameras from any network worldwide.' } },
        { '@type': 'Question', name: 'Will setting up an extender slow down my internet?', acceptedAnswer: { '@type': 'Answer', text: 'A correctly placed and configured Wi-Fi extender will not noticeably slow your main network. We place extenders in optimal locations.' } },
        { '@type': 'Question', name: 'Can you configure my router if I have a complex setup?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with all router brands and ISP-provided gateways including Xfinity, AT&T, Spectrum, Fios, and more.' } },
      ],
    },
  ],
}

const features = [
  { icon: Wifi, title: 'Wi-Fi Coverage Assessment', desc: 'We measure signal strength at every camera location and identify dead zones that cause disconnections.' },
  { icon: Router, title: 'Extender & Mesh Setup', desc: 'Installation and configuration of Wi-Fi extenders or mesh nodes to eliminate weak signal areas.' },
  { icon: Globe, title: 'Remote Access Setup', desc: 'Port forwarding, DDNS configuration, and static IP setup so you can access your cameras from anywhere.' },
  { icon: Lock, title: 'Router Security Config', desc: 'We configure your router with strong security settings to keep your camera network protected from intrusion.' },
  { icon: Zap, title: 'Bandwidth Optimization', desc: 'QoS (Quality of Service) settings that prioritize camera traffic for uninterrupted HD streaming.' },
  { icon: Shield, title: 'All Devices Reconnected', desc: 'After network changes we reconnect every camera and doorbell to ensure nothing is left offline.' },
]

const faqs = [
  { q: 'Why does my security camera keep going offline?', a: 'The most common causes are weak Wi-Fi signal at the camera location, router firmware that needs updating, IP address conflicts, or a router that drops connections after idle periods. Our technicians diagnose the exact cause and fix it during a single visit.' },
  { q: 'Do I need a separate network for my security cameras?', a: 'It is best practice to put security cameras on a dedicated network or VLAN for security and performance reasons. We can set this up during our visit if your router supports it, or recommend an upgrade if needed.' },
  { q: 'What is port forwarding and do I need it?', a: 'Port forwarding allows you to access your NVR or camera system remotely over the internet without a cloud subscription. We set it up on your router so you can view your cameras from any network worldwide. Not all systems require it — we advise based on your specific setup.' },
  { q: 'Will setting up an extender slow down my internet?', a: 'A correctly placed and configured Wi-Fi extender will not noticeably slow your main network. We place extenders in optimal locations and configure them as backhaul nodes where possible to minimize latency.' },
  { q: 'Can you configure my router if I have a complex setup?', a: 'Yes. We work with all router brands and ISP-provided gateway devices including Xfinity, AT&T, Spectrum, Fios, and more. We handle complex setups including double NAT situations, business routers, and managed switches.' },
]

export default function WifiNetworkSetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <div className="bg-[#0a0f1e]">
      <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#7c3aed]/8 to-transparent" />
        </div>
        <div className="max-w-5xl mx-auto relative">
          <nav className="flex items-center gap-2 text-xs text-[#64748b] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#94a3b8] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#94a3b8] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#94a3b8]">Wi-Fi & Network Setup</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#7c3aed]/15 border border-[#7c3aed]/40 rounded-full px-3 py-1.5 mb-5">
            <Wifi size={13} className="text-[#a78bfa]" />
            <span className="text-[#a78bfa] text-xs font-bold tracking-wider uppercase">Critical for Camera Performance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 font-serif text-balance">
            Wi-Fi & Network Setup <span className="gradient-text">for Security Cameras</span>
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-8 max-w-3xl">
            Even the most expensive security camera is useless if it keeps going offline. Our network specialists assess your home Wi-Fi, eliminate dead zones, optimize router settings, and ensure every camera and doorbell maintains a fast, stable connection around the clock — so your security system is always working when you need it.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Wi-Fi Signal Assessment', 'Extender & Mesh Setup', 'Port Forwarding Config', 'Remote Access Setup', 'Router Security Settings', 'All Devices Reconnected'].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs text-[#f0f4ff] bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <CheckCircle2 size={11} className="text-[#22c55e] shrink-0" />{b}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+18884003290" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#1d6ef5] text-white font-bold text-base px-7 py-4 rounded-xl hover:shadow-xl hover:shadow-[#7c3aed]/30 transition-shadow pulse-phone">
              <Phone size={18} /> Call +1 (888) 400-3290 — Free Consult
            </a>
            <Link href="/book" className="inline-flex items-center justify-center gap-2 border-2 border-[#00c2ff] text-[#00c2ff] font-bold text-base px-7 py-4 rounded-xl hover:bg-[#00c2ff] hover:text-[#0a0f1e] transition-colors">
              Book Online <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-[#0f1e3d] border-y border-[#1e3a5f] py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[
            { icon: Star, text: '4.9/5 Rating (2,400+ Reviews)', color: '#f59e0b' },
            { icon: Shield, text: 'Licensed & Insured Technicians', color: '#22c55e' },
            { icon: Clock, text: 'Same-Day Appointments Available', color: '#00c2ff' },
            { icon: Zap, text: 'Cameras Stay Online After Every Visit', color: '#7c3aed' },
          ].map(({ icon: Icon, text, color }) => (
            <span key={text} className="flex items-center gap-2 text-sm text-[#94a3b8]">
              <Icon size={14} style={{ color }} />{text}
            </span>
          ))}
        </div>
      </div>

      <section className="py-20 px-4 bg-[#060c1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#7c3aed] text-xs font-bold uppercase tracking-widest">What Is Included</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif text-balance">Complete Network Setup for Your Security Devices</h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">Every network optimization visit is customized to your specific property, ISP setup, and device count.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glow-card bg-[#111827] rounded-xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#7c3aed]" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[#7c3aed] text-xs font-bold uppercase tracking-widest">Why It Matters</span>
            <h2 className="text-3xl font-black text-white mt-2 mb-4 font-serif text-balance">A Security Camera Is Only as Good as Its Connection</h2>
            <p className="text-[#94a3b8] leading-relaxed mb-5">Most security camera issues — cameras going offline, delayed motion alerts, poor video quality, failed recordings — are not hardware problems. They are network problems. A camera that drops its Wi-Fi connection during a break-in is worse than having no camera at all because it creates a false sense of security.</p>
            <p className="text-[#94a3b8] leading-relaxed mb-5">Our network specialists have configured hundreds of home and small business networks specifically for security device performance. We understand the bandwidth requirements of HD and 4K cameras, the latency requirements for real-time alerts, and the port forwarding rules needed for NVR remote access on every major router brand.</p>
            <p className="text-[#94a3b8] leading-relaxed mb-6">Whether you just installed new cameras or you have an existing system that keeps going offline, our network service delivers a stable foundation for your entire security ecosystem.</p>
            <a href="tel:+18884003290" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#1d6ef5] text-white font-bold px-6 py-3.5 rounded-xl hover:shadow-lg transition-shadow">
              <Phone size={16} /> Fix My Camera Network
            </a>
          </div>
          <div className="glow-card bg-[#111827] rounded-2xl p-7">
            <h3 className="text-white font-bold font-serif mb-5">Full Network Setup Checklist</h3>
            <ul className="space-y-3">
              {[
                'Wi-Fi signal strength test at all camera locations',
                'Dead zone identification and extender placement plan',
                'Wi-Fi extender or mesh node installation',
                'Router firmware update check',
                'DHCP reservation for all security devices',
                'Port forwarding rules for NVR/DVR remote access',
                'DDNS (dynamic DNS) hostname setup',
                'Static or reserved IP configuration',
                'QoS camera traffic prioritization',
                'Isolated VLAN or guest network for cameras',
                'Router firewall and security settings review',
                'All cameras and doorbells reconnected and tested',
                'Remote access test from an external network',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                  <CheckCircle2 size={15} className="text-[#22c55e] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#060c1a]">
        <div className="max-w-3xl mx-auto text-center glow-card bg-[#111827] rounded-2xl p-10">
          <span className="text-[#22c55e] text-xs font-bold uppercase tracking-widest">Add-On Service</span>
          <h2 className="text-3xl font-black text-white mt-2 mb-3 font-serif">Network Setup — Add-On Pricing</h2>
          <p className="text-[#94a3b8] mb-2 max-w-xl mx-auto">Wi-Fi and network configuration is available as an add-on to any installation service or as a standalone visit. Call us to discuss your situation and get a flat-rate quote.</p>
          <p className="text-[#64748b] text-xs mb-7">Hardware (extenders, managed switches, mesh nodes) not included in service price and is quoted separately.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+18884003290" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#1d6ef5] text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-shadow pulse-phone">
              <Phone size={18} /> Call +1 (888) 400-3290
            </a>
            <Link href="/book" className="inline-flex items-center justify-center gap-2 border-2 border-[#00c2ff] text-[#00c2ff] font-bold px-8 py-4 rounded-xl hover:bg-[#00c2ff] hover:text-[#0a0f1e] transition-colors">
              Book Online
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#7c3aed] text-xs font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl font-black text-white mt-2 font-serif text-balance">Network Setup — Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group glow-card bg-[#111827] rounded-xl">
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-6 text-white font-semibold text-sm list-none">
                  {q}
                  <ChevronDown size={16} className="text-[#7c3aed] shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="px-6 pb-6 text-[#94a3b8] text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#060c1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-black text-white font-serif mb-6 text-center">Explore Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: '/services/security-camera-installation', title: 'Security Camera Installation', desc: 'Full camera mounting, wiring, and app setup service.' },
              { href: '/services/doorbell-installation', title: 'Smart Doorbell Installation', desc: 'Professional doorbell setup with Wi-Fi pairing included.' },
              { href: '/services/quick-service-support', title: 'Ongoing Service & Support', desc: '7-day phone and remote support for your system.' },
            ].map(({ href, title, desc }) => (
              <Link key={href} href={href} className="glow-card bg-[#111827] rounded-xl p-5 hover:border-[#7c3aed] border border-[#1e3a5f] transition-colors group">
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-[#a78bfa] transition-colors">{title}</h3>
                <p className="text-[#94a3b8] text-xs leading-relaxed">{desc}</p>
                <span className="inline-flex items-center gap-1 text-[#7c3aed] text-xs font-semibold mt-3">Learn More <ArrowRight size={12} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
