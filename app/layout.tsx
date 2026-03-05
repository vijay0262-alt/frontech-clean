import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
  weight: ['700', '800', '900'],
})

const BASE_URL = 'https://frontechsecurity.com'

export const viewport: Viewport = {
  themeColor: '#0a0f1e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Security Camera & Smart Doorbell Installation Service | FrontechSecurity',
    template: '%s | FrontechSecurity',
  },
  description:
    'FrontechSecurity — certified security camera and smart doorbell installation, setup & support across USA & Canada. Same-day service from $49.99. Call +1 (888) 400-3290 now.',
  keywords: [
    'security camera installation',
    'security camera installation near me',
    'smart doorbell installation',
    'video doorbell setup service',
    'home security camera setup',
    'Ring doorbell installation service',
    'Nest camera installation',
    'Arlo installation service',
    'Eufy doorbell setup',
    'outdoor security camera installation',
    'indoor security camera setup',
    '4K security camera installation',
    'CCTV installation service',
    'wireless security camera installation',
    'wired security camera installation',
    'home security system installation',
    'security camera installer near me',
    'smart home security installation',
    'same day security camera install',
    'security camera installation USA',
    'security camera installation Canada',
    'Rancho Cucamonga security camera installation',
    'California security camera installation',
  ],
  applicationName: 'FrontechSecurity',
  authors: [{ name: 'FrontechSecurity', url: BASE_URL }],
  creator: 'FrontechSecurity',
  publisher: 'FrontechSecurity',
  formatDetection: { telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Security Camera & Smart Doorbell Installation | FrontechSecurity',
    description:
      'Certified technicians install security cameras and smart doorbells across USA & Canada. Same-day service from $49.99. Call +1 (888) 400-3290.',
    url: BASE_URL,
    siteName: 'FrontechSecurity',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'FrontechSecurity — Professional Security Camera & Smart Doorbell Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Camera & Doorbell Installation | FrontechSecurity',
    description:
      'Certified installation of security cameras and smart doorbells. USA & Canada. From $49.99. Call +1 (888) 400-3290.',
    creator: '@frontechsecurity',
    site: '@frontechsecurity',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-US': BASE_URL,
      'en-CA': `${BASE_URL}/ca`,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN',
    other: {
      'msvalidate.01': 'YOUR_BING_WEBMASTER_TOKEN',
      'yandex-verification': 'YOUR_YANDEX_TOKEN',
    },
  },
  category: 'Home Services',
  classification: 'Security Camera Installation Service',
  referrer: 'origin-when-cross-origin',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#business`,
      name: 'FrontechSecurity',
      legalName: 'FrontechSecurity',
      url: BASE_URL,
      telephone: '+18884003290',
      email: 'support@frontechsecurity.com',
      slogan: 'Expert Security Camera & Doorbell Installation — USA & Canada',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7430 Pasito Ave',
        addressLocality: 'Rancho Cucamonga',
        addressRegion: 'CA',
        postalCode: '91730',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 34.1064,
        longitude: -117.5931,
      },
      description:
        'FrontechSecurity provides professional security camera installation, smart doorbell installation, Wi-Fi network setup, and ongoing tech support for homes and businesses across the USA and Canada. Certified technicians, same-day service, all major brands.',
      priceRange: '$$',
      currenciesAccepted: 'USD, CAD',
      paymentAccepted: 'Cash, Credit Card, Debit Card, Digital Payment',
      openingHours: 'Mo-Su 07:00-22:00',
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '22:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '08:00', closes: '20:00' },
      ],
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
      ],
      serviceType: [
        'Security Camera Installation',
        'Smart Doorbell Installation',
        'Wi-Fi & Network Setup',
        'Tech Support & Service Plans',
      ],
      knowsAbout: [
        'Ring Security Cameras',
        'Google Nest Cameras',
        'Arlo Security Cameras',
        'Wyze Cameras',
        'Eufy Security',
        'Hikvision',
        'Dahua',
        'Reolink',
        'Smart Home Security',
        'CCTV Installation',
        'NVR DVR Setup',
        'Wi-Fi Network Configuration',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Security Installation Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Camera Installation', url: `${BASE_URL}/services/security-camera-installation` }, price: '49.99', priceCurrency: 'USD' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Doorbell Installation', url: `${BASE_URL}/services/doorbell-installation` }, price: '49.99', priceCurrency: 'USD' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wi-Fi & Network Setup', url: `${BASE_URL}/services/wifi-network-setup` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Camera Support Plans', url: `${BASE_URL}/services/quick-service-support` }, price: '9.99', priceCurrency: 'USD' },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '2400',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5' }, author: { '@type': 'Person', name: 'Michael R.' }, reviewBody: 'Technician arrived on time, installed 4 cameras, and set up the app on all our phones. Professional and fast.' },
        { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5' }, author: { '@type': 'Person', name: 'Sarah T.' }, reviewBody: 'Ring doorbell installed perfectly. They even fixed my weak Wi-Fi signal so it stays connected. Highly recommend.' },
      ],
      sameAs: [
        'https://www.facebook.com/frontechsecurity',
        'https://www.instagram.com/frontechsecurity',
        'https://www.yelp.com/biz/frontechsecurity',
        'https://www.google.com/maps/place/frontechsecurity',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/services/security-camera-installation#service`,
      name: 'Security Camera Installation',
      description: 'Professional installation of indoor and outdoor security cameras with HD/4K resolution, night vision, and full app setup.',
      url: `${BASE_URL}/services/security-camera-installation`,
      provider: { '@id': `${BASE_URL}/#business` },
      areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '49.99', priceSpecification: { '@type': 'PriceSpecification', minPrice: '49.99', description: 'Installation service only — hardware not included' } },
    },
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/services/doorbell-installation#service`,
      name: 'Smart Doorbell Installation',
      description: 'Expert video doorbell installation, wiring, Wi-Fi pairing, and full app configuration for all major brands.',
      url: `${BASE_URL}/services/doorbell-installation`,
      provider: { '@id': `${BASE_URL}/#business` },
      areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '49.99' },
    },
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/services/wifi-network-setup#service`,
      name: 'Wi-Fi & Network Setup',
      description: 'Router configuration, mesh network setup, Wi-Fi extender installation, and remote access for smart home devices.',
      url: `${BASE_URL}/services/wifi-network-setup`,
      provider: { '@id': `${BASE_URL}/#business` },
      areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
    },
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/services/quick-service-support#service`,
      name: 'Quick Service & Support',
      description: 'Ongoing monthly phone and remote technical support for smart home security systems.',
      url: `${BASE_URL}/services/quick-service-support`,
      provider: { '@id': `${BASE_URL}/#business` },
      areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '9.99', billingPeriod: 'Month' },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'FrontechSecurity',
      description: 'Security camera and smart doorbell installation services',
      publisher: { '@id': `${BASE_URL}/#business` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/search?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} font-sans`}>
      <head>
       <Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-17888951335"
  strategy="afterInteractive"
/>

<Script id="google-ads" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17888951335');
  `}
</Script>
          
        {/* Font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Geographic SEO — Rancho Cucamonga, CA, USA */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Rancho Cucamonga, California" />
        <meta name="geo.position" content="34.1064;-117.5931" />
        <meta name="ICBM" content="34.1064, -117.5931" />

        {/* Business & contact signals */}
        <meta name="contact" content="support@frontechsecurity.com" />
        <meta name="reply-to" content="support@frontechsecurity.com" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="FrontechSecurity" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0a0f1e] text-[#f0f4ff]">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
