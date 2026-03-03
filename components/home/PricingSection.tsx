import Link from 'next/link'
import { Check, Star, Zap, Phone } from 'lucide-react'

const plans = [
  {
    name: 'Basic Install',
    price: '$49.99',
    period: 'One-Time',
    badge: null,
    desc: 'Perfect for a quick single device setup',
    features: [
      'Installation of 1 device',
      'Basic Wi-Fi pairing',
      'Mobile app setup',
      '30-day email support',
      'Installation certificate',
    ],
    notIncluded: ['Priority scheduling', 'Remote support', 'Annual maintenance'],
    cta: 'Get Started',
    href: '/book?plan=basic',
    highlight: false,
  },
  {
    name: 'Monthly Care',
    price: '$9.99',
    period: '/month',
    badge: 'Most Popular',
    desc: 'Ongoing support to keep your system running perfectly',
    features: [
      'Unlimited phone support',
      'Remote troubleshooting',
      'Firmware update assistance',
      'App & connectivity support',
      'Priority response (same day)',
      'Monthly system health check',
    ],
    notIncluded: [],
    cta: 'Start Monthly Plan',
    href: '/book?plan=monthly',
    highlight: true,
  },
  {
    name: 'Annual Protection',
    price: '$99.99',
    period: '/year',
    badge: 'Best Value',
    desc: 'Full-year protection — save 16% vs monthly',
    features: [
      'Everything in Monthly Care',
      'One free on-site visit/year',
      'Priority scheduling always',
      'New device setup included',
      'Annual full system audit',
      'Dedicated account manager',
      'Free firmware & app updates',
    ],
    notIncluded: [],
    cta: 'Get Annual Plan',
    href: '/book?plan=annual',
    highlight: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#060c1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">Simple Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif text-balance">
            Transparent Plans, No Hidden Fees
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto text-sm sm:text-base">
            Choose the plan that fits your needs. All plans include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl overflow-hidden relative ${
                plan.highlight
                  ? 'pricing-popular ring-2 ring-[#1d6ef5]/50 md:scale-105 z-10'
                  : 'bg-[#111827] glow-card'
              }`}
            >
              {plan.badge && (
                <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                  plan.highlight ? 'bg-white/20 text-white' : 'bg-[#1d6ef5]/20 text-[#60a5fa] border border-[#1d6ef5]/30'
                }`}>
                  {plan.badge}
                </div>
              )}
              <div className="p-7">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mb-5 ${plan.highlight ? 'text-blue-100' : 'text-[#94a3b8]'}`}>
                  {plan.desc}
                </p>
                <div className="flex items-end gap-1 mb-6">
                  <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'gradient-text'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm pb-1 ${plan.highlight ? 'text-blue-100' : 'text-[#94a3b8]'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-white' : 'text-[#22c55e]'}`} />
                      <span className={plan.highlight ? 'text-blue-50' : 'text-[#94a3b8]'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block text-center font-bold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 ${
                    plan.highlight
                      ? 'bg-white text-[#1d6ef5] hover:bg-blue-50 hover:shadow-lg'
                      : 'bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white hover:shadow-lg hover:shadow-[#1d6ef5]/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#94a3b8] mb-3">Need a custom quote for multiple devices or a business property?</p>
          <a
            href="tel:+18884003290"
            className="inline-flex items-center gap-2 text-[#00c2ff] font-bold hover:text-white transition-colors text-lg"
          >
            <Phone size={18} />
            Call +1 (888) 400-3290 for a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
