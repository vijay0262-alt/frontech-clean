'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Phone, ChevronDown, ArrowRight } from 'lucide-react'

const categories = [
  {
    label: 'Installation',
    faqs: [
      { q: 'How long does a security camera installation take?', a: 'Most single-camera installations are completed within 1–2 hours. A full multi-camera system (4–8 cameras) typically takes 3–5 hours depending on your property size, cable routing complexity, and number of floors.' },
      { q: 'Do I need to supply the camera or doorbell myself?', a: 'Yes — our service covers labor, setup, and configuration. You purchase the hardware (camera, doorbell, etc.) and we install and configure it. If you need guidance choosing the right device, our team is happy to recommend compatible options over the phone.' },
      { q: 'What brands do you support?', a: 'We support all major brands including Ring, Arlo, Nest (Google), Eufy, Reolink, Blink, Hikvision, Lorex, Amcrest, Swann, and many more. If you are unsure whether we support your brand, call us before booking.' },
      { q: 'Do you offer same-day installation?', a: 'Same-day appointments are available in most major metropolitan areas across the USA and Canada, subject to technician availability. We recommend calling +1 (888) 400-3290 directly for the fastest scheduling.' },
      { q: 'Can you install both wired and wireless cameras?', a: 'Yes. We handle both wired (PoE, coaxial) and wireless (Wi-Fi, battery-powered) installations. Our technicians assess your home layout to determine the best placement and cable routing for wired systems.' },
    ],
  },
  {
    label: 'Pricing & Plans',
    faqs: [
      { q: 'What is included in the $49.99 one-time install fee?', a: 'The $49.99 one-time fee covers the professional installation and configuration of a single device (one camera or one doorbell), including mounting, Wi-Fi pairing, app setup, and a brief walkthrough. Additional devices are $39.99 each.' },
      { q: 'How does the $9.99/month support plan work?', a: 'The monthly support plan gives you unlimited phone and remote support for your security system. This includes troubleshooting connectivity issues, app re-setup, firmware guidance, camera offline resolution, and more. Cancel anytime — no contract.' },
      { q: 'What is the difference between monthly and annual plans?', a: 'The annual plan ($99.99/year) includes everything in the monthly plan plus one free on-site revisit per year, priority emergency response, new device setup for up to 2 devices per year, and a dedicated support agent. You save approximately $19.89 compared to paying monthly.' },
      { q: 'Is there a money-back guarantee?', a: 'Yes. If you are not satisfied with your installation within 30 days, we will return to correct the issue at no charge. Please see our full Refund Policy for details.' },
    ],
  },
  {
    label: 'Quick Service',
    faqs: [
      { q: 'My camera keeps going offline — can you help?', a: 'Absolutely. Camera connectivity issues are one of the most common requests. Common causes include Wi-Fi signal weakness, router setting conflicts, or firmware issues. Our specialists can diagnose and resolve most issues remotely within minutes.' },
      { q: 'What if I change my Wi-Fi router or password?', a: 'Changing your router or password typically requires re-pairing all cameras. This is a simple process our team can walk you through over the phone, or we can perform it remotely if you have access to the device.' },
      { q: 'Can you help set up the app on multiple phones?', a: 'Yes. We set up the app for all household members during installation. If you need to add a new user or phone later, our team can guide you through it at no extra charge for plan customers.' },
      { q: 'Do you offer emergency service?', a: 'Annual plan customers receive priority emergency response. All customers can call +1 (888) 400-3290 during operating hours (Mon–Sun, 7AM–10PM EST) for urgent issues.' },
    ],
  },
  {
    label: 'Scheduling',
    faqs: [
      { q: 'How do I reschedule or cancel my appointment?', a: 'Contact us at least 24 hours before your appointment via phone at +1 (888) 400-3290 or email. We do not charge rescheduling or cancellation fees as long as you provide adequate notice.' },
      { q: 'Do your technicians arrive on time?', a: 'We provide a 2-hour arrival window and call you approximately 30 minutes before arrival. Our on-time rate is over 95%. In the rare case of a delay, we will notify you proactively.' },
      { q: 'What areas do you serve?', a: 'We currently serve all major metropolitan areas across the United States and Canada, including New York, Los Angeles, Chicago, Toronto, Vancouver, Miami, Dallas, and 50+ more cities. Call us to confirm availability in your area.' },
      { q: 'Do you work on weekends and holidays?', a: 'Yes. We operate Monday through Sunday, 7AM–10PM EST including most major holidays.' },
    ],
  },
]

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="bg-[#0a0f1e]">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, #1d6ef5, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto relative">
          <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">FAQ</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-5 font-serif text-balance">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-[#94a3b8] text-lg mb-8">Everything you need to know about our services. Can't find your answer? Call us directly.</p>
          <a href="tel:+18884003290" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold px-7 py-3.5 rounded-xl hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-1">
            <Phone size={16} /> +1 (888) 400-3290
          </a>
        </div>
      </section>

      {/* FAQ body */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Category sidebar */}
          <div className="lg:w-56 shrink-0">
            <div className="sticky top-24 space-y-1">
              {categories.map((cat, i) => (
                <button key={cat.label} onClick={() => { setActiveCategory(i); setOpenIndex(null) }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeCategory === i ? 'bg-[#1d6ef5] text-white' : 'text-[#94a3b8] hover:text-white hover:bg-[#111827]'}`}>
                  {cat.label}
                  <span className={`ml-2 text-xs ${activeCategory === i ? 'text-white/70' : 'text-[#4b5563]'}`}>({cat.faqs.length})</span>
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-[#1e3a5f]">
                <p className="text-[#94a3b8] text-xs mb-3">Still have questions?</p>
                <a href="tel:+18884003290" className="flex items-center gap-2 text-[#00c2ff] text-sm font-semibold hover:text-white transition-colors">
                  <Phone size={14} /> Call Us Now
                </a>
              </div>
            </div>
          </div>

          {/* FAQ list */}
          <div className="flex-1">
            <h2 className="text-white font-bold text-2xl font-serif mb-6">{categories[activeCategory].label}</h2>
            <div className="space-y-3">
              {categories[activeCategory].faqs.map((faq, i) => (
                <div key={i} className={`glow-card bg-[#111827] rounded-xl overflow-hidden ${openIndex === i ? 'border-[#1d6ef5]/50' : ''}`}>
                  <button className="w-full flex items-start justify-between gap-4 p-5 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} aria-expanded={openIndex === i}>
                    <span className={`font-semibold text-sm leading-relaxed ${openIndex === i ? 'text-white' : 'text-[#cbd5e1]'}`}>{faq.q}</span>
                    <ChevronDown size={18} className={`shrink-0 mt-0.5 text-[#1d6ef5] transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5">
                      <div className="h-px bg-[#1e3a5f] mb-4" />
                      <p className="text-[#94a3b8] text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-gradient-to-r from-[#0f1e3d] via-[#1d3a7a] to-[#0f1e3d]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white font-serif mb-4 text-balance">{"Didn't Find Your Answer?"}</h2>
          <p className="text-[#94a3b8] mb-7">Our technicians are standing by. Call for an instant, expert answer.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18884003290" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-1">
              <Phone size={18} /> +1 (888) 400-3290
            </a>
            <Link href="/book" className="inline-flex items-center justify-center gap-2 border-2 border-[#00c2ff] text-[#00c2ff] font-bold px-8 py-4 rounded-xl hover:bg-[#00c2ff] hover:text-[#0a0f1e] transition-all">
              Book Online <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
