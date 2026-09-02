import type { Metadata } from "next";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { Figure } from "@/components/Figure";
import { IconHands, IconMask, IconSpotlight, IconStar } from "@/components/Motifs";
import { festival } from "@/lib/festival";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "축제 소개",
  description:
    "춘천마임축제는 (사)춘천마임축제가 매년 여는 아시아 대표 마임·피지컬시어터 축제입니다. 마임이란 무엇인지, 축제의 역사와 비전을 소개합니다.",
};

const HISTORY = [
  { year: "1989", text: "‘한국마임페스티발’로 출발. 마임이스트들의 자발적 무대." },
  { year: "1995", text: "춘천으로 자리를 옮기며 ‘춘천마임축제’로 개칭, 지역 축제로 성장." },
  { year: "2000년대", text: "‘미친금요일’·‘아수라장’ 등 참여형 난장 프로그램 정착. 관객이 무대에 오르다." },
  { year: "2010년대", text: "세계 3대 마임축제로 소개되며 해외 극단 초청 확대." },
  { year: "2026", text: `${festival.editionKo} — ‘말 없이, 세계와 통하다’. 온라인 북마크 캠페인으로 세계인 초대.` },
];

const FAQ = [
  {
    q: "마임(Mime)이 정확히 뭔가요?",
    a: "말과 소리 대신 몸짓·표정·움직임으로 이야기를 전하는 공연 예술입니다. 보이지 않는 벽을 만지고, 없는 계단을 오르는 팬터마임이 대표적이지만, 오늘날의 마임은 무용·서커스·연극·마술과 뒤섞인 ‘피지컬시어터’로 넓어졌습니다.",
  },
  {
    q: "대사가 없는데 아이도 즐길 수 있나요?",
    a: "오히려 아이들이 가장 빠르게 반응합니다. 언어 이해가 필요 없기 때문에 3세부터 어르신까지, 외국인 관광객까지 같은 장면에서 함께 웃습니다.",
  },
  {
    q: "왜 춘천인가요?",
    a: "호수와 안개의 도시 춘천은 ‘낭만’과 ‘상상’의 이미지를 가진 곳입니다. 서울에서 ITX로 약 1시간, 도시 전체가 걸어서 이동 가능한 규모라 거리극 축제에 최적입니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title={<>침묵으로 말하는<br />가장 국제적인 축제</>}
        desc={`${festival.titleKo}는 ${festival.hostKo}가 매년 5월 여는 마임·피지컬시어터 축제입니다. 1989년 시작해 지금은 아시아를 대표하는 몸짓 예술의 장이 되었습니다.`}
      />

      <section className="pt-12">
        <Container>
          <Figure
            photo={photos.streetWater}
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            aspect="aspect-[16/9]"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading kicker="Mime" title="마임이라는 언어" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { icon: IconHands, t: "보이지 않는 것을 보이게", d: "벽, 상자, 바람, 밧줄 — 없는 것을 몸으로 그려 관객의 상상 속에 세웁니다." },
              { icon: IconMask, t: "얼굴이 곧 대사", d: "하얀 분장은 표정을 극대화하는 장치. 눈썹 하나로 한 문장을 말합니다." },
              { icon: IconSpotlight, t: "무대가 어디든", d: "조명 한 대와 배우 한 명이면 골목도 광장도 무대가 됩니다." },
              { icon: IconStar, t: "관객이 완성한다", d: "웃음과 침묵, 참여가 없으면 장면은 완성되지 않습니다." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="reveal flex gap-4 rounded-2xl border border-ink/12 bg-card p-6">
                <Icon className="h-9 w-9 shrink-0 text-amber" />
                <div>
                  <h3 className="font-bold">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/10 bg-card/70 py-20">
        <Container>
          <SectionHeading kicker="History" title="1989 → 2026" desc="자발적 마임 무대에서 세계인의 축제로." />
          <ol className="mt-12 space-y-0">
            {HISTORY.map((h, i) => (
              <li key={h.year} className="reveal grid grid-cols-[5.5rem_1fr] gap-5 border-l-2 border-ink/15 pb-8 pl-6 last:pb-0 sm:grid-cols-[7rem_1fr]">
                <span className="font-display text-lg text-amber">{h.year}</span>
                <p className="text-sm leading-relaxed text-ink/75">{h.text}</p>
                {i === 0 && null}
              </li>
            ))}
          </ol>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <Figure photo={photos.waterOpening} aspect="aspect-[4/3]" />
            <Figure photo={photos.goblinFire} aspect="aspect-[4/3]" />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading kicker="Vision" title="2026의 목표" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["국민 인지", "‘춘천 = 마임’ 연상률을 높이고, 비수도권 문화관광의 대표 사례로."],
              ["세계 확장", "언어 장벽이 없는 콘텐츠 특성을 살려 해외 관객·관광객을 정면으로 겨냥."],
              ["디지털 초대", "북마크·공유 가능한 링크 하나로 누구나 축제의 홍보대사가 되는 구조."],
            ].map(([t, d]) => (
              <div key={t} className="reveal rounded-2xl border border-amber/30 bg-card p-7">
                <h3 className="text-lg font-bold text-amber">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-20">
        <Container>
          <SectionHeading kicker="FAQ" title="자주 묻는 질문" />
          <dl className="mt-10 divide-y divide-ink/10">
            {FAQ.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="text-lg font-bold">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/70">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
