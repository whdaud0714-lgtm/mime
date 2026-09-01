# 2026 춘천마임축제 — 북마크 링크 홍보 프로젝트

말이 필요 없는 몸의 언어로 **춘천 시민 → 대한민국 국민 → 세계인**을 잇는
2026 춘천마임축제 홍보 웹사이트 + 설치형 앱(PWA)입니다.

- 기획서(SWOT · 목표/타겟 · 컨셉/표현전략 · 아이덴티티 가이드): [`docs/brand-strategy.md`](docs/brand-strategy.md)
  또는 사이트 내 `/brand`
- 프레임워크: Next.js 16 (App Router) · React 19 · Tailwind CSS v4
- 축제 정보·프로그램·카피의 단일 소스: [`lib/festival.ts`](lib/festival.ts)
  (일부 값은 기획안용 예시이며 실제 확정 정보로 교체 가능)

## 개발

```bash
npm run dev     # 개발 서버 (http://localhost:3000)
npm run build   # 프로덕션 빌드
npm start       # 빌드 결과 실행
npm run lint
```

Service Worker(`public/sw.js`)와 설치 프롬프트는 **프로덕션 빌드에서만** 활성화됩니다.

## 구조

| 경로 | 설명 |
| --- | --- |
| `app/(site)/` | 홍보 웹 — 랜딩 / about / program / visit / brand / bookmark |
| `app/app/` | 모바일 앱 셸(PWA) — 홈 / schedule / map / saved, 하단 탭 내비 |
| `app/manifest.ts`, `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx` | PWA 매니페스트 · 아이콘 · OG 이미지(코드 생성) |
| `components/brand.tsx` | 심벌 · 워드마크 · 시그니처 |
| `components/Mascot.tsx` | 공식 캐릭터 미모(MIMO) |
| `components/Motifs.tsx` | 마임 클립아트 라인 아이콘 |
| `media/1~6` · `lib/photos.ts` · `components/Figure.tsx` | 현장 사진(축제 제공) + 메타데이터 + 렌더 컴포넌트 |
| `public/ccmf-2026-wallpaper.svg` | 배포용 잠금화면 배경 |

사진·포스터 이미지(`photo/`, `media/`)의 저작권은 춘천마임축제에 있으며, 홍보 기획 목적의 참고용입니다.
