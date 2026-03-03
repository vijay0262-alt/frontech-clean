import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1a3a 100%)',
          borderRadius: 36,
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Shield shape */}
        <div
          style={{
            width: 110,
            height: 110,
            background: 'linear-gradient(135deg, #1d6ef5, #00c2ff)',
            borderRadius: 22,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* F lettermark */}
          <span
            style={{
              color: '#ffffff',
              fontSize: 68,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            F
          </span>
        </div>
      </div>
    ),
    { width: 180, height: 180 },
  )
}
