"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { InlineScript } from "@/components/InlineScript";
import { useClientValue } from "@/lib/use-client-value";
import { festival } from "@/lib/festival";
import { photos } from "@/lib/photos";

/** 세션당 한 번만 노출 — 넘어간 뒤에는 홈으로 다시 와도 표지를 띄우지 않는다. */
const SEEN_KEY = "mime:intro-seen";

function alreadySeen() {
	try {
		return sessionStorage.getItem(SEEN_KEY) === "1";
	} catch {
		return false;
	}
}

/**
 * 표지(썸네일) 화면 — 홍보 웹의 첫 화면.
 * 공식 포스터를 전체화면으로 먼저 보여주고, ‘들어가기’(또는 아무 곳이나 클릭·Esc)로
 * 현재 랜딩(/)에 진입한다.
 *
 * 서버/첫 렌더는 항상 표지를 그린다(하이드레이션 일치). 이미 본 세션이면
 * 인라인 스크립트가 첫 페인트 전에 감춰 재방문 깜빡임을 없앤다.
 */
export function IntroCover() {
	const id = useId();
	const initiallySeen = useClientValue(alreadySeen, false);
	const [dismissed, setDismissed] = useState(false);
	const [leaving, setLeaving] = useState(false);
	const seen = initiallySeen || dismissed;

	// 표지가 떠 있는 동안 배경 스크롤 잠금 (인라인 스크립트가 이미 잠갔을 수 있음)
	useEffect(() => {
		if (seen) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [seen]);

	const enter = useCallback(() => {
		try {
			sessionStorage.setItem(SEEN_KEY, "1");
		} catch {
			/* 저장 불가 — 이번 세션 동안만 넘어감 */
		}
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			setDismissed(true);
			return;
		}
		setLeaving(true);
		window.setTimeout(() => setDismissed(true), 450);
	}, []);

	useEffect(() => {
		if (seen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") enter();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [seen, enter]);

	if (seen) return null;

	return (
		<div
			id={id}
			suppressHydrationWarning
			className={`fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-ink px-6 py-10 text-paper transition-opacity duration-500 ${
				leaving ? "pointer-events-none opacity-0" : "opacity-100"
			}`}
		>
			<InlineScript
				html={`try{if(sessionStorage.getItem(${JSON.stringify(SEEN_KEY)})==="1"){var n=document.getElementById(${JSON.stringify(
					id,
				)});if(n)n.style.display="none";}else{document.body.style.overflow="hidden";}}catch(e){}`}
			/>

			{/* 무대 조명 느낌의 배경 글로우 */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(165,99,0,0.22),transparent_60%),radial-gradient(circle_at_bottom,rgba(25,99,128,0.16),transparent_55%)]"
			/>

			{/* 배경 아무 곳이나 눌러도 진입 */}
			<button
				type="button"
				aria-label="축제 홈으로 들어가기"
				onClick={enter}
				tabIndex={-1}
				className="absolute inset-0 cursor-default"
			/>

			<div className="pointer-events-none relative flex w-full max-w-sm flex-col items-center text-center">
				<p className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-display text-xs uppercase tracking-[0.24em] text-amber">
					<span>{festival.editionKo}</span>
					<span aria-hidden className="text-paper/30">
						/
					</span>
					<span>{festival.periodEn}</span>
				</p>

				<div className="mt-6 w-[74vw] max-w-[18rem] rotate-1 overflow-hidden rounded-2xl border border-paper/15 shadow-[0_28px_70px_rgba(0,0,0,0.55)]">
					<Image
						src={photos.keyVisual.img}
						alt={photos.keyVisual.alt}
						sizes="(min-width: 640px) 18rem, 74vw"
						placeholder="blur"
						priority
						className="h-auto w-full"
					/>
				</div>

				<h1 className="mt-7 text-3xl font-black leading-tight sm:text-4xl">
					{festival.titleKo}
				</h1>
				<p className="mt-2 text-sm text-paper/70">
					{festival.sloganKo}
					<span aria-hidden className="mx-1.5 text-paper/30">
						·
					</span>
					<span className="text-paper/45">{festival.sloganEn}</span>
				</p>

				<button
					type="button"
					onClick={enter}
					className="group pointer-events-auto mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
				>
					들어가기
					<span
						aria-hidden
						className="transition-transform group-hover:translate-x-0.5"
					>
						→
					</span>
				</button>
				<p className="mt-3 text-[11px] text-paper/40">
					아무 곳이나 눌러도 넘어갑니다
				</p>
			</div>
		</div>
	);
}
