import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Lightbulb } from "lucide-react";
import { CallButton } from "@/components/call-button";
import { FadeUp, HeroReveal } from "@/components/motion";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/site";
import { BLOG_POSTS, getPost, type BlogBlock } from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

function renderInline(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return <p>{renderInline(block.text)}</p>;
    case "h3":
      return (
        <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "tip":
      return (
        <div className="my-8 flex gap-4 rounded-2xl border border-champagne-dim/30 bg-champagne/5 p-6">
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-champagne" aria-hidden />
          <div>
            <p className="text-sm font-bold tracking-wide text-champagne">
              실장의 한 마디
            </p>
            <p className="mt-2 text-sm leading-[1.9] text-ivory-dim">
              {renderInline(block.text)}
            </p>
          </div>
        </div>
      );
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const index = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const prev = BLOG_POSTS[index - 1];
  const next = BLOG_POSTS[index + 1];

  const postJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "담당 실장",
      jobTitle: "강남 가라오케 15년 차 담당 실장",
    },
    publisher: { "@id": `${SITE_URL}/#business` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ko-KR",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "강남 가라오케 소개", path: "/" },
              { name: "이용 가이드", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ])
          ),
        }}
      />

      <section className="relative overflow-hidden bg-bordeaux-radial">
        <div className="container py-16 md:py-20">
          <HeroReveal>
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-sm text-ivory-dim transition-colors hover:text-champagne"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              이용 가이드 목록으로
            </Link>
            <p className="mb-5 flex flex-wrap items-center gap-4 text-xs text-champagne">
              <span className="inline-flex rounded-full border border-champagne-dim/40 bg-obsidian-card/60 px-4 py-1.5 font-medium tracking-widest">
                {post.tag}
              </span>
              <span className="inline-flex items-center gap-1.5 text-ivory-faint">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                {post.dateLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 text-ivory-faint">
                <Clock3 className="h-3.5 w-3.5" aria-hidden />
                {post.readMinutes}분 읽기
              </span>
            </p>
            <h1 className="max-w-4xl font-serif text-2xl font-black leading-snug md:text-4xl md:leading-tight">
              <span className="gold-text">{post.headline}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-[1.9] text-ivory-dim md:text-lg">
              {post.intro}
            </p>
          </HeroReveal>
        </div>
      </section>

      <article className="container max-w-4xl pb-10">
        {post.sections.map((section, si) => (
          <div key={si}>
            {si > 0 && <div className="gold-divider my-16" />}
            <section className="prose-room mt-8">
              <FadeUp>
                <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-ivory md:text-3xl">
                  {section.h2}
                </h2>
                {section.blocks.map((block, bi) => (
                  <Block key={bi} block={block} />
                ))}
              </FadeUp>
            </section>
          </div>
        ))}

        <FadeUp className="mt-16">
          <div className="glass-card flex flex-col items-center gap-6 p-10 text-center md:p-14">
            <p className="font-serif text-xl font-bold leading-snug text-ivory md:text-2xl">
              읽어도 애매한 부분은 전화가 빠릅니다 — 그날 기준으로 답해 드립니다
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CallButton label="담당 실장 다이렉트 연결" />
              <CallButton label="투명한 견적 문의" variant="outline" />
            </div>
          </div>
        </FadeUp>

        <nav
          aria-label="다른 가이드 글"
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="glass-card group flex items-center gap-4 p-6"
            >
              <ArrowLeft
                className="h-5 w-5 shrink-0 text-champagne-dim transition-transform group-hover:-translate-x-1 group-hover:text-champagne"
                aria-hidden
              />
              <div>
                <p className="text-xs text-ivory-faint">이전 글</p>
                <p className="mt-1 text-sm font-bold leading-snug text-ivory transition-colors group-hover:text-champagne-bright">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div aria-hidden />
          )}
          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="glass-card group flex items-center justify-end gap-4 p-6 text-right"
            >
              <div>
                <p className="text-xs text-ivory-faint">다음 글</p>
                <p className="mt-1 text-sm font-bold leading-snug text-ivory transition-colors group-hover:text-champagne-bright">
                  {next.title}
                </p>
              </div>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-champagne-dim transition-transform group-hover:translate-x-1 group-hover:text-champagne"
                aria-hidden
              />
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}
