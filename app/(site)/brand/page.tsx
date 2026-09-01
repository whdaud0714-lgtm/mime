import type { Metadata } from "next";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { MimeSymbol, Signature, Wordmark } from "@/components/brand";
import { Mascot } from "@/components/Mascot";
import { Figure } from "@/components/Figure";
import {
  IconBalloon,
  IconHands,
  IconHat,
  IconMask,
  IconSpotlight,
  IconStar,
} from "@/components/Motifs";
import { copyBank, festival } from "@/lib/festival";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "브랜드 전략 · 가이드",
  description:
    "2026 춘천마임축제 북마크 링크 홍보 프로젝트의 SWOT 환경분석, 목표·타겟 분석, 컨셉·표현전략, 그리고 로고·심벌·시그니처·캐릭터·컬러·카피 가이드.",
};

const SWOT = {
  S: [
    "언어 장벽이 없는 콘텐츠 — 국적·연령 불문 즉시 소구",
    "1989년부터 이어진 역사와 ‘세계 3대 마임축제’ 인지도",
    "‘미친금요일·아수라장’ 등 강력한 참여형 난장 IP",
    "서울 접근성(ITX 약 70분) + 도보 이동형 콤팩트 도시",
  ],
  W: [
    "‘마임=조용하고 어렵다’는 오해, 낮은 대중 관여도",
    "수도권 대형 축제 대비 예산·홍보 채널 열세",
    "5월 지역축제 성수기의 극심한 경쟁",
    "재방문·팬덤을 이어줄 상시 디지털 접점 부족",
  ],
  O: [
    "K-컬처 관심으로 한국 방문 외국인·체류 유학생 급증",
    "숏폼·밈 친화적인 ‘무언(無言) 퍼포먼스’ 콘텐츠 특성",
    "지역·비수도권 관광 활성화 정책 및 예산 기조",
    "링크 하나로 확산되는 공유·북마크형 캠페인 저비용 구조",
  ],
  T: [
    "동일 시즌 대형 페스티벌로 관심·예산 분산",
    "체감 경기 위축에 따른 여가·여행 지출 감소",
    "기상 리스크(야외 비중 높음)",
    "짧은 화제성 — 축제 종료 후 급격한 관심 소멸",
  ],
};

const CROSS = [
  ["SO 공격", "무언 퍼포먼스의 숏폼 확산력 + 외국인 관객 증가를 결합 → ‘번역이 필요 없는 축제’로 글로벌 포지셔닝."],
  ["ST 방어", "역사·대표 IP를 앞세워 ‘5월엔 춘천마임’이라는 시즌 고정 연상 구축, 경쟁 축제와 차별화."],
  ["WO 만회", "상시 북마크 링크(웹·PWA)로 디지털 접점을 확보해 홍보 채널 열세를 유저 확산으로 상쇄."],
  ["WT 최소화", "무료 거리 프로그램·실내 대안 편성으로 진입장벽과 기상 리스크를 동시에 완화."],
];

const PERSONAS = [
  {
    name: "① 문화 나들이족 (국내, 25–39)",
    detail: "SNS로 주말 나들이를 고르는 수도권 거주자. ‘사진 잘 나오는’ 경험과 이동 편의가 결정 요인.",
    hook: "ITX 70분 · 도보 축제 · 인생샷 스팟 큐레이션",
  },
  {
    name: "② 가족 관객 (초등 자녀 동반)",
    detail: "아이가 지루해하지 않을 공연을 찾는 3040 부모. 무료·체험·안전 정보에 민감.",
    hook: "대사 없는 공연 = 온 가족이 같은 장면에서 웃는다 · 몸짓놀이터",
  },
  {
    name: "③ 방한 외국인 · 체류 유학생 (20–35)",
    detail: "K-컬처 관심으로 방한, 언어 때문에 공연 관람을 망설이는 층. 영어 정보와 접근성이 핵심.",
    hook: "No language barrier · one bookmarked link, full festival in your pocket",
  },
];

const REACH = [
  ["1단계 · 춘천 시민", "‘우리 도시의 자부심’ — 자원활동·지역 상권 연계로 팬층 결속."],
  ["2단계 · 대한민국 국민", "‘5월의 국가대표 몸짓 축제’ — 북마크·공유 캠페인으로 전국 인지 확산."],
  ["3단계 · 세계인", "‘언어가 필요 없는 축제’ — 다국어 링크·외국인 후기로 방한 관광 연결."],
];

