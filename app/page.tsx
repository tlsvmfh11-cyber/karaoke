import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Scale, Users, Wine, Clock3, MapPin } from "lucide-react";
import { CallButton } from "@/components/call-button";
import { FadeUp, HeroReveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { Photo } from "@/components/photo";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "강남 가라오케 소개 | 광고 문구 빼고 팩트만 쓰는 담당 실장의 안내서",
  description:
    "강남 가라오케를 15년 지킨 담당 실장이 직접 씁니다. 파티형·하이브리드형·정통 룸형의 차이, 주대 정찰제 원칙, 초이스 룸 문화까지 — 부풀림 없는 강남 하이엔드 룸 소개.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "강남 가라오케 소개 — 광고 문구 빼고 팩트만",
    description:
      "파티형·하이브리드형·정통 룸형의 차이부터 주대 정찰제 원칙까지, 담당 실장이 직접 쓰는 강남 하이엔드 룸 소개.",
    url: "/",
    images: ["/images/gangnam-karaoke-highend-vip-room.webp"],
  },
};

const heroStats = [
  { icon: Scale, label: "주대 정찰제", value: "견적 = 계산서" },
  { icon: Users, label: "상주 라인업", value: "평일 기준 대기 인원 상시 확보" },
  { icon: ShieldCheck, label: "운영 원칙", value: "재초이스 무제한 · 눈치 없음" },
  { icon: Clock3, label: "영업 시간", value: "저녁 6시 – 익일 새벽 6시" },
];

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "강남 가라오케 소개", path: "/" }])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "강남 가라오케, 광고 문구는 빼고 팩트만 — 15년 차 담당 실장이 직접 쓰는 소개서",
              description:
                "파티형·하이브리드형·정통 룸형으로 갈라진 2026년 강남 상권 구조와 주대 정찰제, 초이스 원칙을 담당 실장이 직접 설명하는 소개 문서.",
              path: "/",
              image: "/images/gangnam-karaoke-highend-vip-room.webp",
            })
          ),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gold-radial">
        <div className="container py-20 md:py-28">
          <HeroReveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-champagne-dim/40 bg-obsidian-card/60 px-4 py-1.5 text-xs font-medium tracking-widest text-champagne">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              선릉 · 역삼 라인 — 담당 실장 직영 안내
            </p>
            <h1 className="max-w-4xl font-serif text-3xl font-black leading-snug md:text-5xl md:leading-tight">
              강남 가라오케, 광고 문구는 빼고 팩트만 —{" "}
              <span className="gold-text">
                15년 차 담당 실장이 직접 쓰는 소개서
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-[1.9] text-ivory-dim md:text-lg">
              화려한 수식어로 손님을 홀리는 글은 이 바닥에 이미 넘칩니다. 저는
              반대로 갑니다. 간판은 가라오케지만 내용은 정통 하이엔드 룸이라는
              것, 주대는 정찰제로 못 박아 놓았다는 것, 초이스에서 장난치지
              않는다는 것. 이 세 가지를 증명하는 데에만 이 긴 글을 쓰겠습니다.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CallButton label="담당 실장 다이렉트 연결" />
              <Link
                href="/price"
                className="inline-flex h-14 items-center rounded-xl border border-champagne-dim/60 px-9 text-base font-semibold text-champagne transition-colors hover:border-champagne hover:bg-champagne/10"
              >
                오늘의 주대 정찰표 보기
              </Link>
            </div>
          </HeroReveal>

          <div className="mt-14">
            <Photo
              src="/images/gangnam-karaoke-highend-vip-room.webp"
              alt="강남 가라오케 하이엔드 VIP 룸 전경 — 정통 룸싸롱 문법의 프라이빗 룸과 위스키 기본 세팅"
              aspect="banner"
              priority
              position="center 45%"
            />
          </div>

          <StaggerGroup className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {heroStats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="glass-card h-full p-5">
                  <s.icon className="h-5 w-5 text-champagne" aria-hidden />
                  <p className="mt-3 text-xs font-semibold tracking-widest text-champagne-dim">
                    {s.label}
                  </p>
                  <p className="mt-1.5 text-sm font-bold leading-snug text-ivory">
                    {s.value}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <article className="container max-w-4xl pb-10">
        {/* H2 - 1 */}
        <section className="prose-room mt-8">
          <FadeUp>
            <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-ivory md:text-3xl">
              간판은 가라오케, 내용은 정통 룸 — 강남이라는 동네 장사의 실체부터
              말씀드립니다
            </h2>
            <p>
              강남에서 &lsquo;가라오케&rsquo;라는 단어를 검색해 보신 분이라면
              이미 느끼셨을 겁니다. 같은 단어를 쓰는데 어떤 곳은 DJ가 디제잉을
              하고, 어떤 곳은 조용한 복도에 정장 입은 웨이터가 서 있습니다.
              단어는 하나인데 업태는 완전히 다릅니다. 이 간극을 설명하지 않고
              손님을 받는 것 자체가 저는 불성실한 영업이라고 생각합니다. 그래서
              소개 페이지의 첫 꼭지를 상권 구조 설명에 통째로 씁니다.
            </p>
            <p>
              결론부터 말씀드리면 저희는 <strong>가라오케 간판을 단 정통
              하이엔드 룸</strong>입니다. 노래방 기계가 있으니 가라오케라는
              이름이 틀린 것은 아니지만, 운영의 뼈대는 초이스와 파트너 동석,
              그리고 조용한 룸 안에서의 술자리라는 전통적인 강남 룸싸롱
              문법을 그대로 따릅니다. 쿵쿵대는 스피커 아래에서 소리 지르며
              노는 자리를 찾으신다면 저희 집은 맞지 않습니다. 그런 분께는
              전화 주셔도 솔직하게 다른 동네를 권해 드립니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-room-salon-whisky-lounge.webp"
                alt="강남 룸싸롱 스타일 위스키 라운지 룸 — DJ 부스 없이 조용한 정통 하이엔드 룸 분위기"
              />
            </div>
          </FadeUp>

          {/* H3 - 1-1 */}
          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              2026년 강남 상권에서 &lsquo;가라오케&rsquo;라는 단어가 세 갈래로
              갈라진 이유
            </h3>
            <p>
              코로나 이후 몇 년 동안 강남 유흥 상권은 크게 재편됐습니다.
              임대료를 감당하지 못한 중소 업장이 빠져나간 자리에 대형 자본이
              들어오면서, 한쪽에서는 수백 명을 받는 파티형 대형 가라오케가
              생겼고, 다른 한쪽에서는 오히려 룸 수를 줄이고 단가를 올린
              소수정예 하이엔드 룸이 자리를 잡았습니다. 2026년 현재 손님들이
              검색창에 &lsquo;강남 가라오케&rsquo;를 치면 이 두 극단과 그
              중간 형태까지 전부 섞여 나옵니다. 예약 전화를 걸기 전에 자신이
              어느 유형을 원하는지부터 정리하셔야 헛걸음을 안 합니다.
            </p>
            <p>
              최근 몇 년 사이 손님들의 니즈도 뚜렷하게 갈렸습니다. 예전에는
              &lsquo;어디가 제일 화려하냐&rsquo;를 물으셨다면, 요즘은
              열에 여덟이 <strong>&lsquo;가격 장난 없는 집이 어디냐&rsquo;</strong>를
              먼저 물으십니다. 광고 속 주대와 실제 계산서가 다른 집에 데인
              경험이 그만큼 흔하다는 뜻입니다. 정찰제가 2026년 강남의
              화두가 된 배경이 바로 이것이고, 저희가 정찰제를 간판 원칙으로
              내건 이유이기도 합니다.
            </p>

            {/* H4 */}
            <h4 className="mb-3 mt-9 text-lg font-bold text-ivory">
              파티형 · 하이브리드형 · 정통 룸형 — 손님이 헷갈릴 수밖에 없는
              세 가지 운영 방식
            </h4>
            <p>
              첫째, <em>파티형</em>은 말 그대로 클럽에 룸을 붙여 놓은
              형태입니다. DJ 부스와 대형 스테이지가 있고, 젊은 손님들이 단체로
              와서 뛰어노는 구조라 술값 자체는 상대적으로 가볍지만 조용한
              대화나 접대 자리는 사실상 불가능합니다. 둘째,{" "}
              <em>하이브리드형</em>은 평일은 룸 위주로, 주말은 파티 위주로
              돌리는 절충형인데, 방문 요일에 따라 분위기 편차가 커서 접대나
              모임 자리로는 예측이 어렵습니다. 셋째가 저희 같은{" "}
              <em>정통 룸형</em>입니다. 스테이지도 DJ도 없습니다. 방음 잘 된
              룸, 제대로 세팅된 주류, 그리고 초이스로 모신 파트너. 이 세
              가지가 전부이고, 그래서 자리의 밀도가 완전히 다릅니다.
            </p>
            <p>
              세 유형은 가격 구조도 다르게 굴러갑니다. 파티형은 입장료와 테이블
              차지 중심, 하이브리드형은 요일별 변동 주대, 정통 룸형은 주대와
              티씨(TC)로 구성된 고정 견적 중심입니다. 자세한 숫자는{" "}
              <Link href="/price">주대 정찰표 페이지</Link>에 원 단위까지 전부
              공개해 두었으니, 비교하실 때 기준표로 쓰셔도 좋습니다.
            </p>
          </FadeUp>

          {/* H3 - 1-2 */}
          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              저희 업장에 DJ 부스가 없는 이유 — 시끄러운 집이 못 되는 게 아니라
              안 하는 겁니다
            </h3>
            <p>
              가끔 &lsquo;요즘 트렌드가 파티라는데 왜 안 하시냐&rsquo;고 묻는
              분이 계십니다. 답은 간단합니다. 저희 손님의 대부분은 조용히
              모시는 자리, 오랜만의 형님들 모임, 마음 맞는 소수 인원의
              술자리를 위해 오시는 분들입니다. 이런 분들에게 복도 너머로
              울리는 EDM은 서비스가 아니라 소음입니다. 룸 하나하나의 방음
              공사에 돈을 쓰고, 스테이지 만들 자리에 룸을 하나 더 넣는 것.
              그게 저희가 선택한 방향입니다.
            </p>
            <p>
              같은 이유로 저희는 &lsquo;물 좋은 날&rsquo; 같은 말로 손님을
              현혹하지 않습니다. 파트너 라인업은 요일 편차를 줄이는 방향으로
              관리하고, 평일이든 주말이든 일정 수준 이하의 초이스판을 깔지
              않는 것을 원칙으로 합니다. 라인업이 실제로 어떻게 관리되고
              초이스가 어떤 순서로 진행되는지는{" "}
              <Link href="/system">시스템 안내 페이지</Link>에서 단계별로
              전부 공개하고 있습니다.
            </p>
          </FadeUp>
        </section>

        <div className="gold-divider my-16" />

        {/* H2 - 2 */}
        <section className="prose-room">
          <FadeUp>
            <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-ivory md:text-3xl">
              정직한 실장이 15년 동안 지켜온 세 가지 영업 원칙
            </h2>
            <p>
              이 바닥에서 실장이라는 직함은 흔합니다. 명함에 못 박는 건
              누구나 할 수 있으니까요. 다른 건 하나입니다.{" "}
              <strong>자기 원칙을 문서로 박아 놓고 그걸 어기면 책임지는
              사람인가.</strong> 저는 아래 세 가지를 이 페이지에 공개적으로
              적어 둡니다. 방문하셨을 때 하나라도 다르면, 그 자리에서 제게
              따지시면 됩니다. 변명하지 않겠습니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              원칙 하나 — 견적서와 계산서가 같은 집이어야 합니다
            </h3>
            <p>
              전화로 안내드린 주대, 티씨, 봉사료 외에 계산서에 새로운 줄이
              생기지 않습니다. 이게 제가 말하는 정찰제의 전부입니다. 안주가
              &lsquo;서비스인 줄 알았는데 유료&rsquo;라거나, 시간이 지나니
              &lsquo;연장 기본 세팅&rsquo;이 슬쩍 추가된다거나 하는 수법은
              강남에서 아직도 사라지지 않았습니다. 저희 집에서는 연장 여부도
              손님이 먼저 물으시기 전에 제가 먼저 남은 시간과 예상 추가
              비용을 말씀드립니다. 술자리 기분은 계산대 앞에서 결정된다는
              것을 15년 장사로 배웠기 때문입니다.
            </p>
            <p>
              간혹 &lsquo;그 가격이면 뭔가 빠진 것 아니냐&rsquo;고 의심하시는
              분도 계십니다. 당연한 의심이고, 그 의심에 답하기 위해 주대에
              포함되는 구성 — 위스키 등급, 과일 세팅, 음료, 얼음, 부가세
              포함 여부까지 — 을 <Link href="/price">가격 페이지</Link>에
              항목별로 풀어 두었습니다. 견적은 전화 한 통이면 1분 안에
              끝나고, 그 견적은 방문하셔도 그대로입니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              원칙 둘 — 초이스는 손님의 권리, 눈치 주는 순간 실격입니다
            </h3>
            <p>
              초이스 룸에 파트너들이 들어왔을 때 마음에 드는 분이 없으면
              다시 보시면 됩니다. 두 번이고 세 번이고, 저희는 재초이스에
              횟수 제한을 두지 않고 눈치도 드리지 않습니다. 오히려 애매하게
              앉히고 넘어가는 게 서로에게 손해입니다. 손님은 자리가 재미없고,
              파트너는 지명이 안 쌓이고, 저는 재방문을 잃습니다. 초이스에서
              시간을 더 쓰는 것이 결과적으로 가장 빠른 길이라는 걸 아는
              집이 제대로 된 집입니다.
            </p>
            <p>
              라인업의 수준에 대해서는 긴 말 대신 한 문장만 하겠습니다.
              강남에서 사이즈로 승부하는 집이라는 평가는 손님이 내리는
              것이지 업장이 자칭하는 게 아닙니다. 저는 다만 평일과 주말의
              편차를 줄이고, 대기 인원을 상시 확보해서 어느 요일에 오셔도
              초이스판이 빈약하지 않게 만드는 일에 집중할 뿐입니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-highend-room-partner.webp"
                alt="강남 초이스 룸 파트너 — 사이즈로 승부하는 하이엔드 라인업, 재초이스 무제한 원칙"
              />
            </div>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              원칙 셋 — 모르는 건 모른다고, 안 되는 건 안 된다고 말씀드립니다
            </h3>
            <p>
              전화 상담에서 모든 요청에 &lsquo;다 됩니다&rsquo;를 남발하는
              곳은 일단 의심하셔야 합니다. 성수기 금요일 밤에 대형 룸을
              10분 전에 잡아 드리겠다는 약속, 특정 파트너를 무조건
              앉혀 드리겠다는 약속 — 현장을 아는 사람이라면 함부로 못 하는
              말들입니다. 저는 가능한 것과 불가능한 것을 구분해서
              말씀드리고, 불확실한 건 확인 후에 다시 전화드립니다. 그게
              느려 보여도 결국 사고가 없는 방식입니다.
            </p>
          </FadeUp>
        </section>

        <div className="gold-divider my-16" />

        {/* H2 - 3 */}
        <section className="prose-room">
          <FadeUp>
            <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-ivory md:text-3xl">
              처음 오시는 분들을 위한 안내 — 무엇을 보고 강남 가라오케를 골라야
              하는가
            </h2>
            <p>
              마지막으로, 저희 집에 오시든 다른 집에 가시든 공통으로 쓸 수
              있는 판별 기준을 드리겠습니다. 15년 동안 옆 가게들이 생기고
              사라지는 걸 지켜보며 정리한, 말하자면 업계 내부자의 체크리스트
              입니다. 이 기준으로 걸러서 손해 보실 일은 없습니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              전화 상담 3분이면 그 집의 수준이 드러납니다
            </h3>
            <ul>
              <li>
                주대를 물었을 때 <strong>총액 기준</strong>으로 답하는지
                보십시오. &lsquo;기본 얼마부터&rsquo;라며 최저가만 던지는
                집은 방문 후 항목이 늘어날 확률이 높습니다.
              </li>
              <li>
                티씨와 봉사료를 묻지 않아도 먼저 고지하는지 보십시오. 숨길
                생각이 없는 집은 먼저 말합니다.
              </li>
              <li>
                안 되는 요청에 안 된다고 답하는지 보십시오. 전부 다 된다는
                집이 제일 위험합니다.
              </li>
              <li>
                예약 변경과 취소 규정을 명확히 말하는지 보십시오. 규정이
                없다는 건 분쟁 시 기준도 없다는 뜻입니다.
              </li>
            </ul>
            <p>
              이 네 가지를 통과하는 집이라면 어디든 크게 실패하지 않으실
              겁니다. 저희가 이 기준을 어떻게 통과하는지는 직접 전화로
              확인해 보시는 게 가장 빠릅니다. 예약 절차와 상담 시 준비하실
              내용은 <Link href="/contact">예약 상담 페이지</Link>에 따로
              정리해 두었습니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              접대 자리와 지인 모임, 목적에 따라 다르게 준비해 드립니다
            </h3>
            <p>
              같은 룸이라도 자리의 목적이 다르면 세팅이 달라야 합니다. 거래처
              접대라면 대화가 끊기지 않도록 음악 볼륨과 진행 속도를 낮추고,
              파트너도 분위기를 받쳐 주는 스타일로 초이스판을 구성합니다.
              반대로 오랜 지인들 모임이라면 노래와 게임이 자연스럽게 이어지는
              활기 있는 진행으로 방향을 잡습니다. 예약 전화에서 자리 성격을
              한 마디만 귀띔해 주시면, 나머지는 제가 준비합니다. 이런 목적별
              운영 방식의 세부 내용 역시{" "}
              <Link href="/system">시스템 안내</Link>에서 이어서 보실 수
              있습니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-karaoke-room-system-setting.webp"
                alt="강남 가라오케 시스템 완비 룸 — 최신 반주기, 무선 마이크, 위스키 주대 세팅"
              />
            </div>
            <p>
              긴 글 읽어 주셔서 감사합니다. 화려한 약속은 드리지 않았지만,
              적어 놓은 것은 전부 지키는 집이라는 것 하나는 자신 있게
              말씀드립니다. 강남 한복판에서 15년을 버틴 비결은 결국 그것
              하나였습니다.
            </p>
          </FadeUp>
        </section>

        {/* CTA */}
        <FadeUp className="mt-16">
          <div className="glass-card flex flex-col items-center gap-6 p-10 text-center md:p-14">
            <Wine className="h-8 w-8 text-champagne" aria-hidden />
            <p className="font-serif text-xl font-bold leading-snug text-ivory md:text-2xl">
              오늘 자리가 필요하시다면, 부풀림 없는 견적부터 받아 보십시오
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-ivory-dim">
              통화 1분이면 인원·시간대 기준 총액이 나옵니다. 방문하셔도 그
              숫자는 변하지 않습니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CallButton label="투명한 견적 문의" />
              <CallButton label="오늘의 출근부 확인" variant="outline" />
            </div>
          </div>
        </FadeUp>
      </article>
    </main>
  );
}
