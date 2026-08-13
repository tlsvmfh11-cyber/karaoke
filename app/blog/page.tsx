import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookOpenText, CalendarDays, Clock3, ArrowRight } from "lucide-react";
import { CallButton } from "@/components/call-button";
import { FadeUp, HeroReveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "이용 가이드 | 강남 가라오케 실장이 직접 쓰는 밤 문화 안내서",
  description:
    "강남 가라오케 첫 방문 가이드, 주대·TC 용어 정리, 업종 비교, 접대 노하우, 시간대 선택법까지. 15년 차 담당 실장이 광고 없이 실무 그대로 쓰는 이용 가이드 모음.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "강남 가라오케 이용 가이드 — 실장이 직접 쓰는 안내서",
    description:
      "첫 방문 절차, 비용 용어, 업종 비교, 접대 노하우, 시간대 선택까지 실무 그대로 쓴 가이드 모음.",
    url: "/blog",
    images: ["/images/gangnam-karaoke-visit-lounge.webp"],
  },
};

const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  url: `${SITE_URL}/blog`,
  name: "강남 가라오케 이용 가이드",
  description:
    "강남 가라오케 담당 실장이 직접 쓰는 이용 가이드 — 첫 방문, 비용 용어, 업종 비교, 접대 노하우, 시간대 선택.",
  inLanguage: "ko-KR",
  publisher: { "@id": `${SITE_URL}/#business` },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    image: `${SITE_URL}${post.image}`,
  })),
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "강남 가라오케 소개", path: "/" },
              { name: "이용 가이드", path: "/blog" },
            ])
          ),
        }}
      />

      <section className="relative overflow-hidden bg-bordeaux-radial">
        <div className="container py-20 md:py-24">
          <HeroReveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-champagne-dim/40 bg-obsidian-card/60 px-4 py-1.5 text-xs font-medium tracking-widest text-champagne">
              <BookOpenText className="h-3.5 w-3.5" aria-hidden />
              Guide — 실장이 직접 쓰는 안내서
            </p>
            <h1 className="max-w-4xl font-serif text-3xl font-black leading-snug md:text-5xl md:leading-tight">
              강남 가라오케 이용 가이드,{" "}
              <span className="gold-text">
                광고 없이 실무 그대로 적었습니다
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-[1.9] text-ivory-dim md:text-lg">
              검색하면 나오는 글 대부분은 광고입니다. 여기 있는 글은
              다릅니다. 15년 차 담당 실장인 제가 손님들께 전화로 매일
              설명드리는 내용을, 어느 집을 가시든 통하는 기준으로 정리해
              두었습니다. 읽고 오시면 어디서도 손해 보지 않습니다.
            </p>
          </HeroReveal>
        </div>
      </section>

      <section className="container max-w-5xl pb-10 pt-14">
        <FadeUp>
          <Link
            href={`/blog/${featured.slug}`}
            className="glass-card group grid overflow-hidden md:grid-cols-[1.2fr_1fr]"
          >
            <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto md:min-h-[280px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="inline-flex w-fit rounded-full bg-champagne/10 px-3 py-1 text-xs font-semibold text-champagne">
                {featured.tag}
              </span>
              <h2 className="mt-4 font-serif text-xl font-bold leading-snug text-ivory transition-colors group-hover:text-champagne-bright md:text-2xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ivory-faint">
                {featured.description}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-ivory-faint">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                  {featured.dateLabel}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden />
                  {featured.readMinutes}분 읽기
                </span>
              </div>
            </div>
          </Link>
        </FadeUp>

        <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="glass-card group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-obsidian/80 px-3 py-1 text-xs font-semibold text-champagne backdrop-blur">
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-serif text-lg font-bold leading-snug text-ivory transition-colors group-hover:text-champagne-bright">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory-faint">
                    {post.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-ivory-faint">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                        {post.dateLabel}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5" aria-hidden />
                        {post.readMinutes}분
                      </span>
                    </div>
                    <ArrowRight
                      className="h-4 w-4 text-champagne-dim transition-transform group-hover:translate-x-1 group-hover:text-champagne"
                      aria-hidden
                    />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeUp className="mt-16">
          <div className="glass-card flex flex-col items-center gap-6 p-10 text-center md:p-14">
            <p className="font-serif text-xl font-bold leading-snug text-ivory md:text-2xl">
              글로 다 못 적은 것은 전화로 물어보십시오 — 받는 사람이 글쓴이입니다
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CallButton label="담당 실장 다이렉트 연결" />
              <CallButton label="오늘의 출근부 확인" variant="outline" />
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
