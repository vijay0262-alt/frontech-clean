export default function DoorbellIllustration() {
  return (
    <svg viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="520" height="360" rx="16" fill="#0f1e3d" />
      <rect width="520" height="360" rx="16" fill="url(#dbBg)" opacity="0.6" />

      {/* Door frame */}
      <rect x="160" y="40" width="200" height="290" rx="4" fill="#0a1628" stroke="#1e3a5f" strokeWidth="2" />
      {/* Door panels */}
      <rect x="172" y="56" width="82" height="100" rx="3" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="266" y="56" width="82" height="100" rx="3" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="172" y="172" width="82" height="80" rx="3" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="266" y="172" width="82" height="80" rx="3" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      {/* Door knob */}
      <circle cx="252" cy="215" r="7" fill="#1d6ef5" opacity="0.8" />
      <circle cx="268" cy="215" r="7" fill="#1d6ef5" opacity="0.8" />

      {/* Smart Doorbell device — mounted right of door */}
      <g transform="translate(370, 140)">
        {/* Mount plate */}
        <rect x="0" y="0" width="48" height="86" rx="10" fill="#1e2d4a" stroke="#1d6ef5" strokeWidth="2" />
        {/* Camera lens area */}
        <rect x="8" y="10" width="32" height="24" rx="6" fill="#0a0f1e" stroke="#00c2ff" strokeWidth="1.2" />
        <circle cx="24" cy="22" r="8" fill="#060c1a" stroke="#00c2ff" strokeWidth="1" />
        <circle cx="24" cy="22" r="4.5" fill="#0a0f1e" />
        <circle cx="24" cy="22" r="2" fill="#00c2ff" opacity="0.9" />
        <circle cx="22" cy="20" r="1" fill="white" opacity="0.7" />
        {/* PIR motion sensor */}
        <rect x="8" y="40" width="32" height="8" rx="4" fill="#0a0f1e" stroke="#1e3a5f" strokeWidth="1" />
        <circle cx="18" cy="44" r="2" fill="#f59e0b" opacity="0.8" />
        <circle cx="24" cy="44" r="2" fill="#f59e0b" opacity="0.6" />
        <circle cx="30" cy="44" r="2" fill="#f59e0b" opacity="0.4" />
        {/* Ring button */}
        <circle cx="24" cy="66" r="11" fill="#1d6ef5" opacity="0.2" stroke="#1d6ef5" strokeWidth="1.5" />
        <circle cx="24" cy="66" r="7" fill="#1d6ef5">
          <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Status LED */}
        <circle cx="40" cy="10" r="3" fill="#22c55e">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Ring animation circles */}
      <circle cx="394" cy="206" r="20" stroke="#1d6ef5" strokeWidth="1" fill="none" opacity="0.4">
        <animate attributeName="r" values="18;28;18" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="394" cy="206" r="14" stroke="#00c2ff" strokeWidth="1.5" fill="none" opacity="0.6">
        <animate attributeName="r" values="14;22;14" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>

      {/* Phone showing doorbell notification */}
      <g transform="translate(60, 90)">
        <rect x="0" y="0" width="90" height="170" rx="14" fill="#111827" stroke="#1d6ef5" strokeWidth="1.5" />
        {/* Screen */}
        <rect x="6" y="16" width="78" height="122" rx="4" fill="#0a0f1e" />
        {/* Notch */}
        <rect x="30" y="6" width="30" height="7" rx="3.5" fill="#0a0f1e" />
        {/* Notification popup */}
        <rect x="9" y="19" width="72" height="36" rx="5" fill="#1d6ef5" opacity="0.15" stroke="#1d6ef5" strokeWidth="1" />
        <text x="45" y="31" fontSize="7" fill="#93c5fd" textAnchor="middle" fontFamily="monospace" fontWeight="bold">DOORBELL</text>
        <text x="45" y="42" fontSize="6.5" fill="#94a3b8" textAnchor="middle" fontFamily="monospace">Someone at the door!</text>
        <text x="45" y="51" fontSize="6" fill="#22c55e" textAnchor="middle" fontFamily="monospace">Tap to view live</text>
        {/* Live feed on phone */}
        <rect x="9" y="60" width="72" height="50" rx="4" fill="#060c1a" />
        <text x="45" y="82" fontSize="8" fill="#1d6ef5" textAnchor="middle" fontFamily="monospace">LIVE</text>
        <circle cx="22" cy="76" r="4" fill="#ef4444" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1s" repeatCount="indefinite" />
        </circle>
        <text x="30" y="79" fontSize="6.5" fill="#94a3b8" fontFamily="monospace">● REC</text>
        {/* Action buttons */}
        <rect x="9" y="116" width="32" height="18" rx="5" fill="#22c55e" opacity="0.9" />
        <text x="25" y="128" fontSize="7" fill="white" textAnchor="middle" fontFamily="monospace">Answer</text>
        <rect x="48" y="116" width="33" height="18" rx="5" fill="#ef4444" opacity="0.9" />
        <text x="64.5" y="128" fontSize="7" fill="white" textAnchor="middle" fontFamily="monospace">Ignore</text>
        {/* Home button */}
        <circle cx="45" cy="155" r="9" fill="#1e2d4a" stroke="#1e3a5f" strokeWidth="1" />
      </g>

      {/* Wifi / connection signal */}
      <path d="M150 175 Q260 130 368 175" stroke="#00c2ff" strokeWidth="1.2" strokeDasharray="5 4" opacity="0.4" />
      <path d="M150 175 Q260 150 368 175" stroke="#1d6ef5" strokeWidth="1" strokeDasharray="3 5" opacity="0.3" />

      {/* Two-way audio waves from doorbell */}
      <g opacity="0.5">
        <path d="M428 196 Q440 188 428 180" stroke="#00c2ff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M432 200 Q450 188 432 176" stroke="#00c2ff" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M436 204 Q460 188 436 172" stroke="#00c2ff" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4" />
      </g>

      {/* Motion detection zone at door */}
      <path d="M394 170 Q360 230 330 290" stroke="#f59e0b" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.4" />
      <path d="M394 170 Q430 230 460 280" stroke="#f59e0b" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.4" />
      <path d="M330 290 Q395 270 460 280" stroke="#f59e0b" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.4" />

      {/* Bottom status bar */}
      <rect x="30" y="310" width="460" height="34" rx="8" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      <circle cx="50" cy="327" r="5" fill="#f59e0b">
        <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="63" y="331" fontSize="9" fill="#93c5fd" fontFamily="monospace">Motion Detected — Front Door</text>
      <text x="345" y="331" fontSize="9" fill="#1d6ef5" fontFamily="monospace">|</text>
      <text x="356" y="331" fontSize="9" fill="#22c55e" fontFamily="monospace">HD • 1080p</text>

      <defs>
        <radialGradient id="dbBg" cx="60%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0a0f1e" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
