import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, Receipt } from "lucide-react";
import { CallButton } from "@/components/call-button";
import { FadeUp, HeroReveal } from "@/components/motion";
import { Photo } from "@/components/photo";
import { articleJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "강남 가라오케 주대·가격 | 원 단위까지 공개하는 정찰표",
  description:
    "강남 가라오케 주대와 가격을 숨김 없이 공개합니다. 2026년 기준 1부·2부 주대, 티씨(TC), 룸티, 봉사료 구성과 4인 기준 총액 예시, 부풀린 광고 가격 구별법까지 담당 실장이 직접 정리했습니다.",
  alternates: { canonical: "/price" },
  openGraph: {
    title: "강남 가라오케 주대 정찰표 — 계산서에 찍히는 숫자 그대로",
    description:
      "1부·2부 주대, 티씨, 봉사료까지 원 단위 공개. 4인 기준 총액 예시와 부풀린 광고 가격 구별법.",
    url: "/price",
    images: ["/images/gangnam-karaoke-judae-whisky-set.webp"],
  },
};

const priceServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/price#service`,
  name: "강남 가라오케 룸 이용 (주대 정찰제)",
  serviceType: "가라오케 룸 예약",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "AdministrativeArea", name: "서울특별시 강남구" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "강남 가라오케 주대 정찰표",
    itemListElement: [
      {
        "@type": "Offer",
        name: "1부 주대 — 12년산 위스키 1병 + 풀 세팅 (저녁 6시~밤 12시)",
        price: "180000",
        priceCurrency: "KRW",
      },
      {
        "@type": "Offer",
        name: "2부 주대 — 12년산 위스키 1병 + 풀 세팅 (밤 12시~새벽 6시)",
        price: "150000",
        priceCurrency: "KRW",
      },
      {
        "@type": "Offer",
        name: "티씨(TC) — 파트너 1인, 시간대 무관 동일",
        price: "130000",
        priceCurrency: "KRW",
      },
    ],
  },
};

const priceRows = [
  { slot: "1부 (저녁 6시 ~ 밤 12시)", set: "12년산 위스키 1병 + 풀 세팅", price: "180,000원", tc: "130,000원" },
  { slot: "2부 (밤 12시 ~ 새벽 6시)", set: "12년산 위스키 1병 + 풀 세팅", price: "150,000원", tc: "130,000원" },
];

const extraRows = [
  { item: "추가 주류 (동일 등급)", price: "주대 표기 금액과 동일 — 야간 할증 없음" },
  { item: "룸티 (5인 이상 미들 룸)", price: "인원 초과분에 대해서만 사전 고지 후 적용" },
  { item: "봉사료", price: "총액의 10% — 견적 단계에서 총액에 합산 고지" },
  { item: "과일·안주·음료·얼음 리필", price: "0원 — 주대 포함, 별도 청구 없음" },
];

