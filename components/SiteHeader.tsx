"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Signature } from "@/components/brand";
import { Countdown } from "@/components/Countdown";
import { festival } from "@/lib/festival";

const NAV = [
	{ href: "/about", label: "소개", en: "About" },
	{ href: "/program", label: "프로그램", en: "Program" },
	{ href: "/visit", label: "방문안내", en: "Visit" },
	{ href: "/brand", label: "브랜드", en: "Brand" },
	{ href: "/bookmark", label: "북마크", en: "Bookmark" },
];

export function SiteHeader() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-ink/10 bg-base/85 backdrop-blur">
			<div className="bg-ink text-paper">
				<div className="mx-auto flex max-w-6xl items-center gap-2.5 px-5 py-1.5 font-display text-[11px] uppercase tracking-[0.16em]">
					<span className="shrink-0 text-amber">
						{festival.periodEn}
					</span>
					<span aria-hidden className="shrink-0 text-paper/30">
						/
					</span>
					<span className="truncate text-paper/75">
						{festival.sloganKo} — {festival.sloganEn}
					</span>
					<span className="ml-auto shrink-0 rounded-full bg-paper/10 px-2 py-0.5">
						<Countdown ribbon />
					</span>
				</div>
			</div>
			<div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
				<Link
					href="/"
					className="text-ink"
					aria-label="춘천마임축제 홈"
				>
					<Signature className="text-lg" />
				</Link>

				<nav className="hidden items-center gap-1 md:flex">
					{NAV.map((item) => {
						const active = pathname === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}
								className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
									active
										? "bg-ink text-paper"
										: "text-ink/75 hover:bg-ink/10 hover:text-ink"
								}`}
							>
								{item.label}
							</Link>
						);
					})}
					<Link
						href="/app"
						className="ml-2 rounded-full bg-amber px-4 py-2 text-sm font-bold text-ink hover:bg-amber/90"
					>
						앱 열기
					</Link>
				</nav>

				<button
					type="button"
					className="md:hidden"
					aria-label="메뉴 열기"
					aria-expanded={open}
					onClick={() => setOpen((v) => !v)}
				>
					<svg
						viewBox="0 0 24 24"
						className="h-7 w-7"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						{open ? (
							<path
								d="M6 6l12 12M18 6L6 18"
								strokeLinecap="round"
							/>
						) : (
							<path
								d="M4 7h16M4 12h16M4 17h16"
								strokeLinecap="round"
							/>
						)}
					</svg>
				</button>
			</div>

			{open && (
				<nav className="border-t border-ink/10 px-5 py-3 md:hidden">
					{NAV.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setOpen(false)}
							className="flex items-center justify-between rounded-lg px-3 py-3 text-base hover:bg-ink/10"
						>
							<span>{item.label}</span>
							<span className="text-xs text-ink/40">
								{item.en}
							</span>
						</Link>
					))}
					<Link
						href="/app"
						onClick={() => setOpen(false)}
						className="mt-2 block rounded-lg bg-amber px-3 py-3 text-center text-base font-bold text-ink"
					>
						앱 열기 · Open App
					</Link>
				</nav>
			)}
		</header>
	);
}
