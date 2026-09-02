import type { Metadata } from "next";
import Link from "next/link";
import { AppTabBar } from "@/components/AppTabBar";
import { Countdown } from "@/components/Countdown";
import { MimeSymbol } from "@/components/brand";
import { festival } from "@/lib/festival";

export const metadata: Metadata = {
	title: "모바일 앱",
	description: `${festival.titleKo} 공식 모바일 앱 — 프로그램표, 축제장 지도, 저장한 공연.`,
};

export default function AppLayout({ children }: LayoutProps<"/app">) {
	return (
		<div className="mx-auto flex min-h-dvh max-w-md flex-col bg-base">
			<header className="sticky top-0 z-40 flex items-center justify-between border-b border-ink/10 bg-base/95 px-4 py-3 backdrop-blur">
				<Link href="/app" className="flex items-center gap-2">
					<MimeSymbol className="h-7 w-7 text-ink" />
					<span className="text-sm font-black leading-none">
						춘천마임축제
						<span className="block font-display text-[10px] font-normal tracking-[0.14em] text-amber">
							2026 · OFFICIAL APP
						</span>
					</span>
				</Link>
				<Countdown compact />
			</header>

			<main className="flex-1 px-4 py-5">{children}</main>

			<div className="border-t border-ink/10 px-4 py-3 text-center">
				<Link href="/" className="text-xs text-ink/45 hover:text-amber">
					← 홍보 웹사이트로 돌아가기
				</Link>
			</div>

			<AppTabBar />
		</div>
	);
}
