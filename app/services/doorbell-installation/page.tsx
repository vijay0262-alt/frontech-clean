import type { Metadata } from 'next'
import LandingPageLayout from '@/components/LandingPageLayout'
import { CheckCircle2, Phone, ArrowRight, Shield, Star, Clock, Zap, BellRing, Wifi, Smartphone, Volume2, ChevronDown, Wrench, AlertCircle } from 'lucide-react'

const BASE = 'https://frontechsecurity.com'
const PAGE_URL = `${BASE}/services/doorbell-installation`

export const metadata: Metadata = {
  title: 'Smart Doorbell Installation Service Near Me | Ring, Nest, Arlo — FrontechSecurity',
  description: 'Expert video doorbell installation & repair. Ring, Nest, Arlo, Blink & all brands. Fix not connecting, not working, offline issues. Professional setup & troubleshooting. Same-day service USA & Canada from $49.99. Call +1 (888) 400-3290.',
  keywords: [
    'Ring doorbell installation',
    'Ring doorbell not working',
    'Ring doorbell not connecting',
    'Nest doorbell installation',
    'Arlo doorbell installation',
    'Blink doorbell installation',
    'video doorbell repair',
    'doorbell installation service',
    'doorbell not connecting to wifi',
    'doorbell offline',
    'doorbell troubleshooting',
    'same day doorbell installation',
    'doorbell setup help',
    'video doorbell not working',
    'smart doorbell repair near me',
  ].join(', '),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Smart Doorbell Installation Near Me — Ring, Nest, Arlo | FrontechSecurity',
    description: 'Certified installation of Ring, Google Nest, Arlo, Eufy, Wyze, and all video doorbell brands. Same-day across USA & Canada from $49.99. Call now.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'FrontechSecurity',
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: 'Smart Doorbell Installation Service — FrontechSecurity' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Doorbell Installation Near Me | FrontechSecurity',
    description: 'Certified Ring, Nest, Arlo, Eufy doorbell installation. Same-day service. USA & Canada from $49.99.',
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
        { '@type': 'ListItem', position: 3, name: 'Smart Doorbell Installation', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Smart Doorbell Installation Service',
      serviceType: 'Video Doorbell Installation',
      description: 'Professional smart doorbell installation for Ring, Google Nest, Arlo, Eufy, Wyze, and all major brands. Includes old doorbell removal, wiring, mounting, Wi-Fi pairing, chime setup, app installation on all devices, and full walkthrough.',
      url: PAGE_URL,
      provider: { '@type': 'LocalBusiness', name: 'FrontechSecurity', url: BASE },
      areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '49.99', description: 'Complete installation service including app setup and chime. No payment until complete.' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '2400', bestRating: '5' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does my home need existing doorbell wiring?', acceptedAnswer: { '@type': 'Answer', text: 'No. We install both hardwired and battery-powered doorbells. If your home has existing doorbell wiring we will connect your new device to it. If not, we install the battery version which requires no wiring at all.' } },
        { '@type': 'Question', name: 'Which doorbell brands do you install?', acceptedAnswer: { '@type': 'Answer', text: 'We install all major brands including Ring (all models), Google Nest Doorbell, Arlo Video Doorbell, Eufy Video Doorbell, Wyze Video Doorbell, Reolink, Lorex, and more.' } },
        { '@type': 'Question', name: 'How long does doorbell installation take?', acceptedAnswer: { '@type': 'Answer', text: 'A standard smart doorbell installation takes 45 minutes to 1.5 hours depending on whether wiring is involved.' } },
        { '@type': 'Question', name: 'Will my chime still work after installation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We install or reconfigure your existing indoor chime as part of the service.' } },
        { '@type': 'Question', name: 'What if my Wi-Fi signal is weak at the front door?', acceptedAnswer: { '@type': 'Answer', text: 'We assess Wi-Fi signal strength during installation. If the signal is too weak we can set up a Wi-Fi range extender as part of the same visit.' } },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How Smart Doorbell Installation Works',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Booking & Consultation', text: 'Call or book online. Tell us your doorbell brand and model. We confirm if hardwired or battery powered and advise on any wiring needed.' },
        { '@type': 'HowToStep', position: 2, name: 'Old Doorbell Removal', text: 'We safely remove your existing doorbell and chime, inspect the existing wiring, and ensure the voltage is compatible with your new device.' },
        { '@type': 'HowToStep', position: 3, name: 'Mounting & Wiring', text: 'The new doorbell is mounted level and secure. For hardwired models, wiring is connected and tested.' },
        { '@type': 'HowToStep', position: 4, name: 'Wi-Fi Pairing', text: 'Your doorbell is connected to your home Wi-Fi network. We check signal strength and use a Wi-Fi extender if needed.' },
        { '@type': 'HowToStep', position: 5, name: 'App Setup & Walkthrough', text: 'The app is installed on all household smartphones. We demonstrate live view, two-way talk, motion alerts, and playback.' },
      ],
    },
  ],
}

