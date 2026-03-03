import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Phone, ArrowRight, Star, Zap, Shield, Headphones, Clock, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing Plans | Security Camera & Doorbell Installation',
  description:
    'Transparent pricing for security camera and smart doorbell installation. One-time install from $49.99, monthly support $9.99/mo, annual plan $99.99. Call +1 (888) 400-3290.',
  alternates: { canonical: 'https://frontechsecurity.com/pricing' },
  openGraph: {
    title: 'Pricing Plans | FrontechSecurity',
    description: 'One-time install from $49.99. Monthly support $9.99/mo. Annual plan $99.99/yr. No hidden fees.',
    url: 'https://frontechsecurity.com/pricing',
  },
}

const plans = [
  {
    id: 'basic',
    badge: 'Starter',
    name: 'One-Time Install',
    price: '$49.99',
    period: 'one-time',
    highlight: false,
    tagline: 'Perfect for a single device installation',
    color: 'from-[#1e3a5f] to-[#0f1e3d]',
    borderColor: 'border-[#1e3a5f]',
    ctaStyle: 'border-2 border-[#1d6ef5] text-[#1d6ef5] hover:bg-[#1d6ef5] hover:text-white',
    features: [
      { text: '1 device installation (camera or doorbell)', included: true },
      { text: 'Professional mounting & wiring', included: true },
      { text: 'Wi-Fi pairing & app setup', included: true },
      { text: 'Motion zone configuration', included: true },
      { text: '30-day email support', included: true },
      { text: 'Multi-device support', included: false },
      { text: 'Priority phone support', included: false },
      { text: 'On-site revisit', included: false },
    ],
  },
  {
    id: 'monthly',
    badge: 'Most Popular',
    name: 'Monthly Support',
    price: '$9.99',
    period: '/month',
    highlight: true,
    tagline: 'Ongoing peace of mind for your system',
    color: 'from-[#1d6ef5] to-[#0ea5e9]',
    borderColor: 'border-[#1d6ef5]',
    ctaStyle: 'bg-white text-[#1d6ef5] hover:bg-[#f0f4ff] font-black',
    features: [
      { text: 'Unlimited phone & chat support', included: true },
      { text: 'Remote diagnostics & troubleshooting', included: true },
      { text: 'Firmware update assistance', included: true },
      { text: 'App re-setup & sync issues', included: true },
      { text: 'Camera offline resolution', included: true },
      { text: 'System health monitoring', included: true },
      { text: 'Cancel anytime, no contract', included: true },
      { text: 'On-site revisit (add-on)', included: false },
    ],
  },
  {
    id: 'annual',
    badge: 'Best Value',
    name: 'Annual Service Plan',
    price: '$99.99',
    period: '/year',
    highlight: false,
    tagline: 'Complete coverage — save 16% vs monthly',
    color: 'from-[#7c3aed] to-[#1d6ef5]',
    borderColor: 'border-[#7c3aed]/60',
    ctaStyle: 'bg-gradient-to-r from-[#7c3aed] to-[#1d6ef5] text-white hover:shadow-lg hover:shadow-[#7c3aed]/30',
    features: [
      { text: 'Everything in Monthly plan', included: true },
      { text: '1 free on-site revisit per year', included: true },
      { text: 'Priority emergency response', included: true },
      { text: 'New device setup (up to 2/yr)', included: true },
      { text: 'System upgrade consultation', included: true },
      { text: 'Dedicated support agent', included: true },
      { text: 'Annual system health checkup', included: true },
      { text: 'Save $19.89 vs monthly', included: true },
    ],
  },
]

const addons = [
  { name: 'Additional Camera Install', price: '$39.99', desc: 'Each additional camera beyond the first' },
  { name: 'NVR/DVR Setup', price: '$59.99', desc: 'Network or digital video recorder configuration' },
  { name: 'Wi-Fi Extender Setup', price: '$29.99', desc: 'Mesh or extender placement & configuration' },
  { name: 'On-Site Revisit', price: '$49.99', desc: 'Scheduled technician visit (non-annual customers)' },
  { name: 'Multi-Device Bundle (up to 4)', price: '$129.99', desc: 'Install up to 4 cameras/doorbells — best rate' },
  { name: 'Full System Audit', price: '$69.99', desc: 'Complete security assessment & optimization report' },
]

const faqs = [
  {
    q: 'Is the $49.99 price per device?',
    a: 'Yes — the one-time install fee covers a single device. For each additional camera or doorbell, an add-on rate of $39.99 applies. Bundle pricing is available for 4+ devices.',
  },
  {
    q: 'Can I cancel the monthly plan anytime?',
    a: 'Absolutely. The monthly support plan is month-to-month with no contracts or cancellation fees. You can cancel via phone or email at any time.',
  },
  {
    q: 'What is included in the annual plan on-site visit?',
    a: 'Your annual plan includes one free scheduled technician visit for any in-person issue — camera repositioning, re-wiring, device replacement, or system reconfiguration.',
  },
  {
    q: 'Do prices include parts or hardware?',
    a: 'Our pricing covers labor, setup, and support only. Hardware (cameras, doorbells, routers) is provided by the customer. We can advise on the best devices for your needs.',
  },
]

