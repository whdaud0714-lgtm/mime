import Link from "next/link";
import { Signature } from "@/components/brand";
import { ShareBar } from "@/components/share";
import { festival } from "@/lib/festival";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-paper/10 bg-ink-soft/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Signature className="text-xl text-paper" />
          <p className="mt-4 max-w-sm text-sm text-paper/60">
            {festival.taglineKo}
            <br />
            {festival.taglineEn}
          </p>
          <ShareBar className="mt-5" />
        </div>

        <div className="text-sm">
          <h4 className="font-display text-amber">바로가기</h4>
          <ul className="mt-3 space-y-2 text-paper/70">
            <li><Link href="/about" className="hover:text-amber">축제 소개</Link></li>
            <li><Link href="/program" className="hover:text-amber">프로그램</Link></li>
            <li><Link href="/visit" className="hover:text-amber">방문 안내</Link></li>
            <li><Link href="/brand" className="hover:text-amber">브랜드 전략·가이드</Link></li>
            <li><Link href="/bookmark" className="hover:text-amber">북마크 · 공유</Link></li>
            <li><Link href="/app" className="hover:text-amber">모바일 앱</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <h4 className="font-display text-amber">주최·주관</h4>
          <ul className="mt-3 space-y-2 text-paper/70">
            <li>주최 · {festival.hostKo}</li>
            <li>주관 · {festival.organizerKo}</li>
            <li>후원 · {festival.sponsorsKo.join(" / ")}</li>
            <li className="pt-2">{festival.contactEmail}</li>
            <li>{festival.phone}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 px-5 py-5 text-center text-xs leading-relaxed text-paper/40">
        © 2026 {festival.hostKo} · Chuncheon International Mime Festival.
        <br />
        본 사이트는 홍보 기획 프로젝트 산출물이며 일부 정보(주최·후원·티켓·연혁)는
        예시입니다. 사진·포스터 이미지의 저작권은 춘천마임축제에 있습니다.
      </div>
    </footer>
  );
}
