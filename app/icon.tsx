import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1d6ef5, #00c2ff)',
          borderRadius: 7,
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <span
          style={{
            color: '#ffffff',
            fontSize: 22,
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          F
        </span>
      </div>
    ),
    { width: 32, height: 32 },
  )
}
