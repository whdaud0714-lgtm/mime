import type { MetadataRoute } from "next";
import { festival } from "@/lib/festival";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${festival.titleKo} · ${festival.sloganKo}`,
    short_name: "춘천마임축제",
    description: `${festival.editionKo} ${festival.titleKo} 공식 앱 — D-day, 프로그램표, 축제장 지도, 저장·공유.`,
    lang: "ko",
    start_url: "/app",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0e0e12",
    theme_color: "#0e0e12",
    categories: ["events", "entertainment", "travel"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      {
        src: "/icon-maskable.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      { name: "프로그램표", url: "/app/schedule" },
      { name: "축제장 지도", url: "/app/map" },
      { name: "저장함", url: "/app/saved" },
    ],
  };
}
