/** 축제장 개념 배치도 (추상). 실제 좌표가 아닌 관계도. */
const POINTS: [number, number, string][] = [
	[90, 120, "1 축제극장 몸짓"],
	[170, 90, "2 캠프페이지"],
	[225, 150, "3 브라운5번가"],
	[130, 185, "4 공지천"],
	[255, 205, "5 국립춘천박물관"],
	[60, 215, "6 남이섬(셔틀)"],
];

export function VenueMap({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 320 260"
			className={className}
			role="img"
			aria-label="축제장 개념 배치도"
		>
			<path
				d="M20 150c40-60 90-40 140-30s110-40 140 10-40 90-110 100S-20 210 20 150Z"
				fill="#1e6f8e"
				opacity="0.18"
			/>
			<text x="60" y="60" fontSize="11" fill="#f6f2e9" opacity="0.5">
				의암호 · Uiam Lake
			</text>
			{POINTS.map(([x, y, label]) => (
				<g key={label}>
					<circle cx={x} cy={y} r="6" fill="#ffb627" />
					<text x={x + 12} y={y + 4} fontSize="10" fill="#f6f2e9">
						{label}
					</text>
				</g>
			))}
		</svg>
	);
}
