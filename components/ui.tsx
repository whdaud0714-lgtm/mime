import type { ReactNode } from "react";
import { Confetti } from "@/components/Motifs";

export function Container({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div className={`mx-auto w-full max-w-6xl px-5 ${className ?? ""}`}>
			{children}
		</div>
	);
}

export function SectionHeading({
	kicker,
	title,
	desc,
	align = "left",
}: {
	kicker?: string;
	title: ReactNode;
	desc?: ReactNode;
	align?: "left" | "center";
}) {
	return (
		<header
			className={`reveal max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
		>
			{kicker && (
				<p className="font-display text-sm uppercase tracking-[0.24em] text-amber">
					{kicker}
				</p>
			)}
			<h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
				{title}
			</h2>
			{desc && (
				<p className="mt-4 text-base leading-relaxed text-ink/70">
					{desc}
				</p>
			)}
		</header>
	);
}

export function PageHero({
	kicker,
	title,
	desc,
}: {
	kicker: string;
	title: ReactNode;
	desc?: ReactNode;
}) {
	return (
		<section className="relative overflow-hidden border-b border-ink/10 bg-card/70">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(165,99,0,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(25,99,128,0.1),transparent_55%)]" />
			<Confetti count={14} />
			<Container className="relative py-16 sm:py-20">
				<p className="font-display text-sm uppercase tracking-[0.24em] text-amber">
					{kicker}
				</p>
				<h1 className="mt-3 text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl">
					{title}
				</h1>
				{desc && (
					<p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
						{desc}
					</p>
				)}
			</Container>
		</section>
	);
}
