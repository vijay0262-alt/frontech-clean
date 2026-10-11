import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Phone } from 'lucide-react'
import { blogPosts, getPostBySlug } from '@/lib/blog-data'

const BASE = 'https://frontechsecurity.com'
const PHONE = '+1 (844) 966-7866'
const PHONE_HREF = 'tel:+18449667866'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | FrontechSecurity Blog`,
    description: post.description,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE}/blog/${post.slug}`,
      siteName: 'FrontechSecurity',
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image.src, width: 1200, height: 630, alt: post.image.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image.src],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = post.relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image.src,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'FrontechSecurity', url: BASE },
    publisher: { '@type': 'Organization', name: 'FrontechSecurity', url: BASE, logo: { '@type': 'ImageObject', url: `${BASE}/logo.png` } },
    mainEntityOfPage: `${BASE}/blog/${post.slug}`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
    ],
  }

  return (
    <div className="bg-white text-[#1a1a1a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <section className="bg-gradient-to-br from-[#001f3f] via-[#003d7a] to-[#0066cc] pb-10 pt-12">
        <div className="mx-auto max-w-3xl px-4">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9cc8ff] transition-colors hover:text-white">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-[#c5defe]">
            <span className="rounded-full bg-white/15 px-3 py-1 font-bold text-white">{post.category}</span>
            <span className="flex items-center gap-1.5"><CalendarDays size={13} /> {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock3 size={13} /> {post.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl font-black leading-tight text-white sm:text-4xl text-balance">{post.title}</h1>
        </div>
      </section>

      {/* Hero image */}
      <div className="mx-auto -mt-2 max-w-4xl px-4">
        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-[#e3eaf5] shadow-lg">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-center text-xs text-[#9ca3af]">{post.image.alt}</p>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-4 py-10">
        {post.sections.map((section, i) => (
          <section key={i} className="mb-9">
            <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-4">{section.heading}</h2>
            {section.paragraphs.map((p, j) => (
              <p key={j} className="mb-4 leading-relaxed text-[#374151]">{p}</p>
            ))}
            {section.list && (
              <ul className="mb-4 space-y-2 rounded-xl bg-[#f0f4ff] p-5">
                {section.list.map((item, k) => (
                  <li key={k} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066cc]" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#003d7a] to-[#0066cc] p-8 text-center">
          <h3 className="font-serif text-2xl font-black text-white">Want It Done Right the First Time?</h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#d9e9ff]">
            Certified installers, same-day appointments, all major brands. Service across USA &amp; Canada from $49.99.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0066cc] transition-all hover:-translate-y-0.5 hover:shadow-lg">
              Book an Installation
            </Link>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">
              <Phone size={15} /> {PHONE}
            </a>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-[#e3eaf5] bg-[#f8fafd]">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="font-serif text-2xl font-black text-[#1a1a1a] mb-7">Keep Reading</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group rounded-2xl border border-[#e3eaf5] bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0066cc]">{rel.category}</span>
                  <h3 className="font-serif mt-2 font-bold leading-snug text-[#1a1a1a] transition-colors group-hover:text-[#0066cc]">{rel.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0066cc]">Read <ArrowRight size={12} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
