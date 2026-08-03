# 강남 가라오케 — 정직한 실장 (SEO 멀티 페이지 사이트)

Next.js 14 App Router 기반, `강남 가라오케` 메인 키워드 SEO 최적화 사이트.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 프로덕션 빌드
```

## 구조

| 경로 | 내용 |
| --- | --- |
| `/` | 소개 — 상권 유형 분석 + 정직 실장 3원칙 (5,000자+) |
| `/system` | 시스템 — 입장→초이스→운영→마감 절차 공개 (5,000자+) |
| `/price` | 주대 정찰표 — 2026년 시세 반영 가격표 + 총액 예시 (5,000자+) |
| `/contact` | 예약 상담 — 절차·규정·FAQ (FAQPage 스키마) (5,000자+) |

## SEO 구성 요소

- 시맨틱 HTML: `main / article / section`, H1→H2→H3→H4 순차 계층
- JSON-LD: `NightClub`(LocalBusiness 하위), `BreadcrumbList`(전 페이지), `FAQPage`(/contact)
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/icon.svg`(파비콘)
- 페이지별 canonical / OpenGraph / Twitter 메타
- 본문 문맥형 내부 링크(페이지당 3회 이상)
- `next/font` (Noto Serif KR + Noto Sans KR)

## 배포 전 수정할 것

- `lib/site.ts` 의 `SITE_URL` 을 실제 도메인으로 교체 (canonical / sitemap / JSON-LD 에 일괄 반영됨)
- 전화번호는 `lib/site.ts` 의 `PHONE_TEL` 한 곳에서 관리 (화면에는 숫자 미노출)
