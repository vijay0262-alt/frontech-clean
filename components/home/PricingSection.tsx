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
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#0066cc] text-xs font-bold uppercase tracking-widest">Simple Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mt-2 mb-4 font-serif text-balance">
            Transparent Plans, No Hidden Fees
          </h2>
          <p className="text-[#4a4a4a] max-w-xl mx-auto text-sm sm:text-base">
            Choose the plan that fits your needs. All plans include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl overflow-hidden relative ${
                plan.highlight
                  ? 'pricing-popular ring-2 ring-[#0066cc]/50 md:scale-105 z-10'
                  : 'bg-white glow-card border-2 border-[#e5e7eb]'
              }`}
            >
              {plan.badge && (
                <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                  plan.highlight ? 'bg-white/20 text-[#1a1a1a]' : 'bg-[#0066cc]/20 text-[#0066cc] border border-[#0066cc]/30'
                }`}>
                  {plan.badge}
                </div>
              )}
              <div className="p-7">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mb-5 ${plan.highlight ? 'text-blue-100' : 'text-[#4a4a4a]'}`}>
                  {plan.desc}
                </p>
                <div className="flex items-end gap-1 mb-6">
                  <span className={`text-4xl font-black ${plan.highlight ? 'text-[#1a1a1a]' : 'gradient-text'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm pb-1 ${plan.highlight ? 'text-blue-100' : 'text-[#4a4a4a]'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-[#1a1a1a]' : 'text-[#22c55e]'}`} />
                      <span className={plan.highlight ? 'text-blue-50' : 'text-[#4a4a4a]'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block text-center font-bold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 ${
                    plan.highlight
                      ? 'bg-white text-[#0066cc] hover:bg-blue-50 hover:shadow-lg'
                      : 'bg-gradient-to-r from-[#0066cc] to-[#0052a3] text-[#1a1a1a] hover:shadow-lg hover:shadow-[#0066cc]/30'
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
          <p className="text-[#4a4a4a] mb-3">Need a custom quote for multiple devices or a business property?</p>
          <a
            href="tel:+18448100173"
            className="inline-flex items-center gap-2 text-[#0066cc] font-bold hover:text-[#0052a3] transition-colors text-lg"
          >
            <Phone size={18} />
            Call +1 (844) 810-0173 for a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
