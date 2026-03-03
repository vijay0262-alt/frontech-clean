'use client'
import { useState } from 'react'
import { ChevronDown, Phone } from 'lucide-react'

const faqs = [
  {
    q: 'What types of security cameras do you install?',
    a: 'We install all major types of security cameras including wired, wireless, PoE, indoor, outdoor, PTZ, fisheye, and floodlight cameras. We work with all popular systems and brands — just bring your device and we handle everything.',
  },
  {
    q: 'How long does a typical installation take?',
    a: 'Most single-device installations take 60–90 minutes. A full home system with 4–6 cameras typically takes 2–4 hours. Our technicians work efficiently without compromising quality.',
  },
  {
    q: 'Do you provide the cameras or doorbells, or do I need to supply them?',
    a: 'We are an installation and support service — you supply the devices, and we install them. However, we can advise you on the best devices for your specific home layout and needs.',
  },
  {
    q: 'Do you serve both the USA and Canada?',
    a: 'Yes! We currently serve over 50 cities across the United States and Canada. Call us at +1 (888) 400-3290 to confirm availability in your area.',
  },
  {
    q: 'What is included in the Monthly Support Plan?',
    a: 'The $9.99/month plan includes unlimited phone and remote support, help with app issues, firmware update assistance, connectivity troubleshooting, and priority response. Cancel anytime.',
  },
  {
    q: 'What does the Annual Protection Plan include?',
    a: 'At $99.99/year, you get everything in the Monthly plan plus one free on-site visit per year, priority scheduling, a dedicated account manager, annual system audit, and new device setup assistance.',
  },
  {
    q: 'Is there a satisfaction guarantee?',
    a: 'Absolutely. We offer a 100% satisfaction guarantee on all installations. If you\'re not happy with our work, we\'ll return to make it right at no additional charge.',
  },
  {
    q: 'Can you help if my existing camera system stops working?',
    a: 'Yes! Our support plans cover troubleshooting and repair of existing systems. Call us and we can often resolve the issue remotely, or dispatch a technician if needed.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 bg-[#060c1a]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`glow-card bg-[#111827] rounded-xl overflow-hidden transition-all ${open === idx ? 'border-[#1d6ef5]/50' : ''}`}
            >
              <button
                className="w-full text-left flex items-center justify-between gap-4 px-6 py-4"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="text-white font-semibold text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#1d6ef5] shrink-0 transition-transform duration-300 ${open === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {open === idx && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-[#1e3a5f] mb-4" />
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center p-6 bg-[#111827] rounded-2xl border border-[#1e3a5f]">
          <p className="text-[#94a3b8] mb-3">Still have questions? Our team is standing by.</p>
          <a
            href="tel:+18884003290"
            className="inline-flex items-center gap-2 text-[#00c2ff] font-bold hover:text-white transition-colors"
          >
            <Phone size={16} />
            Call +1 (888) 400-3290 — Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
