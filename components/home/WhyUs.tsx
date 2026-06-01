import { ShieldCheck, Zap, Users, HeadphonesIcon, MapPin, BadgeCheck, Camera, BellRing, Wifi, Star } from 'lucide-react'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Certified Technicians',
    desc: 'All our technicians are professionally trained, background-checked, and certified in smart home security systems.',
  },
  {
    icon: Zap,
    title: 'Fast & Efficient',
    desc: 'Same-day and next-day appointments available. Most installations are completed in under 3 hours with zero mess left behind.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Quick Service',
    desc: 'Our dedicated service team is available 7 days a week via phone and remote sessions to resolve any issues quickly.',
  },
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    desc: 'We serve over 50 major cities across the United States and Canada with local technicians in every region.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured',
    desc: 'We carry full liability insurance on every job, giving you complete peace of mind during and after installation.',
  },
  {
    icon: Users,
    title: '10,000+ Happy Customers',
    desc: 'Thousands of homeowners and businesses trust us with their security. Our 4.9-star rating speaks for itself.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left */}
          <div>
            <span className="text-[#0066cc] text-xs font-bold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mt-2 mb-4 sm:mb-5 font-serif leading-tight text-balance">
              The Smart Choice for Smart Home Security
            </h2>
            <p className="text-[#4a4a4a] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              We're not just installers — we're your long-term smart home security partners. From day one to years down the road, our team ensures your system always works at its best.
            </p>
            {/* Inline feature visual — no external file, no layout shift */}
            <div className="rounded-2xl overflow-hidden bg-[#f5f5f5] border border-[#e5e7eb] p-5">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { icon: Camera, label: 'Camera Setup', val: '● Live', color: '#0066cc' },
                  { icon: BellRing, label: 'Doorbell', val: '● Online', color: '#0066cc' },
                  { icon: Wifi, label: 'Network', val: '95 Mbps', color: '#22c55e' },
                  { icon: ShieldCheck, label: 'Armed', val: 'All Clear', color: '#22c55e' },
                ].map(({ icon: Icon, label, val, color }) => (
                  <div key={label} className="bg-white rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}20` }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#4a4a4a]">{label}</p>
                      <p className="text-xs font-bold text-[#1a1a1a]">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between border border-[#e5e7eb]">
                <div>
                  <p className="text-[#1a1a1a] font-bold text-sm">Licensed &amp; Insured</p>
                  <p className="text-[#4a4a4a] text-xs">Every specialist is fully certified</p>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#f59e0b" className="text-[#f59e0b]" />)}
                  <span className="text-[#1a1a1a] text-xs font-bold ml-1">4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glow-card bg-white rounded-xl p-4 sm:p-5 border-2 border-[#e5e7eb] hover:border-[#0066cc]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0066cc]/10 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-[#0066cc]" />
                </div>
                <h3 className="text-[#1a1a1a] font-bold text-sm mb-1.5">{title}</h3>
                <p className="text-[#4a4a4a] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
