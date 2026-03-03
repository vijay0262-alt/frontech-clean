import type { Metadata } from 'next'
import BookClient from '@/components/BookClient'

const BASE = 'https://frontechsecurity.com'
const PAGE_URL = `${BASE}/book`

export const metadata: Metadata = {
  title: 'Book Security Camera or Doorbell Installation — Same-Day Available | FrontechSecurity',
  description: 'Schedule your security camera or smart doorbell installation online in under 2 minutes. Same-day appointments available across USA & Canada from $49.99. Call +1 (888) 400-3290.',
  keywords: [
    'book security camera installation',
    'schedule security camera installation',
    'security camera installation appointment',
    'book doorbell installation',
    'same day security camera installation',
    'security camera installation online booking',
    'book home security installation',
    'security camera installer appointment USA',
    'book smart doorbell setup',
    'security camera installation same day USA',
  ].join(', '),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Book Your Security Camera or Doorbell Installation | FrontechSecurity',
    description: 'Schedule installation in under 2 minutes. Same-day slots available. Certified technicians across USA & Canada from $49.99.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'FrontechSecurity',
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: 'Book Security Camera Installation — FrontechSecurity' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Security Camera Installation | FrontechSecurity',
    description: 'Schedule same-day installation. USA & Canada. From $49.99.',
    images: [`${BASE}/og-image.png`],
  },
}

const bookSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Book Installation', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#page`,
      name: 'Book Security Camera Installation',
      description: 'Online booking page for security camera and smart doorbell installation services.',
      url: PAGE_URL,
      potentialAction: {
        '@type': 'ReserveAction',
        target: { '@type': 'EntryPoint', urlTemplate: PAGE_URL },
        result: { '@type': 'Reservation', name: 'Security Camera Installation Appointment' },
      },
    },
  ],
}

export default function BookPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />
      <BookClient />
    </>
  )
}
