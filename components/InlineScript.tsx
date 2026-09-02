/**
 * 하이드레이션 전, HTML 파싱 단계에서 동기로 실행되는 인라인 스크립트.
 * 서버에서는 실제 실행되도록(text/javascript), 클라이언트 재렌더에서는
 * 무시되도록(text/plain) 타입을 바꾼다. 타입 불일치는 suppressHydrationWarning 로 흡수.
 * (참고: node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md)
 */
export function InlineScript({ html }: { html: string }) {
	return (
		<script
			type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
			suppressHydrationWarning
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}
