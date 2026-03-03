export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="900" height="600" fill="#050d1a" />
      {/* Night sky gradient */}
      <rect width="900" height="600" fill="url(#heroBg)" />
      {/* Stars */}
      {[[80,40],[150,80],[300,30],[450,55],[600,20],[720,70],[820,35],[50,120],[900,100],[370,15]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity={0.4+Math.sin(i)*0.3}>
          <animate attributeName="opacity" values={`${0.3+i*0.05};${0.8};${0.3+i*0.05}`} dur={`${2+i*0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Ground */}
      <rect x="0" y="480" width="900" height="120" fill="#060d1c" />
      <rect x="0" y="478" width="900" height="4" fill="#0f2040" />

      {/* House - left */}
      <path d="M80 480 L80 330 L210 240 L340 330 L340 480 Z" fill="#0a1628" stroke="#1e3a5f" strokeWidth="1.5" />
      <path d="M80 330 L210 240 L340 330" stroke="#1d6ef5" strokeWidth="2" fill="none" />
      <rect x="155" y="390" width="60" height="90" rx="3" fill="#0f1e3d" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="100" y="355" width="55" height="45" rx="3" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="265" y="355" width="55" height="45" rx="3" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      {/* Window glow */}
      <rect x="101" y="356" width="53" height="43" rx="2" fill="#1d6ef5" opacity="0.08" />
      <rect x="266" y="356" width="53" height="43" rx="2" fill="#1d6ef5" opacity="0.08" />

      {/* Security camera on house left */}
      <g transform="translate(316, 295)">
        <rect x="0" y="0" width="6" height="22" rx="2" fill="#1d6ef5" />
        <rect x="0" y="14" width="28" height="5" rx="2" fill="#1d6ef5" />
        <rect x="20" y="6" width="44" height="24" rx="7" fill="#1e2d4a" stroke="#1d6ef5" strokeWidth="1.5" />
        <circle cx="32" cy="18" r="7" fill="#0a0f1e" stroke="#00c2ff" strokeWidth="1.2" />
        <circle cx="32" cy="18" r="3.5" fill="#060c1a" />
        <circle cx="32" cy="18" r="1.8" fill="#00c2ff" opacity="0.9" />
        <circle cx="54" cy="12" r="2" fill="#ef4444" opacity="0.9"><animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" /></circle>
        <circle cx="58" cy="22" r="2.5" fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" /></circle>
      </g>
      {/* Camera detection arc */}
      <path d="M340 310 Q310 380 290 460" stroke="#1d6ef5" strokeWidth="0.8" fill="none" strokeDasharray="5 4" opacity="0.35" />
      <path d="M340 310 Q360 375 355 460" stroke="#1d6ef5" strokeWidth="0.8" fill="none" strokeDasharray="5 4" opacity="0.35" />

      {/* House - right larger */}
      <path d="M560 480 L560 290 L730 180 L900 290 L900 480 Z" fill="#0a1628" stroke="#1e3a5f" strokeWidth="1.5" />
      <path d="M560 290 L730 180 L900 290" stroke="#1d6ef5" strokeWidth="2" fill="none" />
      <rect x="670" y="370" width="70" height="110" rx="4" fill="#0f1e3d" stroke="#1e3a5f" strokeWidth="1" />
      <circle cx="697" cy="415" r="5" fill="#1d6ef5" opacity="0.6" />
      <rect x="590" y="330" width="65" height="55" rx="3" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="755" y="330" width="65" height="55" rx="3" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="591" y="331" width="63" height="53" rx="2" fill="#0ea5e9" opacity="0.06" />
      <rect x="756" y="331" width="63" height="53" rx="2" fill="#0ea5e9" opacity="0.06" />
      <line x1="622" y1="330" x2="622" y2="385" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="590" y1="357" x2="655" y2="357" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="787" y1="330" x2="787" y2="385" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="755" y1="357" x2="820" y2="357" stroke="#1e3a5f" strokeWidth="1" />

      {/* Smart Doorbell on right house */}
      <g transform="translate(664, 330)">
        <rect x="0" y="0" width="36" height="64" rx="8" fill="#1e2d4a" stroke="#0ea5e9" strokeWidth="1.5" />
        <rect x="5" y="5" width="26" height="18" rx="4" fill="#0a0f1e" stroke="#0ea5e9" strokeWidth="1" />
        <circle cx="18" cy="14" r="6" fill="#060c1a" stroke="#0ea5e9" strokeWidth="0.8" />
        <circle cx="18" cy="14" r="2.5" fill="#00c2ff" opacity="0.9" />
        <circle cx="18" cy="46" r="9" fill="#1d6ef5" opacity="0.2" stroke="#1d6ef5" strokeWidth="1.2" />
        <circle cx="18" cy="46" r="5" fill="#1d6ef5"><animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" /></circle>
        <circle cx="30" cy="6" r="2.5" fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" /></circle>
      </g>
      {/* Doorbell ring animation */}
      <circle cx="682" cy="376" r="22" stroke="#1d6ef5" strokeWidth="1" fill="none" opacity="0">
        <animate attributeName="r" values="16;28;16" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Security camera on right house */}
      <g transform="translate(856, 255)">
        <rect x="0" y="0" width="5" height="18" rx="2" fill="#1d6ef5" />
        <rect x="0" y="12" width="22" height="4" rx="2" fill="#1d6ef5" />
        <rect x="16" y="4" width="36" height="20" rx="6" fill="#1e2d4a" stroke="#1d6ef5" strokeWidth="1.2" />
        <circle cx="26" cy="14" r="6" fill="#0a0f1e" stroke="#00c2ff" strokeWidth="1" />
        <circle cx="26" cy="14" r="2.8" fill="#00c2ff" opacity="0.9" />
        <circle cx="44" cy="9" r="1.8" fill="#ef4444" opacity="0.9"><animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" /></circle>
      </g>

      {/* Center floating dashboard card */}
      <g transform="translate(370, 210)">
        <rect x="0" y="0" width="190" height="150" rx="14" fill="#111827" stroke="#1d6ef5" strokeWidth="1.5" />
        <rect x="0" y="0" width="190" height="36" rx="14" fill="#1e2d4a" />
        <rect x="0" y="22" width="190" height="14" fill="#1e2d4a" />
        <text x="95" y="22" fontSize="9" fill="#93c5fd" textAnchor="middle" fontFamily="monospace" fontWeight="bold">LIVE SECURITY MONITOR</text>
        {/* 4 mini feeds */}
        <rect x="10" y="42" width="80" height="45" rx="4" fill="#0a0f1e" />
        <text x="50" y="62" fontSize="7" fill="#1d6ef5" textAnchor="middle" fontFamily="monospace">CAM1•LIVE</text>
        <circle cx="18" cy="58" r="3" fill="#ef4444"><animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" /></circle>
        <rect x="100" y="42" width="80" height="45" rx="4" fill="#0a0f1e" />
        <text x="140" y="62" fontSize="7" fill="#0ea5e9" textAnchor="middle" fontFamily="monospace">CAM2•LIVE</text>
        <circle cx="108" cy="58" r="3" fill="#ef4444"><animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" /></circle>
        <rect x="10" y="95" width="80" height="44" rx="4" fill="#0a0f1e" />
        <text x="50" y="120" fontSize="6.5" fill="#22c55e" textAnchor="middle" fontFamily="monospace">✓ Clear</text>
        <rect x="100" y="95" width="80" height="44" rx="4" fill="#0a0f1e" stroke="#f59e0b" strokeWidth="1" />
        <text x="140" y="120" fontSize="6.5" fill="#f59e0b" textAnchor="middle" fontFamily="monospace">⚠ Motion</text>
      </g>

      {/* Connection lines from dashboard to houses */}
      <path d="M370 285 Q300 320 340 370" stroke="#1d6ef5" strokeDasharray="5 4" strokeWidth="1" opacity="0.35" />
      <path d="M560 285 Q520 310 560 340" stroke="#0ea5e9" strokeDasharray="5 4" strokeWidth="1" opacity="0.35" />

      {/* Shield badge center-bottom */}
      <g transform="translate(414, 430)">
        <path d="M36 4 L68 16 L68 36 Q68 58 36 68 Q4 58 4 36 L4 16 Z" fill="#1d6ef5" opacity="0.12" stroke="#1d6ef5" strokeWidth="1.5" />
        <path d="M22 36 L32 46 L50 28" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="36" y="82" fontSize="8" fill="#93c5fd" textAnchor="middle" fontFamily="monospace">PROTECTED</text>
      </g>

      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020812" />
          <stop offset="60%" stopColor="#050d1a" />
          <stop offset="100%" stopColor="#060d1c" />
        </linearGradient>
      </defs>
    </svg>
  )
}
