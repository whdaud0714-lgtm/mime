"use client";

import { useEffect, useState } from "react";
import { festival } from "@/lib/festival";

const TARGET = new Date(`${festival.startDate}T00:00:00+09:00`).getTime();
const END = new Date(`${festival.endDate}T23:59:59+09:00`).getTime();
/** 모듈 로드 시점의 대략적 D-day (첫 페인트 폴백용) */
const STATIC_DAYS = Math.max(0, Math.ceil((TARGET - Date.now()) / 86_400_000));

function parts(now: number) {
	const diff = Math.max(0, TARGET - now);
	return {
		days: Math.floor(diff / 86_400_000),
		hours: Math.floor((diff / 3_600_000) % 24),
		minutes: Math.floor((diff / 60_000) % 60),
		seconds: Math.floor((diff / 1000) % 60),
	};
}

const LABELS: Record<string, string> = {
	days: "일",
	hours: "시",
	minutes: "분",
	seconds: "초",
};

const TILE_TONE = ["text-coral", "text-amber", "text-lake", "text-ink"];
const TILE_ACCENT = [
	"border-t-coral/70",
	"border-t-amber/70",
	"border-t-lake/70",
	"border-t-ink/40",
];

export function Countdown({
	compact = false,
	ribbon = false,
}: {
	compact?: boolean;
	ribbon?: boolean;
}) {
	const [now, setNow] = useState<number | null>(null);

	useEffect(() => {
		const tick = () => setNow(Date.now());
		const raf = requestAnimationFrame(tick);
		const id = setInterval(tick, 1000);
		return () => {
			cancelAnimationFrame(raf);
			clearInterval(id);
		};
	}, []);

	// 서버/첫 렌더: 정적 D-day 만 (하이드레이션 불일치 방지)
	if (now === null) {
		if (ribbon) {
			return (
				<span className="font-display tabular-nums text-amber">
					D-{STATIC_DAYS}
				</span>
			);
		}
		return (
			<div className="font-display text-2xl tabular-nums text-amber">
				D-{STATIC_DAYS}
			</div>
		);
	}

	if (now > END) {
		const txt = "다시, 내년 5월 · SEE YOU NEXT MAY";
		return ribbon ? (
			<span className="font-display text-amber">{txt}</span>
		) : (
			<div className="font-display text-2xl text-amber">{txt}</div>
		);
	}

	if (TARGET - now <= 0) {
		const txt = "지금, 축제 중 · NOW ON";
		return ribbon ? (
			<span className="animate-pop inline-block font-display text-coral">
				{txt}
			</span>
		) : (
			<div className="animate-pop inline-block font-display text-2xl text-coral">
				{txt}
			</div>
		);
	}

	const p = parts(now);

	if (ribbon) {
		return (
			<span className="font-display tabular-nums text-amber">
				D-{p.days}
			</span>
		);
	}

	if (compact) {
		return (
			<div className="font-display text-2xl tabular-nums text-amber">
				D-{p.days}
			</div>
		);
	}

	return (
		<ul
			className="flex gap-3 sm:gap-4"
			aria-label="축제 개막까지 남은 시간"
		>
			{(["days", "hours", "minutes", "seconds"] as const).map((k, i) => (
				<li
					key={k}
					className={`flex min-w-[3.6rem] flex-col items-center rounded-xl border border-ink/15 border-t-2 ${TILE_ACCENT[i]} bg-card px-3 py-2`}
				>
					<span
						className={`font-display text-3xl tabular-nums leading-none sm:text-4xl ${TILE_TONE[i]}`}
					>
						{String(p[k]).padStart(2, "0")}
					</span>
					<span className="mt-1 text-xs text-ink/60">
						{LABELS[k]}
					</span>
				</li>
			))}
		</ul>
	);
}