export default function PricingPage() {
  return (
    <div className="bg-[#0a0f1e]">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, #1d6ef5, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto relative">
          <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">Simple Pricing</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-5 font-serif text-balance">
            Transparent Plans, <span className="gradient-text">Zero Surprises</span>
          </h1>
          <p className="text-[#94a3b8] text-lg mb-8">
            One-time installation or ongoing support — choose the plan that fits your home security needs. All work performed by certified technicians.
          </p>
          <a
            href="tel:+18884003290"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-1 pulse-phone"
          >
            <Phone size={18} />
            Questions? Call +1 (888) 400-3290
          </a>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl flex flex-col ${
                plan.highlight
                  ? 'pricing-popular text-white scale-[1.03]'
                  : 'bg-[#111827] border ' + plan.borderColor
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wide ${plan.highlight ? 'bg-white text-[#1d6ef5]' : 'bg-gradient-to-r ' + plan.color + ' text-white'}`}>
                  {plan.badge}
                </div>
              )}
              <div className="p-7 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className={`text-lg font-black mb-1 font-serif ${plan.highlight ? 'text-white' : 'text-white'}`}>{plan.name}</h3>
                  <p className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-[#94a3b8]'}`}>{plan.tagline}</p>
                </div>
                <div className="flex items-end gap-1 mb-6">
                  <span className={`text-5xl font-black font-serif ${plan.highlight ? 'text-white' : 'text-white'}`}>{plan.price}</span>
                  <span className={`text-sm pb-2 ${plan.highlight ? 'text-white/70' : 'text-[#94a3b8]'}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2.5 text-sm">
                      {f.included ? (
                        <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-white' : 'text-[#22c55e]'}`} />
                      ) : (
                        <X size={16} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-white/30' : 'text-[#4b5563]'}`} />
                      )}
                      <span className={f.included ? (plan.highlight ? 'text-white/90' : 'text-[#cbd5e1]') : (plan.highlight ? 'text-white/30 line-through' : 'text-[#4b5563] line-through')}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  <Link
                    href="/book"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold transition-all ${plan.ctaStyle}`}
                  >
                    Get Started <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+18884003290"
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all ${plan.highlight ? 'bg-white/10 text-white hover:bg-white/20' : 'border border-[#1e3a5f] text-[#94a3b8] hover:text-white'}`}
                  >
                    <Phone size={13} /> Call to Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-10 px-4 trust-bar">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            { icon: Shield, label: 'Licensed & Insured', sub: 'All technicians certified' },
            { icon: Clock, label: 'Same-Day Service', sub: 'Available in most areas' },
            { icon: Star, label: '4.9★ Rated', sub: 'Over 5,000 happy customers' },
            { icon: Headphones, label: 'Quick Service', sub: 'Mon–Sun, 7AM–10PM EST' },
            { icon: Zap, label: 'Fast Response', sub: 'Under 1 hour callback' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon size={20} className="text-[#1d6ef5] mb-1" />
              <span className="text-white text-sm font-bold">{label}</span>
              <span className="text-[#94a3b8] text-xs">{sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 bg-[#060c1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white font-serif mb-3">Add-On Services</h2>
            <p className="text-[#94a3b8]">Customize your installation with these optional enhancements</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((a) => (
              <div key={a.name} className="glow-card bg-[#111827] rounded-xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#1d6ef5]/15 flex items-center justify-center shrink-0">
                  <Zap size={18} className="text-[#1d6ef5]" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-white font-bold text-sm">{a.name}</h3>
                    <span className="text-[#00c2ff] font-black text-sm shrink-0">{a.price}</span>
                  </div>
                  <p className="text-[#94a3b8] text-xs leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white font-serif mb-3">Pricing FAQ</h2>
            <p className="text-[#94a3b8]">Common questions about our plans and pricing</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glow-card bg-[#111827] rounded-xl p-6">
                <h3 className="text-white font-bold mb-2">{f.q}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 px-4 bg-gradient-to-r from-[#0f1e3d] via-[#1d3a7a] to-[#0f1e3d]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white font-serif mb-4 text-balance">
            Not Sure Which Plan? Talk to Our Team
          </h2>
          <p className="text-[#94a3b8] mb-7">
            Our specialists will help you pick the right plan based on your home size, number of devices, and budget — at no charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18884003290"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-1"
            >
              <Phone size={18} /> +1 (888) 400-3290
            </a>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#00c2ff] text-[#00c2ff] font-bold px-8 py-4 rounded-xl hover:bg-[#00c2ff] hover:text-[#0a0f1e] transition-all"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
