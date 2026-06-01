import { ShieldCheck, Clock, Wrench, ThumbsUp, Phone, Award } from 'lucide-react'

const trusts = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: Clock, label: 'Same-Day Available' },
  { icon: Wrench, label: 'Certified Technicians' },
  { icon: ThumbsUp, label: '10,000+ Installs' },
  { icon: Phone, label: '24/7 Phone Support' },
  { icon: Award, label: 'Satisfaction Guarantee' },
]

export default function TrustBar() {
  return (
    <div className="trust-bar py-8 px-4 bg-[#f5f5f5] border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trusts.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col sm:flex-row items-center gap-2 justify-center text-center sm:text-left">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <Icon size={16} className="text-[#0066cc]" />
              </div>
              <span className="text-xs text-[#4a4a4a] font-medium leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
