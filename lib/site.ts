export const SITE_URL = "https://www.gangnam-jungjik-karaoke.com";

export const SITE_NAME = "강남 가라오케 정직한 실장";

export const PHONE_E164 = "+821023033778";
export const PHONE_TEL = "tel:01023033778";

export const NAV_LINKS = [
  { href: "/", label: "정직한 소개" },
  { href: "/system", label: "시스템 안내" },
  { href: "/price", label: "주대 정찰표" },
  { href: "/contact", label: "예약 상담" },
] as const;

export const BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "NightClub",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  description:
    "강남 가라오케 간판을 단 정통 하이엔드 룸. 주대 정찰제와 거짓 없는 초이스 시스템을 원칙으로 운영하는 담당 실장 직영 안내 페이지.",
  url: SITE_URL,
  telephone: PHONE_E164,
  priceRange: "₩₩₩",
  image: [
    `${SITE_URL}/images/gangnam-karaoke-highend-vip-room.webp`,
    `${SITE_URL}/images/gangnam-room-salon-whisky-lounge.webp`,
    `${SITE_URL}/images/gangnam-karaoke-judae-whisky-set.webp`,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "서울특별시",
    addressRegion: "강남구",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.504198,
    longitude: 127.049004,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "18:00",
      closes: "06:00",
    },
  ],
} as const;

export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "강남 가라오케 주대 정찰제·시스템·초이스 룸 안내 — 담당 실장 직영 공식 페이지",
  inLanguage: "ko-KR",
  publisher: { "@id": `${SITE_URL}/#business` },
} as const;

export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image: [`${SITE_URL}${opts.image}`],
    author: {
      "@type": "Person",
      name: "담당 실장",
      jobTitle: "강남 가라오케 15년 차 담당 실장",
    },
    publisher: { "@id": `${SITE_URL}/#business` },
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
    datePublished: "2026-08-01",
    dateModified: "2026-08-03",
    inLanguage: "ko-KR",
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
