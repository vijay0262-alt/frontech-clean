export default function WhyUsIllustration() {
  return (
    <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="520" height="420" rx="16" fill="#0a1628" />
      <rect width="520" height="420" rx="16" fill="url(#wuBg)" opacity="0.6" />

      {/* Wall / brick texture bg */}
      {[0,1,2,3,4,5].map(row => [0,1,2,3,4].map(col => (
        <rect key={`${row}-${col}`} x={col*106 + (row%2)*53} y={row*48 + 80} width="100" height="42" rx="2"
          fill="none" stroke="#0f1e3d" strokeWidth="1" opacity="0.5" />
      )))}

      {/* Wall surface */}
      <rect x="0" y="80" width="520" height="260" fill="#0a1628" opacity="0.7" />

      {/* Security camera — detailed, center-right */}
      <g transform="translate(290, 100)">
        {/* Wall mount plate */}
        <rect x="0" y="0" width="14" height="50" rx="4" fill="#1e2d4a" stroke="#1d6ef5" strokeWidth="1.5" />
        <circle cx="7" cy="12" r="3" fill="#1d6ef5" opacity="0.8" />
        <circle cx="7" cy="38" r="3" fill="#1d6ef5" opacity="0.8" />
        {/* Arm */}
        <rect x="10" y="22" width="40" height="8" rx="4" fill="#1d6ef5" />
        {/* Camera body */}
        <rect x="44" y="10" width="90" height="46" rx="12" fill="#1e2d4a" stroke="#1d6ef5" strokeWidth="2" />
        {/* Camera lens housing */}
        <circle cx="68" cy="33" r="16" fill="#0a0f1e" stroke="#00c2ff" strokeWidth="2" />
        <circle cx="68" cy="33" r="10" fill="#060c1a" stroke="#1d6ef5" strokeWidth="1" />
        <circle cx="68" cy="33" r="5.5" fill="#0a0f1e" />
        <circle cx="68" cy="33" r="2.5" fill="#00c2ff" opacity="0.95" />
        <circle cx="65" cy="30" r="1.5" fill="white" opacity="0.7" />
        {/* IR LEDs panel */}
        <rect x="92" y="16" width="34" height="32" rx="4" fill="#0a0f1e" stroke="#1e3a5f" strokeWidth="1" />
        {[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]].map(([c,r]) => (
          <circle key={`${c}-${r}`} cx={98 + c*11} cy={24 + r*14} r="3.5" fill="#8b0000" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur={`${1.5+c*0.2+r*0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
        {/* Status LED */}
        <circle cx="126" cy="52" r="4" fill="#22c55e">
          <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Cable */}
        <path d="M44 33 Q30 33 14 33" stroke="#1d6ef5" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Detection cone */}
      <path d="M294 133 Q200 220 160 360" stroke="#1d6ef5" strokeWidth="1" strokeDasharray="6 4" opacity="0.3" />
      <path d="M294 133 Q310 230 305 360" stroke="#1d6ef5" strokeWidth="1" strokeDasharray="6 4" opacity="0.3" />
      <path d="M160 360 Q230 340 305 360" stroke="#1d6ef5" strokeWidth="1" strokeDasharray="6 4" opacity="0.3" />
      <path d="M294 133 Q200 220 160 360 Q230 340 305 360 Q310 230 294 133" fill="#1d6ef5" opacity="0.03" />

      {/* Smart Doorbell — left wall */}
      <g transform="translate(100, 130)">
        <rect x="0" y="0" width="56" height="96" rx="12" fill="#1e2d4a" stroke="#0ea5e9" strokeWidth="2" />
        {/* Top logo area */}
        <rect x="8" y="8" width="40" height="8" rx="4" fill="#0a0f1e" />
        {/* Camera module */}
        <rect x="8" y="22" width="40" height="28" rx="6" fill="#0a0f1e" stroke="#0ea5e9" strokeWidth="1.2" />
        <circle cx="28" cy="36" r="10" fill="#060c1a" stroke="#0ea5e9" strokeWidth="1" />
        <circle cx="28" cy="36" r="5.5" fill="#0a0f1e" />
        <circle cx="28" cy="36" r="2.5" fill="#00c2ff" opacity="0.9" />
        <circle cx="26" cy="34" r="1.2" fill="white" opacity="0.7" />
        {/* PIR sensor */}
        <rect x="8" y="56" width="40" height="10" rx="5" fill="#0a0f1e" stroke="#1e3a5f" strokeWidth="1" />
        <circle cx="20" cy="61" r="2.5" fill="#f59e0b" opacity="0.8" />
        <circle cx="28" cy="61" r="2.5" fill="#f59e0b" opacity="0.6" />
        <circle cx="36" cy="61" r="2.5" fill="#f59e0b" opacity="0.4" />
        {/* Ring button */}
        <circle cx="28" cy="80" r="12" fill="#1d6ef5" opacity="0.15" stroke="#1d6ef5" strokeWidth="1.5" />
        <circle cx="28" cy="80" r="8" fill="#1d6ef5">
          <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* status LED */}
        <circle cx="48" cy="10" r="4" fill="#22c55e">
          <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
      {/* Doorbell ring */}
      <circle cx="128" cy="210" r="26" stroke="#1d6ef5" strokeWidth="1" fill="none" opacity="0">
        <animate attributeName="r" values="20;34;20" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="128" cy="210" r="20" stroke="#00c2ff" strokeWidth="1.5" fill="none" opacity="0">
        <animate attributeName="r" values="14;24;14" dur="3s" begin="0.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" begin="0.6s" repeatCount="indefinite" />
      </circle>

      {/* Phone showing live feed */}
      <g transform="translate(60, 290)">
        <rect x="0" y="0" width="78" height="115" rx="12" fill="#111827" stroke="#1d6ef5" strokeWidth="1.5" />
        <rect x="5" y="13" width="68" height="76" rx="4" fill="#0a0f1e" />
        <text x="39" y="38" fontSize="7.5" fill="#1d6ef5" textAnchor="middle" fontFamily="monospace" fontWeight="bold">LIVE CAM</text>
        <circle cx="16" cy="34" r="3.5" fill="#ef4444"><animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" /></circle>
        <text x="39" y="55" fontSize="7" fill="#94a3b8" textAnchor="middle" fontFamily="monospace">HD • 1080p</text>
        <rect x="9" y="63" width="60" height="20" rx="3" fill="#0f1e3d" />
        <text x="39" y="77" fontSize="6.5" fill="#93c5fd" textAnchor="middle" fontFamily="monospace">Front Door • 11:34 PM</text>
        <rect x="26" y="5" width="26" height="5" rx="2.5" fill="#0a0f1e" />
        <circle cx="39" cy="102" r="8" fill="#1e2d4a" stroke="#1e3a5f" strokeWidth="1" />
      </g>

      {/* Connection line: phone to camera */}
      <path d="M138 320 Q200 290 290 165" stroke="#1d6ef5" strokeDasharray="5 4" strokeWidth="1" opacity="0.3" />

      {/* Certification badge top right */}
      <g transform="translate(400, 80)">
        <circle cx="40" cy="40" r="38" fill="#1d6ef5" opacity="0.1" stroke="#1d6ef5" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="28" fill="#0a1628" stroke="#1d6ef5" strokeWidth="1" />
        <path d="M26 40 L35 50 L54 30" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="40" y="78" fontSize="8" fill="#93c5fd" textAnchor="middle" fontFamily="monospace">CERTIFIED</text>
      </g>

      {/* Bottom info bar */}
      <rect x="20" y="375" width="480" height="34" rx="8" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      <circle cx="42" cy="392" r="6" fill="#22c55e" opacity="0.9" />
      <text x="56" y="396" fontSize="9" fill="#93c5fd" fontFamily="monospace">2 Devices Installed & Online</text>
      <text x="270" y="396" fontSize="9" fill="#1d6ef5" fontFamily="monospace">|</text>
      <text x="282" y="396" fontSize="9" fill="#93c5fd" fontFamily="monospace">Monitoring Active</text>
      <text x="416" y="396" fontSize="9" fill="#1d6ef5" fontFamily="monospace">|</text>
      <text x="428" y="396" fontSize="9" fill="#22c55e" fontFamily="monospace">All Secure</text>

      <defs>
        <radialGradient id="wuBg" cx="60%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1d6ef5" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0a0f1e" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
