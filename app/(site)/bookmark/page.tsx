import type { Metadata } from "next";
import QRCode from "qrcode";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { SaveButton, ShareBar } from "@/components/share";
import { InstallPrompt } from "@/components/InstallPrompt";
import { Mascot } from "@/components/Mascot";
import { SITE_URL, festival } from "@/lib/festival";

export const metadata: Metadata = {
  title: "북마크 · 공유",
  description:
    "2026 춘천마임축제를 저장하고 공유하세요. QR 코드, 홈 화면 추가 안내, 잠금화면 배경 다운로드.",
};

export default async function BookmarkPage() {
  const qrSvg = await QRCode.toString(SITE_URL, {
    type: "svg",
    margin: 1,
    color: { dark: "#0e0e12", light: "#f6f2e9" },
  });

  return (
    <>
      <PageHero
        kicker="Bookmark"
        title={<>저장 한 번으로<br />축제가 따라온다</>}
        desc="이 링크 하나에 D-day, 프로그램표, 오시는 길, 공유 카드가 모두 있습니다. 저장하고 친구에게 보내 주세요 — 그게 세계인을 향한 초대장입니다."
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* QR + 링크 */}
          <div className="reveal rounded-3xl border border-paper/12 bg-ink-soft/40 p-8">
            <h2 className="font-display text-lg uppercase tracking-[0.16em] text-amber">
              스캔하거나, 링크를 복사하세요
            </h2>
            <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row">
              <div
                className="w-44 shrink-0 rounded-2xl bg-paper p-3"
                // qrcode 라이브러리가 생성한 정적 SVG
                dangerouslySetInnerHTML={{ __html: qrSvg }}
              />
              <div className="min-w-0">
                <p className="break-all rounded-lg border border-paper/15 bg-ink px-3 py-2 font-display text-sm text-paper/80">
                  {SITE_URL.replace(/^https?:\/\//, "")}
                </p>
                <div className="mt-3">
                  <ShareBar />
                </div>
              </div>
            </div>
          </div>

          {/* 저장 CTA */}
          <div className="reveal flex flex-col justify-center rounded-3xl border border-amber/40 bg-gradient-to-br from-ink-soft/70 to-ink p-8">
            <h2 className="text-2xl font-black">이 축제 저장하기</h2>
            <p className="mt-2 text-sm text-paper/70">
              브라우저에 저장돼 다음에 바로 열 수 있고, 개막 전 알림을 받을 수
              있습니다. (기기에만 저장되며 서버로 전송되지 않습니다.)
            </p>
            <div className="mt-6">
              <SaveButton />
            </div>
            <p className="mt-4 text-xs text-paper/45">
              단축키로도 저장 — Windows/Linux: Ctrl+D · macOS: ⌘+D
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-paper/10 bg-ink-soft/25 py-16">
        <Container>
          <SectionHeading kicker="Install" title="앱처럼 쓰기" />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <InstallPrompt />
            <div className="flex items-center gap-4 rounded-2xl border border-paper/12 bg-ink p-6">
              <Mascot className="h-28 w-24 shrink-0" wall={false} />
              <p className="text-sm text-paper/70">
                설치하면 미모(MIMO)가 홈 화면에서 기다립니다. 오프라인에서도
                프로그램표와 오시는 길을 볼 수 있어요.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            kicker="Kit"
            title="공유 키트"
            desc="직접 홍보에 쓸 수 있는 배경화면과 문구입니다."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <a
              href="/ccmf-2026-wallpaper.svg"
              download
              className="group flex items-center justify-between rounded-2xl border border-paper/12 bg-ink p-6 hover:border-amber/60"
            >
              <div>
                <p className="font-bold group-hover:text-amber">
                  잠금화면 배경 다운로드
                </p>
                <p className="mt-1 text-sm text-paper/55">
                  세로형 · “{festival.sloganKo}” · SVG
                </p>
              </div>
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-amber" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="rounded-2xl border border-paper/12 bg-ink p-6">
              <p className="font-bold">복사해서 쓰는 소개 문구</p>
              <p className="mt-2 rounded-lg bg-ink-soft/60 p-3 text-sm text-paper/75">
                {festival.editionKo} {festival.titleKo} ({festival.periodKo}) · {festival.placeKo}. 말이 필요 없는 몸의 언어로 즐기는 8일. 저장하고 함께 가요 → {SITE_URL.replace(/^https?:\/\//, "")}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