const features = [
  { icon: BellRing, title: 'All Doorbell Brands', desc: 'Ring, Google Nest, Arlo, Eufy, Wyze, Reolink, Lorex, and more — we install every major brand.' },
  { icon: Wifi, title: 'Wi-Fi Pairing & Config', desc: 'Full network pairing, signal strength optimization, and router settings so your doorbell stays online 24/7.' },
  { icon: Volume2, title: 'Chime Box Installation', desc: 'We install or replace your existing chime box and ensure it rings correctly for both hardwired and wireless models.' },
  { icon: Smartphone, title: 'App Setup on All Devices', desc: 'We set up the app on every smartphone in your household including iOS and Android, so everyone gets alerts.' },
  { icon: Shield, title: 'Motion Zone Setup', desc: 'Custom motion detection zones, sensitivity levels, and package detection configuration to minimize false alerts.' },
  { icon: Zap, title: 'Two-Way Audio Testing', desc: 'We test and calibrate speaker and microphone quality so you can have clear conversations at your front door.' },
]

const process = [
  { step: '01', title: 'Booking & Consultation', desc: 'Call or book online. Tell us your doorbell brand and model. We confirm if hardwired or battery powered and advise on any wiring needed.' },
  { step: '02', title: 'Old Doorbell Removal', desc: 'We safely remove your existing doorbell and chime, inspect the existing wiring (if any), and ensure the voltage is compatible with your new device.' },
  { step: '03', title: 'Mounting & Wiring', desc: 'The new doorbell is mounted level and secure. For hardwired models, wiring is connected and tested. Angle wedge mounts are installed if needed for optimal camera angle.' },
  { step: '04', title: 'Wi-Fi Pairing', desc: 'Your doorbell is connected to your home Wi-Fi network. We check signal strength at the mounting location and use a Wi-Fi extender if needed for a stable connection.' },
  { step: '05', title: 'App Setup & Walkthrough', desc: 'The app is installed and configured on all household smartphones. We demonstrate live view, two-way talk, motion alerts, and recorded footage access.' },
]

const faqs = [
  { q: 'Does my home need existing doorbell wiring?', a: 'No. We install both hardwired and battery-powered doorbells. If your home has existing doorbell wiring we will connect your new device to it. If not, we install the battery version which requires no wiring at all.' },
  { q: 'Which doorbell brands do you install?', a: 'We install all major brands including Ring (all models), Google Nest Doorbell, Arlo Video Doorbell, Eufy Video Doorbell, Wyze Video Doorbell, Reolink, Lorex, and more. If your brand is not listed here, just call us and we will confirm.' },
  { q: 'How long does doorbell installation take?', a: 'A standard smart doorbell installation takes 45 minutes to 1.5 hours depending on whether wiring is involved and how many devices we are setting up the app on.' },
  { q: 'Will my chime still work after installation?', a: 'Yes. We install or reconfigure your existing indoor chime as part of the service. For battery-powered doorbells we also offer wireless chime add-ons that we can install at the same time.' },
  { q: 'What if my Wi-Fi signal is weak at the front door?', a: 'We assess Wi-Fi signal strength during installation. If the signal is too weak for reliable performance we can set up a Wi-Fi range extender (sold separately) as part of the same visit to ensure a stable connection.' },
  { q: 'Is there a subscription required for the doorbell to work?', a: 'No subscription is required for basic live view and two-way audio. However, cloud video history (recorded footage storage) typically requires a paid subscription from the manufacturer (e.g. Ring Protect, Nest Aware). We will explain your options during installation.' },
]

