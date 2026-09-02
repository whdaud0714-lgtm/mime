import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";
import { Countdown } from "@/components/Countdown";
import { SaveButton, ShareBar } from "@/components/share";
import { Mascot } from "@/components/Mascot";
import { MimeSymbol } from "@/components/brand";
import { Figure } from "@/components/Figure";
import {
  IconBalloon,
  IconHands,
  IconMask,
  IconStar,
  MotifField,
} from "@/components/Motifs";
import { copyBank, festival, programs } from "@/lib/festival";
import { galleryKeys, photos } from "@/lib/photos";

const VALUES = [
  {
    icon: IconMask,
    title: "번역이 필요 없다",
    body: "몸짓은 국경·언어·나이를 넘는 유일한 공용어. 자막 없이 바로 통합니다.",
  },
  {
    icon: IconHands,
    title: "누구나 배우가 된다",
    body: "보이지 않는 벽을 함께 미는 순간, 관객과 배우의 경계가 사라집니다.",
  },
  {
    icon: IconStar,
    title: "도시가 곧 무대",
    body: "극장을 넘어 거리·호수·주차장까지, 춘천 전체가 8일간 하나의 극장이 됩니다.",
  },
];

export default function HomePage() {
  const preview = programs.filter((p) => p.photo && p.kind !== "상설").slice(0, 4);

  return (
    <>
      {/* ---------------------------------------------------------- HERO */}
      <section className="relative overflow-hidden">
        <Image
          src={photos.streetWater.img}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/70 via-base/88 to-base" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(165,99,0,0.12),transparent_60%)]" />
        <MotifField />
        <Container className="relative grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="reveal">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-sm uppercase tracking-[0.22em] text-amber">
              <span>{festival.editionKo}</span>
              <span aria-hidden className="text-ink/30">/</span>
              <span>{festival.periodEn}</span>
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl">
              말 없이,
              <br />
              <span className="text-amber">세계와</span> 통하다
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
              {festival.taglineKo}
              <br />
              <span className="text-ink/55">
                {festival.sloganEn} — {festival.taglineEn}
              </span>
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="text-ink/45">일시</dt>
                <dd className="font-medium">{festival.periodKo}</dd>
              </div>
              <div>
                <dt className="text-ink/45">장소</dt>
                <dd className="font-medium">{festival.placeKo}</dd>
              </div>
              <div>
                <dt className="text-ink/45">주최</dt>
                <dd className="font-medium">{festival.hostKo}</dd>
              </div>
            </dl>

            <div className="mt-9">
              <Countdown />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <SaveButton />
              <Link
                href="/program"
                className="rounded-full border border-ink/25 px-5 py-3 text-sm font-bold hover:border-amber hover:text-amber"
              >
                프로그램 보기
              </Link>
              <Link
                href="/app"
                className="rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink hover:bg-amber/90"
              >
                모바일 앱 열기
              </Link>
            </div>
          </div>

          <div className="reveal relative mx-auto w-full max-w-xs">
            <div className="rotate-1 overflow-hidden rounded-[1.5rem] border border-ink/15 bg-card shadow-[0_22px_50px_rgba(28,23,18,0.18)]">
              <Image
                src={photos.keyVisual.img}
                alt={photos.keyVisual.alt}
                sizes="(min-width: 1024px) 20rem, 80vw"
                placeholder="blur"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute bottom-3 left-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-ink/15 bg-ink/90 backdrop-blur">
              <Mascot className="h-12 w-11" wall={false} />
            </div>
            <p className="mt-4 text-center text-xs text-ink/50">
              2026 공식 키비주얼 · {photos.keyVisual.credit}
            </p>
          </div>
        </Container>

        {/* 카피 마퀴 */}
        <div className="relative border-y border-ink/10 bg-card py-3">
          <div className="flex overflow-hidden">
            {[0, 1].map((dup) => (
              <ul
                key={dup}
                aria-hidden={dup === 1}
                className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap pr-10 font-display text-sm uppercase tracking-[0.2em] text-ink/60"
              >
                {[...copyBank, ...copyBank].map((c, i) => (
                  <li key={i} className="flex items-center gap-10">
                    <IconStar className="h-4 w-4 text-coral" />
                    {c}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- 가치 3가지 */}
      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              kicker="Why Mime"
              title="왜 마임인가"
              desc="마임은 가장 오래된 무대 언어이자, 가장 국제적인 언어입니다."
            />
            <Mascot className="hidden h-32 w-28 lg:block" />
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="reveal rounded-2xl border border-ink/12 bg-card p-7"
              >
                <Icon className="h-10 w-10 text-amber" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ------------------------------------------------ 프로그램 미리보기 */}
      <section className="border-y border-ink/10 bg-card/70 py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              kicker="Program"
              title="8일, 도시를 채우는 장면들"
              desc="개막난장 ‘아!水라장’부터 미친금요일, 폐막 밤샘난장 ‘도깨비난장’까지."
            />
            <Link
              href="/program"
              className="shrink-0 rounded-full border border-ink/25 px-5 py-2.5 text-sm font-bold hover:border-amber hover:text-amber"
            >
              전체 프로그램 →
            </Link>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {preview.map((p) => (
              <li
                key={p.slug}
                className="reveal group overflow-hidden rounded-2xl border border-ink/12 bg-base transition-colors hover:border-amber/60"
              >
                {p.photo && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={photos[p.photo].img}
                      alt={photos[p.photo].alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      placeholder="blur"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 font-display text-[11px] uppercase tracking-[0.16em] text-coral">
                      {p.kind}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-amber">
                    {p.nameKo}
                  </h3>
                  <p className="mt-1 text-sm text-ink/45">{p.nameEn}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {p.blurbKo}
                  </p>
                  <p className="mt-4 text-xs text-ink/45">
                    {p.when} · {p.where}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ------------------------------------------------------ 현장 스케치 */}
      <section className="py-20">
        <Container>
          <SectionHeading
            kicker="Festival Sketch"
            title="현장은 이렇게 생겼다"
            desc="물, 불, 색, 그리고 사람. 지난 춘천마임축제의 장면들."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryKeys.map((key, i) => (
              <Figure
                key={key}
                photo={photos[key]}
                className="reveal"
                priority={i === 0}
                aspect={i === 0 ? "aspect-[4/3] lg:aspect-[16/10]" : "aspect-[4/3]"}
              />
            ))}
            <div className="flex flex-col justify-center rounded-2xl border border-amber/30 bg-card p-6">
              <p className="font-display text-sm uppercase tracking-[0.18em] text-amber">
                Every May
              </p>
              <p className="mt-2 text-lg font-bold leading-snug">
                이 장면들을 2026년 5월, 직접.
              </p>
              <Link
                href="/about"
                className="mt-4 text-sm font-bold text-amber hover:underline"
              >
                축제 이야기 더 보기 →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------ 브랜드 요소 */}
      <section className="border-t border-ink/10 py-20">
        <Container>
          <SectionHeading
            kicker="Identity"
            title="침묵을 담은 아이덴티티"
            desc="말풍선과 마임 얼굴을 합친 심벌, 캐릭터 미모, 그리고 무대의 색."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-ink/12 bg-card p-8">
              <MimeSymbol className="h-24 w-24 text-ink" />
              <h3 className="mt-5 font-bold">심벌 · 무언의 얼굴</h3>
              <p className="mt-2 text-sm text-ink/65">
                비어 있는 말풍선 = 침묵. 눈빛과 그려진 눈물이 말을 대신합니다.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/12 bg-card p-8">
              <div className="flex gap-2">
                {[
                  ["#f4eee1", "Paper"],
                  ["#1c1712", "Ink"],
                  ["#a56300", "Amber"],
                  ["#196380", "Lake"],
                  ["#c9333a", "Coral"],
                ].map(([hex, name]) => (
                  <div key={name} className="flex-1">
                    <div
                      className="h-16 w-full rounded-lg border border-ink/20"
                      style={{ background: hex }}
                    />
                    <p className="mt-1.5 text-[11px] text-ink/55">{name}</p>
                  </div>
                ))}
              </div>
              <h3 className="mt-5 font-bold">무대의 색</h3>
              <p className="mt-2 text-sm text-ink/65">
                분장의 종이빛(Paper)과 그림자(Ink) 위에 조명(Amber)·호수(Lake)·몸짓(Coral).
              </p>
            </div>
            <div className="flex flex-col rounded-2xl border border-ink/12 bg-card p-8">
              <IconBalloon className="h-12 w-12 text-lake" />
              <h3 className="mt-5 font-bold">캐릭터 · 미모(MIMO)</h3>
              <p className="mt-2 flex-1 text-sm text-ink/65">
                공식 키비주얼의 ‘몸짓하는 검은 실루엣’에서 태어난 몸짓요정. 축제의
                안내자이자 마스코트.
              </p>
              <Link
                href="/brand"
                className="mt-5 inline-block text-sm font-bold text-amber hover:underline"
              >
                브랜드 전략·가이드 전체 보기 →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* --------------------------------------------- 국민 → 세계인 내러티브 */}
      <section className="relative overflow-hidden border-y border-ink/10 py-24">
        <Image
          src={photos.goblinFire.img}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-base/82" />
        <Container className="relative text-center">
          <p className="font-display text-sm uppercase tracking-[0.24em] text-amber">
            From Chuncheon to the World
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-2xl font-bold leading-snug sm:text-3xl">
            춘천 시민의 축제에서 대한민국의 축제로, 다시{" "}
            <span className="text-amber">언어가 필요 없는 세계인의 축제</span>로.
            북마크 링크 하나가 그 초대장입니다.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base text-ink/65">
            A festival with no language barrier — one bookmarked link is the
            invitation the whole world can open.
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------------ 북마크 CTA */}
      <section className="py-24">
        <Container>
          <div className="reveal rounded-3xl border border-amber/40 bg-gradient-to-br from-card to-base p-10 text-center sm:p-14">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              북마크 한 번, 세계인의 축제로.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink/70">
              이 페이지를 저장하고 공유해 주세요. D-day 알림, 프로그램표, 오시는
              길이 앱처럼 열립니다.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <SaveButton />
              <ShareBar className="justify-center" />
              <Link
                href="/bookmark"
                className="text-sm font-bold text-amber hover:underline"
              >
                QR·배경화면·홈 화면 추가 안내 →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
