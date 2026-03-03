import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'FrontechSecurity — Professional Security Camera & Smart Doorbell Installation'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1a3a 50%, #0a0f1e 100%)',
          padding: '72px 80px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(29,110,245,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(29,110,245,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Blue glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(29,110,245,0.25) 0%, transparent 70%)',
          }}
        />
        {/* Cyan glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,194,255,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(29,110,245,0.2)',
            border: '1px solid rgba(29,110,245,0.5)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 28,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00c2ff' }} />
          <span style={{ color: '#00c2ff', fontSize: 15, fontWeight: 700, letterSpacing: 2 }}>
            USA &amp; CANADA — SAME-DAY SERVICE
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 62,
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: 20,
            maxWidth: 820,
          }}
        >
          Security Camera &amp;{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #1d6ef5, #00c2ff)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Doorbell Installation
          </span>
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 24,
            color: '#94a3b8',
            marginBottom: 44,
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Certified technicians. All major brands. Starting from $49.99.
        </div>

        {/* Footer row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {/* Brand pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 12,
              padding: '12px 24px',
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #1d6ef5, #00c2ff)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: 20, height: 20, background: '#fff', borderRadius: '50%' }} />
            </div>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: 22 }}>FrontechSecurity</span>
          </div>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#f59e0b', fontSize: 22 }}>★★★★★</span>
            <span style={{ color: '#94a3b8', fontSize: 18 }}>4.9 / 5 · 2,400+ reviews</span>
          </div>

          {/* Phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#00c2ff', fontSize: 18, fontWeight: 700 }}>+1 (888) 400-3290</span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