export default function DoorbellInstallationPage() {
  return (
    <LandingPageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <div className="bg-[#0a0f1e]">

      {/* Hero */}
      <section className="relative py-10 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(14,165,233,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0ea5e9]/8 to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto relative">

          <div className="inline-flex items-center gap-2 bg-[#0ea5e9]/15 border border-[#0ea5e9]/40 rounded-full px-3 py-1.5 mb-5">
            <BellRing size={13} className="text-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-bold tracking-wider uppercase">High Demand Service</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 font-serif text-balance">
            Video Doorbell Installation & Repair <span className="gradient-text">Near You</span>
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-8 max-w-3xl">
            <strong className="text-white">Professional installation, setup & repair for Ring, Nest, Arlo, Blink & all doorbell brands.</strong> Fix doorbell not connecting, not working, offline issues. Expert troubleshooting & same-day service across USA & Canada. From $49.99.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Ring, Nest, Arlo, Blink Support', 'Not Working? We Fix It', 'Same-Day Service', 'WiFi Connection Issues Solved', 'Installation & Repair', 'No Fix, No Pay'].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs text-[#f0f4ff] bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <CheckCircle2 size={11} className="text-[#22c55e] shrink-0" />{b}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+18884003290" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#00c2ff] text-white font-bold text-lg px-8 py-5 rounded-xl hover:shadow-xl hover:shadow-[#0ea5e9]/30 transition-shadow pulse-phone animate-pulse">
              <Phone size={20} /> Call Now (888) 400-3290
            </a>
          </div>
          <p className="text-sm text-[#94a3b8] mt-4">✓ Available 7 Days a Week  •  ✓ Same-Day Appointments  •  ✓ Free Phone Consultation</p>
          <p className="text-xs text-[#64748b] mt-3 max-w-2xl">* Third-party professional installation service. Not affiliated with or endorsed by Ring, Nest, Arlo, Blink, or any doorbell manufacturer.</p>
        </div>
      </section>

      {/* Why Choose Us - Clear Value Proposition */}
      <section className="py-12 px-4 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 font-serif">Why Customers Call Us for Doorbell Help</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glow-card bg-[#111827] rounded-xl p-6">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-white font-bold mb-2">Speak to Real Expert</h3>
              <p className="text-[#94a3b8] text-sm">Live technician support — no bots, no wait. Get instant help over the phone.</p>
            </div>
            <div className="glow-card bg-[#111827] rounded-xl p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-white font-bold mb-2">Same-Day Service</h3>
              <p className="text-[#94a3b8] text-sm">Doorbell offline? Need urgent fix? We come to you today — call now for availability.</p>
            </div>
            <div className="glow-card bg-[#111827] rounded-xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-white font-bold mb-2">Fixed Right First Time</h3>
              <p className="text-[#94a3b8] text-sm">Certified technicians with 10+ years experience. We guarantee our work.</p>
            </div>
          </div>
          <div className="mt-8">
            <a href="tel:+18884003290" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#00c2ff] text-white font-bold text-lg px-10 py-5 rounded-xl hover:shadow-2xl hover:shadow-[#0ea5e9]/40 transition-all pulse-phone animate-pulse">
              <Phone size={22} className="animate-bounce" /> Call Now (888) 400-3290
            </a>
            <p className="text-sm text-[#94a3b8] mt-3">Open Now • Average wait time: under 30 seconds</p>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-[#0f1e3d] border-y border-[#1e3a5f] py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[
            { icon: Star, text: '4.9/5 Rating (2,400+ Reviews)', color: '#f59e0b' },
            { icon: Shield, text: 'Licensed & Insured Technicians', color: '#22c55e' },
            { icon: Clock, text: 'Same-Day Appointments Available', color: '#00c2ff' },
            { icon: Zap, text: 'Average Install: Under 90 Minutes', color: '#0ea5e9' },
          ].map(({ icon: Icon, text, color }) => (
            <span key={text} className="flex items-center gap-2 text-sm text-[#94a3b8]">
              <Icon size={14} style={{ color }} />{text}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="py-20 px-4 bg-[#060c1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#0ea5e9] text-xs font-bold uppercase tracking-widest">What Is Included</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif text-balance">
              Everything Covered in Our Doorbell Installation
            </h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">One flat rate covers the complete service — no extra charges for wiring, app setup, or chime configuration.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glow-card bg-[#111827] rounded-xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#0ea5e9]" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist + content */}
      <section className="py-20 px-4 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[#0ea5e9] text-xs font-bold uppercase tracking-widest">Service Detail</span>
            <h2 className="text-3xl font-black text-white mt-2 mb-4 font-serif text-balance">Why Professional Doorbell Installation Matters</h2>
            <p className="text-[#94a3b8] leading-relaxed mb-5">
              A smart doorbell is your first line of defense — it identifies visitors, deters package theft, and gives you two-way communication with anyone at your door whether you are at home, at work, or on vacation. But a poorly installed doorbell with a weak Wi-Fi connection, incorrect angle, or misconfigured motion zones provides very little real protection.
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-5">
              Our technicians ensure every doorbell is installed at the correct height and angle for maximum face capture, connected to a strong Wi-Fi signal, and fully configured with the right motion sensitivity so you get alerts for what matters without constant false notifications.
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-6">
              We also ensure your chime works correctly — including installing a compatible chime box if your home does not already have one — and that every person in your household has the app set up and knows how to use it.
            </p>
            <a href="tel:+18884003290" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#00c2ff] text-white font-bold px-6 py-3.5 rounded-xl hover:shadow-lg transition-shadow">
              <Phone size={16} /> Get a Free Estimate
            </a>
          </div>
          <div className="glow-card bg-[#111827] rounded-2xl p-7">
            <h3 className="text-white font-bold font-serif mb-5">Complete Doorbell Installation Checklist</h3>
            <ul className="space-y-3">
              {[
                'Existing doorbell and chime removal',
                'Voltage and wiring compatibility check',
                'Doorbell mounting at optimal height & angle',
                'Angle wedge mount installation if needed',
                'Hardwired connection or battery installation',
                'Indoor chime box installation or replacement',
                'Wi-Fi network pairing and signal test',
                'Motion zone and sensitivity configuration',
                'Package detection setup (where supported)',
                'Two-way audio speaker and mic calibration',
                'Night vision and HDR quality check',
                'App installation on all household phones',
                'Live view, playback, and alert walkthrough',
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

      {/* How it works */}
      <section className="py-20 px-4 bg-[#060c1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#0ea5e9] text-xs font-bold uppercase tracking-widest">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif text-balance">How Doorbell Installation Works</h2>
          </div>
          <div className="space-y-4">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5 glow-card bg-[#111827] rounded-xl p-6">
                <div className="text-3xl font-black gradient-text font-serif shrink-0 w-10">{step}</div>
                <div>
                  <h3 className="text-white font-bold mb-1">{title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent CTA - Optimized for Calls */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0a0f1e] to-[#060c1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center glow-card bg-gradient-to-br from-[#111827] to-[#0a0f1e] border-2 border-[#0ea5e9]/30 rounded-2xl p-10">
            <div className="inline-block bg-[#22c55e]/20 border border-[#22c55e]/40 rounded-full px-4 py-2 mb-4">
              <span className="text-[#22c55e] text-sm font-bold">✓ We're Available Right Now</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif">Need Your Doorbell Working Today?</h2>
            <p className="text-lg text-[#94a3b8] mb-3 max-w-2xl mx-auto">Stop struggling with confusing apps and settings. Call us and speak with a certified technician in under 30 seconds.</p>
            <div className="bg-[#0a0f1e]/60 rounded-xl p-6 mb-6 max-w-xl mx-auto">
              <p className="text-white font-bold mb-2">📋 Service Pricing:</p>
              <p className="text-[#94a3b8] text-sm mb-2">• Professional Installation: Starting at $49.99</p>
              <p className="text-[#94a3b8] text-sm mb-2">• Repair & Troubleshooting: From $49.99</p>
              <p className="text-[#94a3b8] text-sm">• Phone Consultation: FREE (Call now)</p>
              <p className="text-[#64748b] text-xs mt-3">*Service fee only. Hardware/parts sold separately. No payment until work is complete.</p>
            </div>
            <div className="space-y-3">
              <a href="tel:+18884003290" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0ea5e9] to-[#00c2ff] text-white font-bold text-xl px-12 py-6 rounded-xl hover:shadow-2xl hover:shadow-[#0ea5e9]/50 transition-all pulse-phone animate-pulse w-full sm:w-auto">
                <Phone size={26} className="animate-bounce" /> Call Now (888) 400-3290
              </a>
              <p className="text-sm text-[#94a3b8]">👨‍🔧 Live Expert Available • 📞 Free Consultation • ⚡ Same-Day Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-[#060c1a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#0ea5e9] text-xs font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl font-black text-white mt-2 font-serif text-balance">Frequently Asked Questions About Doorbell Installation</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group glow-card bg-[#111827] rounded-xl">
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-6 text-white font-semibold text-sm list-none">
                  {q}
                  <ChevronDown size={16} className="text-[#0ea5e9] shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="px-6 pb-6 text-[#94a3b8] text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-16 px-4 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white font-serif mb-3">Third-Party Support for All Doorbell Brands</h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">Independent professional installation, setup, repair & troubleshooting service (not affiliated with manufacturers)</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Ring Doorbell', icon: BellRing },
              { name: 'Nest Doorbell', icon: BellRing },
              { name: 'Arlo Doorbell', icon: BellRing },
              { name: 'Blink Doorbell', icon: BellRing },
              { name: 'Eufy Doorbell', icon: BellRing },
              { name: 'Wyze Doorbell', icon: BellRing },
              { name: 'Reolink Doorbell', icon: BellRing },
              { name: 'ADT Doorbell', icon: Shield },
              { name: 'Lorex Doorbell', icon: BellRing },
              { name: 'All Brands', icon: Wrench },
            ].map(({ name, icon: Icon }) => (
              <div key={name} className="glow-card bg-[#111827] rounded-xl p-5 text-center">
                <Icon size={28} className="text-[#0ea5e9] mx-auto mb-2" />
                <p className="text-white font-bold text-sm">{name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="tel:+18884003290" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#00c2ff] text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-shadow">
              <Phone size={18} /> Call Now (888) 400-3290
            </a>
          </div>
        </div>
      </section>

      {/* Common Issues We Fix */}
      <section className="py-16 px-4 bg-[#060c1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white font-serif mb-3">Common Doorbell Issues We Fix</h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">From installation to repair & troubleshooting — we solve all video doorbell problems</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { issue: 'Doorbell Not Connecting to WiFi', desc: 'Network pairing, signal boost, router configuration, extender setup' },
              { issue: 'Doorbell Not Working / Offline', desc: 'Power check, transformer replacement, wiring diagnostics, firmware update' },
              { issue: 'No Video Feed / Black Screen', desc: 'Camera lens cleaning, app troubleshooting, account sync, device reset' },
              { issue: 'Chime Not Ringing', desc: 'Chime box installation, voltage check, wireless chime pairing' },
              { issue: 'Motion Alerts Not Working', desc: 'Zone setup, sensitivity adjustment, notification settings configuration' },
              { issue: 'Two-Way Audio Not Working', desc: 'Microphone & speaker test, volume calibration, connection diagnostics' },
            ].map(({ issue, desc }) => (
              <div key={issue} className="glow-card bg-[#111827] rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle size={20} className="text-[#f59e0b] shrink-0 mt-0.5" />
                  <h3 className="text-white font-bold text-base">{issue}</h3>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="bg-gradient-to-r from-[#0ea5e9]/10 to-[#00c2ff]/10 border-2 border-[#0ea5e9]/30 rounded-2xl p-8 mb-8">
              <p className="text-xl text-white font-black mb-2">🚨 Doorbell Emergency? Need Help NOW?</p>
              <p className="text-[#94a3b8] mb-4">Don't waste time troubleshooting alone. Our technicians solve 90% of issues on the first call.</p>
              <a href="tel:+18884003290" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0ea5e9] to-[#00c2ff] text-white font-bold text-lg px-10 py-5 rounded-xl hover:shadow-2xl transition-all pulse-phone animate-pulse">
                <Phone size={22} className="animate-bounce" /> Call Now (888) 400-3290
              </a>
              <p className="text-xs text-[#94a3b8] mt-3">Available 7 days/week • No appointment needed for phone support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clear Disclaimers Section */}
      <section className="py-12 px-4 bg-[#0a0f1e] border-t border-[#1e3a5f]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111827] border border-[#1e3a5f] rounded-xl p-6">
            <h3 className="text-white font-bold mb-4 text-center">Third-Party Service Disclosure</h3>
            <div className="space-y-3 text-sm text-[#94a3b8] leading-relaxed">
              <p>
                <strong className="text-white">Independent Service Provider:</strong> FrontechSecurity is a third-party, independent technical support and installation service provider. We are NOT affiliated with, authorized by, endorsed by, or sponsored by Ring LLC, Google Nest, Arlo Technologies, Amazon Blink, Eufy, ADT Inc., or any other video doorbell manufacturer or brand mentioned on this website.
              </p>
              <p>
                <strong className="text-white">Brand Names & Trademarks:</strong> All product names, brand names, trademarks, and registered trademarks mentioned are the property of their respective owners. We use these names solely for descriptive and compatibility purposes to help customers understand which devices and brands we can service.
              </p>
              <p>
                <strong className="text-white">Service Scope:</strong> Our services include installation, setup, configuration, troubleshooting, and repair assistance for video doorbells and related equipment. Hardware/devices are not included unless explicitly stated. Customers must own or purchase their own equipment.
              </p>
              <p>
                <strong className="text-white">Pricing:</strong> Service fees start at $49.99 for basic installation. Final pricing depends on complexity, time required, and specific customer needs. No payment is collected until service completion and customer satisfaction.
              </p>
              <p>
                <strong className="text-white">Manufacturer Support:</strong> For warranty claims or manufacturer-specific support, customers should contact the device manufacturer directly. We provide third-party technical assistance independent of manufacturer warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-gradient-to-b from-[#0a0f1e] to-[#060c1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-serif">Ready to Get Your Video Doorbell Working?</h2>
          <p className="text-lg text-[#94a3b8] mb-8">Speak with a certified technician now — free phone consultation</p>
          <a href="tel:+18884003290" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0ea5e9] to-[#00c2ff] text-white font-black text-xl px-10 py-6 rounded-2xl hover:shadow-2xl hover:shadow-[#0ea5e9]/40 transition-all pulse-phone animate-pulse">
            <Phone size={24} className="animate-pulse" /> 
            <span>CALL NOW (888) 400-3290</span>
          </a>
          <p className="text-sm text-[#64748b] mt-6">Available 7 days a week  •  Same-day appointments available  •  100% satisfaction guaranteed</p>
        </div>
      </section>

      {/* Clear Disclaimers Section */}
      <section className="py-12 px-4 bg-[#0a0f1e] border-t border-[#1e3a5f]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111827] border border-[#1e3a5f] rounded-xl p-6">
            <h3 className="text-white font-bold mb-4 text-center">Third-Party Service Disclosure</h3>
            <div className="space-y-3 text-sm text-[#94a3b8] leading-relaxed">
              <p>
                <strong className="text-white">Independent Service Provider:</strong> FrontechSecurity is a third-party, independent technical support and installation service provider. We are NOT affiliated with, authorized by, endorsed by, or sponsored by Ring LLC, Google Nest, Arlo Technologies, Amazon Blink, Eufy, Wyze, Reolink, ADT Inc., or any other video doorbell manufacturer or brand mentioned on this website.
              </p>
              <p>
                <strong className="text-white">Brand Names & Trademarks:</strong> All product names, brand names, trademarks, and registered trademarks mentioned are the property of their respective owners. We use these names solely for descriptive and compatibility purposes to help customers understand which devices and brands we can service.
              </p>
              <p>
                <strong className="text-white">Service Scope:</strong> Our services include installation, setup, configuration, troubleshooting, and repair assistance for video doorbells and related equipment. Hardware/devices are not included unless explicitly stated. Customers must own or purchase their own equipment.
              </p>
              <p>
                <strong className="text-white">Pricing:</strong> Service fees start at $49.99 for basic installation. Final pricing depends on complexity, time required, and specific customer needs. No payment is collected until service completion and customer satisfaction.
              </p>
              <p>
                <strong className="text-white">Manufacturer Support:</strong> For warranty claims or manufacturer-specific support, customers should contact the device manufacturer directly. We provide third-party technical assistance independent of manufacturer warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-gradient-to-b from-[#0a0f1e] to-[#060c1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-serif">Ready to Get Your Doorbell Working?</h2>
          <p className="text-lg text-[#94a3b8] mb-8">Speak with a certified technician now — free phone consultation</p>
          <a href="tel:+18884003290" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0ea5e9] to-[#00c2ff] text-white font-black text-xl px-10 py-6 rounded-2xl hover:shadow-2xl hover:shadow-[#0ea5e9]/40 transition-all pulse-phone animate-pulse">
            <Phone size={24} className="animate-pulse" /> 
            <span>CALL NOW (888) 400-3290</span>
          </a>
          <p className="text-sm text-[#64748b] mt-6">Available 7 days a week  •  Same-day appointments available  •  100% satisfaction guaranteed</p>
        </div>
      </section>
    </div>
    </LandingPageLayout>
  )
}
