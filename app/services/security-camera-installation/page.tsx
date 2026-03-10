import type { Metadata } from 'next'
import LandingPageLayout from '@/components/LandingPageLayout'
import { CheckCircle2, Phone, ArrowRight, Shield, Star, Clock, Zap, Camera, Eye, Wifi, HardDrive, ChevronDown, Wrench, AlertCircle } from 'lucide-react'

const BASE = 'https://frontechsecurity.com'
const PAGE_URL = `${BASE}/services/security-camera-installation`

export const metadata: Metadata = {
  title: 'Security Camera Installation Service Near Me | USA & Canada — FrontechSecurity',
  description: 'Expert security camera installation & repair service. Ring, Arlo, Blink, Reolink, ADT & all brands. Fix not connecting, not working issues. Professional setup & troubleshooting. Same-day service USA & Canada. Call +1 (888) 400-3290.',
  keywords: [
    'security camera installation',
    'security camera installation near me',
    'home security camera installation',
    'Ring camera installation',
    'Arlo camera installation',
    'Blink camera installation',
    'Reolink camera installation',
    'ADT camera installation',
    'security camera not working',
    'security camera not connecting',
    'security camera repair',
    'camera installation service',
    'wireless camera setup',
    'outdoor camera installation',
    'Ring camera not connecting',
    'Arlo camera offline',
    'Blink camera setup',
    'security camera troubleshooting',
    'same day camera installation',
    'professional camera installer',
    'security camera help',
  ].join(', '),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Security Camera Installation Service Near Me — FrontechSecurity',
    description: 'Certified technicians install indoor & outdoor security cameras — HD/4K, night vision, motion zones, app setup. Same-day across USA & Canada from $49.99.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'FrontechSecurity',
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: 'Security Camera Installation Service — FrontechSecurity' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Camera Installation Near Me | FrontechSecurity',
    description: 'Certified security camera installation — HD/4K, all brands, same-day service. USA & Canada from $49.99.',
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
        { '@type': 'ListItem', position: 3, name: 'Security Camera Installation', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Security Camera Installation Service',
      serviceType: 'Security Camera Installation',
      description: 'Professional indoor and outdoor security camera installation by certified technicians across USA and Canada. Includes mounting, cable routing, night vision setup, motion detection configuration, cloud and local recording setup, and full mobile app configuration.',
      url: PAGE_URL,
      provider: { '@type': 'LocalBusiness', name: 'FrontechSecurity', url: BASE },
      areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
      offers: { '@type': 'Offer', priceCurrency: 'USD', lowPrice: '49.99', offerCount: '4', description: 'Installation service only — hardware not included. No payment collected until job complete.' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '2400', bestRating: '5' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How many cameras does my home need?', acceptedAnswer: { '@type': 'Answer', text: 'Most single-family homes are well-covered with 4–8 cameras: front door, back door, driveway, garage, and each side of the property. During your free consultation we help you decide the right number based on your specific property and budget.' } },
        { '@type': 'Question', name: 'Do you install cameras I already own?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We install cameras you have already purchased from any brand — Ring, Arlo, Google Nest, Wyze, Reolink, Hikvision, Dahua, and more.' } },
        { '@type': 'Question', name: 'How long does a camera installation take?', acceptedAnswer: { '@type': 'Answer', text: 'A standard 2-camera install takes approximately 1 hour. A full-home system with 6–8 cameras typically takes 2–3 hours.' } },
        { '@type': 'Question', name: 'Do you run cables inside the walls?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for wired installs we can route cables through walls, attic, or crawl spaces for a clean, concealed look.' } },
        { '@type': 'Question', name: 'What brands do you support?', acceptedAnswer: { '@type': 'Answer', text: 'We work with all major brands including Ring, Google Nest, Arlo, Wyze, Eufy, Reolink, Hikvision, Axis, Dahua, Lorex, Amcrest, and more.' } },
        { '@type': 'Question', name: 'Is payment collected online?', acceptedAnswer: { '@type': 'Answer', text: 'No. We collect no payment online. Payment is due only upon completion of the service, once you are fully satisfied.' } },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How Security Camera Installation Works',
      description: 'Step-by-step process for professional security camera installation by FrontechSecurity.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Free Consultation', text: 'Call us or book online. We discuss your property layout, coverage needs, and recommend the right camera count and placement.' },
        { '@type': 'HowToStep', position: 2, name: 'Site Assessment', text: 'Our technician arrives at your scheduled time, assesses mounting surfaces, cable routing paths, and power source locations.' },
        { '@type': 'HowToStep', position: 3, name: 'Professional Installation', text: 'Cameras are mounted, cables are routed cleanly through walls or along trim, and every connection is weather-sealed on outdoor units.' },
        { '@type': 'HowToStep', position: 4, name: 'Configuration & App Setup', text: 'We configure resolution, frame rate, motion zones, recording schedules, and set up remote viewing on all your devices.' },
        { '@type': 'HowToStep', position: 5, name: 'Testing & Walkthrough', text: 'Every camera is tested live. We walk you through the app, show you playback, and answer all your questions before we leave.' },
      ],
    },
  ],
}

