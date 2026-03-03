import { ShieldCheck, Star, Clock, BadgeCheck, Zap, MapPin } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, text: 'Licensed & Insured', color: '#22c55e' },
  { icon: BadgeCheck,  text: 'Certified Technicians', color: '#1d6ef5' },
  { icon: Star,        text: '4.9 / 5 Rating', color: '#f59e0b' },
  { icon: Zap,         text: 'Same-Day Service', color: '#00c2ff' },
  { icon: Clock,       text: 'Mon–Sun 7AM–10PM EST', color: '#94a3b8' },
  { icon: MapPin,      text: 'USA & Canada', color: '#a78bfa' },
]

export default function TopBar() {
  return (
    <div className="trust-bar border-b border-[#1e3a5f]/60 py-2 px-4 bg-[#060c1a]">
      <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-between gap-x-4 gap-y-1 flex-wrap">
        {badges.map(({ icon: Icon, text, color }) => (
          <span
            key={text}
            className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#94a3b8] whitespace-nowrap"
          >
            <Icon size={12} style={{ color }} className="shrink-0" />
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
