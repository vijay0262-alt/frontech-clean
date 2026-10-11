/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/quick-service-support',
        destination: '/services/quick-service-plan',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
