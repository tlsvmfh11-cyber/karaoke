import type { Metadata, Viewport } from "next";
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingCall } from "@/components/call-button";
import { BUSINESS_JSONLD, WEBSITE_JSONLD, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const serif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "강남 가라오케 | 주대 정찰제로 운영하는 정통 하이엔드 룸 — 담당 실장 직영",
    template: "%s | 강남 가라오케 정직한 실장",
  },
  description:
    "강남 가라오케 간판을 단 정통 하이엔드 룸싸롱. 부풀린 광고 없이 주대 정찰제, 거짓 없는 초이스 룸 시스템, 압도적인 사이즈의 파트너 라인업을 담당 실장이 직접 설명합니다.",
  keywords: [
    "강남 가라오케",
    "강남 룸싸롱",
    "강남 초이스 룸",
    "강남 하이엔드 룸",
    "강남 가라오케 주대",
    "강남 가라오케 시스템",
    "강남 가라오케 가격",
    "강남 가라오케 정찰제",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "강남 가라오케 | 주대 정찰제 정통 하이엔드 룸 — 담당 실장 직영",
    description:
      "부풀린 광고 없이 주대 정찰제와 거짓 없는 초이스 시스템으로 운영하는 강남 가라오케. 담당 실장이 직접 쓰는 소개·시스템·가격·예약 안내.",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "강남 가라오케 하이엔드 VIP 룸 전경",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "강남 가라오케 | 주대 정찰제 정통 하이엔드 룸",
    description:
      "강남 가라오케 간판을 단 정통 하이엔드 룸. 정찰 주대와 거짓 없는 초이스 시스템, 담당 실장 직영 안내.",
    images: ["/og-cover.jpg"],
  },
  verification: {
    google: "rD3o6pagtY2xrkEcz61cYgXugg2B5h_LJ-KbIEYT5TY",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0A10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans">
        <script src="/shatamilo.js" async />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
        />
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
        <FloatingCall />
      </body>
    </html>
  );
}