const TONE = [
  ["말수는 적게, 태도는 크게", "카피는 짧고 여백 있게. 설명보다 장면을 보여준다."],
  ["장난기 있는 진지함", "예술적이되 무겁지 않게. 위트와 초대의 말투."],
  ["대비의 미학", "침묵과 소란, 흑백과 원색, 정지와 폭발을 나란히 둔다."],
  ["누구나 배우", "관객을 구경꾼이 아닌 참여자로 호명한다(‘당신의 차례입니다’)."],
];

const COLORS = [
  { hex: "#0e0e12", name: "Ink Black", use: "기본 배경 · 무대의 어둠. 전체 화면의 기준색." },
  { hex: "#f6f2e9", name: "Paper White", use: "본문 텍스트 · 마임 분장. 여백과 인쇄의 질감." },
  { hex: "#ffb627", name: "Spotlight Amber", use: "핵심 강조 · CTA · 링크. 무대 조명 = 주목." },
  { hex: "#1e6f8e", name: "Lake Blue", use: "보조색 · 춘천 호수. 정보·차분한 면." },
  { hex: "#ff5a5f", name: "Signal Coral", use: "포인트 · 태그·에너지. 몸짓의 생동." },
];

export default function BrandPage() {
  return (
    <>
      <PageHero
        kicker="Brand Strategy & Guide"
        title={<>침묵을 브랜딩하다</>}
        desc="2026 춘천마임축제 북마크 링크 홍보 프로젝트의 환경분석 · 목표와 타겟 · 컨셉과 표현전략, 그리고 이를 담아낸 아이덴티티 시스템 전체를 정리합니다."
      />

      {/* ---------------------------------------------------- 1. SWOT */}
      <section className="py-16">
        <Container>
          <SectionHeading
            kicker="01 · Environment"
            title="SWOT 환경분석"
            desc="언어 장벽 없는 콘텐츠라는 강점을, 낮은 대중 관여도라는 약점을 넘어 세계 시장 기회로 전환하는 것이 과제."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {(
              [
                ["S · 강점", "Strengths", SWOT.S, "border-amber/40"],
                ["W · 약점", "Weaknesses", SWOT.W, "border-coral/40"],
                ["O · 기회", "Opportunities", SWOT.O, "border-lake/50"],
                ["T · 위협", "Threats", SWOT.T, "border-paper/25"],
              ] as const
            ).map(([ko, en, list, border]) => (
              <div
                key={en}
                className={`reveal rounded-2xl border ${border} bg-ink-soft/40 p-6`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-black">{ko}</h3>
                  <span className="font-display text-xs uppercase tracking-[0.2em] text-paper/40">
                    {en}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-paper/75">
                  {list.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-amber">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-display text-sm uppercase tracking-[0.2em] text-amber">
            교차전략 (Cross-SWOT)
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {CROSS.map(([t, d]) => (
              <div key={t} className="rounded-xl border border-paper/12 bg-ink p-5">
                <p className="font-bold text-coral">{t}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-paper/70">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------ 2. 목표 & 타겟 */}
      <section className="border-y border-paper/10 bg-ink-soft/25 py-16">
        <Container>
          <SectionHeading
            kicker="02 · Goal & Target"
            title="목표 및 타겟 분석"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-paper/12 bg-ink p-7">
              <h3 className="font-bold text-amber">캠페인 목표</h3>
              <ul className="mt-4 space-y-3 text-sm text-paper/75">
                <li><b className="text-paper">정성</b> · ‘춘천 = 마임’, ‘마임 = 언어가 필요 없는 축제’ 연상 확립</li>
                <li><b className="text-paper">정량</b> · 북마크 링크 저장 10만 · 공유 5만 · PWA 설치 2만 (캠페인 기간)</li>
                <li><b className="text-paper">전환</b> · 온라인 관심 → 유료 예매·현장 방문·외국인 관객 비중 확대</li>
                <li><b className="text-paper">지속</b> · 축제 종료 후에도 유지되는 상시 팬 채널(재방문·차년도 알림)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-paper/12 bg-ink p-7">
              <h3 className="font-bold text-amber">소구 대상 확장 로드맵</h3>
              <ol className="mt-4 space-y-4">
                {REACH.map(([t, d], i) => (
                  <li key={t} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber font-display text-xs text-ink">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold">{t}</p>
                      <p className="text-sm text-paper/65">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <h3 className="mt-12 font-display text-sm uppercase tracking-[0.2em] text-amber">
            핵심 타겟 페르소나
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {PERSONAS.map((p) => (
              <div
                key={p.name}
                className="reveal rounded-xl border border-paper/12 bg-ink-soft/40 p-5"
              >
                <p className="font-bold">{p.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/65">
                  {p.detail}
                </p>
                <p className="mt-3 border-t border-paper/10 pt-3 text-xs text-amber">
                  핵심 소구 · {p.hook}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------- 3. 컨셉 & 표현전략 */}
      <section className="py-16">
        <Container>
          <SectionHeading
            kicker="03 · Concept"
            title="컨셉 및 표현전략"
          />

          <div className="mt-10 rounded-2xl border border-amber/40 bg-[radial-gradient(ellipse_at_top_left,rgba(255,182,39,0.12),transparent_60%)] p-8">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-amber">
              Core Concept
            </p>
            <p className="mt-3 text-2xl font-black leading-snug sm:text-3xl">
              “몸의 언어” — 침묵으로 건네는 세계 공용어
            </p>
            <p className="mt-3 max-w-2xl text-sm text-paper/70">
              마임의 본질(말 없이 통함)을 곧 축제의 세계화 논리로 삼는다. 자막도
              번역도 필요 없기에, 이 축제는 처음부터 세계인의 것이 될 수 있다.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["침묵(Silence)", "상상(Imagination)", "환대(Welcome)", "난장(Riot)"].map(
                (k) => (
                  <span
                    key={k}
                    className="rounded-full border border-paper/20 px-3 py-1 text-xs text-paper/80"
                  >
                    {k}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-paper/12 bg-ink-soft/40 p-7">
              <h3 className="font-bold text-amber">슬로건 체계</h3>
              <ul className="mt-4 space-y-3 text-sm text-paper/75">
                <li>
                  <b className="text-paper">메인(국문)</b> · “{festival.sloganKo}”
                </li>
                <li>
                  <b className="text-paper">메인(영문)</b> · “{festival.sloganEn}.”
                </li>
                <li>
                  <b className="text-paper">서브</b> · “{festival.taglineKo}”
                </li>
                <li>
                  <b className="text-paper">캠페인</b> · “북마크 한 번, 세계인의 축제로.”
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-paper/12 bg-ink-soft/40 p-7">
              <h3 className="font-bold text-amber">톤 &amp; 매너</h3>
              <ul className="mt-4 space-y-3 text-sm text-paper/75">
                {TONE.map(([t, d]) => (
                  <li key={t}>
                    <b className="text-paper">{t}</b> · {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-paper/12 bg-ink p-7">
            <h3 className="font-bold text-amber">표현전략 (Visual Principles)</h3>
            <ul className="mt-4 grid gap-3 text-sm text-paper/75 sm:grid-cols-2">
              <li>· 흑(무대)·백(분장) 기본 위에 조명색 Amber 한 방울로 시선 유도</li>
              <li>· 텍스트는 무겁고 크게, 여백은 넉넉하게 — 포스터의 문법</li>
              <li>· 인물·손·얼굴의 ‘동작 실루엣’을 주요 이미지로 사용</li>
              <li>· 점선(보이지 않는 벽), 말풍선(침묵), 별(스포트라이트)을 반복 모티프로</li>
              <li>· 모든 헤드라인은 국문+영문 병기 — 세계인 소구의 시각적 약속</li>
              <li>· 정지컷보다 GIF·루프·마퀴 등 ‘계속 움직이는’ 표현 우선</li>
            </ul>
          </div>
        </Container>
      </section>

      {/* ------------------------------------- 4. 아이덴티티 시스템 */}
      <section className="border-t border-paper/10 py-16">
        <Container>
          <SectionHeading
            kicker="04 · Identity System"
            title="로고 · 심벌 · 시그니처"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-paper/12 bg-paper p-10 text-ink">
              <MimeSymbol className="h-32 w-32" />
              <Wordmark className="text-2xl text-ink [&_.text-amber]:text-lake" />
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-paper/12 bg-ink-soft/40 p-5">
                <h3 className="font-bold text-amber">심벌 · 무언의 얼굴</h3>
                <p className="mt-2 text-sm text-paper/70">
                  말풍선(대화)과 마임 분장 얼굴의 결합. 말풍선 안은 비워 두고,
                  뜬 눈 하나와 그려진 눈물이 ‘말 없이 건네는 말’을 상징한다.
                  단색·1도 인쇄, 최소 16px까지 판독 가능하도록 설계.
                </p>
              </div>
              <div className="rounded-xl border border-paper/12 bg-ink-soft/40 p-5">
                <h3 className="font-bold text-amber">시그니처 (잠금 조합)</h3>
                <div className="mt-3 rounded-lg bg-ink p-4">
                  <Signature className="text-xl text-paper" />
                </div>
                <p className="mt-3 text-sm text-paper/70">
                  심벌 : 워드마크 = 1 : 2.1 비율 고정. 국문 상단, 영문+연도 하단.
                  가로형 기본, 협소 공간에서는 심벌만 단독 사용.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-lake/40 bg-ink p-4 text-xs text-paper/70">
                  <b className="text-paper">DO</b> · 흑 또는 백 단색, 충분한 여백(심벌 높이의 50%), 지정 색상만
                </div>
                <div className="rounded-xl border border-coral/40 bg-ink p-4 text-xs text-paper/70">
                  <b className="text-paper">DON’T</b> · 기울이기·그림자·비율 왜곡, 저대비 배경, 말풍선 안 채우기
                </div>
              </div>
            </div>
          </div>

          {/* 컬러 */}
          <h3 className="mt-14 font-display text-sm uppercase tracking-[0.2em] text-amber">
            컬러 시스템
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {COLORS.map((c) => (
              <div key={c.name} className="rounded-xl border border-paper/12 bg-ink p-3">
                <div
                  className="h-20 w-full rounded-lg border border-paper/10"
                  style={{ background: c.hex }}
                />
                <p className="mt-2 text-sm font-bold">{c.name}</p>
                <p className="font-display text-xs text-paper/45">{c.hex.toUpperCase()}</p>
                <p className="mt-1 text-xs leading-relaxed text-paper/60">{c.use}</p>
              </div>
            ))}
          </div>

          {/* 타이포 */}
          <h3 className="mt-14 font-display text-sm uppercase tracking-[0.2em] text-amber">
            타이포그래피
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-paper/12 bg-ink p-6">
              <p className="text-4xl font-black tracking-tight">춘천마임축제</p>
              <p className="mt-2 text-sm text-paper/60">
                국문 · <b className="text-paper">Noto Sans KR</b> — 본문 400/500,
                헤드라인 900. 자간 -2%.
              </p>
            </div>
            <div className="rounded-xl border border-paper/12 bg-ink p-6">
              <p className="font-display text-4xl uppercase tracking-[0.14em] text-amber">
                Silence Speaks
              </p>
              <p className="mt-2 text-sm text-paper/60">
                영문 디스플레이 · <b className="text-paper">Anton</b> — 포스터
                헤드·키커·연도 표기. 대문자, 자간 +14%.
              </p>
            </div>
          </div>

          {/* 캐릭터 */}
          <h3 className="mt-14 font-display text-sm uppercase tracking-[0.2em] text-amber">
            캐릭터 · 미모(MIMO)
          </h3>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-paper/12 bg-ink-soft/40 p-6">
              <div className="rounded-xl bg-ink p-3">
                <Mascot className="w-full" />
                <p className="mt-2 text-center text-xs text-paper/50">벽 밀기</p>
              </div>
              <div className="rounded-xl bg-ink p-3">
                <Mascot className="w-full" wall={false} />
                <p className="mt-2 text-center text-xs text-paper/50">인사</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-paper/75">
              <p>
                <b className="text-paper">설정</b> · 춘천 의암호의 물방울에서
                태어난 몸짓요정. 말은 못 하지만 표정과 손짓으로 누구와도 대화한다.
              </p>
              <p>
                <b className="text-paper">식별 요소</b> · 하얀 분장 얼굴 · 물방울
                베레(Lake Blue) · 코랄 스트라이프 셔츠 · 하얀 장갑.
              </p>
              <p>
                <b className="text-paper">역할</b> · 축제의 안내자. 프로그램표에서
                길을 알려 주고, 앱 알림·스티커·거리 포토존에 등장.
              </p>
              <p>
                <b className="text-paper">보이스</b> · 말풍선은 항상 그림/기호로만
                채운다(느낌표, 하트, 발자국). 절대 문장을 넣지 않는다.
              </p>
            </div>
          </div>

          {/* 공식 홍보물과의 관계 */}
          <h3 className="mt-14 font-display text-sm uppercase tracking-[0.2em] text-amber">
            공식 홍보물과의 관계
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-paper/70">
            본 프로젝트의 아이덴티티는 춘천마임축제의 기존 시각 언어 —{" "}
            <b className="text-paper">몸짓하는 검은 실루엣</b>, 네온 옐로 타이포,
            물·불의 난장 이미지 — 를 이어받아 ‘침묵으로 세계와 통한다’는
            북마크 캠페인 메시지에 맞게 확장한 것입니다. (아래 이미지는 참고용
            공식 홍보물이며 저작권은 춘천마임축제에 있습니다.)
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <Figure photo={photos.keyVisual} aspect="aspect-[3/4]" sizes="(min-width:640px) 33vw, 100vw" />
            <Figure photo={photos.salon} aspect="aspect-[3/4]" sizes="(min-width:640px) 33vw, 100vw" />
            <Figure photo={photos.maJungMul} aspect="aspect-[3/4]" sizes="(min-width:640px) 33vw, 100vw" />
          </div>

          {/* 모티프 */}
          <h3 className="mt-14 font-display text-sm uppercase tracking-[0.2em] text-amber">
            클립아트 모티프
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { Icon: IconMask, label: "가면 / 표정" },
              { Icon: IconHands, label: "보이지 않는 벽" },
              { Icon: IconBalloon, label: "침묵의 말풍선" },
              { Icon: IconSpotlight, label: "스포트라이트" },
              { Icon: IconHat, label: "실크햇 / 클래식 마임" },
              { Icon: IconStar, label: "별 / 무대의 빛" },
            ].map(({ Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-2 rounded-xl border border-paper/12 bg-ink p-5"
              >
                <Icon className="h-10 w-10 text-amber" />
                <span className="text-center text-xs text-paper/60">{label}</span>
              </li>
            ))}
          </ul>

          {/* 카피 뱅크 */}
          <h3 className="mt-14 font-display text-sm uppercase tracking-[0.2em] text-amber">
            카피 뱅크
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[festival.taglineKo, ...copyBank].map((c) => (
              <p
                key={c}
                className="rounded-xl border border-paper/12 bg-ink p-4 text-lg font-bold"
              >
                “{c}”
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* -------------------------------- 5. 북마크 캠페인 운영안 */}
      <section className="border-t border-paper/10 bg-ink-soft/25 py-16">
        <Container>
          <SectionHeading
            kicker="05 · Activation"
            title="북마크 링크 캠페인 운영안"
            desc="하나의 저장 가능한 링크를 축제의 상설 홍보 거점으로."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["허브", "웹 + PWA(앱) 단일 링크. D-day·프로그램표·오시는 길·공유·홈 화면 추가를 한 페이지에."],
              ["확산", "‘저장하기 → 공유하기’ 2버튼 구조. SNS 카드·QR·잠금화면 배경 다운로드 제공."],
              ["리텐션", "저장 사용자에게 D-30/D-7/개막일 웹푸시 알림, 종료 후 ‘내년 알림 예약’."],
              ["글로벌", "국·영문 병기, 외국인용 접근성(교통·무료 프로그램) 우선 노출."],
              ["현장 연계", "포스터·티켓·거리 배너의 QR → 동일 링크. 온·오프라인 접점 통합."],
              ["측정", "저장수·공유수·설치수·푸시 허용률·예매 전환을 핵심 지표(KPI)로."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-paper/12 bg-ink p-5">
                <p className="font-bold text-amber">{t}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-paper/70">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
