export default function NetworkIllustration() {
  return (
    <svg viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="520" height="360" rx="16" fill="#0f1e3d" />
      <rect width="520" height="360" rx="16" fill="url(#netBg)" opacity="0.5" />

      {/* Central router */}
      <g transform="translate(196, 140)">
        <rect x="0" y="0" width="128" height="52" rx="10" fill="#1e2d4a" stroke="#1d6ef5" strokeWidth="2" />
        {/* Indicator LEDs */}
        <circle cx="18" cy="26" r="5" fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" /></circle>
        <circle cx="34" cy="26" r="5" fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" /></circle>
        <circle cx="50" cy="26" r="5" fill="#f59e0b"><animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" /></circle>
        <circle cx="66" cy="26" r="5" fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite" /></circle>
        <text x="96" y="30" fontSize="9" fill="#93c5fd" fontFamily="monospace" textAnchor="middle">ROUTER</text>
        {/* Antennas */}
        <rect x="100" y="-20" width="4" height="22" rx="2" fill="#1d6ef5" />
        <rect x="112" y="-14" width="4" height="16" rx="2" fill="#1d6ef5" />
        <circle cx="102" cy="-22" r="3" fill="#00c2ff" />
        <circle cx="114" cy="-16" r="3" fill="#00c2ff" />
      </g>

      {/* WiFi signal rings from router */}
      {[30, 55, 80].map((r, i) => (
        <ellipse key={r} cx="260" cy="150" rx={r * 1.5} ry={r * 0.7} stroke="#1d6ef5" strokeWidth="1.2" fill="none" opacity={0.6 - i * 0.18}>
          <animate attributeName="opacity" values={`${0.6 - i * 0.18};${0.1};${0.6 - i * 0.18}`} dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
        </ellipse>
      ))}

      {/* Connected devices — cameras */}
      {/* Camera 1 - top left */}
      <g transform="translate(60, 60)">
        <rect x="0" y="0" width="72" height="38" rx="8" fill="#1e2d4a" stroke="#00c2ff" strokeWidth="1.5" />
        <circle cx="20" cy="19" r="8" fill="#0a0f1e" stroke="#00c2ff" strokeWidth="1" />
        <circle cx="20" cy="19" r="4" fill="#00c2ff" opacity="0.8" />
        <circle cx="18" cy="17" r="1.5" fill="white" opacity="0.6" />
        <text x="52" y="15" fontSize="7" fill="#93c5fd" fontFamily="monospace" textAnchor="middle">CAM 1</text>
        <circle cx="60" cy="27" r="4" fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" /></circle>
      </g>
      <path d="M132 79 L196 160" stroke="#1d6ef5" strokeDasharray="5 4" strokeWidth="1.2" opacity="0.5" />

      {/* Camera 2 - top right */}
      <g transform="translate(388, 60)">
        <rect x="0" y="0" width="72" height="38" rx="8" fill="#1e2d4a" stroke="#00c2ff" strokeWidth="1.5" />
        <circle cx="20" cy="19" r="8" fill="#0a0f1e" stroke="#00c2ff" strokeWidth="1" />
        <circle cx="20" cy="19" r="4" fill="#00c2ff" opacity="0.8" />
        <circle cx="18" cy="17" r="1.5" fill="white" opacity="0.6" />
        <text x="52" y="15" fontSize="7" fill="#93c5fd" fontFamily="monospace" textAnchor="middle">CAM 2</text>
        <circle cx="60" cy="27" r="4" fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="2.1s" repeatCount="indefinite" /></circle>
      </g>
      <path d="M388 79 L324 160" stroke="#1d6ef5" strokeDasharray="5 4" strokeWidth="1.2" opacity="0.5" />

      {/* Doorbell - left */}
      <g transform="translate(44, 200)">
        <rect x="0" y="0" width="52" height="80" rx="10" fill="#1e2d4a" stroke="#0ea5e9" strokeWidth="1.5" />
        <rect x="8" y="8" width="36" height="24" rx="5" fill="#0a0f1e" stroke="#0ea5e9" strokeWidth="1" />
        <circle cx="26" cy="20" r="7" fill="#060c1a" stroke="#0ea5e9" strokeWidth="1" />
        <circle cx="26" cy="20" r="3" fill="#00c2ff" opacity="0.8" />
        <circle cx="26" cy="60" r="10" fill="#1d6ef5" opacity="0.25" stroke="#1d6ef5" strokeWidth="1.5" />
        <circle cx="26" cy="60" r="6" fill="#1d6ef5" opacity="0.8" />
        <text x="26" y="102" fontSize="7.5" fill="#93c5fd" fontFamily="monospace" textAnchor="middle">DOORBELL</text>
      </g>
      <path d="M96 240 L196 192" stroke="#0ea5e9" strokeDasharray="5 4" strokeWidth="1.2" opacity="0.5" />

      {/* Phone - right */}
      <g transform="translate(410, 190)">
        <rect x="0" y="0" width="66" height="112" rx="12" fill="#111827" stroke="#7c3aed" strokeWidth="1.5" />
        <rect x="5" y="12" width="56" height="72" rx="4" fill="#0a0f1e" />
        <text x="33" y="42" fontSize="8" fill="#7c3aed" textAnchor="middle" fontFamily="monospace">SECURITY</text>
        <text x="33" y="54" fontSize="7" fill="#93c5fd" textAnchor="middle" fontFamily="monospace">APP</text>
        <circle cx="20" cy="68" r="6" fill="#22c55e" opacity="0.7" />
        <circle cx="33" cy="68" r="6" fill="#1d6ef5" opacity="0.7" />
        <circle cx="46" cy="68" r="6" fill="#0ea5e9" opacity="0.7" />
        <text x="20" y="71" fontSize="5" fill="white" textAnchor="middle">✓</text>
        <rect x="28" y="6" width="20" height="4" rx="2" fill="#0a0f1e" />
        <circle cx="33" cy="98" r="7" fill="#1e2d4a" stroke="#1e3a5f" strokeWidth="1" />
      </g>
      <path d="M410 250 L324 192" stroke="#7c3aed" strokeDasharray="5 4" strokeWidth="1.2" opacity="0.5" />

      {/* Network speed indicators */}
      <g transform="translate(185, 240)">
        <rect x="0" y="0" width="150" height="60" rx="10" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
        <text x="75" y="18" fontSize="8" fill="#93c5fd" textAnchor="middle" fontFamily="monospace">NETWORK STATUS</text>
        <rect x="12" y="26" width="55" height="8" rx="4" fill="#0a0f1e" />
        <rect x="12" y="26" width="48" height="8" rx="4" fill="#22c55e" opacity="0.8" />
        <text x="75" y="34" fontSize="7" fill="#22c55e" textAnchor="middle" fontFamily="monospace">↑ 95Mbps</text>
        <rect x="12" y="40" width="55" height="8" rx="4" fill="#0a0f1e" />
        <rect x="12" y="40" width="42" height="8" rx="4" fill="#1d6ef5" opacity="0.8" />
        <text x="75" y="48" fontSize="7" fill="#1d6ef5" textAnchor="middle" fontFamily="monospace">↓ 240Mbps</text>
      </g>

      {/* Bottom bar */}
      <rect x="30" y="310" width="460" height="34" rx="8" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      <circle cx="50" cy="327" r="5" fill="#22c55e" />
      <text x="63" y="331" fontSize="9" fill="#93c5fd" fontFamily="monospace">4 Devices Connected</text>
      <text x="245" y="331" fontSize="9" fill="#1d6ef5" fontFamily="monospace">|</text>
      <text x="257" y="331" fontSize="9" fill="#93c5fd" fontFamily="monospace">Zero Packet Loss</text>
      <text x="390" y="331" fontSize="9" fill="#1d6ef5" fontFamily="monospace">|</text>
      <text x="402" y="331" fontSize="9" fill="#22c55e" fontFamily="monospace">Optimal</text>

      <defs>
        <radialGradient id="netBg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1d6ef5" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0a0f1e" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
