"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
	{
		href: "/app",
		label: "홈",
		icon: (
			<path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" />
		),
	},
	{
		href: "/app/schedule",
		label: "프로그램",
		icon: <path d="M4 6h16M4 12h16M4 18h10" />,
	},
	{
		href: "/app/map",
		label: "지도",
		icon: <path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2zm0 0v16m6-14v16" />,
	},
	{
		href: "/app/saved",
		label: "저장",
		icon: <path d="M6 3h12v18l-6-4-6 4z" />,
	},
];

export function AppTabBar() {
	const pathname = usePathname();

	return (
		<nav className="sticky bottom-0 z-40 border-t border-ink/10 bg-base/95 backdrop-blur">
			<ul className="mx-auto flex max-w-md">
				{TABS.map((t) => {
					const active =
						t.href === "/app"
							? pathname === "/app"
							: pathname.startsWith(t.href);
					return (
						<li key={t.href} className="flex-1">
							<Link
								href={t.href}
								className={`flex flex-col items-center gap-1 py-2.5 text-[11px] ${
									active ? "text-amber" : "text-ink/55"
								}`}
							>
								<svg
									viewBox="0 0 24 24"
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									{t.icon}
								</svg>
								{t.label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
