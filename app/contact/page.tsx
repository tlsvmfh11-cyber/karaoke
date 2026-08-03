import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, MessageSquareText, HelpCircle } from "lucide-react";
import { CallButton } from "@/components/call-button";
import { FadeUp, HeroReveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { Photo } from "@/components/photo";
import { articleJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "강남 가라오케 예약 | 전화 한 통으로 끝나는 상담 절차 안내",
  description:
    "강남 가라오케 예약 절차를 단계별로 안내합니다. 견적 문의 시 준비할 세 가지, 예약 변경·취소 규정, 발렛·대리 연계, 자주 묻는 질문까지 담당 실장이 직접 답합니다.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "강남 가라오케 예약 — 전화 한 통이면 끝나는 상담",
    description:
      "인원·시간대·자리 성격 세 마디면 견적 완료. 변경·취소 규정과 발렛·대리 연계까지 예약의 전 과정 안내.",
    url: "/contact",
    images: ["/images/gangnam-karaoke-reservation-consult.webp"],
  },
};

const faqs = [
  {
    q: "예약 없이 당일에 방문해도 되나요?",
    a: "가능합니다. 다만 금·토 밤 시간대는 룸이 모두 차는 경우가 있어, 이동 중에라도 전화로 룸 상황을 확인하고 오시는 것을 권합니다. 통화 한 번이면 도착 시각에 맞춰 룸을 잡아 둡니다.",
  },
  {
    q: "견적 문의만 하고 예약하지 않아도 되나요?",
    a: "물론입니다. 견적 문의는 어떤 의무도 만들지 않습니다. 인원·시간대·주류 등급만 말씀하시면 봉사료까지 포함한 총액을 바로 안내드리며, 비교 후 결정하셔도 됩니다.",
  },
  {
    q: "예약 변경이나 취소에 위약금이 있나요?",
    a: "방문 2시간 전까지 연락 주시면 변경·취소 모두 비용이 없습니다. 연락 없이 오시지 않는 경우에만 다음 예약 시 선입금을 요청드릴 수 있습니다. 규정은 이것이 전부입니다.",
  },
  {
    q: "법인카드 결제와 분할 결제가 가능한가요?",
    a: "법인카드, 개인카드, 현금 모두 가능하며 카드 분할 결제도 처리해 드립니다. 증빙이 필요한 경우 계산 전에 미리 말씀해 주시면 맞춰 드립니다.",
  },
  {
    q: "오늘 출근한 라인업을 미리 알 수 있나요?",
    a: "전화 주시면 그날 실제 출근 인원 기준으로 안내드립니다. 과장해서 부풀리지 않는 것이 원칙이며, 자리 성격을 말씀해 주시면 어울리는 후보를 추려 드립니다.",
  },
  {
    q: "주차와 귀가는 어떻게 되나요?",
    a: "건물 발렛이 상시 대기하며 주차비는 저희가 부담합니다. 마감 시 대리운전 연결까지 저희가 처리해 드리므로 차를 가져오셔도 부담이 없습니다.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/contact#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "강남 가라오케 소개", path: "/" },
              { name: "예약 상담", path: "/contact" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "강남 가라오케 예약, 전화 한 통이면 끝나도록 절차를 깎아 놓았습니다",
              description:
                "견적 문의 시 준비할 세 가지, 예약 변경·취소 규정, 발렛·대리운전 연계, 자주 묻는 질문까지 정리한 강남 가라오케 예약 안내 문서.",
              path: "/contact",
              image: "/images/gangnam-karaoke-reservation-consult.webp",
            })
          ),
        }}
      />

      <section className="relative overflow-hidden bg-bordeaux-radial">
        <div className="container py-20 md:py-24">
          <HeroReveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-champagne-dim/40 bg-obsidian-card/60 px-4 py-1.5 text-xs font-medium tracking-widest text-champagne">
              <CalendarCheck className="h-3.5 w-3.5" aria-hidden />
              Reservation — 연중무휴 · 저녁 6시 ~ 익일 새벽 6시
            </p>
            <h1 className="max-w-4xl font-serif text-3xl font-black leading-snug md:text-5xl md:leading-tight">
              강남 가라오케 예약,{" "}
              <span className="gold-text">
                전화 한 통이면 끝나도록 절차를 깎아 놓았습니다
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-[1.9] text-ivory-dim md:text-lg">
              예약이 복잡한 집은 운영도 복잡합니다. 저희 예약은 인원, 시간,
              자리 성격 — 세 마디면 끝납니다. 이 페이지는 그 전화 한 통을
              걸기 전에 궁금하실 만한 것들을 전부 미리 답해 두는 문서입니다.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CallButton label="담당 실장 다이렉트 연결" />
              <CallButton label="오늘의 출근부 확인" variant="outline" />
            </div>
          </HeroReveal>
        </div>
      </section>

      <article className="container max-w-4xl pb-10">
        {/* H2 - 1 */}
        <section className="prose-room mt-8">
          <FadeUp>
            <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-ivory md:text-3xl">
              전화 걸기 전에 — 세 가지만 정하시면 상담이 1분으로 줄어듭니다
            </h2>
            <p>
              상담 전화가 길어지는 이유는 대부분 기본 정보가 정리되지 않아서
              입니다. 아래 세 가지만 머릿속에 담고 전화 주시면, 견적 산출과
              룸 확보까지 통화 1분 안에 끝납니다. 물론 정리가 안 된 상태로
              전화 주셔도 괜찮습니다. 제가 순서대로 여쭤 보면서 맞춰
              드리는 것도 일이니까요.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-karaoke-reservation-consult.webp"
                alt="강남 가라오케 예약 상담 — 인원·시간대·자리 성격 세 마디면 견적이 끝나는 룸"
              />
            </div>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              인원 · 시간대 · 자리 성격 — 이 세 마디가 견적의 전부입니다
            </h3>
            <p>
              첫째, <strong>인원</strong>. 방문 인원에 따라 룸 크기와 룸티
              적용 여부가 정해집니다. 둘째, <strong>시간대</strong>. 1부와
              2부의 주대가 다르므로(구체적 숫자는{" "}
              <Link href="/price">주대 정찰표</Link> 참고) 도착 예정 시각을
              알려 주시면 유리한 시간대를 제가 계산해 드립니다. 셋째,{" "}
              <strong>자리 성격</strong>. 접대인지, 지인 모임인지, 조용한
              자리인지 한 마디만 해 주시면 룸 배정과 초이스판 구성 방향이
              달라집니다. 신상 정보는 필요 없습니다. 성함은 가명이어도
              무방하고, 예약 정보는 마감 후 남기지 않습니다.
            </p>
            <p>
              문자 상담도 받습니다. 회의 중이거나 통화가 어려운 상황이라면
              위 세 가지를 문자로 남겨 주십시오. 확인 즉시 총액과 룸 상황을
              회신드립니다. 다만 금·토 피크 시간대에는 문자보다 전화가
              확실합니다. 룸이 실시간으로 빠지는 날은 몇 분 차이로 배정이
              갈리기 때문입니다.
            </p>
          </FadeUp>
        </section>

        <div className="gold-divider my-16" />

        {/* H2 - 2 */}
        <section className="prose-room">
          <FadeUp>
            <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-ivory md:text-3xl">
              예약 이후의 약속들 — 변경, 취소, 이동, 귀가까지 책임 범위를
              문서로 남깁니다
            </h2>
            <p>
              예약을 받는 것은 쉽습니다. 어려운 것은 예약 이후에 생기는
              변수들을 어떻게 처리하느냐입니다. 일행이 늘거나 줄고, 도착이
              늦어지고, 갑자기 자리가 취소되는 일은 술자리의 일상입니다.
              그때마다 손님이 눈치를 봐야 한다면 그건 서비스가 아닙니다.
              저희 규정을 문서로 박아 둡니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              변경과 취소 — 2시간 전 연락, 그것이 규정의 전부입니다
            </h3>
            <p>
              방문 2시간 전까지 연락 주시면 인원 변경, 시간 변경, 취소 모두
              비용 없이 처리됩니다. 위약금 조항을 복잡하게 만들어 놓고
              분쟁의 근거로 쓰는 집들이 있는데, 저는 반대로 규정을 한 줄로
              줄였습니다. 연락 없이 나타나지 않으신 경우에만, 다음 예약 시
              선입금을 부탁드립니다. 이는 그 시간에 다른 손님을 돌려보낸
              룸에 대한 최소한의 상도의라고 이해해 주시면 됩니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-karaoke-night-lounge.webp"
                alt="강남 가라오케 2부 시간대 룸 — 새벽까지 이어지는 프라이빗 하이엔드 라운지"
              />
            </div>
            <p>
              인원이 현장에서 늘어나는 경우도 걱정하실 것 없습니다. 룸
              여유가 있으면 큰 룸으로 옮겨 드리고, 추가 인원분의 비용은
              옮기기 전에 먼저 고지합니다. <Link href="/system">시스템
              안내</Link>에서 말씀드린 &lsquo;숫자를 듣고 결정하는
              순서&rsquo;는 현장 변수에도 똑같이 적용됩니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              오시는 길과 돌아가시는 길 — 발렛부터 대리 연결까지
            </h3>
            <p>
              위치는 강남 중심 상권, 지하철역 도보권입니다. 상세 위치는 예약
              확정 시 문자로 보내 드립니다. 홈페이지에 지도를 박아 두지 않는
              이유는 단순합니다. 조용히 오가시는 것을 선호하는 손님이
              대부분이고, 저희 역시 그 프라이버시를 지키는 쪽을 택했기
              때문입니다. 차량은 건물 발렛이 바로 받아 처리하며 주차비는
              받지 않습니다.
            </p>
            <p>
              마감 후에는 대리운전 연결까지 저희가 처리합니다. 새벽 시간대
              대리 잡기가 어려운 날도 저희 쪽 연계 기사로 해결해 드리니, 차를
              가지고 오시는 것을 망설이실 필요가 없습니다. 손님이 귀가하시는
              것까지가 자리의 끝이라는 게 저희 운영 기준입니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-karaoke-visit-lounge.webp"
                alt="강남 가라오케 방문 안내 — 발렛과 대리 연결까지 처리되는 프라이빗 라운지"
              />
            </div>
          </FadeUp>
        </section>

        <div className="gold-divider my-16" />

        {/* H2 - 3 (FAQ) */}
        <section className="prose-room">
          <FadeUp>
            <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-ivory md:text-3xl">
              자주 묻는 질문 — 전화로 매일 받는 질문들을 미리 답합니다
            </h2>
            <p>
              아래 여섯 개는 실제로 상담 전화에서 가장 자주 나오는
              질문들입니다. 여기 없는 질문은 전화로 물어보십시오. 모르는 것은
              모른다고, 안 되는 것은 안 된다고 답하는 것까지가 저희
              상담입니다. 처음 방문이라 전체 구조가 궁금하시다면{" "}
              <Link href="/">소개 페이지</Link>부터 읽고 오시는 것도
              좋습니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-karaoke-faq-room.webp"
                alt="강남 가라오케 룸 내부 — 방음 시공과 독립 환기를 갖춘 하이엔드 룸"
              />
            </div>
          </FadeUp>

          <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <StaggerItem key={f.q}>
                <div className="glass-card h-full p-6">
                  <h3 className="flex items-start gap-2.5 text-base font-bold leading-snug text-ivory">
                    <HelpCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-champagne"
                      aria-hidden
                    />
                    {f.q}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.85] text-ivory-dim">
                    {f.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <FadeUp className="mt-16">
          <div className="glass-card flex flex-col items-center gap-6 p-10 text-center md:p-14">
            <MessageSquareText className="h-8 w-8 text-champagne" aria-hidden />
            <p className="font-serif text-xl font-bold leading-snug text-ivory md:text-2xl">
              지금 통화 가능합니다 — 견적만 물어보셔도 됩니다
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-ivory-dim">
              인원, 시간대, 자리 성격. 세 마디면 봉사료까지 포함한 총액이
              나옵니다. 비교해 보시고 결정하십시오.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CallButton label="투명한 견적 문의" />
              <CallButton label="담당 실장 다이렉트 연결" variant="outline" />
            </div>
          </div>
        </FadeUp>
      </article>
    </main>
  );
}
