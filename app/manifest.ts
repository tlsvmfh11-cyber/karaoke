import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "강남 가라오케",
    description:
      "주대 정찰제로 운영하는 강남 정통 하이엔드 룸 — 담당 실장 직영 안내 페이지",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0A10",
    theme_color: "#0B0A10",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
