'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react'

const contactMethods = [
  { icon: Phone, title: 'Call Us Now', desc: 'Speak directly with a technician or book over the phone', value: '+1 (888) 400-3290', action: 'tel:+18884003290', label: 'Call Now', color: 'from-[#1d6ef5] to-[#0ea5e9]' },
  { icon: Mail, title: 'Email Support', desc: 'Send us your questions — we respond within 2 hours', value: 'support@frontechsecurity.com', action: 'mailto:support@frontechsecurity.com', label: 'Send Email', color: 'from-[#7c3aed] to-[#1d6ef5]' },
  { icon: Clock, title: 'Hours of Operation', desc: 'Available 7 days a week for your convenience', value: 'Mon–Sun, 7AM–10PM EST', action: null, label: null, color: 'from-[#22c55e] to-[#0ea5e9]' },
  { icon: MapPin, title: 'Our Address', desc: 'Rancho Cucamonga, CA — serving USA & Canada nationwide', value: '7430 Pasito Ave, Rancho Cucamonga, CA 91730', action: 'https://maps.google.com/?q=7430+Pasito+Ave+Rancho+Cucamonga+CA+91730', label: 'View on Map', color: 'from-[#f59e0b] to-[#ef4444]' },
]

export default function ContactClient() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'error'>('idle')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')
    try {
      const res = await fetch('/mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _type: 'contact' }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setStatus('error' as const)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] bg-[#0a0f1e] flex items-center justify-center px-4 py-20">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-[#22c55e]/15 border-2 border-[#22c55e] flex items-center justify-center mx-auto">
            <CheckCircle2 size={40} className="text-[#22c55e]" />
          </div>
          <h1 className="text-3xl font-black text-white font-serif">Message Received!</h1>
          <p className="text-[#94a3b8]">
            Thank you, <span className="text-white font-semibold">{form.name}</span>. A member of our team will contact you at <span className="text-[#00c2ff]">{form.email}</span> within 2 business hours.
          </p>
          <div className="glow-card bg-[#111827] rounded-xl p-5 text-left space-y-2 text-sm">
            {form.phone && <p className="text-[#94a3b8]"><span className="text-white font-semibold">Phone: </span>{form.phone}</p>}
            {form.service && <p className="text-[#94a3b8]"><span className="text-white font-semibold">Service: </span>{form.service}</p>}
          </div>
          <p className="text-[#94a3b8] text-sm">Need immediate help? Call us now:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+18884003290" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold px-7 py-3.5 rounded-xl hover:shadow-lg transition-shadow">
              <Phone size={16} /> +1 (888) 400-3290
            </a>
            <a href="/" className="inline-flex items-center justify-center gap-2 border-2 border-[#1e3a5f] text-[#94a3b8] hover:text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#0a0f1e]">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, #1d6ef5, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto relative">
          <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-5 font-serif text-balance">
            We Are Here to <span className="gradient-text">Help You</span>
          </h1>
          <p className="text-[#94a3b8] text-lg mb-6">Have a question about installation, pricing, or your existing system? Reach out — our team responds fast.</p>
          <a href="tel:+18884003290" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-black text-lg px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-1 pulse-phone">
            <Phone size={20} /> +1 (888) 400-3290 — Call Free
          </a>
        </div>
      </section>

      {/* Contact cards */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactMethods.map(({ icon: Icon, title, desc, value, action, label, color }) => (
            <div key={title} className="glow-card bg-[#111827] rounded-xl p-6 flex flex-col gap-3">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
                <p className="text-[#94a3b8] text-xs leading-relaxed mb-2">{desc}</p>
                <p className="text-[#00c2ff] font-semibold text-sm">{value}</p>
              </div>
              {action && label && (
                <a href={action} className={`mt-auto inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg text-sm font-bold transition-all bg-gradient-to-r ${color} text-white hover:shadow-md hover:-translate-y-0.5`}>
                  {label}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact form + info */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="glow-card bg-[#111827] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#1d6ef5]/15 flex items-center justify-center">
                  <MessageSquare size={20} className="text-[#1d6ef5]" />
                </div>
                <div>
                  <h2 className="text-white font-bold font-serif text-lg">Send Us a Message</h2>
                  <p className="text-[#94a3b8] text-xs">We respond within 2 business hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#94a3b8] text-xs font-semibold mb-1.5 uppercase tracking-wider">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className="form-input" />
                    </div>
                    <div>
                      <label className="block text-[#94a3b8] text-xs font-semibold mb-1.5 uppercase tracking-wider">Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="+1 (555) 000-0000" className="form-input" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#94a3b8] text-xs font-semibold mb-1.5 uppercase tracking-wider">Email Address *</label>
                    <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="john@example.com" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-[#94a3b8] text-xs font-semibold mb-1.5 uppercase tracking-wider">Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange} className="form-input">
                      <option value="">Select a service...</option>
                      <option>Security Camera Installation</option>
                      <option>Smart Doorbell Installation</option>
                      <option>Wi-Fi &amp; Network Setup</option>
                      <option>Quick Service Plan</option>
                      <option>Pricing Information</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#94a3b8] text-xs font-semibold mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Describe your situation or question..." className="form-input resize-none" />
                  </div>
                  {status === 'error' as string && (
                    <div className="flex items-center gap-2 text-[#ef4444] text-sm bg-[#ef4444]/10 rounded-lg px-4 py-3">
                      <AlertCircle size={16} /> Something went wrong. Please try again or call us directly.
                    </div>
                  )}
                  <button type="submit" disabled={loading} className="w-full py-4 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-black rounded-xl hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-0.5 disabled:opacity-60">
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="text-center text-[#94a3b8] text-xs">
                    Prefer to talk? Call us at{' '}
                    <a href="tel:+18884003290" className="text-[#00c2ff] font-semibold hover:underline">+1 (888) 400-3290</a>
                  </p>
                </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            <div className="glow-card bg-[#111827] rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 font-serif">Why Call Instead of Email?</h3>
              <ul className="space-y-3 text-sm text-[#94a3b8]">
                {['Get an instant quote over the phone', 'Book a same-day appointment', 'Speak with a certified technician directly', 'No waiting — immediate response', 'Available 7 days a week'].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#22c55e] mt-0.5 shrink-0" />{i}
                  </li>
                ))}
              </ul>
              <a href="tel:+18884003290" className="mt-5 flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-black rounded-xl hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-0.5 pulse-phone">
                <Phone size={17} /> +1 (888) 400-3290
              </a>
            </div>
            <div className="glow-card bg-[#111827] rounded-xl p-6">
              <h3 className="text-white font-bold mb-3 font-serif">Before You Call</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">Have the following ready to speed things up:</p>
              <ul className="space-y-2 text-sm text-[#94a3b8]">
                {['Your home address or zip code', 'Number of devices to install', 'Device brand/model (if known)', 'Preferred appointment date/time'].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1d6ef5] mt-1.5 shrink-0" />{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glow-card bg-[#111827] rounded-xl p-6 text-center">
              <p className="text-[#22c55e] font-bold text-sm mb-1">Average Wait Time</p>
              <p className="text-white font-black text-3xl font-serif mb-1">{'< 60 sec'}</p>
              <p className="text-[#94a3b8] text-xs">to speak with a live technician</p>
            </div>

            {/* Physical address */}
            <div className="glow-card bg-[#111827] rounded-xl p-6">
              <h3 className="text-white font-bold mb-3 font-serif flex items-center gap-2">
                <MapPin size={16} className="text-[#f59e0b]" />
                Our Location
              </h3>
              <address className="not-italic text-[#94a3b8] text-sm leading-relaxed mb-4">
                <span className="text-white font-semibold block mb-1">FrontechSecurity</span>
                7430 Pasito Ave<br />
                Rancho Cucamonga, CA 91730<br />
                United States
              </address>
              <a
                href="https://maps.google.com/?q=7430+Pasito+Ave+Rancho+Cucamonga+CA+91730"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00c2ff] text-sm font-semibold hover:text-white transition-colors"
              >
                <MapPin size={13} />
                Get Directions on Google Maps
              </a>
            </div>

            {/* Google Ads policy compliance disclaimer */}
            <div className="bg-[#0a1628] border border-[#1e3a5f] rounded-xl p-4 flex items-start gap-3">
              <ShieldCheck size={15} className="text-[#1d6ef5] shrink-0 mt-0.5" />
              <p className="text-[#64748b] text-[11px] leading-relaxed">
                FrontechSecurity is an independent third-party installation and support service. We are not affiliated with, endorsed by, or an official partner of Ring, Google Nest, Arlo, Wyze, or any other brand. All brand names are trademarks of their respective owners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
