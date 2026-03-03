export default function SecurityCameraIllustration() {
  return (
    <svg viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background gradient */}
      <rect width="520" height="360" rx="16" fill="#0f1e3d" />
      <rect width="520" height="360" rx="16" fill="url(#bgGrad)" opacity="0.6" />

      {/* House silhouette */}
      <path d="M80 280 L80 160 L260 60 L440 160 L440 280 Z" fill="#0a1628" stroke="#1e3a5f" strokeWidth="1.5" />
      <path d="M80 160 L260 60 L440 160" stroke="#1d6ef5" strokeWidth="2" fill="none" />
      {/* Door */}
      <rect x="220" y="210" width="80" height="70" rx="4" fill="#111827" stroke="#1e3a5f" strokeWidth="1.5" />
      <circle cx="292" cy="247" r="4" fill="#1d6ef5" />
      {/* Windows */}
      <rect x="110" y="175" width="70" height="55" rx="4" fill="#111827" stroke="#1e3a5f" strokeWidth="1.5" />
      <line x1="145" y1="175" x2="145" y2="230" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="110" y1="202" x2="180" y2="202" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="340" y="175" width="70" height="55" rx="4" fill="#111827" stroke="#1e3a5f" strokeWidth="1.5" />
      <line x1="375" y1="175" x2="375" y2="230" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="340" y1="202" x2="410" y2="202" stroke="#1e3a5f" strokeWidth="1" />

      {/* Security Camera mounted top-right corner */}
      <g transform="translate(390, 105)">
        {/* Mount bracket */}
        <rect x="0" y="0" width="8" height="28" rx="2" fill="#1d6ef5" />
        <rect x="0" y="16" width="30" height="6" rx="2" fill="#1d6ef5" />
        {/* Camera body */}
        <rect x="22" y="8" width="52" height="28" rx="8" fill="#1e2d4a" stroke="#1d6ef5" strokeWidth="1.5" />
        {/* Lens */}
        <circle cx="36" cy="22" r="9" fill="#0a0f1e" stroke="#00c2ff" strokeWidth="1.5" />
        <circle cx="36" cy="22" r="5" fill="#060c1a" />
        <circle cx="36" cy="22" r="2.5" fill="#00c2ff" opacity="0.8" />
        <circle cx="34.5" cy="20.5" r="1" fill="white" opacity="0.6" />
        {/* IR LEDs */}
        <circle cx="54" cy="15" r="2" fill="#ff4d4d" opacity="0.9" />
        <circle cx="62" cy="15" r="2" fill="#ff4d4d" opacity="0.7" />
        <circle cx="54" cy="29" r="2" fill="#ff4d4d" opacity="0.7" />
        <circle cx="62" cy="29" r="2" fill="#ff4d4d" opacity="0.5" />
        {/* Status LED */}
        <circle cx="68" cy="22" r="3" fill="#22c55e">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Detection arc from camera */}
      <path d="M413 127 Q370 180 350 260" stroke="#1d6ef5" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.5" />
      <path d="M413 127 Q430 185 420 260" stroke="#1d6ef5" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.5" />
      <path d="M350 260 Q385 250 420 260" stroke="#1d6ef5" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.5" />
      {/* Detection zone fill */}
      <path d="M413 127 Q370 180 350 260 Q385 250 420 260 Q430 185 413 127" fill="#1d6ef5" opacity="0.04" />

      {/* Motion detection indicator */}
      <g transform="translate(358, 220)">
        <rect x="0" y="0" width="68" height="26" rx="6" fill="#1d6ef5" opacity="0.15" stroke="#1d6ef5" strokeWidth="1" />
        <circle cx="12" cy="13" r="4" fill="#22c55e">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="21" y="17" fontSize="9" fill="#93c5fd" fontFamily="monospace">LIVE • MOTION</text>
      </g>

      {/* Smart Phone showing camera feed */}
      <g transform="translate(30, 150)">
        <rect x="0" y="0" width="80" height="140" rx="12" fill="#111827" stroke="#1d6ef5" strokeWidth="1.5" />
        <rect x="6" y="14" width="68" height="82" rx="4" fill="#0a0f1e" />
        {/* Mini camera view in phone */}
        <rect x="6" y="14" width="68" height="82" rx="4" fill="#060c1a" />
        <text x="40" y="50" fontSize="7" fill="#1d6ef5" textAnchor="middle" fontFamily="monospace">LIVE VIEW</text>
        <text x="40" y="62" fontSize="6" fill="#22c55e" textAnchor="middle" fontFamily="monospace">● REC</text>
        <rect x="12" y="68" width="56" height="22" rx="3" fill="#0f1e3d" />
        <text x="40" y="83" fontSize="6" fill="#93c5fd" textAnchor="middle" fontFamily="monospace">Camera 1 • HD</text>
        {/* Notch */}
        <rect x="28" y="5" width="24" height="6" rx="3" fill="#0a0f1e" />
        {/* Home button */}
        <circle cx="40" cy="125" r="8" fill="#1e2d4a" stroke="#1e3a5f" strokeWidth="1" />
        {/* Notification dot */}
        <circle cx="70" cy="12" r="5" fill="#ef4444">
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="70" y="15" fontSize="6" fill="white" textAnchor="middle">1</text>
      </g>

      {/* WiFi signal lines */}
      <g transform="translate(110, 110)" opacity="0.7">
        <path d="M0 20 Q20 0 40 20" stroke="#00c2ff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M-8 28 Q20 -10 48 28" stroke="#00c2ff" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />
        <circle cx="20" cy="28" r="3" fill="#00c2ff" />
      </g>

      {/* Connection line from phone to camera */}
      <path d="M110 195 Q200 140 390 120" stroke="#1d6ef5" strokeWidth="1" strokeDasharray="5 4" opacity="0.35" />

      {/* Shield badge */}
      <g transform="translate(222, 108)">
        <path d="M19 2 L36 9 L36 20 Q36 32 19 38 Q2 32 2 20 L2 9 Z" fill="#1d6ef5" opacity="0.15" stroke="#1d6ef5" strokeWidth="1.5" />
        <path d="M12 20 L17 25 L26 15" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Bottom status bar */}
      <rect x="30" y="305" width="460" height="34" rx="8" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      <circle cx="50" cy="322" r="6" fill="#22c55e" opacity="0.9" />
      <text x="64" y="326" fontSize="9" fill="#93c5fd" fontFamily="monospace">System Armed</text>
      <text x="200" y="326" fontSize="9" fill="#1d6ef5" fontFamily="monospace">|</text>
      <text x="212" y="326" fontSize="9" fill="#93c5fd" fontFamily="monospace">2 Cameras Online</text>
      <text x="360" y="326" fontSize="9" fill="#1d6ef5" fontFamily="monospace">|</text>
      <text x="372" y="326" fontSize="9" fill="#22c55e" fontFamily="monospace">All Clear</text>

      <defs>
        <radialGradient id="bgGrad" cx="70%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#1d6ef5" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0a0f1e" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
