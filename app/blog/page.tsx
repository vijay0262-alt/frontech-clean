import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Clock3 } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

const BASE = 'https://frontechsecurity.com'

export const metadata: Metadata = {
  title: 'Security Camera & Smart Home Guides | FrontechSecurity Blog',
  description:
    'Practical guides on security camera selection, placement, Wi-Fi optimization and doorbell installation — written by the installers at FrontechSecurity.',
  keywords: [
    'security camera guide',
    'camera placement tips',
    'doorbell installation guide',
    'security camera wifi',
    'home security blog',
    'wired vs wireless cameras',
  ],
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    title: 'Security Camera & Smart Home Guides | FrontechSecurity Blog',
    description:
      'Practical guides on security camera selection, placement, Wi-Fi optimization and doorbell installation — written by the installers at FrontechSecurity.',
    url: `${BASE}/blog`,
    siteName: 'FrontechSecurity',
    type: 'website',
  },
}

export default function BlogIndexPage() {
  return (
    <div className="bg-white text-[#1a1a1a]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001f3f] via-[#003d7a] to-[#0066cc] py-16 sm:py-20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#9cc8ff]">Guides & Insights</p>
          <h1 className="font-serif text-4xl font-black text-white sm:text-5xl">The FrontechSecurity Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#d9e9ff]">
            Field notes and practical guides from installers who set up cameras, doorbells and networks every day.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#e3eaf5] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0066cc]/10"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#f0f4ff]">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-[#0066cc]/10 px-3 py-1 font-bold text-[#0066cc]">{post.category}</span>
                  <span className="flex items-center gap-1 text-[#6b7280]">
                    <Clock3 size={12} /> {post.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-xl font-bold leading-snug text-[#1a1a1a] transition-colors group-hover:text-[#0066cc]">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4a4a4a]">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-[#6b7280]">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={13} />
                    {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-[#0066cc] transition-transform group-hover:translate-x-1">
                    Read <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
