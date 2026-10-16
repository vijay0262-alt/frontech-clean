'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function PhoneCallConversion() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target?.closest('a[href^="tel:"]')) return
      window.gtag?.('event', 'conversion', {
        send_to: 'AW-18513655727/yw6QCNWvlJ8dEK_v__tE',
      })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