export default function PricePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "강남 가라오케 소개", path: "/" },
              { name: "주대 정찰표", path: "/price" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "강남 가라오케 주대, 원 단위까지 적어 놓고 그대로 받는 것이 정찰제입니다",
              description:
                "2026년 강남 주대 시세 구조, 1부·2부 정찰표, 티씨와 봉사료 기준, 4인 총액 계산 예시와 부풀린 광고 가격 구별법을 담은 가격 공개 문서.",
              path: "/price",
              image: "/images/gangnam-karaoke-judae-whisky-set.webp",
            })
          ),
        }}
      />

      <section className="relative overflow-hidden bg-gold-radial">
        <div className="container py-20 md:py-24">
          <HeroReveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-champagne-dim/40 bg-obsidian-card/60 px-4 py-1.5 text-xs font-medium tracking-widest text-champagne">
              <Receipt className="h-3.5 w-3.5" aria-hidden />
              Price — 2026년 8월 기준 정찰표
            </p>
            <h1 className="max-w-4xl font-serif text-3xl font-black leading-snug md:text-5xl md:leading-tight">
              강남 가라오케 주대,{" "}
              <span className="gold-text">
                원 단위까지 적어 놓고 그대로 받는 것이 정찰제입니다
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-[1.9] text-ivory-dim md:text-lg">
              가격을 물으면 &lsquo;오시면 맞춰 드린다&rsquo;고 답하는 집은
              걸러도 됩니다. 맞춰 준다는 말은 부를 때마다 다르게 부르겠다는
              말과 같기 때문입니다. 이 페이지의 숫자는 광고용 미끼가 아니라
              실제 계산서에 찍히는 숫자이며, 바뀌면 페이지를 먼저 고칩니다.
            </p>
          </HeroReveal>
        </div>
      </section>

      <article className="container max-w-4xl pb-10">
        {/* H2 - 1 */}
        <section className="prose-room mt-8">
          <FadeUp>
            <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-ivory md:text-3xl">
              2026년 강남 주대 시세의 구조 — 숫자를 읽는 법부터 알려 드립니다
            </h2>
            <p>
              강남 가라오케 가격이 어렵게 느껴지는 이유는 금액이 커서가
              아니라 <strong>구성 항목이 집마다 다르게 쪼개져 있기 때문</strong>
              입니다. 어떤 집은 주대에 과일을 포함하고 어떤 집은 뺍니다.
              어떤 집은 봉사료를 총액에 녹이고 어떤 집은 계산서 맨 아래에
              슬쩍 붙입니다. 그래서 총액이 같아 보여도 실제로 나오는 돈은
              다릅니다. 항목의 정의부터 통일하고 시작하겠습니다.
            </p>
            <p>
              2026년 현재 강남 정통 룸형 가라오케의 시세는 대체로 주대
              14만원~18만원, 티씨 12만원~13만원 선에 형성되어 있습니다.
              하이엔드 라인은 1부 기준 주대 17~18만원, 2부 15만원 안팎이
              일반적이고, 4인 기준 총액이 65만원 내외로 잡히면 표준적인
              견적이라고 보시면 됩니다. 이 범위를 크게 밑도는 광고는 대부분
              항목을 빼놓은 숫자입니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              주대에 포함되는 것 — 저희 집 기준 전 항목 공개
            </h3>
            <p>
              저희가 주대라고 부르는 금액에는 12년산 위스키 1병, 계절 과일
              세팅, 마른안주, 음료(생수·탄산·주스), 얼음 무제한 리필이 전부
              포함됩니다. 술이 남으면 보관해 드리고, 다음 방문 때 보관주로
              이어서 드실 수 있습니다. 즉 주대는 &lsquo;술값&rsquo;이 아니라
              <em>테이블 위에 올라가는 모든 것의 값</em>입니다. 여기에
              나중에 과일값, 안주값이 따로 붙는다면 그건 정찰제가 아닙니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-karaoke-judae-whisky-set.webp"
                alt="강남 가라오케 주대 기본 세팅 — 12년산 위스키와 풀 세팅이 오른 룸 테이블"
              />
            </div>

            <h4 className="mb-3 mt-9 text-lg font-bold text-ivory">
              위스키 등급을 올리면 어떻게 되는가
            </h4>
            <p>
              기본 세팅은 12년산이지만 17년산, 하이엔드 싱글몰트로 등급을
              올리실 수 있습니다. 이때 추가되는 금액은 주류 등급 차액
              하나뿐이며, 등급을 올렸다고 과일 세팅이나 티씨가 함께 오르는
              일은 없습니다. 차액은 병 단위로 사전 고지되고, 견적 전화에서
              등급별 금액을 바로 답해 드립니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              티씨(TC)와 봉사료 — 가장 오해가 많은 두 항목
            </h3>
            <p>
              티씨는 초이스로 모신 파트너에게 지급되는 금액입니다. 시간당이
              아니라 기본 이용 시간 단위로 책정되며, 저희 집은 13만원
              정찰입니다. 파트너에 따라 티씨가 달라지는 이른바 &lsquo;에이스
              프리미엄&rsquo;을 붙이는 집도 있습니다만, 저희는 라인업 전원
              동일 티씨 원칙입니다. 프리미엄이 붙는 순간 초이스판이 가격표가
              되고, 그건 손님과 파트너 모두에게 불쾌한 구조이기 때문입니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-karaoke-tc-guide.webp"
                alt="강남 가라오케 티씨(TC) 안내 — 라인업 전원 동일 티씨 정찰 원칙"
              />
            </div>
            <p>
              봉사료는 웨이터와 주방, 발렛 인력에게 배분되는 총액의 10%
              입니다. 중요한 것은 <strong>봉사료를 견적 단계에서 총액에
              합산해 말씀드린다</strong>는 점입니다. 계산할 때 처음 듣는
              항목이 하나라도 있다면 그 집의 견적은 견적이 아니라
              미끼입니다.
            </p>
          </FadeUp>
        </section>

        <div className="gold-divider my-16" />

        {/* H2 - 2 */}
        <section className="prose-room">
          <FadeUp>
            <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-ivory md:text-3xl">
              저희 집 정찰표 — 계산서에 찍히는 숫자 그대로
            </h2>
            <p>
              아래 표가 저희 집의 실제 운영 가격입니다. 시간대(1부·2부)에
              따라 주대만 달라지고, 티씨는 시간대와 무관하게 동일합니다.
              표에 없는 항목은 계산서에도 없습니다.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="glass-card mt-8 overflow-hidden">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">
                  강남 가라오케 시간대별 주대 및 티씨 정찰표
                </caption>
                <thead>
                  <tr className="border-b border-obsidian-line bg-obsidian-soft/80 text-champagne">
                    <th scope="col" className="px-5 py-4 font-semibold">시간대</th>
                    <th scope="col" className="px-5 py-4 font-semibold">기본 세팅</th>
                    <th scope="col" className="px-5 py-4 font-semibold">주대</th>
                    <th scope="col" className="px-5 py-4 font-semibold">티씨(1인)</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((r) => (
                    <tr key={r.slot} className="border-b border-obsidian-line/60 last:border-0">
                      <th scope="row" className="px-5 py-4 font-medium text-ivory">
                        {r.slot}
                      </th>
                      <td className="px-5 py-4 text-ivory-dim">{r.set}</td>
                      <td className="px-5 py-4 font-bold text-champagne">{r.price}</td>
                      <td className="px-5 py-4 font-bold text-champagne">{r.tc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              추가 비용이 발생할 수 있는 전 항목 — 이 표 밖의 청구는 없습니다
            </h3>
            <div className="glass-card mt-6 overflow-hidden">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">추가 비용 항목 안내</caption>
                <thead>
                  <tr className="border-b border-obsidian-line bg-obsidian-soft/80 text-champagne">
                    <th scope="col" className="px-5 py-4 font-semibold">항목</th>
                    <th scope="col" className="px-5 py-4 font-semibold">기준</th>
                  </tr>
                </thead>
                <tbody>
                  {extraRows.map((r) => (
                    <tr key={r.item} className="border-b border-obsidian-line/60 last:border-0">
                      <th scope="row" className="px-5 py-4 font-medium text-ivory">
                        {r.item}
                      </th>
                      <td className="px-5 py-4 text-ivory-dim">{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="mb-3 mt-10 text-lg font-bold text-ivory">
              4인 기준 총액 예시 — 직접 계산해 보십시오
            </h4>
            <p>
              2부 시간대, 4인 방문, 파트너 4인 초이스, 기본 12년산 세팅
              기준으로 계산하면 이렇게 됩니다. 주대 150,000원 + 티씨
              130,000원 × 4인 = 670,000원, 여기에 봉사료 10%를 더한{" "}
              <strong>총 737,000원</strong>이 계산서 금액입니다. 견적
              전화에서 들으시는 숫자도, 마감 때 받으시는 계산서도 이
              계산식에서 벗어나지 않습니다. 인원과 시간대만 알려 주시면 어떤
              조합이든 이 자리에서 바로 총액을 뽑아 드립니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-karaoke-price-jungchal.webp"
                alt="강남 가라오케 정찰제 룸 — 견적 전화의 숫자와 계산서가 같은 하이엔드 룸"
              />
            </div>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              연장과 추가 주류 — 야간 할증이라는 단어는 저희 사전에 없습니다
            </h3>
            <p>
              연장을 결정하시면 추가되는 것은 연장 시간분의 티씨와, 새로
              여시는 술의 주대뿐입니다. 새벽이라고 술값이 오르거나, 연장
              &lsquo;기본 세팅비&rsquo; 같은 창작 항목이 붙는 일은 없습니다.
              연장 전에 제가 추가 예상 금액을 먼저 말씀드리는 절차는{" "}
              <Link href="/system">시스템 안내</Link>에서 설명드린 그대로
              입니다. 숫자를 듣고 결정하시는 것과 결정하고 숫자를 듣는 것 —
              이 순서 차이가 정찰제와 부르는 게 값인 집의 차이입니다.
            </p>
          </FadeUp>
        </section>

        <div className="gold-divider my-16" />

        {/* H2 - 3 */}
        <section className="prose-room">
          <FadeUp>
            <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-ivory md:text-3xl">
              부풀린 광고 가격 구별법 — 15년 차 실장이 알려 드리는 검증 공식
            </h2>
            <p>
              마지막으로, 다른 광고를 보실 때 쓰실 수 있는 검증법을
              드리겠습니다. 저희 집 홍보에는 손해일 수 있지만, 애초에 이
              페이지의 목적이 손님이 어디서든 속지 않게 만드는 것이니
              적겠습니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              시세보다 30% 이상 싼 광고가 굴러가는 세 가지 수법
            </h3>
            <ul>
              <li>
                <strong>항목 빼기</strong> — 주대만 표기하고 티씨·봉사료를
                숨깁니다. 현장에서 합치면 오히려 시세보다 비싸집니다.
              </li>
              <li>
                <strong>등급 바꿔치기</strong> — 광고 속 술과 실제 세팅되는
                술의 등급이 다릅니다. 병을 확인하면 라벨이 처음 보는
                브랜드인 경우입니다.
              </li>
              <li>
                <strong>시간 쪼개기</strong> — 기본 이용 시간을 짧게 잡아
                놓고 연장으로 수익을 냅니다. 총액을 시간으로 나눠 보면
                결코 싸지 않습니다.
              </li>
            </ul>
            <p>
              검증 공식은 하나입니다. 전화해서{" "}
              <strong>&lsquo;인원 4명, 2부, 기본 세팅으로 봉사료까지 포함한
              총액이 얼마입니까&rsquo;</strong>라고 물으십시오. 한 번에 하나의
              숫자로 답하지 못하는 집은 방문 후에도 숫자가 계속 바뀝니다.
              저희에게 같은 질문을 하시면 위 예시 그대로 737,000원이라고
              답합니다. 시험해 보셔도 좋습니다.
            </p>
            <p>
              저희가 어떤 원칙으로 이 가격을 지키는지는{" "}
              <Link href="/">소개 페이지</Link>에 적어 두었고, 견적 문의
              절차는 <Link href="/contact">예약 상담 페이지</Link>에서
              이어집니다. 숫자에 관한 한, 이 페이지가 저희의 계약서라고
              생각하셔도 됩니다.
            </p>
          </FadeUp>
        </section>

        <FadeUp className="mt-16">
          <div className="glass-card flex flex-col items-center gap-6 p-10 text-center md:p-14">
            <Calculator className="h-8 w-8 text-champagne" aria-hidden />
            <p className="font-serif text-xl font-bold leading-snug text-ivory md:text-2xl">
              인원과 시간대만 말씀하십시오 — 1분 안에 총액이 나옵니다
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-ivory-dim">
              통화로 들으신 견적과 계산서가 다르면, 차액은 제가 책임집니다.
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
