"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, PHONE_TEL, SITE_NAME } from "@/lib/site";

const DISCLAIMERS: Record<string, string> = {
  "/":
    "본 페이지에 담긴 모든 글은 강남 지역 가라오케 문화와 이용 절차를 이해하기 쉽게 풀어 쓴 안내성 콘텐츠이며, 특정 영업 행위를 권유하거나 알선할 목적과는 무관함을 분명히 밝힙니다. 기재된 정보는 작성 시점의 상권 동향을 바탕으로 하므로 실제와 차이가 있을 수 있습니다.",
  "/system":
    "여기에 정리된 시스템 설명은 어디까지나 정보 전달을 위한 참고 자료입니다. 이 문서는 그 어떤 형태의 영업 행위와도 무관하게 작성되었으며, 방문과 이용 여부에 대한 판단과 책임은 전적으로 성인이 된 독자 본인에게 있습니다.",
  "/price":
    "이 가격표는 강남 상권의 통상적인 시세 흐름을 독자가 가늠할 수 있도록 돕는 순수 정보성 자료일 뿐, 영업 행위나 거래의 청약과는 아무런 관련이 없습니다. 실제 비용은 시점·구성·인원에 따라 달라질 수 있으므로 반드시 사전 확인이 필요합니다.",
  "/contact":
    "본 상담 안내 문서는 성인 이용자의 알 권리를 위해 절차를 설명하는 콘텐츠로서 제작되었습니다. 영업을 목적으로 한 권유·알선 행위와 무관하며, 문의와 방문은 관련 법령을 준수하는 범위 안에서 개인의 자유로운 판단에 따라 이루어져야 합니다.",
  "/blog":
    "이용 가이드에 실린 모든 글은 강남 지역 밤 문화와 이용 절차에 대한 이해를 돕기 위한 순수 정보성 콘텐츠입니다. 특정 영업 행위의 권유·알선과 무관하게 작성되었으며, 기재된 내용은 작성 시점의 상권 동향을 바탕으로 하므로 실제와 차이가 있을 수 있습니다. 이용 여부의 판단과 책임은 성인이 된 독자 본인에게 있습니다.",
};

export function Footer() {
  const pathname = usePathname();
  const disclaimer =
    DISCLAIMERS[pathname] ??
    (pathname.startsWith("/blog") ? DISCLAIMERS["/blog"] : DISCLAIMERS["/"]);

  return (
    <footer className="mt-24 border-t border-obsidian-line/60 bg-obsidian-soft/60">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-lg font-bold text-champagne">
              {SITE_NAME}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory-faint">
              간판은 가라오케, 본질은 정통 하이엔드 룸. 부풀린 광고 대신
              정찰 주대와 있는 그대로의 시스템 설명으로 손님을 대하는
              담당 실장의 공식 안내 페이지입니다.
            </p>
          </div>
          <nav aria-label="푸터 메뉴">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-champagne-dim">
              페이지
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory-dim transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-champagne-dim">
              상담
            </p>
            <p className="text-sm leading-relaxed text-ivory-dim">
              연중무휴 · 저녁 6시 ~ 익일 새벽 6시
            </p>
            <Link
              href={PHONE_TEL}
              className="mt-4 inline-flex h-11 items-center justify-center rounded-xl border border-champagne-dim/60 px-6 text-sm font-semibold text-champagne transition-colors hover:border-champagne hover:bg-champagne/10"
            >
              투명한 견적 문의
            </Link>
          </div>
        </div>

        <div className="gold-divider my-10" />

        <p className="text-xs leading-relaxed text-ivory-faint/80">
          {disclaimer}
        </p>
        <p className="mt-4 text-xs text-ivory-faint/60">
          © 2026 {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
