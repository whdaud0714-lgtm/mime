import type { Metadata } from "next";
import Image from "next/image";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { festival, programs, type Program } from "@/lib/festival";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "프로그램",
  description: `${festival.titleKo} 프로그램 라인업 — 개막난장 ‘아!水라장’, 미친금요일, 세계마임초청전, 밤샘난장 ‘도깨비난장’, 상설공연 ‘안녕마임’ 등.`,
};

const ORDER: Program["kind"][] = [
  "개·폐막",
  "대표",
  "국제초청",
  "거리·난장",
  "체험",
  "상설",
];

const DAYS = [
  { d: "5.24 일", label: "개막", note: "개막난장 ‘아!水라장’ (13:00, 춘천 중앙로)" },
  { d: "5.25 월", label: "하다마당", note: "국내 초청작 데일리 공연 시작" },
  { d: "5.26 화", label: "세계마임", note: "세계마임초청전 개막 (축제극장 몸짓)" },
  { d: "5.27 수", label: "거리극", note: "아수라장 거리극 · 브라운5번가" },
  { d: "5.28 목", label: "워크숍", note: "몸짓놀이터 사전 프로그램" },
  { d: "5.29 금", label: "미친금요일", note: "밤샘 물난장 19:00–24:00" },
  { d: "5.30 토", label: "도깨비난장", note: "밤샘난장 14:00 → 익일 05:00, 레고랜드" },
  { d: "5.31 일", label: "폐막", note: "도깨비난장 대동 피날레" },
];

export default function ProgramPage() {
  return (
    <>
      <PageHero
        kicker="Program"
        title={<>8일간,<br />도시가 무대가 된다</>}
        desc="극장 안 초청작부터 거리의 예고 없는 난장까지. 모든 프로그램은 대사가 없어 남녀노소·국적 불문 함께 즐길 수 있습니다."
      />

      <section className="py-16">
        <Container>
          <SectionHeading kicker="At a glance" title="8일 한눈에 보기" />
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {DAYS.map((day) => (
              <li
                key={day.d}
                className="reveal rounded-xl border border-ink/12 bg-card p-4"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-sm text-amber">{day.d}</span>
                  <span className="text-xs font-bold text-coral">{day.label}</span>
                </div>
                <p className="mt-2 text-sm text-ink/70">{day.note}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-16">
        <Container>
          {ORDER.map((kind) => {
            const list = programs.filter((p) => p.kind === kind);
            if (!list.length) return null;
            return (
              <div key={kind} className="mb-14 last:mb-0">
                <h2 className="font-display text-xl uppercase tracking-[0.16em] text-amber">
                  {kind}
                </h2>
                <ul className="mt-6 grid gap-5 md:grid-cols-2">
                  {list.map((p) => (
                    <li
                      key={p.slug}
                      className="reveal overflow-hidden rounded-2xl border border-ink/12 bg-base"
                    >
                      {p.photo && (
                        <div className="relative aspect-[16/9] w-full">
                          <Image
                            src={photos[p.photo].img}
                            alt={photos[p.photo].alt}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            placeholder="blur"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold">{p.nameKo}</h3>
                        <p className="mt-1 text-sm text-ink/45">{p.nameEn}</p>
                        <p className="mt-3 text-sm leading-relaxed text-ink/70">
                          {p.blurbKo}
                        </p>
                        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink/50">
                          <div className="flex gap-1.5">
                            <dt className="text-ink/35">일시</dt>
                            <dd>{p.when}</dd>
                          </div>
                          <div className="flex gap-1.5">
                            <dt className="text-ink/35">장소</dt>
                            <dd>{p.where}</dd>
                          </div>
                        </dl>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <p className="mt-6 rounded-xl border border-ink/12 bg-card/70 p-5 text-xs text-ink/50">
            ※ 상기 라인업·시간·장소는 홍보 기획안용 예시이며, 실제 편성은
            조직위원회 발표에 따릅니다.
          </p>
        </Container>
      </section>
    </>
  );
}
