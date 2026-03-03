import type { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'

const BASE = 'https://frontechsecurity.com'
const PAGE_URL = `${BASE}/contact`

export const metadata: Metadata = {
  title: 'Contact Us — Security Camera & Doorbell Installation | Rancho Cucamonga, CA',
  description: 'Contact FrontechSecurity — call +1 (888) 400-3290, email support@frontechsecurity.com, or send a message online. Located at 7430 Pasito Ave, Rancho Cucamonga, CA 91730. Available 7 days a week.',
  keywords: [
    'contact FrontechSecurity',
    'security camera installation contact',
    'smart doorbell installer contact',
    'security camera installation Rancho Cucamonga',
    'security camera installation near me contact',
    'home security installer phone number',
    'security camera installation quote',
    'security camera installer California',
    'FrontechSecurity phone number',
    'FrontechSecurity email',
  ].join(', '),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Contact FrontechSecurity — Rancho Cucamonga, CA | +1 (888) 400-3290',
    description: 'Reach our team by phone, email, or contact form. Available 7 days a week 7AM–10PM. Located at 7430 Pasito Ave, Rancho Cucamonga, CA 91730.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'FrontechSecurity',
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: 'Contact FrontechSecurity' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact FrontechSecurity | +1 (888) 400-3290',
    description: 'Call or message FrontechSecurity for a free security camera or doorbell installation quote. Available 7 days a week.',
    images: [`${BASE}/og-image.png`],
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${PAGE_URL}#page`,
  name: 'Contact FrontechSecurity',
  description: 'Contact page for FrontechSecurity — security camera and smart doorbell installation services.',
  url: PAGE_URL,
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'FrontechSecurity',
    url: BASE,
    telephone: '+18884003290',
    email: 'support@frontechsecurity.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7430 Pasito Ave',
      addressLocality: 'Rancho Cucamonga',
      addressRegion: 'CA',
      postalCode: '91730',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 34.1064, longitude: -117.5931 },
    openingHours: 'Mo-Su 07:00-22:00',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+18884003290',
      contactType: 'Customer Service',
      areaServed: ['US', 'CA'],
      availableLanguage: 'English',
      hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '07:00', closes: '22:00' },
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContactClient />
    </>
  )
}
