import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import ServicesSection from '@/components/home/ServicesSection'
import HowItWorks from '@/components/home/HowItWorks'
import ServiceInfo from "@/components/home/ServiceInfo"
import WhyUs from '@/components/home/WhyUs'
import PricingSection from '@/components/home/PricingSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import FaqSection from '@/components/home/FaqSection'
import CtaSection from '@/components/home/CtaSection'

const BASE = 'https://frontechsecurity.com'

export const metadata: Metadata = {
  title: 'Security Camera Installation & Smart Doorbell Setup | USA & Canada — FrontechSecurity',
  description: 'Professional security camera installation and smart doorbell setup service. Ring, Arlo, Nest, Blink & all brands. Same-day service from $49.99. Certified technicians across USA & Canada. Call +1 (844) 810-0173.',
  keywords: [
    'security camera installation',
    'security camera installation near me',
    'home security camera installation',
    'Ring camera installation',
    'Arlo camera installation',
    'Blink camera installation',
    'Reolink camera installation',
    'ADT camera installation',
    'smart doorbell installation',
    'Ring doorbell installation',
    'Nest doorbell installation',
    'video doorbell setup',
    'security camera not working',
    'security camera not connecting',
    'security camera repair',
    'camera installation service',
    'wireless camera setup',
    'outdoor camera installation',
    'Ring camera not connecting',
    'Arlo camera offline',
    'Blink camera setup',
    'security camera troubleshooting',
    'same day camera installation',
    'professional camera installer',
    'security camera help',
    'home security system installation',
    'CCTV installation services',
    'smart home security services',
    'security camera wifi setup',
    'security camera tech support',
    'security installation services USA',
    'security installation services Canada',
    'security camera installation Los Angeles',
    'security camera installation New York',
    'security camera installation Chicago',
    'security camera installation Houston',
    'security camera installation Phoenix',
    'security camera installation Philadelphia',
    'security camera installation San Antonio',
    'security camera installation Dallas',
    'security camera installation Toronto',
    'security camera installation Vancouver',
    'security camera installation Calgary',
    'security camera installation Montreal',
    'doorbell installation near me',
    'video doorbell installation near me',
    'smart doorbell setup service',
    'Ring doorbell setup',
    'Nest doorbell setup',
    'Arlo doorbell setup',
    'Eufy doorbell installation',
    'Wyze doorbell installation',
    'doorbell not working',
    'doorbell not connecting to wifi',
    'doorbell offline',
    'doorbell troubleshooting',
    'same day doorbell installation',
    'doorbell installation service',
  ].join(', '),
  alternates: { canonical: BASE },
  openGraph: {
    title: 'Security Camera Installation & Smart Doorbell Setup | USA & Canada — FrontechSecurity',
    description: 'Expert installation for Ring, Arlo, Nest, Blink & all brands. Same-day service from $49.99. Certified technicians across USA & Canada.',
    url: BASE,
    type: 'website',
    siteName: 'FrontechSecurity',
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: 'Security Camera Installation — FrontechSecurity' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Camera Installation & Smart Doorbell Setup | FrontechSecurity',
    description: 'Expert installation for Ring, Arlo, Nest, Blink & all brands. Same-day service from $49.99. USA & Canada.',
    images: [`${BASE}/og-image.png`],
  },
}

const homePageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE}#business`,
      name: 'FrontechSecurity',
      url: BASE,
      telephone: '+18448100173',
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
      priceRange: '$$',
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '2400',
        bestRating: '5',
      },
    },
    {
      '@type': 'Service',
      '@id': `${BASE}#service`,
      name: 'Security Camera Installation Service',
      serviceType: 'Security Camera Installation',
      description: 'Professional indoor and outdoor security camera installation by certified technicians across USA and Canada. Includes mounting, cable routing, night vision setup, motion detection configuration, cloud and local recording setup, and full mobile app configuration.',
      provider: { '@type': 'LocalBusiness', name: 'FrontechSecurity', url: BASE },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        lowPrice: '49.99',
        offerCount: '4',
        description: 'Installation service only — hardware not included. No payment collected until job complete.',
      },
    },
    {
      '@type': 'Service',
      '@id': `${BASE}#doorbell-service`,
      name: 'Smart Doorbell Installation Service',
      serviceType: 'Video Doorbell Installation',
      description: 'Professional smart doorbell installation for Ring, Google Nest, Arlo, Eufy, Wyze, and all major brands. Includes old doorbell removal, wiring, mounting, Wi-Fi pairing, chime setup, app installation on all devices, and full walkthrough.',
      provider: { '@type': 'LocalBusiness', name: 'FrontechSecurity', url: BASE },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        lowPrice: '49.99',
        description: 'Complete installation service including app setup and chime. No payment until complete.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does security camera installation cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Security camera installation starts at $49.99 for a single device. Additional cameras are $39.99 each. We also offer multi-device bundle pricing for 4+ devices starting at $129.99. All pricing is for labor and setup only — hardware is provided by the customer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you install cameras I already own?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We install cameras you have already purchased from any brand — Ring, Arlo, Google Nest, Wyze, Eufy, Reolink, Hikvision, Dahua, and more. We also help troubleshoot and fix cameras that are not working or not connecting.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does camera installation take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard 2-camera install takes approximately 1 hour. A full-home system with 6–8 cameras typically takes 2–3 hours. Doorbell installation takes 45 minutes to 1.5 hours depending on whether wiring is involved.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer same-day service?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Same-day appointments are available in most areas across USA and Canada. Call us at +1 (844) 810-0173 to check availability and schedule your installation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What areas do you serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We serve customers across the United States and Canada, including major metropolitan areas like Los Angeles, New York, Chicago, Houston, Phoenix, Philadelphia, Dallas, Toronto, Vancouver, Calgary, Montreal, and 50+ more cities. Call us to confirm service in your area.',
          },
        },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      <HeroSection />
      <TrustBar />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <ServiceInfo />
      <div className="section-divider" />
      <WhyUs />
      <div className="section-divider" />
      <PricingSection />
      <div className="section-divider" />
      <ReviewsSection />
      <div className="section-divider" />
      <FaqSection />
      <div className="section-divider" />
      <CtaSection />
    </>
  )
}
