import type { Metadata } from 'next'
import FaqClient from '@/components/FaqClient'

export const metadata: Metadata = {
  title: 'FAQ | Security Camera & Doorbell Installation',
  description: 'Answers to common questions about security camera installation, smart doorbell setup, pricing plans, and service options. Call +1 (888) 400-3290.',
  alternates: { canonical: 'https://frontechsecurity.com/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | FrontechSecurity',
    description: 'Got questions about security camera or doorbell installation? Find detailed answers here.',
    url: 'https://frontechsecurity.com/faq',
  },
}

export default function FAQPage() {
  return <FaqClient />
}
