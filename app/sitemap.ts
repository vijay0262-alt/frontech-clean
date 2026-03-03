import type { MetadataRoute } from 'next'

const BASE_URL = 'https://frontechsecurity.com'

// Dates reflect real content last-updated timestamps for accurate crawl prioritization
const DATES = {
  core:    new Date('2026-03-03'),
  service: new Date('2026-03-03'),
  legal:   new Date('2025-12-01'),
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages — highest crawl priority
    { url: `${BASE_URL}/`,       lastModified: DATES.core,    changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/book`,   lastModified: DATES.core,    changeFrequency: 'weekly',  priority: 0.98 },
    { url: `${BASE_URL}/pricing`,lastModified: DATES.core,    changeFrequency: 'monthly', priority: 0.92 },
    { url: `${BASE_URL}/contact`,lastModified: DATES.core,    changeFrequency: 'monthly', priority: 0.88 },

    // Service hub + individual service pages — primary money pages
    { url: `${BASE_URL}/services`,                                          lastModified: DATES.service, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE_URL}/services/security-camera-installation`,             lastModified: DATES.service, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE_URL}/services/doorbell-installation`,                    lastModified: DATES.service, changeFrequency: 'monthly', priority: 0.93 },
    { url: `${BASE_URL}/services/wifi-network-setup`,                       lastModified: DATES.service, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${BASE_URL}/services/quick-service-support`,                    lastModified: DATES.service, changeFrequency: 'monthly', priority: 0.88 },

    // Informational pages
    { url: `${BASE_URL}/about`,  lastModified: DATES.service, changeFrequency: 'monthly', priority: 0.72 },
    { url: `${BASE_URL}/faq`,    lastModified: DATES.service, changeFrequency: 'monthly', priority: 0.75 },

    // Legal — low crawl priority, yearly
    { url: `${BASE_URL}/privacy-policy`,  lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`,lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/refund-policy`,   lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`,      lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`,   lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
