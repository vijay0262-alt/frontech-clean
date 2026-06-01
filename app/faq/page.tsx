import type { Metadata } from 'next'
import FaqClient from '@/components/FaqClient'

const BASE = 'https://frontechsecurity.com'
const PAGE_URL = `${BASE}/faq`

export const metadata: Metadata = {
  title: 'FAQ - Security Camera Installation, Doorbell Setup, Pricing & Support | FrontechSecurity',
  description: 'Frequently asked questions about security camera installation, smart doorbell setup, pricing plans, service areas, troubleshooting, and technical support. Get answers to all your questions. Call +1 (844) 810-0173.',
  keywords: [
    'security camera installation FAQ',
    'doorbell installation FAQ',
    'security camera pricing questions',
    'how much does security camera installation cost',
    'security camera installation time',
    'do you install cameras I already own',
    'security camera same day service',
    'security camera service areas',
    'Ring camera installation questions',
    'Arlo camera installation FAQ',
    'Nest doorbell setup questions',
    'security camera troubleshooting FAQ',
    'camera offline fix FAQ',
    'security camera not working help',
    'doorbell not connecting FAQ',
    'security camera warranty questions',
    'security camera support plan FAQ',
    'home security installation questions',
    'CCTV installation FAQ',
    'smart home security questions',
    'security camera wifi setup FAQ',
    'security camera remote access FAQ',
    'NVR DVR setup questions',
    'security camera night vision FAQ',
    'motion detection setup FAQ',
    'security camera recording FAQ',
    'security camera app setup FAQ',
    'doorbell chime setup FAQ',
    'security camera installation USA FAQ',
    'security camera installation Canada FAQ',
  ].join(', '),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'FAQ - Security Camera Installation, Doorbell Setup & Support | FrontechSecurity',
    description: 'Get answers to all your questions about security camera installation, smart doorbell setup, pricing, and technical support. USA & Canada.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'FrontechSecurity',
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: 'FAQ - FrontechSecurity' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Security Camera Installation & Doorbell Setup | FrontechSecurity',
    description: 'Find answers to common questions about installation, pricing, and support. USA & Canada.',
    images: [`${BASE}/og-image.png`],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#page`,
      name: 'Security Camera Installation FAQ',
      description: 'Frequently asked questions about security camera installation, smart doorbell setup, pricing plans, and technical support services.',
      url: PAGE_URL,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does security camera installation cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Security camera installation starts at $49.99 for a single device. Additional cameras are $39.99 each. We offer multi-device bundle pricing for 4+ devices starting at $129.99. All pricing is for labor and setup only — hardware is provided by the customer.',
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
            text: 'We serve customers across the United States and Canada, including major metropolitan areas like Los Angeles, New York, Chicago, Houston, Phoenix, Philadelphia, Dallas, Toronto, Vancouver, Calgary, Montreal, and 50+ more cities.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you run cables inside the walls?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, for wired installs we can route cables through walls, attic, or crawl spaces for a clean, concealed look. We discuss the routing plan with you before starting any work.',
          },
        },
        {
          '@type': 'Question',
          name: 'What brands do you support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We work with all major brands including Ring, Google Nest, Arlo, Wyze, Eufy, Reolink, Hikvision, Axis, Dahua, Lorex, Amcrest, and more.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is payment collected online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. We collect no payment online. Payment is due only upon completion of the service, once you are fully satisfied. We accept cash, card, and digital payments.',
          },
        },
      ],
    },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FaqClient />
    </>
  )
}
