import Link from 'next/link'
import { Phone, CalendarCheck, MessageCircle } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-20 px-4 bg-[#f5f5f5] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0066cc 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-4xl mx-auto text-center relative">
        <span className="text-[#0066cc] text-xs font-bold uppercase tracking-widest">Take Action Today</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] mt-3 mb-5 font-serif leading-tight">
          Secure Your Home with Expert Installation
        </h2>
        <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Don't leave your home unprotected. Our certified technicians are ready to install, configure, and support your smart security system today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="tel:+18448100173"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#0066cc] to-[#0052a3] text-[#1a1a1a] font-bold text-lg px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#0066cc]/40 transition-all hover:-translate-y-1 pulse-phone"
          >
            <Phone size={22} />
            ☎ Call +1 (844) 810-0173
          </a>
          <Link
            href="/book"
            className="flex items-center justify-center gap-3 border-2 border-[#0066cc] text-[#0066cc] font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#0066cc] hover:text-[#1a1a1a] transition-all hover:-translate-y-1"
          >
            <CalendarCheck size={22} />
            Book Online — Free
          </Link>
        </div>
        <p className="text-[#4a4a4a] text-sm">
          Available Mon–Sun, 7AM–10PM EST · USA &amp; Canada · Same-day slots available
        </p>
      </div>
    </section>
  )
}
