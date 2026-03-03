import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FrontechSecurity — Security Camera & Doorbell Installation',
    short_name: 'FrontechSecurity',
    description:
      'Professional security camera and smart doorbell installation, setup & support across USA & Canada. Same-day service from $49.99.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f1e',
    theme_color: '#1d6ef5',
    orientation: 'portrait',
    scope: '/',
    lang: 'en-US',
    categories: ['utilities', 'business', 'home'],
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/og-image.png',
        sizes: '1200x630',
        type: 'image/png',
        label: 'FrontechSecurity Homepage — Security Camera Installation',
      },
    ],
  }
}