const features = [
  { icon: Camera, title: 'All Camera Types', desc: 'Bullet, dome, PTZ, floodlight, and covert cameras — wired or wireless, for every use case.' },
  { icon: Eye, title: 'Night Vision Setup', desc: 'We configure IR sensors and color night vision for clear 24/7 footage even in total darkness.' },
  { icon: Wifi, title: 'Remote Viewing', desc: 'Full app setup so you can watch live and recorded footage from any phone, tablet, or computer.' },
  { icon: HardDrive, title: 'Cloud & Local Storage', desc: 'NVR/DVR local recording or cloud subscription setup — we configure whichever you prefer.' },
  { icon: Shield, title: 'Motion Detection Zones', desc: 'Custom motion zones and alert settings to reduce false alerts and catch what matters.' },
  { icon: Zap, title: 'Same-Day Available', desc: 'Book before noon for same-day installation in most service areas across the USA & Canada.' },
]

const process = [
  { step: '01', title: 'Free Consultation', desc: 'Call us or book online. We discuss your property layout, coverage needs, and recommend the right camera count and placement.' },
  { step: '02', title: 'Site Assessment', desc: 'Our technician arrives at your scheduled time, assesses mounting surfaces, cable routing paths, and power source locations.' },
  { step: '03', title: 'Professional Installation', desc: 'Cameras are mounted, cables are routed cleanly through walls or along trim, and every connection is weather-sealed on outdoor units.' },
  { step: '04', title: 'Configuration & App Setup', desc: 'We configure resolution, frame rate, motion zones, recording schedules, and set up remote viewing on all your devices.' },
  { step: '05', title: 'Testing & Walkthrough', desc: 'Every camera is tested live. We walk you through the app, show you playback, and answer all your questions before we leave.' },
]

const faqs = [
  { q: 'How many cameras does my home need?', a: 'Most single-family homes are well-covered with 4–8 cameras: front door, back door, driveway, garage, and each side of the property. During your free consultation we help you decide the right number based on your specific property and budget.' },
  { q: 'Do you install cameras I already own?', a: 'Yes. We install cameras you have already purchased from any brand — Ring, Arlo, Google Nest, Wyze, Reolink, Hikvision, Dahua, and more. If your device is compatible with standard mounting and Wi-Fi, we can install it.' },
  { q: 'How long does a camera installation take?', a: 'A standard 2-camera install takes approximately 1 hour. A full-home system with 6–8 cameras typically takes 2–3 hours. We give you a time estimate during booking.' },
  { q: 'Do you run cables inside the walls?', a: 'Yes, for wired installs we can route cables through walls, attic, or crawl spaces for a clean, concealed look. We discuss the routing plan with you before starting any work.' },
  { q: 'What brands do you support?', a: 'We work with all major brands including Ring, Google Nest, Arlo, Wyze, Eufy, Reolink, Hikvision, Axis, Dahua, Lorex, Amcrest, and more. If you are unsure whether your brand is supported, just call us.' },
  { q: 'Is payment collected online?', a: 'No. We collect no payment online. Payment is due only upon completion of the service, once you are fully satisfied. We accept cash, card, and digital payments.' },
]

