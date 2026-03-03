import Link from 'next/link'
import { Phone, CalendarCheck, MessageCircle } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-20 px-4 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #1d6ef5 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-4xl mx-auto text-center relative">
        <span className="text-[#00c2ff] text-xs font-bold uppercase tracking-widest">Take Action Today</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-5 font-serif leading-tight">
          Secure Your Home with Expert Installation
        </h2>
        <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Don't leave your home unprotected. Our certified technicians are ready to install, configure, and support your smart security system today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="tel:+18884003290"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold text-lg px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#1d6ef5]/40 transition-all hover:-translate-y-1 pulse-phone"
          >
            <Phone size={22} />
            Call +1 (888) 400-3290
          </a>
          <Link
            href="/book"
            className="flex items-center justify-center gap-3 border-2 border-[#00c2ff] text-[#00c2ff] font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#00c2ff] hover:text-[#0a0f1e] transition-all hover:-translate-y-1"
          >
            <CalendarCheck size={22} />
            Book Online — Free
          </Link>
        </div>
        <p className="text-[#94a3b8] text-sm">
          Available Mon–Sun, 7AM–10PM EST · USA &amp; Canada · Same-day slots available
        </p>
      </div>
    </section>
  )
}
