import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Shield, Star, Users, Clock, CheckCircle2, Award, MapPin, ArrowRight, Zap, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Security Camera & Doorbell Installation Experts',
  description:
    'Learn about FrontechSecurity — a team of certified smart home security technicians proudly serving USA & Canada. Professional, trusted, and available 7 days a week.',
  alternates: { canonical: 'https://frontechsecurity.com/about' },
  openGraph: {
    title: 'About FrontechSecurity',
    description: 'Meet the certified team behind 12,000+ successful installations across the USA and Canada.',
    url: 'https://frontechsecurity.com/about',
  },
}

const stats = [
  { value: '12,000+', label: 'Devices Installed', icon: Shield },
  { value: '5,000+', label: 'Happy Customers', icon: Users },
  { value: '4.9 / 5', label: 'Average Rating', icon: Star },
  { value: '8+ Years', label: 'In the Industry', icon: Clock },
]

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'We treat every home like our own. Every installation is performed with the highest safety standards and zero shortcuts.',
  },
  {
    icon: Award,
    title: 'Certified Expertise',
    desc: 'All our technicians hold industry certifications and undergo continuous training on the latest smart security technologies.',
  },
  {
    icon: Heart,
    title: 'Customer Obsessed',
    desc: 'We are not done until you are fully satisfied. Our service team is available 7 days a week to resolve any issue, fast.',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable',
    desc: 'Same-day appointments available in most areas. We show up on time, work efficiently, and clean up after ourselves.',
  },
]

const team = [
  {
    name: 'Marcus T.',
    role: 'Lead Installation Technician',
    years: '9 years experience',
    initials: 'MT', color: '#1d6ef5',
    certifications: 'CompTIA Network+, Smart Home Pro',
  },
  {
    name: 'Sarah K.',
    role: 'Network & Wi-Fi Specialist',
    years: '7 years experience',
    initials: 'SK', color: '#0ea5e9',
    certifications: 'Cisco CCNA, Wi-Fi Alliance Certified',
  },
  {
    name: 'David R.',
    role: 'Senior Service Specialist',
    years: '6 years experience',
    initials: 'DR', color: '#22c55e',
    certifications: 'A+ Certified, Smart Device Specialist',
  },
  {
    name: 'Priya M.',
    role: 'Customer Success Manager',
    years: '5 years experience',
    initials: 'PM', color: '#7c3aed',
    certifications: 'ITIL Foundation, CX Professional',
  },
]

const serviceAreas = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia',
  'San Antonio', 'Dallas', 'Toronto', 'Vancouver', 'Calgary', 'Montreal',
  'Miami', 'Atlanta', 'Seattle', 'Denver', 'Boston', 'Austin',
]