export default function SecurityCameraInstallationPage() {
  return (
    <LandingPageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <div className="bg-[#0a0f1e]">

      {/* Hero */}
      <section className="relative py-10 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(29,110,245,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(29,110,245,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1d6ef5]/8 to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto relative">

          <div className="inline-flex items-center gap-2 bg-[#1d6ef5]/15 border border-[#1d6ef5]/40 rounded-full px-3 py-1.5 mb-5">
            <Camera size={13} className="text-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-bold tracking-wider uppercase">Most Requested Service</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 font-serif text-balance">
            Security Camera Installation & Repair <span className="gradient-text">Near You</span>
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-8 max-w-3xl">
            <strong className="text-white">Professional installation, setup & repair for Ring, Arlo, Blink, Reolink, ADT & all brands.</strong> Fix cameras not connecting, not working, offline issues. Expert troubleshooting & same-day service across USA & Canada. From $49.99.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Ring, Arlo, Blink, ADT Support', 'Not Working? We Fix It', 'Same-Day Service', 'Installation & Repair', 'Connection Issues Solved', 'No Fix, No Pay'].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs text-[#f0f4ff] bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <CheckCircle2 size={11} className="text-[#22c55e] shrink-0" />{b}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#94a3b8] mt-4">✓ Available 7 Days a Week  •  ✓ Same-Day Appointments  •  ✓ Free Phone Consultation</p>
          
          <div className="mt-8 p-4 bg-[#1e3a5f]/20 border border-[#1e3a5f] rounded-lg max-w-3xl mx-auto">
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              <strong className="text-[#00c2ff]">Important Notice:</strong> FrontechSecurity is an independent third-party installation and technical support service provider. We are not affiliated with, endorsed by, or sponsored by Ring, Arlo, Blink, Reolink, ADT, Google Nest, or any other camera manufacturer mentioned on this page. All brand names and trademarks are property of their respective owners and are used for descriptive purposes only to indicate compatibility and service expertise.
            </p>
          </div>
        </div>
      </section>



      {/* Why Choose Us - Clear Value Proposition */}
      <section className="py-12 px-4 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 font-serif">Why Customers Call Us for Camera Help</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glow-card bg-[#111827] rounded-xl p-6">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-white font-bold mb-2">Speak to Real Expert</h3>
              <p className="text-[#94a3b8] text-sm">Live technician support — no bots, no wait. Get instant help over the phone.</p>
            </div>
            <div className="glow-card bg-[#111827] rounded-xl p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-white font-bold mb-2">Same-Day Service</h3>
              <p className="text-[#94a3b8] text-sm">Camera offline? Need urgent fix? We come to you today — call now for availability.</p>
            </div>
            <div className="glow-card bg-[#111827] rounded-xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-white font-bold mb-2">Fixed Right First Time</h3>
              <p className="text-[#94a3b8] text-sm">Certified technicians with 10+ years experience. We guarantee our work.</p>
            </div>
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
            { icon: Zap, text: 'Average Install: Under 2 Hours', color: '#1d6ef5' },
          ].map(({ icon: Icon, text, color }) => (
            <span key={text} className="flex items-center gap-2 text-sm text-[#94a3b8]">
              <Icon size={14} style={{ color }} />{text}
            </span>
          ))}
        </div>
      </div>

      {/* What's included */}
      <section className="py-20 px-4 bg-[#060c1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">What Is Included</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif text-balance">
              Everything You Need for a Complete Camera System
            </h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">
              Every security camera installation by FrontechSecurity includes all of the following — no hidden fees, no upsells during the job.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glow-card bg-[#111827] rounded-xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[#1d6ef5]/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#1d6ef5]" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full checklist */}
      <section className="py-20 px-4 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">Full Service Detail</span>
            <h2 className="text-3xl font-black text-white mt-2 mb-4 font-serif text-balance">
              What Our Security Camera Installation Covers
            </h2>
            <p className="text-[#94a3b8] leading-relaxed mb-6">
              FrontechSecurity provides a complete, end-to-end installation experience. We do not just mount a camera and leave — we ensure your entire system works perfectly before we walk out the door. Our technicians are trained on all major brands and have experience with hundreds of property types including apartments, condos, townhomes, and detached houses.
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-6">
              Whether you need a single outdoor camera watching your front door or a comprehensive 8-camera HD system with local NVR recording and cloud backup, our team has the tools and experience to deliver a flawless result.
            </p>

          </div>
          <div className="glow-card bg-[#111827] rounded-2xl p-7">
            <h3 className="text-white font-bold font-serif mb-5">Complete Installation Checklist</h3>
            <ul className="space-y-3">
              {[
                'Property walk-through and coverage planning',
                'Camera placement recommendation for maximum coverage',
                'Secure wall, soffit, or eave mounting',
                'Cable routing — in-wall, attic, or surface mount',
                'Weatherproofing seals on all outdoor connections',
                'Power connection — PoE switch, adapter, or battery',
                'NVR/DVR or cloud recorder configuration',
                'HD/4K resolution and frame rate optimization',
                'Night vision and IR range calibration',
                'Motion detection zone customization',
                'Mobile app installation on all your devices',
                'Live view and remote playback testing',
                'Full walkthrough and how-to for every family member',
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
            <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif text-balance">
              How Our Camera Installation Works
            </h2>
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
          <div className="text-center glow-card bg-gradient-to-br from-[#111827] to-[#0a0f1e] border-2 border-[#1d6ef5]/30 rounded-2xl p-10">
            <div className="inline-block bg-[#22c55e]/20 border border-[#22c55e]/40 rounded-full px-4 py-2 mb-4">
              <span className="text-[#22c55e] text-sm font-bold">✓ We're Available Right Now</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif">Need Your Camera Working Today?</h2>
            <p className="text-lg text-[#94a3b8] mb-3 max-w-2xl mx-auto">Stop struggling with confusing apps and settings. Call us and speak with a certified technician in under 30 seconds.</p>
            <div className="bg-[#0a0f1e]/60 rounded-xl p-6 mb-6 max-w-xl mx-auto">
              <p className="text-white font-bold mb-2">📋 Service Pricing:</p>
              <p className="text-[#94a3b8] text-sm mb-2">• Professional Installation: Starting at $49.99</p>
              <p className="text-[#94a3b8] text-sm mb-2">• Repair & Troubleshooting: From $49.99</p>
              <p className="text-[#94a3b8] text-sm">• Phone Consultation: FREE (Call now)</p>
              <p className="text-[#64748b] text-xs mt-3">*Service fee only. Hardware/parts sold separately. No payment until work is complete.</p>
            </div>
            <div className="space-y-3">
              <a href="tel:+18884003290" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold text-xl px-12 py-6 rounded-xl hover:shadow-2xl hover:shadow-[#1d6ef5]/50 transition-all pulse-phone animate-pulse w-full sm:w-auto">
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
            <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl font-black text-white mt-2 font-serif text-balance">
              Frequently Asked Questions About Camera Installation
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group glow-card bg-[#111827] rounded-xl">
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-6 text-white font-semibold text-sm list-none">
                  {q}
                  <ChevronDown size={16} className="text-[#1d6ef5] shrink-0 group-open:rotate-180 transition-transform" />
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
            <h2 className="text-3xl font-black text-white font-serif mb-3">Third-Party Support for All Major Camera Brands</h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">Independent professional installation, setup, repair & troubleshooting service (not affiliated with manufacturers)</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Ring Cameras', icon: Camera },
              { name: 'Arlo Cameras', icon: Eye },
              { name: 'Blink Cameras', icon: Camera },
              { name: 'Reolink Cameras', icon: Eye },
              { name: 'ADT Cameras', icon: Shield },
              { name: 'Nest Cameras', icon: Camera },
              { name: 'Wyze Cameras', icon: Eye },
              { name: 'Eufy Cameras', icon: Camera },
              { name: 'Lorex Cameras', icon: HardDrive },
              { name: 'All Brands', icon: Wrench },
            ].map(({ name, icon: Icon }) => (
              <div key={name} className="glow-card bg-[#111827] rounded-xl p-5 text-center">
                <Icon size={28} className="text-[#1d6ef5] mx-auto mb-2" />
                <p className="text-white font-bold text-sm">{name}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Common Issues We Fix */}
      <section className="py-16 px-4 bg-[#060c1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white font-serif mb-3">Common Camera Issues We Fix</h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">From installation to repair & troubleshooting — we solve all security camera problems</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { issue: 'Camera Not Connecting to WiFi', desc: 'Signal strength check, network configuration, extender setup' },
              { issue: 'Camera Not Working / Offline', desc: 'Power diagnostics, firmware update, full system reset' },
              { issue: 'Poor Video Quality / No Night Vision', desc: 'Resolution optimization, IR sensor calibration, lens cleaning' },
              { issue: 'Motion Detection Not Working', desc: 'Zone reconfiguration, sensitivity adjustment, app settings' },
              { issue: 'App Not Showing Live Feed', desc: 'Account sync, app reinstall, remote access configuration' },
              { issue: 'Recording Not Saving', desc: 'Storage setup, cloud subscription check, SD card diagnostics' },
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

        </div>
      </section>

      {/* Clear Disclaimers Section */}
      <section className="py-12 px-4 bg-[#0a0f1e] border-t border-[#1e3a5f]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111827] border border-[#1e3a5f] rounded-xl p-6">
            <h3 className="text-white font-bold mb-4 text-center">Third-Party Service Disclosure</h3>
            <div className="space-y-3 text-sm text-[#94a3b8] leading-relaxed">
              <p>
                <strong className="text-white">Independent Service Provider:</strong> FrontechSecurity is a third-party, independent technical support and installation service provider. We are NOT affiliated with, authorized by, endorsed by, or sponsored by Ring LLC, Arlo Technologies, Amazon Blink, Reolink, ADT Inc., Google Nest, or any other security camera manufacturer or brand mentioned on this website.
              </p>
              <p>
                <strong className="text-white">Brand Names & Trademarks:</strong> All product names, brand names, trademarks, and registered trademarks mentioned are the property of their respective owners. We use these names solely for descriptive and compatibility purposes to help customers understand which devices and brands we can service.
              </p>
              <p>
                <strong className="text-white">Service Scope:</strong> Our services include installation, setup, configuration, troubleshooting, and repair assistance for security cameras and related equipment. Hardware/devices are not included unless explicitly stated. Customers must own or purchase their own equipment.
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
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-serif">Ready to Get Your Security Camera Working?</h2>
          <p className="text-lg text-[#94a3b8] mb-8">Speak with a certified technician now — free phone consultation</p>
          <a href="tel:+18884003290" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-black text-xl px-10 py-6 rounded-2xl hover:shadow-2xl hover:shadow-[#1d6ef5]/40 transition-all pulse-phone animate-pulse">
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
