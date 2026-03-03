export default function QuickServiceIllustration() {
  return (
    <svg viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="520" height="360" rx="16" fill="#0f1e3d" />
      <rect width="520" height="360" rx="16" fill="url(#qsBg)" opacity="0.5" />

      {/* Central dashboard screen */}
      <rect x="110" y="50" width="300" height="200" rx="12" fill="#111827" stroke="#1d6ef5" strokeWidth="2" />
      {/* Screen header */}
      <rect x="110" y="50" width="300" height="32" rx="12" fill="#1e2d4a" />
      <rect x="110" y="68" width="300" height="14" fill="#1e2d4a" />
      <circle cx="130" cy="66" r="5" fill="#ef4444" opacity="0.8" />
      <circle cx="146" cy="66" r="5" fill="#f59e0b" opacity="0.8" />
      <circle cx="162" cy="66" r="5" fill="#22c55e" opacity="0.8" />
      <text x="260" y="70" fontSize="9" fill="#93c5fd" textAnchor="middle" fontFamily="monospace" fontWeight="bold">SECURITY SYSTEM DASHBOARD</text>

      {/* Camera grid on screen — 4 mini feeds */}
      {/* Cam 1 */}
      <rect x="120" y="92" width="130" height="74" rx="5" fill="#0a0f1e" stroke="#1e3a5f" strokeWidth="1" />
      <text x="130" y="106" fontSize="7" fill="#1d6ef5" fontFamily="monospace">CAM 1 — FRONT DOOR</text>
      <circle cx="134" cy="148" r="3" fill="#ef4444"><animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" /></circle>
      <text x="142" y="151" fontSize="6.5" fill="#94a3b8" fontFamily="monospace">● LIVE</text>
      <path d="M120 130 Q140 118 185 125 Q200 128 250 120" stroke="#1d6ef5" strokeWidth="1" opacity="0.4" />
      {/* Cam 2 */}
      <rect x="270" y="92" width="130" height="74" rx="5" fill="#0a0f1e" stroke="#1e3a5f" strokeWidth="1" />
      <text x="280" y="106" fontSize="7" fill="#0ea5e9" fontFamily="monospace">CAM 2 — BACKYARD</text>
      <circle cx="284" cy="148" r="3" fill="#ef4444"><animate attributeName="opacity" values="1;0.3;1" dur="1.3s" repeatCount="indefinite" /></circle>
      <text x="292" y="151" fontSize="6.5" fill="#94a3b8" fontFamily="monospace">● LIVE</text>
      {/* Cam 3 */}
      <rect x="120" y="176" width="130" height="64" rx="5" fill="#0a0f1e" stroke="#1e3a5f" strokeWidth="1" />
      <text x="130" y="190" fontSize="7" fill="#22c55e" fontFamily="monospace">CAM 3 — GARAGE</text>
      <text x="130" y="228" fontSize="6.5" fill="#22c55e" fontFamily="monospace">✓ No Motion</text>
      {/* Cam 4 - alert! */}
      <rect x="270" y="176" width="130" height="64" rx="5" fill="#0a0f1e" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="280" y="190" fontSize="7" fill="#f59e0b" fontFamily="monospace">CAM 4 — DRIVEWAY</text>
      <text x="280" y="228" fontSize="6.5" fill="#f59e0b" fontFamily="monospace">⚠ Motion Alert</text>
      <circle cx="390" cy="186" r="4" fill="#f59e0b"><animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite" /></circle>

      {/* Monitor stand */}
      <rect x="248" y="250" width="24" height="18" rx="2" fill="#1e2d4a" />
      <rect x="220" y="266" width="80" height="8" rx="4" fill="#1e2d4a" />

      {/* Left phone showing notification */}
      <g transform="translate(28, 100)">
        <rect x="0" y="0" width="68" height="120" rx="12" fill="#111827" stroke="#22c55e" strokeWidth="1.5" />
        <rect x="5" y="14" width="58" height="80" rx="4" fill="#0a0f1e" />
        <text x="34" y="32" fontSize="7.5" fill="#22c55e" textAnchor="middle" fontFamily="monospace" fontWeight="bold">ALL CLEAR</text>
        <circle cx="34" cy="54" r="16" fill="#22c55e" opacity="0.1" stroke="#22c55e" strokeWidth="1.5" />
        <path d="M24 54 L31 62 L44 46" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="34" y="78" fontSize="6.5" fill="#94a3b8" textAnchor="middle" fontFamily="monospace">System OK</text>
        <text x="34" y="88" fontSize="6" fill="#1d6ef5" textAnchor="middle" fontFamily="monospace">Last check: now</text>
        <rect x="24" y="6" width="20" height="5" rx="2.5" fill="#0a0f1e" />
        <circle cx="34" cy="108" r="7" fill="#1e2d4a" stroke="#1e3a5f" strokeWidth="1" />
      </g>

      {/* Right phone showing alert */}
      <g transform="translate(424, 100)">
        <rect x="0" y="0" width="68" height="120" rx="12" fill="#111827" stroke="#f59e0b" strokeWidth="1.5" />
        <rect x="5" y="14" width="58" height="80" rx="4" fill="#0a0f1e" />
        <text x="34" y="32" fontSize="7" fill="#f59e0b" textAnchor="middle" fontFamily="monospace" fontWeight="bold">ALERT!</text>
        <circle cx="34" cy="54" r="16" fill="#f59e0b" opacity="0.1" stroke="#f59e0b" strokeWidth="1.5">
          <animate attributeName="opacity" values="0.15;0.4;0.15" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="34" y="57" fontSize="18" textAnchor="middle" fill="#f59e0b">!</text>
        <text x="34" y="78" fontSize="6.5" fill="#94a3b8" textAnchor="middle" fontFamily="monospace">Motion: Driveway</text>
        <text x="34" y="88" fontSize="6" fill="#f59e0b" textAnchor="middle" fontFamily="monospace">2 seconds ago</text>
        <rect x="24" y="6" width="20" height="5" rx="2.5" fill="#0a0f1e" />
        <circle cx="34" cy="108" r="7" fill="#1e2d4a" stroke="#1e3a5f" strokeWidth="1" />
      </g>

      {/* Connection lines */}
      <path d="M96 160 L110 160" stroke="#22c55e" strokeDasharray="4 3" strokeWidth="1.2" opacity="0.6" />
      <path d="M410 160 L424 160" stroke="#f59e0b" strokeDasharray="4 3" strokeWidth="1.2" opacity="0.6" />

      {/* Bottom status */}
      <rect x="30" y="295" width="460" height="50" rx="10" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      <text x="40" y="315" fontSize="9" fill="#94a3b8" fontFamily="monospace">STATUS</text>
      <rect x="40" y="322" width="100" height="14" rx="5" fill="#22c55e" opacity="0.15" stroke="#22c55e" strokeWidth="1" />
      <text x="90" y="332" fontSize="8" fill="#22c55e" textAnchor="middle" fontFamily="monospace">3 Cameras OK</text>
      <rect x="155" y="322" width="110" height="14" rx="5" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" strokeWidth="1" />
      <text x="210" y="332" fontSize="8" fill="#f59e0b" textAnchor="middle" fontFamily="monospace">1 Motion Alert</text>
      <rect x="280" y="322" width="110" height="14" rx="5" fill="#1d6ef5" opacity="0.15" stroke="#1d6ef5" strokeWidth="1" />
      <text x="335" y="332" fontSize="8" fill="#93c5fd" textAnchor="middle" fontFamily="monospace">Live Monitoring</text>
      <rect x="405" y="322" width="75" height="14" rx="5" fill="#22c55e" opacity="0.15" stroke="#22c55e" strokeWidth="1" />
      <text x="442" y="332" fontSize="8" fill="#22c55e" textAnchor="middle" fontFamily="monospace">7-Day Backup</text>

      <defs>
        <radialGradient id="qsBg" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0a0f1e" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
