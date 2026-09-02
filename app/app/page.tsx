import Image from "next/image";
import Link from "next/link";
import { Countdown } from "@/components/Countdown";
import { InstallPrompt } from "@/components/InstallPrompt";
import { SaveButton } from "@/components/share";
import { Mascot } from "@/components/Mascot";
import { Confetti } from "@/components/Motifs";
import { festival, kindTone, programs } from "@/lib/festival";
import { photos } from "@/lib/photos";

export default function AppHome() {
	const highlights = programs
		.filter((p) => p.kind === "개·폐막" || p.kind === "대표")
		.slice(0, 3);

	return (
		<div className="space-y-6">
			<section className="relative overflow-hidden rounded-3xl border border-ink/12 p-6 text-center">
				<Image
					src={photos.waterOpening.img}
					alt=""
					fill
					priority
					sizes="(min-width: 448px) 448px, 100vw"
					className="object-cover opacity-25"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-base/75 via-base/85 to-base" />
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(165,99,0,0.16),transparent_55%),radial-gradient(circle_at_bottom,rgba(25,99,128,0.12),transparent_55%)]" />
				<Confetti count={16} />
				<div className="relative">
					<Mascot className="mx-auto h-32 w-28" />
					<p className="mt-3 text-sm text-ink/70">
						미모(MIMO)가 기다리고 있어요
					</p>
					<h1 className="mt-1 text-xl font-black leading-snug">
						{festival.sloganKo}
					</h1>
					<div className="mt-5 flex justify-center">
						<Countdown />
					</div>
					<p className="mt-4 text-xs text-ink/55">
						{festival.periodKo}
						<br />
						{festival.placeKo}
					</p>
				</div>
			</section>

			<section>
				<div className="flex items-center justify-between">
					<h2 className="font-display text-sm uppercase tracking-[0.16em] text-amber">
						놓치면 아쉬운 3
					</h2>
					<Link href="/app/schedule" className="text-xs text-ink/50">
						전체 →
					</Link>
				</div>
				<ul className="mt-3 space-y-3">
					{highlights.map((p) => (
						<li
							key={p.slug}
							className="rounded-2xl border border-ink/12 bg-card p-4"
						>
							<span
								className={`font-display text-[11px] uppercase tracking-[0.16em] ${kindTone[p.kind]}`}
							>
								{p.kind}
							</span>
							<h3 className="mt-1 font-bold">{p.nameKo}</h3>
							<p className="mt-1 text-xs text-ink/55">
								{p.when} · {p.where}
							</p>
						</li>
					))}
				</ul>
			</section>

			<section className="grid grid-cols-2 gap-3">
				<Link
					href="/app/map"
					className="rounded-2xl border border-ink/12 bg-card p-4 text-sm font-bold hover:border-amber/60"
				>
					축제장 지도
					<span className="mt-1 block text-xs font-normal text-ink/50">
						6개 공간 · 셔틀
					</span>
				</Link>
				<Link
					href="/bookmark"
					className="rounded-2xl border border-ink/12 bg-card p-4 text-sm font-bold hover:border-amber/60"
				>
					공유하기
					<span className="mt-1 block text-xs font-normal text-ink/50">
						QR · 링크 · 배경화면
					</span>
				</Link>
			</section>

			<SaveButton className="w-full justify-center" />

			<InstallPrompt />
		</div>
	);
}
