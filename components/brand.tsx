import { festival } from "@/lib/festival";

type SvgProps = {
	className?: string;
	title?: string;
};

/**
 * 심벌 — "무언의 얼굴 (Mask of Silence)"
 * 말풍선(대화)과 마임 분장 얼굴의 결합. 말풍선 안은 비어 있고,
 * 대신 눈빛 하나와 그려진 눈물로 '말 없이 건네는 말'을 표현한다.
 * currentColor 를 상속하므로 어디에 놓아도 색이 맞춰진다.
 */
export function MimeSymbol({
	className,
	title = "춘천마임축제 심벌",
}: SvgProps) {
	return (
		<svg
			viewBox="0 0 100 100"
			role="img"
			aria-label={title}
			className={className}
			fill="none"
		>
			<path
				d="M50 8c23.2 0 42 16.1 42 36 0 19.9-18.8 36-42 36-4.4 0-8.7-.6-12.6-1.6L18 92l4.4-19.2C13.7 66.2 8 55.7 8 44 8 24.1 26.8 8 50 8Z"
				stroke="currentColor"
				strokeWidth="6"
				strokeLinejoin="round"
			/>
			{/* 감은 눈 (왼쪽) */}
			<path
				d="M30 40c3.2 4 8.8 4 12 0"
				stroke="currentColor"
				strokeWidth="5"
				strokeLinecap="round"
			/>
			{/* 뜬 눈 (오른쪽) — 관객을 바라보는 눈빛 */}
			<circle cx="64" cy="40" r="4.5" fill="currentColor" />
			{/* 그려진 눈물 */}
			<path
				d="M64 48c-3 5-5 8-5 11a5 5 0 0 0 10 0c0-3-2-6-5-11Z"
				fill="currentColor"
			/>
			{/* 다문 입 */}
			<path
				d="M40 60c6 3.5 14 3.5 20 0"
				stroke="currentColor"
				strokeWidth="5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

/** 국·영문 로고타입 (워드마크) */
export function Wordmark({ className }: SvgProps) {
	return (
		<span className={className}>
			<span className="block font-sans font-black leading-none tracking-tight">
				춘천마임축제
			</span>
			<span className="mt-1 block font-display text-[0.62em] uppercase leading-none tracking-[0.22em] text-amber">
				Chuncheon Mime Festival
			</span>
		</span>
	);
}

/**
 * 시그니처 — 심벌 + 워드마크 + 연도 잠금 조합.
 * 가로형 기본형. 인쇄물·헤더·푸터 어디서나 이 비율을 유지한다.
 */
export function Signature({
	className,
	title = `${festival.titleKo} 시그니처`,
}: SvgProps) {
	return (
		<span
			className={`inline-flex items-center gap-3 ${className ?? ""}`}
			aria-label={title}
		>
			<MimeSymbol
				className="h-[1.9em] w-[1.9em] shrink-0"
				title={title}
			/>
			<span className="flex flex-col">
				<span className="font-sans text-[1em] font-black leading-none tracking-tight">
					춘천마임축제
				</span>
				<span className="mt-[0.35em] font-display text-[0.5em] uppercase leading-none tracking-[0.2em] text-amber">
					Chuncheon Mime Festival · 2026
				</span>
			</span>
		</span>
	);
}
