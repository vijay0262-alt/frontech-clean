import { Phone } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-[#0066cc] to-[#0052a3] py-14 sm:py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-4xl mx-auto text-center relative">
        <span className="text-white/90 text-xs sm:text-sm font-semibold uppercase tracking-widest">Ready to Secure Your Home?</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-5 font-serif leading-tight">
          Get Expert Installation — Call Now
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Don't leave your home unprotected. Our certified technicians are ready to install, configure, and service your smart security system today.
        </p>
        <a
          href="tel:+18449667866"
          className="inline-flex items-center justify-center gap-3 bg-white text-[#0066cc] font-bold text-lg sm:text-xl px-8 py-4 rounded-xl hover:bg-blue-50 hover:shadow-2xl transition-all phone-cta"
        >
          <Phone size={22} className="phone-ring shrink-0" />
          Call +1 (844) 966-7866
        </a>
        <p className="text-white/90 text-xs sm:text-sm mt-5">
          Available Mon–Sun, 7AM–10PM EST · USA &amp; Canada · Same-day slots available
        </p>
      </div>
    </section>
  )
}
