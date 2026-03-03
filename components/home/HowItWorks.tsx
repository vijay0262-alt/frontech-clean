import { Phone, CalendarCheck, Wrench, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Call or Book Online',
    desc: 'Contact us by phone at +1 (888) 400-3290 or use our online booking form. We\'ll discuss your needs and recommend the best setup for your home.',
    color: 'from-[#1d6ef5] to-[#0ea5e9]',
  },
  {
    num: '02',
    icon: CalendarCheck,
    title: 'Schedule Your Appointment',
    desc: 'Pick a time that works for you. We offer flexible morning, afternoon, and evening slots 7 days a week across the USA and Canada.',
    color: 'from-[#0ea5e9] to-[#00c2ff]',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'Expert Installation',
    desc: 'Our certified technician arrives on time, installs your devices with precision, configures all settings, and ensures everything is working perfectly.',
    color: 'from-[#22c55e] to-[#0ea5e9]',
  },
  {
    num: '04',
    icon: CheckCircle2,
    title: 'Test, Train & Support',
    desc: 'We walk you through your new system, show you how to use the app, and ensure you\'re fully comfortable. Ongoing support is just a call away.',
    color: 'from-[#f59e0b] to-[#ef4444]',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif text-balance">
            How It Works
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto text-sm sm:text-base">
            From booking to a fully secured home in as little as 2 hours. Our streamlined process makes installation stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-12px)] w-[calc(100%-56px)] h-px bg-gradient-to-r from-[#1e3a5f] to-transparent z-0" />
              )}
              <div className="glow-card bg-[#111827] rounded-2xl p-6 h-full relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon size={22} className="text-white" />
                  </div>
                  <span className="text-4xl font-black text-[#1e3a5f]">{step.num}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
