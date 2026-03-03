import Link from 'next/link'
import { Camera, BellRing, Wifi, Headphones, ArrowRight, Settings } from 'lucide-react'
import SecurityCameraIllustration from '@/components/illustrations/SecurityCameraIllustration'
import DoorbellIllustration from '@/components/illustrations/DoorbellIllustration'
import NetworkIllustration from '@/components/illustrations/NetworkIllustration'
import QuickServiceIllustration from '@/components/illustrations/QuickServiceIllustration'

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif">
            Complete Smart Home Security Services
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            From initial installation to ongoing support, our certified technicians handle every aspect of your smart home security setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 — Security Camera */}
          <div className="glow-card bg-[#111827] rounded-2xl overflow-hidden group">
            <div className="relative h-52 overflow-hidden bg-[#0a0f1e]">
              <SecurityCameraIllustration />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d6ef5] to-[#0ea5e9] flex items-center justify-center shadow-lg">
                <Camera size={20} className="text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Security Camera Installation</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">Professional mounting, wiring, and configuration of indoor and outdoor security cameras. We handle everything from placement planning to final testing.</p>
              <ul className="grid grid-cols-2 gap-1.5 mb-5">
                {['Indoor & outdoor cameras', 'HD/4K resolution setup', 'Night vision config', 'Cloud & local storage'].map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1d6ef5] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/services#camera" className="flex items-center gap-1.5 text-[#00c2ff] text-sm font-semibold hover:gap-3 transition-all group-hover:text-white">
                Learn More <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Card 2 — Smart Doorbell */}
          <div className="glow-card bg-[#111827] rounded-2xl overflow-hidden group">
            <div className="relative h-52 overflow-hidden bg-[#0a0f1e]">
              <DoorbellIllustration />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#00c2ff] flex items-center justify-center shadow-lg">
                <BellRing size={20} className="text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Smart Doorbell Setup</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">Complete smart doorbell installation including Wi-Fi pairing, motion zone configuration, two-way audio testing, and mobile app integration.</p>
              <ul className="grid grid-cols-2 gap-1.5 mb-5">
                {['Video doorbell mounting', 'Wi-Fi & app pairing', 'Motion zone setup', 'Chime installation'].map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/services#doorbell" className="flex items-center gap-1.5 text-[#00c2ff] text-sm font-semibold hover:gap-3 transition-all group-hover:text-white">
                Learn More <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Card 3 — Wi-Fi & Network */}
          <div className="glow-card bg-[#111827] rounded-2xl overflow-hidden group">
            <div className="relative h-52 overflow-hidden bg-[#0a0f1e]">
              <NetworkIllustration />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d6ef5] to-[#7c3aed] flex items-center justify-center shadow-lg">
                <Wifi size={20} className="text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Wi-Fi & Network Optimization</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">Ensure your security devices always stay connected. We optimize your home network for reliable, high-speed camera streaming with zero downtime.</p>
              <ul className="grid grid-cols-2 gap-1.5 mb-5">
                {['Network assessment', 'Wi-Fi extender setup', 'Port forwarding config', 'Bandwidth optimization'].map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/services#setup" className="flex items-center gap-1.5 text-[#00c2ff] text-sm font-semibold hover:gap-3 transition-all group-hover:text-white">
                Learn More <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Card 4 — Quick Service */}
          <div className="glow-card bg-[#111827] rounded-2xl overflow-hidden group">
            <div className="relative h-52 overflow-hidden bg-[#0a0f1e]">
              <QuickServiceIllustration />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#0ea5e9] flex items-center justify-center shadow-lg">
                <Headphones size={20} className="text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Quick Service & Support</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">Fast, reliable help to keep your system running perfectly. From app setup to firmware updates, our specialists have you covered 7 days a week.</p>
              <ul className="grid grid-cols-2 gap-1.5 mb-5">
                {['Phone & remote service', 'App setup & sync', 'Firmware updates', 'System health checks'].map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/services#support" className="flex items-center gap-1.5 text-[#00c2ff] text-sm font-semibold hover:gap-3 transition-all group-hover:text-white">
                Learn More <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-1"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
