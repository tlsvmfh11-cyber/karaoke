import type { Metadata } from "next";
import Link from "next/link";
import {
  DoorOpen,
  ListChecks,
  Timer,
  UserRoundCheck,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import { CallButton } from "@/components/call-button";
import { FadeUp, HeroReveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { Photo } from "@/components/photo";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "강남 가라오케 시스템 | 입장부터 마감까지 단계별 전부 공개",
  description:
    "강남 가라오케 시스템을 숨기는 단계 없이 공개합니다. 예약 확인, 룸 배정, 초이스 룸 진행, 재초이스 규정, 시간제 운영과 연장, 라인업 관리까지 담당 실장이 실무 그대로 설명합니다.",
  alternates: { canonical: "/system" },
  openGraph: {
    title: "강남 가라오케 시스템 — 입장부터 마감까지 전부 공개",
    description:
      "룸 배정, 초이스 진행, 재초이스 규정, 시간제 운영까지 실무 절차를 그대로 옮긴 시스템 안내.",
    url: "/system",
    images: ["/images/gangnam-karaoke-choice-room.webp"],
  },
};

const steps = [
  { icon: DoorOpen, step: "01", title: "도착 · 안내", desc: "예약명 확인 후 대기 없이 전용 룸으로 바로 안내" },
  { icon: ListChecks, step: "02", title: "세팅 · 견적 재확인", desc: "주류 세팅 전 총액 구두 재고지 — 전화 견적과 동일" },
  { icon: UserRoundCheck, step: "03", title: "초이스", desc: "라인업 입장 → 마음에 들 때까지 재초이스 무제한" },
  { icon: Timer, step: "04", title: "본 자리 · 마감", desc: "잔여 시간 사전 고지, 연장은 손님 결정으로만 진행" },
];

export default function SystemPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "강남 가라오케 소개", path: "/" },
              { name: "시스템 안내", path: "/system" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "강남 가라오케 시스템, 입장부터 마감까지 숨기는 단계 없이 전부 공개합니다",
              description:
                "예약 확인과 룸 배정, 초이스 룸 진행과 재초이스 규정, 시간제 운영과 라인업 관리까지 강남 가라오케 실무 절차 전체를 공개한 문서.",
              path: "/system",
              image: "/images/gangnam-karaoke-choice-room.webp",
            })
          ),
        }}
      />

      <section className="relative overflow-hidden bg-bordeaux-radial">
        <div className="container py-20 md:py-24">
          <HeroReveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-champagne-dim/40 bg-obsidian-card/60 px-4 py-1.5 text-xs font-medium tracking-widest text-champagne">
              <ClipboardList className="h-3.5 w-3.5" aria-hidden />
              System — 실무 절차 공개 문서
            </p>
            <h1 className="max-w-4xl font-serif text-3xl font-black leading-snug md:text-5xl md:leading-tight">
              강남 가라오케 시스템,{" "}
              <span className="gold-text">
                입장부터 마감까지 숨기는 단계 없이 전부 공개합니다
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-[1.9] text-ivory-dim md:text-lg">
              시스템을 두루뭉술하게 설명하는 집일수록 계산서가 복잡해집니다.
              이 페이지는 손님이 문을 열고 들어와서 나가실 때까지 일어나는
              모든 절차를, 담당 실장인 제가 실무 순서 그대로 옮겨 적은
              문서입니다. 읽고 오시면 현장에서 놀랄 일이 하나도 없습니다.
            </p>
          </HeroReveal>

          <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-4">
            {steps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="glass-card h-full p-6">
                  <div className="flex items-center justify-between">
                    <s.icon className="h-5 w-5 text-champagne" aria-hidden />
                    <span className="font-serif text-2xl font-black text-champagne-dim/50">
                      {s.step}
                    </span>
                  </div>
                  <p className="mt-4 font-bold text-ivory">{s.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-ivory-faint">
                    {s.desc}
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
              도착에서 초이스까지 — 첫 30분이 자리 전체를 결정합니다
            </h2>
            <p>
              강남 가라오케에서 손님의 만족도는 사실상 첫 30분 안에
              결정됩니다. 룸 배정이 매끄러운가, 견적이 재확인되는가,
              초이스가 정직하게 진행되는가. 이 세 관문을 통과하면 그날
              자리는 거의 성공입니다. 반대로 이 구간에서 어물쩍 넘어가는
              집은 뒤로 갈수록 계산이 이상해집니다. 그래서 저희는 이
              구간의 절차를 아예 규정으로 못 박아 두고 있습니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-karaoke-room-assign.webp"
                alt="강남 가라오케 룸 배정 — 예약 시점에 세팅을 마친 전용 룸, 대기 없는 입장"
              />
            </div>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              예약 확인과 룸 배정 — 대기 없는 입장이 기본값입니다
            </h3>
            <p>
              예약하신 성함 한 마디면 끝납니다. 프런트에서 신원을 캐묻거나
              일행을 복도에 세워 두는 일은 없습니다. 예약 시점에 이미 인원과
              자리 성격에 맞는 룸을 잡아 두기 때문입니다. 도착 예정 시각보다
              늦으시는 경우에도 미리 전화 한 통만 주시면 룸은 그대로
              유지됩니다. 당일 워크인(예약 없는 방문)도 받습니다만, 금요일과
              토요일 피크 시간대에는 룸이 차 있을 수 있으니 이동 중에라도
              전화로 확인하고 오시는 편이 확실합니다.
            </p>
            <p>
              룸에 앉으시면 주류 세팅 전에 제가 직접 들어가 전화로 안내드린
              총액을 구두로 한 번 더 확인해 드립니다. 이 절차를 두는 이유는
              단순합니다. <strong>세팅이 시작된 뒤에 가격 이야기를 꺼내는
              것 자체가 손님을 불리하게 만드는 구조</strong>이기 때문입니다.
              술이 열리기 전에 숫자를 확정해야 손님이 편하게 노실 수
              있습니다.
            </p>

            <h4 className="mb-3 mt-9 text-lg font-bold text-ivory">
              룸 등급은 인원수 기준으로만 나눕니다 — 이름값 프리미엄은 없습니다
            </h4>
            <p>
              업장마다 룸에 온갖 화려한 이름을 붙여 등급을 나누지만, 저희
              기준은 하나입니다. 몇 분이 앉으시는가. 2~4인 스탠다드 룸,
              5~8인 미들 룸, 9인 이상 라지 룸으로 나뉘고, 룸 크기에 따라
              달라지는 것은 룸티(룸 차지) 하나뿐입니다. 같은 등급 룸 안에서
              위치나 인테리어를 이유로 웃돈을 받지 않습니다. 모든 룸은 동일한
              음향 설비와 방음 시공, 독립 환기 시스템을 갖추고 있어서 어떤
              룸에 배정되셔도 조건은 같습니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              초이스 룸 진행 — 재초이스에 횟수 제한을 두지 않는 이유
            </h3>
            <p>
              세팅이 끝나면 초이스가 시작됩니다. 파트너들이 룸으로 입장해
              간단히 인사를 나누고, 손님은 함께할 파트너를 직접 지목하십니다.
              여기까지는 어느 집이나 같습니다. 차이는 그다음입니다. 첫 판에서
              마음에 드는 분이 없을 때 <strong>다음 판을 요청하는 일이
              눈치 볼 일인가 아닌가.</strong> 저희 집에서는 아닙니다.
              재초이스는 손님의 당연한 권리이고, 저희 직원 누구도 표정으로든
              말로든 재촉하지 않습니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-karaoke-choice-room.webp"
                alt="강남 가라오케 초이스 룸 — 파트너 입장 전 세팅이 끝난 하이엔드 룸 내부"
              />
            </div>
            <p>
              한 가지 실무 조언을 드리자면, 초이스에서 외모만 보시는 것보다
              그날 자리의 성격을 기준으로 고르시는 편이 만족도가 높습니다.
              접대 자리라면 대화를 받쳐 주는 파트너가, 지인 모임이라면 분위기를
              끌어올리는 파트너가 자리를 살립니다. 어떤 기준으로 고르셔야 할지
              애매하면 제게 물어보십시오. 그날 출근한 라인업을 가장 잘 아는
              사람이 저이니, 자리 성격만 말씀해 주시면 후보를 추려
              드리겠습니다.
            </p>
          </FadeUp>
        </section>

        <div className="gold-divider my-16" />

        {/* H2 - 2 */}
        <section className="prose-room">
          <FadeUp>
            <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-ivory md:text-3xl">
              자리 운영의 뼈대 — 시간제, 연장, 그리고 사람의 역할
            </h2>
            <p>
              초이스가 끝나면 본 자리가 시작됩니다. 이 구간에서 업장의
              실력이 드러납니다. 시간 관리가 흐리멍덩한 집은 연장 시비가
              생기고, 직원 동선이 엉킨 집은 술과 얼음이 늦습니다. 저희가
              시간과 사람을 어떻게 운용하는지 그대로 적습니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              시간 운영 — 남은 시간을 먼저 알려 드리는 집은 많지 않습니다
            </h3>
            <p>
              기본 이용 시간은 세팅 완료 시점부터 계산합니다. 초이스에 시간이
              오래 걸렸다고 그만큼 손님 시간이 깎이는 구조가 아니라는
              뜻입니다. 그리고 마감 20분 전, 제가 룸에 들어가 남은 시간을
              먼저 고지합니다. 연장 여부는 그 자리에서 손님이 결정하시고,
              연장 시 추가되는 금액도 그 자리에서 확정해 드립니다. 시간이
              끝났는데 슬그머니 새 술이 들어와 있는 식의 운영은 저희 집에는
              없습니다. 연장은 언제나 <em>손님의 선택</em>이지 업장의 매출
              작전이 아니어야 합니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-karaoke-system-stage.webp"
                alt="강남 가라오케 본 자리 진행 — 시간제 운영 속에서 노래와 대화가 이어지는 룸"
              />
            </div>
            <p>
              시간대별 요금이 어떻게 다른지 — 이른바 1부와 2부의 구분, 각
              시간대의 주대 차이 — 는 <Link href="/price">주대 정찰표</Link>에
              표로 정리해 두었습니다. 시간대를 잘 고르시는 것만으로도 같은
              예산에서 자리의 질이 달라집니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              담당 실장과 웨이터 — 룸 밖에서 자리를 지키는 사람들
            </h3>
            <p>
              담당 실장은 예약부터 마감까지 그 자리의 총책임자입니다. 견적
              고지, 룸 배정, 초이스 진행, 시간 고지, 계산까지 전 과정을 한
              사람이 책임지기 때문에 &lsquo;아까 그분은 그렇게 말했는데요&rsquo;
              같은 떠넘기기가 발생하지 않습니다. 전담 웨이터는 룸 바로 앞에서
              대기하며 얼음, 음료, 안주 리필을 처리합니다. 호출벨을 누르신 뒤
              직원이 오기까지의 시간을 내부적으로 재고 있을 만큼, 저희는 이
              동선을 서비스의 핵심으로 봅니다.
            </p>
            <p>
              한 가지 당부드릴 것은, 자리에서 불편한 점이 있으면 그 자리에서
              제게 말씀해 달라는 것입니다. 파트너 교체든, 음향 문제든, 옆
              룸 소음이든, 현장에서 바로잡을 수 있는 문제를 참고 넘기시면
              그날 자리만 손해입니다. 항의가 아니라 요청이고, 요청을 처리하는
              것이 제 일입니다.
            </p>
          </FadeUp>
        </section>

        <div className="gold-divider my-16" />

        {/* H2 - 3 */}
        <section className="prose-room">
          <FadeUp>
            <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-ivory md:text-3xl">
              라인업 관리와 안전 규정 — 보이지 않는 곳의 시스템이 진짜입니다
            </h2>
            <p>
              손님 눈에 보이는 절차는 여기까지지만, 시스템의 절반은 보이지
              않는 곳에서 돌아갑니다. 라인업이 어떻게 유지되는지, 손님의
              신상과 안전이 어떻게 다뤄지는지. 이 부분을 공개하는 업장은
              드물지만, 정직을 간판으로 걸었으니 여기까지 적겠습니다.
            </p>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              출근부 관리 — 요일 편차를 줄이는 것이 라인업 관리의 전부입니다
            </h3>
            <p>
              &lsquo;주말에만 물이 좋다&rsquo;는 말이 나오는 집은 평일
              라인업 관리에 실패한 집입니다. 저희는 요일별 출근 인원의
              하한선을 정해 두고, 평일에도 초이스판이 두 판 이상 돌 수 있는
              인원을 유지합니다. 오늘 출근 라인업이 궁금하시면 전화로
              물어보시면 됩니다. 과장 없이, 그날 실제 인원 기준으로
              말씀드립니다. 없는 인원을 있다고 말해 손님을 부르는 것은 이
              바닥에서 가장 빨리 신용을 잃는 길입니다.
            </p>
            <div className="my-9">
              <Photo
                src="/images/gangnam-karaoke-lineup-bar.webp"
                alt="강남 가라오케 라인업 관리 — 요일 편차 없이 유지되는 상시 출근부"
              />
            </div>
          </FadeUp>

          <FadeUp>
            <h3 className="mb-4 mt-12 font-serif text-xl font-bold text-champagne md:text-2xl">
              손님의 신상과 안전 — 기록하지 않는 것이 원칙입니다
            </h3>
            <p>
              예약에 필요한 것은 성함(가명 무방)과 인원, 시간이 전부입니다.
              방문 기록을 마케팅에 쓰거나 외부에 남기지 않으며, 주차는 건물
              내 발렛으로 처리되어 동선이 외부에 노출되지 않습니다. 대리운전
              연결까지가 저희가 책임지는 마지막 절차입니다. 조용히 오셔서
              조용히 가시는 것 — 하이엔드 룸의 품격은 결국 이 한 줄로
              요약됩니다.
            </p>
            <p>
              시스템은 여기까지입니다. 남은 것은 숫자, 즉 비용입니다. 항목별
              구성과 시간대별 차이는 <Link href="/price">주대 정찰표</Link>에서
              확인하시고, 읽으신 뒤 궁금한 점은{" "}
              <Link href="/contact">예약 상담 페이지</Link>의 절차대로 문의
              주시면 됩니다. 어느 쪽이든, 전화를 받는 사람은 이 글을 쓴
              저입니다.
            </p>
          </FadeUp>
        </section>

        <FadeUp className="mt-16">
          <div className="glass-card flex flex-col items-center gap-6 p-10 text-center md:p-14">
            <ShieldCheck className="h-8 w-8 text-champagne" aria-hidden />
            <p className="font-serif text-xl font-bold leading-snug text-ivory md:text-2xl">
              읽으신 시스템 그대로 진행됩니다 — 다르면 그 자리에서 따지십시오
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CallButton label="담당 실장 다이렉트 연결" />
              <CallButton label="오늘의 출근부 확인" variant="outline" />
            </div>
          </div>
        </FadeUp>
      </article>
    </main>
  );
}
