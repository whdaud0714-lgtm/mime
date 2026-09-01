import type { Metadata, Viewport } from "next";
import { Anton, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { SITE_URL, festival } from "@/lib/festival";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${festival.titleKo} · ${festival.sloganKo}`,
    template: `%s · ${festival.titleKo}`,
  },
  description: `${festival.editionKo} ${festival.titleKo} (${festival.periodKo}). ${festival.taglineKo} 말이 필요 없는 몸의 언어로 국민과 세계인을 잇는 8일간의 축제.`,
  keywords: [
    "춘천마임축제",
    "2026 춘천마임축제",
    "Chuncheon Mime Festival",
    "마임",
    "팬터마임",
    "피지컬시어터",
    "춘천 축제",
    "강원 축제",
    "거리극",
  ],
  authors: [{ name: festival.hostKo }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: festival.titleKo,
    title: `${festival.titleKo} · ${festival.sloganKo}`,
    description: `${festival.periodKo} · ${festival.placeKo}. ${festival.taglineKo}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${festival.titleKo} · ${festival.sloganKo}`,
    description: festival.taglineKo,
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: festival.titleKo,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0e12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${noto.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
