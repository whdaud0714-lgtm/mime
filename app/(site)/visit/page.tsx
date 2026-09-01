import type { Metadata } from "next";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { VenueMap } from "@/components/VenueMap";
import { Figure } from "@/components/Figure";
import { festival } from "@/lib/festival";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "방문 안내",
  description: `${festival.titleKo} 오시는 길, 축제장 위치, 티켓, 숙박·교통 안내.`,
};

const TRANSPORT = [
  { m: "ITX-청춘 / 경춘선", d: "서울 용산·청량리 → 춘천역 약 70분. 축제 기간 임시 증편 운행." },
  { m: "고속·시외버스", d: "서울(동서울) → 춘천 약 70분. 10~20분 간격." },
  { m: "자가용", d: "서울양양고속도로 → 남춘천 IC. 축제장 인근 공영주차장 이용(혼잡, 대중교통 권장)." },
  { m: "축제 셔틀", d: "춘천역·시외버스터미널 ↔ 주요 축제장 무료 순환 셔틀(10분 간격)." },
];

const TICKETS = [
  { t: "거리극 · 난장 · 개·폐막제", p: "무료", n: "누구나 자유 관람" },
  { t: "하다마당 (극장 초청작)", p: "1만 5천 원", n: "회당 지정석, 온라인 예매" },
  { t: "세계마임초청전", p: "2만 원", n: "해외 극단 초청작" },
  { t: "자유이용권 (8일권)", p: "3만 5천 원", n: "유료 공연 통합 + 굿즈 할인" },
];

export default function VisitPage() {
  return (
    <>
      <PageHero
        kicker="Visit"
        title={<>춘천으로<br />오는 길</>}
        desc={`${festival.periodKo} · ${festival.placeKo}. 도시 전체가 축제장이며, 대부분의 프로그램은 걸어서 이동할 수 있습니다.`}
      />

      <section className="pt-12">
        <Container>
          <Figure
            photo={photos.waterOpening}
            priority
            aspect="aspect-[16/9]"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading kicker="Venues" title="축제장" />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <ul className="space-y-3">
              {festival.venues.map((v, i) => (
                <li
                  key={v.ko}
                  className="reveal flex items-start gap-4 rounded-xl border border-paper/12 bg-ink-soft/40 p-4"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber font-display text-sm text-ink">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold">{v.ko}</p>
                    <p className="text-xs text-paper/45">{v.en}</p>
                    <p className="mt-1 text-sm text-paper/65">{v.role}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* 추상 배치도 */}
            <div className="reveal rounded-2xl border border-paper/12 bg-ink p-6">
              <VenueMap className="w-full" />
              <p className="mt-2 text-xs text-paper/40">
                * 실제 축제장 위치는 조직위 공식 지도를 확인하세요.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-paper/10 bg-ink-soft/25 py-16">
        <Container>
          <SectionHeading kicker="Getting here" title="교통" />
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {TRANSPORT.map((x) => (
              <li key={x.m} className="reveal rounded-xl border border-paper/12 bg-ink p-5">
                <h3 className="font-bold text-amber">{x.m}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-paper/70">{x.d}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading kicker="Tickets" title="티켓" />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-paper/20 text-left text-paper/50">
                  <th className="py-3 pr-4 font-medium">구분</th>
                  <th className="py-3 pr-4 font-medium">가격</th>
                  <th className="py-3 font-medium">비고</th>
                </tr>
              </thead>
              <tbody>
                {TICKETS.map((t) => (
                  <tr key={t.t} className="border-b border-paper/10">
                    <td className="py-3.5 pr-4 font-bold">{t.t}</td>
                    <td className="py-3.5 pr-4 text-amber">{t.p}</td>
                    <td className="py-3.5 text-paper/65">{t.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-paper/45">
            예매: 축제 공식 홈페이지 및 주요 예매처 · 가격은 예시입니다.
          </p>
        </Container>
      </section>

      <section className="border-t border-paper/10 py-16">
        <Container className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-lg text-amber">문의</h3>
            <p className="mt-3 text-sm text-paper/70">
              {festival.organizerKo}
              <br />
              {festival.contactEmail} · {festival.phone}
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-amber">숙박</h3>
            <p className="mt-3 text-sm text-paper/70">
              명동·석사동 일대 호텔·게스트하우스 도보 15분 내. 축제 기간 조기
              마감되니 미리 예약하세요.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