export default function AboutPage() {
  return (
    <div className="bg-[#0a0f1e]">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, #1d6ef5, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[#1d6ef5] text-xs font-bold uppercase tracking-widest">About FrontechSecurity</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-6 font-serif leading-tight text-balance">
              Protecting Homes Across <span className="gradient-text">USA & Canada</span>
            </h1>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
              We are a team of passionate, certified smart home security technicians dedicated to making professional-grade camera and doorbell installation accessible to every homeowner and business. Founded with a mission to simplify home security, we have grown to serve thousands of satisfied customers from coast to coast.
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-8">
              Whether you need a single doorbell installed or a full multi-camera security system deployed across your property, we bring the expertise, professionalism, and care that your home deserves.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+18884003290"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold px-6 py-3.5 rounded-xl hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-1"
              >
                <Phone size={16} /> Call Us: +1 (888) 400-3290
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 border-2 border-[#00c2ff] text-[#00c2ff] font-bold px-6 py-3.5 rounded-xl hover:bg-[#00c2ff] hover:text-[#0a0f1e] transition-all"
              >
                Book Installation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-card">
              <img
                src="https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop"
                alt="Professional technician installing a security camera system on a residential property"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-around">
                {[
                  { v: '12K+', l: 'Installs' },
                  { v: '4.9★', l: 'Rated' },
                  { v: '8 Yrs', l: 'Experience' },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-white font-black text-xl font-serif">{s.v}</div>
                    <div className="text-[#94a3b8] text-xs">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-4 trust-bar">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-[#1d6ef5]/15 flex items-center justify-center mb-1">
                <Icon size={22} className="text-[#1d6ef5]" />
              </div>
              <div className="text-3xl font-black text-white font-serif">{value}</div>
              <div className="text-[#94a3b8] text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-[#060c1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white font-serif mb-4">Our Story</h2>
          </div>
          <div className="glow-card bg-[#111827] rounded-2xl p-8 md:p-12 space-y-5 text-[#94a3b8] leading-relaxed">
            <p>
              FrontechSecurity was founded by a group of IT and networking professionals who noticed a recurring problem: homeowners were purchasing high-quality smart security cameras and doorbells but struggling to install, configure, and maintain them properly. Devices sat in boxes for months, were installed at wrong angles, or kept disconnecting from Wi-Fi — leaving homes less secure than before.
            </p>
            <p>
              We set out to solve this. Our model is simple — we handle everything from the moment you call, to the moment your system is live, connected, and sending alerts to your phone. We service all major brands including Ring, Arlo, Nest, Eufy, Reolink, Blink, and more.
            </p>
            <p>
              Today, we serve customers across the United States and Canada, offering same-day appointments, transparent flat-rate pricing, and fast, reliable service 7 days a week. Our reputation is built entirely on trust, referrals, and five-star reviews from homeowners who finally feel secure.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              {['Ring Compatible', 'Arlo Compatible', 'Nest Compatible', 'Eufy Compatible', 'Reolink Compatible', 'Blink Compatible'].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 bg-[#1d6ef5]/10 border border-[#1d6ef5]/30 text-[#93c5fd] text-xs font-semibold px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={11} className="text-[#22c55e]" /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white font-serif mb-3">Our Core Values</h2>
            <p className="text-[#94a3b8]">The principles that guide every installation, every call, every visit</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glow-card bg-[#111827] rounded-xl p-7 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#1d6ef5]/15 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-[#1d6ef5]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 font-serif">{title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-[#060c1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white font-serif mb-3">Meet Our Experts</h2>
            <p className="text-[#94a3b8]">Certified professionals who treat your home with the utmost respect</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div key={member.name} className="glow-card bg-[#111827] rounded-xl overflow-hidden text-center">
                <div className="w-full aspect-square flex items-center justify-center" style={{ background: `${member.color}18` }}>
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black text-white border-4 font-serif" style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}99)`, borderColor: `${member.color}50` }}>
                    {member.initials}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold mb-0.5">{member.name}</h3>
                  <p className="text-[#1d6ef5] text-xs font-semibold mb-1">{member.role}</p>
                  <p className="text-[#94a3b8] text-xs mb-3">{member.years}</p>
                  <div className="text-[10px] text-[#22c55e] bg-[#22c55e]/10 rounded-full px-2 py-1">
                    {member.certifications}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white font-serif mb-3">Cities We Serve</h2>
            <p className="text-[#94a3b8]">Currently serving major metropolitan areas across the USA and Canada — with more cities being added every month.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((city) => (
              <span key={city} className="inline-flex items-center gap-1.5 bg-[#111827] border border-[#1e3a5f] text-[#94a3b8] text-sm px-4 py-2 rounded-lg hover:border-[#1d6ef5] hover:text-white transition-all">
                <MapPin size={12} className="text-[#1d6ef5]" /> {city}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 bg-[#1d6ef5]/10 border border-[#1d6ef5]/40 text-[#93c5fd] text-sm px-4 py-2 rounded-lg font-semibold">
              + 50 more cities
            </span>
          </div>
          <p className="text-center text-[#94a3b8] text-sm mt-6">
            Not in the list? <a href="tel:+18884003290" className="text-[#00c2ff] font-semibold hover:underline">Call us</a> — we travel for larger projects and can often accommodate your area.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-gradient-to-r from-[#0f1e3d] via-[#1d3a7a] to-[#0f1e3d]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white font-serif mb-4 text-balance">
            Ready to Secure Your Home with the Best?
          </h2>
          <p className="text-[#94a3b8] mb-7">Join over 5,000 homeowners who trust us with their family's security.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18884003290" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1d6ef5] to-[#0ea5e9] text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#1d6ef5]/30 transition-all hover:-translate-y-1">
              <Phone size={18} /> +1 (888) 400-3290
            </a>
            <Link href="/book" className="inline-flex items-center justify-center gap-2 border-2 border-[#00c2ff] text-[#00c2ff] font-bold px-8 py-4 rounded-xl hover:bg-[#00c2ff] hover:text-[#0a0f1e] transition-all">
              Schedule Installation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
