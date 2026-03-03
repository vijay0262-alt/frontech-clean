import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Michael T.',
    location: 'Houston, TX',
    rating: 5,
    text: 'The technician was incredibly professional. Installed 4 outdoor cameras and 2 doorbells in under 3 hours. The app setup was seamless and he walked me through every feature. Highly recommend!',
    service: 'Camera + Doorbell Install',
  },
  {
    name: 'Sarah K.',
    location: 'Toronto, ON',
    rating: 5,
    text: 'Amazing service! I had no idea how to set up my new video doorbell and they handled everything — from mounting to Wi-Fi pairing to app configuration. Works perfectly.',
    service: 'Smart Doorbell Setup',
  },
  {
    name: 'James R.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'Called them on a Friday afternoon and they had a tech at my door Saturday morning. Super fast, clean installation. The monthly support plan is worth every penny.',
    service: 'Security Camera Install',
  },
  {
    name: 'Linda M.',
    location: 'Chicago, IL',
    rating: 5,
    text: 'I was struggling with my camera going offline constantly. Their remote support team diagnosed it as a Wi-Fi issue and fixed it in 20 minutes. Excellent support!',
    service: 'Quick Service Plan',
  },
  {
    name: 'David C.',
    location: 'Miami, FL',
    rating: 5,
    text: 'Best investment for my home security. The team installed 6 cameras with full coverage of my property. Everything is clear 4K and the night vision is outstanding.',
    service: '6-Camera System Install',
  },
  {
    name: 'Angela W.',
    location: 'Vancouver, BC',
    rating: 5,
    text: 'Switched from a different company to this service and the difference is night and day. Professional, knowledgeable, and the annual plan saves so much money.',
    service: 'Annual Protection Plan',
  },
]

export default function ReviewsSection() {
  return (
    <section className="py-20 px-4 bg-[#060c1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">Customer Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4 font-serif">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            {[1,2,3,4,5].map((s) => <Star key={s} size={20} fill="#f59e0b" className="text-[#f59e0b]" />)}
            <span className="text-white font-bold ml-2 text-lg">4.9 / 5</span>
          </div>
          <p className="text-[#94a3b8]">Based on 2,400+ verified customer reviews across USA &amp; Canada</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((rev) => (
            <div key={rev.name} className="glow-card bg-[#111827] rounded-2xl p-6">
              <Quote size={24} className="text-[#1d6ef5]/30 mb-3" />
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-5 italic">{`"${rev.text}"`}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{rev.name}</p>
                  <p className="text-[#94a3b8] text-xs">{rev.location}</p>
                </div>
                <div className="text-right">
                  <div className="flex gap-0.5 justify-end mb-1">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} size={12} fill="#f59e0b" className="text-[#f59e0b]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#1d6ef5] bg-[#1d6ef5]/10 border border-[#1d6ef5]/20 rounded-full px-2 py-0.5">
                    {rev.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
