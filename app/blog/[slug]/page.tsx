import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, List, Phone } from 'lucide-react'
import { blogPosts, getPostBySlug } from '@/lib/blog-data'
import ReadingProgress from '@/components/blog/ReadingProgress'
import Reveal from '@/components/Reveal'

const BASE = 'https://frontechsecurity.com'
const PHONE = '+1 (844) 966-7866'
const PHONE_HREF = 'tel:+18449667866'

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

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

  const toc = post.sections.map((s, i) => ({
    id: `s-${i}-${slugify(s.heading).slice(0, 40)}`,
    label: s.heading,
  }))

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
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001f3f] via-[#003d7a] to-[#0066cc] pb-14 pt-12">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9cc8ff] transition-colors hover:text-white fade-up">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-[#c5defe] fade-up-1">
            <span className="rounded-full bg-white/15 px-3 py-1 font-bold text-white">{post.category}</span>
            <span className="flex items-center gap-1.5"><CalendarDays size={13} /> {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock3 size={13} /> {post.readTime}</span>
          </div>
          <h1 className="font-serif max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl text-balance fade-up-2">{post.title}</h1>
        </div>
      </section>

      {/* Hero image */}
      <div className="mx-auto -mt-6 max-w-6xl px-4 sm:px-6">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-[#e3eaf5] shadow-xl fade-up-3">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body grid: article + sticky TOC */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">

          {/* Article */}
          <article className="lg:col-span-8">
            {post.sections.map((section, i) => (
              <Reveal key={i}>
                <section id={toc[i].id} className="mb-11 scroll-mt-24">
                  <h2 className="font-serif text-2xl sm:text-[1.75rem] font-bold leading-snug text-[#1a1a1a] mb-4">
                    <span className="mr-3 inline-block h-5 w-1.5 rounded-full bg-[#0066cc] align-middle" />
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className={`mb-5 text-[1.05rem] leading-[1.8] text-[#374151]${i === 0 && j === 0 ? ' drop-cap' : ''}`}>{p}</p>
                  ))}
                  {section.list && (
                    <ul className="mb-5 space-y-2.5 rounded-2xl border border-[#dbe7fb] bg-[#f0f4ff] p-6">
                      {section.list.map((item, k) => (
                        <li key={k} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#374151]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066cc]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#003d7a] to-[#0066cc] p-8 text-center sm:p-10">
              <h3 className="font-serif text-2xl font-black text-white sm:text-3xl">Want It Done Right the First Time?</h3>
              <p className="mx-auto mt-3 max-w-md text-[15px] text-[#d9e9ff]">
                Certified installers, same-day appointments, all major brands. Service across USA &amp; Canada from $49.99.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link href="/book" className="hover-lift rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0066cc]">
                  Book an Installation
                </Link>
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10">
                  <Phone size={15} /> {PHONE}
                </a>
              </div>
            </div>
          </article>

          {/* Sticky sidebar */}
          <aside className="mt-10 lg:col-span-4 lg:mt-0">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-[#e3eaf5] bg-[#f8fafd] p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#0066cc]">
                  <List size={14} /> On This Page
                </h3>
                <nav>
                  <ul className="space-y-2.5 border-l-2 border-[#dbe7fb]">
                    {toc.map((t) => (
                      <li key={t.id}>
                        <a href={`#${t.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-sm leading-snug text-[#4a4a4a] transition-colors hover:border-[#0066cc] hover:text-[#0066cc]">
                          {t.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#003d7a] to-[#0066cc] p-6 text-white">
                <h3 className="font-serif text-lg font-black">Book a Pro Install</h3>
                <p className="mt-2 text-sm text-[#d9e9ff]">Same-day appointments. All major brands. From $49.99.</p>
                <a href={PHONE_HREF} className="mt-4 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0066cc] transition-transform hover:-translate-y-0.5">
                  <Phone size={14} /> {PHONE}
                </a>
              </div>

              {related.length > 0 && (
                <div className="rounded-2xl border border-[#e3eaf5] bg-white p-6">
                  <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#0066cc]">Keep Reading</h3>
                  <ul className="space-y-4">
                    {related.map((rel) => (
                      <li key={rel.slug}>
                        <Link href={`/blog/${rel.slug}`} className="group block">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#9ca3af]">{rel.category}</span>
                          <span className="font-serif mt-0.5 flex items-start justify-between gap-2 font-bold leading-snug text-[#1a1a1a] transition-colors group-hover:text-[#0066cc]">
                            {rel.title}
                            <ArrowRight size={14} className="mt-1 shrink-0 text-[#0066cc] opacity-0 transition-opacity group-hover:opacity-100" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Related posts — bottom band */}
      {related.length > 0 && (
        <section className="border-t border-[#e3eaf5] bg-[#f8fafd]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="font-serif mb-7 text-2xl font-black text-[#1a1a1a] sm:text-3xl">More From the Blog</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group hover-lift rounded-2xl border border-[#e3eaf5] bg-white p-6 shadow-sm">
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
