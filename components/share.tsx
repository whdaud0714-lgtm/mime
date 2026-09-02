"use client";

import { useCallback, useState, useSyncExternalStore } from "react";
import { useClientValue } from "@/lib/use-client-value";
import { SITE_URL, festival } from "@/lib/festival";

/* ------------------------------------------------------------------ */
/*  북마크 저장 — 작은 외부 스토어 (localStorage)                        */
/* ------------------------------------------------------------------ */
const SAVE_KEY = "ccmf-2026-saved";
const listeners = new Set<() => void>();

function readSaved(): boolean {
	try {
		return localStorage.getItem(SAVE_KEY) === "1";
	} catch {
		return false;
	}
}

function writeSaved(next: boolean) {
	try {
		if (next) localStorage.setItem(SAVE_KEY, "1");
		else localStorage.removeItem(SAVE_KEY);
	} catch {
		/* 무시 */
	}
	listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
	listeners.add(cb);
	window.addEventListener("storage", cb);
	return () => {
		listeners.delete(cb);
		window.removeEventListener("storage", cb);
	};
}

export function useSaved() {
	const saved = useSyncExternalStore(subscribe, readSaved, () => false);
	const toggle = useCallback(() => writeSaved(!readSaved()), []);
	return { saved, toggle };
}

export function SaveButton({ className }: { className?: string }) {
	const { saved, toggle } = useSaved();

	return (
		<button
			type="button"
			onClick={toggle}
			aria-pressed={saved}
			className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition-colors ${
				saved
					? "border-amber bg-amber text-ink"
					: "border-ink/25 bg-transparent text-ink hover:border-amber hover:text-amber"
			} ${className ?? ""}`}
		>
			<svg
				viewBox="0 0 24 24"
				className="h-4 w-4"
				fill={saved ? "currentColor" : "none"}
				stroke="currentColor"
				strokeWidth="2"
			>
				<path
					d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"
					strokeLinejoin="round"
				/>
			</svg>
			{saved ? "저장됨 · Saved" : "이 축제 저장하기 · Save"}
		</button>
	);
}

/* ------------------------------------------------------------------ */
/*  공유 바                                                             */
/* ------------------------------------------------------------------ */
export function ShareBar({
	url = SITE_URL,
	text = `${festival.titleKo} — ${festival.sloganKo} (${festival.periodKo})`,
	className,
}: {
	url?: string;
	text?: string;
	className?: string;
}) {
	const [copied, setCopied] = useState(false);
	const canNativeShare = useClientValue(
		() =>
			typeof navigator !== "undefined" &&
			typeof navigator.share === "function",
		false,
	);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 1800);
		} catch {
			/* 무시 */
		}
	};

	const nativeShare = async () => {
		try {
			await navigator.share({ title: festival.titleKo, text, url });
		} catch {
			/* 사용자가 취소 */
		}
	};

	const encodedUrl = encodeURIComponent(url);
	const encodedText = encodeURIComponent(text);

	const links = [
		{
			label: "X",
			href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
		},
		{
			label: "Facebook",
			href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
		},
		{
			label: "LINE",
			href: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
		},
	];

	return (
		<div className={`flex flex-wrap items-center gap-2 ${className ?? ""}`}>
			<button
				type="button"
				onClick={copy}
				className="rounded-full border border-ink/25 px-4 py-2 text-sm font-medium hover:border-amber hover:text-amber"
			>
				{copied ? "링크 복사됨!" : "링크 복사"}
			</button>
			{canNativeShare && (
				<button
					type="button"
					onClick={nativeShare}
					className="rounded-full border border-ink/25 px-4 py-2 text-sm font-medium hover:border-amber hover:text-amber"
				>
					공유하기
				</button>
			)}
			{links.map((l) => (
				<a
					key={l.label}
					href={l.href}
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-full border border-ink/25 px-4 py-2 text-sm font-medium hover:border-amber hover:text-amber"
				>
					{l.label}
				</a>
			))}
		</div>
	);
}
