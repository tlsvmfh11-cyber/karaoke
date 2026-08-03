import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";
import { CallButton } from "@/components/call-button";

export default function NotFound() {
  return (
    <main className="container flex min-h-[60vh] max-w-2xl flex-col items-center justify-center py-24 text-center">
      <p className="font-serif text-7xl font-black text-champagne-dim/40">
        404
      </p>
      <h1 className="mt-6 font-serif text-2xl font-bold text-ivory md:text-3xl">
        찾으시는 페이지가 없습니다
      </h1>
      <p className="mt-4 leading-relaxed text-ivory-dim">
        주소가 바뀌었거나 잘못 입력된 것 같습니다. 아래에서 원하시는
        안내로 바로 이동하시거나, 급하시면 전화가 가장 빠릅니다.
      </p>
      <nav
        aria-label="주요 페이지 바로가기"
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl border border-champagne-dim/50 px-5 py-2.5 text-sm font-medium text-champagne transition-colors hover:border-champagne hover:bg-champagne/10"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-8">
        <CallButton label="담당 실장 다이렉트 연결" />
      </div>
    </main>
  );
}
