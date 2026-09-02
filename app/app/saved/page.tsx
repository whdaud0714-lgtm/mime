"use client";

import Link from "next/link";
import { useState } from "react";
import { Countdown } from "@/components/Countdown";
import { SaveButton, ShareBar, useSaved } from "@/components/share";
import { useClientValue } from "@/lib/use-client-value";
import { festival } from "@/lib/festival";

type Perm = NotificationPermission | "unsupported";

export default function AppSaved() {
	const { saved } = useSaved();

	const initialPerm = useClientValue<Perm>(
		() =>
			typeof Notification === "undefined"
				? "unsupported"
				: Notification.permission,
		"default",
	);
	const [requested, setRequested] = useState<Perm | null>(null);
	const perm = requested ?? initialPerm;

	const askNotify = async () => {
		if (typeof Notification === "undefined") return;
		const p = await Notification.requestPermission();
		setRequested(p);
		if (p === "granted") {
			new Notification(festival.titleKo, {
				body: "개막 D-30, D-7, 개막일 아침에 알려드릴게요.",
			});
		}
	};

	return (
		<div className="space-y-6">
			<h1 className="text-xl font-black">저장함</h1>

			{saved ? (
				<>
					<section className="rounded-3xl border border-amber/40 bg-[radial-gradient(ellipse_at_top,rgba(255,182,39,0.16),transparent_65%)] p-6 text-center">
						<p className="font-display text-sm uppercase tracking-[0.16em] text-amber">
							Saved
						</p>
						<h2 className="mt-2 text-lg font-black">
							{festival.editionKo} {festival.titleKo}
						</h2>
						<p className="mt-1 text-xs text-ink/55">
							{festival.periodKo}
						</p>
						<div className="mt-4 flex justify-center">
							<Countdown />
						</div>
						<div className="mt-5">
							<SaveButton className="w-full justify-center" />
						</div>
					</section>

					<section className="rounded-2xl border border-ink/12 bg-card p-5">
						<h3 className="font-bold">개막 알림</h3>
						<p className="mt-1 text-sm text-ink/65">
							{perm === "granted"
								? "알림이 켜져 있습니다. 개막 전에 알려드릴게요."
								: perm === "unsupported"
									? "이 브라우저는 알림을 지원하지 않습니다."
									: "D-30 · D-7 · 개막일 아침 알림을 받아보세요."}
						</p>
						{perm !== "granted" && perm !== "unsupported" && (
							<button
								type="button"
								onClick={askNotify}
								className="mt-3 rounded-full bg-amber px-4 py-2 text-sm font-bold text-ink"
							>
								알림 켜기
							</button>
						)}
					</section>

					<section className="rounded-2xl border border-ink/12 bg-card p-5">
						<h3 className="font-bold">친구에게 보내기</h3>
						<p className="mt-1 text-sm text-ink/60">
							저장한 링크를 공유하면 친구도 바로 D-day를 볼 수
							있어요.
						</p>
						<ShareBar className="mt-3" />
					</section>

					<div className="grid grid-cols-2 gap-3">
						<Link
							href="/app/schedule"
							className="rounded-2xl border border-ink/12 bg-card p-4 text-sm font-bold hover:border-amber/60"
						>
							프로그램표
						</Link>
						<Link
							href="/app/map"
							className="rounded-2xl border border-ink/12 bg-card p-4 text-sm font-bold hover:border-amber/60"
						>
							축제장 지도
						</Link>
					</div>
				</>
			) : (
				<section className="rounded-3xl border border-ink/12 bg-card p-8 text-center">
					<p className="text-sm text-ink/70">
						아직 저장하지 않았어요. 저장하면 여기에서 D-day와 알림을
						관리할 수 있습니다.
					</p>
					<div className="mt-5 flex justify-center">
						<SaveButton />
					</div>
				</section>
			)}
		</div>
	);
}
