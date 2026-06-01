'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Phone, CheckCircle2, Calendar, Clock, Shield, ArrowRight, Star, User, MapPin, Mail } from 'lucide-react'

const services = [
  { id: 'camera', label: 'Security Camera Installation', price: 'From $49.99', desc: 'Indoor/outdoor cameras, wiring, app setup' },
  { id: 'doorbell', label: 'Smart Doorbell Installation', price: 'From $49.99', desc: 'Video doorbell, wiring/battery, Wi-Fi pairing' },
  { id: 'setup', label: 'Wi-Fi & Network Setup', price: 'Add-on', desc: 'Router config, extender, remote access' },
  { id: 'support', label: 'Quick Service Plan', price: '$9.99/mo', desc: 'Ongoing phone & remote service' },
  { id: 'bundle', label: 'Multi-Device Bundle (4+ devices)', price: 'From $129.99', desc: 'Best rate for 4 or more devices' },
  { id: 'other', label: 'Not sure — need a consultation', price: 'Free', desc: "Tell us your situation and we'll advise you" },
]

const timeSlots = ['7:00 AM – 9:00 AM', '9:00 AM – 11:00 AM', '11:00 AM – 1:00 PM', '1:00 PM – 3:00 PM', '3:00 PM – 5:00 PM', '5:00 PM – 7:00 PM']
const steps = ['Service', 'Details', 'Schedule', 'Confirm']

export default function BookClient() {
  const [step, setStep] = useState(0)
  const [selectedService, setSelectedService] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '', state: '', zip: '', date: '', time: '', notes: '', deviceType: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value })

  const [submitError, setSubmitError] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    setSubmitError(false)
    try {
      const res = await fetch('/mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          _type: 'booking',
          service: services.find((s) => s.id === selectedService)?.label ?? selectedService,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setSubmitError(true)
    } finally {
      setLoading(false)
    }
  }

  const canAdvance = () => {
    if (step === 0) return !!selectedService
    if (step === 1) return !!(form.name && form.email && form.phone && form.address && form.city && form.zip && form.deviceType)
    if (step === 2) return !!(form.date && form.time)
    return true
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-[#22c55e]/15 border-2 border-[#22c55e] flex items-center justify-center mx-auto">
            <CheckCircle2 size={40} className="text-[#22c55e]" />
          </div>
          <h1 className="text-3xl font-black text-[#1a1a1a] font-serif">Booking Confirmed!</h1>
          <div className="glow-card bg-white rounded-xl p-6 text-left space-y-3 text-sm">
            <p className="text-[#4a4a4a]"><span className="text-[#1a1a1a] font-semibold">Service:</span> {services.find((s) => s.id === selectedService)?.label}</p>
            <p className="text-[#4a4a4a]"><span className="text-[#1a1a1a] font-semibold">Name:</span> {form.name}</p>
            <p className="text-[#4a4a4a]"><span className="text-[#1a1a1a] font-semibold">Date:</span> {form.date}</p>
            <p className="text-[#4a4a4a]"><span className="text-[#1a1a1a] font-semibold">Time:</span> {form.time}</p>
            <p className="text-[#4a4a4a]"><span className="text-[#1a1a1a] font-semibold">Address:</span> {form.address}, {form.city}, {form.state} {form.zip}</p>
          </div>
          <p className="text-[#4a4a4a] text-sm">A confirmation will be sent to <span className="text-[#0066cc]">{form.email}</span>. Our technician will call you 30 minutes before arrival.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+18448100173" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0066cc] to-[#0052a3] text-white font-bold px-6 py-3.5 rounded-xl hover:shadow-lg transition-all">
              <Phone size={16} /> +1 (844) 810-0173
            </a>
            <Link href="/" className="inline-flex items-center justify-center gap-2 border-2 border-[#e5e7eb] text-[#4a4a4a] hover:text-[#1a1a1a] font-bold px-6 py-3.5 rounded-xl transition-all">Back to Home</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-[#0066cc] to-[#0052a3] border-b border-[#e5e7eb] py-3 px-4 text-center">
        <p className="text-white text-sm">Prefer to book by phone?{' '}
          <a href="tel:+18448100173" className="text-white font-black hover:underline">Call +1 (844) 810-0173</a>{' '}— Instant scheduling, no wait
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <span className="text-[#0066cc] text-xs font-bold uppercase tracking-widest">Online Booking</span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mt-3 mb-3 font-serif">Schedule Your Installation</h1>
          <p className="text-[#4a4a4a]">Takes less than 2 minutes. Same-day appointments often available.</p>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`flex items-center gap-2 text-xs font-bold ${i === step ? 'text-[#1a1a1a]' : i < step ? 'text-[#22c55e]' : 'text-[#4b5563]'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${i < step ? 'bg-[#22c55e] text-[#1a1a1a]' : i === step ? 'bg-[#0066cc] text-white' : 'bg-[#1e2d4a] text-[#4b5563]'}`}>
                  {i < step ? <CheckCircle2 size={14} /> : i + 1}
                </div>
                <span className="hidden sm:block">{s}</span>
              </div>
              {i < steps.length - 1 && <div className={`h-px w-8 ${i < step ? 'bg-[#22c55e]' : 'bg-[#1e3a5f]'}`} />}
            </div>
          ))}
        </div>

        <div className="glow-card bg-white rounded-2xl p-6 sm:p-8">
          {/* Step 0 */}
          {step === 0 && (
            <div>
              <h2 className="text-[#1a1a1a] font-bold text-xl mb-2 font-serif">What do you need help with?</h2>
              <p className="text-[#4a4a4a] text-sm mb-6">Select the service that best matches your needs</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((svc) => (
                  <button key={svc.id} onClick={() => setSelectedService(svc.id)}
                    className={`text-left p-4 rounded-xl border transition-all ${selectedService === svc.id ? 'border-[#0066cc] bg-[#0066cc]/10 text-[#1a1a1a]' : 'border-[#e5e7eb] bg-white text-[#4a4a4a] hover:border-[#0066cc]/50 hover:text-[#1a1a1a]'}`}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-sm mb-0.5">{svc.label}</p>
                        <p className="text-xs opacity-75">{svc.desc}</p>
                      </div>
                      <span className={`text-xs font-black shrink-0 mt-0.5 ${selectedService === svc.id ? 'text-[#0066cc]' : 'text-[#0066cc]'}`}>{svc.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h2 className="text-[#1a1a1a] font-bold text-xl mb-2 font-serif">Your Contact & Address Details</h2>
              <p className="text-[#4a4a4a] text-sm mb-6">We use this to confirm your appointment and dispatch your technician</p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#4a4a4a] text-xs font-semibold mb-1.5 uppercase tracking-wider">Full Name *</label>
                    <div className="relative"><User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4b5563]" /><input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className="form-input pl-9" /></div>
                  </div>
                  <div>
                    <label className="block text-[#4a4a4a] text-xs font-semibold mb-1.5 uppercase tracking-wider">Phone *</label>
                    <div className="relative"><Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4b5563]" /><input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="+1 (555) 000-0000" className="form-input pl-9" /></div>
                  </div>
                </div>
                <div>
                  <label className="block text-[#4a4a4a] text-xs font-semibold mb-1.5 uppercase tracking-wider">Email Address *</label>
                  <div className="relative"><Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4b5563]" /><input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="john@example.com" className="form-input pl-9" /></div>
                </div>
                <div>
                  <label className="block text-[#4a4a4a] text-xs font-semibold mb-1.5 uppercase tracking-wider">Street Address *</label>
                  <div className="relative"><MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4b5563]" /><input name="address" value={form.address} onChange={handleChange} required placeholder="123 Main Street" className="form-input pl-9" /></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[#4a4a4a] text-xs font-semibold mb-1.5 uppercase tracking-wider">City *</label>
                    <input name="city" value={form.city} onChange={handleChange} required placeholder="New York" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-[#4a4a4a] text-xs font-semibold mb-1.5 uppercase tracking-wider">State/Province</label>
                    <input name="state" value={form.state} onChange={handleChange} placeholder="NY" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-[#4a4a4a] text-xs font-semibold mb-1.5 uppercase tracking-wider">ZIP / Postal *</label>
                    <input name="zip" value={form.zip} onChange={handleChange} required placeholder="10001" className="form-input" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#4a4a4a] text-xs font-semibold mb-1.5 uppercase tracking-wider">Installation or Repair for ? *</label>
                  <select name="deviceType" value={form.deviceType} onChange={handleChange} required className="form-input">
                    <option value="">Select device type</option>
                    <option value="Security Camera System">Security Camera System</option>
                    <option value="Smart Door Bell">Smart Door Bell</option>
                    <option value="Any other devices">Any other devices</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h2 className="text-[#1a1a1a] font-bold text-xl mb-2 font-serif">Choose Your Appointment</h2>
              <p className="text-[#4a4a4a] text-sm mb-6">Select your preferred date and arrival window</p>
              <div className="space-y-5">
                <div>
                  <label className="block text-[#4a4a4a] text-xs font-semibold mb-1.5 uppercase tracking-wider">Preferred Date *</label>
                  <div className="relative"><Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4b5563]" />
                    <input name="date" value={form.date} onChange={handleChange} type="date" min={new Date().toISOString().split('T')[0]} required className="form-input pl-9" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#4a4a4a] text-xs font-semibold mb-2 uppercase tracking-wider">Preferred Time Window *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((t) => (
                      <button key={t} type="button" onClick={() => setForm({ ...form, time: t })}
                        className={`flex items-center gap-2 p-3 rounded-xl border text-sm transition-all ${form.time === t ? 'border-[#0066cc] bg-[#0066cc]/10 text-[#1a1a1a] font-semibold' : 'border-[#e5e7eb] text-[#4a4a4a] hover:border-[#0066cc]/50 hover:text-[#1a1a1a]'}`}>
                        <Clock size={13} className="shrink-0" />{t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[#4a4a4a] text-xs font-semibold mb-1.5 uppercase tracking-wider">Additional Notes (Optional)</label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="e.g. apartment access code, number of cameras, specific concerns..." className="form-input resize-none" />
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h2 className="text-[#1a1a1a] font-bold text-xl mb-2 font-serif">Review & Confirm</h2>
              <p className="text-[#4a4a4a] text-sm mb-6">Please review your booking details before submitting</p>
              <div className="space-y-1 text-sm mb-6">
                {[
                  { label: 'Service', value: services.find((s) => s.id === selectedService)?.label },
                  { label: 'Device Type', value: form.deviceType },
                  { label: 'Name', value: form.name },
                  { label: 'Phone', value: form.phone },
                  { label: 'Email', value: form.email },
                  { label: 'Address', value: `${form.address}, ${form.city}, ${form.state} ${form.zip}` },
                  { label: 'Date', value: form.date },
                  { label: 'Time', value: form.time },
                  ...(form.notes ? [{ label: 'Notes', value: form.notes }] : []),
                ].map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 py-2.5 border-b border-[#e5e7eb]">
                    <span className="text-[#4a4a4a] shrink-0">{row.label}</span>
                    <span className="text-[#1a1a1a] text-right">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#0066cc]/10 border border-[#0066cc]/30 rounded-xl p-4 flex items-start gap-3 mb-5 text-sm">
                <Shield size={16} className="text-[#0066cc] shrink-0 mt-0.5" />
                <p className="text-[#4a4a4a]">No payment is collected online — payment is due upon completion of service. A technician will call to confirm your appointment.</p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                {[{ icon: Star, text: '4.9★ Rated Service' }, { icon: Shield, text: 'Licensed & Insured' }, { icon: CheckCircle2, text: '100% Satisfaction' }].map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-1.5 text-xs text-[#4a4a4a]"><Icon size={13} className="text-[#22c55e]" /> {text}</span>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className={`flex mt-8 gap-3 ${step > 0 ? 'justify-between' : 'justify-end'}`}>
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="px-6 py-3 border border-[#e5e7eb] text-[#4a4a4a] hover:text-[#1a1a1a] hover:border-[#0066cc] rounded-xl font-semibold transition-all">Back</button>
            )}
            {step < 3 ? (
              <button onClick={() => setStep(step + 1)} disabled={!canAdvance()}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#0066cc] to-[#0052a3] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#0066cc]/30 transition-all hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed">
                Continue <ArrowRight size={16} />
              </button>
            ) : (
              <div className="flex flex-col items-end gap-2">
                {submitError && (
                  <p className="text-[#ef4444] text-xs text-right">Something went wrong. Please try again or call <a href="tel:+18448100173" className="underline">+1 (844) 810-0173</a>.</p>
                )}
                <button onClick={handleSubmit} disabled={loading}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-[#1a1a1a] font-black rounded-xl hover:shadow-lg hover:shadow-[#22c55e]/30 transition-all hover:-translate-y-0.5 disabled:opacity-60">
                  {loading ? 'Booking...' : 'Confirm Booking'}{!loading && <CheckCircle2 size={16} />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Reassurance */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[
            { icon: Phone, label: 'Prefer to call?', sub: '+1 (844) 810-0173', href: 'tel:+18448100173' },
            { icon: Shield, label: 'No payment online', sub: 'Pay after service' },
            { icon: Clock, label: 'Same-day available', sub: 'Most areas' },
          ].map(({ icon: Icon, label, sub, href }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <Icon size={18} className="text-[#0066cc]" />
              {href ? (
                <a href={href} className="text-[#0066cc] font-semibold text-xs hover:underline">{label}</a>
              ) : (
                <span className="text-[#1a1a1a] text-xs font-semibold">{label}</span>
              )}
              <span className="text-[#4a4a4a] text-xs">{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
